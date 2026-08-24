import{c as N}from"./diffs-samples-cases-1df1f3ae.js";import{c as E,J as I,j as H,a as R}from"./json-schema-diffs-utils-e9e555e8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-36fcf1f5.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-ccc41fa8.js";import"./DdlTableDiffsViewer-28175534.js";/* empty css              */import"./DdlTableViewer-f58f7011.js";import"./GraphQLOperationDiffViewer-9273ef44.js";import"./GraphPropNodeViewer-5195dcd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e2e598a2.js";import"./preprocess-7f22aeee.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";const U=`type: object
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
`,k=`type: object
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
`,q=`type: object
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
`,z=`type: object
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
        description: First nested property — before description
      nested2:
        type: string
        description: Second nested property
        enum:
          - alpha
          - beta
          - gamma
      nested3:
        type: integer
        description: Third nested property
      nested4:
        type: boolean
        description: Fourth nested property
        default: false
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
`,P=`type: object
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
      nested1:
        type: string
        description: First nested property of prop4
      nested2:
        type: number
        description: Second nested property of prop4
  prop5:
    type: boolean
    description: Fifth primitive property
`,V=`type: object
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
`,W=`type: object
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
`,X=`type: object
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
`,Y=`type: object
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
`,Z=`type: object
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
`,$=`type: object
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
        description: First nested property — after description
      nested2:
        type: string
        description: Second nested property
        enum:
          - alpha
          - beta
          - gamma
          - delta
      nested3:
        type: integer
        description: Third nested property
        minimum: 0
        maximum: 100
      nested4:
        type: boolean
        description: Fourth nested property
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
`,ee=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.1-root-description-changed/before.yaml":U,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.2-primitive-props-added/before.yaml":k,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.3-nested-object-props-added/before.yaml":q,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.4-primitive-added-nested-removed/before.yaml":z,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.5-nested-prop-added-and-removed/before.yaml":G,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6-nested-prop-added-object-removed/before.yaml":K,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.7-object-added-nested-prop-removed/before.yaml":L,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.8-nested-property-metadata-and-constraints-changed/before.yaml":M}),ne=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.1-root-description-changed/after.yaml":P,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.2-primitive-props-added/after.yaml":Q,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.3-nested-object-props-added/after.yaml":V,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.4-primitive-added-nested-removed/after.yaml":W,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.5-nested-prop-added-and-removed/after.yaml":X,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6-nested-prop-added-object-removed/after.yaml":Y,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.7-object-added-nested-prop-removed/after.yaml":Z,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.8-nested-property-metadata-and-constraints-changed/after.yaml":$}),te=N(ee,ne),pe=E(te),ue={title:"JSON Schema Diffs Suite (Hiding Unchanged Nodes)/Complex Object Samples",component:I,argTypes:H},e=R(I,pe),n=e("2.1-root-description-changed"),t=e("2.2-primitive-props-added"),p=e("2.3-nested-object-props-added"),r=e("2.4-primitive-added-nested-removed"),o=e("2.5-nested-prop-added-and-removed"),i=e("2.6-nested-prop-added-object-removed"),s=e("2.7-object-added-nested-prop-removed"),d=e("2.8-nested-property-metadata-and-constraints-changed");var c,a,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("2.1-root-description-changed")',...(y=(a=n.parameters)==null?void 0:a.docs)==null?void 0:y.source}}};var m,b,_;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("2.2-primitive-props-added")',...(_=(b=t.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var g,f,h;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("2.3-nested-object-props-added")',...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var l,j,v;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("2.4-primitive-added-nested-removed")',...(v=(j=r.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var u,F,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("2.5-nested-prop-added-and-removed")',...(S=(F=o.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var C,x,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("2.6-nested-prop-added-object-removed")',...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var T,D,J;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("2.7-object-added-nested-prop-removed")',...(J=(D=s.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var O,B,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("2.8-nested-property-metadata-and-constraints-changed")',...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const Fe=["Case_2_1_root_description_changed","Case_2_2_primitive_props_added","Case_2_3_nested_object_props_added","Case_2_4_primitive_added_nested_removed","Case_2_5_nested_prop_added_and_removed","Case_2_6_nested_prop_added_object_removed","Case_2_7_object_added_nested_prop_removed","Case_2_8_nested_property_metadata_and_constraints_changed"];export{n as Case_2_1_root_description_changed,t as Case_2_2_primitive_props_added,p as Case_2_3_nested_object_props_added,r as Case_2_4_primitive_added_nested_removed,o as Case_2_5_nested_prop_added_and_removed,i as Case_2_6_nested_prop_added_object_removed,s as Case_2_7_object_added_nested_prop_removed,d as Case_2_8_nested_property_metadata_and_constraints_changed,Fe as __namedExportsOrder,ue as default};
