import{c as Ye}from"./diffs-samples-cases-1df1f3ae.js";import{j as Ae}from"./_commonjs-dynamic-modules-6308e768.js";import{d as Fe}from"./AsyncApiOperationViewer-7e4d71d7.js";import{D as Me,a as xe}from"./DiffBadge-2b171eda.js";import{g as Je,h as we}from"./preprocess-04b84fe8.js";import{p as Ie}from"./parse-yaml-source-3e95a000.js";import{s as Le}from"./combiner-changed-variant-43f703e4.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-0c1fa703.js";import"./DdlTableDiffsViewer-62d1ded1.js";/* empty css              */import"./DdlTableViewer-975eea68.js";import"./GraphQLOperationDiffViewer-346f0994.js";import"./GraphPropNodeViewer-40e9d38d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e7bff01f.js";import"./public-api-99af098d.js";const Ue=`type: string

`,Oe=`type: string
title: Label

`,Be=`type: string
title: Before title
format: date

`,Ke=`type: string

`,He=`type: string
format: uuid

`,Ge=`type: string
format: date
title: Before title

`,Re=`type: string

`,Ve=`type: string
format: uuid

`,Pe=`type: string
format: date

`,ke=`type: string
title: Label

`,qe=`type: string
title: Label
format: uuid

`,We=`type: string
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

`,dt=`type: string
title: Label

`,mt=`type: string
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

`,vt={diffsMetaKey:Me,aggregatedDiffsMetaKey:xe},bt=!1,Te={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:"Before sample YAML for reference. The viewer always uses the bundled fixture for the selected case."},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:"After sample YAML for reference. The viewer always uses the bundled fixture for the selected case."},hideUnchangedNodes:{control:{type:"boolean"},table:{category:"Display"},description:"Forwarded to JsonSchemaNextDiffsViewer's hideUnchangedNodes prop."}},St=5,N=t=>Ie(t),Ct=(t,a)=>({schema:Je({beforeSchema:N(t),afterSchema:N(a),target:we,disableSubstitutionTitle:!0}),expandedDepth:St,diffMetaKeys:vt,hideUnchangedNodes:!1}),jt=t=>t.reduce((a,s)=>(a[s.caseId]=s,a),{}),Dt=(t,a)=>s=>{const r=a[s];if(!r)throw new Error(`Sample case not found: ${s}`);return{name:s,args:{caseId:s,beforeYaml:r.beforeYaml,afterYaml:r.afterYaml,hideUnchangedNodes:bt},argTypes:Te,render:o=>{const E=a[o.caseId];return Ae.jsx(t,{caseId:o.caseId,beforeYaml:E.beforeYaml,afterYaml:E.afterYaml,hideUnchangedNodes:o.hideUnchangedNodes})}}},Et=(t,a)=>{const s=Dt(t,a);return r=>({...s(r),play:async({canvasElement:o})=>{await Le(o)}})},D=({beforeYaml:t,afterYaml:a,hideUnchangedNodes:s})=>Ae.jsx(Fe,{...Ct(t,a),hideUnchangedNodes:s});D.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory",props:{hideUnchangedNodes:{required:!0,tsType:{name:"boolean"},description:""}}};const Nt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/before.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/before.yaml":He,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/before.yaml":Ge,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/before.yaml":ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/before.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/before.yaml":ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/before.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/before.yaml":et}),At=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/after.yaml":ot,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/after.yaml":nt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/after.yaml":ct,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/after.yaml":dt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/after.yaml":mt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/after.yaml":it,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/after.yaml":lt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/after.yaml":_t,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/after.yaml":pt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/after.yaml":ft,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/after.yaml":yt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/after.yaml":gt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/after.yaml":ht,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/after.yaml":ut}),Tt=Ye(Nt,At),Yt=jt(Tt),qt={title:"JSON Schema Diffs Suite/Type Changes/Type Annotations Changes",component:D,argTypes:Te},e=Et(D,Yt),n=e("001-title-added"),c=e("002-title-removed"),d=e("003-title-replaced"),m=e("004-format-added"),i=e("005-format-removed"),l=e("006-format-replaced"),_=e("007-title-added-format-added"),p=e("008-title-added-format-removed"),f=e("009-title-added-format-replaced"),y=e("010-title-removed-format-added"),g=e("011-title-removed-format-removed"),h=e("012-title-removed-format-replaced"),u=e("013-title-replaced-format-added"),v=e("014-title-replaced-format-removed"),b=e("015-title-replaced-format-replaced"),S=e("016-monolithic-type-title-format-replaced"),C=e("017-type-title-replaced"),j=e("018-type-format-replaced");var A,T,Y;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("001-title-added")',...(Y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:Y.source}}};var F,M,x;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("002-title-removed")',...(x=(M=c.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var J,w,I;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("003-title-replaced")',...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,U,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("004-format-added")',...(O=(U=m.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var B,K,H;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("005-format-removed")',...(H=(K=i.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var G,R,V;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("006-format-replaced")',...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var P,k,q;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("007-title-added-format-added")',...(q=(k=_.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var W,X,$;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("008-title-added-format-removed")',...($=(X=p.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var z,Q,Z;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("009-title-added-format-replaced")',...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("010-title-removed-format-added")',...(ae=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("011-title-removed-format-removed")',...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ce,de;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("012-title-removed-format-replaced")',...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ie,le;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("013-title-replaced-format-added")',...(le=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var _e,pe,fe;v.parameters={...v.parameters,docs:{...(_e=v.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("014-title-replaced-format-removed")',...(fe=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ye,ge,he;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("015-title-replaced-format-replaced")',...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,ve,be;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("016-monolithic-type-title-format-replaced")',...(be=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Se,Ce,je;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("017-type-title-replaced")',...(je=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var De,Ee,Ne;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("018-type-format-replaced")',...(Ne=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};const Wt=["Case_001_title_added","Case_002_title_removed","Case_003_title_replaced","Case_004_format_added","Case_005_format_removed","Case_006_format_replaced","Case_007_title_added_format_added","Case_008_title_added_format_removed","Case_009_title_added_format_replaced","Case_010_title_removed_format_added","Case_011_title_removed_format_removed","Case_012_title_removed_format_replaced","Case_013_title_replaced_format_added","Case_014_title_replaced_format_removed","Case_015_title_replaced_format_replaced","Case_016_monolithic_type_title_format_replaced","Case_017_type_title_replaced","Case_018_type_format_replaced"];export{n as Case_001_title_added,c as Case_002_title_removed,d as Case_003_title_replaced,m as Case_004_format_added,i as Case_005_format_removed,l as Case_006_format_replaced,_ as Case_007_title_added_format_added,p as Case_008_title_added_format_removed,f as Case_009_title_added_format_replaced,y as Case_010_title_removed_format_added,g as Case_011_title_removed_format_removed,h as Case_012_title_removed_format_replaced,u as Case_013_title_replaced_format_added,v as Case_014_title_replaced_format_removed,b as Case_015_title_replaced_format_replaced,S as Case_016_monolithic_type_title_format_replaced,C as Case_017_type_title_replaced,j as Case_018_type_format_replaced,Wt as __namedExportsOrder,qt as default};
