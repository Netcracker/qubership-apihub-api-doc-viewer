import{A as w}from"./AsyncApiOperationViewer-9d291ba1.js";import{p as t}from"./preprocess-9368dd68.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-4334d9f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-cd79fa64.js";import"./GraphQLOperationDiffViewer-b8692e04.js";const I={title:"Async Api Suite/Channel Defaults",component:w,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-title":{description:"Description of Channel With Default Title"}},operations:{"send-operation-with-default-channel-title":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-title"}}}}}),operationName:"send-operation-with-default-channel-title",operationType:"send"}},e={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-nothing":{title:"Channel Title"}},operations:{"send-operation-with-default-channel-description-if-nothing":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-nothing"}}}}}),operationName:"send-operation-with-default-channel-description-if-nothing",operationType:"send"}},a={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary":{summary:"Summary of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary",operationType:"send"}},i={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary-and-description":{summary:"Summary of Channel",description:"Description of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary-and-description":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary-and-description"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary-and-description",operationType:"send"}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-title": {
            description: 'Description of Channel With Default Title'
          }
        },
        operations: {
          "send-operation-with-default-channel-title": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-title"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-channel-title',
    operationType: 'send'
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-description-if-nothing": {
            title: 'Channel Title'
          }
        },
        operations: {
          "send-operation-with-default-channel-description-if-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-description-if-nothing"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-channel-description-if-nothing',
    operationType: 'send'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,d,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-description-if-summary": {
            summary: 'Summary of Channel'
          }
        },
        operations: {
          "send-operation-with-default-channel-description-if-summary": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-description-if-summary"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-channel-description-if-summary',
    operationType: 'send'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,f,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-description-if-summary-and-description": {
            summary: 'Summary of Channel',
            description: 'Description of Channel'
          }
        },
        operations: {
          "send-operation-with-default-channel-description-if-summary-and-description": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-description-if-summary-and-description"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-channel-description-if-summary-and-description',
    operationType: 'send'
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const x=["DefaultChannelTitle","DefaultChannelDescriptionIfNothing","DefaultChannelDescriptionIfSummary","DefaultChannelDescriptionIfSummaryAndDescription"];export{e as DefaultChannelDescriptionIfNothing,a as DefaultChannelDescriptionIfSummary,i as DefaultChannelDescriptionIfSummaryAndDescription,n as DefaultChannelTitle,x as __namedExportsOrder,I as default};
