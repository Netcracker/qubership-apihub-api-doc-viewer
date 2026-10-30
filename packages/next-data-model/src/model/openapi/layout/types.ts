import { SharedLayoutLevel } from "../../abstract/layout/types"

/**
 * Container levels of the OpenAPI operation layout: the shared ones plus `operation` (the top-level
 * blocks), `operationHeader` (the header rows), `request` and `responses` (their sections).
 */
export type OpenApiLayoutLevel = SharedLayoutLevel | 'operation' | 'operationHeader' | 'request' | 'responses'

/** View state of a collapsible section (Body) as its edges see it: collapsed = its title row only. */
export type OpenApiSectionViewState = {
  readonly expanded: boolean
}
