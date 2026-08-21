import{c as W}from"./diffs-samples-cases-1df1f3ae.js";import{c as X,J as V,j as Y,a as Z}from"./json-schema-diffs-utils-f3ef4d7b.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-b9bc140d.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-ccc41fa8.js";import"./DdlTableDiffsViewer-28175534.js";/* empty css              */import"./DdlTableViewer-f58f7011.js";import"./GraphQLOperationDiffViewer-9273ef44.js";import"./GraphPropNodeViewer-5195dcd6.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e2e598a2.js";import"./preprocess-7f22aeee.js";import"./parse-yaml-source-c8480a27.js";import"./public-api-d6a34651.js";const ee=`type: object
description: Self-referencing object
properties:
  label:
    type: string
  child:
    $ref: "#"

`,re=`type: object
description: Self-referencing object
properties:
  label:
    type: string
  child:
    $ref: "#"

`,ne=`type: object
description: Self-referencing object
properties:
  label:
    type: string

`,te=`type: array
description: Self-referencing array
items:
  $ref: "#"

`,ce=`type: array
description: Self-referencing array
items:
  $ref: "#"

`,se=`type: array
description: Self-referencing array
items:
  type: string

`,ae=`$schema: http://json-schema.org/draft-07/schema#
type: object
description: Root of A→B→root chain
properties:
  name:
    type: string
  nodeA:
    $ref: "#/definitions/A"
definitions:
  A:
    type: object
    description: Entity A
    properties:
      nodeB:
        $ref: "#/definitions/B"
  B:
    type: object
    description: Entity B
    properties:
      backToRoot:
        $ref: "#"

`,oe=`$schema: http://json-schema.org/draft-07/schema#
type: object
description: Root of A→B→root chain
properties:
  name:
    type: string
  nodeA:
    $ref: "#/definitions/A"
definitions:
  A:
    type: object
    description: Entity A
    properties:
      nodeB:
        $ref: "#/definitions/B"
  B:
    type: object
    description: Entity B
    properties:
      backToRoot:
        $ref: "#"

`,ie=`$schema: http://json-schema.org/draft-07/schema#
type: object
description: Root of A→B→root chain
properties:
  name:
    type: string
definitions:
  A:
    type: object
    description: Entity A
    properties:
      nodeB:
        $ref: "#/definitions/B"
  B:
    type: object
    description: Entity B
    properties:
      backToRoot:
        $ref: "#"

`,pe=`type: object
description: Combiner with cyclic object variant
properties:
  value:
    oneOf:
      - type: string
      - type: object
        description: Cyclic object variant
        properties:
          nested:
            $ref: "#/properties/value"

`,de=`type: object
description: Combiner with cyclic object variant
properties:
  value:
    oneOf:
      - type: string
      - type: object
        description: Cyclic object variant
        properties:
          nested:
            $ref: "#/properties/value"

`,le=`type: object
description: Combiner with cyclic object variant
properties:
  value:
    oneOf:
      - type: string

`,_e=`type: object
description: Updated cyclic schema description
properties:
  label:
    type: string
  child:
    $ref: "#"

`,ye=`type: object
description: Self-referencing object
properties:
  label:
    type: string

`,me=`type: object
description: Self-referencing object
properties:
  label:
    type: string
  child:
    $ref: "#"

`,fe=`type: array
description: Updated cyclic schema description
items:
  $ref: "#"

`,he=`type: array
description: Self-referencing array
items:
  type: string

`,be=`type: array
description: Self-referencing array
items:
  $ref: "#"

`,ge=`$schema: http://json-schema.org/draft-07/schema#
type: object
description: Updated cyclic schema description
properties:
  name:
    type: string
  nodeA:
    $ref: "#/definitions/A"
definitions:
  A:
    type: object
    description: Entity A
    properties:
      nodeB:
        $ref: "#/definitions/B"
  B:
    type: object
    description: Entity B
    properties:
      backToRoot:
        $ref: "#"

`,je=`$schema: http://json-schema.org/draft-07/schema#
type: object
description: Root of A→B→root chain
properties:
  name:
    type: string
definitions:
  A:
    type: object
    description: Entity A
    properties:
      nodeB:
        $ref: "#/definitions/B"
  B:
    type: object
    description: Entity B
    properties:
      backToRoot:
        $ref: "#"

`,ue=`$schema: http://json-schema.org/draft-07/schema#
type: object
description: Root of A→B→root chain
properties:
  name:
    type: string
  nodeA:
    $ref: "#/definitions/A"
definitions:
  A:
    type: object
    description: Entity A
    properties:
      nodeB:
        $ref: "#/definitions/B"
  B:
    type: object
    description: Entity B
    properties:
      backToRoot:
        $ref: "#"

`,ve=`type: object
description: Updated cyclic schema description
properties:
  value:
    oneOf:
      - type: string
      - type: object
        description: Cyclic object variant
        properties:
          nested:
            $ref: "#/properties/value"

`,Ce=`type: object
description: Combiner with cyclic object variant
properties:
  value:
    oneOf:
      - type: string

`,Se=`type: object
description: Combiner with cyclic object variant
properties:
  value:
    oneOf:
      - type: string
      - type: object
        description: Cyclic object variant
        properties:
          nested:
            $ref: "#/properties/value"

`,$e=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":ee,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":re,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":ne,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":te,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":se,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":ae,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":oe,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":ie,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":pe,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":de,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":le}),Be=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":me,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":be,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":je,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":Se}),Ae=W($e,Be),Ee=X(Ae),Le={title:"JSON Schema Diffs Suite/Circular Samples",component:V,argTypes:Y},e=Z(V,Ee),r=e("001-self-object-description-updated"),n=e("002-self-object-cycle-removed"),t=e("003-self-object-cycle-added"),c=e("004-self-array-description-updated"),s=e("005-self-array-cycle-removed"),a=e("006-self-array-cycle-added"),o=e("007-chain-three-hop-description-updated"),i=e("008-chain-three-hop-cycle-removed"),p=e("009-chain-three-hop-cycle-added"),d=e("010-combiner-variant-cycle-description-updated"),l=e("011-combiner-variant-cycle-cycle-removed"),_=e("012-combiner-variant-cycle-cycle-added");var y,m,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("001-self-object-description-updated")',...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,b,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("002-self-object-cycle-removed")',...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var j,u,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("003-self-object-cycle-added")',...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var C,S,$;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("004-self-array-description-updated")',...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var B,A,E;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("005-self-array-cycle-removed")',...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,O,T;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("006-self-array-cycle-added")',...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var k,w,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("007-chain-three-hop-description-updated")',...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var J,U,F;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("008-chain-three-hop-cycle-removed")',...(F=(U=i.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var x,I,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("009-chain-three-hop-cycle-added")',...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var q,z,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("010-combiner-variant-cycle-description-updated")',...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,K,L;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("011-combiner-variant-cycle-cycle-removed")',...(L=(K=l.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,P,Q;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("012-combiner-variant-cycle-cycle-added")',...(Q=(P=_.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const Me=["Case_001_self_object_description_updated","Case_002_self_object_cycle_removed","Case_003_self_object_cycle_added","Case_004_self_array_description_updated","Case_005_self_array_cycle_removed","Case_006_self_array_cycle_added","Case_007_chain_three_hop_description_updated","Case_008_chain_three_hop_cycle_removed","Case_009_chain_three_hop_cycle_added","Case_010_combiner_variant_cycle_description_updated","Case_011_combiner_variant_cycle_cycle_removed","Case_012_combiner_variant_cycle_cycle_added"];export{r as Case_001_self_object_description_updated,n as Case_002_self_object_cycle_removed,t as Case_003_self_object_cycle_added,c as Case_004_self_array_description_updated,s as Case_005_self_array_cycle_removed,a as Case_006_self_array_cycle_added,o as Case_007_chain_three_hop_description_updated,i as Case_008_chain_three_hop_cycle_removed,p as Case_009_chain_three_hop_cycle_added,d as Case_010_combiner_variant_cycle_description_updated,l as Case_011_combiner_variant_cycle_cycle_removed,_ as Case_012_combiner_variant_cycle_cycle_added,Me as __namedExportsOrder,Le as default};
