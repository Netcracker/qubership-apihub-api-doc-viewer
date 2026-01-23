import{A as c}from"./AsyncApiOperationViewer-9eef89a4.js";import{p}from"./preprocess-17178f8b.js";import{E as m}from"./index-30956bd0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const A={title:"Async Api Suite/Message Extensions",component:c,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",...m}}}}}),operationName:"send-operation-with-message-extensions",operationType:"send"}},s={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-bindings-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...m}}}}}}}),operationName:"send-operation-with-message-bindings-extensions",operationType:"send"}};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var t,i,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const N=["ExtensionsInMessage","ExtensionsInMessageBindings"];export{e as ExtensionsInMessage,s as ExtensionsInMessageBindings,N as __namedExportsOrder,A as default};
