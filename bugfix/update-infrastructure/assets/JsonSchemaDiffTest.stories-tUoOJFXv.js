import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Gr as t,Wr as n,nn as r,rn as i,un as a}from"./DiffBadge-DoCfpue1.js";import{a as o,i as s}from"./AsyncApiOperationViewer-BSRon3JG.js";import{l as c,n as l,r as u}from"./preprocess-CVyTm_I1.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{a(),o(),t(),u(),d={title:`Json Schema Diff Viewer/Test Stories`,component:s,parameters:{},argTypes:{},args:{schema:{}}},f={diffsMetaKey:i,aggregatedDiffsMetaKey:r},p={args:{schema:c({beforeSchema:{},afterSchema:{},target:l}),layoutMode:n,metaKeys:f}},m={args:{schema:{type:`object`,properties:{newProperty:{type:`string`},anotherProperty:{type:`string`},[i]:{newProperty:{beforeKey:`oldProperty`,afterKey:`newProperty`,type:`annotation`,action:`rename`}}}},layoutMode:n,metaKeys:f}},h={args:{schema:c({beforeSchema:{type:`object`,required:[`madeOptional`,`unchangedRequired`,`removedRequired`],properties:{madeRequired:{type:`string`},madeOptional:{type:`string`},madeReadOnly:{type:`integer`},madeWriteOnly:{type:`integer`},madeDeprecated:{type:`integer`},madeWritable:{type:`boolean`,readOnly:!0},madeReadable:{type:`boolean`,writeOnly:!0},madeActual:{type:`boolean`,deprecated:!0},removedReadOnly:{type:`number`,readOnly:!0},removedWriteOnly:{type:`number`,writeOnly:!0},removedRequired:{type:`number`},removed:{type:`number`},unchangedRequired:{type:`string`},unchangedOptional:{type:`string`},unchangedReadOnly:{type:`string`,readOnly:!0},unchangedWriteOnly:{type:`string`,writeOnly:!0},unchangedDeprecated:{type:`string`,deprecated:!0}}},afterSchema:{type:`object`,required:[`madeRequired`,`unchangedRequired`,`addedRequired`],properties:{madeRequired:{type:`string`},madeOptional:{type:`string`},madeReadOnly:{type:`integer`,readOnly:!0},madeWriteOnly:{type:`integer`,writeOnly:!0},madeDeprecated:{type:`integer`,deprecated:!0},madeWritable:{type:`boolean`},madeReadable:{type:`boolean`},madeActual:{type:`boolean`},addedReadOnly:{type:`number`,readOnly:!0},addedWriteOnly:{type:`number`,writeOnly:!0},addedRequired:{type:`number`},added:{type:`number`},unchangedRequired:{type:`string`},unchangedOptional:{type:`string`},unchangedReadOnly:{type:`string`,readOnly:!0},unchangedWriteOnly:{type:`string`,writeOnly:!0},unchangedDeprecated:{type:`string`,deprecated:!0}}},target:l}),layoutMode:n,metaKeys:f}},g={args:{schema:c({beforeSchema:{type:`object`,properties:{addedEnum:{type:`string`},removedEnum:{type:`string`,enum:[`value1`,`value2`]},addedEnumValue:{type:`string`,enum:[`value1`]},removedEnumValue:{type:`string`,enum:[`value1`,`value2`]},unchangedEnumValue:{type:`string`,enum:[`value1`,`value2`]}}},afterSchema:{type:`object`,properties:{addedEnum:{type:`string`,enum:[`value1`,`value2`]},removedEnum:{type:`string`},addedEnumValue:{type:`string`,enum:[`value1`,`value2`]},removedEnumValue:{type:`string`,enum:[`value1`]},unchangedEnumValue:{type:`string`,enum:[`value1`,`value2`]}}},target:l}),layoutMode:n,metaKeys:f}},_={args:{schema:c({beforeSchema:{type:`object`,properties:{option1:{type:`array`,minItems:0,items:{type:`string`}},option2:{type:`array`,items:{type:`string`}}}},afterSchema:{type:`object`,properties:{option1:{type:`array`,minItems:1,items:{type:`string`}},option2:{type:`array`,minItems:1,items:{type:`string`}}}},target:l}),layoutMode:n,metaKeys:f}},v={args:{schema:c({beforeSchema:{type:`object`,properties:{a:{$ref:`#/components/schemas/A`},b:{$ref:`#/components/schemas/A`}}},afterSchema:{type:`object`,description:`Test`,properties:{a:{$ref:`#/components/schemas/A`},b:{$ref:`#/components/schemas/A`}}},beforeAdditionalComponents:{schemas:{A:{type:`object`,properties:{c:{$ref:`#/components/schemas/A`}}}}},afterAdditionalComponents:{schemas:{A:{type:`object`,properties:{c:{$ref:`#/components/schemas/A`},d:{type:`integer`,description:`numeric value`,minimum:1,maximum:1e3,exclusiveMaximum:!0}}}}},target:l,circular:!0}),layoutMode:n,metaKeys:f}},y={args:{schema:c({beforeSchema:{type:`string`,description:`Removed description`,minLength:1,maxLength:100},afterSchema:{type:`string`,format:`format`,maxLength:55},target:l}),layoutMode:n,metaKeys:f}},b={args:{schema:c({beforeSchema:{type:`object`,properties:{removedProperty:{type:`string`}}},afterSchema:{type:`object`,title:`Added title`,properties:{addedProperty:{type:`string`}}},target:l}),layoutMode:n,metaKeys:f}},x={args:{schema:c({beforeSchema:{title:`ObjectiveType`,type:`object`,description:`Objective Type`,properties:{id:{type:`string`,enum:[`1`,`2`,`3`]}}},afterSchema:{type:`array`,title:`IterableType`,description:`Iterable Type`,items:{type:`number`,minimum:1,maximum:100,exclusiveMaximum:!0}},target:l}),layoutMode:n,metaKeys:f}},S={args:{schema:c({beforeSchema:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-removed-extension":`removed value`,"x-changed-extension":!0},afterSchema:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1},target:l}),layoutMode:n,metaKeys:f}},C={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-removed-extension":`removed value`,"x-changed-extension":!0}}},afterSchema:{type:`object`,properties:{prop:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1}}},target:l}),layoutMode:n,metaKeys:f}},w={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{type:`string`}}},afterSchema:{type:`object`,properties:{prop:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1}}},target:l}),layoutMode:n,metaKeys:f}},T={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:`object`,properties:{prop:{type:`string`}}},target:l}),layoutMode:n,metaKeys:f}},E={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{type:`string`}}},afterSchema:{type:`object`,properties:{prop:{type:`string`},addedProperty:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1}}},target:l}),layoutMode:n,metaKeys:f}},D={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{type:`string`},addedProperty:{type:`string`,"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:`object`,properties:{prop:{type:`string`}}},target:l}),layoutMode:n,metaKeys:f}},O={args:{schema:c({circular:!0,beforeSchema:{$ref:`#/components/schemas/A`},beforeAdditionalComponents:{schemas:{A:{type:`object`,properties:{prop:{$ref:`#/components/schemas/A`}},"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-removed-extension":`removed value`,"x-changed-extension":!0}}},afterSchema:{$ref:`#/components/schemas/A`},afterAdditionalComponents:{schemas:{A:{type:`object`,properties:{prop:{$ref:`#/components/schemas/A`}},"x-string-extension":`value`,"x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:`value`},"x-added-extension":42,"x-changed-extension":!1}}},target:l}),layoutMode:n,metaKeys:f}},k={args:{schema:c({beforeSchema:{type:`object`,properties:{stringProp:{type:`string`,minLength:1,maxLength:100,pattern:`^[a-z]+$`,contentMediaType:`text/plain`,contentEncoding:`utf-8`,enum:[`foo`,`bar`],const:`foo`,default:`bar`,examples:[`hello`,`world`]},numberProp:{type:`number`,minimum:0,maximum:100,exclusiveMinimum:!0,exclusiveMaximum:!1,multipleOf:.5,enum:[1.5,2.5,3.5],const:1.5,default:2.5,examples:[1.5,2]},integerProp:{type:`integer`,minimum:1,maximum:1e3,exclusiveMinimum:!1,exclusiveMaximum:!0,multipleOf:2,enum:[2,4,6],const:2,default:4,examples:[2,8]},booleanProp:{type:`boolean`,enum:[!0,!1],const:!0,default:!1,examples:[!0]},arrayProp:{type:`array`,minItems:1,maxItems:10,uniqueItems:!1,enum:[[1,2],[3,4]],const:[1,2],default:[3,4],examples:[[1,2,3]]},objectProp:{type:`object`,minProperties:1,maxProperties:5,patternProperties:{"^x_":{type:`string`}},propertyNames:{minLength:1,maxLength:20},dependencies:{id:[`name`]},enum:[{id:`a`}],const:{id:`a`},default:{id:`b`},examples:[{id:`a`,name:`Alice`}]}}},afterSchema:{type:`object`,properties:{stringProp:{type:`string`,minLength:5,maxLength:200,pattern:`^[A-Z]+$`,contentMediaType:`application/json`,contentEncoding:`base64`,enum:[`baz`,`qux`],const:`baz`,default:`qux`,examples:[`HELLO`,`WORLD`,`EXAMPLE`]},numberProp:{type:`number`,minimum:10,maximum:500,exclusiveMinimum:!1,exclusiveMaximum:!0,multipleOf:2.5,enum:[10.5,20.5,30.5],const:10.5,default:20.5,examples:[12.5,25]},integerProp:{type:`integer`,minimum:5,maximum:500,exclusiveMinimum:!0,exclusiveMaximum:!1,multipleOf:5,enum:[5,10,15],const:5,default:10,examples:[10,100]},booleanProp:{type:`boolean`,enum:[!1],const:!1,default:!0,examples:[!1]},arrayProp:{type:`array`,minItems:2,maxItems:20,uniqueItems:!0,enum:[[5,6],[7,8]],const:[5,6],default:[7,8],examples:[[5,6,7,8]]},objectProp:{type:`object`,minProperties:2,maxProperties:10,patternProperties:{"^s_":{type:`integer`}},propertyNames:{minLength:2,maxLength:30},dependencies:{id:[`name`,`email`]},enum:[{id:`c`,name:`d`}],const:{id:`c`,name:`d`},default:{id:`e`,name:`f`},examples:[{id:`c`,name:`Carol`,email:`example@example.com`}]}}},target:l}),layoutMode:n,metaKeys:f}},A={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{oneOf:[{type:`string`}]}}},afterSchema:{type:`object`,properties:{prop:{oneOf:[{type:`string`},{type:`integer`}]}}},target:l}),layoutMode:n,metaKeys:f}},j={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{oneOf:[{type:`string`},{type:`integer`}]}}},afterSchema:{type:`object`,properties:{prop:{oneOf:[{type:`string`}]}}},target:l}),layoutMode:n,metaKeys:f}},M={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{oneOf:[{type:`integer`,description:`Default value is 42`,examples:[24]},{type:`string`}]}}},afterSchema:{type:`object`,properties:{prop:{oneOf:[{type:`integer`,default:42,examples:[42]},{type:`string`}]}}},target:l}),layoutMode:n,metaKeys:f}},N={args:{schema:c({beforeSchema:{type:`object`,properties:{prop:{oneOf:[{type:`string`},{type:`integer`,description:`Default value is 42`,examples:[24]}]}}},afterSchema:{type:`object`,properties:{prop:{oneOf:[{type:`string`},{type:`integer`,default:42,examples:[42]}]}}},target:l}),layoutMode:n,metaKeys:f}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {},
      afterSchema: {},
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    schema: {
      type: 'object',
      properties: {
        newProperty: {
          type: 'string'
        },
        anotherProperty: {
          type: 'string'
        },
        [DIFF_META_KEY]: {
          newProperty: {
            beforeKey: 'oldProperty',
            afterKey: 'newProperty',
            type: 'annotation',
            action: 'rename'
          }
        }
      }
    },
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        required: ['madeOptional', 'unchangedRequired', 'removedRequired'],
        properties: {
          madeRequired: {
            type: 'string'
          },
          madeOptional: {
            type: 'string'
          },
          madeReadOnly: {
            type: 'integer'
          },
          madeWriteOnly: {
            type: 'integer'
          },
          madeDeprecated: {
            type: 'integer'
          },
          madeWritable: {
            type: 'boolean',
            readOnly: true
          },
          madeReadable: {
            type: 'boolean',
            writeOnly: true
          },
          madeActual: {
            type: 'boolean',
            deprecated: true
          },
          removedReadOnly: {
            type: 'number',
            readOnly: true
          },
          removedWriteOnly: {
            type: 'number',
            writeOnly: true
          },
          removedRequired: {
            type: 'number'
          },
          removed: {
            type: 'number'
          },
          unchangedRequired: {
            type: 'string'
          },
          unchangedOptional: {
            type: 'string'
          },
          unchangedReadOnly: {
            type: 'string',
            readOnly: true
          },
          unchangedWriteOnly: {
            type: 'string',
            writeOnly: true
          },
          unchangedDeprecated: {
            type: 'string',
            deprecated: true
          }
        }
      },
      afterSchema: {
        type: 'object',
        required: ['madeRequired', 'unchangedRequired', 'addedRequired'],
        properties: {
          madeRequired: {
            type: 'string'
          },
          madeOptional: {
            type: 'string'
          },
          madeReadOnly: {
            type: 'integer',
            readOnly: true
          },
          madeWriteOnly: {
            type: 'integer',
            writeOnly: true
          },
          madeDeprecated: {
            type: 'integer',
            deprecated: true
          },
          madeWritable: {
            type: 'boolean'
          },
          madeReadable: {
            type: 'boolean'
          },
          madeActual: {
            type: 'boolean'
          },
          addedReadOnly: {
            type: 'number',
            readOnly: true
          },
          addedWriteOnly: {
            type: 'number',
            writeOnly: true
          },
          addedRequired: {
            type: 'number'
          },
          added: {
            type: 'number'
          },
          unchangedRequired: {
            type: 'string'
          },
          unchangedOptional: {
            type: 'string'
          },
          unchangedReadOnly: {
            type: 'string',
            readOnly: true
          },
          unchangedWriteOnly: {
            type: 'string',
            writeOnly: true
          },
          unchangedDeprecated: {
            type: 'string',
            deprecated: true
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          addedEnum: {
            type: 'string'
          },
          removedEnum: {
            type: 'string',
            enum: ['value1', 'value2']
          },
          addedEnumValue: {
            type: 'string',
            enum: ['value1']
          },
          removedEnumValue: {
            type: 'string',
            enum: ['value1', 'value2']
          },
          unchangedEnumValue: {
            type: 'string',
            enum: ['value1', 'value2']
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          addedEnum: {
            type: 'string',
            enum: ['value1', 'value2']
          },
          removedEnum: {
            type: 'string'
          },
          addedEnumValue: {
            type: 'string',
            enum: ['value1', 'value2']
          },
          removedEnumValue: {
            type: 'string',
            enum: ['value1']
          },
          unchangedEnumValue: {
            type: 'string',
            enum: ['value1', 'value2']
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          option1: {
            type: 'array',
            minItems: 0,
            items: {
              type: 'string'
            }
          },
          option2: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          option1: {
            type: 'array',
            minItems: 1,
            items: {
              type: 'string'
            }
          },
          option2: {
            type: 'array',
            minItems: 1,
            items: {
              type: 'string'
            }
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
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
      afterSchema: {
        type: 'object',
        description: 'Test',
        properties: {
          a: {
            $ref: '#/components/schemas/A'
          },
          b: {
            $ref: '#/components/schemas/A'
          }
        }
      },
      beforeAdditionalComponents: {
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
      afterAdditionalComponents: {
        schemas: {
          A: {
            type: 'object',
            properties: {
              c: {
                $ref: '#/components/schemas/A'
              },
              d: {
                type: 'integer',
                description: 'numeric value',
                minimum: 1,
                maximum: 1000,
                exclusiveMaximum: true
              }
            }
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET,
      circular: true
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'string',
        description: 'Removed description',
        minLength: 1,
        maxLength: 100
      },
      afterSchema: {
        type: 'string',
        format: 'format',
        maxLength: 55
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          removedProperty: {
            type: 'string'
          }
        }
      },
      afterSchema: {
        type: 'object',
        title: 'Added title',
        properties: {
          addedProperty: {
            type: 'string'
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        title: 'ObjectiveType',
        type: 'object',
        description: 'Objective Type',
        properties: {
          id: {
            type: 'string',
            enum: ['1', '2', '3']
          }
        }
      },
      afterSchema: {
        type: 'array',
        title: 'IterableType',
        description: 'Iterable Type',
        items: {
          type: 'number',
          minimum: 1,
          maximum: 100,
          exclusiveMaximum: true
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'string',
        'x-string-extension': 'value',
        'x-integer-extension': 1,
        'x-boolean-extension': true,
        'x-number-extension': 1.0,
        'x-array-extension': [1, 2, 3],
        'x-object-extension': {
          key: 'value'
        },
        'x-removed-extension': 'removed value',
        'x-changed-extension': true
      },
      afterSchema: {
        type: 'string',
        'x-string-extension': 'value',
        'x-integer-extension': 1,
        'x-boolean-extension': true,
        'x-number-extension': 1.0,
        'x-array-extension': [1, 2, 3],
        'x-object-extension': {
          key: 'value'
        },
        'x-added-extension': 42,
        'x-changed-extension': false
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string',
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-removed-extension': 'removed value',
            'x-changed-extension': true
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string',
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-added-extension': 42,
            'x-changed-extension': false
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string',
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-added-extension': 42,
            'x-changed-extension': false
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string',
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-added-extension': 42,
            'x-changed-extension': false
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          },
          addedProperty: {
            type: 'string',
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-added-extension': 42,
            'x-changed-extension': false
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          },
          addedProperty: {
            type: 'string',
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-added-extension': 42,
            'x-changed-extension': false
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      circular: true,
      beforeSchema: {
        $ref: '#/components/schemas/A'
      },
      beforeAdditionalComponents: {
        schemas: {
          A: {
            type: 'object',
            properties: {
              prop: {
                $ref: '#/components/schemas/A'
              }
            },
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-removed-extension': 'removed value',
            'x-changed-extension': true
          }
        }
      },
      afterSchema: {
        $ref: '#/components/schemas/A'
      },
      afterAdditionalComponents: {
        schemas: {
          A: {
            type: 'object',
            properties: {
              prop: {
                $ref: '#/components/schemas/A'
              }
            },
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value'
            },
            'x-added-extension': 42,
            'x-changed-extension': false
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          stringProp: {
            type: 'string',
            minLength: 1,
            maxLength: 100,
            pattern: '^[a-z]+$',
            contentMediaType: 'text/plain',
            contentEncoding: 'utf-8',
            enum: ['foo', 'bar'],
            const: 'foo',
            default: 'bar',
            examples: ['hello', 'world']
          },
          numberProp: {
            type: 'number',
            minimum: 0,
            maximum: 100,
            exclusiveMinimum: true,
            exclusiveMaximum: false,
            multipleOf: 0.5,
            enum: [1.5, 2.5, 3.5],
            const: 1.5,
            default: 2.5,
            examples: [1.5, 2.0]
          },
          integerProp: {
            type: 'integer',
            minimum: 1,
            maximum: 1000,
            exclusiveMinimum: false,
            exclusiveMaximum: true,
            multipleOf: 2,
            enum: [2, 4, 6],
            const: 2,
            default: 4,
            examples: [2, 8]
          },
          booleanProp: {
            type: 'boolean',
            enum: [true, false],
            const: true,
            default: false,
            examples: [true]
          },
          arrayProp: {
            type: 'array',
            minItems: 1,
            maxItems: 10,
            uniqueItems: false,
            enum: [[1, 2], [3, 4]],
            const: [1, 2],
            default: [3, 4],
            examples: [[1, 2, 3]]
          },
          objectProp: {
            type: 'object',
            minProperties: 1,
            maxProperties: 5,
            patternProperties: {
              '^x_': {
                type: 'string'
              }
            },
            propertyNames: {
              minLength: 1,
              maxLength: 20
            },
            dependencies: {
              id: ['name']
            },
            enum: [{
              id: 'a'
            }],
            const: {
              id: 'a'
            },
            default: {
              id: 'b'
            },
            examples: [{
              id: 'a',
              name: 'Alice'
            }]
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          stringProp: {
            type: 'string',
            minLength: 5,
            maxLength: 200,
            pattern: '^[A-Z]+$',
            contentMediaType: 'application/json',
            contentEncoding: 'base64',
            enum: ['baz', 'qux'],
            const: 'baz',
            default: 'qux',
            examples: ['HELLO', 'WORLD', 'EXAMPLE']
          },
          numberProp: {
            type: 'number',
            minimum: 10,
            maximum: 500,
            exclusiveMinimum: false,
            exclusiveMaximum: true,
            multipleOf: 2.5,
            enum: [10.5, 20.5, 30.5],
            const: 10.5,
            default: 20.5,
            examples: [12.5, 25.0]
          },
          integerProp: {
            type: 'integer',
            minimum: 5,
            maximum: 500,
            exclusiveMinimum: true,
            exclusiveMaximum: false,
            multipleOf: 5,
            enum: [5, 10, 15],
            const: 5,
            default: 10,
            examples: [10, 100]
          },
          booleanProp: {
            type: 'boolean',
            enum: [false],
            const: false,
            default: true,
            examples: [false]
          },
          arrayProp: {
            type: 'array',
            minItems: 2,
            maxItems: 20,
            uniqueItems: true,
            enum: [[5, 6], [7, 8]],
            const: [5, 6],
            default: [7, 8],
            examples: [[5, 6, 7, 8]]
          },
          objectProp: {
            type: 'object',
            minProperties: 2,
            maxProperties: 10,
            patternProperties: {
              '^s_': {
                type: 'integer'
              }
            },
            propertyNames: {
              minLength: 2,
              maxLength: 30
            },
            dependencies: {
              id: ['name', 'email']
            },
            enum: [{
              id: 'c',
              name: 'd'
            }],
            const: {
              id: 'c',
              name: 'd'
            },
            default: {
              id: 'e',
              name: 'f'
            },
            examples: [{
              id: 'c',
              name: 'Carol',
              email: 'example@example.com'
            }]
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'string'
            }]
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'string'
            }, {
              type: 'integer'
            }]
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'string'
            }, {
              type: 'integer'
            }]
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'string'
            }]
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'integer',
              description: 'Default value is 42',
              examples: [24]
            }, {
              type: 'string'
            }]
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'integer',
              default: 42,
              examples: [42]
            }, {
              type: 'string'
            }]
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'string'
            }, {
              type: 'integer',
              description: 'Default value is 42',
              examples: [24]
            }]
          }
        }
      },
      afterSchema: {
        type: 'object',
        properties: {
          prop: {
            oneOf: [{
              type: 'string'
            }, {
              type: 'integer',
              default: 42,
              examples: [42]
            }]
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...N.parameters?.docs?.source}}},P=[`Test`,`RenamedProperty`,`Flags`,`Enum`,`AddMinItemsInArrayProperty`,`CycledChanged`,`PrimitiveChanged`,`ObjectiveHeaderChanged`,`ObjectToArray`,`ExtensionsOnPrimitive`,`ExtensionsOnObject`,`ExtensionsWhollyAddedOnObject`,`ExtensionsWhollyRemovedOnObject`,`AddedPropertyWithExtensions`,`RemovedPropertyWithExtensions`,`ExtensionsOnCircularObject`,`AllConstraintsChanged`,`AppendCombinerItem`,`PopCombinerItem`,`ChangesInsideFirstCombinerItem`,`ChangesInsideLastCombinerItem`]})))()}F();export{_ as AddMinItemsInArrayProperty,E as AddedPropertyWithExtensions,k as AllConstraintsChanged,A as AppendCombinerItem,M as ChangesInsideFirstCombinerItem,N as ChangesInsideLastCombinerItem,v as CycledChanged,g as Enum,O as ExtensionsOnCircularObject,C as ExtensionsOnObject,S as ExtensionsOnPrimitive,w as ExtensionsWhollyAddedOnObject,T as ExtensionsWhollyRemovedOnObject,h as Flags,x as ObjectToArray,b as ObjectiveHeaderChanged,j as PopCombinerItem,y as PrimitiveChanged,D as RemovedPropertyWithExtensions,m as RenamedProperty,p as Test,P as __namedExportsOrder,d as default};