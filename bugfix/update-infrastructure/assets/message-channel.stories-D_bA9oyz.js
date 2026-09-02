import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./AsyncApiOperationViewer-BSRon3JG.js";import{a as r,g as i,h as a,m as o,r as s}from"./preprocess-CVyTm_I1.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{t(),i(),s(),{userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Async API Suite/Message Channel`,component:n,parameters:{},argTypes:{source:{control:`object`}},args:{source:{}}},d=`send-operation`,f=`ChannelID`,p=`MessageID`,m=({channel:e,operationType:t=`send`,servers:n})=>({asyncapi:`3.0.0`,...n?{servers:n}:{},operations:{[d]:{action:t,channel:{$ref:`#/channels/${f}`},messages:[{$ref:`#/channels/${f}/messages/${p}`}]}},channels:{[f]:{...e,...n?{servers:Object.keys(n).map(e=>({$ref:`#/servers/${e}`}))}:{},messages:{[p]:{name:`Message Name`}}}}}),h=(e,t)=>({args:{devMode:!0,source:r({source:e,storyName:t}),operationKeys:{operationKey:d,messageKey:p},referenceNamePropertyKey:a},play:async({canvasElement:e})=>{let t=await l(e).findAllByTestId(`message-channel`);await c.click(t[0])}}),g=h(m({channel:{}})),_=h(m({channel:{title:`Channel Title`}})),v=h(m({channel:{address:`test.address`}})),y=h(m({channel:{description:`Channel description`}})),b=h(m({channel:{summary:`Channel summary`}})),x=h(m({channel:{parameters:{param1:{description:`Parameter description`}}}})),S=h(m({channel:{parameters:{param1:{description:`Parameter description`,location:`$.message.headers.correlationId`}}}})),C=h(m({channel:{...o}})),w=h(m({channel:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.user.created`,clientId:`api-doc-viewer-client`}}}})),T=h(m({channel:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.order.created`},mqtt:{bindingVersion:`0.2.0`,clientId:`mqtt-client-01`}}}})),E=h(m({channel:{bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.payment.updated`},mqtt:{bindingVersion:`0.2.0`,clientId:`mqtt-client-02`}}}})),D=h(m({channel:{},servers:{"first-server-id":{host:`localhost`,protocol:`http`}}})),O=h(m({channel:{},servers:{"first-server-id":{title:`Server Title`,host:`localhost`,protocol:`http`}}})),k=h(m({channel:{},servers:{"first-server-id":{host:`localhost`,protocol:`http`,description:`Server description`}}})),A=h(m({channel:{},servers:{"first-server-id":{host:`localhost`,protocol:`http`,summary:`Server summary`}}})),j=h(m({channel:{},servers:{"first-server-id":{host:`localhost`,protocol:`http`,description:`Server description`,summary:`Server summary`}}})),M=h(m({channel:{},servers:{"first-server-id":{host:`localhost`,protocol:`http`,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.user.created`,clientId:`api-doc-viewer-client`}}}}})),N=h(m({channel:{},servers:{"first-server":{title:`Kafka Server Title`,host:`kafka.server.com`,protocol:`kafka`,description:`The Kafka server to connect to`},"second-server":{title:`AMQP Server Title`,host:`amqp.server.com`,protocol:`amqp`,description:`The AMQP server to connect to`}}})),P=h(m({channel:{},servers:{"first-server":{title:`Kafka Server Title`,host:`kafka.server.com`,protocol:`kafka`,description:`The Kafka server to connect to`,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.user.created`,clientId:`api-doc-viewer-client`}}},"second-server":{title:`AMQP Server Title`,host:`amqp.server.com`,protocol:`amqp`,description:`The AMQP server to connect to`,bindings:{amqp:{bindingVersion:`0.2.0`,clientId:`mqtt-client-01`}}}}})),F=h(m({channel:{description:`Channel description`,summary:`Channel summary`}})),I=h(m({channel:{description:`Channel description`,parameters:{param1:{description:`Parameter description`}}}})),L=h(m({channel:{description:`Channel description`,...o}})),R=h(m({channel:{description:`Channel description`,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.channel.described`,clientId:`api-doc-viewer-client`}}}})),z=h(m({channel:{description:`Channel description`},servers:{"server-with-title":{title:`Server Title`,host:`localhost`,protocol:`http`,description:`The HTTP server to connect to`}}})),B=h(m({channel:{parameters:{param1:{description:`Parameter description`}},...o}})),V=h(m({channel:{parameters:{param1:{description:`Parameter description`}},bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.parameter.changed`,clientId:`api-doc-viewer-client`}}}})),H=h(m({channel:{parameters:{param1:{description:`Parameter description`}}},servers:{"server-with-title":{title:`Server Title`,host:`localhost`,protocol:`http`,description:`The HTTP server to connect to`}}})),U=h(m({channel:{...o,bindings:{kafka:{bindingVersion:`0.5.0`,topic:`events.extension.changed`,clientId:`api-doc-viewer-client`}}}})),W=h(m({channel:{...o},servers:{"server-with-title":{title:`Server Title`,host:`localhost`,protocol:`http`,description:`The HTTP server to connect to`}}})),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {}
}))`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    title: "Channel Title"
  }
}))`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    address: "test.address"
  }
}))`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description"
  }
}))`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    summary: "Channel summary"
  }
}))`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
        location: '$.message.headers.correlationId'
      }
    }
  }
}))`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    ...EXTENSIONS
  }
}))`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
        topic: "events.user.created",
        clientId: "api-doc-viewer-client"
      }
    }
  }
}))`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      title: "Server Title",
      host: "localhost",
      protocol: "http"
    }
  }
}))`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description"
    }
  }
}))`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      summary: "Server summary"
    }
  }
}))`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {},
  servers: {
    'first-server-id': {
      host: "localhost",
      protocol: "http",
      description: "Server description",
      summary: "Server summary"
    }
  }
}))`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary"
  }
}))`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description"
      }
    }
  }
}))`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS
  }
}))`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description"
      }
    },
    ...EXTENSIONS
  }
}))`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createStory(createSource({
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
}))`,...W.parameters?.docs?.source}}},G=`ChannelID.Title.Address.Description.Summary.AddressParameters.AddressParametersWithLocation.Extensions.BindingsOneOption.BindingsTwoOptionsSelectedFirst.BindingsTwoOptionsSelectedSecond.ServersOneServerWithHostAndProtocol.ServersOneServerWithHostAndProtocolAndTitle.ServersOneServerWithHostAndProtocolAndDescription.ServersOneServerWithHostAndProtocolAndSummary.ServersOneServerWithHostAndProtocolAndDescriptionAndSummary.ServersOneServerWithHostAndProtocolAndBindings.ServersTwoServers.ServersTwoServersWithBindings.DescriptionSummary.DescriptionAddressParameters.DescriptionExtensions.DescriptionBindingsOneOption.DescriptionServersOneServer.AddressParametersExtensions.AddressParametersBindingsOneOption.AddressParametersServersOneServer.ExtensionsBindingsOneOption.ExtensionsServersOneServer`.split(`.`)})))()}K();export{v as Address,x as AddressParameters,V as AddressParametersBindingsOneOption,B as AddressParametersExtensions,H as AddressParametersServersOneServer,S as AddressParametersWithLocation,w as BindingsOneOption,T as BindingsTwoOptionsSelectedFirst,E as BindingsTwoOptionsSelectedSecond,g as ChannelID,y as Description,I as DescriptionAddressParameters,R as DescriptionBindingsOneOption,L as DescriptionExtensions,z as DescriptionServersOneServer,F as DescriptionSummary,C as Extensions,U as ExtensionsBindingsOneOption,W as ExtensionsServersOneServer,D as ServersOneServerWithHostAndProtocol,M as ServersOneServerWithHostAndProtocolAndBindings,k as ServersOneServerWithHostAndProtocolAndDescription,j as ServersOneServerWithHostAndProtocolAndDescriptionAndSummary,A as ServersOneServerWithHostAndProtocolAndSummary,O as ServersOneServerWithHostAndProtocolAndTitle,N as ServersTwoServers,P as ServersTwoServersWithBindings,b as Summary,_ as Title,G as __namedExportsOrder,u as default};