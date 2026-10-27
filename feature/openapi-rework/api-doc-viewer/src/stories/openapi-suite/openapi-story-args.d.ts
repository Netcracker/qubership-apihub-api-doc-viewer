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
/** Plain suite: display mode plus the auto-switch toggle. */
export declare const OPENAPI_PLAIN_STORY_ARG_TYPES: {
    readonly autoSwitch: {
        readonly control: {
            readonly type: "boolean";
        };
        readonly description: "Select the options the case covers (`switchTo`) on mount.";
        readonly table: {
            readonly category: "Case";
        };
    };
    readonly noHeading: {
        readonly control: {
            readonly type: "boolean";
        };
        readonly table: {
            readonly category: "Viewer";
        };
    };
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
export declare const OPENAPI_PLAIN_STORY_DEFAULT_ARGS: {
    displayMode: DisplayMode;
    autoSwitch: boolean;
    noHeading: boolean;
};
/**
 * Story `play`: selects the case's `switchTo` options (the same `switchOpenApiOptions` the ITs run
 * through `page.evaluate`, mirroring `switchCombinerNodesToChangedVariant`).
 */
export declare const playOpenApiAutoSwitch: (context: {
    canvasElement: HTMLElement;
    args: {
        switchTo?: readonly string[];
        autoSwitch?: boolean;
    };
}) => Promise<void>;
/** HTTP Methods group: the plain controls plus the method the template operation is served as. */
export declare const OPENAPI_METHOD_TEMPLATE_STORY_ARG_TYPES: {
    readonly method: {
        readonly control: {
            readonly type: "select";
        };
        readonly options: readonly import('../../../../next-data-model/src/shared/openapi/types/http-method').OpenApiHttpMethod[];
        readonly description: "HTTP method the template operation is served as.";
        readonly table: {
            readonly category: "Case";
        };
    };
    readonly autoSwitch: {
        readonly control: {
            readonly type: "boolean";
        };
        readonly description: "Select the options the case covers (`switchTo`) on mount.";
        readonly table: {
            readonly category: "Case";
        };
    };
    readonly noHeading: {
        readonly control: {
            readonly type: "boolean";
        };
        readonly table: {
            readonly category: "Viewer";
        };
    };
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
