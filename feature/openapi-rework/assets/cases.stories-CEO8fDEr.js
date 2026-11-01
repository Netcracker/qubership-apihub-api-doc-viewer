import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as ee,r as te}from"./AsyncApiSecuritySampleStory-ByWCxJ0b.js";import{i as r,n as ne}from"./sample-cases-DDoAHGgD.js";var i;function a(){return(a=e((()=>{i=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    summary: Publishes an event
components:
  messages:
    TestMessage:
      name: TestMessage
`})))()}var o;function s(){return(s=e((()=>{o=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    description: Sends the event to the broker.
components:
  messages:
    TestMessage:
      name: TestMessage
`})))()}var c;function l(){return(l=e((()=>{c=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      summary: Event message
`})))()}var u;function d(){return(d=e((()=>{u=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      description: Carries one event.
`})))()}var f;function p(){return(p=e((()=>{f=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    summary: Event channel
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
`})))()}var m;function h(){return(h=e((()=>{m=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    description: Default event stream.
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
`})))()}var g;function _(){return(_=e((()=>{g=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
servers:
  server0:
    host: broker.example.com:9092
    protocol: kafka
    summary: Main broker
`})))()}var v;function y(){return(y=e((()=>{v=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
servers:
  server0:
    host: broker.example.com:9092
    protocol: kafka
    description: Kafka broker of the events cluster.
`})))()}var b;function x(){return(x=e((()=>{b=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
  securitySchemes:
    bearer:
      type: http
      scheme: bearer
      description: JWT issued by the identity provider.
`})))()}var S;function C(){return(C=e((()=>{S=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
`})))()}var w;function T(){return(T=e((()=>{w=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
            description: Event identifier
`})))()}var E;function D(){return(D=e((()=>{E=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      headers:
        type: object
        properties:
          traceId:
            type: string
            description: Trace identifier
`})))()}var O;function k(){return(k=e((()=>{O=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.{region}
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    parameters:
      region:
        description: Broker region
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
`})))()}var A;function j(){return(j=e((()=>{A=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.{region}
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    parameters:
      region:
        location: $message.payload#/region
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
`})))()}var M;function N(){return(N=e((()=>{M=`asyncapi: 3.0.0
info:
  title: Display mode
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      bindings:
        kafka:
          key:
            type: string
            description: Partition key
`})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),t(),r(),P=Object.fromEntries(ne(Object.assign({"../../../../samples/async-api-display-mode-simple/01-operation-summary/sample.yaml":i,"../../../../samples/async-api-display-mode-simple/02-operation-description/sample.yaml":o,"../../../../samples/async-api-display-mode-simple/03-message-summary/sample.yaml":c,"../../../../samples/async-api-display-mode-simple/04-message-description/sample.yaml":u,"../../../../samples/async-api-display-mode-simple/05-channel-summary/sample.yaml":f,"../../../../samples/async-api-display-mode-simple/06-channel-description/sample.yaml":m,"../../../../samples/async-api-display-mode-simple/07-server-summary/sample.yaml":g,"../../../../samples/async-api-display-mode-simple/08-server-description/sample.yaml":v,"../../../../samples/async-api-display-mode-simple/09-security-scheme-description/sample.yaml":b,"../../../../samples/async-api-display-mode-simple/10-security-scope-description/sample.yaml":S,"../../../../samples/async-api-display-mode-simple/11-payload-schema-description/sample.yaml":w,"../../../../samples/async-api-display-mode-simple/12-headers-schema-description/sample.yaml":E,"../../../../samples/async-api-display-mode-simple/13-channel-parameter-description/sample.yaml":O,"../../../../samples/async-api-display-mode-simple/14-channel-parameter-location/sample.yaml":A,"../../../../samples/async-api-display-mode-simple/15-bindings-schema-description/sample.yaml":M}),[`/sample.yaml`]).map(({caseId:e,source:t})=>[e,t])),F={id:`async-api-suite-display-mode-simple`,title:`Async API Suite (Display Mode = simple)`,component:n,argTypes:ee,args:te},I=e=>{let t=P[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,yaml:t}}},L=I(`01-operation-summary`),R=I(`02-operation-description`),z=I(`03-message-summary`),B=I(`04-message-description`),V=I(`05-channel-summary`),H=I(`06-channel-description`),U=I(`07-server-summary`),W=I(`08-server-description`),G=I(`09-security-scheme-description`),K=I(`10-security-scope-description`),q=I(`11-payload-schema-description`),J=I(`12-headers-schema-description`),Y=I(`13-channel-parameter-description`),X=I(`14-channel-parameter-location`),Z=I(`15-bindings-schema-description`),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("01-operation-summary")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("02-operation-description")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("03-message-summary")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("04-message-description")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("05-channel-summary")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("06-channel-description")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("07-server-summary")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("08-server-description")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("09-security-scheme-description")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("10-security-scope-description")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("11-payload-schema-description")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("12-headers-schema-description")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("13-channel-parameter-description")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("14-channel-parameter-location")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("15-bindings-schema-description")`,...Z.parameters?.docs?.source}}},Q=[`Case_01_operation_summary`,`Case_02_operation_description`,`Case_03_message_summary`,`Case_04_message_description`,`Case_05_channel_summary`,`Case_06_channel_description`,`Case_07_server_summary`,`Case_08_server_description`,`Case_09_security_scheme_description`,`Case_10_security_scope_description`,`Case_11_payload_schema_description`,`Case_12_headers_schema_description`,`Case_13_channel_parameter_description`,`Case_14_channel_parameter_location`,`Case_15_bindings_schema_description`]})))()}$();export{L as Case_01_operation_summary,R as Case_02_operation_description,z as Case_03_message_summary,B as Case_04_message_description,V as Case_05_channel_summary,H as Case_06_channel_description,U as Case_07_server_summary,W as Case_08_server_description,G as Case_09_security_scheme_description,K as Case_10_security_scope_description,q as Case_11_payload_schema_description,J as Case_12_headers_schema_description,Y as Case_13_channel_parameter_description,X as Case_14_channel_parameter_location,Z as Case_15_bindings_schema_description,Q as __namedExportsOrder,F as default};