import{A as Ee}from"./AsyncApiOperationViewer-8635578c.js";import{p as ye,T as be,E as y}from"./preprocess-477953b5.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-6e707ea9.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";const Pe={title:"Async API Suite/Message Content",component:Ee,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},ue="send-operation",I="ChannelID",f="MessageID",b={type:"object",properties:{traceId:{type:"string"},requestId:{type:"string"}}},Ae={schemaFormat:"application/schema+json;version=draft-07",schema:{type:"object",properties:{traceId:{type:"string"},requestId:{type:"string"}}}},A={type:"object",properties:{id:{type:"string"},status:{type:"string"}}},Oe={schemaFormat:"application/schema+json;version=draft-07",schema:{type:"object",properties:{id:{type:"string"},status:{type:"string"}}}},e=({message:O,operationType:H="send"})=>({asyncapi:"3.0.0",operations:{[ue]:{action:H,channel:{$ref:`#/channels/${I}`},messages:[{$ref:`#/channels/${I}/messages/${f}`}]}},channels:{[I]:{messages:{[f]:{name:"Message Name",...O}}}}}),s=(O,H)=>({args:{source:ye({source:O,storyName:H}),operationKey:ue,operationType:"send",messageKey:f,referenceNamePropertyKey:be}}),n=s(e({message:{headers:b}})),a=s(e({message:{headers:Ae}})),r=s(e({message:{...y}})),t=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.created",clientId:"api-doc-viewer-client"}}}})),o=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.first"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),i=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.second"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),c=s(e({message:{payload:A}})),d=s(e({message:{payload:Oe}})),p=s(e({message:{headers:b,...y}})),m=s(e({message:{headers:b,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.headers",clientId:"api-doc-viewer-client"}}}})),g=s(e({message:{headers:b,payload:A}})),S=s(e({message:{...y,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.extension",clientId:"api-doc-viewer-client"}}}})),l=s(e({message:{...y,payload:A}})),u=s(e({message:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.message.payload",clientId:"api-doc-viewer-client"}},payload:A}})),E=s(e({message:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}}),"edge-case-broken-ref-bindings");var k,h,M;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA
  }
}))`,...(M=(h=n.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var _,v,P;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_MULTI_SCHEMA
  }
}))`,...(P=(v=a.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var C,T,D;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS
  }
}))`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,V,B;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.message.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(B=(V=t.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var x,R,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(w=(R=o.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var L,j,Y;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var q,$,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`createStory(createSource({
  message: {
    payload: PAYLOAD_SCHEMA
  }
}))`,...(K=($=c.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var F,X,U;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  message: {
    payload: PAYLOAD_MULTI_SCHEMA
  }
}))`,...(U=(X=d.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var G,z,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    ...EXTENSIONS
  }
}))`,...(J=(z=p.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,W,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,se,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    payload: PAYLOAD_SCHEMA
  }
}))`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,re,te;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ie,ce;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`createStory(createSource({
  message: {
    ...EXTENSIONS,
    payload: PAYLOAD_SCHEMA
  }
}))`,...(ce=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,me;u.parameters={...u.parameters,docs:{...(de=u.parameters)==null?void 0:de.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(me=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,Se,le;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`createStory(createSource({
  message: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}), 'edge-case-broken-ref-bindings')`,...(le=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:le.source}}};const Ce=["Headers","HeadersMultiSchemaObject","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","Payload","PayloadMultiSchemaObject","HeadersExtensions","HeadersBindingsOneOption","HeadersPayload","ExtensionsBindingsOneOption","ExtensionsPayload","BindingsOneOptionPayload","EdgeCaseBrokenRefBindings"];export{t as BindingsOneOption,u as BindingsOneOptionPayload,o as BindingsTwoOptionsSelectedFirst,i as BindingsTwoOptionsSelectedSecond,E as EdgeCaseBrokenRefBindings,r as Extensions,S as ExtensionsBindingsOneOption,l as ExtensionsPayload,n as Headers,m as HeadersBindingsOneOption,p as HeadersExtensions,a as HeadersMultiSchemaObject,g as HeadersPayload,c as Payload,d as PayloadMultiSchemaObject,Ce as __namedExportsOrder,Pe as default};
