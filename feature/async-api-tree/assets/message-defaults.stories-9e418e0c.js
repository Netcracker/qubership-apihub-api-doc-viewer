import{A as E}from"./AsyncApiOperationViewer-000ebebc.js";import{p as e}from"./preprocess-b6226f12.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ea931b38.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-95c460fd.js";import"./GraphQLOperationDiffViewer-d71862cb.js";const P={title:"Async Api Suite/Message Defaults",component:E,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},s={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-nothing",operationType:"send"}},n={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-name":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-name",operationType:"send"}},a={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-title-and-name":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{title:"Status Message Title",name:"status-message-name",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-title-and-name",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{title:"Status Message Title"}}}}}),operationName:"send-operation-with-default-message-description-if-nothing",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-summary":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{summary:"Summary of Status Message"}}}}}),operationName:"send-operation-with-default-message-description-if-summary",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-summary-and-description":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{summary:"Summary of Status Message",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-description-if-summary-and-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-binding-version-if-nothing":{action:"send",bindings:{kafka:{}}}}}}),operationName:"send-operation-with-default-operation-binding-version-if-nothing",operationType:"send"}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-channel-binding-version-if-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{bindings:{kafka:{}}}}}}),operationName:"send-operation-with-default-channel-binding-version-if-nothing",operationType:"send"}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-binding-version-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{}}}}}}}),operationName:"send-operation-with-default-message-binding-version-if-nothing",operationType:"send"}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: 'Description of Status Message'
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-title-if-nothing',
    operationType: 'send'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,f,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-name": {
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
              description: 'Description of Status Message'
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-title-if-name',
    operationType: 'send'
  }
}`,...(l=(f=n.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};var h,y,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-title-and-name": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              title: 'Status Message Title',
              name: 'status-message-name',
              description: 'Description of Status Message'
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-title-if-title-and-name',
    operationType: 'send'
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var M,D,w;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              title: 'Status Message Title'
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-description-if-nothing',
    operationType: 'send'
  }
}`,...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var N,T,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-summary": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              summary: 'Summary of Status Message'
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-description-if-summary',
    operationType: 'send'
  }
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var b,I,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-summary-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              summary: 'Summary of Status Message',
              description: 'Description of Status Message'
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-description-if-summary-and-description',
    operationType: 'send'
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var $,v,V;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-binding-version-if-nothing": {
            action: "send",
            bindings: {
              kafka: {}
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-operation-binding-version-if-nothing',
    operationType: 'send'
  }
}`,...(V=(v=r.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var B,O,x;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-channel-binding-version-if-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            bindings: {
              kafka: {}
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-channel-binding-version-if-nothing',
    operationType: 'send'
  }
}`,...(x=(O=p.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var C,_,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-binding-version-if-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {}
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-default-message-binding-version-if-nothing',
    operationType: 'send'
  }
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const Q=["DefaultMessageTitleIfNothing","DefaultMessageTitleIfName","DefaultMessageTitleIfTitleAndName","DefaultMessageDescriptionIfNothing","DefaultMessageDescriptionIfSummary","DefaultMessageDescriptionIfSummaryAndDescription","DefaultOperationBindingVersionIfNothing","DefaultChannelBindingVersionIfNothing","DefaultMessageBindingVersionIfNothing"];export{p as DefaultChannelBindingVersionIfNothing,c as DefaultMessageBindingVersionIfNothing,t as DefaultMessageDescriptionIfNothing,o as DefaultMessageDescriptionIfSummary,i as DefaultMessageDescriptionIfSummaryAndDescription,n as DefaultMessageTitleIfName,s as DefaultMessageTitleIfNothing,a as DefaultMessageTitleIfTitleAndName,r as DefaultOperationBindingVersionIfNothing,Q as __namedExportsOrder,P as default};
