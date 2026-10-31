import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
/** Operation / message every AsyncAPI Security and Display Mode fixture declares. */
export declare const ASYNC_API_SECURITY_OPERATION_KEYS: {
    readonly operationKey: "sendOperation";
    readonly messageKey: "TestMessage";
};
/** Story controls of the AsyncAPI document suites: the display mode (a story arg). */
export declare const ASYNC_API_SECURITY_STORY_ARG_TYPES: {
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
export declare const ASYNC_API_SECURITY_STORY_DEFAULT_ARGS: {
    displayMode: DisplayMode;
};
export type AsyncApiSecuritySampleStoryProps = {
    caseId: string;
    yaml: string;
    displayMode?: DisplayMode;
};
/**
 * One plain AsyncAPI document declaring `sendOperation` / `TestMessage`: the Security fixtures
 * (`packages/samples/async-api/security/<case>/document.yaml`) and the Display Mode fixtures
 * (`packages/samples/async-api-display-mode-simple/<case>/sample.yaml`).
 */
export declare const AsyncApiSecuritySampleStory: FC<AsyncApiSecuritySampleStoryProps>;
