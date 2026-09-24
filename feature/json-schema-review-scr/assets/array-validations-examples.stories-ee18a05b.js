import{c as qe}from"./diffs-samples-cases-1df1f3ae.js";import{c as ze,d as We,j as Ge,b as He}from"./json-schema-diffs-utils-5d8ca1eb.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-bb6f95bd.js";import"./UxBadge-96977876.js";import"./IndexesNodeViewer-300692d8.js";import"./DdlTableDiffsViewer-f3142203.js";/* empty css              */import"./DdlTableViewer-43a2e40c.js";import"./GraphQLOperationDiffViewer-90d7fdae.js";import"./GraphPropNodeViewer-de716f5c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-2c9808a5.js";import"./preprocess-f40c604b.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const Ke=`type: array

`,Le=`type: array

`,Me=`type: array
examples:
  - []

`,Pe=`type: array
examples:
  - - alpha
    - beta

`,Qe=`type: array
examples:
  - []

`,Ue=`type: array
examples:
  - - alpha
    - beta

`,Xe=`type: array
examples:
  - - alpha
    - beta

`,Ye=`type: array

`,Ze=`type: array

`,$e=`type: array

`,ea=`type: array
examples:
  - []
  - []

`,aa=`type: array
examples:
  - []
  - - alpha
    - beta

`,ra=`type: array
examples:
  - - alpha
    - beta
  - - alpha
    - beta
    - gamma

`,sa=`type: array
examples:
  - []

`,ta=`type: array
examples:
  - []

`,pa=`type: array
examples:
  - - alpha
    - beta

`,ma=`type: array
examples:
  - []
  - - alpha
    - beta

`,oa=`type: array
examples:
  - []
  - - alpha
    - beta

`,la=`type: array
examples:
  - []
  - []

`,_a=`type: array
examples:
  - - alpha
    - beta
  - - alpha
    - beta
    - gamma

`,na=`type: array
examples:
  - []
  - - alpha
    - beta

`,ya=`type: array
examples:
  - []
  - - alpha
    - beta

`,ca=`type: array
examples:
  - []
  - - alpha
    - beta

`,da=`type: array
examples:
  - []

`,ia=`type: array
examples:
  - - alpha
    - beta

`,xa=`type: array

`,fa=`type: array

`,ha=`type: array
examples:
  - - alpha
    - beta

`,va=`type: array
examples:
  - []

`,ga=`type: array
examples:
  - - alpha
    - beta
    - gamma

`,ba=`type: array
examples:
  - []
  - []

`,Ca=`type: array
examples:
  - []
  - - alpha
    - beta

`,ua=`type: array
examples:
  - - alpha
    - beta
  - - alpha
    - beta
    - gamma

`,wa=`type: array

`,Sa=`type: array

`,ja=`type: array

`,ka=`type: array
examples:
  - []
  - []

`,Da=`type: array
examples:
  - []
  - - alpha
    - beta

`,Ja=`type: array
examples:
  - - alpha
    - beta
  - - alpha
    - beta
    - gamma

`,Oa=`type: array
examples:
  - - alpha
    - beta

`,Aa=`type: array
examples:
  - []

`,Fa=`type: array
examples:
  - []

`,Va=`type: array
examples:
  - - alpha
    - beta
    - gamma

`,Ba=`type: array
examples:
  - - alpha
    - beta
    - gamma
  - - alpha
    - beta

`,Ea=`type: array
examples:
  - []
  - []

`,Ia=`type: array
examples:
  - []
  - - alpha
    - beta
    - gamma

`,Ta=Object.assign({"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/001-examples-added-empty-array/before.yaml":Ke,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/002-examples-added-array/before.yaml":Le,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/003-examples-removed-empty-array/before.yaml":Me,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/004-examples-removed-array/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/005-examples-replaced-empty-to-array/before.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/006-examples-replaced-array-to-empty/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/007-examples-replaced-array-to-array/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/008-examples-two-added-both-empty/before.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/009-examples-two-added-empty-and-array/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/010-examples-two-added-both-arrays/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/011-examples-two-removed-both-empty/before.yaml":ea,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/012-examples-two-removed-empty-and-array/before.yaml":aa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/013-examples-two-removed-both-arrays/before.yaml":ra,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/014-examples-append-empty-to-empty/before.yaml":sa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/015-examples-append-array-to-empty/before.yaml":ta,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/016-examples-append-array-to-array/before.yaml":pa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/017-examples-remove-empty-keep-array/before.yaml":ma,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/018-examples-remove-array-keep-empty/before.yaml":oa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/019-examples-remove-first-of-two-empty/before.yaml":la,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/020-examples-remove-first-of-two-arrays/before.yaml":_a,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/021-examples-replace-empty-with-array/before.yaml":na,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/022-examples-replace-array-with-empty/before.yaml":ya,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/023-examples-replace-array-with-array/before.yaml":ca}),Na=Object.assign({"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/001-examples-added-empty-array/after.yaml":da,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/002-examples-added-array/after.yaml":ia,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/003-examples-removed-empty-array/after.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/004-examples-removed-array/after.yaml":fa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/005-examples-replaced-empty-to-array/after.yaml":ha,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/006-examples-replaced-array-to-empty/after.yaml":va,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/007-examples-replaced-array-to-array/after.yaml":ga,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/008-examples-two-added-both-empty/after.yaml":ba,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/009-examples-two-added-empty-and-array/after.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/010-examples-two-added-both-arrays/after.yaml":ua,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/011-examples-two-removed-both-empty/after.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/012-examples-two-removed-empty-and-array/after.yaml":Sa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/013-examples-two-removed-both-arrays/after.yaml":ja,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/014-examples-append-empty-to-empty/after.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/015-examples-append-array-to-empty/after.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/016-examples-append-array-to-array/after.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/017-examples-remove-empty-keep-array/after.yaml":Oa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/018-examples-remove-array-keep-empty/after.yaml":Aa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/019-examples-remove-first-of-two-empty/after.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/020-examples-remove-first-of-two-arrays/after.yaml":Va,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/021-examples-replace-empty-with-array/after.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/022-examples-replace-array-with-empty/after.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/array-validations/examples/023-examples-replace-array-with-array/after.yaml":Ia}),Ra=qe(Ta,Na),Wa=ze(Ra),tr={title:"JSON Schema Diffs Suite/Array Validation/Array Validations Examples",component:We,argTypes:Ge},e=He(We,Wa),a=e("001-examples-added-empty-array"),r=e("002-examples-added-array"),s=e("003-examples-removed-empty-array"),t=e("004-examples-removed-array"),p=e("005-examples-replaced-empty-to-array"),m=e("006-examples-replaced-array-to-empty"),o=e("007-examples-replaced-array-to-array"),l=e("008-examples-two-added-both-empty"),_=e("009-examples-two-added-empty-and-array"),n=e("010-examples-two-added-both-arrays"),y=e("011-examples-two-removed-both-empty"),c=e("012-examples-two-removed-empty-and-array"),d=e("013-examples-two-removed-both-arrays"),i=e("014-examples-append-empty-to-empty"),x=e("015-examples-append-array-to-empty"),f=e("016-examples-append-array-to-array"),h=e("017-examples-remove-empty-keep-array"),v=e("018-examples-remove-array-keep-empty"),g=e("019-examples-remove-first-of-two-empty"),b=e("020-examples-remove-first-of-two-arrays"),C=e("021-examples-replace-empty-with-array"),u=e("022-examples-replace-array-with-empty"),w=e("023-examples-replace-array-with-array");var S,j,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("001-examples-added-empty-array")',...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,J,O;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("002-examples-added-array")',...(O=(J=r.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var A,F,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("003-examples-removed-empty-array")',...(V=(F=s.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var B,E,I;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("004-examples-removed-array")',...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,N,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("005-examples-replaced-empty-to-array")',...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,q,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("006-examples-replaced-array-to-empty")',...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,H,K;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("007-examples-replaced-array-to-array")',...(K=(H=o.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,M,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("008-examples-two-added-both-empty")',...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,U,X;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("009-examples-two-added-empty-and-array")',...(X=(U=_.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("010-examples-two-added-both-arrays")',...($=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("011-examples-two-removed-both-empty")',...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,pe;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("012-examples-two-removed-empty-and-array")',...(pe=(te=c.parameters)==null?void 0:te.docs)==null?void 0:pe.source}}};var me,oe,le;d.parameters={...d.parameters,docs:{...(me=d.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("013-examples-two-removed-both-arrays")',...(le=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var _e,ne,ye;i.parameters={...i.parameters,docs:{...(_e=i.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("014-examples-append-empty-to-empty")',...(ye=(ne=i.parameters)==null?void 0:ne.docs)==null?void 0:ye.source}}};var ce,de,ie;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("015-examples-append-array-to-empty")',...(ie=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var xe,fe,he;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("016-examples-append-array-to-array")',...(he=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,ge,be;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("017-examples-remove-empty-keep-array")',...(be=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Ce,ue,we;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("018-examples-remove-array-keep-empty")',...(we=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:we.source}}};var Se,je,ke;g.parameters={...g.parameters,docs:{...(Se=g.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("019-examples-remove-first-of-two-empty")',...(ke=(je=g.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var De,Je,Oe;b.parameters={...b.parameters,docs:{...(De=b.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("020-examples-remove-first-of-two-arrays")',...(Oe=(Je=b.parameters)==null?void 0:Je.docs)==null?void 0:Oe.source}}};var Ae,Fe,Ve;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("021-examples-replace-empty-with-array")',...(Ve=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Be,Ee,Ie;u.parameters={...u.parameters,docs:{...(Be=u.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("022-examples-replace-array-with-empty")',...(Ie=(Ee=u.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Te,Ne,Re;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("023-examples-replace-array-with-array")',...(Re=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};const pr=["Case_001_examples_added_empty_array","Case_002_examples_added_array","Case_003_examples_removed_empty_array","Case_004_examples_removed_array","Case_005_examples_replaced_empty_to_array","Case_006_examples_replaced_array_to_empty","Case_007_examples_replaced_array_to_array","Case_008_examples_two_added_both_empty","Case_009_examples_two_added_empty_and_array","Case_010_examples_two_added_both_arrays","Case_011_examples_two_removed_both_empty","Case_012_examples_two_removed_empty_and_array","Case_013_examples_two_removed_both_arrays","Case_014_examples_append_empty_to_empty","Case_015_examples_append_array_to_empty","Case_016_examples_append_array_to_array","Case_017_examples_remove_empty_keep_array","Case_018_examples_remove_array_keep_empty","Case_019_examples_remove_first_of_two_empty","Case_020_examples_remove_first_of_two_arrays","Case_021_examples_replace_empty_with_array","Case_022_examples_replace_array_with_empty","Case_023_examples_replace_array_with_array"];export{a as Case_001_examples_added_empty_array,r as Case_002_examples_added_array,s as Case_003_examples_removed_empty_array,t as Case_004_examples_removed_array,p as Case_005_examples_replaced_empty_to_array,m as Case_006_examples_replaced_array_to_empty,o as Case_007_examples_replaced_array_to_array,l as Case_008_examples_two_added_both_empty,_ as Case_009_examples_two_added_empty_and_array,n as Case_010_examples_two_added_both_arrays,y as Case_011_examples_two_removed_both_empty,c as Case_012_examples_two_removed_empty_and_array,d as Case_013_examples_two_removed_both_arrays,i as Case_014_examples_append_empty_to_empty,x as Case_015_examples_append_array_to_empty,f as Case_016_examples_append_array_to_array,h as Case_017_examples_remove_empty_keep_array,v as Case_018_examples_remove_array_keep_empty,g as Case_019_examples_remove_first_of_two_empty,b as Case_020_examples_remove_first_of_two_arrays,C as Case_021_examples_replace_empty_with_array,u as Case_022_examples_replace_array_with_empty,w as Case_023_examples_replace_array_with_array,pr as __namedExportsOrder,tr as default};
