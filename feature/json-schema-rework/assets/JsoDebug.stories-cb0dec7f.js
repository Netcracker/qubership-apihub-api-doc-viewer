import{j as m}from"./_commonjs-dynamic-modules-6308e768.js";import{J as a}from"./AsyncApiOperationViewer-ac5ce6e0.js";import{p as c}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./UxBadge-bbd2cd58.js";import"./IndexesNodeViewer-75d730b0.js";import"./DdlTableDiffsViewer-5153503a.js";/* empty css              */import"./DdlTableViewer-e322261b.js";import"./GraphQLOperationDiffViewer-2fcd01db.js";import"./GraphPropNodeViewer-8013ceba.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8e03d2cf.js";import"./public-api-99af098d.js";const D={title:"Debug/Jso Viewer",component:a,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},e={args:{jsoText:""},render:p=>{const{jsoText:r,...i}=p,o=c(r);return console.log(r),console.debug("Prepared JSO:",o),m.jsx(a,{...i,source:o,initialLevel:1})}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    jsoText: ''
  },
  render: args => {
    const {
      jsoText,
      ...viewerArgs
    } = args;
    const parsedJso = parseYamlSource(jsoText);
    console.log(jsoText);
    console.debug('Prepared JSO:', parsedJso);
    return <JsoViewer {...viewerArgs} source={parsedJso as object | null} initialLevel={1} />;
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const O=["Debug"];export{e as Debug,O as __namedExportsOrder,D as default};
