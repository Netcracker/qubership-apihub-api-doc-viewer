import { Diff, isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import {
  ChangedPropertyMetaData,
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  DiffStyles,
  HighlightVariant,
} from "../../abstract/tree-with-diffs/tree-node.interface"

const VISIBLE: DiffStyles = { isContentVisible: true, isHeaderVisible: true }
const ABSENT: DiffStyles = { isContentVisible: false, isHeaderVisible: false, backgroundColor: HighlightVariant.Gray }

/**
 * Diff -> per-side styles for OpenAPI rows. Whole add / remove: the absent side shows nothing (grey),
 * the present side is green / red. Replace / rename: yellow on both sides, text highlighted.
 */
export class OpenApiChangedPropertyMetaData {
  public static build(diff: Diff): ChangedPropertyMetaData {
    if (isDiffAdd(diff)) {
      return OpenApiChangedPropertyMetaData.create(diff, ABSENT, { ...VISIBLE, backgroundColor: HighlightVariant.Green })
    }
    if (isDiffRemove(diff)) {
      return OpenApiChangedPropertyMetaData.create(diff, { ...VISIBLE, backgroundColor: HighlightVariant.Red }, ABSENT)
    }
    const changed: DiffStyles = { ...VISIBLE, backgroundColor: HighlightVariant.Yellow, textHighlighterColor: HighlightVariant.Yellow }
    return OpenApiChangedPropertyMetaData.create(diff, changed, changed)
  }

  /** Yellow row on both sides without text highlight: a title row painted for a flag change. */
  public static buildRowReplace(diff: Diff): ChangedPropertyMetaData {
    const changed: DiffStyles = { ...VISIBLE, backgroundColor: HighlightVariant.Yellow }
    return OpenApiChangedPropertyMetaData.create(diff, changed, changed)
  }

  private static create(diff: Diff, before: DiffStyles, after: DiffStyles): ChangedPropertyMetaData {
    return {
      data: diff,
      styles: { before, after },
      flags: { before: { increaseLevel: false }, after: { increaseLevel: false } },
      highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
    }
  }
}
