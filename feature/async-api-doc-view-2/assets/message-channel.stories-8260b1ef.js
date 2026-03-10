import{A as Sr}from"./AsyncApiOperationViewer-912521b7.js";import{p as ur,T as vr,E as n}from"./preprocess-fc80085e.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-0992e4f2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-35d32af0.js";import"./GraphQLOperationDiffViewer-f3229714.js";const Or={title:"Async API Suite/Message Channel",component:Sr,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},lr="send-operation",N="ChannelID",D="MessageID",e=({channel:V,operationType:q="send",servers:s})=>({asyncapi:"3.0.0",...s?{servers:s}:{},operations:{[lr]:{action:q,channel:{$ref:`#/channels/${N}`},messages:[{$ref:`#/channels/${N}/messages/${D}`}]}},channels:{[N]:{...V,...s?{servers:Object.keys(s).map(hr=>`#/servers/${hr}`)}:{},messages:{[D]:{name:"Message Name"}}}}}),r=(V,q)=>({args:{source:ur({source:V,storyName:q}),operationKey:lr,messageKey:D,referenceNamePropertyKey:vr}}),t=r(e({channel:{}})),a=r(e({channel:{title:"Channel Title"}})),o=r(e({channel:{address:"test.address"}})),c=r(e({channel:{description:"Channel description"}})),i=r(e({channel:{summary:"Channel summary"}})),p=r(e({channel:{parameters:{param1:{description:"Parameter description"}}}})),d=r(e({channel:{parameters:{param1:{description:"Parameter description",location:"$.message.headers.correlationId"}}}})),m=r(e({channel:{...n}})),l=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}})),h=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.order.created"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),S=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.payment.updated"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),u=r(e({channel:{},servers:{"first-server-id":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}}),"servers-one-server"),v=r(e({channel:{},servers:{"server-without-title":{host:"localhost",protocol:"http"}}})),g=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to"},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to"}}})),T=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to",bindings:{amqp:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}}})),k=r(e({channel:{description:"Channel description",summary:"Channel summary"}})),f=r(e({channel:{description:"Channel description",parameters:{param1:{description:"Parameter description"}}}})),y=r(e({channel:{description:"Channel description",...n}})),P=r(e({channel:{description:"Channel description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.channel.described",clientId:"api-doc-viewer-client"}}}})),b=r(e({channel:{description:"Channel description"},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),E=r(e({channel:{parameters:{param1:{description:"Parameter description"}},...n}})),O=r(e({channel:{parameters:{param1:{description:"Parameter description"}},bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.parameter.changed",clientId:"api-doc-viewer-client"}}}})),A=r(e({channel:{parameters:{param1:{description:"Parameter description"}}},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),C=r(e({channel:{...n,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.extension.changed",clientId:"api-doc-viewer-client"}}}})),I=r(e({channel:{...n},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),w=r(e({channel:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}})),x=r(e({channel:{parameters:{notExistingParameter:{$ref:"#/components/parameters/not-existing-parameter"}}}})),B=r(e({channel:{servers:[{$ref:"#/components/servers/not-existing-server"}]}}));var K,$,M;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...(M=($=t.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var R,H,Q;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,...(Q=(H=a.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var _,W,X;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...(X=(W=o.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,F,L;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var j,G,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...(z=(G=i.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,U,Z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(Z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,re,ne;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...(ne=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,te,ae;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...(ae=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ce,ie;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(ie=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var pe,de,me;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(me=(de=h.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var le,he,Se;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Se=(he=S.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var ue,ve,ge;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }
  }
}), 'servers-one-server')`,...(ge=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var Te,ke,fe;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'server-without-title': {
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(fe=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var ye,Pe,be;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server': {
      title: "Kafka Server Title",
      host: "kafka.server.com",
      protocol: "kafka",
      description: "The Kafka server to connect to"
    },
    'second-server': {
      title: "AMQP Server Title",
      host: "amqp.server.com",
      protocol: "amqp",
      description: "The AMQP server to connect to"
    }
  }
}))`,...(be=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var Ee,Oe,Ae;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server': {
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
    },
    'second-server': {
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
    }
  }
}))`,...(Ae=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Ce,Ie,we;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...(we=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var xe,Be,Ve;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(Ve=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var qe,Ne,De;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...(De=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Ke,$e,Me;P.parameters={...P.parameters,docs:{...(Ke=P.parameters)==null?void 0:Ke.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Me=($e=P.parameters)==null?void 0:$e.docs)==null?void 0:Me.source}}};var Re,He,Qe;b.parameters={...b.parameters,docs:{...(Re=b.parameters)==null?void 0:Re.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  },
  servers: {
    'server-with-title': {
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }
  }
}))`,...(Qe=(He=b.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};var _e,We,Xe;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...(Xe=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Fe,Le;O.parameters={...O.parameters,docs:{...(Ye=O.parameters)==null?void 0:Ye.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Le=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var je,Ge,ze;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  },
  servers: {
    'server-with-title': {
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }
  }
}))`,...(ze=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Je,Ue,Ze;C.parameters={...C.parameters,docs:{...(Je=C.parameters)==null?void 0:Je.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Ze=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var er,rr,nr;I.parameters={...I.parameters,docs:{...(er=I.parameters)==null?void 0:er.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  },
  servers: {
    'server-with-title': {
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }
  }
}))`,...(nr=(rr=I.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var sr,tr,ar;w.parameters={...w.parameters,docs:{...(sr=w.parameters)==null?void 0:sr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}))`,...(ar=(tr=w.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var or,cr,ir;x.parameters={...x.parameters,docs:{...(or=x.parameters)==null?void 0:or.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      notExistingParameter: {
        $ref: "#/components/parameters/not-existing-parameter"
      }
    }
  }
}))`,...(ir=(cr=x.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var pr,dr,mr;B.parameters={...B.parameters,docs:{...(pr=B.parameters)==null?void 0:pr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      $ref: "#/components/servers/not-existing-server"
    }]
  }
}))`,...(mr=(dr=B.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};const Ar=["ChannelID","Title","Address","Description","Summary","AddressParameters","AddressParametersWithLocation","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","ServersOneServer","ServersOneServerWithoutTitle","ServersTwoServers","ServersTwoServersWithBindings","DescriptionSummary","DescriptionAddressParameters","DescriptionExtensions","DescriptionBindingsOneOption","DescriptionServersOneServer","AddressParametersExtensions","AddressParametersBindingsOneOption","AddressParametersServersOneServer","ExtensionsBindingsOneOption","ExtensionsServersOneServer","EdgeCaseBrokenRefBindings","EdgeCaseBrokenRefAddressParameter","EdgeCaseBrokenRefServer"];export{o as Address,p as AddressParameters,O as AddressParametersBindingsOneOption,E as AddressParametersExtensions,A as AddressParametersServersOneServer,d as AddressParametersWithLocation,l as BindingsOneOption,h as BindingsTwoOptionsSelectedFirst,S as BindingsTwoOptionsSelectedSecond,t as ChannelID,c as Description,f as DescriptionAddressParameters,P as DescriptionBindingsOneOption,y as DescriptionExtensions,b as DescriptionServersOneServer,k as DescriptionSummary,x as EdgeCaseBrokenRefAddressParameter,w as EdgeCaseBrokenRefBindings,B as EdgeCaseBrokenRefServer,m as Extensions,C as ExtensionsBindingsOneOption,I as ExtensionsServersOneServer,u as ServersOneServer,v as ServersOneServerWithoutTitle,g as ServersTwoServers,T as ServersTwoServersWithBindings,i as Summary,a as Title,Ar as __namedExportsOrder,Or as default};
