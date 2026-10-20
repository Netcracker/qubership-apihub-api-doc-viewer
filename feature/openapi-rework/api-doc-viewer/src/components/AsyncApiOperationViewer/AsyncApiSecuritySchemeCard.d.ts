import { FC } from '../../../../../node_modules/react';
import { SecuritySchemeCardProps } from '../shared-components/Security/SecuritySchemeCardBase';
import { SizeVariant } from './types/SizeVariant';
type AsyncApiSecuritySchemeCardProps = SecuritySchemeCardProps & {
    /** `PRIMARY` — operation section (h3 title); `SECONDARY` — server section (h5 title). */
    variant?: SizeVariant;
};
/** A scheme card of an AsyncAPI operation / server: the shared card with the AsyncAPI labels and row visibility (13 scheme types). */
export declare const AsyncApiSecuritySchemeCard: FC<AsyncApiSecuritySchemeCardProps>;
export {};
