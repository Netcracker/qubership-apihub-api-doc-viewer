import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverity } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC, ReactNode } from '../../../../../../node_modules/react';
import { WithFramePositionProps } from '../Frame/types';
import { WithBlockLastRowProps, WithPrecededByProps } from '../WithPrecededByProps';
/**
 * Building blocks of a security scheme card: one per-side row frame plus the contents that go into
 * it (label / value prop, flow header, scopes toggle, scope row). Shared by every security section
 * (OpenAPI operations now, AsyncAPI servers later); containers pass precomputed diffs only.
 * Design: docs/design/openapi/entities/security.md -> "Scheme card".
 */
type SecurityRowProps = WithPrecededByProps & WithBlockLastRowProps & WithFramePositionProps & {
    /** Content of one side; called only on a side where the row has content. */
    renderSide: (layoutSide: LayoutSide) => ReactNode;
    /** Row background; a whole add / remove leaves the absent side empty and gray. */
    diff?: ChangedPropertyMetaData;
    /** Floating severity badge of this row (own changes only, never an inherited block diff). */
    severity?: NodeDiffsSeverity;
    testId?: string;
    /** `frame-end`: the content-less closing row of a card (bottom indent + border), always last. */
    variant?: 'default' | 'frame-end';
};
/**
 * One card row on both sides. Vertical spacing is padding inside the row only (`data-precededby` for
 * the top, `data-block-last-row` for the bottom; never margins between rows), so neighbouring
 * highlighted rows join into one colored block without white seams.
 */
export declare const SecurityRow: FC<SecurityRowProps>;
type SecurityPropContentProps = {
    /** Plain text, or composed text with its own highlighted segments (apiKey `<Place> parameter name`). */
    label: ReactNode;
    value: ReactNode;
};
/**
 * 1st-level security prop: `label <20px> value`. The label uses the JSON Schema property-title text
 * (`NODE_TITLE_TEXT_CLASSES`) and wraps inside its column when longer than 40% of the card.
 */
export declare const SecurityPropContent: FC<SecurityPropContentProps>;
type SecurityPropValueProps = {
    text: string;
    /** Renders the value as a link (URLs). */
    href?: boolean;
    highlighterClass?: string;
};
export declare const SecurityPropValue: FC<SecurityPropValueProps>;
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
 * 2nd-level security prop (one scope): `<20px offset> name * <20px> description [required]`. Same
 * grid as 1st-level props; the 20px offset is padding inside the first cell, so the name gets 40% of
 * the card minus the offset and the description starts where 1st-level values start.
 */
export declare const SecurityScopeContent: FC<SecurityScopeContentProps>;
export {};
