var ql=Object.defineProperty;var Il=(r,e,n)=>e in r?ql(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(Il(r,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{af as Lr,a3 as vn,N as R,d as Wr,t as x,H as w,v as k,x as H,y as Oe,R as G,w as an,O as j,ag as hn,ah as It,ai as Ot,aj as Pt,ak as zi,al as Xi,am as Qi,an as Zi,ao as eo,ap as no,aq as ro,ar as to,as as Ol,at as Ht,au as ao,av as io,aw as ra,ax as oo,ay as so,az as lo,aA as ta,aB as aa,aC as ia,aD as uo,aE as oa,aF as sa,aG as fo,aH as Lt,aI as la,aJ as da,aK as ua,aL as fa,aM as ca,aN as ma,aO as ya,aP as pa,U as Y,o as ur,_ as co,aQ as Pl,aR as Be,i as ui,aS as mo,aT as Hl,Z as Ll,aU as jl,X as pe,Y as fr,W as Z,S as De,V as X,E as Nn,c as Tn,e as En,L as On,f as Pe,p as kn,a8 as Je,aV as yo,l as ze,aW as Jl,aX as Fl,aY as Kl,aZ as Gl,a_ as Bl,a$ as Ul,b0 as Yl,b1 as Wl,b2 as $l,z as zl,A as Xl,B as Ql,F as Zl,G as ed,J as nd,u as Ge,g as $r,a9 as Pn,I as fi,b3 as rd,b4 as td,b5 as Yn,b6 as ad,b7 as id,b8 as jr,b9 as od,ba as sd,bb as ci,a6 as mi,j as po,bc as go,bd as ld,a7 as dd,ae as ud,be as fd,bf as cd,ac as fe,bg as hr,bh as Kn,bi as fn,bj as qn,bk as ho,bl as bo,bm as md,C as yd,bn as jt,aa as pd,bo as gd,bp as br,bq as hd,ad as So}from"./DiffBadge-d46fdecc.js";import{_ as ga,l as M,$ as Ae,a0 as D,a1 as zr,a2 as Xr,a3 as bd,a4 as Qr,a5 as vo,a6 as se,e as Xe,a7 as Zr,t as oe,a8 as te,a9 as ha,aa as Sd,v as z,ab as vd,ac as Dd,ad as Do,ae as wo,z as ba,S as He,O as Hn,N as Ln,Q as xn,af as Nt,b as B,X as cr,A as ie,ag as No,ah as wd,ai as Sa,aj as on,ak as ae,T as ce,al as et,P as _,am as Nd,an as To,ao as tn,ap as nt,aq as va,ar as Da,M as Eo,as as Td,at as Ed,au as kd,av as Ie,aw as xd,ax as Ad,ay as Cd,az as Vd,aA as _d,aB as Rd,aC as Md,aD as qd,aE as mr,aF as Sr,aG as vr,aH as ko,aI as xo,aJ as Id,c as sn,d as Dn}from"./IndexesNodeViewer-650efe34.js";import{r as m}from"./index-f46741a2.js";import{T as wa,A as jn,a as Zn,b as xe,c as Na,m as Ta,t as Od,C as Pd,d as rt,e as Ea,u as er,f as Ao}from"./DdlTableDiffsViewer-64d0faaf.js";/* empty css              */import"./DdlTableViewer-dc947bfc.js";import"./GraphQLOperationDiffViewer-6457c9ef.js";import"./GraphQLOperationViewer-eb077fa3.js";import{g as Hd,h as Ld,J as jd,j as Jd,k as Fd,l as Kd,m as ka,n as Gd,S as Bd,U as xa,o as Co,p as tt,q as at,N as Vo,E as yi,r as Ud,s as Yd,t as Wd,v as $d,w as _o,x as it,C as Aa,y as Ca,D as Va,z as zd,A as Xd,B as Qd,F as Zd,H as Ro,I as Jt,K as pi,L as eu,M as cn,V as _a,P as Ra,Q as Ma,R as qa,T as nu,W as ru,X as Ia,Y as Oa,Z as Pa,_ as tu,$ as Mo,a0 as au,a1 as iu,a2 as ou,a3 as qo,a4 as su,a5 as lu,a6 as du,a7 as uu,a8 as fu,a9 as cu,aa as mu,ab as yu,ac as pu,ad as gu,ae as hu}from"./GraphPropNodeViewer-6a270396.js";class bu extends ga{constructor(){super()}}const gi=(r,e)=>!M(e)||Ae(e)?e:{rawValues:e},Su=(r,e)=>{if(!M(e)||Ae(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof r=="symbol"?r.toString():`${r}`}},hi=(r,e)=>M(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function ar(r){return{"/data":{"/content":()=>ar(D.MESSAGE_CONTENT),"/channel":()=>ar(D.MESSAGE_CHANNEL),"/operation":()=>ar(D.MESSAGE_OPERATION),kind:D.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:D.MESSAGE_CHANNEL_PARAMETERS,transformers:[gi]},"/servers":{"/*":()=>ar(D.SERVER),kind:D.SERVERS},"/extensions":{kind:D.EXTENSIONS,transformers:[gi]},"/bindings":{"/*":{kind:D.BINDING,transformers:[Su]},kind:D.BINDINGS,complex:!0},"/headers":{kind:D.MESSAGE_HEADERS,transformers:[hi]},"/payload":{kind:D.MESSAGE_PAYLOAD,transformers:[hi]},kind:r}}const vu="<address unknown>";class Io{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var s;let t,a;const i=e.operations??{};let o,l;if(n)t=n.operationKey,a=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],c=this.isReferenceObject(u)?null:u;if(c){const f=(s=c.messages)==null?void 0:s[0],y=this.isReferenceObject(f)?null:f;if(y){const p=y[this.referenceNamePropertyKey];l=typeof p=="string"?p:void 0}}}if(!o||!l)return!o&&this.logger.error("Cannot find first operation in source."),!l&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,l),t=o,a=l}return{operationKey:t,messageKey:a}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var T;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},a=this.operationKeysOrDefaults(e,n);if(!a)return null;const{operationKey:i,messageKey:o}=a,l=Object.entries(t).filter(S=>{const[E,C]=S;return!this.isReferenceObject(C)&&E===i}).map(([,S])=>S).at(0);if(!l)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const s=this.isReferenceObject(l.channel)?{}:l.channel;let c=(l.messages??[]).filter(S=>!this.isReferenceObject(S)).find(S=>M(S)&&S[this.referenceNamePropertyKey]===o);if(!s)return this.logger.error("Cannot find channel in the operation",l),null;if(!c){const S=(T=s.messages)==null?void 0:T[o];if(c=this.isReferenceObject(S)?void 0:S,!c)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const f=this.copyExtensions(l),y=this.copyExtensions(s),p=this.copyExtensions(c),g=S=>M(S)?{[this.referenceNamePropertyKey]:S[this.referenceNamePropertyKey]}:void 0,h=g(c),b=g(s),N=g(l);return{...h??{},id:o,...c.name?{internalTitle:c.name}:{},...c.title?{title:c.title}:{},...c.summary?{summary:c.summary}:{},...c.description?{description:c.description}:{},action:l.action,address:s.address??vu,data:{content:{...c.headers?{headers:c.headers}:{},...p?{extensions:p}:{},...c.bindings?{bindings:c.bindings}:{},...c.payload?{payload:c.payload}:{}},channel:{...b??{},...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...y?{extensions:y}:{},...s.bindings?{bindings:s.bindings}:{},...s.parameters?{parameters:this.transformParametersToJsonSchema(s.parameters)}:{},...s.servers?{servers:s.servers}:{}},operation:{...N??{},id:i,...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...l.bindings?{bindings:l.bindings}:{},...f?{extensions:f}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[a,i]of Object.entries(e))n[a]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const a of Reflect.ownKeys(e))typeof a=="symbol"&&Object.defineProperty(n,a,{value:t[a],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,a)=>(t[a]=e[a],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function Du(r){return zr(r)}const wu=new Set([D.BINDING,D.EXTENSIONS,D.MESSAGE,D.MESSAGE_CHANNEL,D.MESSAGE_CHANNEL_PARAMETERS,D.MESSAGE_HEADERS,D.MESSAGE_OPERATION,D.MESSAGE_PAYLOAD,D.SERVER]),Dr=["title","description","summary"];class ot extends Xr{createNodeMeta(e){return{...M(e)&&Lr in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,a){return!bd(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:a(t,ot.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return wu.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case D.BINDING:return["binding","version","protocol"];case D.EXTENSIONS:case D.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case D.MESSAGE:return[...Dr,"internalTitle","action","address"];case D.MESSAGE_CHANNEL:return[...Dr];case D.MESSAGE_OPERATION:return[...Dr];case D.MESSAGE_HEADERS:case D.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case D.SERVER:return[...Dr,"host","protocol"];default:return[]}}}const Nu="[AsyncAPI]";class Oo extends Qr{constructor(n){const{source:t,referenceNamePropertyKey:a,operationKeys:i,logger:o=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"referenceNamePropertyKey");P(this,"operationKeys");P(this,"logger");P(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=a,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!M(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Zr},a=ar(D.MESSAGE),i=Du({source:n,tree:this.tree,supportedNodeKinds:vo,createNodeFromRaw:(o,l,s,u,c)=>this.createNodeFromRaw(o,l,s,u,c),createNodeParams:(o,l,s)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:l,container:s}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l),shouldStopAfterNodeCreation:(o,l)=>M(l)&&!!l.isPrimitive});return vn(n,i,{state:t,rules:a}),this.tree}get logPrefix(){return Nu}createTree(){return new bu}createNodeDataBuilder(){return new ot}prepareSource(){return new Io(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return M(n)?n:null}resolveNodeKey(n,t){if(!M(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const a=t[this.referenceNamePropertyKey];if(typeof a=="string"||typeof a=="number")return a}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:se.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,o),f=this.createNodeMeta(t,o),y={type:se.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isSimpleTreeNode(n){return n.type===se.SIMPLE}isComplexTreeNode(n){return n.type===se.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Tu extends wa{constructor(){super()}}function bi(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const Eu="x-";function Ir(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(Eu)}class ku extends Io{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:a,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=this.diffMetaKeys,s=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!s)return null;const u=oe(te(e,["operations",o],this.referenceNamePropertyKey)),c=oe(te(e,["operations",a,o],this.referenceNamePropertyKey));oe(te(e,["operations",a,"bindings",o],this.referenceNamePropertyKey));const f=oe(te(e,["operations",a,"channel",o],this.referenceNamePropertyKey));oe(te(e,["operations",a,"channel","bindings",o],this.referenceNamePropertyKey)),oe(te(e,["operations",a,"channel","servers",o],this.referenceNamePropertyKey));const y=oe(te(e,["operations",a,"messages",o],this.referenceNamePropertyKey)),p=oe(te(e,["operations",a,"messages",i,o],this.referenceNamePropertyKey));oe(te(e,["operations",a,"messages",i,"bindings",o],this.referenceNamePropertyKey));const g=te(e,["operations",a,"messages",i],this.referenceNamePropertyKey),h=te(e,["operations",a,"messages"],this.referenceNamePropertyKey),b=M(g)&&ha(h)?Sd(h,g):void 0,N=(b&&typeof b!="symbol"?y==null?void 0:y[b]:void 0)??(a&&typeof a!="symbol"?u==null?void 0:u[a]:void 0),v=s;if(!(o in v)){const T=p==null?void 0:p.title,S=p==null?void 0:p.name,E=p==null?void 0:p.description,C=p==null?void 0:p.summary,V=f==null?void 0:f.address,q=p==null?void 0:p.headers,A=p==null?void 0:p.payload,O=v.data.content.extensions;if(O&&!(o in O)){const I=Object.keys(p??{}).reduce((J,K)=>{if(!Ir(K))return J;const ee=p==null?void 0:p[K];return ee&&(J[K]=ee),J},{});v.data.content.extensions=Object.assign(O,{[o]:I})}const L=v.data.content;if(L&&!(o in L)){const I={...q?{headers:q}:{},...A?{payload:A}:{}};v.data.content=Object.assign(L,{[o]:I})}v[o]={...N?{[R]:N}:{},...T?{title:T}:{},...S?{internalTitle:S}:{},...E?{description:E}:{},...C?{summary:C}:{},...V?{address:V}:{}}}if(!(o in v.data.channel)){const T=f==null?void 0:f.title,S=f==null?void 0:f.description,E=f==null?void 0:f.summary,C=f==null?void 0:f.address,V=v.data.channel.extensions;if(V&&!(o in V)){const q=Object.keys(f??{}).reduce((A,O)=>{if(!Ir(O))return A;const L=f==null?void 0:f[O];return L&&(A[O]=L),A},{});v.data.channel.extensions=Object.assign(V,{[o]:q})}v.data.channel[o]={...T?{title:T}:{},...S?{description:S}:{},...E?{summary:E}:{},...C?{address:C}:{}}}if(!(o in v.data.operation)){const T=c==null?void 0:c.title,S=c==null?void 0:c.description,E=c==null?void 0:c.summary,C=v.data.operation.extensions;if(C&&!(o in C)){const V=Object.keys(c??{}).reduce((q,A)=>{if(!Ir(A))return q;const O=c==null?void 0:c[A];return O&&(q[A]=O),q},{});v.data.operation.extensions=Object.assign(C,{[o]:V})}v.data.operation[o]={...T?{title:T}:{},...S?{description:S}:{},...E?{summary:E}:{}}}return Wr(v,o,l),v}hasOnlyAllowedDiffMetaSymbols(e){if(!M(e)&&!Ae(e))return!0;if(Ae(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class xu extends ot{createNodeValue(e,n,t,a){return super.createNodeValue(e,n,t,a)}createNodeMeta(e){return super.createNodeMeta(e)}}class Au extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const l=o.data.type;i.add(l)}return i}}class Cu extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{aggregatedDiffsMetaKey:o}=a,l=te(t,["binding",o]);if(this.isDiffsSet(l))for(const s of l)s&&i.add(s.type);return i}}class Vu extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=oe(te(t,["parameters","properties",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=te(t,["parameters",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=oe(te(t,["extensions",o]));if(c)for(const f of Object.values(c))f&&i.add(f.type);return i}}class _u extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:l}=a,s=oe(te(t,["extensions",o]));if(s)for(const f of Object.values(s))f&&i.add(f.type);const u=te(t,["headers",l]);if(this.isDiffsSet(u))for(const f of u)f&&i.add(f.type);const c=te(t,["payload",l]);if(this.isDiffsSet(c))for(const f of c)f&&i.add(f.type);return i}}class Ru extends jn{aggregate(e,n,t,a){const i=new Set;if(!t||!a)return i;const{diffsMetaKey:o}=a,l=oe(te(t,["extensions",o]));if(l)for(const s of Object.values(l))s&&i.add(s.type);return i}}var qt;let Mu=(qt=class{static instance(e){switch(e){case D.BINDING:if(!this.instances.has(D.BINDING)){const n=new Cu;this.instances.set(D.BINDING,n)}return this.instances.get(D.BINDING);case D.MESSAGE_CONTENT:if(!this.instances.has(D.MESSAGE_CONTENT)){const n=new _u;this.instances.set(D.MESSAGE_CONTENT,n)}return this.instances.get(D.MESSAGE_CONTENT);case D.MESSAGE_CHANNEL:if(!this.instances.has(D.MESSAGE_CHANNEL)){const n=new Vu;this.instances.set(D.MESSAGE_CHANNEL,n)}return this.instances.get(D.MESSAGE_CHANNEL);case D.MESSAGE_OPERATION:if(!this.instances.has(D.MESSAGE_OPERATION)){const n=new Ru;this.instances.set(D.MESSAGE_OPERATION,n)}return this.instances.get(D.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Au;this.instances.set(null,n)}return this.instances.get(null)}}},P(qt,"instances",new Map),qt);class qu extends Zn{aggregate(e,n){}}class Iu extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n,i=oe(te(e,[a],t));if(!i)return;const o={};let l=!1;for(const s of Object.keys(e)){const u={},c=i[s];c&&(l=!0,this.aggregateWholeNodeDiff(c,u),o[s]=u[R])}return l?o:void 0}}class Ou extends Zn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,a=oe(te(e,[t])),i=a==null?void 0:a.headers,o=a==null?void 0:a.payload,l={};if(i){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};x(i)&&(s={...s,backgroundColor:w.Gray},u={...u,backgroundColor:w.Green}),k(i)&&(s={...s,backgroundColor:w.Red},u={...u,backgroundColor:w.Gray}),H(i)&&(s={...s,backgroundColor:w.Yellow},u={...u,backgroundColor:w.Yellow}),l.headers={data:i,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}if(o){let s={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};x(o)&&(s={...s,backgroundColor:w.Gray},u={...u,backgroundColor:w.Green}),k(o)&&(s={...s,backgroundColor:w.Red},u={...u,backgroundColor:w.Gray}),H(o)&&(s={...s,backgroundColor:w.Yellow},u={...u,backgroundColor:w.Yellow}),l.payload={data:o,styles:{before:s,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}return l}}class Pu extends Zn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:a}=n;if(!Array.isArray(e))return;const i=oe(te(e,[a],t));if(!i)return;const o={};let l=!1;for(let s=0;s<e.length;s++){const c=e[s][t];if(!c)continue;const f={},y=i[s];y&&(l=!0,this.aggregateWholeNodeDiff(y,f),o[c]=f[R])}return l?o:void 0}}class Po{static instance(e){switch(e){case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new Iu),this.instances.get(D.BINDINGS);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new Pu),this.instances.get(D.SERVERS);case D.MESSAGE_CONTENT:return this.instances.has(D.MESSAGE_CONTENT)||this.instances.set(D.MESSAGE_CONTENT,new Ou),this.instances.get(D.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new qu;this.instances.set(null,n)}return this.instances.get(null)}}}P(Po,"instances",new Map);class Hu extends xe{aggregate(e){const n=e[R];if(n){const f=n.data,p={type:f.type,causedAt:[]};return H(f)?(p.causedAt=f.beforeDeclarationPaths[0],{[G.TitleRow]:p,[G.BindingVersionRow]:p}):(k(f)?p.causedAt=f.beforeDeclarationPaths[0]:x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),{[G.TitleRow]:p,[G.DescriptionRow]:p,[G.SummaryRow]:p,[G.AddressRow]:p,[G.BindingVersionRow]:p,[G.ServerAddressRow]:p})}const t=e.title,a=e.description,i=e.summary,o=e.address,l=e.version,s=e.host,u=e.protocol,c={};if(t){const f=t.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.TitleRow]=p}if(a){const f=a.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.DescriptionRow]=p}if(i){const f=i.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.SummaryRow]=p}if(o){const f=o.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.AddressRow]=p}if(l){const f=l.data,p={type:f.type,causedAt:[]};(k(f)||H(f))&&(p.causedAt=f.beforeDeclarationPaths[0]),x(f)&&(p.causedAt=f.afterDeclarationPaths[0]),c[G.BindingVersionRow]=p}if(s||u){const f=s==null?void 0:s.data,y=u==null?void 0:u.data,p=xe.maxDiffByDiffType(f,y);if(p){const g={type:p.type,causedAt:[]};(k(p)||H(p))&&(g.causedAt=p.beforeDeclarationPaths[0]),x(p)&&(g.causedAt=p.afterDeclarationPaths[0]),c[G.ServerAddressRow]=g}}return Object.keys(c).length>0?c:void 0}}class Ho{static instance(e){switch(e){default:return new Hu}}}P(Ho,"instances",new Map);class Lu extends Na{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;a.add(o)}return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!x(n)&&!k(n)&&!H(n)&&!an(n))return!1;return!0}}class ju{static instance(e){switch(e){default:return new Lu}}}class An extends z{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!M(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const p=o.diffs[R];if(p&&(x(p.data)||k(p.data)))return u[R]={...p,inherited:!0},u;{const g=o.descendantDiffs[a];if(g)return u[R]=g,u}}else if(i){const p=i.diffs[R];if(p&&(x(p.data)||k(p.data)))return u[R]={...p,inherited:!0},u;{const g=i.descendantDiffs[a];if(g)return u[R]=g,u}}if(!z.isDiffsRecord(s))return;const c=s.title;c&&this.aggregateTextDiff(c,"title",u);const f=s.description;f&&this.aggregateTextDiff(f,"description",u);const y=s.summary;return y&&this.aggregateTextDiff(y,"summary",u),u}aggregateTextDiff(n,t,a){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;x(n)&&(i={...i,isContentVisible:!1,backgroundColor:w.Gray},o={...o,isContentVisible:!0,backgroundColor:w.Green}),k(n)&&(i={...i,isContentVisible:!0,backgroundColor:w.Red},o={...o,isContentVisible:!1,backgroundColor:w.Gray}),(an(n)||H(n))&&(i={...i,isContentVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow},o={...o,isContentVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow}),a[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}}class Ju extends An{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!M(e))return;let l=super.aggregate(e,n,t,a,i);if(l){const u=l[R];if(u){const{data:c,styles:f}=u;x(c)&&(f.after.borderShadowColor=w.Green),k(c)&&(f.before.borderShadowColor=w.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,l)}}l||(l={});const s=te(e,["binding"]);if(M(s)){const u=s[o];if(z.isDiffsRecord(u)){const c=u.bindingVersion;c&&this.aggregateTextDiff(c,"version",l)}}return Object.keys(l).length>0?l:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let a;if(x(t)&&M(t.afterValue)){const i=t.afterValue.bindingVersion;a={...t,afterValue:i},this.aggregateTextDiff(a,"version",n)}if(k(t)&&M(t.beforeValue)){const i=t.beforeValue.bindingVersion;a={...t,beforeValue:i},this.aggregateTextDiff(a,"version",n)}}}class Fu extends An{aggregateByDescendantDiffs(e,n,t){var u;if(n[R])return n;if(!M(e))return;const a=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const l=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==a)return n[R]=l(),n;let s=o.data.action;for(const c of Object.values(t))if(((u=c==null?void 0:c.data)==null?void 0:u.action)!==s){s=j.replace;break}return s===j.replace?(n[R]=l(),n):(n[R]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let a;const i={...n,beforeDeclarationPaths:k(n)?n.beforeDeclarationPaths:[],beforeValue:k(n)?n.beforeValue:void 0,afterDeclarationPaths:x(n)?n.afterDeclarationPaths:[],afterValue:x(n)?n.afterValue:void 0,action:j.replace};return()=>(a||(a={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:w.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:w.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}),a)}}class Ku extends An{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[R])return n;const i=te(e,["rawValues"]);if(!M(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!z.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return x(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Green}),k(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray}),n[R]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:hn},n}}class Gu extends An{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!M(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(z.isDiffsRecord(s)){const u=s[R];if(u){let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};x(u)&&(f={...f,isContentVisible:!1,backgroundColor:w.Gray},y={...y,isContentVisible:!0,backgroundColor:w.Green}),k(u)&&(f={...f,isContentVisible:!0,backgroundColor:w.Red},y={...y,isContentVisible:!1,backgroundColor:w.Gray}),l[R]={data:u,highlightingMode:Oe,styles:{before:f,after:y},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const c=s.address;c&&this.aggregateTextDiff(c,"address",l)}return Object.keys(l).length>0?l:void 0}}class Bu extends An{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t,a){if(n[R])return n;const i=te(e,["rawValues","properties"]);if(!M(i))return;const{diffsMetaKey:o}=a,l=i[o];if(!z.isDiffsRecord(l))return;const s=Object.keys(i).length,u=Object.keys(l).length;if(s!==u)return;const[c]=Object.values(l);if(!c)return;let f={isContentVisible:!0,isHeaderVisible:!0},y={isContentVisible:!0,isHeaderVisible:!0};const p={increaseLevel:!1},g=p;return x(c)&&(f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},y={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Green}),k(c)&&(f={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Red},y={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray}),n[R]={data:c,styles:{before:f,after:y},flags:{before:p,after:g},highlightingMode:Oe},n}}class Uu extends An{aggregate(e,n,t,a,i){const{diffsMetaKey:o}=n;if(!M(e))return;let l=super.aggregate(e,n,t,a,i);l||(l={});const s=e[o];if(z.isDiffsRecord(s)){const u=s.host;u&&this.aggregateTextDiff(u,"host",l);const c=s.protocol;c&&this.aggregateTextDiff(c,"protocol",l)}return Object.keys(l).length>0?l:void 0}}class Yu extends An{aggregate(e,n,t,a,i){return super.aggregate(e,n,t,a,i)}aggregateByDescendantDiffs(e,n,t){if(n[R])return n;if(!Array.isArray(e))return;const a=e.length,i=Object.keys(t).length;if(a!==i)return;const[o]=Object.values(t);if(o)return n[R]=o,n}}class Ft{static instance(e){switch(e){case D.BINDING:return this.instances.has(D.BINDING)||this.instances.set(D.BINDING,new Ju),this.instances.get(D.BINDING);case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new Fu),this.instances.get(D.BINDINGS);case D.EXTENSIONS:return this.instances.has(D.EXTENSIONS)||this.instances.set(D.EXTENSIONS,new Ku),this.instances.get(D.EXTENSIONS);case D.MESSAGE:return this.instances.has(D.MESSAGE)||this.instances.set(D.MESSAGE,new Gu),this.instances.get(D.MESSAGE);case D.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(D.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(D.MESSAGE_CHANNEL_PARAMETERS,new Bu),this.instances.get(D.MESSAGE_CHANNEL_PARAMETERS);case D.SERVER:return this.instances.has(D.SERVER)||this.instances.set(D.SERVER,new Uu),this.instances.get(D.SERVER);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new Yu),this.instances.get(D.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new An),this.instances.get(null)}}}P(Ft,"instances",new Map);const Wu="[AsyncAPI][WithDiffs]";class $u extends Oo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Wu}createTree(){return new Tu}createNodeDataBuilder(){return new xu}prepareSource(){return new ku(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return ha(n)?n:null}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!bi(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Ft.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n))return ju.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return Po.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return Ft.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isAsyncApiTreeNodeKind(n)&&a)return Mu.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return Ho.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),Ta(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return vo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&bi(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class zu extends ga{constructor(){super()}}const W={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Lo=Object.values(W),$n="unknown",Xu="any",Qu="nothing",ne={UNKNOWN:$n,ANY:Xu,NOTHING:Qu,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},Zu=Object.values(ne);function ef(r){return!r||!vd(r)?!1:Zu.some(e=>e===r)}function nf(r){return M(r)&&Lr in r}function Tt(r,e){const n=r[e];return Ae(n)&&n.length>0}function nr(r){return typeof r=="boolean"}function Jn(r){return r==null||typeof r=="boolean"?null:r}const rf=[ne.STRING,ne.NUMBER,ne.INTEGER,ne.BOOLEAN];function Jr(r){return!!r&&rf.includes(r)}function Fr(r){return!M(r)||Ae(r)?!1:Tt(r,"allOf")||Tt(r,"oneOf")||Tt(r,"anyOf")}function Si(r){return M(r)&&Reflect.ownKeys(r).length>0}function Et(r){return Ae(r)&&r.length>0}function jo(r,e){if(!M(r)&&!Ae(r))return!1;if(Ae(r))return r.length>0;const n=r;if(Et(n[It])||Et(n[Ot])||Et(n[Pt])||Si(n[zi])||Si(n[Xi]))return!0;const t=n[Qi];if(t!==void 0&&t!==!1||n[Zi]!==void 0)return!0;const a=n[eo];return a!==void 0&&a!==!1}const tf="extensions",af="location",Ue={root:W.ROOT,definition:W.DEFINITION,property:W.PROPERTY,additionalProperties:W.ADDITIONAL_PROPERTIES,patternProperty:W.PATTERN_PROPERTY,items:W.ITEMS,item:W.ITEM,additionalItems:W.ADDITIONAL_ITEMS,allOf:W.ALL_OF,anyOf:W.ANY_OF,oneOf:W.ONE_OF},of=(r,e)=>{if(!M(e)||Ae(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},sf="x-";function vi(r){return r===void 0||typeof r=="symbol"?!1:(typeof r=="string"?r:`${r}`).startsWith(sf)}function lf(r,e){if(!M(e)||Ae(e))return e;const n=Reflect.ownKeys(e),t=n.filter(l=>vi(l));if(t.length===0)return e;const a=new Set(t),i=t.reduce((l,s)=>(vi(s)&&(l[s]=e[s]),l),{}),o={};for(const l of n)typeof l=="string"&&a.has(l)||(o[l]=e[l]);return o.extensions=i,o}const df=[of,lf];function Ye(r=Ue.root){return{"/allOf":{"/*":()=>Ye(Ue.allOf)},"/oneOf":{"/*":()=>Ye(Ue.oneOf)},"/anyOf":{"/*":()=>Ye(Ue.anyOf)},"/properties":{"/*":()=>Ye(Ue.property)},"/items":()=>({...Ye(Ue.items),"/*":({key:e})=>Dd(e)?Ye(Ue.item):{}}),"/additionalProperties":()=>Ye(Ue.additionalProperties),"/additionalItems":()=>Ye(Ue.additionalItems),"/patternProperties":{"/*":()=>Ye(Ue.patternProperty)},kind:r,transformers:df}}function uf(r){return zr(r)}const ff={type:ne.ANY};function cf(r,e){if(nr(e)){if(e===!1)return!1;if(e===!0&&r===W.ADDITIONAL_PROPERTIES)return ff}}function mf(r,e){if(!e||typeof r=="number"||!r)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(r))}function le(r){return"diffs"in r&&"diffsSummary"in r&&"descendantDiffs"in r&&"descendantDiffsSummary"in r&&"diffsSeverities"in r}const Ee=class Ee extends Xr{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case ne.UNKNOWN:case ne.ANY:case ne.NOTHING:case ne.NULL:case ne.BOOLEAN:return Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case ne.STRING:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Lt,ma,ya,pa,af];case ne.NUMBER:case ne.INTEGER:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Lt,la,da,ua,fa,ca];case ne.OBJECT:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,uo,oa,sa,fo];case ne.ARRAY:return[...Ee.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ta,aa,ia];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,a=!1){const i=mf(n,t),o=nf(e)?{brokenRef:String(e.$ref)}:{};return!Fr(e)&&M(e)?{...this.pick(e,Ee.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:a}:{required:i,...o,_fragment:e,isCycle:a}}createNodeValue(e,n,t,a){if(t==null)return null;const i=cf(e,t);if(i!==void 0)return i;if(nr(t))return t;if(!M(t)||Fr(t))return null;const o=ef(t.type)?t.type:ne.UNKNOWN;return o===ne.UNKNOWN||o===ne.ANY||o===ne.NOTHING||o===ne.NULL||o===ne.BOOLEAN?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.STRING?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.NUMBER||o===ne.INTEGER?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.OBJECT?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===ne.ARRAY?{...a(t,Ee.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};P(Ee,"JSON_SCHEMA_TREE_NODE_META_PROPS",[no,ro,to,Ol]),P(Ee,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[Ht,ao,io,ra,oo,so,lo,tf]);let Kr=Ee;const yf="[JSON Schema]";class Jo extends Qr{constructor(n){const{source:t,materializeDepth:a,logger:i=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new Do);P(this,"crawlHooks",null);this.source=t,this.materializeDepth=a,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!M(n))return this.tree;const t={parent:null,container:null,ancestors:new Zr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},a=Ye();return this.crawlHooks=uf({source:n,tree:this.tree,supportedNodeKinds:Lo,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o,l)=>({value:nr(i)||M(i)&&!Array.isArray(i)?i:null,newDataLevel:!0,parent:o,container:l}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>Ae(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:jo}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),vn(n,this.crawlHooks,{state:t,rules:a}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:wo(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};vn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}get logPrefix(){return yf}createTree(){return new zu}createNodeDataBuilder(){return new Kr((n,t)=>this.pick(n,t))}prepareSource(){return M(this.source)?this.source:null}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u,value:c}=o;if(i||M(c)&&Fr(c)){const h=this.createNodeMeta(t,o),b={type:se.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,b)}const y=this.createNodeValue(t,a,o),p=this.createNodeMeta(t,o),g={type:se.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(s),value:y,meta:p,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,g)}createNodeMeta(n,t){const{value:a,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(a,n,i,!1)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===se.SIMPLE}isComplexTreeNode(n){return n.type===se.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class pf extends wa{constructor(){super()}}class gf{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!M(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return Wr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class hf extends Kr{constructor(e){super(e)}}class bf extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!x(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class Fo{static instance(e){return this.kindAnyInstance}}P(Fo,"kindAnyInstance",new bf);const Sf=["properties","patternProperties","allOf","anyOf","oneOf","items"],vf=new Set(["properties","patternProperties"]);class Df extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!M(n))return;const{diffsMetaKey:a}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,a))for(const[l,s]of Object.entries(o))!s||l===R||!z.isDiff(s)||(i[l]=this.buildDescendantDiffMetadata(s));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const a=[],i=oe(Reflect.get(n,t));i&&a.push(i);for(const o of Sf){const l=Reflect.get(n,o);if(!M(l)&&!Ae(l))continue;const s=oe(Reflect.get(l,t));if(s){a.push(s);continue}const u=i==null?void 0:i[o];if(u&&(x(u)||k(u))&&(vf.has(o)?M(l):Ae(l))){const y=this.decomposeWholeChildBagDiff(l,u);y&&a.push(y)}}return a}decomposeWholeChildBagDiff(n,t){const a=Ae(n)?n.map((o,l)=>String(l)):Object.keys(n);if(a.length===0)return;const i={};for(const o of a)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return x(n)?{type:n.type,scope:n.scope,description:n.description,action:j.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:j.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const l=Oe;return x(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},i={...i,increaseLevel:!1},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:w.Green,borderShadowColor:w.Green},o={...o,increaseLevel:!0}),k(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:w.Red,borderShadowColor:w.Red},i={...i,increaseLevel:!0},a={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},o={...o,increaseLevel:!1}),H(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow},a={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:i,after:o},highlightingMode:l}}}class Ko{static instance(e){return this.kindAnyInstance}}P(Ko,"kindAnyInstance",new Df);const bn="titleRow",Go=["type","format","title"],Wn=["readOnly","writeOnly","deprecated"];class Bo extends xe{aggregate(e){const n=e[R],t={};return n?(t[G.TitleRow]=this.buildNodeDiffsSeverity(n),t[G.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[G.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",G.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",G.NestingIndicatorRow,t)),this.applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,t),Object.keys(t).length>0?t:void 0}applyMaxAdditionalInfoRowSeverityFromValidationRowDiffs(e,n){const t=e,a=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[G.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,a=[t[bn],...Object.values(t.typeLabelFieldDiffs??{})],i=xe.maxChangedPropertyMetaDataByDiffType(...a);i&&(n[G.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||H(n)?t.causedAt=n.beforeDeclarationPaths[0]:x(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,a){const i=e[n];i&&(a[t]=this.buildNodeDiffsSeverity(i))}}class wf extends Bo{aggregate(e){const n=super.aggregate(e)??{};return this.applyMaxAdditionalInfoRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyMaxAdditionalInfoRowSeverity(e,n){const t=e,a=xe.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff,t.enumDiff,t.enumRowColorizingDiff,t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.enumValueDiffs??{}),...Object.values(t.examplesValueDiffs??{}),...Object.values(t.validationRowDiffs??{}),...Object.values(t.validationRowValueDiffs??{}).flatMap(i=>Object.values(i??{})),...Object.values(t.validationRowColorizingDiffs??{}));a&&(n[G.AdditionalInfoRow]=this.buildNodeDiffsSeverity(a))}}class Kt{static instance(e){switch(e){case W.ROOT:case W.PROPERTY:return this.kindPropertyInstance;default:return this.kindAnyInstance}}}P(Kt,"kindAnyInstance",new Bo),P(Kt,"kindPropertyInstance",new wf);function kt(r,e){for(const n of Object.values(e??{}))ba(n)&&r.add(n.data.type)}class Nf extends Na{aggregate(e,n,t){const a=new Set;if(!e)return a;const i=e;for(const[o,l]of Object.entries(e))if(l){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){kt(a,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){kt(a,i[o]);continue}if(o==="validationRowValueDiffs"){for(const s of Object.values(i.validationRowValueDiffs??{}))kt(a,s);continue}ba(l)&&a.add(l.data.type)}return a}}class Uo{static instance(e){return this.kindAnyInstance}}P(Uo,"kindAnyInstance",new Nf);const Te={ENUM:ra,MIN_LENGTH:ma,MAX_LENGTH:ya,PATTERN:pa,MINIMUM:da,MAXIMUM:fa,EXCLUSIVE_MINIMUM:ua,EXCLUSIVE_MAXIMUM:ca,MULTIPLE_OF:la,MIN_PROPERTIES:oa,MAX_PROPERTIES:sa,UNIQUE_ITEMS:ia,MIN_ITEMS:ta,MAX_ITEMS:aa},$={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Te.UNIQUE_ITEMS},Gt={[$.VALUE_LENGTH]:["minLength","maxLength"],[$.VALUE_PATTERN]:["pattern"],[$.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[$.VALUE_MULTIPLE_OF]:["multipleOf"],[$.PROPERTIES_COUNT]:["minProperties","maxProperties"],[$.ITEMS_COUNT]:["minItems","maxItems"],[$.UNIQUE_ITEMS]:["uniqueItems"]},Tf={[$.VALUE_LENGTH]:{minLength:0,maxLength:1},[$.VALUE_PATTERN]:{pattern:0},[$.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[$.VALUE_MULTIPLE_OF]:{multipleOf:0},[$.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[$.ITEMS_COUNT]:{minItems:0,maxItems:1},[$.UNIQUE_ITEMS]:{uniqueItems:0}},Gr={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Ef(r){return typeof r.exclusiveMin=="number"||typeof r.exclusiveMax=="number"?Gr.OAS_3_1_NUMERIC_EXCLUSIVE:Gr.OAS_3_0_BOOLEAN_EXCLUSIVE}function kf(r){return r.dialect??Ef(r)}const xf="?",me="{value}",nn="{exclusive_value}",mn=">",wr=">=",yn="<",Nr="<=",_e=1,Re=2,Me=4,qe=8,Di={0:{lower:void 0,upper:void 0},[_e]:{lower:`${wr} ${me}`,upper:void 0},[Re]:{lower:`${mn} ${nn}`,upper:void 0},[Me]:{lower:void 0,upper:`${Nr} ${me}`},[qe]:{lower:void 0,upper:`${yn} ${nn}`},[Re|_e]:{lower:`${mn} ${me}`,upper:void 0},[Re|Me]:{lower:`${mn} ${nn}`,upper:`${Nr} ${me}`},[Re|qe]:{lower:`${mn} ${nn}`,upper:`${yn} ${nn}`},[qe|_e]:{lower:`${wr} ${me}`,upper:`${yn} ${nn}`},[qe|Me]:{lower:void 0,upper:`${yn} ${me}`},[Me|_e]:{lower:`${wr} ${me}`,upper:`${Nr} ${me}`},[Re|_e|Me]:{lower:`${mn} ${me}`,upper:`${Nr} ${me}`},[Re|_e|qe]:{lower:`${mn} ${me}`,upper:`${yn} ${nn}`},[Re|Me|qe]:{lower:`${mn} ${nn}`,upper:`${yn} ${me}`},[qe|_e|Me]:{lower:`${wr} ${me}`,upper:`${yn} ${me}`},[_e|Re|Me|qe]:{lower:`${mn} ${me}`,upper:`${yn} ${me}`}};function Bt(r){return r!=null}function wi(r){return r!==void 0&&r!==!1}function Af(r,e,n){return(r&(_e|Re))!==(_e|Re)||n===void 0||typeof e!="number"?r:n>=e?r&~_e:r&~Re}function Cf(r,e,n){return(r&(Me|qe))!==(Me|qe)||n===void 0||typeof e!="number"?r:n<=e?r&~Me:r&~qe}function Ni(r,e,n){return r.replace(me,`${e}`).replace(nn,Bt(n)?`${n}`:xf)}function Vf(r,e){return Bt(r)||Bt(e)}function _f(r){const{min:e,max:n,exclusiveMin:t,exclusiveMax:a}=r;let i=0;return e!==void 0&&(i|=_e),wi(t)&&(i|=Re),n!==void 0&&(i|=Me),wi(a)&&(i|=qe),i}function Yo(r,e){let n=r;return typeof e.exclusiveMin!="number"&&!(n&_e)&&(n&=~Re),typeof e.exclusiveMax!="number"&&!(n&Me)&&(n&=~qe),n}function Rf(r,e){return Yo(r,e)}function Mf(r,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let a=Af(r,e.min,n);return a=Cf(a,e.max,t),a}const qf={[Gr.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Yo},[Gr.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Rf}};function If(r,e){const n=qf[e];let t=_f(r);return t=n.applyExclusiveSuppression(t,r),Mf(t,r)}function $e(r){const e={data:{},visible:!1},n=kf(r),t=typeof r.exclusiveMin=="number"?r.exclusiveMin:void 0,a=typeof r.exclusiveMax=="number"?r.exclusiveMax:void 0,i=If(r,n),o=i in Di?{...Di[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=Ni(o.lower,r.min,t)),o!=null&&o.upper&&(e.data.upper=Ni(o.upper,r.max,a)),e.visible=Vf(e.data.lower,e.data.upper),e}const lr="0",st="1";function Gn(r){return r!=null}function Tr(r){return r!==void 0&&r!==!1}function Er(r){return r!==void 0&&r!==!1}function kr(r){return!!r&&x(r)}function xr(r){return!!r&&k(r)}function Bn(r){return!!r&&H(r)}function Ti(r){if(r&&(x(r)||H(r)))return r.afterValue}function Ei(r){if(!r||!(k(r)||H(r)))return;const e=r.beforeValue;return typeof e=="number"?e:void 0}function ki(r){if(!r||!(k(r)||H(r)))return;const e=r.beforeValue;if(typeof e=="number"||typeof e=="boolean")return e}function Ha(r,e){const n=r.minimum,t=r.exclusiveMinimum,a=r.maximum,i=r.exclusiveMaximum,o=e.minimum,l=e.exclusiveMinimum,s=e.maximum,u=e.exclusiveMaximum,c=Gn(n),f=Gn(a),y=Gn(o),p=Gn(s),g=Gn(l),h=Gn(u),b=kr(o),N=xr(o),v=Bn(o),T=kr(s),S=xr(s),E=Bn(s),C=$e({min:c&&(!y||b||v)?n:void 0,max:f&&(!p||T||E)?a:void 0,exclusiveMin:Tr(t)&&(!g||kr(l)||Bn(l)&&Er(Ti(l)))?t:void 0,exclusiveMax:Tr(i)&&(!h||kr(u)||Bn(u)&&Er(Ti(u)))?i:void 0}).data;if(!(y||g||p||h))return{before:{...C},after:C};let q,A,O,L;if(c&&!y&&(q=n),(N||v)&&(q=Ei(o)),f&&!p&&(A=a),(S||E)&&(A=Ei(s)),Tr(t)&&!g&&(O=t),Bn(l)||xr(l)){const J=ki(l);Er(J)&&(O=J)}if(Tr(i)&&!h&&(L=i),Bn(u)||xr(u)){const J=ki(u);Er(J)&&(L=J)}return{before:$e({min:q,max:A,exclusiveMin:O,exclusiveMax:L}).data,after:C}}function Of(r,e){if(!e)return;const n=r==="lower"?lr:st;if(e[n])return n;if(r==="lower")return e.minimum?"minimum":e.exclusiveMinimum?"exclusiveMinimum":void 0;if(e.maximum)return"maximum";if(e.exclusiveMaximum)return"exclusiveMaximum"}function xi(...r){for(const e of r)if(e)return e.type}function Ai(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:j.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:j.remove,beforeValue:e}:{type:r,action:j.replace,beforeValue:e,afterValue:n}}function Wo(r,e){const{before:n,after:t}=Ha(r,e),a=!!(n.lower||n.upper),i=!!(t.lower||t.upper);if(!a&&i)return j.add;if(a&&!i)return j.remove}function $o(r,e){const{before:n,after:t}=Ha(r,e),a=xi(e.minimum,e.exclusiveMinimum),i=xi(e.maximum,e.exclusiveMaximum),o={},l=Ai(a,n.lower,t.lower);l&&(o[lr]=l);const s=Ai(i,n.upper,t.upper);return s&&(o[st]=s),o}function Pf(r,e){const n=$o(r,e);return[n[lr],n[st]].filter(t=>t!==void 0)}function Hf(r,e){if(Wo(r,e)!==void 0)return!1;const n=Pf(r,e);if(n.length!==1)return!1;const t=n[0];return x(t)||k(t)}function Lf(r,e){return Hf(r,e)}function Ci(r,e,n){const t=[],a=[{slot:"lower",text:r.lower,oppositeText:n.lower},{slot:"upper",text:r.upper,oppositeText:n.upper}];for(const{slot:i,text:o,oppositeText:l}of a){if(!o)continue;const s=o!==l?Of(i,e):void 0;t.push({text:o,valueDiffKey:s})}return t}function jf(r,e,n,t,a){const{before:i,after:o}=Ha(r,e),l=n===Y;if(t){const c=t.data;if(x(c)||k(c))return Ci(l?i:o,a,l?o:i)}return Ci(l?i:o,a,l?o:i)}function Jf(r,e){return r!=="exclusiveMinimum"&&r!=="exclusiveMaximum"?!1:typeof(x(e)?e.afterValue:k(e)?e.beforeValue:H(e)?e.beforeValue??e.afterValue:void 0)=="boolean"}function Ff(r,e){return r.filter(n=>{const t=e[n];return t?n==="exclusiveMinimum"||n==="exclusiveMaximum"?!Jf(n,t):!0:!1})}function Vi(r){return typeof r=="number"||typeof r=="boolean"}function Kf(r){if(!M(r))return{};const e={};return typeof r.minimum=="number"&&(e.minimum=r.minimum),typeof r.maximum=="number"&&(e.maximum=r.maximum),Vi(r.exclusiveMinimum)&&(e.exclusiveMinimum=r.exclusiveMinimum),Vi(r.exclusiveMaximum)&&(e.exclusiveMaximum=r.exclusiveMaximum),e}function Ut(r){const e=Kf(r);return{...e,min:e.minimum,max:e.maximum,exclusiveMin:e.exclusiveMinimum,exclusiveMax:e.exclusiveMaximum}}function en(r){return typeof r=="string"?r:JSON.stringify(r)}function zo(r,e,n){switch(r){case $.VALUE_LENGTH:case $.PROPERTIES_COUNT:case $.ITEMS_COUNT:{if(e.startsWith("min"))return $e({min:Number(n)}).data.lower??en(n);if(e.startsWith("max"))return $e({max:Number(n)}).data.upper??en(n);break}case $.VALUE_RANGE:{if(e==="minimum")return $e({min:Number(n)}).data.lower??en(n);if(e==="maximum")return $e({max:Number(n)}).data.upper??en(n);if(e==="exclusiveMinimum")return $e({exclusiveMin:typeof n=="number"?n:!0}).data.lower??en(n);if(e==="exclusiveMaximum")return $e({exclusiveMax:typeof n=="number"?n:!0}).data.upper??en(n);break}case $.VALUE_PATTERN:case $.VALUE_MULTIPLE_OF:case $.UNIQUE_ITEMS:return en(n);default:return en(n)}return en(n)}function Gf(r){return r.startsWith("min")||r==="exclusiveMinimum"}function Bf(r){return r.startsWith("max")||r==="exclusiveMaximum"}function Xo(r,e){return e.length<=1||Gf(r)?0:Bf(r)?1:0}class Uf extends z{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Yellow}});P(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Yellow}})}aggregate(n,t,a,i,o){const{diffsMetaKey:l}=t;if(!M(n)&&!Array.isArray(n))return;const s=n[l],u={};if(o){const b=o.diffs[R];if(b&&(x(b.data)||k(b.data)))return u[R]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const N=o.descendantDiffs[a];if(N)return u[R]=N,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}else if(i){const b=i.diffs[R];if(b&&(x(b.data)||k(b.data)))return u[R]={...b,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u;const N=i.descendantDiffs[a];if(N)return u[R]=N,this.aggregateWholeNodeInheritedValidationRowDiffs(n,u),u}if(!z.isDiffsRecord(s))return;const c=s[R];c&&this.aggregateTextDiff(c,R,u);const f=s.title,y=s.format,p=s.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:f},u);const g=s.description;if(g&&this.aggregateTextDiff(g,"description",u),!this.hasWholeNodeAddOrRemoveDiff(u))for(const b of Wn){const N=s[b];z.isDiff(N)&&this.aggregateMetaFlagDiff(N,b,u)}return M(n)&&this.aggregateValidationRowDiffs(n,s,u),this.stripMetaFlagDiffsWhenWholeNode(u),this.aggregateTitleRowDiff(u),Object.keys(u).length>0?u:void 0}aggregateByDescendantDiffs(n,t,a,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,a),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,a){const i=new Set;for(const l of Object.values(t.typeLabelFieldDiffs??{}))l!=null&&l.data&&i.add(l.data);const o=new Set;for(const l of Od(n,a))i.has(l)||l!=null&&l.type&&o.add(l.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,a){const i=t[R];if(i&&(x(i.data)||k(i.data))){t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const p=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(p){const g=this.resolveTypePrimitivenessCrossing(o),h=g&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,g):this.asReplaceRowColorizingDiff(p);t.nestingIndicatorRowColorizingDiff={...h,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!M(n))return;const l=this.collectJsonSchemaChildKeys(n);if(l.length===0)return;const s=l.map(p=>a[p]);if(s.some(p=>!p))return;const[u,...c]=s;if(!x(u.data)&&!k(u.data))return;const f=u.data.action;c.every(p=>p.data.action===f&&(x(p.data)||k(p.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}withNestingLevelFlags(n){const{data:t}=n;return x(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:k(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}resolveTypePrimitivenessCrossing(n){var s;const t=(s=n.type)==null?void 0:s.data;if(!t||!H(t))return;const a=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=Jr(a),l=Jr(i);if(o!==l)return{beforeIsPrimitive:o,afterIsPrimitive:l}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:a}=n;return H(a)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:j.remove,beforeValue:!0,beforeDeclarationPaths:a.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:a.type,scope:a.scope,description:a.description,action:j.add,afterValue:!0,afterDeclarationPaths:a.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],a=Reflect.get(n,"properties");M(a)&&t.push(...Object.keys(a));const i=Reflect.get(n,"patternProperties");M(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,c)=>t.push(String(c))):o!=null&&t.push("items");const l=Reflect.get(n,"additionalProperties");l!=null&&t.push("additionalProperties");const s=Reflect.get(n,"additionalItems");return s!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,a){a[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateTypeLabelFieldDiffs(n,t){const a={};for(const i of Go){const o=n[i];z.isDiff(o)&&(a[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(a).length>0&&(t.typeLabelFieldDiffs=a)}aggregateTitleRowDiff(n){const t=n[R];if(t&&(x(t.data)||k(t.data))){n[bn]=t;return}for(const a of Wn){const i=n[a];if(i){n[bn]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const a=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(t));a&&(n[bn]=this.asReplaceRowColorizingDiff(a))}buildTypeLabelFieldDiffMetadata(n){return H(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:w.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:w.Green},removeBefore:{textHighlighterColor:w.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_STYLES;return x(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},a={...a,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Green}),k(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Red},a={...a,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray}),(an(n)||H(n))&&(t={...t,isContentVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow},a={...a,isContentVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow}),{data:n,styles:{before:t,after:a},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}asReplaceRowColorizingDiff(n){const{data:t}=n;return H(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return x(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:k(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const a=this.buildChangedPropertyMetaDataFromDiff(n);return{...a,styles:{before:{...a.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...a.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),a=typeof n.beforeValue=="boolean",i=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:a?void 0:w.Yellow,borderShadowColor:a?w.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:i?void 0:w.Yellow,borderShadowColor:i?w.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return x(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:j.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:j.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[R];return!!t&&(x(t.data)||k(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Wn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return H(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:x(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:j.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:j.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const a=t[R];if(!(!a||!(x(a.data)||k(a.data)))&&M(n))for(const[i,o]of Object.entries(Gt)){const l=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[l]||(t.validationRowColorizingDiffs[l]=this.buildWholeNodeInheritedRowColorizingDiff(a)))}}aggregateValidationRowDiffs(n,t,a){for(const[i,o]of Object.entries(Gt)){const l=o.filter(S=>t[S]);if(l.length===0)continue;const s=i,u=s===$.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(a.valueRangeCrawlDiffs=u);const c=s===$.VALUE_RANGE?Ff(l,t):l,f=l.map(S=>t[S]).filter(S=>z.isDiff(S));if(f.length===0)continue;a.validationRowColorizingDiffs??(a.validationRowColorizingDiffs={});const y=Ut(n),p=u?Wo(y,u):void 0;if(u&&(p===j.add||p===j.remove)){const S=p===j.add?this.mergeDiffActionFragment(f,j.add,this.resolveWholeRowDisplayValues(s,l,f,j.add)):this.mergeDiffActionFragment(f,j.remove,this.resolveWholeRowDisplayValues(s,l,f,j.remove)),E=this.buildChangedPropertyMetaDataFromDiff(S);a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(u&&Lf(y,u)){this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s);continue}const g=o.some(S=>!l.includes(S)&&Reflect.get(n,S)!==void 0),h=!g&&f.every(x),b=!g&&f.every(k);if(h){const S=this.resolveWholeRowDisplayValues(s,l,f,j.add),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,j.add,S));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(b){const S=this.resolveWholeRowDisplayValues(s,l,f,j.remove),E=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(f,j.remove,S));a.validationRowDiffs??(a.validationRowDiffs={}),a.validationRowDiffs[s]=E,a.validationRowColorizingDiffs[s]=E;continue}if(c.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,a,s),this.applyValueRangeFormattingRowColorizingDiff(l,t,a,s));continue}const N=c.map(S=>t[S]).filter(S=>z.isDiff(S)).map(S=>this.buildChangedPropertyMetaDataFromDiff(S)),v=xe.maxChangedPropertyMetaDataByDiffType(...N);if(!v)continue;const T=this.buildValidationRowValueDiffs(s,c,t);a.validationRowValueDiffs??(a.validationRowValueDiffs={}),a.validationRowValueDiffs[s]=T,a.validationRowColorizingDiffs[s]=this.asReplaceRowColorizingDiff(v),u&&this.mergeValueRangeLabelChipDiffs(n,u,a,s)}}mergeValueRangeLabelChipDiffs(n,t,a,i){const o=$o(Ut(n),t),l=[lr,st];if(!l.some(f=>o[f]))return;a.validationRowValueDiffs??(a.validationRowValueDiffs={});const c={...a.validationRowValueDiffs[i]??{}};for(const f of l){const y=o[f];if(!y||c[f])continue;const p=f===lr?"lower":"upper",g=this.attachValueRangeChipDiffPaths(y,p,t);c[f]=this.buildValueRangeLabelChipDiffMetadata(g)}a.validationRowValueDiffs[i]=c}applyValueRangeFormattingRowColorizingDiff(n,t,a,i){var c;const o=(c=a.validationRowValueDiffs)==null?void 0:c[i];if(!o||!Object.values(o).some(f=>f!==void 0))return;const l=n.map(f=>t[f]).filter(f=>z.isDiff(f));if(l.length===0)return;const s=l.map(f=>this.buildChangedPropertyMetaDataFromDiff(f)),u=xe.maxChangedPropertyMetaDataByDiffType(...s);u&&(a.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,a){const i=t==="lower"?[a.minimum,a.exclusiveMinimum]:[a.maximum,a.exclusiveMaximum],o=[],l=[];for(const s of i)s&&("beforeDeclarationPaths"in s&&s.beforeDeclarationPaths&&o.push(...s.beforeDeclarationPaths),"afterDeclarationPaths"in s&&s.afterDeclarationPaths&&l.push(...s.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...l.length>0?{afterDeclarationPaths:l}:{}}}buildValueRangeLabelChipDiffMetadata(n){return H(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:w.Green},removeBefore:{borderShadowColor:w.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,a){const i=Tf[n],o={};for(const l of t){const s=a[l];if(!z.isDiff(s)||i[l]===void 0)continue;const c=this.buildListValueDiffMetadata(s);o[l]=xe.maxChangedPropertyMetaDataByDiffType(o[l],c)??c}return o}resolveWholeRowDisplayValues(n,t,a,i){const o=[];return t.forEach((l,s)=>{const u=a[s],c=i===j.add?x(u)?u.afterValue:void 0:k(u)?u.beforeValue:void 0;c!==void 0&&o.push(zo(n,l,c))}),o}mergeDiffActionFragment(n,t,a){const i=n[0],o=n.flatMap(s=>k(s)||H(s)?s.beforeDeclarationPaths:[]),l=n.flatMap(s=>x(s)||H(s)?s.afterDeclarationPaths:[]);return t===j.add?{type:i.type,scope:i.scope,description:i.description,action:j.add,afterValue:a,afterDeclarationPaths:l}:{type:i.type,scope:i.scope,description:i.description,action:j.remove,beforeValue:a,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return H(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:w.Green},removeBefore:{borderShadowColor:w.Red,isFontMuted:!0}})}}class Yf extends Uf{aggregate(e,n,t,a,i){const o=super.aggregate(e,n,t,a,i);if(!M(e))return o;const{diffsMetaKey:l}=n,s=Reflect.get(e,l),u=z.isDiffsRecord(s),c=this.resolveWholeListFieldDiff(e,"enum",l),f=this.resolveWholeListFieldDiff(e,"examples",l),y=this.resolveListFieldItemDiffs(e,"enum",l),p=this.resolveListFieldItemDiffs(e,"examples",l),g=!!c||!!f||Object.keys(y).length>0||Object.keys(p).length>0;if(!o&&!u&&!g){const b=this.resolveRequiredMetaDiff(t,a,l);if(!b)return;const N={required:b};return this.aggregatePropertyTitleRowDiff(N),N}const h={...o??{}};if(u){const b=s.default;z.isDiff(b)&&(h.default=this.buildDefaultValueDiffMetadata(b))}if(c&&(h.enumDiff=c),Object.keys(y).length>0&&(h.enumValueDiffs=y),f&&(h.examplesDiff=f),Object.keys(p).length>0&&(h.examplesValueDiffs=p),this.aggregateEnumRowColorizingDiff(e,h),this.aggregateExamplesRowColorizingDiff(e,h),this.aggregateDefaultRowColorizingDiff(e,h),this.hasWholeNodeAddOrRemoveDiff(h))delete h.required;else{const b=this.resolveRequiredMetaDiff(t,a,l);b&&(h.required=b)}return this.stripMetaFlagDiffsWhenWholeNode(h),this.aggregatePropertyTitleRowDiff(h),Object.keys(h).length>0?h:void 0}aggregatePropertyTitleRowDiff(e){const n=e[R];if(n&&(x(n.data)||k(n.data))){e[bn]=n;return}for(const a of Wn){const i=e[a];if(i){e[bn]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[bn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var f;if(!n||typeof e!="string"||!e)return;const a=n.value(),i=(f=n.meta())==null?void 0:f._fragment;if(!M(i)&&!M(a))return;const o=String(e),l=M(i)?Reflect.get(i,t):void 0,s=M(i)?Reflect.get(i,"required"):void 0,u=M(a)&&"required"in a?a.required:void 0,c=Array.isArray(s)?s:Array.isArray(u)?u:void 0;if(z.isDiffsRecord(l)){const y=l.required;if(z.isDiff(y)){const p=this.resolveRequiredMetaDiffFromWholeArrayDiff(y,o);if(p)return p}if(z.isDiffsRecord(y)){const p=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(y,o,c);if(p)return p}}if(Array.isArray(c)){const y=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(c,t,o);if(y)return y}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(x(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(k(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(H(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],a=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==a.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const a=t.indexOf(n);if(a>=0){const i=e[String(a)];if(z.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const a=Reflect.get(e,n);if(!z.isDiffsRecord(a))return;const i=e.indexOf(t);if(i>=0){const o=a[String(i)];if(z.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(a,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(z.isDiff(t)){if(x(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(k(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return H(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const a=Reflect.get(e,t);if(!z.isDiffsRecord(a))return;const i=a[n];if(z.isDiff(i)){if(x(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(k(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const a={},i=Reflect.get(e,n);if(!Array.isArray(i))return a;const o=Reflect.get(i,t);return z.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,a),a}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,a]of Object.entries(e))!a||n[t]||(n[t]=this.buildListValueDiffMetadata(a))}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"enum","enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"examples","examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,a,i,o){const l=Reflect.get(e,t);if(!Array.isArray(l)||l.length===0)return;const s=n[R];if(s&&(x(s.data)||k(s.data))){n[o]=this.buildWholeNodeInheritedRowColorizingDiff(s);return}const u=n[a];if(u){n[o]=u;return}const c=n[i];if(!c||Object.keys(c).length===0)return;const f=xe.maxChangedPropertyMetaDataByDiffType(...Object.values(c));f&&(n[o]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),a=t!=null,i=n[R];if(i&&(x(i.data)||k(i.data))){(a||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const l=o.data;if(x(l)||k(l)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(l);return}H(l)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class Yt{static instance(e){return this.kindPropertyInstance}}P(Yt,"kindPropertyInstance",new Yf);const Wf="[JSON Schema][WithDiffs]";class $f extends Jo{constructor(n){super(n);P(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return Wf}createTree(){return new pf}createNodeDataBuilder(){return new hf((n,t)=>this.pick(n,t))}prepareSource(){return new gf(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,a,i,o){const l=super.createNodeFromRaw(n,t,a,i,o);return!l||!le(l)||this.assignNodeDiffs(l,a,o),l}createNodeDiffs(n,t,a){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(a.parent),o=this.takeComplexTreeNodeWithDiffs(a.container);return Yt.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n))return Uo.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Ko.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,a,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return Yt.instance(n).aggregateByDescendantDiffs(t,a,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&a)return Fo.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Kt.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l),this.updateNodeDiffsByDescendantDiffs(t,a.value,n.diffs,n.descendantDiffs);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),Ta(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Lo.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&le(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function xt(r){return!!r&&Object.keys(r).length>0}function _i(r){return!!r&&r.size>0}function zf(r){const e=new Set;for(const n of Object.values(r.diffs))n&&e.add(n.data.type);for(const n of Object.values(r.descendantDiffs))n&&e.add(n.data.type);for(const n of r.diffsSummary)e.add(n);for(const n of r.descendantDiffsSummary)e.add(n);for(const n of Object.values(r.diffsSeverities))n&&e.add(n.type);return e}function Ri(r,e){if(!(xt(r.diffs)||xt(r.descendantDiffs)||_i(r.diffsSummary)||_i(r.descendantDiffsSummary)||xt(r.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=zf(r);for(const a of t)if(e.diffTypes.has(a))return!0;return!1}function Wt(r,e,n){if(r.isCycle)return Ri(r,e);if(n.visiting.has(r.id))return!1;n.visiting.add(r.id);try{return Ri(r,e)?!0:r.type===se.COMPLEX?r.nestedNodes().some(t=>Wt(t,e,n)):r.childrenNodes().some(t=>Wt(t,e,n))}finally{n.visiting.delete(r.id)}}function Qo(r,e){return Wt(r,e,{visiting:new Set})}function Xf(r,e,n){if(!n){const o=r.map(()=>({visible:!0})),l=r.map((s,u)=>({kind:"node",node:s,sourceIndex:u}));return{memberships:o,visibleSequence:l}}const t=[],a=[];let i=0;for(;i<r.length;){if(e(r[i])){t.push({visible:!0}),a.push({kind:"node",node:r[i],sourceIndex:i}),i++;continue}const o=i;for(;i<r.length&&!e(r[i]);)i++;const l=r[o].id,s=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:l,isBlockStart:u===o,blockSize:s});a.push({kind:"placeholder",unchangedBlockId:l,blockSize:s,sourceIndex:o})}return{memberships:t,visibleSequence:a}}function Qf(r,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return Xf(r,a=>Qo(a,t),n)}function Zo(r){return r.kind===D.MESSAGE}function Zf(r){return r.kind===D.MESSAGE_SECTION_SELECTOR}function es(r){return r.kind===D.MESSAGE_CONTENT}function ec(r){return r.kind===D.MESSAGE_HEADERS&&r.key==="headers"}function nc(r){return r.kind===D.MESSAGE_PAYLOAD&&r.key==="payload"}function ns(r){return r.kind===D.MESSAGE_CHANNEL}function rc(r){return r.kind===D.MESSAGE_CHANNEL_PARAMETERS}function rs(r){return r.kind===D.MESSAGE_OPERATION}function La(r){return r.kind===D.EXTENSIONS}function lt(r){return r.kind===D.BINDINGS}function At(r){return r.kind===D.BINDING}function tc(r){return es(r)||ns(r)||rs(r)}function ac(r){return r.kind===D.SERVERS}function ic(r){return r.kind===D.SERVER}function je(r,e,n){var a;if(!M(r))return!1;if(!e)return(r==null?void 0:r[n])!==void 0;const t=(a=e[n])==null?void 0:a.data;return t?k(t)?t.beforeValue!==void 0:x(t)?t.afterValue!==void 0:H(t)?t.beforeValue!==void 0||t.afterValue!==void 0:an(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(r==null?void 0:r[n])!==void 0}const oc=r=>{if(!ur(r)||co(r))return r;if("example"in r&&!("examples"in r)){const{example:e}=r;return r.examples=[e],r}return r};function sc(r){if(!ur(r)||co(r))return r;const e=Reflect.ownKeys(r),n=e.filter(o=>typeof o=="string"&&o.startsWith("x-"));if(n.length===0)return r;const t=new Set(n),a=n.reduce((o,l)=>(Hd(l)&&(o[l]=r[l]),o),{}),i={};for(const o of e)typeof o=="string"&&t.has(o)||(i[o]=r[o]);return i.extensions=a,i}const lc=[oc,sc],Ke=(r=Be.root)=>({"/allOf":{"/*":()=>Ke(Be.allOf)},"/oneOf":{"/*":()=>Ke(Be.oneOf)},"/anyOf":{"/*":()=>Ke(Be.anyOf)},"/properties":{"/*":()=>Ke(Be.property)},"/items":()=>({...Ke(Be.items),"/*":({key:e})=>Pl(e)?Ke(Be.item):{}}),"/additionalProperties":()=>Ke(Be.additionalProperties),"/additionalItems":()=>Ke(Be.additionalItems),"/patternProperties":{"/*":()=>Ke(Be.patternProperty)},kind:r,transformers:lc});function dc(r){return({value:e,path:n,state:t,rules:a})=>{if(!a||!Array.isArray(a.transformers)||Array.isArray(e))return;const o=(a.transformers??[]).reduce((l,s)=>s(l,r,n,t),e);return o!==e&&ui(o)&&ui(e)&&Object.defineProperty(o,mo,{value:e,enumerable:!1}),{value:o}}}function uc(r){return({key:e,value:n,path:t,rules:a,state:i})=>{if(!a)return{done:!0};if(typeof e=="symbol")return{done:!0};if(n==null)return{done:!0};if(!Hl.includes(a==null?void 0:a.kind)||Array.isArray(n))return;const{parent:o,container:l,nodeIdPrefix:s}=i,u=s+Ll(t),{kind:c}=a,f={tree:r,crawlValue:n,crawlHooks:ja(r,n),crawlRules:a,alreadyConvertedMappingStack:i.alreadyConvertedMappingStack,nodeIdPrefix:u,nextLevel:i.treeLevel,nextMaxLevel:i.maxTreeLevel},y=l?r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,container:l,parent:l.parent,isCycle:!1},f):r.createJsonSchemaNode({id:u,kind:c,key:e,value:n,parent:o,isCycle:!1},f);if(l?l.addNestedNode(y.node):o==null||o.addChild(y.node),i.treeLevel>=i.maxTreeLevel&&y.node.type===jl.simple)return{done:!0};const p=i.treeLevel+1;if(y.value){const g=new Map(i.alreadyConvertedMappingStack);g.set(n,y.node);const h=n[mo];h!==void 0&&g.set(h,y.node);let b;return Ld(y.node)?b={parent:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel}:b={parent:o,container:y.node,alreadyConvertedMappingStack:g,nodeIdPrefix:s,treeLevel:p,maxTreeLevel:i.maxTreeLevel},{value:y.value,state:b}}else return{done:!0}}}const fc=2;function ja(r,e){return[Jd(r),dc(e),uc(r)]}const cc=(r,e=fc)=>{const n=new jd(r);if(!ur(r))return n;const t={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:e};return vn(r,ja(n,r),{state:t,rules:Ke()}),n},mc=2,yc=(r,e,n=mc)=>{const t=new Fd(r,e);if(!ur(r))return t;const a={parent:null,alreadyConvertedMappingStack:new Map,nodeIdPrefix:"#",treeLevel:0,maxTreeLevel:n};return vn(r,ja(t,r),{state:a,rules:Ke()}),t};function Le(r,e,n){return!!r&&(n===void 0||(Array.isArray(n)?n.includes(r.kind):r.kind===n))&&r instanceof e}function pc(r){return Le(r,Pd,D.BINDINGS)}function Ct(r){return Le(r,He,D.BINDING)}function gc(r){return Le(r,He)}function hc(r){return Le(r,He,D.MESSAGE_CHANNEL)}function bc(r){return Le(r,He)}function Ar(r){return Le(r,He,D.SERVER)}function Sc(r){return Le(r,He)}function vc(r){return Le(r,He,D.MESSAGE_HEADERS)}function Dc(r){return Le(r,He,D.MESSAGE_PAYLOAD)}function wc(r){return Le(r,He,D.MESSAGE)}function Nc(r){return Le(r,He,D.MESSAGE_OPERATION)}function Tc(r){return Le(r,He,D.MESSAGE_SECTION_SELECTOR)}function Ec(r){return Le(r,He,[D.MESSAGE_CONTENT,D.MESSAGE_CHANNEL,D.MESSAGE_OPERATION])}const ts=r=>{const e=pe(),{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["address-row"],[a]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(e){case De:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(xn,{left:d.jsx(Vt,{...r,layoutSide:Y}),right:d.jsx(Vt,{...r,layoutSide:Z})})});default:return d.jsx(Hn,{content:d.jsx(Vt,{...r,layoutSide:Z})})}},kc={send:"bg-sky-400",receive:"bg-green-500"},Vt=r=>{const{action:e,address:n,layoutSide:t,diff:a}=r,{[ie]:i}=r,o=m.useCallback(()=>{const s=a&&xc(a);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${kc[e]} text-white rounded-md`,children:e.toUpperCase()});if(a&&(x(a.data)&&t===Y&&(u=null),k(a.data)&&t===Z&&(u=null)),!s)return d.jsxs(d.Fragment,{children:[u,d.jsx(Nt,{value:n,variant:B.h4,layoutSide:t,diff:a,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:c,beforeSuffix:f,afterSuffix:y,diff:p}=s,g=t===Y?f:y;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Nt,{value:c,variant:B.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Nt,{value:g,variant:B.h4,layoutSide:t,diff:p,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,a,t]),l=m.useMemo(()=>{const s=new Set;if(a){const{styles:u}=a;t===Y?s.add(X.background(u.before.backgroundColor)):s.add(X.background(u.after.backgroundColor))}return Array.from(s)},[a,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${cr} ${l.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function xc(r){const{data:e}=r;if(!H(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const a=n.indexOf("{"),i=t.indexOf("{"),o=a===-1?n:n.slice(0,a),l=i===-1?t:t.slice(0,i);if(o!==l)return!1;const s={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:a===-1?"":n.slice(a),afterSuffix:i===-1?"":t.slice(i),diff:{...r,data:s}}}ts.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Ac=m.memo(r=>r.mergedSource===null?null:d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Cc,{...r})})),Cc=m.memo(r=>{const{mergedSource:e,operationKeys:n,displayMode:t=kn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:l,diffTypes:s}=r,u=m.useMemo(()=>Xe(a),[a]),c=m.useMemo(()=>new $u({source:e,referenceNamePropertyKey:o,diffsMetaKeys:l,operationKeys:n,logger:u}),[e,o,l,n,u]),f=m.useMemo(()=>(c==null?void 0:c.build())??null,[c]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",f);const y=f==null?void 0:f.root;return!y||!Zo(y)?null:d.jsx(rt.Provider,{value:l,children:d.jsx(Ea.Provider,{value:s,children:d.jsx(No.Provider,{value:a,children:d.jsx(En.Provider,{value:t,children:d.jsx(On.Provider,{value:De,children:d.jsx(Pe.Provider,{value:0,children:d.jsx(di,{node:y,noHeading:i})})})})})})})});Ac.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Ja=m.createContext(void 0);function Vc(){return m.useContext(Ja)}const dt=r=>{const{state:e,onGlobalSelectNestedNode:n,$nodeChange:t}=r,a=Kd(),i=Je(),l=e.node.newDataLevel?i+1:i,s=e.node.meta,u=e.nested,[c,f]=m.useState(e.selected),y=T=>{if(T){e.select(T),f(T),n(T);const S=u.find(E=>E.id===T);a==null||a(S)}},p=pe(),g=m.useMemo(()=>{const T={};return u.forEach(S=>{const E=S.value().$changes??{},C=ka({node:S});C&&(T[S.id]={...C,...Object.keys(E).length?{$changes:E}:{}})}),T},[u]),h=Je()+1,b=u.find(T=>(T==null?void 0:T.id)===c),N=Gd(b)?b==null?void 0:b.kind:"",v=yo(t??(s==null?void 0:s.$nodeChange));return d.jsx(Pe.Provider,{value:l,children:d.jsx(Bd,{nodesTypeData:g,selectedNodeId:c,combiner:N,onSelect:y,layoutMode:p,level:h,$nodeChange:v,$nestedChanges:s==null?void 0:s.$nestedChanges,$nestedChangesSummary:p!==ze?e.$nestedChangesSummary:void 0})})};dt.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const ut=m.createContext(void 0);function as(){return m.useContext(ut)}const zn=m.memo(r=>{const{beforeLevel:e,afterLevel:n,children:t}=r,[a,i]=m.useState(0),[o,l]=m.useState(0);m.useEffect(()=>{i(e),l(n)},[e,n]);const s=m.useMemo(()=>({beforeLevel:a,afterLevel:o}),[a,o]);return d.jsx(wd.Provider,{value:s,children:t})});zn.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function is(r){let e;for(const n of r){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class _c extends wa{constructor(){super()}}const ft={PROPERTY:"property"},dr=Object.values(ft),re={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Rc extends Qr{constructor(){super(...arguments);P(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,a,i){}}const ke=class ke{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,a=ke.isArrayItemKey(e);return ke.transformRawJsoValueToBaseJsoNodeValue(n,t,a)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const a=ke.getValueType(e),i=ke.isPrimitiveValue(a);return{title:n,value:e,valueType:a,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:ke.isPredefinedValueSet(a)}}static isPredefinedValueSet(e){return e===re.BOOLEAN||e===re.NULL}static isPrimitiveValue(e){return e!==re.JSON_SCHEMA&&e!==re.MULTI_SCHEMA&&e!==re.OBJECT&&e!==re.ARRAY}static getValueType(e){return typeof e=="string"?re.STRING:typeof e=="number"?re.NUMBER:typeof e=="boolean"?re.BOOLEAN:typeof e=="object"?e===null?re.NULL:Array.isArray(e)?re.ARRAY:ke.isJsonSchema(e)?re.JSON_SCHEMA:ke.isMultiSchema(e)?re.MULTI_SCHEMA:re.OBJECT:re.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=Ht in e&&typeof e.type=="string"&&Jl.some(a=>a===e.type)||Ot in e&&Array.isArray(e.oneOf)&&e.oneOf.every(a=>ke.isJsonSchema(a))||Pt in e&&Array.isArray(e.anyOf)&&e.anyOf.every(a=>ke.isJsonSchema(a))||It in e&&Array.isArray(e.allOf)&&e.allOf.every(a=>ke.isJsonSchema(a))||Lr in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([io,Fl,Kl,fo,Gl,Bl,Ul,Ht,ao,Lt,oo,la,fa,ca,da,ua,ya,ma,pa,aa,ta,ia,sa,oa,Zi,eo,uo,ra,zi,Qi,Xi,It,Ot,Pt,Yl,lo,ro,to,so,no,Wl,Lr]);return n&&Object.keys(e).every(a=>t.has(a)||ke.isExtensionPropertyInJsonSchema(a)||ke.isAllowedCustomPropertyInJsonSchema(a))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&M(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!ha(e))return e;const t=oe(e[n]);if(!t)return e;const a=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=a.intersection(i);let l;for(const s of o){const u=e[s],c=t[s];if(u===void 0||c===void 0||!H(c))continue;const{beforeValue:f,afterValue:y}=c,p=M(f),g=Array.isArray(f),h=M(y),b=Array.isArray(y);if(!(g&&h||p&&b))continue;l||(l={...e});const v={...f,...y};l[s]=v}return l??e}};P(ke,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:re.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let F=ke;const Mc=(r,e,n,t,a)=>F.mergeComparisonBetweenArrayAndObject(e,a.diffMetaKeys.diffsMetaKey);function os(){return{"/*":()=>os(),transformers:[Mc],kind:ft.PROPERTY}}function qc(r){return zr(r)}const Ic=new Set(dr);class Oc extends Xr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){if(!this.isJsoTreeNodeKind(e))return null;const i=F.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return Ic.has(e)}}class Pc extends jn{aggregate(e,n,t,a){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!x(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class ss{static instance(e){if(!this.instances.has(null)){const n=new Pc;this.instances.set(null,n)}return this.instances.get(null)}}P(ss,"instances",new Map);class Hc extends Zn{constructor(){super(...arguments);P(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});P(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!M(n)&&!Array.isArray(n))return;const{diffsMetaKey:a}=t,i=oe(n[a]);if(!i)return;const o={};for(const[l,s]of Object.entries(i)){if(!s)continue;let u=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_FLAGS,y=this.DEFAULT_DIFF_FLAGS,p=Oe;if(x(s)){const{afterValue:g}=s,h=F.getValueType(g),b=F.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},f={...f,increaseLevel:!1},c={isContentVisible:b,isHeaderVisible:!0,backgroundColor:w.Green},y={...y,increaseLevel:!0},p=hn}if(k(s)){const{beforeValue:g}=s,h=F.getValueType(g);u={isContentVisible:F.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:w.Red},f={...f,increaseLevel:!0},c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},y={...y,increaseLevel:!1},p=hn}if(H(s)){const{beforeValue:g,afterValue:h}=s,b=F.getValueType(g),N=F.getValueType(h),v=F.isPrimitiveValue(b),T=F.isPrimitiveValue(N),S=F.isPredefinedValueSet(b),E=F.isPredefinedValueSet(N);u={isContentVisible:v,isHeaderVisible:!0,backgroundColor:w.Yellow},v&&(S?u.borderShadowColor=w.Yellow:u.textHighlighterColor=w.Yellow),c={isContentVisible:T,isHeaderVisible:!0,backgroundColor:w.Yellow},T&&(E?c.borderShadowColor=w.Yellow:c.textHighlighterColor=w.Yellow),p=$l}o[l]={data:s,styles:{before:u,after:c},flags:{before:f,after:y},highlightingMode:p}}return o}}class ls{static instance(e){if(!this.instances.has(null)){const n=new Hc;this.instances.set(null,n)}return this.instances.get(null)}}P(ls,"instances",new Map);class Lc extends xe{aggregate(e){const n=e[R];if(n){const o=n.data,l={type:o.type,causedAt:[]};return H(o)||k(o)?l.causedAt=o.beforeDeclarationPaths[0]:x(o)&&(l.causedAt=o.afterDeclarationPaths[0]),{[G.TitleRow]:l}}const t=e.value;if(!t)return;const a=t.data,i={type:a.type,causedAt:[]};return H(a)||k(a)?i.causedAt=a.beforeDeclarationPaths[0]:x(a)&&(i.causedAt=a.afterDeclarationPaths[0]),{[G.TitleRow]:i}}}class ds{static instance(e){return this.instances.has(null)||this.instances.set(null,new Lc),this.instances.get(null)}}P(ds,"instances",new Map);class jc extends Na{aggregate(e,n,t){const a=new Set;if(!e)return a;for(const i of Object.values(e))i&&a.add(i.data.type);return a}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!x(n)&&!k(n)&&!H(n)&&!an(n))return!1;return!0}}class Jc{static instance(e){return new jc}}class Fc extends z{isComplexValue(e){return M(e)||Array.isArray(e)}aggregate(e,n,t,a,i){const o={};if(a){const l=a.diffs[R];if(l){const{data:s}=l;if(x(s)){const{afterValue:u}=s,c=F.getValueType(u);if(!F.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=F.getValueType(y),g=F.isPrimitiveValue(p),h={data:{...s,afterValue:y},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},after:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:w.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:hn,inherited:!0};return o[R]=h,o}return o[R]=l,o}if(k(s)){const{beforeValue:u}=s,c=F.getValueType(u);if(!F.isPrimitiveValue(c)&&this.isComplexValue(u)){const y=u[t],p=F.getValueType(y),g=F.isPrimitiveValue(p),h={data:{...s,beforeValue:y},styles:{before:{isContentVisible:g,isHeaderVisible:!0,backgroundColor:w.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:hn,inherited:!0};return o[R]=h,o}return o[R]=l,o}if(H(s)){const{beforeValue:u,afterValue:c}=s,f=F.getValueType(u),y=F.getValueType(c),p=F.isPrimitiveValue(f),g=F.isPrimitiveValue(y);if(p&&g)return o[R]=l,o;if(!p&&this.isComplexValue(u)&&g){const h=u[t],b=F.getValueType(h),N=F.isPrimitiveValue(b),v=F.isPredefinedValueSet(b),T={data:{...s,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:N,isHeaderVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:hn,inherited:!0};return N&&(T.styles.before.textHighlighterColor=w.Yellow),v&&(T.styles.before.borderShadowColor=w.Yellow),o[R]=T,o}if(!g&&this.isComplexValue(c)&&p){const h=c[t],b=F.getValueType(h),N=F.isPrimitiveValue(b),v=F.isPredefinedValueSet(b),T={data:{...s,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:w.Gray},after:{isContentVisible:N,isHeaderVisible:!0,backgroundColor:w.Yellow,textHighlighterColor:w.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:hn,inherited:!0};return N&&(T.styles.after.textHighlighterColor=w.Yellow),v&&(T.styles.after.borderShadowColor=w.Yellow),o[R]=T,o}if(!p&&this.isComplexValue(u)&&!g&&this.isComplexValue(c)){const h=u[t],b=c[t],N=F.getValueType(h),v=F.getValueType(b),T=F.isPrimitiveValue(N),S=F.isPrimitiveValue(v),E=F.isPredefinedValueSet(N),C=F.isPredefinedValueSet(v),V={data:{...s,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&T,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?w.Gray:w.Yellow,textHighlighterColor:h!==void 0?w.Yellow:void 0},after:{isContentVisible:b!==void 0&&S,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?w.Gray:w.Yellow,textHighlighterColor:b!==void 0?w.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:hn,inherited:!0};return T&&(V.styles.before.textHighlighterColor=w.Yellow),S&&(V.styles.after.textHighlighterColor=w.Yellow),E&&(V.styles.before.borderShadowColor=w.Yellow),C&&(V.styles.after.borderShadowColor=w.Yellow),o[R]=V,o}}}else{const s=a.descendantDiffs[t];if(s)return o[R]=s,o}}}}class us{static instance(e){return this.instances.has(null)||this.instances.set(null,new Fc),this.instances.get(null)}}P(us,"instances",new Map);class Kc extends Rc{constructor(n){const{source:t,diffsMetaKeys:a,supportJsonSchema:i=!1,logger:o=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"diffsMetaKeys");P(this,"logger");P(this,"nodeDataBuilder");P(this,"CHANGE_SEVERITIES",{[zl]:6,[Xl]:5,[Ql]:4,[Zl]:3,[ed]:2,[nd]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=a,this.logger=o,this.tree=new _c,this.nodeDataBuilder=new Oc}build(){if(!M(this.source))return this.tree;Wr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Zr,diffMetaKeys:this.diffsMetaKeys},t=os(),a=qc({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(i,o,l,s,u)=>this.createNodeFromRaw(i,o,l,s,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===se.SIMPLE,isComplexNode:i=>i.type===se.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!M(o)&&!Array.isArray(o))return!0;const l=i.value();return l?this.supportJsonSchema&&(l.before.valueType===re.JSON_SCHEMA||l.after.valueType===re.JSON_SCHEMA||l.before.valueType===re.MULTI_SCHEMA||l.after.valueType===re.MULTI_SCHEMA):!1}});return vn(this.source,a,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return M(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,a,i,o){const{parent:l=null,newDataLevel:s}=o,u=this.createNodeValue(t,a,o),c=this.createNodeMeta(t,o),f={type:se.SIMPLE,parent:l&&this.isJsoSimpleTreeNodeWithDiffs(l)?l:null,container:null,value:u,meta:c,newDataLevel:s},y=this.tree.createSimpleNode(n,t,a,!1,f);this.assignNodeDiffs(y,a,o);const g=y.diffs[R];if(g){const{data:h}=g;if(x(h)&&u&&(u.before=F.DEFAULT_BASE_JSO_NODE_VALUE),k(h)&&u&&(u.after=F.DEFAULT_BASE_JSO_NODE_VALUE),H(h)){const{beforeValue:b}=h,N=F.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=N)}}return y}createNodeMeta(n,t){const{value:a}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,a){if(!this.isJsoTreeNodeKind(t))return;const i=a.parent&&this.isJsoSimpleTreeNodeWithDiffs(a.parent)?a.parent:void 0,o=a.container&&this.isJsoComplexTreeNodeWithDiffs(a.container)?a.container:void 0;return us.instance(t).aggregate(a.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,a,i){if(this.isJsoTreeNodeKind(n))return Jc.instance(n).aggregate(t,a,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return ls.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,a,i,o){if(this.isJsoTreeNodeKind(n)&&a)return ss.instance(n).aggregate(t,a,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return ds.instance(n).aggregate(t)}assignNodeDiffs(n,t,a){const i=this.createNodeDiffs(n.key,t,a);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,a.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const l=this.createNodeDescendantsDiffs(t,a);l&&Object.assign(n.descendantDiffs,l);const s=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,a.value,this.diffsMetaKeys);s&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(s)),Ta(n.descendantDiffsSummary,n.diffs,a.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const c=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(a);c&&Object.assign(n.diffsSeverities,c)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const a=t.diffsSeverities["title-row"];if(a)return{"title-row":a}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[R];if(!t||!H(t.data))return!1;const a=F.getValueType(t.data.beforeValue),i=F.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(a),l=this.isJsoComplexValueType(i);return o!==l}isJsoComplexValueType(n){return n===re.OBJECT||n===re.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[R]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const a=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(a)return a}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===se.SIMPLE||n.type===se.COMPLEX))}isJsoTreeNodeKind(n){return dr.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===se.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===se.COMPLEX}maxDiffType(n){let t;for(const a of n)this.compareDiffTypes(a,t)>0&&(t=a);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const We={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function fs(r,e){if(e)return{type:"object",properties:{[r]:e}}}function $t(r,e,n,t){if(!e)return;const a=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[r]:e,...a&&i?{[i]:{[r]:a}}:{}}}}function Gc(r,e){if(e&&!(e.valueType!==We.JSON_SCHEMA&&e.valueType!==We.MULTI_SCHEMA))return M(e.value)?fs(r,e.value):void 0}function Bc(r,e,n,t){if(e&&!(e.before.valueType!==We.JSON_SCHEMA&&e.before.valueType!==We.MULTI_SCHEMA&&e.after.valueType!==We.JSON_SCHEMA&&e.after.valueType!==We.MULTI_SCHEMA)){if((e.before.valueType===We.JSON_SCHEMA||e.before.valueType===We.MULTI_SCHEMA)&&M(e.before.value))return $t(r,e.before.value,n,t);if((e.after.valueType===We.JSON_SCHEMA||e.after.valueType===We.MULTI_SCHEMA)&&M(e.after.value))return $t(r,e.after.value,n,t)}}const Fa=m.memo(r=>{const{isVisible:e,value:n,className:t}=r;return e?d.jsx("span",{className:t,children:`${n}`}):null});Fa.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function cs(r){const{appearance:e}=r;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function Uc(r){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=r,a=cs({appearance:e});return m.useMemo(()=>[a,e==="text"?X.highlighter(n):"",e==="block"?X.borderShadow(t):""].filter(Boolean).join(" "),[e,t,a,n])}const Or=m.memo(r=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,borderShadowColor:i}=r,o=Uc({appearance:t,textHighlighterColor:a,borderShadowColor:i});return d.jsx(Fa,{isVisible:e,value:n,className:o})});Or.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Ka=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Ge(),i=er(),{beforeLevel:o,afterLevel:l}=Sa(),[s,u]=m.useState(!0),c=m.useCallback(()=>{u(q=>!q)},[]),f=e.value(),y=e.diffs,p=e.descendantDiffsSummary,g=m.useMemo(()=>y[R],[y]),h=m.useCallback(q=>{if(!f)return d.jsx(d.Fragment,{});if(!g)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(Or,{isVisible:f.after.isPrimitive,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text"}),!s&&d.jsx(xa,{values:Array.from(p)})]});const{styles:A}=g;return q===Y?d.jsx(Or,{isVisible:A.before.isContentVisible,value:f.before.value,appearance:f.before.isPredefinedValueSet?"block":"text",textHighlighterColor:A.before.textHighlighterColor,borderShadowColor:A.before.borderShadowColor}):q===Z?d.jsx(Or,{isVisible:A.after.isContentVisible,value:f.after.value,appearance:f.after.isPredefinedValueSet?"block":"text",textHighlighterColor:A.after.textHighlighterColor,borderShadowColor:A.after.borderShadowColor}):d.jsx(d.Fragment,{})},[s,p,f,g]),b=m.useMemo(()=>{const q=on(e);return ae(q,{resolveDiff:()=>g})},[e,g]),N=e.childrenNodes(),v=m.useMemo(()=>{const q=!!f,A=!(f!=null&&f.before.isPrimitive)&&(f==null?void 0:f.before.valueType)!==re.UNKNOWN,O=!(f!=null&&f.after.isPrimitive)&&(f==null?void 0:f.after.valueType)!==re.UNKNOWN;return q&&(A||O)},[f]),T=m.useMemo(()=>!(f!=null&&f.before.isArrayItem)&&!(f!=null&&f.after.isArrayItem),[f]),S=m.useMemo(()=>n?Bc(e.key,f,g,i):void 0,[i,e.key,f,g,n]);if(S)return i?d.jsx(pt,{schema:S,expandedDepth:2,displayMode:a,layoutMode:De,metaKeys:i,overriddenKind:"parameters"},e.id):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const E=is(N),[C,V]=(()=>{let q=o+1,A=l+1;const[O]=N,L=O==null?void 0:O.diffs[R];return L&&E&&(q=L.flags.before.increaseLevel?o+1:o,A=L.flags.after.increaseLevel?l+1:l),[q,A]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ce,{"data-precededby":t,value:`${e.key}`,expandable:v,expanded:s,onClickExpander:v?c:void 0,variant:B.body2,enableHeaderValue:T,subheader:h,usage:et.JsoProperty,highlightingMode:g==null?void 0:g.highlightingMode,...b}),s&&d.jsx(zn,{beforeLevel:C,afterLevel:V,children:N.map(q=>d.jsx(Ka,{"data-precededby":_.JSO_PROPERTY,node:q,supportJsonSchema:n},q.id))})]})};Ka.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const ct=m.memo(r=>r.mergedSource===null?null:d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(Yc,{...r})})),Yc=m.memo(r=>{const{mergedSource:e,displayMode:n=kn,initialLevel:t=0,supportJsonSchema:a=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:l}=r,{[ie]:s}=r,u=m.useMemo(()=>Xe(i),[i]),c=m.useMemo(()=>new Kc({source:e,supportJsonSchema:a,diffsMetaKeys:o,logger:u}),[e,a,o,u]),f=m.useMemo(()=>c.build(),[c]);u.debug("[JSO Diffs] Source:",e),u.debug("[JSO Diffs] Tree:",f);const y=f.root;if(!y)return null;const p=y.childrenNodes();if(p.length===0)return null;const g=is(p),[h,b]=(()=>{let N=t,v=t;const[T]=p,S=T.diffs[R];return S&&g&&(N=S.flags.before.increaseLevel?t:t-1,v=S.flags.after.increaseLevel?t:t-1),[N,v]})();return d.jsx(rt.Provider,{value:o,children:d.jsx(Ea.Provider,{value:l,children:d.jsx(En.Provider,{value:n,children:d.jsx(On.Provider,{value:De,children:d.jsx(zn,{beforeLevel:h,afterLevel:b,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:p.map((N,v)=>d.jsx(Ka,{"data-precededby":v===0?s:_.JSO_PROPERTY,node:N,supportJsonSchema:a},N.id))})})})})})})});ct.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};class Wc extends ga{constructor(){super()}}function ms(){return{"/*":()=>ms(),kind:ft.PROPERTY}}function $c(r){return zr(r)}const zc=new Set(dr);class Xc extends Xr{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!this.isJsoTreeNodeKind(e)||e!==ft.PROPERTY?null:F.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return zc.has(e)}}class Qc extends Qr{constructor(n){const{source:t,supportJsonSchema:a=!1,materializeDepth:i,logger:o=Xe()}=n;super();P(this,"tree");P(this,"source");P(this,"supportJsonSchema");P(this,"materializeDepth");P(this,"logger");P(this,"nodeDataBuilder");P(this,"lazyState",new Do);P(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=a,this.materializeDepth=i,this.logger=o,this.tree=new Wc,this.nodeDataBuilder=new Xc}build(){if(!M(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Zr,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=ms();return this.crawlHooks=$c({source:this.source,tree:this.tree,supportedNodeKinds:dr,createNodeFromRaw:(a,i,o,l,s)=>this.createNodeFromRaw(a,i,o,l,s),createNodeParams:(a,i,o)=>({value:a??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(a,i)=>({parent:i,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,i)=>({parent:a.parent,container:i,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isJsoSimpleTreeNode(a),isComplexNode:a=>this.isJsoComplexTreeNode(a),resolveNodeKey:(a,i)=>this.resolveNodeKey(a,i),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,i)=>{if(!M(i)&&!Array.isArray(i))return!0;const o=a.value();return o?this.supportJsonSchema&&(o.valueType===re.JSON_SCHEMA||o.valueType===re.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:Nd}}),vn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const a=this.lazyState.pending.get(n.id);if(!a||!this.crawlHooks)return;this.lazyState.pending.delete(a.nodeId);const i={parent:n,container:null,ancestors:wo(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:a.path};vn(a.fragment,this.crawlHooks,{state:i,rules:a.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,a,i,o){const{parent:l,container:s,newDataLevel:u}=o;if(i){const p=this.createNodeMeta(t,o),g={type:se.COMPLEX,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:null,meta:p,newDataLevel:u};return this.tree.createComplexNode(n,t,a,!1,g)}const c=this.createNodeValue(t,a,{...o,parent:l,container:s}),f=this.createNodeMeta(t,o),y={type:se.SIMPLE,parent:l&&this.isJsoSimpleTreeNode(l)?l:null,container:s&&this.isJsoComplexTreeNode(s)?s:null,value:c,meta:f,newDataLevel:u};return this.tree.createSimpleNode(n,t,a,!1,y)}createNodeMeta(n,t){const{value:a,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(n,t,a){const{value:i}=a;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,l)=>this.pick(o,l))}isJsoSimpleTreeNode(n){return n.type===se.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const mt=r=>d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"JSON Schema Viewer"}),children:d.jsx(Zc,{...r})}),Zc=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=kn,overriddenKind:a,topLevelPropsMediaTypes:i,customizationOptions:o={},initialLevel:l=0}=r,s=m.useMemo(()=>cc(e),[e]),c=m.useMemo(()=>new Co(s,n),[n,s]).root;let f=null;return tt(c)&&(f=d.jsx(yt,{state:c,overriddenKind:a})),at(c)&&(f=d.jsx(dt,{state:c,onGlobalSelectNestedNode:()=>null})),d.jsx(ut.Provider,{value:o,children:d.jsx(Ja.Provider,{value:i,children:d.jsx(En.Provider,{value:t,children:d.jsx(Pe.Provider,{value:l,children:f})})})})};mt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""}}};const ys=m.memo(r=>{const{isVisible:e,value:n,appearance:t}=r,a=cs({appearance:t});return d.jsx(Fa,{isVisible:e,value:n,className:a})});ys.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ga=r=>{const{node:e,supportJsonSchema:n=!1}=r,{[ie]:t}=r,a=Ge(),i=Je(),[o,l]=m.useState(!0),s=m.useCallback(()=>{l(g=>!g)},[]),u=e.value(),c=m.useMemo(()=>!!u&&!u.isPrimitive,[u]),f=m.useCallback(()=>u?d.jsx(ys,{isVisible:u.isPrimitive,value:u.value,appearance:u.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[u]),y=e.childrenNodes(),p=m.useMemo(()=>n?Gc(e.key,u):void 0,[e.key,u,n]);return p?d.jsx(mt,{schema:p,expandedDepth:2,displayMode:a,overriddenKind:"parameters"},e.id):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(ce,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:o,onClickExpander:s,variant:B.body2,enableHeaderValue:!(u!=null&&u.isArrayItem),subheader:f,usage:et.JsoProperty}),o&&d.jsx(Pe.Provider,{value:i+1,children:y.map(g=>d.jsx(Ga,{"data-precededby":_.JSO_PROPERTY,node:g,supportJsonSchema:n}))})]})};Ga.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const yr=m.memo(r=>r.source===null?null:d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"JSO Viewer"}),children:d.jsx(em,{...r})})),em=m.memo(r=>{const{source:e,displayMode:n=kn,layoutMode:t=ze,initialLevel:a=0,supportJsonSchema:i=!1,devMode:o=!1}=r,{[ie]:l}=r,s=m.useMemo(()=>Xe(o),[o]),u=m.useMemo(()=>new Qc({source:e,supportJsonSchema:i,logger:s}),[e,i,s]),c=m.useMemo(()=>u.build(),[u]);s.debug("[JSO] Source:",e),s.debug("[JSO] Tree:",c);const f=c.root;if(!f)return null;const y=f.childrenNodes();return y.length===0?null:d.jsx(En.Provider,{value:n,children:d.jsxs(On.Provider,{value:t,children:[" ",d.jsx(Pe.Provider,{value:a,children:d.jsx("div",{"data-testid":"jso-viewer",children:y.map((p,g)=>d.jsx(Ga,{"data-precededby":g===0?l:_.JSO_PROPERTY,node:p,supportJsonSchema:i},p.id))})})]})})});yr.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""}}};const Mi=m.memo(r=>{const{diff:e,layoutSide:n}=r,t=Je(),{diffStylesClasses:a,isVisible:i}=m.useMemo(()=>{if(!e)return{diffStylesClasses:[],isVisible:!0};let o=!0;const l=new Set;return n===Y&&(x(e)&&(l.add(X.background(w.Gray)),o=!1),k(e)&&l.add(X.background(w.Red))),n===Z&&(x(e)&&l.add(X.background(w.Green)),k(e)&&(l.add(X.background(w.Gray)),o=!1)),{diffStylesClasses:Array.from(l),isVisible:o}},[e,n]);return d.jsxs("div",{className:`flex flex-row h-full ${a.join(" ")}`,children:[d.jsx(Pn,{level:t+1,lastInvisible:!0}),i&&d.jsx(Vo,{children:"Extensions"})]})}),nm=[],ps=r=>{const{extensions:e,$nodeChange:n}=r,t=Je(),a=Ge(),i=pe(),o=er(),l=i===fi,s=i===De,u=m.useMemo(()=>{let g=rm(n);return g||(g=am(e,o)),g},[n,e,o]),c=m.useMemo(()=>u==null?void 0:u.type,[u]),f=m.useMemo(()=>{if(!u)return;let g=[];return(k(u)||H(u))&&(g=u.beforeDeclarationPaths[0]??[]),x(u)&&(g=u.afterDeclarationPaths[0]??[]),g.length>0?`caused by ${g.join(".")} change`:void 0},[u]),y=m.useMemo(()=>{const g=d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Pn,{level:t+1,lastInvisible:!0}),d.jsx(Vo,{children:"Extensions"})]});switch(i){case fi:return null;case De:return d.jsx(Ln,{diffType:c,diffTypeCause:f,children:d.jsx(xn,{left:d.jsx(Mi,{diff:u,layoutSide:Y}),right:d.jsx(Mi,{diff:u,layoutSide:Z})})});default:return g}},[i,t,u,f,c]),p=m.useMemo(()=>{if(l)return null;if(s&&o){const g=tm(e,u,o);return d.jsx(ct,{mergedSource:g,initialLevel:t+1,displayMode:a,diffMetaKeys:o,diffTypes:nm})}return d.jsx(yr,{source:e,initialLevel:t+1})},[l,s,o,e,t,u,a]);return p?d.jsxs("div",{className:"flex flex-col",children:[y,p]}):null};function rm(r){if(!r)return;const{depth:e,...n}=r;return n}function tm(r,e,n){if(!e||!n)return r;const t=Object.keys(r),a={};for(const i of t)Ir(i)&&(a[i]=e);return{...r,[n.diffsMetaKey]:a}}function am(r,e){var l;if(!e)return;const{diffsMetaKey:n}=e,t=Object.keys(r),a=oe(te(r,[n]));if(!a)return;const i=Object.keys(a);if(i.length===0||t.length!==i.length)return;const o=a[i[0]];for(const s of i)if(((l=a[s])==null?void 0:l.action)!==(o==null?void 0:o.action))return;return o}ps.__docgenInfo={description:"",methods:[],displayName:"Extensions",props:{extensions:{required:!0,tsType:{name:"NonNullable",elements:[{name:"Record",raw:"IJsonSchemaBaseType['extensions']"}],raw:"NonNullable<IJsonSchemaBaseType['extensions']>"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""}}};const im=["type","nullable","title","format"],om=["required","readOnly","writeOnly","deprecated"],gs=r=>{const{nodeId:e,nodeTitleData:n,nodeTypeData:t,isCircularRef:a,readOnly:i,writeOnly:o,deprecated:l,isExpandable:s,expanded:u,isRoot:c,onToggleExpander:f,layoutMode:y=po,level:p=0,$changes:g,$metaChanges:h,$nodeChange:b,$nodeChangesSummary:N}=r,v=!!b,T=rd(),S=Vc(),E=ur(S)&&(n!=null&&n.title)&&S[n.title]?S[n.title]:void 0,C=td(v?void 0:N),V=m.useCallback(de=>T.length===0||T.includes(de),[T]),{isDocumentLayoutMode:q,isInlineDiffsLayoutMode:A,isSideBySideDiffsLayoutMode:O}=go(y),L=!!g&&im.some(de=>Yn(g[de]))||!!h&&om.some(de=>Yn(h[de])),{nodeAdded:I,nodeRemoved:J,nodeReplaced:K,nodeRenamed:ee}={nodeAdded:v&&b.action===j.add,nodeRemoved:v&&b.action===j.remove,nodeReplaced:v&&b.action===j.replace,nodeRenamed:v&&b.action===j.rename},we=ad(id(g,h,ld),T),[Ne,Ve]=v?jr(b):L?jr(...we):od,Fe=sd(Ne,T),Vn=v?ci[b==null?void 0:b.action]:L?ci[j.replace]:"",U=({layoutSide:de})=>{const Qe=O?"w-1/2":"w-full",ge=!q&&!v&&L&&!!(h!=null&&h.required),Ze=Yd(),Q=Ze&&Ze===de,ue=c&&!s,dn=["flex flex-row",!ue&&"gap-2",Qe].filter(Boolean).join(" "),_n=()=>d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(_o,{...t,showNullable:!0,layoutMode:y,layoutSide:de,$changes:g})}),dd.isNotEmpty(C)&&!q&&s&&!u&&d.jsx("div",{className:"text-xs font-normal text-slate-500",children:d.jsx(xa,{values:C,filter:V})}),a&&d.jsx(it,{text:Aa,children:d.jsx(Ca,{})}),d.jsx(Va,{requiredChanged:ge,readOnly:i,writeOnly:o,deprecated:l,layoutSide:de,isNodeChanged:v,isContentChanged:L,$nodeChange:b,$metaChanges:h}),E&&d.jsx(ud,{label:E,colorSchema:fd(cd),layoutMode:y,layoutSide:de,isNodeChanged:!1,isContentChanged:!1})]});return d.jsxs("div",{className:dn,children:[d.jsxs("div",{className:"flex flex-row relative",children:[d.jsx(Pn,{level:p}),ue?d.jsx("div",{className:"w-5"}):d.jsx(Wd,{isRoot:c,isExpandable:s,expanded:u,onToggleExpander:f,testId:`legacy-node-expander-${e}`})]}),d.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[d.jsx("div",{className:`text-xs text-black font-Inter-Medium ${s?"hover:cursor-pointer":""}`,onClick:s?f:void 0,children:d.jsx($d,{...n,showRequired:!0,layoutMode:y,layoutSide:de,requiredChange:h==null?void 0:h.required,titleChange:b})}),!Q&&d.jsx(_n,{})]})]})};return q?d.jsx("div",{className:"flex flex-row",children:d.jsx(U,{...r,layoutSide:Z})}):A?!v&&!L?d.jsx("div",{className:"flex flex-row",children:d.jsx(U,{...r,layoutSide:Y})}):d.jsxs("div",{className:`flex flex-row relative ${Fe?Vn:""}`,children:[Ne&&Fe&&d.jsx(mi,{variant:Ne,message:Ve}),d.jsx(U,{...r,layoutSide:Y})]}):O?!v&&!L?d.jsxs("div",{className:"flex flex-row",children:[d.jsx(U,{...r,layoutSide:Y}),d.jsx(U,{...r,layoutSide:Z})]}):d.jsxs("div",{className:`flex flex-row relative ${Fe?Vn:""}`,children:[Ne&&Fe&&d.jsx(mi,{variant:Ne,message:Ve}),!v&&L||v&&(J||K||ee)?d.jsx(U,{...r,layoutSide:Y}):d.jsx(yi,{level:(b==null?void 0:b.depth)??p}),!v&&L||v&&(I||ee||K)?d.jsx(U,{...r,layoutSide:Z}):d.jsx(yi,{level:(b==null?void 0:b.depth)??p})]}):d.jsx(Ud,{layoutMode:y})};gs.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeId:{required:!0,tsType:{name:"string"},description:""},nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},$changes:{required:!1,tsType:{name:"DiffRecord"},description:""},$nodeChange:{required:!1,tsType:{name:"intersection",raw:"Diff & { depth: number }",elements:[{name:"Diff"},{name:"signature",type:"object",raw:"{ depth: number }",signature:{properties:[{key:"depth",value:{name:"number",required:!0}}]}}]},description:""},$nodeChangesSummary:{required:!0,tsType:{name:"Set",elements:[{name:"DiffType"}],raw:"Set<DiffType>"},description:""},$metaChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$childrenChanges:{required:!1,tsType:{name:"DiffRecord"},description:""},$nestedChanges:{required:!1,tsType:{name:"DiffRecord"},description:""}}};function sm(r,e){var S,E,C;if(!e)return{};const n=e==null?void 0:e.enum,t=e==null?void 0:e.minLength,a=e==null?void 0:e.maxLength,i=e==null?void 0:e.pattern,o=e,l=o==null?void 0:o.exclusiveMinimum,s=o==null?void 0:o.exclusiveMaximum,u=typeof l=="number"?l:l===!0&&fe(o==null?void 0:o.minimum)?o.minimum:void 0,c=typeof s=="number"?s:s===!0&&fe(o==null?void 0:o.maximum)?o.maximum:void 0,f=l===!0||o==null?void 0:o.minimum,y=s===!0||o==null?void 0:o.maximum,p=o==null?void 0:o.multipleOf,g=(C=(E=(S=r==null?void 0:r.parent)==null?void 0:S.value())==null?void 0:E.propertyNames)==null?void 0:C.enum,h=e==null?void 0:e.minProperties,b=e==null?void 0:e.maxProperties,N=e==null?void 0:e.uniqueItems,v=e==null?void 0:e.minItems,T=e==null?void 0:e.maxItems;return{any:{allowedValues:n},string:{minLength:t,maxLength:a,pattern:i},number:{minimum:f,maximum:y,exclusiveMinimum:u,exclusiveMaximum:c,multipleOf:p},object:{allowedPropertyNames:g,minProperties:h,maxProperties:b},array:{uniqueItems:N,minItems:v,maxItems:T}}}const lm="?",ye="{value}",rn="{exclusive_value}",pn=">",Cr=">=",gn="<",Vr="<=",he=1,be=2,Se=4,ve=8,_r={0:{lower:void 0,upper:void 0},[he]:{lower:`${Cr} ${ye}`,upper:void 0},[be]:{lower:`${pn} ${rn}`,upper:void 0},[Se]:{lower:void 0,upper:`${Vr} ${ye}`},[ve]:{lower:void 0,upper:`${gn} ${rn}`},[be|he]:{lower:`${pn} ${ye}`,upper:void 0},[be|Se]:{lower:`${pn} ${rn}`,upper:`${Vr} ${ye}`},[be|ve]:{lower:`${pn} ${rn}`,upper:`${gn} ${rn}`},[ve|he]:{lower:`${Cr} ${ye}`,upper:`${gn} ${rn}`},[ve|Se]:{lower:void 0,upper:`${gn} ${ye}`},[Se|he]:{lower:`${Cr} ${ye}`,upper:`${Vr} ${ye}`},[be|he|Se]:{lower:`${pn} ${ye}`,upper:`${Vr} ${ye}`},[be|he|ve]:{lower:`${pn} ${ye}`,upper:`${gn} ${rn}`},[be|Se|ve]:{lower:`${pn} ${rn}`,upper:`${gn} ${ye}`},[ve|he|Se]:{lower:`${Cr} ${ye}`,upper:`${gn} ${ye}`},[he|be|Se|ve]:{lower:`${pn} ${ye}`,upper:`${gn} ${ye}`}};function Rr(r){return r!==void 0&&r!==!1}function Mr(r){return r!==void 0&&r!==!1}function qi(r,e,n){return(r&(he|be))!==(he|be)||n===void 0||typeof e!="number"?r:n>=e?r&~he:r&~be}function Ii(r,e,n){return(r&(Se|ve))!==(Se|ve)||n===void 0||typeof e!="number"?r:n<=e?r&~Se:r&~ve}function qr(r,e,n){return r.replace(ye,`${e}`).replace(rn,fe(n)?`${n}`:lm)}function dm(r,e,n){var Q,ue;const t={data:{},changes:{},changesKeys:[],visible:!1},a=r.minimum,i=r.exclusiveMinimum,o=r.maximum,l=r.exclusiveMaximum,s=e.minimum,u=e.exclusiveMinimum,c=e.maximum,f=e.exclusiveMaximum,[y]=jr(s,u),[p]=jr(c,f),g=fe(a),h=fe(o),b=fe(s),N=fe(c),v=fe(u),T=fe(f),S=hr(s),E=Kn(s),C=fn(s),V=hr(c),q=Kn(c),A=fn(c),O=typeof i=="number"?i:void 0,L=typeof l=="number"?l:void 0;let I=0,J=0;g&&(!b||S||C)&&(J|=he),Rr(i)&&(!v||hr(u)||fn(u)&&Mr(u==null?void 0:u.afterValue))&&(J|=be),h&&(!N||V||A)&&(J|=Se),Rr(l)&&(!T||hr(f)||fn(f)&&Mr(f==null?void 0:f.afterValue))&&(J|=ve),typeof i!="number"&&!(J&he)&&(J&=~be),typeof l!="number"&&!(J&Se)&&(J&=~ve),J=qi(J,a,O),J=Ii(J,o,L);const K=J in _r?{..._r[J]}:void 0;if(K!=null&&K.lower&&(K.lower=qr(K.lower,a,O)),K!=null&&K.upper&&(K.upper=qr(K.upper,o,L)),t.data.lower=K==null?void 0:K.lower,t.data.upper=K==null?void 0:K.upper,!b&&!v&&!N&&!T)return t.visible=Oi(t.data.lower,t.data.upper),t;let ee,we,Ne,Ve;g&&!b&&(ee=a,I|=he),(E||C)&&(ee=s.beforeValue,I|=he),h&&!N&&(we=o,I|=Se),(q||A)&&(we=c.beforeValue,I|=Se),Rr(i)&&!v&&(I|=be,Ne=O),(fn(u)||Kn(u))&&Mr(u==null?void 0:u.beforeValue)&&(I|=be,typeof u.beforeValue=="number"&&(Ne=u.beforeValue)),Rr(l)&&!T&&(I|=ve,Ve=L),(fn(f)||Kn(f))&&Mr(f==null?void 0:f.beforeValue)&&(I|=ve,typeof f.beforeValue=="number"&&(Ve=f.beforeValue)),(!v&&typeof i!="number"||(fn(u)||Kn(u))&&typeof u.beforeValue!="number")&&!(I&he)&&(I&=~be),(!T&&typeof l!="number"||(fn(f)||Kn(f))&&typeof f.beforeValue!="number")&&!(I&Se)&&(I&=~ve),I=qi(I,ee,Ne),I=Ii(I,we,Ve);const U=I in _r?{..._r[I]}:void 0;U!=null&&U.lower&&(U.lower=qr(U.lower,ee,Ne)),U!=null&&U.upper&&(U.upper=qr(U.upper,we,Ve)),(Q=t.data).lower??(Q.lower=U==null?void 0:U.lower),(ue=t.data).upper??(ue.upper=U==null?void 0:U.upper),t.visible=Oi(t.data.lower,t.data.upper);const de=Pi(y,U==null?void 0:U.lower,K==null?void 0:K.lower),Qe=Pi(p,U==null?void 0:U.upper,K==null?void 0:K.upper),ge=Hi(s,u),Ze=Hi(c,f);return de&&(Li(de,ge),t.changes.lower=de),Qe&&(Li(Qe,Ze),t.changes.upper=Qe),t.changesKeys=qn(t.data,n),t}function Oi(r,e){return!!r||!!e}function Pi(r,e,n){if(!(r===void 0||e===n))return e===void 0&&n!==void 0?{type:r,action:j.add,afterValue:n}:e!==void 0&&n===void 0?{type:r,action:j.remove,beforeValue:e}:{type:r,action:j.replace,beforeValue:e,afterValue:n}}function Hi(...r){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const n of r)n&&(ho(n)&&e.beforeDeclarationPaths.push(...n.beforeDeclarationPaths),bo(n)&&e.afterDeclarationPaths.push(...n.afterDeclarationPaths));return e}function Li(r,e){if(r)return ho(r)&&(r.beforeDeclarationPaths=e.beforeDeclarationPaths),bo(r)&&(r.afterDeclarationPaths=e.afterDeclarationPaths),r}const Rn={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},hs=r=>{var Ze,Q,ue,dn,_n,gr;const{shift:e=!1,state:n,$nodeChange:t}=r,a=n.node,o=n.meta,l=n.value,s=l,u=(Ze=n.parent)==null?void 0:Ze.value,c=(Q=n.parent)==null?void 0:Q.value,f=Je(),y=pe(),p=zd(a),g=Xd(a),h=Qd(l),b=Zd(l),N=Ro(l),v=Jt(l)||Jt(u),{any:T,string:S,number:E,object:C,array:V}=sm(a,l),q={minimum:l==null?void 0:l.minimum,exclusiveMinimum:l==null?void 0:l.exclusiveMinimum,maximum:l==null?void 0:l.maximum,exclusiveMaximum:l==null?void 0:l.exclusiveMaximum},A=(ue=s==null?void 0:s.$changes)==null?void 0:ue.minimum,O=(dn=s==null?void 0:s.$changes)==null?void 0:dn.exclusiveMinimum,L=(_n=s==null?void 0:s.$changes)==null?void 0:_n.maximum,I=(gr=s==null?void 0:s.$changes)==null?void 0:gr.exclusiveMaximum,J={minimum:Yn(A)?A:void 0,exclusiveMinimum:Yn(O)?O:void 0,maximum:Yn(L)?L:void 0,exclusiveMaximum:Yn(I)?I:void 0},{data:K,changes:ee,changesKeys:we,visible:Ne}=dm(q,J,Rn.valueRange),Ve=qn(S,Rn.valueLength),Fe=qn(S,Rn.valuePattern),Vn=qn(E,Rn.multipleOf),U=qn(C,Rn.propertiesCount),de=qn(V,Rn.uniqueItems),Qe=qn(V,Rn.itemsCount),ge=yo(t??(o==null?void 0:o.$nodeChange));return d.jsxs(d.Fragment,{children:[(T==null?void 0:T.allowedValues)&&d.jsx(pi,{shift:e,$changesKey:"enum",title:eu,items:T.allowedValues,layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),h&&d.jsxs(d.Fragment,{children:[(fe(S==null?void 0:S.minLength)||fe(S==null?void 0:S.maxLength))&&d.jsx(cn,{shift:e,$changesKeys:Ve,title:_a,items:{minLength:S==null?void 0:S.minLength,maxLength:S==null?void 0:S.maxLength},layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes}),fe(S==null?void 0:S.pattern)&&d.jsx(cn,{shift:e,$changesKeys:Fe,title:Ra,items:{pattern:S==null?void 0:S.pattern},layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes})]}),b&&d.jsxs(d.Fragment,{children:[Ne&&d.jsx(cn,{shift:e,$changesKeys:we,title:Ma,items:K,layoutMode:y,level:f,$nodeChange:ge,$changes:ee}),fe(E==null?void 0:E.multipleOf)&&d.jsx(cn,{shift:e,$changesKeys:Vn,title:qa,items:{multipleOf:E==null?void 0:E.multipleOf},layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes})]}),v&&d.jsxs(d.Fragment,{children:[g&&d.jsx(cn,{shift:e,$changesKeys:[],title:nu,items:{additionalPropertyNamePattern:a.key},layoutMode:y,level:f,$nodeChange:ge}),p&&(C==null?void 0:C.allowedPropertyNames)&&d.jsx(pi,{shift:e,$changesKey:"propertyNames",title:ru,items:C.allowedPropertyNames,layoutMode:y,level:f,$nodeChange:ge,$changes:c==null?void 0:c.$changes}),(fe(C==null?void 0:C.minProperties)||fe(C==null?void 0:C.maxProperties))&&d.jsx(cn,{shift:e,$changesKeys:U,title:Ia,items:{minProperties:C==null?void 0:C.minProperties,maxProperties:C==null?void 0:C.maxProperties},layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes})]}),N&&d.jsxs(d.Fragment,{children:[fe(V==null?void 0:V.uniqueItems)&&d.jsx(cn,{shift:e,$changesKeys:de,title:Oa,items:{uniqueItems:`${V.uniqueItems}`},layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes,isPredefinedValuesSet:!0}),(fe(V==null?void 0:V.minItems)||fe(V==null?void 0:V.maxItems))&&d.jsx(cn,{shift:e,$changesKeys:Qe,title:Pa,items:{minItems:V==null?void 0:V.minItems,maxItems:V==null?void 0:V.maxItems},layoutMode:y,level:f,$nodeChange:ge,$changes:s==null?void 0:s.$changes})]})]})};hs.__docgenInfo={description:"",methods:[],displayName:"Validations"};const bs=r=>{const{state:e,disableNestingHeader:n,onToggleExpander:t,onToggleSort:a,$nodeChange:i}=r,o=e.node,l=Je(),s=e.meta,u=s,c=e.value,f=c,y=tu(),p=pe(),g=Mo(e),[h,b]=m.useState(!1),[N,v]=m.useState(0);m.useEffect(()=>{const A=e.children.filter(tt).length===0;(!au(o)||e.expanded&&A)&&!o.isCycle?b(!0):b(e.expanded),v(e.sorted)},[o,o.isCycle,e,e.expanded,e.sorted]);const T=!iu(o),S=!ou(o),E=qo(o),C=E,V=as(),q=c==null?void 0:c.extensions;return d.jsxs("div",{className:"flex flex-col",children:[!n&&d.jsx(gs,{nodeId:o.id,nodeTitleData:su({node:o,nodeValue:c,nodeMeta:s,customizationOptions:V}),nodeTypeData:ka({node:o,nodeValue:c,customizationOptions:V}),isCircularRef:o.isCycle,readOnly:s==null?void 0:s.readOnly,writeOnly:s==null?void 0:s.writeOnly,deprecated:s==null?void 0:s.deprecated,isExpandable:g,expanded:e.expanded,sorted:N,isRoot:E,onToggleExpander:t,onToggleSort:a,layoutMode:p,level:l,$changes:f==null?void 0:f.$changes,$metaChanges:u==null?void 0:u.$metaChanges,$nodeChange:i??(u==null?void 0:u.$nodeChange),$nodeChangesSummary:u==null?void 0:u.$nodeChangesSummary}),y&&h&&T&&d.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:S&&d.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[d.jsx(lu,{shift:C,state:e,$nodeChange:i}),d.jsx(hs,{shift:C,state:e,$nodeChange:i}),q&&d.jsx(ps,{extensions:q,$nodeChange:i})]})})]})};bs.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const Ss=r=>{const{disableNestingHeader:e,items:n,onGlobalSelectNestedNode:t,$nodeChange:a,nestingIndicatorTitleData:i}=r,o=pe();return d.jsx(d.Fragment,{children:n.map((l,s)=>tt(l)?d.jsxs("div",{children:[!e&&i&&l.first&&d.jsx(du,{shift:!1,NodeType:_o,nodeTypeData:i.nodeTypeData,depth:i.nodeDepth,layoutMode:o,$nodeChange:i.$nodeChange,$changes:i.$changes}),d.jsx(yt,{state:l,$nodeChange:a},`prop-${s}`)]},`prop-${s}`):at(l)?d.jsx(dt,{state:l,onGlobalSelectNestedNode:t,$nodeChange:a},`combiner-${s}`):null)})};Ss.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const yt=r=>{const{state:e,overriddenKind:n,$nodeChange:t}=r,a=e.node,i=e.value,o=e.children,l=o.filter(ee=>!at(ee)),s=i,u=e.meta,c=qo(a),f=Jt(i),y=Ro(i),p=uu(i),g=Je(),h=e.node.newDataLevel,b=!c&&h?g+1:g,N=Mo(e),[v,T]=m.useState(!1),[,S]=m.useState(0);m.useEffect(()=>{T(e.expanded),S(e.sorted)},[e.expanded,e.sorted]);const[,E]=m.useState(),C=ee=>{ee&&(e.setSelected(ee),E(e.selected))},[V,q]=m.useState(void 0),A=ee=>{if(ee){const we=yu(ee);q(we)}},O=t??(u==null?void 0:u.$nodeChange),L=md(l),I=n==="parameters"&&c&&(f||y)&&!p,J=ka({node:a,nodeValue:i});J==null||delete J.combiner;const K=J?{nodeTypeData:J,nodeDepth:b+1,$nodeChange:O??L,$changes:s==null?void 0:s.$changes}:void 0;return d.jsx(Pe.Provider,{value:b,children:d.jsx(fu,{value:V,setValue:A,children:d.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[d.jsx(bs,{state:e,disableNestingHeader:I,onToggleExpander:ee=>cu(e,T,ee),onToggleSort:()=>mu(e,S),$nodeChange:O}),N&&v&&d.jsx(Ss,{disableNestingHeader:I,items:o,onGlobalSelectNestedNode:C,$nodeChange:O,nestingIndicatorTitleData:K})]})})})};yt.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};const pt=r=>d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"JSON Schema Diff Viewer"}),children:d.jsx(um,{...r})}),um=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=kn,layoutMode:a=po,filters:i=[],overriddenKind:o,metaKeys:l,topLevelPropsMediaTypes:s}=r;Wr(e,l.diffsMetaKey,l.aggregatedDiffsMetaKey);const u=m.useMemo(()=>yc(e,l),[l,e]),c=m.useMemo(()=>new Co(u,n),[n,u]);console.debug("Schema:",e),console.debug("Tree Model:",u),console.debug("State Model:",c);const f=c.root;let y=null;return tt(f)&&(y=d.jsx(yt,{state:f,overriddenKind:o})),at(f)&&(y=d.jsx(dt,{state:f,onGlobalSelectNestedNode:()=>null})),d.jsx(Ja.Provider,{value:s,children:d.jsx(yd.Provider,{value:i,children:d.jsx(En.Provider,{value:t,children:d.jsx(On.Provider,{value:a,children:d.jsx(rt.Provider,{value:l,children:d.jsx(Pe.Provider,{value:0,children:y})})})})})})};pt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},filters:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},metaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},overriddenKind:{required:!1,tsType:{name:"literal",value:"'parameters'"},description:""},topLevelPropsMediaTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<ParameterKey, MediaType>"},description:""}}};const fm=" or null";function Sn(r,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(nr(r))return"";const n=r,t=(n==null?void 0:n.type)??$n,a=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?fm:"";let l=String(t);return a&&(l+=`(${a})`),i&&(l+=`<${i}>`),l+=o,l}function ji(r){return r!=null}function vs(r){const e=Jn(r);if(!e)return[];const n=[],t=e;t.minLength!==void 0&&n.push(Te.MIN_LENGTH),t.maxLength!==void 0&&n.push(Te.MAX_LENGTH),t.pattern!==void 0&&n.push(Te.PATTERN);const a=e;a.minimum!==void 0&&n.push(Te.MINIMUM),a.maximum!==void 0&&n.push(Te.MAXIMUM),ji(a.exclusiveMinimum)&&n.push(Te.EXCLUSIVE_MINIMUM),ji(a.exclusiveMaximum)&&n.push(Te.EXCLUSIVE_MAXIMUM),a.multipleOf!==void 0&&n.push(Te.MULTIPLE_OF);const i=e;i.minProperties!==void 0&&n.push(Te.MIN_PROPERTIES),i.maxProperties!==void 0&&n.push(Te.MAX_PROPERTIES);const o=e;return o.uniqueItems!==void 0&&n.push(Te.UNIQUE_ITEMS),o.minItems!==void 0&&n.push(Te.MIN_ITEMS),o.maxItems!==void 0&&n.push(Te.MAX_ITEMS),n}function cm(r){return r!=null}function mm(r){return!!(r!=null&&r.extensions)&&Object.keys(r.extensions).length>0}const ym="x-deprecated-reason";function pm(r){var n;const e=(n=r==null?void 0:r.extensions)==null?void 0:n[ym];return typeof e=="string"&&e.length>0?e:void 0}class Ds{resolveNodeVisibility(e,n){const t=e.value(),a=Jn(t),i=To(n),o=pm(a),l=i&&!!(a!=null&&a.description),s=i&&!!o,u=i&&cm(a==null?void 0:a.default),c=i&&Array.isArray(a==null?void 0:a.examples)&&a.examples.length>0,f=i&&Array.isArray(a==null?void 0:a.enum)&&a.enum.length>0,y=i&&vs(t).length>0,p=i&&mm(a),g=u||c||f||y||p;return{showDescription:l,showDeprecationReasonRow:s,deprecationReason:o,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:f,showValidationsSection:y,showExtensionsRow:p,showContentSection:l||s||g,showAnyAdditionalInfoRow:g}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:a,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:l}=n;return{isTitleListLastRow:e&&!a,isDescriptionListLastRow:e&&t&&!i&&!o&&!l,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isExamplesAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&jo(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const rr=new Ds;function Ba(r,e){return rr.resolveNodeVisibility(r,e)}function Ua(r,e){return rr.resolveListLastRowFlags(r,e)}function gm(r,e){return rr.resolveAdditionalInfoRowUsesAfterRowPrecededBy(r,e)}function ws(r){return rr.resolveIsExpandable(r)}function Ns(r,e){return rr.resolveInitiallyExpanded(r,e)}function In(r,e){return rr.resolveExpanderExpanded(r,e)}const Ts=" or null";function Es(r){const e=r.diffs.typeLabelFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function hm(r,e){const n=Jn(r.value()),t=(n==null?void 0:n.type)??$n,a=Es(r);return nt(t,a==null?void 0:a.type,e)??String(t)}function Ya(r,e,n){if(e!=null&&e.brokenRef)return{kind:tn.NO_DIFFS,text:`$ref: ${e.brokenRef}`};const t=r.value();if(nr(t))return{kind:tn.NO_DIFFS,text:""};const a=Es(r);if(!a)return{kind:tn.NO_DIFFS,text:Sn(t,e)};if(bm(a)){const c=Object.values(a).find(Boolean);return c?{kind:tn.WHOLE_DIFFS,text:Sm(t,a,n),diff:wm(c)}:{kind:tn.NO_DIFFS,text:Sn(t,e)}}const i=[],o=vm(t,a.type,n);o&&i.push(o);const l=Ji(ks(t),a.format,n,xs);l&&i.push(l);const s=Ji(t==null?void 0:t.title,a.title,n,As);s&&i.push(s);const u=Dm(t);return u&&i.push(u),i.length===0?{kind:tn.NO_DIFFS,text:Sn(t,e)}:{kind:tn.PARTIAL_DIFFS,segments:i}}function bm(r){const e=Go.map(t=>[t,r[t]]).filter(t=>!!t[1]);return e.length===0||e.length===1||!r.type||!r.title||!r.format?!1:new Set(e.map(([,t])=>t.data.action)).size===1}function Sm(r,e,n){const t=[],a=nt((r==null?void 0:r.type)??$n,e.type,n)??(r==null?void 0:r.type)??$n;t.push(String(a));const i=zt(ks(r),e.format,n,xs);i&&t.push(i);const o=zt(r==null?void 0:r.title,e.title,n,As);return o&&t.push(o),r!=null&&r.nullable&&t.push(Ts.trim()),t.join(" ")}function vm(r,e,n){const t=(r==null?void 0:r.type)??$n,a=nt(t,e,n);return a===void 0?e?void 0:{text:String(t)}:{text:a,diff:e}}function Ji(r,e,n,t){const a=zt(r,e,n,t);if(a!==void 0)return{text:a,diff:e}}function zt(r,e,n,t){const a=nt(r,e,n);if(a===void 0)return!e&&Fi(r)?t(r):void 0;if(Fi(a))return t(a)}function Dm(r){if(!(nr(r)||!(r!=null&&r.nullable)))return{text:Ts.trim()}}function ks(r){if(!r||typeof r!="object"||!("format"in r))return;const e=r.format;return typeof e=="string"?e:void 0}function Fi(r){return!!r&&r.trim().length>0}function xs(r){return`(${r})`}function As(r){return`<${r}>`}function wm(r){const{data:e}=r;return H(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:w.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:w.Yellow}}}:x(e)?{...r,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:w.Green}}}:k(e)?{...r,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:w.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:r}function Nm(r){return r.diffs}function Tm(r){return Nm(r)[bn]??r.diffs[R]}function Fn(r){return r.diffs}function Br(r){return Fn(r).nestingIndicatorRowColorizingDiff}function Em(r){return Fn(r).nodeChangesSummary}function km(r){var e;return(e=Vs(r))==null?void 0:e.required}function Cs(r){if(!(r!=null&&r.data))return;const e=r.data;return x(e)?{type:e.type,scope:e.scope,description:e.description,action:j.add,afterValue:!0,afterDeclarationPaths:e.afterDeclarationPaths}:k(e)?{type:e.type,scope:e.scope,description:e.description,action:j.remove,beforeValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths}:H(e)?{type:e.type,scope:e.scope,description:e.description,action:j.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}:e}function xm(r){return Cs(km(r))}function Vs(r){if(r.kind===W.PROPERTY)return r.diffs}function _s(r){const e=Fn(r),n=Vs(r),t={};for(const i of Wn){const o=e[i];o!=null&&o.data&&(t[i]=o.data)}const a=n==null?void 0:n.required;return a!=null&&a.data&&(t.required=Cs(a)),t}function Cn(r){return r.diffs}function Rs(r){return Cn(r).default}function Ms(r){return Cn(r).defaultRowColorizingDiff}function qs(r){return Cn(r).enumDiff}function Is(r){return Cn(r).enumValueDiffs}function Os(r){return Cn(r).enumRowColorizingDiff}function Ps(r){return Cn(r).examplesDiff}function Hs(r){return Cn(r).examplesValueDiffs}function Ls(r){return Cn(r).examplesRowColorizingDiff}function Ur(r,e){var n;return(n=Fn(r).validationRowDiffs)==null?void 0:n[e]}function js(r,e){var n;return(n=Fn(r).validationRowValueDiffs)==null?void 0:n[e]}function Wa(r,e){var n;return(n=Fn(r).validationRowColorizingDiffs)==null?void 0:n[e]}function Am(r){return Fn(r).valueRangeCrawlDiffs}function Ki(r,e){if(Ur(r,e)||Wa(r,e))return!0;const n=js(r,e);return n?Object.values(n).some(t=>t!==void 0):!1}const Js="<empty string>";function Cm(r){return JSON.stringify(r).slice(1,-1)}function Un(r){return typeof r=="string"?r===""?Js:Cm(r):typeof r=="object"&&r!==null?JSON.stringify(r,null,2):JSON.stringify(r)}function Vm(r){return r===Js}function _m(r,e,n){if(!e)return r===void 0?[]:[{text:Un(r)}];const t=n===Y,{data:a}=e;if(x(a))return t?[]:[{text:Un(a.afterValue??r)}];if(k(a))return t?[{text:Un(a.beforeValue??r)}]:[];if(H(a)){const i=t?a.beforeValue??r:a.afterValue??r;return[{text:Un(i)}]}return r===void 0?[]:[{text:Un(r)}]}function Ce(r){return Un(r)}function $a(r,e,n){const t=n===Y,{data:a}=e;return x(a)?t?[]:(Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):k(a)?t?(Array.isArray(a.beforeValue)?a.beforeValue:r).map(o=>({text:Ce(o)})):[]:H(a)?(t?Array.isArray(a.beforeValue)?a.beforeValue:r:Array.isArray(a.afterValue)?a.afterValue:r).map(o=>({text:Ce(o)})):r.map(i=>({text:Ce(i)}))}function Fs(r,e,n){const t=n===Y,a=new Set,i=[];for(let l=0;l<r.length;l++){const s=String(l),u=e==null?void 0:e[s],c=Ce(r[l]);if(!u){i.push({text:c});continue}if(a.has(s))continue;a.add(s);const{data:f}=u;if(x(f)){t||i.push({text:Ce(f.afterValue??r[l]),valueDiffKey:s});continue}if(k(f)){t&&i.push({text:Ce(f.beforeValue??r[l]),valueDiffKey:s});continue}H(f)&&i.push({text:Ce(t?f.beforeValue??r[l]:f.afterValue??r[l]),valueDiffKey:s})}for(const[l,s]of Object.entries(e??{}))!s||a.has(l)||k(s.data)&&t&&(i.push({text:Ce(s.data.beforeValue),valueDiffKey:l}),a.add(l));const o=l=>{for(let s=0;s<r.length;s++)if(Ce(r[s])===l)return s;return r.length};return i.sort((l,s)=>o(l.text)-o(s.text))}function tr(r,e,n,t){return n===void 0?t:zo(r,e,n)}function Rm(r,e,n){if(e)return Object.keys(e).find(t=>Xo(t,r)===n)}function Mm(r,e,n,t){const a=t===Y,i=new Set,o=[];for(let s=0;s<e.length;s++){const u=Rm(e,n,s),c=u?n==null?void 0:n[u]:void 0,f=Ce(e[s]);if(!c||!u){o.push({text:f});continue}if(i.has(u))continue;i.add(u);const{data:y}=c;if(x(y)){a||o.push({text:tr(r,u,y.afterValue??e[s],f),valueDiffKey:u});continue}if(k(y)){a&&o.push({text:tr(r,u,y.beforeValue??e[s],f),valueDiffKey:u});continue}H(y)&&o.push({text:a?tr(r,u,y.beforeValue??e[s],f):tr(r,u,y.afterValue??e[s],f),valueDiffKey:u})}for(const[s,u]of Object.entries(n??{}))!u||i.has(s)||k(u.data)&&a&&(o.push({text:tr(r,s,u.data.beforeValue,Ce(u.data.beforeValue)),valueDiffKey:s}),i.add(s));const l=(s,u)=>{if(s)return Xo(s,e);for(let c=0;c<e.length;c++)if(Ce(e[c])===u)return c;return e.length};return o.sort((s,u)=>l(s.valueDiffKey,s.text)-l(u.valueDiffKey,u.text))}function qm(r,e,n,t){return e?$a(r,e,t):Fs(r,n,t)}function Im(r,e,n,t){return e?$a(r,e,t):Fs(r,n,t)}function Om(r,e,n,t,a,i){return r===$.VALUE_RANGE&&(i!=null&&i.crawlDiffs)?jf(Ut(i.nodeValue),i.crawlDiffs,a,n,t):n?$a(e,n,a):Mm(r,e,t,a)}function _t(r,e){return e?r==null?void 0:r[e]:void 0}const Pm=new Ds;function Hm(r){return r!=null}function Lm(r){return Object.keys(Gt).some(e=>!!Ur(r,e)||!!Wa(r,e))}class jm{resolveNodeVisibility(e,n){const t=e.value(),a=Jn(t),i=Pm.resolveNodeVisibility(e,n),o=To(n),l=o&&(!!(a!=null&&a.description)||!!e.diffs.description),s=o&&(i.showEnumValuesRow||!!qs(e)||!!Is(e)||!!Os(e)),u=o&&(Hm(a==null?void 0:a.default)||!!Rs(e)||!!Ms(e)),c=o&&(i.showExamplesRow||!!Ps(e)||!!Hs(e)||!!Ls(e)),f=o&&(vs(t).length>0||Lm(e)),y=u||c||s||f||i.showExtensionsRow,p=l||i.showDeprecationReasonRow||y;return{...i,showDescription:l,showDefaultRow:u,showExamplesRow:c,showEnumValuesRow:s,showValidationsSection:f,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Ua(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return gm(e,n)}}const Jm=new jm;function za(r,e){return Jm.resolveNodeVisibility(r,e)}function Ks(r,e){return r.isCycle?!1:ws(r)?e.hideUnchangedNodes?e.isRoot||r.kind===W.ROOT?!0:Qo(r):e.level<e.expandedDepth:!0}function Gs(r,e,n){if(!n)return r;const t=e===Y;return(n===j.add?t:!t)?Math.max(r-1,0):r}var wn=(r=>(r.Default="default",r.JsonSchema="json-schema",r))(wn||{});const Fm={[wn.JsonSchema]:va};function Km(r){return Fm[r]??cr}const sr=m.memo(r=>{const{title:e,layoutSide:n,usage:t=wn.Default,lastInvisible:a=!1,diff:i,levelReductionAction:o}=r,{[ie]:l}=r,s=Da(n),u=m.useMemo(()=>Gs(s,n,o),[s,n,o]),c=m.useMemo(()=>Km(t),[t]),f=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:b}=i,N=[];return n===Y&&N.push(X.background(b.before.backgroundColor)),n===Z&&N.push(X.background(b.after.backgroundColor)),N},[i,n]),y=m.useMemo(()=>{const b=i==null?void 0:i.data;return b?x(b)?n===Z:k(b)?n===Y:!0:!0},[i,n]),p=t===wn.JsonSchema,g=typeof e=="function"?e(n):e,h=y&&g!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":l,className:["nesting-indicator-title-row-content flex w-full h-full",p?"items-stretch":"",c,...f].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(Pn,{level:u,lastInvisible:a&&y})}),h&&d.jsx(pu,{title:g})]})});sr.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const gt=m.memo(r=>{const e=pe(),{diffsSeverities:n,diffsSeverityPlacement:t=G.TitleRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case De:return d.jsx(Ln,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(xn,{left:d.jsx(sr,{...r,layoutSide:Y}),right:d.jsx(sr,{...r,layoutSide:Z})})});case ze:return d.jsx(Hn,{content:d.jsx(sr,{...r,layoutSide:Z})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});gt.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Xa=m.createContext(null);function Bs(){const r=m.useContext(Xa);if(!r)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return r}const Gm=new Set([W.ALL_OF,W.ANY_OF,W.ONE_OF]);class Bm{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,a=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:a,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return Gm.has(e)}}const Us=new Bm;function Um(r){return Us.resolveNodeVisibility(r)}function Qa(r){return Us.isCombinerKind(r)}function Za(r){return r.kind===W.ROOT}function Xn(r){if(r.type!==se.COMPLEX)return!1;const e=r.nestedNodes();return e.length===0?!1:Za(r)?!0:e.every(n=>Qa(n.kind))}function Ym(r){return Qa(r)}function Wm(r){var e;return Jr((e=Jn(r.value()))==null?void 0:e.type)}function $m(r,e){return Jr(hm(r,e))}function Ys(r){var t;const n=(t=r.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!Ym(n)))return n}function Ws(r,e,n){const t=n.get(r.id);if(t){const a=e.find(i=>i.id===t);if(a)return a}return e[0]}function $s(r,e){const n=[];let t=r;for(;t&&Xn(t);){const a=t.nestedNodes(),i=Ws(t,a,e);if(!i)break;const o=Um(t);if(n.push({combinerNode:t,nestedNodes:a,selectedNestedNode:i,showSelector:o.showSelector,combinerKindLabel:Ys(t)}),Xn(i)){t=i;continue}break}return n}function zs(r,e){let n=r;for(;Xn(n);){const t=n.nestedNodes(),a=Ws(n,t,e);if(!a)break;n=a}return n}const zm=new Map;function Xs(r){return zs(r,zm)}function Xm(r,e,n,t){const a=new Map(e);a.set(n,t);const i=new Set($s(r,a).map(o=>o.combinerNode.id));for(const o of a.keys())i.has(o)||a.delete(o);return a}function ei(r){var t;const e=r.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=r.meta())==null?void 0:t._fragment;return!M(n)||Fr(n)?null:n}function Qm(r){if(r.type===se.SIMPLE)return r.childrenNodes();const e=r.nestedNodes();return e.length>0&&e.every(n=>!Qa(n.kind))?e:r.childrenNodes()}const Xt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:w.Yellow}};function Qs(r){return r&&H(r.data)?{...r,styles:Xt}:{data:{type:"annotation",action:j.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:Xt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe}}function ir(r){const e=r.data,n={type:e.type,causedAt:[]};return k(e)||H(e)?n.causedAt=e.beforeDeclarationPaths[0]??[]:x(e)&&(n.causedAt=e.afterDeclarationPaths[0]??[]),n}function Zm(r){return ir({data:r,styles:Xt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Oe})}function Qt(r,e){if(!(!r||typeof r!="object")){if(ba(r)){e.push(r);return}for(const n of Object.values(r))Qt(n,e)}}function ey(...r){let e;for(const n of r)n&&(!e||xe.compareDiffTypes(n.type,e.type)>0)&&(e=n);return e}function Zs(r){const e=r.diffs[R];return!!e&&(x(e.data)||k(e.data))}function ny(r){const e=r.nestedNodes();if(e.length===0)return;let n;for(const t of e){if(!le(t))return;const a=t.diffs[R],i=a&&x(a.data)?j.add:a&&k(a.data)?j.remove:void 0;if(!i)return;if(!n){n=i;continue}if(n!==i)return}return n}function ry(r){if(le(r)&&!Zs(r))return ny(r)}function ty(r){return r.diffsSummary.size>0||r.descendantDiffsSummary.size>0||Object.keys(r.diffs).length>0||Object.keys(r.descendantDiffs).length>0}function el(r){return le(r)?r.diffsSummary.size>0||Object.keys(r.descendantDiffs).length>0||r.descendantDiffsSummary.size>0?!0:r.nestedNodes().some(e=>le(e)&&ty(e)):!1}function ay(r){if(!(!le(r)||!el(r)))return Qs(r.diffs[R])}function iy(r){if(!le(r)||!el(r))return;const e=[];for(const o of Object.values(r.diffsSeverities))o&&e.push(o);for(const o of Object.values(r.descendantDiffs))o&&e.push(ir(o));for(const o of r.nestedNodes()){if(!le(o))continue;for(const u of Object.values(o.diffsSeverities))u&&e.push(u);const l=[];for(const u of Object.values(o.diffs))Qt(u,l);for(const u of l)e.push(ir(u));const s=jt([...o.diffsSummary,...o.descendantDiffsSummary]);s&&e.push({type:s,causedAt:[]})}const n=r.diffs[R];n&&e.push(ir(n));const t=[];for(const o of Object.values(r.diffs))Qt(o,t);for(const o of t)e.push(ir(o));const a=jt([...r.diffsSummary,...r.descendantDiffsSummary]);a&&e.push({type:a,causedAt:[]});const i=ey(...e);if(!i){const o=Qs(n);return{[G.TitleRow]:Zm(o.data)}}return{[G.TitleRow]:i}}function oy(r){if(le(r)){const e=Br(r);if(e){const n=r.diffsSeverities[G.NestingIndicatorRow];return{selectorRowDiff:e,diffsSeverities:n?{[G.TitleRow]:n}:void 0}}}return{selectorRowDiff:ay(r),diffsSeverities:iy(r)}}function ht(r){if(!Xn(r))return"";const e=Ys(r);return e?` (${e})`:""}function sy(r,e,n=Sn(ei(r),r.meta())+ht(r)){const t={title:n,node:r,testId:`json-schema-combiner-option-${e}`};if(!le(r))return t;const a=Zs(r);return{...t,diffs:r.diffs,...a?{}:{diffsSummary:r.diffsSummary,descendantDiffsSummary:r.descendantDiffsSummary}}}function Zt(r,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,a=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?r+1:r,0),afterLevel:Math.max(a?e+1:e,0)}}const nl=r=>d.jsx(li,{...r});nl.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""}}};const ni=m.createContext(null);function ly(){const r=m.useContext(ni);if(!r)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return r}function rl(){return m.useContext(ni)}function dy(r){const[e,n]=m.useState(()=>new Set),t=m.useCallback(a=>{n(i=>{if(i.has(a))return i;const o=new Set(i);return o.add(a),o})},[]);return m.useMemo(()=>({hideUnchangedNodes:r,revealedBlockIds:e,revealBlock:t}),[r,e,t])}const uy="#64748B",tl="#94A3B8";const ln=m.memo(r=>{const{text:e,color:n,className:t}=r,a=n===void 0?uy:n;return d.jsx("span",{className:["json-schema-type-value-text",t].filter(Boolean).join(" "),style:a?{color:a}:void 0,children:e})});ln.__docgenInfo={description:`Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
whether to render it at all.`,methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const al=m.memo(r=>{const{node:e}=r;return Wm(e)?null:d.jsx(ln,{text:Sn(e.value(),e.meta()),color:tl})});al.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const ea=m.memo(r=>{const{text:e,diff:n,layoutSide:t,color:a}=r,i=Eo(n,t),o=Td(n,t),l=[X.highlighter(i),X.background(o)].filter(Boolean).join(" ");return d.jsx(ln,{text:e,color:a,className:l||void 0})});ea.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const bt=m.memo(r=>{const{display:e,layoutSide:n,color:t}=r;return e.kind===tn.NO_DIFFS?d.jsx(ln,{text:e.text,color:t}):e.kind===tn.WHOLE_DIFFS?d.jsx(ea,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center gap-1",children:e.segments.map((a,i)=>d.jsx(ea,{text:a.text,diff:a.diff,layoutSide:n,color:t},`${a.text}-${i}`))})});bt.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const il=m.memo(r=>{const{node:e,meta:n,layoutSide:t}=r;if($m(e,t))return null;const a=Ya(e,n,t);return d.jsx(bt,{display:a,layoutSide:t,color:tl})});il.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ol=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));ol.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function Gi(r){return r===1?"Show 1 unchanged node":`Show ${r} unchanged nodes`}const Pr=m.memo(r=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:a,level:i,[ie]:o}=r,l=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":a,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Pn,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(pd,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(it,{text:Gi(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":Gi(n),onClick:l,children:d.jsx(ol,{})})})})]})});Pr.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const sl=m.memo(r=>{const e=pe(),n=Je();switch(e){case De:return d.jsx(xn,{left:d.jsx(Pr,{...r,layoutSide:"before",level:n}),right:d.jsx(Pr,{...r,layoutSide:"after",level:n})});case ze:return d.jsx(Hn,{content:d.jsx(Pr,{...r,layoutSide:"after",level:n})});default:return null}});sl.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const ri=r=>{const{children:e}=r,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:a}=ly(),i=Ao(),o=m.useMemo(()=>i?new Set(i):void 0,[i]),{visibleSequence:l}=m.useMemo(()=>Qf(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:l.map((s,u)=>{const c=u===l.length-1;return s.kind==="placeholder"?t.has(s.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(s.sourceIndex,s.sourceIndex+s.blockSize).map((f,y)=>d.jsx(Qn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:f,isLastInList:c&&y===s.blockSize-1},f.id))},s.unchangedBlockId):d.jsx(sl,{unchangedBlockId:s.unchangedBlockId,count:s.blockSize,onReveal:a},s.unchangedBlockId):d.jsx(Qn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:s.node,isLastInList:c},s.node.id)})})};ri.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const fy="markdown-text-row__json-schema-description",cy="markdown-text-row__json-schema-expander",my=r=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:a}=r;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${a} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function yy(r,e,n){if(!e)return{resolvedValue:r,isInvisible:!1};const{data:t}=e,a=n===Y;return x(t)?a?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:k(t)?a?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:r,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:H(t)?{resolvedValue:a?typeof t.beforeValue=="string"?t.beforeValue:r:typeof t.afterValue=="string"?t.afterValue:r,isInvisible:!1}:{resolvedValue:r,isInvisible:!1}}function py(r){switch(r){case B.body1:return"text-value-body1";case B.h1:case B.h2:case B.h3:case B.h4:case B.h5:case B.h6:return"text-value-body2";case B.body2:default:return"text-value-body2"}}function gy(r,e){return r===Ie.JsonSchemaDescription?{markdownClassName:fy,expanderClassName:cy}:{markdownClassName:["text-slate-700",py(e)].join(" "),expanderClassName:`text-value-expander ${xd(e)}`.trim()}}const ll=m.memo(r=>{const{value:e,variant:n=B.body2,usage:t,layoutSide:a,diff:i}=r,[o,l]=m.useState(!1),{resolvedValue:s,isInvisible:u}=m.useMemo(()=>yy(e,i,a),[i,a,e]),c=m.useMemo(()=>o?s:Ed(s),[o,s]),f=m.useMemo(()=>kd(s),[s]),y=m.useMemo(()=>gy(t,n),[t,n]),p=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const b=a===Y?i.styles.before:i.styles.after,N=[];return b.textHighlighterColor&&N.push(X.highlighter(b.textHighlighterColor)),N},[i,a]),g=m.useMemo(()=>["markdown",y.markdownClassName,...p].filter(Boolean).join(" "),[p,y.markdownClassName]),h=m.useCallback(()=>{l(b=>!b)},[]);return u||!c?null:d.jsxs("div",{className:"markdown-text-row flex flex-col items-start gap-1",children:[d.jsx(gu,{className:g,remarkPlugins:[hu],children:c}),d.jsx(my,{isExpandable:f,expanded:o,onToggle:h,expanderClassName:y.expanderClassName})]})});ll.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const hy={[Ie.DdlApiProperty]:Ad,[Ie.JsonSchemaDescription]:va},by={[Ie.DdlApiProperty]:["min-h-[26px]"]};function Sy(r){const e=hy[r]??cr,n=by[r]??[];return[e,...n].join(" ")}function vy(r,e,n){return n===Ie.DdlApiProperty?Vd(r,e):r!=null&&r.data?(e===Y?r.styles.before:r.styles.after).isContentVisible??!0:!0}const Hr=m.memo(r=>{const{value:e,variant:n=B.body2,layoutSide:t,usage:a=Ie.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=r,{[ie]:l}=r,s=Da(t),u=a===Ie.DdlApiProperty,c=u||a===Ie.JsonSchemaDescription,f=m.useMemo(()=>vy(o,t,a),[o,t,a]),y=a===Ie.JsonSchemaDescription&&s===0,p=c&&s>0&&(!i||f),g=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:N}=o,v=[];return t===Y&&v.push(X.background(N.before.backgroundColor)),t===Z&&v.push(X.background(N.after.backgroundColor)),v},[o,t]),h=m.useMemo(()=>Sy(a),[a]),b=d.jsx(ll,{value:e,variant:n,usage:a,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":l,className:["markdown-text-row-content flex w-full h-full gap-2",u||a===Ie.JsonSchemaDescription?"items-stretch":"",h,...g].filter(Boolean).join(" "),children:[y&&d.jsx(Cd,{}),p&&d.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Pn,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):a===Ie.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:b}):b]})});Hr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const na=m.memo(r=>{const e=pe(),{diffsSeverities:n,diffsSeverityPlacement:t=G.DescriptionRow}=r,a=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>a==null?void 0:a.type,[a]),o=m.useMemo(()=>fr(a==null?void 0:a.causedAt),[a]);switch(e){case De:return d.jsx(Ln,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(xn,{left:d.jsx(Hr,{...r,layoutSide:Y}),right:d.jsx(Hr,{...r,layoutSide:Z})})});case ze:return d.jsx(Hn,{content:d.jsx(Hr,{...r,layoutSide:Z})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});na.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Dy(r){return r?$e({min:r.minimum,max:r.maximum,exclusiveMin:r.exclusiveMinimum,exclusiveMax:r.exclusiveMaximum}):{data:{},visible:!1}}const Mn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:Te.UNIQUE_ITEMS};function Rt(r,e,n,t){const a=$e({min:r,max:e,exclusiveMin:n,exclusiveMax:t});return a.visible?[a.data.lower,a.data.upper].filter(i=>!!i):[]}function wy(r){const e=Dy(r);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function Ny(r){if(!r)return[];const e=[],n=r,t=r,a=r,i=r,o=Rt(n.minLength,n.maxLength);o.length&&e.push({key:Mn.VALUE_LENGTH,label:_a,values:o}),n.pattern!==void 0&&e.push({key:Mn.VALUE_PATTERN,label:Ra,values:[String(n.pattern)]});const l=wy(t);l.length&&e.push({key:Mn.VALUE_RANGE,label:Ma,values:l}),t.multipleOf!==void 0&&e.push({key:Mn.VALUE_MULTIPLE_OF,label:qa,values:[String(t.multipleOf)]});const s=Rt(a.minProperties,a.maxProperties);s.length&&e.push({key:Mn.PROPERTIES_COUNT,label:Ia,values:s}),i.uniqueItems!==void 0&&e.push({key:Mn.UNIQUE_ITEMS,label:Oa,values:[String(i.uniqueItems)]});const u=Rt(i.minItems,i.maxItems);return u.length&&e.push({key:Mn.ITEMS_COUNT,label:Pa,values:u}),e}const Bi=[$.VALUE_LENGTH,$.VALUE_PATTERN,$.VALUE_RANGE,$.VALUE_MULTIPLE_OF,$.PROPERTIES_COUNT,$.UNIQUE_ITEMS,$.ITEMS_COUNT];function Ty(r){return[...r].sort((e,n)=>Bi.indexOf(e.key)-Bi.indexOf(n.key))}const dl=r=>{const{extensions:e}=r,t=Je()+1;return d.jsx(Pe.Provider,{value:t,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(gt,{title:"Extensions",usage:wn.JsonSchema,lastInvisible:!0}),d.jsx(yr,{source:e,initialLevel:t})]})})};dl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""}}};const or=m.memo(r=>{const{layoutSide:e,sideItems:n}=r;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,a)=>d.jsx(_d,{isVisible:!0,value:t.text,usage:Rd.JsonSchemaValidation,textHighlighterColor:Eo(t.diff,e),borderShadowColor:Md(t.diff,e),isFontMuted:qd(t.diff,e),isEmptyStringPlaceholder:Vm(t.text)},`${t.text}-${a}`))}):null});or.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const Ui={valueLength:_a,valuePattern:Ra,valueRange:Ma,valueMultipleOf:qa,propertiesCount:Ia,itemsCount:Pa,uniqueItems:Oa};function Ey(r){return le(r)&&(r.kind===W.PROPERTY||r.kind===W.ROOT)}const ti=r=>{const{node:e,displayValue:n,isLastInList:t=!1}=r,a=Ge(),i=n??e.value(),o=Jn(i),l=Ey(e)?e:void 0,s=le(e)?e:void 0,u=m.useMemo(()=>l&&n===void 0?za(l,a):Ba(n!==void 0?{value:()=>n}:e,a),[a,n,e,l]),c=m.useMemo(()=>s?qs(s):void 0,[s]),f=m.useMemo(()=>s?Is(s):void 0,[s]),y=m.useMemo(()=>s?Os(s):void 0,[s]),p=m.useMemo(()=>s?Ps(s):void 0,[s]),g=m.useMemo(()=>s?Hs(s):void 0,[s]),h=m.useMemo(()=>s?Ls(s):void 0,[s]),b=m.useMemo(()=>s?Rs(s):void 0,[s]),N=m.useMemo(()=>s?Ms(s):void 0,[s]),v=mr(e,le),T=m.useMemo(()=>ae(v,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[v]),S=m.useMemo(()=>{const A=Ny(o);if(!s)return A;const O=new Set(A.map(I=>I.key)),L=Object.keys(Ui).filter(I=>!O.has(I)).filter(I=>Ki(s,I)).map(I=>({key:I,label:Ui[I],values:[]}));return Ty([...A,...L])},[s,o]),E=m.useCallback(A=>{const O=qm((o==null?void 0:o.enum)??[],c,f,A);return O.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:A,sideItems:O.map(({text:L,valueDiffKey:I})=>({text:L,diff:_t(f,I)}))})},[c,f,o==null?void 0:o.enum]),C=m.useCallback(A=>{const O=Im((o==null?void 0:o.examples)??[],p,g,A);return O.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:A,sideItems:O.map(({text:L,valueDiffKey:I})=>({text:L,diff:_t(g,I)}))})},[p,g,o==null?void 0:o.examples]),V=m.useCallback(A=>{const O=o==null?void 0:o.default,L=_m(O,b,A);return L.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:A,sideItems:L.map(({text:I})=>({text:I,diff:b}))})},[b,o==null?void 0:o.default]),q=m.useCallback((A,O)=>L=>{const I=s?Ur(s,A):void 0,J=s?js(s,A):void 0,K=Om(A,O,I,J,L,A===$.VALUE_RANGE&&s?{nodeValue:i,crawlDiffs:Am(s)??{}}:void 0);return K.length===0?d.jsx(d.Fragment,{}):d.jsx(or,{layoutSide:L,sideItems:K.map(({text:ee,valueDiffKey:we})=>({text:ee,diff:_t(J,we)}))})},[s,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(na,{usage:Ie.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||T.diff)&&d.jsx(na,{usage:Ie.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...T}),u.showDefaultRow&&d.jsx(Sr,{label:"Default",usage:vr.JsonSchemaValidation,subheader:V,colorizingDiff:N,diffsSeverities:b||N?v==null?void 0:v.nodeDiffsSeverities:void 0}),u.showExamplesRow&&d.jsx(Sr,{label:"Examples",usage:vr.JsonSchemaValidation,subheader:C,diff:p,colorizingDiff:h,diffsSeverities:p||g||h?v==null?void 0:v.nodeDiffsSeverities:void 0}),u.showEnumValuesRow&&d.jsx(Sr,{label:"Allowed values",usage:vr.JsonSchemaValidation,subheader:E,diff:c,colorizingDiff:y,diffsSeverities:c||f||y?v==null?void 0:v.nodeDiffsSeverities:void 0,...Ua(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showValidationsSection&&S.map(A=>{const O=A.key,L=s?Ur(s,O):void 0,I=s?Wa(s,O):void 0;return d.jsx(Sr,{label:A.label,usage:vr.JsonSchemaValidation,subheader:q(O,A.values),diff:L,colorizingDiff:I,diffsSeverities:s&&Ki(s,O)?v==null?void 0:v.nodeDiffsSeverities:void 0},A.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(dl,{extensions:o.extensions})]})};ti.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ky(r){const e=_s(r),n={};for(const t of Wn){const a=e[t];a&&(n[t]=a)}return n}function xy(r,e){var s;const n=!!r.diffs[R],t=_s(r),a=ky(r),i=t.required,o=i?{...a,required:i}:a,l=Object.keys(o).length>0;return{isNodeChanged:n,isContentChanged:l,requiredChanged:!n&&!!i,$nodeChange:(s=r.diffs[R])==null?void 0:s.data,$metaChanges:o}}const ul=m.memo(r=>{const{value:e,meta:n,suffix:t}=r;return d.jsxs(d.Fragment,{children:[d.jsx(ln,{text:Sn(e,n)}),t&&d.jsx(ln,{text:t})]})});ul.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const fl=m.memo(r=>{const{node:e,meta:n,layoutSide:t,suffix:a}=r,i=Ya(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(bt,{display:i,layoutSide:t}),a&&d.jsx(ln,{text:a})]})});fl.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const cl=r=>{const{value:e,meta:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(ul,{value:e,meta:n,suffix:o}),t&&d.jsx(it,{text:Aa,children:d.jsx(Ca,{})}),d.jsx(Va,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:a,isNodeChanged:!1,isContentChanged:!1})]})},ml=r=>{const{meta:e,node:n,isCycle:t,layoutSide:a,showTypeLabel:i=!0,typeValueSuffix:o}=r;pe();const l=xy(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(fl,{node:n,meta:e,layoutSide:a,suffix:o}),t&&d.jsx(it,{text:Aa,children:d.jsx(Ca,{})}),d.jsx(Va,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:a,...l})]})};cl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:'See JsonSchemaTitleRowTypeValue\'s `suffix` prop - combiner-kind suffix, e.g. " (anyOf)".'}}};ml.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const Ay="Type: ";function Cy(r){const{node:e,meta:n,headerRowTitle:t}=r,a=e.kind;return Za(e)?{variant:"text",text:t??Ay}:a===W.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:gd}:{variant:"badge",text:"additional property",badgeKind:br}:a===W.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:br}:a===W.ITEMS?{variant:"badge",text:"item",badgeKind:br}:a===W.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:br}:a===W.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function Vy(r,e){const n=(e==null?void 0:e._fragment)??r.value();return r.kind===W.ADDITIONAL_PROPERTIES&&n===!1}function _y(r,e,n,t,a){const i=r===!0&&!fe(e)||!!e&&(e.action===j.remove&&t||e.action===j.add&&a||e.action===j.replace&&(e.beforeValue===!0&&t||e.afterValue===!0&&a));return n?i:r}const yl=r=>{const{required:e,requiredDiff:n,layoutSide:t}=r,a=pe(),{isDocumentLayoutMode:i,isSideBySideDiffsLayoutMode:o}=go(a),{originSide:l,changedSide:s}=hd(t);return i?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!_y(e,n,o,l,s)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};yl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const pl="text-xs text-black font-Inter-Medium",gl=r=>{const{display:e,required:n=!1}=r;switch(e.variant){case"badge":return d.jsx(So,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${pl}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},hl=r=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:a}=r;switch(e.variant){case"badge":return d.jsx(So,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${pl}`,children:[e.text,d.jsx(yl,{required:n,requiredDiff:t,layoutSide:a})]})}};gl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};hl.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Ry(r){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:l=!1,titleRowDiff:s}=r,u=as(),c=e.meta(),f=Jn(t??n.value()),y=n.meta(),p=m.useMemo(()=>Ua(i,a),[a,i]),g=m.useMemo(()=>Cy({node:e,meta:c,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,c,e]),h=m.useMemo(()=>N=>{const v=ko(s);return(v?xo(v,N):Id(s,N))?l?d.jsx(hl,{display:g,required:c==null?void 0:c.required,requiredDiff:o,layoutSide:N}):d.jsx(gl,{display:g,required:c==null?void 0:c.required}):null},[c==null?void 0:c.required,o,g,s,l]),b=m.useMemo(()=>!Vy(n,y),[y,n]);return{displayValueResolved:f,displayMeta:y,listLastRowFlags:p,titleContent:h,showTypeSubheader:b}}const ai=r=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,requiredDiff:c,withRequiredDiffIndicator:f=!1,renderSubheader:y,[ie]:p}=r,{displayValueResolved:g,displayMeta:h,listLastRowFlags:b,titleContent:N,showTypeSubheader:v}=Ry({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,requiredDiff:c,withRequiredDiffIndicator:f,titleRowDiff:u==null?void 0:u.diff});return d.jsx(ce,{...b,"data-precededby":p,titleContent:N,expandable:o,expanded:l,isRoot:Za(e),onClickExpander:o?s:void 0,variant:B.body2,subheader:T=>y({layoutSide:T,displayValueResolved:g,displayMeta:h,displayNode:n,showTypeSubheader:v}),usage:et.JsonSchemaProperty,...u})};ai.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const ii=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,typeValueSuffix:u,...c}=r;return d.jsx(ai,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,renderSubheader:({layoutSide:f,displayValueResolved:y,displayMeta:p,displayNode:g,showTypeSubheader:h})=>d.jsx(cl,{value:y,meta:p,isCycle:g.isCycle,layoutSide:f,showTypeLabel:h,typeValueSuffix:u})})};ii.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function My(r){return ae(on(r),{resolveDiff:()=>Tm(r)})}const oi=r=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:a,isLastInList:i=!1,expandable:o=!1,expanded:l=!1,onClickExpander:s,titleRowDiffProps:u,typeValueSuffix:c,...f}=r,y=m.useMemo(()=>u??My(n),[n,u]),p=m.useMemo(()=>xm(e),[e]),g=pe(),h=m.useMemo(()=>Em(n),[n]),b=!l&&o&&g===De&&!!h&&h.size>0;return d.jsx(ai,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:a,isLastInList:i,expandable:o,expanded:l,onClickExpander:s,titleRowDiffProps:y,requiredDiff:p,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:N,displayMeta:v,displayNode:T,showTypeSubheader:S})=>xo(ko(y.diff),N)?d.jsxs(d.Fragment,{children:[d.jsx(ml,{meta:v,node:n,isCycle:T.isCycle,layoutSide:N,showTypeLabel:S,typeValueSuffix:c}),b&&d.jsx(xa,{values:Array.from(h)})]}):d.jsx(d.Fragment,{})})};oi.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};function qy(r){return le(r)&&r.kind===W.PROPERTY}const si=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Ge(),i=Je(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Bs(),u=qy(e)?e:void 0,c=le(e)?e:void 0,f=rl(),y=m.useMemo(()=>u?za(u,a):Ba(e,a),[a,e,u]),p=m.useMemo(()=>e.childrenNodes(),[e,s]),g=m.useMemo(()=>ws(e),[e,s]),h=m.useMemo(()=>c&&(f!=null&&f.hideUnchangedNodes)?Ks(c,{expandedDepth:o,level:i,hideUnchangedNodes:!0,isRoot:e.kind===W.ROOT}):Ns(e,{expandedDepth:o,level:i}),[o,i,e,c,f==null?void 0:f.hideUnchangedNodes]),b=m.useMemo(()=>In(e,h),[h,e,s]),[N,v]=m.useState(b);m.useEffect(()=>{v(I=>In(e,I))},[e,s]);const T=m.useCallback(()=>{v(I=>{const J=!I;return J&&l(e),In(e,J)})},[l,e]),S=!g||N,E=m.useCallback(I=>c?d.jsx(il,{node:c,meta:c.meta(),layoutSide:I}):d.jsx(al,{node:e}),[e,c]),C=m.useMemo(()=>c?Br(c):void 0,[c]),V=Sa(),q=(V==null?void 0:V.beforeLevel)??i,A=(V==null?void 0:V.afterLevel)??i,{beforeLevel:O,afterLevel:L}=m.useMemo(()=>Zt(q,A,C),[q,A,C]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[c?d.jsx(oi,{"data-precededby":t,ownerNode:c,contentVisibility:y,isLastInList:n,expandable:g,expanded:N,onClickExpander:T}):d.jsx(ii,{"data-precededby":t,ownerNode:e,contentVisibility:y,isLastInList:n,expandable:g,expanded:N,onClickExpander:T}),S&&d.jsxs(d.Fragment,{children:[d.jsx(ti,{node:e,isLastInList:n&&p.length===0}),p.length>0&&d.jsx(Pe.Provider,{value:i+1,children:d.jsxs(zn,{beforeLevel:O,afterLevel:L,children:[d.jsx(gt,{title:E,usage:wn.JsonSchema,lastInvisible:!0,diff:C,diffsSeverities:c==null?void 0:c.diffsSeverities,diffsSeverityPlacement:G.NestingIndicatorRow}),c&&f?d.jsx(ri,{children:p}):p.map((I,J)=>c?d.jsx(Qn,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:I,isLastInList:J===p.length-1},I.id):d.jsx(Dt,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:I,isLastInList:J===p.length-1},I.id))]})})]})]})};si.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const bl=r=>d.jsx(si,{...r});bl.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const Qn=r=>{const{node:e}=r;return Xn(e)?d.jsx(nl,{...r}):d.jsx(bl,{...r})};Qn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Sl=m.memo(r=>{const{node:e}=r,n=Xs(e),t=Sn(ei(n),n.meta())+ht(e);return d.jsx(ln,{text:t,color:null})});Sl.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const vl=m.memo(r=>{const{node:e,layoutSide:n}=r,t=Xs(e),a=Ya(t,t.meta(),n),i=ht(e);return d.jsxs(d.Fragment,{children:[d.jsx(bt,{display:a,layoutSide:n,color:null}),i&&d.jsx(ln,{text:i,color:null})]})});vl.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Yi=new Set;function St(r){const{options:e,selectedOption:n,onSelectOption:t,variant:a,layoutSide:i=Z}=r;return e.length===0?null:d.jsx("div",{className:"flex flex-row gap-2",children:e.map(o=>{const{diffsRelatedClassesList:l,isInvisible:s}=Iy({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(s)return null;const u=l.join(" "),c=typeof o.title=="function"?o.title(i):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${a} ${n===o?"selected":""} ${u}`,onClick:f=>{f.preventDefault(),f.stopPropagation(),t(o)},children:c},o.node.id)})})}function Iy(r){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:a}=r,i=[];let o=!1;if(e||n||t){const l=e==null?void 0:e[R];if(l){const{styles:s}=l;switch(a){case Y:l.inherited||i.push(X.borderShadow(s.before.borderShadowColor)),o=l.data.action===j.add;break;case Z:l.inherited||i.push(X.borderShadow(s.after.borderShadowColor)),o=l.data.action===j.remove;break}}if(!(l!=null&&l.inherited)&&(n||t)){const s=n??Yi,u=t??Yi,c=new Set([...s,...u]),f=jt(c);i.push(f?X.roundMarker(f):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}St.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var vt=(r=>(r.Primary="primary",r.Secondary="secondary",r))(vt||{});function Oy(r,e){if(!r)return"";const n=e===Y?r.styles.before.backgroundColor:r.styles.after.backgroundColor;return X.background(n)}const Py=m.memo(r=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:a,layoutSide:i,levelReductionAction:o}=r,l=Da(i),s=m.useMemo(()=>Gs(l,i,o),[l,i,o]),u=m.useMemo(()=>Oy(a,i),[i,a]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${va} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Pn,{level:s}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(St,{options:e,selectedOption:n,onSelectOption:t,variant:vt.Secondary,layoutSide:i})})]})}),Mt=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=r;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(sr,{title:e,usage:wn.JsonSchema,lastInvisible:!0,layoutSide:r.layoutSide,diff:t,levelReductionAction:r.levelReductionAction}),n&&d.jsx(Py,{...r})]})}),Dl=m.memo(r=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=r,a=pe(),i=m.useMemo(()=>t==null?void 0:t[G.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(a){case De:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(xn,{left:d.jsx(Mt,{...r,layoutSide:Y}),right:d.jsx(Mt,{...r,layoutSide:Z})})});case ze:return d.jsx(Hn,{content:d.jsx(Mt,{...r,layoutSide:Z})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",a,") is not supported."]})});Dl.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};function Hy(r){return le(r)&&r.kind===W.PROPERTY}const li=r=>{const{node:e,isLastInList:n=!1,[ie]:t}=r,a=Ge(),i=Je(),{expandedDepth:o,materializeChildren:l,treeRevision:s}=Bs(),u=le(e)?e:void 0,c=rl(),f=e.nestedNodes(),[y,p]=m.useState(()=>new Map),g=m.useMemo(()=>$s(e,y),[e,y]),h=m.useMemo(()=>zs(e,y),[e,y]),b=m.useMemo(()=>ei(h),[h]),N=le(h)?h:void 0,v=Hy(h)?h:void 0,T=m.useMemo(()=>v?za(v,a):Ba({value:()=>b},a),[b,v,a]),S=m.useMemo(()=>Qm(h),[h,s]),E=m.useMemo(()=>S.length>0,[S.length]),C=m.useMemo(()=>e.isCycle||S.length===0?!1:N&&(c!=null&&c.hideUnchangedNodes)?Ks(N,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):Ns(h,{expandedDepth:o,level:i}),[e.isCycle,h,N,c==null?void 0:c.hideUnchangedNodes,o,S.length,i]),V=m.useMemo(()=>In(h,C),[h,C,s]),[q,A]=m.useState(V);m.useEffect(()=>{A(In(h,C))},[h.id,h,C]),m.useEffect(()=>{A(Q=>In(h,Q))},[h,s]);const O=m.useCallback(()=>{A(Q=>{const ue=!Q;return ue&&l(h),In(h,ue)})},[h,l]),L=m.useMemo(()=>Sn(b,h.meta()),[h,b]),I=m.useMemo(()=>ht(e),[e]),J=m.useMemo(()=>N?Br(N):void 0,[N]),K=Sa(),ee=(K==null?void 0:K.beforeLevel)??i,we=(K==null?void 0:K.afterLevel)??i,Ne=m.useMemo(()=>u?Br(u):void 0,[u]),{beforeLevel:Ve,afterLevel:Fe}=m.useMemo(()=>Zt(ee,we,Ne),[ee,we,Ne]),{beforeLevel:Vn,afterLevel:U}=m.useMemo(()=>Zt(Ve,Fe,J),[Ve,Fe,J]),de=m.useCallback((Q,ue)=>{p(dn=>Xm(e,dn,Q.id,ue.node.id))},[e]);if(f.length===0)return null;const Qe=q&&S.length>0,ge=!!(u&&c),Ze=u?Qn:Dt;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[u&&N?d.jsx(oi,{"data-precededby":t,ownerNode:u,displayNode:N,displayValue:b,contentVisibility:T,isLastInList:n&&!T.showContentSection&&!E,expandable:E,expanded:q,onClickExpander:O,typeValueSuffix:I}):d.jsx(ii,{"data-precededby":t,ownerNode:e,displayNode:h,displayValue:b,contentVisibility:T,isLastInList:n&&!T.showContentSection&&!E,expandable:E,expanded:q,typeValueSuffix:I,onClickExpander:O}),d.jsx(ti,{node:h,displayValue:b,isLastInList:n&&!E&&g.every(Q=>!Q.showSelector)}),d.jsx(Pe.Provider,{value:i+1,children:d.jsxs(zn,{beforeLevel:Ve,afterLevel:Fe,children:[g.map(Q=>{const ue=Q.nestedNodes.map((un,Rl)=>sy(un,Rl,le(un)?Ml=>d.jsx(vl,{node:un,layoutSide:Ml}):()=>d.jsx(Sl,{node:un}))),dn=ue.find(un=>un.node.id===Q.selectedNestedNode.id)??ue[0]??null,_n=oy(Q.combinerNode),gr=ry(Q.combinerNode);return d.jsx(Dl,{combinerKindLabel:Q.combinerKindLabel,showSelector:Q.showSelector,options:ue,selectedOption:dn,onSelectOption:un=>de(Q.combinerNode,un),selectorRowDiff:_n.selectorRowDiff,diffsSeverities:_n.diffsSeverities,levelReductionAction:gr},Q.combinerNode.id)}),Qe&&d.jsxs(zn,{beforeLevel:Vn,afterLevel:U,children:[d.jsx(gt,{title:L,usage:wn.JsonSchema,lastInvisible:!0,diff:J,diffsSeverities:N==null?void 0:N.diffsSeverities,diffsSeverityPlacement:G.NestingIndicatorRow}),ge?d.jsx(ri,{children:S}):S.map((Q,ue)=>d.jsx(Ze,{"data-precededby":_.JSON_SCHEMA_PROPERTY,node:Q,isLastInList:ue===S.length-1},Q.id))]})]})})]})};li.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Dt=r=>{const{node:e}=r;return Xn(e)?d.jsx(li,{...r}):d.jsx(si,{...r})};Dt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ly=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(jy,{...r})})),jy=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=kn,devMode:a=!1,initialLevel:i=0,customizationOptions:o}=r,l=m.useMemo(()=>Xe(a),[a]),s=m.useMemo(()=>new Jo({source:e,materializeDepth:n,logger:l}),[e,n,l]),u=m.useMemo(()=>s.build(),[s]),[c,f]=m.useReducer(h=>h+1,0),y=m.useCallback(h=>{s.materializeChildren(h),f()},[s]),p=m.useMemo(()=>({expandedDepth:n,materializeChildren:y,treeRevision:c}),[n,y,c]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const g=u.root;return g?d.jsx(Xa.Provider,{value:p,children:d.jsx(ut.Provider,{value:o,children:d.jsx(En.Provider,{value:t,children:d.jsx(On.Provider,{value:ze,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(Dt,{node:g})})})})})})}):null};Ly.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""}}};const Jy=m.memo(r=>r.schema===null||r.schema===void 0?null:d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(Fy,{...r})})),Fy=r=>{const{schema:e,expandedDepth:n=$r,displayMode:t=kn,devMode:a=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:l,diffTypes:s,hideUnchangedNodes:u=!0}=r,c=dy(u),f=m.useMemo(()=>Xe(a),[a]),y=m.useMemo(()=>new $f({source:e,materializeDepth:n,diffsMetaKeys:l,logger:f}),[e,n,l,f]),p=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",p);const[g,h]=m.useReducer(T=>T+1,0),b=m.useCallback(T=>{y.materializeChildren(T),h()},[y]),N=m.useMemo(()=>({expandedDepth:n,materializeChildren:b,treeRevision:g}),[n,b,g]),v=p.root;return v?d.jsx(rt.Provider,{value:l,children:d.jsx(Ea.Provider,{value:s,children:d.jsx(ni.Provider,{value:c,children:d.jsx(Xa.Provider,{value:N,children:d.jsx(ut.Provider,{value:o,children:d.jsx(En.Provider,{value:t,children:d.jsx(On.Provider,{value:De,children:d.jsx(Pe.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Qn,{node:v})})})})})})})})})}):null};Jy.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:""}}};var Yr=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r))(Yr||{});const pr=r=>{const{node:e,variant:n=Yr.PRIMARY,[ie]:t}=r,a=Ge(),i=er(),o=e.meta(),l=o==null?void 0:o.brokenRef,[s,u]=m.useState(null),c=e.nestedNodes(),f=m.useMemo(()=>c.filter(At).map((S,E)=>{var q;const C=((q=S.value())==null?void 0:q.protocol)??"",V=`binding-${E}`;return Ct(S)?{title:C,node:S,testId:V,diffs:S.diffs,diffsSummary:S.diffsSummary,descendantDiffs:S.descendantDiffs,descendantDiffsSummary:S.descendantDiffsSummary,diffsSeverities:S.diffsSeverities}:{title:C,node:S,testId:V}}),[c]),y=s!=null&&s.node&&At(s.node)?s.node:null,p=y==null?void 0:y.value(),{version:g="latest",binding:h=null}=p??{};m.useEffect(()=>{f.length>0&&s===null&&u(f[0])},[f,s]);const b=m.useCallback(S=>l?d.jsx(d.Fragment,{}):d.jsx(St,{options:f,selectedOption:s,onSelectOption:u,variant:vt.Secondary,layoutSide:S}),[f,l,s]),N=m.useMemo(()=>{if(pc(e)){const S=on(e);return ae(S)}return{}},[e]),v=m.useMemo(()=>{if(y&&Ct(y)){const S=on(y);return ae(S,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:G.BindingVersionRow})}return{}},[y]),T=m.useMemo(()=>{if(!y)return null;if(Ct(y)&&i){const S=y.diffs[R],E=Ky(h,S,i);return d.jsx(ct,{"data-precededby":_.BINDING_VERSION_ROW,mergedSource:E,displayMode:a,initialLevel:1,supportJsonSchema:!0,diffMetaKeys:i})}return At(y)?d.jsx(yr,{"data-precededby":_.BINDING_VERSION_ROW,source:h,displayMode:a,initialLevel:1,supportJsonSchema:!0}):null},[y,h,a,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===Yr.PRIMARY?B.h3:B.h5,subheader:b,...N}),d.jsxs("div",{"data-testid":`${s==null?void 0:s.testId}-content`,className:"flex flex-col",children:[d.jsx(sn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:g,variant:B.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...v}),T]})]})};function Ky(r,e,n){if(!r)return null;const t=e==null?void 0:e.data;if(!t)return r;const{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,x(t)){const s=r[l];o[l]={...t,afterValue:s}}if(k(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}pr.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const wt=r=>{const{node:e,[ie]:n}=r,t=er(),a=e.value(),i=(a==null?void 0:a.rawValues)??{},o=m.useMemo(()=>{var l;if(gc(e)){const s=on(e);return{...ae(s),highlightingMode:(l=e.diffs[R])==null?void 0:l.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:"Extensions",expandable:!1,variant:B.h3,usage:et.AsyncApiJsoSection,...o}),t?d.jsx(ct,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(yr,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};wt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const wl="Address Parameters",Nl=r=>{const{node:e,[ie]:n}=r,t=Ge();if(bc(e))return d.jsx(Gy,{"data-precededby":n,node:e});const a=e.value(),i=(a==null?void 0:a.rawValues)??{};return d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:wl,expandable:!1,variant:B.h3}),d.jsx(mt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,overriddenKind:"parameters"})]})},Gy=r=>{const{node:e,[ie]:n}=r,t=Ge(),a=pe(),i=e.value(),o=i==null?void 0:i.rawValues,l=er(),s=m.useMemo(()=>{const c=on(e);return ae(c)},[e]),u=m.useMemo(()=>By(o,e.diffs[R],l),[o,l,e.diffs]);return!l||!o?null:d.jsxs(d.Fragment,{children:[d.jsx(ce,{"data-precededby":n,value:wl,expandable:!1,variant:B.h3,...s}),d.jsx(pt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:u,expandedDepth:2,displayMode:t,layoutMode:a,metaKeys:l,overriddenKind:"parameters"})]})};function By(r,e,n){if(!r||!e||!n)return r;const t=e.data,{diffsMetaKey:a}=n;return{...r,[a]:Object.keys(r).reduce((o,l)=>{if(o[l]=t,x(t)){const s=r[l];o[l]={...t,afterValue:s}}if(k(t)){const s=r[l];o[l]={...t,beforeValue:s}}return o},{})}}Nl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const Tl=m.memo(r=>{const{renderAddress:e}=r,{diff:n,descendantDiffs:t,diffsSeverities:a}=r,i=m.useMemo(()=>a==null?void 0:a["server-address-row"],[a]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),l=m.useMemo(()=>fr(i==null?void 0:i.causedAt),[i]);switch(pe()){case De:return d.jsx(Ln,{diffType:o,diffTypeCause:l,hidden:!1,children:d.jsx(xn,{left:e(Y),right:e(Z)})});case ze:return d.jsx(Hn,{content:e(Z)})}return null});Tl.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const El=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(lt),o=mr(e,Ar),{nodeDiffs:l}=o,s=m.useMemo(()=>ae(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ae(o,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[o]),c=m.useMemo(()=>ae(o,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[o]),f=m.useMemo(()=>ae(o,{resolveDiff:(v,T)=>{const S=xe.maxChangedPropertyMetaDataByDiffType(T("protocol"),T("host"));return v[R]??S}}),[o]),y=m.useCallback(v=>{var A;if(!t)return null;if(!Ar(e))return d.jsx(d.Fragment,{children:t.protocol});const T=(A=e.diffs)==null?void 0:A.protocol;if(!T)return d.jsx(d.Fragment,{children:t.protocol});const S=new Set,{data:E,styles:C}=T;let V=t.protocol,q=!1;return v===Y&&(S.add(X.highlighter(C.before.textHighlighterColor)),k(E)||H(E)?V=E.beforeValue:an(E)&&(V=E.beforeKey),x(E)&&(q=!0)),v===Z&&(S.add(X.highlighter(C.after.textHighlighterColor)),x(E)||H(E)?V=E.afterValue:an(E)&&(V=E.afterKey),k(E)&&(q=!0)),q?null:d.jsx("span",{className:Array.from(S).join(" "),children:V})},[e,t]),p=m.useCallback(v=>{var A;if(!t)return null;if(!Ar(e))return d.jsx(d.Fragment,{children:t.host});const T=(A=e.diffs)==null?void 0:A.host;if(!T)return d.jsx(d.Fragment,{children:t.host});const S=new Set,{data:E,styles:C}=T;let V=t.host,q=!1;return v===Y&&(S.add(X.highlighter(C.before.textHighlighterColor)),k(E)||H(E)?V=E.beforeValue:an(E)&&(V=E.beforeKey),x(E)&&(q=!0)),v===Z&&(S.add(X.highlighter(C.after.textHighlighterColor)),x(E)||H(E)?V=E.afterValue:an(E)&&(V=E.afterKey),k(E)&&(q=!0)),q?null:d.jsx("span",{className:Array.from(S).join(" "),children:V})},[e,t]),g=m.useCallback(v=>{var A;function T(O=!1,L=[]){return d.jsx("div",{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${cr} py-2 flex flex-row w-full h-full ${L.join(" ")}`,children:!O&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[y(v),"://",p(v)]})})}if(!Ar(e))return T();const S=((A=e.diffs)==null?void 0:A[R])??f.diff;if(!S)return T();const{data:E,styles:C}=S,V=new Set;let q=!1;return v===Y&&(x(E)?(V.add(X.background(w.Gray)),q=!0):V.add(X.background(C.before.backgroundColor))),v===Z&&(k(E)?(V.add(X.background(w.Gray)),q=!0):V.add(X.background(C.after.backgroundColor))),T(q,Array.from(V))},[e,p,y,f.diff]),h=m.useMemo(()=>je(t,l,"title"),[t,l]),b=m.useMemo(()=>je(t,l,"description"),[t,l]),N=m.useMemo(()=>je(t,l,"summary"),[t,l]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(ce,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:B.h4,...s}),!h&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h4,...s}),d.jsx(Tl,{renderAddress:g,...f}),b&&d.jsx(sn,{"data-precededby":_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h6,textFontWeight:"normal",textColor:Dn,...u}),N&&d.jsx(sn,{"data-precededby":b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h6,textFontWeight:"normal",textColor:Dn,...c}),i&&d.jsx(pr,{"data-precededby":N?_.SUMMARY_ROW:b?_.DESCRIPTION_ROW:_.SERVER_ADDRESS_ROW,node:i,variant:Yr.SECONDARY})]}):null});El.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const kl=m.memo(r=>{const{node:e,[ie]:n}=r,t=m.useMemo(()=>e.childrenNodes().filter(ic),[e]),a=m.useMemo(()=>{if(Sc(e)){const i=on(e);return ae(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:B.h3,...a}),t.map((i,o)=>d.jsx(El,{"data-precededby":o===0?_.MESSAGE_SECTION_HEADER_HIGH_LEVEL:_.SERVER_BLOCK,node:i},i.id))]})});kl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const xl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(lt),o=a.find(rc),l=a.find(ac),s=a.find(La),u=mr(e,hc),{nodeDiffs:c}=u,f=m.useMemo(()=>ae(u,{diffKey:"title"}),[u]),y=m.useMemo(()=>ae(u,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[u]),p=m.useMemo(()=>ae(u,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[u]),g=m.useMemo(()=>je(t,c,"title"),[t,c]),h=m.useMemo(()=>je(t,c,"description"),[t,c]),b=m.useMemo(()=>je(t,c,"summary"),[t,c]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(ce,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:B.h2,...f}),!g&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:B.h2,...f}),h&&d.jsx(sn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:Dn,...y}),b&&d.jsx(sn,{"data-precededby":h?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:Dn,...p}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Nl,{"data-precededby":h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),l&&d.jsx(kl,{"data-precededby":o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),s&&d.jsx(wt,{"data-precededby":l?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),i&&d.jsx(pr,{"data-precededby":s?_.JSO_VIEWER:l?_.SERVER_BLOCK:o?_.JSON_SCHEMA_VIEWER:h?_.DESCRIPTION_ROW:b?_.SUMMARY_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};xl.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Al=r=>{const{node:e,[ie]:n}=r,t=Ge(),a=pe(),i=er(),o=Ao(),l=e.childrenNodes(),s=l.find(ec),u=l.find(La),c=l.find(lt),f=l.find(nc),y=m.useMemo(()=>$i(s,i),[s,i]),p=m.useMemo(()=>$i(f,i),[f,i]),g=m.useMemo(()=>{if(vc(s)){const N=on(s);return ae(N)}return{}},[s]),h=m.useMemo(()=>{if(Dc(f)){const N=on(f);return ae(N)}return{}},[f]),b=m.useCallback(N=>a===ze?d.jsx(mt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:N,displayMode:t,overriddenKind:"parameters"}):a===De&&i?d.jsx(pt,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:N,displayMode:t,metaKeys:i,filters:o,layoutMode:De,overriddenKind:"parameters"}):null,[i,o,t,a]);return d.jsxs("div",{className:"flex flex-col",children:[s&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":n,value:"Headers",variant:B.h3,expandable:!1,...g}),b(y)]}),u&&d.jsx(wt,{"data-precededby":s?_.JSON_SCHEMA_VIEWER:n,node:u}),c&&d.jsx(pr,{"data-precededby":s?_.JSON_SCHEMA_VIEWER:u?_.JSO_VIEWER:n,node:c}),f&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(ce,{"data-precededby":s?_.JSON_SCHEMA_VIEWER:u||c?_.JSO_VIEWER:n,value:"Payload",variant:B.h3,expandable:!1,...h}),b(p)]})]})},Wi="Type";function $i(r,e){if(!r)return;const n=r.value();if(n)return r instanceof He?$t(Wi,n.schema,r.diffs[R],e):fs(Wi,n.schema)}Al.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Cl=r=>{const{node:e,[ie]:n}=r,t=e.value(),a=e.childrenNodes(),i=a.find(lt),o=a.find(La),l=mr(e,Nc),{nodeDiffs:s}=l,u=m.useMemo(()=>ae(l,{diffKey:"title"}),[l]),c=m.useMemo(()=>ae(l,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[l]),f=m.useMemo(()=>ae(l,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[l]),y=m.useMemo(()=>je(t,s,"title"),[t,s]),p=m.useMemo(()=>je(t,s,"description"),[t,s]),g=m.useMemo(()=>je(t,s,"summary"),[t,s]);return d.jsxs("div",{className:"flex flex-col",children:[y&&d.jsx(ce,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:B.h2,expandable:!1,expanded:!0,...u}),!y&&d.jsx(ce,{"data-precededby":n,value:e.key.toString(),variant:B.h2,expandable:!1,expanded:!0,...u}),p&&d.jsx(sn,{"data-precededby":_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:B.h5,textFontWeight:"normal",textColor:Dn,...c}),g&&d.jsx(sn,{"data-precededby":p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:B.h5,textFontWeight:"normal",textColor:Dn,...f}),a.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(wt,{"data-precededby":g?_.SUMMARY_ROW:p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(pr,{"data-precededby":o?_.JSO_VIEWER:g?_.SUMMARY_ROW:p?_.DESCRIPTION_ROW:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Cl.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Vl=r=>{const{node:e,[ie]:n}=r;return es(e)?d.jsx(Al,{"data-precededby":n,node:e}):ns(e)?d.jsx(xl,{"data-precededby":n,node:e}):rs(e)?d.jsx(Cl,{"data-precededby":n,node:e}):null};Vl.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const _l=r=>{const{node:e,[ie]:n}=r,t=pe();Ge();const[a,i]=m.useState(null),o=e.nestedNodes(),l=m.useMemo(()=>o.map(g=>{const h=Uy(g),b=Yy(g);return Ec(g)?{node:g,title:h,testId:b,diffs:g.diffs,diffsSummary:g.diffsSummary,descendantDiffs:g.descendantDiffs,descendantDiffsSummary:g.descendantDiffsSummary,diffsSeverities:g.diffsSeverities}:{node:g,title:h,testId:b}}),[o]);m.useEffect(()=>{l.length>0&&a===null&&i(l[0])},[l,a]);const s=m.useMemo(()=>{var g;return Tc(e)?(g=e.diffs)==null?void 0:g[R]:null},[e]),u=m.useMemo(()=>{if(s){const{data:g}=s;if(H(g)||k(g))return g.beforeDeclarationPaths[0];if(x(g))return g.afterDeclarationPaths[0]}return null},[s]),c=m.useMemo(()=>{var g;return(g=s==null?void 0:s.data)==null?void 0:g.type},[s]),f=m.useMemo(()=>{const g=u==null?void 0:u.join(".");return g?`caused by ${g} change`:void 0},[u]),y=m.useCallback(g=>{const h=new Set;if(s){const{styles:b}=s;g===Y&&h.add(X.background(b.before.backgroundColor)),g===Z&&h.add(X.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${cr} h-full ${Array.from(h).join(" ")}`,children:d.jsx(St,{options:l,selectedOption:a,onSelectOption:i,variant:vt.Secondary,layoutSide:g})})},[s,n,l,a]),p=m.useCallback(()=>{switch(t){case De:return d.jsx(Ln,{diffType:c,diffTypeCause:f,hidden:!1,children:d.jsx(xn,{left:y(Y),right:y(Z)})});default:return d.jsx(Hn,{content:y(Z)})}},[c,f,t,y]);return d.jsxs("div",{className:"flex flex-col",children:[p(),a&&tc(a.node)&&d.jsx("div",{"data-testid":`${a.testId}-section`,children:d.jsx(Vl,{"data-precededby":_.MESSAGE_SECTION_SELECTOR,node:a.node})})]})};function Uy(r){switch(r.kind){case D.MESSAGE_CONTENT:return"Message";case D.MESSAGE_CHANNEL:return"Channel";case D.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function Yy(r){switch(r.kind){case D.MESSAGE_CONTENT:return"message-content";case D.MESSAGE_CHANNEL:return"message-channel";case D.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}_l.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const di=r=>{const{node:e,noHeading:n=!1}=r,t=e.value(),a=m.useMemo(()=>e.childrenNodes(),[e]),i=mr(e,wc),{nodeDiffs:o}=i,l=m.useMemo(()=>ae(i,{diffKey:"title"}),[i]),s=m.useMemo(()=>ae(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>ae(i,{diffKey:"description",diffsSeverityPlacement:G.DescriptionRow}),[i]),c=m.useMemo(()=>ae(i,{diffKey:"summary",diffsSeverityPlacement:G.SummaryRow}),[i]),f=m.useMemo(()=>je(t,o,"title"),[t,o]),y=m.useMemo(()=>je(t,o,"description"),[t,o]),p=m.useMemo(()=>je(t,o,"summary"),[t,o]),g=n?_.ROOT:_.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&f&&d.jsx(ce,{"data-precededby":_.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:B.h1,...l}),!n&&!f&&d.jsx(ce,{"data-precededby":_.ROOT,value:e.key.toString(),expandable:!1,variant:B.h1,...l}),d.jsx(ts,{"data-precededby":g,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...s}),y&&d.jsx(sn,{"data-precededby":_.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:B.h4,textFontWeight:"normal",textColor:Dn,...u}),p&&d.jsx(sn,{"data-precededby":y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:B.h4,textFontWeight:"normal",textColor:Dn,...c}),d.jsx(Wy,{"data-precededby":p?_.SUMMARY_ROW:y?_.DESCRIPTION_ROW:_.ADDRESS_ROW,children:a})]})},Wy=r=>{const{children:e,[ie]:n}=r;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>Zf(t)?d.jsx(_l,{"data-precededby":n,node:t},t.key):null)})};di.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const $y=m.memo(r=>r.source===null?null:d.jsx(Nn,{fallback:d.jsx(Tn,{componentName:"Async API Operation Viewer"}),children:d.jsx(zy,{...r})})),zy=m.memo(r=>{const{source:e,operationKeys:n,displayMode:t=kn,devMode:a=!1,noHeading:i=!1,referenceNamePropertyKey:o}=r,l=m.useMemo(()=>Xe(a),[a]),s=m.useMemo(()=>new Oo({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:l}),[e,n,o,l]),u=m.useMemo(()=>(s==null?void 0:s.build())??null,[s]);l.debug("[AsyncAPI] Original Source:",e),l.debug("[AsyncAPI] Tree:",u);const c=u==null?void 0:u.root;return!c||!Zo(c)?null:d.jsx(No.Provider,{value:a,children:d.jsx(En.Provider,{value:t,children:d.jsxs(On.Provider,{value:ze,children:[" ",d.jsx(Pe.Provider,{value:0,children:d.jsx(di,{node:c,noHeading:i})})]})})})});$y.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{$y as A,yr as J,Ac as a,mt as b,pt as c,Jy as d,Ly as e,ct as f};
