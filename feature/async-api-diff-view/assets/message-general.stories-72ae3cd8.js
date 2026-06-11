import{A as V}from"./AsyncApiOperationViewer-820c6652.js";import{w as q,u as z}from"./index-d5b0668c.js";import{p as J,T as Q}from"./preprocess-8c44857f.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-0794fe6e.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-8336d8b6.js";import"./GraphQLOperationViewer-90b591d4.js";import"./index-442a5f79.js";const ce={title:"Async API Suite/Message",component:V,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},H="send-operation",g="test-channel",l="MessageID",e=({message:p,channel:u={},operationType:S="send"})=>({asyncapi:"3.0.0",operations:{[H]:{action:S,channel:{$ref:`#/channels/${g}`},messages:[{$ref:`#/channels/${g}/messages/${l}`}]}},channels:{[g]:{...u,messages:{[l]:p}}}}),s=p=>({args:{devMode:!0,source:J({source:p}),operationKeys:{operationKey:H,messageKey:l},referenceNamePropertyKey:Q},play:async({canvasElement:u})=>{const L=await q(u).findAllByTestId("message-content");await z.click(L[0])}}),r=s(e({message:{}})),a=s(e({message:{},operationType:"receive"})),t=s(e({message:{name:"Message Name"}})),o=s(e({message:{title:"Message Title"}})),c=s(e({message:{name:"Message Name",title:"Message Title"}})),n=s(e({message:{},channel:{address:"test.address"}})),m=s(e({message:{description:"Message description"},channel:{address:"test.address"}})),d=s(e({message:{summary:"Message summary"},channel:{address:"test.address"}})),i=s(e({message:{description:"Message description",summary:"Message summary"},channel:{address:"test.address"}}));var y,M,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(createSource({
  message: {}
}))`,...(A=(M=r.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var T,E,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`createStory(createSource({
  message: {},
  operationType: 'receive'
}))`,...(h=(E=a.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var N,f,v;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  }
}))`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var I,_,K;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`createStory(createSource({
  message: {
    title: "Message Title"
  }
}))`,...(K=(_=o.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var R,D,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name",
    title: "Message Title"
  }
}))`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var O,P,$;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}))`,...($=(P=n.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var Y,b,x;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description"
  },
  channel: {
    address: "test.address"
  }
}))`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,j,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`createStory(createSource({
  message: {
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var B,F,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description",
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ne=["MessageIdSend","MessageIdReceive","Name","Title","NameTitle","Address","AddressDescription","AddressSummary","AddressDescriptionSummary"];export{n as Address,m as AddressDescription,i as AddressDescriptionSummary,d as AddressSummary,a as MessageIdReceive,r as MessageIdSend,t as Name,c as NameTitle,o as Title,ne as __namedExportsOrder,ce as default};
