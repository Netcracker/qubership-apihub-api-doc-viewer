import{J as m}from"./JsonSchemaViewer-465e5a00.js";import{c as p,d as i}from"./preprocess-cc947758.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./NestingIndicatorTitleRow-d6436f3e.js";import"./constants-39319f53.js";import"./index-415bee12.js";import"./JsonPropNodeViewer-a4723e7d.js";const S={title:"Json Schema Viewer",component:m,parameters:{},argTypes:{},args:{schema:{}}},e={args:{schema:{}}},s={args:{schema:p({schema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},target:i,additionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},circular:!0})}};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    schema: {}
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,t,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const y=["Test","Cycled"];export{s as Cycled,e as Test,y as __namedExportsOrder,S as default};
