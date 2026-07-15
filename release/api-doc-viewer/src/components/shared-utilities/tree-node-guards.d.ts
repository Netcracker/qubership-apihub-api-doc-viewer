import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
/**
 * Generic type guard that narrows a tree node to its "with diffs" representation.
 *
 * A "with diffs" node is an instance of one of the abstract tree-with-diffs node classes
 * (e.g. `SimpleTreeNodeWithDiffs` / `ComplexTreeNodeWithDiffs`). The concrete class is supplied
 * via `withDiffsConstructor` so that this utility stays free of any imports and can be reused for
 * any API Type. The expected narrowed type is provided through the generic type argument `T`.
 *
 * @param node node to test (may be `null`/`undefined`)
 * @param withDiffsConstructor class whose instances represent a "with diffs" node
 * @param kind optional node kind (or list of kinds) that `node.kind` must match before the instance check
 */
export declare function isTreeNodeWithDiffs<T extends {
    kind: PropertyKey;
}>(node: {
    kind: PropertyKey;
} | null | undefined, withDiffsConstructor: abstract new (...args: never[]) => object, kind?: PropertyKey | PropertyKey[]): node is T;
export declare function isBindingsNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>;
export declare function isBindingNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDING>): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDING>;
export declare function isExtensionsNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS>): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS>;
export declare function isMessageChannelNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>;
export declare function isMessageChannelParametersNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>;
export declare function isServerNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER>;
export declare function isServersNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVERS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVERS>): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVERS>;
export declare function isAsyncApiMessageHeadersNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS> | undefined): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS>;
export declare function isAsyncApiMessagePayloadNodeWithDiffs(node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD> | undefined): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>;
export declare function isMessageNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE>;
export declare function isMessageOperationNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>;
export declare function isMessageSectionSelectorNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>;
export declare function isMessageSectionNodeWithDiffs(node: AsyncApiTreeNode | AsyncApiTreeNodeWithDiffs): node is AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL | typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>;
