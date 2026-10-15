import { OpenApiBlockEdges } from "./block-edges"
import { OpenApiSpacing, OpenApiSpacingConfig } from "./spacing-config"
import { OpenApiEdgeTones, OpenApiFrameRow, OpenApiLayoutBlock, OpenApiLayoutItem, OpenApiSeparatorRow } from "./types"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"

/**
 * One pass over the visible blocks of one container level: blocks in the given (configured) order,
 * a separator row between two blocks wherever `config.needsSeparator` says so. Pure; the consumer
 * renders the items. Design: docs/design/openapi/features/block-separators.md -> "Planner".
 */
export class OpenApiLayoutPlanner {
  public static plan<TPayload>(blocks: readonly OpenApiLayoutBlock<TPayload>[], config: OpenApiSpacingConfig): OpenApiLayoutItem<TPayload>[] {
    const items: OpenApiLayoutItem<TPayload>[] = []
    blocks.forEach((block, index) => {
      const previous = blocks[index - 1]
      if (previous && config.needsSeparator(previous.tail, block.head)) {
        items.push({
          type: 'separator',
          separator: OpenApiLayoutPlanner.separator(`${previous.id}|${block.id}`, previous.tail.tones, block.head.tones, config),
        })
      }
      items.push({ type: 'block', block })
    })
    return items
  }

  /** A separator row between rows of tones `above` and `below`, each side split independently. */
  public static separator(id: string, above: OpenApiEdgeTones, below: OpenApiEdgeTones, config: OpenApiSpacingConfig): OpenApiSeparatorRow {
    const height = OpenApiSpacing.separatorHeight(config)
    return {
      id,
      before: config.splitBands(above.before, below.before, height),
      after: config.splitBands(above.after, below.after, height),
    }
  }

  /** A card opening / closing row: whole-card tones, border at `frameBorderOffset`. */
  public static frameRow(card: OpenApiTreeNode | OpenApiTreeNodeWithDiffs, config: OpenApiSpacingConfig): OpenApiFrameRow {
    return {
      height: config.frameRowHeight,
      borderOffset: config.frameBorderOffset,
      tones: OpenApiBlockEdges.frameEdge(card).tones,
    }
  }
}
