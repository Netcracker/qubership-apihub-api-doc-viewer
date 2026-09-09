import{c as D}from"./diffs-samples-cases-1df1f3ae.js";import{c as J,J as P,j as O,a as F}from"./json-schema-diffs-utils-ca2d9bb7.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-f056b99e.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-449194d6.js";import"./GraphPropNodeViewer-9f9c17b4.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-b5e727b5.js";import"./preprocess-71f62f03.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const B=`type: object
description: Sample object
properties:
  name:
    type: string

`,E=`type: object
description: Sample object
properties:
  name:
    type: string

`,I=`type: object
description: Sample object
properties:
  name:
    type: string

`,T=`type: object
description: Sample object
properties:
  name:
    type: string

`,A=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,N=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,R=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties: false

`,k=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties: true

`,q=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties:
  type: string

`,w=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,z=`type: object
description: Sample object
properties:
  name:
    type: string

`,G=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^y:
    type: integer

`,H=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/object/001-additional-properties-false-added/before.yaml":B,"../../../../samples/json-schema-diffs/type-changes/extended/object/002-additional-properties-true-added/before.yaml":E,"../../../../samples/json-schema-diffs/type-changes/extended/object/003-additional-properties-schema-added/before.yaml":I,"../../../../samples/json-schema-diffs/type-changes/extended/object/004-pattern-properties-added/before.yaml":T,"../../../../samples/json-schema-diffs/type-changes/extended/object/005-pattern-properties-removed/before.yaml":A,"../../../../samples/json-schema-diffs/type-changes/extended/object/006-pattern-properties-replaced/before.yaml":N}),K=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/object/001-additional-properties-false-added/after.yaml":R,"../../../../samples/json-schema-diffs/type-changes/extended/object/002-additional-properties-true-added/after.yaml":k,"../../../../samples/json-schema-diffs/type-changes/extended/object/003-additional-properties-schema-added/after.yaml":q,"../../../../samples/json-schema-diffs/type-changes/extended/object/004-pattern-properties-added/after.yaml":w,"../../../../samples/json-schema-diffs/type-changes/extended/object/005-pattern-properties-removed/after.yaml":z,"../../../../samples/json-schema-diffs/type-changes/extended/object/006-pattern-properties-replaced/after.yaml":G}),L=D(H,K),M=J(L),de={title:"JSON Schema Diffs Suite/Extended Object",component:P,argTypes:O},e=F(P,M),t=e("001-additional-properties-false-added"),r=e("002-additional-properties-true-added"),a=e("003-additional-properties-schema-added"),s=e("004-pattern-properties-added"),o=e("005-pattern-properties-removed"),p=e("006-pattern-properties-replaced");var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("001-additional-properties-false-added")',...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,_;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("002-additional-properties-true-added")',...(_=(m=r.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var l,y,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("003-additional-properties-schema-added")',...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,j,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("004-pattern-properties-added")',...(g=(j=s.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,h,u;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("005-pattern-properties-removed")',...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var C,v,x;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("006-pattern-properties-replaced")',...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const ce=["Case_001_additional_properties_false_added","Case_002_additional_properties_true_added","Case_003_additional_properties_schema_added","Case_004_pattern_properties_added","Case_005_pattern_properties_removed","Case_006_pattern_properties_replaced"];export{t as Case_001_additional_properties_false_added,r as Case_002_additional_properties_true_added,a as Case_003_additional_properties_schema_added,s as Case_004_pattern_properties_added,o as Case_005_pattern_properties_removed,p as Case_006_pattern_properties_replaced,ce as __namedExportsOrder,de as default};
