import{c as se}from"./diffs-samples-cases-1df1f3ae.js";import{j as ae}from"./_commonjs-dynamic-modules-6308e768.js";import{d as te}from"./AsyncApiOperationViewer-ca4ded2c.js";import{D as re,a as ie}from"./DiffBadge-ceca5443.js";import{g as pe,h as me}from"./preprocess-b5de1a20.js";import{p as u}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-45426e65.js";import"./DdlTableDiffsViewer-90eb36a6.js";/* empty css              */import"./DdlTableViewer-5fe64823.js";import"./GraphQLOperationDiffViewer-e3d9068d.js";import"./GraphPropNodeViewer-6b50c183.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-50742c46.js";import"./public-api-99af098d.js";const le=`beforeSchema:
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

`,de=`beforeSchema:
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

`,Ae=`afterSchema:
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

`,ve=`afterSchema:
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

`,Ee=`afterSchema:
  $ref: "#/components/schemas/SelfArray"
afterAdditionalComponents:
  schemas:
    SelfArray:
      type: array
      description: Self-referencing array
      items:
        $ref: "#/components/schemas/SelfArray"

`,Oe=`afterSchema:
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

`,Ye=`afterSchema:
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

`,xe={diffsMetaKey:re,aggregatedDiffsMetaKey:ie},oe={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:'Before sample YAML for reference ("beforeSchema" plus circular "beforeAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:'After sample YAML for reference ("afterSchema" plus circular "afterAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'}},Fe=5,Je=(a,c)=>{const n=u(a),o=u(c);return{schema:pe({beforeSchema:n.beforeSchema,afterSchema:o.afterSchema,beforeAdditionalComponents:n.beforeAdditionalComponents,afterAdditionalComponents:o.afterAdditionalComponents,target:me,circular:!0}),expandedDepth:Fe,diffMetaKeys:xe,hideUnchangedNodes:!1}},Me=a=>a.reduce((c,n)=>(c[n.caseId]=n,c),{}),Ne=(a,c)=>n=>{const o=c[n];if(!o)throw new Error(`Sample case not found: ${n}`);return{name:n,args:{caseId:n,beforeYaml:o.beforeYaml,afterYaml:o.afterYaml},argTypes:oe,render:C=>{const S=c[C.caseId];return ae.jsx(a,{caseId:C.caseId,beforeYaml:S.beforeYaml,afterYaml:S.afterYaml})}}},b=({beforeYaml:a,afterYaml:c})=>ae.jsx(te,{...Je(a,c)});b.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory"};const Ie=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":le,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":de,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":je,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":ge}),ke=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":Ae,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":De,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":Te,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":Ye,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":we}),Ke=se(Ie,ke),Ue=Me(Ke),tn={title:"JSON Schema Diffs Suite/Circular Samples",component:b,argTypes:oe},e=Ne(b,Ue),s=e("001-self-object-description-updated"),t=e("002-self-object-cycle-removed"),r=e("003-self-object-cycle-added"),i=e("004-self-array-description-updated"),p=e("005-self-array-cycle-removed"),m=e("006-self-array-cycle-added"),l=e("007-chain-three-hop-description-updated"),d=e("008-chain-three-hop-cycle-removed"),f=e("009-chain-three-hop-cycle-added"),h=e("010-combiner-variant-cycle-description-updated"),y=e("011-combiner-variant-cycle-cycle-removed"),_=e("012-combiner-variant-cycle-cycle-added");var j,g,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("001-self-object-description-updated")',...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,$,R;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("002-self-object-cycle-removed")',...(R=($=t.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var B,E,O;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("003-self-object-cycle-added")',...(O=(E=r.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var D,T,V;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("004-self-array-description-updated")',...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var Y,w,x;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("005-self-array-cycle-removed")',...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var F,J,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("006-self-array-cycle-added")',...(M=(J=m.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var N,I,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("007-chain-three-hop-description-updated")',...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var K,U,G;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("008-chain-three-hop-cycle-removed")',...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,P,L;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("009-chain-three-hop-cycle-added")',...(L=(P=f.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var X,q,z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("010-combiner-variant-cycle-description-updated")',...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var Q,W,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("011-combiner-variant-cycle-cycle-removed")',...(Z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,ne,ce;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("012-combiner-variant-cycle-cycle-added")',...(ce=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};const rn=["Case_001_self_object_description_updated","Case_002_self_object_cycle_removed","Case_003_self_object_cycle_added","Case_004_self_array_description_updated","Case_005_self_array_cycle_removed","Case_006_self_array_cycle_added","Case_007_chain_three_hop_description_updated","Case_008_chain_three_hop_cycle_removed","Case_009_chain_three_hop_cycle_added","Case_010_combiner_variant_cycle_description_updated","Case_011_combiner_variant_cycle_cycle_removed","Case_012_combiner_variant_cycle_cycle_added"];export{s as Case_001_self_object_description_updated,t as Case_002_self_object_cycle_removed,r as Case_003_self_object_cycle_added,i as Case_004_self_array_description_updated,p as Case_005_self_array_cycle_removed,m as Case_006_self_array_cycle_added,l as Case_007_chain_three_hop_description_updated,d as Case_008_chain_three_hop_cycle_removed,f as Case_009_chain_three_hop_cycle_added,h as Case_010_combiner_variant_cycle_description_updated,y as Case_011_combiner_variant_cycle_cycle_removed,_ as Case_012_combiner_variant_cycle_cycle_added,rn as __namedExportsOrder,tn as default};
