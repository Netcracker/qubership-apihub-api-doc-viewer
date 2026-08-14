var ze=Object.defineProperty;var We=(e,a,r)=>a in e?ze(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var N=(e,a,r)=>(We(e,typeof a!="symbol"?a+"":a,r),r);import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{a1 as Qe,a2 as Ze,a3 as ea,a4 as aa,a5 as ra,a6 as na,a7 as ia,a8 as ta,a9 as be,aa as oa,ab as la,ac as sa,ad as Ee,ae as Se,af as Ve,ag as ua,ah as ve,ai as De,aj as da,ak as le,al as we,am as _e,an as Ne,ao as Me,ap as ke,aq as Te,ar as He,as as Ae,at as se,N as fa,_ as P,Z as Y,v as ue,Y as ie,au as ga,av as Ce,f as te,aw as Oe,y as ca,z as ha,F as ma,$ as pa,W as ya,a0 as ba,l as xe,S as Ea,u as Sa,E as Va,c as va,e as Da,L as wa,g as _a,m as Na}from"./index-71f1bfe0.js";import{n as Ma,i as T,o as B,p as ka,q as Ta,r as Ha,s as Aa,u as Ca,L as Oa,v as xa,w as qa,x as Ra,y as R,c as qe,P as O,A as oe,z as Pa,a as c,B as Ia,C as Re,E as La,X as ja,O as Ua,m as Fa,S as Ja,F as Ga,G as Ya,T as $a,H as Ba,I as L,J as j,K as U,M as F}from"./take-diff-side-background-color-85ec54fb.js";import{r as f}from"./index-f46741a2.js";import{R as Ka,r as Xa,V as za,a as Wa,P as Qa,U as Za,I as er,b as ar,c as rr}from"./index-c19463f3.js";class nr extends Ma{constructor(){super()}}const p={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},ir=Object.values(p),Pe="unknown",tr="any",or="nothing",g={UNKNOWN:Pe,ANY:tr,NOTHING:or,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},lr=Object.values(g);function sr(e){return!e||!ka(e)?!1:lr.some(a=>a===e)}function ur(e){return T(e)&&Qe in e}function Q(e,a){const r=e[a];return B(r)&&r.length>0}function ee(e){return!T(e)||B(e)?!1:Q(e,"allOf")||Q(e,"oneOf")||Q(e,"anyOf")}const dr="extensions",fr="location",S={root:p.ROOT,definition:p.DEFINITION,property:p.PROPERTY,additionalProperties:p.ADDITIONAL_PROPERTIES,patternProperty:p.PATTERN_PROPERTY,items:p.ITEMS,item:p.ITEM,additionalItems:p.ADDITIONAL_ITEMS,allOf:p.ALL_OF,anyOf:p.ANY_OF,oneOf:p.ONE_OF},gr=(e,a)=>{if(!T(a)||B(a))return a;if("example"in a&&!("examples"in a)){const{example:r}=a;return a.examples=[r],a}return a},cr="x-";function de(e){return e===void 0||typeof e=="symbol"?!1:(typeof e=="string"?e:`${e}`).startsWith(cr)}function hr(e,a){if(!T(a)||B(a))return a;const r=Reflect.ownKeys(a),i=r.filter(l=>de(l));if(i.length===0)return a;const n=new Set(i),t=i.reduce((l,s)=>(de(s)&&(l[s]=a[s]),l),{}),o={};for(const l of r)typeof l=="string"&&n.has(l)||(o[l]=a[l]);return o.extensions=t,o}const mr=[gr,hr];function M(e=S.root){return{"/allOf":{"/*":()=>M(S.allOf)},"/oneOf":{"/*":()=>M(S.oneOf)},"/anyOf":{"/*":()=>M(S.anyOf)},"/properties":{"/*":()=>M(S.property)},"/items":()=>({...M(S.items),"/*":({key:a})=>Ta(a)?M(S.item):{}}),"/additionalProperties":()=>M(S.additionalProperties),"/additionalItems":()=>M(S.additionalItems),"/patternProperties":{"/*":()=>M(S.patternProperty)},kind:e,complex:e===S.allOf||e===S.oneOf||e===S.anyOf,transformers:mr}}function pr(e){return Ha(e)}function yr(e,a){if(!a||typeof e=="number"||!e)return!1;const r=a.value();return!!r&&"required"in r&&Array.isArray(r.required)&&r.required.includes(String(e))}const b=class b extends Aa{constructor(a){super(),this.pick=a}static getJsonSchemaTreeNodeValueProps(a){switch(a){case g.UNKNOWN:case g.ANY:case g.NOTHING:case g.NULL:case g.BOOLEAN:return b.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case g.STRING:return[...b.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,le,Te,He,Ae,fr];case g.NUMBER:case g.INTEGER:return[...b.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,le,we,_e,Ne,Me,ke];case g.OBJECT:return[...b.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ua,ve,De,da];case g.ARRAY:return[...b.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ee,Se,Ve];default:return[]}}createNodeMeta(a){return this.buildNodeMeta(a,"",null,!1)}buildNodeMeta(a,r="",i=null,n=!1){const t=yr(r,i),o=ur(a)?{brokenRef:String(a.$ref)}:{};return!ee(a)&&T(a)?{...this.pick(a,b.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:t,...o,_fragment:a,isCycle:n}:{required:t,...o,_fragment:a,isCycle:n}}createNodeValue(a,r,i,n){if(i==null||!T(i)||ee(i))return null;const t=sr(i.type)?i.type:g.UNKNOWN;return t===g.UNKNOWN||t===g.ANY||t===g.NOTHING||t===g.NULL||t===g.BOOLEAN?{...n(i,b.getJsonSchemaTreeNodeValueProps(t)),type:t}:t===g.STRING?{...n(i,b.getJsonSchemaTreeNodeValueProps(t)),type:t}:t===g.NUMBER||t===g.INTEGER?{...n(i,b.getJsonSchemaTreeNodeValueProps(t)),type:t}:t===g.OBJECT?{...n(i,b.getJsonSchemaTreeNodeValueProps(t)),type:t}:t===g.ARRAY?{...n(i,b.getJsonSchemaTreeNodeValueProps(t)),type:t}:null}};N(b,"JSON_SCHEMA_TREE_NODE_META_PROPS",[Ze,ea,aa,ra]),N(b,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[na,ia,ta,be,oa,la,sa,dr]);let ae=b;class br extends Ca{constructor(r){const{source:i,materializeDepth:n,logger:t=qe()}=r;super();N(this,"tree");N(this,"source");N(this,"materializeDepth");N(this,"logger");N(this,"nodeDataBuilder");N(this,"lazyState",new Oa);N(this,"crawlHooks",null);this.source=i,this.materializeDepth=n,this.logger=t,this.tree=new nr,this.nodeDataBuilder=new ae((o,l)=>this.pick(o,l))}build(){if(!T(this.source))return this.tree;const r={parent:null,container:null,ancestors:new xa,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},i=M();return this.crawlHooks=pr({source:this.source,tree:this.tree,supportedNodeKinds:ir,createNodeFromRaw:(n,t,o,l,s)=>this.createNodeFromRaw(n,t,o,l,s),createNodeParams:(n,t,o)=>({value:T(n)&&!Array.isArray(n)?n:null,newDataLevel:!0,parent:t,container:o}),createStateForSimpleNode:(n,t)=>({parent:t,container:null,ancestors:n.ancestors,depth:n.depth,materializeDepth:n.materializeDepth,pathPrefix:n.pathPrefix}),createStateForComplexNode:(n,t)=>({parent:n.parent,container:t,ancestors:n.ancestors,depth:n.depth,materializeDepth:n.materializeDepth,pathPrefix:n.pathPrefix}),isSimpleNode:n=>this.isSimpleTreeNode(n),isComplexNode:n=>this.isComplexTreeNode(n),resolveNodeKey:(n,t)=>this.resolveNodeKey(n,t),isDisallowedValue:n=>n==null,lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:qa}}),this.logger.debug("[JSON Schema] Building tree from source:",this.source),se(this.source,this.crawlHooks,{state:r,rules:i}),this.tree}materializeChildren(r,i=1){const n=this.lazyState.pending.get(r.id);if(!n||!this.crawlHooks)return;this.lazyState.pending.delete(n.nodeId);const t={parent:r,container:null,ancestors:Ra(r,this.lazyState.fragments),depth:0,materializeDepth:i,pathPrefix:n.path};se(n.fragment,this.crawlHooks,{state:t,rules:n.rules},!0)}createNodeFromRaw(r,i,n,t,o){const{parent:l,container:s,newDataLevel:d,value:h}=o;if(t||ee(h)){const z=this.createNodeMeta(i,o),W={type:R.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:z,newDataLevel:d};return this.tree.createComplexNode(r,i,n,!1,W)}const q=this.createNodeValue(i,n,o),H=this.createNodeMeta(i,o),X={type:R.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:q,meta:H,newDataLevel:d};return this.tree.createSimpleNode(r,i,n,!1,X)}createNodeMeta(r,i){const{value:n,parent:t}=i;return this.nodeDataBuilder.buildNodeMeta(n,r,t,!1)}createNodeValue(r,i,n){const{value:t}=n;return this.nodeDataBuilder.createNodeValue(i,r,t,(o,l)=>this.pick(o,l))}resolveNodeKey(r,i){return T(i)&&typeof i.title=="string"&&i.title.length>0?i.title:r}isSimpleTreeNode(r){return r.type===R.SIMPLE}isComplexTreeNode(r){return r.type===R.COMPLEX}takeSimpleTreeNode(r){return r&&this.isSimpleTreeNode(r)?r:null}takeComplexTreeNode(r){return r&&this.isComplexTreeNode(r)?r:null}}const fe=new Set;function Ie(e){const{options:a,selectedOption:r,onSelectOption:i,variant:n,layoutSide:t=P}=e;return a.length===0?null:u.jsx("div",{className:"flex flex-row gap-2",children:a.map(o=>{const{diffsRelatedClassesList:l,isInvisible:s}=Er({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:t});if(s)return null;const d=l.join(" ");return u.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${n} ${r===o?"selected":""} ${d}`,onClick:h=>{h.preventDefault(),h.stopPropagation(),i(o)},children:o.title},o.node.id)})})}function Er(e){const{diffs:a,diffsSummary:r,descendantDiffsSummary:i,layoutSide:n}=e,t=[];let o=!1;if(a||r||i){const l=a==null?void 0:a[fa];if(l){const{styles:s}=l;switch(n){case ie:l.inherited||t.push(Y.borderShadow(s.before.borderShadowColor)),o=l.data.action===ue.add;break;case P:l.inherited||t.push(Y.borderShadow(s.after.borderShadowColor)),o=l.data.action===ue.remove;break}}if(!(l!=null&&l.inherited)&&(r||i)){const s=r??fe,d=i??fe,h=new Set([...s,...d]),E=ga(h);t.push(E?Y.roundMarker(E):"")}}return{diffsRelatedClassesList:t,isInvisible:o}}Ie.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends null ? never : keyof V)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>"}],raw:"Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}},{key:"descendantDiffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}}]}}],raw:"SelectorOption<N, V>[]"},description:""},selectedOption:{required:!0,tsType:{name:"union",raw:"SelectorOption<N, V> | null",elements:[{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends null ? never : keyof V)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>"}],raw:"Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}},{key:"descendantDiffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}}]}},{name:"null"}]},description:""},onSelectOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SelectorOption<N, V>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends null ? never : keyof V)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>"}],raw:"Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}},{key:"descendantDiffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"SelectorVariant"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var Le=(e=>(e.Primary="primary",e.Secondary="secondary",e))(Le||{});const Sr=" or null",Vr=" ";function je(e,a){if(a!=null&&a.brokenRef)return`$ref: ${a.brokenRef}`;const r=(e==null?void 0:e.type)??Pe,i=e&&"format"in e?e.format:void 0,n=e!=null&&e.nullable?Sr:"",t=[String(r)];return i&&t.push(String(i)),n&&t.push(n.trim()),t.join(Vr)}const vr=new Set([p.ALL_OF,p.ANY_OF,p.ONE_OF]);class Dr{resolveNodeVisibility(a){const r=a.nestedNodes(),i=r.length>1,n=r.length>0,t=!a.isCycle&&r.length>0;return{showSelector:i,showSubheader:n,isExpandable:t,initiallyExpanded:t&&!a.isCycle}}isCombinerKind(a){return vr.has(a)}}const wr=new Dr;function _r(e){return wr.resolveNodeVisibility(e)}const Ue=e=>{const{node:a,[oe]:r}=e,i=Ce(),n=a.nestedNodes(),t=f.useMemo(()=>_r(a),[a]),o=f.useMemo(()=>n.map((h,E)=>({title:je(h.value(),h.meta()),node:h,testId:`json-schema-combiner-option-${E}`})),[n]),[l,s]=f.useState(()=>o[0]??null),d=f.useCallback(h=>u.jsx(Ie,{options:o,selectedOption:l,onSelectOption:s,variant:Le.Primary,layoutSide:h}),[o,l]);return!t.showSelector||!l?null:u.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"flex flex-col",children:[u.jsx("div",{className:"px-4 py-1",children:d(P)}),u.jsx(te.Provider,{value:i+1,children:u.jsx(K,{"data-precededby":r??O.JSON_SCHEMA_VIEWER,node:l.node})})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | null",elements:[{name:"unknown"},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const y={ENUM:be,MIN_LENGTH:Te,MAX_LENGTH:He,PATTERN:Ae,MINIMUM:_e,MAXIMUM:Me,EXCLUSIVE_MINIMUM:Ne,EXCLUSIVE_MAXIMUM:ke,MULTIPLE_OF:we,MIN_PROPERTIES:ve,MAX_PROPERTIES:De,UNIQUE_ITEMS:Ve,MIN_ITEMS:Ee,MAX_ITEMS:Se};function ge(e){return e!=null}function Nr(e){if(!e)return[];const a=[],r=e;Array.isArray(r.enum)&&r.enum.length>0&&a.push(y.ENUM);const i=e;i.minLength!==void 0&&a.push(y.MIN_LENGTH),i.maxLength!==void 0&&a.push(y.MAX_LENGTH),i.pattern!==void 0&&a.push(y.PATTERN);const n=e;n.minimum!==void 0&&a.push(y.MINIMUM),n.maximum!==void 0&&a.push(y.MAXIMUM),ge(n.exclusiveMinimum)&&a.push(y.EXCLUSIVE_MINIMUM),ge(n.exclusiveMaximum)&&a.push(y.EXCLUSIVE_MAXIMUM),n.multipleOf!==void 0&&a.push(y.MULTIPLE_OF);const t=e;t.minProperties!==void 0&&a.push(y.MIN_PROPERTIES),t.maxProperties!==void 0&&a.push(y.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&a.push(y.UNIQUE_ITEMS),o.minItems!==void 0&&a.push(y.MIN_ITEMS),o.maxItems!==void 0&&a.push(y.MAX_ITEMS),a}function Mr(e){return e!=null}function kr(e){return!!(e!=null&&e.extensions)&&Object.keys(e.extensions).length>0}class Tr{resolveNodeVisibility(a,r){const i=a.value(),n=Pa(r),t=n&&!!(i!=null&&i.description),o=n&&Mr(i==null?void 0:i.default),l=n&&Array.isArray(i==null?void 0:i.examples)&&i.examples.length>0,s=n&&Array.isArray(i==null?void 0:i.enum)&&i.enum.length>0,d=n&&Nr(i).length>0,h=n&&kr(i),E=o||l||s||d||h;return{showDescription:t,showDefaultRow:o,showExamplesRow:l,showEnumValuesRow:s,showValidationsSection:d,showExtensionsRow:h,showContentSection:t||E,showAnyAdditionalInfoRow:E}}resolveListLastRowFlags(a,r){const{showDescription:i,showContentSection:n,showEnumValuesRow:t,showDefaultRow:o,showExamplesRow:l}=r;return{isTitleListLastRow:a&&!n,isDescriptionListLastRow:a&&i&&!t&&!o&&!l,isEnumAdditionalInfoListLastRow:a&&t&&!o&&!l,isDefaultAdditionalInfoListLastRow:a&&o&&!l,isExamplesAdditionalInfoListLastRow:a&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(a,r){return r==="default"?a.showEnumValuesRow:r==="examples"?a.showEnumValuesRow||a.showDefaultRow:!1}resolveIsExpandable(a){return a.isCycle?!1:a.childrenNodes().length>0}resolveInitiallyExpanded(a){return a.isCycle?!1:a.childrenNodes().length===0}}const I=new Tr;function Hr(e,a){return I.resolveNodeVisibility(e,a)}function ce(e,a){return I.resolveListLastRowFlags(e,a)}function Ar(e,a){return I.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,a)}function Cr(e){return I.resolveIsExpandable(e)}function Or(e){return I.resolveInitiallyExpanded(e)}const re=5;function xr(e){return Oe.trim(e.split(`
`)).length>re}function qr(e,a){const r=Oe.trim(e.split(`
`));return r.length<=re||a?e:r.slice(0,re).join(`
`)}const Rr=e=>{const{isExpandable:a,expanded:r,onToggle:i,variant:n=c.body2}=e;return a?u.jsx("div",{className:"mt-1",children:u.jsx("a",{className:`text-value-expander ${Lr(n)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:i,children:r?"Show less":"Show more"})}):null};function Pr(e,a,r){if(!a)return{resolvedValue:e,isInvisible:!1};const{data:i}=a,n=r===ie;return ca(i)?n?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof i.afterValue=="string"?i.afterValue:e,isInvisible:!1}:ha(i)?n?{resolvedValue:typeof i.beforeValue=="string"?i.beforeValue:e,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:ma(i)?{resolvedValue:n?typeof i.beforeValue=="string"?i.beforeValue:e:typeof i.afterValue=="string"?i.afterValue:e,isInvisible:!1}:{resolvedValue:e,isInvisible:!1}}function Ir(e){switch(e){case c.body1:return"text-value-body1";case c.h1:case c.h2:case c.h3:case c.h4:case c.h5:case c.h6:return"text-value-body2";case c.body2:default:return"text-value-body2"}}function Lr(e){switch(e){case c.h1:return"text-value-expander--h1";case c.h2:return"text-value-expander--h2";case c.h3:return"text-value-expander--h3";case c.h4:return"text-value-expander--h4";case c.h5:return"text-value-expander--h5";case c.h6:return"text-value-expander--h6";case c.body1:return"text-value-expander--body1";case c.body2:default:return"text-value-expander--body2"}}const Fe=f.memo(e=>{const{value:a,variant:r=c.body2,layoutSide:i,diff:n}=e,[t,o]=f.useState(!1),{resolvedValue:l,isInvisible:s}=f.useMemo(()=>Pr(a,n,i),[n,i,a]),d=f.useMemo(()=>qr(l,t),[t,l]),h=f.useMemo(()=>xr(l),[l]),E=f.useMemo(()=>{const H=Ia(n,i);return["markdown","text-slate-700",Ir(r),Y.background(H)].filter(Boolean).join(" ")},[n,i,r]),q=f.useCallback(()=>{o(H=>!H)},[]);return s||!d?null:u.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[u.jsx(Ka,{className:E,remarkPlugins:[Xa],children:d}),u.jsx(Rr,{isExpandable:h,expanded:t,onToggle:q,variant:r})]})});Fe.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const jr={[Re.DdlApiProperty]:La};function Ur(e){return jr[e]??ja}const $=f.memo(e=>{const{value:a,variant:r=c.body2,layoutSide:i,usage:n=Re.Default,diff:t}=e,{[oe]:o}=e,l=f.useMemo(()=>Ur(n),[n]);return u.jsx("div",{"data-precededby":o,className:`markdown-text-row-content flex w-full h-full ${l} gap-2`,children:u.jsx(Fe,{value:a,variant:r,layoutSide:i,diff:t})})});$.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},descendantDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<NodeId, ChangedPropertyMetaData>"}],raw:"Partial<Record<NodeId, ChangedPropertyMetaData>>"},description:""},diffsSeverities:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Je=f.memo(e=>{const a=pa(),{diffsSeverities:r,diffsSeverityPlacement:i=ya.DescriptionRow}=e,n=f.useMemo(()=>r==null?void 0:r[i],[r,i]),t=f.useMemo(()=>n==null?void 0:n.type,[n]),o=f.useMemo(()=>ba(n==null?void 0:n.causedAt),[n]);switch(a){case Ea:return u.jsx(Fa,{diffType:t,diffTypeCause:o,hidden:!1,children:u.jsx(Ja,{left:u.jsx($,{...e,layoutSide:ie}),right:u.jsx($,{...e,layoutSide:P})})});case xe:return u.jsx(Ua,{content:u.jsx($,{...e,layoutSide:P})})}return u.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});Je.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},descendantDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<NodeId, ChangedPropertyMetaData>"}],raw:"Partial<Record<NodeId, ChangedPropertyMetaData>>"},description:""},diffsSeverities:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};function Fr(e){return e.kind===p.ROOT}function Jr(e){return e.type===R.COMPLEX&&e.nestedNodes().length>0}const Gr="?",m="{value}",k="{exclusive_value}",A=">",J=">=",C="<",G="<=",V=1,v=2,D=4,w=8,he={0:{lower:void 0,upper:void 0},[V]:{lower:`${J} ${m}`,upper:void 0},[v]:{lower:`${A} ${k}`,upper:void 0},[D]:{lower:void 0,upper:`${G} ${m}`},[w]:{lower:void 0,upper:`${C} ${k}`},[v|V]:{lower:`${A} ${m}`,upper:void 0},[v|D]:{lower:`${A} ${k}`,upper:`${G} ${m}`},[v|w]:{lower:`${A} ${k}`,upper:`${C} ${k}`},[w|V]:{lower:`${J} ${m}`,upper:`${C} ${k}`},[w|D]:{lower:void 0,upper:`${C} ${m}`},[D|V]:{lower:`${J} ${m}`,upper:`${G} ${m}`},[v|V|D]:{lower:`${A} ${m}`,upper:`${G} ${m}`},[v|V|w]:{lower:`${A} ${m}`,upper:`${C} ${k}`},[v|D|w]:{lower:`${A} ${k}`,upper:`${C} ${m}`},[w|V|D]:{lower:`${J} ${m}`,upper:`${C} ${m}`},[V|v|D|w]:{lower:`${A} ${m}`,upper:`${C} ${m}`}};function ne(e){return e!=null}function me(e){return e!==void 0&&e!==!1}function Yr(e,a,r){return(e&(V|v))!==(V|v)||r===void 0||typeof a!="number"?e:r>=a?e&~V:e&~v}function $r(e,a,r){return(e&(D|w))!==(D|w)||r===void 0||typeof a!="number"?e:r<=a?e&~D:e&~w}function pe(e,a,r){return e.replace(m,`${a}`).replace(k,ne(r)?`${r}`:Gr)}function Br(e,a){return ne(e)||ne(a)}function Ge(e){const a={data:{},visible:!1},{min:r,max:i,exclusiveMin:n,exclusiveMax:t}=e,o=typeof n=="number"?n:void 0,l=typeof t=="number"?t:void 0;let s=0;r!==void 0&&(s|=V),me(n)&&(s|=v),i!==void 0&&(s|=D),me(t)&&(s|=w),typeof n!="number"&&!(s&V)&&(s&=~v),typeof t!="number"&&!(s&D)&&(s&=~w),s=Yr(s,r,o),s=$r(s,i,l);const d=s in he?{...he[s]}:void 0;return d!=null&&d.lower&&(a.data.lower=pe(d.lower,r,o)),d!=null&&d.upper&&(a.data.upper=pe(d.upper,i,l)),a.visible=Br(a.data.lower,a.data.upper),a}function Kr(e){return e?Ge({min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}):{data:{},visible:!1}}const x={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:y.UNIQUE_ITEMS};function Z(e,a,r,i){const n=Ge({min:e,max:a,exclusiveMin:r,exclusiveMax:i});if(n.visible)return[n.data.lower,n.data.upper].filter(Boolean).join(", ")}function Xr(e){const a=Kr(e);if(a.visible)return[a.data.lower,a.data.upper].filter(Boolean).join(", ")}function zr(e){return typeof e=="string"?e:JSON.stringify(e)}function Wr(e){if(!e)return[];const a=[],r=e,i=e,n=e,t=e,o=Z(r.minLength,r.maxLength);o&&a.push({key:x.VALUE_LENGTH,label:za,value:o}),r.pattern!==void 0&&a.push({key:x.VALUE_PATTERN,label:Wa,value:String(r.pattern)});const l=Z(n.minProperties,n.maxProperties);l&&a.push({key:x.PROPERTIES_COUNT,label:Qa,value:l}),t.uniqueItems!==void 0&&a.push({key:x.UNIQUE_ITEMS,label:Za,value:String(t.uniqueItems)});const s=Z(t.minItems,t.maxItems);s&&a.push({key:x.ITEMS_COUNT,label:er,value:s}),i.multipleOf!==void 0&&a.push({key:x.VALUE_MULTIPLE_OF,label:ar,value:String(i.multipleOf)});const d=Xr(i);return d&&a.push({key:x.VALUE_RANGE,label:rr,value:d}),a}function ye(e){return e.map(zr).join(", ")}const Ye=e=>{const{node:a,isLastInList:r=!1,[oe]:i}=e,n=Sa(),t=Ce(),o=a.value(),l=a.meta(),s=Fr(a),d=f.useMemo(()=>Hr(a,n),[a,n]),h=f.useMemo(()=>ce(r,d),[r,d]),E=a.childrenNodes(),q=f.useMemo(()=>Cr(a),[a]),[H,X]=f.useState(()=>s?E.length>0:Or(a)),z=f.useCallback(()=>{X(_=>!_)},[]),W=f.useMemo(()=>{if(s)return(o==null?void 0:o.title)??"";const _=l.required?" *":"";return`${a.key}${_}`},[s,l.required,a.key,o==null?void 0:o.title]),$e=f.useCallback(_=>u.jsx(Ga,{isVisible:!0,value:je(o,l),appearance:Ya.Text}),[l,o]),Be=f.useMemo(()=>Wr(o),[o]),Ke=s||H;return u.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"flex flex-col",children:[!s&&u.jsx($a,{"data-precededby":i,...h,value:W,expandable:q,expanded:H,onClickExpander:z,variant:c.body2,subheader:$e,usage:Ba.JsonSchemaProperty}),Ke&&u.jsxs(u.Fragment,{children:[d.showDescription&&(o==null?void 0:o.description)&&u.jsx(Je,{"data-precededby":O.JSON_SCHEMA_VIEWER,value:o.description}),d.showEnumValuesRow&&Array.isArray(o==null?void 0:o.enum)&&u.jsx(L,{"data-precededby":O.JSON_SCHEMA_VIEWER,label:"Allowed values",usage:j.JsonSchemaValidation,subheader:()=>u.jsx(U,{isVisible:!0,value:ye(o.enum),usage:F.JsonSchemaValidation}),...ce(r,{...d,showDefaultRow:!1,showExamplesRow:!1})}),d.showDefaultRow&&o&&"default"in o&&u.jsx(L,{"data-precededby":Ar(d,"default")?O.JSON_SCHEMA_VIEWER:O.JSON_SCHEMA_VIEWER,label:"Default",usage:j.JsonSchemaValidation,subheader:()=>u.jsx(U,{isVisible:!0,value:String(o.default),usage:F.JsonSchemaValidation})}),d.showExamplesRow&&Array.isArray(o==null?void 0:o.examples)&&u.jsx(L,{"data-precededby":O.JSON_SCHEMA_VIEWER,label:"Examples",usage:j.JsonSchemaValidation,subheader:()=>u.jsx(U,{isVisible:!0,value:ye(o.examples),usage:F.JsonSchemaValidation})}),d.showValidationsSection&&Be.map(_=>u.jsx(L,{"data-precededby":O.JSON_SCHEMA_VIEWER,label:_.label,usage:j.JsonSchemaValidation,subheader:()=>u.jsx(U,{isVisible:!0,value:_.value,usage:F.JsonSchemaValidation})},_.key)),u.jsx(te.Provider,{value:t+1,children:E.map((_,Xe)=>u.jsx(K,{"data-precededby":O.JSON_SCHEMA_VIEWER,node:_,isLastInList:Xe===E.length-1},_.id))})]})]})};Ye.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | null",elements:[{name:"unknown"},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const K=e=>{const{node:a}=e;return Jr(a)?u.jsx(Ue,{...e}):u.jsx(Ye,{...e})};K.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | null",elements:[{name:"unknown"},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Qr=f.memo(e=>e.schema===null||e.schema===void 0?null:u.jsx(Va,{fallback:u.jsx(va,{componentName:"JSON Schema Next Viewer"}),children:u.jsx(Zr,{...e})})),Zr=e=>{const{schema:a,expandedDepth:r=_a,displayMode:i=Na,devMode:n=!1,initialLevel:t=0}=e,o=f.useMemo(()=>qe(n),[n]),l=f.useMemo(()=>new br({source:a,materializeDepth:r,logger:o}).build(),[a,r,o]);console.debug("[JSON Schema] Schema:",a),console.debug("[JSON Schema] Tree:",l);const s=l.root;return s?u.jsx(Da.Provider,{value:i,children:u.jsx(wa.Provider,{value:xe,children:u.jsx(te.Provider,{value:t,children:u.jsx("div",{"data-testid":"json-schema-next-viewer",children:u.jsx(K,{node:s})})})})}):null};Qr.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};export{Qr as J,Ie as S,Le as a};
