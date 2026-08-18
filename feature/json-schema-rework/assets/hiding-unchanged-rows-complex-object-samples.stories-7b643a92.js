import{c as O}from"./diffs-samples-cases-1df1f3ae.js";import{c as B,J,j as A,a as I}from"./json-schema-diffs-utils-9774382b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-3974f7d2.js";import"./DiffBadge-6dc75daf.js";import"./IndexesNodeViewer-1e5cb18e.js";import"./DdlTableDiffsViewer-bfceda4b.js";/* empty css              */import"./DdlTableViewer-cd7fbe82.js";import"./GraphQLOperationDiffViewer-eeefb1fb.js";import"./GraphPropNodeViewer-aa6a1051.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-4e1a959d.js";import"./preprocess-3e84666d.js";import"./parse-yaml-source-d821fde9.js";import"./public-api-d6a34651.js";const R=`type: object
description: Before root description
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,E=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
`,H=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop3:
    type: integer
    description: Third primitive property
  prop5:
    type: boolean
    description: Fifth primitive property
`,N=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
`,U=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,k=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,q=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,z=`type: object
description: After root description
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,G=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,K=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,L=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop3:
    type: integer
    description: Third primitive property
  prop5:
    type: boolean
    description: Fifth primitive property
`,M=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,P=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop5:
    type: boolean
    description: Fifth primitive property
`,Q=`type: object
description: Complex object for hiding-unchanged-rows samples
properties:
  prop1:
    type: string
    description: First primitive property
  prop2:
    type: object
    description: Second property — nested object
    properties:
      nested1:
        type: string
        description: First nested property of prop2
      nested2:
        type: integer
        description: Second nested property of prop2
      nested3:
        type: boolean
        description: Third nested property of prop2
  prop3:
    type: integer
    description: Third primitive property
  prop4:
    type: object
    description: Fourth property — nested object
    properties:
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,V=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.1-root-description-changed/before.yaml":R,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.2-primitive-props-added/before.yaml":E,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.3-nested-object-props-added/before.yaml":H,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.4-primitive-added-nested-removed/before.yaml":N,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.5-nested-prop-added-and-removed/before.yaml":U,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6-nested-prop-added-object-removed/before.yaml":k,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.7-object-added-nested-prop-removed/before.yaml":q}),W=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.1-root-description-changed/after.yaml":z,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.2-primitive-props-added/after.yaml":G,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.3-nested-object-props-added/after.yaml":K,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.4-primitive-added-nested-removed/after.yaml":L,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.5-nested-prop-added-and-removed/after.yaml":M,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6-nested-prop-added-object-removed/after.yaml":P,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.7-object-added-nested-prop-removed/after.yaml":Q}),X=O(V,W),Y=B(X),ge={title:"JSON Schema Diffs Suite/Hiding Unchanged Rows Complex Object Samples",component:J,argTypes:A},e=I(J,Y),p=e("2.1-root-description-changed"),r=e("2.2-primitive-props-added"),t=e("2.3-nested-object-props-added"),n=e("2.4-primitive-added-nested-removed"),o=e("2.5-nested-prop-added-and-removed"),i=e("2.6-nested-prop-added-object-removed"),s=e("2.7-object-added-nested-prop-removed");var d,c,a;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:'createCaseStory("2.1-root-description-changed")',...(a=(c=p.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var y,m,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("2.2-primitive-props-added")',...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var _,g,f;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("2.3-nested-object-props-added")',...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var l,h,j;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("2.4-primitive-added-nested-removed")',...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var v,u,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("2.5-nested-prop-added-and-removed")',...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var F,C,x;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("2.6-nested-prop-added-object-removed")',...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var w,T,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("2.7-object-added-nested-prop-removed")',...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const fe=["Case_2_1_root_description_changed","Case_2_2_primitive_props_added","Case_2_3_nested_object_props_added","Case_2_4_primitive_added_nested_removed","Case_2_5_nested_prop_added_and_removed","Case_2_6_nested_prop_added_object_removed","Case_2_7_object_added_nested_prop_removed"];export{p as Case_2_1_root_description_changed,r as Case_2_2_primitive_props_added,t as Case_2_3_nested_object_props_added,n as Case_2_4_primitive_added_nested_removed,o as Case_2_5_nested_prop_added_and_removed,i as Case_2_6_nested_prop_added_object_removed,s as Case_2_7_object_added_nested_prop_removed,fe as __namedExportsOrder,ge as default};
