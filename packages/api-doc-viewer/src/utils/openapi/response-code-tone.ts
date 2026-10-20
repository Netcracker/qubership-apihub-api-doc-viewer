import { OpenApiResponseCodeClass, OpenApiResponseCodeClasses } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/types/response-code"
import { SelectorOptionTone } from "../../components/shared-components/Selector/types"

/** 2XX green, 3XX blue, 4XX orange, 5XX red, everything else grey. */
export function resolveResponseCodeTone(codeClass: OpenApiResponseCodeClass | undefined): SelectorOptionTone {
  switch (codeClass) {
    case OpenApiResponseCodeClasses.SUCCESS:
      return SelectorOptionTone.Success
    case OpenApiResponseCodeClasses.REDIRECTION:
      return SelectorOptionTone.Info
    case OpenApiResponseCodeClasses.CLIENT_ERROR:
      return SelectorOptionTone.Warning
    case OpenApiResponseCodeClasses.SERVER_ERROR:
      return SelectorOptionTone.Danger
    default:
      return SelectorOptionTone.Neutral
  }
}
