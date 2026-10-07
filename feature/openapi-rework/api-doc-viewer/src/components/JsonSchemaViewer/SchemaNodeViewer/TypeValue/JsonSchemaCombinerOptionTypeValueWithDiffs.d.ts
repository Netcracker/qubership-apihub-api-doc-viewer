import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { JsonSchemaTreeNodeWithDiffs } from '../../../../../../next-data-model/src/model/json-schema/types/aliases';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaCombinerOptionTypeValueWithDiffsProps = {
    node: JsonSchemaTreeNodeWithDiffs;
    layoutSide: LayoutSide;
};
/**
 * Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
 * the plain sibling (`JsonSchemaCombinerOptionTypeValue`), but renders the resolved leaf's
 * type/format/title through the shared per-side diff-highlighted SideListDisplay renderer, so a
 * leaf-level type/title/format change is visible directly on the option button - not just as
 * the generic "changed" round marker `Selector` already draws for other kinds of changes.
 * `color={null}` leaves text color to the button's own CSS (selected/unselected state); the
 * suffix is plain, non-diff-highlighted text, matching the plain sibling.
 */
export declare const JsonSchemaCombinerOptionTypeValueWithDiffs: FC<JsonSchemaCombinerOptionTypeValueWithDiffsProps>;
