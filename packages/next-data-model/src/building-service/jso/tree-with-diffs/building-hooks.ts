import { JsoTreeNodeValueWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/node-value";
import { JsoTreeNodeWithDiffs } from "@apihub/next-data-model/model/jso/types/aliases";
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { SyncCrawlHook } from "@netcracker/qubership-apihub-json-crawl";
import { JsoWithDiffsCrawlRule } from "../json-crawl-entities/rules/types";
import { JsoTreeWithDiffsCrawlState } from "../json-crawl-entities/state/types";
import { createNewTreeBuildingHooks, NewTreeBuildingHooksFactoryParams } from "../shared/new-tree-building-hooks";

type JsoTreeWithDiffsBuildingNodeParams = {
  value: object | null
  newDataLevel: boolean
  parent: JsoTreeNodeWithDiffs | null
  container: JsoTreeNodeWithDiffs | null
}

export interface JsoTreeWithDiffsBuildingHooksFactoryParams
  extends NewTreeBuildingHooksFactoryParams<
    JsoTreeNodeValueWithDiffs | null,
    JsoTreeNodeKind,
    JsoTreeNodeMeta,
    JsoTreeNodeWithDiffs,
    JsoTreeWithDiffsCrawlState,
    JsoTreeWithDiffsBuildingNodeParams
  > {
}

export function createJsoTreeWithDiffsBuildingHooks(
  params: JsoTreeWithDiffsBuildingHooksFactoryParams
): [
    SyncCrawlHook<JsoTreeWithDiffsCrawlState, JsoWithDiffsCrawlRule>,
    SyncCrawlHook<JsoTreeWithDiffsCrawlState, JsoWithDiffsCrawlRule>,
    SyncCrawlHook<JsoTreeWithDiffsCrawlState, JsoWithDiffsCrawlRule>,
  ] {
  return createNewTreeBuildingHooks<
    JsoTreeNodeValueWithDiffs | null,
    JsoTreeNodeKind,
    JsoTreeNodeMeta,
    JsoTreeNodeWithDiffs,
    JsoTreeWithDiffsCrawlState,
    JsoWithDiffsCrawlRule,
    JsoTreeWithDiffsBuildingNodeParams
  >(params);
}
