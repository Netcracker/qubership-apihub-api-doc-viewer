import"./JsonSchemaViewer-bfe29fef.js";import"./JsonSchemaDiffViewer-0eda2d78.js";import"./GraphQLOperationViewer-f6ac4df9.js";import"./GraphQLOperationDiffViewer-ae70b452.js";import"./ErrorBoundaryFallback-61ecfd83.js";import{G as t,g as e,T as r}from"./compatibility-suite-utils-192165c1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./JsonPropNodeViewer-145c304d.js";import"./model-4af7f990.js";import"./buildASTSchema-72432949.js";import"./index-415bee12.js";import"./graph-api-transformers-1aca29a2.js";const rt={title:"graphql-compatibility-suite/scalar-output-type-of-root-type"},o={name:"add-description-for-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","add-description-for-enum-value-in-output-type")},a={name:"add-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","add-enum-value-in-output-type")},p={name:"add-list-type-for-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","add-list-type-for-output-type")},u={name:"change-description-for-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","change-description-for-enum-value-in-output-type")},n={name:"change-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","change-output-type")},s={name:"change-output-type-from-enum-to-string",render:t,args:e(r,"scalar-output-type-of-root-type","change-output-type-from-enum-to-string")},m={name:"delete-description-for-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","delete-description-for-enum-value-in-output-type")},y={name:"mark-mandatory-output-type-as-optional",render:t,args:e(r,"scalar-output-type-of-root-type","mark-mandatory-output-type-as-optional")},c={name:"mark-optional-output-type-as-mandatory",render:t,args:e(r,"scalar-output-type-of-root-type","mark-optional-output-type-as-mandatory")},i={name:"remove-enum-value-in-output-type",render:t,args:e(r,"scalar-output-type-of-root-type","remove-enum-value-in-output-type")};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'add-description-for-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'add-description-for-enum-value-in-output-type')
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var T,S,E;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'add-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'add-enum-value-in-output-type')
}`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,f,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-list-type-for-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'add-list-type-for-output-type')
}`,...(P=(f=p.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var A,h,C;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'change-description-for-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'change-description-for-enum-value-in-output-type')
}`,...(C=(h=u.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,O,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'change-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'change-output-type')
}`,...(L=(O=n.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var G,Q,R;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'change-output-type-from-enum-to-string',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'change-output-type-from-enum-to-string')
}`,...(R=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var k,H,Y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'delete-description-for-enum-value-in-output-type')
}`,...(Y=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var F,I,V;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'mark-mandatory-output-type-as-optional',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'mark-mandatory-output-type-as-optional')
}`,...(V=(I=y.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var D,M,x;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'mark-optional-output-type-as-mandatory',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'mark-optional-output-type-as-mandatory')
}`,...(x=(M=c.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var b,q,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'remove-enum-value-in-output-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'scalar-output-type-of-root-type', 'remove-enum-value-in-output-type')
}`,...(j=(q=i.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const ot=["AddDescriptionForEnumValueInOutputType","AddEnumValueInOutputType","AddListTypeForOutputType","ChangeDescriptionForEnumValueInOutputType","ChangeOutputType","ChangeOutputTypeFromEnumToString","DeleteDescriptionForEnumValueInOutputType","MarkMandatoryOutputTypeAsOptional","MarkOptionalOutputTypeAsMandatory","RemoveEnumValueInOutputType"];export{o as AddDescriptionForEnumValueInOutputType,a as AddEnumValueInOutputType,p as AddListTypeForOutputType,u as ChangeDescriptionForEnumValueInOutputType,n as ChangeOutputType,s as ChangeOutputTypeFromEnumToString,m as DeleteDescriptionForEnumValueInOutputType,y as MarkMandatoryOutputTypeAsOptional,c as MarkOptionalOutputTypeAsMandatory,i as RemoveEnumValueInOutputType,ot as __namedExportsOrder,rt as default};
