import { FC } from '../../../../../../node_modules/react';
import { TextValueVariant } from '../TextValue/types';
import { TitleRowProps } from '../TitleRow/types';
import { WithPrecededByProps } from '../WithPrecededByProps';
export declare const EXTENSIONS_SECTION_TITLE = "Extensions";
export type ExtensionsSectionProps = WithPrecededByProps & {
    /** `x-*` map; in diffs mode it carries its own diff record. */
    rawValues: Record<string, unknown>;
    variant: TextValueVariant;
    testId?: string;
    /** Header diff props (whole-section add / remove). */
    titleRowDiffProps?: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'highlightingMode'>;
};
/**
 * "Extensions" header + JSO tree of `x-*` values. Shared by AsyncAPI (message / channel / operation)
 * and OpenAPI (operation, response, Responses Object). Picks `JsoDiffsViewer` when diff meta keys
 * are provided.
 */
export declare const ExtensionsSection: FC<ExtensionsSectionProps>;
