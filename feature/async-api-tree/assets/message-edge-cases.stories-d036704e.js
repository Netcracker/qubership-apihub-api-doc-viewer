import{A as fe}from"./AsyncApiOperationViewer-5fefe2a7.js";import{p as e}from"./preprocess-17178f8b.js";import{c as k,C as n,d as s}from"./index-013c945b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const Ae={title:"Async Api Suite/Message Edge Cases",component:fe,parameters:{},argTypes:{source:{control:{disable:!0},table:{disable:!0}}},args:{source:{}}},a={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",bindings:{...k}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},r={args:{source:e({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",bindings:{...k}}},components:{schemas:{...n}}}})}},i={args:{source:e({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",bindings:{...k}}},components:{schemas:{...s}}}})}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{$ref:"#/components/schemas/foo"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...n}}}})}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...s}}}})}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{$ref:"#/components/schemas/foo"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...n}}}})}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...s}}}})}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...n}}}})}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...s}}}})}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...n}}}})}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...s}}}})}};var $,A,C;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            bindings: {
              ...BINDINGS_WITH_SCHEMA_FOO_REF
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42
            }
          }
        }
      }
    })
  }
}`,...(C=(A=a.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var K,M,R;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      circular: true,
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            bindings: {
              ...BINDINGS_WITH_SCHEMA_FOO_REF
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_A
          }
        }
      }
    })
  }
}`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var _,F,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      circular: true,
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            bindings: {
              ...BINDINGS_WITH_SCHEMA_FOO_REF
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_B
          }
        }
      }
    })
  }
}`,...(b=(F=i.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var I,S,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              $ref: '#/components/schemas/foo'
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42
            }
          }
        }
      }
    })
  }
}`,...(W=(S=c.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var D,H,w;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              $ref: '#/components/schemas/foo'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_A
          }
        }
      }
    })
  }
}`,...(w=(H=t.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var B,v,E;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              $ref: '#/components/schemas/foo'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_B
          }
        }
      }
    })
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var N,j,x;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              $ref: '#/components/schemas/foo'
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42
            }
          }
        }
      }
    })
  }
}`,...(x=(j=m.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var L,P,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              $ref: '#/components/schemas/foo'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_A
          }
        }
      }
    })
  }
}`,...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var O,T,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              $ref: '#/components/schemas/foo'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_B
          }
        }
      }
    })
  }
}`,...(G=(T=d.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var V,q,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              schema: {
                $ref: '#/components/schemas/foo'
              },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0'
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42
            }
          }
        }
      }
    })
  }
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,Q,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              schema: {
                $ref: '#/components/schemas/foo'
              },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_A
          }
        }
      }
    })
  }
}`,...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              schema: {
                $ref: '#/components/schemas/foo'
              },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_B
          }
        }
      }
    })
  }
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,se,ae;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              schema: {
                $ref: '#/components/schemas/foo'
              },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0'
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42
            }
          }
        }
      }
    })
  }
}`,...(ae=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ie,ce;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              schema: {
                $ref: '#/components/schemas/foo'
              },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_A
          }
        }
      }
    })
  }
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var te,oe,me;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: '#/messages/first-message-key'
            }]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              schema: {
                $ref: '#/components/schemas/foo'
              },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0'
            }
          }
        },
        components: {
          schemas: {
            ...CIRCULAR_SCHEMA_KIND_B
          }
        }
      }
    })
  }
}`,...(me=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};const Ce=["BindingWithRef","BindingWithCircularRefKindA","BindingWithCircularRefKindB","HeadersWithRef","HeadersWithCircularRefKindA","HeadersWithCircularRefKindB","PayloadWithRef","PayloadWithCircularRefKindA","PayloadWithCircularRefKindB","HeadersMultiformatWithRef","HeadersMultiformatWithCircularRefKindA","HeadersMultiformatWithCircularRefKindB","PayloadMultiformatWithRef","PayloadMultiformatWithCircularRefKindA","PayloadMultiformatWithCircularRefKindB"];export{r as BindingWithCircularRefKindA,i as BindingWithCircularRefKindB,a as BindingWithRef,l as HeadersMultiformatWithCircularRefKindA,p as HeadersMultiformatWithCircularRefKindB,h as HeadersMultiformatWithRef,t as HeadersWithCircularRefKindA,o as HeadersWithCircularRefKindB,c as HeadersWithRef,y as PayloadMultiformatWithCircularRefKindA,u as PayloadMultiformatWithCircularRefKindB,g as PayloadMultiformatWithRef,f as PayloadWithCircularRefKindA,d as PayloadWithCircularRefKindB,m as PayloadWithRef,Ce as __namedExportsOrder,Ae as default};
