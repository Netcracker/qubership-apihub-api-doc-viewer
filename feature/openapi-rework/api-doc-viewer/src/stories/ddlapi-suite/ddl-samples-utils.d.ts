import { DisplayMode } from '../../types/DisplayMode';
export type DdlSampleStoryCase = {
    caseId: string;
    sampleSql: string;
    displayMode?: DisplayMode;
};
export type DdlCaseStoryComponentProps = DdlSampleStoryCase;
export declare const ddlSampleReferenceArgTypes: {
    displayMode: {
        readonly control: {
            readonly type: "select";
        };
        readonly options: readonly DisplayMode[];
        readonly table: {
            readonly category: "Viewer";
        };
    };
    caseId: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
    sampleSql: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
};
