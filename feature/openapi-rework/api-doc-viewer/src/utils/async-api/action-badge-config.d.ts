export type AsyncApiActionBadgeConfig = {
    /** Background class of the badge; its color is defined in `components/shared-styles/colors/async-api.css`. */
    readonly colorClass: string;
};
/**
 * Operation action badge classes of the address row - the single place to map an action to a color
 * class; the colors themselves live in `components/shared-styles/colors/async-api.css`.
 */
export declare const ASYNC_API_ACTION_BADGE_CONFIG: Readonly<Record<string, AsyncApiActionBadgeConfig>>;
/** An unknown action keeps its text and gets no background class. */
export declare function resolveAsyncApiActionBadge(action: string): {
    text: string;
    colorClass: string;
};
