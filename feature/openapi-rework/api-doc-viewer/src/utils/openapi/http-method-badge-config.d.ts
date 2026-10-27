import { OpenApiHttpMethod } from '../../../../next-data-model/src/shared/openapi/types/http-method';
export type HttpMethodBadgeConfig = {
    /** Background class of the badge; its color is defined in `components/shared-styles/colors/openapi.css`. */
    readonly colorClass: string;
};
/**
 * HTTP method badge classes of the address row - the single place to map a method to a color class
 * (docs/design/openapi/entities/operation.md -> "HTTP method badge config"); the colors themselves
 * live in `components/shared-styles/colors/openapi.css`.
 */
export declare const OPENAPI_HTTP_METHOD_BADGE_CONFIG: Readonly<Record<OpenApiHttpMethod | 'DEFAULT', HttpMethodBadgeConfig>>;
export declare function resolveHttpMethodBadge(method: string): {
    text: string;
    colorClass: string;
};
