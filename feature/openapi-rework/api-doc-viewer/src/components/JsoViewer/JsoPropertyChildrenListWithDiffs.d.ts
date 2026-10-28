import { JsoTreeNodeWithDiffs } from '../../../../next-data-model/src/model/jso/types/aliases';
import { FC } from '../../../../../node_modules/react';
import { PrecededBy } from '../shared-components/WithPrecededByProps';
type JsoPropertyChildrenListWithDiffsProps = {
    properties: readonly JsoTreeNodeWithDiffs[];
    supportJsonSchema: boolean;
    /** `data-precededby` of the first visible row (the viewer's own one at the top level); every
     * other row is preceded by a JSO property. */
    firstRowPrecededBy: PrecededBy | undefined;
};
/**
 * One sibling list of JSO properties: with `hideUnchangedNodes`, each run of unchanged properties
 * is one `ShowUnchangedRow` until revealed (see docs/design/jso/features/hiding-unchanged-nodes.md).
 */
export declare const JsoPropertyChildrenListWithDiffs: FC<JsoPropertyChildrenListWithDiffsProps>;
export {};
