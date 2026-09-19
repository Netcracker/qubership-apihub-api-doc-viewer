import { TextValueVariant } from "./types";
export declare const OVERFLOW_LINES_AMOUNT = 5;
export declare const OVERFLOW_CHARACTERS_AMOUNT = 300;
/** Shared by TextValue and MarkdownTextValue - a value overflows when it's too long by either measure. */
export declare function isExpandable(value: string | undefined): boolean;
/** Callers decide whether to shorten (e.g. `expanded ? value : shortenValue(value)`) - this always truncates when overflowing. */
export declare function shortenValue(value: string | undefined): string | undefined;
export declare function getExpanderFontSizeClass(variant: TextValueVariant | undefined): string;
