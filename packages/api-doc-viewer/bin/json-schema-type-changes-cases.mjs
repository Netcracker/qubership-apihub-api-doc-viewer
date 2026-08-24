/** @typedef {{ sampleDir: string, caseId: string, before: object, after: object, summary: string }} TypeChangeCase */

const clone = (value) => structuredClone(value);

const omit = (schema, key) => {
  const next = clone(schema);
  delete next[key];
  return next;
};

const merge = (schema, patch) => ({ ...clone(schema), ...patch });

const STRING_DESC_ONLY = () => ({
  type: "string",
  description: "Sample string description",
});

const STRING_DESC_ENUM = () => ({
  type: "string",
  description: "Sample string description",
  enum: ["alpha", "beta"],
});

const STRING_PLAIN = () => ({ type: "string" });

const INTEGER_PLAIN = () => ({ type: "integer" });

const LONG_DESCRIPTION = "L".repeat(650);

const SHORT_DESCRIPTION = "Short unchanged description";

const objectWithStringProperty = (required = false) => {
  const schema = {
    type: "object",
    description: "Object with one string property",
    properties: {
      name: {
        type: "string",
        description: "Name property",
      },
    },
  };
  if (required) {
    schema.required = ["name"];
  }
  return schema;
};

const numberRange = ({ minimum, exclusiveMinimum, maximum, exclusiveMaximum } = {}) => {
  const schema = INTEGER_PLAIN();
  if (minimum !== undefined) {
    schema.minimum = minimum;
  }
  if (exclusiveMinimum !== undefined) {
    schema.exclusiveMinimum = exclusiveMinimum;
  }
  if (maximum !== undefined) {
    schema.maximum = maximum;
  }
  if (exclusiveMaximum !== undefined) {
    schema.exclusiveMaximum = exclusiveMaximum;
  }
  return schema;
};

const stringLength = ({ minLength, maxLength } = {}) => {
  const schema = STRING_PLAIN();
  if (minLength !== undefined) {
    schema.minLength = minLength;
  }
  if (maxLength !== undefined) {
    schema.maxLength = maxLength;
  }
  return schema;
};

/** @type {Record<string, number>} */
const dirCounters = {};

/**
 * @param {TypeChangeCase[]} cases
 * @param {string} sampleDir
 * @param {string} slug
 * @param {object} before
 * @param {object} after
 * @param {string} summary
 */
const pushCase = (cases, sampleDir, slug, before, after, summary) => {
  dirCounters[sampleDir] = (dirCounters[sampleDir] ?? 0) + 1;
  const index = dirCounters[sampleDir];
  const width = 3;
  cases.push({
    sampleDir,
    caseId: `${String(index).padStart(width, "0")}-${slug}`,
    before,
    after,
    summary,
  });
};

/** @param {TypeChangeCase[]} cases */
const collectTypeFlagsCases = (cases) => {
  const dir = "type-flags";
  const base = STRING_DESC_ONLY();

  pushCase(cases, dir, "read-only-added", base, merge(base, { readOnly: true }), "Added readOnly");
  pushCase(cases, dir, "read-only-removed", merge(base, { readOnly: true }), base, "Removed readOnly");
  pushCase(cases, dir, "write-only-added", base, merge(base, { writeOnly: true }), "Added writeOnly");
  pushCase(cases, dir, "write-only-removed", merge(base, { writeOnly: true }), base, "Removed writeOnly");
  pushCase(
    cases,
    dir,
    "deprecated-added",
    base,
    merge(base, { deprecated: true }),
    "Added deprecated: true",
  );
  pushCase(
    cases,
    dir,
    "deprecated-removed",
    merge(base, { deprecated: true }),
    base,
    "Removed deprecated: true",
  );

  const objOptional = objectWithStringProperty(false);
  const objRequired = objectWithStringProperty(true);
  pushCase(
    cases,
    dir,
    "required-added",
    objOptional,
    objRequired,
    "Property added to parent required",
  );
  pushCase(
    cases,
    dir,
    "required-removed",
    objRequired,
    objOptional,
    "Property removed from parent required",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectDescriptionCases = (cases) => {
  const dir = "description-changes";
  const base = STRING_DESC_ONLY();
  const noDesc = STRING_PLAIN();
  const enumBase = STRING_DESC_ENUM();
  const enumNoDesc = omit(enumBase, "description");

  pushCase(
    cases,
    dir,
    "description-added",
    noDesc,
    base,
    "String with description only: description added",
  );
  pushCase(
    cases,
    dir,
    "description-removed",
    base,
    noDesc,
    "String with description only: description removed",
  );
  pushCase(
    cases,
    dir,
    "description-replaced",
    base,
    merge(base, { description: "Updated string description" }),
    "String with description only: description replaced",
  );
  pushCase(
    cases,
    dir,
    "description-with-enum-added",
    enumNoDesc,
    enumBase,
    "String with description and enum: description added",
  );
  pushCase(
    cases,
    dir,
    "description-with-enum-removed",
    enumBase,
    enumNoDesc,
    "String with description and enum: description removed",
  );
  pushCase(
    cases,
    dir,
    "description-with-enum-replaced",
    enumBase,
    merge(enumBase, { description: "Updated enum string description" }),
    "String with description and enum: description replaced",
  );

  const unchangedShort = merge(STRING_PLAIN(), { description: SHORT_DESCRIPTION });
  pushCase(
    cases,
    dir,
    "unchanged-description-short",
    unchangedShort,
    clone(unchangedShort),
    "Unchanged short description",
  );

  const unchangedLong = merge(STRING_PLAIN(), { description: LONG_DESCRIPTION });
  pushCase(
    cases,
    dir,
    "unchanged-description-long",
    unchangedLong,
    clone(unchangedLong),
    "Unchanged long description (>600 chars)",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectEnumCases = (cases) => {
  const dir = "string-validation/enum";
  const base = STRING_PLAIN();

  pushCase(
    cases,
    dir,
    "enum-two-values-added",
    base,
    merge(base, { enum: ["alpha", "beta"] }),
    "Added enum with 2 values",
  );
  pushCase(
    cases,
    dir,
    "enum-two-values-removed",
    merge(base, { enum: ["alpha", "beta"] }),
    base,
    "Removed enum with 2 values",
  );
  pushCase(
    cases,
    dir,
    "enum-value-appended",
    merge(base, { enum: ["alpha", "beta"] }),
    merge(base, { enum: ["alpha", "beta", "gamma"] }),
    "Added one enum value to existing 2 values",
  );
  pushCase(
    cases,
    dir,
    "enum-value-removed",
    merge(base, { enum: ["alpha", "beta", "gamma"] }),
    merge(base, { enum: ["alpha", "beta"] }),
    "Removed one enum value from existing 3 values",
  );
  const unchanged = merge(base, { enum: ["alpha", "beta"] });
  pushCase(cases, dir, "enum-two-values-unchanged", unchanged, clone(unchanged), "Unchanged enum with 2 values");
};

/** @param {TypeChangeCase[]} cases */
const collectExamplesCases = (cases) => {
  const dir = "string-validation/examples";
  const base = STRING_PLAIN();

  pushCase(
    cases,
    dir,
    "examples-two-added",
    base,
    merge(base, { examples: ["first", "second"] }),
    "Added 2 examples",
  );
  pushCase(
    cases,
    dir,
    "examples-two-removed",
    merge(base, { examples: ["first", "second"] }),
    base,
    "Removed 2 examples",
  );
  pushCase(
    cases,
    dir,
    "examples-one-appended",
    merge(base, { examples: ["first", "second"] }),
    merge(base, { examples: ["first", "second", "third"] }),
    "Added one example to existing 2 values",
  );
  pushCase(
    cases,
    dir,
    "examples-one-removed",
    merge(base, { examples: ["first", "second", "third"] }),
    merge(base, { examples: ["first", "second"] }),
    "Removed one example from existing 3 values",
  );
  const unchanged = merge(base, { examples: ["first", "second"] });
  pushCase(
    cases,
    dir,
    "examples-two-unchanged",
    unchanged,
    clone(unchanged),
    "Unchanged 2 examples",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectValueRangeCases = (cases) => {
  const dir = "number-validation/value-range";
  const base = INTEGER_PLAIN();

  const add = (slug, before, after, summary) => pushCase(cases, dir, slug, before, after, summary);

  add("minimum-added", base, numberRange({ minimum: 1 }), "Added minimum");
  add(
    "minimum-added-with-exclusive-minimum-true",
    base,
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    "Added minimum with exclusiveMinimum = true",
  );
  add(
    "exclusive-minimum-numeric-added",
    base,
    numberRange({ exclusiveMinimum: 2 }),
    "Added exclusiveMinimum (numeric)",
  );
  add("minimum-removed", numberRange({ minimum: 1 }), base, "Removed minimum");
  add(
    "minimum-with-exclusive-minimum-true-removed",
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    base,
    "Removed minimum with exclusiveMinimum = true",
  );
  add(
    "exclusive-minimum-numeric-removed",
    numberRange({ exclusiveMinimum: 2 }),
    base,
    "Removed exclusiveMinimum (numeric)",
  );
  add(
    "exclusive-minimum-false-to-true",
    numberRange({ minimum: 1, exclusiveMinimum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    "Changed exclusiveMinimum from false to true on existing minimum",
  );
  add(
    "exclusive-minimum-true-to-false",
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: false }),
    "Changed exclusiveMinimum from true to false on existing minimum",
  );

  add("maximum-added", base, numberRange({ maximum: 10 }), "Added maximum");
  add(
    "maximum-added-with-exclusive-maximum-true",
    base,
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    "Added maximum with exclusiveMaximum = true",
  );
  add(
    "exclusive-maximum-numeric-added",
    base,
    numberRange({ exclusiveMaximum: 10 }),
    "Added exclusiveMaximum (numeric)",
  );
  add("maximum-removed", numberRange({ maximum: 10 }), base, "Removed maximum");
  add(
    "maximum-with-exclusive-maximum-true-removed",
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    base,
    "Removed maximum with exclusiveMaximum = true",
  );
  add(
    "exclusive-maximum-numeric-removed",
    numberRange({ exclusiveMaximum: 10 }),
    base,
    "Removed exclusiveMaximum (numeric)",
  );
  add(
    "exclusive-maximum-false-to-true",
    numberRange({ maximum: 10, exclusiveMaximum: false }),
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    "Changed exclusiveMaximum from false to true on existing maximum",
  );
  add(
    "exclusive-maximum-true-to-false",
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    numberRange({ maximum: 10, exclusiveMaximum: false }),
    "Changed exclusiveMaximum from true to false on existing maximum",
  );

  add(
    "minimum-maximum-added",
    base,
    numberRange({ minimum: 1, maximum: 10 }),
    "Added minimum, maximum",
  );
  add(
    "minimum-inclusive-maximum-exclusive-added",
    base,
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    "Added minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = true)",
  );
  add(
    "minimum-exclusive-maximum-inclusive-added",
    base,
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    "Added minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = false)",
  );
  add(
    "minimum-maximum-both-exclusive-added",
    base,
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    "Added minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = true)",
  );
  add(
    "minimum-maximum-removed",
    numberRange({ minimum: 1, maximum: 10 }),
    base,
    "Removed minimum, maximum",
  );
  add(
    "minimum-inclusive-maximum-exclusive-removed",
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    base,
    "Removed minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = true)",
  );
  add(
    "minimum-exclusive-maximum-inclusive-removed",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    base,
    "Removed minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = false)",
  );
  add(
    "minimum-maximum-both-exclusive-removed",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    base,
    "Removed minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = true)",
  );

  add(
    "min-ex-max-in-min-ex-to-inclusive",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    "Changed exclusiveMinimum to false",
  );
  add(
    "min-ex-max-in-max-in-to-exclusive",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    "Changed exclusiveMaximum to true",
  );
  add(
    "min-in-max-ex-min-in-to-exclusive",
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    "Changed exclusiveMinimum to true",
  );
  add(
    "min-in-max-ex-max-ex-to-inclusive",
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    "Changed exclusiveMaximum to false",
  );
  add(
    "min-in-max-in-min-in-to-exclusive",
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    "Changed exclusiveMinimum to true",
  );
  add(
    "min-in-max-in-max-in-to-exclusive",
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    "Changed exclusiveMaximum to true",
  );
  add(
    "min-in-max-in-both-to-exclusive",
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    "Changed exclusiveMinimum and exclusiveMaximum to true",
  );
  add(
    "min-ex-max-ex-min-ex-to-inclusive",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    "Changed exclusiveMinimum to false",
  );
  add(
    "min-ex-max-ex-max-ex-to-inclusive",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    "Changed exclusiveMaximum to false",
  );
  add(
    "min-ex-max-ex-both-to-inclusive",
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    "Changed exclusiveMinimum and exclusiveMaximum to false",
  );

  const unchangedMinInclusive = numberRange({ minimum: 1, exclusiveMinimum: false });
  add(
    "unchanged-minimum-inclusive",
    unchangedMinInclusive,
    clone(unchangedMinInclusive),
    "Unchanged minimum (exclusiveMinimum = false)",
  );
  const unchangedMinExclusive = numberRange({ minimum: 1, exclusiveMinimum: true });
  add(
    "unchanged-minimum-exclusive",
    unchangedMinExclusive,
    clone(unchangedMinExclusive),
    "Unchanged minimum (exclusiveMinimum = true)",
  );
  const unchangedMaxInclusive = numberRange({ maximum: 10, exclusiveMaximum: false });
  add(
    "unchanged-maximum-inclusive",
    unchangedMaxInclusive,
    clone(unchangedMaxInclusive),
    "Unchanged maximum (exclusiveMaximum = false)",
  );
  const unchangedMaxExclusive = numberRange({ maximum: 10, exclusiveMaximum: true });
  add(
    "unchanged-maximum-exclusive",
    unchangedMaxExclusive,
    clone(unchangedMaxExclusive),
    "Unchanged maximum (exclusiveMaximum = true)",
  );
  const unchangedBothInclusive = numberRange({
    minimum: 1,
    exclusiveMinimum: false,
    maximum: 10,
    exclusiveMaximum: false,
  });
  add(
    "unchanged-min-max-inclusive",
    unchangedBothInclusive,
    clone(unchangedBothInclusive),
    "Unchanged minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = false)",
  );
  const unchangedMinInMaxEx = numberRange({
    minimum: 1,
    exclusiveMinimum: false,
    maximum: 10,
    exclusiveMaximum: true,
  });
  add(
    "unchanged-min-inclusive-max-exclusive",
    unchangedMinInMaxEx,
    clone(unchangedMinInMaxEx),
    "Unchanged minimum (exclusiveMinimum = false), maximum (exclusiveMaximum = true)",
  );
  const unchangedMinExMaxEx = numberRange({
    minimum: 1,
    exclusiveMinimum: true,
    maximum: 10,
    exclusiveMaximum: true,
  });
  add(
    "unchanged-min-max-both-exclusive",
    unchangedMinExMaxEx,
    clone(unchangedMinExMaxEx),
    "Unchanged minimum (exclusiveMinimum = true), maximum (exclusiveMaximum = true)",
  );

  add(
    "min-in-add-max-in",
    numberRange({ minimum: 1, exclusiveMinimum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    "Added inclusive maximum to existing inclusive minimum",
  );
  add(
    "min-in-add-max-ex",
    numberRange({ minimum: 1, exclusiveMinimum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    "Added exclusive maximum to existing inclusive minimum",
  );
  add(
    "min-ex-add-max-in",
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    "Added inclusive maximum to existing exclusive minimum",
  );
  add(
    "min-ex-add-max-ex",
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    "Added exclusive maximum to existing exclusive minimum",
  );
  add(
    "max-in-add-min-in",
    numberRange({ maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: false }),
    "Added inclusive minimum to existing inclusive maximum",
  );
  add(
    "max-in-add-min-ex",
    numberRange({ maximum: 10, exclusiveMaximum: false }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: false }),
    "Added exclusive minimum to existing inclusive maximum",
  );
  add(
    "max-ex-add-min-in",
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: false, maximum: 10, exclusiveMaximum: true }),
    "Added inclusive minimum to existing exclusive maximum",
  );
  add(
    "max-ex-add-min-ex",
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    numberRange({ minimum: 1, exclusiveMinimum: true, maximum: 10, exclusiveMaximum: true }),
    "Added exclusive minimum to existing exclusive maximum",
  );

  const minInMaxIn = numberRange({
    minimum: 1,
    exclusiveMinimum: false,
    maximum: 10,
    exclusiveMaximum: false,
  });
  add(
    "min-in-max-in-remove-minimum",
    minInMaxIn,
    numberRange({ maximum: 10, exclusiveMaximum: false }),
    "Removed minimum from existing inclusive minimum and inclusive maximum",
  );
  add(
    "min-in-max-in-remove-maximum",
    minInMaxIn,
    numberRange({ minimum: 1, exclusiveMinimum: false }),
    "Removed maximum from existing inclusive minimum and inclusive maximum",
  );

  const minExMaxEx = numberRange({
    minimum: 1,
    exclusiveMinimum: true,
    maximum: 10,
    exclusiveMaximum: true,
  });
  add(
    "min-ex-max-ex-remove-minimum",
    minExMaxEx,
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    "Removed minimum from existing exclusive minimum and exclusive maximum",
  );
  add(
    "min-ex-max-ex-remove-maximum",
    minExMaxEx,
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    "Removed maximum from existing exclusive minimum and exclusive maximum",
  );

  const minInMaxEx = numberRange({
    minimum: 1,
    exclusiveMinimum: false,
    maximum: 10,
    exclusiveMaximum: true,
  });
  add(
    "min-in-max-ex-remove-minimum",
    minInMaxEx,
    numberRange({ maximum: 10, exclusiveMaximum: true }),
    "Removed minimum from existing inclusive minimum and exclusive maximum",
  );
  add(
    "min-in-max-ex-remove-maximum",
    minInMaxEx,
    numberRange({ minimum: 1, exclusiveMinimum: false }),
    "Removed maximum from existing inclusive minimum and exclusive maximum",
  );

  const minExMaxIn = numberRange({
    minimum: 1,
    exclusiveMinimum: true,
    maximum: 10,
    exclusiveMaximum: false,
  });
  add(
    "min-ex-max-in-remove-minimum",
    minExMaxIn,
    numberRange({ maximum: 10, exclusiveMaximum: false }),
    "Removed minimum from existing exclusive minimum and inclusive maximum",
  );
  add(
    "min-ex-max-in-remove-maximum",
    minExMaxIn,
    numberRange({ minimum: 1, exclusiveMinimum: true }),
    "Removed maximum from existing exclusive minimum and inclusive maximum",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectValueLengthCases = (cases) => {
  const dir = "string-validation/value-length";
  const base = STRING_PLAIN();
  const add = (slug, before, after, summary) => pushCase(cases, dir, slug, before, after, summary);

  add("min-length-added", base, stringLength({ minLength: 1 }), "Added minLength");
  add("min-length-removed", stringLength({ minLength: 1 }), base, "Removed minLength");
  add(
    "min-length-replaced",
    stringLength({ minLength: 1 }),
    stringLength({ minLength: 3 }),
    "Replaced minLength",
  );
  add("max-length-added", base, stringLength({ maxLength: 128 }), "Added maxLength");
  add("max-length-removed", stringLength({ maxLength: 128 }), base, "Removed maxLength");
  add(
    "max-length-replaced",
    stringLength({ maxLength: 128 }),
    stringLength({ maxLength: 256 }),
    "Replaced maxLength",
  );
  add(
    "min-max-length-added",
    base,
    stringLength({ minLength: 1, maxLength: 128 }),
    "Added minLength, maxLength",
  );
  add(
    "min-max-length-removed",
    stringLength({ minLength: 1, maxLength: 128 }),
    base,
    "Removed minLength, maxLength",
  );
  add(
    "min-length-added-max-length-removed",
    stringLength({ maxLength: 128 }),
    stringLength({ minLength: 1 }),
    "Added minLength, removed maxLength",
  );
  add(
    "min-length-removed-max-length-added",
    stringLength({ minLength: 1 }),
    stringLength({ maxLength: 128 }),
    "Removed minLength, added maxLength",
  );
  add(
    "both-lengths-replace-min",
    stringLength({ minLength: 1, maxLength: 128 }),
    stringLength({ minLength: 3, maxLength: 128 }),
    "Replace minLength when both lengths exist",
  );
  add(
    "both-lengths-replace-max",
    stringLength({ minLength: 1, maxLength: 128 }),
    stringLength({ minLength: 1, maxLength: 256 }),
    "Replace maxLength when both lengths exist",
  );
  add(
    "both-lengths-replaced",
    stringLength({ minLength: 1, maxLength: 128 }),
    stringLength({ minLength: 3, maxLength: 256 }),
    "Replace minLength and maxLength",
  );

  const unchangedMin = stringLength({ minLength: 1 });
  add("unchanged-min-length", unchangedMin, clone(unchangedMin), "Unchanged minLength only");
  const unchangedMax = stringLength({ maxLength: 128 });
  add("unchanged-max-length", unchangedMax, clone(unchangedMax), "Unchanged maxLength only");
  const unchangedBoth = stringLength({ minLength: 1, maxLength: 128 });
  add("unchanged-min-max-length", unchangedBoth, clone(unchangedBoth), "Unchanged minLength, maxLength");
};

const combinerVariantString = () => ({ type: "string", description: "String variant" });
const combinerVariantObject = () => ({
  type: "object",
  description: "Object variant",
  properties: {
    id: { type: "string" },
    count: { type: "integer" },
  },
});
const combinerVariantArray = () => ({
  type: "array",
  description: "Array variant",
  items: { type: "string" },
});
const combinerVariantNested = () => ({
  oneOf: [
    { type: "string", description: "Nested string" },
    { type: "integer", description: "Nested integer" },
  ],
});

/** @param {TypeChangeCase[]} cases */
const collectExtendedDefaultCases = (cases) => {
  const dir = "extended/default";
  const stringBase = STRING_DESC_ONLY();
  const boolBase = { type: "boolean", description: "Sample boolean" };

  pushCase(cases, dir, "default-added-string", stringBase, merge(stringBase, { default: "alpha" }), "Added default (string)");
  pushCase(cases, dir, "default-removed-string", merge(stringBase, { default: "alpha" }), stringBase, "Removed default (string)");
  pushCase(
    cases,
    dir,
    "default-replaced-string",
    merge(stringBase, { default: "alpha" }),
    merge(stringBase, { default: "beta" }),
    "Replaced default (string)",
  );
  pushCase(
    cases,
    dir,
    "default-replaced-boolean",
    merge(boolBase, { default: true }),
    merge(boolBase, { default: false }),
    "Replaced default (boolean)",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectExtendedObjectCases = (cases) => {
  const dir = "extended/object";
  const objectBase = {
    type: "object",
    description: "Sample object",
    properties: {
      name: { type: "string" },
    },
  };

  pushCase(
    cases,
    dir,
    "additional-properties-false-added",
    objectBase,
    merge(objectBase, { additionalProperties: false }),
    "additionalProperties: false added",
  );
  pushCase(
    cases,
    dir,
    "additional-properties-true-added",
    objectBase,
    merge(objectBase, { additionalProperties: true }),
    "additionalProperties: true added",
  );
  pushCase(
    cases,
    dir,
    "additional-properties-schema-added",
    objectBase,
    merge(objectBase, { additionalProperties: { type: "string" } }),
    "additionalProperties: schema added",
  );
  pushCase(
    cases,
    dir,
    "pattern-properties-added",
    objectBase,
    merge(objectBase, { patternProperties: { "^x": { type: "string" } } }),
    "patternProperties added",
  );
  pushCase(
    cases,
    dir,
    "pattern-properties-removed",
    merge(objectBase, { patternProperties: { "^x": { type: "string" } } }),
    objectBase,
    "patternProperties removed",
  );
  pushCase(
    cases,
    dir,
    "pattern-properties-replaced",
    merge(objectBase, { patternProperties: { "^x": { type: "string" } } }),
    merge(objectBase, { patternProperties: { "^y": { type: "integer" } } }),
    "patternProperties replaced",
  );
  pushCase(
    cases,
    dir,
    "property-count-bounds-added",
    objectBase,
    merge(objectBase, { minProperties: 1, maxProperties: 5 }),
    "minProperties and maxProperties added",
  );
  pushCase(
    cases,
    dir,
    "property-count-bounds-removed",
    merge(objectBase, { minProperties: 1, maxProperties: 5 }),
    objectBase,
    "minProperties and maxProperties removed",
  );
  pushCase(
    cases,
    dir,
    "property-count-bounds-replaced",
    merge(objectBase, { minProperties: 1, maxProperties: 5 }),
    merge(objectBase, { minProperties: 2, maxProperties: 10 }),
    "minProperties and maxProperties replaced",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectExtendedArrayCases = (cases) => {
  const dir = "extended/array";
  const arrayItemsSchema = {
    type: "array",
    description: "Array with single items schema",
    items: { type: "string", description: "Item schema" },
  };
  const tupleItems = {
    type: "array",
    description: "Tuple array",
    items: [{ type: "string" }, { type: "integer" }],
  };

  pushCase(
    cases,
    dir,
    "additional-items-added",
    tupleItems,
    merge(tupleItems, { additionalItems: { type: "boolean" } }),
    "additionalItems added",
  );
  pushCase(
    cases,
    dir,
    "additional-items-removed",
    merge(tupleItems, { additionalItems: { type: "boolean" } }),
    tupleItems,
    "additionalItems removed",
  );
  pushCase(
    cases,
    dir,
    "additional-items-type-changed",
    merge(tupleItems, { additionalItems: { type: "boolean" } }),
    merge(tupleItems, { additionalItems: { type: "number" } }),
    "additionalItems schema changed",
  );
  pushCase(
    cases,
    dir,
    "items-schema-to-array",
    arrayItemsSchema,
    {
      type: "array",
      description: "Array with tuple items",
      items: [{ type: "string" }, { type: "integer" }],
    },
    "items replaced from schema to array",
  );
  pushCase(
    cases,
    dir,
    "tuple-item-appended",
    merge(tupleItems, { additionalItems: false }),
    {
      type: "array",
      description: "Tuple array with appended slot",
      items: [{ type: "string" }, { type: "integer" }, { type: "boolean" }],
      additionalItems: false,
    },
    "Append tuple item",
  );
  pushCase(
    cases,
    dir,
    "tuple-item-removed",
    {
      type: "array",
      description: "Tuple array with three slots",
      items: [{ type: "string" }, { type: "integer" }, { type: "boolean" }],
    },
    tupleItems,
    "Pop tuple item",
  );
  pushCase(
    cases,
    dir,
    "items-schema-description-changed",
    arrayItemsSchema,
    merge(arrayItemsSchema, { items: { type: "string", description: "Updated item schema" } }),
    "Change inside items schema",
  );
  pushCase(
    cases,
    dir,
    "unique-items-added",
    arrayItemsSchema,
    merge(arrayItemsSchema, { uniqueItems: true }),
    "uniqueItems added",
  );
  pushCase(
    cases,
    dir,
    "unique-items-removed",
    merge(arrayItemsSchema, { uniqueItems: true }),
    arrayItemsSchema,
    "uniqueItems removed",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectExtendedPatternAndNumberCases = (cases) => {
  const dir = "extended/misc";
  const stringBase = STRING_PLAIN();
  const numberBase = { type: "number", description: "Sample number" };

  pushCase(
    cases,
    dir,
    "pattern-added",
    stringBase,
    merge(stringBase, { pattern: "^[a-z]+$" }),
    "pattern added",
  );
  pushCase(
    cases,
    dir,
    "pattern-removed",
    merge(stringBase, { pattern: "^[a-z]+$" }),
    stringBase,
    "pattern removed",
  );
  pushCase(
    cases,
    dir,
    "pattern-replaced",
    merge(stringBase, { pattern: "^[a-z]+$" }),
    merge(stringBase, { pattern: "^[0-9]+$" }),
    "pattern replaced",
  );
  pushCase(
    cases,
    dir,
    "multiple-of-added",
    numberBase,
    merge(numberBase, { multipleOf: 0.5 }),
    "multipleOf added",
  );
  pushCase(
    cases,
    dir,
    "multiple-of-removed",
    merge(numberBase, { multipleOf: 0.5 }),
    numberBase,
    "multipleOf removed",
  );
  pushCase(
    cases,
    dir,
    "multiple-of-replaced",
    merge(numberBase, { multipleOf: 0.5 }),
    merge(numberBase, { multipleOf: 2 }),
    "multipleOf replaced",
  );
};

/** @param {TypeChangeCase[]} cases @param {string} dir @param {number} level */
const collectCombinerCasesForLevel = (cases, dir, level) => {
  const prefix = level === 2 ? "two-level-" : "";
  const wrap = (schema) => (level === 2
    ? {
      type: "object",
      description: "Root with nested combiner property",
      properties: {
        payload: schema,
      },
    }
    : schema);

  const oneOfTwo = (first, second) => ({
    oneOf: [clone(first), clone(second)],
  });

  const appendVariant = (slugSuffix, variant, summary) => {
    const beforeInner = oneOfTwo(combinerVariantString(), combinerVariantObject());
    const afterInner = oneOfTwo(combinerVariantString(), combinerVariantObject());
    afterInner.oneOf.push(clone(variant));
    pushCase(cases, dir, `${prefix}append-variant-${slugSuffix}`, wrap(beforeInner), wrap(afterInner), summary);
  };

  const removeVariant = (slugSuffix, removedIndex, summary) => {
    const beforeInner = {
      oneOf: [combinerVariantString(), combinerVariantObject(), clone(combinerVariantArray())],
    };
    const afterInner = {
      oneOf: beforeInner.oneOf.filter((_, index) => index !== removedIndex),
    };
    pushCase(cases, dir, `${prefix}remove-variant-${slugSuffix}`, wrap(beforeInner), wrap(afterInner), summary);
  };

  const changeVariant = (slugSuffix, summary, mutate, variantIndex, secondVariant) => {
    const beforeInner = oneOfTwo(combinerVariantString(), clone(secondVariant));
    const afterInner = clone(beforeInner);
    mutate(afterInner.oneOf[variantIndex]);
    pushCase(cases, dir, `${prefix}change-variant-${slugSuffix}`, wrap(beforeInner), wrap(afterInner), summary);
  };

  appendVariant("string", combinerVariantString(), "Append string variant");
  appendVariant("object", combinerVariantObject(), "Append object variant");
  appendVariant("array", combinerVariantArray(), "Append array variant");
  removeVariant("string", 0, "Remove string variant");
  removeVariant("object", 1, "Remove object variant");
  removeVariant("array", 2, "Remove array variant");
  changeVariant("string", "Change string variant", (variant) => {
    variant.description = "Updated string variant";
  }, 0, combinerVariantObject());
  changeVariant("object", "Change object variant", (variant) => {
    variant.properties.id = { type: "string", description: "Updated id property" };
  }, 1, combinerVariantObject());
  changeVariant("array", "Change array variant", (variant) => {
    variant.items = { type: "string", description: "Updated items schema" };
  }, 1, combinerVariantArray());

  const beforeNested = oneOfTwo(combinerVariantString(), combinerVariantObject());
  const afterNested = oneOfTwo(combinerVariantString(), combinerVariantObject());
  afterNested.oneOf.push(combinerVariantNested());
  pushCase(
    cases,
    dir,
    `${prefix}append-variant-nested-combiner`,
    wrap(beforeNested),
    wrap(afterNested),
    "Append nested combiner variant",
  );

  const beforeRemoveNested = {
    oneOf: [combinerVariantString(), combinerVariantObject(), combinerVariantNested()],
  };
  const afterRemoveNested = {
    oneOf: [combinerVariantString(), combinerVariantObject()],
  };
  pushCase(
    cases,
    dir,
    `${prefix}remove-variant-nested-combiner`,
    wrap(beforeRemoveNested),
    wrap(afterRemoveNested),
    "Remove nested combiner variant",
  );
};

/** @param {TypeChangeCase[]} cases */
const collectCombinerCases = (cases) => {
  collectCombinerCasesForLevel(cases, "extended/combiners-one-level", 1);
  collectCombinerCasesForLevel(cases, "extended/combiners-two-level", 2);
};

const circularSelfObject = () => ({
  type: "object",
  description: "Self-referencing object",
  properties: {
    label: { type: "string" },
    child: { $ref: "#" },
  },
});

const circularSelfArray = () => ({
  type: "array",
  description: "Self-referencing array",
  items: { $ref: "#" },
});

const circularChainRoot = () => ({
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  description: "Root of A→B→root chain",
  properties: {
    name: { type: "string" },
    nodeA: { $ref: "#/definitions/A" },
  },
  definitions: {
    A: {
      type: "object",
      description: "Entity A",
      properties: {
        nodeB: { $ref: "#/definitions/B" },
      },
    },
    B: {
      type: "object",
      description: "Entity B",
      properties: {
        backToRoot: { $ref: "#" },
      },
    },
  },
});

const circularCombinerVariant = () => ({
  type: "object",
  description: "Combiner with cyclic object variant",
  properties: {
    value: {
      oneOf: [
        { type: "string" },
        {
          type: "object",
          description: "Cyclic object variant",
          properties: {
            nested: { $ref: "#/properties/value" },
          },
        },
      ],
    },
  },
});

/** @param {TypeChangeCase[]} cases */
const collectCircularCases = (cases) => {
  const dir = "circular";
  const prerequisites = [
    { slug: "self-object", build: circularSelfObject, label: "Self-referencing object" },
    { slug: "self-array", build: circularSelfArray, label: "Self-referencing array" },
    { slug: "chain-three-hop", build: circularChainRoot, label: "Root→A→B→root chain" },
    { slug: "combiner-variant-cycle", build: circularCombinerVariant, label: "Combiner variant cycle" },
  ];

  for (const prerequisite of prerequisites) {
    const beforeBase = prerequisite.build();
    pushCase(
      cases,
      dir,
      `${prerequisite.slug}-description-updated`,
      beforeBase,
      merge(beforeBase, { description: "Updated cyclic schema description" }),
      `${prerequisite.label}: description updated`,
    );

    const withoutCycle = clone(beforeBase);
    if (prerequisite.slug === "self-object") {
      delete withoutCycle.properties.child;
    } else if (prerequisite.slug === "self-array") {
      withoutCycle.items = { type: "string" };
    } else if (prerequisite.slug === "chain-three-hop") {
      delete withoutCycle.properties.nodeA;
    } else {
      withoutCycle.properties.value.oneOf.pop();
    }
    pushCase(
      cases,
      dir,
      `${prerequisite.slug}-cycle-removed`,
      beforeBase,
      withoutCycle,
      `${prerequisite.label}: cyclic link removed`,
    );

    const withCycleRestored = clone(withoutCycle);
    if (prerequisite.slug === "self-object") {
      withCycleRestored.properties.child = { $ref: "#" };
    } else if (prerequisite.slug === "self-array") {
      withCycleRestored.items = { $ref: "#" };
    } else if (prerequisite.slug === "chain-three-hop") {
      withCycleRestored.properties.nodeA = { $ref: "#/definitions/A" };
    } else {
      withCycleRestored.properties.value.oneOf.push({
        type: "object",
        description: "Cyclic object variant",
        properties: {
          nested: { $ref: "#/properties/value" },
        },
      });
    }
    pushCase(
      cases,
      dir,
      `${prerequisite.slug}-cycle-added`,
      withoutCycle,
      withCycleRestored,
      `${prerequisite.label}: cyclic link added`,
    );
  }
};

export const STORY_SUITES = [
  {
    suiteKey: "type-flags",
    title: "JSON Schema Diffs Suite/Type Flags Samples",
    metaKebab: "json-schema-diffs-suite-type-flags-samples",
    globPath: "type-flags",
    storyFileName: "type-flags-samples.stories.tsx",
    testFileName: "type-flags-samples.it-test.ts",
  },
  {
    suiteKey: "description-changes",
    title: "JSON Schema Diffs Suite/Description Changes Samples",
    metaKebab: "json-schema-diffs-suite-description-changes-samples",
    globPath: "description-changes",
    storyFileName: "description-changes-samples.stories.tsx",
    testFileName: "description-changes-samples.it-test.ts",
  },
  {
    suiteKey: "string-validation-enum",
    title: "JSON Schema Diffs Suite/String Validation Enum Samples",
    metaKebab: "json-schema-diffs-suite-string-validation-enum-samples",
    globPath: "string-validation/enum",
    storyFileName: "string-validation-enum-samples.stories.tsx",
    testFileName: "string-validation-enum-samples.it-test.ts",
  },
  {
    suiteKey: "string-validation-examples",
    title: "JSON Schema Diffs Suite/String Validation Examples Samples",
    metaKebab: "json-schema-diffs-suite-string-validation-examples-samples",
    globPath: "string-validation/examples",
    storyFileName: "string-validation-examples-samples.stories.tsx",
    testFileName: "string-validation-examples-samples.it-test.ts",
  },
  {
    suiteKey: "number-validation-value-range",
    title: "JSON Schema Diffs Suite/Number Validation Value Range Samples",
    metaKebab: "json-schema-diffs-suite-number-validation-value-range-samples",
    globPath: "number-validation/value-range",
    storyFileName: "number-validation-value-range-samples.stories.tsx",
    testFileName: "number-validation-value-range-samples.it-test.ts",
  },
  {
    suiteKey: "string-validation-value-length",
    title: "JSON Schema Diffs Suite/String Validation Value Length Samples",
    metaKebab: "json-schema-diffs-suite-string-validation-value-length-samples",
    globPath: "string-validation/value-length",
    storyFileName: "string-validation-value-length-samples.stories.tsx",
    testFileName: "string-validation-value-length-samples.it-test.ts",
  },
  {
    suiteKey: "extended-default",
    title: "JSON Schema Diffs Suite/Extended Default Samples",
    metaKebab: "json-schema-diffs-suite-extended-default-samples",
    globPath: "extended/default",
    storyFileName: "extended-default-samples.stories.tsx",
    testFileName: "extended-default-samples.it-test.ts",
  },
  {
    suiteKey: "extended-object",
    title: "JSON Schema Diffs Suite/Extended Object Samples",
    metaKebab: "json-schema-diffs-suite-extended-object-samples",
    globPath: "extended/object",
    storyFileName: "extended-object-samples.stories.tsx",
    testFileName: "extended-object-samples.it-test.ts",
  },
  {
    suiteKey: "extended-array",
    title: "JSON Schema Diffs Suite/Extended Array Samples",
    metaKebab: "json-schema-diffs-suite-extended-array-samples",
    globPath: "extended/array",
    storyFileName: "extended-array-samples.stories.tsx",
    testFileName: "extended-array-samples.it-test.ts",
  },
  {
    suiteKey: "extended-misc",
    title: "JSON Schema Diffs Suite/Extended Misc Samples",
    metaKebab: "json-schema-diffs-suite-extended-misc-samples",
    globPath: "extended/misc",
    storyFileName: "extended-misc-samples.stories.tsx",
    testFileName: "extended-misc-samples.it-test.ts",
  },
  {
    suiteKey: "extended-combiners-one-level",
    title: "JSON Schema Diffs Suite/Extended Combiners One Level Samples",
    metaKebab: "json-schema-diffs-suite-extended-combiners-one-level-samples",
    globPath: "extended/combiners-one-level",
    storyFileName: "extended-combiners-one-level-samples.stories.tsx",
    testFileName: "extended-combiners-one-level-samples.it-test.ts",
  },
  {
    suiteKey: "extended-combiners-two-level",
    title: "JSON Schema Diffs Suite/Extended Combiners Two Level Samples",
    metaKebab: "json-schema-diffs-suite-extended-combiners-two-level-samples",
    globPath: "extended/combiners-two-level",
    storyFileName: "extended-combiners-two-level-samples.stories.tsx",
    testFileName: "extended-combiners-two-level-samples.it-test.ts",
  },
  {
    suiteKey: "circular",
    title: "JSON Schema Diffs Suite/Circular Samples",
    metaKebab: "json-schema-diffs-suite-circular-samples",
    globPath: "circular",
    storyFileName: "circular-samples.stories.tsx",
    testFileName: "circular-samples.it-test.ts",
  },
];

export const collectTypeChangeCases = () => {
  Object.keys(dirCounters).forEach((key) => {
    delete dirCounters[key];
  });
  /** @type {TypeChangeCase[]} */
  const cases = [];
  collectTypeFlagsCases(cases);
  collectDescriptionCases(cases);
  collectEnumCases(cases);
  collectExamplesCases(cases);
  collectValueRangeCases(cases);
  collectValueLengthCases(cases);
  collectExtendedDefaultCases(cases);
  collectExtendedObjectCases(cases);
  collectExtendedArrayCases(cases);
  collectExtendedPatternAndNumberCases(cases);
  collectCombinerCases(cases);
  collectCircularCases(cases);
  return cases;
};

export const groupCasesByGlobPath = (cases) => {
  /** @type {Record<string, TypeChangeCase[]>} */
  const grouped = {};
  for (const sampleCase of cases) {
    if (!grouped[sampleCase.sampleDir]) {
      grouped[sampleCase.sampleDir] = [];
    }
    grouped[sampleCase.sampleDir].push(sampleCase);
  }
  return grouped;
};

export const toExportName = (caseId) => `Case_${caseId.replace(/[.-]/g, "_")}`;
