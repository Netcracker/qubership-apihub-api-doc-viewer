import{j as i}from"./_commonjs-dynamic-modules-6308e768.js";import{J as p}from"./AsyncApiOperationViewer-c247a271.js";import{p as l}from"./public-api-d6a34651.js";import"./index-f46741a2.js";import"./UxBadge-1b0effc6.js";import"./DdlTableViewer-57499a9b.js";import"./GraphQLOperationDiffViewer-4b1d8fcb.js";import"./GraphPropNodeViewer-2783e1dc.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f5a9c266.js";const O={title:"Debug/Jso Viewer",component:p,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:e,...r}=o,t=m(e);return console.log(e),console.debug("Prepared JSO:",t),i.jsx(p,{...r,source:t,initialLevel:1})}};function m(o){let e;try{e=JSON.parse(o)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=l(o))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
