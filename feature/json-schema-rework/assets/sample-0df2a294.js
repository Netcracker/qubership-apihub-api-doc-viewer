const n=`type: string

`,e=`type: string
title: Sample String
readOnly: true
writeOnly: true
deprecated: true
format: email

`,t=`type: string
description: Sample string description

`,a=`type: string
title: Sample String
readOnly: true
writeOnly: true
deprecated: true
format: email
description: Sample string description

`,r=`type: string
enum:
  - alpha
  - beta
  - gamma
default: alpha
examples:
  - alpha
  - sample
minLength: 1
maxLength: 128
pattern: ^[a-z]+$

`,i=`type: string
title: Sample String
readOnly: true
writeOnly: true
deprecated: true
format: email
enum:
  - alpha
  - beta
  - gamma
default: alpha
examples:
  - alpha
  - sample
minLength: 1
maxLength: 128
pattern: ^[a-z]+$

`,l=`type: string
description: Sample string description
enum:
  - alpha
  - beta
  - gamma
default: alpha
examples:
  - alpha
  - sample
minLength: 1
maxLength: 128
pattern: ^[a-z]+$

`,p=`type: string
title: Sample String
readOnly: true
writeOnly: true
deprecated: true
format: email
description: Sample string description
enum:
  - alpha
  - beta
  - gamma
default: alpha
examples:
  - alpha
  - sample
minLength: 1
maxLength: 128
pattern: ^[a-z]+$

`;export{n as _,e as a,t as b,a as c,r as d,i as e,l as f,p as g};
