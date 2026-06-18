import { FC } from '../../../../../node_modules/react';
type ExpanderProps = {
    expandable: boolean;
    expanded?: boolean;
    onClick?: () => void;
    level: number;
};
export declare const Expander: FC<ExpanderProps>;
export {};
