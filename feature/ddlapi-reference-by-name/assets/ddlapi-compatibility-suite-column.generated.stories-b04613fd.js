import"./AsyncApiOperationViewer-82c54d3c.js";import"./DdlTableDiffsViewer-210f48f9.js";import"./DdlTableViewer-3e1a14b9.js";import"./GraphQLOperationDiffViewer-f4c3455f.js";import"./GraphQLOperationViewer-f7b8da78.js";import"./DiffBadge-462be392.js";import{D as L,g as e,T as m}from"./compatibility-suite-utils-7b2725b8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-4b6d00c5.js";/* empty css              */import"./GraphPropNodeViewer-ddf4092c.js";import"./index-415bee12.js";import"./graph-api-transformers-2a792b75.js";import"./buildASTSchema-f14864f0.js";import"./index-8cf80a84.js";import"./build-from-ddl-browser-832f5cbf.js";import"./iframe-a8ff8998.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const Q={id:"ddlapi-compatibility-suite-column",title:"DDL API Compatibility Suite/column",render:L},o="column",r={name:"add-column",args:e(m,o,"add-column")},n={name:"add-column-comment",args:e(m,o,"add-column-comment")},a={name:"remove-column",args:e(m,o,"remove-column")},t={name:"remove-column-comment",args:e(m,o,"remove-column-comment")},s={name:"rename-column",args:e(m,o,"rename-column")},c={name:"update-column-comment",args:e(m,o,"update-column-comment")};var u,d,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'add-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-column')
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,i,_;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'add-column-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-column-comment')
}`,...(_=(i=n.parameters)==null?void 0:i.docs)==null?void 0:_.source}}};var S,g,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'remove-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-column')
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var E,T,C;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'remove-column-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-column-comment')
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,P,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'rename-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'rename-column')
}`,...(A=(P=s.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var v,y,U;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'update-column-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'update-column-comment')
}`,...(U=(y=c.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};const V=["AddColumn","AddColumnComment","RemoveColumn","RemoveColumnComment","RenameColumn","UpdateColumnComment"];export{r as AddColumn,n as AddColumnComment,a as RemoveColumn,t as RemoveColumnComment,s as RenameColumn,c as UpdateColumnComment,V as __namedExportsOrder,Q as default};
