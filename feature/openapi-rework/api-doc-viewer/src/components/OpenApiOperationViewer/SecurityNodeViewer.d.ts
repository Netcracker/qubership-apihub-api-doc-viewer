import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { SecurityAlternativesNode } from '../shared-components/Security/SecuritySectionBase';
import { StackBlock } from '../shared-components/Layout/StackLayout';
export type SecurityNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>;
type SecurityNodeViewerProps = {
    blocks: readonly StackBlock[];
};
type SecuritySectionRowProps = {
    node: SecurityNode;
};
/**
 * "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND).
 * Layout block: `security-blocks.tsx`.
 */
export declare const SecurityNodeViewer: FC<SecurityNodeViewerProps>;
/** "Security" (h2) with the `Optional` badge when anonymous access (`{}`) is allowed on that side. */
export declare const SecurityTitleRow: FC<SecuritySectionRowProps>;
/** The alternatives toolbar; the selection lives in the operation view state. */
export declare const OpenApiSecurityToolbarRow: FC<SecuritySectionRowProps & {
    toolbar: SecurityAlternativesNode;
}>;
export {};
