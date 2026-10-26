import { DisplayMode } from '../../types/DisplayMode';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
import { OpenApiOperationKeys } from '../../../../next-data-model/src/shared/openapi/types/operation-keys';
import { FC } from '../../../../../node_modules/react';
import { DiffMetaKeys } from '../../types/DiffMetaKeys';
export type OpenApiOperationDiffsViewerProps = {
    /** Merged `apiDiff` document of two whole OpenAPI documents (`components` kept). */
    mergedSource: unknown;
    /** Key of the MERGED document: the after path of a renamed path. */
    operationKeys?: OpenApiOperationKeys;
    displayMode?: DisplayMode;
    devMode?: boolean;
    noHeading?: boolean;
    expandedDepth?: number;
    diffMetaKeys: DiffMetaKeys;
    /** Accepted and forwarded; diff-type filters are not implemented yet. */
    diffTypes?: ReadonlyArray<DiffType>;
    /**
     * Hide unchanged content (default `true`): forwarded to nested `JsonSchemaDiffsViewer`s, and a
     * security scheme card without content changes shows only its title row plus a "three dots" row.
     * Design: docs/design/openapi/features/hiding-unchanged-nodes.md
     */
    hideUnchangedNodes?: boolean;
};
/**
 * One OpenAPI operation of a merged document, side by side.
 * Design: docs/design/openapi/features/diffs.md
 */
export declare const OpenApiOperationDiffsViewer: FC<OpenApiOperationDiffsViewerProps>;
