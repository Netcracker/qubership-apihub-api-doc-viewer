import{c as G,a as H}from"./json-schema-samples-cases-65f7b341.js";import{j as K,c as L}from"./json-schema-samples-common-3ef2dfab.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-fe2384ed.js";import"./DiffBadge-9f300cf3.js";import"./IndexesNodeViewer-f5a98c95.js";import"./DdlTableDiffsViewer-43b4420e.js";/* empty css              */import"./DdlTableViewer-4b8c67a0.js";import"./GraphQLOperationDiffViewer-cd131da3.js";import"./GraphPropNodeViewer-65a947d0.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-c4bf3b2a.js";const Q=`type: object
properties:
  name:
    type: string
  id:
    type: integer
default: {}
title: "[default] default = {}"

`,R=`type: object
properties:
  name:
    type: string
  id:
    type: integer
default:
  name: sample
  id: 1
title: "[default] default = small object"

`,T=`type: object
properties:
  name:
    type: string
  id:
    type: integer
example: {}
title: "[example] example = {}"

`,U=`type: object
properties:
  name:
    type: string
  id:
    type: integer
example:
  name: sample
  id: 1
title: "[example] example = small object"

`,W=`type: object
properties:
  name:
    type: string
  id:
    type: integer
examples:
  - {}
title: "[examples] examples = [{}]"

`,X=`type: object
properties:
  name:
    type: string
  id:
    type: integer
examples:
  - name: sample
    id: 1
title: "[examples] examples = [small object]"

`,Y=`type: object
properties:
  name:
    type: string
  id:
    type: integer
examples:
  - name: sample
    id: 1
  - name: other
    id: 2
title: "[examples] examples = [object 1, object 2]"

`,Z=`type: object
properties:
  name:
    type: string
  id:
    type: integer
minProperties: 0
title: "[properties-count] minProperties = 0"

`,$=`type: object
properties:
  name:
    type: string
  id:
    type: integer
minProperties: 1
title: "[properties-count] minProperties = 1"

`,ee=`type: object
properties:
  name:
    type: string
  id:
    type: integer
maxProperties: 1
title: "[properties-count] maxProperties = 1"

`,te=Object.assign({"../../../../samples/json-schema/object-validations/001-default-empty-object/sample.yaml":Q,"../../../../samples/json-schema/object-validations/002-default-small-object/sample.yaml":R,"../../../../samples/json-schema/object-validations/003-example-empty-object/sample.yaml":T,"../../../../samples/json-schema/object-validations/004-example-small-object/sample.yaml":U,"../../../../samples/json-schema/object-validations/005-examples-empty-object/sample.yaml":W,"../../../../samples/json-schema/object-validations/006-examples-small-object/sample.yaml":X,"../../../../samples/json-schema/object-validations/007-examples-two-objects/sample.yaml":Y,"../../../../samples/json-schema/object-validations/008-min-properties-0/sample.yaml":Z,"../../../../samples/json-schema/object-validations/009-min-properties-1/sample.yaml":$,"../../../../samples/json-schema/object-validations/010-max-properties-1/sample.yaml":ee}),se=G(te),ae=H(se),e=L(ae),Ce={...K,id:"json-schema-suite-object-validations",title:"JSON Schema Suite/Object  Validations"},t=e("001-default-empty-object"),s=e("002-default-small-object"),a=e("003-example-empty-object"),o=e("004-example-small-object"),r=e("005-examples-empty-object"),p=e("006-examples-small-object"),m=e("007-examples-two-objects"),n=e("008-min-properties-0"),c=e("009-min-properties-1"),l=e("010-max-properties-1");var i,_,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'createCaseStory("001-default-empty-object")',...(d=(_=t.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};var j,b,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("002-default-small-object")',...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("003-example-empty-object")',...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,S,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("004-example-small-object")',...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,h,P;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("005-examples-empty-object")',...(P=(h=r.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var w,O,B;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("006-examples-small-object")',...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var J,F,I;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("007-examples-two-objects")',...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var E,M,N;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("008-min-properties-0")',...(N=(M=n.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var V,k,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("009-min-properties-1")',...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("010-max-properties-1")',...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Se=["Case_001_default_empty_object","Case_002_default_small_object","Case_003_example_empty_object","Case_004_example_small_object","Case_005_examples_empty_object","Case_006_examples_small_object","Case_007_examples_two_objects","Case_008_min_properties_0","Case_009_min_properties_1","Case_010_max_properties_1"];export{t as Case_001_default_empty_object,s as Case_002_default_small_object,a as Case_003_example_empty_object,o as Case_004_example_small_object,r as Case_005_examples_empty_object,p as Case_006_examples_small_object,m as Case_007_examples_two_objects,n as Case_008_min_properties_0,c as Case_009_min_properties_1,l as Case_010_max_properties_1,Se as __namedExportsOrder,Ce as default};
