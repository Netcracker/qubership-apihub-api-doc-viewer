import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{f as ee,p as te}from"./AsyncApiOperationViewer-BZqnVG_y.js";import{i as ne,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{i as re,n as ie,r as ae,t as oe}from"./async-api-diffs-utils-CQF2nQeR.js";var a;function o(){return(o=e((()=>{a=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.static
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var s;function c(){return(c=e((()=>{s=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}.{param2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      param2:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var l;function u(){return(u=e((()=>{l=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var d;function f(){return(f=e((()=>{d=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}.{param2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
      param2:
        description: second parameter
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var p;function m(){return(m=e((()=>{p=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}.{param2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
      param2:
        description: second parameter
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var h;function g(){return(g=e((()=>{h=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
      secondParam:
        location: $message.payload#/id
      thirdParam:
        location: $message.payload#/id
      fourthParam:
        location: $message.payload#/id
      fifthParam:
        location: $message.payload#/id
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var _;function v(){return(v=e((()=>{_=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.header#/id
      secondParam:
        description: second parameter
        location: $message.payload#/id
      thirdParam:
        location: $message.payload#/id
        enum:
          - alpha
          - beta
      fourthParam:
        location: $message.payload#/id
        default: default-value
      fifthParam:
        location: $message.payload#/id
        examples:
          - example-1
          - example-2
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var y;function b(){return(b=e((()=>{y=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
      secondParam:
        description: second parameter
      thirdParam:
        enum:
          - alpha
          - beta
      fourthParam:
        default: default-value
      fifthParam:
        examples:
          - example-1
          - example-2
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var x;function S(){return(S=e((()=>{x=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}.{param2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      param2:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var C;function w(){return(w=e((()=>{C=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.static
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var T;function E(){return(E=e((()=>{T=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}.{param2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
      param2:
        description: second parameter
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var D;function O(){return(O=e((()=>{D=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{param1}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      param1:
        description: first parameter
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var k;function A(){return(A=e((()=>{k=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{parameter_1}.{param2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      parameter_1:
        description: first parameter
      param2:
        description: second parameter
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var j;function M(){return(M=e((()=>{j=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.header#/id
      secondParam:
        description: second parameter
        location: $message.payload#/id
      thirdParam:
        location: $message.payload#/id
        enum:
          - alpha
          - beta
      fourthParam:
        location: $message.payload#/id
        default: default-value
      fifthParam:
        location: $message.payload#/id
        examples:
          - example-1
          - example-2
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var N;function P(){return(P=e((()=>{N=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
      secondParam:
        location: $message.payload#/id
      thirdParam:
        location: $message.payload#/id
      fourthParam:
        location: $message.payload#/id
      fifthParam:
        location: $message.payload#/id
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var F;function I(){return(I=e((()=>{F=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}.{thirdParam}.{fourthParam}.{fifthParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.header#/id
      secondParam:
        description: updated second parameter description
      thirdParam:
        enum:
          - alpha
          - gamma
      fourthParam:
        default: changed-default-value
      fifthParam:
        examples:
          - example-1
          - changed-example-2
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),I(),te(),r(),re(),ne(),L=t(),R=i(Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/before.yaml":a,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/before.yaml":s,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/before.yaml":l,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/before.yaml":d,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/before.yaml":p,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/before.yaml":h,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/before.yaml":_,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/before.yaml":y}),Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/after.yaml":x,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/after.yaml":C,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/after.yaml":T,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/after.yaml":D,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/after.yaml":k,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/after.yaml":j,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/after.yaml":N,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/after.yaml":F})),z=n(R),B=({beforeYaml:e,afterYaml:t})=>(0,L.jsx)(ee,{...ae(e,t)}),V={title:`Async API Diffs Suite/Channel Parameters Samples`,component:B,argTypes:oe},H=ie(B,z,`message-channel`),U=e=>H(e),W=U(`1-channel-parameters-two-added`),G=U(`2-channel-parameters-two-removed`),K=U(`3-channel-parameters-second-added`),q=U(`4-channel-parameters-second-removed`),J=U(`5-channel-parameters-key-renamed`),Y=U(`6-channel-parameters-fields-added`),X=U(`7-channel-parameters-fields-removed`),Z=U(`8-channel-parameters-fields-changed`),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("1-channel-parameters-two-added")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("2-channel-parameters-two-removed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("3-channel-parameters-second-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("4-channel-parameters-second-removed")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("5-channel-parameters-key-renamed")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("6-channel-parameters-fields-added")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("7-channel-parameters-fields-removed")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("8-channel-parameters-fields-changed")`,...Z.parameters?.docs?.source}}},Q=[`Case_1_channel_parameters_two_added`,`Case_2_channel_parameters_two_removed`,`Case_3_channel_parameters_second_added`,`Case_4_channel_parameters_second_removed`,`Case_5_channel_parameters_key_renamed`,`Case_6_channel_parameters_fields_added`,`Case_7_channel_parameters_fields_removed`,`Case_8_channel_parameters_fields_changed`]})))()}$();export{W as Case_1_channel_parameters_two_added,G as Case_2_channel_parameters_two_removed,K as Case_3_channel_parameters_second_added,q as Case_4_channel_parameters_second_removed,J as Case_5_channel_parameters_key_renamed,Y as Case_6_channel_parameters_fields_added,X as Case_7_channel_parameters_fields_removed,Z as Case_8_channel_parameters_fields_changed,Q as __namedExportsOrder,V as default};