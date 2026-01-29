import { SpecificationExtensionKey } from '../../../../next-data-model/src/model/specification-extension-key';
import { FC } from '../../../../../node_modules/react';
import { AsyncApiTreeNodeKind } from '../../../../next-data-model/src/model/async-api/types/node-kind';
type SpecificationExtensionsProps = {
    values: Record<SpecificationExtensionKey, unknown>;
    kind: AsyncApiTreeNodeKind;
};
export declare const SpecificationExtensions: FC<SpecificationExtensionsProps>;
export {};
