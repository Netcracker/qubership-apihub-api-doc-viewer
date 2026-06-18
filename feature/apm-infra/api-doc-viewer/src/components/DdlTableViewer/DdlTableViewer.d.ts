import { DisplayMode } from '../../types/DisplayMode';
import { NavigationCallback } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-callback';
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
import { FC } from '../../../../../node_modules/react';
export type DdlTableViewerProps = {
    source: unknown;
    tableKey: TableKey;
    navigationCallback: NavigationCallback;
    displayMode?: DisplayMode;
    devMode?: boolean;
};
export declare const DdlTableViewer: FC<DdlTableViewerProps>;
