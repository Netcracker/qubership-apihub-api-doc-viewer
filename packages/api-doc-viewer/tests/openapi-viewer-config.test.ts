import { OpenApiResponseCodeClasses } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/types/response-code"
import { OPENAPI_SECTION_IDS_BY_LEVEL, OPENAPI_SECTION_ORDER } from "../src/components/OpenApiOperationViewer/config/section-order"
import { SelectorOptionTone } from "../src/components/shared-components/Selector/types"
import { OPENAPI_HTTP_METHOD_BADGE_CONFIG, resolveHttpMethodBadge } from "../src/utils/openapi/http-method-badge-config"
import { resolveResponseCodeTone } from "../src/utils/openapi/response-code-tone"

describe("OpenAPI viewer config", () => {
  describe("section order", () => {
    it.each(Object.keys(OPENAPI_SECTION_ORDER) as Array<keyof typeof OPENAPI_SECTION_ORDER>)(
      "%s order is a permutation of the allowed ids",
      (level) => {
        const order = OPENAPI_SECTION_ORDER[level]
        expect(new Set(order).size).toBe(order.length)
        expect([...order].sort()).toEqual([...OPENAPI_SECTION_IDS_BY_LEVEL[level]].sort())
      },
    )

    it("keeps response extensions after Headers and before Body", () => {
      const order = OPENAPI_SECTION_ORDER.response
      expect(order.indexOf("responseHeaders")).toBeLessThan(order.indexOf("responseExtensions"))
      expect(order.indexOf("responseExtensions")).toBeLessThan(order.indexOf("responseBody"))
    })
  })

  describe("response code tone", () => {
    it.each([
      [OpenApiResponseCodeClasses.SUCCESS, SelectorOptionTone.Success],
      [OpenApiResponseCodeClasses.REDIRECTION, SelectorOptionTone.Info],
      [OpenApiResponseCodeClasses.CLIENT_ERROR, SelectorOptionTone.Warning],
      [OpenApiResponseCodeClasses.SERVER_ERROR, SelectorOptionTone.Danger],
      [undefined, SelectorOptionTone.Neutral],
    ])("%s -> %s", (codeClass, tone) => {
      expect(resolveResponseCodeTone(codeClass)).toBe(tone)
    })

    it("paints the remaining classes neutral", () => {
      const toned = new Set<string>([
        OpenApiResponseCodeClasses.SUCCESS,
        OpenApiResponseCodeClasses.REDIRECTION,
        OpenApiResponseCodeClasses.CLIENT_ERROR,
        OpenApiResponseCodeClasses.SERVER_ERROR,
      ])
      for (const codeClass of Object.values(OpenApiResponseCodeClasses).filter(value => !toned.has(value))) {
        expect(resolveResponseCodeTone(codeClass)).toBe(SelectorOptionTone.Neutral)
      }
    })
  })

  describe("HTTP method badge", () => {
    it("is case-insensitive and upper-cases the text", () => {
      expect(resolveHttpMethodBadge("Post")).toEqual({ text: "POST", colorClass: OPENAPI_HTTP_METHOD_BADGE_CONFIG.post.colorClass })
    })

    it("swaps the GET / POST colors of the design table", () => {
      expect(OPENAPI_HTTP_METHOD_BADGE_CONFIG.get.colorClass).toBe("bg-green-500")
      expect(OPENAPI_HTTP_METHOD_BADGE_CONFIG.post.colorClass).toBe("bg-sky-500")
    })

    it("falls back to the default color for an unknown method", () => {
      expect(resolveHttpMethodBadge("query").colorClass).toBe(OPENAPI_HTTP_METHOD_BADGE_CONFIG.DEFAULT.colorClass)
    })
  })
})
