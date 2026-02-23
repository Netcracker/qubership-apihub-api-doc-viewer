import"./AsyncApiOperationViewer-8635578c.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";import"./GraphPropNodeViewer-6e707ea9.js";import{G as ne,a as e,b as t}from"./compatibility-suite-utils-f8080a96.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./js-yaml-71a24e1f.js";import"./graph-api-transformers-6e38e61b.js";import"./buildASTSchema-f14864f0.js";const _e={id:"graphql-compatibility-suite-interface-output-type-of-root-type",title:"GraphQL Compatibility Suite/interface-output-type-of-root-type",render:ne},r="interface-output-type-of-root-type",a={name:"add-description-for-field-of-output-interface",args:e(t,r,"add-description-for-field-of-output-interface")},o={name:"add-description-for-output-interface",args:e(t,r,"add-description-for-output-interface")},n={name:"add-enum-value-of-field-in-output-interface",args:e(t,r,"add-enum-value-of-field-in-output-interface")},i={name:"add-new-field-in-output-interface",args:e(t,r,"add-new-field-in-output-interface")},u={name:"change-field-type-of-output-interface",args:e(t,r,"change-field-type-of-output-interface")},p={name:"change-field-type-of-output-interface-from-enum-to-string",args:e(t,r,"change-field-type-of-output-interface-from-enum-to-string")},s={name:"delete-description-for-field-of-output-interface",args:e(t,r,"delete-description-for-field-of-output-interface")},c={name:"delete-description-of-output-interface",args:e(t,r,"delete-description-of-output-interface")},f={name:"mark-mandatory-field-of-output-interface-as-optional",args:e(t,r,"mark-mandatory-field-of-output-interface-as-optional")},d={name:"mark-optional-field-of-output-interface-as-mandatory",args:e(t,r,"mark-optional-field-of-output-interface-as-mandatory")},m={name:"remove-enum-value-of-field-in-output-interface",args:e(t,r,"remove-enum-value-of-field-in-output-interface")},l={name:"remove-field-from-output-interface",args:e(t,r,"remove-field-from-output-interface")},g={name:"update-description-for-field-of-output-interface",args:e(t,r,"update-description-for-field-of-output-interface")},S={name:"update-description-of-output-interface",args:e(t,r,"update-description-of-output-interface")};var _,E,T;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-output-interface')
}`,...(T=(E=a.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var I,O,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'add-description-for-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-output-interface')
}`,...(y=(O=o.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var P,A,F;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-output-interface')
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,L,Q;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'add-new-field-in-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-output-interface')
}`,...(Q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var D,h,C;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-interface')
}`,...(C=(h=u.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,R,U;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-interface-from-enum-to-string',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-interface-from-enum-to-string')
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var H,Y,k;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-output-interface')
}`,...(k=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var M,w,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'delete-description-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-of-output-interface')
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var b,x,N;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-output-interface-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-output-interface-as-optional')
}`,...(N=(x=f.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var q,j,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-output-interface-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-output-interface-as-mandatory')
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,J,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-output-interface')
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,X,Z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'remove-field-from-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-output-interface')
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-output-interface')
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'update-description-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-of-output-interface')
}`,...(oe=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Ee=["AddDescriptionForFieldOfOutputInterface","AddDescriptionForOutputInterface","AddEnumValueOfFieldInOutputInterface","AddNewFieldInOutputInterface","ChangeFieldTypeOfOutputInterface","ChangeFieldTypeOfOutputInterfaceFromEnumToString","DeleteDescriptionForFieldOfOutputInterface","DeleteDescriptionOfOutputInterface","MarkMandatoryFieldOfOutputInterfaceAsOptional","MarkOptionalFieldOfOutputInterfaceAsMandatory","RemoveEnumValueOfFieldInOutputInterface","RemoveFieldFromOutputInterface","UpdateDescriptionForFieldOfOutputInterface","UpdateDescriptionOfOutputInterface"];export{a as AddDescriptionForFieldOfOutputInterface,o as AddDescriptionForOutputInterface,n as AddEnumValueOfFieldInOutputInterface,i as AddNewFieldInOutputInterface,u as ChangeFieldTypeOfOutputInterface,p as ChangeFieldTypeOfOutputInterfaceFromEnumToString,s as DeleteDescriptionForFieldOfOutputInterface,c as DeleteDescriptionOfOutputInterface,f as MarkMandatoryFieldOfOutputInterfaceAsOptional,d as MarkOptionalFieldOfOutputInterfaceAsMandatory,m as RemoveEnumValueOfFieldInOutputInterface,l as RemoveFieldFromOutputInterface,g as UpdateDescriptionForFieldOfOutputInterface,S as UpdateDescriptionOfOutputInterface,Ee as __namedExportsOrder,_e as default};
