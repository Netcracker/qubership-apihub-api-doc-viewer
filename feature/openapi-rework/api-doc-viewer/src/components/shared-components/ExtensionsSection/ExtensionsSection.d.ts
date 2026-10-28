import { FC } from '../../../../../../node_modules/react';
import { TextValueVariant } from '../TextValue/types';
import { TitleRowProps } from '../TitleRow/types';
import { PrecededBy, WithPrecededByProps } from '../WithPrecededByProps';
export declare const EXTENSIONS_SECTION_TITLE = "Extensions";
export type ExtensionsSectionProps = WithPrecededByProps & {
    /** `x-*` map; in diffs mode it carries its own diff record. */
    rawValues: Record<string, unknown>;
    variant: TextValueVariant;
    testId?: string;
    /** Header diff props (whole-section add / remove). */
    titleRowDiffProps?: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'highlightingMode'>;
    /** `data-precededby` of the JSO viewer's first row; defaults to the AsyncAPI section-header spacing. */
    contentPrecededBy?: PrecededBy;
    /** Forwarded to `JsoDiffsViewer`; omitted = follow the host diffs viewer (OpenAPI). */
    hideUnchangedNodes?: boolean;
};
type ExtensionsSectionTitleRowProps = WithPrecededByProps & Pick<ExtensionsSectionProps, 'variant' | 'titleRowDiffProps'> & {
    /** A collapsible section's expander (OpenAPI 2nd-level sections); omitted = not expandable. */
    section?: Pick<TitleRowProps, 'usage' | 'expandable' | 'expanded' | 'onClickExpander'>;
};
/** The "Extensions" header row alone (OpenAPI plans it as an element of its own). */
export declare const ExtensionsSectionTitleRow: FC<ExtensionsSectionTitleRowProps>;
type ExtensionsSectionContentProps = Pick<ExtensionsSectionProps, 'rawValues' | 'contentPrecededBy' | 'hideUnchangedNodes'>;
/** The JSO tree of `x-*` values alone: `JsoDiffsViewer` when diff meta keys are provided. */
export declare const ExtensionsSectionContent: FC<ExtensionsSectionContentProps>;
/**
 * "Extensions" header + JSO tree of `x-*` values. Used by AsyncAPI (message / channel / operation);
 * OpenAPI composes `ExtensionsSectionTitleRow` and `ExtensionsSectionContent` with a separator row
 * between them.
 */
export declare const ExtensionsSection: FC<ExtensionsSectionProps>;
export {};
