import"./AsyncApiOperationViewer-465b155e.js";import"./DdlTableDiffsViewer-efacc174.js";import"./DdlTableViewer-7442658d.js";import"./GraphQLOperationDiffViewer-efa1db5a.js";import"./GraphQLOperationViewer-e3dc128f.js";import"./DiffBadge-4e6868e6.js";import{D as G,g as e,T as r}from"./compatibility-suite-utils-a17680a6.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-f1c4d46c.js";/* empty css              */import"./GraphPropNodeViewer-162569f6.js";import"./index-415bee12.js";import"./graph-api-transformers-0f74cb65.js";import"./buildASTSchema-f14864f0.js";import"./index-8cf80a84.js";import"./build-from-ddl-browser-b2c42d62.js";import"./iframe-9b94cc2e.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const de={id:"ddlapi-compatibility-suite-constraints",title:"DDL API Compatibility Suite/constraints",render:G},a="constraints",o={name:"add-foreign-key",args:e(r,a,"add-foreign-key")},n={name:"add-primary-key",args:e(r,a,"add-primary-key")},m={name:"add-primary-key-column",args:e(r,a,"add-primary-key-column")},s={name:"change-foreign-key-columns",args:e(r,a,"change-foreign-key-columns")},c={name:"change-primary-key-columns",args:e(r,a,"change-primary-key-columns")},t={name:"change-referenced-columns",args:e(r,a,"change-referenced-columns")},i={name:"change-referenced-table",args:e(r,a,"change-referenced-table")},d={name:"remove-foreign-key",args:e(r,a,"remove-foreign-key")},g={name:"remove-primary-key",args:e(r,a,"remove-primary-key")},y={name:"remove-primary-key-column",args:e(r,a,"remove-primary-key-column")};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'add-foreign-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-foreign-key')
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var _,S,D;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-primary-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-primary-key')
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,E,P;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'add-primary-key-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'add-primary-key-column')
}`,...(P=(E=m.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var I,k,C;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'change-foreign-key-columns',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-foreign-key-columns')
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var A,f,h;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'change-primary-key-columns',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-primary-key-columns')
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,K,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'change-referenced-columns',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-referenced-columns')
}`,...(L=(K=t.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var U,Y,R;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'change-referenced-table',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'change-referenced-table')
}`,...(R=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};var b,F,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'remove-foreign-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-foreign-key')
}`,...(x=(F=d.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var O,j,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'remove-primary-key',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-primary-key')
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var w,z,B;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'remove-primary-key-column',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'remove-primary-key-column')
}`,...(B=(z=y.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const ge=["AddForeignKey","AddPrimaryKey","AddPrimaryKeyColumn","ChangeForeignKeyColumns","ChangePrimaryKeyColumns","ChangeReferencedColumns","ChangeReferencedTable","RemoveForeignKey","RemovePrimaryKey","RemovePrimaryKeyColumn"];export{o as AddForeignKey,n as AddPrimaryKey,m as AddPrimaryKeyColumn,s as ChangeForeignKeyColumns,c as ChangePrimaryKeyColumns,t as ChangeReferencedColumns,i as ChangeReferencedTable,d as RemoveForeignKey,g as RemovePrimaryKey,y as RemovePrimaryKeyColumn,ge as __namedExportsOrder,de as default};
