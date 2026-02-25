import"./AsyncApiOperationViewer-8635578c.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";import"./GraphPropNodeViewer-6e707ea9.js";import{G as ae,a as e,b as t}from"./compatibility-suite-utils-f8080a96.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./js-yaml-71a24e1f.js";import"./graph-api-transformers-6e38e61b.js";import"./buildASTSchema-f14864f0.js";const ge={id:"graphql-compatibility-suite-object-output-type-of-root-type",title:"GraphQL Compatibility Suite/object-output-type-of-root-type",render:ae},o="object-output-type-of-root-type",r={name:"add-description-for-field-of-output-object-type",args:e(t,o,"add-description-for-field-of-output-object-type")},p={name:"add-description-for-output-object-type",args:e(t,o,"add-description-for-output-object-type")},a={name:"add-enum-value-of-field-in-output-object-type",args:e(t,o,"add-enum-value-of-field-in-output-object-type")},u={name:"add-new-field-in-output-object-type",args:e(t,o,"add-new-field-in-output-object-type")},s={name:"change-field-type-of-output-object-type",args:e(t,o,"change-field-type-of-output-object-type")},c={name:"change-field-type-of-output-object-type-from-enum-to-string",args:e(t,o,"change-field-type-of-output-object-type-from-enum-to-string")},n={name:"delete-description-for-field-of-output-object-type",args:e(t,o,"delete-description-for-field-of-output-object-type")},d={name:"delete-description-of-output-object-type",args:e(t,o,"delete-description-of-output-object-type")},i={name:"mark-mandatory-field-of-output-object-type-as-optional",args:e(t,o,"mark-mandatory-field-of-output-object-type-as-optional")},m={name:"mark-optional-field-of-output-object-type-as-mandatory",args:e(t,o,"mark-optional-field-of-output-object-type-as-mandatory")},f={name:"remove-enum-value-of-field-in-output-object-type",args:e(t,o,"remove-enum-value-of-field-in-output-object-type")},y={name:"remove-field-from-output-object-type",args:e(t,o,"remove-field-from-output-object-type")},l={name:"update-description-for-field-of-output-object-type",args:e(t,o,"update-description-for-field-of-output-object-type")},T={name:"update-description-of-output-object-type",args:e(t,o,"update-description-of-output-object-type")};var g,b,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-output-object-type')
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var O,S,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'add-description-for-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-output-object-type')
}`,...(_=(S=p.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var E,P,A;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-output-object-type')
}`,...(A=(P=a.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var I,F,G;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'add-new-field-in-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-output-object-type')
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var L,Q,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-object-type')
}`,...(D=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:D.source}}};var h,C,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-object-type-from-enum-to-string',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-object-type-from-enum-to-string')
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var R,U,H;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-output-object-type')
}`,...(H=(U=n.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var Y,k,M;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'delete-description-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-of-output-object-type')
}`,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var w,V,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-output-object-type-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-output-object-type-as-optional')
}`,...(x=(V=i.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var N,q,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-output-object-type-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-output-object-type-as-mandatory')
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,J,K;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-output-object-type')
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,X,Z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'remove-field-from-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-output-object-type')
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-output-object-type')
}`,...(te=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,pe;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'update-description-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-of-output-object-type')
}`,...(pe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:pe.source}}};const be=["AddDescriptionForFieldOfOutputObjectType","AddDescriptionForOutputObjectType","AddEnumValueOfFieldInOutputObjectType","AddNewFieldInOutputObjectType","ChangeFieldTypeOfOutputObjectType","ChangeFieldTypeOfOutputObjectTypeFromEnumToString","DeleteDescriptionForFieldOfOutputObjectType","DeleteDescriptionOfOutputObjectType","MarkMandatoryFieldOfOutputObjectTypeAsOptional","MarkOptionalFieldOfOutputObjectTypeAsMandatory","RemoveEnumValueOfFieldInOutputObjectType","RemoveFieldFromOutputObjectType","UpdateDescriptionForFieldOfOutputObjectType","UpdateDescriptionOfOutputObjectType"];export{r as AddDescriptionForFieldOfOutputObjectType,p as AddDescriptionForOutputObjectType,a as AddEnumValueOfFieldInOutputObjectType,u as AddNewFieldInOutputObjectType,s as ChangeFieldTypeOfOutputObjectType,c as ChangeFieldTypeOfOutputObjectTypeFromEnumToString,n as DeleteDescriptionForFieldOfOutputObjectType,d as DeleteDescriptionOfOutputObjectType,i as MarkMandatoryFieldOfOutputObjectTypeAsOptional,m as MarkOptionalFieldOfOutputObjectTypeAsMandatory,f as RemoveEnumValueOfFieldInOutputObjectType,y as RemoveFieldFromOutputObjectType,l as UpdateDescriptionForFieldOfOutputObjectType,T as UpdateDescriptionOfOutputObjectType,be as __namedExportsOrder,ge as default};
