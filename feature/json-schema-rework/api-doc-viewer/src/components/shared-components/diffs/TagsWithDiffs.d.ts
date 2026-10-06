import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { LayoutSide } from '../../../types/internal/LayoutSide';
export type TagsWithDiffsProps = {
    requiredChanged?: boolean;
    readOnly: boolean | undefined;
    readOnlyDiff?: ChangedPropertyMetaData;
    writeOnly: boolean | undefined;
    writeOnlyDiff?: ChangedPropertyMetaData;
    deprecated?: boolean;
    deprecatedDiff?: ChangedPropertyMetaData;
    requiredDiff?: ChangedPropertyMetaData;
    layoutSide: LayoutSide;
};
export declare const TagsWithDiffs: FC<TagsWithDiffsProps>;
