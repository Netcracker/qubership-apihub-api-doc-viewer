var ql=Object.defineProperty;var Pl=(r,e,n)=>e in r?ql(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var O=(r,e,n)=>(Pl(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{at as Lr,a3 as Dn,N as _,d as Yr,t as x,H as N,v as k,x as I,y as Oe,R as L,w as ln,O as H,au as bn,av as qt,aw as Pt,ax as Ot,ay as qi,az as Pi,aA as Oi,aB as Ii,aC as Hi,aD as Li,aE as ji,aF as Ji,aG as Ol,aH as It,aI as Fi,aJ as Ki,a6 as Gi,aK as Bi,aL as Ui,aM as Yi,ai as Wi,aj as $i,ah as zi,aN as Xi,af as Qi,ag as Zi,aO as eo,aP as Ht,ae as no,aa as ro,ac as to,ab as ao,ad as io,a7 as oo,a8 as so,a9 as lo,U as X,o as ur,_ as uo,aQ as Il,aR as $e,i as Wa,aS as fo,aT as Hl,Z as Ll,aU as jl,X as Se,Y as fr,W as te,S as Te,V as re,E as En,c as kn,e as xn,L as Pn,f as Ie,p as An,am as Fe,aV as co,l as en,aW as Jl,aX as Fl,aY as Kl,aZ as Gl,a_ as Bl,a$ as Ul,b0 as Yl,b1 as Wl,b2 as $l,z as zl,A as Xl,B as Ql,F as Zl,G as ed,J as nd,u as Ue,g as Wr,an as On,I as $a,b3 as rd,b4 as td,b5 as Yn,b6 as ad,b7 as id,b8 as jr,b9 as od,ba as sd,bb as za,ak as Xa,j as mo,bc as yo,bd as ld,al as dd,as as ud,be as fd,bf as cd,aq as ce,bg as br,bh as Fn,bi as cn,bj as Mn,bk as po,bl as go,bm as md,C as yd,bn as Lt,ao as pd,h as gd,bo as hd,bp as Sr,bq as bd,ar as ho}from"./DiffBadge-f5ba12be.js";import{_ as Zt,l as R,$ as xe,a0 as w,a1 as $r,a2 as zr,a3 as Sd,a4 as Xr,a5 as bo,a6 as ue,e as nn,a7 as Qr,t as de,a8 as ie,a9 as ea,aa as vd,v as ee,ab as Dd,ac as wd,ad as So,ae as vo,af as me,ag as Do,z as na,ah as jt,ai as Nd,S as He,O as In,N as Hn,Q as Cn,aj as Nt,b as B,X as cr,A as se,ak as wo,al as Td,am as ra,an as dn,ao as oe,T as ge,ap as Zr,P as V,aq as Ed,ar as Ae,as as No,at as sn,au as et,av as ta,aw as aa,M as To,ax as kd,ay as xd,az as Ad,aA as Pe,aB as Cd,aC as Vd,aD as _d,aE as Rd,aF as Md,aG as qd,aH as Pd,aI as Od,aJ as mr,aK as rr,aL as tr,aM as Eo,aN as ko,aO as Id,c as un,d as wn}from"./IndexesNodeViewer-f60e1e7d.js";import{r as m}from"./index-f46741a2.js";import{T as ia,A as Ln,a as Qn,b as pe,c as oa,m as sa,t as Hd,C as Ld,d as nt,e as la,u as Zn,f as xo}from"./DdlTableDiffsViewer-dbd634ed.js";/* empty css              */import"./DdlTableViewer-706d51e9.js";import"./GraphQLOperationDiffViewer-ec42f7d3.js";import"./GraphQLOperationViewer-c53f5f81.js";import{g as jd,h as Jd,J as Fd,j as Kd,k as Gd,l as Bd,m as da,n as Ud,S as Yd,U as ua,o as Ao,p as rt,q as tt,N as Co,E as Qa,r as Wd,s as $d,t as zd,v as Xd,w as Vo,x as at,C as fa,y as ca,D as ma,z as Qd,A as Zd,B as eu,F as nu,H as _o,I as Jt,K as Za,L as ru,M as mn,V as ya,P as pa,Q as ga,R as ha,T as tu,W as Ro,X as ba,Y as Sa,Z as va,_ as au,$ as Mo,a0 as iu,a1 as ou,a2 as su,a3 as qo,a4 as lu,a5 as du,a6 as uu,a7 as fu,a8 as cu,a9 as mu,aa as yu,ab as pu,ac as gu,ad as hu,ae as bu}from"./GraphPropNodeViewer-452b0f1f.js";class Su extends Zt{constructor(){super()}}const ei=(r,e)=>!R(e)||xe(e)?e:{rawValues:e},vu=(r,e)=>{if(!R(e)||xe(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},ni=(r,e)=>R(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function ir(r){return{"/data":{"/content":()=>ir(w.MESSAGE_CONTENT),"/channel":()=>ir(w.MESSAGE_CHANNEL),"/operation":()=>ir(w.MESSAGE_OPERATION),kind:w.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:w.MESSAGE_CHANNEL_PARAMETERS,transformers:[ei]},"/servers":{"/*":()=>ir(w.SERVER),kind:w.SERVERS},"/extensions":{kind:w.EXTENSIONS,transformers:[ei]},"/bindings":{"/*":{kind:w.BINDING,transformers:[vu]},kind:w.BINDINGS,complex:!0},"/headers":{kind:w.MESSAGE_HEADERS,transformers:[ni]},"/payload":{kind:w.MESSAGE_PAYLOAD,transformers:[ni]},kind:r}}const Du="<address unknown>";class Po{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var s;let t,a;const i=e.operations??{};let o,l;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(s=c.messages)==null?void 0:s[0],y=this.isReferenceObject(f)?null:f;if(y){const p=y[this.referenceNamePropertyKey];l=typeof p=="string"?p:void 0}}}if(!o||!l)return!o&&this.logger.error("Cannot find first operation in source."),!l&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,l),t=o,a=l}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var T;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,l=Object.entries(t).filter(S=>{const[E,A]=S;return!this.isReferenceObject(A)&&E===i}).map(([,S])=>S).at(0);if(!l)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const s=this.isReferenceObject(l.channel)?{}:l.channel;let c=(l.messages??[]).filter(S=>!this.isReferenceObject(S)).find(S=>R(S)&&S[this.referenceNamePropertyKey]===o);if(!s)return this.logger.error("Cannot find channel in the operation",l),null;if(!c){const S=(T=s.messages)==null?void 0:T[o];if(c=this.isReferenceObject(S)?void 0:S,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(l),y=this.copyExtensions(s),p=this.copyExtensions(c),g=S=>R(S)?{[this.referenceNamePropertyKey]:S[this.referenceNamePropertyKey]}:void 0,b=g(c),h=g(s),D=g(l);return{...b??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:l.action,address:s.address??Du,data:{content:{...c.headers?{headers:c.headers}:{},...p?{extensions:p}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...h??{},...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...y?{extensions:y}:{},...s.bindings?{bindings:s.bindings}:{},...s.parameters?{parameters:this.transformParametersToJsonSchema(s.parameters)}:{},...s.servers?{servers:s.servers}:{}},operation:{...D??{},id:i,...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...l.bindings?{bindings:l.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function wu(r){return $r(r)}const Nu=new Set([w.BINDING,w.EXTENSIONS,w.MESSAGE,w.MESSAGE_CHANNEL,w.MESSAGE_CHANNEL_PARAMETERS,w.MESSAGE_HEADERS,w.MESSAGE_OPERATION,w.MESSAGE_PAYLOAD,w.SERVER]),vr=["title","description","summary"];class it extends zr{createNodeMeta(e){return{...R(e)&&Lr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!Sd(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,it.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Nu.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case w.BINDING:return["binding","version","protocol"];case w.EXTENSIONS:case w.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case w.MESSAGE:return[...vr,"internalTitle","action","address"];case w.MESSAGE_CHANNEL:return[...vr];case w.MESSAGE_OPERATION:return[...vr];case w.MESSAGE_HEADERS:case w.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case w.SERVER:return[...vr,"host","protocol"];default:return[]}}}const Tu="[AsyncAPI]";class Oo extends Xr{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=nn()}=n;super();O(this,"tree");O(this,"source");O(this,"referenceNamePropertyKey");O(this,"operationKeys");O(this,"logger");O(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!R(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Qr},a=ir(w.MESSAGE),i=wu({source:n,tree:this.tree,supportedNodeKinds:bo,createNodeFromRaw:(o,l,s,u,c)=>this.createNodeFromRaw(o,l,s,u,c),createNodeParams:(o,l,s)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:l,container:s}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l),shouldStopAfterNodeCreation:(o,l)=>R(l)&&!!l.isPrimitive});return Dn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return Tu}createTree(){return new Su}createNodeDataBuilder(){return new it}prepareSource(){return new Po(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return R(n)?n:null}resolveNodeKey(n,t){if(!R(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:ue.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:ue.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isSimpleTreeNode(n){return n.type===ue.SIMPLE}isComplexTreeNode(n){return n.type===ue.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Eu extends ia{constructor(){super()}}function ri(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const ku="x-";function Pr(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(ku)}class xu extends Po{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=this.diffMetaKeys,s=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!s)return null;const u=de(ie(e,["operations",o],this.referenceNamePropertyKey)),c=de(ie(e,["operations",a,o],this.referenceNamePropertyKey));de(ie(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=de(ie(e,["operations",a,"channel",o],this.referenceNamePropertyKey));de(ie(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),de(ie(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=de(ie(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),p=de(ie(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));de(ie(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const g=ie(e,["operations",a,"messages",i],this.referenceNamePropertyKey),b=ie(e,["operations",a,"messages"],this.referenceNamePropertyKey),h=R(g)&&ea(b)?vd(b,g):void 0,D=(h&&typeof h!="symbol"?y==null?void 0:y[h]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),v=s;if(!(o in v)){const T=p==null?void 0:p.title,S=p==null?void 0:p.name,E=p==null?void 0:p.description,A=p==null?void 0:p.summary,C=f==null?void 0:f.address,M=p==null?void 0:p.headers,q=p==null?void 0:p.payload,F=v.data.content.extensions;if(F&&!(o in F)){const j=Object.keys(p??{}).reduce((J,G)=>{if(!Pr(G))return J;const P=p==null?void 0:p[G];return P&&(J[G]=P),J},{});v.data.content.extensions=Object.assign(F,{[o]:j})}const U=v.data.content;if(U&&!(o in U)){const j={...M?{headers:M}:{},...q?{payload:q}:{}};v.data.content=Object.assign(U,{[o]:j})}v[o]={...D?{[_]:D}:{},...T?{title:T}:{},...S?{internalTitle:S}:{},...E?{description:E}:{},...A?{summary:A}:{},...C?{address:C}:{}}}if(!(o in v.data.channel)){const T=f==null?void 0:f.title,S=f==null?void 0:f.description,E=f==null?void 0:f.summary,A=f==null?void 0:f.address,C=v.data.channel.extensions;if(C&&!(o in C)){const M=Object.keys(f??{}).reduce((q,F)=>{if(!Pr(F))return q;const U=f==null?void 0:f[F];return U&&(q[F]=U),q},{});v.data.channel.extensions=Object.assign(C,{[o]:M})}v.data.channel[o]={...T?{title:T}:{},...S?{description:S}:{},...E?{summary:E}:{},...A?{address:A}:{}}}if(!(o in v.data.operation)){const T=c==null?void 0:c.title,S=c==null?void 0:c.description,E=c==null?void 0:c.summary,A=v.data.operation.extensions;if(A&&!(o in A)){const C=Object.keys(c??{}).reduce((M,q)=>{if(!Pr(q))return M;const F=c==null?void 0:c[q];return F&&(M[q]=F),M},{});v.data.operation.extensions=Object.assign(A,{[o]:C})}v.data.operation[o]={...T?{title:T}:{},...S?{description:S}:{},...E?{summary:E}:{}}}return Yr(v,o,l),v}hasOnlyAllowedDiffMetaSymbols(e){if(!R(e)&&!xe(e))return!0;if(xe(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class Au extends it{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class Cu extends Ln{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const l=o.data.type;i.add(l)}return i}}class Vu extends Ln{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,l=ie(t,["binding",o]);if(this.isDiffsSet(l))for(const s of l)s&&i.add(s.type);return i}}class _u extends Ln{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=de(ie(t,["parameters","properties",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=ie(t,["parameters",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=de(ie(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class Ru extends Ln{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=de(ie(t,["extensions",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=ie(t,["headers",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=ie(t,["payload",l]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class Mu extends Ln{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,l=de(ie(t,["extensions",o]));if(l)for(const s of Object.values(l))s&&i.add(s.type);return i}}var Mt;let qu=(Mt=class{static instance(e){switch(e){case w.BINDING:if(!this.instances.has(w.BINDING)){const n=new Vu;this.instances.set(w.BINDING,n)}return this.instances.get(w.BINDING);case w.MESSAGE_CONTENT:if(!this.instances.has(w.MESSAGE_CONTENT)){const n=new Ru;this.instances.set(w.MESSAGE_CONTENT,n)}return this.instances.get(w.MESSAGE_CONTENT);case w.MESSAGE_CHANNEL:if(!this.instances.has(w.MESSAGE_CHANNEL)){const n=new _u;this.instances.set(w.MESSAGE_CHANNEL,n)}return this.instances.get(w.MESSAGE_CHANNEL);case w.MESSAGE_OPERATION:if(!this.instances.has(w.MESSAGE_OPERATION)){const n=new Mu;this.instances.set(w.MESSAGE_OPERATION,n)}return this.instances.get(w.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Cu;this.instances.set(null,n)}return this.instances.get(null)}}},O(Mt,"instances",new Map),Mt);class Pu extends Qn{aggregate(e,n){}}class Ou extends Qn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=de(ie(e,[a],t));if(!i)return;const o={};let l=!1;for(const s of Object.keys(e)){const u={},c=i[s];c&&(l=!0,this.aggregateWholeNodeDiff(c,u),o[s]=u[_])}return l?o:void 0}}class Iu extends Qn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=de(ie(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,l={};if(i){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};x(i)&&(s={...s,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),k(i)&&(s={...s,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),I(i)&&(s={...s,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),l.headers={data:i,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}if(o){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};x(o)&&(s={...s,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),k(o)&&(s={...s,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),I(o)&&(s={...s,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),l.payload={data:o,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}return l}}class Hu extends Qn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=de(ie(e,[a],t));if(!i)return;const o={};let l=!1;for(let s=0;s<e.length;s++){const c=e[s][t];if(!c)continue;const f={},y=i[s];y&&(l=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[_])}return l?o:void 0}}class Io{static instance(e){switch(e){case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new Ou),this.instances.get(w.BINDINGS);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Hu),this.instances.get(w.SERVERS);case w.MESSAGE_CONTENT:return this.instances.has(w.MESSAGE_CONTENT)||this.instances.set(w.MESSAGE_CONTENT,new Iu),this.instances.get(w.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new Pu;this.instances.set(null,n)}return this.instances.get(null)}}}O(Io,"instances",new Map);class Lu extends pe{aggregate(e){const n=e[_];if(n){const f=n.data,p={type:f.type,causedAt:[]};return I(f)?(p.causedAt=f.beforeDeclarationPaths[0],{[L.TitleRow]:p,[L.BindingVersionRow]:p}):(k(f)?p.causedAt=f.beforeDeclarationPaths[0]:x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),{[L.TitleRow]:p,[L.DescriptionRow]:p,[L.SummaryRow]:p,[L.AddressRow]:p,[L.BindingVersionRow]:p,[L.ServerAddressRow]:p})}const t=e.title,a=e.description,i=e.summary,o=e.address,l=e.version,s=e.host,u=e.protocol,c={};if(t){const f=t.data,p={type:f.type,causedAt:[]};(k(f)||I(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[L.TitleRow]=p}if(a){const f=a.data,p={type:f.type,causedAt:[]};(k(f)||I(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[L.DescriptionRow]=p}if(i){const f=i.data,p={type:f.type,causedAt:[]};(k(f)||I(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[L.SummaryRow]=p}if(o){const f=o.data,p={type:f.type,causedAt:[]};(k(f)||I(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[L.AddressRow]=p}if(l){const f=l.data,p={type:f.type,causedAt:[]};(k(f)||I(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[L.BindingVersionRow]=p}if(s||u){const f=s==null?void 0:s.data,y=u==null?void 0:u.data,p=pe.maxDiffByDiffType(f,y);if(p){const g={type:p.type,causedAt:[]};(k(p)||I(p))&&(g.causedAt=p.beforeDeclarationPaths[0]),x(p)&&(g.causedAt=p.afterDeclarationPaths[0]),c[L.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class Ho{static instance(e){switch(e){default:return new Lu}}}O(Ho,"instances",new Map);class ju extends oa{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!x(n)&&!k(n)&&!I(n)&&!ln(n))return!1;return!0}}class Ju{static instance(e){switch(e){default:return new ju}}}class Vn extends ee{constructor(){super(...arguments);O(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!R(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const p=o.diffs[_];if(p&&(x(p.data)||k(p.data)))return u[_]={...p,inherited:!0},u;{const g=o.descendantDiffs[a];if(g)return u[_]=g,u}}else if(i){const p=i.diffs[_];if(p&&(x(p.data)||k(p.data)))return u[_]={...p,inherited:!0},u;{const g=i.descendantDiffs[a];if(g)return u[_]=g,u}}if(!ee.isDiffsRecord(s))return;const c=s.title;c&&this.aggregateTextDiff(c,"title",u);const f=s.description;f&&this.aggregateTextDiff(f,"description",u);const y=s.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;x(n)&&(i={...i,isContentVisible:!1,backgroundColor:N.Gray},o={...o,isContentVisible:!0,backgroundColor:N.Green}),k(n)&&(i={...i,isContentVisible:!0,backgroundColor:N.Red},o={...o,isContentVisible:!1,backgroundColor:N.Gray}),(ln(n)||I(n))&&(i={...i,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},o={...o,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}}class Fu extends Vn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let l=super.aggregate(e,n,t,a,i);if(l){const u=l[_];if(u){const{data:c,styles:f}=u;x(c)&&(f.after.borderShadowColor=N.Green),k(c)&&(f.before.borderShadowColor=N.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,l)}}l||(l={});const s=ie(e,["binding"]);if(R(s)){const u=s[o];if(ee.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",l)}}return Object.keys(l).length>0?l:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(x(t)&&R(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(k(t)&&R(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class Ku extends Vn{aggregateByDescendantDiffs(e,n,t){var u;if(n[_])return n;if(!R(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const l=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[_]=l(),n;let s=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==s){s=H.replace;break}return s===H.replace?(n[_]=l(),n):(n[_]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:k(n)?n.beforeDeclarationPaths:[],beforeValue:k(n)?n.beforeValue:void 0,afterDeclarationPaths:x(n)?n.afterDeclarationPaths:[],afterValue:x(n)?n.afterValue:void 0,action:H.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}),a)}}class Gu extends Vn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[_])return n;const i=ie(e,["rawValues"]);if(!R(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!ee.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return x(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),k(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[_]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:bn},n}}class Bu extends Vn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(ee.isDiffsRecord(s)){const u=s[_];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};x(u)&&(f={...f,isContentVisible:!1,backgroundColor:N.Gray},y={...y,isContentVisible:!0,backgroundColor:N.Green}),k(u)&&(f={...f,isContentVisible:!0,backgroundColor:N.Red},y={...y,isContentVisible:!1,backgroundColor:N.Gray}),l[_]={data:u,highlightingMode:Oe,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=s.address;c&&this.aggregateTextDiff(c,"address",l)}return Object.keys(l).length>0?l:void 0}}class Uu extends Vn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[_])return n;const i=ie(e,["rawValues","properties"]);if(!R(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!ee.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return x(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),k(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[_]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:Oe},n}}class Yu extends Vn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(ee.isDiffsRecord(s)){const u=s.host;u&&this.aggregateTextDiff(u,"host",l);const c=s.protocol;c&&this.aggregateTextDiff(c,"protocol",l)}return Object.keys(l).length>0?l:void 0}}class Wu extends Vn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[_])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[_]=o,n}}class Ft{static instance(e){switch(e){case w.BINDING:return this.instances.has(w.BINDING)||this.instances.set(w.BINDING,new Fu),this.instances.get(w.BINDING);case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new Ku),this.instances.get(w.BINDINGS);case w.EXTENSIONS:return this.instances.has(w.EXTENSIONS)||this.instances.set(w.EXTENSIONS,new Gu),this.instances.get(w.EXTENSIONS);case w.MESSAGE:return this.instances.has(w.MESSAGE)||this.instances.set(w.MESSAGE,new Bu),this.instances.get(w.MESSAGE);case w.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(w.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(w.MESSAGE_CHANNEL_PARAMETERS,new Uu),this.instances.get(w.MESSAGE_CHANNEL_PARAMETERS);case w.SERVER:return this.instances.has(w.SERVER)||this.instances.set(w.SERVER,new Yu),this.instances.get(w.SERVER);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Wu),this.instances.get(w.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new Vn),this.instances.get(null)}}}O(Ft,"instances",new Map);const $u="[AsyncAPI][WithDiffs]";class zu extends Oo{constructor(n){super(n);O(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return $u}createTree(){return new Eu}createNodeDataBuilder(){return new Au}prepareSource(){return new xu(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return ea(n)?n:null}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!ri(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Ft.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return Ju.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Io.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return Ft.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return qu.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return Ho.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),sa(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return bo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ri(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Xu extends Zt{constructor(){super()}}const Z={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Lo=Object.values(Z),$n="unknown",Qu="any",Zu="nothing",ne={UNKNOWN:$n,ANY:Qu,NOTHING:Zu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},ef=Object.values(ne);function nf(r){return!r||!Dd(r)?!1:ef.some(e=>e===r)}function rf(r){return R(r)&&Lr in r}function Tt(r,e){const n=r[e];return xe(n)&&n.length>0}function er(r){return typeof r=="boolean"}function Nn(r){return r==null||typeof r=="boolean"?null:r}const tf=[ne.STRING,ne.NUMBER,ne.INTEGER,ne.BOOLEAN];function Da(r){return!!r&&tf.includes(r)}const af=[ne.ANY,ne.NOTHING];function of(r){return!!r&&af.includes(r)}function Jr(r){return!R(r)||xe(r)?!1:Tt(r,"allOf")||Tt(r,"oneOf")||Tt(r,"anyOf")}function ti(r){return R(r)&&Reflect.ownKeys(r).length>0}function Et(r){return xe(r)&&r.length>0}function jo(r,e){if(!R(r)&&!xe(r))return!1;if(xe(r))return r.length>0;const n=r;if(Et(n[qt])||Et(n[Pt])||Et(n[Ot])||ti(n[qi])||ti(n[Pi]))return!0;const t=n[Oi];if(t!==void 0&&t!==!1||n[Ii]!==void 0)return!0;const a=n[Hi];return a!==void 0&&a!==!1}const sf="extensions",lf="location",ze={root:Z.ROOT,definition:Z.DEFINITION,property:Z.PROPERTY,additionalProperties:Z.ADDITIONAL_PROPERTIES,patternProperty:Z.PATTERN_PROPERTY,items:Z.ITEMS,item:Z.ITEM,additionalItems:Z.ADDITIONAL_ITEMS,allOf:Z.ALL_OF,anyOf:Z.ANY_OF,oneOf:Z.ONE_OF},df=(r,e)=>{if(!R(e)||xe(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},uf="x-";function ai(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(uf)}function ff(r,e){if(!R(e)||xe(e))return e;const n=Reflect.ownKeys(e),t=n.filter(l=>ai(l));if(t.length===0)return e;const a=new Set(t),i=t.reduce((l,s)=>(ai(s)&&(l[s]=e[s]),l),{}),o={};for(const l of n)typeof l=="string"&&a.has(l)||(o[l]=e[l]);return o.extensions=i,o}const cf=[df,ff];function Xe(r=ze.root){return{"/allOf":{"/*":()=>Xe(ze.allOf)},"/oneOf":{"/*":()=>Xe(ze.oneOf)},"/anyOf":{"/*":()=>Xe(ze.anyOf)},"/properties":{"/*":()=>Xe(ze.property)},"/items":()=>({...Xe(ze.items),"/*":({key:e})=>wd(e)?Xe(ze.item):{}}),"/additionalProperties":()=>Xe(ze.additionalProperties),"/additionalItems":()=>Xe(ze.additionalItems),"/patternProperties":{"/*":()=>Xe(ze.patternProperty)},kind:r,transformers:cf}}function mf(r){return $r(r)}const yf={type:ne.ANY};function pf(r,e){if(er(e)){if(e===!1)return!1;if(e===!0&&r===Z.ADDITIONAL_PROPERTIES)return yf}}function gf(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function fe(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const Ee=class Ee extends zr{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case ne.UNKNOWN:case ne.ANY:case ne.NOTHING:case ne.NULL:case ne.BOOLEAN:return Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case ne.STRING:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ht,oo,so,lo,lf];case ne.NUMBER:case ne.INTEGER:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ht,no,ro,to,ao,io];case ne.OBJECT:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Xi,Qi,Zi,eo];case ne.ARRAY:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Wi,$i,zi];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=gf(n,t),o=rf(e)?{brokenRef:String(e.$ref)}:{};return!Jr(e)&&R(e)?{...this.pick(e,Ee.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=pf(e,t);if(i!==void 0)return i;if(er(t))return t;if(!R(t)||Jr(t))return null;const o=nf(t.type)?t.type:ne.UNKNOWN;return o===ne.UNKNOWN||o===ne.ANY||o===ne.NOTHING||o===ne.NULL||o===ne.BOOLEAN?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.STRING?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.NUMBER||o===ne.INTEGER?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.OBJECT?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.ARRAY?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};O(Ee,"JSON_SCHEMA_TREE_NODE_META_PROPS",[Li,ji,Ji,Ol]),O(Ee,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[It,Fi,Ki,Gi,Bi,Ui,Yi,sf]);let Fr=Ee;const hf="[JSON Schema]";class Jo extends Xr{constructor(n){const{source:t,materializeDepth:a,logger:i=nn()}=n;super();O(this,"tree");O(this,"source");O(this,"materializeDepth");O(this,"logger");O(this,"nodeDataBuilder");O(this,"lazyState",new So);O(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!R(n))return this.tree;const t={parent:null,container:null,ancestors:new Qr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=Xe();return this.crawlHooks=mf({source:n,tree:this.tree,supportedNodeKinds:Lo,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o,l)=>({value:er(i)||R(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:l}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>xe(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:jo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),Dn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:vo(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};Dn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return hf}createTree(){return new Xu}createNodeDataBuilder(){return new Fr((n,t)=>this.pick(n,t))}prepareSource(){return R(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u,value:c}=o;if(i||R(c)&&Jr(c)){const b=this.createNodeMeta(t,o),h={type:ue.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:b,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,h)}const y=this.createNodeValue(t,a,o),p=this.createNodeMeta(t,o),g={type:ue.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:y,meta:p,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,g)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===ue.SIMPLE}isComplexTreeNode(n){return n.type===ue.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class bf extends ia{constructor(){super()}}class Sf{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!R(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return Yr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class vf extends Fr{constructor(e){super(e)}}class Df extends Ln{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!x(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class Fo{static instance(e){return this.kindAnyInstance}}O(Fo,"kindAnyInstance",new Df);const wf=["properties","patternProperties","allOf","anyOf","oneOf","items"],Nf=new Set(["properties","patternProperties"]);class Tf extends Qn{constructor(){super(...arguments);O(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});O(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!R(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[l,s]of Object.entries(o))!s||l===_||!ee.isDiff(s)||(i[l]=this.buildDescendantDiffMetadata(s));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=de(Reflect.get(n,t));i&&a.push(i);for(const o of wf){const l=Reflect.get(n,o);if(!R(l)&&!xe(l))continue;const s=de(Reflect.get(l,t));if(s){a.push(s);continue}const u=i==null?void 0:i[o];if(u&&(x(u)||k(u))&&(Nf.has(o)?R(l):xe(l))){const y=this.decomposeWholeChildBagDiff(l,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=xe(n)?n.map((o,l)=>String(l)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return x(n)?{type:n.type,scope:n.scope,description:n.description,action:H.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:H.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const l=Oe;return x(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Green,borderShadowColor:N.Green},o={...o,increaseLevel:!0}),k(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Red,borderShadowColor:N.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},o={...o,increaseLevel:!1}),I(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:l}}}class Ko{static instance(e){return this.kindAnyInstance}}O(Ko,"kindAnyInstance",new Tf);const Sn="titleRow",Go=["type","format","title"],Wn=["readOnly","writeOnly","deprecated"];class Ef extends pe{aggregate(e){const n=e[_],t={};return n?(t[L.TitleRow]=this.buildNodeDiffsSeverity(n),t[L.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[L.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",L.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",L.NestingIndicatorRow,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var a,i,o;const t=e;for(const l of Object.values(me)){const s=pe.maxChangedPropertyMetaDataByDiffType((a=t.validationRowDiffs)==null?void 0:a[l],(i=t.validationRowColorizingDiffs)==null?void 0:i[l],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[l])??{}));s&&(n[Do[l]]=this.buildNodeDiffsSeverity(s))}}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[Sn],...Object.values(t.typeLabelFieldDiffs??{})],i=pe.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[L.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||I(n)?t.causedAt=n.beforeDeclarationPaths[0]:x(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class kf extends Ef{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,a=pe.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);a&&(n[L.DefaultRow]=this.buildNodeDiffsSeverity(a))}applyEnumRowSeverity(e,n){const t=e,a=pe.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));a&&(n[L.EnumRow]=this.buildNodeDiffsSeverity(a))}applyExamplesRowSeverity(e,n){const t=e,a=pe.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));a&&(n[L.ExamplesRow]=this.buildNodeDiffsSeverity(a))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,a=pe.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));a&&(n[L.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(a))}}class Bo{static instance(e){return this.kindPropertyInstance}}O(Bo,"kindPropertyInstance",new kf);function kt(r,e){for(const n of Object.values(e??{}))na(n)&&r.add(n.data.type)}class xf extends oa{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,l]of Object.entries(e))if(l){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){kt(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){kt(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const s of Object.values(i.validationRowValueDiffs??{}))kt(a,s);continue}na(l)&&a.add(l.data.type)}return a}}class Uo{static instance(e){return this.kindAnyInstance}}O(Uo,"kindAnyInstance",new xf);const Kr={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Af(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Kr.OAS_3_1_NUMERIC_EXCLUSIVE:Kr.OAS_3_0_BOOLEAN_EXCLUSIVE}function Cf(r){return r.dialect??Af(r)}const Vf="?",he="{value}",an="{exclusive_value}",yn=">",Dr=">=",pn="<",wr="<=",_e=1,Re=2,Me=4,qe=8,ii={0:{lower:void 0,upper:void 0},[_e]:{lower:`${Dr} ${he}`,upper:void 0},[Re]:{lower:`${yn} ${an}`,upper:void 0},[Me]:{lower:void 0,upper:`${wr} ${he}`},[qe]:{lower:void 0,upper:`${pn} ${an}`},[Re|_e]:{lower:`${yn} ${he}`,upper:void 0},[Re|Me]:{lower:`${yn} ${an}`,upper:`${wr} ${he}`},[Re|qe]:{lower:`${yn} ${an}`,upper:`${pn} ${an}`},[qe|_e]:{lower:`${Dr} ${he}`,upper:`${pn} ${an}`},[qe|Me]:{lower:void 0,upper:`${pn} ${he}`},[Me|_e]:{lower:`${Dr} ${he}`,upper:`${wr} ${he}`},[Re|_e|Me]:{lower:`${yn} ${he}`,upper:`${wr} ${he}`},[Re|_e|qe]:{lower:`${yn} ${he}`,upper:`${pn} ${an}`},[Re|Me|qe]:{lower:`${yn} ${an}`,upper:`${pn} ${he}`},[qe|_e|Me]:{lower:`${Dr} ${he}`,upper:`${pn} ${he}`},[_e|Re|Me|qe]:{lower:`${yn} ${he}`,upper:`${pn} ${he}`}};function Kt(r){return r!=null}function oi(r){return r!==void 0&&r!==!1}function _f(r,e,n){return(r&(_e|Re))!==(_e|Re)||n===void 0||typeof e!="number"?r:n>=e?r&~_e:r&~Re}function Rf(r,e,n){return(r&(Me|qe))!==(Me|qe)||n===void 0||typeof e!="number"?r:n<=e?r&~Me:r&~qe}function si(r,e,n){return r.replace(he,`${e}`).replace(an,Kt(n)?`${n}`:Vf)}function Mf(r,e){return Kt(r)||Kt(e)}function qf(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=_e),oi(t)&&(i|=Re),n!==void 0&&(i|=Me),oi(a)&&(i|=qe),i}function Yo(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&_e)&&(n&=~Re),typeof e.exclusiveMax!="number"&&!(n&Me)&&(n&=~qe),n}function Pf(r,e){return Yo(r,e)}function Of(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=_f(r,e.min,n);return a=Rf(a,e.max,t),a}const If={[Kr.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Yo},[Kr.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Pf}};function Hf(r,e){const n=If[e];let t=qf(r);return t=n.applyExclusiveSuppression(t,r),Of(t,r)}function Ze(r){const e={data:{},visible:!1},n=Cf(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=Hf(r,n),o=i in ii?{...ii[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=si(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=si(o.upper,r.max,a)),e.visible=Mf(e.data.lower,e.data.upper),e}const lr="0",ot="1";function Kn(r){return r!=null}function Nr(r){return r!==void 0&&r!==!1}function Tr(r){return r!==void 0&&r!==!1}function Er(r){return!!r&&x(r)}function kr(r){return!!r&&k(r)}function Gn(r){return!!r&&I(r)}function li(r){if(r&&(x(r)||I(r)))return r.afterValue}function di(r){if(!r||!(k(r)||I(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function ui(r){if(!r||!(k(r)||I(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function wa(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,l=e.exclusiveMinimum,s=e.maximum,u=e.exclusiveMaximum,c=Kn(n),f=Kn(a),y=Kn(o),p=Kn(s),g=Kn(l),b=Kn(u),h=Er(o),D=kr(o),v=Gn(o),T=Er(s),S=kr(s),E=Gn(s),A=Ze({min:c&&(!y||h||v)?n:void 0,max:f&&(!p||T||E)?a:void 0,exclusiveMin:Nr(t)&&(!g||Er(l)||Gn(l)&&Tr(li(l)))?t:void 0,exclusiveMax:Nr(i)&&(!b||Er(u)||Gn(u)&&Tr(li(u)))?i:void 0}).data;if(!(y||g||p||b))return{before:{...A},after:A};let M,q,F,U;if(c&&!y&&(M=n),(D||v)&&(M=di(o)),f&&!p&&(q=a),(S||E)&&(q=di(s)),Nr(t)&&!g&&(F=t),Gn(l)||kr(l)){const J=ui(l);Tr(J)&&(F=J)}if(Nr(i)&&!b&&(U=i),Gn(u)||kr(u)){const J=ui(u);Tr(J)&&(U=J)}return{before:Ze({min:M,max:q,exclusiveMin:F,exclusiveMax:U}).data,after:A}}function Lf(r,e){if(!e)return;const n=r==="lower"?lr:ot;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function fi(...r){for(const e of r)if(e)return e.type}function ci(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:H.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:H.remove,beforeValue:e}:{type:r,action:H.replace,beforeValue:e,afterValue:n}}function Wo(r,e){const{before:n,after:t}=wa(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return H.add;if(a&&!i)return H.remove}function $o(r,e){const{before:n,after:t}=wa(r,e),a=fi(e.minimum,e.exclusiveMinimum),i=fi(e.maximum,e.exclusiveMaximum),o={},l=ci(a,n.lower,t.lower);l&&(o[lr]=l);const s=ci(i,n.upper,t.upper);return s&&(o[ot]=s),o}function jf(r,e){const n=$o(r,e);return[n[lr],n[ot]].filter(t=>t!==void 0)}function Jf(r,e){if(Wo(r,e)!==void 0)return!1;const n=jf(r,e);if(n.length!==1)return!1;const t=n[0];return x(t)||k(t)}function Ff(r,e){return Jf(r,e)}function mi(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:l}of a){if(!o)continue;const s=o!==l?Lf(i,e):void 0;t.push({text:o,valueDiffKey:s})}return t}function Kf(r,e,n,t,a){const{before:i,after:o}=wa(r,e),l=n===X;if(t){const c=t.data;if(x(c)||k(c))return mi(l?i:o,a,l?o:i)}return mi(l?i:o,a,l?o:i)}function Gf(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(x(e)?e.afterValue:k(e)?e.beforeValue:I(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function Bf(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Gf(n,t):!0:!1})}function yi(r){return typeof r=="number"||typeof r=="boolean"}function Uf(r){if(!R(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),yi(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),yi(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Gt(r){const e=Uf(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function tn(r){return typeof r=="string"?r:JSON.stringify(r)}function zo(r,e,n){switch(r){case me.VALUE_LENGTH:case me.PROPERTIES_COUNT:case me.ITEMS_COUNT:{if(e.startsWith("min"))return Ze({min:Number(n)}).data.lower??tn(n);if(e.startsWith("max"))return Ze({max:Number(n)}).data.upper??tn(n);break}case me.VALUE_RANGE:{if(e==="minimum")return Ze({min:Number(n)}).data.lower??tn(n);if(e==="maximum")return Ze({max:Number(n)}).data.upper??tn(n);if(e==="exclusiveMinimum")return Ze({exclusiveMin:typeof n=="number"?n:!0}).data.lower??tn(n);if(e==="exclusiveMaximum")return Ze({exclusiveMax:typeof n=="number"?n:!0}).data.upper??tn(n);break}case me.VALUE_PATTERN:case me.VALUE_MULTIPLE_OF:case me.UNIQUE_ITEMS:return tn(n);default:return tn(n)}return tn(n)}function Yf(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Wf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function Xo(r,e){return e.length<=1||Yf(r)?0:Wf(r)?1:0}class $f extends ee{constructor(){super(...arguments);O(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});O(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}});O(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!R(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const h=o.diffs[_];if(h&&(x(h.data)||k(h.data)))return u[_]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const D=o.descendantDiffs[a];if(D)return u[_]=D,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}else if(i){const h=i.diffs[_];if(h&&(x(h.data)||k(h.data)))return u[_]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const D=i.descendantDiffs[a];if(D)return u[_]=D,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}if(!ee.isDiffsRecord(s))return;const c=s[_];c&&this.aggregateTextDiff(c,_,u);const f=s.title,y=s.format,p=s.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:f},u);const g=s.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const h of Wn){const D=s[h];ee.isDiff(D)&&this.aggregateMetaFlagDiff(D,h,u)}return R(n)&&this.aggregateValidationRowDiffs(n,s,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,a){const i=new Set;for(const l of Object.values(t.typeLabelFieldDiffs??{}))l!=null&&l.data&&i.add(l.data);const o=new Set;for(const l of Hd(n,a))i.has(l)||l!=null&&l.type&&o.add(l.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[_];if(i&&(x(i.data)||k(i.data))){t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const p=pe.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(p){const g=this.resolveTypePrimitivenessCrossing(o),b=g&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,g):this.asReplaceRowColorizingDiff(p);t.nestingIndicatorRowColorizingDiff={...b,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!R(n))return;const l=this.collectJsonSchemaChildKeys(n);if(l.length===0)return;const s=l.map(p=>a[p]);if(s.some(p=>!p))return;const[u,...c]=s;if(!x(u.data)&&!k(u.data))return;const f=u.data.action;c.every(p=>p.data.action===f&&(x(p.data)||k(p.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return x(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:k(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return Da(n)||of(n)}resolveTypePrimitivenessCrossing(n){var s;const t=(s=n.type)==null?void 0:s.data;if(!t||!I(t))return;const a=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(a),l=this.isChildlessTypeValue(i);if(o!==l)return{beforeIsPrimitive:o,afterIsPrimitive:l}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:a}=n;return I(a)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:H.remove,beforeValue:!0,beforeDeclarationPaths:a.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:H.add,afterValue:!0,afterDeclarationPaths:a.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");R(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");R(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const l=Reflect.get(n,"additionalProperties");l!=null&&t.push("additionalProperties");const s=Reflect.get(n,"additionalItems");return s!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of Go){const o=n[i];ee.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[_];if(t&&(x(t.data)||k(t.data))){n[Sn]=t;return}for(const a of Wn){const i=n[a];if(i){n[Sn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=pe.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[Sn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return I(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:N.Green},removeBefore:{textHighlighterColor:N.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return x(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),k(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),(ln(n)||I(n))&&(t={...t,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={...a,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}asReplaceRowColorizingDiff(n){const{data:t}=n;return I(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return x(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:k(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),a=typeof n.beforeValue=="boolean",i=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:a?void 0:N.Yellow,borderShadowColor:a?N.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:i?void 0:N.Yellow,borderShadowColor:i?N.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:H.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:H.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[_];return!!t&&(x(t.data)||k(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Wn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return I(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:H.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:H.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[_];if(!(!a||!(x(a.data)||k(a.data)))&&R(n))for(const[i,o]of Object.entries(jt)){const l=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[l]||(t.validationRowColorizingDiffs[l]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(jt)){const l=o.filter(S=>t[S]);if(l.length===0)continue;const s=i,u=s===me.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=s===me.VALUE_RANGE?Bf(l,t):l,f=l.map(S=>t[S]).filter(S=>ee.isDiff(S));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Gt(n),p=u?Wo(y,u):void 0;if(u&&(p===H.add||p===H.remove)){const S=p===H.add?this.mergeDiffActionFragment(f,H.add,this.resolveWholeRowDisplayValues(s,l,f,H.add)):this.mergeDiffActionFragment(f,H.remove,this.resolveWholeRowDisplayValues(s,l,f,H.remove)),E=this.buildChangedPropertyMetaDataFromDiff(S);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(u&&Ff(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s);continue}const g=o.some(S=>!l.includes(S)&&Reflect.get(n,S)!==void 0),b=!g&&f.every(x),h=!g&&f.every(k);if(b){const S=this.resolveWholeRowDisplayValues(s,l,f,H.add),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,H.add,S));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(h){const S=this.resolveWholeRowDisplayValues(s,l,f,H.remove),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,H.remove,S));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s));continue}const D=c.map(S=>t[S]).filter(S=>ee.isDiff(S)).map(S=>this.buildChangedPropertyMetaDataFromDiff(S)),v=pe.maxChangedPropertyMetaDataByDiffType(...D);if(!v)continue;const T=this.buildValidationRowValueDiffs(s,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[s]=T,a.validationRowColorizingDiffs[s]=this.asReplaceRowColorizingDiff(v),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,s)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=$o(Gt(n),t),l=[lr,ot];if(!l.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of l){const y=o[f];if(!y||c[f])continue;const p=f===lr?"lower":"upper",g=this.attachValueRangeChipDiffPaths(y,p,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const l=n.map(f=>t[f]).filter(f=>ee.isDiff(f));if(l.length===0)return;const s=l.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=pe.maxChangedPropertyMetaDataByDiffType(...s);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],l=[];for(const s of i)s&&("beforeDeclarationPaths"in s&&s.beforeDeclarationPaths&&o.push(...s.beforeDeclarationPaths),"afterDeclarationPaths"in s&&s.afterDeclarationPaths&&l.push(...s.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...l.length>0?{afterDeclarationPaths:l}:{}}}buildValueRangeLabelChipDiffMetadata(n){return I(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=Nd[n],o={};for(const l of t){const s=a[l];if(!ee.isDiff(s)||i[l]===void 0)continue;const c=this.buildListValueDiffMetadata(s);o[l]=pe.maxChangedPropertyMetaDataByDiffType(o[l],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((l,s)=>{const u=a[s],c=i===H.add?x(u)?u.afterValue:void 0:k(u)?u.beforeValue:void 0;c!==void 0&&o.push(zo(n,l,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(s=>k(s)||I(s)?s.beforeDeclarationPaths:[]),l=n.flatMap(s=>x(s)||I(s)?s.afterDeclarationPaths:[]);return t===H.add?{type:i.type,scope:i.scope,description:i.description,action:H.add,afterValue:a,afterDeclarationPaths:l}:{type:i.type,scope:i.scope,description:i.description,action:H.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return I(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}}class zf extends $f{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!R(e))return o;const{diffsMetaKey:l}=n,s=Reflect.get(e,l),u=ee.isDiffsRecord(s),c=this.resolveWholeListFieldDiff(e,"enum",l),f=this.resolveWholeListFieldDiff(e,"examples",l),y=this.resolveListFieldItemDiffs(e,"enum",l),p=this.resolveListFieldItemDiffs(e,"examples",l),g=this.resolveAllowedAdditionalPropertyNamesDiff(t,a,l),b=!!c||!!f||Object.keys(y).length>0||Object.keys(p).length>0||!!g;if(!o&&!u&&!b){const D=this.resolveRequiredMetaDiff(t,a,l);if(!D)return;const v={required:D};return this.aggregatePropertyTitleRowDiff(v),v}const h={...o??{}};if(u){const D=s.default;ee.isDiff(D)&&(h.default=this.buildDefaultValueDiffMetadata(D))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(p).length>0&&(h.examplesValueDiffs=p),g!=null&&g.diff&&(h.allowedAdditionalPropertyNamesDiff=g.diff),Object.keys((g==null?void 0:g.valueDiffs)??{}).length>0&&(h.allowedAdditionalPropertyNamesValueDiffs=g.valueDiffs),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(g==null?void 0:g.mergedValues,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const D=this.resolveRequiredMetaDiff(t,a,l);D&&(h.required=D)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[_];if(n&&(x(n.data)||k(n.data))){e[Sn]=n;return}for(const a of Wn){const i=e[a];if(i){e[Sn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[Sn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!R(i)&&!R(a))return;const o=String(e),l=R(i)?Reflect.get(i,t):void 0,s=R(i)?Reflect.get(i,"required"):void 0,u=R(a)&&"required"in a?a.required:void 0,c=Array.isArray(s)?s:Array.isArray(u)?u:void 0;if(ee.isDiffsRecord(l)){const y=l.required;if(ee.isDiff(y)){const p=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(p)return p}if(ee.isDiffsRecord(y)){const p=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(p)return p}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(x(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(k(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(I(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if(ee.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!ee.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if(ee.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(ee.isDiff(t)){if(x(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(k(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return I(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!ee.isDiffsRecord(a))return;const i=a[n];if(ee.isDiff(i)){if(x(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(k(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return ee.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var f;if(e!==Z.ADDITIONAL_PROPERTIES||!n)return;const a=(f=n.meta())==null?void 0:f._fragment;if(!R(a))return;const i=Reflect.get(a,"propertyNames"),o=Reflect.get(a,t),l=ee.isDiffsRecord(o)?o.propertyNames:void 0;if(ee.isDiff(l)){const y=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(l);if(y)return y}if(!R(i))return;const s=Reflect.get(i,"enum");if(!Array.isArray(s)||s.length===0)return;const u=this.resolveWholeListFieldDiff(i,"enum",t),c=this.resolveListFieldItemDiffs(i,"enum",t);if(!(!u&&Object.keys(c).length===0))return{diff:u,valueDiffs:Object.keys(c).length>0?c:void 0,mergedValues:s}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(x(e)&&R(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(k(e)&&R(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i){if(!Array.isArray(e)||e.length===0)return;const o=n[_];if(o&&(x(o.data)||k(o.data))){n[i]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const l=n[t];if(l){n[i]=l;return}const s=n[a];if(!s||Object.keys(s).length===0)return;const u=pe.maxChangedPropertyMetaDataByDiffType(...Object.values(s));u&&(n[i]=this.asReplaceRowColorizingDiff(u))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[_];if(i&&(x(i.data)||k(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const l=o.data;if(x(l)||k(l)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(l);return}I(l)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Bt{static instance(e){return this.kindPropertyInstance}}O(Bt,"kindPropertyInstance",new zf);const Xf="[JSON Schema][WithDiffs]";class Qf extends Jo{constructor(n){super(n);O(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Xf}createTree(){return new bf}createNodeDataBuilder(){return new vf((n,t)=>this.pick(n,t))}prepareSource(){return new Sf(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!fe(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Bt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Uo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Ko.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Bt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Fo.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Bo.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),sa(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Lo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&fe(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function xt(r){return!!r&&Object.keys(r).length>0}function pi(r){return!!r&&r.size>0}function Zf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function gi(r,e){if(!(xt(r.diffs)||xt(r.descendantDiffs)||pi(r.diffsSummary)||pi(r.descendantDiffsSummary)||xt(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=Zf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Ut(r,e,n){if(r.isCycle)return gi(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return gi(r,e)?!0:r.type===ue.COMPLEX?r.nestedNodes().some(t=>Ut(t,e,n)):r.childrenNodes().some(t=>Ut(t,e,n))}finally{n.visiting.delete(r.id)}}function Qo(r,e){return Ut(r,e,{visiting:new Set})}function ec(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),l=r.map((s,u)=>({kind:"node",node:s,sourceIndex:u}));return{memberships:o,visibleSequence:l}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const l=r[o].id,s=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:l,isBlockStart:u===o,blockSize:s});a.push({kind:"placeholder",unchangedBlockId:l,blockSize:s,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function nc(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return ec(r,a=>Qo(a,t),n)}function Zo(r){return r.kind===w.MESSAGE}function rc(r){return r.kind===w.MESSAGE_SECTION_SELECTOR}function es(r){return r.kind===w.MESSAGE_CONTENT}function tc(r){return r.kind===w.MESSAGE_HEADERS&&r.key==="headers"}function ac(r){return r.kind===w.MESSAGE_PAYLOAD&&r.key==="payload"}function ns(r){return r.kind===w.MESSAGE_CHANNEL}function ic(r){return r.kind===w.MESSAGE_CHANNEL_PARAMETERS}function rs(r){return r.kind===w.MESSAGE_OPERATION}function Na(r){return r.kind===w.EXTENSIONS}function st(r){return r.kind===w.BINDINGS}function At(r){return r.kind===w.BINDING}function oc(r){return es(r)||ns(r)||rs(r)}function sc(r){return r.kind===w.SERVERS}function lc(r){return r.kind===w.SERVER}function Je(r,e,n){var a;if(!R(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?k(t)?t.beforeValue!==void 0:x(t)?t.afterValue!==void 0:I(t)?t.beforeValue!==void 0||t.afterValue!==void 0:ln(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const dc=r=>{if(!ur(r)||uo(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function uc(r){if(!ur(r)||uo(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,l)=>(jd(l)&&(o[l]=r[l]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const fc=[dc,uc],Be=(r=$e.root)=>({"/allOf":{"/*":()=>Be($e.allOf)},"/oneOf":{"/*":()=>Be($e.oneOf)},"/anyOf":{"/*":()=>Be($e.anyOf)},"/properties":{"/*":()=>Be($e.property)},"/items":()=>({...Be($e.items),"/*":({key:e})=>Il(e)?Be($e.item):{}}),"/additionalProperties":()=>Be($e.additionalProperties),"/additionalItems":()=>Be($e.additionalItems),"/patternProperties":{"/*":()=>Be($e.patternProperty)},kind:r,transformers:fc});function cc(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((l,s)=>s(l,r,n,t),e);return o!==e&&Wa(o)&&Wa(e)&&Object.defineProperty(o,fo,{value:e,enumerable:!1}),{value:o}}}function mc(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!Hl.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:l,nodeIdPrefix:s}=i,u=s+Ll(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:Ta(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=l?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:l,parent:l.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(l?l.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===jl.simple)return{done:!0};const p=i.treeLevel+1;if(y.value){const g=new Map(i.alreadyConvertedMappingStack);g.set(n,y.node);const b=n[fo];b!==void 0&&g.set(b,y.node);let h;return Jd(y.node)?h={parent:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel}:h={parent:o,container:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:h}}else return{done:!0}}}const yc=2;function Ta(r,e){return[Kd(r),cc(e),mc(r)]}const pc=(r,e=yc)=>{const n=new Fd(r);if(!ur(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return Dn(r,Ta(n,r),{state:t,rules:Be()}),n},gc=2,hc=(r,e,n=gc)=>{const t=new Gd(r,e);if(!ur(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return Dn(r,Ta(t,r),{state:a,rules:Be()}),t};function Le(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function bc(r){return Le(r,Ld,w.BINDINGS)}function Ct(r){return Le(r,He,w.BINDING)}function Sc(r){return Le(r,He)}function vc(r){return Le(r,He,w.MESSAGE_CHANNEL)}function Dc(r){return Le(r,He)}function xr(r){return Le(r,He,w.SERVER)}function wc(r){return Le(r,He)}function Nc(r){return Le(r,He,w.MESSAGE_HEADERS)}function Tc(r){return Le(r,He,w.MESSAGE_PAYLOAD)}function Ec(r){return Le(r,He,w.MESSAGE)}function kc(r){return Le(r,He,w.MESSAGE_OPERATION)}function xc(r){return Le(r,He,w.MESSAGE_SECTION_SELECTOR)}function Ac(r){return Le(r,He,[w.MESSAGE_CONTENT,w.MESSAGE_CHANNEL,w.MESSAGE_OPERATION])}const ts=r=>{const e=Se(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(e){case Te:return d.jsx(Hn,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Cn,{left:d.jsx(Vt,{...r,layoutSide:X}),right:d.jsx(Vt,{...r,layoutSide:te})})});default:return d.jsx(In,{content:d.jsx(Vt,{...r,layoutSide:te})})}},Cc={send:"bg-sky-400",receive:"bg-green-500"},Vt=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[se]:i}=r,o=m.useCallback(()=>{const s=a&&Vc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Cc[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(x(a.data)&&t===X&&(u=null),k(a.data)&&t===te&&(u=null)),!s)return d.jsxs(d.Fragment,{children:[u,d.jsx(Nt,{value:n,variant:B.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:p}=s,g=t===X?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Nt,{value:c,variant:B.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Nt,{value:g,variant:B.h4,layoutSide:t,diff:p,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),l=m.useMemo(()=>{const s=new Set;if(a){const{styles:u}=a;t===X?s.add(re.background(u.before.backgroundColor)):s.add(re.background(u.after.backgroundColor))}return Array.from(s)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${cr} ${l.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Vc(r){const{data:e}=r;if(!I(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),l=i===-1?t:t.slice(0,i);if(o!==l)return!1;const s={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:s}}}ts.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const _c=m.memo(r=>r.mergedSource===null?null:d.jsx(En,{fallback:d.jsx(kn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Rc,{...r})})),Rc=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=An,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:l,diffTypes:s}=r,u=m.useMemo(()=>nn(a),[a]),c=m.useMemo(()=>new zu({source:e,referenceNamePropertyKey:o,diffsMetaKeys:l,operationKeys:n,logger:u}),[e,o,l,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!Zo(y)?null:d.jsx(nt.Provider,{value:l,children:d.jsx(la.Provider,{value:s,children:d.jsx(wo.Provider,{value:a,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Pn.Provider,{value:Te,children:d.jsx(Ie.Provider,{value:0,children:d.jsx(Ya,{node:y,noHeading:i})})})})})})})});_c.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Ea=m.createContext(void 0);function Mc(){return m.useContext(Ea)}const lt=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Bd(),i=Fe(),l=e.node.newDataLevel?i+1:i,s=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=T=>{if(T){e.select(T),f(T),n(T);const S=u.find(E=>E.id===T);a==null||a(S)}},p=Se(),g=m.useMemo(()=>{const T={};return u.forEach(S=>{const E=S.value().$changes??{},A=da({node:S});A&&(T[S.id]={...A,...Object.keys(E).length?{$changes:E}:{}})}),T},[u]),b=Fe()+1,h=u.find(T=>(T==null?void 0:T.id)===c),D=Ud(h)?h==null?void 0:h.kind:"",v=co(t??(s==null?void 0:s.$nodeChange));return d.jsx(Ie.Provider,{value:l,children:d.jsx(Yd,{nodesTypeData:g,selectedNodeId:c,combiner:D,onSelect:y,layoutMode:p,level:b,$nodeChange:v,$nestedChanges:s==null?void 0:s.$nestedChanges,$nestedChangesSummary:p!==en?e.$nestedChangesSummary:void 0})})};lt.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const dt=m.createContext(void 0);function as(){return m.useContext(dt)}const yr=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,l]=m.useState(0);m.useEffect(()=>{i(e),l(n)},[e,n]);const s=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(Td.Provider,{value:s,children:t})});yr.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function is(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class qc extends ia{constructor(){super()}}const ut={PROPERTY:"property"},dr=Object.values(ut),ae={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Pc extends Xr{constructor(){super(...arguments);O(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const ke=class ke{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=ke.isArrayItemKey(e);return ke.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=ke.getValueType(e),i=ke.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:ke.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===ae.BOOLEAN||e===ae.NULL}static isPrimitiveValue(e){return e!==ae.JSON_SCHEMA&&e!==ae.MULTI_SCHEMA&&e!==ae.OBJECT&&e!==ae.ARRAY}static getValueType(e){return typeof e=="string"?ae.STRING:typeof e=="number"?ae.NUMBER:typeof e=="boolean"?ae.BOOLEAN:typeof e=="object"?e===null?ae.NULL:Array.isArray(e)?ae.ARRAY:ke.isJsonSchema(e)?ae.JSON_SCHEMA:ke.isMultiSchema(e)?ae.MULTI_SCHEMA:ae.OBJECT:ae.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=It in e&&typeof e.type=="string"&&Jl.some(a=>a===e.type)||Pt in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>ke.isJsonSchema(a))||Ot in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>ke.isJsonSchema(a))||qt in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>ke.isJsonSchema(a))||Lr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Ki,Fl,Kl,eo,Gl,Bl,Ul,It,Fi,Ht,Bi,no,ao,io,ro,to,so,oo,lo,$i,Wi,zi,Zi,Qi,Ii,Hi,Xi,Gi,qi,Oi,Pi,qt,Pt,Ot,Yl,Yi,ji,Ji,Ui,Li,Wl,Lr]);return n&&Object.keys(e).every(a=>t.has(a)||ke.isExtensionPropertyInJsonSchema(a)||ke.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&R(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!ea(e))return e;const t=de(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let l;for(const s of o){const u=e[s],c=t[s];if(u===void 0||c===void 0||!I(c))continue;const{beforeValue:f,afterValue:y}=c,p=R(f),g=Array.isArray(f),b=R(y),h=Array.isArray(y);if(!(g&&b||p&&h))continue;l||(l={...e});const v={...f,...y};l[s]=v}return l??e}};O(ke,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:ae.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let K=ke;const Oc=(r,e,n,t,a)=>K.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function os(){return{"/*":()=>os(),transformers:[Oc],kind:ut.PROPERTY}}function Ic(r){return $r(r)}const Hc=new Set(dr);class Lc extends zr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=K.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return Hc.has(e)}}class jc extends Ln{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!x(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class ss{static instance(e){if(!this.instances.has(null)){const n=new jc;this.instances.set(null,n)}return this.instances.get(null)}}O(ss,"instances",new Map);class Jc extends Qn{constructor(){super(...arguments);O(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});O(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!R(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=de(n[a]);if(!i)return;const o={};for(const[l,s]of Object.entries(i)){if(!s)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,p=Oe;if(x(s)){const{afterValue:g}=s,b=K.getValueType(g),h=K.isPrimitiveValue(b);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},f={...f,increaseLevel:!1},c={isContentVisible:h,isHeaderVisible:!0,backgroundColor:N.Green},y={...y,increaseLevel:!0},p=bn}if(k(s)){const{beforeValue:g}=s,b=K.getValueType(g);u={isContentVisible:K.isPrimitiveValue(b),isHeaderVisible:!0,backgroundColor:N.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={...y,increaseLevel:!1},p=bn}if(I(s)){const{beforeValue:g,afterValue:b}=s,h=K.getValueType(g),D=K.getValueType(b),v=K.isPrimitiveValue(h),T=K.isPrimitiveValue(D),S=K.isPredefinedValueSet(h),E=K.isPredefinedValueSet(D);u={isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow},v&&(S?u.borderShadowColor=N.Yellow:u.textHighlighterColor=N.Yellow),c={isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow},T&&(E?c.borderShadowColor=N.Yellow:c.textHighlighterColor=N.Yellow),p=$l}o[l]={data:s,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:p}}return o}}class ls{static instance(e){if(!this.instances.has(null)){const n=new Jc;this.instances.set(null,n)}return this.instances.get(null)}}O(ls,"instances",new Map);class Fc extends pe{aggregate(e){const n=e[_];if(n){const o=n.data,l={type:o.type,causedAt:[]};return I(o)||k(o)?l.causedAt=o.beforeDeclarationPaths[0]:x(o)&&(l.causedAt=o.afterDeclarationPaths[0]),{[L.TitleRow]:l}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return I(a)||k(a)?i.causedAt=a.beforeDeclarationPaths[0]:x(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[L.TitleRow]:i}}}class ds{static instance(e){return this.instances.has(null)||this.instances.set(null,new Fc),this.instances.get(null)}}O(ds,"instances",new Map);class Kc extends oa{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!x(n)&&!k(n)&&!I(n)&&!ln(n))return!1;return!0}}class Gc{static instance(e){return new Kc}}class Bc extends ee{isComplexValue(e){return R(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const l=a.diffs[_];if(l){const{data:s}=l;if(x(s)){const{afterValue:u}=s,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),b={data:{...s,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:bn,inherited:!0};return o[_]=b,o}return o[_]=l,o}if(k(s)){const{beforeValue:u}=s,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),b={data:{...s,beforeValue:y},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:bn,inherited:!0};return o[_]=b,o}return o[_]=l,o}if(I(s)){const{beforeValue:u,afterValue:c}=s,f=K.getValueType(u),y=K.getValueType(c),p=K.isPrimitiveValue(f),g=K.isPrimitiveValue(y);if(p&&g)return o[_]=l,o;if(!p&&this.isComplexValue(u)&&g){const b=u[t],h=K.getValueType(b),D=K.isPrimitiveValue(h),v=K.isPredefinedValueSet(h),T={data:{...s,beforeValue:b,afterValue:null},styles:{before:{isContentVisible:D,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:bn,inherited:!0};return D&&(T.styles.before.textHighlighterColor=N.Yellow),v&&(T.styles.before.borderShadowColor=N.Yellow),o[_]=T,o}if(!g&&this.isComplexValue(c)&&p){const b=c[t],h=K.getValueType(b),D=K.isPrimitiveValue(h),v=K.isPredefinedValueSet(h),T={data:{...s,beforeValue:null,afterValue:b},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:D,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:bn,inherited:!0};return D&&(T.styles.after.textHighlighterColor=N.Yellow),v&&(T.styles.after.borderShadowColor=N.Yellow),o[_]=T,o}if(!p&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const b=u[t],h=c[t],D=K.getValueType(b),v=K.getValueType(h),T=K.isPrimitiveValue(D),S=K.isPrimitiveValue(v),E=K.isPredefinedValueSet(D),A=K.isPredefinedValueSet(v),C={data:{...s,beforeValue:b,afterValue:h},styles:{before:{isContentVisible:b!==void 0&&T,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?N.Gray:N.Yellow,textHighlighterColor:b!==void 0?N.Yellow:void 0},after:{isContentVisible:h!==void 0&&S,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?N.Gray:N.Yellow,textHighlighterColor:h!==void 0?N.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:bn,inherited:!0};return T&&(C.styles.before.textHighlighterColor=N.Yellow),S&&(C.styles.after.textHighlighterColor=N.Yellow),E&&(C.styles.before.borderShadowColor=N.Yellow),A&&(C.styles.after.borderShadowColor=N.Yellow),o[_]=C,o}}}else{const s=a.descendantDiffs[t];if(s)return o[_]=s,o}}}}class us{static instance(e){return this.instances.has(null)||this.instances.set(null,new Bc),this.instances.get(null)}}O(us,"instances",new Map);class Uc extends Pc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=nn()}=n;super();O(this,"tree");O(this,"source");O(this,"supportJsonSchema");O(this,"diffsMetaKeys");O(this,"logger");O(this,"nodeDataBuilder");O(this,"CHANGE_SEVERITIES",{[zl]:6,[Xl]:5,[Ql]:4,[Zl]:3,[ed]:2,[nd]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new qc,this.nodeDataBuilder=new Lc}build(){if(!R(this.source))return this.tree;Yr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Qr,diffMetaKeys:this.diffsMetaKeys},t=os(),a=Ic({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===ue.SIMPLE,isComplexNode:i=>i.type===ue.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!R(o)&&!Array.isArray(o))return!0;const l=i.value();return l?this.supportJsonSchema&&(l.before.valueType===ae.JSON_SCHEMA||l.after.valueType===ae.JSON_SCHEMA||l.before.valueType===ae.MULTI_SCHEMA||l.after.valueType===ae.MULTI_SCHEMA):!1}});return Dn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return R(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l=null,newDataLevel:s}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:ue.SIMPLE,parent:l&&this.isJsoSimpleTreeNodeWithDiffs(l)?l:null,container:null,value:u,meta:c,newDataLevel:s},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const g=y.diffs[_];if(g){const{data:b}=g;if(x(b)&&u&&(u.before=K.DEFAULT_BASE_JSO_NODE_VALUE),k(b)&&u&&(u.after=K.DEFAULT_BASE_JSO_NODE_VALUE),I(b)){const{beforeValue:h}=b,D=K.transformRawJsoPropertyToBaseJsoNodeValue(t,h);u&&(u.before=D)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return us.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return Gc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return ls.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return ss.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return ds.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),sa(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[_];if(!t||!I(t.data))return!1;const a=K.getValueType(t.data.beforeValue),i=K.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),l=this.isJsoComplexValueType(i);return o!==l}isJsoComplexValueType(n){return n===ae.OBJECT||n===ae.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[_]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===ue.SIMPLE||n.type===ue.COMPLEX))}isJsoTreeNodeKind(n){return dr.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===ue.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===ue.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Qe={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function fs(r,e){if(e)return{type:"object",properties:{[r]:e}}}function Yt(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Yc(r,e){if(e&&!(e.valueType!==Qe.JSON_SCHEMA&&e.valueType!==Qe.MULTI_SCHEMA))return R(e.value)?fs(r,e.value):void 0}function Wc(r,e,n,t){if(e&&!(e.before.valueType!==Qe.JSON_SCHEMA&&e.before.valueType!==Qe.MULTI_SCHEMA&&e.after.valueType!==Qe.JSON_SCHEMA&&e.after.valueType!==Qe.MULTI_SCHEMA)){if((e.before.valueType===Qe.JSON_SCHEMA||e.before.valueType===Qe.MULTI_SCHEMA)&&R(e.before.value))return Yt(r,e.before.value,n,t);if((e.after.valueType===Qe.JSON_SCHEMA||e.after.valueType===Qe.MULTI_SCHEMA)&&R(e.after.value))return Yt(r,e.after.value,n,t)}}const ka=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});ka.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function cs(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function $c(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=cs({appearance:e});return m.useMemo(()=>[a,e==="text"?re.highlighter(n):"",e==="block"?re.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const Or=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=$c({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(ka,{isVisible:e,value:n,className:o})});Or.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const xa=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[se]:t}=r,a=Ue(),i=Zn(),{beforeLevel:o,afterLevel:l}=ra(),[s,u]=m.useState(!0),c=m.useCallback(()=>{u(M=>!M)},[]),f=e.value(),y=e.diffs,p=e.descendantDiffsSummary,g=m.useMemo(()=>y[_],[y]),b=m.useCallback(M=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Or,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!s&&d.jsx(ua,{values:Array.from(p)})]});const{styles:q}=g;return M===X?d.jsx(Or,{isVisible:q.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:q.before.textHighlighterColor,borderShadowColor:q.before.borderShadowColor}):M===te?d.jsx(Or,{isVisible:q.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:q.after.textHighlighterColor,borderShadowColor:q.after.borderShadowColor}):d.jsx(d.Fragment,{})},[s,p,f,g]),h=m.useMemo(()=>{const M=dn(e);return oe(M,{resolveDiff:()=>g})},[e,g]),D=e.childrenNodes(),v=m.useMemo(()=>{const M=!!f,q=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==ae.UNKNOWN,F=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==ae.UNKNOWN;return M&&(q||F)},[f]),T=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),S=m.useMemo(()=>n?Wc(e.key,f,g,i):void 0,[i,e.key,f,g,n]);if(S)return i?d.jsx(yt,{schema:S,expandedDepth:2,displayMode:a,layoutMode:Te,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const E=is(D),[A,C]=(()=>{let M=o+1,q=l+1;const[F]=D,U=F==null?void 0:F.diffs[_];return U&&E&&(M=U.flags.before.increaseLevel?o+1:o,q=U.flags.after.increaseLevel?l+1:l),[M,q]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ge,{"data-precededby":t,value:`${e.key}`,expandable:v,expanded:s,onClickExpander:v?c:void 0,variant:B.body2,enableHeaderValue:T,subheader:b,usage:Zr.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...h}),s&&d.jsx(yr,{beforeLevel:A,afterLevel:C,children:D.map(M=>d.jsx(xa,{"data-precededby":V.JSO_PROPERTY,node:M,supportJsonSchema:n},M.id))})]})};xa.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const ft=m.memo(r=>r.mergedSource===null?null:d.jsx(En,{fallback:d.jsx(kn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(zc,{...r})})),zc=m.memo(r=>{const{mergedSource:e,displayMode:n=An,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:l}=r,{[se]:s}=r,u=m.useMemo(()=>nn(i),[i]),c=m.useMemo(()=>new Uc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const p=y.childrenNodes();if(p.length===0)return null;const g=is(p),[b,h]=(()=>{let D=t,v=t;const[T]=p,S=T.diffs[_];return S&&g&&(D=S.flags.before.increaseLevel?t:t-1,v=S.flags.after.increaseLevel?t:t-1),[D,v]})();return d.jsx(nt.Provider,{value:o,children:d.jsx(la.Provider,{value:l,children:d.jsx(xn.Provider,{value:n,children:d.jsx(Pn.Provider,{value:Te,children:d.jsx(yr,{beforeLevel:b,afterLevel:h,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:p.map((D,v)=>d.jsx(xa,{"data-precededby":v===0?s:V.JSO_PROPERTY,node:D,supportJsonSchema:a},D.id))})})})})})})});ft.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class Xc extends Zt{constructor(){super()}}function ms(){return{"/*":()=>ms(),kind:ut.PROPERTY}}function Qc(r){return $r(r)}const Zc=new Set(dr);class em extends zr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==ut.PROPERTY?null:K.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Zc.has(e)}}class nm extends Xr{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=nn()}=n;super();O(this,"tree");O(this,"source");O(this,"supportJsonSchema");O(this,"materializeDepth");O(this,"logger");O(this,"nodeDataBuilder");O(this,"lazyState",new So);O(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new Xc,this.nodeDataBuilder=new em}build(){if(!R(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Qr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=ms();return this.crawlHooks=Qc({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(a,i,o,l,s)=>this.createNodeFromRaw(a,i,o,l,s),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!R(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===ae.JSON_SCHEMA||o.valueType===ae.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Ed}}),Dn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:vo(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};Dn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:ue.COMPLEX,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,{...o,parent:l,container:s}),f=this.createNodeMeta(t,o),y={type:ue.SIMPLE,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isJsoSimpleTreeNode(n){return n.type===ue.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const ct=r=>d.jsx(En,{fallback:d.jsx(kn,{componentName:"JSON Schema Viewer"}),children:d.jsx(rm,{...r})}),rm=r=>{const{schema:e,expandedDepth:n=Wr,displayMode:t=An,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:l=0}=r,s=m.useMemo(()=>pc(e),[e]),c=m.useMemo(()=>new Ao(s,n),[n,s]).root;let f=null;return rt(c)&&(f=d.jsx(mt,{state:c,overriddenKind:a})),tt(c)&&(f=d.jsx(lt,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(dt.Provider,{value:o,children:d.jsx(Ea.Provider,{value:i,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Ie.Provider,{value:l,children:f})})})})};ct.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const ys=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=cs({appearance:t});return d.jsx(ka,{isVisible:e,value:n,className:a})});ys.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Aa=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[se]:t}=r,a=Ue(),i=Fe(),[o,l]=m.useState(!0),s=m.useCallback(()=>{l(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(ys,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),p=m.useMemo(()=>n?Yc(e.key,u):void 0,[e.key,u,n]);return p?d.jsx(ct,{schema:p,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ge,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:s,variant:B.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:Zr.JsoProperty}),o&&d.jsx(Ie.Provider,{value:i+1,children:y.map(g=>d.jsx(Aa,{"data-precededby":V.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};Aa.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const pr=m.memo(r=>r.source===null?null:d.jsx(En,{fallback:d.jsx(kn,{componentName:"JSO Viewer"}),children:d.jsx(tm,{...r})})),tm=m.memo(r=>{const{source:e,displayMode:n=An,layoutMode:t=en,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[se]:l}=r,s=m.useMemo(()=>nn(o),[o]),u=m.useMemo(()=>new nm({source:e,supportJsonSchema:i,logger:s}),[e,i,s]),c=m.useMemo(()=>u.build(),[u]);s.debug("[JSO] Source:",e),s.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(xn.Provider,{value:n,children:d.jsxs(Pn.Provider,{value:t,children:[" ",d.jsx(Ie.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((p,g)=>d.jsx(Aa,{"data-precededby":g===0?l:V.JSO_PROPERTY,node:p,supportJsonSchema:i},p.id))})})]})})});pr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const hi=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=Fe(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const l=new Set;return n===X&&(x(e)&&(l.add(re.background(N.Gray)),o=!1),k(e)&&l.add(re.background(N.Red))),n===te&&(x(e)&&l.add(re.background(N.Green)),k(e)&&(l.add(re.background(N.Gray)),o=!1)),{diffStylesClasses:Array.from(l),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row h-full ${a.join(" ")}`,children:[d.jsx(On,{level:t+1,lastInvisible:!0}),i&&d.jsx(Co,{children:"Extensions"})]})}),am=[],ps=r=>{const{extensions:e,$nodeChange:n}=r,t=Fe(),a=Ue(),i=Se(),o=Zn(),l=i===$a,s=i===Te,u=m.useMemo(()=>{let g=im(n);return g||(g=sm(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(k(u)||I(u))&&(g=u.beforeDeclarationPaths[0]??[]),x(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(On,{level:t+1,lastInvisible:!0}),d.jsx(Co,{children:"Extensions"})]});switch(i){case $a:return null;case Te:return d.jsx(Hn,{diffType:c,diffTypeCause:f,children:d.jsx(Cn,{left:d.jsx(hi,{diff:u,layoutSide:X}),right:d.jsx(hi,{diff:u,layoutSide:te})})});default:return g}},[i,t,u,f,c]),p=m.useMemo(()=>{if(l)return null;if(s&&o){const g=om(e,u,o);return d.jsx(ft,{mergedSource:g,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:am})}return d.jsx(pr,{source:e,initialLevel:t+1})},[l,s,o,e,t,u,a]);return p?d.jsxs("div",{className:"flex flex-col",children:[y,p]}):null};function im(r){if(!r)return;const{depth:e,...n}=r;return n}function om(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)Pr(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function sm(r,e){var l;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=de(ie(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const s of i)if(((l=a[s])==null?void 0:l.action)!==(o==null?void 0:o.action))return;return o}ps.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const lm=["type","nullable","title","format"],dm=["required","readOnly","writeOnly","deprecated"],gs=r=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:a,readOnly:i,writeOnly:o,deprecated:l,isExpandable:s,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:y=mo,level:p=0,$changes:g,$metaChanges:b,$nodeChange:h,$nodeChangesSummary:D}=r,v=!!h,T=rd(),S=Mc(),E=ur(S)&&(n!=null&&n.title)&&S[n.title]?S[n.title]:void 0,A=td(v?void 0:D),C=m.useCallback(le=>T.length===0||T.includes(le),[T]),{isDocumentLayoutMode:M,isInlineDiffsLayoutMode:q,isSideBySideDiffsLayoutMode:F}=yo(y),U=!!g&&lm.some(le=>Yn(g[le]))||!!b&&dm.some(le=>Yn(b[le])),{nodeAdded:j,nodeRemoved:J,nodeReplaced:G,nodeRenamed:P}={nodeAdded:v&&h.action===H.add,nodeRemoved:v&&h.action===H.remove,nodeReplaced:v&&h.action===H.replace,nodeRenamed:v&&h.action===H.rename},Y=ad(id(g,b,ld),T),[z,Q]=v?jr(h):U?jr(...Y):od,je=sd(z,T),We=v?za[h==null?void 0:h.action]:U?za[H.replace]:"",W=({layoutSide:le})=>{const rn=F?"w-1/2":"w-full",$=!M&&!v&&U&&!!(b!=null&&b.required),ye=$d(),Ke=ye&&ye===le,Ge=c&&!s,Jn=["flex flex-row",!Ge&&"gap-2",rn].filter(Boolean).join(" "),Ve=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(Vo,{...t,showNullable:!0,layoutMode:y,layoutSide:le,$changes:g})}),dd.isNotEmpty(A)&&!M&&s&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(ua,{values:A,filter:C})}),a&&d.jsx(at,{text:fa,children:d.jsx(ca,{})}),d.jsx(ma,{requiredChanged:$,readOnly:i,writeOnly:o,deprecated:l,layoutSide:le,isNodeChanged:v,isContentChanged:U,$nodeChange:h,$metaChanges:b}),E&&d.jsx(ud,{label:E,colorSchema:fd(cd),layoutMode:y,layoutSide:le,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:Jn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(On,{level:p}),Ge?d.jsx("div",{className:"w-5"}):d.jsx(zd,{isRoot:c,isExpandable:s,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${s?"hover:cursor-pointer":""}`,onClick:s?f:void 0,children:d.jsx(Xd,{...n,showRequired:!0,layoutMode:y,layoutSide:le,requiredChange:b==null?void 0:b.required,titleChange:h})}),!Ke&&d.jsx(Ve,{})]})]})};return M?d.jsx("div",{className:"flex flex-row",children:d.jsx(W,{...r,layoutSide:te})}):q?!v&&!U?d.jsx("div",{className:"flex flex-row",children:d.jsx(W,{...r,layoutSide:X})}):d.jsxs("div",{className:`flex flex-row relative ${je?We:""}`,children:[z&&je&&d.jsx(Xa,{variant:z,message:Q}),d.jsx(W,{...r,layoutSide:X})]}):F?!v&&!U?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(W,{...r,layoutSide:X}),d.jsx(W,{...r,layoutSide:te})]}):d.jsxs("div",{className:`flex flex-row relative ${je?We:""}`,children:[z&&je&&d.jsx(Xa,{variant:z,message:Q}),!v&&U||v&&(J||G||P)?d.jsx(W,{...r,layoutSide:X}):d.jsx(Qa,{level:(h==null?void 0:h.depth)??p}),!v&&U||v&&(j||P||G)?d.jsx(W,{...r,layoutSide:te}):d.jsx(Qa,{level:(h==null?void 0:h.depth)??p})]}):d.jsx(Wd,{layoutMode:y})};gs.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function um(r,e){var S,E,A;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,l=o==null?void 0:o.exclusiveMinimum,s=o==null?void 0:o.exclusiveMaximum,u=typeof l=="number"?l:l===!0&&ce(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof s=="number"?s:s===!0&&ce(o==null?void 0:o.maximum)?o.maximum:void 0,f=l===!0||o==null?void 0:o.minimum,y=s===!0||o==null?void 0:o.maximum,p=o==null?void 0:o.multipleOf,g=(A=(E=(S=r==null?void 0:r.parent)==null?void 0:S.value())==null?void 0:E.propertyNames)==null?void 0:A.enum,b=e==null?void 0:e.minProperties,h=e==null?void 0:e.maxProperties,D=e==null?void 0:e.uniqueItems,v=e==null?void 0:e.minItems,T=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:p},object:{allowedPropertyNames:g,minProperties:b,maxProperties:h},array:{uniqueItems:D,minItems:v,maxItems:T}}}const fm="?",be="{value}",on="{exclusive_value}",gn=">",Ar=">=",hn="<",Cr="<=",ve=1,De=2,we=4,Ne=8,Vr={0:{lower:void 0,upper:void 0},[ve]:{lower:`${Ar} ${be}`,upper:void 0},[De]:{lower:`${gn} ${on}`,upper:void 0},[we]:{lower:void 0,upper:`${Cr} ${be}`},[Ne]:{lower:void 0,upper:`${hn} ${on}`},[De|ve]:{lower:`${gn} ${be}`,upper:void 0},[De|we]:{lower:`${gn} ${on}`,upper:`${Cr} ${be}`},[De|Ne]:{lower:`${gn} ${on}`,upper:`${hn} ${on}`},[Ne|ve]:{lower:`${Ar} ${be}`,upper:`${hn} ${on}`},[Ne|we]:{lower:void 0,upper:`${hn} ${be}`},[we|ve]:{lower:`${Ar} ${be}`,upper:`${Cr} ${be}`},[De|ve|we]:{lower:`${gn} ${be}`,upper:`${Cr} ${be}`},[De|ve|Ne]:{lower:`${gn} ${be}`,upper:`${hn} ${on}`},[De|we|Ne]:{lower:`${gn} ${on}`,upper:`${hn} ${be}`},[Ne|ve|we]:{lower:`${Ar} ${be}`,upper:`${hn} ${be}`},[ve|De|we|Ne]:{lower:`${gn} ${be}`,upper:`${hn} ${be}`}};function _r(r){return r!==void 0&&r!==!1}function Rr(r){return r!==void 0&&r!==!1}function bi(r,e,n){return(r&(ve|De))!==(ve|De)||n===void 0||typeof e!="number"?r:n>=e?r&~ve:r&~De}function Si(r,e,n){return(r&(we|Ne))!==(we|Ne)||n===void 0||typeof e!="number"?r:n<=e?r&~we:r&~Ne}function Mr(r,e,n){return r.replace(be,`${e}`).replace(on,ce(n)?`${n}`:fm)}function cm(r,e,n){var Ke,Ge;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,l=r.exclusiveMaximum,s=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=jr(s,u),[p]=jr(c,f),g=ce(a),b=ce(o),h=ce(s),D=ce(c),v=ce(u),T=ce(f),S=br(s),E=Fn(s),A=cn(s),C=br(c),M=Fn(c),q=cn(c),F=typeof i=="number"?i:void 0,U=typeof l=="number"?l:void 0;let j=0,J=0;g&&(!h||S||A)&&(J|=ve),_r(i)&&(!v||br(u)||cn(u)&&Rr(u==null?void 0:u.afterValue))&&(J|=De),b&&(!D||C||q)&&(J|=we),_r(l)&&(!T||br(f)||cn(f)&&Rr(f==null?void 0:f.afterValue))&&(J|=Ne),typeof i!="number"&&!(J&ve)&&(J&=~De),typeof l!="number"&&!(J&we)&&(J&=~Ne),J=bi(J,a,F),J=Si(J,o,U);const G=J in Vr?{...Vr[J]}:void 0;if(G!=null&&G.lower&&(G.lower=Mr(G.lower,a,F)),G!=null&&G.upper&&(G.upper=Mr(G.upper,o,U)),t.data.lower=G==null?void 0:G.lower,t.data.upper=G==null?void 0:G.upper,!h&&!v&&!D&&!T)return t.visible=vi(t.data.lower,t.data.upper),t;let P,Y,z,Q;g&&!h&&(P=a,j|=ve),(E||A)&&(P=s.beforeValue,j|=ve),b&&!D&&(Y=o,j|=we),(M||q)&&(Y=c.beforeValue,j|=we),_r(i)&&!v&&(j|=De,z=F),(cn(u)||Fn(u))&&Rr(u==null?void 0:u.beforeValue)&&(j|=De,typeof u.beforeValue=="number"&&(z=u.beforeValue)),_r(l)&&!T&&(j|=Ne,Q=U),(cn(f)||Fn(f))&&Rr(f==null?void 0:f.beforeValue)&&(j|=Ne,typeof f.beforeValue=="number"&&(Q=f.beforeValue)),(!v&&typeof i!="number"||(cn(u)||Fn(u))&&typeof u.beforeValue!="number")&&!(j&ve)&&(j&=~De),(!T&&typeof l!="number"||(cn(f)||Fn(f))&&typeof f.beforeValue!="number")&&!(j&we)&&(j&=~Ne),j=bi(j,P,z),j=Si(j,Y,Q);const W=j in Vr?{...Vr[j]}:void 0;W!=null&&W.lower&&(W.lower=Mr(W.lower,P,z)),W!=null&&W.upper&&(W.upper=Mr(W.upper,Y,Q)),(Ke=t.data).lower??(Ke.lower=W==null?void 0:W.lower),(Ge=t.data).upper??(Ge.upper=W==null?void 0:W.upper),t.visible=vi(t.data.lower,t.data.upper);const le=Di(y,W==null?void 0:W.lower,G==null?void 0:G.lower),rn=Di(p,W==null?void 0:W.upper,G==null?void 0:G.upper),$=wi(s,u),ye=wi(c,f);return le&&(Ni(le,$),t.changes.lower=le),rn&&(Ni(rn,ye),t.changes.upper=rn),t.changesKeys=Mn(t.data,n),t}function vi(r,e){return!!r||!!e}function Di(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:H.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:H.remove,beforeValue:e}:{type:r,action:H.replace,beforeValue:e,afterValue:n}}function wi(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(po(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),go(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Ni(r,e){if(r)return po(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),go(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const _n={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},hs=r=>{var ye,Ke,Ge,Jn,Ve,hr;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,l=n.value,s=l,u=(ye=n.parent)==null?void 0:ye.value,c=(Ke=n.parent)==null?void 0:Ke.value,f=Fe(),y=Se(),p=Qd(a),g=Zd(a),b=eu(l),h=nu(l),D=_o(l),v=Jt(l)||Jt(u),{any:T,string:S,number:E,object:A,array:C}=um(a,l),M={minimum:l==null?void 0:l.minimum,exclusiveMinimum:l==null?void 0:l.exclusiveMinimum,maximum:l==null?void 0:l.maximum,exclusiveMaximum:l==null?void 0:l.exclusiveMaximum},q=(Ge=s==null?void 0:s.$changes)==null?void 0:Ge.minimum,F=(Jn=s==null?void 0:s.$changes)==null?void 0:Jn.exclusiveMinimum,U=(Ve=s==null?void 0:s.$changes)==null?void 0:Ve.maximum,j=(hr=s==null?void 0:s.$changes)==null?void 0:hr.exclusiveMaximum,J={minimum:Yn(q)?q:void 0,exclusiveMinimum:Yn(F)?F:void 0,maximum:Yn(U)?U:void 0,exclusiveMaximum:Yn(j)?j:void 0},{data:G,changes:P,changesKeys:Y,visible:z}=cm(M,J,_n.valueRange),Q=Mn(S,_n.valueLength),je=Mn(S,_n.valuePattern),We=Mn(E,_n.multipleOf),W=Mn(A,_n.propertiesCount),le=Mn(C,_n.uniqueItems),rn=Mn(C,_n.itemsCount),$=co(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(T==null?void 0:T.allowedValues)&&d.jsx(Za,{shift:e,$changesKey:"enum",title:ru,items:T.allowedValues,layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),b&&d.jsxs(d.Fragment,{children:[(ce(S==null?void 0:S.minLength)||ce(S==null?void 0:S.maxLength))&&d.jsx(mn,{shift:e,$changesKeys:Q,title:ya,items:{minLength:S==null?void 0:S.minLength,maxLength:S==null?void 0:S.maxLength},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes}),ce(S==null?void 0:S.pattern)&&d.jsx(mn,{shift:e,$changesKeys:je,title:pa,items:{pattern:S==null?void 0:S.pattern},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]}),h&&d.jsxs(d.Fragment,{children:[z&&d.jsx(mn,{shift:e,$changesKeys:Y,title:ga,items:G,layoutMode:y,level:f,$nodeChange:$,$changes:P}),ce(E==null?void 0:E.multipleOf)&&d.jsx(mn,{shift:e,$changesKeys:We,title:ha,items:{multipleOf:E==null?void 0:E.multipleOf},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]}),v&&d.jsxs(d.Fragment,{children:[g&&d.jsx(mn,{shift:e,$changesKeys:[],title:tu,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:$}),p&&(A==null?void 0:A.allowedPropertyNames)&&d.jsx(Za,{shift:e,$changesKey:"propertyNames",title:Ro,items:A.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:$,$changes:c==null?void 0:c.$changes}),(ce(A==null?void 0:A.minProperties)||ce(A==null?void 0:A.maxProperties))&&d.jsx(mn,{shift:e,$changesKeys:W,title:ba,items:{minProperties:A==null?void 0:A.minProperties,maxProperties:A==null?void 0:A.maxProperties},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]}),D&&d.jsxs(d.Fragment,{children:[ce(C==null?void 0:C.uniqueItems)&&d.jsx(mn,{shift:e,$changesKeys:le,title:Sa,items:{uniqueItems:`${C.uniqueItems}`},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),(ce(C==null?void 0:C.minItems)||ce(C==null?void 0:C.maxItems))&&d.jsx(mn,{shift:e,$changesKeys:rn,title:va,items:{minItems:C==null?void 0:C.minItems,maxItems:C==null?void 0:C.maxItems},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]})]})};hs.__docgenInfo={description:"",methods:[],displayName:"Validations"};const bs=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,l=Fe(),s=e.meta,u=s,c=e.value,f=c,y=au(),p=Se(),g=Mo(e),[b,h]=m.useState(!1),[D,v]=m.useState(0);m.useEffect(()=>{const q=e.children.filter(rt).length===0;(!iu(o)||e.expanded&&q)&&!o.isCycle?h(!0):h(e.expanded),v(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const T=!ou(o),S=!su(o),E=qo(o),A=E,C=as(),M=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(gs,{nodeId:o.id,nodeTitleData:lu({node:o,nodeValue:c,nodeMeta:s,customizationOptions:C}),nodeTypeData:da({node:o,nodeValue:c,customizationOptions:C}),isCircularRef:o.isCycle,readOnly:s==null?void 0:s.readOnly,writeOnly:s==null?void 0:s.writeOnly,deprecated:s==null?void 0:s.deprecated,isExpandable:g,expanded:e.expanded,sorted:D,isRoot:E,onToggleExpander:t,onToggleSort:a,layoutMode:p,level:l,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&b&&T&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:S&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(du,{shift:A,state:e,$nodeChange:i}),d.jsx(hs,{shift:A,state:e,$nodeChange:i}),M&&d.jsx(ps,{extensions:M,$nodeChange:i})]})})]})};bs.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const Ss=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=Se();return d.jsx(d.Fragment,{children:n.map((l,s)=>rt(l)?d.jsxs("div",{children:[!e&&i&&l.first&&d.jsx(uu,{shift:!1,NodeType:Vo,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(mt,{state:l,$nodeChange:a},`prop-${s}`)]},`prop-${s}`):tt(l)?d.jsx(lt,{state:l,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${s}`):null)})};Ss.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const mt=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,l=o.filter(P=>!tt(P)),s=i,u=e.meta,c=qo(a),f=Jt(i),y=_o(i),p=fu(i),g=Fe(),b=e.node.newDataLevel,h=!c&&b?g+1:g,D=Mo(e),[v,T]=m.useState(!1),[,S]=m.useState(0);m.useEffect(()=>{T(e.expanded),S(e.sorted)},[e.expanded,e.sorted]);const[,E]=m.useState(),A=P=>{P&&(e.setSelected(P),E(e.selected))},[C,M]=m.useState(void 0),q=P=>{if(P){const Y=pu(P);M(Y)}},F=t??(u==null?void 0:u.$nodeChange),U=md(l),j=n==="parameters"&&c&&(f||y)&&!p,J=da({node:a,nodeValue:i});J==null||delete J.combiner;const G=J?{nodeTypeData:J,nodeDepth:h+1,$nodeChange:F??U,$changes:s==null?void 0:s.$changes}:void 0;return d.jsx(Ie.Provider,{value:h,children:d.jsx(cu,{value:C,setValue:q,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(bs,{state:e,disableNestingHeader:j,onToggleExpander:P=>mu(e,T,P),onToggleSort:()=>yu(e,S),$nodeChange:F}),D&&v&&d.jsx(Ss,{disableNestingHeader:j,items:o,onGlobalSelectNestedNode:A,$nodeChange:F,nestingIndicatorTitleData:G})]})})})};mt.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const yt=r=>d.jsx(En,{fallback:d.jsx(kn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(mm,{...r})}),mm=r=>{const{schema:e,expandedDepth:n=Wr,displayMode:t=An,layoutMode:a=mo,filters:i=[],overriddenKind:o,metaKeys:l,topLevelPropsMediaTypes:s}=r;Yr(e,l.diffsMetaKey,l.aggregatedDiffsMetaKey);const u=m.useMemo(()=>hc(e,l),[l,e]),c=m.useMemo(()=>new Ao(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return rt(f)&&(y=d.jsx(mt,{state:f,overriddenKind:o})),tt(f)&&(y=d.jsx(lt,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(Ea.Provider,{value:s,children:d.jsx(yd.Provider,{value:i,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Pn.Provider,{value:a,children:d.jsx(nt.Provider,{value:l,children:d.jsx(Ie.Provider,{value:0,children:y})})})})})})};yt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const ym=" or null";function vn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(er(r))return"";const n=r,t=(n==null?void 0:n.type)??$n,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?ym:"";let l=String(t);return a&&(l+=`(${a})`),i&&(l+=`<${i}>`),l+=o,l}function Ti(r){return r!=null}function vs(r){const e=Nn(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(Ae.MIN_LENGTH),t.maxLength!==void 0&&n.push(Ae.MAX_LENGTH),t.pattern!==void 0&&n.push(Ae.PATTERN);const a=e;a.minimum!==void 0&&n.push(Ae.MINIMUM),a.maximum!==void 0&&n.push(Ae.MAXIMUM),Ti(a.exclusiveMinimum)&&n.push(Ae.EXCLUSIVE_MINIMUM),Ti(a.exclusiveMaximum)&&n.push(Ae.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(Ae.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(Ae.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(Ae.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(Ae.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(Ae.MIN_ITEMS),o.maxItems!==void 0&&n.push(Ae.MAX_ITEMS),n}function pm(r){return r!=null}function gm(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const hm="x-deprecated-reason";function bm(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[hm];return typeof e=="string"&&e.length>0?e:void 0}class Ds{resolveNodeVisibility(e,n){const t=e.value(),a=Nn(t),i=No(n),o=bm(a),l=i&&!!(a!=null&&a.description),s=i&&!!o,u=i&&pm(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&vs(t).length>0,p=i&&gm(a),g=u||c||f||y||p;return{showDescription:l,showDeprecationReasonRow:s,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:p,showContentSection:l||s||g,showAnyAdditionalInfoRow:g}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:l}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!l,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isExamplesAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&jo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const nr=new Ds;function Ca(r,e){return nr.resolveNodeVisibility(r,e)}function Va(r,e){return nr.resolveListLastRowFlags(r,e)}function Sm(r,e){return nr.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function ws(r){return nr.resolveIsExpandable(r)}function Ns(r,e){return nr.resolveInitiallyExpanded(r,e)}function qn(r,e){return nr.resolveExpanderExpanded(r,e)}const Ts=" or null";function Es(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function vm(r,e){const n=Nn(r.value()),t=(n==null?void 0:n.type)??$n,a=Es(r);return et(t,a==null?void 0:a.type,e)??String(t)}function _a(r,e,n){if(e!=null&&e.brokenRef)return{kind:sn.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if(er(t))return{kind:sn.NO_DIFFS,text:""};const a=Es(r);if(!a)return{kind:sn.NO_DIFFS,text:vn(t,e)};if(Dm(a)){const c=Object.values(a).find(Boolean);return c?{kind:sn.WHOLE_DIFFS,text:wm(t,a,n),diff:Em(c)}:{kind:sn.NO_DIFFS,text:vn(t,e)}}const i=[],o=Nm(t,a.type,n);o&&i.push(o);const l=Ei(ks(t),a.format,n,xs);l&&i.push(l);const s=Ei(t==null?void 0:t.title,a.title,n,As);s&&i.push(s);const u=Tm(t);return u&&i.push(u),i.length===0?{kind:sn.NO_DIFFS,text:vn(t,e)}:{kind:sn.PARTIAL_DIFFS,segments:i}}function Dm(r){const e=Go.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function wm(r,e,n){const t=[],a=et((r==null?void 0:r.type)??$n,e.type,n)??(r==null?void 0:r.type)??$n;t.push(String(a));const i=Wt(ks(r),e.format,n,xs);i&&t.push(i);const o=Wt(r==null?void 0:r.title,e.title,n,As);return o&&t.push(o),r!=null&&r.nullable&&t.push(Ts.trim()),t.join(" ")}function Nm(r,e,n){const t=(r==null?void 0:r.type)??$n,a=et(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function Ei(r,e,n,t){const a=Wt(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function Wt(r,e,n,t){const a=et(r,e,n);if(a===void 0)return!e&&ki(r)?t(r):void 0;if(ki(a))return t(a)}function Tm(r){if(!(er(r)||!(r!=null&&r.nullable)))return{text:Ts.trim()}}function ks(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function ki(r){return!!r&&r.trim().length>0}function xs(r){return`(${r})`}function As(r){return`<${r}>`}function Em(r){const{data:e}=r;return I(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow}}}:x(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Green}}}:k(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function km(r){return r.diffs}function xm(r){return km(r)[Sn]??r.diffs[_]}function jn(r){return r.diffs}function Gr(r){return jn(r).nestingIndicatorRowColorizingDiff}function Am(r){return jn(r).nodeChangesSummary}function Cm(r){var e;return(e=Vs(r))==null?void 0:e.required}function Cs(r){if(!(r!=null&&r.data))return;const e=r.data;return x(e)?{type:e.type,scope:e.scope,description:e.description,action:H.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:k(e)?{type:e.type,scope:e.scope,description:e.description,action:H.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:I(e)?{type:e.type,scope:e.scope,description:e.description,action:H.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function Vm(r){return Cs(Cm(r))}function Vs(r){if(r.kind===Z.PROPERTY)return r.diffs}function _s(r){const e=jn(r),n=Vs(r),t={};for(const i of Wn){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=Cs(a)),t}function Ye(r){return r.diffs}function Rs(r){return Ye(r).default}function Ms(r){return Ye(r).defaultRowColorizingDiff}function qs(r){return Ye(r).enumDiff}function Ps(r){return Ye(r).enumValueDiffs}function Os(r){return Ye(r).enumRowColorizingDiff}function Is(r){return Ye(r).examplesDiff}function Hs(r){return Ye(r).examplesValueDiffs}function Ls(r){return Ye(r).examplesRowColorizingDiff}function _m(r){return Ye(r).allowedAdditionalPropertyNamesDiff}function Rm(r){return Ye(r).allowedAdditionalPropertyNamesValueDiffs}function Mm(r){return Ye(r).allowedAdditionalPropertyNamesRowColorizingDiff}function Br(r,e){var n;return(n=jn(r).validationRowDiffs)==null?void 0:n[e]}function js(r,e){var n;return(n=jn(r).validationRowValueDiffs)==null?void 0:n[e]}function Ra(r,e){var n;return(n=jn(r).validationRowColorizingDiffs)==null?void 0:n[e]}function qm(r){return jn(r).valueRangeCrawlDiffs}function xi(r,e){if(Br(r,e)||Ra(r,e))return!0;const n=js(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}const Js="<empty string>";function Pm(r){return JSON.stringify(r).slice(1,-1)}function Bn(r){return typeof r=="string"?r===""?Js:Pm(r):typeof r=="object"&&r!==null?JSON.stringify(r,null,2):JSON.stringify(r)}function Om(r){return r===Js}function Im(r,e,n){if(!e)return r===void 0?[]:[{text:Bn(r)}];const t=n===X,{data:a}=e;if(x(a))return t?[]:[{text:Bn(a.afterValue??r)}];if(k(a))return t?[{text:Bn(a.beforeValue??r)}]:[];if(I(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Bn(i)}]}return r===void 0?[]:[{text:Bn(r)}]}function Ce(r){return Bn(r)}function pt(r,e,n){const t=n===X,{data:a}=e;return x(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):k(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Ce(o)})):[]:I(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):r.map(i=>({text:Ce(i)}))}function Ma(r,e,n){const t=n===X,a=new Set,i=[];for(let l=0;l<r.length;l++){const s=String(l),u=e==null?void 0:e[s],c=Ce(r[l]);if(!u){i.push({text:c});continue}if(a.has(s))continue;a.add(s);const{data:f}=u;if(x(f)){t||i.push({text:Ce(f.afterValue??r[l]),valueDiffKey:s});continue}if(k(f)){t&&i.push({text:Ce(f.beforeValue??r[l]),valueDiffKey:s});continue}I(f)&&i.push({text:Ce(t?f.beforeValue??r[l]:f.afterValue??r[l]),valueDiffKey:s})}for(const[l,s]of Object.entries(e??{}))!s||a.has(l)||k(s.data)&&t&&(i.push({text:Ce(s.data.beforeValue),valueDiffKey:l}),a.add(l));const o=l=>{for(let s=0;s<r.length;s++)if(Ce(r[s])===l)return s;return r.length};return i.sort((l,s)=>o(l.text)-o(s.text))}function ar(r,e,n,t){return n===void 0?t:zo(r,e,n)}function Hm(r,e,n){if(e)return Object.keys(e).find(t=>Xo(t,r)===n)}function Lm(r,e,n,t){const a=t===X,i=new Set,o=[];for(let s=0;s<e.length;s++){const u=Hm(e,n,s),c=u?n==null?void 0:n[u]:void 0,f=Ce(e[s]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(x(y)){a||o.push({text:ar(r,u,y.afterValue??e[s],f),valueDiffKey:u});continue}if(k(y)){a&&o.push({text:ar(r,u,y.beforeValue??e[s],f),valueDiffKey:u});continue}I(y)&&o.push({text:a?ar(r,u,y.beforeValue??e[s],f):ar(r,u,y.afterValue??e[s],f),valueDiffKey:u})}for(const[s,u]of Object.entries(n??{}))!u||i.has(s)||k(u.data)&&a&&(o.push({text:ar(r,s,u.data.beforeValue,Ce(u.data.beforeValue)),valueDiffKey:s}),i.add(s));const l=(s,u)=>{if(s)return Xo(s,e);for(let c=0;c<e.length;c++)if(Ce(e[c])===u)return c;return e.length};return o.sort((s,u)=>l(s.valueDiffKey,s.text)-l(u.valueDiffKey,u.text))}function jm(r,e,n,t){return e?pt(r,e,t):Ma(r,n,t)}function Jm(r,e,n,t){return e?pt(r,e,t):Ma(r,n,t)}function Fm(r,e,n,t){return e?pt(r,e,t):Ma(r,n,t)}function Km(r,e,n,t,a,i){return r===me.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?Kf(Gt(i.nodeValue),i.crawlDiffs,a,n,t):n?pt(e,n,a):Lm(r,e,t,a)}function qr(r,e){return e?r==null?void 0:r[e]:void 0}const Gm=new Ds;function Bm(r){return r!=null}function Um(r){return Object.keys(jt).some(e=>!!Br(r,e)||!!Ra(r,e))}class Ym{resolveNodeVisibility(e,n){const t=e.value(),a=Nn(t),i=Gm.resolveNodeVisibility(e,n),o=No(n),l=o&&(!!(a!=null&&a.description)||!!e.diffs.description),s=o&&(i.showEnumValuesRow||!!qs(e)||!!Ps(e)||!!Os(e)),u=o&&(Bm(a==null?void 0:a.default)||!!Rs(e)||!!Ms(e)),c=o&&(i.showExamplesRow||!!Is(e)||!!Hs(e)||!!Ls(e)),f=o&&(vs(t).length>0||Um(e)),y=u||c||s||f||i.showExtensionsRow,p=l||i.showDeprecationReasonRow||y;return{...i,showDescription:l,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:s,showValidationsSection:f,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Va(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return Sm(e,n)}}const Wm=new Ym;function qa(r,e){return Wm.resolveNodeVisibility(r,e)}function Fs(r,e){return r.isCycle?!1:ws(r)?e.hideUnchangedNodes?e.isRoot||r.kind===Z.ROOT?!0:Qo(r):e.level<e.expandedDepth:!0}function Ks(r,e,n){if(!n)return r;const t=e===X;return(n===H.add?t:!t)?Math.max(r-1,0):r}var Tn=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(Tn||{});const $m={[Tn.JsonSchema]:ta};function zm(r){return $m[r]??cr}const sr=m.memo(r=>{const{title:e,layoutSide:n,usage:t=Tn.Default,lastInvisible:a=!1,diff:i,levelReductionAction:o}=r,{[se]:l}=r,s=aa(n),u=m.useMemo(()=>Ks(s,n,o),[s,n,o]),c=m.useMemo(()=>zm(t),[t]),f=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:h}=i,D=[];return n===X&&D.push(re.background(h.before.backgroundColor)),n===te&&D.push(re.background(h.after.backgroundColor)),D},[i,n]),y=m.useMemo(()=>{const h=i==null?void 0:i.data;return h?x(h)?n===te:k(h)?n===X:!0:!0},[i,n]),p=t===Tn.JsonSchema,g=typeof e=="function"?e(n):e,b=y&&g!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":l,className:["nesting-indicator-title-row-content flex w-full h-full",p?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(On,{level:u,lastInvisible:a&&y})}),b&&d.jsx(gu,{title:g})]})});sr.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const gt=m.memo(r=>{const e=Se(),{diffsSeverities:n,diffsSeverityPlacement:t=L.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case Te:return d.jsx(Hn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Cn,{left:d.jsx(sr,{...r,layoutSide:X}),right:d.jsx(sr,{...r,layoutSide:te})})});case en:return d.jsx(In,{content:d.jsx(sr,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});gt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Pa=m.createContext(null);function Gs(){const r=m.useContext(Pa);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const Xm=new Set([Z.ALL_OF,Z.ANY_OF,Z.ONE_OF]);class Qm{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return Xm.has(e)}}const Bs=new Qm;function Zm(r){return Bs.resolveNodeVisibility(r)}function Oa(r){return Bs.isCombinerKind(r)}function Ia(r){return r.kind===Z.ROOT}function ey(r){return r.kind===Z.ADDITIONAL_PROPERTIES}function zn(r){if(r.type!==ue.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:Ia(r)?!0:e.every(n=>Oa(n.kind))}function ny(r){return Oa(r)}function ry(r){var e;return Da((e=Nn(r.value()))==null?void 0:e.type)}function ty(r,e){return Da(vm(r,e))}function Us(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!ny(n)))return n}function Ys(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function Ws(r,e){const n=[];let t=r;for(;t&&zn(t);){const a=t.nestedNodes(),i=Ys(t,a,e);if(!i)break;const o=Zm(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:Us(t)}),zn(i)){t=i;continue}break}return n}function $s(r,e){let n=r;for(;zn(n);){const t=n.nestedNodes(),a=Ys(n,t,e);if(!a)break;n=a}return n}const ay=new Map;function zs(r){return $s(r,ay)}function iy(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set(Ws(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function Ha(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!R(n)||Jr(n)?null:n}function oy(r){if(r.type===ue.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Oa(n.kind))?e:r.childrenNodes()}const $t={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}};function Xs(r){return r&&I(r.data)?{...r,styles:$t}:{data:{type:"annotation",action:H.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:$t,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}function or(r){const e=r.data,n={type:e.type,causedAt:[]};return k(e)||I(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:x(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function sy(r){return or({data:r,styles:$t,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe})}function zt(r,e){if(!(!r||typeof r!="object")){if(na(r)){e.push(r);return}for(const n of Object.values(r))zt(n,e)}}function ly(...r){let e;for(const n of r)n&&(!e||pe.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function Qs(r){const e=r.diffs[_];return!!e&&(x(e.data)||k(e.data))}function dy(r){const e=r.nestedNodes();if(e.length===0)return;let n;for(const t of e){if(!fe(t))return;const a=t.diffs[_],i=a&&x(a.data)?H.add:a&&k(a.data)?H.remove:void 0;if(!i)return;if(!n){n=i;continue}if(n!==i)return}return n}function uy(r){if(fe(r)&&!Qs(r))return dy(r)}function fy(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function Zs(r){return fe(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>fe(e)&&fy(e)):!1}function cy(r){if(!(!fe(r)||!Zs(r)))return Xs(r.diffs[_])}function my(r){if(!fe(r)||!Zs(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(or(o));for(const o of r.nestedNodes()){if(!fe(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const l=[];for(const u of Object.values(o.diffs))zt(u,l);for(const u of l)e.push(or(u));const s=Lt([...o.diffsSummary,...o.descendantDiffsSummary]);s&&e.push({type:s,causedAt:[]})}const n=r.diffs[_];n&&e.push(or(n));const t=[];for(const o of Object.values(r.diffs))zt(o,t);for(const o of t)e.push(or(o));const a=Lt([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=ly(...e);if(!i){const o=Xs(n);return{[L.TitleRow]:sy(o.data)}}return{[L.TitleRow]:i}}function yy(r){if(fe(r)){const e=Gr(r);if(e){const n=r.diffsSeverities[L.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[L.TitleRow]:n}:void 0}}}return{selectorRowDiff:cy(r),diffsSeverities:my(r)}}function ht(r){if(!zn(r))return"";const e=Us(r);return e?` (${e})`:""}function py(r,e,n=vn(Ha(r),r.meta())+ht(r)){const t={title:n,node:r,testId:`json-schema-combiner-option-${e}`};if(!fe(r))return t;const a=Qs(r);return{...t,diffs:r.diffs,...a?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}function el(r,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,a=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?r+1:r,0),afterLevel:Math.max(a?e+1:e,0)}}const nl=r=>d.jsx(Ua,{...r});nl.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const rl="show-all",gy="show-only-changed-nodes";function hy(r){return r?gy:rl}function by(r){return r!==rl}const La=m.createContext(null);function Sy(){const r=m.useContext(La);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function tl(){return m.useContext(La)}function vy(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({mode:r,hideUnchangedNodes:by(r),revealedBlockIds:e,revealBlock:t}),[r,e,t])}const Dy="#64748B",al="#94A3B8";const fn=m.memo(r=>{const{text:e,color:n,className:t}=r,a=n===void 0?Dy:n;return d.jsx("span",{className:["json-schema-type-value-text",t].filter(Boolean).join(" "),style:a?{color:a}:void 0,children:e})});fn.__docgenInfo={description:`Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
whether to render it at all.`,methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const il=m.memo(r=>{const{node:e}=r;return ry(e)?null:d.jsx(fn,{text:vn(e.value(),e.meta()),color:al})});il.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Xt=m.memo(r=>{const{text:e,diff:n,layoutSide:t,color:a}=r,i=To(n,t),o=kd(n,t),l=[re.highlighter(i),re.background(o)].filter(Boolean).join(" ");return d.jsx(fn,{text:e,color:a,className:l||void 0})});Xt.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const bt=m.memo(r=>{const{display:e,layoutSide:n,color:t}=r;return e.kind===sn.NO_DIFFS?d.jsx(fn,{text:e.text,color:t}):e.kind===sn.WHOLE_DIFFS?d.jsx(Xt,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center gap-1",children:e.segments.map((a,i)=>d.jsx(Xt,{text:a.text,diff:a.diff,layoutSide:n,color:t},`${a.text}-${i}`))})});bt.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const ol=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r;if(ty(e,t))return null;const a=_a(e,n,t);return d.jsx(bt,{display:a,layoutSide:t,color:al})});ol.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const sl=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));sl.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function Ai(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Ir=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[se]:o}=r,l=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(On,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(pd,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(at,{text:Ai(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":Ai(n),onClick:l,children:d.jsx(sl,{})})})})]})});Ir.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const ll=m.memo(r=>{const e=Se(),n=Fe();switch(e){case Te:return d.jsx(Cn,{left:d.jsx(Ir,{...r,layoutSide:"before",level:n}),right:d.jsx(Ir,{...r,layoutSide:"after",level:n})});case en:return d.jsx(In,{content:d.jsx(Ir,{...r,layoutSide:"after",level:n})});default:return null}});ll.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const ja=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=Sy(),i=xo(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:l}=m.useMemo(()=>nc(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:l.map((s,u)=>{const c=u===l.length-1;return s.kind==="placeholder"?t.has(s.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(s.sourceIndex,s.sourceIndex+s.blockSize).map((f,y)=>d.jsx(Xn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===s.blockSize-1},f.id))},s.unchangedBlockId):d.jsx(ll,{unchangedBlockId:s.unchangedBlockId,count:s.blockSize,onReveal:a},s.unchangedBlockId):d.jsx(Xn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:s.node,isLastInList:c},s.node.id)})})};ja.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const wy="markdown-text-row__json-schema-description",Ny="markdown-text-row__json-schema-expander",Ty=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function Ey(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===X;return x(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:k(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:I(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function ky(r){switch(r){case B.body1:return"text-value-body1";case B.h1:case B.h2:case B.h3:case B.h4:case B.h5:case B.h6:return"text-value-body2";case B.body2:default:return"text-value-body2"}}function xy(r,e){return r===Pe.JsonSchemaDescription?{markdownClassName:wy,expanderClassName:Ny}:{markdownClassName:["text-slate-700",ky(e)].join(" "),expanderClassName:`text-value-expander ${Cd(e)}`.trim()}}const dl=m.memo(r=>{const{value:e,variant:n=B.body2,usage:t,layoutSide:a,diff:i}=r,[o,l]=m.useState(!1),{resolvedValue:s,isInvisible:u}=m.useMemo(()=>Ey(e,i,a),[i,a,e]),c=m.useMemo(()=>o?s:xd(s),[o,s]),f=m.useMemo(()=>Ad(s),[s]),y=m.useMemo(()=>xy(t,n),[t,n]),p=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const D=a===X?i.styles.before:i.styles.after,v=[];return D.textHighlighterColor&&v.push(re.highlighter(D.textHighlighterColor)),v},[i,a]),g=m.useMemo(()=>["markdown",y.markdownClassName].filter(Boolean).join(" "),[y.markdownClassName]),b=m.useMemo(()=>({p:({children:D})=>d.jsx("p",{children:d.jsx("span",{className:p.join(" "),children:D})})}),[p]),h=m.useCallback(()=>{l(D=>!D)},[]);return u||!c?null:d.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[d.jsx(hu,{className:g,remarkPlugins:[bu],components:b,children:c}),d.jsx(Ty,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});dl.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const Ay={[Pe.DdlApiProperty]:Vd,[Pe.JsonSchemaDescription]:ta},Cy={[Pe.DdlApiProperty]:["min-h-[26px]"]};function Vy(r){const e=Ay[r]??cr,n=Cy[r]??[];return[e,...n].join(" ")}function _y(r,e,n){return n===Pe.DdlApiProperty?Rd(r,e):r!=null&&r.data?(e===X?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Hr=m.memo(r=>{const{value:e,variant:n=B.body2,layoutSide:t,usage:a=Pe.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[se]:l}=r,s=aa(t),u=a===Pe.DdlApiProperty,c=u||a===Pe.JsonSchemaDescription,f=m.useMemo(()=>_y(o,t,a),[o,t,a]),y=a===Pe.JsonSchemaDescription&&s===0,p=c&&s>0&&(!i||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:D}=o,v=[];return t===X&&v.push(re.background(D.before.backgroundColor)),t===te&&v.push(re.background(D.after.backgroundColor)),v},[o,t]),b=m.useMemo(()=>Vy(a),[a]),h=d.jsx(dl,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":l,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===Pe.JsonSchemaDescription?"items-stretch":"",b,...g].filter(Boolean).join(" "),children:[y&&d.jsx(_d,{}),p&&d.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(On,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:h}):a===Pe.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:h}):h]})});Hr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Qt=m.memo(r=>{const e=Se(),{diffsSeverities:n,diffsSeverityPlacement:t=L.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case Te:return d.jsx(Hn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Cn,{left:d.jsx(Hr,{...r,layoutSide:X}),right:d.jsx(Hr,{...r,layoutSide:te})})});case en:return d.jsx(In,{content:d.jsx(Hr,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Qt.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ry(r){return r?Ze({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const Rn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Ae.UNIQUE_ITEMS};function _t(r,e,n,t){const a=Ze({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function My(r){const e=Ry(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function qy(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=_t(n.minLength,n.maxLength);o.length&&e.push({key:Rn.VALUE_LENGTH,label:ya,values:o}),n.pattern!==void 0&&e.push({key:Rn.VALUE_PATTERN,label:pa,values:[String(n.pattern)]});const l=My(t);l.length&&e.push({key:Rn.VALUE_RANGE,label:ga,values:l}),t.multipleOf!==void 0&&e.push({key:Rn.VALUE_MULTIPLE_OF,label:ha,values:[String(t.multipleOf)]});const s=_t(a.minProperties,a.maxProperties);s.length&&e.push({key:Rn.PROPERTIES_COUNT,label:ba,values:s}),i.uniqueItems!==void 0&&e.push({key:Rn.UNIQUE_ITEMS,label:Sa,values:[String(i.uniqueItems)]});const u=_t(i.minItems,i.maxItems);return u.length&&e.push({key:Rn.ITEMS_COUNT,label:va,values:u}),e}const Ci=[me.VALUE_LENGTH,me.VALUE_PATTERN,me.VALUE_RANGE,me.VALUE_MULTIPLE_OF,me.PROPERTIES_COUNT,me.UNIQUE_ITEMS,me.ITEMS_COUNT];function Py(r){return[...r].sort((e,n)=>Ci.indexOf(e.key)-Ci.indexOf(n.key))}const ul=r=>{const{extensions:e}=r,t=Fe()+1;return d.jsx(Ie.Provider,{value:t,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(gt,{title:"Extensions",usage:Tn.JsonSchema,lastInvisible:!0}),d.jsx(pr,{source:e,initialLevel:t})]})})};ul.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""}}};const Un=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,a)=>d.jsx(Md,{isVisible:!0,value:t.text,usage:qd.JsonSchemaValidation,textHighlighterColor:To(t.diff,e),borderShadowColor:Pd(t.diff,e),isFontMuted:Od(t.diff,e),isEmptyStringPlaceholder:Om(t.text)},`${t.text}-${a}`))}):null});Un.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Vi={valueLength:ya,valuePattern:pa,valueRange:ga,valueMultipleOf:ha,propertiesCount:ba,itemsCount:va,uniqueItems:Sa};function Oy(r){return fe(r)&&(r.kind===Z.PROPERTY||r.kind===Z.ROOT)}const Ja=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Ue(),i=n??e.value(),o=Nn(i),l=Oy(e)?e:void 0,s=fe(e)?e:void 0,u=m.useMemo(()=>l&&n===void 0?qa(l,a):Ca(n!==void 0?{value:()=>n}:e,a),[a,n,e,l]),c=m.useMemo(()=>s?qs(s):void 0,[s]),f=m.useMemo(()=>s?Ps(s):void 0,[s]),y=m.useMemo(()=>s?Os(s):void 0,[s]),p=m.useMemo(()=>s?Is(s):void 0,[s]),g=m.useMemo(()=>s?Hs(s):void 0,[s]),b=m.useMemo(()=>s?Ls(s):void 0,[s]),h=m.useMemo(()=>s?Rs(s):void 0,[s]),D=m.useMemo(()=>s?Ms(s):void 0,[s]),v=mr(e,fe),T=m.useMemo(()=>oe(v,{diffKey:"description",diffsSeverityPlacement:L.DescriptionRow}),[v]),S=m.useMemo(()=>{const P=qy(o);if(!s)return P;const Y=new Set(P.map(Q=>Q.key)),z=Object.keys(Vi).filter(Q=>!Y.has(Q)).filter(Q=>xi(s,Q)).map(Q=>({key:Q,label:Vi[Q],values:[]}));return Py([...P,...z])},[s,o]),E=m.useMemo(()=>{var z;if(!ey(e))return;const P=e.parent,Y=Nn((P==null?void 0:P.value())??null);return(z=Y==null?void 0:Y.propertyNames)==null?void 0:z.enum},[e]),A=m.useMemo(()=>s?_m(s):void 0,[s]),C=m.useMemo(()=>s?Rm(s):void 0,[s]),M=m.useMemo(()=>s?Mm(s):void 0,[s]),q=a===gd&&!!(E!=null&&E.length),F=m.useCallback(P=>{const Y=Jm(E??[],A,C,P);return Y.length===0?d.jsx(d.Fragment,{}):d.jsx(Un,{layoutSide:P,sideItems:Y.map(({text:z,valueDiffKey:Q})=>({text:z,diff:qr(C,Q)}))})},[E,A,C]),U=m.useCallback(P=>{const Y=jm((o==null?void 0:o.enum)??[],c,f,P);return Y.length===0?d.jsx(d.Fragment,{}):d.jsx(Un,{layoutSide:P,sideItems:Y.map(({text:z,valueDiffKey:Q})=>({text:z,diff:qr(f,Q)}))})},[c,f,o==null?void 0:o.enum]),j=m.useCallback(P=>{const Y=Fm((o==null?void 0:o.examples)??[],p,g,P);return Y.length===0?d.jsx(d.Fragment,{}):d.jsx(Un,{layoutSide:P,sideItems:Y.map(({text:z,valueDiffKey:Q})=>({text:z,diff:qr(g,Q)}))})},[p,g,o==null?void 0:o.examples]),J=m.useCallback(P=>{const Y=o==null?void 0:o.default,z=Im(Y,h,P);return z.length===0?d.jsx(d.Fragment,{}):d.jsx(Un,{layoutSide:P,sideItems:z.map(({text:Q})=>({text:Q,diff:h}))})},[h,o==null?void 0:o.default]),G=m.useCallback((P,Y)=>z=>{const Q=s?Br(s,P):void 0,je=s?js(s,P):void 0,We=Km(P,Y,Q,je,z,P===me.VALUE_RANGE&&s?{nodeValue:i,crawlDiffs:qm(s)??{}}:void 0);return We.length===0?d.jsx(d.Fragment,{}):d.jsx(Un,{layoutSide:z,sideItems:We.map(({text:W,valueDiffKey:le})=>({text:W,diff:qr(je,le)}))})},[s,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(Qt,{usage:Pe.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||T.diff)&&d.jsx(Qt,{usage:Pe.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...T}),u.showDefaultRow&&d.jsx(rr,{label:"Default",usage:tr.JsonSchemaValidation,subheader:J,colorizingDiff:D,diffsSeverities:h||D?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:L.DefaultRow}),u.showExamplesRow&&d.jsx(rr,{label:"Examples",usage:tr.JsonSchemaValidation,subheader:j,diff:p,colorizingDiff:b,diffsSeverities:p||g||b?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:L.ExamplesRow}),u.showEnumValuesRow&&d.jsx(rr,{label:"Allowed values",usage:tr.JsonSchemaValidation,subheader:U,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:L.EnumRow,...Va(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),q&&d.jsx(rr,{label:Ro,usage:tr.JsonSchemaValidation,subheader:F,diff:A,colorizingDiff:M,diffsSeverities:A||C||M?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:L.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&S.map(P=>{const Y=P.key,z=s?Br(s,Y):void 0,Q=s?Ra(s,Y):void 0;return d.jsx(rr,{label:P.label,usage:tr.JsonSchemaValidation,subheader:G(Y,P.values),diff:z,colorizingDiff:Q,diffsSeverities:s&&xi(s,Y)?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:Do[Y]},P.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(ul,{extensions:o.extensions})]})};Ja.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Iy(r){const e=_s(r),n={};for(const t of Wn){const a=e[t];a&&(n[t]=a)}return n}function Hy(r,e){var s;const n=!!r.diffs[_],t=_s(r),a=Iy(r),i=t.required,o=i?{...a,required:i}:a,l=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:l,requiredChanged:!n&&!!i,$nodeChange:(s=r.diffs[_])==null?void 0:s.data,$metaChanges:o}}const fl=m.memo(r=>{const{value:e,meta:n,suffix:t}=r;return d.jsxs(d.Fragment,{children:[d.jsx(fn,{text:vn(e,n)}),t&&d.jsx(fn,{text:t})]})});fl.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const cl=m.memo(r=>{const{node:e,meta:n,layoutSide:t,suffix:a}=r,i=_a(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(bt,{display:i,layoutSide:t}),a&&d.jsx(fn,{text:a})]})});cl.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const ml=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(fl,{value:e,meta:n,suffix:o}),t&&d.jsx(at,{text:fa,children:d.jsx(ca,{})}),d.jsx(ma,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},yl=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;Se();const l=Hy(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(cl,{node:n,meta:e,layoutSide:a,suffix:o}),t&&d.jsx(at,{text:fa,children:d.jsx(ca,{})}),d.jsx(ma,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...l})]})};ml.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:'See JsonSchemaTitleRowTypeValue\'s `suffix` prop - combiner-kind suffix, e.g. " (anyOf)".'}}};yl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const Ly="Type: ";function jy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return Ia(e)?{variant:"text",text:t??Ly}:a===Z.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:hd}:{variant:"badge",text:"additional property",badgeKind:Sr}:a===Z.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:Sr}:a===Z.ITEMS?{variant:"badge",text:"item",badgeKind:Sr}:a===Z.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:Sr}:a===Z.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function Jy(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===Z.ADDITIONAL_PROPERTIES&&n===!1}function Fy(r,e,n,t,a){const i=r===!0&&!ce(e)||!!e&&(e.action===H.remove&&t||e.action===H.add&&a||e.action===H.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const pl=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=Se(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=yo(a),{originSide:l,changedSide:s}=bd(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!Fy(e,n,o,l,s)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};pl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const gl="text-xs text-black font-Inter-Medium",hl=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(ho,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${gl}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},bl=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(ho,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${gl}`,children:[e.text,d.jsx(pl,{required:n,requiredDiff:t,layoutSide:a})]})}};hl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};bl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Ky(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:l=!1,titleRowDiff:s}=r,u=as(),c=e.meta(),f=Nn(t??n.value()),y=n.meta(),p=m.useMemo(()=>Va(i,a),[a,i]),g=m.useMemo(()=>jy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),b=m.useMemo(()=>D=>{const v=Eo(s);return(v?ko(v,D):Id(s,D))?l?d.jsx(bl,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:D}):d.jsx(hl,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,s,l]),h=m.useMemo(()=>!Jy(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:p,titleContent:b,showTypeSubheader:h}}const Fa=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[se]:p}=r,{displayValueResolved:g,displayMeta:b,listLastRowFlags:h,titleContent:D,showTypeSubheader:v}=Ky({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(ge,{...h,"data-precededby":p,titleContent:D,expandable:o,expanded:l,isRoot:Ia(e),onClickExpander:o?s:void 0,variant:B.body2,subheader:T=>y({layoutSide:T,displayValueResolved:g,displayMeta:b,displayNode:n,showTypeSubheader:v}),usage:Zr.JsonSchemaProperty,...u})};Fa.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Ka=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,typeValueSuffix:u,...c}=r;return d.jsx(Fa,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,renderSubheader:({layoutSide:f,displayValueResolved:y,displayMeta:p,displayNode:g,showTypeSubheader:b})=>d.jsx(ml,{value:y,meta:p,isCycle:g.isCycle,layoutSide:f,showTypeLabel:b,typeValueSuffix:u})})};Ka.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function Gy(r){return oe(dn(r),{resolveDiff:()=>xm(r)})}const Ga=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,typeValueSuffix:c,...f}=r,y=m.useMemo(()=>u??Gy(n),[n,u]),p=m.useMemo(()=>Vm(e),[e]),g=Se(),b=m.useMemo(()=>Am(n),[n]),h=!l&&o&&g===Te&&!!b&&b.size>0;return d.jsx(Fa,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,titleRowDiffProps:y,requiredDiff:p,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:D,displayMeta:v,displayNode:T,showTypeSubheader:S})=>ko(Eo(y.diff),D)?d.jsxs(d.Fragment,{children:[d.jsx(yl,{meta:v,node:n,isCycle:T.isCycle,layoutSide:D,showTypeLabel:S,typeValueSuffix:c}),h&&d.jsx(ua,{values:Array.from(b)})]}):d.jsx(d.Fragment,{})})};Ga.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function By(r){return fe(r)&&r.kind===Z.PROPERTY}const Ba=r=>{const{node:e,isLastInList:n=!1,[se]:t}=r,a=Ue(),i=Fe(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Gs(),u=By(e)?e:void 0,c=fe(e)?e:void 0,f=tl(),y=m.useMemo(()=>u?qa(u,a):Ca(e,a),[a,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,s]),g=m.useMemo(()=>ws(e),[e,s]),b=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Fs(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===Z.ROOT}):Ns(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),h=m.useMemo(()=>qn(e,b),[b,e,s]),[D,v]=m.useState(h);m.useEffect(()=>{v(j=>qn(e,j))},[e,s]);const T=m.useCallback(()=>{v(j=>{const J=!j;return J&&l(e),qn(e,J)})},[l,e]),S=!g||D,E=m.useCallback(j=>c?d.jsx(ol,{node:c,meta:c.meta(),layoutSide:j}):d.jsx(il,{node:e}),[e,c]),A=m.useMemo(()=>c?Gr(c):void 0,[c]),C=ra(),M=(C==null?void 0:C.beforeLevel)??i,q=(C==null?void 0:C.afterLevel)??i,{beforeLevel:F,afterLevel:U}=m.useMemo(()=>el(M,q,A),[M,q,A]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(Ga,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:g,expanded:D,onClickExpander:T}):d.jsx(Ka,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:g,expanded:D,onClickExpander:T}),S&&d.jsxs(d.Fragment,{children:[d.jsx(Ja,{node:e,isLastInList:n&&p.length===0}),p.length>0&&d.jsx(Ie.Provider,{value:i+1,children:d.jsxs(yr,{beforeLevel:F,afterLevel:U,children:[d.jsx(gt,{title:E,usage:Tn.JsonSchema,lastInvisible:!0,diff:A,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:L.NestingIndicatorRow}),c&&f?d.jsx(ja,{children:p}):p.map((j,J)=>c?d.jsx(Xn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:j,isLastInList:J===p.length-1},j.id):d.jsx(Dt,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:j,isLastInList:J===p.length-1},j.id))]})})]})]})};Ba.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Sl=r=>d.jsx(Ba,{...r});Sl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const Xn=r=>{const{node:e}=r;return zn(e)?d.jsx(nl,{...r}):d.jsx(Sl,{...r})};Xn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vl=m.memo(r=>{const{node:e}=r,n=zs(e),t=vn(Ha(n),n.meta())+ht(e);return d.jsx(fn,{text:t,color:null})});vl.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Dl=m.memo(r=>{const{node:e,layoutSide:n}=r,t=zs(e),a=_a(t,t.meta(),n),i=ht(e);return d.jsxs(d.Fragment,{children:[d.jsx(bt,{display:a,layoutSide:n,color:null}),i&&d.jsx(fn,{text:i,color:null})]})});Dl.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
the plain sibling (\`JsonSchemaCombinerOptionTypeValue\`), but renders the resolved leaf's
type/format/title through the shared per-side diff-highlighted SideListDisplay renderer, so a
leaf-level type/title/format change is visible directly on the option button - not just as
the generic "changed" round marker \`Selector\` already draws for other kinds of changes.
\`color={null}\` leaves text color to the button's own CSS (selected/unselected state); the
suffix is plain, non-diff-highlighted text, matching the plain sibling.`,methods:[],displayName:"JsonSchemaCombinerOptionTypeValueWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=new Set;function St(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=te}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row gap-2",children:e.map(o=>{const{diffsRelatedClassesList:l,isInvisible:s}=Uy({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(s)return null;const u=l.join(" "),c=typeof o.title=="function"?o.title(i):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:f=>{f.preventDefault(),f.stopPropagation(),t(o)},children:c},o.node.id)})})}function Uy(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const l=e==null?void 0:e[_];if(l){const{styles:s}=l;switch(a){case X:l.inherited||i.push(re.borderShadow(s.before.borderShadowColor)),o=l.data.action===H.add;break;case te:l.inherited||i.push(re.borderShadow(s.after.borderShadowColor)),o=l.data.action===H.remove;break}}if(!(l!=null&&l.inherited)&&(n||t)){const s=n??_i,u=t??_i,c=new Set([...s,...u]),f=Lt(c);i.push(f?re.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}St.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Plain content, or a \`(layoutSide) => ReactNode\` for content that differs per diff side (see \`NestingIndicatorTitleRow\`'s \`title\` prop for the same pattern). */
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0},description:"Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern)."},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
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
  /** Plain content, or a \`(layoutSide) => ReactNode\` for content that differs per diff side (see \`NestingIndicatorTitleRow\`'s \`title\` prop for the same pattern). */
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0},description:"Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern)."},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
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
  /** Plain content, or a \`(layoutSide) => ReactNode\` for content that differs per diff side (see \`NestingIndicatorTitleRow\`'s \`title\` prop for the same pattern). */
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0},description:"Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern)."},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var vt=(r=>(r.Primary="primary",r.Secondary="secondary",r))(vt||{});function Yy(r,e){if(!r)return"";const n=e===X?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return re.background(n)}const Wy=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i,levelReductionAction:o}=r,l=aa(i),s=m.useMemo(()=>Ks(l,i,o),[l,i,o]),u=m.useMemo(()=>Yy(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${ta} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(On,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(St,{options:e,selectedOption:n,onSelectOption:t,variant:vt.Secondary,layoutSide:i})})]})}),Rt=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(sr,{title:e,usage:Tn.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t,levelReductionAction:r.levelReductionAction}),n&&d.jsx(Wy,{...r})]})}),wl=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=Se(),i=m.useMemo(()=>t==null?void 0:t[L.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case Te:return d.jsx(Hn,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Cn,{left:d.jsx(Rt,{...r,layoutSide:X}),right:d.jsx(Rt,{...r,layoutSide:te})})});case en:return d.jsx(In,{content:d.jsx(Rt,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});wl.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Plain content, or a \`(layoutSide) => ReactNode\` for content that differs per diff side (see \`NestingIndicatorTitleRow\`'s \`title\` prop for the same pattern). */
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0},description:"Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern)."},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
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
  /** Plain content, or a \`(layoutSide) => ReactNode\` for content that differs per diff side (see \`NestingIndicatorTitleRow\`'s \`title\` prop for the same pattern). */
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0},description:"Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern)."},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
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
  /** Plain content, or a \`(layoutSide) => ReactNode\` for content that differs per diff side (see \`NestingIndicatorTitleRow\`'s \`title\` prop for the same pattern). */
  title: ReactNode | ((layoutSide: LayoutSide) => ReactNode)
  node: N
  testId?: string
  diffs?: NodeDiffs<V>
  diffsSummary?: NodeDiffsSummary
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}],required:!0},description:"Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern)."},{key:"node",value:{name:"N",required:!0}},{key:"testId",value:{name:"string",required:!1}},{key:"diffs",value:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:`| typeof NODE_LEVEL_DIFF_KEY
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};function $y(r){return fe(r)&&r.kind===Z.PROPERTY}const Ua=r=>{const{node:e,isLastInList:n=!1,[se]:t}=r,a=Ue(),i=Fe(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Gs(),u=fe(e)?e:void 0,c=tl(),f=e.nestedNodes(),[y,p]=m.useState(()=>new Map),g=m.useMemo(()=>Ws(e,y),[e,y]),b=m.useMemo(()=>$s(e,y),[e,y]),h=m.useMemo(()=>Ha(b),[b]),D=fe(b)?b:void 0,v=$y(b)?b:void 0,T=m.useMemo(()=>v?qa(v,a):Ca({value:()=>h},a),[h,v,a]),S=m.useMemo(()=>oy(b),[b,s]),E=m.useMemo(()=>S.length>0,[S.length]),A=m.useMemo(()=>e.isCycle||S.length===0?!1:D&&(c!=null&&c.hideUnchangedNodes)?Fs(D,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):Ns(b,{expandedDepth:o,level:i}),[e.isCycle,b,D,c==null?void 0:c.hideUnchangedNodes,o,S.length,i]),C=m.useMemo(()=>qn(b,A),[b,A,s]),[M,q]=m.useState(C);m.useEffect(()=>{q(qn(b,A))},[b.id,b,A]),m.useEffect(()=>{q($=>qn(b,$))},[b,s]);const F=m.useCallback(()=>{q($=>{const ye=!$;return ye&&l(b),qn(b,ye)})},[b,l]),U=m.useMemo(()=>vn(h,b.meta()),[b,h]),j=m.useMemo(()=>ht(e),[e]),J=m.useMemo(()=>D?Gr(D):void 0,[D]),G=ra(),P=(G==null?void 0:G.beforeLevel)??i,Y=(G==null?void 0:G.afterLevel)??i,z=m.useMemo(()=>u?Gr(u):void 0,[u]),{beforeLevel:Q,afterLevel:je}=m.useMemo(()=>el(P,Y,z),[P,Y,z]),We=m.useCallback(($,ye)=>{p(Ke=>iy(e,Ke,$.id,ye.node.id))},[e]);if(f.length===0)return null;const W=M&&S.length>0,le=!!(u&&c),rn=u?Xn:Dt;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&D?d.jsx(Ga,{"data-precededby":t,ownerNode:u,displayNode:D,displayValue:h,contentVisibility:T,isLastInList:n&&!T.showContentSection&&!E,expandable:E,expanded:M,onClickExpander:F,typeValueSuffix:j}):d.jsx(Ka,{"data-precededby":t,ownerNode:e,displayNode:b,displayValue:h,contentVisibility:T,isLastInList:n&&!T.showContentSection&&!E,expandable:E,expanded:M,typeValueSuffix:j,onClickExpander:F}),d.jsx(Ja,{node:b,displayValue:h,isLastInList:n&&!E&&g.every($=>!$.showSelector)}),d.jsx(Ie.Provider,{value:i+1,children:d.jsxs(yr,{beforeLevel:Q,afterLevel:je,children:[g.map($=>{const ye=$.nestedNodes.map((Ve,hr)=>py(Ve,hr,fe(Ve)?Ml=>d.jsx(Dl,{node:Ve,layoutSide:Ml}):()=>d.jsx(vl,{node:Ve}))),Ke=ye.find(Ve=>Ve.node.id===$.selectedNestedNode.id)??ye[0]??null,Ge=yy($.combinerNode),Jn=uy($.combinerNode);return d.jsx(wl,{combinerKindLabel:$.combinerKindLabel,showSelector:$.showSelector,options:ye,selectedOption:Ke,onSelectOption:Ve=>We($.combinerNode,Ve),selectorRowDiff:Ge.selectorRowDiff,diffsSeverities:Ge.diffsSeverities,levelReductionAction:Jn},$.combinerNode.id)}),W&&d.jsxs(d.Fragment,{children:[d.jsx(gt,{title:U,usage:Tn.JsonSchema,lastInvisible:!0,diff:J,diffsSeverities:D==null?void 0:D.diffsSeverities,diffsSeverityPlacement:L.NestingIndicatorRow}),le?d.jsx(ja,{children:S}):S.map(($,ye)=>d.jsx(rn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:$,isLastInList:ye===S.length-1},$.id))]})]})})]})};Ua.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Dt=r=>{const{node:e}=r;return zn(e)?d.jsx(Ua,{...r}):d.jsx(Ba,{...r})};Dt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const zy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(En,{fallback:d.jsx(kn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(Xy,{...r})})),Xy=r=>{const{schema:e,expandedDepth:n=Wr,displayMode:t=An,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,l=m.useMemo(()=>nn(a),[a]),s=m.useMemo(()=>new Jo({source:e,materializeDepth:n,logger:l}),[e,n,l]),u=m.useMemo(()=>s.build(),[s]),[c,f]=m.useReducer(b=>b+1,0),y=m.useCallback(b=>{s.materializeChildren(b),f()},[s]),p=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(Pa.Provider,{value:p,children:d.jsx(dt.Provider,{value:o,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Pn.Provider,{value:en,children:d.jsx(Ie.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(Dt,{node:g})})})})})})}):null};zy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const Qy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(En,{fallback:d.jsx(kn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(Zy,{...r})})),Zy=r=>{const{schema:e,expandedDepth:n=Wr,displayMode:t=An,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:l,diffTypes:s,hideUnchangedNodes:u=!0}=r,c=m.useMemo(()=>hy(u),[u]),f=vy(c),y=m.useMemo(()=>nn(a),[a]),p=m.useMemo(()=>new Qf({source:e,materializeDepth:n,diffsMetaKeys:l,logger:y}),[e,n,l,y]),g=m.useMemo(()=>p.build(),[p]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",g);const[b,h]=m.useReducer(S=>S+1,0),D=m.useCallback(S=>{p.materializeChildren(S),h()},[p]),v=m.useMemo(()=>({expandedDepth:n,materializeChildren:D,treeRevision:b}),[n,D,b]),T=g.root;return T?d.jsx(nt.Provider,{value:l,children:d.jsx(la.Provider,{value:s,children:d.jsx(La.Provider,{value:f,children:d.jsx(Pa.Provider,{value:v,children:d.jsx(dt.Provider,{value:o,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Pn.Provider,{value:Te,children:d.jsx(Ie.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Xn,{node:T})})})})})})})})})}):null};Qy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.'}}};var Ur=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Ur||{});const gr=r=>{const{node:e,variant:n=Ur.PRIMARY,[se]:t}=r,a=Ue(),i=Zn(),o=e.meta(),l=o==null?void 0:o.brokenRef,[s,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(At).map((S,E)=>{var M;const A=((M=S.value())==null?void 0:M.protocol)??"",C=`binding-${E}`;return Ct(S)?{title:A,node:S,testId:C,diffs:S.diffs,diffsSummary:S.diffsSummary,descendantDiffs:S.descendantDiffs,descendantDiffsSummary:S.descendantDiffsSummary,diffsSeverities:S.diffsSeverities}:{title:A,node:S,testId:C}}),[c]),y=s!=null&&s.node&&At(s.node)?s.node:null,p=y==null?void 0:y.value(),{version:g="latest",binding:b=null}=p??{};m.useEffect(()=>{f.length>0&&s===null&&u(f[0])},[f,s]);const h=m.useCallback(S=>l?d.jsx(d.Fragment,{}):d.jsx(St,{options:f,selectedOption:s,onSelectOption:u,variant:vt.Secondary,layoutSide:S}),[f,l,s]),D=m.useMemo(()=>{if(bc(e)){const S=dn(e);return oe(S)}return{}},[e]),v=m.useMemo(()=>{if(y&&Ct(y)){const S=dn(y);return oe(S,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:L.BindingVersionRow})}return{}},[y]),T=m.useMemo(()=>{if(!y)return null;if(Ct(y)&&i){const S=y.diffs[_],E=ep(b,S,i);return d.jsx(ft,{"data-precededby":V.BINDING_VERSION_ROW,mergedSource:E,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return At(y)?d.jsx(pr,{"data-precededby":V.BINDING_VERSION_ROW,source:b,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,b,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ge,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Ur.PRIMARY?B.h3:B.h5,subheader:h,...D}),d.jsxs("div",{"data-testid":`${s==null?void 0:s.testId}-content`,className:"flex flex-col",children:[d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:B.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...v}),T]})]})};function ep(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,x(t)){const s=r[l];o[l]={...t,afterValue:s}}if(k(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}gr.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const wt=r=>{const{node:e,[se]:n}=r,t=Zn(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var l;if(Sc(e)){const s=dn(e);return{...oe(s),highlightingMode:(l=e.diffs[_])==null?void 0:l.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(ge,{"data-precededby":n,value:"Extensions",expandable:!1,variant:B.h3,usage:Zr.AsyncApiJsoSection,...o}),t?d.jsx(ft,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(pr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};wt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Nl="Address Parameters",Tl=r=>{const{node:e,[se]:n}=r,t=Ue();if(Dc(e))return d.jsx(np,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(ge,{"data-precededby":n,value:Nl,expandable:!1,variant:B.h3}),d.jsx(ct,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},np=r=>{const{node:e,[se]:n}=r,t=Ue(),a=Se(),i=e.value(),o=i==null?void 0:i.rawValues,l=Zn(),s=m.useMemo(()=>{const c=dn(e);return oe(c)},[e]),u=m.useMemo(()=>rp(o,e.diffs[_],l),[o,l,e.diffs]);return!l||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(ge,{"data-precededby":n,value:Nl,expandable:!1,variant:B.h3,...s}),d.jsx(yt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:l,overriddenKind:"parameters"})]})};function rp(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,x(t)){const s=r[l];o[l]={...t,afterValue:s}}if(k(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}Tl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const El=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(Se()){case Te:return d.jsx(Hn,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Cn,{left:e(X),right:e(te)})});case en:return d.jsx(In,{content:e(te)})}return null});El.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const kl=m.memo(r=>{const{node:e,[se]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(st),o=mr(e,xr),{nodeDiffs:l}=o,s=m.useMemo(()=>oe(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>oe(o,{diffKey:"description",diffsSeverityPlacement:L.DescriptionRow}),[o]),c=m.useMemo(()=>oe(o,{diffKey:"summary",diffsSeverityPlacement:L.SummaryRow}),[o]),f=m.useMemo(()=>oe(o,{resolveDiff:(v,T)=>{const S=pe.maxChangedPropertyMetaDataByDiffType(T("protocol"),T("host"));return v[_]??S}}),[o]),y=m.useCallback(v=>{var q;if(!t)return null;if(!xr(e))return d.jsx(d.Fragment,{children:t.protocol});const T=(q=e.diffs)==null?void 0:q.protocol;if(!T)return d.jsx(d.Fragment,{children:t.protocol});const S=new Set,{data:E,styles:A}=T;let C=t.protocol,M=!1;return v===X&&(S.add(re.highlighter(A.before.textHighlighterColor)),k(E)||I(E)?C=E.beforeValue:ln(E)&&(C=E.beforeKey),x(E)&&(M=!0)),v===te&&(S.add(re.highlighter(A.after.textHighlighterColor)),x(E)||I(E)?C=E.afterValue:ln(E)&&(C=E.afterKey),k(E)&&(M=!0)),M?null:d.jsx("span",{className:Array.from(S).join(" "),children:C})},[e,t]),p=m.useCallback(v=>{var q;if(!t)return null;if(!xr(e))return d.jsx(d.Fragment,{children:t.host});const T=(q=e.diffs)==null?void 0:q.host;if(!T)return d.jsx(d.Fragment,{children:t.host});const S=new Set,{data:E,styles:A}=T;let C=t.host,M=!1;return v===X&&(S.add(re.highlighter(A.before.textHighlighterColor)),k(E)||I(E)?C=E.beforeValue:ln(E)&&(C=E.beforeKey),x(E)&&(M=!0)),v===te&&(S.add(re.highlighter(A.after.textHighlighterColor)),x(E)||I(E)?C=E.afterValue:ln(E)&&(C=E.afterKey),k(E)&&(M=!0)),M?null:d.jsx("span",{className:Array.from(S).join(" "),children:C})},[e,t]),g=m.useCallback(v=>{var q;function T(F=!1,U=[]){return d.jsx("div",{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${cr} py-2 flex flex-row w-full h-full ${U.join(" ")}`,children:!F&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(v),"://",p(v)]})})}if(!xr(e))return T();const S=((q=e.diffs)==null?void 0:q[_])??f.diff;if(!S)return T();const{data:E,styles:A}=S,C=new Set;let M=!1;return v===X&&(x(E)?(C.add(re.background(N.Gray)),M=!0):C.add(re.background(A.before.backgroundColor))),v===te&&(k(E)?(C.add(re.background(N.Gray)),M=!0):C.add(re.background(A.after.backgroundColor))),T(M,Array.from(C))},[e,p,y,f.diff]),b=m.useMemo(()=>Je(t,l,"title"),[t,l]),h=m.useMemo(()=>Je(t,l,"description"),[t,l]),D=m.useMemo(()=>Je(t,l,"summary"),[t,l]);return t?d.jsxs("div",{className:"flex flex-col",children:[b&&d.jsx(ge,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:B.h4,...s}),!b&&d.jsx(ge,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h4,...s}),d.jsx(El,{renderAddress:g,...f}),h&&d.jsx(un,{"data-precededby":V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h6,textFontWeight:"normal",textColor:wn,...u}),D&&d.jsx(un,{"data-precededby":h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h6,textFontWeight:"normal",textColor:wn,...c}),i&&d.jsx(gr,{"data-precededby":D?V.SUMMARY_ROW:h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,node:i,variant:Ur.SECONDARY})]}):null});kl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const xl=m.memo(r=>{const{node:e,[se]:n}=r,t=m.useMemo(()=>e.childrenNodes().filter(lc),[e]),a=m.useMemo(()=>{if(wc(e)){const i=dn(e);return oe(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ge,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:B.h3,...a}),t.map((i,o)=>d.jsx(kl,{"data-precededby":o===0?V.MESSAGE_SECTION_HEADER_HIGH_LEVEL:V.SERVER_BLOCK,node:i},i.id))]})});xl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Al=r=>{const{node:e,[se]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(st),o=a.find(ic),l=a.find(sc),s=a.find(Na),u=mr(e,vc),{nodeDiffs:c}=u,f=m.useMemo(()=>oe(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>oe(u,{diffKey:"description",diffsSeverityPlacement:L.DescriptionRow}),[u]),p=m.useMemo(()=>oe(u,{diffKey:"summary",diffsSeverityPlacement:L.SummaryRow}),[u]),g=m.useMemo(()=>Je(t,c,"title"),[t,c]),b=m.useMemo(()=>Je(t,c,"description"),[t,c]),h=m.useMemo(()=>Je(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(ge,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:B.h2,...f}),!g&&d.jsx(ge,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h2,...f}),b&&d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...y}),h&&d.jsx(un,{"data-precededby":b?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...p}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Tl,{"data-precededby":b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),l&&d.jsx(xl,{"data-precededby":o?V.JSON_SCHEMA_VIEWER:b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),s&&d.jsx(wt,{"data-precededby":l?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),i&&d.jsx(gr,{"data-precededby":s?V.JSO_VIEWER:l?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Al.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Cl=r=>{const{node:e,[se]:n}=r,t=Ue(),a=Se(),i=Zn(),o=xo(),l=e.childrenNodes(),s=l.find(tc),u=l.find(Na),c=l.find(st),f=l.find(ac),y=m.useMemo(()=>Mi(s,i),[s,i]),p=m.useMemo(()=>Mi(f,i),[f,i]),g=m.useMemo(()=>{if(Nc(s)){const D=dn(s);return oe(D)}return{}},[s]),b=m.useMemo(()=>{if(Tc(f)){const D=dn(f);return oe(D)}return{}},[f]),h=m.useCallback(D=>a===en?d.jsx(ct,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:D,displayMode:t,overriddenKind:"parameters"}):a===Te&&i?d.jsx(yt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:D,displayMode:t,metaKeys:i,filters:o,layoutMode:Te,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[s&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ge,{"data-precededby":n,value:"Headers",variant:B.h3,expandable:!1,...g}),h(y)]}),u&&d.jsx(wt,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(gr,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:u?V.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ge,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:u||c?V.JSO_VIEWER:n,value:"Payload",variant:B.h3,expandable:!1,...b}),h(p)]})]})},Ri="Type";function Mi(r,e){if(!r)return;const n=r.value();if(n)return r instanceof He?Yt(Ri,n.schema,r.diffs[_],e):fs(Ri,n.schema)}Cl.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Vl=r=>{const{node:e,[se]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(st),o=a.find(Na),l=mr(e,kc),{nodeDiffs:s}=l,u=m.useMemo(()=>oe(l,{diffKey:"title"}),[l]),c=m.useMemo(()=>oe(l,{diffKey:"description",diffsSeverityPlacement:L.DescriptionRow}),[l]),f=m.useMemo(()=>oe(l,{diffKey:"summary",diffsSeverityPlacement:L.SummaryRow}),[l]),y=m.useMemo(()=>Je(t,s,"title"),[t,s]),p=m.useMemo(()=>Je(t,s,"description"),[t,s]),g=m.useMemo(()=>Je(t,s,"summary"),[t,s]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(ge,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:B.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(ge,{"data-precededby":n,value:e.key.toString(),variant:B.h2,expandable:!1,expanded:!0,...u}),p&&d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...c}),g&&d.jsx(un,{"data-precededby":p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(wt,{"data-precededby":g?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(gr,{"data-precededby":o?V.JSO_VIEWER:g?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Vl.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const _l=r=>{const{node:e,[se]:n}=r;return es(e)?d.jsx(Cl,{"data-precededby":n,node:e}):ns(e)?d.jsx(Al,{"data-precededby":n,node:e}):rs(e)?d.jsx(Vl,{"data-precededby":n,node:e}):null};_l.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Rl=r=>{const{node:e,[se]:n}=r,t=Se();Ue();const[a,i]=m.useState(null),o=e.nestedNodes(),l=m.useMemo(()=>o.map(g=>{const b=tp(g),h=ap(g);return Ac(g)?{node:g,title:b,testId:h,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:b,testId:h}}),[o]);m.useEffect(()=>{l.length>0&&a===null&&i(l[0])},[l,a]);const s=m.useMemo(()=>{var g;return xc(e)?(g=e.diffs)==null?void 0:g[_]:null},[e]),u=m.useMemo(()=>{if(s){const{data:g}=s;if(I(g)||k(g))return g.beforeDeclarationPaths[0];if(x(g))return g.afterDeclarationPaths[0]}return null},[s]),c=m.useMemo(()=>{var g;return(g=s==null?void 0:s.data)==null?void 0:g.type},[s]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),y=m.useCallback(g=>{const b=new Set;if(s){const{styles:h}=s;g===X&&b.add(re.background(h.before.backgroundColor)),g===te&&b.add(re.background(h.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${cr} h-full ${Array.from(b).join(" ")}`,children:d.jsx(St,{options:l,selectedOption:a,onSelectOption:i,variant:vt.Secondary,layoutSide:g})})},[s,n,l,a]),p=m.useCallback(()=>{switch(t){case Te:return d.jsx(Hn,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(Cn,{left:y(X),right:y(te)})});default:return d.jsx(In,{content:y(te)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[p(),a&&oc(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(_l,{"data-precededby":V.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function tp(r){switch(r.kind){case w.MESSAGE_CONTENT:return"Message";case w.MESSAGE_CHANNEL:return"Channel";case w.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function ap(r){switch(r.kind){case w.MESSAGE_CONTENT:return"message-content";case w.MESSAGE_CHANNEL:return"message-channel";case w.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Rl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const Ya=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=mr(e,Ec),{nodeDiffs:o}=i,l=m.useMemo(()=>oe(i,{diffKey:"title"}),[i]),s=m.useMemo(()=>oe(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>oe(i,{diffKey:"description",diffsSeverityPlacement:L.DescriptionRow}),[i]),c=m.useMemo(()=>oe(i,{diffKey:"summary",diffsSeverityPlacement:L.SummaryRow}),[i]),f=m.useMemo(()=>Je(t,o,"title"),[t,o]),y=m.useMemo(()=>Je(t,o,"description"),[t,o]),p=m.useMemo(()=>Je(t,o,"summary"),[t,o]),g=n?V.ROOT:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(ge,{"data-precededby":V.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:B.h1,...l}),!n&&!f&&d.jsx(ge,{"data-precededby":V.ROOT,value:e.key.toString(),expandable:!1,variant:B.h1,...l}),d.jsx(ts,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...s}),y&&d.jsx(un,{"data-precededby":V.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h4,textFontWeight:"normal",textColor:wn,...u}),p&&d.jsx(un,{"data-precededby":y?V.DESCRIPTION_ROW:V.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h4,textFontWeight:"normal",textColor:wn,...c}),d.jsx(ip,{"data-precededby":p?V.SUMMARY_ROW:y?V.DESCRIPTION_ROW:V.ADDRESS_ROW,children:a})]})},ip=r=>{const{children:e,[se]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>rc(t)?d.jsx(Rl,{"data-precededby":n,node:t},t.key):null)})};Ya.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const op=m.memo(r=>r.source===null?null:d.jsx(En,{fallback:d.jsx(kn,{componentName:"Async API Operation Viewer"}),children:d.jsx(sp,{...r})})),sp=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=An,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,l=m.useMemo(()=>nn(a),[a]),s=m.useMemo(()=>new Oo({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:l}),[e,n,o,l]),u=m.useMemo(()=>(s==null?void 0:s.build())??null,[s]);l.debug("[AsyncAPI] Original Source:",e),l.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!Zo(c)?null:d.jsx(wo.Provider,{value:a,children:d.jsx(xn.Provider,{value:t,children:d.jsxs(Pn.Provider,{value:en,children:[" ",d.jsx(Ie.Provider,{value:0,children:d.jsx(Ya,{node:c,noHeading:i})})]})})})});op.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{op as A,pr as J,_c as a,ct as b,yt as c,Qy as d,zy as e,ft as f};
