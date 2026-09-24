import { TagsWithDiffsProps } from '../../shared-components/diffs/TagsWithDiffs';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
export declare function buildJsonSchemaTagsWithDiffsProps(node: JsonSchemaTreeNodeWithDiffs): Pick<TagsWithDiffsProps, "requiredChanged" | "requiredDiff" | "readOnlyDiff" | "writeOnlyDiff" | "deprecatedDiff">;
