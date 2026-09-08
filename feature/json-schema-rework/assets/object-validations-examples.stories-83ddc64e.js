import{c as ze}from"./diffs-samples-cases-1df1f3ae.js";import{c as Ge,J as qe,j as He,a as Ke}from"./json-schema-diffs-utils-df52f0a3.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-0796db49.js";import"./DiffBadge-d46fdecc.js";import"./IndexesNodeViewer-54704dc7.js";import"./DdlTableDiffsViewer-0ef191c6.js";/* empty css              */import"./DdlTableViewer-a8555485.js";import"./GraphQLOperationDiffViewer-71e8c834.js";import"./GraphPropNodeViewer-8a607f68.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5446e8cd.js";import"./preprocess-8a3ebf23.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Le=`type: object

`,Me=`type: object

`,Pe=`type: object
examples:
  - {}

`,Qe=`type: object
examples:
  - id: alpha
    count: 1

`,Ue=`type: object
examples:
  - {}

`,We=`type: object
examples:
  - id: alpha
    count: 1

`,Xe=`type: object
examples:
  - id: alpha
    count: 1

`,Ye=`type: object

`,Ze=`type: object

`,$e=`type: object

`,ea=`type: object
examples:
  - {}
  - {}

`,aa=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,ta=`type: object
examples:
  - id: alpha
    count: 1
  - id: beta
    count: 2
    active: true

`,sa=`type: object
examples:
  - {}

`,oa=`type: object
examples:
  - {}

`,pa=`type: object
examples:
  - id: alpha
    count: 1

`,ca=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,ma=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,na=`type: object
examples:
  - {}
  - {}

`,ra=`type: object
examples:
  - id: alpha
    count: 1
  - id: beta
    count: 2
    active: true

`,_a=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,la=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,da=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,ba=`type: object
examples:
  - {}

`,ia=`type: object
examples:
  - id: alpha
    count: 1

`,ja=`type: object

`,ya=`type: object

`,xa=`type: object
examples:
  - id: alpha
    count: 1

`,fa=`type: object
examples:
  - {}

`,ha=`type: object
examples:
  - id: beta
    count: 2
    active: true

`,va=`type: object
examples:
  - {}
  - {}

`,ga=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,ua=`type: object
examples:
  - id: alpha
    count: 1
  - id: beta
    count: 2
    active: true

`,Ca=`type: object

`,wa=`type: object

`,Sa=`type: object

`,ka=`type: object
examples:
  - {}
  - {}

`,Da=`type: object
examples:
  - {}
  - id: alpha
    count: 1

`,Ja=`type: object
examples:
  - id: alpha
    count: 1
  - id: beta
    count: 2
    active: true

`,Oa=`type: object
examples:
  - id: alpha
    count: 1

`,Fa=`type: object
examples:
  - {}

`,Ba=`type: object
examples:
  - {}

`,Ea=`type: object
examples:
  - id: beta
    count: 2
    active: true

`,Ia=`type: object
examples:
  - id: beta
    count: 2
    active: true
  - id: alpha
    count: 1

`,Ta=`type: object
examples:
  - {}
  - {}

`,Aa=`type: object
examples:
  - {}
  - id: beta
    count: 2
    active: true

`,Na=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/001-examples-added-empty-object/before.yaml":Le,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/002-examples-added-object/before.yaml":Me,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/003-examples-removed-empty-object/before.yaml":Pe,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/004-examples-removed-object/before.yaml":Qe,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/005-examples-replaced-empty-to-object/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/006-examples-replaced-object-to-empty/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/007-examples-replaced-object-to-object/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/008-examples-two-added-both-empty/before.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/009-examples-two-added-empty-and-object/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/010-examples-two-added-both-objects/before.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/011-examples-two-removed-both-empty/before.yaml":ea,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/012-examples-two-removed-empty-and-object/before.yaml":aa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/013-examples-two-removed-both-objects/before.yaml":ta,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/014-examples-append-empty-to-empty/before.yaml":sa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/015-examples-append-object-to-empty/before.yaml":oa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/016-examples-append-object-to-object/before.yaml":pa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/017-examples-remove-empty-keep-object/before.yaml":ca,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/018-examples-remove-object-keep-empty/before.yaml":ma,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/019-examples-remove-first-of-two-empty/before.yaml":na,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/020-examples-remove-first-of-two-objects/before.yaml":ra,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/021-examples-replace-empty-with-object/before.yaml":_a,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/022-examples-replace-object-with-empty/before.yaml":la,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/023-examples-replace-object-with-object/before.yaml":da}),Ra=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/001-examples-added-empty-object/after.yaml":ba,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/002-examples-added-object/after.yaml":ia,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/003-examples-removed-empty-object/after.yaml":ja,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/004-examples-removed-object/after.yaml":ya,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/005-examples-replaced-empty-to-object/after.yaml":xa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/006-examples-replaced-object-to-empty/after.yaml":fa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/007-examples-replaced-object-to-object/after.yaml":ha,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/008-examples-two-added-both-empty/after.yaml":va,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/009-examples-two-added-empty-and-object/after.yaml":ga,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/010-examples-two-added-both-objects/after.yaml":ua,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/011-examples-two-removed-both-empty/after.yaml":Ca,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/012-examples-two-removed-empty-and-object/after.yaml":wa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/013-examples-two-removed-both-objects/after.yaml":Sa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/014-examples-append-empty-to-empty/after.yaml":ka,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/015-examples-append-object-to-empty/after.yaml":Da,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/016-examples-append-object-to-object/after.yaml":Ja,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/017-examples-remove-empty-keep-object/after.yaml":Oa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/018-examples-remove-object-keep-empty/after.yaml":Fa,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/019-examples-remove-first-of-two-empty/after.yaml":Ba,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/020-examples-remove-first-of-two-objects/after.yaml":Ea,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/021-examples-replace-empty-with-object/after.yaml":Ia,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/022-examples-replace-object-with-empty/after.yaml":Ta,"../../../../samples/json-schema-diffs/type-changes/object-validations/examples/023-examples-replace-object-with-object/after.yaml":Aa}),Va=ze(Na,Ra),qa=Ge(Va),st={title:"JSON Schema Diffs Suite/Object Validations Examples",component:qe,argTypes:He},e=Ke(qe,qa),a=e("001-examples-added-empty-object"),t=e("002-examples-added-object"),s=e("003-examples-removed-empty-object"),o=e("004-examples-removed-object"),p=e("005-examples-replaced-empty-to-object"),c=e("006-examples-replaced-object-to-empty"),m=e("007-examples-replaced-object-to-object"),n=e("008-examples-two-added-both-empty"),r=e("009-examples-two-added-empty-and-object"),_=e("010-examples-two-added-both-objects"),l=e("011-examples-two-removed-both-empty"),d=e("012-examples-two-removed-empty-and-object"),b=e("013-examples-two-removed-both-objects"),i=e("014-examples-append-empty-to-empty"),j=e("015-examples-append-object-to-empty"),y=e("016-examples-append-object-to-object"),x=e("017-examples-remove-empty-keep-object"),f=e("018-examples-remove-object-keep-empty"),h=e("019-examples-remove-first-of-two-empty"),v=e("020-examples-remove-first-of-two-objects"),g=e("021-examples-replace-empty-with-object"),u=e("022-examples-replace-object-with-empty"),C=e("023-examples-replace-object-with-object");var w,S,k;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("001-examples-added-empty-object")',...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,J,O;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("002-examples-added-object")',...(O=(J=t.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var F,B,E;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("003-examples-removed-empty-object")',...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,T,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("004-examples-removed-object")',...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var N,R,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("005-examples-replaced-empty-to-object")',...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,z,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("006-examples-replaced-object-to-empty")',...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,K,L;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("007-examples-replaced-object-to-object")',...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,P,Q;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("008-examples-two-added-both-empty")',...(Q=(P=n.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,W,X;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("009-examples-two-added-empty-and-object")',...(X=(W=r.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("010-examples-two-added-both-objects")',...($=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("011-examples-two-removed-both-empty")',...(te=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,pe;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("012-examples-two-removed-empty-and-object")',...(pe=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var ce,me,ne;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("013-examples-two-removed-both-objects")',...(ne=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ne.source}}};var re,_e,le;i.parameters={...i.parameters,docs:{...(re=i.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("014-examples-append-empty-to-empty")',...(le=(_e=i.parameters)==null?void 0:_e.docs)==null?void 0:le.source}}};var de,be,ie;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("015-examples-append-object-to-empty")',...(ie=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ie.source}}};var je,ye,xe;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("016-examples-append-object-to-object")',...(xe=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var fe,he,ve;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("017-examples-remove-empty-keep-object")',...(ve=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ge,ue,Ce;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("018-examples-remove-object-keep-empty")',...(Ce=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:Ce.source}}};var we,Se,ke;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("019-examples-remove-first-of-two-empty")',...(ke=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var De,Je,Oe;v.parameters={...v.parameters,docs:{...(De=v.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("020-examples-remove-first-of-two-objects")',...(Oe=(Je=v.parameters)==null?void 0:Je.docs)==null?void 0:Oe.source}}};var Fe,Be,Ee;g.parameters={...g.parameters,docs:{...(Fe=g.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("021-examples-replace-empty-with-object")',...(Ee=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Ie,Te,Ae;u.parameters={...u.parameters,docs:{...(Ie=u.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("022-examples-replace-object-with-empty")',...(Ae=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ne,Re,Ve;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("023-examples-replace-object-with-object")',...(Ve=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};const ot=["Case_001_examples_added_empty_object","Case_002_examples_added_object","Case_003_examples_removed_empty_object","Case_004_examples_removed_object","Case_005_examples_replaced_empty_to_object","Case_006_examples_replaced_object_to_empty","Case_007_examples_replaced_object_to_object","Case_008_examples_two_added_both_empty","Case_009_examples_two_added_empty_and_object","Case_010_examples_two_added_both_objects","Case_011_examples_two_removed_both_empty","Case_012_examples_two_removed_empty_and_object","Case_013_examples_two_removed_both_objects","Case_014_examples_append_empty_to_empty","Case_015_examples_append_object_to_empty","Case_016_examples_append_object_to_object","Case_017_examples_remove_empty_keep_object","Case_018_examples_remove_object_keep_empty","Case_019_examples_remove_first_of_two_empty","Case_020_examples_remove_first_of_two_objects","Case_021_examples_replace_empty_with_object","Case_022_examples_replace_object_with_empty","Case_023_examples_replace_object_with_object"];export{a as Case_001_examples_added_empty_object,t as Case_002_examples_added_object,s as Case_003_examples_removed_empty_object,o as Case_004_examples_removed_object,p as Case_005_examples_replaced_empty_to_object,c as Case_006_examples_replaced_object_to_empty,m as Case_007_examples_replaced_object_to_object,n as Case_008_examples_two_added_both_empty,r as Case_009_examples_two_added_empty_and_object,_ as Case_010_examples_two_added_both_objects,l as Case_011_examples_two_removed_both_empty,d as Case_012_examples_two_removed_empty_and_object,b as Case_013_examples_two_removed_both_objects,i as Case_014_examples_append_empty_to_empty,j as Case_015_examples_append_object_to_empty,y as Case_016_examples_append_object_to_object,x as Case_017_examples_remove_empty_keep_object,f as Case_018_examples_remove_object_keep_empty,h as Case_019_examples_remove_first_of_two_empty,v as Case_020_examples_remove_first_of_two_objects,g as Case_021_examples_replace_empty_with_object,u as Case_022_examples_replace_object_with_empty,C as Case_023_examples_replace_object_with_object,ot as __namedExportsOrder,st as default};
