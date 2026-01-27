import{A as T}from"./AsyncApiOperationViewer-63b46cb8.js";import{p as e}from"./preprocess-ebbafdde.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ea931b38.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-95c460fd.js";import"./GraphQLOperationDiffViewer-d71862cb.js";const b={title:"Async Api Suite/Operation",component:T,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-nothing":{action:"send"}}}}),operationName:"send-operation-with-nothing",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title":{action:"send",title:"Send Operation With Title"}}}}),operationName:"send-operation-with-title",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description":{action:"send",description:"Description of Send Operation With Description"}}}}),operationName:"send-operation-with-description",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title-and-description":{action:"send",title:"Send Operation With Title And Description",description:"Description of Send Operation With Title And Description"}}}}),operationName:"send-operation-with-title-and-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"receive-operation-with-nothing":{action:"receive"}}}}),operationName:"receive-operation-with-nothing",operationType:"receive"}};var a,s,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-nothing": {
            action: "send"
          }
        }
      }
    }),
    operationName: 'send-operation-with-nothing',
    operationType: 'send'
  }
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-title": {
            action: "send",
            title: "Send Operation With Title"
          }
        }
      }
    }),
    operationName: 'send-operation-with-title',
    operationType: 'send'
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var m,u,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description": {
            action: "send",
            description: "Description of Send Operation With Description"
          }
        }
      }
    }),
    operationName: 'send-operation-with-description',
    operationType: 'send'
  }
}`,...(l=(u=i.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,y,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-title-and-description": {
            action: "send",
            title: "Send Operation With Title And Description",
            description: "Description of Send Operation With Title And Description"
          }
        }
      }
    }),
    operationName: 'send-operation-with-title-and-description',
    operationType: 'send'
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var S,w,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "receive-operation-with-nothing": {
            action: "receive"
          }
        }
      }
    }),
    operationName: 'receive-operation-with-nothing',
    operationType: 'receive'
  }
}`,...(O=(w=r.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const j=["SendOperationWithNothing","SendOperationWithTitle","SendOperationWithDescription","SendOperationWithTitleAndDescription","ReceiveOperationWithNothing"];export{r as ReceiveOperationWithNothing,i as SendOperationWithDescription,n as SendOperationWithNothing,o as SendOperationWithTitle,t as SendOperationWithTitleAndDescription,j as __namedExportsOrder,b as default};
