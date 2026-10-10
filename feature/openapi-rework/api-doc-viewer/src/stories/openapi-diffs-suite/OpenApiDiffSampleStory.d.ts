import { DisplayMode } from '../../types/DisplayMode';
export type OpenApiDiffSampleStoryProps = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
    displayMode?: DisplayMode;
    hideUnchangedNodes?: boolean;
};
export declare const OpenApiDiffSampleStory: ({ beforeYaml, afterYaml, displayMode, hideUnchangedNodes }: OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
