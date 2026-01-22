import{A as c}from"./AsyncApiOperationViewer-be569b99.js";import{p}from"./preprocess-154845ea.js";import{E as m}from"./index-d2e936c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9ff97c34.js";import"./index-415bee12.js";import"./JsoViewer-c34466b7.js";import"./GraphQLOperationViewer-1feb3e8c.js";import"./GraphQLOperationDiffViewer-fa4207e2.js";const N={title:"Async Api Suite/Messages",component:c,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",...m}}}}}),operationName:"send-operation-with-message-extensions",operationType:"send"}},s={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-bindings-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...m}}}}}}}),operationName:"send-operation-with-message-bindings-extensions",operationType:"send"}};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-extensions": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: 'StatusMessage',
              description: 'Description of Status Message',
              ...EXTENSIONS
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-extensions',
    operationType: 'send'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var t,r,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-bindings-extensions": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: 'StatusMessage',
              description: 'Description of Status Message',
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
      }
    }),
    operationName: 'send-operation-with-message-bindings-extensions',
    operationType: 'send'
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["ExtensionsInMessage","ExtensionsInMessageBindings"];export{e as ExtensionsInMessage,s as ExtensionsInMessageBindings,b as __namedExportsOrder,N as default};
