import { CommonState } from "@apihub/next-data-model/building-service/async-api/json-crawl-entities/state/types"
import { JsoTreeNodeWithDiffs } from "@apihub/next-data-model/model/jso/types/aliases"
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind"
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta"
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value"

export type JsoTreeCrawlState = CommonState<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta
>

export type JsoTreeWithDiffsCrawlState = CommonState<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta,
  JsoTreeNodeWithDiffs
>