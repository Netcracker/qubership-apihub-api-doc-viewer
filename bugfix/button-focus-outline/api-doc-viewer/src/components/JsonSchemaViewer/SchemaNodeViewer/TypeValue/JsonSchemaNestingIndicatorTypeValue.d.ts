import { JsonSchemaTreeNode } from '../../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaNestingIndicatorTypeValueProps = {
    node: JsonSchemaTreeNode;
};
/**
 * Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
 * own type is primitive (no children to introduce).
 */
export declare const JsonSchemaNestingIndicatorTypeValue: FC<JsonSchemaNestingIndicatorTypeValueProps>;
