import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "../../../../model/async-api/types/node-kind";
import { inlineBindingParameters } from "../transformers/inline-binding-params";
import { inlineJsoPropertyParameters } from "../transformers/inline-jso-property-params";
import { liftAddressTransformer } from "../transformers/lift-address";
import { renameMessageParams } from "../transformers/rename-message-params";
import { AsyncApiCrawlRule } from "./types";

export function getAsyncApiCrawlRules(
  kind: AsyncApiTreeNodeKind = AsyncApiTreeNodeKinds.ROOT,
): CrawlRules<AsyncApiCrawlRule> {
  return {
    // Specification
    '/operations': {
      '/*': () => ({
        ...getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.OPERATION),
        transformers: [liftAddressTransformer],
      }),
    },
    // Operation
    '/channel': {
      kind: AsyncApiTreeNodeKinds.CHANNEL,
    },
    '/bindings': {
      '/*': {
        '/*': () => ({
          kind: AsyncApiTreeNodeKinds.JSO_PROPERTY,
          transformers: [inlineJsoPropertyParameters],
        }),
        kind: AsyncApiTreeNodeKinds.BINDING,
        transformers: [inlineBindingParameters],
      },
      kind: AsyncApiTreeNodeKinds.BINDINGS,
      complex: true,
    },
    '/messages': {
      '/*': () => ({
        ...getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.MESSAGE),
        transformers: [renameMessageParams],
      }),
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
  }
}
