import { DisplayMode } from '../../types/DisplayMode';
/**
 * The viewer's public `displayMode` prop as a story control, shared by every suite. One story per
 * case; the `(Display Mode = simple)` suites capture it in both modes by passing `displayMode` as a
 * story arg (`storyPageWithArgs`) - never a duplicated story or fixture. Other suites keep the
 * default `detailed`.
 */
export declare const DISPLAY_MODE_ARG_TYPES: {
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
export declare const DISPLAY_MODE_DEFAULT_ARGS: {
    displayMode: DisplayMode;
};
