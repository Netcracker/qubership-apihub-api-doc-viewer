import{A as k}from"./AsyncApiOperationViewer-9d291ba1.js";import{p as n}from"./preprocess-9368dd68.js";import{T as s}from"./index-c96b8e67.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-4334d9f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-cd79fa64.js";import"./GraphQLOperationDiffViewer-b8692e04.js";const b={title:"Async Api Suite/Channel",component:k,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-root-level-channel-with-nothing",operationType:"send"}},r={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title",operationType:"send"}},t={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-description",operationType:"send"}},o={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title-and-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title-and-description",operationType:"send"}},a={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-root-level-channel-with-nothing":{action:"send",description:"Description of Send Operation With Description And Root Level Channel With Nothing",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-description-and-root-level-channel-with-nothing",operationType:"send"}},i={args:{source:n({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-and-enabled-reference-name-property":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}},referenceNamePropertyKey:s}),referenceNamePropertyKey:s}};var c,l,h;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-nothing',
    operationType: 'send'
  }
}`,...(h=(l=e.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var p,d,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-title',
    operationType: 'send'
  }
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var y,m,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-description',
    operationType: 'send'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,v,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title-and-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel",
            description: "Description of First Channel"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-title-and-description',
    operationType: 'send'
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var A,T,N;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-root-level-channel-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Root Level Channel With Nothing",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        }
      }
    }),
    operationName: 'send-operation-with-description-and-root-level-channel-with-nothing',
    operationType: 'send'
  }
}`,...(N=(T=a.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var R,C,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-and-enabled-reference-name-property": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        }
      },
      referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
    }),
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
  }
}`,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const K=["SendOperationWithRootLevelChannelWithNothing","SendOperationWithRootLevelChannelWithTitle","SendOperationWithRootLevelChannelWithDescription","SendOperationWithRootLevelChannelWithTitleAndDescription","SendOperationWithDescriptionAndRootLevelChannelWithNothing","SendOperationWithRootLevelChannelAndEnabledReferenceNameProperty"];export{a as SendOperationWithDescriptionAndRootLevelChannelWithNothing,i as SendOperationWithRootLevelChannelAndEnabledReferenceNameProperty,t as SendOperationWithRootLevelChannelWithDescription,e as SendOperationWithRootLevelChannelWithNothing,r as SendOperationWithRootLevelChannelWithTitle,o as SendOperationWithRootLevelChannelWithTitleAndDescription,K as __namedExportsOrder,b as default};
