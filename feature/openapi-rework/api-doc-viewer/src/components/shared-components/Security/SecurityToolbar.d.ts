import { ITreeNode } from '../../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { ChangedPropertyMetaData, NodeDiffsSeverity } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { ReactElement } from '../../../../../../node_modules/react';
import { SelectorOption } from '../Selector/Selector';
import { WithPrecededByProps } from '../WithPrecededByProps';
type SecurityToolbarProps<N extends ITreeNode> = WithPrecededByProps & {
    options: SelectorOption<N>[];
    selectedOption: SelectorOption<N> | null;
    onSelectOption: (option: SelectorOption<N>) => void;
    /** Row background: a whole section add / remove, or `replace` when an option was added / removed. */
    diff?: ChangedPropertyMetaData;
    severity?: NodeDiffsSeverity;
};
/**
 * Security toolbar: `‹ [option] [option] … ›`. The options form one non-wrapping line in the shared
 * `ArrowScrollStrip` (each arrow scrolls by one option and is disabled at its edge).
 * Shared by every security section (OpenAPI operations now, AsyncAPI servers later).
 * Design: docs/design/openapi/entities/security.md -> "Security toolbar".
 */
export declare function SecurityToolbar<N extends ITreeNode>(props: SecurityToolbarProps<N>): ReactElement;
export {};
