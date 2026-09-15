import { TitleRowProps } from '../../shared-components/TitleRow/types';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
export declare function buildJsonSchemaTitleRowDiffProps(node: JsonSchemaTreeNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">;
