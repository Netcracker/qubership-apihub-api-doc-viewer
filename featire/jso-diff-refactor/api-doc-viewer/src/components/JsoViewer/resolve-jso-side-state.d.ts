import { ChangedPropertyMetaData, DiffStyles, HighlightVariant } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { LayoutSide } from '../../types/internal/LayoutSide';
import { JsoTreeNodeValueBase } from '../../../../next-data-model/src/model/jso/types/node-value';
import { JsoPropertyValueType } from '../../../../next-data-model/src/model/jso/types/node-value-type';
type ResolveJsoSideStateInput = {
    nodeValue?: JsoTreeNodeValueBase | null;
    diff?: ChangedPropertyMetaData;
    layoutSide: LayoutSide;
};
export type ResolvedJsoSideState = {
    isVisible: boolean;
    showSubheader: boolean;
    resolvedValue: unknown;
    resolvedValueType: JsoPropertyValueType;
    isPredefinedValueSet: boolean;
    isComplexValue: boolean;
    sideStyles?: DiffStyles;
};
export declare function resolveJsoSideState(input: ResolveJsoSideStateInput): ResolvedJsoSideState;
export declare function isDiffWithComplexValue(diff?: ChangedPropertyMetaData): boolean;
export declare function resolveHiddenDescendantsLayoutSide(diff?: ChangedPropertyMetaData): LayoutSide | undefined;
export declare function isPrimitiveComplexTransitionReplaceDiff(diff?: ChangedPropertyMetaData): boolean;
export declare function withForcedBackgroundColor(diff: ChangedPropertyMetaData | undefined, color: HighlightVariant | undefined): ChangedPropertyMetaData | undefined;
export {};
