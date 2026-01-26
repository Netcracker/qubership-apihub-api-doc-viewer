import{A as I}from"./AsyncApiOperationViewer-d82fe121.js";import{p as n}from"./preprocess-4271bdc4.js";import{B as T,a as P,b as O}from"./index-30956bd0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9a3dca89.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-048505bc.js";import"./GraphQLOperationDiffViewer-bd7f1ad0.js";const E={title:"Async Api Suite/Channel Bindings",component:I,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-nothing",operationType:"send"}},i={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-primitive-props":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{...T}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-primitive-props",operationType:"send"}},a={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-object-props":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{...P}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-object-props",operationType:"send"}},o={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-schema-props":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{...O}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-schema-props",operationType:"send"}},t={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description-and-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-description-and-binding-with-nothing",operationType:"send"}},s={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-two-bindings":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-two-bindings",operationType:"send"}};var r,c,h;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-nothing',
    operationType: 'send'
  }
}`,...(h=(c=e.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var p,d,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-primitive-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_PRIMITIVE_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-primitive-props',
    operationType: 'send'
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,m,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-object-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_OBJECT_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-object-props',
    operationType: 'send'
  }
}`,...(w=(m=a.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var y,f,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-schema-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_SCHEMA_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-schema-props',
    operationType: 'send'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var u,k,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description-and-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-description-and-binding-with-nothing',
    operationType: 'send'
  }
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var W,S,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-two-bindings": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
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
    }),
    operationName: 'send-operation-with-root-level-channel-with-two-bindings',
    operationType: 'send'
  }
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const V=["SendOperationWithRootLevelChannelWithBindingWithNothing","SendOperationWithRootLevelChannelWithBindingWithPrimitiveProps","SendOperationWithRootLevelChannelWithBindingWithObjectProps","SendOperationWithRootLevelChannelWithBindingWithSchemaProps","SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing","SendOperationWithRootLevelChannelWithTwoBindings"];export{e as SendOperationWithRootLevelChannelWithBindingWithNothing,a as SendOperationWithRootLevelChannelWithBindingWithObjectProps,i as SendOperationWithRootLevelChannelWithBindingWithPrimitiveProps,o as SendOperationWithRootLevelChannelWithBindingWithSchemaProps,t as SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing,s as SendOperationWithRootLevelChannelWithTwoBindings,V as __namedExportsOrder,E as default};
