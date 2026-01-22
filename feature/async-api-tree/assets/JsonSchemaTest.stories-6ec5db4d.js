import{a as P}from"./AsyncApiOperationViewer-312f9a5a.js";import{c as e,R as n}from"./preprocess-17178f8b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const K={title:"Json Schema Viewer",component:P,parameters:{},argTypes:{},args:{schema:{}}},a={args:{schema:e({schema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},target:n,additionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},circular:!0})}},t={args:{schema:e({target:n,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}})}},r={args:{schema:e({target:n,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}}}})}},s={args:{schema:e({target:n,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-date":{min:"2026-01-01",max:"2026-12-31"},"x-date-time":{min:"2026-01-01T00:00:00Z",max:"2026-12-31T23:59:59Z"}}})}},i={args:{schema:e({target:n,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-date":{min:"2026-01-01",max:"2026-12-31"},"x-date-time":{min:"2026-01-01T00:00:00Z",max:"2026-12-31T23:59:59Z"}}}}})}},o={args:{schema:e({target:n,schema:{type:"array","x-sort-order":"asc","x-sort-keys":["date","time"],items:{type:"string",format:"date-time",description:"Date Time in Range","x-default-timezone":"UTC","x-allowed-timezones":["UTC","America/New_York","Europe/Paris","Asia/Tokyo"],"x-range":{min:{date:"2026-01-01",time:"00:00:00Z"},max:{date:"2026-12-31",time:"23:59:59Z"}}}}})}},m={args:{schema:e({target:n,schema:{type:"object",description:"Bug with additionalProperties = false",additionalProperties:!1,properties:{a:{type:"string"}}}})}},c={args:{schema:e({target:n,schema:{type:"array",description:"Bug with additionalItems = false",additionalItems:!1,items:{type:"string",description:"String Item"}}})}},p={args:{schema:e({target:n,schema:{type:"string",description:"Bug with new line character in enum",enum:[`
`,"\r",`\r
`]}})}},d={args:{schema:e({target:n,schema:{type:"string",description:"Bug with new line character in enum",enum:["©","®","µ"]}})}};var g,h,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var u,T,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var E,y,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,R,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'string',
        format: 'date-time',
        description: 'Date Time in Range',
        'x-date': {
          min: '2026-01-01',
          max: '2026-12-31'
        },
        'x-date-time': {
          min: '2026-01-01T00:00:00Z',
          max: '2026-12-31T23:59:59Z'
        }
      }
    })
  }
}`,...(A=(R=s.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var _,D,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            'x-date': {
              min: '2026-01-01',
              max: '2026-12-31'
            },
            'x-date-time': {
              min: '2026-01-01T00:00:00Z',
              max: '2026-12-31T23:59:59Z'
            }
          }
        }
      }
    })
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,b,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'array',
        'x-sort-order': 'asc',
        'x-sort-keys': ['date', 'time'],
        items: {
          type: 'string',
          format: 'date-time',
          description: 'Date Time in Range',
          'x-default-timezone': 'UTC',
          'x-allowed-timezones': ['UTC', 'America/New_York', 'Europe/Paris', 'Asia/Tokyo'],
          'x-range': {
            min: {
              date: '2026-01-01',
              time: '00:00:00Z'
            },
            max: {
              date: '2026-12-31',
              time: '23:59:59Z'
            }
          }
        }
      }
    })
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var U,v,C;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'object',
        description: 'Bug with additionalProperties = false',
        additionalProperties: false,
        properties: {
          a: {
            type: 'string'
          }
        }
      }
    })
  }
}`,...(C=(v=m.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var O,J,Y;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'array',
        description: 'Bug with additionalItems = false',
        additionalItems: false,
        items: {
          type: 'string',
          description: 'String Item'
        }
      }
    })
  }
}`,...(Y=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var j,I,Z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'string',
        description: 'Bug with new line character in enum',
        enum: ['\\n', '\\r', '\\r\\n']
      }
    })
  }
}`,...(Z=(I=p.parameters)==null?void 0:I.docs)==null?void 0:Z.source}}};var G,Q,F;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'string',
        description: 'Bug with new line character in enum',
        enum: ['©', '®', 'µ']
      }
    })
  }
}`,...(F=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};const W=["Cycled","ExtensionsFirstLevel","ExtensionsSecondLevel","MultiLevelExtensionsFirstLevel","MultiLevelExtensionsSecondLevel","CombinationOfDifferentExtensionsSecondLevel","AdditionalPropertiesFalse","AdditionalItemsFalse","NewLineCharacterInEnum","NonAsciiCharactersInEnum"];export{c as AdditionalItemsFalse,m as AdditionalPropertiesFalse,o as CombinationOfDifferentExtensionsSecondLevel,a as Cycled,t as ExtensionsFirstLevel,r as ExtensionsSecondLevel,s as MultiLevelExtensionsFirstLevel,i as MultiLevelExtensionsSecondLevel,p as NewLineCharacterInEnum,d as NonAsciiCharactersInEnum,W as __namedExportsOrder,K as default};
