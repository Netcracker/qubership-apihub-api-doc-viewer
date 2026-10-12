import { FC, MouseEventHandler } from '../../../../../../../node_modules/react';
export type ExpandingCaretProps = {
    onToggle: MouseEventHandler;
    expanded?: boolean;
    testId?: string;
};
export declare const ExpandingCaret: FC<ExpandingCaretProps>;
