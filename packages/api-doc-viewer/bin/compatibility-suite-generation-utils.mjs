import { mkdirSync, rmSync } from 'fs'
import path from 'path'
import { exit } from 'process'
import { fileURLToPath } from 'url'

export const CS_LABEL = 'compatibility-suite'

/**
 * Guard: do not run generators when installed as a transitive dependency (inside node_modules).
 * Call this at the top of every generator script.
 */
export function exitIfInsideNodeModules(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl)
  const __dirname = path.dirname(__filename)
  // bin/ is 1 level under package root; package root is 3 levels under node_modules
  const resolvedPath = path.resolve(__dirname, '..', '..', '..')
  if (path.basename(resolvedPath) === 'node_modules') {
    exit()
  }
}

/**
 * Wipes and re-creates a directory.
 */
export function resetDirectory(dirPath) {
  rmSync(dirPath, { recursive: true, force: true })
  mkdirSync(dirPath, { recursive: true })
}

/**
 * Converts a kebab-case (or mixed) string to PascalCase.
 */
export function toPascalCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('')
}

export function makeFilePrefix(specType) {
  return `${specType}-${CS_LABEL}`
}

export function makeMetaId(specType, suiteId) {
  return `${specType}-${CS_LABEL}-${suiteId}`
}
