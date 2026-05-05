import { JsoTreeNodeWithDiffs } from '../../../../next-data-model/src/model/jso/types/aliases';
import { JsoTreeNodeKinds } from '../../../../next-data-model/src/model/jso/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type JsoPropertyNodeViewerWithDiffsProps = {
    node: JsoTreeNodeWithDiffs<typeof JsoTreeNodeKinds.PROPERTY>;
    supportJsonSchema?: boolean;
};
export declare const JsoPropertyNodeViewerWithDiffs: FC<JsoPropertyNodeViewerWithDiffsProps>;
export {};
