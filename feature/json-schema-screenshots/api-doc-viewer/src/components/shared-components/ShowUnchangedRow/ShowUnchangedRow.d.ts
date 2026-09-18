import { NodeId } from '../../../../../next-data-model/src/utility-types';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from "../WithPrecededByProps";
export type ShowUnchangedRowProps = WithPrecededByProps & {
    unchangedBlockId: NodeId;
    count: number;
    onReveal: (unchangedBlockId: NodeId) => void;
};
export declare const ShowUnchangedRow: FC<ShowUnchangedRowProps>;
