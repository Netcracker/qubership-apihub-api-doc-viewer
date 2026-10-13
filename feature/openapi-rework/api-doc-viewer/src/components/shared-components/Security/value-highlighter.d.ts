import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
/** A text highlighter class on the side where a replaced value is shown; nothing for add / remove. */
export declare function resolveValueHighlighter(diff: ChangedPropertyMetaData | undefined, layoutSide: LayoutSide): string;
