import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { BadgeKind } from '../../kit/ux/UxBadge/types';
export declare const JsonSchemaNodeTitleVariants: {
    readonly BADGE: "badge";
    readonly TEXT: "text";
};
export type JsonSchemaNodeTitleDisplay = {
    variant: typeof JsonSchemaNodeTitleVariants.BADGE;
    text: string;
    badgeKind: BadgeKind;
} | {
    variant: typeof JsonSchemaNodeTitleVariants.TEXT;
    text: string;
};
export type ResolveJsonSchemaNodeTitleOptions = {
    node: JsonSchemaTreeNode;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    headerRowTitle?: string;
};
export declare class JsonSchemaNodeTitle {
    static resolveDisplay(options: ResolveJsonSchemaNodeTitleOptions): JsonSchemaNodeTitleDisplay;
}
