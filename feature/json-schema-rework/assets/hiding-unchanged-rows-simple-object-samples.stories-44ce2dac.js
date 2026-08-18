import{c as h}from"./diffs-samples-cases-1df1f3ae.js";import{c as l,J as _,j as f,a as g}from"./json-schema-diffs-utils-bded2f8c.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-1a169bea.js";import"./DiffBadge-6dc75daf.js";import"./IndexesNodeViewer-8dcf945e.js";import"./DdlTableDiffsViewer-7d6cc7e0.js";/* empty css              */import"./DdlTableViewer-11315f76.js";import"./GraphQLOperationDiffViewer-eeefb1fb.js";import"./GraphPropNodeViewer-aa6a1051.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-4e1a959d.js";import"./preprocess-3e84666d.js";import"./parse-yaml-source-d821fde9.js";import"./public-api-d6a34651.js";const b=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`,S=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
`,u=`type: object
description: Before root description
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`,j=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop6:
    type: string
    description: Sixth property (added)
  prop7:
    type: integer
    description: Seventh property (added)
`,v=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`,F=`type: object
description: After root description
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`,w=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.1-two-added-three-removed/before.yaml":b,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.2-second-and-fifth-added-others-unchanged/before.yaml":S,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.3-root-description-replaced/before.yaml":u}),C=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.1-two-added-three-removed/after.yaml":j,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.2-second-and-fifth-added-others-unchanged/after.yaml":v,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.3-root-description-replaced/after.yaml":F}),T=h(w,C),D=l(T),M={title:"JSON Schema Diffs Suite/Hiding Unchanged Rows Simple Object Samples",component:_,argTypes:f},o=g(_,D),e=o("1.1-two-added-three-removed"),r=o("1.2-second-and-fifth-added-others-unchanged"),t=o("1.3-root-description-replaced");var p,n,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("1.1-two-added-three-removed")',...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("1.2-second-and-fifth-added-others-unchanged")',...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var a,m,y;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'createCaseStory("1.3-root-description-replaced")',...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const P=["Case_1_1_two_added_three_removed","Case_1_2_second_and_fifth_added_others_unchanged","Case_1_3_root_description_replaced"];export{e as Case_1_1_two_added_three_removed,r as Case_1_2_second_and_fifth_added_others_unchanged,t as Case_1_3_root_description_replaced,P as __namedExportsOrder,M as default};
