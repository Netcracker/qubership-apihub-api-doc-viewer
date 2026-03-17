import { Diff } from "@netcracker/qubership-apihub-api-diff";
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types";
import { JsonPath } from "@netcracker/qubership-apihub-json-crawl";
import { ITreeNode } from "../tree/tree-node.interface";

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
export type NodeDiffs<V extends object | null = object | null> = Record<ChangedPropertyKey<V>, ChangedPropertyMetaData | undefined> 

export enum NodeDiffsSeverityPlacemennt {
  TitleRow = 'title-row',
  DescriptionRow = 'description-row',
  SummaryRow = 'summary-row',
  AddressRow = 'address-row',
}
export type NodeDiffsSeverity = {
  type: DiffType
  causedAt: JsonPath
}
export type NodeDiffsSeverities = Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>

export interface ITreeNodeWithDiffs<
  V extends object | null = object | null,
  K extends string = string,
  M extends object = object,
> extends ITreeNode<V, K, M> {
  diffs: NodeDiffs<V>
  descendantDiffs: Set<DiffType>
  diffsSeverities: NodeDiffsSeverities
}
