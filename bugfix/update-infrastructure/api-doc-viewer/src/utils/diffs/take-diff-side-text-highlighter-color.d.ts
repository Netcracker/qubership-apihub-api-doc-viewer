import { LayoutSide } from '../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, HighlightVariant } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
export declare function takeDiffSideTextHighlighterColor(diff: ChangedPropertyMetaData | undefined, layoutSide: LayoutSide): Exclude<HighlightVariant, HighlightVariant.Gray> | undefined;
