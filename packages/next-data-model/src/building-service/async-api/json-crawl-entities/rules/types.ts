import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeCrawlState } from "../state/types";
import { SchemaTransformFunc } from "../transformers/types";

export type SchemaCrawlRule<K extends string, S> = {
  kind: K;
  transformers?: SchemaTransformFunc<S>[];
};

export type AsyncApiCrawlRule = SchemaCrawlRule<AsyncApiTreeNodeKind, AsyncApiTreeCrawlState>;
