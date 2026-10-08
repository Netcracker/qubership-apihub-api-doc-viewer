import { OpenApiHttpMethod } from '../../../../next-data-model/src/shared/openapi/types/http-method';
export type HttpMethodBadgeConfig = {
    /** Tailwind background class; keep it a literal string here, or Tailwind drops it from the bundle. */
    readonly colorClass: string;
};
/**
 * HTTP method badge colors of the address row - the single place to change them
 * (docs/design/openapi/entities/operation.md -> "HTTP method badge config").
 */
export declare const OPENAPI_HTTP_METHOD_BADGE_CONFIG: Readonly<Record<OpenApiHttpMethod | 'DEFAULT', HttpMethodBadgeConfig>>;
export declare function resolveHttpMethodBadge(method: string): {
    text: string;
    colorClass: string;
};
