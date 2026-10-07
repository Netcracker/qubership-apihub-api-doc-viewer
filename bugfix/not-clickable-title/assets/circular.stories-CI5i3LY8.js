import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{a as n,i as r}from"./AsyncApiOperationViewer-GQiP-9Ep.js";import{n as ee,r as te,u as ne}from"./preprocess-CZgi8RCV.js";import{n as re,t as ie}from"./parse-yaml-source-C_EzBWAu.js";import{i as ae,r as oe}from"./sample-cases-DDoAHGgD.js";import{n as se,t as ce}from"./diffs-samples-cases-Bp0vvMWA.js";import{c as le,l as ue,o as de,t as fe}from"./json-schema-diffs-utils-DGJ6v-OM.js";var pe;function me(){return(me=e((()=>{pe=`beforeSchema:
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

`})))()}var i;function a(){return(a=e((()=>{i=`beforeSchema:
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

`})))()}var o;function s(){return(s=e((()=>{o=`beforeSchema:
  $ref: "#/components/schemas/SelfObject"
beforeAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string

`})))()}var he;function c(){return(c=e((()=>{he=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`})))()}var l;function u(){return(u=e((()=>{l=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`})))()}var d;function f(){return(f=e((()=>{d=`beforeSchema:
  $ref: "#/components/schemas/SelfArray"
beforeAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

`})))()}var p;function m(){return(m=e((()=>{p=`beforeSchema:
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

`})))()}var h;function g(){return(g=e((()=>{h=`beforeSchema:
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

`})))()}var _;function v(){return(v=e((()=>{_=`beforeSchema:
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

`})))()}var y;function b(){return(b=e((()=>{y=`beforeSchema:
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

`})))()}var x;function S(){return(S=e((()=>{x=`beforeSchema:
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

`})))()}var C;function w(){return(w=e((()=>{C=`beforeSchema:
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

`})))()}var T;function E(){return(E=e((()=>{T=`afterSchema:
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

`})))()}var D;function O(){return(O=e((()=>{D=`afterSchema:
  $ref: "#/components/schemas/SelfObject"
afterAdditionalComponents:
  schemas:
    SelfObject:
      type: object
      description: Self-referencing object
      properties:
        label:
          type: string

`})))()}var k;function A(){return(A=e((()=>{k=`afterSchema:
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

`})))()}var j;function M(){return(M=e((()=>{j=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Updated cyclic schema description
      items:
        $ref: "#/components/schemas/SelfArray"

`})))()}var N;function P(){return(P=e((()=>{N=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        type: string

`})))()}var F;function I(){return(I=e((()=>{F=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`})))()}var L;function R(){return(R=e((()=>{L=`afterSchema:
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

`})))()}var z;function ge(){return(ge=e((()=>{z=`afterSchema:
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

`})))()}var _e;function ve(){return(ve=e((()=>{_e=`afterSchema:
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

`})))()}var ye;function be(){return(be=e((()=>{ye=`afterSchema:
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

`})))()}var xe;function Se(){return(Se=e((()=>{xe=`afterSchema:
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

`})))()}var Ce;function we(){return(we=e((()=>{Ce=`afterSchema:
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

`})))()}var Te,Ee,B;function De(){return(De=e((()=>{n(),te(),ie(),le(),Te=t(),Ee=(e,t)=>{let n=re(e),r=re(t);return{schema:ne({beforeSchema:n.beforeSchema,afterSchema:r.afterSchema,beforeAdditionalComponents:n.beforeAdditionalComponents,afterAdditionalComponents:r.afterAdditionalComponents,target:ee,circular:!0}),expandedDepth:5,diffMetaKeys:fe}},B=({beforeYaml:e,afterYaml:t,hideUnchangedNodes:n})=>(0,Te.jsx)(r,{...Ee(e,t),hideUnchangedNodes:n}),B.__docgenInfo={description:`Same as JsonSchemaDiffSamplesStory (json-schema-diffs-utils.tsx), but reads the circular fixture
shape above and runs the merge with \`circular: true\`. Story/case factories, arg types and meta
keys are shared with the other JSON Schema Diffs Suite stories.`,methods:[],displayName:`JsonSchemaCircularDiffSamplesStory`,props:{hideUnchangedNodes:{required:!0,tsType:{name:`boolean`},description:``}}}})))()}var Oe,ke,Ae,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,je;function Me(){return(Me=e((()=>{me(),a(),s(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),I(),R(),ge(),ve(),be(),Se(),we(),se(),De(),le(),ae(),Oe=ce(Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":pe,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":i,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":o,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":l,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":d,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":p,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":h,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":_,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":y,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":x,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":C}),Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":T,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":D,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":k,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":j,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":N,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":F,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":L,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":z,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":xe,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":Ce})),ke=oe(Oe),Ae={title:`JSON Schema Diffs Suite/Circular`,component:B,argTypes:ue},V=de(B,ke),H=V(`001-self-object-description-updated`),U=V(`002-self-object-cycle-removed`),W=V(`003-self-object-cycle-added`),G=V(`004-self-array-description-updated`),K=V(`005-self-array-cycle-removed`),q=V(`006-self-array-cycle-added`),J=V(`007-chain-three-hop-description-updated`),Y=V(`008-chain-three-hop-cycle-removed`),X=V(`009-chain-three-hop-cycle-added`),Z=V(`010-combiner-variant-cycle-description-updated`),Q=V(`011-combiner-variant-cycle-cycle-removed`),$=V(`012-combiner-variant-cycle-cycle-added`),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("001-self-object-description-updated")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("002-self-object-cycle-removed")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("003-self-object-cycle-added")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("004-self-array-description-updated")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("005-self-array-cycle-removed")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("006-self-array-cycle-added")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("007-chain-three-hop-description-updated")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("008-chain-three-hop-cycle-removed")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("009-chain-three-hop-cycle-added")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("010-combiner-variant-cycle-description-updated")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("011-combiner-variant-cycle-cycle-removed")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("012-combiner-variant-cycle-cycle-added")`,...$.parameters?.docs?.source}}},je=[`Case_001_self_object_description_updated`,`Case_002_self_object_cycle_removed`,`Case_003_self_object_cycle_added`,`Case_004_self_array_description_updated`,`Case_005_self_array_cycle_removed`,`Case_006_self_array_cycle_added`,`Case_007_chain_three_hop_description_updated`,`Case_008_chain_three_hop_cycle_removed`,`Case_009_chain_three_hop_cycle_added`,`Case_010_combiner_variant_cycle_description_updated`,`Case_011_combiner_variant_cycle_cycle_removed`,`Case_012_combiner_variant_cycle_cycle_added`]})))()}Me();export{H as Case_001_self_object_description_updated,U as Case_002_self_object_cycle_removed,W as Case_003_self_object_cycle_added,G as Case_004_self_array_description_updated,K as Case_005_self_array_cycle_removed,q as Case_006_self_array_cycle_added,J as Case_007_chain_three_hop_description_updated,Y as Case_008_chain_three_hop_cycle_removed,X as Case_009_chain_three_hop_cycle_added,Z as Case_010_combiner_variant_cycle_description_updated,Q as Case_011_combiner_variant_cycle_cycle_removed,$ as Case_012_combiner_variant_cycle_cycle_added,je as __namedExportsOrder,Ae as default};