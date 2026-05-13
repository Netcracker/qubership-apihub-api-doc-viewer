import { JsoTreeNodeKinds } from "@apihub/next-data-model/model/jso/types/node-kind";
import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { JsoCrawlRule } from "./types";
import { JsoRawValueUtilities } from "../transformers/raw-jso-property-to-base-jso-node-value";

export function getJsoCrawlRules(): CrawlRules<JsoCrawlRule> {
  return {
    '/value': () => ({
      '/*': () => getJsoCrawlRules(),
    }),
    transformers: [JsoRawValueUtilities.transformRawJsoPropertyToBaseJsoNodeValue],
    kind: JsoTreeNodeKinds.PROPERTY,
  }
}
