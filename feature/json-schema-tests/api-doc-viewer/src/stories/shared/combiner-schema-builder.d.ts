export declare const COMBINER_SCHEMA_TYPES: readonly ["string", "number", "integer", "boolean", "array", "object"];
export type CombinerSchemaType = (typeof COMBINER_SCHEMA_TYPES)[number];
export type CombinerKind = "oneOf" | "anyOf" | "allOf";
export declare const COMBINER_KINDS: CombinerKind[];
/** Human-readable "One Of" / "Any Of" / "All Of" label, for Storybook titles and summaries. */
export declare const combinerKindLabel: (kind: CombinerKind) => string;
/**
 * Lowercase, hyphenated slug for a combiner kind ("one-of" / "any-of" / "all-of"), for use in case
 * slugs/ids. Deliberately NOT the raw "oneOf"/"anyOf"/"allOf" JSON Schema keyword spelling: Storybook
 * derives a story's id by kebab-casing its export name, and kebab-casing inserts a hyphen at a
 * lowercase-to-uppercase boundary (e.g. "oneOf" -> "one-Of" -> "one-of" but "OneOf" -> "One-Of"),
 * which would silently desync a hand-built `case-${caseId}` test lookup from Storybook's actual id.
 * Keeping every slug token lowercase-hyphenated up front makes that transformation a no-op.
 */
export declare const combinerKindSlug: (kind: CombinerKind) => string;
/** `My<Type>` title label used by the title/format matrix cases (e.g. "MyString", "MyInteger"). */
export declare const titleLabelFor: (type: CombinerSchemaType) => string;
export declare const FORMAT_VALUE = "ISODateTime";
export declare const FORMAT_VALUE_ALT = "CustomFormat";
export declare const formatCombinerCaseTitle: (subset: string, label: string) => string;
export type BuildComprehensiveTypeSchemaOptions = {
    title?: string;
    format?: string;
};
/** A "type-schema" (comprehensive, all applicable validation keywords) per the combiner-cases terms. */
export declare const buildComprehensiveTypeSchema: (type: CombinerSchemaType, options?: BuildComprehensiveTypeSchemaOptions) => Record<string, unknown>;
export declare const wrapInCombiner: (kind: CombinerKind, options: Record<string, unknown>[]) => Record<string, unknown>;
