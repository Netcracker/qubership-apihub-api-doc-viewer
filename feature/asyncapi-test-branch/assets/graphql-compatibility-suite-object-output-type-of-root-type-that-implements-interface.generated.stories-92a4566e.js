import"./AsyncApiOperationViewer-8635578c.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";import"./GraphPropNodeViewer-6e707ea9.js";import{G as ne,g as e,T as r}from"./compatibility-suite-utils-1976be1c.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./graph-api-transformers-6e38e61b.js";import"./buildASTSchema-f14864f0.js";const ge={id:"graphql-compatibility-suite-object-output-type-of-root-type-that-implements-interface",title:"GraphQL Compatibility Suite/object-output-type-of-root-type-that-implements-interface",render:ne},t="object-output-type-of-root-type-that-implements-interface",a={name:"add-description-for-field-of-interface-type",args:e(r,t,"add-description-for-field-of-interface-type")},o={name:"add-description-for-interface-type",args:e(r,t,"add-description-for-interface-type")},n={name:"add-interface-for-object-type",args:e(r,t,"add-interface-for-object-type")},c={name:"add-new-field-in-interface-type",args:e(r,t,"add-new-field-in-interface-type")},p={name:"change-field-type-of-interface-type",args:e(r,t,"change-field-type-of-interface-type")},i={name:"change-interface-for-object-type",args:e(r,t,"change-interface-for-object-type")},s={name:"delete-description-for-field-of-interface-type",args:e(r,t,"delete-description-for-field-of-interface-type")},d={name:"delete-description-for-interface-type",args:e(r,t,"delete-description-for-interface-type")},f={name:"delete-interface-for-object-type",args:e(r,t,"delete-interface-for-object-type")},m={name:"mark-mandatory-field-of-interface-type-as-optional",args:e(r,t,"mark-mandatory-field-of-interface-type-as-optional")},y={name:"mark-optional-field-of-interface-type-as-mandatory",args:e(r,t,"mark-optional-field-of-interface-type-as-mandatory")},l={name:"remove-field-from-interface-type",args:e(r,t,"remove-field-from-interface-type")},T={name:"update-description-for-field-of-interface-type",args:e(r,t,"update-description-for-field-of-interface-type")},g={name:"update-description-for-interface-type",args:e(r,t,"update-description-for-interface-type")};var _,S,E;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-interface-type')
}`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,u,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'add-description-for-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-interface-type')
}`,...(P=(u=o.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var A,F,h;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'add-interface-for-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-interface-for-object-type')
}`,...(h=(F=n.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var D,G,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'add-new-field-in-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-interface-type')
}`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var Q,b,O;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'change-field-type-of-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-interface-type')
}`,...(O=(b=p.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var j,C,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'change-interface-for-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-interface-for-object-type')
}`,...(U=(C=i.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var R,H,Y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-interface-type')
}`,...(Y=(H=s.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var k,M,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'delete-description-for-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-interface-type')
}`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var w,x,N;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'delete-interface-for-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-interface-for-object-type')
}`,...(N=(x=f.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var q,z,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-interface-type-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-interface-type-as-optional')
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,K,V;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-interface-type-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-interface-type-as-mandatory')
}`,...(V=(K=y.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var W,X,Z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'remove-field-from-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-interface-type')
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-interface-type')
}`,...(re=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'update-description-for-interface-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-interface-type')
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const _e=["AddDescriptionForFieldOfInterfaceType","AddDescriptionForInterfaceType","AddInterfaceForObjectType","AddNewFieldInInterfaceType","ChangeFieldTypeOfInterfaceType","ChangeInterfaceForObjectType","DeleteDescriptionForFieldOfInterfaceType","DeleteDescriptionForInterfaceType","DeleteInterfaceForObjectType","MarkMandatoryFieldOfInterfaceTypeAsOptional","MarkOptionalFieldOfInterfaceTypeAsMandatory","RemoveFieldFromInterfaceType","UpdateDescriptionForFieldOfInterfaceType","UpdateDescriptionForInterfaceType"];export{a as AddDescriptionForFieldOfInterfaceType,o as AddDescriptionForInterfaceType,n as AddInterfaceForObjectType,c as AddNewFieldInInterfaceType,p as ChangeFieldTypeOfInterfaceType,i as ChangeInterfaceForObjectType,s as DeleteDescriptionForFieldOfInterfaceType,d as DeleteDescriptionForInterfaceType,f as DeleteInterfaceForObjectType,m as MarkMandatoryFieldOfInterfaceTypeAsOptional,y as MarkOptionalFieldOfInterfaceTypeAsMandatory,l as RemoveFieldFromInterfaceType,T as UpdateDescriptionForFieldOfInterfaceType,g as UpdateDescriptionForInterfaceType,_e as __namedExportsOrder,ge as default};
