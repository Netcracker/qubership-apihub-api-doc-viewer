import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverity } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC, ReactNode } from '../../../../../../node_modules/react';
import { WithFramePositionProps } from '../Frame/types';
/**
 * Building blocks of a security scheme card: one per-side row frame plus the contents that go into
 * it (label / value prop, flow header, scopes toggle, scope row). Shared by every security section
 * (OpenAPI operations now, AsyncAPI servers later); containers pass precomputed diffs only.
 * Design: docs/design/openapi/entities/security.md -> "Scheme card".
 */
type SecurityRowProps = WithFramePositionProps & {
    /** Content of one side; called only on a side where the row has content. */
    renderSide: (layoutSide: LayoutSide) => ReactNode;
    /** Row background; a whole add / remove leaves the absent side empty and gray. */
    diff?: ChangedPropertyMetaData;
    /** Floating severity badge of this row (own changes only, never an inherited block diff). */
    severity?: NodeDiffsSeverity;
    testId?: string;
    /**
     * `spacer`: the fixed gap before a flow part, painted like the block that follows it.
     * `frame-end`: the closing row of a card (bottom indent + border), always last.
     */
    variant?: 'default' | 'spacer' | 'frame-end';
};
/**
 * One card row on both sides. Vertical spacing is padding inside the row (never margins between
 * rows), so neighbouring highlighted rows join into one colored block without white seams.
 */
export declare const SecurityRow: FC<SecurityRowProps>;
type SecurityPropContentProps = {
    label: string;
    value: ReactNode;
};
/**
 * 1st-level security prop: `label <fixed gap> value` in a two-column grid. The label uses the JSON
 * Schema property-title text (`NODE_TITLE_TEXT_CLASSES`). The card sets
 * `--security-label-width`, so values of every prop of the card start at the same x.
 */
export declare const SecurityPropContent: FC<SecurityPropContentProps>;
type SecurityPropValueProps = {
    text: string;
    /** Renders the value as a link (URLs). */
    href?: boolean;
    highlighterClass?: string;
};
export declare const SecurityPropValue: FC<SecurityPropValueProps>;
/** One item of a list value (`Required scopes`, `Required roles`); `change` marks a side-exclusive item. */
export type SecurityListValueItem = {
    readonly text: string;
    readonly change?: 'added' | 'removed';
};
export declare const SecurityListValue: FC<{
    items: readonly SecurityListValueItem[];
}>;
/** Flow part header: `Flow type **Authorization Code**` on a light-gray plate. */
export declare const SecurityFlowHeaderContent: FC<{
    prefix: string;
    name: string;
}>;
/**
 * `Scopes ▾` - label and expander only (no value), JSON Schema title pattern: the text and the
 * expander are both clickable; the expander comes after the text.
 */
export declare const SecurityScopesToggleContent: FC<{
    label: string;
    expanded: boolean;
    onToggle: () => void;
}>;
type SecurityScopeContentProps = {
    name: string;
    description: string;
    required: boolean;
    /** Text highlighter of a replaced description. */
    descriptionHighlighterClass: string;
    /** Diffs mode: the `required` badge after the description when the required status changed. */
    requiredDiff?: ChangedPropertyMetaData;
    layoutSide: LayoutSide;
};
/**
 * 2nd-level security prop (one scope): `<20px indent> name * <gap> description [required]`. Its own
 * grid (`--security-scope-width`) so scope names align without moving the 1st-level columns.
 */
export declare const SecurityScopeContent: FC<SecurityScopeContentProps>;
export {};
