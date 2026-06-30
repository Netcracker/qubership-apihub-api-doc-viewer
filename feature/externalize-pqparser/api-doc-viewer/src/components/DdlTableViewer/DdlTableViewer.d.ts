import { DisplayMode } from '../../types/DisplayMode';
import { NavigationLinkBuilder } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-link-builder';
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
import { FC } from '../../../../../node_modules/react';
export type DdlTableViewerProps = {
    source: unknown;
    tableKey: TableKey;
    navigationLinkBuilder: NavigationLinkBuilder;
    displayMode?: DisplayMode;
    devMode?: boolean;
    noHeading?: boolean;
};
export declare const DdlTableViewer: FC<DdlTableViewerProps>;
