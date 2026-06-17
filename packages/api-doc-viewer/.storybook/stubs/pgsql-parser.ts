/**
 * Browser-safe stub for pgsql-parser in Storybook / screenshot-test builds.
 *
 * api-unifier and api-diff depend on ddlapi for model constants only; they never
 * call buildFromDdl in the browser. Without this alias, Vite bundles libpg-query
 * and tries to fetch libpg-query.wasm from /assets/, which breaks screenshot tests.
 */

const unavailable = (): never => {
  throw new Error(
    'pgsql-parser is unavailable in the Storybook browser build. ' +
      'Use pre-built ddlapi Realm fixtures instead of buildFromDdl.',
  )
}

export async function parse(_query: string): Promise<{ stmts?: unknown[] }> {
  return unavailable()
}

export function parseSync(_query: string): { stmts?: unknown[] } {
  return unavailable()
}

export async function loadModule(): Promise<void> {
  return unavailable()
}

export async function deparse(_ast: unknown): Promise<string> {
  return unavailable()
}

export function deparseSync(_ast: unknown): string {
  return unavailable()
}
