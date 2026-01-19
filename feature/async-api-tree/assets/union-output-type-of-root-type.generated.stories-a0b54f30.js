import"./JsoViewer-d2fcee47.js";import"./GraphQLOperationViewer-b281b4c2.js";import"./GraphQLOperationDiffViewer-93550e44.js";import"./GraphPropNodeViewer-a9878786.js";import{G as e,g as o,T as t}from"./compatibility-suite-utils-0ad62701.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./graph-api-transformers-8b5936b8.js";import"./buildASTSchema-f14864f0.js";const ne={title:"graphql-compatibility-suite/union-output-type-of-root-type"},n={name:"add-field-description-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","add-field-description-in-object-type-from-union-type")},r={name:"add-new-field-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","add-new-field-in-object-type-from-union-type")},p={name:"add-object-type-in-union-type",render:e,args:o(t,"union-output-type-of-root-type","add-object-type-in-union-type")},i={name:"change-field-type-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","change-field-type-in-object-type-from-union-type")},a={name:"change-object-type-in-union-type",render:e,args:o(t,"union-output-type-of-root-type","change-object-type-in-union-type")},y={name:"delete-field-description-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","delete-field-description-in-object-type-from-union-type")},s={name:"mark-mandatory-field-as-optional-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","mark-mandatory-field-as-optional-in-object-type-from-union-type")},d={name:"mark-optional-field-as-mandatory-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","mark-optional-field-as-mandatory-in-object-type-from-union-type")},m={name:"remove-field-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","remove-field-in-object-type-from-union-type")},c={name:"remove-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","remove-object-type-from-union-type")},u={name:"update-field-description-in-object-type-from-union-type",render:e,args:o(t,"union-output-type-of-root-type","update-field-description-in-object-type-from-union-type")};var f,T,l;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'add-field-description-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'add-field-description-in-object-type-from-union-type')
}`,...(l=(T=n.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};var g,b,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'add-new-field-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'add-new-field-in-object-type-from-union-type')
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,_,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'add-object-type-in-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'add-object-type-in-union-type')
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var P,A,F;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'change-field-type-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'change-field-type-in-object-type-from-union-type')
}`,...(F=(A=i.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var C,O,h;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'change-object-type-in-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'change-object-type-in-union-type')
}`,...(h=(O=a.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var G,L,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'delete-field-description-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'delete-field-description-in-object-type-from-union-type')
}`,...(Q=(L=y.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,I,R;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-as-optional-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'mark-mandatory-field-as-optional-in-object-type-from-union-type')
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var k,v,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'mark-optional-field-as-mandatory-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'mark-optional-field-as-mandatory-in-object-type-from-union-type')
}`,...(H=(v=d.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var Y,D,M;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'remove-field-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'remove-field-in-object-type-from-union-type')
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var w,x,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'remove-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'remove-object-type-from-union-type')
}`,...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var q,z,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'update-field-description-in-object-type-from-union-type',
  render: GraphQLStoryComponent,
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, 'union-output-type-of-root-type', 'update-field-description-in-object-type-from-union-type')
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const re=["AddFieldDescriptionInObjectTypeFromUnionType","AddNewFieldInObjectTypeFromUnionType","AddObjectTypeInUnionType","ChangeFieldTypeInObjectTypeFromUnionType","ChangeObjectTypeInUnionType","DeleteFieldDescriptionInObjectTypeFromUnionType","MarkMandatoryFieldAsOptionalInObjectTypeFromUnionType","MarkOptionalFieldAsMandatoryInObjectTypeFromUnionType","RemoveFieldInObjectTypeFromUnionType","RemoveObjectTypeFromUnionType","UpdateFieldDescriptionInObjectTypeFromUnionType"];export{n as AddFieldDescriptionInObjectTypeFromUnionType,r as AddNewFieldInObjectTypeFromUnionType,p as AddObjectTypeInUnionType,i as ChangeFieldTypeInObjectTypeFromUnionType,a as ChangeObjectTypeInUnionType,y as DeleteFieldDescriptionInObjectTypeFromUnionType,s as MarkMandatoryFieldAsOptionalInObjectTypeFromUnionType,d as MarkOptionalFieldAsMandatoryInObjectTypeFromUnionType,m as RemoveFieldInObjectTypeFromUnionType,c as RemoveObjectTypeFromUnionType,u as UpdateFieldDescriptionInObjectTypeFromUnionType,re as __namedExportsOrder,ne as default};
