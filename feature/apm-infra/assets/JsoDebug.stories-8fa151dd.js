import{j as p}from"./jsx-runtime-1438501e.js";import{J as i}from"./AsyncApiOperationViewer-fbae63d0.js";import{j as l}from"./js-yaml-71a24e1f.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-c30a27f7.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-415bee12.js";import"./ErrorBoundaryFallback-8e30116b.js";import"./GraphQLOperationDiffViewer-1b3728f7.js";import"./GraphQLOperationViewer-87a9aa0b.js";import"./DdlTableViewer-7f8da110.js";const w={title:"Debug/Jso Viewer",component:i,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=m(e);return console.log(e),console.debug("Prepared JSO:",t),p.jsx(i,{...r,source:t,initialLevel:1})}};function m(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=l.load(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const S=["Debug"];export{s as Debug,S as __namedExportsOrder,w as default};
