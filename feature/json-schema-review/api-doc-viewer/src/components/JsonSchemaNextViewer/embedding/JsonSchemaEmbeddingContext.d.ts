import { JsonSchemaExtensionsJsoComponent, JsonSchemaExtensionsJsoDiffsComponent } from "./json-schema-embedding-types";
export type JsonSchemaEmbeddingContextValue = {
    ExtensionsJsoComponent: JsonSchemaExtensionsJsoComponent;
    ExtensionsJsoDiffsComponent: JsonSchemaExtensionsJsoDiffsComponent;
};
export declare const JsonSchemaEmbeddingContext: import('../../../../../../node_modules/react').Context<JsonSchemaEmbeddingContextValue | null>;
export declare function useJsonSchemaEmbeddingContext(): JsonSchemaEmbeddingContextValue;
