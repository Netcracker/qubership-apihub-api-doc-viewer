import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { stringify as stringifyYaml } from "yaml";

export const JSON_SCHEMA_DRAFT = "draft-07";

export const DEFAULT_SAMPLE_FORMAT = "yaml";

export const getSampleFileName = (format = DEFAULT_SAMPLE_FORMAT) => {
  if (format === "yaml") {
    return "sample.yaml";
  }
  if (format === "json") {
    return "sample.json";
  }
  throw new Error(`Unsupported sample format: ${format}`);
};

export const resolveSampleFormat = (argv = process.argv) =>
  argv.includes("--format=json") ? "json" : DEFAULT_SAMPLE_FORMAT;

export const serializeSampleSchema = (schema, format = DEFAULT_SAMPLE_FORMAT) => {
  if (format === "json") {
    return `${JSON.stringify(schema, null, 2)}\n`;
  }
  return `${stringifyYaml(schema, { lineWidth: 0 })}\n`;
};

/**
 * Rendering groups for JSON Schema Draft 07 samples.
 *
 * Cases combine groups (power set), not individual fields. Within a group, fields
 * are fixed representatives — e.g. header carries title, format (where applicable),
 * readOnly, writeOnly, and deprecated; additionalInfo bundles enum, default,
 * examples, and type-specific validation rows together.
 */
export const TYPE_RENDERING_GROUPS = {
  boolean: ["header", "description", "additionalInfo"],
  string: ["header", "description", "additionalInfo"],
  number: ["header", "description", "additionalInfo"],
  integer: ["header", "description", "additionalInfo"],
  object: [
    "header",
    "description",
    "properties",
    "additionalProperties",
    "additionalInfo",
  ],
  array: ["header", "description", "items", "additionalItems", "additionalInfo"],
};

export const SCHEMA_TYPES = Object.keys(TYPE_RENDERING_GROUPS);

const GROUP_SLUGS = {
  header: "header",
  description: "description",
  items: "items",
  additionalItems: "additional-items",
  properties: "properties",
  additionalProperties: "additional-properties",
  additionalInfo: "additional-info",
};

export const buildCaseSlug = (activeGroups, groupOrder) => {
  const active = new Set(activeGroups);
  const ordered = groupOrder.filter((group) => active.has(group));
  if (ordered.length === 0) {
    return "type-only";
  }
  return ordered.map((group) => GROUP_SLUGS[group]).join("-");
};

export const padCaseIndex = (index, totalCount) => {
  const width = Math.max(3, String(totalCount).length);
  return String(index).padStart(width, "0");
};

export const buildCaseId = (index, activeGroups, groupOrder, totalCount) =>
  `${padCaseIndex(index, totalCount)}-${buildCaseSlug(activeGroups, groupOrder)}`;

export const toExportName = (caseId) => `Case_${caseId.replaceAll("-", "_")}`;

export const powerSet = (items) => {
  const subsets = [];
  const count = 2 ** items.length;
  for (let mask = 0; mask < count; mask += 1) {
    const active = [];
    for (let index = 0; index < items.length; index += 1) {
      if (mask & (1 << index)) {
        active.push(items[index]);
      }
    }
    subsets.push(active);
  }
  return subsets;
};

const TITLES = {
  boolean: "Sample Boolean",
  string: "Sample String",
  number: "Sample Number",
  integer: "Sample Integer",
  object: "Sample Object",
  array: "Sample Array",
};

const DESCRIPTIONS = {
  boolean: "Sample boolean description",
  string: "Sample string description",
  number: "Sample number description",
  integer: "Sample integer description",
  object: "Sample object description",
  array: "Sample array description",
};

const FORMATS = {
  string: "email",
  number: "float",
  integer: "int32",
};

const headerFragment = (schemaType) => {
  const fragment = {
    title: TITLES[schemaType],
    readOnly: true,
    writeOnly: true,
    deprecated: true,
  };
  const format = FORMATS[schemaType];
  if (format) {
    fragment.format = format;
  }
  return fragment;
};

const descriptionFragment = (schemaType) => ({
  description: DESCRIPTIONS[schemaType],
});

const additionalInfoFragment = (schemaType) => {
  switch (schemaType) {
    case "boolean":
      return {
        enum: [true, false],
        default: true,
        examples: [true, false],
      };
    case "string":
      return {
        enum: ["alpha", "beta", "gamma"],
        default: "alpha",
        examples: ["alpha", "sample"],
        minLength: 1,
        maxLength: 128,
        pattern: "^[a-z]+$",
      };
    case "number":
      return {
        enum: [1, 2, 3],
        default: 42,
        examples: [1.5, 42],
        multipleOf: 0.5,
        minimum: 0,
        maximum: 100,
      };
    case "integer":
      return {
        enum: [1, 2, 3],
        default: 42,
        examples: [1, 42],
        multipleOf: 2,
        minimum: 0,
        maximum: 100,
      };
    case "object":
      return {
        required: ["name"],
        minProperties: 1,
        maxProperties: 10,
        propertyNames: { enum: ["name", "id"] },
        enum: [{ name: "first" }, { name: "second" }],
        default: { name: "default" },
        examples: [{ name: "example" }],
      };
    case "array":
      return {
        enum: [["a"], ["a", "b"]],
        default: ["item"],
        examples: [["alpha", "beta"]],
        minItems: 1,
        maxItems: 10,
        uniqueItems: true,
      };
    default:
      return {};
  }
};

const propertiesFragment = () => ({
  properties: {
    name: { type: "string" },
    id: { type: "integer" },
  },
});

const additionalPropertiesFragment = () => ({
  additionalProperties: { type: "string" },
});

const itemsFragment = () => ({
  items: { type: "string" },
});

const additionalItemsFragment = () => ({
  items: [{ type: "string" }],
  additionalItems: { type: "integer" },
});

const mergeFragment = (schema, fragment) => {
  for (const [key, value] of Object.entries(fragment)) {
    schema[key] = value;
  }
};

export const buildSchema = (schemaType, activeGroups) => {
  const schema = { type: schemaType };
  const active = new Set(activeGroups);
  const hasItems = active.has("items");
  const hasAdditionalItems = active.has("additionalItems");

  if (active.has("header")) {
    mergeFragment(schema, headerFragment(schemaType));
  }
  if (active.has("description")) {
    mergeFragment(schema, descriptionFragment(schemaType));
  }
  if (active.has("properties")) {
    mergeFragment(schema, propertiesFragment());
  }
  if (active.has("additionalProperties")) {
    mergeFragment(schema, additionalPropertiesFragment());
  }
  if (hasAdditionalItems) {
    mergeFragment(schema, additionalItemsFragment());
  } else if (hasItems) {
    mergeFragment(schema, itemsFragment());
  }
  if (active.has("additionalInfo")) {
    mergeFragment(schema, additionalInfoFragment(schemaType));
  }

  return schema;
};

const isRedundantRenderingGroupSubset = (schemaType, activeGroups) => {
  const active = new Set(activeGroups);
  // Tuple `items` + `additionalItems` uses the same schema fragment as `additionalItems`
  // alone — see buildSchema() branch order (additionalItems wins over items).
  if (schemaType === "array" && active.has("items") && active.has("additionalItems")) {
    return true;
  }
  return false;
};

export const collectCasesForType = (schemaType) => {
  const groupOrder = TYPE_RENDERING_GROUPS[schemaType];
  const subsets = powerSet(groupOrder).filter(
    (activeGroups) => !isRedundantRenderingGroupSubset(schemaType, activeGroups),
  );
  const totalCount = subsets.length;

  return subsets.map((activeGroups, subsetIndex) => {
    const index = subsetIndex + 1;
    return {
      index,
      caseId: buildCaseId(index, activeGroups, groupOrder, totalCount),
      activeGroups,
      schema: buildSchema(schemaType, activeGroups),
    };
  });
};

export const writeSampleCase = (
  samplesRoot,
  schemaType,
  sampleCase,
  format = DEFAULT_SAMPLE_FORMAT,
) => {
  const caseDir = path.join(samplesRoot, schemaType, sampleCase.caseId);
  mkdirSync(caseDir, { recursive: true });
  writeFileSync(
    path.join(caseDir, getSampleFileName(format)),
    serializeSampleSchema(sampleCase.schema, format),
  );
};

export const JSON_SCHEMA_SUITES = [
  {
    schemaType: "boolean",
    title: "JSON Schema Suite/Boolean",
    metaId: "json-schema-suite-boolean",
    storyFileName: "boolean-samples.stories.tsx",
    testFileName: "boolean-samples.it-test.ts",
  },
  {
    schemaType: "string",
    title: "JSON Schema Suite/String",
    metaId: "json-schema-suite-string",
    storyFileName: "string-samples.stories.tsx",
    testFileName: "string-samples.it-test.ts",
  },
  {
    schemaType: "number",
    title: "JSON Schema Suite/Number",
    metaId: "json-schema-suite-number",
    storyFileName: "number-samples.stories.tsx",
    testFileName: "number-samples.it-test.ts",
  },
  {
    schemaType: "integer",
    title: "JSON Schema Suite/Integer",
    metaId: "json-schema-suite-integer",
    storyFileName: "integer-samples.stories.tsx",
    testFileName: "integer-samples.it-test.ts",
  },
  {
    schemaType: "object",
    title: "JSON Schema Suite/Object",
    metaId: "json-schema-suite-object",
    storyFileName: "object-samples.stories.tsx",
    testFileName: "object-samples.it-test.ts",
  },
  {
    schemaType: "array",
    title: "JSON Schema Suite/Array",
    metaId: "json-schema-suite-array",
    storyFileName: "array-samples.stories.tsx",
    testFileName: "array-samples.it-test.ts",
  },
];

export const JSON_SCHEMA_NEXT_SUITES = JSON_SCHEMA_SUITES.map((suite) => ({
  ...suite,
  title: suite.title.replace("JSON Schema Suite/", "JSON Schema Next/"),
  metaId: suite.metaId.replace("json-schema-suite-", "json-schema-next-"),
}));
