import"./AsyncApiOperationViewer-908de172.js";import"./DdlTableDiffsViewer-fd6285f4.js";import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphQLOperationViewer-d1208066.js";import"./UxBadge-190a23d2.js";import{D as L,g as m,T as o}from"./compatibility-suite-utils-5c0f2f72.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-fee5cd8c.js";/* empty css              */import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./graph-api-transformers-d314e9cc.js";import"./buildASTSchema-f14864f0.js";import"./ddl-story-navigation-f02fad16.js";import"./test-diff-meta-keys-5677f54d.js";import"./build-from-ddl-browser-8639db24.js";import"./iframe-b8cab779.js";import"../sb-preview/runtime.js";import"./resolve-debug-table-key-39ff4741.js";import"./ddl-story-realm-utils-c0692776.js";const W={id:"ddlapi-compatibility-suite-column",title:"DDL API Compatibility Suite/column",render:L},e="column",r={name:"add-column",args:m(o,e,"add-column")},n={name:"add-column-comment",args:m(o,e,"add-column-comment")},a={name:"remove-column",args:m(o,e,"remove-column")},t={name:"remove-column-comment",args:m(o,e,"remove-column-comment")},s={name:"rename-column",args:m(o,e,"rename-column")},c={name:"update-column-comment",args:m(o,e,"update-column-comment")};var u,d,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(U=(y=c.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};const X=["AddColumn","AddColumnComment","RemoveColumn","RemoveColumnComment","RenameColumn","UpdateColumnComment"];export{r as AddColumn,n as AddColumnComment,a as RemoveColumn,t as RemoveColumnComment,s as RenameColumn,c as UpdateColumnComment,X as __namedExportsOrder,W as default};
