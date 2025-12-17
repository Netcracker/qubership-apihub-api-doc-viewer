import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "../../../../model/async-api/types/node-kind";
import { ASYNC_API_TRANSFORMERS } from "../transformers";
import { AsyncApiCrawlRule } from "./types";

export function getAsyncApiCrawlRules(
  kind: AsyncApiTreeNodeKind = AsyncApiTreeNodeKinds.ROOT,
): CrawlRules<AsyncApiCrawlRule> {
  return {
    // Specification
    '/operations': {
      '/*': () => getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.OPERATION),
    },
    // Operation
    '/channel': {
      kind: AsyncApiTreeNodeKinds.CHANNEL,
    },
    '/bindings': {
      '/*': {
        '/*': () => getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.JSO_PROPERTY),
        kind: AsyncApiTreeNodeKinds.BINDING,
      },
      kind: AsyncApiTreeNodeKinds.BINDINGS,
      complex: true,
    },
    '/messages': {
      '/*': () => getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.MESSAGE),
      kind: AsyncApiTreeNodeKinds.MESSAGES,
      complex: true,
    },
    // Message
    '/headers': {
      kind: AsyncApiTreeNodeKinds.MESSAGE_HEADERS
    },
    '/payload': {
      kind: AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD,
    },
    kind,
    transformers: ASYNC_API_TRANSFORMERS,
  }
}
