/**
 * Browser-safe stub for pgsql-parser in the main Storybook bundle.
 *
 * api-unifier / api-diff need ddlapi model constants only; they never call
 * buildFromDdl during screenshot tests. The stub keeps libpg-query (WASM) out of
 * shared chunks so Puppeteer stories do not fetch libpg-query.wasm on every page.
 *
 * Real parsing for ddlapi-suite stories lives in a separate async chunk — see
 * build-from-ddl-browser.ts and the conditional resolver in main.ts.
 */

const unavailable = (): never => {
  throw new Error(
    'pgsql-parser stub: buildFromDdl is only available via buildFromDdlInBrowser() in ddlapi-suite stories.',
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
