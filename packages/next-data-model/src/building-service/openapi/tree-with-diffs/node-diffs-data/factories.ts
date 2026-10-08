import { OpenApiTreeNodeKind } from "../../../../model/openapi/types/node-kind"
import { OpenApiNodeDescendantDiffsSummaryAggregatorKindAny } from "./node-descendant-diffs-summary/kind-any"
import { OpenApiNodeDescendantDiffsAggregatorKindAny } from "./node-descendant-diffs/kind-any"
import { OpenApiNodeDiffsSeveritiesAggregatorKindAny } from "./node-diffs-severities/kind-any"
import { OpenApiNodeDiffsSummaryAggregatorKindAny } from "./node-diffs-summary/kind-any"
import { OpenApiNodeDiffsAggregatorKindAny } from "./node-diffs/kind-any"

/**
 * Factories of the five aggregator families. Every OpenAPI kind uses the `KindAny` strategy:
 * kind-specific semantics (presence, schema synthesis, security switching) are prepared once by
 * `OpenApiSpecWithDiffsTransformer`; aggregators only read records and map them to rows.
 * Instances are cached per kind (stateless).
 */
export class OpenApiNodeDiffsAggregatorFactory {
  private static readonly instances = new Map<OpenApiTreeNodeKind, OpenApiNodeDiffsAggregatorKindAny>()

  public static instance(kind: OpenApiTreeNodeKind): OpenApiNodeDiffsAggregatorKindAny {
    let instance = this.instances.get(kind)
    if (!instance) {
      instance = new OpenApiNodeDiffsAggregatorKindAny(kind)
      this.instances.set(kind, instance)
    }
    return instance
  }
}

export class OpenApiNodeDiffsSeveritiesAggregatorFactory {
  private static readonly instances = new Map<OpenApiTreeNodeKind, OpenApiNodeDiffsSeveritiesAggregatorKindAny>()

  public static instance(kind: OpenApiTreeNodeKind): OpenApiNodeDiffsSeveritiesAggregatorKindAny {
    let instance = this.instances.get(kind)
    if (!instance) {
      instance = new OpenApiNodeDiffsSeveritiesAggregatorKindAny(kind)
      this.instances.set(kind, instance)
    }
    return instance
  }
}

export class OpenApiNodeDescendantDiffsAggregatorFactory {
  private static readonly INSTANCE = new OpenApiNodeDescendantDiffsAggregatorKindAny()

  public static instance(): OpenApiNodeDescendantDiffsAggregatorKindAny {
    return this.INSTANCE
  }
}

export class OpenApiNodeDiffsSummaryAggregatorFactory {
  private static readonly INSTANCE = new OpenApiNodeDiffsSummaryAggregatorKindAny()

  public static instance(): OpenApiNodeDiffsSummaryAggregatorKindAny {
    return this.INSTANCE
  }
}

export class OpenApiNodeDescendantDiffsSummaryAggregatorFactory {
  private static readonly INSTANCE = new OpenApiNodeDescendantDiffsSummaryAggregatorKindAny()

  public static instance(): OpenApiNodeDescendantDiffsSummaryAggregatorKindAny {
    return this.INSTANCE
  }
}
