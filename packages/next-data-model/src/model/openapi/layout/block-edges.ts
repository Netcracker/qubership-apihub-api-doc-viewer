import { NodeDiffsSeverityPlacemennt } from "../../abstract/tree-with-diffs/tree-node.interface"
import { BlockEdges } from "../../abstract/layout/block-edges"
import { LayoutBlockEdge, LayoutBlockEdgePair } from "../../abstract/layout/types"
import { OpenApiDeprecatedTagRow, OpenApiOperationHeaderRow } from "../node-visibility"
import { OpenApiRowDiffs } from "../tree-with-diffs/row-diffs"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"
import { OpenApiSectionViewState } from "./types"

type AnyOpenApiNode = OpenApiTreeNode | OpenApiTreeNodeWithDiffs

/**
 * Edges of the OpenAPI operation rows (operation header, Responses, Body, description), built from the
 * same row diffs and severity placements the rows render (`OpenApiRowDiffs`, `node.diffsSeverities`).
 * The generic edges (row, card, nested viewer, containers, section title rows) are on `BlockEdges`;
 * the Security section's on `SecurityBlockEdges`.
 * Design: docs/design/openapi/features/vertical-gaps.md -> "Algorithm".
 */
export class OpenApiBlockEdges extends BlockEdges {
  /** One operation header row (title, operation ID, address, description, external docs). */
  public static operationHeaderRow(node: AnyOpenApiNode, row: OpenApiOperationHeaderRow, deprecatedTagRow: OpenApiDeprecatedTagRow): LayoutBlockEdge {
    return BlockEdges.row({
      diff: OpenApiRowDiffs.Operation.takeHeaderRowDiff(node, row, deprecatedTagRow),
      severity: BlockEdges.severityOf(node, OpenApiRowDiffs.Operation.resolveHeaderRowSeverityPlacement(row, deprecatedTagRow)),
    })
  }

  /** The Responses title row (yellow when a code option changed as an option). */
  public static responsesTitleRow(node: AnyOpenApiNode): LayoutBlockEdge {
    return BlockEdges.row({ diff: OpenApiRowDiffs.Responses.takeTitleRowDiff(node), severity: BlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /** The request Body title row (required and media-type option changes included). */
  public static requestBodyTitleRow(node: AnyOpenApiNode): LayoutBlockEdge {
    return BlockEdges.row({ diff: OpenApiRowDiffs.RequestBody.takeHeaderRowDiff(node), severity: BlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /** A response Body title row (painted by its `content` node, media-type option changes included). */
  public static responseBodyTitleRow(content: AnyOpenApiNode): LayoutBlockEdge {
    return BlockEdges.row({ diff: OpenApiRowDiffs.ResponseBody.takeHeaderRowDiff(content), severity: BlockEdges.severityOf(content, NodeDiffsSeverityPlacemennt.TitleRow) })
  }

  /**
   * A Body (request / response): its title row, the optional description row, then the selected media
   * type's schema (a nested viewer) when it has one. Collapsed (view state): the title row only.
   */
  public static body(
    title: LayoutBlockEdge,
    description: LayoutBlockEdge | undefined,
    selectedMediaType: AnyOpenApiNode | undefined,
    state: OpenApiSectionViewState = { expanded: true },
  ): LayoutBlockEdgePair {
    if (!state.expanded) {
      return BlockEdges.single(title)
    }
    const tail = selectedMediaType && OpenApiBlockEdges.hasSchema(selectedMediaType)
      ? BlockEdges.nested(selectedMediaType)
      : description ?? title
    return { head: title, tail }
  }

  /** Whether a media type has a schema to show (an object; `true` / `false` schemas are prepared as objects). */
  public static hasSchema(mediaType: AnyOpenApiNode): boolean {
    const schema: unknown = Reflect.get(mediaType.value() ?? {}, 'schema')
    return typeof schema === 'object' && schema !== null
  }

  /** A description row of a node (request body, response): its `description` diff, else the whole node's. */
  public static descriptionRow(node: AnyOpenApiNode): LayoutBlockEdge {
    return BlockEdges.row({ diff: OpenApiRowDiffs.NodeLevel.takeRowDiff(node, 'description'), severity: BlockEdges.severityOf(node, NodeDiffsSeverityPlacemennt.DescriptionRow) })
  }
}
