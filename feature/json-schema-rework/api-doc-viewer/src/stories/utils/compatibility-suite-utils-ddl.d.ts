import type { Realm } from '@netcracker/qubership-apihub-ddlapi';
import type { TableKey } from '../../../../next-data-model/src/shared/ddlapi/types/table-key';
/** Parse before/after SQL and merge them with apiDiff. */
export declare function prepareDdlCompatibilitySuiteMergedSource(beforeSql: string, afterSql: string): Promise<Realm>;
/**
 * The diffs viewer renders one table.
 * Whole-table add/remove lives on the tables array, not on the table object.
 */
export declare function resolveDdlCompatibilitySuiteTableKey(merged: Realm): TableKey;
