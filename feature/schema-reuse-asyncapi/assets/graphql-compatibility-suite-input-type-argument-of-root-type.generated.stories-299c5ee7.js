import"./AsyncApiOperationViewer-5374a7aa.js";import"./GraphQLOperationViewer-3d9e1054.js";import"./GraphQLOperationDiffViewer-781ce75b.js";import"./GraphPropNodeViewer-28195d99.js";import{G as X,a as e,b as t}from"./compatibility-suite-utils-01d69233.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./js-yaml-38530ef5.js";import"./graph-api-transformers-14a7db95.js";import"./buildASTSchema-f14864f0.js";const me={id:"graphql-compatibility-suite-input-type-argument-of-root-type",title:"GraphQL Compatibility Suite/input-type-argument-of-root-type",render:X},r="input-type-argument-of-root-type",n={name:"add-description-for-field-of-input-type-argument",args:e(t,r,"add-description-for-field-of-input-type-argument")},a={name:"add-enum-value-of-field-in-input-type-argument",args:e(t,r,"add-enum-value-of-field-in-input-type-argument")},o={name:"add-input-type-argument",args:e(t,r,"add-input-type-argument")},p={name:"add-new-field-in-input-type-argument",args:e(t,r,"add-new-field-in-input-type-argument")},i={name:"change-type-of-field-in-input-type-argument",args:e(t,r,"change-type-of-field-in-input-type-argument")},u={name:"delete-description-for-field-of-input-type-argument",args:e(t,r,"delete-description-for-field-of-input-type-argument")},m={name:"mark-mandatory-field-of-input-type-argument-as-optional",args:e(t,r,"mark-mandatory-field-of-input-type-argument-as-optional")},s={name:"mark-optional-field-of-input-type-argument-as-mandatory",args:e(t,r,"mark-optional-field-of-input-type-argument-as-mandatory")},d={name:"remove-enum-value-of-field-in-input-type-argument",args:e(t,r,"remove-enum-value-of-field-in-input-type-argument")},g={name:"remove-field-from-input-type-argument",args:e(t,r,"remove-field-from-input-type-argument")},y={name:"remove-input-type-argument",args:e(t,r,"remove-input-type-argument")},c={name:"update-description-for-field-of-input-type-argument",args:e(t,r,"update-description-for-field-of-input-type-argument")};var f,l,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-input-type-argument')
}`,...(T=(l=n.parameters)==null?void 0:l.docs)==null?void 0:T.source}}};var _,S,A;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-input-type-argument')
}`,...(A=(S=a.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var I,E,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'add-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-input-type-argument')
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,v,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'add-new-field-in-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-input-type-argument')
}`,...(D=(v=p.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var O,R,C;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'change-type-of-field-in-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-type-of-field-in-input-type-argument')
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var G,L,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-input-type-argument')
}`,...(Q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,H,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-input-type-argument-as-optional',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-input-type-argument-as-optional')
}`,...(Y=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var k,h,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-input-type-argument-as-mandatory',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-input-type-argument-as-mandatory')
}`,...(M=(h=s.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var w,V,b;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-input-type-argument')
}`,...(b=(V=d.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var x,N,q;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'remove-field-from-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-input-type-argument')
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var j,z,B;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'remove-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-input-type-argument')
}`,...(B=(z=y.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,K,W;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-input-type-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-input-type-argument')
}`,...(W=(K=c.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const se=["AddDescriptionForFieldOfInputTypeArgument","AddEnumValueOfFieldInInputTypeArgument","AddInputTypeArgument","AddNewFieldInInputTypeArgument","ChangeTypeOfFieldInInputTypeArgument","DeleteDescriptionForFieldOfInputTypeArgument","MarkMandatoryFieldOfInputTypeArgumentAsOptional","MarkOptionalFieldOfInputTypeArgumentAsMandatory","RemoveEnumValueOfFieldInInputTypeArgument","RemoveFieldFromInputTypeArgument","RemoveInputTypeArgument","UpdateDescriptionForFieldOfInputTypeArgument"];export{n as AddDescriptionForFieldOfInputTypeArgument,a as AddEnumValueOfFieldInInputTypeArgument,o as AddInputTypeArgument,p as AddNewFieldInInputTypeArgument,i as ChangeTypeOfFieldInInputTypeArgument,u as DeleteDescriptionForFieldOfInputTypeArgument,m as MarkMandatoryFieldOfInputTypeArgumentAsOptional,s as MarkOptionalFieldOfInputTypeArgumentAsMandatory,d as RemoveEnumValueOfFieldInInputTypeArgument,g as RemoveFieldFromInputTypeArgument,y as RemoveInputTypeArgument,c as UpdateDescriptionForFieldOfInputTypeArgument,se as __namedExportsOrder,me as default};
