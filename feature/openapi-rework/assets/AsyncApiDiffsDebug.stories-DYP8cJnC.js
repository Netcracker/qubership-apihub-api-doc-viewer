import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{_ as n,g as r}from"./AsyncApiOperationViewer-DEWrqy33.js";import{r as i,t as a}from"./browser-B0udhz_W.js";import{_ as o,a as s,g as c,r as l}from"./preprocess-CQcx3758.js";import{n as u,t as d}from"./test-diff-meta-keys-C9Ij6b8K.js";var f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),u(),o(),l(),f=t(),p=e=>{let t;try{t=JSON.parse(e)}catch(e){console.error(`Cannot parse JSON:`,e),t=void 0}try{t||=i(e)}catch(e){console.error(`Cannot parse YAML:`,e),t=void 0}return!t||typeof t!=`object`?{}:t},m={title:`Debug/Async Api Diffs Viewer`,component:r,argTypes:{mergedSource:{control:{disable:!0},table:{disable:!0}},beforeSourceText:{control:`text`},afterSourceText:{control:`text`},displayMode:{control:`select`,options:[`simple`,`detailed`],defaultValue:`detailed`}},args:{beforeSourceText:`{
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
}`}},h={args:{devMode:!0,beforeSourceText:`{
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
}`,operationKeys:{operationKey:`test-operation`,messageKey:`test-message`},referenceNamePropertyKey:c},render:e=>{let{beforeSourceText:t,afterSourceText:n,...i}=e,a=p(t),o=p(n);return console.debug(`Parsed before source:`,a),console.debug(`Parsed after source:`,o),console.log(`TEST_DIFF_META_KEYS`,d),(0,f.jsx)(r,{...i,mergedSource:s({beforeSource:a,afterSource:o}),diffMetaKeys:d},`${btoa(t)}-${btoa(n)}`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Debug`]})))()}_();export{h as Debug,g as __namedExportsOrder,m as default};