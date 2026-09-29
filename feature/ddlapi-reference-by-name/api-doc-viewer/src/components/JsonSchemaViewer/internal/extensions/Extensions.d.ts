import { IJsonSchemaBaseType, NodeChange } from '../../../../../../api-data-model/src';
import { FC } from '../../../../../../../node_modules/react';
type ExtensionsProps = {
    extensions: NonNullable<IJsonSchemaBaseType['extensions']>;
    $nodeChange?: NodeChange;
};
export declare const Extensions: FC<ExtensionsProps>;
export {};
