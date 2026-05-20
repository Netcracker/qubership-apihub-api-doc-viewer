export type JsoValueAppearance = 'text' | 'block';
export type UseJsoValueStylesInput = {
    appearance: JsoValueAppearance;
};
export declare function useJsoValueStyles(input: UseJsoValueStylesInput): string;
