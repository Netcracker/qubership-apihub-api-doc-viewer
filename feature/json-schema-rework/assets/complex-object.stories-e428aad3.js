import{c as G}from"./diffs-samples-cases-91c2d1e6.js";import{d as U,j as L,c as R}from"./json-schema-diffs-utils-f1bfafd5.js";import{b as Y}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-908de172.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./preprocess-39b8762b.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const k=`type: object
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
`,q=`type: object
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
`,z=`type: object
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
`,K=`type: object
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
`,W=`type: object
description: Object with three string properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: string
    description: Third property
`,X=`type: object
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
      nested1:
        type: string
        description: First nested property of prop4
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
`,ee=`type: object
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
`,te=`type: object
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
`,ne=`type: object
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
`,re=`type: object
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
`,pe=`type: object
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
`,oe=`type: object
description: Object with three string properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: number
    description: Second property
  prop3:
    type: string
    description: Third property
`,ie=!0,se=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.1-root-description-changed/before.yaml":k,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.2-primitive-props-added/before.yaml":q,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.3-nested-object-props-added/before.yaml":z,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.4-primitive-added-nested-removed/before.yaml":K,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.5-nested-prop-added-and-removed/before.yaml":M,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6-nested-prop-added-object-removed/before.yaml":P,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.7-object-added-nested-prop-removed/before.yaml":Q,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.8-nested-property-metadata-and-constraints-changed/before.yaml":V,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.9-second-property-type-string-to-number/before.yaml":W}),de=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.1-root-description-changed/after.yaml":X,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.2-primitive-props-added/after.yaml":Z,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.3-nested-object-props-added/after.yaml":$,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.4-primitive-added-nested-removed/after.yaml":ee,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.5-nested-prop-added-and-removed/after.yaml":te,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.6-nested-prop-added-object-removed/after.yaml":ne,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.7-object-added-nested-prop-removed/after.yaml":re,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.8-nested-property-metadata-and-constraints-changed/after.yaml":pe,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/complex-object/2.9-second-property-type-string-to-number/after.yaml":oe}),ce=G(se,de),ae=Y(ce),Ee={title:"JSON Schema Diffs Suite (Hiding Unchanged Nodes)/Complex Object",component:U,argTypes:L},e=R(U,ae,ie),t=e("2.1-root-description-changed"),n=e("2.2-primitive-props-added"),r=e("2.3-nested-object-props-added"),p=e("2.4-primitive-added-nested-removed"),o=e("2.5-nested-prop-added-and-removed"),i=e("2.6-nested-prop-added-object-removed"),s=e("2.7-object-added-nested-prop-removed"),d=e("2.8-nested-property-metadata-and-constraints-changed"),c=e("2.9-second-property-type-string-to-number");var a,y,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'createCaseStory("2.1-root-description-changed")',...(m=(y=t.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var _,b,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("2.2-primitive-props-added")',...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,l;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("2.3-nested-object-props-added")',...(l=(f=r.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};var j,u,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("2.4-primitive-added-nested-removed")',...(v=(u=p.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var F,S,C;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("2.5-nested-prop-added-and-removed")',...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var x,w,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("2.6-nested-prop-added-object-removed")',...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,O,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("2.7-object-added-nested-prop-removed")',...(E=(O=s.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var N,A,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("2.8-nested-property-metadata-and-constraints-changed")',...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var H,I,J;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("2.9-second-property-type-string-to-number")',...(J=(I=c.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const Ne=["Case_2_1_root_description_changed","Case_2_2_primitive_props_added","Case_2_3_nested_object_props_added","Case_2_4_primitive_added_nested_removed","Case_2_5_nested_prop_added_and_removed","Case_2_6_nested_prop_added_object_removed","Case_2_7_object_added_nested_prop_removed","Case_2_8_nested_property_metadata_and_constraints_changed","Case_2_9_second_property_type_string_to_number"];export{t as Case_2_1_root_description_changed,n as Case_2_2_primitive_props_added,r as Case_2_3_nested_object_props_added,p as Case_2_4_primitive_added_nested_removed,o as Case_2_5_nested_prop_added_and_removed,i as Case_2_6_nested_prop_added_object_removed,s as Case_2_7_object_added_nested_prop_removed,d as Case_2_8_nested_property_metadata_and_constraints_changed,c as Case_2_9_second_property_type_string_to_number,Ne as __namedExportsOrder,Ee as default};
