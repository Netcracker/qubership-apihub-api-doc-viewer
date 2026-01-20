import{A as Tt}from"./AsyncApiOperationViewer-ab165f62.js";import{p as e}from"./preprocess-3aefe0c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9f5e4455.js";import"./index-415bee12.js";import"./JsoViewer-346cab60.js";import"./GraphQLOperationViewer-bba74874.js";import"./GraphQLOperationDiffViewer-56b29068.js";const Lt={title:"Async Api Viewer",component:Tt,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},s={args:{source:{}}},xt={asyncapi:"3.0.0",info:{title:"example-event-service",version:"1.0.0","x-generator":"springwolf"},defaultContentType:"application/json",servers:{"kafka-main":{host:"kafka-host",protocol:"kafka"}},channels:{"customer-change-topic":{address:"customer-change-topic",description:"Channel for customer change notifications",messages:{BaseEventMessage:{$ref:"#/components/messages/BaseEventMessage"}},servers:[{$ref:"#/servers/kafka-main"}],bindings:{},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},operations:{"customer-change-topic_send_BaseEvent":{action:"send",channel:{$ref:"#/channels/customer-change-topic"},title:"Customer change topic send",description:"Send events about Customer's data changes",bindings:{kafka:{bindingVersion:"0.5.0"}},messages:[{$ref:"#/channels/customer-change-topic/messages/BaseEventMessage"}],"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},components:{schemas:{HeadersExample:{title:"HeadersExample",type:"object",properties:{"X-Idempotency-Key":{type:"string"}},examples:[{"X-Idempotency-Key":"string"}]},BaseEvent:{title:"BaseEvent",type:"object",properties:{currentInstance:{type:"object",description:"New data state"},currentModelVersion:{type:"integer",description:"Model Version",format:"int32"},previousInstance:{type:"object",description:"Previous data state"},resourceAction:{type:"string",description:"Resource Action"},resourceType:{type:"string",description:"Resource Type"}},description:"Base event to describe Customer's data changes",examples:[{currentInstance:{},currentModelVersion:0,previousInstance:{},resourceAction:"string",resourceType:"string"}],required:["currentInstance","currentModelVersion","previousInstance","resourceAction","resourceType"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"},payload:{$ref:"#/components/schemas/BaseEvent"},description:"Base event to describe Customer's data changes",name:"BaseEventMessage",title:"BaseEvent",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,arr:[1,2,3],obj:{key:"value"},sch:{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10},bbb:{type:"integer",description:"BBB",minimum:1,maximum:100},ccc:{type:"boolean",description:"CCC",default:!0},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"number",description:"Number",minimum:1,maximum:100},{type:"boolean",description:"Boolean",default:!0}]}}},nestedObj:{obj:{aaa:1234,bbb:!0,empty:null,arr:[1,2,3],sch:{type:"array",items:{type:"string",description:"Array item",minLength:1,maxLength:10}},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10}}}]}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}}}},a={args:{source:e({source:xt}),operationName:"customer-change-topic_send_BaseEvent",operationType:"send"}},Me={bindingVersion:"0.5.0",num:123,str:"string"},ve={bindingVersion:"0.5.0",obj:{str:"string value"},complexObj:{nestedObj:{num:2222}}},ke={bindingVersion:"0.5.0",notSchema:!0,stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},objectSch:{type:"object",properties:{str:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-nothing":{action:"send"}}}}),operationName:"send-operation-with-nothing",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title":{action:"send",title:"Send Operation With Title"}}}}),operationName:"send-operation-with-title",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description":{action:"send",description:"Description of Send Operation With Description"}}}}),operationName:"send-operation-with-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title-and-description":{action:"send",title:"Send Operation With Title And Description",description:"Description of Send Operation With Title And Description"}}}}),operationName:"send-operation-with-title-and-description",operationType:"send"}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-root-level-channel-with-nothing",operationType:"send"}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title",operationType:"send"}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-description",operationType:"send"}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title-and-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title-and-description",operationType:"send"}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-nothing",operationType:"send"}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-primitive-props":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{...Me}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-primitive-props",operationType:"send"}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-object-props":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{...ve}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-object-props",operationType:"send"}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-schema-props":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{...ke}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-schema-props",operationType:"send"}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description-and-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-description-and-binding-with-nothing",operationType:"send"}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-two-bindings":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-two-bindings",operationType:"send"}},w={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-root-level-channel-with-nothing":{action:"send",description:"Description of Send Operation With Description And Root Level Channel With Nothing",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-description-and-root-level-channel-with-nothing",operationType:"send"}},S={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-bindings-kafka",operationType:"send"}},b={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-only-primitive-props":{action:"send",bindings:{kafka:{...Me}}}}}}),operationName:"send-operation-with-bindings-kafka-with-only-primitive-props",operationType:"send"}},M={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-object-props":{action:"send",bindings:{kafka:{...ve}}}}}}),operationName:"send-operation-with-bindings-kafka-with-object-props",operationType:"send"}},v={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-schema-props":{action:"send",bindings:{kafka:{...ke}}}}}}),operationName:"send-operation-with-bindings-kafka-with-schema-props",operationType:"send"}},k={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-two-bindings":{action:"send",bindings:{kafka:{clientId:"order-producer",groupId:"order-processing",bindingVersion:"0.4.0"},amqp:{mandatory:!0,priority:5,deliveryMode:2,expiration:6e4,userId:"svc-order",bindingVersion:"0.3.0"}}}}}}),operationName:"send-operation-two-bindings",operationType:"send"}},D={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-bindings-with-nothing":{action:"send",description:"Description of Send Operation With Description And Bindings With Nothing",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-description-and-bindings-with-nothing",operationType:"send"}},A={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{}}}}}),operationName:"send-operation-with-message-with-nothing",operationType:"send"}},W={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message"}}}}}),operationName:"send-operation-with-message-with-name",operationType:"send"}},N={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title",operationType:"send"}},T={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-description",operationType:"send"}},x={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-description",operationType:"send"}},I={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title-and-description",operationType:"send"}},O={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-title-and-description",operationType:"send"}},$={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"string",description:"Primitive header example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers",operationType:"send"}},B={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"object",description:"Headers example",properties:{"X-Idempotency-Key":{type:"string"}}}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-objective-headers",operationType:"send"}},E={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-payload",operationType:"send"}},j={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-payload",operationType:"send"}},C={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-payload",operationType:"send"}},P={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-payload",operationType:"send"}},_={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-objective-payload",operationType:"send"}},L={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-primitive-payload",operationType:"send"}},V={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-nothing",operationType:"send"}},H={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-primitive-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{...Me}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-primitive-props",operationType:"send"}},R={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-object-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{...ve}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-object-props",operationType:"send"}},F={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-schema-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{...ke}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-schema-props",operationType:"send"}},G={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-two-bindings":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}}),operationName:"send-operation-with-message-with-two-bindings",operationType:"send"}},q={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-headers":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{StatusMessage:{description:"Status message description",headers:{$ref:"#/components/schemas/Identifier"}}}}}}),operationName:"send-operation-with-message-with-description-and-headers",operationType:"send"}},K={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-description-and-payload",operationType:"send"}},J={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-binding-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-description-and-binding-with-nothing",operationType:"send"}},X={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages-with-names":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage"},IdentifierMessage:{name:"IdentifierMessage"}}}}}),operationName:"send-operation-with-two-messages-with-names",operationType:"send"}},U={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-message-with-nothing":{action:"send",description:"Description of Send Operation With Description And Message With Nothing",messages:[{$ref:"#/components/messages/StatusMessage"}]}},messages:{StatusMessage:{}}}}),operationName:"send-operation-with-description-and-message-with-nothing",operationType:"send"}},z={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-minimal-overall-structure":{action:"send",description:"Description of Send Operation With Minimal Overall Structure",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/AnotherStatusMessage"}],bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},components:{schemas:{Identifier1:{type:"string",description:"Identifier example",minLength:1,maxLength:10},Status1:{type:"object",description:"Status example",properties:{status:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}}},Identifier2:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example"}}},Status2:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier1"},payload:{$ref:"#/components/schemas/Status1"}},AnotherStatusMessage:{name:"AnotherStatusMessage",description:"Description of Another Status Message",bindings:{kafka:{bindingVersion:"0.2.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.5.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier2"},payload:{$ref:"#/components/schemas/Status2"}}}}}}),operationName:"send-operation-with-minimal-overall-structure",operationType:"send"}},Q={args:{source:e({source:{asyncapi:"3.0.0",operations:{"receive-operation-with-nothing":{action:"receive"}}}}),operationName:"receive-operation-with-nothing",operationType:"receive"}},n={"x-first":"first","x-second":[1,2,3],"x-third":{fourth:"fourth"}},Y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-extensions":{action:"send",...n}}}}),operationName:"send-operation-with-operation-extensions",operationType:"send"}},Z={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-extensions":{title:"Channel With Extensions",description:"Description of Channel With Extensions",...n}},operations:{"send-operation-with-channel-extensions":{action:"send",channel:{$ref:"#/channels/channel-with-extensions"}}}}}),operationName:"send-operation-with-channel-extensions",operationType:"send"}},ee={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",...n}}}}}),operationName:"send-operation-with-message-extensions",operationType:"send"}},ne={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-bindings-extensions":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...n}}}}}}),operationName:"send-operation-with-operation-bindings-extensions",operationType:"send"}},se={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-bindings-extensions":{title:"Channel With Bindings Extensions",description:"Description of Channel With Bindings Extensions",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...n}}}},operations:{"send-operation-with-channel-bindings-extensions":{action:"send",channel:{$ref:"#/channels/channel-with-bindings-extensions"}}}}}),operationName:"send-operation-with-channel-bindings-extensions",operationType:"send"}},ae={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-bindings-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...n}}}}}}}),operationName:"send-operation-with-message-bindings-extensions",operationType:"send"}},te={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-title":{action:"send"}}}}),operationName:"send-operation-with-default-operation-title",operationType:"send"}},ie={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-nothing":{action:"send"}}}}),operationName:"send-operation-with-default-operation-description-if-nothing",operationType:"send"}},oe={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-summary":{action:"send",summary:"Summary of Operation"}}}}),operationName:"send-operation-with-default-operation-description-if-summary",operationType:"send"}},re={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-summary-and-description":{action:"send",summary:"Summary of Operation",description:"Description of Operation"}}}}),operationName:"send-operation-with-default-operation-description-if-summary-and-description",operationType:"send"}},pe={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-title":{description:"Description of Channel With Default Title"}},operations:{"send-operation-with-default-channel-title":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-title"}}}}}),operationName:"send-operation-with-default-channel-title",operationType:"send"}},ce={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-nothing":{title:"Channel Title"}},operations:{"send-operation-with-default-channel-description-if-nothing":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-nothing"}}}}}),operationName:"send-operation-with-default-channel-description-if-nothing",operationType:"send"}},de={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary":{summary:"Summary of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary",operationType:"send"}},me={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary-and-description":{summary:"Summary of Channel",description:"Description of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary-and-description":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary-and-description"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary-and-description",operationType:"send"}},he={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-nothing",operationType:"send"}},ge={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-name":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-name",operationType:"send"}},ue={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-title-and-name":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{title:"Status Message Title",name:"status-message-name",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-title-and-name",operationType:"send"}},le={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{title:"Status Message Title"}}}}}),operationName:"send-operation-with-default-message-description-if-nothing",operationType:"send"}},fe={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-summary":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{summary:"Summary of Status Message"}}}}}),operationName:"send-operation-with-default-message-description-if-summary",operationType:"send"}},ye={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-summary-and-description":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{summary:"Summary of Status Message",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-description-if-summary-and-description",operationType:"send"}},we={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-binding-version-if-nothing":{action:"send",bindings:{kafka:{}}}}}}),operationName:"send-operation-with-default-operation-binding-version-if-nothing",operationType:"send"}},Se={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-channel-binding-version-if-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{bindings:{kafka:{}}}}}}),operationName:"send-operation-with-default-channel-binding-version-if-nothing",operationType:"send"}},be={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-binding-version-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{}}}}}}}),operationName:"send-operation-with-default-message-binding-version-if-nothing",operationType:"send"}};var De,Ae,We;s.parameters={...s.parameters,docs:{...(De=s.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    source: {}
  }
}`,...(We=(Ae=s.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var Ne,Te,xe;a.parameters={...a.parameters,docs:{...(Ne=a.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: KAFKA_E2E_SOURCE
    }),
    operationName: 'customer-change-topic_send_BaseEvent',
    operationType: 'send'
  }
}`,...(xe=(Te=a.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ie,Oe,$e;t.parameters={...t.parameters,docs:{...(Ie=t.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...($e=(Oe=t.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Be,Ee,je;i.parameters={...i.parameters,docs:{...(Be=i.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(je=(Ee=i.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Ce,Pe,_e;o.parameters={...o.parameters,docs:{...(Ce=o.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(_e=(Pe=o.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Le,Ve,He;r.parameters={...r.parameters,docs:{...(Le=r.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(He=(Ve=r.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Re,Fe,Ge;p.parameters={...p.parameters,docs:{...(Re=p.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ge=(Fe=p.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var qe,Ke,Je;c.parameters={...c.parameters,docs:{...(qe=c.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Je=(Ke=c.parameters)==null?void 0:Ke.docs)==null?void 0:Je.source}}};var Xe,Ue,ze;d.parameters={...d.parameters,docs:{...(Xe=d.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=d.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Qe,Ye,Ze;m.parameters={...m.parameters,docs:{...(Qe=m.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=m.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,sn;h.parameters={...h.parameters,docs:{...(en=h.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-nothing',
    operationType: 'send'
  }
}`,...(sn=(nn=h.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var an,tn,on;g.parameters={...g.parameters,docs:{...(an=g.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-primitive-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_PRIMITIVE_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-primitive-props',
    operationType: 'send'
  }
}`,...(on=(tn=g.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var rn,pn,cn;u.parameters={...u.parameters,docs:{...(rn=u.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-object-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_OBJECT_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-object-props',
    operationType: 'send'
  }
}`,...(cn=(pn=u.parameters)==null?void 0:pn.docs)==null?void 0:cn.source}}};var dn,mn,hn;l.parameters={...l.parameters,docs:{...(dn=l.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-schema-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_SCHEMA_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-schema-props',
    operationType: 'send'
  }
}`,...(hn=(mn=l.parameters)==null?void 0:mn.docs)==null?void 0:hn.source}}};var gn,un,ln;f.parameters={...f.parameters,docs:{...(gn=f.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description-and-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-description-and-binding-with-nothing',
    operationType: 'send'
  }
}`,...(ln=(un=f.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var fn,yn,wn;y.parameters={...y.parameters,docs:{...(fn=y.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-two-bindings": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                key: {
                  type: "string",
                  description: "Partitioning key for the message",
                  minLength: 1
                },
                schemaIdLocation: "header",
                schemaIdPayloadEncoding: "application/json",
                schemaLookupStrategy: "topicNameStrategy"
              },
              rabbitmq: {
                contentEncoding: "application/json",
                messageType: "orders.created",
                bindingVersion: "0.2.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-two-bindings',
    operationType: 'send'
  }
}`,...(wn=(yn=y.parameters)==null?void 0:yn.docs)==null?void 0:wn.source}}};var Sn,bn,Mn;w.parameters={...w.parameters,docs:{...(Sn=w.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Mn=(bn=w.parameters)==null?void 0:bn.docs)==null?void 0:Mn.source}}};var vn,kn,Dn;S.parameters={...S.parameters,docs:{...(vn=S.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka',
    operationType: 'send'
  }
}`,...(Dn=(kn=S.parameters)==null?void 0:kn.docs)==null?void 0:Dn.source}}};var An,Wn,Nn;b.parameters={...b.parameters,docs:{...(An=b.parameters)==null?void 0:An.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-only-primitive-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_PRIMITIVE_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-only-primitive-props',
    operationType: 'send'
  }
}`,...(Nn=(Wn=b.parameters)==null?void 0:Wn.docs)==null?void 0:Nn.source}}};var Tn,xn,In;M.parameters={...M.parameters,docs:{...(Tn=M.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-object-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_OBJECT_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-object-props',
    operationType: 'send'
  }
}`,...(In=(xn=M.parameters)==null?void 0:xn.docs)==null?void 0:In.source}}};var On,$n,Bn;v.parameters={...v.parameters,docs:{...(On=v.parameters)==null?void 0:On.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-schema-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_SCHEMA_PROPS
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-schema-props',
    operationType: 'send'
  }
}`,...(Bn=($n=v.parameters)==null?void 0:$n.docs)==null?void 0:Bn.source}}};var En,jn,Cn;k.parameters={...k.parameters,docs:{...(En=k.parameters)==null?void 0:En.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-two-bindings": {
            action: "send",
            bindings: {
              kafka: {
                clientId: "order-producer",
                groupId: "order-processing",
                bindingVersion: "0.4.0"
              },
              amqp: {
                mandatory: true,
                priority: 5,
                deliveryMode: 2,
                expiration: 60000,
                userId: "svc-order",
                bindingVersion: "0.3.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-two-bindings',
    operationType: 'send'
  }
}`,...(Cn=(jn=k.parameters)==null?void 0:jn.docs)==null?void 0:Cn.source}}};var Pn,_n,Ln;D.parameters={...D.parameters,docs:{...(Pn=D.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-bindings-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Bindings With Nothing",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-description-and-bindings-with-nothing',
    operationType: 'send'
  }
}`,...(Ln=(_n=D.parameters)==null?void 0:_n.docs)==null?void 0:Ln.source}}};var Vn,Hn,Rn;A.parameters={...A.parameters,docs:{...(Vn=A.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Rn=(Hn=A.parameters)==null?void 0:Hn.docs)==null?void 0:Rn.source}}};var Fn,Gn,qn;W.parameters={...W.parameters,docs:{...(Fn=W.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(qn=(Gn=W.parameters)==null?void 0:Gn.docs)==null?void 0:qn.source}}};var Kn,Jn,Xn;N.parameters={...N.parameters,docs:{...(Kn=N.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Xn=(Jn=N.parameters)==null?void 0:Jn.docs)==null?void 0:Xn.source}}};var Un,zn,Qn;T.parameters={...T.parameters,docs:{...(Un=T.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(Qn=(zn=T.parameters)==null?void 0:zn.docs)==null?void 0:Qn.source}}};var Yn,Zn,es;x.parameters={...x.parameters,docs:{...(Yn=x.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(es=(Zn=x.parameters)==null?void 0:Zn.docs)==null?void 0:es.source}}};var ns,ss,as;I.parameters={...I.parameters,docs:{...(ns=I.parameters)==null?void 0:ns.docs,source:{originalSource:`{
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
}`,...(as=(ss=I.parameters)==null?void 0:ss.docs)==null?void 0:as.source}}};var ts,is,os;O.parameters={...O.parameters,docs:{...(ts=O.parameters)==null?void 0:ts.docs,source:{originalSource:`{
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
}`,...(os=(is=O.parameters)==null?void 0:is.docs)==null?void 0:os.source}}};var rs,ps,cs;$.parameters={...$.parameters,docs:{...(rs=$.parameters)==null?void 0:rs.docs,source:{originalSource:`{
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
}`,...(cs=(ps=$.parameters)==null?void 0:ps.docs)==null?void 0:cs.source}}};var ds,ms,hs;B.parameters={...B.parameters,docs:{...(ds=B.parameters)==null?void 0:ds.docs,source:{originalSource:`{
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
}`,...(hs=(ms=B.parameters)==null?void 0:ms.docs)==null?void 0:hs.source}}};var gs,us,ls;E.parameters={...E.parameters,docs:{...(gs=E.parameters)==null?void 0:gs.docs,source:{originalSource:`{
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
}`,...(ls=(us=E.parameters)==null?void 0:us.docs)==null?void 0:ls.source}}};var fs,ys,ws;j.parameters={...j.parameters,docs:{...(fs=j.parameters)==null?void 0:fs.docs,source:{originalSource:`{
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
}`,...(ws=(ys=j.parameters)==null?void 0:ys.docs)==null?void 0:ws.source}}};var Ss,bs,Ms;C.parameters={...C.parameters,docs:{...(Ss=C.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
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
}`,...(Ms=(bs=C.parameters)==null?void 0:bs.docs)==null?void 0:Ms.source}}};var vs,ks,Ds;P.parameters={...P.parameters,docs:{...(vs=P.parameters)==null?void 0:vs.docs,source:{originalSource:`{
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
}`,...(Ds=(ks=P.parameters)==null?void 0:ks.docs)==null?void 0:Ds.source}}};var As,Ws,Ns;_.parameters={..._.parameters,docs:{...(As=_.parameters)==null?void 0:As.docs,source:{originalSource:`{
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
}`,...(Ns=(Ws=_.parameters)==null?void 0:Ws.docs)==null?void 0:Ns.source}}};var Ts,xs,Is;L.parameters={...L.parameters,docs:{...(Ts=L.parameters)==null?void 0:Ts.docs,source:{originalSource:`{
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
}`,...(Is=(xs=L.parameters)==null?void 0:xs.docs)==null?void 0:Is.source}}};var Os,$s,Bs;V.parameters={...V.parameters,docs:{...(Os=V.parameters)==null?void 0:Os.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-nothing": {
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
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-nothing',
    operationType: 'send'
  }
}`,...(Bs=($s=V.parameters)==null?void 0:$s.docs)==null?void 0:Bs.source}}};var Es,js,Cs;H.parameters={...H.parameters,docs:{...(Es=H.parameters)==null?void 0:Es.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-primitive-props": {
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
                kafka: {
                  ...BINDING_WITH_PRIMITIVE_PROPS
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-primitive-props',
    operationType: 'send'
  }
}`,...(Cs=(js=H.parameters)==null?void 0:js.docs)==null?void 0:Cs.source}}};var Ps,_s,Ls;R.parameters={...R.parameters,docs:{...(Ps=R.parameters)==null?void 0:Ps.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-object-props": {
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
                kafka: {
                  ...BINDING_WITH_OBJECT_PROPS
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-object-props',
    operationType: 'send'
  }
}`,...(Ls=(_s=R.parameters)==null?void 0:_s.docs)==null?void 0:Ls.source}}};var Vs,Hs,Rs;F.parameters={...F.parameters,docs:{...(Vs=F.parameters)==null?void 0:Vs.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-schema-props": {
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
                kafka: {
                  ...BINDING_WITH_SCHEMA_PROPS
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-schema-props',
    operationType: 'send'
  }
}`,...(Rs=(Hs=F.parameters)==null?void 0:Hs.docs)==null?void 0:Rs.source}}};var Fs,Gs,qs;G.parameters={...G.parameters,docs:{...(Fs=G.parameters)==null?void 0:Fs.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-two-bindings": {
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
                kafka: {
                  bindingVersion: "0.5.0",
                  key: {
                    type: "string",
                    description: "Partitioning key for the message",
                    minLength: 1
                  },
                  schemaIdLocation: "header",
                  schemaIdPayloadEncoding: "application/json",
                  schemaLookupStrategy: "topicNameStrategy"
                },
                rabbitmq: {
                  contentEncoding: "application/json",
                  messageType: "orders.created",
                  bindingVersion: "0.2.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-two-bindings',
    operationType: 'send'
  }
}`,...(qs=(Gs=G.parameters)==null?void 0:Gs.docs)==null?void 0:qs.source}}};var Ks,Js,Xs;q.parameters={...q.parameters,docs:{...(Ks=q.parameters)==null?void 0:Ks.docs,source:{originalSource:`{
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
}`,...(Xs=(Js=q.parameters)==null?void 0:Js.docs)==null?void 0:Xs.source}}};var Us,zs,Qs;K.parameters={...K.parameters,docs:{...(Us=K.parameters)==null?void 0:Us.docs,source:{originalSource:`{
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
}`,...(Qs=(zs=K.parameters)==null?void 0:zs.docs)==null?void 0:Qs.source}}};var Ys,Zs,ea;J.parameters={...J.parameters,docs:{...(Ys=J.parameters)==null?void 0:Ys.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-binding-with-nothing": {
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
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-binding-with-nothing',
    operationType: 'send'
  }
}`,...(ea=(Zs=J.parameters)==null?void 0:Zs.docs)==null?void 0:ea.source}}};var na,sa,aa;X.parameters={...X.parameters,docs:{...(na=X.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(aa=(sa=X.parameters)==null?void 0:sa.docs)==null?void 0:aa.source}}};var ta,ia,oa;U.parameters={...U.parameters,docs:{...(ta=U.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(ia=U.parameters)==null?void 0:ia.docs)==null?void 0:oa.source}}};var ra,pa,ca;z.parameters={...z.parameters,docs:{...(ra=z.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ca=(pa=z.parameters)==null?void 0:pa.docs)==null?void 0:ca.source}}};var da,ma,ha;Q.parameters={...Q.parameters,docs:{...(da=Q.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ha=(ma=Q.parameters)==null?void 0:ma.docs)==null?void 0:ha.source}}};var ga,ua,la;Y.parameters={...Y.parameters,docs:{...(ga=Y.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-extensions": {
            action: "send",
            ...extensions
          }
        }
      }
    }),
    operationName: 'send-operation-with-operation-extensions',
    operationType: 'send'
  }
}`,...(la=(ua=Y.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var fa,ya,wa;Z.parameters={...Z.parameters,docs:{...(fa=Z.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-extensions": {
            title: 'Channel With Extensions',
            description: 'Description of Channel With Extensions',
            ...extensions
          }
        },
        operations: {
          "send-operation-with-channel-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-extensions"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-channel-extensions',
    operationType: 'send'
  }
}`,...(wa=(ya=Z.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var Sa,ba,Ma;ee.parameters={...ee.parameters,docs:{...(Sa=ee.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-extensions": {
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
              description: 'Description of Status Message',
              ...extensions
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-extensions',
    operationType: 'send'
  }
}`,...(Ma=(ba=ee.parameters)==null?void 0:ba.docs)==null?void 0:Ma.source}}};var va,ka,Da;ne.parameters={...ne.parameters,docs:{...(va=ne.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-bindings-extensions": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...extensions
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-operation-bindings-extensions',
    operationType: 'send'
  }
}`,...(Da=(ka=ne.parameters)==null?void 0:ka.docs)==null?void 0:Da.source}}};var Aa,Wa,Na;se.parameters={...se.parameters,docs:{...(Aa=se.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-bindings-extensions": {
            title: 'Channel With Bindings Extensions',
            description: 'Description of Channel With Bindings Extensions',
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...extensions
              }
            }
          }
        },
        operations: {
          "send-operation-with-channel-bindings-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-bindings-extensions"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-channel-bindings-extensions',
    operationType: 'send'
  }
}`,...(Na=(Wa=se.parameters)==null?void 0:Wa.docs)==null?void 0:Na.source}}};var Ta,xa,Ia;ae.parameters={...ae.parameters,docs:{...(Ta=ae.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-bindings-extensions": {
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
              description: 'Description of Status Message',
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  predefinedProperty: "kafka-property",
                  ...extensions
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-bindings-extensions',
    operationType: 'send'
  }
}`,...(Ia=(xa=ae.parameters)==null?void 0:xa.docs)==null?void 0:Ia.source}}};var Oa,$a,Ba;te.parameters={...te.parameters,docs:{...(Oa=te.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(Ba=($a=te.parameters)==null?void 0:$a.docs)==null?void 0:Ba.source}}};var Ea,ja,Ca;ie.parameters={...ie.parameters,docs:{...(Ea=ie.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Ca=(ja=ie.parameters)==null?void 0:ja.docs)==null?void 0:Ca.source}}};var Pa,_a,La;oe.parameters={...oe.parameters,docs:{...(Pa=oe.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(La=(_a=oe.parameters)==null?void 0:_a.docs)==null?void 0:La.source}}};var Va,Ha,Ra;re.parameters={...re.parameters,docs:{...(Va=re.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ra=(Ha=re.parameters)==null?void 0:Ha.docs)==null?void 0:Ra.source}}};var Fa,Ga,qa;pe.parameters={...pe.parameters,docs:{...(Fa=pe.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(qa=(Ga=pe.parameters)==null?void 0:Ga.docs)==null?void 0:qa.source}}};var Ka,Ja,Xa;ce.parameters={...ce.parameters,docs:{...(Ka=ce.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Xa=(Ja=ce.parameters)==null?void 0:Ja.docs)==null?void 0:Xa.source}}};var Ua,za,Qa;de.parameters={...de.parameters,docs:{...(Ua=de.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(Qa=(za=de.parameters)==null?void 0:za.docs)==null?void 0:Qa.source}}};var Ya,Za,et;me.parameters={...me.parameters,docs:{...(Ya=me.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(et=(Za=me.parameters)==null?void 0:Za.docs)==null?void 0:et.source}}};var nt,st,at;he.parameters={...he.parameters,docs:{...(nt=he.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(at=(st=he.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var tt,it,ot;ge.parameters={...ge.parameters,docs:{...(tt=ge.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(ot=(it=ge.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var rt,pt,ct;ue.parameters={...ue.parameters,docs:{...(rt=ue.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ct=(pt=ue.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};var dt,mt,ht;le.parameters={...le.parameters,docs:{...(dt=le.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ht=(mt=le.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var gt,ut,lt;fe.parameters={...fe.parameters,docs:{...(gt=fe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(lt=(ut=fe.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var ft,yt,wt;ye.parameters={...ye.parameters,docs:{...(ft=ye.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(wt=(yt=ye.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var St,bt,Mt;we.parameters={...we.parameters,docs:{...(St=we.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Mt=(bt=we.parameters)==null?void 0:bt.docs)==null?void 0:Mt.source}}};var vt,kt,Dt;Se.parameters={...Se.parameters,docs:{...(vt=Se.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Dt=(kt=Se.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source}}};var At,Wt,Nt;be.parameters={...be.parameters,docs:{...(At=be.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Nt=(Wt=be.parameters)==null?void 0:Wt.docs)==null?void 0:Nt.source}}};const Vt=["Test","KafkaE2E","SendOperationWithNothing","SendOperationWithTitle","SendOperationWithDescription","SendOperationWithTitleAndDescription","SendOperationWithRootLevelChannelWithNothing","SendOperationWithRootLevelChannelWithTitle","SendOperationWithRootLevelChannelWithDescription","SendOperationWithRootLevelChannelWithTitleAndDescription","SendOperationWithRootLevelChannelWithBindingWithNothing","SendOperationWithRootLevelChannelWithBindingWithPrimitiveProps","SendOperationWithRootLevelChannelWithBindingWithObjectProps","SendOperationWithRootLevelChannelWithBindingWithSchemaProps","SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing","SendOperationWithRootLevelChannelWithTwoBindings","SendOperationWithDescriptionAndRootLevelChannelWithNothing","SendOperationWithBindingsKafkaWithNothing","SendOperationWithBindingsKafkaWithOnlyPrimitiveProps","SendOperationWithBindingsKafkaWithObjectProps","SendOperationWithBindingsKafkaWithSchemaProps","SendOperationTwoBindings","SendOperationWithDescriptionAndBindingsWithNothing","SendOperationWithMessageWithNothing","SendOperationWithMessageWithName","SendOperationWithMessageWithTitle","SendOperationWithMessageWithDescription","SendOperationWithMessageWithNameAndDescription","SendOperationWithMessageWithTitleAndDescription","SendOperationWithMessageWithNameAndTitleAndDescription","SendOperationWithMessageWithPrimitiveHeaders","SendOperationWithMessageWithObjectiveHeaders","SendOperationWithMessageWithPrimitivePayload","SendOperationWithMessageWithObjectivePayload","SendOperationWithMessageWithPrimitiveHeadersAndPayload","SendOperationWithMessageWithObjectiveHeadersAndPayload","SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload","SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload","SendOperationWithMessageWithBindingsWithNothing","SendOperationWithMessageWithBindingsWithPrimitiveProps","SendOperationWithMessageWithBindingsWithObjectProps","SendOperationWithMessageWithBindingsWithSchemaProps","SendOperationWithMessageWithTwoBindings","SendOperationWithMessageWithDescriptionAndHeaders","SendOperationWithMessageWithDescriptionAndPayload","SendOperationWithMessageWithDescriptionAndBindingWithNothing","SendOperationWithTwoMessagesWithNames","SendOperationWithDescriptionAndMessageWithNothing","SendOperationWithMinimalOverallStructure","ReceiveOperationWithNothing","ExtensionsInOperation","ExtensionsInChannel","ExtensionsInMessage","ExtensionsInOperationBindings","ExtensionsInChannelBindings","ExtensionsInMessageBindings","DefaultOperationTitle","DefaultOperationDescriptionIfNothing","DefaultOperationDescriptionIfSummary","DefaultOperationDescriptionIfSummaryAndDescription","DefaultChannelTitle","DefaultChannelDescriptionIfNothing","DefaultChannelDescriptionIfSummary","DefaultChannelDescriptionIfSummaryAndDescription","DefaultMessageTitleIfNothing","DefaultMessageTitleIfName","DefaultMessageTitleIfTitleAndName","DefaultMessageDescriptionIfNothing","DefaultMessageDescriptionIfSummary","DefaultMessageDescriptionIfSummaryAndDescription","DefaultOperationBindingVersionIfNothing","DefaultChannelBindingVersionIfNothing","DefaultMessageBindingVersionIfNothing"];export{Se as DefaultChannelBindingVersionIfNothing,ce as DefaultChannelDescriptionIfNothing,de as DefaultChannelDescriptionIfSummary,me as DefaultChannelDescriptionIfSummaryAndDescription,pe as DefaultChannelTitle,be as DefaultMessageBindingVersionIfNothing,le as DefaultMessageDescriptionIfNothing,fe as DefaultMessageDescriptionIfSummary,ye as DefaultMessageDescriptionIfSummaryAndDescription,ge as DefaultMessageTitleIfName,he as DefaultMessageTitleIfNothing,ue as DefaultMessageTitleIfTitleAndName,we as DefaultOperationBindingVersionIfNothing,ie as DefaultOperationDescriptionIfNothing,oe as DefaultOperationDescriptionIfSummary,re as DefaultOperationDescriptionIfSummaryAndDescription,te as DefaultOperationTitle,Z as ExtensionsInChannel,se as ExtensionsInChannelBindings,ee as ExtensionsInMessage,ae as ExtensionsInMessageBindings,Y as ExtensionsInOperation,ne as ExtensionsInOperationBindings,a as KafkaE2E,Q as ReceiveOperationWithNothing,k as SendOperationTwoBindings,S as SendOperationWithBindingsKafkaWithNothing,M as SendOperationWithBindingsKafkaWithObjectProps,b as SendOperationWithBindingsKafkaWithOnlyPrimitiveProps,v as SendOperationWithBindingsKafkaWithSchemaProps,o as SendOperationWithDescription,D as SendOperationWithDescriptionAndBindingsWithNothing,U as SendOperationWithDescriptionAndMessageWithNothing,w as SendOperationWithDescriptionAndRootLevelChannelWithNothing,V as SendOperationWithMessageWithBindingsWithNothing,R as SendOperationWithMessageWithBindingsWithObjectProps,H as SendOperationWithMessageWithBindingsWithPrimitiveProps,F as SendOperationWithMessageWithBindingsWithSchemaProps,T as SendOperationWithMessageWithDescription,J as SendOperationWithMessageWithDescriptionAndBindingWithNothing,q as SendOperationWithMessageWithDescriptionAndHeaders,K as SendOperationWithMessageWithDescriptionAndPayload,W as SendOperationWithMessageWithName,x as SendOperationWithMessageWithNameAndDescription,O as SendOperationWithMessageWithNameAndTitleAndDescription,A as SendOperationWithMessageWithNothing,B as SendOperationWithMessageWithObjectiveHeaders,P as SendOperationWithMessageWithObjectiveHeadersAndPayload,L as SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload,j as SendOperationWithMessageWithObjectivePayload,$ as SendOperationWithMessageWithPrimitiveHeaders,_ as SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload,C as SendOperationWithMessageWithPrimitiveHeadersAndPayload,E as SendOperationWithMessageWithPrimitivePayload,N as SendOperationWithMessageWithTitle,I as SendOperationWithMessageWithTitleAndDescription,G as SendOperationWithMessageWithTwoBindings,z as SendOperationWithMinimalOverallStructure,t as SendOperationWithNothing,h as SendOperationWithRootLevelChannelWithBindingWithNothing,u as SendOperationWithRootLevelChannelWithBindingWithObjectProps,g as SendOperationWithRootLevelChannelWithBindingWithPrimitiveProps,l as SendOperationWithRootLevelChannelWithBindingWithSchemaProps,d as SendOperationWithRootLevelChannelWithDescription,f as SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing,p as SendOperationWithRootLevelChannelWithNothing,c as SendOperationWithRootLevelChannelWithTitle,m as SendOperationWithRootLevelChannelWithTitleAndDescription,y as SendOperationWithRootLevelChannelWithTwoBindings,i as SendOperationWithTitle,r as SendOperationWithTitleAndDescription,X as SendOperationWithTwoMessagesWithNames,s as Test,Vt as __namedExportsOrder,Lt as default};
