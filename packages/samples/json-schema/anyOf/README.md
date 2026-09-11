# AnyOf combiner samples

Programmatic `anyOf` combiner cases (Suite 1 "simple combiner", Suite 2 "complex combiner") live in
Storybook suites only (see [`combiners-cases.md`](../../combiners-cases.md) for the full case matrix
and terminology). There are no YAML fixtures in this folder — schemas are built by
`getCombinerPlainCaseDefinitions()` / `resolveCombinerPlainSchema()` in
`packages/api-doc-viewer/src/stories/json-schema-suite/combiner-plain-case-definitions.ts`, using the
shared `buildComprehensiveTypeSchema()` / `wrapInCombiner()` builders in
`packages/api-doc-viewer/src/stories/shared/combiner-schema-builder.ts`.

Regenerate stories/tests (from `packages/api-doc-viewer/`):

```
node --experimental-strip-types bin/generate-combiner-suite-stories.mjs
node --experimental-strip-types bin/generate-combiner-suite-tests.mjs
```

Storybook suite: `JSON Schema Suite/Any Of Combiner Suite`
(`src/stories/json-schema-suite/any-of-combiner-suite.stories.tsx`,
`src/it/json-schema-suite/any-of-combiner-suite.it-test.ts`).
