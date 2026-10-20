import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
export type AsyncApiSecurityDiffSampleStoryProps = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
    displayMode?: DisplayMode;
};
/** One AsyncAPI Security diff fixture (`packages/samples/async-api-diffs/security/<case>/{before,after}.yaml`). */
export declare const AsyncApiSecurityDiffSampleStory: FC<AsyncApiSecurityDiffSampleStoryProps>;
