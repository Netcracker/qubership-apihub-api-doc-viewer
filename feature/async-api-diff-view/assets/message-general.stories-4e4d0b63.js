import{A as k}from"./AsyncApiOperationViewer-60c23ed4.js";import{p as q,T as z}from"./preprocess-442fc617.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-74f48742.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a40cc735.js";import"./GraphQLOperationDiffViewer-e155066c.js";const se={title:"Async API Suite/Message",component:k,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},H="send-operation",u="test-channel",g="MessageID",e=({message:p,channel:L={},operationType:V="send"})=>({asyncapi:"3.0.0",operations:{[H]:{action:V,channel:{$ref:`#/channels/${u}`},messages:[{$ref:`#/channels/${u}/messages/${g}`}]}},channels:{[u]:{...L,messages:{[g]:p}}}}),s=p=>({args:{devMode:!0,source:q({source:p}),operationKeys:{operationKey:H,messageKey:g},referenceNamePropertyKey:z}}),r=s(e({message:{}})),a=s(e({message:{},operationType:"receive"})),t=s(e({message:{name:"Message Name"}})),o=s(e({message:{title:"Message Title"}})),c=s(e({message:{name:"Message Name",title:"Message Title"}})),n=s(e({message:{},channel:{address:"test.address"}})),m=s(e({message:{description:"Message description"},channel:{address:"test.address"}})),d=s(e({message:{summary:"Message summary"},channel:{address:"test.address"}})),i=s(e({message:{description:"Message description",summary:"Message summary"},channel:{address:"test.address"}}));var S,l,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`createStory(createSource({
  message: {}
}))`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var M,A,T;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(createSource({
  message: {},
  operationType: 'receive'
}))`,...(T=(A=a.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var E,N,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  }
}))`,...(h=(N=t.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var _,I,K;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  message: {
    title: "Message Title"
  }
}))`,...(K=(I=o.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var R,f,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name",
    title: "Message Title"
  }
}))`,...(D=(f=c.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var v,O,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}))`,...(P=(O=n.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,Y,x;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description"
  },
  channel: {
    address: "test.address"
  }
}))`,...(x=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var C,b,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`createStory(createSource({
  message: {
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,F,G;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description",
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const re=["MessageIdSend","MessageIdReceive","Name","Title","NameTitle","Address","AddressDescription","AddressSummary","AddressDescriptionSummary"];export{n as Address,m as AddressDescription,i as AddressDescriptionSummary,d as AddressSummary,a as MessageIdReceive,r as MessageIdSend,t as Name,c as NameTitle,o as Title,re as __namedExportsOrder,se as default};
