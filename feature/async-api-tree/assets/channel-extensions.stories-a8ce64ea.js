import{A as h}from"./AsyncApiOperationViewer-000ebebc.js";import{p as c}from"./preprocess-ebbafdde.js";import{E as p}from"./index-30956bd0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ea931b38.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-95c460fd.js";import"./GraphQLOperationDiffViewer-d71862cb.js";const w={title:"Async Api Suite/Channel Extensions",component:h,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:c({source:{asyncapi:"3.0.0",channels:{"channel-with-extensions":{title:"Channel With Extensions",description:"Description of Channel With Extensions",...p}},operations:{"send-operation-with-channel-extensions":{action:"send",channel:{$ref:"#/channels/channel-with-extensions"}}}}}),operationName:"send-operation-with-channel-extensions",operationType:"send"}},e={args:{source:c({source:{asyncapi:"3.0.0",channels:{"channel-with-bindings-extensions":{title:"Channel With Bindings Extensions",description:"Description of Channel With Bindings Extensions",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...p}}}},operations:{"send-operation-with-channel-bindings-extensions":{action:"send",channel:{$ref:"#/channels/channel-with-bindings-extensions"}}}}}),operationName:"send-operation-with-channel-bindings-extensions",operationType:"send"}};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-extensions": {
            title: 'Channel With Extensions',
            description: 'Description of Channel With Extensions',
            ...EXTENSIONS
          }
        },
        operations: {
          "send-operation-with-channel-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-extensions"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-channel-extensions',
    operationType: 'send'
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-bindings-extensions": {
            title: 'Channel With Bindings Extensions',
            description: 'Description of Channel With Bindings Extensions',
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...EXTENSIONS
              }
            }
          }
        },
        operations: {
          "send-operation-with-channel-bindings-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-bindings-extensions"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-channel-bindings-extensions',
    operationType: 'send'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const b=["ExtensionsInChannel","ExtensionsInChannelBindings"];export{n as ExtensionsInChannel,e as ExtensionsInChannelBindings,b as __namedExportsOrder,w as default};
