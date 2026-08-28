import{c as He}from"./diffs-samples-cases-1df1f3ae.js";import{c as Ke,J as Ge,j as Me,a as Qe}from"./json-schema-diffs-utils-91655df0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-41da122b.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-7234b4ff.js";import"./DdlTableDiffsViewer-956a7783.js";/* empty css              */import"./DdlTableViewer-82237eef.js";import"./GraphQLOperationDiffViewer-ad5e8f40.js";import"./GraphPropNodeViewer-47a3eb3c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5f3933cf.js";import"./preprocess-6c565c6a.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Ue=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,Ve=`type: object
description: Object with 2 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  prop1:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,We=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Xe=`type: object
description: Object with 2 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  prop1:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,Ye=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,Ze=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,er=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,rr=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,tr=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,nr=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,or=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,ar=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,sr=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,pr=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,ir=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,mr=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,cr=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,lr=`type: object
description: Object with 2 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  prop1:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,dr=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,_r=`type: object
description: Object with 2 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  prop1:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,yr=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,br=`type: object
description: Object with 2 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
  prop1:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,hr=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,gr=`type: object
description: Object with 2 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
  prop1:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,ur=`type: object
description: Object with 2 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  prop1:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,jr=`type: object
description: Object with 1 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,fr=`type: object
description: Object with 2 string property schema(s)
properties:
  prop0:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  prop1:
    type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minProperties: 0
maxProperties: 10

`,vr=`type: object
description: Object with 0 string property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,wr=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,Sr=`type: object
description: Object with 1 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,Pr=`type: object
description: Object with 2 number property schema(s)
properties:
  prop0:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  prop1:
    type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minProperties: 0
maxProperties: 10

`,xr=`type: object
description: Object with 0 number property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Cr=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,Or=`type: object
description: Object with 1 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,Ir=`type: object
description: Object with 2 integer property schema(s)
properties:
  prop0:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  prop1:
    type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minProperties: 0
maxProperties: 10

`,Lr=`type: object
description: Object with 0 integer property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,qr=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,zr=`type: object
description: Object with 1 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,$r=`type: object
description: Object with 2 boolean property schema(s)
properties:
  prop0:
    type: boolean
    description: Sample boolean schema
    default: false
  prop1:
    type: boolean
    description: Sample boolean schema
    default: false
minProperties: 0
maxProperties: 10

`,Dr=`type: object
description: Object with 0 boolean property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Jr=`type: object
description: Object with 2 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  prop1:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,Fr=`type: object
description: Object with 1 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,Br=`type: object
description: Object with 2 array property schema(s)
properties:
  prop0:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  prop1:
    type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minProperties: 0
maxProperties: 10

`,Tr=`type: object
description: Object with 0 array property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,Ar=`type: object
description: Object with 2 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
  prop1:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,Er=`type: object
description: Object with 1 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,Nr=`type: object
description: Object with 2 object property schema(s)
properties:
  prop0:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
  prop1:
    type: object
    description: Sample object schema with all object validations
    properties:
      name:
        type: string
      id:
        type: integer
    default:
      name: sample
      id: 1
    minProperties: 1
    maxProperties: 5
minProperties: 0
maxProperties: 10

`,Rr=`type: object
description: Object with 0 object property schema(s)
properties: {}
minProperties: 0
maxProperties: 10

`,kr=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/before.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/before.yaml":er,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/before.yaml":rr,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/before.yaml":tr,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/before.yaml":nr,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/before.yaml":or,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/before.yaml":ar,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/before.yaml":sr,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/before.yaml":pr,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/before.yaml":ir,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/before.yaml":mr,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/before.yaml":cr,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/before.yaml":lr,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/before.yaml":dr,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/before.yaml":_r,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/before.yaml":yr,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/before.yaml":br,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/before.yaml":hr,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/before.yaml":gr}),Gr=Object.assign({"../../../../samples/json-schema-diffs/type-changes/object-properties/001-add-one-property-string/after.yaml":ur,"../../../../samples/json-schema-diffs/type-changes/object-properties/002-remove-one-property-string/after.yaml":jr,"../../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string/after.yaml":fr,"../../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string/after.yaml":vr,"../../../../samples/json-schema-diffs/type-changes/object-properties/005-add-one-property-number/after.yaml":wr,"../../../../samples/json-schema-diffs/type-changes/object-properties/006-remove-one-property-number/after.yaml":Sr,"../../../../samples/json-schema-diffs/type-changes/object-properties/007-add-two-properties-number/after.yaml":Pr,"../../../../samples/json-schema-diffs/type-changes/object-properties/008-remove-two-properties-number/after.yaml":xr,"../../../../samples/json-schema-diffs/type-changes/object-properties/009-add-one-property-integer/after.yaml":Cr,"../../../../samples/json-schema-diffs/type-changes/object-properties/010-remove-one-property-integer/after.yaml":Or,"../../../../samples/json-schema-diffs/type-changes/object-properties/011-add-two-properties-integer/after.yaml":Ir,"../../../../samples/json-schema-diffs/type-changes/object-properties/012-remove-two-properties-integer/after.yaml":Lr,"../../../../samples/json-schema-diffs/type-changes/object-properties/013-add-one-property-boolean/after.yaml":qr,"../../../../samples/json-schema-diffs/type-changes/object-properties/014-remove-one-property-boolean/after.yaml":zr,"../../../../samples/json-schema-diffs/type-changes/object-properties/015-add-two-properties-boolean/after.yaml":$r,"../../../../samples/json-schema-diffs/type-changes/object-properties/016-remove-two-properties-boolean/after.yaml":Dr,"../../../../samples/json-schema-diffs/type-changes/object-properties/017-add-one-property-array/after.yaml":Jr,"../../../../samples/json-schema-diffs/type-changes/object-properties/018-remove-one-property-array/after.yaml":Fr,"../../../../samples/json-schema-diffs/type-changes/object-properties/019-add-two-properties-array/after.yaml":Br,"../../../../samples/json-schema-diffs/type-changes/object-properties/020-remove-two-properties-array/after.yaml":Tr,"../../../../samples/json-schema-diffs/type-changes/object-properties/021-add-one-property-object/after.yaml":Ar,"../../../../samples/json-schema-diffs/type-changes/object-properties/022-remove-one-property-object/after.yaml":Er,"../../../../samples/json-schema-diffs/type-changes/object-properties/023-add-two-properties-object/after.yaml":Nr,"../../../../samples/json-schema-diffs/type-changes/object-properties/024-remove-two-properties-object/after.yaml":Rr}),Hr=He(kr,Gr),Kr=Ke(Hr),mt={title:"JSON Schema Diffs Suite/Object Properties Samples",component:Ge,argTypes:Me},e=Qe(Ge,Kr),r=e("001-add-one-property-string"),t=e("002-remove-one-property-string"),n=e("003-add-two-properties-string"),o=e("004-remove-two-properties-string"),a=e("005-add-one-property-number"),s=e("006-remove-one-property-number"),p=e("007-add-two-properties-number"),i=e("008-remove-two-properties-number"),m=e("009-add-one-property-integer"),c=e("010-remove-one-property-integer"),l=e("011-add-two-properties-integer"),d=e("012-remove-two-properties-integer"),_=e("013-add-one-property-boolean"),y=e("014-remove-one-property-boolean"),b=e("015-add-two-properties-boolean"),h=e("016-remove-two-properties-boolean"),g=e("017-add-one-property-array"),u=e("018-remove-one-property-array"),j=e("019-add-two-properties-array"),f=e("020-remove-two-properties-array"),v=e("021-add-one-property-object"),w=e("022-remove-one-property-object"),S=e("023-add-two-properties-object"),P=e("024-remove-two-properties-object");var x,C,O;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("001-add-one-property-string")',...(O=(C=r.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var I,L,q;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("002-remove-one-property-string")',...(q=(L=t.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var z,$,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("003-add-two-properties-string")',...(D=($=n.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var J,F,B;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("004-remove-two-properties-string")',...(B=(F=o.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var T,A,E;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("005-add-one-property-number")',...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var N,R,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("006-remove-one-property-number")',...(k=(R=s.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var G,H,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("007-add-two-properties-number")',...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var M,Q,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("008-remove-two-properties-number")',...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("009-add-one-property-integer")',...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("010-remove-one-property-integer")',...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ne;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("011-add-two-properties-integer")',...(ne=(te=l.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,se;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("012-remove-two-properties-integer")',...(se=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var pe,ie,me;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("013-add-one-property-boolean")',...(me=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ce,le,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("014-remove-one-property-boolean")',...(de=(le=y.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var _e,ye,be;b.parameters={...b.parameters,docs:{...(_e=b.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("015-add-two-properties-boolean")',...(be=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,ge,ue;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("016-remove-two-properties-boolean")',...(ue=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var je,fe,ve;g.parameters={...g.parameters,docs:{...(je=g.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("017-add-one-property-array")',...(ve=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,Se,Pe;u.parameters={...u.parameters,docs:{...(we=u.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("018-remove-one-property-array")',...(Pe=(Se=u.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var xe,Ce,Oe;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("019-add-two-properties-array")',...(Oe=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var Ie,Le,qe;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("020-remove-two-properties-array")',...(qe=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var ze,$e,De;v.parameters={...v.parameters,docs:{...(ze=v.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("021-add-one-property-object")',...(De=($e=v.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Je,Fe,Be;w.parameters={...w.parameters,docs:{...(Je=w.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("022-remove-one-property-object")',...(Be=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Te,Ae,Ee;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("023-add-two-properties-object")',...(Ee=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Ne,Re,ke;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("024-remove-two-properties-object")',...(ke=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};const ct=["Case_001_add_one_property_string","Case_002_remove_one_property_string","Case_003_add_two_properties_string","Case_004_remove_two_properties_string","Case_005_add_one_property_number","Case_006_remove_one_property_number","Case_007_add_two_properties_number","Case_008_remove_two_properties_number","Case_009_add_one_property_integer","Case_010_remove_one_property_integer","Case_011_add_two_properties_integer","Case_012_remove_two_properties_integer","Case_013_add_one_property_boolean","Case_014_remove_one_property_boolean","Case_015_add_two_properties_boolean","Case_016_remove_two_properties_boolean","Case_017_add_one_property_array","Case_018_remove_one_property_array","Case_019_add_two_properties_array","Case_020_remove_two_properties_array","Case_021_add_one_property_object","Case_022_remove_one_property_object","Case_023_add_two_properties_object","Case_024_remove_two_properties_object"];export{r as Case_001_add_one_property_string,t as Case_002_remove_one_property_string,n as Case_003_add_two_properties_string,o as Case_004_remove_two_properties_string,a as Case_005_add_one_property_number,s as Case_006_remove_one_property_number,p as Case_007_add_two_properties_number,i as Case_008_remove_two_properties_number,m as Case_009_add_one_property_integer,c as Case_010_remove_one_property_integer,l as Case_011_add_two_properties_integer,d as Case_012_remove_two_properties_integer,_ as Case_013_add_one_property_boolean,y as Case_014_remove_one_property_boolean,b as Case_015_add_two_properties_boolean,h as Case_016_remove_two_properties_boolean,g as Case_017_add_one_property_array,u as Case_018_remove_one_property_array,j as Case_019_add_two_properties_array,f as Case_020_remove_two_properties_array,v as Case_021_add_one_property_object,w as Case_022_remove_one_property_object,S as Case_023_add_two_properties_object,P as Case_024_remove_two_properties_object,ct as __namedExportsOrder,mt as default};
