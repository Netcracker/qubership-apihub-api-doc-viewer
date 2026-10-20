import { OpenApiParameterLocation } from "../types/node-value"

const PARAMETER_GROUP_TITLES: Readonly<Record<OpenApiParameterLocation, string>> = {
  path: 'Path Parameters',
  query: 'Query Parameters',
  header: 'Headers',
  cookie: 'Cookies',
}

/**
 * Display labels of the OpenAPI layer, resolved in the data layer (never in JSX). The Security
 * section's labels are `OPENAPI_SECURITY_DISPLAY_LABELS` (`../security-presentation`).
 */
export class OpenApiDisplayLabels {
  public static parameterGroupTitle(location: OpenApiParameterLocation): string {
    return PARAMETER_GROUP_TITLES[location]
  }
}
