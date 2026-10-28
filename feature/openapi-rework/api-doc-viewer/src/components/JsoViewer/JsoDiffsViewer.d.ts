import { DiffMetaKeys } from '../../../../api-data-model/src';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../..';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
import { JsoEmbeddedSchemaDiffsComponent } from './embedding/jso-embedding-types';
type JsoDiffsViewerProps = WithPrecededByProps & {
    mergedSource: unknown;
    displayMode?: DisplayMode;
    initialLevel?: number;
    supportJsonSchema?: boolean;
    devMode?: boolean;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
    /**
     * Collapse each run of unchanged sibling properties into one "Show N unchanged nodes" row.
     * When omitted, an embedded viewer follows its host diffs viewer (JSON Schema, OpenAPI) and a
     * standalone one hides (`true`, the `JsonSchemaDiffsViewer` default).
     */
    hideUnchangedNodes?: boolean;
    embeddedSchemaDiffsComponent?: JsoEmbeddedSchemaDiffsComponent;
};
export declare const JsoDiffsViewer: FC<JsoDiffsViewerProps>;
export {};
