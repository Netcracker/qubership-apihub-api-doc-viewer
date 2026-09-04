import{c as se}from"./diffs-samples-cases-1df1f3ae.js";import{j as ae}from"./_commonjs-dynamic-modules-6308e768.js";import{c as te}from"./AsyncApiOperationViewer-2d7bd233.js";import{S as re,D as ie,a as pe}from"./DiffBadge-4d4a1c37.js";import{g as me,h as le}from"./preprocess-c9227d17.js";import{p as u}from"./parse-yaml-source-0cc43eab.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-be584810.js";import"./GraphPropNodeViewer-1f5ff77a.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3b42765c.js";import"./public-api-99af098d.js";const de=`beforeSchema:
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
        child:
          $ref: "#/components/schemas/SelfObject"

`,he=`beforeSchema:
  $ref: "#/components/schemas/SelfObject"
beforeAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string

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
        $ref: "#/components/schemas/SelfArray"

`,be=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

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

`,ue=`beforeSchema:
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
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,Ae=`beforeSchema:
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

`,Ee=`afterSchema:
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

`,Be=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Updated cyclic schema description
      items:
        $ref: "#/components/schemas/SelfArray"

`,Re=`afterSchema:
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

`,De=`afterSchema:
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

`,Te=`afterSchema:
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

`,Ye=`afterSchema:
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

`,Fe=`afterSchema:
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

`,xe={diffsMetaKey:ie,aggregatedDiffsMetaKey:pe},oe={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:'Before sample YAML for reference ("beforeSchema" plus circular "beforeAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:'After sample YAML for reference ("afterSchema" plus circular "afterAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'}},Ie=5,Je=c=>({schema:c,expandedDepth:Ie,layoutMode:re,metaKeys:xe}),Me=(c,a)=>{const n=u(c),o=u(a);return Je(me({beforeSchema:n.beforeSchema,afterSchema:o.afterSchema,beforeAdditionalComponents:n.beforeAdditionalComponents,afterAdditionalComponents:o.afterAdditionalComponents,target:le,circular:!0}))},ke=c=>c.reduce((a,n)=>(a[n.caseId]=n,a),{}),Ke=(c,a)=>n=>{const o=a[n];if(!o)throw new Error(`Sample case not found: ${n}`);return{name:n,args:{caseId:n,beforeYaml:o.beforeYaml,afterYaml:o.afterYaml},argTypes:oe,render:C=>{const S=a[C.caseId];return ae.jsx(c,{caseId:C.caseId,beforeYaml:S.beforeYaml,afterYaml:S.afterYaml})}}},b=({beforeYaml:c,afterYaml:a})=>ae.jsx(te,{...Me(c,a)});b.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory"};const Ne=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":de,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":je,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":Ae}),Ue=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":De,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":Te,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":we,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":Fe}),Ge=se(Ne,Ue),He=ke(Ge),pn={title:"JSON Schema Diffs Suite/Circular Samples",component:b,argTypes:oe},e=Ke(b,He),s=e("001-self-object-description-updated"),t=e("002-self-object-cycle-removed"),r=e("003-self-object-cycle-added"),i=e("004-self-array-description-updated"),p=e("005-self-array-cycle-removed"),m=e("006-self-array-cycle-added"),l=e("007-chain-three-hop-description-updated"),d=e("008-chain-three-hop-cycle-removed"),f=e("009-chain-three-hop-cycle-added"),h=e("010-combiner-variant-cycle-description-updated"),y=e("011-combiner-variant-cycle-cycle-removed"),_=e("012-combiner-variant-cycle-cycle-added");var j,g,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("001-self-object-description-updated")',...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,$,E;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("002-self-object-cycle-removed")',...(E=($=t.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var B,R,O;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("003-self-object-cycle-added")',...(O=(R=r.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var D,T,V;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("004-self-array-description-updated")',...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var Y,w,F;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("005-self-array-cycle-removed")',...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var x,I,J;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("006-self-array-cycle-added")',...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var M,k,K;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("007-chain-three-hop-description-updated")',...(K=(k=l.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var N,U,G;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("008-chain-three-hop-cycle-removed")',...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,L,P;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("009-chain-three-hop-cycle-added")',...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var X,q,z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("010-combiner-variant-cycle-description-updated")',...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var Q,W,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("011-combiner-variant-cycle-cycle-removed")',...(Z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,ne,ce;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("012-combiner-variant-cycle-cycle-added")',...(ce=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};const mn=["Case_001_self_object_description_updated","Case_002_self_object_cycle_removed","Case_003_self_object_cycle_added","Case_004_self_array_description_updated","Case_005_self_array_cycle_removed","Case_006_self_array_cycle_added","Case_007_chain_three_hop_description_updated","Case_008_chain_three_hop_cycle_removed","Case_009_chain_three_hop_cycle_added","Case_010_combiner_variant_cycle_description_updated","Case_011_combiner_variant_cycle_cycle_removed","Case_012_combiner_variant_cycle_cycle_added"];export{s as Case_001_self_object_description_updated,t as Case_002_self_object_cycle_removed,r as Case_003_self_object_cycle_added,i as Case_004_self_array_description_updated,p as Case_005_self_array_cycle_removed,m as Case_006_self_array_cycle_added,l as Case_007_chain_three_hop_description_updated,d as Case_008_chain_three_hop_cycle_removed,f as Case_009_chain_three_hop_cycle_added,h as Case_010_combiner_variant_cycle_description_updated,y as Case_011_combiner_variant_cycle_cycle_removed,_ as Case_012_combiner_variant_cycle_cycle_added,mn as __namedExportsOrder,pn as default};
