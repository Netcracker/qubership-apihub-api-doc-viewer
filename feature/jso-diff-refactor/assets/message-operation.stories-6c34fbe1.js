import{A as ae}from"./AsyncApiOperationViewer-9f26d1d5.js";import{w as ce,u as pe}from"./index-d5b0668c.js";import{p as de,T as me,E as b}from"./preprocess-6a043fa8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-d7a9dfd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-199d72a2.js";import"./GraphQLOperationDiffViewer-b214f235.js";import"./index-442a5f79.js";const ve={title:"Async API Suite/Message Operation",component:ae,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},te="OperationID",y="ChannelID",E="MessageID",e=({operation:l,operationType:O="send"})=>({asyncapi:"3.0.0",operations:{[te]:{action:O,channel:{$ref:`#/channels/${y}`},messages:[{$ref:`#/channels/${y}/messages/${E}`}],...l}},channels:{[y]:{messages:{[E]:{name:"Message Name"}}}}}),n=l=>({args:{devMode:!0,source:de({source:l}),operationKeys:{operationKey:te,messageKey:E},referenceNamePropertyKey:me},play:async({canvasElement:O})=>{const se=await ce(O).findAllByTestId("message-operation");await pe.click(se[0])}}),r=n(e({operation:{}})),o=n(e({operation:{title:"Operation Title"}})),i=n(e({operation:{description:"Operation description"}})),t=n(e({operation:{summary:"Operation summary"}})),s=n(e({operation:{...b}})),a=n(e({operation:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.created",clientId:"api-doc-viewer-client"}}}})),c=n(e({operation:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.first"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),p=n(e({operation:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.second"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),d=n(e({operation:{description:"Operation description",summary:"Operation summary"}})),m=n(e({operation:{description:"Operation description",...b}})),u=n(e({operation:{description:"Operation description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.description",clientId:"api-doc-viewer-client"}}}})),g=n(e({operation:{...b,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.operation.extension",clientId:"api-doc-viewer-client"}}}})),S=n(e({operation:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}}));var f,k,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(createSource({
  operation: {}
}))`,...(I=(k=r.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var v,T,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`createStory(createSource({
  operation: {
    title: "Operation Title"
  }
}))`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,N,V;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description"
  }
}))`,...(V=(N=i.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var x,A,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(createSource({
  operation: {
    summary: "Operation summary"
  }
}))`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var q,_,K;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`createStory(createSource({
  operation: {
    ...EXTENSIONS
  }
}))`,...(K=(_=s.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var R,$,h;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.operation.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(h=($=a.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var M,C,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var X,Y,F;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(F=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var j,G,H;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    summary: "Operation summary"
  }
}))`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,z,J;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(createSource({
  operation: {
    description: "Operation description",
    ...EXTENSIONS
  }
}))`,...(J=(z=m.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,W;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(W=(U=u.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Z,ee,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,oe,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`createStory(createSource({
  operation: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}))`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Te=["OperationId","Title","Description","Summary","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","DescriptionSummary","DescriptionExtensions","DescriptionBindingsOneOption","ExtensionsBindingsOneOption","EdgeCaseBrokenRefBindings"];export{a as BindingsOneOption,c as BindingsTwoOptionsSelectedFirst,p as BindingsTwoOptionsSelectedSecond,i as Description,u as DescriptionBindingsOneOption,m as DescriptionExtensions,d as DescriptionSummary,S as EdgeCaseBrokenRefBindings,s as Extensions,g as ExtensionsBindingsOneOption,r as OperationId,t as Summary,o as Title,Te as __namedExportsOrder,ve as default};
