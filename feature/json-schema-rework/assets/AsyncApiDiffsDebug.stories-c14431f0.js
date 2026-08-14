import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{a as f}from"./AsyncApiOperationViewer-489efbeb.js";import{p as l}from"./public-api-d6a34651.js";import{T as g,a,b as S}from"./preprocess-3be277e1.js";import"./index-f46741a2.js";import"./index-71f1bfe0.js";import"./take-diff-side-background-color-85ec54fb.js";import"./IndexesNodeViewer-05731b79.js";import"./DiffBadge-51a3ec54.js";import"./DdlTableDiffsViewer-78b6311e.js";/* empty css              */import"./DdlTableViewer-4b03edfb.js";import"./GraphQLOperationDiffViewer-aadc8f99.js";import"./GraphPropNodeViewer-49e74551.js";import"./index-c19463f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a2d41582.js";import"./JsonSchemaNextViewer-cd13c5ca.js";const c=r=>{let e;try{e=JSON.parse(r)}catch(s){console.error("Cannot parse JSON:",s),e=void 0}try{e||(e=l(r))}catch(s){console.error("Cannot parse YAML:",s),e=void 0}return!e||typeof e!="object"?{}:e},Y={title:"Debug/Async Api Diffs Viewer",component:f,argTypes:{mergedSource:{control:{disable:!0},table:{disable:!0}},beforeSourceText:{control:"text"},afterSourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"}},args:{beforeSourceText:`{
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
}`}},n={args:{devMode:!0,beforeSourceText:`{
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
}`,operationKeys:{operationKey:"test-operation",messageKey:"test-message"},referenceNamePropertyKey:g},render:r=>{const{beforeSourceText:e,afterSourceText:s,...u}=r,t=c(e),o=c(s);return console.debug("Parsed before source:",t),console.debug("Parsed after source:",o),console.log("TEST_DIFF_META_KEYS",a),d.jsx(f,{...u,mergedSource:S({beforeSource:t,afterSource:o}),diffMetaKeys:a},`${btoa(e)}-${btoa(s)}`)}};var i,p,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const O=["Debug"];export{n as Debug,O as __namedExportsOrder,Y as default};
