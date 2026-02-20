import"./AsyncApiOperationViewer-8635578c.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";import"./GraphPropNodeViewer-6e707ea9.js";import{G as X,g as e,T as r}from"./compatibility-suite-utils-b0e60ff4.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./graph-api-transformers-6e38e61b.js";import"./buildASTSchema-f14864f0.js";const ue={id:"graphql-compatibility-suite-input-type-argument-of-root-type",title:"GraphQL Compatibility Suite/input-type-argument-of-root-type",render:X},t="input-type-argument-of-root-type",n={name:"add-description-for-field-of-input-type-argument",args:e(r,t,"add-description-for-field-of-input-type-argument")},a={name:"add-enum-value-of-field-in-input-type-argument",args:e(r,t,"add-enum-value-of-field-in-input-type-argument")},p={name:"add-input-type-argument",args:e(r,t,"add-input-type-argument")},o={name:"add-new-field-in-input-type-argument",args:e(r,t,"add-new-field-in-input-type-argument")},i={name:"change-type-of-field-in-input-type-argument",args:e(r,t,"change-type-of-field-in-input-type-argument")},u={name:"delete-description-for-field-of-input-type-argument",args:e(r,t,"delete-description-for-field-of-input-type-argument")},m={name:"mark-mandatory-field-of-input-type-argument-as-optional",args:e(r,t,"mark-mandatory-field-of-input-type-argument-as-optional")},s={name:"mark-optional-field-of-input-type-argument-as-mandatory",args:e(r,t,"mark-optional-field-of-input-type-argument-as-mandatory")},d={name:"remove-enum-value-of-field-in-input-type-argument",args:e(r,t,"remove-enum-value-of-field-in-input-type-argument")},g={name:"remove-field-from-input-type-argument",args:e(r,t,"remove-field-from-input-type-argument")},y={name:"remove-input-type-argument",args:e(r,t,"remove-input-type-argument")},c={name:"update-description-for-field-of-input-type-argument",args:e(r,t,"update-description-for-field-of-input-type-argument")};var f,l,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-input-type-argument')
}`,...(T=(l=n.parameters)==null?void 0:l.docs)==null?void 0:T.source}}};var _,S,A;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-input-type-argument')
}`,...(A=(S=a.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var I,E,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'add-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-input-type-argument')
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var G,F,L;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'add-new-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-input-type-argument')
}`,...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var Q,v,h;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'change-type-of-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-type-of-field-in-input-type-argument')
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var D,O,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-input-type-argument')
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var C,U,H;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-input-type-argument-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-input-type-argument-as-optional')
}`,...(H=(U=m.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var Y,k,M;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-input-type-argument-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-input-type-argument-as-mandatory')
}`,...(M=(k=s.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var w,V,b;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-input-type-argument')
}`,...(b=(V=d.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var x,N,q;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'remove-field-from-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-input-type-argument')
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var j,z,B;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'remove-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-input-type-argument')
}`,...(B=(z=y.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,K,W;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-input-type-argument')
}`,...(W=(K=c.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const me=["AddDescriptionForFieldOfInputTypeArgument","AddEnumValueOfFieldInInputTypeArgument","AddInputTypeArgument","AddNewFieldInInputTypeArgument","ChangeTypeOfFieldInInputTypeArgument","DeleteDescriptionForFieldOfInputTypeArgument","MarkMandatoryFieldOfInputTypeArgumentAsOptional","MarkOptionalFieldOfInputTypeArgumentAsMandatory","RemoveEnumValueOfFieldInInputTypeArgument","RemoveFieldFromInputTypeArgument","RemoveInputTypeArgument","UpdateDescriptionForFieldOfInputTypeArgument"];export{n as AddDescriptionForFieldOfInputTypeArgument,a as AddEnumValueOfFieldInInputTypeArgument,p as AddInputTypeArgument,o as AddNewFieldInInputTypeArgument,i as ChangeTypeOfFieldInInputTypeArgument,u as DeleteDescriptionForFieldOfInputTypeArgument,m as MarkMandatoryFieldOfInputTypeArgumentAsOptional,s as MarkOptionalFieldOfInputTypeArgumentAsMandatory,d as RemoveEnumValueOfFieldInInputTypeArgument,g as RemoveFieldFromInputTypeArgument,y as RemoveInputTypeArgument,c as UpdateDescriptionForFieldOfInputTypeArgument,me as __namedExportsOrder,ue as default};
