import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type SpecificationExtensionsProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>;
};
export declare const ExtensionsNodeViewer: FC<SpecificationExtensionsProps>;
export {};
