import{j as m}from"./_commonjs-dynamic-modules-6308e768.js";import{J as a}from"./AsyncApiOperationViewer-7637814e.js";import{p as c}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./UxBadge-7cc75759.js";import"./IndexesNodeViewer-6f9d01f2.js";import"./DdlTableDiffsViewer-7db18fb9.js";/* empty css              */import"./DdlTableViewer-d84f848c.js";import"./GraphQLOperationDiffViewer-e32d3161.js";import"./GraphPropNodeViewer-d304f569.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f79343a0.js";import"./public-api-99af098d.js";const D={title:"Debug/Jso Viewer",component:a,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},e={args:{jsoText:""},render:p=>{const{jsoText:r,...i}=p,o=c(r);return console.log(r),console.debug("Prepared JSO:",o),m.jsx(a,{...i,source:o,initialLevel:1})}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
