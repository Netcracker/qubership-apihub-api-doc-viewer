const n=`type: object

`,e=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true

`,t=`type: object
description: Sample object description

`,a=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description

`,i=`type: object
properties:
  name:
    type: string
  id:
    type: integer

`,r=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer

`,p=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer

`,m=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer

`,s=`type: object
additionalProperties:
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

`,l=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
additionalProperties:
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

`,o=`type: object
description: Sample object description
additionalProperties:
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

`,d=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
additionalProperties:
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

`,c=`type: object
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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

`,_=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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

`,g=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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

`,u=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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

`,y=`type: object
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,b=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,h=`type: object
description: Sample object description
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,j=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,f=`type: object
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,x=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,v=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,P=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,O=`type: object
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,S=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,w=`type: object
description: Sample object description
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,L=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,q=`type: object
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,z=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,N=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,$=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
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
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,k=`type: object
additionalProperties: true

`,A=`type: object
additionalProperties: false

`;export{L as A,q as B,z as C,N as D,$ as E,k as F,A as G,n as _,e as a,t as b,a as c,i as d,r as e,p as f,m as g,s as h,l as i,o as j,d as k,c as l,_ as m,g as n,u as o,y as p,b as q,h as r,j as s,f as t,x as u,v,P as w,O as x,S as y,w as z};
