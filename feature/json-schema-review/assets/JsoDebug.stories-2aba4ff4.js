import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{J as i}from"./AsyncApiOperationViewer-7e4d71d7.js";import{p as m}from"./public-api-99af098d.js";import"./index-f46741a2.js";import"./DiffBadge-2b171eda.js";import"./IndexesNodeViewer-0c1fa703.js";import"./DdlTableDiffsViewer-62d1ded1.js";/* empty css              */import"./DdlTableViewer-975eea68.js";import"./GraphQLOperationDiffViewer-346f0994.js";import"./GraphPropNodeViewer-40e9d38d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e7bff01f.js";const y={title:"Debug/Jso Viewer",component:i,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=l(e);return console.log(e),console.debug("Prepared JSO:",t),c.jsx(i,{...r,source:t,initialLevel:1})}};function l(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=m(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    jsoText: ''
  },
  render: args => {
    const {
      jsoText,
      ...viewerArgs
    } = args;
    const parsedJso = parseJsonOrYaml(jsoText);
    console.log(jsoText);
    console.debug('Prepared JSO:', parsedJso);
    return <JsoViewer {...viewerArgs} source={parsedJso as object | null} initialLevel={1} />;
  }
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const A=["Debug"];export{s as Debug,A as __namedExportsOrder,y as default};
