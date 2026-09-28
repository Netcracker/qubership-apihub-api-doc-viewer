import { DiffMetaKeys } from '../../../types/DiffMetaKeys';
import { DisplayMode } from '../../../types/DisplayMode';
import { FC } from '../../../../../../node_modules/react';
export type JsonSchemaExtensionsJsoComponentProps = {
    source: object;
    initialLevel?: number;
};
export type JsonSchemaExtensionsJsoComponent = FC<JsonSchemaExtensionsJsoComponentProps>;
export type JsonSchemaExtensionsJsoDiffsComponentProps = {
    mergedSource: unknown;
    initialLevel?: number;
    displayMode?: DisplayMode;
    diffMetaKeys: DiffMetaKeys;
};
export type JsonSchemaExtensionsJsoDiffsComponent = FC<JsonSchemaExtensionsJsoDiffsComponentProps>;
