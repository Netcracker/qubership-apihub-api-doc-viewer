import { OpenApiBlockEdges } from "./block-edges"
import { OpenApiSpacing, OpenApiSpacingConfig } from "./spacing-config"
import { OpenApiBlockEdge, OpenApiFrameRow, OpenApiLayoutBlock, OpenApiLayoutItem, OpenApiSeparatorRow } from "./types"
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
          separator: OpenApiLayoutPlanner.separator(`${previous.id}|${block.id}`, previous.tail, block.head, config),
        })
      }
      items.push({ type: 'block', block })
    })
    return items
  }

  /**
   * A separator row between the edges `above` and `below`: each side's bands split independently by
   * the tones, one badge stub for the row split by the badges.
   */
  public static separator(id: string, above: OpenApiBlockEdge, below: OpenApiBlockEdge, config: OpenApiSpacingConfig): OpenApiSeparatorRow {
    const height = OpenApiSpacing.separatorHeight(config)
    return {
      id,
      before: config.splitBands(above.tones.before, below.tones.before, height),
      after: config.splitBands(above.tones.after, below.tones.after, height),
      badge: config.splitBadge(above.badge, below.badge, height),
    }
  }

  /** A card opening / closing row: whole-card tones and badge stub, border at `frameBorderOffset`. */
  public static frameRow(card: OpenApiTreeNode | OpenApiTreeNodeWithDiffs, config: OpenApiSpacingConfig): OpenApiFrameRow {
    const edge = OpenApiBlockEdges.frameEdge(card)
    return {
      height: config.frameRowHeight,
      borderOffset: config.frameBorderOffset,
      tones: edge.tones,
      ...(config.frameRowBadge && edge.badge ? { badge: edge.badge } : {}),
    }
  }
}
