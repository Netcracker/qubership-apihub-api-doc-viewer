import { JsoTreeNodeKinds } from "@apihub/next-data-model/model/jso/types/node-kind";
import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl";
import { JsoWithDiffsCrawlRule } from "./types";

export function getJsoWithDiffsCrawlRules(): CrawlRules<JsoWithDiffsCrawlRule> {
  return {
    '/*': () => getJsoWithDiffsCrawlRules(),
    kind: JsoTreeNodeKinds.PROPERTY,
  }
}
