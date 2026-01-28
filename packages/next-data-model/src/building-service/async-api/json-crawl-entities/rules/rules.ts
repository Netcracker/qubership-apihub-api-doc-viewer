import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "../../../../model/async-api/types/node-kind";
import { aggregateSpecificationExtensions } from "../transformers/aggregate-specification-extensions";
import { defaultChannelAddressTransformer } from "../transformers/default-channel-address";
import { inlineBindingParameters } from "../transformers/inline-binding-params";
import { liftAddressTransformer } from "../transformers/lift-address";
import { renameMessageParams } from "../transformers/rename-message-params";
import { unifyParamsWithSchema } from "../transformers/unify-params-with-schema";
import { AsyncApiCrawlRule } from "./types";

export function getAsyncApiCrawlRules(
  kind: AsyncApiTreeNodeKind = AsyncApiTreeNodeKinds.ROOT,
): CrawlRules<AsyncApiCrawlRule> {
  return {
    // Specification
    '/operations': {
      '/*': () => ({
        ...getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.OPERATION),
        transformers: [liftAddressTransformer, defaultChannelAddressTransformer, aggregateSpecificationExtensions],
      }),
    },
    // Operation
    '/channel': () => ({
      ...getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.CHANNEL),
      '/messages': {
        kind: undefined, // Exclude channel messages
      },
      transformers: [defaultChannelAddressTransformer, aggregateSpecificationExtensions],
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
        transformers: [renameMessageParams, aggregateSpecificationExtensions],
      }),
      kind: AsyncApiTreeNodeKinds.MESSAGES,
      complex: true,
    },
    // Message
    '/headers': {
      kind: AsyncApiTreeNodeKinds.MESSAGE_HEADERS,
      transformers: [unifyParamsWithSchema],
    },
    '/payload': {
      kind: AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD,
      transformers: [unifyParamsWithSchema],
    },
    kind,
  }
}
