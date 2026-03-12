export declare const CustomizationOptionsContext: import('../../../../node_modules/react').Context<CustomizationOptions | undefined>;
export declare function useCustomizationOptions(): CustomizationOptions | undefined;
export type CustomizationOptions = {
    headerRowTitle?: string;
    headerRowFontSize?: 'default' | 'body' | 'h1' | 'h2' | 'h3';
};
