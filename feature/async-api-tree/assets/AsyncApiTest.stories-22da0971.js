var Ot=Object.defineProperty;var Et=(t,e,n)=>e in t?Ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var M=(t,e,n)=>(Et(t,typeof e!="symbol"?e+"":e,n),n);import{j as a}from"./_commonjs-dynamic-modules-6308e768.js";import{y as jt,z as je,A as It,J as Dt,B as N,I as Wt,S as yt,F as ft,H as _t,K as Oe,E as Lt,e as Bt,h as Pt,L as Ct,w as Vt,j as $t,M as Rt}from"./GraphPropNodeViewer-0ee2ff10.js";import{T as Kt,i as f,b as x,c as Ht,d as T,e as qt,f as S,g as bt,A,a as Ie}from"./JsoViewer-a2ef33a5.js";import{r as y}from"./index-f46741a2.js";import{e as p}from"./preprocess-1a452c6d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8a26b57a.js";import"./GraphQLOperationDiffViewer-e1bd1f4d.js";class Gt extends Kt{constructor(){super()}}const r={ROOT:"root",OPERATION:"operation",BINDINGS:"bindings",BINDING:"binding",CHANNEL:"channel",MESSAGES:"messages",MESSAGE:"message",MESSAGE_HEADERS:"messageHeaders",MESSAGE_PAYLOAD:"messagePayload"},Ft=Object.values(r),O=(t,e)=>{if(!f(e)||x(e))return e;const n=Reflect.ownKeys(e),s=n.filter(c=>typeof c=="string"&&c.startsWith("x-"));if(s.length===0)return e;const i=new Set(s),o=s.reduce((c,m)=>{const u=e[m];return{...c,[m]:u}},{}),d={};for(const c of n)typeof c=="string"&&i.has(c)||(d[c]=e[c]);return d.extensions=o,d},St="<address unknown>",De=(t,e)=>!f(e)||x(e)||e.address?e:{...e,address:St},Yt=(t,e)=>{if(!f(e)||x(e))return e;const{bindingVersion:n,...s}=e;return{binding:s,version:n,protocol:typeof t=="symbol"?t.toString():`${t}`}},Ut=(t,e)=>!f(e)||x(e)?e:f(e.channel)?{...e,address:e.channel.address?e.channel.address:St}:e,Jt=(t,e)=>{if(!f(e)||x(e))return e;const{name:n,...s}=e;return{...s,...n?{internalTitle:n}:{}}},We=(t,e)=>f(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function xe(t=r.ROOT){return{"/operations":{"/*":()=>({...xe(r.OPERATION),transformers:[Ut,De,O]})},"/channel":()=>({...xe(r.CHANNEL),"/messages":{kind:void 0},transformers:[De,O]}),"/bindings":{"/*":{kind:r.BINDING,transformers:[O,Yt]},kind:r.BINDINGS,complex:!0},"/messages":{"/*":()=>({...xe(r.MESSAGE),transformers:[Jt,O]}),kind:r.MESSAGES,complex:!0},"/headers":{kind:r.MESSAGE_HEADERS,transformers:[We]},"/payload":{kind:r.MESSAGE_PAYLOAD,transformers:[We]},kind:t}}const h=class h extends Ht{constructor(n){super();M(this,"tree");this.source=n,this.tree=new Gt}static getAsyncApiTreeNodeValueProps(n){switch(n){case r.ROOT:return h.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS;case r.OPERATION:return[...h.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,"action","address","extensions"];case r.BINDING:return["binding","version","protocol","extensions"];case r.CHANNEL:return[...h.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,"extensions"];case r.MESSAGE:return[...h.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,"internalTitle","extensions"];case r.MESSAGE_HEADERS:return["schema","schemaFormat"];case r.MESSAGE_PAYLOAD:return["schema","schemaFormat"];default:return[]}}build(){if(!f(this.source))return this.tree;const n={parent:null,container:null,alreadyConvertedValuesCache:new Map},s=xe();return jt(this.source,[this.instantiateHookPreventingTreeBuildingProcessFromInfiniteLoop(),this.instantiateHookUnifyingValue(this.source),this.instantiateHookCreatingAsyncApiTreeNodes()],{state:n,rules:s}),this.tree}instantiateHookPreventingTreeBuildingProcessFromInfiniteLoop(){return({value:n,state:s,key:i,path:o})=>{if(typeof i=="symbol")return;const{alreadyConvertedValuesCache:d,parent:c,container:m}=s,u=d.get(n);if(!u||!this.isAsyncApiSimpleTreeNode(u)&&!this.isAsyncApiComplexTreeNode(u))return{value:n};if(!c||!this.isAsyncApiSimpleTreeNode(c))return{value:n};const l="#"+je(o),g=this.tree.createCycledClone(u,l,i,c);return m&&m.addNestedNode(g),c&&c.addChildNode(g),{done:!0}}}instantiateHookUnifyingValue(n){return({key:s,value:i,path:o,state:d,rules:c})=>!c||!Array.isArray(c.transformers)?void 0:{value:(c.transformers??[]).reduce((l,g)=>g(s,l,n,o,d),i)}}instantiateHookCreatingAsyncApiTreeNodes(){return({key:n,value:s,path:i,rules:o,state:d})=>{if(!o)return{done:!0};if(typeof n=="symbol")return{done:!0};if(s==null||!f(s)&&!It(s))return{done:!0};if(!o.kind||!Ft.includes(o.kind))return;const{parent:c,container:m}=d,u="#"+je(i),{kind:l,complex:g=!1}=o,v=m?{value:Array.isArray(s)?null:s,newDataLevel:!0,container:m,parent:m.parent}:{value:Array.isArray(s)?null:s,newDataLevel:!0,container:null,parent:c},b=this.createNodeFromRaw(u,n,l,g,v);if(!b)return;if(m?m.addNestedNode(b):c&&c.addChildNode(b),f(s)&&s.isPrimitive)return{done:!0};const w=new Map(d.alreadyConvertedValuesCache);w.set(s,b);let ve;return this.isAsyncApiSimpleTreeNode(b)&&(ve={parent:b,container:null,alreadyConvertedValuesCache:w}),this.isAsyncApiComplexTreeNode(b)&&(ve={parent:c,container:b,alreadyConvertedValuesCache:w}),{value:s,state:ve}}}createNodeFromRaw(n,s,i,o,d){const{parent:c,container:m,newDataLevel:u}=d;if(o){const b=this.createNodeMeta(s,d),w={type:T.COMPLEX,parent:c&&this.isAsyncApiSimpleTreeNode(c)?c:null,container:m&&this.isAsyncApiComplexTreeNode(m)?m:null,value:null,meta:b,newDataLevel:u};return this.tree.createComplexNode(n,s,i,!1,w)}const l=this.createNodeValue(s,i,{...d,parent:c,container:m}),g=this.createNodeMeta(s,d),v={type:T.SIMPLE,parent:c&&this.isAsyncApiSimpleTreeNode(c)?c:null,container:m&&this.isAsyncApiComplexTreeNode(m)?m:null,value:l,meta:g,newDataLevel:u};return this.tree.createSimpleNode(n,s,i,!1,v)}createNodeMeta(n,s){const{value:i,parent:o=null}=s;return{...this.isValueWithBrokenRef(i)?{brokenRef:`${i.$ref}`}:{},_fragment:i}}createNodeValue(n,s,i){const{value:o}=i;if(o==null||!qt(o))return null;switch(s){case r.OPERATION:return this.pick(o,h.getAsyncApiTreeNodeValueProps(s));case r.BINDING:return this.pick(o,h.getAsyncApiTreeNodeValueProps(s));case r.CHANNEL:return this.pick(o,h.getAsyncApiTreeNodeValueProps(s));case r.MESSAGE:return this.pick(o,h.getAsyncApiTreeNodeValueProps(s));case r.MESSAGE_HEADERS:return this.pick(o,h.getAsyncApiTreeNodeValueProps(s));case r.MESSAGE_PAYLOAD:return this.pick(o,h.getAsyncApiTreeNodeValueProps(s));default:return null}}isAsyncApiSimpleTreeNode(n){return n.type===T.SIMPLE}isAsyncApiComplexTreeNode(n){return!this.isAsyncApiSimpleTreeNode(n)}isValueWithBrokenRef(n){return f(n)&&Dt in n}getNodeComplexityType(n){return T.SIMPLE}};M(h,"ASYNC_API_TREE_NODE_META_PROPS",[]),M(h,"ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS",["title","description","summary"]);let Te=h;const _e={[r.BINDINGS]:1,[r.CHANNEL]:2,[r.MESSAGES]:3};function zt(t,e){switch(t){case r.OPERATION:return e.sort((n,s)=>{const i=_e[n.kind]??0,o=_e[s.kind]??0;return i-o});default:return e}}function Xt(t){return t.kind===r.OPERATION}function Qt(t){return t.kind===r.CHANNEL}function Zt(t){return t.kind===r.MESSAGES}function ea(t){return t.kind===r.MESSAGE}function na(t){return t.kind===r.MESSAGE_HEADERS&&t.key==="headers"}function sa(t){return t.kind===r.MESSAGE_PAYLOAD&&t.key==="payload"}function Ee(t){return t.kind===r.BINDINGS}function ta(t){return t.kind===r.BINDING}const wt=t=>{const e=N();return e===Wt?a.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]}):a.jsx(aa,{...t})},aa=t=>N()===yt?a.jsxs("div",{className:"flex flex-row",children:[a.jsx(Me,{...t}),a.jsx(Me,{...t})]}):a.jsx("div",{className:"flex flex-row",children:a.jsx(Me,{...t})}),ia={send:"bg-blue-500",receive:"bg-green-500"},Me=t=>{const{action:e,address:n}=t,o=N()===yt?"w-1/2":"w-full";return a.jsx("div",{className:`font-Inter-Medium text-base ${o} my-2`,children:a.jsxs("div",{className:"flex flex-row items-center w-max p-3 bg-slate-100 rounded-md gap-3",children:[a.jsx("div",{className:`font-bold px-2 py-1 ${ia[e]} text-white rounded-md`,children:e.toUpperCase()}),a.jsx("div",{className:"text-slate-500",children:n})]})})};wt.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""}}};const At=t=>{const{options:e,selectedOption:n,onSelectOption:s}=t;return e.length===0?null:a.jsx("div",{className:"flex flex-row gap-2",children:e.map(i=>{const o=i.value();return o?a.jsx("button",{className:`button-selector-option ${n===i?"selected":""}`,onClick:d=>{d.preventDefault(),d.stopPropagation(),s(i)},children:o.protocol},i.id):null})})};At.__docgenInfo={description:"",methods:[],displayName:"BindingSelector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDING"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"}],raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING>[]"},description:""},selectedOption:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | null",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDING"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},{name:"null"}]},description:""},onSelectOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING>) => void",signature:{arguments:[{type:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDING"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},name:"option"}],return:{name:"void"}}},description:""}}};const k=t=>{const{values:e,kind:n}=t,s=y.useMemo(()=>{switch(n){case r.OPERATION:return"Operation Extensions";case r.CHANNEL:return"Channel Extensions";case r.MESSAGE:return"Message Extensions";case r.BINDING:return"Binding Extensions";default:return"Extensions"}},[n]),i=y.useMemo(()=>{switch(n){case r.BINDING:return"h4";default:return"h3"}},[n]);return a.jsxs(a.Fragment,{children:[a.jsx(S,{value:s,expandable:!1,variant:i}),a.jsx(bt,{source:e,initialLevel:1})]})};k.__docgenInfo={description:"",methods:[],displayName:"SpecificationExtensions",props:{values:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof SPECIFICATION_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<SpecificationExtensionKey, unknown>"},description:""},kind:{required:!0,tsType:{name:"AsyncApiTreeNodeKinds[union]",raw:"typeof AsyncApiTreeNodeKinds[keyof typeof AsyncApiTreeNodeKinds]"},description:""}}};const E="Bindings",Le=new Map([[r.OPERATION,`Operation ${E}`],[r.CHANNEL,`Channel ${E}`],[r.MESSAGE,`Message ${E}`],[null,E]]),ke=t=>{const{node:e,relatedTo:n}=t,s=ft(),[i,o]=y.useState(null),d=e.nestedNodes(),c=y.useMemo(()=>d.filter(ta),[d]),m=i==null?void 0:i.value(),{version:u=null,binding:l=null}=m??{};y.useEffect(()=>{c.length>0&&i===null&&o(c[0])},[c,i]);const g=y.useCallback(v=>a.jsx(At,{options:c,selectedOption:i,onSelectOption:o}),[c,i]);return a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx(S,{value:Le.get(n)??Le.get(null),expandable:!1,expanded:!0,variant:"h3",subheader:g}),u&&a.jsxs("span",{className:"font-Inter-Medium font-bold text-sm mb-1",children:["Version: ",u]}),(m==null?void 0:m.extensions)&&a.jsx(k,{values:m.extensions,kind:r.BINDING}),a.jsx(bt,{source:l,displayMode:s,initialLevel:1})]})};ke.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},description:""},relatedTo:{required:!0,tsType:{name:"AsyncApiTreeNodeKinds[union]",raw:"typeof AsyncApiTreeNodeKinds[keyof typeof AsyncApiTreeNodeKinds]"},description:""}}};const Nt=t=>{const{node:e}=t,n=_t(),s=N(),i=e.value(),o=y.useMemo(()=>`Channel ${(i==null?void 0:i.title)??e.key.toString()??""}`.trim(),[i,e]),d=e.childrenNodes();return a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx(S,{value:o,expandable:!1,expanded:!0,variant:"h2"}),(i==null?void 0:i.description)&&a.jsx(A,{children:a.jsx(Oe,{value:i.description,layoutMode:s,level:n})}),a.jsx(ra,{children:d}),(i==null?void 0:i.extensions)&&a.jsx(k,{values:i.extensions,kind:r.CHANNEL})]})},ra=t=>{const{children:e}=t;return e.length===0?null:a.jsx("div",{className:"flex flex-col gap-5",children:e.map(n=>{if(Ee(n))return a.jsx(ke,{node:n,relatedTo:r.CHANNEL},n.key)})})};Nt.__docgenInfo={description:"",methods:[],displayName:"ChannelNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},description:""}}};const xt=t=>{var u,l;const{node:e}=t,n=ft(),s=e.value(),i=(s==null?void 0:s.description)??"",o=e.childrenNodes(),d=o.find(Ee),c=o.find(na),m=o.find(sa);return a.jsxs("div",{className:"flex flex-col gap-1",children:[i&&a.jsx(A,{children:a.jsx(Oe,{value:i,level:0})}),(s==null?void 0:s.extensions)&&a.jsx(k,{values:s.extensions,kind:r.MESSAGE}),d&&a.jsx(ke,{node:d,relatedTo:r.MESSAGE}),c&&a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx(S,{value:"Headers",variant:"h3",expandable:!1}),a.jsx(A,{children:a.jsx(Ie,{schema:(u=c.value())==null?void 0:u.schema,displayMode:n})})]}),m&&a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx(S,{value:"Payload",variant:"h3",expandable:!1}),a.jsx(A,{children:a.jsx(Ie,{schema:(l=m.value())==null?void 0:l.schema,displayMode:n})})]})]})};xt.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},description:""}}};const kt=t=>{const{options:e,selectedOption:n,onSelectOption:s}=t;return e.length===0?null:a.jsx("div",{className:"flex flex-row gap-2",children:e.map(i=>{const o=i.value();return o?a.jsx("button",{className:`button-selector-option ${n===i?"selected":""}`,onClick:d=>{d.preventDefault(),d.stopPropagation(),s(i)},children:o.title??o.internalTitle??"unknown"},i.id):null})})};kt.__docgenInfo={description:"",methods:[],displayName:"MessageSelector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"}],raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>[]"},description:""},selectedOption:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> | null",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},{name:"null"}]},description:""},onSelectOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>) => void",signature:{arguments:[{type:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},name:"option"}],return:{name:"void"}}},description:""}}};const vt=t=>{const{node:e}=t,[n,s]=y.useState(null),o=e.nestedNodes().filter(ea);y.useEffect(()=>{o.length>0&&n===null&&s(o[0])},[o,n]);const d=y.useCallback(c=>a.jsx(kt,{options:o,selectedOption:n,onSelectOption:s}),[o,n]);return a.jsxs("div",{children:[a.jsx(S,{value:"Messages",expandable:!1,expanded:!0,variant:"h2",subheader:d}),n&&a.jsx(xt,{node:n})]})};vt.__docgenInfo={description:"",methods:[],displayName:"MessagesNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},description:""}}};const Mt=t=>{const{node:e}=t,n=N(),s=e.value(),i=y.useMemo(()=>zt(r.OPERATION,e.childrenNodes()),[e]);return a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx(S,{value:(s==null?void 0:s.title)??e.key.toString()??"No title",expandable:!1,variant:"h1"}),a.jsx(wt,{action:(s==null?void 0:s.action)??"",address:(s==null?void 0:s.address)??""}),a.jsx(A,{children:a.jsx(Oe,{value:(s==null?void 0:s.description)??"",layoutMode:n})}),(s==null?void 0:s.extensions)&&a.jsx(k,{values:s.extensions,kind:r.OPERATION}),a.jsx(oa,{children:i})]})},oa=t=>{const{children:e}=t;return a.jsx("div",{className:"flex flex-col gap-5",children:e.map(n=>Ee(n)?a.jsx(ke,{node:n,relatedTo:r.OPERATION},n.key):Qt(n)?a.jsx(Nt,{node:n},n.key):Zt(n)?a.jsx(vt,{node:n},n.key):null)})};Mt.__docgenInfo={description:"",methods:[],displayName:"OperationNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiNodeMeta>"},description:""}}};const Tt=y.memo(t=>a.jsx(Lt,{fallback:a.jsx(Bt,{componentName:"Async API Operation Viewer"}),children:a.jsx(pa,{...t})})),pa=y.memo(t=>{const{source:e,operationType:n,operationName:s,displayMode:i=Rt}=t,d=new Te(e).build();console.debug("[AsyncAPI] Source:",e),console.debug("[AsyncAPI] Tree:",d);const c=d.root;if(!c)return null;const u=c.childrenNodes().find(l=>{if(!Xt(l))return!1;const g=l.value();return l.key===s&&(g==null?void 0:g.action)===n});return u?a.jsx(Pt.Provider,{value:i,children:a.jsxs(Ct.Provider,{value:Vt,children:[" ",a.jsx($t.Provider,{value:0,children:a.jsx(Mt,{node:u})})]})}):null});Tt.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationType:{required:!1,tsType:{name:"string"},description:""},operationName:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""}}};const Sa={title:"Async Api Viewer",component:Tt,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},j={args:{source:{}}},ca={asyncapi:"3.0.0",info:{title:"example-event-service",version:"1.0.0","x-generator":"springwolf"},defaultContentType:"application/json",servers:{"kafka-main":{host:"kafka-host",protocol:"kafka"}},channels:{"customer-change-topic":{address:"customer-change-topic",description:"Channel for customer change notifications",messages:{BaseEventMessage:{$ref:"#/components/messages/BaseEventMessage"}},servers:[{$ref:"#/servers/kafka-main"}],bindings:{},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},operations:{"customer-change-topic_send_BaseEvent":{action:"send",channel:{$ref:"#/channels/customer-change-topic"},title:"Customer change topic send",description:"Send events about Customer's data changes",bindings:{kafka:{bindingVersion:"0.5.0"}},messages:[{$ref:"#/channels/customer-change-topic/messages/BaseEventMessage"}],"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},components:{schemas:{HeadersExample:{title:"HeadersExample",type:"object",properties:{"X-Idempotency-Key":{type:"string"}},examples:[{"X-Idempotency-Key":"string"}]},BaseEvent:{title:"BaseEvent",type:"object",properties:{currentInstance:{type:"object",description:"New data state"},currentModelVersion:{type:"integer",description:"Model Version",format:"int32"},previousInstance:{type:"object",description:"Previous data state"},resourceAction:{type:"string",description:"Resource Action"},resourceType:{type:"string",description:"Resource Type"}},description:"Base event to describe Customer's data changes",examples:[{currentInstance:{},currentModelVersion:0,previousInstance:{},resourceAction:"string",resourceType:"string"}],required:["currentInstance","currentModelVersion","previousInstance","resourceAction","resourceType"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"},payload:{$ref:"#/components/schemas/BaseEvent"},description:"Base event to describe Customer's data changes",name:"BaseEventMessage",title:"BaseEvent",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,arr:[1,2,3],obj:{key:"value"},sch:{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10},bbb:{type:"integer",description:"BBB",minimum:1,maximum:100},ccc:{type:"boolean",description:"CCC",default:!0},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"number",description:"Number",minimum:1,maximum:100},{type:"boolean",description:"Boolean",default:!0}]}}},nestedObj:{obj:{aaa:1234,bbb:!0,empty:null,arr:[1,2,3],sch:{type:"array",items:{type:"string",description:"Array item",minLength:1,maxLength:10}},combinerSch:{oneOf:[{type:"string",description:"String",minLength:1,maxLength:10},{type:"object",properties:{aaa:{type:"string",description:"AAA",minLength:1,maxLength:10}}}]}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}},"x-string-extension":"value","x-integer-extension":1,"x-boolean-extension":!0,"x-number-extension":1,"x-array-extension":[1,2,3],"x-object-extension":{key:"value"}}}}},I={args:{source:p({source:ca}),operationName:"customer-change-topic_send_BaseEvent",operationType:"send"}},D={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-nothing":{action:"send"}}}}),operationName:"send-operation-with-nothing",operationType:"send"}},W={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title":{action:"send",title:"Send Operation With Title"}}}}),operationName:"send-operation-with-title",operationType:"send"}},_={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description":{action:"send",description:"Description of Send Operation With Description"}}}}),operationName:"send-operation-with-description",operationType:"send"}},L={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-title-and-description":{action:"send",title:"Send Operation With Title And Description",description:"Description of Send Operation With Title And Description"}}}}),operationName:"send-operation-with-title-and-description",operationType:"send"}},B={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-root-level-channel-with-nothing",operationType:"send"}},P={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title",operationType:"send"}},C={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-description",operationType:"send"}},V={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-title-and-description":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",title:"Title of First Channel",description:"Description of First Channel"}}}}),operationName:"send-operation-with-root-level-channel-with-title-and-description",operationType:"send"}},$={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-binding-with-nothing",operationType:"send"}},R={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-description-and-binding-with-nothing":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-description-and-binding-with-nothing",operationType:"send"}},K={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-root-level-channel-with-two-bindings":{action:"send",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address",bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}),operationName:"send-operation-with-root-level-channel-with-two-bindings",operationType:"send"}},H={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-root-level-channel-with-nothing":{action:"send",description:"Description of Send Operation With Description And Root Level Channel With Nothing",channel:{$ref:"#/channels/first-channel-key"}}},channels:{"first-channel-key":{address:"first-channel-address"}}}}),operationName:"send-operation-with-description-and-root-level-channel-with-nothing",operationType:"send"}},q={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-bindings-kafka",operationType:"send"}},G={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-only-primitive-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,empty:null}}}}}}),operationName:"send-operation-with-bindings-kafka-with-only-primitive-props",operationType:"send"}},F={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-object-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",num:1111,str:"string",bool:!0,empty:null,obj:{key:"string value"},arr:[1,2,3],complexObj:{nestedObj:{aaa:2222,bbb:!1,ccc:"aaabbb",empty:null,arr:[1,2]}},complexArr:[{aaa:3333,bbb:!0,ccc:"bbbccc",empty:null,arr:[2,3],nestedObj:{aaa:4444,bbb:!1,empty:null,arr:[3,4]}}]}}}}}}),operationName:"send-operation-with-bindings-kafka-with-object-props",operationType:"send"}},Y={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-bindings-kafka-with-schema-props":{action:"send",bindings:{kafka:{bindingVersion:"0.5.0",stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},nestedStringSch:{stringSch:{type:"string",description:"Nested string schema",minLength:7,maxLength:70}},numberSch:{type:"number",description:"Number schema",minimum:1,maximum:100},nestedNumberSch:{numberSch:{type:"number",description:"Nested number schema",minimum:7,maximum:700}},booleanSch:{type:"boolean",description:"Boolean schema",default:!0},nestedBooleanSch:{booleanSch:{type:"boolean",description:"Nested boolean schema",default:!1}},arraySch:{type:"array",items:{type:"string",description:"Array string item",minLength:1,maxLength:10}},nestedArraySch:{arraySch:{type:"array",description:"Nested array schema",items:{type:"number",description:"Nested array number item",minimum:4,maximum:444}}},objectSch:{type:"object",properties:{aaa:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}},nestedObjectSch:{objectSch:{type:"object",description:"Nested object schema",properties:{aaa:{type:"number",description:"Nested object number property",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10}}}},nestedSchemasInArray:[{type:"string",description:"Nested string schema in array",minLength:1,maxLength:10},{type:"number",description:"Nested number schema in array",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10},{type:"boolean",description:"Nested boolean schema in array",default:!0},{type:"object",description:"Nested object schema in array",properties:{aaa:{type:"number",minimum:1}}},{type:"array",description:"Nested array schema in array",items:{type:"integer",maximum:100,multipleOf:10}}]}}}}}}),operationName:"send-operation-with-bindings-kafka-with-schema-props",operationType:"send"}},U={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-two-bindings":{action:"send",bindings:{kafka:{clientId:"order-producer",groupId:"order-processing",bindingVersion:"0.4.0"},amqp:{mandatory:!0,priority:5,deliveryMode:2,expiration:6e4,userId:"svc-order",bindingVersion:"0.3.0"}}}}}}),operationName:"send-operation-two-bindings",operationType:"send"}},J={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-bindings-with-nothing":{action:"send",description:"Description of Send Operation With Description And Bindings With Nothing",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}),operationName:"send-operation-with-description-and-bindings-with-nothing",operationType:"send"}},z={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{}}}}}),operationName:"send-operation-with-message-with-nothing",operationType:"send"}},X={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message"}}}}}),operationName:"send-operation-with-message-with-name",operationType:"send"}},Q={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title",operationType:"send"}},Z={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-description",operationType:"send"}},ee={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-description",operationType:"send"}},ne={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-title-and-description",operationType:"send"}},se={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-name-and-title-and-description":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{messages:{BaseEventMessage:{name:"base-event-message",title:"Base Event Message",description:"Description of Base Event Message"}}}}}),operationName:"send-operation-with-message-with-name-and-title-and-description",operationType:"send"}},te={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"string",description:"Primitive header example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers",operationType:"send"}},ae={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers":{action:"send",messages:[{$ref:"#/components/messages/BaseEventMessage"}]}},components:{schemas:{HeadersExample:{type:"object",description:"Headers example",properties:{"X-Idempotency-Key":{type:"string"}}}},messages:{BaseEventMessage:{headers:{$ref:"#/components/schemas/HeadersExample"}}}}}}),operationName:"send-operation-with-message-with-objective-headers",operationType:"send"}},ie={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-payload",operationType:"send"}},re={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-payload",operationType:"send"}},oe={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-payload",operationType:"send"}},pe={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-payload",operationType:"send"}},ce={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-primitive-headers-and-objective-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]},Status:{type:"object",description:"Status enum example",properties:{status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}}}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-primitive-headers-and-objective-payload",operationType:"send"}},de={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-objective-headers-and-primitive-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}}},Status:{type:"string",description:"Status enum example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{headers:{$ref:"#/components/schemas/Identifier"},payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-objective-headers-and-primitive-payload",operationType:"send"}},me={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-nothing",operationType:"send"}},ue={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-primitive-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",num:123,str:"string",bool:!0,empty:null}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-primitive-props",operationType:"send"}},le={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-object-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",obj:{key:"string value"},arr:[1,2,3],complexObj:{nestedObj:{aaa:2222,bbb:!1,ccc:"aaabbb",empty:null,arr:[1,2]}},complexArr:[{aaa:3333,bbb:!0,ccc:"bbbccc",empty:null,arr:[2,3],nestedObj:{aaa:4444,bbb:!1,empty:null,arr:[3,4]}}]}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-object-props",operationType:"send"}},ge={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-bindings-with-schema-props":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",stringSch:{type:"string",description:"String schema",minLength:1,maxLength:10},nestedStringSch:{stringSch:{type:"string",description:"Nested string schema",minLength:7,maxLength:70}},numberSch:{type:"number",description:"Number schema",minimum:1,maximum:100},nestedNumberSch:{numberSch:{type:"number",description:"Nested number schema",minimum:7,maximum:700}},booleanSch:{type:"boolean",description:"Boolean schema",default:!0},nestedBooleanSch:{booleanSch:{type:"boolean",description:"Nested boolean schema",default:!1}},arraySch:{type:"array",items:{type:"string",description:"Array string item",minLength:1,maxLength:10}},nestedArraySch:{arraySch:{type:"array",description:"Nested array schema",items:{type:"number",description:"Nested array number item",minimum:4,maximum:444}}},objectSch:{type:"object",properties:{aaa:{type:"string",description:"Object string property",enum:["aaa","bbb","ccc"]}}},nestedObjectSch:{objectSch:{type:"object",description:"Nested object schema",properties:{aaa:{type:"number",description:"Nested object number property",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10}}}},nestedSchemasInArray:[{type:"string",description:"Nested string schema in array",minLength:1,maxLength:10},{type:"number",description:"Nested number schema in array",minimum:1,exclusiveMinimum:!0,maximum:100,exclusiveMaximum:!0,multipleOf:10},{type:"boolean",description:"Nested boolean schema in array",default:!0},{type:"object",description:"Nested object schema in array",properties:{aaa:{type:"number",minimum:1}}},{type:"array",description:"Nested array schema in array",items:{type:"integer",maximum:100,multipleOf:10}}]}}}}}}}),operationName:"send-operation-with-message-with-bindings-with-schema-props",operationType:"send"}},he={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-two-bindings":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{bindings:{kafka:{bindingVersion:"0.5.0",key:{type:"string",description:"Partitioning key for the message",minLength:1},schemaIdLocation:"header",schemaIdPayloadEncoding:"application/json",schemaLookupStrategy:"topicNameStrategy"},rabbitmq:{contentEncoding:"application/json",messageType:"orders.created",bindingVersion:"0.2.0"}}}}}}}),operationName:"send-operation-with-message-with-two-bindings",operationType:"send"}},ye={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-headers":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{schemas:{Identifier:{type:"string",description:"Identifier example",minLength:1,maxLength:10,examples:["1234567890","abcdefghij","ABCDEFGHIJ"]}},messages:{StatusMessage:{description:"Status message description",headers:{$ref:"#/components/schemas/Identifier"}}}}}}),operationName:"send-operation-with-message-with-description-and-headers",operationType:"send"}},fe={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-payload":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",payload:{$ref:"#/components/schemas/Status"}}}}}}),operationName:"send-operation-with-message-with-description-and-payload",operationType:"send"}},be={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-message-with-description-and-binding-with-nothing":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"}]}},components:{messages:{StatusMessage:{description:"Status message description",bindings:{kafka:{bindingVersion:"0.5.0"}}}}}}}),operationName:"send-operation-with-message-with-description-and-binding-with-nothing",operationType:"send"}},Se={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-two-messages-with-names":{action:"send",messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/IdentifierMessage"}]}},components:{messages:{StatusMessage:{name:"StatusMessage"},IdentifierMessage:{name:"IdentifierMessage"}}}}}),operationName:"send-operation-with-two-messages-with-names",operationType:"send"}},we={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-description-and-message-with-nothing":{action:"send",description:"Description of Send Operation With Description And Message With Nothing",messages:[{$ref:"#/components/messages/StatusMessage"}]}},messages:{StatusMessage:{}}}}),operationName:"send-operation-with-description-and-message-with-nothing",operationType:"send"}},Ae={args:{source:p({source:{asyncapi:"3.0.0",operations:{"send-operation-with-minimal-overall-structure":{action:"send",description:"Description of Send Operation With Minimal Overall Structure",channel:{$ref:"#/channels/first-channel-key"},messages:[{$ref:"#/components/messages/StatusMessage"},{$ref:"#/components/messages/AnotherStatusMessage"}],bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},channels:{"first-channel-key":{address:"first-channel-address",description:"Description of First Channel",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}}}},components:{schemas:{Identifier1:{type:"string",description:"Identifier example",minLength:1,maxLength:10},Status1:{type:"object",description:"Status example",properties:{status:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}}},Identifier2:{type:"object",description:"Identifier example",properties:{identifier:{type:"string",description:"Identifier example"}}},Status2:{type:"string",description:"Status example",enum:["not_started","in_progress","failed","success"]}},messages:{StatusMessage:{name:"StatusMessage",description:"Description of Status Message",bindings:{kafka:{bindingVersion:"0.5.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.2.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier1"},payload:{$ref:"#/components/schemas/Status1"}},AnotherStatusMessage:{name:"AnotherStatusMessage",description:"Description of Another Status Message",bindings:{kafka:{bindingVersion:"0.2.0",property:"kafka-property"},rabbitmq:{bindingVersion:"0.5.0",property:"rabbitmq-property"}},headers:{$ref:"#/components/schemas/Identifier2"},payload:{$ref:"#/components/schemas/Status2"}}}}}}),operationName:"send-operation-with-minimal-overall-structure",operationType:"send"}},Ne={args:{source:p({source:{asyncapi:"3.0.0",operations:{"receive-operation-with-nothing":{action:"receive"}}}}),operationName:"receive-operation-with-nothing",operationType:"receive"}};var Be,Pe,Ce;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    source: {}
  }
}`,...(Ce=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var Ve,$e,Re;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: KAFKA_E2E_SOURCE
    }),
    operationName: 'customer-change-topic_send_BaseEvent',
    operationType: 'send'
  }
}`,...(Re=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Re.source}}};var Ke,He,qe;D.parameters={...D.parameters,docs:{...(Ke=D.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-nothing": {
            action: "send"
          }
        }
      }
    }),
    operationName: 'send-operation-with-nothing',
    operationType: 'send'
  }
}`,...(qe=(He=D.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};var Ge,Fe,Ye;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-title": {
            action: "send",
            title: "Send Operation With Title"
          }
        }
      }
    }),
    operationName: 'send-operation-with-title',
    operationType: 'send'
  }
}`,...(Ye=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Ye.source}}};var Ue,Je,ze;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description": {
            action: "send",
            description: "Description of Send Operation With Description"
          }
        }
      }
    }),
    operationName: 'send-operation-with-description',
    operationType: 'send'
  }
}`,...(ze=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:ze.source}}};var Xe,Qe,Ze;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-title-and-description": {
            action: "send",
            title: "Send Operation With Title And Description",
            description: "Description of Send Operation With Title And Description"
          }
        }
      }
    }),
    operationName: 'send-operation-with-title-and-description',
    operationType: 'send'
  }
}`,...(Ze=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var en,nn,sn;B.parameters={...B.parameters,docs:{...(en=B.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-nothing',
    operationType: 'send'
  }
}`,...(sn=(nn=B.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var tn,an,rn;P.parameters={...P.parameters,docs:{...(tn=P.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-title',
    operationType: 'send'
  }
}`,...(rn=(an=P.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,pn,cn;C.parameters={...C.parameters,docs:{...(on=C.parameters)==null?void 0:on.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-description',
    operationType: 'send'
  }
}`,...(cn=(pn=C.parameters)==null?void 0:pn.docs)==null?void 0:cn.source}}};var dn,mn,un;V.parameters={...V.parameters,docs:{...(dn=V.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title-and-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel",
            description: "Description of First Channel"
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-title-and-description',
    operationType: 'send'
  }
}`,...(un=(mn=V.parameters)==null?void 0:mn.docs)==null?void 0:un.source}}};var ln,gn,hn;$.parameters={...$.parameters,docs:{...(ln=$.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-nothing',
    operationType: 'send'
  }
}`,...(hn=(gn=$.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var yn,fn,bn;R.parameters={...R.parameters,docs:{...(yn=R.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description-and-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-description-and-binding-with-nothing',
    operationType: 'send'
  }
}`,...(bn=(fn=R.parameters)==null?void 0:fn.docs)==null?void 0:bn.source}}};var Sn,wn,An;K.parameters={...K.parameters,docs:{...(Sn=K.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-two-bindings": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                key: {
                  type: "string",
                  description: "Partitioning key for the message",
                  minLength: 1
                },
                schemaIdLocation: "header",
                schemaIdPayloadEncoding: "application/json",
                schemaLookupStrategy: "topicNameStrategy"
              },
              rabbitmq: {
                contentEncoding: "application/json",
                messageType: "orders.created",
                bindingVersion: "0.2.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-root-level-channel-with-two-bindings',
    operationType: 'send'
  }
}`,...(An=(wn=K.parameters)==null?void 0:wn.docs)==null?void 0:An.source}}};var Nn,xn,kn;H.parameters={...H.parameters,docs:{...(Nn=H.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-root-level-channel-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Root Level Channel With Nothing",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address"
          }
        }
      }
    }),
    operationName: 'send-operation-with-description-and-root-level-channel-with-nothing',
    operationType: 'send'
  }
}`,...(kn=(xn=H.parameters)==null?void 0:xn.docs)==null?void 0:kn.source}}};var vn,Mn,Tn;q.parameters={...q.parameters,docs:{...(vn=q.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka',
    operationType: 'send'
  }
}`,...(Tn=(Mn=q.parameters)==null?void 0:Mn.docs)==null?void 0:Tn.source}}};var On,En,jn;G.parameters={...G.parameters,docs:{...(On=G.parameters)==null?void 0:On.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-only-primitive-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                num: 123,
                str: "string",
                bool: true,
                // TODO: api-unifier removes "null" value during normalization
                empty: null
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-only-primitive-props',
    operationType: 'send'
  }
}`,...(jn=(En=G.parameters)==null?void 0:En.docs)==null?void 0:jn.source}}};var In,Dn,Wn;F.parameters={...F.parameters,docs:{...(In=F.parameters)==null?void 0:In.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-object-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                num: 1111,
                str: "string",
                bool: true,
                // TODO: api-unifier removes "null" value during normalization
                empty: null,
                obj: {
                  key: "string value"
                },
                arr: [1, 2, 3],
                complexObj: {
                  nestedObj: {
                    aaa: 2222,
                    bbb: false,
                    ccc: 'aaabbb',
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [1, 2]
                  }
                },
                complexArr: [{
                  aaa: 3333,
                  bbb: true,
                  ccc: 'bbbccc',
                  // TODO: api-unifier removes "null" value during normalization
                  empty: null,
                  arr: [2, 3],
                  nestedObj: {
                    aaa: 4444,
                    bbb: false,
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [3, 4]
                  }
                }]
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-object-props',
    operationType: 'send'
  }
}`,...(Wn=(Dn=F.parameters)==null?void 0:Dn.docs)==null?void 0:Wn.source}}};var _n,Ln,Bn;Y.parameters={...Y.parameters,docs:{...(_n=Y.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-schema-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                stringSch: {
                  type: 'string',
                  description: 'String schema',
                  minLength: 1,
                  maxLength: 10
                },
                nestedStringSch: {
                  stringSch: {
                    type: 'string',
                    description: 'Nested string schema',
                    minLength: 7,
                    maxLength: 70
                  }
                },
                numberSch: {
                  type: 'number',
                  description: 'Number schema',
                  minimum: 1,
                  maximum: 100
                },
                nestedNumberSch: {
                  numberSch: {
                    type: 'number',
                    description: 'Nested number schema',
                    minimum: 7,
                    maximum: 700
                  }
                },
                booleanSch: {
                  type: 'boolean',
                  description: 'Boolean schema',
                  default: true
                },
                nestedBooleanSch: {
                  booleanSch: {
                    type: 'boolean',
                    description: 'Nested boolean schema',
                    default: false
                  }
                },
                arraySch: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'Array string item',
                    minLength: 1,
                    maxLength: 10
                  }
                },
                nestedArraySch: {
                  arraySch: {
                    type: 'array',
                    description: 'Nested array schema',
                    items: {
                      type: 'number',
                      description: 'Nested array number item',
                      minimum: 4,
                      maximum: 444
                    }
                  }
                },
                objectSch: {
                  type: 'object',
                  properties: {
                    aaa: {
                      type: 'string',
                      description: 'Object string property',
                      enum: ['aaa', 'bbb', 'ccc']
                    }
                  }
                },
                nestedObjectSch: {
                  objectSch: {
                    type: 'object',
                    description: 'Nested object schema',
                    properties: {
                      aaa: {
                        type: 'number',
                        description: 'Nested object number property',
                        minimum: 1,
                        exclusiveMinimum: true,
                        maximum: 100,
                        exclusiveMaximum: true,
                        multipleOf: 10
                      }
                    }
                  }
                },
                nestedSchemasInArray: [{
                  type: 'string',
                  description: 'Nested string schema in array',
                  minLength: 1,
                  maxLength: 10
                }, {
                  type: 'number',
                  description: 'Nested number schema in array',
                  minimum: 1,
                  exclusiveMinimum: true,
                  maximum: 100,
                  exclusiveMaximum: true,
                  multipleOf: 10
                }, {
                  type: 'boolean',
                  description: 'Nested boolean schema in array',
                  default: true
                }, {
                  type: 'object',
                  description: 'Nested object schema in array',
                  properties: {
                    aaa: {
                      type: 'number',
                      minimum: 1
                    }
                  }
                }, {
                  type: 'array',
                  description: 'Nested array schema in array',
                  items: {
                    type: 'integer',
                    maximum: 100,
                    multipleOf: 10
                  }
                }]
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-bindings-kafka-with-schema-props',
    operationType: 'send'
  }
}`,...(Bn=(Ln=Y.parameters)==null?void 0:Ln.docs)==null?void 0:Bn.source}}};var Pn,Cn,Vn;U.parameters={...U.parameters,docs:{...(Pn=U.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-two-bindings": {
            action: "send",
            bindings: {
              kafka: {
                clientId: "order-producer",
                groupId: "order-processing",
                bindingVersion: "0.4.0"
              },
              amqp: {
                mandatory: true,
                priority: 5,
                deliveryMode: 2,
                expiration: 60000,
                userId: "svc-order",
                bindingVersion: "0.3.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-two-bindings',
    operationType: 'send'
  }
}`,...(Vn=(Cn=U.parameters)==null?void 0:Cn.docs)==null?void 0:Vn.source}}};var $n,Rn,Kn;J.parameters={...J.parameters,docs:{...($n=J.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-bindings-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Bindings With Nothing",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-description-and-bindings-with-nothing',
    operationType: 'send'
  }
}`,...(Kn=(Rn=J.parameters)==null?void 0:Rn.docs)==null?void 0:Kn.source}}};var Hn,qn,Gn;z.parameters={...z.parameters,docs:{...(Hn=z.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {}
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-nothing',
    operationType: 'send'
  }
}`,...(Gn=(qn=z.parameters)==null?void 0:qn.docs)==null?void 0:Gn.source}}};var Fn,Yn,Un;X.parameters={...X.parameters,docs:{...(Fn=X.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-name',
    operationType: 'send'
  }
}`,...(Un=(Yn=X.parameters)==null?void 0:Yn.docs)==null?void 0:Un.source}}};var Jn,zn,Xn;Q.parameters={...Q.parameters,docs:{...(Jn=Q.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-title',
    operationType: 'send'
  }
}`,...(Xn=(zn=Q.parameters)==null?void 0:zn.docs)==null?void 0:Xn.source}}};var Qn,Zn,es;Z.parameters={...Z.parameters,docs:{...(Qn=Z.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description',
    operationType: 'send'
  }
}`,...(es=(Zn=Z.parameters)==null?void 0:Zn.docs)==null?void 0:es.source}}};var ns,ss,ts;ee.parameters={...ee.parameters,docs:{...(ns=ee.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-name-and-description',
    operationType: 'send'
  }
}`,...(ts=(ss=ee.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var as,is,rs;ne.parameters={...ne.parameters,docs:{...(as=ne.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-title-and-description',
    operationType: 'send'
  }
}`,...(rs=(is=ne.parameters)==null?void 0:is.docs)==null?void 0:rs.source}}};var os,ps,cs;se.parameters={...se.parameters,docs:{...(os=se.parameters)==null?void 0:os.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-title-and-description": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-name-and-title-and-description',
    operationType: 'send'
  }
}`,...(cs=(ps=se.parameters)==null?void 0:ps.docs)==null?void 0:cs.source}}};var ds,ms,us;te.parameters={...te.parameters,docs:{...(ds=te.parameters)==null?void 0:ds.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "string",
              description: "Primitive header example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            BaseEventMessage: {
              headers: {
                $ref: "#/components/schemas/HeadersExample"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers',
    operationType: 'send'
  }
}`,...(us=(ms=te.parameters)==null?void 0:ms.docs)==null?void 0:us.source}}};var ls,gs,hs;ae.parameters={...ae.parameters,docs:{...(ls=ae.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/BaseEventMessage"
            }]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "object",
              description: "Headers example",
              properties: {
                "X-Idempotency-Key": {
                  type: "string"
                }
              }
            }
          },
          messages: {
            BaseEventMessage: {
              headers: {
                $ref: "#/components/schemas/HeadersExample"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-headers',
    operationType: 'send'
  }
}`,...(hs=(gs=ae.parameters)==null?void 0:gs.docs)==null?void 0:hs.source}}};var ys,fs,bs;ie.parameters={...ie.parameters,docs:{...(ys=ie.parameters)==null?void 0:ys.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-payload',
    operationType: 'send'
  }
}`,...(bs=(fs=ie.parameters)==null?void 0:fs.docs)==null?void 0:bs.source}}};var Ss,ws,As;re.parameters={...re.parameters,docs:{...(Ss=re.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-payload',
    operationType: 'send'
  }
}`,...(As=(ws=re.parameters)==null?void 0:ws.docs)==null?void 0:As.source}}};var Ns,xs,ks;oe.parameters={...oe.parameters,docs:{...(Ns=oe.parameters)==null?void 0:Ns.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-payload',
    operationType: 'send'
  }
}`,...(ks=(xs=oe.parameters)==null?void 0:xs.docs)==null?void 0:ks.source}}};var vs,Ms,Ts;pe.parameters={...pe.parameters,docs:{...(vs=pe.parameters)==null?void 0:vs.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-payload',
    operationType: 'send'
  }
}`,...(Ts=(Ms=pe.parameters)==null?void 0:Ms.docs)==null?void 0:Ts.source}}};var Os,Es,js;ce.parameters={...ce.parameters,docs:{...(Os=ce.parameters)==null?void 0:Os.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-objective-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-objective-payload',
    operationType: 'send'
  }
}`,...(js=(Es=ce.parameters)==null?void 0:Es.docs)==null?void 0:js.source}}};var Is,Ds,Ws;de.parameters={...de.parameters,docs:{...(Is=de.parameters)==null?void 0:Is.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-primitive-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: {
                $ref: "#/components/schemas/Identifier"
              },
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-primitive-payload',
    operationType: 'send'
  }
}`,...(Ws=(Ds=de.parameters)==null?void 0:Ds.docs)==null?void 0:Ws.source}}};var _s,Ls,Bs;me.parameters={...me.parameters,docs:{...(_s=me.parameters)==null?void 0:_s.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-nothing',
    operationType: 'send'
  }
}`,...(Bs=(Ls=me.parameters)==null?void 0:Ls.docs)==null?void 0:Bs.source}}};var Ps,Cs,Vs;ue.parameters={...ue.parameters,docs:{...(Ps=ue.parameters)==null?void 0:Ps.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-primitive-props": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  num: 123,
                  str: "string",
                  bool: true,
                  // TODO: api-unifier removes "null" value during normalization
                  empty: null
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-primitive-props',
    operationType: 'send'
  }
}`,...(Vs=(Cs=ue.parameters)==null?void 0:Cs.docs)==null?void 0:Vs.source}}};var $s,Rs,Ks;le.parameters={...le.parameters,docs:{...($s=le.parameters)==null?void 0:$s.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-object-props": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  obj: {
                    key: "string value"
                  },
                  arr: [1, 2, 3],
                  complexObj: {
                    nestedObj: {
                      aaa: 2222,
                      bbb: false,
                      ccc: 'aaabbb',
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [1, 2]
                    }
                  },
                  complexArr: [{
                    aaa: 3333,
                    bbb: true,
                    ccc: 'bbbccc',
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [2, 3],
                    nestedObj: {
                      aaa: 4444,
                      bbb: false,
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [3, 4]
                    }
                  }]
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-object-props',
    operationType: 'send'
  }
}`,...(Ks=(Rs=le.parameters)==null?void 0:Rs.docs)==null?void 0:Ks.source}}};var Hs,qs,Gs;ge.parameters={...ge.parameters,docs:{...(Hs=ge.parameters)==null?void 0:Hs.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-schema-props": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  stringSch: {
                    type: 'string',
                    description: 'String schema',
                    minLength: 1,
                    maxLength: 10
                  },
                  nestedStringSch: {
                    stringSch: {
                      type: 'string',
                      description: 'Nested string schema',
                      minLength: 7,
                      maxLength: 70
                    }
                  },
                  numberSch: {
                    type: 'number',
                    description: 'Number schema',
                    minimum: 1,
                    maximum: 100
                  },
                  nestedNumberSch: {
                    numberSch: {
                      type: 'number',
                      description: 'Nested number schema',
                      minimum: 7,
                      maximum: 700
                    }
                  },
                  booleanSch: {
                    type: 'boolean',
                    description: 'Boolean schema',
                    default: true
                  },
                  nestedBooleanSch: {
                    booleanSch: {
                      type: 'boolean',
                      description: 'Nested boolean schema',
                      default: false
                    }
                  },
                  arraySch: {
                    type: 'array',
                    items: {
                      type: 'string',
                      description: 'Array string item',
                      minLength: 1,
                      maxLength: 10
                    }
                  },
                  nestedArraySch: {
                    arraySch: {
                      type: 'array',
                      description: 'Nested array schema',
                      items: {
                        type: 'number',
                        description: 'Nested array number item',
                        minimum: 4,
                        maximum: 444
                      }
                    }
                  },
                  objectSch: {
                    type: 'object',
                    properties: {
                      aaa: {
                        type: 'string',
                        description: 'Object string property',
                        enum: ['aaa', 'bbb', 'ccc']
                      }
                    }
                  },
                  nestedObjectSch: {
                    objectSch: {
                      type: 'object',
                      description: 'Nested object schema',
                      properties: {
                        aaa: {
                          type: 'number',
                          description: 'Nested object number property',
                          minimum: 1,
                          exclusiveMinimum: true,
                          maximum: 100,
                          exclusiveMaximum: true,
                          multipleOf: 10
                        }
                      }
                    }
                  },
                  nestedSchemasInArray: [{
                    type: 'string',
                    description: 'Nested string schema in array',
                    minLength: 1,
                    maxLength: 10
                  }, {
                    type: 'number',
                    description: 'Nested number schema in array',
                    minimum: 1,
                    exclusiveMinimum: true,
                    maximum: 100,
                    exclusiveMaximum: true,
                    multipleOf: 10
                  }, {
                    type: 'boolean',
                    description: 'Nested boolean schema in array',
                    default: true
                  }, {
                    type: 'object',
                    description: 'Nested object schema in array',
                    properties: {
                      aaa: {
                        type: 'number',
                        minimum: 1
                      }
                    }
                  }, {
                    type: 'array',
                    description: 'Nested array schema in array',
                    items: {
                      type: 'integer',
                      maximum: 100,
                      multipleOf: 10
                    }
                  }]
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-bindings-with-schema-props',
    operationType: 'send'
  }
}`,...(Gs=(qs=ge.parameters)==null?void 0:qs.docs)==null?void 0:Gs.source}}};var Fs,Ys,Us;he.parameters={...he.parameters,docs:{...(Fs=he.parameters)==null?void 0:Fs.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-two-bindings": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  key: {
                    type: "string",
                    description: "Partitioning key for the message",
                    minLength: 1
                  },
                  schemaIdLocation: "header",
                  schemaIdPayloadEncoding: "application/json",
                  schemaLookupStrategy: "topicNameStrategy"
                },
                rabbitmq: {
                  contentEncoding: "application/json",
                  messageType: "orders.created",
                  bindingVersion: "0.2.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-two-bindings',
    operationType: 'send'
  }
}`,...(Us=(Ys=he.parameters)==null?void 0:Ys.docs)==null?void 0:Us.source}}};var Js,zs,Xs;ye.parameters={...ye.parameters,docs:{...(Js=ye.parameters)==null?void 0:Js.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-headers": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            StatusMessage: {
              description: "Status message description",
              headers: {
                $ref: "#/components/schemas/Identifier"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-headers',
    operationType: 'send'
  }
}`,...(Xs=(zs=ye.parameters)==null?void 0:zs.docs)==null?void 0:Xs.source}}};var Qs,Zs,et;fe.parameters={...fe.parameters,docs:{...(Qs=fe.parameters)==null?void 0:Qs.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-payload": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              payload: {
                $ref: "#/components/schemas/Status"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-payload',
    operationType: 'send'
  }
}`,...(et=(Zs=fe.parameters)==null?void 0:Zs.docs)==null?void 0:et.source}}};var nt,st,tt;be.parameters={...be.parameters,docs:{...(nt=be.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-binding-with-nothing": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-message-with-description-and-binding-with-nothing',
    operationType: 'send'
  }
}`,...(tt=(st=be.parameters)==null?void 0:st.docs)==null?void 0:tt.source}}};var at,it,rt;Se.parameters={...Se.parameters,docs:{...(at=Se.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-two-messages-with-names": {
            action: "send",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }, {
              $ref: "#/components/messages/IdentifierMessage"
            }]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: "StatusMessage"
            },
            IdentifierMessage: {
              name: "IdentifierMessage"
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-two-messages-with-names',
    operationType: 'send'
  }
}`,...(rt=(it=Se.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ot,pt,ct;we.parameters={...we.parameters,docs:{...(ot=we.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-message-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Message With Nothing",
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }]
          }
        },
        messages: {
          StatusMessage: {}
        }
      }
    }),
    operationName: 'send-operation-with-description-and-message-with-nothing',
    operationType: 'send'
  }
}`,...(ct=(pt=we.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};var dt,mt,ut;Ae.parameters={...Ae.parameters,docs:{...(dt=Ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-minimal-overall-structure": {
            action: "send",
            description: "Description of Send Operation With Minimal Overall Structure",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [{
              $ref: "#/components/messages/StatusMessage"
            }, {
              $ref: "#/components/messages/AnotherStatusMessage"
            }],
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                property: "kafka-property"
              },
              rabbitmq: {
                bindingVersion: "0.2.0",
                property: "rabbitmq-property"
              }
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                property: "kafka-property"
              },
              rabbitmq: {
                bindingVersion: "0.2.0",
                property: "rabbitmq-property"
              }
            }
          }
        },
        components: {
          schemas: {
            Identifier1: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10
            },
            Status1: {
              type: "object",
              description: "Status example",
              properties: {
                status: {
                  type: 'string',
                  description: 'Status example',
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            },
            Identifier2: {
              type: 'object',
              description: 'Identifier example',
              properties: {
                identifier: {
                  type: 'string',
                  description: 'Identifier example'
                }
              }
            },
            Status2: {
              type: 'string',
              description: 'Status example',
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              name: "StatusMessage",
              description: "Description of Status Message",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  property: "kafka-property"
                },
                rabbitmq: {
                  bindingVersion: "0.2.0",
                  property: "rabbitmq-property"
                }
              },
              headers: {
                $ref: "#/components/schemas/Identifier1"
              },
              payload: {
                $ref: "#/components/schemas/Status1"
              }
            },
            AnotherStatusMessage: {
              name: "AnotherStatusMessage",
              description: "Description of Another Status Message",
              bindings: {
                kafka: {
                  bindingVersion: "0.2.0",
                  property: "kafka-property"
                },
                rabbitmq: {
                  bindingVersion: "0.5.0",
                  property: "rabbitmq-property"
                }
              },
              headers: {
                $ref: "#/components/schemas/Identifier2"
              },
              payload: {
                $ref: "#/components/schemas/Status2"
              }
            }
          }
        }
      }
    }),
    operationName: 'send-operation-with-minimal-overall-structure',
    operationType: 'send'
  }
}`,...(ut=(mt=Ae.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var lt,gt,ht;Ne.parameters={...Ne.parameters,docs:{...(lt=Ne.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "receive-operation-with-nothing": {
            action: "receive"
          }
        }
      }
    }),
    operationName: 'receive-operation-with-nothing',
    operationType: 'receive'
  }
}`,...(ht=(gt=Ne.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};const wa=["Test","KafkaE2E","SendOperationWithNothing","SendOperationWithTitle","SendOperationWithDescription","SendOperationWithTitleAndDescription","SendOperationWithRootLevelChannelWithNothing","SendOperationWithRootLevelChannelWithTitle","SendOperationWithRootLevelChannelWithDescription","SendOperationWithRootLevelChannelWithTitleAndDescription","SendOperationWithRootLevelChannelWithBindingWithNothing","SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing","SendOperationWithRootLevelChannelWithTwoBindings","SendOperationWithDescriptionAndRootLevelChannelWithNothing","SendOperationWithBindingsKafkaWithNothing","SendOperationWithBindingsKafkaWithOnlyPrimitiveProps","SendOperationWithBindingsKafkaWithObjectProps","SendOperationWithBindingsKafkaWithSchemaProps","SendOperationTwoBindings","SendOperationWithDescriptionAndBindingsWithNothing","SendOperationWithMessageWithNothing","SendOperationWithMessageWithName","SendOperationWithMessageWithTitle","SendOperationWithMessageWithDescription","SendOperationWithMessageWithNameAndDescription","SendOperationWithMessageWithTitleAndDescription","SendOperationWithMessageWithNameAndTitleAndDescription","SendOperationWithMessageWithPrimitiveHeaders","SendOperationWithMessageWithObjectiveHeaders","SendOperationWithMessageWithPrimitivePayload","SendOperationWithMessageWithObjectivePayload","SendOperationWithMessageWithPrimitiveHeadersAndPayload","SendOperationWithMessageWithObjectiveHeadersAndPayload","SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload","SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload","SendOperationWithMessageWithBindingsWithNothing","SendOperationWithMessageWithBindingsWithPrimitiveProps","SendOperationWithMessageWithBindingsWithObjectProps","SendOperationWithMessageWithBindingsWithSchemaProps","SendOperationWithMessageWithTwoBindings","SendOperationWithMessageWithDescriptionAndHeaders","SendOperationWithMessageWithDescriptionAndPayload","SendOperationWithMessageWithDescriptionAndBindingWithNothing","SendOperationWithTwoMessagesWithNames","SendOperationWithDescriptionAndMessageWithNothing","SendOperationWithMinimalOverallStructure","ReceiveOperationWithNothing"];export{I as KafkaE2E,Ne as ReceiveOperationWithNothing,U as SendOperationTwoBindings,q as SendOperationWithBindingsKafkaWithNothing,F as SendOperationWithBindingsKafkaWithObjectProps,G as SendOperationWithBindingsKafkaWithOnlyPrimitiveProps,Y as SendOperationWithBindingsKafkaWithSchemaProps,_ as SendOperationWithDescription,J as SendOperationWithDescriptionAndBindingsWithNothing,we as SendOperationWithDescriptionAndMessageWithNothing,H as SendOperationWithDescriptionAndRootLevelChannelWithNothing,me as SendOperationWithMessageWithBindingsWithNothing,le as SendOperationWithMessageWithBindingsWithObjectProps,ue as SendOperationWithMessageWithBindingsWithPrimitiveProps,ge as SendOperationWithMessageWithBindingsWithSchemaProps,Z as SendOperationWithMessageWithDescription,be as SendOperationWithMessageWithDescriptionAndBindingWithNothing,ye as SendOperationWithMessageWithDescriptionAndHeaders,fe as SendOperationWithMessageWithDescriptionAndPayload,X as SendOperationWithMessageWithName,ee as SendOperationWithMessageWithNameAndDescription,se as SendOperationWithMessageWithNameAndTitleAndDescription,z as SendOperationWithMessageWithNothing,ae as SendOperationWithMessageWithObjectiveHeaders,pe as SendOperationWithMessageWithObjectiveHeadersAndPayload,de as SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload,re as SendOperationWithMessageWithObjectivePayload,te as SendOperationWithMessageWithPrimitiveHeaders,ce as SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload,oe as SendOperationWithMessageWithPrimitiveHeadersAndPayload,ie as SendOperationWithMessageWithPrimitivePayload,Q as SendOperationWithMessageWithTitle,ne as SendOperationWithMessageWithTitleAndDescription,he as SendOperationWithMessageWithTwoBindings,Ae as SendOperationWithMinimalOverallStructure,D as SendOperationWithNothing,$ as SendOperationWithRootLevelChannelWithBindingWithNothing,C as SendOperationWithRootLevelChannelWithDescription,R as SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing,B as SendOperationWithRootLevelChannelWithNothing,P as SendOperationWithRootLevelChannelWithTitle,V as SendOperationWithRootLevelChannelWithTitleAndDescription,K as SendOperationWithRootLevelChannelWithTwoBindings,W as SendOperationWithTitle,L as SendOperationWithTitleAndDescription,Se as SendOperationWithTwoMessagesWithNames,j as Test,wa as __namedExportsOrder,Sa as default};
