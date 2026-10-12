import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaNestingIndicatorTypeValueWithDiffsProps = {
    node: JsonSchemaTreeNodeWithDiffs;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
    layoutSide: LayoutSide;
};
/**
 * Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
 * resolved type is primitive - see plain sibling JsonSchemaNestingIndicatorTypeValue.
 */
export declare const JsonSchemaNestingIndicatorTypeValueWithDiffs: FC<JsonSchemaNestingIndicatorTypeValueWithDiffsProps>;
