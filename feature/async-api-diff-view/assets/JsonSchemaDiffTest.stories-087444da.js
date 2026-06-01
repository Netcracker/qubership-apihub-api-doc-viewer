import{S as e,D as de,a as ce}from"./GraphPropNodeViewer-0995ebff.js";import{c as ye}from"./AsyncApiOperationViewer-bae90f3c.js";import{f as t,g as r}from"./preprocess-8e212c54.js";import"./index-f46741a2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-4bebdd2b.js";import"./GraphQLOperationViewer-ad024f54.js";const _e={title:"Json Schema Diff Viewer/Test Stories",component:ye,parameters:{},argTypes:{},args:{schema:{}}},n={diffsMetaKey:de,aggregatedDiffsMetaKey:ce},a={args:{schema:t({beforeSchema:{},afterSchema:{},target:r}),layoutMode:e,metaKeys:n}},o={args:{schema:{type:"object",properties:{newProperty:{type:"string"},anotherProperty:{type:"string"},[de]:{newProperty:{beforeKey:"oldProperty",afterKey:"newProperty",type:"annotation",action:"rename"}}}},layoutMode:e,metaKeys:n}},s={args:{schema:t({beforeSchema:{type:"object",required:["madeOptional","unchangedRequired","removedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer"},madeWriteOnly:{type:"integer"},madeDeprecated:{type:"integer"},madeWritable:{type:"boolean",readOnly:!0},madeReadable:{type:"boolean",writeOnly:!0},madeActual:{type:"boolean",deprecated:!0},removedReadOnly:{type:"number",readOnly:!0},removedWriteOnly:{type:"number",writeOnly:!0},removedRequired:{type:"number"},removed:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},afterSchema:{type:"object",required:["madeRequired","unchangedRequired","addedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer",readOnly:!0},madeWriteOnly:{type:"integer",writeOnly:!0},madeDeprecated:{type:"integer",deprecated:!0},madeWritable:{type:"boolean"},madeReadable:{type:"boolean"},madeActual:{type:"boolean"},addedReadOnly:{type:"number",readOnly:!0},addedWriteOnly:{type:"number",writeOnly:!0},addedRequired:{type:"number"},added:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},target:r}),layoutMode:e,metaKeys:n}},i={args:{schema:t({beforeSchema:{type:"object",properties:{addedEnum:{type:"string"},removedEnum:{type:"string",enum:["value1","value2"]},addedEnumValue:{type:"string",enum:["value1"]},removedEnumValue:{type:"string",enum:["value1","value2"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},afterSchema:{type:"object",properties:{addedEnum:{type:"string",enum:["value1","value2"]},removedEnum:{type:"string"},addedEnumValue:{type:"string",enum:["value1","value2"]},removedEnumValue:{type:"string",enum:["value1"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},target:r}),layoutMode:e,metaKeys:n}},p={args:{schema:t({beforeSchema:{type:"object",properties:{option1:{type:"array",minItems:0,items:{type:"string"}},option2:{type:"array",items:{type:"string"}}}},afterSchema:{type:"object",properties:{option1:{type:"array",minItems:1,items:{type:"string"}},option2:{type:"array",minItems:1,items:{type:"string"}}}},target:r}),layoutMode:e,metaKeys:n}},m={args:{schema:t({beforeSchema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},afterSchema:{type:"object",description:"Test",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"},d:{type:"integer",description:"numeric value",minimum:1,maximum:1e3,exclusiveMaximum:!0}}}}},target:r,circular:!0}),layoutMode:e,metaKeys:n}},d={args:{schema:t({beforeSchema:{type:"string",description:"Removed description",minLength:1,maxLength:100},afterSchema:{type:"string",format:"format",maxLength:55},target:r}),layoutMode:e,metaKeys:n}},c={args:{schema:t({beforeSchema:{type:"object",properties:{removedProperty:{type:"string"}}},afterSchema:{type:"object",title:"Added title",properties:{addedProperty:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},y={args:{schema:t({beforeSchema:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0},afterSchema:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1},target:r}),layoutMode:e,metaKeys:n}},u={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0}}},afterSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},x={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"}}},afterSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},g={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:"object",properties:{prop:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},l={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"}}},afterSchema:{type:"object",properties:{prop:{type:"string"},addedProperty:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},h={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"},addedProperty:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:"object",properties:{prop:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},b={args:{schema:t({circular:!0,beforeSchema:{$ref:"#/components/schemas/A"},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{prop:{$ref:"#/components/schemas/A"}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0}}},afterSchema:{$ref:"#/components/schemas/A"},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{prop:{$ref:"#/components/schemas/A"}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}};var S,E,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {},
      afterSchema: {},
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(_=(E=a.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var f,O,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(O=o.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var v,A,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(A=s.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var I,R,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(R=i.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var T,M,Y;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(Y=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var K,P,B;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var q,W,L;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(W=d.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var k,w,$;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(w=c.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var C,G,J;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var U,N,V;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var H,z,Q;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=l.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,oe,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,pe,me;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const fe=["Test","RenamedProperty","Flags","Enum","AddMinItemsInArrayProperty","CycledChanged","PrimitiveChanged","ObjectiveHeaderChanged","ExtensionsOnPrimitive","ExtensionsOnObject","ExtensionsWhollyAddedOnObject","ExtensionsWhollyRemovedOnObject","AddedPropertyWithExtensions","RemovedPropertyWithExtensions","ExtensionsOnCircularObject"];export{p as AddMinItemsInArrayProperty,l as AddedPropertyWithExtensions,m as CycledChanged,i as Enum,b as ExtensionsOnCircularObject,u as ExtensionsOnObject,y as ExtensionsOnPrimitive,x as ExtensionsWhollyAddedOnObject,g as ExtensionsWhollyRemovedOnObject,s as Flags,c as ObjectiveHeaderChanged,d as PrimitiveChanged,h as RemovedPropertyWithExtensions,o as RenamedProperty,a as Test,fe as __namedExportsOrder,_e as default};
