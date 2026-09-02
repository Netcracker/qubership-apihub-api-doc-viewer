import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./AsyncApiOperationViewer-DEtEsxqY.js";import{a as r,h as i,m as a,r as o}from"./preprocess-BN4irEAr.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{t(),i(),o(),{userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Async API Suite/Message`,component:n,parameters:{},argTypes:{source:{control:`object`}},args:{source:{}}},u=`send-operation`,d=`test-channel`,f=`MessageID`,p=({message:e,channel:t={},operationType:n=`send`})=>({asyncapi:`3.0.0`,operations:{[u]:{action:n,channel:{$ref:`#/channels/${d}`},messages:[{$ref:`#/channels/${d}/messages/${f}`}]}},channels:{[d]:{...t,messages:{[f]:e}}}}),m=(e,t={})=>({args:{devMode:!0,source:r({source:e}),operationKeys:{operationKey:u,messageKey:f},referenceNamePropertyKey:a,noHeading:t.noHeading??!1},play:async({canvasElement:e})=>{let t=await c(e).findAllByTestId(`message-content`);await s.click(t[0])}}),h=m(p({message:{}})),g=m(p({message:{},operationType:`receive`})),_=m(p({message:{name:`Message Name`}})),v=m(p({message:{title:`Message Title`}})),y=m(p({message:{name:`Message Name`,title:`Message Title`}})),b=m(p({message:{},channel:{address:`test.address`}})),x=m(p({message:{description:`Message description`},channel:{address:`test.address`}})),S=m(p({message:{summary:`Message summary`},channel:{address:`test.address`}})),C=m(p({message:{description:`Message description`,summary:`Message summary`},channel:{address:`test.address`}})),w=m(p({message:{name:`Message Name`},channel:{address:`test.address`}}),{noHeading:!0}),T=m(p({message:{},channel:{address:`test.address`}}),{noHeading:!0}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {}
}))`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {},
  operationType: 'receive'
}))`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  }
}))`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    title: "Message Title"
  }
}))`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name",
    title: "Message Title"
  }
}))`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}))`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description"
  },
  channel: {
    address: "test.address"
  }
}))`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description",
    summary: "Message summary"
  },
  channel: {
    address: "test.address"
  }
}))`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    name: "Message Name"
  },
  channel: {
    address: "test.address"
  }
}), {
  noHeading: true
})`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {},
  channel: {
    address: "test.address"
  }
}), {
  noHeading: true
})`,...T.parameters?.docs?.source}}},E=[`MessageIdSend`,`MessageIdReceive`,`Name`,`Title`,`NameTitle`,`Address`,`AddressDescription`,`AddressSummary`,`AddressDescriptionSummary`,`NoHeadingWithName`,`NoHeadingWithoutName`]})))()}D();export{b as Address,x as AddressDescription,C as AddressDescriptionSummary,S as AddressSummary,g as MessageIdReceive,h as MessageIdSend,_ as Name,y as NameTitle,w as NoHeadingWithName,T as NoHeadingWithoutName,v as Title,E as __namedExportsOrder,l as default};