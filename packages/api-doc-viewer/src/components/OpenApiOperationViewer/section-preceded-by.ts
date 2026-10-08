import { ReactElement } from "react"
import { PrecededBy } from "../shared-components/WithPrecededByProps"

export type OpenApiSectionEntry = {
  readonly id: string
  /** What the next section is preceded by when this one is rendered. */
  readonly tail: PrecededBy
  readonly render: (precededBy: PrecededBy) => ReactElement
}

/**
 * One pass over the visible sections in the CONFIGURED order: each section's `data-precededby` is the
 * tail of the previous visible one (or `first` for the first). Reordering the config never needs CSS
 * changes, and no section inspects its previous sibling.
 */
export function chainSectionsPrecededBy(sections: readonly OpenApiSectionEntry[], first: PrecededBy): ReactElement[] {
  let previous = first
  return sections.map(section => {
    const element = section.render(previous)
    previous = section.tail
    return element
  })
}
