import"./AsyncApiOperationViewer-fb77aa18.js";import"./DdlTableDiffsViewer-136bb226.js";import"./DdlTableViewer-29cb40dd.js";import"./GraphQLOperationDiffViewer-e3567e5d.js";import"./GraphQLOperationViewer-8e6b5d3f.js";import"./DiffBadge-afae2274.js";import{D as U,g as e,T as a}from"./compatibility-suite-utils-53c419ea.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-10530692.js";/* empty css              */import"./GraphPropNodeViewer-9078da4e.js";import"./index-415bee12.js";import"./graph-api-transformers-d8a964ad.js";import"./buildASTSchema-f14864f0.js";import"./index-8cf80a84.js";import"./build-from-ddl-browser-639d8a03.js";import"./iframe-e8de85fc.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const Q={id:"ddlapi-compatibility-suite-table",title:"DDL API Compatibility Suite/table",render:U},r="table",t={name:"add-table",args:e(a,r,"add-table")},m={name:"add-table-comment",args:e(a,r,"add-table-comment")},o={name:"remove-table",args:e(a,r,"remove-table")},s={name:"remove-table-comment",args:e(a,r,"remove-table-comment")},n={name:"rename-table",args:e(a,r,"rename-table")},d={name:"update-table-comment",args:e(a,r,"update-table-comment")};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'add-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-table')
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,b,T;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'add-table-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-table-comment')
}`,...(T=(b=m.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var _,S,g;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'remove-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-table')
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var D,E,u;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'remove-table-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-table-comment')
}`,...(u=(E=s.parameters)==null?void 0:E.docs)==null?void 0:u.source}}};var I,P,A;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'rename-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'rename-table')
}`,...(A=(P=n.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var C,v,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'update-table-comment',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'update-table-comment')
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const V=["AddTable","AddTableComment","RemoveTable","RemoveTableComment","RenameTable","UpdateTableComment"];export{t as AddTable,m as AddTableComment,o as RemoveTable,s as RemoveTableComment,n as RenameTable,d as UpdateTableComment,V as __namedExportsOrder,Q as default};
