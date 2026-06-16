import { DisplayMode } from '../../types/DisplayMode';
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types/compare";
import { NavigationCallback } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-callback';
import { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
import { FC } from '../../../../../node_modules/react';
import { DiffMetaKeys } from "../../types/DiffMetaKeys";
export type DdlTableDiffsViewerProps = {
    mergedSource: unknown;
    tableKey: TableKey;
    navigationCallback: NavigationCallback;
    displayMode?: DisplayMode;
    devMode?: boolean;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
};
export declare const DdlTableDiffsViewer: FC<DdlTableDiffsViewerProps>;
