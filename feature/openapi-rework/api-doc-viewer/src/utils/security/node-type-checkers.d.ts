import { ITreeNode } from '../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { SecurityTreeNode } from '../../../../next-data-model/src/model/security/types/aliases';
import { SecurityTreeNodeKind, SecurityTreeNodeKinds } from '../../../../next-data-model/src/model/security/types/node-kind';
/**
 * Kind guards of the Security section nodes, for every API type's tree (OpenAPI, AsyncAPI). The
 * shared presenters (`SecuritySchemeCardBase`, `SecuritySectionBase`) navigate with them.
 */
type SecurityKindGuard<K extends SecurityTreeNodeKind> = (node: ITreeNode | null | undefined) => node is SecurityTreeNode<K>;
export declare const isSecuritySectionNode: SecurityKindGuard<"security">;
export declare const isSecurityAlternativesNode: SecurityKindGuard<"securityAlternatives">;
export declare const isSecurityRequirementNode: SecurityKindGuard<"securityRequirement">;
export declare const isSecuritySchemeNode: SecurityKindGuard<"securityScheme">;
export declare const isSecurityOAuthFlowNode: SecurityKindGuard<"oauthFlow">;
/**
 * Children of a node narrowed by a security kind guard (no `as` casts at call sites). Never for the
 * options of the complex `securityAlternatives` container: those are nested nodes
 * (`getSecurityAlternatives`).
 */
export declare function getSecurityChildren<K extends SecurityTreeNodeKind>(node: ITreeNode | null | undefined, guard: SecurityKindGuard<K>): SecurityTreeNode<K>[];
/** The toolbar of a Security section: its complex `securityAlternatives` container (docs/design/shared/features/selector-options.md). */
export declare function findSecurityAlternatives(security: SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>): SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_ALTERNATIVES> | undefined;
/** The options of the toolbar container: its nested alternatives, in list order. */
export declare function getSecurityToolbarOptions(toolbar: SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_ALTERNATIVES> | undefined): SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT>[];
/** The alternatives of a Security section: the nested nodes of its toolbar container, in list order. */
export declare function getSecurityAlternatives(security: SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>): SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT>[];
/** The selected alternative of a Security section: the chosen one, else the first (index 0 of the merged list). */
export declare function resolveSelectedSecurityAlternative(security: SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>, selectedId: string | undefined): SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT> | undefined;
export {};
