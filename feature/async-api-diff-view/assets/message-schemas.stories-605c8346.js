import{A as d}from"./AsyncApiOperationDiffsViewer-18847b96.js";import{b as g,h as y,a as u}from"./preprocess-1c6aad6b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-c49914da.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-62c0a28c.js";import"./GraphQLOperationViewer-94f8eb4e.js";import"./GraphQLOperationDiffViewer-4f16dd83.js";const D={title:"Async API Diffs Suite/Message Schemas",component:d,parameters:{},argTypes:{mergedSource:{control:"object"}},args:{mergedSource:{}}},p="send-operation",r="test-channel",t="MessageID",a=({message:n,channel:s={},operationType:c="send"})=>({asyncapi:"3.0.0",operations:{[p]:{action:c,channel:{$ref:`#/channels/${r}`},messages:[{$ref:`#/channels/${r}/messages/${t}`}]}},channels:{[r]:{...s,messages:{[t]:n}}}}),h=(n,s)=>({args:{devMode:!0,mergedSource:g({beforeSource:n,afterSource:s}),operationKeys:{operationKey:p,messageKey:t},referenceNamePropertyKey:y,diffMetaKeys:u}}),e=h(a({message:{description:"Message description",summary:"Message summary",headers:{type:"object",properties:{name:{type:"string",description:"Name",minLength:1}}},payload:{type:"object",properties:{name:{type:"string",description:"Name",enum:["John","Jane"]},age:{type:"number",description:"Age",minimum:0,maximum:100}}}},channel:{address:"test.address"}}),a({message:{description:"Message description",summary:"Message summary",headers:{type:"object",properties:{name:{type:"string",description:"Name",minLength:2,maxLength:10}}},payload:{type:"object",properties:{name:{type:"string",description:"Name",enum:["John","Jane","Doe"]},age:{type:"number",description:"Age",maximum:100,default:25}}}},channel:{address:"test.address"}}));var o,m,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`createStory(createSource({
  message: {
    description: "Message description",
    summary: "Message summary",
    headers: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name',
          minLength: 1
        }
      }
    },
    payload: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name',
          enum: ['John', 'Jane']
        },
        age: {
          type: 'number',
          description: 'Age',
          minimum: 0,
          maximum: 100
        }
      }
    }
  },
  channel: {
    address: "test.address"
  }
}), createSource({
  message: {
    description: "Message description",
    summary: "Message summary",
    headers: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name',
          minLength: 2,
          maxLength: 10
        }
      }
    },
    payload: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Name',
          enum: ['John', 'Jane', 'Doe']
        },
        age: {
          type: 'number',
          description: 'Age',
          maximum: 100,
          default: 25
        }
      }
    }
  },
  channel: {
    address: "test.address"
  }
}))`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const j=["AddressDescriptionSummary"];export{e as AddressDescriptionSummary,j as __namedExportsOrder,D as default};
