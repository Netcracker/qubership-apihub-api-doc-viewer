import { DisplayMode } from '../../types/DisplayMode';
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types/compare";
import { TableKeys } from '../../../../next-data-model/src/shared/ddl-api/types/table-keys';
import { FC } from '../../../../../node_modules/react';
import { DiffMetaKeys } from "../../types/DiffMetaKeys";
import { ForeignKeyCallback } from '../../../../next-data-model/src/shared/ddl-api/types/foreign-key-callback';
export type DdlTableDiffsViewerProps = {
    mergedSource: unknown;
    tableKeys?: TableKeys;
    foreignKeyCallback: ForeignKeyCallback;
    displayMode?: DisplayMode;
    devMode?: boolean;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
};
export declare const DdlTableDiffsViewer: FC<DdlTableDiffsViewerProps>;
