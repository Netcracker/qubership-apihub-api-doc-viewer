import { CrawlRules } from "@netcracker/qubership-apihub-json-crawl"
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "../../../../model/openapi/types/node-kind"
import { OpenApiTreeCrawlState } from "../state/types"
import { collectOpenApiRawValues } from "../transformers/collect-raw-values"
import { OpenApiCrawlRule } from "./types"

/**
 * Crawl rules over the operation-oriented spec. Segments without `kind` only route the crawl;
 * keys without rules stop it, so schemas and extension values stay raw on their nodes.
 * Every OpenAPI node is SIMPLE: selector options are children, not nested nodes
 * (see docs/design/openapi/notes/2026-10-implementation-decisions.md).
 */
export function getOpenApiCrawlRules<S extends OpenApiTreeCrawlState = OpenApiTreeCrawlState>(
  kind: OpenApiTreeNodeKind,
): CrawlRules<OpenApiCrawlRule<S>> {
  const extensionsRule = { kind: OpenApiTreeNodeKinds.EXTENSIONS, transformers: [collectOpenApiRawValues] }
  const contentRule = {
    '/*': { kind: OpenApiTreeNodeKinds.MEDIA_TYPE },
    kind: OpenApiTreeNodeKinds.CONTENT,
  }
  return {
    '/data': {
      '/security': {
        '/alternatives': {
          '/*': {
            '/schemes': {
              '/*': {
                '/flows': {
                  '/*': { kind: OpenApiTreeNodeKinds.OAUTH_FLOW },
                },
                kind: OpenApiTreeNodeKinds.SECURITY_SCHEME,
              },
            },
            kind: OpenApiTreeNodeKinds.SECURITY_REQUIREMENT,
          },
        },
        kind: OpenApiTreeNodeKinds.SECURITY,
      },
      '/extensions': extensionsRule,
      '/request': {
        '/parameters': {
          '/*': { kind: OpenApiTreeNodeKinds.PARAMETERS },
        },
        '/requestBody': {
          '/content': contentRule,
          kind: OpenApiTreeNodeKinds.REQUEST_BODY,
        },
        kind: OpenApiTreeNodeKinds.REQUEST,
      },
      '/responses': {
        '/*': {
          '/headers': { kind: OpenApiTreeNodeKinds.RESPONSE_HEADERS },
          '/extensions': extensionsRule,
          '/content': contentRule,
          kind: OpenApiTreeNodeKinds.RESPONSE,
        },
        kind: OpenApiTreeNodeKinds.RESPONSES,
      },
      '/responsesExtensions': extensionsRule,
    },
    kind,
  }
}
