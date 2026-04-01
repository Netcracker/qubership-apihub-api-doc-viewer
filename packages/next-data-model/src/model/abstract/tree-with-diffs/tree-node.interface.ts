import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types";
import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types";
import { JsonPath } from "@netcracker/qubership-apihub-json-crawl";
import { ITreeNode, TreeNodeComplexityTypes, TreeNodeParams } from "../tree/tree-node.interface";

export interface TreeNodeWithDiffsParams<
  V extends object | null,
  K extends string,
  M extends object,
> extends TreeNodeParams<V, K, M> {
  parent: ITreeNodeWithDiffs<V, K, M> | null
  container: ITreeNodeWithDiffs<V, K, M> | null
}

export interface SimpleTreeNodeWithDiffsParams<
  V extends object | null,
  K extends string,
  M extends object,
> extends TreeNodeWithDiffsParams<V, K, M> {
  type: typeof TreeNodeComplexityTypes.SIMPLE
}

export interface ComplexTreeNodeWithDiffsParams<
  V extends object | null,
  K extends string,
  M extends object,
> extends TreeNodeWithDiffsParams<V, K, M> {
  type: typeof TreeNodeComplexityTypes.COMPLEX
}

export enum HighlightVariant {
  Red = 'red',
  Green = 'green',
  Yellow = 'yellow',
  Gray = 'gray',
}
export type DiffStyles = {
  isContentVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}
export type ChangedPropertyKey<V extends object | null = object | null> = "" | (V extends null ? never : keyof V)
export type ChangedPropertyMetaData = {
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
}
export type NodeDiffs<V extends object | null = object | null> = Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>

export enum NodeDiffsSeverityPlacemennt {
  TitleRow = 'title-row',
  DescriptionRow = 'description-row',
  SummaryRow = 'summary-row',
  AddressRow = 'address-row',
  BindingVersionRow = 'binding-version-row',
}
export type NodeDiffsSeverity = {
  type: DiffType
  causedAt: JsonPath
}
export type NodeDiffsSeverities = Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>

export type NodeDescendantDiffs = Partial<Record<NodeId, ChangedPropertyMetaData>>

export type NodeDescendantDiffsSummary = Set<DiffType>

export type NodeDiffsSummary = Set<DiffType>

export interface ITreeNodeWithDiffs<
  V extends object | null = object | null,
  K extends string = string,
  M extends object = object,
> extends ITreeNode<V, K, M> {
  diffs: NodeDiffs<V>
  diffsSummary: NodeDiffsSummary
  descendantDiffs: NodeDescendantDiffs
  descendantDiffsSummary: NodeDescendantDiffsSummary
  diffsSeverities: NodeDiffsSeverities

  createCycledClone(
    id: NodeId,
    key: NodeKey,
    parent: ITreeNodeWithDiffs | null,
  ): ITreeNodeWithDiffs<V, K, M>

  value(nestedNodeId?: NodeId): V | null;

  meta(): M;

  childrenNodes(nestedNodeId?: NodeId): ITreeNodeWithDiffs<V, K, M>[]

  nestedNodes(): ITreeNodeWithDiffs<V, K, M>[]

  findNestedNode(nestedNodeId?: NodeId, recursive?: boolean): ITreeNodeWithDiffs<V, K, M> | null

  addChildNode(node: ITreeNodeWithDiffs<V, K, M>): void

  addNestedNode(node: ITreeNodeWithDiffs<V, K, M>): void
}
