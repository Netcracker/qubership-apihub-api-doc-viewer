import { OpenApiResponseCodeClass } from '../../../../next-data-model/src/shared/openapi/types/response-code';
import { SelectorOptionTone } from '../../components/shared-components/Selector/types';
/** 2XX green, 3XX blue, 4XX orange, 5XX red, everything else grey. */
export declare function resolveResponseCodeTone(codeClass: OpenApiResponseCodeClass | undefined): SelectorOptionTone;
