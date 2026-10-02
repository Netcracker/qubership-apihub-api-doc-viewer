import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{a as m}from"./AsyncApiOperationViewer-ac5ce6e0.js";import{p as l}from"./public-api-99af098d.js";import{T as a}from"./test-diff-meta-keys-5677f54d.js";import{T as g,a as S}from"./preprocess-34bfe2db.js";import"./index-f46741a2.js";import"./UxBadge-bbd2cd58.js";import"./IndexesNodeViewer-75d730b0.js";import"./DdlTableDiffsViewer-5153503a.js";/* empty css              */import"./DdlTableViewer-e322261b.js";import"./GraphQLOperationDiffViewer-2fcd01db.js";import"./GraphPropNodeViewer-8013ceba.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8e03d2cf.js";const c=r=>{let e;try{e=JSON.parse(r)}catch(s){console.error("Cannot parse JSON:",s),e=void 0}try{e||(e=l(r))}catch(s){console.error("Cannot parse YAML:",s),e=void 0}return!e||typeof e!="object"?{}:e},v={title:"Debug/Async Api Diffs Viewer",component:m,argTypes:{mergedSource:{control:{disable:!0},table:{disable:!0}},beforeSourceText:{control:"text"},afterSourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"}},args:{beforeSourceText:`{
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
}`,operationKeys:{operationKey:"test-operation",messageKey:"test-message"},referenceNamePropertyKey:g},render:r=>{const{beforeSourceText:e,afterSourceText:s,...u}=r,t=c(e),o=c(s);return console.debug("Parsed before source:",t),console.debug("Parsed after source:",o),console.log("TEST_DIFF_META_KEYS",a),d.jsx(m,{...u,mergedSource:S({beforeSource:t,afterSource:o}),diffMetaKeys:a},`${btoa(e)}-${btoa(s)}`)}};var i,p,f;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const w=["Debug"];export{n as Debug,w as __namedExportsOrder,v as default};
