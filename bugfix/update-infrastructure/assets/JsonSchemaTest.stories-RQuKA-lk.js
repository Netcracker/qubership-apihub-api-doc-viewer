import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,l as n}from"./AsyncApiOperationViewer-MuAs1xMh.js";import{r,t as i,u as a}from"./preprocess-BmBuk4Rv.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),r(),o={title:`Json Schema Viewer/Test Stories`,component:t,parameters:{},argTypes:{},args:{schema:{}}},s={args:{schema:a({schema:{type:`object`,properties:{a:{$ref:`#/components/schemas/A`},b:{$ref:`#/components/schemas/A`},c:{type:`string`},d:{type:`object`,properties:{e:{type:`number`}}}}},target:i,additionalComponents:{schemas:{A:{type:`object`,properties:{c:{$ref:`#/components/schemas/A`}}}}},circular:!0})}},c={args:{schema:a({target:i,schema:{type:`string`,format:`date-time`,description:`Date Time in Range`,"x-min-date":`2026-01-01`,"x-max-date":`2026-12-31`}})}},l={args:{schema:a({target:i,schema:{type:`object`,properties:{a:{type:`string`,format:`date-time`,description:`Date Time in Range`,"x-min-date":`2026-01-01`,"x-max-date":`2026-12-31`}}}})}},u={args:{schema:a({target:i,schema:{type:`string`,format:`date-time`,description:`Date Time in Range`,"x-date":{min:`2026-01-01`,max:`2026-12-31`},"x-date-time":{min:`2026-01-01T00:00:00Z`,max:`2026-12-31T23:59:59Z`}}})}},d={args:{schema:a({target:i,schema:{type:`object`,properties:{a:{type:`string`,format:`date-time`,description:`Date Time in Range`,"x-date":{min:`2026-01-01`,max:`2026-12-31`},"x-date-time":{min:`2026-01-01T00:00:00Z`,max:`2026-12-31T23:59:59Z`}}}}})}},f={args:{schema:a({target:i,schema:{type:`array`,"x-sort-order":`asc`,"x-sort-keys":[`date`,`time`],items:{type:`string`,format:`date-time`,description:`Date Time in Range`,"x-default-timezone":`UTC`,"x-allowed-timezones":[`UTC`,`America/New_York`,`Europe/Paris`,`Asia/Tokyo`],"x-range":{min:{date:`2026-01-01`,time:`00:00:00Z`},max:{date:`2026-12-31`,time:`23:59:59Z`}}}}})}},p={args:{schema:a({target:i,schema:{type:`object`,description:`Bug with additionalProperties = false`,additionalProperties:!1,properties:{a:{type:`string`}}}})}},m={args:{schema:a({target:i,schema:{type:`array`,description:`Bug with additionalItems = false`,additionalItems:!1,items:{type:`string`,description:`String Item`}}})}},h={args:{schema:a({target:i,schema:{type:`string`,description:`Bug with new line character in enum`,enum:[`
`,`\r`,`\r
`]}})}},g={args:{schema:a({target:i,schema:{type:`string`,description:`Bug with new line character in enum`,enum:[`©`,`®`,`µ`]}})}},_={args:{schema:a({target:i,schema:{type:`string`,description:`Json Schema in extensions`,"x-json-schema":{type:`string`,description:`Json Schema in extensions`,minLength:10}}})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Cycled`,`ExtensionsFirstLevel`,`ExtensionsSecondLevel`,`MultiLevelExtensionsFirstLevel`,`MultiLevelExtensionsSecondLevel`,`CombinationOfDifferentExtensionsSecondLevel`,`AdditionalPropertiesFalse`,`AdditionalItemsFalse`,`NewLineCharacterInEnum`,`NonAsciiCharactersInEnum`,`JsonSchemaInExtensions`]})))()}y();export{m as AdditionalItemsFalse,p as AdditionalPropertiesFalse,f as CombinationOfDifferentExtensionsSecondLevel,s as Cycled,c as ExtensionsFirstLevel,l as ExtensionsSecondLevel,_ as JsonSchemaInExtensions,u as MultiLevelExtensionsFirstLevel,d as MultiLevelExtensionsSecondLevel,h as NewLineCharacterInEnum,g as NonAsciiCharactersInEnum,v as __namedExportsOrder,o as default};