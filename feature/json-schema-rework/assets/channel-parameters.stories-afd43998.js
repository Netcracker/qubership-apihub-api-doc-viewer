import{j as B}from"./_commonjs-dynamic-modules-6308e768.js";import{a as D}from"./AsyncApiOperationViewer-bd86394b.js";import{c as F}from"./diffs-samples-cases-91c2d1e6.js";import{a as E,c as R,b as V}from"./async-api-diffs-utils-592897d7.js";import{b as z}from"./sample-cases-8c510854.js";import"./index-f46741a2.js";import"./UxBadge-a3d5708d.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-fae22708.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const G=`asyncapi: 3.0.0
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
`,J=`asyncapi: 3.0.0
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
`,K=`asyncapi: 3.0.0
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
`,W=`asyncapi: 3.0.0
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
`,Y=`asyncapi: 3.0.0
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
`,re=Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/before.yaml":G,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/before.yaml":H,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/before.yaml":J,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/before.yaml":K,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/before.yaml":N,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/before.yaml":Q,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/before.yaml":U,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/before.yaml":W}),oe=Object.assign({"../../../../samples/async-api-diffs/channel-parameters/1-channel-parameters-two-added/after.yaml":X,"../../../../samples/async-api-diffs/channel-parameters/2-channel-parameters-two-removed/after.yaml":Y,"../../../../samples/async-api-diffs/channel-parameters/3-channel-parameters-second-added/after.yaml":Z,"../../../../samples/async-api-diffs/channel-parameters/4-channel-parameters-second-removed/after.yaml":ee,"../../../../samples/async-api-diffs/channel-parameters/5-channel-parameters-key-renamed/after.yaml":ne,"../../../../samples/async-api-diffs/channel-parameters/6-channel-parameters-fields-added/after.yaml":se,"../../../../samples/async-api-diffs/channel-parameters/7-channel-parameters-fields-removed/after.yaml":ae,"../../../../samples/async-api-diffs/channel-parameters/8-channel-parameters-fields-changed/after.yaml":te}),me=F(re,oe),pe=z(me),k=({beforeYaml:i,afterYaml:L})=>B.jsx(D,{...R(i,L)}),xe={title:"Async API Diffs Suite/Channel Parameters Samples",component:k,argTypes:E},ie=V(k,pe,"message-channel"),e=i=>ie(i),n=e("1-channel-parameters-two-added"),s=e("2-channel-parameters-two-removed"),a=e("3-channel-parameters-second-added"),t=e("4-channel-parameters-second-removed"),r=e("5-channel-parameters-key-renamed"),o=e("6-channel-parameters-fields-added"),m=e("7-channel-parameters-fields-removed"),p=e("8-channel-parameters-fields-changed");var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("1-channel-parameters-two-added")',...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("2-channel-parameters-two-removed")',...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,_,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("3-channel-parameters-second-added")',...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var M,P,u;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("4-channel-parameters-second-removed")',...(u=(P=t.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};var $,v,C;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:'createCaseStory("5-channel-parameters-key-renamed")',...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,A,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("6-channel-parameters-fields-added")',...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var j,O,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("7-channel-parameters-fields-removed")',...(I=(O=m.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var x,q,w;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("8-channel-parameters-fields-changed")',...(w=(q=p.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const qe=["Case_1_channel_parameters_two_added","Case_2_channel_parameters_two_removed","Case_3_channel_parameters_second_added","Case_4_channel_parameters_second_removed","Case_5_channel_parameters_key_renamed","Case_6_channel_parameters_fields_added","Case_7_channel_parameters_fields_removed","Case_8_channel_parameters_fields_changed"];export{n as Case_1_channel_parameters_two_added,s as Case_2_channel_parameters_two_removed,a as Case_3_channel_parameters_second_added,t as Case_4_channel_parameters_second_removed,r as Case_5_channel_parameters_key_renamed,o as Case_6_channel_parameters_fields_added,m as Case_7_channel_parameters_fields_removed,p as Case_8_channel_parameters_fields_changed,qe as __namedExportsOrder,xe as default};
