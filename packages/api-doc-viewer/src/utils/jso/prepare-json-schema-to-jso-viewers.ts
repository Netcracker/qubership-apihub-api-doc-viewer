import { DiffMetaKeys } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiNodeJsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value-type"
import { JsoTreeNodeValueWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/jso/tree-with-diffs/node-value"
import { JsoTreeNodeValueBase } from "@netcracker/qubership-apihub-next-data-model/model/jso/tree/node-value"
import { isObject } from "@netcracker/qubership-apihub-next-data-model/utilities"
import { NodeKey } from "@netcracker/qubership-apihub-next-data-model/utility-types"

export function prepareJsonSchemaForJsoViewer(
  nodeKey: NodeKey,
  nodeValue: JsoTreeNodeValueBase | null | undefined
): object | undefined {
  if (!nodeValue) {
    return undefined
  }

  if (nodeValue.valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA &&
    nodeValue.valueType !== AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    return undefined
  }

  return isObject(nodeValue.value)
    ? { type: 'object', properties: { [nodeKey]: nodeValue.value } }
    : undefined
}

export function prepareJsonSchemaForJsoDiffsViewer(
  nodeKey: NodeKey,
  nodeValue: JsoTreeNodeValueWithDiffs | null | undefined,
  nodeValueDiff: ChangedPropertyMetaData | undefined,
  diffMetaKeys: DiffMetaKeys | undefined
): object | undefined {
  if (!nodeValue) {
    return undefined
  }

  if (nodeValue.before.valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA &&
    nodeValue.before.valueType !== AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA &&
    nodeValue.after.valueType !== AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA &&
    nodeValue.after.valueType !== AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA) {
    return undefined
  }

  const diff = nodeValueDiff?.data
  const diffsMetaKey = diffMetaKeys?.diffsMetaKey

  if ((
    nodeValue.before.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA ||
    nodeValue.before.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA
  ) && isObject(nodeValue.before.value)) {
    return {
      type: 'object',
      properties: {
        [nodeKey]: nodeValue.before.value,
        ...(diff && diffsMetaKey ? { [diffsMetaKey]: { [nodeKey]: diff } } : {}),
      },
    }
  }

  if ((
    nodeValue.after.valueType === AsyncApiNodeJsoPropertyValueTypes.JSON_SCHEMA ||
    nodeValue.after.valueType === AsyncApiNodeJsoPropertyValueTypes.MULTI_SCHEMA
  ) && isObject(nodeValue.after.value)) {
    return {
      type: 'object',
      properties: {
        [nodeKey]: nodeValue.after.value,
        ...(diff && diffsMetaKey ? { [diffsMetaKey]: { [nodeKey]: diff } } : {}),
      },
    }
  }

  return undefined
}
