import{A as w}from"./AsyncApiOperationViewer-be569b99.js";import{p as t}from"./preprocess-154845ea.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9ff97c34.js";import"./index-415bee12.js";import"./JsoViewer-c34466b7.js";import"./GraphQLOperationViewer-1feb3e8c.js";import"./GraphQLOperationDiffViewer-fa4207e2.js";const x={title:"Async Api Suite/Channels",component:w,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-title":{description:"Description of Channel With Default Title"}},operations:{"send-operation-with-default-channel-title":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-title"}}}}}),operationName:"send-operation-with-default-channel-title",operationType:"send"}},e={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-nothing":{title:"Channel Title"}},operations:{"send-operation-with-default-channel-description-if-nothing":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-nothing"}}}}}),operationName:"send-operation-with-default-channel-description-if-nothing",operationType:"send"}},a={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary":{summary:"Summary of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary",operationType:"send"}},i={args:{source:t({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary-and-description":{summary:"Summary of Channel",description:"Description of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary-and-description":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary-and-description"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary-and-description",operationType:"send"}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const O=["DefaultChannelTitle","DefaultChannelDescriptionIfNothing","DefaultChannelDescriptionIfSummary","DefaultChannelDescriptionIfSummaryAndDescription"];export{e as DefaultChannelDescriptionIfNothing,a as DefaultChannelDescriptionIfSummary,i as DefaultChannelDescriptionIfSummaryAndDescription,n as DefaultChannelTitle,O as __namedExportsOrder,x as default};
