import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
type DdlSchemaNameBlockWithDiffsContainerProps = WithPrecededByProps & {
    resolveSchemaName: (layoutSide: LayoutSide) => string;
    diff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare const DdlSchemaNameBlockWithDiffs: FC<DdlSchemaNameBlockWithDiffsContainerProps>;
export {};
