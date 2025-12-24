import { FC } from '../../../../../node_modules/react';
type GapSize = 'small' | 'medium' | 'large';
type LevelIndicatorProps = {
    level: number;
    gapSize?: GapSize;
};
export declare const LevelIndicator: FC<LevelIndicatorProps>;
export {};
