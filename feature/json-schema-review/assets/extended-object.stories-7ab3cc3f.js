import{c as O}from"./diffs-samples-cases-1df1f3ae.js";import{c as D,d as P,j as J,b as A}from"./json-schema-diffs-utils-cd3f3322.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3ee36e9c.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-343f36de.js";import"./DdlTableDiffsViewer-daaefaef.js";/* empty css              */import"./DdlTableViewer-d7742d03.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-8acbbf55.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const F=`type: object
description: Sample object
properties:
  name:
    type: string

`,B=`type: object
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

`,V=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties: true

`,W=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties:
  type: string

`,k=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,q=`type: object
description: Sample object
properties:
  name:
    type: string

`,w=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^y:
    type: integer

`,z=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/object/001-additional-properties-false-added/before.yaml":F,"../../../../samples/json-schema-diffs/type-changes/extended/object/002-additional-properties-true-added/before.yaml":B,"../../../../samples/json-schema-diffs/type-changes/extended/object/003-additional-properties-schema-added/before.yaml":E,"../../../../samples/json-schema-diffs/type-changes/extended/object/004-pattern-properties-added/before.yaml":I,"../../../../samples/json-schema-diffs/type-changes/extended/object/005-pattern-properties-removed/before.yaml":T,"../../../../samples/json-schema-diffs/type-changes/extended/object/006-pattern-properties-replaced/before.yaml":N}),G=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/object/001-additional-properties-false-added/after.yaml":R,"../../../../samples/json-schema-diffs/type-changes/extended/object/002-additional-properties-true-added/after.yaml":V,"../../../../samples/json-schema-diffs/type-changes/extended/object/003-additional-properties-schema-added/after.yaml":W,"../../../../samples/json-schema-diffs/type-changes/extended/object/004-pattern-properties-added/after.yaml":k,"../../../../samples/json-schema-diffs/type-changes/extended/object/005-pattern-properties-removed/after.yaml":q,"../../../../samples/json-schema-diffs/type-changes/extended/object/006-pattern-properties-replaced/after.yaml":w}),H=O(z,G),K=D(H),ce={title:"JSON Schema Diffs Suite/Object Properties And Additional Properties/Extended Object",component:P,argTypes:J},e=A(P,K),t=e("001-additional-properties-false-added"),r=e("002-additional-properties-true-added"),a=e("003-additional-properties-schema-added"),s=e("004-pattern-properties-added"),o=e("005-pattern-properties-removed"),p=e("006-pattern-properties-replaced");var n,i,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("001-additional-properties-false-added")',...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,_;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("002-additional-properties-true-added")',...(_=(m=r.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var l,y,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("003-additional-properties-schema-added")',...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,j,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("004-pattern-properties-added")',...(g=(j=s.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,h,u;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("005-pattern-properties-removed")',...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var C,v,x;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("006-pattern-properties-replaced")',...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const me=["Case_001_additional_properties_false_added","Case_002_additional_properties_true_added","Case_003_additional_properties_schema_added","Case_004_pattern_properties_added","Case_005_pattern_properties_removed","Case_006_pattern_properties_replaced"];export{t as Case_001_additional_properties_false_added,r as Case_002_additional_properties_true_added,a as Case_003_additional_properties_schema_added,s as Case_004_pattern_properties_added,o as Case_005_pattern_properties_removed,p as Case_006_pattern_properties_replaced,me as __namedExportsOrder,ce as default};
