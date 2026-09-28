import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData } from '../../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaTypeValueDiffSegmentProps = {
    text: string;
    diff?: ChangedPropertyMetaData;
    layoutSide: LayoutSide;
    color?: string | null;
};
/**
 * Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
 * the resolved className to the leaf. Kept separate from JsonSchemaTypeValueText so the leaf
 * stays diff-agnostic.
 */
export declare const JsonSchemaTypeValueDiffSegment: FC<JsonSchemaTypeValueDiffSegmentProps>;
