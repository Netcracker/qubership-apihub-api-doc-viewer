import{a as E}from"./JsoViewer-c5c3de43.js";import{c as a,d as s}from"./preprocess-4b014e23.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-f6f7e6c6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-9517fbc5.js";import"./GraphQLOperationDiffViewer-af176eb0.js";const j={title:"Json Schema Viewer",component:E,parameters:{},argTypes:{},args:{schema:{}}},e={args:{schema:{}}},n={args:{schema:a({schema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},target:s,additionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},circular:!0})}},r={args:{schema:a({target:s,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}})}},t={args:{schema:a({target:s,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}}}})}};var o,c,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    schema: {}
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,i,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      schema: {
        type: 'object',
        properties: {
          a: {
            $ref: '#/components/schemas/A'
          },
          b: {
            $ref: '#/components/schemas/A'
          },
          c: {
            type: 'string'
          },
          d: {
            type: 'object',
            properties: {
              e: {
                type: 'number'
              }
            }
          }
        }
      },
      target: REQUEST_BODY_TARGET,
      additionalComponents: {
        schemas: {
          A: {
            type: 'object',
            properties: {
              c: {
                $ref: '#/components/schemas/A'
              }
            }
          }
        }
      },
      circular: true
    })
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,h,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'string',
        format: 'date-time',
        description: 'Date Time in Range',
        'x-min-date': '2026-01-01',
        'x-max-date': '2026-12-31'
      }
    })
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,T,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'object',
        properties: {
          a: {
            type: 'string',
            format: 'date-time',
            description: 'Date Time in Range',
            'x-min-date': '2026-01-01',
            'x-max-date': '2026-12-31'
          }
        }
      }
    })
  }
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const J=["Test","Cycled","Extensions","ExtensionsDeeper"];export{n as Cycled,r as Extensions,t as ExtensionsDeeper,e as Test,J as __namedExportsOrder,j as default};
