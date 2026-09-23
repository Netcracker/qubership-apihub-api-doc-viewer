export declare const CustomizationOptionsContext: import('../../../../node_modules/react').Context<CustomizationOptions | undefined>;
export declare function useCustomizationOptions(): CustomizationOptions | undefined;
export type CustomizationOptions = {
    headerRowTitle?: string;
    /**
     * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
     * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
     * of one nested "object" row. Mirrors the legacy `JsonSchemaViewer`'s
     * `overriddenKind === 'parameters'` behavior for hosts (AsyncAPI message content/parameters,
     * JSO-embedded schema values) that wrap a raw value in `{type: 'object', properties: {...}}`
     * purely to get a property row per key.
     */
    suppressRootNestingIndicator?: boolean;
};
/** Shared immutable instance for hosts that only ever need {@link CustomizationOptions.suppressRootNestingIndicator}. */
export declare const SUPPRESS_ROOT_NESTING_INDICATOR_CUSTOMIZATION_OPTIONS: CustomizationOptions;
