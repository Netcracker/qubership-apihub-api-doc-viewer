import { HighlightVariant } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../node_modules/react';
type OptionKeyTextProps = {
    text: string;
    /** Text highlighter from the data layer (a renamed media type / response code); none = plain text. */
    highlight: HighlightVariant | undefined;
};
/**
 * Title of a media-type / response-code selector option. Unchanged options keep the bare text, so
 * their markup does not change.
 */
export declare const OptionKeyText: FC<OptionKeyTextProps>;
export {};
