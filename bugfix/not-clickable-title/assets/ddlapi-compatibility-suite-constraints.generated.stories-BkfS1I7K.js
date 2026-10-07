import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-GQiP-9Ep.js";import{a as n,c as r,o as i,r as a,t as o}from"./compatibility-suite-utils-D611eFqq.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),n(),r(),s={id:`ddlapi-compatibility-suite-constraints`,title:`DDL API Compatibility Suite/constraints`,render:o},c=`constraints`,l={name:`add-foreign-key`,args:a(i,c,`add-foreign-key`)},u={name:`add-primary-key`,args:a(i,c,`add-primary-key`)},d={name:`add-primary-key-column`,args:a(i,c,`add-primary-key-column`)},f={name:`change-foreign-key-columns`,args:a(i,c,`change-foreign-key-columns`)},p={name:`change-primary-key-columns`,args:a(i,c,`change-primary-key-columns`)},m={name:`change-referenced-columns`,args:a(i,c,`change-referenced-columns`)},h={name:`change-referenced-table`,args:a(i,c,`change-referenced-table`)},g={name:`remove-foreign-key`,args:a(i,c,`remove-foreign-key`)},_={name:`remove-primary-key`,args:a(i,c,`remove-primary-key`)},v={name:`remove-primary-key-column`,args:a(i,c,`remove-primary-key-column`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-foreign-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-foreign-key')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-primary-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-primary-key')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-primary-key-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-primary-key-column')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'change-foreign-key-columns',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-foreign-key-columns')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'change-primary-key-columns',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-primary-key-columns')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'change-referenced-columns',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-referenced-columns')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'change-referenced-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-referenced-table')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'remove-foreign-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-foreign-key')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'remove-primary-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-primary-key')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'remove-primary-key-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-primary-key-column')
}`,...v.parameters?.docs?.source}}},y=[`AddForeignKey`,`AddPrimaryKey`,`AddPrimaryKeyColumn`,`ChangeForeignKeyColumns`,`ChangePrimaryKeyColumns`,`ChangeReferencedColumns`,`ChangeReferencedTable`,`RemoveForeignKey`,`RemovePrimaryKey`,`RemovePrimaryKeyColumn`]})))()}b();export{l as AddForeignKey,u as AddPrimaryKey,d as AddPrimaryKeyColumn,f as ChangeForeignKeyColumns,p as ChangePrimaryKeyColumns,m as ChangeReferencedColumns,h as ChangeReferencedTable,g as RemoveForeignKey,_ as RemovePrimaryKey,v as RemovePrimaryKeyColumn,y as __namedExportsOrder,s as default};