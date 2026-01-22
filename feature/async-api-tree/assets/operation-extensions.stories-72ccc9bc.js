import{A as d}from"./AsyncApiOperationViewer-be569b99.js";import{p}from"./preprocess-154845ea.js";import{E as c}from"./index-d2e936c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9ff97c34.js";import"./index-415bee12.js";import"./JsoViewer-c34466b7.js";import"./GraphQLOperationViewer-1feb3e8c.js";import"./GraphQLOperationDiffViewer-fa4207e2.js";const b={title:"Async Api Suite/Operations",component:d,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-extensions":{action:"send",...c}}}}),operationName:"send-operation-with-operation-extensions",operationType:"send"}},e={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-bindings-extensions":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...c}}}}}}),operationName:"send-operation-with-operation-bindings-extensions",operationType:"send"}};var o,r,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const w=["ExtensionsInOperation","ExtensionsInOperationBindings"];export{n as ExtensionsInOperation,e as ExtensionsInOperationBindings,w as __namedExportsOrder,b as default};
