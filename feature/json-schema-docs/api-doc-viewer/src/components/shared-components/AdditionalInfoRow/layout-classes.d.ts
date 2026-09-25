import { AdditionalInfoRowLayoutOverrides, AdditionalInfoRowUsage } from "./types";
export type AdditionalInfoRowResolvedLayout = {
    xPaddingClass: string;
    bodyClass: string;
    minHeightClass: string;
    stretchLevelIndicator: boolean;
};
export declare function resolveAdditionalInfoRowLayout(usage: AdditionalInfoRowUsage, overrides?: AdditionalInfoRowLayoutOverrides): AdditionalInfoRowResolvedLayout;
