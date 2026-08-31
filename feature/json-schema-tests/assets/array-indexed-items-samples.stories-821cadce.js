import{c as He}from"./diffs-samples-cases-1df1f3ae.js";import{c as Ke,J as Ge,j as Me,a as Qe}from"./json-schema-diffs-utils-5391b304.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-b3ee9740.js";import"./DiffBadge-3394d163.js";import"./IndexesNodeViewer-6c0f4422.js";import"./DdlTableDiffsViewer-b43d1e75.js";/* empty css              */import"./DdlTableViewer-64f3e8cb.js";import"./GraphQLOperationDiffViewer-da7f8f93.js";import"./GraphPropNodeViewer-6d57cd18.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-beb63fb6.js";import"./preprocess-9f7c1da0.js";import"./parse-yaml-source-0cc43eab.js";import"./public-api-99af098d.js";const Ue=`type: array
description: Tuple array with 1 indexed string item schema(s)
items:
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minItems: 0
maxItems: 10
uniqueItems: true

`,Ve=`type: array
description: Tuple array with 2 indexed string item schema(s)
items:
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minItems: 0
maxItems: 10
uniqueItems: true

`,We=`type: array
description: Tuple array with 0 indexed string item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,Xe=`type: array
description: Tuple array with 2 indexed string item schema(s)
items:
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minItems: 0
maxItems: 10
uniqueItems: true

`,Ye=`type: array
description: Tuple array with 1 indexed number item schema(s)
items:
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minItems: 0
maxItems: 10
uniqueItems: true

`,Ze=`type: array
description: Tuple array with 2 indexed number item schema(s)
items:
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minItems: 0
maxItems: 10
uniqueItems: true

`,en=`type: array
description: Tuple array with 0 indexed number item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,nn=`type: array
description: Tuple array with 2 indexed number item schema(s)
items:
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minItems: 0
maxItems: 10
uniqueItems: true

`,tn=`type: array
description: Tuple array with 1 indexed integer item schema(s)
items:
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minItems: 0
maxItems: 10
uniqueItems: true

`,an=`type: array
description: Tuple array with 2 indexed integer item schema(s)
items:
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minItems: 0
maxItems: 10
uniqueItems: true

`,sn=`type: array
description: Tuple array with 0 indexed integer item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,mn=`type: array
description: Tuple array with 2 indexed integer item schema(s)
items:
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minItems: 0
maxItems: 10
uniqueItems: true

`,rn=`type: array
description: Tuple array with 1 indexed boolean item schema(s)
items:
  - type: boolean
    description: Sample boolean schema
    default: false
minItems: 0
maxItems: 10
uniqueItems: true

`,on=`type: array
description: Tuple array with 2 indexed boolean item schema(s)
items:
  - type: boolean
    description: Sample boolean schema
    default: false
  - type: boolean
    description: Sample boolean schema
    default: false
minItems: 0
maxItems: 10
uniqueItems: true

`,dn=`type: array
description: Tuple array with 0 indexed boolean item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,pn=`type: array
description: Tuple array with 2 indexed boolean item schema(s)
items:
  - type: boolean
    description: Sample boolean schema
    default: false
  - type: boolean
    description: Sample boolean schema
    default: false
minItems: 0
maxItems: 10
uniqueItems: true

`,ln=`type: array
description: Tuple array with 1 indexed array item schema(s)
items:
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minItems: 0
maxItems: 10
uniqueItems: true

`,cn=`type: array
description: Tuple array with 2 indexed array item schema(s)
items:
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minItems: 0
maxItems: 10
uniqueItems: true

`,_n=`type: array
description: Tuple array with 0 indexed array item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,un=`type: array
description: Tuple array with 2 indexed array item schema(s)
items:
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minItems: 0
maxItems: 10
uniqueItems: true

`,yn=`type: array
description: Tuple array with 1 indexed object item schema(s)
items:
  - type: object
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
minItems: 0
maxItems: 10
uniqueItems: true

`,hn=`type: array
description: Tuple array with 2 indexed object item schema(s)
items:
  - type: object
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
  - type: object
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
minItems: 0
maxItems: 10
uniqueItems: true

`,xn=`type: array
description: Tuple array with 0 indexed object item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,gn=`type: array
description: Tuple array with 2 indexed object item schema(s)
items:
  - type: object
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
  - type: object
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
minItems: 0
maxItems: 10
uniqueItems: true

`,bn=`type: array
description: Tuple array with 2 indexed string item schema(s)
items:
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minItems: 0
maxItems: 10
uniqueItems: true

`,fn=`type: array
description: Tuple array with 1 indexed string item schema(s)
items:
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minItems: 0
maxItems: 10
uniqueItems: true

`,In=`type: array
description: Tuple array with 2 indexed string item schema(s)
items:
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
  - type: string
    description: Sample string schema with all string validations
    default: alpha
    enum:
      - alpha
      - beta
      - gamma
    minLength: 1
    maxLength: 128
    pattern: ^[a-z]+$
minItems: 0
maxItems: 10
uniqueItems: true

`,vn=`type: array
description: Tuple array with 0 indexed string item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,wn=`type: array
description: Tuple array with 2 indexed number item schema(s)
items:
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minItems: 0
maxItems: 10
uniqueItems: true

`,Sn=`type: array
description: Tuple array with 1 indexed number item schema(s)
items:
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minItems: 0
maxItems: 10
uniqueItems: true

`,jn=`type: array
description: Tuple array with 2 indexed number item schema(s)
items:
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
  - type: number
    description: Sample number schema with all number validations
    default: 1.5
    minimum: 0
    maximum: 100
    multipleOf: 0.5
minItems: 0
maxItems: 10
uniqueItems: true

`,Cn=`type: array
description: Tuple array with 0 indexed number item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,qn=`type: array
description: Tuple array with 2 indexed integer item schema(s)
items:
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minItems: 0
maxItems: 10
uniqueItems: true

`,Tn=`type: array
description: Tuple array with 1 indexed integer item schema(s)
items:
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minItems: 0
maxItems: 10
uniqueItems: true

`,On=`type: array
description: Tuple array with 2 indexed integer item schema(s)
items:
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
  - type: integer
    description: Sample integer schema with all integer validations
    default: 1
    minimum: 0
    maximum: 100
    multipleOf: 1
minItems: 0
maxItems: 10
uniqueItems: true

`,Ln=`type: array
description: Tuple array with 0 indexed integer item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,Pn=`type: array
description: Tuple array with 2 indexed boolean item schema(s)
items:
  - type: boolean
    description: Sample boolean schema
    default: false
  - type: boolean
    description: Sample boolean schema
    default: false
minItems: 0
maxItems: 10
uniqueItems: true

`,zn=`type: array
description: Tuple array with 1 indexed boolean item schema(s)
items:
  - type: boolean
    description: Sample boolean schema
    default: false
minItems: 0
maxItems: 10
uniqueItems: true

`,$n=`type: array
description: Tuple array with 2 indexed boolean item schema(s)
items:
  - type: boolean
    description: Sample boolean schema
    default: false
  - type: boolean
    description: Sample boolean schema
    default: false
minItems: 0
maxItems: 10
uniqueItems: true

`,Dn=`type: array
description: Tuple array with 0 indexed boolean item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,Jn=`type: array
description: Tuple array with 2 indexed array item schema(s)
items:
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minItems: 0
maxItems: 10
uniqueItems: true

`,Fn=`type: array
description: Tuple array with 1 indexed array item schema(s)
items:
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minItems: 0
maxItems: 10
uniqueItems: true

`,An=`type: array
description: Tuple array with 2 indexed array item schema(s)
items:
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
  - type: array
    description: Sample array schema with all array validations
    items:
      type: string
    default:
      - alpha
      - beta
    minItems: 1
    maxItems: 10
    uniqueItems: true
minItems: 0
maxItems: 10
uniqueItems: true

`,Bn=`type: array
description: Tuple array with 0 indexed array item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,En=`type: array
description: Tuple array with 2 indexed object item schema(s)
items:
  - type: object
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
  - type: object
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
minItems: 0
maxItems: 10
uniqueItems: true

`,Nn=`type: array
description: Tuple array with 1 indexed object item schema(s)
items:
  - type: object
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
minItems: 0
maxItems: 10
uniqueItems: true

`,Rn=`type: array
description: Tuple array with 2 indexed object item schema(s)
items:
  - type: object
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
  - type: object
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
minItems: 0
maxItems: 10
uniqueItems: true

`,kn=`type: array
description: Tuple array with 0 indexed object item schemas
items: []
minItems: 0
maxItems: 10
uniqueItems: true

`,Gn=Object.assign({"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/001-add-one-indexed-item-string/before.yaml":Ue,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/002-remove-one-indexed-item-string/before.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/003-add-two-indexed-items-string/before.yaml":We,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/004-remove-two-indexed-items-string/before.yaml":Xe,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/005-add-one-indexed-item-number/before.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/006-remove-one-indexed-item-number/before.yaml":Ze,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/007-add-two-indexed-items-number/before.yaml":en,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/008-remove-two-indexed-items-number/before.yaml":nn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/009-add-one-indexed-item-integer/before.yaml":tn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/010-remove-one-indexed-item-integer/before.yaml":an,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/011-add-two-indexed-items-integer/before.yaml":sn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/012-remove-two-indexed-items-integer/before.yaml":mn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/013-add-one-indexed-item-boolean/before.yaml":rn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/014-remove-one-indexed-item-boolean/before.yaml":on,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/015-add-two-indexed-items-boolean/before.yaml":dn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/016-remove-two-indexed-items-boolean/before.yaml":pn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/017-add-one-indexed-item-array/before.yaml":ln,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/018-remove-one-indexed-item-array/before.yaml":cn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/019-add-two-indexed-items-array/before.yaml":_n,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/020-remove-two-indexed-items-array/before.yaml":un,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/021-add-one-indexed-item-object/before.yaml":yn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/022-remove-one-indexed-item-object/before.yaml":hn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/023-add-two-indexed-items-object/before.yaml":xn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/024-remove-two-indexed-items-object/before.yaml":gn}),Hn=Object.assign({"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/001-add-one-indexed-item-string/after.yaml":bn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/002-remove-one-indexed-item-string/after.yaml":fn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/003-add-two-indexed-items-string/after.yaml":In,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/004-remove-two-indexed-items-string/after.yaml":vn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/005-add-one-indexed-item-number/after.yaml":wn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/006-remove-one-indexed-item-number/after.yaml":Sn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/007-add-two-indexed-items-number/after.yaml":jn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/008-remove-two-indexed-items-number/after.yaml":Cn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/009-add-one-indexed-item-integer/after.yaml":qn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/010-remove-one-indexed-item-integer/after.yaml":Tn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/011-add-two-indexed-items-integer/after.yaml":On,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/012-remove-two-indexed-items-integer/after.yaml":Ln,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/013-add-one-indexed-item-boolean/after.yaml":Pn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/014-remove-one-indexed-item-boolean/after.yaml":zn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/015-add-two-indexed-items-boolean/after.yaml":$n,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/016-remove-two-indexed-items-boolean/after.yaml":Dn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/017-add-one-indexed-item-array/after.yaml":Jn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/018-remove-one-indexed-item-array/after.yaml":Fn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/019-add-two-indexed-items-array/after.yaml":An,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/020-remove-two-indexed-items-array/after.yaml":Bn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/021-add-one-indexed-item-object/after.yaml":En,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/022-remove-one-indexed-item-object/after.yaml":Nn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/023-add-two-indexed-items-object/after.yaml":Rn,"../../../../samples/json-schema-diffs/type-changes/array-indexed-items/024-remove-two-indexed-items-object/after.yaml":kn}),Kn=He(Gn,Hn),Mn=Ke(Kn),pt={title:"JSON Schema Diffs Suite/Array Indexed Items Samples",component:Ge,argTypes:Me},e=Qe(Ge,Mn),n=e("001-add-one-indexed-item-string"),t=e("002-remove-one-indexed-item-string"),a=e("003-add-two-indexed-items-string"),i=e("004-remove-two-indexed-items-string"),s=e("005-add-one-indexed-item-number"),m=e("006-remove-one-indexed-item-number"),r=e("007-add-two-indexed-items-number"),o=e("008-remove-two-indexed-items-number"),d=e("009-add-one-indexed-item-integer"),p=e("010-remove-one-indexed-item-integer"),l=e("011-add-two-indexed-items-integer"),c=e("012-remove-two-indexed-items-integer"),_=e("013-add-one-indexed-item-boolean"),u=e("014-remove-one-indexed-item-boolean"),y=e("015-add-two-indexed-items-boolean"),h=e("016-remove-two-indexed-items-boolean"),x=e("017-add-one-indexed-item-array"),g=e("018-remove-one-indexed-item-array"),b=e("019-add-two-indexed-items-array"),f=e("020-remove-two-indexed-items-array"),I=e("021-add-one-indexed-item-object"),v=e("022-remove-one-indexed-item-object"),w=e("023-add-two-indexed-items-object"),S=e("024-remove-two-indexed-items-object");var j,C,q;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("001-add-one-indexed-item-string")',...(q=(C=n.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var T,O,L;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("002-remove-one-indexed-item-string")',...(L=(O=t.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var P,z,$;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("003-add-two-indexed-items-string")',...($=(z=a.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var D,J,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("004-remove-two-indexed-items-string")',...(F=(J=i.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var A,B,E;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("005-add-one-indexed-item-number")',...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,R,k;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("006-remove-one-indexed-item-number")',...(k=(R=m.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var G,H,K;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("007-add-two-indexed-items-number")',...(K=(H=r.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var M,Q,U;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("008-remove-two-indexed-items-number")',...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("009-add-one-indexed-item-integer")',...(X=(W=d.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("010-remove-one-indexed-item-integer")',...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("011-add-two-indexed-items-integer")',...(ae=(te=l.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ie,se,me;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("012-remove-two-indexed-items-integer")',...(me=(se=c.parameters)==null?void 0:se.docs)==null?void 0:me.source}}};var re,oe,de;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("013-add-one-indexed-item-boolean")',...(de=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var pe,le,ce;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("014-remove-one-indexed-item-boolean")',...(ce=(le=u.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var _e,ue,ye;y.parameters={...y.parameters,docs:{...(_e=y.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("015-add-two-indexed-items-boolean")',...(ye=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var he,xe,ge;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("016-remove-two-indexed-items-boolean")',...(ge=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var be,fe,Ie;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("017-add-one-indexed-item-array")',...(Ie=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var ve,we,Se;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("018-remove-one-indexed-item-array")',...(Se=(we=g.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var je,Ce,qe;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("019-add-two-indexed-items-array")',...(qe=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var Te,Oe,Le;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("020-remove-two-indexed-items-array")',...(Le=(Oe=f.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var Pe,ze,$e;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("021-add-one-indexed-item-object")',...($e=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var De,Je,Fe;v.parameters={...v.parameters,docs:{...(De=v.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("022-remove-one-indexed-item-object")',...(Fe=(Je=v.parameters)==null?void 0:Je.docs)==null?void 0:Fe.source}}};var Ae,Be,Ee;w.parameters={...w.parameters,docs:{...(Ae=w.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("023-add-two-indexed-items-object")',...(Ee=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Ne,Re,ke;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("024-remove-two-indexed-items-object")',...(ke=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};const lt=["Case_001_add_one_indexed_item_string","Case_002_remove_one_indexed_item_string","Case_003_add_two_indexed_items_string","Case_004_remove_two_indexed_items_string","Case_005_add_one_indexed_item_number","Case_006_remove_one_indexed_item_number","Case_007_add_two_indexed_items_number","Case_008_remove_two_indexed_items_number","Case_009_add_one_indexed_item_integer","Case_010_remove_one_indexed_item_integer","Case_011_add_two_indexed_items_integer","Case_012_remove_two_indexed_items_integer","Case_013_add_one_indexed_item_boolean","Case_014_remove_one_indexed_item_boolean","Case_015_add_two_indexed_items_boolean","Case_016_remove_two_indexed_items_boolean","Case_017_add_one_indexed_item_array","Case_018_remove_one_indexed_item_array","Case_019_add_two_indexed_items_array","Case_020_remove_two_indexed_items_array","Case_021_add_one_indexed_item_object","Case_022_remove_one_indexed_item_object","Case_023_add_two_indexed_items_object","Case_024_remove_two_indexed_items_object"];export{n as Case_001_add_one_indexed_item_string,t as Case_002_remove_one_indexed_item_string,a as Case_003_add_two_indexed_items_string,i as Case_004_remove_two_indexed_items_string,s as Case_005_add_one_indexed_item_number,m as Case_006_remove_one_indexed_item_number,r as Case_007_add_two_indexed_items_number,o as Case_008_remove_two_indexed_items_number,d as Case_009_add_one_indexed_item_integer,p as Case_010_remove_one_indexed_item_integer,l as Case_011_add_two_indexed_items_integer,c as Case_012_remove_two_indexed_items_integer,_ as Case_013_add_one_indexed_item_boolean,u as Case_014_remove_one_indexed_item_boolean,y as Case_015_add_two_indexed_items_boolean,h as Case_016_remove_two_indexed_items_boolean,x as Case_017_add_one_indexed_item_array,g as Case_018_remove_one_indexed_item_array,b as Case_019_add_two_indexed_items_array,f as Case_020_remove_two_indexed_items_array,I as Case_021_add_one_indexed_item_object,v as Case_022_remove_one_indexed_item_object,w as Case_023_add_two_indexed_items_object,S as Case_024_remove_two_indexed_items_object,lt as __namedExportsOrder,pt as default};
