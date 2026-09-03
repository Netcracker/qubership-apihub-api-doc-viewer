import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{f as ee,p as te}from"./AsyncApiOperationViewer-MuAs1xMh.js";import{i as ne,r as re}from"./parse-yaml-source-D28NqUrf.js";import{a as ie,i as ae,n as oe,r as se,t as ce}from"./async-api-diffs-utils-D7il5i1G.js";var n;function r(){return(r=e((()=>{n=`asyncapi: 3.0.0
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
`})))()}var i;function a(){return(a=e((()=>{i=`asyncapi: 3.0.0
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
`})))()}var o;function s(){return(s=e((()=>{o=`asyncapi: 3.0.0
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
`})))()}var c;function l(){return(l=e((()=>{c=`asyncapi: 3.0.0
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
`})))()}var u;function d(){return(d=e((()=>{u=`asyncapi: 3.0.0
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
`})))()}var f;function p(){return(p=e((()=>{f=`asyncapi: 3.0.0
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
`})))()}var m;function h(){return(h=e((()=>{m=`asyncapi: 3.0.0
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
`})))()}var g;function _(){return(_=e((()=>{g=`asyncapi: 3.0.0
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
`})))()}var v;function y(){return(y=e((()=>{v=`asyncapi: 3.0.0
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
`})))()}var b;function x(){return(x=e((()=>{b=`asyncapi: 3.0.0
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
`})))()}var S;function C(){return(C=e((()=>{S=`asyncapi: 3.0.0
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
`})))()}var w;function T(){return(T=e((()=>{w=`asyncapi: 3.0.0
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
`})))()}var E;function D(){return(D=e((()=>{E=`asyncapi: 3.0.0
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
`})))()}var O;function k(){return(k=e((()=>{O=`asyncapi: 3.0.0
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
`})))()}var A;function j(){return(j=e((()=>{A=`asyncapi: 3.0.0
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
`})))()}var M;function N(){return(N=e((()=>{M=`asyncapi: 3.0.0
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
`})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{r(),a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),te(),ne(),ie(),P=t(),F=re(Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/before.yaml":n,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/before.yaml":i,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/before.yaml":o,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/before.yaml":c,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/before.yaml":u,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/before.yaml":f,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/before.yaml":m,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/before.yaml":g}),Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/after.yaml":v,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/after.yaml":b,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/after.yaml":S,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/after.yaml":w,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/after.yaml":E,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/after.yaml":O,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/after.yaml":A,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/after.yaml":M})),I=se(F),L=({beforeYaml:e,afterYaml:t})=>(0,P.jsx)(ee,{...V(e,t)}),R={title:`Async API Diffs Suite/Channel Parameters Samples`,component:L,argTypes:ce},z=`sendOperation`,B=`TestMessage`,V=(e,t)=>ae(e,t,{operationKey:z,messageKey:B}),H=oe(L,I,`message-channel`),U=e=>H(e),W=U(`1-channel-parameters-two-added`),G=U(`2-channel-parameters-two-removed`),K=U(`3-channel-parameters-second-added`),q=U(`4-channel-parameters-second-removed`),J=U(`5-channel-parameters-key-renamed`),Y=U(`6-channel-parameters-fields-added`),X=U(`7-channel-parameters-fields-removed`),Z=U(`8-channel-parameters-fields-changed`),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("1-channel-parameters-two-added")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("2-channel-parameters-two-removed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("3-channel-parameters-second-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("4-channel-parameters-second-removed")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("5-channel-parameters-key-renamed")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("6-channel-parameters-fields-added")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("7-channel-parameters-fields-removed")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("8-channel-parameters-fields-changed")`,...Z.parameters?.docs?.source}}},Q=[`Case_1_channel_parameters_two_added`,`Case_2_channel_parameters_two_removed`,`Case_3_channel_parameters_second_added`,`Case_4_channel_parameters_second_removed`,`Case_5_channel_parameters_key_renamed`,`Case_6_channel_parameters_fields_added`,`Case_7_channel_parameters_fields_removed`,`Case_8_channel_parameters_fields_changed`]})))()}$();export{W as Case_1_channel_parameters_two_added,G as Case_2_channel_parameters_two_removed,K as Case_3_channel_parameters_second_added,q as Case_4_channel_parameters_second_removed,J as Case_5_channel_parameters_key_renamed,Y as Case_6_channel_parameters_fields_added,X as Case_7_channel_parameters_fields_removed,Z as Case_8_channel_parameters_fields_changed,Q as __namedExportsOrder,R as default};