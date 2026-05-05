import { FC } from '../../../../../node_modules/react';
import { DisplayMode, LayoutMode } from "../..";
type JsoViewerProps = {
    source: object | null;
    displayMode?: DisplayMode;
    layoutMode?: LayoutMode;
    initialLevel?: number;
    supportJsonSchema?: boolean;
};
export declare const JsoViewer: FC<JsoViewerProps>;
export {};
