import{c as sa}from"./diffs-samples-cases-1df1f3ae.js";import{c as ta,J as aa,j as ma,a as ra}from"./json-schema-diffs-utils-0884544c.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3ba7d9b6.js";import"./DiffBadge-d46fdecc.js";import"./IndexesNodeViewer-6c3256cd.js";import"./DdlTableDiffsViewer-a1712f5f.js";/* empty css              */import"./DdlTableViewer-29111e1c.js";import"./GraphQLOperationDiffViewer-71e8c834.js";import"./GraphPropNodeViewer-8a607f68.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5446e8cd.js";import"./preprocess-8a3ebf23.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const oa=`type: array

`,ia=`type: array
minItems: 1

`,na=`type: array
minItems: 1

`,_a=`type: array

`,ca=`type: array
maxItems: 5

`,da=`type: array
maxItems: 5

`,pa=`type: array
minItems: 1

`,la=`type: array
maxItems: 5

`,ya=`type: array

`,ua=`type: array
minItems: 1
maxItems: 5

`,fa=`type: array
minItems: 1
maxItems: 5

`,va=`type: array
minItems: 1
maxItems: 5

`,ga=`type: array
minItems: 1
maxItems: 5

`,ha=`type: array
minItems: 1
maxItems: 5

`,xa=`type: array
minItems: 1
maxItems: 5

`,ba=`type: array
maxItems: 5

`,Ca=`type: array
minItems: 1

`,Sa=`type: array
maxItems: 5

`,Ia=`type: array
minItems: 1
maxItems: 5

`,ja=`type: array
minItems: 1

`,qa=`type: array
minItems: 1
maxItems: 5

`,ka=`type: array

`,Da=`type: array

`,Ja=`type: array
uniqueItems: true

`,Oa=`type: array
uniqueItems: false

`,Fa=`type: array
uniqueItems: true

`,Aa=`type: array
uniqueItems: false

`,Ba=`type: array
minItems: 1

`,Ta=`type: array

`,Ea=`type: array
minItems: 3

`,Na=`type: array
maxItems: 5

`,Ra=`type: array

`,Va=`type: array
maxItems: 10

`,wa=`type: array
minItems: 1
maxItems: 5

`,za=`type: array
minItems: 1
maxItems: 5

`,Ga=`type: array
minItems: 1
maxItems: 5

`,Ha=`type: array
minItems: 1

`,Ka=`type: array
maxItems: 5

`,La=`type: array

`,Ma=`type: array
minItems: 3
maxItems: 5

`,Pa=`type: array
minItems: 1
maxItems: 10

`,Qa=`type: array
minItems: 3
maxItems: 10

`,Ua=`type: array
minItems: 1

`,Wa=`type: array
maxItems: 5

`,Xa=`type: array
minItems: 1
maxItems: 10

`,Ya=`type: array
maxItems: 10

`,Za=`type: array
minItems: 3
maxItems: 5

`,$a=`type: array
minItems: 3

`,es=`type: array
uniqueItems: true

`,as=`type: array
uniqueItems: false

`,ss=`type: array

`,ts=`type: array

`,ms=`type: array
uniqueItems: false

`,rs=`type: array
uniqueItems: true

`,os=Object.assign({"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/001-min-items-added/before.yaml":oa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/002-min-items-removed/before.yaml":ia,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/003-min-items-replaced/before.yaml":na,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/004-max-items-added/before.yaml":_a,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/005-max-items-removed/before.yaml":ca,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/006-max-items-replaced/before.yaml":da,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/007-max-items-added-to-min/before.yaml":pa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/008-min-items-added-to-max/before.yaml":la,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/009-items-count-both-added/before.yaml":ya,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/010-max-items-removed-keep-min/before.yaml":ua,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/011-min-items-removed-keep-max/before.yaml":fa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/012-items-count-both-removed/before.yaml":va,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/013-items-count-replace-min/before.yaml":ga,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/014-items-count-replace-max/before.yaml":ha,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/015-items-count-replace-both/before.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/016-min-items-added-max-items-removed/before.yaml":ba,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/017-max-items-added-min-items-removed/before.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/018-min-items-added-max-items-replaced/before.yaml":Sa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/019-min-items-removed-max-items-replaced/before.yaml":Ia,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/020-max-items-added-min-items-replaced/before.yaml":ja,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/021-max-items-removed-min-items-replaced/before.yaml":qa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/022-unique-items-true-added/before.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/023-unique-items-false-added/before.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/024-unique-items-true-removed/before.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/025-unique-items-false-removed/before.yaml":Oa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/026-unique-items-true-to-false/before.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/027-unique-items-false-to-true/before.yaml":Aa}),is=Object.assign({"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/001-min-items-added/after.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/002-min-items-removed/after.yaml":Ta,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/003-min-items-replaced/after.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/004-max-items-added/after.yaml":Na,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/005-max-items-removed/after.yaml":Ra,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/006-max-items-replaced/after.yaml":Va,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/007-max-items-added-to-min/after.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/008-min-items-added-to-max/after.yaml":za,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/009-items-count-both-added/after.yaml":Ga,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/010-max-items-removed-keep-min/after.yaml":Ha,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/011-min-items-removed-keep-max/after.yaml":Ka,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/012-items-count-both-removed/after.yaml":La,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/013-items-count-replace-min/after.yaml":Ma,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/014-items-count-replace-max/after.yaml":Pa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/015-items-count-replace-both/after.yaml":Qa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/016-min-items-added-max-items-removed/after.yaml":Ua,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/017-max-items-added-min-items-removed/after.yaml":Wa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/018-min-items-added-max-items-replaced/after.yaml":Xa,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/019-min-items-removed-max-items-replaced/after.yaml":Ya,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/020-max-items-added-min-items-replaced/after.yaml":Za,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/021-max-items-removed-min-items-replaced/after.yaml":$a,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/022-unique-items-true-added/after.yaml":es,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/023-unique-items-false-added/after.yaml":as,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/024-unique-items-true-removed/after.yaml":ss,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/025-unique-items-false-removed/after.yaml":ts,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/026-unique-items-true-to-false/after.yaml":ms,"../../../../samples/json-schema-diffs/type-changes/array-validations/items-count/027-unique-items-false-to-true/after.yaml":rs}),ns=sa(os,is),_s=ta(ns),ks={title:"JSON Schema Diffs Suite/Array Validations Items Count",component:aa,argTypes:ma},e=ra(aa,_s),a=e("001-min-items-added"),s=e("002-min-items-removed"),t=e("003-min-items-replaced"),m=e("004-max-items-added"),r=e("005-max-items-removed"),o=e("006-max-items-replaced"),i=e("007-max-items-added-to-min"),n=e("008-min-items-added-to-max"),_=e("009-items-count-both-added"),c=e("010-max-items-removed-keep-min"),d=e("011-min-items-removed-keep-max"),p=e("012-items-count-both-removed"),l=e("013-items-count-replace-min"),y=e("014-items-count-replace-max"),u=e("015-items-count-replace-both"),f=e("016-min-items-added-max-items-removed"),v=e("017-max-items-added-min-items-removed"),g=e("018-min-items-added-max-items-replaced"),h=e("019-min-items-removed-max-items-replaced"),x=e("020-max-items-added-min-items-replaced"),b=e("021-max-items-removed-min-items-replaced"),C=e("022-unique-items-true-added"),S=e("023-unique-items-false-added"),I=e("024-unique-items-true-removed"),j=e("025-unique-items-false-removed"),q=e("026-unique-items-true-to-false"),k=e("027-unique-items-false-to-true");var D,J,O;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("001-min-items-added")',...(O=(J=a.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var F,A,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("002-min-items-removed")',...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var T,E,N;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("003-min-items-replaced")',...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,V,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("004-max-items-added")',...(w=(V=m.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var z,G,H;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("005-max-items-removed")',...(H=(G=r.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,L,M;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("006-max-items-replaced")',...(M=(L=o.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,Q,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("007-max-items-added-to-min")',...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("008-min-items-added-to-max")',...(Y=(X=n.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("009-items-count-both-added")',...(ee=($=_.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,te;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("010-max-items-removed-keep-min")',...(te=(se=c.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var me,re,oe;d.parameters={...d.parameters,docs:{...(me=d.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("011-min-items-removed-keep-max")',...(oe=(re=d.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,ne,_e;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("012-items-count-both-removed")',...(_e=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:_e.source}}};var ce,de,pe;l.parameters={...l.parameters,docs:{...(ce=l.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("013-items-count-replace-min")',...(pe=(de=l.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var le,ye,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("014-items-count-replace-max")',...(ue=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:ue.source}}};var fe,ve,ge;u.parameters={...u.parameters,docs:{...(fe=u.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("015-items-count-replace-both")',...(ge=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,xe,be;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("016-min-items-added-max-items-removed")',...(be=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var Ce,Se,Ie;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("017-max-items-added-min-items-removed")',...(Ie=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var je,qe,ke;g.parameters={...g.parameters,docs:{...(je=g.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("018-min-items-added-max-items-replaced")',...(ke=(qe=g.parameters)==null?void 0:qe.docs)==null?void 0:ke.source}}};var De,Je,Oe;h.parameters={...h.parameters,docs:{...(De=h.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("019-min-items-removed-max-items-replaced")',...(Oe=(Je=h.parameters)==null?void 0:Je.docs)==null?void 0:Oe.source}}};var Fe,Ae,Be;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("020-max-items-added-min-items-replaced")',...(Be=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var Te,Ee,Ne;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("021-max-items-removed-min-items-replaced")',...(Ne=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Re,Ve,we;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("022-unique-items-true-added")',...(we=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var ze,Ge,He;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("023-unique-items-false-added")',...(He=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Le,Me;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("024-unique-items-true-removed")',...(Me=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Pe,Qe,Ue;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("025-unique-items-false-removed")',...(Ue=(Qe=j.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var We,Xe,Ye;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("026-unique-items-true-to-false")',...(Ye=(Xe=q.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,ea;k.parameters={...k.parameters,docs:{...(Ze=k.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("027-unique-items-false-to-true")',...(ea=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};const Ds=["Case_001_min_items_added","Case_002_min_items_removed","Case_003_min_items_replaced","Case_004_max_items_added","Case_005_max_items_removed","Case_006_max_items_replaced","Case_007_max_items_added_to_min","Case_008_min_items_added_to_max","Case_009_items_count_both_added","Case_010_max_items_removed_keep_min","Case_011_min_items_removed_keep_max","Case_012_items_count_both_removed","Case_013_items_count_replace_min","Case_014_items_count_replace_max","Case_015_items_count_replace_both","Case_016_min_items_added_max_items_removed","Case_017_max_items_added_min_items_removed","Case_018_min_items_added_max_items_replaced","Case_019_min_items_removed_max_items_replaced","Case_020_max_items_added_min_items_replaced","Case_021_max_items_removed_min_items_replaced","Case_022_unique_items_true_added","Case_023_unique_items_false_added","Case_024_unique_items_true_removed","Case_025_unique_items_false_removed","Case_026_unique_items_true_to_false","Case_027_unique_items_false_to_true"];export{a as Case_001_min_items_added,s as Case_002_min_items_removed,t as Case_003_min_items_replaced,m as Case_004_max_items_added,r as Case_005_max_items_removed,o as Case_006_max_items_replaced,i as Case_007_max_items_added_to_min,n as Case_008_min_items_added_to_max,_ as Case_009_items_count_both_added,c as Case_010_max_items_removed_keep_min,d as Case_011_min_items_removed_keep_max,p as Case_012_items_count_both_removed,l as Case_013_items_count_replace_min,y as Case_014_items_count_replace_max,u as Case_015_items_count_replace_both,f as Case_016_min_items_added_max_items_removed,v as Case_017_max_items_added_min_items_removed,g as Case_018_min_items_added_max_items_replaced,h as Case_019_min_items_removed_max_items_replaced,x as Case_020_max_items_added_min_items_replaced,b as Case_021_max_items_removed_min_items_replaced,C as Case_022_unique_items_true_added,S as Case_023_unique_items_false_added,I as Case_024_unique_items_true_removed,j as Case_025_unique_items_false_removed,q as Case_026_unique_items_true_to_false,k as Case_027_unique_items_false_to_true,Ds as __namedExportsOrder,ks as default};
