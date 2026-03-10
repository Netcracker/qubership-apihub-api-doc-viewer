import{A as k}from"./AsyncApiOperationViewer-912521b7.js";import{p as q,T as z}from"./preprocess-fc80085e.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-0992e4f2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-35d32af0.js";import"./GraphQLOperationDiffViewer-f3229714.js";const se={title:"Async API Suite/Message",component:k,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},H="send-operation",u="test-channel",g="MessageID",e=({message:p,channel:L={},operationType:V="send"})=>({asyncapi:"3.0.0",operations:{[H]:{action:V,channel:{$ref:`#/channels/${u}`},messages:[{$ref:`#/channels/${u}/messages/${g}`}]}},channels:{[u]:{...L,messages:{[g]:p}}}}),s=p=>({args:{source:q({source:p}),operationKey:H,messageKey:g,referenceNamePropertyKey:z}}),r=s(e({message:{}})),a=s(e({message:{},operationType:"receive"})),t=s(e({message:{name:"Message Name"}})),o=s(e({message:{title:"Message Title"}})),c=s(e({message:{name:"Message Name",title:"Message Title"}})),n=s(e({message:{},channel:{address:"test.address"}})),m=s(e({message:{description:"Message description"},channel:{address:"test.address"}})),d=s(e({message:{summary:"Message summary"},channel:{address:"test.address"}})),i=s(e({message:{description:"Channel description",summary:"Channel summary"},channel:{address:"test.address"}}));var l,S,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`createStory(createSource({
  message: {}
}))`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var M,A,h;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(createSource({
  message: {},
  operationType: 'receive'
}))`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var T,E,N;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  }
}))`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,I,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  message: {
    title: "Message Title"
  }
}))`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var f,C,D;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name",
    title: "Message Title"
  }
}))`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var K,O,P;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}))`,...(P=(O=n.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,v,Y;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description"
  },
  channel: {
    address: "test.address"
  }
}))`,...(Y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:Y.source}}};var x,b,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(createSource({
  message: {
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,F,G;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Channel description",
    summary: "Channel summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const re=["MessageIdSend","MessageIdReceive","Name","Title","NameTitle","Address","AddressDescription","AddressSummary","AddressDescriptionSummary"];export{n as Address,m as AddressDescription,i as AddressDescriptionSummary,d as AddressSummary,a as MessageIdReceive,r as MessageIdSend,t as Name,c as NameTitle,o as Title,re as __namedExportsOrder,se as default};
