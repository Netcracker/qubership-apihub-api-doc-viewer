import{c as I}from"./diffs-samples-cases-1df1f3ae.js";import{c as A,J as B,j as E,a as R}from"./json-schema-diffs-utils-ed4cf5c8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-a38e1cb0.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-0a2e8329.js";import"./DdlTableDiffsViewer-4e1c09c6.js";/* empty css              */import"./DdlTableViewer-94113168.js";import"./GraphQLOperationDiffViewer-9273ef44.js";import"./GraphPropNodeViewer-5195dcd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e2e598a2.js";import"./preprocess-1affe354.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const k=`type: string
description: Sample string description

`,z=`type: string
description: Sample string description
readOnly: true

`,G=`type: string
description: Sample string description

`,H=`type: string
description: Sample string description
writeOnly: true

`,K=`type: string
description: Sample string description

`,L=`type: string
description: Sample string description
deprecated: true

`,M=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property

`,P=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property
required:
  - name

`,Q=`type: string
description: Sample string description
readOnly: true

`,U=`type: string
description: Sample string description

`,V=`type: string
description: Sample string description
writeOnly: true

`,W=`type: string
description: Sample string description

`,X=`type: string
description: Sample string description
deprecated: true

`,Y=`type: string
description: Sample string description

`,Z=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property
required:
  - name

`,$=`type: object
description: Object with one string property
properties:
  name:
    type: string
    description: Name property

`,ee=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-flags/001-read-only-added/before.yaml":k,"../../../../samples/json-schema-diffs/type-changes/type-flags/002-read-only-removed/before.yaml":z,"../../../../samples/json-schema-diffs/type-changes/type-flags/003-write-only-added/before.yaml":G,"../../../../samples/json-schema-diffs/type-changes/type-flags/004-write-only-removed/before.yaml":H,"../../../../samples/json-schema-diffs/type-changes/type-flags/005-deprecated-added/before.yaml":K,"../../../../samples/json-schema-diffs/type-changes/type-flags/006-deprecated-removed/before.yaml":L,"../../../../samples/json-schema-diffs/type-changes/type-flags/007-required-added/before.yaml":M,"../../../../samples/json-schema-diffs/type-changes/type-flags/008-required-removed/before.yaml":P}),re=Object.assign({"../../../../samples/json-schema-diffs/type-changes/type-flags/001-read-only-added/after.yaml":Q,"../../../../samples/json-schema-diffs/type-changes/type-flags/002-read-only-removed/after.yaml":U,"../../../../samples/json-schema-diffs/type-changes/type-flags/003-write-only-added/after.yaml":V,"../../../../samples/json-schema-diffs/type-changes/type-flags/004-write-only-removed/after.yaml":W,"../../../../samples/json-schema-diffs/type-changes/type-flags/005-deprecated-added/after.yaml":X,"../../../../samples/json-schema-diffs/type-changes/type-flags/006-deprecated-removed/after.yaml":Y,"../../../../samples/json-schema-diffs/type-changes/type-flags/007-required-added/after.yaml":Z,"../../../../samples/json-schema-diffs/type-changes/type-flags/008-required-removed/after.yaml":$}),se=I(ee,re),te=A(se),be={title:"JSON Schema Diffs Suite/Type Flags Samples",component:B,argTypes:E},e=R(B,te),r=e("001-read-only-added"),s=e("002-read-only-removed"),t=e("003-write-only-added"),a=e("004-write-only-removed"),o=e("005-deprecated-added"),n=e("006-deprecated-removed"),d=e("007-required-added"),p=e("008-required-removed");var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:'createCaseStory("001-read-only-added")',...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var _,l,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("002-read-only-removed")',...(y=(l=s.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var g,f,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("003-write-only-added")',...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var S,h,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("004-write-only-removed")',...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,j,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("005-deprecated-added")',...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var w,q,O;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("006-deprecated-removed")',...(O=(q=n.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var D,J,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("007-required-added")',...(N=(J=d.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var F,T,x;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("008-required-removed")',...(x=(T=p.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const je=["Case_001_read_only_added","Case_002_read_only_removed","Case_003_write_only_added","Case_004_write_only_removed","Case_005_deprecated_added","Case_006_deprecated_removed","Case_007_required_added","Case_008_required_removed"];export{r as Case_001_read_only_added,s as Case_002_read_only_removed,t as Case_003_write_only_added,a as Case_004_write_only_removed,o as Case_005_deprecated_added,n as Case_006_deprecated_removed,d as Case_007_required_added,p as Case_008_required_removed,je as __namedExportsOrder,be as default};
