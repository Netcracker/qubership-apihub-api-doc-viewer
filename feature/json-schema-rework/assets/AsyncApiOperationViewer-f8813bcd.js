var ql=Object.defineProperty;var Pl=(r,e,n)=>e in r?ql(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(Pl(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{at as jr,a3 as wn,N as R,d as $r,t as k,H as N,v as x,x as O,y as He,R as H,w as ln,O as I,au as Sn,av as Ot,aw as It,ax as Ht,ay as Pi,az as Oi,aA as Ii,aB as Hi,aC as Li,aD as ji,aE as Ji,aF as Fi,aG as Ol,aH as Lt,aI as Ki,aJ as Gi,a6 as Bi,aK as Ui,aL as Yi,aM as Wi,ai as $i,aj as zi,ah as Xi,aN as Qi,af as Zi,ag as eo,aO as no,aP as jt,ae as ro,aa as to,ac as ao,ab as io,ad as oo,a7 as so,a8 as lo,a9 as uo,U as z,o as fr,_ as fo,aQ as Il,aR as ze,i as za,aS as co,aT as Hl,Z as Ll,aU as jl,X as ve,Y as cr,W as te,S as Ee,V as ee,E as xn,c as kn,e as An,L as On,f as Le,p as Cn,am as Ke,aV as mo,l as nn,aW as Jl,aX as Fl,aY as Kl,aZ as Gl,a_ as Bl,a$ as Ul,b0 as Yl,b1 as Wl,b2 as $l,z as zl,A as Xl,B as Ql,F as Zl,G as ed,J as nd,u as Ge,g as zr,an as In,I as Xa,b3 as rd,b4 as td,b5 as Wn,b6 as ad,b7 as id,b8 as Jr,b9 as od,ba as sd,bb as Qa,ak as Za,j as yo,bc as po,bd as ld,al as dd,as as ud,be as fd,bf as cd,aq as me,bg as Sr,bh as Kn,bi as mn,bj as qn,bk as go,bl as ho,bm as md,C as yd,bn as Jt,ao as pd,h as gd,bo as hd,bp as vr,bq as bd,ar as bo}from"./DiffBadge-2c39fcfb.js";import{_ as na,l as _,$ as Ce,a0 as D,a1 as Xr,a2 as Qr,a3 as Sd,a4 as Zr,a5 as So,a6 as fe,e as rn,a7 as et,t as ue,a8 as oe,a9 as ra,aa as vd,v as X,ab as Dd,ac as wd,ad as vo,ae as Do,af as ye,ag as wo,z as ta,ah as Ft,ai as Nd,S as je,O as Hn,N as Ln,Q as Vn,aj as Et,b as B,X as mr,A as le,ak as No,al as Td,am as nt,an as dn,ao as se,T as he,ap as rt,P as V,aq as Ed,ar as Ve,as as To,at as sn,au as tt,av as aa,aw as ia,M as Eo,ax as xd,ay as kd,az as Ad,aA as Ie,aB as Cd,aC as Vd,aD as Rd,aE as _d,aF as Md,aG as qd,aH as Pd,aI as Od,aJ as yr,aK as tr,aL as ar,aM as xo,aN as ko,aO as Id,c as un,d as Nn}from"./IndexesNodeViewer-854c958a.js";import{r as m}from"./index-f46741a2.js";import{T as oa,A as jn,a as Zn,b as ge,c as sa,m as la,t as Hd,C as Ld,d as at,e as da,u as Jn,f as Ao}from"./DdlTableDiffsViewer-1691fe3e.js";/* empty css              */import"./DdlTableViewer-10ae7ffc.js";import"./GraphQLOperationDiffViewer-89ad93c7.js";import"./GraphQLOperationViewer-f5bfa916.js";import{g as jd,h as Jd,J as Fd,j as Kd,k as Gd,l as Bd,m as ua,n as Ud,S as Yd,U as fa,o as Co,p as it,q as ot,N as Vo,E as ei,r as Wd,s as $d,t as zd,v as Xd,w as Ro,x as st,C as ca,y as ma,D as ya,z as Qd,A as Zd,B as eu,F as nu,H as _o,I as Kt,K as ni,L as ru,M as yn,V as pa,P as ga,Q as ha,R as ba,T as tu,W as Mo,X as Sa,Y as va,Z as Da,_ as au,$ as qo,a0 as iu,a1 as ou,a2 as su,a3 as Po,a4 as lu,a5 as du,a6 as uu,a7 as fu,a8 as cu,a9 as mu,aa as yu,ab as pu,ac as gu,ad as hu,ae as bu}from"./GraphPropNodeViewer-3d0fd400.js";class Su extends na{constructor(){super()}}const ri=(r,e)=>!_(e)||Ce(e)?e:{rawValues:e},vu=(r,e)=>{if(!_(e)||Ce(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},ti=(r,e)=>_(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function or(r){return{"/data":{"/content":()=>or(D.MESSAGE_CONTENT),"/channel":()=>or(D.MESSAGE_CHANNEL),"/operation":()=>or(D.MESSAGE_OPERATION),kind:D.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:D.MESSAGE_CHANNEL_PARAMETERS,transformers:[ri]},"/servers":{"/*":()=>or(D.SERVER),kind:D.SERVERS},"/extensions":{kind:D.EXTENSIONS,transformers:[ri]},"/bindings":{"/*":{kind:D.BINDING,transformers:[vu]},kind:D.BINDINGS,complex:!0},"/headers":{kind:D.MESSAGE_HEADERS,transformers:[ti]},"/payload":{kind:D.MESSAGE_PAYLOAD,transformers:[ti]},kind:r}}const Du="<address unknown>";class Oo{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var s;let t,a;const i=e.operations??{};let o,l;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(s=c.messages)==null?void 0:s[0],y=this.isReferenceObject(f)?null:f;if(y){const p=y[this.referenceNamePropertyKey];l=typeof p=="string"?p:void 0}}}if(!o||!l)return!o&&this.logger.error("Cannot find first operation in source."),!l&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,l),t=o,a=l}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var T;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,l=Object.entries(t).filter(b=>{const[E,C]=b;return!this.isReferenceObject(C)&&E===i}).map(([,b])=>b).at(0);if(!l)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const s=this.isReferenceObject(l.channel)?{}:l.channel;let c=(l.messages??[]).filter(b=>!this.isReferenceObject(b)).find(b=>_(b)&&b[this.referenceNamePropertyKey]===o);if(!s)return this.logger.error("Cannot find channel in the operation",l),null;if(!c){const b=(T=s.messages)==null?void 0:T[o];if(c=this.isReferenceObject(b)?void 0:b,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(l),y=this.copyExtensions(s),p=this.copyExtensions(c),g=b=>_(b)?{[this.referenceNamePropertyKey]:b[this.referenceNamePropertyKey]}:void 0,S=g(c),h=g(s),v=g(l);return{...S??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:l.action,address:s.address??Du,data:{content:{...c.headers?{headers:c.headers}:{},...p?{extensions:p}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...h??{},...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...y?{extensions:y}:{},...s.bindings?{bindings:s.bindings}:{},...s.parameters?{parameters:this.transformParametersToJsonSchema(s.parameters)}:{},...s.servers?{servers:s.servers}:{}},operation:{...v??{},id:i,...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...l.bindings?{bindings:l.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function wu(r){return Xr(r)}const Nu=new Set([D.BINDING,D.EXTENSIONS,D.MESSAGE,D.MESSAGE_CHANNEL,D.MESSAGE_CHANNEL_PARAMETERS,D.MESSAGE_HEADERS,D.MESSAGE_OPERATION,D.MESSAGE_PAYLOAD,D.SERVER]),Dr=["title","description","summary"];class lt extends Qr{createNodeMeta(e){return{..._(e)&&jr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!Sd(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,lt.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Nu.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case D.BINDING:return["binding","version","protocol"];case D.EXTENSIONS:case D.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case D.MESSAGE:return[...Dr,"internalTitle","action","address"];case D.MESSAGE_CHANNEL:return[...Dr];case D.MESSAGE_OPERATION:return[...Dr];case D.MESSAGE_HEADERS:case D.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case D.SERVER:return[...Dr,"host","protocol"];default:return[]}}}const Tu="[AsyncAPI]";class Io extends Zr{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"referenceNamePropertyKey");P(this,"operationKeys");P(this,"logger");P(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!_(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new et},a=or(D.MESSAGE),i=wu({source:n,tree:this.tree,supportedNodeKinds:So,createNodeFromRaw:(o,l,s,u,c)=>this.createNodeFromRaw(o,l,s,u,c),createNodeParams:(o,l,s)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:l,container:s}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l),shouldStopAfterNodeCreation:(o,l)=>_(l)&&!!l.isPrimitive});return wn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return Tu}createTree(){return new Su}createNodeDataBuilder(){return new lt}prepareSource(){return new Oo(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return _(n)?n:null}resolveNodeKey(n,t){if(!_(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:fe.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:fe.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isSimpleTreeNode(n){return n.type===fe.SIMPLE}isComplexTreeNode(n){return n.type===fe.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Eu extends oa{constructor(){super()}}function ai(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const xu="x-";function Or(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(xu)}class ku extends Oo{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=this.diffMetaKeys,s=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!s)return null;const u=ue(oe(e,["operations",o],this.referenceNamePropertyKey)),c=ue(oe(e,["operations",a,o],this.referenceNamePropertyKey));ue(oe(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=ue(oe(e,["operations",a,"channel",o],this.referenceNamePropertyKey));ue(oe(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),ue(oe(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=ue(oe(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),p=ue(oe(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));ue(oe(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const g=oe(e,["operations",a,"messages",i],this.referenceNamePropertyKey),S=oe(e,["operations",a,"messages"],this.referenceNamePropertyKey),h=_(g)&&ra(S)?vd(S,g):void 0,v=(h&&typeof h!="symbol"?y==null?void 0:y[h]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),w=s;if(!(o in w)){const T=p==null?void 0:p.title,b=p==null?void 0:p.name,E=p==null?void 0:p.description,C=p==null?void 0:p.summary,A=f==null?void 0:f.address,M=p==null?void 0:p.headers,q=p==null?void 0:p.payload,J=w.data.content.extensions;if(J&&!(o in J)){const L=Object.keys(p??{}).reduce((F,G)=>{if(!Or(G))return F;const ae=p==null?void 0:p[G];return ae&&(F[G]=ae),F},{});w.data.content.extensions=Object.assign(J,{[o]:L})}const U=w.data.content;if(U&&!(o in U)){const L={...M?{headers:M}:{},...q?{payload:q}:{}};w.data.content=Object.assign(U,{[o]:L})}w[o]={...v?{[R]:v}:{},...T?{title:T}:{},...b?{internalTitle:b}:{},...E?{description:E}:{},...C?{summary:C}:{},...A?{address:A}:{}}}if(!(o in w.data.channel)){const T=f==null?void 0:f.title,b=f==null?void 0:f.description,E=f==null?void 0:f.summary,C=f==null?void 0:f.address,A=w.data.channel.extensions;if(A&&!(o in A)){const M=Object.keys(f??{}).reduce((q,J)=>{if(!Or(J))return q;const U=f==null?void 0:f[J];return U&&(q[J]=U),q},{});w.data.channel.extensions=Object.assign(A,{[o]:M})}w.data.channel[o]={...T?{title:T}:{},...b?{description:b}:{},...E?{summary:E}:{},...C?{address:C}:{}}}if(!(o in w.data.operation)){const T=c==null?void 0:c.title,b=c==null?void 0:c.description,E=c==null?void 0:c.summary,C=w.data.operation.extensions;if(C&&!(o in C)){const A=Object.keys(c??{}).reduce((M,q)=>{if(!Or(q))return M;const J=c==null?void 0:c[q];return J&&(M[q]=J),M},{});w.data.operation.extensions=Object.assign(C,{[o]:A})}w.data.operation[o]={...T?{title:T}:{},...b?{description:b}:{},...E?{summary:E}:{}}}return $r(w,o,l),w}hasOnlyAllowedDiffMetaSymbols(e){if(!_(e)&&!Ce(e))return!0;if(Ce(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class Au extends lt{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class Cu extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const l=o.data.type;i.add(l)}return i}}class Vu extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,l=oe(t,["binding",o]);if(this.isDiffsSet(l))for(const s of l)s&&i.add(s.type);return i}}class Ru extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=ue(oe(t,["parameters","properties",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=oe(t,["parameters",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=ue(oe(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class _u extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=ue(oe(t,["extensions",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=oe(t,["headers",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=oe(t,["payload",l]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class Mu extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,l=ue(oe(t,["extensions",o]));if(l)for(const s of Object.values(l))s&&i.add(s.type);return i}}var Pt;let qu=(Pt=class{static instance(e){switch(e){case D.BINDING:if(!this.instances.has(D.BINDING)){const n=new Vu;this.instances.set(D.BINDING,n)}return this.instances.get(D.BINDING);case D.MESSAGE_CONTENT:if(!this.instances.has(D.MESSAGE_CONTENT)){const n=new _u;this.instances.set(D.MESSAGE_CONTENT,n)}return this.instances.get(D.MESSAGE_CONTENT);case D.MESSAGE_CHANNEL:if(!this.instances.has(D.MESSAGE_CHANNEL)){const n=new Ru;this.instances.set(D.MESSAGE_CHANNEL,n)}return this.instances.get(D.MESSAGE_CHANNEL);case D.MESSAGE_OPERATION:if(!this.instances.has(D.MESSAGE_OPERATION)){const n=new Mu;this.instances.set(D.MESSAGE_OPERATION,n)}return this.instances.get(D.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Cu;this.instances.set(null,n)}return this.instances.get(null)}}},P(Pt,"instances",new Map),Pt);class Pu extends Zn{aggregate(e,n){}}class Ou extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=ue(oe(e,[a],t));if(!i)return;const o={};let l=!1;for(const s of Object.keys(e)){const u={},c=i[s];c&&(l=!0,this.aggregateWholeNodeDiff(c,u),o[s]=u[R])}return l?o:void 0}}class Iu extends Zn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=ue(oe(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,l={};if(i){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(i)&&(s={...s,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),x(i)&&(s={...s,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),O(i)&&(s={...s,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),l.headers={data:i,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}}if(o){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(o)&&(s={...s,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),x(o)&&(s={...s,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),O(o)&&(s={...s,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),l.payload={data:o,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}}return l}}class Hu extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=ue(oe(e,[a],t));if(!i)return;const o={};let l=!1;for(let s=0;s<e.length;s++){const c=e[s][t];if(!c)continue;const f={},y=i[s];y&&(l=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[R])}return l?o:void 0}}class Ho{static instance(e){switch(e){case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new Ou),this.instances.get(D.BINDINGS);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new Hu),this.instances.get(D.SERVERS);case D.MESSAGE_CONTENT:return this.instances.has(D.MESSAGE_CONTENT)||this.instances.set(D.MESSAGE_CONTENT,new Iu),this.instances.get(D.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new Pu;this.instances.set(null,n)}return this.instances.get(null)}}}P(Ho,"instances",new Map);class Lu extends ge{aggregate(e){const n=e[R];if(n){const f=n.data,p={type:f.type,causedAt:[]};return O(f)?(p.causedAt=f.beforeDeclarationPaths[0],{[H.TitleRow]:p,[H.BindingVersionRow]:p}):(x(f)?p.causedAt=f.beforeDeclarationPaths[0]:k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),{[H.TitleRow]:p,[H.DescriptionRow]:p,[H.SummaryRow]:p,[H.AddressRow]:p,[H.BindingVersionRow]:p,[H.ServerAddressRow]:p})}const t=e.title,a=e.description,i=e.summary,o=e.address,l=e.version,s=e.host,u=e.protocol,c={};if(t){const f=t.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.TitleRow]=p}if(a){const f=a.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.DescriptionRow]=p}if(i){const f=i.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.SummaryRow]=p}if(o){const f=o.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.AddressRow]=p}if(l){const f=l.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.BindingVersionRow]=p}if(s||u){const f=s==null?void 0:s.data,y=u==null?void 0:u.data,p=ge.maxDiffByDiffType(f,y);if(p){const g={type:p.type,causedAt:[]};(x(p)||O(p))&&(g.causedAt=p.beforeDeclarationPaths[0]),k(p)&&(g.causedAt=p.afterDeclarationPaths[0]),c[H.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class Lo{static instance(e){switch(e){default:return new Lu}}}P(Lo,"instances",new Map);class ju extends sa{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!x(n)&&!O(n)&&!ln(n))return!1;return!0}}class Ju{static instance(e){switch(e){default:return new ju}}}class Rn extends X{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!_(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const p=o.diffs[R];if(p&&(k(p.data)||x(p.data)))return u[R]={...p,inherited:!0},u;{const g=o.descendantDiffs[a];if(g)return u[R]=g,u}}else if(i){const p=i.diffs[R];if(p&&(k(p.data)||x(p.data)))return u[R]={...p,inherited:!0},u;{const g=i.descendantDiffs[a];if(g)return u[R]=g,u}}if(!X.isDiffsRecord(s))return;const c=s.title;c&&this.aggregateTextDiff(c,"title",u);const f=s.description;f&&this.aggregateTextDiff(f,"description",u);const y=s.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;k(n)&&(i={...i,isContentVisible:!1,backgroundColor:N.Gray},o={...o,isContentVisible:!0,backgroundColor:N.Green}),x(n)&&(i={...i,isContentVisible:!0,backgroundColor:N.Red},o={...o,isContentVisible:!1,backgroundColor:N.Gray}),(ln(n)||O(n))&&(i={...i,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},o={...o,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}}}class Fu extends Rn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!_(e))return;let l=super.aggregate(e,n,t,a,i);if(l){const u=l[R];if(u){const{data:c,styles:f}=u;k(c)&&(f.after.borderShadowColor=N.Green),x(c)&&(f.before.borderShadowColor=N.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,l)}}l||(l={});const s=oe(e,["binding"]);if(_(s)){const u=s[o];if(X.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",l)}}return Object.keys(l).length>0?l:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(k(t)&&_(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(x(t)&&_(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class Ku extends Rn{aggregateByDescendantDiffs(e,n,t){var u;if(n[R])return n;if(!_(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const l=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[R]=l(),n;let s=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==s){s=I.replace;break}return s===I.replace?(n[R]=l(),n):(n[R]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:x(n)?n.beforeDeclarationPaths:[],beforeValue:x(n)?n.beforeValue:void 0,afterDeclarationPaths:k(n)?n.afterDeclarationPaths:[],afterValue:k(n)?n.afterValue:void 0,action:I.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}),a)}}class Gu extends Rn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[R])return n;const i=oe(e,["rawValues"]);if(!_(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!X.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[R]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:Sn},n}}class Bu extends Rn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!_(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(X.isDiffsRecord(s)){const u=s[R];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};k(u)&&(f={...f,isContentVisible:!1,backgroundColor:N.Gray},y={...y,isContentVisible:!0,backgroundColor:N.Green}),x(u)&&(f={...f,isContentVisible:!0,backgroundColor:N.Red},y={...y,isContentVisible:!1,backgroundColor:N.Gray}),l[R]={data:u,highlightingMode:He,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=s.address;c&&this.aggregateTextDiff(c,"address",l)}return Object.keys(l).length>0?l:void 0}}class Uu extends Rn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[R])return n;const i=oe(e,["rawValues","properties"]);if(!_(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!X.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[R]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:He},n}}class Yu extends Rn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!_(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(X.isDiffsRecord(s)){const u=s.host;u&&this.aggregateTextDiff(u,"host",l);const c=s.protocol;c&&this.aggregateTextDiff(c,"protocol",l)}return Object.keys(l).length>0?l:void 0}}class Wu extends Rn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[R])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[R]=o,n}}class Gt{static instance(e){switch(e){case D.BINDING:return this.instances.has(D.BINDING)||this.instances.set(D.BINDING,new Fu),this.instances.get(D.BINDING);case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new Ku),this.instances.get(D.BINDINGS);case D.EXTENSIONS:return this.instances.has(D.EXTENSIONS)||this.instances.set(D.EXTENSIONS,new Gu),this.instances.get(D.EXTENSIONS);case D.MESSAGE:return this.instances.has(D.MESSAGE)||this.instances.set(D.MESSAGE,new Bu),this.instances.get(D.MESSAGE);case D.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(D.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(D.MESSAGE_CHANNEL_PARAMETERS,new Uu),this.instances.get(D.MESSAGE_CHANNEL_PARAMETERS);case D.SERVER:return this.instances.has(D.SERVER)||this.instances.set(D.SERVER,new Yu),this.instances.get(D.SERVER);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new Wu),this.instances.get(D.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new Rn),this.instances.get(null)}}}P(Gt,"instances",new Map);const $u="[AsyncAPI][WithDiffs]";class zu extends Io{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return $u}createTree(){return new Eu}createNodeDataBuilder(){return new Au}prepareSource(){return new ku(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return ra(n)?n:null}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!ai(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Gt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return Ju.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Ho.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return Gt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return qu.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return Lo.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),la(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return So.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ai(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Xu extends na{constructor(){super()}}const Q={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},jo=Object.values(Q),zn="unknown",Qu="any",Zu="nothing",Z={UNKNOWN:zn,ANY:Qu,NOTHING:Zu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},ef=Object.values(Z);function nf(r){return!r||!Dd(r)?!1:ef.some(e=>e===r)}function rf(r){return _(r)&&jr in r}function xt(r,e){const n=r[e];return Ce(n)&&n.length>0}function er(r){return typeof r=="boolean"}function Tn(r){return r==null||typeof r=="boolean"?null:r}const tf=[Z.STRING,Z.NUMBER,Z.INTEGER,Z.BOOLEAN];function wa(r){return!!r&&tf.includes(r)}const af=[Z.ANY,Z.NOTHING];function of(r){return!!r&&af.includes(r)}function Fr(r){return!_(r)||Ce(r)?!1:xt(r,"allOf")||xt(r,"oneOf")||xt(r,"anyOf")}function ii(r){return _(r)&&Reflect.ownKeys(r).length>0}function kt(r){return Ce(r)&&r.length>0}function Jo(r,e){if(!_(r)&&!Ce(r))return!1;if(Ce(r))return r.length>0;const n=r;if(kt(n[Ot])||kt(n[It])||kt(n[Ht])||ii(n[Pi])||ii(n[Oi]))return!0;const t=n[Ii];if(t!==void 0&&t!==!1||n[Hi]!==void 0)return!0;const a=n[Li];return a!==void 0&&a!==!1}const sf="extensions",lf="location",Xe={root:Q.ROOT,definition:Q.DEFINITION,property:Q.PROPERTY,additionalProperties:Q.ADDITIONAL_PROPERTIES,patternProperty:Q.PATTERN_PROPERTY,items:Q.ITEMS,item:Q.ITEM,additionalItems:Q.ADDITIONAL_ITEMS,allOf:Q.ALL_OF,anyOf:Q.ANY_OF,oneOf:Q.ONE_OF},df=(r,e)=>{if(!_(e)||Ce(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},uf="x-";function Kr(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(uf)}function ff(r,e){if(!_(e)||Ce(e))return e;const n=Reflect.ownKeys(e),t=n.filter(l=>Kr(l));if(t.length===0)return e;const a=new Set(t),i=t.reduce((l,s)=>(Kr(s)&&(l[s]=e[s]),l),{}),o={};for(const l of n)typeof l=="string"&&a.has(l)||(o[l]=e[l]);return o.extensions=i,o}const cf=[df,ff];function Qe(r=Xe.root){return{"/allOf":{"/*":()=>Qe(Xe.allOf)},"/oneOf":{"/*":()=>Qe(Xe.oneOf)},"/anyOf":{"/*":()=>Qe(Xe.anyOf)},"/properties":{"/*":()=>Qe(Xe.property)},"/items":()=>({...Qe(Xe.items),"/*":({key:e})=>wd(e)?Qe(Xe.item):{}}),"/additionalProperties":()=>Qe(Xe.additionalProperties),"/additionalItems":()=>Qe(Xe.additionalItems),"/patternProperties":{"/*":()=>Qe(Xe.patternProperty)},kind:r,transformers:cf}}function mf(r){return Xr(r)}const yf={type:Z.ANY};function pf(r,e){if(er(e)){if(e===!1)return!1;if(e===!0&&r===Q.ADDITIONAL_PROPERTIES)return yf}}function gf(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function ce(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const ke=class ke extends Qr{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case Z.UNKNOWN:case Z.ANY:case Z.NOTHING:case Z.NULL:case Z.BOOLEAN:return ke.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case Z.STRING:return[...ke.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,jt,so,lo,uo,lf];case Z.NUMBER:case Z.INTEGER:return[...ke.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,jt,ro,to,ao,io,oo];case Z.OBJECT:return[...ke.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Qi,Zi,eo,no];case Z.ARRAY:return[...ke.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,$i,zi,Xi];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=gf(n,t),o=rf(e)?{brokenRef:String(e.$ref)}:{};return!Fr(e)&&_(e)?{...this.pick(e,ke.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=pf(e,t);if(i!==void 0)return i;if(er(t))return t;if(!_(t)||Fr(t))return null;const o=nf(t.type)?t.type:Z.UNKNOWN;return o===Z.UNKNOWN||o===Z.ANY||o===Z.NOTHING||o===Z.NULL||o===Z.BOOLEAN?{...a(t,ke.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Z.STRING?{...a(t,ke.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Z.NUMBER||o===Z.INTEGER?{...a(t,ke.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Z.OBJECT?{...a(t,ke.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===Z.ARRAY?{...a(t,ke.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};P(ke,"JSON_SCHEMA_TREE_NODE_META_PROPS",[ji,Ji,Fi,Ol]),P(ke,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Lt,Ki,Gi,Bi,Ui,Yi,Wi,sf]);let Gr=ke;const hf="[JSON Schema]";class Fo extends Zr{constructor(n){const{source:t,materializeDepth:a,logger:i=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new vo);P(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!_(n))return this.tree;const t={parent:null,container:null,ancestors:new et,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=Qe();return this.crawlHooks=mf({source:n,tree:this.tree,supportedNodeKinds:jo,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o,l)=>({value:er(i)||_(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:l}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>Ce(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Jo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),wn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:Do(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};wn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return hf}createTree(){return new Xu}createNodeDataBuilder(){return new Gr((n,t)=>this.pick(n,t))}prepareSource(){return _(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u,value:c}=o;if(i||_(c)&&Fr(c)){const S=this.createNodeMeta(t,o),h={type:fe.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:S,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,h)}const y=this.createNodeValue(t,a,o),p=this.createNodeMeta(t,o),g={type:fe.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:y,meta:p,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,g)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===fe.SIMPLE}isComplexTreeNode(n){return n.type===fe.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class bf extends oa{constructor(){super()}}class Sf{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!_(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return $r(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class vf extends Gr{constructor(e){super(e)}}class Df extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!k(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class Ko{static instance(e){return this.kindAnyInstance}}P(Ko,"kindAnyInstance",new Df);const wf=["properties","patternProperties","allOf","anyOf","oneOf","items"],Nf=new Set(["properties","patternProperties"]);class Tf extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!_(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[l,s]of Object.entries(o))!s||l===R||!X.isDiff(s)||(i[l]=this.buildDescendantDiffMetadata(s));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=ue(Reflect.get(n,t));i&&a.push(i);for(const o of wf){const l=Reflect.get(n,o);if(!_(l)&&!Ce(l))continue;const s=ue(Reflect.get(l,t));if(s){a.push(s);continue}const u=i==null?void 0:i[o];if(u&&(k(u)||x(u))&&(Nf.has(o)?_(l):Ce(l))){const y=this.decomposeWholeChildBagDiff(l,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=Ce(n)?n.map((o,l)=>String(l)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return k(n)?{type:n.type,scope:n.scope,description:n.description,action:I.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:I.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const l=He;return k(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Green,borderShadowColor:N.Green},o={...o,increaseLevel:!0}),x(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Red,borderShadowColor:N.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},o={...o,increaseLevel:!1}),O(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:l}}}class Go{static instance(e){return this.kindAnyInstance}}P(Go,"kindAnyInstance",new Tf);const vn="titleRow",Bo=["type","format","title"],$n=["readOnly","writeOnly","deprecated"];class Ef extends ge{aggregate(e){const n=e[R],t={};return n?(t[H.TitleRow]=this.buildNodeDiffsSeverity(n),t[H.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[H.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n),t[H.ExtensionsRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",H.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",H.NestingIndicatorRow,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var a,i,o;const t=e;for(const l of Object.values(ye)){const s=ge.maxChangedPropertyMetaDataByDiffType((a=t.validationRowDiffs)==null?void 0:a[l],(i=t.validationRowColorizingDiffs)==null?void 0:i[l],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[l])??{}));s&&(n[wo[l]]=this.buildNodeDiffsSeverity(s))}}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[vn],...Object.values(t.typeLabelFieldDiffs??{})],i=ge.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[H.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return x(n)||O(n)?t.causedAt=n.beforeDeclarationPaths[0]:k(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class xf extends Ef{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);a&&(n[H.DefaultRow]=this.buildNodeDiffsSeverity(a))}applyEnumRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));a&&(n[H.EnumRow]=this.buildNodeDiffsSeverity(a))}applyExamplesRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));a&&(n[H.ExamplesRow]=this.buildNodeDiffsSeverity(a))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));a&&(n[H.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(a))}}class Uo{static instance(e){return this.kindPropertyInstance}}P(Uo,"kindPropertyInstance",new xf);function At(r,e){for(const n of Object.values(e??{}))ta(n)&&r.add(n.data.type)}class kf extends sa{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,l]of Object.entries(e))if(l){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){At(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){At(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const s of Object.values(i.validationRowValueDiffs??{}))At(a,s);continue}ta(l)&&a.add(l.data.type)}return a}}class Yo{static instance(e){return this.kindAnyInstance}}P(Yo,"kindAnyInstance",new kf);const Br={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Af(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Br.OAS_3_1_NUMERIC_EXCLUSIVE:Br.OAS_3_0_BOOLEAN_EXCLUSIVE}function Cf(r){return r.dialect??Af(r)}const Vf="?",be="{value}",an="{exclusive_value}",pn=">",wr=">=",gn="<",Nr="<=",Me=1,qe=2,Pe=4,Oe=8,oi={0:{lower:void 0,upper:void 0},[Me]:{lower:`${wr} ${be}`,upper:void 0},[qe]:{lower:`${pn} ${an}`,upper:void 0},[Pe]:{lower:void 0,upper:`${Nr} ${be}`},[Oe]:{lower:void 0,upper:`${gn} ${an}`},[qe|Me]:{lower:`${pn} ${be}`,upper:void 0},[qe|Pe]:{lower:`${pn} ${an}`,upper:`${Nr} ${be}`},[qe|Oe]:{lower:`${pn} ${an}`,upper:`${gn} ${an}`},[Oe|Me]:{lower:`${wr} ${be}`,upper:`${gn} ${an}`},[Oe|Pe]:{lower:void 0,upper:`${gn} ${be}`},[Pe|Me]:{lower:`${wr} ${be}`,upper:`${Nr} ${be}`},[qe|Me|Pe]:{lower:`${pn} ${be}`,upper:`${Nr} ${be}`},[qe|Me|Oe]:{lower:`${pn} ${be}`,upper:`${gn} ${an}`},[qe|Pe|Oe]:{lower:`${pn} ${an}`,upper:`${gn} ${be}`},[Oe|Me|Pe]:{lower:`${wr} ${be}`,upper:`${gn} ${be}`},[Me|qe|Pe|Oe]:{lower:`${pn} ${be}`,upper:`${gn} ${be}`}};function Bt(r){return r!=null}function si(r){return r!==void 0&&r!==!1}function Rf(r,e,n){return(r&(Me|qe))!==(Me|qe)||n===void 0||typeof e!="number"?r:n>=e?r&~Me:r&~qe}function _f(r,e,n){return(r&(Pe|Oe))!==(Pe|Oe)||n===void 0||typeof e!="number"?r:n<=e?r&~Pe:r&~Oe}function li(r,e,n){return r.replace(be,`${e}`).replace(an,Bt(n)?`${n}`:Vf)}function Mf(r,e){return Bt(r)||Bt(e)}function qf(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=Me),si(t)&&(i|=qe),n!==void 0&&(i|=Pe),si(a)&&(i|=Oe),i}function Wo(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&Me)&&(n&=~qe),typeof e.exclusiveMax!="number"&&!(n&Pe)&&(n&=~Oe),n}function Pf(r,e){return Wo(r,e)}function Of(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=Rf(r,e.min,n);return a=_f(a,e.max,t),a}const If={[Br.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Wo},[Br.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Pf}};function Hf(r,e){const n=If[e];let t=qf(r);return t=n.applyExclusiveSuppression(t,r),Of(t,r)}function en(r){const e={data:{},visible:!1},n=Cf(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=Hf(r,n),o=i in oi?{...oi[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=li(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=li(o.upper,r.max,a)),e.visible=Mf(e.data.lower,e.data.upper),e}const dr="0",dt="1";function Gn(r){return r!=null}function Tr(r){return r!==void 0&&r!==!1}function Er(r){return r!==void 0&&r!==!1}function xr(r){return!!r&&k(r)}function kr(r){return!!r&&x(r)}function Bn(r){return!!r&&O(r)}function di(r){if(r&&(k(r)||O(r)))return r.afterValue}function ui(r){if(!r||!(x(r)||O(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function fi(r){if(!r||!(x(r)||O(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function Na(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,l=e.exclusiveMinimum,s=e.maximum,u=e.exclusiveMaximum,c=Gn(n),f=Gn(a),y=Gn(o),p=Gn(s),g=Gn(l),S=Gn(u),h=xr(o),v=kr(o),w=Bn(o),T=xr(s),b=kr(s),E=Bn(s),C=en({min:c&&(!y||h||w)?n:void 0,max:f&&(!p||T||E)?a:void 0,exclusiveMin:Tr(t)&&(!g||xr(l)||Bn(l)&&Er(di(l)))?t:void 0,exclusiveMax:Tr(i)&&(!S||xr(u)||Bn(u)&&Er(di(u)))?i:void 0}).data;if(!(y||g||p||S))return{before:{...C},after:C};let M,q,J,U;if(c&&!y&&(M=n),(v||w)&&(M=ui(o)),f&&!p&&(q=a),(b||E)&&(q=ui(s)),Tr(t)&&!g&&(J=t),Bn(l)||kr(l)){const F=fi(l);Er(F)&&(J=F)}if(Tr(i)&&!S&&(U=i),Bn(u)||kr(u)){const F=fi(u);Er(F)&&(U=F)}return{before:en({min:M,max:q,exclusiveMin:J,exclusiveMax:U}).data,after:C}}function Lf(r,e){if(!e)return;const n=r==="lower"?dr:dt;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function ci(...r){for(const e of r)if(e)return e.type}function mi(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:I.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:I.remove,beforeValue:e}:{type:r,action:I.replace,beforeValue:e,afterValue:n}}function $o(r,e){const{before:n,after:t}=Na(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return I.add;if(a&&!i)return I.remove}function zo(r,e){const{before:n,after:t}=Na(r,e),a=ci(e.minimum,e.exclusiveMinimum),i=ci(e.maximum,e.exclusiveMaximum),o={},l=mi(a,n.lower,t.lower);l&&(o[dr]=l);const s=mi(i,n.upper,t.upper);return s&&(o[dt]=s),o}function jf(r,e){const n=zo(r,e);return[n[dr],n[dt]].filter(t=>t!==void 0)}function Jf(r,e){if($o(r,e)!==void 0)return!1;const n=jf(r,e);if(n.length!==1)return!1;const t=n[0];return k(t)||x(t)}function Ff(r,e){return Jf(r,e)}function yi(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:l}of a){if(!o)continue;const s=o!==l?Lf(i,e):void 0;t.push({text:o,valueDiffKey:s})}return t}function Kf(r,e,n,t,a){const{before:i,after:o}=Na(r,e),l=n===z;if(t){const c=t.data;if(k(c)||x(c))return yi(l?i:o,a,l?o:i)}return yi(l?i:o,a,l?o:i)}function Gf(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(k(e)?e.afterValue:x(e)?e.beforeValue:O(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function Bf(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Gf(n,t):!0:!1})}function pi(r){return typeof r=="number"||typeof r=="boolean"}function Uf(r){if(!_(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),pi(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),pi(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Ut(r){const e=Uf(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function tn(r){return typeof r=="string"?r:JSON.stringify(r)}function Xo(r,e,n){switch(r){case ye.VALUE_LENGTH:case ye.PROPERTIES_COUNT:case ye.ITEMS_COUNT:{if(e.startsWith("min"))return en({min:Number(n)}).data.lower??tn(n);if(e.startsWith("max"))return en({max:Number(n)}).data.upper??tn(n);break}case ye.VALUE_RANGE:{if(e==="minimum")return en({min:Number(n)}).data.lower??tn(n);if(e==="maximum")return en({max:Number(n)}).data.upper??tn(n);if(e==="exclusiveMinimum")return en({exclusiveMin:typeof n=="number"?n:!0}).data.lower??tn(n);if(e==="exclusiveMaximum")return en({exclusiveMax:typeof n=="number"?n:!0}).data.upper??tn(n);break}case ye.VALUE_PATTERN:case ye.VALUE_MULTIPLE_OF:case ye.UNIQUE_ITEMS:return tn(n);default:return tn(n)}return tn(n)}function Yf(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Wf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function Qo(r,e){return e.length<=1||Yf(r)?0:Wf(r)?1:0}class $f extends X{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}});P(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!_(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const h=o.diffs[R];if(h&&(k(h.data)||x(h.data)))return u[R]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u;const v=o.descendantDiffs[a];if(v)return u[R]=v,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u}else if(i){const h=i.diffs[R];if(h&&(k(h.data)||x(h.data)))return u[R]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u;const v=i.descendantDiffs[a];if(v)return u[R]=v,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u}if(!X.isDiffsRecord(s))return;const c=s[R];c&&this.aggregateTextDiff(c,R,u);const f=s.title,y=s.format,p=s.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:f},u);const g=s.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const h of $n){const v=s[h];X.isDiff(v)&&this.aggregateMetaFlagDiff(v,h,u)}return _(n)&&this.aggregateValidationRowDiffs(n,s,u),this.aggregateExtensionsDiffs(s,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,a){const i=new Set;for(const l of Object.values(t.typeLabelFieldDiffs??{}))l!=null&&l.data&&i.add(l.data);const o=new Set;for(const l of Hd(n,a))i.has(l)||l!=null&&l.type&&o.add(l.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[R];if(i&&(k(i.data)||x(i.data))){const p=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));t.nestingIndicatorRowColorizingDiff=p,t.extensionsRowColorizingDiff=p;return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const p=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(p){const g=this.resolveTypePrimitivenessCrossing(o),S=g&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,g):this.asReplaceRowColorizingDiff(p);t.nestingIndicatorRowColorizingDiff={...S,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!_(n))return;const l=this.collectJsonSchemaChildKeys(n);if(l.length===0)return;const s=l.map(p=>a[p]);if(s.some(p=>!p))return;const[u,...c]=s;if(!k(u.data)&&!x(u.data))return;const f=u.data.action;c.every(p=>p.data.action===f&&(k(p.data)||x(p.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return k(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:x(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return wa(n)||of(n)}resolveTypePrimitivenessCrossing(n){var s;const t=(s=n.type)==null?void 0:s.data;if(!t||!O(t))return;const a=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(a),l=this.isChildlessTypeValue(i);if(o!==l)return{beforeIsPrimitive:o,afterIsPrimitive:l}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:a}=n;return O(a)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:I.remove,beforeValue:!0,beforeDeclarationPaths:a.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:I.add,afterValue:!0,afterDeclarationPaths:a.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");_(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");_(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const l=Reflect.get(n,"additionalProperties");l!=null&&t.push("additionalProperties");const s=Reflect.get(n,"additionalItems");return s!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of Bo){const o=n[i];X.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[R];if(t&&(k(t.data)||x(t.data))){n[vn]=t;return}for(const a of $n){const i=n[a];if(i){n[vn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[vn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return O(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:N.Green},removeBefore:{textHighlighterColor:N.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return k(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),x(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),(ln(n)||O(n))&&(t={...t,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={...a,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}}asReplaceRowColorizingDiff(n){const{data:t}=n;return O(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return k(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}:x(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),a=typeof n.beforeValue=="boolean",i=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:a?void 0:N.Yellow,borderShadowColor:a?N.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:i?void 0:N.Yellow,borderShadowColor:i?N.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:I.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:I.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[R];return!!t&&(k(t.data)||x(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of $n)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return O(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:I.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:I.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[R];if(!(!a||!(k(a.data)||x(a.data)))&&_(n))for(const[i,o]of Object.entries(Ft)){const l=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[l]||(t.validationRowColorizingDiffs[l]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateWholeNodeInheritedExtensionsDiffs(n,t){const a=t[R];if(!a||!(k(a.data)||x(a.data))||!_(n))return;const i=Reflect.get(n,"extensions");if(!_(i))return;const o=Object.keys(i).filter(Kr);if(o.length===0)return;const{data:l}=a,s=i,u={};if(k(l))for(const c of o)u[c]={type:l.type,scope:l.scope,description:l.description,action:I.add,afterValue:s[c],afterDeclarationPaths:l.afterDeclarationPaths??[]};else if(x(l))for(const c of o)u[c]={type:l.type,scope:l.scope,description:l.description,action:I.remove,beforeValue:s[c],beforeDeclarationPaths:l.beforeDeclarationPaths??[]};t.extensionsDiffs=u}aggregateExtensionsDiffs(n,t){const a={};for(const[i,o]of Object.entries(n))!Kr(i)||!X.isDiff(o)||(a[i]=o);Object.keys(a).length>0&&(t.extensionsDiffs=a)}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(Ft)){const l=o.filter(b=>t[b]);if(l.length===0)continue;const s=i,u=s===ye.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=s===ye.VALUE_RANGE?Bf(l,t):l,f=l.map(b=>t[b]).filter(b=>X.isDiff(b));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Ut(n),p=u?$o(y,u):void 0;if(u&&(p===I.add||p===I.remove)){const b=p===I.add?this.mergeDiffActionFragment(f,I.add,this.resolveWholeRowDisplayValues(s,l,f,I.add)):this.mergeDiffActionFragment(f,I.remove,this.resolveWholeRowDisplayValues(s,l,f,I.remove)),E=this.buildChangedPropertyMetaDataFromDiff(b);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(u&&Ff(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s);continue}const g=o.some(b=>!l.includes(b)&&Reflect.get(n,b)!==void 0),S=!g&&f.every(k),h=!g&&f.every(x);if(S){const b=this.resolveWholeRowDisplayValues(s,l,f,I.add),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,I.add,b));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(h){const b=this.resolveWholeRowDisplayValues(s,l,f,I.remove),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,I.remove,b));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s));continue}const v=c.map(b=>t[b]).filter(b=>X.isDiff(b)).map(b=>this.buildChangedPropertyMetaDataFromDiff(b)),w=ge.maxChangedPropertyMetaDataByDiffType(...v);if(!w)continue;const T=this.buildValidationRowValueDiffs(s,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[s]=T,a.validationRowColorizingDiffs[s]=this.asReplaceRowColorizingDiff(w),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,s)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=zo(Ut(n),t),l=[dr,dt];if(!l.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of l){const y=o[f];if(!y||c[f])continue;const p=f===dr?"lower":"upper",g=this.attachValueRangeChipDiffPaths(y,p,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const l=n.map(f=>t[f]).filter(f=>X.isDiff(f));if(l.length===0)return;const s=l.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=ge.maxChangedPropertyMetaDataByDiffType(...s);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],l=[];for(const s of i)s&&("beforeDeclarationPaths"in s&&s.beforeDeclarationPaths&&o.push(...s.beforeDeclarationPaths),"afterDeclarationPaths"in s&&s.afterDeclarationPaths&&l.push(...s.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...l.length>0?{afterDeclarationPaths:l}:{}}}buildValueRangeLabelChipDiffMetadata(n){return O(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=Nd[n],o={};for(const l of t){const s=a[l];if(!X.isDiff(s)||i[l]===void 0)continue;const c=this.buildListValueDiffMetadata(s);o[l]=ge.maxChangedPropertyMetaDataByDiffType(o[l],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((l,s)=>{const u=a[s],c=i===I.add?k(u)?u.afterValue:void 0:x(u)?u.beforeValue:void 0;c!==void 0&&o.push(Xo(n,l,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(s=>x(s)||O(s)?s.beforeDeclarationPaths:[]),l=n.flatMap(s=>k(s)||O(s)?s.afterDeclarationPaths:[]);return t===I.add?{type:i.type,scope:i.scope,description:i.description,action:I.add,afterValue:a,afterDeclarationPaths:l}:{type:i.type,scope:i.scope,description:i.description,action:I.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return O(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}}class zf extends $f{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!_(e))return o;const{diffsMetaKey:l}=n,s=Reflect.get(e,l),u=X.isDiffsRecord(s),c=this.resolveWholeListFieldDiff(e,"enum",l),f=this.resolveWholeListFieldDiff(e,"examples",l),y=this.resolveListFieldItemDiffs(e,"enum",l),p=this.resolveListFieldItemDiffs(e,"examples",l),g=this.resolveAllowedAdditionalPropertyNamesDiff(t,a,l),S=!!c||!!f||Object.keys(y).length>0||Object.keys(p).length>0||!!g;if(!o&&!u&&!S){const v=this.resolveRequiredMetaDiff(t,a,l);if(!v)return;const w={required:v};return this.aggregatePropertyTitleRowDiff(w),w}const h={...o??{}};if(u){const v=s.default;X.isDiff(v)&&(h.default=this.buildDefaultValueDiffMetadata(v))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(p).length>0&&(h.examplesValueDiffs=p),g!=null&&g.diff&&(h.allowedAdditionalPropertyNamesDiff=g.diff),Object.keys((g==null?void 0:g.valueDiffs)??{}).length>0&&(h.allowedAdditionalPropertyNamesValueDiffs=g.valueDiffs),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(g==null?void 0:g.mergedValues,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const v=this.resolveRequiredMetaDiff(t,a,l);v&&(h.required=v)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[R];if(n&&(k(n.data)||x(n.data))){e[vn]=n;return}for(const a of $n){const i=e[a];if(i){e[vn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[vn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!_(i)&&!_(a))return;const o=String(e),l=_(i)?Reflect.get(i,t):void 0,s=_(i)?Reflect.get(i,"required"):void 0,u=_(a)&&"required"in a?a.required:void 0,c=Array.isArray(s)?s:Array.isArray(u)?u:void 0;if(X.isDiffsRecord(l)){const y=l.required;if(X.isDiff(y)){const p=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(p)return p}if(X.isDiffsRecord(y)){const p=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(p)return p}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(k(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(x(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(O(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if(X.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!X.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if(X.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(X.isDiff(t)){if(k(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(x(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return O(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!X.isDiffsRecord(a))return;const i=a[n];if(X.isDiff(i)){if(k(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(x(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return X.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var f;if(e!==Q.ADDITIONAL_PROPERTIES||!n)return;const a=(f=n.meta())==null?void 0:f._fragment;if(!_(a))return;const i=Reflect.get(a,"propertyNames"),o=Reflect.get(a,t),l=X.isDiffsRecord(o)?o.propertyNames:void 0;if(X.isDiff(l)){const y=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(l);if(y)return y}if(!_(i))return;const s=Reflect.get(i,"enum");if(!Array.isArray(s)||s.length===0)return;const u=this.resolveWholeListFieldDiff(i,"enum",t),c=this.resolveListFieldItemDiffs(i,"enum",t);if(!(!u&&Object.keys(c).length===0))return{diff:u,valueDiffs:Object.keys(c).length>0?c:void 0,mergedValues:s}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(k(e)&&_(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(x(e)&&_(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i){if(!Array.isArray(e)||e.length===0)return;const o=n[R];if(o&&(k(o.data)||x(o.data))){n[i]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const l=n[t];if(l){n[i]=l;return}const s=n[a];if(!s||Object.keys(s).length===0)return;const u=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(s));u&&(n[i]=this.asReplaceRowColorizingDiff(u))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[R];if(i&&(k(i.data)||x(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const l=o.data;if(k(l)||x(l)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(l);return}O(l)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Yt{static instance(e){return this.kindPropertyInstance}}P(Yt,"kindPropertyInstance",new zf);const Xf="[JSON Schema][WithDiffs]";class Qf extends Fo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Xf}createTree(){return new bf}createNodeDataBuilder(){return new vf((n,t)=>this.pick(n,t))}prepareSource(){return new Sf(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!ce(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Yt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Yo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Go.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Yt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Ko.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Uo.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),la(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return jo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ce(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function Ct(r){return!!r&&Object.keys(r).length>0}function gi(r){return!!r&&r.size>0}function Zf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function hi(r,e){if(!(Ct(r.diffs)||Ct(r.descendantDiffs)||gi(r.diffsSummary)||gi(r.descendantDiffsSummary)||Ct(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=Zf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Wt(r,e,n){if(r.isCycle)return hi(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return hi(r,e)?!0:r.type===fe.COMPLEX?r.nestedNodes().some(t=>Wt(t,e,n)):r.childrenNodes().some(t=>Wt(t,e,n))}finally{n.visiting.delete(r.id)}}function Zo(r,e){return Wt(r,e,{visiting:new Set})}function ec(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),l=r.map((s,u)=>({kind:"node",node:s,sourceIndex:u}));return{memberships:o,visibleSequence:l}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const l=r[o].id,s=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:l,isBlockStart:u===o,blockSize:s});a.push({kind:"placeholder",unchangedBlockId:l,blockSize:s,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function nc(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return ec(r,a=>Zo(a,t),n)}function es(r){return r.kind===D.MESSAGE}function rc(r){return r.kind===D.MESSAGE_SECTION_SELECTOR}function ns(r){return r.kind===D.MESSAGE_CONTENT}function tc(r){return r.kind===D.MESSAGE_HEADERS&&r.key==="headers"}function ac(r){return r.kind===D.MESSAGE_PAYLOAD&&r.key==="payload"}function rs(r){return r.kind===D.MESSAGE_CHANNEL}function ic(r){return r.kind===D.MESSAGE_CHANNEL_PARAMETERS}function ts(r){return r.kind===D.MESSAGE_OPERATION}function Ta(r){return r.kind===D.EXTENSIONS}function ut(r){return r.kind===D.BINDINGS}function Vt(r){return r.kind===D.BINDING}function oc(r){return ns(r)||rs(r)||ts(r)}function sc(r){return r.kind===D.SERVERS}function lc(r){return r.kind===D.SERVER}function Fe(r,e,n){var a;if(!_(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?x(t)?t.beforeValue!==void 0:k(t)?t.afterValue!==void 0:O(t)?t.beforeValue!==void 0||t.afterValue!==void 0:ln(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const dc=r=>{if(!fr(r)||fo(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function uc(r){if(!fr(r)||fo(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,l)=>(jd(l)&&(o[l]=r[l]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const fc=[dc,uc],We=(r=ze.root)=>({"/allOf":{"/*":()=>We(ze.allOf)},"/oneOf":{"/*":()=>We(ze.oneOf)},"/anyOf":{"/*":()=>We(ze.anyOf)},"/properties":{"/*":()=>We(ze.property)},"/items":()=>({...We(ze.items),"/*":({key:e})=>Il(e)?We(ze.item):{}}),"/additionalProperties":()=>We(ze.additionalProperties),"/additionalItems":()=>We(ze.additionalItems),"/patternProperties":{"/*":()=>We(ze.patternProperty)},kind:r,transformers:fc});function cc(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((l,s)=>s(l,r,n,t),e);return o!==e&&za(o)&&za(e)&&Object.defineProperty(o,co,{value:e,enumerable:!1}),{value:o}}}function mc(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!Hl.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:l,nodeIdPrefix:s}=i,u=s+Ll(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:Ea(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=l?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:l,parent:l.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(l?l.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===jl.simple)return{done:!0};const p=i.treeLevel+1;if(y.value){const g=new Map(i.alreadyConvertedMappingStack);g.set(n,y.node);const S=n[co];S!==void 0&&g.set(S,y.node);let h;return Jd(y.node)?h={parent:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel}:h={parent:o,container:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:h}}else return{done:!0}}}const yc=2;function Ea(r,e){return[Kd(r),cc(e),mc(r)]}const pc=(r,e=yc)=>{const n=new Fd(r);if(!fr(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return wn(r,Ea(n,r),{state:t,rules:We()}),n},gc=2,hc=(r,e,n=gc)=>{const t=new Gd(r,e);if(!fr(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return wn(r,Ea(t,r),{state:a,rules:We()}),t};function Je(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function bc(r){return Je(r,Ld,D.BINDINGS)}function Rt(r){return Je(r,je,D.BINDING)}function Sc(r){return Je(r,je)}function vc(r){return Je(r,je,D.MESSAGE_CHANNEL)}function Dc(r){return Je(r,je)}function Ar(r){return Je(r,je,D.SERVER)}function wc(r){return Je(r,je)}function Nc(r){return Je(r,je,D.MESSAGE_HEADERS)}function Tc(r){return Je(r,je,D.MESSAGE_PAYLOAD)}function Ec(r){return Je(r,je,D.MESSAGE)}function xc(r){return Je(r,je,D.MESSAGE_OPERATION)}function kc(r){return Je(r,je,D.MESSAGE_SECTION_SELECTOR)}function Ac(r){return Je(r,je,[D.MESSAGE_CONTENT,D.MESSAGE_CHANNEL,D.MESSAGE_OPERATION])}const as=r=>{const e=ve(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),l=m.useMemo(()=>cr(i==null?void 0:i.causedAt),[i]);switch(e){case Ee:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Vn,{left:d.jsx(_t,{...r,layoutSide:z}),right:d.jsx(_t,{...r,layoutSide:te})})});default:return d.jsx(Hn,{content:d.jsx(_t,{...r,layoutSide:te})})}},Cc={send:"bg-sky-400",receive:"bg-green-500"},_t=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[le]:i}=r,o=m.useCallback(()=>{const s=a&&Vc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Cc[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(k(a.data)&&t===z&&(u=null),x(a.data)&&t===te&&(u=null)),!s)return d.jsxs(d.Fragment,{children:[u,d.jsx(Et,{value:n,variant:B.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:p}=s,g=t===z?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Et,{value:c,variant:B.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Et,{value:g,variant:B.h4,layoutSide:t,diff:p,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),l=m.useMemo(()=>{const s=new Set;if(a){const{styles:u}=a;t===z?s.add(ee.background(u.before.backgroundColor)):s.add(ee.background(u.after.backgroundColor))}return Array.from(s)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${mr} ${l.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Vc(r){const{data:e}=r;if(!O(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),l=i===-1?t:t.slice(0,i);if(o!==l)return!1;const s={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:s}}}as.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Rc=m.memo(r=>r.mergedSource===null?null:d.jsx(xn,{fallback:d.jsx(kn,{componentName:"Async API Operation Viewer"}),children:d.jsx(_c,{...r})})),_c=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=Cn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:l,diffTypes:s}=r,u=m.useMemo(()=>rn(a),[a]),c=m.useMemo(()=>new zu({source:e,referenceNamePropertyKey:o,diffsMetaKeys:l,operationKeys:n,logger:u}),[e,o,l,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!es(y)?null:d.jsx(at.Provider,{value:l,children:d.jsx(da.Provider,{value:s,children:d.jsx(No.Provider,{value:a,children:d.jsx(An.Provider,{value:t,children:d.jsx(On.Provider,{value:Ee,children:d.jsx(Le.Provider,{value:0,children:d.jsx($a,{node:y,noHeading:i})})})})})})})});Rc.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const xa=m.createContext(void 0);function Mc(){return m.useContext(xa)}const ft=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Bd(),i=Ke(),l=e.node.newDataLevel?i+1:i,s=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=T=>{if(T){e.select(T),f(T),n(T);const b=u.find(E=>E.id===T);a==null||a(b)}},p=ve(),g=m.useMemo(()=>{const T={};return u.forEach(b=>{const E=b.value().$changes??{},C=ua({node:b});C&&(T[b.id]={...C,...Object.keys(E).length?{$changes:E}:{}})}),T},[u]),S=Ke()+1,h=u.find(T=>(T==null?void 0:T.id)===c),v=Ud(h)?h==null?void 0:h.kind:"",w=mo(t??(s==null?void 0:s.$nodeChange));return d.jsx(Le.Provider,{value:l,children:d.jsx(Yd,{nodesTypeData:g,selectedNodeId:c,combiner:v,onSelect:y,layoutMode:p,level:S,$nodeChange:w,$nestedChanges:s==null?void 0:s.$nestedChanges,$nestedChangesSummary:p!==nn?e.$nestedChangesSummary:void 0})})};ft.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const ct=m.createContext(void 0);function is(){return m.useContext(ct)}const nr=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,l]=m.useState(0);m.useEffect(()=>{i(e),l(n)},[e,n]);const s=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(Td.Provider,{value:s,children:t})});nr.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function os(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class qc extends oa{constructor(){super()}}const mt={PROPERTY:"property"},ur=Object.values(mt),ie={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Pc extends Zr{constructor(){super(...arguments);P(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const Ae=class Ae{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=Ae.isArrayItemKey(e);return Ae.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=Ae.getValueType(e),i=Ae.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:Ae.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===ie.BOOLEAN||e===ie.NULL}static isPrimitiveValue(e){return e!==ie.JSON_SCHEMA&&e!==ie.MULTI_SCHEMA&&e!==ie.OBJECT&&e!==ie.ARRAY}static getValueType(e){return typeof e=="string"?ie.STRING:typeof e=="number"?ie.NUMBER:typeof e=="boolean"?ie.BOOLEAN:typeof e=="object"?e===null?ie.NULL:Array.isArray(e)?ie.ARRAY:Ae.isJsonSchema(e)?ie.JSON_SCHEMA:Ae.isMultiSchema(e)?ie.MULTI_SCHEMA:ie.OBJECT:ie.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Lt in e&&typeof e.type=="string"&&Jl.some(a=>a===e.type)||It in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>Ae.isJsonSchema(a))||Ht in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>Ae.isJsonSchema(a))||Ot in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>Ae.isJsonSchema(a))||jr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Gi,Fl,Kl,no,Gl,Bl,Ul,Lt,Ki,jt,Ui,ro,io,oo,to,ao,lo,so,uo,zi,$i,Xi,eo,Zi,Hi,Li,Qi,Bi,Pi,Ii,Oi,Ot,It,Ht,Yl,Wi,Ji,Fi,Yi,ji,Wl,jr]);return n&&Object.keys(e).every(a=>t.has(a)||Ae.isExtensionPropertyInJsonSchema(a)||Ae.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&_(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!ra(e))return e;const t=ue(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let l;for(const s of o){const u=e[s],c=t[s];if(u===void 0||c===void 0||!O(c))continue;const{beforeValue:f,afterValue:y}=c,p=_(f),g=Array.isArray(f),S=_(y),h=Array.isArray(y);if(!(g&&S||p&&h))continue;l||(l={...e});const w={...f,...y};l[s]=w}return l??e}};P(Ae,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:ie.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let K=Ae;const Oc=(r,e,n,t,a)=>K.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function ss(){return{"/*":()=>ss(),transformers:[Oc],kind:mt.PROPERTY}}function Ic(r){return Xr(r)}const Hc=new Set(ur);class Lc extends Qr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=K.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return Hc.has(e)}}class jc extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!k(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class ls{static instance(e){if(!this.instances.has(null)){const n=new jc;this.instances.set(null,n)}return this.instances.get(null)}}P(ls,"instances",new Map);class Jc extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!_(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=ue(n[a]);if(!i)return;const o={};for(const[l,s]of Object.entries(i)){if(!s)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,p=He;if(k(s)){const{afterValue:g}=s,S=K.getValueType(g),h=K.isPrimitiveValue(S);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},f={...f,increaseLevel:!1},c={isContentVisible:h,isHeaderVisible:!0,backgroundColor:N.Green},y={...y,increaseLevel:!0},p=Sn}if(x(s)){const{beforeValue:g}=s,S=K.getValueType(g);u={isContentVisible:K.isPrimitiveValue(S),isHeaderVisible:!0,backgroundColor:N.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={...y,increaseLevel:!1},p=Sn}if(O(s)){const{beforeValue:g,afterValue:S}=s,h=K.getValueType(g),v=K.getValueType(S),w=K.isPrimitiveValue(h),T=K.isPrimitiveValue(v),b=K.isPredefinedValueSet(h),E=K.isPredefinedValueSet(v);u={isContentVisible:w,isHeaderVisible:!0,backgroundColor:N.Yellow},w&&(b?u.borderShadowColor=N.Yellow:u.textHighlighterColor=N.Yellow),c={isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow},T&&(E?c.borderShadowColor=N.Yellow:c.textHighlighterColor=N.Yellow),p=$l}o[l]={data:s,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:p}}return o}}class ds{static instance(e){if(!this.instances.has(null)){const n=new Jc;this.instances.set(null,n)}return this.instances.get(null)}}P(ds,"instances",new Map);class Fc extends ge{aggregate(e){const n=e[R];if(n){const o=n.data,l={type:o.type,causedAt:[]};return O(o)||x(o)?l.causedAt=o.beforeDeclarationPaths[0]:k(o)&&(l.causedAt=o.afterDeclarationPaths[0]),{[H.TitleRow]:l}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return O(a)||x(a)?i.causedAt=a.beforeDeclarationPaths[0]:k(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[H.TitleRow]:i}}}class us{static instance(e){return this.instances.has(null)||this.instances.set(null,new Fc),this.instances.get(null)}}P(us,"instances",new Map);class Kc extends sa{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!x(n)&&!O(n)&&!ln(n))return!1;return!0}}class Gc{static instance(e){return new Kc}}class Bc extends X{isComplexValue(e){return _(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const l=a.diffs[R];if(l){const{data:s}=l;if(k(s)){const{afterValue:u}=s,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),S={data:{...s,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:Sn,inherited:!0};return o[R]=S,o}return o[R]=l,o}if(x(s)){const{beforeValue:u}=s,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),S={data:{...s,beforeValue:y},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:Sn,inherited:!0};return o[R]=S,o}return o[R]=l,o}if(O(s)){const{beforeValue:u,afterValue:c}=s,f=K.getValueType(u),y=K.getValueType(c),p=K.isPrimitiveValue(f),g=K.isPrimitiveValue(y);if(p&&g)return o[R]=l,o;if(!p&&this.isComplexValue(u)&&g){const S=u[t],h=K.getValueType(S),v=K.isPrimitiveValue(h),w=K.isPredefinedValueSet(h),T={data:{...s,beforeValue:S,afterValue:null},styles:{before:{isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:Sn,inherited:!0};return v&&(T.styles.before.textHighlighterColor=N.Yellow),w&&(T.styles.before.borderShadowColor=N.Yellow),o[R]=T,o}if(!g&&this.isComplexValue(c)&&p){const S=c[t],h=K.getValueType(S),v=K.isPrimitiveValue(h),w=K.isPredefinedValueSet(h),T={data:{...s,beforeValue:null,afterValue:S},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:Sn,inherited:!0};return v&&(T.styles.after.textHighlighterColor=N.Yellow),w&&(T.styles.after.borderShadowColor=N.Yellow),o[R]=T,o}if(!p&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const S=u[t],h=c[t],v=K.getValueType(S),w=K.getValueType(h),T=K.isPrimitiveValue(v),b=K.isPrimitiveValue(w),E=K.isPredefinedValueSet(v),C=K.isPredefinedValueSet(w),A={data:{...s,beforeValue:S,afterValue:h},styles:{before:{isContentVisible:S!==void 0&&T,isHeaderVisible:S!==void 0,backgroundColor:S===void 0?N.Gray:N.Yellow,textHighlighterColor:S!==void 0?N.Yellow:void 0},after:{isContentVisible:h!==void 0&&b,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?N.Gray:N.Yellow,textHighlighterColor:h!==void 0?N.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:Sn,inherited:!0};return T&&(A.styles.before.textHighlighterColor=N.Yellow),b&&(A.styles.after.textHighlighterColor=N.Yellow),E&&(A.styles.before.borderShadowColor=N.Yellow),C&&(A.styles.after.borderShadowColor=N.Yellow),o[R]=A,o}}}else{const s=a.descendantDiffs[t];if(s)return o[R]=s,o}}}}class fs{static instance(e){return this.instances.has(null)||this.instances.set(null,new Bc),this.instances.get(null)}}P(fs,"instances",new Map);class Uc extends Pc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"diffsMetaKeys");P(this,"logger");P(this,"nodeDataBuilder");P(this,"CHANGE_SEVERITIES",{[zl]:6,[Xl]:5,[Ql]:4,[Zl]:3,[ed]:2,[nd]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new qc,this.nodeDataBuilder=new Lc}build(){if(!_(this.source))return this.tree;$r(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new et,diffMetaKeys:this.diffsMetaKeys},t=ss(),a=Ic({source:this.source,tree:this.tree,supportedNodeKinds:ur,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===fe.SIMPLE,isComplexNode:i=>i.type===fe.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!_(o)&&!Array.isArray(o))return!0;const l=i.value();return l?this.supportJsonSchema&&(l.before.valueType===ie.JSON_SCHEMA||l.after.valueType===ie.JSON_SCHEMA||l.before.valueType===ie.MULTI_SCHEMA||l.after.valueType===ie.MULTI_SCHEMA):!1}});return wn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return _(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l=null,newDataLevel:s}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:fe.SIMPLE,parent:l&&this.isJsoSimpleTreeNodeWithDiffs(l)?l:null,container:null,value:u,meta:c,newDataLevel:s},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const g=y.diffs[R];if(g){const{data:S}=g;if(k(S)&&u&&(u.before=K.DEFAULT_BASE_JSO_NODE_VALUE),x(S)&&u&&(u.after=K.DEFAULT_BASE_JSO_NODE_VALUE),O(S)){const{beforeValue:h}=S,v=K.transformRawJsoPropertyToBaseJsoNodeValue(t,h);u&&(u.before=v)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return fs.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return Gc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return ds.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return ls.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return us.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),la(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[R];if(!t||!O(t.data))return!1;const a=K.getValueType(t.data.beforeValue),i=K.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),l=this.isJsoComplexValueType(i);return o!==l}isJsoComplexValueType(n){return n===ie.OBJECT||n===ie.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[R]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===fe.SIMPLE||n.type===fe.COMPLEX))}isJsoTreeNodeKind(n){return ur.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===fe.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===fe.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Ze={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function cs(r,e){if(e)return{type:"object",properties:{[r]:e}}}function $t(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Yc(r,e){if(e&&!(e.valueType!==Ze.JSON_SCHEMA&&e.valueType!==Ze.MULTI_SCHEMA))return _(e.value)?cs(r,e.value):void 0}function Wc(r,e,n,t){if(e&&!(e.before.valueType!==Ze.JSON_SCHEMA&&e.before.valueType!==Ze.MULTI_SCHEMA&&e.after.valueType!==Ze.JSON_SCHEMA&&e.after.valueType!==Ze.MULTI_SCHEMA)){if((e.before.valueType===Ze.JSON_SCHEMA||e.before.valueType===Ze.MULTI_SCHEMA)&&_(e.before.value))return $t(r,e.before.value,n,t);if((e.after.valueType===Ze.JSON_SCHEMA||e.after.valueType===Ze.MULTI_SCHEMA)&&_(e.after.value))return $t(r,e.after.value,n,t)}}const ka=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});ka.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function ms(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function $c(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=ms({appearance:e});return m.useMemo(()=>[a,e==="text"?ee.highlighter(n):"",e==="block"?ee.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const Ir=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=$c({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(ka,{isVisible:e,value:n,className:o})});Ir.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Aa=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[le]:t}=r,a=Ge(),i=Jn(),{beforeLevel:o,afterLevel:l}=nt(),[s,u]=m.useState(!0),c=m.useCallback(()=>{u(M=>!M)},[]),f=e.value(),y=e.diffs,p=e.descendantDiffsSummary,g=m.useMemo(()=>y[R],[y]),S=m.useCallback(M=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Ir,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!s&&d.jsx(fa,{values:Array.from(p)})]});const{styles:q}=g;return M===z?d.jsx(Ir,{isVisible:q.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:q.before.textHighlighterColor,borderShadowColor:q.before.borderShadowColor}):M===te?d.jsx(Ir,{isVisible:q.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:q.after.textHighlighterColor,borderShadowColor:q.after.borderShadowColor}):d.jsx(d.Fragment,{})},[s,p,f,g]),h=m.useMemo(()=>{const M=dn(e);return se(M,{resolveDiff:()=>g})},[e,g]),v=e.childrenNodes(),w=m.useMemo(()=>{const M=!!f,q=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==ie.UNKNOWN,J=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==ie.UNKNOWN;return M&&(q||J)},[f]),T=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),b=m.useMemo(()=>n?Wc(e.key,f,g,i):void 0,[i,e.key,f,g,n]);if(b)return i?d.jsx(gt,{schema:b,expandedDepth:2,displayMode:a,layoutMode:Ee,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const E=os(v),[C,A]=(()=>{let M=o+1,q=l+1;const[J]=v,U=J==null?void 0:J.diffs[R];return U&&E&&(M=U.flags.before.increaseLevel?o+1:o,q=U.flags.after.increaseLevel?l+1:l),[M,q]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(he,{"data-precededby":t,value:`${e.key}`,expandable:w,expanded:s,onClickExpander:w?c:void 0,variant:B.body2,enableHeaderValue:T,subheader:S,usage:rt.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...h}),s&&d.jsx(nr,{beforeLevel:C,afterLevel:A,children:v.map(M=>d.jsx(Aa,{"data-precededby":V.JSO_PROPERTY,node:M,supportJsonSchema:n},M.id))})]})};Aa.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const pr=m.memo(r=>r.mergedSource===null?null:d.jsx(xn,{fallback:d.jsx(kn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(zc,{...r})})),zc=m.memo(r=>{const{mergedSource:e,displayMode:n=Cn,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:l}=r,{[le]:s}=r,u=m.useMemo(()=>rn(i),[i]),c=m.useMemo(()=>new Uc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const p=y.childrenNodes();if(p.length===0)return null;const g=os(p),[S,h]=(()=>{let v=t,w=t;const[T]=p,b=T.diffs[R];return b&&g&&(v=b.flags.before.increaseLevel?t:t-1,w=b.flags.after.increaseLevel?t:t-1),[v,w]})();return d.jsx(at.Provider,{value:o,children:d.jsx(da.Provider,{value:l,children:d.jsx(An.Provider,{value:n,children:d.jsx(On.Provider,{value:Ee,children:d.jsx(nr,{beforeLevel:S,afterLevel:h,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:p.map((v,w)=>d.jsx(Aa,{"data-precededby":w===0?s:V.JSO_PROPERTY,node:v,supportJsonSchema:a},v.id))})})})})})})});pr.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class Xc extends na{constructor(){super()}}function ys(){return{"/*":()=>ys(),kind:mt.PROPERTY}}function Qc(r){return Xr(r)}const Zc=new Set(ur);class em extends Qr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==mt.PROPERTY?null:K.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Zc.has(e)}}class nm extends Zr{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new vo);P(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new Xc,this.nodeDataBuilder=new em}build(){if(!_(this.source))return this.tree;const n={parent:null,container:null,ancestors:new et,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=ys();return this.crawlHooks=Qc({source:this.source,tree:this.tree,supportedNodeKinds:ur,createNodeFromRaw:(a,i,o,l,s)=>this.createNodeFromRaw(a,i,o,l,s),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!_(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===ie.JSON_SCHEMA||o.valueType===ie.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Ed}}),wn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:Do(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};wn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:fe.COMPLEX,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,{...o,parent:l,container:s}),f=this.createNodeMeta(t,o),y={type:fe.SIMPLE,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isJsoSimpleTreeNode(n){return n.type===fe.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const yt=r=>d.jsx(xn,{fallback:d.jsx(kn,{componentName:"JSON Schema Viewer"}),children:d.jsx(rm,{...r})}),rm=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=Cn,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:l=0}=r,s=m.useMemo(()=>pc(e),[e]),c=m.useMemo(()=>new Co(s,n),[n,s]).root;let f=null;return it(c)&&(f=d.jsx(pt,{state:c,overriddenKind:a})),ot(c)&&(f=d.jsx(ft,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(ct.Provider,{value:o,children:d.jsx(xa.Provider,{value:i,children:d.jsx(An.Provider,{value:t,children:d.jsx(Le.Provider,{value:l,children:f})})})})};yt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const ps=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=ms({appearance:t});return d.jsx(ka,{isVisible:e,value:n,className:a})});ps.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ca=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[le]:t}=r,a=Ge(),i=Ke(),[o,l]=m.useState(!0),s=m.useCallback(()=>{l(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(ps,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),p=m.useMemo(()=>n?Yc(e.key,u):void 0,[e.key,u,n]);return p?d.jsx(yt,{schema:p,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(he,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:s,variant:B.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:rt.JsoProperty}),o&&d.jsx(Le.Provider,{value:i+1,children:y.map(g=>d.jsx(Ca,{"data-precededby":V.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};Ca.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const gr=m.memo(r=>r.source===null?null:d.jsx(xn,{fallback:d.jsx(kn,{componentName:"JSO Viewer"}),children:d.jsx(tm,{...r})})),tm=m.memo(r=>{const{source:e,displayMode:n=Cn,layoutMode:t=nn,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[le]:l}=r,s=m.useMemo(()=>rn(o),[o]),u=m.useMemo(()=>new nm({source:e,supportJsonSchema:i,logger:s}),[e,i,s]),c=m.useMemo(()=>u.build(),[u]);s.debug("[JSO] Source:",e),s.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(An.Provider,{value:n,children:d.jsxs(On.Provider,{value:t,children:[" ",d.jsx(Le.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((p,g)=>d.jsx(Ca,{"data-precededby":g===0?l:V.JSO_PROPERTY,node:p,supportJsonSchema:i},p.id))})})]})})});gr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const bi=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=Ke(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const l=new Set;return n===z&&(k(e)&&(l.add(ee.background(N.Gray)),o=!1),x(e)&&l.add(ee.background(N.Red))),n===te&&(k(e)&&l.add(ee.background(N.Green)),x(e)&&(l.add(ee.background(N.Gray)),o=!1)),{diffStylesClasses:Array.from(l),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row w-full h-full ${a.join(" ")}`,children:[d.jsx(In,{level:t+1,lastInvisible:!0}),i&&d.jsx(Vo,{children:"Extensions"})]})}),am=[],gs=r=>{const{extensions:e,$nodeChange:n}=r,t=Ke(),a=Ge(),i=ve(),o=Jn(),l=i===Xa,s=i===Ee,u=m.useMemo(()=>{let g=im(n);return g||(g=sm(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(x(u)||O(u))&&(g=u.beforeDeclarationPaths[0]??[]),k(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(In,{level:t+1,lastInvisible:!0}),d.jsx(Vo,{children:"Extensions"})]});switch(i){case Xa:return null;case Ee:return d.jsx(Ln,{diffType:c,diffTypeCause:f,children:d.jsx(Vn,{left:d.jsx(bi,{diff:u,layoutSide:z}),right:d.jsx(bi,{diff:u,layoutSide:te})})});default:return g}},[i,t,u,f,c]),p=m.useMemo(()=>{if(l)return null;if(s&&o){const g=om(e,u,o);return d.jsx(pr,{mergedSource:g,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:am})}return d.jsx(gr,{source:e,initialLevel:t+1})},[l,s,o,e,t,u,a]);return p?d.jsxs("div",{className:"flex flex-col",children:[y,p]}):null};function im(r){if(!r)return;const{depth:e,...n}=r;return n}function om(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)Or(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function sm(r,e){var l;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=ue(oe(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const s of i)if(((l=a[s])==null?void 0:l.action)!==(o==null?void 0:o.action))return;return o}gs.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const lm=["type","nullable","title","format"],dm=["required","readOnly","writeOnly","deprecated"],hs=r=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:a,readOnly:i,writeOnly:o,deprecated:l,isExpandable:s,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:y=yo,level:p=0,$changes:g,$metaChanges:S,$nodeChange:h,$nodeChangesSummary:v}=r,w=!!h,T=rd(),b=Mc(),E=fr(b)&&(n!=null&&n.title)&&b[n.title]?b[n.title]:void 0,C=td(w?void 0:v),A=m.useCallback(de=>T.length===0||T.includes(de),[T]),{isDocumentLayoutMode:M,isInlineDiffsLayoutMode:q,isSideBySideDiffsLayoutMode:J}=po(y),U=!!g&&lm.some(de=>Wn(g[de]))||!!S&&dm.some(de=>Wn(S[de])),{nodeAdded:L,nodeRemoved:F,nodeReplaced:G,nodeRenamed:ae}={nodeAdded:w&&h.action===I.add,nodeRemoved:w&&h.action===I.remove,nodeReplaced:w&&h.action===I.replace,nodeRenamed:w&&h.action===I.rename},xe=ad(id(g,S,ld),T),[j,$]=w?Jr(h):U?Jr(...xe):od,ne=sd(j,T),re=w?Qa[h==null?void 0:h.action]:U?Qa[I.replace]:"",Y=({layoutSide:de})=>{const Be=J?"w-1/2":"w-full",W=!M&&!w&&U&&!!(S!=null&&S.required),pe=$d(),Ue=pe&&pe===de,Ye=c&&!s,Fn=["flex flex-row",!Ye&&"gap-2",Be].filter(Boolean).join(" "),_e=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(Ro,{...t,showNullable:!0,layoutMode:y,layoutSide:de,$changes:g})}),dd.isNotEmpty(C)&&!M&&s&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(fa,{values:C,filter:A})}),a&&d.jsx(st,{text:ca,children:d.jsx(ma,{})}),d.jsx(ya,{requiredChanged:W,readOnly:i,writeOnly:o,deprecated:l,layoutSide:de,isNodeChanged:w,isContentChanged:U,$nodeChange:h,$metaChanges:S}),E&&d.jsx(ud,{label:E,colorSchema:fd(cd),layoutMode:y,layoutSide:de,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:Fn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(In,{level:p}),Ye?d.jsx("div",{className:"w-5"}):d.jsx(zd,{isRoot:c,isExpandable:s,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${s?"hover:cursor-pointer":""}`,onClick:s?f:void 0,children:d.jsx(Xd,{...n,showRequired:!0,layoutMode:y,layoutSide:de,requiredChange:S==null?void 0:S.required,titleChange:h})}),!Ue&&d.jsx(_e,{})]})]})};return M?d.jsx("div",{className:"flex flex-row",children:d.jsx(Y,{...r,layoutSide:te})}):q?!w&&!U?d.jsx("div",{className:"flex flex-row",children:d.jsx(Y,{...r,layoutSide:z})}):d.jsxs("div",{className:`flex flex-row relative ${ne?re:""}`,children:[j&&ne&&d.jsx(Za,{variant:j,message:$}),d.jsx(Y,{...r,layoutSide:z})]}):J?!w&&!U?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Y,{...r,layoutSide:z}),d.jsx(Y,{...r,layoutSide:te})]}):d.jsxs("div",{className:`flex flex-row relative ${ne?re:""}`,children:[j&&ne&&d.jsx(Za,{variant:j,message:$}),!w&&U||w&&(F||G||ae)?d.jsx(Y,{...r,layoutSide:z}):d.jsx(ei,{level:(h==null?void 0:h.depth)??p}),!w&&U||w&&(L||ae||G)?d.jsx(Y,{...r,layoutSide:te}):d.jsx(ei,{level:(h==null?void 0:h.depth)??p})]}):d.jsx(Wd,{layoutMode:y})};hs.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function um(r,e){var b,E,C;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,l=o==null?void 0:o.exclusiveMinimum,s=o==null?void 0:o.exclusiveMaximum,u=typeof l=="number"?l:l===!0&&me(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof s=="number"?s:s===!0&&me(o==null?void 0:o.maximum)?o.maximum:void 0,f=l===!0||o==null?void 0:o.minimum,y=s===!0||o==null?void 0:o.maximum,p=o==null?void 0:o.multipleOf,g=(C=(E=(b=r==null?void 0:r.parent)==null?void 0:b.value())==null?void 0:E.propertyNames)==null?void 0:C.enum,S=e==null?void 0:e.minProperties,h=e==null?void 0:e.maxProperties,v=e==null?void 0:e.uniqueItems,w=e==null?void 0:e.minItems,T=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:p},object:{allowedPropertyNames:g,minProperties:S,maxProperties:h},array:{uniqueItems:v,minItems:w,maxItems:T}}}const fm="?",Se="{value}",on="{exclusive_value}",hn=">",Cr=">=",bn="<",Vr="<=",De=1,we=2,Ne=4,Te=8,Rr={0:{lower:void 0,upper:void 0},[De]:{lower:`${Cr} ${Se}`,upper:void 0},[we]:{lower:`${hn} ${on}`,upper:void 0},[Ne]:{lower:void 0,upper:`${Vr} ${Se}`},[Te]:{lower:void 0,upper:`${bn} ${on}`},[we|De]:{lower:`${hn} ${Se}`,upper:void 0},[we|Ne]:{lower:`${hn} ${on}`,upper:`${Vr} ${Se}`},[we|Te]:{lower:`${hn} ${on}`,upper:`${bn} ${on}`},[Te|De]:{lower:`${Cr} ${Se}`,upper:`${bn} ${on}`},[Te|Ne]:{lower:void 0,upper:`${bn} ${Se}`},[Ne|De]:{lower:`${Cr} ${Se}`,upper:`${Vr} ${Se}`},[we|De|Ne]:{lower:`${hn} ${Se}`,upper:`${Vr} ${Se}`},[we|De|Te]:{lower:`${hn} ${Se}`,upper:`${bn} ${on}`},[we|Ne|Te]:{lower:`${hn} ${on}`,upper:`${bn} ${Se}`},[Te|De|Ne]:{lower:`${Cr} ${Se}`,upper:`${bn} ${Se}`},[De|we|Ne|Te]:{lower:`${hn} ${Se}`,upper:`${bn} ${Se}`}};function _r(r){return r!==void 0&&r!==!1}function Mr(r){return r!==void 0&&r!==!1}function Si(r,e,n){return(r&(De|we))!==(De|we)||n===void 0||typeof e!="number"?r:n>=e?r&~De:r&~we}function vi(r,e,n){return(r&(Ne|Te))!==(Ne|Te)||n===void 0||typeof e!="number"?r:n<=e?r&~Ne:r&~Te}function qr(r,e,n){return r.replace(Se,`${e}`).replace(on,me(n)?`${n}`:fm)}function cm(r,e,n){var Ue,Ye;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,l=r.exclusiveMaximum,s=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=Jr(s,u),[p]=Jr(c,f),g=me(a),S=me(o),h=me(s),v=me(c),w=me(u),T=me(f),b=Sr(s),E=Kn(s),C=mn(s),A=Sr(c),M=Kn(c),q=mn(c),J=typeof i=="number"?i:void 0,U=typeof l=="number"?l:void 0;let L=0,F=0;g&&(!h||b||C)&&(F|=De),_r(i)&&(!w||Sr(u)||mn(u)&&Mr(u==null?void 0:u.afterValue))&&(F|=we),S&&(!v||A||q)&&(F|=Ne),_r(l)&&(!T||Sr(f)||mn(f)&&Mr(f==null?void 0:f.afterValue))&&(F|=Te),typeof i!="number"&&!(F&De)&&(F&=~we),typeof l!="number"&&!(F&Ne)&&(F&=~Te),F=Si(F,a,J),F=vi(F,o,U);const G=F in Rr?{...Rr[F]}:void 0;if(G!=null&&G.lower&&(G.lower=qr(G.lower,a,J)),G!=null&&G.upper&&(G.upper=qr(G.upper,o,U)),t.data.lower=G==null?void 0:G.lower,t.data.upper=G==null?void 0:G.upper,!h&&!w&&!v&&!T)return t.visible=Di(t.data.lower,t.data.upper),t;let ae,xe,j,$;g&&!h&&(ae=a,L|=De),(E||C)&&(ae=s.beforeValue,L|=De),S&&!v&&(xe=o,L|=Ne),(M||q)&&(xe=c.beforeValue,L|=Ne),_r(i)&&!w&&(L|=we,j=J),(mn(u)||Kn(u))&&Mr(u==null?void 0:u.beforeValue)&&(L|=we,typeof u.beforeValue=="number"&&(j=u.beforeValue)),_r(l)&&!T&&(L|=Te,$=U),(mn(f)||Kn(f))&&Mr(f==null?void 0:f.beforeValue)&&(L|=Te,typeof f.beforeValue=="number"&&($=f.beforeValue)),(!w&&typeof i!="number"||(mn(u)||Kn(u))&&typeof u.beforeValue!="number")&&!(L&De)&&(L&=~we),(!T&&typeof l!="number"||(mn(f)||Kn(f))&&typeof f.beforeValue!="number")&&!(L&Ne)&&(L&=~Te),L=Si(L,ae,j),L=vi(L,xe,$);const Y=L in Rr?{...Rr[L]}:void 0;Y!=null&&Y.lower&&(Y.lower=qr(Y.lower,ae,j)),Y!=null&&Y.upper&&(Y.upper=qr(Y.upper,xe,$)),(Ue=t.data).lower??(Ue.lower=Y==null?void 0:Y.lower),(Ye=t.data).upper??(Ye.upper=Y==null?void 0:Y.upper),t.visible=Di(t.data.lower,t.data.upper);const de=wi(y,Y==null?void 0:Y.lower,G==null?void 0:G.lower),Be=wi(p,Y==null?void 0:Y.upper,G==null?void 0:G.upper),W=Ni(s,u),pe=Ni(c,f);return de&&(Ti(de,W),t.changes.lower=de),Be&&(Ti(Be,pe),t.changes.upper=Be),t.changesKeys=qn(t.data,n),t}function Di(r,e){return!!r||!!e}function wi(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:I.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:I.remove,beforeValue:e}:{type:r,action:I.replace,beforeValue:e,afterValue:n}}function Ni(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(go(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),ho(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Ti(r,e){if(r)return go(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),ho(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const _n={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},bs=r=>{var pe,Ue,Ye,Fn,_e,br;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,l=n.value,s=l,u=(pe=n.parent)==null?void 0:pe.value,c=(Ue=n.parent)==null?void 0:Ue.value,f=Ke(),y=ve(),p=Qd(a),g=Zd(a),S=eu(l),h=nu(l),v=_o(l),w=Kt(l)||Kt(u),{any:T,string:b,number:E,object:C,array:A}=um(a,l),M={minimum:l==null?void 0:l.minimum,exclusiveMinimum:l==null?void 0:l.exclusiveMinimum,maximum:l==null?void 0:l.maximum,exclusiveMaximum:l==null?void 0:l.exclusiveMaximum},q=(Ye=s==null?void 0:s.$changes)==null?void 0:Ye.minimum,J=(Fn=s==null?void 0:s.$changes)==null?void 0:Fn.exclusiveMinimum,U=(_e=s==null?void 0:s.$changes)==null?void 0:_e.maximum,L=(br=s==null?void 0:s.$changes)==null?void 0:br.exclusiveMaximum,F={minimum:Wn(q)?q:void 0,exclusiveMinimum:Wn(J)?J:void 0,maximum:Wn(U)?U:void 0,exclusiveMaximum:Wn(L)?L:void 0},{data:G,changes:ae,changesKeys:xe,visible:j}=cm(M,F,_n.valueRange),$=qn(b,_n.valueLength),ne=qn(b,_n.valuePattern),re=qn(E,_n.multipleOf),Y=qn(C,_n.propertiesCount),de=qn(A,_n.uniqueItems),Be=qn(A,_n.itemsCount),W=mo(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(T==null?void 0:T.allowedValues)&&d.jsx(ni,{shift:e,$changesKey:"enum",title:ru,items:T.allowedValues,layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),S&&d.jsxs(d.Fragment,{children:[(me(b==null?void 0:b.minLength)||me(b==null?void 0:b.maxLength))&&d.jsx(yn,{shift:e,$changesKeys:$,title:pa,items:{minLength:b==null?void 0:b.minLength,maxLength:b==null?void 0:b.maxLength},layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes}),me(b==null?void 0:b.pattern)&&d.jsx(yn,{shift:e,$changesKeys:ne,title:ga,items:{pattern:b==null?void 0:b.pattern},layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes})]}),h&&d.jsxs(d.Fragment,{children:[j&&d.jsx(yn,{shift:e,$changesKeys:xe,title:ha,items:G,layoutMode:y,level:f,$nodeChange:W,$changes:ae}),me(E==null?void 0:E.multipleOf)&&d.jsx(yn,{shift:e,$changesKeys:re,title:ba,items:{multipleOf:E==null?void 0:E.multipleOf},layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes})]}),w&&d.jsxs(d.Fragment,{children:[g&&d.jsx(yn,{shift:e,$changesKeys:[],title:tu,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:W}),p&&(C==null?void 0:C.allowedPropertyNames)&&d.jsx(ni,{shift:e,$changesKey:"propertyNames",title:Mo,items:C.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:W,$changes:c==null?void 0:c.$changes}),(me(C==null?void 0:C.minProperties)||me(C==null?void 0:C.maxProperties))&&d.jsx(yn,{shift:e,$changesKeys:Y,title:Sa,items:{minProperties:C==null?void 0:C.minProperties,maxProperties:C==null?void 0:C.maxProperties},layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes})]}),v&&d.jsxs(d.Fragment,{children:[me(A==null?void 0:A.uniqueItems)&&d.jsx(yn,{shift:e,$changesKeys:de,title:va,items:{uniqueItems:`${A.uniqueItems}`},layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),(me(A==null?void 0:A.minItems)||me(A==null?void 0:A.maxItems))&&d.jsx(yn,{shift:e,$changesKeys:Be,title:Da,items:{minItems:A==null?void 0:A.minItems,maxItems:A==null?void 0:A.maxItems},layoutMode:y,level:f,$nodeChange:W,$changes:s==null?void 0:s.$changes})]})]})};bs.__docgenInfo={description:"",methods:[],displayName:"Validations"};const Ss=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,l=Ke(),s=e.meta,u=s,c=e.value,f=c,y=au(),p=ve(),g=qo(e),[S,h]=m.useState(!1),[v,w]=m.useState(0);m.useEffect(()=>{const q=e.children.filter(it).length===0;(!iu(o)||e.expanded&&q)&&!o.isCycle?h(!0):h(e.expanded),w(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const T=!ou(o),b=!su(o),E=Po(o),C=E,A=is(),M=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(hs,{nodeId:o.id,nodeTitleData:lu({node:o,nodeValue:c,nodeMeta:s,customizationOptions:A}),nodeTypeData:ua({node:o,nodeValue:c,customizationOptions:A}),isCircularRef:o.isCycle,readOnly:s==null?void 0:s.readOnly,writeOnly:s==null?void 0:s.writeOnly,deprecated:s==null?void 0:s.deprecated,isExpandable:g,expanded:e.expanded,sorted:v,isRoot:E,onToggleExpander:t,onToggleSort:a,layoutMode:p,level:l,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&S&&T&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:b&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(du,{shift:C,state:e,$nodeChange:i}),d.jsx(bs,{shift:C,state:e,$nodeChange:i}),M&&d.jsx(gs,{extensions:M,$nodeChange:i})]})})]})};Ss.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const vs=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=ve();return d.jsx(d.Fragment,{children:n.map((l,s)=>it(l)?d.jsxs("div",{children:[!e&&i&&l.first&&d.jsx(uu,{shift:!1,NodeType:Ro,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(pt,{state:l,$nodeChange:a},`prop-${s}`)]},`prop-${s}`):ot(l)?d.jsx(ft,{state:l,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${s}`):null)})};vs.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const pt=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,l=o.filter(ae=>!ot(ae)),s=i,u=e.meta,c=Po(a),f=Kt(i),y=_o(i),p=fu(i),g=Ke(),S=e.node.newDataLevel,h=!c&&S?g+1:g,v=qo(e),[w,T]=m.useState(!1),[,b]=m.useState(0);m.useEffect(()=>{T(e.expanded),b(e.sorted)},[e.expanded,e.sorted]);const[,E]=m.useState(),C=ae=>{ae&&(e.setSelected(ae),E(e.selected))},[A,M]=m.useState(void 0),q=ae=>{if(ae){const xe=pu(ae);M(xe)}},J=t??(u==null?void 0:u.$nodeChange),U=md(l),L=n==="parameters"&&c&&(f||y)&&!p,F=ua({node:a,nodeValue:i});F==null||delete F.combiner;const G=F?{nodeTypeData:F,nodeDepth:h+1,$nodeChange:J??U,$changes:s==null?void 0:s.$changes}:void 0;return d.jsx(Le.Provider,{value:h,children:d.jsx(cu,{value:A,setValue:q,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(Ss,{state:e,disableNestingHeader:L,onToggleExpander:ae=>mu(e,T,ae),onToggleSort:()=>yu(e,b),$nodeChange:J}),v&&w&&d.jsx(vs,{disableNestingHeader:L,items:o,onGlobalSelectNestedNode:C,$nodeChange:J,nestingIndicatorTitleData:G})]})})})};pt.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const gt=r=>d.jsx(xn,{fallback:d.jsx(kn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(mm,{...r})}),mm=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=Cn,layoutMode:a=yo,filters:i=[],overriddenKind:o,metaKeys:l,topLevelPropsMediaTypes:s}=r;$r(e,l.diffsMetaKey,l.aggregatedDiffsMetaKey);const u=m.useMemo(()=>hc(e,l),[l,e]),c=m.useMemo(()=>new Co(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return it(f)&&(y=d.jsx(pt,{state:f,overriddenKind:o})),ot(f)&&(y=d.jsx(ft,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(xa.Provider,{value:s,children:d.jsx(yd.Provider,{value:i,children:d.jsx(An.Provider,{value:t,children:d.jsx(On.Provider,{value:a,children:d.jsx(at.Provider,{value:l,children:d.jsx(Le.Provider,{value:0,children:y})})})})})})};gt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const ym=" or null";function Dn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(er(r))return"";const n=r,t=(n==null?void 0:n.type)??zn,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?ym:"";let l=String(t);return a&&(l+=`(${a})`),i&&(l+=`<${i}>`),l+=o,l}function Ei(r){return r!=null}function Ds(r){const e=Tn(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(Ve.MIN_LENGTH),t.maxLength!==void 0&&n.push(Ve.MAX_LENGTH),t.pattern!==void 0&&n.push(Ve.PATTERN);const a=e;a.minimum!==void 0&&n.push(Ve.MINIMUM),a.maximum!==void 0&&n.push(Ve.MAXIMUM),Ei(a.exclusiveMinimum)&&n.push(Ve.EXCLUSIVE_MINIMUM),Ei(a.exclusiveMaximum)&&n.push(Ve.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(Ve.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(Ve.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(Ve.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(Ve.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(Ve.MIN_ITEMS),o.maxItems!==void 0&&n.push(Ve.MAX_ITEMS),n}function pm(r){return r!=null}function gm(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const hm="x-deprecated-reason";function bm(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[hm];return typeof e=="string"&&e.length>0?e:void 0}class ws{resolveNodeVisibility(e,n){const t=e.value(),a=Tn(t),i=To(n),o=bm(a),l=i&&!!(a!=null&&a.description),s=i&&!!o,u=i&&pm(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&Ds(t).length>0,p=i&&gm(a),g=u||c||f||y||p;return{showDescription:l,showDeprecationReasonRow:s,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:p,showContentSection:l||s||g,showAnyAdditionalInfoRow:g}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:l}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!l,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isExamplesAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&Jo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const rr=new ws;function Va(r,e){return rr.resolveNodeVisibility(r,e)}function Ra(r,e){return rr.resolveListLastRowFlags(r,e)}function Sm(r,e){return rr.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function Ns(r){return rr.resolveIsExpandable(r)}function Ts(r,e){return rr.resolveInitiallyExpanded(r,e)}function Pn(r,e){return rr.resolveExpanderExpanded(r,e)}const Es=" or null";function xs(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function vm(r,e){const n=Tn(r.value()),t=(n==null?void 0:n.type)??zn,a=xs(r);return tt(t,a==null?void 0:a.type,e)??String(t)}function _a(r,e,n){if(e!=null&&e.brokenRef)return{kind:sn.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if(er(t))return{kind:sn.NO_DIFFS,text:""};const a=xs(r);if(!a)return{kind:sn.NO_DIFFS,text:Dn(t,e)};if(Dm(a)){const c=Object.values(a).find(Boolean);return c?{kind:sn.WHOLE_DIFFS,text:wm(t,a,n),diff:Em(c)}:{kind:sn.NO_DIFFS,text:Dn(t,e)}}const i=[],o=Nm(t,a.type,n);o&&i.push(o);const l=xi(ks(t),a.format,n,As);l&&i.push(l);const s=xi(t==null?void 0:t.title,a.title,n,Cs);s&&i.push(s);const u=Tm(t);return u&&i.push(u),i.length===0?{kind:sn.NO_DIFFS,text:Dn(t,e)}:{kind:sn.PARTIAL_DIFFS,segments:i}}function Dm(r){const e=Bo.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function wm(r,e,n){const t=[],a=tt((r==null?void 0:r.type)??zn,e.type,n)??(r==null?void 0:r.type)??zn;t.push(String(a));const i=zt(ks(r),e.format,n,As);i&&t.push(i);const o=zt(r==null?void 0:r.title,e.title,n,Cs);return o&&t.push(o),r!=null&&r.nullable&&t.push(Es.trim()),t.join(" ")}function Nm(r,e,n){const t=(r==null?void 0:r.type)??zn,a=tt(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function xi(r,e,n,t){const a=zt(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function zt(r,e,n,t){const a=tt(r,e,n);if(a===void 0)return!e&&ki(r)?t(r):void 0;if(ki(a))return t(a)}function Tm(r){if(!(er(r)||!(r!=null&&r.nullable)))return{text:Es.trim()}}function ks(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function ki(r){return!!r&&r.trim().length>0}function As(r){return`(${r})`}function Cs(r){return`<${r}>`}function Em(r){const{data:e}=r;return O(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow}}}:k(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Green}}}:x(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function xm(r){return r.diffs}function km(r){return xm(r)[vn]??r.diffs[R]}function cn(r){return r.diffs}function Ur(r){return cn(r).nestingIndicatorRowColorizingDiff}function Am(r){return cn(r).extensionsRowColorizingDiff}function Cm(r){return cn(r).nodeChangesSummary}function Vm(r){return cn(r).extensionsDiffs}function Rm(r){var e;return(e=Rs(r))==null?void 0:e.required}function Vs(r){if(!(r!=null&&r.data))return;const e=r.data;return k(e)?{type:e.type,scope:e.scope,description:e.description,action:I.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:x(e)?{type:e.type,scope:e.scope,description:e.description,action:I.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:O(e)?{type:e.type,scope:e.scope,description:e.description,action:I.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function _m(r){return Vs(Rm(r))}function Rs(r){if(r.kind===Q.PROPERTY)return r.diffs}function _s(r){const e=cn(r),n=Rs(r),t={};for(const i of $n){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=Vs(a)),t}function $e(r){return r.diffs}function Ms(r){return $e(r).default}function qs(r){return $e(r).defaultRowColorizingDiff}function Ps(r){return $e(r).enumDiff}function Os(r){return $e(r).enumValueDiffs}function Is(r){return $e(r).enumRowColorizingDiff}function Hs(r){return $e(r).examplesDiff}function Ls(r){return $e(r).examplesValueDiffs}function js(r){return $e(r).examplesRowColorizingDiff}function Mm(r){return $e(r).allowedAdditionalPropertyNamesDiff}function qm(r){return $e(r).allowedAdditionalPropertyNamesValueDiffs}function Pm(r){return $e(r).allowedAdditionalPropertyNamesRowColorizingDiff}function Yr(r,e){var n;return(n=cn(r).validationRowDiffs)==null?void 0:n[e]}function Js(r,e){var n;return(n=cn(r).validationRowValueDiffs)==null?void 0:n[e]}function Ma(r,e){var n;return(n=cn(r).validationRowColorizingDiffs)==null?void 0:n[e]}function Om(r){return cn(r).valueRangeCrawlDiffs}function Ai(r,e){if(Yr(r,e)||Ma(r,e))return!0;const n=Js(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}const Fs="<empty string>";function Im(r){return JSON.stringify(r).slice(1,-1)}function Un(r){return typeof r=="string"?r===""?Fs:Im(r):typeof r=="object"&&r!==null?JSON.stringify(r,null,2):JSON.stringify(r)}function Hm(r){return r===Fs}function Lm(r,e,n){if(!e)return r===void 0?[]:[{text:Un(r)}];const t=n===z,{data:a}=e;if(k(a))return t?[]:[{text:Un(a.afterValue??r)}];if(x(a))return t?[{text:Un(a.beforeValue??r)}]:[];if(O(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Un(i)}]}return r===void 0?[]:[{text:Un(r)}]}function Re(r){return Un(r)}function ht(r,e,n){const t=n===z,{data:a}=e;return k(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Re(o)})):x(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Re(o)})):[]:O(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Re(o)})):r.map(i=>({text:Re(i)}))}function qa(r,e,n){const t=n===z,a=new Set,i=[];for(let l=0;l<r.length;l++){const s=String(l),u=e==null?void 0:e[s],c=Re(r[l]);if(!u){i.push({text:c});continue}if(a.has(s))continue;a.add(s);const{data:f}=u;if(k(f)){t||i.push({text:Re(f.afterValue??r[l]),valueDiffKey:s});continue}if(x(f)){t&&i.push({text:Re(f.beforeValue??r[l]),valueDiffKey:s});continue}O(f)&&i.push({text:Re(t?f.beforeValue??r[l]:f.afterValue??r[l]),valueDiffKey:s})}for(const[l,s]of Object.entries(e??{}))!s||a.has(l)||x(s.data)&&t&&(i.push({text:Re(s.data.beforeValue),valueDiffKey:l}),a.add(l));const o=l=>{for(let s=0;s<r.length;s++)if(Re(r[s])===l)return s;return r.length};return i.sort((l,s)=>o(l.text)-o(s.text))}function ir(r,e,n,t){return n===void 0?t:Xo(r,e,n)}function jm(r,e,n){if(e)return Object.keys(e).find(t=>Qo(t,r)===n)}function Jm(r,e,n,t){const a=t===z,i=new Set,o=[];for(let s=0;s<e.length;s++){const u=jm(e,n,s),c=u?n==null?void 0:n[u]:void 0,f=Re(e[s]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(k(y)){a||o.push({text:ir(r,u,y.afterValue??e[s],f),valueDiffKey:u});continue}if(x(y)){a&&o.push({text:ir(r,u,y.beforeValue??e[s],f),valueDiffKey:u});continue}O(y)&&o.push({text:a?ir(r,u,y.beforeValue??e[s],f):ir(r,u,y.afterValue??e[s],f),valueDiffKey:u})}for(const[s,u]of Object.entries(n??{}))!u||i.has(s)||x(u.data)&&a&&(o.push({text:ir(r,s,u.data.beforeValue,Re(u.data.beforeValue)),valueDiffKey:s}),i.add(s));const l=(s,u)=>{if(s)return Qo(s,e);for(let c=0;c<e.length;c++)if(Re(e[c])===u)return c;return e.length};return o.sort((s,u)=>l(s.valueDiffKey,s.text)-l(u.valueDiffKey,u.text))}function Fm(r,e,n,t){return e?ht(r,e,t):qa(r,n,t)}function Km(r,e,n,t){return e?ht(r,e,t):qa(r,n,t)}function Gm(r,e,n,t){return e?ht(r,e,t):qa(r,n,t)}function Bm(r,e,n,t,a,i){return r===ye.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?Kf(Ut(i.nodeValue),i.crawlDiffs,a,n,t):n?ht(e,n,a):Jm(r,e,t,a)}function Pr(r,e){return e?r==null?void 0:r[e]:void 0}const Um=new ws;function Ym(r){return r!=null}function Wm(r){return Object.keys(Ft).some(e=>!!Yr(r,e)||!!Ma(r,e))}class $m{resolveNodeVisibility(e,n){const t=e.value(),a=Tn(t),i=Um.resolveNodeVisibility(e,n),o=To(n),l=o&&(!!(a!=null&&a.description)||!!e.diffs.description),s=o&&(i.showEnumValuesRow||!!Ps(e)||!!Os(e)||!!Is(e)),u=o&&(Ym(a==null?void 0:a.default)||!!Ms(e)||!!qs(e)),c=o&&(i.showExamplesRow||!!Hs(e)||!!Ls(e)||!!js(e)),f=o&&(Ds(t).length>0||Wm(e)),y=u||c||s||f||i.showExtensionsRow,p=l||i.showDeprecationReasonRow||y;return{...i,showDescription:l,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:s,showValidationsSection:f,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Ra(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return Sm(e,n)}}const zm=new $m;function Pa(r,e){return zm.resolveNodeVisibility(r,e)}function Ks(r,e){return r.isCycle?!1:Ns(r)?e.hideUnchangedNodes?e.isRoot||r.kind===Q.ROOT?!0:Zo(r):e.level<e.expandedDepth:!0}function Gs(r,e,n){if(!n)return r;const t=e===z;return(n===I.add?t:!t)?Math.max(r-1,0):r}var En=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(En||{});const Xm={[En.JsonSchema]:aa};function Qm(r){return Xm[r]??mr}const lr=m.memo(r=>{const{title:e,layoutSide:n,usage:t=En.Default,lastInvisible:a=!1,diff:i,levelReductionAction:o}=r,{[le]:l}=r,s=ia(n),u=m.useMemo(()=>Gs(s,n,o),[s,n,o]),c=m.useMemo(()=>Qm(t),[t]),f=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:h}=i,v=[];return n===z&&v.push(ee.background(h.before.backgroundColor)),n===te&&v.push(ee.background(h.after.backgroundColor)),v},[i,n]),y=m.useMemo(()=>{const h=i==null?void 0:i.data;return h?k(h)?n===te:x(h)?n===z:!0:!0},[i,n]),p=t===En.JsonSchema,g=typeof e=="function"?e(n):e,S=y&&g!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":l,className:["nesting-indicator-title-row-content flex w-full h-full",p?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(In,{level:u,lastInvisible:a&&y})}),S&&d.jsx(gu,{title:g})]})});lr.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const bt=m.memo(r=>{const e=ve(),{diffsSeverities:n,diffsSeverityPlacement:t=H.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>cr(a==null?void 0:a.causedAt),[a]);switch(e){case Ee:return d.jsx(Ln,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Vn,{left:d.jsx(lr,{...r,layoutSide:z}),right:d.jsx(lr,{...r,layoutSide:te})})});case nn:return d.jsx(Hn,{content:d.jsx(lr,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});bt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Oa=m.createContext(null);function Bs(){const r=m.useContext(Oa);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const Zm=new Set([Q.ALL_OF,Q.ANY_OF,Q.ONE_OF]);class ey{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return Zm.has(e)}}const Us=new ey;function ny(r){return Us.resolveNodeVisibility(r)}function Ia(r){return Us.isCombinerKind(r)}function Ha(r){return r.kind===Q.ROOT}function ry(r){return r.kind===Q.ADDITIONAL_PROPERTIES}function Xn(r){if(r.type!==fe.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:Ha(r)?!0:e.every(n=>Ia(n.kind))}function ty(r){return Ia(r)}function ay(r){var e;return wa((e=Tn(r.value()))==null?void 0:e.type)}function iy(r,e){return wa(vm(r,e))}function Ys(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!ty(n)))return n}function Ws(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function $s(r,e){const n=[];let t=r;for(;t&&Xn(t);){const a=t.nestedNodes(),i=Ws(t,a,e);if(!i)break;const o=ny(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:Ys(t)}),Xn(i)){t=i;continue}break}return n}function zs(r,e){let n=r;for(;Xn(n);){const t=n.nestedNodes(),a=Ws(n,t,e);if(!a)break;n=a}return n}const oy=new Map;function Xs(r){return zs(r,oy)}function sy(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set($s(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function La(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!_(n)||Fr(n)?null:n}function ly(r){if(r.type===fe.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Ia(n.kind))?e:r.childrenNodes()}const Xt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}};function Qs(r){return r&&O(r.data)?{...r,styles:Xt}:{data:{type:"annotation",action:I.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:Xt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He}}function sr(r){const e=r.data,n={type:e.type,causedAt:[]};return x(e)||O(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:k(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function dy(r){return sr({data:r,styles:Xt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:He})}function Qt(r,e){if(!(!r||typeof r!="object")){if(ta(r)){e.push(r);return}for(const n of Object.values(r))Qt(n,e)}}function uy(...r){let e;for(const n of r)n&&(!e||ge.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function Zs(r){const e=r.diffs[R];return!!e&&(k(e.data)||x(e.data))}function fy(r){const e=r.nestedNodes();if(e.length===0)return;let n;for(const t of e){if(!ce(t))return;const a=t.diffs[R],i=a&&k(a.data)?I.add:a&&x(a.data)?I.remove:void 0;if(!i)return;if(!n){n=i;continue}if(n!==i)return}return n}function cy(r){if(ce(r)&&!Zs(r))return fy(r)}function my(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function el(r){return ce(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>ce(e)&&my(e)):!1}function yy(r){if(!(!ce(r)||!el(r)))return Qs(r.diffs[R])}function py(r){if(!ce(r)||!el(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(sr(o));for(const o of r.nestedNodes()){if(!ce(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const l=[];for(const u of Object.values(o.diffs))Qt(u,l);for(const u of l)e.push(sr(u));const s=Jt([...o.diffsSummary,...o.descendantDiffsSummary]);s&&e.push({type:s,causedAt:[]})}const n=r.diffs[R];n&&e.push(sr(n));const t=[];for(const o of Object.values(r.diffs))Qt(o,t);for(const o of t)e.push(sr(o));const a=Jt([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=uy(...e);if(!i){const o=Qs(n);return{[H.TitleRow]:dy(o.data)}}return{[H.TitleRow]:i}}function gy(r){if(ce(r)){const e=Ur(r);if(e){const n=r.diffsSeverities[H.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[H.TitleRow]:n}:void 0}}}return{selectorRowDiff:yy(r),diffsSeverities:py(r)}}function St(r){if(!Xn(r))return"";const e=Ys(r);return e?` (${e})`:""}function hy(r,e,n=Dn(La(r),r.meta())+St(r)){const t={title:n,node:r,testId:`json-schema-combiner-option-${e}`};if(!ce(r))return t;const a=Zs(r);return{...t,diffs:r.diffs,...a?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}function ja(r,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,a=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?r+1:r,0),afterLevel:Math.max(a?e+1:e,0)}}const nl=r=>d.jsx(Wa,{...r});nl.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const rl="show-all",by="show-only-changed-nodes";function Sy(r){return r?by:rl}function vy(r){return r!==rl}const Ja=m.createContext(null);function Dy(){const r=m.useContext(Ja);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function tl(){return m.useContext(Ja)}function wy(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({mode:r,hideUnchangedNodes:vy(r),revealedBlockIds:e,revealBlock:t}),[r,e,t])}const Ny="#64748B",al="#94A3B8";const fn=m.memo(r=>{const{text:e,color:n,className:t}=r,a=n===void 0?Ny:n;return d.jsx("span",{className:"json-schema-type-value-text",style:a?{color:a}:void 0,children:t?d.jsx("span",{className:t,children:e}):e})});fn.__docgenInfo={description:"Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide\nwhether to render it at all.\n\n`className` (diff/highlighter classes) is applied to an INNER span, not the outer one, so it\nnever becomes a direct flex item of an ancestor `inline-flex` container (e.g.\n`.json-schema-type-value-segments`). A flex item's `display` is CSS-blockified - an `inline`\nbox becomes `block` - which makes `line-height` (not font metrics) determine the painted\nheight of a highlighter background, rendering it ~1px taller than legacy's equivalent\n(`NodeType.tsx`'s `.inline` divs, which stay genuinely inline because they're nested one level\nbelow their `inline-flex` ancestor). Keeping the highlighted element on a non-flex-item\ndescendant reproduces legacy's inline box-painting exactly.",methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const il=m.memo(r=>{const{node:e}=r;return ay(e)?null:d.jsx(fn,{text:Dn(e.value(),e.meta()),color:al})});il.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Zt=m.memo(r=>{const{text:e,diff:n,layoutSide:t,color:a}=r,i=Eo(n,t),o=xd(n,t),l=[ee.highlighter(i),ee.background(o)].filter(Boolean).join(" ");return d.jsx(fn,{text:e,color:a,className:l||void 0})});Zt.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const vt=m.memo(r=>{const{display:e,layoutSide:n,color:t}=r;return e.kind===sn.NO_DIFFS?d.jsx(fn,{text:e.text,color:t}):e.kind===sn.WHOLE_DIFFS?d.jsx(Zt,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center",children:e.segments.map((a,i)=>d.jsx(Zt,{text:a.text,diff:a.diff,layoutSide:n,color:t},`${a.text}-${i}`))})});vt.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const ol=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r;if(iy(e,t))return null;const a=_a(e,n,t);return d.jsx(vt,{display:a,layoutSide:t,color:al})});ol.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const sl=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));sl.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function Ci(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Hr=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[le]:o}=r,l=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(pd,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(st,{text:Ci(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":Ci(n),onClick:l,children:d.jsx(sl,{})})})})]})});Hr.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const ll=m.memo(r=>{const e=ve(),n=Ke();switch(e){case Ee:return d.jsx(Vn,{left:d.jsx(Hr,{...r,layoutSide:"before",level:n}),right:d.jsx(Hr,{...r,layoutSide:"after",level:n})});case nn:return d.jsx(Hn,{content:d.jsx(Hr,{...r,layoutSide:"after",level:n})});default:return null}});ll.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Fa=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=Dy(),i=Ao(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:l}=m.useMemo(()=>nc(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:l.map((s,u)=>{const c=u===l.length-1;return s.kind==="placeholder"?t.has(s.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(s.sourceIndex,s.sourceIndex+s.blockSize).map((f,y)=>d.jsx(Qn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===s.blockSize-1},f.id))},s.unchangedBlockId):d.jsx(ll,{unchangedBlockId:s.unchangedBlockId,count:s.blockSize,onReveal:a},s.unchangedBlockId):d.jsx(Qn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:s.node,isLastInList:c},s.node.id)})})};Fa.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const Ty="markdown-text-row__json-schema-description",Ey="markdown-text-row__json-schema-expander",xy=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function ky(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===z;return k(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:x(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:O(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function Ay(r){switch(r){case B.body1:return"text-value-body1";case B.h1:case B.h2:case B.h3:case B.h4:case B.h5:case B.h6:return"text-value-body2";case B.body2:default:return"text-value-body2"}}function Cy(r,e){return r===Ie.JsonSchemaDescription?{markdownClassName:Ty,expanderClassName:Ey}:{markdownClassName:["text-slate-700",Ay(e)].join(" "),expanderClassName:`text-value-expander ${Cd(e)}`.trim()}}const dl=m.memo(r=>{const{value:e,variant:n=B.body2,usage:t,layoutSide:a,diff:i}=r,[o,l]=m.useState(!1),{resolvedValue:s,isInvisible:u}=m.useMemo(()=>ky(e,i,a),[i,a,e]),c=m.useMemo(()=>o?s:kd(s),[o,s]),f=m.useMemo(()=>Ad(s),[s]),y=m.useMemo(()=>Cy(t,n),[t,n]),p=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const v=a===z?i.styles.before:i.styles.after,w=[];return v.textHighlighterColor&&w.push(ee.highlighter(v.textHighlighterColor)),w},[i,a]),g=m.useMemo(()=>["markdown",y.markdownClassName].filter(Boolean).join(" "),[y.markdownClassName]),S=m.useMemo(()=>({p:({children:v})=>d.jsx("p",{children:v})}),[]),h=m.useCallback(()=>{l(v=>!v)},[]);return u||!c?null:d.jsxs("div",{className:`markdown-text-row flex min-w-0 flex-col items-start gap-1 ${p.join(" ")}`,children:[d.jsx(hu,{className:g,remarkPlugins:[bu],components:S,children:c}),d.jsx(xy,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});dl.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const Vy={[Ie.DdlApiProperty]:Vd,[Ie.JsonSchemaDescription]:aa},Ry={[Ie.DdlApiProperty]:["min-h-[26px]"]};function _y(r){const e=Vy[r]??mr,n=Ry[r]??[];return[e,...n].join(" ")}function My(r,e,n){return n===Ie.DdlApiProperty?_d(r,e):r!=null&&r.data?(e===z?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Lr=m.memo(r=>{const{value:e,variant:n=B.body2,layoutSide:t,usage:a=Ie.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[le]:l}=r,s=ia(t),u=a===Ie.DdlApiProperty,c=u||a===Ie.JsonSchemaDescription,f=m.useMemo(()=>My(o,t,a),[o,t,a]),y=a===Ie.JsonSchemaDescription&&s===0,p=c&&s>0&&(!i||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:v}=o,w=[];return t===z&&w.push(ee.background(v.before.backgroundColor)),t===te&&w.push(ee.background(v.after.backgroundColor)),w},[o,t]),S=m.useMemo(()=>_y(a),[a]),h=d.jsx(dl,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":l,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===Ie.JsonSchemaDescription?"items-stretch":"",S,...g].filter(Boolean).join(" "),children:[y&&d.jsx(Rd,{}),p&&d.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:h}):a===Ie.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:h}):h]})});Lr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ea=m.memo(r=>{const e=ve(),{diffsSeverities:n,diffsSeverityPlacement:t=H.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>cr(a==null?void 0:a.causedAt),[a]);switch(e){case Ee:return d.jsx(Ln,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Vn,{left:d.jsx(Lr,{...r,layoutSide:z}),right:d.jsx(Lr,{...r,layoutSide:te})})});case nn:return d.jsx(Hn,{content:d.jsx(Lr,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ea.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function qy(r){return r?en({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const Mn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Ve.UNIQUE_ITEMS};function Mt(r,e,n,t){const a=en({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function Py(r){const e=qy(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function Oy(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=Mt(n.minLength,n.maxLength);o.length&&e.push({key:Mn.VALUE_LENGTH,label:pa,values:o}),n.pattern!==void 0&&e.push({key:Mn.VALUE_PATTERN,label:ga,values:[String(n.pattern)]});const l=Py(t);l.length&&e.push({key:Mn.VALUE_RANGE,label:ha,values:l}),t.multipleOf!==void 0&&e.push({key:Mn.VALUE_MULTIPLE_OF,label:ba,values:[String(t.multipleOf)]});const s=Mt(a.minProperties,a.maxProperties);s.length&&e.push({key:Mn.PROPERTIES_COUNT,label:Sa,values:s}),i.uniqueItems!==void 0&&e.push({key:Mn.UNIQUE_ITEMS,label:va,values:[String(i.uniqueItems)]});const u=Mt(i.minItems,i.maxItems);return u.length&&e.push({key:Mn.ITEMS_COUNT,label:Da,values:u}),e}const Vi=[ye.VALUE_LENGTH,ye.VALUE_PATTERN,ye.VALUE_RANGE,ye.VALUE_MULTIPLE_OF,ye.PROPERTIES_COUNT,ye.UNIQUE_ITEMS,ye.ITEMS_COUNT];function Iy(r){return[...r].sort((e,n)=>Vi.indexOf(e.key)-Vi.indexOf(n.key))}const ul=r=>{const{extensions:e,extensionsDiffs:n,extensionsRowColorizingDiff:t,diffsSeverities:a}=r,i=Ke(),o=i+1,l=Ge(),s=Jn(),u=nt(),c=(u==null?void 0:u.beforeLevel)??i,f=(u==null?void 0:u.afterLevel)??i,{beforeLevel:y,afterLevel:p}=m.useMemo(()=>ja(c,f,t),[c,f,t]),g=!!n&&Object.keys(n).length>0,S=m.useMemo(()=>!g||!s?e:{...e,[s.diffsMetaKey]:n},[s,e,n,g]);return d.jsx(Le.Provider,{value:o,children:d.jsx(nr,{beforeLevel:y,afterLevel:p,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(bt,{title:"Extensions",usage:En.JsonSchema,lastInvisible:!0,diff:t,diffsSeverities:a,diffsSeverityPlacement:H.ExtensionsRow}),s?d.jsx(pr,{mergedSource:S,initialLevel:o,displayMode:l,diffMetaKeys:s}):d.jsx(gr,{source:e,initialLevel:o})]})})})};ul.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""},extensionsDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>"}],raw:"Record<OpenApiExtensionKey, Diff<DiffType>>"}],raw:"Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>"},description:""},extensionsRowColorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:"Background/badge for the `Extensions` row itself - set only when the owning node (the\nproperty/root this `x-*` sub-tree is attached to) was wholly added/removed. See\n`JsonSchemaKindAnyNodeDiffs.extensionsRowColorizingDiff` for scope."},diffsSeverities:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"NodeDiffsSeverityPlacemennt"},{name:"signature",type:"object",raw:`{
  type: DiffType
  causedAt: JsonPath
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Yn=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,a)=>d.jsx(Md,{isVisible:!0,value:t.text,usage:qd.JsonSchemaValidation,textHighlighterColor:Eo(t.diff,e),borderShadowColor:Pd(t.diff,e),isFontMuted:Od(t.diff,e),isEmptyStringPlaceholder:Hm(t.text)},`${t.text}-${a}`))}):null});Yn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Ri={valueLength:pa,valuePattern:ga,valueRange:ha,valueMultipleOf:ba,propertiesCount:Sa,itemsCount:Da,uniqueItems:va};function Hy(r){return ce(r)&&(r.kind===Q.PROPERTY||r.kind===Q.ROOT)}const Ka=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Ge(),i=n??e.value(),o=Tn(i),l=Hy(e)?e:void 0,s=ce(e)?e:void 0,u=m.useMemo(()=>l&&n===void 0?Pa(l,a):Va(n!==void 0?{value:()=>n}:e,a),[a,n,e,l]),c=m.useMemo(()=>s?Ps(s):void 0,[s]),f=m.useMemo(()=>s?Os(s):void 0,[s]),y=m.useMemo(()=>s?Is(s):void 0,[s]),p=m.useMemo(()=>s?Hs(s):void 0,[s]),g=m.useMemo(()=>s?Ls(s):void 0,[s]),S=m.useMemo(()=>s?js(s):void 0,[s]),h=m.useMemo(()=>s?Ms(s):void 0,[s]),v=m.useMemo(()=>s?qs(s):void 0,[s]),w=m.useMemo(()=>s?Vm(s):void 0,[s]),T=m.useMemo(()=>s?Am(s):void 0,[s]),b=yr(e,ce),E=m.useMemo(()=>se(b,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[b]),C=m.useMemo(()=>{const j=Oy(o);if(!s)return j;const $=new Set(j.map(re=>re.key)),ne=Object.keys(Ri).filter(re=>!$.has(re)).filter(re=>Ai(s,re)).map(re=>({key:re,label:Ri[re],values:[]}));return Iy([...j,...ne])},[s,o]),A=m.useMemo(()=>{var ne;if(!ry(e))return;const j=e.parent,$=Tn((j==null?void 0:j.value())??null);return(ne=$==null?void 0:$.propertyNames)==null?void 0:ne.enum},[e]),M=m.useMemo(()=>s?Mm(s):void 0,[s]),q=m.useMemo(()=>s?qm(s):void 0,[s]),J=m.useMemo(()=>s?Pm(s):void 0,[s]),U=a===gd&&!!(A!=null&&A.length),L=m.useCallback(j=>{const $=Km(A??[],M,q,j);return $.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:j,sideItems:$.map(({text:ne,valueDiffKey:re})=>({text:ne,diff:Pr(q,re)}))})},[A,M,q]),F=m.useCallback(j=>{const $=Fm((o==null?void 0:o.enum)??[],c,f,j);return $.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:j,sideItems:$.map(({text:ne,valueDiffKey:re})=>({text:ne,diff:Pr(f,re)}))})},[c,f,o==null?void 0:o.enum]),G=m.useCallback(j=>{const $=Gm((o==null?void 0:o.examples)??[],p,g,j);return $.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:j,sideItems:$.map(({text:ne,valueDiffKey:re})=>({text:ne,diff:Pr(g,re)}))})},[p,g,o==null?void 0:o.examples]),ae=m.useCallback(j=>{const $=o==null?void 0:o.default,ne=Lm($,h,j);return ne.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:j,sideItems:ne.map(({text:re})=>({text:re,diff:h}))})},[h,o==null?void 0:o.default]),xe=m.useCallback((j,$)=>ne=>{const re=s?Yr(s,j):void 0,Y=s?Js(s,j):void 0,de=Bm(j,$,re,Y,ne,j===ye.VALUE_RANGE&&s?{nodeValue:i,crawlDiffs:Om(s)??{}}:void 0);return de.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:ne,sideItems:de.map(({text:Be,valueDiffKey:W})=>({text:Be,diff:Pr(Y,W)}))})},[s,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(ea,{usage:Ie.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||E.diff)&&d.jsx(ea,{usage:Ie.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...E}),u.showDefaultRow&&d.jsx(tr,{label:"Default",usage:ar.JsonSchemaValidation,subheader:ae,colorizingDiff:v,diffsSeverities:h||v?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.DefaultRow}),u.showExamplesRow&&d.jsx(tr,{label:"Examples",usage:ar.JsonSchemaValidation,subheader:G,diff:p,colorizingDiff:S,diffsSeverities:p||g||S?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.ExamplesRow}),u.showEnumValuesRow&&d.jsx(tr,{label:"Allowed values",usage:ar.JsonSchemaValidation,subheader:F,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.EnumRow,...Ra(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),U&&d.jsx(tr,{label:Mo,usage:ar.JsonSchemaValidation,subheader:L,diff:M,colorizingDiff:J,diffsSeverities:M||q||J?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&C.map(j=>{const $=j.key,ne=s?Yr(s,$):void 0,re=s?Ma(s,$):void 0;return d.jsx(tr,{label:j.label,usage:ar.JsonSchemaValidation,subheader:xe($,j.values),diff:ne,colorizingDiff:re,diffsSeverities:s&&Ai(s,$)?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:wo[$]},j.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(ul,{extensions:o.extensions,extensionsDiffs:w,extensionsRowColorizingDiff:T,diffsSeverities:T?b==null?void 0:b.nodeDiffsSeverities:void 0})]})};Ka.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ly(r){const e=_s(r),n={};for(const t of $n){const a=e[t];a&&(n[t]=a)}return n}function jy(r,e){var s;const n=!!r.diffs[R],t=_s(r),a=Ly(r),i=t.required,o=i?{...a,required:i}:a,l=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:l,requiredChanged:!n&&!!i,$nodeChange:(s=r.diffs[R])==null?void 0:s.data,$metaChanges:o}}const fl=m.memo(r=>{const{value:e,meta:n,suffix:t}=r;return d.jsxs(d.Fragment,{children:[d.jsx(fn,{text:Dn(e,n)}),t&&d.jsx(fn,{text:t})]})});fl.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const cl=m.memo(r=>{const{node:e,meta:n,layoutSide:t,suffix:a}=r,i=_a(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(vt,{display:i,layoutSide:t}),a&&d.jsx(fn,{text:a})]})});cl.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const ml=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(fl,{value:e,meta:n,suffix:o}),t&&d.jsx(st,{text:ca,children:d.jsx(ma,{})}),d.jsx(ya,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},yl=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;ve();const l=jy(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(cl,{node:n,meta:e,layoutSide:a,suffix:o}),t&&d.jsx(st,{text:ca,children:d.jsx(ma,{})}),d.jsx(ya,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...l})]})};ml.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const Jy="Type: ";function Fy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return Ha(e)?{variant:"text",text:t??Jy}:a===Q.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:hd}:{variant:"badge",text:"additional property",badgeKind:vr}:a===Q.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:vr}:a===Q.ITEMS?{variant:"badge",text:"item",badgeKind:vr}:a===Q.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:vr}:a===Q.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function Ky(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===Q.ADDITIONAL_PROPERTIES&&n===!1}function Gy(r,e,n,t,a){const i=r===!0&&!me(e)||!!e&&(e.action===I.remove&&t||e.action===I.add&&a||e.action===I.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const pl=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=ve(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=po(a),{originSide:l,changedSide:s}=bd(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!Gy(e,n,o,l,s)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};pl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const gl="text-xs text-black font-Inter-Medium",hl=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(bo,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${gl}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},bl=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(bo,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${gl}`,children:[e.text,d.jsx(pl,{required:n,requiredDiff:t,layoutSide:a})]})}};hl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};bl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function By(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:l=!1,titleRowDiff:s}=r,u=is(),c=e.meta(),f=Tn(t??n.value()),y=n.meta(),p=m.useMemo(()=>Ra(i,a),[a,i]),g=m.useMemo(()=>Fy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),S=m.useMemo(()=>v=>{const w=xo(s);return(w?ko(w,v):Id(s,v))?l?d.jsx(bl,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:v}):d.jsx(hl,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,s,l]),h=m.useMemo(()=>!Ky(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:p,titleContent:S,showTypeSubheader:h}}const Ga=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[le]:p}=r,{displayValueResolved:g,displayMeta:S,listLastRowFlags:h,titleContent:v,showTypeSubheader:w}=By({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(he,{...h,"data-precededby":p,titleContent:v,expandable:o,expanded:l,isRoot:Ha(e),onClickExpander:o?s:void 0,variant:B.body2,subheader:T=>y({layoutSide:T,displayValueResolved:g,displayMeta:S,displayNode:n,showTypeSubheader:w}),usage:rt.JsonSchemaProperty,...u})};Ga.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Ba=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,typeValueSuffix:u,...c}=r;return d.jsx(Ga,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,renderSubheader:({layoutSide:f,displayValueResolved:y,displayMeta:p,displayNode:g,showTypeSubheader:S})=>d.jsx(ml,{value:y,meta:p,isCycle:g.isCycle,layoutSide:f,showTypeLabel:S,typeValueSuffix:u})})};Ba.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function Uy(r){return se(dn(r),{resolveDiff:()=>km(r)})}const Ua=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,typeValueSuffix:c,...f}=r,y=m.useMemo(()=>u??Uy(n),[n,u]),p=m.useMemo(()=>_m(e),[e]),g=ve(),S=m.useMemo(()=>Cm(n),[n]),h=!l&&o&&g===Ee&&!!S&&S.size>0;return d.jsx(Ga,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,titleRowDiffProps:y,requiredDiff:p,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:v,displayMeta:w,displayNode:T,showTypeSubheader:b})=>ko(xo(y.diff),v)?d.jsxs(d.Fragment,{children:[d.jsx(yl,{meta:w,node:n,isCycle:T.isCycle,layoutSide:v,showTypeLabel:b,typeValueSuffix:c}),h&&d.jsx(fa,{values:Array.from(S)})]}):d.jsx(d.Fragment,{})})};Ua.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function Yy(r){return ce(r)&&r.kind===Q.PROPERTY}const Ya=r=>{const{node:e,isLastInList:n=!1,[le]:t}=r,a=Ge(),i=Ke(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Bs(),u=Yy(e)?e:void 0,c=ce(e)?e:void 0,f=tl(),y=m.useMemo(()=>u?Pa(u,a):Va(e,a),[a,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,s]),g=m.useMemo(()=>Ns(e),[e,s]),S=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Ks(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===Q.ROOT}):Ts(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),h=m.useMemo(()=>Pn(e,S),[S,e,s]),[v,w]=m.useState(h);m.useEffect(()=>{w(L=>Pn(e,L))},[e,s]);const T=m.useCallback(()=>{w(L=>{const F=!L;return F&&l(e),Pn(e,F)})},[l,e]),b=!g||v,E=m.useCallback(L=>c?d.jsx(ol,{node:c,meta:c.meta(),layoutSide:L}):d.jsx(il,{node:e}),[e,c]),C=m.useMemo(()=>c?Ur(c):void 0,[c]),A=nt(),M=(A==null?void 0:A.beforeLevel)??i,q=(A==null?void 0:A.afterLevel)??i,{beforeLevel:J,afterLevel:U}=m.useMemo(()=>ja(M,q,C),[M,q,C]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(Ua,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:g,expanded:v,onClickExpander:T}):d.jsx(Ba,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:g,expanded:v,onClickExpander:T}),b&&d.jsxs(d.Fragment,{children:[d.jsx(Ka,{node:e,isLastInList:n&&p.length===0}),p.length>0&&d.jsx(Le.Provider,{value:i+1,children:d.jsxs(nr,{beforeLevel:J,afterLevel:U,children:[d.jsx(bt,{title:E,usage:En.JsonSchema,lastInvisible:!0,diff:C,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),c&&f?d.jsx(Fa,{children:p}):p.map((L,F)=>c?d.jsx(Qn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:L,isLastInList:F===p.length-1},L.id):d.jsx(Nt,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:L,isLastInList:F===p.length-1},L.id))]})})]})]})};Ya.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Sl=r=>d.jsx(Ya,{...r});Sl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const Qn=r=>{const{node:e}=r;return Xn(e)?d.jsx(nl,{...r}):d.jsx(Sl,{...r})};Qn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vl=m.memo(r=>{const{node:e}=r,n=Xs(e),t=Dn(La(n),n.meta())+St(e);return d.jsx(fn,{text:t,color:null})});vl.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Dl=m.memo(r=>{const{node:e,layoutSide:n}=r,t=Xs(e),a=_a(t,t.meta(),n),i=St(e);return d.jsxs(d.Fragment,{children:[d.jsx(vt,{display:a,layoutSide:n,color:null}),i&&d.jsx(fn,{text:i,color:null})]})});Dl.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=new Set;function Dt(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=te}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:e.map(o=>{const{diffsRelatedClassesList:l,isInvisible:s}=Wy({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(s)return null;const u=l.join(" "),c=typeof o.title=="function"?o.title(i):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:f=>{f.preventDefault(),f.stopPropagation(),t(o)},children:c},o.node.id)})})}function Wy(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const l=e==null?void 0:e[R];if(l){const{styles:s}=l;switch(a){case z:l.inherited||i.push(ee.borderShadow(s.before.borderShadowColor)),o=l.data.action===I.add;break;case te:l.inherited||i.push(ee.borderShadow(s.after.borderShadowColor)),o=l.data.action===I.remove;break}}if(!(l!=null&&l.inherited)&&(n||t)){const s=n??_i,u=t??_i,c=new Set([...s,...u]),f=Jt(c);i.push(f?ee.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}Dt.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var wt=(r=>(r.Primary="primary",r.Secondary="secondary",r))(wt||{});function $y(r,e){if(!r)return"";const n=e===z?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return ee.background(n)}const zy=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i,levelReductionAction:o}=r,l=ia(i),s=m.useMemo(()=>Gs(l,i,o),[l,i,o]),u=m.useMemo(()=>$y(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${aa} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(Dt,{options:e,selectedOption:n,onSelectOption:t,variant:wt.Secondary,layoutSide:i})})]})}),qt=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(lr,{title:e,usage:En.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t,levelReductionAction:r.levelReductionAction}),n&&d.jsx(zy,{...r})]})}),wl=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=ve(),i=m.useMemo(()=>t==null?void 0:t[H.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>cr(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case Ee:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Vn,{left:d.jsx(qt,{...r,layoutSide:z}),right:d.jsx(qt,{...r,layoutSide:te})})});case nn:return d.jsx(Hn,{content:d.jsx(qt,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});wl.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};function Xy(r){return ce(r)&&r.kind===Q.PROPERTY}const Wa=r=>{const{node:e,isLastInList:n=!1,[le]:t}=r,a=Ge(),i=Ke(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Bs(),u=ce(e)?e:void 0,c=tl(),f=e.nestedNodes(),[y,p]=m.useState(()=>new Map),g=m.useMemo(()=>$s(e,y),[e,y]),S=m.useMemo(()=>zs(e,y),[e,y]),h=m.useMemo(()=>La(S),[S]),v=ce(S)?S:void 0,w=Xy(S)?S:void 0,T=m.useMemo(()=>w?Pa(w,a):Va({value:()=>h},a),[h,w,a]),b=m.useMemo(()=>ly(S),[S,s]),E=m.useMemo(()=>b.length>0,[b.length]),C=m.useMemo(()=>e.isCycle||b.length===0?!1:v&&(c!=null&&c.hideUnchangedNodes)?Ks(v,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):Ts(S,{expandedDepth:o,level:i}),[e.isCycle,S,v,c==null?void 0:c.hideUnchangedNodes,o,b.length,i]),A=m.useMemo(()=>Pn(S,C),[S,C,s]),[M,q]=m.useState(A);m.useEffect(()=>{q(Pn(S,C))},[S.id,S,C]),m.useEffect(()=>{q(W=>Pn(S,W))},[S,s]);const J=m.useCallback(()=>{q(W=>{const pe=!W;return pe&&l(S),Pn(S,pe)})},[S,l]),U=m.useMemo(()=>Dn(h,S.meta()),[S,h]),L=m.useMemo(()=>St(e),[e]),F=m.useMemo(()=>v?Ur(v):void 0,[v]),G=nt(),ae=(G==null?void 0:G.beforeLevel)??i,xe=(G==null?void 0:G.afterLevel)??i,j=m.useMemo(()=>u?Ur(u):void 0,[u]),{beforeLevel:$,afterLevel:ne}=m.useMemo(()=>ja(ae,xe,j),[ae,xe,j]),re=m.useCallback((W,pe)=>{p(Ue=>sy(e,Ue,W.id,pe.node.id))},[e]);if(f.length===0)return null;const Y=M&&b.length>0,de=!!(u&&c),Be=u?Qn:Nt;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&v?d.jsx(Ua,{"data-precededby":t,ownerNode:u,displayNode:v,displayValue:h,contentVisibility:T,isLastInList:n&&!T.showContentSection&&!E,expandable:E,expanded:M,onClickExpander:J,typeValueSuffix:L}):d.jsx(Ba,{"data-precededby":t,ownerNode:e,displayNode:S,displayValue:h,contentVisibility:T,isLastInList:n&&!T.showContentSection&&!E,expandable:E,expanded:M,typeValueSuffix:L,onClickExpander:J}),d.jsx(Ka,{node:S,displayValue:h,isLastInList:n&&!E&&g.every(W=>!W.showSelector)}),d.jsx(Le.Provider,{value:i+1,children:d.jsxs(nr,{beforeLevel:$,afterLevel:ne,children:[g.map(W=>{const pe=W.nestedNodes.map((_e,br)=>hy(_e,br,ce(_e)?Ml=>d.jsx(Dl,{node:_e,layoutSide:Ml}):()=>d.jsx(vl,{node:_e}))),Ue=pe.find(_e=>_e.node.id===W.selectedNestedNode.id)??pe[0]??null,Ye=gy(W.combinerNode),Fn=cy(W.combinerNode);return d.jsx(wl,{combinerKindLabel:W.combinerKindLabel,showSelector:W.showSelector,options:pe,selectedOption:Ue,onSelectOption:_e=>re(W.combinerNode,_e),selectorRowDiff:Ye.selectorRowDiff,diffsSeverities:Ye.diffsSeverities,levelReductionAction:Fn},W.combinerNode.id)}),Y&&d.jsxs(d.Fragment,{children:[d.jsx(bt,{title:U,usage:En.JsonSchema,lastInvisible:!0,diff:F,diffsSeverities:v==null?void 0:v.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),de?d.jsx(Fa,{children:b}):b.map((W,pe)=>d.jsx(Be,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:W,isLastInList:pe===b.length-1},W.id))]})]})})]})};Wa.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Nt=r=>{const{node:e}=r;return Xn(e)?d.jsx(Wa,{...r}):d.jsx(Ya,{...r})};Nt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Qy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(xn,{fallback:d.jsx(kn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(Zy,{...r})})),Zy=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=Cn,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,l=m.useMemo(()=>rn(a),[a]),s=m.useMemo(()=>new Fo({source:e,materializeDepth:n,logger:l}),[e,n,l]),u=m.useMemo(()=>s.build(),[s]),[c,f]=m.useReducer(S=>S+1,0),y=m.useCallback(S=>{s.materializeChildren(S),f()},[s]),p=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(Oa.Provider,{value:p,children:d.jsx(ct.Provider,{value:o,children:d.jsx(An.Provider,{value:t,children:d.jsx(On.Provider,{value:nn,children:d.jsx(Le.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(Nt,{node:g})})})})})})}):null};Qy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const ep=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(xn,{fallback:d.jsx(kn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(np,{...r})})),np=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=Cn,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:l,diffTypes:s,hideUnchangedNodes:u=!0}=r,c=m.useMemo(()=>Sy(u),[u]),f=wy(c),y=m.useMemo(()=>rn(a),[a]),p=m.useMemo(()=>new Qf({source:e,materializeDepth:n,diffsMetaKeys:l,logger:y}),[e,n,l,y]),g=m.useMemo(()=>p.build(),[p]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",g);const[S,h]=m.useReducer(b=>b+1,0),v=m.useCallback(b=>{p.materializeChildren(b),h()},[p]),w=m.useMemo(()=>({expandedDepth:n,materializeChildren:v,treeRevision:S}),[n,v,S]),T=g.root;return T?d.jsx(at.Provider,{value:l,children:d.jsx(da.Provider,{value:s,children:d.jsx(Ja.Provider,{value:f,children:d.jsx(Oa.Provider,{value:w,children:d.jsx(ct.Provider,{value:o,children:d.jsx(An.Provider,{value:t,children:d.jsx(On.Provider,{value:Ee,children:d.jsx(Le.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Qn,{node:T})})})})})})})})})}):null};ep.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.'}}};var Wr=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Wr||{});const hr=r=>{const{node:e,variant:n=Wr.PRIMARY,[le]:t}=r,a=Ge(),i=Jn(),o=e.meta(),l=o==null?void 0:o.brokenRef,[s,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(Vt).map((b,E)=>{var M;const C=((M=b.value())==null?void 0:M.protocol)??"",A=`binding-${E}`;return Rt(b)?{title:C,node:b,testId:A,diffs:b.diffs,diffsSummary:b.diffsSummary,descendantDiffs:b.descendantDiffs,descendantDiffsSummary:b.descendantDiffsSummary,diffsSeverities:b.diffsSeverities}:{title:C,node:b,testId:A}}),[c]),y=s!=null&&s.node&&Vt(s.node)?s.node:null,p=y==null?void 0:y.value(),{version:g="latest",binding:S=null}=p??{};m.useEffect(()=>{f.length>0&&s===null&&u(f[0])},[f,s]);const h=m.useCallback(b=>l?d.jsx(d.Fragment,{}):d.jsx(Dt,{options:f,selectedOption:s,onSelectOption:u,variant:wt.Secondary,layoutSide:b}),[f,l,s]),v=m.useMemo(()=>{if(bc(e)){const b=dn(e);return se(b)}return{}},[e]),w=m.useMemo(()=>{if(y&&Rt(y)){const b=dn(y);return se(b,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:H.BindingVersionRow})}return{}},[y]),T=m.useMemo(()=>{if(!y)return null;if(Rt(y)&&i){const b=y.diffs[R],E=rp(S,b,i);return d.jsx(pr,{"data-precededby":V.BINDING_VERSION_ROW,mergedSource:E,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return Vt(y)?d.jsx(gr,{"data-precededby":V.BINDING_VERSION_ROW,source:S,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,S,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Wr.PRIMARY?B.h3:B.h5,subheader:h,...v}),d.jsxs("div",{"data-testid":`${s==null?void 0:s.testId}-content`,className:"flex flex-col",children:[d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:B.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...w}),T]})]})};function rp(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,k(t)){const s=r[l];o[l]={...t,afterValue:s}}if(x(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}hr.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const Tt=r=>{const{node:e,[le]:n}=r,t=Jn(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var l;if(Sc(e)){const s=dn(e);return{...se(s),highlightingMode:(l=e.diffs[R])==null?void 0:l.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:"Extensions",expandable:!1,variant:B.h3,usage:rt.AsyncApiJsoSection,...o}),t?d.jsx(pr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(gr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};Tt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Nl="Address Parameters",Tl=r=>{const{node:e,[le]:n}=r,t=Ge();if(Dc(e))return d.jsx(tp,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:Nl,expandable:!1,variant:B.h3}),d.jsx(yt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},tp=r=>{const{node:e,[le]:n}=r,t=Ge(),a=ve(),i=e.value(),o=i==null?void 0:i.rawValues,l=Jn(),s=m.useMemo(()=>{const c=dn(e);return se(c)},[e]),u=m.useMemo(()=>ap(o,e.diffs[R],l),[o,l,e.diffs]);return!l||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:Nl,expandable:!1,variant:B.h3,...s}),d.jsx(gt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:l,overriddenKind:"parameters"})]})};function ap(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,k(t)){const s=r[l];o[l]={...t,afterValue:s}}if(x(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}Tl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const El=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>cr(i==null?void 0:i.causedAt),[i]);switch(ve()){case Ee:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Vn,{left:e(z),right:e(te)})});case nn:return d.jsx(Hn,{content:e(te)})}return null});El.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const xl=m.memo(r=>{const{node:e,[le]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(ut),o=yr(e,Ar),{nodeDiffs:l}=o,s=m.useMemo(()=>se(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>se(o,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[o]),c=m.useMemo(()=>se(o,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[o]),f=m.useMemo(()=>se(o,{resolveDiff:(w,T)=>{const b=ge.maxChangedPropertyMetaDataByDiffType(T("protocol"),T("host"));return w[R]??b}}),[o]),y=m.useCallback(w=>{var q;if(!t)return null;if(!Ar(e))return d.jsx(d.Fragment,{children:t.protocol});const T=(q=e.diffs)==null?void 0:q.protocol;if(!T)return d.jsx(d.Fragment,{children:t.protocol});const b=new Set,{data:E,styles:C}=T;let A=t.protocol,M=!1;return w===z&&(b.add(ee.highlighter(C.before.textHighlighterColor)),x(E)||O(E)?A=E.beforeValue:ln(E)&&(A=E.beforeKey),k(E)&&(M=!0)),w===te&&(b.add(ee.highlighter(C.after.textHighlighterColor)),k(E)||O(E)?A=E.afterValue:ln(E)&&(A=E.afterKey),x(E)&&(M=!0)),M?null:d.jsx("span",{className:Array.from(b).join(" "),children:A})},[e,t]),p=m.useCallback(w=>{var q;if(!t)return null;if(!Ar(e))return d.jsx(d.Fragment,{children:t.host});const T=(q=e.diffs)==null?void 0:q.host;if(!T)return d.jsx(d.Fragment,{children:t.host});const b=new Set,{data:E,styles:C}=T;let A=t.host,M=!1;return w===z&&(b.add(ee.highlighter(C.before.textHighlighterColor)),x(E)||O(E)?A=E.beforeValue:ln(E)&&(A=E.beforeKey),k(E)&&(M=!0)),w===te&&(b.add(ee.highlighter(C.after.textHighlighterColor)),k(E)||O(E)?A=E.afterValue:ln(E)&&(A=E.afterKey),x(E)&&(M=!0)),M?null:d.jsx("span",{className:Array.from(b).join(" "),children:A})},[e,t]),g=m.useCallback(w=>{var q;function T(J=!1,U=[]){return d.jsx("div",{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${mr} py-2 flex flex-row w-full h-full ${U.join(" ")}`,children:!J&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(w),"://",p(w)]})})}if(!Ar(e))return T();const b=((q=e.diffs)==null?void 0:q[R])??f.diff;if(!b)return T();const{data:E,styles:C}=b,A=new Set;let M=!1;return w===z&&(k(E)?(A.add(ee.background(N.Gray)),M=!0):A.add(ee.background(C.before.backgroundColor))),w===te&&(x(E)?(A.add(ee.background(N.Gray)),M=!0):A.add(ee.background(C.after.backgroundColor))),T(M,Array.from(A))},[e,p,y,f.diff]),S=m.useMemo(()=>Fe(t,l,"title"),[t,l]),h=m.useMemo(()=>Fe(t,l,"description"),[t,l]),v=m.useMemo(()=>Fe(t,l,"summary"),[t,l]);return t?d.jsxs("div",{className:"flex flex-col",children:[S&&d.jsx(he,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:B.h4,...s}),!S&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h4,...s}),d.jsx(El,{renderAddress:g,...f}),h&&d.jsx(un,{"data-precededby":V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h6,textFontWeight:"normal",textColor:Nn,...u}),v&&d.jsx(un,{"data-precededby":h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h6,textFontWeight:"normal",textColor:Nn,...c}),i&&d.jsx(hr,{"data-precededby":v?V.SUMMARY_ROW:h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,node:i,variant:Wr.SECONDARY})]}):null});xl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const kl=m.memo(r=>{const{node:e,[le]:n}=r,t=m.useMemo(()=>e.childrenNodes().filter(lc),[e]),a=m.useMemo(()=>{if(wc(e)){const i=dn(e);return se(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:B.h3,...a}),t.map((i,o)=>d.jsx(xl,{"data-precededby":o===0?V.MESSAGE_SECTION_HEADER_HIGH_LEVEL:V.SERVER_BLOCK,node:i},i.id))]})});kl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Al=r=>{const{node:e,[le]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(ut),o=a.find(ic),l=a.find(sc),s=a.find(Ta),u=yr(e,vc),{nodeDiffs:c}=u,f=m.useMemo(()=>se(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>se(u,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[u]),p=m.useMemo(()=>se(u,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[u]),g=m.useMemo(()=>Fe(t,c,"title"),[t,c]),S=m.useMemo(()=>Fe(t,c,"description"),[t,c]),h=m.useMemo(()=>Fe(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(he,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:B.h2,...f}),!g&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h2,...f}),S&&d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:Nn,...y}),h&&d.jsx(un,{"data-precededby":S?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:Nn,...p}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Tl,{"data-precededby":S?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),l&&d.jsx(kl,{"data-precededby":o?V.JSON_SCHEMA_VIEWER:S?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),s&&d.jsx(Tt,{"data-precededby":l?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:S?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),i&&d.jsx(hr,{"data-precededby":s?V.JSO_VIEWER:l?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:S?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Al.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Cl=r=>{const{node:e,[le]:n}=r,t=Ge(),a=ve(),i=Jn(),o=Ao(),l=e.childrenNodes(),s=l.find(tc),u=l.find(Ta),c=l.find(ut),f=l.find(ac),y=m.useMemo(()=>qi(s,i),[s,i]),p=m.useMemo(()=>qi(f,i),[f,i]),g=m.useMemo(()=>{if(Nc(s)){const v=dn(s);return se(v)}return{}},[s]),S=m.useMemo(()=>{if(Tc(f)){const v=dn(f);return se(v)}return{}},[f]),h=m.useCallback(v=>a===nn?d.jsx(yt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:v,displayMode:t,overriddenKind:"parameters"}):a===Ee&&i?d.jsx(gt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:v,displayMode:t,metaKeys:i,filters:o,layoutMode:Ee,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[s&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":n,value:"Headers",variant:B.h3,expandable:!1,...g}),h(y)]}),u&&d.jsx(Tt,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(hr,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:u?V.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:u||c?V.JSO_VIEWER:n,value:"Payload",variant:B.h3,expandable:!1,...S}),h(p)]})]})},Mi="Type";function qi(r,e){if(!r)return;const n=r.value();if(n)return r instanceof je?$t(Mi,n.schema,r.diffs[R],e):cs(Mi,n.schema)}Cl.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Vl=r=>{const{node:e,[le]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(ut),o=a.find(Ta),l=yr(e,xc),{nodeDiffs:s}=l,u=m.useMemo(()=>se(l,{diffKey:"title"}),[l]),c=m.useMemo(()=>se(l,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[l]),f=m.useMemo(()=>se(l,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[l]),y=m.useMemo(()=>Fe(t,s,"title"),[t,s]),p=m.useMemo(()=>Fe(t,s,"description"),[t,s]),g=m.useMemo(()=>Fe(t,s,"summary"),[t,s]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(he,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:B.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),variant:B.h2,expandable:!1,expanded:!0,...u}),p&&d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:Nn,...c}),g&&d.jsx(un,{"data-precededby":p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:Nn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Tt,{"data-precededby":g?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(hr,{"data-precededby":o?V.JSO_VIEWER:g?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Vl.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Rl=r=>{const{node:e,[le]:n}=r;return ns(e)?d.jsx(Cl,{"data-precededby":n,node:e}):rs(e)?d.jsx(Al,{"data-precededby":n,node:e}):ts(e)?d.jsx(Vl,{"data-precededby":n,node:e}):null};Rl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const _l=r=>{const{node:e,[le]:n}=r,t=ve();Ge();const[a,i]=m.useState(null),o=e.nestedNodes(),l=m.useMemo(()=>o.map(g=>{const S=ip(g),h=op(g);return Ac(g)?{node:g,title:S,testId:h,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:S,testId:h}}),[o]);m.useEffect(()=>{l.length>0&&a===null&&i(l[0])},[l,a]);const s=m.useMemo(()=>{var g;return kc(e)?(g=e.diffs)==null?void 0:g[R]:null},[e]),u=m.useMemo(()=>{if(s){const{data:g}=s;if(O(g)||x(g))return g.beforeDeclarationPaths[0];if(k(g))return g.afterDeclarationPaths[0]}return null},[s]),c=m.useMemo(()=>{var g;return(g=s==null?void 0:s.data)==null?void 0:g.type},[s]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),y=m.useCallback(g=>{const S=new Set;if(s){const{styles:h}=s;g===z&&S.add(ee.background(h.before.backgroundColor)),g===te&&S.add(ee.background(h.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${mr} h-full ${Array.from(S).join(" ")}`,children:d.jsx(Dt,{options:l,selectedOption:a,onSelectOption:i,variant:wt.Secondary,layoutSide:g})})},[s,n,l,a]),p=m.useCallback(()=>{switch(t){case Ee:return d.jsx(Ln,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(Vn,{left:y(z),right:y(te)})});default:return d.jsx(Hn,{content:y(te)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[p(),a&&oc(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(Rl,{"data-precededby":V.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function ip(r){switch(r.kind){case D.MESSAGE_CONTENT:return"Message";case D.MESSAGE_CHANNEL:return"Channel";case D.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function op(r){switch(r.kind){case D.MESSAGE_CONTENT:return"message-content";case D.MESSAGE_CHANNEL:return"message-channel";case D.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}_l.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const $a=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=yr(e,Ec),{nodeDiffs:o}=i,l=m.useMemo(()=>se(i,{diffKey:"title"}),[i]),s=m.useMemo(()=>se(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>se(i,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[i]),c=m.useMemo(()=>se(i,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[i]),f=m.useMemo(()=>Fe(t,o,"title"),[t,o]),y=m.useMemo(()=>Fe(t,o,"description"),[t,o]),p=m.useMemo(()=>Fe(t,o,"summary"),[t,o]),g=n?V.ROOT:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(he,{"data-precededby":V.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:B.h1,...l}),!n&&!f&&d.jsx(he,{"data-precededby":V.ROOT,value:e.key.toString(),expandable:!1,variant:B.h1,...l}),d.jsx(as,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...s}),y&&d.jsx(un,{"data-precededby":V.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h4,textFontWeight:"normal",textColor:Nn,...u}),p&&d.jsx(un,{"data-precededby":y?V.DESCRIPTION_ROW:V.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h4,textFontWeight:"normal",textColor:Nn,...c}),d.jsx(sp,{"data-precededby":p?V.SUMMARY_ROW:y?V.DESCRIPTION_ROW:V.ADDRESS_ROW,children:a})]})},sp=r=>{const{children:e,[le]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>rc(t)?d.jsx(_l,{"data-precededby":n,node:t},t.key):null)})};$a.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const lp=m.memo(r=>r.source===null?null:d.jsx(xn,{fallback:d.jsx(kn,{componentName:"Async API Operation Viewer"}),children:d.jsx(dp,{...r})})),dp=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=Cn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,l=m.useMemo(()=>rn(a),[a]),s=m.useMemo(()=>new Io({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:l}),[e,n,o,l]),u=m.useMemo(()=>(s==null?void 0:s.build())??null,[s]);l.debug("[AsyncAPI] Original Source:",e),l.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!es(c)?null:d.jsx(No.Provider,{value:a,children:d.jsx(An.Provider,{value:t,children:d.jsxs(On.Provider,{value:nn,children:[" ",d.jsx(Le.Provider,{value:0,children:d.jsx($a,{node:c,noHeading:i})})]})})})});lp.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{lp as A,gr as J,Rc as a,yt as b,gt as c,ep as d,Qy as e,pr as f};
