import"./AsyncApiOperationViewer-5374a7aa.js";import"./GraphQLOperationViewer-3d9e1054.js";import"./GraphQLOperationDiffViewer-781ce75b.js";import"./GraphPropNodeViewer-28195d99.js";import{G as ze,a as e,b as r}from"./compatibility-suite-utils-01d69233.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./js-yaml-38530ef5.js";import"./graph-api-transformers-14a7db95.js";import"./buildASTSchema-f14864f0.js";const nr={id:"graphql-compatibility-suite-scalar-type-argument-of-root-type",title:"GraphQL Compatibility Suite/scalar-type-argument-of-root-type",render:ze},a="scalar-type-argument-of-root-type",n={name:"add-default-value-of-argument",args:e(r,a,"add-default-value-of-argument")},t={name:"add-default-value-of-required-argument",args:e(r,a,"add-default-value-of-required-argument")},o={name:"add-description-for-argument",args:e(r,a,"add-description-for-argument")},s={name:"add-description-for-enum-type",args:e(r,a,"add-description-for-enum-type")},m={name:"add-description-for-enum-value",args:e(r,a,"add-description-for-enum-value")},u={name:"add-enum-value-in-enum-argument",args:e(r,a,"add-enum-value-in-enum-argument")},d={name:"add-optional-argument",args:e(r,a,"add-optional-argument")},g={name:"add-second-argument",args:e(r,a,"add-second-argument")},c={name:"change-default-value-of-argument",args:e(r,a,"change-default-value-of-argument")},p={name:"change-default-value-of-required-argument",args:e(r,a,"change-default-value-of-required-argument")},i={name:"change-description-for-enum-type",args:e(r,a,"change-description-for-enum-type")},l={name:"change-description-for-enum-value",args:e(r,a,"change-description-for-enum-value")},S={name:"change-type-of-argument",args:e(r,a,"change-type-of-argument")},_={name:"delete-description-for-enum-type",args:e(r,a,"delete-description-for-enum-type")},f={name:"delete-description-for-enum-value",args:e(r,a,"delete-description-for-enum-value")},E={name:"delete-description-of-argument",args:e(r,a,"delete-description-of-argument")},T={name:"mark-mandatory-argument-as-optional",args:e(r,a,"mark-mandatory-argument-as-optional")},A={name:"mark-optional-argument-as-mandatory",args:e(r,a,"mark-optional-argument-as-mandatory")},P={name:"remove-argument",args:e(r,a,"remove-argument")},v={name:"remove-default-value-of-argument",args:e(r,a,"remove-default-value-of-argument")},y={name:"remove-default-value-of-required-argument",args:e(r,a,"remove-default-value-of-required-argument")},D={name:"remove-enum-value-in-enum-argument",args:e(r,a,"remove-enum-value-in-enum-argument")},I={name:"remove-one-argument",args:e(r,a,"remove-one-argument")},R={name:"update-description-of-argument",args:e(r,a,"update-description-of-argument")};var C,h,G;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'add-default-value-of-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-default-value-of-argument')
}`,...(G=(h=n.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var L,O,Q;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'add-default-value-of-required-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-default-value-of-required-argument')
}`,...(Q=(O=t.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,H,Y;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'add-description-for-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-argument')
}`,...(Y=(H=o.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var V,q,F;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'add-description-for-enum-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-enum-type')
}`,...(F=(q=s.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var k,M,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'add-description-for-enum-value',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-enum-value')
}`,...(b=(M=m.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var x,j,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'add-enum-value-in-enum-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-in-enum-argument')
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var z,B,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'add-optional-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-optional-argument')
}`,...(J=(B=d.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,N,W;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'add-second-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-second-argument')
}`,...(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var X,Z,$;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'change-default-value-of-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-default-value-of-argument')
}`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'change-default-value-of-required-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-default-value-of-required-argument')
}`,...(ae=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,oe;i.parameters={...i.parameters,docs:{...(ne=i.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'change-description-for-enum-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-enum-type')
}`,...(oe=(te=i.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,me,ue;l.parameters={...l.parameters,docs:{...(se=l.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'change-description-for-enum-value',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-enum-value')
}`,...(ue=(me=l.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,ge,ce;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'change-type-of-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-type-of-argument')
}`,...(ce=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ce.source}}};var pe,ie,le;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-type',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-enum-type')
}`,...(le=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var Se,_e,fe;f.parameters={...f.parameters,docs:{...(Se=f.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-value',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-enum-value')
}`,...(fe=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var Ee,Te,Ae;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'delete-description-of-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-of-argument')
}`,...(Ae=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Pe,ve,ye;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'mark-mandatory-argument-as-optional',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-argument-as-optional')
}`,...(ye=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var De,Ie,Re;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'mark-optional-argument-as-mandatory',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-argument-as-mandatory')
}`,...(Re=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var Ce,he,Ge;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'remove-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-argument')
}`,...(Ge=(he=P.parameters)==null?void 0:he.docs)==null?void 0:Ge.source}}};var Le,Oe,Qe;v.parameters={...v.parameters,docs:{...(Le=v.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'remove-default-value-of-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-default-value-of-argument')
}`,...(Qe=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:Qe.source}}};var Ue,He,Ye;y.parameters={...y.parameters,docs:{...(Ue=y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'remove-default-value-of-required-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-default-value-of-required-argument')
}`,...(Ye=(He=y.parameters)==null?void 0:He.docs)==null?void 0:Ye.source}}};var Ve,qe,Fe;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'remove-enum-value-in-enum-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-in-enum-argument')
}`,...(Fe=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var ke,Me,be;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'remove-one-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-one-argument')
}`,...(be=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:be.source}}};var xe,je,we;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'update-description-of-argument',
  args: getStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-of-argument')
}`,...(we=(je=R.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};const tr=["AddDefaultValueOfArgument","AddDefaultValueOfRequiredArgument","AddDescriptionForArgument","AddDescriptionForEnumType","AddDescriptionForEnumValue","AddEnumValueInEnumArgument","AddOptionalArgument","AddSecondArgument","ChangeDefaultValueOfArgument","ChangeDefaultValueOfRequiredArgument","ChangeDescriptionForEnumType","ChangeDescriptionForEnumValue","ChangeTypeOfArgument","DeleteDescriptionForEnumType","DeleteDescriptionForEnumValue","DeleteDescriptionOfArgument","MarkMandatoryArgumentAsOptional","MarkOptionalArgumentAsMandatory","RemoveArgument","RemoveDefaultValueOfArgument","RemoveDefaultValueOfRequiredArgument","RemoveEnumValueInEnumArgument","RemoveOneArgument","UpdateDescriptionOfArgument"];export{n as AddDefaultValueOfArgument,t as AddDefaultValueOfRequiredArgument,o as AddDescriptionForArgument,s as AddDescriptionForEnumType,m as AddDescriptionForEnumValue,u as AddEnumValueInEnumArgument,d as AddOptionalArgument,g as AddSecondArgument,c as ChangeDefaultValueOfArgument,p as ChangeDefaultValueOfRequiredArgument,i as ChangeDescriptionForEnumType,l as ChangeDescriptionForEnumValue,S as ChangeTypeOfArgument,_ as DeleteDescriptionForEnumType,f as DeleteDescriptionForEnumValue,E as DeleteDescriptionOfArgument,T as MarkMandatoryArgumentAsOptional,A as MarkOptionalArgumentAsMandatory,P as RemoveArgument,v as RemoveDefaultValueOfArgument,y as RemoveDefaultValueOfRequiredArgument,D as RemoveEnumValueInEnumArgument,I as RemoveOneArgument,R as UpdateDescriptionOfArgument,tr as __namedExportsOrder,nr as default};
