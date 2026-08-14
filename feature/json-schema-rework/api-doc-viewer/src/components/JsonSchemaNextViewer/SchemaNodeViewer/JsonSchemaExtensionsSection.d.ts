import { OpenApiExtensionKey } from '../../../../../next-data-model/src/shared/json-schema/types/extension-key';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaExtensionsSectionProps = {
    extensions: Record<OpenApiExtensionKey, unknown>;
};
export declare const JsonSchemaExtensionsSection: FC<JsonSchemaExtensionsSectionProps>;
