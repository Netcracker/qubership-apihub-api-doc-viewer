import{c as S}from"./diffs-samples-cases-91c2d1e6.js";import{d as y,j as b,a as h}from"./json-schema-diffs-utils-1d611495.js";import{b as C}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-dfce008a.js";import"./UxBadge-a3d5708d.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./preprocess-fae22708.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const v=`type: string
description: Sample string description

`,j=`type: string
description: Sample string description
default: alpha

`,x=`type: string
description: Sample string description
default: alpha

`,D=`type: boolean
description: Sample boolean
default: true

`,O=`type: string
description: Sample string description
default: alpha

`,F=`type: string
description: Sample string description

`,J=`type: string
description: Sample string description
default: beta

`,B=`type: boolean
description: Sample boolean
default: false

`,E=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/default/001-default-added-string/before.yaml":v,"../../../../samples/json-schema-diffs/type-changes/extended/default/002-default-removed-string/before.yaml":j,"../../../../samples/json-schema-diffs/type-changes/extended/default/003-default-replaced-string/before.yaml":x,"../../../../samples/json-schema-diffs/type-changes/extended/default/004-default-replaced-boolean/before.yaml":D}),I=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/default/001-default-added-string/after.yaml":O,"../../../../samples/json-schema-diffs/type-changes/extended/default/002-default-removed-string/after.yaml":F,"../../../../samples/json-schema-diffs/type-changes/extended/default/003-default-replaced-string/after.yaml":J,"../../../../samples/json-schema-diffs/type-changes/extended/default/004-default-replaced-boolean/after.yaml":B}),T=S(E,I),A=C(T),$={title:"JSON Schema Diffs Suite/Extended Default",component:y,argTypes:b},r=h(y,A),e=r("001-default-added-string"),a=r("002-default-removed-string"),t=r("003-default-replaced-string"),s=r("004-default-replaced-boolean");var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("001-default-added-string")',...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("002-default-removed-string")',...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("003-default-replaced-string")',...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var _,g,u;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("004-default-replaced-boolean")',...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const ee=["Case_001_default_added_string","Case_002_default_removed_string","Case_003_default_replaced_string","Case_004_default_replaced_boolean"];export{e as Case_001_default_added_string,a as Case_002_default_removed_string,t as Case_003_default_replaced_string,s as Case_004_default_replaced_boolean,ee as __namedExportsOrder,$ as default};
