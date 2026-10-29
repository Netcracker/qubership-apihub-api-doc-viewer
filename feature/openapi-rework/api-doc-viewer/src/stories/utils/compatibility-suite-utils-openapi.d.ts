import { OpenApiOperationKeys } from '../../../../next-data-model/src/shared/openapi/types/operation-keys';
/**
 * The operation an OpenAPI compatibility case shows: almost every case has one operation; a case
 * that adds / removes a path or a method has two, and shows the added / removed one. Read from the
 * merged document, where path-item `$ref`s are resolved. Design:
 * docs/design/openapi/features/compatibility-suite.md -> "Operation".
 */
export declare function resolveOpenApiCompatibilitySuiteOperationKeys(merged: unknown): OpenApiOperationKeys | undefined;
