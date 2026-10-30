import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { TextValueVariant } from '../shared-components/TextValue/types';
import { OpenApiSectionTitleRowProps } from './CollapsibleSection';
type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
type ExtensionsTitleRowProps = {
    node: ExtensionsNode;
    variant: TextValueVariant;
};
type ExtensionsTitleRowContentProps = ExtensionsTitleRowProps & {
    section?: OpenApiSectionTitleRowProps;
};
type ExtensionsValuesProps = {
    node: ExtensionsNode;
};
/** Operation (h2), Response (h3) and Responses Object (h3) extensions title. Layout block: `extensions-blocks.tsx`. */
export declare const ExtensionsTitleRow: FC<ExtensionsTitleRowContentProps>;
/** The same title with the section expander (expanded state from the operation view state). */
export declare const CollapsibleExtensionsTitleRow: FC<ExtensionsTitleRowProps>;
/** The `x-*` values (JSO viewer); its first row keeps the nested-viewer inset. */
export declare const ExtensionsValues: FC<ExtensionsValuesProps>;
export {};
