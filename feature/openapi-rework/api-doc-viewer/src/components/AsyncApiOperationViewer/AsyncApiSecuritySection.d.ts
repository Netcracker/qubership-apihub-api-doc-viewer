import { FC } from '../../../../../node_modules/react';
import { SecuritySectionNode } from '../shared-components/Security/SecuritySectionBase';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
import { SizeVariant } from './types/SizeVariant';
type AsyncApiSecuritySectionProps = WithPrecededByProps & {
    node: SecuritySectionNode;
    /** `PRIMARY` — the operation's section in the message (h3); `SECONDARY` — a server's section (h5). */
    variant?: SizeVariant;
};
/**
 * The Security section of an AsyncAPI operation or server. The title row is an AsyncAPI row (spaced by
 * `data-precededby`, h3 / h5 like `Bindings`); the toolbar and the selected alternative's scheme cards
 * are the shared Security section elements in their own vertical layout (`level="security"`, outer
 * halves). The selected alternative is local state. The element after the section is
 * `PrecededBy.SECURITY_SECTION`. Design: docs/design/async-api/features/security.md.
 */
export declare const AsyncApiSecuritySection: FC<AsyncApiSecuritySectionProps>;
export {};
