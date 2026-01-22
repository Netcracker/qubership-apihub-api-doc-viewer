import{A as d}from"./AsyncApiOperationViewer-246e7124.js";import{p}from"./preprocess-a649d08f.js";import{E as c}from"./index-d2e936c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-e3943ca9.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a88b9ab4.js";import"./GraphQLOperationDiffViewer-81f0ecd5.js";const O={title:"Async Api Suite/Operations",component:d,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-extensions":{action:"send",...c}}}}),operationName:"send-operation-with-operation-extensions",operationType:"send"}},e={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-bindings-extensions":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...c}}}}}}),operationName:"send-operation-with-operation-bindings-extensions",operationType:"send"}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-extensions": {
            action: "send",
            ...EXTENSIONS
          }
        }
      }
    }),
    operationName: 'send-operation-with-operation-extensions',
    operationType: 'send'
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,t,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-bindings-extensions": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...EXTENSIONS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-operation-bindings-extensions',
    operationType: 'send'
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const b=["ExtensionsInOperation","ExtensionsInOperationBindings"];export{n as ExtensionsInOperation,e as ExtensionsInOperationBindings,b as __namedExportsOrder,O as default};
