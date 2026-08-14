const e=`type: object

`,n=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true

`,t=`type: object
description: Sample object description

`,r=`type: object
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

`,a=`type: object
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

`,o=`type: object
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

`,m=`type: object
additionalProperties:
  type: string

`,s=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
additionalProperties:
  type: string

`,d=`type: object
description: Sample object description
additionalProperties:
  type: string

`,l=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
additionalProperties:
  type: string

`,c=`type: object
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string

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

`,u=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string

`,y=`type: object
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

`,b=`type: object
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

`,g=`type: object
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

`,j=`type: object
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

`,x=`type: object
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

`,O=`type: object
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

`,P=`type: object
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

`,v=`type: object
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

`,S=`type: object
additionalProperties:
  type: string
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
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
additionalProperties:
  type: string
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
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
additionalProperties:
  type: string
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
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string
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
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string
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

`,A=`type: object
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

`;export{N as A,h as B,k as C,z as D,A as E,e as _,n as a,t as b,r as c,i as d,a as e,p as f,o as g,m as h,s as i,d as j,l as k,c as l,_ as m,u as n,y as o,b as p,g as q,j as r,x as s,f as t,O as u,P as v,v as w,S as x,q as y,w as z};
