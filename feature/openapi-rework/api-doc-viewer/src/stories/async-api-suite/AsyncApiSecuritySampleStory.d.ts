import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
/** Operation / message every AsyncAPI Security fixture declares. */
export declare const ASYNC_API_SECURITY_OPERATION_KEYS: {
    readonly operationKey: "sendOperation";
    readonly messageKey: "TestMessage";
};
/** Story controls of the AsyncAPI Security suites: the display mode (ITs pass it as a story arg). */
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
/** One plain AsyncAPI Security fixture (`packages/samples/async-api/security/<case>/document.yaml`). */
export declare const AsyncApiSecuritySampleStory: FC<AsyncApiSecuritySampleStoryProps>;
