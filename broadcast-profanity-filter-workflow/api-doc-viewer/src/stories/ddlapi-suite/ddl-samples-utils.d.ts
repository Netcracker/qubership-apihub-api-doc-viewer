export type DdlSampleStoryCase = {
    caseId: string;
    sampleSql: string;
};
export type DdlCaseStoryComponentProps = DdlSampleStoryCase;
export declare const ddlSampleReferenceArgTypes: {
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
