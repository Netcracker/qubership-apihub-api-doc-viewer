import { ActionType, DiffType } from '@netcracker/qubership-apihub-api-diff';
export declare const NODE_DIFF_COLOR_MAP: Partial<Record<ActionType, string>>;
export declare const BLOCK_CONTENT_DIFF_COLOR_MAP: Partial<Record<ActionType, string>>;
export declare const INLINE_CONTENT_DIFF_COLOR_SCHEMAS: Partial<Record<ActionType, string>>;
export declare const CHANGE_SEVERITIES: Record<DiffType, number>;
export declare const DEFAULT_STRIKETHROUGH_VALUE_CLASS = "line-through";
export declare const DEFAULT_MUTED_VALUE_CLASS: string;
