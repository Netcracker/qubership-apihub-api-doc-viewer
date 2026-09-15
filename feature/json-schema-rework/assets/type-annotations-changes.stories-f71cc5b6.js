import{c as Ye}from"./diffs-samples-cases-1df1f3ae.js";import{j as Ne}from"./_commonjs-dynamic-modules-6308e768.js";import{d as Me}from"./AsyncApiOperationViewer-05d6aae0.js";import{D as Fe,a as xe}from"./DiffBadge-f5ba12be.js";import{g as Je,h as Ie}from"./preprocess-0750a535.js";import{p as Le}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-71f18f3c.js";import"./DdlTableDiffsViewer-c0933c8a.js";/* empty css              */import"./DdlTableViewer-47d4d8fc.js";import"./GraphQLOperationDiffViewer-ec42f7d3.js";import"./GraphPropNodeViewer-452b0f1f.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-c53f5f81.js";import"./public-api-99af098d.js";const Ue=`type: string

`,we=`type: string
title: Label

`,Oe=`type: string
title: Before title
format: date

`,Be=`type: string

`,Ke=`type: string
format: uuid

`,He=`type: string
format: date
title: Before title

`,Ge=`type: string

`,Re=`type: string
format: uuid

`,Pe=`type: string
format: date

`,Ve=`type: string
title: Label

`,ke=`type: string
title: Label
format: uuid

`,qe=`type: string
title: Label
format: date

`,Xe=`type: string
title: Before title

`,$e=`type: string
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

`,dt=`type: string
title: Label
format: date-time

`,mt=`type: string
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

`,ut={diffsMetaKey:Fe,aggregatedDiffsMetaKey:xe},vt=!1,Te={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:"Before sample YAML for reference. The viewer always uses the bundled fixture for the selected case."},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:"After sample YAML for reference. The viewer always uses the bundled fixture for the selected case."},hideUnchangedNodes:{control:{type:"boolean"},table:{category:"Display"},description:"Forwarded to JsonSchemaNextDiffsViewer's hideUnchangedNodes prop."}},bt=5,A=t=>Le(t),St=(t,a)=>({schema:Je({beforeSchema:A(t),afterSchema:A(a),target:Ie,disableSubstitutionTitle:!0}),expandedDepth:bt,diffMetaKeys:ut,hideUnchangedNodes:!1}),Ct=t=>t.reduce((a,s)=>(a[s.caseId]=s,a),{}),jt=(t,a)=>s=>{const C=a[s];if(!C)throw new Error(`Sample case not found: ${s}`);return{name:s,args:{caseId:s,beforeYaml:C.beforeYaml,afterYaml:C.afterYaml,hideUnchangedNodes:vt},argTypes:Te,render:j=>{const E=a[j.caseId];return Ne.jsx(t,{caseId:j.caseId,beforeYaml:E.beforeYaml,afterYaml:E.afterYaml,hideUnchangedNodes:j.hideUnchangedNodes})}}},D=({beforeYaml:t,afterYaml:a,hideUnchangedNodes:s})=>Ne.jsx(Me,{...St(t,a),hideUnchangedNodes:s});D.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory",props:{hideUnchangedNodes:{required:!0,tsType:{name:"boolean"},description:""}}};const Dt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/before.yaml":we,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/before.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/before.yaml":He,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/before.yaml":Ge,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/before.yaml":ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/before.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/before.yaml":ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/before.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/before.yaml":Ze}),Et=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/after.yaml":et,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/after.yaml":ct,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/after.yaml":mt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/after.yaml":it,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/after.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/after.yaml":ft,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/after.yaml":gt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/after.yaml":ht}),At=Ye(Dt,Et),Nt=Ct(At),Pt={title:"JSON Schema Diffs Suite/Type Annotations Changes",component:D,argTypes:Te},e=jt(D,Nt),r=e("001-title-added"),o=e("002-title-removed"),n=e("003-title-replaced"),c=e("004-format-added"),d=e("005-format-removed"),m=e("006-format-replaced"),i=e("007-title-added-format-added"),l=e("008-title-added-format-removed"),_=e("009-title-added-format-replaced"),p=e("010-title-removed-format-added"),f=e("011-title-removed-format-removed"),y=e("012-title-removed-format-replaced"),g=e("013-title-replaced-format-added"),h=e("014-title-replaced-format-removed"),u=e("015-title-replaced-format-replaced"),v=e("016-monolithic-type-title-format-replaced"),b=e("017-type-title-replaced"),S=e("018-type-format-replaced");var N,T,Y;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("001-title-added")',...(Y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:Y.source}}};var M,F,x;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("002-title-removed")',...(x=(F=o.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var J,I,L;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("003-title-replaced")',...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var U,w,O;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("004-format-added")',...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,K,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("005-format-removed")',...(H=(K=d.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var G,R,P;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("006-format-replaced")',...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var V,k,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("007-title-added-format-added")',...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var X,$,z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("008-title-added-format-removed")',...(z=($=l.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var Q,W,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("009-title-added-format-replaced")',...(Z=(W=_.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,te,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("010-title-removed-format-added")',...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("011-title-removed-format-removed")',...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ce,de;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("012-title-removed-format-replaced")',...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ie,le;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("013-title-replaced-format-added")',...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var _e,pe,fe;h.parameters={...h.parameters,docs:{...(_e=h.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("014-title-replaced-format-removed")',...(fe=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ye,ge,he;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("015-title-replaced-format-replaced")',...(he=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,ve,be;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("016-monolithic-type-title-format-replaced")',...(be=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Se,Ce,je;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("017-type-title-replaced")',...(je=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var De,Ee,Ae;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("018-type-format-replaced")',...(Ae=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const Vt=["Case_001_title_added","Case_002_title_removed","Case_003_title_replaced","Case_004_format_added","Case_005_format_removed","Case_006_format_replaced","Case_007_title_added_format_added","Case_008_title_added_format_removed","Case_009_title_added_format_replaced","Case_010_title_removed_format_added","Case_011_title_removed_format_removed","Case_012_title_removed_format_replaced","Case_013_title_replaced_format_added","Case_014_title_replaced_format_removed","Case_015_title_replaced_format_replaced","Case_016_monolithic_type_title_format_replaced","Case_017_type_title_replaced","Case_018_type_format_replaced"];export{r as Case_001_title_added,o as Case_002_title_removed,n as Case_003_title_replaced,c as Case_004_format_added,d as Case_005_format_removed,m as Case_006_format_replaced,i as Case_007_title_added_format_added,l as Case_008_title_added_format_removed,_ as Case_009_title_added_format_replaced,p as Case_010_title_removed_format_added,f as Case_011_title_removed_format_removed,y as Case_012_title_removed_format_replaced,g as Case_013_title_replaced_format_added,h as Case_014_title_replaced_format_removed,u as Case_015_title_replaced_format_replaced,v as Case_016_monolithic_type_title_format_replaced,b as Case_017_type_title_replaced,S as Case_018_type_format_replaced,Vt as __namedExportsOrder,Pt as default};
