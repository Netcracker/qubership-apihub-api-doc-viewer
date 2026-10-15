import { ChangedPropertyMetaData } from "../../abstract/tree-with-diffs/tree-node.interface"
import { OpenApiNodeVisibility, OpenApiOperationRowVisibility } from "../node-visibility"
import { OpenApiRowDiffs } from "../tree-with-diffs/row-diffs"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"
import { OpenApiBlockEdge, OpenApiBlockEdgePair, OpenApiEdgeTones } from "./types"

type AnyOpenApiNode = OpenApiTreeNode | OpenApiTreeNodeWithDiffs

/** A row shown between a block's header and its end; `diff` = the diff that paints it. */
export type OpenApiPaintedRow = { readonly diff?: ChangedPropertyMetaData }

/**
 * Tones of the first (`head`) and last (`tail`) row of every OpenAPI block kind, from the same row
 * diffs that paint those rows (`OpenApiRowDiffs`). One accessor per block kind: a new kind is one
 * new method. Next to a nested JSON Schema / JSO viewer only the owning block's whole add / remove
 * counts (its rows are not visible to this layer). View state (selected node, expanded) is passed in.
 * Design: docs/design/openapi/features/block-separators.md -> "Block edge tones".
 */
export class OpenApiBlockEdges {
  /** Per-side background of a row painted by `diff`. */
  public static tones(diff: ChangedPropertyMetaData | undefined): OpenApiEdgeTones {
    return { before: diff?.styles.before.backgroundColor, after: diff?.styles.after.backgroundColor }
  }

  public static rowEdge(diff: ChangedPropertyMetaData | undefined): OpenApiBlockEdge {
    return { kind: 'row', tones: OpenApiBlockEdges.tones(diff) }
  }

  /** A card frame row: the whole-card diff only. */
  public static frameEdge(card: AnyOpenApiNode): OpenApiBlockEdge {
    return { kind: 'frame', tones: OpenApiBlockEdges.tones(OpenApiRowDiffs.Section.takeHeaderRowDiff(card)) }
  }

  /** The end of a nested JSON Schema / JSO viewer: the owning block's whole add / remove only. */
  public static nestedEdge(owner: AnyOpenApiNode): OpenApiBlockEdge {
    return { kind: 'row', tones: OpenApiBlockEdges.tones(OpenApiRowDiffs.Section.takeHeaderRowDiff(owner)) }
  }

  /** A block whose first and last rows are known rows. */
  public static rows(first: OpenApiPaintedRow, last: OpenApiPaintedRow): OpenApiBlockEdgePair {
    return { head: OpenApiBlockEdges.rowEdge(first.diff), tail: OpenApiBlockEdges.rowEdge(last.diff) }
  }

  /** A container (header row + child blocks): its header row, then the tail of its last child. */
  public static container(headerDiff: ChangedPropertyMetaData | undefined, children: readonly OpenApiBlockEdgePair[]): OpenApiBlockEdgePair {
    const head = OpenApiBlockEdges.rowEdge(headerDiff)
    return { head, tail: children[children.length - 1]?.tail ?? head }
  }

  /** Operation header block: its first and last visible header rows. */
  public static operationHeader(node: AnyOpenApiNode, visibility: OpenApiOperationRowVisibility): OpenApiBlockEdgePair {
    const rows = OpenApiNodeVisibility.resolveOperationHeaderRows(visibility)
    const diffOf = (index: number): ChangedPropertyMetaData | undefined =>
      OpenApiRowDiffs.Operation.takeHeaderRowDiff(node, rows[index], visibility.deprecatedTagRow)
    return OpenApiBlockEdges.rows({ diff: diffOf(0) }, { diff: diffOf(rows.length - 1) })
  }

  /** Security title + toolbar. */
  public static securityHeader(security: AnyOpenApiNode): OpenApiBlockEdgePair {
    return OpenApiBlockEdges.rows(
      { diff: OpenApiRowDiffs.Section.takeHeaderRowDiff(security) },
      { diff: OpenApiRowDiffs.Security.takeToolbarRowDiff(security) },
    )
  }

  /** The "No authentication" text of an anonymous alternative. */
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
    return { head: OpenApiBlockEdges.rowEdge(OpenApiRowDiffs.Section.takeHeaderRowDiff(node)), tail: OpenApiBlockEdges.nestedEdge(node) }
  }

  /** Parameter group / response Headers (title + synthesized schema); collapsed = title only. */
  public static parameters(group: AnyOpenApiNode, state: { readonly expanded?: boolean } = {}): OpenApiBlockEdgePair {
    const head = OpenApiBlockEdges.rowEdge(OpenApiRowDiffs.Section.takeHeaderRowDiff(group))
    return { head, tail: state.expanded === false ? head : OpenApiBlockEdges.nestedEdge(group) }
  }

  /**
   * Body (request / response): title, optional description, then the selected media type's schema.
   * Without a schema the last of title / description ends the block.
   */
  public static body(headerDiff: ChangedPropertyMetaData | undefined, description: OpenApiPaintedRow | undefined, selectedMediaType: AnyOpenApiNode | undefined): OpenApiBlockEdgePair {
    const head = OpenApiBlockEdges.rowEdge(headerDiff)
    if (selectedMediaType && OpenApiBlockEdges.hasSchema(selectedMediaType)) {
      return { head, tail: OpenApiBlockEdges.nestedEdge(selectedMediaType) }
    }
    return { head, tail: description ? OpenApiBlockEdges.rowEdge(description.diff) : head }
  }

  /** The selected response's description row. */
  public static responseDescription(response: AnyOpenApiNode): OpenApiBlockEdgePair {
    const row = { diff: OpenApiRowDiffs.NodeLevel.takeRowDiff(response, 'description') }
    return OpenApiBlockEdges.rows(row, row)
  }

  private static hasSchema(mediaType: AnyOpenApiNode): boolean {
    const schema: unknown = Reflect.get(mediaType.value() ?? {}, 'schema')
    return typeof schema === 'object' && schema !== null
  }
}
