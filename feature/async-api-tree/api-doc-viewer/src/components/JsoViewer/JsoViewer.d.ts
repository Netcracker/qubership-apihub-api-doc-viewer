import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from "../..";
type JsoViewerProps = {
    source: object | null;
    displayMode?: DisplayMode;
    initialLevel?: number;
};
export declare const JsoViewer: FC<JsoViewerProps>;
export {};
