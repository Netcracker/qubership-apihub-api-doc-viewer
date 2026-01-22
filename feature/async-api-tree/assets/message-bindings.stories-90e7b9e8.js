import{A as T}from"./AsyncApiOperationViewer-5fefe2a7.js";import{p as n}from"./preprocess-17178f8b.js";import{B as P,a as O,b as A}from"./index-d2e936c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const R={title:"Async Api Suite/Messages",component:T,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-nothing",operationType:"send"}},s={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-primitive-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{...P}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-primitive-props",operationType:"send"}},i={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-object-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{...O}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-object-props",operationType:"send"}},a={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-schema-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{...A}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-schema-props",operationType:"send"}},t={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-two-bindings":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}}),operationName:"send-operation-with-message-with-two-bindings",operationType:"send"}},o={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-binding-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-description-and-binding-with-nothing",operationType:"send"}};var r,p,g;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-nothing',
    operationType: 'send'
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-primitive-props": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  ...BINDING_WITH_PRIMITIVE_PROPS
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-primitive-props',
    operationType: 'send'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-object-props": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  ...BINDING_WITH_OBJECT_PROPS
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-object-props',
    operationType: 'send'
  }
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var S,b,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-schema-props": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  ...BINDING_WITH_SCHEMA_PROPS
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-schema-props',
    operationType: 'send'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var M,W,f;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-two-bindings": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  key: {
                    type: "string",
                    description: "Partitioning key for the message",
                    minLength: 1
                  },
                  schemaIdLocation: "header",
                  schemaIdPayloadEncoding: "application/json",
                  schemaLookupStrategy: "topicNameStrategy"
                },
                rabbitmq: {
                  contentEncoding: "application/json",
                  messageType: "orders.created",
                  bindingVersion: "0.2.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-two-bindings',
    operationType: 'send'
  }
}`,...(f=(W=t.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var k,N,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-binding-with-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-binding-with-nothing',
    operationType: 'send'
  }
}`,...(I=(N=o.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const v=["SendOperationWithMessageWithBindingsWithNothing","SendOperationWithMessageWithBindingsWithPrimitiveProps","SendOperationWithMessageWithBindingsWithObjectProps","SendOperationWithMessageWithBindingsWithSchemaProps","SendOperationWithMessageWithTwoBindings","SendOperationWithMessageWithDescriptionAndBindingWithNothing"];export{e as SendOperationWithMessageWithBindingsWithNothing,i as SendOperationWithMessageWithBindingsWithObjectProps,s as SendOperationWithMessageWithBindingsWithPrimitiveProps,a as SendOperationWithMessageWithBindingsWithSchemaProps,o as SendOperationWithMessageWithDescriptionAndBindingWithNothing,t as SendOperationWithMessageWithTwoBindings,v as __namedExportsOrder,R as default};
