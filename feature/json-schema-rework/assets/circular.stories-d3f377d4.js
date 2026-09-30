import{c as ne}from"./diffs-samples-cases-91c2d1e6.js";import{j as ce}from"./_commonjs-dynamic-modules-6308e768.js";import{c as ae}from"./AsyncApiOperationViewer-4b2b995c.js";import{f as se,h as oe}from"./preprocess-fae22708.js";import{p as C}from"./parse-yaml-source-3e95a000.js";import{f as te,g as re,j as ie,a as pe}from"./json-schema-diffs-utils-22b4aef8.js";import{b as me}from"./sample-cases-8c510854.js";import"./index-f46741a2.js";import"./UxBadge-a3d5708d.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./test-diff-meta-keys-5677f54d.js";import"./public-api-99af098d.js";const de=`beforeSchema:
  $ref: "#/components/schemas/SelfObject"
beforeAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string
        child:
          $ref: "#/components/schemas/SelfObject"

`,le=`beforeSchema:
  $ref: "#/components/schemas/SelfObject"
beforeAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string
        child:
          $ref: "#/components/schemas/SelfObject"

`,fe=`beforeSchema:
  $ref: "#/components/schemas/SelfObject"
beforeAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string

`,he=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`,ye=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`,_e=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

`,be=`beforeSchema:
  $ref: "#/components/schemas/ChainRoot"
beforeAdditionalComponents:
  schemas:
    ChainRoot:
      $schema: http://json-schema.org/draft-07/schema#
      type: object
      description: Root of A→B→root chain
      properties:
        name:
          type: string
        nodeA:
          $ref: "#/components/schemas/ChainA"
    ChainA:
      type: object
      description: Entity A
      properties:
        nodeB:
          $ref: "#/components/schemas/ChainB"
    ChainB:
      type: object
      description: Entity B
      properties:
        backToRoot:
          $ref: "#/components/schemas/ChainRoot"

`,Ce=`beforeSchema:
  $ref: "#/components/schemas/ChainRoot"
beforeAdditionalComponents:
  schemas:
    ChainRoot:
      $schema: http://json-schema.org/draft-07/schema#
      type: object
      description: Root of A→B→root chain
      properties:
        name:
          type: string
        nodeA:
          $ref: "#/components/schemas/ChainA"
    ChainA:
      type: object
      description: Entity A
      properties:
        nodeB:
          $ref: "#/components/schemas/ChainB"
    ChainB:
      type: object
      description: Entity B
      properties:
        backToRoot:
          $ref: "#/components/schemas/ChainRoot"

`,Se=`beforeSchema:
  $ref: "#/components/schemas/ChainRoot"
beforeAdditionalComponents:
  schemas:
    ChainRoot:
      $schema: http://json-schema.org/draft-07/schema#
      type: object
      description: Root of A→B→root chain
      properties:
        name:
          type: string
    ChainA:
      type: object
      description: Entity A
      properties:
        nodeB:
          $ref: "#/components/schemas/ChainB"
    ChainB:
      type: object
      description: Entity B
      properties:
        backToRoot:
          $ref: "#/components/schemas/ChainRoot"

`,ue=`beforeSchema:
  type: object
  description: Combiner with cyclic object variant
  properties:
    value:
      $ref: "#/components/schemas/CyclicValue"
beforeAdditionalComponents:
  schemas:
    CyclicValue:
      oneOf:
        - type: string
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,je=`beforeSchema:
  type: object
  description: Combiner with cyclic object variant
  properties:
    value:
      $ref: "#/components/schemas/CyclicValue"
beforeAdditionalComponents:
  schemas:
    CyclicValue:
      oneOf:
        - type: string
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,ge=`beforeSchema:
  type: object
  description: Combiner with cyclic object variant
  properties:
    value:
      $ref: "#/components/schemas/CyclicValue"
beforeAdditionalComponents:
  schemas:
    CyclicValue:
      oneOf:
        - type: string

`,ve=`afterSchema:
  $ref: "#/components/schemas/SelfObject"
afterAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Updated cyclic schema description
      properties:
        label:
          type: string
        child:
          $ref: "#/components/schemas/SelfObject"

`,Ae=`afterSchema:
  $ref: "#/components/schemas/SelfObject"
afterAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string

`,$e=`afterSchema:
  $ref: "#/components/schemas/SelfObject"
afterAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string
        child:
          $ref: "#/components/schemas/SelfObject"

`,Re=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Updated cyclic schema description
      items:
        $ref: "#/components/schemas/SelfArray"

`,Be=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

`,Oe=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`,Ee=`afterSchema:
  $ref: "#/components/schemas/ChainRoot"
afterAdditionalComponents:
  schemas:
    ChainRoot:
      $schema: http://json-schema.org/draft-07/schema#
      type: object
      description: Updated cyclic schema description
      properties:
        name:
          type: string
        nodeA:
          $ref: "#/components/schemas/ChainA"
    ChainA:
      type: object
      description: Entity A
      properties:
        nodeB:
          $ref: "#/components/schemas/ChainB"
    ChainB:
      type: object
      description: Entity B
      properties:
        backToRoot:
          $ref: "#/components/schemas/ChainRoot"

`,Ve=`afterSchema:
  $ref: "#/components/schemas/ChainRoot"
afterAdditionalComponents:
  schemas:
    ChainRoot:
      $schema: http://json-schema.org/draft-07/schema#
      type: object
      description: Root of A→B→root chain
      properties:
        name:
          type: string
    ChainA:
      type: object
      description: Entity A
      properties:
        nodeB:
          $ref: "#/components/schemas/ChainB"
    ChainB:
      type: object
      description: Entity B
      properties:
        backToRoot:
          $ref: "#/components/schemas/ChainRoot"

`,De=`afterSchema:
  $ref: "#/components/schemas/ChainRoot"
afterAdditionalComponents:
  schemas:
    ChainRoot:
      $schema: http://json-schema.org/draft-07/schema#
      type: object
      description: Root of A→B→root chain
      properties:
        name:
          type: string
        nodeA:
          $ref: "#/components/schemas/ChainA"
    ChainA:
      type: object
      description: Entity A
      properties:
        nodeB:
          $ref: "#/components/schemas/ChainB"
    ChainB:
      type: object
      description: Entity B
      properties:
        backToRoot:
          $ref: "#/components/schemas/ChainRoot"

`,Te=`afterSchema:
  type: object
  description: Updated cyclic schema description
  properties:
    value:
      $ref: "#/components/schemas/CyclicValue"
afterAdditionalComponents:
  schemas:
    CyclicValue:
      oneOf:
        - type: string
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,Je=`afterSchema:
  type: object
  description: Combiner with cyclic object variant
  properties:
    value:
      $ref: "#/components/schemas/CyclicValue"
afterAdditionalComponents:
  schemas:
    CyclicValue:
      oneOf:
        - type: string

`,we=`afterSchema:
  type: object
  description: Combiner with cyclic object variant
  properties:
    value:
      $ref: "#/components/schemas/CyclicValue"
afterAdditionalComponents:
  schemas:
    CyclicValue:
      oneOf:
        - type: string
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,xe=(h,y)=>{const n=C(h),b=C(y);return{schema:se({beforeSchema:n.beforeSchema,afterSchema:b.afterSchema,beforeAdditionalComponents:n.beforeAdditionalComponents,afterAdditionalComponents:b.afterAdditionalComponents,target:oe,circular:!0}),expandedDepth:te,diffMetaKeys:re}},_=({beforeYaml:h,afterYaml:y,hideUnchangedNodes:n})=>ce.jsx(ae,{...xe(h,y),hideUnchangedNodes:n});_.__docgenInfo={description:"Same as JsonSchemaDiffSamplesStory (json-schema-diffs-utils.tsx), but reads the circular fixture\nshape above and runs the merge with `circular: true`. Story/case factories, arg types and meta\nkeys are shared with the other JSON Schema Diffs Suite stories.",methods:[],displayName:"JsonSchemaCircularDiffSamplesStory",props:{hideUnchangedNodes:{required:!0,tsType:{name:"boolean"},description:""}}};const Ne=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":de,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":le,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":je,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":ge}),ke=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":De,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":Te,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":Je,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":we}),Fe=ne(Ne,ke),Ie=me(Fe),on={title:"JSON Schema Diffs Suite/Circular",component:_,argTypes:ie},e=pe(_,Ie),c=e("001-self-object-description-updated"),a=e("002-self-object-cycle-removed"),s=e("003-self-object-cycle-added"),o=e("004-self-array-description-updated"),t=e("005-self-array-cycle-removed"),r=e("006-self-array-cycle-added"),i=e("007-chain-three-hop-description-updated"),p=e("008-chain-three-hop-cycle-removed"),m=e("009-chain-three-hop-cycle-added"),d=e("010-combiner-variant-cycle-description-updated"),l=e("011-combiner-variant-cycle-cycle-removed"),f=e("012-combiner-variant-cycle-cycle-added");var S,u,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("001-self-object-description-updated")',...(j=(u=c.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var g,v,A;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("002-self-object-cycle-removed")',...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var $,R,B;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:'createCaseStory("003-self-object-cycle-added")',...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var O,E,V;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("004-self-array-description-updated")',...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var D,T,J;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("005-self-array-cycle-removed")',...(J=(T=t.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};var w,x,N;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("006-self-array-cycle-added")',...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var k,F,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("007-chain-three-hop-description-updated")',...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var U,M,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("008-chain-three-hop-cycle-removed")',...(H=(M=p.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var P,Y,K;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("009-chain-three-hop-cycle-added")',...(K=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var q,G,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("010-combiner-variant-cycle-description-updated")',...(W=(G=d.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var X,z,L;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("011-combiner-variant-cycle-cycle-removed")',...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var Q,Z,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("012-combiner-variant-cycle-cycle-added")',...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const tn=["Case_001_self_object_description_updated","Case_002_self_object_cycle_removed","Case_003_self_object_cycle_added","Case_004_self_array_description_updated","Case_005_self_array_cycle_removed","Case_006_self_array_cycle_added","Case_007_chain_three_hop_description_updated","Case_008_chain_three_hop_cycle_removed","Case_009_chain_three_hop_cycle_added","Case_010_combiner_variant_cycle_description_updated","Case_011_combiner_variant_cycle_cycle_removed","Case_012_combiner_variant_cycle_cycle_added"];export{c as Case_001_self_object_description_updated,a as Case_002_self_object_cycle_removed,s as Case_003_self_object_cycle_added,o as Case_004_self_array_description_updated,t as Case_005_self_array_cycle_removed,r as Case_006_self_array_cycle_added,i as Case_007_chain_three_hop_description_updated,p as Case_008_chain_three_hop_cycle_removed,m as Case_009_chain_three_hop_cycle_added,d as Case_010_combiner_variant_cycle_description_updated,l as Case_011_combiner_variant_cycle_cycle_removed,f as Case_012_combiner_variant_cycle_cycle_added,tn as __namedExportsOrder,on as default};
