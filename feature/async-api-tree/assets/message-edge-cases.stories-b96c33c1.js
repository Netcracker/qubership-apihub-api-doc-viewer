import{A as pe}from"./AsyncApiOperationViewer-d82fe121.js";import{p as e}from"./preprocess-4271bdc4.js";import{c as $,C as n,d as s,J as ge}from"./index-30956bd0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9a3dca89.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-048505bc.js";import"./GraphQLOperationDiffViewer-bd7f1ad0.js";const Re={title:"Async Api Suite/Message Edge Cases",component:pe,parameters:{},argTypes:{source:{control:{disable:!0},table:{disable:!0}}},args:{source:{}}},a={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",bindings:{...$}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},r={args:{source:e({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",bindings:{...$}}},components:{schemas:{...n}}}})}},i={args:{source:e({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",bindings:{...$}}},components:{schemas:{...s}}}})}},c={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{$ref:"#/components/schemas/foo"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},t={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...n}}}})}},o={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...s}}}})}},m={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{$ref:"#/components/schemas/foo"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},f={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...n}}}})}},d={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{$ref:"#/components/schemas/foo"}}},components:{schemas:{...s}}}})}},h={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},l={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...n}}}})}},p={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",headers:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...s}}}})}},g={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},y={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...n}}}})}},u={args:{source:e({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",payload:{schema:{$ref:"#/components/schemas/foo"},schemaFormat:"application/vnd.aai.asyncapi+json;version=3.0.0"}}},components:{schemas:{...s}}}})}},k={args:{source:e({source:{asyncapi:"3.0.0",operations:{"json-schema-in-extensions":{action:"send",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/messages/first-message-key"}]}},channels:{"first-channel-key":{address:"first-channel-address"}},messages:{"first-message-key":{title:"First Message Key",...ge}}}})}};var A,C,K;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(C=a.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var M,_,R;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(_=r.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,S,I;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var b,H,W;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(W=(H=c.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var D,w,E;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(w=t.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var N,B,v;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var x,j,O;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var L,P,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var T,J,G;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(G=(J=d.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var X,V,q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,Q,Y;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,ae,re;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,ce,te;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(te=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var oe,me,fe;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(fe=(me=u.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var de,he,le;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "json-schema-in-extensions": {
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
            ...JSON_SCHEMA_IN_EXTENSIONS
          }
        }
      }
    })
  }
}`,...(le=(he=k.parameters)==null?void 0:he.docs)==null?void 0:le.source}}};const Fe=["BindingWithRef","BindingWithCircularRefKindA","BindingWithCircularRefKindB","HeadersWithRef","HeadersWithCircularRefKindA","HeadersWithCircularRefKindB","PayloadWithRef","PayloadWithCircularRefKindA","PayloadWithCircularRefKindB","HeadersMultiformatWithRef","HeadersMultiformatWithCircularRefKindA","HeadersMultiformatWithCircularRefKindB","PayloadMultiformatWithRef","PayloadMultiformatWithCircularRefKindA","PayloadMultiformatWithCircularRefKindB","JsonSchemaInExtensions"];export{r as BindingWithCircularRefKindA,i as BindingWithCircularRefKindB,a as BindingWithRef,l as HeadersMultiformatWithCircularRefKindA,p as HeadersMultiformatWithCircularRefKindB,h as HeadersMultiformatWithRef,t as HeadersWithCircularRefKindA,o as HeadersWithCircularRefKindB,c as HeadersWithRef,k as JsonSchemaInExtensions,y as PayloadMultiformatWithCircularRefKindA,u as PayloadMultiformatWithCircularRefKindB,g as PayloadMultiformatWithRef,f as PayloadWithCircularRefKindA,d as PayloadWithCircularRefKindB,m as PayloadWithRef,Fe as __namedExportsOrder,Re as default};
