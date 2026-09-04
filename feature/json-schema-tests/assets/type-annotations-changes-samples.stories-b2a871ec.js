import{c as Te}from"./diffs-samples-cases-1df1f3ae.js";import{j as Ye}from"./_commonjs-dynamic-modules-6308e768.js";import{c as Fe}from"./AsyncApiOperationViewer-2d7bd233.js";import{S as Je,D as xe,a as Be}from"./DiffBadge-4d4a1c37.js";import{g as Ie,h as Le}from"./preprocess-c9227d17.js";import{p as we}from"./parse-yaml-source-0cc43eab.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./public-api-99af098d.js";const Oe=`type: string

`,Ke=`type: string
title: Label

`,Ne=`type: string
title: Before title
format: date

`,Re=`type: string

`,Ge=`type: string
format: uuid

`,Ve=`type: string
format: date
title: Before title

`,He=`type: string

`,Pe=`type: string
format: uuid

`,ke=`type: string
format: date

`,Ue=`type: string
title: Label

`,Xe=`type: string
title: Label
format: uuid

`,$e=`type: string
title: Label
format: date

`,qe=`type: string
title: Before title

`,ze=`type: string
title: Before title
format: uuid

`,Qe=`type: string
title: Before title
format: date

`,We=`type: string
title: Calendar
format: date-time

`,Ze=`type: string
title: Calendar
format: date-time

`,et=`type: string
title: Calendar
format: date-time

`,tt=`type: string
title: Label

`,at=`type: string

`,st=`type: string
title: After title
format: date

`,rt=`type: string
format: uuid

`,ot=`type: string

`,nt=`type: string
format: date-time
title: Before title

`,ct=`type: string
title: Label
format: uuid

`,mt=`type: string
title: Label

`,dt=`type: string
title: Label
format: date-time

`,it=`type: string
format: uuid

`,lt=`type: string

`,_t=`type: string
format: date-time

`,pt=`type: string
title: After title
format: uuid

`,ft=`type: string
title: After title

`,yt=`type: string
title: After title
format: date-time

`,gt=`type: number
title: Money
format: <CurrencyMarker> N.MK

`,ht=`type: number
title: Money
format: date-time

`,ut=`type: number
title: Calendar
format: <CurrencyMarker> N.MK

`,vt={diffsMetaKey:xe,aggregatedDiffsMetaKey:Be},Me={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:"Before sample YAML for reference. The viewer always uses the bundled fixture for the selected case."},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:"After sample YAML for reference. The viewer always uses the bundled fixture for the selected case."}},St=5,A=t=>we(t),bt=t=>({schema:t,expandedDepth:St,layoutMode:Je,metaKeys:vt}),Ct=(t,a)=>bt(Ie({beforeSchema:t,afterSchema:a,target:Le,disableSubstitutionTitle:!0})),jt=(t,a)=>Ct(A(t),A(a)),Dt=t=>t.reduce((a,s)=>(a[s.caseId]=s,a),{}),Et=(t,a)=>s=>{const C=a[s];if(!C)throw new Error(`Sample case not found: ${s}`);return{name:s,args:{caseId:s,beforeYaml:C.beforeYaml,afterYaml:C.afterYaml},argTypes:Me,render:D=>{const E=a[D.caseId];return Ye.jsx(t,{caseId:D.caseId,beforeYaml:E.beforeYaml,afterYaml:E.afterYaml})}}},j=({beforeYaml:t,afterYaml:a})=>Ye.jsx(Fe,{...jt(t,a)});j.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory"};const At=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/before.yaml":Ne,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/before.yaml":Ge,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/before.yaml":He,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/before.yaml":ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/before.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/before.yaml":ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/before.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/before.yaml":et}),Yt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/after.yaml":ct,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/after.yaml":mt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/after.yaml":it,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/after.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/after.yaml":ft,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/after.yaml":gt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/after.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/after.yaml":ut}),Mt=Te(At,Yt),Tt=Dt(Mt),Ut={title:"JSON Schema Diffs Suite/Type Annotations Changes Samples",component:j,argTypes:Me},e=Et(j,Tt),r=e("001-title-added"),o=e("002-title-removed"),n=e("003-title-replaced"),c=e("004-format-added"),m=e("005-format-removed"),d=e("006-format-replaced"),i=e("007-title-added-format-added"),l=e("008-title-added-format-removed"),_=e("009-title-added-format-replaced"),p=e("010-title-removed-format-added"),f=e("011-title-removed-format-removed"),y=e("012-title-removed-format-replaced"),g=e("013-title-replaced-format-added"),h=e("014-title-replaced-format-removed"),u=e("015-title-replaced-format-replaced"),v=e("016-monolithic-type-title-format-replaced"),S=e("017-type-title-replaced"),b=e("018-type-format-replaced");var Y,M,T;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("001-title-added")',...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var F,J,x;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("002-title-removed")',...(x=(J=o.parameters)==null?void 0:J.docs)==null?void 0:x.source}}};var B,I,L;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("003-title-replaced")',...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var w,O,K;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("004-format-added")',...(K=(O=c.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var N,R,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("005-format-removed")',...(G=(R=m.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var V,H,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("006-format-replaced")',...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var k,U,X;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("007-title-added-format-added")',...(X=(U=i.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,q,z;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:'createCaseStory("008-title-added-format-removed")',...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var Q,W,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("009-title-added-format-replaced")',...(Z=(W=_.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,te,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("010-title-removed-format-added")',...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("011-title-removed-format-removed")',...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ce,me;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("012-title-removed-format-replaced")',...(me=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,ie,le;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("013-title-replaced-format-added")',...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var _e,pe,fe;h.parameters={...h.parameters,docs:{...(_e=h.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("014-title-replaced-format-removed")',...(fe=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ye,ge,he;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("015-title-replaced-format-replaced")',...(he=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,ve,Se;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("016-monolithic-type-title-format-replaced")',...(Se=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var be,Ce,je;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("017-type-title-replaced")',...(je=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var De,Ee,Ae;b.parameters={...b.parameters,docs:{...(De=b.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("018-type-format-replaced")',...(Ae=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const Xt=["Case_001_title_added","Case_002_title_removed","Case_003_title_replaced","Case_004_format_added","Case_005_format_removed","Case_006_format_replaced","Case_007_title_added_format_added","Case_008_title_added_format_removed","Case_009_title_added_format_replaced","Case_010_title_removed_format_added","Case_011_title_removed_format_removed","Case_012_title_removed_format_replaced","Case_013_title_replaced_format_added","Case_014_title_replaced_format_removed","Case_015_title_replaced_format_replaced","Case_016_monolithic_type_title_format_replaced","Case_017_type_title_replaced","Case_018_type_format_replaced"];export{r as Case_001_title_added,o as Case_002_title_removed,n as Case_003_title_replaced,c as Case_004_format_added,m as Case_005_format_removed,d as Case_006_format_replaced,i as Case_007_title_added_format_added,l as Case_008_title_added_format_removed,_ as Case_009_title_added_format_replaced,p as Case_010_title_removed_format_added,f as Case_011_title_removed_format_removed,y as Case_012_title_removed_format_replaced,g as Case_013_title_replaced_format_added,h as Case_014_title_replaced_format_removed,u as Case_015_title_replaced_format_replaced,v as Case_016_monolithic_type_title_format_replaced,S as Case_017_type_title_replaced,b as Case_018_type_format_replaced,Xt as __namedExportsOrder,Ut as default};
