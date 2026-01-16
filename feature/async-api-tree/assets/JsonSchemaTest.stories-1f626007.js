import{J as u}from"./JsonSchemaViewer-0ea8c11e.js";import{c as h,d as g}from"./preprocess-30322e5f.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./NestingIndicatorTitleRow-c1b12f14.js";import"./index-415bee12.js";import"./JsonPropNodeViewer-541e0851.js";const b={title:"Json Schema Viewer",component:u,parameters:{},argTypes:{},args:{schema:{}}},e={args:{schema:{}}},n={args:{schema:h({schema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},target:g,additionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},circular:!0})}},r={args:{schema:h({target:g,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}})}};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    schema: {}
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var o,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,i,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const x=["Test","Cycled","Extensions"];export{n as Cycled,r as Extensions,e as Test,x as __namedExportsOrder,b as default};
