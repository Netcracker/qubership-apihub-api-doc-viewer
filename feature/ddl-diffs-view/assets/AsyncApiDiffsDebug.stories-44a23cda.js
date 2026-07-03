import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{a as m}from"./AsyncApiOperationViewer-6b6e9404.js";import{p as l}from"./public-api-d6a34651.js";import{T as g,a,b as S}from"./preprocess-9f23dbe6.js";import"./index-f46741a2.js";import"./UxBadge-d0e51bff.js";import"./DdlTableViewer-4c3a3e60.js";import"./index-abe66225.js";import"./DdlTableDiffsViewer-f3b6bf14.js";/* empty css              */import"./GraphQLOperationDiffViewer-54a4e89c.js";import"./GraphPropNodeViewer-76557377.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-14cec534.js";const c=n=>{let e;try{e=JSON.parse(n)}catch(s){console.error("Cannot parse JSON:",s),e=void 0}try{e||(e=l(n))}catch(s){console.error("Cannot parse YAML:",s),e=void 0}return!e||typeof e!="object"?{}:e},R={title:"Debug/Async Api Diffs Viewer",component:m,argTypes:{mergedSource:{control:{disable:!0},table:{disable:!0}},beforeSourceText:{control:"text"},afterSourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"}},args:{beforeSourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send"
    }
  }
}`,afterSourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send",
      "description": "Test description"
    }
  }
}`}},r={args:{devMode:!0,beforeSourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send",
      "channel": { "$ref": "#/channels/test-channel" },
      "messages": [
        { "$ref": "#/channels/test-channel/messages/test-message" }
      ]
    }
  },
  "channels": {
    "test-channel": {
      "messages": {
        "test-message": {
          "name": "Test Message"
        }
      }
    }
  }
}`,afterSourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send",
      "channel": { "$ref": "#/channels/test-channel" },
      "messages": [
        { "$ref": "#/channels/test-channel/messages/test-message" }
      ]
    }
  },
  "channels": {
    "test-channel": {
      "messages": {
        "test-message": {
          "name": "Test Message",
          "description": "Test description"
        }
      }
    }
  }
}`,operationKeys:{operationKey:"test-operation",messageKey:"test-message"},referenceNamePropertyKey:g},render:n=>{const{beforeSourceText:e,afterSourceText:s,...u}=n,t=c(e),o=c(s);return console.debug("Parsed before source:",t),console.debug("Parsed after source:",o),console.log("TEST_DIFF_META_KEYS",a),d.jsx(m,{...u,mergedSource:S({beforeSource:t,afterSource:o}),diffMetaKeys:a},`${btoa(e)}-${btoa(s)}`)}};var i,p,f;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    devMode: true,
    beforeSourceText: \`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send",
      "channel": { "$ref": "#/channels/test-channel" },
      "messages": [
        { "$ref": "#/channels/test-channel/messages/test-message" }
      ]
    }
  },
  "channels": {
    "test-channel": {
      "messages": {
        "test-message": {
          "name": "Test Message"
        }
      }
    }
  }
}\`,
    afterSourceText: \`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send",
      "channel": { "$ref": "#/channels/test-channel" },
      "messages": [
        { "$ref": "#/channels/test-channel/messages/test-message" }
      ]
    }
  },
  "channels": {
    "test-channel": {
      "messages": {
        "test-message": {
          "name": "Test Message",
          "description": "Test description"
        }
      }
    }
  }
}\`,
    operationKeys: {
      operationKey: 'test-operation',
      messageKey: 'test-message'
    },
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
  },
  render: (args: StoryArgs) => {
    const {
      beforeSourceText,
      afterSourceText,
      ...viewerArgs
    } = args;
    const beforeParsedSource = parseSourceText(beforeSourceText);
    const afterParsedSource = parseSourceText(afterSourceText);
    console.debug('Parsed before source:', beforeParsedSource);
    console.debug('Parsed after source:', afterParsedSource);
    console.log('TEST_DIFF_META_KEYS', TEST_DIFF_META_KEYS);
    return <AsyncApiOperationDiffsViewer key={\`\${btoa(beforeSourceText)}-\${btoa(afterSourceText)}\`} {...viewerArgs} mergedSource={prepareAsyncApiDiffsDocument({
      beforeSource: beforeParsedSource,
      afterSource: afterParsedSource
    })} diffMetaKeys={TEST_DIFF_META_KEYS} />;
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const v=["Debug"];export{r as Debug,v as __namedExportsOrder,R as default};
