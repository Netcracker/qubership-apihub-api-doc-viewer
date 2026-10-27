import { DisplayMode } from '../../types/DisplayMode';
export type OpenApiSampleStoryProps = {
    caseId: string;
    sampleYaml: string;
    path: string;
    method: string;
    /** The sample is a method template: its only operation under `path` is served as `method`. */
    methodTemplate?: boolean;
    displayMode?: DisplayMode;
    noHeading?: boolean;
    /** Selector options the case covers (security alternative, response code, media type), in order. */
    switchTo?: readonly string[];
    /** Select `switchTo` on mount (story `play`); off = the viewer's initial selection. */
    autoSwitch?: boolean;
};
export declare const OpenApiSampleStory: ({ sampleYaml, path, method, methodTemplate, displayMode, noHeading }: OpenApiSampleStoryProps) => import("react").JSX.Element;
