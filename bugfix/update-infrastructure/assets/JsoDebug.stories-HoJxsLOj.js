import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DRGMQe9r.js";import{o as n,s as r}from"./AsyncApiOperationViewer-BMUjObKz.js";import{r as i,t as a}from"./browser-ChQu38zI.js";function o(e){let t;try{t=JSON.parse(e)}catch(e){console.error(`Cannot parse JSON:`,e),t=void 0}try{t||=i(e)}catch(e){console.error(`Cannot parse YAML:`,e),t=void 0}return(!t||typeof t!=`object`)&&(t={}),console.debug(`Parsed source:`,t),t}var s,c,l,u;function d(){return(d=e((()=>{r(),a(),s=t(),c={title:`Debug/Jso Viewer`,component:n,parameters:{},argTypes:{jsoText:{control:`text`},componentsText:{control:`text`},source:{control:{disable:!0},table:{disable:!0}}},args:{jsoText:``}},l={args:{jsoText:``},render:e=>{let{jsoText:t,...r}=e,i=o(t);return console.log(t),console.debug(`Prepared JSO:`,i),(0,s.jsx)(n,{...r,source:i,initialLevel:1})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Debug`]})))()}d();export{l as Debug,u as __namedExportsOrder,c as default};