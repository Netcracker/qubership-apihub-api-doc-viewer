import { DiffNodeMeta, DiffNodeValue, NodeChange } from '../../../../../api-data-model/src';
import { FC } from '../../../../../../node_modules/react';
import { LayoutSide } from '../../../types/internal/LayoutSide';
export type DiffTagsProps = {
    requiredChanged?: boolean;
    nullableChanged?: boolean;
    readOnly: boolean | undefined;
    writeOnly: boolean | undefined;
    deprecated?: boolean;
    deprecationReason?: string;
    layoutSide: LayoutSide;
    isNodeChanged: boolean;
    isContentChanged: boolean;
    $nodeChange?: NodeChange;
    $metaChanges?: DiffNodeMeta['$metaChanges'];
    $valueChanges?: DiffNodeValue['$changes'];
};
export declare const DiffTags: FC<DiffTagsProps>;
