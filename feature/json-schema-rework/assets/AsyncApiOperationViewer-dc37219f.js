var Sl=Object.defineProperty;var vl=(r,e,n)=>e in r?Sl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(vl(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{af as qr,a3 as yn,N as M,d as Fr,t as A,H as N,v as x,x as O,y as Ie,R as K,w as nn,O as j,ag as cn,ah as xt,ai as kt,aj as At,ak as Ki,al as Gi,am as Bi,an as Ui,ao as Yi,ap as Wi,aq as $i,ar as zi,as as Dl,at as Ct,au as Xi,av as Qi,aw as Yt,ax as Zi,ay as eo,az as no,aA as Wt,aB as $t,aC as zt,aD as ro,aE as Xt,aF as Qt,aG as to,aH as Vt,aI as Zt,aJ as ea,aK as na,aL as ra,aM as ta,aN as aa,aO as ia,aP as oa,U as W,o as ir,_ as ao,aQ as wl,aR as Fe,i as ti,aS as io,aT as Nl,Z as El,aU as Tl,X as Se,Y as or,W as X,S as xe,V as Z,E as hn,c as bn,e as Sn,L as _n,f as Pe,p as vn,a8 as ke,aV as oo,l as Ye,aW as xl,aX as kl,aY as Al,aZ as Cl,a_ as Vl,a$ as _l,b0 as Ml,b1 as Rl,b2 as ql,z as Il,A as Pl,B as Ol,F as Hl,G as Ll,J as jl,u as Je,g as Kr,a9 as Mn,I as ai,b3 as Jl,b4 as Fl,b5 as Fn,b6 as Kl,b7 as Gl,b8 as Ir,b9 as Bl,ba as Ul,bb as ii,a6 as oi,j as so,bc as lo,bd as Yl,a7 as sa,ae as Wl,be as $l,bf as zl,ac as de,bg as cr,bh as Hn,bi as on,bj as An,bk as uo,bl as fo,bm as Xl,C as Ql,bn as _t,bo as Zl,bp as mr,bq as ed,ad as co}from"./DiffBadge-ceca5443.js";import{_ as la,l as q,$ as Te,a0 as D,a1 as Gr,a2 as Br,a3 as nd,a4 as Ur,a5 as mo,a6 as le,e as We,a7 as Yr,t as se,a8 as ne,a9 as da,aa as rd,v as z,ab as td,ac as ad,ad as yo,ae as po,z as ua,S as Oe,O as Rn,N as qn,Q as Dn,af as yt,b as L,X as sr,A as ie,ag as go,ah as id,ai as od,aj as rn,ak as ae,T as fe,al as Wr,P as _,am as sd,an as ho,ao as $r,ap as en,aq as fa,ar as ld,as as dd,at as Mt,M as bo,au as So,av as qe,aw as ud,ax as fd,ay as cd,az as md,aA as yd,aB as pd,aC as gd,aD as lr,aE as yr,aF as pr,aG as vo,aH as Do,aI as hd,c as tn,d as pn}from"./IndexesNodeViewer-94209342.js";import{r as m}from"./index-f46741a2.js";import{T as ca,A as In,a as Yn,b as Ee,c as ma,m as ya,C as bd,d as zr,e as pa,u as Wn,f as wo}from"./DdlTableDiffsViewer-53cd81ea.js";/* empty css              */import"./DdlTableViewer-667c6095.js";import"./GraphQLOperationDiffViewer-5cbdc4b9.js";import"./GraphQLOperationViewer-f77a6d51.js";import{g as Sd,h as vd,J as Dd,j as wd,k as Nd,l as Ed,m as ga,n as Td,S as xd,U as No,o as Eo,p as Xr,q as Qr,N as To,E as si,r as kd,s as Ad,t as Cd,v as Vd,w as xo,x as ha,C as ba,y as Sa,D as va,z as _d,A as Md,B as Rd,F as qd,H as ko,I as Rt,K as li,L as Id,M as sn,V as Da,P as wa,Q as Na,R as Ea,T as Pd,W as Od,X as Ta,Y as xa,Z as ka,_ as Hd,$ as Ao,a0 as Ld,a1 as jd,a2 as Jd,a3 as Co,a4 as Fd,a5 as Kd,a6 as Gd,a7 as Bd,a8 as Ud,a9 as Yd,aa as Wd,ab as $d,ac as di,ad as zd,ae as Xd}from"./GraphPropNodeViewer-587f63f5.js";class Qd extends la{constructor(){super()}}const ui=(r,e)=>!q(e)||Te(e)?e:{rawValues:e},Zd=(r,e)=>{if(!q(e)||Te(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},fi=(r,e)=>q(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function Zn(r){return{"/data":{"/content":()=>Zn(D.MESSAGE_CONTENT),"/channel":()=>Zn(D.MESSAGE_CHANNEL),"/operation":()=>Zn(D.MESSAGE_OPERATION),kind:D.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:D.MESSAGE_CHANNEL_PARAMETERS,transformers:[ui]},"/servers":{"/*":()=>Zn(D.SERVER),kind:D.SERVERS},"/extensions":{kind:D.EXTENSIONS,transformers:[ui]},"/bindings":{"/*":{kind:D.BINDING,transformers:[Zd]},kind:D.BINDINGS,complex:!0},"/headers":{kind:D.MESSAGE_HEADERS,transformers:[fi]},"/payload":{kind:D.MESSAGE_PAYLOAD,transformers:[fi]},kind:r}}const eu="<address unknown>";class Vo{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,a;const i=e.operations??{};let o,s;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(l=c.messages)==null?void 0:l[0],y=this.isReferenceObject(f)?null:f;if(y){const p=y[this.referenceNamePropertyKey];s=typeof p=="string"?p:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,a=s}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var w;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,s=Object.entries(t).filter(S=>{const[T,V]=S;return!this.isReferenceObject(V)&&T===i}).map(([,S])=>S).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let c=(s.messages??[]).filter(S=>!this.isReferenceObject(S)).find(S=>q(S)&&S[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!c){const S=(w=l.messages)==null?void 0:w[o];if(c=this.isReferenceObject(S)?void 0:S,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(s),y=this.copyExtensions(l),p=this.copyExtensions(c),g=S=>q(S)?{[this.referenceNamePropertyKey]:S[this.referenceNamePropertyKey]}:void 0,h=g(c),b=g(l),v=g(s);return{...h??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:s.action,address:l.address??eu,data:{content:{...c.headers?{headers:c.headers}:{},...p?{extensions:p}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...b??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...y?{extensions:y}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...v??{},id:i,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function nu(r){return Gr(r)}const ru=new Set([D.BINDING,D.EXTENSIONS,D.MESSAGE,D.MESSAGE_CHANNEL,D.MESSAGE_CHANNEL_PARAMETERS,D.MESSAGE_HEADERS,D.MESSAGE_OPERATION,D.MESSAGE_PAYLOAD,D.SERVER]),gr=["title","description","summary"];class Zr extends Br{createNodeMeta(e){return{...q(e)&&qr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!nd(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,Zr.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return ru.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case D.BINDING:return["binding","version","protocol"];case D.EXTENSIONS:case D.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case D.MESSAGE:return[...gr,"internalTitle","action","address"];case D.MESSAGE_CHANNEL:return[...gr];case D.MESSAGE_OPERATION:return[...gr];case D.MESSAGE_HEADERS:case D.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case D.SERVER:return[...gr,"host","protocol"];default:return[]}}}const tu="[AsyncAPI]";class _o extends Ur{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=We()}=n;super();P(this,"tree");P(this,"source");P(this,"referenceNamePropertyKey");P(this,"operationKeys");P(this,"logger");P(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!q(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Yr},a=Zn(D.MESSAGE),i=nu({source:n,tree:this.tree,supportedNodeKinds:mo,createNodeFromRaw:(o,s,l,u,c)=>this.createNodeFromRaw(o,s,l,u,c),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>q(s)&&!!s.isPrimitive});return yn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return tu}createTree(){return new Qd}createNodeDataBuilder(){return new Zr}prepareSource(){return new Vo(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return q(n)?n:null}resolveNodeKey(n,t){if(!q(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:le.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:le.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===le.SIMPLE}isComplexTreeNode(n){return n.type===le.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class au extends ca{constructor(){super()}}function ci(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const iu="x-";function Vr(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(iu)}class ou extends Vo{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=se(ne(e,["operations",o],this.referenceNamePropertyKey)),c=se(ne(e,["operations",a,o],this.referenceNamePropertyKey));se(ne(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=se(ne(e,["operations",a,"channel",o],this.referenceNamePropertyKey));se(ne(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),se(ne(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=se(ne(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),p=se(ne(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));se(ne(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const g=ne(e,["operations",a,"messages",i],this.referenceNamePropertyKey),h=ne(e,["operations",a,"messages"],this.referenceNamePropertyKey),b=q(g)&&da(h)?rd(h,g):void 0,v=(b&&typeof b!="symbol"?y==null?void 0:y[b]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),E=l;if(!(o in E)){const w=p==null?void 0:p.title,S=p==null?void 0:p.name,T=p==null?void 0:p.description,V=p==null?void 0:p.summary,k=f==null?void 0:f.address,R=p==null?void 0:p.headers,C=p==null?void 0:p.payload,I=E.data.content.extensions;if(I&&!(o in I)){const H=Object.keys(p??{}).reduce((B,U)=>{if(!Vr(U))return B;const re=p==null?void 0:p[U];return re&&(B[U]=re),B},{});E.data.content.extensions=Object.assign(I,{[o]:H})}const F=E.data.content;if(F&&!(o in F)){const H={...R?{headers:R}:{},...C?{payload:C}:{}};E.data.content=Object.assign(F,{[o]:H})}E[o]={...v?{[M]:v}:{},...w?{title:w}:{},...S?{internalTitle:S}:{},...T?{description:T}:{},...V?{summary:V}:{},...k?{address:k}:{}}}if(!(o in E.data.channel)){const w=f==null?void 0:f.title,S=f==null?void 0:f.description,T=f==null?void 0:f.summary,V=f==null?void 0:f.address,k=E.data.channel.extensions;if(k&&!(o in k)){const R=Object.keys(f??{}).reduce((C,I)=>{if(!Vr(I))return C;const F=f==null?void 0:f[I];return F&&(C[I]=F),C},{});E.data.channel.extensions=Object.assign(k,{[o]:R})}E.data.channel[o]={...w?{title:w}:{},...S?{description:S}:{},...T?{summary:T}:{},...V?{address:V}:{}}}if(!(o in E.data.operation)){const w=c==null?void 0:c.title,S=c==null?void 0:c.description,T=c==null?void 0:c.summary,V=E.data.operation.extensions;if(V&&!(o in V)){const k=Object.keys(c??{}).reduce((R,C)=>{if(!Vr(C))return R;const I=c==null?void 0:c[C];return I&&(R[C]=I),R},{});E.data.operation.extensions=Object.assign(V,{[o]:k})}E.data.operation[o]={...w?{title:w}:{},...S?{description:S}:{},...T?{summary:T}:{}}}return Fr(E,o,s),E}hasOnlyAllowedDiffMetaSymbols(e){if(!q(e)&&!Te(e))return!0;if(Te(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class su extends Zr{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class lu extends In{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;i.add(s)}return i}}class du extends In{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,s=ne(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&i.add(l.type);return i}}class uu extends In{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=a,l=se(ne(t,["parameters","properties",o]));if(l)for(const f of Object.values(l))f&&i.add(f.type);const u=ne(t,["parameters",s]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=se(ne(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class fu extends In{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=a,l=se(ne(t,["extensions",o]));if(l)for(const f of Object.values(l))f&&i.add(f.type);const u=ne(t,["headers",s]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=ne(t,["payload",s]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class cu extends In{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,s=se(ne(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&i.add(l.type);return i}}var Tt;let mu=(Tt=class{static instance(e){switch(e){case D.BINDING:if(!this.instances.has(D.BINDING)){const n=new du;this.instances.set(D.BINDING,n)}return this.instances.get(D.BINDING);case D.MESSAGE_CONTENT:if(!this.instances.has(D.MESSAGE_CONTENT)){const n=new fu;this.instances.set(D.MESSAGE_CONTENT,n)}return this.instances.get(D.MESSAGE_CONTENT);case D.MESSAGE_CHANNEL:if(!this.instances.has(D.MESSAGE_CHANNEL)){const n=new uu;this.instances.set(D.MESSAGE_CHANNEL,n)}return this.instances.get(D.MESSAGE_CHANNEL);case D.MESSAGE_OPERATION:if(!this.instances.has(D.MESSAGE_OPERATION)){const n=new cu;this.instances.set(D.MESSAGE_OPERATION,n)}return this.instances.get(D.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new lu;this.instances.set(null,n)}return this.instances.get(null)}}},P(Tt,"instances",new Map),Tt);class yu extends Yn{aggregate(e,n){}}class pu extends Yn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=se(ne(e,[a],t));if(!i)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},c=i[l];c&&(s=!0,this.aggregateWholeNodeDiff(c,u),o[l]=u[M])}return s?o:void 0}}class gu extends Yn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=se(ne(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,s={};if(i){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};A(i)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),x(i)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),O(i)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.headers={data:i,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};A(o)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),x(o)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),O(o)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}return s}}class hu extends Yn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=se(ne(e,[a],t));if(!i)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const c=e[l][t];if(!c)continue;const f={},y=i[l];y&&(s=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[M])}return s?o:void 0}}class Mo{static instance(e){switch(e){case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new pu),this.instances.get(D.BINDINGS);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new hu),this.instances.get(D.SERVERS);case D.MESSAGE_CONTENT:return this.instances.has(D.MESSAGE_CONTENT)||this.instances.set(D.MESSAGE_CONTENT,new gu),this.instances.get(D.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new yu;this.instances.set(null,n)}return this.instances.get(null)}}}P(Mo,"instances",new Map);class bu extends Ee{aggregate(e){const n=e[M];if(n){const f=n.data,p={type:f.type,causedAt:[]};return O(f)?(p.causedAt=f.beforeDeclarationPaths[0],{[K.TitleRow]:p,[K.BindingVersionRow]:p}):(x(f)?p.causedAt=f.beforeDeclarationPaths[0]:A(f)&&(p.causedAt=f.afterDeclarationPaths[0]),{[K.TitleRow]:p,[K.DescriptionRow]:p,[K.SummaryRow]:p,[K.AddressRow]:p,[K.BindingVersionRow]:p,[K.ServerAddressRow]:p})}const t=e.title,a=e.description,i=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,c={};if(t){const f=t.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),A(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[K.TitleRow]=p}if(a){const f=a.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),A(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[K.DescriptionRow]=p}if(i){const f=i.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),A(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[K.SummaryRow]=p}if(o){const f=o.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),A(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[K.AddressRow]=p}if(s){const f=s.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),A(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[K.BindingVersionRow]=p}if(l||u){const f=l==null?void 0:l.data,y=u==null?void 0:u.data,p=Ee.maxDiffByDiffType(f,y);if(p){const g={type:p.type,causedAt:[]};(x(p)||O(p))&&(g.causedAt=p.beforeDeclarationPaths[0]),A(p)&&(g.causedAt=p.afterDeclarationPaths[0]),c[K.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class Ro{static instance(e){switch(e){default:return new bu}}}P(Ro,"instances",new Map);class Su extends ma{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!A(n)&&!x(n)&&!O(n)&&!nn(n))return!1;return!0}}class vu{static instance(e){switch(e){default:return new Su}}}class wn extends z{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:s}=t;if(!q(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const p=o.diffs[M];if(p&&(A(p.data)||x(p.data)))return u[M]={...p,inherited:!0},u;{const g=o.descendantDiffs[a];if(g)return u[M]=g,u}}else if(i){const p=i.diffs[M];if(p&&(A(p.data)||x(p.data)))return u[M]={...p,inherited:!0},u;{const g=i.descendantDiffs[a];if(g)return u[M]=g,u}}if(!z.isDiffsRecord(l))return;const c=l.title;c&&this.aggregateTextDiff(c,"title",u);const f=l.description;f&&this.aggregateTextDiff(f,"description",u);const y=l.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;A(n)&&(i={...i,isContentVisible:!1,backgroundColor:N.Gray},o={...o,isContentVisible:!0,backgroundColor:N.Green}),x(n)&&(i={...i,isContentVisible:!0,backgroundColor:N.Red},o={...o,isContentVisible:!1,backgroundColor:N.Gray}),(nn(n)||O(n))&&(i={...i,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},o={...o,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}}class Du extends wn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!q(e))return;let s=super.aggregate(e,n,t,a,i);if(s){const u=s[M];if(u){const{data:c,styles:f}=u;A(c)&&(f.after.borderShadowColor=N.Green),x(c)&&(f.before.borderShadowColor=N.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=ne(e,["binding"]);if(q(l)){const u=l[o];if(z.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(A(t)&&q(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(x(t)&&q(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class wu extends wn{aggregateByDescendantDiffs(e,n,t){var u;if(n[M])return n;if(!q(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[M]=s(),n;let l=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==l){l=j.replace;break}return l===j.replace?(n[M]=s(),n):(n[M]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:x(n)?n.beforeDeclarationPaths:[],beforeValue:x(n)?n.beforeValue:void 0,afterDeclarationPaths:A(n)?n.afterDeclarationPaths:[],afterValue:A(n)?n.afterValue:void 0,action:j.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}),a)}}class Nu extends wn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[M])return n;const i=ne(e,["rawValues"]);if(!q(i))return;const{diffsMetaKey:o}=a,s=i[o];if(!z.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return A(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[M]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:cn},n}}class Eu extends wn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!q(e))return;let s=super.aggregate(e,n,t,a,i);s||(s={});const l=e[o];if(z.isDiffsRecord(l)){const u=l[M];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};A(u)&&(f={...f,isContentVisible:!1,backgroundColor:N.Gray},y={...y,isContentVisible:!0,backgroundColor:N.Green}),x(u)&&(f={...f,isContentVisible:!0,backgroundColor:N.Red},y={...y,isContentVisible:!1,backgroundColor:N.Gray}),s[M]={data:u,highlightingMode:Ie,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=l.address;c&&this.aggregateTextDiff(c,"address",s)}return Object.keys(s).length>0?s:void 0}}class Tu extends wn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[M])return n;const i=ne(e,["rawValues","properties"]);if(!q(i))return;const{diffsMetaKey:o}=a,s=i[o];if(!z.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return A(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[M]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:Ie},n}}class xu extends wn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!q(e))return;let s=super.aggregate(e,n,t,a,i);s||(s={});const l=e[o];if(z.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const c=l.protocol;c&&this.aggregateTextDiff(c,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class ku extends wn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[M])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[M]=o,n}}class qt{static instance(e){switch(e){case D.BINDING:return this.instances.has(D.BINDING)||this.instances.set(D.BINDING,new Du),this.instances.get(D.BINDING);case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new wu),this.instances.get(D.BINDINGS);case D.EXTENSIONS:return this.instances.has(D.EXTENSIONS)||this.instances.set(D.EXTENSIONS,new Nu),this.instances.get(D.EXTENSIONS);case D.MESSAGE:return this.instances.has(D.MESSAGE)||this.instances.set(D.MESSAGE,new Eu),this.instances.get(D.MESSAGE);case D.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(D.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(D.MESSAGE_CHANNEL_PARAMETERS,new Tu),this.instances.get(D.MESSAGE_CHANNEL_PARAMETERS);case D.SERVER:return this.instances.has(D.SERVER)||this.instances.set(D.SERVER,new xu),this.instances.get(D.SERVER);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new ku),this.instances.get(D.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new wn),this.instances.get(null)}}}P(qt,"instances",new Map);const Au="[AsyncAPI][WithDiffs]";class Cu extends _o{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Au}createTree(){return new au}createNodeDataBuilder(){return new su}prepareSource(){return new ou(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return da(n)?n:null}createNodeFromRaw(n,t,a,i,o){const s=super.createNodeFromRaw(n,t,a,i,o);return!s||!ci(s)||this.assignNodeDiffs(s,a,o),s}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return qt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return vu.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Mo.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return qt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return mu.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return Ro.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),ya(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return mo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ci(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Vu extends la{constructor(){super()}}const Y={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},qo=Object.values(Y),Gn="unknown",_u="any",Mu="nothing",Q={UNKNOWN:Gn,ANY:_u,NOTHING:Mu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},Ru=Object.values(Q);function qu(r){return!r||!td(r)?!1:Ru.some(e=>e===r)}function Iu(r){return q(r)&&qr in r}function pt(r,e){const n=r[e];return Te(n)&&n.length>0}function $n(r){return typeof r=="boolean"}function Pn(r){return r==null||typeof r=="boolean"?null:r}const Pu=[Q.STRING,Q.NUMBER,Q.INTEGER,Q.BOOLEAN];function Io(r){return!!r&&Pu.includes(r)}function Pr(r){return!q(r)||Te(r)?!1:pt(r,"allOf")||pt(r,"oneOf")||pt(r,"anyOf")}function mi(r){return q(r)&&Reflect.ownKeys(r).length>0}function gt(r){return Te(r)&&r.length>0}function Po(r,e){if(!q(r)&&!Te(r))return!1;if(Te(r))return r.length>0;const n=r;if(gt(n[xt])||gt(n[kt])||gt(n[At])||mi(n[Ki])||mi(n[Gi]))return!0;const t=n[Bi];if(t!==void 0&&t!==!1||n[Ui]!==void 0)return!0;const a=n[Yi];return a!==void 0&&a!==!1}const Ou="extensions",Hu="location",Ke={root:Y.ROOT,definition:Y.DEFINITION,property:Y.PROPERTY,additionalProperties:Y.ADDITIONAL_PROPERTIES,patternProperty:Y.PATTERN_PROPERTY,items:Y.ITEMS,item:Y.ITEM,additionalItems:Y.ADDITIONAL_ITEMS,allOf:Y.ALL_OF,anyOf:Y.ANY_OF,oneOf:Y.ONE_OF},Lu=(r,e)=>{if(!q(e)||Te(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},ju="x-";function yi(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(ju)}function Ju(r,e){if(!q(e)||Te(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>yi(s));if(t.length===0)return e;const a=new Set(t),i=t.reduce((s,l)=>(yi(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&a.has(s)||(o[s]=e[s]);return o.extensions=i,o}const Fu=[Lu,Ju];function Ge(r=Ke.root){return{"/allOf":{"/*":()=>Ge(Ke.allOf)},"/oneOf":{"/*":()=>Ge(Ke.oneOf)},"/anyOf":{"/*":()=>Ge(Ke.anyOf)},"/properties":{"/*":()=>Ge(Ke.property)},"/items":()=>({...Ge(Ke.items),"/*":({key:e})=>ad(e)?Ge(Ke.item):{}}),"/additionalProperties":()=>Ge(Ke.additionalProperties),"/additionalItems":()=>Ge(Ke.additionalItems),"/patternProperties":{"/*":()=>Ge(Ke.patternProperty)},kind:r,transformers:Fu}}function Ku(r){return Gr(r)}const Gu={type:Q.ANY};function Bu(r,e){if($n(e)){if(e===!1)return!1;if(e===!0&&r===Y.ADDITIONAL_PROPERTIES)return Gu}}function Uu(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function ye(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const we=class we extends Br{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case Q.UNKNOWN:case Q.ANY:case Q.NOTHING:case Q.NULL:case Q.BOOLEAN:return we.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case Q.STRING:return[...we.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Vt,aa,ia,oa,Hu];case Q.NUMBER:case Q.INTEGER:return[...we.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Vt,Zt,ea,na,ra,ta];case Q.OBJECT:return[...we.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ro,Xt,Qt,to];case Q.ARRAY:return[...we.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Wt,$t,zt];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=Uu(n,t),o=Iu(e)?{brokenRef:String(e.$ref)}:{};return!Pr(e)&&q(e)?{...this.pick(e,we.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=Bu(e,t);if(i!==void 0)return i;if($n(t))return t;if(!q(t)||Pr(t))return null;const o=qu(t.type)?t.type:Q.UNKNOWN;return o===Q.UNKNOWN||o===Q.ANY||o===Q.NOTHING||o===Q.NULL||o===Q.BOOLEAN?{...a(t,we.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Q.STRING?{...a(t,we.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Q.NUMBER||o===Q.INTEGER?{...a(t,we.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Q.OBJECT?{...a(t,we.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Q.ARRAY?{...a(t,we.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};P(we,"JSON_SCHEMA_TREE_NODE_META_PROPS",[Wi,$i,zi,Dl]),P(we,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Ct,Xi,Qi,Yt,Zi,eo,no,Ou]);let Or=we;const Yu="[JSON Schema]";class Oo extends Ur{constructor(n){const{source:t,materializeDepth:a,logger:i=We()}=n;super();P(this,"tree");P(this,"source");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new yo);P(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!q(n))return this.tree;const t={parent:null,container:null,ancestors:new Yr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=Ge();return this.crawlHooks=Ku({source:n,tree:this.tree,supportedNodeKinds:qo,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o,s)=>({value:$n(i)||q(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:s}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>Te(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Po}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),yn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:po(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};yn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return Yu}createTree(){return new Vu}createNodeDataBuilder(){return new Or((n,t)=>this.pick(n,t))}prepareSource(){return q(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u,value:c}=o;if(i||q(c)&&Pr(c)){const h=this.createNodeMeta(t,o),b={type:le.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,b)}const y=this.createNodeValue(t,a,o),p=this.createNodeMeta(t,o),g={type:le.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:y,meta:p,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,g)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===le.SIMPLE}isComplexTreeNode(n){return n.type===le.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Wu extends ca{constructor(){super()}}class $u{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!q(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return Fr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class zu extends Or{constructor(e){super(e)}}class Xu extends In{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!A(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class Ho{static instance(e){return this.kindAnyInstance}}P(Ho,"kindAnyInstance",new Xu);const Qu=["properties","patternProperties","allOf","anyOf","oneOf","items"],Zu=new Set(["properties","patternProperties"]);class ef extends Yn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!q(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[s,l]of Object.entries(o))!l||s===M||!z.isDiff(l)||(i[s]=this.buildDescendantDiffMetadata(l));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=se(Reflect.get(n,t));i&&a.push(i);for(const o of Qu){const s=Reflect.get(n,o);if(!q(s)&&!Te(s))continue;const l=se(Reflect.get(s,t));if(l){a.push(l);continue}const u=i==null?void 0:i[o];if(u&&(A(u)||x(u))&&(Zu.has(o)?q(s):Te(s))){const y=this.decomposeWholeChildBagDiff(s,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=Te(n)?n.map((o,s)=>String(s)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return A(n)?{type:n.type,scope:n.scope,description:n.description,action:j.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:j.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=Ie;return A(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Green,borderShadowColor:N.Green},o={...o,increaseLevel:!0}),x(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Red,borderShadowColor:N.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},o={...o,increaseLevel:!1}),O(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:s}}}class Lo{static instance(e){return this.kindAnyInstance}}P(Lo,"kindAnyInstance",new ef);const mn="titleRow",jo=["type","format","title"],Kn=["readOnly","writeOnly","deprecated"];class Jo extends Ee{aggregate(e){const n=e[M],t={};return n?(t[K.TitleRow]=this.buildNodeDiffsSeverity(n),t[K.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[K.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",K.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",K.NestingIndicatorRow,t)),this.applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,t),Object.keys(t).length>0?t:void 0}applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,n){const t=e,a=Ee.maxChangedPropertyMetaDataByDiffType(...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[K.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[mn],...Object.values(t.typeLabelFieldDiffs??{})],i=Ee.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[K.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return x(n)||O(n)?t.causedAt=n.beforeDeclarationPaths[0]:A(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class nf extends Jo{aggregate(e){const n=super.aggregate(e)??{};return this.applyMaxAdditionalInfoRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyMaxAdditionalInfoRowSeverity(e,n){const t=e,a=Ee.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff,t.enumDiff,t.enumRowColorizingDiff,t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.enumValueDiffs??{}),...Object.values(t.examplesValueDiffs??{}),...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[K.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}}class It{static instance(e){switch(e){case Y.ROOT:case Y.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(It,"kindAnyInstance",new Jo),P(It,"kindPropertyInstance",new nf);function ht(r,e){for(const n of Object.values(e??{}))ua(n)&&r.add(n.data.type)}class rf extends ma{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){ht(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){ht(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(i.validationRowValueDiffs??{}))ht(a,l);continue}ua(s)&&a.add(s.data.type)}return a}}class Fo{static instance(e){return this.kindAnyInstance}}P(Fo,"kindAnyInstance",new rf);const De={ENUM:Yt,MIN_LENGTH:aa,MAX_LENGTH:ia,PATTERN:oa,MINIMUM:ea,MAXIMUM:ra,EXCLUSIVE_MINIMUM:na,EXCLUSIVE_MAXIMUM:ta,MULTIPLE_OF:Zt,MIN_PROPERTIES:Xt,MAX_PROPERTIES:Qt,UNIQUE_ITEMS:zt,MIN_ITEMS:Wt,MAX_ITEMS:$t},te={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:De.UNIQUE_ITEMS},Pt={[te.VALUE_LENGTH]:["minLength","maxLength"],[te.VALUE_PATTERN]:["pattern"],[te.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[te.VALUE_MULTIPLE_OF]:["multipleOf"],[te.PROPERTIES_COUNT]:["minProperties","maxProperties"],[te.ITEMS_COUNT]:["minItems","maxItems"],[te.UNIQUE_ITEMS]:["uniqueItems"]},tf={[te.VALUE_LENGTH]:{minLength:0,maxLength:1},[te.VALUE_PATTERN]:{pattern:0},[te.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[te.VALUE_MULTIPLE_OF]:{multipleOf:0},[te.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[te.ITEMS_COUNT]:{minItems:0,maxItems:1},[te.UNIQUE_ITEMS]:{uniqueItems:0}},Hr={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function af(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Hr.OAS_3_1_NUMERIC_EXCLUSIVE:Hr.OAS_3_0_BOOLEAN_EXCLUSIVE}function of(r){return r.dialect??af(r)}const sf="?",ce="{value}",Qe="{exclusive_value}",ln=">",hr=">=",dn="<",br="<=",Ve=1,_e=2,Me=4,Re=8,pi={0:{lower:void 0,upper:void 0},[Ve]:{lower:`${hr} ${ce}`,upper:void 0},[_e]:{lower:`${ln} ${Qe}`,upper:void 0},[Me]:{lower:void 0,upper:`${br} ${ce}`},[Re]:{lower:void 0,upper:`${dn} ${Qe}`},[_e|Ve]:{lower:`${ln} ${ce}`,upper:void 0},[_e|Me]:{lower:`${ln} ${Qe}`,upper:`${br} ${ce}`},[_e|Re]:{lower:`${ln} ${Qe}`,upper:`${dn} ${Qe}`},[Re|Ve]:{lower:`${hr} ${ce}`,upper:`${dn} ${Qe}`},[Re|Me]:{lower:void 0,upper:`${dn} ${ce}`},[Me|Ve]:{lower:`${hr} ${ce}`,upper:`${br} ${ce}`},[_e|Ve|Me]:{lower:`${ln} ${ce}`,upper:`${br} ${ce}`},[_e|Ve|Re]:{lower:`${ln} ${ce}`,upper:`${dn} ${Qe}`},[_e|Me|Re]:{lower:`${ln} ${Qe}`,upper:`${dn} ${ce}`},[Re|Ve|Me]:{lower:`${hr} ${ce}`,upper:`${dn} ${ce}`},[Ve|_e|Me|Re]:{lower:`${ln} ${ce}`,upper:`${dn} ${ce}`}};function Ot(r){return r!=null}function gi(r){return r!==void 0&&r!==!1}function lf(r,e,n){return(r&(Ve|_e))!==(Ve|_e)||n===void 0||typeof e!="number"?r:n>=e?r&~Ve:r&~_e}function df(r,e,n){return(r&(Me|Re))!==(Me|Re)||n===void 0||typeof e!="number"?r:n<=e?r&~Me:r&~Re}function hi(r,e,n){return r.replace(ce,`${e}`).replace(Qe,Ot(n)?`${n}`:sf)}function uf(r,e){return Ot(r)||Ot(e)}function ff(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=Ve),gi(t)&&(i|=_e),n!==void 0&&(i|=Me),gi(a)&&(i|=Re),i}function Ko(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&Ve)&&(n&=~_e),typeof e.exclusiveMax!="number"&&!(n&Me)&&(n&=~Re),n}function cf(r,e){return Ko(r,e)}function mf(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=lf(r,e.min,n);return a=df(a,e.max,t),a}const yf={[Hr.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Ko},[Hr.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:cf}};function pf(r,e){const n=yf[e];let t=ff(r);return t=n.applyExclusiveSuppression(t,r),mf(t,r)}function Ue(r){const e={data:{},visible:!1},n=of(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=pf(r,n),o=i in pi?{...pi[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=hi(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=hi(o.upper,r.max,a)),e.visible=uf(e.data.lower,e.data.upper),e}const tr="0",et="1";function Ln(r){return r!=null}function Sr(r){return r!==void 0&&r!==!1}function vr(r){return r!==void 0&&r!==!1}function Dr(r){return!!r&&A(r)}function wr(r){return!!r&&x(r)}function jn(r){return!!r&&O(r)}function bi(r){if(r&&(A(r)||O(r)))return r.afterValue}function Si(r){if(!r||!(x(r)||O(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function vi(r){if(!r||!(x(r)||O(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function Aa(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,s=e.exclusiveMinimum,l=e.maximum,u=e.exclusiveMaximum,c=Ln(n),f=Ln(a),y=Ln(o),p=Ln(l),g=Ln(s),h=Ln(u),b=Dr(o),v=wr(o),E=jn(o),w=Dr(l),S=wr(l),T=jn(l),V=Ue({min:c&&(!y||b||E)?n:void 0,max:f&&(!p||w||T)?a:void 0,exclusiveMin:Sr(t)&&(!g||Dr(s)||jn(s)&&vr(bi(s)))?t:void 0,exclusiveMax:Sr(i)&&(!h||Dr(u)||jn(u)&&vr(bi(u)))?i:void 0}).data;if(!(y||g||p||h))return{before:{...V},after:V};let R,C,I,F;if(c&&!y&&(R=n),(v||E)&&(R=Si(o)),f&&!p&&(C=a),(S||T)&&(C=Si(l)),Sr(t)&&!g&&(I=t),jn(s)||wr(s)){const B=vi(s);vr(B)&&(I=B)}if(Sr(i)&&!h&&(F=i),jn(u)||wr(u)){const B=vi(u);vr(B)&&(F=B)}return{before:Ue({min:R,max:C,exclusiveMin:I,exclusiveMax:F}).data,after:V}}function gf(r,e){if(!e)return;const n=r==="lower"?tr:et;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function Di(...r){for(const e of r)if(e)return e.type}function wi(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:j.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:j.remove,beforeValue:e}:{type:r,action:j.replace,beforeValue:e,afterValue:n}}function Go(r,e){const{before:n,after:t}=Aa(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return j.add;if(a&&!i)return j.remove}function Bo(r,e){const{before:n,after:t}=Aa(r,e),a=Di(e.minimum,e.exclusiveMinimum),i=Di(e.maximum,e.exclusiveMaximum),o={},s=wi(a,n.lower,t.lower);s&&(o[tr]=s);const l=wi(i,n.upper,t.upper);return l&&(o[et]=l),o}function hf(r,e){const n=Bo(r,e);return[n[tr],n[et]].filter(t=>t!==void 0)}function bf(r,e){if(Go(r,e)!==void 0)return!1;const n=hf(r,e);if(n.length!==1)return!1;const t=n[0];return A(t)||x(t)}function Sf(r,e){return bf(r,e)}function Ni(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:s}of a){if(!o)continue;const l=o!==s?gf(i,e):void 0;t.push({text:o,valueDiffKey:l})}return t}function vf(r,e,n,t,a){const{before:i,after:o}=Aa(r,e),s=n===W;if(t){const c=t.data;if(A(c)||x(c))return Ni(s?i:o,a,s?o:i)}return Ni(s?i:o,a,s?o:i)}function Df(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(A(e)?e.afterValue:x(e)?e.beforeValue:O(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function wf(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Df(n,t):!0:!1})}function Ei(r){return typeof r=="number"||typeof r=="boolean"}function Nf(r){if(!q(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),Ei(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),Ei(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Ht(r){const e=Nf(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function Xe(r){return typeof r=="string"?r:JSON.stringify(r)}function Uo(r,e,n){switch(r){case te.VALUE_LENGTH:case te.PROPERTIES_COUNT:case te.ITEMS_COUNT:{if(e.startsWith("min"))return Ue({min:Number(n)}).data.lower??Xe(n);if(e.startsWith("max"))return Ue({max:Number(n)}).data.upper??Xe(n);break}case te.VALUE_RANGE:{if(e==="minimum")return Ue({min:Number(n)}).data.lower??Xe(n);if(e==="maximum")return Ue({max:Number(n)}).data.upper??Xe(n);if(e==="exclusiveMinimum")return Ue({exclusiveMin:typeof n=="number"?n:!0}).data.lower??Xe(n);if(e==="exclusiveMaximum")return Ue({exclusiveMax:typeof n=="number"?n:!0}).data.upper??Xe(n);break}case te.VALUE_PATTERN:case te.VALUE_MULTIPLE_OF:case te.UNIQUE_ITEMS:return Xe(n);default:return Xe(n)}return Xe(n)}function Ef(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Tf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function Yo(r,e){return e.length<=1||Ef(r)?0:Tf(r)?1:0}class Wo extends z{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}});P(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:s}=t;if(!q(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const b=o.diffs[M];if(b&&(A(b.data)||x(b.data)))return u[M]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const v=o.descendantDiffs[a];if(v)return u[M]=v,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}else if(i){const b=i.diffs[M];if(b&&(A(b.data)||x(b.data)))return u[M]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const v=i.descendantDiffs[a];if(v)return u[M]=v,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}if(!z.isDiffsRecord(l))return;const c=l[M];c&&this.aggregateTextDiff(c,M,u);const f=l.title,y=l.format,p=l.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:f},u);const g=l.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const b of Kn){const v=l[b];z.isDiff(v)&&this.aggregateMetaFlagDiff(v,b,u)}return q(n)&&this.aggregateValidationRowDiffs(n,l,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),t}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[M];if(i&&(A(i.data)||x(i.data))){t.nestingIndicatorRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i);return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const p=Ee.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(p){t.nestingIndicatorRowColorizingDiff=this.asReplaceRowColorizingDiff(p);return}}if(!q(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(p=>a[p]);if(l.some(p=>!p))return;const[u,...c]=l;if(!A(u.data)&&!x(u.data))return;const f=u.data.action;c.every(p=>p.data.action===f&&(A(p.data)||x(p.data)))&&(t.nestingIndicatorRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(u.data))}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");q(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");q(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of jo){const o=n[i];z.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[M];if(t&&(A(t.data)||x(t.data))){n[mn]=t;return}for(const a of Kn){const i=n[a];if(i){n[mn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=Ee.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[mn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return O(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:N.Green},removeBefore:{textHighlighterColor:N.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return A(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),(nn(n)||O(n))&&(t={...t,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={...a,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}asReplaceRowColorizingDiff(n){const{data:t}=n;return O(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:A(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return A(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}:x(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return A(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:j.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:j.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[M];return!!t&&(A(t.data)||x(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Kn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return O(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:A(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:j.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:j.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[M];if(!(!a||!(A(a.data)||x(a.data)))&&q(n))for(const[i,o]of Object.entries(Pt)){const s=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(Pt)){const s=o.filter(w=>t[w]);if(s.length===0)continue;const l=i,u=l===te.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=l===te.VALUE_RANGE?wf(s,t):s,f=s.map(w=>t[w]).filter(w=>z.isDiff(w));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Ht(n),p=u?Go(y,u):void 0;if(u&&(p===j.add||p===j.remove)){const w=p===j.add?this.mergeDiffActionFragment(f,j.add,this.resolveWholeRowDisplayValues(l,s,f,j.add)):this.mergeDiffActionFragment(f,j.remove,this.resolveWholeRowDisplayValues(l,s,f,j.remove)),S=this.buildChangedPropertyMetaDataFromDiff(w);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(u&&Sf(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,a,l);continue}const g=f.every(A),h=f.every(x);if(g){const w=this.resolveWholeRowDisplayValues(l,s,f,j.add),S=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,j.add,w));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(h){const w=this.resolveWholeRowDisplayValues(l,s,f,j.remove),S=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,j.remove,w));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,a,l));continue}const b=c.map(w=>t[w]).filter(w=>z.isDiff(w)).map(w=>this.buildChangedPropertyMetaDataFromDiff(w)),v=Ee.maxChangedPropertyMetaDataByDiffType(...b);if(!v)continue;const E=this.buildValidationRowValueDiffs(l,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[l]=E,a.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(v),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,l)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=Bo(Ht(n),t),s=[tr,et];if(!s.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of s){const y=o[f];if(!y||c[f])continue;const p=f===tr?"lower":"upper",g=this.attachValueRangeChipDiffPaths(y,p,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const s=n.map(f=>t[f]).filter(f=>z.isDiff(f));if(s.length===0)return;const l=s.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=Ee.maxChangedPropertyMetaDataByDiffType(...l);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],s=[];for(const l of i)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return O(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=tf[n],o={};for(const s of t){const l=a[s];if(!z.isDiff(l)||i[s]===void 0)continue;const c=this.buildListValueDiffMetadata(l);o[s]=Ee.maxChangedPropertyMetaDataByDiffType(o[s],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((s,l)=>{const u=a[l],c=i===j.add?A(u)?u.afterValue:void 0:x(u)?u.beforeValue:void 0;c!==void 0&&o.push(Uo(n,s,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(l=>x(l)||O(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>A(l)||O(l)?l.afterDeclarationPaths:[]);return t===j.add?{type:i.type,scope:i.scope,description:i.description,action:j.add,afterValue:a,afterDeclarationPaths:s}:{type:i.type,scope:i.scope,description:i.description,action:j.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return O(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}}class xf extends Wo{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!q(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=z.isDiffsRecord(l),c=this.resolveWholeListFieldDiff(e,"enum",s),f=this.resolveWholeListFieldDiff(e,"examples",s),y=this.resolveListFieldItemDiffs(e,"enum",s),p=this.resolveListFieldItemDiffs(e,"examples",s),g=!!c||!!f||Object.keys(y).length>0||Object.keys(p).length>0;if(!o&&!u&&!g){const b=this.resolveRequiredMetaDiff(t,a,s);if(!b)return;const v={required:b};return this.aggregatePropertyTitleRowDiff(v),v}const h={...o??{}};if(u){const b=l.default;z.isDiff(b)&&(h.default=this.buildDefaultValueDiffMetadata(b))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(p).length>0&&(h.examplesValueDiffs=p),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const b=this.resolveRequiredMetaDiff(t,a,s);b&&(h.required=b)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[M];if(n&&(A(n.data)||x(n.data))){e[mn]=n;return}for(const a of Kn){const i=e[a];if(i){e[mn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[mn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!q(i)&&!q(a))return;const o=String(e),s=q(i)?Reflect.get(i,t):void 0,l=q(i)?Reflect.get(i,"required"):void 0,u=q(a)&&"required"in a?a.required:void 0,c=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if(z.isDiffsRecord(s)){const y=s.required;if(z.isDiff(y)){const p=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(p)return p}if(z.isDiffsRecord(y)){const p=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(p)return p}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(A(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(x(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(O(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if(z.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!z.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if(z.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(z.isDiff(t)){if(A(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(x(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return O(e)?this.buildChipReplaceDiffMetadata(e,{textHighlighterColor:N.Yellow}):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!z.isDiffsRecord(a))return;const i=a[n];if(z.isDiff(i)){if(A(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(x(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return z.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"enum","enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"examples","examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i,o){const s=Reflect.get(e,t);if(!Array.isArray(s)||s.length===0)return;const l=n[M];if(l&&(A(l.data)||x(l.data))){n[o]=this.buildWholeNodeInheritedRowColorizingDiff(l);return}const u=n[a];if(u){n[o]=u;return}const c=n[i];if(!c||Object.keys(c).length===0)return;const f=Ee.maxChangedPropertyMetaDataByDiffType(...Object.values(c));f&&(n[o]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[M];if(i&&(A(i.data)||x(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const s=o.data;if(A(s)||x(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}O(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Lr{static instance(e){switch(e){case Y.ROOT:case Y.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(Lr,"kindAnyInstance",new Wo),P(Lr,"kindPropertyInstance",new xf);const kf="[JSON Schema][WithDiffs]";class Af extends Oo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return kf}createTree(){return new Wu}createNodeDataBuilder(){return new zu((n,t)=>this.pick(n,t))}prepareSource(){return new $u(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const s=super.createNodeFromRaw(n,t,a,i,o);return!s||!ye(s)||this.assignNodeDiffs(s,a,o),s}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Lr.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Fo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Lo.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Lr.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Ho.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return It.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),ya(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return qo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ye(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function bt(r){return!!r&&Object.keys(r).length>0}function Ti(r){return!!r&&r.size>0}function Cf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function xi(r,e){if(!(bt(r.diffs)||bt(r.descendantDiffs)||Ti(r.diffsSummary)||Ti(r.descendantDiffsSummary)||bt(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=Cf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Lt(r,e,n){if(r.isCycle)return xi(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return xi(r,e)?!0:r.type===le.COMPLEX?r.nestedNodes().some(t=>Lt(t,e,n)):r.childrenNodes().some(t=>Lt(t,e,n))}finally{n.visiting.delete(r.id)}}function $o(r,e){return Lt(r,e,{visiting:new Set})}function Vf(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),s=r.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const s=r[o].id,l=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});a.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function _f(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return Vf(r,a=>$o(a,t),n)}function zo(r){return r.kind===D.MESSAGE}function Mf(r){return r.kind===D.MESSAGE_SECTION_SELECTOR}function Xo(r){return r.kind===D.MESSAGE_CONTENT}function Rf(r){return r.kind===D.MESSAGE_HEADERS&&r.key==="headers"}function qf(r){return r.kind===D.MESSAGE_PAYLOAD&&r.key==="payload"}function Qo(r){return r.kind===D.MESSAGE_CHANNEL}function If(r){return r.kind===D.MESSAGE_CHANNEL_PARAMETERS}function Zo(r){return r.kind===D.MESSAGE_OPERATION}function Ca(r){return r.kind===D.EXTENSIONS}function nt(r){return r.kind===D.BINDINGS}function St(r){return r.kind===D.BINDING}function Pf(r){return Xo(r)||Qo(r)||Zo(r)}function Of(r){return r.kind===D.SERVERS}function Hf(r){return r.kind===D.SERVER}function Le(r,e,n){var a;if(!q(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?x(t)?t.beforeValue!==void 0:A(t)?t.afterValue!==void 0:O(t)?t.beforeValue!==void 0||t.afterValue!==void 0:nn(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const Lf=r=>{if(!ir(r)||ao(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function jf(r){if(!ir(r)||ao(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,s)=>(Sd(s)&&(o[s]=r[s]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const Jf=[Lf,jf],je=(r=Fe.root)=>({"/allOf":{"/*":()=>je(Fe.allOf)},"/oneOf":{"/*":()=>je(Fe.oneOf)},"/anyOf":{"/*":()=>je(Fe.anyOf)},"/properties":{"/*":()=>je(Fe.property)},"/items":()=>({...je(Fe.items),"/*":({key:e})=>wl(e)?je(Fe.item):{}}),"/additionalProperties":()=>je(Fe.additionalProperties),"/additionalItems":()=>je(Fe.additionalItems),"/patternProperties":{"/*":()=>je(Fe.patternProperty)},kind:r,transformers:Jf});function Ff(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((s,l)=>l(s,r,n,t),e);return o!==e&&ti(o)&&ti(e)&&Object.defineProperty(o,io,{value:e,enumerable:!1}),{value:o}}}function Kf(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!Nl.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:s,nodeIdPrefix:l}=i,u=l+El(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:Va(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=s?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:s,parent:s.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(s?s.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===Tl.simple)return{done:!0};const p=i.treeLevel+1;if(y.value){const g=new Map(i.alreadyConvertedMappingStack);g.set(n,y.node);const h=n[io];h!==void 0&&g.set(h,y.node);let b;return vd(y.node)?b={parent:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:l,treeLevel:p,maxTreeLevel:i.maxTreeLevel}:b={parent:o,container:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:l,treeLevel:p,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:b}}else return{done:!0}}}const Gf=2;function Va(r,e){return[wd(r),Ff(e),Kf(r)]}const Bf=(r,e=Gf)=>{const n=new Dd(r);if(!ir(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return yn(r,Va(n,r),{state:t,rules:je()}),n},Uf=2,Yf=(r,e,n=Uf)=>{const t=new Nd(r,e);if(!ir(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return yn(r,Va(t,r),{state:a,rules:je()}),t};function He(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function Wf(r){return He(r,bd,D.BINDINGS)}function vt(r){return He(r,Oe,D.BINDING)}function $f(r){return He(r,Oe)}function zf(r){return He(r,Oe,D.MESSAGE_CHANNEL)}function Xf(r){return He(r,Oe)}function Nr(r){return He(r,Oe,D.SERVER)}function Qf(r){return He(r,Oe)}function Zf(r){return He(r,Oe,D.MESSAGE_HEADERS)}function ec(r){return He(r,Oe,D.MESSAGE_PAYLOAD)}function nc(r){return He(r,Oe,D.MESSAGE)}function rc(r){return He(r,Oe,D.MESSAGE_OPERATION)}function tc(r){return He(r,Oe,D.MESSAGE_SECTION_SELECTOR)}function ac(r){return He(r,Oe,[D.MESSAGE_CONTENT,D.MESSAGE_CHANNEL,D.MESSAGE_OPERATION])}const es=r=>{const e=Se(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>or(i==null?void 0:i.causedAt),[i]);switch(e){case xe:return d.jsx(qn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Dn,{left:d.jsx(Dt,{...r,layoutSide:W}),right:d.jsx(Dt,{...r,layoutSide:X})})});default:return d.jsx(Rn,{content:d.jsx(Dt,{...r,layoutSide:X})})}},ic={send:"bg-sky-400",receive:"bg-green-500"},Dt=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[ie]:i}=r,o=m.useCallback(()=>{const l=a&&oc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${ic[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(A(a.data)&&t===W&&(u=null),x(a.data)&&t===X&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(yt,{value:n,variant:L.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:p}=l,g=t===W?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(yt,{value:c,variant:L.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(yt,{value:g,variant:L.h4,layoutSide:t,diff:p,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),s=m.useMemo(()=>{const l=new Set;if(a){const{styles:u}=a;t===W?l.add(Z.background(u.before.backgroundColor)):l.add(Z.background(u.after.backgroundColor))}return Array.from(l)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium h-full ${sr} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function oc(r){const{data:e}=r;if(!O(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),s=i===-1?t:t.slice(0,i);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:l}}}es.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const sc=m.memo(r=>r.mergedSource===null?null:d.jsx(hn,{fallback:d.jsx(bn,{componentName:"Async API Operation Viewer"}),children:d.jsx(lc,{...r})})),lc=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=vn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=r,u=m.useMemo(()=>We(a),[a]),c=m.useMemo(()=>new Cu({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!zo(y)?null:d.jsx(zr.Provider,{value:s,children:d.jsx(pa.Provider,{value:l,children:d.jsx(go.Provider,{value:a,children:d.jsx(Sn.Provider,{value:t,children:d.jsx(_n.Provider,{value:xe,children:d.jsx(Pe.Provider,{value:0,children:d.jsx(ei,{node:y,noHeading:i})})})})})})})});sc.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const _a=m.createContext(void 0);function dc(){return m.useContext(_a)}const rt=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Ed(),i=ke(),s=e.node.newDataLevel?i+1:i,l=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=w=>{if(w){e.select(w),f(w),n(w);const S=u.find(T=>T.id===w);a==null||a(S)}},p=Se(),g=m.useMemo(()=>{const w={};return u.forEach(S=>{const T=S.value().$changes??{},V=ga({node:S});V&&(w[S.id]={...V,...Object.keys(T).length?{$changes:T}:{}})}),w},[u]),h=ke()+1,b=u.find(w=>(w==null?void 0:w.id)===c),v=Td(b)?b==null?void 0:b.kind:"",E=oo(t??(l==null?void 0:l.$nodeChange));return d.jsx(Pe.Provider,{value:s,children:d.jsx(xd,{nodesTypeData:g,selectedNodeId:c,combiner:v,onSelect:y,layoutMode:p,level:h,$nodeChange:E,$nestedChanges:l==null?void 0:l.$nestedChanges,$nestedChangesSummary:p!==Ye?e.$nestedChangesSummary:void 0})})};rt.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const tt=m.createContext(void 0);function ns(){return m.useContext(tt)}const Ma=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{i(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(id.Provider,{value:l,children:t})});Ma.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function rs(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class uc extends ca{constructor(){super()}}const at={PROPERTY:"property"},ar=Object.values(at),ee={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class fc extends Ur{constructor(){super(...arguments);P(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const Ne=class Ne{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=Ne.isArrayItemKey(e);return Ne.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=Ne.getValueType(e),i=Ne.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:Ne.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===ee.BOOLEAN||e===ee.NULL}static isPrimitiveValue(e){return e!==ee.JSON_SCHEMA&&e!==ee.MULTI_SCHEMA&&e!==ee.OBJECT&&e!==ee.ARRAY}static getValueType(e){return typeof e=="string"?ee.STRING:typeof e=="number"?ee.NUMBER:typeof e=="boolean"?ee.BOOLEAN:typeof e=="object"?e===null?ee.NULL:Array.isArray(e)?ee.ARRAY:Ne.isJsonSchema(e)?ee.JSON_SCHEMA:Ne.isMultiSchema(e)?ee.MULTI_SCHEMA:ee.OBJECT:ee.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Ct in e&&typeof e.type=="string"&&xl.some(a=>a===e.type)||kt in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>Ne.isJsonSchema(a))||At in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>Ne.isJsonSchema(a))||xt in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>Ne.isJsonSchema(a))||qr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Qi,kl,Al,to,Cl,Vl,_l,Ct,Xi,Vt,Zi,Zt,ra,ta,ea,na,ia,aa,oa,$t,Wt,zt,Qt,Xt,Ui,Yi,ro,Yt,Ki,Bi,Gi,xt,kt,At,Ml,no,$i,zi,eo,Wi,Rl,qr]);return n&&Object.keys(e).every(a=>t.has(a)||Ne.isExtensionPropertyInJsonSchema(a)||Ne.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&q(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!da(e))return e;const t=se(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let s;for(const l of o){const u=e[l],c=t[l];if(u===void 0||c===void 0||!O(c))continue;const{beforeValue:f,afterValue:y}=c,p=q(f),g=Array.isArray(f),h=q(y),b=Array.isArray(y);if(!(g&&h||p&&b))continue;s||(s={...e});const E={...f,...y};s[l]=E}return s??e}};P(Ne,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:ee.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let J=Ne;const cc=(r,e,n,t,a)=>J.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function ts(){return{"/*":()=>ts(),transformers:[cc],kind:at.PROPERTY}}function mc(r){return Gr(r)}const yc=new Set(ar);class pc extends Br{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=J.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return yc.has(e)}}class gc extends In{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!A(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class as{static instance(e){if(!this.instances.has(null)){const n=new gc;this.instances.set(null,n)}return this.instances.get(null)}}P(as,"instances",new Map);class hc extends Yn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!q(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=se(n[a]);if(!i)return;const o={};for(const[s,l]of Object.entries(i)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,p=Ie;if(A(l)){const{afterValue:g}=l,h=J.getValueType(g),b=J.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},f={...f,increaseLevel:!1},c={isContentVisible:b,isHeaderVisible:!0,backgroundColor:N.Green},y={...y,increaseLevel:!0},p=cn}if(x(l)){const{beforeValue:g}=l,h=J.getValueType(g);u={isContentVisible:J.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:N.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={...y,increaseLevel:!1},p=cn}if(O(l)){const{beforeValue:g,afterValue:h}=l,b=J.getValueType(g),v=J.getValueType(h),E=J.isPrimitiveValue(b),w=J.isPrimitiveValue(v),S=J.isPredefinedValueSet(b),T=J.isPredefinedValueSet(v);u={isContentVisible:E,isHeaderVisible:!0,backgroundColor:N.Yellow},E&&(S?u.borderShadowColor=N.Yellow:u.textHighlighterColor=N.Yellow),c={isContentVisible:w,isHeaderVisible:!0,backgroundColor:N.Yellow},w&&(T?c.borderShadowColor=N.Yellow:c.textHighlighterColor=N.Yellow),p=ql}o[s]={data:l,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:p}}return o}}class is{static instance(e){if(!this.instances.has(null)){const n=new hc;this.instances.set(null,n)}return this.instances.get(null)}}P(is,"instances",new Map);class bc extends Ee{aggregate(e){const n=e[M];if(n){const o=n.data,s={type:o.type,causedAt:[]};return O(o)||x(o)?s.causedAt=o.beforeDeclarationPaths[0]:A(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[K.TitleRow]:s}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return O(a)||x(a)?i.causedAt=a.beforeDeclarationPaths[0]:A(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[K.TitleRow]:i}}}class os{static instance(e){return this.instances.has(null)||this.instances.set(null,new bc),this.instances.get(null)}}P(os,"instances",new Map);class Sc extends ma{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!A(n)&&!x(n)&&!O(n)&&!nn(n))return!1;return!0}}class vc{static instance(e){return new Sc}}class Dc extends z{isComplexValue(e){return q(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const s=a.diffs[M];if(s){const{data:l}=s;if(A(l)){const{afterValue:u}=l,c=J.getValueType(u);if(!J.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=J.getValueType(y),g=J.isPrimitiveValue(p),h={data:{...l,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:cn,inherited:!0};return o[M]=h,o}return o[M]=s,o}if(x(l)){const{beforeValue:u}=l,c=J.getValueType(u);if(!J.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=J.getValueType(y),g=J.isPrimitiveValue(p),h={data:{...l,beforeValue:y},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:cn,inherited:!0};return o[M]=h,o}return o[M]=s,o}if(O(l)){const{beforeValue:u,afterValue:c}=l,f=J.getValueType(u),y=J.getValueType(c),p=J.isPrimitiveValue(f),g=J.isPrimitiveValue(y);if(p&&g)return o[M]=s,o;if(!p&&this.isComplexValue(u)&&g){const h=u[t],b=J.getValueType(h),v=J.isPrimitiveValue(b),E=J.isPredefinedValueSet(b),w={data:{...l,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:cn,inherited:!0};return v&&(w.styles.before.textHighlighterColor=N.Yellow),E&&(w.styles.before.borderShadowColor=N.Yellow),o[M]=w,o}if(!g&&this.isComplexValue(c)&&p){const h=c[t],b=J.getValueType(h),v=J.isPrimitiveValue(b),E=J.isPredefinedValueSet(b),w={data:{...l,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:cn,inherited:!0};return v&&(w.styles.after.textHighlighterColor=N.Yellow),E&&(w.styles.after.borderShadowColor=N.Yellow),o[M]=w,o}if(!p&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const h=u[t],b=c[t],v=J.getValueType(h),E=J.getValueType(b),w=J.isPrimitiveValue(v),S=J.isPrimitiveValue(E),T=J.isPredefinedValueSet(v),V=J.isPredefinedValueSet(E),k={data:{...l,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&w,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?N.Gray:N.Yellow,textHighlighterColor:h!==void 0?N.Yellow:void 0},after:{isContentVisible:b!==void 0&&S,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?N.Gray:N.Yellow,textHighlighterColor:b!==void 0?N.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:cn,inherited:!0};return w&&(k.styles.before.textHighlighterColor=N.Yellow),S&&(k.styles.after.textHighlighterColor=N.Yellow),T&&(k.styles.before.borderShadowColor=N.Yellow),V&&(k.styles.after.borderShadowColor=N.Yellow),o[M]=k,o}}}else{const l=a.descendantDiffs[t];if(l)return o[M]=l,o}}}}class ss{static instance(e){return this.instances.has(null)||this.instances.set(null,new Dc),this.instances.get(null)}}P(ss,"instances",new Map);class wc extends fc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=We()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"diffsMetaKeys");P(this,"logger");P(this,"nodeDataBuilder");P(this,"CHANGE_SEVERITIES",{[Il]:6,[Pl]:5,[Ol]:4,[Hl]:3,[Ll]:2,[jl]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new uc,this.nodeDataBuilder=new pc}build(){if(!q(this.source))return this.tree;Fr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Yr,diffMetaKeys:this.diffsMetaKeys},t=ts(),a=mc({source:this.source,tree:this.tree,supportedNodeKinds:ar,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===le.SIMPLE,isComplexNode:i=>i.type===le.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!q(o)&&!Array.isArray(o))return!0;const s=i.value();return s?this.supportJsonSchema&&(s.before.valueType===ee.JSON_SCHEMA||s.after.valueType===ee.JSON_SCHEMA||s.before.valueType===ee.MULTI_SCHEMA||s.after.valueType===ee.MULTI_SCHEMA):!1}});return yn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return q(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:le.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:c,newDataLevel:l},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const g=y.diffs[M];if(g){const{data:h}=g;if(A(h)&&u&&(u.before=J.DEFAULT_BASE_JSO_NODE_VALUE),x(h)&&u&&(u.after=J.DEFAULT_BASE_JSO_NODE_VALUE),O(h)){const{beforeValue:b}=h,v=J.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=v)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return ss.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return vc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return is.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return as.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return os.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),ya(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[M];if(!t||!O(t.data))return!1;const a=J.getValueType(t.data.beforeValue),i=J.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),s=this.isJsoComplexValueType(i);return o!==s}isJsoComplexValueType(n){return n===ee.OBJECT||n===ee.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[M]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===le.SIMPLE||n.type===le.COMPLEX))}isJsoTreeNodeKind(n){return ar.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===le.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===le.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Be={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function ls(r,e){if(e)return{type:"object",properties:{[r]:e}}}function jt(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Nc(r,e){if(e&&!(e.valueType!==Be.JSON_SCHEMA&&e.valueType!==Be.MULTI_SCHEMA))return q(e.value)?ls(r,e.value):void 0}function Ec(r,e,n,t){if(e&&!(e.before.valueType!==Be.JSON_SCHEMA&&e.before.valueType!==Be.MULTI_SCHEMA&&e.after.valueType!==Be.JSON_SCHEMA&&e.after.valueType!==Be.MULTI_SCHEMA)){if((e.before.valueType===Be.JSON_SCHEMA||e.before.valueType===Be.MULTI_SCHEMA)&&q(e.before.value))return jt(r,e.before.value,n,t);if((e.after.valueType===Be.JSON_SCHEMA||e.after.valueType===Be.MULTI_SCHEMA)&&q(e.after.value))return jt(r,e.after.value,n,t)}}const Ra=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});Ra.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function ds(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function Tc(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=ds({appearance:e});return m.useMemo(()=>[a,e==="text"?Z.highlighter(n):"",e==="block"?Z.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const _r=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=Tc({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(Ra,{isVisible:e,value:n,className:o})});_r.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const qa=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Je(),i=Wn(),{beforeLevel:o,afterLevel:s}=od(),[l,u]=m.useState(!0),c=m.useCallback(()=>{u(R=>!R)},[]),f=e.value(),y=e.diffs,p=e.descendantDiffsSummary,g=m.useMemo(()=>y[M],[y]),h=m.useCallback(R=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(_r,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!l&&d.jsx(No,{values:Array.from(p)})]});const{styles:C}=g;return R===W?d.jsx(_r,{isVisible:C.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:C.before.textHighlighterColor,borderShadowColor:C.before.borderShadowColor}):R===X?d.jsx(_r,{isVisible:C.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:C.after.textHighlighterColor,borderShadowColor:C.after.borderShadowColor}):d.jsx(d.Fragment,{})},[l,p,f,g]),b=m.useMemo(()=>{const R=rn(e);return ae(R,{resolveDiff:()=>g})},[e,g]),v=e.childrenNodes(),E=m.useMemo(()=>{const R=!!f,C=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==ee.UNKNOWN,I=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==ee.UNKNOWN;return R&&(C||I)},[f]),w=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),S=m.useMemo(()=>n?Ec(e.key,f,g,i):void 0,[i,e.key,f,g,n]);if(S)return i?d.jsx(lt,{schema:S,expandedDepth:2,displayMode:a,layoutMode:xe,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const T=rs(v),[V,k]=(()=>{let R=o+1,C=s+1;const[I]=v,F=I==null?void 0:I.diffs[M];return F&&T&&(R=F.flags.before.increaseLevel?o+1:o,C=F.flags.after.increaseLevel?s+1:s),[R,C]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(fe,{"data-precededby":t,value:`${e.key}`,expandable:E,expanded:l,onClickExpander:E?c:void 0,variant:L.body2,enableHeaderValue:w,subheader:h,usage:Wr.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...b}),l&&d.jsx(Ma,{beforeLevel:V,afterLevel:k,children:v.map(R=>d.jsx(qa,{"data-precededby":_.JSO_PROPERTY,node:R,supportJsonSchema:n},R.id))})]})};qa.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const it=m.memo(r=>r.mergedSource===null?null:d.jsx(hn,{fallback:d.jsx(bn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(xc,{...r})})),xc=m.memo(r=>{const{mergedSource:e,displayMode:n=vn,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:s}=r,{[ie]:l}=r,u=m.useMemo(()=>We(i),[i]),c=m.useMemo(()=>new wc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const p=y.childrenNodes();if(p.length===0)return null;const g=rs(p),[h,b]=(()=>{let v=t,E=t;const[w]=p,S=w.diffs[M];return S&&g&&(v=S.flags.before.increaseLevel?t:t-1,E=S.flags.after.increaseLevel?t:t-1),[v,E]})();return d.jsx(zr.Provider,{value:o,children:d.jsx(pa.Provider,{value:s,children:d.jsx(Sn.Provider,{value:n,children:d.jsx(_n.Provider,{value:xe,children:d.jsx(Ma,{beforeLevel:h,afterLevel:b,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:p.map((v,E)=>d.jsx(qa,{"data-precededby":E===0?l:_.JSO_PROPERTY,node:v,supportJsonSchema:a},v.id))})})})})})})});it.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class kc extends la{constructor(){super()}}function us(){return{"/*":()=>us(),kind:at.PROPERTY}}function Ac(r){return Gr(r)}const Cc=new Set(ar);class Vc extends Br{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==at.PROPERTY?null:J.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Cc.has(e)}}class _c extends Ur{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=We()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new yo);P(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new kc,this.nodeDataBuilder=new Vc}build(){if(!q(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Yr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=us();return this.crawlHooks=Ac({source:this.source,tree:this.tree,supportedNodeKinds:ar,createNodeFromRaw:(a,i,o,s,l)=>this.createNodeFromRaw(a,i,o,s,l),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!q(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===ee.JSON_SCHEMA||o.valueType===ee.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:sd}}),yn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:po(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};yn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:le.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,{...o,parent:s,container:l}),f=this.createNodeMeta(t,o),y={type:le.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===le.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const ot=r=>d.jsx(hn,{fallback:d.jsx(bn,{componentName:"JSON Schema Viewer"}),children:d.jsx(Mc,{...r})}),Mc=r=>{const{schema:e,expandedDepth:n=Kr,displayMode:t=vn,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:s=0}=r,l=m.useMemo(()=>Bf(e),[e]),c=m.useMemo(()=>new Eo(l,n),[n,l]).root;let f=null;return Xr(c)&&(f=d.jsx(st,{state:c,overriddenKind:a})),Qr(c)&&(f=d.jsx(rt,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(tt.Provider,{value:o,children:d.jsx(_a.Provider,{value:i,children:d.jsx(Sn.Provider,{value:t,children:d.jsx(Pe.Provider,{value:s,children:f})})})})};ot.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const fs=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=ds({appearance:t});return d.jsx(Ra,{isVisible:e,value:n,className:a})});fs.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ia=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Je(),i=ke(),[o,s]=m.useState(!0),l=m.useCallback(()=>{s(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(fs,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),p=m.useMemo(()=>n?Nc(e.key,u):void 0,[e.key,u,n]);return p?d.jsx(ot,{schema:p,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(fe,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:l,variant:L.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:Wr.JsoProperty}),o&&d.jsx(Pe.Provider,{value:i+1,children:y.map(g=>d.jsx(Ia,{"data-precededby":_.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};Ia.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const dr=m.memo(r=>r.source===null?null:d.jsx(hn,{fallback:d.jsx(bn,{componentName:"JSO Viewer"}),children:d.jsx(Rc,{...r})})),Rc=m.memo(r=>{const{source:e,displayMode:n=vn,layoutMode:t=Ye,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[ie]:s}=r,l=m.useMemo(()=>We(o),[o]),u=m.useMemo(()=>new _c({source:e,supportJsonSchema:i,logger:l}),[e,i,l]),c=m.useMemo(()=>u.build(),[u]);l.debug("[JSO] Source:",e),l.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(Sn.Provider,{value:n,children:d.jsxs(_n.Provider,{value:t,children:[" ",d.jsx(Pe.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((p,g)=>d.jsx(Ia,{"data-precededby":g===0?s:_.JSO_PROPERTY,node:p,supportJsonSchema:i},p.id))})})]})})});dr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const ki=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=ke(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const s=new Set;return n===W&&(A(e)&&(s.add(Z.background(N.Gray)),o=!1),x(e)&&s.add(Z.background(N.Red))),n===X&&(A(e)&&s.add(Z.background(N.Green)),x(e)&&(s.add(Z.background(N.Gray)),o=!1)),{diffStylesClasses:Array.from(s),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row h-full ${a.join(" ")}`,children:[d.jsx(Mn,{level:t+1,lastInvisible:!0}),i&&d.jsx(To,{children:"Extensions"})]})}),qc=[],cs=r=>{const{extensions:e,$nodeChange:n}=r,t=ke(),a=Je(),i=Se(),o=Wn(),s=i===ai,l=i===xe,u=m.useMemo(()=>{let g=Ic(n);return g||(g=Oc(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(x(u)||O(u))&&(g=u.beforeDeclarationPaths[0]??[]),A(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Mn,{level:t+1,lastInvisible:!0}),d.jsx(To,{children:"Extensions"})]});switch(i){case ai:return null;case xe:return d.jsx(qn,{diffType:c,diffTypeCause:f,children:d.jsx(Dn,{left:d.jsx(ki,{diff:u,layoutSide:W}),right:d.jsx(ki,{diff:u,layoutSide:X})})});default:return g}},[i,t,u,f,c]),p=m.useMemo(()=>{if(s)return null;if(l&&o){const g=Pc(e,u,o);return d.jsx(it,{mergedSource:g,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:qc})}return d.jsx(dr,{source:e,initialLevel:t+1})},[s,l,o,e,t,u,a]);return p?d.jsxs("div",{className:"flex flex-col",children:[y,p]}):null};function Ic(r){if(!r)return;const{depth:e,...n}=r;return n}function Pc(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)Vr(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function Oc(r,e){var s;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=se(ne(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const l of i)if(((s=a[l])==null?void 0:s.action)!==(o==null?void 0:o.action))return;return o}cs.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const Hc=["type","nullable","title","format"],Lc=["required","readOnly","writeOnly","deprecated"],ms=r=>{const{nodeTitleData:e,nodeTypeData:n,isCircularRef:t,readOnly:a,writeOnly:i,deprecated:o,isExpandable:s,expanded:l,isRoot:u,onToggleExpander:c,layoutMode:f=so,level:y=0,$changes:p,$metaChanges:g,$nodeChange:h,$nodeChangesSummary:b}=r,v=!!h,E=Jl(),w=dc(),S=ir(w)&&(e!=null&&e.title)&&w[e.title]?w[e.title]:void 0,T=Fl(v?void 0:b),V=m.useCallback(G=>E.length===0||E.includes(G),[E]),{isDocumentLayoutMode:k,isInlineDiffsLayoutMode:R,isSideBySideDiffsLayoutMode:C}=lo(f),I=!!p&&Hc.some(G=>Fn(p[G]))||!!g&&Lc.some(G=>Fn(g[G])),{nodeAdded:F,nodeRemoved:H,nodeReplaced:B,nodeRenamed:U}={nodeAdded:v&&h.action===j.add,nodeRemoved:v&&h.action===j.remove,nodeReplaced:v&&h.action===j.replace,nodeRenamed:v&&h.action===j.rename},re=Kl(Gl(p,g,Yl),E),[ue,$]=v?Ir(h):I?Ir(...re):Bl,oe=Ul(ue,E),$e=v?ii[h==null?void 0:h.action]:I?ii[j.replace]:"",Ce=({layoutSide:G})=>{const ze=C?"w-1/2":"w-full",En=!k&&!v&&I&&!!(g!=null&&g.required),ve=Ad(),On=ve&&ve===G,an=u&&!s,Tn=["flex flex-row",!an&&"gap-2",ze].filter(Boolean).join(" "),fr=()=>d.jsxs(d.Fragment,{children:[n&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(xo,{...n,showNullable:!0,layoutMode:f,layoutSide:G,$changes:p})}),sa.isNotEmpty(T)&&!k&&s&&!l&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(No,{values:T,filter:V})}),t&&d.jsx(ha,{text:ba,children:d.jsx(Sa,{})}),d.jsx(va,{requiredChanged:En,readOnly:a,writeOnly:i,deprecated:o,layoutSide:G,isNodeChanged:v,isContentChanged:I,$nodeChange:h,$metaChanges:g}),S&&d.jsx(Wl,{label:S,colorSchema:$l(zl),layoutMode:f,layoutSide:G,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:Tn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(Mn,{level:y}),an?d.jsx("div",{className:"w-5"}):d.jsx(Cd,{isRoot:u,isExpandable:s,expanded:l,onToggleExpander:c})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${s?"hover:cursor-pointer":""}`,onClick:s?c:void 0,children:d.jsx(Vd,{...e,showRequired:!0,layoutMode:f,layoutSide:G,requiredChange:g==null?void 0:g.required,titleChange:h})}),!On&&d.jsx(fr,{})]})]})};return k?d.jsx("div",{className:"flex flex-row",children:d.jsx(Ce,{...r,layoutSide:X})}):R?!v&&!I?d.jsx("div",{className:"flex flex-row",children:d.jsx(Ce,{...r,layoutSide:W})}):d.jsxs("div",{className:`flex flex-row relative ${oe?$e:""}`,children:[ue&&oe&&d.jsx(oi,{variant:ue,message:$}),d.jsx(Ce,{...r,layoutSide:W})]}):C?!v&&!I?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Ce,{...r,layoutSide:W}),d.jsx(Ce,{...r,layoutSide:X})]}):d.jsxs("div",{className:`flex flex-row relative ${oe?$e:""}`,children:[ue&&oe&&d.jsx(oi,{variant:ue,message:$}),!v&&I||v&&(H||B||U)?d.jsx(Ce,{...r,layoutSide:W}):d.jsx(si,{level:(h==null?void 0:h.depth)??y}),!v&&I||v&&(F||U||B)?d.jsx(Ce,{...r,layoutSide:X}):d.jsx(si,{level:(h==null?void 0:h.depth)??y})]}):d.jsx(kd,{layoutMode:f})};ms.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function jc(r,e){var S,T,V;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,s=o==null?void 0:o.exclusiveMinimum,l=o==null?void 0:o.exclusiveMaximum,u=typeof s=="number"?s:s===!0&&de(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof l=="number"?l:l===!0&&de(o==null?void 0:o.maximum)?o.maximum:void 0,f=s===!0||o==null?void 0:o.minimum,y=l===!0||o==null?void 0:o.maximum,p=o==null?void 0:o.multipleOf,g=(V=(T=(S=r==null?void 0:r.parent)==null?void 0:S.value())==null?void 0:T.propertyNames)==null?void 0:V.enum,h=e==null?void 0:e.minProperties,b=e==null?void 0:e.maxProperties,v=e==null?void 0:e.uniqueItems,E=e==null?void 0:e.minItems,w=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:p},object:{allowedPropertyNames:g,minProperties:h,maxProperties:b},array:{uniqueItems:v,minItems:E,maxItems:w}}}const Jc="?",me="{value}",Ze="{exclusive_value}",un=">",Er=">=",fn="<",Tr="<=",pe=1,ge=2,he=4,be=8,xr={0:{lower:void 0,upper:void 0},[pe]:{lower:`${Er} ${me}`,upper:void 0},[ge]:{lower:`${un} ${Ze}`,upper:void 0},[he]:{lower:void 0,upper:`${Tr} ${me}`},[be]:{lower:void 0,upper:`${fn} ${Ze}`},[ge|pe]:{lower:`${un} ${me}`,upper:void 0},[ge|he]:{lower:`${un} ${Ze}`,upper:`${Tr} ${me}`},[ge|be]:{lower:`${un} ${Ze}`,upper:`${fn} ${Ze}`},[be|pe]:{lower:`${Er} ${me}`,upper:`${fn} ${Ze}`},[be|he]:{lower:void 0,upper:`${fn} ${me}`},[he|pe]:{lower:`${Er} ${me}`,upper:`${Tr} ${me}`},[ge|pe|he]:{lower:`${un} ${me}`,upper:`${Tr} ${me}`},[ge|pe|be]:{lower:`${un} ${me}`,upper:`${fn} ${Ze}`},[ge|he|be]:{lower:`${un} ${Ze}`,upper:`${fn} ${me}`},[be|pe|he]:{lower:`${Er} ${me}`,upper:`${fn} ${me}`},[pe|ge|he|be]:{lower:`${un} ${me}`,upper:`${fn} ${me}`}};function kr(r){return r!==void 0&&r!==!1}function Ar(r){return r!==void 0&&r!==!1}function Ai(r,e,n){return(r&(pe|ge))!==(pe|ge)||n===void 0||typeof e!="number"?r:n>=e?r&~pe:r&~ge}function Ci(r,e,n){return(r&(he|be))!==(he|be)||n===void 0||typeof e!="number"?r:n<=e?r&~he:r&~be}function Cr(r,e,n){return r.replace(me,`${e}`).replace(Ze,de(n)?`${n}`:Jc)}function Fc(r,e,n){var an,Tn;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,s=r.exclusiveMaximum,l=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=Ir(l,u),[p]=Ir(c,f),g=de(a),h=de(o),b=de(l),v=de(c),E=de(u),w=de(f),S=cr(l),T=Hn(l),V=on(l),k=cr(c),R=Hn(c),C=on(c),I=typeof i=="number"?i:void 0,F=typeof s=="number"?s:void 0;let H=0,B=0;g&&(!b||S||V)&&(B|=pe),kr(i)&&(!E||cr(u)||on(u)&&Ar(u==null?void 0:u.afterValue))&&(B|=ge),h&&(!v||k||C)&&(B|=he),kr(s)&&(!w||cr(f)||on(f)&&Ar(f==null?void 0:f.afterValue))&&(B|=be),typeof i!="number"&&!(B&pe)&&(B&=~ge),typeof s!="number"&&!(B&he)&&(B&=~be),B=Ai(B,a,I),B=Ci(B,o,F);const U=B in xr?{...xr[B]}:void 0;if(U!=null&&U.lower&&(U.lower=Cr(U.lower,a,I)),U!=null&&U.upper&&(U.upper=Cr(U.upper,o,F)),t.data.lower=U==null?void 0:U.lower,t.data.upper=U==null?void 0:U.upper,!b&&!E&&!v&&!w)return t.visible=Vi(t.data.lower,t.data.upper),t;let re,ue,$,oe;g&&!b&&(re=a,H|=pe),(T||V)&&(re=l.beforeValue,H|=pe),h&&!v&&(ue=o,H|=he),(R||C)&&(ue=c.beforeValue,H|=he),kr(i)&&!E&&(H|=ge,$=I),(on(u)||Hn(u))&&Ar(u==null?void 0:u.beforeValue)&&(H|=ge,typeof u.beforeValue=="number"&&($=u.beforeValue)),kr(s)&&!w&&(H|=be,oe=F),(on(f)||Hn(f))&&Ar(f==null?void 0:f.beforeValue)&&(H|=be,typeof f.beforeValue=="number"&&(oe=f.beforeValue)),(!E&&typeof i!="number"||(on(u)||Hn(u))&&typeof u.beforeValue!="number")&&!(H&pe)&&(H&=~ge),(!w&&typeof s!="number"||(on(f)||Hn(f))&&typeof f.beforeValue!="number")&&!(H&he)&&(H&=~be),H=Ai(H,re,$),H=Ci(H,ue,oe);const G=H in xr?{...xr[H]}:void 0;G!=null&&G.lower&&(G.lower=Cr(G.lower,re,$)),G!=null&&G.upper&&(G.upper=Cr(G.upper,ue,oe)),(an=t.data).lower??(an.lower=G==null?void 0:G.lower),(Tn=t.data).upper??(Tn.upper=G==null?void 0:G.upper),t.visible=Vi(t.data.lower,t.data.upper);const ze=_i(y,G==null?void 0:G.lower,U==null?void 0:U.lower),En=_i(p,G==null?void 0:G.upper,U==null?void 0:U.upper),ve=Mi(l,u),On=Mi(c,f);return ze&&(Ri(ze,ve),t.changes.lower=ze),En&&(Ri(En,On),t.changes.upper=En),t.changesKeys=An(t.data,n),t}function Vi(r,e){return!!r||!!e}function _i(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:j.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:j.remove,beforeValue:e}:{type:r,action:j.replace,beforeValue:e,afterValue:n}}function Mi(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(uo(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),fo(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Ri(r,e){if(r)return uo(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),fo(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const xn={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},ys=r=>{var On,an,Tn,fr,ni,ri;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,s=n.value,l=s,u=(On=n.parent)==null?void 0:On.value,c=(an=n.parent)==null?void 0:an.value,f=ke(),y=Se(),p=_d(a),g=Md(a),h=Rd(s),b=qd(s),v=ko(s),E=Rt(s)||Rt(u),{any:w,string:S,number:T,object:V,array:k}=jc(a,s),R={minimum:s==null?void 0:s.minimum,exclusiveMinimum:s==null?void 0:s.exclusiveMinimum,maximum:s==null?void 0:s.maximum,exclusiveMaximum:s==null?void 0:s.exclusiveMaximum},C=(Tn=l==null?void 0:l.$changes)==null?void 0:Tn.minimum,I=(fr=l==null?void 0:l.$changes)==null?void 0:fr.exclusiveMinimum,F=(ni=l==null?void 0:l.$changes)==null?void 0:ni.maximum,H=(ri=l==null?void 0:l.$changes)==null?void 0:ri.exclusiveMaximum,B={minimum:Fn(C)?C:void 0,exclusiveMinimum:Fn(I)?I:void 0,maximum:Fn(F)?F:void 0,exclusiveMaximum:Fn(H)?H:void 0},{data:U,changes:re,changesKeys:ue,visible:$}=Fc(R,B,xn.valueRange),oe=An(S,xn.valueLength),$e=An(S,xn.valuePattern),Ce=An(T,xn.multipleOf),G=An(V,xn.propertiesCount),ze=An(k,xn.uniqueItems),En=An(k,xn.itemsCount),ve=oo(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(w==null?void 0:w.allowedValues)&&d.jsx(li,{shift:e,$changesKey:"enum",title:Id,items:w.allowedValues,layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),h&&d.jsxs(d.Fragment,{children:[(de(S==null?void 0:S.minLength)||de(S==null?void 0:S.maxLength))&&d.jsx(sn,{shift:e,$changesKeys:oe,title:Da,items:{minLength:S==null?void 0:S.minLength,maxLength:S==null?void 0:S.maxLength},layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes}),de(S==null?void 0:S.pattern)&&d.jsx(sn,{shift:e,$changesKeys:$e,title:wa,items:{pattern:S==null?void 0:S.pattern},layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes})]}),b&&d.jsxs(d.Fragment,{children:[$&&d.jsx(sn,{shift:e,$changesKeys:ue,title:Na,items:U,layoutMode:y,level:f,$nodeChange:ve,$changes:re}),de(T==null?void 0:T.multipleOf)&&d.jsx(sn,{shift:e,$changesKeys:Ce,title:Ea,items:{multipleOf:T==null?void 0:T.multipleOf},layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes})]}),E&&d.jsxs(d.Fragment,{children:[g&&d.jsx(sn,{shift:e,$changesKeys:[],title:Pd,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:ve}),p&&(V==null?void 0:V.allowedPropertyNames)&&d.jsx(li,{shift:e,$changesKey:"propertyNames",title:Od,items:V.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:ve,$changes:c==null?void 0:c.$changes}),(de(V==null?void 0:V.minProperties)||de(V==null?void 0:V.maxProperties))&&d.jsx(sn,{shift:e,$changesKeys:G,title:Ta,items:{minProperties:V==null?void 0:V.minProperties,maxProperties:V==null?void 0:V.maxProperties},layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes})]}),v&&d.jsxs(d.Fragment,{children:[de(k==null?void 0:k.uniqueItems)&&d.jsx(sn,{shift:e,$changesKeys:ze,title:xa,items:{uniqueItems:`${k.uniqueItems}`},layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),(de(k==null?void 0:k.minItems)||de(k==null?void 0:k.maxItems))&&d.jsx(sn,{shift:e,$changesKeys:En,title:ka,items:{minItems:k==null?void 0:k.minItems,maxItems:k==null?void 0:k.maxItems},layoutMode:y,level:f,$nodeChange:ve,$changes:l==null?void 0:l.$changes})]})]})};ys.__docgenInfo={description:"",methods:[],displayName:"Validations"};const ps=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,s=ke(),l=e.meta,u=l,c=e.value,f=c,y=Hd(),p=Se(),g=Ao(e),[h,b]=m.useState(!1),[v,E]=m.useState(0);m.useEffect(()=>{const C=e.children.filter(Xr).length===0;(!Ld(o)||e.expanded&&C)&&!o.isCycle?b(!0):b(e.expanded),E(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const w=!jd(o),S=!Jd(o),T=Co(o),V=T,k=ns(),R=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(ms,{nodeTitleData:Fd({node:o,nodeValue:c,nodeMeta:l,customizationOptions:k}),nodeTypeData:ga({node:o,nodeValue:c,customizationOptions:k}),isCircularRef:o.isCycle,readOnly:l==null?void 0:l.readOnly,writeOnly:l==null?void 0:l.writeOnly,deprecated:l==null?void 0:l.deprecated,isExpandable:g,expanded:e.expanded,sorted:v,isRoot:T,onToggleExpander:t,onToggleSort:a,layoutMode:p,level:s,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&h&&w&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:S&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(Kd,{shift:V,state:e,$nodeChange:i}),d.jsx(ys,{shift:V,state:e,$nodeChange:i}),R&&d.jsx(cs,{extensions:R,$nodeChange:i})]})})]})};ps.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const gs=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=Se();return d.jsx(d.Fragment,{children:n.map((s,l)=>Xr(s)?d.jsxs("div",{children:[!e&&i&&s.first&&d.jsx(Gd,{shift:!1,NodeType:xo,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(st,{state:s,$nodeChange:a},`prop-${l}`)]},`prop-${l}`):Qr(s)?d.jsx(rt,{state:s,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${l}`):null)})};gs.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const st=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,s=o.filter(re=>!Qr(re)),l=i,u=e.meta,c=Co(a),f=Rt(i),y=ko(i),p=Bd(i),g=ke(),h=e.node.newDataLevel,b=!c&&h?g+1:g,v=Ao(e),[E,w]=m.useState(!1),[,S]=m.useState(0);m.useEffect(()=>{w(e.expanded),S(e.sorted)},[e.expanded,e.sorted]);const[,T]=m.useState(),V=re=>{re&&(e.setSelected(re),T(e.selected))},[k,R]=m.useState(void 0),C=re=>{if(re){const ue=$d(re);R(ue)}},I=t??(u==null?void 0:u.$nodeChange),F=Xl(s),H=n==="parameters"&&c&&(f||y)&&!p,B=ga({node:a,nodeValue:i});B==null||delete B.combiner;const U=B?{nodeTypeData:B,nodeDepth:b+1,$nodeChange:I??F,$changes:l==null?void 0:l.$changes}:void 0;return d.jsx(Pe.Provider,{value:b,children:d.jsx(Ud,{value:k,setValue:C,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(ps,{state:e,disableNestingHeader:H,onToggleExpander:re=>Yd(e,w,re),onToggleSort:()=>Wd(e,S),$nodeChange:I}),v&&E&&d.jsx(gs,{disableNestingHeader:H,items:o,onGlobalSelectNestedNode:V,$nodeChange:I,nestingIndicatorTitleData:U})]})})})};st.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const lt=r=>d.jsx(hn,{fallback:d.jsx(bn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(Kc,{...r})}),Kc=r=>{const{schema:e,expandedDepth:n=Kr,displayMode:t=vn,layoutMode:a=so,filters:i=[],overriddenKind:o,metaKeys:s,topLevelPropsMediaTypes:l}=r;Fr(e,s.diffsMetaKey,s.aggregatedDiffsMetaKey);const u=m.useMemo(()=>Yf(e,s),[s,e]),c=m.useMemo(()=>new Eo(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return Xr(f)&&(y=d.jsx(st,{state:f,overriddenKind:o})),Qr(f)&&(y=d.jsx(rt,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(_a.Provider,{value:l,children:d.jsx(Ql.Provider,{value:i,children:d.jsx(Sn.Provider,{value:t,children:d.jsx(_n.Provider,{value:a,children:d.jsx(zr.Provider,{value:s,children:d.jsx(Pe.Provider,{value:0,children:y})})})})})})};lt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const Gc=" or null",Bc=" ";function Vn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if($n(r))return"";const n=r,t=(n==null?void 0:n.type)??Gn,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n!=null&&n.nullable?Gc:"",o=[String(t)];return a&&o.push(String(a)),i&&o.push(i.trim()),o.join(Bc)}function qi(r){return r!=null}function hs(r){const e=Pn(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(De.MIN_LENGTH),t.maxLength!==void 0&&n.push(De.MAX_LENGTH),t.pattern!==void 0&&n.push(De.PATTERN);const a=e;a.minimum!==void 0&&n.push(De.MINIMUM),a.maximum!==void 0&&n.push(De.MAXIMUM),qi(a.exclusiveMinimum)&&n.push(De.EXCLUSIVE_MINIMUM),qi(a.exclusiveMaximum)&&n.push(De.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(De.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(De.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(De.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(De.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(De.MIN_ITEMS),o.maxItems!==void 0&&n.push(De.MAX_ITEMS),n}function Uc(r){return r!=null}function Yc(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const Wc="x-deprecated-reason";function $c(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[Wc];return typeof e=="string"&&e.length>0?e:void 0}class bs{resolveNodeVisibility(e,n){const t=e.value(),a=Pn(t),i=ho(n),o=$c(a),s=i&&!!(a!=null&&a.description),l=i&&!!o,u=i&&Uc(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&hs(t).length>0,p=i&&Yc(a),g=u||c||f||y||p;return{showDescription:s,showDeprecationReasonRow:l,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:p,showContentSection:s||l||g,showAnyAdditionalInfoRow:g}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.isCycle)return!1;if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&Po(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const zn=new bs;function Pa(r,e){return zn.resolveNodeVisibility(r,e)}function Oa(r,e){return zn.resolveListLastRowFlags(r,e)}function zc(r,e){return zn.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function Ss(r){return zn.resolveIsExpandable(r)}function vs(r,e){return zn.resolveInitiallyExpanded(r,e)}function Cn(r,e){return zn.resolveExpanderExpanded(r,e)}const Ds=" or null";function ws(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Xc(r,e){const n=Pn(r.value()),t=(n==null?void 0:n.type)??Gn,a=ws(r);return $r(t,a==null?void 0:a.type,e)??String(t)}function Ns(r,e,n){if(e!=null&&e.brokenRef)return{kind:en.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if($n(t))return{kind:en.NO_DIFFS,text:""};const a=ws(r);if(!a)return{kind:en.NO_DIFFS,text:Vn(t,e)};if(Qc(a)){const c=Object.values(a).find(Boolean);return c?{kind:en.WHOLE_DIFFS,text:Zc(t,a,n),diff:rm(c)}:{kind:en.NO_DIFFS,text:Vn(t,e)}}const i=[],o=em(t,a.type,n);o&&i.push(o);const s=Ii(Es(t),a.format,n,Ts);s&&i.push(s);const l=Ii(t==null?void 0:t.title,a.title,n,xs);l&&i.push(l);const u=nm(t);return u&&i.push(u),i.length===0?{kind:en.NO_DIFFS,text:Vn(t,e)}:{kind:en.PARTIAL_DIFFS,segments:i}}function Qc(r){const e=jo.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function Zc(r,e,n){const t=[],a=$r((r==null?void 0:r.type)??Gn,e.type,n)??(r==null?void 0:r.type)??Gn;t.push(String(a));const i=Jt(Es(r),e.format,n,Ts);i&&t.push(i);const o=Jt(r==null?void 0:r.title,e.title,n,xs);return o&&t.push(o),r!=null&&r.nullable&&t.push(Ds.trim()),t.join(" ")}function em(r,e,n){const t=(r==null?void 0:r.type)??Gn,a=$r(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function Ii(r,e,n,t){const a=Jt(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function Jt(r,e,n,t){const a=$r(r,e,n);if(a===void 0)return!e&&Pi(r)?t(r):void 0;if(Pi(a))return t(a)}function nm(r){if(!($n(r)||!(r!=null&&r.nullable)))return{text:Ds.trim()}}function Es(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function Pi(r){return!!r&&r.trim().length>0}function Ts(r){return`(${r})`}function xs(r){return`<${r}>`}function rm(r){const{data:e}=r;return O(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow}}}:A(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Green}}}:x(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function tm(r){return r.diffs}function am(r){return tm(r)[mn]??r.diffs[M]}function Xn(r){return r.diffs}function Ha(r){return Xn(r).nestingIndicatorRowColorizingDiff}function im(r){var e;return(e=As(r))==null?void 0:e.required}function ks(r){if(!(r!=null&&r.data))return;const e=r.data;return A(e)?{type:e.type,scope:e.scope,description:e.description,action:j.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:x(e)?{type:e.type,scope:e.scope,description:e.description,action:j.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:O(e)?{type:e.type,scope:e.scope,description:e.description,action:j.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function om(r){return ks(im(r))}function As(r){if(r.kind===Y.PROPERTY)return r.diffs}function Cs(r){const e=Xn(r),n=As(r),t={};for(const i of Kn){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=ks(a)),t}function Nn(r){return r.diffs}function Ft(r){return Nn(r).default}function Vs(r){return Nn(r).defaultRowColorizingDiff}function _s(r){return Nn(r).enumDiff}function Ms(r){return Nn(r).enumValueDiffs}function Rs(r){return Nn(r).enumRowColorizingDiff}function qs(r){return Nn(r).examplesDiff}function Is(r){return Nn(r).examplesValueDiffs}function Ps(r){return Nn(r).examplesRowColorizingDiff}function jr(r,e){var n;return(n=Xn(r).validationRowDiffs)==null?void 0:n[e]}function Os(r,e){var n;return(n=Xn(r).validationRowValueDiffs)==null?void 0:n[e]}function La(r,e){var n;return(n=Xn(r).validationRowColorizingDiffs)==null?void 0:n[e]}function sm(r){return Xn(r).valueRangeCrawlDiffs}function Oi(r,e){if(jr(r,e)||La(r,e))return!0;const n=Os(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}function Jn(r){return typeof r=="string"?r:JSON.stringify(r)}function Hi(r,e,n){if(!e)return r===void 0?[]:[{text:Jn(r)}];const t=n===W,{data:a}=e;if(A(a))return t?[]:[{text:Jn(a.afterValue??r)}];if(x(a))return t?[{text:Jn(a.beforeValue??r)}]:[];if(O(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Jn(i)}]}return r===void 0?[]:[{text:Jn(r)}]}function Ae(r){return Jn(r)}function ja(r,e,n){const t=n===W,{data:a}=e;return A(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ae(o)})):x(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Ae(o)})):[]:O(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ae(o)})):r.map(i=>({text:Ae(i)}))}function Hs(r,e,n){const t=n===W,a=new Set,i=[];for(let s=0;s<r.length;s++){const l=String(s),u=e==null?void 0:e[l],c=Ae(r[s]);if(!u){i.push({text:c});continue}if(a.has(l))continue;a.add(l);const{data:f}=u;if(A(f)){t||i.push({text:Ae(f.afterValue??r[s]),valueDiffKey:l});continue}if(x(f)){t&&i.push({text:Ae(f.beforeValue??r[s]),valueDiffKey:l});continue}O(f)&&i.push({text:Ae(t?f.beforeValue??r[s]:f.afterValue??r[s]),valueDiffKey:l})}for(const[s,l]of Object.entries(e??{}))!l||a.has(s)||x(l.data)&&t&&(i.push({text:Ae(l.data.beforeValue),valueDiffKey:s}),a.add(s));const o=s=>{for(let l=0;l<r.length;l++)if(Ae(r[l])===s)return l;return r.length};return i.sort((s,l)=>o(s.text)-o(l.text))}function Qn(r,e,n,t){return n===void 0?t:Uo(r,e,n)}function lm(r,e,n){if(e)return Object.keys(e).find(t=>Yo(t,r)===n)}function dm(r,e,n,t){const a=t===W,i=new Set,o=[];for(let l=0;l<e.length;l++){const u=lm(e,n,l),c=u?n==null?void 0:n[u]:void 0,f=Ae(e[l]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(A(y)){a||o.push({text:Qn(r,u,y.afterValue??e[l],f),valueDiffKey:u});continue}if(x(y)){a&&o.push({text:Qn(r,u,y.beforeValue??e[l],f),valueDiffKey:u});continue}O(y)&&o.push({text:a?Qn(r,u,y.beforeValue??e[l],f):Qn(r,u,y.afterValue??e[l],f),valueDiffKey:u})}for(const[l,u]of Object.entries(n??{}))!u||i.has(l)||x(u.data)&&a&&(o.push({text:Qn(r,l,u.data.beforeValue,Ae(u.data.beforeValue)),valueDiffKey:l}),i.add(l));const s=(l,u)=>{if(l)return Yo(l,e);for(let c=0;c<e.length;c++)if(Ae(e[c])===u)return c;return e.length};return o.sort((l,u)=>s(l.valueDiffKey,l.text)-s(u.valueDiffKey,u.text))}function um(r,e,n,t){return e?ja(r,e,t):Hs(r,n,t)}function fm(r,e,n,t){return e?ja(r,e,t):Hs(r,n,t)}function cm(r,e,n,t,a,i){return r===te.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?vf(Ht(i.nodeValue),i.crawlDiffs,a,n,t):n?ja(e,n,a):dm(r,e,t,a)}function wt(r,e){return e?r==null?void 0:r[e]:void 0}const mm=new bs;function ym(r){return r!=null}function pm(r){return Object.keys(Pt).some(e=>!!jr(r,e)||!!La(r,e))}class gm{resolveNodeVisibility(e,n){const t=e.value(),a=Pn(t),i=mm.resolveNodeVisibility(e,n),o=ho(n),s=o&&(!!(a!=null&&a.description)||!!e.diffs.description),l=o&&(i.showEnumValuesRow||!!_s(e)||!!Ms(e)||!!Rs(e)),u=o&&(ym(a==null?void 0:a.default)||!!Ft(e)||!!Vs(e)),c=o&&(i.showExamplesRow||!!qs(e)||!!Is(e)||!!Ps(e)),f=o&&(hs(t).length>0||pm(e)),y=u||c||l||f||i.showExtensionsRow,p=s||i.showDeprecationReasonRow||y;return{...i,showDescription:s,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:l,showValidationsSection:f,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Oa(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return zc(e,n)}}const hm=new gm;function Ja(r,e){return hm.resolveNodeVisibility(r,e)}function Ls(r,e){return r.isCycle?!1:Ss(r)?e.hideUnchangedNodes?e.isRoot||r.kind===Y.ROOT?!0:$o(r):e.level<e.expandedDepth:!0}var gn=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(gn||{});const bm={[gn.JsonSchema]:fa};function Sm(r){return bm[r]??sr}const rr=m.memo(r=>{const{title:e,layoutSide:n,usage:t=gn.Default,lastInvisible:a=!1,diff:i}=r,{[ie]:o}=r,s=ke(),l=m.useMemo(()=>Sm(t),[t]),u=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:g}=i,h=[];return n===W&&h.push(Z.background(g.before.backgroundColor)),n===X&&h.push(Z.background(g.after.backgroundColor)),h},[i,n]),c=m.useMemo(()=>{const g=i==null?void 0:i.data;return g?A(g)?n===X:x(g)?n===W:!0:!0},[i,n]),f=t===gn.JsonSchema,y=typeof e=="function"?e(n):e,p=c&&y!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":o,className:["nesting-indicator-title-row-content flex w-full h-full",f?"items-stretch":"",l,...u].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":o,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(Mn,{level:s,lastInvisible:a})}),f?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:p&&d.jsx(di,{title:y})}):p&&d.jsx(di,{title:y})]})});rr.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const dt=m.memo(r=>{const e=Se(),{diffsSeverities:n,diffsSeverityPlacement:t=K.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>or(a==null?void 0:a.causedAt),[a]);switch(e){case xe:return d.jsx(qn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Dn,{left:d.jsx(rr,{...r,layoutSide:W}),right:d.jsx(rr,{...r,layoutSide:X})})});case Ye:return d.jsx(Rn,{content:d.jsx(rr,{...r,layoutSide:X})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});dt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const Fa=m.createContext(null);function js(){const r=m.useContext(Fa);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const vm=new Set([Y.ALL_OF,Y.ANY_OF,Y.ONE_OF]);class Dm{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>1,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return vm.has(e)}}const Js=new Dm;function wm(r){return Js.resolveNodeVisibility(r)}function Ka(r){return Js.isCombinerKind(r)}function Ga(r){return r.kind===Y.ROOT}function Bn(r){if(r.type!==le.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:Ga(r)?!0:e.every(n=>Ka(n.kind))}function Nm(r){return Ka(r)}function Em(r){return Vn(r.value(),r.meta())}function Fs(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!Nm(n)))return n}function Ks(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function Gs(r,e){const n=[];let t=r;for(;t&&Bn(t);){const a=t.nestedNodes(),i=Ks(t,a,e);if(!i)break;const o=wm(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:Fs(t)}),Bn(i)){t=i;continue}break}return n}function Tm(r,e){let n=r;for(;Bn(n);){const t=n.nestedNodes(),a=Ks(n,t,e);if(!a)break;n=a}return n}function xm(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set(Gs(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function Bs(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!q(n)||Pr(n)?null:n}function km(r){if(r.type===le.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Ka(n.kind))?e:r.childrenNodes()}const Kt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}};function Us(r){return r&&O(r.data)?{...r,styles:Kt}:{data:{type:"annotation",action:j.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:Kt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}function er(r){const e=r.data,n={type:e.type,causedAt:[]};return x(e)||O(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:A(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function Am(r){return er({data:r,styles:Kt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie})}function Gt(r,e){if(!(!r||typeof r!="object")){if(ua(r)){e.push(r);return}for(const n of Object.values(r))Gt(n,e)}}function Cm(...r){let e;for(const n of r)n&&(!e||Ee.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function Vm(r){const e=r.diffs[M];return!!e&&(A(e.data)||x(e.data))}function _m(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function Ys(r){return ye(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>ye(e)&&_m(e)):!1}function Mm(r){if(!(!ye(r)||!Ys(r)))return Us(r.diffs[M])}function Rm(r){if(!ye(r)||!Ys(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(er(o));for(const o of r.nestedNodes()){if(!ye(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const s=[];for(const u of Object.values(o.diffs))Gt(u,s);for(const u of s)e.push(er(u));const l=_t([...o.diffsSummary,...o.descendantDiffsSummary]);l&&e.push({type:l,causedAt:[]})}const n=r.diffs[M];n&&e.push(er(n));const t=[];for(const o of Object.values(r.diffs))Gt(o,t);for(const o of t)e.push(er(o));const a=_t([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=Cm(...e);if(!i){const o=Us(n);return{[K.TitleRow]:Am(o.data)}}return{[K.TitleRow]:i}}function qm(r){if(ye(r)){const e=Ha(r);if(e){const n=r.diffsSeverities[K.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[K.TitleRow]:n}:void 0}}}return{selectorRowDiff:Mm(r),diffsSeverities:Rm(r)}}function Im(r){if(!Bn(r))return"";const e=Fs(r);return e?` (${e})`:""}function Pm(r,e){const n={title:Vn(Bs(r),r.meta())+Im(r),node:r,testId:`json-schema-combiner-option-${e}`};if(!ye(r))return n;const t=Vm(r);return{...n,diffs:r.diffs,...t?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}const Ws=r=>d.jsx(Za,{...r});Ws.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const Ba=m.createContext(null);function Om(){const r=m.useContext(Ba);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function $s(){return m.useContext(Ba)}function Hm(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({hideUnchangedNodes:r,revealedBlockIds:e,revealBlock:t}),[r,e,t])}function Lm(r,e,n){return r.diff?d.jsx(dd,{isVisible:!0,value:r.text,appearance:Mt.Text,textHighlighterColor:bo(r.diff,n)},`${r.text}-${e}`):d.jsx(So,{isVisible:!0,value:r.text,appearance:Mt.Text},`${r.text}-${e}`)}const Ua=m.memo(r=>{const{display:e,layoutSide:n}=r;return e.kind===en.NO_DIFFS||e.kind===en.WHOLE_DIFFS?d.jsx(ld,{layoutSide:n,display:e}):d.jsx("span",{className:"inline-flex items-center gap-1",children:e.segments.map((t,a)=>Lm(t,a,n))})}),zs=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r,a=Ns(e,n,t);return d.jsx(Ua,{display:a,layoutSide:t})});Ua.__docgenInfo={description:`Renders an already-resolved {@link SideListDisplay} (type/format/title segments with
per-side diff highlighting). Extracted so other rows - e.g. the nesting-indicator row -
can render type/format/title in exactly the same format as the title row subheader.`,methods:[],displayName:"JsonSchemaTypeLabelSideDisplay",props:{display:{required:!0,tsType:{name:"union",raw:`| {
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};zs.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Xs=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r,a=Xc(e,t);if(Io(a))return null;const i=Ns(e,n,t);return d.jsx(Ua,{display:i,layoutSide:t})});Xs.__docgenInfo={description:`Nesting-indicator row content for a node's children header, rendered in the exact same
format as the title row subheader (type/format/title, per-side diff resolution and
highlighting) - invisible on a side whose resolved type is primitive, since a primitive
type never has children to introduce.`,methods:[],displayName:"NestingIndicatorTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function jm(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Mr=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[ie]:o}=r,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Mn,{level:i}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx("button",{type:"button",className:"button-selector-option button-selector-option_secondary",onClick:s,children:jm(n)})})]})});Mr.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Qs=m.memo(r=>{const e=Se(),n=ke();switch(e){case xe:return d.jsx(Dn,{left:d.jsx(Mr,{...r,layoutSide:"before",level:n}),right:d.jsx(Mr,{...r,layoutSide:"after",level:n})});case Ye:return d.jsx(Rn,{content:d.jsx(Mr,{...r,layoutSide:"after",level:n})});default:return null}});Qs.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Ya=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=Om(),i=wo(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:s}=m.useMemo(()=>_f(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:s.map((l,u)=>{const c=u===s.length-1;return l.kind==="placeholder"?t.has(l.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(l.sourceIndex,l.sourceIndex+l.blockSize).map((f,y)=>d.jsx(Un,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===l.blockSize-1},f.id))},l.unchangedBlockId):d.jsx(Qs,{unchangedBlockId:l.unchangedBlockId,count:l.blockSize,onReveal:a},l.unchangedBlockId):d.jsx(Un,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:l.node,isLastInList:c},l.node.id)})})};Ya.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const Bt=5;function Jm(r){return sa.trim(r.split(`
`)).length>Bt}function Fm(r,e){const n=sa.trim(r.split(`
`));return n.length<=Bt||e?r:n.slice(0,Bt).join(`
`)}const Km="markdown-text-row__json-schema-description",Gm="markdown-text-row__json-schema-expander",Bm=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function Um(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===W;return A(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:x(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:O(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function Ym(r){switch(r){case L.body1:return"text-value-body1";case L.h1:case L.h2:case L.h3:case L.h4:case L.h5:case L.h6:return"text-value-body2";case L.body2:default:return"text-value-body2"}}function Wm(r){switch(r){case L.h1:return"text-value-expander--h1";case L.h2:return"text-value-expander--h2";case L.h3:return"text-value-expander--h3";case L.h4:return"text-value-expander--h4";case L.h5:return"text-value-expander--h5";case L.h6:return"text-value-expander--h6";case L.body1:return"text-value-expander--body1";case L.body2:default:return"text-value-expander--body2"}}function $m(r,e){return r===qe.JsonSchemaDescription?{markdownClassName:Km,expanderClassName:Gm}:{markdownClassName:["text-slate-700",Ym(e)].join(" "),expanderClassName:`text-value-expander ${Wm(e)}`.trim()}}const Zs=m.memo(r=>{const{value:e,variant:n=L.body2,usage:t,layoutSide:a,diff:i}=r,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>Um(e,i,a),[i,a,e]),c=m.useMemo(()=>Fm(l,o),[o,l]),f=m.useMemo(()=>Jm(l),[l]),y=m.useMemo(()=>$m(t,n),[t,n]),p=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const b=a===W?i.styles.before:i.styles.after,v=[];return b.textHighlighterColor&&v.push(Z.highlighter(b.textHighlighterColor)),v},[i,a]),g=m.useMemo(()=>["markdown",y.markdownClassName,...p].filter(Boolean).join(" "),[p,y.markdownClassName]),h=m.useCallback(()=>{s(b=>!b)},[]);return u||!c?null:d.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[d.jsx(zd,{className:g,remarkPlugins:[Xd],children:c}),d.jsx(Bm,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});Zs.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const zm={[qe.DdlApiProperty]:ud,[qe.JsonSchemaDescription]:fa},Xm={[qe.DdlApiProperty]:["min-h-[26px]"]};function Qm(r){const e=zm[r]??sr,n=Xm[r]??[];return[e,...n].join(" ")}function Zm(r,e,n){return n===qe.DdlApiProperty?cd(r,e):r!=null&&r.data?(e===W?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Rr=m.memo(r=>{const{value:e,variant:n=L.body2,layoutSide:t,usage:a=qe.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[ie]:s}=r,l=ke(),u=a===qe.DdlApiProperty,c=u||a===qe.JsonSchemaDescription,f=m.useMemo(()=>Zm(o,t,a),[o,t,a]),y=a===qe.JsonSchemaDescription&&l===0,p=c&&l>0&&(!i||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:v}=o,E=[];return t===W&&E.push(Z.background(v.before.backgroundColor)),t===X&&E.push(Z.background(v.after.backgroundColor)),E},[o,t]),h=m.useMemo(()=>Qm(a),[a]),b=d.jsx(Zs,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===qe.JsonSchemaDescription?"items-stretch":"",h,...g].filter(Boolean).join(" "),children:[y&&d.jsx(fd,{}),p&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Mn,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):a===qe.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});Rr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ut=m.memo(r=>{const e=Se(),{diffsSeverities:n,diffsSeverityPlacement:t=K.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>or(a==null?void 0:a.causedAt),[a]);switch(e){case xe:return d.jsx(qn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Dn,{left:d.jsx(Rr,{...r,layoutSide:W}),right:d.jsx(Rr,{...r,layoutSide:X})})});case Ye:return d.jsx(Rn,{content:d.jsx(Rr,{...r,layoutSide:X})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Ut.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function ey(r){return r?Ue({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const kn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:De.UNIQUE_ITEMS};function Nt(r,e,n,t){const a=Ue({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function ny(r){const e=ey(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function ry(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=Nt(n.minLength,n.maxLength);o.length&&e.push({key:kn.VALUE_LENGTH,label:Da,values:o}),n.pattern!==void 0&&e.push({key:kn.VALUE_PATTERN,label:wa,values:[String(n.pattern)]});const s=Nt(a.minProperties,a.maxProperties);s.length&&e.push({key:kn.PROPERTIES_COUNT,label:Ta,values:s}),i.uniqueItems!==void 0&&e.push({key:kn.UNIQUE_ITEMS,label:xa,values:[String(i.uniqueItems)]});const l=Nt(i.minItems,i.maxItems);l.length&&e.push({key:kn.ITEMS_COUNT,label:ka,values:l}),t.multipleOf!==void 0&&e.push({key:kn.VALUE_MULTIPLE_OF,label:Ea,values:[String(t.multipleOf)]});const u=ny(t);return u.length&&e.push({key:kn.VALUE_RANGE,label:Na,values:u}),e}const el=r=>{const{extensions:e}=r,t=ke()+1;return d.jsx(Pe.Provider,{value:t,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(dt,{title:"Extensions",usage:gn.JsonSchema,lastInvisible:!0}),d.jsx(dr,{source:e,initialLevel:t})]})})};el.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""}}};const nr=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-center gap-2",children:n.map((t,a)=>d.jsx(md,{isVisible:!0,value:t.text,usage:yd.JsonSchemaValidation,textHighlighterColor:bo(t.diff,e),borderShadowColor:pd(t.diff,e),isFontMuted:gd(t.diff,e)},`${t.text}-${a}`))}):null});nr.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Li={valueLength:Da,valuePattern:wa,valueRange:Na,valueMultipleOf:Ea,propertiesCount:Ta,itemsCount:ka,uniqueItems:xa};function ty(r){return ye(r)&&(r.kind===Y.PROPERTY||r.kind===Y.ROOT)}const Wa=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Je(),i=n??e.value(),o=Pn(i),s=ty(e)?e:void 0,l=ye(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?Ja(s,a):Pa(n!==void 0?{value:()=>n}:e,a),[a,n,e,s]),c=m.useMemo(()=>s?_s(s):void 0,[s]),f=m.useMemo(()=>s?Ms(s):void 0,[s]),y=m.useMemo(()=>s?Rs(s):void 0,[s]),p=m.useMemo(()=>s?qs(s):void 0,[s]),g=m.useMemo(()=>s?Is(s):void 0,[s]),h=m.useMemo(()=>s?Ps(s):void 0,[s]),b=m.useMemo(()=>s?Ft(s):void 0,[s]),v=m.useMemo(()=>s?Vs(s):void 0,[s]),E=lr(e,ye),w=m.useMemo(()=>ae(E,{diffKey:"description",diffsSeverityPlacement:K.DescriptionRow}),[E]),S=m.useMemo(()=>{const C=ry(o);if(!l)return C;const I=new Set(C.map(H=>H.key)),F=Object.keys(Li).filter(H=>!I.has(H)).filter(H=>Oi(l,H)).map(H=>({key:H,label:Li[H],values:[]}));return[...C,...F]},[l,o]),T=m.useCallback(C=>{const I=um((o==null?void 0:o.enum)??[],c,f,C);return I.length===0?d.jsx(d.Fragment,{}):d.jsx(nr,{layoutSide:C,sideItems:I.map(({text:F,valueDiffKey:H})=>({text:F,diff:wt(f,H)}))})},[c,f,o==null?void 0:o.enum]),V=m.useCallback(C=>{const I=fm((o==null?void 0:o.examples)??[],p,g,C);return I.length===0?d.jsx(d.Fragment,{}):d.jsx(nr,{layoutSide:C,sideItems:I.map(({text:F,valueDiffKey:H})=>({text:F,diff:wt(g,H)}))})},[p,g,o==null?void 0:o.examples]),k=m.useCallback(C=>{const I=o==null?void 0:o.default,F=s?Hi(I,Ft(s),C):Hi(I,void 0,C);return F.length===0?d.jsx(d.Fragment,{}):d.jsx(nr,{layoutSide:C,sideItems:F.map(({text:H})=>({text:H,diff:b}))})},[b,s,i]),R=m.useCallback((C,I)=>F=>{const H=l?jr(l,C):void 0,B=l?Os(l,C):void 0,U=cm(C,I,H,B,F,C===te.VALUE_RANGE&&l?{nodeValue:i,crawlDiffs:sm(l)??{}}:void 0);return U.length===0?d.jsx(d.Fragment,{}):d.jsx(nr,{layoutSide:F,sideItems:U.map(({text:re,valueDiffKey:ue})=>({text:re,diff:wt(B,ue)}))})},[l,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(Ut,{usage:qe.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||w.diff)&&d.jsx(Ut,{usage:qe.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...w}),u.showEnumValuesRow&&d.jsx(yr,{label:"Allowed values",usage:pr.JsonSchemaValidation,subheader:T,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?E==null?void 0:E.nodeDiffsSeverities:void 0,...Oa(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showDefaultRow&&d.jsx(yr,{label:"Default",usage:pr.JsonSchemaValidation,subheader:k,colorizingDiff:v,diffsSeverities:b||v?E==null?void 0:E.nodeDiffsSeverities:void 0}),u.showExamplesRow&&d.jsx(yr,{label:"Examples",usage:pr.JsonSchemaValidation,subheader:V,diff:p,colorizingDiff:h,diffsSeverities:p||g||h?E==null?void 0:E.nodeDiffsSeverities:void 0}),u.showValidationsSection&&S.map(C=>{const I=C.key,F=l?jr(l,I):void 0,H=l?La(l,I):void 0;return d.jsx(yr,{label:C.label,usage:pr.JsonSchemaValidation,subheader:R(I,C.values),diff:F,colorizingDiff:H,diffsSeverities:l&&Oi(l,I)?E==null?void 0:E.nodeDiffsSeverities:void 0},C.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(el,{extensions:o.extensions})]})};Wa.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ay(r){const e=Cs(r),n={};for(const t of Kn){const a=e[t];a&&(n[t]=a)}return n}function iy(r,e){var l;const n=!!r.diffs[M],t=Cs(r),a=ay(r),i=t.required,o=i?{...a,required:i}:a,s=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:s,requiredChanged:!n&&!!i,$nodeChange:(l=r.diffs[M])==null?void 0:l.data,$metaChanges:o}}const nl=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(So,{isVisible:!0,value:Vn(e,n),appearance:Mt.Text}),t&&d.jsx(ha,{text:ba,children:d.jsx(Sa,{})}),d.jsx(va,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},rl=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0}=r;Se();const o=iy(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(zs,{node:n,meta:e,layoutSide:a}),t&&d.jsx(ha,{text:ba,children:d.jsx(Sa,{})}),d.jsx(va,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...o})]})};nl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""}}};rl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""}}};const oy="Type: ";function sy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return Ga(e)?{variant:"text",text:t??oy}:a===Y.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:Zl}:{variant:"badge",text:"additional property",badgeKind:mr}:a===Y.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:mr}:a===Y.ITEMS?{variant:"badge",text:"item",badgeKind:mr}:a===Y.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:mr}:a===Y.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function ly(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===Y.ADDITIONAL_PROPERTIES&&n===!1}function dy(r,e,n,t,a){const i=r===!0&&!de(e)||!!e&&(e.action===j.remove&&t||e.action===j.add&&a||e.action===j.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const tl=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=Se(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=lo(a),{originSide:s,changedSide:l}=ed(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!dy(e,n,o,s,l)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};tl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const al="text-xs text-black font-Inter-Medium",il=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(co,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${al}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},ol=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(co,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${al}`,children:[e.text,d.jsx(tl,{required:n,requiredDiff:t,layoutSide:a})]})}};il.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};ol.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function uy(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=r,u=ns(),c=e.meta(),f=Pn(t??n.value()),y=n.meta(),p=m.useMemo(()=>Oa(i,a),[a,i]),g=m.useMemo(()=>sy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),h=m.useMemo(()=>v=>{const E=vo(l);return(E?Do(E,v):hd(l,v))?s?d.jsx(ol,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:v}):d.jsx(il,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,l,s]),b=m.useMemo(()=>!ly(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:p,titleContent:h,showTypeSubheader:b}}const $a=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[ie]:p}=r,{displayValueResolved:g,displayMeta:h,listLastRowFlags:b,titleContent:v,showTypeSubheader:E}=uy({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(fe,{...b,"data-precededby":p,titleContent:v,expandable:o,expanded:s,isRoot:Ga(e),onClickExpander:o?l:void 0,variant:L.body2,subheader:w=>y({layoutSide:w,displayValueResolved:g,displayMeta:h,displayNode:n,showTypeSubheader:E}),usage:Wr.JsonSchemaProperty,...u})};$a.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const za=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,...u}=r;return d.jsx($a,{...u,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:c,displayValueResolved:f,displayMeta:y,displayNode:p,showTypeSubheader:g})=>d.jsx(nl,{value:f,meta:y,isCycle:p.isCycle,layoutSide:c,showTypeLabel:g})})};za.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function fy(r){return ae(rn(r),{resolveDiff:()=>am(r)})}const Xa=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,...c}=r,f=m.useMemo(()=>u??fy(n),[n,u]),y=m.useMemo(()=>om(e),[e]);return d.jsx($a,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:f,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:p,displayMeta:g,displayNode:h,showTypeSubheader:b})=>Do(vo(f.diff),p)?d.jsx(rl,{meta:g,node:n,isCycle:h.isCycle,layoutSide:p,showTypeLabel:b}):d.jsx(d.Fragment,{})})};Xa.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""}}};function cy(r){return ye(r)&&r.kind===Y.PROPERTY}const Qa=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Je(),i=ke(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=js(),u=cy(e)?e:void 0,c=ye(e)?e:void 0,f=$s(),y=m.useMemo(()=>u?Ja(u,a):Pa(e,a),[a,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,l]),g=m.useMemo(()=>Ss(e),[e,l]),h=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Ls(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===Y.ROOT}):vs(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),b=m.useMemo(()=>Cn(e,h),[h,e,l]),[v,E]=m.useState(b);m.useEffect(()=>{E(k=>Cn(e,k))},[e,l]);const w=m.useCallback(()=>{E(k=>{const R=!k;return R&&s(e),Cn(e,R)})},[s,e]),S=!g||v,T=m.useCallback(k=>{if(c)return d.jsx(Xs,{node:c,meta:c.meta(),layoutSide:k});const R=Pn(e.value());return Io(R==null?void 0:R.type)?null:Em(e)},[e,c]),V=m.useMemo(()=>c?Ha(c):void 0,[c]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(Xa,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:g,expanded:v,onClickExpander:w}):d.jsx(za,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:g,expanded:v,onClickExpander:w}),S&&d.jsxs(d.Fragment,{children:[d.jsx(Wa,{node:e,isLastInList:n&&p.length===0}),!e.isCycle&&p.length>0&&d.jsxs(Pe.Provider,{value:i+1,children:[d.jsx(dt,{title:T,usage:gn.JsonSchema,lastInvisible:!0,diff:V,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:K.NestingIndicatorRow}),c&&f?d.jsx(Ya,{children:p}):p.map((k,R)=>c?d.jsx(Un,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:k,isLastInList:R===p.length-1},k.id):d.jsx(ct,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:k,isLastInList:R===p.length-1},k.id))]})]})]})};Qa.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const sl=r=>d.jsx(Qa,{...r});sl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const Un=r=>{const{node:e}=r;return Bn(e)?d.jsx(Ws,{...r}):d.jsx(sl,{...r})};Un.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ji=new Set;function ut(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=X}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=my({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(l)return null;const u=s.join(" ");return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:c=>{c.preventDefault(),c.stopPropagation(),t(o)},children:o.title},o.node.id)})})}function my(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[M];if(s){const{styles:l}=s;switch(a){case W:s.inherited||i.push(Z.borderShadow(l.before.borderShadowColor)),o=s.data.action===j.add;break;case X:s.inherited||i.push(Z.borderShadow(l.after.borderShadowColor)),o=s.data.action===j.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??ji,u=t??ji,c=new Set([...l,...u]),f=_t(c);i.push(f?Z.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}ut.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var ft=(r=>(r.Primary="primary",r.Secondary="secondary",r))(ft||{});function yy(r,e){if(!r)return"";const n=e===W?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return Z.background(n)}const py=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i}=r,o=ke(),s=m.useMemo(()=>yy(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${fa} ${s}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Mn,{level:o}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(ut,{options:e,selectedOption:n,onSelectOption:t,variant:ft.Secondary,layoutSide:i})})]})}),Et=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(rr,{title:e,usage:gn.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t}),n&&d.jsx(py,{...r})]})}),ll=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=Se(),i=m.useMemo(()=>t==null?void 0:t[K.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>or(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case xe:return d.jsx(qn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Dn,{left:d.jsx(Et,{...r,layoutSide:W}),right:d.jsx(Et,{...r,layoutSide:X})})});case Ye:return d.jsx(Rn,{content:d.jsx(Et,{...r,layoutSide:X})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});ll.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function gy(r){return ye(r)&&r.kind===Y.PROPERTY}const Za=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Je(),i=ke(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=js(),u=ye(e)?e:void 0,c=$s(),f=e.nestedNodes(),[y,p]=m.useState(()=>new Map),g=m.useMemo(()=>Gs(e,y),[e,y]),h=m.useMemo(()=>Tm(e,y),[e,y]),b=m.useMemo(()=>Bs(h),[h]),v=ye(h)?h:void 0,E=gy(h)?h:void 0,w=m.useMemo(()=>E?Ja(E,a):Pa({value:()=>b},a),[b,E,a]),S=m.useMemo(()=>km(h),[h,l]),T=m.useMemo(()=>!e.isCycle&&S.length>0,[S.length,e.isCycle]),V=m.useMemo(()=>S.length===0?!1:v&&(c!=null&&c.hideUnchangedNodes)?Ls(v,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):vs(h,{expandedDepth:o,level:i}),[h,v,c==null?void 0:c.hideUnchangedNodes,o,S.length,i]),k=m.useMemo(()=>Cn(h,V),[h,V,l]),[R,C]=m.useState(k);m.useEffect(()=>{C(Cn(h,V))},[h.id,h,V]),m.useEffect(()=>{C($=>Cn(h,$))},[h,l]);const I=m.useCallback(()=>{C($=>{const oe=!$;return oe&&s(h),Cn(h,oe)})},[h,s]),F=m.useMemo(()=>Vn(b,h.meta()),[h,b]),H=m.useMemo(()=>v?Ha(v):void 0,[v]),B=m.useCallback(($,oe)=>{p($e=>xm(e,$e,$.id,oe.node.id))},[e]);if(e.isCycle||f.length===0)return null;const U=R&&!h.isCycle&&S.length>0,re=!!(u&&c),ue=u?Un:ct;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&v?d.jsx(Xa,{"data-precededby":t,ownerNode:u,displayNode:v,displayValue:b,contentVisibility:w,isLastInList:n&&!w.showContentSection&&!T,expandable:T,expanded:R,onClickExpander:I}):d.jsx(za,{"data-precededby":t,ownerNode:e,displayNode:h,displayValue:b,contentVisibility:w,isLastInList:n&&!w.showContentSection&&!T,expandable:T,expanded:R,onClickExpander:I}),d.jsx(Wa,{node:h,displayValue:b,isLastInList:n&&!T&&g.every($=>!$.showSelector)}),d.jsxs(Pe.Provider,{value:i+1,children:[g.map($=>{const oe=$.nestedNodes.map((G,ze)=>Pm(G,ze)),$e=oe.find(G=>G.node.id===$.selectedNestedNode.id)??oe[0]??null,Ce=qm($.combinerNode);return d.jsx(ll,{combinerKindLabel:$.combinerKindLabel,showSelector:$.showSelector,options:oe,selectedOption:$e,onSelectOption:G=>B($.combinerNode,G),selectorRowDiff:Ce.selectorRowDiff,diffsSeverities:Ce.diffsSeverities},$.combinerNode.id)}),U&&d.jsxs(d.Fragment,{children:[d.jsx(dt,{title:F,usage:gn.JsonSchema,lastInvisible:!0,diff:H,diffsSeverities:v==null?void 0:v.diffsSeverities,diffsSeverityPlacement:K.NestingIndicatorRow}),re?d.jsx(Ya,{children:S}):S.map(($,oe)=>d.jsx(ue,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:$,isLastInList:oe===S.length-1},$.id))]})]})]})};Za.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ct=r=>{const{node:e}=r;return Bn(e)?d.jsx(Za,{...r}):d.jsx(Qa,{...r})};ct.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const hy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(hn,{fallback:d.jsx(bn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(by,{...r})})),by=r=>{const{schema:e,expandedDepth:n=Kr,displayMode:t=vn,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,s=m.useMemo(()=>We(a),[a]),l=m.useMemo(()=>new Oo({source:e,materializeDepth:n,logger:s}),[e,n,s]),u=m.useMemo(()=>l.build(),[l]),[c,f]=m.useReducer(h=>h+1,0),y=m.useCallback(h=>{l.materializeChildren(h),f()},[l]),p=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(Fa.Provider,{value:p,children:d.jsx(tt.Provider,{value:o,children:d.jsx(Sn.Provider,{value:t,children:d.jsx(_n.Provider,{value:Ye,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(ct,{node:g})})})})})})}):null};hy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const Sy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(hn,{fallback:d.jsx(bn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(vy,{...r})})),vy=r=>{const{schema:e,expandedDepth:n=Kr,displayMode:t=vn,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:s,diffTypes:l,hideUnchangedNodes:u=!0}=r,c=Hm(u),f=m.useMemo(()=>We(a),[a]),y=m.useMemo(()=>new Af({source:e,materializeDepth:n,diffsMetaKeys:s,logger:f}),[e,n,s,f]),p=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",p);const[g,h]=m.useReducer(w=>w+1,0),b=m.useCallback(w=>{y.materializeChildren(w),h()},[y]),v=m.useMemo(()=>({expandedDepth:n,materializeChildren:b,treeRevision:g}),[n,b,g]),E=p.root;return E?d.jsx(zr.Provider,{value:s,children:d.jsx(pa.Provider,{value:l,children:d.jsx(Ba.Provider,{value:c,children:d.jsx(Fa.Provider,{value:v,children:d.jsx(tt.Provider,{value:o,children:d.jsx(Sn.Provider,{value:t,children:d.jsx(_n.Provider,{value:xe,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Un,{node:E})})})})})})})})})}):null};Sy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:""}}};var Jr=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Jr||{});const ur=r=>{const{node:e,variant:n=Jr.PRIMARY,[ie]:t}=r,a=Je(),i=Wn(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(St).map((S,T)=>{var R;const V=((R=S.value())==null?void 0:R.protocol)??"",k=`binding-${T}`;return vt(S)?{title:V,node:S,testId:k,diffs:S.diffs,diffsSummary:S.diffsSummary,descendantDiffs:S.descendantDiffs,descendantDiffsSummary:S.descendantDiffsSummary,diffsSeverities:S.diffsSeverities}:{title:V,node:S,testId:k}}),[c]),y=l!=null&&l.node&&St(l.node)?l.node:null,p=y==null?void 0:y.value(),{version:g="latest",binding:h=null}=p??{};m.useEffect(()=>{f.length>0&&l===null&&u(f[0])},[f,l]);const b=m.useCallback(S=>s?d.jsx(d.Fragment,{}):d.jsx(ut,{options:f,selectedOption:l,onSelectOption:u,variant:ft.Secondary,layoutSide:S}),[f,s,l]),v=m.useMemo(()=>{if(Wf(e)){const S=rn(e);return ae(S)}return{}},[e]),E=m.useMemo(()=>{if(y&&vt(y)){const S=rn(y);return ae(S,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:K.BindingVersionRow})}return{}},[y]),w=m.useMemo(()=>{if(!y)return null;if(vt(y)&&i){const S=y.diffs[M],T=Dy(h,S,i);return d.jsx(it,{"data-precededby":_.BINDING_VERSION_ROW,mergedSource:T,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return St(y)?d.jsx(dr,{"data-precededby":_.BINDING_VERSION_ROW,source:h,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,h,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(fe,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Jr.PRIMARY?L.h3:L.h5,subheader:b,...v}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(tn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:L.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...E}),w]})]})};function Dy(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,s)=>{if(o[s]=t,A(t)){const l=r[s];o[s]={...t,afterValue:l}}if(x(t)){const l=r[s];o[s]={...t,beforeValue:l}}return o},{})}}ur.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const mt=r=>{const{node:e,[ie]:n}=r,t=Wn(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var s;if($f(e)){const l=rn(e);return{...ae(l),highlightingMode:(s=e.diffs[M])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(fe,{"data-precededby":n,value:"Extensions",expandable:!1,variant:L.h3,usage:Wr.AsyncApiJsoSection,...o}),t?d.jsx(it,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(dr,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};mt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const dl="Address Parameters",ul=r=>{const{node:e,[ie]:n}=r,t=Je();if(Xf(e))return d.jsx(wy,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(fe,{"data-precededby":n,value:dl,expandable:!1,variant:L.h3}),d.jsx(ot,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},wy=r=>{const{node:e,[ie]:n}=r,t=Je(),a=Se(),i=e.value(),o=i==null?void 0:i.rawValues,s=Wn(),l=m.useMemo(()=>{const c=rn(e);return ae(c)},[e]),u=m.useMemo(()=>Ny(o,e.diffs[M],s),[o,s,e.diffs]);return!s||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(fe,{"data-precededby":n,value:dl,expandable:!1,variant:L.h3,...l}),d.jsx(lt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:s,overriddenKind:"parameters"})]})};function Ny(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,s)=>{if(o[s]=t,A(t)){const l=r[s];o[s]={...t,afterValue:l}}if(x(t)){const l=r[s];o[s]={...t,beforeValue:l}}return o},{})}}ul.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const fl=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>or(i==null?void 0:i.causedAt),[i]);switch(Se()){case xe:return d.jsx(qn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Dn,{left:e(W),right:e(X)})});case Ye:return d.jsx(Rn,{content:e(X)})}return null});fl.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const cl=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(nt),o=lr(e,Nr),{nodeDiffs:s}=o,l=m.useMemo(()=>ae(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ae(o,{diffKey:"description",diffsSeverityPlacement:K.DescriptionRow}),[o]),c=m.useMemo(()=>ae(o,{diffKey:"summary",diffsSeverityPlacement:K.SummaryRow}),[o]),f=m.useMemo(()=>ae(o,{resolveDiff:(E,w)=>{const S=Ee.maxChangedPropertyMetaDataByDiffType(w("protocol"),w("host"));return E[M]??S}}),[o]),y=m.useCallback(E=>{var C;if(!t)return null;if(!Nr(e))return d.jsx(d.Fragment,{children:t.protocol});const w=(C=e.diffs)==null?void 0:C.protocol;if(!w)return d.jsx(d.Fragment,{children:t.protocol});const S=new Set,{data:T,styles:V}=w;let k=t.protocol,R=!1;return E===W&&(S.add(Z.highlighter(V.before.textHighlighterColor)),x(T)||O(T)?k=T.beforeValue:nn(T)&&(k=T.beforeKey),A(T)&&(R=!0)),E===X&&(S.add(Z.highlighter(V.after.textHighlighterColor)),A(T)||O(T)?k=T.afterValue:nn(T)&&(k=T.afterKey),x(T)&&(R=!0)),R?null:d.jsx("span",{className:Array.from(S).join(" "),children:k})},[e,t]),p=m.useCallback(E=>{var C;if(!t)return null;if(!Nr(e))return d.jsx(d.Fragment,{children:t.host});const w=(C=e.diffs)==null?void 0:C.host;if(!w)return d.jsx(d.Fragment,{children:t.host});const S=new Set,{data:T,styles:V}=w;let k=t.host,R=!1;return E===W&&(S.add(Z.highlighter(V.before.textHighlighterColor)),x(T)||O(T)?k=T.beforeValue:nn(T)&&(k=T.beforeKey),A(T)&&(R=!0)),E===X&&(S.add(Z.highlighter(V.after.textHighlighterColor)),A(T)||O(T)?k=T.afterValue:nn(T)&&(k=T.afterKey),x(T)&&(R=!0)),R?null:d.jsx("span",{className:Array.from(S).join(" "),children:k})},[e,t]),g=m.useCallback(E=>{var C;function w(I=!1,F=[]){return d.jsx("div",{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${sr} py-2 flex flex-row h-full ${F.join(" ")}`,children:!I&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(E),"://",p(E)]})})}if(!Nr(e))return w();const S=((C=e.diffs)==null?void 0:C[M])??f.diff;if(!S)return w();const{data:T,styles:V}=S,k=new Set;let R=!1;return E===W&&(A(T)?(k.add(Z.background(N.Gray)),R=!0):k.add(Z.background(V.before.backgroundColor))),E===X&&(x(T)?(k.add(Z.background(N.Gray)),R=!0):k.add(Z.background(V.after.backgroundColor))),w(R,Array.from(k))},[e,p,y,f.diff]),h=m.useMemo(()=>Le(t,s,"title"),[t,s]),b=m.useMemo(()=>Le(t,s,"description"),[t,s]),v=m.useMemo(()=>Le(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(fe,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:L.h4,...l}),!h&&d.jsx(fe,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:L.h4,...l}),d.jsx(fl,{renderAddress:g,...f}),b&&d.jsx(tn,{"data-precededby":_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:L.h6,textFontWeight:"normal",textColor:pn,...u}),v&&d.jsx(tn,{"data-precededby":b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:L.h6,textFontWeight:"normal",textColor:pn,...c}),i&&d.jsx(ur,{"data-precededby":v?_.SUMMARY_ROW:b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,node:i,variant:Jr.SECONDARY})]}):null});cl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const ml=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.childrenNodes().filter(Hf),[e]),a=m.useMemo(()=>{if(Qf(e)){const i=rn(e);return ae(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(fe,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:L.h3,...a}),t.map((i,o)=>d.jsx(cl,{"data-precededby":o===0?_.MESSAGE_SECTION_HEADER_HIGH_LEVEL:_.SERVER_BLOCK,node:i},i.id))]})});ml.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const yl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(nt),o=a.find(If),s=a.find(Of),l=a.find(Ca),u=lr(e,zf),{nodeDiffs:c}=u,f=m.useMemo(()=>ae(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>ae(u,{diffKey:"description",diffsSeverityPlacement:K.DescriptionRow}),[u]),p=m.useMemo(()=>ae(u,{diffKey:"summary",diffsSeverityPlacement:K.SummaryRow}),[u]),g=m.useMemo(()=>Le(t,c,"title"),[t,c]),h=m.useMemo(()=>Le(t,c,"description"),[t,c]),b=m.useMemo(()=>Le(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(fe,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:L.h2,...f}),!g&&d.jsx(fe,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:L.h2,...f}),h&&d.jsx(tn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:L.h5,textFontWeight:"normal",textColor:pn,...y}),b&&d.jsx(tn,{"data-precededby":h?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:L.h5,textFontWeight:"normal",textColor:pn,...p}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(ul,{"data-precededby":h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(ml,{"data-precededby":o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(mt,{"data-precededby":s?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),i&&d.jsx(ur,{"data-precededby":l?_.JSO_VIEWER:s?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};yl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const pl=r=>{const{node:e,[ie]:n}=r,t=Je(),a=Se(),i=Wn(),o=wo(),s=e.childrenNodes(),l=s.find(Rf),u=s.find(Ca),c=s.find(nt),f=s.find(qf),y=m.useMemo(()=>Fi(l,i),[l,i]),p=m.useMemo(()=>Fi(f,i),[f,i]),g=m.useMemo(()=>{if(Zf(l)){const v=rn(l);return ae(v)}return{}},[l]),h=m.useMemo(()=>{if(ec(f)){const v=rn(f);return ae(v)}return{}},[f]),b=m.useCallback(v=>a===Ye?d.jsx(ot,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:v,displayMode:t,overriddenKind:"parameters"}):a===xe&&i?d.jsx(lt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:v,displayMode:t,metaKeys:i,filters:o,layoutMode:xe,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(fe,{"data-precededby":n,value:"Headers",variant:L.h3,expandable:!1,...g}),b(y)]}),u&&d.jsx(mt,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(ur,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:u?_.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(fe,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:u||c?_.JSO_VIEWER:n,value:"Payload",variant:L.h3,expandable:!1,...h}),b(p)]})]})},Ji="Type";function Fi(r,e){if(!r)return;const n=r.value();if(n)return r instanceof Oe?jt(Ji,n.schema,r.diffs[M],e):ls(Ji,n.schema)}pl.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const gl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(nt),o=a.find(Ca),s=lr(e,rc),{nodeDiffs:l}=s,u=m.useMemo(()=>ae(s,{diffKey:"title"}),[s]),c=m.useMemo(()=>ae(s,{diffKey:"description",diffsSeverityPlacement:K.DescriptionRow}),[s]),f=m.useMemo(()=>ae(s,{diffKey:"summary",diffsSeverityPlacement:K.SummaryRow}),[s]),y=m.useMemo(()=>Le(t,l,"title"),[t,l]),p=m.useMemo(()=>Le(t,l,"description"),[t,l]),g=m.useMemo(()=>Le(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(fe,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:L.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(fe,{"data-precededby":n,value:e.key.toString(),variant:L.h2,expandable:!1,expanded:!0,...u}),p&&d.jsx(tn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:L.h5,textFontWeight:"normal",textColor:pn,...c}),g&&d.jsx(tn,{"data-precededby":p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:L.h5,textFontWeight:"normal",textColor:pn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(mt,{"data-precededby":g?_.SUMMARY_ROW:p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(ur,{"data-precededby":o?_.JSO_VIEWER:g?_.SUMMARY_ROW:p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};gl.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const hl=r=>{const{node:e,[ie]:n}=r;return Xo(e)?d.jsx(pl,{"data-precededby":n,node:e}):Qo(e)?d.jsx(yl,{"data-precededby":n,node:e}):Zo(e)?d.jsx(gl,{"data-precededby":n,node:e}):null};hl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const bl=r=>{const{node:e,[ie]:n}=r,t=Se();Je();const[a,i]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(g=>{const h=Ey(g),b=Ty(g);return ac(g)?{node:g,title:h,testId:b,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:h,testId:b}}),[o]);m.useEffect(()=>{s.length>0&&a===null&&i(s[0])},[s,a]);const l=m.useMemo(()=>{var g;return tc(e)?(g=e.diffs)==null?void 0:g[M]:null},[e]),u=m.useMemo(()=>{if(l){const{data:g}=l;if(O(g)||x(g))return g.beforeDeclarationPaths[0];if(A(g))return g.afterDeclarationPaths[0]}return null},[l]),c=m.useMemo(()=>{var g;return(g=l==null?void 0:l.data)==null?void 0:g.type},[l]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),y=m.useCallback(g=>{const h=new Set;if(l){const{styles:b}=l;g===W&&h.add(Z.background(b.before.backgroundColor)),g===X&&h.add(Z.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${sr} h-full ${Array.from(h).join(" ")}`,children:d.jsx(ut,{options:s,selectedOption:a,onSelectOption:i,variant:ft.Secondary,layoutSide:g})})},[l,n,s,a]),p=m.useCallback(()=>{switch(t){case xe:return d.jsx(qn,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(Dn,{left:y(W),right:y(X)})});default:return d.jsx(Rn,{content:y(X)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[p(),a&&Pf(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(hl,{"data-precededby":_.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function Ey(r){switch(r.kind){case D.MESSAGE_CONTENT:return"Message";case D.MESSAGE_CHANNEL:return"Channel";case D.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function Ty(r){switch(r.kind){case D.MESSAGE_CONTENT:return"message-content";case D.MESSAGE_CHANNEL:return"message-channel";case D.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}bl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const ei=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=lr(e,nc),{nodeDiffs:o}=i,s=m.useMemo(()=>ae(i,{diffKey:"title"}),[i]),l=m.useMemo(()=>ae(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>ae(i,{diffKey:"description",diffsSeverityPlacement:K.DescriptionRow}),[i]),c=m.useMemo(()=>ae(i,{diffKey:"summary",diffsSeverityPlacement:K.SummaryRow}),[i]),f=m.useMemo(()=>Le(t,o,"title"),[t,o]),y=m.useMemo(()=>Le(t,o,"description"),[t,o]),p=m.useMemo(()=>Le(t,o,"summary"),[t,o]),g=n?_.ROOT:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(fe,{"data-precededby":_.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:L.h1,...s}),!n&&!f&&d.jsx(fe,{"data-precededby":_.ROOT,value:e.key.toString(),expandable:!1,variant:L.h1,...s}),d.jsx(es,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),y&&d.jsx(tn,{"data-precededby":_.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:L.h4,textFontWeight:"normal",textColor:pn,...u}),p&&d.jsx(tn,{"data-precededby":y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:L.h4,textFontWeight:"normal",textColor:pn,...c}),d.jsx(xy,{"data-precededby":p?_.SUMMARY_ROW:y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,children:a})]})},xy=r=>{const{children:e,[ie]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>Mf(t)?d.jsx(bl,{"data-precededby":n,node:t},t.key):null)})};ei.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const ky=m.memo(r=>r.source===null?null:d.jsx(hn,{fallback:d.jsx(bn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Ay,{...r})})),Ay=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=vn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,s=m.useMemo(()=>We(a),[a]),l=m.useMemo(()=>new _o({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!zo(c)?null:d.jsx(go.Provider,{value:a,children:d.jsx(Sn.Provider,{value:t,children:d.jsxs(_n.Provider,{value:Ye,children:[" ",d.jsx(Pe.Provider,{value:0,children:d.jsx(ei,{node:c,noHeading:i})})]})})})});ky.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{ky as A,dr as J,sc as a,ot as b,lt as c,Sy as d,hy as e,it as f};
