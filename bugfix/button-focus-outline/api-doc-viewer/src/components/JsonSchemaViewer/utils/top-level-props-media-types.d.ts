import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
/** Root's direct property key -> media type, shown as a badge in the property's title row. */
export type TopLevelPropsMediaTypesMap = Record<string, string>;
/** Design: docs/design/json-schema/features/top-level-props-media-types.md */
export declare class JsonSchemaTopLevelPropsMediaTypes {
    /** Media type of a root's direct property listed in `mediaTypes`; nested properties never match. */
    static resolve(node: JsonSchemaTreeNode, mediaTypes: TopLevelPropsMediaTypesMap | undefined): string | undefined;
}
