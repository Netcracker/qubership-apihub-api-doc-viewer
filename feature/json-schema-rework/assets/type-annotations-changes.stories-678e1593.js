import{c as be}from"./diffs-samples-cases-1df1f3ae.js";import{c as Ce,J as ue,j as Se,b as je}from"./json-schema-diffs-utils-2b3a49a9.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-35ca18f4.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-01deee66.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Be=`type: string

`,Le=`type: string
title: Label

`,Ae=`type: string
title: Before title
format: date

`,De=`type: string

`,Me=`type: string
format: uuid

`,Je=`type: string
format: date
title: Before title

`,Te=`type: string

`,Oe=`type: string
format: uuid

`,Fe=`type: string
format: date

`,Ne=`type: string
title: Label

`,ke=`type: string
title: Label
format: uuid

`,xe=`type: string
title: Label
format: date

`,Ie=`type: string
title: Before title

`,Ke=`type: string
title: Before title
format: uuid

`,We=`type: string
title: Before title
format: date

`,Ee=`type: string
title: Calendar
format: date-time

`,Re=`type: string
title: Calendar
format: date-time

`,Ve=`type: string
title: Calendar
format: date-time

`,qe=`type: string
title: Label

`,we=`type: string

`,ze=`type: string
title: After title
format: date

`,Ge=`type: string
format: uuid

`,He=`type: string

`,Pe=`type: string
format: date-time
title: Before title

`,Qe=`type: string
title: Label
format: uuid

`,Ue=`type: string
title: Label

`,Xe=`type: string
title: Label
format: date-time

`,Ye=`type: string
format: uuid

`,Ze=`type: string

`,$e=`type: string
format: date-time

`,et=`type: string
title: After title
format: uuid

`,tt=`type: string
title: After title

`,at=`type: string
title: After title
format: date-time

`,st=`type: number
title: Money
format: <CurrencyMarker> N.MK

`,rt=`type: number
title: Money
format: date-time

`,ot=`type: number
title: Calendar
format: <CurrencyMarker> N.MK

`,nt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/before.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/before.yaml":Le,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/before.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/before.yaml":De,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/before.yaml":Me,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/before.yaml":Je,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/before.yaml":Te,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/before.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/before.yaml":Fe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/before.yaml":Ne,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/before.yaml":ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/before.yaml":xe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/before.yaml":Ie,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/before.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/before.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/before.yaml":Ve}),mt=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/001-title-added/after.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/002-title-removed/after.yaml":we,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/003-title-replaced/after.yaml":ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/004-format-added/after.yaml":Ge,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/005-format-removed/after.yaml":He,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/006-format-replaced/after.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/007-title-added-format-added/after.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/008-title-added-format-removed/after.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/009-title-added-format-replaced/after.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/010-title-removed-format-added/after.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/011-title-removed-format-removed/after.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/012-title-removed-format-replaced/after.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/013-title-replaced-format-added/after.yaml":et,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/014-title-replaced-format-removed/after.yaml":tt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/015-title-replaced-format-replaced/after.yaml":at,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/016-monolithic-type-title-format-replaced/after.yaml":st,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/017-type-title-replaced/after.yaml":rt,"../../../../samples/json-schema-diffs/type-changes/type-annotations-changes/018-type-format-replaced/after.yaml":ot}),ct=be(nt,mt),dt=Ce(ct),Dt={title:"JSON Schema Diffs Suite/Type Changes/Type Annotations Changes",component:ue,argTypes:Se},e=je(ue,dt),t=e("001-title-added"),a=e("002-title-removed"),s=e("003-title-replaced"),r=e("004-format-added"),o=e("005-format-removed"),n=e("006-format-replaced"),m=e("007-title-added-format-added"),c=e("008-title-added-format-removed"),d=e("009-title-added-format-replaced"),i=e("010-title-removed-format-added"),l=e("011-title-removed-format-removed"),_=e("012-title-removed-format-replaced"),p=e("013-title-replaced-format-added"),f=e("014-title-replaced-format-removed"),y=e("015-title-replaced-format-replaced"),g=e("016-monolithic-type-title-format-replaced"),h=e("017-type-title-replaced"),v=e("018-type-format-replaced");var u,b,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("001-title-added")',...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,j,B;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("002-title-removed")',...(B=(j=a.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var L,A,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("003-title-replaced")',...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,J,T;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("004-format-added")',...(T=(J=r.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var O,F,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("005-format-removed")',...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var k,x,I;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("006-format-replaced")',...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var K,W,E;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("007-title-added-format-added")',...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var R,V,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("008-title-added-format-removed")',...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var w,z,G;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("009-title-added-format-replaced")',...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,P,Q;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("010-title-removed-format-added")',...(Q=(P=i.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("011-title-removed-format-removed")',...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("012-title-removed-format-replaced")',...(ee=($=_.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,se;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("013-title-replaced-format-added")',...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ne;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("014-title-replaced-format-removed")',...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var me,ce,de;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("015-title-replaced-format-replaced")',...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,le,_e;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("016-monolithic-type-title-format-replaced")',...(_e=(le=g.parameters)==null?void 0:le.docs)==null?void 0:_e.source}}};var pe,fe,ye;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("017-type-title-replaced")',...(ye=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ge,he,ve;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("018-type-format-replaced")',...(ve=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const Mt=["Case_001_title_added","Case_002_title_removed","Case_003_title_replaced","Case_004_format_added","Case_005_format_removed","Case_006_format_replaced","Case_007_title_added_format_added","Case_008_title_added_format_removed","Case_009_title_added_format_replaced","Case_010_title_removed_format_added","Case_011_title_removed_format_removed","Case_012_title_removed_format_replaced","Case_013_title_replaced_format_added","Case_014_title_replaced_format_removed","Case_015_title_replaced_format_replaced","Case_016_monolithic_type_title_format_replaced","Case_017_type_title_replaced","Case_018_type_format_replaced"];export{t as Case_001_title_added,a as Case_002_title_removed,s as Case_003_title_replaced,r as Case_004_format_added,o as Case_005_format_removed,n as Case_006_format_replaced,m as Case_007_title_added_format_added,c as Case_008_title_added_format_removed,d as Case_009_title_added_format_replaced,i as Case_010_title_removed_format_added,l as Case_011_title_removed_format_removed,_ as Case_012_title_removed_format_replaced,p as Case_013_title_replaced_format_added,f as Case_014_title_replaced_format_removed,y as Case_015_title_replaced_format_replaced,g as Case_016_monolithic_type_title_format_replaced,h as Case_017_type_title_replaced,v as Case_018_type_format_replaced,Mt as __namedExportsOrder,Dt as default};
