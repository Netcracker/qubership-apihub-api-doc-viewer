import { aggregateDiffsWithRollup, Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { BuildingServiceLogger } from "../../../loggers"
import { NODE_LEVEL_DIFF_KEY } from "../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_OAUTH_FLOW_TYPES, OPENAPI_PARAMETER_LOCATIONS, OpenApiParameterLocation, OpenApiSynthesizedObjectSchema } from "../../../model/openapi/types/node-value"
import { isSpecificationExtensionKey } from "../../../model/specification-extension-key"
import { OpenApiOperationKeys } from "../../../shared/openapi/types/operation-keys"
import { DiffsRecord, isArray, isObject, isString } from "../../../utilities"
import { DiffMetaKeys } from "../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { OpenApiObjectSchemaWithDiffsSynthesizer } from "./object-schema-with-diffs-synthesizer"
import { OpenApiSchemaEntry } from "./object-schema-synthesizer"
import {
  OpenApiContentSpec,
  OpenApiExtensionsSpec,
  OpenApiOAuthFlowSpec,
  OpenApiOperationContext,
  OpenApiOperationOrientedSpec,
  OpenApiParametersSpec,
  OpenApiRequestBodySpec,
  OpenApiRequestSpec,
  OpenApiResponseHeadersSpec,
  OpenApiResponseSpec,
  OpenApiSecurityAlternativeSpec,
  OpenApiSecuritySchemeSpec,
  OpenApiSecuritySpec,
  OpenApiSpecTransformer,
} from "./openapi-spec-transformer"
import { BOTH_SIDES, OpenApiFieldSides, OpenApiSideContext, OpenApiSideReader } from "./side-reader"

type UnknownRecord = Record<PropertyKey, unknown>

const NO_SIDES: OpenApiSideContext = { before: false, after: false }

/** Scheme-definition field -> scheme spec field. */
const SECURITY_SCHEME_FIELDS: ReadonlyArray<readonly [string, string]> = [
  ['type', 'type'],
  ['description', 'description'],
  ['in', 'in'],
  ['name', 'parameterName'],
  ['scheme', 'scheme'],
  ['bearerFormat', 'bearerFormat'],
  ['openIdConnectUrl', 'openIdConnectUrl'],
]

const OAUTH_FLOW_FIELDS: readonly string[] = ['authorizationUrl', 'tokenUrl', 'refreshUrl']

/**
 * Merged `apiDiff` document -> operation-oriented spec with diff records attached for the
 * OpenAPI layer. Child-section diffs live in the parent's own record under the child key (where
 * `KindAny` inheritance reads them); synthetic whole-section diffs come from presence per side.
 * Design: docs/design/openapi/features/diffs.md
 */
export class OpenApiSpecWithDiffsTransformer extends OpenApiSpecTransformer {
  private readonly reader: OpenApiSideReader
  private readonly presence = new WeakMap<object, OpenApiSideContext>()
  private operationSides: OpenApiSideContext = BOTH_SIDES
  private wholeOperationDiff: Diff | undefined
  private addressDiff: Diff | undefined

  constructor(logger: BuildingServiceLogger, private readonly diffMetaKeys: DiffMetaKeys) {
    super(logger)
    this.reader = new OpenApiSideReader(diffMetaKeys.diffsMetaKey)
  }

  public override transform(source: unknown, operationKeys?: OpenApiOperationKeys): OpenApiOperationOrientedSpec | null {
    const spec = super.transform(source, operationKeys)
    if (!spec) {
      return null
    }
    // IMPORTANT: roll diffs up on the TRANSFORMED spec, so relocated and synthetic records count.
    aggregateDiffsWithRollup(spec, this.diffMetaKeys.diffsMetaKey, this.diffMetaKeys.aggregatedDiffsMetaKey)
    return spec
  }

  /* Operation */

  protected override buildSpec(context: OpenApiOperationContext): OpenApiOperationOrientedSpec {
    this.resolveOperationSides(context)
    const spec = super.buildSpec(context)
    const operationRecord = this.reader.record(context.operation) ?? {}
    const rootRecord: DiffsRecord = {}
    if (this.wholeOperationDiff) {
      rootRecord[NODE_LEVEL_DIFF_KEY] = this.wholeOperationDiff
    }
    const fieldMapping: ReadonlyArray<readonly [string, string]> = [
      ['summary', 'title'],
      ['operationId', 'operationId'],
      ['description', 'description'],
      ['externalDocs', 'externalDocs'],
    ]
    for (const [sourceKey, targetKey] of fieldMapping) {
      const diff = operationRecord[sourceKey]
      if (diff) {
        rootRecord[targetKey] = diff
      }
    }
    const deprecatedDiff = this.normalizeFlagDiff(this.reader.readField(context.operation, 'deprecated', this.operationSides))
    if (deprecatedDiff) {
      rootRecord.deprecated = deprecatedDiff
    }
    if (this.addressDiff) {
      rootRecord.path = this.addressDiff
    }
    const nestedExternalDocsDiff = this.resolveNestedExternalDocsDiff(context.operation)
    if (!rootRecord.externalDocs && nestedExternalDocsDiff) {
      rootRecord.externalDocs = nestedExternalDocsDiff
    }
    this.reader.writeRecord(spec, rootRecord)

    // Operation extensions
    if (spec.data.extensions) {
      this.decorateExtensions(spec.data.extensions, context.operation, this.operationSides)
    }
    // Responses extensions
    const responsesField = this.reader.readField(context.operation, 'responses', this.operationSides)
    if (spec.data.responsesExtensions) {
      this.decorateExtensions(spec.data.responsesExtensions, context.operation.responses, this.reader.childContext(responsesField))
    }
    if (spec.data.responses) {
      const codesPresence = this.presenceOf(spec.data.responses)
      const extensionsPresence = spec.data.responsesExtensions ? this.presenceOf(spec.data.responsesExtensions) : NO_SIDES
      this.presence.set(spec.data.responses, {
        before: codesPresence.before || extensionsPresence.before,
        after: codesPresence.after || extensionsPresence.after,
      })
    }

    for (const sectionKey of ['security', 'extensions', 'request', 'responses', 'responsesExtensions'] as const) {
      const section = spec.data[sectionKey]
      if (section) {
        this.writeSectionDiff(spec, sectionKey, section, undefined, sectionKey === 'responses' ? responsesField.diff : undefined)
      }
    }
    return spec
  }

  /**
   * `externalDocs.url` / `.description` changed inside an existing object: one replace of the whole
   * external docs value carrying both sides (the link text is static; the row needs per-side values).
   */
  private resolveNestedExternalDocsDiff(operation: UnknownRecord): Diff | undefined {
    const externalDocsField = this.reader.readField(operation, 'externalDocs', this.operationSides)
    if (!externalDocsField.beforePresent || !externalDocsField.afterPresent) {
      return undefined
    }
    const context = this.reader.childContext(externalDocsField)
    const url = this.reader.readField(operation.externalDocs, 'url', context)
    const description = this.reader.readField(operation.externalDocs, 'description', context)
    if (!url.diff && !description.diff) {
      return undefined
    }
    return this.reader.createDiff(
      DiffAction.replace,
      {
        beforeValue: { url: url.before, description: description.before },
        afterValue: { url: url.after, description: description.after },
      },
      [url.diff, description.diff],
    )
  }

  private resolveOperationSides(context: OpenApiOperationContext): void {
    const { source, keys } = context
    const paths = source.paths
    const pathItemField = this.reader.readField(paths, keys.path, BOTH_SIDES)
    const operationField = this.reader.readField(paths && isObject(paths) ? paths[keys.path] : undefined, keys.method, this.reader.childContext(pathItemField))
    this.operationSides = this.reader.childContext(operationField)
    const wholeOperationDiff = [operationField.diff, pathItemField.diff].find(diff => OpenApiSideReader.isWholeChange(diff))
    this.wholeOperationDiff = wholeOperationDiff
    const pathDiff = pathItemField.diff
    this.addressDiff = pathDiff && isDiffRename(pathDiff) && isString(pathDiff.beforeKey) && isString(pathDiff.afterKey)
      ? {
        type: pathDiff.type,
        scope: pathDiff.scope,
        action: DiffAction.replace,
        beforeValue: pathDiff.beforeKey,
        afterValue: pathDiff.afterKey,
        beforeDeclarationPaths: pathDiff.beforeDeclarationPaths,
        afterDeclarationPaths: pathDiff.afterDeclarationPaths,
      }
      : undefined
  }

  /* Security */

  protected override buildSecurity(context: OpenApiOperationContext): OpenApiSecuritySpec | undefined {
    const { source, operation } = context
    const operationSecurityField = this.reader.readField(operation, 'security', this.operationSides)
    const documentSecurityField = this.reader.readField(source, 'security', BOTH_SIDES)
    const beforeUsesOperation = operationSecurityField.beforePresent
    const afterUsesOperation = operationSecurityField.afterPresent

    let security: OpenApiSecuritySpec | undefined
    if (beforeUsesOperation === afterUsesOperation) {
      const listField = beforeUsesOperation ? operationSecurityField : documentSecurityField
      const list = beforeUsesOperation ? operation.security : source.security
      security = this.buildSecurityFromOneList(context, list, this.restrictToOperation(this.reader.childContext(listField)), !afterUsesOperation)
    } else {
      security = this.buildSecurityFromSwitchedLists(
        context,
        beforeUsesOperation ? operationSecurityField.before : documentSecurityField.before,
        afterUsesOperation ? operationSecurityField.after : documentSecurityField.after,
        operationSecurityField.diff,
        !afterUsesOperation,
      )
    }
    return security
  }

  /** The document list is shared by every operation: limit its sides to where the operation exists. */
  private restrictToOperation(context: OpenApiSideContext): OpenApiSideContext {
    return { before: context.before && this.operationSides.before, after: context.after && this.operationSides.after }
  }

  private buildSecurityFromOneList(
    context: OpenApiOperationContext,
    list: unknown,
    listContext: OpenApiSideContext,
    isInheritedFromDocument: boolean,
  ): OpenApiSecuritySpec | undefined {
    if (!isArray(list) || list.length === 0) {
      return undefined
    }
    const alternatives: OpenApiSecurityAlternativeSpec[] = []
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
      const alternative = this.buildSecurityAlternative(context, requirement)
      this.decorateSecurityAlternative(context, alternative, requirement, alternativeContext)
      const alternativeIndex = alternatives.length
      alternatives.push(alternative)
      if (OpenApiSideReader.isWholeChange(alternativeField.diff)) {
        securityRecord[String(alternativeIndex)] = alternativeField.diff
      }
    })
    if (alternatives.length === 0) {
      return undefined
    }
    const security: OpenApiSecuritySpec = { isInheritedFromDocument, alternatives }
    this.reader.writeRecord(security, securityRecord)
    this.presence.set(security, presence)
    return security
  }

  /**
   * The operation starts / stops overriding the document list: alternatives are matched by deep
   * equality; unmatched after ones are added, unmatched before ones removed (appended).
   */
  private buildSecurityFromSwitchedLists(
    context: OpenApiOperationContext,
    beforeList: unknown,
    afterList: unknown,
    cause: Diff | undefined,
    isInheritedFromDocument: boolean,
  ): OpenApiSecuritySpec | undefined {
    const before = isArray(beforeList) ? beforeList.filter(isObject) : []
    const after = isArray(afterList) ? afterList.filter(isObject) : []
    const unmatchedBefore = [...before]
    const alternatives: OpenApiSecurityAlternativeSpec[] = []
    const securityRecord: DiffsRecord = {}
    for (const requirement of after) {
      const matchIndex = unmatchedBefore.findIndex(candidate => OpenApiSideReader.deepEqual(candidate, requirement))
      if (matchIndex >= 0) {
        unmatchedBefore.splice(matchIndex, 1)
      } else {
        securityRecord[String(alternatives.length)] = this.reader.createDiff(DiffAction.add, { afterValue: requirement }, [cause])
      }
      alternatives.push(this.buildSecurityAlternative(context, requirement))
    }
    for (const requirement of unmatchedBefore) {
      securityRecord[String(alternatives.length)] = this.reader.createDiff(DiffAction.remove, { beforeValue: requirement }, [cause])
      alternatives.push(this.buildSecurityAlternative(context, requirement))
    }
    if (alternatives.length === 0) {
      return undefined
    }
    const security: OpenApiSecuritySpec = { isInheritedFromDocument, alternatives }
    this.reader.writeRecord(security, securityRecord)
    this.presence.set(security, { before: before.length > 0, after: after.length > 0 })
    return security
  }

  private decorateSecurityAlternative(
    context: OpenApiOperationContext,
    alternative: OpenApiSecurityAlternativeSpec,
    requirement: UnknownRecord,
    alternativeContext: OpenApiSideContext,
  ): void {
    const alternativeRecord: DiffsRecord = {}
    for (const name of alternative.schemeNames) {
      const schemeField = this.reader.readField(requirement, name, alternativeContext)
      if (OpenApiSideReader.isWholeChange(schemeField.diff)) {
        alternativeRecord[name] = schemeField.diff
      }
      const scheme = alternative.schemes[name]
      const schemeContext = this.reader.childContext(schemeField)
      this.decorateRequiredScopes(scheme, requirement[name], schemeContext)
      this.decorateSecuritySchemeDefinition(context, scheme, schemeContext)
    }
    this.reader.writeRecord(alternative, alternativeRecord)
  }

  /** Scope list changes become one `requiredScopes` replace carrying both side lists. */
  private decorateRequiredScopes(scheme: OpenApiSecuritySchemeSpec, scopes: unknown, scopesContext: OpenApiSideContext): void {
    if (!scopesContext.before || !scopesContext.after || !isArray(scopes)) {
      return
    }
    const before: string[] = []
    const after: string[] = []
    const causes: (Diff | undefined)[] = []
    scopes.forEach((scope, index) => {
      const scopeField = this.reader.readField(scopes, index, scopesContext)
      if (scopeField.diff) {
        causes.push(scopeField.diff)
      }
      if (scopeField.beforePresent && isString(scopeField.before)) {
        before.push(scopeField.before)
      }
      if (scopeField.afterPresent && isString(scope)) {
        after.push(scope)
      }
    })
    const diff = this.reader.diffShownValues(before.length > 0 ? before : undefined, after.length > 0 ? after : undefined, causes)
    this.reader.writeDiff(scheme, 'requiredScopes', diff)
  }

  private decorateSecuritySchemeDefinition(context: OpenApiOperationContext, scheme: OpenApiSecuritySchemeSpec, schemeContext: OpenApiSideContext): void {
    const componentsField = this.reader.readField(context.source, 'components', BOTH_SIDES)
    const components = context.source.components
    const schemesField = this.reader.readField(components, 'securitySchemes', this.reader.childContext(componentsField))
    const securitySchemes = isObject(components) ? components.securitySchemes : undefined
    const definitionField = this.reader.readField(securitySchemes, scheme.name, this.reader.childContext(schemesField))
    const definition = isObject(securitySchemes) ? securitySchemes[scheme.name] : undefined
    if (!isObject(definition)) {
      return
    }
    const definitionContext = this.intersect(this.reader.childContext(definitionField), schemeContext)
    const schemeRecord: DiffsRecord = {}
    for (const [sourceKey, targetKey] of SECURITY_SCHEME_FIELDS) {
      const diff = this.diffOfField(definition, sourceKey, definitionContext, schemeContext)
      if (diff) {
        schemeRecord[targetKey] = diff
      }
    }
    const flowsField = this.reader.readField(definition, 'flows', definitionContext)
    const flows = definition.flows
    if (isObject(flows) && scheme.flows) {
      const flowsContext = this.reader.childContext(flowsField)
      for (const flowType of OPENAPI_OAUTH_FLOW_TYPES) {
        const flowSpec = scheme.flows[flowType]
        const flow = flows[flowType]
        if (!flowSpec || !isObject(flow)) {
          continue
        }
        const flowField = this.reader.readField(flows, flowType, flowsContext)
        const flowContext = this.reader.childContext(flowField)
        const flowDiff = this.reader.diffPresence(this.intersect(flowContext, schemeContext), flowSpec, [flowField.diff, flowsField.diff])
        if (flowDiff && schemeContext.before && schemeContext.after) {
          schemeRecord[flowType] = flowDiff
        }
        this.decorateOAuthFlow(flowSpec, flow, this.intersect(flowContext, schemeContext), schemeContext)
      }
    }
    this.reader.writeRecord(scheme, schemeRecord)
  }

  private decorateOAuthFlow(flowSpec: OpenApiOAuthFlowSpec, flow: UnknownRecord, flowContext: OpenApiSideContext, schemeContext: OpenApiSideContext): void {
    const flowRecord: DiffsRecord = {}
    for (const field of OAUTH_FLOW_FIELDS) {
      const diff = this.diffOfField(flow, field, flowContext, schemeContext)
      if (diff) {
        flowRecord[field] = diff
      }
    }
    const scopesField = this.reader.readField(flow, 'scopes', flowContext)
    const scopes = flow.scopes
    if (isObject(scopes) && flowContext.before && flowContext.after) {
      const scopesContext = this.reader.childContext(scopesField)
      const before: UnknownRecord = {}
      const after: UnknownRecord = {}
      const causes: (Diff | undefined)[] = [scopesField.diff]
      for (const scope of Object.keys(scopes)) {
        const scopeField = this.reader.readField(scopes, scope, scopesContext)
        causes.push(scopeField.diff)
        if (scopeField.beforePresent) {
          before[scope] = scopeField.before
        }
        if (scopeField.afterPresent) {
          after[scope] = scopeField.after
        }
      }
      const diff = this.reader.diffShownValues(before, after, causes)
      if (diff) {
        flowRecord.scopes = diff
      }
    }
    this.reader.writeRecord(flowSpec, flowRecord)
  }

  /**
   * Field diff of a definition field shown inside a card that exists on `schemeContext` sides:
   * the raw diff when the definition exists on both of those sides, else a diff of the shown values.
   */
  private diffOfField(owner: UnknownRecord, key: string, ownerContext: OpenApiSideContext, schemeContext: OpenApiSideContext): Diff | undefined {
    const field = this.reader.readField(owner, key, ownerContext)
    if (!schemeContext.before || !schemeContext.after) {
      return undefined // a wholly added / removed card is painted by its own node-level diff
    }
    if (ownerContext.before && ownerContext.after) {
      return field.diff
    }
    return this.reader.diffShownValues(field.before, field.after, [field.diff])
  }

  private intersect(a: OpenApiSideContext, b: OpenApiSideContext): OpenApiSideContext {
    return { before: a.before && b.before, after: a.after && b.after }
  }

  /* Request */

  protected override buildRequest(context: OpenApiOperationContext): OpenApiRequestSpec | undefined {
    const request = super.buildRequest(context)
    if (!request) {
      return undefined
    }
    const presence = { before: false, after: false }
    for (const location of OPENAPI_PARAMETER_LOCATIONS) {
      const group = request.parameters?.[location]
      if (group) {
        this.writeSectionDiff(request, location, group)
        this.mergePresence(presence, this.presenceOf(group))
      }
    }
    if (request.requestBody) {
      const requestBodyField = this.reader.readField(context.operation, 'requestBody', this.operationSides)
      this.writeSectionDiff(request, 'requestBody', request.requestBody, undefined, requestBodyField.diff)
      this.mergePresence(presence, this.presenceOf(request.requestBody))
    }
    this.presence.set(request, presence)
    return request
  }

  protected override buildParameterGroups(context: OpenApiOperationContext): Partial<Record<OpenApiParameterLocation, OpenApiParametersSpec>> | undefined {
    const groups = super.buildParameterGroups(context)
    if (!groups) {
      return undefined
    }
    const parametersField = this.reader.readField(context.operation, 'parameters', this.operationSides)
    const parametersContext = this.reader.childContext(parametersField)
    const entriesByLocation = this.collectParameterEntries(context)
    for (const location of OPENAPI_PARAMETER_LOCATIONS) {
      const group = groups[location]
      if (group) {
        this.presence.set(group, this.entriesPresence(entriesByLocation.get(location) ?? [], context.operation.parameters, parametersContext))
      }
    }
    return groups
  }

  protected override synthesizeParameters(context: OpenApiOperationContext, entries: readonly OpenApiSchemaEntry[]): OpenApiSynthesizedObjectSchema {
    const parametersField = this.reader.readField(context.operation, 'parameters', this.operationSides)
    return this.createSchemaWithDiffsSynthesizer().synthesizeWithDiffs(entries, {
      owner: context.operation.parameters,
      context: this.reader.childContext(parametersField),
      inheritedWholeDiff: this.wholeOperationDiff ?? this.wholeDiffOf(parametersField),
    })
  }

  protected override buildRequestBody(context: OpenApiOperationContext): OpenApiRequestBodySpec | undefined {
    const requestBodySpec = super.buildRequestBody(context)
    const requestBody = context.operation.requestBody
    if (!requestBodySpec || !isObject(requestBody)) {
      return requestBodySpec
    }
    const requestBodyField = this.reader.readField(context.operation, 'requestBody', this.operationSides)
    const requestBodyContext = this.reader.childContext(requestBodyField)
    const record = this.reader.record(requestBody) ?? {}
    const requestBodyRecord: DiffsRecord = {}
    if (record.description) {
      requestBodyRecord.description = record.description
    }
    const requiredDiff = this.normalizeFlagDiff(this.reader.readField(requestBody, 'required', requestBodyContext))
    if (requiredDiff) {
      requestBodyRecord.required = requiredDiff
    }

    const descriptionField = this.reader.readField(requestBody, 'description', requestBodyContext)
    const presence = {
      before: descriptionField.beforePresent && isNonEmptyString(descriptionField.before),
      after: descriptionField.afterPresent && isNonEmptyString(descriptionField.after),
    }
    if (requestBodySpec.content) {
      const contentField = this.reader.readField(requestBody, 'content', requestBodyContext)
      const optionsPresence = this.decorateContent(requestBodySpec.content, requestBody.content, this.reader.childContext(contentField), [
        { owner: requestBody, context: requestBodyContext },
      ], contentField.diff)
      this.mergePresence(presence, optionsPresence)
      this.writeSectionDiff(requestBodySpec, 'content', requestBodySpec.content, optionsPresence, contentField.diff)
    }
    this.reader.writeRecord(requestBodySpec, requestBodyRecord)
    this.presence.set(requestBodySpec, presence)
    return requestBodySpec
  }

  /**
   * Options are media types with a schema: option presence = schema presence. Writes option diffs
   * (raw add / remove / rename, else synthetic from schema presence) and the diffs of extensions
   * cloned into the schema root. Returns the presence of "≥1 option".
   */
  private decorateContent(
    contentSpec: OpenApiContentSpec,
    content: unknown,
    contentContext: OpenApiSideContext,
    owners: ReadonlyArray<{ owner: UnknownRecord, context: OpenApiSideContext }>,
    contentDiff: Diff | undefined,
  ): OpenApiSideContext {
    const presence = { before: false, after: false }
    const contentRecord: DiffsRecord = {}
    for (const mediaType of Object.keys(contentSpec)) {
      const mediaTypeSpec = contentSpec[mediaType]
      const mediaTypeObject = isObject(content) ? content[mediaType] : undefined
      if (!isObject(mediaTypeObject)) {
        continue
      }
      const mediaTypeField = this.reader.readField(content, mediaType, contentContext)
      const mediaTypeContext = this.reader.childContext(mediaTypeField)
      const schemaField = this.reader.readField(mediaTypeObject, 'schema', mediaTypeContext)
      const optionPresence = this.reader.childContext(schemaField)
      this.mergePresence(presence, optionPresence)
      const rawDiff = mediaTypeField.diff
      const optionDiff = rawDiff && (isDiffAdd(rawDiff) || isDiffRemove(rawDiff) || isDiffRename(rawDiff))
        ? rawDiff
        : this.reader.diffPresence(optionPresence, mediaTypeSpec, [schemaField.diff, rawDiff, contentDiff])
      if (optionDiff) {
        contentRecord[mediaType] = optionDiff
      }
      this.decorateClonedExtensions(mediaTypeSpec, mediaTypeObject, [{ owner: mediaTypeObject, context: mediaTypeContext }, ...owners], optionPresence)
    }
    this.reader.writeRecord(contentSpec, contentRecord)
    return presence
  }

  /** Per-key precedence: owners in order (media type, request body), then the schema root. */
  private decorateClonedExtensions(
    mediaTypeSpec: { schema?: unknown },
    mediaTypeObject: UnknownRecord,
    owners: ReadonlyArray<{ owner: UnknownRecord, context: OpenApiSideContext }>,
    schemaContext: OpenApiSideContext,
  ): void {
    const keys = new Set<string>()
    for (const { owner } of owners) {
      Object.keys(owner).filter(isSpecificationExtensionKey).forEach(key => keys.add(key))
    }
    if (keys.size === 0 || !isObject(mediaTypeSpec.schema)) {
      return
    }
    if (mediaTypeSpec.schema === mediaTypeObject.schema) {
      mediaTypeSpec.schema = { ...mediaTypeSpec.schema }
    }
    const schema = mediaTypeSpec.schema
    if (!isObject(schema)) {
      return
    }
    const rawSchema = mediaTypeObject.schema
    for (const key of keys) {
      const fields = owners.map(({ owner, context }) => this.reader.readField(owner, key, this.intersect(context, schemaContext)))
      const rootField = this.reader.readField(rawSchema, key, schemaContext)
      const shownBefore = [...fields, rootField].find(field => field.beforePresent)?.before
      const shownAfter = [...fields, rootField].find(field => field.afterPresent)?.after
      const shown = shownAfter ?? shownBefore
      if (shown !== undefined) {
        schema[key] = shown
      }
      const diff = schemaContext.before && schemaContext.after
        ? this.reader.diffShownValues(shownBefore, shownAfter, [...fields, rootField].map(field => field.diff))
        : undefined
      const record: DiffsRecord = { ...(this.reader.record(schema) ?? {}) }
      delete record[key]
      if (diff) {
        record[key] = diff
      }
      Reflect.set(schema, this.reader.diffsMetaKey, record)
    }
  }

  /* Responses */

  protected override buildResponses(context: OpenApiOperationContext, hasResponsesExtensions: boolean): Record<string, OpenApiResponseSpec> | undefined {
    const responsesSpec = super.buildResponses(context, hasResponsesExtensions)
    const responses = context.operation.responses
    if (!responsesSpec || !isObject(responses)) {
      return responsesSpec
    }
    const responsesField = this.reader.readField(context.operation, 'responses', this.operationSides)
    const responsesContext = this.reader.childContext(responsesField)
    const responsesRecord: DiffsRecord = {}
    const presence = { before: false, after: false }
    for (const code of Object.keys(responsesSpec)) {
      const responseField = this.reader.readField(responses, code, responsesContext)
      this.mergePresence(presence, this.reader.childContext(responseField))
      const diff = responseField.diff
      if (diff && (isDiffAdd(diff) || isDiffRemove(diff) || isDiffRename(diff))) {
        responsesRecord[code] = diff
      }
    }
    this.reader.writeRecord(responsesSpec, responsesRecord)
    this.presence.set(responsesSpec, presence)
    return responsesSpec
  }

  protected override buildResponse(context: OpenApiOperationContext, code: string, response: UnknownRecord): OpenApiResponseSpec {
    const responseSpec = super.buildResponse(context, code, response)
    const responseContext = this.responseContext(context, code)
    const responseRecord: DiffsRecord = {}
    const description = this.reader.record(response)?.description
    if (description) {
      responseRecord.description = description
    }
    this.reader.writeRecord(responseSpec, responseRecord)
    if (responseSpec.headers) {
      const headersField = this.reader.readField(response, 'headers', responseContext)
      this.writeSectionDiff(responseSpec, 'headers', responseSpec.headers, undefined, headersField.diff)
    }
    if (responseSpec.extensions) {
      this.decorateExtensions(responseSpec.extensions, response, responseContext)
      this.writeSectionDiff(responseSpec, 'extensions', responseSpec.extensions)
    }
    if (responseSpec.content) {
      const contentField = this.reader.readField(response, 'content', responseContext)
      const optionsPresence = this.decorateContent(responseSpec.content, response.content, this.reader.childContext(contentField), [], contentField.diff)
      this.writeSectionDiff(responseSpec, 'content', responseSpec.content, optionsPresence, contentField.diff)
    }
    return responseSpec
  }

  protected override buildResponseHeaders(context: OpenApiOperationContext, code: string, response: UnknownRecord): OpenApiResponseHeadersSpec | undefined {
    const entries = this.collectHeaderEntries(response)
    if (entries.length === 0) {
      return undefined
    }
    const responseContext = this.responseContext(context, code)
    const headersField = this.reader.readField(response, 'headers', responseContext)
    const headersContext = this.reader.childContext(headersField)
    const responseField = this.responseField(context, code)
    const inheritedWholeDiff = this.wholeOperationDiff
      ?? this.wholeDiffOf(this.reader.readField(context.operation, 'responses', this.operationSides))
      ?? this.wholeDiffOf(responseField)
      ?? this.wholeDiffOf(headersField)
    const headers: OpenApiResponseHeadersSpec = {
      schema: this.createSchemaWithDiffsSynthesizer().synthesizeWithDiffs(entries, { owner: response.headers, context: headersContext, inheritedWholeDiff }),
    }
    this.presence.set(headers, this.entriesPresence(entries, response.headers, headersContext))
    return headers
  }

  private responseField(context: OpenApiOperationContext, code: string): OpenApiFieldSides {
    const responsesField = this.reader.readField(context.operation, 'responses', this.operationSides)
    return this.reader.readField(context.operation.responses, code, this.reader.childContext(responsesField))
  }

  private responseContext(context: OpenApiOperationContext, code: string): OpenApiSideContext {
    return this.reader.childContext(this.responseField(context, code))
  }

  /* Shared */

  /** Copies the owner's `x-*` diffs onto the extensions map and records its presence (≥1 key). */
  private decorateExtensions(extensions: OpenApiExtensionsSpec, owner: unknown, ownerContext: OpenApiSideContext): void {
    const record: DiffsRecord = {}
    const presence = { before: false, after: false }
    const ownerRecord = this.reader.record(owner) ?? {}
    for (const key of Object.keys(extensions)) {
      const field = this.reader.readField(owner, key, ownerContext)
      presence.before ||= field.beforePresent
      presence.after ||= field.afterPresent
      const diff = ownerRecord[key]
      if (diff) {
        record[key] = diff
      } else if (field.beforePresent !== field.afterPresent) {
        // The owner (operation, response, ...) exists on one side only: the separate JSO tree needs
        // per-key diffs to show the value on that side only.
        record[key] = this.reader.diffPresence(this.reader.childContext(field), field.beforePresent ? field.before : field.after, [this.wholeOperationDiff])
      }
    }
    this.reader.writeRecord(extensions, record)
    this.presence.set(extensions, presence)
  }

  private entriesPresence(entries: readonly OpenApiSchemaEntry[], owner: unknown, ownerContext: OpenApiSideContext): OpenApiSideContext {
    const presence = { before: false, after: false }
    for (const entry of entries) {
      this.mergePresence(presence, this.reader.childContext(this.reader.readField(owner, entry.recordKey, ownerContext)))
    }
    return presence
  }

  /**
   * Whole-section diff of `section` in `owner`'s record under `key`: a synthetic add / remove when
   * the section's presence flips. Under a wholly added / removed operation nothing is written -
   * every node inherits the operation diff.
   */
  private writeSectionDiff(
    owner: object,
    key: string,
    section: object,
    presence: OpenApiSideContext = this.presenceOf(section),
    rawSectionDiff?: Diff,
  ): void {
    if (this.wholeOperationDiff) {
      return
    }
    const current = this.reader.record(owner)?.[key]
    if (current && (isDiffAdd(current) || isDiffRemove(current) || isDiffRename(current))) {
      return
    }
    // A raw add / remove of the section object itself (e.g. a whole `content` map) wins over a synthetic one.
    const diff = rawSectionDiff && OpenApiSideReader.isWholeChange(rawSectionDiff)
      ? rawSectionDiff
      : this.reader.diffPresence(presence, section, [rawSectionDiff, ...this.reader.collectDiffs(section)])
    this.reader.writeDiff(owner, key, diff)
  }

  private presenceOf(section: object): OpenApiSideContext {
    return this.presence.get(section) ?? BOTH_SIDES
  }

  private mergePresence(target: { before: boolean, after: boolean }, source: OpenApiSideContext): void {
    target.before ||= source.before
    target.after ||= source.after
  }

  private wholeDiffOf(field: OpenApiFieldSides): Diff | undefined {
    return OpenApiSideReader.isWholeChange(field.diff) ? field.diff : undefined
  }

  /**
   * Boolean flags (`deprecated`, `required`) default to `false` in api-unifier: a diff may report
   * `false -> true` although one document omits the key (E5). Normalized to add (became true) /
   * remove (became false); no diff when the effective value is unchanged.
   */
  private normalizeFlagDiff(field: OpenApiFieldSides): Diff | undefined {
    const { diff } = field
    if (!diff || !(isDiffAdd(diff) || isDiffRemove(diff) || isDiffReplace(diff))) {
      return undefined
    }
    const before = field.before === true
    const after = field.after === true
    if (before === after) {
      return undefined
    }
    return after
      ? this.reader.createDiff(DiffAction.add, { afterValue: true }, [diff])
      : this.reader.createDiff(DiffAction.remove, { beforeValue: true }, [diff])
  }

  private createSchemaWithDiffsSynthesizer(): OpenApiObjectSchemaWithDiffsSynthesizer {
    return new OpenApiObjectSchemaWithDiffsSynthesizer(this.reader)
  }
}

function isNonEmptyString(value: unknown): boolean {
  return isString(value) && value.length > 0
}
