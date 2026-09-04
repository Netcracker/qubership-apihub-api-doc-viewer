import{c as S}from"./diffs-samples-cases-1df1f3ae.js";import{c as b,J as y,j as h,a as C}from"./json-schema-diffs-utils-361af4d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-2d7bd233.js";import"./DiffBadge-4d4a1c37.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./preprocess-c9227d17.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const v=`type: string
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

`,J=`type: string
description: Sample string description
default: alpha

`,O=`type: string
description: Sample string description

`,F=`type: string
description: Sample string description
default: beta

`,B=`type: boolean
description: Sample boolean
default: false

`,E=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/default/001-default-added-string/before.yaml":v,"../../../../samples/json-schema-diffs/type-changes/extended/default/002-default-removed-string/before.yaml":j,"../../../../samples/json-schema-diffs/type-changes/extended/default/003-default-replaced-string/before.yaml":x,"../../../../samples/json-schema-diffs/type-changes/extended/default/004-default-replaced-boolean/before.yaml":D}),I=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/default/001-default-added-string/after.yaml":J,"../../../../samples/json-schema-diffs/type-changes/extended/default/002-default-removed-string/after.yaml":O,"../../../../samples/json-schema-diffs/type-changes/extended/default/003-default-replaced-string/after.yaml":F,"../../../../samples/json-schema-diffs/type-changes/extended/default/004-default-replaced-boolean/after.yaml":B}),T=S(E,I),A=b(T),Y={title:"JSON Schema Diffs Suite/Extended Default",component:y,argTypes:h},r=C(y,A),e=r("001-default-added-string"),a=r("002-default-removed-string"),t=r("003-default-replaced-string"),s=r("004-default-replaced-boolean");var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("001-default-added-string")',...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("002-default-removed-string")',...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("003-default-replaced-string")',...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var _,g,u;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("004-default-replaced-boolean")',...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Z=["Case_001_default_added_string","Case_002_default_removed_string","Case_003_default_replaced_string","Case_004_default_replaced_boolean"];export{e as Case_001_default_added_string,a as Case_002_default_removed_string,t as Case_003_default_replaced_string,s as Case_004_default_replaced_boolean,Z as __namedExportsOrder,Y as default};
