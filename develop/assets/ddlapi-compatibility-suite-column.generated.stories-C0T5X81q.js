import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-GQiP-9Ep.js";import{a as n,c as r,o as i,r as a,t as o}from"./compatibility-suite-utils-D611eFqq.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),n(),r(),s={id:`ddlapi-compatibility-suite-column`,title:`DDL API Compatibility Suite/column`,render:o},c=`column`,l={name:`add-column`,args:a(i,c,`add-column`)},u={name:`add-column-comment`,args:a(i,c,`add-column-comment`)},d={name:`remove-column`,args:a(i,c,`remove-column`)},f={name:`remove-column-comment`,args:a(i,c,`remove-column-comment`)},p={name:`rename-column`,args:a(i,c,`rename-column`)},m={name:`update-column-comment`,args:a(i,c,`update-column-comment`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-column')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-column-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-column-comment')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'remove-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-column')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'remove-column-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-column-comment')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'rename-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'rename-column')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'update-column-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'update-column-comment')
}`,...m.parameters?.docs?.source}}},h=[`AddColumn`,`AddColumnComment`,`RemoveColumn`,`RemoveColumnComment`,`RenameColumn`,`UpdateColumnComment`]})))()}g();export{l as AddColumn,u as AddColumnComment,d as RemoveColumn,f as RemoveColumnComment,p as RenameColumn,m as UpdateColumnComment,h as __namedExportsOrder,s as default};