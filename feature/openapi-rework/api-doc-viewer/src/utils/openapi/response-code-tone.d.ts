import { OpenApiResponseCodeClass } from '../../../../next-data-model/src/shared/openapi/types/response-code';
/**
 * Response-code selector tone class per code class - the single place to map a class to a color;
 * the colors themselves live in `components/shared-styles/colors/openapi.css`. `undefined` = the
 * neutral grey `Selector` look (`default`, unknown codes).
 */
export declare const OPENAPI_RESPONSE_CODE_TONE_CLASSES: Readonly<Record<OpenApiResponseCodeClass, string | undefined>>;
export declare function resolveResponseCodeToneClass(codeClass: OpenApiResponseCodeClass | undefined): string | undefined;
