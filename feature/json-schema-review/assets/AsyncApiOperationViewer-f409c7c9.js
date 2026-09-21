var Ys=Object.defineProperty;var Ws=(i,e,n)=>e in i?Ys(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var q=(i,e,n)=>(Ws(i,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{aA as Ft,a3 as xn,N as _,d as Yt,t as k,H as N,v as E,x as O,y as Ke,R as j,w as fn,O as J,aB as Nn,aC as _r,aD as qr,aE as Pr,aF as ga,aG as pa,aH as ha,aI as ba,aJ as va,aK as Sa,aL as Da,aM as wa,aN as $s,aO as Hr,aP as Na,aQ as Ta,a6 as xa,aR as Ea,aS as ka,aT as Aa,ai as Ca,aj as Va,ah as Ra,aU as Ma,af as _a,ag as qa,aV as Pa,aW as Ir,ae as Ha,aa as Ia,ac as Oa,ab as La,ad as ja,a7 as Fa,a8 as Ja,a9 as Ka,U as Q,o as ft,_ as Ga,aX as zs,aY as $e,i as Hi,aZ as Ba,a_ as Xs,Z as Qs,a$ as Zs,X as De,Y as ct,W as ae,S as Ee,V as ie,E as An,c as Cn,e as Vn,L as Ln,f as Me,p as Rn,am as He,b0 as Ua,l as tn,b1 as el,b2 as nl,b3 as tl,b4 as rl,b5 as il,b6 as al,b7 as ol,b8 as sl,b9 as ll,z as dl,A as ul,B as fl,F as cl,G as Ya,J as ml,u as Ie,g as Wt,an as jn,I as Ii,ar as yl,ba as gl,bb as $n,bc as pl,bd as hl,be as Jt,bf as bl,as as vl,bg as Oi,ak as Li,j as Wa,ay as $a,bh as Sl,al as Dl,au as wl,bi as Nl,aq as pe,bj as wt,bk as Yn,bl as hn,bm as In,bn as za,bo as Xa,bp as Tl,C as xl,h as El,bq as kl,br as Nt,at as Qa,bs as Al,ao as Cl}from"./UxBadge-26cb9909.js";import{Y as Yr,l as M,Z as Re,_ as w,$ as $t,a0 as zt,a1 as Vl,a2 as Xt,a3 as Za,a4 as fe,e as rn,a5 as Qt,t as ue,a6 as se,a7 as Wr,a8 as Rl,v as ee,a9 as Ml,aa as _l,ab as eo,ac as no,ad as ye,ae as to,z as $r,af as Or,ag as ql,S as Ge,O as Fn,N as Jn,Q as Mn,ah as Dr,b as W,X as mt,A as le,ai as ro,aj as Pl,ak as et,al as mn,am as de,T as he,an as Zt,P as V,ao as Hl,ap as _e,aq as io,ar as zr,as as Xr,at as Tt,au as un,av as Il,aw as Ol,ax as Je,ay as Ll,az as jl,aA as Fl,V as Jl,aB as Kl,aC as Gl,M as ao,aD as Bl,aE as Ul,aF as yt,aG as it,aH as at,aI as xt,aJ as Yl,aK as oo,aL as so,aM as Wl,c as yn,d as En}from"./IndexesNodeViewer-9562384b.js";import{r as m}from"./index-f46741a2.js";import{T as Qr,A as Kn,a as nt,b as ge,c as Zr,m as ei,t as $l,C as zl,d as er,e as ni,u as Gn,f as lo}from"./DdlTableDiffsViewer-dbb8d5b6.js";/* empty css              */import"./DdlTableViewer-65ac2970.js";import"./GraphQLOperationDiffViewer-1684ae4b.js";import"./GraphQLOperationViewer-938dff1f.js";import{g as Xl,h as Ql,J as Zl,j as ed,k as nd,l as td,m as ti,n as rd,S as id,U as ri,o as uo,p as nr,q as tr,N as fo,E as ji,r as ad,s as od,t as sd,v as ld,w as co,x as rr,C as ii,y as ai,D as dd,z as ud,A as fd,B as cd,F as md,H as yd,I as mo,K as Lr,L as Fi,M as gd,P as bn,V as oi,Q as si,R as li,T as di,W as pd,X as yo,Y as ui,Z as fi,_ as ci,$ as hd,a0 as go,a1 as bd,a2 as vd,a3 as Sd,a4 as po,a5 as Dd,a6 as wd,a7 as Nd,a8 as Td,a9 as xd,aa as Ed,ab as kd,ac as Ad,ad as Cd,ae as Vd,af as Rd,ag as Md,ah as _d,ai as Ji,aj as qd,ak as Pd,al as Hd}from"./GraphPropNodeViewer-8d4634e8.js";class Id extends Yr{constructor(){super()}}const Ki=(i,e)=>!M(e)||Re(e)?e:{rawValues:e},Od=(i,e)=>{if(!M(e)||Re(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof i=="symbol"?i.toString():`${i}`}},Gi=(i,e)=>M(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function ot(i){return{"/data":{"/content":()=>ot(w.MESSAGE_CONTENT),"/channel":()=>ot(w.MESSAGE_CHANNEL),"/operation":()=>ot(w.MESSAGE_OPERATION),kind:w.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:w.MESSAGE_CHANNEL_PARAMETERS,transformers:[Ki]},"/servers":{"/*":()=>ot(w.SERVER),kind:w.SERVERS},"/extensions":{kind:w.EXTENSIONS,transformers:[Ki]},"/bindings":{"/*":{kind:w.BINDING,transformers:[Od]},kind:w.BINDINGS,complex:!0},"/headers":{kind:w.MESSAGE_HEADERS,transformers:[Gi]},"/payload":{kind:w.MESSAGE_PAYLOAD,transformers:[Gi]},kind:i}}const Ld="<address unknown>";class ho{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,r;const a=e.operations??{};let o,s;if(n)t=n.operationKey,r=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(a).at(0),o){const u=a[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(l=c.messages)==null?void 0:l[0],p=this.isReferenceObject(f)?null:f;if(p){const y=p[this.referenceNamePropertyKey];s=typeof y=="string"?y:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,r=s}return{operationKey:t,messageKey:r}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var T;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},r=this.operationKeysOrDefaults(e,n);if(!r)return null;const{operationKey:a,messageKey:o}=r,s=Object.entries(t).filter(b=>{const[x,C]=b;return!this.isReferenceObject(C)&&x===a}).map(([,b])=>b).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${a}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let c=(s.messages??[]).filter(b=>!this.isReferenceObject(b)).find(b=>M(b)&&b[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!c){const b=(T=l.messages)==null?void 0:T[o];if(c=this.isReferenceObject(b)?void 0:b,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(s),p=this.copyExtensions(l),y=this.copyExtensions(c),g=b=>M(b)?{[this.referenceNamePropertyKey]:b[this.referenceNamePropertyKey]}:void 0,v=g(c),h=g(l),D=g(s);return{...v??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:s.action,address:l.address??Ld,data:{content:{...c.headers?{headers:c.headers}:{},...y?{extensions:y}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...h??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...p?{extensions:p}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...D??{},id:a,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[r,a]of Object.entries(e))n[r]=this.isReferenceObject(a)?a:{type:"string",...a};const t=e;for(const r of Reflect.ownKeys(e))typeof r=="symbol"&&Object.defineProperty(n,r,{value:t[r],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,r)=>(t[r]=e[r],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function jd(i){return $t(i)}const Fd=new Set([w.BINDING,w.EXTENSIONS,w.MESSAGE,w.MESSAGE_CHANNEL,w.MESSAGE_CHANNEL_PARAMETERS,w.MESSAGE_HEADERS,w.MESSAGE_OPERATION,w.MESSAGE_PAYLOAD,w.SERVER]),Et=["title","description","summary"];class ir extends zt{createNodeMeta(e){return{...M(e)&&Ft in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,r){return!Vl(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:r(t,ir.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Fd.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case w.BINDING:return["binding","version","protocol"];case w.EXTENSIONS:case w.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case w.MESSAGE:return[...Et,"internalTitle","action","address"];case w.MESSAGE_CHANNEL:return[...Et];case w.MESSAGE_OPERATION:return[...Et];case w.MESSAGE_HEADERS:case w.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case w.SERVER:return[...Et,"host","protocol"];default:return[]}}}const Jd="[AsyncAPI]";class bo extends Xt{constructor(n){const{source:t,referenceNamePropertyKey:r,operationKeys:a,logger:o=rn()}=n;super();q(this,"tree");q(this,"source");q(this,"referenceNamePropertyKey");q(this,"operationKeys");q(this,"logger");q(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=r,this.operationKeys=a,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!M(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Qt},r=ot(w.MESSAGE),a=jd({source:n,tree:this.tree,supportedNodeKinds:Za,createNodeFromRaw:(o,s,l,u,c)=>this.createNodeFromRaw(o,s,l,u,c),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>M(s)&&!!s.isPrimitive});return xn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Jd}createTree(){return new Id}createNodeDataBuilder(){return new ir}prepareSource(){return new ho(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return M(n)?n:null}resolveNodeKey(n,t){if(!M(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const r=t[this.referenceNamePropertyKey];if(typeof r=="string"||typeof r=="number")return r}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u}=o;if(a){const y=this.createNodeMeta(t,o),g={type:fe.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,g)}const c=this.createNodeValue(t,r,o),f=this.createNodeMeta(t,o),p={type:fe.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,p)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===fe.SIMPLE}isComplexTreeNode(n){return n.type===fe.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Kd extends Qr{constructor(){super()}}function Bi(i){return"diffs"in i&&"diffsSummary"in i&&"descendantDiffs"in i&&"descendantDiffsSummary"in i&&"diffsSeverities"in i}const Gd="x-";function Ht(i){return i===void 0||typeof i=="symbol"?!1:(typeof i=="string"?i:`${i}`).startsWith(Gd)}class Bd extends ho{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:r,messageKey:a}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=ue(se(e,["operations",o],this.referenceNamePropertyKey)),c=ue(se(e,["operations",r,o],this.referenceNamePropertyKey));ue(se(e,["operations",r,"bindings",o],this.referenceNamePropertyKey));const f=ue(se(e,["operations",r,"channel",o],this.referenceNamePropertyKey));ue(se(e,["operations",r,"channel","bindings",o],this.referenceNamePropertyKey)),ue(se(e,["operations",r,"channel","servers",o],this.referenceNamePropertyKey));const p=ue(se(e,["operations",r,"messages",o],this.referenceNamePropertyKey)),y=ue(se(e,["operations",r,"messages",a,o],this.referenceNamePropertyKey));ue(se(e,["operations",r,"messages",a,"bindings",o],this.referenceNamePropertyKey));const g=se(e,["operations",r,"messages",a],this.referenceNamePropertyKey),v=se(e,["operations",r,"messages"],this.referenceNamePropertyKey),h=M(g)&&Wr(v)?Rl(v,g):void 0,D=(h&&typeof h!="symbol"?p==null?void 0:p[h]:void 0)??(r&&typeof r!="symbol"?u==null?void 0:u[r]:void 0),S=l;if(!(o in S)){const T=y==null?void 0:y.title,b=y==null?void 0:y.name,x=y==null?void 0:y.description,C=y==null?void 0:y.summary,A=f==null?void 0:f.address,R=y==null?void 0:y.headers,H=y==null?void 0:y.payload,L=S.data.content.extensions;if(L&&!(o in L)){const G=Object.keys(y??{}).reduce((Y,B)=>{if(!Ht(B))return Y;const te=y==null?void 0:y[B];return te&&(Y[B]=te),Y},{});S.data.content.extensions=Object.assign(L,{[o]:G})}const F=S.data.content;if(F&&!(o in F)){const G={...R?{headers:R}:{},...H?{payload:H}:{}};S.data.content=Object.assign(F,{[o]:G})}S[o]={...D?{[_]:D}:{},...T?{title:T}:{},...b?{internalTitle:b}:{},...x?{description:x}:{},...C?{summary:C}:{},...A?{address:A}:{}}}if(!(o in S.data.channel)){const T=f==null?void 0:f.title,b=f==null?void 0:f.description,x=f==null?void 0:f.summary,C=f==null?void 0:f.address,A=S.data.channel.extensions;if(A&&!(o in A)){const R=Object.keys(f??{}).reduce((H,L)=>{if(!Ht(L))return H;const F=f==null?void 0:f[L];return F&&(H[L]=F),H},{});S.data.channel.extensions=Object.assign(A,{[o]:R})}S.data.channel[o]={...T?{title:T}:{},...b?{description:b}:{},...x?{summary:x}:{},...C?{address:C}:{}}}if(!(o in S.data.operation)){const T=c==null?void 0:c.title,b=c==null?void 0:c.description,x=c==null?void 0:c.summary,C=S.data.operation.extensions;if(C&&!(o in C)){const A=Object.keys(c??{}).reduce((R,H)=>{if(!Ht(H))return R;const L=c==null?void 0:c[H];return L&&(R[H]=L),R},{});S.data.operation.extensions=Object.assign(C,{[o]:A})}S.data.operation[o]={...T?{title:T}:{},...b?{description:b}:{},...x?{summary:x}:{}}}return Yt(S,o,s),S}hasOnlyAllowedDiffMetaSymbols(e){if(!M(e)&&!Re(e))return!0;if(Re(e))return e.every(a=>this.hasOnlyAllowedDiffMetaSymbols(a));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(a=>n.has(a))?Object.values(e).every(a=>this.hasOnlyAllowedDiffMetaSymbols(a)):!1}}class Ud extends ir{createNodeValue(e,n,t,r){return super.createNodeValue(e,n,t,r)}createNodeMeta(e){return super.createNodeMeta(e)}}class Yd extends Kn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;a.add(s)}return a}}class Wd extends Kn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{aggregatedDiffsMetaKey:o}=r,s=se(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&a.add(l.type);return a}}class $d extends Kn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=ue(se(t,["parameters","properties",o]));if(l)for(const f of Object.values(l))f&&a.add(f.type);const u=se(t,["parameters",s]);if(this.isDiffsSet(u))for(const f of u)f&&a.add(f.type);const c=ue(se(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&a.add(f.type);return a}}class zd extends Kn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=ue(se(t,["extensions",o]));if(l)for(const f of Object.values(l))f&&a.add(f.type);const u=se(t,["headers",s]);if(this.isDiffsSet(u))for(const f of u)f&&a.add(f.type);const c=se(t,["payload",s]);if(this.isDiffsSet(c))for(const f of c)f&&a.add(f.type);return a}}class Xd extends Kn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o}=r,s=ue(se(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&a.add(l.type);return a}}var Mr;let Qd=(Mr=class{static instance(e){switch(e){case w.BINDING:if(!this.instances.has(w.BINDING)){const n=new Wd;this.instances.set(w.BINDING,n)}return this.instances.get(w.BINDING);case w.MESSAGE_CONTENT:if(!this.instances.has(w.MESSAGE_CONTENT)){const n=new zd;this.instances.set(w.MESSAGE_CONTENT,n)}return this.instances.get(w.MESSAGE_CONTENT);case w.MESSAGE_CHANNEL:if(!this.instances.has(w.MESSAGE_CHANNEL)){const n=new $d;this.instances.set(w.MESSAGE_CHANNEL,n)}return this.instances.get(w.MESSAGE_CHANNEL);case w.MESSAGE_OPERATION:if(!this.instances.has(w.MESSAGE_OPERATION)){const n=new Xd;this.instances.set(w.MESSAGE_OPERATION,n)}return this.instances.get(w.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Yd;this.instances.set(null,n)}return this.instances.get(null)}}},q(Mr,"instances",new Map),Mr);class Zd extends nt{aggregate(e,n){}}class eu extends nt{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n,a=ue(se(e,[r],t));if(!a)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},c=a[l];c&&(s=!0,this.aggregateWholeNodeDiff(c,u),o[l]=u[_])}return s?o:void 0}}class nu extends nt{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,r=ue(se(e,[t])),a=r==null?void 0:r.headers,o=r==null?void 0:r.payload,s={};if(a){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(a)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),E(a)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),O(a)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.headers={data:a,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};k(o)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),E(o)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),O(o)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}}return s}}class tu extends nt{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n;if(!Array.isArray(e))return;const a=ue(se(e,[r],t));if(!a)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const c=e[l][t];if(!c)continue;const f={},p=a[l];p&&(s=!0,this.aggregateWholeNodeDiff(p,f),o[c]=f[_])}return s?o:void 0}}class vo{static instance(e){switch(e){case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new eu),this.instances.get(w.BINDINGS);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new tu),this.instances.get(w.SERVERS);case w.MESSAGE_CONTENT:return this.instances.has(w.MESSAGE_CONTENT)||this.instances.set(w.MESSAGE_CONTENT,new nu),this.instances.get(w.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new Zd;this.instances.set(null,n)}return this.instances.get(null)}}}q(vo,"instances",new Map);class ru extends ge{aggregate(e){const n=e[_];if(n){const f=n.data,y={type:f.type,causedAt:[]};return O(f)?(y.causedAt=f.beforeDeclarationPaths[0],{[j.TitleRow]:y,[j.BindingVersionRow]:y}):(E(f)?y.causedAt=f.beforeDeclarationPaths[0]:k(f)&&(y.causedAt=f.afterDeclarationPaths[0]),{[j.TitleRow]:y,[j.DescriptionRow]:y,[j.SummaryRow]:y,[j.AddressRow]:y,[j.BindingVersionRow]:y,[j.ServerAddressRow]:y})}const t=e.title,r=e.description,a=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,c={};if(t){const f=t.data,y={type:f.type,causedAt:[]};(E(f)||O(f))&&(y.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(y.causedAt=f.afterDeclarationPaths[0]),c[j.TitleRow]=y}if(r){const f=r.data,y={type:f.type,causedAt:[]};(E(f)||O(f))&&(y.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(y.causedAt=f.afterDeclarationPaths[0]),c[j.DescriptionRow]=y}if(a){const f=a.data,y={type:f.type,causedAt:[]};(E(f)||O(f))&&(y.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(y.causedAt=f.afterDeclarationPaths[0]),c[j.SummaryRow]=y}if(o){const f=o.data,y={type:f.type,causedAt:[]};(E(f)||O(f))&&(y.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(y.causedAt=f.afterDeclarationPaths[0]),c[j.AddressRow]=y}if(s){const f=s.data,y={type:f.type,causedAt:[]};(E(f)||O(f))&&(y.causedAt=f.beforeDeclarationPaths[0]),k(f)&&(y.causedAt=f.afterDeclarationPaths[0]),c[j.BindingVersionRow]=y}if(l||u){const f=l==null?void 0:l.data,p=u==null?void 0:u.data,y=ge.maxDiffByDiffType(f,p);if(y){const g={type:y.type,causedAt:[]};(E(y)||O(y))&&(g.causedAt=y.beforeDeclarationPaths[0]),k(y)&&(g.causedAt=y.afterDeclarationPaths[0]),c[j.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class So{static instance(e){switch(e){default:return new ru}}}q(So,"instances",new Map);class iu extends Zr{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const a of Object.values(e)){if(!a)continue;const o=a.data.type;r.add(o)}return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!E(n)&&!O(n)&&!fn(n))return!1;return!0}}class au{static instance(e){switch(e){default:return new iu}}}class _n extends ee{constructor(){super(...arguments);q(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,r,a,o){const{diffsMetaKey:s}=t;if(!M(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const y=o.diffs[_];if(y&&(k(y.data)||E(y.data)))return u[_]={...y,inherited:!0},u;{const g=o.descendantDiffs[r];if(g)return u[_]=g,u}}else if(a){const y=a.diffs[_];if(y&&(k(y.data)||E(y.data)))return u[_]={...y,inherited:!0},u;{const g=a.descendantDiffs[r];if(g)return u[_]=g,u}}if(!ee.isDiffsRecord(l))return;const c=l.title;c&&this.aggregateTextDiff(c,"title",u);const f=l.description;f&&this.aggregateTextDiff(f,"description",u);const p=l.summary;return p&&this.aggregateTextDiff(p,"summary",u),u}aggregateTextDiff(n,t,r){let a=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;k(n)&&(a={...a,isContentVisible:!1,backgroundColor:N.Gray},o={...o,isContentVisible:!0,backgroundColor:N.Green}),E(n)&&(a={...a,isContentVisible:!0,backgroundColor:N.Red},o={...o,isContentVisible:!1,backgroundColor:N.Gray}),(fn(n)||O(n))&&(a={...a,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},o={...o,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),r[t]={data:n,styles:{before:a,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}}}class ou extends _n{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!M(e))return;let s=super.aggregate(e,n,t,r,a);if(s){const u=s[_];if(u){const{data:c,styles:f}=u;k(c)&&(f.after.borderShadowColor=N.Green),E(c)&&(f.before.borderShadowColor=N.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=se(e,["binding"]);if(M(l)){const u=l[o];if(ee.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let r;if(k(t)&&M(t.afterValue)){const a=t.afterValue.bindingVersion;r={...t,afterValue:a},this.aggregateTextDiff(r,"version",n)}if(E(t)&&M(t.beforeValue)){const a=t.beforeValue.bindingVersion;r={...t,beforeValue:a},this.aggregateTextDiff(r,"version",n)}}}class su extends _n{aggregateByDescendantDiffs(e,n,t){var u;if(n[_])return n;if(!M(e))return;const r=Object.keys(e).length,a=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(a!==r)return n[_]=s(),n;let l=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==l){l=J.replace;break}return l===J.replace?(n[_]=s(),n):(n[_]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let r;const a={...n,beforeDeclarationPaths:E(n)?n.beforeDeclarationPaths:[],beforeValue:E(n)?n.beforeValue:void 0,afterDeclarationPaths:k(n)?n.afterDeclarationPaths:[],afterValue:k(n)?n.afterValue:void 0,action:J.replace};return()=>(r||(r={data:a,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}),r)}}class lu extends _n{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t,r){if(n[_])return n;const a=se(e,["rawValues"]);if(!M(a))return;const{diffsMetaKey:o}=r,s=a[o];if(!ee.isDiffsRecord(s))return;const l=Object.keys(a).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},p={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},g=y;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},p={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),E(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},p={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[_]={data:c,styles:{before:f,after:p},flags:{before:y,after:g},highlightingMode:Nn},n}}class du extends _n{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!M(e))return;let s=super.aggregate(e,n,t,r,a);s||(s={});const l=e[o];if(ee.isDiffsRecord(l)){const u=l[_];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},p={isContentVisible:!0,isHeaderVisible:!0};k(u)&&(f={...f,isContentVisible:!1,backgroundColor:N.Gray},p={...p,isContentVisible:!0,backgroundColor:N.Green}),E(u)&&(f={...f,isContentVisible:!0,backgroundColor:N.Red},p={...p,isContentVisible:!1,backgroundColor:N.Gray}),s[_]={data:u,highlightingMode:Ke,styles:{before:f,after:p},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=l.address;c&&this.aggregateTextDiff(c,"address",s)}return Object.keys(s).length>0?s:void 0}}class uu extends _n{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t,r){if(n[_])return n;const a=se(e,["rawValues","properties"]);if(!M(a))return;const{diffsMetaKey:o}=r,s=a[o];if(!ee.isDiffsRecord(s))return;const l=Object.keys(a).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},p={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},g=y;return k(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},p={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),E(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},p={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[_]={data:c,styles:{before:f,after:p},flags:{before:y,after:g},highlightingMode:Ke},n}}class fu extends _n{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!M(e))return;let s=super.aggregate(e,n,t,r,a);s||(s={});const l=e[o];if(ee.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const c=l.protocol;c&&this.aggregateTextDiff(c,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class cu extends _n{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t){if(n[_])return n;if(!Array.isArray(e))return;const r=e.length,a=Object.keys(t).length;if(r!==a)return;const[o]=Object.values(t);if(o)return n[_]=o,n}}class jr{static instance(e){switch(e){case w.BINDING:return this.instances.has(w.BINDING)||this.instances.set(w.BINDING,new ou),this.instances.get(w.BINDING);case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new su),this.instances.get(w.BINDINGS);case w.EXTENSIONS:return this.instances.has(w.EXTENSIONS)||this.instances.set(w.EXTENSIONS,new lu),this.instances.get(w.EXTENSIONS);case w.MESSAGE:return this.instances.has(w.MESSAGE)||this.instances.set(w.MESSAGE,new du),this.instances.get(w.MESSAGE);case w.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(w.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(w.MESSAGE_CHANNEL_PARAMETERS,new uu),this.instances.get(w.MESSAGE_CHANNEL_PARAMETERS);case w.SERVER:return this.instances.has(w.SERVER)||this.instances.set(w.SERVER,new fu),this.instances.get(w.SERVER);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new cu),this.instances.get(w.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new _n),this.instances.get(null)}}}q(jr,"instances",new Map);const mu="[AsyncAPI][WithDiffs]";class yu extends bo{constructor(n){super(n);q(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return mu}createTree(){return new Kd}createNodeDataBuilder(){return new Ud}prepareSource(){return new Bd(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return Wr(n)?n:null}createNodeFromRaw(n,t,r,a,o){const s=super.createNodeFromRaw(n,t,r,a,o);return!s||!Bi(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isAsyncApiTreeNodeKind(t))return;const a=this.takeSimpleTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return jr.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isAsyncApiTreeNodeKind(n))return au.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return vo.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,r,a){if(this.isAsyncApiTreeNodeKind(n)&&t)return jr.instance(n).aggregateByDescendantDiffs(t,r,a,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isAsyncApiTreeNodeKind(n)&&r)return Qd.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return So.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),ei(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return Za.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&Bi(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class gu extends Yr{constructor(){super()}}const ne={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Do=Object.values(ne),zn="unknown",pu="any",hu="nothing",re={UNKNOWN:zn,ANY:pu,NOTHING:hu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},bu=Object.values(re);function vu(i){return!i||!Ml(i)?!1:bu.some(e=>e===i)}function Su(i){return M(i)&&Ft in i}function wr(i,e){const n=i[e];return Re(n)&&n.length>0}function Xn(i){return typeof i=="boolean"}function kn(i){return i==null||typeof i=="boolean"?null:i}const Du=[re.STRING,re.NUMBER,re.INTEGER,re.BOOLEAN];function mi(i){return!!i&&Du.includes(i)}const wu=[re.ANY,re.NOTHING];function Nu(i){return!!i&&wu.includes(i)}function Kt(i){return!M(i)||Re(i)?!1:wr(i,"allOf")||wr(i,"oneOf")||wr(i,"anyOf")}function Ui(i){return M(i)&&Reflect.ownKeys(i).length>0}function Nr(i){return Re(i)&&i.length>0}function wo(i,e){if(!M(i)&&!Re(i))return!1;if(Re(i))return i.length>0;const n=i;if(Nr(n[_r])||Nr(n[qr])||Nr(n[Pr])||Ui(n[ga])||Ui(n[pa]))return!0;const t=n[ha];if(t!==void 0&&t!==!1||n[ba]!==void 0)return!0;const r=n[va];return r!==void 0&&r!==!1}const ze={root:ne.ROOT,definition:ne.DEFINITION,property:ne.PROPERTY,additionalProperties:ne.ADDITIONAL_PROPERTIES,patternProperty:ne.PATTERN_PROPERTY,items:ne.ITEMS,item:ne.ITEM,additionalItems:ne.ADDITIONAL_ITEMS,allOf:ne.ALL_OF,anyOf:ne.ANY_OF,oneOf:ne.ONE_OF},Tu=(i,e)=>{if(!M(e)||Re(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},xu="x-";function Gt(i){return i===void 0||typeof i=="symbol"?!1:(typeof i=="string"?i:`${i}`).startsWith(xu)}function Eu(i,e){if(!M(e)||Re(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>Gt(s));if(t.length===0)return e;const r=new Set(t),a=t.reduce((s,l)=>(Gt(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&r.has(s)||(o[s]=e[s]);return o.extensions=a,o}const ku=[Tu,Eu];function Xe(i=ze.root){return{"/allOf":{"/*":()=>Xe(ze.allOf)},"/oneOf":{"/*":()=>Xe(ze.oneOf)},"/anyOf":{"/*":()=>Xe(ze.anyOf)},"/properties":{"/*":()=>Xe(ze.property)},"/items":()=>({...Xe(ze.items),"/*":({key:e})=>_l(e)?Xe(ze.item):{}}),"/additionalProperties":()=>Xe(ze.additionalProperties),"/additionalItems":()=>Xe(ze.additionalItems),"/patternProperties":{"/*":()=>Xe(ze.patternProperty)},kind:i,transformers:ku}}const Au=new Set([ne.ALL_OF,ne.ANY_OF,ne.ONE_OF]);class Cu{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,r=n.length>0,a=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:r,isExpandable:a,initiallyExpanded:a&&!e.isCycle}}isCombinerKind(e){return Au.has(e)}}const No=new Cu;function Vu(i){return No.resolveNodeVisibility(i)}function ar(i){return No.isCombinerKind(i)}function Ru(i){return $t(i)}const Mu={type:re.ANY};function _u(i,e){if(Xn(e)){if(e===!1)return!1;if(e===!0&&i===ne.ADDITIONAL_PROPERTIES)return Mu}}function qu(i,e){if(!e||typeof i=="number"||!i)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(i))}function qe(i){return"diffs"in i&&"diffsSummary"in i&&"descendantDiffs"in i&&"descendantDiffsSummary"in i&&"diffsSeverities"in i}const Pu="extensions",Hu="location",Ae=class Ae extends zt{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case re.UNKNOWN:case re.ANY:case re.NOTHING:case re.NULL:case re.BOOLEAN:return Ae.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case re.STRING:return[...Ae.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ir,Fa,Ja,Ka,Hu];case re.NUMBER:case re.INTEGER:return[...Ae.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ir,Ha,Ia,Oa,La,ja];case re.OBJECT:return[...Ae.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ma,_a,qa,Pa];case re.ARRAY:return[...Ae.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ca,Va,Ra];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,r=!1){const a=qu(n,t),o=Su(e)?{brokenRef:String(e.$ref)}:{};return!Kt(e)&&M(e)?{...this.pick(e,Ae.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:a,...o,_fragment:e,isCycle:r}:{required:a,...o,_fragment:e,isCycle:r}}createNodeValue(e,n,t,r){if(t==null)return null;const a=_u(e,t);if(a!==void 0)return a;if(Xn(t))return t;if(!M(t)||Kt(t))return null;const o=vu(t.type)?t.type:re.UNKNOWN;return o===re.UNKNOWN||o===re.ANY||o===re.NOTHING||o===re.NULL||o===re.BOOLEAN?{...r(t,Ae.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===re.STRING?{...r(t,Ae.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===re.NUMBER||o===re.INTEGER?{...r(t,Ae.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===re.OBJECT?{...r(t,Ae.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===re.ARRAY?{...r(t,Ae.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};q(Ae,"JSON_SCHEMA_TREE_NODE_META_PROPS",[Sa,Da,wa,$s]),q(Ae,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Hr,Na,Ta,xa,Ea,ka,Aa,Pu]);let Bt=Ae;const Iu="[JSON Schema]";class To extends Xt{constructor(n){const{source:t,materializeDepth:r,logger:a=rn()}=n;super();q(this,"tree");q(this,"source");q(this,"materializeDepth");q(this,"logger");q(this,"nodeDataBuilder");q(this,"lazyState",new eo);q(this,"crawlHooks",null);this.source=t,this.materializeDepth=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!M(n))return this.tree;const t={parent:null,container:null,ancestors:new Qt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},r=Xe();return this.crawlHooks=Ru({source:n,tree:this.tree,supportedNodeKinds:Do,createNodeFromRaw:(a,o,s,l,u)=>this.createNodeFromRaw(a,o,s,l,u),createNodeParams:(a,o,s,l)=>({value:Xn(a)||M(a)&&!Array.isArray(a)?a:null,newDataLevel:!ar(l),parent:o,container:s}),createStateForSimpleNode:(a,o)=>({parent:o,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,o)=>({parent:a.parent,container:o,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isSimpleTreeNode(a),isComplexNode:a=>this.isComplexTreeNode(a),resolveNodeKey:(a,o)=>this.resolveNodeKey(a,o),isDisallowedValue:a=>a==null,shouldSkipNodeCreation:a=>Re(a),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:wo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),xn(n,this.crawlHooks,{state:t,rules:r}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const a={parent:n,container:null,ancestors:no(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};xn(r.fragment,this.crawlHooks,{state:a,rules:r.rules},!0)}get logPrefix(){return Iu}createTree(){return new gu}createNodeDataBuilder(){return new Bt((n,t)=>this.pick(n,t))}prepareSource(){return M(this.source)?this.source:null}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u,value:c}=o;if(a||M(c)&&Kt(c)){const v=this.createNodeMeta(t,o),h={type:fe.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:v,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,h)}const p=this.createNodeValue(t,r,o),y=this.createNodeMeta(t,o),g={type:fe.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:p,meta:y,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r,parent:a}=t;return this.nodeDataBuilder.buildNodeMeta(r,n,a,!1)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===fe.SIMPLE}isComplexTreeNode(n){return n.type===fe.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Ou extends Qr{constructor(){super()}}class Lu{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!M(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return Yt(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class ju extends Bt{constructor(e){super(e)}}class Fu extends Kn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n))o&&(!k(o.data)&&!E(o.data)||a.add(o.data.type));return a}}class xo{static instance(e){return this.kindAnyInstance}}q(xo,"kindAnyInstance",new Fu);const Ju=["properties","patternProperties","allOf","anyOf","oneOf","items"],Ku=new Set(["properties","patternProperties"]);class Gu extends nt{constructor(){super(...arguments);q(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});q(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!M(n))return;const{diffsMetaKey:r}=t,a={};for(const o of this.resolveDescendantDiffsRecords(n,r))for(const[s,l]of Object.entries(o))!l||s===_||!ee.isDiff(l)||(a[s]=this.buildDescendantDiffMetadata(l));return Object.keys(a).length>0?a:void 0}resolveDescendantDiffsRecords(n,t){const r=[],a=ue(Reflect.get(n,t));a&&r.push(a);for(const o of Ju){const s=Reflect.get(n,o);if(!M(s)&&!Re(s))continue;const l=ue(Reflect.get(s,t));if(l){r.push(l);continue}const u=a==null?void 0:a[o];if(u&&(k(u)||E(u))&&(Ku.has(o)?M(s):Re(s))){const p=this.decomposeWholeChildBagDiff(s,u);p&&r.push(p)}}return r}decomposeWholeChildBagDiff(n,t){const r=Re(n)?n.map((o,s)=>String(s)):Object.keys(n);if(r.length===0)return;const a={};for(const o of r)a[o]=this.buildDecomposedChildBagEntryDiff(t);return a}buildDecomposedChildBagEntryDiff(n){return k(n)?{type:n.type,scope:n.scope,description:n.description,action:J.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:J.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=Ke;return k(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},a={...a,increaseLevel:!1},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Green,borderShadowColor:N.Green},o={...o,increaseLevel:!0}),E(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Red,borderShadowColor:N.Red},a={...a,increaseLevel:!0},r={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},o={...o,increaseLevel:!1}),O(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:a,after:o},highlightingMode:s}}}class Eo{static instance(e){return this.kindAnyInstance}}q(Eo,"kindAnyInstance",new Gu);const Tn="titleRow",ko=["type","format","title"],st=["readOnly","writeOnly","deprecated"];class Bu extends ge{aggregate(e){const n=e[_],t={};return n?(t[j.TitleRow]=this.buildNodeDiffsSeverity(n),t[j.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[j.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n),t[j.ExtensionsRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",j.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",j.NestingIndicatorRow,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var r,a,o;const t=e;for(const s of Object.values(ye)){const l=ge.maxChangedPropertyMetaDataByDiffType((r=t.validationRowDiffs)==null?void 0:r[s],(a=t.validationRowColorizingDiffs)==null?void 0:a[s],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[s])??{}));l&&(n[to[s]]=this.buildNodeDiffsSeverity(l))}}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,r=[t[Tn],...Object.values(t.typeLabelFieldDiffs??{})],a=ge.maxChangedPropertyMetaDataByDiffType(...r);a&&(n[j.TitleRow]=this.buildNodeDiffsSeverity(a))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return E(n)||O(n)?t.causedAt=n.beforeDeclarationPaths[0]:k(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,r){const a=e[n];a&&(r[t]=this.buildNodeDiffsSeverity(a))}}class Uu extends Bu{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,r=ge.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);r&&(n[j.DefaultRow]=this.buildNodeDiffsSeverity(r))}applyEnumRowSeverity(e,n){const t=e,r=ge.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));r&&(n[j.EnumRow]=this.buildNodeDiffsSeverity(r))}applyExamplesRowSeverity(e,n){const t=e,r=ge.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));r&&(n[j.ExamplesRow]=this.buildNodeDiffsSeverity(r))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,r=ge.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));r&&(n[j.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(r))}}class Ao{static instance(e){return this.kindPropertyInstance}}q(Ao,"kindPropertyInstance",new Uu);function Tr(i,e){for(const n of Object.values(e??{}))$r(n)&&i.add(n.data.type)}class Yu extends Zr{aggregate(e,n,t){const r=new Set;if(!e)return r;const a=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){Tr(r,a[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){Tr(r,a[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(a.validationRowValueDiffs??{}))Tr(r,l);continue}$r(s)&&r.add(s.data.type)}return r}}class Co{static instance(e){return this.kindAnyInstance}}q(Co,"kindAnyInstance",new Yu);const Ze={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Vo(i){return typeof i.exclusiveMin=="number"||typeof i.exclusiveMax=="number"?Ze.OAS_3_1_NUMERIC_EXCLUSIVE:Ze.OAS_3_0_BOOLEAN_EXCLUSIVE}function Wu(i){return i.dialect??Vo(i)}const $u="?",ve="{value}",ln="{exclusive_value}",vn=">",kt=">=",Sn="<",At="<=",Oe=1,Le=2,je=4,Fe=8,Yi={0:{lower:void 0,upper:void 0},[Oe]:{lower:`${kt} ${ve}`,upper:void 0},[Le]:{lower:`${vn} ${ln}`,upper:void 0},[je]:{lower:void 0,upper:`${At} ${ve}`},[Fe]:{lower:void 0,upper:`${Sn} ${ln}`},[Le|Oe]:{lower:`${vn} ${ve}`,upper:void 0},[Le|je]:{lower:`${vn} ${ln}`,upper:`${At} ${ve}`},[Le|Fe]:{lower:`${vn} ${ln}`,upper:`${Sn} ${ln}`},[Fe|Oe]:{lower:`${kt} ${ve}`,upper:`${Sn} ${ln}`},[Fe|je]:{lower:void 0,upper:`${Sn} ${ve}`},[je|Oe]:{lower:`${kt} ${ve}`,upper:`${At} ${ve}`},[Le|Oe|je]:{lower:`${vn} ${ve}`,upper:`${At} ${ve}`},[Le|Oe|Fe]:{lower:`${vn} ${ve}`,upper:`${Sn} ${ln}`},[Le|je|Fe]:{lower:`${vn} ${ln}`,upper:`${Sn} ${ve}`},[Fe|Oe|je]:{lower:`${kt} ${ve}`,upper:`${Sn} ${ve}`},[Oe|Le|je|Fe]:{lower:`${vn} ${ve}`,upper:`${Sn} ${ve}`}};function Fr(i){return i!=null}function Wi(i){return i!==void 0&&i!==!1}function zu(i,e,n){return(i&(Oe|Le))!==(Oe|Le)||n===void 0||typeof e!="number"?i:n>=e?i&~Oe:i&~Le}function Xu(i,e,n){return(i&(je|Fe))!==(je|Fe)||n===void 0||typeof e!="number"?i:n<=e?i&~je:i&~Fe}function $i(i,e,n){return i.replace(ve,`${e}`).replace(ln,Fr(n)?`${n}`:$u)}function Qu(i,e){return Fr(i)||Fr(e)}function Zu(i){const{min:e,max:n,exclusiveMin:t,exclusiveMax:r}=i;let a=0;return e!==void 0&&(a|=Oe),Wi(t)&&(a|=Le),n!==void 0&&(a|=je),Wi(r)&&(a|=Fe),a}function Ro(i,e){let n=i;return typeof e.exclusiveMin!="number"&&!(n&Oe)&&(n&=~Le),typeof e.exclusiveMax!="number"&&!(n&je)&&(n&=~Fe),n}function ef(i,e){return Ro(i,e)}function nf(i,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let r=zu(i,e.min,n);return r=Xu(r,e.max,t),r}const tf={[Ze.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Ro},[Ze.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:ef}};function rf(i,e){const n=tf[e];let t=Zu(i);return t=n.applyExclusiveSuppression(t,i),nf(t,i)}function en(i){const e={data:{},visible:!1},n=Wu(i),t=typeof i.exclusiveMin=="number"?i.exclusiveMin:void 0,r=typeof i.exclusiveMax=="number"?i.exclusiveMax:void 0,a=rf(i,n),o=a in Yi?{...Yi[a]}:void 0;return o!=null&&o.lower&&(e.data.lower=$i(o.lower,i.min,t)),o!=null&&o.upper&&(e.data.upper=$i(o.upper,i.max,r)),e.visible=Qu(e.data.lower,e.data.upper),e}const lt="0",It="1";class On{static isDefined(e){return e!=null}static isExclusiveActive(e){return e!==void 0&&e!==!1}static isExclusiveDiffValueActive(e){return e!==void 0&&e!==!1}static diffAdd(e){return!!e&&k(e)}static diffRemove(e){return!!e&&E(e)}static diffReplace(e){return!!e&&O(e)}static readDiffAfterValue(e){if(e&&(k(e)||O(e)))return e.afterValue}static readNumericDiffBeforeValue(e){if(!e||!(E(e)||O(e)))return;const n=e.beforeValue;return typeof n=="number"?n:void 0}static readExclusiveDiffBeforeValue(e){if(!e||!(E(e)||O(e)))return;const n=e.beforeValue;if(typeof n=="number"||typeof n=="boolean")return n}static resolveBeforeAfterLabels(e,n){const t=e.minimum,r=e.exclusiveMinimum,a=e.maximum,o=e.exclusiveMaximum,s=n.minimum,l=n.exclusiveMinimum,u=n.maximum,c=n.exclusiveMaximum,f=this.isDefined(t),p=this.isDefined(a),y=this.isDefined(s),g=this.isDefined(u),v=this.isDefined(l),h=this.isDefined(c),D=this.diffAdd(s),S=this.diffRemove(s),T=this.diffReplace(s),b=this.diffAdd(u),x=this.diffRemove(u),C=this.diffReplace(u),A=en({min:f&&(!y||D||T)?t:void 0,max:p&&(!g||b||C)?a:void 0,exclusiveMin:this.isExclusiveActive(r)&&(!v||this.diffAdd(l)||this.diffReplace(l)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(l)))?r:void 0,exclusiveMax:this.isExclusiveActive(o)&&(!h||this.diffAdd(c)||this.diffReplace(c)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(c)))?o:void 0}).data;if(!(y||v||g||h))return{before:{...A},after:A};let H,L,F,G;if(f&&!y&&(H=t),(S||T)&&(H=this.readNumericDiffBeforeValue(s)),p&&!g&&(L=a),(x||C)&&(L=this.readNumericDiffBeforeValue(u)),this.isExclusiveActive(r)&&!v&&(F=r),this.diffReplace(l)||this.diffRemove(l)){const B=this.readExclusiveDiffBeforeValue(l);this.isExclusiveDiffValueActive(B)&&(F=B)}if(this.isExclusiveActive(o)&&!h&&(G=o),this.diffReplace(c)||this.diffRemove(c)){const B=this.readExclusiveDiffBeforeValue(c);this.isExclusiveDiffValueActive(B)&&(G=B)}return{before:en({min:H,max:L,exclusiveMin:F,exclusiveMax:G}).data,after:A}}static chipTextsFromLabels(e){return[e.lower,e.upper].filter(n=>!!n)}static resolveSlotValueDiffKey(e,n){if(!n)return;const t=e==="lower"?lt:It;if(n[t])return t;if(e==="lower")return n.minimum?"minimum":n.exclusiveMinimum?"exclusiveMinimum":void 0;if(n.maximum)return"maximum";if(n.exclusiveMaximum)return"exclusiveMaximum"}static resolveChipDiffType(...e){for(const n of e)if(n)return n.type}static compareValueRangeChipStrings(e,n,t){if(!(e===void 0||n===t))return n===void 0&&t!==void 0?{type:e,action:J.add,afterValue:t}:n!==void 0&&t===void 0?{type:e,action:J.remove,beforeValue:n}:{type:e,action:J.replace,beforeValue:n,afterValue:t}}static classifyValueRangeWholeRowAction(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),a=!!(t.lower||t.upper),o=!!(r.lower||r.upper);if(!a&&o)return J.add;if(a&&!o)return J.remove}static buildValueRangeChipStringDiffs(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),a=this.resolveChipDiffType(n.minimum,n.exclusiveMinimum),o=this.resolveChipDiffType(n.maximum,n.exclusiveMaximum),s={},l=this.compareValueRangeChipStrings(a,t.lower,r.lower);l&&(s[lt]=l);const u=this.compareValueRangeChipStrings(o,t.upper,r.upper);return u&&(s[It]=u),s}static collectChangedValueRangeChipDiffs(e,n){const t=this.buildValueRangeChipStringDiffs(e,n);return[t[lt],t[It]].filter(r=>r!==void 0)}static inferValueRangeBoundRangeDialect(e,n){const t={min:e.min??e.minimum,max:e.max??e.maximum,exclusiveMin:e.exclusiveMin??e.exclusiveMinimum,exclusiveMax:e.exclusiveMax??e.exclusiveMaximum};if(Vo(t)===Ze.OAS_3_1_NUMERIC_EXCLUSIVE)return Ze.OAS_3_1_NUMERIC_EXCLUSIVE;for(const r of["exclusiveMinimum","exclusiveMaximum"]){const a=n[r];if(a&&(k(a)&&typeof a.afterValue=="number"||E(a)&&typeof a.beforeValue=="number"||O(a)&&(typeof a.beforeValue=="number"||typeof a.afterValue=="number")))return Ze.OAS_3_1_NUMERIC_EXCLUSIVE}return Ze.OAS_3_0_BOOLEAN_EXCLUSIVE}static isValueRangePartialSingleChipChange(e,n){if(this.classifyValueRangeWholeRowAction(e,n)!==void 0)return!1;const t=this.collectChangedValueRangeChipDiffs(e,n);if(t.length!==1)return!1;const r=t[0];return k(r)||E(r)}static isValueRangePartialBoundChange(e,n){return this.isValueRangePartialSingleChipChange(e,n)}static buildSideEntriesFromLabels(e,n,t){const r=[],a=[{slot:"lower",text:e.lower,oppositeText:t.lower},{slot:"upper",text:e.upper,oppositeText:t.upper}];for(const{slot:o,text:s,oppositeText:l}of a){if(!s)continue;const u=s!==l?this.resolveSlotValueDiffKey(o,n):void 0;r.push({text:s,valueDiffKey:u})}return r}static resolveValueRangeDiffSideEntries(e,n,t,r,a){const{before:o,after:s}=this.resolveBeforeAfterLabels(e,n),l=t===Q;if(r){const f=r.data;if(k(f)||E(f)){const p=l?o:s,y=l?s:o;return this.buildSideEntriesFromLabels(p,a,y)}}const u=l?o:s,c=l?s:o;return this.buildSideEntriesFromLabels(u,a,c)}static extractValueRangeCrawlDiffs(e,n){const t=Reflect.get(e,n);return!t||typeof t!="object"?{}:{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}}static isBooleanExclusiveBoundFlagDiff(e,n){return e!=="exclusiveMinimum"&&e!=="exclusiveMaximum"?!1:typeof(k(n)?n.afterValue:E(n)?n.beforeValue:O(n)?n.beforeValue??n.afterValue:void 0)=="boolean"}static filterValueRangeSemanticSourceKeys(e,n){return e.filter(t=>{const r=n[t];return r?t==="exclusiveMinimum"||t==="exclusiveMaximum"?!this.isBooleanExclusiveBoundFlagDiff(t,r):!0:!1})}static isExclusiveBoundValue(e){return typeof e=="number"||typeof e=="boolean"}static readValueRangeBoundFields(e){if(!M(e))return{};const n={};return typeof e.minimum=="number"&&(n.minimum=e.minimum),typeof e.maximum=="number"&&(n.maximum=e.maximum),this.isExclusiveBoundValue(e.exclusiveMinimum)&&(n.exclusiveMinimum=e.exclusiveMinimum),this.isExclusiveBoundValue(e.exclusiveMaximum)&&(n.exclusiveMaximum=e.exclusiveMaximum),n}static resolveValueRangeSideInputFromNodeValue(e){const n=this.readValueRangeBoundFields(e);return{...n,min:n.minimum,max:n.maximum,exclusiveMin:n.exclusiveMinimum,exclusiveMax:n.exclusiveMaximum}}static resolveValueRangeBeforeAfterLabelsForTest(e,n){return this.resolveBeforeAfterLabels(e,n)}static resolveValueRangeChipTextsForTest(e,n,t){const{before:r,after:a}=this.resolveBeforeAfterLabels(e,n);return this.chipTextsFromLabels(t===Q?r:a)}}function sn(i){return typeof i=="string"?i:JSON.stringify(i)}function Mo(i,e,n){switch(i){case ye.VALUE_LENGTH:case ye.PROPERTIES_COUNT:case ye.ITEMS_COUNT:{if(e.startsWith("min"))return en({min:Number(n)}).data.lower??sn(n);if(e.startsWith("max"))return en({max:Number(n)}).data.upper??sn(n);break}case ye.VALUE_RANGE:{if(e==="minimum")return en({min:Number(n)}).data.lower??sn(n);if(e==="maximum")return en({max:Number(n)}).data.upper??sn(n);if(e==="exclusiveMinimum")return en({exclusiveMin:typeof n=="number"?n:!0}).data.lower??sn(n);if(e==="exclusiveMaximum")return en({exclusiveMax:typeof n=="number"?n:!0}).data.upper??sn(n);break}case ye.VALUE_PATTERN:case ye.VALUE_MULTIPLE_OF:case ye.UNIQUE_ITEMS:return sn(n);default:return sn(n)}return sn(n)}function af(i){return i.startsWith("min")||i==="exclusiveMinimum"}function of(i){return i.startsWith("max")||i==="exclusiveMaximum"}function zi(i,e){return e.length<=1||af(i)?0:of(i)?1:0}class sf extends ee{constructor(){super(...arguments);q(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});q(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}});q(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}})}aggregate(n,t,r,a,o){const{diffsMetaKey:s}=t;if(!M(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const h=o.diffs[_];if(h&&(k(h.data)||E(h.data)))return u[_]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u;const D=o.descendantDiffs[r];if(D)return u[_]=D,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u}else if(a){const h=a.diffs[_];if(h&&(k(h.data)||E(h.data)))return u[_]={...h,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u;const D=a.descendantDiffs[r];if(D)return u[_]=D,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),this.aggregateWholeNodeInheritedExtensionsDiffs(n,u),u}if(!ee.isDiffsRecord(l))return;const c=l[_];c&&this.aggregateTextDiff(c,_,u);const f=l.title,p=l.format,y=l.type;this.aggregateTypeLabelFieldDiffs({type:y,format:p,title:f},u);const g=l.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const h of st){const D=l[h];ee.isDiff(D)&&this.aggregateMetaFlagDiff(D,h,u)}return M(n)&&this.aggregateValidationRowDiffs(n,l,u),this.aggregateExtensionsDiffs(l,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,r,a){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,r),this.aggregateNodeChangesSummary(n,t,a),t}aggregateNodeChangesSummary(n,t,r){const a=new Set;for(const s of Object.values(t.typeLabelFieldDiffs??{}))s!=null&&s.data&&a.add(s.data);const o=new Set;for(const s of $l(n,r))a.has(s)||s!=null&&s.type&&o.add(s.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,r){const a=t[_];if(a&&(k(a.data)||E(a.data))){const y=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(a));t.nestingIndicatorRowColorizingDiff=y,t.extensionsRowColorizingDiff=y;return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const y=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(y){const g=this.resolveTypePrimitivenessCrossing(o),v=g&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,g):this.asReplaceRowColorizingDiff(y);t.nestingIndicatorRowColorizingDiff={...v,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!M(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(y=>r[y]);if(l.some(y=>!y))return;const[u,...c]=l;if(!k(u.data)&&!E(u.data))return;const f=u.data.action;c.every(y=>y.data.action===f&&(k(y.data)||E(y.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return k(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:E(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return mi(n)||Nu(n)}resolveTypePrimitivenessCrossing(n){var l;const t=(l=n.type)==null?void 0:l.data;if(!t||!O(t))return;const r=typeof t.beforeValue=="string"?t.beforeValue:void 0,a=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(r),s=this.isChildlessTypeValue(a);if(o!==s)return{beforeIsPrimitive:o,afterIsPrimitive:s}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:r}=n;return O(r)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:r.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:J.add,afterValue:!0,afterDeclarationPaths:r.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],r=Reflect.get(n,"properties");M(r)&&t.push(...Object.keys(r));const a=Reflect.get(n,"patternProperties");M(a)&&t.push(...Object.keys(a));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const r={};for(const a of ko){const o=n[a];ee.isDiff(o)&&(r[a]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(r).length>0&&(t.typeLabelFieldDiffs=r)}aggregateTitleRowDiff(n){const t=n[_];if(t&&(k(t.data)||E(t.data))){n[Tn]=t;return}for(const r of st){const a=n[r];if(a){n[Tn]=this.asReplaceFlagDiffForTitleRow(a);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const r=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(t));r&&(n[Tn]=this.asReplaceRowColorizingDiff(r))}buildTypeLabelFieldDiffMetadata(n){return O(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:N.Green},removeBefore:{textHighlighterColor:N.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES;return k(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},r={...r,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),E(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},r={...r,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),(fn(n)||O(n))&&(t={...t,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},r={...r,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}}asReplaceRowColorizingDiff(n){const{data:t}=n;return O(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return k(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}:E(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const r=this.buildChangedPropertyMetaDataFromDiff(n);return{...r,styles:{before:{...r.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...r.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),r=typeof n.beforeValue=="boolean",a=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:r?void 0:N.Yellow,borderShadowColor:r?N.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:a?void 0:N.Yellow,borderShadowColor:a?N.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:J.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):E(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[_];return!!t&&(k(t.data)||E(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of st)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return O(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:J.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:J.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const r=t[_];if(!(!r||!(k(r.data)||E(r.data)))&&M(n))for(const[a,o]of Object.entries(Or)){const s=a;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(r)))}}aggregateWholeNodeInheritedExtensionsDiffs(n,t){const r=t[_];if(!r||!(k(r.data)||E(r.data))||!M(n))return;const a=Reflect.get(n,"extensions");if(!M(a))return;const o=Object.keys(a).filter(Gt);if(o.length===0)return;const{data:s}=r,l=a,u={};if(k(s))for(const c of o)u[c]={type:s.type,scope:s.scope,description:s.description,action:J.add,afterValue:l[c],afterDeclarationPaths:s.afterDeclarationPaths??[]};else if(E(s))for(const c of o)u[c]={type:s.type,scope:s.scope,description:s.description,action:J.remove,beforeValue:l[c],beforeDeclarationPaths:s.beforeDeclarationPaths??[]};t.extensionsDiffs=u}aggregateExtensionsDiffs(n,t){const r={};for(const[a,o]of Object.entries(n))!Gt(a)||!ee.isDiff(o)||(r[a]=o);Object.keys(r).length>0&&(t.extensionsDiffs=r)}aggregateValidationRowDiffs(n,t,r){for(const[a,o]of Object.entries(Or)){const s=o.filter(b=>t[b]);if(s.length===0)continue;const l=a,u=l===ye.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(r.valueRangeCrawlDiffs=u);const c=l===ye.VALUE_RANGE?On.filterValueRangeSemanticSourceKeys(s,t):s,f=s.map(b=>t[b]).filter(b=>ee.isDiff(b));if(f.length===0)continue;r.validationRowColorizingDiffs??(r.validationRowColorizingDiffs={});const p=On.resolveValueRangeSideInputFromNodeValue(n),y=u?On.classifyValueRangeWholeRowAction(p,u):void 0;if(u&&(y===J.add||y===J.remove)){const b=y===J.add?this.mergeDiffActionFragment(f,J.add,this.resolveWholeRowDisplayValues(l,s,f,J.add)):this.mergeDiffActionFragment(f,J.remove,this.resolveWholeRowDisplayValues(l,s,f,J.remove)),x=this.buildChangedPropertyMetaDataFromDiff(b);r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=x,r.validationRowColorizingDiffs[l]=x;continue}if(u&&On.isValueRangePartialBoundChange(p,u)){this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l);continue}const g=o.some(b=>!s.includes(b)&&Reflect.get(n,b)!==void 0),v=!g&&f.every(k),h=!g&&f.every(E);if(v){const b=this.resolveWholeRowDisplayValues(l,s,f,J.add),x=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,J.add,b));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=x,r.validationRowColorizingDiffs[l]=x;continue}if(h){const b=this.resolveWholeRowDisplayValues(l,s,f,J.remove),x=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,J.remove,b));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=x,r.validationRowColorizingDiffs[l]=x;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l));continue}const D=c.map(b=>t[b]).filter(b=>ee.isDiff(b)).map(b=>this.buildChangedPropertyMetaDataFromDiff(b)),S=ge.maxChangedPropertyMetaDataByDiffType(...D);if(!S)continue;const T=this.buildValidationRowValueDiffs(l,c,t);r.validationRowValueDiffs??(r.validationRowValueDiffs={}),r.validationRowValueDiffs[l]=T,r.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(S),u&&this.mergeValueRangeLabelChipDiffs(n,u,r,l)}}mergeValueRangeLabelChipDiffs(n,t,r,a){const o=On.buildValueRangeChipStringDiffs(On.resolveValueRangeSideInputFromNodeValue(n),t),s=[lt,It];if(!s.some(f=>o[f]))return;r.validationRowValueDiffs??(r.validationRowValueDiffs={});const c={...r.validationRowValueDiffs[a]??{}};for(const f of s){const p=o[f];if(!p||c[f])continue;const y=f===lt?"lower":"upper",g=this.attachValueRangeChipDiffPaths(p,y,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}r.validationRowValueDiffs[a]=c}applyValueRangeFormattingRowColorizingDiff(n,t,r,a){var c;const o=(c=r.validationRowValueDiffs)==null?void 0:c[a];if(!o||!Object.values(o).some(f=>f!==void 0))return;const s=n.map(f=>t[f]).filter(f=>ee.isDiff(f));if(s.length===0)return;const l=s.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=ge.maxChangedPropertyMetaDataByDiffType(...l);u&&(r.validationRowColorizingDiffs[a]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,r){const a=t==="lower"?[r.minimum,r.exclusiveMinimum]:[r.maximum,r.exclusiveMaximum],o=[],s=[];for(const l of a)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return O(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,r){const a=ql[n],o={};for(const s of t){const l=r[s];if(!ee.isDiff(l)||a[s]===void 0)continue;const c=this.buildListValueDiffMetadata(l);o[s]=ge.maxChangedPropertyMetaDataByDiffType(o[s],c)??c}return o}resolveWholeRowDisplayValues(n,t,r,a){const o=[];return t.forEach((s,l)=>{const u=r[l],c=a===J.add?k(u)?u.afterValue:void 0:E(u)?u.beforeValue:void 0;c!==void 0&&o.push(Mo(n,s,c))}),o}mergeDiffActionFragment(n,t,r){const a=n[0],o=n.flatMap(l=>E(l)||O(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>k(l)||O(l)?l.afterDeclarationPaths:[]);return t===J.add?{type:a.type,scope:a.scope,description:a.description,action:J.add,afterValue:r,afterDeclarationPaths:s}:{type:a.type,scope:a.scope,description:a.description,action:J.remove,beforeValue:r,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return O(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}}class lf extends sf{aggregate(e,n,t,r,a){const o=super.aggregate(e,n,t,r,a);if(!M(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=ee.isDiffsRecord(l),c=this.resolveWholeListFieldDiff(e,"enum",s),f=this.resolveWholeListFieldDiff(e,"examples",s),p=this.resolveListFieldItemDiffs(e,"enum",s),y=this.resolveListFieldItemDiffs(e,"examples",s),g=this.resolveAllowedAdditionalPropertyNamesDiff(t,r,s),v=!!c||!!f||Object.keys(p).length>0||Object.keys(y).length>0||!!g;if(!o&&!u&&!v){const D=this.resolveRequiredMetaDiff(t,r,s);if(!D)return;const S={required:D};return this.aggregatePropertyTitleRowDiff(S),S}const h={...o??{}};if(u){const D=l.default;ee.isDiff(D)&&(h.default=this.buildDefaultValueDiffMetadata(D))}if(c&&(h.enumDiff=c),Object.keys(p).length>0&&(h.enumValueDiffs=p),f&&(h.examplesDiff=f),Object.keys(y).length>0&&(h.examplesValueDiffs=y),g!=null&&g.diff&&(h.allowedAdditionalPropertyNamesDiff=g.diff),Object.keys((g==null?void 0:g.valueDiffs)??{}).length>0&&(h.allowedAdditionalPropertyNamesValueDiffs=g.valueDiffs),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(g==null?void 0:g.mergedValues,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const D=this.resolveRequiredMetaDiff(t,r,s);D&&(h.required=D)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[_];if(n&&(k(n.data)||E(n.data))){e[Tn]=n;return}for(const r of st){const a=e[r];if(a){e[Tn]=this.asReplaceFlagDiffForTitleRow(a);return}}const t=e.required;if(t){e[Tn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const r=n.value(),a=(f=n.meta())==null?void 0:f._fragment;if(!M(a)&&!M(r))return;const o=String(e),s=M(a)?Reflect.get(a,t):void 0,l=M(a)?Reflect.get(a,"required"):void 0,u=M(r)&&"required"in r?r.required:void 0,c=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if(ee.isDiffsRecord(s)){const p=s.required;if(ee.isDiff(p)){const y=this.resolveRequiredMetaDiffFromWholeArrayDiff(p,o);if(y)return y}if(ee.isDiffsRecord(p)){const y=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(p,o,c);if(y)return y}}if(Array.isArray(c)){const p=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(p)return p}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(k(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(E(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(O(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],r=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==r.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const r=t.indexOf(n);if(r>=0){const a=e[String(r)];if(ee.isDiff(a))return this.buildChangedPropertyMetaDataFromDiff(a)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const r=Reflect.get(e,n);if(!ee.isDiffsRecord(r))return;const a=e.indexOf(t);if(a>=0){const o=r[String(a)];if(ee.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(r,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(ee.isDiff(t)){if(k(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(E(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return O(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const r=Reflect.get(e,t);if(!ee.isDiffsRecord(r))return;const a=r[n];if(ee.isDiff(a)){if(k(a)&&Array.isArray(a.afterValue))return this.buildChangedPropertyMetaDataFromDiff(a);if(E(a)&&Array.isArray(a.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(a)}}resolveListFieldItemDiffs(e,n,t){const r={},a=Reflect.get(e,n);if(!Array.isArray(a))return r;const o=Reflect.get(a,t);return ee.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,r),r}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,r]of Object.entries(e))!r||n[t]||(n[t]=this.buildListValueDiffMetadata(r))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var f;if(e!==ne.ADDITIONAL_PROPERTIES||!n)return;const r=(f=n.meta())==null?void 0:f._fragment;if(!M(r))return;const a=Reflect.get(r,"propertyNames"),o=Reflect.get(r,t),s=ee.isDiffsRecord(o)?o.propertyNames:void 0;if(ee.isDiff(s)){const p=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(s);if(p)return p}if(!M(a))return;const l=Reflect.get(a,"enum");if(!Array.isArray(l)||l.length===0)return;const u=this.resolveWholeListFieldDiff(a,"enum",t),c=this.resolveListFieldItemDiffs(a,"enum",t);if(!(!u&&Object.keys(c).length===0))return{diff:u,valueDiffs:Object.keys(c).length>0?c:void 0,mergedValues:l}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(k(e)&&M(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(E(e)&&M(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,r,a){if(!Array.isArray(e)||e.length===0)return;const o=n[_];if(o&&(k(o.data)||E(o.data))){n[a]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const s=n[t];if(s){n[a]=s;return}const l=n[r];if(!l||Object.keys(l).length===0)return;const u=ge.maxChangedPropertyMetaDataByDiffType(...Object.values(l));u&&(n[a]=this.asReplaceRowColorizingDiff(u))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),r=t!=null,a=n[_];if(a&&(k(a.data)||E(a.data))){(r||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(a));return}const o=n.default;if(!o)return;const s=o.data;if(k(s)||E(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}O(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Jr{static instance(e){return this.kindPropertyInstance}}q(Jr,"kindPropertyInstance",new lf);const df="[JSON Schema][WithDiffs]";class uf extends To{constructor(n){super(n);q(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return df}createTree(){return new Ou}createNodeDataBuilder(){return new ju((n,t)=>this.pick(n,t))}prepareSource(){return new Lu(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,r,a,o){const s=super.createNodeFromRaw(n,t,r,a,o);return!s||!qe(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isJsonSchemaTreeNodeKind(t))return;const a=this.takeTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return Jr.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isJsonSchemaTreeNodeKind(n))return Co.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Eo.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,r,a){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Jr.instance(n).aggregateByDescendantDiffs(t,r,a,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isJsonSchemaTreeNodeKind(n)&&r)return xo.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Ao.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),ei(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Do.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&qe(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function xr(i){return!!i&&Object.keys(i).length>0}function Xi(i){return!!i&&i.size>0}function ff(i){const e=new Set;for(const n of Object.values(i.diffs))n&&e.add(n.data.type);for(const n of Object.values(i.descendantDiffs))n&&e.add(n.data.type);for(const n of i.diffsSummary)e.add(n);for(const n of i.descendantDiffsSummary)e.add(n);for(const n of Object.values(i.diffsSeverities))n&&e.add(n.type);return e}function Qi(i,e){if(!(xr(i.diffs)||xr(i.descendantDiffs)||Xi(i.diffsSummary)||Xi(i.descendantDiffsSummary)||xr(i.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=ff(i);for(const r of t)if(e.diffTypes.has(r))return!0;return!1}function Kr(i,e,n){if(i.isCycle)return Qi(i,e);if(n.visiting.has(i.id))return!1;n.visiting.add(i.id);try{return Qi(i,e)?!0:i.type===fe.COMPLEX?i.nestedNodes().some(t=>Kr(t,e,n)):i.childrenNodes().some(t=>Kr(t,e,n))}finally{n.visiting.delete(i.id)}}function _o(i,e){return Kr(i,e,{visiting:new Set})}function cf(i,e,n){if(!n){const o=i.map(()=>({visible:!0})),s=i.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],r=[];let a=0;for(;a<i.length;){if(e(i[a])){t.push({visible:!0}),r.push({kind:"node",node:i[a],sourceIndex:a}),a++;continue}const o=a;for(;a<i.length&&!e(i[a]);)a++;const s=i[o].id,l=a-o;for(let u=o;u<a;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});r.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:r}}function mf(i,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return cf(i,r=>_o(r,t),n)}function qo(i){return i.kind===w.MESSAGE}function yf(i){return i.kind===w.MESSAGE_SECTION_SELECTOR}function Po(i){return i.kind===w.MESSAGE_CONTENT}function gf(i){return i.kind===w.MESSAGE_HEADERS&&i.key==="headers"}function pf(i){return i.kind===w.MESSAGE_PAYLOAD&&i.key==="payload"}function Ho(i){return i.kind===w.MESSAGE_CHANNEL}function hf(i){return i.kind===w.MESSAGE_CHANNEL_PARAMETERS}function Io(i){return i.kind===w.MESSAGE_OPERATION}function yi(i){return i.kind===w.EXTENSIONS}function or(i){return i.kind===w.BINDINGS}function Er(i){return i.kind===w.BINDING}function bf(i){return Po(i)||Ho(i)||Io(i)}function vf(i){return i.kind===w.SERVERS}function Sf(i){return i.kind===w.SERVER}function Ue(i,e,n){var r;if(!M(i))return!1;if(!e)return(i==null?void 0:i[n])!==void 0;const t=(r=e[n])==null?void 0:r.data;return t?E(t)?t.beforeValue!==void 0:k(t)?t.afterValue!==void 0:O(t)?t.beforeValue!==void 0||t.afterValue!==void 0:fn(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(i==null?void 0:i[n])!==void 0}const Df=i=>{if(!ft(i)||Ga(i))return i;if("example"in i&&!("examples"in i)){const{example:e}=i;return i.examples=[e],i}return i};function wf(i){if(!ft(i)||Ga(i))return i;const e=Reflect.ownKeys(i),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return i;const t=new Set(n),r=n.reduce((o,s)=>(Xl(s)&&(o[s]=i[s]),o),{}),a={};for(const o of e)typeof o=="string"&&t.has(o)||(a[o]=i[o]);return a.extensions=r,a}const Nf=[Df,wf],Ye=(i=$e.root)=>({"/allOf":{"/*":()=>Ye($e.allOf)},"/oneOf":{"/*":()=>Ye($e.oneOf)},"/anyOf":{"/*":()=>Ye($e.anyOf)},"/properties":{"/*":()=>Ye($e.property)},"/items":()=>({...Ye($e.items),"/*":({key:e})=>zs(e)?Ye($e.item):{}}),"/additionalProperties":()=>Ye($e.additionalProperties),"/additionalItems":()=>Ye($e.additionalItems),"/patternProperties":{"/*":()=>Ye($e.patternProperty)},kind:i,transformers:Nf});function Tf(i){return({value:e,path:n,state:t,rules:r})=>{if(!r||!Array.isArray(r.transformers)||Array.isArray(e))return;const o=(r.transformers??[]).reduce((s,l)=>l(s,i,n,t),e);return o!==e&&Hi(o)&&Hi(e)&&Object.defineProperty(o,Ba,{value:e,enumerable:!1}),{value:o}}}function xf(i){return({key:e,value:n,path:t,rules:r,state:a})=>{if(!r)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!Xs.includes(r==null?void 0:r.kind)||Array.isArray(n))return;const{parent:o,container:s,nodeIdPrefix:l}=a,u=l+Qs(t),{kind:c}=r,f={tree:i,crawlValue:n,crawlHooks:gi(i,n),crawlRules:r,alreadyConvertedMappingStack:a.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:a.treeLevel,nextMaxLevel:a.maxTreeLevel},p=s?i.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:s,parent:s.parent,isCycle:!1},f):i.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(s?s.addNestedNode(p.node):o==null||o.addChild(p.node),a.treeLevel>=a.maxTreeLevel&&p.node.type===Zs.simple)return{done:!0};const y=a.treeLevel+1;if(p.value){const g=new Map(a.alreadyConvertedMappingStack);g.set(n,p.node);const v=n[Ba];v!==void 0&&g.set(v,p.node);let h;return Ql(p.node)?h={parent:p.node,alreadyConvertedMappingStack:g,nodeIdPrefix:l,treeLevel:y,maxTreeLevel:a.maxTreeLevel}:h={parent:o,container:p.node,alreadyConvertedMappingStack:g,nodeIdPrefix:l,treeLevel:y,maxTreeLevel:a.maxTreeLevel},{value:p.value,state:h}}else return{done:!0}}}const Ef=2;function gi(i,e){return[ed(i),Tf(e),xf(i)]}const kf=(i,e=Ef)=>{const n=new Zl(i);if(!ft(i))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return xn(i,gi(n,i),{state:t,rules:Ye()}),n},Af=2,Cf=(i,e,n=Af)=>{const t=new nd(i,e);if(!ft(i))return t;const r={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return xn(i,gi(t,i),{state:r,rules:Ye()}),t};function Be(i,e,n){return!!i&&(n===void 0||(Array.isArray(n)?n.includes(i.kind):i.kind===n))&&i instanceof e}function Vf(i){return Be(i,zl,w.BINDINGS)}function kr(i){return Be(i,Ge,w.BINDING)}function Rf(i){return Be(i,Ge)}function Mf(i){return Be(i,Ge,w.MESSAGE_CHANNEL)}function _f(i){return Be(i,Ge)}function Ct(i){return Be(i,Ge,w.SERVER)}function qf(i){return Be(i,Ge)}function Pf(i){return Be(i,Ge,w.MESSAGE_HEADERS)}function Hf(i){return Be(i,Ge,w.MESSAGE_PAYLOAD)}function If(i){return Be(i,Ge,w.MESSAGE)}function Of(i){return Be(i,Ge,w.MESSAGE_OPERATION)}function Lf(i){return Be(i,Ge,w.MESSAGE_SECTION_SELECTOR)}function jf(i){return Be(i,Ge,[w.MESSAGE_CONTENT,w.MESSAGE_CHANNEL,w.MESSAGE_OPERATION])}const Oo=i=>{const e=De(),{diff:n,descendantDiffs:t,diffsSeverities:r}=i,a=m.useMemo(()=>r==null?void 0:r["address-row"],[r]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>ct(a==null?void 0:a.causedAt),[a]);switch(e){case Ee:return d.jsx(Jn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Mn,{left:d.jsx(Ar,{...i,layoutSide:Q}),right:d.jsx(Ar,{...i,layoutSide:ae})})});default:return d.jsx(Fn,{content:d.jsx(Ar,{...i,layoutSide:ae})})}},Ff={send:"bg-sky-400",receive:"bg-green-500"},Ar=i=>{const{action:e,address:n,layoutSide:t,diff:r}=i,{[le]:a}=i,o=m.useCallback(()=>{const l=r&&Jf(r);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Ff[e]} text-white rounded-md`,children:e.toUpperCase()});if(r&&(k(r.data)&&t===Q&&(u=null),E(r.data)&&t===ae&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(Dr,{value:n,variant:W.h4,layoutSide:t,diff:r,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:p,diff:y}=l,g=t===Q?f:p;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Dr,{value:c,variant:W.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Dr,{value:g,variant:W.h4,layoutSide:t,diff:y,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,r,t]),s=m.useMemo(()=>{const l=new Set;if(r){const{styles:u}=r;t===Q?l.add(ie.background(u.before.backgroundColor)):l.add(ie.background(u.after.backgroundColor))}return Array.from(l)},[r,t]);return d.jsx("div",{"data-precededby":a,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${mt} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Jf(i){const{data:e}=i;if(!O(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const r=n.indexOf("{"),a=t.indexOf("{"),o=r===-1?n:n.slice(0,r),s=a===-1?t:t.slice(0,a);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:r===-1?"":n.slice(r),afterSuffix:a===-1?"":t.slice(a),diff:{...i,data:l}}}Oo.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Kf=m.memo(i=>i.mergedSource===null?null:d.jsx(An,{fallback:d.jsx(Cn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Gf,{...i})})),Gf=m.memo(i=>{const{mergedSource:e,operationKeys:n,displayMode:t=Rn,devMode:r=!1,noHeading:a=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=i,u=m.useMemo(()=>rn(r),[r]),c=m.useMemo(()=>new yu({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const p=f==null?void 0:f.root;return!p||!qo(p)?null:d.jsx(er.Provider,{value:s,children:d.jsx(ni.Provider,{value:l,children:d.jsx(ro.Provider,{value:r,children:d.jsx(Vn.Provider,{value:t,children:d.jsx(Ln.Provider,{value:Ee,children:d.jsx(Me.Provider,{value:0,children:d.jsx(qi,{node:p,noHeading:a})})})})})})})});Kf.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const pi=m.createContext(void 0);function Bf(){return m.useContext(pi)}const sr=i=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=i,r=td(),a=He(),s=e.node.newDataLevel?a+1:a,l=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),p=T=>{if(T){e.select(T),f(T),n(T);const b=u.find(x=>x.id===T);r==null||r(b)}},y=De(),g=m.useMemo(()=>{const T={};return u.forEach(b=>{const x=b.value().$changes??{},C=ti({node:b});C&&(T[b.id]={...C,...Object.keys(x).length?{$changes:x}:{}})}),T},[u]),v=He()+1,h=u.find(T=>(T==null?void 0:T.id)===c),D=rd(h)?h==null?void 0:h.kind:"",S=Ua(t??(l==null?void 0:l.$nodeChange));return d.jsx(Me.Provider,{value:s,children:d.jsx(id,{nodesTypeData:g,selectedNodeId:c,combiner:D,onSelect:p,layoutMode:y,level:v,$nodeChange:S,$nestedChanges:l==null?void 0:l.$nestedChanges,$nestedChangesSummary:y!==tn?e.$nestedChangesSummary:void 0})})};sr.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const lr=m.createContext(void 0);function Lo(){return m.useContext(lr)}const qn=m.memo(i=>{const{beforeLevel:e,afterLevel:n,children:t}=i,[r,a]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{a(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:r,afterLevel:o}),[r,o]);return d.jsx(Pl.Provider,{value:l,children:t})});qn.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function jo(i){let e;for(const n of i){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class Uf extends Qr{constructor(){super()}}const dr={PROPERTY:"property"},ut=Object.values(dr),oe={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Yf extends Xt{constructor(){super(...arguments);q(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,r,a){}}const Ce=class Ce{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,r=Ce.isArrayItemKey(e);return Ce.transformRawJsoValueToBaseJsoNodeValue(n,t,r)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const r=Ce.getValueType(e),a=Ce.isPrimitiveValue(r);return{title:n,value:e,valueType:r,isPrimitive:a,isArrayItem:t,isPredefinedValueSet:Ce.isPredefinedValueSet(r)}}static isPredefinedValueSet(e){return e===oe.BOOLEAN||e===oe.NULL}static isPrimitiveValue(e){return e!==oe.JSON_SCHEMA&&e!==oe.MULTI_SCHEMA&&e!==oe.OBJECT&&e!==oe.ARRAY}static getValueType(e){return typeof e=="string"?oe.STRING:typeof e=="number"?oe.NUMBER:typeof e=="boolean"?oe.BOOLEAN:typeof e=="object"?e===null?oe.NULL:Array.isArray(e)?oe.ARRAY:Ce.isJsonSchema(e)?oe.JSON_SCHEMA:Ce.isMultiSchema(e)?oe.MULTI_SCHEMA:oe.OBJECT:oe.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Hr in e&&typeof e.type=="string"&&el.some(r=>r===e.type)||qr in e&&Array.isArray(e.oneOf)&&e.oneOf.every(r=>Ce.isJsonSchema(r))||Pr in e&&Array.isArray(e.anyOf)&&e.anyOf.every(r=>Ce.isJsonSchema(r))||_r in e&&Array.isArray(e.allOf)&&e.allOf.every(r=>Ce.isJsonSchema(r))||Ft in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Ta,nl,tl,Pa,rl,il,al,Hr,Na,Ir,Ea,Ha,La,ja,Ia,Oa,Ja,Fa,Ka,Va,Ca,Ra,qa,_a,ba,va,Ma,xa,ga,ha,pa,_r,qr,Pr,ol,Aa,Da,wa,ka,Sa,sl,Ft]);return n&&Object.keys(e).every(r=>t.has(r)||Ce.isExtensionPropertyInJsonSchema(r)||Ce.isAllowedCustomPropertyInJsonSchema(r))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&M(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!Wr(e))return e;const t=ue(e[n]);if(!t)return e;const r=new Set(Object.keys(e)),a=new Set(Object.keys(t)),o=r.intersection(a);let s;for(const l of o){const u=e[l],c=t[l];if(u===void 0||c===void 0||!O(c))continue;const{beforeValue:f,afterValue:p}=c,y=M(f),g=Array.isArray(f),v=M(p),h=Array.isArray(p);if(!(g&&v||y&&h))continue;s||(s={...e});const S={...f,...p};s[l]=S}return s??e}};q(Ce,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:oe.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let U=Ce;const Wf=(i,e,n,t,r)=>U.mergeComparisonBetweenArrayAndObject(e,r.diffMetaKeys.diffsMetaKey);function Fo(){return{"/*":()=>Fo(),transformers:[Wf],kind:dr.PROPERTY}}function $f(i){return $t(i)}const zf=new Set(ut);class Xf extends zt{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){if(!this.isJsoTreeNodeKind(e))return null;const a=U.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:a,after:a}}isJsoTreeNodeKind(e){return zf.has(e)}}class Qf extends Kn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n))o&&(!k(o.data)&&!E(o.data)||a.add(o.data.type));return a}}class Jo{static instance(e){if(!this.instances.has(null)){const n=new Qf;this.instances.set(null,n)}return this.instances.get(null)}}q(Jo,"instances",new Map);class Zf extends nt{constructor(){super(...arguments);q(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});q(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!M(n)&&!Array.isArray(n))return;const{diffsMetaKey:r}=t,a=ue(n[r]);if(!a)return;const o={};for(const[s,l]of Object.entries(a)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,p=this.DEFAULT_DIFF_FLAGS,y=Ke;if(k(l)){const{afterValue:g}=l,v=U.getValueType(g),h=U.isPrimitiveValue(v);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},f={...f,increaseLevel:!1},c={isContentVisible:h,isHeaderVisible:!0,backgroundColor:N.Green},p={...p,increaseLevel:!0},y=Nn}if(E(l)){const{beforeValue:g}=l,v=U.getValueType(g);u={isContentVisible:U.isPrimitiveValue(v),isHeaderVisible:!0,backgroundColor:N.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},p={...p,increaseLevel:!1},y=Nn}if(O(l)){const{beforeValue:g,afterValue:v}=l,h=U.getValueType(g),D=U.getValueType(v),S=U.isPrimitiveValue(h),T=U.isPrimitiveValue(D),b=U.isPredefinedValueSet(h),x=U.isPredefinedValueSet(D);u={isContentVisible:S,isHeaderVisible:!0,backgroundColor:N.Yellow},S&&(b?u.borderShadowColor=N.Yellow:u.textHighlighterColor=N.Yellow),c={isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow},T&&(x?c.borderShadowColor=N.Yellow:c.textHighlighterColor=N.Yellow),y=ll}o[s]={data:l,styles:{before:u,after:c},flags:{before:f,after:p},highlightingMode:y}}return o}}class Ko{static instance(e){if(!this.instances.has(null)){const n=new Zf;this.instances.set(null,n)}return this.instances.get(null)}}q(Ko,"instances",new Map);class ec extends ge{aggregate(e){const n=e[_];if(n){const o=n.data,s={type:o.type,causedAt:[]};return O(o)||E(o)?s.causedAt=o.beforeDeclarationPaths[0]:k(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[j.TitleRow]:s}}const t=e.value;if(!t)return;const r=t.data,a={type:r.type,causedAt:[]};return O(r)||E(r)?a.causedAt=r.beforeDeclarationPaths[0]:k(r)&&(a.causedAt=r.afterDeclarationPaths[0]),{[j.TitleRow]:a}}}class Go{static instance(e){return this.instances.has(null)||this.instances.set(null,new ec),this.instances.get(null)}}q(Go,"instances",new Map);class nc extends Zr{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const a of Object.values(e))a&&r.add(a.data.type);return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!k(n)&&!E(n)&&!O(n)&&!fn(n))return!1;return!0}}class tc{static instance(e){return new nc}}class rc extends ee{isComplexValue(e){return M(e)||Array.isArray(e)}aggregate(e,n,t,r,a){const o={};if(r){const s=r.diffs[_];if(s){const{data:l}=s;if(k(l)){const{afterValue:u}=l,c=U.getValueType(u);if(!U.isPrimitiveValue(c)&&this.isComplexValue(u)){const p=u[t],y=U.getValueType(p),g=U.isPrimitiveValue(y),v={data:{...l,afterValue:p},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:Nn,inherited:!0};return o[_]=v,o}return o[_]=s,o}if(E(l)){const{beforeValue:u}=l,c=U.getValueType(u);if(!U.isPrimitiveValue(c)&&this.isComplexValue(u)){const p=u[t],y=U.getValueType(p),g=U.isPrimitiveValue(y),v={data:{...l,beforeValue:p},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:Nn,inherited:!0};return o[_]=v,o}return o[_]=s,o}if(O(l)){const{beforeValue:u,afterValue:c}=l,f=U.getValueType(u),p=U.getValueType(c),y=U.isPrimitiveValue(f),g=U.isPrimitiveValue(p);if(y&&g)return o[_]=s,o;if(!y&&this.isComplexValue(u)&&g){const v=u[t],h=U.getValueType(v),D=U.isPrimitiveValue(h),S=U.isPredefinedValueSet(h),T={data:{...l,beforeValue:v,afterValue:null},styles:{before:{isContentVisible:D,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:Nn,inherited:!0};return D&&(T.styles.before.textHighlighterColor=N.Yellow),S&&(T.styles.before.borderShadowColor=N.Yellow),o[_]=T,o}if(!g&&this.isComplexValue(c)&&y){const v=c[t],h=U.getValueType(v),D=U.isPrimitiveValue(h),S=U.isPredefinedValueSet(h),T={data:{...l,beforeValue:null,afterValue:v},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:D,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:Nn,inherited:!0};return D&&(T.styles.after.textHighlighterColor=N.Yellow),S&&(T.styles.after.borderShadowColor=N.Yellow),o[_]=T,o}if(!y&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const v=u[t],h=c[t],D=U.getValueType(v),S=U.getValueType(h),T=U.isPrimitiveValue(D),b=U.isPrimitiveValue(S),x=U.isPredefinedValueSet(D),C=U.isPredefinedValueSet(S),A={data:{...l,beforeValue:v,afterValue:h},styles:{before:{isContentVisible:v!==void 0&&T,isHeaderVisible:v!==void 0,backgroundColor:v===void 0?N.Gray:N.Yellow,textHighlighterColor:v!==void 0?N.Yellow:void 0},after:{isContentVisible:h!==void 0&&b,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?N.Gray:N.Yellow,textHighlighterColor:h!==void 0?N.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:Nn,inherited:!0};return T&&(A.styles.before.textHighlighterColor=N.Yellow),b&&(A.styles.after.textHighlighterColor=N.Yellow),x&&(A.styles.before.borderShadowColor=N.Yellow),C&&(A.styles.after.borderShadowColor=N.Yellow),o[_]=A,o}}}else{const l=r.descendantDiffs[t];if(l)return o[_]=l,o}}}}class Bo{static instance(e){return this.instances.has(null)||this.instances.set(null,new rc),this.instances.get(null)}}q(Bo,"instances",new Map);class ic extends Yf{constructor(n){const{source:t,diffsMetaKeys:r,supportJsonSchema:a=!1,logger:o=rn()}=n;super();q(this,"tree");q(this,"source");q(this,"supportJsonSchema");q(this,"diffsMetaKeys");q(this,"logger");q(this,"nodeDataBuilder");q(this,"CHANGE_SEVERITIES",{[dl]:6,[ul]:5,[fl]:4,[cl]:3,[Ya]:2,[ml]:1});this.source=t,this.supportJsonSchema=a,this.diffsMetaKeys=r,this.logger=o,this.tree=new Uf,this.nodeDataBuilder=new Xf}build(){if(!M(this.source))return this.tree;Yt(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Qt,diffMetaKeys:this.diffsMetaKeys},t=Fo(),r=$f({source:this.source,tree:this.tree,supportedNodeKinds:ut,createNodeFromRaw:(a,o,s,l,u)=>this.createNodeFromRaw(a,o,s,l,u),createNodeParams:(a,o)=>({value:a??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(a,o)=>({parent:o,container:null,ancestors:a.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(a,o)=>({parent:a.parent,container:o,ancestors:a.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:a=>a.type===fe.SIMPLE,isComplexNode:a=>a.type===fe.COMPLEX,resolveNodeKey:(a,o)=>this.resolveNodeKey(a,o),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,o)=>{if(!M(o)&&!Array.isArray(o))return!0;const s=a.value();return s?this.supportJsonSchema&&(s.before.valueType===oe.JSON_SCHEMA||s.after.valueType===oe.JSON_SCHEMA||s.before.valueType===oe.MULTI_SCHEMA||s.after.valueType===oe.MULTI_SCHEMA):!1}});return xn(this.source,r,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return M(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,a,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),f={type:fe.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:c,newDataLevel:l},p=this.tree.createSimpleNode(n,t,r,!1,f);this.assignNodeDiffs(p,r,o);const g=p.diffs[_];if(g){const{data:v}=g;if(k(v)&&u&&(u.before=U.DEFAULT_BASE_JSO_NODE_VALUE),E(v)&&u&&(u.after=U.DEFAULT_BASE_JSO_NODE_VALUE),O(v)){const{beforeValue:h}=v,D=U.transformRawJsoPropertyToBaseJsoNodeValue(t,h);u&&(u.before=D)}}return p}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,()=>null)}createNodeDiffs(n,t,r){if(!this.isJsoTreeNodeKind(t))return;const a=r.parent&&this.isJsoSimpleTreeNodeWithDiffs(r.parent)?r.parent:void 0,o=r.container&&this.isJsoComplexTreeNodeWithDiffs(r.container)?r.container:void 0;return Bo.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isJsoTreeNodeKind(n))return tc.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return Ko.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isJsoTreeNodeKind(n)&&r)return Jo.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return Go.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),ei(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(r);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const r=t.diffsSeverities["title-row"];if(r)return{"title-row":r}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[_];if(!t||!O(t.data))return!1;const r=U.getValueType(t.data.beforeValue),a=U.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(r),s=this.isJsoComplexValueType(a);return o!==s}isJsoComplexValueType(n){return n===oe.OBJECT||n===oe.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[_]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const r=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(r)return r}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===fe.SIMPLE||n.type===fe.COMPLEX))}isJsoTreeNodeKind(n){return ut.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===fe.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===fe.COMPLEX}maxDiffType(n){let t;for(const r of n)this.compareDiffTypes(r,t)>0&&(t=r);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Qe={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function Uo(i,e){if(e)return{type:"object",properties:{[i]:e}}}function Gr(i,e,n,t){if(!e)return;const r=n==null?void 0:n.data,a=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[i]:e,...r&&a?{[a]:{[i]:r}}:{}}}}function ac(i,e){if(e&&!(e.valueType!==Qe.JSON_SCHEMA&&e.valueType!==Qe.MULTI_SCHEMA))return M(e.value)?Uo(i,e.value):void 0}function oc(i,e,n,t){if(e&&!(e.before.valueType!==Qe.JSON_SCHEMA&&e.before.valueType!==Qe.MULTI_SCHEMA&&e.after.valueType!==Qe.JSON_SCHEMA&&e.after.valueType!==Qe.MULTI_SCHEMA)){if((e.before.valueType===Qe.JSON_SCHEMA||e.before.valueType===Qe.MULTI_SCHEMA)&&M(e.before.value))return Gr(i,e.before.value,n,t);if((e.after.valueType===Qe.JSON_SCHEMA||e.after.valueType===Qe.MULTI_SCHEMA)&&M(e.after.value))return Gr(i,e.after.value,n,t)}}const hi=m.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?d.jsx("span",{className:t,children:`${n}`}):null});hi.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Yo(i){const{appearance:e}=i;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function sc(i){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=i,r=Yo({appearance:e});return m.useMemo(()=>[r,e==="text"?ie.highlighter(n):"",e==="block"?ie.borderShadow(t):""].filter(Boolean).join(" "),[e,t,r,n])}const Ot=m.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,borderShadowColor:a}=i,o=sc({appearance:t,textHighlighterColor:r,borderShadowColor:a});return d.jsx(hi,{isVisible:e,value:n,className:o})});Ot.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const bi=i=>{const{node:e,supportJsonSchema:n=!1}=i,{[le]:t}=i,r=Ie(),a=Gn(),{beforeLevel:o,afterLevel:s}=et(),[l,u]=m.useState(!0),c=m.useCallback(()=>{u(R=>!R)},[]),f=e.value(),p=e.diffs,y=e.descendantDiffsSummary,g=m.useMemo(()=>p[_],[p]),v=m.useCallback(R=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Ot,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!l&&d.jsx(ri,{values:Array.from(y)})]});const{styles:H}=g;return R===Q?d.jsx(Ot,{isVisible:H.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:H.before.textHighlighterColor,borderShadowColor:H.before.borderShadowColor}):R===ae?d.jsx(Ot,{isVisible:H.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:H.after.textHighlighterColor,borderShadowColor:H.after.borderShadowColor}):d.jsx(d.Fragment,{})},[l,y,f,g]),h=m.useMemo(()=>{const R=mn(e);return de(R,{resolveDiff:()=>g})},[e,g]),D=e.childrenNodes(),S=m.useMemo(()=>{const R=!!f,H=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==oe.UNKNOWN,L=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==oe.UNKNOWN;return R&&(H||L)},[f]),T=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),b=m.useMemo(()=>n?oc(e.key,f,g,a):void 0,[a,e.key,f,g,n]);if(b)return a?d.jsx(cr,{schema:b,expandedDepth:2,displayMode:r,layoutMode:Ee,metaKeys:a,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const x=jo(D),[C,A]=(()=>{let R=o+1,H=s+1;const[L]=D,F=L==null?void 0:L.diffs[_];return F&&x&&(R=F.flags.before.increaseLevel?o+1:o,H=F.flags.after.increaseLevel?s+1:s),[R,H]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(he,{"data-precededby":t,value:`${e.key}`,expandable:S,expanded:l,onClickExpander:S?c:void 0,variant:W.body2,enableHeaderValue:T,subheader:v,usage:Zt.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...h}),l&&d.jsx(qn,{beforeLevel:C,afterLevel:A,children:D.map(R=>d.jsx(bi,{"data-precededby":V.JSO_PROPERTY,node:R,supportJsonSchema:n},R.id))})]})};bi.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const gt=m.memo(i=>i.mergedSource===null?null:d.jsx(An,{fallback:d.jsx(Cn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(lc,{...i})})),lc=m.memo(i=>{const{mergedSource:e,displayMode:n=Rn,initialLevel:t=0,supportJsonSchema:r=!1,devMode:a=!1,diffMetaKeys:o,diffTypes:s}=i,{[le]:l}=i,u=m.useMemo(()=>rn(a),[a]),c=m.useMemo(()=>new ic({source:e,supportJsonSchema:r,diffsMetaKeys:o,logger:u}),[e,r,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const p=f.root;if(!p)return null;const y=p.childrenNodes();if(y.length===0)return null;const g=jo(y),[v,h]=(()=>{let D=t,S=t;const[T]=y,b=T.diffs[_];return b&&g&&(D=b.flags.before.increaseLevel?t:t-1,S=b.flags.after.increaseLevel?t:t-1),[D,S]})();return d.jsx(er.Provider,{value:o,children:d.jsx(ni.Provider,{value:s,children:d.jsx(Vn.Provider,{value:n,children:d.jsx(Ln.Provider,{value:Ee,children:d.jsx(qn,{beforeLevel:v,afterLevel:h,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:y.map((D,S)=>d.jsx(bi,{"data-precededby":S===0?l:V.JSO_PROPERTY,node:D,supportJsonSchema:r},D.id))})})})})})})});gt.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class dc extends Yr{constructor(){super()}}function Wo(){return{"/*":()=>Wo(),kind:dr.PROPERTY}}function uc(i){return $t(i)}const fc=new Set(ut);class cc extends zt{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!this.isJsoTreeNodeKind(e)||e!==dr.PROPERTY?null:U.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return fc.has(e)}}class mc extends Xt{constructor(n){const{source:t,supportJsonSchema:r=!1,materializeDepth:a,logger:o=rn()}=n;super();q(this,"tree");q(this,"source");q(this,"supportJsonSchema");q(this,"materializeDepth");q(this,"logger");q(this,"nodeDataBuilder");q(this,"lazyState",new eo);q(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=r,this.materializeDepth=a,this.logger=o,this.tree=new dc,this.nodeDataBuilder=new cc}build(){if(!M(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Qt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=Wo();return this.crawlHooks=uc({source:this.source,tree:this.tree,supportedNodeKinds:ut,createNodeFromRaw:(r,a,o,s,l)=>this.createNodeFromRaw(r,a,o,s,l),createNodeParams:(r,a,o)=>({value:r??null,newDataLevel:!0,container:o,parent:a}),createStateForSimpleNode:(r,a)=>({parent:a,container:null,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),createStateForComplexNode:(r,a)=>({parent:r.parent,container:a,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),isSimpleNode:r=>this.isJsoSimpleTreeNode(r),isComplexNode:r=>this.isJsoComplexTreeNode(r),resolveNodeKey:(r,a)=>this.resolveNodeKey(r,a),isDisallowedValue:r=>r===void 0,shouldStopAfterNodeCreation:(r,a)=>{if(!M(a)&&!Array.isArray(a))return!0;const o=r.value();return o?this.supportJsonSchema&&(o.valueType===oe.JSON_SCHEMA||o.valueType===oe.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Hl}}),xn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const a={parent:n,container:null,ancestors:no(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};xn(r.fragment,this.crawlHooks,{state:a,rules:r.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u}=o;if(a){const y=this.createNodeMeta(t,o),g={type:fe.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,g)}const c=this.createNodeValue(t,r,{...o,parent:s,container:l}),f=this.createNodeMeta(t,o),p={type:fe.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,p)}createNodeMeta(n,t){const{value:r,parent:a=null}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===fe.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const ur=i=>d.jsx(An,{fallback:d.jsx(Cn,{componentName:"JSON Schema Viewer"}),children:d.jsx(yc,{...i})}),yc=i=>{const{schema:e,expandedDepth:n=Wt,displayMode:t=Rn,overriddenKind:r,topLevelPropsMediaTypes:a,customizationOptions:o={},initialLevel:s=0}=i,l=m.useMemo(()=>kf(e),[e]),c=m.useMemo(()=>new uo(l,n),[n,l]).root;let f=null;return nr(c)&&(f=d.jsx(fr,{state:c,overriddenKind:r})),tr(c)&&(f=d.jsx(sr,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(lr.Provider,{value:o,children:d.jsx(pi.Provider,{value:a,children:d.jsx(Vn.Provider,{value:t,children:d.jsx(Me.Provider,{value:s,children:f})})})})};ur.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const $o=m.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=Yo({appearance:t});return d.jsx(hi,{isVisible:e,value:n,className:r})});$o.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const vi=i=>{const{node:e,supportJsonSchema:n=!1}=i,{[le]:t}=i,r=Ie(),a=He(),[o,s]=m.useState(!0),l=m.useCallback(()=>{s(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx($o,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),p=e.childrenNodes(),y=m.useMemo(()=>n?ac(e.key,u):void 0,[e.key,u,n]);return y?d.jsx(ur,{schema:y,expandedDepth:2,displayMode:r,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(he,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:l,variant:W.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:Zt.JsoProperty}),o&&d.jsx(Me.Provider,{value:a+1,children:p.map(g=>d.jsx(vi,{"data-precededby":V.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};vi.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const pt=m.memo(i=>i.source===null?null:d.jsx(An,{fallback:d.jsx(Cn,{componentName:"JSO Viewer"}),children:d.jsx(gc,{...i})})),gc=m.memo(i=>{const{source:e,displayMode:n=Rn,layoutMode:t=tn,initialLevel:r=0,supportJsonSchema:a=!1,devMode:o=!1}=i,{[le]:s}=i,l=m.useMemo(()=>rn(o),[o]),u=m.useMemo(()=>new mc({source:e,supportJsonSchema:a,logger:l}),[e,a,l]),c=m.useMemo(()=>u.build(),[u]);l.debug("[JSO] Source:",e),l.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const p=f.childrenNodes();return p.length===0?null:d.jsx(Vn.Provider,{value:n,children:d.jsxs(Ln.Provider,{value:t,children:[" ",d.jsx(Me.Provider,{value:r,children:d.jsx("div",{"data-testid":"jso-viewer",children:p.map((y,g)=>d.jsx(vi,{"data-precededby":g===0?s:V.JSO_PROPERTY,node:y,supportJsonSchema:a},y.id))})})]})})});pt.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const Zi=m.memo(i=>{const{diff:e,layoutSide:n}=i,t=He(),{diffStylesClasses:r,isVisible:a}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const s=new Set;return n===Q&&(k(e)&&(s.add(ie.background(N.Gray)),o=!1),E(e)&&s.add(ie.background(N.Red))),n===ae&&(k(e)&&s.add(ie.background(N.Green)),E(e)&&(s.add(ie.background(N.Gray)),o=!1)),{diffStylesClasses:Array.from(s),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row w-full h-full ${r.join(" ")}`,children:[d.jsx(jn,{level:t+1,lastInvisible:!0}),a&&d.jsx(fo,{children:"Extensions"})]})}),pc=[],zo=i=>{const{extensions:e,$nodeChange:n}=i,t=He(),r=Ie(),a=De(),o=Gn(),s=a===Ii,l=a===Ee,u=m.useMemo(()=>{let g=hc(n);return g||(g=vc(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(E(u)||O(u))&&(g=u.beforeDeclarationPaths[0]??[]),k(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),p=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(jn,{level:t+1,lastInvisible:!0}),d.jsx(fo,{children:"Extensions"})]});switch(a){case Ii:return null;case Ee:return d.jsx(Jn,{diffType:c,diffTypeCause:f,children:d.jsx(Mn,{left:d.jsx(Zi,{diff:u,layoutSide:Q}),right:d.jsx(Zi,{diff:u,layoutSide:ae})})});default:return g}},[a,t,u,f,c]),y=m.useMemo(()=>{if(s)return null;if(l&&o){const g=bc(e,u,o);return d.jsx(gt,{mergedSource:g,initialLevel:t+1,displayMode:r,diffMetaKeys:o,diffTypes:pc})}return d.jsx(pt,{source:e,initialLevel:t+1})},[s,l,o,e,t,u,r]);return y?d.jsxs("div",{className:"flex flex-col",children:[p,y]}):null};function hc(i){if(!i)return;const{depth:e,...n}=i;return n}function bc(i,e,n){if(!e||!n)return i;const t=Object.keys(i),r={};for(const a of t)Ht(a)&&(r[a]=e);return{...i,[n.diffsMetaKey]:r}}function vc(i,e){var s;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(i),r=ue(se(i,[n]));if(!r)return;const a=Object.keys(r);if(a.length===0||t.length!==a.length)return;const o=r[a[0]];for(const l of a)if(((s=r[l])==null?void 0:s.action)!==(o==null?void 0:o.action))return;return o}zo.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const Sc=["type","nullable","title","format"],Dc=["required","readOnly","writeOnly","deprecated"],Xo=i=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:r,readOnly:a,writeOnly:o,deprecated:s,isExpandable:l,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:p=Wa,level:y=0,$changes:g,$metaChanges:v,$nodeChange:h,$nodeChangesSummary:D}=i,S=!!h,T=yl(),b=Bf(),x=ft(b)&&(n!=null&&n.title)&&b[n.title]?b[n.title]:void 0,C=gl(S?void 0:D),A=m.useCallback($=>T.length===0||T.includes($),[T]),{isDocumentLayoutMode:R,isInlineDiffsLayoutMode:H,isSideBySideDiffsLayoutMode:L}=$a(p),F=!!g&&Sc.some($=>$n(g[$]))||!!v&&Dc.some($=>$n(v[$])),{nodeAdded:G,nodeRemoved:Y,nodeReplaced:B,nodeRenamed:te}={nodeAdded:S&&h.action===J.add,nodeRemoved:S&&h.action===J.remove,nodeReplaced:S&&h.action===J.replace,nodeRenamed:S&&h.action===J.rename},be=pl(hl(g,v,Sl),T),[I,K]=S?Jt(h):F?Jt(...be):bl,Z=vl(I,T),X=S?Oi[h==null?void 0:h.action]:F?Oi[J.replace]:"",z=({layoutSide:$})=>{const ce=L?"w-1/2":"w-full",me=!R&&!S&&F&&!!(v!=null&&v.required),We=od(),on=We&&We===$,ke=c&&!l,Bn=["flex flex-row",!ke&&"gap-2",ce].filter(Boolean).join(" "),Un=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(co,{...t,showNullable:!0,layoutMode:p,layoutSide:$,$changes:g})}),Dl.isNotEmpty(C)&&!R&&l&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(ri,{values:C,filter:A})}),r&&d.jsx(rr,{text:ii,children:d.jsx(ai,{})}),d.jsx(dd,{requiredChanged:me,readOnly:a,writeOnly:o,deprecated:s,layoutSide:$,isNodeChanged:S,isContentChanged:F,$nodeChange:h,$metaChanges:v}),x&&d.jsx(ud,{label:x,colorSchema:wl(Nl),layoutMode:p,layoutSide:$,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:Bn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(jn,{level:y}),ke?d.jsx("div",{className:"w-5"}):d.jsx(sd,{isRoot:c,isExpandable:l,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${l?"hover:cursor-pointer":""}`,onClick:l?f:void 0,children:d.jsx(ld,{...n,showRequired:!0,layoutMode:p,layoutSide:$,requiredChange:v==null?void 0:v.required,titleChange:h})}),!on&&d.jsx(Un,{})]})]})};return R?d.jsx("div",{className:"flex flex-row",children:d.jsx(z,{...i,layoutSide:ae})}):H?!S&&!F?d.jsx("div",{className:"flex flex-row",children:d.jsx(z,{...i,layoutSide:Q})}):d.jsxs("div",{className:`flex flex-row relative ${Z?X:""}`,children:[I&&Z&&d.jsx(Li,{variant:I,message:K}),d.jsx(z,{...i,layoutSide:Q})]}):L?!S&&!F?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(z,{...i,layoutSide:Q}),d.jsx(z,{...i,layoutSide:ae})]}):d.jsxs("div",{className:`flex flex-row relative ${Z?X:""}`,children:[I&&Z&&d.jsx(Li,{variant:I,message:K}),!S&&F||S&&(Y||B||te)?d.jsx(z,{...i,layoutSide:Q}):d.jsx(ji,{level:(h==null?void 0:h.depth)??y}),!S&&F||S&&(G||te||B)?d.jsx(z,{...i,layoutSide:ae}):d.jsx(ji,{level:(h==null?void 0:h.depth)??y})]}):d.jsx(ad,{layoutMode:p})};Xo.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function wc(i,e){var b,x,C;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,r=e==null?void 0:e.maxLength,a=e==null?void 0:e.pattern,o=e,s=o==null?void 0:o.exclusiveMinimum,l=o==null?void 0:o.exclusiveMaximum,u=typeof s=="number"?s:s===!0&&pe(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof l=="number"?l:l===!0&&pe(o==null?void 0:o.maximum)?o.maximum:void 0,f=s===!0||o==null?void 0:o.minimum,p=l===!0||o==null?void 0:o.maximum,y=o==null?void 0:o.multipleOf,g=(C=(x=(b=i==null?void 0:i.parent)==null?void 0:b.value())==null?void 0:x.propertyNames)==null?void 0:C.enum,v=e==null?void 0:e.minProperties,h=e==null?void 0:e.maxProperties,D=e==null?void 0:e.uniqueItems,S=e==null?void 0:e.minItems,T=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:r,pattern:a},number:{minimum:f,maximum:p,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:y},object:{allowedPropertyNames:g,minProperties:v,maxProperties:h},array:{uniqueItems:D,minItems:S,maxItems:T}}}const Nc="?",Se="{value}",dn="{exclusive_value}",Dn=">",Vt=">=",wn="<",Rt="<=",we=1,Ne=2,Te=4,xe=8,Mt={0:{lower:void 0,upper:void 0},[we]:{lower:`${Vt} ${Se}`,upper:void 0},[Ne]:{lower:`${Dn} ${dn}`,upper:void 0},[Te]:{lower:void 0,upper:`${Rt} ${Se}`},[xe]:{lower:void 0,upper:`${wn} ${dn}`},[Ne|we]:{lower:`${Dn} ${Se}`,upper:void 0},[Ne|Te]:{lower:`${Dn} ${dn}`,upper:`${Rt} ${Se}`},[Ne|xe]:{lower:`${Dn} ${dn}`,upper:`${wn} ${dn}`},[xe|we]:{lower:`${Vt} ${Se}`,upper:`${wn} ${dn}`},[xe|Te]:{lower:void 0,upper:`${wn} ${Se}`},[Te|we]:{lower:`${Vt} ${Se}`,upper:`${Rt} ${Se}`},[Ne|we|Te]:{lower:`${Dn} ${Se}`,upper:`${Rt} ${Se}`},[Ne|we|xe]:{lower:`${Dn} ${Se}`,upper:`${wn} ${dn}`},[Ne|Te|xe]:{lower:`${Dn} ${dn}`,upper:`${wn} ${Se}`},[xe|we|Te]:{lower:`${Vt} ${Se}`,upper:`${wn} ${Se}`},[we|Ne|Te|xe]:{lower:`${Dn} ${Se}`,upper:`${wn} ${Se}`}};function _t(i){return i!==void 0&&i!==!1}function qt(i){return i!==void 0&&i!==!1}function ea(i,e,n){return(i&(we|Ne))!==(we|Ne)||n===void 0||typeof e!="number"?i:n>=e?i&~we:i&~Ne}function na(i,e,n){return(i&(Te|xe))!==(Te|xe)||n===void 0||typeof e!="number"?i:n<=e?i&~Te:i&~xe}function Pt(i,e,n){return i.replace(Se,`${e}`).replace(dn,pe(n)?`${n}`:Nc)}function Tc(i,e,n){var on,ke;const t={data:{},changes:{},changesKeys:[],visible:!1},r=i.minimum,a=i.exclusiveMinimum,o=i.maximum,s=i.exclusiveMaximum,l=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[p]=Jt(l,u),[y]=Jt(c,f),g=pe(r),v=pe(o),h=pe(l),D=pe(c),S=pe(u),T=pe(f),b=wt(l),x=Yn(l),C=hn(l),A=wt(c),R=Yn(c),H=hn(c),L=typeof a=="number"?a:void 0,F=typeof s=="number"?s:void 0;let G=0,Y=0;g&&(!h||b||C)&&(Y|=we),_t(a)&&(!S||wt(u)||hn(u)&&qt(u==null?void 0:u.afterValue))&&(Y|=Ne),v&&(!D||A||H)&&(Y|=Te),_t(s)&&(!T||wt(f)||hn(f)&&qt(f==null?void 0:f.afterValue))&&(Y|=xe),typeof a!="number"&&!(Y&we)&&(Y&=~Ne),typeof s!="number"&&!(Y&Te)&&(Y&=~xe),Y=ea(Y,r,L),Y=na(Y,o,F);const B=Y in Mt?{...Mt[Y]}:void 0;if(B!=null&&B.lower&&(B.lower=Pt(B.lower,r,L)),B!=null&&B.upper&&(B.upper=Pt(B.upper,o,F)),t.data.lower=B==null?void 0:B.lower,t.data.upper=B==null?void 0:B.upper,!h&&!S&&!D&&!T)return t.visible=ta(t.data.lower,t.data.upper),t;let te,be,I,K;g&&!h&&(te=r,G|=we),(x||C)&&(te=l.beforeValue,G|=we),v&&!D&&(be=o,G|=Te),(R||H)&&(be=c.beforeValue,G|=Te),_t(a)&&!S&&(G|=Ne,I=L),(hn(u)||Yn(u))&&qt(u==null?void 0:u.beforeValue)&&(G|=Ne,typeof u.beforeValue=="number"&&(I=u.beforeValue)),_t(s)&&!T&&(G|=xe,K=F),(hn(f)||Yn(f))&&qt(f==null?void 0:f.beforeValue)&&(G|=xe,typeof f.beforeValue=="number"&&(K=f.beforeValue)),(!S&&typeof a!="number"||(hn(u)||Yn(u))&&typeof u.beforeValue!="number")&&!(G&we)&&(G&=~Ne),(!T&&typeof s!="number"||(hn(f)||Yn(f))&&typeof f.beforeValue!="number")&&!(G&Te)&&(G&=~xe),G=ea(G,te,I),G=na(G,be,K);const z=G in Mt?{...Mt[G]}:void 0;z!=null&&z.lower&&(z.lower=Pt(z.lower,te,I)),z!=null&&z.upper&&(z.upper=Pt(z.upper,be,K)),(on=t.data).lower??(on.lower=z==null?void 0:z.lower),(ke=t.data).upper??(ke.upper=z==null?void 0:z.upper),t.visible=ta(t.data.lower,t.data.upper);const $=ra(p,z==null?void 0:z.lower,B==null?void 0:B.lower),ce=ra(y,z==null?void 0:z.upper,B==null?void 0:B.upper),me=ia(l,u),We=ia(c,f);return $&&(aa($,me),t.changes.lower=$),ce&&(aa(ce,We),t.changes.upper=ce),t.changesKeys=In(t.data,n),t}function ta(i,e){return!!i||!!e}function ra(i,e,n){if(!(i===void 0||e===n))return e===void 0&&n!==void 0?{type:i,action:J.add,afterValue:n}:e!==void 0&&n===void 0?{type:i,action:J.remove,beforeValue:e}:{type:i,action:J.replace,beforeValue:e,afterValue:n}}function ia(...i){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of i)n&&(za(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),Xa(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function aa(i,e){if(i)return za(i)&&(i.beforeDeclarationPaths=e.beforeDeclarationPaths),Xa(i)&&(i.afterDeclarationPaths=e.afterDeclarationPaths),i}const Pn={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},Qo=i=>{var We,on,ke,Bn,Un,Pi;const{shift:e=!1,state:n,$nodeChange:t}=i,r=n.node,o=n.meta,s=n.value,l=s,u=(We=n.parent)==null?void 0:We.value,c=(on=n.parent)==null?void 0:on.value,f=He(),p=De(),y=fd(r),g=cd(r),v=md(s),h=yd(s),D=mo(s),S=Lr(s)||Lr(u),{any:T,string:b,number:x,object:C,array:A}=wc(r,s),R={minimum:s==null?void 0:s.minimum,exclusiveMinimum:s==null?void 0:s.exclusiveMinimum,maximum:s==null?void 0:s.maximum,exclusiveMaximum:s==null?void 0:s.exclusiveMaximum},H=(ke=l==null?void 0:l.$changes)==null?void 0:ke.minimum,L=(Bn=l==null?void 0:l.$changes)==null?void 0:Bn.exclusiveMinimum,F=(Un=l==null?void 0:l.$changes)==null?void 0:Un.maximum,G=(Pi=l==null?void 0:l.$changes)==null?void 0:Pi.exclusiveMaximum,Y={minimum:$n(H)?H:void 0,exclusiveMinimum:$n(L)?L:void 0,maximum:$n(F)?F:void 0,exclusiveMaximum:$n(G)?G:void 0},{data:B,changes:te,changesKeys:be,visible:I}=Tc(R,Y,Pn.valueRange),K=In(b,Pn.valueLength),Z=In(b,Pn.valuePattern),X=In(x,Pn.multipleOf),z=In(C,Pn.propertiesCount),$=In(A,Pn.uniqueItems),ce=In(A,Pn.itemsCount),me=Ua(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(T==null?void 0:T.allowedValues)&&d.jsx(Fi,{shift:e,$changesKey:"enum",title:gd,items:T.allowedValues,layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),v&&d.jsxs(d.Fragment,{children:[(pe(b==null?void 0:b.minLength)||pe(b==null?void 0:b.maxLength))&&d.jsx(bn,{shift:e,$changesKeys:K,title:oi,items:{minLength:b==null?void 0:b.minLength,maxLength:b==null?void 0:b.maxLength},layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes}),pe(b==null?void 0:b.pattern)&&d.jsx(bn,{shift:e,$changesKeys:Z,title:si,items:{pattern:b==null?void 0:b.pattern},layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes})]}),h&&d.jsxs(d.Fragment,{children:[I&&d.jsx(bn,{shift:e,$changesKeys:be,title:li,items:B,layoutMode:p,level:f,$nodeChange:me,$changes:te}),pe(x==null?void 0:x.multipleOf)&&d.jsx(bn,{shift:e,$changesKeys:X,title:di,items:{multipleOf:x==null?void 0:x.multipleOf},layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes})]}),S&&d.jsxs(d.Fragment,{children:[g&&d.jsx(bn,{shift:e,$changesKeys:[],title:pd,items:{additionalPropertyNamePattern:r.key},layoutMode:p,level:f,$nodeChange:me}),y&&(C==null?void 0:C.allowedPropertyNames)&&d.jsx(Fi,{shift:e,$changesKey:"propertyNames",title:yo,items:C.allowedPropertyNames,layoutMode:p,level:f,$nodeChange:me,$changes:c==null?void 0:c.$changes}),(pe(C==null?void 0:C.minProperties)||pe(C==null?void 0:C.maxProperties))&&d.jsx(bn,{shift:e,$changesKeys:z,title:ui,items:{minProperties:C==null?void 0:C.minProperties,maxProperties:C==null?void 0:C.maxProperties},layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes})]}),D&&d.jsxs(d.Fragment,{children:[pe(A==null?void 0:A.uniqueItems)&&d.jsx(bn,{shift:e,$changesKeys:$,title:fi,items:{uniqueItems:`${A.uniqueItems}`},layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),(pe(A==null?void 0:A.minItems)||pe(A==null?void 0:A.maxItems))&&d.jsx(bn,{shift:e,$changesKeys:ce,title:ci,items:{minItems:A==null?void 0:A.minItems,maxItems:A==null?void 0:A.maxItems},layoutMode:p,level:f,$nodeChange:me,$changes:l==null?void 0:l.$changes})]})]})};Qo.__docgenInfo={description:"",methods:[],displayName:"Validations"};const Zo=i=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:r,$nodeChange:a}=i,o=e.node,s=He(),l=e.meta,u=l,c=e.value,f=c,p=hd(),y=De(),g=go(e),[v,h]=m.useState(!1),[D,S]=m.useState(0);m.useEffect(()=>{const H=e.children.filter(nr).length===0;(!bd(o)||e.expanded&&H)&&!o.isCycle?h(!0):h(e.expanded),S(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const T=!vd(o),b=!Sd(o),x=po(o),C=x,A=Lo(),R=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(Xo,{nodeId:o.id,nodeTitleData:Dd({node:o,nodeValue:c,nodeMeta:l,customizationOptions:A}),nodeTypeData:ti({node:o,nodeValue:c,customizationOptions:A}),isCircularRef:o.isCycle,readOnly:l==null?void 0:l.readOnly,writeOnly:l==null?void 0:l.writeOnly,deprecated:l==null?void 0:l.deprecated,isExpandable:g,expanded:e.expanded,sorted:D,isRoot:x,onToggleExpander:t,onToggleSort:r,layoutMode:y,level:s,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:a??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),p&&v&&T&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:b&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(wd,{shift:C,state:e,$nodeChange:a}),d.jsx(Qo,{shift:C,state:e,$nodeChange:a}),R&&d.jsx(zo,{extensions:R,$nodeChange:a})]})})]})};Zo.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const es=i=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:r,nestingIndicatorTitleData:a}=i,o=De();return d.jsx(d.Fragment,{children:n.map((s,l)=>nr(s)?d.jsxs("div",{children:[!e&&a&&s.first&&d.jsx(Nd,{shift:!1,NodeType:co,nodeTypeData:a.nodeTypeData,depth:a.nodeDepth,layoutMode:o,$nodeChange:a.$nodeChange,$changes:a.$changes}),d.jsx(fr,{state:s,$nodeChange:r},`prop-${l}`)]},`prop-${l}`):tr(s)?d.jsx(sr,{state:s,onGlobalSelectNestedNode:t,$nodeChange:r},`combiner-${l}`):null)})};es.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const fr=i=>{const{state:e,overriddenKind:n,$nodeChange:t}=i,r=e.node,a=e.value,o=e.children,s=o.filter(te=>!tr(te)),l=a,u=e.meta,c=po(r),f=Lr(a),p=mo(a),y=Td(a),g=He(),v=e.node.newDataLevel,h=!c&&v?g+1:g,D=go(e),[S,T]=m.useState(!1),[,b]=m.useState(0);m.useEffect(()=>{T(e.expanded),b(e.sorted)},[e.expanded,e.sorted]);const[,x]=m.useState(),C=te=>{te&&(e.setSelected(te),x(e.selected))},[A,R]=m.useState(void 0),H=te=>{if(te){const be=Ad(te);R(be)}},L=t??(u==null?void 0:u.$nodeChange),F=Tl(s),G=n==="parameters"&&c&&(f||p)&&!y,Y=ti({node:r,nodeValue:a});Y==null||delete Y.combiner;const B=Y?{nodeTypeData:Y,nodeDepth:h+1,$nodeChange:L??F,$changes:l==null?void 0:l.$changes}:void 0;return d.jsx(Me.Provider,{value:h,children:d.jsx(xd,{value:A,setValue:H,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(Zo,{state:e,disableNestingHeader:G,onToggleExpander:te=>Ed(e,T,te),onToggleSort:()=>kd(e,b),$nodeChange:L}),D&&S&&d.jsx(es,{disableNestingHeader:G,items:o,onGlobalSelectNestedNode:C,$nodeChange:L,nestingIndicatorTitleData:B})]})})})};fr.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const cr=i=>d.jsx(An,{fallback:d.jsx(Cn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(xc,{...i})}),xc=i=>{const{schema:e,expandedDepth:n=Wt,displayMode:t=Rn,layoutMode:r=Wa,filters:a=[],overriddenKind:o,metaKeys:s,topLevelPropsMediaTypes:l}=i;Yt(e,s.diffsMetaKey,s.aggregatedDiffsMetaKey);const u=m.useMemo(()=>Cf(e,s),[s,e]),c=m.useMemo(()=>new uo(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let p=null;return nr(f)&&(p=d.jsx(fr,{state:f,overriddenKind:o})),tr(f)&&(p=d.jsx(sr,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(pi.Provider,{value:l,children:d.jsx(xl.Provider,{value:a,children:d.jsx(Vn.Provider,{value:t,children:d.jsx(Ln.Provider,{value:r,children:d.jsx(er.Provider,{value:s,children:d.jsx(Me.Provider,{value:0,children:p})})})})})})};cr.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const Ec=" or null";function cn(i,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(Xn(i))return"";const n=i,t=(n==null?void 0:n.type)??zn,r=n&&typeof n=="object"&&"format"in n?n.format:void 0,a=n==null?void 0:n.title,o=n!=null&&n.nullable?Ec:"";let s=String(t);return r&&(s+=`(${r})`),a&&(s+=`<${a}>`),s+=o,s}function oa(i){return i!=null}function ns(i){if(!M(i))return{};const e={};return typeof i.minLength=="number"&&(e.minLength=i.minLength),typeof i.maxLength=="number"&&(e.maxLength=i.maxLength),typeof i.pattern=="string"&&(e.pattern=i.pattern),typeof i.minimum=="number"&&(e.minimum=i.minimum),typeof i.maximum=="number"&&(e.maximum=i.maximum),(typeof i.exclusiveMinimum=="number"||typeof i.exclusiveMinimum=="boolean")&&(e.exclusiveMinimum=i.exclusiveMinimum),(typeof i.exclusiveMaximum=="number"||typeof i.exclusiveMaximum=="boolean")&&(e.exclusiveMaximum=i.exclusiveMaximum),typeof i.multipleOf=="number"&&(e.multipleOf=i.multipleOf),typeof i.minProperties=="number"&&(e.minProperties=i.minProperties),typeof i.maxProperties=="number"&&(e.maxProperties=i.maxProperties),typeof i.uniqueItems=="boolean"&&(e.uniqueItems=i.uniqueItems),typeof i.minItems=="number"&&(e.minItems=i.minItems),typeof i.maxItems=="number"&&(e.maxItems=i.maxItems),e}function ts(i){const e=kn(i);if(!e)return[];const n=[],t=ns(e);return t.minLength!==void 0&&n.push(_e.MIN_LENGTH),t.maxLength!==void 0&&n.push(_e.MAX_LENGTH),t.pattern!==void 0&&n.push(_e.PATTERN),t.minimum!==void 0&&n.push(_e.MINIMUM),t.maximum!==void 0&&n.push(_e.MAXIMUM),oa(t.exclusiveMinimum)&&n.push(_e.EXCLUSIVE_MINIMUM),oa(t.exclusiveMaximum)&&n.push(_e.EXCLUSIVE_MAXIMUM),t.multipleOf!==void 0&&n.push(_e.MULTIPLE_OF),t.minProperties!==void 0&&n.push(_e.MIN_PROPERTIES),t.maxProperties!==void 0&&n.push(_e.MAX_PROPERTIES),t.uniqueItems!==void 0&&n.push(_e.UNIQUE_ITEMS),t.minItems!==void 0&&n.push(_e.MIN_ITEMS),t.maxItems!==void 0&&n.push(_e.MAX_ITEMS),n}function kc(i){return i!=null}function Ac(i){return!!(i!=null&&i.extensions)&&Object.keys(i.extensions).length>0}const Cc="x-deprecated-reason";function Vc(i){var n;const e=(n=i==null?void 0:i.extensions)==null?void 0:n[Cc];return typeof e=="string"&&e.length>0?e:void 0}class rs{resolveNodeVisibility(e,n){const t=kn(e),r=io(n),a=Vc(t),o=r&&!!(t!=null&&t.description),s=r&&!!a,l=r&&kc(t==null?void 0:t.default),u=r&&Array.isArray(t==null?void 0:t.examples)&&t.examples.length>0,c=r&&Array.isArray(t==null?void 0:t.enum)&&t.enum.length>0,f=r&&ts(e).length>0,p=r&&Ac(t),y=l||u||c||f||p;return{showDescription:o,showDeprecationReasonRow:s,deprecationReason:a,showDefaultRow:l,showExamplesRow:u,showEnumValuesRow:c,showValidationsSection:f,showExtensionsRow:p,showContentSection:o||s||y,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:r,showEnumValuesRow:a,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!r,isDescriptionListLastRow:e&&t&&!a&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&wo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const tt=new rs;function ht(i,e){return tt.resolveNodeVisibility(i,e)}function Si(i,e){return tt.resolveListLastRowFlags(i,e)}function Rc(i,e){return tt.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Di(i){return tt.resolveIsExpandable(i)}function mr(i,e){return tt.resolveInitiallyExpanded(i,e)}function Pe(i,e){return tt.resolveExpanderExpanded(i,e)}function is(i,e,n){if(!n)return i;const t=e===Q;return(n===J.add?t:!t)?Math.max(i-1,0):i}var nn=(i=>(i.Default="default",i.JsonSchema="json-schema",i))(nn||{});const Mc={[nn.JsonSchema]:zr};function _c(i){return Mc[i]??mt}const dt=m.memo(i=>{const{title:e,layoutSide:n,usage:t=nn.Default,lastInvisible:r=!1,diff:a,levelReductionAction:o}=i,{[le]:s}=i,l=Xr(n),u=m.useMemo(()=>is(l,n,o),[l,n,o]),c=m.useMemo(()=>_c(t),[t]),f=m.useMemo(()=>{if(!(a!=null&&a.data))return[];const{styles:h}=a,D=[];return n===Q&&D.push(ie.background(h.before.backgroundColor)),n===ae&&D.push(ie.background(h.after.backgroundColor)),D},[a,n]),p=m.useMemo(()=>{const h=a==null?void 0:a.data;return h?k(h)?n===ae:E(h)?n===Q:!0:!0},[a,n]),y=t===nn.JsonSchema,g=typeof e=="function"?e(n):e,v=p&&g!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":s,className:["nesting-indicator-title-row-content flex w-full h-full",y?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(jn,{level:u,lastInvisible:r&&p})}),v&&d.jsx(Cd,{title:g})]})});dt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const rt=m.memo(i=>{const e=De(),{diffsSeverities:n,diffsSeverityPlacement:t=j.TitleRow}=i,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),a=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>ct(r==null?void 0:r.causedAt),[r]);switch(e){case Ee:return d.jsx(Jn,{diffType:a,diffTypeCause:o,hidden:!1,children:d.jsx(Mn,{left:d.jsx(dt,{...i,layoutSide:Q}),right:d.jsx(dt,{...i,layoutSide:ae})})});case tn:return d.jsx(Fn,{content:d.jsx(dt,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});rt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const wi=m.createContext(null);function yr(){const i=m.useContext(wi);if(!i)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return i}const sa=" or null";class qc{static takeFieldDiffs(e){const n=e.diffs.typeLabelFieldDiffs;if(!(!n||Object.keys(n).length===0))return n}static resolveTypeSideValue(e,n){const t=kn(e.value()),r=(t==null?void 0:t.type)??zn,a=this.takeFieldDiffs(e);return Tt(r,a==null?void 0:a.type,n)??String(r)}static resolveSideDisplay(e,n,t){if(n!=null&&n.brokenRef)return{kind:un.NO_DIFFS,text:`$ref: ${n.brokenRef}`};const r=e.value();if(Xn(r))return{kind:un.NO_DIFFS,text:""};const a=this.takeFieldDiffs(e);if(!a)return{kind:un.NO_DIFFS,text:cn(r,n)};if(this.shouldUseMonolithicTypeLabelHighlight(a)){const f=Object.values(a).find(Boolean);return f?{kind:un.WHOLE_DIFFS,text:this.buildMonolithicSideLabel(r,a,t),diff:this.buildMonolithicTypeLabelDiffMetadata(f)}:{kind:un.NO_DIFFS,text:cn(r,n)}}const o=[],s=this.buildTypeSideSegment(r,a.type,t);s&&o.push(s);const l=this.buildWrappedSideSegment(this.takeMergedFormat(r),a.format,t,this.wrapFormat);l&&o.push(l);const u=this.buildWrappedSideSegment(r==null?void 0:r.title,a.title,t,this.wrapTitle);u&&o.push(u);const c=this.takeNullableSuffixSegment(r);return c&&o.push(c),o.length===0?{kind:un.NO_DIFFS,text:cn(r,n)}:{kind:un.PARTIAL_DIFFS,segments:o}}static shouldUseMonolithicTypeLabelHighlight(e){const n=ko.map(r=>[r,e[r]]).filter(r=>!!r[1]);return n.length===0||n.length===1||!e.type||!e.title||!e.format?!1:new Set(n.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,n,t){const r=[],a=Tt((e==null?void 0:e.type)??zn,n.type,t)??(e==null?void 0:e.type)??zn;r.push(String(a));const o=this.resolveWrappedFieldSideText(this.takeMergedFormat(e),n.format,t,this.wrapFormat);o&&r.push(o);const s=this.resolveWrappedFieldSideText(e==null?void 0:e.title,n.title,t,this.wrapTitle);return s&&r.push(s),e!=null&&e.nullable&&r.push(sa.trim()),r.join(" ")}static buildTypeSideSegment(e,n,t){const r=(e==null?void 0:e.type)??zn,a=Tt(r,n,t);return a===void 0?n?void 0:{text:String(r)}:{text:a,diff:n}}static buildWrappedSideSegment(e,n,t,r){const a=this.resolveWrappedFieldSideText(e,n,t,r);if(a!==void 0)return{text:a,diff:n}}static resolveWrappedFieldSideText(e,n,t,r){const a=Tt(e,n,t);if(a===void 0)return!n&&this.hasNonBlankText(e)?r(e):void 0;if(this.hasNonBlankText(a))return r(a)}static takeNullableSuffixSegment(e){if(!(Xn(e)||!(e!=null&&e.nullable)))return{text:sa.trim()}}static takeMergedFormat(e){if(!e||typeof e!="object"||!("format"in e))return;const n=e.format;return typeof n=="string"?n:void 0}static hasNonBlankText(e){return!!e&&e.trim().length>0}static wrapFormat(e){return`(${e})`}static wrapTitle(e){return`<${e}>`}static buildMonolithicTypeLabelDiffMetadata(e){const{data:n}=e;return O(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow}}}:k(n)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Green}}}:E(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class an{static takeSharedRowDiffs(e){return e.diffs}static takeKindAnyNodeDiffs(e){return e.diffs}static takePropertyRowDiffsForRequired(e){if(e.kind===ne.PROPERTY)return e.diffs}static takePropertyRowDiffs(e){return e.diffs}}class Pc extends an{static takeDiff(e){return this.takeSharedRowDiffs(e)[Tn]??e.diffs[_]}}class Hc extends an{static takeReadOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).readOnly}static takeWriteOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).writeOnly}static takeDeprecatedDiff(e){return this.takeKindAnyNodeDiffs(e).deprecated}static takeRawDiffs(e){const n=this.takeKindAnyNodeDiffs(e),t=this.takePropertyRowDiffsForRequired(e),r={};for(const o of st){const s=n[o];s!=null&&s.data&&(r[o]=s.data)}const a=t==null?void 0:t.required;return a!=null&&a.data&&(r.required=as.normalizeMetaDiffForDisplay(a)),r}static hasContentChange(e){return Object.keys(this.takeRawDiffs(e)).length>0}}class as extends an{static takeMetaDiff(e){var n;return(n=this.takePropertyRowDiffsForRequired(e))==null?void 0:n.required}static normalizeMetaDiffForDisplay(e){if(!(e!=null&&e.data))return;const n=e.data;return k(n)?{type:n.type,scope:n.scope,description:n.description,action:J.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:E(n)?{type:n.type,scope:n.scope,description:n.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}:O(n)?{type:n.type,scope:n.scope,description:n.description,action:J.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths,afterDeclarationPaths:n.afterDeclarationPaths}:n}static takeMetaDiffForDisplay(e){return this.normalizeMetaDiffForDisplay(this.takeMetaDiff(e))}static isVisibleOnSide(e,n,t){if(!n)return e===!0;const r=t===Q;return k(n)?!r:E(n)?r:O(n)?r?n.beforeValue===!0:n.afterValue===!0:e===!0}}class Ic extends an{static takeNestingIndicatorRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).nestingIndicatorRowColorizingDiff}static takeNodeChangesSummary(e){return this.takeKindAnyNodeDiffs(e).nodeChangesSummary}static isWholePropertyAddOrRemove(e){const n=e.diffs[_];if(!n)return!1;const{data:t}=n;return t.action==="add"||t.action==="remove"}}class Oc extends an{static takeRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).extensionsRowColorizingDiff}static takeDiffs(e){return this.takeKindAnyNodeDiffs(e).extensionsDiffs}}class Lc extends an{static takeDiff(e){return this.takePropertyRowDiffs(e).default}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).defaultRowColorizingDiff}static resolveSideEntries(e,n,t){if(!n)return e===void 0?[]:[{text:Ve.formatListDisplayValue(e)}];const r=t===Q,{data:a}=n;if(k(a))return r?[]:[{text:Ve.formatListDisplayValue(a.afterValue??e)}];if(E(a))return r?[{text:Ve.formatListDisplayValue(a.beforeValue??e)}]:[];if(O(a)){const o=r?a.beforeValue??e:a.afterValue??e;return[{text:Ve.formatListDisplayValue(o)}]}return e===void 0?[]:[{text:Ve.formatListDisplayValue(e)}]}}class jc extends an{static takeDiff(e){return this.takePropertyRowDiffs(e).enumDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).enumValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).enumRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?gn.resolveWholeListSideEntries(e,n,r):gn.resolvePartialListSideEntries(e,t,r)}}class Fc extends an{static takeDiff(e){return this.takePropertyRowDiffs(e).examplesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).examplesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).examplesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?gn.resolveWholeListSideEntries(e,n,r):gn.resolvePartialListSideEntries(e,t,r)}}class Jc extends an{static takeDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?gn.resolveWholeListSideEntries(e,n,r):gn.resolvePartialListSideEntries(e,t,r)}}class os extends an{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowDiffs)==null?void 0:t[n]}static takeValueDiffs(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowValueDiffs)==null?void 0:t[n]}static takeColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowColorizingDiffs)==null?void 0:t[n]}static takeValueRangeCrawlDiffs(e){return this.takeKindAnyNodeDiffs(e).valueRangeCrawlDiffs}static hasSemanticDiffs(e,n){if(this.takeDiff(e,n)||this.takeColorizingDiff(e,n))return!0;const t=this.takeValueDiffs(e,n);return t?Object.values(t).some(r=>r!==void 0):!1}static resolveSideEntries(e,n,t,r,a,o){return e===ye.VALUE_RANGE&&(o!=null&&o.crawlDiffs)?this.ValueRange.resolveValueRangeDiffSideEntries(this.ValueRange.resolveValueRangeSideInputFromNodeValue(o.nodeValue),o.crawlDiffs,a,t,r):t?gn.resolveWholeListSideEntries(n,t,a):gn.resolveValidationRowPartialSideEntries(e,n,r,a)}}q(os,"ValueRange",On);class gn{static resolveCore(e,n,t,r,a,o){const s=t===Q,l=new Set,u=[];for(let c=0;c<e.length;c++){const f=r(c),p=f?n==null?void 0:n[f]:void 0,y=Ve.formatListDisplayValue(e[c]);if(!p||!f){u.push({text:y});continue}if(l.has(f))continue;l.add(f);const{data:g}=p;if(k(g)){s||u.push({text:a(f,g.afterValue??e[c],y),valueDiffKey:f,diff:p});continue}if(E(g)){s&&u.push({text:a(f,g.beforeValue??e[c],y),valueDiffKey:f,diff:p});continue}O(g)&&u.push({text:s?a(f,g.beforeValue??e[c],y):a(f,g.afterValue??e[c],y),valueDiffKey:f,diff:p})}for(const[c,f]of Object.entries(n??{}))!f||l.has(c)||E(f.data)&&s&&(u.push({text:a(c,f.data.beforeValue,Ve.formatListDisplayValue(f.data.beforeValue)),valueDiffKey:c,diff:f}),l.add(c));return u.sort((c,f)=>o(c.valueDiffKey,c.text)-o(f.valueDiffKey,f.text))}static resolveMergedTextIndex(e,n){for(let t=0;t<e.length;t++)if(Ve.formatListDisplayValue(e[t])===n)return t;return e.length}static resolveWholeListSideEntries(e,n,t){const r=t===Q,{data:a}=n;return k(a)?r?[]:(Array.isArray(a.afterValue)?a.afterValue:e).map(s=>({text:Ve.formatListDisplayValue(s)})):E(a)?r?(Array.isArray(a.beforeValue)?a.beforeValue:e).map(s=>({text:Ve.formatListDisplayValue(s)})):[]:O(a)?(r?Array.isArray(a.beforeValue)?a.beforeValue:e:Array.isArray(a.afterValue)?a.afterValue:e).map(s=>({text:Ve.formatListDisplayValue(s)})):e.map(o=>({text:Ve.formatListDisplayValue(o)}))}static resolvePartialListSideEntries(e,n,t){return this.resolveCore(e,n,t,r=>String(r),(r,a)=>Ve.formatListDisplayValue(a),(r,a)=>this.resolveMergedTextIndex(e,a)).map(({text:r,valueDiffKey:a})=>({text:r,valueDiffKey:a}))}static resolveValidationRowChipDisplayText(e,n,t,r){return t===void 0?r:Mo(e,n,t)}static findValidationRowSourceKeyDiffForDisplayIndex(e,n,t){if(n)return Object.keys(n).find(r=>zi(r,e)===t)}static resolveValidationRowPartialSideEntries(e,n,t,r){return this.resolveCore(n,t,r,a=>this.findValidationRowSourceKeyDiffForDisplayIndex(n,t,a),(a,o,s)=>this.resolveValidationRowChipDisplayText(e,a,o,s),(a,o)=>a!==void 0?zi(a,n):this.resolveMergedTextIndex(n,o)).map(({text:a,valueDiffKey:o})=>({text:a,valueDiffKey:o}))}static takeValueDiffAtKey(e,n){if(n)return e==null?void 0:e[n]}}class Ve{static escapeStringDisplayValue(e){return JSON.stringify(e).slice(1,-1)}static formatListDisplayValue(e){return typeof e=="string"?e===""?this.EMPTY_STRING_DISPLAY_VALUE:this.escapeStringDisplayValue(e):typeof e=="object"&&e!==null?JSON.stringify(e,null,2):JSON.stringify(e)}static isEmptyStringDisplayValue(e){return e===this.EMPTY_STRING_DISPLAY_VALUE}}q(Ve,"EMPTY_STRING_DISPLAY_VALUE","<empty string>");class P{}q(P,"TitleRow",Pc),q(P,"MetaFlags",Hc),q(P,"RequiredStar",as),q(P,"NodeLevel",Ic),q(P,"Extensions",Oc),q(P,"Default",Lc),q(P,"Enum",jc),q(P,"Examples",Fc),q(P,"AllowedAdditionalPropertyNames",Jc),q(P,"ValidationRows",os),q(P,"ListSideEntries",gn),q(P,"Format",Ve),q(P,"TypeLabel",qc);function Ni(i){return i.kind===ne.ROOT}function Kc(i){return i.kind===ne.ADDITIONAL_PROPERTIES}function Qn(i){if(i.type!==fe.COMPLEX)return!1;const e=i.nestedNodes();return e.length===0?!1:Ni(i)?!0:e.every(n=>ar(n.kind))}function Gc(i){return ar(i)}function Bc(i){var e;return mi((e=kn(i.value()))==null?void 0:e.type)}function Uc(i,e){return mi(P.TypeLabel.resolveTypeSideValue(i,e))}function ss(i){var t;const n=(t=i.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!Gc(n)))return n}function ls(i,e,n){const t=n.get(i.id);if(t){const r=e.find(a=>a.id===t);if(r)return r}return e[0]}function Ti(i,e){const n=[];let t=i;for(;t&&Qn(t);){const r=t.nestedNodes(),a=ls(t,r,e);if(!a)break;const o=Vu(t);if(n.push({combinerNode:t,nestedNodes:r,selectedNestedNode:a,showSelector:o.showSelector,combinerKindLabel:ss(t)}),Qn(a)){t=a;continue}break}return n}function xi(i,e){let n=i;for(;Qn(n);){const t=n.nestedNodes(),r=ls(n,t,e);if(!r)break;n=r}return n}const Yc=new Map;function ds(i){return xi(i,Yc)}function us(i,e,n,t){const r=new Map(e);r.set(n,t);const a=new Set(Ti(i,r).map(o=>o.combinerNode.id));for(const o of r.keys())a.has(o)||r.delete(o);return r}function gr(i){var t;const e=i.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=i.meta())==null?void 0:t._fragment;return!M(n)||Kt(n)?null:n}function fs(i){if(i.type===fe.SIMPLE)return i.childrenNodes();const e=i.nestedNodes();return e.length>0&&e.every(n=>!ar(n.kind))?e:i.childrenNodes()}function bt(i){if(!Qn(i))return"";const e=ss(i);return e?` (${e})`:""}function cs(i,e,n=cn(gr(i),i.meta())+bt(i)){const t={title:n,node:i,testId:`json-schema-combiner-option-${e}`};if(!qe(i))return t;const r=P.NodeLevel.isWholePropertyAddOrRemove(i);return{...t,diffs:i.diffs,...r?{}:{diffsSummary:i.diffsSummary,descendantDiffsSummary:i.descendantDiffsSummary}}}function vt(i,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,r=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?i+1:i,0),afterLevel:Math.max(r?e+1:e,0)}}const Wc=new rs;function $c(i){return i!=null}function zc(i){return Object.keys(Or).some(e=>!!P.ValidationRows.takeDiff(i,e)||!!P.ValidationRows.takeColorizingDiff(i,e))}class Xc{resolveNodeVisibility(e,n){const t=e.value(),r=kn(t),a=Wc.resolveNodeVisibility(t,n),o=io(n),s=o&&(!!(r!=null&&r.description)||!!e.diffs.description),l=o&&(a.showEnumValuesRow||!!P.Enum.takeDiff(e)||!!P.Enum.takeValueDiffs(e)||!!P.Enum.takeRowColorizingDiff(e)),u=o&&($c(r==null?void 0:r.default)||!!P.Default.takeDiff(e)||!!P.Default.takeRowColorizingDiff(e)),c=o&&(a.showExamplesRow||!!P.Examples.takeDiff(e)||!!P.Examples.takeValueDiffs(e)||!!P.Examples.takeRowColorizingDiff(e)),f=o&&(ts(t).length>0||zc(e)),p=u||c||l||f||a.showExtensionsRow,y=s||a.showDeprecationReasonRow||p;return{...a,showDescription:s,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:l,showValidationsSection:f,showContentSection:y,showAnyAdditionalInfoRow:p}}resolveListLastRowFlags(e,n){return Si(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return Rc(e,n)}}const Qc=new Xc;function Ei(i,e){return Qc.resolveNodeVisibility(i,e)}const Zc="markdown-text-row__json-schema-description",em="markdown-text-row__json-schema-expander",nm=i=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:r}=i;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${r} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function tm(i,e,n){if(!e)return{resolvedValue:i,isInvisible:!1};const{data:t}=e,r=n===Q;return k(t)?r?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:i,isInvisible:!1}:E(t)?r?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:i,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:O(t)?{resolvedValue:r?typeof t.beforeValue=="string"?t.beforeValue:i:typeof t.afterValue=="string"?t.afterValue:i,isInvisible:!1}:{resolvedValue:i,isInvisible:!1}}function rm(i){switch(i){case W.body1:return"text-value-body1";case W.h1:case W.h2:case W.h3:case W.h4:case W.h5:case W.h6:return"text-value-body2";case W.body2:default:return"text-value-body2"}}function im(i,e){return i===Je.JsonSchemaDescription?{markdownClassName:Zc,expanderClassName:em}:{markdownClassName:["text-slate-700",rm(e)].join(" "),expanderClassName:`text-value-expander ${Ll(e)}`.trim()}}const ms=m.memo(i=>{const{value:e,variant:n=W.body2,usage:t,layoutSide:r,diff:a}=i,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>tm(e,a,r),[a,r,e]),c=m.useMemo(()=>o?l:Il(l),[o,l]),f=m.useMemo(()=>Ol(l),[l]),p=m.useMemo(()=>im(t,n),[t,n]),y=m.useMemo(()=>{if(!(a!=null&&a.data))return[];const D=r===Q?a.styles.before:a.styles.after,S=[];return D.textHighlighterColor&&S.push(ie.highlighter(D.textHighlighterColor)),S},[a,r]),g=m.useMemo(()=>["markdown",p.markdownClassName].filter(Boolean).join(" "),[p.markdownClassName]),v=m.useMemo(()=>({p:({children:D})=>d.jsx("p",{children:D})}),[]),h=m.useCallback(()=>{s(D=>!D)},[]);return u||!c?null:d.jsxs("div",{className:`markdown-text-row flex min-w-0 flex-col items-start gap-1 ${y.join(" ")}`,children:[d.jsx(Vd,{className:g,remarkPlugins:[Rd],components:v,children:c}),d.jsx(nm,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:p.expanderClassName})]})});ms.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const am={[Je.DdlApiProperty]:jl,[Je.JsonSchemaDescription]:zr},om={[Je.DdlApiProperty]:["min-h-[26px]"]};function sm(i){const e=am[i]??mt,n=om[i]??[];return[e,...n].join(" ")}function lm(i,e,n){return n===Je.DdlApiProperty?Jl.PropertyRow.isContentVisible(i,e):i!=null&&i.data?(e===Q?i.styles.before:i.styles.after).isContentVisible??!0:!0}const Lt=m.memo(i=>{const{value:e,variant:n=W.body2,layoutSide:t,usage:r=Je.Default,hideLevelIndicatorWhenSideEmpty:a=!1,diff:o}=i,{[le]:s}=i,l=Xr(t),u=r===Je.DdlApiProperty,c=u||r===Je.JsonSchemaDescription,f=m.useMemo(()=>lm(o,t,r),[o,t,r]),p=r===Je.JsonSchemaDescription&&l===0,y=c&&l>0&&(!a||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:D}=o,S=[];return t===Q&&S.push(ie.background(D.before.backgroundColor)),t===ae&&S.push(ie.background(D.after.backgroundColor)),S},[o,t]),v=m.useMemo(()=>sm(r),[r]),h=d.jsx(ms,{value:e,variant:n,usage:r,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||r===Je.JsonSchemaDescription?"items-stretch":"",v,...g].filter(Boolean).join(" "),children:[p&&d.jsx(Fl,{}),y&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(jn,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:h}):r===Je.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:h}):h]})});Lt.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Br=m.memo(i=>{const e=De(),{diffsSeverities:n,diffsSeverityPlacement:t=j.DescriptionRow}=i,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),a=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>ct(r==null?void 0:r.causedAt),[r]);switch(e){case Ee:return d.jsx(Jn,{diffType:a,diffTypeCause:o,hidden:!1,children:d.jsx(Mn,{left:d.jsx(Lt,{...i,layoutSide:Q}),right:d.jsx(Lt,{...i,layoutSide:ae})})});case tn:return d.jsx(Fn,{content:d.jsx(Lt,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Br.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function dm(i){return i?en({min:i.minimum,max:i.maximum,exclusiveMin:i.exclusiveMinimum,exclusiveMax:i.exclusiveMaximum}):{data:{},visible:!1}}const Hn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:_e.UNIQUE_ITEMS};function Cr(i,e,n,t){const r=en({min:i,max:e,exclusiveMin:n,exclusiveMax:t});return r.visible?[r.data.lower,r.data.upper].filter(a=>!!a):[]}function um(i){const e=dm(i);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function fm(i){if(!i)return[];const e=[],n=ns(i),t=Cr(n.minLength,n.maxLength);t.length&&e.push({key:Hn.VALUE_LENGTH,label:oi,values:t}),n.pattern!==void 0&&e.push({key:Hn.VALUE_PATTERN,label:si,values:[String(n.pattern)]});const r=um(n);r.length&&e.push({key:Hn.VALUE_RANGE,label:li,values:r}),n.multipleOf!==void 0&&e.push({key:Hn.VALUE_MULTIPLE_OF,label:di,values:[String(n.multipleOf)]});const a=Cr(n.minProperties,n.maxProperties);a.length&&e.push({key:Hn.PROPERTIES_COUNT,label:ui,values:a}),n.uniqueItems!==void 0&&e.push({key:Hn.UNIQUE_ITEMS,label:fi,values:[String(n.uniqueItems)]});const o=Cr(n.minItems,n.maxItems);return o.length&&e.push({key:Hn.ITEMS_COUNT,label:ci,values:o}),e}const la=[ye.VALUE_LENGTH,ye.VALUE_PATTERN,ye.VALUE_RANGE,ye.VALUE_MULTIPLE_OF,ye.PROPERTIES_COUNT,ye.UNIQUE_ITEMS,ye.ITEMS_COUNT];function cm(i){return[...i].sort((e,n)=>la.indexOf(e.key)-la.indexOf(n.key))}const ys=i=>{const{extensions:e,extensionsDiffs:n,extensionsRowColorizingDiff:t,diffsSeverities:r}=i,a=He(),o=a+1,s=Ie(),l=Gn(),u=et(),c=(u==null?void 0:u.beforeLevel)??a,f=(u==null?void 0:u.afterLevel)??a,{beforeLevel:p,afterLevel:y}=m.useMemo(()=>vt(c,f,t),[c,f,t]),g=!!n&&Object.keys(n).length>0,v=m.useMemo(()=>!g||!l?e:{...e,[l.diffsMetaKey]:n},[l,e,n,g]);return d.jsx(Me.Provider,{value:o,children:d.jsx(qn,{beforeLevel:p,afterLevel:y,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(rt,{title:"Extensions",usage:nn.JsonSchema,lastInvisible:!0,diff:t,diffsSeverities:r,diffsSeverityPlacement:j.ExtensionsRow}),l?d.jsx(gt,{mergedSource:v,initialLevel:o,displayMode:s,diffMetaKeys:l}):d.jsx(pt,{source:e,initialLevel:o})]})})})};ys.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""},extensionsDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>"}],raw:"Record<OpenApiExtensionKey, Diff<DiffType>>"}],raw:"Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>"},description:""},extensionsRowColorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Wn=m.memo(i=>{const{layoutSide:e,sideItems:n}=i;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,r)=>d.jsx(Kl,{isVisible:!0,value:t.text,usage:Gl.JsonSchemaValidation,textHighlighterColor:ao(t.diff,e),borderShadowColor:Bl(t.diff,e),isFontMuted:Ul(t.diff,e),isEmptyStringPlaceholder:P.Format.isEmptyStringDisplayValue(t.text)},`${t.text}-${r}`))}):null});Wn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const da={valueLength:oi,valuePattern:si,valueRange:li,valueMultipleOf:di,propertiesCount:ui,itemsCount:ci,uniqueItems:fi};function mm(i){return qe(i)&&(i.kind===ne.PROPERTY||i.kind===ne.ROOT)}const St=i=>{const{node:e,displayValue:n,isLastInList:t=!1}=i,r=Ie(),a=n??e.value(),o=kn(a),s=mm(e)?e:void 0,l=qe(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?Ei(s,r):ht(a,r),[r,n,s,a]),c=m.useMemo(()=>l?P.Enum.takeDiff(l):void 0,[l]),f=m.useMemo(()=>l?P.Enum.takeValueDiffs(l):void 0,[l]),p=m.useMemo(()=>l?P.Enum.takeRowColorizingDiff(l):void 0,[l]),y=m.useMemo(()=>l?P.Examples.takeDiff(l):void 0,[l]),g=m.useMemo(()=>l?P.Examples.takeValueDiffs(l):void 0,[l]),v=m.useMemo(()=>l?P.Examples.takeRowColorizingDiff(l):void 0,[l]),h=m.useMemo(()=>l?P.Default.takeDiff(l):void 0,[l]),D=m.useMemo(()=>l?P.Default.takeRowColorizingDiff(l):void 0,[l]),S=m.useMemo(()=>l?P.Extensions.takeDiffs(l):void 0,[l]),T=m.useMemo(()=>l?P.Extensions.takeRowColorizingDiff(l):void 0,[l]),b=yt(e,qe),x=m.useMemo(()=>de(b,{diffKey:"description",diffsSeverityPlacement:j.DescriptionRow}),[b]),C=m.useMemo(()=>{const I=fm(o);if(!l)return I;const K=new Set(I.map(X=>X.key)),Z=Object.keys(da).filter(X=>!K.has(X)).filter(X=>P.ValidationRows.hasSemanticDiffs(l,X)).map(X=>({key:X,label:da[X],values:[]}));return cm([...I,...Z])},[l,o]),A=m.useMemo(()=>{var Z;if(!Kc(e))return;const I=e.parent,K=kn((I==null?void 0:I.value())??null);return(Z=K==null?void 0:K.propertyNames)==null?void 0:Z.enum},[e]),R=m.useMemo(()=>l?P.AllowedAdditionalPropertyNames.takeDiff(l):void 0,[l]),H=m.useMemo(()=>l?P.AllowedAdditionalPropertyNames.takeValueDiffs(l):void 0,[l]),L=m.useMemo(()=>l?P.AllowedAdditionalPropertyNames.takeRowColorizingDiff(l):void 0,[l]),F=r===El&&!!(A!=null&&A.length),G=m.useCallback(I=>{const K=P.AllowedAdditionalPropertyNames.resolveSideEntries(A??[],R,H,I);return K.length===0?d.jsx(d.Fragment,{}):d.jsx(Wn,{layoutSide:I,sideItems:K.map(({text:Z,valueDiffKey:X})=>({text:Z,diff:P.ListSideEntries.takeValueDiffAtKey(H,X)}))})},[A,R,H]),Y=m.useCallback(I=>{const K=P.Enum.resolveSideEntries((o==null?void 0:o.enum)??[],c,f,I);return K.length===0?d.jsx(d.Fragment,{}):d.jsx(Wn,{layoutSide:I,sideItems:K.map(({text:Z,valueDiffKey:X})=>({text:Z,diff:P.ListSideEntries.takeValueDiffAtKey(f,X)}))})},[c,f,o==null?void 0:o.enum]),B=m.useCallback(I=>{const K=P.Examples.resolveSideEntries((o==null?void 0:o.examples)??[],y,g,I);return K.length===0?d.jsx(d.Fragment,{}):d.jsx(Wn,{layoutSide:I,sideItems:K.map(({text:Z,valueDiffKey:X})=>({text:Z,diff:P.ListSideEntries.takeValueDiffAtKey(g,X)}))})},[y,g,o==null?void 0:o.examples]),te=m.useCallback(I=>{const K=o==null?void 0:o.default,Z=P.Default.resolveSideEntries(K,h,I);return Z.length===0?d.jsx(d.Fragment,{}):d.jsx(Wn,{layoutSide:I,sideItems:Z.map(({text:X})=>({text:X,diff:h}))})},[h,o==null?void 0:o.default]),be=m.useCallback((I,K)=>Z=>{const X=l?P.ValidationRows.takeDiff(l,I):void 0,z=l?P.ValidationRows.takeValueDiffs(l,I):void 0,$=P.ValidationRows.resolveSideEntries(I,K,X,z,Z,I===ye.VALUE_RANGE&&l?{nodeValue:a,crawlDiffs:P.ValidationRows.takeValueRangeCrawlDiffs(l)??{}}:void 0);return $.length===0?d.jsx(d.Fragment,{}):d.jsx(Wn,{layoutSide:Z,sideItems:$.map(({text:ce,valueDiffKey:me})=>({text:ce,diff:P.ListSideEntries.takeValueDiffAtKey(z,me)}))})},[l,a]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(Br,{usage:Je.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||x.diff)&&d.jsx(Br,{usage:Je.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...x}),u.showDefaultRow&&d.jsx(it,{label:"Default",usage:at.JsonSchemaValidation,subheader:te,colorizingDiff:D,diffsSeverities:h||D?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:j.DefaultRow}),u.showExamplesRow&&d.jsx(it,{label:"Examples",usage:at.JsonSchemaValidation,subheader:B,diff:y,colorizingDiff:v,diffsSeverities:y||g||v?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:j.ExamplesRow}),u.showEnumValuesRow&&d.jsx(it,{label:"Allowed values",usage:at.JsonSchemaValidation,subheader:Y,diff:c,colorizingDiff:p,diffsSeverities:c||f||p?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:j.EnumRow,...Si(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),F&&d.jsx(it,{label:yo,usage:at.JsonSchemaValidation,subheader:G,diff:R,colorizingDiff:L,diffsSeverities:R||H||L?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:j.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&C.map(I=>{const K=I.key,Z=l?P.ValidationRows.takeDiff(l,K):void 0,X=l?P.ValidationRows.takeColorizingDiff(l,K):void 0;return d.jsx(it,{label:I.label,usage:at.JsonSchemaValidation,subheader:be(K,I.values),diff:Z,colorizingDiff:X,diffsSeverities:l&&P.ValidationRows.hasSemanticDiffs(l,K)?b==null?void 0:b.nodeDiffsSeverities:void 0,diffsSeverityPlacement:to[K]},I.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(ys,{extensions:o.extensions,extensionsDiffs:S,extensionsRowColorizingDiff:T,diffsSeverities:T?b==null?void 0:b.nodeDiffsSeverities:void 0})]})};St.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ki=i=>{const{requiredChanged:e,readOnly:n,readOnlyDiff:t,writeOnly:r,writeOnlyDiff:a,deprecated:o,deprecatedDiff:s,requiredDiff:l,layoutSide:u}=i,c=De(),f=!!n||!!t,p=!!r||!!a,y=!!o||!!s;return!e&&!f&&!p&&!y?null:d.jsxs("div",{className:"flex flex-row gap-2 justify-between",children:[e&&d.jsx(xt,{label:Md,layoutMode:c,layoutSide:u,diff:l==null?void 0:l.data}),f&&d.jsx(xt,{label:_d,colorSchema:Ji,layoutMode:c,layoutSide:u,diff:t==null?void 0:t.data}),p&&d.jsx(xt,{label:qd,colorSchema:Ji,layoutMode:c,layoutSide:u,diff:a==null?void 0:a.data}),y&&d.jsx(xt,{label:Pd,colorSchema:Hd,layoutMode:c,layoutSide:u,diff:s==null?void 0:s.data})]})};ki.__docgenInfo={description:"",methods:[],displayName:"TagsWithDiffs",props:{requiredChanged:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},readOnlyDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},writeOnly:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},writeOnlyDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},deprecatedDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},requiredDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function ym(i){const e=!!i.diffs[_],n=P.RequiredStar.takeMetaDiff(i);return{requiredChanged:!e&&!!n,requiredDiff:n,readOnlyDiff:P.MetaFlags.takeReadOnlyDiff(i),writeOnlyDiff:P.MetaFlags.takeWriteOnlyDiff(i),deprecatedDiff:P.MetaFlags.takeDeprecatedDiff(i)}}const gm="#64748B",gs="#94A3B8",pn=m.memo(i=>{const{text:e,color:n,className:t}=i,r=n===void 0?gm:n;return d.jsx("span",{className:"json-schema-type-value-text",style:r?{color:r}:void 0,children:t?d.jsx("span",{className:t,children:e}):e})});pn.__docgenInfo={description:"Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide\nwhether to render it at all.\n\n`className` (diff/highlighter classes) is applied to an INNER span, not the outer one, so it\nnever becomes a direct flex item of an ancestor `inline-flex` container (e.g.\n`.json-schema-type-value-segments`). A flex item's `display` is CSS-blockified - an `inline`\nbox becomes `block` - which makes `line-height` (not font metrics) determine the painted\nheight of a highlighter background, rendering it ~1px taller than legacy's equivalent\n(`NodeType.tsx`'s `.inline` divs, which stay genuinely inline because they're nested one level\nbelow their `inline-flex` ancestor). Keeping the highlighted element on a non-flex-item\ndescendant reproduces legacy's inline box-painting exactly.",methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const ps=m.memo(i=>{const{value:e,meta:n,suffix:t}=i;return d.jsxs(d.Fragment,{children:[d.jsx(pn,{text:cn(e,n)}),t&&d.jsx(pn,{text:t})]})});ps.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const Ur=m.memo(i=>{const{text:e,diff:n,layoutSide:t,color:r}=i,a=ao(n,t),o=Yl(n,t),s=[ie.highlighter(a),ie.background(o)].filter(Boolean).join(" ");return d.jsx(pn,{text:e,color:r,className:s||void 0})});Ur.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const pr=m.memo(i=>{const{display:e,layoutSide:n,color:t}=i;return e.kind===un.NO_DIFFS?d.jsx(pn,{text:e.text,color:t}):e.kind===un.WHOLE_DIFFS?d.jsx(Ur,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center",children:e.segments.map((r,a)=>d.jsx(Ur,{text:r.text,diff:r.diff,layoutSide:n,color:t},`${r.text}-${a}`))})});pr.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const hs=m.memo(i=>{const{node:e,meta:n,layoutSide:t,suffix:r}=i,a=P.TypeLabel.resolveSideDisplay(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(pr,{display:a,layoutSide:t}),r&&d.jsx(pn,{text:r})]})});hs.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const bs=i=>{const{value:e,meta:n,isCycle:t,layoutSide:r,showTypeLabel:a=!0,typeValueSuffix:o}=i;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[a&&d.jsx(ps,{value:e,meta:n,suffix:o}),t&&d.jsx(rr,{text:ii,children:d.jsx(ai,{})}),d.jsx(ki,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:r})]})},vs=i=>{const{meta:e,node:n,isCycle:t,layoutSide:r,showTypeLabel:a=!0,typeValueSuffix:o}=i,s=ym(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[a&&d.jsx(hs,{node:n,meta:e,layoutSide:r,suffix:o}),t&&d.jsx(rr,{text:ii,children:d.jsx(ai,{})}),d.jsx(ki,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:r,...s})]})};bs.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:'See JsonSchemaTitleRowTypeValue\'s `suffix` prop - combiner-kind suffix, e.g. " (anyOf)".'}}};vs.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const pm="Type: ";function hm(i){const{node:e,meta:n,headerRowTitle:t}=i,r=e.kind;return Ni(e)?{variant:"text",text:t??pm}:r===ne.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:kl}:{variant:"badge",text:"additional property",badgeKind:Nt}:r===ne.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:Nt}:r===ne.ITEMS?{variant:"badge",text:"item",badgeKind:Nt}:r===ne.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:Nt}:r===ne.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function bm(i,e){const n=(e==null?void 0:e._fragment)??i.value();return i.kind===ne.ADDITIONAL_PROPERTIES&&n===!1}const Ss=i=>{const{required:e,requiredDiff:n,layoutSide:t}=i,r=De(),{isDocumentLayoutMode:a,isSideBySideDiffsLayoutMode:o}=$a(r);return a?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!(o?P.RequiredStar.isVisibleOnSide(e,n,t):e)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};Ss.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ds="text-xs text-black font-Inter-Medium",ws=i=>{const{display:e,required:n=!1}=i;switch(e.variant){case"badge":return d.jsx(Qa,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${Ds}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},Ns=i=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:r}=i;switch(e.variant){case"badge":return d.jsx(Qa,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${Ds}`,children:[e.text,d.jsx(Ss,{required:n,requiredDiff:t,layoutSide:r})]})}};ws.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};Ns.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function vm(i){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=i,u=Lo(),c=e.meta(),f=kn(t??n.value()),p=n.meta(),y=m.useMemo(()=>Si(a,r),[r,a]),g=m.useMemo(()=>hm({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),v=m.useMemo(()=>D=>{const S=oo(l);return(S?so(S,D):Wl(l,D))?s?d.jsx(Ns,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:D}):d.jsx(ws,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,l,s]),h=m.useMemo(()=>!bm(n,p),[p,n]);return{displayValueResolved:f,displayMeta:p,listLastRowFlags:y,titleContent:v,showTypeSubheader:h}}const Ai=i=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:p,[le]:y}=i,{displayValueResolved:g,displayMeta:v,listLastRowFlags:h,titleContent:D,showTypeSubheader:S}=vm({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(he,{...h,"data-precededby":y,titleContent:D,expandable:o,expanded:s,isRoot:Ni(e),onClickExpander:o?l:void 0,variant:W.body2,subheader:T=>p({layoutSide:T,displayValueResolved:g,displayMeta:v,displayNode:n,showTypeSubheader:S}),usage:Zt.JsonSchemaProperty,...u})};Ai.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Ci=i=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,typeValueSuffix:u,...c}=i;return d.jsx(Ai,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:f,displayValueResolved:p,displayMeta:y,displayNode:g,showTypeSubheader:v})=>d.jsx(bs,{value:p,meta:y,isCycle:g.isCycle,layoutSide:f,showTypeLabel:v,typeValueSuffix:u})})};Ci.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const Ts=m.memo(i=>{const{node:e}=i,n=ds(e),t=cn(gr(n),n.meta())+bt(e);return d.jsx(pn,{text:t,color:null})});Ts.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const ua=new Set;function hr(i){const{options:e,selectedOption:n,onSelectOption:t,variant:r,layoutSide:a=ae}=i;return e.length===0?null:d.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=Sm({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:a});if(l)return null;const u=s.join(" "),c=typeof o.title=="function"?o.title(a):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${r} ${n===o?"selected":""} ${u}`,onClick:f=>{f.preventDefault(),f.stopPropagation(),t(o)},children:c},o.node.id)})})}function Sm(i){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:r}=i,a=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[_];if(s){const{styles:l}=s;switch(r){case Q:s.inherited||a.push(ie.borderShadow(l.before.borderShadowColor)),o=s.data.action===J.add;break;case ae:s.inherited||a.push(ie.borderShadow(l.after.borderShadowColor)),o=s.data.action===J.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??ua,u=t??ua,c=new Set([...l,...u]),f=Al(c);a.push(f?ie.roundMarker(f):"")}}return{diffsRelatedClassesList:a,isInvisible:o}}hr.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var br=(i=>(i.Primary="primary",i.Secondary="secondary",i))(br||{});function Dm(i,e){if(!i)return"";const n=e===Q?i.styles.before.backgroundColor:i.styles.after.backgroundColor;return ie.background(n)}const wm=m.memo(i=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:r,layoutSide:a,levelReductionAction:o}=i,s=Xr(a),l=m.useMemo(()=>is(s,a,o),[s,a,o]),u=m.useMemo(()=>Dm(r,a),[a,r]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${zr} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(jn,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(hr,{options:e,selectedOption:n,onSelectOption:t,variant:br.Secondary,layoutSide:a})})]})}),Vr=m.memo(i=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=i;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(dt,{title:e,usage:nn.JsonSchema,lastInvisible:!0,layoutSide:i.layoutSide,diff:t,levelReductionAction:i.levelReductionAction}),n&&d.jsx(wm,{...i})]})}),Vi=m.memo(i=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=i,r=De(),a=m.useMemo(()=>t==null?void 0:t[j.TitleRow],[t]),o=m.useMemo(()=>a==null?void 0:a.type,[a]),s=m.useMemo(()=>ct(a==null?void 0:a.causedAt),[a]);if(!n&&!e)return null;switch(r){case Ee:return d.jsx(Jn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Mn,{left:d.jsx(Vr,{...i,layoutSide:Q}),right:d.jsx(Vr,{...i,layoutSide:ae})})});case tn:return d.jsx(Fn,{content:d.jsx(Vr,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",r,") is not supported."]})});Vi.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};const xs=i=>{const{node:e,isLastInList:n=!1,[le]:t}=i,r=Ie(),a=He(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=yr(),u=e.nestedNodes(),[c,f]=m.useState(()=>new Map),p=m.useMemo(()=>Ti(e,c),[e,c]),y=m.useMemo(()=>xi(e,c),[e,c]),g=m.useMemo(()=>gr(y),[y]),v=m.useMemo(()=>ht(g,r),[g,r]),h=m.useMemo(()=>fs(y),[y,l]),D=m.useMemo(()=>h.length>0,[h.length]),S=m.useMemo(()=>e.isCycle||h.length===0?!1:mr(y,{expandedDepth:o,level:a}),[e.isCycle,y,o,h.length,a]),T=m.useMemo(()=>Pe(y,S),[y,S,l]),[b,x]=m.useState(T),C=m.useRef(y.id);m.useEffect(()=>{if(C.current!==y.id){C.current=y.id,x(Pe(y,S));return}x(I=>Pe(y,I))},[y,S,l]);const A=m.useCallback(()=>{x(I=>{const K=!I;return K&&s(y),Pe(y,K)})},[y,s]),R=m.useMemo(()=>cn(g,y.meta()),[y,g]),H=m.useMemo(()=>bt(e),[e]),L=et(),F=(L==null?void 0:L.beforeLevel)??a,G=(L==null?void 0:L.afterLevel)??a,{beforeLevel:Y,afterLevel:B}=m.useMemo(()=>vt(F,G,void 0),[F,G]),te=m.useCallback((I,K)=>{f(Z=>us(e,Z,I.id,K.node.id))},[e]);if(u.length===0)return null;const be=b&&h.length>0;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Ci,{"data-precededby":t,ownerNode:e,displayNode:y,displayValue:g,contentVisibility:v,isLastInList:n&&!v.showContentSection&&!D,expandable:D,expanded:b,typeValueSuffix:H,onClickExpander:A}),d.jsx(St,{node:y,displayValue:g,isLastInList:n&&!D&&p.every(I=>!I.showSelector)}),d.jsx(Me.Provider,{value:a+1,children:d.jsxs(qn,{beforeLevel:Y,afterLevel:B,children:[p.map(I=>{const K=I.nestedNodes.map((X,z)=>cs(X,z,()=>d.jsx(Ts,{node:X}))),Z=K.find(X=>X.node.id===I.selectedNestedNode.id)??K[0]??null;return d.jsx(Vi,{combinerKindLabel:I.combinerKindLabel,showSelector:I.showSelector,options:K,selectedOption:Z,onSelectOption:X=>te(I.combinerNode,X)},I.combinerNode.id)}),be&&d.jsxs(d.Fragment,{children:[d.jsx(rt,{title:R,usage:nn.JsonSchema,lastInvisible:!0}),h.map((I,K)=>d.jsx(vr,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:I,isLastInList:K===h.length-1},I.id))]})]})})]})};xs.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Es=m.memo(i=>{const{node:e}=i;return Bc(e)?null:d.jsx(pn,{text:cn(e.value(),e.meta()),color:gs})});Es.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const ks=i=>{const{node:e,isLastInList:n=!1,[le]:t}=i,r=Ie(),a=He(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=yr(),u=m.useMemo(()=>ht(e.value(),r),[r,e]),c=m.useMemo(()=>e.childrenNodes(),[e,l]),f=m.useMemo(()=>Di(e),[e,l]),p=m.useMemo(()=>mr(e,{expandedDepth:o,level:a}),[o,a,e]),y=m.useMemo(()=>Pe(e,p),[p,e,l]),[g,v]=m.useState(y);m.useEffect(()=>{v(R=>Pe(e,R))},[e,l]);const h=m.useCallback(()=>{v(R=>{const H=!R;return H&&s(e),Pe(e,H)})},[s,e]),D=!f||g,S=m.useCallback(()=>d.jsx(Es,{node:e}),[e]),T=et(),b=(T==null?void 0:T.beforeLevel)??a,x=(T==null?void 0:T.afterLevel)??a,{beforeLevel:C,afterLevel:A}=m.useMemo(()=>vt(b,x,void 0),[b,x]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[d.jsx(Ci,{"data-precededby":t,ownerNode:e,contentVisibility:u,isLastInList:n,expandable:f,expanded:g,onClickExpander:h}),D&&d.jsxs(d.Fragment,{children:[d.jsx(St,{node:e,isLastInList:n&&c.length===0}),c.length>0&&d.jsx(Me.Provider,{value:a+1,children:d.jsxs(qn,{beforeLevel:C,afterLevel:A,children:[d.jsx(rt,{title:S,usage:nn.JsonSchema,lastInvisible:!0}),c.map((R,H)=>d.jsx(vr,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:R,isLastInList:H===c.length-1},R.id))]})})]})]})};ks.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vr=i=>{const{node:e}=i;return Qn(e)?d.jsx(xs,{...i}):d.jsx(ks,{...i})};vr.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Nm=m.memo(i=>i.schema===null||i.schema===void 0?null:d.jsx(An,{fallback:d.jsx(Cn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(Tm,{...i})})),Tm=i=>{const{schema:e,expandedDepth:n=Wt,displayMode:t=Rn,devMode:r=!1,initialLevel:a=0,customizationOptions:o}=i,s=m.useMemo(()=>rn(r),[r]),l=m.useMemo(()=>new To({source:e,materializeDepth:n-a+1,logger:s}),[e,n,a,s]),u=m.useMemo(()=>l.build(),[l]),[c,f]=m.useReducer(v=>v+1,0),p=m.useCallback(v=>{l.materializeChildren(v),f()},[l]),y=m.useMemo(()=>({expandedDepth:n,materializeChildren:p,treeRevision:c}),[n,p,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(wi.Provider,{value:y,children:d.jsx(lr.Provider,{value:o,children:d.jsx(Vn.Provider,{value:t,children:d.jsx(Ln.Provider,{value:tn,children:d.jsx(Me.Provider,{value:a,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(vr,{node:g})})})})})})}):null};Nm.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};function As(i,e){return i.isCycle?!1:Di(i)?e.hideUnchangedNodes?e.isRoot||i.kind===ne.ROOT?!0:_o(i):e.level<e.expandedDepth:!0}const Rr={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}};class fa{static buildCombinerSyntheticReplaceDiff(e){return e&&O(e.data)?{...e,styles:Rr}:{data:{type:Ya,action:J.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:Rr,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke}}static buildNodeDiffsSeverityFromChangedProperty(e){const n=e.data,t={type:n.type,causedAt:[]};return E(n)||O(n)?t.causedAt=n.beforeDeclarationPaths[0]??[]:k(n)&&(t.causedAt=n.afterDeclarationPaths[0]??[]),t}static buildNodeDiffsSeverityFromDiff(e){return this.buildNodeDiffsSeverityFromChangedProperty({data:e,styles:Rr,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ke})}static collectChangedPropertyMetaData(e,n){if(!(!e||typeof e!="object")){if($r(e)){n.push(e);return}for(const t of Object.values(e))this.collectChangedPropertyMetaData(t,n)}}static maxNodeDiffsSeverity(...e){let n;for(const t of e)t&&(!n||ge.compareDiffTypes(t.type,n.type)>0)&&(n=t);return n}static resolveUniformNestedNodesAction(e){const n=e.nestedNodes();if(n.length===0)return;let t;for(const r of n){if(!qe(r))return;const a=r.diffs[_],o=a&&k(a.data)?J.add:a&&E(a.data)?J.remove:void 0;if(!o)return;if(!t){t=o;continue}if(t!==o)return}return t}static resolveCombinerSelectorLevelReductionAction(e){if(qe(e)&&!P.NodeLevel.isWholePropertyAddOrRemove(e))return this.resolveUniformNestedNodesAction(e)}static nestedNodeHasDiffSignals(e){return e.diffsSummary.size>0||e.descendantDiffsSummary.size>0||Object.keys(e.diffs).length>0||Object.keys(e.descendantDiffs).length>0}static hasCombinerOwnerChanges(e){return qe(e)?e.diffsSummary.size>0||Object.keys(e.descendantDiffs).length>0||e.descendantDiffsSummary.size>0?!0:e.nestedNodes().some(n=>qe(n)&&this.nestedNodeHasDiffSignals(n)):!1}static buildCombinerSelectorRowDiff(e){if(!(!qe(e)||!this.hasCombinerOwnerChanges(e)))return this.buildCombinerSyntheticReplaceDiff(e.diffs[_])}static buildCombinerSelectorRowDiffsSeverities(e){if(!qe(e)||!this.hasCombinerOwnerChanges(e))return;const n=[];for(const s of Object.values(e.diffsSeverities))s&&n.push(s);for(const s of Object.values(e.descendantDiffs))s&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));for(const s of e.nestedNodes()){if(!qe(s))continue;for(const c of Object.values(s.diffsSeverities))c&&n.push(c);const l=[];for(const c of Object.values(s.diffs))this.collectChangedPropertyMetaData(c,l);for(const c of l)n.push(this.buildNodeDiffsSeverityFromChangedProperty(c));const u=this.maxDiffType([...s.diffsSummary,...s.descendantDiffsSummary]);u&&n.push({type:u,causedAt:[]})}const t=e.diffs[_];t&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(t));const r=[];for(const s of Object.values(e.diffs))this.collectChangedPropertyMetaData(s,r);for(const s of r)n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));const a=this.maxDiffType([...e.diffsSummary,...e.descendantDiffsSummary]);a&&n.push({type:a,causedAt:[]});const o=this.maxNodeDiffsSeverity(...n);if(!o){const s=this.buildCombinerSyntheticReplaceDiff(t);return{[j.TitleRow]:this.buildNodeDiffsSeverityFromDiff(s.data)}}return{[j.TitleRow]:o}}static maxDiffType(e){let n;for(const t of e)(!n||ge.compareDiffTypes(t,n)>0)&&(n=t);return n}static resolveCombinerSelectorRowPresentation(e){if(qe(e)){const n=P.NodeLevel.takeNestingIndicatorRowColorizingDiff(e);if(n){const t=e.diffsSeverities[j.NestingIndicatorRow];return{selectorRowDiff:n,diffsSeverities:t?{[j.TitleRow]:t}:void 0}}}return{selectorRowDiff:this.buildCombinerSelectorRowDiff(e),diffsSeverities:this.buildCombinerSelectorRowDiffsSeverities(e)}}}const Cs="show-all",xm="show-only-changed-nodes";function Em(i){return i?xm:Cs}function km(i){return i!==Cs}const Ri=m.createContext(null);function Am(){const i=m.useContext(Ri);if(!i)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return i}function Vs(){return m.useContext(Ri)}function Cm(i){const[e,n]=m.useState(()=>new Set),t=m.useCallback(r=>{n(a=>{if(a.has(r))return a;const o=new Set(a);return o.add(r),o})},[]);return m.useMemo(()=>({mode:i,hideUnchangedNodes:km(i),revealedBlockIds:e,revealBlock:t}),[i,e,t])}const Rs=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));Rs.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function ca(i){return i===1?"Show 1 unchanged node":`Show ${i} unchanged nodes`}const jt=m.memo(i=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:r,level:a,[le]:o}=i,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":r,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[a>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(jn,{level:a}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(Cl,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(rr,{text:ca(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":ca(n),onClick:s,children:d.jsx(Rs,{})})})})]})});jt.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ms=m.memo(i=>{const e=De(),n=He();switch(e){case Ee:return d.jsx(Mn,{left:d.jsx(jt,{...i,layoutSide:"before",level:n}),right:d.jsx(jt,{...i,layoutSide:"after",level:n})});case tn:return d.jsx(Fn,{content:d.jsx(jt,{...i,layoutSide:"after",level:n})});default:return null}});Ms.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Mi=i=>{const{children:e}=i,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:r}=Am(),a=lo(),o=m.useMemo(()=>a?new Set(a):void 0,[a]),{visibleSequence:s}=m.useMemo(()=>mf(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:s.map((l,u)=>{const c=u===s.length-1;return l.kind==="placeholder"?t.has(l.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(l.sourceIndex,l.sourceIndex+l.blockSize).map((f,p)=>d.jsx(Zn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&p===l.blockSize-1},f.id))},l.unchangedBlockId):d.jsx(Ms,{unchangedBlockId:l.unchangedBlockId,count:l.blockSize,onReveal:r},l.unchangedBlockId):d.jsx(Zn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:l.node,isLastInList:c},l.node.id)})})};Mi.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};function Vm(i){return de(mn(i),{resolveDiff:()=>P.TitleRow.takeDiff(i)})}const _i=i=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,typeValueSuffix:c,...f}=i,p=m.useMemo(()=>u??Vm(n),[n,u]),y=m.useMemo(()=>P.RequiredStar.takeMetaDiffForDisplay(e),[e]),g=De(),v=m.useMemo(()=>P.NodeLevel.takeNodeChangesSummary(n),[n]),h=!s&&o&&g===Ee&&!!v&&v.size>0;return d.jsx(Ai,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:p,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:D,displayMeta:S,displayNode:T,showTypeSubheader:b})=>so(oo(p.diff),D)?d.jsxs(d.Fragment,{children:[d.jsx(vs,{meta:S,node:n,isCycle:T.isCycle,layoutSide:D,showTypeLabel:b,typeValueSuffix:c}),h&&d.jsx(ri,{values:Array.from(v)})]}):d.jsx(d.Fragment,{})})};_i.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const _s=m.memo(i=>{const{node:e,layoutSide:n}=i,t=ds(e),r=P.TypeLabel.resolveSideDisplay(t,t.meta(),n),a=bt(e);return d.jsxs(d.Fragment,{children:[d.jsx(pr,{display:r,layoutSide:n,color:null}),a&&d.jsx(pn,{text:a,color:null})]})});_s.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Rm(i){return i.kind===ne.PROPERTY}const qs=i=>{const{node:e,isLastInList:n=!1,[le]:t}=i,r=Ie(),a=He(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=yr(),u=Vs(),c=e.nestedNodes(),[f,p]=m.useState(()=>new Map),y=m.useMemo(()=>Ti(e,f),[e,f]),g=m.useMemo(()=>xi(e,f),[e,f]),v=m.useMemo(()=>gr(g),[g]),h=Rm(g)?g:void 0,D=m.useMemo(()=>h?Ei(h,r):ht(v,r),[v,h,r]),S=m.useMemo(()=>fs(g),[g,l]),T=m.useMemo(()=>S.length>0,[S.length]),b=m.useMemo(()=>e.isCycle||S.length===0?!1:u!=null&&u.hideUnchangedNodes?As(g,{expandedDepth:o,level:a,hideUnchangedNodes:!0}):mr(g,{expandedDepth:o,level:a}),[e.isCycle,g,u==null?void 0:u.hideUnchangedNodes,o,S.length,a]),x=m.useMemo(()=>Pe(g,b),[g,b,l]),[C,A]=m.useState(x),R=m.useRef(g.id);m.useEffect(()=>{if(R.current!==g.id){R.current=g.id,A(Pe(g,b));return}A($=>Pe(g,$))},[g,b,l]);const H=m.useCallback(()=>{A($=>{const ce=!$;return ce&&s(g),Pe(g,ce)})},[g,s]),L=m.useMemo(()=>cn(v,g.meta()),[g,v]),F=m.useMemo(()=>bt(e),[e]),G=m.useMemo(()=>P.NodeLevel.takeNestingIndicatorRowColorizingDiff(g),[g]),Y=et(),B=(Y==null?void 0:Y.beforeLevel)??a,te=(Y==null?void 0:Y.afterLevel)??a,be=m.useMemo(()=>P.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),{beforeLevel:I,afterLevel:K}=m.useMemo(()=>vt(B,te,be),[B,te,be]),Z=m.useCallback(($,ce)=>{p(me=>us(e,me,$.id,ce.node.id))},[e]);if(c.length===0)return null;const X=C&&S.length>0,z=!!u;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(_i,{"data-precededby":t,ownerNode:e,displayNode:g,displayValue:v,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!T,expandable:T,expanded:C,onClickExpander:H,typeValueSuffix:F}),d.jsx(St,{node:g,displayValue:v,isLastInList:n&&!T&&y.every($=>!$.showSelector)}),d.jsx(Me.Provider,{value:a+1,children:d.jsxs(qn,{beforeLevel:I,afterLevel:K,children:[y.map($=>{const ce=$.nestedNodes.map((ke,Bn)=>cs(ke,Bn,Un=>d.jsx(_s,{node:ke,layoutSide:Un}))),me=ce.find(ke=>ke.node.id===$.selectedNestedNode.id)??ce[0]??null,We=fa.resolveCombinerSelectorRowPresentation($.combinerNode),on=fa.resolveCombinerSelectorLevelReductionAction($.combinerNode);return d.jsx(Vi,{combinerKindLabel:$.combinerKindLabel,showSelector:$.showSelector,options:ce,selectedOption:me,onSelectOption:ke=>Z($.combinerNode,ke),selectorRowDiff:We.selectorRowDiff,diffsSeverities:We.diffsSeverities,levelReductionAction:on},$.combinerNode.id)}),X&&d.jsxs(d.Fragment,{children:[d.jsx(rt,{title:L,usage:nn.JsonSchema,lastInvisible:!0,diff:G,diffsSeverities:g.diffsSeverities,diffsSeverityPlacement:j.NestingIndicatorRow}),z?d.jsx(Mi,{children:S}):S.map(($,ce)=>d.jsx(Zn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:$,isLastInList:ce===S.length-1},$.id))]})]})})]})};qs.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ps=m.memo(i=>{const{node:e,meta:n,layoutSide:t}=i;if(Uc(e,t))return null;const r=P.TypeLabel.resolveSideDisplay(e,n,t);return d.jsx(pr,{display:r,layoutSide:t,color:gs})});Ps.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Mm(i){return i.kind===ne.PROPERTY}const Hs=i=>{const{node:e,isLastInList:n=!1,[le]:t}=i,r=Ie(),a=He(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=yr(),u=Mm(e)?e:void 0,c=Vs(),f=m.useMemo(()=>u?Ei(u,r):ht(e.value(),r),[r,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,l]),y=m.useMemo(()=>Di(e),[e,l]),g=m.useMemo(()=>c!=null&&c.hideUnchangedNodes?As(e,{expandedDepth:o,level:a,hideUnchangedNodes:!0,isRoot:e.kind===ne.ROOT}):mr(e,{expandedDepth:o,level:a}),[o,a,e,c==null?void 0:c.hideUnchangedNodes]),v=m.useMemo(()=>Pe(e,g),[g,e,l]),[h,D]=m.useState(v);m.useEffect(()=>{D(F=>Pe(e,F))},[e,l]);const S=m.useCallback(()=>{D(F=>{const G=!F;return G&&s(e),Pe(e,G)})},[s,e]),T=!y||h,b=m.useCallback(F=>d.jsx(Ps,{node:e,meta:e.meta(),layoutSide:F}),[e]),x=m.useMemo(()=>P.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),C=et(),A=(C==null?void 0:C.beforeLevel)??a,R=(C==null?void 0:C.afterLevel)??a,{beforeLevel:H,afterLevel:L}=m.useMemo(()=>vt(A,R,x),[A,R,x]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[d.jsx(_i,{"data-precededby":t,ownerNode:e,contentVisibility:f,isLastInList:n,expandable:y,expanded:h,onClickExpander:S}),T&&d.jsxs(d.Fragment,{children:[d.jsx(St,{node:e,isLastInList:n&&p.length===0}),p.length>0&&d.jsx(Me.Provider,{value:a+1,children:d.jsxs(qn,{beforeLevel:H,afterLevel:L,children:[d.jsx(rt,{title:b,usage:nn.JsonSchema,lastInvisible:!0,diff:x,diffsSeverities:e.diffsSeverities,diffsSeverityPlacement:j.NestingIndicatorRow}),c?d.jsx(Mi,{children:p}):p.map((F,G)=>d.jsx(Zn,{"data-precededby":V.JSON_SCHEMA_PROPERTY,node:F,isLastInList:G===p.length-1},F.id))]})})]})]})};Hs.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Zn=i=>{const{node:e}=i;return Qn(e)?d.jsx(qs,{...i}):d.jsx(Hs,{...i})};Zn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const _m=m.memo(i=>i.schema===null||i.schema===void 0?null:d.jsx(An,{fallback:d.jsx(Cn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(qm,{...i})})),qm=i=>{const{schema:e,expandedDepth:n=Wt,displayMode:t=Rn,devMode:r=!1,initialLevel:a=0,customizationOptions:o,diffMetaKeys:s,diffTypes:l,hideUnchangedNodes:u=!0}=i,c=m.useMemo(()=>Em(u),[u]),f=Cm(c),p=m.useMemo(()=>rn(r),[r]),y=m.useMemo(()=>new uf({source:e,materializeDepth:n-a+1,diffsMetaKeys:s,logger:p}),[e,n,a,s,p]),g=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",g);const[v,h]=m.useReducer(b=>b+1,0),D=m.useCallback(b=>{y.materializeChildren(b),h()},[y]),S=m.useMemo(()=>({expandedDepth:n,materializeChildren:D,treeRevision:v}),[n,D,v]),T=g.root;return T?d.jsx(er.Provider,{value:s,children:d.jsx(ni.Provider,{value:l,children:d.jsx(Ri.Provider,{value:f,children:d.jsx(wi.Provider,{value:S,children:d.jsx(lr.Provider,{value:o,children:d.jsx(Vn.Provider,{value:t,children:d.jsx(Ln.Provider,{value:Ee,children:d.jsx(Me.Provider,{value:a,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Zn,{node:T})})})})})})})})})}):null};_m.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.'}}};var Ut=(i=>(i.PRIMARY="primary",i.SECONDARY="secondary",i))(Ut||{});const Dt=i=>{const{node:e,variant:n=Ut.PRIMARY,[le]:t}=i,r=Ie(),a=Gn(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(Er).map((b,x)=>{var R;const C=((R=b.value())==null?void 0:R.protocol)??"",A=`binding-${x}`;return kr(b)?{title:C,node:b,testId:A,diffs:b.diffs,diffsSummary:b.diffsSummary,descendantDiffs:b.descendantDiffs,descendantDiffsSummary:b.descendantDiffsSummary,diffsSeverities:b.diffsSeverities}:{title:C,node:b,testId:A}}),[c]),p=l!=null&&l.node&&Er(l.node)?l.node:null,y=p==null?void 0:p.value(),{version:g="latest",binding:v=null}=y??{};m.useEffect(()=>{f.length>0&&l===null&&u(f[0])},[f,l]);const h=m.useCallback(b=>s?d.jsx(d.Fragment,{}):d.jsx(hr,{options:f,selectedOption:l,onSelectOption:u,variant:br.Secondary,layoutSide:b}),[f,s,l]),D=m.useMemo(()=>{if(Vf(e)){const b=mn(e);return de(b)}return{}},[e]),S=m.useMemo(()=>{if(p&&kr(p)){const b=mn(p);return de(b,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:j.BindingVersionRow})}return{}},[p]),T=m.useMemo(()=>{if(!p)return null;if(kr(p)&&a){const b=p.diffs[_],x=Pm(v,b,a);return d.jsx(gt,{"data-precededby":V.BINDING_VERSION_ROW,mergedSource:x,displayMode:r,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:a})}return Er(p)?d.jsx(pt,{"data-precededby":V.BINDING_VERSION_ROW,source:v,displayMode:r,initialLevel:1,supportJsonSchema:!0}):null},[p,v,r,a]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Ut.PRIMARY?W.h3:W.h5,subheader:h,...D}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(yn,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:W.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...S}),T]})]})};function Pm(i,e,n){if(!i)return null;const t=e==null?void 0:e.data;if(!t)return i;const{diffsMetaKey:r}=n;return{...i,[r]:Object.keys(i).reduce((o,s)=>{if(o[s]=t,k(t)){const l=i[s];o[s]={...t,afterValue:l}}if(E(t)){const l=i[s];o[s]={...t,beforeValue:l}}return o},{})}}Dt.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const Sr=i=>{const{node:e,[le]:n}=i,t=Gn(),r=e.value(),a=(r==null?void 0:r.rawValues)??{},o=m.useMemo(()=>{var s;if(Rf(e)){const l=mn(e);return{...de(l),highlightingMode:(s=e.diffs[_])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:"Extensions",expandable:!1,variant:W.h3,usage:Zt.AsyncApiJsoSection,...o}),t?d.jsx(gt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:a,initialLevel:1,diffMetaKeys:t}):d.jsx(pt,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:a,initialLevel:1})]})};Sr.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Is="Address Parameters",Os=i=>{const{node:e,[le]:n}=i,t=Ie();if(_f(e))return d.jsx(Hm,{"data-precededby":n,node:e});const r=e.value(),a=(r==null?void 0:r.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:Is,expandable:!1,variant:W.h3}),d.jsx(ur,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:a,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},Hm=i=>{const{node:e,[le]:n}=i,t=Ie(),r=De(),a=e.value(),o=a==null?void 0:a.rawValues,s=Gn(),l=m.useMemo(()=>{const c=mn(e);return de(c)},[e]),u=m.useMemo(()=>Im(o,e.diffs[_],s),[o,s,e.diffs]);return!s||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(he,{"data-precededby":n,value:Is,expandable:!1,variant:W.h3,...l}),d.jsx(cr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:r,metaKeys:s,overriddenKind:"parameters"})]})};function Im(i,e,n){if(!i||!e||!n)return i;const t=e.data,{diffsMetaKey:r}=n;return{...i,[r]:Object.keys(i).reduce((o,s)=>{if(o[s]=t,k(t)){const l=i[s];o[s]={...t,afterValue:l}}if(E(t)){const l=i[s];o[s]={...t,beforeValue:l}}return o},{})}}Os.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const Ls=m.memo(i=>{const{renderAddress:e}=i,{diff:n,descendantDiffs:t,diffsSeverities:r}=i,a=m.useMemo(()=>r==null?void 0:r["server-address-row"],[r]),o=m.useMemo(()=>a==null?void 0:a.type,[a]),s=m.useMemo(()=>ct(a==null?void 0:a.causedAt),[a]);switch(De()){case Ee:return d.jsx(Jn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(Mn,{left:e(Q),right:e(ae)})});case tn:return d.jsx(Fn,{content:e(ae)})}return null});Ls.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const js=m.memo(i=>{const{node:e,[le]:n}=i,t=m.useMemo(()=>e.value(),[e]),a=e.childrenNodes().find(or),o=yt(e,Ct),{nodeDiffs:s}=o,l=m.useMemo(()=>de(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>de(o,{diffKey:"description",diffsSeverityPlacement:j.DescriptionRow}),[o]),c=m.useMemo(()=>de(o,{diffKey:"summary",diffsSeverityPlacement:j.SummaryRow}),[o]),f=m.useMemo(()=>de(o,{resolveDiff:(S,T)=>{const b=ge.maxChangedPropertyMetaDataByDiffType(T("protocol"),T("host"));return S[_]??b}}),[o]),p=m.useCallback(S=>{var H;if(!t)return null;if(!Ct(e))return d.jsx(d.Fragment,{children:t.protocol});const T=(H=e.diffs)==null?void 0:H.protocol;if(!T)return d.jsx(d.Fragment,{children:t.protocol});const b=new Set,{data:x,styles:C}=T;let A=t.protocol,R=!1;return S===Q&&(b.add(ie.highlighter(C.before.textHighlighterColor)),E(x)||O(x)?A=x.beforeValue:fn(x)&&(A=x.beforeKey),k(x)&&(R=!0)),S===ae&&(b.add(ie.highlighter(C.after.textHighlighterColor)),k(x)||O(x)?A=x.afterValue:fn(x)&&(A=x.afterKey),E(x)&&(R=!0)),R?null:d.jsx("span",{className:Array.from(b).join(" "),children:A})},[e,t]),y=m.useCallback(S=>{var H;if(!t)return null;if(!Ct(e))return d.jsx(d.Fragment,{children:t.host});const T=(H=e.diffs)==null?void 0:H.host;if(!T)return d.jsx(d.Fragment,{children:t.host});const b=new Set,{data:x,styles:C}=T;let A=t.host,R=!1;return S===Q&&(b.add(ie.highlighter(C.before.textHighlighterColor)),E(x)||O(x)?A=x.beforeValue:fn(x)&&(A=x.beforeKey),k(x)&&(R=!0)),S===ae&&(b.add(ie.highlighter(C.after.textHighlighterColor)),k(x)||O(x)?A=x.afterValue:fn(x)&&(A=x.afterKey),E(x)&&(R=!0)),R?null:d.jsx("span",{className:Array.from(b).join(" "),children:A})},[e,t]),g=m.useCallback(S=>{var H;function T(L=!1,F=[]){return d.jsx("div",{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${mt} py-2 flex flex-row w-full h-full ${F.join(" ")}`,children:!L&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[p(S),"://",y(S)]})})}if(!Ct(e))return T();const b=((H=e.diffs)==null?void 0:H[_])??f.diff;if(!b)return T();const{data:x,styles:C}=b,A=new Set;let R=!1;return S===Q&&(k(x)?(A.add(ie.background(N.Gray)),R=!0):A.add(ie.background(C.before.backgroundColor))),S===ae&&(E(x)?(A.add(ie.background(N.Gray)),R=!0):A.add(ie.background(C.after.backgroundColor))),T(R,Array.from(A))},[e,y,p,f.diff]),v=m.useMemo(()=>Ue(t,s,"title"),[t,s]),h=m.useMemo(()=>Ue(t,s,"description"),[t,s]),D=m.useMemo(()=>Ue(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[v&&d.jsx(he,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:W.h4,...l}),!v&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:W.h4,...l}),d.jsx(Ls,{renderAddress:g,...f}),h&&d.jsx(yn,{"data-precededby":V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:W.h6,textFontWeight:"normal",textColor:En,...u}),D&&d.jsx(yn,{"data-precededby":h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:W.h6,textFontWeight:"normal",textColor:En,...c}),a&&d.jsx(Dt,{"data-precededby":D?V.SUMMARY_ROW:h?V.DESCRIPTION_ROW:V.SERVER_ADDRESS_ROW,node:a,variant:Ut.SECONDARY})]}):null});js.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const Fs=m.memo(i=>{const{node:e,[le]:n}=i,t=m.useMemo(()=>e.childrenNodes().filter(Sf),[e]),r=m.useMemo(()=>{if(qf(e)){const a=mn(e);return de(a)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:W.h3,...r}),t.map((a,o)=>d.jsx(js,{"data-precededby":o===0?V.MESSAGE_SECTION_HEADER_HIGH_LEVEL:V.SERVER_BLOCK,node:a},a.id))]})});Fs.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Js=i=>{const{node:e,[le]:n}=i,t=e.value(),r=e.childrenNodes(),a=r.find(or),o=r.find(hf),s=r.find(vf),l=r.find(yi),u=yt(e,Mf),{nodeDiffs:c}=u,f=m.useMemo(()=>de(u,{diffKey:"title"}),[u]),p=m.useMemo(()=>de(u,{diffKey:"description",diffsSeverityPlacement:j.DescriptionRow}),[u]),y=m.useMemo(()=>de(u,{diffKey:"summary",diffsSeverityPlacement:j.SummaryRow}),[u]),g=m.useMemo(()=>Ue(t,c,"title"),[t,c]),v=m.useMemo(()=>Ue(t,c,"description"),[t,c]),h=m.useMemo(()=>Ue(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(he,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:W.h2,...f}),!g&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:W.h2,...f}),v&&d.jsx(yn,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:W.h5,textFontWeight:"normal",textColor:En,...p}),h&&d.jsx(yn,{"data-precededby":v?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:W.h5,textFontWeight:"normal",textColor:En,...y}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Os,{"data-precededby":v?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(Fs,{"data-precededby":o?V.JSON_SCHEMA_VIEWER:v?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(Sr,{"data-precededby":s?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:v?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),a&&d.jsx(Dt,{"data-precededby":l?V.JSO_VIEWER:s?V.SERVER_BLOCK:o?V.JSON_SCHEMA_VIEWER:v?V.DESCRIPTION_ROW:h?V.SUMMARY_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:a})]})]})};Js.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Ks=i=>{const{node:e,[le]:n}=i,t=Ie(),r=De(),a=Gn(),o=lo(),s=e.childrenNodes(),l=s.find(gf),u=s.find(yi),c=s.find(or),f=s.find(pf),p=m.useMemo(()=>ya(l,a),[l,a]),y=m.useMemo(()=>ya(f,a),[f,a]),g=m.useMemo(()=>{if(Pf(l)){const D=mn(l);return de(D)}return{}},[l]),v=m.useMemo(()=>{if(Hf(f)){const D=mn(f);return de(D)}return{}},[f]),h=m.useCallback(D=>r===tn?d.jsx(ur,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:D,displayMode:t,overriddenKind:"parameters"}):r===Ee&&a?d.jsx(cr,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:D,displayMode:t,metaKeys:a,filters:o,layoutMode:Ee,overriddenKind:"parameters"}):null,[a,o,t,r]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":n,value:"Headers",variant:W.h3,expandable:!1,...g}),h(p)]}),u&&d.jsx(Sr,{"data-precededby":l?V.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(Dt,{"data-precededby":l?V.JSON_SCHEMA_VIEWER:u?V.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(he,{"data-precededby":l?V.JSON_SCHEMA_VIEWER:u||c?V.JSO_VIEWER:n,value:"Payload",variant:W.h3,expandable:!1,...v}),h(y)]})]})},ma="Type";function ya(i,e){if(!i)return;const n=i.value();if(n)return i instanceof Ge?Gr(ma,n.schema,i.diffs[_],e):Uo(ma,n.schema)}Ks.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Gs=i=>{const{node:e,[le]:n}=i,t=e.value(),r=e.childrenNodes(),a=r.find(or),o=r.find(yi),s=yt(e,Of),{nodeDiffs:l}=s,u=m.useMemo(()=>de(s,{diffKey:"title"}),[s]),c=m.useMemo(()=>de(s,{diffKey:"description",diffsSeverityPlacement:j.DescriptionRow}),[s]),f=m.useMemo(()=>de(s,{diffKey:"summary",diffsSeverityPlacement:j.SummaryRow}),[s]),p=m.useMemo(()=>Ue(t,l,"title"),[t,l]),y=m.useMemo(()=>Ue(t,l,"description"),[t,l]),g=m.useMemo(()=>Ue(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[p&&d.jsx(he,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:W.h2,expandable:!1,expanded:!0,...u}),!p&&d.jsx(he,{"data-precededby":n,value:e.key.toString(),variant:W.h2,expandable:!1,expanded:!0,...u}),y&&d.jsx(yn,{"data-precededby":V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:W.h5,textFontWeight:"normal",textColor:En,...c}),g&&d.jsx(yn,{"data-precededby":y?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:W.h5,textFontWeight:"normal",textColor:En,...f}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Sr,{"data-precededby":g?V.SUMMARY_ROW:y?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),a&&d.jsx(Dt,{"data-precededby":o?V.JSO_VIEWER:g?V.SUMMARY_ROW:y?V.DESCRIPTION_ROW:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:a})]})]})};Gs.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Bs=i=>{const{node:e,[le]:n}=i;return Po(e)?d.jsx(Ks,{"data-precededby":n,node:e}):Ho(e)?d.jsx(Js,{"data-precededby":n,node:e}):Io(e)?d.jsx(Gs,{"data-precededby":n,node:e}):null};Bs.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Us=i=>{const{node:e,[le]:n}=i,t=De();Ie();const[r,a]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(g=>{const v=Om(g),h=Lm(g);return jf(g)?{node:g,title:v,testId:h,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:v,testId:h}}),[o]);m.useEffect(()=>{s.length>0&&r===null&&a(s[0])},[s,r]);const l=m.useMemo(()=>{var g;return Lf(e)?(g=e.diffs)==null?void 0:g[_]:null},[e]),u=m.useMemo(()=>{if(l){const{data:g}=l;if(O(g)||E(g))return g.beforeDeclarationPaths[0];if(k(g))return g.afterDeclarationPaths[0]}return null},[l]),c=m.useMemo(()=>{var g;return(g=l==null?void 0:l.data)==null?void 0:g.type},[l]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),p=m.useCallback(g=>{const v=new Set;if(l){const{styles:h}=l;g===Q&&v.add(ie.background(h.before.backgroundColor)),g===ae&&v.add(ie.background(h.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${mt} h-full ${Array.from(v).join(" ")}`,children:d.jsx(hr,{options:s,selectedOption:r,onSelectOption:a,variant:br.Secondary,layoutSide:g})})},[l,n,s,r]),y=m.useCallback(()=>{switch(t){case Ee:return d.jsx(Jn,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(Mn,{left:p(Q),right:p(ae)})});default:return d.jsx(Fn,{content:p(ae)})}},[c,f,t,p]);return d.jsxs("div",{className:"flex flex-col",children:[y(),r&&bf(r.node)&&d.jsx("div",{"data-testid":`${r.testId}-section`,children:d.jsx(Bs,{"data-precededby":V.MESSAGE_SECTION_SELECTOR,node:r.node})})]})};function Om(i){switch(i.kind){case w.MESSAGE_CONTENT:return"Message";case w.MESSAGE_CHANNEL:return"Channel";case w.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function Lm(i){switch(i.kind){case w.MESSAGE_CONTENT:return"message-content";case w.MESSAGE_CHANNEL:return"message-channel";case w.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Us.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const qi=i=>{const{node:e,noHeading:n=!1}=i,t=e.value(),r=m.useMemo(()=>e.childrenNodes(),[e]),a=yt(e,If),{nodeDiffs:o}=a,s=m.useMemo(()=>de(a,{diffKey:"title"}),[a]),l=m.useMemo(()=>de(a,{diffKey:"address"}),[a]),u=m.useMemo(()=>de(a,{diffKey:"description",diffsSeverityPlacement:j.DescriptionRow}),[a]),c=m.useMemo(()=>de(a,{diffKey:"summary",diffsSeverityPlacement:j.SummaryRow}),[a]),f=m.useMemo(()=>Ue(t,o,"title"),[t,o]),p=m.useMemo(()=>Ue(t,o,"description"),[t,o]),y=m.useMemo(()=>Ue(t,o,"summary"),[t,o]),g=n?V.ROOT:V.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(he,{"data-precededby":V.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:W.h1,...s}),!n&&!f&&d.jsx(he,{"data-precededby":V.ROOT,value:e.key.toString(),expandable:!1,variant:W.h1,...s}),d.jsx(Oo,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),p&&d.jsx(yn,{"data-precededby":V.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:W.h4,textFontWeight:"normal",textColor:En,...u}),y&&d.jsx(yn,{"data-precededby":p?V.DESCRIPTION_ROW:V.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:W.h4,textFontWeight:"normal",textColor:En,...c}),d.jsx(jm,{"data-precededby":y?V.SUMMARY_ROW:p?V.DESCRIPTION_ROW:V.ADDRESS_ROW,children:r})]})},jm=i=>{const{children:e,[le]:n}=i;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>yf(t)?d.jsx(Us,{"data-precededby":n,node:t},t.key):null)})};qi.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const Fm=m.memo(i=>i.source===null?null:d.jsx(An,{fallback:d.jsx(Cn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Jm,{...i})})),Jm=m.memo(i=>{const{source:e,operationKeys:n,displayMode:t=Rn,devMode:r=!1,noHeading:a=!1,referenceNamePropertyKey:o}=i,s=m.useMemo(()=>rn(r),[r]),l=m.useMemo(()=>new bo({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!qo(c)?null:d.jsx(ro.Provider,{value:r,children:d.jsx(Vn.Provider,{value:t,children:d.jsxs(Ln.Provider,{value:tn,children:[" ",d.jsx(Me.Provider,{value:0,children:d.jsx(qi,{node:c,noHeading:a})})]})})})});Fm.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{Fm as A,pt as J,Kf as a,ur as b,cr as c,_m as d,Nm as e,gt as f};
