const n=`type: integer

`,e=`type: integer
title: Sample Integer
readOnly: true
writeOnly: true
deprecated: true
format: int32

`,t=`type: integer
description: Sample integer description

`,i=`type: integer
title: Sample Integer
readOnly: true
writeOnly: true
deprecated: true
format: int32
description: Sample integer description

`,r=`type: integer
enum:
  - 1
  - 2
  - 3
default: 42
examples:
  - 1
  - 42
multipleOf: 2
minimum: 0
maximum: 100

`,m=`type: integer
title: Sample Integer
readOnly: true
writeOnly: true
deprecated: true
format: int32
enum:
  - 1
  - 2
  - 3
default: 42
examples:
  - 1
  - 42
multipleOf: 2
minimum: 0
maximum: 100

`,l=`type: integer
description: Sample integer description
enum:
  - 1
  - 2
  - 3
default: 42
examples:
  - 1
  - 42
multipleOf: 2
minimum: 0
maximum: 100

`,a=`type: integer
title: Sample Integer
readOnly: true
writeOnly: true
deprecated: true
format: int32
description: Sample integer description
enum:
  - 1
  - 2
  - 3
default: 42
examples:
  - 1
  - 42
multipleOf: 2
minimum: 0
maximum: 100

`;export{n as _,e as a,t as b,i as c,r as d,m as e,l as f,a as g};
