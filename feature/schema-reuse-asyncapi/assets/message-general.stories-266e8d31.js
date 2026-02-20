import{A as k}from"./AsyncApiOperationViewer-8635578c.js";import{p as q,T as z}from"./preprocess-477953b5.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-6e707ea9.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";const se={title:"Async API Suite/Message",component:k,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},L="send-operation",g="test-channel",l="MessageID",e=({message:p,channel:u={},operationType:V="send"})=>({asyncapi:"3.0.0",operations:{[L]:{action:V,channel:{$ref:`#/channels/${g}`},messages:[{$ref:`#/channels/${g}/messages/${l}`}]}},channels:{[g]:{...u,messages:{[l]:p}}}}),s=(p,u="send")=>({args:{source:q({source:p}),operationKey:L,operationType:u,messageKey:l,referenceNamePropertyKey:z}}),r=s(e({message:{}})),a=s(e({message:{},operationType:"receive"}),"receive"),t=s(e({message:{name:"Message Name"}})),o=s(e({message:{title:"Message Title"}})),c=s(e({message:{name:"Message Name",title:"Message Title"}})),n=s(e({message:{},channel:{address:"test.address"}})),m=s(e({message:{description:"Message description"},channel:{address:"test.address"}})),d=s(e({message:{summary:"Message summary"},channel:{address:"test.address"}})),i=s(e({message:{description:"Channel description",summary:"Channel summary"},channel:{address:"test.address"}}));var S,y,M;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`createStory(createSource({
  message: {}
}))`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var A,h,T;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`createStory(createSource({
  message: {},
  operationType: 'receive'
}), 'receive')`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var E,N,_;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  }
}))`,...(_=(N=t.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,R,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`createStory(createSource({
  message: {
    title: "Message Title"
  }
}))`,...(f=(R=o.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var v,C,D;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name",
    title: "Message Title"
  }
}))`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var K,O,P;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(x=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var b,j,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`createStory(createSource({
  message: {
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var F,G,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Channel description",
    summary: "Channel summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const re=["MessageIdSend","MessageIdReceive","Name","Title","NameTitle","Address","AddressDescription","AddressSummary","AddressDescriptionSummary"];export{n as Address,m as AddressDescription,i as AddressDescriptionSummary,d as AddressSummary,a as MessageIdReceive,r as MessageIdSend,t as Name,c as NameTitle,o as Title,re as __namedExportsOrder,se as default};
