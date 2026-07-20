import{j as K}from"./_commonjs-dynamic-modules-6308e768.js";import{a as L}from"./AsyncApiOperationViewer-b8531142.js";import{c as B}from"./parse-yaml-source-cd2e19a5.js";import{c as D,a as F,b as R,d as V}from"./async-api-diffs-utils-0f3f13c5.js";import"./index-f46741a2.js";import"./UxBadge-ba9cc67b.js";import"./DdlTableViewer-31a9c990.js";import"./index-bd7f368d.js";import"./DdlTableDiffsViewer-446778d6.js";/* empty css              */import"./GraphQLOperationDiffViewer-ae9cc0ec.js";import"./GraphPropNodeViewer-24ca20d4.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-08bd138c.js";import"./public-api-d6a34651.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-23ecfce1.js";const Y=`asyncapi: 3.0.0
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
`,G=`asyncapi: 3.0.0
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
`,N=`asyncapi: 3.0.0
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
`,U=`asyncapi: 3.0.0
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
`,W=`asyncapi: 3.0.0
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
`,X=`asyncapi: 3.0.0
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
`,Z=`asyncapi: 3.0.0
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
`,ee=`asyncapi: 3.0.0
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
`,ne=`asyncapi: 3.0.0
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
`,te=`asyncapi: 3.0.0
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
`,re=Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/before.yaml":Y,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/before.yaml":G,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/before.yaml":N,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/before.yaml":z,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/before.yaml":H,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/before.yaml":J,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/before.yaml":Q,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/before.yaml":U}),oe=Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/after.yaml":W,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/after.yaml":X,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/after.yaml":Z,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/after.yaml":ee,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/after.yaml":ne,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/after.yaml":se,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/after.yaml":ae,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/after.yaml":te}),me=B(re,oe),pe=D(me),k=({beforeYaml:n,afterYaml:c})=>K.jsx(L,{...de(n,c)}),xe={title:"Async API Diffs Suite/Channel Parameters Samples",component:k,argTypes:F},ie="sendOperation",ce="TestMessage",de=(n,c)=>R(n,c,{operationKey:ie,messageKey:ce}),le=V(k,pe,"message-channel"),e=n=>le(n),s=e("1-channel-parameters-two-added"),a=e("2-channel-parameters-two-removed"),t=e("3-channel-parameters-second-added"),r=e("4-channel-parameters-second-removed"),o=e("5-channel-parameters-key-renamed"),m=e("6-channel-parameters-fields-added"),p=e("7-channel-parameters-fields-removed"),i=e("8-channel-parameters-fields-changed");var d,l,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:'createCaseStory("1-channel-parameters-two-added")',...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("2-channel-parameters-two-removed")',...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var _,T,M;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("3-channel-parameters-second-added")',...(M=(T=t.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var P,u,$;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("4-channel-parameters-second-removed")',...($=(u=r.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var v,C,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("5-channel-parameters-key-renamed")',...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var b,S,O;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("6-channel-parameters-fields-added")',...(O=(S=m.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var j,I,x;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("7-channel-parameters-fields-removed")',...(x=(I=p.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var q,w,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("8-channel-parameters-fields-changed")',...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const qe=["Case_1_channel_parameters_two_added","Case_2_channel_parameters_two_removed","Case_3_channel_parameters_second_added","Case_4_channel_parameters_second_removed","Case_5_channel_parameters_key_renamed","Case_6_channel_parameters_fields_added","Case_7_channel_parameters_fields_removed","Case_8_channel_parameters_fields_changed"];export{s as Case_1_channel_parameters_two_added,a as Case_2_channel_parameters_two_removed,t as Case_3_channel_parameters_second_added,r as Case_4_channel_parameters_second_removed,o as Case_5_channel_parameters_key_renamed,m as Case_6_channel_parameters_fields_added,p as Case_7_channel_parameters_fields_removed,i as Case_8_channel_parameters_fields_changed,qe as __namedExportsOrder,xe as default};
