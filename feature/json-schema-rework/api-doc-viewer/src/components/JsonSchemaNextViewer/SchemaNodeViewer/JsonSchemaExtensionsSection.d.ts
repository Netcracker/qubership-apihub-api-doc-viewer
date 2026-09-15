import { Diff, DiffType } from "@netcracker/qubership-apihub-api-diff";
import { OpenApiExtensionKey } from '../../../../../next-data-model/src/shared/json-schema/types/extension-key';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaExtensionsSectionProps = {
    extensions: Record<OpenApiExtensionKey, unknown>;
    extensionsDiffs?: Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>;
};
export declare const JsonSchemaExtensionsSection: FC<JsonSchemaExtensionsSectionProps>;
