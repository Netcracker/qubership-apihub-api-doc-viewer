# OneOf combiner diff samples

Programmatic `oneOf` combiner diff cases (Suite 1 "simple combiner", Suite 2 "complex combiner") live
in Storybook suites only (see [`combiners-cases.md`](../../combiners-cases.md) for the full case
matrix and terminology). There are no YAML fixtures in this folder — before/after schemas are built by
`getCombinerDiffCaseDefinitions()` / `resolveCombinerDiffSchemas()` in
`packages/api-doc-viewer/src/stories/json-schema-diffs-suite/combiner-diff-case-definitions.ts`, using
the shared `buildComprehensiveTypeSchema()` / `wrapInCombiner()` builders in
`packages/api-doc-viewer/src/stories/shared/combiner-schema-builder.ts`.

Regenerate stories/tests (from `packages/api-doc-viewer/`):

```
node --experimental-strip-types bin/generate-combiner-diffs-suite-stories.mjs
node --experimental-strip-types bin/generate-combiner-diffs-suite-tests.mjs
```

Storybook suite: `JSON Schema Diffs Suite/One Of Combiner Diffs Suite`
(`src/stories/json-schema-diffs-suite/one-of-combiner-diffs-suite.stories.tsx`,
`src/it/json-schema-diffs-suite/one-of-combiner-diffs-suite.it-test.ts`).
