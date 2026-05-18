import{A as Vr}from"./AsyncApiOperationViewer-75fefc24.js";import{w as xr,u as Dr}from"./index-d5b0668c.js";import{p as qr,T as Hr,E as s}from"./preprocess-6a043fa8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-d7a9dfd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-199d72a2.js";import"./GraphQLOperationDiffViewer-b214f235.js";import"./index-442a5f79.js";const Fr={title:"Async API Suite/Message Channel",component:Vr,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},Cr="send-operation",K="ChannelID",$="MessageID",e=({channel:N,operationType:W="send",servers:n})=>({asyncapi:"3.0.0",...n?{servers:n}:{},operations:{[Cr]:{action:W,channel:{$ref:`#/channels/${K}`},messages:[{$ref:`#/channels/${K}/messages/${$}`}]}},channels:{[K]:{...N,...n?{servers:Object.keys(n).map(M=>({$ref:`#/servers/${M}`}))}:{},messages:{[$]:{name:"Message Name"}}}}}),r=(N,W)=>({args:{devMode:!0,source:qr({source:N,storyName:W}),operationKeys:{operationKey:Cr,messageKey:$},referenceNamePropertyKey:Hr},play:async({canvasElement:n})=>{const Br=await xr(n).findAllByTestId("message-channel");await Dr.click(Br[0])}}),t=r(e({channel:{}})),o=r(e({channel:{title:"Channel Title"}})),a=r(e({channel:{address:"test.address"}})),c=r(e({channel:{description:"Channel description"}})),i=r(e({channel:{summary:"Channel summary"}})),d=r(e({channel:{parameters:{param1:{description:"Parameter description"}}}})),p=r(e({channel:{parameters:{param1:{description:"Parameter description",location:"$.message.headers.correlationId"}}}})),m=r(e({channel:{...s}})),l=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}})),h=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.order.created"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),S=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.payment.updated"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),v=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http"}}})),u=r(e({channel:{},servers:{"first-server-id":{title:"Server Title",host:"localhost",protocol:"http"}}})),g=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",description:"Server description"}}})),y=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",summary:"Server summary"}}})),f=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",description:"Server description",summary:"Server summary"}}})),T=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}}})),k=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to"},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to"}}})),A=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to",bindings:{amqp:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}}})),P=r(e({channel:{description:"Channel description",summary:"Channel summary"}})),b=r(e({channel:{description:"Channel description",parameters:{param1:{description:"Parameter description"}}}})),O=r(e({channel:{description:"Channel description",...s}})),E=r(e({channel:{description:"Channel description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.channel.described",clientId:"api-doc-viewer-client"}}}})),I=r(e({channel:{description:"Channel description"},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),w=r(e({channel:{parameters:{param1:{description:"Parameter description"}},...s}})),C=r(e({channel:{parameters:{param1:{description:"Parameter description"}},bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.parameter.changed",clientId:"api-doc-viewer-client"}}}})),B=r(e({channel:{parameters:{param1:{description:"Parameter description"}}},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),V=r(e({channel:{...s,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.extension.changed",clientId:"api-doc-viewer-client"}}}})),x=r(e({channel:{...s},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),D=r(e({channel:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}})),q=r(e({channel:{parameters:{notExistingParameter:{$ref:"#/components/parameters/not-existing-parameter"}}}})),H=r(e({channel:{servers:[{$ref:"#/components/servers/not-existing-server"}]}}));var R,Q,_;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...(_=(Q=t.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var X,Y,F;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,...(F=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var L,j,G;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...(G=(j=a.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var z,J,U;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...(U=(J=c.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Z,ee,re;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,se,te;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(te=(se=d.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ae,ce;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...(ce=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,de,pe;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,le,he;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(he=(le=l.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var Se,ve,ue;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ue=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var ge,ye,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Te,ke,Ae;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(Ae=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Pe,be,Oe;u.parameters={...u.parameters,docs:{...(Pe=u.parameters)==null?void 0:Pe.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      title: "Server Title",
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(Oe=(be=u.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};var Ee,Ie,we;g.parameters={...g.parameters,docs:{...(Ee=g.parameters)==null?void 0:Ee.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description"
    }
  }
}))`,...(we=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ce,Be,Ve;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      summary: "Server summary"
    }
  }
}))`,...(Ve=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var xe,De,qe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description",
      summary: "Server summary"
    }
  }
}))`,...(qe=(De=f.parameters)==null?void 0:De.docs)==null?void 0:qe.source}}};var He,Ne,We;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(We=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Ke,$e,Me;k.parameters={...k.parameters,docs:{...(Ke=k.parameters)==null?void 0:Ke.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Me=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:Me.source}}};var Re,Qe,_e;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(_e=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var Xe,Ye,Fe;P.parameters={...P.parameters,docs:{...(Xe=P.parameters)==null?void 0:Xe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...(Fe=(Ye=P.parameters)==null?void 0:Ye.docs)==null?void 0:Fe.source}}};var Le,je,Ge;b.parameters={...b.parameters,docs:{...(Le=b.parameters)==null?void 0:Le.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(Ge=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var ze,Je,Ue;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...(Ue=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Ze,er,rr;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(rr=(er=E.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var nr,sr,tr;I.parameters={...I.parameters,docs:{...(nr=I.parameters)==null?void 0:nr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(tr=(sr=I.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var or,ar,cr;w.parameters={...w.parameters,docs:{...(or=w.parameters)==null?void 0:or.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...(cr=(ar=w.parameters)==null?void 0:ar.docs)==null?void 0:cr.source}}};var ir,dr,pr;C.parameters={...C.parameters,docs:{...(ir=C.parameters)==null?void 0:ir.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(pr=(dr=C.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var mr,lr,hr;B.parameters={...B.parameters,docs:{...(mr=B.parameters)==null?void 0:mr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(hr=(lr=B.parameters)==null?void 0:lr.docs)==null?void 0:hr.source}}};var Sr,vr,ur;V.parameters={...V.parameters,docs:{...(Sr=V.parameters)==null?void 0:Sr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ur=(vr=V.parameters)==null?void 0:vr.docs)==null?void 0:ur.source}}};var gr,yr,fr;x.parameters={...x.parameters,docs:{...(gr=x.parameters)==null?void 0:gr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(fr=(yr=x.parameters)==null?void 0:yr.docs)==null?void 0:fr.source}}};var Tr,kr,Ar;D.parameters={...D.parameters,docs:{...(Tr=D.parameters)==null?void 0:Tr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}))`,...(Ar=(kr=D.parameters)==null?void 0:kr.docs)==null?void 0:Ar.source}}};var Pr,br,Or;q.parameters={...q.parameters,docs:{...(Pr=q.parameters)==null?void 0:Pr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      notExistingParameter: {
        $ref: "#/components/parameters/not-existing-parameter"
      }
    }
  }
}))`,...(Or=(br=q.parameters)==null?void 0:br.docs)==null?void 0:Or.source}}};var Er,Ir,wr;H.parameters={...H.parameters,docs:{...(Er=H.parameters)==null?void 0:Er.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      $ref: "#/components/servers/not-existing-server"
    }]
  }
}))`,...(wr=(Ir=H.parameters)==null?void 0:Ir.docs)==null?void 0:wr.source}}};const Lr=["ChannelID","Title","Address","Description","Summary","AddressParameters","AddressParametersWithLocation","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","ServersOneServerWithHostAndProtocol","ServersOneServerWithHostAndProtocolAndTitle","ServersOneServerWithHostAndProtocolAndDescription","ServersOneServerWithHostAndProtocolAndSummary","ServersOneServerWithHostAndProtocolAndDescriptionAndSummary","ServersOneServerWithHostAndProtocolAndBindings","ServersTwoServers","ServersTwoServersWithBindings","DescriptionSummary","DescriptionAddressParameters","DescriptionExtensions","DescriptionBindingsOneOption","DescriptionServersOneServer","AddressParametersExtensions","AddressParametersBindingsOneOption","AddressParametersServersOneServer","ExtensionsBindingsOneOption","ExtensionsServersOneServer","EdgeCaseBrokenRefBindings","EdgeCaseBrokenRefAddressParameter","EdgeCaseBrokenRefServer"];export{a as Address,d as AddressParameters,C as AddressParametersBindingsOneOption,w as AddressParametersExtensions,B as AddressParametersServersOneServer,p as AddressParametersWithLocation,l as BindingsOneOption,h as BindingsTwoOptionsSelectedFirst,S as BindingsTwoOptionsSelectedSecond,t as ChannelID,c as Description,b as DescriptionAddressParameters,E as DescriptionBindingsOneOption,O as DescriptionExtensions,I as DescriptionServersOneServer,P as DescriptionSummary,q as EdgeCaseBrokenRefAddressParameter,D as EdgeCaseBrokenRefBindings,H as EdgeCaseBrokenRefServer,m as Extensions,V as ExtensionsBindingsOneOption,x as ExtensionsServersOneServer,v as ServersOneServerWithHostAndProtocol,T as ServersOneServerWithHostAndProtocolAndBindings,g as ServersOneServerWithHostAndProtocolAndDescription,f as ServersOneServerWithHostAndProtocolAndDescriptionAndSummary,y as ServersOneServerWithHostAndProtocolAndSummary,u as ServersOneServerWithHostAndProtocolAndTitle,k as ServersTwoServers,A as ServersTwoServersWithBindings,i as Summary,o as Title,Lr as __namedExportsOrder,Fr as default};
