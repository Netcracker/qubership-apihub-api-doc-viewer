import{A as T}from"./AsyncApiOperationViewer-be569b99.js";import{p as e}from"./preprocess-154845ea.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9ff97c34.js";import"./index-415bee12.js";import"./JsoViewer-c34466b7.js";import"./GraphQLOperationViewer-1feb3e8c.js";import"./GraphQLOperationDiffViewer-fa4207e2.js";const j={title:"Async Api Suite/Operations",component:T,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-nothing":{action:"send"}}}}),operationName:"send-operation-with-nothing",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title":{action:"send",title:"Send Operation With Title"}}}}),operationName:"send-operation-with-title",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description":{action:"send",description:"Description of Send Operation With Description"}}}}),operationName:"send-operation-with-description",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title-and-description":{action:"send",title:"Send Operation With Title And Description",description:"Description of Send Operation With Title And Description"}}}}),operationName:"send-operation-with-title-and-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"receive-operation-with-nothing":{action:"receive"}}}}),operationName:"receive-operation-with-nothing",operationType:"receive"}};var a,s,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,l;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(w=r.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const E=["SendOperationWithNothing","SendOperationWithTitle","SendOperationWithDescription","SendOperationWithTitleAndDescription","ReceiveOperationWithNothing"];export{r as ReceiveOperationWithNothing,i as SendOperationWithDescription,n as SendOperationWithNothing,o as SendOperationWithTitle,t as SendOperationWithTitleAndDescription,E as __namedExportsOrder,j as default};
