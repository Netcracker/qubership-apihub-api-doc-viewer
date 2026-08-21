# JSON Schema diff fixtures — type changes

Hand-written YAML pairs (generated from case definitions) for the **JSON Schema Diffs Suite**
Storybook group. Each case directory contains `before.yaml` and `after.yaml` as standalone
JSON Schema documents.

- Total cases: 145
- Generator: `packages/api-doc-viewer/bin/generate-json-schema-type-changes-samples.mjs`

## Sub-suites

### Type Flags Samples

Path: `type-changes/type-flags/` (8 cases)

| Case id | Change |
| --- | --- |
| `001-read-only-added` | Added readOnly |
| `002-read-only-removed` | Removed readOnly |
| `003-write-only-added` | Added writeOnly |
| `004-write-only-removed` | Removed writeOnly |
| `005-deprecated-added` | Added deprecated: true |
| `006-deprecated-removed` | Removed deprecated: true |
| `007-required-added` | Property added to parent required |
| `008-required-removed` | Property removed from parent required |

### Description Changes Samples

Path: `type-changes/description-changes/` (8 cases)

| Case id | Change |
| --- | --- |
| `001-description-added` | String with description only: description added |
| `002-description-removed` | String with description only: description removed |
| `003-description-replaced` | String with description only: description replaced |
| `004-description-with-enum-added` | String with description and enum: description added |
| `005-description-with-enum-removed` | String with description and enum: description removed |
| `006-description-with-enum-replaced` | String with description and enum: description replaced |
| `007-unchanged-description-short` | Unchanged short description |
| `008-unchanged-description-long` | Unchanged long description (>600 chars) |

### String Validation Enum Samples

Path: `type-changes/string-validation/enum/` (5 cases)

| Case id | Change |
| --- | --- |
| `001-enum-two-values-added` | Added enum with 2 values |
| `002-enum-two-values-removed` | Removed enum with 2 values |
| `003-enum-value-appended` | Added one enum value to existing 2 values |
| `004-enum-value-removed` | Removed one enum value from existing 3 values |
| `005-enum-two-values-unchanged` | Unchanged enum with 2 values |

### String Validation Examples Samples

Path: `type-changes/string-validation/examples/` (5 cases)

| Case id | Change |
| --- | --- |
| `001-examples-two-added` | Added 2 examples |
| `002-examples-two-removed` | Removed 2 examples |
| `003-examples-one-appended` | Added one example to existing 2 values |
| `004-examples-one-removed` | Removed one example from existing 3 values |
| `005-examples-two-unchanged` | Unchanged 2 examples |

### String Validation Value Range Samples

Path: `type-changes/string-validation/value-range/` (41 cases)

| Case id | Change |
| --- | --- |
| `001-minimum-added` | Added minimum |
| `002-minimum-added-with-exclusive-minimum-true` | Added minimum with exclusiveMinimum = true |
| `003-exclusive-minimum-numeric-added` | Added exclusiveMinimum (numeric) |
| `004-minimum-removed` | Removed minimum |
| `005-minimum-with-exclusive-minimum-true-removed` | Removed minimum with exclusiveMinimum = true |
| `006-exclusive-minimum-numeric-removed` | Removed exclusiveMinimum (numeric) |
| `007-exclusive-minimum-false-to-true` | Changed exclusiveMinimum from false to true on existing minimum |
| `008-exclusive-minimum-true-to-false` | Changed exclusiveMinimum from true to false on existing minimum |
| `009-maximum-added` | Added maximum |
| `010-maximum-added-with-exclusive-maximum-true` | Added maximum with exclusiveMaximum = true |
| `011-exclusive-maximum-numeric-added` | Added exclusiveMaximum (numeric) |
| `012-maximum-removed` | Removed maximum |
| `013-maximum-with-exclusive-maximum-true-removed` | Removed maximum with exclusiveMaximum = true |
| `014-exclusive-maximum-numeric-removed` | Removed exclusiveMaximum (numeric) |
| `015-exclusive-maximum-false-to-true` | Changed exclusiveMaximum from false to true on existing maximum |
| `016-exclusive-maximum-true-to-false` | Changed exclusiveMaximum from true to false on existing maximum |
| `017-minimum-maximum-added` | Added minimum, maximum |
| `018-minimum-inclusive-maximum-exclusive-added` | Added minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = true) |
| `019-minimum-exclusive-maximum-inclusive-added` | Added minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = false) |
| `020-minimum-maximum-both-exclusive-added` | Added minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = true) |
| `021-minimum-maximum-removed` | Removed minimum, maximum |
| `022-minimum-inclusive-maximum-exclusive-removed` | Removed minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = true) |
| `023-minimum-exclusive-maximum-inclusive-removed` | Removed minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = false) |
| `024-minimum-maximum-both-exclusive-removed` | Removed minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = true) |
| `025-min-ex-max-in-min-ex-to-inclusive` | Changed exclusiveMinimum to false |
| `026-min-ex-max-in-max-in-to-exclusive` | Changed exclusiveMaximum to true |
| `027-min-in-max-ex-min-in-to-exclusive` | Changed exclusiveMinimum to true |
| `028-min-in-max-ex-max-ex-to-inclusive` | Changed exclusiveMaximum to false |
| `029-min-in-max-in-min-in-to-exclusive` | Changed exclusiveMinimum to true |
| `030-min-in-max-in-max-in-to-exclusive` | Changed exclusiveMaximum to true |
| `031-min-in-max-in-both-to-exclusive` | Changed exclusiveMinimum and exclusiveMaximum to true |
| `032-min-ex-max-ex-min-ex-to-inclusive` | Changed exclusiveMinimum to false |
| `033-min-ex-max-ex-max-ex-to-inclusive` | Changed exclusiveMaximum to false |
| `034-min-ex-max-ex-both-to-inclusive` | Changed exclusiveMinimum and exclusiveMaximum to false |
| `035-unchanged-minimum-inclusive` | Unchanged minimum (exclusiveMinimum = false) |
| `036-unchanged-minimum-exclusive` | Unchanged minimum (exclusiveMinimum = true) |
| `037-unchanged-maximum-inclusive` | Unchanged maximum (exclusiveMaximum = false) |
| `038-unchanged-maximum-exclusive` | Unchanged maximum (exclusiveMaximum = true) |
| `039-unchanged-min-max-inclusive` | Unchanged minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = false) |
| `040-unchanged-min-inclusive-max-exclusive` | Unchanged minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = true) |
| `041-unchanged-min-max-both-exclusive` | Unchanged minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = true) |

### String Validation Value Length Samples

Path: `type-changes/string-validation/value-length/` (16 cases)

| Case id | Change |
| --- | --- |
| `001-min-length-added` | Added minLength |
| `002-min-length-removed` | Removed minLength |
| `003-min-length-replaced` | Replaced minLength |
| `004-max-length-added` | Added maxLength |
| `005-max-length-removed` | Removed maxLength |
| `006-max-length-replaced` | Replaced maxLength |
| `007-min-max-length-added` | Added minLength, maxLength |
| `008-min-max-length-removed` | Removed minLength, maxLength |
| `009-min-length-added-max-length-removed` | Added minLength, removed maxLength |
| `010-min-length-removed-max-length-added` | Removed minLength, added maxLength |
| `011-both-lengths-replace-min` | Replace minLength when both lengths exist |
| `012-both-lengths-replace-max` | Replace maxLength when both lengths exist |
| `013-both-lengths-replaced` | Replace minLength and maxLength |
| `014-unchanged-min-length` | Unchanged minLength only |
| `015-unchanged-max-length` | Unchanged maxLength only |
| `016-unchanged-min-max-length` | Unchanged minLength, maxLength |

### Extended Default Samples

Path: `type-changes/extended/default/` (4 cases)

| Case id | Change |
| --- | --- |
| `001-default-added-string` | Added default (string) |
| `002-default-removed-string` | Removed default (string) |
| `003-default-replaced-string` | Replaced default (string) |
| `004-default-replaced-boolean` | Replaced default (boolean) |

### Extended Object Samples

Path: `type-changes/extended/object/` (9 cases)

| Case id | Change |
| --- | --- |
| `001-additional-properties-false-added` | additionalProperties: false added |
| `002-additional-properties-true-added` | additionalProperties: true added |
| `003-additional-properties-schema-added` | additionalProperties: schema added |
| `004-pattern-properties-added` | patternProperties added |
| `005-pattern-properties-removed` | patternProperties removed |
| `006-pattern-properties-replaced` | patternProperties replaced |
| `007-property-count-bounds-added` | minProperties and maxProperties added |
| `008-property-count-bounds-removed` | minProperties and maxProperties removed |
| `009-property-count-bounds-replaced` | minProperties and maxProperties replaced |

### Extended Array Samples

Path: `type-changes/extended/array/` (9 cases)

| Case id | Change |
| --- | --- |
| `001-additional-items-added` | additionalItems added |
| `002-additional-items-removed` | additionalItems removed |
| `003-additional-items-type-changed` | additionalItems schema changed |
| `004-items-schema-to-array` | items replaced from schema to array |
| `005-tuple-item-appended` | Append tuple item |
| `006-tuple-item-removed` | Pop tuple item |
| `007-items-schema-description-changed` | Change inside items schema |
| `008-unique-items-added` | uniqueItems added |
| `009-unique-items-removed` | uniqueItems removed |

### Extended Misc Samples

Path: `type-changes/extended/misc/` (6 cases)

| Case id | Change |
| --- | --- |
| `001-pattern-added` | pattern added |
| `002-pattern-removed` | pattern removed |
| `003-pattern-replaced` | pattern replaced |
| `004-multiple-of-added` | multipleOf added |
| `005-multiple-of-removed` | multipleOf removed |
| `006-multiple-of-replaced` | multipleOf replaced |

### Extended Combiners One Level Samples

Path: `type-changes/extended/combiners-one-level/` (11 cases)

| Case id | Change |
| --- | --- |
| `001-append-variant-string` | Append string variant |
| `002-append-variant-object` | Append object variant |
| `003-append-variant-array` | Append array variant |
| `004-remove-variant-string` | Remove string variant |
| `005-remove-variant-object` | Remove object variant |
| `006-remove-variant-array` | Remove array variant |
| `007-change-variant-string` | Change string variant |
| `008-change-variant-object` | Change object variant |
| `009-change-variant-array` | Change array variant |
| `010-append-variant-nested-combiner` | Append nested combiner variant |
| `011-remove-variant-nested-combiner` | Remove nested combiner variant |

### Extended Combiners Two Level Samples

Path: `type-changes/extended/combiners-two-level/` (11 cases)

| Case id | Change |
| --- | --- |
| `001-two-level-append-variant-string` | Append string variant |
| `002-two-level-append-variant-object` | Append object variant |
| `003-two-level-append-variant-array` | Append array variant |
| `004-two-level-remove-variant-string` | Remove string variant |
| `005-two-level-remove-variant-object` | Remove object variant |
| `006-two-level-remove-variant-array` | Remove array variant |
| `007-two-level-change-variant-string` | Change string variant |
| `008-two-level-change-variant-object` | Change object variant |
| `009-two-level-change-variant-array` | Change array variant |
| `010-two-level-append-variant-nested-combiner` | Append nested combiner variant |
| `011-two-level-remove-variant-nested-combiner` | Remove nested combiner variant |

### Circular Samples

Path: `type-changes/circular/` (12 cases)

| Case id | Change |
| --- | --- |
| `001-self-object-description-updated` | Self-referencing object: description updated |
| `002-self-object-cycle-removed` | Self-referencing object: cyclic link removed |
| `003-self-object-cycle-added` | Self-referencing object: cyclic link added |
| `004-self-array-description-updated` | Self-referencing array: description updated |
| `005-self-array-cycle-removed` | Self-referencing array: cyclic link removed |
| `006-self-array-cycle-added` | Self-referencing array: cyclic link added |
| `007-chain-three-hop-description-updated` | Root→A→B→root chain: description updated |
| `008-chain-three-hop-cycle-removed` | Root→A→B→root chain: cyclic link removed |
| `009-chain-three-hop-cycle-added` | Root→A→B→root chain: cyclic link added |
| `010-combiner-variant-cycle-description-updated` | Combiner variant cycle: description updated |
| `011-combiner-variant-cycle-cycle-removed` | Combiner variant cycle: cyclic link removed |
| `012-combiner-variant-cycle-cycle-added` | Combiner variant cycle: cyclic link added |

## Storybook and screenshot tests

Stories live under `packages/api-doc-viewer/src/stories/json-schema-diffs-suite/`.
Screenshot ITs live under `packages/api-doc-viewer/src/it/json-schema-diffs-suite/`.

```bash
cd packages/api-doc-viewer
node bin/generate-json-schema-type-changes-samples.mjs
npm run build:showcase
npm run regenerate-screenshots -- --testPathPattern=type-changes
```

