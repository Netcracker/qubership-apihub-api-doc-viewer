export type OpenApiDiffSampleStoryProps = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
    hideUnchangedNodes?: boolean;
};
export declare const OpenApiDiffSampleStory: ({ beforeYaml, afterYaml, hideUnchangedNodes }: OpenApiDiffSampleStoryProps) => import("react").JSX.Element;
