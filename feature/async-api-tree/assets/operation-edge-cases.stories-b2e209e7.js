import{A as y}from"./AsyncApiOperationViewer-d82fe121.js";import{p as a}from"./preprocess-4271bdc4.js";import{c,C as A,d as S,J as I}from"./index-30956bd0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9a3dca89.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-048505bc.js";import"./GraphQLOperationDiffViewer-bd7f1ad0.js";const D={title:"Async Api Suite/Operation Edge Cases",component:y,parameters:{},argTypes:{source:{control:{disable:!0},table:{disable:!0}}},args:{source:{}}},n={args:{source:a({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",bindings:{...c},channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},e={args:{source:a({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",bindings:{...c},channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}},components:{schemas:{...A}}}})}},s={args:{source:a({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",bindings:{...c},channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}},components:{schemas:{...S}}}})}},r={args:{source:a({source:{asyncapi:"3.0.0",operations:{"json-schema-in-extensions":{action:"send",channel:{$ref:"#/channels/first-channel-key"},...I}},channels:{"first-channel-key":{address:"first-channel-address"}}}})}};var i,o,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            bindings: {
              ...BINDINGS_WITH_SCHEMA_FOO_REF
            },
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
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
      circular: true,
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            bindings: {
              ...BINDINGS_WITH_SCHEMA_FOO_REF
            },
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
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
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      circular: true,
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            bindings: {
              ...BINDINGS_WITH_SCHEMA_FOO_REF
            },
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,_,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
            ...JSON_SCHEMA_IN_EXTENSIONS
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        }
      }
    })
  }
}`,...(g=(_=r.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const M=["BindingWithRef","BindingWithCircularRefKindA","BindingWithCircularRefKindB","JsonSchemaInExtensions"];export{e as BindingWithCircularRefKindA,s as BindingWithCircularRefKindB,n as BindingWithRef,r as JsonSchemaInExtensions,M as __namedExportsOrder,D as default};
