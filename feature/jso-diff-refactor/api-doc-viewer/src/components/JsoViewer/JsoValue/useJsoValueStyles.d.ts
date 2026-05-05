export type JsoValueAppearance = 'text' | 'block';
export type UseJsoValueStylesInput = {
    appearance: JsoValueAppearance;
    textClassName?: string;
    blockClassName?: string;
};
export declare function useJsoValueStyles(input: UseJsoValueStylesInput): string;
