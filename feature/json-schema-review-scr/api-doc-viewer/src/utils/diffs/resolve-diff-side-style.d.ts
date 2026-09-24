import { LayoutSide } from '../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, DiffStyles } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
/**
 * Resolves the single `DiffStyles` slice - text highlighter/background/border-shadow color, muted
 * font, content/header visibility - a diff-aware chip/badge/text-value component needs for one
 * layout side, in one call. Replaces the four near-identical `takeDiffSideXxx` getters (text
 * highlighter color, background color, border-shadow color, font-muted) that each repeated the
 * same "no diff -> default; pick `styles.before`/`styles.after`; read one field" shape - callers
 * destructure whichever fields they need, since `diff.styles.before`/`.after` is already a plain,
 * precomputed object and reading an unused field costs nothing extra.
 */
export declare function resolveDiffSideStyle(diff: ChangedPropertyMetaData | undefined, layoutSide: LayoutSide): DiffStyles;
