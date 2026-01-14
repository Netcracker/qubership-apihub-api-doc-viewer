import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "../../../../model/async-api/types/node-kind";
import { defaultChannelAddressTransformer } from "../transformers/default-channel-address";
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
    '/channel': () => ({
      ...getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.CHANNEL),
      '/messages': {
        kind: undefined, // Exclude channel messages
      },
      transformers: [defaultChannelAddressTransformer],
    }),
    '/bindings': {
      '/*': { // TODO: get rid of these sub-rules
        kind: AsyncApiTreeNodeKinds.BINDING,
        transformers: [inlineBindingParameters], // TODO: should move all binding content into field "binding"
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
      kind: AsyncApiTreeNodeKinds.JSO_PROPERTY,
      transformers: [inlineJsoPropertyParameters],
    },
    '/payload': {
      kind: AsyncApiTreeNodeKinds.JSO_PROPERTY,
      transformers: [inlineJsoPropertyParameters],
    },
    kind,
  }
}
