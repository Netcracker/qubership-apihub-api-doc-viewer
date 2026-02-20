import"./AsyncApiOperationViewer-8635578c.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";import"./GraphPropNodeViewer-6e707ea9.js";import{G as R,a as e,b as r}from"./compatibility-suite-utils-1338a5ea.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./js-yaml-38530ef5.js";import"./graph-api-transformers-6e38e61b.js";import"./buildASTSchema-f14864f0.js";const Y={id:"graphql-compatibility-suite-root-type-general",title:"GraphQL Compatibility Suite/root-type-general",render:R},o="root-type-general",t={name:"add-description-for-root-type",args:e(r,o,"add-description-for-root-type")},a={name:"add-new-root-type",args:e(r,o,"add-new-root-type")},p={name:"change-description-for-root-type",args:e(r,o,"change-description-for-root-type")},s={name:"delete-description-for-root-type",args:e(r,o,"delete-description-for-root-type")},n={name:"delete-root-type",args:e(r,o,"delete-root-type")};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'add-description-for-root-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-root-type')
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,y,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'add-new-root-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-root-type')
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,_,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'change-description-for-root-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-root-type')
}`,...(S=(_=p.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var l,E,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'delete-description-for-root-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-root-type')
}`,...(u=(E=s.parameters)==null?void 0:E.docs)==null?void 0:u.source}}};var P,A,D;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'delete-root-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-root-type')
}`,...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const b=["AddDescriptionForRootType","AddNewRootType","ChangeDescriptionForRootType","DeleteDescriptionForRootType","DeleteRootType"];export{t as AddDescriptionForRootType,a as AddNewRootType,p as ChangeDescriptionForRootType,s as DeleteDescriptionForRootType,n as DeleteRootType,b as __namedExportsOrder,Y as default};
