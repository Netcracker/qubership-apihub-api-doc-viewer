import{j as p}from"./_commonjs-dynamic-modules-6308e768.js";import{J as i}from"./AsyncApiOperationViewer-a3a1b5d1.js";import{j as l}from"./js-yaml-71a24e1f.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-f19551e6.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-06a4e0fd.js";import"./GraphQLOperationViewer-114c447a.js";const f={title:"Debug/Jso Viewer",component:i,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=d(e);return console.log(e),console.debug("Prepared JSO:",t),p.jsx(i,{...r,source:t,initialLevel:1})}};function d(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=l.load(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const v=["Debug"];export{s as Debug,v as __namedExportsOrder,f as default};
