import{S as e,D as xe,a as ge}from"./GraphPropNodeViewer-dad57316.js";import{c as le}from"./AsyncApiOperationViewer-91303996.js";import{f as t,g as r}from"./preprocess-39ac2d5d.js";import"./index-f46741a2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-48b02663.js";import"./GraphQLOperationViewer-7f261031.js";const ve={title:"Json Schema Diff Viewer/Test Stories",component:le,parameters:{},argTypes:{},args:{schema:{}}},n={diffsMetaKey:xe,aggregatedDiffsMetaKey:ge},a={args:{schema:t({beforeSchema:{},afterSchema:{},target:r}),layoutMode:e,metaKeys:n}},o={args:{schema:{type:"object",properties:{newProperty:{type:"string"},anotherProperty:{type:"string"},[xe]:{newProperty:{beforeKey:"oldProperty",afterKey:"newProperty",type:"annotation",action:"rename"}}}},layoutMode:e,metaKeys:n}},s={args:{schema:t({beforeSchema:{type:"object",required:["madeOptional","unchangedRequired","removedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer"},madeWriteOnly:{type:"integer"},madeDeprecated:{type:"integer"},madeWritable:{type:"boolean",readOnly:!0},madeReadable:{type:"boolean",writeOnly:!0},madeActual:{type:"boolean",deprecated:!0},removedReadOnly:{type:"number",readOnly:!0},removedWriteOnly:{type:"number",writeOnly:!0},removedRequired:{type:"number"},removed:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},afterSchema:{type:"object",required:["madeRequired","unchangedRequired","addedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer",readOnly:!0},madeWriteOnly:{type:"integer",writeOnly:!0},madeDeprecated:{type:"integer",deprecated:!0},madeWritable:{type:"boolean"},madeReadable:{type:"boolean"},madeActual:{type:"boolean"},addedReadOnly:{type:"number",readOnly:!0},addedWriteOnly:{type:"number",writeOnly:!0},addedRequired:{type:"number"},added:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},target:r}),layoutMode:e,metaKeys:n}},i={args:{schema:t({beforeSchema:{type:"object",properties:{addedEnum:{type:"string"},removedEnum:{type:"string",enum:["value1","value2"]},addedEnumValue:{type:"string",enum:["value1"]},removedEnumValue:{type:"string",enum:["value1","value2"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},afterSchema:{type:"object",properties:{addedEnum:{type:"string",enum:["value1","value2"]},removedEnum:{type:"string"},addedEnumValue:{type:"string",enum:["value1","value2"]},removedEnumValue:{type:"string",enum:["value1"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},target:r}),layoutMode:e,metaKeys:n}},p={args:{schema:t({beforeSchema:{type:"object",properties:{option1:{type:"array",minItems:0,items:{type:"string"}},option2:{type:"array",items:{type:"string"}}}},afterSchema:{type:"object",properties:{option1:{type:"array",minItems:1,items:{type:"string"}},option2:{type:"array",minItems:1,items:{type:"string"}}}},target:r}),layoutMode:e,metaKeys:n}},m={args:{schema:t({beforeSchema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},afterSchema:{type:"object",description:"Test",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"},d:{type:"integer",description:"numeric value",minimum:1,maximum:1e3,exclusiveMaximum:!0}}}}},target:r,circular:!0}),layoutMode:e,metaKeys:n}},c={args:{schema:t({beforeSchema:{type:"string",description:"Removed description",minLength:1,maxLength:100},afterSchema:{type:"string",format:"format",maxLength:55},target:r}),layoutMode:e,metaKeys:n}},d={args:{schema:t({beforeSchema:{type:"object",properties:{removedProperty:{type:"string"}}},afterSchema:{type:"object",title:"Added title",properties:{addedProperty:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},y={args:{schema:t({beforeSchema:{title:"ObjectiveType",type:"object",description:"Objective Type",properties:{id:{type:"string",enum:["1","2","3"]}}},afterSchema:{type:"array",title:"IterableType",description:"Iterable Type",items:{type:"number",minimum:1,maximum:100,exclusiveMaximum:!0}},target:r}),layoutMode:e,metaKeys:n}},u={args:{schema:t({beforeSchema:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0},afterSchema:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1},target:r}),layoutMode:e,metaKeys:n}},x={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0}}},afterSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},g={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"}}},afterSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},l={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:"object",properties:{prop:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},b={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"}}},afterSchema:{type:"object",properties:{prop:{type:"string"},addedProperty:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},h={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"},addedProperty:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:"object",properties:{prop:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},S={args:{schema:t({circular:!0,beforeSchema:{$ref:"#/components/schemas/A"},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{prop:{$ref:"#/components/schemas/A"}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0}}},afterSchema:{$ref:"#/components/schemas/A"},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{prop:{$ref:"#/components/schemas/A"}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}};var E,_,f;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {},
      afterSchema: {},
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var O,D,v;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var A,j,T;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var I,R,M;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(R=i.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var F,Y,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var P,B,q;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(B=m.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var W,L,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,$,G;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(G=($=d.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var C,J,U;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(U=(J=y.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var N,V,H;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(V=u.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var z,Q,X;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,ie;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var pe,me,ce;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,ye,ue;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ue.source}}};const Ae=["Test","RenamedProperty","Flags","Enum","AddMinItemsInArrayProperty","CycledChanged","PrimitiveChanged","ObjectiveHeaderChanged","ObjectToArray","ExtensionsOnPrimitive","ExtensionsOnObject","ExtensionsWhollyAddedOnObject","ExtensionsWhollyRemovedOnObject","AddedPropertyWithExtensions","RemovedPropertyWithExtensions","ExtensionsOnCircularObject"];export{p as AddMinItemsInArrayProperty,b as AddedPropertyWithExtensions,m as CycledChanged,i as Enum,S as ExtensionsOnCircularObject,x as ExtensionsOnObject,u as ExtensionsOnPrimitive,g as ExtensionsWhollyAddedOnObject,l as ExtensionsWhollyRemovedOnObject,s as Flags,y as ObjectToArray,d as ObjectiveHeaderChanged,c as PrimitiveChanged,h as RemovedPropertyWithExtensions,o as RenamedProperty,a as Test,Ae as __namedExportsOrder,ve as default};
