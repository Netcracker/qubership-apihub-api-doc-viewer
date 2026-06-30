import { NavigationLinkBuilder } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-link-builder';
export type DdlTableViewerContextValue = {
    navigationLinkBuilder: NavigationLinkBuilder;
};
export declare const DdlTableViewerContext: import('../../../../../node_modules/react').Context<DdlTableViewerContextValue | null>;
export declare function useDdlTableViewerContext(): DdlTableViewerContextValue;
