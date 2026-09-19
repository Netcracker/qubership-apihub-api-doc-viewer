import { JsonSchemaTreeNode } from '../../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaCombinerOptionTypeValueProps = {
    node: JsonSchemaTreeNode;
};
/**
 * Combiner-selector option button content, plain (no diffs). Displays the type value of the
 * leaf reached by always taking the first nested variant recursively (see
 * `resolveCombinerOptionLeafNode`), with a trailing " (combinerKind)" suffix when `node` (the
 * option itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text
 * color to the button's own CSS (selected/unselected state), not the leaf's title-row default.
 */
export declare const JsonSchemaCombinerOptionTypeValue: FC<JsonSchemaCombinerOptionTypeValueProps>;
