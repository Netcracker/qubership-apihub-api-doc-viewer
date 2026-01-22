import{A as h}from"./AsyncApiOperationViewer-be569b99.js";import{p as a}from"./preprocess-154845ea.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9ff97c34.js";import"./index-415bee12.js";import"./JsoViewer-c34466b7.js";import"./GraphQLOperationViewer-1feb3e8c.js";import"./GraphQLOperationDiffViewer-fa4207e2.js";const _={title:"Async Api Suite/Operations",component:h,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:a({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-title":{action:"send"}}}}),operationName:"send-operation-with-default-operation-title",operationType:"send"}},n={args:{source:a({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-nothing":{action:"send"}}}}),operationName:"send-operation-with-default-operation-description-if-nothing",operationType:"send"}},o={args:{source:a({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-summary":{action:"send",summary:"Summary of Operation"}}}}),operationName:"send-operation-with-default-operation-description-if-summary",operationType:"send"}},r={args:{source:a({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-summary-and-description":{action:"send",summary:"Summary of Operation",description:"Description of Operation"}}}}),operationName:"send-operation-with-default-operation-description-if-summary-and-description",operationType:"send"}};var i,t,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-title": {
            action: "send"
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-operation-title',
    operationType: 'send'
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-nothing": {
            action: "send"
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-operation-description-if-nothing',
    operationType: 'send'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-summary": {
            action: "send",
            summary: 'Summary of Operation'
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-operation-description-if-summary',
    operationType: 'send'
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,l,D;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-summary-and-description": {
            action: "send",
            summary: 'Summary of Operation',
            description: 'Description of Operation'
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-operation-description-if-summary-and-description',
    operationType: 'send'
  }
}`,...(D=(l=r.parameters)==null?void 0:l.docs)==null?void 0:D.source}}};const b=["DefaultOperationTitle","DefaultOperationDescriptionIfNothing","DefaultOperationDescriptionIfSummary","DefaultOperationDescriptionIfSummaryAndDescription"];export{n as DefaultOperationDescriptionIfNothing,o as DefaultOperationDescriptionIfSummary,r as DefaultOperationDescriptionIfSummaryAndDescription,e as DefaultOperationTitle,b as __namedExportsOrder,_ as default};
