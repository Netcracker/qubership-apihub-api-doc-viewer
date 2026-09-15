import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaTypeValueTextProps = {
    text: string;
    /**
     * Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).
     * `null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector
     * button's own selected/unselected text color) applies instead. A string -> used as-is.
     */
    color?: string | null;
    className?: string;
};
/**
 * Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
 * whether to render it at all.
 */
export declare const JsonSchemaTypeValueText: FC<JsonSchemaTypeValueTextProps>;
