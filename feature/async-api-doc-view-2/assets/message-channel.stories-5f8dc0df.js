import{A as Br}from"./AsyncApiOperationViewer-5f871323.js";import{p as Vr,T as xr,E as n}from"./preprocess-3454686a.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-84d76a10.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-93bbd985.js";import"./GraphQLOperationDiffViewer-f401c79a.js";const Rr={title:"Async API Suite/Message Channel",component:Br,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},Cr="send-operation",K="ChannelID",$="MessageID",e=({channel:N,operationType:W="send",servers:s})=>({asyncapi:"3.0.0",...s?{servers:s}:{},operations:{[Cr]:{action:W,channel:{$ref:`#/channels/${K}`},messages:[{$ref:`#/channels/${K}/messages/${$}`}]}},channels:{[K]:{...N,...s?{servers:Object.keys(s).map(wr=>({$ref:`#/servers/${wr}`}))}:{},messages:{[$]:{name:"Message Name"}}}}}),r=(N,W)=>({args:{devMode:!0,source:Vr({source:N,storyName:W}),operationKeys:{operationKey:Cr,messageKey:$},referenceNamePropertyKey:xr}}),t=r(e({channel:{}})),o=r(e({channel:{title:"Channel Title"}})),a=r(e({channel:{address:"test.address"}})),c=r(e({channel:{description:"Channel description"}})),i=r(e({channel:{summary:"Channel summary"}})),d=r(e({channel:{parameters:{param1:{description:"Parameter description"}}}})),p=r(e({channel:{parameters:{param1:{description:"Parameter description",location:"$.message.headers.correlationId"}}}})),m=r(e({channel:{...n}})),l=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}})),S=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.order.created"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),h=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.payment.updated"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),v=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http"}}})),u=r(e({channel:{},servers:{"first-server-id":{title:"Server Title",host:"localhost",protocol:"http"}}})),g=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",description:"Server description"}}})),y=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",summary:"Server summary"}}})),T=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",description:"Server description",summary:"Server summary"}}})),f=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}}})),k=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to"},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to"}}})),A=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to",bindings:{amqp:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}}})),P=r(e({channel:{description:"Channel description",summary:"Channel summary"}})),b=r(e({channel:{description:"Channel description",parameters:{param1:{description:"Parameter description"}}}})),O=r(e({channel:{description:"Channel description",...n}})),E=r(e({channel:{description:"Channel description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.channel.described",clientId:"api-doc-viewer-client"}}}})),I=r(e({channel:{description:"Channel description"},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),C=r(e({channel:{parameters:{param1:{description:"Parameter description"}},...n}})),w=r(e({channel:{parameters:{param1:{description:"Parameter description"}},bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.parameter.changed",clientId:"api-doc-viewer-client"}}}})),B=r(e({channel:{parameters:{param1:{description:"Parameter description"}}},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),V=r(e({channel:{...n,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.extension.changed",clientId:"api-doc-viewer-client"}}}})),x=r(e({channel:{...n},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),D=r(e({channel:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}})),q=r(e({channel:{parameters:{notExistingParameter:{$ref:"#/components/parameters/not-existing-parameter"}}}})),H=r(e({channel:{servers:[{$ref:"#/components/servers/not-existing-server"}]}}));var M,R,Q;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...(Q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:Q.source}}};var _,X,Y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,...(Y=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var F,L,j;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...(j=(L=a.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var G,z,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...(J=(z=c.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var U,Z,ee;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...(ee=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,se;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(se=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,oe,ae;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...(ae=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ce,ie,de;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...(de=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,me,le;l.parameters={...l.parameters,docs:{...(pe=l.parameters)==null?void 0:pe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(le=(me=l.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var Se,he,ve;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ve=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ue,ge,ye;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ye=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Te,fe,ke;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(ke=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Ae,Pe,be;u.parameters={...u.parameters,docs:{...(Ae=u.parameters)==null?void 0:Ae.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      title: "Server Title",
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(be=(Pe=u.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var Oe,Ee,Ie;g.parameters={...g.parameters,docs:{...(Oe=g.parameters)==null?void 0:Oe.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description"
    }
  }
}))`,...(Ie=(Ee=g.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Ce,we,Be;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      summary: "Server summary"
    }
  }
}))`,...(Be=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var Ve,xe,De;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description",
      summary: "Server summary"
    }
  }
}))`,...(De=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var qe,He,Ne;f.parameters={...f.parameters,docs:{...(qe=f.parameters)==null?void 0:qe.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      bindings: {
        kafka: {
          bindingVersion: "0.5.0",
          topic: "events.user.created",
          clientId: "api-doc-viewer-client"
        }
      }
    }
  }
}))`,...(Ne=(He=f.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var We,Ke,$e;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`createStory(createSource({
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
}))`,...($e=(Ke=k.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Me,Re,Qe;A.parameters={...A.parameters,docs:{...(Me=A.parameters)==null?void 0:Me.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Qe=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:Qe.source}}};var _e,Xe,Ye;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...(Ye=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Fe,Le,je;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(je=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var Ge,ze,Je;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...(Je=(ze=O.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Ue,Ze,er;E.parameters={...E.parameters,docs:{...(Ue=E.parameters)==null?void 0:Ue.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(er=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,nr,sr;I.parameters={...I.parameters,docs:{...(rr=I.parameters)==null?void 0:rr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(sr=(nr=I.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var tr,or,ar;C.parameters={...C.parameters,docs:{...(tr=C.parameters)==null?void 0:tr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...(ar=(or=C.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var cr,ir,dr;w.parameters={...w.parameters,docs:{...(cr=w.parameters)==null?void 0:cr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(dr=(ir=w.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var pr,mr,lr;B.parameters={...B.parameters,docs:{...(pr=B.parameters)==null?void 0:pr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(lr=(mr=B.parameters)==null?void 0:mr.docs)==null?void 0:lr.source}}};var Sr,hr,vr;V.parameters={...V.parameters,docs:{...(Sr=V.parameters)==null?void 0:Sr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(vr=(hr=V.parameters)==null?void 0:hr.docs)==null?void 0:vr.source}}};var ur,gr,yr;x.parameters={...x.parameters,docs:{...(ur=x.parameters)==null?void 0:ur.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(yr=(gr=x.parameters)==null?void 0:gr.docs)==null?void 0:yr.source}}};var Tr,fr,kr;D.parameters={...D.parameters,docs:{...(Tr=D.parameters)==null?void 0:Tr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}))`,...(kr=(fr=D.parameters)==null?void 0:fr.docs)==null?void 0:kr.source}}};var Ar,Pr,br;q.parameters={...q.parameters,docs:{...(Ar=q.parameters)==null?void 0:Ar.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      notExistingParameter: {
        $ref: "#/components/parameters/not-existing-parameter"
      }
    }
  }
}))`,...(br=(Pr=q.parameters)==null?void 0:Pr.docs)==null?void 0:br.source}}};var Or,Er,Ir;H.parameters={...H.parameters,docs:{...(Or=H.parameters)==null?void 0:Or.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      $ref: "#/components/servers/not-existing-server"
    }]
  }
}))`,...(Ir=(Er=H.parameters)==null?void 0:Er.docs)==null?void 0:Ir.source}}};const Qr=["ChannelID","Title","Address","Description","Summary","AddressParameters","AddressParametersWithLocation","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","ServersOneServerWithHostAndProtocol","ServersOneServerWithHostAndProtocolAndTitle","ServersOneServerWithHostAndProtocolAndDescription","ServersOneServerWithHostAndProtocolAndSummary","ServersOneServerWithHostAndProtocolAndDescriptionAndSummary","ServersOneServerWithHostAndProtocolAndBindings","ServersTwoServers","ServersTwoServersWithBindings","DescriptionSummary","DescriptionAddressParameters","DescriptionExtensions","DescriptionBindingsOneOption","DescriptionServersOneServer","AddressParametersExtensions","AddressParametersBindingsOneOption","AddressParametersServersOneServer","ExtensionsBindingsOneOption","ExtensionsServersOneServer","EdgeCaseBrokenRefBindings","EdgeCaseBrokenRefAddressParameter","EdgeCaseBrokenRefServer"];export{a as Address,d as AddressParameters,w as AddressParametersBindingsOneOption,C as AddressParametersExtensions,B as AddressParametersServersOneServer,p as AddressParametersWithLocation,l as BindingsOneOption,S as BindingsTwoOptionsSelectedFirst,h as BindingsTwoOptionsSelectedSecond,t as ChannelID,c as Description,b as DescriptionAddressParameters,E as DescriptionBindingsOneOption,O as DescriptionExtensions,I as DescriptionServersOneServer,P as DescriptionSummary,q as EdgeCaseBrokenRefAddressParameter,D as EdgeCaseBrokenRefBindings,H as EdgeCaseBrokenRefServer,m as Extensions,V as ExtensionsBindingsOneOption,x as ExtensionsServersOneServer,v as ServersOneServerWithHostAndProtocol,f as ServersOneServerWithHostAndProtocolAndBindings,g as ServersOneServerWithHostAndProtocolAndDescription,T as ServersOneServerWithHostAndProtocolAndDescriptionAndSummary,y as ServersOneServerWithHostAndProtocolAndSummary,u as ServersOneServerWithHostAndProtocolAndTitle,k as ServersTwoServers,A as ServersTwoServersWithBindings,i as Summary,o as Title,Qr as __namedExportsOrder,Rr as default};
