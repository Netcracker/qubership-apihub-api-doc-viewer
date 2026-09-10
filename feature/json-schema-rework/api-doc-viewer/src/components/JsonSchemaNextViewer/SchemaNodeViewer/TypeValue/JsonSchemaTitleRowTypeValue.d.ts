import { JsonSchemaTreeNodeMeta } from '../../../../../../next-data-model/src/model/json-schema/types/node-meta';
import { JsonSchemaTreeNodeValue } from '../../../../../../next-data-model/src/model/json-schema/types/node-value';
import { FC } from '../../../../../../../node_modules/react';
export type JsonSchemaTitleRowTypeValueProps = {
    value: JsonSchemaTreeNodeValue | null | undefined;
    meta: JsonSchemaTreeNodeMeta | null | undefined;
};
/**
 * Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the
 * title row always shows the type value; visibility for special cases (e.g. boolean
 * `additionalProperties`) is decided by the caller's `showTypeLabel` gate.
 */
export declare const JsonSchemaTitleRowTypeValue: FC<JsonSchemaTitleRowTypeValueProps>;
