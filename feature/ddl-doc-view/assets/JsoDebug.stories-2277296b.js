import{j as i}from"./_commonjs-dynamic-modules-6308e768.js";import{J as p}from"./AsyncApiOperationViewer-9f7cf2c0.js";import{p as l}from"./public-api-d6a34651.js";import"./index-f46741a2.js";import"./UxBadge-9c60b91e.js";import"./DdlTableViewer-e4f8f57b.js";import"./GraphPropNodeViewer-c080f356.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-4683d968.js";import"./GraphQLOperationViewer-0c4ee9be.js";const O={title:"Debug/Jso Viewer",component:p,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=m(e);return console.log(e),console.debug("Prepared JSO:",t),i.jsx(p,{...r,source:t,initialLevel:1})}};function m(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=l(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const w=["Debug"];export{s as Debug,w as __namedExportsOrder,O as default};
