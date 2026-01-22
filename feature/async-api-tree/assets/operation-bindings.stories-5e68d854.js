import{A}from"./AsyncApiOperationViewer-be569b99.js";import{p as n}from"./preprocess-154845ea.js";import{B as T,a as B,b as P}from"./index-d2e936c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9ff97c34.js";import"./index-415bee12.js";import"./JsoViewer-c34466b7.js";import"./GraphQLOperationViewer-1feb3e8c.js";import"./GraphQLOperationDiffViewer-fa4207e2.js";const G={title:"Async Api Suite/Operations Bindings",component:A,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},i={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-bindings-kafka",operationType:"send"}},e={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-only-primitive-props":{action:"send",bindings:{kafka:{...T}}}}}}),operationName:"send-operation-with-bindings-kafka-with-only-primitive-props",operationType:"send"}},o={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-object-props":{action:"send",bindings:{kafka:{...B}}}}}}),operationName:"send-operation-with-bindings-kafka-with-object-props",operationType:"send"}},a={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-schema-props":{action:"send",bindings:{kafka:{...P}}}}}}),operationName:"send-operation-with-bindings-kafka-with-schema-props",operationType:"send"}},r={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-two-bindings":{action:"send",bindings:{kafka:{clientId:"order-producer",groupId:"order-processing",bindingVersion:"0.4.0"},amqp:{mandatory:!0,priority:5,deliveryMode:2,expiration:6e4,userId:"svc-order",bindingVersion:"0.3.0"}}}}}}),operationName:"send-operation-two-bindings",operationType:"send"}},s={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-bindings-with-nothing":{action:"send",description:"Description of Send Operation With Description And Bindings With Nothing",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-description-and-bindings-with-nothing",operationType:"send"}};var t,p,d;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka',
    operationType: 'send'
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,g,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-only-primitive-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_PRIMITIVE_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-only-primitive-props',
    operationType: 'send'
  }
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,k,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-object-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_OBJECT_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-object-props',
    operationType: 'send'
  }
}`,...(u=(k=o.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var b,y,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-schema-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_SCHEMA_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-schema-props',
    operationType: 'send'
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var f,S,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-two-bindings": {
            action: "send",
            bindings: {
              kafka: {
                clientId: "order-producer",
                groupId: "order-processing",
                bindingVersion: "0.4.0"
              },
              amqp: {
                mandatory: true,
                priority: 5,
                deliveryMode: 2,
                expiration: 60000,
                userId: "svc-order",
                bindingVersion: "0.3.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-two-bindings',
    operationType: 'send'
  }
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,W,O;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-bindings-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Bindings With Nothing",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-description-and-bindings-with-nothing',
    operationType: 'send'
  }
}`,...(O=(W=s.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const M=["SendOperationWithBindingsKafkaWithNothing","SendOperationWithBindingsKafkaWithOnlyPrimitiveProps","SendOperationWithBindingsKafkaWithObjectProps","SendOperationWithBindingsKafkaWithSchemaProps","SendOperationTwoBindings","SendOperationWithDescriptionAndBindingsWithNothing"];export{r as SendOperationTwoBindings,i as SendOperationWithBindingsKafkaWithNothing,o as SendOperationWithBindingsKafkaWithObjectProps,e as SendOperationWithBindingsKafkaWithOnlyPrimitiveProps,a as SendOperationWithBindingsKafkaWithSchemaProps,s as SendOperationWithDescriptionAndBindingsWithNothing,M as __namedExportsOrder,G as default};
