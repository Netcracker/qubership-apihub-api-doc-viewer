import"./JsonSchemaViewer-0417b4e1.js";import"./JsonSchemaDiffViewer-64b95d55.js";import"./GraphQLOperationViewer-4849d329.js";import"./GraphQLOperationDiffViewer-dc05abc9.js";import"./ErrorBoundaryFallback-b1397954.js";import{G as t,g as e,T as r}from"./compatibility-suite-utils-433c8e2b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./JsonPropNodeViewer-731772aa.js";import"./model-a2be2264.js";import"./buildASTSchema-8eaaa3ae.js";import"./index-415bee12.js";import"./graph-api-transformers-8ab55cfe.js";const Z={title:"graphql-compatibility-suite/scalar-output-type-of-root-type"},o={name:"add-description-for-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","add-description-for-enum-value-in-output-type")},a={name:"add-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","add-enum-value-in-output-type")},p={name:"add-list-type-for-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","add-list-type-for-output-type")},u={name:"change-description-for-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","change-description-for-enum-value-in-output-type")},n={name:"change-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","change-output-type")},s={name:"delete-description-for-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","delete-description-for-enum-value-in-output-type")},m={name:"mark-mandatory-output-type-as-optional",render:t,args:e(r,"scalar-output-type-of-root-type","mark-mandatory-output-type-as-optional")},y={name:"mark-optional-output-type-as-mandatory",render:t,args:e(r,"scalar-output-type-of-root-type","mark-optional-output-type-as-mandatory")},d={name:"remove-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","remove-enum-value-in-output-type")};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'add-description-for-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'add-description-for-enum-value-in-output-type')
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,T,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'add-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'add-enum-value-in-output-type')
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var _,E,f;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-list-type-for-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'add-list-type-for-output-type')
}`,...(f=(E=p.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var A,P,v;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'change-description-for-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'change-description-for-enum-value-in-output-type')
}`,...(v=(P=u.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var C,h,O;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'change-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'change-output-type')
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var L,G,Q;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'delete-description-for-enum-value-in-output-type')
}`,...(Q=(G=s.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var k,R,H;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'mark-mandatory-output-type-as-optional',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'mark-mandatory-output-type-as-optional')
}`,...(H=(R=m.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var I,V,Y;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'mark-optional-output-type-as-mandatory',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'mark-optional-output-type-as-mandatory')
}`,...(Y=(V=y.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var D,F,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'remove-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'remove-enum-value-in-output-type')
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const $=["AddDescriptionForEnumValueInOutputType","AddEnumValueInOutputType","AddListTypeForOutputType","ChangeDescriptionForEnumValueInOutputType","ChangeOutputType","DeleteDescriptionForEnumValueInOutputType","MarkMandatoryOutputTypeAsOptional","MarkOptionalOutputTypeAsMandatory","RemoveEnumValueInOutputType"];export{o as AddDescriptionForEnumValueInOutputType,a as AddEnumValueInOutputType,p as AddListTypeForOutputType,u as ChangeDescriptionForEnumValueInOutputType,n as ChangeOutputType,s as DeleteDescriptionForEnumValueInOutputType,m as MarkMandatoryOutputTypeAsOptional,y as MarkOptionalOutputTypeAsMandatory,d as RemoveEnumValueInOutputType,$ as __namedExportsOrder,Z as default};
