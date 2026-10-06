import { FC } from '../../../../../../node_modules/react';
import { ShowUnchangedRowProps } from './ShowUnchangedRow';
type ShowUnchangedRowContentProps = ShowUnchangedRowProps & {
    layoutSide: "before" | "after";
    level: number;
};
export declare const ShowUnchangedRowContent: FC<ShowUnchangedRowContentProps>;
export {};
