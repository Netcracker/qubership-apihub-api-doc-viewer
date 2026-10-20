import { SecurityTreeNodeKinds } from "../../../model/security/types/node-kind"

/**
 * Crawl rules of a Security section spec (`SecuritySpec`): the section, its alternatives, their
 * schemes, the OAuth flows of a scheme. Every node is SIMPLE (selector options are children). The
 * API types mount it at their `security` keys (OpenAPI `/data/security`, AsyncAPI the operation's and
 * every server's `/security`).
 */
export function getSecurityCrawlRules() {
  return {
    '/alternatives': {
      '/*': {
        '/schemes': {
          '/*': {
            '/flows': {
              '/*': { kind: SecurityTreeNodeKinds.OAUTH_FLOW },
            },
            kind: SecurityTreeNodeKinds.SECURITY_SCHEME,
          },
        },
        kind: SecurityTreeNodeKinds.SECURITY_REQUIREMENT,
      },
    },
    kind: SecurityTreeNodeKinds.SECURITY,
  } as const
}
