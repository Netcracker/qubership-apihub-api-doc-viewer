import{c as ee}from"./diffs-samples-cases-1df1f3ae.js";import{c as re,J as $,j as se,a as te}from"./json-schema-diffs-utils-66c82383.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-dc37219f.js";import"./DiffBadge-ceca5443.js";import"./IndexesNodeViewer-94209342.js";import"./DdlTableDiffsViewer-53cd81ea.js";/* empty css              */import"./DdlTableViewer-667c6095.js";import"./GraphQLOperationDiffViewer-5cbdc4b9.js";import"./GraphPropNodeViewer-587f63f5.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f77a6d51.js";import"./preprocess-d9011258.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const ae=`type: string
description: Sample string description

`,ne=`type: string
description: Sample string description
readOnly: true

`,oe=`type: string
description: Sample string description

`,de=`type: string
description: Sample string description
writeOnly: true

`,ie=`type: string
description: Sample string description

`,pe=`type: string
description: Sample string description
deprecated: true

`,ce=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property

`,me=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property
required:
  - name

`,_e=`type: string
description: Sample string description
readOnly: true

`,le=`type: string
description: Sample string description
writeOnly: true

`,ye=`type: string
description: Sample string description
deprecated: true

`,ge=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property
required:
  - name

`,fe=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property

`,ue=`type: string
description: Sample string description
readOnly: true

`,he=`type: string
description: Sample string description

`,Se=`type: string
description: Sample string description
writeOnly: true

`,be=`type: string
description: Sample string description

`,ve=`type: string
description: Sample string description
deprecated: true

`,je=`type: string
description: Sample string description

`,Ce=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property
required:
  - name

`,we=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property

`,qe=`type: string
description: Sample string description
readOnly: true

`,Oe=`type: string
description: Sample string description
writeOnly: true

`,Ne=`type: string
description: Sample string description
deprecated: true

`,De=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property
required:
  - name

`,Je=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property

`,Fe=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-flags/001-read-only-added/before.yaml":ae,"../../../../samples/json-schema-diffs/type-changes/type-flags/002-read-only-removed/before.yaml":ne,"../../../../samples/json-schema-diffs/type-changes/type-flags/003-write-only-added/before.yaml":oe,"../../../../samples/json-schema-diffs/type-changes/type-flags/004-write-only-removed/before.yaml":de,"../../../../samples/json-schema-diffs/type-changes/type-flags/005-deprecated-added/before.yaml":ie,"../../../../samples/json-schema-diffs/type-changes/type-flags/006-deprecated-removed/before.yaml":pe,"../../../../samples/json-schema-diffs/type-changes/type-flags/007-required-added/before.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/type-flags/008-required-removed/before.yaml":me,"../../../../samples/json-schema-diffs/type-changes/type-flags/009-unchanged-read-only/before.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/type-flags/010-unchanged-write-only/before.yaml":le,"../../../../samples/json-schema-diffs/type-changes/type-flags/011-unchanged-deprecated/before.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/type-flags/012-unchanged-required-field/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/type-flags/013-unchanged-required-optional/before.yaml":fe}),Te=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-flags/001-read-only-added/after.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/type-flags/002-read-only-removed/after.yaml":he,"../../../../samples/json-schema-diffs/type-changes/type-flags/003-write-only-added/after.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/type-flags/004-write-only-removed/after.yaml":be,"../../../../samples/json-schema-diffs/type-changes/type-flags/005-deprecated-added/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/type-flags/006-deprecated-removed/after.yaml":je,"../../../../samples/json-schema-diffs/type-changes/type-flags/007-required-added/after.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/type-flags/008-required-removed/after.yaml":we,"../../../../samples/json-schema-diffs/type-changes/type-flags/009-unchanged-read-only/after.yaml":qe,"../../../../samples/json-schema-diffs/type-changes/type-flags/010-unchanged-write-only/after.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/type-flags/011-unchanged-deprecated/after.yaml":Ne,"../../../../samples/json-schema-diffs/type-changes/type-flags/012-unchanged-required-field/after.yaml":De,"../../../../samples/json-schema-diffs/type-changes/type-flags/013-unchanged-required-optional/after.yaml":Je}),xe=ee(Fe,Te),Be=re(xe),Ye={title:"JSON Schema Diffs Suite/Type Flags Samples",component:$,argTypes:se},e=te($,Be),r=e("001-read-only-added"),s=e("002-read-only-removed"),t=e("003-write-only-added"),a=e("004-write-only-removed"),n=e("005-deprecated-added"),o=e("006-deprecated-removed"),d=e("007-required-added"),i=e("008-required-removed"),p=e("009-unchanged-read-only"),c=e("010-unchanged-write-only"),m=e("011-unchanged-deprecated"),_=e("012-unchanged-required-field"),l=e("013-unchanged-required-optional");var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("001-read-only-added")',...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,h,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("002-read-only-removed")',...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,v,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("003-write-only-added")',...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var C,w,q;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("004-write-only-removed")',...(q=(w=a.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var O,N,D;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("005-deprecated-added")',...(D=(N=n.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var J,F,T;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("006-deprecated-removed")',...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var x,B,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("007-required-added")',...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var A,E,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("008-required-removed")',...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var k,z,G;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("009-unchanged-read-only")',...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,K,L;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("010-unchanged-write-only")',...(L=(K=c.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,P,Q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("011-unchanged-deprecated")',...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,V,W;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("012-unchanged-required-field")',...(W=(V=_.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("013-unchanged-required-optional")',...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ze=["Case_001_read_only_added","Case_002_read_only_removed","Case_003_write_only_added","Case_004_write_only_removed","Case_005_deprecated_added","Case_006_deprecated_removed","Case_007_required_added","Case_008_required_removed","Case_009_unchanged_read_only","Case_010_unchanged_write_only","Case_011_unchanged_deprecated","Case_012_unchanged_required_field","Case_013_unchanged_required_optional"];export{r as Case_001_read_only_added,s as Case_002_read_only_removed,t as Case_003_write_only_added,a as Case_004_write_only_removed,n as Case_005_deprecated_added,o as Case_006_deprecated_removed,d as Case_007_required_added,i as Case_008_required_removed,p as Case_009_unchanged_read_only,c as Case_010_unchanged_write_only,m as Case_011_unchanged_deprecated,_ as Case_012_unchanged_required_field,l as Case_013_unchanged_required_optional,Ze as __namedExportsOrder,Ye as default};
