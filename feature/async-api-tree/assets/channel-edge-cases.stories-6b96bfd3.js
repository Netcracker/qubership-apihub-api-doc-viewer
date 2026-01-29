import{A as y}from"./AsyncApiOperationViewer-2f9d7a53.js";import{p as r}from"./preprocess-81142e47.js";import{c as i,C as A,d as S,J as I}from"./index-30956bd0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ea931b38.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-95c460fd.js";import"./GraphQLOperationDiffViewer-d71862cb.js";const D={title:"Async Api Suite/Channel Edge Cases",component:y,parameters:{},argTypes:{source:{control:{disable:!0},table:{disable:!0}}},args:{source:{}}},n={args:{source:r({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{...i}}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},e={args:{source:r({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{...i}}},components:{schemas:{...A}}}})}},s={args:{source:r({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{...i}}},components:{schemas:{...S}}}})}},a={args:{source:r({source:{asyncapi:"3.0.0",operations:{"json-schema-in-extensions":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",...I}}}})}};var c,o,t;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
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
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,p,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
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
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var l,m,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
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
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var u,_,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "json-schema-in-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            ...JSON_SCHEMA_IN_EXTENSIONS
          }
        }
      }
    })
  }
}`,...(g=(_=a.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const M=["BindingWithRef","BindingWithCircularRefKindA","BindingWithCircularRefKindB","JsonSchemaInExtensions"];export{e as BindingWithCircularRefKindA,s as BindingWithCircularRefKindB,n as BindingWithRef,a as JsonSchemaInExtensions,M as __namedExportsOrder,D as default};
