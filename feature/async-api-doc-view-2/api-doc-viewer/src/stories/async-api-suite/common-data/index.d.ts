export declare const EXTENSIONS: Record<string, unknown>;
export declare const BINDING_WITH_PRIMITIVE_PROPS: {
    bindingVersion: string;
    num: number;
    str: string;
};
export declare const BINDING_WITH_OBJECT_PROPS: {
    bindingVersion: string;
    obj: {
        str: string;
    };
    complexObj: {
        nestedObj: {
            num: number;
        };
    };
};
export declare const BINDING_WITH_SCHEMA_PROPS: {
    bindingVersion: string;
    notSchema: boolean;
    stringSch: {
        type: string;
        description: string;
        minLength: number;
        maxLength: number;
    };
    objectSch: {
        type: string;
        properties: {
            str: {
                type: string;
                description: string;
                enum: string[];
            };
        };
    };
};
export declare const BINDINGS_WITH_SCHEMA_FOO_REF: {
    kafka: {
        bindingVersion: string;
        foo: {
            $ref: string;
        };
    };
};
export declare const CIRCULAR_SCHEMA_KIND_A: {
    foo: {
        properties: {
            bar: {
                properties: {
                    foo: {
                        $ref: string;
                    };
                };
            };
        };
    };
};
export declare const CIRCULAR_SCHEMA_KIND_B: {
    foo: {
        properties: {
            bar: {
                $ref: string;
            };
        };
    };
    bar: {
        properties: {
            foo: {
                $ref: string;
            };
        };
    };
    summary: {
        items: {
            $ref: string;
        }[];
    };
};
export declare const JSON_SCHEMA_IN_EXTENSIONS: {
    'x-json-schema': {
        type: string;
        description: string;
    };
};
export declare const TEST_REFERENCE_NAME_PROPERTY: unique symbol;
