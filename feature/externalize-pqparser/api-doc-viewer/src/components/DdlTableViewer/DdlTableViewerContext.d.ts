import { NavigationCallback } from '../../../../next-data-model/src/shared/ddlapi/types/navigation-callback';
export type DdlTableViewerContextValue = {
    navigationCallback: NavigationCallback;
};
export declare const DdlTableViewerContext: import('../../../../../node_modules/react').Context<DdlTableViewerContextValue | null>;
export declare function useDdlTableViewerContext(): DdlTableViewerContextValue;
