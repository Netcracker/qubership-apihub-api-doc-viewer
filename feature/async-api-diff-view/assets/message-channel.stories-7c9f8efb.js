import{A as ir}from"./AsyncApiOperationViewer-e7db2e4a.js";import{p as pr,T as dr,E as n}from"./preprocess-0f91ce85.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-1e410733.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f8eb04e1.js";import"./GraphQLOperationDiffViewer-07b304d9.js";const kr={title:"Async API Suite/Message Channel",component:ir,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},cr="send-operation",q="ChannelID",w="MessageID",e=({channel:B,operationType:V="send"})=>({asyncapi:"3.0.0",operations:{[cr]:{action:V,channel:{$ref:`#/channels/${q}`},messages:[{$ref:`#/channels/${q}/messages/${w}`}]}},channels:{[q]:{...B,messages:{[w]:{name:"Message Name"}}}}}),r=(B,V)=>({args:{source:pr({source:B,storyName:V}),operationKey:cr,operationType:"send",messageKey:w,referenceNamePropertyKey:dr}}),s=r(e({channel:{}})),t=r(e({channel:{title:"Channel Title"}})),a=r(e({channel:{address:"test.address"}})),o=r(e({channel:{description:"Channel description"}})),c=r(e({channel:{summary:"Channel summary"}})),i=r(e({channel:{parameters:{param1:{description:"Parameter description"}}}})),p=r(e({channel:{parameters:{param1:{description:"Parameter description",location:"$.message.headers.correlationId"}}}})),d=r(e({channel:{...n}})),m=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}})),l=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.order.created"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),S=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.payment.updated"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),h=r(e({channel:{servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),u=r(e({channel:{servers:[{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to"},{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to"}]}})),g=r(e({channel:{servers:[{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}},{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to",bindings:{amqp:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}]}})),v=r(e({channel:{description:"Channel description",summary:"Channel summary"}})),T=r(e({channel:{description:"Channel description",parameters:{param1:{description:"Parameter description"}}}})),k=r(e({channel:{description:"Channel description",...n}})),f=r(e({channel:{description:"Channel description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.channel.described",clientId:"api-doc-viewer-client"}}}})),b=r(e({channel:{description:"Channel description",servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),y=r(e({channel:{parameters:{param1:{description:"Parameter description"}},...n}})),P=r(e({channel:{parameters:{param1:{description:"Parameter description"}},bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.parameter.changed",clientId:"api-doc-viewer-client"}}}})),E=r(e({channel:{parameters:{param1:{description:"Parameter description"}},servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),O=r(e({channel:{...n,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.extension.changed",clientId:"api-doc-viewer-client"}}}})),A=r(e({channel:{...n,servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),C=r(e({channel:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}}),"edge-case-broken-ref-bindings"),I=r(e({channel:{parameters:{notExistingParameter:{$ref:"#/components/parameters/not-existing-parameter"}}}}),"edge-case-broken-ref-address-parameter"),x=r(e({channel:{servers:[{$ref:"#/components/servers/not-existing-server"}]}}),"edge-case-broken-ref-server");var N,D,K;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...(K=(D=s.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var M,$,R;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,...(R=($=t.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var H,Q,_;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...(_=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var X,W,Y;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...(Y=(W=o.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var F,L,j;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var G,z,J;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(J=(z=i.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var U,Z,ee;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,se;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...(se=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ae,oe;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(oe=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ce,ie,pe;l.parameters={...l.parameters,docs:{...(ce=l.parameters)==null?void 0:ce.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.order.created"
      },
      mqtt: {
        bindingVersion: "0.2.0",
        clientId: "mqtt-client-01"
      }
    }
  }
}))`,...(pe=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,me,le;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.payment.updated"
      },
      mqtt: {
        bindingVersion: "0.2.0",
        clientId: "mqtt-client-02"
      }
    }
  }
}))`,...(le=(me=S.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var Se,he,ue;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(ue=(he=h.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,ve,Te;u.parameters={...u.parameters,docs:{...(ge=u.parameters)==null?void 0:ge.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      title: "Kafka Server Title",
      host: "kafka.server.com",
      protocol: "kafka",
      description: "The Kafka server to connect to"
    }, {
      title: "AMQP Server Title",
      host: "amqp.server.com",
      protocol: "amqp",
      description: "The AMQP server to connect to"
    }]
  }
}))`,...(Te=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var ke,fe,be;g.parameters={...g.parameters,docs:{...(ke=g.parameters)==null?void 0:ke.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      title: "Kafka Server Title",
      host: "kafka.server.com",
      protocol: "kafka",
      description: "The Kafka server to connect to",
      bindings: {
        kafka: {
          bindingVersion: "0.5.0",
          topic: "events.user.created",
          clientId: "api-doc-viewer-client"
        }
      }
    }, {
      title: "AMQP Server Title",
      host: "amqp.server.com",
      protocol: "amqp",
      description: "The AMQP server to connect to",
      bindings: {
        amqp: {
          bindingVersion: "0.2.0",
          clientId: "mqtt-client-01"
        }
      }
    }]
  }
}))`,...(be=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,Pe,Ee;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...(Ee=(Pe=v.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var Oe,Ae,Ce;T.parameters={...T.parameters,docs:{...(Oe=T.parameters)==null?void 0:Oe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(Ce=(Ae=T.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Ie,xe,Be;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...(Be=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Ve,qe,we;f.parameters={...f.parameters,docs:{...(Ve=f.parameters)==null?void 0:Ve.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.channel.described",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(we=(qe=f.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};var Ne,De,Ke;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(Ke=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Ke.source}}};var Me,$e,Re;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...(Re=($e=y.parameters)==null?void 0:$e.docs)==null?void 0:Re.source}}};var He,Qe,_e;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.parameter.changed",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(_e=(Qe=P.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var Xe,We,Ye;E.parameters={...E.parameters,docs:{...(Xe=E.parameters)==null?void 0:Xe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(Ye=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var Fe,Le,je;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.extension.changed",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(je=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var Ge,ze,Je;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS,
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(Je=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Ue,Ze,er;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}), 'edge-case-broken-ref-bindings')`,...(er=(Ze=C.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,nr,sr;I.parameters={...I.parameters,docs:{...(rr=I.parameters)==null?void 0:rr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      notExistingParameter: {
        $ref: "#/components/parameters/not-existing-parameter"
      }
    }
  }
}), 'edge-case-broken-ref-address-parameter')`,...(sr=(nr=I.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var tr,ar,or;x.parameters={...x.parameters,docs:{...(tr=x.parameters)==null?void 0:tr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      $ref: "#/components/servers/not-existing-server"
    }]
  }
}), 'edge-case-broken-ref-server')`,...(or=(ar=x.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};const fr=["ChannelID","Title","Address","Description","Summary","AddressParameters","AddressParametersWithLocation","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","ServersOneServer","ServersTwoServers","ServersTwoServersWithBindings","DescriptionSummary","DescriptionAddressParameters","DescriptionExtensions","DescriptionBindingsOneOption","DescriptionServersOneServer","AddressParametersExtensions","AddressParametersBindingsOneOption","AddressParametersServersOneServer","ExtensionsBindingsOneOption","ExtensionsServersOneServer","EdgeCaseBrokenRefBindings","EdgeCaseBrokenRefAddressParameter","EdgeCaseBrokenRefServer"];export{a as Address,i as AddressParameters,P as AddressParametersBindingsOneOption,y as AddressParametersExtensions,E as AddressParametersServersOneServer,p as AddressParametersWithLocation,m as BindingsOneOption,l as BindingsTwoOptionsSelectedFirst,S as BindingsTwoOptionsSelectedSecond,s as ChannelID,o as Description,T as DescriptionAddressParameters,f as DescriptionBindingsOneOption,k as DescriptionExtensions,b as DescriptionServersOneServer,v as DescriptionSummary,I as EdgeCaseBrokenRefAddressParameter,C as EdgeCaseBrokenRefBindings,x as EdgeCaseBrokenRefServer,d as Extensions,O as ExtensionsBindingsOneOption,A as ExtensionsServersOneServer,h as ServersOneServer,u as ServersTwoServers,g as ServersTwoServersWithBindings,c as Summary,t as Title,fr as __namedExportsOrder,kr as default};
