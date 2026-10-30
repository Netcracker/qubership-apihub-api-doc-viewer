import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-D0M4xHQ_.js";import{c as n,d as r,i,s as a,t as o}from"./compatibility-suite-utils-DHQgKRmI.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),r(),s={id:`ddlapi-compatibility-suite-table`,title:`DDL API Compatibility Suite/table`,render:o},c=`table`,l={name:`add-table`,args:i(n,c,`add-table`)},u={name:`add-table-comment`,args:i(n,c,`add-table-comment`)},d={name:`remove-table`,args:i(n,c,`remove-table`)},f={name:`remove-table-comment`,args:i(n,c,`remove-table-comment`)},p={name:`rename-table`,args:i(n,c,`rename-table`)},m={name:`update-table-comment`,args:i(n,c,`update-table-comment`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-table')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-table-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-table-comment')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'remove-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-table')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'remove-table-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-table-comment')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'rename-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'rename-table')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'update-table-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'update-table-comment')
}`,...m.parameters?.docs?.source}}},h=[`AddTable`,`AddTableComment`,`RemoveTable`,`RemoveTableComment`,`RenameTable`,`UpdateTableComment`]})))()}g();export{l as AddTable,u as AddTableComment,d as RemoveTable,f as RemoveTableComment,p as RenameTable,m as UpdateTableComment,h as __namedExportsOrder,s as default};