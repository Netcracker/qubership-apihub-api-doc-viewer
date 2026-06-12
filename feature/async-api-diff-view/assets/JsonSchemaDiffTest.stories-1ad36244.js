import{S as e,D as Ae,a as Ie}from"./GraphPropNodeViewer-85a44f20.js";import{c as Me}from"./AsyncApiOperationViewer-2714e842.js";import{f as t,g as r}from"./preprocess-318649c5.js";import"./index-f46741a2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-5c5ab323.js";import"./GraphQLOperationViewer-92304b6d.js";const Be={title:"Json Schema Diff Viewer/Test Stories",component:Me,parameters:{},argTypes:{},args:{schema:{}}},n={diffsMetaKey:Ae,aggregatedDiffsMetaKey:Ie},a={args:{schema:t({beforeSchema:{},afterSchema:{},target:r}),layoutMode:e,metaKeys:n}},o={args:{schema:{type:"object",properties:{newProperty:{type:"string"},anotherProperty:{type:"string"},[Ae]:{newProperty:{beforeKey:"oldProperty",afterKey:"newProperty",type:"annotation",action:"rename"}}}},layoutMode:e,metaKeys:n}},s={args:{schema:t({beforeSchema:{type:"object",required:["madeOptional","unchangedRequired","removedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer"},madeWriteOnly:{type:"integer"},madeDeprecated:{type:"integer"},madeWritable:{type:"boolean",readOnly:!0},madeReadable:{type:"boolean",writeOnly:!0},madeActual:{type:"boolean",deprecated:!0},removedReadOnly:{type:"number",readOnly:!0},removedWriteOnly:{type:"number",writeOnly:!0},removedRequired:{type:"number"},removed:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},afterSchema:{type:"object",required:["madeRequired","unchangedRequired","addedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer",readOnly:!0},madeWriteOnly:{type:"integer",writeOnly:!0},madeDeprecated:{type:"integer",deprecated:!0},madeWritable:{type:"boolean"},madeReadable:{type:"boolean"},madeActual:{type:"boolean"},addedReadOnly:{type:"number",readOnly:!0},addedWriteOnly:{type:"number",writeOnly:!0},addedRequired:{type:"number"},added:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},target:r}),layoutMode:e,metaKeys:n}},i={args:{schema:t({beforeSchema:{type:"object",properties:{addedEnum:{type:"string"},removedEnum:{type:"string",enum:["value1","value2"]},addedEnumValue:{type:"string",enum:["value1"]},removedEnumValue:{type:"string",enum:["value1","value2"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},afterSchema:{type:"object",properties:{addedEnum:{type:"string",enum:["value1","value2"]},removedEnum:{type:"string"},addedEnumValue:{type:"string",enum:["value1","value2"]},removedEnumValue:{type:"string",enum:["value1"]},unchangedEnumValue:{type:"string",enum:["value1","value2"]}}},target:r}),layoutMode:e,metaKeys:n}},p={args:{schema:t({beforeSchema:{type:"object",properties:{option1:{type:"array",minItems:0,items:{type:"string"}},option2:{type:"array",items:{type:"string"}}}},afterSchema:{type:"object",properties:{option1:{type:"array",minItems:1,items:{type:"string"}},option2:{type:"array",minItems:1,items:{type:"string"}}}},target:r}),layoutMode:e,metaKeys:n}},m={args:{schema:t({beforeSchema:{type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},afterSchema:{type:"object",description:"Test",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"}}},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"},d:{type:"integer",description:"numeric value",minimum:1,maximum:1e3,exclusiveMaximum:!0}}}}},target:r,circular:!0}),layoutMode:e,metaKeys:n}},c={args:{schema:t({beforeSchema:{type:"string",description:"Removed description",minLength:1,maxLength:100},afterSchema:{type:"string",format:"format",maxLength:55},target:r}),layoutMode:e,metaKeys:n}},u={args:{schema:t({beforeSchema:{type:"object",properties:{removedProperty:{type:"string"}}},afterSchema:{type:"object",title:"Added title",properties:{addedProperty:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},d={args:{schema:t({beforeSchema:{title:"ObjectiveType",type:"object",description:"Objective Type",properties:{id:{type:"string",enum:["1","2","3"]}}},afterSchema:{type:"array",title:"IterableType",description:"Iterable Type",items:{type:"number",minimum:1,maximum:100,exclusiveMaximum:!0}},target:r}),layoutMode:e,metaKeys:n}},y={args:{schema:t({beforeSchema:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0},afterSchema:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1},target:r}),layoutMode:e,metaKeys:n}},l={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0}}},afterSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},x={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"}}},afterSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},g={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:"object",properties:{prop:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},b={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"}}},afterSchema:{type:"object",properties:{prop:{type:"string"},addedProperty:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},h={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{type:"string"},addedProperty:{type:"string","x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},afterSchema:{type:"object",properties:{prop:{type:"string"}}},target:r}),layoutMode:e,metaKeys:n}},f={args:{schema:t({circular:!0,beforeSchema:{$ref:"#/components/schemas/A"},beforeAdditionalComponents:{schemas:{A:{type:"object",properties:{prop:{$ref:"#/components/schemas/A"}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-removed-extension":"removed value","x-changed-extension":!0}}},afterSchema:{$ref:"#/components/schemas/A"},afterAdditionalComponents:{schemas:{A:{type:"object",properties:{prop:{$ref:"#/components/schemas/A"}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"},"x-added-extension":42,"x-changed-extension":!1}}},target:r}),layoutMode:e,metaKeys:n}},S={args:{schema:t({beforeSchema:{type:"object",properties:{stringProp:{type:"string",minLength:1,maxLength:100,pattern:"^[a-z]+$",contentMediaType:"text/plain",contentEncoding:"utf-8",enum:["foo","bar"],const:"foo",default:"bar",examples:["hello","world"]},numberProp:{type:"number",minimum:0,maximum:100,exclusiveMinimum:!0,exclusiveMaximum:!1,multipleOf:.5,enum:[1.5,2.5,3.5],const:1.5,default:2.5,examples:[1.5,2]},integerProp:{type:"integer",minimum:1,maximum:1e3,exclusiveMinimum:!1,exclusiveMaximum:!0,multipleOf:2,enum:[2,4,6],const:2,default:4,examples:[2,8]},booleanProp:{type:"boolean",enum:[!0,!1],const:!0,default:!1,examples:[!0]},arrayProp:{type:"array",minItems:1,maxItems:10,uniqueItems:!1,enum:[[1,2],[3,4]],const:[1,2],default:[3,4],examples:[[1,2,3]]},objectProp:{type:"object",minProperties:1,maxProperties:5,patternProperties:{"^x_":{type:"string"}},propertyNames:{minLength:1,maxLength:20},dependencies:{id:["name"]},enum:[{id:"a"}],const:{id:"a"},default:{id:"b"},examples:[{id:"a",name:"Alice"}]}}},afterSchema:{type:"object",properties:{stringProp:{type:"string",minLength:5,maxLength:200,pattern:"^[A-Z]+$",contentMediaType:"application/json",contentEncoding:"base64",enum:["baz","qux"],const:"baz",default:"qux",examples:["HELLO","WORLD","EXAMPLE"]},numberProp:{type:"number",minimum:10,maximum:500,exclusiveMinimum:!1,exclusiveMaximum:!0,multipleOf:2.5,enum:[10.5,20.5,30.5],const:10.5,default:20.5,examples:[12.5,25]},integerProp:{type:"integer",minimum:5,maximum:500,exclusiveMinimum:!0,exclusiveMaximum:!1,multipleOf:5,enum:[5,10,15],const:5,default:10,examples:[10,100]},booleanProp:{type:"boolean",enum:[!1],const:!1,default:!0,examples:[!1]},arrayProp:{type:"array",minItems:2,maxItems:20,uniqueItems:!0,enum:[[5,6],[7,8]],const:[5,6],default:[7,8],examples:[[5,6,7,8]]},objectProp:{type:"object",minProperties:2,maxProperties:10,patternProperties:{"^s_":{type:"integer"}},propertyNames:{minLength:2,maxLength:30},dependencies:{id:["name","email"]},enum:[{id:"c",name:"d"}],const:{id:"c",name:"d"},default:{id:"e",name:"f"},examples:[{id:"c",name:"Carol",email:"carol@test.com"}]}}},target:r}),layoutMode:e,metaKeys:n}},E={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{oneOf:[{type:"string"}]}}},afterSchema:{type:"object",properties:{prop:{oneOf:[{type:"string"},{type:"integer"}]}}},target:r}),layoutMode:e,metaKeys:n}},_={args:{schema:t({beforeSchema:{type:"object",properties:{prop:{oneOf:[{type:"string"},{type:"integer"}]}}},afterSchema:{type:"object",properties:{prop:{oneOf:[{type:"string"}]}}},target:r}),layoutMode:e,metaKeys:n}};var O,D,v;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {},
      afterSchema: {},
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(v=(D=a.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var A,I,M;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var j,T,P;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var F,R,Y;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(R=i.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var K,L,B;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(L=p.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var q,C,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(C=m.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var $,N,w;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var G,J,k;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(J=u.parameters)==null?void 0:J.docs)==null?void 0:k.source}}};var U,V,z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var H,X,Z;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,ee,ne;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ne=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,se,ie;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var pe,me,ce;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ue,de,ye;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ye.source}}};var le,xe,ge;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ge=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var be,he,fe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
              email: 'carol@test.com'
            }]
          }
        }
      },
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Se,Ee,_e;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(_e=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var Oe,De,ve;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(ve=(De=_.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};const qe=["Test","RenamedProperty","Flags","Enum","AddMinItemsInArrayProperty","CycledChanged","PrimitiveChanged","ObjectiveHeaderChanged","ObjectToArray","ExtensionsOnPrimitive","ExtensionsOnObject","ExtensionsWhollyAddedOnObject","ExtensionsWhollyRemovedOnObject","AddedPropertyWithExtensions","RemovedPropertyWithExtensions","ExtensionsOnCircularObject","AllConstraintsChanged","AppendCombinerItem","PopCombinerItem"];export{p as AddMinItemsInArrayProperty,b as AddedPropertyWithExtensions,S as AllConstraintsChanged,E as AppendCombinerItem,m as CycledChanged,i as Enum,f as ExtensionsOnCircularObject,l as ExtensionsOnObject,y as ExtensionsOnPrimitive,x as ExtensionsWhollyAddedOnObject,g as ExtensionsWhollyRemovedOnObject,s as Flags,d as ObjectToArray,u as ObjectiveHeaderChanged,_ as PopCombinerItem,c as PrimitiveChanged,h as RemovedPropertyWithExtensions,o as RenamedProperty,a as Test,qe as __namedExportsOrder,Be as default};
