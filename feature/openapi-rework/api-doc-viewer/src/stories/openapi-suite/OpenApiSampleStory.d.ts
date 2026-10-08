import { DisplayMode } from '../../types/DisplayMode';
export type OpenApiSampleStoryProps = {
    caseId: string;
    sampleYaml: string;
    path: string;
    method: string;
    displayMode?: DisplayMode;
    noHeading?: boolean;
};
export declare const OpenApiSampleStory: ({ sampleYaml, path, method, displayMode, noHeading }: OpenApiSampleStoryProps) => import("react").JSX.Element;
