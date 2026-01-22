import{A as u}from"./AsyncApiOperationViewer-5fefe2a7.js";import{p as r}from"./preprocess-17178f8b.js";import{c as a,C as f,d as g}from"./index-013c945b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const E={title:"Async Api Suite/Operation Edge Cases",component:u,parameters:{},argTypes:{source:{control:{disable:!0},table:{disable:!0}}},args:{source:{}}},n={args:{source:r({source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",bindings:{...a},channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}},components:{schemas:{foo:{type:"integer",minimum:1,maximum:100,default:42}}}}})}},e={args:{source:r({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",bindings:{...a},channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}},components:{schemas:{...f}}}})}},s={args:{source:r({circular:!0,source:{asyncapi:"3.0.0",operations:{"binding-with-ref":{action:"send",bindings:{...a},channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}},components:{schemas:{...g}}}})}};var i,c,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(t=(c=n.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var o,d,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,l,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const k=["BindingWithRef","BindingWithCircularRefKindA","BindingWithCircularRefKindB"];export{e as BindingWithCircularRefKindA,s as BindingWithCircularRefKindB,n as BindingWithRef,k as __namedExportsOrder,E as default};
