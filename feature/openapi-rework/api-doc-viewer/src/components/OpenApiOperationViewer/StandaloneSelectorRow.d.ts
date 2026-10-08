import { ITreeNode } from '../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { ReactElement } from '../../../../../node_modules/react';
import { SelectorOption } from '../shared-components/Selector/Selector';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
type StandaloneSelectorRowProps<N extends ITreeNode> = WithPrecededByProps & {
    options: SelectorOption<N>[];
    selectedOption: SelectorOption<N> | null;
    onSelectOption: (option: SelectorOption<N>) => void;
    /** Whole-section diff painting the row background. */
    diff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
/**
 * A selector on its own row (security alternatives) - the `MessageSectionsViewer` row pattern.
 * Media-type and response-code selectors sit in title subheaders instead.
 */
export declare function StandaloneSelectorRow<N extends ITreeNode>(props: StandaloneSelectorRowProps<N>): ReactElement;
export {};
