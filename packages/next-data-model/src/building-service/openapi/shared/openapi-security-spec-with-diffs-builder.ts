import { Diff, DiffAction } from "@netcracker/qubership-apihub-api-diff"
import { BuildingServiceLogger } from "../../../loggers"
import { DiffsRecord, isArray, isObject } from "../../../utilities"
import { SecurityAlternativeSpec, SecuritySpec } from "../../security/security-spec"
import { UnknownRecord } from "../../security/security-spec-builder"
import { intersectSides, SecuritySpecDiffsDecorator } from "../../security/security-spec-diffs-decorator"
import { BOTH_SIDES, SideContext, SideReader } from "../../shared/side-reader"
import { OpenApiSecuritySpecBuilder } from "./openapi-security-spec-builder"
import { OpenApiOperationContext } from "./openapi-spec-transformer"

/** What the builder reads from the with-diffs transformer that owns it. */
export type OpenApiSecurityDiffsHost = {
  readonly reader: SideReader
  /** The sides where the operation exists. */
  readonly operationSides: () => SideContext
  /** Presence of the section per side (its synthetic whole add / remove). */
  readonly setPresence: (section: object, presence: SideContext) => void
}

/**
 * OpenAPI Security section with diff records: alternatives of one list (by index), or matched by
 * deep equality when the operation starts / stops overriding the document list; scheme records
 * under the requirement keys; definitions and required scopes by the shared decorator.
 * Design: docs/design/openapi/entities/security.md -> "Diffs".
 */
export class OpenApiSecuritySpecWithDiffsBuilder extends OpenApiSecuritySpecBuilder {
  private readonly decorator: SecuritySpecDiffsDecorator

  constructor(logger: BuildingServiceLogger, private readonly host: OpenApiSecurityDiffsHost) {
    super(logger)
    this.decorator = new SecuritySpecDiffsDecorator(host.reader, this.flowScopesKey)
  }

  private get reader(): SideReader {
    return this.host.reader
  }

  public override build(context: OpenApiOperationContext): SecuritySpec | undefined {
    const { source, operation } = context
    const operationSecurityField = this.reader.readField(operation, 'security', this.host.operationSides())
    const documentSecurityField = this.reader.readField(source, 'security', BOTH_SIDES)
    const beforeUsesOperation = operationSecurityField.beforePresent
    const afterUsesOperation = operationSecurityField.afterPresent
    if (beforeUsesOperation === afterUsesOperation) {
      const listField = beforeUsesOperation ? operationSecurityField : documentSecurityField
      const list = beforeUsesOperation ? operation.security : source.security
      return this.buildFromOneList(context, list, this.restrictToOperation(this.reader.childContext(listField)), !afterUsesOperation)
    }
    return this.buildFromSwitchedLists(
      context,
      beforeUsesOperation ? operationSecurityField.before : documentSecurityField.before,
      afterUsesOperation ? operationSecurityField.after : documentSecurityField.after,
      operationSecurityField.diff,
      !afterUsesOperation,
    )
  }

  /** The document list is shared by every operation: limit its sides to where the operation exists. */
  private restrictToOperation(context: SideContext): SideContext {
    return intersectSides(context, this.host.operationSides())
  }

  private buildFromOneList(context: OpenApiOperationContext, list: unknown, listContext: SideContext, isInheritedFromDocument: boolean): SecuritySpec | undefined {
    if (!isArray(list) || list.length === 0) {
      return undefined
    }
    const alternatives: SecurityAlternativeSpec[] = []
    const securityRecord: DiffsRecord = {}
    const presence = { before: false, after: false }
    list.forEach((requirement, index) => {
      if (!isObject(requirement)) {
        return
      }
      const alternativeField = this.reader.readField(list, index, listContext)
      const alternativeContext = this.reader.childContext(alternativeField)
      presence.before ||= alternativeContext.before
      presence.after ||= alternativeContext.after
      const alternative = this.buildAlternative(context, requirement)
      this.decorateAlternative(context, alternative, requirement, alternativeContext)
      const alternativeIndex = alternatives.length
      alternatives.push(alternative)
      if (SideReader.isWholeChange(alternativeField.diff)) {
        securityRecord[String(alternativeIndex)] = alternativeField.diff
      }
    })
    if (alternatives.length === 0) {
      return undefined
    }
    const security: SecuritySpec = { isInheritedFromDocument, alternatives }
    this.decorator.writeAlternativesDiff(securityRecord)
    this.reader.writeRecord(security, securityRecord)
    this.host.setPresence(security, presence)
    return security
  }

  /**
   * The operation starts / stops overriding the document list: alternatives are matched by deep
   * equality; unmatched after ones are added, unmatched before ones removed (appended).
   */
  private buildFromSwitchedLists(
    context: OpenApiOperationContext,
    beforeList: unknown,
    afterList: unknown,
    cause: Diff | undefined,
    isInheritedFromDocument: boolean,
  ): SecuritySpec | undefined {
    const before = isArray(beforeList) ? beforeList.filter(isObject) : []
    const after = isArray(afterList) ? afterList.filter(isObject) : []
    const unmatchedBefore = [...before]
    const alternatives: SecurityAlternativeSpec[] = []
    const securityRecord: DiffsRecord = {}
    for (const requirement of after) {
      const matchIndex = unmatchedBefore.findIndex(candidate => SideReader.deepEqual(candidate, requirement))
      if (matchIndex >= 0) {
        unmatchedBefore.splice(matchIndex, 1)
      } else {
        securityRecord[String(alternatives.length)] = this.reader.createDiff(DiffAction.add, { afterValue: requirement }, [cause])
      }
      alternatives.push(this.buildAlternative(context, requirement))
    }
    for (const requirement of unmatchedBefore) {
      securityRecord[String(alternatives.length)] = this.reader.createDiff(DiffAction.remove, { beforeValue: requirement }, [cause])
      alternatives.push(this.buildAlternative(context, requirement))
    }
    if (alternatives.length === 0) {
      return undefined
    }
    const security: SecuritySpec = { isInheritedFromDocument, alternatives }
    this.decorator.writeAlternativesDiff(securityRecord)
    this.reader.writeRecord(security, securityRecord)
    this.host.setPresence(security, { before: before.length > 0, after: after.length > 0 })
    return security
  }

  private decorateAlternative(
    context: OpenApiOperationContext,
    alternative: SecurityAlternativeSpec,
    requirement: UnknownRecord,
    alternativeContext: SideContext,
  ): void {
    const alternativeRecord: DiffsRecord = {}
    for (const name of alternative.schemeNames) {
      const schemeField = this.reader.readField(requirement, name, alternativeContext)
      if (SideReader.isWholeChange(schemeField.diff)) {
        alternativeRecord[name] = schemeField.diff
      }
      const scheme = alternative.schemes[name]
      const schemeContext = this.reader.childContext(schemeField)
      this.decorator.decorateRequiredScopes(scheme, requirement[name], schemeContext)
      const definition = this.takeDefinition(context, name)
      if (definition) {
        this.decorator.decorateSchemeDefinition(scheme, definition, intersectSides(this.definitionSides(context, name), schemeContext), schemeContext)
      }
    }
    this.reader.writeRecord(alternative, alternativeRecord)
  }

  /** The sides where `components.securitySchemes[name]` exists. */
  private definitionSides(context: OpenApiOperationContext, name: string): SideContext {
    const componentsField = this.reader.readField(context.source, 'components', BOTH_SIDES)
    const components = context.source.components
    const schemesField = this.reader.readField(components, 'securitySchemes', this.reader.childContext(componentsField))
    const securitySchemes = isObject(components) ? components.securitySchemes : undefined
    return this.reader.childContext(this.reader.readField(securitySchemes, name, this.reader.childContext(schemesField)))
  }
}
