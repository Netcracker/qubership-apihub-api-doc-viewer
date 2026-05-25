import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{A as f}from"./AsyncApiOperationDiffsViewer-f2605b4c.js";import{b as h,T as u,a as g}from"./preprocess-b6e64697.js";import{c as y,p as S}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-4970e0cf.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-88e93065.js";import"./GraphQLOperationViewer-53452c1e.js";import"./GraphQLOperationDiffViewer-e2e0f4bc.js";import"./js-yaml-71a24e1f.js";const A=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/channels/testChannel/messages/TestMessage'
`,b=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
`,v=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
`,C=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/channels/testChannel/messages/TestMessage'
`,E=Object.assign({"../../../../samples/async-api-diffs/whole-apihub-operation/1.1-message-removed-from-operation,-channel-and-document/before.yaml":A,"../../../../samples/async-api-diffs/whole-apihub-operation/1.2-message-added-to-operation,-channel-and-document/before.yaml":b}),O=Object.assign({"../../../../samples/async-api-diffs/whole-apihub-operation/1.1-message-removed-from-operation,-channel-and-document/after.yaml":v,"../../../../samples/async-api-diffs/whole-apihub-operation/1.2-message-added-to-operation,-channel-and-document/after.yaml":C}),T=y(E,O),M=Object.fromEntries(T.map(e=>[e.caseId,e])),l=({caseId:e})=>{const n=M[e];return n?o.jsx(f,{...P(n.beforeYaml,n.afterYaml)}):o.jsxs("div",{children:["Sample case not found: ",e]})},W={title:"Async API Diffs Suite/Whole Apihub Operation Samples",component:l},j="sendOperation",I="TestMessage",t=e=>S(e),P=(e,n)=>({devMode:!0,mergedSource:h({beforeSource:t(e),afterSource:t(n)}),operationKeys:{operationKey:j,messageKey:I},referenceNamePropertyKey:u,diffMetaKeys:g}),_=e=>({name:e,args:{caseId:e},render:n=>o.jsx(l,{caseId:n.caseId})}),s=_("1.1-message-removed-from-operation,-channel-and-document"),a=_("1.2-message-added-to-operation,-channel-and-document");var r,c,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("1.1-message-removed-from-operation,-channel-and-document")',...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'createCaseStory("1.2-message-added-to-operation,-channel-and-document")',...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const B=["Case_1_1_message_removed_from_operation_channel_and_document","Case_1_2_message_added_to_operation_channel_and_document"];export{s as Case_1_1_message_removed_from_operation_channel_and_document,a as Case_1_2_message_added_to_operation_channel_and_document,B as __namedExportsOrder,W as default};
