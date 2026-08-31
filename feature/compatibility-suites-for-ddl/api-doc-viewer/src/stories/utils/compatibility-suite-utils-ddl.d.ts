import type { Realm } from '@netcracker/qubership-apihub-ddlapi';
import type { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
/** Parse before/after SQL and merge them with apiDiff. */
export declare function prepareDdlCompatibilitySuiteMergedSource(beforeSql: string, afterSql: string): Promise<Realm>;
/**
 * The diffs viewer renders one table.
 * Prefer a table that has diffs; otherwise take the first table in the realm.
 */
export declare function resolveDdlCompatibilitySuiteTableKey(merged: Realm): TableKey;
