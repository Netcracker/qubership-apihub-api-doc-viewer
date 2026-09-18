import{c as te}from"./diffs-samples-cases-1df1f3ae.js";import{j as ae}from"./_commonjs-dynamic-modules-6308e768.js";import{c as se}from"./AsyncApiOperationViewer-12880bbf.js";import{S as re,D as ie,a as pe}from"./DiffBadge-4d4a1c37.js";import{g as me,h as le}from"./preprocess-71f62f03.js";import{p as u}from"./parse-yaml-source-0cc43eab.js";import{s as de}from"./combiner-changed-variant-5814f2cb.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-6fcd5e03.js";import"./DdlTableDiffsViewer-d78f4219.js";/* empty css              */import"./DdlTableViewer-d47ea043.js";import"./GraphQLOperationDiffViewer-449194d6.js";import"./GraphPropNodeViewer-9f9c17b4.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-b5e727b5.js";import"./public-api-99af098d.js";const fe=`beforeSchema:
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
        child:
          $ref: "#/components/schemas/SelfObject"

`,ye=`beforeSchema:
  $ref: "#/components/schemas/SelfObject"
beforeAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string

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
        $ref: "#/components/schemas/SelfArray"

`,Ce=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

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

`,je=`beforeSchema:
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
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,ve=`beforeSchema:
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

`,$e=`afterSchema:
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

`,Be=`afterSchema:
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

`,Oe=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

`,De=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`,Te=`afterSchema:
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

`,Ye=`afterSchema:
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

`,we=`afterSchema:
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
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,xe={diffsMetaKey:ie,aggregatedDiffsMetaKey:pe},oe={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:'Before sample YAML for reference ("beforeSchema" plus circular "beforeAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:'After sample YAML for reference ("afterSchema" plus circular "afterAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'}},Ie=5,Me=c=>({schema:c,expandedDepth:Ie,layoutMode:re,metaKeys:xe}),Ne=(c,a)=>{const e=u(c),o=u(a);return Me(me({beforeSchema:e.beforeSchema,afterSchema:o.afterSchema,beforeAdditionalComponents:e.beforeAdditionalComponents,afterAdditionalComponents:o.afterAdditionalComponents,target:le,circular:!0}))},ke=c=>c.reduce((a,e)=>(a[e.caseId]=e,a),{}),Ke=(c,a)=>e=>{const o=a[e];if(!o)throw new Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:o.beforeYaml,afterYaml:o.afterYaml},argTypes:oe,render:t=>{const S=a[t.caseId];return ae.jsx(c,{caseId:t.caseId,beforeYaml:S.beforeYaml,afterYaml:S.afterYaml})}}},Ue=(c,a)=>{const e=Ke(c,a);return o=>({...e(o),play:async({canvasElement:t})=>{await de(t)}})},C=({beforeYaml:c,afterYaml:a})=>ae.jsx(se,{...Ne(c,a)});C.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory"};const Ge=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":je,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":ve}),He=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":De,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":Te,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":we,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":Fe,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":Je}),Le=te(Ge,He),Pe=ke(Le),dn={title:"JSON Schema Diffs Suite/Circular",component:C,argTypes:oe},n=Ue(C,Pe),s=n("001-self-object-description-updated"),r=n("002-self-object-cycle-removed"),i=n("003-self-object-cycle-added"),p=n("004-self-array-description-updated"),m=n("005-self-array-cycle-removed"),l=n("006-self-array-cycle-added"),d=n("007-chain-three-hop-description-updated"),f=n("008-chain-three-hop-cycle-removed"),h=n("009-chain-three-hop-cycle-added"),y=n("010-combiner-variant-cycle-description-updated"),_=n("011-combiner-variant-cycle-cycle-removed"),b=n("012-combiner-variant-cycle-cycle-added");var j,g,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("001-self-object-description-updated")',...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,$,E;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("002-self-object-cycle-removed")',...(E=($=r.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var B,R,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("003-self-object-cycle-added")',...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var D,T,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("004-self-array-description-updated")',...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var Y,w,F;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("005-self-array-cycle-removed")',...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var J,x,I;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("006-self-array-cycle-added")',...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var M,N,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("007-chain-three-hop-description-updated")',...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var K,U,G;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("008-chain-three-hop-cycle-removed")',...(G=(U=f.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,L,P;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("009-chain-three-hop-cycle-added")',...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,X,q;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("010-combiner-variant-cycle-description-updated")',...(q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var z,Q,Z;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("011-combiner-variant-cycle-cycle-removed")',...(Z=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,ce;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("012-combiner-variant-cycle-cycle-added")',...(ce=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};const fn=["Case_001_self_object_description_updated","Case_002_self_object_cycle_removed","Case_003_self_object_cycle_added","Case_004_self_array_description_updated","Case_005_self_array_cycle_removed","Case_006_self_array_cycle_added","Case_007_chain_three_hop_description_updated","Case_008_chain_three_hop_cycle_removed","Case_009_chain_three_hop_cycle_added","Case_010_combiner_variant_cycle_description_updated","Case_011_combiner_variant_cycle_cycle_removed","Case_012_combiner_variant_cycle_cycle_added"];export{s as Case_001_self_object_description_updated,r as Case_002_self_object_cycle_removed,i as Case_003_self_object_cycle_added,p as Case_004_self_array_description_updated,m as Case_005_self_array_cycle_removed,l as Case_006_self_array_cycle_added,d as Case_007_chain_three_hop_description_updated,f as Case_008_chain_three_hop_cycle_removed,h as Case_009_chain_three_hop_cycle_added,y as Case_010_combiner_variant_cycle_description_updated,_ as Case_011_combiner_variant_cycle_cycle_removed,b as Case_012_combiner_variant_cycle_cycle_added,fn as __namedExportsOrder,dn as default};
