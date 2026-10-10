import { DisplayMode } from '../../types/DisplayMode';
/**
 * Story controls shared by the OpenAPI suites: one story per case, the display mode is a control
 * (ITs pass `displayMode` as a story arg) - never a duplicated story.
 */
export declare const OPENAPI_STORY_ARG_TYPES: {
    readonly displayMode: {
        readonly control: {
            readonly type: "select";
        };
        readonly options: readonly DisplayMode[];
        readonly table: {
            readonly category: "Viewer";
        };
    };
};
export declare const OPENAPI_STORY_DEFAULT_ARGS: {
    displayMode: DisplayMode;
};
