import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "../../../../model/async-api/types/node-kind";
import { ASYNC_API_TRANSFORMERS } from "../transformers";
import { AsyncApiCrawlRule } from "./types";

export function getAsyncApiCrawlRules(
  kind: AsyncApiTreeNodeKind = AsyncApiTreeNodeKinds.ROOT,
): CrawlRules<AsyncApiCrawlRule> {
  return {
    kind,
    transformers: ASYNC_API_TRANSFORMERS,
  }
}
