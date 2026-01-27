import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { ReferenceNameMapping } from '../../../../next-data-model/src/model/async-api/types/reference-name-property-mapping';
export type AsyncApiOperationViewerProps = {
    source: unknown;
    operationType?: string;
    operationName?: string;
    displayMode?: DisplayMode;
    referenceNamePropertyMapping?: ReferenceNameMapping;
};
export declare const AsyncApiOperationViewer: FC<AsyncApiOperationViewerProps>;
