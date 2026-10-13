import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
export declare const SECURITY_SECTION_TITLE = "Security";
type SecurityNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>;
};
/** "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND). */
export declare const SecurityNodeViewer: FC<SecurityNodeViewerProps>;
export {};
