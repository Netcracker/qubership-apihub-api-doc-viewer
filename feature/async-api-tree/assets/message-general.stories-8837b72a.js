import{A as xe}from"./AsyncApiOperationViewer-2f9d7a53.js";import{p as e}from"./preprocess-81142e47.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ea931b38.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-95c460fd.js";import"./GraphQLOperationDiffViewer-d71862cb.js";const Pe={title:"Async Api Suite/Message",component:xe,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},s={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{}}}}}),operationName:"send-operation-with-message-with-nothing",operationType:"send"}},n={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message"}}}}}),operationName:"send-operation-with-message-with-name",operationType:"send"}},a={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-description",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-description",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title-and-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-title-and-description",operationType:"send"}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"string",description:"Primitive header example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers",operationType:"send"}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"object",description:"Headers example",properties:{"X-Idempotency-Key":{type:"string"}}}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-objective-headers",operationType:"send"}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-payload",operationType:"send"}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-payload",operationType:"send"}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-payload",operationType:"send"}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-payload",operationType:"send"}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-objective-payload",operationType:"send"}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-primitive-payload",operationType:"send"}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-headers":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{StatusMessage:{description:"Status message description",headers:{$ref:"#/components/schemas/Identifier"}}}}}}),operationName:"send-operation-with-message-with-description-and-headers",operationType:"send"}},w={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-description-and-payload",operationType:"send"}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages-with-names":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage"},IdentifierMessage:{name:"IdentifierMessage"}}}}}),operationName:"send-operation-with-two-messages-with-names",operationType:"send"}},S={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-message-with-nothing":{action:"send",description:"Description of Send Operation With Description And Message With Nothing",messages:[{$ref:"#/components/messages/StatusMessage"}]}},messages:{StatusMessage:{}}}}),operationName:"send-operation-with-description-and-message-with-nothing",operationType:"send"}},M={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing-and-enabled-reference-name-property":{action:"send",messages:[{$ref:"#/components/messages/FirstMessage"},{$ref:"#/components/messages/SecondMessage"}]}},components:{messages:{FirstMessage:{},SecondMessage:{}}}},enableReferenceName:!0})}};var v,A,W;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(W=(A=s.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var b,E,$;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(E=n.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var x,B,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,j,I;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(j=t.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var O,T,H;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(T=o.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var P,_,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var F,C,G;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(C=r.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var J,R,K;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(R=p.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var X,V,k;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var q,z,Q;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=(z=c.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var U,Y,Z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,te,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,re,pe;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(re=u.parameters)==null?void 0:re.docs)==null?void 0:pe.source}}};var me,ce,de;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ge,he,ue;l.parameters={...l.parameters,docs:{...(ge=l.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ue=(he=l.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ye,le,we;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(le=w.parameters)==null?void 0:le.docs)==null?void 0:we.source}}};var fe,Se,Me;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Me=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var ve,Ae,We;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(We=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var be,Ee,$e;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
      enableReferenceName: true
    })
  }
}`,...($e=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source}}};const _e=["SendOperationWithMessageWithNothing","SendOperationWithMessageWithName","SendOperationWithMessageWithTitle","SendOperationWithMessageWithDescription","SendOperationWithMessageWithNameAndDescription","SendOperationWithMessageWithTitleAndDescription","SendOperationWithMessageWithNameAndTitleAndDescription","SendOperationWithMessageWithPrimitiveHeaders","SendOperationWithMessageWithObjectiveHeaders","SendOperationWithMessageWithPrimitivePayload","SendOperationWithMessageWithObjectivePayload","SendOperationWithMessageWithPrimitiveHeadersAndPayload","SendOperationWithMessageWithObjectiveHeadersAndPayload","SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload","SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload","SendOperationWithMessageWithDescriptionAndHeaders","SendOperationWithMessageWithDescriptionAndPayload","SendOperationWithTwoMessagesWithNames","SendOperationWithDescriptionAndMessageWithNothing","SendOperationWithMessageWithNothingAndEnabledReferenceNameProperty"];export{S as SendOperationWithDescriptionAndMessageWithNothing,t as SendOperationWithMessageWithDescription,l as SendOperationWithMessageWithDescriptionAndHeaders,w as SendOperationWithMessageWithDescriptionAndPayload,n as SendOperationWithMessageWithName,o as SendOperationWithMessageWithNameAndDescription,r as SendOperationWithMessageWithNameAndTitleAndDescription,s as SendOperationWithMessageWithNothing,M as SendOperationWithMessageWithNothingAndEnabledReferenceNameProperty,m as SendOperationWithMessageWithObjectiveHeaders,h as SendOperationWithMessageWithObjectiveHeadersAndPayload,y as SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload,d as SendOperationWithMessageWithObjectivePayload,p as SendOperationWithMessageWithPrimitiveHeaders,u as SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload,g as SendOperationWithMessageWithPrimitiveHeadersAndPayload,c as SendOperationWithMessageWithPrimitivePayload,a as SendOperationWithMessageWithTitle,i as SendOperationWithMessageWithTitleAndDescription,f as SendOperationWithTwoMessagesWithNames,_e as __namedExportsOrder,Pe as default};
