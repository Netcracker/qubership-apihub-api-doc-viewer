import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{d as n,u as r}from"./AsyncApiOperationViewer-Bv5WFfYq.js";import{Nr as i,an as a,jr as o,on as s,pn as c}from"./UxBadge-BGHR5KdO.js";import{r as l,t as u,u as d}from"./preprocess-lXSz3s7w.js";import{n as f,t as p}from"./parse-yaml-source-C_EzBWAu.js";var m,h,g,_,v;function y(){return(y=e((()=>{n(),c(),o(),l(),p(),m=t(),h={diffsMetaKey:s,aggregatedDiffsMetaKey:a},g={title:`Debug/Json Schema Diff Viewer`,component:r,parameters:{},argTypes:{beforeSchemaText:{control:`text`},afterSchemaText:{control:`text`},beforeComponentsText:{control:`text`},afterComponentsText:{control:`text`},schema:{control:{disable:!0},table:{disable:!0}},diffMetaKeys:{control:{disable:!0},table:{disable:!0}}},args:{beforeSchemaText:``,afterSchemaText:``,beforeComponentsText:``,afterComponentsText:``,diffMetaKeys:h,hideUnchangedNodes:!1}},_={args:{beforeSchemaText:``,afterSchemaText:``,beforeComponentsText:``,afterComponentsText:``,expandedDepth:2,diffMetaKeys:h,hideUnchangedNodes:!1},render:e=>{let{beforeSchemaText:t,afterSchemaText:n,beforeComponentsText:a,afterComponentsText:o,...s}=e,c=f(t),l=f(n),p=a?f(a):void 0,h=o?f(o):void 0,g=d({beforeSchema:c,afterSchema:l,beforeAdditionalComponents:i(p)?p:void 0,afterAdditionalComponents:i(h)?h:void 0,target:u});return console.log(t),console.log(n),console.debug(`Prepared diff schema:`,g),(0,m.jsx)(r,{...s,schema:g})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    beforeSchemaText: '',
    afterSchemaText: '',
    beforeComponentsText: '',
    afterComponentsText: '',
    expandedDepth: 2,
    diffMetaKeys: DIFF_META_KEYS,
    hideUnchangedNodes: false
  },
  render: args => {
    const {
      beforeSchemaText,
      afterSchemaText,
      beforeComponentsText,
      afterComponentsText,
      ...viewerArgs
    } = args;
    const beforeSchema = parseYamlSource(beforeSchemaText);
    const afterSchema = parseYamlSource(afterSchemaText);
    const beforeComponents = beforeComponentsText ? parseYamlSource(beforeComponentsText) : undefined;
    const afterComponents = afterComponentsText ? parseYamlSource(afterComponentsText) : undefined;
    const schema = prepareJsonDiffSchema({
      beforeSchema,
      afterSchema,
      beforeAdditionalComponents: isObject(beforeComponents) ? beforeComponents : undefined,
      afterAdditionalComponents: isObject(afterComponents) ? afterComponents : undefined,
      target: REQUEST_BODY_TARGET
    });
    console.log(beforeSchemaText);
    console.log(afterSchemaText);
    console.debug('Prepared diff schema:', schema);
    return <JsonSchemaDiffsViewer {...viewerArgs} schema={schema} />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Debug`]})))()}y();export{_ as Debug,v as __namedExportsOrder,g as default};