import{J as z}from"./AsyncApiOperationViewer-9d291ba1.js";import{c as e,R as n}from"./preprocess-c8dcc7de.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-4334d9f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-cd79fa64.js";import"./GraphQLOperationDiffViewer-b8692e04.js";const ne={title:"Json Schema Viewer",component:z,parameters:{},argTypes:{},args:{schema:{}}},a={args:{schema:e({schema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},target:n,additionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},circular:!0})}},t={args:{schema:e({target:n,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}})}},r={args:{schema:e({target:n,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}}}})}},s={args:{schema:e({target:n,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-date":{min:"2026-01-01",max:"2026-12-31"},"x-date-time":{min:"2026-01-01T00:00:00Z",max:"2026-12-31T23:59:59Z"}}})}},i={args:{schema:e({target:n,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-date":{min:"2026-01-01",max:"2026-12-31"},"x-date-time":{min:"2026-01-01T00:00:00Z",max:"2026-12-31T23:59:59Z"}}}}})}},o={args:{schema:e({target:n,schema:{type:"array","x-sort-order":"asc","x-sort-keys":["date","time"],items:{type:"string",format:"date-time",description:"Date Time in Range","x-default-timezone":"UTC","x-allowed-timezones":["UTC","America/New_York","Europe/Paris","Asia/Tokyo"],"x-range":{min:{date:"2026-01-01",time:"00:00:00Z"},max:{date:"2026-12-31",time:"23:59:59Z"}}}}})}},m={args:{schema:e({target:n,schema:{type:"object",description:"Bug with additionalProperties = false",additionalProperties:!1,properties:{a:{type:"string"}}}})}},c={args:{schema:e({target:n,schema:{type:"array",description:"Bug with additionalItems = false",additionalItems:!1,items:{type:"string",description:"String Item"}}})}},p={args:{schema:e({target:n,schema:{type:"string",description:"Bug with new line character in enum",enum:[`
`,"\r",`\r
`]}})}},d={args:{schema:e({target:n,schema:{type:"string",description:"Bug with new line character in enum",enum:["©","®","µ"]}})}},g={args:{schema:e({target:n,schema:{type:"string",description:"Json Schema in extensions","x-json-schema":{type:"string",description:"Json Schema in extensions",minLength:10}}})}};var h,l,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,T,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(T=t.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var y,S,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var R,A,_;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var D,B,J;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(J=(B=i.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var w,b,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var U,O,j;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var v,C,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var Y,G,Q;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,F,P;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var k,N,$;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonSchema({
      target: REQUEST_BODY_TARGET,
      schema: {
        type: 'string',
        description: 'Json Schema in extensions',
        'x-json-schema': {
          type: 'string',
          description: 'Json Schema in extensions',
          minLength: 10
        }
      }
    })
  }
}`,...($=(N=g.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const ae=["Cycled","ExtensionsFirstLevel","ExtensionsSecondLevel","MultiLevelExtensionsFirstLevel","MultiLevelExtensionsSecondLevel","CombinationOfDifferentExtensionsSecondLevel","AdditionalPropertiesFalse","AdditionalItemsFalse","NewLineCharacterInEnum","NonAsciiCharactersInEnum","JsonSchemaInExtensions"];export{c as AdditionalItemsFalse,m as AdditionalPropertiesFalse,o as CombinationOfDifferentExtensionsSecondLevel,a as Cycled,t as ExtensionsFirstLevel,r as ExtensionsSecondLevel,g as JsonSchemaInExtensions,s as MultiLevelExtensionsFirstLevel,i as MultiLevelExtensionsSecondLevel,p as NewLineCharacterInEnum,d as NonAsciiCharactersInEnum,ae as __namedExportsOrder,ne as default};
