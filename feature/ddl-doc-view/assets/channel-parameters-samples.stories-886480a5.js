import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{a as L}from"./AsyncApiOperationViewer-b0a1d1b3.js";import{c as Y}from"./parse-yaml-source-2575e8ef.js";import{c as B,a as F,b as V}from"./async-api-diffs-utils-8241dacb.js";import"./index-f46741a2.js";import"./UxBadge-a1900fc0.js";import"./DdlTableViewer-8c8b9736.js";import"./GraphPropNodeViewer-aec7c268.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-a4fafa57.js";import"./GraphQLOperationViewer-4894dd10.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-9ff28593.js";const D=`asyncapi: 3.0.0
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
`,R=`asyncapi: 3.0.0
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
`,G=`asyncapi: 3.0.0
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
`,N=`asyncapi: 3.0.0
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
`,z=`asyncapi: 3.0.0
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
`,H=`asyncapi: 3.0.0
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
`,J=`asyncapi: 3.0.0
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
`,Q=`asyncapi: 3.0.0
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
`,U=`asyncapi: 3.0.0
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
`,W=`asyncapi: 3.0.0
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
`,X=`asyncapi: 3.0.0
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
`,Z=`asyncapi: 3.0.0
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
`,ee=`asyncapi: 3.0.0
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
`,ne=`asyncapi: 3.0.0
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
`,se=`asyncapi: 3.0.0
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
`,ae=`asyncapi: 3.0.0
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
`,te=Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/before.yaml":D,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/before.yaml":R,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/before.yaml":G,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/before.yaml":N,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/before.yaml":z,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/before.yaml":H,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/before.yaml":J,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/before.yaml":Q}),re=Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/after.yaml":U,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/after.yaml":W,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/after.yaml":X,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/after.yaml":Z,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/after.yaml":ee,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/after.yaml":ne,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/after.yaml":se,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/after.yaml":ae}),oe=Y(te,re),me=B(oe),K=({caseId:n})=>{const s=me[n];return s?d.jsx(L,{...ce(s.beforeYaml,s.afterYaml)}):d.jsxs("div",{children:["Sample case not found: ",n]})},Se={title:"Async API Diffs Suite/Channel Parameters Samples",component:K},pe="sendOperation",ie="TestMessage",ce=(n,s)=>F(n,s,{operationKey:pe,messageKey:ie}),de=V(K,"message-channel"),e=n=>de(n),a=e("1-channel-parameters-two-added"),t=e("2-channel-parameters-two-removed"),r=e("3-channel-parameters-second-added"),o=e("4-channel-parameters-second-removed"),m=e("5-channel-parameters-key-renamed"),p=e("6-channel-parameters-fields-added"),i=e("7-channel-parameters-fields-removed"),c=e("8-channel-parameters-fields-changed");var l,g,f;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("1-channel-parameters-two-added")',...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("2-channel-parameters-two-removed")',...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var M,T,P;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("3-channel-parameters-second-added")',...(P=(T=r.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var u,$,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("4-channel-parameters-second-removed")',...(v=($=o.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var C,b,A;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("5-channel-parameters-key-renamed")',...(A=(b=m.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var S,O,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("6-channel-parameters-fields-added")',...(j=(O=p.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var I,x,q;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("7-channel-parameters-fields-removed")',...(q=(x=i.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var w,E,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("8-channel-parameters-fields-changed")',...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const Oe=["Case_1_channel_parameters_two_added","Case_2_channel_parameters_two_removed","Case_3_channel_parameters_second_added","Case_4_channel_parameters_second_removed","Case_5_channel_parameters_key_renamed","Case_6_channel_parameters_fields_added","Case_7_channel_parameters_fields_removed","Case_8_channel_parameters_fields_changed"];export{a as Case_1_channel_parameters_two_added,t as Case_2_channel_parameters_two_removed,r as Case_3_channel_parameters_second_added,o as Case_4_channel_parameters_second_removed,m as Case_5_channel_parameters_key_renamed,p as Case_6_channel_parameters_fields_added,i as Case_7_channel_parameters_fields_removed,c as Case_8_channel_parameters_fields_changed,Oe as __namedExportsOrder,Se as default};
