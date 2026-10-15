import { ReactElement } from "react"
import { ATTRIBUTE_BLOCK_LAST_ROW, ATTRIBUTE_PRECEDED_BY, PrecededBy, WithBlockLastRowProps, WithPrecededByProps } from "../shared-components/WithPrecededByProps"

/**
 * How a section ends, i.e. what the row after it follows: an OpenAPI row that took the upper half of
 * the block gap (`OPENAPI_BLOCK_START`), or a nested JSON Schema / JSO viewer that keeps its own 4px
 * (`OPENAPI_AFTER_NESTED_VIEWER`).
 */
export type OpenApiSectionTail = PrecededBy.OPENAPI_BLOCK_START | PrecededBy.OPENAPI_AFTER_NESTED_VIEWER

export type OpenApiSectionEntry = {
  readonly id: string
  /** How this section ends - what the next section is preceded by. */
  readonly tail: OpenApiSectionTail
  /**
   * `precededBy`: the top of the section's first row. `closing`: what the row after the section
   * assumes about its end - the section's own `tail`, or for the last section what its container
   * promised. A section ending with an OpenAPI row gives that row the block half-gap
   * (`data-block-last-row`) only when `closing` is `OPENAPI_BLOCK_START`; otherwise the row keeps the
   * 4px a nested viewer would have, so the gap below stays 20px (4 + 16).
   */
  readonly render: (precededBy: PrecededBy, closing: OpenApiSectionTail) => ReactElement
}

/**
 * One pass over the visible sections in the CONFIGURED order: each section's top is the tail of the
 * previous visible one (or `first` for the first), the last one closes as `closing`. Reordering the
 * config never needs CSS changes, and no section inspects its previous sibling.
 */
export function chainSectionsPrecededBy(
  sections: readonly OpenApiSectionEntry[],
  first: PrecededBy,
  closing: OpenApiSectionTail,
): ReactElement[] {
  let previous = first
  return sections.map((section, index) => {
    const element = section.render(previous, index === sections.length - 1 ? closing : section.tail)
    previous = section.tail
    return element
  })
}

/** The tail of a container that renders `sections` after its own header row(s). */
export function resolveSectionsTail(sections: readonly OpenApiSectionEntry[]): OpenApiSectionTail {
  return sections[sections.length - 1]?.tail ?? PrecededBy.OPENAPI_BLOCK_START
}

/** Spacing attributes of one OpenAPI row: its top (`data-precededby`) and its bottom (`data-block-last-row`). */
export type OpenApiRowSpacing = Required<WithPrecededByProps> & WithBlockLastRowProps

/**
 * Spacing of the rows of one block, in one pass (DDL `buildColumnViewerContexts` pattern): the first
 * row follows `first`, every other row its own block; the last row takes the block half-gap when
 * `lastRowEndsBlock` (false when a nested viewer of the same block follows it, or when the block's
 * `closing` is a nested-viewer stand-in).
 */
export function resolveBlockRowsSpacing(count: number, first: PrecededBy, lastRowEndsBlock: boolean): OpenApiRowSpacing[] {
  return Array.from({ length: count }, (_, index) => ({
    [ATTRIBUTE_PRECEDED_BY]: index === 0 ? first : PrecededBy.OPENAPI_BLOCK_ROW,
    ...(lastRowEndsBlock && index === count - 1 ? { [ATTRIBUTE_BLOCK_LAST_ROW]: true } : {}),
  }))
}

/** Whether the last OpenAPI row of a section takes the block half-gap (see {@link OpenApiSectionEntry.render}). */
export function isBlockClosing(closing: OpenApiSectionTail): boolean {
  return closing === PrecededBy.OPENAPI_BLOCK_START
}
