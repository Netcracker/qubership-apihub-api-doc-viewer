import { FC } from '../../../../../../../node_modules/react';
export type ExpanderProps = {
    isRoot: boolean;
    isOperation?: boolean;
    isExpandable?: boolean;
    expanded: boolean;
    onToggleExpander: () => void;
};
export declare const Expander: FC<ExpanderProps>;
