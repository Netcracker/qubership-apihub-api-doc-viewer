import { DiffTagsProps } from '../../common/diffs/DiffTags';
import { LayoutMode } from '../../../types/LayoutMode';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
export declare function buildJsonSchemaDiffTagsProps(node: JsonSchemaTreeNodeWithDiffs, _layoutMode: LayoutMode): Pick<DiffTagsProps, "isNodeChanged" | "isContentChanged" | "requiredChanged" | "$nodeChange" | "$metaChanges">;
