import{A as Se}from"./AsyncApiOperationViewer-06790016.js";import{w as ue,u as Ee}from"./index-d5b0668c.js";import{p as ye,T as Ae,E}from"./preprocess-02500ede.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DiffBadge-a8af3c87.js";import"./DdlTableViewer-be76727d.js";import"./index-6638dd2d.js";import"./DdlTableDiffsViewer-45321229.js";/* empty css              */import"./GraphQLOperationDiffViewer-aef2f12c.js";import"./GraphPropNodeViewer-5ea7aab4.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-63ce1d79.js";import"./index-442a5f79.js";const xe={title:"Async API Suite/Message Content",component:Se,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},me="send-operation",H="ChannelID",I="MessageID",y={type:"object",properties:{traceId:{type:"string"},requestId:{type:"string"}}},Oe={schemaFormat:"application/schema+json;version=draft-07",schema:{type:"object",properties:{traceId:{type:"string"},requestId:{type:"string"}}}},A={type:"object",properties:{id:{type:"string"},status:{type:"string"}}},be={schemaFormat:"application/schema+json;version=draft-07",schema:{type:"object",properties:{id:{type:"string"},status:{type:"string"}}}},e=({message:O,operationType:b="send"})=>({asyncapi:"3.0.0",operations:{[me]:{action:b,channel:{$ref:`#/channels/${H}`},messages:[{$ref:`#/channels/${H}/messages/${I}`}]}},channels:{[H]:{messages:{[I]:{name:"Message Name",...O}}}}}),s=(O,b)=>({args:{devMode:!0,source:ye({source:O,storyName:b}),operationKeys:{operationKey:me,messageKey:I},referenceNamePropertyKey:Ae},play:async({canvasElement:ge})=>{const le=await ue(ge).findAllByTestId("message-content");await Ee.click(le[0])}}),n=s(e({message:{headers:y}})),a=s(e({message:{headers:Oe}})),r=s(e({message:{...E}})),t=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.created",clientId:"api-doc-viewer-client"}}}})),o=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.first"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),i=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.second"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),c=s(e({message:{payload:A}})),d=s(e({message:{payload:be}})),p=s(e({message:{headers:y,...E}})),m=s(e({message:{headers:y,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.headers",clientId:"api-doc-viewer-client"}}}})),g=s(e({message:{headers:y,payload:A}})),l=s(e({message:{...E,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.extension",clientId:"api-doc-viewer-client"}}}})),S=s(e({message:{...E,payload:A}})),u=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.payload",clientId:"api-doc-viewer-client"}},payload:A}}));var h,M,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA
  }
}))`,...(v=(M=n.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var _,k,f;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_MULTI_SCHEMA
  }
}))`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var P,T,C;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS
  }
}))`,...(C=(T=r.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var w,D,N;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var V,B,x;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var L,R,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var Y,q,K;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`createStory(createSource({
  message: {
    payload: PAYLOAD_SCHEMA
  }
}))`,...(K=(q=c.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var F,X,$;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  message: {
    payload: PAYLOAD_MULTI_SCHEMA
  }
}))`,...($=(X=d.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var U,G,z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    ...EXTENSIONS
  }
}))`,...(z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,Q,W;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(W=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Z,ee,se;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    payload: PAYLOAD_SCHEMA
  }
}))`,...(se=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,ae,re;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(re=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,oe,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS,
    payload: PAYLOAD_SCHEMA
  }
}))`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,pe;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(pe=(de=u.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Le=["Headers","HeadersMultiSchemaObject","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","Payload","PayloadMultiSchemaObject","HeadersExtensions","HeadersBindingsOneOption","HeadersPayload","ExtensionsBindingsOneOption","ExtensionsPayload","BindingsOneOptionPayload"];export{t as BindingsOneOption,u as BindingsOneOptionPayload,o as BindingsTwoOptionsSelectedFirst,i as BindingsTwoOptionsSelectedSecond,r as Extensions,l as ExtensionsBindingsOneOption,S as ExtensionsPayload,n as Headers,m as HeadersBindingsOneOption,p as HeadersExtensions,a as HeadersMultiSchemaObject,g as HeadersPayload,c as Payload,d as PayloadMultiSchemaObject,Le as __namedExportsOrder,xe as default};
