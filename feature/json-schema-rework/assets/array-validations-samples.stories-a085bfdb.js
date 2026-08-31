import{c as G,a as H}from"./json-schema-samples-cases-65f7b341.js";import{j as K,c as L}from"./json-schema-samples-common-5d3fdade.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-d419f785.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-4998c03c.js";import"./DdlTableDiffsViewer-013fb4a5.js";/* empty css              */import"./DdlTableViewer-07ef28f2.js";import"./GraphQLOperationDiffViewer-ad5e8f40.js";import"./GraphPropNodeViewer-47a3eb3c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5f3933cf.js";const P=`type: array
items:
  type: string
default:
  - alpha
  - beta
title: "[default] Arbitrary array matching items schema"

`,Q=`type: array
items:
  type: string
example:
  - alpha
  - beta
  - gamma
title: "[example] One arbitrary array as example"

`,R=`type: array
items:
  type: string
examples:
  - - alpha
  - - alpha
    - beta
title: "[examples] Two example arrays matching items schema"

`,U=`type: array
items:
  type: string
minItems: 0
title: "[items-count] minItems = 0"

`,W=`type: array
items:
  type: string
minItems: 2
title: "[items-count] minItems = 2"

`,X=`type: array
items:
  type: string
maxItems: 5
title: "[items-count] maxItems = 5"

`,Y=`type: array
items:
  type: string
minItems: 0
maxItems: 5
title: "[items-count] minItems = 0, maxItems = 5"

`,Z=`type: array
items:
  type: string
minItems: 2
maxItems: 5
title: "[items-count] minItems = 2, maxItems = 5"

`,$=`type: array
items:
  type: string
uniqueItems: false
title: "[unique-items] uniqueItems = false"

`,ee=`type: array
items:
  type: string
uniqueItems: true
title: "[unique-items] uniqueItems = true"

`,ae=Object.assign({"../../../../samples/json-schema/array-validations/001-default-arbitrary-array/sample.yaml":P,"../../../../samples/json-schema/array-validations/002-example-arbitrary-array/sample.yaml":Q,"../../../../samples/json-schema/array-validations/003-examples-two-items/sample.yaml":R,"../../../../samples/json-schema/array-validations/004-min-items-0/sample.yaml":U,"../../../../samples/json-schema/array-validations/005-min-items-2/sample.yaml":W,"../../../../samples/json-schema/array-validations/006-max-items-5/sample.yaml":X,"../../../../samples/json-schema/array-validations/007-min-items-0-max-items-5/sample.yaml":Y,"../../../../samples/json-schema/array-validations/008-min-items-2-max-items-5/sample.yaml":Z,"../../../../samples/json-schema/array-validations/009-unique-items-false/sample.yaml":$,"../../../../samples/json-schema/array-validations/010-unique-items-true/sample.yaml":ee}),se=G(ae),te=H(se),e=L(te),be={...K,id:"json-schema-suite-array-validations",title:"JSON Schema Suite/Array  Validations"},a=e("001-default-arbitrary-array"),s=e("002-example-arbitrary-array"),t=e("003-examples-two-items"),r=e("004-min-items-0"),m=e("005-min-items-2"),i=e("006-max-items-5"),n=e("007-min-items-0-max-items-5"),o=e("008-min-items-2-max-items-5"),_=e("009-unique-items-false"),c=e("010-unique-items-true");var p,l,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("001-default-arbitrary-array")',...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,d,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("002-example-arbitrary-array")',...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,C,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("003-examples-two-items")',...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,h,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("004-min-items-0")',...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,f,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("005-min-items-2")',...(q=(f=m.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var j,w,O;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("006-max-items-5")',...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,J,A;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("007-min-items-0-max-items-5")',...(A=(J=n.parameters)==null?void 0:J.docs)==null?void 0:A.source}}};var F,E,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("008-min-items-2-max-items-5")',...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,T,V;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("009-unique-items-false")',...(V=(T=_.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var k,z,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("010-unique-items-true")',...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const he=["Case_001_default_arbitrary_array","Case_002_example_arbitrary_array","Case_003_examples_two_items","Case_004_min_items_0","Case_005_min_items_2","Case_006_max_items_5","Case_007_min_items_0_max_items_5","Case_008_min_items_2_max_items_5","Case_009_unique_items_false","Case_010_unique_items_true"];export{a as Case_001_default_arbitrary_array,s as Case_002_example_arbitrary_array,t as Case_003_examples_two_items,r as Case_004_min_items_0,m as Case_005_min_items_2,i as Case_006_max_items_5,n as Case_007_min_items_0_max_items_5,o as Case_008_min_items_2_max_items_5,_ as Case_009_unique_items_false,c as Case_010_unique_items_true,he as __namedExportsOrder,be as default};
