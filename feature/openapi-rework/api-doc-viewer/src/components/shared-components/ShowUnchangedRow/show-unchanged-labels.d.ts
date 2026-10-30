/**
 * Wording of the "show unchanged" control, shared by every viewer that hides unchanged content:
 * `Show 1 unchanged node`, `Show 3 unchanged nodes` (tree lists), `Show 4 unchanged rows` (a security
 * card). Design: docs/design/shared/features/hiding-unchanged-nodes.md.
 */
export declare class ShowUnchangedLabels {
    static nodes(count: number): string;
    static rows(count: number): string;
    private static label;
}
