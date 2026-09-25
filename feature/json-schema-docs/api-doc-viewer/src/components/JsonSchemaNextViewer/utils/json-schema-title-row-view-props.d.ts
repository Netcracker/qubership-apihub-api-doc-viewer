import { TagsWithDiffsProps } from '../../shared-components/diffs/TagsWithDiffs';
import { TitleRowProps } from '../../shared-components/TitleRow/types';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
/** View-prop builders for the JSON Schema title row's two diff-aware sub-components. */
export declare class JsonSchemaTitleRowViewProps {
    static buildTagsProps(node: JsonSchemaTreeNodeWithDiffs): Pick<TagsWithDiffsProps, "requiredChanged" | "requiredDiff" | "readOnlyDiff" | "writeOnlyDiff" | "deprecatedDiff">;
    static buildRowDiffProps(node: JsonSchemaTreeNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">;
}
