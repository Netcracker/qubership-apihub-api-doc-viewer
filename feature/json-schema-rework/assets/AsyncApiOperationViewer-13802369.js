var Ol=Object.defineProperty;var Pl=(r,e,n)=>e in r?Ol(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(Pl(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{af as Hr,a3 as bn,N as R,d as Wr,t as x,H as N,v as k,x as H,y as Oe,R as G,w as on,O as J,ag as pn,ah as qt,ai as It,aj as Ot,ak as Qi,al as Zi,am as eo,an as no,ao as ro,ap as to,aq as ao,ar as io,as as Hl,at as Pt,au as oo,av as so,aw as ra,ax as lo,ay as uo,az as fo,aA as ta,aB as aa,aC as ia,aD as co,aE as oa,aF as sa,aG as mo,aH as Ht,aI as la,aJ as da,aK as ua,aL as fa,aM as ca,aN as ma,aO as ya,aP as pa,U as W,o as ur,_ as yo,aQ as Ll,aR as Ue,i as ci,aS as po,aT as jl,Z as Jl,aU as Fl,X as pe,Y as fr,W as Q,S as we,V as z,E as Dn,c as wn,e as Nn,L as qn,f as Pe,p as Tn,a8 as Fe,aV as go,l as Xe,aW as Kl,aX as Gl,aY as Bl,aZ as Ul,a_ as Yl,a$ as Wl,b0 as $l,b1 as zl,b2 as Xl,z as Ql,A as Zl,B as ed,F as nd,G as rd,J as td,u as Be,g as $r,a9 as In,I as mi,b3 as ad,b4 as id,b5 as Yn,b6 as od,b7 as sd,b8 as Lr,b9 as ld,ba as dd,bb as yi,a6 as pi,j as ho,bc as bo,bd as ud,a7 as ga,ae as fd,be as cd,bf as md,ac as ue,bg as gr,bh as Kn,bi as dn,bj as Rn,bk as So,bl as vo,bm as yd,C as pd,bn as Lt,aa as gd,bo as hd,bp as hr,bq as bd,ad as Do}from"./DiffBadge-d46fdecc.js";import{_ as ha,l as M,$ as Ae,a0 as w,a1 as zr,a2 as Xr,a3 as Sd,a4 as Qr,a5 as wo,a6 as se,e as Qe,a7 as Zr,t as oe,a8 as re,a9 as ba,aa as vd,v as $,ab as Dd,ac as wd,ad as No,ae as To,z as Sa,S as He,O as On,N as Pn,Q as En,af as wt,b as F,X as cr,A as ie,ag as Eo,ah as Nd,ai as va,aj as sn,ak as ae,T as ce,al as et,P as _,am as Td,an as ko,ao as an,ap as nt,aq as Da,ar as wa,M as xo,as as Ed,at as Ie,au as kd,av as xd,aw as Ad,ax as Cd,ay as Vd,az as _d,aA as Rd,aB as mr,aC as br,aD as Sr,aE as Ao,aF as Co,aG as Md,c as ln,d as Sn}from"./IndexesNodeViewer-d3cb211c.js";import{r as m}from"./index-f46741a2.js";import{T as Na,A as Hn,a as Zn,b as xe,c as Ta,m as Ea,t as qd,C as Id,d as rt,e as ka,u as er,f as Vo}from"./DdlTableDiffsViewer-c901473c.js";/* empty css              */import"./DdlTableViewer-0ced4044.js";import"./GraphQLOperationDiffViewer-6457c9ef.js";import"./GraphQLOperationViewer-eb077fa3.js";import{g as Od,h as Pd,J as Hd,j as Ld,k as jd,l as Jd,m as xa,n as Fd,S as Kd,U as Aa,o as _o,p as tt,q as at,N as Ro,E as gi,r as Gd,s as Bd,t as Ud,v as Yd,w as Mo,x as it,C as Ca,y as Va,D as _a,z as Wd,A as $d,B as zd,F as Xd,H as qo,I as jt,K as hi,L as Qd,M as un,V as Ra,P as Ma,Q as qa,R as Ia,T as Zd,W as eu,X as Oa,Y as Pa,Z as Ha,_ as nu,$ as Io,a0 as ru,a1 as tu,a2 as au,a3 as Oo,a4 as iu,a5 as ou,a6 as su,a7 as lu,a8 as du,a9 as uu,aa as fu,ab as cu,ac as mu,ad as yu,ae as pu}from"./GraphPropNodeViewer-6a270396.js";class gu extends ha{constructor(){super()}}const bi=(r,e)=>!M(e)||Ae(e)?e:{rawValues:e},hu=(r,e)=>{if(!M(e)||Ae(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},Si=(r,e)=>M(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function ar(r){return{"/data":{"/content":()=>ar(w.MESSAGE_CONTENT),"/channel":()=>ar(w.MESSAGE_CHANNEL),"/operation":()=>ar(w.MESSAGE_OPERATION),kind:w.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:w.MESSAGE_CHANNEL_PARAMETERS,transformers:[bi]},"/servers":{"/*":()=>ar(w.SERVER),kind:w.SERVERS},"/extensions":{kind:w.EXTENSIONS,transformers:[bi]},"/bindings":{"/*":{kind:w.BINDING,transformers:[hu]},kind:w.BINDINGS,complex:!0},"/headers":{kind:w.MESSAGE_HEADERS,transformers:[Si]},"/payload":{kind:w.MESSAGE_PAYLOAD,transformers:[Si]},kind:r}}const bu="<address unknown>";class Po{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,a;const i=e.operations??{};let o,s;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(l=c.messages)==null?void 0:l[0],y=this.isReferenceObject(f)?null:f;if(y){const p=y[this.referenceNamePropertyKey];s=typeof p=="string"?p:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,a=s}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var D;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,s=Object.entries(t).filter(S=>{const[E,C]=S;return!this.isReferenceObject(C)&&E===i}).map(([,S])=>S).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let c=(s.messages??[]).filter(S=>!this.isReferenceObject(S)).find(S=>M(S)&&S[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!c){const S=(D=l.messages)==null?void 0:D[o];if(c=this.isReferenceObject(S)?void 0:S,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(s),y=this.copyExtensions(l),p=this.copyExtensions(c),g=S=>M(S)?{[this.referenceNamePropertyKey]:S[this.referenceNamePropertyKey]}:void 0,h=g(c),b=g(l),T=g(s);return{...h??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:s.action,address:l.address??bu,data:{content:{...c.headers?{headers:c.headers}:{},...p?{extensions:p}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...b??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...y?{extensions:y}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...T??{},id:i,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function Su(r){return zr(r)}const vu=new Set([w.BINDING,w.EXTENSIONS,w.MESSAGE,w.MESSAGE_CHANNEL,w.MESSAGE_CHANNEL_PARAMETERS,w.MESSAGE_HEADERS,w.MESSAGE_OPERATION,w.MESSAGE_PAYLOAD,w.SERVER]),vr=["title","description","summary"];class ot extends Xr{createNodeMeta(e){return{...M(e)&&Hr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!Sd(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,ot.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return vu.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case w.BINDING:return["binding","version","protocol"];case w.EXTENSIONS:case w.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case w.MESSAGE:return[...vr,"internalTitle","action","address"];case w.MESSAGE_CHANNEL:return[...vr];case w.MESSAGE_OPERATION:return[...vr];case w.MESSAGE_HEADERS:case w.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case w.SERVER:return[...vr,"host","protocol"];default:return[]}}}const Du="[AsyncAPI]";class Ho extends Qr{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=Qe()}=n;super();P(this,"tree");P(this,"source");P(this,"referenceNamePropertyKey");P(this,"operationKeys");P(this,"logger");P(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!M(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Zr},a=ar(w.MESSAGE),i=Su({source:n,tree:this.tree,supportedNodeKinds:wo,createNodeFromRaw:(o,s,l,u,c)=>this.createNodeFromRaw(o,s,l,u,c),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>M(s)&&!!s.isPrimitive});return bn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return Du}createTree(){return new gu}createNodeDataBuilder(){return new ot}prepareSource(){return new Po(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return M(n)?n:null}resolveNodeKey(n,t){if(!M(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:se.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:se.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===se.SIMPLE}isComplexTreeNode(n){return n.type===se.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class wu extends Na{constructor(){super()}}function vi(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const Nu="x-";function qr(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(Nu)}class Tu extends Po{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=oe(re(e,["operations",o],this.referenceNamePropertyKey)),c=oe(re(e,["operations",a,o],this.referenceNamePropertyKey));oe(re(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=oe(re(e,["operations",a,"channel",o],this.referenceNamePropertyKey));oe(re(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),oe(re(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=oe(re(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),p=oe(re(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));oe(re(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const g=re(e,["operations",a,"messages",i],this.referenceNamePropertyKey),h=re(e,["operations",a,"messages"],this.referenceNamePropertyKey),b=M(g)&&ba(h)?vd(h,g):void 0,T=(b&&typeof b!="symbol"?y==null?void 0:y[b]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),v=l;if(!(o in v)){const D=p==null?void 0:p.title,S=p==null?void 0:p.name,E=p==null?void 0:p.description,C=p==null?void 0:p.summary,V=f==null?void 0:f.address,q=p==null?void 0:p.headers,A=p==null?void 0:p.payload,O=v.data.content.extensions;if(O&&!(o in O)){const I=Object.keys(p??{}).reduce((j,B)=>{if(!qr(B))return j;const Z=p==null?void 0:p[B];return Z&&(j[B]=Z),j},{});v.data.content.extensions=Object.assign(O,{[o]:I})}const L=v.data.content;if(L&&!(o in L)){const I={...q?{headers:q}:{},...A?{payload:A}:{}};v.data.content=Object.assign(L,{[o]:I})}v[o]={...T?{[R]:T}:{},...D?{title:D}:{},...S?{internalTitle:S}:{},...E?{description:E}:{},...C?{summary:C}:{},...V?{address:V}:{}}}if(!(o in v.data.channel)){const D=f==null?void 0:f.title,S=f==null?void 0:f.description,E=f==null?void 0:f.summary,C=f==null?void 0:f.address,V=v.data.channel.extensions;if(V&&!(o in V)){const q=Object.keys(f??{}).reduce((A,O)=>{if(!qr(O))return A;const L=f==null?void 0:f[O];return L&&(A[O]=L),A},{});v.data.channel.extensions=Object.assign(V,{[o]:q})}v.data.channel[o]={...D?{title:D}:{},...S?{description:S}:{},...E?{summary:E}:{},...C?{address:C}:{}}}if(!(o in v.data.operation)){const D=c==null?void 0:c.title,S=c==null?void 0:c.description,E=c==null?void 0:c.summary,C=v.data.operation.extensions;if(C&&!(o in C)){const V=Object.keys(c??{}).reduce((q,A)=>{if(!qr(A))return q;const O=c==null?void 0:c[A];return O&&(q[A]=O),q},{});v.data.operation.extensions=Object.assign(C,{[o]:V})}v.data.operation[o]={...D?{title:D}:{},...S?{description:S}:{},...E?{summary:E}:{}}}return Wr(v,o,s),v}hasOnlyAllowedDiffMetaSymbols(e){if(!M(e)&&!Ae(e))return!0;if(Ae(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class Eu extends ot{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class ku extends Hn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;i.add(s)}return i}}class xu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,s=re(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&i.add(l.type);return i}}class Au extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=a,l=oe(re(t,["parameters","properties",o]));if(l)for(const f of Object.values(l))f&&i.add(f.type);const u=re(t,["parameters",s]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=oe(re(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class Cu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=a,l=oe(re(t,["extensions",o]));if(l)for(const f of Object.values(l))f&&i.add(f.type);const u=re(t,["headers",s]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=re(t,["payload",s]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class Vu extends Hn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,s=oe(re(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&i.add(l.type);return i}}var Mt;let _u=(Mt=class{static instance(e){switch(e){case w.BINDING:if(!this.instances.has(w.BINDING)){const n=new xu;this.instances.set(w.BINDING,n)}return this.instances.get(w.BINDING);case w.MESSAGE_CONTENT:if(!this.instances.has(w.MESSAGE_CONTENT)){const n=new Cu;this.instances.set(w.MESSAGE_CONTENT,n)}return this.instances.get(w.MESSAGE_CONTENT);case w.MESSAGE_CHANNEL:if(!this.instances.has(w.MESSAGE_CHANNEL)){const n=new Au;this.instances.set(w.MESSAGE_CHANNEL,n)}return this.instances.get(w.MESSAGE_CHANNEL);case w.MESSAGE_OPERATION:if(!this.instances.has(w.MESSAGE_OPERATION)){const n=new Vu;this.instances.set(w.MESSAGE_OPERATION,n)}return this.instances.get(w.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new ku;this.instances.set(null,n)}return this.instances.get(null)}}},P(Mt,"instances",new Map),Mt);class Ru extends Zn{aggregate(e,n){}}class Mu extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=oe(re(e,[a],t));if(!i)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},c=i[l];c&&(s=!0,this.aggregateWholeNodeDiff(c,u),o[l]=u[R])}return s?o:void 0}}class qu extends Zn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=oe(re(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,s={};if(i){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};x(i)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),k(i)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),H(i)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.headers={data:i,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};x(o)&&(l={...l,backgroundColor:N.Gray},u={...u,backgroundColor:N.Green}),k(o)&&(l={...l,backgroundColor:N.Red},u={...u,backgroundColor:N.Gray}),H(o)&&(l={...l,backgroundColor:N.Yellow},u={...u,backgroundColor:N.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}return s}}class Iu extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=oe(re(e,[a],t));if(!i)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const c=e[l][t];if(!c)continue;const f={},y=i[l];y&&(s=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[R])}return s?o:void 0}}class Lo{static instance(e){switch(e){case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new Mu),this.instances.get(w.BINDINGS);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Iu),this.instances.get(w.SERVERS);case w.MESSAGE_CONTENT:return this.instances.has(w.MESSAGE_CONTENT)||this.instances.set(w.MESSAGE_CONTENT,new qu),this.instances.get(w.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new Ru;this.instances.set(null,n)}return this.instances.get(null)}}}P(Lo,"instances",new Map);class Ou extends xe{aggregate(e){const n=e[R];if(n){const f=n.data,p={type:f.type,causedAt:[]};return H(f)?(p.causedAt=f.beforeDeclarationPaths[0],{[G.TitleRow]:p,[G.BindingVersionRow]:p}):(k(f)?p.causedAt=f.beforeDeclarationPaths[0]:x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),{[G.TitleRow]:p,[G.DescriptionRow]:p,[G.SummaryRow]:p,[G.AddressRow]:p,[G.BindingVersionRow]:p,[G.ServerAddressRow]:p})}const t=e.title,a=e.description,i=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,c={};if(t){const f=t.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.TitleRow]=p}if(a){const f=a.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.DescriptionRow]=p}if(i){const f=i.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.SummaryRow]=p}if(o){const f=o.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.AddressRow]=p}if(s){const f=s.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.BindingVersionRow]=p}if(l||u){const f=l==null?void 0:l.data,y=u==null?void 0:u.data,p=xe.maxDiffByDiffType(f,y);if(p){const g={type:p.type,causedAt:[]};(k(p)||H(p))&&(g.causedAt=p.beforeDeclarationPaths[0]),x(p)&&(g.causedAt=p.afterDeclarationPaths[0]),c[G.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class jo{static instance(e){switch(e){default:return new Ou}}}P(jo,"instances",new Map);class Pu extends Ta{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!x(n)&&!k(n)&&!H(n)&&!on(n))return!1;return!0}}class Hu{static instance(e){switch(e){default:return new Pu}}}class kn extends ${constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:s}=t;if(!M(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const p=o.diffs[R];if(p&&(x(p.data)||k(p.data)))return u[R]={...p,inherited:!0},u;{const g=o.descendantDiffs[a];if(g)return u[R]=g,u}}else if(i){const p=i.diffs[R];if(p&&(x(p.data)||k(p.data)))return u[R]={...p,inherited:!0},u;{const g=i.descendantDiffs[a];if(g)return u[R]=g,u}}if(!$.isDiffsRecord(l))return;const c=l.title;c&&this.aggregateTextDiff(c,"title",u);const f=l.description;f&&this.aggregateTextDiff(f,"description",u);const y=l.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;x(n)&&(i={...i,isContentVisible:!1,backgroundColor:N.Gray},o={...o,isContentVisible:!0,backgroundColor:N.Green}),k(n)&&(i={...i,isContentVisible:!0,backgroundColor:N.Red},o={...o,isContentVisible:!1,backgroundColor:N.Gray}),(on(n)||H(n))&&(i={...i,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},o={...o,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}}class Lu extends kn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!M(e))return;let s=super.aggregate(e,n,t,a,i);if(s){const u=s[R];if(u){const{data:c,styles:f}=u;x(c)&&(f.after.borderShadowColor=N.Green),k(c)&&(f.before.borderShadowColor=N.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=re(e,["binding"]);if(M(l)){const u=l[o];if($.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(x(t)&&M(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(k(t)&&M(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class ju extends kn{aggregateByDescendantDiffs(e,n,t){var u;if(n[R])return n;if(!M(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[R]=s(),n;let l=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==l){l=J.replace;break}return l===J.replace?(n[R]=s(),n):(n[R]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:k(n)?n.beforeDeclarationPaths:[],beforeValue:k(n)?n.beforeValue:void 0,afterDeclarationPaths:x(n)?n.afterDeclarationPaths:[],afterValue:x(n)?n.afterValue:void 0,action:J.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}),a)}}class Ju extends kn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[R])return n;const i=re(e,["rawValues"]);if(!M(i))return;const{diffsMetaKey:o}=a,s=i[o];if(!$.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return x(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),k(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[R]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:pn},n}}class Fu extends kn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!M(e))return;let s=super.aggregate(e,n,t,a,i);s||(s={});const l=e[o];if($.isDiffsRecord(l)){const u=l[R];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};x(u)&&(f={...f,isContentVisible:!1,backgroundColor:N.Gray},y={...y,isContentVisible:!0,backgroundColor:N.Green}),k(u)&&(f={...f,isContentVisible:!0,backgroundColor:N.Red},y={...y,isContentVisible:!1,backgroundColor:N.Gray}),s[R]={data:u,highlightingMode:Oe,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=l.address;c&&this.aggregateTextDiff(c,"address",s)}return Object.keys(s).length>0?s:void 0}}class Ku extends kn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[R])return n;const i=re(e,["rawValues","properties"]);if(!M(i))return;const{diffsMetaKey:o}=a,s=i[o];if(!$.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[c]=Object.values(s);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return x(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),k(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),n[R]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:Oe},n}}class Gu extends kn{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!M(e))return;let s=super.aggregate(e,n,t,a,i);s||(s={});const l=e[o];if($.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const c=l.protocol;c&&this.aggregateTextDiff(c,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class Bu extends kn{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[R])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[R]=o,n}}class Jt{static instance(e){switch(e){case w.BINDING:return this.instances.has(w.BINDING)||this.instances.set(w.BINDING,new Lu),this.instances.get(w.BINDING);case w.BINDINGS:return this.instances.has(w.BINDINGS)||this.instances.set(w.BINDINGS,new ju),this.instances.get(w.BINDINGS);case w.EXTENSIONS:return this.instances.has(w.EXTENSIONS)||this.instances.set(w.EXTENSIONS,new Ju),this.instances.get(w.EXTENSIONS);case w.MESSAGE:return this.instances.has(w.MESSAGE)||this.instances.set(w.MESSAGE,new Fu),this.instances.get(w.MESSAGE);case w.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(w.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(w.MESSAGE_CHANNEL_PARAMETERS,new Ku),this.instances.get(w.MESSAGE_CHANNEL_PARAMETERS);case w.SERVER:return this.instances.has(w.SERVER)||this.instances.set(w.SERVER,new Gu),this.instances.get(w.SERVER);case w.SERVERS:return this.instances.has(w.SERVERS)||this.instances.set(w.SERVERS,new Bu),this.instances.get(w.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new kn),this.instances.get(null)}}}P(Jt,"instances",new Map);const Uu="[AsyncAPI][WithDiffs]";class Yu extends Ho{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Uu}createTree(){return new wu}createNodeDataBuilder(){return new Eu}prepareSource(){return new Tu(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return ba(n)?n:null}createNodeFromRaw(n,t,a,i,o){const s=super.createNodeFromRaw(n,t,a,i,o);return!s||!vi(s)||this.assignNodeDiffs(s,a,o),s}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Jt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return Hu.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Lo.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return Jt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return _u.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return jo.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Ea(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return wo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&vi(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Wu extends ha{constructor(){super()}}const Y={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Jo=Object.values(Y),$n="unknown",$u="any",zu="nothing",ee={UNKNOWN:$n,ANY:$u,NOTHING:zu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},Xu=Object.values(ee);function Qu(r){return!r||!Dd(r)?!1:Xu.some(e=>e===r)}function Zu(r){return M(r)&&Hr in r}function Nt(r,e){const n=r[e];return Ae(n)&&n.length>0}function nr(r){return typeof r=="boolean"}function Ln(r){return r==null||typeof r=="boolean"?null:r}const ef=[ee.STRING,ee.NUMBER,ee.INTEGER,ee.BOOLEAN];function jr(r){return!!r&&ef.includes(r)}function Jr(r){return!M(r)||Ae(r)?!1:Nt(r,"allOf")||Nt(r,"oneOf")||Nt(r,"anyOf")}function Di(r){return M(r)&&Reflect.ownKeys(r).length>0}function Tt(r){return Ae(r)&&r.length>0}function Fo(r,e){if(!M(r)&&!Ae(r))return!1;if(Ae(r))return r.length>0;const n=r;if(Tt(n[qt])||Tt(n[It])||Tt(n[Ot])||Di(n[Qi])||Di(n[Zi]))return!0;const t=n[eo];if(t!==void 0&&t!==!1||n[no]!==void 0)return!0;const a=n[ro];return a!==void 0&&a!==!1}const nf="extensions",rf="location",Ye={root:Y.ROOT,definition:Y.DEFINITION,property:Y.PROPERTY,additionalProperties:Y.ADDITIONAL_PROPERTIES,patternProperty:Y.PATTERN_PROPERTY,items:Y.ITEMS,item:Y.ITEM,additionalItems:Y.ADDITIONAL_ITEMS,allOf:Y.ALL_OF,anyOf:Y.ANY_OF,oneOf:Y.ONE_OF},tf=(r,e)=>{if(!M(e)||Ae(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},af="x-";function wi(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(af)}function of(r,e){if(!M(e)||Ae(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>wi(s));if(t.length===0)return e;const a=new Set(t),i=t.reduce((s,l)=>(wi(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&a.has(s)||(o[s]=e[s]);return o.extensions=i,o}const sf=[tf,of];function We(r=Ye.root){return{"/allOf":{"/*":()=>We(Ye.allOf)},"/oneOf":{"/*":()=>We(Ye.oneOf)},"/anyOf":{"/*":()=>We(Ye.anyOf)},"/properties":{"/*":()=>We(Ye.property)},"/items":()=>({...We(Ye.items),"/*":({key:e})=>wd(e)?We(Ye.item):{}}),"/additionalProperties":()=>We(Ye.additionalProperties),"/additionalItems":()=>We(Ye.additionalItems),"/patternProperties":{"/*":()=>We(Ye.patternProperty)},kind:r,transformers:sf}}function lf(r){return zr(r)}const df={type:ee.ANY};function uf(r,e){if(nr(e)){if(e===!1)return!1;if(e===!0&&r===Y.ADDITIONAL_PROPERTIES)return df}}function ff(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function le(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const Ee=class Ee extends Xr{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case ee.UNKNOWN:case ee.ANY:case ee.NOTHING:case ee.NULL:case ee.BOOLEAN:return Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case ee.STRING:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ht,ma,ya,pa,rf];case ee.NUMBER:case ee.INTEGER:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ht,la,da,ua,fa,ca];case ee.OBJECT:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,co,oa,sa,mo];case ee.ARRAY:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ta,aa,ia];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=ff(n,t),o=Zu(e)?{brokenRef:String(e.$ref)}:{};return!Jr(e)&&M(e)?{...this.pick(e,Ee.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=uf(e,t);if(i!==void 0)return i;if(nr(t))return t;if(!M(t)||Jr(t))return null;const o=Qu(t.type)?t.type:ee.UNKNOWN;return o===ee.UNKNOWN||o===ee.ANY||o===ee.NOTHING||o===ee.NULL||o===ee.BOOLEAN?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.STRING?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.NUMBER||o===ee.INTEGER?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.OBJECT?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ee.ARRAY?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};P(Ee,"JSON_SCHEMA_TREE_NODE_META_PROPS",[to,ao,io,Hl]),P(Ee,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Pt,oo,so,ra,lo,uo,fo,nf]);let Fr=Ee;const cf="[JSON Schema]";class Ko extends Qr{constructor(n){const{source:t,materializeDepth:a,logger:i=Qe()}=n;super();P(this,"tree");P(this,"source");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new No);P(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!M(n))return this.tree;const t={parent:null,container:null,ancestors:new Zr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=We();return this.crawlHooks=lf({source:n,tree:this.tree,supportedNodeKinds:Jo,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o,s)=>({value:nr(i)||M(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:s}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>Ae(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Fo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),bn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:To(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};bn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return cf}createTree(){return new Wu}createNodeDataBuilder(){return new Fr((n,t)=>this.pick(n,t))}prepareSource(){return M(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u,value:c}=o;if(i||M(c)&&Jr(c)){const h=this.createNodeMeta(t,o),b={type:se.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,b)}const y=this.createNodeValue(t,a,o),p=this.createNodeMeta(t,o),g={type:se.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:y,meta:p,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,g)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===se.SIMPLE}isComplexTreeNode(n){return n.type===se.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class mf extends Na{constructor(){super()}}class yf{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!M(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return Wr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class pf extends Fr{constructor(e){super(e)}}class gf extends Hn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!x(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class Go{static instance(e){return this.kindAnyInstance}}P(Go,"kindAnyInstance",new gf);const hf=["properties","patternProperties","allOf","anyOf","oneOf","items"],bf=new Set(["properties","patternProperties"]);class Sf extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!M(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[s,l]of Object.entries(o))!l||s===R||!$.isDiff(l)||(i[s]=this.buildDescendantDiffMetadata(l));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=oe(Reflect.get(n,t));i&&a.push(i);for(const o of hf){const s=Reflect.get(n,o);if(!M(s)&&!Ae(s))continue;const l=oe(Reflect.get(s,t));if(l){a.push(l);continue}const u=i==null?void 0:i[o];if(u&&(x(u)||k(u))&&(bf.has(o)?M(s):Ae(s))){const y=this.decomposeWholeChildBagDiff(s,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=Ae(n)?n.map((o,s)=>String(s)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return x(n)?{type:n.type,scope:n.scope,description:n.description,action:J.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:J.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=Oe;return x(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Green,borderShadowColor:N.Green},o={...o,increaseLevel:!0}),k(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Red,borderShadowColor:N.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},o={...o,increaseLevel:!1}),H(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:s}}}class Bo{static instance(e){return this.kindAnyInstance}}P(Bo,"kindAnyInstance",new Sf);const gn="titleRow",Uo=["type","format","title"],Wn=["readOnly","writeOnly","deprecated"];class Yo extends xe{aggregate(e){const n=e[R],t={};return n?(t[G.TitleRow]=this.buildNodeDiffsSeverity(n),t[G.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[G.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",G.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",G.NestingIndicatorRow,t)),this.applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,t),Object.keys(t).length>0?t:void 0}applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,n){const t=e,a=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[G.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[gn],...Object.values(t.typeLabelFieldDiffs??{})],i=xe.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[G.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||H(n)?t.causedAt=n.beforeDeclarationPaths[0]:x(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class vf extends Yo{aggregate(e){const n=super.aggregate(e)??{};return this.applyMaxAdditionalInfoRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyMaxAdditionalInfoRowSeverity(e,n){const t=e,a=xe.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff,t.enumDiff,t.enumRowColorizingDiff,t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.enumValueDiffs??{}),...Object.values(t.examplesValueDiffs??{}),...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[G.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}}class Ft{static instance(e){switch(e){case Y.ROOT:case Y.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(Ft,"kindAnyInstance",new Yo),P(Ft,"kindPropertyInstance",new vf);function Et(r,e){for(const n of Object.values(e??{}))Sa(n)&&r.add(n.data.type)}class Df extends Ta{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){Et(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){Et(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(i.validationRowValueDiffs??{}))Et(a,l);continue}Sa(s)&&a.add(s.data.type)}return a}}class Wo{static instance(e){return this.kindAnyInstance}}P(Wo,"kindAnyInstance",new Df);const Te={ENUM:ra,MIN_LENGTH:ma,MAX_LENGTH:ya,PATTERN:pa,MINIMUM:da,MAXIMUM:fa,EXCLUSIVE_MINIMUM:ua,EXCLUSIVE_MAXIMUM:ca,MULTIPLE_OF:la,MIN_PROPERTIES:oa,MAX_PROPERTIES:sa,UNIQUE_ITEMS:ia,MIN_ITEMS:ta,MAX_ITEMS:aa},te={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Te.UNIQUE_ITEMS},Kt={[te.VALUE_LENGTH]:["minLength","maxLength"],[te.VALUE_PATTERN]:["pattern"],[te.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[te.VALUE_MULTIPLE_OF]:["multipleOf"],[te.PROPERTIES_COUNT]:["minProperties","maxProperties"],[te.ITEMS_COUNT]:["minItems","maxItems"],[te.UNIQUE_ITEMS]:["uniqueItems"]},wf={[te.VALUE_LENGTH]:{minLength:0,maxLength:1},[te.VALUE_PATTERN]:{pattern:0},[te.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[te.VALUE_MULTIPLE_OF]:{multipleOf:0},[te.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[te.ITEMS_COUNT]:{minItems:0,maxItems:1},[te.UNIQUE_ITEMS]:{uniqueItems:0}},Kr={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Nf(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Kr.OAS_3_1_NUMERIC_EXCLUSIVE:Kr.OAS_3_0_BOOLEAN_EXCLUSIVE}function Tf(r){return r.dialect??Nf(r)}const Ef="?",me="{value}",rn="{exclusive_value}",fn=">",Dr=">=",cn="<",wr="<=",_e=1,Re=2,Me=4,qe=8,Ni={0:{lower:void 0,upper:void 0},[_e]:{lower:`${Dr} ${me}`,upper:void 0},[Re]:{lower:`${fn} ${rn}`,upper:void 0},[Me]:{lower:void 0,upper:`${wr} ${me}`},[qe]:{lower:void 0,upper:`${cn} ${rn}`},[Re|_e]:{lower:`${fn} ${me}`,upper:void 0},[Re|Me]:{lower:`${fn} ${rn}`,upper:`${wr} ${me}`},[Re|qe]:{lower:`${fn} ${rn}`,upper:`${cn} ${rn}`},[qe|_e]:{lower:`${Dr} ${me}`,upper:`${cn} ${rn}`},[qe|Me]:{lower:void 0,upper:`${cn} ${me}`},[Me|_e]:{lower:`${Dr} ${me}`,upper:`${wr} ${me}`},[Re|_e|Me]:{lower:`${fn} ${me}`,upper:`${wr} ${me}`},[Re|_e|qe]:{lower:`${fn} ${me}`,upper:`${cn} ${rn}`},[Re|Me|qe]:{lower:`${fn} ${rn}`,upper:`${cn} ${me}`},[qe|_e|Me]:{lower:`${Dr} ${me}`,upper:`${cn} ${me}`},[_e|Re|Me|qe]:{lower:`${fn} ${me}`,upper:`${cn} ${me}`}};function Gt(r){return r!=null}function Ti(r){return r!==void 0&&r!==!1}function kf(r,e,n){return(r&(_e|Re))!==(_e|Re)||n===void 0||typeof e!="number"?r:n>=e?r&~_e:r&~Re}function xf(r,e,n){return(r&(Me|qe))!==(Me|qe)||n===void 0||typeof e!="number"?r:n<=e?r&~Me:r&~qe}function Ei(r,e,n){return r.replace(me,`${e}`).replace(rn,Gt(n)?`${n}`:Ef)}function Af(r,e){return Gt(r)||Gt(e)}function Cf(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=_e),Ti(t)&&(i|=Re),n!==void 0&&(i|=Me),Ti(a)&&(i|=qe),i}function $o(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&_e)&&(n&=~Re),typeof e.exclusiveMax!="number"&&!(n&Me)&&(n&=~qe),n}function Vf(r,e){return $o(r,e)}function _f(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=kf(r,e.min,n);return a=xf(a,e.max,t),a}const Rf={[Kr.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:$o},[Kr.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Vf}};function Mf(r,e){const n=Rf[e];let t=Cf(r);return t=n.applyExclusiveSuppression(t,r),_f(t,r)}function ze(r){const e={data:{},visible:!1},n=Tf(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=Mf(r,n),o=i in Ni?{...Ni[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=Ei(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=Ei(o.upper,r.max,a)),e.visible=Af(e.data.lower,e.data.upper),e}const lr="0",st="1";function Gn(r){return r!=null}function Nr(r){return r!==void 0&&r!==!1}function Tr(r){return r!==void 0&&r!==!1}function Er(r){return!!r&&x(r)}function kr(r){return!!r&&k(r)}function Bn(r){return!!r&&H(r)}function ki(r){if(r&&(x(r)||H(r)))return r.afterValue}function xi(r){if(!r||!(k(r)||H(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function Ai(r){if(!r||!(k(r)||H(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function La(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,s=e.exclusiveMinimum,l=e.maximum,u=e.exclusiveMaximum,c=Gn(n),f=Gn(a),y=Gn(o),p=Gn(l),g=Gn(s),h=Gn(u),b=Er(o),T=kr(o),v=Bn(o),D=Er(l),S=kr(l),E=Bn(l),C=ze({min:c&&(!y||b||v)?n:void 0,max:f&&(!p||D||E)?a:void 0,exclusiveMin:Nr(t)&&(!g||Er(s)||Bn(s)&&Tr(ki(s)))?t:void 0,exclusiveMax:Nr(i)&&(!h||Er(u)||Bn(u)&&Tr(ki(u)))?i:void 0}).data;if(!(y||g||p||h))return{before:{...C},after:C};let q,A,O,L;if(c&&!y&&(q=n),(T||v)&&(q=xi(o)),f&&!p&&(A=a),(S||E)&&(A=xi(l)),Nr(t)&&!g&&(O=t),Bn(s)||kr(s)){const j=Ai(s);Tr(j)&&(O=j)}if(Nr(i)&&!h&&(L=i),Bn(u)||kr(u)){const j=Ai(u);Tr(j)&&(L=j)}return{before:ze({min:q,max:A,exclusiveMin:O,exclusiveMax:L}).data,after:C}}function qf(r,e){if(!e)return;const n=r==="lower"?lr:st;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function Ci(...r){for(const e of r)if(e)return e.type}function Vi(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:J.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:J.remove,beforeValue:e}:{type:r,action:J.replace,beforeValue:e,afterValue:n}}function zo(r,e){const{before:n,after:t}=La(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return J.add;if(a&&!i)return J.remove}function Xo(r,e){const{before:n,after:t}=La(r,e),a=Ci(e.minimum,e.exclusiveMinimum),i=Ci(e.maximum,e.exclusiveMaximum),o={},s=Vi(a,n.lower,t.lower);s&&(o[lr]=s);const l=Vi(i,n.upper,t.upper);return l&&(o[st]=l),o}function If(r,e){const n=Xo(r,e);return[n[lr],n[st]].filter(t=>t!==void 0)}function Of(r,e){if(zo(r,e)!==void 0)return!1;const n=If(r,e);if(n.length!==1)return!1;const t=n[0];return x(t)||k(t)}function Pf(r,e){return Of(r,e)}function _i(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:s}of a){if(!o)continue;const l=o!==s?qf(i,e):void 0;t.push({text:o,valueDiffKey:l})}return t}function Hf(r,e,n,t,a){const{before:i,after:o}=La(r,e),s=n===W;if(t){const c=t.data;if(x(c)||k(c))return _i(s?i:o,a,s?o:i)}return _i(s?i:o,a,s?o:i)}function Lf(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(x(e)?e.afterValue:k(e)?e.beforeValue:H(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function jf(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Lf(n,t):!0:!1})}function Ri(r){return typeof r=="number"||typeof r=="boolean"}function Jf(r){if(!M(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),Ri(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),Ri(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Bt(r){const e=Jf(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function nn(r){return typeof r=="string"?r:JSON.stringify(r)}function Qo(r,e,n){switch(r){case te.VALUE_LENGTH:case te.PROPERTIES_COUNT:case te.ITEMS_COUNT:{if(e.startsWith("min"))return ze({min:Number(n)}).data.lower??nn(n);if(e.startsWith("max"))return ze({max:Number(n)}).data.upper??nn(n);break}case te.VALUE_RANGE:{if(e==="minimum")return ze({min:Number(n)}).data.lower??nn(n);if(e==="maximum")return ze({max:Number(n)}).data.upper??nn(n);if(e==="exclusiveMinimum")return ze({exclusiveMin:typeof n=="number"?n:!0}).data.lower??nn(n);if(e==="exclusiveMaximum")return ze({exclusiveMax:typeof n=="number"?n:!0}).data.upper??nn(n);break}case te.VALUE_PATTERN:case te.VALUE_MULTIPLE_OF:case te.UNIQUE_ITEMS:return nn(n);default:return nn(n)}return nn(n)}function Ff(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Kf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function Zo(r,e){return e.length<=1||Ff(r)?0:Kf(r)?1:0}class es extends ${constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}});P(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:s}=t;if(!M(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const b=o.diffs[R];if(b&&(x(b.data)||k(b.data)))return u[R]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const T=o.descendantDiffs[a];if(T)return u[R]=T,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}else if(i){const b=i.diffs[R];if(b&&(x(b.data)||k(b.data)))return u[R]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const T=i.descendantDiffs[a];if(T)return u[R]=T,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}if(!$.isDiffsRecord(l))return;const c=l[R];c&&this.aggregateTextDiff(c,R,u);const f=l.title,y=l.format,p=l.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:f},u);const g=l.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const b of Wn){const T=l[b];$.isDiff(T)&&this.aggregateMetaFlagDiff(T,b,u)}return M(n)&&this.aggregateValidationRowDiffs(n,l,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,a){const i=new Set;for(const s of Object.values(t.typeLabelFieldDiffs??{}))s!=null&&s.data&&i.add(s.data);const o=new Set;for(const s of qd(n,a))i.has(s)||s!=null&&s.type&&o.add(s.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[R];if(i&&(x(i.data)||k(i.data))){t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const p=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(p){const g=this.resolveTypePrimitivenessCrossing(o),h=g&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,g):this.asReplaceRowColorizingDiff(p);t.nestingIndicatorRowColorizingDiff={...h,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!M(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(p=>a[p]);if(l.some(p=>!p))return;const[u,...c]=l;if(!x(u.data)&&!k(u.data))return;const f=u.data.action;c.every(p=>p.data.action===f&&(x(p.data)||k(p.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return x(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:k(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}resolveTypePrimitivenessCrossing(n){var l;const t=(l=n.type)==null?void 0:l.data;if(!t||!H(t))return;const a=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=jr(a),s=jr(i);if(o!==s)return{beforeIsPrimitive:o,afterIsPrimitive:s}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:a}=n;return H(a)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:a.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:J.add,afterValue:!0,afterDeclarationPaths:a.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");M(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");M(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of Uo){const o=n[i];$.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[R];if(t&&(x(t.data)||k(t.data))){n[gn]=t;return}for(const a of Wn){const i=n[a];if(i){n[gn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[gn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:N.Green},removeBefore:{textHighlighterColor:N.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return x(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Green}),k(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}),(on(n)||H(n))&&(t={...t,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},a={...a,isContentVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}asReplaceRowColorizingDiff(n){const{data:t}=n;return H(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return x(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:k(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:J.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[R];return!!t&&(x(t.data)||k(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Wn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return H(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:J.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:J.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[R];if(!(!a||!(x(a.data)||k(a.data)))&&M(n))for(const[i,o]of Object.entries(Kt)){const s=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(Kt)){const s=o.filter(D=>t[D]);if(s.length===0)continue;const l=i,u=l===te.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=l===te.VALUE_RANGE?jf(s,t):s,f=s.map(D=>t[D]).filter(D=>$.isDiff(D));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Bt(n),p=u?zo(y,u):void 0;if(u&&(p===J.add||p===J.remove)){const D=p===J.add?this.mergeDiffActionFragment(f,J.add,this.resolveWholeRowDisplayValues(l,s,f,J.add)):this.mergeDiffActionFragment(f,J.remove,this.resolveWholeRowDisplayValues(l,s,f,J.remove)),S=this.buildChangedPropertyMetaDataFromDiff(D);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(u&&Pf(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,a,l);continue}const g=f.every(x),h=f.every(k);if(g){const D=this.resolveWholeRowDisplayValues(l,s,f,J.add),S=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,J.add,D));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(h){const D=this.resolveWholeRowDisplayValues(l,s,f,J.remove),S=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,J.remove,D));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[l]=S,a.validationRowColorizingDiffs[l]=S;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,a,l));continue}const b=c.map(D=>t[D]).filter(D=>$.isDiff(D)).map(D=>this.buildChangedPropertyMetaDataFromDiff(D)),T=xe.maxChangedPropertyMetaDataByDiffType(...b);if(!T)continue;const v=this.buildValidationRowValueDiffs(l,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[l]=v,a.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(T),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,l)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=Xo(Bt(n),t),s=[lr,st];if(!s.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of s){const y=o[f];if(!y||c[f])continue;const p=f===lr?"lower":"upper",g=this.attachValueRangeChipDiffPaths(y,p,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const s=n.map(f=>t[f]).filter(f=>$.isDiff(f));if(s.length===0)return;const l=s.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=xe.maxChangedPropertyMetaDataByDiffType(...l);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],s=[];for(const l of i)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=wf[n],o={};for(const s of t){const l=a[s];if(!$.isDiff(l)||i[s]===void 0)continue;const c=this.buildListValueDiffMetadata(l);o[s]=xe.maxChangedPropertyMetaDataByDiffType(o[s],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((s,l)=>{const u=a[l],c=i===J.add?x(u)?u.afterValue:void 0:k(u)?u.beforeValue:void 0;c!==void 0&&o.push(Qo(n,s,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(l=>k(l)||H(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>x(l)||H(l)?l.afterDeclarationPaths:[]);return t===J.add?{type:i.type,scope:i.scope,description:i.description,action:J.add,afterValue:a,afterDeclarationPaths:s}:{type:i.type,scope:i.scope,description:i.description,action:J.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:N.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:N.Green},removeBefore:{borderShadowColor:N.Red,isFontMuted:!0}})}}class Gf extends es{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!M(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=$.isDiffsRecord(l),c=this.resolveWholeListFieldDiff(e,"enum",s),f=this.resolveWholeListFieldDiff(e,"examples",s),y=this.resolveListFieldItemDiffs(e,"enum",s),p=this.resolveListFieldItemDiffs(e,"examples",s),g=!!c||!!f||Object.keys(y).length>0||Object.keys(p).length>0;if(!o&&!u&&!g){const b=this.resolveRequiredMetaDiff(t,a,s);if(!b)return;const T={required:b};return this.aggregatePropertyTitleRowDiff(T),T}const h={...o??{}};if(u){const b=l.default;$.isDiff(b)&&(h.default=this.buildDefaultValueDiffMetadata(b))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(p).length>0&&(h.examplesValueDiffs=p),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const b=this.resolveRequiredMetaDiff(t,a,s);b&&(h.required=b)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[R];if(n&&(x(n.data)||k(n.data))){e[gn]=n;return}for(const a of Wn){const i=e[a];if(i){e[gn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[gn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!M(i)&&!M(a))return;const o=String(e),s=M(i)?Reflect.get(i,t):void 0,l=M(i)?Reflect.get(i,"required"):void 0,u=M(a)&&"required"in a?a.required:void 0,c=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if($.isDiffsRecord(s)){const y=s.required;if($.isDiff(y)){const p=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(p)return p}if($.isDiffsRecord(y)){const p=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(p)return p}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(x(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(k(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(H(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if($.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!$.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if($.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if($.isDiff(t)){if(x(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(k(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return H(e)?this.buildChipReplaceDiffMetadata(e,{textHighlighterColor:N.Yellow}):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!$.isDiffsRecord(a))return;const i=a[n];if($.isDiff(i)){if(x(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(k(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return $.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"enum","enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"examples","examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i,o){const s=Reflect.get(e,t);if(!Array.isArray(s)||s.length===0)return;const l=n[R];if(l&&(x(l.data)||k(l.data))){n[o]=this.buildWholeNodeInheritedRowColorizingDiff(l);return}const u=n[a];if(u){n[o]=u;return}const c=n[i];if(!c||Object.keys(c).length===0)return;const f=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(c));f&&(n[o]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[R];if(i&&(x(i.data)||k(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const s=o.data;if(x(s)||k(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}H(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Gr{static instance(e){switch(e){case Y.ROOT:case Y.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(Gr,"kindAnyInstance",new es),P(Gr,"kindPropertyInstance",new Gf);const Bf="[JSON Schema][WithDiffs]";class Uf extends Ko{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Bf}createTree(){return new mf}createNodeDataBuilder(){return new pf((n,t)=>this.pick(n,t))}prepareSource(){return new yf(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const s=super.createNodeFromRaw(n,t,a,i,o);return!s||!le(s)||this.assignNodeDiffs(s,a,o),s}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Gr.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Wo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Bo.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Gr.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Go.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Ft.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Ea(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Jo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&le(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function kt(r){return!!r&&Object.keys(r).length>0}function Mi(r){return!!r&&r.size>0}function Yf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function qi(r,e){if(!(kt(r.diffs)||kt(r.descendantDiffs)||Mi(r.diffsSummary)||Mi(r.descendantDiffsSummary)||kt(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=Yf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Ut(r,e,n){if(r.isCycle)return qi(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return qi(r,e)?!0:r.type===se.COMPLEX?r.nestedNodes().some(t=>Ut(t,e,n)):r.childrenNodes().some(t=>Ut(t,e,n))}finally{n.visiting.delete(r.id)}}function ns(r,e){return Ut(r,e,{visiting:new Set})}function Wf(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),s=r.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const s=r[o].id,l=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});a.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function $f(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return Wf(r,a=>ns(a,t),n)}function rs(r){return r.kind===w.MESSAGE}function zf(r){return r.kind===w.MESSAGE_SECTION_SELECTOR}function ts(r){return r.kind===w.MESSAGE_CONTENT}function Xf(r){return r.kind===w.MESSAGE_HEADERS&&r.key==="headers"}function Qf(r){return r.kind===w.MESSAGE_PAYLOAD&&r.key==="payload"}function as(r){return r.kind===w.MESSAGE_CHANNEL}function Zf(r){return r.kind===w.MESSAGE_CHANNEL_PARAMETERS}function is(r){return r.kind===w.MESSAGE_OPERATION}function ja(r){return r.kind===w.EXTENSIONS}function lt(r){return r.kind===w.BINDINGS}function xt(r){return r.kind===w.BINDING}function ec(r){return ts(r)||as(r)||is(r)}function nc(r){return r.kind===w.SERVERS}function rc(r){return r.kind===w.SERVER}function Je(r,e,n){var a;if(!M(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?k(t)?t.beforeValue!==void 0:x(t)?t.afterValue!==void 0:H(t)?t.beforeValue!==void 0||t.afterValue!==void 0:on(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const tc=r=>{if(!ur(r)||yo(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function ac(r){if(!ur(r)||yo(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,s)=>(Od(s)&&(o[s]=r[s]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const ic=[tc,ac],Ge=(r=Ue.root)=>({"/allOf":{"/*":()=>Ge(Ue.allOf)},"/oneOf":{"/*":()=>Ge(Ue.oneOf)},"/anyOf":{"/*":()=>Ge(Ue.anyOf)},"/properties":{"/*":()=>Ge(Ue.property)},"/items":()=>({...Ge(Ue.items),"/*":({key:e})=>Ll(e)?Ge(Ue.item):{}}),"/additionalProperties":()=>Ge(Ue.additionalProperties),"/additionalItems":()=>Ge(Ue.additionalItems),"/patternProperties":{"/*":()=>Ge(Ue.patternProperty)},kind:r,transformers:ic});function oc(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((s,l)=>l(s,r,n,t),e);return o!==e&&ci(o)&&ci(e)&&Object.defineProperty(o,po,{value:e,enumerable:!1}),{value:o}}}function sc(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!jl.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:s,nodeIdPrefix:l}=i,u=l+Jl(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:Ja(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=s?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:s,parent:s.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(s?s.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===Fl.simple)return{done:!0};const p=i.treeLevel+1;if(y.value){const g=new Map(i.alreadyConvertedMappingStack);g.set(n,y.node);const h=n[po];h!==void 0&&g.set(h,y.node);let b;return Pd(y.node)?b={parent:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:l,treeLevel:p,maxTreeLevel:i.maxTreeLevel}:b={parent:o,container:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:l,treeLevel:p,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:b}}else return{done:!0}}}const lc=2;function Ja(r,e){return[Ld(r),oc(e),sc(r)]}const dc=(r,e=lc)=>{const n=new Hd(r);if(!ur(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return bn(r,Ja(n,r),{state:t,rules:Ge()}),n},uc=2,fc=(r,e,n=uc)=>{const t=new jd(r,e);if(!ur(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return bn(r,Ja(t,r),{state:a,rules:Ge()}),t};function Le(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function cc(r){return Le(r,Id,w.BINDINGS)}function At(r){return Le(r,He,w.BINDING)}function mc(r){return Le(r,He)}function yc(r){return Le(r,He,w.MESSAGE_CHANNEL)}function pc(r){return Le(r,He)}function xr(r){return Le(r,He,w.SERVER)}function gc(r){return Le(r,He)}function hc(r){return Le(r,He,w.MESSAGE_HEADERS)}function bc(r){return Le(r,He,w.MESSAGE_PAYLOAD)}function Sc(r){return Le(r,He,w.MESSAGE)}function vc(r){return Le(r,He,w.MESSAGE_OPERATION)}function Dc(r){return Le(r,He,w.MESSAGE_SECTION_SELECTOR)}function wc(r){return Le(r,He,[w.MESSAGE_CONTENT,w.MESSAGE_CHANNEL,w.MESSAGE_OPERATION])}const os=r=>{const e=pe(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(e){case we:return d.jsx(Pn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(En,{left:d.jsx(Ct,{...r,layoutSide:W}),right:d.jsx(Ct,{...r,layoutSide:Q})})});default:return d.jsx(On,{content:d.jsx(Ct,{...r,layoutSide:Q})})}},Nc={send:"bg-sky-400",receive:"bg-green-500"},Ct=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[ie]:i}=r,o=m.useCallback(()=>{const l=a&&Tc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Nc[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(x(a.data)&&t===W&&(u=null),k(a.data)&&t===Q&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(wt,{value:n,variant:F.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:p}=l,g=t===W?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(wt,{value:c,variant:F.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(wt,{value:g,variant:F.h4,layoutSide:t,diff:p,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),s=m.useMemo(()=>{const l=new Set;if(a){const{styles:u}=a;t===W?l.add(z.background(u.before.backgroundColor)):l.add(z.background(u.after.backgroundColor))}return Array.from(l)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${cr} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Tc(r){const{data:e}=r;if(!H(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),s=i===-1?t:t.slice(0,i);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:l}}}os.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Ec=m.memo(r=>r.mergedSource===null?null:d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"Async API Operation Viewer"}),children:d.jsx(kc,{...r})})),kc=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=Tn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=r,u=m.useMemo(()=>Qe(a),[a]),c=m.useMemo(()=>new Yu({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!rs(y)?null:d.jsx(rt.Provider,{value:s,children:d.jsx(ka.Provider,{value:l,children:d.jsx(Eo.Provider,{value:a,children:d.jsx(Nn.Provider,{value:t,children:d.jsx(qn.Provider,{value:we,children:d.jsx(Pe.Provider,{value:0,children:d.jsx(fi,{node:y,noHeading:i})})})})})})})});Ec.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Fa=m.createContext(void 0);function xc(){return m.useContext(Fa)}const dt=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Jd(),i=Fe(),s=e.node.newDataLevel?i+1:i,l=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=D=>{if(D){e.select(D),f(D),n(D);const S=u.find(E=>E.id===D);a==null||a(S)}},p=pe(),g=m.useMemo(()=>{const D={};return u.forEach(S=>{const E=S.value().$changes??{},C=xa({node:S});C&&(D[S.id]={...C,...Object.keys(E).length?{$changes:E}:{}})}),D},[u]),h=Fe()+1,b=u.find(D=>(D==null?void 0:D.id)===c),T=Fd(b)?b==null?void 0:b.kind:"",v=go(t??(l==null?void 0:l.$nodeChange));return d.jsx(Pe.Provider,{value:s,children:d.jsx(Kd,{nodesTypeData:g,selectedNodeId:c,combiner:T,onSelect:y,layoutMode:p,level:h,$nodeChange:v,$nestedChanges:l==null?void 0:l.$nestedChanges,$nestedChangesSummary:p!==Xe?e.$nestedChangesSummary:void 0})})};dt.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const ut=m.createContext(void 0);function ss(){return m.useContext(ut)}const zn=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{i(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(Nd.Provider,{value:l,children:t})});zn.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function ls(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class Ac extends Na{constructor(){super()}}const ft={PROPERTY:"property"},dr=Object.values(ft),ne={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Cc extends Qr{constructor(){super(...arguments);P(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const ke=class ke{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=ke.isArrayItemKey(e);return ke.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=ke.getValueType(e),i=ke.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:ke.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===ne.BOOLEAN||e===ne.NULL}static isPrimitiveValue(e){return e!==ne.JSON_SCHEMA&&e!==ne.MULTI_SCHEMA&&e!==ne.OBJECT&&e!==ne.ARRAY}static getValueType(e){return typeof e=="string"?ne.STRING:typeof e=="number"?ne.NUMBER:typeof e=="boolean"?ne.BOOLEAN:typeof e=="object"?e===null?ne.NULL:Array.isArray(e)?ne.ARRAY:ke.isJsonSchema(e)?ne.JSON_SCHEMA:ke.isMultiSchema(e)?ne.MULTI_SCHEMA:ne.OBJECT:ne.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Pt in e&&typeof e.type=="string"&&Kl.some(a=>a===e.type)||It in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>ke.isJsonSchema(a))||Ot in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>ke.isJsonSchema(a))||qt in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>ke.isJsonSchema(a))||Hr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([so,Gl,Bl,mo,Ul,Yl,Wl,Pt,oo,Ht,lo,la,fa,ca,da,ua,ya,ma,pa,aa,ta,ia,sa,oa,no,ro,co,ra,Qi,eo,Zi,qt,It,Ot,$l,fo,ao,io,uo,to,zl,Hr]);return n&&Object.keys(e).every(a=>t.has(a)||ke.isExtensionPropertyInJsonSchema(a)||ke.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&M(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!ba(e))return e;const t=oe(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let s;for(const l of o){const u=e[l],c=t[l];if(u===void 0||c===void 0||!H(c))continue;const{beforeValue:f,afterValue:y}=c,p=M(f),g=Array.isArray(f),h=M(y),b=Array.isArray(y);if(!(g&&h||p&&b))continue;s||(s={...e});const v={...f,...y};s[l]=v}return s??e}};P(ke,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:ne.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let K=ke;const Vc=(r,e,n,t,a)=>K.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function ds(){return{"/*":()=>ds(),transformers:[Vc],kind:ft.PROPERTY}}function _c(r){return zr(r)}const Rc=new Set(dr);class Mc extends Xr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=K.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return Rc.has(e)}}class qc extends Hn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!x(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class us{static instance(e){if(!this.instances.has(null)){const n=new qc;this.instances.set(null,n)}return this.instances.get(null)}}P(us,"instances",new Map);class Ic extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!M(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=oe(n[a]);if(!i)return;const o={};for(const[s,l]of Object.entries(i)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,p=Oe;if(x(l)){const{afterValue:g}=l,h=K.getValueType(g),b=K.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},f={...f,increaseLevel:!1},c={isContentVisible:b,isHeaderVisible:!0,backgroundColor:N.Green},y={...y,increaseLevel:!0},p=pn}if(k(l)){const{beforeValue:g}=l,h=K.getValueType(g);u={isContentVisible:K.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:N.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},y={...y,increaseLevel:!1},p=pn}if(H(l)){const{beforeValue:g,afterValue:h}=l,b=K.getValueType(g),T=K.getValueType(h),v=K.isPrimitiveValue(b),D=K.isPrimitiveValue(T),S=K.isPredefinedValueSet(b),E=K.isPredefinedValueSet(T);u={isContentVisible:v,isHeaderVisible:!0,backgroundColor:N.Yellow},v&&(S?u.borderShadowColor=N.Yellow:u.textHighlighterColor=N.Yellow),c={isContentVisible:D,isHeaderVisible:!0,backgroundColor:N.Yellow},D&&(E?c.borderShadowColor=N.Yellow:c.textHighlighterColor=N.Yellow),p=Xl}o[s]={data:l,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:p}}return o}}class fs{static instance(e){if(!this.instances.has(null)){const n=new Ic;this.instances.set(null,n)}return this.instances.get(null)}}P(fs,"instances",new Map);class Oc extends xe{aggregate(e){const n=e[R];if(n){const o=n.data,s={type:o.type,causedAt:[]};return H(o)||k(o)?s.causedAt=o.beforeDeclarationPaths[0]:x(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[G.TitleRow]:s}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return H(a)||k(a)?i.causedAt=a.beforeDeclarationPaths[0]:x(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[G.TitleRow]:i}}}class cs{static instance(e){return this.instances.has(null)||this.instances.set(null,new Oc),this.instances.get(null)}}P(cs,"instances",new Map);class Pc extends Ta{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!x(n)&&!k(n)&&!H(n)&&!on(n))return!1;return!0}}class Hc{static instance(e){return new Pc}}class Lc extends ${isComplexValue(e){return M(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const s=a.diffs[R];if(s){const{data:l}=s;if(x(l)){const{afterValue:u}=l,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),h={data:{...l,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:pn,inherited:!0};return o[R]=h,o}return o[R]=s,o}if(k(l)){const{beforeValue:u}=l,c=K.getValueType(u);if(!K.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=K.getValueType(y),g=K.isPrimitiveValue(p),h={data:{...l,beforeValue:y},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:pn,inherited:!0};return o[R]=h,o}return o[R]=s,o}if(H(l)){const{beforeValue:u,afterValue:c}=l,f=K.getValueType(u),y=K.getValueType(c),p=K.isPrimitiveValue(f),g=K.isPrimitiveValue(y);if(p&&g)return o[R]=s,o;if(!p&&this.isComplexValue(u)&&g){const h=u[t],b=K.getValueType(h),T=K.isPrimitiveValue(b),v=K.isPredefinedValueSet(b),D={data:{...l,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:pn,inherited:!0};return T&&(D.styles.before.textHighlighterColor=N.Yellow),v&&(D.styles.before.borderShadowColor=N.Yellow),o[R]=D,o}if(!g&&this.isComplexValue(c)&&p){const h=c[t],b=K.getValueType(h),T=K.isPrimitiveValue(b),v=K.isPredefinedValueSet(b),D={data:{...l,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:N.Gray},after:{isContentVisible:T,isHeaderVisible:!0,backgroundColor:N.Yellow,textHighlighterColor:N.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:pn,inherited:!0};return T&&(D.styles.after.textHighlighterColor=N.Yellow),v&&(D.styles.after.borderShadowColor=N.Yellow),o[R]=D,o}if(!p&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const h=u[t],b=c[t],T=K.getValueType(h),v=K.getValueType(b),D=K.isPrimitiveValue(T),S=K.isPrimitiveValue(v),E=K.isPredefinedValueSet(T),C=K.isPredefinedValueSet(v),V={data:{...l,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&D,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?N.Gray:N.Yellow,textHighlighterColor:h!==void 0?N.Yellow:void 0},after:{isContentVisible:b!==void 0&&S,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?N.Gray:N.Yellow,textHighlighterColor:b!==void 0?N.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:pn,inherited:!0};return D&&(V.styles.before.textHighlighterColor=N.Yellow),S&&(V.styles.after.textHighlighterColor=N.Yellow),E&&(V.styles.before.borderShadowColor=N.Yellow),C&&(V.styles.after.borderShadowColor=N.Yellow),o[R]=V,o}}}else{const l=a.descendantDiffs[t];if(l)return o[R]=l,o}}}}class ms{static instance(e){return this.instances.has(null)||this.instances.set(null,new Lc),this.instances.get(null)}}P(ms,"instances",new Map);class jc extends Cc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=Qe()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"diffsMetaKeys");P(this,"logger");P(this,"nodeDataBuilder");P(this,"CHANGE_SEVERITIES",{[Ql]:6,[Zl]:5,[ed]:4,[nd]:3,[rd]:2,[td]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new Ac,this.nodeDataBuilder=new Mc}build(){if(!M(this.source))return this.tree;Wr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Zr,diffMetaKeys:this.diffsMetaKeys},t=ds(),a=_c({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===se.SIMPLE,isComplexNode:i=>i.type===se.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!M(o)&&!Array.isArray(o))return!0;const s=i.value();return s?this.supportJsonSchema&&(s.before.valueType===ne.JSON_SCHEMA||s.after.valueType===ne.JSON_SCHEMA||s.before.valueType===ne.MULTI_SCHEMA||s.after.valueType===ne.MULTI_SCHEMA):!1}});return bn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return M(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:se.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:c,newDataLevel:l},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const g=y.diffs[R];if(g){const{data:h}=g;if(x(h)&&u&&(u.before=K.DEFAULT_BASE_JSO_NODE_VALUE),k(h)&&u&&(u.after=K.DEFAULT_BASE_JSO_NODE_VALUE),H(h)){const{beforeValue:b}=h,T=K.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=T)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return ms.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return Hc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return fs.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return us.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return cs.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,a);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Ea(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[R];if(!t||!H(t.data))return!1;const a=K.getValueType(t.data.beforeValue),i=K.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),s=this.isJsoComplexValueType(i);return o!==s}isJsoComplexValueType(n){return n===ne.OBJECT||n===ne.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[R]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===se.SIMPLE||n.type===se.COMPLEX))}isJsoTreeNodeKind(n){return dr.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===se.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===se.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const $e={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function ys(r,e){if(e)return{type:"object",properties:{[r]:e}}}function Yt(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Jc(r,e){if(e&&!(e.valueType!==$e.JSON_SCHEMA&&e.valueType!==$e.MULTI_SCHEMA))return M(e.value)?ys(r,e.value):void 0}function Fc(r,e,n,t){if(e&&!(e.before.valueType!==$e.JSON_SCHEMA&&e.before.valueType!==$e.MULTI_SCHEMA&&e.after.valueType!==$e.JSON_SCHEMA&&e.after.valueType!==$e.MULTI_SCHEMA)){if((e.before.valueType===$e.JSON_SCHEMA||e.before.valueType===$e.MULTI_SCHEMA)&&M(e.before.value))return Yt(r,e.before.value,n,t);if((e.after.valueType===$e.JSON_SCHEMA||e.after.valueType===$e.MULTI_SCHEMA)&&M(e.after.value))return Yt(r,e.after.value,n,t)}}const Ka=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});Ka.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function ps(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function Kc(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=ps({appearance:e});return m.useMemo(()=>[a,e==="text"?z.highlighter(n):"",e==="block"?z.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const Ir=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=Kc({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(Ka,{isVisible:e,value:n,className:o})});Ir.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Ga=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Be(),i=er(),{beforeLevel:o,afterLevel:s}=va(),[l,u]=m.useState(!0),c=m.useCallback(()=>{u(q=>!q)},[]),f=e.value(),y=e.diffs,p=e.descendantDiffsSummary,g=m.useMemo(()=>y[R],[y]),h=m.useCallback(q=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Ir,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!l&&d.jsx(Aa,{values:Array.from(p)})]});const{styles:A}=g;return q===W?d.jsx(Ir,{isVisible:A.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:A.before.textHighlighterColor,borderShadowColor:A.before.borderShadowColor}):q===Q?d.jsx(Ir,{isVisible:A.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:A.after.textHighlighterColor,borderShadowColor:A.after.borderShadowColor}):d.jsx(d.Fragment,{})},[l,p,f,g]),b=m.useMemo(()=>{const q=sn(e);return ae(q,{resolveDiff:()=>g})},[e,g]),T=e.childrenNodes(),v=m.useMemo(()=>{const q=!!f,A=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==ne.UNKNOWN,O=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==ne.UNKNOWN;return q&&(A||O)},[f]),D=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),S=m.useMemo(()=>n?Fc(e.key,f,g,i):void 0,[i,e.key,f,g,n]);if(S)return i?d.jsx(pt,{schema:S,expandedDepth:2,displayMode:a,layoutMode:we,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const E=ls(T),[C,V]=(()=>{let q=o+1,A=s+1;const[O]=T,L=O==null?void 0:O.diffs[R];return L&&E&&(q=L.flags.before.increaseLevel?o+1:o,A=L.flags.after.increaseLevel?s+1:s),[q,A]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ce,{"data-precededby":t,value:`${e.key}`,expandable:v,expanded:l,onClickExpander:v?c:void 0,variant:F.body2,enableHeaderValue:D,subheader:h,usage:et.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...b}),l&&d.jsx(zn,{beforeLevel:C,afterLevel:V,children:T.map(q=>d.jsx(Ga,{"data-precededby":_.JSO_PROPERTY,node:q,supportJsonSchema:n},q.id))})]})};Ga.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const ct=m.memo(r=>r.mergedSource===null?null:d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(Gc,{...r})})),Gc=m.memo(r=>{const{mergedSource:e,displayMode:n=Tn,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:s}=r,{[ie]:l}=r,u=m.useMemo(()=>Qe(i),[i]),c=m.useMemo(()=>new jc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const p=y.childrenNodes();if(p.length===0)return null;const g=ls(p),[h,b]=(()=>{let T=t,v=t;const[D]=p,S=D.diffs[R];return S&&g&&(T=S.flags.before.increaseLevel?t:t-1,v=S.flags.after.increaseLevel?t:t-1),[T,v]})();return d.jsx(rt.Provider,{value:o,children:d.jsx(ka.Provider,{value:s,children:d.jsx(Nn.Provider,{value:n,children:d.jsx(qn.Provider,{value:we,children:d.jsx(zn,{beforeLevel:h,afterLevel:b,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:p.map((T,v)=>d.jsx(Ga,{"data-precededby":v===0?l:_.JSO_PROPERTY,node:T,supportJsonSchema:a},T.id))})})})})})})});ct.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class Bc extends ha{constructor(){super()}}function gs(){return{"/*":()=>gs(),kind:ft.PROPERTY}}function Uc(r){return zr(r)}const Yc=new Set(dr);class Wc extends Xr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==ft.PROPERTY?null:K.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Yc.has(e)}}class $c extends Qr{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=Qe()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new No);P(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new Bc,this.nodeDataBuilder=new Wc}build(){if(!M(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Zr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=gs();return this.crawlHooks=Uc({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(a,i,o,s,l)=>this.createNodeFromRaw(a,i,o,s,l),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!M(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===ne.JSON_SCHEMA||o.valueType===ne.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Td}}),bn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:To(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};bn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:se.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,{...o,parent:s,container:l}),f=this.createNodeMeta(t,o),y={type:se.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===se.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const mt=r=>d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"JSON Schema Viewer"}),children:d.jsx(zc,{...r})}),zc=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Tn,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:s=0}=r,l=m.useMemo(()=>dc(e),[e]),c=m.useMemo(()=>new _o(l,n),[n,l]).root;let f=null;return tt(c)&&(f=d.jsx(yt,{state:c,overriddenKind:a})),at(c)&&(f=d.jsx(dt,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(ut.Provider,{value:o,children:d.jsx(Fa.Provider,{value:i,children:d.jsx(Nn.Provider,{value:t,children:d.jsx(Pe.Provider,{value:s,children:f})})})})};mt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const hs=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=ps({appearance:t});return d.jsx(Ka,{isVisible:e,value:n,className:a})});hs.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ba=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Be(),i=Fe(),[o,s]=m.useState(!0),l=m.useCallback(()=>{s(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(hs,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),p=m.useMemo(()=>n?Jc(e.key,u):void 0,[e.key,u,n]);return p?d.jsx(mt,{schema:p,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ce,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:l,variant:F.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:et.JsoProperty}),o&&d.jsx(Pe.Provider,{value:i+1,children:y.map(g=>d.jsx(Ba,{"data-precededby":_.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};Ba.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const yr=m.memo(r=>r.source===null?null:d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"JSO Viewer"}),children:d.jsx(Xc,{...r})})),Xc=m.memo(r=>{const{source:e,displayMode:n=Tn,layoutMode:t=Xe,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[ie]:s}=r,l=m.useMemo(()=>Qe(o),[o]),u=m.useMemo(()=>new $c({source:e,supportJsonSchema:i,logger:l}),[e,i,l]),c=m.useMemo(()=>u.build(),[u]);l.debug("[JSO] Source:",e),l.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(Nn.Provider,{value:n,children:d.jsxs(qn.Provider,{value:t,children:[" ",d.jsx(Pe.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((p,g)=>d.jsx(Ba,{"data-precededby":g===0?s:_.JSO_PROPERTY,node:p,supportJsonSchema:i},p.id))})})]})})});yr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const Ii=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=Fe(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const s=new Set;return n===W&&(x(e)&&(s.add(z.background(N.Gray)),o=!1),k(e)&&s.add(z.background(N.Red))),n===Q&&(x(e)&&s.add(z.background(N.Green)),k(e)&&(s.add(z.background(N.Gray)),o=!1)),{diffStylesClasses:Array.from(s),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row h-full ${a.join(" ")}`,children:[d.jsx(In,{level:t+1,lastInvisible:!0}),i&&d.jsx(Ro,{children:"Extensions"})]})}),Qc=[],bs=r=>{const{extensions:e,$nodeChange:n}=r,t=Fe(),a=Be(),i=pe(),o=er(),s=i===mi,l=i===we,u=m.useMemo(()=>{let g=Zc(n);return g||(g=nm(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(k(u)||H(u))&&(g=u.beforeDeclarationPaths[0]??[]),x(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(In,{level:t+1,lastInvisible:!0}),d.jsx(Ro,{children:"Extensions"})]});switch(i){case mi:return null;case we:return d.jsx(Pn,{diffType:c,diffTypeCause:f,children:d.jsx(En,{left:d.jsx(Ii,{diff:u,layoutSide:W}),right:d.jsx(Ii,{diff:u,layoutSide:Q})})});default:return g}},[i,t,u,f,c]),p=m.useMemo(()=>{if(s)return null;if(l&&o){const g=em(e,u,o);return d.jsx(ct,{mergedSource:g,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:Qc})}return d.jsx(yr,{source:e,initialLevel:t+1})},[s,l,o,e,t,u,a]);return p?d.jsxs("div",{className:"flex flex-col",children:[y,p]}):null};function Zc(r){if(!r)return;const{depth:e,...n}=r;return n}function em(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)qr(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function nm(r,e){var s;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=oe(re(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const l of i)if(((s=a[l])==null?void 0:s.action)!==(o==null?void 0:o.action))return;return o}bs.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const rm=["type","nullable","title","format"],tm=["required","readOnly","writeOnly","deprecated"],Ss=r=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:a,readOnly:i,writeOnly:o,deprecated:s,isExpandable:l,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:y=ho,level:p=0,$changes:g,$metaChanges:h,$nodeChange:b,$nodeChangesSummary:T}=r,v=!!b,D=ad(),S=xc(),E=ur(S)&&(n!=null&&n.title)&&S[n.title]?S[n.title]:void 0,C=id(v?void 0:T),V=m.useCallback(de=>D.length===0||D.includes(de),[D]),{isDocumentLayoutMode:q,isInlineDiffsLayoutMode:A,isSideBySideDiffsLayoutMode:O}=bo(y),L=!!g&&rm.some(de=>Yn(g[de]))||!!h&&tm.some(de=>Yn(h[de])),{nodeAdded:I,nodeRemoved:j,nodeReplaced:B,nodeRenamed:Z}={nodeAdded:v&&b.action===J.add,nodeRemoved:v&&b.action===J.remove,nodeReplaced:v&&b.action===J.replace,nodeRenamed:v&&b.action===J.rename},Ne=od(sd(g,h,ud),D),[ge,Ve]=v?Lr(b):L?Lr(...Ne):ld,Ze=dd(ge,D),An=v?yi[b==null?void 0:b.action]:L?yi[J.replace]:"",U=({layoutSide:de})=>{const en=O?"w-1/2":"w-full",he=!q&&!v&&L&&!!(h!=null&&h.required),X=Bd(),fe=X&&X===de,je=c&&!l,Cn=["flex flex-row",!je&&"gap-2",en].filter(Boolean).join(" "),Fn=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(Mo,{...t,showNullable:!0,layoutMode:y,layoutSide:de,$changes:g})}),ga.isNotEmpty(C)&&!q&&l&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(Aa,{values:C,filter:V})}),a&&d.jsx(it,{text:Ca,children:d.jsx(Va,{})}),d.jsx(_a,{requiredChanged:he,readOnly:i,writeOnly:o,deprecated:s,layoutSide:de,isNodeChanged:v,isContentChanged:L,$nodeChange:b,$metaChanges:h}),E&&d.jsx(fd,{label:E,colorSchema:cd(md),layoutMode:y,layoutSide:de,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:Cn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(In,{level:p}),je?d.jsx("div",{className:"w-5"}):d.jsx(Ud,{isRoot:c,isExpandable:l,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${l?"hover:cursor-pointer":""}`,onClick:l?f:void 0,children:d.jsx(Yd,{...n,showRequired:!0,layoutMode:y,layoutSide:de,requiredChange:h==null?void 0:h.required,titleChange:b})}),!fe&&d.jsx(Fn,{})]})]})};return q?d.jsx("div",{className:"flex flex-row",children:d.jsx(U,{...r,layoutSide:Q})}):A?!v&&!L?d.jsx("div",{className:"flex flex-row",children:d.jsx(U,{...r,layoutSide:W})}):d.jsxs("div",{className:`flex flex-row relative ${Ze?An:""}`,children:[ge&&Ze&&d.jsx(pi,{variant:ge,message:Ve}),d.jsx(U,{...r,layoutSide:W})]}):O?!v&&!L?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(U,{...r,layoutSide:W}),d.jsx(U,{...r,layoutSide:Q})]}):d.jsxs("div",{className:`flex flex-row relative ${Ze?An:""}`,children:[ge&&Ze&&d.jsx(pi,{variant:ge,message:Ve}),!v&&L||v&&(j||B||Z)?d.jsx(U,{...r,layoutSide:W}):d.jsx(gi,{level:(b==null?void 0:b.depth)??p}),!v&&L||v&&(I||Z||B)?d.jsx(U,{...r,layoutSide:Q}):d.jsx(gi,{level:(b==null?void 0:b.depth)??p})]}):d.jsx(Gd,{layoutMode:y})};Ss.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function am(r,e){var S,E,C;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,s=o==null?void 0:o.exclusiveMinimum,l=o==null?void 0:o.exclusiveMaximum,u=typeof s=="number"?s:s===!0&&ue(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof l=="number"?l:l===!0&&ue(o==null?void 0:o.maximum)?o.maximum:void 0,f=s===!0||o==null?void 0:o.minimum,y=l===!0||o==null?void 0:o.maximum,p=o==null?void 0:o.multipleOf,g=(C=(E=(S=r==null?void 0:r.parent)==null?void 0:S.value())==null?void 0:E.propertyNames)==null?void 0:C.enum,h=e==null?void 0:e.minProperties,b=e==null?void 0:e.maxProperties,T=e==null?void 0:e.uniqueItems,v=e==null?void 0:e.minItems,D=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:p},object:{allowedPropertyNames:g,minProperties:h,maxProperties:b},array:{uniqueItems:T,minItems:v,maxItems:D}}}const im="?",ye="{value}",tn="{exclusive_value}",mn=">",Ar=">=",yn="<",Cr="<=",be=1,Se=2,ve=4,De=8,Vr={0:{lower:void 0,upper:void 0},[be]:{lower:`${Ar} ${ye}`,upper:void 0},[Se]:{lower:`${mn} ${tn}`,upper:void 0},[ve]:{lower:void 0,upper:`${Cr} ${ye}`},[De]:{lower:void 0,upper:`${yn} ${tn}`},[Se|be]:{lower:`${mn} ${ye}`,upper:void 0},[Se|ve]:{lower:`${mn} ${tn}`,upper:`${Cr} ${ye}`},[Se|De]:{lower:`${mn} ${tn}`,upper:`${yn} ${tn}`},[De|be]:{lower:`${Ar} ${ye}`,upper:`${yn} ${tn}`},[De|ve]:{lower:void 0,upper:`${yn} ${ye}`},[ve|be]:{lower:`${Ar} ${ye}`,upper:`${Cr} ${ye}`},[Se|be|ve]:{lower:`${mn} ${ye}`,upper:`${Cr} ${ye}`},[Se|be|De]:{lower:`${mn} ${ye}`,upper:`${yn} ${tn}`},[Se|ve|De]:{lower:`${mn} ${tn}`,upper:`${yn} ${ye}`},[De|be|ve]:{lower:`${Ar} ${ye}`,upper:`${yn} ${ye}`},[be|Se|ve|De]:{lower:`${mn} ${ye}`,upper:`${yn} ${ye}`}};function _r(r){return r!==void 0&&r!==!1}function Rr(r){return r!==void 0&&r!==!1}function Oi(r,e,n){return(r&(be|Se))!==(be|Se)||n===void 0||typeof e!="number"?r:n>=e?r&~be:r&~Se}function Pi(r,e,n){return(r&(ve|De))!==(ve|De)||n===void 0||typeof e!="number"?r:n<=e?r&~ve:r&~De}function Mr(r,e,n){return r.replace(ye,`${e}`).replace(tn,ue(n)?`${n}`:im)}function om(r,e,n){var fe,je;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,s=r.exclusiveMaximum,l=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=Lr(l,u),[p]=Lr(c,f),g=ue(a),h=ue(o),b=ue(l),T=ue(c),v=ue(u),D=ue(f),S=gr(l),E=Kn(l),C=dn(l),V=gr(c),q=Kn(c),A=dn(c),O=typeof i=="number"?i:void 0,L=typeof s=="number"?s:void 0;let I=0,j=0;g&&(!b||S||C)&&(j|=be),_r(i)&&(!v||gr(u)||dn(u)&&Rr(u==null?void 0:u.afterValue))&&(j|=Se),h&&(!T||V||A)&&(j|=ve),_r(s)&&(!D||gr(f)||dn(f)&&Rr(f==null?void 0:f.afterValue))&&(j|=De),typeof i!="number"&&!(j&be)&&(j&=~Se),typeof s!="number"&&!(j&ve)&&(j&=~De),j=Oi(j,a,O),j=Pi(j,o,L);const B=j in Vr?{...Vr[j]}:void 0;if(B!=null&&B.lower&&(B.lower=Mr(B.lower,a,O)),B!=null&&B.upper&&(B.upper=Mr(B.upper,o,L)),t.data.lower=B==null?void 0:B.lower,t.data.upper=B==null?void 0:B.upper,!b&&!v&&!T&&!D)return t.visible=Hi(t.data.lower,t.data.upper),t;let Z,Ne,ge,Ve;g&&!b&&(Z=a,I|=be),(E||C)&&(Z=l.beforeValue,I|=be),h&&!T&&(Ne=o,I|=ve),(q||A)&&(Ne=c.beforeValue,I|=ve),_r(i)&&!v&&(I|=Se,ge=O),(dn(u)||Kn(u))&&Rr(u==null?void 0:u.beforeValue)&&(I|=Se,typeof u.beforeValue=="number"&&(ge=u.beforeValue)),_r(s)&&!D&&(I|=De,Ve=L),(dn(f)||Kn(f))&&Rr(f==null?void 0:f.beforeValue)&&(I|=De,typeof f.beforeValue=="number"&&(Ve=f.beforeValue)),(!v&&typeof i!="number"||(dn(u)||Kn(u))&&typeof u.beforeValue!="number")&&!(I&be)&&(I&=~Se),(!D&&typeof s!="number"||(dn(f)||Kn(f))&&typeof f.beforeValue!="number")&&!(I&ve)&&(I&=~De),I=Oi(I,Z,ge),I=Pi(I,Ne,Ve);const U=I in Vr?{...Vr[I]}:void 0;U!=null&&U.lower&&(U.lower=Mr(U.lower,Z,ge)),U!=null&&U.upper&&(U.upper=Mr(U.upper,Ne,Ve)),(fe=t.data).lower??(fe.lower=U==null?void 0:U.lower),(je=t.data).upper??(je.upper=U==null?void 0:U.upper),t.visible=Hi(t.data.lower,t.data.upper);const de=Li(y,U==null?void 0:U.lower,B==null?void 0:B.lower),en=Li(p,U==null?void 0:U.upper,B==null?void 0:B.upper),he=ji(l,u),X=ji(c,f);return de&&(Ji(de,he),t.changes.lower=de),en&&(Ji(en,X),t.changes.upper=en),t.changesKeys=Rn(t.data,n),t}function Hi(r,e){return!!r||!!e}function Li(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:J.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:J.remove,beforeValue:e}:{type:r,action:J.replace,beforeValue:e,afterValue:n}}function ji(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(So(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),vo(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Ji(r,e){if(r)return So(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),vo(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const Vn={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},vs=r=>{var X,fe,je,Cn,Fn,Ke;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,s=n.value,l=s,u=(X=n.parent)==null?void 0:X.value,c=(fe=n.parent)==null?void 0:fe.value,f=Fe(),y=pe(),p=Wd(a),g=$d(a),h=zd(s),b=Xd(s),T=qo(s),v=jt(s)||jt(u),{any:D,string:S,number:E,object:C,array:V}=am(a,s),q={minimum:s==null?void 0:s.minimum,exclusiveMinimum:s==null?void 0:s.exclusiveMinimum,maximum:s==null?void 0:s.maximum,exclusiveMaximum:s==null?void 0:s.exclusiveMaximum},A=(je=l==null?void 0:l.$changes)==null?void 0:je.minimum,O=(Cn=l==null?void 0:l.$changes)==null?void 0:Cn.exclusiveMinimum,L=(Fn=l==null?void 0:l.$changes)==null?void 0:Fn.maximum,I=(Ke=l==null?void 0:l.$changes)==null?void 0:Ke.exclusiveMaximum,j={minimum:Yn(A)?A:void 0,exclusiveMinimum:Yn(O)?O:void 0,maximum:Yn(L)?L:void 0,exclusiveMaximum:Yn(I)?I:void 0},{data:B,changes:Z,changesKeys:Ne,visible:ge}=om(q,j,Vn.valueRange),Ve=Rn(S,Vn.valueLength),Ze=Rn(S,Vn.valuePattern),An=Rn(E,Vn.multipleOf),U=Rn(C,Vn.propertiesCount),de=Rn(V,Vn.uniqueItems),en=Rn(V,Vn.itemsCount),he=go(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(D==null?void 0:D.allowedValues)&&d.jsx(hi,{shift:e,$changesKey:"enum",title:Qd,items:D.allowedValues,layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),h&&d.jsxs(d.Fragment,{children:[(ue(S==null?void 0:S.minLength)||ue(S==null?void 0:S.maxLength))&&d.jsx(un,{shift:e,$changesKeys:Ve,title:Ra,items:{minLength:S==null?void 0:S.minLength,maxLength:S==null?void 0:S.maxLength},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes}),ue(S==null?void 0:S.pattern)&&d.jsx(un,{shift:e,$changesKeys:Ze,title:Ma,items:{pattern:S==null?void 0:S.pattern},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]}),b&&d.jsxs(d.Fragment,{children:[ge&&d.jsx(un,{shift:e,$changesKeys:Ne,title:qa,items:B,layoutMode:y,level:f,$nodeChange:he,$changes:Z}),ue(E==null?void 0:E.multipleOf)&&d.jsx(un,{shift:e,$changesKeys:An,title:Ia,items:{multipleOf:E==null?void 0:E.multipleOf},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]}),v&&d.jsxs(d.Fragment,{children:[g&&d.jsx(un,{shift:e,$changesKeys:[],title:Zd,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:he}),p&&(C==null?void 0:C.allowedPropertyNames)&&d.jsx(hi,{shift:e,$changesKey:"propertyNames",title:eu,items:C.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:he,$changes:c==null?void 0:c.$changes}),(ue(C==null?void 0:C.minProperties)||ue(C==null?void 0:C.maxProperties))&&d.jsx(un,{shift:e,$changesKeys:U,title:Oa,items:{minProperties:C==null?void 0:C.minProperties,maxProperties:C==null?void 0:C.maxProperties},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]}),T&&d.jsxs(d.Fragment,{children:[ue(V==null?void 0:V.uniqueItems)&&d.jsx(un,{shift:e,$changesKeys:de,title:Pa,items:{uniqueItems:`${V.uniqueItems}`},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes,isPredefinedValuesSet:!0}),(ue(V==null?void 0:V.minItems)||ue(V==null?void 0:V.maxItems))&&d.jsx(un,{shift:e,$changesKeys:en,title:Ha,items:{minItems:V==null?void 0:V.minItems,maxItems:V==null?void 0:V.maxItems},layoutMode:y,level:f,$nodeChange:he,$changes:l==null?void 0:l.$changes})]})]})};vs.__docgenInfo={description:"",methods:[],displayName:"Validations"};const Ds=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,s=Fe(),l=e.meta,u=l,c=e.value,f=c,y=nu(),p=pe(),g=Io(e),[h,b]=m.useState(!1),[T,v]=m.useState(0);m.useEffect(()=>{const A=e.children.filter(tt).length===0;(!ru(o)||e.expanded&&A)&&!o.isCycle?b(!0):b(e.expanded),v(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const D=!tu(o),S=!au(o),E=Oo(o),C=E,V=ss(),q=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(Ss,{nodeId:o.id,nodeTitleData:iu({node:o,nodeValue:c,nodeMeta:l,customizationOptions:V}),nodeTypeData:xa({node:o,nodeValue:c,customizationOptions:V}),isCircularRef:o.isCycle,readOnly:l==null?void 0:l.readOnly,writeOnly:l==null?void 0:l.writeOnly,deprecated:l==null?void 0:l.deprecated,isExpandable:g,expanded:e.expanded,sorted:T,isRoot:E,onToggleExpander:t,onToggleSort:a,layoutMode:p,level:s,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&h&&D&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:S&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(ou,{shift:C,state:e,$nodeChange:i}),d.jsx(vs,{shift:C,state:e,$nodeChange:i}),q&&d.jsx(bs,{extensions:q,$nodeChange:i})]})})]})};Ds.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const ws=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=pe();return d.jsx(d.Fragment,{children:n.map((s,l)=>tt(s)?d.jsxs("div",{children:[!e&&i&&s.first&&d.jsx(su,{shift:!1,NodeType:Mo,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(yt,{state:s,$nodeChange:a},`prop-${l}`)]},`prop-${l}`):at(s)?d.jsx(dt,{state:s,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${l}`):null)})};ws.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const yt=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,s=o.filter(Z=>!at(Z)),l=i,u=e.meta,c=Oo(a),f=jt(i),y=qo(i),p=lu(i),g=Fe(),h=e.node.newDataLevel,b=!c&&h?g+1:g,T=Io(e),[v,D]=m.useState(!1),[,S]=m.useState(0);m.useEffect(()=>{D(e.expanded),S(e.sorted)},[e.expanded,e.sorted]);const[,E]=m.useState(),C=Z=>{Z&&(e.setSelected(Z),E(e.selected))},[V,q]=m.useState(void 0),A=Z=>{if(Z){const Ne=cu(Z);q(Ne)}},O=t??(u==null?void 0:u.$nodeChange),L=yd(s),I=n==="parameters"&&c&&(f||y)&&!p,j=xa({node:a,nodeValue:i});j==null||delete j.combiner;const B=j?{nodeTypeData:j,nodeDepth:b+1,$nodeChange:O??L,$changes:l==null?void 0:l.$changes}:void 0;return d.jsx(Pe.Provider,{value:b,children:d.jsx(du,{value:V,setValue:A,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(Ds,{state:e,disableNestingHeader:I,onToggleExpander:Z=>uu(e,D,Z),onToggleSort:()=>fu(e,S),$nodeChange:O}),T&&v&&d.jsx(ws,{disableNestingHeader:I,items:o,onGlobalSelectNestedNode:C,$nodeChange:O,nestingIndicatorTitleData:B})]})})})};yt.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const pt=r=>d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(sm,{...r})}),sm=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Tn,layoutMode:a=ho,filters:i=[],overriddenKind:o,metaKeys:s,topLevelPropsMediaTypes:l}=r;Wr(e,s.diffsMetaKey,s.aggregatedDiffsMetaKey);const u=m.useMemo(()=>fc(e,s),[s,e]),c=m.useMemo(()=>new _o(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return tt(f)&&(y=d.jsx(yt,{state:f,overriddenKind:o})),at(f)&&(y=d.jsx(dt,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(Fa.Provider,{value:l,children:d.jsx(pd.Provider,{value:i,children:d.jsx(Nn.Provider,{value:t,children:d.jsx(qn.Provider,{value:a,children:d.jsx(rt.Provider,{value:s,children:d.jsx(Pe.Provider,{value:0,children:y})})})})})})};pt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const lm=" or null";function hn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(nr(r))return"";const n=r,t=(n==null?void 0:n.type)??$n,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?lm:"";let s=String(t);return a&&(s+=`(${a})`),i&&(s+=`<${i}>`),s+=o,s}function Fi(r){return r!=null}function Ns(r){const e=Ln(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(Te.MIN_LENGTH),t.maxLength!==void 0&&n.push(Te.MAX_LENGTH),t.pattern!==void 0&&n.push(Te.PATTERN);const a=e;a.minimum!==void 0&&n.push(Te.MINIMUM),a.maximum!==void 0&&n.push(Te.MAXIMUM),Fi(a.exclusiveMinimum)&&n.push(Te.EXCLUSIVE_MINIMUM),Fi(a.exclusiveMaximum)&&n.push(Te.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(Te.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(Te.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(Te.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(Te.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(Te.MIN_ITEMS),o.maxItems!==void 0&&n.push(Te.MAX_ITEMS),n}function dm(r){return r!=null}function um(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const fm="x-deprecated-reason";function cm(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[fm];return typeof e=="string"&&e.length>0?e:void 0}class Ts{resolveNodeVisibility(e,n){const t=e.value(),a=Ln(t),i=ko(n),o=cm(a),s=i&&!!(a!=null&&a.description),l=i&&!!o,u=i&&dm(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&Ns(t).length>0,p=i&&um(a),g=u||c||f||y||p;return{showDescription:s,showDeprecationReasonRow:l,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:p,showContentSection:s||l||g,showAnyAdditionalInfoRow:g}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&Fo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const rr=new Ts;function Ua(r,e){return rr.resolveNodeVisibility(r,e)}function Ya(r,e){return rr.resolveListLastRowFlags(r,e)}function mm(r,e){return rr.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function Es(r){return rr.resolveIsExpandable(r)}function ks(r,e){return rr.resolveInitiallyExpanded(r,e)}function Mn(r,e){return rr.resolveExpanderExpanded(r,e)}const xs=" or null";function As(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function ym(r,e){const n=Ln(r.value()),t=(n==null?void 0:n.type)??$n,a=As(r);return nt(t,a==null?void 0:a.type,e)??String(t)}function Wa(r,e,n){if(e!=null&&e.brokenRef)return{kind:an.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if(nr(t))return{kind:an.NO_DIFFS,text:""};const a=As(r);if(!a)return{kind:an.NO_DIFFS,text:hn(t,e)};if(pm(a)){const c=Object.values(a).find(Boolean);return c?{kind:an.WHOLE_DIFFS,text:gm(t,a,n),diff:Sm(c)}:{kind:an.NO_DIFFS,text:hn(t,e)}}const i=[],o=hm(t,a.type,n);o&&i.push(o);const s=Ki(Cs(t),a.format,n,Vs);s&&i.push(s);const l=Ki(t==null?void 0:t.title,a.title,n,_s);l&&i.push(l);const u=bm(t);return u&&i.push(u),i.length===0?{kind:an.NO_DIFFS,text:hn(t,e)}:{kind:an.PARTIAL_DIFFS,segments:i}}function pm(r){const e=Uo.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function gm(r,e,n){const t=[],a=nt((r==null?void 0:r.type)??$n,e.type,n)??(r==null?void 0:r.type)??$n;t.push(String(a));const i=Wt(Cs(r),e.format,n,Vs);i&&t.push(i);const o=Wt(r==null?void 0:r.title,e.title,n,_s);return o&&t.push(o),r!=null&&r.nullable&&t.push(xs.trim()),t.join(" ")}function hm(r,e,n){const t=(r==null?void 0:r.type)??$n,a=nt(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function Ki(r,e,n,t){const a=Wt(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function Wt(r,e,n,t){const a=nt(r,e,n);if(a===void 0)return!e&&Gi(r)?t(r):void 0;if(Gi(a))return t(a)}function bm(r){if(!(nr(r)||!(r!=null&&r.nullable)))return{text:xs.trim()}}function Cs(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function Gi(r){return!!r&&r.trim().length>0}function Vs(r){return`(${r})`}function _s(r){return`<${r}>`}function Sm(r){const{data:e}=r;return H(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Yellow}}}:x(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Green}}}:k(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:N.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function vm(r){return r.diffs}function Dm(r){return vm(r)[gn]??r.diffs[R]}function jn(r){return r.diffs}function Br(r){return jn(r).nestingIndicatorRowColorizingDiff}function wm(r){return jn(r).nodeChangesSummary}function Nm(r){var e;return(e=Ms(r))==null?void 0:e.required}function Rs(r){if(!(r!=null&&r.data))return;const e=r.data;return x(e)?{type:e.type,scope:e.scope,description:e.description,action:J.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:k(e)?{type:e.type,scope:e.scope,description:e.description,action:J.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:H(e)?{type:e.type,scope:e.scope,description:e.description,action:J.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function Tm(r){return Rs(Nm(r))}function Ms(r){if(r.kind===Y.PROPERTY)return r.diffs}function qs(r){const e=jn(r),n=Ms(r),t={};for(const i of Wn){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=Rs(a)),t}function xn(r){return r.diffs}function $t(r){return xn(r).default}function Is(r){return xn(r).defaultRowColorizingDiff}function Os(r){return xn(r).enumDiff}function Ps(r){return xn(r).enumValueDiffs}function Hs(r){return xn(r).enumRowColorizingDiff}function Ls(r){return xn(r).examplesDiff}function js(r){return xn(r).examplesValueDiffs}function Js(r){return xn(r).examplesRowColorizingDiff}function Ur(r,e){var n;return(n=jn(r).validationRowDiffs)==null?void 0:n[e]}function Fs(r,e){var n;return(n=jn(r).validationRowValueDiffs)==null?void 0:n[e]}function $a(r,e){var n;return(n=jn(r).validationRowColorizingDiffs)==null?void 0:n[e]}function Em(r){return jn(r).valueRangeCrawlDiffs}function Bi(r,e){if(Ur(r,e)||$a(r,e))return!0;const n=Fs(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}const Ks="<empty string>";function km(r){return JSON.stringify(r).slice(1,-1)}function Un(r){return typeof r=="string"?r===""?Ks:km(r):typeof r=="object"&&r!==null?JSON.stringify(r,null,2):JSON.stringify(r)}function xm(r){return r===Ks}function Ui(r,e,n){if(!e)return r===void 0?[]:[{text:Un(r)}];const t=n===W,{data:a}=e;if(x(a))return t?[]:[{text:Un(a.afterValue??r)}];if(k(a))return t?[{text:Un(a.beforeValue??r)}]:[];if(H(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Un(i)}]}return r===void 0?[]:[{text:Un(r)}]}function Ce(r){return Un(r)}function za(r,e,n){const t=n===W,{data:a}=e;return x(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):k(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Ce(o)})):[]:H(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):r.map(i=>({text:Ce(i)}))}function Gs(r,e,n){const t=n===W,a=new Set,i=[];for(let s=0;s<r.length;s++){const l=String(s),u=e==null?void 0:e[l],c=Ce(r[s]);if(!u){i.push({text:c});continue}if(a.has(l))continue;a.add(l);const{data:f}=u;if(x(f)){t||i.push({text:Ce(f.afterValue??r[s]),valueDiffKey:l});continue}if(k(f)){t&&i.push({text:Ce(f.beforeValue??r[s]),valueDiffKey:l});continue}H(f)&&i.push({text:Ce(t?f.beforeValue??r[s]:f.afterValue??r[s]),valueDiffKey:l})}for(const[s,l]of Object.entries(e??{}))!l||a.has(s)||k(l.data)&&t&&(i.push({text:Ce(l.data.beforeValue),valueDiffKey:s}),a.add(s));const o=s=>{for(let l=0;l<r.length;l++)if(Ce(r[l])===s)return l;return r.length};return i.sort((s,l)=>o(s.text)-o(l.text))}function tr(r,e,n,t){return n===void 0?t:Qo(r,e,n)}function Am(r,e,n){if(e)return Object.keys(e).find(t=>Zo(t,r)===n)}function Cm(r,e,n,t){const a=t===W,i=new Set,o=[];for(let l=0;l<e.length;l++){const u=Am(e,n,l),c=u?n==null?void 0:n[u]:void 0,f=Ce(e[l]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(x(y)){a||o.push({text:tr(r,u,y.afterValue??e[l],f),valueDiffKey:u});continue}if(k(y)){a&&o.push({text:tr(r,u,y.beforeValue??e[l],f),valueDiffKey:u});continue}H(y)&&o.push({text:a?tr(r,u,y.beforeValue??e[l],f):tr(r,u,y.afterValue??e[l],f),valueDiffKey:u})}for(const[l,u]of Object.entries(n??{}))!u||i.has(l)||k(u.data)&&a&&(o.push({text:tr(r,l,u.data.beforeValue,Ce(u.data.beforeValue)),valueDiffKey:l}),i.add(l));const s=(l,u)=>{if(l)return Zo(l,e);for(let c=0;c<e.length;c++)if(Ce(e[c])===u)return c;return e.length};return o.sort((l,u)=>s(l.valueDiffKey,l.text)-s(u.valueDiffKey,u.text))}function Vm(r,e,n,t){return e?za(r,e,t):Gs(r,n,t)}function _m(r,e,n,t){return e?za(r,e,t):Gs(r,n,t)}function Rm(r,e,n,t,a,i){return r===te.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?Hf(Bt(i.nodeValue),i.crawlDiffs,a,n,t):n?za(e,n,a):Cm(r,e,t,a)}function Vt(r,e){return e?r==null?void 0:r[e]:void 0}const Mm=new Ts;function qm(r){return r!=null}function Im(r){return Object.keys(Kt).some(e=>!!Ur(r,e)||!!$a(r,e))}class Om{resolveNodeVisibility(e,n){const t=e.value(),a=Ln(t),i=Mm.resolveNodeVisibility(e,n),o=ko(n),s=o&&(!!(a!=null&&a.description)||!!e.diffs.description),l=o&&(i.showEnumValuesRow||!!Os(e)||!!Ps(e)||!!Hs(e)),u=o&&(qm(a==null?void 0:a.default)||!!$t(e)||!!Is(e)),c=o&&(i.showExamplesRow||!!Ls(e)||!!js(e)||!!Js(e)),f=o&&(Ns(t).length>0||Im(e)),y=u||c||l||f||i.showExtensionsRow,p=s||i.showDeprecationReasonRow||y;return{...i,showDescription:s,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:l,showValidationsSection:f,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Ya(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return mm(e,n)}}const Pm=new Om;function Xa(r,e){return Pm.resolveNodeVisibility(r,e)}function Bs(r,e){return r.isCycle?!1:Es(r)?e.hideUnchangedNodes?e.isRoot||r.kind===Y.ROOT?!0:ns(r):e.level<e.expandedDepth:!0}function Us(r,e,n){if(!n)return r;const t=e===W;return(n===J.add?t:!t)?Math.max(r-1,0):r}var vn=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(vn||{});const Hm={[vn.JsonSchema]:Da};function Lm(r){return Hm[r]??cr}const sr=m.memo(r=>{const{title:e,layoutSide:n,usage:t=vn.Default,lastInvisible:a=!1,diff:i,levelReductionAction:o}=r,{[ie]:s}=r,l=wa(n),u=m.useMemo(()=>Us(l,n,o),[l,n,o]),c=m.useMemo(()=>Lm(t),[t]),f=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:b}=i,T=[];return n===W&&T.push(z.background(b.before.backgroundColor)),n===Q&&T.push(z.background(b.after.backgroundColor)),T},[i,n]),y=m.useMemo(()=>{const b=i==null?void 0:i.data;return b?x(b)?n===Q:k(b)?n===W:!0:!0},[i,n]),p=t===vn.JsonSchema,g=typeof e=="function"?e(n):e,h=y&&g!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":s,className:["nesting-indicator-title-row-content flex w-full h-full",p?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(In,{level:u,lastInvisible:a&&y})}),h&&d.jsx(mu,{title:g})]})});sr.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const gt=m.memo(r=>{const e=pe(),{diffsSeverities:n,diffsSeverityPlacement:t=G.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case we:return d.jsx(Pn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(En,{left:d.jsx(sr,{...r,layoutSide:W}),right:d.jsx(sr,{...r,layoutSide:Q})})});case Xe:return d.jsx(On,{content:d.jsx(sr,{...r,layoutSide:Q})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});gt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Qa=m.createContext(null);function Ys(){const r=m.useContext(Qa);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const jm=new Set([Y.ALL_OF,Y.ANY_OF,Y.ONE_OF]);class Jm{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>1,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return jm.has(e)}}const Ws=new Jm;function Fm(r){return Ws.resolveNodeVisibility(r)}function Za(r){return Ws.isCombinerKind(r)}function ei(r){return r.kind===Y.ROOT}function Xn(r){if(r.type!==se.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:ei(r)?!0:e.every(n=>Za(n.kind))}function Km(r){return Za(r)}function Gm(r){var e;return jr((e=Ln(r.value()))==null?void 0:e.type)}function Bm(r,e){return jr(ym(r,e))}function $s(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!Km(n)))return n}function zs(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function Xs(r,e){const n=[];let t=r;for(;t&&Xn(t);){const a=t.nestedNodes(),i=zs(t,a,e);if(!i)break;const o=Fm(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:$s(t)}),Xn(i)){t=i;continue}break}return n}function Qs(r,e){let n=r;for(;Xn(n);){const t=n.nestedNodes(),a=zs(n,t,e);if(!a)break;n=a}return n}const Um=new Map;function Zs(r){return Qs(r,Um)}function Ym(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set(Xs(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function ni(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!M(n)||Jr(n)?null:n}function Wm(r){if(r.type===se.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Za(n.kind))?e:r.childrenNodes()}const zt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:N.Yellow}};function el(r){return r&&H(r.data)?{...r,styles:zt}:{data:{type:"annotation",action:J.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:zt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}function ir(r){const e=r.data,n={type:e.type,causedAt:[]};return k(e)||H(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:x(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function $m(r){return ir({data:r,styles:zt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe})}function Xt(r,e){if(!(!r||typeof r!="object")){if(Sa(r)){e.push(r);return}for(const n of Object.values(r))Xt(n,e)}}function zm(...r){let e;for(const n of r)n&&(!e||xe.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function nl(r){const e=r.diffs[R];return!!e&&(x(e.data)||k(e.data))}function Xm(r){const e=r.nestedNodes();if(e.length===0)return;let n;for(const t of e){if(!le(t))return;const a=t.diffs[R],i=a&&x(a.data)?J.add:a&&k(a.data)?J.remove:void 0;if(!i)return;if(!n){n=i;continue}if(n!==i)return}return n}function Qm(r){if(le(r)&&!nl(r))return Xm(r)}function Zm(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function rl(r){return le(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>le(e)&&Zm(e)):!1}function ey(r){if(!(!le(r)||!rl(r)))return el(r.diffs[R])}function ny(r){if(!le(r)||!rl(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(ir(o));for(const o of r.nestedNodes()){if(!le(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const s=[];for(const u of Object.values(o.diffs))Xt(u,s);for(const u of s)e.push(ir(u));const l=Lt([...o.diffsSummary,...o.descendantDiffsSummary]);l&&e.push({type:l,causedAt:[]})}const n=r.diffs[R];n&&e.push(ir(n));const t=[];for(const o of Object.values(r.diffs))Xt(o,t);for(const o of t)e.push(ir(o));const a=Lt([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=zm(...e);if(!i){const o=el(n);return{[G.TitleRow]:$m(o.data)}}return{[G.TitleRow]:i}}function ry(r){if(le(r)){const e=Br(r);if(e){const n=r.diffsSeverities[G.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[G.TitleRow]:n}:void 0}}}return{selectorRowDiff:ey(r),diffsSeverities:ny(r)}}function ri(r){if(!Xn(r))return"";const e=$s(r);return e?` (${e})`:""}function ty(r,e,n=hn(ni(r),r.meta())+ri(r)){const t={title:n,node:r,testId:`json-schema-combiner-option-${e}`};if(!le(r))return t;const a=nl(r);return{...t,diffs:r.diffs,...a?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}function Qt(r,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,a=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?r+1:r,0),afterLevel:Math.max(a?e+1:e,0)}}const tl=r=>d.jsx(ui,{...r});tl.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const ti=m.createContext(null);function ay(){const r=m.useContext(ti);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function al(){return m.useContext(ti)}function iy(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({hideUnchangedNodes:r,revealedBlockIds:e,revealBlock:t}),[r,e,t])}const oy="#64748B",il="#94A3B8";const Jn=m.memo(r=>{const{text:e,color:n,className:t}=r,a=n===void 0?oy:n;return d.jsx("span",{className:["json-schema-type-value-text",t].filter(Boolean).join(" "),style:a?{color:a}:void 0,children:e})});Jn.__docgenInfo={description:`Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
whether to render it at all.`,methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const ol=m.memo(r=>{const{node:e}=r;return Gm(e)?null:d.jsx(Jn,{text:hn(e.value(),e.meta()),color:il})});ol.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Zt=m.memo(r=>{const{text:e,diff:n,layoutSide:t,color:a}=r,i=xo(n,t),o=Ed(n,t),s=[z.highlighter(i),z.background(o)].filter(Boolean).join(" ");return d.jsx(Jn,{text:e,color:a,className:s||void 0})});Zt.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const ht=m.memo(r=>{const{display:e,layoutSide:n,color:t}=r;return e.kind===an.NO_DIFFS?d.jsx(Jn,{text:e.text,color:t}):e.kind===an.WHOLE_DIFFS?d.jsx(Zt,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center gap-1",children:e.segments.map((a,i)=>d.jsx(Zt,{text:a.text,diff:a.diff,layoutSide:n,color:t},`${a.text}-${i}`))})});ht.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const sl=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r;if(Bm(e,t))return null;const a=Wa(e,n,t);return d.jsx(ht,{display:a,layoutSide:t,color:il})});sl.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ll=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));ll.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function Yi(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Or=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[ie]:o}=r,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(gd,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(it,{text:Yi(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":Yi(n),onClick:s,children:d.jsx(ll,{})})})})]})});Or.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const dl=m.memo(r=>{const e=pe(),n=Fe();switch(e){case we:return d.jsx(En,{left:d.jsx(Or,{...r,layoutSide:"before",level:n}),right:d.jsx(Or,{...r,layoutSide:"after",level:n})});case Xe:return d.jsx(On,{content:d.jsx(Or,{...r,layoutSide:"after",level:n})});default:return null}});dl.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const ai=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=ay(),i=Vo(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:s}=m.useMemo(()=>$f(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:s.map((l,u)=>{const c=u===s.length-1;return l.kind==="placeholder"?t.has(l.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(l.sourceIndex,l.sourceIndex+l.blockSize).map((f,y)=>d.jsx(Qn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===l.blockSize-1},f.id))},l.unchangedBlockId):d.jsx(dl,{unchangedBlockId:l.unchangedBlockId,count:l.blockSize,onReveal:a},l.unchangedBlockId):d.jsx(Qn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:l.node,isLastInList:c},l.node.id)})})};ai.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const ea=5;function sy(r){return ga.trim(r.split(`
`)).length>ea}function ly(r,e){const n=ga.trim(r.split(`
`));return n.length<=ea||e?r:n.slice(0,ea).join(`
`)}const dy="markdown-text-row__json-schema-description",uy="markdown-text-row__json-schema-expander",fy=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function cy(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===W;return x(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:k(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:H(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function my(r){switch(r){case F.body1:return"text-value-body1";case F.h1:case F.h2:case F.h3:case F.h4:case F.h5:case F.h6:return"text-value-body2";case F.body2:default:return"text-value-body2"}}function yy(r){switch(r){case F.h1:return"text-value-expander--h1";case F.h2:return"text-value-expander--h2";case F.h3:return"text-value-expander--h3";case F.h4:return"text-value-expander--h4";case F.h5:return"text-value-expander--h5";case F.h6:return"text-value-expander--h6";case F.body1:return"text-value-expander--body1";case F.body2:default:return"text-value-expander--body2"}}function py(r,e){return r===Ie.JsonSchemaDescription?{markdownClassName:dy,expanderClassName:uy}:{markdownClassName:["text-slate-700",my(e)].join(" "),expanderClassName:`text-value-expander ${yy(e)}`.trim()}}const ul=m.memo(r=>{const{value:e,variant:n=F.body2,usage:t,layoutSide:a,diff:i}=r,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>cy(e,i,a),[i,a,e]),c=m.useMemo(()=>ly(l,o),[o,l]),f=m.useMemo(()=>sy(l),[l]),y=m.useMemo(()=>py(t,n),[t,n]),p=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const b=a===W?i.styles.before:i.styles.after,T=[];return b.textHighlighterColor&&T.push(z.highlighter(b.textHighlighterColor)),T},[i,a]),g=m.useMemo(()=>["markdown",y.markdownClassName,...p].filter(Boolean).join(" "),[p,y.markdownClassName]),h=m.useCallback(()=>{s(b=>!b)},[]);return u||!c?null:d.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[d.jsx(yu,{className:g,remarkPlugins:[pu],children:c}),d.jsx(fy,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});ul.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const gy={[Ie.DdlApiProperty]:kd,[Ie.JsonSchemaDescription]:Da},hy={[Ie.DdlApiProperty]:["min-h-[26px]"]};function by(r){const e=gy[r]??cr,n=hy[r]??[];return[e,...n].join(" ")}function Sy(r,e,n){return n===Ie.DdlApiProperty?Ad(r,e):r!=null&&r.data?(e===W?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Pr=m.memo(r=>{const{value:e,variant:n=F.body2,layoutSide:t,usage:a=Ie.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[ie]:s}=r,l=wa(t),u=a===Ie.DdlApiProperty,c=u||a===Ie.JsonSchemaDescription,f=m.useMemo(()=>Sy(o,t,a),[o,t,a]),y=a===Ie.JsonSchemaDescription&&l===0,p=c&&l>0&&(!i||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:T}=o,v=[];return t===W&&v.push(z.background(T.before.backgroundColor)),t===Q&&v.push(z.background(T.after.backgroundColor)),v},[o,t]),h=m.useMemo(()=>by(a),[a]),b=d.jsx(ul,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===Ie.JsonSchemaDescription?"items-stretch":"",h,...g].filter(Boolean).join(" "),children:[y&&d.jsx(xd,{}),p&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):a===Ie.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});Pr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const na=m.memo(r=>{const e=pe(),{diffsSeverities:n,diffsSeverityPlacement:t=G.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case we:return d.jsx(Pn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(En,{left:d.jsx(Pr,{...r,layoutSide:W}),right:d.jsx(Pr,{...r,layoutSide:Q})})});case Xe:return d.jsx(On,{content:d.jsx(Pr,{...r,layoutSide:Q})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});na.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function vy(r){return r?ze({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const _n={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Te.UNIQUE_ITEMS};function _t(r,e,n,t){const a=ze({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function Dy(r){const e=vy(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function wy(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=_t(n.minLength,n.maxLength);o.length&&e.push({key:_n.VALUE_LENGTH,label:Ra,values:o}),n.pattern!==void 0&&e.push({key:_n.VALUE_PATTERN,label:Ma,values:[String(n.pattern)]});const s=Dy(t);s.length&&e.push({key:_n.VALUE_RANGE,label:qa,values:s}),t.multipleOf!==void 0&&e.push({key:_n.VALUE_MULTIPLE_OF,label:Ia,values:[String(t.multipleOf)]});const l=_t(a.minProperties,a.maxProperties);l.length&&e.push({key:_n.PROPERTIES_COUNT,label:Oa,values:l}),i.uniqueItems!==void 0&&e.push({key:_n.UNIQUE_ITEMS,label:Pa,values:[String(i.uniqueItems)]});const u=_t(i.minItems,i.maxItems);return u.length&&e.push({key:_n.ITEMS_COUNT,label:Ha,values:u}),e}const fl=r=>{const{extensions:e}=r,t=Fe()+1;return d.jsx(Pe.Provider,{value:t,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(gt,{title:"Extensions",usage:vn.JsonSchema,lastInvisible:!0}),d.jsx(yr,{source:e,initialLevel:t})]})})};fl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""}}};const or=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,a)=>d.jsx(Cd,{isVisible:!0,value:t.text,usage:Vd.JsonSchemaValidation,textHighlighterColor:xo(t.diff,e),borderShadowColor:_d(t.diff,e),isFontMuted:Rd(t.diff,e),isEmptyStringPlaceholder:xm(t.text)},`${t.text}-${a}`))}):null});or.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Wi={valueLength:Ra,valuePattern:Ma,valueRange:qa,valueMultipleOf:Ia,propertiesCount:Oa,itemsCount:Ha,uniqueItems:Pa};function Ny(r){return le(r)&&(r.kind===Y.PROPERTY||r.kind===Y.ROOT)}const ii=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Be(),i=n??e.value(),o=Ln(i),s=Ny(e)?e:void 0,l=le(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?Xa(s,a):Ua(n!==void 0?{value:()=>n}:e,a),[a,n,e,s]),c=m.useMemo(()=>s?Os(s):void 0,[s]),f=m.useMemo(()=>s?Ps(s):void 0,[s]),y=m.useMemo(()=>s?Hs(s):void 0,[s]),p=m.useMemo(()=>s?Ls(s):void 0,[s]),g=m.useMemo(()=>s?js(s):void 0,[s]),h=m.useMemo(()=>s?Js(s):void 0,[s]),b=m.useMemo(()=>s?$t(s):void 0,[s]),T=m.useMemo(()=>s?Is(s):void 0,[s]),v=mr(e,le),D=m.useMemo(()=>ae(v,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[v]),S=m.useMemo(()=>{const A=wy(o);if(!l)return A;const O=new Set(A.map(I=>I.key)),L=Object.keys(Wi).filter(I=>!O.has(I)).filter(I=>Bi(l,I)).map(I=>({key:I,label:Wi[I],values:[]}));return[...A,...L]},[l,o]),E=m.useCallback(A=>{const O=Vm((o==null?void 0:o.enum)??[],c,f,A);return O.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:A,sideItems:O.map(({text:L,valueDiffKey:I})=>({text:L,diff:Vt(f,I)}))})},[c,f,o==null?void 0:o.enum]),C=m.useCallback(A=>{const O=_m((o==null?void 0:o.examples)??[],p,g,A);return O.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:A,sideItems:O.map(({text:L,valueDiffKey:I})=>({text:L,diff:Vt(g,I)}))})},[p,g,o==null?void 0:o.examples]),V=m.useCallback(A=>{const O=o==null?void 0:o.default,L=s?Ui(O,$t(s),A):Ui(O,void 0,A);return L.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:A,sideItems:L.map(({text:I})=>({text:I,diff:b}))})},[b,s,i]),q=m.useCallback((A,O)=>L=>{const I=l?Ur(l,A):void 0,j=l?Fs(l,A):void 0,B=Rm(A,O,I,j,L,A===te.VALUE_RANGE&&l?{nodeValue:i,crawlDiffs:Em(l)??{}}:void 0);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:L,sideItems:B.map(({text:Z,valueDiffKey:Ne})=>({text:Z,diff:Vt(j,Ne)}))})},[l,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(na,{usage:Ie.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||D.diff)&&d.jsx(na,{usage:Ie.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...D}),u.showDefaultRow&&d.jsx(br,{label:"Default",usage:Sr.JsonSchemaValidation,subheader:V,colorizingDiff:T,diffsSeverities:b||T?v==null?void 0:v.nodeDiffsSeverities:void 0}),u.showExamplesRow&&d.jsx(br,{label:"Examples",usage:Sr.JsonSchemaValidation,subheader:C,diff:p,colorizingDiff:h,diffsSeverities:p||g||h?v==null?void 0:v.nodeDiffsSeverities:void 0}),u.showEnumValuesRow&&d.jsx(br,{label:"Allowed values",usage:Sr.JsonSchemaValidation,subheader:E,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?v==null?void 0:v.nodeDiffsSeverities:void 0,...Ya(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showValidationsSection&&S.map(A=>{const O=A.key,L=l?Ur(l,O):void 0,I=l?$a(l,O):void 0;return d.jsx(br,{label:A.label,usage:Sr.JsonSchemaValidation,subheader:q(O,A.values),diff:L,colorizingDiff:I,diffsSeverities:l&&Bi(l,O)?v==null?void 0:v.nodeDiffsSeverities:void 0},A.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(fl,{extensions:o.extensions})]})};ii.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ty(r){const e=qs(r),n={};for(const t of Wn){const a=e[t];a&&(n[t]=a)}return n}function Ey(r,e){var l;const n=!!r.diffs[R],t=qs(r),a=Ty(r),i=t.required,o=i?{...a,required:i}:a,s=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:s,requiredChanged:!n&&!!i,$nodeChange:(l=r.diffs[R])==null?void 0:l.data,$metaChanges:o}}const cl=m.memo(r=>{const{value:e,meta:n}=r;return d.jsx(Jn,{text:hn(e,n)})});cl.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""}}};const ml=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r,a=Wa(e,n,t);return d.jsx(ht,{display:a,layoutSide:t})});ml.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const yl=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(cl,{value:e,meta:n}),t&&d.jsx(it,{text:Ca,children:d.jsx(Va,{})}),d.jsx(_a,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},pl=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0}=r;pe();const o=Ey(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(ml,{node:n,meta:e,layoutSide:a}),t&&d.jsx(it,{text:Ca,children:d.jsx(Va,{})}),d.jsx(_a,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...o})]})};yl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""}}};pl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""}}};const ky="Type: ";function xy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return ei(e)?{variant:"text",text:t??ky}:a===Y.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:hd}:{variant:"badge",text:"additional property",badgeKind:hr}:a===Y.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:hr}:a===Y.ITEMS?{variant:"badge",text:"item",badgeKind:hr}:a===Y.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:hr}:a===Y.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function Ay(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===Y.ADDITIONAL_PROPERTIES&&n===!1}function Cy(r,e,n,t,a){const i=r===!0&&!ue(e)||!!e&&(e.action===J.remove&&t||e.action===J.add&&a||e.action===J.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const gl=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=pe(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=bo(a),{originSide:s,changedSide:l}=bd(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!Cy(e,n,o,s,l)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};gl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const hl="text-xs text-black font-Inter-Medium",bl=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(Do,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${hl}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},Sl=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(Do,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${hl}`,children:[e.text,d.jsx(gl,{required:n,requiredDiff:t,layoutSide:a})]})}};bl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};Sl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Vy(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=r,u=ss(),c=e.meta(),f=Ln(t??n.value()),y=n.meta(),p=m.useMemo(()=>Ya(i,a),[a,i]),g=m.useMemo(()=>xy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),h=m.useMemo(()=>T=>{const v=Ao(l);return(v?Co(v,T):Md(l,T))?s?d.jsx(Sl,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:T}):d.jsx(bl,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,l,s]),b=m.useMemo(()=>!Ay(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:p,titleContent:h,showTypeSubheader:b}}const oi=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[ie]:p}=r,{displayValueResolved:g,displayMeta:h,listLastRowFlags:b,titleContent:T,showTypeSubheader:v}=Vy({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(ce,{...b,"data-precededby":p,titleContent:T,expandable:o,expanded:s,isRoot:ei(e),onClickExpander:o?l:void 0,variant:F.body2,subheader:D=>y({layoutSide:D,displayValueResolved:g,displayMeta:h,displayNode:n,showTypeSubheader:v}),usage:et.JsonSchemaProperty,...u})};oi.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const si=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,...u}=r;return d.jsx(oi,{...u,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:c,displayValueResolved:f,displayMeta:y,displayNode:p,showTypeSubheader:g})=>d.jsx(yl,{value:f,meta:y,isCycle:p.isCycle,layoutSide:c,showTypeLabel:g})})};si.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function _y(r){return ae(sn(r),{resolveDiff:()=>Dm(r)})}const li=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,...c}=r,f=m.useMemo(()=>u??_y(n),[n,u]),y=m.useMemo(()=>Tm(e),[e]),p=pe(),g=m.useMemo(()=>wm(n),[n]),h=!s&&o&&p===we&&!!g&&g.size>0;return d.jsx(oi,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:f,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:b,displayMeta:T,displayNode:v,showTypeSubheader:D})=>Co(Ao(f.diff),b)?d.jsxs(d.Fragment,{children:[d.jsx(pl,{meta:T,node:n,isCycle:v.isCycle,layoutSide:b,showTypeLabel:D}),h&&d.jsx(Aa,{values:Array.from(g)})]}):d.jsx(d.Fragment,{})})};li.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""}}};function Ry(r){return le(r)&&r.kind===Y.PROPERTY}const di=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Be(),i=Fe(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Ys(),u=Ry(e)?e:void 0,c=le(e)?e:void 0,f=al(),y=m.useMemo(()=>u?Xa(u,a):Ua(e,a),[a,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,l]),g=m.useMemo(()=>Es(e),[e,l]),h=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Bs(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===Y.ROOT}):ks(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),b=m.useMemo(()=>Mn(e,h),[h,e,l]),[T,v]=m.useState(b);m.useEffect(()=>{v(I=>Mn(e,I))},[e,l]);const D=m.useCallback(()=>{v(I=>{const j=!I;return j&&s(e),Mn(e,j)})},[s,e]),S=!g||T,E=m.useCallback(I=>c?d.jsx(sl,{node:c,meta:c.meta(),layoutSide:I}):d.jsx(ol,{node:e}),[e,c]),C=m.useMemo(()=>c?Br(c):void 0,[c]),V=va(),q=(V==null?void 0:V.beforeLevel)??i,A=(V==null?void 0:V.afterLevel)??i,{beforeLevel:O,afterLevel:L}=m.useMemo(()=>Qt(q,A,C),[q,A,C]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(li,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:g,expanded:T,onClickExpander:D}):d.jsx(si,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:g,expanded:T,onClickExpander:D}),S&&d.jsxs(d.Fragment,{children:[d.jsx(ii,{node:e,isLastInList:n&&p.length===0}),p.length>0&&d.jsx(Pe.Provider,{value:i+1,children:d.jsxs(zn,{beforeLevel:O,afterLevel:L,children:[d.jsx(gt,{title:E,usage:vn.JsonSchema,lastInvisible:!0,diff:C,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:G.NestingIndicatorRow}),c&&f?d.jsx(ai,{children:p}):p.map((I,j)=>c?d.jsx(Qn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:I,isLastInList:j===p.length-1},I.id):d.jsx(vt,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:I,isLastInList:j===p.length-1},I.id))]})})]})]})};di.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vl=r=>d.jsx(di,{...r});vl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const Qn=r=>{const{node:e}=r;return Xn(e)?d.jsx(tl,{...r}):d.jsx(vl,{...r})};Qn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Dl=m.memo(r=>{const{node:e}=r,n=Zs(e),t=hn(ni(n),n.meta())+ri(e);return d.jsx(Jn,{text:t,color:null})});Dl.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const wl=m.memo(r=>{const{node:e,layoutSide:n}=r,t=Zs(e),a=Wa(t,t.meta(),n),i=ri(e);return d.jsxs(d.Fragment,{children:[d.jsx(ht,{display:a,layoutSide:n,color:null}),i&&d.jsx(Jn,{text:i,color:null})]})});wl.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const $i=new Set;function bt(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=Q}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=My({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(l)return null;const u=s.join(" "),c=typeof o.title=="function"?o.title(i):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:f=>{f.preventDefault(),f.stopPropagation(),t(o)},children:c},o.node.id)})})}function My(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[R];if(s){const{styles:l}=s;switch(a){case W:s.inherited||i.push(z.borderShadow(l.before.borderShadowColor)),o=s.data.action===J.add;break;case Q:s.inherited||i.push(z.borderShadow(l.after.borderShadowColor)),o=s.data.action===J.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??$i,u=t??$i,c=new Set([...l,...u]),f=Lt(c);i.push(f?z.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}bt.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var St=(r=>(r.Primary="primary",r.Secondary="secondary",r))(St||{});function qy(r,e){if(!r)return"";const n=e===W?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return z.background(n)}const Iy=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i,levelReductionAction:o}=r,s=wa(i),l=m.useMemo(()=>Us(s,i,o),[s,i,o]),u=m.useMemo(()=>qy(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${Da} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(In,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(bt,{options:e,selectedOption:n,onSelectOption:t,variant:St.Secondary,layoutSide:i})})]})}),Rt=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(sr,{title:e,usage:vn.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t,levelReductionAction:r.levelReductionAction}),n&&d.jsx(Iy,{...r})]})}),Nl=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=pe(),i=m.useMemo(()=>t==null?void 0:t[G.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case we:return d.jsx(Pn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(En,{left:d.jsx(Rt,{...r,layoutSide:W}),right:d.jsx(Rt,{...r,layoutSide:Q})})});case Xe:return d.jsx(On,{content:d.jsx(Rt,{...r,layoutSide:Q})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});Nl.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};function Oy(r){return le(r)&&r.kind===Y.PROPERTY}const ui=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Be(),i=Fe(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Ys(),u=le(e)?e:void 0,c=al(),f=e.nestedNodes(),[y,p]=m.useState(()=>new Map),g=m.useMemo(()=>Xs(e,y),[e,y]),h=m.useMemo(()=>Qs(e,y),[e,y]),b=m.useMemo(()=>ni(h),[h]),T=le(h)?h:void 0,v=Oy(h)?h:void 0,D=m.useMemo(()=>v?Xa(v,a):Ua({value:()=>b},a),[b,v,a]),S=m.useMemo(()=>Wm(h),[h,l]),E=m.useMemo(()=>S.length>0,[S.length]),C=m.useMemo(()=>e.isCycle||S.length===0?!1:T&&(c!=null&&c.hideUnchangedNodes)?Bs(T,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):ks(h,{expandedDepth:o,level:i}),[e.isCycle,h,T,c==null?void 0:c.hideUnchangedNodes,o,S.length,i]),V=m.useMemo(()=>Mn(h,C),[h,C,l]),[q,A]=m.useState(V);m.useEffect(()=>{A(Mn(h,C))},[h.id,h,C]),m.useEffect(()=>{A(X=>Mn(h,X))},[h,l]);const O=m.useCallback(()=>{A(X=>{const fe=!X;return fe&&s(h),Mn(h,fe)})},[h,s]),L=m.useMemo(()=>hn(b,h.meta()),[h,b]),I=m.useMemo(()=>T?Br(T):void 0,[T]),j=va(),B=(j==null?void 0:j.beforeLevel)??i,Z=(j==null?void 0:j.afterLevel)??i,Ne=m.useMemo(()=>u?Br(u):void 0,[u]),{beforeLevel:ge,afterLevel:Ve}=m.useMemo(()=>Qt(B,Z,Ne),[B,Z,Ne]),{beforeLevel:Ze,afterLevel:An}=m.useMemo(()=>Qt(ge,Ve,I),[ge,Ve,I]),U=m.useCallback((X,fe)=>{p(je=>Ym(e,je,X.id,fe.node.id))},[e]);if(f.length===0)return null;const de=q&&S.length>0,en=!!(u&&c),he=u?Qn:vt;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&T?d.jsx(li,{"data-precededby":t,ownerNode:u,displayNode:T,displayValue:b,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!E,expandable:E,expanded:q,onClickExpander:O}):d.jsx(si,{"data-precededby":t,ownerNode:e,displayNode:h,displayValue:b,contentVisibility:D,isLastInList:n&&!D.showContentSection&&!E,expandable:E,expanded:q,onClickExpander:O}),d.jsx(ii,{node:h,displayValue:b,isLastInList:n&&!E&&g.every(X=>!X.showSelector)}),d.jsx(Pe.Provider,{value:i+1,children:d.jsxs(zn,{beforeLevel:ge,afterLevel:Ve,children:[g.map(X=>{const fe=X.nestedNodes.map((Ke,ql)=>ty(Ke,ql,le(Ke)?Il=>d.jsx(wl,{node:Ke,layoutSide:Il}):()=>d.jsx(Dl,{node:Ke}))),je=fe.find(Ke=>Ke.node.id===X.selectedNestedNode.id)??fe[0]??null,Cn=ry(X.combinerNode),Fn=Qm(X.combinerNode);return d.jsx(Nl,{combinerKindLabel:X.combinerKindLabel,showSelector:X.showSelector,options:fe,selectedOption:je,onSelectOption:Ke=>U(X.combinerNode,Ke),selectorRowDiff:Cn.selectorRowDiff,diffsSeverities:Cn.diffsSeverities,levelReductionAction:Fn},X.combinerNode.id)}),de&&d.jsxs(zn,{beforeLevel:Ze,afterLevel:An,children:[d.jsx(gt,{title:L,usage:vn.JsonSchema,lastInvisible:!0,diff:I,diffsSeverities:T==null?void 0:T.diffsSeverities,diffsSeverityPlacement:G.NestingIndicatorRow}),en?d.jsx(ai,{children:S}):S.map((X,fe)=>d.jsx(he,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:X,isLastInList:fe===S.length-1},X.id))]})]})})]})};ui.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vt=r=>{const{node:e}=r;return Xn(e)?d.jsx(ui,{...r}):d.jsx(di,{...r})};vt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Py=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(Hy,{...r})})),Hy=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Tn,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,s=m.useMemo(()=>Qe(a),[a]),l=m.useMemo(()=>new Ko({source:e,materializeDepth:n,logger:s}),[e,n,s]),u=m.useMemo(()=>l.build(),[l]),[c,f]=m.useReducer(h=>h+1,0),y=m.useCallback(h=>{l.materializeChildren(h),f()},[l]),p=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(Qa.Provider,{value:p,children:d.jsx(ut.Provider,{value:o,children:d.jsx(Nn.Provider,{value:t,children:d.jsx(qn.Provider,{value:Xe,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(vt,{node:g})})})})})})}):null};Py.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const Ly=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(jy,{...r})})),jy=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=Tn,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:s,diffTypes:l,hideUnchangedNodes:u=!0}=r,c=iy(u),f=m.useMemo(()=>Qe(a),[a]),y=m.useMemo(()=>new Uf({source:e,materializeDepth:n,diffsMetaKeys:s,logger:f}),[e,n,s,f]),p=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",p);const[g,h]=m.useReducer(D=>D+1,0),b=m.useCallback(D=>{y.materializeChildren(D),h()},[y]),T=m.useMemo(()=>({expandedDepth:n,materializeChildren:b,treeRevision:g}),[n,b,g]),v=p.root;return v?d.jsx(rt.Provider,{value:s,children:d.jsx(ka.Provider,{value:l,children:d.jsx(ti.Provider,{value:c,children:d.jsx(Qa.Provider,{value:T,children:d.jsx(ut.Provider,{value:o,children:d.jsx(Nn.Provider,{value:t,children:d.jsx(qn.Provider,{value:we,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Qn,{node:v})})})})})})})})})}):null};Ly.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:""}}};var Yr=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Yr||{});const pr=r=>{const{node:e,variant:n=Yr.PRIMARY,[ie]:t}=r,a=Be(),i=er(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(xt).map((S,E)=>{var q;const C=((q=S.value())==null?void 0:q.protocol)??"",V=`binding-${E}`;return At(S)?{title:C,node:S,testId:V,diffs:S.diffs,diffsSummary:S.diffsSummary,descendantDiffs:S.descendantDiffs,descendantDiffsSummary:S.descendantDiffsSummary,diffsSeverities:S.diffsSeverities}:{title:C,node:S,testId:V}}),[c]),y=l!=null&&l.node&&xt(l.node)?l.node:null,p=y==null?void 0:y.value(),{version:g="latest",binding:h=null}=p??{};m.useEffect(()=>{f.length>0&&l===null&&u(f[0])},[f,l]);const b=m.useCallback(S=>s?d.jsx(d.Fragment,{}):d.jsx(bt,{options:f,selectedOption:l,onSelectOption:u,variant:St.Secondary,layoutSide:S}),[f,s,l]),T=m.useMemo(()=>{if(cc(e)){const S=sn(e);return ae(S)}return{}},[e]),v=m.useMemo(()=>{if(y&&At(y)){const S=sn(y);return ae(S,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:G.BindingVersionRow})}return{}},[y]),D=m.useMemo(()=>{if(!y)return null;if(At(y)&&i){const S=y.diffs[R],E=Jy(h,S,i);return d.jsx(ct,{"data-precededby":_.BINDING_VERSION_ROW,mergedSource:E,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return xt(y)?d.jsx(yr,{"data-precededby":_.BINDING_VERSION_ROW,source:h,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,h,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Yr.PRIMARY?F.h3:F.h5,subheader:b,...T}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(ln,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:F.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...v}),D]})]})};function Jy(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,s)=>{if(o[s]=t,x(t)){const l=r[s];o[s]={...t,afterValue:l}}if(k(t)){const l=r[s];o[s]={...t,beforeValue:l}}return o},{})}}pr.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const Dt=r=>{const{node:e,[ie]:n}=r,t=er(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var s;if(mc(e)){const l=sn(e);return{...ae(l),highlightingMode:(s=e.diffs[R])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:"Extensions",expandable:!1,variant:F.h3,usage:et.AsyncApiJsoSection,...o}),t?d.jsx(ct,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(yr,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};Dt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Tl="Address Parameters",El=r=>{const{node:e,[ie]:n}=r,t=Be();if(pc(e))return d.jsx(Fy,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:Tl,expandable:!1,variant:F.h3}),d.jsx(mt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},Fy=r=>{const{node:e,[ie]:n}=r,t=Be(),a=pe(),i=e.value(),o=i==null?void 0:i.rawValues,s=er(),l=m.useMemo(()=>{const c=sn(e);return ae(c)},[e]),u=m.useMemo(()=>Ky(o,e.diffs[R],s),[o,s,e.diffs]);return!s||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:Tl,expandable:!1,variant:F.h3,...l}),d.jsx(pt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:s,overriddenKind:"parameters"})]})};function Ky(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,s)=>{if(o[s]=t,x(t)){const l=r[s];o[s]={...t,afterValue:l}}if(k(t)){const l=r[s];o[s]={...t,beforeValue:l}}return o},{})}}El.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const kl=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(pe()){case we:return d.jsx(Pn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(En,{left:e(W),right:e(Q)})});case Xe:return d.jsx(On,{content:e(Q)})}return null});kl.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const xl=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(lt),o=mr(e,xr),{nodeDiffs:s}=o,l=m.useMemo(()=>ae(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ae(o,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[o]),c=m.useMemo(()=>ae(o,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[o]),f=m.useMemo(()=>ae(o,{resolveDiff:(v,D)=>{const S=xe.maxChangedPropertyMetaDataByDiffType(D("protocol"),D("host"));return v[R]??S}}),[o]),y=m.useCallback(v=>{var A;if(!t)return null;if(!xr(e))return d.jsx(d.Fragment,{children:t.protocol});const D=(A=e.diffs)==null?void 0:A.protocol;if(!D)return d.jsx(d.Fragment,{children:t.protocol});const S=new Set,{data:E,styles:C}=D;let V=t.protocol,q=!1;return v===W&&(S.add(z.highlighter(C.before.textHighlighterColor)),k(E)||H(E)?V=E.beforeValue:on(E)&&(V=E.beforeKey),x(E)&&(q=!0)),v===Q&&(S.add(z.highlighter(C.after.textHighlighterColor)),x(E)||H(E)?V=E.afterValue:on(E)&&(V=E.afterKey),k(E)&&(q=!0)),q?null:d.jsx("span",{className:Array.from(S).join(" "),children:V})},[e,t]),p=m.useCallback(v=>{var A;if(!t)return null;if(!xr(e))return d.jsx(d.Fragment,{children:t.host});const D=(A=e.diffs)==null?void 0:A.host;if(!D)return d.jsx(d.Fragment,{children:t.host});const S=new Set,{data:E,styles:C}=D;let V=t.host,q=!1;return v===W&&(S.add(z.highlighter(C.before.textHighlighterColor)),k(E)||H(E)?V=E.beforeValue:on(E)&&(V=E.beforeKey),x(E)&&(q=!0)),v===Q&&(S.add(z.highlighter(C.after.textHighlighterColor)),x(E)||H(E)?V=E.afterValue:on(E)&&(V=E.afterKey),k(E)&&(q=!0)),q?null:d.jsx("span",{className:Array.from(S).join(" "),children:V})},[e,t]),g=m.useCallback(v=>{var A;function D(O=!1,L=[]){return d.jsx("div",{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${cr} py-2 flex flex-row w-full h-full ${L.join(" ")}`,children:!O&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(v),"://",p(v)]})})}if(!xr(e))return D();const S=((A=e.diffs)==null?void 0:A[R])??f.diff;if(!S)return D();const{data:E,styles:C}=S,V=new Set;let q=!1;return v===W&&(x(E)?(V.add(z.background(N.Gray)),q=!0):V.add(z.background(C.before.backgroundColor))),v===Q&&(k(E)?(V.add(z.background(N.Gray)),q=!0):V.add(z.background(C.after.backgroundColor))),D(q,Array.from(V))},[e,p,y,f.diff]),h=m.useMemo(()=>Je(t,s,"title"),[t,s]),b=m.useMemo(()=>Je(t,s,"description"),[t,s]),T=m.useMemo(()=>Je(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(ce,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:F.h4,...l}),!h&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:F.h4,...l}),d.jsx(kl,{renderAddress:g,...f}),b&&d.jsx(ln,{"data-precededby":_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:F.h6,textFontWeight:"normal",textColor:Sn,...u}),T&&d.jsx(ln,{"data-precededby":b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:F.h6,textFontWeight:"normal",textColor:Sn,...c}),i&&d.jsx(pr,{"data-precededby":T?_.SUMMARY_ROW:b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,node:i,variant:Yr.SECONDARY})]}):null});xl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const Al=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.childrenNodes().filter(rc),[e]),a=m.useMemo(()=>{if(gc(e)){const i=sn(e);return ae(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:F.h3,...a}),t.map((i,o)=>d.jsx(xl,{"data-precededby":o===0?_.MESSAGE_SECTION_HEADER_HIGH_LEVEL:_.SERVER_BLOCK,node:i},i.id))]})});Al.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Cl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(lt),o=a.find(Zf),s=a.find(nc),l=a.find(ja),u=mr(e,yc),{nodeDiffs:c}=u,f=m.useMemo(()=>ae(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>ae(u,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[u]),p=m.useMemo(()=>ae(u,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[u]),g=m.useMemo(()=>Je(t,c,"title"),[t,c]),h=m.useMemo(()=>Je(t,c,"description"),[t,c]),b=m.useMemo(()=>Je(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(ce,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:F.h2,...f}),!g&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:F.h2,...f}),h&&d.jsx(ln,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:F.h5,textFontWeight:"normal",textColor:Sn,...y}),b&&d.jsx(ln,{"data-precededby":h?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:F.h5,textFontWeight:"normal",textColor:Sn,...p}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(El,{"data-precededby":h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(Al,{"data-precededby":o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(Dt,{"data-precededby":s?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),i&&d.jsx(pr,{"data-precededby":l?_.JSO_VIEWER:s?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Cl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Vl=r=>{const{node:e,[ie]:n}=r,t=Be(),a=pe(),i=er(),o=Vo(),s=e.childrenNodes(),l=s.find(Xf),u=s.find(ja),c=s.find(lt),f=s.find(Qf),y=m.useMemo(()=>Xi(l,i),[l,i]),p=m.useMemo(()=>Xi(f,i),[f,i]),g=m.useMemo(()=>{if(hc(l)){const T=sn(l);return ae(T)}return{}},[l]),h=m.useMemo(()=>{if(bc(f)){const T=sn(f);return ae(T)}return{}},[f]),b=m.useCallback(T=>a===Xe?d.jsx(mt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:T,displayMode:t,overriddenKind:"parameters"}):a===we&&i?d.jsx(pt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:T,displayMode:t,metaKeys:i,filters:o,layoutMode:we,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":n,value:"Headers",variant:F.h3,expandable:!1,...g}),b(y)]}),u&&d.jsx(Dt,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(pr,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:u?_.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":l?_.JSON_SCHEMA_VIEWER:u||c?_.JSO_VIEWER:n,value:"Payload",variant:F.h3,expandable:!1,...h}),b(p)]})]})},zi="Type";function Xi(r,e){if(!r)return;const n=r.value();if(n)return r instanceof He?Yt(zi,n.schema,r.diffs[R],e):ys(zi,n.schema)}Vl.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const _l=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(lt),o=a.find(ja),s=mr(e,vc),{nodeDiffs:l}=s,u=m.useMemo(()=>ae(s,{diffKey:"title"}),[s]),c=m.useMemo(()=>ae(s,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[s]),f=m.useMemo(()=>ae(s,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[s]),y=m.useMemo(()=>Je(t,l,"title"),[t,l]),p=m.useMemo(()=>Je(t,l,"description"),[t,l]),g=m.useMemo(()=>Je(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(ce,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:F.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),variant:F.h2,expandable:!1,expanded:!0,...u}),p&&d.jsx(ln,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:F.h5,textFontWeight:"normal",textColor:Sn,...c}),g&&d.jsx(ln,{"data-precededby":p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:F.h5,textFontWeight:"normal",textColor:Sn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Dt,{"data-precededby":g?_.SUMMARY_ROW:p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(pr,{"data-precededby":o?_.JSO_VIEWER:g?_.SUMMARY_ROW:p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};_l.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Rl=r=>{const{node:e,[ie]:n}=r;return ts(e)?d.jsx(Vl,{"data-precededby":n,node:e}):as(e)?d.jsx(Cl,{"data-precededby":n,node:e}):is(e)?d.jsx(_l,{"data-precededby":n,node:e}):null};Rl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Ml=r=>{const{node:e,[ie]:n}=r,t=pe();Be();const[a,i]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(g=>{const h=Gy(g),b=By(g);return wc(g)?{node:g,title:h,testId:b,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:h,testId:b}}),[o]);m.useEffect(()=>{s.length>0&&a===null&&i(s[0])},[s,a]);const l=m.useMemo(()=>{var g;return Dc(e)?(g=e.diffs)==null?void 0:g[R]:null},[e]),u=m.useMemo(()=>{if(l){const{data:g}=l;if(H(g)||k(g))return g.beforeDeclarationPaths[0];if(x(g))return g.afterDeclarationPaths[0]}return null},[l]),c=m.useMemo(()=>{var g;return(g=l==null?void 0:l.data)==null?void 0:g.type},[l]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),y=m.useCallback(g=>{const h=new Set;if(l){const{styles:b}=l;g===W&&h.add(z.background(b.before.backgroundColor)),g===Q&&h.add(z.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${cr} h-full ${Array.from(h).join(" ")}`,children:d.jsx(bt,{options:s,selectedOption:a,onSelectOption:i,variant:St.Secondary,layoutSide:g})})},[l,n,s,a]),p=m.useCallback(()=>{switch(t){case we:return d.jsx(Pn,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(En,{left:y(W),right:y(Q)})});default:return d.jsx(On,{content:y(Q)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[p(),a&&ec(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(Rl,{"data-precededby":_.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function Gy(r){switch(r.kind){case w.MESSAGE_CONTENT:return"Message";case w.MESSAGE_CHANNEL:return"Channel";case w.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function By(r){switch(r.kind){case w.MESSAGE_CONTENT:return"message-content";case w.MESSAGE_CHANNEL:return"message-channel";case w.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Ml.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const fi=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=mr(e,Sc),{nodeDiffs:o}=i,s=m.useMemo(()=>ae(i,{diffKey:"title"}),[i]),l=m.useMemo(()=>ae(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>ae(i,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[i]),c=m.useMemo(()=>ae(i,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[i]),f=m.useMemo(()=>Je(t,o,"title"),[t,o]),y=m.useMemo(()=>Je(t,o,"description"),[t,o]),p=m.useMemo(()=>Je(t,o,"summary"),[t,o]),g=n?_.ROOT:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(ce,{"data-precededby":_.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:F.h1,...s}),!n&&!f&&d.jsx(ce,{"data-precededby":_.ROOT,value:e.key.toString(),expandable:!1,variant:F.h1,...s}),d.jsx(os,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),y&&d.jsx(ln,{"data-precededby":_.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:F.h4,textFontWeight:"normal",textColor:Sn,...u}),p&&d.jsx(ln,{"data-precededby":y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:F.h4,textFontWeight:"normal",textColor:Sn,...c}),d.jsx(Uy,{"data-precededby":p?_.SUMMARY_ROW:y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,children:a})]})},Uy=r=>{const{children:e,[ie]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>zf(t)?d.jsx(Ml,{"data-precededby":n,node:t},t.key):null)})};fi.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const Yy=m.memo(r=>r.source===null?null:d.jsx(Dn,{fallback:d.jsx(wn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Wy,{...r})})),Wy=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=Tn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,s=m.useMemo(()=>Qe(a),[a]),l=m.useMemo(()=>new Ho({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!rs(c)?null:d.jsx(Eo.Provider,{value:a,children:d.jsx(Nn.Provider,{value:t,children:d.jsxs(qn.Provider,{value:Xe,children:[" ",d.jsx(Pe.Provider,{value:0,children:d.jsx(fi,{node:c,noHeading:i})})]})})})});Yy.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{Yy as A,yr as J,Ec as a,mt as b,pt as c,Ly as d,Py as e,ct as f};
