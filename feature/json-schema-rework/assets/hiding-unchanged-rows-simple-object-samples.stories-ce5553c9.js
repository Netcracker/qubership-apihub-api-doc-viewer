import{c as b}from"./diffs-samples-cases-1df1f3ae.js";import{c as u,J as f,j as S,a as j}from"./json-schema-diffs-utils-6f7b93a9.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-988c4a65.js";import"./DiffBadge-ea2802e9.js";import"./IndexesNodeViewer-93dc441a.js";import"./DdlTableDiffsViewer-8919eca1.js";/* empty css              */import"./DdlTableViewer-25f1408e.js";import"./GraphQLOperationDiffViewer-be86ff5d.js";import"./GraphPropNodeViewer-34693b53.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-1f45739c.js";import"./preprocess-a240f52a.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";const v=`type: object
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
`,w=`type: object
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
`,C=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property — before description
  prop2:
    type: string
    description: Second property
    enum:
      - alpha
      - beta
      - gamma
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
    default: false
  prop5:
    type: number
    description: Fifth property
`,T=`type: object
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
`,D=`type: object
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
`,J=`type: object
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
`,O=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property — after description
  prop2:
    type: string
    description: Second property
    enum:
      - alpha
      - beta
      - gamma
      - delta
  prop3:
    type: integer
    description: Third property
    minimum: 0
    maximum: 100
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`,x=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.1-two-added-three-removed/before.yaml":v,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.2-second-and-fifth-added-others-unchanged/before.yaml":F,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.3-root-description-replaced/before.yaml":w,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.4-property-metadata-and-constraints-changed/before.yaml":C}),B=Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.1-two-added-three-removed/after.yaml":T,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.2-second-and-fifth-added-others-unchanged/after.yaml":D,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.3-root-description-replaced/after.yaml":J,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.4-property-metadata-and-constraints-changed/after.yaml":O}),A=b(x,B),I=u(A),Y={title:"JSON Schema Diffs Suite/Hiding Unchanged Rows Simple Object Samples",component:f,argTypes:S},n=j(f,I),e=n("1.1-two-added-three-removed"),r=n("1.2-second-and-fifth-added-others-unchanged"),t=n("1.3-root-description-replaced"),p=n("1.4-property-metadata-and-constraints-changed");var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("1.1-two-added-three-removed")',...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var a,d,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:'createCaseStory("1.2-second-and-fifth-added-others-unchanged")',...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,y,_;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("1.3-root-description-replaced")',...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var h,l,g;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("1.4-property-metadata-and-constraints-changed")',...(g=(l=p.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const Z=["Case_1_1_two_added_three_removed","Case_1_2_second_and_fifth_added_others_unchanged","Case_1_3_root_description_replaced","Case_1_4_property_metadata_and_constraints_changed"];export{e as Case_1_1_two_added_three_removed,r as Case_1_2_second_and_fifth_added_others_unchanged,t as Case_1_3_root_description_replaced,p as Case_1_4_property_metadata_and_constraints_changed,Z as __namedExportsOrder,Y as default};
