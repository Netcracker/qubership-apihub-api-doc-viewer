import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{J as i}from"./AsyncApiOperationViewer-489efbeb.js";import{p as m}from"./public-api-d6a34651.js";import"./index-f46741a2.js";import"./index-71f1bfe0.js";import"./take-diff-side-background-color-85ec54fb.js";import"./IndexesNodeViewer-05731b79.js";import"./DiffBadge-51a3ec54.js";import"./DdlTableDiffsViewer-78b6311e.js";/* empty css              */import"./DdlTableViewer-4b03edfb.js";import"./GraphQLOperationDiffViewer-aadc8f99.js";import"./GraphPropNodeViewer-49e74551.js";import"./index-c19463f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a2d41582.js";import"./JsonSchemaNextViewer-cd13c5ca.js";const P={title:"Debug/Jso Viewer",component:i,parameters:{},argTypes:{jsoText:{control:"text"},componentsText:{control:"text"},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:""}},s={args:{jsoText:""},render:o=>{const{jsoText:r,...e}=o,t=l(r);return console.log(r),console.debug("Prepared JSO:",t),c.jsx(i,{...e,source:t,initialLevel:1})}};function l(o){let r;try{r=JSON.parse(o)}catch(e){console.error("Cannot parse JSON:",e),r=void 0}try{r||(r=m(o))}catch(e){console.error("Cannot parse YAML:",e),r=void 0}return(!r||typeof r!="object")&&(r={}),console.debug("Parsed source:",r),r}var n,a,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const V=["Debug"];export{s as Debug,V as __namedExportsOrder,P as default};
