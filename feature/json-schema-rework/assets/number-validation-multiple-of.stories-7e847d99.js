import{c as u}from"./diffs-samples-cases-91c2d1e6.js";import{d as f,j as _,a as b}from"./json-schema-diffs-utils-f1bfafd5.js";import{b as y}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-908de172.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./preprocess-39b8762b.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const S=`type: number
description: Sample number

`,g=`type: number
description: Sample number
multipleOf: 0.5

`,h=`type: number
description: Sample number
multipleOf: 0.5

`,v=`type: number
description: Sample number
multipleOf: 0.5

`,C=`type: number
description: Sample number

`,j=`type: number
description: Sample number
multipleOf: 2

`,O=Object.assign({"../../../../samples/json-schema-diffs/type-changes/number-validation/multiple-of/001-multiple-of-added/before.yaml":S,"../../../../samples/json-schema-diffs/type-changes/number-validation/multiple-of/002-multiple-of-removed/before.yaml":g,"../../../../samples/json-schema-diffs/type-changes/number-validation/multiple-of/003-multiple-of-replaced/before.yaml":h}),D=Object.assign({"../../../../samples/json-schema-diffs/type-changes/number-validation/multiple-of/001-multiple-of-added/after.yaml":v,"../../../../samples/json-schema-diffs/type-changes/number-validation/multiple-of/002-multiple-of-removed/after.yaml":C,"../../../../samples/json-schema-diffs/type-changes/number-validation/multiple-of/003-multiple-of-replaced/after.yaml":j}),F=u(O,D),J=y(F),P={title:"JSON Schema Diffs Suite/Number Validation/Multiple Of",component:f,argTypes:_},o=b(f,J),e=o("001-multiple-of-added"),t=o("002-multiple-of-removed"),a=o("003-multiple-of-replaced");var m,r,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("001-multiple-of-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,p,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("002-multiple-of-removed")',...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("003-multiple-of-replaced")',...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Q=["Case_001_multiple_of_added","Case_002_multiple_of_removed","Case_003_multiple_of_replaced"];export{e as Case_001_multiple_of_added,t as Case_002_multiple_of_removed,a as Case_003_multiple_of_replaced,Q as __namedExportsOrder,P as default};
