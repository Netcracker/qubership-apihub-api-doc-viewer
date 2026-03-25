import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeCrawlState, AsyncApiTreeWithDiffsCrawlState, CommonState } from "../state/types";
import { AsyncApiNodeMeta } from "../../../../model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "../../../../model/async-api/types/node-value";
import { SchemaTransformFunc } from "../transformers/types/types";

export type SchemaCrawlRule<K extends string, S> = {
  kind: K;
  complex?: boolean;
  transformers?: SchemaTransformFunc<S>[];
};

export type AsyncApiCommonCrawlState = CommonState<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
>

export type AsyncApiCrawlRule<S extends AsyncApiCommonCrawlState = AsyncApiTreeCrawlState> =
  SchemaCrawlRule<AsyncApiTreeNodeKind, S>;

export type AsyncApiTreeWithDiffsCrawlRule = AsyncApiCrawlRule<AsyncApiTreeWithDiffsCrawlState>;
