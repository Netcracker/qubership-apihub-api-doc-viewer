import"./AsyncApiOperationViewer-465b155e.js";import"./DdlTableDiffsViewer-efacc174.js";import"./DdlTableViewer-7442658d.js";import"./GraphQLOperationDiffViewer-efa1db5a.js";import"./GraphQLOperationViewer-e3dc128f.js";import"./DiffBadge-4e6868e6.js";import{D as U,g as e,T as r}from"./compatibility-suite-utils-df51b607.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-f1c4d46c.js";/* empty css              */import"./GraphPropNodeViewer-162569f6.js";import"./index-415bee12.js";import"./graph-api-transformers-0f74cb65.js";import"./buildASTSchema-f14864f0.js";import"./index-8cf80a84.js";import"./build-from-ddl-browser-3ec9ecee.js";import"./iframe-f3449af9.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const Q={id:"ddlapi-compatibility-suite-table",title:"DDL API Compatibility Suite/table",render:U},a="table",t={name:"add-table",args:e(r,a,"add-table")},o={name:"add-table-description",args:e(r,a,"add-table-description")},s={name:"remove-table",args:e(r,a,"remove-table")},m={name:"remove-table-description",args:e(r,a,"remove-table-description")},i={name:"rename-table",args:e(r,a,"rename-table")},d={name:"update-table-description",args:e(r,a,"update-table-description")};var p,n,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'add-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-table')
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,b,T;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'add-table-description',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-table-description')
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var D,_,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'remove-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-table')
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var g,E,u;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'remove-table-description',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-table-description')
}`,...(u=(E=m.parameters)==null?void 0:E.docs)==null?void 0:u.source}}};var I,P,A;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'rename-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'rename-table')
}`,...(A=(P=i.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var v,y,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'update-table-description',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'update-table-description')
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const V=["AddTable","AddTableDescription","RemoveTable","RemoveTableDescription","RenameTable","UpdateTableDescription"];export{t as AddTable,o as AddTableDescription,s as RemoveTable,m as RemoveTableDescription,i as RenameTable,d as UpdateTableDescription,V as __namedExportsOrder,Q as default};
