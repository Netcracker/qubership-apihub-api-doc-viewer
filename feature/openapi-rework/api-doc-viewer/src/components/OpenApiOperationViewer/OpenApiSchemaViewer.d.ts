import { FC } from '../../../../../node_modules/react';
type OpenApiSchemaViewerProps = {
    /** Plain or merged JSON Schema, already prepared (synthesized / wrapped) by the data layer or the caller. */
    schema: unknown;
};
/**
 * The nested JSON Schema viewer of every OpenAPI section (parameters, headers, bodies): the plain or
 * the diffs viewer by layout mode, with the root viewer's `expandedDepth` / `hideUnchangedNodes`.
 * It always follows an OpenAPI row of its own block, so its first row takes the in-block half-gap.
 */
export declare const OpenApiSchemaViewer: FC<OpenApiSchemaViewerProps>;
export {};
