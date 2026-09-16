var ql=Object.defineProperty;var Pl=(r,e,n)=>e in r?ql(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(Pl(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{at as jr,a3 as Dn,N as _,d as $r,t as k,H as T,v as x,x as O,y as Ie,R as H,w as ln,O as I,au as bn,av as Pt,aw as Ot,ax as It,ay as qi,az as Pi,aA as Oi,aB as Ii,aC as Hi,aD as Li,aE as ji,aF as Ji,aG as Ol,aH as Ht,aI as Fi,aJ as Ki,a6 as Gi,aK as Bi,aL as Ui,aM as Yi,ai as Wi,aj as $i,ah as zi,aN as Xi,af as Qi,ag as Zi,aO as eo,aP as Lt,ae as no,aa as ro,ac as to,ab as ao,ad as io,a7 as oo,a8 as so,a9 as lo,U as z,o as ur,_ as uo,aQ as Il,aR as ze,i as $a,aS as fo,aT as Hl,Z as Ll,aU as jl,X as ve,Y as fr,W as te,S as Ee,V as re,E as En,c as xn,e as kn,L as On,f as He,p as An,am as Fe,aV as co,l as nn,aW as Jl,aX as Fl,aY as Kl,aZ as Gl,a_ as Bl,a$ as Ul,b0 as Yl,b1 as Wl,b2 as $l,z as zl,A as Xl,B as Ql,F as Zl,G as ed,J as nd,u as Ke,g as zr,an as In,I as za,b3 as rd,b4 as td,b5 as Wn,b6 as ad,b7 as id,b8 as Jr,b9 as od,ba as sd,bb as Xa,ak as Qa,j as mo,bc as yo,bd as ld,al as dd,as as ud,be as fd,bf as cd,aq as me,bg as Sr,bh as Kn,bi as cn,bj as qn,bk as po,bl as go,bm as md,C as yd,bn as jt,ao as pd,h as gd,bo as hd,bp as vr,bq as bd,ar as ho}from"./DiffBadge-f5ba12be.js";import{_ as ea,l as R,$ as Ae,a0 as w,a1 as Xr,a2 as Qr,a3 as Sd,a4 as Zr,a5 as bo,a6 as fe,e as rn,a7 as et,t as ue,a8 as oe,a9 as na,aa as vd,v as X,ab as Dd,ac as wd,ad as So,ae as vo,af as ye,ag as Do,z as ra,ah as Jt,ai as Nd,S as Le,O as Hn,N as Ln,Q as Cn,aj as Tt,b as B,X as cr,A as le,ak as wo,al as Td,am as ta,an as dn,ao as se,T as he,ap as nt,P as V,aq as Ed,ar as Ce,as as No,at as sn,au as rt,av as aa,aw as ia,M as To,ax as xd,ay as kd,az as Ad,aA as Oe,aB as Cd,aC as Vd,aD as _d,aE as Rd,aF as Md,aG as qd,aH as Pd,aI as Od,aJ as mr,aK as rr,aL as tr,aM as Eo,aN as xo,aO as Id,c as un,d as wn}from"./IndexesNodeViewer-71f18f3c.js";import{r as m}from"./index-f46741a2.js";import{T as oa,A as jn,a as Zn,b as ge,c as sa,m as la,t as Hd,C as Ld,d as tt,e as da,u as Jn,f as ko}from"./DdlTableDiffsViewer-c0933c8a.js";/* empty css              */import"./DdlTableViewer-47d4d8fc.js";import"./GraphQLOperationDiffViewer-ec42f7d3.js";import"./GraphQLOperationViewer-c53f5f81.js";import{g as jd,h as Jd,J as Fd,j as Kd,k as Gd,l as Bd,m as ua,n as Ud,S as Yd,U as fa,o as Ao,p as at,q as it,N as Co,E as Za,r as Wd,s as $d,t as zd,v as Xd,w as Vo,x as ot,C as ca,y as ma,D as ya,z as Qd,A as Zd,B as eu,F as nu,H as _o,I as Ft,K as ei,L as ru,M as mn,V as pa,P as ga,Q as ha,R as ba,T as tu,W as Ro,X as Sa,Y as va,Z as Da,_ as au,$ as Mo,a0 as iu,a1 as ou,a2 as su,a3 as qo,a4 as lu,a5 as du,a6 as uu,a7 as fu,a8 as cu,a9 as mu,aa as yu,ab as pu,ac as gu,ad as hu,ae as bu}from"./GraphPropNodeViewer-452b0f1f.js";class Su extends ea{constructor(){super()}}const ni=(r,e)=>!R(e)||Ae(e)?e:{rawValues:e},vu=(r,e)=>{if(!R(e)||Ae(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},ri=(r,e)=>R(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function ir(r){return{"/data":{"/content":()=>ir(w.MESSAGE_CONTENT),"/channel":()=>ir(w.MESSAGE_CHANNEL),"/operation":()=>ir(w.MESSAGE_OPERATION),kind:w.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:w.MESSAGE_CHANNEL_PARAMETERS,transformers:[ni]},"/servers":{"/*":()=>ir(w.SERVER),kind:w.SERVERS},"/extensions":{kind:w.EXTENSIONS,transformers:[ni]},"/bindings":{"/*":{kind:w.BINDING,transformers:[vu]},kind:w.BINDINGS,complex:!0},"/headers":{kind:w.MESSAGE_HEADERS,transformers:[ri]},"/payload":{kind:w.MESSAGE_PAYLOAD,transformers:[ri]},kind:r}}const Du="<address unknown>";class Po{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var s;let t,a;const i=e.operations??{};let o,l;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(s=c.messages)==null?void 0:s[0],y=this.isReferenceObject(f)?null:f;if(y){const p=y[this.referenceNamePropertyKey];l=typeof p=="string"?p:void 0}}}if(!o||!l)return!o&&this.logger.error("Cannot find first operation in source."),!l&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,l),t=o,a=l}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var D;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,l=Object.entries(t).filter(S=>{const[E,A]=S;return!this.isReferenceObject(A)&&E===i}).map(([,S])=>S).at(0);if(!l)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const s=this.isReferenceObject(l.channel)?{}:l.channel;let c=(l.messages??[]).filter(S=>!this.isReferenceObject(S)).find(S=>R(S)&&S[this.referenceNamePropertyKey]===o);if(!s)return this.logger.error("Cannot find channel in the operation",l),null;if(!c){const S=(D=s.messages)==null?void 0:D[o];if(c=this.isReferenceObject(S)?void 0:S,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(l),y=this.copyExtensions(s),p=this.copyExtensions(c),g=S=>R(S)?{[this.referenceNamePropertyKey]:S[this.referenceNamePropertyKey]}:void 0,b=g(c),h=g(s),v=g(l);return{...b??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:l.action,address:s.address??Du,data:{content:{...c.headers?{headers:c.headers}:{},...p?{extensions:p}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...h??{},...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...y?{extensions:y}:{},...s.bindings?{bindings:s.bindings}:{},...s.parameters?{parameters:this.transformParametersToJsonSchema(s.parameters)}:{},...s.servers?{servers:s.servers}:{}},operation:{...v??{},id:i,...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...l.bindings?{bindings:l.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function wu(r){return Xr(r)}const Nu=new Set([w.BINDING,w.EXTENSIONS,w.MESSAGE,w.MESSAGE_CHANNEL,w.MESSAGE_CHANNEL_PARAMETERS,w.MESSAGE_HEADERS,w.MESSAGE_OPERATION,w.MESSAGE_PAYLOAD,w.SERVER]),Dr=["title","description","summary"];class st extends Qr{createNodeMeta(e){return{...R(e)&&jr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!Sd(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,st.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Nu.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case w.BINDING:return["binding","version","protocol"];case w.EXTENSIONS:case w.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case w.MESSAGE:return[...Dr,"internalTitle","action","address"];case w.MESSAGE_CHANNEL:return[...Dr];case w.MESSAGE_OPERATION:return[...Dr];case w.MESSAGE_HEADERS:case w.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case w.SERVER:return[...Dr,"host","protocol"];default:return[]}}}const Tu="[AsyncAPI]";class Oo extends Zr{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"referenceNamePropertyKey");P(this,"operationKeys");P(this,"logger");P(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!R(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new et},a=ir(w.MESSAGE),i=wu({source:n,tree:this.tree,supportedNodeKinds:bo,createNodeFromRaw:(o,l,s,u,c)=>this.createNodeFromRaw(o,l,s,u,c),createNodeParams:(o,l,s)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:l,container:s}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l),shouldStopAfterNodeCreation:(o,l)=>R(l)&&!!l.isPrimitive});return Dn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return Tu}createTree(){return new Su}createNodeDataBuilder(){return new st}prepareSource(){return new Po(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return R(n)?n:null}resolveNodeKey(n,t){if(!R(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:fe.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:fe.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isSimpleTreeNode(n){return n.type===fe.SIMPLE}isComplexTreeNode(n){return n.type===fe.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Eu extends oa{constructor(){super()}}function ti(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const xu="x-";function Or(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(xu)}class ku extends Po{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=this.diffMetaKeys,s=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!s)return null;const u=ue(oe(e,["operations",o],this.referenceNamePropertyKey)),c=ue(oe(e,["operations",a,o],this.referenceNamePropertyKey));ue(oe(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=ue(oe(e,["operations",a,"channel",o],this.referenceNamePropertyKey));ue(oe(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),ue(oe(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=ue(oe(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),p=ue(oe(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));ue(oe(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const g=oe(e,["operations",a,"messages",i],this.referenceNamePropertyKey),b=oe(e,["operations",a,"messages"],this.referenceNamePropertyKey),h=R(g)&&na(b)?vd(b,g):void 0,v=(h&&typeof h!="symbol"?y==null?void 0:y[h]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),N=s;if(!(o in N)){const D=p==null?void 0:p.title,S=p==null?void 0:p.name,E=p==null?void 0:p.description,A=p==null?void 0:p.summary,C=f==null?void 0:f.address,M=p==null?void 0:p.headers,q=p==null?void 0:p.payload,J=N.data.content.extensions;if(J&&!(o in J)){const L=Object.keys(p??{}).reduce((j,G)=>{if(!Or(G))return j;const ae=p==null?void 0:p[G];return ae&&(j[G]=ae),j},{});N.data.content.extensions=Object.assign(J,{[o]:L})}const U=N.data.content;if(U&&!(o in U)){const L={...M?{headers:M}:{},...q?{payload:q}:{}};N.data.content=Object.assign(U,{[o]:L})}N[o]={...v?{[_]:v}:{},...D?{title:D}:{},...S?{internalTitle:S}:{},...E?{description:E}:{},...A?{summary:A}:{},...C?{address:C}:{}}}if(!(o in N.data.channel)){const D=f==null?void 0:f.title,S=f==null?void 0:f.description,E=f==null?void 0:f.summary,A=f==null?void 0:f.address,C=N.data.channel.extensions;if(C&&!(o in C)){const M=Object.keys(f??{}).reduce((q,J)=>{if(!Or(J))return q;const U=f==null?void 0:f[J];return U&&(q[J]=U),q},{});N.data.channel.extensions=Object.assign(C,{[o]:M})}N.data.channel[o]={...D?{title:D}:{},...S?{description:S}:{},...E?{summary:E}:{},...A?{address:A}:{}}}if(!(o in N.data.operation)){const D=c==null?void 0:c.title,S=c==null?void 0:c.description,E=c==null?void 0:c.summary,A=N.data.operation.extensions;if(A&&!(o in A)){const C=Object.keys(c??{}).reduce((M,q)=>{if(!Or(q))return M;const J=c==null?void 0:c[q];return J&&(M[q]=J),M},{});N.data.operation.extensions=Object.assign(A,{[o]:C})}N.data.operation[o]={...D?{title:D}:{},...S?{description:S}:{},...E?{summary:E}:{}}}return $r(N,o,l),N}hasOnlyAllowedDiffMetaSymbols(e){if(!R(e)&&!Ae(e))return!0;if(Ae(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class Au extends st{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class Cu extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const l=o.data.type;i.add(l)}return i}}class Vu extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,l=oe(t,["binding",o]);if(this.isDiffsSet(l))for(const s of l)s&&i.add(s.type);return i}}class _u extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=ue(oe(t,["parameters","properties",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=oe(t,["parameters",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=ue(oe(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class Ru extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=ue(oe(t,["extensions",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=oe(t,["headers",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=oe(t,["payload",l]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class Mu extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,l=ue(oe(t,["extensions",o]));if(l)for(const s of Object.values(l))s&&i.add(s.type);return i}}var qt;let qu=(qt=class{static instance(e){switch(e){case w.BINDING:if(!this.instances.has(w.BINDING)){const n=new Vu;this.instances.set(w.BINDING,n)}return this.instances.get(w.BINDING);case w.MESSAGE_CONTENT:if(!this.instances.has(w.MESSAGE_CONTENT)){const n=new Ru;this.instances.set(w.MESSAGE_CONTENT,n)}return this.instances.get(w.MESSAGE_CONTENT);case w.MESSAGE_CHANNEL:if(!this.instances.has(w.MESSAGE_CHANNEL)){const n=new _u;this.instances.set(w.MESSAGE_CHANNEL,n)}return this.instances.get(w.MESSAGE_CHANNEL);case w.MESSAGE_OPERATION:if(!this.instances.has(w.MESSAGE_OPERATION)){const n=new Mu;this.instances.set(w.MESSAGE_OPERATION,n)}return this.instances.get(w.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Cu;this.instances.set(null,n)}return this.instances.get(null)}}},P(qt,"instances",new Map),qt);class Pu extends Zn{aggregate(e,n){}}class Ou extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=ue(oe(e,[a],t));if(!i)return;const o={};let l=!1;for(const s of Object.keys(e)){const u={},c=i[s];c&&(l=!0,this.aggregateWholeNodeDiff(c,u),o[s]=u[_])}return l?o:void 0}}class Iu extends Zn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=ue(oe(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,l={};if(i){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(i)&&(s={...s,backgroundColor:T.Gray},u={...u,backgroundColor:T.Green}),x(i)&&(s={...s,backgroundColor:T.Red},u={...u,backgroundColor:T.Gray}),O(i)&&(s={...s,backgroundColor:T.Yellow},u={...u,backgroundColor:T.Yellow}),l.headers={data:i,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}if(o){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(o)&&(s={...s,backgroundColor:T.Gray},u={...u,backgroundColor:T.Green}),x(o)&&(s={...s,backgroundColor:T.Red},u={...u,backgroundColor:T.Gray}),O(o)&&(s={...s,backgroundColor:T.Yellow},u={...u,backgroundColor:T.Yellow}),l.payload={data:o,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}return l}}class Hu extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=ue(oe(e,[a],t));if(!i)return;const o={};let l=!1;for(let s=0;s<e.length;s++){const c=e[s][t];if(!c)continue;const f={},y=i[s];y&&(l=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[_])}return l?o:void 0}}class Io{static instance(e){switch(e){case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new Ou),this.instances.get(w.BINDINGS);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Hu),this.instances.get(w.SERVERS);case w.MESSAGE_CONTENT:return this.instances.has(w.MESSAGE_CONTENT)||this.instances.set(w.MESSAGE_CONTENT,new Iu),this.instances.get(w.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new Pu;this.instances.set(null,n)}return this.instances.get(null)}}}P(Io,"instances",new Map);class Lu extends ge{aggregate(e){const n=e[_];if(n){const f=n.data,p={type:f.type,causedAt:[]};return O(f)?(p.causedAt=f.beforeDeclarationPaths[0],{[H.TitleRow]:p,[H.BindingVersionRow]:p}):(x(f)?p.causedAt=f.beforeDeclarationPaths[0]:k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),{[H.TitleRow]:p,[H.DescriptionRow]:p,[H.SummaryRow]:p,[H.AddressRow]:p,[H.BindingVersionRow]:p,[H.ServerAddressRow]:p})}const t=e.title,a=e.description,i=e.summary,o=e.address,l=e.version,s=e.host,u=e.protocol,c={};if(t){const f=t.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.TitleRow]=p}if(a){const f=a.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.DescriptionRow]=p}if(i){const f=i.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.SummaryRow]=p}if(o){const f=o.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.AddressRow]=p}if(l){const f=l.data,p={type:f.type,causedAt:[]};(x(f)||O(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[H.BindingVersionRow]=p}if(s||u){const f=s==null?void 0:s.data,y=u==null?void 0:u.data,p=ge.maxDiffByDiffType(f,y);if(p){const g={type:p.type,causedAt:[]};(x(p)||O(p))&&(g.causedAt=p.beforeDeclarationPaths[0]),k(p)&&(g.causedAt=p.afterDeclarationPaths[0]),c[H.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class Ho{static instance(e){switch(e){default:return new Lu}}}P(Ho,"instances",new Map);class ju extends sa{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!x(n)&&!O(n)&&!ln(n))return!1;return!0}}class Ju{static instance(e){switch(e){default:return new ju}}}class Vn extends X{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!R(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const p=o.diffs[_];if(p&&(k(p.data)||x(p.data)))return u[_]={...p,inherited:!0},u;{const g=o.descendantDiffs[a];if(g)return u[_]=g,u}}else if(i){const p=i.diffs[_];if(p&&(k(p.data)||x(p.data)))return u[_]={...p,inherited:!0},u;{const g=i.descendantDiffs[a];if(g)return u[_]=g,u}}if(!X.isDiffsRecord(s))return;const c=s.title;c&&this.aggregateTextDiff(c,"title",u);const f=s.description;f&&this.aggregateTextDiff(f,"description",u);const y=s.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;k(n)&&(i={...i,isContentVisible:!1,backgroundColor:T.Gray},o={...o,isContentVisible:!0,backgroundColor:T.Green}),x(n)&&(i={...i,isContentVisible:!0,backgroundColor:T.Red},o={...o,isContentVisible:!1,backgroundColor:T.Gray}),(ln(n)||O(n))&&(i={...i,isContentVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow},o={...o,isContentVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}}class Fu extends Vn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let l=super.aggregate(e,n,t,a,i);if(l){const u=l[_];if(u){const{data:c,styles:f}=u;k(c)&&(f.after.borderShadowColor=T.Green),x(c)&&(f.before.borderShadowColor=T.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,l)}}l||(l={});const s=oe(e,["binding"]);if(R(s)){const u=s[o];if(X.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",l)}}return Object.keys(l).length>0?l:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(k(t)&&R(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(x(t)&&R(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class Ku extends Vn{aggregateByDescendantDiffs(e,n,t){var u;if(n[_])return n;if(!R(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const l=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[_]=l(),n;let s=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==s){s=I.replace;break}return s===I.replace?(n[_]=l(),n):(n[_]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:x(n)?n.beforeDeclarationPaths:[],beforeValue:x(n)?n.beforeValue:void 0,afterDeclarationPaths:k(n)?n.afterDeclarationPaths:[],afterValue:k(n)?n.afterValue:void 0,action:I.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:T.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:T.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}),a)}}class Gu extends Vn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[_])return n;const i=oe(e,["rawValues"]);if(!R(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!X.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray}),n[_]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:bn},n}}class Bu extends Vn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(X.isDiffsRecord(s)){const u=s[_];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};k(u)&&(f={...f,isContentVisible:!1,backgroundColor:T.Gray},y={...y,isContentVisible:!0,backgroundColor:T.Green}),x(u)&&(f={...f,isContentVisible:!0,backgroundColor:T.Red},y={...y,isContentVisible:!1,backgroundColor:T.Gray}),l[_]={data:u,highlightingMode:Ie,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=s.address;c&&this.aggregateTextDiff(c,"address",l)}return Object.keys(l).length>0?l:void 0}}class Uu extends Vn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[_])return n;const i=oe(e,["rawValues","properties"]);if(!R(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!X.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Green}),x(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray}),n[_]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:Ie},n}}class Yu extends Vn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!R(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(X.isDiffsRecord(s)){const u=s.host;u&&this.aggregateTextDiff(u,"host",l);const c=s.protocol;c&&this.aggregateTextDiff(c,"protocol",l)}return Object.keys(l).length>0?l:void 0}}class Wu extends Vn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[_])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[_]=o,n}}class Kt{static instance(e){switch(e){case w.BINDING:return this.instances.has(w.BINDING)||this.instances.set(w.BINDING,new Fu),this.instances.get(w.BINDING);case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new Ku),this.instances.get(w.BINDINGS);case w.EXTENSIONS:return this.instances.has(w.EXTENSIONS)||this.instances.set(w.EXTENSIONS,new Gu),this.instances.get(w.EXTENSIONS);case w.MESSAGE:return this.instances.has(w.MESSAGE)||this.instances.set(w.MESSAGE,new Bu),this.instances.get(w.MESSAGE);case w.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(w.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(w.MESSAGE_CHANNEL_PARAMETERS,new Uu),this.instances.get(w.MESSAGE_CHANNEL_PARAMETERS);case w.SERVER:return this.instances.has(w.SERVER)||this.instances.set(w.SERVER,new Yu),this.instances.get(w.SERVER);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Wu),this.instances.get(w.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new Vn),this.instances.get(null)}}}P(Kt,"instances",new Map);const $u="[AsyncAPI][WithDiffs]";class zu extends Oo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return $u}createTree(){return new Eu}createNodeDataBuilder(){return new Au}prepareSource(){return new ku(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return na(n)?n:null}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!ti(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Kt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return Ju.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Io.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return Kt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return qu.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return Ho.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),la(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return bo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ti(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Xu extends ea{constructor(){super()}}const Q={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Lo=Object.values(Q),zn="unknown",Qu="any",Zu="nothing",ne={UNKNOWN:zn,ANY:Qu,NOTHING:Zu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},ef=Object.values(ne);function nf(r){return!r||!Dd(r)?!1:ef.some(e=>e===r)}function rf(r){return R(r)&&jr in r}function Et(r,e){const n=r[e];return Ae(n)&&n.length>0}function er(r){return typeof r=="boolean"}function Nn(r){return r==null||typeof r=="boolean"?null:r}const tf=[ne.STRING,ne.NUMBER,ne.INTEGER,ne.BOOLEAN];function wa(r){return!!r&&tf.includes(r)}const af=[ne.ANY,ne.NOTHING];function of(r){return!!r&&af.includes(r)}function Fr(r){return!R(r)||Ae(r)?!1:Et(r,"allOf")||Et(r,"oneOf")||Et(r,"anyOf")}function ai(r){return R(r)&&Reflect.ownKeys(r).length>0}function xt(r){return Ae(r)&&r.length>0}function jo(r,e){if(!R(r)&&!Ae(r))return!1;if(Ae(r))return r.length>0;const n=r;if(xt(n[Pt])||xt(n[Ot])||xt(n[It])||ai(n[qi])||ai(n[Pi]))return!0;const t=n[Oi];if(t!==void 0&&t!==!1||n[Ii]!==void 0)return!0;const a=n[Hi];return a!==void 0&&a!==!1}const sf="extensions",lf="location",Xe={root:Q.ROOT,definition:Q.DEFINITION,property:Q.PROPERTY,additionalProperties:Q.ADDITIONAL_PROPERTIES,patternProperty:Q.PATTERN_PROPERTY,items:Q.ITEMS,item:Q.ITEM,additionalItems:Q.ADDITIONAL_ITEMS,allOf:Q.ALL_OF,anyOf:Q.ANY_OF,oneOf:Q.ONE_OF},df=(r,e)=>{if(!R(e)||Ae(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},uf="x-";function Kr(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(uf)}function ff(r,e){if(!R(e)||Ae(e))return e;const n=Reflect.ownKeys(e),t=n.filter(l=>Kr(l));if(t.length===0)return e;const a=new Set(t),i=t.reduce((l,s)=>(Kr(s)&&(l[s]=e[s]),l),{}),o={};for(const l of n)typeof l=="string"&&a.has(l)||(o[l]=e[l]);return o.extensions=i,o}const cf=[df,ff];function Qe(r=Xe.root){return{"/allOf":{"/*":()=>Qe(Xe.allOf)},"/oneOf":{"/*":()=>Qe(Xe.oneOf)},"/anyOf":{"/*":()=>Qe(Xe.anyOf)},"/properties":{"/*":()=>Qe(Xe.property)},"/items":()=>({...Qe(Xe.items),"/*":({key:e})=>wd(e)?Qe(Xe.item):{}}),"/additionalProperties":()=>Qe(Xe.additionalProperties),"/additionalItems":()=>Qe(Xe.additionalItems),"/patternProperties":{"/*":()=>Qe(Xe.patternProperty)},kind:r,transformers:cf}}function mf(r){return Xr(r)}const yf={type:ne.ANY};function pf(r,e){if(er(e)){if(e===!1)return!1;if(e===!0&&r===Q.ADDITIONAL_PROPERTIES)return yf}}function gf(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function ce(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const xe=class xe extends Qr{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case ne.UNKNOWN:case ne.ANY:case ne.NOTHING:case ne.NULL:case ne.BOOLEAN:return xe.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case ne.STRING:return[...xe.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Lt,oo,so,lo,lf];case ne.NUMBER:case ne.INTEGER:return[...xe.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Lt,no,ro,to,ao,io];case ne.OBJECT:return[...xe.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Xi,Qi,Zi,eo];case ne.ARRAY:return[...xe.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Wi,$i,zi];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=gf(n,t),o=rf(e)?{brokenRef:String(e.$ref)}:{};return!Fr(e)&&R(e)?{...this.pick(e,xe.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=pf(e,t);if(i!==void 0)return i;if(er(t))return t;if(!R(t)||Fr(t))return null;const o=nf(t.type)?t.type:ne.UNKNOWN;return o===ne.UNKNOWN||o===ne.ANY||o===ne.NOTHING||o===ne.NULL||o===ne.BOOLEAN?{...a(t,xe.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.STRING?{...a(t,xe.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.NUMBER||o===ne.INTEGER?{...a(t,xe.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.OBJECT?{...a(t,xe.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.ARRAY?{...a(t,xe.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};P(xe,"JSON_SCHEMA_TREE_NODE_META_PROPS",[Li,ji,Ji,Ol]),P(xe,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Ht,Fi,Ki,Gi,Bi,Ui,Yi,sf]);let Gr=xe;const hf="[JSON Schema]";class Jo extends Zr{constructor(n){const{source:t,materializeDepth:a,logger:i=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new So);P(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!R(n))return this.tree;const t={parent:null,container:null,ancestors:new et,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=Qe();return this.crawlHooks=mf({source:n,tree:this.tree,supportedNodeKinds:Lo,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o,l)=>({value:er(i)||R(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:l}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>Ae(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:jo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),Dn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:vo(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};Dn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return hf}createTree(){return new Xu}createNodeDataBuilder(){return new Gr((n,t)=>this.pick(n,t))}prepareSource(){return R(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u,value:c}=o;if(i||R(c)&&Fr(c)){const b=this.createNodeMeta(t,o),h={type:fe.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:b,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,h)}const y=this.createNodeValue(t,a,o),p=this.createNodeMeta(t,o),g={type:fe.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:y,meta:p,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,g)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===fe.SIMPLE}isComplexTreeNode(n){return n.type===fe.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class bf extends oa{constructor(){super()}}class Sf{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!R(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return $r(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class vf extends Gr{constructor(e){super(e)}}class Df extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!k(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class Fo{static instance(e){return this.kindAnyInstance}}P(Fo,"kindAnyInstance",new Df);const wf=["properties","patternProperties","allOf","anyOf","oneOf","items"],Nf=new Set(["properties","patternProperties"]);class Tf extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!R(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[l,s]of Object.entries(o))!s||l===_||!X.isDiff(s)||(i[l]=this.buildDescendantDiffMetadata(s));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=ue(Reflect.get(n,t));i&&a.push(i);for(const o of wf){const l=Reflect.get(n,o);if(!R(l)&&!Ae(l))continue;const s=ue(Reflect.get(l,t));if(s){a.push(s);continue}const u=i==null?void 0:i[o];if(u&&(k(u)||x(u))&&(Nf.has(o)?R(l):Ae(l))){const y=this.decomposeWholeChildBagDiff(l,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=Ae(n)?n.map((o,l)=>String(l)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return k(n)?{type:n.type,scope:n.scope,description:n.description,action:I.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:I.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const l=Ie;return k(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:T.Green,borderShadowColor:T.Green},o={...o,increaseLevel:!0}),x(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:T.Red,borderShadowColor:T.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},o={...o,increaseLevel:!1}),O(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:l}}}class Ko{static instance(e){return this.kindAnyInstance}}P(Ko,"kindAnyInstance",new Tf);const Sn="titleRow",Go=["type","format","title"],$n=["readOnly","writeOnly","deprecated"];class Ef extends ge{aggregate(e){const n=e[_],t={};return n?(t[H.TitleRow]=this.buildNodeDiffsSeverity(n),t[H.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[H.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",H.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",H.NestingIndicatorRow,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var a,i,o;const t=e;for(const l of Object.values(ye)){const s=ge.maxChangedPropertyMetaDataByDiffType((a=t.validationRowDiffs)==null?void 0:a[l],(i=t.validationRowColorizingDiffs)==null?void 0:i[l],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[l])??{}));s&&(n[Do[l]]=this.buildNodeDiffsSeverity(s))}}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[Sn],...Object.values(t.typeLabelFieldDiffs??{})],i=ge.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[H.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return x(n)||O(n)?t.causedAt=n.beforeDeclarationPaths[0]:k(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class xf extends Ef{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);a&&(n[H.DefaultRow]=this.buildNodeDiffsSeverity(a))}applyEnumRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));a&&(n[H.EnumRow]=this.buildNodeDiffsSeverity(a))}applyExamplesRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));a&&(n[H.ExamplesRow]=this.buildNodeDiffsSeverity(a))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,a=ge.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));a&&(n[H.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(a))}}class Bo{static instance(e){return this.kindPropertyInstance}}P(Bo,"kindPropertyInstance",new xf);function kt(r,e){for(const n of Object.values(e??{}))ra(n)&&r.add(n.data.type)}class kf extends sa{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,l]of Object.entries(e))if(l){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){kt(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){kt(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const s of Object.values(i.validationRowValueDiffs??{}))kt(a,s);continue}ra(l)&&a.add(l.data.type)}return a}}class Uo{static instance(e){return this.kindAnyInstance}}P(Uo,"kindAnyInstance",new kf);const Br={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Af(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Br.OAS_3_1_NUMERIC_EXCLUSIVE:Br.OAS_3_0_BOOLEAN_EXCLUSIVE}function Cf(r){return r.dialect??Af(r)}const Vf="?",be="{value}",an="{exclusive_value}",yn=">",wr=">=",pn="<",Nr="<=",Re=1,Me=2,qe=4,Pe=8,ii={0:{lower:void 0,upper:void 0},[Re]:{lower:`${wr} ${be}`,upper:void 0},[Me]:{lower:`${yn} ${an}`,upper:void 0},[qe]:{lower:void 0,upper:`${Nr} ${be}`},[Pe]:{lower:void 0,upper:`${pn} ${an}`},[Me|Re]:{lower:`${yn} ${be}`,upper:void 0},[Me|qe]:{lower:`${yn} ${an}`,upper:`${Nr} ${be}`},[Me|Pe]:{lower:`${yn} ${an}`,upper:`${pn} ${an}`},[Pe|Re]:{lower:`${wr} ${be}`,upper:`${pn} ${an}`},[Pe|qe]:{lower:void 0,upper:`${pn} ${be}`},[qe|Re]:{lower:`${wr} ${be}`,upper:`${Nr} ${be}`},[Me|Re|qe]:{lower:`${yn} ${be}`,upper:`${Nr} ${be}`},[Me|Re|Pe]:{lower:`${yn} ${be}`,upper:`${pn} ${an}`},[Me|qe|Pe]:{lower:`${yn} ${an}`,upper:`${pn} ${be}`},[Pe|Re|qe]:{lower:`${wr} ${be}`,upper:`${pn} ${be}`},[Re|Me|qe|Pe]:{lower:`${yn} ${be}`,upper:`${pn} ${be}`}};function Gt(r){return r!=null}function oi(r){return r!==void 0&&r!==!1}function _f(r,e,n){return(r&(Re|Me))!==(Re|Me)||n===void 0||typeof e!="number"?r:n>=e?r&~Re:r&~Me}function Rf(r,e,n){return(r&(qe|Pe))!==(qe|Pe)||n===void 0||typeof e!="number"?r:n<=e?r&~qe:r&~Pe}function si(r,e,n){return r.replace(be,`${e}`).replace(an,Gt(n)?`${n}`:Vf)}function Mf(r,e){return Gt(r)||Gt(e)}function qf(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=Re),oi(t)&&(i|=Me),n!==void 0&&(i|=qe),oi(a)&&(i|=Pe),i}function Yo(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&Re)&&(n&=~Me),typeof e.exclusiveMax!="number"&&!(n&qe)&&(n&=~Pe),n}function Pf(r,e){return Yo(r,e)}function Of(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=_f(r,e.min,n);return a=Rf(a,e.max,t),a}const If={[Br.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Yo},[Br.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Pf}};function Hf(r,e){const n=If[e];let t=qf(r);return t=n.applyExclusiveSuppression(t,r),Of(t,r)}function en(r){const e={data:{},visible:!1},n=Cf(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=Hf(r,n),o=i in ii?{...ii[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=si(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=si(o.upper,r.max,a)),e.visible=Mf(e.data.lower,e.data.upper),e}const lr="0",lt="1";function Gn(r){return r!=null}function Tr(r){return r!==void 0&&r!==!1}function Er(r){return r!==void 0&&r!==!1}function xr(r){return!!r&&k(r)}function kr(r){return!!r&&x(r)}function Bn(r){return!!r&&O(r)}function li(r){if(r&&(k(r)||O(r)))return r.afterValue}function di(r){if(!r||!(x(r)||O(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function ui(r){if(!r||!(x(r)||O(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function Na(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,l=e.exclusiveMinimum,s=e.maximum,u=e.exclusiveMaximum,c=Gn(n),f=Gn(a),y=Gn(o),p=Gn(s),g=Gn(l),b=Gn(u),h=xr(o),v=kr(o),N=Bn(o),D=xr(s),S=kr(s),E=Bn(s),A=en({min:c&&(!y||h||N)?n:void 0,max:f&&(!p||D||E)?a:void 0,exclusiveMin:Tr(t)&&(!g||xr(l)||Bn(l)&&Er(li(l)))?t:void 0,exclusiveMax:Tr(i)&&(!b||xr(u)||Bn(u)&&Er(li(u)))?i:void 0}).data;if(!(y||g||p||b))return{before:{...A},after:A};let M,q,J,U;if(c&&!y&&(M=n),(v||N)&&(M=di(o)),f&&!p&&(q=a),(S||E)&&(q=di(s)),Tr(t)&&!g&&(J=t),Bn(l)||kr(l)){const j=ui(l);Er(j)&&(J=j)}if(Tr(i)&&!b&&(U=i),Bn(u)||kr(u)){const j=ui(u);Er(j)&&(U=j)}return{before:en({min:M,max:q,exclusiveMin:J,exclusiveMax:U}).data,after:A}}function Lf(r,e){if(!e)return;const n=r==="lower"?lr:lt;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function fi(...r){for(const e of r)if(e)return e.type}function ci(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:I.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:I.remove,beforeValue:e}:{type:r,action:I.replace,beforeValue:e,afterValue:n}}function Wo(r,e){const{before:n,after:t}=Na(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return I.add;if(a&&!i)return I.remove}function $o(r,e){const{before:n,after:t}=Na(r,e),a=fi(e.minimum,e.exclusiveMinimum),i=fi(e.maximum,e.exclusiveMaximum),o={},l=ci(a,n.lower,t.lower);l&&(o[lr]=l);const s=ci(i,n.upper,t.upper);return s&&(o[lt]=s),o}function jf(r,e){const n=$o(r,e);return[n[lr],n[lt]].filter(t=>t!==void 0)}function Jf(r,e){if(Wo(r,e)!==void 0)return!1;const n=jf(r,e);if(n.length!==1)return!1;const t=n[0];return k(t)||x(t)}function Ff(r,e){return Jf(r,e)}function mi(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:l}of a){if(!o)continue;const s=o!==l?Lf(i,e):void 0;t.push({text:o,valueDiffKey:s})}return t}function Kf(r,e,n,t,a){const{before:i,after:o}=Na(r,e),l=n===z;if(t){const c=t.data;if(k(c)||x(c))return mi(l?i:o,a,l?o:i)}return mi(l?i:o,a,l?o:i)}function Gf(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(k(e)?e.afterValue:x(e)?e.beforeValue:O(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function Bf(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Gf(n,t):!0:!1})}function yi(r){return typeof r=="number"||typeof r=="boolean"}function Uf(r){if(!R(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),yi(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),yi(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Bt(r){const e=Uf(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function tn(r){return typeof r=="string"?r:JSON.stringify(r)}function zo(r,e,n){switch(r){case ye.VALUE_LENGTH:case ye.PROPERTIES_COUNT:case ye.ITEMS_COUNT:{if(e.startsWith("min"))return en({min:Number(n)}).data.lower??tn(n);if(e.startsWith("max"))return en({max:Number(n)}).data.upper??tn(n);break}case ye.VALUE_RANGE:{if(e==="minimum")return en({min:Number(n)}).data.lower??tn(n);if(e==="maximum")return en({max:Number(n)}).data.upper??tn(n);if(e==="exclusiveMinimum")return en({exclusiveMin:typeof n=="number"?n:!0}).data.lower??tn(n);if(e==="exclusiveMaximum")return en({exclusiveMax:typeof n=="number"?n:!0}).data.upper??tn(n);break}case ye.VALUE_PATTERN:case ye.VALUE_MULTIPLE_OF:case ye.UNIQUE_ITEMS:return tn(n);default:return tn(n)}return tn(n)}function Yf(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Wf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function Xo(r,e){return e.length<=1||Yf(r)?0:Wf(r)?1:0}class $f extends X{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Yellow}});P(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!R(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const h=o.diffs[_];if(h&&(k(h.data)||x(h.data)))return u[_]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u;const v=o.descendantDiffs[a];if(v)return u[_]=v,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u}else if(i){const h=i.diffs[_];if(h&&(k(h.data)||x(h.data)))return u[_]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u;const v=i.descendantDiffs[a];if(v)return u[_]=v,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u}if(!X.isDiffsRecord(s))return;const c=s[_];c&&this.aggregateTextDiff(c,_,u);const f=s.title,y=s.format,p=s.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:f},u);const g=s.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const h of $n){const v=s[h];X.isDiff(v)&&this.aggregateMetaFlagDiff(v,h,u)}return R(n)&&this.aggregateValidationRowDiffs(n,s,u),this.aggregateExtensionsDiffs(s,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,a){const i=new Set;for(const l of Object.values(t.typeLabelFieldDiffs??{}))l!=null&&l.data&&i.add(l.data);const o=new Set;for(const l of Hd(n,a))i.has(l)||l!=null&&l.type&&o.add(l.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[_];if(i&&(k(i.data)||x(i.data))){t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const p=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(p){const g=this.resolveTypePrimitivenessCrossing(o),b=g&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,g):this.asReplaceRowColorizingDiff(p);t.nestingIndicatorRowColorizingDiff={...b,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!R(n))return;const l=this.collectJsonSchemaChildKeys(n);if(l.length===0)return;const s=l.map(p=>a[p]);if(s.some(p=>!p))return;const[u,...c]=s;if(!k(u.data)&&!x(u.data))return;const f=u.data.action;c.every(p=>p.data.action===f&&(k(p.data)||x(p.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return k(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:x(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return wa(n)||of(n)}resolveTypePrimitivenessCrossing(n){var s;const t=(s=n.type)==null?void 0:s.data;if(!t||!O(t))return;const a=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(a),l=this.isChildlessTypeValue(i);if(o!==l)return{beforeIsPrimitive:o,afterIsPrimitive:l}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:a}=n;return O(a)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:I.remove,beforeValue:!0,beforeDeclarationPaths:a.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:I.add,afterValue:!0,afterDeclarationPaths:a.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");R(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");R(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const l=Reflect.get(n,"additionalProperties");l!=null&&t.push("additionalProperties");const s=Reflect.get(n,"additionalItems");return s!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of Go){const o=n[i];X.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[_];if(t&&(k(t.data)||x(t.data))){n[Sn]=t;return}for(const a of $n){const i=n[a];if(i){n[Sn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[Sn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return O(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:T.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:T.Green},removeBefore:{textHighlighterColor:T.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return k(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Green}),x(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray}),(ln(n)||O(n))&&(t={...t,isContentVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow},a={...a,isContentVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}asReplaceRowColorizingDiff(n){const{data:t}=n;return O(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return k(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}:x(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),a=typeof n.beforeValue=="boolean",i=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:a?void 0:T.Yellow,borderShadowColor:a?T.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:i?void 0:T.Yellow,borderShadowColor:i?T.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:I.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:I.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[_];return!!t&&(k(t.data)||x(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of $n)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return O(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:I.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:I.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[_];if(!(!a||!(k(a.data)||x(a.data)))&&R(n))for(const[i,o]of Object.entries(Jt)){const l=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[l]||(t.validationRowColorizingDiffs[l]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateWholeNodeInheritedExtensionsDiffs(n,t){const a=t[_];if(!a||!(k(a.data)||x(a.data))||!R(n))return;const i=Reflect.get(n,"extensions");if(!R(i))return;const o=Object.keys(i).filter(Kr);if(o.length===0)return;const{data:l}=a,s=i,u={};if(k(l))for(const c of o)u[c]={type:l.type,scope:l.scope,description:l.description,action:I.add,afterValue:s[c],afterDeclarationPaths:l.afterDeclarationPaths??[]};else if(x(l))for(const c of o)u[c]={type:l.type,scope:l.scope,description:l.description,action:I.remove,beforeValue:s[c],beforeDeclarationPaths:l.beforeDeclarationPaths??[]};t.extensionsDiffs=u}aggregateExtensionsDiffs(n,t){const a={};for(const[i,o]of Object.entries(n))!Kr(i)||!X.isDiff(o)||(a[i]=o);Object.keys(a).length>0&&(t.extensionsDiffs=a)}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(Jt)){const l=o.filter(S=>t[S]);if(l.length===0)continue;const s=i,u=s===ye.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=s===ye.VALUE_RANGE?Bf(l,t):l,f=l.map(S=>t[S]).filter(S=>X.isDiff(S));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Bt(n),p=u?Wo(y,u):void 0;if(u&&(p===I.add||p===I.remove)){const S=p===I.add?this.mergeDiffActionFragment(f,I.add,this.resolveWholeRowDisplayValues(s,l,f,I.add)):this.mergeDiffActionFragment(f,I.remove,this.resolveWholeRowDisplayValues(s,l,f,I.remove)),E=this.buildChangedPropertyMetaDataFromDiff(S);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(u&&Ff(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s);continue}const g=o.some(S=>!l.includes(S)&&Reflect.get(n,S)!==void 0),b=!g&&f.every(k),h=!g&&f.every(x);if(b){const S=this.resolveWholeRowDisplayValues(s,l,f,I.add),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,I.add,S));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(h){const S=this.resolveWholeRowDisplayValues(s,l,f,I.remove),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,I.remove,S));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s));continue}const v=c.map(S=>t[S]).filter(S=>X.isDiff(S)).map(S=>this.buildChangedPropertyMetaDataFromDiff(S)),N=ge.maxChangedPropertyMetaDataByDiffType(...v);if(!N)continue;const D=this.buildValidationRowValueDiffs(s,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[s]=D,a.validationRowColorizingDiffs[s]=this.asReplaceRowColorizingDiff(N),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,s)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=$o(Bt(n),t),l=[lr,lt];if(!l.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of l){const y=o[f];if(!y||c[f])continue;const p=f===lr?"lower":"upper",g=this.attachValueRangeChipDiffPaths(y,p,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const l=n.map(f=>t[f]).filter(f=>X.isDiff(f));if(l.length===0)return;const s=l.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=ge.maxChangedPropertyMetaDataByDiffType(...s);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],l=[];for(const s of i)s&&("beforeDeclarationPaths"in s&&s.beforeDeclarationPaths&&o.push(...s.beforeDeclarationPaths),"afterDeclarationPaths"in s&&s.afterDeclarationPaths&&l.push(...s.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...l.length>0?{afterDeclarationPaths:l}:{}}}buildValueRangeLabelChipDiffMetadata(n){return O(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:T.Green},removeBefore:{borderShadowColor:T.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=Nd[n],o={};for(const l of t){const s=a[l];if(!X.isDiff(s)||i[l]===void 0)continue;const c=this.buildListValueDiffMetadata(s);o[l]=ge.maxChangedPropertyMetaDataByDiffType(o[l],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((l,s)=>{const u=a[s],c=i===I.add?k(u)?u.afterValue:void 0:x(u)?u.beforeValue:void 0;c!==void 0&&o.push(zo(n,l,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(s=>x(s)||O(s)?s.beforeDeclarationPaths:[]),l=n.flatMap(s=>k(s)||O(s)?s.afterDeclarationPaths:[]);return t===I.add?{type:i.type,scope:i.scope,description:i.description,action:I.add,afterValue:a,afterDeclarationPaths:l}:{type:i.type,scope:i.scope,description:i.description,action:I.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return O(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:T.Green},removeBefore:{borderShadowColor:T.Red,isFontMuted:!0}})}}class zf extends $f{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!R(e))return o;const{diffsMetaKey:l}=n,s=Reflect.get(e,l),u=X.isDiffsRecord(s),c=this.resolveWholeListFieldDiff(e,"enum",l),f=this.resolveWholeListFieldDiff(e,"examples",l),y=this.resolveListFieldItemDiffs(e,"enum",l),p=this.resolveListFieldItemDiffs(e,"examples",l),g=this.resolveAllowedAdditionalPropertyNamesDiff(t,a,l),b=!!c||!!f||Object.keys(y).length>0||Object.keys(p).length>0||!!g;if(!o&&!u&&!b){const v=this.resolveRequiredMetaDiff(t,a,l);if(!v)return;const N={required:v};return this.aggregatePropertyTitleRowDiff(N),N}const h={...o??{}};if(u){const v=s.default;X.isDiff(v)&&(h.default=this.buildDefaultValueDiffMetadata(v))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(p).length>0&&(h.examplesValueDiffs=p),g!=null&&g.diff&&(h.allowedAdditionalPropertyNamesDiff=g.diff),Object.keys((g==null?void 0:g.valueDiffs)??{}).length>0&&(h.allowedAdditionalPropertyNamesValueDiffs=g.valueDiffs),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(g==null?void 0:g.mergedValues,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const v=this.resolveRequiredMetaDiff(t,a,l);v&&(h.required=v)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[_];if(n&&(k(n.data)||x(n.data))){e[Sn]=n;return}for(const a of $n){const i=e[a];if(i){e[Sn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[Sn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!R(i)&&!R(a))return;const o=String(e),l=R(i)?Reflect.get(i,t):void 0,s=R(i)?Reflect.get(i,"required"):void 0,u=R(a)&&"required"in a?a.required:void 0,c=Array.isArray(s)?s:Array.isArray(u)?u:void 0;if(X.isDiffsRecord(l)){const y=l.required;if(X.isDiff(y)){const p=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(p)return p}if(X.isDiffsRecord(y)){const p=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(p)return p}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(k(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(x(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(O(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if(X.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!X.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if(X.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(X.isDiff(t)){if(k(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(x(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return O(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!X.isDiffsRecord(a))return;const i=a[n];if(X.isDiff(i)){if(k(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(x(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return X.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var f;if(e!==Q.ADDITIONAL_PROPERTIES||!n)return;const a=(f=n.meta())==null?void 0:f._fragment;if(!R(a))return;const i=Reflect.get(a,"propertyNames"),o=Reflect.get(a,t),l=X.isDiffsRecord(o)?o.propertyNames:void 0;if(X.isDiff(l)){const y=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(l);if(y)return y}if(!R(i))return;const s=Reflect.get(i,"enum");if(!Array.isArray(s)||s.length===0)return;const u=this.resolveWholeListFieldDiff(i,"enum",t),c=this.resolveListFieldItemDiffs(i,"enum",t);if(!(!u&&Object.keys(c).length===0))return{diff:u,valueDiffs:Object.keys(c).length>0?c:void 0,mergedValues:s}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(k(e)&&R(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(x(e)&&R(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i){if(!Array.isArray(e)||e.length===0)return;const o=n[_];if(o&&(k(o.data)||x(o.data))){n[i]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const l=n[t];if(l){n[i]=l;return}const s=n[a];if(!s||Object.keys(s).length===0)return;const u=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(s));u&&(n[i]=this.asReplaceRowColorizingDiff(u))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[_];if(i&&(k(i.data)||x(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const l=o.data;if(k(l)||x(l)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(l);return}O(l)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Ut{static instance(e){return this.kindPropertyInstance}}P(Ut,"kindPropertyInstance",new zf);const Xf="[JSON Schema][WithDiffs]";class Qf extends Jo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Xf}createTree(){return new bf}createNodeDataBuilder(){return new vf((n,t)=>this.pick(n,t))}prepareSource(){return new Sf(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!ce(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Ut.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Uo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Ko.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Ut.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Fo.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Bo.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),la(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Lo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ce(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function At(r){return!!r&&Object.keys(r).length>0}function pi(r){return!!r&&r.size>0}function Zf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function gi(r,e){if(!(At(r.diffs)||At(r.descendantDiffs)||pi(r.diffsSummary)||pi(r.descendantDiffsSummary)||At(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=Zf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Yt(r,e,n){if(r.isCycle)return gi(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return gi(r,e)?!0:r.type===fe.COMPLEX?r.nestedNodes().some(t=>Yt(t,e,n)):r.childrenNodes().some(t=>Yt(t,e,n))}finally{n.visiting.delete(r.id)}}function Qo(r,e){return Yt(r,e,{visiting:new Set})}function ec(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),l=r.map((s,u)=>({kind:"node",node:s,sourceIndex:u}));return{memberships:o,visibleSequence:l}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const l=r[o].id,s=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:l,isBlockStart:u===o,blockSize:s});a.push({kind:"placeholder",unchangedBlockId:l,blockSize:s,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function nc(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return ec(r,a=>Qo(a,t),n)}function Zo(r){return r.kind===w.MESSAGE}function rc(r){return r.kind===w.MESSAGE_SECTION_SELECTOR}function es(r){return r.kind===w.MESSAGE_CONTENT}function tc(r){return r.kind===w.MESSAGE_HEADERS&&r.key==="headers"}function ac(r){return r.kind===w.MESSAGE_PAYLOAD&&r.key==="payload"}function ns(r){return r.kind===w.MESSAGE_CHANNEL}function ic(r){return r.kind===w.MESSAGE_CHANNEL_PARAMETERS}function rs(r){return r.kind===w.MESSAGE_OPERATION}function Ta(r){return r.kind===w.EXTENSIONS}function dt(r){return r.kind===w.BINDINGS}function Ct(r){return r.kind===w.BINDING}function oc(r){return es(r)||ns(r)||rs(r)}function sc(r){return r.kind===w.SERVERS}function lc(r){return r.kind===w.SERVER}function Je(r,e,n){var a;if(!R(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?x(t)?t.beforeValue!==void 0:k(t)?t.afterValue!==void 0:O(t)?t.beforeValue!==void 0||t.afterValue!==void 0:ln(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const dc=r=>{if(!ur(r)||uo(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function uc(r){if(!ur(r)||uo(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,l)=>(jd(l)&&(o[l]=r[l]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const fc=[dc,uc],Ye=(r=ze.root)=>({"/allOf":{"/*":()=>Ye(ze.allOf)},"/oneOf":{"/*":()=>Ye(ze.oneOf)},"/anyOf":{"/*":()=>Ye(ze.anyOf)},"/properties":{"/*":()=>Ye(ze.property)},"/items":()=>({...Ye(ze.items),"/*":({key:e})=>Il(e)?Ye(ze.item):{}}),"/additionalProperties":()=>Ye(ze.additionalProperties),"/additionalItems":()=>Ye(ze.additionalItems),"/patternProperties":{"/*":()=>Ye(ze.patternProperty)},kind:r,transformers:fc});function cc(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((l,s)=>s(l,r,n,t),e);return o!==e&&$a(o)&&$a(e)&&Object.defineProperty(o,fo,{value:e,enumerable:!1}),{value:o}}}function mc(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!Hl.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:l,nodeIdPrefix:s}=i,u=s+Ll(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:Ea(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=l?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:l,parent:l.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(l?l.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===jl.simple)return{done:!0};const p=i.treeLevel+1;if(y.value){const g=new Map(i.alreadyConvertedMappingStack);g.set(n,y.node);const b=n[fo];b!==void 0&&g.set(b,y.node);let h;return Jd(y.node)?h={parent:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel}:h={parent:o,container:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:h}}else return{done:!0}}}const yc=2;function Ea(r,e){return[Kd(r),cc(e),mc(r)]}const pc=(r,e=yc)=>{const n=new Fd(r);if(!ur(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return Dn(r,Ea(n,r),{state:t,rules:Ye()}),n},gc=2,hc=(r,e,n=gc)=>{const t=new Gd(r,e);if(!ur(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return Dn(r,Ea(t,r),{state:a,rules:Ye()}),t};function je(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function bc(r){return je(r,Ld,w.BINDINGS)}function Vt(r){return je(r,Le,w.BINDING)}function Sc(r){return je(r,Le)}function vc(r){return je(r,Le,w.MESSAGE_CHANNEL)}function Dc(r){return je(r,Le)}function Ar(r){return je(r,Le,w.SERVER)}function wc(r){return je(r,Le)}function Nc(r){return je(r,Le,w.MESSAGE_HEADERS)}function Tc(r){return je(r,Le,w.MESSAGE_PAYLOAD)}function Ec(r){return je(r,Le,w.MESSAGE)}function xc(r){return je(r,Le,w.MESSAGE_OPERATION)}function kc(r){return je(r,Le,w.MESSAGE_SECTION_SELECTOR)}function Ac(r){return je(r,Le,[w.MESSAGE_CONTENT,w.MESSAGE_CHANNEL,w.MESSAGE_OPERATION])}const ts=r=>{const e=ve(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(e){case Ee:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Cn,{left:d.jsx(_t,{...r,layoutSide:z}),right:d.jsx(_t,{...r,layoutSide:te})})});default:return d.jsx(Hn,{content:d.jsx(_t,{...r,layoutSide:te})})}},Cc={send:"bg-sky-400",receive:"bg-green-500"},_t=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[le]:i}=r,o=m.useCallback(()=>{const s=a&&Vc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Cc[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(k(a.data)&&t===z&&(u=null),x(a.data)&&t===te&&(u=null)),!s)return d.jsxs(d.Fragment,{children:[u,d.jsx(Tt,{value:n,variant:B.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:p}=s,g=t===z?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Tt,{value:c,variant:B.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Tt,{value:g,variant:B.h4,layoutSide:t,diff:p,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),l=m.useMemo(()=>{const s=new Set;if(a){const{styles:u}=a;t===z?s.add(re.background(u.before.backgroundColor)):s.add(re.background(u.after.backgroundColor))}return Array.from(s)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${cr} ${l.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Vc(r){const{data:e}=r;if(!O(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),l=i===-1?t:t.slice(0,i);if(o!==l)return!1;const s={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:s}}}ts.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const _c=m.memo(r=>r.mergedSource===null?null:d.jsx(En,{fallback:d.jsx(xn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Rc,{...r})})),Rc=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=An,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:l,diffTypes:s}=r,u=m.useMemo(()=>rn(a),[a]),c=m.useMemo(()=>new zu({source:e,referenceNamePropertyKey:o,diffsMetaKeys:l,operationKeys:n,logger:u}),[e,o,l,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!Zo(y)?null:d.jsx(tt.Provider,{value:l,children:d.jsx(da.Provider,{value:s,children:d.jsx(wo.Provider,{value:a,children:d.jsx(kn.Provider,{value:t,children:d.jsx(On.Provider,{value:Ee,children:d.jsx(He.Provider,{value:0,children:d.jsx(Wa,{node:y,noHeading:i})})})})})})})});_c.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const xa=m.createContext(void 0);function Mc(){return m.useContext(xa)}const ut=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Bd(),i=Fe(),l=e.node.newDataLevel?i+1:i,s=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=D=>{if(D){e.select(D),f(D),n(D);const S=u.find(E=>E.id===D);a==null||a(S)}},p=ve(),g=m.useMemo(()=>{const D={};return u.forEach(S=>{const E=S.value().$changes??{},A=ua({node:S});A&&(D[S.id]={...A,...Object.keys(E).length?{$changes:E}:{}})}),D},[u]),b=Fe()+1,h=u.find(D=>(D==null?void 0:D.id)===c),v=Ud(h)?h==null?void 0:h.kind:"",N=co(t??(s==null?void 0:s.$nodeChange));return d.jsx(He.Provider,{value:l,children:d.jsx(Yd,{nodesTypeData:g,selectedNodeId:c,combiner:v,onSelect:y,layoutMode:p,level:b,$nodeChange:N,$nestedChanges:s==null?void 0:s.$nestedChanges,$nestedChangesSummary:p!==nn?e.$nestedChangesSummary:void 0})})};ut.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const ft=m.createContext(void 0);function as(){return m.useContext(ft)}const yr=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,l]=m.useState(0);m.useEffect(()=>{i(e),l(n)},[e,n]);const s=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(Td.Provider,{value:s,children:t})});yr.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function is(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class qc extends oa{constructor(){super()}}const ct={PROPERTY:"property"},dr=Object.values(ct),ie={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Pc extends Zr{constructor(){super(...arguments);P(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const ke=class ke{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=ke.isArrayItemKey(e);return ke.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=ke.getValueType(e),i=ke.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:ke.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===ie.BOOLEAN||e===ie.NULL}static isPrimitiveValue(e){return e!==ie.JSON_SCHEMA&&e!==ie.MULTI_SCHEMA&&e!==ie.OBJECT&&e!==ie.ARRAY}static getValueType(e){return typeof e=="string"?ie.STRING:typeof e=="number"?ie.NUMBER:typeof e=="boolean"?ie.BOOLEAN:typeof e=="object"?e===null?ie.NULL:Array.isArray(e)?ie.ARRAY:ke.isJsonSchema(e)?ie.JSON_SCHEMA:ke.isMultiSchema(e)?ie.MULTI_SCHEMA:ie.OBJECT:ie.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Ht in e&&typeof e.type=="string"&&Jl.some(a=>a===e.type)||Ot in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>ke.isJsonSchema(a))||It in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>ke.isJsonSchema(a))||Pt in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>ke.isJsonSchema(a))||jr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Ki,Fl,Kl,eo,Gl,Bl,Ul,Ht,Fi,Lt,Bi,no,ao,io,ro,to,so,oo,lo,$i,Wi,zi,Zi,Qi,Ii,Hi,Xi,Gi,qi,Oi,Pi,Pt,Ot,It,Yl,Yi,ji,Ji,Ui,Li,Wl,jr]);return n&&Object.keys(e).every(a=>t.has(a)||ke.isExtensionPropertyInJsonSchema(a)||ke.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&R(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!na(e))return e;const t=ue(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let l;for(const s of o){const u=e[s],c=t[s];if(u===void 0||c===void 0||!O(c))continue;const{beforeValue:f,afterValue:y}=c,p=R(f),g=Array.isArray(f),b=R(y),h=Array.isArray(y);if(!(g&&b||p&&h))continue;l||(l={...e});const N={...f,...y};l[s]=N}return l??e}};P(ke,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:ie.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let K=ke;const Oc=(r,e,n,t,a)=>K.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function os(){return{"/*":()=>os(),transformers:[Oc],kind:ct.PROPERTY}}function Ic(r){return Xr(r)}const Hc=new Set(dr);class Lc extends Qr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=K.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return Hc.has(e)}}class jc extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!k(o.data)&&!x(o.data)||i.add(o.data.type));return i}}class ss{static instance(e){if(!this.instances.has(null)){const n=new jc;this.instances.set(null,n)}return this.instances.get(null)}}P(ss,"instances",new Map);class Jc extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!R(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=ue(n[a]);if(!i)return;const o={};for(const[l,s]of Object.entries(i)){if(!s)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,p=Ie;if(k(s)){const{afterValue:g}=s,b=K.getValueType(g),h=K.isPrimitiveValue(b);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},f={...f,increaseLevel:!1},c={isContentVisible:h,isHeaderVisible:!0,backgroundColor:T.Green},y={...y,increaseLevel:!0},p=bn}if(x(s)){const{beforeValue:g}=s,b=K.getValueType(g);u={isContentVisible:K.isPrimitiveValue(b),isHeaderVisible:!0,backgroundColor:T.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},y={...y,increaseLevel:!1},p=bn}if(O(s)){const{beforeValue:g,afterValue:b}=s,h=K.getValueType(g),v=K.getValueType(b),N=K.isPrimitiveValue(h),D=K.isPrimitiveValue(v),S=K.isPredefinedValueSet(h),E=K.isPredefinedValueSet(v);u={isContentVisible:N,isHeaderVisible:!0,backgroundColor:T.Yellow},N&&(S?u.borderShadowColor=T.Yellow:u.textHighlighterColor=T.Yellow),c={isContentVisible:D,isHeaderVisible:!0,backgroundColor:T.Yellow},D&&(E?c.borderShadowColor=T.Yellow:c.textHighlighterColor=T.Yellow),p=$l}o[l]={data:s,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:p}}return o}}class ls{static instance(e){if(!this.instances.has(null)){const n=new Jc;this.instances.set(null,n)}return this.instances.get(null)}}P(ls,"instances",new Map);class Fc extends ge{aggregate(e){const n=e[_];if(n){const o=n.data,l={type:o.type,causedAt:[]};return O(o)||x(o)?l.causedAt=o.beforeDeclarationPaths[0]:k(o)&&(l.causedAt=o.afterDeclarationPaths[0]),{[H.TitleRow]:l}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return O(a)||x(a)?i.causedAt=a.beforeDeclarationPaths[0]:k(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[H.TitleRow]:i}}}class ds{static instance(e){return this.instances.has(null)||this.instances.set(null,new Fc),this.instances.get(null)}}P(ds,"instances",new Map);class Kc extends sa{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!x(n)&&!O(n)&&!ln(n))return!1;return!0}}class Gc{static instance(e){return new Kc}}class Bc extends X{isComplexValue(e){return R(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const l=a.diffs[_];if(l){const{data:s}=l;if(k(s)){const{afterValue:u}=s,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),b={data:{...s,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:T.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:bn,inherited:!0};return o[_]=b,o}return o[_]=l,o}if(x(s)){const{beforeValue:u}=s,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),b={data:{...s,beforeValue:y},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:T.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:bn,inherited:!0};return o[_]=b,o}return o[_]=l,o}if(O(s)){const{beforeValue:u,afterValue:c}=s,f=K.getValueType(u),y=K.getValueType(c),p=K.isPrimitiveValue(f),g=K.isPrimitiveValue(y);if(p&&g)return o[_]=l,o;if(!p&&this.isComplexValue(u)&&g){const b=u[t],h=K.getValueType(b),v=K.isPrimitiveValue(h),N=K.isPredefinedValueSet(h),D={data:{...s,beforeValue:b,afterValue:null},styles:{before:{isContentVisible:v,isHeaderVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:bn,inherited:!0};return v&&(D.styles.before.textHighlighterColor=T.Yellow),N&&(D.styles.before.borderShadowColor=T.Yellow),o[_]=D,o}if(!g&&this.isComplexValue(c)&&p){const b=c[t],h=K.getValueType(b),v=K.isPrimitiveValue(h),N=K.isPredefinedValueSet(h),D={data:{...s,beforeValue:null,afterValue:b},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:T.Gray},after:{isContentVisible:v,isHeaderVisible:!0,backgroundColor:T.Yellow,textHighlighterColor:T.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:bn,inherited:!0};return v&&(D.styles.after.textHighlighterColor=T.Yellow),N&&(D.styles.after.borderShadowColor=T.Yellow),o[_]=D,o}if(!p&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const b=u[t],h=c[t],v=K.getValueType(b),N=K.getValueType(h),D=K.isPrimitiveValue(v),S=K.isPrimitiveValue(N),E=K.isPredefinedValueSet(v),A=K.isPredefinedValueSet(N),C={data:{...s,beforeValue:b,afterValue:h},styles:{before:{isContentVisible:b!==void 0&&D,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?T.Gray:T.Yellow,textHighlighterColor:b!==void 0?T.Yellow:void 0},after:{isContentVisible:h!==void 0&&S,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?T.Gray:T.Yellow,textHighlighterColor:h!==void 0?T.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:bn,inherited:!0};return D&&(C.styles.before.textHighlighterColor=T.Yellow),S&&(C.styles.after.textHighlighterColor=T.Yellow),E&&(C.styles.before.borderShadowColor=T.Yellow),A&&(C.styles.after.borderShadowColor=T.Yellow),o[_]=C,o}}}else{const s=a.descendantDiffs[t];if(s)return o[_]=s,o}}}}class us{static instance(e){return this.instances.has(null)||this.instances.set(null,new Bc),this.instances.get(null)}}P(us,"instances",new Map);class Uc extends Pc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"diffsMetaKeys");P(this,"logger");P(this,"nodeDataBuilder");P(this,"CHANGE_SEVERITIES",{[zl]:6,[Xl]:5,[Ql]:4,[Zl]:3,[ed]:2,[nd]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new qc,this.nodeDataBuilder=new Lc}build(){if(!R(this.source))return this.tree;$r(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new et,diffMetaKeys:this.diffsMetaKeys},t=os(),a=Ic({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===fe.SIMPLE,isComplexNode:i=>i.type===fe.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!R(o)&&!Array.isArray(o))return!0;const l=i.value();return l?this.supportJsonSchema&&(l.before.valueType===ie.JSON_SCHEMA||l.after.valueType===ie.JSON_SCHEMA||l.before.valueType===ie.MULTI_SCHEMA||l.after.valueType===ie.MULTI_SCHEMA):!1}});return Dn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return R(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l=null,newDataLevel:s}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:fe.SIMPLE,parent:l&&this.isJsoSimpleTreeNodeWithDiffs(l)?l:null,container:null,value:u,meta:c,newDataLevel:s},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const g=y.diffs[_];if(g){const{data:b}=g;if(k(b)&&u&&(u.before=K.DEFAULT_BASE_JSO_NODE_VALUE),x(b)&&u&&(u.after=K.DEFAULT_BASE_JSO_NODE_VALUE),O(b)){const{beforeValue:h}=b,v=K.transformRawJsoPropertyToBaseJsoNodeValue(t,h);u&&(u.before=v)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return us.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return Gc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return ls.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return ss.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return ds.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),la(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[_];if(!t||!O(t.data))return!1;const a=K.getValueType(t.data.beforeValue),i=K.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),l=this.isJsoComplexValueType(i);return o!==l}isJsoComplexValueType(n){return n===ie.OBJECT||n===ie.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[_]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===fe.SIMPLE||n.type===fe.COMPLEX))}isJsoTreeNodeKind(n){return dr.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===fe.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===fe.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Ze={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function fs(r,e){if(e)return{type:"object",properties:{[r]:e}}}function Wt(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Yc(r,e){if(e&&!(e.valueType!==Ze.JSON_SCHEMA&&e.valueType!==Ze.MULTI_SCHEMA))return R(e.value)?fs(r,e.value):void 0}function Wc(r,e,n,t){if(e&&!(e.before.valueType!==Ze.JSON_SCHEMA&&e.before.valueType!==Ze.MULTI_SCHEMA&&e.after.valueType!==Ze.JSON_SCHEMA&&e.after.valueType!==Ze.MULTI_SCHEMA)){if((e.before.valueType===Ze.JSON_SCHEMA||e.before.valueType===Ze.MULTI_SCHEMA)&&R(e.before.value))return Wt(r,e.before.value,n,t);if((e.after.valueType===Ze.JSON_SCHEMA||e.after.valueType===Ze.MULTI_SCHEMA)&&R(e.after.value))return Wt(r,e.after.value,n,t)}}const ka=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});ka.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function cs(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function $c(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=cs({appearance:e});return m.useMemo(()=>[a,e==="text"?re.highlighter(n):"",e==="block"?re.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const Ir=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=$c({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(ka,{isVisible:e,value:n,className:o})});Ir.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Aa=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[le]:t}=r,a=Ke(),i=Jn(),{beforeLevel:o,afterLevel:l}=ta(),[s,u]=m.useState(!0),c=m.useCallback(()=>{u(M=>!M)},[]),f=e.value(),y=e.diffs,p=e.descendantDiffsSummary,g=m.useMemo(()=>y[_],[y]),b=m.useCallback(M=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Ir,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!s&&d.jsx(fa,{values:Array.from(p)})]});const{styles:q}=g;return M===z?d.jsx(Ir,{isVisible:q.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:q.before.textHighlighterColor,borderShadowColor:q.before.borderShadowColor}):M===te?d.jsx(Ir,{isVisible:q.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:q.after.textHighlighterColor,borderShadowColor:q.after.borderShadowColor}):d.jsx(d.Fragment,{})},[s,p,f,g]),h=m.useMemo(()=>{const M=dn(e);return se(M,{resolveDiff:()=>g})},[e,g]),v=e.childrenNodes(),N=m.useMemo(()=>{const M=!!f,q=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==ie.UNKNOWN,J=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==ie.UNKNOWN;return M&&(q||J)},[f]),D=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),S=m.useMemo(()=>n?Wc(e.key,f,g,i):void 0,[i,e.key,f,g,n]);if(S)return i?d.jsx(pt,{schema:S,expandedDepth:2,displayMode:a,layoutMode:Ee,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const E=is(v),[A,C]=(()=>{let M=o+1,q=l+1;const[J]=v,U=J==null?void 0:J.diffs[_];return U&&E&&(M=U.flags.before.increaseLevel?o+1:o,q=U.flags.after.increaseLevel?l+1:l),[M,q]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(he,{"data-precededby":t,value:`${e.key}`,expandable:N,expanded:s,onClickExpander:N?c:void 0,variant:B.body2,enableHeaderValue:D,subheader:b,usage:nt.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...h}),s&&d.jsx(yr,{beforeLevel:A,afterLevel:C,children:v.map(M=>d.jsx(Aa,{"data-precededby":V.JSO_PROPERTY,node:M,supportJsonSchema:n},M.id))})]})};Aa.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const pr=m.memo(r=>r.mergedSource===null?null:d.jsx(En,{fallback:d.jsx(xn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(zc,{...r})})),zc=m.memo(r=>{const{mergedSource:e,displayMode:n=An,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:l}=r,{[le]:s}=r,u=m.useMemo(()=>rn(i),[i]),c=m.useMemo(()=>new Uc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const p=y.childrenNodes();if(p.length===0)return null;const g=is(p),[b,h]=(()=>{let v=t,N=t;const[D]=p,S=D.diffs[_];return S&&g&&(v=S.flags.before.increaseLevel?t:t-1,N=S.flags.after.increaseLevel?t:t-1),[v,N]})();return d.jsx(tt.Provider,{value:o,children:d.jsx(da.Provider,{value:l,children:d.jsx(kn.Provider,{value:n,children:d.jsx(On.Provider,{value:Ee,children:d.jsx(yr,{beforeLevel:b,afterLevel:h,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:p.map((v,N)=>d.jsx(Aa,{"data-precededby":N===0?s:V.JSO_PROPERTY,node:v,supportJsonSchema:a},v.id))})})})})})})});pr.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class Xc extends ea{constructor(){super()}}function ms(){return{"/*":()=>ms(),kind:ct.PROPERTY}}function Qc(r){return Xr(r)}const Zc=new Set(dr);class em extends Qr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==ct.PROPERTY?null:K.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Zc.has(e)}}class nm extends Zr{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=rn()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new So);P(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new Xc,this.nodeDataBuilder=new em}build(){if(!R(this.source))return this.tree;const n={parent:null,container:null,ancestors:new et,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=ms();return this.crawlHooks=Qc({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(a,i,o,l,s)=>this.createNodeFromRaw(a,i,o,l,s),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!R(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===ie.JSON_SCHEMA||o.valueType===ie.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Ed}}),Dn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:vo(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};Dn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:fe.COMPLEX,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,{...o,parent:l,container:s}),f=this.createNodeMeta(t,o),y={type:fe.SIMPLE,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isJsoSimpleTreeNode(n){return n.type===fe.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const mt=r=>d.jsx(En,{fallback:d.jsx(xn,{componentName:"JSON Schema Viewer"}),children:d.jsx(rm,{...r})}),rm=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=An,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:l=0}=r,s=m.useMemo(()=>pc(e),[e]),c=m.useMemo(()=>new Ao(s,n),[n,s]).root;let f=null;return at(c)&&(f=d.jsx(yt,{state:c,overriddenKind:a})),it(c)&&(f=d.jsx(ut,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(ft.Provider,{value:o,children:d.jsx(xa.Provider,{value:i,children:d.jsx(kn.Provider,{value:t,children:d.jsx(He.Provider,{value:l,children:f})})})})};mt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const ys=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=cs({appearance:t});return d.jsx(ka,{isVisible:e,value:n,className:a})});ys.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ca=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[le]:t}=r,a=Ke(),i=Fe(),[o,l]=m.useState(!0),s=m.useCallback(()=>{l(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(ys,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),p=m.useMemo(()=>n?Yc(e.key,u):void 0,[e.key,u,n]);return p?d.jsx(mt,{schema:p,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(he,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:s,variant:B.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:nt.JsoProperty}),o&&d.jsx(He.Provider,{value:i+1,children:y.map(g=>d.jsx(Ca,{"data-precededby":V.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};Ca.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const gr=m.memo(r=>r.source===null?null:d.jsx(En,{fallback:d.jsx(xn,{componentName:"JSO Viewer"}),children:d.jsx(tm,{...r})})),tm=m.memo(r=>{const{source:e,displayMode:n=An,layoutMode:t=nn,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[le]:l}=r,s=m.useMemo(()=>rn(o),[o]),u=m.useMemo(()=>new nm({source:e,supportJsonSchema:i,logger:s}),[e,i,s]),c=m.useMemo(()=>u.build(),[u]);s.debug("[JSO] Source:",e),s.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(kn.Provider,{value:n,children:d.jsxs(On.Provider,{value:t,children:[" ",d.jsx(He.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((p,g)=>d.jsx(Ca,{"data-precededby":g===0?l:V.JSO_PROPERTY,node:p,supportJsonSchema:i},p.id))})})]})})});gr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const hi=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=Fe(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const l=new Set;return n===z&&(k(e)&&(l.add(re.background(T.Gray)),o=!1),x(e)&&l.add(re.background(T.Red))),n===te&&(k(e)&&l.add(re.background(T.Green)),x(e)&&(l.add(re.background(T.Gray)),o=!1)),{diffStylesClasses:Array.from(l),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row h-full ${a.join(" ")}`,children:[d.jsx(In,{level:t+1,lastInvisible:!0}),i&&d.jsx(Co,{children:"Extensions"})]})}),am=[],ps=r=>{const{extensions:e,$nodeChange:n}=r,t=Fe(),a=Ke(),i=ve(),o=Jn(),l=i===za,s=i===Ee,u=m.useMemo(()=>{let g=im(n);return g||(g=sm(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(x(u)||O(u))&&(g=u.beforeDeclarationPaths[0]??[]),k(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(In,{level:t+1,lastInvisible:!0}),d.jsx(Co,{children:"Extensions"})]});switch(i){case za:return null;case Ee:return d.jsx(Ln,{diffType:c,diffTypeCause:f,children:d.jsx(Cn,{left:d.jsx(hi,{diff:u,layoutSide:z}),right:d.jsx(hi,{diff:u,layoutSide:te})})});default:return g}},[i,t,u,f,c]),p=m.useMemo(()=>{if(l)return null;if(s&&o){const g=om(e,u,o);return d.jsx(pr,{mergedSource:g,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:am})}return d.jsx(gr,{source:e,initialLevel:t+1})},[l,s,o,e,t,u,a]);return p?d.jsxs("div",{className:"flex flex-col",children:[y,p]}):null};function im(r){if(!r)return;const{depth:e,...n}=r;return n}function om(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)Or(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function sm(r,e){var l;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=ue(oe(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const s of i)if(((l=a[s])==null?void 0:l.action)!==(o==null?void 0:o.action))return;return o}ps.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const lm=["type","nullable","title","format"],dm=["required","readOnly","writeOnly","deprecated"],gs=r=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:a,readOnly:i,writeOnly:o,deprecated:l,isExpandable:s,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:y=mo,level:p=0,$changes:g,$metaChanges:b,$nodeChange:h,$nodeChangesSummary:v}=r,N=!!h,D=rd(),S=Mc(),E=ur(S)&&(n!=null&&n.title)&&S[n.title]?S[n.title]:void 0,A=td(N?void 0:v),C=m.useCallback(de=>D.length===0||D.includes(de),[D]),{isDocumentLayoutMode:M,isInlineDiffsLayoutMode:q,isSideBySideDiffsLayoutMode:J}=yo(y),U=!!g&&lm.some(de=>Wn(g[de]))||!!b&&dm.some(de=>Wn(b[de])),{nodeAdded:L,nodeRemoved:j,nodeReplaced:G,nodeRenamed:ae}={nodeAdded:N&&h.action===I.add,nodeRemoved:N&&h.action===I.remove,nodeReplaced:N&&h.action===I.replace,nodeRenamed:N&&h.action===I.rename},F=ad(id(g,b,ld),D),[Y,Z]=N?Jr(h):U?Jr(...F):od,ee=sd(Y,D),$e=N?Xa[h==null?void 0:h.action]:U?Xa[I.replace]:"",W=({layoutSide:de})=>{const Ge=J?"w-1/2":"w-full",$=!M&&!N&&U&&!!(b!=null&&b.required),pe=$d(),Be=pe&&pe===de,Ue=c&&!s,Fn=["flex flex-row",!Ue&&"gap-2",Ge].filter(Boolean).join(" "),_e=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(Vo,{...t,showNullable:!0,layoutMode:y,layoutSide:de,$changes:g})}),dd.isNotEmpty(A)&&!M&&s&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(fa,{values:A,filter:C})}),a&&d.jsx(ot,{text:ca,children:d.jsx(ma,{})}),d.jsx(ya,{requiredChanged:$,readOnly:i,writeOnly:o,deprecated:l,layoutSide:de,isNodeChanged:N,isContentChanged:U,$nodeChange:h,$metaChanges:b}),E&&d.jsx(ud,{label:E,colorSchema:fd(cd),layoutMode:y,layoutSide:de,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:Fn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(In,{level:p}),Ue?d.jsx("div",{className:"w-5"}):d.jsx(zd,{isRoot:c,isExpandable:s,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${s?"hover:cursor-pointer":""}`,onClick:s?f:void 0,children:d.jsx(Xd,{...n,showRequired:!0,layoutMode:y,layoutSide:de,requiredChange:b==null?void 0:b.required,titleChange:h})}),!Be&&d.jsx(_e,{})]})]})};return M?d.jsx("div",{className:"flex flex-row",children:d.jsx(W,{...r,layoutSide:te})}):q?!N&&!U?d.jsx("div",{className:"flex flex-row",children:d.jsx(W,{...r,layoutSide:z})}):d.jsxs("div",{className:`flex flex-row relative ${ee?$e:""}`,children:[Y&&ee&&d.jsx(Qa,{variant:Y,message:Z}),d.jsx(W,{...r,layoutSide:z})]}):J?!N&&!U?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(W,{...r,layoutSide:z}),d.jsx(W,{...r,layoutSide:te})]}):d.jsxs("div",{className:`flex flex-row relative ${ee?$e:""}`,children:[Y&&ee&&d.jsx(Qa,{variant:Y,message:Z}),!N&&U||N&&(j||G||ae)?d.jsx(W,{...r,layoutSide:z}):d.jsx(Za,{level:(h==null?void 0:h.depth)??p}),!N&&U||N&&(L||ae||G)?d.jsx(W,{...r,layoutSide:te}):d.jsx(Za,{level:(h==null?void 0:h.depth)??p})]}):d.jsx(Wd,{layoutMode:y})};gs.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function um(r,e){var S,E,A;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,l=o==null?void 0:o.exclusiveMinimum,s=o==null?void 0:o.exclusiveMaximum,u=typeof l=="number"?l:l===!0&&me(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof s=="number"?s:s===!0&&me(o==null?void 0:o.maximum)?o.maximum:void 0,f=l===!0||o==null?void 0:o.minimum,y=s===!0||o==null?void 0:o.maximum,p=o==null?void 0:o.multipleOf,g=(A=(E=(S=r==null?void 0:r.parent)==null?void 0:S.value())==null?void 0:E.propertyNames)==null?void 0:A.enum,b=e==null?void 0:e.minProperties,h=e==null?void 0:e.maxProperties,v=e==null?void 0:e.uniqueItems,N=e==null?void 0:e.minItems,D=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:p},object:{allowedPropertyNames:g,minProperties:b,maxProperties:h},array:{uniqueItems:v,minItems:N,maxItems:D}}}const fm="?",Se="{value}",on="{exclusive_value}",gn=">",Cr=">=",hn="<",Vr="<=",De=1,we=2,Ne=4,Te=8,_r={0:{lower:void 0,upper:void 0},[De]:{lower:`${Cr} ${Se}`,upper:void 0},[we]:{lower:`${gn} ${on}`,upper:void 0},[Ne]:{lower:void 0,upper:`${Vr} ${Se}`},[Te]:{lower:void 0,upper:`${hn} ${on}`},[we|De]:{lower:`${gn} ${Se}`,upper:void 0},[we|Ne]:{lower:`${gn} ${on}`,upper:`${Vr} ${Se}`},[we|Te]:{lower:`${gn} ${on}`,upper:`${hn} ${on}`},[Te|De]:{lower:`${Cr} ${Se}`,upper:`${hn} ${on}`},[Te|Ne]:{lower:void 0,upper:`${hn} ${Se}`},[Ne|De]:{lower:`${Cr} ${Se}`,upper:`${Vr} ${Se}`},[we|De|Ne]:{lower:`${gn} ${Se}`,upper:`${Vr} ${Se}`},[we|De|Te]:{lower:`${gn} ${Se}`,upper:`${hn} ${on}`},[we|Ne|Te]:{lower:`${gn} ${on}`,upper:`${hn} ${Se}`},[Te|De|Ne]:{lower:`${Cr} ${Se}`,upper:`${hn} ${Se}`},[De|we|Ne|Te]:{lower:`${gn} ${Se}`,upper:`${hn} ${Se}`}};function Rr(r){return r!==void 0&&r!==!1}function Mr(r){return r!==void 0&&r!==!1}function bi(r,e,n){return(r&(De|we))!==(De|we)||n===void 0||typeof e!="number"?r:n>=e?r&~De:r&~we}function Si(r,e,n){return(r&(Ne|Te))!==(Ne|Te)||n===void 0||typeof e!="number"?r:n<=e?r&~Ne:r&~Te}function qr(r,e,n){return r.replace(Se,`${e}`).replace(on,me(n)?`${n}`:fm)}function cm(r,e,n){var Be,Ue;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,l=r.exclusiveMaximum,s=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=Jr(s,u),[p]=Jr(c,f),g=me(a),b=me(o),h=me(s),v=me(c),N=me(u),D=me(f),S=Sr(s),E=Kn(s),A=cn(s),C=Sr(c),M=Kn(c),q=cn(c),J=typeof i=="number"?i:void 0,U=typeof l=="number"?l:void 0;let L=0,j=0;g&&(!h||S||A)&&(j|=De),Rr(i)&&(!N||Sr(u)||cn(u)&&Mr(u==null?void 0:u.afterValue))&&(j|=we),b&&(!v||C||q)&&(j|=Ne),Rr(l)&&(!D||Sr(f)||cn(f)&&Mr(f==null?void 0:f.afterValue))&&(j|=Te),typeof i!="number"&&!(j&De)&&(j&=~we),typeof l!="number"&&!(j&Ne)&&(j&=~Te),j=bi(j,a,J),j=Si(j,o,U);const G=j in _r?{..._r[j]}:void 0;if(G!=null&&G.lower&&(G.lower=qr(G.lower,a,J)),G!=null&&G.upper&&(G.upper=qr(G.upper,o,U)),t.data.lower=G==null?void 0:G.lower,t.data.upper=G==null?void 0:G.upper,!h&&!N&&!v&&!D)return t.visible=vi(t.data.lower,t.data.upper),t;let ae,F,Y,Z;g&&!h&&(ae=a,L|=De),(E||A)&&(ae=s.beforeValue,L|=De),b&&!v&&(F=o,L|=Ne),(M||q)&&(F=c.beforeValue,L|=Ne),Rr(i)&&!N&&(L|=we,Y=J),(cn(u)||Kn(u))&&Mr(u==null?void 0:u.beforeValue)&&(L|=we,typeof u.beforeValue=="number"&&(Y=u.beforeValue)),Rr(l)&&!D&&(L|=Te,Z=U),(cn(f)||Kn(f))&&Mr(f==null?void 0:f.beforeValue)&&(L|=Te,typeof f.beforeValue=="number"&&(Z=f.beforeValue)),(!N&&typeof i!="number"||(cn(u)||Kn(u))&&typeof u.beforeValue!="number")&&!(L&De)&&(L&=~we),(!D&&typeof l!="number"||(cn(f)||Kn(f))&&typeof f.beforeValue!="number")&&!(L&Ne)&&(L&=~Te),L=bi(L,ae,Y),L=Si(L,F,Z);const W=L in _r?{..._r[L]}:void 0;W!=null&&W.lower&&(W.lower=qr(W.lower,ae,Y)),W!=null&&W.upper&&(W.upper=qr(W.upper,F,Z)),(Be=t.data).lower??(Be.lower=W==null?void 0:W.lower),(Ue=t.data).upper??(Ue.upper=W==null?void 0:W.upper),t.visible=vi(t.data.lower,t.data.upper);const de=Di(y,W==null?void 0:W.lower,G==null?void 0:G.lower),Ge=Di(p,W==null?void 0:W.upper,G==null?void 0:G.upper),$=wi(s,u),pe=wi(c,f);return de&&(Ni(de,$),t.changes.lower=de),Ge&&(Ni(Ge,pe),t.changes.upper=Ge),t.changesKeys=qn(t.data,n),t}function vi(r,e){return!!r||!!e}function Di(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:I.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:I.remove,beforeValue:e}:{type:r,action:I.replace,beforeValue:e,afterValue:n}}function wi(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(po(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),go(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Ni(r,e){if(r)return po(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),go(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const Rn={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},hs=r=>{var pe,Be,Ue,Fn,_e,br;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,l=n.value,s=l,u=(pe=n.parent)==null?void 0:pe.value,c=(Be=n.parent)==null?void 0:Be.value,f=Fe(),y=ve(),p=Qd(a),g=Zd(a),b=eu(l),h=nu(l),v=_o(l),N=Ft(l)||Ft(u),{any:D,string:S,number:E,object:A,array:C}=um(a,l),M={minimum:l==null?void 0:l.minimum,exclusiveMinimum:l==null?void 0:l.exclusiveMinimum,maximum:l==null?void 0:l.maximum,exclusiveMaximum:l==null?void 0:l.exclusiveMaximum},q=(Ue=s==null?void 0:s.$changes)==null?void 0:Ue.minimum,J=(Fn=s==null?void 0:s.$changes)==null?void 0:Fn.exclusiveMinimum,U=(_e=s==null?void 0:s.$changes)==null?void 0:_e.maximum,L=(br=s==null?void 0:s.$changes)==null?void 0:br.exclusiveMaximum,j={minimum:Wn(q)?q:void 0,exclusiveMinimum:Wn(J)?J:void 0,maximum:Wn(U)?U:void 0,exclusiveMaximum:Wn(L)?L:void 0},{data:G,changes:ae,changesKeys:F,visible:Y}=cm(M,j,Rn.valueRange),Z=qn(S,Rn.valueLength),ee=qn(S,Rn.valuePattern),$e=qn(E,Rn.multipleOf),W=qn(A,Rn.propertiesCount),de=qn(C,Rn.uniqueItems),Ge=qn(C,Rn.itemsCount),$=co(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(D==null?void 0:D.allowedValues)&&d.jsx(ei,{shift:e,$changesKey:"enum",title:ru,items:D.allowedValues,layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),b&&d.jsxs(d.Fragment,{children:[(me(S==null?void 0:S.minLength)||me(S==null?void 0:S.maxLength))&&d.jsx(mn,{shift:e,$changesKeys:Z,title:pa,items:{minLength:S==null?void 0:S.minLength,maxLength:S==null?void 0:S.maxLength},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes}),me(S==null?void 0:S.pattern)&&d.jsx(mn,{shift:e,$changesKeys:ee,title:ga,items:{pattern:S==null?void 0:S.pattern},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]}),h&&d.jsxs(d.Fragment,{children:[Y&&d.jsx(mn,{shift:e,$changesKeys:F,title:ha,items:G,layoutMode:y,level:f,$nodeChange:$,$changes:ae}),me(E==null?void 0:E.multipleOf)&&d.jsx(mn,{shift:e,$changesKeys:$e,title:ba,items:{multipleOf:E==null?void 0:E.multipleOf},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]}),N&&d.jsxs(d.Fragment,{children:[g&&d.jsx(mn,{shift:e,$changesKeys:[],title:tu,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:$}),p&&(A==null?void 0:A.allowedPropertyNames)&&d.jsx(ei,{shift:e,$changesKey:"propertyNames",title:Ro,items:A.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:$,$changes:c==null?void 0:c.$changes}),(me(A==null?void 0:A.minProperties)||me(A==null?void 0:A.maxProperties))&&d.jsx(mn,{shift:e,$changesKeys:W,title:Sa,items:{minProperties:A==null?void 0:A.minProperties,maxProperties:A==null?void 0:A.maxProperties},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]}),v&&d.jsxs(d.Fragment,{children:[me(C==null?void 0:C.uniqueItems)&&d.jsx(mn,{shift:e,$changesKeys:de,title:va,items:{uniqueItems:`${C.uniqueItems}`},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),(me(C==null?void 0:C.minItems)||me(C==null?void 0:C.maxItems))&&d.jsx(mn,{shift:e,$changesKeys:Ge,title:Da,items:{minItems:C==null?void 0:C.minItems,maxItems:C==null?void 0:C.maxItems},layoutMode:y,level:f,$nodeChange:$,$changes:s==null?void 0:s.$changes})]})]})};hs.__docgenInfo={description:"",methods:[],displayName:"Validations"};const bs=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,l=Fe(),s=e.meta,u=s,c=e.value,f=c,y=au(),p=ve(),g=Mo(e),[b,h]=m.useState(!1),[v,N]=m.useState(0);m.useEffect(()=>{const q=e.children.filter(at).length===0;(!iu(o)||e.expanded&&q)&&!o.isCycle?h(!0):h(e.expanded),N(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const D=!ou(o),S=!su(o),E=qo(o),A=E,C=as(),M=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(gs,{nodeId:o.id,nodeTitleData:lu({node:o,nodeValue:c,nodeMeta:s,customizationOptions:C}),nodeTypeData:ua({node:o,nodeValue:c,customizationOptions:C}),isCircularRef:o.isCycle,readOnly:s==null?void 0:s.readOnly,writeOnly:s==null?void 0:s.writeOnly,deprecated:s==null?void 0:s.deprecated,isExpandable:g,expanded:e.expanded,sorted:v,isRoot:E,onToggleExpander:t,onToggleSort:a,layoutMode:p,level:l,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&b&&D&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:S&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(du,{shift:A,state:e,$nodeChange:i}),d.jsx(hs,{shift:A,state:e,$nodeChange:i}),M&&d.jsx(ps,{extensions:M,$nodeChange:i})]})})]})};bs.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const Ss=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=ve();return d.jsx(d.Fragment,{children:n.map((l,s)=>at(l)?d.jsxs("div",{children:[!e&&i&&l.first&&d.jsx(uu,{shift:!1,NodeType:Vo,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(yt,{state:l,$nodeChange:a},`prop-${s}`)]},`prop-${s}`):it(l)?d.jsx(ut,{state:l,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${s}`):null)})};Ss.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const yt=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,l=o.filter(ae=>!it(ae)),s=i,u=e.meta,c=qo(a),f=Ft(i),y=_o(i),p=fu(i),g=Fe(),b=e.node.newDataLevel,h=!c&&b?g+1:g,v=Mo(e),[N,D]=m.useState(!1),[,S]=m.useState(0);m.useEffect(()=>{D(e.expanded),S(e.sorted)},[e.expanded,e.sorted]);const[,E]=m.useState(),A=ae=>{ae&&(e.setSelected(ae),E(e.selected))},[C,M]=m.useState(void 0),q=ae=>{if(ae){const F=pu(ae);M(F)}},J=t??(u==null?void 0:u.$nodeChange),U=md(l),L=n==="parameters"&&c&&(f||y)&&!p,j=ua({node:a,nodeValue:i});j==null||delete j.combiner;const G=j?{nodeTypeData:j,nodeDepth:h+1,$nodeChange:J??U,$changes:s==null?void 0:s.$changes}:void 0;return d.jsx(He.Provider,{value:h,children:d.jsx(cu,{value:C,setValue:q,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(bs,{state:e,disableNestingHeader:L,onToggleExpander:ae=>mu(e,D,ae),onToggleSort:()=>yu(e,S),$nodeChange:J}),v&&N&&d.jsx(Ss,{disableNestingHeader:L,items:o,onGlobalSelectNestedNode:A,$nodeChange:J,nestingIndicatorTitleData:G})]})})})};yt.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const pt=r=>d.jsx(En,{fallback:d.jsx(xn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(mm,{...r})}),mm=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=An,layoutMode:a=mo,filters:i=[],overriddenKind:o,metaKeys:l,topLevelPropsMediaTypes:s}=r;$r(e,l.diffsMetaKey,l.aggregatedDiffsMetaKey);const u=m.useMemo(()=>hc(e,l),[l,e]),c=m.useMemo(()=>new Ao(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return at(f)&&(y=d.jsx(yt,{state:f,overriddenKind:o})),it(f)&&(y=d.jsx(ut,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(xa.Provider,{value:s,children:d.jsx(yd.Provider,{value:i,children:d.jsx(kn.Provider,{value:t,children:d.jsx(On.Provider,{value:a,children:d.jsx(tt.Provider,{value:l,children:d.jsx(He.Provider,{value:0,children:y})})})})})})};pt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const ym=" or null";function vn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(er(r))return"";const n=r,t=(n==null?void 0:n.type)??zn,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?ym:"";let l=String(t);return a&&(l+=`(${a})`),i&&(l+=`<${i}>`),l+=o,l}function Ti(r){return r!=null}function vs(r){const e=Nn(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(Ce.MIN_LENGTH),t.maxLength!==void 0&&n.push(Ce.MAX_LENGTH),t.pattern!==void 0&&n.push(Ce.PATTERN);const a=e;a.minimum!==void 0&&n.push(Ce.MINIMUM),a.maximum!==void 0&&n.push(Ce.MAXIMUM),Ti(a.exclusiveMinimum)&&n.push(Ce.EXCLUSIVE_MINIMUM),Ti(a.exclusiveMaximum)&&n.push(Ce.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(Ce.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(Ce.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(Ce.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(Ce.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(Ce.MIN_ITEMS),o.maxItems!==void 0&&n.push(Ce.MAX_ITEMS),n}function pm(r){return r!=null}function gm(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const hm="x-deprecated-reason";function bm(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[hm];return typeof e=="string"&&e.length>0?e:void 0}class Ds{resolveNodeVisibility(e,n){const t=e.value(),a=Nn(t),i=No(n),o=bm(a),l=i&&!!(a!=null&&a.description),s=i&&!!o,u=i&&pm(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&vs(t).length>0,p=i&&gm(a),g=u||c||f||y||p;return{showDescription:l,showDeprecationReasonRow:s,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:p,showContentSection:l||s||g,showAnyAdditionalInfoRow:g}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:l}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!l,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isExamplesAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&jo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const nr=new Ds;function Va(r,e){return nr.resolveNodeVisibility(r,e)}function _a(r,e){return nr.resolveListLastRowFlags(r,e)}function Sm(r,e){return nr.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function ws(r){return nr.resolveIsExpandable(r)}function Ns(r,e){return nr.resolveInitiallyExpanded(r,e)}function Pn(r,e){return nr.resolveExpanderExpanded(r,e)}const Ts=" or null";function Es(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function vm(r,e){const n=Nn(r.value()),t=(n==null?void 0:n.type)??zn,a=Es(r);return rt(t,a==null?void 0:a.type,e)??String(t)}function Ra(r,e,n){if(e!=null&&e.brokenRef)return{kind:sn.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if(er(t))return{kind:sn.NO_DIFFS,text:""};const a=Es(r);if(!a)return{kind:sn.NO_DIFFS,text:vn(t,e)};if(Dm(a)){const c=Object.values(a).find(Boolean);return c?{kind:sn.WHOLE_DIFFS,text:wm(t,a,n),diff:Em(c)}:{kind:sn.NO_DIFFS,text:vn(t,e)}}const i=[],o=Nm(t,a.type,n);o&&i.push(o);const l=Ei(xs(t),a.format,n,ks);l&&i.push(l);const s=Ei(t==null?void 0:t.title,a.title,n,As);s&&i.push(s);const u=Tm(t);return u&&i.push(u),i.length===0?{kind:sn.NO_DIFFS,text:vn(t,e)}:{kind:sn.PARTIAL_DIFFS,segments:i}}function Dm(r){const e=Go.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function wm(r,e,n){const t=[],a=rt((r==null?void 0:r.type)??zn,e.type,n)??(r==null?void 0:r.type)??zn;t.push(String(a));const i=$t(xs(r),e.format,n,ks);i&&t.push(i);const o=$t(r==null?void 0:r.title,e.title,n,As);return o&&t.push(o),r!=null&&r.nullable&&t.push(Ts.trim()),t.join(" ")}function Nm(r,e,n){const t=(r==null?void 0:r.type)??zn,a=rt(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function Ei(r,e,n,t){const a=$t(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function $t(r,e,n,t){const a=rt(r,e,n);if(a===void 0)return!e&&xi(r)?t(r):void 0;if(xi(a))return t(a)}function Tm(r){if(!(er(r)||!(r!=null&&r.nullable)))return{text:Ts.trim()}}function xs(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function xi(r){return!!r&&r.trim().length>0}function ks(r){return`(${r})`}function As(r){return`<${r}>`}function Em(r){const{data:e}=r;return O(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:T.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:T.Yellow}}}:k(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:T.Green}}}:x(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:T.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function xm(r){return r.diffs}function km(r){return xm(r)[Sn]??r.diffs[_]}function _n(r){return r.diffs}function Ur(r){return _n(r).nestingIndicatorRowColorizingDiff}function Am(r){return _n(r).nodeChangesSummary}function Cm(r){return _n(r).extensionsDiffs}function Vm(r){var e;return(e=Vs(r))==null?void 0:e.required}function Cs(r){if(!(r!=null&&r.data))return;const e=r.data;return k(e)?{type:e.type,scope:e.scope,description:e.description,action:I.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:x(e)?{type:e.type,scope:e.scope,description:e.description,action:I.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:O(e)?{type:e.type,scope:e.scope,description:e.description,action:I.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function _m(r){return Cs(Vm(r))}function Vs(r){if(r.kind===Q.PROPERTY)return r.diffs}function _s(r){const e=_n(r),n=Vs(r),t={};for(const i of $n){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=Cs(a)),t}function We(r){return r.diffs}function Rs(r){return We(r).default}function Ms(r){return We(r).defaultRowColorizingDiff}function qs(r){return We(r).enumDiff}function Ps(r){return We(r).enumValueDiffs}function Os(r){return We(r).enumRowColorizingDiff}function Is(r){return We(r).examplesDiff}function Hs(r){return We(r).examplesValueDiffs}function Ls(r){return We(r).examplesRowColorizingDiff}function Rm(r){return We(r).allowedAdditionalPropertyNamesDiff}function Mm(r){return We(r).allowedAdditionalPropertyNamesValueDiffs}function qm(r){return We(r).allowedAdditionalPropertyNamesRowColorizingDiff}function Yr(r,e){var n;return(n=_n(r).validationRowDiffs)==null?void 0:n[e]}function js(r,e){var n;return(n=_n(r).validationRowValueDiffs)==null?void 0:n[e]}function Ma(r,e){var n;return(n=_n(r).validationRowColorizingDiffs)==null?void 0:n[e]}function Pm(r){return _n(r).valueRangeCrawlDiffs}function ki(r,e){if(Yr(r,e)||Ma(r,e))return!0;const n=js(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}const Js="<empty string>";function Om(r){return JSON.stringify(r).slice(1,-1)}function Un(r){return typeof r=="string"?r===""?Js:Om(r):typeof r=="object"&&r!==null?JSON.stringify(r,null,2):JSON.stringify(r)}function Im(r){return r===Js}function Hm(r,e,n){if(!e)return r===void 0?[]:[{text:Un(r)}];const t=n===z,{data:a}=e;if(k(a))return t?[]:[{text:Un(a.afterValue??r)}];if(x(a))return t?[{text:Un(a.beforeValue??r)}]:[];if(O(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Un(i)}]}return r===void 0?[]:[{text:Un(r)}]}function Ve(r){return Un(r)}function gt(r,e,n){const t=n===z,{data:a}=e;return k(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ve(o)})):x(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Ve(o)})):[]:O(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ve(o)})):r.map(i=>({text:Ve(i)}))}function qa(r,e,n){const t=n===z,a=new Set,i=[];for(let l=0;l<r.length;l++){const s=String(l),u=e==null?void 0:e[s],c=Ve(r[l]);if(!u){i.push({text:c});continue}if(a.has(s))continue;a.add(s);const{data:f}=u;if(k(f)){t||i.push({text:Ve(f.afterValue??r[l]),valueDiffKey:s});continue}if(x(f)){t&&i.push({text:Ve(f.beforeValue??r[l]),valueDiffKey:s});continue}O(f)&&i.push({text:Ve(t?f.beforeValue??r[l]:f.afterValue??r[l]),valueDiffKey:s})}for(const[l,s]of Object.entries(e??{}))!s||a.has(l)||x(s.data)&&t&&(i.push({text:Ve(s.data.beforeValue),valueDiffKey:l}),a.add(l));const o=l=>{for(let s=0;s<r.length;s++)if(Ve(r[s])===l)return s;return r.length};return i.sort((l,s)=>o(l.text)-o(s.text))}function ar(r,e,n,t){return n===void 0?t:zo(r,e,n)}function Lm(r,e,n){if(e)return Object.keys(e).find(t=>Xo(t,r)===n)}function jm(r,e,n,t){const a=t===z,i=new Set,o=[];for(let s=0;s<e.length;s++){const u=Lm(e,n,s),c=u?n==null?void 0:n[u]:void 0,f=Ve(e[s]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(k(y)){a||o.push({text:ar(r,u,y.afterValue??e[s],f),valueDiffKey:u});continue}if(x(y)){a&&o.push({text:ar(r,u,y.beforeValue??e[s],f),valueDiffKey:u});continue}O(y)&&o.push({text:a?ar(r,u,y.beforeValue??e[s],f):ar(r,u,y.afterValue??e[s],f),valueDiffKey:u})}for(const[s,u]of Object.entries(n??{}))!u||i.has(s)||x(u.data)&&a&&(o.push({text:ar(r,s,u.data.beforeValue,Ve(u.data.beforeValue)),valueDiffKey:s}),i.add(s));const l=(s,u)=>{if(s)return Xo(s,e);for(let c=0;c<e.length;c++)if(Ve(e[c])===u)return c;return e.length};return o.sort((s,u)=>l(s.valueDiffKey,s.text)-l(u.valueDiffKey,u.text))}function Jm(r,e,n,t){return e?gt(r,e,t):qa(r,n,t)}function Fm(r,e,n,t){return e?gt(r,e,t):qa(r,n,t)}function Km(r,e,n,t){return e?gt(r,e,t):qa(r,n,t)}function Gm(r,e,n,t,a,i){return r===ye.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?Kf(Bt(i.nodeValue),i.crawlDiffs,a,n,t):n?gt(e,n,a):jm(r,e,t,a)}function Pr(r,e){return e?r==null?void 0:r[e]:void 0}const Bm=new Ds;function Um(r){return r!=null}function Ym(r){return Object.keys(Jt).some(e=>!!Yr(r,e)||!!Ma(r,e))}class Wm{resolveNodeVisibility(e,n){const t=e.value(),a=Nn(t),i=Bm.resolveNodeVisibility(e,n),o=No(n),l=o&&(!!(a!=null&&a.description)||!!e.diffs.description),s=o&&(i.showEnumValuesRow||!!qs(e)||!!Ps(e)||!!Os(e)),u=o&&(Um(a==null?void 0:a.default)||!!Rs(e)||!!Ms(e)),c=o&&(i.showExamplesRow||!!Is(e)||!!Hs(e)||!!Ls(e)),f=o&&(vs(t).length>0||Ym(e)),y=u||c||s||f||i.showExtensionsRow,p=l||i.showDeprecationReasonRow||y;return{...i,showDescription:l,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:s,showValidationsSection:f,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return _a(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return Sm(e,n)}}const $m=new Wm;function Pa(r,e){return $m.resolveNodeVisibility(r,e)}function Fs(r,e){return r.isCycle?!1:ws(r)?e.hideUnchangedNodes?e.isRoot||r.kind===Q.ROOT?!0:Qo(r):e.level<e.expandedDepth:!0}function Ks(r,e,n){if(!n)return r;const t=e===z;return(n===I.add?t:!t)?Math.max(r-1,0):r}var Tn=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(Tn||{});const zm={[Tn.JsonSchema]:aa};function Xm(r){return zm[r]??cr}const sr=m.memo(r=>{const{title:e,layoutSide:n,usage:t=Tn.Default,lastInvisible:a=!1,diff:i,levelReductionAction:o}=r,{[le]:l}=r,s=ia(n),u=m.useMemo(()=>Ks(s,n,o),[s,n,o]),c=m.useMemo(()=>Xm(t),[t]),f=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:h}=i,v=[];return n===z&&v.push(re.background(h.before.backgroundColor)),n===te&&v.push(re.background(h.after.backgroundColor)),v},[i,n]),y=m.useMemo(()=>{const h=i==null?void 0:i.data;return h?k(h)?n===te:x(h)?n===z:!0:!0},[i,n]),p=t===Tn.JsonSchema,g=typeof e=="function"?e(n):e,b=y&&g!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":l,className:["nesting-indicator-title-row-content flex w-full h-full",p?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(In,{level:u,lastInvisible:a&&y})}),b&&d.jsx(gu,{title:g})]})});sr.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ht=m.memo(r=>{const e=ve(),{diffsSeverities:n,diffsSeverityPlacement:t=H.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case Ee:return d.jsx(Ln,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Cn,{left:d.jsx(sr,{...r,layoutSide:z}),right:d.jsx(sr,{...r,layoutSide:te})})});case nn:return d.jsx(Hn,{content:d.jsx(sr,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ht.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Oa=m.createContext(null);function Gs(){const r=m.useContext(Oa);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const Qm=new Set([Q.ALL_OF,Q.ANY_OF,Q.ONE_OF]);class Zm{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return Qm.has(e)}}const Bs=new Zm;function ey(r){return Bs.resolveNodeVisibility(r)}function Ia(r){return Bs.isCombinerKind(r)}function Ha(r){return r.kind===Q.ROOT}function ny(r){return r.kind===Q.ADDITIONAL_PROPERTIES}function Xn(r){if(r.type!==fe.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:Ha(r)?!0:e.every(n=>Ia(n.kind))}function ry(r){return Ia(r)}function ty(r){var e;return wa((e=Nn(r.value()))==null?void 0:e.type)}function ay(r,e){return wa(vm(r,e))}function Us(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!ry(n)))return n}function Ys(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function Ws(r,e){const n=[];let t=r;for(;t&&Xn(t);){const a=t.nestedNodes(),i=Ys(t,a,e);if(!i)break;const o=ey(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:Us(t)}),Xn(i)){t=i;continue}break}return n}function $s(r,e){let n=r;for(;Xn(n);){const t=n.nestedNodes(),a=Ys(n,t,e);if(!a)break;n=a}return n}const iy=new Map;function zs(r){return $s(r,iy)}function oy(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set(Ws(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function La(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!R(n)||Fr(n)?null:n}function sy(r){if(r.type===fe.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Ia(n.kind))?e:r.childrenNodes()}const zt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:T.Yellow}};function Xs(r){return r&&O(r.data)?{...r,styles:zt}:{data:{type:"annotation",action:I.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:zt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie}}function or(r){const e=r.data,n={type:e.type,causedAt:[]};return x(e)||O(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:k(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function ly(r){return or({data:r,styles:zt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ie})}function Xt(r,e){if(!(!r||typeof r!="object")){if(ra(r)){e.push(r);return}for(const n of Object.values(r))Xt(n,e)}}function dy(...r){let e;for(const n of r)n&&(!e||ge.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function Qs(r){const e=r.diffs[_];return!!e&&(k(e.data)||x(e.data))}function uy(r){const e=r.nestedNodes();if(e.length===0)return;let n;for(const t of e){if(!ce(t))return;const a=t.diffs[_],i=a&&k(a.data)?I.add:a&&x(a.data)?I.remove:void 0;if(!i)return;if(!n){n=i;continue}if(n!==i)return}return n}function fy(r){if(ce(r)&&!Qs(r))return uy(r)}function cy(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function Zs(r){return ce(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>ce(e)&&cy(e)):!1}function my(r){if(!(!ce(r)||!Zs(r)))return Xs(r.diffs[_])}function yy(r){if(!ce(r)||!Zs(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(or(o));for(const o of r.nestedNodes()){if(!ce(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const l=[];for(const u of Object.values(o.diffs))Xt(u,l);for(const u of l)e.push(or(u));const s=jt([...o.diffsSummary,...o.descendantDiffsSummary]);s&&e.push({type:s,causedAt:[]})}const n=r.diffs[_];n&&e.push(or(n));const t=[];for(const o of Object.values(r.diffs))Xt(o,t);for(const o of t)e.push(or(o));const a=jt([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=dy(...e);if(!i){const o=Xs(n);return{[H.TitleRow]:ly(o.data)}}return{[H.TitleRow]:i}}function py(r){if(ce(r)){const e=Ur(r);if(e){const n=r.diffsSeverities[H.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[H.TitleRow]:n}:void 0}}}return{selectorRowDiff:my(r),diffsSeverities:yy(r)}}function bt(r){if(!Xn(r))return"";const e=Us(r);return e?` (${e})`:""}function gy(r,e,n=vn(La(r),r.meta())+bt(r)){const t={title:n,node:r,testId:`json-schema-combiner-option-${e}`};if(!ce(r))return t;const a=Qs(r);return{...t,diffs:r.diffs,...a?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}function el(r,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,a=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?r+1:r,0),afterLevel:Math.max(a?e+1:e,0)}}const nl=r=>d.jsx(Ya,{...r});nl.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const rl="show-all",hy="show-only-changed-nodes";function by(r){return r?hy:rl}function Sy(r){return r!==rl}const ja=m.createContext(null);function vy(){const r=m.useContext(ja);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function tl(){return m.useContext(ja)}function Dy(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({mode:r,hideUnchangedNodes:Sy(r),revealedBlockIds:e,revealBlock:t}),[r,e,t])}const wy="#64748B",al="#94A3B8";const fn=m.memo(r=>{const{text:e,color:n,className:t}=r,a=n===void 0?wy:n;return d.jsx("span",{className:["json-schema-type-value-text",t].filter(Boolean).join(" "),style:a?{color:a}:void 0,children:e})});fn.__docgenInfo={description:`Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
whether to render it at all.`,methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const il=m.memo(r=>{const{node:e}=r;return ty(e)?null:d.jsx(fn,{text:vn(e.value(),e.meta()),color:al})});il.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Qt=m.memo(r=>{const{text:e,diff:n,layoutSide:t,color:a}=r,i=To(n,t),o=xd(n,t),l=[re.highlighter(i),re.background(o)].filter(Boolean).join(" ");return d.jsx(fn,{text:e,color:a,className:l||void 0})});Qt.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const St=m.memo(r=>{const{display:e,layoutSide:n,color:t}=r;return e.kind===sn.NO_DIFFS?d.jsx(fn,{text:e.text,color:t}):e.kind===sn.WHOLE_DIFFS?d.jsx(Qt,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center gap-1",children:e.segments.map((a,i)=>d.jsx(Qt,{text:a.text,diff:a.diff,layoutSide:n,color:t},`${a.text}-${i}`))})});St.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const ol=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r;if(ay(e,t))return null;const a=Ra(e,n,t);return d.jsx(St,{display:a,layoutSide:t,color:al})});ol.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const sl=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));sl.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function Ai(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Hr=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[le]:o}=r,l=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(pd,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(ot,{text:Ai(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":Ai(n),onClick:l,children:d.jsx(sl,{})})})})]})});Hr.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const ll=m.memo(r=>{const e=ve(),n=Fe();switch(e){case Ee:return d.jsx(Cn,{left:d.jsx(Hr,{...r,layoutSide:"before",level:n}),right:d.jsx(Hr,{...r,layoutSide:"after",level:n})});case nn:return d.jsx(Hn,{content:d.jsx(Hr,{...r,layoutSide:"after",level:n})});default:return null}});ll.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Ja=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=vy(),i=ko(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:l}=m.useMemo(()=>nc(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:l.map((s,u)=>{const c=u===l.length-1;return s.kind==="placeholder"?t.has(s.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(s.sourceIndex,s.sourceIndex+s.blockSize).map((f,y)=>d.jsx(Qn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===s.blockSize-1},f.id))},s.unchangedBlockId):d.jsx(ll,{unchangedBlockId:s.unchangedBlockId,count:s.blockSize,onReveal:a},s.unchangedBlockId):d.jsx(Qn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:s.node,isLastInList:c},s.node.id)})})};Ja.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const Ny="markdown-text-row__json-schema-description",Ty="markdown-text-row__json-schema-expander",Ey=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function xy(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===z;return k(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:x(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:O(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function ky(r){switch(r){case B.body1:return"text-value-body1";case B.h1:case B.h2:case B.h3:case B.h4:case B.h5:case B.h6:return"text-value-body2";case B.body2:default:return"text-value-body2"}}function Ay(r,e){return r===Oe.JsonSchemaDescription?{markdownClassName:Ny,expanderClassName:Ty}:{markdownClassName:["text-slate-700",ky(e)].join(" "),expanderClassName:`text-value-expander ${Cd(e)}`.trim()}}const dl=m.memo(r=>{const{value:e,variant:n=B.body2,usage:t,layoutSide:a,diff:i}=r,[o,l]=m.useState(!1),{resolvedValue:s,isInvisible:u}=m.useMemo(()=>xy(e,i,a),[i,a,e]),c=m.useMemo(()=>o?s:kd(s),[o,s]),f=m.useMemo(()=>Ad(s),[s]),y=m.useMemo(()=>Ay(t,n),[t,n]),p=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const v=a===z?i.styles.before:i.styles.after,N=[];return v.textHighlighterColor&&N.push(re.highlighter(v.textHighlighterColor)),N},[i,a]),g=m.useMemo(()=>["markdown",y.markdownClassName].filter(Boolean).join(" "),[y.markdownClassName]),b=m.useMemo(()=>({p:({children:v})=>d.jsx("p",{children:d.jsx("span",{className:p.join(" "),children:v})})}),[p]),h=m.useCallback(()=>{l(v=>!v)},[]);return u||!c?null:d.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[d.jsx(hu,{className:g,remarkPlugins:[bu],components:b,children:c}),d.jsx(Ey,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});dl.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const Cy={[Oe.DdlApiProperty]:Vd,[Oe.JsonSchemaDescription]:aa},Vy={[Oe.DdlApiProperty]:["min-h-[26px]"]};function _y(r){const e=Cy[r]??cr,n=Vy[r]??[];return[e,...n].join(" ")}function Ry(r,e,n){return n===Oe.DdlApiProperty?Rd(r,e):r!=null&&r.data?(e===z?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Lr=m.memo(r=>{const{value:e,variant:n=B.body2,layoutSide:t,usage:a=Oe.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[le]:l}=r,s=ia(t),u=a===Oe.DdlApiProperty,c=u||a===Oe.JsonSchemaDescription,f=m.useMemo(()=>Ry(o,t,a),[o,t,a]),y=a===Oe.JsonSchemaDescription&&s===0,p=c&&s>0&&(!i||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:v}=o,N=[];return t===z&&N.push(re.background(v.before.backgroundColor)),t===te&&N.push(re.background(v.after.backgroundColor)),N},[o,t]),b=m.useMemo(()=>_y(a),[a]),h=d.jsx(dl,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":l,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===Oe.JsonSchemaDescription?"items-stretch":"",b,...g].filter(Boolean).join(" "),children:[y&&d.jsx(_d,{}),p&&d.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:h}):a===Oe.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:h}):h]})});Lr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Zt=m.memo(r=>{const e=ve(),{diffsSeverities:n,diffsSeverityPlacement:t=H.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case Ee:return d.jsx(Ln,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(Cn,{left:d.jsx(Lr,{...r,layoutSide:z}),right:d.jsx(Lr,{...r,layoutSide:te})})});case nn:return d.jsx(Hn,{content:d.jsx(Lr,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Zt.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function My(r){return r?en({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const Mn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Ce.UNIQUE_ITEMS};function Rt(r,e,n,t){const a=en({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function qy(r){const e=My(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function Py(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=Rt(n.minLength,n.maxLength);o.length&&e.push({key:Mn.VALUE_LENGTH,label:pa,values:o}),n.pattern!==void 0&&e.push({key:Mn.VALUE_PATTERN,label:ga,values:[String(n.pattern)]});const l=qy(t);l.length&&e.push({key:Mn.VALUE_RANGE,label:ha,values:l}),t.multipleOf!==void 0&&e.push({key:Mn.VALUE_MULTIPLE_OF,label:ba,values:[String(t.multipleOf)]});const s=Rt(a.minProperties,a.maxProperties);s.length&&e.push({key:Mn.PROPERTIES_COUNT,label:Sa,values:s}),i.uniqueItems!==void 0&&e.push({key:Mn.UNIQUE_ITEMS,label:va,values:[String(i.uniqueItems)]});const u=Rt(i.minItems,i.maxItems);return u.length&&e.push({key:Mn.ITEMS_COUNT,label:Da,values:u}),e}const Ci=[ye.VALUE_LENGTH,ye.VALUE_PATTERN,ye.VALUE_RANGE,ye.VALUE_MULTIPLE_OF,ye.PROPERTIES_COUNT,ye.UNIQUE_ITEMS,ye.ITEMS_COUNT];function Oy(r){return[...r].sort((e,n)=>Ci.indexOf(e.key)-Ci.indexOf(n.key))}const ul=r=>{const{extensions:e,extensionsDiffs:n}=r,a=Fe()+1,i=Ke(),o=Jn(),l=!!n&&Object.keys(n).length>0,s=m.useMemo(()=>!l||!o?e:{...e,[o.diffsMetaKey]:n},[o,e,n,l]);return d.jsx(He.Provider,{value:a,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ht,{title:"Extensions",usage:Tn.JsonSchema,lastInvisible:!0}),o?d.jsx(pr,{mergedSource:s,initialLevel:a,displayMode:i,diffMetaKeys:o}):d.jsx(gr,{source:e,initialLevel:a})]})})};ul.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""},extensionsDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>"}],raw:"Record<OpenApiExtensionKey, Diff<DiffType>>"}],raw:"Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>"},description:""}}};const Yn=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,a)=>d.jsx(Md,{isVisible:!0,value:t.text,usage:qd.JsonSchemaValidation,textHighlighterColor:To(t.diff,e),borderShadowColor:Pd(t.diff,e),isFontMuted:Od(t.diff,e),isEmptyStringPlaceholder:Im(t.text)},`${t.text}-${a}`))}):null});Yn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Vi={valueLength:pa,valuePattern:ga,valueRange:ha,valueMultipleOf:ba,propertiesCount:Sa,itemsCount:Da,uniqueItems:va};function Iy(r){return ce(r)&&(r.kind===Q.PROPERTY||r.kind===Q.ROOT)}const Fa=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Ke(),i=n??e.value(),o=Nn(i),l=Iy(e)?e:void 0,s=ce(e)?e:void 0,u=m.useMemo(()=>l&&n===void 0?Pa(l,a):Va(n!==void 0?{value:()=>n}:e,a),[a,n,e,l]),c=m.useMemo(()=>s?qs(s):void 0,[s]),f=m.useMemo(()=>s?Ps(s):void 0,[s]),y=m.useMemo(()=>s?Os(s):void 0,[s]),p=m.useMemo(()=>s?Is(s):void 0,[s]),g=m.useMemo(()=>s?Hs(s):void 0,[s]),b=m.useMemo(()=>s?Ls(s):void 0,[s]),h=m.useMemo(()=>s?Rs(s):void 0,[s]),v=m.useMemo(()=>s?Ms(s):void 0,[s]),N=m.useMemo(()=>s?Cm(s):void 0,[s]),D=mr(e,ce),S=m.useMemo(()=>se(D,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[D]),E=m.useMemo(()=>{const F=Py(o);if(!s)return F;const Y=new Set(F.map(ee=>ee.key)),Z=Object.keys(Vi).filter(ee=>!Y.has(ee)).filter(ee=>ki(s,ee)).map(ee=>({key:ee,label:Vi[ee],values:[]}));return Oy([...F,...Z])},[s,o]),A=m.useMemo(()=>{var Z;if(!ny(e))return;const F=e.parent,Y=Nn((F==null?void 0:F.value())??null);return(Z=Y==null?void 0:Y.propertyNames)==null?void 0:Z.enum},[e]),C=m.useMemo(()=>s?Rm(s):void 0,[s]),M=m.useMemo(()=>s?Mm(s):void 0,[s]),q=m.useMemo(()=>s?qm(s):void 0,[s]),J=a===gd&&!!(A!=null&&A.length),U=m.useCallback(F=>{const Y=Fm(A??[],C,M,F);return Y.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:F,sideItems:Y.map(({text:Z,valueDiffKey:ee})=>({text:Z,diff:Pr(M,ee)}))})},[A,C,M]),L=m.useCallback(F=>{const Y=Jm((o==null?void 0:o.enum)??[],c,f,F);return Y.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:F,sideItems:Y.map(({text:Z,valueDiffKey:ee})=>({text:Z,diff:Pr(f,ee)}))})},[c,f,o==null?void 0:o.enum]),j=m.useCallback(F=>{const Y=Km((o==null?void 0:o.examples)??[],p,g,F);return Y.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:F,sideItems:Y.map(({text:Z,valueDiffKey:ee})=>({text:Z,diff:Pr(g,ee)}))})},[p,g,o==null?void 0:o.examples]),G=m.useCallback(F=>{const Y=o==null?void 0:o.default,Z=Hm(Y,h,F);return Z.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:F,sideItems:Z.map(({text:ee})=>({text:ee,diff:h}))})},[h,o==null?void 0:o.default]),ae=m.useCallback((F,Y)=>Z=>{const ee=s?Yr(s,F):void 0,$e=s?js(s,F):void 0,W=Gm(F,Y,ee,$e,Z,F===ye.VALUE_RANGE&&s?{nodeValue:i,crawlDiffs:Pm(s)??{}}:void 0);return W.length===0?d.jsx(d.Fragment,{}):d.jsx(Yn,{layoutSide:Z,sideItems:W.map(({text:de,valueDiffKey:Ge})=>({text:de,diff:Pr($e,Ge)}))})},[s,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(Zt,{usage:Oe.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||S.diff)&&d.jsx(Zt,{usage:Oe.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...S}),u.showDefaultRow&&d.jsx(rr,{label:"Default",usage:tr.JsonSchemaValidation,subheader:G,colorizingDiff:v,diffsSeverities:h||v?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.DefaultRow}),u.showExamplesRow&&d.jsx(rr,{label:"Examples",usage:tr.JsonSchemaValidation,subheader:j,diff:p,colorizingDiff:b,diffsSeverities:p||g||b?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.ExamplesRow}),u.showEnumValuesRow&&d.jsx(rr,{label:"Allowed values",usage:tr.JsonSchemaValidation,subheader:L,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.EnumRow,..._a(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),J&&d.jsx(rr,{label:Ro,usage:tr.JsonSchemaValidation,subheader:U,diff:C,colorizingDiff:q,diffsSeverities:C||M||q?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&E.map(F=>{const Y=F.key,Z=s?Yr(s,Y):void 0,ee=s?Ma(s,Y):void 0;return d.jsx(rr,{label:F.label,usage:tr.JsonSchemaValidation,subheader:ae(Y,F.values),diff:Z,colorizingDiff:ee,diffsSeverities:s&&ki(s,Y)?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:Do[Y]},F.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(ul,{extensions:o.extensions,extensionsDiffs:N})]})};Fa.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Hy(r){const e=_s(r),n={};for(const t of $n){const a=e[t];a&&(n[t]=a)}return n}function Ly(r,e){var s;const n=!!r.diffs[_],t=_s(r),a=Hy(r),i=t.required,o=i?{...a,required:i}:a,l=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:l,requiredChanged:!n&&!!i,$nodeChange:(s=r.diffs[_])==null?void 0:s.data,$metaChanges:o}}const fl=m.memo(r=>{const{value:e,meta:n,suffix:t}=r;return d.jsxs(d.Fragment,{children:[d.jsx(fn,{text:vn(e,n)}),t&&d.jsx(fn,{text:t})]})});fl.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const cl=m.memo(r=>{const{node:e,meta:n,layoutSide:t,suffix:a}=r,i=Ra(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(St,{display:i,layoutSide:t}),a&&d.jsx(fn,{text:a})]})});cl.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const ml=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(fl,{value:e,meta:n,suffix:o}),t&&d.jsx(ot,{text:ca,children:d.jsx(ma,{})}),d.jsx(ya,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},yl=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;ve();const l=Ly(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(cl,{node:n,meta:e,layoutSide:a,suffix:o}),t&&d.jsx(ot,{text:ca,children:d.jsx(ma,{})}),d.jsx(ya,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...l})]})};ml.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const jy="Type: ";function Jy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return Ha(e)?{variant:"text",text:t??jy}:a===Q.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:hd}:{variant:"badge",text:"additional property",badgeKind:vr}:a===Q.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:vr}:a===Q.ITEMS?{variant:"badge",text:"item",badgeKind:vr}:a===Q.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:vr}:a===Q.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function Fy(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===Q.ADDITIONAL_PROPERTIES&&n===!1}function Ky(r,e,n,t,a){const i=r===!0&&!me(e)||!!e&&(e.action===I.remove&&t||e.action===I.add&&a||e.action===I.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const pl=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=ve(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=yo(a),{originSide:l,changedSide:s}=bd(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!Ky(e,n,o,l,s)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};pl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const gl="text-xs text-black font-Inter-Medium",hl=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(ho,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${gl}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},bl=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(ho,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${gl}`,children:[e.text,d.jsx(pl,{required:n,requiredDiff:t,layoutSide:a})]})}};hl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};bl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Gy(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:l=!1,titleRowDiff:s}=r,u=as(),c=e.meta(),f=Nn(t??n.value()),y=n.meta(),p=m.useMemo(()=>_a(i,a),[a,i]),g=m.useMemo(()=>Jy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),b=m.useMemo(()=>v=>{const N=Eo(s);return(N?xo(N,v):Id(s,v))?l?d.jsx(bl,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:v}):d.jsx(hl,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,s,l]),h=m.useMemo(()=>!Fy(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:p,titleContent:b,showTypeSubheader:h}}const Ka=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[le]:p}=r,{displayValueResolved:g,displayMeta:b,listLastRowFlags:h,titleContent:v,showTypeSubheader:N}=Gy({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(he,{...h,"data-precededby":p,titleContent:v,expandable:o,expanded:l,isRoot:Ha(e),onClickExpander:o?s:void 0,variant:B.body2,subheader:D=>y({layoutSide:D,displayValueResolved:g,displayMeta:b,displayNode:n,showTypeSubheader:N}),usage:nt.JsonSchemaProperty,...u})};Ka.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Ga=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,typeValueSuffix:u,...c}=r;return d.jsx(Ka,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,renderSubheader:({layoutSide:f,displayValueResolved:y,displayMeta:p,displayNode:g,showTypeSubheader:b})=>d.jsx(ml,{value:y,meta:p,isCycle:g.isCycle,layoutSide:f,showTypeLabel:b,typeValueSuffix:u})})};Ga.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function By(r){return se(dn(r),{resolveDiff:()=>km(r)})}const Ba=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,typeValueSuffix:c,...f}=r,y=m.useMemo(()=>u??By(n),[n,u]),p=m.useMemo(()=>_m(e),[e]),g=ve(),b=m.useMemo(()=>Am(n),[n]),h=!l&&o&&g===Ee&&!!b&&b.size>0;return d.jsx(Ka,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,titleRowDiffProps:y,requiredDiff:p,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:v,displayMeta:N,displayNode:D,showTypeSubheader:S})=>xo(Eo(y.diff),v)?d.jsxs(d.Fragment,{children:[d.jsx(yl,{meta:N,node:n,isCycle:D.isCycle,layoutSide:v,showTypeLabel:S,typeValueSuffix:c}),h&&d.jsx(fa,{values:Array.from(b)})]}):d.jsx(d.Fragment,{})})};Ba.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function Uy(r){return ce(r)&&r.kind===Q.PROPERTY}const Ua=r=>{const{node:e,isLastInList:n=!1,[le]:t}=r,a=Ke(),i=Fe(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Gs(),u=Uy(e)?e:void 0,c=ce(e)?e:void 0,f=tl(),y=m.useMemo(()=>u?Pa(u,a):Va(e,a),[a,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,s]),g=m.useMemo(()=>ws(e),[e,s]),b=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Fs(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===Q.ROOT}):Ns(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),h=m.useMemo(()=>Pn(e,b),[b,e,s]),[v,N]=m.useState(h);m.useEffect(()=>{N(L=>Pn(e,L))},[e,s]);const D=m.useCallback(()=>{N(L=>{const j=!L;return j&&l(e),Pn(e,j)})},[l,e]),S=!g||v,E=m.useCallback(L=>c?d.jsx(ol,{node:c,meta:c.meta(),layoutSide:L}):d.jsx(il,{node:e}),[e,c]),A=m.useMemo(()=>c?Ur(c):void 0,[c]),C=ta(),M=(C==null?void 0:C.beforeLevel)??i,q=(C==null?void 0:C.afterLevel)??i,{beforeLevel:J,afterLevel:U}=m.useMemo(()=>el(M,q,A),[M,q,A]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(Ba,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:g,expanded:v,onClickExpander:D}):d.jsx(Ga,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:g,expanded:v,onClickExpander:D}),S&&d.jsxs(d.Fragment,{children:[d.jsx(Fa,{node:e,isLastInList:n&&p.length===0}),p.length>0&&d.jsx(He.Provider,{value:i+1,children:d.jsxs(yr,{beforeLevel:J,afterLevel:U,children:[d.jsx(ht,{title:E,usage:Tn.JsonSchema,lastInvisible:!0,diff:A,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),c&&f?d.jsx(Ja,{children:p}):p.map((L,j)=>c?d.jsx(Qn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:L,isLastInList:j===p.length-1},L.id):d.jsx(wt,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:L,isLastInList:j===p.length-1},L.id))]})})]})]})};Ua.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Sl=r=>d.jsx(Ua,{...r});Sl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vl=m.memo(r=>{const{node:e}=r,n=zs(e),t=vn(La(n),n.meta())+bt(e);return d.jsx(fn,{text:t,color:null})});vl.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Dl=m.memo(r=>{const{node:e,layoutSide:n}=r,t=zs(e),a=Ra(t,t.meta(),n),i=bt(e);return d.jsxs(d.Fragment,{children:[d.jsx(St,{display:a,layoutSide:n,color:null}),i&&d.jsx(fn,{text:i,color:null})]})});Dl.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=new Set;function vt(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=te}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row gap-2",children:e.map(o=>{const{diffsRelatedClassesList:l,isInvisible:s}=Yy({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(s)return null;const u=l.join(" "),c=typeof o.title=="function"?o.title(i):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:f=>{f.preventDefault(),f.stopPropagation(),t(o)},children:c},o.node.id)})})}function Yy(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const l=e==null?void 0:e[_];if(l){const{styles:s}=l;switch(a){case z:l.inherited||i.push(re.borderShadow(s.before.borderShadowColor)),o=l.data.action===I.add;break;case te:l.inherited||i.push(re.borderShadow(s.after.borderShadowColor)),o=l.data.action===I.remove;break}}if(!(l!=null&&l.inherited)&&(n||t)){const s=n??_i,u=t??_i,c=new Set([...s,...u]),f=jt(c);i.push(f?re.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}vt.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var Dt=(r=>(r.Primary="primary",r.Secondary="secondary",r))(Dt||{});function Wy(r,e){if(!r)return"";const n=e===z?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return re.background(n)}const $y=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i,levelReductionAction:o}=r,l=ia(i),s=m.useMemo(()=>Ks(l,i,o),[l,i,o]),u=m.useMemo(()=>Wy(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${aa} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(vt,{options:e,selectedOption:n,onSelectOption:t,variant:Dt.Secondary,layoutSide:i})})]})}),Mt=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(sr,{title:e,usage:Tn.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t,levelReductionAction:r.levelReductionAction}),n&&d.jsx($y,{...r})]})}),wl=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=ve(),i=m.useMemo(()=>t==null?void 0:t[H.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case Ee:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Cn,{left:d.jsx(Mt,{...r,layoutSide:z}),right:d.jsx(Mt,{...r,layoutSide:te})})});case nn:return d.jsx(Hn,{content:d.jsx(Mt,{...r,layoutSide:te})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});wl.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};function zy(r){return ce(r)&&r.kind===Q.PROPERTY}const Ya=r=>{const{node:e,isLastInList:n=!1,[le]:t}=r,a=Ke(),i=Fe(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Gs(),u=ce(e)?e:void 0,c=tl(),f=e.nestedNodes(),[y,p]=m.useState(()=>new Map),g=m.useMemo(()=>Ws(e,y),[e,y]),b=m.useMemo(()=>$s(e,y),[e,y]),h=m.useMemo(()=>La(b),[b]),v=ce(b)?b:void 0,N=zy(b)?b:void 0,D=m.useMemo(()=>N?Pa(N,a):Va({value:()=>h},a),[h,N,a]),S=m.useMemo(()=>sy(b),[b,s]),E=m.useMemo(()=>S.length>0,[S.length]),A=m.useMemo(()=>e.isCycle||S.length===0?!1:v&&(c!=null&&c.hideUnchangedNodes)?Fs(v,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):Ns(b,{expandedDepth:o,level:i}),[e.isCycle,b,v,c==null?void 0:c.hideUnchangedNodes,o,S.length,i]),C=m.useMemo(()=>Pn(b,A),[b,A,s]),[M,q]=m.useState(C);m.useEffect(()=>{q(Pn(b,A))},[b.id,b,A]),m.useEffect(()=>{q($=>Pn(b,$))},[b,s]);const J=m.useCallback(()=>{q($=>{const pe=!$;return pe&&l(b),Pn(b,pe)})},[b,l]),U=m.useMemo(()=>vn(h,b.meta()),[b,h]),L=m.useMemo(()=>bt(e),[e]),j=m.useMemo(()=>v?Ur(v):void 0,[v]),G=ta(),ae=(G==null?void 0:G.beforeLevel)??i,F=(G==null?void 0:G.afterLevel)??i,Y=m.useMemo(()=>u?Ur(u):void 0,[u]),{beforeLevel:Z,afterLevel:ee}=m.useMemo(()=>el(ae,F,Y),[ae,F,Y]),$e=m.useCallback(($,pe)=>{p(Be=>oy(e,Be,$.id,pe.node.id))},[e]);if(f.length===0)return null;const W=M&&S.length>0,de=!!(u&&c),Ge=u?Qn:wt;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&v?d.jsx(Ba,{"data-precededby":t,ownerNode:u,displayNode:v,displayValue:h,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!E,expandable:E,expanded:M,onClickExpander:J,typeValueSuffix:L}):d.jsx(Ga,{"data-precededby":t,ownerNode:e,displayNode:b,displayValue:h,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!E,expandable:E,expanded:M,typeValueSuffix:L,onClickExpander:J}),d.jsx(Fa,{node:b,displayValue:h,isLastInList:n&&!E&&g.every($=>!$.showSelector)}),d.jsx(He.Provider,{value:i+1,children:d.jsxs(yr,{beforeLevel:Z,afterLevel:ee,children:[g.map($=>{const pe=$.nestedNodes.map((_e,br)=>gy(_e,br,ce(_e)?Ml=>d.jsx(Dl,{node:_e,layoutSide:Ml}):()=>d.jsx(vl,{node:_e}))),Be=pe.find(_e=>_e.node.id===$.selectedNestedNode.id)??pe[0]??null,Ue=py($.combinerNode),Fn=fy($.combinerNode);return d.jsx(wl,{combinerKindLabel:$.combinerKindLabel,showSelector:$.showSelector,options:pe,selectedOption:Be,onSelectOption:_e=>$e($.combinerNode,_e),selectorRowDiff:Ue.selectorRowDiff,diffsSeverities:Ue.diffsSeverities,levelReductionAction:Fn},$.combinerNode.id)}),W&&d.jsxs(d.Fragment,{children:[d.jsx(ht,{title:U,usage:Tn.JsonSchema,lastInvisible:!0,diff:j,diffsSeverities:v==null?void 0:v.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),de?d.jsx(Ja,{children:S}):S.map(($,pe)=>d.jsx(Ge,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:$,isLastInList:pe===S.length-1},$.id))]})]})})]})};Ya.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const wt=r=>{const{node:e}=r;return Xn(e)?d.jsx(Ya,{...r}):d.jsx(Ua,{...r})};wt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Xy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(En,{fallback:d.jsx(xn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(Qy,{...r})})),Qy=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=An,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,l=m.useMemo(()=>rn(a),[a]),s=m.useMemo(()=>new Jo({source:e,materializeDepth:n,logger:l}),[e,n,l]),u=m.useMemo(()=>s.build(),[s]),[c,f]=m.useReducer(b=>b+1,0),y=m.useCallback(b=>{s.materializeChildren(b),f()},[s]),p=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(Oa.Provider,{value:p,children:d.jsx(ft.Provider,{value:o,children:d.jsx(kn.Provider,{value:t,children:d.jsx(On.Provider,{value:nn,children:d.jsx(He.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(wt,{node:g})})})})})})}):null};Xy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const Zy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(En,{fallback:d.jsx(xn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(ep,{...r})})),ep=r=>{const{schema:e,expandedDepth:n=zr,displayMode:t=An,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:l,diffTypes:s,hideUnchangedNodes:u=!0}=r,c=m.useMemo(()=>by(u),[u]),f=Dy(c),y=m.useMemo(()=>rn(a),[a]),p=m.useMemo(()=>new Qf({source:e,materializeDepth:n,diffsMetaKeys:l,logger:y}),[e,n,l,y]),g=m.useMemo(()=>p.build(),[p]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",g);const[b,h]=m.useReducer(S=>S+1,0),v=m.useCallback(S=>{p.materializeChildren(S),h()},[p]),N=m.useMemo(()=>({expandedDepth:n,materializeChildren:v,treeRevision:b}),[n,v,b]),D=g.root;return D?d.jsx(tt.Provider,{value:l,children:d.jsx(da.Provider,{value:s,children:d.jsx(ja.Provider,{value:f,children:d.jsx(Oa.Provider,{value:N,children:d.jsx(ft.Provider,{value:o,children:d.jsx(kn.Provider,{value:t,children:d.jsx(On.Provider,{value:Ee,children:d.jsx(He.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Qn,{node:D})})})})})})})})})}):null};Zy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.'}}};var Wr=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Wr||{});const hr=r=>{const{node:e,variant:n=Wr.PRIMARY,[le]:t}=r,a=Ke(),i=Jn(),o=e.meta(),l=o==null?void 0:o.brokenRef,[s,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(Ct).map((S,E)=>{var M;const A=((M=S.value())==null?void 0:M.protocol)??"",C=`binding-${E}`;return Vt(S)?{title:A,node:S,testId:C,diffs:S.diffs,diffsSummary:S.diffsSummary,descendantDiffs:S.descendantDiffs,descendantDiffsSummary:S.descendantDiffsSummary,diffsSeverities:S.diffsSeverities}:{title:A,node:S,testId:C}}),[c]),y=s!=null&&s.node&&Ct(s.node)?s.node:null,p=y==null?void 0:y.value(),{version:g="latest",binding:b=null}=p??{};m.useEffect(()=>{f.length>0&&s===null&&u(f[0])},[f,s]);const h=m.useCallback(S=>l?d.jsx(d.Fragment,{}):d.jsx(vt,{options:f,selectedOption:s,onSelectOption:u,variant:Dt.Secondary,layoutSide:S}),[f,l,s]),v=m.useMemo(()=>{if(bc(e)){const S=dn(e);return se(S)}return{}},[e]),N=m.useMemo(()=>{if(y&&Vt(y)){const S=dn(y);return se(S,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:H.BindingVersionRow})}return{}},[y]),D=m.useMemo(()=>{if(!y)return null;if(Vt(y)&&i){const S=y.diffs[_],E=np(b,S,i);return d.jsx(pr,{"data-precededby":V.BINDING_VERSION_ROW,mergedSource:E,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return Ct(y)?d.jsx(gr,{"data-precededby":V.BINDING_VERSION_ROW,source:b,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,b,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Wr.PRIMARY?B.h3:B.h5,subheader:h,...v}),d.jsxs("div",{"data-testid":`${s==null?void 0:s.testId}-content`,className:"flex flex-col",children:[d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:B.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...N}),D]})]})};function np(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,k(t)){const s=r[l];o[l]={...t,afterValue:s}}if(x(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}hr.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const Nt=r=>{const{node:e,[le]:n}=r,t=Jn(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var l;if(Sc(e)){const s=dn(e);return{...se(s),highlightingMode:(l=e.diffs[_])==null?void 0:l.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:"Extensions",expandable:!1,variant:B.h3,usage:nt.AsyncApiJsoSection,...o}),t?d.jsx(pr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(gr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};Nt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Nl="Address Parameters",Tl=r=>{const{node:e,[le]:n}=r,t=Ke();if(Dc(e))return d.jsx(rp,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:Nl,expandable:!1,variant:B.h3}),d.jsx(mt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},rp=r=>{const{node:e,[le]:n}=r,t=Ke(),a=ve(),i=e.value(),o=i==null?void 0:i.rawValues,l=Jn(),s=m.useMemo(()=>{const c=dn(e);return se(c)},[e]),u=m.useMemo(()=>tp(o,e.diffs[_],l),[o,l,e.diffs]);return!l||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:Nl,expandable:!1,variant:B.h3,...s}),d.jsx(pt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:l,overriddenKind:"parameters"})]})};function tp(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,k(t)){const s=r[l];o[l]={...t,afterValue:s}}if(x(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}Tl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const El=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(ve()){case Ee:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(Cn,{left:e(z),right:e(te)})});case nn:return d.jsx(Hn,{content:e(te)})}return null});El.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const xl=m.memo(r=>{const{node:e,[le]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(dt),o=mr(e,Ar),{nodeDiffs:l}=o,s=m.useMemo(()=>se(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>se(o,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[o]),c=m.useMemo(()=>se(o,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[o]),f=m.useMemo(()=>se(o,{resolveDiff:(N,D)=>{const S=ge.maxChangedPropertyMetaDataByDiffType(D("protocol"),D("host"));return N[_]??S}}),[o]),y=m.useCallback(N=>{var q;if(!t)return null;if(!Ar(e))return d.jsx(d.Fragment,{children:t.protocol});const D=(q=e.diffs)==null?void 0:q.protocol;if(!D)return d.jsx(d.Fragment,{children:t.protocol});const S=new Set,{data:E,styles:A}=D;let C=t.protocol,M=!1;return N===z&&(S.add(re.highlighter(A.before.textHighlighterColor)),x(E)||O(E)?C=E.beforeValue:ln(E)&&(C=E.beforeKey),k(E)&&(M=!0)),N===te&&(S.add(re.highlighter(A.after.textHighlighterColor)),k(E)||O(E)?C=E.afterValue:ln(E)&&(C=E.afterKey),x(E)&&(M=!0)),M?null:d.jsx("span",{className:Array.from(S).join(" "),children:C})},[e,t]),p=m.useCallback(N=>{var q;if(!t)return null;if(!Ar(e))return d.jsx(d.Fragment,{children:t.host});const D=(q=e.diffs)==null?void 0:q.host;if(!D)return d.jsx(d.Fragment,{children:t.host});const S=new Set,{data:E,styles:A}=D;let C=t.host,M=!1;return N===z&&(S.add(re.highlighter(A.before.textHighlighterColor)),x(E)||O(E)?C=E.beforeValue:ln(E)&&(C=E.beforeKey),k(E)&&(M=!0)),N===te&&(S.add(re.highlighter(A.after.textHighlighterColor)),k(E)||O(E)?C=E.afterValue:ln(E)&&(C=E.afterKey),x(E)&&(M=!0)),M?null:d.jsx("span",{className:Array.from(S).join(" "),children:C})},[e,t]),g=m.useCallback(N=>{var q;function D(J=!1,U=[]){return d.jsx("div",{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${cr} py-2 flex flex-row w-full h-full ${U.join(" ")}`,children:!J&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(N),"://",p(N)]})})}if(!Ar(e))return D();const S=((q=e.diffs)==null?void 0:q[_])??f.diff;if(!S)return D();const{data:E,styles:A}=S,C=new Set;let M=!1;return N===z&&(k(E)?(C.add(re.background(T.Gray)),M=!0):C.add(re.background(A.before.backgroundColor))),N===te&&(x(E)?(C.add(re.background(T.Gray)),M=!0):C.add(re.background(A.after.backgroundColor))),D(M,Array.from(C))},[e,p,y,f.diff]),b=m.useMemo(()=>Je(t,l,"title"),[t,l]),h=m.useMemo(()=>Je(t,l,"description"),[t,l]),v=m.useMemo(()=>Je(t,l,"summary"),[t,l]);return t?d.jsxs("div",{className:"flex flex-col",children:[b&&d.jsx(he,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:B.h4,...s}),!b&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h4,...s}),d.jsx(El,{renderAddress:g,...f}),h&&d.jsx(un,{"data-precededby":V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h6,textFontWeight:"normal",textColor:wn,...u}),v&&d.jsx(un,{"data-precededby":h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h6,textFontWeight:"normal",textColor:wn,...c}),i&&d.jsx(hr,{"data-precededby":v?V.SUMMARY_ROW:h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,node:i,variant:Wr.SECONDARY})]}):null});xl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Al=r=>{const{node:e,[le]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(dt),o=a.find(ic),l=a.find(sc),s=a.find(Ta),u=mr(e,vc),{nodeDiffs:c}=u,f=m.useMemo(()=>se(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>se(u,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[u]),p=m.useMemo(()=>se(u,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[u]),g=m.useMemo(()=>Je(t,c,"title"),[t,c]),b=m.useMemo(()=>Je(t,c,"description"),[t,c]),h=m.useMemo(()=>Je(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(he,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:B.h2,...f}),!g&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h2,...f}),b&&d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...y}),h&&d.jsx(un,{"data-precededby":b?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...p}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Tl,{"data-precededby":b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),l&&d.jsx(kl,{"data-precededby":o?V.JSON_SCHEMA_VIEWER:b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),s&&d.jsx(Nt,{"data-precededby":l?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),i&&d.jsx(hr,{"data-precededby":s?V.JSO_VIEWER:l?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:b?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Al.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Cl=r=>{const{node:e,[le]:n}=r,t=Ke(),a=ve(),i=Jn(),o=ko(),l=e.childrenNodes(),s=l.find(tc),u=l.find(Ta),c=l.find(dt),f=l.find(ac),y=m.useMemo(()=>Mi(s,i),[s,i]),p=m.useMemo(()=>Mi(f,i),[f,i]),g=m.useMemo(()=>{if(Nc(s)){const v=dn(s);return se(v)}return{}},[s]),b=m.useMemo(()=>{if(Tc(f)){const v=dn(f);return se(v)}return{}},[f]),h=m.useCallback(v=>a===nn?d.jsx(mt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:v,displayMode:t,overriddenKind:"parameters"}):a===Ee&&i?d.jsx(pt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:v,displayMode:t,metaKeys:i,filters:o,layoutMode:Ee,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[s&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":n,value:"Headers",variant:B.h3,expandable:!1,...g}),h(y)]}),u&&d.jsx(Nt,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(hr,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:u?V.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":s?V.JSON_SCHEMA_VIEWER:u||c?V.JSO_VIEWER:n,value:"Payload",variant:B.h3,expandable:!1,...b}),h(p)]})]})},Ri="Type";function Mi(r,e){if(!r)return;const n=r.value();if(n)return r instanceof Le?Wt(Ri,n.schema,r.diffs[_],e):fs(Ri,n.schema)}Cl.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Vl=r=>{const{node:e,[le]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(dt),o=a.find(Ta),l=mr(e,xc),{nodeDiffs:s}=l,u=m.useMemo(()=>se(l,{diffKey:"title"}),[l]),c=m.useMemo(()=>se(l,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[l]),f=m.useMemo(()=>se(l,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[l]),y=m.useMemo(()=>Je(t,s,"title"),[t,s]),p=m.useMemo(()=>Je(t,s,"description"),[t,s]),g=m.useMemo(()=>Je(t,s,"summary"),[t,s]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(he,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:B.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),variant:B.h2,expandable:!1,expanded:!0,...u}),p&&d.jsx(un,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...c}),g&&d.jsx(un,{"data-precededby":p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:wn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Nt,{"data-precededby":g?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(hr,{"data-precededby":o?V.JSO_VIEWER:g?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Vl.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const _l=r=>{const{node:e,[le]:n}=r;return es(e)?d.jsx(Cl,{"data-precededby":n,node:e}):ns(e)?d.jsx(Al,{"data-precededby":n,node:e}):rs(e)?d.jsx(Vl,{"data-precededby":n,node:e}):null};_l.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Rl=r=>{const{node:e,[le]:n}=r,t=ve();Ke();const[a,i]=m.useState(null),o=e.nestedNodes(),l=m.useMemo(()=>o.map(g=>{const b=ap(g),h=ip(g);return Ac(g)?{node:g,title:b,testId:h,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:b,testId:h}}),[o]);m.useEffect(()=>{l.length>0&&a===null&&i(l[0])},[l,a]);const s=m.useMemo(()=>{var g;return kc(e)?(g=e.diffs)==null?void 0:g[_]:null},[e]),u=m.useMemo(()=>{if(s){const{data:g}=s;if(O(g)||x(g))return g.beforeDeclarationPaths[0];if(k(g))return g.afterDeclarationPaths[0]}return null},[s]),c=m.useMemo(()=>{var g;return(g=s==null?void 0:s.data)==null?void 0:g.type},[s]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),y=m.useCallback(g=>{const b=new Set;if(s){const{styles:h}=s;g===z&&b.add(re.background(h.before.backgroundColor)),g===te&&b.add(re.background(h.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${cr} h-full ${Array.from(b).join(" ")}`,children:d.jsx(vt,{options:l,selectedOption:a,onSelectOption:i,variant:Dt.Secondary,layoutSide:g})})},[s,n,l,a]),p=m.useCallback(()=>{switch(t){case Ee:return d.jsx(Ln,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(Cn,{left:y(z),right:y(te)})});default:return d.jsx(Hn,{content:y(te)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[p(),a&&oc(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(_l,{"data-precededby":V.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function ap(r){switch(r.kind){case w.MESSAGE_CONTENT:return"Message";case w.MESSAGE_CHANNEL:return"Channel";case w.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function ip(r){switch(r.kind){case w.MESSAGE_CONTENT:return"message-content";case w.MESSAGE_CHANNEL:return"message-channel";case w.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Rl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const Wa=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=mr(e,Ec),{nodeDiffs:o}=i,l=m.useMemo(()=>se(i,{diffKey:"title"}),[i]),s=m.useMemo(()=>se(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>se(i,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[i]),c=m.useMemo(()=>se(i,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[i]),f=m.useMemo(()=>Je(t,o,"title"),[t,o]),y=m.useMemo(()=>Je(t,o,"description"),[t,o]),p=m.useMemo(()=>Je(t,o,"summary"),[t,o]),g=n?V.ROOT:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(he,{"data-precededby":V.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:B.h1,...l}),!n&&!f&&d.jsx(he,{"data-precededby":V.ROOT,value:e.key.toString(),expandable:!1,variant:B.h1,...l}),d.jsx(ts,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...s}),y&&d.jsx(un,{"data-precededby":V.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h4,textFontWeight:"normal",textColor:wn,...u}),p&&d.jsx(un,{"data-precededby":y?V.DESCRIPTION_ROW:V.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h4,textFontWeight:"normal",textColor:wn,...c}),d.jsx(op,{"data-precededby":p?V.SUMMARY_ROW:y?V.DESCRIPTION_ROW:V.ADDRESS_ROW,children:a})]})},op=r=>{const{children:e,[le]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>rc(t)?d.jsx(Rl,{"data-precededby":n,node:t},t.key):null)})};Wa.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const sp=m.memo(r=>r.source===null?null:d.jsx(En,{fallback:d.jsx(xn,{componentName:"Async API Operation Viewer"}),children:d.jsx(lp,{...r})})),lp=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=An,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,l=m.useMemo(()=>rn(a),[a]),s=m.useMemo(()=>new Oo({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:l}),[e,n,o,l]),u=m.useMemo(()=>(s==null?void 0:s.build())??null,[s]);l.debug("[AsyncAPI] Original Source:",e),l.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!Zo(c)?null:d.jsx(wo.Provider,{value:a,children:d.jsx(kn.Provider,{value:t,children:d.jsxs(On.Provider,{value:nn,children:[" ",d.jsx(He.Provider,{value:0,children:d.jsx(Wa,{node:c,noHeading:i})})]})})})});sp.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{sp as A,gr as J,_c as a,mt as b,pt as c,Zy as d,Xy as e,pr as f};
