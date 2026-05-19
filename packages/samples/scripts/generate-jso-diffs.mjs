import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_ROOT = path.join(ROOT_DIR, "jso-diffs");
const EXPORT_FILE = path.join(ROOT_DIR, "src", "jso-diffs.ts");

const SECTION = "property";

const CASES = [];

const clone = (value) => JSON.parse(JSON.stringify(value));

const sanitize = (text) => text
  .replaceAll("\\", "-")
  .replaceAll("/", "-")
  .replaceAll(" ", "-")
  .replaceAll(":", "-")
  .replaceAll(".", "-")
  .replaceAll("[", "")
  .replaceAll("]", "")
  .replaceAll("$", "ref")
  .replaceAll('"', "")
  .replaceAll("'", "");

/** @typedef {typeof VALUE_TYPES[number]} ValueTypeId */

const VALUE_TYPES = [
  "string",
  "number",
  "boolean",
  "null",
  "object-primitive-props",
  "object-props-objects",
  "object-props-arrays",
  "object-all-prop-types",
  "array-primitives",
  "array-objects",
  "array-items-arrays",
  "array-all-item-types",
];

/** @type {Record<ValueTypeId, string>} */
const TYPE_PROPERTY_KEYS = {
  string: "stringValue",
  number: "numberValue",
  boolean: "booleanValue",
  null: "nullValue",
  "object-primitive-props": "objectPrimitiveProps",
  "object-props-objects": "objectPropsObjects",
  "object-props-arrays": "objectPropsArrays",
  "object-all-prop-types": "objectAllPropTypes",
  "array-primitives": "arrayPrimitives",
  "array-objects": "arrayObjects",
  "array-items-arrays": "arrayArrayItems",
  "array-all-item-types": "arrayAllItemTypes",
};

const objectPrimitiveProps = () => ({
  first: "one",
  second: 2,
  third: true,
  fourth: null,
});

const objectPropsObjects = () => ({
  first: { a: 1 },
  second: { b: 2 },
});

const objectPropsArrays = () => ({
  first: ["a", 1],
  second: [true, null],
});

const objectAllPropTypes = () => ({
  stringProp: "hello",
  numberProp: 7,
  booleanProp: true,
  nullProp: null,
  objectProp: { a: 1 },
  arrayProp: ["x", 1],
});

const arrayPrimitives = () => ["x", 1, false, null];

const arrayObjects = () => [{ id: 1 }, { id: 2 }];

const arrayItemsArrays = () => [["a", "b"], [1, 2], [true, false]];

const arrayAllItemTypes = () => ["x", 1, true, null, { a: 1 }, ["nested"]];

/** @type {Record<ValueTypeId, () => unknown>} */
const TYPE_VALUE_FACTORIES = {
  string: () => "hello",
  number: () => 7,
  boolean: () => true,
  null: () => null,
  "object-primitive-props": objectPrimitiveProps,
  "object-props-objects": objectPropsObjects,
  "object-props-arrays": objectPropsArrays,
  "object-all-prop-types": objectAllPropTypes,
  "array-primitives": arrayPrimitives,
  "array-objects": arrayObjects,
  "array-items-arrays": arrayItemsArrays,
  "array-all-item-types": arrayAllItemTypes,
};

const baseJsoDocument = () => {
  /** @type {Record<string, unknown>} */
  const document = {};
  for (const typeId of VALUE_TYPES) {
    document[TYPE_PROPERTY_KEYS[typeId]] = TYPE_VALUE_FACTORIES[typeId]();
  }
  return document;
};

const formatJson = (value) => `${JSON.stringify(value, null, 2)}\n`;

const stringJsonSchema = () => ({
  type: "string",
  minLength: 1,
  maxLength: 100,
  pattern: "^[a-z]+$",
  format: "email",
  enum: ["alpha", "beta"],
  default: "alpha",
  examples: ["alpha", "beta"],
  description: "A string JSON Schema property",
});

const objectJsonSchema = () => ({
  type: "object",
  description: "An object JSON Schema property",
  properties: {
    id: { type: "string", description: "Identifier" },
    count: { type: "number", description: "Count", minimum: 0 },
  },
  required: ["id"],
  additionalProperties: false,
  examples: [{ id: "one", count: 1 }],
});

const addJsonSchemaPropertyCase = (caseId, propertyKey, schemaFactory, action, schemaKind) => {
  const beforeDoc = baseJsoDocument();
  const afterDoc = baseJsoDocument();
  const schemaValue = schemaFactory();

  if (action === "add") {
    afterDoc[propertyKey] = schemaValue;
  } else {
    beforeDoc[propertyKey] = schemaValue;
  }

  CASES.push({
    section: SECTION,
    caseId,
    description: `${propertyKey} ${action} ${schemaKind} json schema`,
    beforeJson: formatJson(beforeDoc),
    afterJson: formatJson(afterDoc),
  });
};

const generateJsonSchemaPropertyCases = () => {
  addJsonSchemaPropertyCase("13.1", "stringJsonSchema", stringJsonSchema, "add", "primitive");
  addJsonSchemaPropertyCase("13.2", "objectJsonSchema", objectJsonSchema, "add", "complex");
  addJsonSchemaPropertyCase("13.3", "stringJsonSchema", stringJsonSchema, "remove", "primitive");
  addJsonSchemaPropertyCase("13.4", "objectJsonSchema", objectJsonSchema, "remove", "complex");
};

const addCase = (caseId, fromType, toType) => {
  const propertyKey = TYPE_PROPERTY_KEYS[fromType];
  const beforeDoc = baseJsoDocument();
  const afterDoc = clone(beforeDoc);
  afterDoc[propertyKey] = TYPE_VALUE_FACTORIES[toType]();

  const description = `${propertyKey} ${fromType} to ${toType}`;

  CASES.push({
    section: SECTION,
    caseId,
    description,
    beforeJson: formatJson(beforeDoc),
    afterJson: formatJson(afterDoc),
  });
};

const generateAllCases = () => {
  let groupIndex = 1;
  for (const fromType of VALUE_TYPES) {
    let caseIndex = 1;
    for (const toType of VALUE_TYPES) {
      if (fromType === toType) {
        continue;
      }
      addCase(`${groupIndex}.${caseIndex}`, fromType, toType);
      caseIndex += 1;
    }
    groupIndex += 1;
  }
};

const writeJsonPairs = () => {
  fs.rmSync(OUTPUT_ROOT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

  for (const item of CASES) {
    const caseDir = path.join(
      OUTPUT_ROOT,
      item.section,
      `${item.caseId}-${sanitize(item.description)}`,
    );
    fs.mkdirSync(caseDir, { recursive: true });
    fs.writeFileSync(path.join(caseDir, "before.json"), item.beforeJson, "utf8");
    fs.writeFileSync(path.join(caseDir, "after.json"), item.afterJson, "utf8");
  }
};

const writeExports = () => {
  const lines = [];
  lines.push("export type JsoDiffCase = {");
  lines.push("  section: string;");
  lines.push("  caseId: string;");
  lines.push("  description: string;");
  lines.push("  beforeJson: string;");
  lines.push("  afterJson: string;");
  lines.push("};");
  lines.push("");
  lines.push("export const jsoDiffCases: JsoDiffCase[] = [");
  for (const item of CASES) {
    lines.push("  {");
    lines.push(`    section: ${JSON.stringify(item.section)},`);
    lines.push(`    caseId: ${JSON.stringify(item.caseId)},`);
    lines.push(`    description: ${JSON.stringify(item.description)},`);
    lines.push(`    beforeJson: ${JSON.stringify(item.beforeJson)},`);
    lines.push(`    afterJson: ${JSON.stringify(item.afterJson)},`);
    lines.push("  },");
  }
  lines.push("];");
  lines.push("");
  lines.push("export const getJsoDiffCase = (section: string, caseId: string): JsoDiffCase | undefined => {");
  lines.push("  return jsoDiffCases.find((item) => item.section === section && item.caseId === caseId);");
  lines.push("};");
  lines.push("");
  lines.push("export const getJsoDiffCasesBySection = (section: string): JsoDiffCase[] => {");
  lines.push("  return jsoDiffCases.filter((item) => item.section === section);");
  lines.push("};");
  lines.push("");
  fs.writeFileSync(EXPORT_FILE, lines.join("\n"), "utf8");
};

generateAllCases();
generateJsonSchemaPropertyCases();
writeJsonPairs();
writeExports();

console.log(`Generated ${CASES.length} jso-diff pairs.`);
