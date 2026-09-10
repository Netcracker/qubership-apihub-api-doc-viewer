var Vl=Object.defineProperty;var _l=(r,e,n)=>e in r?Vl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(_l(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{af as Hr,a3 as hn,N as M,d as Wr,t as k,H as N,v as x,x as H,y as Oe,R as G,w as an,O as J,ag as gn,ah as Rt,ai as qt,aj as It,ak as $i,al as zi,am as Xi,an as Qi,ao as Zi,ap as eo,aq as no,ar as ro,as as Ml,at as Ot,au as to,av as ao,aw as na,ax as io,ay as oo,az as so,aA as ra,aB as ta,aC as aa,aD as lo,aE as ia,aF as oa,aG as uo,aH as Pt,aI as sa,aJ as la,aK as da,aL as ua,aM as fa,aN as ca,aO as ma,aP as ya,U as W,o as dr,_ as fo,aQ as Rl,aR as Be,i as di,aS as co,aT as ql,Z as Il,aU as Ol,X as ge,Y as ur,W as Q,S as we,V as z,E as vn,c as Dn,e as wn,L as qn,f as Pe,p as Nn,a8 as Fe,aV as mo,l as ze,aW as Pl,aX as Hl,aY as Ll,aZ as jl,a_ as Jl,a$ as Fl,b0 as Kl,b1 as Gl,b2 as Bl,z as Ul,A as Yl,B as Wl,F as $l,G as zl,J as Xl,u as Ge,g as $r,a9 as In,I as ui,b3 as Ql,b4 as Zl,b5 as Un,b6 as ed,b7 as nd,b8 as Lr,b9 as rd,ba as td,bb as fi,a6 as ci,j as yo,bc as go,bd as ad,a7 as ga,ae as id,be as od,bf as sd,ac as de,bg as pr,bh as Fn,bi as dn,bj as _n,bk as po,bl as ho,bm as ld,C as dd,bn as Ht,aa as ud,bo as fd,bp as hr,bq as cd,ad as bo}from"./DiffBadge-d46fdecc.js";import{_ as pa,l as R,$ as Ae,a0 as w,a1 as zr,a2 as Xr,a3 as md,a4 as Qr,a5 as So,a6 as se,e as Xe,a7 as Zr,t as oe,a8 as re,a9 as ha,aa as yd,v as $,ab as gd,ac as pd,ad as vo,ae as Do,z as ba,S as He,O as On,N as Pn,Q as Tn,af as Dt,b as F,X as fr,A as ie,ag as wo,ah as hd,ai as Sa,aj as on,ak as ae,T as ce,al as et,P as _,am as bd,an as No,ao as tn,ap as nt,aq as va,ar as Da,M as To,as as Sd,at as Ie,au as vd,av as Dd,aw as wd,ax as Nd,ay as Td,az as Ed,aA as xd,aB as cr,aC as br,aD as Sr,aE as Eo,aF as xo,aG as kd,c as sn,d as bn}from"./IndexesNodeViewer-d3cb211c.js";import{r as m}from"./index-f46741a2.js";import{T as wa,A as Hn,a as Qn,b as ke,c as Na,m as Ta,t as Ad,C as Cd,d as rt,e as Ea,u as Zn,f as ko}from"./DdlTableDiffsViewer-c901473c.js";/* empty css              */import"./DdlTableViewer-0ced4044.js";import"./GraphQLOperationDiffViewer-6457c9ef.js";import"./GraphQLOperationViewer-eb077fa3.js";import{g as Vd,h as _d,J as Md,j as Rd,k as qd,l as Id,m as xa,n as Od,S as Pd,U as ka,o as Ao,p as tt,q as at,N as Co,E as mi,r as Hd,s as Ld,t as jd,v as Jd,w as Vo,x as it,C as Aa,y as Ca,D as Va,z as Fd,A as Kd,B as Gd,F as Bd,H as _o,I as Lt,K as yi,L as Ud,M as un,V as _a,P as Ma,Q as Ra,R as qa,T as Yd,W as Wd,X as Ia,Y as Oa,Z as Pa,_ as $d,$ as Mo,a0 as zd,a1 as Xd,a2 as Qd,a3 as Ro,a4 as Zd,a5 as eu,a6 as nu,a7 as ru,a8 as tu,a9 as au,aa as iu,ab as ou,ac as su,ad as lu,ae as du}from"./GraphPropNodeViewer-6a270396.js";class uu extends pa{constructor(){super()}}const gi=(r,e)=>!R(e)||Ae(e)?e:{rawValues:e},fu=(r,e)=>{if(!R(e)||Ae(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},pi=(r,e)=>R(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function tr(r){return{"/data":{"/content":()=>tr(w.MESSAGE_CONTENT),"/channel":()=>tr(w.MESSAGE_CHANNEL),"/operation":()=>tr(w.MESSAGE_OPERATION),kind:w.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:w.MESSAGE_CHANNEL_PARAMETERS,transformers:[gi]},"/servers":{"/*":()=>tr(w.SERVER),kind:w.SERVERS},"/extensions":{kind:w.EXTENSIONS,transformers:[gi]},"/bindings":{"/*":{kind:w.BINDING,transformers:[fu]},kind:w.BINDINGS,complex:!0},"/headers":{kind:w.MESSAGE_HEADERS,transformers:[pi]},"/payload":{kind:w.MESSAGE_PAYLOAD,transformers:[pi]},kind:r}}const cu="<address unknown>";class qo{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,a;const i=e.operations??{};let o,s;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(l=c.messages)==null?void 0:l[0],y=this.isReferenceObject(f)?null:f;if(y){const g=y[this.referenceNamePropertyKey];s=typeof g=="string"?g:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,a=s}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var D;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,s=Object.entries(t).filter(S=>{const[E,C]=S;return!this.isReferenceObject(C)&&E===i}).map(([,S])=>S).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let c=(s.messages??[]).filter(S=>!this.isReferenceObject(S)).find(S=>R(S)&&S[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!c){const S=(D=l.messages)==null?void 0:D[o];if(c=this.isReferenceObject(S)?void 0:S,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(s),y=this.copyExtensions(l),g=this.copyExtensions(c),p=S=>R(S)?{[this.referenceNamePropertyKey]:S[this.referenceNamePropertyKey]}:void 0,h=p(c),b=p(l),T=p(s);return{...h??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:s.action,address:l.address??cu,data:{content:{...c.headers?{headers:c.headers}:{},...g?{extensions:g}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...b??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...y?{extensions:y}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...T??{},id:i,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function mu(r){return zr(r)}const yu=new Set([w.BINDING,w.EXTENSIONS,w.MESSAGE,w.MESSAGE_CHANNEL,w.MESSAGE_CHANNEL_PARAMETERS,w.MESSAGE_HEADERS,w.MESSAGE_OPERATION,w.MESSAGE_PAYLOAD,w.SERVER]),vr=["title","description","summary"];class ot extends Xr{createNodeMeta(e){return{...R(e)&&Hr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!md(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,ot.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return yu.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case w.BINDING:return["binding","version","protocol"];case w.EXTENSIONS:case w.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case w.MESSAGE:return[...vr,"internalTitle","action","address"];case w.MESSAGE_CHANNEL:return[...vr];case w.MESSAGE_OPERATION:return[...vr];case w.MESSAGE_HEADERS:case w.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case w.SERVER:return[...vr,"host","protocol"];default:return[]}}}const gu="[AsyncAPI]";class Io extends Qr{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"referenceNamePropertyKey");P(this,"operationKeys");P(this,"logger");P(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!R(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Zr},a=tr(w.MESSAGE),i=mu({source:n,tree:this.tree,supportedNodeKinds:So,createNodeFromRaw:(o,s,l,u,c)=>this.createNodeFromRaw(o,s,l,u,c),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>R(s)&&!!s.isPrimitive});return hn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return gu}createTree(){return new uu}createNodeDataBuilder(){return new ot}prepareSource(){return new qo(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return R(n)?n:null}resolveNodeKey(n,t){if(!R(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const g=this.createNodeMeta(t,o),p={type:se.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:g,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,p)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:se.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===se.SIMPLE}isComplexTreeNode(n){return n.type===se.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class pu extends wa{constructor(){super()}}function hi(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const hu="x-";function qr(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(hu)}class bu extends qo{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=oe(re(e,["operations",o],this.referenceNamePropertyKey)),c=oe(re(e,["operations",a,o],this.referenceNamePropertyKey));oe(re(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=oe(re(e,["operations",a,"channel",o],this.referenceNamePropertyKey));oe(re(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),oe(re(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=oe(re(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),g=oe(re(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));oe(re(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const p=re(e,["operations",a,"messages",i],this.referenceNamePropertyKey),h=re(e,["operations",a,"messages"],this.referenceNamePropertyKey),b=R(p)&&ha(h)?yd(h,p):void 0,T=(b&&typeof b!="symbol"?y==null?void 0:y[b]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),v=l;if(!(o in v)){const D=g==null?void 0:g.title,S=g==null?void 0:g.name,E=g==null?void 0:g.description,C=g==null?void 0:g.summary,V=f==null?void 0:f.address,q=g==null?void 0:g.headers,A=g==null?void 0:g.payload,O=v.data.content.extensions;if(O&&!(o in O)){const I=Object.keys(g??{}).reduce((j,B)=>{if(!qr(B))return j;const Z=g==null?void 0:g[B];return Z&&(j[B]=Z),j},{});v.data.content.extensions=Object.assign(O,{[o]:I})}const L=v.data.content;if(L&&!(o in L)){const I={...q?{headers:q}:{},...A?{payload:A}:{}};v.data.content=Object.assign(L,{[o]:I})}v[o]={...T?{[M]:T}:{},...D?{title:D}:{},...S?{internalTitle:S}:{},...E?{description:E}:{},...C?{summary:C}:{},...V?{address:V}:{}}}if(!(o in v.data.channel)){const D=f==null?void 0:f.title,S=f==null?void 0:f.description,E=f==null?void 0:f.summary,C=f==null?void 0:f.address,V=v.data.channel.extensions;if(V&&!(o in V)){const q=Object.keys(f??{}).reduce((A,O)=>{if(!qr(O))return A;const L=f==null?void 0:f[O];return L&&(A[O]=L),A},{});v.data.channel.extensions=Object.assign(V,{[o]:q})}v.data.channel[o]={...D?{title:D}:{},...S?{description:S}:{},...E?{summary:E}:{},...C?{address:C}:{}}}if(!(o in v.data.operation)){const D=c==null?void 0:c.title,S=c==null?void 0:c.description,E=c==null?void 0:c.summary,C=v.data.operation.extensions;if(C&&!(o in C)){const V=Object.keys(c??{}).reduce((q,A)=>{if(!qr(A))return q;const O=c==null?void 0:c[A];return O&&(q[A]=O),q},{});v.data.operation.extensions=Object.assign(C,{[o]:V})}v.data.operation[o]={...D?{title:D}:{},...S?{description:S}:{},...E?{summary:E}:{}}}return Wr(v,o,s),v}hasOnlyAllowedDiffMetaSymbols(e){if(!R(e)&&!Ae(e))return!0;if(Ae(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class Su extends ot{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class vu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;i.add(s)}return i}}class Du extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,s=re(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&i.add(l.type);return i}}class wu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=a,l=oe(re(t,["parameters","properties",o]));if(l)for(const f of Object.values(l))f&&i.add(f.type);const u=re(t,["parameters",s]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=oe(re(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class Nu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=a,l=oe(re(t,["extensions",o]));if(l)for(const f of Object.values(l))f&&i.add(f.type);const u=re(t,["headers",s]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=re(t,["payload",s]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class Tu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,s=oe(re(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&i.add(l.type);return i}}var Mt;let Eu=(Mt=class{static instance(e){switch(e){case w.BINDING:if(!this.instances.has(w.BINDING)){const n=new Du;this.instances.set(w.BINDING,n)}return this.instances.get(w.BINDING);case w.MESSAGE_CONTENT:if(!this.instances.has(w.MESSAGE_CONTENT)){const n=new Nu;this.instances.set(w.MESSAGE_CONTENT,n)}return this.instances.get(w.MESSAGE_CONTENT);case w.MESSAGE_CHANNEL:if(!this.instances.has(w.MESSAGE_CHANNEL)){const n=new wu;this.instances.set(w.MESSAGE_CHANNEL,n)}return this.instances.get(w.MESSAGE_CHANNEL);case w.MESSAGE_OPERATION:if(!this.instances.has(w.MESSAGE_OPERATION)){const n=new Tu;this.instances.set(w.MESSAGE_OPERATION,n)}return this.instances.get(w.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new vu;this.instances.set(null,n)}return this.instances.get(null)}}},P(Mt,"instances",new Map),Mt);class xu extends Qn{aggregate(e,n){}}class ku extends Qn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=oe(re(e,[a],t));if(!i)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},c=i[l];c&&(s=!0,this.aggregateWholeNodeDiff(c,u),o[l]=u[M])}return s?o:void 0}}class Au extends Qn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=oe(re(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,s={};if(i){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(i)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),x(i)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),H(i)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.headers={data:i,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(o)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),x(o)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),H(o)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}return s}}class Cu extends Qn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=oe(re(e,[a],t));if(!i)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const c=e[l][t];if(!c)continue;const f={},y=i[l];y&&(s=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[M])}return s?o:void 0}}class Oo{static instance(e){switch(e){case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new ku),this.instances.get(w.BINDINGS);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Cu),this.instances.get(w.SERVERS);case w.MESSAGE_CONTENT:return this.instances.has(w.MESSAGE_CONTENT)||this.instances.set(w.MESSAGE_CONTENT,new Au),this.instances.get(w.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new xu;this.instances.set(null,n)}return this.instances.get(null)}}}P(Oo,"instances",new Map);class Vu extends ke{aggregate(e){const n=e[M];if(n){const f=n.data,g={type:f.type,causedAt:[]};return H(f)?(g.causedAt=f.beforeDeclarationPaths[0],{[G.TitleRow]:g,[G.BindingVersionRow]:g}):(x(f)?g.causedAt=f.beforeDeclarationPaths[0]:k(f)&&(g.causedAt=f.afterDeclarationPaths[0]),{[G.TitleRow]:g,[G.DescriptionRow]:g,[G.SummaryRow]:g,[G.AddressRow]:g,[G.BindingVersionRow]:g,[G.ServerAddressRow]:g})}const t=e.title,a=e.description,i=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,c={};if(t){const f=t.data,g={type:f.type,causedAt:[]};(x(f)||H(f))&&(g.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(g.causedAt=f.afterDeclarationPaths[0]),c[G.TitleRow]=g}if(a){const f=a.data,g={type:f.type,causedAt:[]};(x(f)||H(f))&&(g.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(g.causedAt=f.afterDeclarationPaths[0]),c[G.DescriptionRow]=g}if(i){const f=i.data,g={type:f.type,causedAt:[]};(x(f)||H(f))&&(g.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(g.causedAt=f.afterDeclarationPaths[0]),c[G.SummaryRow]=g}if(o){const f=o.data,g={type:f.type,causedAt:[]};(x(f)||H(f))&&(g.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(g.causedAt=f.afterDeclarationPaths[0]),c[G.AddressRow]=g}if(s){const f=s.data,g={type:f.type,causedAt:[]};(x(f)||H(f))&&(g.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(g.causedAt=f.afterDeclarationPaths[0]),c[G.BindingVersionRow]=g}if(l||u){const f=l==null?void 0:l.data,y=u==null?void 0:u.data,g=ke.maxDiffByDiffType(f,y);if(g){const p={type:g.type,causedAt:[]};(x(g)||H(g))&&(p.causedAt=g.beforeDeclarationPaths[0]),k(g)&&(p.causedAt=g.afterDeclarationPaths[0]),c[G.ServerAddressRow]=p}}return Object.keys(c).length>0?c:void 0}}class Po{static instance(e){switch(e){default:return new Vu}}}P(Po,"instances",new Map);class _u extends Na{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!x(n)&&!H(n)&&!an(n))return!1;return!0}}class Mu{static instance(e){switch(e){default:return new _u}}}class En extends ${constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:s}=t;if(!R(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const g=o.diffs[M];if(g&&(k(g.data)||x(g.data)))return u[M]={...g,inherited:!0},u;{const p=o.descendantDiffs[a];if(p)return u[M]=p,u}}else if(i){const g=i.diffs[M];if(g&&(k(g.data)||x(g.data)))return u[M]={...g,inherited:!0},u;{const p=i.descendantDiffs[a];if(p)return u[M]=p,u}}if(!$.isDiffsRecord(l))return;const c=l.title;c&&this.aggregateTextDiff(c,"title",u);const f=l.description;f&&this.aggregateTextDiff(f,"description",u);const y=l.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;k(n)&&(i={...i,isContentVisible:!1,backgroundColor:N.Gray},o={...o,isContentVisible:!0,backgroundColor:N.Green}),x(n)&&(i={...i,isContentVisible:!0,backgroundColor:N.Red},o={...o,isContentVisible:!1,backgroundColor:N.Gray}),(an(n)||H(n))&&(i={...i,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},o={...o,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}}class Ru extends En{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let s=super.aggregate(e,n,t,a,i);if(s){const u=s[M];if(u){const{data:c,styles:f}=u;k(c)&&(f.after.borderShadowColor=N.Green),x(c)&&(f.before.borderShadowColor=N.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=re(e,["binding"]);if(R(l)){const u=l[o];if($.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(k(t)&&R(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(x(t)&&R(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class qu extends En{aggregateByDescendantDiffs(e,n,t){var u;if(n[M])return n;if(!R(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[M]=s(),n;let l=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==l){l=J.replace;break}return l===J.replace?(n[M]=s(),n):(n[M]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:x(n)?n.beforeDeclarationPaths:[],beforeValue:x(n)?n.beforeValue:void 0,afterDeclarationPaths:k(n)?n.afterDeclarationPaths:[],afterValue:k(n)?n.afterValue:void 0,action:J.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}),a)}}class Iu extends En{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[M])return n;const i=re(e,["rawValues"]);if(!R(i))return;const{diffsMetaKey:o}=a,s=i[o];if(!$.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const g={increaseLevel:!1},p=g;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[M]={data:c,styles:{before:f,after:y},flags:{before:g,after:p},highlightingMode:gn},n}}class Ou extends En{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let s=super.aggregate(e,n,t,a,i);s||(s={});const l=e[o];if($.isDiffsRecord(l)){const u=l[M];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};k(u)&&(f={...f,isContentVisible:!1,backgroundColor:N.Gray},y={...y,isContentVisible:!0,backgroundColor:N.Green}),x(u)&&(f={...f,isContentVisible:!0,backgroundColor:N.Red},y={...y,isContentVisible:!1,backgroundColor:N.Gray}),s[M]={data:u,highlightingMode:Oe,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=l.address;c&&this.aggregateTextDiff(c,"address",s)}return Object.keys(s).length>0?s:void 0}}class Pu extends En{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[M])return n;const i=re(e,["rawValues","properties"]);if(!R(i))return;const{diffsMetaKey:o}=a,s=i[o];if(!$.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const g={increaseLevel:!1},p=g;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[M]={data:c,styles:{before:f,after:y},flags:{before:g,after:p},highlightingMode:Oe},n}}class Hu extends En{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let s=super.aggregate(e,n,t,a,i);s||(s={});const l=e[o];if($.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const c=l.protocol;c&&this.aggregateTextDiff(c,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class Lu extends En{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[M])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[M]=o,n}}class jt{static instance(e){switch(e){case w.BINDING:return this.instances.has(w.BINDING)||this.instances.set(w.BINDING,new Ru),this.instances.get(w.BINDING);case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new qu),this.instances.get(w.BINDINGS);case w.EXTENSIONS:return this.instances.has(w.EXTENSIONS)||this.instances.set(w.EXTENSIONS,new Iu),this.instances.get(w.EXTENSIONS);case w.MESSAGE:return this.instances.has(w.MESSAGE)||this.instances.set(w.MESSAGE,new Ou),this.instances.get(w.MESSAGE);case w.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(w.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(w.MESSAGE_CHANNEL_PARAMETERS,new Pu),this.instances.get(w.MESSAGE_CHANNEL_PARAMETERS);case w.SERVER:return this.instances.has(w.SERVER)||this.instances.set(w.SERVER,new Hu),this.instances.get(w.SERVER);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Lu),this.instances.get(w.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new En),this.instances.get(null)}}}P(jt,"instances",new Map);const ju="[AsyncAPI][WithDiffs]";class Ju extends Io{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return ju}createTree(){return new pu}createNodeDataBuilder(){return new Su}prepareSource(){return new bu(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return ha(n)?n:null}createNodeFromRaw(n,t,a,i,o){const s=super.createNodeFromRaw(n,t,a,i,o);return!s||!hi(s)||this.assignNodeDiffs(s,a,o),s}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return jt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return Mu.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Oo.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return jt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return Eu.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return Po.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Ta(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return So.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&hi(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Fu extends pa{constructor(){super()}}const Y={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Ho=Object.values(Y),Wn="unknown",Ku="any",Gu="nothing",ee={UNKNOWN:Wn,ANY:Ku,NOTHING:Gu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},Bu=Object.values(ee);function Uu(r){return!r||!gd(r)?!1:Bu.some(e=>e===r)}function Yu(r){return R(r)&&Hr in r}function wt(r,e){const n=r[e];return Ae(n)&&n.length>0}function er(r){return typeof r=="boolean"}function Ln(r){return r==null||typeof r=="boolean"?null:r}const Wu=[ee.STRING,ee.NUMBER,ee.INTEGER,ee.BOOLEAN];function jr(r){return!!r&&Wu.includes(r)}function Jr(r){return!R(r)||Ae(r)?!1:wt(r,"allOf")||wt(r,"oneOf")||wt(r,"anyOf")}function bi(r){return R(r)&&Reflect.ownKeys(r).length>0}function Nt(r){return Ae(r)&&r.length>0}function Lo(r,e){if(!R(r)&&!Ae(r))return!1;if(Ae(r))return r.length>0;const n=r;if(Nt(n[Rt])||Nt(n[qt])||Nt(n[It])||bi(n[$i])||bi(n[zi]))return!0;const t=n[Xi];if(t!==void 0&&t!==!1||n[Qi]!==void 0)return!0;const a=n[Zi];return a!==void 0&&a!==!1}const $u="extensions",zu="location",Ue={root:Y.ROOT,definition:Y.DEFINITION,property:Y.PROPERTY,additionalProperties:Y.ADDITIONAL_PROPERTIES,patternProperty:Y.PATTERN_PROPERTY,items:Y.ITEMS,item:Y.ITEM,additionalItems:Y.ADDITIONAL_ITEMS,allOf:Y.ALL_OF,anyOf:Y.ANY_OF,oneOf:Y.ONE_OF},Xu=(r,e)=>{if(!R(e)||Ae(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},Qu="x-";function Si(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(Qu)}function Zu(r,e){if(!R(e)||Ae(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>Si(s));if(t.length===0)return e;const a=new Set(t),i=t.reduce((s,l)=>(Si(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&a.has(s)||(o[s]=e[s]);return o.extensions=i,o}const ef=[Xu,Zu];function Ye(r=Ue.root){return{"/allOf":{"/*":()=>Ye(Ue.allOf)},"/oneOf":{"/*":()=>Ye(Ue.oneOf)},"/anyOf":{"/*":()=>Ye(Ue.anyOf)},"/properties":{"/*":()=>Ye(Ue.property)},"/items":()=>({...Ye(Ue.items),"/*":({key:e})=>pd(e)?Ye(Ue.item):{}}),"/additionalProperties":()=>Ye(Ue.additionalProperties),"/additionalItems":()=>Ye(Ue.additionalItems),"/patternProperties":{"/*":()=>Ye(Ue.patternProperty)},kind:r,transformers:ef}}function nf(r){return zr(r)}const rf={type:ee.ANY};function tf(r,e){if(er(e)){if(e===!1)return!1;if(e===!0&&r===Y.ADDITIONAL_PROPERTIES)return rf}}function af(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function ue(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const Ee=class Ee extends Xr{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case ee.UNKNOWN:case ee.ANY:case ee.NOTHING:case ee.NULL:case ee.BOOLEAN:return Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case ee.STRING:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Pt,ca,ma,ya,zu];case ee.NUMBER:case ee.INTEGER:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Pt,sa,la,da,ua,fa];case ee.OBJECT:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,lo,ia,oa,uo];case ee.ARRAY:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ra,ta,aa];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=af(n,t),o=Yu(e)?{brokenRef:String(e.$ref)}:{};return!Jr(e)&&R(e)?{...this.pick(e,Ee.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=tf(e,t);if(i!==void 0)return i;if(er(t))return t;if(!R(t)||Jr(t))return null;const o=Uu(t.type)?t.type:ee.UNKNOWN;return o===ee.UNKNOWN||o===ee.ANY||o===ee.NOTHING||o===ee.NULL||o===ee.BOOLEAN?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.STRING?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.NUMBER||o===ee.INTEGER?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.OBJECT?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.ARRAY?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};P(Ee,"JSON_SCHEMA_TREE_NODE_META_PROPS",[eo,no,ro,Ml]),P(Ee,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Ot,to,ao,na,io,oo,so,$u]);let Fr=Ee;const of="[JSON Schema]";class jo extends Qr{constructor(n){const{source:t,materializeDepth:a,logger:i=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new vo);P(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!R(n))return this.tree;const t={parent:null,container:null,ancestors:new Zr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=Ye();return this.crawlHooks=nf({source:n,tree:this.tree,supportedNodeKinds:Ho,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o,s)=>({value:er(i)||R(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:s}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>Ae(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Lo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),hn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:Do(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};hn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return of}createTree(){return new Fu}createNodeDataBuilder(){return new Fr((n,t)=>this.pick(n,t))}prepareSource(){return R(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u,value:c}=o;if(i||R(c)&&Jr(c)){const h=this.createNodeMeta(t,o),b={type:se.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,b)}const y=this.createNodeValue(t,a,o),g=this.createNodeMeta(t,o),p={type:se.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:y,meta:g,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,p)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===se.SIMPLE}isComplexTreeNode(n){return n.type===se.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class sf extends wa{constructor(){super()}}class lf{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!R(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return Wr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class df extends Fr{constructor(e){super(e)}}class uf extends Hn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!k(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class Jo{static instance(e){return this.kindAnyInstance}}P(Jo,"kindAnyInstance",new uf);const ff=["properties","patternProperties","allOf","anyOf","oneOf","items"],cf=new Set(["properties","patternProperties"]);class mf extends Qn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!R(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[s,l]of Object.entries(o))!l||s===M||!$.isDiff(l)||(i[s]=this.buildDescendantDiffMetadata(l));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=oe(Reflect.get(n,t));i&&a.push(i);for(const o of ff){const s=Reflect.get(n,o);if(!R(s)&&!Ae(s))continue;const l=oe(Reflect.get(s,t));if(l){a.push(l);continue}const u=i==null?void 0:i[o];if(u&&(k(u)||x(u))&&(cf.has(o)?R(s):Ae(s))){const y=this.decomposeWholeChildBagDiff(s,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=Ae(n)?n.map((o,s)=>String(s)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return k(n)?{type:n.type,scope:n.scope,description:n.description,action:J.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:J.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=Oe;return k(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Green,borderShadowColor:N.Green},o={...o,increaseLevel:!0}),x(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Red,borderShadowColor:N.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},o={...o,increaseLevel:!1}),H(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:s}}}class Fo{static instance(e){return this.kindAnyInstance}}P(Fo,"kindAnyInstance",new mf);const pn="titleRow",Ko=["type","format","title"],Yn=["readOnly","writeOnly","deprecated"];class Go extends ke{aggregate(e){const n=e[M],t={};return n?(t[G.TitleRow]=this.buildNodeDiffsSeverity(n),t[G.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[G.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",G.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",G.NestingIndicatorRow,t)),this.applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,t),Object.keys(t).length>0?t:void 0}applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,n){const t=e,a=ke.maxChangedPropertyMetaDataByDiffType(...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[G.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[pn],...Object.values(t.typeLabelFieldDiffs??{})],i=ke.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[G.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return x(n)||H(n)?t.causedAt=n.beforeDeclarationPaths[0]:k(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class yf extends Go{aggregate(e){const n=super.aggregate(e)??{};return this.applyMaxAdditionalInfoRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyMaxAdditionalInfoRowSeverity(e,n){const t=e,a=ke.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff,t.enumDiff,t.enumRowColorizingDiff,t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.enumValueDiffs??{}),...Object.values(t.examplesValueDiffs??{}),...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[G.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}}class Jt{static instance(e){switch(e){case Y.ROOT:case Y.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(Jt,"kindAnyInstance",new Go),P(Jt,"kindPropertyInstance",new yf);function Tt(r,e){for(const n of Object.values(e??{}))ba(n)&&r.add(n.data.type)}class gf extends Na{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){Tt(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){Tt(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(i.validationRowValueDiffs??{}))Tt(a,l);continue}ba(s)&&a.add(s.data.type)}return a}}class Bo{static instance(e){return this.kindAnyInstance}}P(Bo,"kindAnyInstance",new gf);const Te={ENUM:na,MIN_LENGTH:ca,MAX_LENGTH:ma,PATTERN:ya,MINIMUM:la,MAXIMUM:ua,EXCLUSIVE_MINIMUM:da,EXCLUSIVE_MAXIMUM:fa,MULTIPLE_OF:sa,MIN_PROPERTIES:ia,MAX_PROPERTIES:oa,UNIQUE_ITEMS:aa,MIN_ITEMS:ra,MAX_ITEMS:ta},te={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Te.UNIQUE_ITEMS},Ft={[te.VALUE_LENGTH]:["minLength","maxLength"],[te.VALUE_PATTERN]:["pattern"],[te.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[te.VALUE_MULTIPLE_OF]:["multipleOf"],[te.PROPERTIES_COUNT]:["minProperties","maxProperties"],[te.ITEMS_COUNT]:["minItems","maxItems"],[te.UNIQUE_ITEMS]:["uniqueItems"]},pf={[te.VALUE_LENGTH]:{minLength:0,maxLength:1},[te.VALUE_PATTERN]:{pattern:0},[te.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[te.VALUE_MULTIPLE_OF]:{multipleOf:0},[te.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[te.ITEMS_COUNT]:{minItems:0,maxItems:1},[te.UNIQUE_ITEMS]:{uniqueItems:0}},Kr={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function hf(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Kr.OAS_3_1_NUMERIC_EXCLUSIVE:Kr.OAS_3_0_BOOLEAN_EXCLUSIVE}function bf(r){return r.dialect??hf(r)}const Sf="?",me="{value}",nn="{exclusive_value}",fn=">",Dr=">=",cn="<",wr="<=",_e=1,Me=2,Re=4,qe=8,vi={0:{lower:void 0,upper:void 0},[_e]:{lower:`${Dr} ${me}`,upper:void 0},[Me]:{lower:`${fn} ${nn}`,upper:void 0},[Re]:{lower:void 0,upper:`${wr} ${me}`},[qe]:{lower:void 0,upper:`${cn} ${nn}`},[Me|_e]:{lower:`${fn} ${me}`,upper:void 0},[Me|Re]:{lower:`${fn} ${nn}`,upper:`${wr} ${me}`},[Me|qe]:{lower:`${fn} ${nn}`,upper:`${cn} ${nn}`},[qe|_e]:{lower:`${Dr} ${me}`,upper:`${cn} ${nn}`},[qe|Re]:{lower:void 0,upper:`${cn} ${me}`},[Re|_e]:{lower:`${Dr} ${me}`,upper:`${wr} ${me}`},[Me|_e|Re]:{lower:`${fn} ${me}`,upper:`${wr} ${me}`},[Me|_e|qe]:{lower:`${fn} ${me}`,upper:`${cn} ${nn}`},[Me|Re|qe]:{lower:`${fn} ${nn}`,upper:`${cn} ${me}`},[qe|_e|Re]:{lower:`${Dr} ${me}`,upper:`${cn} ${me}`},[_e|Me|Re|qe]:{lower:`${fn} ${me}`,upper:`${cn} ${me}`}};function Kt(r){return r!=null}function Di(r){return r!==void 0&&r!==!1}function vf(r,e,n){return(r&(_e|Me))!==(_e|Me)||n===void 0||typeof e!="number"?r:n>=e?r&~_e:r&~Me}function Df(r,e,n){return(r&(Re|qe))!==(Re|qe)||n===void 0||typeof e!="number"?r:n<=e?r&~Re:r&~qe}function wi(r,e,n){return r.replace(me,`${e}`).replace(nn,Kt(n)?`${n}`:Sf)}function wf(r,e){return Kt(r)||Kt(e)}function Nf(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=_e),Di(t)&&(i|=Me),n!==void 0&&(i|=Re),Di(a)&&(i|=qe),i}function Uo(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&_e)&&(n&=~Me),typeof e.exclusiveMax!="number"&&!(n&Re)&&(n&=~qe),n}function Tf(r,e){return Uo(r,e)}function Ef(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=vf(r,e.min,n);return a=Df(a,e.max,t),a}const xf={[Kr.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Uo},[Kr.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Tf}};function kf(r,e){const n=xf[e];let t=Nf(r);return t=n.applyExclusiveSuppression(t,r),Ef(t,r)}function $e(r){const e={data:{},visible:!1},n=bf(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=kf(r,n),o=i in vi?{...vi[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=wi(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=wi(o.upper,r.max,a)),e.visible=wf(e.data.lower,e.data.upper),e}const sr="0",st="1";function Kn(r){return r!=null}function Nr(r){return r!==void 0&&r!==!1}function Tr(r){return r!==void 0&&r!==!1}function Er(r){return!!r&&k(r)}function xr(r){return!!r&&x(r)}function Gn(r){return!!r&&H(r)}function Ni(r){if(r&&(k(r)||H(r)))return r.afterValue}function Ti(r){if(!r||!(x(r)||H(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function Ei(r){if(!r||!(x(r)||H(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function Ha(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,s=e.exclusiveMinimum,l=e.maximum,u=e.exclusiveMaximum,c=Kn(n),f=Kn(a),y=Kn(o),g=Kn(l),p=Kn(s),h=Kn(u),b=Er(o),T=xr(o),v=Gn(o),D=Er(l),S=xr(l),E=Gn(l),C=$e({min:c&&(!y||b||v)?n:void 0,max:f&&(!g||D||E)?a:void 0,exclusiveMin:Nr(t)&&(!p||Er(s)||Gn(s)&&Tr(Ni(s)))?t:void 0,exclusiveMax:Nr(i)&&(!h||Er(u)||Gn(u)&&Tr(Ni(u)))?i:void 0}).data;if(!(y||p||g||h))return{before:{...C},after:C};let q,A,O,L;if(c&&!y&&(q=n),(T||v)&&(q=Ti(o)),f&&!g&&(A=a),(S||E)&&(A=Ti(l)),Nr(t)&&!p&&(O=t),Gn(s)||xr(s)){const j=Ei(s);Tr(j)&&(O=j)}if(Nr(i)&&!h&&(L=i),Gn(u)||xr(u)){const j=Ei(u);Tr(j)&&(L=j)}return{before:$e({min:q,max:A,exclusiveMin:O,exclusiveMax:L}).data,after:C}}function Af(r,e){if(!e)return;const n=r==="lower"?sr:st;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function xi(...r){for(const e of r)if(e)return e.type}function ki(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:J.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:J.remove,beforeValue:e}:{type:r,action:J.replace,beforeValue:e,afterValue:n}}function Yo(r,e){const{before:n,after:t}=Ha(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return J.add;if(a&&!i)return J.remove}function Wo(r,e){const{before:n,after:t}=Ha(r,e),a=xi(e.minimum,e.exclusiveMinimum),i=xi(e.maximum,e.exclusiveMaximum),o={},s=ki(a,n.lower,t.lower);s&&(o[sr]=s);const l=ki(i,n.upper,t.upper);return l&&(o[st]=l),o}function Cf(r,e){const n=Wo(r,e);return[n[sr],n[st]].filter(t=>t!==void 0)}function Vf(r,e){if(Yo(r,e)!==void 0)return!1;const n=Cf(r,e);if(n.length!==1)return!1;const t=n[0];return k(t)||x(t)}function _f(r,e){return Vf(r,e)}function Ai(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:s}of a){if(!o)continue;const l=o!==s?Af(i,e):void 0;t.push({text:o,valueDiffKey:l})}return t}function Mf(r,e,n,t,a){const{before:i,after:o}=Ha(r,e),s=n===W;if(t){const c=t.data;if(k(c)||x(c))return Ai(s?i:o,a,s?o:i)}return Ai(s?i:o,a,s?o:i)}function Rf(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(k(e)?e.afterValue:x(e)?e.beforeValue:H(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function qf(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Rf(n,t):!0:!1})}function Ci(r){return typeof r=="number"||typeof r=="boolean"}function If(r){if(!R(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),Ci(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),Ci(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Gt(r){const e=If(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function en(r){return typeof r=="string"?r:JSON.stringify(r)}function $o(r,e,n){switch(r){case te.VALUE_LENGTH:case te.PROPERTIES_COUNT:case te.ITEMS_COUNT:{if(e.startsWith("min"))return $e({min:Number(n)}).data.lower??en(n);if(e.startsWith("max"))return $e({max:Number(n)}).data.upper??en(n);break}case te.VALUE_RANGE:{if(e==="minimum")return $e({min:Number(n)}).data.lower??en(n);if(e==="maximum")return $e({max:Number(n)}).data.upper??en(n);if(e==="exclusiveMinimum")return $e({exclusiveMin:typeof n=="number"?n:!0}).data.lower??en(n);if(e==="exclusiveMaximum")return $e({exclusiveMax:typeof n=="number"?n:!0}).data.upper??en(n);break}case te.VALUE_PATTERN:case te.VALUE_MULTIPLE_OF:case te.UNIQUE_ITEMS:return en(n);default:return en(n)}return en(n)}function Of(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Pf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function zo(r,e){return e.length<=1||Of(r)?0:Pf(r)?1:0}class Xo extends ${constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}});P(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:s}=t;if(!R(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const b=o.diffs[M];if(b&&(k(b.data)||x(b.data)))return u[M]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const T=o.descendantDiffs[a];if(T)return u[M]=T,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}else if(i){const b=i.diffs[M];if(b&&(k(b.data)||x(b.data)))return u[M]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const T=i.descendantDiffs[a];if(T)return u[M]=T,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}if(!$.isDiffsRecord(l))return;const c=l[M];c&&this.aggregateTextDiff(c,M,u);const f=l.title,y=l.format,g=l.type;this.aggregateTypeLabelFieldDiffs({type:g,format:y,title:f},u);const p=l.description;if(p&&this.aggregateTextDiff(p,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const b of Yn){const T=l[b];$.isDiff(T)&&this.aggregateMetaFlagDiff(T,b,u)}return R(n)&&this.aggregateValidationRowDiffs(n,l,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,a){const i=new Set;for(const s of Object.values(t.typeLabelFieldDiffs??{}))s!=null&&s.data&&i.add(s.data);const o=new Set;for(const s of Ad(n,a))i.has(s)||s!=null&&s.type&&o.add(s.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[M];if(i&&(k(i.data)||x(i.data))){t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const g=ke.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(g){const p=this.resolveTypePrimitivenessCrossing(o),h=p&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,p):this.asReplaceRowColorizingDiff(g);t.nestingIndicatorRowColorizingDiff={...h,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!R(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(g=>a[g]);if(l.some(g=>!g))return;const[u,...c]=l;if(!k(u.data)&&!x(u.data))return;const f=u.data.action;c.every(g=>g.data.action===f&&(k(g.data)||x(g.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return k(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:x(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}resolveTypePrimitivenessCrossing(n){var l;const t=(l=n.type)==null?void 0:l.data;if(!t||!H(t))return;const a=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=jr(a),s=jr(i);if(o!==s)return{beforeIsPrimitive:o,afterIsPrimitive:s}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:a}=n;return H(a)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:a.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:J.add,afterValue:!0,afterDeclarationPaths:a.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");R(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");R(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of Ko){const o=n[i];$.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[M];if(t&&(k(t.data)||x(t.data))){n[pn]=t;return}for(const a of Yn){const i=n[a];if(i){n[pn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=ke.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[pn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:N.Green},removeBefore:{textHighlighterColor:N.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return k(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),(an(n)||H(n))&&(t={...t,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={...a,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}asReplaceRowColorizingDiff(n){const{data:t}=n;return H(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return k(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:x(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:J.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[M];return!!t&&(k(t.data)||x(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Yn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return H(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:J.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:J.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[M];if(!(!a||!(k(a.data)||x(a.data)))&&R(n))for(const[i,o]of Object.entries(Ft)){const s=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(Ft)){const s=o.filter(D=>t[D]);if(s.length===0)continue;const l=i,u=l===te.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=l===te.VALUE_RANGE?qf(s,t):s,f=s.map(D=>t[D]).filter(D=>$.isDiff(D));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Gt(n),g=u?Yo(y,u):void 0;if(u&&(g===J.add||g===J.remove)){const D=g===J.add?this.mergeDiffActionFragment(f,J.add,this.resolveWholeRowDisplayValues(l,s,f,J.add)):this.mergeDiffActionFragment(f,J.remove,this.resolveWholeRowDisplayValues(l,s,f,J.remove)),S=this.buildChangedPropertyMetaDataFromDiff(D);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(u&&_f(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,a,l);continue}const p=f.every(k),h=f.every(x);if(p){const D=this.resolveWholeRowDisplayValues(l,s,f,J.add),S=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,J.add,D));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(h){const D=this.resolveWholeRowDisplayValues(l,s,f,J.remove),S=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,J.remove,D));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,a,l));continue}const b=c.map(D=>t[D]).filter(D=>$.isDiff(D)).map(D=>this.buildChangedPropertyMetaDataFromDiff(D)),T=ke.maxChangedPropertyMetaDataByDiffType(...b);if(!T)continue;const v=this.buildValidationRowValueDiffs(l,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[l]=v,a.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(T),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,l)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=Wo(Gt(n),t),s=[sr,st];if(!s.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of s){const y=o[f];if(!y||c[f])continue;const g=f===sr?"lower":"upper",p=this.attachValueRangeChipDiffPaths(y,g,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(p)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const s=n.map(f=>t[f]).filter(f=>$.isDiff(f));if(s.length===0)return;const l=s.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=ke.maxChangedPropertyMetaDataByDiffType(...l);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],s=[];for(const l of i)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=pf[n],o={};for(const s of t){const l=a[s];if(!$.isDiff(l)||i[s]===void 0)continue;const c=this.buildListValueDiffMetadata(l);o[s]=ke.maxChangedPropertyMetaDataByDiffType(o[s],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((s,l)=>{const u=a[l],c=i===J.add?k(u)?u.afterValue:void 0:x(u)?u.beforeValue:void 0;c!==void 0&&o.push($o(n,s,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(l=>x(l)||H(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>k(l)||H(l)?l.afterDeclarationPaths:[]);return t===J.add?{type:i.type,scope:i.scope,description:i.description,action:J.add,afterValue:a,afterDeclarationPaths:s}:{type:i.type,scope:i.scope,description:i.description,action:J.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}}class Hf extends Xo{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!R(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=$.isDiffsRecord(l),c=this.resolveWholeListFieldDiff(e,"enum",s),f=this.resolveWholeListFieldDiff(e,"examples",s),y=this.resolveListFieldItemDiffs(e,"enum",s),g=this.resolveListFieldItemDiffs(e,"examples",s),p=!!c||!!f||Object.keys(y).length>0||Object.keys(g).length>0;if(!o&&!u&&!p){const b=this.resolveRequiredMetaDiff(t,a,s);if(!b)return;const T={required:b};return this.aggregatePropertyTitleRowDiff(T),T}const h={...o??{}};if(u){const b=l.default;$.isDiff(b)&&(h.default=this.buildDefaultValueDiffMetadata(b))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(g).length>0&&(h.examplesValueDiffs=g),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const b=this.resolveRequiredMetaDiff(t,a,s);b&&(h.required=b)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[M];if(n&&(k(n.data)||x(n.data))){e[pn]=n;return}for(const a of Yn){const i=e[a];if(i){e[pn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[pn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!R(i)&&!R(a))return;const o=String(e),s=R(i)?Reflect.get(i,t):void 0,l=R(i)?Reflect.get(i,"required"):void 0,u=R(a)&&"required"in a?a.required:void 0,c=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if($.isDiffsRecord(s)){const y=s.required;if($.isDiff(y)){const g=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(g)return g}if($.isDiffsRecord(y)){const g=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(g)return g}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(k(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(x(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(H(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if($.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!$.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if($.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if($.isDiff(t)){if(k(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(x(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return H(e)?this.buildChipReplaceDiffMetadata(e,{textHighlighterColor:N.Yellow}):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!$.isDiffsRecord(a))return;const i=a[n];if($.isDiff(i)){if(k(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(x(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return $.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"enum","enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"examples","examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i,o){const s=Reflect.get(e,t);if(!Array.isArray(s)||s.length===0)return;const l=n[M];if(l&&(k(l.data)||x(l.data))){n[o]=this.buildWholeNodeInheritedRowColorizingDiff(l);return}const u=n[a];if(u){n[o]=u;return}const c=n[i];if(!c||Object.keys(c).length===0)return;const f=ke.maxChangedPropertyMetaDataByDiffType(...Object.values(c));f&&(n[o]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[M];if(i&&(k(i.data)||x(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const s=o.data;if(k(s)||x(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}H(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Gr{static instance(e){switch(e){case Y.ROOT:case Y.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(Gr,"kindAnyInstance",new Xo),P(Gr,"kindPropertyInstance",new Hf);const Lf="[JSON Schema][WithDiffs]";class jf extends jo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Lf}createTree(){return new sf}createNodeDataBuilder(){return new df((n,t)=>this.pick(n,t))}prepareSource(){return new lf(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const s=super.createNodeFromRaw(n,t,a,i,o);return!s||!ue(s)||this.assignNodeDiffs(s,a,o),s}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Gr.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Bo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Fo.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Gr.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Jo.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Jt.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Ta(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Ho.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ue(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function Et(r){return!!r&&Object.keys(r).length>0}function Vi(r){return!!r&&r.size>0}function Jf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function _i(r,e){if(!(Et(r.diffs)||Et(r.descendantDiffs)||Vi(r.diffsSummary)||Vi(r.descendantDiffsSummary)||Et(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=Jf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Bt(r,e,n){if(r.isCycle)return _i(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return _i(r,e)?!0:r.type===se.COMPLEX?r.nestedNodes().some(t=>Bt(t,e,n)):r.childrenNodes().some(t=>Bt(t,e,n))}finally{n.visiting.delete(r.id)}}function Qo(r,e){return Bt(r,e,{visiting:new Set})}function Ff(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),s=r.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const s=r[o].id,l=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});a.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function Kf(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return Ff(r,a=>Qo(a,t),n)}function Zo(r){return r.kind===w.MESSAGE}function Gf(r){return r.kind===w.MESSAGE_SECTION_SELECTOR}function es(r){return r.kind===w.MESSAGE_CONTENT}function Bf(r){return r.kind===w.MESSAGE_HEADERS&&r.key==="headers"}function Uf(r){return r.kind===w.MESSAGE_PAYLOAD&&r.key==="payload"}function ns(r){return r.kind===w.MESSAGE_CHANNEL}function Yf(r){return r.kind===w.MESSAGE_CHANNEL_PARAMETERS}function rs(r){return r.kind===w.MESSAGE_OPERATION}function La(r){return r.kind===w.EXTENSIONS}function lt(r){return r.kind===w.BINDINGS}function xt(r){return r.kind===w.BINDING}function Wf(r){return es(r)||ns(r)||rs(r)}function $f(r){return r.kind===w.SERVERS}function zf(r){return r.kind===w.SERVER}function Je(r,e,n){var a;if(!R(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?x(t)?t.beforeValue!==void 0:k(t)?t.afterValue!==void 0:H(t)?t.beforeValue!==void 0||t.afterValue!==void 0:an(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const Xf=r=>{if(!dr(r)||fo(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function Qf(r){if(!dr(r)||fo(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,s)=>(Vd(s)&&(o[s]=r[s]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const Zf=[Xf,Qf],Ke=(r=Be.root)=>({"/allOf":{"/*":()=>Ke(Be.allOf)},"/oneOf":{"/*":()=>Ke(Be.oneOf)},"/anyOf":{"/*":()=>Ke(Be.anyOf)},"/properties":{"/*":()=>Ke(Be.property)},"/items":()=>({...Ke(Be.items),"/*":({key:e})=>Rl(e)?Ke(Be.item):{}}),"/additionalProperties":()=>Ke(Be.additionalProperties),"/additionalItems":()=>Ke(Be.additionalItems),"/patternProperties":{"/*":()=>Ke(Be.patternProperty)},kind:r,transformers:Zf});function ec(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((s,l)=>l(s,r,n,t),e);return o!==e&&di(o)&&di(e)&&Object.defineProperty(o,co,{value:e,enumerable:!1}),{value:o}}}function nc(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!ql.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:s,nodeIdPrefix:l}=i,u=l+Il(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:ja(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=s?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:s,parent:s.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(s?s.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===Ol.simple)return{done:!0};const g=i.treeLevel+1;if(y.value){const p=new Map(i.alreadyConvertedMappingStack);p.set(n,y.node);const h=n[co];h!==void 0&&p.set(h,y.node);let b;return _d(y.node)?b={parent:y.node,alreadyConvertedMappingStack:p,nodeIdPrefix:l,treeLevel:g,maxTreeLevel:i.maxTreeLevel}:b={parent:o,container:y.node,alreadyConvertedMappingStack:p,nodeIdPrefix:l,treeLevel:g,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:b}}else return{done:!0}}}const rc=2;function ja(r,e){return[Rd(r),ec(e),nc(r)]}const tc=(r,e=rc)=>{const n=new Md(r);if(!dr(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return hn(r,ja(n,r),{state:t,rules:Ke()}),n},ac=2,ic=(r,e,n=ac)=>{const t=new qd(r,e);if(!dr(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return hn(r,ja(t,r),{state:a,rules:Ke()}),t};function Le(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function oc(r){return Le(r,Cd,w.BINDINGS)}function kt(r){return Le(r,He,w.BINDING)}function sc(r){return Le(r,He)}function lc(r){return Le(r,He,w.MESSAGE_CHANNEL)}function dc(r){return Le(r,He)}function kr(r){return Le(r,He,w.SERVER)}function uc(r){return Le(r,He)}function fc(r){return Le(r,He,w.MESSAGE_HEADERS)}function cc(r){return Le(r,He,w.MESSAGE_PAYLOAD)}function mc(r){return Le(r,He,w.MESSAGE)}function yc(r){return Le(r,He,w.MESSAGE_OPERATION)}function gc(r){return Le(r,He,w.MESSAGE_SECTION_SELECTOR)}function pc(r){return Le(r,He,[w.MESSAGE_CONTENT,w.MESSAGE_CHANNEL,w.MESSAGE_OPERATION])}const ts=r=>{const e=ge(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>ur(i==null?void 0:i.causedAt),[i]);switch(e){case we:return d.jsx(Pn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Tn,{left:d.jsx(At,{...r,layoutSide:W}),right:d.jsx(At,{...r,layoutSide:Q})})});default:return d.jsx(On,{content:d.jsx(At,{...r,layoutSide:Q})})}},hc={send:"bg-sky-400",receive:"bg-green-500"},At=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[ie]:i}=r,o=m.useCallback(()=>{const l=a&&bc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${hc[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(k(a.data)&&t===W&&(u=null),x(a.data)&&t===Q&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(Dt,{value:n,variant:F.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:g}=l,p=t===W?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Dt,{value:c,variant:F.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Dt,{value:p,variant:F.h4,layoutSide:t,diff:g,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),s=m.useMemo(()=>{const l=new Set;if(a){const{styles:u}=a;t===W?l.add(z.background(u.before.backgroundColor)):l.add(z.background(u.after.backgroundColor))}return Array.from(l)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${fr} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function bc(r){const{data:e}=r;if(!H(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),s=i===-1?t:t.slice(0,i);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:l}}}ts.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Sc=m.memo(r=>r.mergedSource===null?null:d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"Async API Operation Viewer"}),children:d.jsx(vc,{...r})})),vc=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=Nn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=r,u=m.useMemo(()=>Xe(a),[a]),c=m.useMemo(()=>new Ju({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!Zo(y)?null:d.jsx(rt.Provider,{value:s,children:d.jsx(Ea.Provider,{value:l,children:d.jsx(wo.Provider,{value:a,children:d.jsx(wn.Provider,{value:t,children:d.jsx(qn.Provider,{value:we,children:d.jsx(Pe.Provider,{value:0,children:d.jsx(li,{node:y,noHeading:i})})})})})})})});Sc.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Ja=m.createContext(void 0);function Dc(){return m.useContext(Ja)}const dt=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Id(),i=Fe(),s=e.node.newDataLevel?i+1:i,l=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=D=>{if(D){e.select(D),f(D),n(D);const S=u.find(E=>E.id===D);a==null||a(S)}},g=ge(),p=m.useMemo(()=>{const D={};return u.forEach(S=>{const E=S.value().$changes??{},C=xa({node:S});C&&(D[S.id]={...C,...Object.keys(E).length?{$changes:E}:{}})}),D},[u]),h=Fe()+1,b=u.find(D=>(D==null?void 0:D.id)===c),T=Od(b)?b==null?void 0:b.kind:"",v=mo(t??(l==null?void 0:l.$nodeChange));return d.jsx(Pe.Provider,{value:s,children:d.jsx(Pd,{nodesTypeData:p,selectedNodeId:c,combiner:T,onSelect:y,layoutMode:g,level:h,$nodeChange:v,$nestedChanges:l==null?void 0:l.$nestedChanges,$nestedChangesSummary:g!==ze?e.$nestedChangesSummary:void 0})})};dt.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const ut=m.createContext(void 0);function as(){return m.useContext(ut)}const $n=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{i(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(hd.Provider,{value:l,children:t})});$n.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function is(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class wc extends wa{constructor(){super()}}const ft={PROPERTY:"property"},lr=Object.values(ft),ne={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Nc extends Qr{constructor(){super(...arguments);P(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const xe=class xe{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=xe.isArrayItemKey(e);return xe.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=xe.getValueType(e),i=xe.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:xe.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===ne.BOOLEAN||e===ne.NULL}static isPrimitiveValue(e){return e!==ne.JSON_SCHEMA&&e!==ne.MULTI_SCHEMA&&e!==ne.OBJECT&&e!==ne.ARRAY}static getValueType(e){return typeof e=="string"?ne.STRING:typeof e=="number"?ne.NUMBER:typeof e=="boolean"?ne.BOOLEAN:typeof e=="object"?e===null?ne.NULL:Array.isArray(e)?ne.ARRAY:xe.isJsonSchema(e)?ne.JSON_SCHEMA:xe.isMultiSchema(e)?ne.MULTI_SCHEMA:ne.OBJECT:ne.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Ot in e&&typeof e.type=="string"&&Pl.some(a=>a===e.type)||qt in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>xe.isJsonSchema(a))||It in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>xe.isJsonSchema(a))||Rt in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>xe.isJsonSchema(a))||Hr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([ao,Hl,Ll,uo,jl,Jl,Fl,Ot,to,Pt,io,sa,ua,fa,la,da,ma,ca,ya,ta,ra,aa,oa,ia,Qi,Zi,lo,na,$i,Xi,zi,Rt,qt,It,Kl,so,no,ro,oo,eo,Gl,Hr]);return n&&Object.keys(e).every(a=>t.has(a)||xe.isExtensionPropertyInJsonSchema(a)||xe.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&R(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!ha(e))return e;const t=oe(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let s;for(const l of o){const u=e[l],c=t[l];if(u===void 0||c===void 0||!H(c))continue;const{beforeValue:f,afterValue:y}=c,g=R(f),p=Array.isArray(f),h=R(y),b=Array.isArray(y);if(!(p&&h||g&&b))continue;s||(s={...e});const v={...f,...y};s[l]=v}return s??e}};P(xe,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:ne.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let K=xe;const Tc=(r,e,n,t,a)=>K.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function os(){return{"/*":()=>os(),transformers:[Tc],kind:ft.PROPERTY}}function Ec(r){return zr(r)}const xc=new Set(lr);class kc extends Xr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=K.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return xc.has(e)}}class Ac extends Hn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!k(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class ss{static instance(e){if(!this.instances.has(null)){const n=new Ac;this.instances.set(null,n)}return this.instances.get(null)}}P(ss,"instances",new Map);class Cc extends Qn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!R(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=oe(n[a]);if(!i)return;const o={};for(const[s,l]of Object.entries(i)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,g=Oe;if(k(l)){const{afterValue:p}=l,h=K.getValueType(p),b=K.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},f={...f,increaseLevel:!1},c={isContentVisible:b,isHeaderVisible:!0,backgroundColor:N.Green},y={...y,increaseLevel:!0},g=gn}if(x(l)){const{beforeValue:p}=l,h=K.getValueType(p);u={isContentVisible:K.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:N.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={...y,increaseLevel:!1},g=gn}if(H(l)){const{beforeValue:p,afterValue:h}=l,b=K.getValueType(p),T=K.getValueType(h),v=K.isPrimitiveValue(b),D=K.isPrimitiveValue(T),S=K.isPredefinedValueSet(b),E=K.isPredefinedValueSet(T);u={isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow},v&&(S?u.borderShadowColor=N.Yellow:u.textHighlighterColor=N.Yellow),c={isContentVisible:D,isHeaderVisible:!0,backgroundColor:N.Yellow},D&&(E?c.borderShadowColor=N.Yellow:c.textHighlighterColor=N.Yellow),g=Bl}o[s]={data:l,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:g}}return o}}class ls{static instance(e){if(!this.instances.has(null)){const n=new Cc;this.instances.set(null,n)}return this.instances.get(null)}}P(ls,"instances",new Map);class Vc extends ke{aggregate(e){const n=e[M];if(n){const o=n.data,s={type:o.type,causedAt:[]};return H(o)||x(o)?s.causedAt=o.beforeDeclarationPaths[0]:k(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[G.TitleRow]:s}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return H(a)||x(a)?i.causedAt=a.beforeDeclarationPaths[0]:k(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[G.TitleRow]:i}}}class ds{static instance(e){return this.instances.has(null)||this.instances.set(null,new Vc),this.instances.get(null)}}P(ds,"instances",new Map);class _c extends Na{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!x(n)&&!H(n)&&!an(n))return!1;return!0}}class Mc{static instance(e){return new _c}}class Rc extends ${isComplexValue(e){return R(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const s=a.diffs[M];if(s){const{data:l}=s;if(k(l)){const{afterValue:u}=l,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],g=K.getValueType(y),p=K.isPrimitiveValue(g),h={data:{...l,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:N.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:gn,inherited:!0};return o[M]=h,o}return o[M]=s,o}if(x(l)){const{beforeValue:u}=l,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],g=K.getValueType(y),p=K.isPrimitiveValue(g),h={data:{...l,beforeValue:y},styles:{before:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:gn,inherited:!0};return o[M]=h,o}return o[M]=s,o}if(H(l)){const{beforeValue:u,afterValue:c}=l,f=K.getValueType(u),y=K.getValueType(c),g=K.isPrimitiveValue(f),p=K.isPrimitiveValue(y);if(g&&p)return o[M]=s,o;if(!g&&this.isComplexValue(u)&&p){const h=u[t],b=K.getValueType(h),T=K.isPrimitiveValue(b),v=K.isPredefinedValueSet(b),D={data:{...l,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:gn,inherited:!0};return T&&(D.styles.before.textHighlighterColor=N.Yellow),v&&(D.styles.before.borderShadowColor=N.Yellow),o[M]=D,o}if(!p&&this.isComplexValue(c)&&g){const h=c[t],b=K.getValueType(h),T=K.isPrimitiveValue(b),v=K.isPredefinedValueSet(b),D={data:{...l,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:gn,inherited:!0};return T&&(D.styles.after.textHighlighterColor=N.Yellow),v&&(D.styles.after.borderShadowColor=N.Yellow),o[M]=D,o}if(!g&&this.isComplexValue(u)&&!p&&this.isComplexValue(c)){const h=u[t],b=c[t],T=K.getValueType(h),v=K.getValueType(b),D=K.isPrimitiveValue(T),S=K.isPrimitiveValue(v),E=K.isPredefinedValueSet(T),C=K.isPredefinedValueSet(v),V={data:{...l,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&D,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?N.Gray:N.Yellow,textHighlighterColor:h!==void 0?N.Yellow:void 0},after:{isContentVisible:b!==void 0&&S,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?N.Gray:N.Yellow,textHighlighterColor:b!==void 0?N.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:gn,inherited:!0};return D&&(V.styles.before.textHighlighterColor=N.Yellow),S&&(V.styles.after.textHighlighterColor=N.Yellow),E&&(V.styles.before.borderShadowColor=N.Yellow),C&&(V.styles.after.borderShadowColor=N.Yellow),o[M]=V,o}}}else{const l=a.descendantDiffs[t];if(l)return o[M]=l,o}}}}class us{static instance(e){return this.instances.has(null)||this.instances.set(null,new Rc),this.instances.get(null)}}P(us,"instances",new Map);class qc extends Nc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"diffsMetaKeys");P(this,"logger");P(this,"nodeDataBuilder");P(this,"CHANGE_SEVERITIES",{[Ul]:6,[Yl]:5,[Wl]:4,[$l]:3,[zl]:2,[Xl]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new wc,this.nodeDataBuilder=new kc}build(){if(!R(this.source))return this.tree;Wr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Zr,diffMetaKeys:this.diffsMetaKeys},t=os(),a=Ec({source:this.source,tree:this.tree,supportedNodeKinds:lr,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===se.SIMPLE,isComplexNode:i=>i.type===se.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!R(o)&&!Array.isArray(o))return!0;const s=i.value();return s?this.supportJsonSchema&&(s.before.valueType===ne.JSON_SCHEMA||s.after.valueType===ne.JSON_SCHEMA||s.before.valueType===ne.MULTI_SCHEMA||s.after.valueType===ne.MULTI_SCHEMA):!1}});return hn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return R(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:se.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:c,newDataLevel:l},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const p=y.diffs[M];if(p){const{data:h}=p;if(k(h)&&u&&(u.before=K.DEFAULT_BASE_JSO_NODE_VALUE),x(h)&&u&&(u.after=K.DEFAULT_BASE_JSO_NODE_VALUE),H(h)){const{beforeValue:b}=h,T=K.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=T)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return us.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return Mc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return ls.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return ss.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return ds.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Ta(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[M];if(!t||!H(t.data))return!1;const a=K.getValueType(t.data.beforeValue),i=K.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),s=this.isJsoComplexValueType(i);return o!==s}isJsoComplexValueType(n){return n===ne.OBJECT||n===ne.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[M]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===se.SIMPLE||n.type===se.COMPLEX))}isJsoTreeNodeKind(n){return lr.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===se.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===se.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const We={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function fs(r,e){if(e)return{type:"object",properties:{[r]:e}}}function Ut(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Ic(r,e){if(e&&!(e.valueType!==We.JSON_SCHEMA&&e.valueType!==We.MULTI_SCHEMA))return R(e.value)?fs(r,e.value):void 0}function Oc(r,e,n,t){if(e&&!(e.before.valueType!==We.JSON_SCHEMA&&e.before.valueType!==We.MULTI_SCHEMA&&e.after.valueType!==We.JSON_SCHEMA&&e.after.valueType!==We.MULTI_SCHEMA)){if((e.before.valueType===We.JSON_SCHEMA||e.before.valueType===We.MULTI_SCHEMA)&&R(e.before.value))return Ut(r,e.before.value,n,t);if((e.after.valueType===We.JSON_SCHEMA||e.after.valueType===We.MULTI_SCHEMA)&&R(e.after.value))return Ut(r,e.after.value,n,t)}}const Fa=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});Fa.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function cs(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function Pc(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=cs({appearance:e});return m.useMemo(()=>[a,e==="text"?z.highlighter(n):"",e==="block"?z.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const Ir=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=Pc({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(Fa,{isVisible:e,value:n,className:o})});Ir.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Ka=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Ge(),i=Zn(),{beforeLevel:o,afterLevel:s}=Sa(),[l,u]=m.useState(!0),c=m.useCallback(()=>{u(q=>!q)},[]),f=e.value(),y=e.diffs,g=e.descendantDiffsSummary,p=m.useMemo(()=>y[M],[y]),h=m.useCallback(q=>{if(!f)return d.jsx(d.Fragment,{});if(!p)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Ir,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!l&&d.jsx(ka,{values:Array.from(g)})]});const{styles:A}=p;return q===W?d.jsx(Ir,{isVisible:A.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:A.before.textHighlighterColor,borderShadowColor:A.before.borderShadowColor}):q===Q?d.jsx(Ir,{isVisible:A.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:A.after.textHighlighterColor,borderShadowColor:A.after.borderShadowColor}):d.jsx(d.Fragment,{})},[l,g,f,p]),b=m.useMemo(()=>{const q=on(e);return ae(q,{resolveDiff:()=>p})},[e,p]),T=e.childrenNodes(),v=m.useMemo(()=>{const q=!!f,A=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==ne.UNKNOWN,O=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==ne.UNKNOWN;return q&&(A||O)},[f]),D=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),S=m.useMemo(()=>n?Oc(e.key,f,p,i):void 0,[i,e.key,f,p,n]);if(S)return i?d.jsx(gt,{schema:S,expandedDepth:2,displayMode:a,layoutMode:we,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const E=is(T),[C,V]=(()=>{let q=o+1,A=s+1;const[O]=T,L=O==null?void 0:O.diffs[M];return L&&E&&(q=L.flags.before.increaseLevel?o+1:o,A=L.flags.after.increaseLevel?s+1:s),[q,A]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ce,{"data-precededby":t,value:`${e.key}`,expandable:v,expanded:l,onClickExpander:v?c:void 0,variant:F.body2,enableHeaderValue:D,subheader:h,usage:et.JsoProperty,highlightingMode:p==null?void 0:p.highlightingMode,...b}),l&&d.jsx($n,{beforeLevel:C,afterLevel:V,children:T.map(q=>d.jsx(Ka,{"data-precededby":_.JSO_PROPERTY,node:q,supportJsonSchema:n},q.id))})]})};Ka.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
  before: JsoTreeNodeValueBase
  after: JsoTreeNodeValueBase
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  readonly title: string
  readonly value: unknown
  readonly valueType: JsoPropertyValueType
  readonly isPrimitive: boolean
  readonly isArrayItem: boolean
  readonly isPredefinedValueSet: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  readonly title: string
  readonly value: unknown
  readonly valueType: JsoPropertyValueType
  readonly isPrimitive: boolean
  readonly isArrayItem: boolean
  readonly isPredefinedValueSet: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0}}]}},{name:"null"}]},{name:"JsoTreeNodeKinds[union]",raw:"typeof JsoTreeNodeKinds[keyof typeof JsoTreeNodeKinds]"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  readonly title: string
  readonly value: unknown
  readonly valueType: JsoPropertyValueType
  readonly isPrimitive: boolean
  readonly isArrayItem: boolean
  readonly isPredefinedValueSet: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const ct=m.memo(r=>r.mergedSource===null?null:d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(Hc,{...r})})),Hc=m.memo(r=>{const{mergedSource:e,displayMode:n=Nn,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:s}=r,{[ie]:l}=r,u=m.useMemo(()=>Xe(i),[i]),c=m.useMemo(()=>new qc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const g=y.childrenNodes();if(g.length===0)return null;const p=is(g),[h,b]=(()=>{let T=t,v=t;const[D]=g,S=D.diffs[M];return S&&p&&(T=S.flags.before.increaseLevel?t:t-1,v=S.flags.after.increaseLevel?t:t-1),[T,v]})();return d.jsx(rt.Provider,{value:o,children:d.jsx(Ea.Provider,{value:s,children:d.jsx(wn.Provider,{value:n,children:d.jsx(qn.Provider,{value:we,children:d.jsx($n,{beforeLevel:h,afterLevel:b,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:g.map((T,v)=>d.jsx(Ka,{"data-precededby":v===0?l:_.JSO_PROPERTY,node:T,supportJsonSchema:a},T.id))})})})})})})});ct.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class Lc extends pa{constructor(){super()}}function ms(){return{"/*":()=>ms(),kind:ft.PROPERTY}}function jc(r){return zr(r)}const Jc=new Set(lr);class Fc extends Xr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==ft.PROPERTY?null:K.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Jc.has(e)}}class Kc extends Qr{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new vo);P(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new Lc,this.nodeDataBuilder=new Fc}build(){if(!R(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Zr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=ms();return this.crawlHooks=jc({source:this.source,tree:this.tree,supportedNodeKinds:lr,createNodeFromRaw:(a,i,o,s,l)=>this.createNodeFromRaw(a,i,o,s,l),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!R(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===ne.JSON_SCHEMA||o.valueType===ne.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:bd}}),hn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:Do(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};hn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const g=this.createNodeMeta(t,o),p={type:se.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:g,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,p)}const c=this.createNodeValue(t,a,{...o,parent:s,container:l}),f=this.createNodeMeta(t,o),y={type:se.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===se.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const mt=r=>d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"JSON Schema Viewer"}),children:d.jsx(Gc,{...r})}),Gc=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Nn,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:s=0}=r,l=m.useMemo(()=>tc(e),[e]),c=m.useMemo(()=>new Ao(l,n),[n,l]).root;let f=null;return tt(c)&&(f=d.jsx(yt,{state:c,overriddenKind:a})),at(c)&&(f=d.jsx(dt,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(ut.Provider,{value:o,children:d.jsx(Ja.Provider,{value:i,children:d.jsx(wn.Provider,{value:t,children:d.jsx(Pe.Provider,{value:s,children:f})})})})};mt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const ys=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=cs({appearance:t});return d.jsx(Fa,{isVisible:e,value:n,className:a})});ys.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ga=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Ge(),i=Fe(),[o,s]=m.useState(!0),l=m.useCallback(()=>{s(p=>!p)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(ys,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),g=m.useMemo(()=>n?Ic(e.key,u):void 0,[e.key,u,n]);return g?d.jsx(mt,{schema:g,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ce,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:l,variant:F.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:et.JsoProperty}),o&&d.jsx(Pe.Provider,{value:i+1,children:y.map(p=>d.jsx(Ga,{"data-precededby":_.JSO_PROPERTY,node:p,supportJsonSchema:n}))})]})};Ga.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
  readonly title: string
  readonly value: unknown
  readonly valueType: JsoPropertyValueType
  readonly isPrimitive: boolean
  readonly isArrayItem: boolean
  readonly isPredefinedValueSet: boolean
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]}},{name:"null"}]},{name:"JsoTreeNodeKinds[union]",raw:"typeof JsoTreeNodeKinds[keyof typeof JsoTreeNodeKinds]"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const mr=m.memo(r=>r.source===null?null:d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"JSO Viewer"}),children:d.jsx(Bc,{...r})})),Bc=m.memo(r=>{const{source:e,displayMode:n=Nn,layoutMode:t=ze,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[ie]:s}=r,l=m.useMemo(()=>Xe(o),[o]),u=m.useMemo(()=>new Kc({source:e,supportJsonSchema:i,logger:l}),[e,i,l]),c=m.useMemo(()=>u.build(),[u]);l.debug("[JSO] Source:",e),l.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(wn.Provider,{value:n,children:d.jsxs(qn.Provider,{value:t,children:[" ",d.jsx(Pe.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((g,p)=>d.jsx(Ga,{"data-precededby":p===0?s:_.JSO_PROPERTY,node:g,supportJsonSchema:i},g.id))})})]})})});mr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const Mi=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=Fe(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const s=new Set;return n===W&&(k(e)&&(s.add(z.background(N.Gray)),o=!1),x(e)&&s.add(z.background(N.Red))),n===Q&&(k(e)&&s.add(z.background(N.Green)),x(e)&&(s.add(z.background(N.Gray)),o=!1)),{diffStylesClasses:Array.from(s),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row h-full ${a.join(" ")}`,children:[d.jsx(In,{level:t+1,lastInvisible:!0}),i&&d.jsx(Co,{children:"Extensions"})]})}),Uc=[],gs=r=>{const{extensions:e,$nodeChange:n}=r,t=Fe(),a=Ge(),i=ge(),o=Zn(),s=i===ui,l=i===we,u=m.useMemo(()=>{let p=Yc(n);return p||(p=$c(e,o)),p},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let p=[];return(x(u)||H(u))&&(p=u.beforeDeclarationPaths[0]??[]),k(u)&&(p=u.afterDeclarationPaths[0]??[]),p.length>0?`caused by ${p.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const p=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(In,{level:t+1,lastInvisible:!0}),d.jsx(Co,{children:"Extensions"})]});switch(i){case ui:return null;case we:return d.jsx(Pn,{diffType:c,diffTypeCause:f,children:d.jsx(Tn,{left:d.jsx(Mi,{diff:u,layoutSide:W}),right:d.jsx(Mi,{diff:u,layoutSide:Q})})});default:return p}},[i,t,u,f,c]),g=m.useMemo(()=>{if(s)return null;if(l&&o){const p=Wc(e,u,o);return d.jsx(ct,{mergedSource:p,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:Uc})}return d.jsx(mr,{source:e,initialLevel:t+1})},[s,l,o,e,t,u,a]);return g?d.jsxs("div",{className:"flex flex-col",children:[y,g]}):null};function Yc(r){if(!r)return;const{depth:e,...n}=r;return n}function Wc(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)qr(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function $c(r,e){var s;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=oe(re(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const l of i)if(((s=a[l])==null?void 0:s.action)!==(o==null?void 0:o.action))return;return o}gs.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const zc=["type","nullable","title","format"],Xc=["required","readOnly","writeOnly","deprecated"],ps=r=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:a,readOnly:i,writeOnly:o,deprecated:s,isExpandable:l,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:y=yo,level:g=0,$changes:p,$metaChanges:h,$nodeChange:b,$nodeChangesSummary:T}=r,v=!!b,D=Ql(),S=Dc(),E=dr(S)&&(n!=null&&n.title)&&S[n.title]?S[n.title]:void 0,C=Zl(v?void 0:T),V=m.useCallback(le=>D.length===0||D.includes(le),[D]),{isDocumentLayoutMode:q,isInlineDiffsLayoutMode:A,isSideBySideDiffsLayoutMode:O}=go(y),L=!!p&&zc.some(le=>Un(p[le]))||!!h&&Xc.some(le=>Un(h[le])),{nodeAdded:I,nodeRemoved:j,nodeReplaced:B,nodeRenamed:Z}={nodeAdded:v&&b.action===J.add,nodeRemoved:v&&b.action===J.remove,nodeReplaced:v&&b.action===J.replace,nodeRenamed:v&&b.action===J.rename},Ne=ed(nd(p,h,ad),D),[pe,Ve]=v?Lr(b):L?Lr(...Ne):rd,Qe=td(pe,D),kn=v?fi[b==null?void 0:b.action]:L?fi[J.replace]:"",U=({layoutSide:le})=>{const Ze=O?"w-1/2":"w-full",he=!q&&!v&&L&&!!(h!=null&&h.required),X=Ld(),fe=X&&X===le,je=c&&!l,An=["flex flex-row",!je&&"gap-2",Ze].filter(Boolean).join(" "),Jn=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(Vo,{...t,showNullable:!0,layoutMode:y,layoutSide:le,$changes:p})}),ga.isNotEmpty(C)&&!q&&l&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(ka,{values:C,filter:V})}),a&&d.jsx(it,{text:Aa,children:d.jsx(Ca,{})}),d.jsx(Va,{requiredChanged:he,readOnly:i,writeOnly:o,deprecated:s,layoutSide:le,isNodeChanged:v,isContentChanged:L,$nodeChange:b,$metaChanges:h}),E&&d.jsx(id,{label:E,colorSchema:od(sd),layoutMode:y,layoutSide:le,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:An,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(In,{level:g}),je?d.jsx("div",{className:"w-5"}):d.jsx(jd,{isRoot:c,isExpandable:l,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${l?"hover:cursor-pointer":""}`,onClick:l?f:void 0,children:d.jsx(Jd,{...n,showRequired:!0,layoutMode:y,layoutSide:le,requiredChange:h==null?void 0:h.required,titleChange:b})}),!fe&&d.jsx(Jn,{})]})]})};return q?d.jsx("div",{className:"flex flex-row",children:d.jsx(U,{...r,layoutSide:Q})}):A?!v&&!L?d.jsx("div",{className:"flex flex-row",children:d.jsx(U,{...r,layoutSide:W})}):d.jsxs("div",{className:`flex flex-row relative ${Qe?kn:""}`,children:[pe&&Qe&&d.jsx(ci,{variant:pe,message:Ve}),d.jsx(U,{...r,layoutSide:W})]}):O?!v&&!L?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(U,{...r,layoutSide:W}),d.jsx(U,{...r,layoutSide:Q})]}):d.jsxs("div",{className:`flex flex-row relative ${Qe?kn:""}`,children:[pe&&Qe&&d.jsx(ci,{variant:pe,message:Ve}),!v&&L||v&&(j||B||Z)?d.jsx(U,{...r,layoutSide:W}):d.jsx(mi,{level:(b==null?void 0:b.depth)??g}),!v&&L||v&&(I||Z||B)?d.jsx(U,{...r,layoutSide:Q}):d.jsx(mi,{level:(b==null?void 0:b.depth)??g})]}):d.jsx(Hd,{layoutMode:y})};ps.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  title: string | number
  required: boolean
  nullable: boolean
  isBadge: boolean
  badgeKind: BadgeKind
  isIndex: boolean
  isDirective: boolean
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"required",value:{name:"boolean",required:!0}},{key:"nullable",value:{name:"boolean",required:!0}},{key:"isBadge",value:{name:"boolean",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}},{key:"isIndex",value:{name:"boolean",required:!0}},{key:"isDirective",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  title: string | number
  required: boolean
  nullable: boolean
  isBadge: boolean
  badgeKind: BadgeKind
  isIndex: boolean
  isDirective: boolean
}>`},description:""},nodeTypeData:{required:!0,tsType:{name:"union",raw:"NodeTypeData | null",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  brokenRef: string
  type: string
  nullable: boolean
  title: string
  qualifier: string
  combiner: string
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"nullable",value:{name:"boolean",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"qualifier",value:{name:"string",required:!0}},{key:"combiner",value:{name:"string",required:!0}}]}}],raw:`Partial<{
  brokenRef: string
  type: string
  nullable: boolean
  title: string
  qualifier: string
  combiner: string
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function Qc(r,e){var S,E,C;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,s=o==null?void 0:o.exclusiveMinimum,l=o==null?void 0:o.exclusiveMaximum,u=typeof s=="number"?s:s===!0&&de(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof l=="number"?l:l===!0&&de(o==null?void 0:o.maximum)?o.maximum:void 0,f=s===!0||o==null?void 0:o.minimum,y=l===!0||o==null?void 0:o.maximum,g=o==null?void 0:o.multipleOf,p=(C=(E=(S=r==null?void 0:r.parent)==null?void 0:S.value())==null?void 0:E.propertyNames)==null?void 0:C.enum,h=e==null?void 0:e.minProperties,b=e==null?void 0:e.maxProperties,T=e==null?void 0:e.uniqueItems,v=e==null?void 0:e.minItems,D=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:g},object:{allowedPropertyNames:p,minProperties:h,maxProperties:b},array:{uniqueItems:T,minItems:v,maxItems:D}}}const Zc="?",ye="{value}",rn="{exclusive_value}",mn=">",Ar=">=",yn="<",Cr="<=",be=1,Se=2,ve=4,De=8,Vr={0:{lower:void 0,upper:void 0},[be]:{lower:`${Ar} ${ye}`,upper:void 0},[Se]:{lower:`${mn} ${rn}`,upper:void 0},[ve]:{lower:void 0,upper:`${Cr} ${ye}`},[De]:{lower:void 0,upper:`${yn} ${rn}`},[Se|be]:{lower:`${mn} ${ye}`,upper:void 0},[Se|ve]:{lower:`${mn} ${rn}`,upper:`${Cr} ${ye}`},[Se|De]:{lower:`${mn} ${rn}`,upper:`${yn} ${rn}`},[De|be]:{lower:`${Ar} ${ye}`,upper:`${yn} ${rn}`},[De|ve]:{lower:void 0,upper:`${yn} ${ye}`},[ve|be]:{lower:`${Ar} ${ye}`,upper:`${Cr} ${ye}`},[Se|be|ve]:{lower:`${mn} ${ye}`,upper:`${Cr} ${ye}`},[Se|be|De]:{lower:`${mn} ${ye}`,upper:`${yn} ${rn}`},[Se|ve|De]:{lower:`${mn} ${rn}`,upper:`${yn} ${ye}`},[De|be|ve]:{lower:`${Ar} ${ye}`,upper:`${yn} ${ye}`},[be|Se|ve|De]:{lower:`${mn} ${ye}`,upper:`${yn} ${ye}`}};function _r(r){return r!==void 0&&r!==!1}function Mr(r){return r!==void 0&&r!==!1}function Ri(r,e,n){return(r&(be|Se))!==(be|Se)||n===void 0||typeof e!="number"?r:n>=e?r&~be:r&~Se}function qi(r,e,n){return(r&(ve|De))!==(ve|De)||n===void 0||typeof e!="number"?r:n<=e?r&~ve:r&~De}function Rr(r,e,n){return r.replace(ye,`${e}`).replace(rn,de(n)?`${n}`:Zc)}function em(r,e,n){var fe,je;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,s=r.exclusiveMaximum,l=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=Lr(l,u),[g]=Lr(c,f),p=de(a),h=de(o),b=de(l),T=de(c),v=de(u),D=de(f),S=pr(l),E=Fn(l),C=dn(l),V=pr(c),q=Fn(c),A=dn(c),O=typeof i=="number"?i:void 0,L=typeof s=="number"?s:void 0;let I=0,j=0;p&&(!b||S||C)&&(j|=be),_r(i)&&(!v||pr(u)||dn(u)&&Mr(u==null?void 0:u.afterValue))&&(j|=Se),h&&(!T||V||A)&&(j|=ve),_r(s)&&(!D||pr(f)||dn(f)&&Mr(f==null?void 0:f.afterValue))&&(j|=De),typeof i!="number"&&!(j&be)&&(j&=~Se),typeof s!="number"&&!(j&ve)&&(j&=~De),j=Ri(j,a,O),j=qi(j,o,L);const B=j in Vr?{...Vr[j]}:void 0;if(B!=null&&B.lower&&(B.lower=Rr(B.lower,a,O)),B!=null&&B.upper&&(B.upper=Rr(B.upper,o,L)),t.data.lower=B==null?void 0:B.lower,t.data.upper=B==null?void 0:B.upper,!b&&!v&&!T&&!D)return t.visible=Ii(t.data.lower,t.data.upper),t;let Z,Ne,pe,Ve;p&&!b&&(Z=a,I|=be),(E||C)&&(Z=l.beforeValue,I|=be),h&&!T&&(Ne=o,I|=ve),(q||A)&&(Ne=c.beforeValue,I|=ve),_r(i)&&!v&&(I|=Se,pe=O),(dn(u)||Fn(u))&&Mr(u==null?void 0:u.beforeValue)&&(I|=Se,typeof u.beforeValue=="number"&&(pe=u.beforeValue)),_r(s)&&!D&&(I|=De,Ve=L),(dn(f)||Fn(f))&&Mr(f==null?void 0:f.beforeValue)&&(I|=De,typeof f.beforeValue=="number"&&(Ve=f.beforeValue)),(!v&&typeof i!="number"||(dn(u)||Fn(u))&&typeof u.beforeValue!="number")&&!(I&be)&&(I&=~Se),(!D&&typeof s!="number"||(dn(f)||Fn(f))&&typeof f.beforeValue!="number")&&!(I&ve)&&(I&=~De),I=Ri(I,Z,pe),I=qi(I,Ne,Ve);const U=I in Vr?{...Vr[I]}:void 0;U!=null&&U.lower&&(U.lower=Rr(U.lower,Z,pe)),U!=null&&U.upper&&(U.upper=Rr(U.upper,Ne,Ve)),(fe=t.data).lower??(fe.lower=U==null?void 0:U.lower),(je=t.data).upper??(je.upper=U==null?void 0:U.upper),t.visible=Ii(t.data.lower,t.data.upper);const le=Oi(y,U==null?void 0:U.lower,B==null?void 0:B.lower),Ze=Oi(g,U==null?void 0:U.upper,B==null?void 0:B.upper),he=Pi(l,u),X=Pi(c,f);return le&&(Hi(le,he),t.changes.lower=le),Ze&&(Hi(Ze,X),t.changes.upper=Ze),t.changesKeys=_n(t.data,n),t}function Ii(r,e){return!!r||!!e}function Oi(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:J.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:J.remove,beforeValue:e}:{type:r,action:J.replace,beforeValue:e,afterValue:n}}function Pi(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(po(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),ho(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Hi(r,e){if(r)return po(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),ho(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const Cn={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},hs=r=>{var X,fe,je,An,Jn,ln;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,s=n.value,l=s,u=(X=n.parent)==null?void 0:X.value,c=(fe=n.parent)==null?void 0:fe.value,f=Fe(),y=ge(),g=Fd(a),p=Kd(a),h=Gd(s),b=Bd(s),T=_o(s),v=Lt(s)||Lt(u),{any:D,string:S,number:E,object:C,array:V}=Qc(a,s),q={minimum:s==null?void 0:s.minimum,exclusiveMinimum:s==null?void 0:s.exclusiveMinimum,maximum:s==null?void 0:s.maximum,exclusiveMaximum:s==null?void 0:s.exclusiveMaximum},A=(je=l==null?void 0:l.$changes)==null?void 0:je.minimum,O=(An=l==null?void 0:l.$changes)==null?void 0:An.exclusiveMinimum,L=(Jn=l==null?void 0:l.$changes)==null?void 0:Jn.maximum,I=(ln=l==null?void 0:l.$changes)==null?void 0:ln.exclusiveMaximum,j={minimum:Un(A)?A:void 0,exclusiveMinimum:Un(O)?O:void 0,maximum:Un(L)?L:void 0,exclusiveMaximum:Un(I)?I:void 0},{data:B,changes:Z,changesKeys:Ne,visible:pe}=em(q,j,Cn.valueRange),Ve=_n(S,Cn.valueLength),Qe=_n(S,Cn.valuePattern),kn=_n(E,Cn.multipleOf),U=_n(C,Cn.propertiesCount),le=_n(V,Cn.uniqueItems),Ze=_n(V,Cn.itemsCount),he=mo(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(D==null?void 0:D.allowedValues)&&d.jsx(yi,{shift:e,$changesKey:"enum",title:Ud,items:D.allowedValues,layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),h&&d.jsxs(d.Fragment,{children:[(de(S==null?void 0:S.minLength)||de(S==null?void 0:S.maxLength))&&d.jsx(un,{shift:e,$changesKeys:Ve,title:_a,items:{minLength:S==null?void 0:S.minLength,maxLength:S==null?void 0:S.maxLength},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes}),de(S==null?void 0:S.pattern)&&d.jsx(un,{shift:e,$changesKeys:Qe,title:Ma,items:{pattern:S==null?void 0:S.pattern},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]}),b&&d.jsxs(d.Fragment,{children:[pe&&d.jsx(un,{shift:e,$changesKeys:Ne,title:Ra,items:B,layoutMode:y,level:f,$nodeChange:he,$changes:Z}),de(E==null?void 0:E.multipleOf)&&d.jsx(un,{shift:e,$changesKeys:kn,title:qa,items:{multipleOf:E==null?void 0:E.multipleOf},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]}),v&&d.jsxs(d.Fragment,{children:[p&&d.jsx(un,{shift:e,$changesKeys:[],title:Yd,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:he}),g&&(C==null?void 0:C.allowedPropertyNames)&&d.jsx(yi,{shift:e,$changesKey:"propertyNames",title:Wd,items:C.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:he,$changes:c==null?void 0:c.$changes}),(de(C==null?void 0:C.minProperties)||de(C==null?void 0:C.maxProperties))&&d.jsx(un,{shift:e,$changesKeys:U,title:Ia,items:{minProperties:C==null?void 0:C.minProperties,maxProperties:C==null?void 0:C.maxProperties},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]}),T&&d.jsxs(d.Fragment,{children:[de(V==null?void 0:V.uniqueItems)&&d.jsx(un,{shift:e,$changesKeys:le,title:Oa,items:{uniqueItems:`${V.uniqueItems}`},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),(de(V==null?void 0:V.minItems)||de(V==null?void 0:V.maxItems))&&d.jsx(un,{shift:e,$changesKeys:Ze,title:Pa,items:{minItems:V==null?void 0:V.minItems,maxItems:V==null?void 0:V.maxItems},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]})]})};hs.__docgenInfo={description:"",methods:[],displayName:"Validations"};const bs=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,s=Fe(),l=e.meta,u=l,c=e.value,f=c,y=$d(),g=ge(),p=Mo(e),[h,b]=m.useState(!1),[T,v]=m.useState(0);m.useEffect(()=>{const A=e.children.filter(tt).length===0;(!zd(o)||e.expanded&&A)&&!o.isCycle?b(!0):b(e.expanded),v(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const D=!Xd(o),S=!Qd(o),E=Ro(o),C=E,V=as(),q=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(ps,{nodeId:o.id,nodeTitleData:Zd({node:o,nodeValue:c,nodeMeta:l,customizationOptions:V}),nodeTypeData:xa({node:o,nodeValue:c,customizationOptions:V}),isCircularRef:o.isCycle,readOnly:l==null?void 0:l.readOnly,writeOnly:l==null?void 0:l.writeOnly,deprecated:l==null?void 0:l.deprecated,isExpandable:p,expanded:e.expanded,sorted:T,isRoot:E,onToggleExpander:t,onToggleSort:a,layoutMode:g,level:s,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&h&&D&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:S&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(eu,{shift:C,state:e,$nodeChange:i}),d.jsx(hs,{shift:C,state:e,$nodeChange:i}),q&&d.jsx(gs,{extensions:q,$nodeChange:i})]})})]})};bs.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const Ss=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=ge();return d.jsx(d.Fragment,{children:n.map((s,l)=>tt(s)?d.jsxs("div",{children:[!e&&i&&s.first&&d.jsx(nu,{shift:!1,NodeType:Vo,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(yt,{state:s,$nodeChange:a},`prop-${l}`)]},`prop-${l}`):at(s)?d.jsx(dt,{state:s,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${l}`):null)})};Ss.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const yt=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,s=o.filter(Z=>!at(Z)),l=i,u=e.meta,c=Ro(a),f=Lt(i),y=_o(i),g=ru(i),p=Fe(),h=e.node.newDataLevel,b=!c&&h?p+1:p,T=Mo(e),[v,D]=m.useState(!1),[,S]=m.useState(0);m.useEffect(()=>{D(e.expanded),S(e.sorted)},[e.expanded,e.sorted]);const[,E]=m.useState(),C=Z=>{Z&&(e.setSelected(Z),E(e.selected))},[V,q]=m.useState(void 0),A=Z=>{if(Z){const Ne=ou(Z);q(Ne)}},O=t??(u==null?void 0:u.$nodeChange),L=ld(s),I=n==="parameters"&&c&&(f||y)&&!g,j=xa({node:a,nodeValue:i});j==null||delete j.combiner;const B=j?{nodeTypeData:j,nodeDepth:b+1,$nodeChange:O??L,$changes:l==null?void 0:l.$changes}:void 0;return d.jsx(Pe.Provider,{value:b,children:d.jsx(tu,{value:V,setValue:A,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(bs,{state:e,disableNestingHeader:I,onToggleExpander:Z=>au(e,D,Z),onToggleSort:()=>iu(e,S),$nodeChange:O}),T&&v&&d.jsx(Ss,{disableNestingHeader:I,items:o,onGlobalSelectNestedNode:C,$nodeChange:O,nestingIndicatorTitleData:B})]})})})};yt.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const gt=r=>d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(nm,{...r})}),nm=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Nn,layoutMode:a=yo,filters:i=[],overriddenKind:o,metaKeys:s,topLevelPropsMediaTypes:l}=r;Wr(e,s.diffsMetaKey,s.aggregatedDiffsMetaKey);const u=m.useMemo(()=>ic(e,s),[s,e]),c=m.useMemo(()=>new Ao(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return tt(f)&&(y=d.jsx(yt,{state:f,overriddenKind:o})),at(f)&&(y=d.jsx(dt,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(Ja.Provider,{value:l,children:d.jsx(dd.Provider,{value:i,children:d.jsx(wn.Provider,{value:t,children:d.jsx(qn.Provider,{value:a,children:d.jsx(rt.Provider,{value:s,children:d.jsx(Pe.Provider,{value:0,children:y})})})})})})};gt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const rm=" or null";function Rn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(er(r))return"";const n=r,t=(n==null?void 0:n.type)??Wn,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?rm:"";let s=String(t);return a&&(s+=`(${a})`),i&&(s+=`<${i}>`),s+=o,s}function Li(r){return r!=null}function vs(r){const e=Ln(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(Te.MIN_LENGTH),t.maxLength!==void 0&&n.push(Te.MAX_LENGTH),t.pattern!==void 0&&n.push(Te.PATTERN);const a=e;a.minimum!==void 0&&n.push(Te.MINIMUM),a.maximum!==void 0&&n.push(Te.MAXIMUM),Li(a.exclusiveMinimum)&&n.push(Te.EXCLUSIVE_MINIMUM),Li(a.exclusiveMaximum)&&n.push(Te.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(Te.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(Te.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(Te.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(Te.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(Te.MIN_ITEMS),o.maxItems!==void 0&&n.push(Te.MAX_ITEMS),n}function tm(r){return r!=null}function am(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const im="x-deprecated-reason";function om(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[im];return typeof e=="string"&&e.length>0?e:void 0}class Ds{resolveNodeVisibility(e,n){const t=e.value(),a=Ln(t),i=No(n),o=om(a),s=i&&!!(a!=null&&a.description),l=i&&!!o,u=i&&tm(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&vs(t).length>0,g=i&&am(a),p=u||c||f||y||g;return{showDescription:s,showDeprecationReasonRow:l,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:g,showContentSection:s||l||p,showAnyAdditionalInfoRow:p}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&Lo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const nr=new Ds;function Ba(r,e){return nr.resolveNodeVisibility(r,e)}function Ua(r,e){return nr.resolveListLastRowFlags(r,e)}function sm(r,e){return nr.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function ws(r){return nr.resolveIsExpandable(r)}function Ns(r,e){return nr.resolveInitiallyExpanded(r,e)}function Mn(r,e){return nr.resolveExpanderExpanded(r,e)}const Ts=" or null";function Es(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function lm(r,e){const n=Ln(r.value()),t=(n==null?void 0:n.type)??Wn,a=Es(r);return nt(t,a==null?void 0:a.type,e)??String(t)}function xs(r,e,n){if(e!=null&&e.brokenRef)return{kind:tn.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if(er(t))return{kind:tn.NO_DIFFS,text:""};const a=Es(r);if(!a)return{kind:tn.NO_DIFFS,text:Rn(t,e)};if(dm(a)){const c=Object.values(a).find(Boolean);return c?{kind:tn.WHOLE_DIFFS,text:um(t,a,n),diff:mm(c)}:{kind:tn.NO_DIFFS,text:Rn(t,e)}}const i=[],o=fm(t,a.type,n);o&&i.push(o);const s=ji(ks(t),a.format,n,As);s&&i.push(s);const l=ji(t==null?void 0:t.title,a.title,n,Cs);l&&i.push(l);const u=cm(t);return u&&i.push(u),i.length===0?{kind:tn.NO_DIFFS,text:Rn(t,e)}:{kind:tn.PARTIAL_DIFFS,segments:i}}function dm(r){const e=Ko.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function um(r,e,n){const t=[],a=nt((r==null?void 0:r.type)??Wn,e.type,n)??(r==null?void 0:r.type)??Wn;t.push(String(a));const i=Yt(ks(r),e.format,n,As);i&&t.push(i);const o=Yt(r==null?void 0:r.title,e.title,n,Cs);return o&&t.push(o),r!=null&&r.nullable&&t.push(Ts.trim()),t.join(" ")}function fm(r,e,n){const t=(r==null?void 0:r.type)??Wn,a=nt(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function ji(r,e,n,t){const a=Yt(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function Yt(r,e,n,t){const a=nt(r,e,n);if(a===void 0)return!e&&Ji(r)?t(r):void 0;if(Ji(a))return t(a)}function cm(r){if(!(er(r)||!(r!=null&&r.nullable)))return{text:Ts.trim()}}function ks(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function Ji(r){return!!r&&r.trim().length>0}function As(r){return`(${r})`}function Cs(r){return`<${r}>`}function mm(r){const{data:e}=r;return H(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow}}}:k(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Green}}}:x(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function ym(r){return r.diffs}function gm(r){return ym(r)[pn]??r.diffs[M]}function jn(r){return r.diffs}function Br(r){return jn(r).nestingIndicatorRowColorizingDiff}function pm(r){return jn(r).nodeChangesSummary}function hm(r){var e;return(e=_s(r))==null?void 0:e.required}function Vs(r){if(!(r!=null&&r.data))return;const e=r.data;return k(e)?{type:e.type,scope:e.scope,description:e.description,action:J.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:x(e)?{type:e.type,scope:e.scope,description:e.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:H(e)?{type:e.type,scope:e.scope,description:e.description,action:J.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function bm(r){return Vs(hm(r))}function _s(r){if(r.kind===Y.PROPERTY)return r.diffs}function Ms(r){const e=jn(r),n=_s(r),t={};for(const i of Yn){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=Vs(a)),t}function xn(r){return r.diffs}function Wt(r){return xn(r).default}function Rs(r){return xn(r).defaultRowColorizingDiff}function qs(r){return xn(r).enumDiff}function Is(r){return xn(r).enumValueDiffs}function Os(r){return xn(r).enumRowColorizingDiff}function Ps(r){return xn(r).examplesDiff}function Hs(r){return xn(r).examplesValueDiffs}function Ls(r){return xn(r).examplesRowColorizingDiff}function Ur(r,e){var n;return(n=jn(r).validationRowDiffs)==null?void 0:n[e]}function js(r,e){var n;return(n=jn(r).validationRowValueDiffs)==null?void 0:n[e]}function Ya(r,e){var n;return(n=jn(r).validationRowColorizingDiffs)==null?void 0:n[e]}function Sm(r){return jn(r).valueRangeCrawlDiffs}function Fi(r,e){if(Ur(r,e)||Ya(r,e))return!0;const n=js(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}const Js="<empty string>";function vm(r){return JSON.stringify(r).slice(1,-1)}function Bn(r){return typeof r=="string"?r===""?Js:vm(r):typeof r=="object"&&r!==null?JSON.stringify(r,null,2):JSON.stringify(r)}function Dm(r){return r===Js}function Ki(r,e,n){if(!e)return r===void 0?[]:[{text:Bn(r)}];const t=n===W,{data:a}=e;if(k(a))return t?[]:[{text:Bn(a.afterValue??r)}];if(x(a))return t?[{text:Bn(a.beforeValue??r)}]:[];if(H(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Bn(i)}]}return r===void 0?[]:[{text:Bn(r)}]}function Ce(r){return Bn(r)}function Wa(r,e,n){const t=n===W,{data:a}=e;return k(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):x(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Ce(o)})):[]:H(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):r.map(i=>({text:Ce(i)}))}function Fs(r,e,n){const t=n===W,a=new Set,i=[];for(let s=0;s<r.length;s++){const l=String(s),u=e==null?void 0:e[l],c=Ce(r[s]);if(!u){i.push({text:c});continue}if(a.has(l))continue;a.add(l);const{data:f}=u;if(k(f)){t||i.push({text:Ce(f.afterValue??r[s]),valueDiffKey:l});continue}if(x(f)){t&&i.push({text:Ce(f.beforeValue??r[s]),valueDiffKey:l});continue}H(f)&&i.push({text:Ce(t?f.beforeValue??r[s]:f.afterValue??r[s]),valueDiffKey:l})}for(const[s,l]of Object.entries(e??{}))!l||a.has(s)||x(l.data)&&t&&(i.push({text:Ce(l.data.beforeValue),valueDiffKey:s}),a.add(s));const o=s=>{for(let l=0;l<r.length;l++)if(Ce(r[l])===s)return l;return r.length};return i.sort((s,l)=>o(s.text)-o(l.text))}function rr(r,e,n,t){return n===void 0?t:$o(r,e,n)}function wm(r,e,n){if(e)return Object.keys(e).find(t=>zo(t,r)===n)}function Nm(r,e,n,t){const a=t===W,i=new Set,o=[];for(let l=0;l<e.length;l++){const u=wm(e,n,l),c=u?n==null?void 0:n[u]:void 0,f=Ce(e[l]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(k(y)){a||o.push({text:rr(r,u,y.afterValue??e[l],f),valueDiffKey:u});continue}if(x(y)){a&&o.push({text:rr(r,u,y.beforeValue??e[l],f),valueDiffKey:u});continue}H(y)&&o.push({text:a?rr(r,u,y.beforeValue??e[l],f):rr(r,u,y.afterValue??e[l],f),valueDiffKey:u})}for(const[l,u]of Object.entries(n??{}))!u||i.has(l)||x(u.data)&&a&&(o.push({text:rr(r,l,u.data.beforeValue,Ce(u.data.beforeValue)),valueDiffKey:l}),i.add(l));const s=(l,u)=>{if(l)return zo(l,e);for(let c=0;c<e.length;c++)if(Ce(e[c])===u)return c;return e.length};return o.sort((l,u)=>s(l.valueDiffKey,l.text)-s(u.valueDiffKey,u.text))}function Tm(r,e,n,t){return e?Wa(r,e,t):Fs(r,n,t)}function Em(r,e,n,t){return e?Wa(r,e,t):Fs(r,n,t)}function xm(r,e,n,t,a,i){return r===te.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?Mf(Gt(i.nodeValue),i.crawlDiffs,a,n,t):n?Wa(e,n,a):Nm(r,e,t,a)}function Ct(r,e){return e?r==null?void 0:r[e]:void 0}const km=new Ds;function Am(r){return r!=null}function Cm(r){return Object.keys(Ft).some(e=>!!Ur(r,e)||!!Ya(r,e))}class Vm{resolveNodeVisibility(e,n){const t=e.value(),a=Ln(t),i=km.resolveNodeVisibility(e,n),o=No(n),s=o&&(!!(a!=null&&a.description)||!!e.diffs.description),l=o&&(i.showEnumValuesRow||!!qs(e)||!!Is(e)||!!Os(e)),u=o&&(Am(a==null?void 0:a.default)||!!Wt(e)||!!Rs(e)),c=o&&(i.showExamplesRow||!!Ps(e)||!!Hs(e)||!!Ls(e)),f=o&&(vs(t).length>0||Cm(e)),y=u||c||l||f||i.showExtensionsRow,g=s||i.showDeprecationReasonRow||y;return{...i,showDescription:s,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:l,showValidationsSection:f,showContentSection:g,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Ua(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return sm(e,n)}}const _m=new Vm;function $a(r,e){return _m.resolveNodeVisibility(r,e)}function Ks(r,e){return r.isCycle?!1:ws(r)?e.hideUnchangedNodes?e.isRoot||r.kind===Y.ROOT?!0:Qo(r):e.level<e.expandedDepth:!0}function Gs(r,e,n){if(!n)return r;const t=e===W;return(n===J.add?t:!t)?Math.max(r-1,0):r}var Sn=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(Sn||{});const Mm={[Sn.JsonSchema]:va};function Rm(r){return Mm[r]??fr}const or=m.memo(r=>{const{title:e,layoutSide:n,usage:t=Sn.Default,lastInvisible:a=!1,diff:i,levelReductionAction:o}=r,{[ie]:s}=r,l=Da(n),u=m.useMemo(()=>Gs(l,n,o),[l,n,o]),c=m.useMemo(()=>Rm(t),[t]),f=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:b}=i,T=[];return n===W&&T.push(z.background(b.before.backgroundColor)),n===Q&&T.push(z.background(b.after.backgroundColor)),T},[i,n]),y=m.useMemo(()=>{const b=i==null?void 0:i.data;return b?k(b)?n===Q:x(b)?n===W:!0:!0},[i,n]),g=t===Sn.JsonSchema,p=typeof e=="function"?e(n):e,h=y&&p!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":s,className:["nesting-indicator-title-row-content flex w-full h-full",g?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(In,{level:u,lastInvisible:a&&y})}),h&&d.jsx(su,{title:p})]})});or.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},diffsSeverities:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const pt=m.memo(r=>{const e=ge(),{diffsSeverities:n,diffsSeverityPlacement:t=G.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>ur(a==null?void 0:a.causedAt),[a]);switch(e){case we:return d.jsx(Pn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Tn,{left:d.jsx(or,{...r,layoutSide:W}),right:d.jsx(or,{...r,layoutSide:Q})})});case ze:return d.jsx(On,{content:d.jsx(or,{...r,layoutSide:Q})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});pt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},diffsSeverities:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const za=m.createContext(null);function Bs(){const r=m.useContext(za);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const qm=new Set([Y.ALL_OF,Y.ANY_OF,Y.ONE_OF]);class Im{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>1,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return qm.has(e)}}const Us=new Im;function Om(r){return Us.resolveNodeVisibility(r)}function Xa(r){return Us.isCombinerKind(r)}function Qa(r){return r.kind===Y.ROOT}function zn(r){if(r.type!==se.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:Qa(r)?!0:e.every(n=>Xa(n.kind))}function Pm(r){return Xa(r)}function Hm(r){var e;return jr((e=Ln(r.value()))==null?void 0:e.type)}function Lm(r,e){return jr(lm(r,e))}function Ys(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!Pm(n)))return n}function Ws(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function $s(r,e){const n=[];let t=r;for(;t&&zn(t);){const a=t.nestedNodes(),i=Ws(t,a,e);if(!i)break;const o=Om(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:Ys(t)}),zn(i)){t=i;continue}break}return n}function jm(r,e){let n=r;for(;zn(n);){const t=n.nestedNodes(),a=Ws(n,t,e);if(!a)break;n=a}return n}function Jm(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set($s(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function zs(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!R(n)||Jr(n)?null:n}function Fm(r){if(r.type===se.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Xa(n.kind))?e:r.childrenNodes()}const $t={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}};function Xs(r){return r&&H(r.data)?{...r,styles:$t}:{data:{type:"annotation",action:J.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:$t,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}function ar(r){const e=r.data,n={type:e.type,causedAt:[]};return x(e)||H(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:k(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function Km(r){return ar({data:r,styles:$t,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe})}function zt(r,e){if(!(!r||typeof r!="object")){if(ba(r)){e.push(r);return}for(const n of Object.values(r))zt(n,e)}}function Gm(...r){let e;for(const n of r)n&&(!e||ke.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function Qs(r){const e=r.diffs[M];return!!e&&(k(e.data)||x(e.data))}function Bm(r){const e=r.nestedNodes();if(e.length===0)return;let n;for(const t of e){if(!ue(t))return;const a=t.diffs[M],i=a&&k(a.data)?J.add:a&&x(a.data)?J.remove:void 0;if(!i)return;if(!n){n=i;continue}if(n!==i)return}return n}function Um(r){if(ue(r)&&!Qs(r))return Bm(r)}function Ym(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function Zs(r){return ue(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>ue(e)&&Ym(e)):!1}function Wm(r){if(!(!ue(r)||!Zs(r)))return Xs(r.diffs[M])}function $m(r){if(!ue(r)||!Zs(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(ar(o));for(const o of r.nestedNodes()){if(!ue(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const s=[];for(const u of Object.values(o.diffs))zt(u,s);for(const u of s)e.push(ar(u));const l=Ht([...o.diffsSummary,...o.descendantDiffsSummary]);l&&e.push({type:l,causedAt:[]})}const n=r.diffs[M];n&&e.push(ar(n));const t=[];for(const o of Object.values(r.diffs))zt(o,t);for(const o of t)e.push(ar(o));const a=Ht([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=Gm(...e);if(!i){const o=Xs(n);return{[G.TitleRow]:Km(o.data)}}return{[G.TitleRow]:i}}function zm(r){if(ue(r)){const e=Br(r);if(e){const n=r.diffsSeverities[G.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[G.TitleRow]:n}:void 0}}}return{selectorRowDiff:Wm(r),diffsSeverities:$m(r)}}function Xm(r){if(!zn(r))return"";const e=Ys(r);return e?` (${e})`:""}function Qm(r,e){const n={title:Rn(zs(r),r.meta())+Xm(r),node:r,testId:`json-schema-combiner-option-${e}`};if(!ue(r))return n;const t=Qs(r);return{...n,diffs:r.diffs,...t?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}function Xt(r,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,a=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?r+1:r,0),afterLevel:Math.max(a?e+1:e,0)}}const el=r=>d.jsx(si,{...r});el.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const Za=m.createContext(null);function Zm(){const r=m.useContext(Za);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function nl(){return m.useContext(Za)}function ey(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({hideUnchangedNodes:r,revealedBlockIds:e,revealBlock:t}),[r,e,t])}const ny="#64748B",rl="#94A3B8";const yr=m.memo(r=>{const{text:e,color:n=ny,className:t}=r;return d.jsx("span",{className:["json-schema-type-value-text",t].filter(Boolean).join(" "),style:{color:n},children:e})});yr.__docgenInfo={description:`Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
whether to render it at all.`,methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const tl=m.memo(r=>{const{node:e}=r;return Hm(e)?null:d.jsx(yr,{text:Rn(e.value(),e.meta()),color:rl})});tl.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
own type is primitive (no children to introduce).`,methods:[],displayName:"JsonSchemaNestingIndicatorTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Qt=m.memo(r=>{const{text:e,diff:n,layoutSide:t,color:a}=r,i=To(n,t),o=Sd(n,t),s=[z.highlighter(i),z.background(o)].filter(Boolean).join(" ");return d.jsx(yr,{text:e,color:a,className:s||void 0})});Qt.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
the resolved className to the leaf. Kept separate from JsonSchemaTypeValueText so the leaf
stays diff-agnostic.`,methods:[],displayName:"JsonSchemaTypeValueDiffSegment",props:{text:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const ei=m.memo(r=>{const{display:e,layoutSide:n,color:t}=r;return e.kind===tn.NO_DIFFS?d.jsx(yr,{text:e.text,color:t}):e.kind===tn.WHOLE_DIFFS?d.jsx(Qt,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center gap-1",children:e.segments.map((a,i)=>d.jsx(Qt,{text:a.text,diff:a.diff,layoutSide:n,color:t},`${a.text}-${i}`))})});ei.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
SubheaderValue/CommaSeparatedListWithDiffs (see JsonSchemaTitleSubheader.tsx note). Shared
by both with-diffs orchestrators (title row and nesting-indicator row).`,methods:[],displayName:"JsonSchemaTypeValueSideDisplay",props:{display:{required:!0,tsType:{name:"union",raw:`| {
  readonly kind: typeof SideListDisplayKinds.NO_DIFFS
  readonly text: string
}
| {
  readonly kind: typeof SideListDisplayKinds.WHOLE_DIFFS
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}
| {
  readonly kind: typeof SideListDisplayKinds.PARTIAL_DIFFS
  readonly segments: readonly ListSideSegment[]
}`,elements:[{name:"signature",type:"object",raw:`{
  readonly kind: typeof SideListDisplayKinds.NO_DIFFS
  readonly text: string
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.NO_DIFFS",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  readonly kind: typeof SideListDisplayKinds.WHOLE_DIFFS
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.WHOLE_DIFFS",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"diff",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  readonly kind: typeof SideListDisplayKinds.PARTIAL_DIFFS
  readonly segments: readonly ListSideSegment[]
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const al=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r;if(Lm(e,t))return null;const a=xs(e,n,t);return d.jsx(ei,{display:a,layoutSide:t,color:rl})});al.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
resolved type is primitive - see plain sibling JsonSchemaNestingIndicatorTypeValue.`,methods:[],displayName:"JsonSchemaNestingIndicatorTypeValueWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const il=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));il.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function Gi(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Or=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[ie]:o}=r,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(ud,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(it,{text:Gi(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":Gi(n),onClick:s,children:d.jsx(il,{})})})})]})});Or.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const ol=m.memo(r=>{const e=ge(),n=Fe();switch(e){case we:return d.jsx(Tn,{left:d.jsx(Or,{...r,layoutSide:"before",level:n}),right:d.jsx(Or,{...r,layoutSide:"after",level:n})});case ze:return d.jsx(On,{content:d.jsx(Or,{...r,layoutSide:"after",level:n})});default:return null}});ol.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const ni=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=Zm(),i=ko(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:s}=m.useMemo(()=>Kf(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:s.map((l,u)=>{const c=u===s.length-1;return l.kind==="placeholder"?t.has(l.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(l.sourceIndex,l.sourceIndex+l.blockSize).map((f,y)=>d.jsx(Xn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===l.blockSize-1},f.id))},l.unchangedBlockId):d.jsx(ol,{unchangedBlockId:l.unchangedBlockId,count:l.blockSize,onReveal:a},l.unchangedBlockId):d.jsx(Xn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:l.node,isLastInList:c},l.node.id)})})};ni.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const Zt=5;function ry(r){return ga.trim(r.split(`
`)).length>Zt}function ty(r,e){const n=ga.trim(r.split(`
`));return n.length<=Zt||e?r:n.slice(0,Zt).join(`
`)}const ay="markdown-text-row__json-schema-description",iy="markdown-text-row__json-schema-expander",oy=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function sy(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===W;return k(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:x(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:H(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function ly(r){switch(r){case F.body1:return"text-value-body1";case F.h1:case F.h2:case F.h3:case F.h4:case F.h5:case F.h6:return"text-value-body2";case F.body2:default:return"text-value-body2"}}function dy(r){switch(r){case F.h1:return"text-value-expander--h1";case F.h2:return"text-value-expander--h2";case F.h3:return"text-value-expander--h3";case F.h4:return"text-value-expander--h4";case F.h5:return"text-value-expander--h5";case F.h6:return"text-value-expander--h6";case F.body1:return"text-value-expander--body1";case F.body2:default:return"text-value-expander--body2"}}function uy(r,e){return r===Ie.JsonSchemaDescription?{markdownClassName:ay,expanderClassName:iy}:{markdownClassName:["text-slate-700",ly(e)].join(" "),expanderClassName:`text-value-expander ${dy(e)}`.trim()}}const sl=m.memo(r=>{const{value:e,variant:n=F.body2,usage:t,layoutSide:a,diff:i}=r,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>sy(e,i,a),[i,a,e]),c=m.useMemo(()=>ty(l,o),[o,l]),f=m.useMemo(()=>ry(l),[l]),y=m.useMemo(()=>uy(t,n),[t,n]),g=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const b=a===W?i.styles.before:i.styles.after,T=[];return b.textHighlighterColor&&T.push(z.highlighter(b.textHighlighterColor)),T},[i,a]),p=m.useMemo(()=>["markdown",y.markdownClassName,...g].filter(Boolean).join(" "),[g,y.markdownClassName]),h=m.useCallback(()=>{s(b=>!b)},[]);return u||!c?null:d.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[d.jsx(lu,{className:p,remarkPlugins:[du],children:c}),d.jsx(oy,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});sl.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const fy={[Ie.DdlApiProperty]:vd,[Ie.JsonSchemaDescription]:va},cy={[Ie.DdlApiProperty]:["min-h-[26px]"]};function my(r){const e=fy[r]??fr,n=cy[r]??[];return[e,...n].join(" ")}function yy(r,e,n){return n===Ie.DdlApiProperty?wd(r,e):r!=null&&r.data?(e===W?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Pr=m.memo(r=>{const{value:e,variant:n=F.body2,layoutSide:t,usage:a=Ie.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[ie]:s}=r,l=Da(t),u=a===Ie.DdlApiProperty,c=u||a===Ie.JsonSchemaDescription,f=m.useMemo(()=>yy(o,t,a),[o,t,a]),y=a===Ie.JsonSchemaDescription&&l===0,g=c&&l>0&&(!i||f),p=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:T}=o,v=[];return t===W&&v.push(z.background(T.before.backgroundColor)),t===Q&&v.push(z.background(T.after.backgroundColor)),v},[o,t]),h=m.useMemo(()=>my(a),[a]),b=d.jsx(sl,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===Ie.JsonSchemaDescription?"items-stretch":"",h,...p].filter(Boolean).join(" "),children:[y&&d.jsx(Dd,{}),g&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):a===Ie.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});Pr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ea=m.memo(r=>{const e=ge(),{diffsSeverities:n,diffsSeverityPlacement:t=G.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>ur(a==null?void 0:a.causedAt),[a]);switch(e){case we:return d.jsx(Pn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Tn,{left:d.jsx(Pr,{...r,layoutSide:W}),right:d.jsx(Pr,{...r,layoutSide:Q})})});case ze:return d.jsx(On,{content:d.jsx(Pr,{...r,layoutSide:Q})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ea.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function gy(r){return r?$e({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const Vn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Te.UNIQUE_ITEMS};function Vt(r,e,n,t){const a=$e({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function py(r){const e=gy(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function hy(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=Vt(n.minLength,n.maxLength);o.length&&e.push({key:Vn.VALUE_LENGTH,label:_a,values:o}),n.pattern!==void 0&&e.push({key:Vn.VALUE_PATTERN,label:Ma,values:[String(n.pattern)]});const s=py(t);s.length&&e.push({key:Vn.VALUE_RANGE,label:Ra,values:s}),t.multipleOf!==void 0&&e.push({key:Vn.VALUE_MULTIPLE_OF,label:qa,values:[String(t.multipleOf)]});const l=Vt(a.minProperties,a.maxProperties);l.length&&e.push({key:Vn.PROPERTIES_COUNT,label:Ia,values:l}),i.uniqueItems!==void 0&&e.push({key:Vn.UNIQUE_ITEMS,label:Oa,values:[String(i.uniqueItems)]});const u=Vt(i.minItems,i.maxItems);return u.length&&e.push({key:Vn.ITEMS_COUNT,label:Pa,values:u}),e}const ll=r=>{const{extensions:e}=r,t=Fe()+1;return d.jsx(Pe.Provider,{value:t,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(pt,{title:"Extensions",usage:Sn.JsonSchema,lastInvisible:!0}),d.jsx(mr,{source:e,initialLevel:t})]})})};ll.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""}}};const ir=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,a)=>d.jsx(Nd,{isVisible:!0,value:t.text,usage:Td.JsonSchemaValidation,textHighlighterColor:To(t.diff,e),borderShadowColor:Ed(t.diff,e),isFontMuted:xd(t.diff,e),isEmptyStringPlaceholder:Dm(t.text)},`${t.text}-${a}`))}):null});ir.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Bi={valueLength:_a,valuePattern:Ma,valueRange:Ra,valueMultipleOf:qa,propertiesCount:Ia,itemsCount:Pa,uniqueItems:Oa};function by(r){return ue(r)&&(r.kind===Y.PROPERTY||r.kind===Y.ROOT)}const ri=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Ge(),i=n??e.value(),o=Ln(i),s=by(e)?e:void 0,l=ue(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?$a(s,a):Ba(n!==void 0?{value:()=>n}:e,a),[a,n,e,s]),c=m.useMemo(()=>s?qs(s):void 0,[s]),f=m.useMemo(()=>s?Is(s):void 0,[s]),y=m.useMemo(()=>s?Os(s):void 0,[s]),g=m.useMemo(()=>s?Ps(s):void 0,[s]),p=m.useMemo(()=>s?Hs(s):void 0,[s]),h=m.useMemo(()=>s?Ls(s):void 0,[s]),b=m.useMemo(()=>s?Wt(s):void 0,[s]),T=m.useMemo(()=>s?Rs(s):void 0,[s]),v=cr(e,ue),D=m.useMemo(()=>ae(v,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[v]),S=m.useMemo(()=>{const A=hy(o);if(!l)return A;const O=new Set(A.map(I=>I.key)),L=Object.keys(Bi).filter(I=>!O.has(I)).filter(I=>Fi(l,I)).map(I=>({key:I,label:Bi[I],values:[]}));return[...A,...L]},[l,o]),E=m.useCallback(A=>{const O=Tm((o==null?void 0:o.enum)??[],c,f,A);return O.length===0?d.jsx(d.Fragment,{}):d.jsx(ir,{layoutSide:A,sideItems:O.map(({text:L,valueDiffKey:I})=>({text:L,diff:Ct(f,I)}))})},[c,f,o==null?void 0:o.enum]),C=m.useCallback(A=>{const O=Em((o==null?void 0:o.examples)??[],g,p,A);return O.length===0?d.jsx(d.Fragment,{}):d.jsx(ir,{layoutSide:A,sideItems:O.map(({text:L,valueDiffKey:I})=>({text:L,diff:Ct(p,I)}))})},[g,p,o==null?void 0:o.examples]),V=m.useCallback(A=>{const O=o==null?void 0:o.default,L=s?Ki(O,Wt(s),A):Ki(O,void 0,A);return L.length===0?d.jsx(d.Fragment,{}):d.jsx(ir,{layoutSide:A,sideItems:L.map(({text:I})=>({text:I,diff:b}))})},[b,s,i]),q=m.useCallback((A,O)=>L=>{const I=l?Ur(l,A):void 0,j=l?js(l,A):void 0,B=xm(A,O,I,j,L,A===te.VALUE_RANGE&&l?{nodeValue:i,crawlDiffs:Sm(l)??{}}:void 0);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(ir,{layoutSide:L,sideItems:B.map(({text:Z,valueDiffKey:Ne})=>({text:Z,diff:Ct(j,Ne)}))})},[l,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(ea,{usage:Ie.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||D.diff)&&d.jsx(ea,{usage:Ie.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...D}),u.showDefaultRow&&d.jsx(br,{label:"Default",usage:Sr.JsonSchemaValidation,subheader:V,colorizingDiff:T,diffsSeverities:b||T?v==null?void 0:v.nodeDiffsSeverities:void 0}),u.showExamplesRow&&d.jsx(br,{label:"Examples",usage:Sr.JsonSchemaValidation,subheader:C,diff:g,colorizingDiff:h,diffsSeverities:g||p||h?v==null?void 0:v.nodeDiffsSeverities:void 0}),u.showEnumValuesRow&&d.jsx(br,{label:"Allowed values",usage:Sr.JsonSchemaValidation,subheader:E,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?v==null?void 0:v.nodeDiffsSeverities:void 0,...Ua(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showValidationsSection&&S.map(A=>{const O=A.key,L=l?Ur(l,O):void 0,I=l?Ya(l,O):void 0;return d.jsx(br,{label:A.label,usage:Sr.JsonSchemaValidation,subheader:q(O,A.values),diff:L,colorizingDiff:I,diffsSeverities:l&&Fi(l,O)?v==null?void 0:v.nodeDiffsSeverities:void 0},A.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(ll,{extensions:o.extensions})]})};ri.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Sy(r){const e=Ms(r),n={};for(const t of Yn){const a=e[t];a&&(n[t]=a)}return n}function vy(r,e){var l;const n=!!r.diffs[M],t=Ms(r),a=Sy(r),i=t.required,o=i?{...a,required:i}:a,s=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:s,requiredChanged:!n&&!!i,$nodeChange:(l=r.diffs[M])==null?void 0:l.data,$metaChanges:o}}const dl=m.memo(r=>{const{value:e,meta:n}=r;return d.jsx(yr,{text:Rn(e,n)})});dl.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""}}};const ul=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r,a=xs(e,n,t);return d.jsx(ei,{display:a,layoutSide:t})});ul.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
sibling JsonSchemaTitleRowTypeValue).`,methods:[],displayName:"JsonSchemaTitleRowTypeValueWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fl=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(dl,{value:e,meta:n}),t&&d.jsx(it,{text:Aa,children:d.jsx(Ca,{})}),d.jsx(Va,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},cl=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0}=r;ge();const o=vy(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(ul,{node:n,meta:e,layoutSide:a}),t&&d.jsx(it,{text:Aa,children:d.jsx(Ca,{})}),d.jsx(Va,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...o})]})};fl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},isCycle:{required:!0,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""}}};cl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},isCycle:{required:!0,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""}}};const Dy="Type: ";function wy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return Qa(e)?{variant:"text",text:t??Dy}:a===Y.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:fd}:{variant:"badge",text:"additional property",badgeKind:hr}:a===Y.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:hr}:a===Y.ITEMS?{variant:"badge",text:"item",badgeKind:hr}:a===Y.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:hr}:a===Y.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function Ny(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===Y.ADDITIONAL_PROPERTIES&&n===!1}function Ty(r,e,n,t,a){const i=r===!0&&!de(e)||!!e&&(e.action===J.remove&&t||e.action===J.add&&a||e.action===J.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const ml=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=ge(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=go(a),{originSide:s,changedSide:l}=cd(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!Ty(e,n,o,s,l)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};ml.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const yl="text-xs text-black font-Inter-Medium",gl=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(bo,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${yl}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},pl=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(bo,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${yl}`,children:[e.text,d.jsx(ml,{required:n,requiredDiff:t,layoutSide:a})]})}};gl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};pl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Ey(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=r,u=as(),c=e.meta(),f=Ln(t??n.value()),y=n.meta(),g=m.useMemo(()=>Ua(i,a),[a,i]),p=m.useMemo(()=>wy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),h=m.useMemo(()=>T=>{const v=Eo(l);return(v?xo(v,T):kd(l,T))?s?d.jsx(pl,{display:p,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:T}):d.jsx(gl,{display:p,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,p,l,s]),b=m.useMemo(()=>!Ny(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:g,titleContent:h,showTypeSubheader:b}}const ti=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[ie]:g}=r,{displayValueResolved:p,displayMeta:h,listLastRowFlags:b,titleContent:T,showTypeSubheader:v}=Ey({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(ce,{...b,"data-precededby":g,titleContent:T,expandable:o,expanded:s,isRoot:Qa(e),onClickExpander:o?l:void 0,variant:F.body2,subheader:D=>y({layoutSide:D,displayValueResolved:p,displayMeta:h,displayNode:n,showTypeSubheader:v}),usage:et.JsonSchemaProperty,...u})};ti.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`}]},description:""},displayNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},contentVisibility:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  readonly showDescription: boolean
  readonly showDeprecationReasonRow: boolean
  readonly deprecationReason?: string
  readonly showDefaultRow: boolean
  readonly showExamplesRow: boolean
  readonly showEnumValuesRow: boolean
  readonly showValidationsSection: boolean
  readonly showExtensionsRow: boolean
  readonly showContentSection: boolean
  readonly showAnyAdditionalInfoRow: boolean
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},titleRowDiffProps:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`WithPrecededByProps & WithDdlListLastRowProps & {
  value?: string // Document Mode
  titleContent?: ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)
  expandable: boolean
  expanded?: boolean
  isRoot?: boolean
  onClickExpander?: () => void
  variant: TextValueVariant
  enableHeader?: boolean
  enableHeaderValue?: boolean
  subheader?: (layoutSide: LayoutSide) => ReactElement
  usage?: TitleRowUsage
  highlightingMode?: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
  hideLevelIndicatorWhenSideEmpty?: boolean
}`,elements:[{name:"signature",type:"object",raw:`{
  [ATTRIBUTE_PRECEDED_BY]?: PrecededBy
}`,signature:{properties:[{key:"data-precededby",value:{name:"PrecededBy",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [ATTRIBUTE_DDL_LIST_LAST_ROW]?: boolean
}`,signature:{properties:[{key:"data-ddl-list-last-row",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  value?: string // Document Mode
  titleContent?: ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)
  expandable: boolean
  expanded?: boolean
  isRoot?: boolean
  onClickExpander?: () => void
  variant: TextValueVariant
  enableHeader?: boolean
  enableHeaderValue?: boolean
  subheader?: (layoutSide: LayoutSide) => ReactElement
  usage?: TitleRowUsage
  highlightingMode?: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
  hideLevelIndicatorWhenSideEmpty?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"titleContent",value:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}],required:!1}},{key:"expandable",value:{name:"boolean",required:!0}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"onClickExpander",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"TextValueVariant",required:!0}},{key:"enableHeader",value:{name:"boolean",required:!1}},{key:"enableHeaderValue",value:{name:"boolean",required:!1}},{key:"subheader",value:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}},required:!1}},{key:"usage",value:{name:"TitleRowUsage",required:!1}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!1}},{key:"diff",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}},{key:"descendantDiffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}],raw:"Record<NodeId, ChangedPropertyMetaData>"}],raw:"Partial<Record<NodeId, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSeverities",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},withRequiredDiffIndicator:{required:!1,tsType:{name:"boolean"},description:""},renderSubheader:{required:!0,tsType:{name:"signature",type:"function",raw:`(context: {
  layoutSide: LayoutSide
  displayValueResolved: JsonSchemaTreeNodeValue | null | undefined
  displayMeta: ReturnType<JsonSchemaViewerTreeNode["meta"]>
  displayNode: JsonSchemaViewerTreeNode
  showTypeSubheader: boolean
}) => ReactElement`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  layoutSide: LayoutSide
  displayValueResolved: JsonSchemaTreeNodeValue | null | undefined
  displayMeta: ReturnType<JsonSchemaViewerTreeNode["meta"]>
  displayNode: JsonSchemaViewerTreeNode
  showTypeSubheader: boolean
}`,signature:{properties:[{key:"layoutSide",value:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}],required:!0}},{key:"displayValueResolved",value:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}],required:!0}},{key:"displayMeta",value:{name:"ReturnType",elements:[{name:'union["meta"]',raw:'JsonSchemaViewerTreeNode["meta"]'}],raw:'ReturnType<JsonSchemaViewerTreeNode["meta"]>',required:!0}},{key:"displayNode",value:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const ai=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,...u}=r;return d.jsx(ti,{...u,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:c,displayValueResolved:f,displayMeta:y,displayNode:g,showTypeSubheader:p})=>d.jsx(fl,{value:f,meta:y,isCycle:g.isCycle,layoutSide:c,showTypeLabel:p})})};ai.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},displayNode:{required:!1,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null",elements:[{name:"unknown"},{name:"null"}]},description:""},contentVisibility:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  readonly showDescription: boolean
  readonly showDeprecationReasonRow: boolean
  readonly deprecationReason?: string
  readonly showDefaultRow: boolean
  readonly showExamplesRow: boolean
  readonly showEnumValuesRow: boolean
  readonly showValidationsSection: boolean
  readonly showExtensionsRow: boolean
  readonly showContentSection: boolean
  readonly showAnyAdditionalInfoRow: boolean
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function xy(r){return ae(on(r),{resolveDiff:()=>gm(r)})}const ii=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,...c}=r,f=m.useMemo(()=>u??xy(n),[n,u]),y=m.useMemo(()=>bm(e),[e]),g=ge(),p=m.useMemo(()=>pm(n),[n]),h=!s&&o&&g===we&&!!p&&p.size>0;return d.jsx(ti,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:f,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:b,displayMeta:T,displayNode:v,showTypeSubheader:D})=>xo(Eo(f.diff),b)?d.jsxs(d.Fragment,{children:[d.jsx(cl,{meta:T,node:n,isCycle:v.isCycle,layoutSide:b,showTypeLabel:D}),h&&d.jsx(ka,{values:Array.from(p)})]}):d.jsx(d.Fragment,{})})};ii.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},displayNode:{required:!1,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},contentVisibility:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  readonly showDescription: boolean
  readonly showDeprecationReasonRow: boolean
  readonly deprecationReason?: string
  readonly showDefaultRow: boolean
  readonly showExamplesRow: boolean
  readonly showEnumValuesRow: boolean
  readonly showValidationsSection: boolean
  readonly showExtensionsRow: boolean
  readonly showContentSection: boolean
  readonly showAnyAdditionalInfoRow: boolean
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},titleRowDiffProps:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`WithPrecededByProps & WithDdlListLastRowProps & {
  value?: string // Document Mode
  titleContent?: ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)
  expandable: boolean
  expanded?: boolean
  isRoot?: boolean
  onClickExpander?: () => void
  variant: TextValueVariant
  enableHeader?: boolean
  enableHeaderValue?: boolean
  subheader?: (layoutSide: LayoutSide) => ReactElement
  usage?: TitleRowUsage
  highlightingMode?: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
  hideLevelIndicatorWhenSideEmpty?: boolean
}`,elements:[{name:"signature",type:"object",raw:`{
  [ATTRIBUTE_PRECEDED_BY]?: PrecededBy
}`,signature:{properties:[{key:"data-precededby",value:{name:"PrecededBy",required:!1}}]}},{name:"signature",type:"object",raw:`{
  [ATTRIBUTE_DDL_LIST_LAST_ROW]?: boolean
}`,signature:{properties:[{key:"data-ddl-list-last-row",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  value?: string // Document Mode
  titleContent?: ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)
  expandable: boolean
  expanded?: boolean
  isRoot?: boolean
  onClickExpander?: () => void
  variant: TextValueVariant
  enableHeader?: boolean
  enableHeaderValue?: boolean
  subheader?: (layoutSide: LayoutSide) => ReactElement
  usage?: TitleRowUsage
  highlightingMode?: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  // diffs
  diff?: ChangedPropertyMetaData
  descendantDiffs?: NodeDescendantDiffs
  diffsSeverities?: NodeDiffsSeverities
  hideLevelIndicatorWhenSideEmpty?: boolean
}`,signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"titleContent",value:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}],required:!1}},{key:"expandable",value:{name:"boolean",required:!0}},{key:"expanded",value:{name:"boolean",required:!1}},{key:"isRoot",value:{name:"boolean",required:!1}},{key:"onClickExpander",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"TextValueVariant",required:!0}},{key:"enableHeader",value:{name:"boolean",required:!1}},{key:"enableHeaderValue",value:{name:"boolean",required:!1}},{key:"subheader",value:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}},required:!1}},{key:"usage",value:{name:"TitleRowUsage",required:!1}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!1}},{key:"diff",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}},{key:"descendantDiffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}],raw:"Record<NodeId, ChangedPropertyMetaData>"}],raw:"Partial<Record<NodeId, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSeverities",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""}}};function ky(r){return ue(r)&&r.kind===Y.PROPERTY}const oi=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Ge(),i=Fe(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Bs(),u=ky(e)?e:void 0,c=ue(e)?e:void 0,f=nl(),y=m.useMemo(()=>u?$a(u,a):Ba(e,a),[a,e,u]),g=m.useMemo(()=>e.childrenNodes(),[e,l]),p=m.useMemo(()=>ws(e),[e,l]),h=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Ks(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===Y.ROOT}):Ns(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),b=m.useMemo(()=>Mn(e,h),[h,e,l]),[T,v]=m.useState(b);m.useEffect(()=>{v(I=>Mn(e,I))},[e,l]);const D=m.useCallback(()=>{v(I=>{const j=!I;return j&&s(e),Mn(e,j)})},[s,e]),S=!p||T,E=m.useCallback(I=>c?d.jsx(al,{node:c,meta:c.meta(),layoutSide:I}):d.jsx(tl,{node:e}),[e,c]),C=m.useMemo(()=>c?Br(c):void 0,[c]),V=Sa(),q=(V==null?void 0:V.beforeLevel)??i,A=(V==null?void 0:V.afterLevel)??i,{beforeLevel:O,afterLevel:L}=m.useMemo(()=>Xt(q,A,C),[q,A,C]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(ii,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:p,expanded:T,onClickExpander:D}):d.jsx(ai,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:p,expanded:T,onClickExpander:D}),S&&d.jsxs(d.Fragment,{children:[d.jsx(ri,{node:e,isLastInList:n&&g.length===0}),g.length>0&&d.jsx(Pe.Provider,{value:i+1,children:d.jsxs($n,{beforeLevel:O,afterLevel:L,children:[d.jsx(pt,{title:E,usage:Sn.JsonSchema,lastInvisible:!0,diff:C,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:G.NestingIndicatorRow}),c&&f?d.jsx(ni,{children:g}):g.map((I,j)=>c?d.jsx(Xn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:I,isLastInList:j===g.length-1},I.id):d.jsx(St,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:I,isLastInList:j===g.length-1},I.id))]})})]})]})};oi.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const hl=r=>d.jsx(oi,{...r});hl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""}}};const Xn=r=>{const{node:e}=r;return zn(e)?d.jsx(el,{...r}):d.jsx(hl,{...r})};Xn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ui=new Set;function ht(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=Q}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=Ay({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(l)return null;const u=s.join(" ");return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:c=>{c.preventDefault(),c.stopPropagation(),t(o)},children:o.title},o.node.id)})})}function Ay(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[M];if(s){const{styles:l}=s;switch(a){case W:s.inherited||i.push(z.borderShadow(l.before.borderShadowColor)),o=s.data.action===J.add;break;case Q:s.inherited||i.push(z.borderShadow(l.after.borderShadowColor)),o=s.data.action===J.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??Ui,u=t??Ui,c=new Set([...l,...u]),f=Ht(c);i.push(f?z.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}ht.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends object ? keyof V : never)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
| (V extends object ? keyof V : never)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
| (V extends object ? keyof V : never)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var bt=(r=>(r.Primary="primary",r.Secondary="secondary",r))(bt||{});function Cy(r,e){if(!r)return"";const n=e===W?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return z.background(n)}const Vy=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i,levelReductionAction:o}=r,s=Da(i),l=m.useMemo(()=>Gs(s,i,o),[s,i,o]),u=m.useMemo(()=>Cy(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${va} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(ht,{options:e,selectedOption:n,onSelectOption:t,variant:bt.Secondary,layoutSide:i})})]})}),_t=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(or,{title:e,usage:Sn.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t,levelReductionAction:r.levelReductionAction}),n&&d.jsx(Vy,{...r})]})}),bl=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=ge(),i=m.useMemo(()=>t==null?void 0:t[G.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>ur(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case we:return d.jsx(Pn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Tn,{left:d.jsx(_t,{...r,layoutSide:W}),right:d.jsx(_t,{...r,layoutSide:Q})})});case ze:return d.jsx(On,{content:d.jsx(_t,{...r,layoutSide:Q})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});bl.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends object ? keyof V : never)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>"}],raw:"Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}},{key:"descendantDiffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}}]}}],raw:"SelectorOption<N>[]"},description:""},selectedOption:{required:!0,tsType:{name:"union",raw:"SelectorOption<N> | null",elements:[{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends object ? keyof V : never)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>"}],raw:"Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}},{key:"descendantDiffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}}]}},{name:"null"}]},description:""},onSelectOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SelectorOption<N>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  title: string
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
| (V extends object ? keyof V : never)`,elements:[{name:"NODE_LEVEL_DIFF_KEY"},{name:"unknown"}]},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>"}],raw:"Partial<Record<ChangedPropertyKey<V>, ChangedPropertyMetaData>>",required:!1}},{key:"diffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}},{key:"descendantDiffsSummary",value:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>",required:!1}}]}},name:"option"}],return:{name:"void"}}},description:""},selectorRowDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},diffsSeverities:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};function _y(r){return ue(r)&&r.kind===Y.PROPERTY}const si=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Ge(),i=Fe(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Bs(),u=ue(e)?e:void 0,c=nl(),f=e.nestedNodes(),[y,g]=m.useState(()=>new Map),p=m.useMemo(()=>$s(e,y),[e,y]),h=m.useMemo(()=>jm(e,y),[e,y]),b=m.useMemo(()=>zs(h),[h]),T=ue(h)?h:void 0,v=_y(h)?h:void 0,D=m.useMemo(()=>v?$a(v,a):Ba({value:()=>b},a),[b,v,a]),S=m.useMemo(()=>Fm(h),[h,l]),E=m.useMemo(()=>S.length>0,[S.length]),C=m.useMemo(()=>e.isCycle||S.length===0?!1:T&&(c!=null&&c.hideUnchangedNodes)?Ks(T,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):Ns(h,{expandedDepth:o,level:i}),[e.isCycle,h,T,c==null?void 0:c.hideUnchangedNodes,o,S.length,i]),V=m.useMemo(()=>Mn(h,C),[h,C,l]),[q,A]=m.useState(V);m.useEffect(()=>{A(Mn(h,C))},[h.id,h,C]),m.useEffect(()=>{A(X=>Mn(h,X))},[h,l]);const O=m.useCallback(()=>{A(X=>{const fe=!X;return fe&&s(h),Mn(h,fe)})},[h,s]),L=m.useMemo(()=>Rn(b,h.meta()),[h,b]),I=m.useMemo(()=>T?Br(T):void 0,[T]),j=Sa(),B=(j==null?void 0:j.beforeLevel)??i,Z=(j==null?void 0:j.afterLevel)??i,Ne=m.useMemo(()=>u?Br(u):void 0,[u]),{beforeLevel:pe,afterLevel:Ve}=m.useMemo(()=>Xt(B,Z,Ne),[B,Z,Ne]),{beforeLevel:Qe,afterLevel:kn}=m.useMemo(()=>Xt(pe,Ve,I),[pe,Ve,I]),U=m.useCallback((X,fe)=>{g(je=>Jm(e,je,X.id,fe.node.id))},[e]);if(f.length===0)return null;const le=q&&S.length>0,Ze=!!(u&&c),he=u?Xn:St;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&T?d.jsx(ii,{"data-precededby":t,ownerNode:u,displayNode:T,displayValue:b,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!E,expandable:E,expanded:q,onClickExpander:O}):d.jsx(ai,{"data-precededby":t,ownerNode:e,displayNode:h,displayValue:b,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!E,expandable:E,expanded:q,onClickExpander:O}),d.jsx(ri,{node:h,displayValue:b,isLastInList:n&&!E&&p.every(X=>!X.showSelector)}),d.jsx(Pe.Provider,{value:i+1,children:d.jsxs($n,{beforeLevel:pe,afterLevel:Ve,children:[p.map(X=>{const fe=X.nestedNodes.map((ln,Cl)=>Qm(ln,Cl)),je=fe.find(ln=>ln.node.id===X.selectedNestedNode.id)??fe[0]??null,An=zm(X.combinerNode),Jn=Um(X.combinerNode);return d.jsx(bl,{combinerKindLabel:X.combinerKindLabel,showSelector:X.showSelector,options:fe,selectedOption:je,onSelectOption:ln=>U(X.combinerNode,ln),selectorRowDiff:An.selectorRowDiff,diffsSeverities:An.diffsSeverities,levelReductionAction:Jn},X.combinerNode.id)}),le&&d.jsxs($n,{beforeLevel:Qe,afterLevel:kn,children:[d.jsx(pt,{title:L,usage:Sn.JsonSchema,lastInvisible:!0,diff:I,diffsSeverities:T==null?void 0:T.diffsSeverities,diffsSeverityPlacement:G.NestingIndicatorRow}),Ze?d.jsx(ni,{children:S}):S.map((X,fe)=>d.jsx(he,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:X,isLastInList:fe===S.length-1},X.id))]})]})})]})};si.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  JsonSchemaTreeNodeStoredValue | null,
  K,
  JsonSchemaTreeNodeMeta,
  JsonSchemaTreeNodeStoredValue | null
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const St=r=>{const{node:e}=r;return zn(e)?d.jsx(si,{...r}):d.jsx(oi,{...r})};St.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const My=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(Ry,{...r})})),Ry=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Nn,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,s=m.useMemo(()=>Xe(a),[a]),l=m.useMemo(()=>new jo({source:e,materializeDepth:n,logger:s}),[e,n,s]),u=m.useMemo(()=>l.build(),[l]),[c,f]=m.useReducer(h=>h+1,0),y=m.useCallback(h=>{l.materializeChildren(h),f()},[l]),g=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const p=u.root;return p?d.jsx(za.Provider,{value:g,children:d.jsx(ut.Provider,{value:o,children:d.jsx(wn.Provider,{value:t,children:d.jsx(qn.Provider,{value:ze,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(St,{node:p})})})})})})}):null};My.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const qy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(Iy,{...r})})),Iy=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Nn,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:s,diffTypes:l,hideUnchangedNodes:u=!0}=r,c=ey(u),f=m.useMemo(()=>Xe(a),[a]),y=m.useMemo(()=>new jf({source:e,materializeDepth:n,diffsMetaKeys:s,logger:f}),[e,n,s,f]),g=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",g);const[p,h]=m.useReducer(D=>D+1,0),b=m.useCallback(D=>{y.materializeChildren(D),h()},[y]),T=m.useMemo(()=>({expandedDepth:n,materializeChildren:b,treeRevision:p}),[n,b,p]),v=g.root;return v?d.jsx(rt.Provider,{value:s,children:d.jsx(Ea.Provider,{value:l,children:d.jsx(Za.Provider,{value:c,children:d.jsx(za.Provider,{value:T,children:d.jsx(ut.Provider,{value:o,children:d.jsx(wn.Provider,{value:t,children:d.jsx(qn.Provider,{value:we,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Xn,{node:v})})})})})})})})})}):null};qy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:""}}};var Yr=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Yr||{});const gr=r=>{const{node:e,variant:n=Yr.PRIMARY,[ie]:t}=r,a=Ge(),i=Zn(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(xt).map((S,E)=>{var q;const C=((q=S.value())==null?void 0:q.protocol)??"",V=`binding-${E}`;return kt(S)?{title:C,node:S,testId:V,diffs:S.diffs,diffsSummary:S.diffsSummary,descendantDiffs:S.descendantDiffs,descendantDiffsSummary:S.descendantDiffsSummary,diffsSeverities:S.diffsSeverities}:{title:C,node:S,testId:V}}),[c]),y=l!=null&&l.node&&xt(l.node)?l.node:null,g=y==null?void 0:y.value(),{version:p="latest",binding:h=null}=g??{};m.useEffect(()=>{f.length>0&&l===null&&u(f[0])},[f,l]);const b=m.useCallback(S=>s?d.jsx(d.Fragment,{}):d.jsx(ht,{options:f,selectedOption:l,onSelectOption:u,variant:bt.Secondary,layoutSide:S}),[f,s,l]),T=m.useMemo(()=>{if(oc(e)){const S=on(e);return ae(S)}return{}},[e]),v=m.useMemo(()=>{if(y&&kt(y)){const S=on(y);return ae(S,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:G.BindingVersionRow})}return{}},[y]),D=m.useMemo(()=>{if(!y)return null;if(kt(y)&&i){const S=y.diffs[M],E=Oy(h,S,i);return d.jsx(ct,{"data-precededby":_.BINDING_VERSION_ROW,mergedSource:E,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return xt(y)?d.jsx(mr,{"data-precededby":_.BINDING_VERSION_ROW,source:h,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,h,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Yr.PRIMARY?F.h3:F.h5,subheader:b,...T}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(sn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:p,variant:F.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...v}),D]})]})};function Oy(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,s)=>{if(o[s]=t,k(t)){const l=r[s];o[s]={...t,afterValue:l}}if(x(t)){const l=r[s];o[s]={...t,beforeValue:l}}return o},{})}}gr.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`},{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  AsyncApiTreeNodeValue<K> | null,
  K,
  AsyncApiTreeNodeMeta,
  AsyncApiTreeNodeValue<K> | null
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const vt=r=>{const{node:e,[ie]:n}=r,t=Zn(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var s;if(sc(e)){const l=on(e);return{...ae(l),highlightingMode:(s=e.diffs[M])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:"Extensions",expandable:!1,variant:F.h3,usage:et.AsyncApiJsoSection,...o}),t?d.jsx(ct,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(mr,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};vt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
| AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.EXTENSIONS>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.EXTENSIONS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.EXTENSIONS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`},{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  AsyncApiTreeNodeValue<K> | null,
  K,
  AsyncApiTreeNodeMeta,
  AsyncApiTreeNodeValue<K> | null
>`}]},description:""}}};const Sl="Address Parameters",vl=r=>{const{node:e,[ie]:n}=r,t=Ge();if(dc(e))return d.jsx(Py,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:Sl,expandable:!1,variant:F.h3}),d.jsx(mt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},Py=r=>{const{node:e,[ie]:n}=r,t=Ge(),a=ge(),i=e.value(),o=i==null?void 0:i.rawValues,s=Zn(),l=m.useMemo(()=>{const c=on(e);return ae(c)},[e]),u=m.useMemo(()=>Hy(o,e.diffs[M],s),[o,s,e.diffs]);return!s||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:Sl,expandable:!1,variant:F.h3,...l}),d.jsx(gt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:s,overriddenKind:"parameters"})]})};function Hy(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,s)=>{if(o[s]=t,k(t)){const l=r[s];o[s]={...t,afterValue:l}}if(x(t)){const l=r[s];o[s]={...t,beforeValue:l}}return o},{})}}vl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
| AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`},{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  AsyncApiTreeNodeValue<K> | null,
  K,
  AsyncApiTreeNodeMeta,
  AsyncApiTreeNodeValue<K> | null
>`}]},description:""}}};const Dl=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>ur(i==null?void 0:i.causedAt),[i]);switch(ge()){case we:return d.jsx(Pn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Tn,{left:e(W),right:e(Q)})});case ze:return d.jsx(On,{content:e(Q)})}return null});Dl.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]}}},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const wl=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(lt),o=cr(e,kr),{nodeDiffs:s}=o,l=m.useMemo(()=>ae(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ae(o,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[o]),c=m.useMemo(()=>ae(o,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[o]),f=m.useMemo(()=>ae(o,{resolveDiff:(v,D)=>{const S=ke.maxChangedPropertyMetaDataByDiffType(D("protocol"),D("host"));return v[M]??S}}),[o]),y=m.useCallback(v=>{var A;if(!t)return null;if(!kr(e))return d.jsx(d.Fragment,{children:t.protocol});const D=(A=e.diffs)==null?void 0:A.protocol;if(!D)return d.jsx(d.Fragment,{children:t.protocol});const S=new Set,{data:E,styles:C}=D;let V=t.protocol,q=!1;return v===W&&(S.add(z.highlighter(C.before.textHighlighterColor)),x(E)||H(E)?V=E.beforeValue:an(E)&&(V=E.beforeKey),k(E)&&(q=!0)),v===Q&&(S.add(z.highlighter(C.after.textHighlighterColor)),k(E)||H(E)?V=E.afterValue:an(E)&&(V=E.afterKey),x(E)&&(q=!0)),q?null:d.jsx("span",{className:Array.from(S).join(" "),children:V})},[e,t]),g=m.useCallback(v=>{var A;if(!t)return null;if(!kr(e))return d.jsx(d.Fragment,{children:t.host});const D=(A=e.diffs)==null?void 0:A.host;if(!D)return d.jsx(d.Fragment,{children:t.host});const S=new Set,{data:E,styles:C}=D;let V=t.host,q=!1;return v===W&&(S.add(z.highlighter(C.before.textHighlighterColor)),x(E)||H(E)?V=E.beforeValue:an(E)&&(V=E.beforeKey),k(E)&&(q=!0)),v===Q&&(S.add(z.highlighter(C.after.textHighlighterColor)),k(E)||H(E)?V=E.afterValue:an(E)&&(V=E.afterKey),x(E)&&(q=!0)),q?null:d.jsx("span",{className:Array.from(S).join(" "),children:V})},[e,t]),p=m.useCallback(v=>{var A;function D(O=!1,L=[]){return d.jsx("div",{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${fr} py-2 flex flex-row w-full h-full ${L.join(" ")}`,children:!O&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(v),"://",g(v)]})})}if(!kr(e))return D();const S=((A=e.diffs)==null?void 0:A[M])??f.diff;if(!S)return D();const{data:E,styles:C}=S,V=new Set;let q=!1;return v===W&&(k(E)?(V.add(z.background(N.Gray)),q=!0):V.add(z.background(C.before.backgroundColor))),v===Q&&(x(E)?(V.add(z.background(N.Gray)),q=!0):V.add(z.background(C.after.backgroundColor))),D(q,Array.from(V))},[e,g,y,f.diff]),h=m.useMemo(()=>Je(t,s,"title"),[t,s]),b=m.useMemo(()=>Je(t,s,"description"),[t,s]),T=m.useMemo(()=>Je(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(ce,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:F.h4,...l}),!h&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:F.h4,...l}),d.jsx(Dl,{renderAddress:p,...f}),b&&d.jsx(sn,{"data-precededby":_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:F.h6,textFontWeight:"normal",textColor:bn,...u}),T&&d.jsx(sn,{"data-precededby":b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:F.h6,textFontWeight:"normal",textColor:bn,...c}),i&&d.jsx(gr,{"data-precededby":T?_.SUMMARY_ROW:b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,node:i,variant:Yr.SECONDARY})]}):null});wl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
| AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVER"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVER"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`},{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  AsyncApiTreeNodeValue<K> | null,
  K,
  AsyncApiTreeNodeMeta,
  AsyncApiTreeNodeValue<K> | null
>`}]},description:""}}};const Nl=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.childrenNodes().filter(zf),[e]),a=m.useMemo(()=>{if(uc(e)){const i=on(e);return ae(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:F.h3,...a}),t.map((i,o)=>d.jsx(wl,{"data-precededby":o===0?_.MESSAGE_SECTION_HEADER_HIGH_LEVEL:_.SERVER_BLOCK,node:i},i.id))]})});Nl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Tl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(lt),o=a.find(Yf),s=a.find($f),l=a.find(La),u=cr(e,lc),{nodeDiffs:c}=u,f=m.useMemo(()=>ae(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>ae(u,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[u]),g=m.useMemo(()=>ae(u,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[u]),p=m.useMemo(()=>Je(t,c,"title"),[t,c]),h=m.useMemo(()=>Je(t,c,"description"),[t,c]),b=m.useMemo(()=>Je(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[p&&d.jsx(ce,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:F.h2,...f}),!p&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:F.h2,...f}),h&&d.jsx(sn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:F.h5,textFontWeight:"normal",textColor:bn,...y}),b&&d.jsx(sn,{"data-precededby":h?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:F.h5,textFontWeight:"normal",textColor:bn,...g}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(vl,{"data-precededby":h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(Nl,{"data-precededby":o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(vt,{"data-precededby":s?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),i&&d.jsx(gr,{"data-precededby":l?_.JSO_VIEWER:s?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Tl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const El=r=>{const{node:e,[ie]:n}=r,t=Ge(),a=ge(),i=Zn(),o=ko(),s=e.childrenNodes(),l=s.find(Bf),u=s.find(La),c=s.find(lt),f=s.find(Uf),y=m.useMemo(()=>Wi(l,i),[l,i]),g=m.useMemo(()=>Wi(f,i),[f,i]),p=m.useMemo(()=>{if(fc(l)){const T=on(l);return ae(T)}return{}},[l]),h=m.useMemo(()=>{if(cc(f)){const T=on(f);return ae(T)}return{}},[f]),b=m.useCallback(T=>a===ze?d.jsx(mt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:T,displayMode:t,overriddenKind:"parameters"}):a===we&&i?d.jsx(gt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:T,displayMode:t,metaKeys:i,filters:o,layoutMode:we,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":n,value:"Headers",variant:F.h3,expandable:!1,...p}),b(y)]}),u&&d.jsx(vt,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(gr,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:u?_.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:u||c?_.JSO_VIEWER:n,value:"Payload",variant:F.h3,expandable:!1,...h}),b(g)]})]})},Yi="Type";function Wi(r,e){if(!r)return;const n=r.value();if(n)return r instanceof He?Ut(Yi,n.schema,r.diffs[M],e):fs(Yi,n.schema)}El.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const xl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(lt),o=a.find(La),s=cr(e,yc),{nodeDiffs:l}=s,u=m.useMemo(()=>ae(s,{diffKey:"title"}),[s]),c=m.useMemo(()=>ae(s,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[s]),f=m.useMemo(()=>ae(s,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[s]),y=m.useMemo(()=>Je(t,l,"title"),[t,l]),g=m.useMemo(()=>Je(t,l,"description"),[t,l]),p=m.useMemo(()=>Je(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(ce,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:F.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),variant:F.h2,expandable:!1,expanded:!0,...u}),g&&d.jsx(sn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:F.h5,textFontWeight:"normal",textColor:bn,...c}),p&&d.jsx(sn,{"data-precededby":g?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:F.h5,textFontWeight:"normal",textColor:bn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(vt,{"data-precededby":p?_.SUMMARY_ROW:g?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(gr,{"data-precededby":o?_.JSO_VIEWER:p?_.SUMMARY_ROW:g?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};xl.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const kl=r=>{const{node:e,[ie]:n}=r;return es(e)?d.jsx(El,{"data-precededby":n,node:e}):ns(e)?d.jsx(Tl,{"data-precededby":n,node:e}):rs(e)?d.jsx(xl,{"data-precededby":n,node:e}):null};kl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Al=r=>{const{node:e,[ie]:n}=r,t=ge();Ge();const[a,i]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(p=>{const h=Ly(p),b=jy(p);return pc(p)?{node:p,title:h,testId:b,diffs:p.diffs,diffsSummary:p.diffsSummary,descendantDiffs:p.descendantDiffs,descendantDiffsSummary:p.descendantDiffsSummary,diffsSeverities:p.diffsSeverities}:{node:p,title:h,testId:b}}),[o]);m.useEffect(()=>{s.length>0&&a===null&&i(s[0])},[s,a]);const l=m.useMemo(()=>{var p;return gc(e)?(p=e.diffs)==null?void 0:p[M]:null},[e]),u=m.useMemo(()=>{if(l){const{data:p}=l;if(H(p)||x(p))return p.beforeDeclarationPaths[0];if(k(p))return p.afterDeclarationPaths[0]}return null},[l]),c=m.useMemo(()=>{var p;return(p=l==null?void 0:l.data)==null?void 0:p.type},[l]),f=m.useMemo(()=>{const p=u==null?void 0:u.join(".");return p?`caused by ${p} change`:void 0},[u]),y=m.useCallback(p=>{const h=new Set;if(l){const{styles:b}=l;p===W&&h.add(z.background(b.before.backgroundColor)),p===Q&&h.add(z.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${fr} h-full ${Array.from(h).join(" ")}`,children:d.jsx(ht,{options:s,selectedOption:a,onSelectOption:i,variant:bt.Secondary,layoutSide:p})})},[l,n,s,a]),g=m.useCallback(()=>{switch(t){case we:return d.jsx(Pn,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(Tn,{left:y(W),right:y(Q)})});default:return d.jsx(On,{content:y(Q)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[g(),a&&Wf(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(kl,{"data-precededby":_.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function Ly(r){switch(r.kind){case w.MESSAGE_CONTENT:return"Message";case w.MESSAGE_CHANNEL:return"Channel";case w.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function jy(r){switch(r.kind){case w.MESSAGE_CONTENT:return"message-content";case w.MESSAGE_CHANNEL:return"message-channel";case w.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Al.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
| AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`},{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  AsyncApiTreeNodeValue<K> | null,
  K,
  AsyncApiTreeNodeMeta,
  AsyncApiTreeNodeValue<K> | null
>`}]},description:""}}};const li=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=cr(e,mc),{nodeDiffs:o}=i,s=m.useMemo(()=>ae(i,{diffKey:"title"}),[i]),l=m.useMemo(()=>ae(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>ae(i,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[i]),c=m.useMemo(()=>ae(i,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[i]),f=m.useMemo(()=>Je(t,o,"title"),[t,o]),y=m.useMemo(()=>Je(t,o,"description"),[t,o]),g=m.useMemo(()=>Je(t,o,"summary"),[t,o]),p=n?_.ROOT:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(ce,{"data-precededby":_.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:F.h1,...s}),!n&&!f&&d.jsx(ce,{"data-precededby":_.ROOT,value:e.key.toString(),expandable:!1,variant:F.h1,...s}),d.jsx(ts,{"data-precededby":p,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),y&&d.jsx(sn,{"data-precededby":_.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:F.h4,textFontWeight:"normal",textColor:bn,...u}),g&&d.jsx(sn,{"data-precededby":y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:F.h4,textFontWeight:"normal",textColor:bn,...c}),d.jsx(Jy,{"data-precededby":g?_.SUMMARY_ROW:y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,children:a})]})},Jy=r=>{const{children:e,[ie]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>Gf(t)?d.jsx(Al,{"data-precededby":n,node:t},t.key):null)})};li.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const Fy=m.memo(r=>r.source===null?null:d.jsx(vn,{fallback:d.jsx(Dn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Ky,{...r})})),Ky=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=Nn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,s=m.useMemo(()=>Xe(a),[a]),l=m.useMemo(()=>new Io({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!Zo(c)?null:d.jsx(wo.Provider,{value:a,children:d.jsx(wn.Provider,{value:t,children:d.jsxs(qn.Provider,{value:ze,children:[" ",d.jsx(Pe.Provider,{value:0,children:d.jsx(li,{node:c,noHeading:i})})]})})})});Fy.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{Fy as A,mr as J,Sc as a,mt as b,gt as c,qy as d,My as e,ct as f};
