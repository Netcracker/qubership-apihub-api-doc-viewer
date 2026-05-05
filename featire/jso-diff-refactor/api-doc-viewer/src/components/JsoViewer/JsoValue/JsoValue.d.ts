import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { ResolvedJsoSideState } from "../resolve-jso-side-state";
type JsoValueProps = {
    sideState: ResolvedJsoSideState;
    forcedBackgroundColor?: HighlightVariant;
    forcedTextHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
};
export declare const JsoValue: FC<JsoValueProps>;
export {};
