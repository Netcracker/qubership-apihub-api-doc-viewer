import { DiffMetaKeys } from '../../../../api-data-model/src';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from "../..";
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
import { JsoEmbeddedSchemaDiffsComponent } from "./embedding/jso-embedding-types";
type JsoDiffsViewerProps = WithPrecededByProps & {
    mergedSource: unknown;
    displayMode?: DisplayMode;
    initialLevel?: number;
    supportJsonSchema?: boolean;
    devMode?: boolean;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
    embeddedSchemaDiffsComponent?: JsoEmbeddedSchemaDiffsComponent;
};
export declare const JsoDiffsViewer: FC<JsoDiffsViewerProps>;
export {};
