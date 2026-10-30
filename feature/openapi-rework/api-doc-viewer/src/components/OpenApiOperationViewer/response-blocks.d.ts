import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
import { ResponseNode } from './ResponseBodyViewer';
export declare const RESPONSE_HEADERS_SECTION_TITLE = "Headers";
/**
 * The sections of one (the selected) response as layout blocks — description, Headers, Extensions,
 * Body in `OPENAPI_SECTION_ORDER.response` order. They are sibling blocks of the Responses level
 * (next to the Responses Object extensions), so the planner separates them like any other blocks.
 * Block ids carry the response id: switching codes remounts the sections. Design: entities/responses.md.
 */
export declare function buildResponseBlocks(response: ResponseNode, view: OpenApiViewState): StackBlock[];
