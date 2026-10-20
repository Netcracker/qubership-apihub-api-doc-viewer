import { OpenApiHttpMethod } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/types/http-method"

export type HttpMethodBadgeConfig = {
  /** Tailwind background class; keep it a literal string here, or Tailwind drops it from the bundle. */
  readonly colorClass: string
}

/**
 * HTTP method badge colors of the address row - the single place to change them
 * (docs/design/openapi/entities/operation.md -> "HTTP method badge config").
 */
export const OPENAPI_HTTP_METHOD_BADGE_CONFIG: Readonly<Record<OpenApiHttpMethod | 'DEFAULT', HttpMethodBadgeConfig>> = {
  get: { colorClass: 'bg-green-500' },
  post: { colorClass: 'bg-sky-500' },
  put: { colorClass: 'bg-orange-400' },
  patch: { colorClass: 'bg-teal-500' },
  delete: { colorClass: 'bg-red-500' },
  head: { colorClass: 'bg-purple-500' },
  options: { colorClass: 'bg-indigo-500' },
  trace: { colorClass: 'bg-slate-500' },
  DEFAULT: { colorClass: 'bg-slate-500' },
}

export function resolveHttpMethodBadge(method: string): { text: string, colorClass: string } {
  const config = Object.entries(OPENAPI_HTTP_METHOD_BADGE_CONFIG).find(([key]) => key === method.toLowerCase())?.[1]
    ?? OPENAPI_HTTP_METHOD_BADGE_CONFIG.DEFAULT
  return { text: method.toUpperCase(), colorClass: config.colorClass }
}
