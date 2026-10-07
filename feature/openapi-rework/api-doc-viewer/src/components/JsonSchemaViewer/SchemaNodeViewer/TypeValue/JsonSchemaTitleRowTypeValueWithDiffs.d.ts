import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaTitleRowTypeValueWithDiffsProps = {
    node: JsonSchemaTreeNodeWithDiffs;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    layoutSide: LayoutSide;
    /** See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract. */
    suffix?: string;
};
/**
 * Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
 * sibling JsonSchemaTitleRowTypeValue).
 */
export declare const JsonSchemaTitleRowTypeValueWithDiffs: FC<JsonSchemaTitleRowTypeValueWithDiffsProps>;
