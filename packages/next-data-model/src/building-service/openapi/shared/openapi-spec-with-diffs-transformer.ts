import { aggregateDiffsWithRollup, Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { BuildingServiceLogger } from "../../../loggers"
import { NODE_LEVEL_DIFF_KEY } from "../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY, OPENAPI_RESPONSE_OPTIONS_DIFF_KEY } from "../../../model/openapi/tree-with-diffs/diff-keys"
import { OPENAPI_PARAMETER_LOCATIONS, OpenApiParameterLocation, OpenApiSynthesizedObjectSchema } from "../../../model/openapi/types/node-value"
import { isSpecificationExtensionKey } from "../../../model/specification-extension-key"
import { OpenApiOperationKeys } from "../../../shared/openapi/types/operation-keys"
import { DiffsRecord, isObject, isString } from "../../../utilities"
import { DiffMetaKeys } from "../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { OpenApiObjectSchemaWithDiffsSynthesizer } from "./object-schema-with-diffs-synthesizer"
import { OpenApiSecuritySpecWithDiffsBuilder } from "./openapi-security-spec-with-diffs-builder"
import { OpenApiSchemaEntry } from "./object-schema-synthesizer"
import { OpenApiContentSpec, OpenApiExtensionsSpec, OpenApiOperationContext, OpenApiOperationOrientedSpec, OpenApiParametersSpec, OpenApiRequestBodySpec, OpenApiRequestSpec, OpenApiResponseHeadersSpec, OpenApiResponseSpec, OpenApiSpecTransformer } from "./openapi-spec-transformer"
import { BOTH_SIDES, FieldSides, SideContext, SideReader } from "../../shared/side-reader"

type UnknownRecord = Record<PropertyKey, unknown>

const NO_SIDES: SideContext = { before: false, after: false }

/** A response-code range (`1XX` … `5XX`), matched case-insensitively. */
const RESPONSE_CODE_RANGE = /^[1-5]xx$/i

/**
 * Merged `apiDiff` document -> operation-oriented spec with diff records attached for the
 * OpenAPI layer. Child-section diffs live in the parent's own record under the child key (where
 * `KindAny` inheritance reads them); synthetic whole-section diffs come from presence per side.
 * Design: docs/design/openapi/features/diffs.md
 */
export class OpenApiSpecWithDiffsTransformer extends OpenApiSpecTransformer {
  private readonly reader: SideReader
  private readonly presence = new WeakMap<object, SideContext>()
  private operationSides: SideContext = BOTH_SIDES
  private wholeOperationDiff: Diff | undefined
  private addressDiff: Diff | undefined

  constructor(logger: BuildingServiceLogger, private readonly diffMetaKeys: DiffMetaKeys) {
    super(logger)
    this.reader = new SideReader(diffMetaKeys.diffsMetaKey)
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
    const wholeOperationDiff = [operationField.diff, pathItemField.diff].find(diff => SideReader.isWholeChange(diff))
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

  protected override createSecuritySpecBuilder(): OpenApiSecuritySpecWithDiffsBuilder {
    return new OpenApiSecuritySpecWithDiffsBuilder(this.logger, {
      reader: this.reader,
      operationSides: () => this.operationSides,
      setPresence: (section, presence) => this.presence.set(section, presence),
    })
  }

  /** Media-type / response-code options: a wholly added / removed or renamed option paints the selector's row. */
  private static isKeyedOptionChange(diff: Diff | undefined): boolean {
    return SideReader.isWholeChange(diff) || SideReader.isRename(diff)
  }

  private intersect(a: SideContext, b: SideContext): SideContext {
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
      ], contentField.diff, requestBodyRecord)
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
   * A wholly added / removed or renamed option writes the synthetic media-type options diff of the
   * Body header row into `headerRecord` (the request body's record), else into the content's own
   * record (the response Body header is painted by its `content` node).
   */
  private decorateContent(
    contentSpec: OpenApiContentSpec,
    content: unknown,
    contentContext: SideContext,
    owners: ReadonlyArray<{ owner: UnknownRecord, context: SideContext }>,
    contentDiff: Diff | undefined,
    headerRecord?: DiffsRecord,
  ): SideContext {
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
    this.reader.writeOptionsDiff(headerRecord ?? contentRecord, OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY, { ...contentRecord }, OpenApiSpecWithDiffsTransformer.isKeyedOptionChange)
    this.reader.writeRecord(contentSpec, contentRecord)
    return presence
  }

  /** Per-key precedence: owners in order (media type, request body), then the schema root. */
  private decorateClonedExtensions(
    mediaTypeSpec: { schema?: unknown },
    mediaTypeObject: UnknownRecord,
    owners: ReadonlyArray<{ owner: UnknownRecord, context: SideContext }>,
    schemaContext: SideContext,
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
      const responseField = this.readResponseField(responses, code, responsesContext)
      this.mergePresence(presence, this.reader.childContext(responseField))
      const diff = responseField.diff
      if (diff && (isDiffAdd(diff) || isDiffRemove(diff) || isDiffRename(diff))) {
        responsesRecord[code] = diff
      }
    }
    this.reader.writeOptionsDiff(responsesRecord, OPENAPI_RESPONSE_OPTIONS_DIFF_KEY, { ...responsesRecord }, OpenApiSpecWithDiffsTransformer.isKeyedOptionChange)
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

  private responseField(context: OpenApiOperationContext, code: string): FieldSides {
    const responsesField = this.reader.readField(context.operation, 'responses', this.operationSides)
    return this.readResponseField(context.operation.responses, code, this.reader.childContext(responsesField))
  }

  /**
   * `apiDiff` keys a removed range code's diff by its normalized lowercase spelling (`5xx`), while the
   * merged document keeps the original key (`5XX`): fall back to the diff of another spelling of the
   * same range unless that spelling is a response of its own.
   */
  private readResponseField(responses: unknown, code: string, context: SideContext): FieldSides {
    const field = this.reader.readField(responses, code, context)
    if (field.diff || !RESPONSE_CODE_RANGE.test(code) || !isObject(responses)) {
      return field
    }
    const diffKey = Object.keys(this.reader.record(responses) ?? {})
      .find(key => key !== code && key.toLowerCase() === code.toLowerCase() && !(key in responses))
    return diffKey === undefined ? field : this.reader.readField(responses, code, context, diffKey)
  }

  private responseContext(context: OpenApiOperationContext, code: string): SideContext {
    return this.reader.childContext(this.responseField(context, code))
  }

  /* Shared */

  /** Copies the owner's `x-*` diffs onto the extensions map and records its presence (≥1 key). */
  private decorateExtensions(extensions: OpenApiExtensionsSpec, owner: unknown, ownerContext: SideContext): void {
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

  private entriesPresence(entries: readonly OpenApiSchemaEntry[], owner: unknown, ownerContext: SideContext): SideContext {
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
    presence: SideContext = this.presenceOf(section),
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
    const diff = rawSectionDiff && SideReader.isWholeChange(rawSectionDiff)
      ? rawSectionDiff
      : this.reader.diffPresence(presence, section, [rawSectionDiff, ...this.reader.collectDiffs(section)])
    this.reader.writeDiff(owner, key, diff)
  }

  private presenceOf(section: object): SideContext {
    return this.presence.get(section) ?? BOTH_SIDES
  }

  private mergePresence(target: { before: boolean, after: boolean }, source: SideContext): void {
    target.before ||= source.before
    target.after ||= source.after
  }

  private wholeDiffOf(field: FieldSides): Diff | undefined {
    return SideReader.isWholeChange(field.diff) ? field.diff : undefined
  }

  /**
   * Boolean flags (`deprecated`, `required`) default to `false` in api-unifier: a diff may report
   * `false -> true` although one document omits the key (E5). Normalized to add (became true) /
   * remove (became false); no diff when the effective value is unchanged.
   */
  private normalizeFlagDiff(field: FieldSides): Diff | undefined {
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
