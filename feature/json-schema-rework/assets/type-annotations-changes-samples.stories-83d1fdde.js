import{c as Te}from"./diffs-samples-cases-1df1f3ae.js";import{j as Ye}from"./_commonjs-dynamic-modules-6308e768.js";import{d as xe}from"./AsyncApiOperationViewer-dc37219f.js";import{D as Fe,a as Ne}from"./DiffBadge-ceca5443.js";import{g as Je,h as Le}from"./preprocess-d9011258.js";import{p as Be}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-94209342.js";import"./DdlTableDiffsViewer-53cd81ea.js";/* empty css              */import"./DdlTableViewer-667c6095.js";import"./GraphQLOperationDiffViewer-5cbdc4b9.js";import"./GraphPropNodeViewer-587f63f5.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f77a6d51.js";import"./public-api-99af098d.js";const we=`type: string

`,Ie=`type: string
title: Label

`,Ke=`type: string
title: Before title
format: date

`,Oe=`type: string

`,Re=`type: string
format: uuid

`,Ge=`type: string
format: date
title: Before title

`,He=`type: string

`,Pe=`type: string
format: uuid

`,ke=`type: string
format: date

`,Ue=`type: string
title: Label

`,Ve=`type: string
title: Label
format: uuid

`,Xe=`type: string
title: Label
format: date

`,$e=`type: string
title: Before title

`,qe=`type: string
title: Before title
format: uuid

`,ze=`type: string
title: Before title
format: date

`,Qe=`type: string
title: Calendar
format: date-time

`,We=`type: string
title: Calendar
format: date-time

`,Ze=`type: string
title: Calendar
format: date-time

`,et=`type: string
title: Label

`,tt=`type: string

`,at=`type: string
title: After title
format: date

`,st=`type: string
format: uuid

`,rt=`type: string

`,ot=`type: string
format: date-time
title: Before title

`,nt=`type: string
title: Label
format: uuid

`,ct=`type: string
title: Label

`,mt=`type: string
title: Label
format: date-time

`,dt=`type: string
format: uuid

`,it=`type: string

`,lt=`type: string
format: date-time

`,_t=`type: string
title: After title
format: uuid

`,pt=`type: string
title: After title

`,ft=`type: string
title: After title
format: date-time

`,yt=`type: number
title: Money
format: <CurrencyMarker> N.MK

`,gt=`type: number
title: Money
format: date-time

`,ht=`type: number
title: Calendar
format: <CurrencyMarker> N.MK

`,ut={diffsMetaKey:Fe,aggregatedDiffsMetaKey:Ne},Me={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:"Before sample YAML for reference. The viewer always uses the bundled fixture for the selected case."},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:"After sample YAML for reference. The viewer always uses the bundled fixture for the selected case."}},vt=5,A=t=>Be(t),bt=(t,a)=>({schema:Je({beforeSchema:A(t),afterSchema:A(a),target:Le,disableSubstitutionTitle:!0}),expandedDepth:vt,diffMetaKeys:ut,hideUnchangedNodes:!1}),St=t=>t.reduce((a,s)=>(a[s.caseId]=s,a),{}),Ct=(t,a)=>s=>{const C=a[s];if(!C)throw new Error(`Sample case not found: ${s}`);return{name:s,args:{caseId:s,beforeYaml:C.beforeYaml,afterYaml:C.afterYaml},argTypes:Me,render:D=>{const E=a[D.caseId];return Ye.jsx(t,{caseId:D.caseId,beforeYaml:E.beforeYaml,afterYaml:E.afterYaml})}}},j=({beforeYaml:t,afterYaml:a})=>Ye.jsx(xe,{...bt(t,a)});j.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory"};const jt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/before.yaml":we,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/before.yaml":Ie,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/before.yaml":Ge,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/before.yaml":He,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/before.yaml":ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/before.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/before.yaml":ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/before.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/before.yaml":Ze}),Dt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/after.yaml":et,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/after.yaml":ct,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/after.yaml":mt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/after.yaml":it,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/after.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/after.yaml":ft,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/after.yaml":gt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/after.yaml":ht}),Et=Te(jt,Dt),At=St(Et),Pt={title:"JSON Schema Diffs Suite/Type Annotations Changes Samples",component:j,argTypes:Me},e=Ct(j,At),r=e("001-title-added"),o=e("002-title-removed"),n=e("003-title-replaced"),c=e("004-format-added"),m=e("005-format-removed"),d=e("006-format-replaced"),i=e("007-title-added-format-added"),l=e("008-title-added-format-removed"),_=e("009-title-added-format-replaced"),p=e("010-title-removed-format-added"),f=e("011-title-removed-format-removed"),y=e("012-title-removed-format-replaced"),g=e("013-title-replaced-format-added"),h=e("014-title-replaced-format-removed"),u=e("015-title-replaced-format-replaced"),v=e("016-monolithic-type-title-format-replaced"),b=e("017-type-title-replaced"),S=e("018-type-format-replaced");var Y,M,T;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("001-title-added")',...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var x,F,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("002-title-removed")',...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var J,L,B;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("003-title-replaced")',...(B=(L=n.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var w,I,K;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("004-format-added")',...(K=(I=c.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var O,R,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("005-format-removed")',...(G=(R=m.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,P,k;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("006-format-replaced")',...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var U,V,X;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("007-title-added-format-added")',...(X=(V=i.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var $,q,z;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:'createCaseStory("008-title-added-format-removed")',...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var Q,W,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("009-title-added-format-replaced")',...(Z=(W=_.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,te,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("010-title-removed-format-added")',...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("011-title-removed-format-removed")',...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ce,me;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("012-title-removed-format-replaced")',...(me=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,ie,le;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("013-title-replaced-format-added")',...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var _e,pe,fe;h.parameters={...h.parameters,docs:{...(_e=h.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("014-title-replaced-format-removed")',...(fe=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ye,ge,he;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("015-title-replaced-format-replaced")',...(he=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,ve,be;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("016-monolithic-type-title-format-replaced")',...(be=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Se,Ce,je;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("017-type-title-replaced")',...(je=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var De,Ee,Ae;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("018-type-format-replaced")',...(Ae=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const kt=["Case_001_title_added","Case_002_title_removed","Case_003_title_replaced","Case_004_format_added","Case_005_format_removed","Case_006_format_replaced","Case_007_title_added_format_added","Case_008_title_added_format_removed","Case_009_title_added_format_replaced","Case_010_title_removed_format_added","Case_011_title_removed_format_removed","Case_012_title_removed_format_replaced","Case_013_title_replaced_format_added","Case_014_title_replaced_format_removed","Case_015_title_replaced_format_replaced","Case_016_monolithic_type_title_format_replaced","Case_017_type_title_replaced","Case_018_type_format_replaced"];export{r as Case_001_title_added,o as Case_002_title_removed,n as Case_003_title_replaced,c as Case_004_format_added,m as Case_005_format_removed,d as Case_006_format_replaced,i as Case_007_title_added_format_added,l as Case_008_title_added_format_removed,_ as Case_009_title_added_format_replaced,p as Case_010_title_removed_format_added,f as Case_011_title_removed_format_removed,y as Case_012_title_removed_format_replaced,g as Case_013_title_replaced_format_added,h as Case_014_title_replaced_format_removed,u as Case_015_title_replaced_format_replaced,v as Case_016_monolithic_type_title_format_replaced,b as Case_017_type_title_replaced,S as Case_018_type_format_replaced,kt as __namedExportsOrder,Pt as default};
