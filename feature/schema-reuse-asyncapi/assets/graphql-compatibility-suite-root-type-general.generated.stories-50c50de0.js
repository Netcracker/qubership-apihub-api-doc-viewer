import"./AsyncApiOperationViewer-5374a7aa.js";import"./GraphQLOperationViewer-3d9e1054.js";import"./GraphQLOperationDiffViewer-781ce75b.js";import"./GraphPropNodeViewer-28195d99.js";import{G as R,a as e,b as o}from"./compatibility-suite-utils-01d69233.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./js-yaml-38530ef5.js";import"./graph-api-transformers-14a7db95.js";import"./buildASTSchema-f14864f0.js";const Y={id:"graphql-compatibility-suite-root-type-general",title:"GraphQL Compatibility Suite/root-type-general",render:R},r="root-type-general",t={name:"add-description-for-root-type",args:e(o,r,"add-description-for-root-type")},a={name:"add-new-root-type",args:e(o,r,"add-new-root-type")},s={name:"change-description-for-root-type",args:e(o,r,"change-description-for-root-type")},p={name:"delete-description-for-root-type",args:e(o,r,"delete-description-for-root-type")},n={name:"delete-root-type",args:e(o,r,"delete-root-type")};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'add-description-for-root-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-root-type')
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,y,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'add-new-root-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-root-type')
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,_,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'change-description-for-root-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-root-type')
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var l,E,u;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'delete-description-for-root-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-root-type')
}`,...(u=(E=p.parameters)==null?void 0:E.docs)==null?void 0:u.source}}};var P,A,D;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'delete-root-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-root-type')
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const b=["AddDescriptionForRootType","AddNewRootType","ChangeDescriptionForRootType","DeleteDescriptionForRootType","DeleteRootType"];export{t as AddDescriptionForRootType,a as AddNewRootType,s as ChangeDescriptionForRootType,p as DeleteDescriptionForRootType,n as DeleteRootType,b as __namedExportsOrder,Y as default};
