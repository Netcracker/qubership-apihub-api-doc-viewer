import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { OpenApiBlock } from './OpenApiLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
export declare const RESPONSE_HEADERS_SECTION_TITLE = "Headers";
type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>;
/**
 * The sections of one (the selected) response as layout blocks — description, Headers, Extensions,
 * Body in `OPENAPI_SECTION_ORDER.response` order. They are sibling blocks of the Responses level
 * (next to the Responses Object extensions), so the planner separates them like any other blocks.
 * Block ids carry the response id: switching codes remounts the sections. Design: entities/responses.md.
 */
export declare function buildResponseBlocks(response: ResponseNode, view: OpenApiViewState): OpenApiBlock[];
export {};
