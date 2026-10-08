import { DisplayMode } from '../../types/DisplayMode';
import { OpenApiOperationKeys } from '../../../../next-data-model/src/shared/openapi/types/operation-keys';
import { FC } from '../../../../../node_modules/react';
export type { OpenApiOperationKeys };
export type OpenApiOperationViewerProps = {
    /** Normalized OpenAPI 3.0 / 3.1 document (api-unifier `normalize` + `denormalize`). */
    source: unknown;
    /** `{ path, method }` of the operation; the first operation of the document when omitted. */
    operationKeys?: OpenApiOperationKeys;
    displayMode?: DisplayMode;
    devMode?: boolean;
    /** Hides the h1 title row. */
    noHeading?: boolean;
    /** Forwarded to nested JSON Schema viewers. */
    expandedDepth?: number;
};
/**
 * One OpenAPI operation (path + method).
 * Design: docs/design/openapi/features/operation-viewer.md
 */
export declare const OpenApiOperationViewer: FC<OpenApiOperationViewerProps>;
