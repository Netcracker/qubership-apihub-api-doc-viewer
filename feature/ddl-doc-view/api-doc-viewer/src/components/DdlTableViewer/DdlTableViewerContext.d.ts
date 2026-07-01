import { NavigationLinkBuilder } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-link-builder';
import type { NavigationLinkComponent } from "./DefaultNavigationLink";
export type DdlTableViewerContextValue = {
    navigationLinkBuilder: NavigationLinkBuilder;
    navigationLinkComponent: NavigationLinkComponent;
};
export declare const DdlTableViewerContext: import('../../../../../node_modules/react').Context<DdlTableViewerContextValue | null>;
export declare function useDdlTableViewerContext(): DdlTableViewerContextValue;
