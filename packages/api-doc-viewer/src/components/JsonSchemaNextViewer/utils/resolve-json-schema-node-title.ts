import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-meta"
import { BadgeKind, BADGE_KIND_ALTERNATIVE_INFO, BADGE_KIND_INFO } from "@apihub/components/kit/ux/UxBadge/types"
import { isJsonSchemaRootNode } from "./node-type-checkers"

export type JsonSchemaNodeTitleDisplay =
  | { variant: "badge"; text: string; badgeKind: BadgeKind }
  | { variant: "text"; text: string }

export type ResolveJsonSchemaNodeTitleOptions = {
  node: JsonSchemaTreeNode
  meta: JsonSchemaTreeNodeMeta | null | undefined
  headerRowTitle?: string
}

const DEFAULT_HEADER_ROW_TITLE = "Type: "

export function resolveJsonSchemaNodeTitleDisplay(
  options: ResolveJsonSchemaNodeTitleOptions,
): JsonSchemaNodeTitleDisplay {
  const { node, meta, headerRowTitle } = options
  const kind = node.kind

  if (isJsonSchemaRootNode(node)) {
    return { variant: "text", text: headerRowTitle ?? DEFAULT_HEADER_ROW_TITLE }
  }

  if (kind === JsonSchemaTreeNodeKinds.ADDITIONAL_PROPERTIES) {
    const fragment = meta?._fragment ?? node.value()
    if (fragment === false) {
      return {
        variant: "badge",
        text: "no additional properties",
        badgeKind: BADGE_KIND_ALTERNATIVE_INFO,
      }
    }
    return { variant: "badge", text: "additional property", badgeKind: BADGE_KIND_INFO }
  }

  if (kind === JsonSchemaTreeNodeKinds.PATTERN_PROPERTY) {
    return { variant: "badge", text: "additional property", badgeKind: BADGE_KIND_INFO }
  }

  if (kind === JsonSchemaTreeNodeKinds.ITEMS) {
    return { variant: "badge", text: "item", badgeKind: BADGE_KIND_INFO }
  }

  if (kind === JsonSchemaTreeNodeKinds.ADDITIONAL_ITEMS) {
    return { variant: "badge", text: "additional item", badgeKind: BADGE_KIND_INFO }
  }

  if (kind === JsonSchemaTreeNodeKinds.ITEM) {
    return { variant: "text", text: `[${String(node.key)}]` }
  }

  return { variant: "text", text: String(node.key) }
}

export function isJsonSchemaBooleanAdditionalPropertiesNode(
  node: JsonSchemaTreeNode,
  meta: JsonSchemaTreeNodeMeta | null | undefined,
): boolean {
  const fragment = meta?._fragment ?? node.value()
  return node.kind === JsonSchemaTreeNodeKinds.ADDITIONAL_PROPERTIES
    && fragment === false
}
