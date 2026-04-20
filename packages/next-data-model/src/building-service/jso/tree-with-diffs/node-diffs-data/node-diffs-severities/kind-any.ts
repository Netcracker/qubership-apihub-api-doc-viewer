import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator";
import { NodeDiffs, NodeDiffsSeverities, NodeDiffsSeverity, NodeDiffsSeverityPlacemennt } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";

export class JsoNodeDiffsSeveritiesAggregatorKindAny extends AbstractNodeDiffsSeveritiesAggregator {
  public aggregate(
    nodeDiffs: NodeDiffs<JsoTreeNodeValue | null>,
  ): NodeDiffsSeverities | undefined {
    const wholeNodeDiff = nodeDiffs[""];
    if (wholeNodeDiff) {
      const diff = wholeNodeDiff.data;
      const nodeDiffsSeverity: NodeDiffsSeverity = {
        type: diff.type,
        causedAt: [],
      };
      if (isDiffReplace(diff) || isDiffRemove(diff)) {
        nodeDiffsSeverity.causedAt = diff.beforeDeclarationPaths[0];
      } else if (isDiffAdd(diff)) {
        nodeDiffsSeverity.causedAt = diff.afterDeclarationPaths[0];
      }
      return {
        [NodeDiffsSeverityPlacemennt.TitleRow]: nodeDiffsSeverity,
      };
    }

    const titleDiff = nodeDiffs["title"];
    if (!titleDiff) {
      return undefined;
    }
    const diff = titleDiff.data;
    const nodeDiffsSeverity: NodeDiffsSeverity = {
      type: diff.type,
      causedAt: [],
    };
    if (isDiffReplace(diff) || isDiffRemove(diff)) {
      nodeDiffsSeverity.causedAt = diff.beforeDeclarationPaths[0];
    } else if (isDiffAdd(diff)) {
      nodeDiffsSeverity.causedAt = diff.afterDeclarationPaths[0];
    }
    return {
      [NodeDiffsSeverityPlacemennt.TitleRow]: nodeDiffsSeverity,
    };
  }
}
