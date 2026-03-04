import{A as ar}from"./AsyncApiOperationViewer-849a0652.js";import{p as tr,T as or,E as n}from"./preprocess-5c379899.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-63b3700d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-6717126a.js";import"./GraphQLOperationDiffViewer-10f4b97f.js";const ur={title:"Async API Suite/Message Channel",component:ar,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},sr="send-operation",N="ChannelID",D="MessageID",e=({channel:x,operationType:B="send"})=>({asyncapi:"3.0.0",operations:{[sr]:{action:B,channel:{$ref:`#/channels/${N}`},messages:[{$ref:`#/channels/${N}/messages/${D}`}]}},channels:{[N]:{...x,messages:{[D]:{name:"Message Name"}}}}}),r=(x,B)=>({args:{source:tr({source:x,storyName:B}),operationKey:sr,operationType:"send",messageKey:D,referenceNamePropertyKey:or}}),s=r(e({channel:{}})),a=r(e({channel:{title:"Channel Title"}})),t=r(e({channel:{address:"test.address"}})),o=r(e({channel:{description:"Channel description"}})),c=r(e({channel:{summary:"Channel summary"}})),i=r(e({channel:{parameters:{param1:{description:"Parameter description"}}}})),p=r(e({channel:{parameters:{param1:{description:"Parameter description",location:"$.message.headers.correlationId"}}}})),d=r(e({channel:{...n}})),m=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.user.created",clientId:"api-doc-viewer-client"}}}})),l=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.order.created"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-01"}}}})),S=r(e({channel:{bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.payment.updated"},mqtt:{bindingVersion:"0.2.0",clientId:"mqtt-client-02"}}}})),h=r(e({channel:{servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),u=r(e({channel:{servers:[{title:"Kafka Server Title",host:"kafka.server.com",protocol:"kafka",description:"The Kafka server to connect to"},{title:"AMQP Server Title",host:"amqp.server.com",protocol:"amqp",description:"The AMQP server to connect to"}]}})),g=r(e({channel:{description:"Channel description",summary:"Channel summary"}})),v=r(e({channel:{description:"Channel description",parameters:{param1:{description:"Parameter description"}}}})),T=r(e({channel:{description:"Channel description",...n}})),y=r(e({channel:{description:"Channel description",bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.channel.described",clientId:"api-doc-viewer-client"}}}})),k=r(e({channel:{description:"Channel description",servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),E=r(e({channel:{parameters:{param1:{description:"Parameter description"}},...n}})),b=r(e({channel:{parameters:{param1:{description:"Parameter description"}},bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.parameter.changed",clientId:"api-doc-viewer-client"}}}})),P=r(e({channel:{parameters:{param1:{description:"Parameter description"}},servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),f=r(e({channel:{...n,bindings:{kafka:{bindingVersion:"0.5.0",topic:"events.extension.changed",clientId:"api-doc-viewer-client"}}}})),O=r(e({channel:{...n,servers:[{title:"Server Title",host:"localhost",protocol:"http",description:"The HTTP server to connect to"}]}})),A=r(e({channel:{bindings:{$ref:"#/components/bindings/not-existing-bindings"}}}),"edge-case-broken-ref-bindings"),C=r(e({channel:{parameters:{notExistingParameter:{$ref:"#/components/parameters/not-existing-parameter"}}}}),"edge-case-broken-ref-address-parameter"),I=r(e({channel:{servers:[{$ref:"#/components/servers/not-existing-server"}]}}),"edge-case-broken-ref-server");var V,w,$;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...($=(w=s.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var q,R,K;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,...(K=(R=a.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var H,M,_;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...(_=(M=t.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var X,Q,Y;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...(Y=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var F,L,W;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var j,G,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(z=(G=i.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,U,Z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...(Z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var ee,re,ne;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...(ne=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,te;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...(te=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ce,ie;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ie=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var pe,de,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var le,Se,he;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(he=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var ue,ge,ve;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(ve=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var Te,ye,ke;g.parameters={...g.parameters,docs:{...(Te=g.parameters)==null?void 0:Te.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...(ke=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Ee,be,Pe;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...(Pe=(be=v.parameters)==null?void 0:be.docs)==null?void 0:Pe.source}}};var fe,Oe,Ae;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...(Ae=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Ce,Ie,xe;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(xe=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Be,Ne,De;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(De=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Ve,we,$e;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...($e=(we=E.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var qe,Re,Ke;b.parameters={...b.parameters,docs:{...(qe=b.parameters)==null?void 0:qe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Ke=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:Ke.source}}};var He,Me,_e;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(_e=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Xe,Qe,Ye;f.parameters={...f.parameters,docs:{...(Xe=f.parameters)==null?void 0:Xe.docs,source:{originalSource:`createStory(createSource({
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
}))`,...(Ye=(Qe=f.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Fe,Le,We;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS,
    servers: [{
      title: "Server Title",
      host: "localhost",
      protocol: "http",
      description: "The HTTP server to connect to"
    }]
  }
}))`,...(We=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var je,Ge,ze;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      $ref: "#/components/bindings/not-existing-bindings"
    }
  }
}), 'edge-case-broken-ref-bindings')`,...(ze=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Je,Ue,Ze;C.parameters={...C.parameters,docs:{...(Je=C.parameters)==null?void 0:Je.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      notExistingParameter: {
        $ref: "#/components/parameters/not-existing-parameter"
      }
    }
  }
}), 'edge-case-broken-ref-address-parameter')`,...(Ze=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var er,rr,nr;I.parameters={...I.parameters,docs:{...(er=I.parameters)==null?void 0:er.docs,source:{originalSource:`createStory(createSource({
  channel: {
    servers: [{
      $ref: "#/components/servers/not-existing-server"
    }]
  }
}), 'edge-case-broken-ref-server')`,...(nr=(rr=I.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};const gr=["ChannelID","Title","Address","Description","Summary","AddressParameters","AddressParametersWithLocation","Extensions","BindingsOneOption","BindingsTwoOptionsSelectedFirst","BindingsTwoOptionsSelectedSecond","ServersOneServer","ServersTwoServers","DescriptionSummary","DescriptionAddressParameters","DescriptionExtensions","DescriptionBindingsOneOption","DescriptionServersOneServer","AddressParametersExtensions","AddressParametersBindingsOneOption","AddressParametersServersOneServer","ExtensionsBindingsOneOption","ExtensionsServersOneServer","EdgeCaseBrokenRefBindings","EdgeCaseBrokenRefAddressParameter","EdgeCaseBrokenRefServer"];export{t as Address,i as AddressParameters,b as AddressParametersBindingsOneOption,E as AddressParametersExtensions,P as AddressParametersServersOneServer,p as AddressParametersWithLocation,m as BindingsOneOption,l as BindingsTwoOptionsSelectedFirst,S as BindingsTwoOptionsSelectedSecond,s as ChannelID,o as Description,v as DescriptionAddressParameters,y as DescriptionBindingsOneOption,T as DescriptionExtensions,k as DescriptionServersOneServer,g as DescriptionSummary,C as EdgeCaseBrokenRefAddressParameter,A as EdgeCaseBrokenRefBindings,I as EdgeCaseBrokenRefServer,d as Extensions,f as ExtensionsBindingsOneOption,O as ExtensionsServersOneServer,h as ServersOneServer,u as ServersTwoServers,c as Summary,a as Title,gr as __namedExportsOrder,ur as default};
