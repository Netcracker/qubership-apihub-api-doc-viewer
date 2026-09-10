import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaTypeValueTextProps = {
    text: string;
    color?: string;
    className?: string;
};
/**
 * Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
 * whether to render it at all.
 */
export declare const JsonSchemaTypeValueText: FC<JsonSchemaTypeValueTextProps>;
