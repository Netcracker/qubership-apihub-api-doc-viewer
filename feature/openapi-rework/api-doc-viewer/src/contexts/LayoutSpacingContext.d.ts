import { LayoutSpacingConfig } from '../../../next-data-model/src/model/abstract/layout';
/**
 * Numbers and rules of the separator layout (`StackLayout`, security cards), provided by each root
 * viewer that renders one: the OpenAPI roots pass the OpenAPI config, the AsyncAPI roots the shared
 * defaults. No default value: a layout outside a root viewer is a wiring error, not "OpenAPI's numbers".
 */
export declare const LayoutSpacingContext: import('../../../../node_modules/react').Context<LayoutSpacingConfig<string> | undefined>;
export declare function useLayoutSpacing(): LayoutSpacingConfig<string>;
