import {
  ChangedPropertyMetaData,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { OpenApiDeprecatedTagRow, OpenApiOperationHeaderRow } from "../node-visibility"
import { OpenApiRowDiffs } from "../tree-with-diffs/row-diffs"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"
import { OpenApiBlockEdge, OpenApiBlockEdgePair, OpenApiEdgeTones } from "./types"

type AnyOpenApiNode = OpenApiTreeNode | OpenApiTreeNodeWithDiffs

/** A row as the layout sees it: the diff that paints it and the severity its floating badge shows. */
export type OpenApiPaintedRow = {
  readonly diff?: ChangedPropertyMetaData
  readonly severity?: NodeDiffsSeverity
}

/**
 * Edges of the OpenAPI layout elements, built from the same row diffs and severity placements the
 * rows render (`OpenApiRowDiffs`, `node.diffsSeverities`), so a separator band always continues its
 * neighbour. One accessor per element (a row of a given kind, a card, a nested viewer); containers
 * take the head of their first child and the tail of their last one.
 * Design: docs/design/openapi/features/vertical-gaps.md -> "Algorithm".
 */
export class OpenApiBlockEdges {
  /** Per-side background of a row painted by `diff`. */
  public static tones(diff: ChangedPropertyMetaData | undefined): OpenApiEdgeTones {
    return { before: diff?.styles.before.backgroundColor, after: diff?.styles.after.backgroundColor }
  }

  /** The severity a node's row of `placement` shows (plain trees: none). */
  public static severityOf(node: AnyOpenApiNode, placement: NodeDiffsSeverityPlacemennt): NodeDiffsSeverity | undefined {
    return 'diffsSeverities' in node ? node.diffsSeverities?.[placement] : undefined
  }

  /** An OpenAPI row: its own tones and badge. */
  public static row(row: OpenApiPaintedRow): OpenApiBlockEdge {
    return { kind: 'row', tones: OpenApiBlockEdges.tones(row.diff), badge: row.severity?.type }
  }

  /** A nested JSON Schema / JSO viewer: its rows are not visible here, only its owner's whole add / remove. */
  public static nested(owner: AnyOpenApiNode): OpenApiBlockEdge {
    return { ...OpenApiBlockEdges.wholeBlock(owner), kind: 'nested' }
  }

  /** A security card seen from outside its border: the whole-card add / remove only. */
  public static card(card: AnyOpenApiNode): OpenApiBlockEdge {
    return { ...OpenApiBlockEdges.wholeBlock(card), kind: 'card' }
  }

  /** A block made of one element. */
  public static single(edge: OpenApiBlockEdge): OpenApiBlockEdgePair {
    return { head: edge, tail: edge }
  }

  /** A container: the head of its first child, the tail of its last one. */
  public static container(children: readonly [OpenApiBlockEdgePair, ...OpenApiBlockEdgePair[]]): OpenApiBlockEdgePair {
    return { head: children[0].head, tail: children[children.length - 1].tail }
  }

  /** A section / subsection title row (Request, Security, a parameter group, Extensions, Headers): a whole add / remove. */
  public static sectionTitleRow(node: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({ diff: OpenApiRowDiffs.Section.takeHeaderRowDiff(node), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /** One operation header row (title, operation ID, address, description, external docs). */
  public static operationHeaderRow(node: AnyOpenApiNode, row: OpenApiOperationHeaderRow, deprecatedTagRow: OpenApiDeprecatedTagRow): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({
      diff: OpenApiRowDiffs.Operation.takeHeaderRowDiff(node, row, deprecatedTagRow),
      severity: OpenApiBlockEdges.severityOf(node, OpenApiRowDiffs.Operation.resolveHeaderRowSeverityPlacement(row, deprecatedTagRow)),
    })
  }

  /** The security toolbar row. */
  public static securityToolbarRow(security: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({
      diff: OpenApiRowDiffs.Security.takeToolbarRowDiff(security),
      severity: OpenApiBlockEdges.severityOf(security, NodeDiffsSeverityPlacemennt.SelectorRow),
    })
  }

  /** The "No authentication" text of an anonymous alternative (a row without a floating badge). */
  public static noAuthenticationRow(alternative: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({ diff: OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(alternative) })
  }

  /** The Responses title row (yellow when a code option changed as an option). */
  public static responsesTitleRow(node: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({ diff: OpenApiRowDiffs.Responses.takeTitleRowDiff(node), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /** The request Body title row (required and media-type option changes included). */
  public static requestBodyTitleRow(node: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({ diff: OpenApiRowDiffs.RequestBody.takeHeaderRowDiff(node), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /** A response Body title row (painted by its `content` node, media-type option changes included). */
  public static responseBodyTitleRow(content: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({ diff: OpenApiRowDiffs.ResponseBody.takeHeaderRowDiff(content), severity: OpenApiBlockEdges.severityOf(content, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /**
   * A Body (request / response): its title row, the optional description row, then the selected media
   * type's schema (a nested viewer) when it has one. Collapsed (view state): the title row only.
   */
  public static body(
    title: OpenApiBlockEdge,
    description: OpenApiBlockEdge | undefined,
    selectedMediaType: AnyOpenApiNode | undefined,
    state: { readonly expanded: boolean } = { expanded: true },
  ): OpenApiBlockEdgePair {
    if (!state.expanded) {
      return OpenApiBlockEdges.single(title)
    }
    const tail = selectedMediaType && OpenApiBlockEdges.hasSchema(selectedMediaType)
      ? OpenApiBlockEdges.nested(selectedMediaType)
      : description ?? title
    return { head: title, tail }
  }

  /** Whether a media type has a schema to show (an object; `true` / `false` schemas are prepared as objects). */
  public static hasSchema(mediaType: AnyOpenApiNode): boolean {
    const schema: unknown = Reflect.get(mediaType.value() ?? {}, 'schema')
    return typeof schema === 'object' && schema !== null
  }

  /** A description row of a node (request body, response): its `description` diff, else the whole node's. */
  public static descriptionRow(node: AnyOpenApiNode): OpenApiBlockEdge {
    return OpenApiBlockEdges.row({ diff: OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description'), severity: OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.DescriptionRow) })
  }

  /** Tones and badge of a wholly added / removed node, nothing otherwise. */
  private static wholeBlock(node: AnyOpenApiNode): Omit<OpenApiBlockEdge, 'kind'> {
    const whole = OpenApiRowDiffs.Section.takeHeaderRowDiff(node)
    return {
      tones: OpenApiBlockEdges.tones(whole),
      badge: whole ? OpenApiBlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow)?.type : undefined,
    }
  }
}
