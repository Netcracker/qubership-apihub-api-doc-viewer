export type DdlApiPropertyValueAppearance = 'text' | 'block';
export type UseDdlApiPropertyValueStylesInput = {
    appearance: DdlApiPropertyValueAppearance;
};
export declare function useDdlApiPropertyValueStyles(input: UseDdlApiPropertyValueStylesInput): string;
