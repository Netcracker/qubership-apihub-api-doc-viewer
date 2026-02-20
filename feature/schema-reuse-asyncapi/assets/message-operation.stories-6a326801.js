import{A as se}from"./AsyncApiOperationViewer-8635578c.js";import{p as ae,T as ce,E}from"./preprocess-477953b5.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-6e707ea9.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";const ye={title:"Async API Suite/Message Operation",component:se,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},ie="OperationID",O="ChannelID",y="MessageID",e=({operation:l,operationType:te="send"})=>({asyncapi:"3.0.0",operations:{[ie]:{action:te,channel:{$ref:`#/channels/${O}`},messages:[{$ref:`#/channels/${O}/messages/${y}`}],...l}},channels:{[O]:{messages:{[y]:{name:"Message Name"}}}}}),n=l=>({args:{source:ae({source:l}),operationKey:ie,operationType:"send",messageKey:y,referenceNamePropertyKey:ce}}),r=n(e({operation:{}})),o=n(e({operation:{title:"Operation Title"}})),i=n(e({operation:{description:"Operation description"}})),t=n(e({operation:{summary:"Operation summary"}})),s=n(e({operation:{...E}})),a=n(e({operation:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.created",clientId:"api-doc-viewer-client"}}}})),c=n(e({operation:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.first"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),p=n(e({operation:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.second"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),d=n(e({operation:{description:"Operation description",summary:"Operation summary"}})),m=n(e({operation:{description:"Operation description",...E}})),u=n(e({operation:{description:"Operation description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.description",clientId:"api-doc-viewer-client"}}}})),g=n(e({operation:{...E,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.extension",clientId:"api-doc-viewer-client"}}}})),S=n(e({operation:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}}));var b,f,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`createStory(createSource({
  operation: {}
}))`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var I,T,v;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`createStory(createSource({
  operation: {
    title: "Operation Title"
  }
}))`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var N,V,B;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description"
  }
}))`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var x,D,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(createSource({
  operation: {
    summary: "Operation summary"
  }
}))`,...(w=(D=t.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var A,q,_;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`createStory(createSource({
  operation: {
    ...EXTENSIONS
  }
}))`,...(_=(q=s.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var R,$,K;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(K=($=a.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var h,C,M;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var P,X,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var F,j,G;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    summary: "Operation summary"
  }
}))`,...(G=(j=d.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,L,z;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    ...EXTENSIONS
  }
}))`,...(z=(L=m.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var J,Q,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Z,ee;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}))`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Ee=["OperationId","Title","Description","Summary","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","DescriptionSummary","DescriptionExtensions","DescriptionBindingsOneOption","ExtensionsBindingsOneOption","EdgeCaseBrokenRefBindings"];export{a as BindingsOneOption,c as BindingsTwoOptionsSelectedFirst,p as BindingsTwoOptionsSelectedSecond,i as Description,u as DescriptionBindingsOneOption,m as DescriptionExtensions,d as DescriptionSummary,S as EdgeCaseBrokenRefBindings,s as Extensions,g as ExtensionsBindingsOneOption,r as OperationId,t as Summary,o as Title,Ee as __namedExportsOrder,ye as default};
