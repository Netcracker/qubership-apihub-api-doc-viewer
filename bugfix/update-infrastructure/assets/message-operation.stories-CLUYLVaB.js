import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./AsyncApiOperationViewer-DEtEsxqY.js";import{a as r,h as i,m as a,p as o,r as s}from"./preprocess-BN4irEAr.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{t(),i(),s(),{userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Async API Suite/Message Operation`,component:n,parameters:{},argTypes:{source:{control:`object`}},args:{source:{}}},d=`OperationID`,f=`ChannelID`,p=`MessageID`,m=({operation:e,operationType:t=`send`})=>({asyncapi:`3.0.0`,operations:{[d]:{action:t,channel:{$ref:`#/channels/${f}`},messages:[{$ref:`#/channels/${f}/messages/${p}`}],...e}},channels:{[f]:{messages:{[p]:{name:`Message Name`}}}}}),h=e=>({args:{devMode:!0,source:r({source:e}),operationKeys:{operationKey:d,messageKey:p},referenceNamePropertyKey:a},play:async({canvasElement:e})=>{let t=await l(e).findAllByTestId(`message-operation`);await c.click(t[0])}}),g=h(m({operation:{}})),_=h(m({operation:{title:`Operation Title`}})),v=h(m({operation:{description:`Operation description`}})),y=h(m({operation:{summary:`Operation summary`}})),b=h(m({operation:{...o}})),x=h(m({operation:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.operation.created`,clientId:`api-doc-viewer-client`}}}})),S=h(m({operation:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.operation.first`},mqtt:{bindingVersion:`0.2.0`,clientId:`mqtt-client-01`}}}})),C=h(m({operation:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.operation.second`},mqtt:{bindingVersion:`0.2.0`,clientId:`mqtt-client-02`}}}})),w=h(m({operation:{description:`Operation description`,summary:`Operation summary`}})),T=h(m({operation:{description:`Operation description`,...o}})),E=h(m({operation:{description:`Operation description`,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.operation.description`,clientId:`api-doc-viewer-client`}}}})),D=h(m({operation:{...o,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.operation.extension`,clientId:`api-doc-viewer-client`}}}})),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {}
}))`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    title: "Operation Title"
  }
}))`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description"
  }
}))`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    summary: "Operation summary"
  }
}))`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    ...EXTENSIONS
  }
}))`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.first"
      },
      mqtt: {
        bindingVersion: "0.2.0",
        clientId: "mqtt-client-01"
      }
    }
  }
}))`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.second"
      },
      mqtt: {
        bindingVersion: "0.2.0",
        clientId: "mqtt-client-02"
      }
    }
  }
}))`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    summary: "Operation summary"
  }
}))`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    ...EXTENSIONS
  }
}))`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.description",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createStory(createSource({
  operation: {
    ...EXTENSIONS,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.extension",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...D.parameters?.docs?.source}}},O=[`OperationId`,`Title`,`Description`,`Summary`,`Extensions`,`BindingsOneOption`,`BindingsTwoOptionsSelectedFirst`,`BindingsTwoOptionsSelectedSecond`,`DescriptionSummary`,`DescriptionExtensions`,`DescriptionBindingsOneOption`,`ExtensionsBindingsOneOption`]})))()}k();export{x as BindingsOneOption,S as BindingsTwoOptionsSelectedFirst,C as BindingsTwoOptionsSelectedSecond,v as Description,E as DescriptionBindingsOneOption,T as DescriptionExtensions,w as DescriptionSummary,b as Extensions,D as ExtensionsBindingsOneOption,g as OperationId,y as Summary,_ as Title,O as __namedExportsOrder,u as default};