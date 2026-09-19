import { DiffMetaKeys } from '../../../../next-data-model/src/building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys';
import { ChangedPropertyMetaData } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { JsoTreeNodeValueWithDiffs } from '../../../../next-data-model/src/model/jso/tree-with-diffs/node-value';
import { JsoTreeNodeValueBase } from '../../../../next-data-model/src/model/jso/tree/node-value';
import { NodeKey } from '../../../../next-data-model/src/utility-types';
export declare function wrapJsonSchemaForViewer(nodeKey: NodeKey, schema: object | undefined): object | undefined;
export declare function wrapJsonSchemaForDiffsViewer(nodeKey: NodeKey, schema: object | undefined, nodeValueDiff: ChangedPropertyMetaData | undefined, diffMetaKeys: DiffMetaKeys | undefined): object | undefined;
export declare function prepareJsonSchemaForJsoViewer(nodeKey: NodeKey, nodeValue: JsoTreeNodeValueBase | null | undefined): object | undefined;
export declare function prepareJsonSchemaForJsoDiffsViewer(nodeKey: NodeKey, nodeValue: JsoTreeNodeValueWithDiffs | null | undefined, nodeValueDiff: ChangedPropertyMetaData | undefined, diffMetaKeys: DiffMetaKeys | undefined): object | undefined;
