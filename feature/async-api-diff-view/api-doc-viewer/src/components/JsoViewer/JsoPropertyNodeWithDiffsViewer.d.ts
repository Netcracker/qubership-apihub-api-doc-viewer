import { LayoutSide } from '../../types/internal/LayoutSide';
import { JsoTreeNodeWithDiffs } from '../../../../next-data-model/src/model/jso/types/aliases';
import { JsoTreeNodeKinds } from '../../../../next-data-model/src/model/jso/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type JsoPropertyNodeWithDiffsViewerProps = {
    node: JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>;
    supportJsonSchema?: boolean;
    forceYellowDescendantDiffs?: boolean;
    forceYellowObjectDescendantHeaders?: boolean;
    hiddenLayoutSide?: LayoutSide;
    hiddenLayoutSideLevelCap?: number;
};
export declare const JsoPropertyNodeWithDiffsViewer: FC<JsoPropertyNodeWithDiffsViewerProps>;
export {};
