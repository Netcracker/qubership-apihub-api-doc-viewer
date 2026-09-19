import{c as se}from"./diffs-samples-cases-1df1f3ae.js";import{j as ce}from"./_commonjs-dynamic-modules-6308e768.js";import{d as te}from"./AsyncApiOperationViewer-7e4d71d7.js";import{D as re,a as ie}from"./DiffBadge-2b171eda.js";import{g as pe,h as me}from"./preprocess-04b84fe8.js";import{p as u}from"./parse-yaml-source-3e95a000.js";import{s as de}from"./combiner-changed-variant-43f703e4.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-0c1fa703.js";import"./DdlTableDiffsViewer-62d1ded1.js";/* empty css              */import"./DdlTableViewer-975eea68.js";import"./GraphQLOperationDiffViewer-346f0994.js";import"./GraphPropNodeViewer-40e9d38d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-e7bff01f.js";import"./public-api-99af098d.js";const le=`beforeSchema:
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

`,Ne=`afterSchema:
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
        - type: object
          description: Cyclic object variant
          properties:
            nested:
              $ref: "#/components/schemas/CyclicValue"

`,Fe={diffsMetaKey:re,aggregatedDiffsMetaKey:ie},Je=!1,oe={beforeYaml:{control:{type:"text"},table:{category:"Sample"},description:'Before sample YAML for reference ("beforeSchema" plus circular "beforeAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'},afterYaml:{control:{type:"text"},table:{category:"Sample"},description:'After sample YAML for reference ("afterSchema" plus circular "afterAdditionalComponents" definitions). The viewer always uses the bundled fixture for the selected case.'},hideUnchangedNodes:{control:{type:"boolean"},table:{category:"Display"},description:"Forwarded to JsonSchemaNextDiffsViewer's hideUnchangedNodes prop."}},Ue=5,xe=a=>({schema:a,expandedDepth:Ue,diffMetaKeys:Fe}),Ie=(a,c)=>{const e=u(a),o=u(c);return xe(pe({beforeSchema:e.beforeSchema,afterSchema:o.afterSchema,beforeAdditionalComponents:e.beforeAdditionalComponents,afterAdditionalComponents:o.afterAdditionalComponents,target:me,circular:!0}))},Me=a=>a.reduce((c,e)=>(c[e.caseId]=e,c),{}),ke=(a,c)=>e=>{const o=c[e];if(!o)throw new Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:o.beforeYaml,afterYaml:o.afterYaml,hideUnchangedNodes:Je},argTypes:oe,render:s=>{const S=c[s.caseId];return ce.jsx(a,{caseId:s.caseId,beforeYaml:S.beforeYaml,afterYaml:S.afterYaml,hideUnchangedNodes:s.hideUnchangedNodes})}}},He=(a,c)=>{const e=ke(a,c);return o=>({...e(o),play:async({canvasElement:s})=>{await de(s)}})},C=({beforeYaml:a,afterYaml:c,hideUnchangedNodes:e})=>ce.jsx(te,{...Ie(a,c),hideUnchangedNodes:e});C.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffSamplesStory",props:{hideUnchangedNodes:{required:!0,tsType:{name:"boolean"},description:""}}};const Ke=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/before.yaml":le,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/before.yaml":fe,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/before.yaml":he,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/before.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/before.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/before.yaml":be,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/before.yaml":Ce,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/before.yaml":Se,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/before.yaml":ue,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/before.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/before.yaml":je,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/before.yaml":Ae}),Ge=Object.assign({"../../../../samples/json-schema-diffs/type-changes/circular/001-self-object-description-updated/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/circular/002-self-object-cycle-removed/after.yaml":$e,"../../../../samples/json-schema-diffs/type-changes/circular/003-self-object-cycle-added/after.yaml":Ee,"../../../../samples/json-schema-diffs/type-changes/circular/004-self-array-description-updated/after.yaml":Re,"../../../../samples/json-schema-diffs/type-changes/circular/005-self-array-cycle-removed/after.yaml":Be,"../../../../samples/json-schema-diffs/type-changes/circular/006-self-array-cycle-added/after.yaml":Oe,"../../../../samples/json-schema-diffs/type-changes/circular/007-chain-three-hop-description-updated/after.yaml":De,"../../../../samples/json-schema-diffs/type-changes/circular/008-chain-three-hop-cycle-removed/after.yaml":Te,"../../../../samples/json-schema-diffs/type-changes/circular/009-chain-three-hop-cycle-added/after.yaml":Ve,"../../../../samples/json-schema-diffs/type-changes/circular/010-combiner-variant-cycle-description-updated/after.yaml":Ne,"../../../../samples/json-schema-diffs/type-changes/circular/011-combiner-variant-cycle-cycle-removed/after.yaml":we,"../../../../samples/json-schema-diffs/type-changes/circular/012-combiner-variant-cycle-cycle-added/after.yaml":Ye}),Le=se(Ke,Ge),Pe=Me(Le),ln={title:"JSON Schema Diffs Suite/Circular",component:C,argTypes:oe},n=He(C,Pe),t=n("001-self-object-description-updated"),r=n("002-self-object-cycle-removed"),i=n("003-self-object-cycle-added"),p=n("004-self-array-description-updated"),m=n("005-self-array-cycle-removed"),d=n("006-self-array-cycle-added"),l=n("007-chain-three-hop-description-updated"),f=n("008-chain-three-hop-cycle-removed"),h=n("009-chain-three-hop-cycle-added"),y=n("010-combiner-variant-cycle-description-updated"),_=n("011-combiner-variant-cycle-cycle-removed"),b=n("012-combiner-variant-cycle-cycle-added");var g,j,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("001-self-object-description-updated")',...(A=(j=t.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var v,$,E;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("002-self-object-cycle-removed")',...(E=($=r.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var R,B,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("003-self-object-cycle-added")',...(O=(B=i.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var D,T,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("004-self-array-description-updated")',...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var N,w,Y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("005-self-array-cycle-removed")',...(Y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:Y.source}}};var F,J,U;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("006-self-array-cycle-added")',...(U=(J=d.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var x,I,M;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("007-chain-three-hop-description-updated")',...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var k,H,K;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("008-chain-three-hop-cycle-removed")',...(K=(H=f.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,L,P;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("009-chain-three-hop-cycle-added")',...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var q,W,X;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("010-combiner-variant-cycle-description-updated")',...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var z,Q,Z;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("011-combiner-variant-cycle-cycle-removed")',...(Z=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("012-combiner-variant-cycle-cycle-added")',...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const fn=["Case_001_self_object_description_updated","Case_002_self_object_cycle_removed","Case_003_self_object_cycle_added","Case_004_self_array_description_updated","Case_005_self_array_cycle_removed","Case_006_self_array_cycle_added","Case_007_chain_three_hop_description_updated","Case_008_chain_three_hop_cycle_removed","Case_009_chain_three_hop_cycle_added","Case_010_combiner_variant_cycle_description_updated","Case_011_combiner_variant_cycle_cycle_removed","Case_012_combiner_variant_cycle_cycle_added"];export{t as Case_001_self_object_description_updated,r as Case_002_self_object_cycle_removed,i as Case_003_self_object_cycle_added,p as Case_004_self_array_description_updated,m as Case_005_self_array_cycle_removed,d as Case_006_self_array_cycle_added,l as Case_007_chain_three_hop_description_updated,f as Case_008_chain_three_hop_cycle_removed,h as Case_009_chain_three_hop_cycle_added,y as Case_010_combiner_variant_cycle_description_updated,_ as Case_011_combiner_variant_cycle_cycle_removed,b as Case_012_combiner_variant_cycle_cycle_added,fn as __namedExportsOrder,ln as default};
