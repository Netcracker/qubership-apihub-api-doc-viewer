import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{J as i}from"./AsyncApiOperationViewer-92e1d27a.js";import{p as m}from"./public-api-d6a34651.js";import"./index-f46741a2.js";import"./DiffBadge-6dc75daf.js";import"./IndexesNodeViewer-6cfb43a1.js";import"./DdlTableDiffsViewer-ef2b4957.js";/* empty css              */import"./DdlTableViewer-49a7529d.js";import"./GraphQLOperationDiffViewer-7aef74ce.js";import"./GraphPropNodeViewer-0ff38baf.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a3b1b559.js";const y={title:"Debug/Jso Viewer",component:i,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=l(e);return console.log(e),console.debug("Prepared JSO:",t),c.jsx(i,{...r,source:t,initialLevel:1})}};function l(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=m(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
