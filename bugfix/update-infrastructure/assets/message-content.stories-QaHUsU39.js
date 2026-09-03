import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./AsyncApiOperationViewer-CX16bUTc.js";import{a as r,g as i,h as a,m as o,r as s}from"./preprocess-DoJcq6fV.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{t(),i(),s(),{userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Async API Suite/Message Content`,component:n,parameters:{},argTypes:{source:{control:`object`}},args:{source:{}}},d=`send-operation`,f=`ChannelID`,p=`MessageID`,m={type:`object`,properties:{traceId:{type:`string`},requestId:{type:`string`}}},h={schemaFormat:`application/schema+json;version=draft-07`,schema:{type:`object`,properties:{traceId:{type:`string`},requestId:{type:`string`}}}},g={type:`object`,properties:{id:{type:`string`},status:{type:`string`}}},_={schemaFormat:`application/schema+json;version=draft-07`,schema:{type:`object`,properties:{id:{type:`string`},status:{type:`string`}}}},v=({message:e,operationType:t=`send`})=>({asyncapi:`3.0.0`,operations:{[d]:{action:t,channel:{$ref:`#/channels/${f}`},messages:[{$ref:`#/channels/${f}/messages/${p}`}]}},channels:{[f]:{messages:{[p]:{name:`Message Name`,...e}}}}}),y=(e,t)=>({args:{devMode:!0,source:r({source:e,storyName:t}),operationKeys:{operationKey:d,messageKey:p},referenceNamePropertyKey:a},play:async({canvasElement:e})=>{let t=await l(e).findAllByTestId(`message-content`);await c.click(t[0])}}),b=y(v({message:{headers:m}})),x=y(v({message:{headers:h}})),S=y(v({message:{...o}})),C=y(v({message:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.message.created`,clientId:`api-doc-viewer-client`}}}})),w=y(v({message:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.message.first`},mqtt:{bindingVersion:`0.2.0`,clientId:`mqtt-client-01`}}}})),T=y(v({message:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.message.second`},mqtt:{bindingVersion:`0.2.0`,clientId:`mqtt-client-02`}}}})),E=y(v({message:{payload:g}})),D=y(v({message:{payload:_}})),O=y(v({message:{headers:m,...o}})),k=y(v({message:{headers:m,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.message.headers`,clientId:`api-doc-viewer-client`}}}})),A=y(v({message:{headers:m,payload:g}})),j=y(v({message:{...o,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.message.extension`,clientId:`api-doc-viewer-client`}}}})),M=y(v({message:{...o,payload:g}})),N=y(v({message:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.message.payload`,clientId:`api-doc-viewer-client`}},payload:g}})),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA
  }
}))`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_MULTI_SCHEMA
  }
}))`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS
  }
}))`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.first"
      },
      mqtt: {
        bindingVersion: "0.2.0",
        clientId: "mqtt-client-01"
      }
    }
  }
}))`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.second"
      },
      mqtt: {
        bindingVersion: "0.2.0",
        clientId: "mqtt-client-02"
      }
    }
  }
}))`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    payload: PAYLOAD_SCHEMA
  }
}))`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    payload: PAYLOAD_MULTI_SCHEMA
  }
}))`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    ...EXTENSIONS
  }
}))`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.headers",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    payload: PAYLOAD_SCHEMA
  }
}))`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.extension",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS,
    payload: PAYLOAD_SCHEMA
  }
}))`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.payload",
        clientId: "api-doc-viewer-client"
      }
    },
    payload: PAYLOAD_SCHEMA
  }
}))`,...N.parameters?.docs?.source}}},P=[`Headers`,`HeadersMultiSchemaObject`,`Extensions`,`BindingsOneOption`,`BindingsTwoOptionsSelectedFirst`,`BindingsTwoOptionsSelectedSecond`,`Payload`,`PayloadMultiSchemaObject`,`HeadersExtensions`,`HeadersBindingsOneOption`,`HeadersPayload`,`ExtensionsBindingsOneOption`,`ExtensionsPayload`,`BindingsOneOptionPayload`]})))()}F();export{C as BindingsOneOption,N as BindingsOneOptionPayload,w as BindingsTwoOptionsSelectedFirst,T as BindingsTwoOptionsSelectedSecond,S as Extensions,j as ExtensionsBindingsOneOption,M as ExtensionsPayload,b as Headers,k as HeadersBindingsOneOption,O as HeadersExtensions,x as HeadersMultiSchemaObject,A as HeadersPayload,E as Payload,D as PayloadMultiSchemaObject,P as __namedExportsOrder,u as default};