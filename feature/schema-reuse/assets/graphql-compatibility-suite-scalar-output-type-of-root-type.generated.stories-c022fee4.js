import"./JsonSchemaViewer-7202df80.js";import"./JsonSchemaDiffViewer-e32a859a.js";import"./GraphQLOperationViewer-4db2a076.js";import"./GraphQLOperationDiffViewer-1b66fff8.js";import"./ErrorBoundaryFallback-cd32de00.js";import{G as j,g as t,T as e}from"./compatibility-suite-utils-5b846fd1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./JsonPropNodeViewer-11dbe19e.js";import"./model-5d2e929a.js";import"./buildASTSchema-9e2cbebe.js";import"./index-415bee12.js";import"./graph-api-transformers-6d8a4b94.js";const at={id:"graphql-compatibility-suite-scalar-output-type-of-root-type",title:"GraphQL Compatibility Suite/scalar-output-type-of-root-type",render:j},r="scalar-output-type-of-root-type",a={name:"add-description-for-enum-value-in-output-type",args:t(e,r,"add-description-for-enum-value-in-output-type")},o={name:"add-enum-value-in-output-type",args:t(e,r,"add-enum-value-in-output-type")},p={name:"add-list-type-for-output-type",args:t(e,r,"add-list-type-for-output-type")},u={name:"change-description-for-enum-value-in-output-type",args:t(e,r,"change-description-for-enum-value-in-output-type")},n={name:"change-output-type",args:t(e,r,"change-output-type")},s={name:"change-output-type-from-enum-to-string",args:t(e,r,"change-output-type-from-enum-to-string")},m={name:"delete-description-for-enum-value-in-output-type",args:t(e,r,"delete-description-for-enum-value-in-output-type")},i={name:"mark-mandatory-output-type-as-optional",args:t(e,r,"mark-mandatory-output-type-as-optional")},c={name:"mark-optional-output-type-as-mandatory",args:t(e,r,"mark-optional-output-type-as-mandatory")},d={name:"remove-enum-value-in-output-type",args:t(e,r,"remove-enum-value-in-output-type")};var y,g,l;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'add-description-for-enum-value-in-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-enum-value-in-output-type')
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var T,S,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'add-enum-value-in-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-in-output-type')
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,P,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-list-type-for-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-list-type-for-output-type')
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var I,v,f;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'change-description-for-enum-value-in-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-enum-value-in-output-type')
}`,...(f=(v=u.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var O,h,C;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'change-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-output-type')
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var D,L,G;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'change-output-type-from-enum-to-string',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-output-type-from-enum-to-string')
}`,...(G=(L=s.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var Q,R,k;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-value-in-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-enum-value-in-output-type')
}`,...(k=(R=m.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var H,U,Y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'mark-mandatory-output-type-as-optional',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-output-type-as-optional')
}`,...(Y=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var F,V,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'mark-optional-output-type-as-mandatory',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-output-type-as-mandatory')
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var b,x,q;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'remove-enum-value-in-output-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-in-output-type')
}`,...(q=(x=d.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const ot=["AddDescriptionForEnumValueInOutputType","AddEnumValueInOutputType","AddListTypeForOutputType","ChangeDescriptionForEnumValueInOutputType","ChangeOutputType","ChangeOutputTypeFromEnumToString","DeleteDescriptionForEnumValueInOutputType","MarkMandatoryOutputTypeAsOptional","MarkOptionalOutputTypeAsMandatory","RemoveEnumValueInOutputType"];export{a as AddDescriptionForEnumValueInOutputType,o as AddEnumValueInOutputType,p as AddListTypeForOutputType,u as ChangeDescriptionForEnumValueInOutputType,n as ChangeOutputType,s as ChangeOutputTypeFromEnumToString,m as DeleteDescriptionForEnumValueInOutputType,i as MarkMandatoryOutputTypeAsOptional,c as MarkOptionalOutputTypeAsMandatory,d as RemoveEnumValueInOutputType,ot as __namedExportsOrder,at as default};
