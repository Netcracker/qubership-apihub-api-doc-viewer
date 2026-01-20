import{a as U}from"./JsoViewer-51f7a13d.js";import{d as e,e as n}from"./preprocess-3aefe0c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-9f5e4455.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-bba74874.js";import"./GraphQLOperationDiffViewer-56b29068.js";const k={title:"Json Schema Viewer",component:U,parameters:{},argTypes:{},args:{schema:{}}},t={args:{schema:{}}},a={args:{schema:e({schema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},target:n,additionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},circular:!0})}},r={args:{schema:e({target:n,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}})}},s={args:{schema:e({target:n,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-min-date":"2026-01-01","x-max-date":"2026-12-31"}}}})}},o={args:{schema:e({target:n,schema:{type:"string",format:"date-time",description:"Date Time in Range","x-date":{min:"2026-01-01",max:"2026-12-31"},"x-date-time":{min:"2026-01-01T00:00:00Z",max:"2026-12-31T23:59:59Z"}}})}},m={args:{schema:e({target:n,schema:{type:"object",properties:{a:{type:"string",format:"date-time",description:"Date Time in Range","x-date":{min:"2026-01-01",max:"2026-12-31"},"x-date-time":{min:"2026-01-01T00:00:00Z",max:"2026-12-31T23:59:59Z"}}}}})}},i={args:{schema:e({target:n,schema:{type:"array","x-sort-order":"asc","x-sort-keys":["date","time"],items:{type:"string",format:"date-time",description:"Date Time in Range","x-default-timezone":"UTC","x-allowed-timezones":["UTC","America/New_York","Europe/Paris","Asia/Tokyo"],"x-range":{min:{date:"2026-01-01",time:"00:00:00Z"},max:{date:"2026-12-31",time:"23:59:59Z"}}}}})}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schema: {}
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,x,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var h,l,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,E,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,R,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(R=o.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,_,b;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(b=(_=m.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var v,L,Z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(Z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};const w=["Test","Cycled","ExtensionsFirstLevel","ExtensionsSecondLevel","MultiLevelExtensionsFirstLevel","MultiLevelExtensionsSecondLevel","CombinationOfDifferentExtensionsSecondLevel"];export{i as CombinationOfDifferentExtensionsSecondLevel,a as Cycled,r as ExtensionsFirstLevel,s as ExtensionsSecondLevel,o as MultiLevelExtensionsFirstLevel,m as MultiLevelExtensionsSecondLevel,t as Test,w as __namedExportsOrder,k as default};
