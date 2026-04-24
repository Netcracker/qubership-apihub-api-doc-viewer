import { SchemaTransformFunc } from "@apihub/next-data-model/building-service/async-api/json-crawl-entities/transformers/types/types";
import { JsoTreeNodeKind } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeCrawlState, JsoTreeWithDiffsCrawlState } from "../state/types";

export type SchemaCrawlRule<K extends string, S> = {
  kind: K;
  complex?: boolean;
  transformers?: SchemaTransformFunc<S>[];
};

export type JsoCrawlRule<S extends JsoTreeCrawlState = JsoTreeCrawlState> = SchemaCrawlRule<JsoTreeNodeKind, S>;

export type JsoWithDiffsCrawlRule =
  JsoCrawlRule<JsoTreeWithDiffsCrawlState>;
