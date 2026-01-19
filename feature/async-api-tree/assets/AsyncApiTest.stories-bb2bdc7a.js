import{A as Os}from"./AsyncApiOperationViewer-39567cde.js";import{p as e}from"./preprocess-124810e4.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-e7edf85d.js";import"./index-415bee12.js";import"./JsoViewer-77806820.js";import"./GraphQLOperationViewer-242eb38e.js";import"./GraphQLOperationDiffViewer-cc9eefd1.js";const Ps={title:"Async Api Viewer",component:Os,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},n={args:{source:{}}},js={asyncapi:"3.0.0",info:{title:"example-event-service",version:"1.0.0","x-generator":"springwolf"},defaultContentType:"application/json",servers:{"kafka-main":{host:"kafka-host",protocol:"kafka"}},channels:{"customer-change-topic":{address:"customer-change-topic",description:"Channel for customer change notifications",messages:{BaseEventMessage:{$ref:"#/components/messages/BaseEventMessage"}},servers:[{$ref:"#/servers/kafka-main"}],bindings:{},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},operations:{"customer-change-topic_send_BaseEvent":{action:"send",channel:{$ref:"#/channels/customer-change-topic"},title:"Customer change topic send",description:"Send events about Customer's data changes",bindings:{kafka:{bindingVersion:"0.5.0"}},messages:[{$ref:"#/channels/customer-change-topic/messages/BaseEventMessage"}],"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},components:{schemas:{HeadersExample:{title:"HeadersExample",type:"object",properties:{"X-Idempotency-Key":{type:"string"}},examples:[{"X-Idempotency-Key":"string"}]},BaseEvent:{title:"BaseEvent",type:"object",properties:{currentInstance:{type:"object",description:"New data state"},currentModelVersion:{type:"integer",description:"Model Version",format:"int32"},previousInstance:{type:"object",description:"Previous data state"},resourceAction:{type:"string",description:"Resource Action"},resourceType:{type:"string",description:"Resource Type"}},description:"Base event to describe Customer's data changes",examples:[{currentInstance:{},currentModelVersion:0,previousInstance:{},resourceAction:"string",resourceType:"string"}],required:["currentInstance","currentModelVersion","previousInstance","resourceAction","resourceType"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"},payload:{$ref:"#/components/schemas/BaseEvent"},description:"Base event to describe Customer's data changes",name:"BaseEventMessage",title:"BaseEvent",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,arr:[1,2,3],obj:{key:"value"},sch:{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10},bbb:{type:"integer",description:"BBB",minimum:1,maximum:100},ccc:{type:"boolean",description:"CCC",default:!0},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"number",description:"Number",minimum:1,maximum:100},{type:"boolean",description:"Boolean",default:!0}]}}},nestedObj:{obj:{aaa:1234,bbb:!0,empty:null,arr:[1,2,3],sch:{type:"array",items:{type:"string",description:"Array item",minLength:1,maxLength:10}},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10}}}]}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}}}},s={args:{source:e({source:js}),operationName:"customer-change-topic_send_BaseEvent",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-nothing":{action:"send"}}}}),operationName:"send-operation-with-nothing",operationType:"send"}},a={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title":{action:"send",title:"Send Operation With Title"}}}}),operationName:"send-operation-with-title",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description":{action:"send",description:"Description of Send Operation With Description"}}}}),operationName:"send-operation-with-description",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title-and-description":{action:"send",title:"Send Operation With Title And Description",description:"Description of Send Operation With Title And Description"}}}}),operationName:"send-operation-with-title-and-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-root-level-channel-with-nothing",operationType:"send"}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title",operationType:"send"}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-description",operationType:"send"}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title-and-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title-and-description",operationType:"send"}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-nothing",operationType:"send"}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description-and-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-description-and-binding-with-nothing",operationType:"send"}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-two-bindings":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-two-bindings",operationType:"send"}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-root-level-channel-with-nothing":{action:"send",description:"Description of Send Operation With Description And Root Level Channel With Nothing",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-description-and-root-level-channel-with-nothing",operationType:"send"}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-bindings-kafka",operationType:"send"}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-only-primitive-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,empty:null}}}}}}),operationName:"send-operation-with-bindings-kafka-with-only-primitive-props",operationType:"send"}},b={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-object-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",num:1111,str:"string",bool:!0,empty:null,obj:{key:"string value"},arr:[1,2,3],complexObj:{nestedObj:{aaa:2222,bbb:!1,ccc:"aaabbb",empty:null,arr:[1,2]}},complexArr:[{aaa:3333,bbb:!0,ccc:"bbbccc",empty:null,arr:[2,3],nestedObj:{aaa:4444,bbb:!1,empty:null,arr:[3,4]}}]}}}}}}),operationName:"send-operation-with-bindings-kafka-with-object-props",operationType:"send"}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-schema-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},nestedStringSch:{stringSch:{type:"string",description:"Nested string schema",minLength:7,maxLength:70}},numberSch:{type:"number",description:"Number schema",minimum:1,maximum:100},nestedNumberSch:{numberSch:{type:"number",description:"Nested number schema",minimum:7,maximum:700}},booleanSch:{type:"boolean",description:"Boolean schema",default:!0},nestedBooleanSch:{booleanSch:{type:"boolean",description:"Nested boolean schema",default:!1}},arraySch:{type:"array",items:{type:"string",description:"Array string item",minLength:1,maxLength:10}},nestedArraySch:{arraySch:{type:"array",description:"Nested array schema",items:{type:"number",description:"Nested array number item",minimum:4,maximum:444}}},objectSch:{type:"object",properties:{aaa:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}},nestedObjectSch:{objectSch:{type:"object",description:"Nested object schema",properties:{aaa:{type:"number",description:"Nested object number property",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10}}}},nestedSchemasInArray:[{type:"string",description:"Nested string schema in array",minLength:1,maxLength:10},{type:"number",description:"Nested number schema in array",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10},{type:"boolean",description:"Nested boolean schema in array",default:!0},{type:"object",description:"Nested object schema in array",properties:{aaa:{type:"number",minimum:1}}},{type:"array",description:"Nested array schema in array",items:{type:"integer",maximum:100,multipleOf:10}}]}}}}}}),operationName:"send-operation-with-bindings-kafka-with-schema-props",operationType:"send"}},S={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-two-bindings":{action:"send",bindings:{kafka:{clientId:"order-producer",groupId:"order-processing",bindingVersion:"0.4.0"},amqp:{mandatory:!0,priority:5,deliveryMode:2,expiration:6e4,userId:"svc-order",bindingVersion:"0.3.0"}}}}}}),operationName:"send-operation-two-bindings",operationType:"send"}},w={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-bindings-with-nothing":{action:"send",description:"Description of Send Operation With Description And Bindings With Nothing",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-description-and-bindings-with-nothing",operationType:"send"}},v={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{}}}}}),operationName:"send-operation-with-message-with-nothing",operationType:"send"}},M={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message"}}}}}),operationName:"send-operation-with-message-with-name",operationType:"send"}},x={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title",operationType:"send"}},k={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-description",operationType:"send"}},W={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-description",operationType:"send"}},A={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title-and-description",operationType:"send"}},N={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-title-and-description",operationType:"send"}},O={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"string",description:"Primitive header example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers",operationType:"send"}},j={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"object",description:"Headers example",properties:{"X-Idempotency-Key":{type:"string"}}}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-objective-headers",operationType:"send"}},T={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-payload",operationType:"send"}},D={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-payload",operationType:"send"}},B={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-payload",operationType:"send"}},$={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-payload",operationType:"send"}},E={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-objective-payload",operationType:"send"}},L={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-primitive-payload",operationType:"send"}},I={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-nothing",operationType:"send"}},V={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-primitive-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,empty:null}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-primitive-props",operationType:"send"}},C={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-object-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",obj:{key:"string value"},arr:[1,2,3],complexObj:{nestedObj:{aaa:2222,bbb:!1,ccc:"aaabbb",empty:null,arr:[1,2]}},complexArr:[{aaa:3333,bbb:!0,ccc:"bbbccc",empty:null,arr:[2,3],nestedObj:{aaa:4444,bbb:!1,empty:null,arr:[3,4]}}]}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-object-props",operationType:"send"}},P={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-schema-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},nestedStringSch:{stringSch:{type:"string",description:"Nested string schema",minLength:7,maxLength:70}},numberSch:{type:"number",description:"Number schema",minimum:1,maximum:100},nestedNumberSch:{numberSch:{type:"number",description:"Nested number schema",minimum:7,maximum:700}},booleanSch:{type:"boolean",description:"Boolean schema",default:!0},nestedBooleanSch:{booleanSch:{type:"boolean",description:"Nested boolean schema",default:!1}},arraySch:{type:"array",items:{type:"string",description:"Array string item",minLength:1,maxLength:10}},nestedArraySch:{arraySch:{type:"array",description:"Nested array schema",items:{type:"number",description:"Nested array number item",minimum:4,maximum:444}}},objectSch:{type:"object",properties:{aaa:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}},nestedObjectSch:{objectSch:{type:"object",description:"Nested object schema",properties:{aaa:{type:"number",description:"Nested object number property",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10}}}},nestedSchemasInArray:[{type:"string",description:"Nested string schema in array",minLength:1,maxLength:10},{type:"number",description:"Nested number schema in array",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10},{type:"boolean",description:"Nested boolean schema in array",default:!0},{type:"object",description:"Nested object schema in array",properties:{aaa:{type:"number",minimum:1}}},{type:"array",description:"Nested array schema in array",items:{type:"integer",maximum:100,multipleOf:10}}]}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-schema-props",operationType:"send"}},_={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-two-bindings":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}}),operationName:"send-operation-with-message-with-two-bindings",operationType:"send"}},H={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-headers":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{StatusMessage:{description:"Status message description",headers:{$ref:"#/components/schemas/Identifier"}}}}}}),operationName:"send-operation-with-message-with-description-and-headers",operationType:"send"}},F={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-description-and-payload",operationType:"send"}},R={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-binding-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-description-and-binding-with-nothing",operationType:"send"}},q={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages-with-names":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage"},IdentifierMessage:{name:"IdentifierMessage"}}}}}),operationName:"send-operation-with-two-messages-with-names",operationType:"send"}},K={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-message-with-nothing":{action:"send",description:"Description of Send Operation With Description And Message With Nothing",messages:[{$ref:"#/components/messages/StatusMessage"}]}},messages:{StatusMessage:{}}}}),operationName:"send-operation-with-description-and-message-with-nothing",operationType:"send"}},G={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-minimal-overall-structure":{action:"send",description:"Description of Send Operation With Minimal Overall Structure",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/AnotherStatusMessage"}],bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},components:{schemas:{Identifier1:{type:"string",description:"Identifier example",minLength:1,maxLength:10},Status1:{type:"object",description:"Status example",properties:{status:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}}},Identifier2:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example"}}},Status2:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier1"},payload:{$ref:"#/components/schemas/Status1"}},AnotherStatusMessage:{name:"AnotherStatusMessage",description:"Description of Another Status Message",bindings:{kafka:{bindingVersion:"0.2.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.5.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier2"},payload:{$ref:"#/components/schemas/Status2"}}}}}}),operationName:"send-operation-with-minimal-overall-structure",operationType:"send"}},J={args:{source:e({source:{asyncapi:"3.0.0",operations:{"receive-operation-with-nothing":{action:"receive"}}}}),operationName:"receive-operation-with-nothing",operationType:"receive"}};var z,X,U;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: {}
  }
}`,...(U=(X=n.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var Q,Y,Z;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: KAFKA_E2E_SOURCE
    }),
    operationName: 'customer-change-topic_send_BaseEvent',
    operationType: 'send'
  }
}`,...(Z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,se;t.parameters={...t.parameters,docs:{...(ee=t.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ne=t.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ae,ie;a.parameters={...a.parameters,docs:{...(te=a.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(ae=a.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var oe,re,pe;i.parameters={...i.parameters,docs:{...(oe=i.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(pe=(re=i.parameters)==null?void 0:re.docs)==null?void 0:pe.source}}};var ce,de,me;o.parameters={...o.parameters,docs:{...(ce=o.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(de=o.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,ge,ue;r.parameters={...r.parameters,docs:{...(he=r.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ue=(ge=r.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var le,ye,be;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(be=(ye=p.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var fe,Se,we;c.parameters={...c.parameters,docs:{...(fe=c.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(Se=c.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ve,Me,xe;d.parameters={...d.parameters,docs:{...(ve=d.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Me=d.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var ke,We,Ae;m.parameters={...m.parameters,docs:{...(ke=m.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ae=(We=m.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Ne,Oe,je;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(je=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Te,De,Be;g.parameters={...g.parameters,docs:{...(Te=g.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Be=(De=g.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var $e,Ee,Le;u.parameters={...u.parameters,docs:{...($e=u.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Le=(Ee=u.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Ie,Ve,Ce;l.parameters={...l.parameters,docs:{...(Ie=l.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ce=(Ve=l.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var Pe,_e,He;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-only-primitive-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                num: 123,
                str: "string",
                bool: true,
                // TODO: api-unifier removes "null" value during normalization
                empty: null
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-only-primitive-props',
    operationType: 'send'
  }
}`,...(He=(_e=y.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Fe,Re,qe;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-object-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                num: 1111,
                str: "string",
                bool: true,
                // TODO: api-unifier removes "null" value during normalization
                empty: null,
                obj: {
                  key: "string value"
                },
                arr: [1, 2, 3],
                complexObj: {
                  nestedObj: {
                    aaa: 2222,
                    bbb: false,
                    ccc: 'aaabbb',
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [1, 2]
                  }
                },
                complexArr: [{
                  aaa: 3333,
                  bbb: true,
                  ccc: 'bbbccc',
                  // TODO: api-unifier removes "null" value during normalization
                  empty: null,
                  arr: [2, 3],
                  nestedObj: {
                    aaa: 4444,
                    bbb: false,
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [3, 4]
                  }
                }]
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-object-props',
    operationType: 'send'
  }
}`,...(qe=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Ke,Ge,Je;f.parameters={...f.parameters,docs:{...(Ke=f.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-schema-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                stringSch: {
                  type: 'string',
                  description: 'String schema',
                  minLength: 1,
                  maxLength: 10
                },
                nestedStringSch: {
                  stringSch: {
                    type: 'string',
                    description: 'Nested string schema',
                    minLength: 7,
                    maxLength: 70
                  }
                },
                numberSch: {
                  type: 'number',
                  description: 'Number schema',
                  minimum: 1,
                  maximum: 100
                },
                nestedNumberSch: {
                  numberSch: {
                    type: 'number',
                    description: 'Nested number schema',
                    minimum: 7,
                    maximum: 700
                  }
                },
                booleanSch: {
                  type: 'boolean',
                  description: 'Boolean schema',
                  default: true
                },
                nestedBooleanSch: {
                  booleanSch: {
                    type: 'boolean',
                    description: 'Nested boolean schema',
                    default: false
                  }
                },
                arraySch: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'Array string item',
                    minLength: 1,
                    maxLength: 10
                  }
                },
                nestedArraySch: {
                  arraySch: {
                    type: 'array',
                    description: 'Nested array schema',
                    items: {
                      type: 'number',
                      description: 'Nested array number item',
                      minimum: 4,
                      maximum: 444
                    }
                  }
                },
                objectSch: {
                  type: 'object',
                  properties: {
                    aaa: {
                      type: 'string',
                      description: 'Object string property',
                      enum: ['aaa', 'bbb', 'ccc']
                    }
                  }
                },
                nestedObjectSch: {
                  objectSch: {
                    type: 'object',
                    description: 'Nested object schema',
                    properties: {
                      aaa: {
                        type: 'number',
                        description: 'Nested object number property',
                        minimum: 1,
                        exclusiveMinimum: true,
                        maximum: 100,
                        exclusiveMaximum: true,
                        multipleOf: 10
                      }
                    }
                  }
                },
                nestedSchemasInArray: [{
                  type: 'string',
                  description: 'Nested string schema in array',
                  minLength: 1,
                  maxLength: 10
                }, {
                  type: 'number',
                  description: 'Nested number schema in array',
                  minimum: 1,
                  exclusiveMinimum: true,
                  maximum: 100,
                  exclusiveMaximum: true,
                  multipleOf: 10
                }, {
                  type: 'boolean',
                  description: 'Nested boolean schema in array',
                  default: true
                }, {
                  type: 'object',
                  description: 'Nested object schema in array',
                  properties: {
                    aaa: {
                      type: 'number',
                      minimum: 1
                    }
                  }
                }, {
                  type: 'array',
                  description: 'Nested array schema in array',
                  items: {
                    type: 'integer',
                    maximum: 100,
                    multipleOf: 10
                  }
                }]
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-schema-props',
    operationType: 'send'
  }
}`,...(Je=(Ge=f.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var ze,Xe,Ue;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ue=(Xe=S.parameters)==null?void 0:Xe.docs)==null?void 0:Ue.source}}};var Qe,Ye,Ze;w.parameters={...w.parameters,docs:{...(Qe=w.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=w.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,sn;v.parameters={...v.parameters,docs:{...(en=v.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(sn=(nn=v.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var tn,an,on;M.parameters={...M.parameters,docs:{...(tn=M.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(on=(an=M.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,pn,cn;x.parameters={...x.parameters,docs:{...(rn=x.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(cn=(pn=x.parameters)==null?void 0:pn.docs)==null?void 0:cn.source}}};var dn,mn,hn;k.parameters={...k.parameters,docs:{...(dn=k.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(hn=(mn=k.parameters)==null?void 0:mn.docs)==null?void 0:hn.source}}};var gn,un,ln;W.parameters={...W.parameters,docs:{...(gn=W.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(ln=(un=W.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var yn,bn,fn;A.parameters={...A.parameters,docs:{...(yn=A.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(fn=(bn=A.parameters)==null?void 0:bn.docs)==null?void 0:fn.source}}};var Sn,wn,vn;N.parameters={...N.parameters,docs:{...(Sn=N.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(vn=(wn=N.parameters)==null?void 0:wn.docs)==null?void 0:vn.source}}};var Mn,xn,kn;O.parameters={...O.parameters,docs:{...(Mn=O.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(kn=(xn=O.parameters)==null?void 0:xn.docs)==null?void 0:kn.source}}};var Wn,An,Nn;j.parameters={...j.parameters,docs:{...(Wn=j.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Nn=(An=j.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var On,jn,Tn;T.parameters={...T.parameters,docs:{...(On=T.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Tn=(jn=T.parameters)==null?void 0:jn.docs)==null?void 0:Tn.source}}};var Dn,Bn,$n;D.parameters={...D.parameters,docs:{...(Dn=D.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...($n=(Bn=D.parameters)==null?void 0:Bn.docs)==null?void 0:$n.source}}};var En,Ln,In;B.parameters={...B.parameters,docs:{...(En=B.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(In=(Ln=B.parameters)==null?void 0:Ln.docs)==null?void 0:In.source}}};var Vn,Cn,Pn;$.parameters={...$.parameters,docs:{...(Vn=$.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Pn=(Cn=$.parameters)==null?void 0:Cn.docs)==null?void 0:Pn.source}}};var _n,Hn,Fn;E.parameters={...E.parameters,docs:{...(_n=E.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Fn=(Hn=E.parameters)==null?void 0:Hn.docs)==null?void 0:Fn.source}}};var Rn,qn,Kn;L.parameters={...L.parameters,docs:{...(Rn=L.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Kn=(qn=L.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Gn,Jn,zn;I.parameters={...I.parameters,docs:{...(Gn=I.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(zn=(Jn=I.parameters)==null?void 0:Jn.docs)==null?void 0:zn.source}}};var Xn,Un,Qn;V.parameters={...V.parameters,docs:{...(Xn=V.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
                  bindingVersion: "0.5.0",
                  num: 123,
                  str: "string",
                  bool: true,
                  // TODO: api-unifier removes "null" value during normalization
                  empty: null
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
}`,...(Qn=(Un=V.parameters)==null?void 0:Un.docs)==null?void 0:Qn.source}}};var Yn,Zn,es;C.parameters={...C.parameters,docs:{...(Yn=C.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
                  bindingVersion: "0.5.0",
                  obj: {
                    key: "string value"
                  },
                  arr: [1, 2, 3],
                  complexObj: {
                    nestedObj: {
                      aaa: 2222,
                      bbb: false,
                      ccc: 'aaabbb',
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [1, 2]
                    }
                  },
                  complexArr: [{
                    aaa: 3333,
                    bbb: true,
                    ccc: 'bbbccc',
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [2, 3],
                    nestedObj: {
                      aaa: 4444,
                      bbb: false,
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [3, 4]
                    }
                  }]
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
}`,...(es=(Zn=C.parameters)==null?void 0:Zn.docs)==null?void 0:es.source}}};var ns,ss,ts;P.parameters={...P.parameters,docs:{...(ns=P.parameters)==null?void 0:ns.docs,source:{originalSource:`{
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
                  bindingVersion: "0.5.0",
                  stringSch: {
                    type: 'string',
                    description: 'String schema',
                    minLength: 1,
                    maxLength: 10
                  },
                  nestedStringSch: {
                    stringSch: {
                      type: 'string',
                      description: 'Nested string schema',
                      minLength: 7,
                      maxLength: 70
                    }
                  },
                  numberSch: {
                    type: 'number',
                    description: 'Number schema',
                    minimum: 1,
                    maximum: 100
                  },
                  nestedNumberSch: {
                    numberSch: {
                      type: 'number',
                      description: 'Nested number schema',
                      minimum: 7,
                      maximum: 700
                    }
                  },
                  booleanSch: {
                    type: 'boolean',
                    description: 'Boolean schema',
                    default: true
                  },
                  nestedBooleanSch: {
                    booleanSch: {
                      type: 'boolean',
                      description: 'Nested boolean schema',
                      default: false
                    }
                  },
                  arraySch: {
                    type: 'array',
                    items: {
                      type: 'string',
                      description: 'Array string item',
                      minLength: 1,
                      maxLength: 10
                    }
                  },
                  nestedArraySch: {
                    arraySch: {
                      type: 'array',
                      description: 'Nested array schema',
                      items: {
                        type: 'number',
                        description: 'Nested array number item',
                        minimum: 4,
                        maximum: 444
                      }
                    }
                  },
                  objectSch: {
                    type: 'object',
                    properties: {
                      aaa: {
                        type: 'string',
                        description: 'Object string property',
                        enum: ['aaa', 'bbb', 'ccc']
                      }
                    }
                  },
                  nestedObjectSch: {
                    objectSch: {
                      type: 'object',
                      description: 'Nested object schema',
                      properties: {
                        aaa: {
                          type: 'number',
                          description: 'Nested object number property',
                          minimum: 1,
                          exclusiveMinimum: true,
                          maximum: 100,
                          exclusiveMaximum: true,
                          multipleOf: 10
                        }
                      }
                    }
                  },
                  nestedSchemasInArray: [{
                    type: 'string',
                    description: 'Nested string schema in array',
                    minLength: 1,
                    maxLength: 10
                  }, {
                    type: 'number',
                    description: 'Nested number schema in array',
                    minimum: 1,
                    exclusiveMinimum: true,
                    maximum: 100,
                    exclusiveMaximum: true,
                    multipleOf: 10
                  }, {
                    type: 'boolean',
                    description: 'Nested boolean schema in array',
                    default: true
                  }, {
                    type: 'object',
                    description: 'Nested object schema in array',
                    properties: {
                      aaa: {
                        type: 'number',
                        minimum: 1
                      }
                    }
                  }, {
                    type: 'array',
                    description: 'Nested array schema in array',
                    items: {
                      type: 'integer',
                      maximum: 100,
                      multipleOf: 10
                    }
                  }]
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
}`,...(ts=(ss=P.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var as,is,os;_.parameters={..._.parameters,docs:{...(as=_.parameters)==null?void 0:as.docs,source:{originalSource:`{
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
}`,...(os=(is=_.parameters)==null?void 0:is.docs)==null?void 0:os.source}}};var rs,ps,cs;H.parameters={...H.parameters,docs:{...(rs=H.parameters)==null?void 0:rs.docs,source:{originalSource:`{
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
}`,...(cs=(ps=H.parameters)==null?void 0:ps.docs)==null?void 0:cs.source}}};var ds,ms,hs;F.parameters={...F.parameters,docs:{...(ds=F.parameters)==null?void 0:ds.docs,source:{originalSource:`{
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
}`,...(hs=(ms=F.parameters)==null?void 0:ms.docs)==null?void 0:hs.source}}};var gs,us,ls;R.parameters={...R.parameters,docs:{...(gs=R.parameters)==null?void 0:gs.docs,source:{originalSource:`{
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
}`,...(ls=(us=R.parameters)==null?void 0:us.docs)==null?void 0:ls.source}}};var ys,bs,fs;q.parameters={...q.parameters,docs:{...(ys=q.parameters)==null?void 0:ys.docs,source:{originalSource:`{
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
}`,...(fs=(bs=q.parameters)==null?void 0:bs.docs)==null?void 0:fs.source}}};var Ss,ws,vs;K.parameters={...K.parameters,docs:{...(Ss=K.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
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
}`,...(vs=(ws=K.parameters)==null?void 0:ws.docs)==null?void 0:vs.source}}};var Ms,xs,ks;G.parameters={...G.parameters,docs:{...(Ms=G.parameters)==null?void 0:Ms.docs,source:{originalSource:`{
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
}`,...(ks=(xs=G.parameters)==null?void 0:xs.docs)==null?void 0:ks.source}}};var Ws,As,Ns;J.parameters={...J.parameters,docs:{...(Ws=J.parameters)==null?void 0:Ws.docs,source:{originalSource:`{
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
}`,...(Ns=(As=J.parameters)==null?void 0:As.docs)==null?void 0:Ns.source}}};const _s=["Test","KafkaE2E","SendOperationWithNothing","SendOperationWithTitle","SendOperationWithDescription","SendOperationWithTitleAndDescription","SendOperationWithRootLevelChannelWithNothing","SendOperationWithRootLevelChannelWithTitle","SendOperationWithRootLevelChannelWithDescription","SendOperationWithRootLevelChannelWithTitleAndDescription","SendOperationWithRootLevelChannelWithBindingWithNothing","SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing","SendOperationWithRootLevelChannelWithTwoBindings","SendOperationWithDescriptionAndRootLevelChannelWithNothing","SendOperationWithBindingsKafkaWithNothing","SendOperationWithBindingsKafkaWithOnlyPrimitiveProps","SendOperationWithBindingsKafkaWithObjectProps","SendOperationWithBindingsKafkaWithSchemaProps","SendOperationTwoBindings","SendOperationWithDescriptionAndBindingsWithNothing","SendOperationWithMessageWithNothing","SendOperationWithMessageWithName","SendOperationWithMessageWithTitle","SendOperationWithMessageWithDescription","SendOperationWithMessageWithNameAndDescription","SendOperationWithMessageWithTitleAndDescription","SendOperationWithMessageWithNameAndTitleAndDescription","SendOperationWithMessageWithPrimitiveHeaders","SendOperationWithMessageWithObjectiveHeaders","SendOperationWithMessageWithPrimitivePayload","SendOperationWithMessageWithObjectivePayload","SendOperationWithMessageWithPrimitiveHeadersAndPayload","SendOperationWithMessageWithObjectiveHeadersAndPayload","SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload","SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload","SendOperationWithMessageWithBindingsWithNothing","SendOperationWithMessageWithBindingsWithPrimitiveProps","SendOperationWithMessageWithBindingsWithObjectProps","SendOperationWithMessageWithBindingsWithSchemaProps","SendOperationWithMessageWithTwoBindings","SendOperationWithMessageWithDescriptionAndHeaders","SendOperationWithMessageWithDescriptionAndPayload","SendOperationWithMessageWithDescriptionAndBindingWithNothing","SendOperationWithTwoMessagesWithNames","SendOperationWithDescriptionAndMessageWithNothing","SendOperationWithMinimalOverallStructure","ReceiveOperationWithNothing"];export{s as KafkaE2E,J as ReceiveOperationWithNothing,S as SendOperationTwoBindings,l as SendOperationWithBindingsKafkaWithNothing,b as SendOperationWithBindingsKafkaWithObjectProps,y as SendOperationWithBindingsKafkaWithOnlyPrimitiveProps,f as SendOperationWithBindingsKafkaWithSchemaProps,i as SendOperationWithDescription,w as SendOperationWithDescriptionAndBindingsWithNothing,K as SendOperationWithDescriptionAndMessageWithNothing,u as SendOperationWithDescriptionAndRootLevelChannelWithNothing,I as SendOperationWithMessageWithBindingsWithNothing,C as SendOperationWithMessageWithBindingsWithObjectProps,V as SendOperationWithMessageWithBindingsWithPrimitiveProps,P as SendOperationWithMessageWithBindingsWithSchemaProps,k as SendOperationWithMessageWithDescription,R as SendOperationWithMessageWithDescriptionAndBindingWithNothing,H as SendOperationWithMessageWithDescriptionAndHeaders,F as SendOperationWithMessageWithDescriptionAndPayload,M as SendOperationWithMessageWithName,W as SendOperationWithMessageWithNameAndDescription,N as SendOperationWithMessageWithNameAndTitleAndDescription,v as SendOperationWithMessageWithNothing,j as SendOperationWithMessageWithObjectiveHeaders,$ as SendOperationWithMessageWithObjectiveHeadersAndPayload,L as SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload,D as SendOperationWithMessageWithObjectivePayload,O as SendOperationWithMessageWithPrimitiveHeaders,E as SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload,B as SendOperationWithMessageWithPrimitiveHeadersAndPayload,T as SendOperationWithMessageWithPrimitivePayload,x as SendOperationWithMessageWithTitle,A as SendOperationWithMessageWithTitleAndDescription,_ as SendOperationWithMessageWithTwoBindings,G as SendOperationWithMinimalOverallStructure,t as SendOperationWithNothing,m as SendOperationWithRootLevelChannelWithBindingWithNothing,c as SendOperationWithRootLevelChannelWithDescription,h as SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing,r as SendOperationWithRootLevelChannelWithNothing,p as SendOperationWithRootLevelChannelWithTitle,d as SendOperationWithRootLevelChannelWithTitleAndDescription,g as SendOperationWithRootLevelChannelWithTwoBindings,a as SendOperationWithTitle,o as SendOperationWithTitleAndDescription,q as SendOperationWithTwoMessagesWithNames,n as Test,_s as __namedExportsOrder,Ps as default};
