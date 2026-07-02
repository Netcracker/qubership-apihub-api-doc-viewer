import { DisplayMode } from '../../types/DisplayMode';
import { DiffMetaKeys } from '../../types/DiffMetaKeys';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { NavigationLinkBuilder } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-link-builder';
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
import { FC } from '../../../../../node_modules/react';
export type DdlTableDiffsViewerProps = {
    mergedSource: unknown;
    tableKey: TableKey;
    navigationLinkBuilder: NavigationLinkBuilder;
    displayMode?: DisplayMode;
    devMode?: boolean;
    noHeading?: boolean;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
};
export declare const DdlTableDiffsViewer: FC<DdlTableDiffsViewerProps>;
