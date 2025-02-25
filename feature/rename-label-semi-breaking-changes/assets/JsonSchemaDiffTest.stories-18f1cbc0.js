import{J as l}from"./JsonSchemaDiffViewer-09a5caf9.js";import{b as y,R as u}from"./preprocess-7760af72.js";import{S as m,D as o}from"./ErrorBoundaryFallback-53a4f11e.js";import"./jsx-runtime-beaa2906.js";import"./index-f46741a2.js";import"./JsonPropNodeViewer-7dbd9040.js";import"./index-415bee12.js";const D={title:"Json Schema Diff Viewer",component:l,parameters:{},argTypes:{},args:{schema:{}}},e={args:{schema:y({beforeSchema:{},afterSchema:{},target:u}),layoutMode:m,diffMetaKey:o}},n={args:{schema:y({beforeSchema:{type:"object",required:["madeOptional","unchangedRequired","removedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer"},madeWriteOnly:{type:"integer"},madeDeprecated:{type:"integer"},madeWritable:{type:"boolean",readOnly:!0},madeReadable:{type:"boolean",writeOnly:!0},madeActual:{type:"boolean",deprecated:!0},removedReadOnly:{type:"number",readOnly:!0},removedWriteOnly:{type:"number",writeOnly:!0},removedRequired:{type:"number"},removed:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},afterSchema:{type:"object",required:["madeRequired","unchangedRequired","addedRequired"],properties:{madeRequired:{type:"string"},madeOptional:{type:"string"},madeReadOnly:{type:"integer",readOnly:!0},madeWriteOnly:{type:"integer",writeOnly:!0},madeDeprecated:{type:"integer",deprecated:!0},madeWritable:{type:"boolean"},madeReadable:{type:"boolean"},madeActual:{type:"boolean"},addedReadOnly:{type:"number",readOnly:!0},addedWriteOnly:{type:"number",writeOnly:!0},addedRequired:{type:"number"},added:{type:"number"},unchangedRequired:{type:"string"},unchangedOptional:{type:"string"},unchangedReadOnly:{type:"string",readOnly:!0},unchangedWriteOnly:{type:"string",writeOnly:!0},unchangedDeprecated:{type:"string",deprecated:!0}}},target:u}),layoutMode:m,diffMetaKey:o}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    schema: prepareJsonDiffSchema({
      beforeSchema: {},
      afterSchema: {},
      target: RESPONSE_200_BODY_TARGET
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var d,p,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const _=["Test","Flags"];export{n as Flags,e as Test,_ as __namedExportsOrder,D as default};
