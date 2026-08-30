import { GraphApiDiffTreeNode, GraphApiTreeNode, JsonSchemaDiffTreeNode } from '../../../api-data-model/src';
import { BadgeKind } from '../components/kit/ux/UxBadge/types';
import { CustomizationOptions } from '../contexts/CustomizationOptionsContext';
export type NodeTitleData = Partial<{
    title: string | number;
    required: boolean;
    nullable: boolean;
    isBadge: boolean;
    badgeKind: BadgeKind;
    isIndex: boolean;
    isDirective: boolean;
}>;
type NodeTitleDataOptions<T> = {
    node: T | null;
    nodeValue?: unknown;
    nodeMeta?: unknown;
    titleMappings?: Record<string, string>;
    customizationOptions?: CustomizationOptions;
};
export type JsonNodeTitleDataOptions = NodeTitleDataOptions<JsonSchemaDiffTreeNode>;
export type GraphNodeTitleDataOptions = NodeTitleDataOptions<GraphApiDiffTreeNode | GraphApiTreeNode>;
export {};
