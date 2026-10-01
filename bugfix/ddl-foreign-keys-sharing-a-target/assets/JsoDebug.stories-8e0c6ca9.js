import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{J as i}from"./AsyncApiOperationViewer-07f67903.js";import{p as m}from"./public-api-d6a34651.js";import"./index-f46741a2.js";import"./DiffBadge-afae2274.js";import"./IndexesNodeViewer-e7030f15.js";import"./DdlTableDiffsViewer-4507eb0c.js";/* empty css              */import"./DdlTableViewer-f93633a2.js";import"./GraphQLOperationDiffViewer-e3567e5d.js";import"./GraphPropNodeViewer-9078da4e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8e6b5d3f.js";const y={title:"Debug/Jso Viewer",component:i,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=l(e);return console.log(e),console.debug("Prepared JSO:",t),c.jsx(i,{...r,source:t,initialLevel:1})}};function l(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=m(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
