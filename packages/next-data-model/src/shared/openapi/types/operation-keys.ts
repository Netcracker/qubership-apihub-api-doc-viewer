/**
 * Selects one OpenAPI operation: a `paths` key and an HTTP method.
 * In a merged (diff) document `path` is the merged key - the after path of a renamed path.
 */
export type OpenApiOperationKeys = {
  /** Key of `paths`, exactly as in the document, e.g. `/pets/{petId}`. */
  path: string
  /** HTTP method, case-insensitive. */
  method: string
}
