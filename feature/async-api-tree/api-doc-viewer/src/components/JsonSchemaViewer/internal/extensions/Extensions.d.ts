import { IJsonSchemaBaseType } from '../../../../../../api-data-model/src';
import { FC } from '../../../../../../../node_modules/react';
type ExtensionsProps = {
    shift?: boolean;
    extensions: IJsonSchemaBaseType['extensions'];
};
export declare const Extensions: FC<ExtensionsProps>;
export {};
