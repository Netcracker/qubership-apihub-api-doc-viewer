import{A as Z}from"./AsyncApiOperationViewer-09e22ec6.js";import{w as ee,u as se}from"./index-d5b0668c.js";import{p as ae,T as re}from"./preprocess-23ecfce1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-ba9cc67b.js";import"./DdlTableViewer-907af8b6.js";import"./index-eadb8505.js";import"./DdlTableDiffsViewer-e8d390cc.js";/* empty css              */import"./GraphQLOperationDiffViewer-ae9cc0ec.js";import"./GraphPropNodeViewer-24ca20d4.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-08bd138c.js";import"./index-442a5f79.js";const Ae={title:"Async API Suite/Message",component:Z,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},U="send-operation",y="test-channel",M="MessageID",e=({message:u,channel:l={},operationType:S="send"})=>({asyncapi:"3.0.0",operations:{[U]:{action:S,channel:{$ref:`#/channels/${y}`},messages:[{$ref:`#/channels/${y}/messages/${M}`}]}},channels:{[y]:{...l,messages:{[M]:u}}}}),s=(u,l={})=>({args:{devMode:!0,source:ae({source:u}),operationKeys:{operationKey:U,messageKey:M},referenceNamePropertyKey:re,noHeading:l.noHeading??!1},play:async({canvasElement:S})=>{const X=await ee(S).findAllByTestId("message-content");await se.click(X[0])}}),a=s(e({message:{}})),r=s(e({message:{},operationType:"receive"})),t=s(e({message:{name:"Message Name"}})),n=s(e({message:{title:"Message Title"}})),o=s(e({message:{name:"Message Name",title:"Message Title"}})),c=s(e({message:{},channel:{address:"test.address"}})),m=s(e({message:{description:"Message description"},channel:{address:"test.address"}})),d=s(e({message:{summary:"Message summary"},channel:{address:"test.address"}})),i=s(e({message:{description:"Message description",summary:"Message summary"},channel:{address:"test.address"}})),p=s(e({message:{name:"Message Name"},channel:{address:"test.address"}}),{noHeading:!0}),g=s(e({message:{},channel:{address:"test.address"}}),{noHeading:!0});var N,h,A;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`createStory(createSource({
  message: {}
}))`,...(A=(h=a.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var T,E,H;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`createStory(createSource({
  message: {},
  operationType: 'receive'
}))`,...(H=(E=r.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var f,v,I;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  }
}))`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var _,K,R;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  message: {
    title: "Message Title"
  }
}))`,...(R=(K=n.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var D,w,O;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name",
    title: "Message Title"
  }
}))`,...(O=(w=o.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var P,$,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}))`,...(W=($=c.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var Y,b,x;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var L,V,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  },
  channel: {
    address: "test.address"
  }
}), {
  noHeading: true
})`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,J,Q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}), {
  noHeading: true
})`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Te=["MessageIdSend","MessageIdReceive","Name","Title","NameTitle","Address","AddressDescription","AddressSummary","AddressDescriptionSummary","NoHeadingWithName","NoHeadingWithoutName"];export{c as Address,m as AddressDescription,i as AddressDescriptionSummary,d as AddressSummary,r as MessageIdReceive,a as MessageIdSend,t as Name,o as NameTitle,p as NoHeadingWithName,g as NoHeadingWithoutName,n as Title,Te as __namedExportsOrder,Ae as default};
