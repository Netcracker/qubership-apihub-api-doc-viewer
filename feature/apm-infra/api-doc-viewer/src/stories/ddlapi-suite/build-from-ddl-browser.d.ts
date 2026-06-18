import type { BuildFromDdlOptions, Realm } from "@netcracker/qubership-apihub-ddlapi";
/**
 * Parses DDL in the browser using the real pgsql-parser / libpg-query stack.
 *
 * Loaded via dynamic import so libpg-query stays in a ddlapi-only async chunk and
 * does not initialise WASM for unrelated Storybook stories (GraphQL, JSO, …).
 */
export declare function buildFromDdlInBrowser(ddl: string, options?: BuildFromDdlOptions): Promise<Realm>;
