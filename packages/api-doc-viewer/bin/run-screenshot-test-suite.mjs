#!/usr/bin/env node
/**
 * Interactive runner for a single screenshot IT suite (or whole test run for one category).
 *
 * Usage:
 *   node bin/run-screenshot-test-suite.mjs test
 *   node bin/run-screenshot-test-suite.mjs regenerate
 *   node bin/run-screenshot-test-suite.mjs regenerate json-schema-diffs-suite
 *   node bin/run-screenshot-test-suite.mjs regenerate json-schema-diffs-suite combiners
 *   node bin/run-screenshot-test-suite.mjs regenerate --ui=select
 *
 * Default UI uses Clack note + text (static option list, then type a number or name).
 * Arrow-key select (--ui=select) is available in terminals with full TTY support.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cancel, intro, isCancel, note, outro, select, spinner, text } from '@clack/prompts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, '..');
const samplesRoot = path.resolve(packageRoot, '../samples');
const itRoot = path.resolve(packageRoot, 'src/it');

const WHOLE_SUITE_VALUE = '__whole__';
const SAMPLES_DIR_IGNORE = new Set(['fixtures', 'src']);

/** @type {string | undefined} */
let uiModeOverride = process.env.SCREENSHOT_SUITE_UI;
const positionalArgs = [];

for (const arg of process.argv.slice(2)) {
  if (arg.startsWith('--ui=')) {
    uiModeOverride = arg.slice('--ui='.length);
    continue;
  }
  positionalArgs.push(arg);
}

const mode = positionalArgs[0];
if (mode !== 'test' && mode !== 'regenerate') {
  console.error('Usage: node bin/run-screenshot-test-suite.mjs <test|regenerate> [test-run] [suite] [--ui=listed|select]');
  process.exit(1);
}

const cliTestRunId = positionalArgs[1];
const cliSuite = positionalArgs[2];

if (!cliTestRunId && !process.stdin.isTTY) {
  console.error('Interactive screenshot suite runner requires a TTY.');
  console.error('Pass a test-run name, or run Jest directly from packages/api-doc-viewer/.');
  process.exit(1);
}

/**
 * @returns {'listed' | 'select'}
 */
function resolveUiMode() {
  if (uiModeOverride === 'select') {
    return 'select';
  }
  if (uiModeOverride === 'listed') {
    return 'listed';
  }
  // Legacy aliases from earlier iterations.
  if (uiModeOverride === 'simple' || uiModeOverride === 'clack') {
    return 'listed';
  }
  return 'listed';
}

const uiMode = resolveUiMode();

/**
 * @returns {Array<{ samplesDir: string, itSuiteId: string, layout: 'folder' | 'flat', itDir?: string, prefix?: string }>}
 */
function discoverTestRuns() {
  if (!fs.existsSync(samplesRoot)) {
    console.error(`Samples directory not found: ${samplesRoot}`);
    process.exit(1);
  }

  const itEntries = fs.readdirSync(itRoot, { withFileTypes: true });
  const testRuns = fs.readdirSync(samplesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !SAMPLES_DIR_IGNORE.has(entry.name))
    .map((entry) => {
      const samplesDir = entry.name;
      const itSuiteId = `${samplesDir}-suite`;
      const itDir = path.join(itRoot, itSuiteId);

      if (fs.existsSync(itDir) && fs.statSync(itDir).isDirectory()) {
        return { samplesDir, itSuiteId, layout: 'folder', itDir };
      }

      const prefix = `${itSuiteId}.`;
      const hasFlatTests = itEntries.some(
        (file) => file.isFile() && file.name.startsWith(prefix) && file.name.endsWith('.it-test.ts'),
      );

      if (!hasFlatTests) {
        return null;
      }

      return { samplesDir, itSuiteId, layout: 'flat', prefix };
    })
    .filter(Boolean);

  const knownIds = new Set(testRuns.map((testRun) => testRun.itSuiteId));

  for (const entry of itEntries) {
    if (
      entry.isDirectory()
      && !knownIds.has(entry.name)
      && entry.name !== 'service'
      && entry.name !== '__image_snapshots__'
    ) {
      const itDir = path.join(itRoot, entry.name);
      const hasSamples = fs.readdirSync(itDir).some((file) => file.endsWith('-samples.it-test.ts'));
      if (hasSamples) {
        testRuns.push({
          samplesDir: entry.name,
          itSuiteId: entry.name,
          layout: 'folder',
          itDir,
        });
        knownIds.add(entry.name);
      }
    }
  }

  for (const entry of itEntries) {
    if (!entry.isFile() || !entry.name.endsWith('-samples.it-test.ts')) {
      continue;
    }
    const separatorIndex = entry.name.indexOf('.');
    if (separatorIndex <= 0) {
      continue;
    }
    const itSuiteId = entry.name.slice(0, separatorIndex);
    if (knownIds.has(itSuiteId)) {
      continue;
    }
    testRuns.push({
      samplesDir: itSuiteId.replace(/-suite$/, ''),
      itSuiteId,
      layout: 'flat',
      prefix: `${itSuiteId}.`,
    });
    knownIds.add(itSuiteId);
  }

  return testRuns.sort((a, b) => a.itSuiteId.localeCompare(b.itSuiteId));
}

/**
 * @param {{ layout: 'folder' | 'flat', itDir?: string, prefix?: string }} testRun
 * @returns {string[]}
 */
function discoverSuites(testRun) {
  if (testRun.layout === 'folder') {
    return fs.readdirSync(testRun.itDir)
      .filter((file) => file.endsWith('-samples.it-test.ts'))
      .map((file) => file.replace(/-samples\.it-test\.ts$/, ''))
      .sort();
  }

  return fs.readdirSync(itRoot)
    .filter((file) => file.startsWith(testRun.prefix) && file.endsWith('-samples.it-test.ts'))
    .map((file) => file.slice(testRun.prefix.length).replace(/-samples\.it-test\.ts$/, ''))
    .sort();
}

/**
 * @param {{ layout: 'folder' | 'flat', itSuiteId: string, prefix?: string }} testRun
 * @param {string} suiteChoice
 * @returns {string}
 */
function resolveJestTarget(testRun, suiteChoice) {
  if (suiteChoice === WHOLE_SUITE_VALUE) {
    if (testRun.layout === 'folder') {
      return `src/it/${testRun.itSuiteId}`;
    }
    return `--testPathPattern=${testRun.prefix.replace('.', '\\.')}.+-samples\\.it-test\\.ts$`;
  }

  if (testRun.layout === 'folder') {
    return `src/it/${testRun.itSuiteId}/${suiteChoice}-samples.it-test.ts`;
  }

  return `src/it/${testRun.prefix}${suiteChoice}-samples.it-test.ts`;
}

/**
 * @param {string} jestTarget
 * @returns {number}
 */
function runScreenshotCommand(jestTarget) {
  const jestCommand = mode === 'test'
    ? `npm run generate-tests && jest --maxWorkers 1 --verbose -c .config/it/it-test-docker.jest.config.cjs ${jestTarget}`
    : `jest --maxWorkers 1 --verbose --updateSnapshot -c .config/it/it-test-docker.jest.config.cjs ${jestTarget}`;

  const command = `npx start-server-and-test development:local-server:static http://localhost:9009 "${jestCommand}"`;
  const actionLabel = mode === 'test' ? 'Running screenshot test suite' : 'Regenerating screenshots';

  console.log('');
  console.log(`${actionLabel}:`);
  console.log(`  ${command}`);
  console.log('');

  const result = spawnSync(command, {
    cwd: packageRoot,
    stdio: 'inherit',
    shell: true,
    env: process.env,
  });

  return result.status ?? 1;
}

/**
 * @param {unknown} value
 */
function exitIfCancelled(value) {
  if (isCancel(value)) {
    cancel('Cancelled.');
    process.exit(0);
  }
}

/**
 * @param {string} raw
 * @param {Array<{ value: string, label: string }>} options
 * @returns {string | undefined}
 */
function resolveChoiceFromAnswer(raw, options) {
  const answer = raw.trim();
  if (!answer) {
    return undefined;
  }

  const asNumber = Number.parseInt(answer, 10);
  if (Number.isInteger(asNumber) && asNumber >= 1 && asNumber <= options.length) {
    return options[asNumber - 1].value;
  }

  const exactMatch = options.find((option) => option.value === answer || option.label === answer);
  return exactMatch?.value;
}

/**
 * Static list + typed answer. Works in Git Bash MinTTY because it never redraws
 * the option list with cursor control — only prints it once via note().
 *
 * @param {string} message
 * @param {Array<{ value: string, label: string, hint?: string }>} options
 * @returns {Promise<string>}
 */
async function promptChoiceListed(message, options) {
  const listing = options
    .map((option, index) => {
      const hint = option.hint ? `  ${option.hint}` : '';
      return `${index + 1}. ${option.label}${hint}`;
    })
    .join('\n');

  note(listing, message);

  const answer = await text({
    message: 'Your choice',
    placeholder: '1',
    validate(raw) {
      if (!resolveChoiceFromAnswer(raw, options)) {
        return `Enter a number 1–${options.length} or an exact name`;
      }
    },
  });
  exitIfCancelled(answer);

  const resolved = resolveChoiceFromAnswer(answer, options);
  if (!resolved) {
    throw new Error('Unexpected empty choice after validation.');
  }
  return resolved;
}

/**
 * Arrow-key picker. Only reliable in terminals with full TTY cursor support.
 *
 * @param {string} message
 * @param {Array<{ value: string, label: string, hint?: string }>} options
 * @returns {Promise<string>}
 */
async function promptChoiceSelect(message, options) {
  const value = await select({
    message,
    options: options.map((option) => ({
      value: option.value,
      label: option.label,
      hint: option.hint,
    })),
  });
  exitIfCancelled(value);
  return value;
}

/**
 * @param {string} message
 * @param {Array<{ value: string, label: string, hint?: string }>} options
 * @returns {Promise<string>}
 */
async function promptChoice(message, options) {
  if (uiMode === 'select') {
    return promptChoiceSelect(message, options);
  }
  return promptChoiceListed(message, options);
}

const testRuns = discoverTestRuns();
if (testRuns.length === 0) {
  console.error('No screenshot test runs found under packages/samples/.');
  process.exit(1);
}

intro(mode === 'test' ? 'Screenshot test — single suite' : 'Regenerate screenshots — single suite');

let selectedTestRunId = cliTestRunId;
if (selectedTestRunId) {
  const knownIds = testRuns.map((testRun) => testRun.itSuiteId);
  if (!knownIds.includes(selectedTestRunId)) {
    console.error(`Unknown test run: ${selectedTestRunId}`);
    console.error(`Known test runs: ${knownIds.join(', ')}`);
    process.exit(1);
  }
} else {
  selectedTestRunId = await promptChoice(
    'Which test run do you want to execute?',
    testRuns.map((testRun) => ({
      value: testRun.itSuiteId,
      label: testRun.itSuiteId,
      hint: `samples/${testRun.samplesDir}`,
    })),
  );
}

const testRun = testRuns.find((entry) => entry.itSuiteId === selectedTestRunId);
const suites = discoverSuites(testRun);

if (suites.length === 0) {
  console.error(`No screenshot suites found for ${testRun.itSuiteId}.`);
  process.exit(1);
}

let selectedSuite = cliSuite;
if (selectedSuite) {
  if (selectedSuite !== WHOLE_SUITE_VALUE && !suites.includes(selectedSuite)) {
    console.error(`Unknown suite: ${selectedSuite}`);
    console.error(`Known suites: ${suites.join(', ')}`);
    process.exit(1);
  }
} else if (cliTestRunId && !cliSuite) {
  selectedSuite = WHOLE_SUITE_VALUE;
} else {
  selectedSuite = await promptChoice(
    'Which test suite do you want to run?',
    [
      {
        value: WHOLE_SUITE_VALUE,
        label: 'Whole test run',
        hint: `${suites.length} suite${suites.length === 1 ? '' : 's'}`,
      },
      ...suites.map((suite) => ({
        value: suite,
        label: suite,
      })),
    ],
  );
}

const jestTarget = resolveJestTarget(testRun, selectedSuite);
const runLabel = selectedSuite === WHOLE_SUITE_VALUE
  ? `${testRun.itSuiteId} (whole run)`
  : `${testRun.itSuiteId} / ${selectedSuite}`;

const runSpinner = spinner();
runSpinner.start(`Starting ${runLabel}`);

const exitCode = runScreenshotCommand(jestTarget);

if (exitCode === 0) {
  runSpinner.stop(`Finished ${runLabel}`);
  outro('Done.');
} else {
  runSpinner.stop(`Failed ${runLabel}`);
  process.exit(exitCode);
}
