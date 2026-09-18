import type { Realm } from "@netcracker/qubership-apihub-ddlapi";
/** True when the Realm contains at least one table (CREATE SCHEMA-only DDL yields false). */
export declare function realmHasTables(realm: Realm): boolean;
/**
 * Schema shells copied from `present`, with empty `tables[]`.
 * Mirrors api-processor `compareDdlDocuments` / `emptyRealmLike` (kept local for Storybook).
 */
export declare function emptyRealmLike(present: Realm): Realm;
/**
 * Resolve one side of a before/after pair for `apiDiff`.
 * When `side` has no tables but `counterpart` does (e.g. before.sql is CREATE SCHEMA only),
 * substitute `emptyRealmLike(counterpart)` so table-level diffs surface correctly.
 */
export declare function resolveDdlDiffCompareSide(side: Realm, counterpart: Realm): Realm;
/** Resolve both sides of a Storybook DDL diff fixture pair. */
export declare function resolveDdlDiffComparePair(before: Realm, after: Realm): {
    before: Realm;
    after: Realm;
};
