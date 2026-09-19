import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { BadgeKind } from '../../kit/ux/UxBadge/types';
export type JsonSchemaNodeTitleDisplay = {
    variant: "badge";
    text: string;
    badgeKind: BadgeKind;
} | {
    variant: "text";
    text: string;
};
export type ResolveJsonSchemaNodeTitleOptions = {
    node: JsonSchemaTreeNode;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    headerRowTitle?: string;
};
export declare function resolveJsonSchemaNodeTitleDisplay(options: ResolveJsonSchemaNodeTitleOptions): JsonSchemaNodeTitleDisplay;
export declare function isJsonSchemaBooleanAdditionalPropertiesNode(node: JsonSchemaTreeNode, meta: JsonSchemaTreeNodeMeta | null | undefined): boolean;
