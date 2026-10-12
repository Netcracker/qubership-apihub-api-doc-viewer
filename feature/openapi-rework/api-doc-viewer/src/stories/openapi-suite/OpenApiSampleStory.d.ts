import { DisplayMode } from '../../types/DisplayMode';
export type OpenApiSampleStoryProps = {
    caseId: string;
    sampleYaml: string;
    path: string;
    method: string;
    displayMode?: DisplayMode;
    noHeading?: boolean;
    /** Selector options the case covers (security alternative, response code, media type), in order. */
    switchTo?: readonly string[];
    /** Select `switchTo` on mount (story `play`); off = the viewer's initial selection. */
    autoSwitch?: boolean;
};
export declare const OpenApiSampleStory: ({ sampleYaml, path, method, displayMode, noHeading }: OpenApiSampleStoryProps) => import("react").JSX.Element;
