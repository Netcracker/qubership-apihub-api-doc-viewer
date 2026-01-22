import{A as c}from"./AsyncApiOperationViewer-312f9a5a.js";import{p}from"./preprocess-17178f8b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const x={title:"Async Api Suite/End-2-End",component:c,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},m={asyncapi:"3.0.0",info:{title:"example-event-service",version:"1.0.0","x-generator":"springwolf"},defaultContentType:"application/json",servers:{"kafka-main":{host:"kafka-host",protocol:"kafka"}},channels:{"customer-change-topic":{address:"customer-change-topic",description:"Channel for customer change notifications",messages:{BaseEventMessage:{$ref:"#/components/messages/BaseEventMessage"}},servers:[{$ref:"#/servers/kafka-main"}],bindings:{},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},operations:{"customer-change-topic_send_BaseEvent":{action:"send",channel:{$ref:"#/channels/customer-change-topic"},title:"Customer change topic send",description:"Send events about Customer's data changes",bindings:{kafka:{bindingVersion:"0.5.0"}},messages:[{$ref:"#/channels/customer-change-topic/messages/BaseEventMessage"}],"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},components:{schemas:{HeadersExample:{title:"HeadersExample",type:"object",properties:{"X-Idempotency-Key":{type:"string"}},examples:[{"X-Idempotency-Key":"string"}]},BaseEvent:{title:"BaseEvent",type:"object",properties:{currentInstance:{type:"object",description:"New data state"},currentModelVersion:{type:"integer",description:"Model Version",format:"int32"},previousInstance:{type:"object",description:"Previous data state"},resourceAction:{type:"string",description:"Resource Action"},resourceType:{type:"string",description:"Resource Type"}},description:"Base event to describe Customer's data changes",examples:[{currentInstance:{},currentModelVersion:0,previousInstance:{},resourceAction:"string",resourceType:"string"}],required:["currentInstance","currentModelVersion","previousInstance","resourceAction","resourceType"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"},payload:{$ref:"#/components/schemas/BaseEvent"},description:"Base event to describe Customer's data changes",name:"BaseEventMessage",title:"BaseEvent",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,arr:[1,2,3],obj:{key:"value"},sch:{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10},bbb:{type:"integer",description:"BBB",minimum:1,maximum:100},ccc:{type:"boolean",description:"CCC",default:!0},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"number",description:"Number",minimum:1,maximum:100},{type:"boolean",description:"Boolean",default:!0}]}}},nestedObj:{obj:{aaa:1234,bbb:!0,empty:null,arr:[1,2,3],sch:{type:"array",items:{type:"string",description:"Array item",minLength:1,maxLength:10}},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10}}}]}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}}}},e={args:{source:p({source:m}),operationName:"customer-change-topic_send_BaseEvent",operationType:"send"}},n={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-minimal-overall-structure":{action:"send",description:"Description of Send Operation With Minimal Overall Structure",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/AnotherStatusMessage"}],bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},components:{schemas:{Identifier1:{type:"string",description:"Identifier example",minLength:1,maxLength:10},Status1:{type:"object",description:"Status example",properties:{status:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}}},Identifier2:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example"}}},Status2:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier1"},payload:{$ref:"#/components/schemas/Status1"}},AnotherStatusMessage:{name:"AnotherStatusMessage",description:"Description of Another Status Message",bindings:{kafka:{bindingVersion:"0.2.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.5.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier2"},payload:{$ref:"#/components/schemas/Status2"}}}}}}),operationName:"send-operation-with-minimal-overall-structure",operationType:"send"}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: KAFKA_REAL_EXAMPLE_SOURCE
    }),
    operationName: 'customer-change-topic_send_BaseEvent',
    operationType: 'send'
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,a,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-minimal-overall-structure": {
            action: "send",
            description: "Description of Send Operation With Minimal Overall Structure",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }, {
              $ref: "#/components/messages/AnotherStatusMessage"
            }],
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                property: "kafka-property"
              },
              rabbitmq: {
                bindingVersion: "0.2.0",
                property: "rabbitmq-property"
              }
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                property: "kafka-property"
              },
              rabbitmq: {
                bindingVersion: "0.2.0",
                property: "rabbitmq-property"
              }
            }
          }
        },
        components: {
          schemas: {
            Identifier1: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10
            },
            Status1: {
              type: "object",
              description: "Status example",
              properties: {
                status: {
                  type: 'string',
                  description: 'Status example',
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            },
            Identifier2: {
              type: 'object',
              description: 'Identifier example',
              properties: {
                identifier: {
                  type: 'string',
                  description: 'Identifier example'
                }
              }
            },
            Status2: {
              type: 'string',
              description: 'Status example',
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              name: "StatusMessage",
              description: "Description of Status Message",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  property: "kafka-property"
                },
                rabbitmq: {
                  bindingVersion: "0.2.0",
                  property: "rabbitmq-property"
                }
              },
              headers: {
                $ref: "#/components/schemas/Identifier1"
              },
              payload: {
                $ref: "#/components/schemas/Status1"
              }
            },
            AnotherStatusMessage: {
              name: "AnotherStatusMessage",
              description: "Description of Another Status Message",
              bindings: {
                kafka: {
                  bindingVersion: "0.2.0",
                  property: "kafka-property"
                },
                rabbitmq: {
                  bindingVersion: "0.5.0",
                  property: "rabbitmq-property"
                }
              },
              headers: {
                $ref: "#/components/schemas/Identifier2"
              },
              payload: {
                $ref: "#/components/schemas/Status2"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-minimal-overall-structure',
    operationType: 'send'
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const k=["KafkaRealExample","MinimalOverallStructure"];export{e as KafkaRealExample,n as MinimalOverallStructure,k as __namedExportsOrder,x as default};
