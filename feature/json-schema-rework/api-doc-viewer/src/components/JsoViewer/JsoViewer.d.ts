import { FC } from '../../../../../node_modules/react';
import { DisplayMode, LayoutMode } from "../..";
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
import { JsoEmbeddedSchemaComponent } from "./embedding/jso-embedding-types";
type JsoViewerProps = WithPrecededByProps & {
    source: object | null;
    displayMode?: DisplayMode;
    layoutMode?: LayoutMode;
    initialLevel?: number;
    supportJsonSchema?: boolean;
    devMode?: boolean;
    embeddedSchemaComponent?: JsoEmbeddedSchemaComponent;
};
export declare const JsoViewer: FC<JsoViewerProps>;
export {};
