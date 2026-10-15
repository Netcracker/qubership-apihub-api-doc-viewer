import {
  ChangedPropertyMetaData,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { OpenApiNodeVisibility, OpenApiOperationRowVisibility } from "../node-visibility"
import { OpenApiRowDiffs } from "../tree-with-diffs/row-diffs"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"
import { OpenApiBlockEdge, OpenApiBlockEdgePair, OpenApiEdgeTones } from "./types"

type AnyOpenApiNode = OpenApiTreeNode | OpenApiTreeNodeWithDiffs

/** A row at a block edge: the diff that paints it and the severity its floating badge shows. */
export type OpenApiPaintedRow = {
  readonly diff?: ChangedPropertyMetaData
  readonly severity?: NodeDiffsSeverity
}

/**
 * Tones and badges of the first (`head`) and last (`tail`) row of every OpenAPI block kind, from the
 * same row diffs and severity placements those rows render (`OpenApiRowDiffs`, `node.diffsSeverities`).
 * One accessor per block kind: a new kind is one new method. Next to a nested JSON Schema / JSO viewer
 * only the owning block's whole add / remove counts (its rows are not visible to this layer). View
 * state (selected node, expanded) is passed in.
 * Design: docs/design/openapi/features/block-separators.md -> "Block edge tones", §9.
 */
export class OpenApiBlockEdges {
  /** Per-side background of a row painted by `diff`. */
  public static tones(diff: ChangedPropertyMetaData | undefined): OpenApiEdgeTones {
    return { before: diff?.styles.before.backgroundColor, after: diff?.styles.after.backgroundColor }
  }

  public static rowEdge(row: OpenApiPaintedRow): OpenApiBlockEdge {
    return { kind: 'row', tones: OpenApiBlockEdges.tones(row.diff), badge: row.severity?.type }
  }

  /** The severity a node's row of `placement` shows (plain trees: none). */
  public static severityOf(node: AnyOpenApiNode, placement: NodeDiffsSeverityPlacemennt): NodeDiffsSeverity | undefined {
    return 'diffsSeverities' in node ? node.diffsSeverities?.[placement] : undefined
  }

  /** A card frame row: the whole-card diff and the card's badge, only when it is wholly added / removed. */
  public static frameEdge(card: AnyOpenApiNode): OpenApiBlockEdge {
    return { ...OpenApiBlockEdges.wholeBlockEdge(card), kind: 'frame' }
  }

  /** The end of a nested JSON Schema / JSO viewer: the owning block's whole add / remove only. */
  public static nestedEdge(owner: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.wholeBlockEdge(owner)
  }

  /** A block whose first and last rows are known rows. */
  public static rows(first: OpenApiPaintedRow, last: OpenApiPaintedRow): OpenApiBlockEdgePair {
    return { head: OpenApiBlockEdges.rowEdge(first), tail: OpenApiBlockEdges.rowEdge(last) }
  }

  /** A container (header row + child blocks): its header row, then the tail of its last child. */
  public static container(header: OpenApiPaintedRow, children: readonly OpenApiBlockEdgePair[]): OpenApiBlockEdgePair {
    const head = OpenApiBlockEdges.rowEdge(header)
    return { head, tail: children[children.length - 1]?.tail ?? head }
  }

  /** A section container (Request, Security): its title row, then its children. */
  public static section(node: AnyOpenApiNode, children: readonly OpenApiBlockEdgePair[]): OpenApiBlockEdgePair {
    return OpenApiBlockEdges.container(OpenApiBlockEdges.titleRow(node), children)
  }

  /** The Responses section: its title row (yellow when a code option changed as an option), then its children. */
  public static responses(node: AnyOpenApiNode, children: readonly OpenApiBlockEdgePair[]): OpenApiBlockEdgePair {
    return OpenApiBlockEdges.container(
      { diff: OpenApiRowDiffs.Responses.takeTitleRowDiff(node), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) },
      children,
    )
  }

  /** Operation header block: its first and last visible header rows. */
  public static operationHeader(node: AnyOpenApiNode, visibility: OpenApiOperationRowVisibility): OpenApiBlockEdgePair {
    const rows = OpenApiNodeVisibility.resolveOperationHeaderRows(visibility)
    const rowAt = (index: number): OpenApiPaintedRow => ({
      diff: OpenApiRowDiffs.Operation.takeHeaderRowDiff(node, rows[index], visibility.deprecatedTagRow),
      severity: OpenApiBlockEdges.severityOf(node, OpenApiRowDiffs.Operation.resolveHeaderRowSeverityPlacement(rows[index], visibility.deprecatedTagRow)),
    })
    return OpenApiBlockEdges.rows(rowAt(0), rowAt(rows.length - 1))
  }

  /** Security title + toolbar. */
  public static securityHeader(security: AnyOpenApiNode): OpenApiBlockEdgePair {
    return OpenApiBlockEdges.rows(OpenApiBlockEdges.titleRow(security), {
      diff: OpenApiRowDiffs.Security.takeToolbarRowDiff(security),
      severity: OpenApiBlockEdges.severityOf(security, NodeDiffsSeverityPlacemennt.SelectorRow),
    })
  }

  /** The "No authentication" text of an anonymous alternative (a row without a floating badge). */
  public static noAuthentication(alternative: AnyOpenApiNode): OpenApiBlockEdgePair {
    const row = { diff: OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(alternative) }
    return OpenApiBlockEdges.rows(row, row)
  }

  /** A security scheme card: framed on both ends. */
  public static card(card: AnyOpenApiNode): OpenApiBlockEdgePair {
    const edge = OpenApiBlockEdges.frameEdge(card)
    return { head: edge, tail: edge }
  }

  /** Extensions section (title + JSO viewer). */
  public static extensions(node: AnyOpenApiNode): OpenApiBlockEdgePair {
    return { head: OpenApiBlockEdges.rowEdge(OpenApiBlockEdges.titleRow(node)), tail: OpenApiBlockEdges.nestedEdge(node) }
  }

  /** Parameter group / response Headers (title + synthesized schema); collapsed = title only. */
  public static parameters(group: AnyOpenApiNode, state: { readonly expanded?: boolean } = {}): OpenApiBlockEdgePair {
    const head = OpenApiBlockEdges.rowEdge(OpenApiBlockEdges.titleRow(group))
    return { head, tail: state.expanded === false ? head : OpenApiBlockEdges.nestedEdge(group) }
  }

  /** Request body: its title (required and media-type option changes included), optional description, the selected media type's schema. */
  public static requestBody(node: AnyOpenApiNode, showDescription: boolean, selectedMediaType: AnyOpenApiNode | undefined): OpenApiBlockEdgePair {
    return OpenApiBlockEdges.body(
      { diff: OpenApiRowDiffs.RequestBody.takeHeaderRowDiff(node), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) },
      showDescription
        ? { diff: OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description'), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.DescriptionRow) }
        : undefined,
      selectedMediaType,
    )
  }

  /** Response Body (header painted by its `content` node, media-type option changes included), the selected media type's schema. */
  public static responseBody(content: AnyOpenApiNode, selectedMediaType: AnyOpenApiNode | undefined): OpenApiBlockEdgePair {
    return OpenApiBlockEdges.body(
      { diff: OpenApiRowDiffs.ResponseBody.takeHeaderRowDiff(content), severity: OpenApiBlockEdges.severityOf(content, NodeDiffsSeverityPlacemennt.TitleRow) },
      undefined,
      selectedMediaType,
    )
  }

  /**
   * Body (request / response): title, optional description, then the selected media type's schema.
   * Without a schema the last of title / description ends the block.
   */
  public static body(header: OpenApiPaintedRow, description: OpenApiPaintedRow | undefined, selectedMediaType: AnyOpenApiNode | undefined): OpenApiBlockEdgePair {
    const head = OpenApiBlockEdges.rowEdge(header)
    if (selectedMediaType && OpenApiBlockEdges.hasSchema(selectedMediaType)) {
      return { head, tail: OpenApiBlockEdges.nestedEdge(selectedMediaType) }
    }
    return { head, tail: description ? OpenApiBlockEdges.rowEdge(description) : head }
  }

  /** The selected response's description row. */
  public static responseDescription(response: AnyOpenApiNode): OpenApiBlockEdgePair {
    const row = {
      diff: OpenApiRowDiffs.NodeLevel.takeRowDiff(response, 'description'),
      severity: OpenApiBlockEdges.severityOf(response, NodeDiffsSeverityPlacemennt.DescriptionRow),
    }
    return OpenApiBlockEdges.rows(row, row)
  }

  /** A section title row: painted by a whole add / remove, badged from the `TitleRow` placement. */
  private static titleRow(node: AnyOpenApiNode): OpenApiPaintedRow {
    return { diff: OpenApiRowDiffs.Section.takeHeaderRowDiff(node), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) }
  }

  /** The tones and badge of a wholly added / removed block, nothing otherwise. */
  private static wholeBlockEdge(node: AnyOpenApiNode): OpenApiBlockEdge {
    const whole = OpenApiRowDiffs.Section.takeHeaderRowDiff(node)
    return {
      kind: 'row',
      tones: OpenApiBlockEdges.tones(whole),
      badge: whole ? OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow)?.type : undefined,
    }
  }

  private static hasSchema(mediaType: AnyOpenApiNode): boolean {
    const schema: unknown = Reflect.get(mediaType.value() ?? {}, 'schema')
    return typeof schema === 'object' && schema !== null
  }
}
