import"./AsyncApiOperationViewer-489efbeb.js";import"./DdlTableDiffsViewer-78b6311e.js";import"./DdlTableViewer-4b03edfb.js";import"./GraphQLOperationDiffViewer-aadc8f99.js";import"./GraphQLOperationViewer-a2d41582.js";import"./JsonSchemaNextViewer-cd13c5ca.js";import"./index-71f1bfe0.js";import{G as j,g as t,T as e}from"./compatibility-suite-utils-1f32baf9.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./take-diff-side-background-color-85ec54fb.js";import"./IndexesNodeViewer-05731b79.js";import"./DiffBadge-51a3ec54.js";/* empty css              */import"./GraphPropNodeViewer-49e74551.js";import"./index-c19463f3.js";import"./index-415bee12.js";import"./graph-api-transformers-4646d964.js";import"./buildASTSchema-f14864f0.js";const mt={id:"graphql-compatibility-suite-scalar-output-type-of-root-type",title:"GraphQL Compatibility Suite/scalar-output-type-of-root-type",render:j},r="scalar-output-type-of-root-type",a={name:"add-description-for-enum-value-in-output-type",args:t(e,r,"add-description-for-enum-value-in-output-type")},o={name:"add-enum-value-in-output-type",args:t(e,r,"add-enum-value-in-output-type")},p={name:"add-list-type-for-output-type",args:t(e,r,"add-list-type-for-output-type")},u={name:"change-description-for-enum-value-in-output-type",args:t(e,r,"change-description-for-enum-value-in-output-type")},n={name:"change-output-type",args:t(e,r,"change-output-type")},s={name:"change-output-type-from-enum-to-string",args:t(e,r,"change-output-type-from-enum-to-string")},m={name:"delete-description-for-enum-value-in-output-type",args:t(e,r,"delete-description-for-enum-value-in-output-type")},i={name:"mark-mandatory-output-type-as-optional",args:t(e,r,"mark-mandatory-output-type-as-optional")},c={name:"mark-optional-output-type-as-mandatory",args:t(e,r,"mark-optional-output-type-as-mandatory")},d={name:"remove-enum-value-in-output-type",args:t(e,r,"remove-enum-value-in-output-type")};var y,g,l;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'add-description-for-enum-value-in-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-enum-value-in-output-type')
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var T,S,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'add-enum-value-in-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-in-output-type')
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,P,h;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-list-type-for-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-list-type-for-output-type')
}`,...(h=(P=p.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var A,I,v;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'change-description-for-enum-value-in-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-enum-value-in-output-type')
}`,...(v=(I=u.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var L,f,G;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'change-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-output-type')
}`,...(G=(f=n.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var O,Q,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'change-output-type-from-enum-to-string',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-output-type-from-enum-to-string')
}`,...(C=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:C.source}}};var D,R,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-value-in-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-enum-value-in-output-type')
}`,...(k=(R=m.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var H,U,Y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'mark-mandatory-output-type-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-output-type-as-optional')
}`,...(Y=(U=i.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var F,V,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'mark-optional-output-type-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-output-type-as-mandatory')
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var b,x,q;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'remove-enum-value-in-output-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-in-output-type')
}`,...(q=(x=d.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const it=["AddDescriptionForEnumValueInOutputType","AddEnumValueInOutputType","AddListTypeForOutputType","ChangeDescriptionForEnumValueInOutputType","ChangeOutputType","ChangeOutputTypeFromEnumToString","DeleteDescriptionForEnumValueInOutputType","MarkMandatoryOutputTypeAsOptional","MarkOptionalOutputTypeAsMandatory","RemoveEnumValueInOutputType"];export{a as AddDescriptionForEnumValueInOutputType,o as AddEnumValueInOutputType,p as AddListTypeForOutputType,u as ChangeDescriptionForEnumValueInOutputType,n as ChangeOutputType,s as ChangeOutputTypeFromEnumToString,m as DeleteDescriptionForEnumValueInOutputType,i as MarkMandatoryOutputTypeAsOptional,c as MarkOptionalOutputTypeAsMandatory,d as RemoveEnumValueInOutputType,it as __namedExportsOrder,mt as default};
