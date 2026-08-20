import type { Realm } from "@netcracker/qubership-apihub-ddlapi";
import type { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
export type DebugTableKeyControls = {
    useCustomTableKey?: boolean;
    tableSchemaName?: string;
    tableName?: string;
};
export declare const resolveTableKeyFromRealm: (realm: Realm) => TableKey | null;
export declare const resolveDebugTableKey: (controls: DebugTableKeyControls, autoTableKey: TableKey | null) => TableKey | null;
