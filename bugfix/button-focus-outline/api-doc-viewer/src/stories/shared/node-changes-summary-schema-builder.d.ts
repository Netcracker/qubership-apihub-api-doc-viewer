export type SchemaPair = {
    before: Record<string, unknown>;
    after: Record<string, unknown>;
};
/**
 * Case 1: object with 4 simple properties - one wholly added, one wholly removed, one with a
 * changed description, one with a changed type (string -> integer).
 */
export declare const buildCase1Schema: () => SchemaPair;
/**
 * Case 2: object with 2 properties - the first is Case 1's schema, the second is unchanged.
 */
export declare const buildCase2Schema: () => SchemaPair;
/**
 * Case 3: array whose items schema is Case 1.
 */
export declare const buildCase3Schema: () => SchemaPair;
/**
 * Case 4: array whose items schema is Case 2.
 */
export declare const buildCase4Schema: () => SchemaPair;
/**
 * Case 5: object with 4 oneOf properties - one wholly added, one wholly removed, one whose
 * "number" variant is added, one whose "number" variant is removed.
 */
export declare const buildCase5Schema: () => SchemaPair;
/**
 * Case 6: object with 2 oneOf properties - each is oneOf(string, object), where the object
 * variant is Case 1's schema (first property) and Case 2's schema (second property). Variant
 * selection for the "chosen object" story is scripted in the IT test via the `data-testid` on
 * `SelectNestedNodeRow`'s option buttons, not by fixture ordering.
 */
export declare const buildCase6Schema: () => SchemaPair;
/**
 * Case 7: object with 2 oneOf properties - each is oneOf(string, array), where the array
 * variant is Case 3's schema (first property) and Case 4's schema (second property). `string`
 * is listed first (index 0, the combiner's default selection); the "chosen array" stories
 * script a selector click in the IT test via the `data-testid` on `SelectNestedNodeRow`'s
 * option buttons.
 */
export declare const buildCase7Schema: () => SchemaPair;
