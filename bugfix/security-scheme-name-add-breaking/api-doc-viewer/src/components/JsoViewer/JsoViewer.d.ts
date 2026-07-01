import { FC } from '../../../../../node_modules/react';
import { DisplayMode, LayoutMode } from "../..";
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type JsoViewerProps = WithPrecededByProps & {
    source: object | null;
    displayMode?: DisplayMode;
    layoutMode?: LayoutMode;
    initialLevel?: number;
    supportJsonSchema?: boolean;
};
export declare const JsoViewer: FC<JsoViewerProps>;
export {};
