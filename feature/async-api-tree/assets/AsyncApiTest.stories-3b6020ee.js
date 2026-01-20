import{A as nt}from"./AsyncApiOperationViewer-ab165f62.js";import{p as e}from"./preprocess-3aefe0c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9f5e4455.js";import"./index-415bee12.js";import"./JsoViewer-346cab60.js";import"./GraphQLOperationViewer-bba74874.js";import"./GraphQLOperationDiffViewer-56b29068.js";const gt={title:"Async Api Viewer",component:nt,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},s={args:{source:{}}},st={asyncapi:"3.0.0",info:{title:"example-event-service",version:"1.0.0","x-generator":"springwolf"},defaultContentType:"application/json",servers:{"kafka-main":{host:"kafka-host",protocol:"kafka"}},channels:{"customer-change-topic":{address:"customer-change-topic",description:"Channel for customer change notifications",messages:{BaseEventMessage:{$ref:"#/components/messages/BaseEventMessage"}},servers:[{$ref:"#/servers/kafka-main"}],bindings:{},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},operations:{"customer-change-topic_send_BaseEvent":{action:"send",channel:{$ref:"#/channels/customer-change-topic"},title:"Customer change topic send",description:"Send events about Customer's data changes",bindings:{kafka:{bindingVersion:"0.5.0"}},messages:[{$ref:"#/channels/customer-change-topic/messages/BaseEventMessage"}],"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},components:{schemas:{HeadersExample:{title:"HeadersExample",type:"object",properties:{"X-Idempotency-Key":{type:"string"}},examples:[{"X-Idempotency-Key":"string"}]},BaseEvent:{title:"BaseEvent",type:"object",properties:{currentInstance:{type:"object",description:"New data state"},currentModelVersion:{type:"integer",description:"Model Version",format:"int32"},previousInstance:{type:"object",description:"Previous data state"},resourceAction:{type:"string",description:"Resource Action"},resourceType:{type:"string",description:"Resource Type"}},description:"Base event to describe Customer's data changes",examples:[{currentInstance:{},currentModelVersion:0,previousInstance:{},resourceAction:"string",resourceType:"string"}],required:["currentInstance","currentModelVersion","previousInstance","resourceAction","resourceType"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"},payload:{$ref:"#/components/schemas/BaseEvent"},description:"Base event to describe Customer's data changes",name:"BaseEventMessage",title:"BaseEvent",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,arr:[1,2,3],obj:{key:"value"},sch:{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10},bbb:{type:"integer",description:"BBB",minimum:1,maximum:100},ccc:{type:"boolean",description:"CCC",default:!0},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"number",description:"Number",minimum:1,maximum:100},{type:"boolean",description:"Boolean",default:!0}]}}},nestedObj:{obj:{aaa:1234,bbb:!0,empty:null,arr:[1,2,3],sch:{type:"array",items:{type:"string",description:"Array item",minLength:1,maxLength:10}},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10}}}]}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}}}},a={args:{source:e({source:st}),operationName:"customer-change-topic_send_BaseEvent",operationType:"send"}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-nothing":{action:"send"}}}}),operationName:"send-operation-with-nothing",operationType:"send"}},i={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title":{action:"send",title:"Send Operation With Title"}}}}),operationName:"send-operation-with-title",operationType:"send"}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description":{action:"send",description:"Description of Send Operation With Description"}}}}),operationName:"send-operation-with-description",operationType:"send"}},r={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title-and-description":{action:"send",title:"Send Operation With Title And Description",description:"Description of Send Operation With Title And Description"}}}}),operationName:"send-operation-with-title-and-description",operationType:"send"}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-root-level-channel-with-nothing",operationType:"send"}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title",operationType:"send"}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-description",operationType:"send"}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title-and-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title-and-description",operationType:"send"}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-nothing",operationType:"send"}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description-and-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-description-and-binding-with-nothing",operationType:"send"}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-two-bindings":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-two-bindings",operationType:"send"}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-root-level-channel-with-nothing":{action:"send",description:"Description of Send Operation With Description And Root Level Channel With Nothing",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-description-and-root-level-channel-with-nothing",operationType:"send"}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-bindings-kafka",operationType:"send"}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-only-primitive-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,empty:null}}}}}}),operationName:"send-operation-with-bindings-kafka-with-only-primitive-props",operationType:"send"}},b={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-object-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",num:1111,str:"string",bool:!0,empty:null,obj:{key:"string value"},arr:[1,2,3],complexObj:{nestedObj:{aaa:2222,bbb:!1,ccc:"aaabbb",empty:null,arr:[1,2]}},complexArr:[{aaa:3333,bbb:!0,ccc:"bbbccc",empty:null,arr:[2,3],nestedObj:{aaa:4444,bbb:!1,empty:null,arr:[3,4]}}]}}}}}}),operationName:"send-operation-with-bindings-kafka-with-object-props",operationType:"send"}},S={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-schema-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},nestedStringSch:{stringSch:{type:"string",description:"Nested string schema",minLength:7,maxLength:70}},numberSch:{type:"number",description:"Number schema",minimum:1,maximum:100},nestedNumberSch:{numberSch:{type:"number",description:"Nested number schema",minimum:7,maximum:700}},booleanSch:{type:"boolean",description:"Boolean schema",default:!0},nestedBooleanSch:{booleanSch:{type:"boolean",description:"Nested boolean schema",default:!1}},arraySch:{type:"array",items:{type:"string",description:"Array string item",minLength:1,maxLength:10}},nestedArraySch:{arraySch:{type:"array",description:"Nested array schema",items:{type:"number",description:"Nested array number item",minimum:4,maximum:444}}},objectSch:{type:"object",properties:{aaa:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}},nestedObjectSch:{objectSch:{type:"object",description:"Nested object schema",properties:{aaa:{type:"number",description:"Nested object number property",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10}}}},nestedSchemasInArray:[{type:"string",description:"Nested string schema in array",minLength:1,maxLength:10},{type:"number",description:"Nested number schema in array",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10},{type:"boolean",description:"Nested boolean schema in array",default:!0},{type:"object",description:"Nested object schema in array",properties:{aaa:{type:"number",minimum:1}}},{type:"array",description:"Nested array schema in array",items:{type:"integer",maximum:100,multipleOf:10}}]}}}}}}),operationName:"send-operation-with-bindings-kafka-with-schema-props",operationType:"send"}},w={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-two-bindings":{action:"send",bindings:{kafka:{clientId:"order-producer",groupId:"order-processing",bindingVersion:"0.4.0"},amqp:{mandatory:!0,priority:5,deliveryMode:2,expiration:6e4,userId:"svc-order",bindingVersion:"0.3.0"}}}}}}),operationName:"send-operation-two-bindings",operationType:"send"}},M={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-bindings-with-nothing":{action:"send",description:"Description of Send Operation With Description And Bindings With Nothing",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-description-and-bindings-with-nothing",operationType:"send"}},x={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{}}}}}),operationName:"send-operation-with-message-with-nothing",operationType:"send"}},v={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message"}}}}}),operationName:"send-operation-with-message-with-name",operationType:"send"}},N={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title",operationType:"send"}},A={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-description",operationType:"send"}},D={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-description",operationType:"send"}},k={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title-and-description",operationType:"send"}},W={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-title-and-description",operationType:"send"}},T={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"string",description:"Primitive header example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers",operationType:"send"}},O={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"object",description:"Headers example",properties:{"X-Idempotency-Key":{type:"string"}}}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-objective-headers",operationType:"send"}},j={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-payload",operationType:"send"}},$={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-payload",operationType:"send"}},B={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-payload",operationType:"send"}},I={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-payload",operationType:"send"}},E={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-objective-payload",operationType:"send"}},L={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-primitive-payload",operationType:"send"}},C={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-nothing",operationType:"send"}},V={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-primitive-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,empty:null}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-primitive-props",operationType:"send"}},P={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-object-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",obj:{key:"string value"},arr:[1,2,3],complexObj:{nestedObj:{aaa:2222,bbb:!1,ccc:"aaabbb",empty:null,arr:[1,2]}},complexArr:[{aaa:3333,bbb:!0,ccc:"bbbccc",empty:null,arr:[2,3],nestedObj:{aaa:4444,bbb:!1,empty:null,arr:[3,4]}}]}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-object-props",operationType:"send"}},_={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-schema-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},nestedStringSch:{stringSch:{type:"string",description:"Nested string schema",minLength:7,maxLength:70}},numberSch:{type:"number",description:"Number schema",minimum:1,maximum:100},nestedNumberSch:{numberSch:{type:"number",description:"Nested number schema",minimum:7,maximum:700}},booleanSch:{type:"boolean",description:"Boolean schema",default:!0},nestedBooleanSch:{booleanSch:{type:"boolean",description:"Nested boolean schema",default:!1}},arraySch:{type:"array",items:{type:"string",description:"Array string item",minLength:1,maxLength:10}},nestedArraySch:{arraySch:{type:"array",description:"Nested array schema",items:{type:"number",description:"Nested array number item",minimum:4,maximum:444}}},objectSch:{type:"object",properties:{aaa:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}},nestedObjectSch:{objectSch:{type:"object",description:"Nested object schema",properties:{aaa:{type:"number",description:"Nested object number property",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10}}}},nestedSchemasInArray:[{type:"string",description:"Nested string schema in array",minLength:1,maxLength:10},{type:"number",description:"Nested number schema in array",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10},{type:"boolean",description:"Nested boolean schema in array",default:!0},{type:"object",description:"Nested object schema in array",properties:{aaa:{type:"number",minimum:1}}},{type:"array",description:"Nested array schema in array",items:{type:"integer",maximum:100,multipleOf:10}}]}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-schema-props",operationType:"send"}},H={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-two-bindings":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}}),operationName:"send-operation-with-message-with-two-bindings",operationType:"send"}},F={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-headers":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{StatusMessage:{description:"Status message description",headers:{$ref:"#/components/schemas/Identifier"}}}}}}),operationName:"send-operation-with-message-with-description-and-headers",operationType:"send"}},R={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-description-and-payload",operationType:"send"}},q={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-binding-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-description-and-binding-with-nothing",operationType:"send"}},K={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages-with-names":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage"},IdentifierMessage:{name:"IdentifierMessage"}}}}}),operationName:"send-operation-with-two-messages-with-names",operationType:"send"}},G={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-message-with-nothing":{action:"send",description:"Description of Send Operation With Description And Message With Nothing",messages:[{$ref:"#/components/messages/StatusMessage"}]}},messages:{StatusMessage:{}}}}),operationName:"send-operation-with-description-and-message-with-nothing",operationType:"send"}},J={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-minimal-overall-structure":{action:"send",description:"Description of Send Operation With Minimal Overall Structure",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/AnotherStatusMessage"}],bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},components:{schemas:{Identifier1:{type:"string",description:"Identifier example",minLength:1,maxLength:10},Status1:{type:"object",description:"Status example",properties:{status:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}}},Identifier2:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example"}}},Status2:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier1"},payload:{$ref:"#/components/schemas/Status1"}},AnotherStatusMessage:{name:"AnotherStatusMessage",description:"Description of Another Status Message",bindings:{kafka:{bindingVersion:"0.2.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.5.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier2"},payload:{$ref:"#/components/schemas/Status2"}}}}}}),operationName:"send-operation-with-minimal-overall-structure",operationType:"send"}},z={args:{source:e({source:{asyncapi:"3.0.0",operations:{"receive-operation-with-nothing":{action:"receive"}}}}),operationName:"receive-operation-with-nothing",operationType:"receive"}},n={"x-first":"first","x-second":[1,2,3],"x-third":{fourth:"fourth"}},X={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-extensions":{action:"send",...n}}}}),operationName:"send-operation-with-operation-extensions",operationType:"send"}},U={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-extensions":{title:"Channel With Extensions",description:"Description of Channel With Extensions",...n}},operations:{"send-operation-with-channel-extensions":{action:"send",channel:{$ref:"#/channels/channel-with-extensions"}}}}}),operationName:"send-operation-with-channel-extensions",operationType:"send"}},Q={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",...n}}}}}),operationName:"send-operation-with-message-extensions",operationType:"send"}},Y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-operation-bindings-extensions":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...n}}}}}}),operationName:"send-operation-with-operation-bindings-extensions",operationType:"send"}},Z={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-bindings-extensions":{title:"Channel With Bindings Extensions",description:"Description of Channel With Bindings Extensions",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...n}}}},operations:{"send-operation-with-channel-bindings-extensions":{action:"send",channel:{$ref:"#/channels/channel-with-bindings-extensions"}}}}}),operationName:"send-operation-with-channel-bindings-extensions",operationType:"send"}},ee={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-bindings-extensions":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",predefinedProperty:"kafka-property",...n}}}}}}}),operationName:"send-operation-with-message-bindings-extensions",operationType:"send"}},ne={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-title":{action:"send"}}}}),operationName:"send-operation-with-default-operation-title",operationType:"send"}},se={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-nothing":{action:"send"}}}}),operationName:"send-operation-with-default-operation-description-if-nothing",operationType:"send"}},ae={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-summary":{action:"send",summary:"Summary of Operation"}}}}),operationName:"send-operation-with-default-operation-description-if-summary",operationType:"send"}},te={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-operation-description-if-summary-and-description":{action:"send",summary:"Summary of Operation",description:"Description of Operation"}}}}),operationName:"send-operation-with-default-operation-description-if-summary-and-description",operationType:"send"}},ie={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-title":{description:"Description of Channel With Default Title"}},operations:{"send-operation-with-default-channel-title":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-title"}}}}}),operationName:"send-operation-with-default-channel-title",operationType:"send"}},oe={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-nothing":{title:"Channel Title"}},operations:{"send-operation-with-default-channel-description-if-nothing":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-nothing"}}}}}),operationName:"send-operation-with-default-channel-description-if-nothing",operationType:"send"}},re={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary":{summary:"Summary of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary",operationType:"send"}},pe={args:{source:e({source:{asyncapi:"3.0.0",channels:{"channel-with-default-channel-description-if-summary-and-description":{summary:"Summary of Channel",description:"Description of Channel"}},operations:{"send-operation-with-default-channel-description-if-summary-and-description":{action:"send",channel:{$ref:"#/channels/channel-with-default-channel-description-if-summary-and-description"}}}}}),operationName:"send-operation-with-default-channel-description-if-summary-and-description",operationType:"send"}},ce={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-nothing",operationType:"send"}},de={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-name":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-name",operationType:"send"}},me={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-title-if-title-and-name":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{title:"Status Message Title",name:"status-message-name",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-title-if-title-and-name",operationType:"send"}},ge={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{title:"Status Message Title"}}}}}),operationName:"send-operation-with-default-message-description-if-nothing",operationType:"send"}},he={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-summary":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{summary:"Summary of Status Message"}}}}}),operationName:"send-operation-with-default-message-description-if-summary",operationType:"send"}},ue={args:{source:e({source:{asyncapi:"3.0.0",operations:{"send-operation-with-default-message-description-if-summary-and-description":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{summary:"Summary of Status Message",description:"Description of Status Message"}}}}}),operationName:"send-operation-with-default-message-description-if-summary-and-description",operationType:"send"}};var le,ye,fe;s.parameters={...s.parameters,docs:{...(le=s.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    source: {}
  }
}`,...(fe=(ye=s.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var be,Se,we;a.parameters={...a.parameters,docs:{...(be=a.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: KAFKA_E2E_SOURCE
    }),
    operationName: 'customer-change-topic_send_BaseEvent',
    operationType: 'send'
  }
}`,...(we=(Se=a.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Me,xe,ve;t.parameters={...t.parameters,docs:{...(Me=t.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(ve=(xe=t.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Ne,Ae,De;i.parameters={...i.parameters,docs:{...(Ne=i.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(De=(Ae=i.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var ke,We,Te;o.parameters={...o.parameters,docs:{...(ke=o.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Te=(We=o.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var Oe,je,$e;r.parameters={...r.parameters,docs:{...(Oe=r.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...($e=(je=r.parameters)==null?void 0:je.docs)==null?void 0:$e.source}}};var Be,Ie,Ee;p.parameters={...p.parameters,docs:{...(Be=p.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(Ie=p.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var Le,Ce,Ve;c.parameters={...c.parameters,docs:{...(Le=c.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Ce=c.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var Pe,_e,He;d.parameters={...d.parameters,docs:{...(Pe=d.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(He=(_e=d.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Fe,Re,qe;m.parameters={...m.parameters,docs:{...(Fe=m.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(qe=(Re=m.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Ke,Ge,Je;g.parameters={...g.parameters,docs:{...(Ke=g.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Je=(Ge=g.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var ze,Xe,Ue;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ue=(Xe=h.parameters)==null?void 0:Xe.docs)==null?void 0:Ue.source}}};var Qe,Ye,Ze;u.parameters={...u.parameters,docs:{...(Qe=u.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=u.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,sn;l.parameters={...l.parameters,docs:{...(en=l.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(sn=(nn=l.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var an,tn,on;y.parameters={...y.parameters,docs:{...(an=y.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(on=(tn=y.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var rn,pn,cn;f.parameters={...f.parameters,docs:{...(rn=f.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(cn=(pn=f.parameters)==null?void 0:pn.docs)==null?void 0:cn.source}}};var dn,mn,gn;b.parameters={...b.parameters,docs:{...(dn=b.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(gn=(mn=b.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,un,ln;S.parameters={...S.parameters,docs:{...(hn=S.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(ln=(un=S.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var yn,fn,bn;w.parameters={...w.parameters,docs:{...(yn=w.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(bn=(fn=w.parameters)==null?void 0:fn.docs)==null?void 0:bn.source}}};var Sn,wn,Mn;M.parameters={...M.parameters,docs:{...(Sn=M.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Mn=(wn=M.parameters)==null?void 0:wn.docs)==null?void 0:Mn.source}}};var xn,vn,Nn;x.parameters={...x.parameters,docs:{...(xn=x.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(Nn=(vn=x.parameters)==null?void 0:vn.docs)==null?void 0:Nn.source}}};var An,Dn,kn;v.parameters={...v.parameters,docs:{...(An=v.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(kn=(Dn=v.parameters)==null?void 0:Dn.docs)==null?void 0:kn.source}}};var Wn,Tn,On;N.parameters={...N.parameters,docs:{...(Wn=N.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(On=(Tn=N.parameters)==null?void 0:Tn.docs)==null?void 0:On.source}}};var jn,$n,Bn;A.parameters={...A.parameters,docs:{...(jn=A.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Bn=($n=A.parameters)==null?void 0:$n.docs)==null?void 0:Bn.source}}};var In,En,Ln;D.parameters={...D.parameters,docs:{...(In=D.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Ln=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Ln.source}}};var Cn,Vn,Pn;k.parameters={...k.parameters,docs:{...(Cn=k.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Pn=(Vn=k.parameters)==null?void 0:Vn.docs)==null?void 0:Pn.source}}};var _n,Hn,Fn;W.parameters={...W.parameters,docs:{...(_n=W.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Fn=(Hn=W.parameters)==null?void 0:Hn.docs)==null?void 0:Fn.source}}};var Rn,qn,Kn;T.parameters={...T.parameters,docs:{...(Rn=T.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Kn=(qn=T.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Gn,Jn,zn;O.parameters={...O.parameters,docs:{...(Gn=O.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(zn=(Jn=O.parameters)==null?void 0:Jn.docs)==null?void 0:zn.source}}};var Xn,Un,Qn;j.parameters={...j.parameters,docs:{...(Xn=j.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(Qn=(Un=j.parameters)==null?void 0:Un.docs)==null?void 0:Qn.source}}};var Yn,Zn,es;$.parameters={...$.parameters,docs:{...(Yn=$.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(es=(Zn=$.parameters)==null?void 0:Zn.docs)==null?void 0:es.source}}};var ns,ss,as;B.parameters={...B.parameters,docs:{...(ns=B.parameters)==null?void 0:ns.docs,source:{originalSource:`{
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
}`,...(as=(ss=B.parameters)==null?void 0:ss.docs)==null?void 0:as.source}}};var ts,is,os;I.parameters={...I.parameters,docs:{...(ts=I.parameters)==null?void 0:ts.docs,source:{originalSource:`{
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
}`,...(os=(is=I.parameters)==null?void 0:is.docs)==null?void 0:os.source}}};var rs,ps,cs;E.parameters={...E.parameters,docs:{...(rs=E.parameters)==null?void 0:rs.docs,source:{originalSource:`{
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
}`,...(cs=(ps=E.parameters)==null?void 0:ps.docs)==null?void 0:cs.source}}};var ds,ms,gs;L.parameters={...L.parameters,docs:{...(ds=L.parameters)==null?void 0:ds.docs,source:{originalSource:`{
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
}`,...(gs=(ms=L.parameters)==null?void 0:ms.docs)==null?void 0:gs.source}}};var hs,us,ls;C.parameters={...C.parameters,docs:{...(hs=C.parameters)==null?void 0:hs.docs,source:{originalSource:`{
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
}`,...(ls=(us=C.parameters)==null?void 0:us.docs)==null?void 0:ls.source}}};var ys,fs,bs;V.parameters={...V.parameters,docs:{...(ys=V.parameters)==null?void 0:ys.docs,source:{originalSource:`{
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
}`,...(bs=(fs=V.parameters)==null?void 0:fs.docs)==null?void 0:bs.source}}};var Ss,ws,Ms;P.parameters={...P.parameters,docs:{...(Ss=P.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
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
}`,...(Ms=(ws=P.parameters)==null?void 0:ws.docs)==null?void 0:Ms.source}}};var xs,vs,Ns;_.parameters={..._.parameters,docs:{...(xs=_.parameters)==null?void 0:xs.docs,source:{originalSource:`{
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
}`,...(Ns=(vs=_.parameters)==null?void 0:vs.docs)==null?void 0:Ns.source}}};var As,Ds,ks;H.parameters={...H.parameters,docs:{...(As=H.parameters)==null?void 0:As.docs,source:{originalSource:`{
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
}`,...(ks=(Ds=H.parameters)==null?void 0:Ds.docs)==null?void 0:ks.source}}};var Ws,Ts,Os;F.parameters={...F.parameters,docs:{...(Ws=F.parameters)==null?void 0:Ws.docs,source:{originalSource:`{
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
}`,...(Os=(Ts=F.parameters)==null?void 0:Ts.docs)==null?void 0:Os.source}}};var js,$s,Bs;R.parameters={...R.parameters,docs:{...(js=R.parameters)==null?void 0:js.docs,source:{originalSource:`{
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
}`,...(Bs=($s=R.parameters)==null?void 0:$s.docs)==null?void 0:Bs.source}}};var Is,Es,Ls;q.parameters={...q.parameters,docs:{...(Is=q.parameters)==null?void 0:Is.docs,source:{originalSource:`{
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
}`,...(Ls=(Es=q.parameters)==null?void 0:Es.docs)==null?void 0:Ls.source}}};var Cs,Vs,Ps;K.parameters={...K.parameters,docs:{...(Cs=K.parameters)==null?void 0:Cs.docs,source:{originalSource:`{
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
}`,...(Ps=(Vs=K.parameters)==null?void 0:Vs.docs)==null?void 0:Ps.source}}};var _s,Hs,Fs;G.parameters={...G.parameters,docs:{...(_s=G.parameters)==null?void 0:_s.docs,source:{originalSource:`{
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
}`,...(Fs=(Hs=G.parameters)==null?void 0:Hs.docs)==null?void 0:Fs.source}}};var Rs,qs,Ks;J.parameters={...J.parameters,docs:{...(Rs=J.parameters)==null?void 0:Rs.docs,source:{originalSource:`{
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
}`,...(Ks=(qs=J.parameters)==null?void 0:qs.docs)==null?void 0:Ks.source}}};var Gs,Js,zs;z.parameters={...z.parameters,docs:{...(Gs=z.parameters)==null?void 0:Gs.docs,source:{originalSource:`{
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
}`,...(zs=(Js=z.parameters)==null?void 0:Js.docs)==null?void 0:zs.source}}};var Xs,Us,Qs;X.parameters={...X.parameters,docs:{...(Xs=X.parameters)==null?void 0:Xs.docs,source:{originalSource:`{
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
}`,...(Qs=(Us=X.parameters)==null?void 0:Us.docs)==null?void 0:Qs.source}}};var Ys,Zs,ea;U.parameters={...U.parameters,docs:{...(Ys=U.parameters)==null?void 0:Ys.docs,source:{originalSource:`{
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
}`,...(ea=(Zs=U.parameters)==null?void 0:Zs.docs)==null?void 0:ea.source}}};var na,sa,aa;Q.parameters={...Q.parameters,docs:{...(na=Q.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(aa=(sa=Q.parameters)==null?void 0:sa.docs)==null?void 0:aa.source}}};var ta,ia,oa;Y.parameters={...Y.parameters,docs:{...(ta=Y.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(ia=Y.parameters)==null?void 0:ia.docs)==null?void 0:oa.source}}};var ra,pa,ca;Z.parameters={...Z.parameters,docs:{...(ra=Z.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ca=(pa=Z.parameters)==null?void 0:pa.docs)==null?void 0:ca.source}}};var da,ma,ga;ee.parameters={...ee.parameters,docs:{...(da=ee.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ga=(ma=ee.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ha,ua,la;ne.parameters={...ne.parameters,docs:{...(ha=ne.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(la=(ua=ne.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var ya,fa,ba;se.parameters={...se.parameters,docs:{...(ya=se.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ba=(fa=se.parameters)==null?void 0:fa.docs)==null?void 0:ba.source}}};var Sa,wa,Ma;ae.parameters={...ae.parameters,docs:{...(Sa=ae.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ma=(wa=ae.parameters)==null?void 0:wa.docs)==null?void 0:Ma.source}}};var xa,va,Na;te.parameters={...te.parameters,docs:{...(xa=te.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Na=(va=te.parameters)==null?void 0:va.docs)==null?void 0:Na.source}}};var Aa,Da,ka;ie.parameters={...ie.parameters,docs:{...(Aa=ie.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(ka=(Da=ie.parameters)==null?void 0:Da.docs)==null?void 0:ka.source}}};var Wa,Ta,Oa;oe.parameters={...oe.parameters,docs:{...(Wa=oe.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Oa=(Ta=oe.parameters)==null?void 0:Ta.docs)==null?void 0:Oa.source}}};var ja,$a,Ba;re.parameters={...re.parameters,docs:{...(ja=re.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Ba=($a=re.parameters)==null?void 0:$a.docs)==null?void 0:Ba.source}}};var Ia,Ea,La;pe.parameters={...pe.parameters,docs:{...(Ia=pe.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(La=(Ea=pe.parameters)==null?void 0:Ea.docs)==null?void 0:La.source}}};var Ca,Va,Pa;ce.parameters={...ce.parameters,docs:{...(Ca=ce.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Pa=(Va=ce.parameters)==null?void 0:Va.docs)==null?void 0:Pa.source}}};var _a,Ha,Fa;de.parameters={...de.parameters,docs:{...(_a=de.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Fa=(Ha=de.parameters)==null?void 0:Ha.docs)==null?void 0:Fa.source}}};var Ra,qa,Ka;me.parameters={...me.parameters,docs:{...(Ra=me.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Ka=(qa=me.parameters)==null?void 0:qa.docs)==null?void 0:Ka.source}}};var Ga,Ja,za;ge.parameters={...ge.parameters,docs:{...(Ga=ge.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(za=(Ja=ge.parameters)==null?void 0:Ja.docs)==null?void 0:za.source}}};var Xa,Ua,Qa;he.parameters={...he.parameters,docs:{...(Xa=he.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
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
}`,...(Qa=(Ua=he.parameters)==null?void 0:Ua.docs)==null?void 0:Qa.source}}};var Ya,Za,et;ue.parameters={...ue.parameters,docs:{...(Ya=ue.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(et=(Za=ue.parameters)==null?void 0:Za.docs)==null?void 0:et.source}}};const ht=["Test","KafkaE2E","SendOperationWithNothing","SendOperationWithTitle","SendOperationWithDescription","SendOperationWithTitleAndDescription","SendOperationWithRootLevelChannelWithNothing","SendOperationWithRootLevelChannelWithTitle","SendOperationWithRootLevelChannelWithDescription","SendOperationWithRootLevelChannelWithTitleAndDescription","SendOperationWithRootLevelChannelWithBindingWithNothing","SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing","SendOperationWithRootLevelChannelWithTwoBindings","SendOperationWithDescriptionAndRootLevelChannelWithNothing","SendOperationWithBindingsKafkaWithNothing","SendOperationWithBindingsKafkaWithOnlyPrimitiveProps","SendOperationWithBindingsKafkaWithObjectProps","SendOperationWithBindingsKafkaWithSchemaProps","SendOperationTwoBindings","SendOperationWithDescriptionAndBindingsWithNothing","SendOperationWithMessageWithNothing","SendOperationWithMessageWithName","SendOperationWithMessageWithTitle","SendOperationWithMessageWithDescription","SendOperationWithMessageWithNameAndDescription","SendOperationWithMessageWithTitleAndDescription","SendOperationWithMessageWithNameAndTitleAndDescription","SendOperationWithMessageWithPrimitiveHeaders","SendOperationWithMessageWithObjectiveHeaders","SendOperationWithMessageWithPrimitivePayload","SendOperationWithMessageWithObjectivePayload","SendOperationWithMessageWithPrimitiveHeadersAndPayload","SendOperationWithMessageWithObjectiveHeadersAndPayload","SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload","SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload","SendOperationWithMessageWithBindingsWithNothing","SendOperationWithMessageWithBindingsWithPrimitiveProps","SendOperationWithMessageWithBindingsWithObjectProps","SendOperationWithMessageWithBindingsWithSchemaProps","SendOperationWithMessageWithTwoBindings","SendOperationWithMessageWithDescriptionAndHeaders","SendOperationWithMessageWithDescriptionAndPayload","SendOperationWithMessageWithDescriptionAndBindingWithNothing","SendOperationWithTwoMessagesWithNames","SendOperationWithDescriptionAndMessageWithNothing","SendOperationWithMinimalOverallStructure","ReceiveOperationWithNothing","ExtensionsInOperation","ExtensionsInChannel","ExtensionsInMessage","ExtensionsInOperationBindings","ExtensionsInChannelBindings","ExtensionsInMessageBindings","DefaultOperationTitle","DefaultOperationDescriptionIfNothing","DefaultOperationDescriptionIfSummary","DefaultOperationDescriptionIfSummaryAndDescription","DefaultChannelTitle","DefaultChannelDescriptionIfNothing","DefaultChannelDescriptionIfSummary","DefaultChannelDescriptionIfSummaryAndDescription","DefaultMessageTitleIfNothing","DefaultMessageTitleIfName","DefaultMessageTitleIfTitleAndName","DefaultMessageDescriptionIfNothing","DefaultMessageDescriptionIfSummary","DefaultMessageDescriptionIfSummaryAndDescription"];export{oe as DefaultChannelDescriptionIfNothing,re as DefaultChannelDescriptionIfSummary,pe as DefaultChannelDescriptionIfSummaryAndDescription,ie as DefaultChannelTitle,ge as DefaultMessageDescriptionIfNothing,he as DefaultMessageDescriptionIfSummary,ue as DefaultMessageDescriptionIfSummaryAndDescription,de as DefaultMessageTitleIfName,ce as DefaultMessageTitleIfNothing,me as DefaultMessageTitleIfTitleAndName,se as DefaultOperationDescriptionIfNothing,ae as DefaultOperationDescriptionIfSummary,te as DefaultOperationDescriptionIfSummaryAndDescription,ne as DefaultOperationTitle,U as ExtensionsInChannel,Z as ExtensionsInChannelBindings,Q as ExtensionsInMessage,ee as ExtensionsInMessageBindings,X as ExtensionsInOperation,Y as ExtensionsInOperationBindings,a as KafkaE2E,z as ReceiveOperationWithNothing,w as SendOperationTwoBindings,y as SendOperationWithBindingsKafkaWithNothing,b as SendOperationWithBindingsKafkaWithObjectProps,f as SendOperationWithBindingsKafkaWithOnlyPrimitiveProps,S as SendOperationWithBindingsKafkaWithSchemaProps,o as SendOperationWithDescription,M as SendOperationWithDescriptionAndBindingsWithNothing,G as SendOperationWithDescriptionAndMessageWithNothing,l as SendOperationWithDescriptionAndRootLevelChannelWithNothing,C as SendOperationWithMessageWithBindingsWithNothing,P as SendOperationWithMessageWithBindingsWithObjectProps,V as SendOperationWithMessageWithBindingsWithPrimitiveProps,_ as SendOperationWithMessageWithBindingsWithSchemaProps,A as SendOperationWithMessageWithDescription,q as SendOperationWithMessageWithDescriptionAndBindingWithNothing,F as SendOperationWithMessageWithDescriptionAndHeaders,R as SendOperationWithMessageWithDescriptionAndPayload,v as SendOperationWithMessageWithName,D as SendOperationWithMessageWithNameAndDescription,W as SendOperationWithMessageWithNameAndTitleAndDescription,x as SendOperationWithMessageWithNothing,O as SendOperationWithMessageWithObjectiveHeaders,I as SendOperationWithMessageWithObjectiveHeadersAndPayload,L as SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload,$ as SendOperationWithMessageWithObjectivePayload,T as SendOperationWithMessageWithPrimitiveHeaders,E as SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload,B as SendOperationWithMessageWithPrimitiveHeadersAndPayload,j as SendOperationWithMessageWithPrimitivePayload,N as SendOperationWithMessageWithTitle,k as SendOperationWithMessageWithTitleAndDescription,H as SendOperationWithMessageWithTwoBindings,J as SendOperationWithMinimalOverallStructure,t as SendOperationWithNothing,g as SendOperationWithRootLevelChannelWithBindingWithNothing,d as SendOperationWithRootLevelChannelWithDescription,h as SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing,p as SendOperationWithRootLevelChannelWithNothing,c as SendOperationWithRootLevelChannelWithTitle,m as SendOperationWithRootLevelChannelWithTitleAndDescription,u as SendOperationWithRootLevelChannelWithTwoBindings,i as SendOperationWithTitle,r as SendOperationWithTitleAndDescription,K as SendOperationWithTwoMessagesWithNames,s as Test,ht as __namedExportsOrder,gt as default};
