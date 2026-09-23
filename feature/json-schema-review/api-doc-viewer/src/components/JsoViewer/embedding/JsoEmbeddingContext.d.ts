import { JsoEmbeddedSchemaComponent, JsoEmbeddedSchemaDiffsComponent } from "./jso-embedding-types";
export type JsoEmbeddingContextValue = {
    EmbeddedSchemaComponent?: JsoEmbeddedSchemaComponent;
    EmbeddedSchemaDiffsComponent?: JsoEmbeddedSchemaDiffsComponent;
};
export declare const JsoEmbeddingContext: import('../../../../../../node_modules/react').Context<JsoEmbeddingContextValue>;
export declare function useJsoEmbeddingContext(): JsoEmbeddingContextValue;
