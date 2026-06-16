import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../../types/DisplayMode';
import { TableKeys } from '../../../../next-data-model/src/shared/ddl-api/types/table-keys';
import { ForeignKeyCallback } from '../../../../next-data-model/src/shared/ddl-api/types/foreign-key-callback';
export type DdlTableViewerProps = {
    source: unknown;
    tableKeys: TableKeys;
    foreignKeyCallback: ForeignKeyCallback;
    displayMode?: DisplayMode;
    devMode?: boolean;
};
export declare const DdlTableViewer: FC<DdlTableViewerProps>;
