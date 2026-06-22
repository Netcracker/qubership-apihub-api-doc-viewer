import{A as Tr}from"./AsyncApiOperationViewer-5896dc8d.js";import{w as kr,u as Ar}from"./index-d5b0668c.js";import{p as fr,T as Pr,E as t}from"./preprocess-c8b9481f.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-40315de9.js";import"./DdlTableViewer-45a8872f.js";import"./GraphPropNodeViewer-300576ee.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-cb5021da.js";import"./GraphQLOperationViewer-88ec46ea.js";import"./index-442a5f79.js";const Wr={title:"Async API Suite/Message Channel",component:Tr,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},gr="send-operation",B="ChannelID",W="MessageID",e=({channel:H,operationType:N="send",servers:n})=>({asyncapi:"3.0.0",...n?{servers:n}:{},operations:{[gr]:{action:N,channel:{$ref:`#/channels/${B}`},messages:[{$ref:`#/channels/${B}/messages/${W}`}]}},channels:{[B]:{...H,...n?{servers:Object.keys(n).map(K=>({$ref:`#/servers/${K}`}))}:{},messages:{[W]:{name:"Message Name"}}}}}),r=(H,N)=>({args:{devMode:!0,source:fr({source:H,storyName:N}),operationKeys:{operationKey:gr,messageKey:W},referenceNamePropertyKey:Pr},play:async({canvasElement:n})=>{const yr=await kr(n).findAllByTestId("message-channel");await Ar.click(yr[0])}}),s=r(e({channel:{}})),o=r(e({channel:{title:"Channel Title"}})),a=r(e({channel:{address:"test.address"}})),c=r(e({channel:{description:"Channel description"}})),i=r(e({channel:{summary:"Channel summary"}})),d=r(e({channel:{parameters:{param1:{description:"Parameter description"}}}})),p=r(e({channel:{parameters:{param1:{description:"Parameter description",location:"$.message.headers.correlationId"}}}})),l=r(e({channel:{...t}})),m=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}})),h=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.order.created"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),S=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.payment.updated"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),v=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http"}}})),u=r(e({channel:{},servers:{"first-server-id":{title:"Server Title",host:"localhost",protocol:"http"}}})),g=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",description:"Server description"}}})),y=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",summary:"Server summary"}}})),T=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",description:"Server description",summary:"Server summary"}}})),k=r(e({channel:{},servers:{"first-server-id":{host:"localhost",protocol:"http",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}}})),A=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to"},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to"}}})),f=r(e({channel:{},servers:{"first-server":{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}},"second-server":{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to",bindings:{amqp:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}}})),P=r(e({channel:{description:"Channel description",summary:"Channel summary"}})),O=r(e({channel:{description:"Channel description",parameters:{param1:{description:"Parameter description"}}}})),b=r(e({channel:{description:"Channel description",...t}})),E=r(e({channel:{description:"Channel description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.channel.described",clientId:"api-doc-viewer-client"}}}})),I=r(e({channel:{description:"Channel description"},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),w=r(e({channel:{parameters:{param1:{description:"Parameter description"}},...t}})),C=r(e({channel:{parameters:{param1:{description:"Parameter description"}},bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.parameter.changed",clientId:"api-doc-viewer-client"}}}})),V=r(e({channel:{parameters:{param1:{description:"Parameter description"}}},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}})),D=r(e({channel:{...t,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.extension.changed",clientId:"api-doc-viewer-client"}}}})),q=r(e({channel:{...t},servers:{"server-with-title":{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}}}));var x,M,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...($=(M=s.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var Q,_,X;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,...(X=(_=o.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var R,Y,F;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...(F=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var L,j,G;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var z,J,U;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...(U=(J=i.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Z,ee,re;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(re=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,se;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...(se=(te=p.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ae,ce;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...(ce=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,de,pe;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var le,me,he;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(he=(me=h.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var Se,ve,ue;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ue=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var ge,ye,Te;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(Te=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var ke,Ae,fe;u.parameters={...u.parameters,docs:{...(ke=u.parameters)==null?void 0:ke.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      title: "Server Title",
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...(fe=(Ae=u.parameters)==null?void 0:Ae.docs)==null?void 0:fe.source}}};var Pe,Oe,be;g.parameters={...g.parameters,docs:{...(Pe=g.parameters)==null?void 0:Pe.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description"
    }
  }
}))`,...(be=(Oe=g.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};var Ee,Ie,we;y.parameters={...y.parameters,docs:{...(Ee=y.parameters)==null?void 0:Ee.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      summary: "Server summary"
    }
  }
}))`,...(we=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ce,Ve,De;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description",
      summary: "Server summary"
    }
  }
}))`,...(De=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var qe,He,Ne;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Ne=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Be,We,Ke;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Ke=(We=A.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var xe,Me,$e;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...($e=(Me=f.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var Qe,_e,Xe;P.parameters={...P.parameters,docs:{...(Qe=P.parameters)==null?void 0:Qe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...(Xe=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Xe.source}}};var Re,Ye,Fe;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(Fe=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Fe.source}}};var Le,je,Ge;b.parameters={...b.parameters,docs:{...(Le=b.parameters)==null?void 0:Le.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...(Ge=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var ze,Je,Ue;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Ue=(Je=E.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Ze,er,rr;I.parameters={...I.parameters,docs:{...(Ze=I.parameters)==null?void 0:Ze.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(rr=(er=I.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var nr,tr,sr;w.parameters={...w.parameters,docs:{...(nr=w.parameters)==null?void 0:nr.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...(sr=(tr=w.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var or,ar,cr;C.parameters={...C.parameters,docs:{...(or=C.parameters)==null?void 0:or.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(cr=(ar=C.parameters)==null?void 0:ar.docs)==null?void 0:cr.source}}};var ir,dr,pr;V.parameters={...V.parameters,docs:{...(ir=V.parameters)==null?void 0:ir.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(pr=(dr=V.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var lr,mr,hr;D.parameters={...D.parameters,docs:{...(lr=D.parameters)==null?void 0:lr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(hr=(mr=D.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var Sr,vr,ur;q.parameters={...q.parameters,docs:{...(Sr=q.parameters)==null?void 0:Sr.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ur=(vr=q.parameters)==null?void 0:vr.docs)==null?void 0:ur.source}}};const Kr=["ChannelID","Title","Address","Description","Summary","AddressParameters","AddressParametersWithLocation","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","ServersOneServerWithHostAndProtocol","ServersOneServerWithHostAndProtocolAndTitle","ServersOneServerWithHostAndProtocolAndDescription","ServersOneServerWithHostAndProtocolAndSummary","ServersOneServerWithHostAndProtocolAndDescriptionAndSummary","ServersOneServerWithHostAndProtocolAndBindings","ServersTwoServers","ServersTwoServersWithBindings","DescriptionSummary","DescriptionAddressParameters","DescriptionExtensions","DescriptionBindingsOneOption","DescriptionServersOneServer","AddressParametersExtensions","AddressParametersBindingsOneOption","AddressParametersServersOneServer","ExtensionsBindingsOneOption","ExtensionsServersOneServer"];export{a as Address,d as AddressParameters,C as AddressParametersBindingsOneOption,w as AddressParametersExtensions,V as AddressParametersServersOneServer,p as AddressParametersWithLocation,m as BindingsOneOption,h as BindingsTwoOptionsSelectedFirst,S as BindingsTwoOptionsSelectedSecond,s as ChannelID,c as Description,O as DescriptionAddressParameters,E as DescriptionBindingsOneOption,b as DescriptionExtensions,I as DescriptionServersOneServer,P as DescriptionSummary,l as Extensions,D as ExtensionsBindingsOneOption,q as ExtensionsServersOneServer,v as ServersOneServerWithHostAndProtocol,k as ServersOneServerWithHostAndProtocolAndBindings,g as ServersOneServerWithHostAndProtocolAndDescription,T as ServersOneServerWithHostAndProtocolAndDescriptionAndSummary,y as ServersOneServerWithHostAndProtocolAndSummary,u as ServersOneServerWithHostAndProtocolAndTitle,A as ServersTwoServers,f as ServersTwoServersWithBindings,i as Summary,o as Title,Kr as __namedExportsOrder,Wr as default};
