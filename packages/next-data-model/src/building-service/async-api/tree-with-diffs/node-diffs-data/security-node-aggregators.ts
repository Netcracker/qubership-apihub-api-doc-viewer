import { SecurityNodeAggregators } from "@apihub/next-data-model/building-service/security/tree-with-diffs/aggregators";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";

/** Record-driven aggregators of the Security section kinds in the AsyncAPI tree (shared by the five factories). */
export const ASYNC_API_SECURITY_NODE_AGGREGATORS = new SecurityNodeAggregators<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiTreeNodeMeta
>();
