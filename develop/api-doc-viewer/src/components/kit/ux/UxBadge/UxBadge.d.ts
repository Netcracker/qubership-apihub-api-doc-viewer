import { FC, ReactNode } from '../../../../../../../node_modules/react';
import { ColorSchema } from '../../../../types/aliases/common';
import { BadgeKind } from './types';
export type BadgeProps = {
    kind?: BadgeKind;
    text: string | ReactNode;
    colorSchema?: ColorSchema;
    inline?: boolean;
};
export declare const UxBadge: FC<BadgeProps>;
