import{A as De}from"./AsyncApiOperationViewer-9d291ba1.js";import{p as e}from"./preprocess-9368dd68.js";import{T as E}from"./index-c96b8e67.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-4334d9f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-cd79fa64.js";import"./GraphQLOperationDiffViewer-b8692e04.js";const Ge={title:"Async Api Suite/Message",component:De,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},s={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{}}}}}),operationName:"send-operation-with-message-with-nothing",operationType:"send"}},n={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message"}}}}}),operationName:"send-operation-with-message-with-name",operationType:"send"}},a={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-description",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-description",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title-and-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-title-and-description",operationType:"send"}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"string",description:"Primitive header example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers",operationType:"send"}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"object",description:"Headers example",properties:{"X-Idempotency-Key":{type:"string"}}}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-objective-headers",operationType:"send"}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-payload",operationType:"send"}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-payload",operationType:"send"}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-payload",operationType:"send"}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-payload",operationType:"send"}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-objective-payload",operationType:"send"}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-primitive-payload",operationType:"send"}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-headers":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{StatusMessage:{description:"Status message description",headers:{$ref:"#/components/schemas/Identifier"}}}}}}),operationName:"send-operation-with-message-with-description-and-headers",operationType:"send"}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-description-and-payload",operationType:"send"}},w={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages-with-names":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage"},IdentifierMessage:{name:"IdentifierMessage"}}}}}),operationName:"send-operation-with-two-messages-with-names",operationType:"send"}},S={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Status message description",headers:{type:"object",properties:{identifier:{type:"string",description:"Identifier"}}}},IdentifierMessage:{name:"IdentifierMessage",description:"Identifier message description",payload:{type:"object",properties:{identifier:{type:"string",description:"Identifier"}}}}}}}}),operationName:"send-operation-with-two-messages",operationType:"send"}},M={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-message-with-nothing":{action:"send",description:"Description of Send Operation With Description And Message With Nothing",messages:[{$ref:"#/components/messages/StatusMessage"}]}},messages:{StatusMessage:{}}}}),operationName:"send-operation-with-description-and-message-with-nothing",operationType:"send"}},v={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing-and-enabled-reference-name-property":{action:"send",messages:[{$ref:"#/components/messages/FirstMessage"},{$ref:"#/components/messages/SecondMessage"}]}},components:{messages:{FirstMessage:{},SecondMessage:{}}}},referenceNamePropertyKey:E}),referenceNamePropertyKey:E}};var A,W,$;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {}
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-nothing',
    operationType: 'send'
  }
}`,...($=(W=s.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var b,x,N;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-name',
    operationType: 'send'
  }
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var I,B,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-title',
    operationType: 'send'
  }
}`,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var D,j,O;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description',
    operationType: 'send'
  }
}`,...(O=(j=t.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var P,H,_;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-name-and-description',
    operationType: 'send'
  }
}`,...(_=(H=o.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var L,F,C;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-title-and-description',
    operationType: 'send'
  }
}`,...(C=(F=i.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var R,G,J;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-title-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-name-and-title-and-description',
    operationType: 'send'
  }
}`,...(J=(G=r.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Y,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "string",
              description: "Primitive header example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            BaseEventMessage: {
              headers: {
                $ref: "#/components/schemas/HeadersExample"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers',
    operationType: 'send'
  }
}`,...(X=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var V,k,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "object",
              description: "Headers example",
              properties: {
                "X-Idempotency-Key": {
                  type: "string"
                }
              }
            }
          },
          messages: {
            BaseEventMessage: {
              headers: {
                $ref: "#/components/schemas/HeadersExample"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-headers',
    operationType: 'send'
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,Q,U;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-payload',
    operationType: 'send'
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,ee,se;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-payload',
    operationType: 'send'
  }
}`,...(se=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,ae,te;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-payload',
    operationType: 'send'
  }
}`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ie,re;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-payload',
    operationType: 'send'
  }
}`,...(re=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var pe,me,ce;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-objective-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-objective-payload',
    operationType: 'send'
  }
}`,...(ce=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,ge,he;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-primitive-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-primitive-payload',
    operationType: 'send'
  }
}`,...(he=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,ye,fe;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-headers": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            StatusMessage: {
              description: "Status message description",
              headers: {
                $ref: "#/components/schemas/Identifier"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-headers',
    operationType: 'send'
  }
}`,...(fe=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var le,we,Se;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-payload',
    operationType: 'send'
  }
}`,...(Se=(we=l.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Me,ve,Ee;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-two-messages-with-names": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }, {
              $ref: "#/components/messages/IdentifierMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: "StatusMessage"
            },
            IdentifierMessage: {
              name: "IdentifierMessage"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-two-messages-with-names',
    operationType: 'send'
  }
}`,...(Ee=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var Ae,We,$e;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-two-messages": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }, {
              $ref: "#/components/messages/IdentifierMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: "StatusMessage",
              description: "Status message description",
              headers: {
                type: 'object',
                properties: {
                  identifier: {
                    type: 'string',
                    description: 'Identifier'
                  }
                }
              }
            },
            IdentifierMessage: {
              name: "IdentifierMessage",
              description: "Identifier message description",
              payload: {
                type: 'object',
                properties: {
                  identifier: {
                    type: 'string',
                    description: 'Identifier'
                  }
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-two-messages',
    operationType: 'send'
  }
}`,...($e=(We=S.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var be,xe,Ne;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-message-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Message With Nothing",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        messages: {
          StatusMessage: {}
        }
      }
    }),
    operationName: 'send-operation-with-description-and-message-with-nothing',
    operationType: 'send'
  }
}`,...(Ne=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var Ie,Be,Te;v.parameters={...v.parameters,docs:{...(Ie=v.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-nothing-and-enabled-reference-name-property": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/FirstMessage"
            }, {
              $ref: "#/components/messages/SecondMessage"
            }]
          }
        },
        components: {
          messages: {
            FirstMessage: {},
            SecondMessage: {}
          }
        }
      },
      referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
    }),
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
  }
}`,...(Te=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};const Je=["SendOperationWithMessageWithNothing","SendOperationWithMessageWithName","SendOperationWithMessageWithTitle","SendOperationWithMessageWithDescription","SendOperationWithMessageWithNameAndDescription","SendOperationWithMessageWithTitleAndDescription","SendOperationWithMessageWithNameAndTitleAndDescription","SendOperationWithMessageWithPrimitiveHeaders","SendOperationWithMessageWithObjectiveHeaders","SendOperationWithMessageWithPrimitivePayload","SendOperationWithMessageWithObjectivePayload","SendOperationWithMessageWithPrimitiveHeadersAndPayload","SendOperationWithMessageWithObjectiveHeadersAndPayload","SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload","SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload","SendOperationWithMessageWithDescriptionAndHeaders","SendOperationWithMessageWithDescriptionAndPayload","SendOperationWithTwoMessagesWithNames","SendOperationWithTwoMessages","SendOperationWithDescriptionAndMessageWithNothing","SendOperationWithMessageWithNothingAndEnabledReferenceNameProperty"];export{M as SendOperationWithDescriptionAndMessageWithNothing,t as SendOperationWithMessageWithDescription,f as SendOperationWithMessageWithDescriptionAndHeaders,l as SendOperationWithMessageWithDescriptionAndPayload,n as SendOperationWithMessageWithName,o as SendOperationWithMessageWithNameAndDescription,r as SendOperationWithMessageWithNameAndTitleAndDescription,s as SendOperationWithMessageWithNothing,v as SendOperationWithMessageWithNothingAndEnabledReferenceNameProperty,m as SendOperationWithMessageWithObjectiveHeaders,h as SendOperationWithMessageWithObjectiveHeadersAndPayload,y as SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload,d as SendOperationWithMessageWithObjectivePayload,p as SendOperationWithMessageWithPrimitiveHeaders,u as SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload,g as SendOperationWithMessageWithPrimitiveHeadersAndPayload,c as SendOperationWithMessageWithPrimitivePayload,a as SendOperationWithMessageWithTitle,i as SendOperationWithMessageWithTitleAndDescription,S as SendOperationWithTwoMessages,w as SendOperationWithTwoMessagesWithNames,Je as __namedExportsOrder,Ge as default};
