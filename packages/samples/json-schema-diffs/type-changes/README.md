# JSON Schema diff fixtures — type changes

Hand-written YAML pairs (generated from case definitions) for the **JSON Schema Diffs Suite**
Storybook group. Each case directory contains `before.yaml` and `after.yaml` as standalone
JSON Schema documents.

- Total cases: 385
- Generator: `packages/api-doc-viewer/bin/generate-json-schema-type-changes-samples.mjs`

## Sub-suites

### Type Flags

Path: `type-changes/type-flags/` (13 cases)

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
| `009-unchanged-read-only` | Unchanged readOnly: true |
| `010-unchanged-write-only` | Unchanged writeOnly: true |
| `011-unchanged-deprecated` | Unchanged deprecated: true |
| `012-unchanged-required-field` | Unchanged required property |
| `013-unchanged-required-optional` | Unchanged optional property |

### Description Changes

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

### String Validation Enum

Path: `type-changes/string-validation/enum/` (5 cases)

| Case id | Change |
| --- | --- |
| `001-enum-two-values-added` | Added enum with 2 values |
| `002-enum-two-values-removed` | Removed enum with 2 values |
| `003-enum-value-appended` | Added one enum value to existing 2 values |
| `004-enum-value-removed` | Removed one enum value from existing 3 values |
| `005-enum-two-values-unchanged` | Unchanged enum with 2 values |

### String Validation Examples

Path: `type-changes/string-validation/examples/` (5 cases)

| Case id | Change |
| --- | --- |
| `001-examples-two-added` | Added 2 examples |
| `002-examples-two-removed` | Removed 2 examples |
| `003-examples-one-appended` | Added one example to existing 2 values |
| `004-examples-one-removed` | Removed one example from existing 3 values |
| `005-examples-two-unchanged` | Unchanged 2 examples |

### String Validation Value Length

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

### Extended Default

Path: `type-changes/extended/default/` (4 cases)

| Case id | Change |
| --- | --- |
| `001-default-added-string` | Added default (string) |
| `002-default-removed-string` | Removed default (string) |
| `003-default-replaced-string` | Replaced default (string) |
| `004-default-replaced-boolean` | Replaced default (boolean) |

### Extended Object

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

### Extended Array

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

### Extended Misc

Path: `type-changes/extended/misc/` (6 cases)

| Case id | Change |
| --- | --- |
| `001-pattern-added` | pattern added |
| `002-pattern-removed` | pattern removed |
| `003-pattern-replaced` | pattern replaced |
| `004-multiple-of-added` | multipleOf added |
| `005-multiple-of-removed` | multipleOf removed |
| `006-multiple-of-replaced` | multipleOf replaced |

### Extended Combiners One Level

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

### Extended Combiners Two Level

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

### Circular

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

### Type Value Changes

Path: `type-changes/type-value-changes/` (30 cases)

| Case id | Change |
| --- | --- |
| `001-string-to-number` | Root type change: string → number |
| `002-string-to-integer` | Root type change: string → integer |
| `003-string-to-boolean` | Root type change: string → boolean |
| `004-string-to-array` | Root type change: string → array |
| `005-string-to-object` | Root type change: string → object |
| `006-number-to-string` | Root type change: number → string |
| `007-number-to-integer` | Root type change: number → integer |
| `008-number-to-boolean` | Root type change: number → boolean |
| `009-number-to-array` | Root type change: number → array |
| `010-number-to-object` | Root type change: number → object |
| `011-integer-to-string` | Root type change: integer → string |
| `012-integer-to-number` | Root type change: integer → number |
| `013-integer-to-boolean` | Root type change: integer → boolean |
| `014-integer-to-array` | Root type change: integer → array |
| `015-integer-to-object` | Root type change: integer → object |
| `016-boolean-to-string` | Root type change: boolean → string |
| `017-boolean-to-number` | Root type change: boolean → number |
| `018-boolean-to-integer` | Root type change: boolean → integer |
| `019-boolean-to-array` | Root type change: boolean → array |
| `020-boolean-to-object` | Root type change: boolean → object |
| `021-array-to-string` | Root type change: array → string |
| `022-array-to-number` | Root type change: array → number |
| `023-array-to-integer` | Root type change: array → integer |
| `024-array-to-boolean` | Root type change: array → boolean |
| `025-array-to-object` | Root type change: array → object |
| `026-object-to-string` | Root type change: object → string |
| `027-object-to-number` | Root type change: object → number |
| `028-object-to-integer` | Root type change: object → integer |
| `029-object-to-boolean` | Root type change: object → boolean |
| `030-object-to-array` | Root type change: object → array |

### Type Annotations Changes

Path: `type-changes/type-annotations-changes/` (18 cases)

| Case id | Change |
| --- | --- |
| `001-title-added` | Title added |
| `002-title-removed` | Title removed |
| `003-title-replaced` | Title replaced; format unchanged |
| `004-format-added` | Format added |
| `005-format-removed` | Format removed |
| `006-format-replaced` | Format replaced; title unchanged |
| `007-title-added-format-added` | Title added; format added |
| `008-title-added-format-removed` | Title added; format removed |
| `009-title-added-format-replaced` | Title added; format replaced |
| `010-title-removed-format-added` | Title removed; format added |
| `011-title-removed-format-removed` | Title removed; format removed |
| `012-title-removed-format-replaced` | Title removed; format replaced |
| `013-title-replaced-format-added` | Title replaced; format added |
| `014-title-replaced-format-removed` | Title replaced; format removed |
| `015-title-replaced-format-replaced` | Title replaced; format replaced |
| `016-monolithic-type-title-format-replaced` | Type, title, and format replaced together (monolithic type-label highlight) |
| `017-type-title-replaced` | Type and title replaced; format unchanged |
| `018-type-format-replaced` | Type and format replaced; title unchanged |

### Object Properties

Path: `type-changes/object-properties/` (108 cases)

| Case id | Change |
| --- | --- |
| `001-add-one-property-string` | Object with 1 property: add 1 property (string) |
| `002-remove-one-property-string` | Object with 2 properties: remove 1 property (string) |
| `003-add-two-properties-string` | Object with 0 properties: add 2 properties (string) |
| `004-remove-two-properties-string` | Object with 2 properties: remove 2 properties (string) |
| `005-add-one-property-number` | Object with 1 property: add 1 property (number) |
| `006-remove-one-property-number` | Object with 2 properties: remove 1 property (number) |
| `007-add-two-properties-number` | Object with 0 properties: add 2 properties (number) |
| `008-remove-two-properties-number` | Object with 2 properties: remove 2 properties (number) |
| `009-add-one-property-integer` | Object with 1 property: add 1 property (integer) |
| `010-remove-one-property-integer` | Object with 2 properties: remove 1 property (integer) |
| `011-add-two-properties-integer` | Object with 0 properties: add 2 properties (integer) |
| `012-remove-two-properties-integer` | Object with 2 properties: remove 2 properties (integer) |
| `013-add-one-property-boolean` | Object with 1 property: add 1 property (boolean) |
| `014-remove-one-property-boolean` | Object with 2 properties: remove 1 property (boolean) |
| `015-add-two-properties-boolean` | Object with 0 properties: add 2 properties (boolean) |
| `016-remove-two-properties-boolean` | Object with 2 properties: remove 2 properties (boolean) |
| `017-add-one-property-array` | Object with 1 property: add 1 property (array) |
| `018-remove-one-property-array` | Object with 2 properties: remove 1 property (array) |
| `019-add-two-properties-array` | Object with 0 properties: add 2 properties (array) |
| `020-remove-two-properties-array` | Object with 2 properties: remove 2 properties (array) |
| `021-add-one-property-object` | Object with 1 property: add 1 property (object) |
| `022-remove-one-property-object` | Object with 2 properties: remove 1 property (object) |
| `023-add-two-properties-object` | Object with 0 properties: add 2 properties (object) |
| `024-remove-two-properties-object` | Object with 2 properties: remove 2 properties (object) |
| `025-add-additional-properties-rule1-string` | Added additionalProperties (Rule1 schema) (string) |
| `026-remove-additional-properties-rule1-string` | Removed additionalProperties (Rule1 schema) (string) |
| `027-add-additional-properties-false-string` | Added additionalProperties: false (string) |
| `028-remove-additional-properties-false-string` | Removed additionalProperties: false (string) |
| `029-change-additional-properties-rule1-to-false-string` | Changed additionalProperties: Rule1 schema → false (string) |
| `030-change-additional-properties-false-to-rule1-string` | Changed additionalProperties: false → Rule1 schema (string) |
| `031-add-additional-properties-rule1-number` | Added additionalProperties (Rule1 schema) (number) |
| `032-remove-additional-properties-rule1-number` | Removed additionalProperties (Rule1 schema) (number) |
| `033-add-additional-properties-false-number` | Added additionalProperties: false (number) |
| `034-remove-additional-properties-false-number` | Removed additionalProperties: false (number) |
| `035-change-additional-properties-rule1-to-false-number` | Changed additionalProperties: Rule1 schema → false (number) |
| `036-change-additional-properties-false-to-rule1-number` | Changed additionalProperties: false → Rule1 schema (number) |
| `037-add-additional-properties-rule1-integer` | Added additionalProperties (Rule1 schema) (integer) |
| `038-remove-additional-properties-rule1-integer` | Removed additionalProperties (Rule1 schema) (integer) |
| `039-add-additional-properties-false-integer` | Added additionalProperties: false (integer) |
| `040-remove-additional-properties-false-integer` | Removed additionalProperties: false (integer) |
| `041-change-additional-properties-rule1-to-false-integer` | Changed additionalProperties: Rule1 schema → false (integer) |
| `042-change-additional-properties-false-to-rule1-integer` | Changed additionalProperties: false → Rule1 schema (integer) |
| `043-add-additional-properties-rule1-boolean` | Added additionalProperties (Rule1 schema) (boolean) |
| `044-remove-additional-properties-rule1-boolean` | Removed additionalProperties (Rule1 schema) (boolean) |
| `045-add-additional-properties-false-boolean` | Added additionalProperties: false (boolean) |
| `046-remove-additional-properties-false-boolean` | Removed additionalProperties: false (boolean) |
| `047-change-additional-properties-rule1-to-false-boolean` | Changed additionalProperties: Rule1 schema → false (boolean) |
| `048-change-additional-properties-false-to-rule1-boolean` | Changed additionalProperties: false → Rule1 schema (boolean) |
| `049-add-additional-properties-rule1-array` | Added additionalProperties (Rule1 schema) (array) |
| `050-remove-additional-properties-rule1-array` | Removed additionalProperties (Rule1 schema) (array) |
| `051-add-additional-properties-false-array` | Added additionalProperties: false (array) |
| `052-remove-additional-properties-false-array` | Removed additionalProperties: false (array) |
| `053-change-additional-properties-rule1-to-false-array` | Changed additionalProperties: Rule1 schema → false (array) |
| `054-change-additional-properties-false-to-rule1-array` | Changed additionalProperties: false → Rule1 schema (array) |
| `055-add-additional-properties-rule1-object` | Added additionalProperties (Rule1 schema) (object) |
| `056-remove-additional-properties-rule1-object` | Removed additionalProperties (Rule1 schema) (object) |
| `057-add-additional-properties-false-object` | Added additionalProperties: false (object) |
| `058-remove-additional-properties-false-object` | Removed additionalProperties: false (object) |
| `059-change-additional-properties-rule1-to-false-object` | Changed additionalProperties: Rule1 schema → false (object) |
| `060-change-additional-properties-false-to-rule1-object` | Changed additionalProperties: false → Rule1 schema (object) |
| `061-one-of-variant2-added-string` | Added oneOf object variant (OneOfVariant2, Rule1) (string) |
| `062-one-of-variant2-removed-string` | Removed oneOf object variant (OneOfVariant2, Rule1) (string) |
| `063-one-of-variant2-add-additional-properties-rule1-string` | OneOf variant: added additionalProperties (Rule1 schema) (string) |
| `064-one-of-variant2-remove-additional-properties-rule1-string` | OneOf variant: removed additionalProperties (Rule1 schema) (string) |
| `065-one-of-variant2-add-additional-properties-false-string` | OneOf variant: added additionalProperties: false (string) |
| `066-one-of-variant2-remove-additional-properties-false-string` | OneOf variant: removed additionalProperties: false (string) |
| `067-one-of-variant2-change-additional-properties-rule1-to-false-string` | OneOf variant: changed additionalProperties: Rule1 schema → false (string) |
| `068-one-of-variant2-change-additional-properties-false-to-rule1-string` | OneOf variant: changed additionalProperties: false → Rule1 schema (string) |
| `069-one-of-variant2-added-number` | Added oneOf object variant (OneOfVariant2, Rule1) (number) |
| `070-one-of-variant2-removed-number` | Removed oneOf object variant (OneOfVariant2, Rule1) (number) |
| `071-one-of-variant2-add-additional-properties-rule1-number` | OneOf variant: added additionalProperties (Rule1 schema) (number) |
| `072-one-of-variant2-remove-additional-properties-rule1-number` | OneOf variant: removed additionalProperties (Rule1 schema) (number) |
| `073-one-of-variant2-add-additional-properties-false-number` | OneOf variant: added additionalProperties: false (number) |
| `074-one-of-variant2-remove-additional-properties-false-number` | OneOf variant: removed additionalProperties: false (number) |
| `075-one-of-variant2-change-additional-properties-rule1-to-false-number` | OneOf variant: changed additionalProperties: Rule1 schema → false (number) |
| `076-one-of-variant2-change-additional-properties-false-to-rule1-number` | OneOf variant: changed additionalProperties: false → Rule1 schema (number) |
| `077-one-of-variant2-added-integer` | Added oneOf object variant (OneOfVariant2, Rule1) (integer) |
| `078-one-of-variant2-removed-integer` | Removed oneOf object variant (OneOfVariant2, Rule1) (integer) |
| `079-one-of-variant2-add-additional-properties-rule1-integer` | OneOf variant: added additionalProperties (Rule1 schema) (integer) |
| `080-one-of-variant2-remove-additional-properties-rule1-integer` | OneOf variant: removed additionalProperties (Rule1 schema) (integer) |
| `081-one-of-variant2-add-additional-properties-false-integer` | OneOf variant: added additionalProperties: false (integer) |
| `082-one-of-variant2-remove-additional-properties-false-integer` | OneOf variant: removed additionalProperties: false (integer) |
| `083-one-of-variant2-change-additional-properties-rule1-to-false-integer` | OneOf variant: changed additionalProperties: Rule1 schema → false (integer) |
| `084-one-of-variant2-change-additional-properties-false-to-rule1-integer` | OneOf variant: changed additionalProperties: false → Rule1 schema (integer) |
| `085-one-of-variant2-added-boolean` | Added oneOf object variant (OneOfVariant2, Rule1) (boolean) |
| `086-one-of-variant2-removed-boolean` | Removed oneOf object variant (OneOfVariant2, Rule1) (boolean) |
| `087-one-of-variant2-add-additional-properties-rule1-boolean` | OneOf variant: added additionalProperties (Rule1 schema) (boolean) |
| `088-one-of-variant2-remove-additional-properties-rule1-boolean` | OneOf variant: removed additionalProperties (Rule1 schema) (boolean) |
| `089-one-of-variant2-add-additional-properties-false-boolean` | OneOf variant: added additionalProperties: false (boolean) |
| `090-one-of-variant2-remove-additional-properties-false-boolean` | OneOf variant: removed additionalProperties: false (boolean) |
| `091-one-of-variant2-change-additional-properties-rule1-to-false-boolean` | OneOf variant: changed additionalProperties: Rule1 schema → false (boolean) |
| `092-one-of-variant2-change-additional-properties-false-to-rule1-boolean` | OneOf variant: changed additionalProperties: false → Rule1 schema (boolean) |
| `093-one-of-variant2-added-array` | Added oneOf object variant (OneOfVariant2, Rule1) (array) |
| `094-one-of-variant2-removed-array` | Removed oneOf object variant (OneOfVariant2, Rule1) (array) |
| `095-one-of-variant2-add-additional-properties-rule1-array` | OneOf variant: added additionalProperties (Rule1 schema) (array) |
| `096-one-of-variant2-remove-additional-properties-rule1-array` | OneOf variant: removed additionalProperties (Rule1 schema) (array) |
| `097-one-of-variant2-add-additional-properties-false-array` | OneOf variant: added additionalProperties: false (array) |
| `098-one-of-variant2-remove-additional-properties-false-array` | OneOf variant: removed additionalProperties: false (array) |
| `099-one-of-variant2-change-additional-properties-rule1-to-false-array` | OneOf variant: changed additionalProperties: Rule1 schema → false (array) |
| `100-one-of-variant2-change-additional-properties-false-to-rule1-array` | OneOf variant: changed additionalProperties: false → Rule1 schema (array) |
| `101-one-of-variant2-added-object` | Added oneOf object variant (OneOfVariant2, Rule1) (object) |
| `102-one-of-variant2-removed-object` | Removed oneOf object variant (OneOfVariant2, Rule1) (object) |
| `103-one-of-variant2-add-additional-properties-rule1-object` | OneOf variant: added additionalProperties (Rule1 schema) (object) |
| `104-one-of-variant2-remove-additional-properties-rule1-object` | OneOf variant: removed additionalProperties (Rule1 schema) (object) |
| `105-one-of-variant2-add-additional-properties-false-object` | OneOf variant: added additionalProperties: false (object) |
| `106-one-of-variant2-remove-additional-properties-false-object` | OneOf variant: removed additionalProperties: false (object) |
| `107-one-of-variant2-change-additional-properties-rule1-to-false-object` | OneOf variant: changed additionalProperties: Rule1 schema → false (object) |
| `108-one-of-variant2-change-additional-properties-false-to-rule1-object` | OneOf variant: changed additionalProperties: false → Rule1 schema (object) |

### Array Indexed Items

Path: `type-changes/array-indexed-items/` (24 cases)

| Case id | Change |
| --- | --- |
| `001-add-one-indexed-item-string` | Array with 1 indexed item: add 1 indexed item (string) |
| `002-remove-one-indexed-item-string` | Array with 2 indexed items: remove 1 indexed item (string) |
| `003-add-two-indexed-items-string` | Array with no indexed items: add 2 indexed items (string) |
| `004-remove-two-indexed-items-string` | Array with 2 indexed items: remove 2 indexed items (string) |
| `005-add-one-indexed-item-number` | Array with 1 indexed item: add 1 indexed item (number) |
| `006-remove-one-indexed-item-number` | Array with 2 indexed items: remove 1 indexed item (number) |
| `007-add-two-indexed-items-number` | Array with no indexed items: add 2 indexed items (number) |
| `008-remove-two-indexed-items-number` | Array with 2 indexed items: remove 2 indexed items (number) |
| `009-add-one-indexed-item-integer` | Array with 1 indexed item: add 1 indexed item (integer) |
| `010-remove-one-indexed-item-integer` | Array with 2 indexed items: remove 1 indexed item (integer) |
| `011-add-two-indexed-items-integer` | Array with no indexed items: add 2 indexed items (integer) |
| `012-remove-two-indexed-items-integer` | Array with 2 indexed items: remove 2 indexed items (integer) |
| `013-add-one-indexed-item-boolean` | Array with 1 indexed item: add 1 indexed item (boolean) |
| `014-remove-one-indexed-item-boolean` | Array with 2 indexed items: remove 1 indexed item (boolean) |
| `015-add-two-indexed-items-boolean` | Array with no indexed items: add 2 indexed items (boolean) |
| `016-remove-two-indexed-items-boolean` | Array with 2 indexed items: remove 2 indexed items (boolean) |
| `017-add-one-indexed-item-array` | Array with 1 indexed item: add 1 indexed item (array) |
| `018-remove-one-indexed-item-array` | Array with 2 indexed items: remove 1 indexed item (array) |
| `019-add-two-indexed-items-array` | Array with no indexed items: add 2 indexed items (array) |
| `020-remove-two-indexed-items-array` | Array with 2 indexed items: remove 2 indexed items (array) |
| `021-add-one-indexed-item-object` | Array with 1 indexed item: add 1 indexed item (object) |
| `022-remove-one-indexed-item-object` | Array with 2 indexed items: remove 1 indexed item (object) |
| `023-add-two-indexed-items-object` | Array with no indexed items: add 2 indexed items (object) |
| `024-remove-two-indexed-items-object` | Array with 2 indexed items: remove 2 indexed items (object) |

### OneOf Object Variant

Path: `type-changes/one-of-object-variant/` (48 cases)

| Case id | Change |
| --- | --- |
| `001-object-variant-add-one-property-string` | Object variant with 1 property: add 1 property (string) |
| `002-object-variant-remove-one-property-string` | Object variant with 2 properties: remove 1 property (string) |
| `003-object-variant-add-two-properties-string` | Object variant with 0 properties: add 2 properties (string) |
| `004-object-variant-remove-two-properties-string` | Object variant with 2 properties: remove 2 properties (string) |
| `005-object-variant-added-string` | Added object oneOf variant (string) |
| `006-object-variant-removed-string` | Removed object oneOf variant (string) |
| `007-one-of-prop-added-string` | Added oneOf property on root (string) |
| `008-one-of-prop-removed-string` | Removed oneOf property from root (string) |
| `009-object-variant-add-one-property-number` | Object variant with 1 property: add 1 property (number) |
| `010-object-variant-remove-one-property-number` | Object variant with 2 properties: remove 1 property (number) |
| `011-object-variant-add-two-properties-number` | Object variant with 0 properties: add 2 properties (number) |
| `012-object-variant-remove-two-properties-number` | Object variant with 2 properties: remove 2 properties (number) |
| `013-object-variant-added-number` | Added object oneOf variant (number) |
| `014-object-variant-removed-number` | Removed object oneOf variant (number) |
| `015-one-of-prop-added-number` | Added oneOf property on root (number) |
| `016-one-of-prop-removed-number` | Removed oneOf property from root (number) |
| `017-object-variant-add-one-property-integer` | Object variant with 1 property: add 1 property (integer) |
| `018-object-variant-remove-one-property-integer` | Object variant with 2 properties: remove 1 property (integer) |
| `019-object-variant-add-two-properties-integer` | Object variant with 0 properties: add 2 properties (integer) |
| `020-object-variant-remove-two-properties-integer` | Object variant with 2 properties: remove 2 properties (integer) |
| `021-object-variant-added-integer` | Added object oneOf variant (integer) |
| `022-object-variant-removed-integer` | Removed object oneOf variant (integer) |
| `023-one-of-prop-added-integer` | Added oneOf property on root (integer) |
| `024-one-of-prop-removed-integer` | Removed oneOf property from root (integer) |
| `025-object-variant-add-one-property-boolean` | Object variant with 1 property: add 1 property (boolean) |
| `026-object-variant-remove-one-property-boolean` | Object variant with 2 properties: remove 1 property (boolean) |
| `027-object-variant-add-two-properties-boolean` | Object variant with 0 properties: add 2 properties (boolean) |
| `028-object-variant-remove-two-properties-boolean` | Object variant with 2 properties: remove 2 properties (boolean) |
| `029-object-variant-added-boolean` | Added object oneOf variant (boolean) |
| `030-object-variant-removed-boolean` | Removed object oneOf variant (boolean) |
| `031-one-of-prop-added-boolean` | Added oneOf property on root (boolean) |
| `032-one-of-prop-removed-boolean` | Removed oneOf property from root (boolean) |
| `033-object-variant-add-one-property-array` | Object variant with 1 property: add 1 property (array) |
| `034-object-variant-remove-one-property-array` | Object variant with 2 properties: remove 1 property (array) |
| `035-object-variant-add-two-properties-array` | Object variant with 0 properties: add 2 properties (array) |
| `036-object-variant-remove-two-properties-array` | Object variant with 2 properties: remove 2 properties (array) |
| `037-object-variant-added-array` | Added object oneOf variant (array) |
| `038-object-variant-removed-array` | Removed object oneOf variant (array) |
| `039-one-of-prop-added-array` | Added oneOf property on root (array) |
| `040-one-of-prop-removed-array` | Removed oneOf property from root (array) |
| `041-object-variant-add-one-property-object` | Object variant with 1 property: add 1 property (object) |
| `042-object-variant-remove-one-property-object` | Object variant with 2 properties: remove 1 property (object) |
| `043-object-variant-add-two-properties-object` | Object variant with 0 properties: add 2 properties (object) |
| `044-object-variant-remove-two-properties-object` | Object variant with 2 properties: remove 2 properties (object) |
| `045-object-variant-added-object` | Added object oneOf variant (object) |
| `046-object-variant-removed-object` | Removed object oneOf variant (object) |
| `047-one-of-prop-added-object` | Added oneOf property on root (object) |
| `048-one-of-prop-removed-object` | Removed oneOf property from root (object) |

### OneOf Array Variant

Path: `type-changes/one-of-array-variant/` (48 cases)

| Case id | Change |
| --- | --- |
| `001-array-variant-add-one-indexed-item-string` | Array variant with 1 indexed item: add 1 indexed item (string) |
| `002-array-variant-remove-one-indexed-item-string` | Array variant with 2 indexed items: remove 1 indexed item (string) |
| `003-array-variant-add-two-indexed-items-string` | Array variant with no indexed items: add 2 indexed items (string) |
| `004-array-variant-remove-two-indexed-items-string` | Array variant with 2 indexed items: remove 2 indexed items (string) |
| `005-array-variant-added-string` | Added array oneOf variant (string) |
| `006-array-variant-removed-string` | Removed array oneOf variant (string) |
| `007-one-of-prop-added-string` | Added oneOf property on root (string) |
| `008-one-of-prop-removed-string` | Removed oneOf property from root (string) |
| `009-array-variant-add-one-indexed-item-number` | Array variant with 1 indexed item: add 1 indexed item (number) |
| `010-array-variant-remove-one-indexed-item-number` | Array variant with 2 indexed items: remove 1 indexed item (number) |
| `011-array-variant-add-two-indexed-items-number` | Array variant with no indexed items: add 2 indexed items (number) |
| `012-array-variant-remove-two-indexed-items-number` | Array variant with 2 indexed items: remove 2 indexed items (number) |
| `013-array-variant-added-number` | Added array oneOf variant (number) |
| `014-array-variant-removed-number` | Removed array oneOf variant (number) |
| `015-one-of-prop-added-number` | Added oneOf property on root (number) |
| `016-one-of-prop-removed-number` | Removed oneOf property from root (number) |
| `017-array-variant-add-one-indexed-item-integer` | Array variant with 1 indexed item: add 1 indexed item (integer) |
| `018-array-variant-remove-one-indexed-item-integer` | Array variant with 2 indexed items: remove 1 indexed item (integer) |
| `019-array-variant-add-two-indexed-items-integer` | Array variant with no indexed items: add 2 indexed items (integer) |
| `020-array-variant-remove-two-indexed-items-integer` | Array variant with 2 indexed items: remove 2 indexed items (integer) |
| `021-array-variant-added-integer` | Added array oneOf variant (integer) |
| `022-array-variant-removed-integer` | Removed array oneOf variant (integer) |
| `023-one-of-prop-added-integer` | Added oneOf property on root (integer) |
| `024-one-of-prop-removed-integer` | Removed oneOf property from root (integer) |
| `025-array-variant-add-one-indexed-item-boolean` | Array variant with 1 indexed item: add 1 indexed item (boolean) |
| `026-array-variant-remove-one-indexed-item-boolean` | Array variant with 2 indexed items: remove 1 indexed item (boolean) |
| `027-array-variant-add-two-indexed-items-boolean` | Array variant with no indexed items: add 2 indexed items (boolean) |
| `028-array-variant-remove-two-indexed-items-boolean` | Array variant with 2 indexed items: remove 2 indexed items (boolean) |
| `029-array-variant-added-boolean` | Added array oneOf variant (boolean) |
| `030-array-variant-removed-boolean` | Removed array oneOf variant (boolean) |
| `031-one-of-prop-added-boolean` | Added oneOf property on root (boolean) |
| `032-one-of-prop-removed-boolean` | Removed oneOf property from root (boolean) |
| `033-array-variant-add-one-indexed-item-array` | Array variant with 1 indexed item: add 1 indexed item (array) |
| `034-array-variant-remove-one-indexed-item-array` | Array variant with 2 indexed items: remove 1 indexed item (array) |
| `035-array-variant-add-two-indexed-items-array` | Array variant with no indexed items: add 2 indexed items (array) |
| `036-array-variant-remove-two-indexed-items-array` | Array variant with 2 indexed items: remove 2 indexed items (array) |
| `037-array-variant-added-array` | Added array oneOf variant (array) |
| `038-array-variant-removed-array` | Removed array oneOf variant (array) |
| `039-one-of-prop-added-array` | Added oneOf property on root (array) |
| `040-one-of-prop-removed-array` | Removed oneOf property from root (array) |
| `041-array-variant-add-one-indexed-item-object` | Array variant with 1 indexed item: add 1 indexed item (object) |
| `042-array-variant-remove-one-indexed-item-object` | Array variant with 2 indexed items: remove 1 indexed item (object) |
| `043-array-variant-add-two-indexed-items-object` | Array variant with no indexed items: add 2 indexed items (object) |
| `044-array-variant-remove-two-indexed-items-object` | Array variant with 2 indexed items: remove 2 indexed items (object) |
| `045-array-variant-added-object` | Added array oneOf variant (object) |
| `046-array-variant-removed-object` | Removed array oneOf variant (object) |
| `047-one-of-prop-added-object` | Added oneOf property on root (object) |
| `048-one-of-prop-removed-object` | Removed oneOf property from root (object) |

## Storybook and screenshot tests

Stories live under `packages/api-doc-viewer/src/stories/json-schema-diffs-suite/`.
Screenshot ITs live under `packages/api-doc-viewer/src/it/json-schema-diffs-suite/`.

```bash
cd packages/api-doc-viewer
node bin/generate-json-schema-type-changes-samples.mjs
npm run build:showcase
npm run regenerate-screenshots -- --testPathPattern=type-changes
```

