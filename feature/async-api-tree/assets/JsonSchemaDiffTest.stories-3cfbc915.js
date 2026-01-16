import{S as e,D as w,a as B}from"./NestingIndicatorTitleRow-c1b12f14.js";import{J as W}from"./JsonSchemaDiffViewer-8ac7fb29.js";import{b as t,R as r}from"./preprocess-30322e5f.js";import"./index-f46741a2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-415bee12.js";import"./JsonPropNodeViewer-541e0851.js";import"./model-44d591da.js";const N={title:"Json Schema Diff Viewer",component:W,parameters:{},argTypes:{},args:{schema:{}}},n={diffsMetaKey:w,aggregatedDiffsMetaKey:B},a={args:{schema:t({beforeSchema:{},afterSchema:{},target:r}),layoutMode:e,metaKeys:n}},o={args:{schema:{type:"object",properties:{newProperty:{type:"string"},anotherProperty:{type:"string"},[w]:{newProperty:{beforeKey:"oldProperty",afterKey:"newProperty",type:"annotation",action:"rename"}}}},layoutMode:e,metaKeys:n}},p={args:{schema:t({beforeSchema:{type:"object",required:["madeOptional","unchangedRequired","removedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer"},madeWriteOnly:{type:"integer"},madeDeprecated:{type:"integer"},madeWritable:{type:"boolean",readOnly:!0},madeReadable:{type:"boolean",writeOnly:!0},madeActual:{type:"boolean",deprecated:!0},removedReadOnly:{type:"number",readOnly:!0},removedWriteOnly:{type:"number",writeOnly:!0},removedRequired:{type:"number"},removed:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},afterSchema:{type:"object",required:["madeRequired","unchangedRequired","addedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer",readOnly:!0},madeWriteOnly:{type:"integer",writeOnly:!0},madeDeprecated:{type:"integer",deprecated:!0},madeWritable:{type:"boolean"},madeReadable:{type:"boolean"},madeActual:{type:"boolean"},addedReadOnly:{type:"number",readOnly:!0},addedWriteOnly:{type:"number",writeOnly:!0},addedRequired:{type:"number"},added:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},target:r}),layoutMode:e,metaKeys:n}},s={args:{schema:t({beforeSchema:{type:"object",properties:{addedEnum:{type:"string"},removedEnum:{type:"string",enum:["value1","value2"]},addedEnumValue:{type:"string",enum:["value1"]},removedEnumValue:{type:"string",enum:["value1","value2"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},afterSchema:{type:"object",properties:{addedEnum:{type:"string",enum:["value1","value2"]},removedEnum:{type:"string"},addedEnumValue:{type:"string",enum:["value1","value2"]},removedEnumValue:{type:"string",enum:["value1"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},target:r}),layoutMode:e,metaKeys:n}},m={args:{schema:t({beforeSchema:{type:"object",properties:{option1:{type:"array",minItems:0,items:{type:"string"}},option2:{type:"array",items:{type:"string"}}}},afterSchema:{type:"object",properties:{option1:{type:"array",minItems:1,items:{type:"string"}},option2:{type:"array",minItems:1,items:{type:"string"}}}},target:r}),layoutMode:e,metaKeys:n}},d={args:{schema:t({beforeSchema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},afterSchema:{type:"object",description:"Test",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"},d:{type:"integer",description:"numeric value",minimum:1,maximum:1e3,exclusiveMaximum:!0}}}}},target:r,circular:!0}),layoutMode:e,metaKeys:n}},i={args:{schema:t({beforeSchema:{type:"string",description:"Removed description",minLength:1,maxLength:100},afterSchema:{type:"string",format:"format",maxLength:55},target:r}),layoutMode:e,metaKeys:n}},y={args:{schema:t({beforeSchema:{type:"object",properties:{removedProperty:{type:"string"}}},afterSchema:{type:"object",title:"Added title",properties:{addedProperty:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}};var c,u,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {},
      afterSchema: {},
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,h,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var S,_,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var b,f,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var A,R,v;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(v=(R=m.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var I,F,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var T,Y,K;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var j,P,q;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(P=y.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const H=["Test","RenamedProperty","Flags","Enum","AddMinItemsInArrayProperty","CycledChanged","PrimitiveChanged","ObjectiveHeaderChanged"];export{m as AddMinItemsInArrayProperty,d as CycledChanged,s as Enum,p as Flags,y as ObjectiveHeaderChanged,i as PrimitiveChanged,o as RenamedProperty,a as Test,H as __namedExportsOrder,N as default};
