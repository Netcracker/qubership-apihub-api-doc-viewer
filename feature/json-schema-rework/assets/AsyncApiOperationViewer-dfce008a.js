var Lo=Object.defineProperty;var jo=(a,e,n)=>e in a?Lo(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var x=(a,e,n)=>(jo(a,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{aA as mt,a3 as En,N as M,d as fr,t as E,H as S,v as k,x as q,y as xe,R as H,w as Xe,O as L,aB as dn,aC as Xt,aD as Qt,aE as Zt,aF as ci,aG as mi,aH as yi,aI as gi,aJ as pi,aK as hi,aL as bi,aM as vi,aN as Jo,aO as er,aP as Di,aQ as Si,a6 as wi,aR as Ni,aS as ki,aT as Ei,ai as Ai,aj as Ti,ah as Vi,aU as xi,af as Ci,ag as Ri,aV as Mi,aW as nr,ae as _i,aa as qi,ac as Hi,ab as Oi,ad as Pi,a7 as Ii,a8 as Li,a9 as ji,U as $,X as Pe,Y as Wn,W as oe,S as Oe,V as ne,E as xn,c as Cn,e as Rn,L as Mn,f as Ie,p as _n,aX as Fo,aY as Ko,aZ as Go,a_ as Bo,a$ as Uo,b0 as Yo,b1 as Wo,b2 as zo,b3 as $o,z as Xo,A as Qo,B as Zo,F as es,G as Ji,J as ns,u as Ce,am as pn,l as an,an as bt,h as ts,b4 as rs,b5 as tt,ay as is,at as Fi,b6 as as,g as Ki,ao as os}from"./UxBadge-a3d5708d.js";import{W as cr,l as A,Y as be,Z as D,_ as vt,$ as Dt,a0 as ss,a1 as St,a2 as Gi,a3 as de,e as Ue,a4 as wt,t as fe,a5 as ee,a6 as mr,a7 as ls,v as G,a8 as ds,a9 as us,aa as Bi,ab as Ui,ac as qe,ad as Yi,z as yr,ae as tr,af as fs,S as Re,ag as hn,N as qn,O as bn,ah as Lt,b as K,X as zn,A as te,ai as Wi,aj as cs,ak as Hn,al as Ze,am as ae,T as me,an as Nt,P as R,ao as ms,ap as ve,aq as zi,ar as gr,as as pr,at as rt,au as $e,av as ys,aw as gs,ax as Ve,ay as ps,az as hs,aA as bs,U as vs,M as $i,aB as Ds,aC as Ss,aD as $n,aE as wn,aF as Nn,aG as it,aH as Xi,aI as Qi,aJ as ws,c as en,d as fn}from"./IndexesNodeViewer-04e95f65.js";import{r as m}from"./index-f46741a2.js";import{T as hr,A as vn,a as On,b as ce,c as br,m as vr,t as Ns,C as ks,d as Dr,e as Zi,u as Pn,f as Es}from"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphQLOperationViewer-7b86c0e8.js";import{U as ea,N as As,R as Ts,r as Vs,V as na,g as ta,h as ra,j as ia,P as aa,k as oa,I as sa,A as xs,l as Cs,m as Rs,B as Gr,W as Ms,D as _s,n as qs,o as Sr,C as la,p as da}from"./GraphPropNodeViewer-c64786c2.js";class Hs extends cr{constructor(){super()}}const Br=(a,e)=>!A(e)||be(e)?e:{rawValues:e},Os=(a,e)=>{if(!A(e)||be(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof a=="symbol"?a.toString():`${a}`}},Ur=(a,e)=>A(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function Fn(a){return{"/data":{"/content":()=>Fn(D.MESSAGE_CONTENT),"/channel":()=>Fn(D.MESSAGE_CHANNEL),"/operation":()=>Fn(D.MESSAGE_OPERATION),kind:D.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:D.MESSAGE_CHANNEL_PARAMETERS,transformers:[Br]},"/servers":{"/*":()=>Fn(D.SERVER),kind:D.SERVERS},"/extensions":{kind:D.EXTENSIONS,transformers:[Br]},"/bindings":{"/*":{kind:D.BINDING,transformers:[Os]},kind:D.BINDINGS,complex:!0},"/headers":{kind:D.MESSAGE_HEADERS,transformers:[Ur]},"/payload":{kind:D.MESSAGE_PAYLOAD,transformers:[Ur]},kind:a}}const Ps="<address unknown>";class ua{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,r;const i=e.operations??{};let o,s;if(n)t=n.operationKey,r=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(i).at(0),o){const u=i[o],f=this.isReferenceObject(u)?null:u;if(f){const c=(l=f.messages)==null?void 0:l[0],g=this.isReferenceObject(c)?null:c;if(g){const y=g[this.referenceNamePropertyKey];s=typeof y=="string"?y:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,r=s}return{operationKey:t,messageKey:r}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var V;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},r=this.operationKeysOrDefaults(e,n);if(!r)return null;const{operationKey:i,messageKey:o}=r,s=Object.entries(t).filter(v=>{const[T,j]=v;return!this.isReferenceObject(j)&&T===i}).map(([,v])=>v).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${i}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let f=(s.messages??[]).filter(v=>!this.isReferenceObject(v)).find(v=>A(v)&&v[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!f){const v=(V=l.messages)==null?void 0:V[o];if(f=this.isReferenceObject(v)?void 0:v,!f)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const c=this.copyExtensions(s),g=this.copyExtensions(l),y=this.copyExtensions(f),p=v=>A(v)?{[this.referenceNamePropertyKey]:v[this.referenceNamePropertyKey]}:void 0,h=p(f),b=p(l),w=p(s);return{...h??{},id:o,...f.name?{internalTitle:f.name}:{},...f.title?{title:f.title}:{},...f.summary?{summary:f.summary}:{},...f.description?{description:f.description}:{},action:s.action,address:l.address??Ps,data:{content:{...f.headers?{headers:f.headers}:{},...y?{extensions:y}:{},...f.bindings?{bindings:f.bindings}:{},...f.payload?{payload:f.payload}:{}},channel:{...b??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...g?{extensions:g}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...w??{},id:i,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...c?{extensions:c}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[r,i]of Object.entries(e))n[r]=this.isReferenceObject(i)?i:{type:"string",...i};const t=e;for(const r of Reflect.ownKeys(e))typeof r=="symbol"&&Object.defineProperty(n,r,{value:t[r],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,r)=>(t[r]=e[r],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function Is(a){return vt(a)}const Ls=new Set([D.BINDING,D.EXTENSIONS,D.MESSAGE,D.MESSAGE_CHANNEL,D.MESSAGE_CHANNEL_PARAMETERS,D.MESSAGE_HEADERS,D.MESSAGE_OPERATION,D.MESSAGE_PAYLOAD,D.SERVER]),at=["title","description","summary"];class kt extends Dt{createNodeMeta(e){return{...A(e)&&mt in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,r){return!ss(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:r(t,kt.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Ls.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case D.BINDING:return["binding","version","protocol"];case D.EXTENSIONS:case D.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case D.MESSAGE:return[...at,"internalTitle","action","address"];case D.MESSAGE_CHANNEL:return[...at];case D.MESSAGE_OPERATION:return[...at];case D.MESSAGE_HEADERS:case D.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case D.SERVER:return[...at,"host","protocol"];default:return[]}}}const js="[AsyncAPI]";class fa extends St{constructor(n){const{source:t,referenceNamePropertyKey:r,operationKeys:i,logger:o=Ue()}=n;super();x(this,"tree");x(this,"source");x(this,"referenceNamePropertyKey");x(this,"operationKeys");x(this,"logger");x(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=r,this.operationKeys=i,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!A(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new wt},r=Fn(D.MESSAGE),i=Is({source:n,tree:this.tree,supportedNodeKinds:Gi,createNodeFromRaw:(o,s,l,u,f)=>this.createNodeFromRaw(o,s,l,u,f),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>A(s)&&!!s.isPrimitive});return En(n,i,{state:t,rules:r}),this.tree}get logPrefix(){return js}createTree(){return new Hs}createNodeDataBuilder(){return new kt}prepareSource(){return new ua(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return A(n)?n:null}resolveNodeKey(n,t){if(!A(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const r=t[this.referenceNamePropertyKey];if(typeof r=="string"||typeof r=="number")return r}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const y=this.createNodeMeta(t,o),p={type:de.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,p)}const f=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),g={type:de.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:f,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:i}=r;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===de.SIMPLE}isComplexTreeNode(n){return n.type===de.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Js extends hr{constructor(){super()}}function Yr(a){return"diffs"in a&&"diffsSummary"in a&&"descendantDiffs"in a&&"descendantDiffsSummary"in a&&"diffsSeverities"in a}const Fs="x-";function jt(a){return a===void 0||typeof a=="symbol"?!1:(typeof a=="string"?a:`${a}`).startsWith(Fs)}class Ks extends ua{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:r,messageKey:i}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=fe(ee(e,["operations",o],this.referenceNamePropertyKey)),f=fe(ee(e,["operations",r,o],this.referenceNamePropertyKey));fe(ee(e,["operations",r,"bindings",o],this.referenceNamePropertyKey));const c=fe(ee(e,["operations",r,"channel",o],this.referenceNamePropertyKey));fe(ee(e,["operations",r,"channel","bindings",o],this.referenceNamePropertyKey)),fe(ee(e,["operations",r,"channel","servers",o],this.referenceNamePropertyKey));const g=fe(ee(e,["operations",r,"messages",o],this.referenceNamePropertyKey)),y=fe(ee(e,["operations",r,"messages",i,o],this.referenceNamePropertyKey));fe(ee(e,["operations",r,"messages",i,"bindings",o],this.referenceNamePropertyKey));const p=ee(e,["operations",r,"messages",i],this.referenceNamePropertyKey),h=ee(e,["operations",r,"messages"],this.referenceNamePropertyKey),b=A(p)&&mr(h)?ls(h,p):void 0,w=(b&&typeof b!="symbol"?g==null?void 0:g[b]:void 0)??(r&&typeof r!="symbol"?u==null?void 0:u[r]:void 0),N=l;if(!(o in N)){const V=y==null?void 0:y.title,v=y==null?void 0:y.name,T=y==null?void 0:y.description,j=y==null?void 0:y.summary,_=c==null?void 0:c.address,J=y==null?void 0:y.headers,O=y==null?void 0:y.payload,P=N.data.content.extensions;if(P&&!(o in P)){const ue=Object.keys(y??{}).reduce((Z,se)=>{if(!jt(se))return Z;const Ye=y==null?void 0:y[se];return Ye&&(Z[se]=Ye),Z},{});N.data.content.extensions=Object.assign(P,{[o]:ue})}const Y=N.data.content;if(Y&&!(o in Y)){const ue={...J?{headers:J}:{},...O?{payload:O}:{}};N.data.content=Object.assign(Y,{[o]:ue})}N[o]={...w?{[M]:w}:{},...V?{title:V}:{},...v?{internalTitle:v}:{},...T?{description:T}:{},...j?{summary:j}:{},..._?{address:_}:{}}}if(!(o in N.data.channel)){const V=c==null?void 0:c.title,v=c==null?void 0:c.description,T=c==null?void 0:c.summary,j=c==null?void 0:c.address,_=N.data.channel.extensions;if(_&&!(o in _)){const J=Object.keys(c??{}).reduce((O,P)=>{if(!jt(P))return O;const Y=c==null?void 0:c[P];return Y&&(O[P]=Y),O},{});N.data.channel.extensions=Object.assign(_,{[o]:J})}N.data.channel[o]={...V?{title:V}:{},...v?{description:v}:{},...T?{summary:T}:{},...j?{address:j}:{}}}if(!(o in N.data.operation)){const V=f==null?void 0:f.title,v=f==null?void 0:f.description,T=f==null?void 0:f.summary,j=N.data.operation.extensions;if(j&&!(o in j)){const _=Object.keys(f??{}).reduce((J,O)=>{if(!jt(O))return J;const P=f==null?void 0:f[O];return P&&(J[O]=P),J},{});N.data.operation.extensions=Object.assign(j,{[o]:_})}N.data.operation[o]={...V?{title:V}:{},...v?{description:v}:{},...T?{summary:T}:{}}}return fr(N,o,s),N}hasOnlyAllowedDiffMetaSymbols(e){if(!A(e)&&!be(e))return!0;if(be(e))return e.every(i=>this.hasOnlyAllowedDiffMetaSymbols(i));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(i=>n.has(i))?Object.values(e).every(i=>this.hasOnlyAllowedDiffMetaSymbols(i)):!1}}class Gs extends kt{createNodeValue(e,n,t,r){return super.createNodeValue(e,n,t,r)}createNodeMeta(e){return super.createNodeMeta(e)}}class Bs extends vn{aggregate(e,n,t,r){const i=new Set;if(!n)return i;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;i.add(s)}return i}}class Us extends vn{aggregate(e,n,t,r){const i=new Set;if(!t||!r)return i;const{aggregatedDiffsMetaKey:o}=r,s=ee(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&i.add(l.type);return i}}class Ys extends vn{aggregate(e,n,t,r){const i=new Set;if(!t||!r)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=fe(ee(t,["parameters","properties",o]));if(l)for(const c of Object.values(l))c&&i.add(c.type);const u=ee(t,["parameters",s]);if(this.isDiffsSet(u))for(const c of u)c&&i.add(c.type);const f=fe(ee(t,["extensions",o]));if(f)for(const c of Object.values(f))c&&i.add(c.type);return i}}class Ws extends vn{aggregate(e,n,t,r){const i=new Set;if(!t||!r)return i;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=fe(ee(t,["extensions",o]));if(l)for(const c of Object.values(l))c&&i.add(c.type);const u=ee(t,["headers",s]);if(this.isDiffsSet(u))for(const c of u)c&&i.add(c.type);const f=ee(t,["payload",s]);if(this.isDiffsSet(f))for(const c of f)c&&i.add(c.type);return i}}class zs extends vn{aggregate(e,n,t,r){const i=new Set;if(!t||!r)return i;const{diffsMetaKey:o}=r,s=fe(ee(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&i.add(l.type);return i}}var $t;let $s=($t=class{static instance(e){switch(e){case D.BINDING:if(!this.instances.has(D.BINDING)){const n=new Us;this.instances.set(D.BINDING,n)}return this.instances.get(D.BINDING);case D.MESSAGE_CONTENT:if(!this.instances.has(D.MESSAGE_CONTENT)){const n=new Ws;this.instances.set(D.MESSAGE_CONTENT,n)}return this.instances.get(D.MESSAGE_CONTENT);case D.MESSAGE_CHANNEL:if(!this.instances.has(D.MESSAGE_CHANNEL)){const n=new Ys;this.instances.set(D.MESSAGE_CHANNEL,n)}return this.instances.get(D.MESSAGE_CHANNEL);case D.MESSAGE_OPERATION:if(!this.instances.has(D.MESSAGE_OPERATION)){const n=new zs;this.instances.set(D.MESSAGE_OPERATION,n)}return this.instances.get(D.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Bs;this.instances.set(null,n)}return this.instances.get(null)}}},x($t,"instances",new Map),$t);class Xs extends On{aggregate(e,n){}}class Qs extends On{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n,i=fe(ee(e,[r],t));if(!i)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},f=i[l];f&&(s=!0,this.aggregateWholeNodeDiff(f,u),o[l]=u[M])}return s?o:void 0}}class Zs extends On{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,r=fe(ee(e,[t])),i=r==null?void 0:r.headers,o=r==null?void 0:r.payload,s={};if(i){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};E(i)&&(l={...l,backgroundColor:S.Gray},u={...u,backgroundColor:S.Green}),k(i)&&(l={...l,backgroundColor:S.Red},u={...u,backgroundColor:S.Gray}),q(i)&&(l={...l,backgroundColor:S.Yellow},u={...u,backgroundColor:S.Yellow}),s.headers={data:i,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};E(o)&&(l={...l,backgroundColor:S.Gray},u={...u,backgroundColor:S.Green}),k(o)&&(l={...l,backgroundColor:S.Red},u={...u,backgroundColor:S.Gray}),q(o)&&(l={...l,backgroundColor:S.Yellow},u={...u,backgroundColor:S.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}}return s}}class el extends On{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n;if(!Array.isArray(e))return;const i=fe(ee(e,[r],t));if(!i)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const f=e[l][t];if(!f)continue;const c={},g=i[l];g&&(s=!0,this.aggregateWholeNodeDiff(g,c),o[f]=c[M])}return s?o:void 0}}class ca{static instance(e){switch(e){case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new Qs),this.instances.get(D.BINDINGS);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new el),this.instances.get(D.SERVERS);case D.MESSAGE_CONTENT:return this.instances.has(D.MESSAGE_CONTENT)||this.instances.set(D.MESSAGE_CONTENT,new Zs),this.instances.get(D.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new Xs;this.instances.set(null,n)}return this.instances.get(null)}}}x(ca,"instances",new Map);class nl extends ce{aggregate(e){const n=e[M];if(n){const c=n.data,y={type:c.type,causedAt:[]};return q(c)?(y.causedAt=c.beforeDeclarationPaths[0],{[H.TitleRow]:y,[H.BindingVersionRow]:y}):(k(c)?y.causedAt=c.beforeDeclarationPaths[0]:E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),{[H.TitleRow]:y,[H.DescriptionRow]:y,[H.SummaryRow]:y,[H.AddressRow]:y,[H.BindingVersionRow]:y,[H.ServerAddressRow]:y})}const t=e.title,r=e.description,i=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,f={};if(t){const c=t.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.TitleRow]=y}if(r){const c=r.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.DescriptionRow]=y}if(i){const c=i.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.SummaryRow]=y}if(o){const c=o.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.AddressRow]=y}if(s){const c=s.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.BindingVersionRow]=y}if(l||u){const c=l==null?void 0:l.data,g=u==null?void 0:u.data,y=ce.maxDiffByDiffType(c,g);if(y){const p={type:y.type,causedAt:[]};(k(y)||q(y))&&(p.causedAt=y.beforeDeclarationPaths[0]),E(y)&&(p.causedAt=y.afterDeclarationPaths[0]),f[H.ServerAddressRow]=p}}return Object.keys(f).length>0?f:void 0}}class ma{static instance(e){switch(e){default:return new nl}}}x(ma,"instances",new Map);class tl extends br{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const i of Object.values(e)){if(!i)continue;const o=i.data.type;r.add(o)}return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!E(n)&&!k(n)&&!q(n)&&!Xe(n))return!1;return!0}}class rl{static instance(e){switch(e){default:return new tl}}}class mn extends G{constructor(){super(...arguments);x(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,r,i,o){const{diffsMetaKey:s}=t;if(!A(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const y=o.diffs[M];if(y&&(E(y.data)||k(y.data)))return u[M]={...y,inherited:!0},u;{const p=o.descendantDiffs[r];if(p)return u[M]=p,u}}else if(i){const y=i.diffs[M];if(y&&(E(y.data)||k(y.data)))return u[M]={...y,inherited:!0},u;{const p=i.descendantDiffs[r];if(p)return u[M]=p,u}}if(!G.isDiffsRecord(l))return;const f=l.title;f&&this.aggregateTextDiff(f,"title",u);const c=l.description;c&&this.aggregateTextDiff(c,"description",u);const g=l.summary;return g&&this.aggregateTextDiff(g,"summary",u),u}aggregateTextDiff(n,t,r){let i=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;E(n)&&(i={...i,isContentVisible:!1,backgroundColor:S.Gray},o={...o,isContentVisible:!0,backgroundColor:S.Green}),k(n)&&(i={...i,isContentVisible:!0,backgroundColor:S.Red},o={...o,isContentVisible:!1,backgroundColor:S.Gray}),(Xe(n)||q(n))&&(i={...i,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},o={...o,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),r[t]={data:n,styles:{before:i,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}}}class il extends mn{aggregate(e,n,t,r,i){const{diffsMetaKey:o}=n;if(!A(e))return;let s=super.aggregate(e,n,t,r,i);if(s){const u=s[M];if(u){const{data:f,styles:c}=u;E(f)&&(c.after.borderShadowColor=S.Green),k(f)&&(c.before.borderShadowColor=S.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=ee(e,["binding"]);if(A(l)){const u=l[o];if(G.isDiffsRecord(u)){const f=u.bindingVersion;f&&this.aggregateTextDiff(f,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let r;if(E(t)&&A(t.afterValue)){const i=t.afterValue.bindingVersion;r={...t,afterValue:i},this.aggregateTextDiff(r,"version",n)}if(k(t)&&A(t.beforeValue)){const i=t.beforeValue.bindingVersion;r={...t,beforeValue:i},this.aggregateTextDiff(r,"version",n)}}}class al extends mn{aggregateByDescendantDiffs(e,n,t){var u;if(n[M])return n;if(!A(e))return;const r=Object.keys(e).length,i=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(i!==r)return n[M]=s(),n;let l=o.data.action;for(const f of Object.values(t))if(((u=f==null?void 0:f.data)==null?void 0:u.action)!==l){l=L.replace;break}return l===L.replace?(n[M]=s(),n):(n[M]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let r;const i={...n,beforeDeclarationPaths:k(n)?n.beforeDeclarationPaths:[],beforeValue:k(n)?n.beforeValue:void 0,afterDeclarationPaths:E(n)?n.afterDeclarationPaths:[],afterValue:E(n)?n.afterValue:void 0,action:L.replace};return()=>(r||(r={data:i,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:S.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}),r)}}class ol extends mn{aggregate(e,n,t,r,i){return super.aggregate(e,n,t,r,i)}aggregateByDescendantDiffs(e,n,t,r){if(n[M])return n;const i=ee(e,["rawValues"]);if(!A(i))return;const{diffsMetaKey:o}=r,s=i[o];if(!G.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[f]=Object.values(s);if(!f)return;let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},p=y;return E(f)&&(c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(f)&&(c={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},g={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),n[M]={data:f,styles:{before:c,after:g},flags:{before:y,after:p},highlightingMode:dn},n}}class sl extends mn{aggregate(e,n,t,r,i){const{diffsMetaKey:o}=n;if(!A(e))return;let s=super.aggregate(e,n,t,r,i);s||(s={});const l=e[o];if(G.isDiffsRecord(l)){const u=l[M];if(u){let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};E(u)&&(c={...c,isContentVisible:!1,backgroundColor:S.Gray},g={...g,isContentVisible:!0,backgroundColor:S.Green}),k(u)&&(c={...c,isContentVisible:!0,backgroundColor:S.Red},g={...g,isContentVisible:!1,backgroundColor:S.Gray}),s[M]={data:u,highlightingMode:xe,styles:{before:c,after:g},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const f=l.address;f&&this.aggregateTextDiff(f,"address",s)}return Object.keys(s).length>0?s:void 0}}class ll extends mn{aggregate(e,n,t,r,i){return super.aggregate(e,n,t,r,i)}aggregateByDescendantDiffs(e,n,t,r){if(n[M])return n;const i=ee(e,["rawValues","properties"]);if(!A(i))return;const{diffsMetaKey:o}=r,s=i[o];if(!G.isDiffsRecord(s))return;const l=Object.keys(i).length,u=Object.keys(s).length;if(l!==u)return;const[f]=Object.values(s);if(!f)return;let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},p=y;return E(f)&&(c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(f)&&(c={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},g={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),n[M]={data:f,styles:{before:c,after:g},flags:{before:y,after:p},highlightingMode:xe},n}}class dl extends mn{aggregate(e,n,t,r,i){const{diffsMetaKey:o}=n;if(!A(e))return;let s=super.aggregate(e,n,t,r,i);s||(s={});const l=e[o];if(G.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const f=l.protocol;f&&this.aggregateTextDiff(f,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class ul extends mn{aggregate(e,n,t,r,i){return super.aggregate(e,n,t,r,i)}aggregateByDescendantDiffs(e,n,t){if(n[M])return n;if(!Array.isArray(e))return;const r=e.length,i=Object.keys(t).length;if(r!==i)return;const[o]=Object.values(t);if(o)return n[M]=o,n}}class rr{static instance(e){switch(e){case D.BINDING:return this.instances.has(D.BINDING)||this.instances.set(D.BINDING,new il),this.instances.get(D.BINDING);case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new al),this.instances.get(D.BINDINGS);case D.EXTENSIONS:return this.instances.has(D.EXTENSIONS)||this.instances.set(D.EXTENSIONS,new ol),this.instances.get(D.EXTENSIONS);case D.MESSAGE:return this.instances.has(D.MESSAGE)||this.instances.set(D.MESSAGE,new sl),this.instances.get(D.MESSAGE);case D.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(D.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(D.MESSAGE_CHANNEL_PARAMETERS,new ll),this.instances.get(D.MESSAGE_CHANNEL_PARAMETERS);case D.SERVER:return this.instances.has(D.SERVER)||this.instances.set(D.SERVER,new dl),this.instances.get(D.SERVER);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new ul),this.instances.get(D.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new mn),this.instances.get(null)}}}x(rr,"instances",new Map);const fl="[AsyncAPI][WithDiffs]";class cl extends fa{constructor(n){super(n);x(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return fl}createTree(){return new Js}createNodeDataBuilder(){return new Gs}prepareSource(){return new Ks(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return mr(n)?n:null}createNodeFromRaw(n,t,r,i,o){const s=super.createNodeFromRaw(n,t,r,i,o);return!s||!Yr(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isAsyncApiTreeNodeKind(t))return;const i=this.takeSimpleTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return rr.instance(t).aggregate(r.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,r,i){if(this.isAsyncApiTreeNodeKind(n))return rl.instance(n).aggregate(t,r,i)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return ca.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,r,i){if(this.isAsyncApiTreeNodeKind(n)&&t)return rr.instance(n).aggregateByDescendantDiffs(t,r,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,i,o){if(this.isAsyncApiTreeNodeKind(n)&&r)return $s.instance(n).aggregate(t,r,i,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return ma.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const i=this.createNodeDiffs(n.key,t,r);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),vr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return Gi.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&Yr(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class ml extends cr{constructor(){super()}}const W={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},ya=Object.values(W),kn="unknown",yl="any",gl="nothing",X={UNKNOWN:kn,ANY:yl,NOTHING:gl,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},pl=Object.values(X);function hl(a){return!a||!ds(a)?!1:pl.some(e=>e===a)}function bl(a){return A(a)&&mt in a}function Jt(a,e){const n=a[e];return be(n)&&n.length>0}function An(a){return typeof a=="boolean"}function cn(a){return a==null||typeof a=="boolean"?null:a}const vl=[X.STRING,X.NUMBER,X.INTEGER,X.BOOLEAN];function ir(a){return!!a&&vl.includes(a)}const Dl=[X.ANY,X.NOTHING];function Sl(a){return!!a&&Dl.includes(a)}function yt(a){return!A(a)||be(a)?!1:Jt(a,"allOf")||Jt(a,"oneOf")||Jt(a,"anyOf")}function Wr(a){return A(a)&&Reflect.ownKeys(a).length>0}function Ft(a){return be(a)&&a.length>0}function ga(a,e){if(!A(a)&&!be(a))return!1;if(be(a))return a.length>0;const n=a;if(Ft(n[Xt])||Ft(n[Qt])||Ft(n[Zt])||Wr(n[ci])||Wr(n[mi]))return!0;const t=n[yi];if(t!==void 0&&t!==!1||n[gi]!==void 0)return!0;const r=n[pi];return r!==void 0&&r!==!1}const je={root:W.ROOT,definition:W.DEFINITION,property:W.PROPERTY,additionalProperties:W.ADDITIONAL_PROPERTIES,patternProperty:W.PATTERN_PROPERTY,items:W.ITEMS,item:W.ITEM,additionalItems:W.ADDITIONAL_ITEMS,allOf:W.ALL_OF,anyOf:W.ANY_OF,oneOf:W.ONE_OF},wl=(a,e)=>{if(!A(e)||be(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},Nl="x-";function gt(a){return a===void 0||typeof a=="symbol"?!1:(typeof a=="string"?a:`${a}`).startsWith(Nl)}function kl(a,e){if(!A(e)||be(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>gt(s));if(t.length===0)return e;const r=new Set(t),i=t.reduce((s,l)=>(gt(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&r.has(s)||(o[s]=e[s]);return o.extensions=i,o}const El=[wl,kl];function Je(a=je.root){return{"/allOf":{"/*":()=>Je(je.allOf)},"/oneOf":{"/*":()=>Je(je.oneOf)},"/anyOf":{"/*":()=>Je(je.anyOf)},"/properties":{"/*":()=>Je(je.property)},"/items":()=>({...Je(je.items),"/*":({key:e})=>us(e)?Je(je.item):{}}),"/additionalProperties":()=>Je(je.additionalProperties),"/additionalItems":()=>Je(je.additionalItems),"/patternProperties":{"/*":()=>Je(je.patternProperty)},kind:a,transformers:El}}const Al=new Set([W.ALL_OF,W.ANY_OF,W.ONE_OF]);class Tl{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,r=n.length>0,i=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:r,isExpandable:i,initiallyExpanded:i&&!e.isCycle}}isCombinerKind(e){return Al.has(e)}}const pa=new Tl;function Vl(a){return pa.resolveNodeVisibility(a)}function ha(a){return pa.isCombinerKind(a)}function xl(a){return vt(a)}const Cl={type:X.ANY};function Rl(a,e){if(An(e)){if(e===!1)return!1;if(e===!0&&a===W.ADDITIONAL_PROPERTIES)return Cl}}function Ml(a,e){if(!e||typeof a=="number"||!a)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(a))}function De(a){return"diffs"in a&&"diffsSummary"in a&&"descendantDiffs"in a&&"descendantDiffsSummary"in a&&"diffsSeverities"in a}const _l="extensions",ql="customAnnotations",ge=class ge extends Dt{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case X.UNKNOWN:case X.ANY:case X.NOTHING:case X.NULL:case X.BOOLEAN:return ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case X.STRING:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,nr,Ii,Li,ji];case X.NUMBER:case X.INTEGER:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,nr,_i,qi,Hi,Oi,Pi];case X.OBJECT:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,xi,Ci,Ri,Mi];case X.ARRAY:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ai,Ti,Vi];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,r=!1){const i=Ml(n,t),o=bl(e)?{brokenRef:String(e.$ref)}:{};return!yt(e)&&A(e)?{...this.pick(e,ge.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:i,...o,_fragment:e,isCycle:r}:{required:i,...o,_fragment:e,isCycle:r}}createNodeValue(e,n,t,r){if(t==null)return null;const i=Rl(e,t);if(i!==void 0)return i;if(An(t))return t;if(!A(t)||yt(t))return null;const o=hl(t.type)?t.type:X.UNKNOWN;return o===X.UNKNOWN||o===X.ANY||o===X.NOTHING||o===X.NULL||o===X.BOOLEAN?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===X.STRING?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===X.NUMBER||o===X.INTEGER?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===X.OBJECT?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===X.ARRAY?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};x(ge,"JSON_SCHEMA_TREE_NODE_META_PROPS",[hi,bi,vi,Jo]),x(ge,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[er,Di,Si,wi,Ni,ki,Ei,_l,ql]);let pt=ge;const Hl="[JSON Schema]";class ba extends St{constructor(n){const{source:t,materializeDepth:r,logger:i=Ue()}=n;super();x(this,"tree");x(this,"source");x(this,"materializeDepth");x(this,"logger");x(this,"nodeDataBuilder");x(this,"lazyState",new Bi);x(this,"crawlHooks",null);this.source=t,this.materializeDepth=r,this.logger=i,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!A(n))return this.tree;const t={parent:null,container:null,ancestors:new wt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},r=Je();return this.crawlHooks=xl({source:n,tree:this.tree,supportedNodeKinds:ya,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o,s,l)=>({value:An(i)||A(i)&&!Array.isArray(i)?i:null,newDataLevel:!ha(l),parent:o,container:s}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,depth:i.depth,materializeDepth:i.materializeDepth,pathPrefix:i.pathPrefix}),isSimpleNode:i=>this.isSimpleTreeNode(i),isComplexNode:i=>this.isComplexTreeNode(i),resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i==null,shouldSkipNodeCreation:i=>be(i),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:ga}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),En(n,this.crawlHooks,{state:t,rules:r}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const i={parent:n,container:null,ancestors:Ui(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};En(r.fragment,this.crawlHooks,{state:i,rules:r.rules},!0)}get logPrefix(){return Hl}createTree(){return new ml}createNodeDataBuilder(){return new pt((n,t)=>this.pick(n,t))}prepareSource(){return A(this.source)?this.source:null}createNodeFromRaw(n,t,r,i,o){const{parent:s,container:l,newDataLevel:u,value:f}=o;if(i||A(f)&&yt(f)){const h=this.createNodeMeta(t,o),b={type:de.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,b)}const g=this.createNodeValue(t,r,o),y=this.createNodeMeta(t,o),p={type:de.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:g,meta:y,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,p)}createNodeMeta(n,t){const{value:r,parent:i}=t;return this.nodeDataBuilder.buildNodeMeta(r,n,i,!1)}createNodeValue(n,t,r){const{value:i}=r;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===de.SIMPLE}isComplexTreeNode(n){return n.type===de.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Ol extends hr{constructor(){super()}}class Pl{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!A(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return fr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class Il extends pt{constructor(e){super(e)}}class Ll extends vn{aggregate(e,n,t,r){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!E(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class va{static instance(e){return this.kindAnyInstance}}x(va,"kindAnyInstance",new Ll);const jl=["properties","patternProperties","allOf","anyOf","oneOf","items"],Jl=new Set(["properties","patternProperties"]);class Fl extends On{constructor(){super(...arguments);x(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});x(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!A(n))return;const{diffsMetaKey:r}=t,i={};for(const o of this.resolveDescendantDiffsRecords(n,r))for(const[s,l]of Object.entries(o))!l||s===M||!G.isDiff(l)||(i[s]=this.buildDescendantDiffMetadata(l));return Object.keys(i).length>0?i:void 0}resolveDescendantDiffsRecords(n,t){const r=[],i=fe(Reflect.get(n,t));i&&r.push(i);for(const o of jl){const s=Reflect.get(n,o);if(!A(s)&&!be(s))continue;const l=fe(Reflect.get(s,t));if(l){r.push(l);continue}const u=i==null?void 0:i[o];if(u&&(E(u)||k(u))&&(Jl.has(o)?A(s):be(s))){const g=this.decomposeWholeChildBagDiff(s,u);g&&r.push(g)}}return r}decomposeWholeChildBagDiff(n,t){const r=be(n)?n.map((o,s)=>String(s)):Object.keys(n);if(r.length===0)return;const i={};for(const o of r)i[o]=this.buildDecomposedChildBagEntryDiff(t);return i}buildDecomposedChildBagEntryDiff(n){return E(n)?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES,i=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=xe;return E(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},i={...i,increaseLevel:!1},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Green,borderShadowColor:S.Green},o={...o,increaseLevel:!0}),k(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Red,borderShadowColor:S.Red},i={...i,increaseLevel:!0},r={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},o={...o,increaseLevel:!1}),q(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:i,after:o},highlightingMode:s}}}class Da{static instance(e){return this.kindAnyInstance}}x(Da,"kindAnyInstance",new Fl);const un="titleRow",Sa=["type","format","title","nullable"],Kn=["readOnly","writeOnly","deprecated"];class Kl extends ce{aggregate(e){const n=e[M],t={};return n?(t[H.TitleRow]=this.buildNodeDiffsSeverity(n),t[H.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[H.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n),t[H.ExtensionsRow]=this.buildNodeDiffsSeverity(n),t[H.CustomAnnotationRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",H.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",H.NestingIndicatorRow,t),this.applyRowSeverity(e,"extensionsRowColorizingDiff",H.ExtensionsRow,t),this.applyCustomAnnotationsRowSeverity(e,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var r,i,o;const t=e;for(const s of Object.values(qe)){const l=ce.maxChangedPropertyMetaDataByDiffType((r=t.validationRowDiffs)==null?void 0:r[s],(i=t.validationRowColorizingDiffs)==null?void 0:i[s],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[s])??{}));l&&(n[Yi[s]]=this.buildNodeDiffsSeverity(l))}}applyCustomAnnotationsRowSeverity(e,n){const t=e,r=ce.maxChangedPropertyMetaDataByDiffType(...Object.values(t.customAnnotationDiffs??{}),...Object.values(t.customAnnotationRowColorizingDiffs??{}));r&&(n[H.CustomAnnotationRow]=this.buildNodeDiffsSeverity(r))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,r=[t[un],...Object.values(t.typeLabelFieldDiffs??{})],i=ce.maxChangedPropertyMetaDataByDiffType(...r);i&&(n[H.TitleRow]=this.buildNodeDiffsSeverity(i))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||q(n)?t.causedAt=n.beforeDeclarationPaths[0]:E(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,r){const i=e[n];i&&(r[t]=this.buildNodeDiffsSeverity(i))}}class Gl extends Kl{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,r=ce.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);r&&(n[H.DefaultRow]=this.buildNodeDiffsSeverity(r))}applyEnumRowSeverity(e,n){const t=e,r=ce.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));r&&(n[H.EnumRow]=this.buildNodeDiffsSeverity(r))}applyExamplesRowSeverity(e,n){const t=e,r=ce.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));r&&(n[H.ExamplesRow]=this.buildNodeDiffsSeverity(r))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,r=ce.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));r&&(n[H.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(r))}}class wa{static instance(e){return this.kindPropertyInstance}}x(wa,"kindPropertyInstance",new Gl);function Kt(a,e){for(const n of Object.values(e??{}))yr(n)&&a.add(n.data.type)}class Bl extends br{aggregate(e,n,t){const r=new Set;if(!e)return r;const i=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){Kt(r,i[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){Kt(r,i[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(i.validationRowValueDiffs??{}))Kt(r,l);continue}yr(s)&&r.add(s.data.type)}return r}}class Na{static instance(e){return this.kindAnyInstance}}x(Na,"kindAnyInstance",new Bl);const Ke={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function ka(a){return typeof a.exclusiveMin=="number"||typeof a.exclusiveMax=="number"?Ke.OAS_3_1_NUMERIC_EXCLUSIVE:Ke.OAS_3_0_BOOLEAN_EXCLUSIVE}function Ul(a){return a.dialect??ka(a)}const Yl="?",ye="{value}",ze="{exclusive_value}",sn=">",ot=">=",ln="<",st="<=",ke=1,Ee=2,Ae=4,Te=8,zr={0:{lower:void 0,upper:void 0},[ke]:{lower:`${ot} ${ye}`,upper:void 0},[Ee]:{lower:`${sn} ${ze}`,upper:void 0},[Ae]:{lower:void 0,upper:`${st} ${ye}`},[Te]:{lower:void 0,upper:`${ln} ${ze}`},[Ee|ke]:{lower:`${sn} ${ye}`,upper:void 0},[Ee|Ae]:{lower:`${sn} ${ze}`,upper:`${st} ${ye}`},[Ee|Te]:{lower:`${sn} ${ze}`,upper:`${ln} ${ze}`},[Te|ke]:{lower:`${ot} ${ye}`,upper:`${ln} ${ze}`},[Te|Ae]:{lower:void 0,upper:`${ln} ${ye}`},[Ae|ke]:{lower:`${ot} ${ye}`,upper:`${st} ${ye}`},[Ee|ke|Ae]:{lower:`${sn} ${ye}`,upper:`${st} ${ye}`},[Ee|ke|Te]:{lower:`${sn} ${ye}`,upper:`${ln} ${ze}`},[Ee|Ae|Te]:{lower:`${sn} ${ze}`,upper:`${ln} ${ye}`},[Te|ke|Ae]:{lower:`${ot} ${ye}`,upper:`${ln} ${ye}`},[ke|Ee|Ae|Te]:{lower:`${sn} ${ye}`,upper:`${ln} ${ye}`}};function ar(a){return a!=null}function $r(a){return a!==void 0&&a!==!1}function Wl(a,e,n){return(a&(ke|Ee))!==(ke|Ee)||n===void 0||typeof e!="number"?a:n>=e?a&~ke:a&~Ee}function zl(a,e,n){return(a&(Ae|Te))!==(Ae|Te)||n===void 0||typeof e!="number"?a:n<=e?a&~Ae:a&~Te}function Xr(a,e,n){return a.replace(ye,`${e}`).replace(ze,ar(n)?`${n}`:Yl)}function $l(a,e){return ar(a)||ar(e)}function Xl(a){const{min:e,max:n,exclusiveMin:t,exclusiveMax:r}=a;let i=0;return e!==void 0&&(i|=ke),$r(t)&&(i|=Ee),n!==void 0&&(i|=Ae),$r(r)&&(i|=Te),i}function Ea(a,e){let n=a;return typeof e.exclusiveMin!="number"&&!(n&ke)&&(n&=~Ee),typeof e.exclusiveMax!="number"&&!(n&Ae)&&(n&=~Te),n}function Ql(a,e){return Ea(a,e)}function Zl(a,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let r=Wl(a,e.min,n);return r=zl(r,e.max,t),r}const ed={[Ke.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Ea},[Ke.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:Ql}};function nd(a,e){const n=ed[e];let t=Xl(a);return t=n.applyExclusiveSuppression(t,a),Zl(t,a)}function Ge(a){const e={data:{},visible:!1},n=Ul(a),t=typeof a.exclusiveMin=="number"?a.exclusiveMin:void 0,r=typeof a.exclusiveMax=="number"?a.exclusiveMax:void 0,i=nd(a,n),o=i in zr?{...zr[i]}:void 0;return o!=null&&o.lower&&(e.data.lower=Xr(o.lower,a.min,t)),o!=null&&o.upper&&(e.data.upper=Xr(o.upper,a.max,r)),e.visible=$l(e.data.lower,e.data.upper),e}const Gn="0",dt="1";class yn{static isDefined(e){return e!=null}static isExclusiveActive(e){return e!==void 0&&e!==!1}static isExclusiveDiffValueActive(e){return e!==void 0&&e!==!1}static diffAdd(e){return!!e&&E(e)}static diffRemove(e){return!!e&&k(e)}static diffReplace(e){return!!e&&q(e)}static readDiffAfterValue(e){if(e&&(E(e)||q(e)))return e.afterValue}static readNumericDiffBeforeValue(e){if(!e||!(k(e)||q(e)))return;const n=e.beforeValue;return typeof n=="number"?n:void 0}static readExclusiveDiffBeforeValue(e){if(!e||!(k(e)||q(e)))return;const n=e.beforeValue;if(typeof n=="number"||typeof n=="boolean")return n}static resolveBeforeAfterLabels(e,n){const t=e.minimum,r=e.exclusiveMinimum,i=e.maximum,o=e.exclusiveMaximum,s=n.minimum,l=n.exclusiveMinimum,u=n.maximum,f=n.exclusiveMaximum,c=this.isDefined(t),g=this.isDefined(i),y=this.isDefined(s),p=this.isDefined(u),h=this.isDefined(l),b=this.isDefined(f),w=this.diffAdd(s),N=this.diffRemove(s),V=this.diffReplace(s),v=this.diffAdd(u),T=this.diffRemove(u),j=this.diffReplace(u),_=Ge({min:c&&(!y||w||V)?t:void 0,max:g&&(!p||v||j)?i:void 0,exclusiveMin:this.isExclusiveActive(r)&&(!h||this.diffAdd(l)||this.diffReplace(l)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(l)))?r:void 0,exclusiveMax:this.isExclusiveActive(o)&&(!b||this.diffAdd(f)||this.diffReplace(f)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(f)))?o:void 0}).data;if(!(y||h||p||b))return{before:{..._},after:_};let O,P,Y,ue;if(c&&!y&&(O=t),(N||V)&&(O=this.readNumericDiffBeforeValue(s)),g&&!p&&(P=i),(T||j)&&(P=this.readNumericDiffBeforeValue(u)),this.isExclusiveActive(r)&&!h&&(Y=r),this.diffReplace(l)||this.diffRemove(l)){const se=this.readExclusiveDiffBeforeValue(l);this.isExclusiveDiffValueActive(se)&&(Y=se)}if(this.isExclusiveActive(o)&&!b&&(ue=o),this.diffReplace(f)||this.diffRemove(f)){const se=this.readExclusiveDiffBeforeValue(f);this.isExclusiveDiffValueActive(se)&&(ue=se)}return{before:Ge({min:O,max:P,exclusiveMin:Y,exclusiveMax:ue}).data,after:_}}static chipTextsFromLabels(e){return[e.lower,e.upper].filter(n=>!!n)}static resolveSlotValueDiffKey(e,n){if(!n)return;const t=e==="lower"?Gn:dt;if(n[t])return t;if(e==="lower")return n.minimum?"minimum":n.exclusiveMinimum?"exclusiveMinimum":void 0;if(n.maximum)return"maximum";if(n.exclusiveMaximum)return"exclusiveMaximum"}static resolveChipDiffType(...e){for(const n of e)if(n)return n.type}static compareValueRangeChipStrings(e,n,t){if(!(e===void 0||n===t))return n===void 0&&t!==void 0?{type:e,action:L.add,afterValue:t}:n!==void 0&&t===void 0?{type:e,action:L.remove,beforeValue:n}:{type:e,action:L.replace,beforeValue:n,afterValue:t}}static classifyValueRangeWholeRowAction(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),i=!!(t.lower||t.upper),o=!!(r.lower||r.upper);if(!i&&o)return L.add;if(i&&!o)return L.remove}static buildValueRangeChipStringDiffs(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),i=this.resolveChipDiffType(n.minimum,n.exclusiveMinimum),o=this.resolveChipDiffType(n.maximum,n.exclusiveMaximum),s={},l=this.compareValueRangeChipStrings(i,t.lower,r.lower);l&&(s[Gn]=l);const u=this.compareValueRangeChipStrings(o,t.upper,r.upper);return u&&(s[dt]=u),s}static collectChangedValueRangeChipDiffs(e,n){const t=this.buildValueRangeChipStringDiffs(e,n);return[t[Gn],t[dt]].filter(r=>r!==void 0)}static inferValueRangeBoundRangeDialect(e,n){const t={min:e.min??e.minimum,max:e.max??e.maximum,exclusiveMin:e.exclusiveMin??e.exclusiveMinimum,exclusiveMax:e.exclusiveMax??e.exclusiveMaximum};if(ka(t)===Ke.OAS_3_1_NUMERIC_EXCLUSIVE)return Ke.OAS_3_1_NUMERIC_EXCLUSIVE;for(const r of["exclusiveMinimum","exclusiveMaximum"]){const i=n[r];if(i&&(E(i)&&typeof i.afterValue=="number"||k(i)&&typeof i.beforeValue=="number"||q(i)&&(typeof i.beforeValue=="number"||typeof i.afterValue=="number")))return Ke.OAS_3_1_NUMERIC_EXCLUSIVE}return Ke.OAS_3_0_BOOLEAN_EXCLUSIVE}static isValueRangePartialSingleChipChange(e,n){if(this.classifyValueRangeWholeRowAction(e,n)!==void 0)return!1;const t=this.collectChangedValueRangeChipDiffs(e,n);if(t.length!==1)return!1;const r=t[0];return E(r)||k(r)}static isValueRangePartialBoundChange(e,n){return this.isValueRangePartialSingleChipChange(e,n)}static buildSideEntriesFromLabels(e,n,t){const r=[],i=[{slot:"lower",text:e.lower,oppositeText:t.lower},{slot:"upper",text:e.upper,oppositeText:t.upper}];for(const{slot:o,text:s,oppositeText:l}of i){if(!s)continue;const u=s!==l?this.resolveSlotValueDiffKey(o,n):void 0;r.push({text:s,valueDiffKey:u})}return r}static resolveValueRangeDiffSideEntries(e,n,t,r,i){const{before:o,after:s}=this.resolveBeforeAfterLabels(e,n),l=t===$;if(r){const c=r.data;if(E(c)||k(c)){const g=l?o:s,y=l?s:o;return this.buildSideEntriesFromLabels(g,i,y)}}const u=l?o:s,f=l?s:o;return this.buildSideEntriesFromLabels(u,i,f)}static extractValueRangeCrawlDiffs(e,n){const t=Reflect.get(e,n);return!t||typeof t!="object"?{}:{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}}static isBooleanExclusiveBoundFlagDiff(e,n){return e!=="exclusiveMinimum"&&e!=="exclusiveMaximum"?!1:typeof(E(n)?n.afterValue:k(n)?n.beforeValue:q(n)?n.beforeValue??n.afterValue:void 0)=="boolean"}static filterValueRangeSemanticSourceKeys(e,n){return e.filter(t=>{const r=n[t];return r?t==="exclusiveMinimum"||t==="exclusiveMaximum"?!this.isBooleanExclusiveBoundFlagDiff(t,r):!0:!1})}static isExclusiveBoundValue(e){return typeof e=="number"||typeof e=="boolean"}static readValueRangeBoundFields(e){if(!A(e))return{};const n={};return typeof e.minimum=="number"&&(n.minimum=e.minimum),typeof e.maximum=="number"&&(n.maximum=e.maximum),this.isExclusiveBoundValue(e.exclusiveMinimum)&&(n.exclusiveMinimum=e.exclusiveMinimum),this.isExclusiveBoundValue(e.exclusiveMaximum)&&(n.exclusiveMaximum=e.exclusiveMaximum),n}static resolveValueRangeSideInputFromNodeValue(e){const n=this.readValueRangeBoundFields(e);return{...n,min:n.minimum,max:n.maximum,exclusiveMin:n.exclusiveMinimum,exclusiveMax:n.exclusiveMaximum}}static resolveValueRangeBeforeAfterLabelsForTest(e,n){return this.resolveBeforeAfterLabels(e,n)}static resolveValueRangeChipTextsForTest(e,n,t){const{before:r,after:i}=this.resolveBeforeAfterLabels(e,n);return this.chipTextsFromLabels(t===$?r:i)}}function We(a){return typeof a=="string"?a:JSON.stringify(a)}function Aa(a,e,n){switch(a){case qe.VALUE_LENGTH:case qe.PROPERTIES_COUNT:case qe.ITEMS_COUNT:{if(e.startsWith("min"))return Ge({min:Number(n)}).data.lower??We(n);if(e.startsWith("max"))return Ge({max:Number(n)}).data.upper??We(n);break}case qe.VALUE_RANGE:{if(e==="minimum")return Ge({min:Number(n)}).data.lower??We(n);if(e==="maximum")return Ge({max:Number(n)}).data.upper??We(n);if(e==="exclusiveMinimum")return Ge({exclusiveMin:typeof n=="number"?n:!0}).data.lower??We(n);if(e==="exclusiveMaximum")return Ge({exclusiveMax:typeof n=="number"?n:!0}).data.upper??We(n);break}case qe.VALUE_PATTERN:case qe.VALUE_MULTIPLE_OF:case qe.UNIQUE_ITEMS:return We(n);default:return We(n)}return We(n)}function td(a){return a.startsWith("min")||a==="exclusiveMinimum"}function rd(a){return a.startsWith("max")||a==="exclusiveMaximum"}function Qr(a,e){return e.length<=1||td(a)?0:rd(a)?1:0}class id extends G{constructor(){super(...arguments);x(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});x(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}});x(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}})}aggregate(n,t,r,i,o){const{diffsMetaKey:s}=t,l={};if(o){const c=o.diffs[M];if(c&&(E(c.data)||k(c.data)))return l[M]={...c,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l;const g=o.descendantDiffs[r];if(g)return l[M]=g,this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l}else if(i){const c=i.diffs[M];if(c&&(E(c.data)||k(c.data)))return l[M]={...c,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l;const g=i.descendantDiffs[r];if(g)return l[M]=g,this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l}if(!A(n)&&!Array.isArray(n))return;const u=n[s],f=G.isDiffsRecord(u)?u:void 0;if(f){const c=f[M];c&&this.aggregateTextDiff(c,M,l);const g=f.title,y=f.format,p=f.type,h=this.normalizeNullableDiff(f.nullable);this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:g,nullable:h},l);const b=f.description;if(b&&this.aggregateTextDiff(b,"description",l),!this.hasWholeNodeAddOrRemoveDiff(l))for(const N of Kn){const V=f[N];G.isDiff(V)&&this.aggregateMetaFlagDiff(V,N,l)}A(n)&&this.aggregateValidationRowDiffs(n,f,l),this.aggregateExtensionsDiffs(f,l)}return this.aggregateCustomAnnotationsDiffs(n,f??{},s,l),this.stripMetaFlagDiffsWhenWholeNode(l),this.aggregateTitleRowDiff(l),Object.keys(l).length>0?l:void 0}aggregateByDescendantDiffs(n,t,r,i){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,r),this.aggregateExtensionsUniformRowColorizingDiff(n,t),this.aggregateNodeChangesSummary(n,t,i),t}aggregateNodeChangesSummary(n,t,r){const i=new Set;for(const u of Object.values(t.typeLabelFieldDiffs??{}))u!=null&&u.data&&i.add(u.data);const o=A(n)?n[r.diffsMetaKey]:void 0,s=G.isDiffsRecord(o)?o.nullable:void 0;G.isDiff(s)&&i.add(s);const l=new Set;for(const u of Ns(n,r))i.has(u)||u!=null&&u.type&&l.add(u.type);l.size>0&&(t.nodeChangesSummary=l)}aggregateNestingIndicatorRowColorizingDiff(n,t,r){const i=t[M];if(i&&(E(i.data)||k(i.data))){const y=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(i));t.nestingIndicatorRowColorizingDiff=y,t.extensionsRowColorizingDiff=y;return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const y=ce.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(y){const p=this.resolveTypePrimitivenessCrossing(o),h=p&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,p):this.asReplaceRowColorizingDiff(y);t.nestingIndicatorRowColorizingDiff={...h,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!A(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(y=>r[y]);if(l.some(y=>!y))return;const[u,...f]=l;if(!E(u.data)&&!k(u.data))return;const c=u.data.action;f.every(y=>y.data.action===c&&(E(y.data)||k(y.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}aggregateExtensionsUniformRowColorizingDiff(n,t){if(t.extensionsRowColorizingDiff)return;const r=Object.values(t.extensionsDiffs??{});if(r.length===0)return;const i=A(n)?Reflect.get(n,"extensions"):void 0,o=A(i)?Object.keys(i).length:0;if(r.length!==o)return;const[s,...l]=r;if(!E(s)&&!k(s))return;const u=s.action;l.every(c=>c.action===u&&(E(c)||k(c)))&&(t.extensionsRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(s)))}withNestingLevelFlags(n){const{data:t}=n;return E(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:k(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return ir(n)||Sl(n)}resolveTypePrimitivenessCrossing(n){var l;const t=(l=n.type)==null?void 0:l.data;if(!t||!q(t))return;const r=typeof t.beforeValue=="string"?t.beforeValue:void 0,i=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(r),s=this.isChildlessTypeValue(i);if(o!==s)return{beforeIsPrimitive:o,afterIsPrimitive:s}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:r}=n;return q(r)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:r.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:L.add,afterValue:!0,afterDeclarationPaths:r.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],r=Reflect.get(n,"properties");A(r)&&t.push(...Object.keys(r));const i=Reflect.get(n,"patternProperties");A(i)&&t.push(...Object.keys(i));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,f)=>t.push(String(f))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(this.normalizeBooleanFlagDiffReplace(n))}normalizeNullableDiff(n){if(G.isDiff(n)&&!(E(n)&&n.afterValue!==!0)&&!(k(n)&&n.beforeValue!==!0)&&!(q(n)&&!!n.beforeValue==!!n.afterValue))return this.normalizeBooleanFlagDiffReplace(n)}normalizeBooleanFlagDiffReplace(n){return!q(n)||typeof n.afterValue!="boolean"?n:n.afterValue?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}}aggregateTypeLabelFieldDiffs(n,t){const r={};for(const i of Sa){const o=n[i];G.isDiff(o)&&(r[i]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(r).length>0&&(t.typeLabelFieldDiffs=r)}aggregateTitleRowDiff(n){const t=n[M];if(t&&(E(t.data)||k(t.data))){n[un]=t;return}for(const r of Kn){const i=n[r];if(i){n[un]=this.asReplaceFlagDiffForTitleRow(i);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const r=ce.maxChangedPropertyMetaDataByDiffType(...Object.values(t));r&&(n[un]=this.asReplaceRowColorizingDiff(r))}buildTypeLabelFieldDiffMetadata(n){return q(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:S.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:S.Green},removeBefore:{textHighlighterColor:S.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES;return E(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},r={...r,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},r={...r,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),(Xe(n)||q(n))&&(t={...t,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},r={...r,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}}asReplaceRowColorizingDiff(n){const{data:t}=n;return q(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return E(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}:k(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const r=this.buildChangedPropertyMetaDataFromDiff(n);return{...r,styles:{before:{...r.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...r.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),r=typeof n.beforeValue=="boolean",i=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:r?void 0:S.Yellow,borderShadowColor:r?S.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:i?void 0:S.Yellow,borderShadowColor:i?S.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return E(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:L.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[M];return!!t&&(E(t.data)||k(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Kn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return q(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:L.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:L.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const r=t[M];if(!(!r||!(E(r.data)||k(r.data)))&&A(n))for(const[i,o]of Object.entries(tr)){const s=i;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(r)))}}aggregateWholeNodeInheritedExtensionsDiffs(n,t){const r=t[M];if(!r||!(E(r.data)||k(r.data))||!A(n))return;const i=Reflect.get(n,"extensions");if(!A(i))return;const o=Object.keys(i).filter(gt);if(o.length===0)return;const{data:s}=r,l=i,u={};if(E(s))for(const f of o)u[f]={type:s.type,scope:s.scope,description:s.description,action:L.add,afterValue:l[f],afterDeclarationPaths:s.afterDeclarationPaths??[]};else if(k(s))for(const f of o)u[f]={type:s.type,scope:s.scope,description:s.description,action:L.remove,beforeValue:l[f],beforeDeclarationPaths:s.beforeDeclarationPaths??[]};t.extensionsDiffs=u}aggregateExtensionsDiffs(n,t){const r={};for(const[i,o]of Object.entries(n))!gt(i)||!G.isDiff(o)||(r[i]=o);Object.keys(r).length>0&&(t.extensionsDiffs=r)}aggregateCustomAnnotationsDiffs(n,t,r,i){const o={},s={},l=(y,p)=>{if(q(p)){const b=this.buildBooleanAwareChipReplaceDiffMetadata(p);o[y]=b,s[y]=this.asReplaceRowColorizingDiff(b);return}const h=this.buildChangedPropertyMetaDataFromDiff(p);o[y]=h,s[y]=h},u=t.customAnnotations;if(G.isDiff(u)){const{type:y,scope:p,description:h}=u;if(E(u)&&A(u.afterValue))for(const[b,w]of Object.entries(u.afterValue))l(b,{type:y,scope:p,description:h,action:L.add,afterValue:w==null?void 0:w.value,afterDeclarationPaths:u.afterDeclarationPaths??[]});else if(k(u)&&A(u.beforeValue))for(const[b,w]of Object.entries(u.beforeValue))l(b,{type:y,scope:p,description:h,action:L.remove,beforeValue:w==null?void 0:w.value,beforeDeclarationPaths:u.beforeDeclarationPaths??[]});this.assignCustomAnnotationDiffs(i,o,s);return}if(!A(n))return;const f=Reflect.get(n,"customAnnotations");if(!A(f))return;const c=Reflect.get(f,r),g=G.isDiffsRecord(c)?c:{};for(const y of Object.keys(f)){const p=g[y];if(G.isDiff(p)){l(y,p);continue}const h=Reflect.get(f,y);if(!A(h))continue;const b=Reflect.get(h,r),w=G.isDiffsRecord(b)?b.value:void 0;G.isDiff(w)&&l(y,w)}this.assignCustomAnnotationDiffs(i,o,s)}assignCustomAnnotationDiffs(n,t,r){Object.keys(t).length>0&&(n.customAnnotationDiffs=t),Object.keys(r).length>0&&(n.customAnnotationRowColorizingDiffs=r)}aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,t){var f,c;const r=t[M];if(!r||!(E(r.data)||k(r.data))||!A(n))return;const i=Reflect.get(n,"customAnnotations");if(!A(i))return;const o=Object.keys(i);if(o.length===0)return;const{data:s}=r,l=i,u={};if(E(s))for(const g of o)u[g]=this.buildChangedPropertyMetaDataFromDiff({type:s.type,scope:s.scope,description:s.description,action:L.add,afterValue:(f=l[g])==null?void 0:f.value,afterDeclarationPaths:s.afterDeclarationPaths??[]});else if(k(s))for(const g of o)u[g]=this.buildChangedPropertyMetaDataFromDiff({type:s.type,scope:s.scope,description:s.description,action:L.remove,beforeValue:(c=l[g])==null?void 0:c.value,beforeDeclarationPaths:s.beforeDeclarationPaths??[]});Object.keys(u).length>0&&(t.customAnnotationDiffs=u,t.customAnnotationRowColorizingDiffs=u)}aggregateValidationRowDiffs(n,t,r){for(const[i,o]of Object.entries(tr)){const s=o.filter(v=>t[v]);if(s.length===0)continue;const l=i,u=l===qe.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(r.valueRangeCrawlDiffs=u);const f=l===qe.VALUE_RANGE?yn.filterValueRangeSemanticSourceKeys(s,t):s,c=s.map(v=>t[v]).filter(v=>G.isDiff(v));if(c.length===0)continue;r.validationRowColorizingDiffs??(r.validationRowColorizingDiffs={});const g=yn.resolveValueRangeSideInputFromNodeValue(n),y=u?yn.classifyValueRangeWholeRowAction(g,u):void 0;if(u&&(y===L.add||y===L.remove)){const v=y===L.add?this.mergeDiffActionFragment(c,L.add,this.resolveWholeRowDisplayValues(l,s,c,L.add)):this.mergeDiffActionFragment(c,L.remove,this.resolveWholeRowDisplayValues(l,s,c,L.remove)),T=this.buildChangedPropertyMetaDataFromDiff(v);r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=T,r.validationRowColorizingDiffs[l]=T;continue}if(u&&yn.isValueRangePartialBoundChange(g,u)){this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l);continue}const p=o.some(v=>!s.includes(v)&&Reflect.get(n,v)!==void 0),h=!p&&c.every(E),b=!p&&c.every(k);if(h){const v=this.resolveWholeRowDisplayValues(l,s,c,L.add),T=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(c,L.add,v));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=T,r.validationRowColorizingDiffs[l]=T;continue}if(b){const v=this.resolveWholeRowDisplayValues(l,s,c,L.remove),T=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(c,L.remove,v));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=T,r.validationRowColorizingDiffs[l]=T;continue}if(f.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l));continue}const w=f.map(v=>t[v]).filter(v=>G.isDiff(v)).map(v=>this.buildChangedPropertyMetaDataFromDiff(v)),N=ce.maxChangedPropertyMetaDataByDiffType(...w);if(!N)continue;const V=this.buildValidationRowValueDiffs(l,f,t);r.validationRowValueDiffs??(r.validationRowValueDiffs={}),r.validationRowValueDiffs[l]=V,r.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(N),u&&this.mergeValueRangeLabelChipDiffs(n,u,r,l)}}mergeValueRangeLabelChipDiffs(n,t,r,i){const o=yn.buildValueRangeChipStringDiffs(yn.resolveValueRangeSideInputFromNodeValue(n),t),s=[Gn,dt];if(!s.some(c=>o[c]))return;r.validationRowValueDiffs??(r.validationRowValueDiffs={});const f={...r.validationRowValueDiffs[i]??{}};for(const c of s){const g=o[c];if(!g||f[c])continue;const y=c===Gn?"lower":"upper",p=this.attachValueRangeChipDiffPaths(g,y,t);f[c]=this.buildValueRangeLabelChipDiffMetadata(p)}r.validationRowValueDiffs[i]=f}applyValueRangeFormattingRowColorizingDiff(n,t,r,i){var f;const o=(f=r.validationRowValueDiffs)==null?void 0:f[i];if(!o||!Object.values(o).some(c=>c!==void 0))return;const s=n.map(c=>t[c]).filter(c=>G.isDiff(c));if(s.length===0)return;const l=s.map(c=>this.buildChangedPropertyMetaDataFromDiff(c)),u=ce.maxChangedPropertyMetaDataByDiffType(...l);u&&(r.validationRowColorizingDiffs[i]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,r){const i=t==="lower"?[r.minimum,r.exclusiveMinimum]:[r.maximum,r.exclusiveMaximum],o=[],s=[];for(const l of i)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return q(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:S.Green},removeBefore:{borderShadowColor:S.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,r){const i=fs[n],o={};for(const s of t){const l=r[s];if(!G.isDiff(l)||i[s]===void 0)continue;const f=this.buildListValueDiffMetadata(l);o[s]=ce.maxChangedPropertyMetaDataByDiffType(o[s],f)??f}return o}resolveWholeRowDisplayValues(n,t,r,i){const o=[];return t.forEach((s,l)=>{const u=r[l],f=i===L.add?E(u)?u.afterValue:void 0:k(u)?u.beforeValue:void 0;f!==void 0&&o.push(Aa(n,s,f))}),o}mergeDiffActionFragment(n,t,r){const i=n[0],o=n.flatMap(l=>k(l)||q(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>E(l)||q(l)?l.afterDeclarationPaths:[]);return t===L.add?{type:i.type,scope:i.scope,description:i.description,action:L.add,afterValue:r,afterDeclarationPaths:s}:{type:i.type,scope:i.scope,description:i.description,action:L.remove,beforeValue:r,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return q(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:S.Green},removeBefore:{borderShadowColor:S.Red,isFontMuted:!0}})}}class ad extends id{aggregate(e,n,t,r,i){const o=super.aggregate(e,n,t,r,i);if(!A(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=G.isDiffsRecord(l),f=this.resolveWholeListFieldDiff(e,"enum",s),c=this.resolveWholeListFieldDiff(e,"examples",s),g=this.resolveListFieldItemDiffs(e,"enum",s),y=this.resolveListFieldItemDiffs(e,"examples",s),p=this.resolveAllowedAdditionalPropertyNamesDiff(t,r,s),h=!!f||!!c||Object.keys(g).length>0||Object.keys(y).length>0||!!p;if(!o&&!u&&!h){const w=this.resolveRequiredMetaDiff(t,r,s);if(!w)return;const N={required:w};return this.aggregatePropertyTitleRowDiff(N),N}const b={...o??{}};if(u){const w=l.default;G.isDiff(w)&&(b.default=this.buildDefaultValueDiffMetadata(w))}if(f&&(b.enumDiff=f),Object.keys(g).length>0&&(b.enumValueDiffs=g),c&&(b.examplesDiff=c),Object.keys(y).length>0&&(b.examplesValueDiffs=y),p!=null&&p.diff&&(b.allowedAdditionalPropertyNamesDiff=p.diff),Object.keys((p==null?void 0:p.valueDiffs)??{}).length>0&&(b.allowedAdditionalPropertyNamesValueDiffs=p.valueDiffs),this.aggregateEnumRowColorizingDiff(e,b),this.aggregateExamplesRowColorizingDiff(e,b),this.aggregateDefaultRowColorizingDiff(e,b),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(p==null?void 0:p.mergedValues,b),this.hasWholeNodeAddOrRemoveDiff(b))delete b.required;else{const w=this.resolveRequiredMetaDiff(t,r,s);w&&(b.required=w)}return this.stripMetaFlagDiffsWhenWholeNode(b),this.aggregatePropertyTitleRowDiff(b),Object.keys(b).length>0?b:void 0}aggregatePropertyTitleRowDiff(e){const n=e[M];if(n&&(E(n.data)||k(n.data))){e[un]=n;return}for(const r of Kn){const i=e[r];if(i){e[un]=this.asReplaceFlagDiffForTitleRow(i);return}}const t=e.required;if(t){e[un]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var c;if(!n||typeof e!="string"||!e)return;const r=n.value(),i=(c=n.meta())==null?void 0:c._fragment;if(!A(i)&&!A(r))return;const o=String(e),s=A(i)?Reflect.get(i,t):void 0,l=A(i)?Reflect.get(i,"required"):void 0,u=A(r)&&"required"in r?r.required:void 0,f=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if(G.isDiffsRecord(s)){const g=s.required;if(G.isDiff(g)){const y=this.resolveRequiredMetaDiffFromWholeArrayDiff(g,o);if(y)return y}if(G.isDiffsRecord(g)){const y=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(g,o,f);if(y)return y}}if(Array.isArray(f)){const g=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(f,t,o);if(g)return g}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(E(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(k(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(q(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],r=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==r.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const r=t.indexOf(n);if(r>=0){const i=e[String(r)];if(G.isDiff(i))return this.buildChangedPropertyMetaDataFromDiff(i)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const r=Reflect.get(e,n);if(!G.isDiffsRecord(r))return;const i=e.indexOf(t);if(i>=0){const o=r[String(i)];if(G.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(r,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(G.isDiff(t)){if(E(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(k(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return q(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const r=Reflect.get(e,t);if(!G.isDiffsRecord(r))return;const i=r[n];if(G.isDiff(i)){if(E(i)&&Array.isArray(i.afterValue))return this.buildChangedPropertyMetaDataFromDiff(i);if(k(i)&&Array.isArray(i.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(i)}}resolveListFieldItemDiffs(e,n,t){const r={},i=Reflect.get(e,n);if(!Array.isArray(i))return r;const o=Reflect.get(i,t);return G.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,r),r}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,r]of Object.entries(e))!r||n[t]||(n[t]=this.buildListValueDiffMetadata(r))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var c;if(e!==W.ADDITIONAL_PROPERTIES||!n)return;const r=(c=n.meta())==null?void 0:c._fragment;if(!A(r))return;const i=Reflect.get(r,"propertyNames"),o=Reflect.get(r,t),s=G.isDiffsRecord(o)?o.propertyNames:void 0;if(G.isDiff(s)){const g=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(s);if(g)return g}if(!A(i))return;const l=Reflect.get(i,"enum");if(!Array.isArray(l)||l.length===0)return;const u=this.resolveWholeListFieldDiff(i,"enum",t),f=this.resolveListFieldItemDiffs(i,"enum",t);if(!(!u&&Object.keys(f).length===0))return{diff:u,valueDiffs:Object.keys(f).length>0?f:void 0,mergedValues:l}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(E(e)&&A(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(k(e)&&A(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,r,i){if(!Array.isArray(e)||e.length===0)return;const o=n[M];if(o&&(E(o.data)||k(o.data))){n[i]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const s=n[t];if(s){n[i]=s;return}const l=n[r];if(!l||Object.keys(l).length===0)return;const u=Object.values(l);if(u.length===e.length){const[c,...g]=u;if((E(c.data)||k(c.data))&&g.every(y=>y.data.action===c.data.action)){n[i]=this.buildChangedPropertyMetaDataFromDiff(c.data);for(const y of Object.keys(l)){const p=l[y];p&&(l[y]=this.buildChipAddRemoveDiffMetadata(p.data))}return}}const f=ce.maxChangedPropertyMetaDataByDiffType(...Object.values(l));f&&(n[i]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),r=t!=null,i=n[M];if(i&&(E(i.data)||k(i.data))){(r||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(i));return}const o=n.default;if(!o)return;const s=o.data;if(E(s)||k(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}q(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class or{static instance(e){return this.kindPropertyInstance}}x(or,"kindPropertyInstance",new ad);const od="[JSON Schema][WithDiffs]";class sd extends ba{constructor(n){super(n);x(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return od}createTree(){return new Ol}createNodeDataBuilder(){return new Il((n,t)=>this.pick(n,t))}prepareSource(){return new Pl(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,r,i,o){const s=super.createNodeFromRaw(n,t,r,i,o);return!s||!De(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isJsonSchemaTreeNodeKind(t))return;const i=this.takeTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return or.instance(t).aggregate(r.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,r,i){if(this.isJsonSchemaTreeNodeKind(n))return Na.instance(n).aggregate(t,r,i)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return Da.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,r,i){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return or.instance(n).aggregateByDescendantDiffs(t,r,i,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,i,o){if(this.isJsonSchemaTreeNodeKind(n)&&r)return va.instance(n).aggregate(t,r,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return wa.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const i=this.createNodeDiffs(n.key,t,r);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),vr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return ya.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&De(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function Gt(a){return!!a&&Object.keys(a).length>0}function Zr(a){return!!a&&a.size>0}function ei(a){return Gt(a.diffs)||Gt(a.descendantDiffs)||Zr(a.diffsSummary)||Zr(a.descendantDiffsSummary)||Gt(a.diffsSeverities)}function sr(a,e){if(a.isCycle)return ei(a);if(e.visiting.has(a.id))return!1;e.visiting.add(a.id);try{return ei(a)?!0:a.type===de.COMPLEX?a.nestedNodes().some(n=>sr(n,e)):a.childrenNodes().some(n=>sr(n,e))}finally{e.visiting.delete(a.id)}}function Ta(a){return sr(a,{visiting:new Set})}function ld(a,e,n){if(!n){const o=a.map(()=>({visible:!0})),s=a.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],r=[];let i=0;for(;i<a.length;){if(e(a[i])){t.push({visible:!0}),r.push({kind:"node",node:a[i],sourceIndex:i}),i++;continue}const o=i;for(;i<a.length&&!e(a[i]);)i++;const s=a[o].id,l=i-o;for(let u=o;u<i;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});r.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:r}}function dd(a,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1;return ld(a,t=>Ta(t),n)}function Va(a){return a.kind===D.MESSAGE}function ud(a){return a.kind===D.MESSAGE_SECTION_SELECTOR}function xa(a){return a.kind===D.MESSAGE_CONTENT}function fd(a){return a.kind===D.MESSAGE_HEADERS&&a.key==="headers"}function cd(a){return a.kind===D.MESSAGE_PAYLOAD&&a.key==="payload"}function Ca(a){return a.kind===D.MESSAGE_CHANNEL}function md(a){return a.kind===D.MESSAGE_CHANNEL_PARAMETERS}function Ra(a){return a.kind===D.MESSAGE_OPERATION}function wr(a){return a.kind===D.EXTENSIONS}function Et(a){return a.kind===D.BINDINGS}function Bt(a){return a.kind===D.BINDING}function yd(a){return xa(a)||Ca(a)||Ra(a)}function gd(a){return a.kind===D.SERVERS}function pd(a){return a.kind===D.SERVER}function He(a,e,n){var r;if(!A(a))return!1;if(!e)return(a==null?void 0:a[n])!==void 0;const t=(r=e[n])==null?void 0:r.data;return t?k(t)?t.beforeValue!==void 0:E(t)?t.afterValue!==void 0:q(t)?t.beforeValue!==void 0||t.afterValue!==void 0:Xe(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(a==null?void 0:a[n])!==void 0}function Me(a,e,n){return!!a&&(n===void 0||(Array.isArray(n)?n.includes(a.kind):a.kind===n))&&a instanceof e}function hd(a){return Me(a,ks,D.BINDINGS)}function Ut(a){return Me(a,Re,D.BINDING)}function bd(a){return Me(a,Re)}function vd(a){return Me(a,Re,D.MESSAGE_CHANNEL)}function Dd(a){return Me(a,Re)}function lt(a){return Me(a,Re,D.SERVER)}function Sd(a){return Me(a,Re)}function wd(a){return Me(a,Re,D.MESSAGE_HEADERS)}function Nd(a){return Me(a,Re,D.MESSAGE_PAYLOAD)}function kd(a){return Me(a,Re,D.MESSAGE)}function Ed(a){return Me(a,Re,D.MESSAGE_OPERATION)}function Ad(a){return Me(a,Re,D.MESSAGE_SECTION_SELECTOR)}function Td(a){return Me(a,Re,[D.MESSAGE_CONTENT,D.MESSAGE_CHANNEL,D.MESSAGE_OPERATION])}const Ma=a=>{const e=Pe(),{diff:n,descendantDiffs:t,diffsSeverities:r}=a,i=m.useMemo(()=>r==null?void 0:r["address-row"],[r]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>Wn(i==null?void 0:i.causedAt),[i]);switch(e){case Oe:return d.jsx(qn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(bn,{left:d.jsx(Yt,{...a,layoutSide:$}),right:d.jsx(Yt,{...a,layoutSide:oe})})});default:return d.jsx(hn,{content:d.jsx(Yt,{...a,layoutSide:oe})})}},Vd={send:"bg-sky-400",receive:"bg-green-500"},Yt=a=>{const{action:e,address:n,layoutSide:t,diff:r}=a,{[te]:i}=a,o=m.useCallback(()=>{const l=r&&xd(r);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Vd[e]} text-white rounded-md`,children:e.toUpperCase()});if(r&&(E(r.data)&&t===$&&(u=null),k(r.data)&&t===oe&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(Lt,{value:n,variant:K.h4,layoutSide:t,diff:r,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:f,beforeSuffix:c,afterSuffix:g,diff:y}=l,p=t===$?c:g;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Lt,{value:f,variant:K.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Lt,{value:p,variant:K.h4,layoutSide:t,diff:y,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,r,t]),s=m.useMemo(()=>{const l=new Set;if(r){const{styles:u}=r;t===$?l.add(ne.background(u.before.backgroundColor)):l.add(ne.background(u.after.backgroundColor))}return Array.from(l)},[r,t]);return d.jsx("div",{"data-precededby":i,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${zn} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function xd(a){const{data:e}=a;if(!q(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const r=n.indexOf("{"),i=t.indexOf("{"),o=r===-1?n:n.slice(0,r),s=i===-1?t:t.slice(0,i);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:r===-1?"":n.slice(r),afterSuffix:i===-1?"":t.slice(i),diff:{...a,data:l}}}Ma.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Cd=m.memo(a=>a.mergedSource===null?null:d.jsx(xn,{fallback:d.jsx(Cn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Rd,{...a})})),Rd=m.memo(a=>{const{mergedSource:e,operationKeys:n,displayMode:t=_n,devMode:r=!1,noHeading:i=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=a,u=m.useMemo(()=>Ue(r),[r]),f=m.useMemo(()=>new cl({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),c=m.useMemo(()=>(f==null?void 0:f.build())??null,[f]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",c);const g=c==null?void 0:c.root;return!g||!Va(g)?null:d.jsx(Dr.Provider,{value:s,children:d.jsx(Zi.Provider,{value:l,children:d.jsx(Wi.Provider,{value:r,children:d.jsx(Rn.Provider,{value:t,children:d.jsx(Mn.Provider,{value:Oe,children:d.jsx(Ie.Provider,{value:0,children:d.jsx(Kr,{node:g,noHeading:i})})})})})})})});Cd.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Nr=m.createContext(void 0);function kr(){return m.useContext(Nr)}const Tn={suppressRootNestingIndicator:!0},nn=m.memo(a=>{const{beforeLevel:e,afterLevel:n,children:t}=a,[r,i]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{i(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:r,afterLevel:o}),[r,o]);return d.jsx(cs.Provider,{value:l,children:t})});nn.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function _a(a){let e;for(const n of a){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class Md extends hr{constructor(){super()}}const At={PROPERTY:"property"},Yn=Object.values(At),Q={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class _d extends St{constructor(){super(...arguments);x(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,r,i){}}const pe=class pe{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,r=pe.isArrayItemKey(e);return pe.transformRawJsoValueToBaseJsoNodeValue(n,t,r)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const r=pe.getValueType(e),i=pe.isPrimitiveValue(r);return{title:n,value:e,valueType:r,isPrimitive:i,isArrayItem:t,isPredefinedValueSet:pe.isPredefinedValueSet(r)}}static isPredefinedValueSet(e){return e===Q.BOOLEAN||e===Q.NULL}static isPrimitiveValue(e){return e!==Q.JSON_SCHEMA&&e!==Q.MULTI_SCHEMA&&e!==Q.OBJECT&&e!==Q.ARRAY}static getValueType(e){return typeof e=="string"?Q.STRING:typeof e=="number"?Q.NUMBER:typeof e=="boolean"?Q.BOOLEAN:typeof e=="object"?e===null?Q.NULL:Array.isArray(e)?Q.ARRAY:pe.isJsonSchema(e)?Q.JSON_SCHEMA:pe.isMultiSchema(e)?Q.MULTI_SCHEMA:Q.OBJECT:Q.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=er in e&&typeof e.type=="string"&&Fo.some(r=>r===e.type)||Qt in e&&Array.isArray(e.oneOf)&&e.oneOf.every(r=>pe.isJsonSchema(r))||Zt in e&&Array.isArray(e.anyOf)&&e.anyOf.every(r=>pe.isJsonSchema(r))||Xt in e&&Array.isArray(e.allOf)&&e.allOf.every(r=>pe.isJsonSchema(r))||mt in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Si,Ko,Go,Mi,Bo,Uo,Yo,er,Di,nr,Ni,_i,Oi,Pi,qi,Hi,Li,Ii,ji,Ti,Ai,Vi,Ri,Ci,gi,pi,xi,wi,ci,yi,mi,Xt,Qt,Zt,Wo,Ei,bi,vi,ki,hi,zo,mt]);return n&&Object.keys(e).every(r=>t.has(r)||pe.isExtensionPropertyInJsonSchema(r)||pe.isAllowedCustomPropertyInJsonSchema(r))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&A(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!mr(e))return e;const t=fe(e[n]);if(!t)return e;const r=new Set(Object.keys(e)),i=new Set(Object.keys(t)),o=r.intersection(i);let s;for(const l of o){const u=e[l],f=t[l];if(u===void 0||f===void 0||!q(f))continue;const{beforeValue:c,afterValue:g}=f,y=A(c),p=Array.isArray(c),h=A(g),b=Array.isArray(g);if(!(p&&h||y&&b))continue;s||(s={...e});const N={...c,...g};s[l]=N}return s??e}};x(pe,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:Q.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let F=pe;const qd=(a,e,n,t,r)=>F.mergeComparisonBetweenArrayAndObject(e,r.diffMetaKeys.diffsMetaKey);function qa(){return{"/*":()=>qa(),transformers:[qd],kind:At.PROPERTY}}function Hd(a){return vt(a)}const Od=new Set(Yn);class Pd extends Dt{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){if(!this.isJsoTreeNodeKind(e))return null;const i=F.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:i,after:i}}isJsoTreeNodeKind(e){return Od.has(e)}}class Id extends vn{aggregate(e,n,t,r){const i=new Set;if(!n)return i;for(const o of Object.values(n))o&&(!E(o.data)&&!k(o.data)||i.add(o.data.type));return i}}class Ha{static instance(e){if(!this.instances.has(null)){const n=new Id;this.instances.set(null,n)}return this.instances.get(null)}}x(Ha,"instances",new Map);class Ld extends On{constructor(){super(...arguments);x(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});x(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!A(n)&&!Array.isArray(n))return;const{diffsMetaKey:r}=t,i=fe(n[r]);if(!i)return;const o={};for(const[s,l]of Object.entries(i)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_FLAGS,g=this.DEFAULT_DIFF_FLAGS,y=xe;if(E(l)){const{afterValue:p}=l,h=F.getValueType(p),b=F.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},c={...c,increaseLevel:!1},f={isContentVisible:b,isHeaderVisible:!0,backgroundColor:S.Green},g={...g,increaseLevel:!0},y=dn}if(k(l)){const{beforeValue:p}=l,h=F.getValueType(p);u={isContentVisible:F.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:S.Red},c={...c,increaseLevel:!0},f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={...g,increaseLevel:!1},y=dn}if(q(l)){const{beforeValue:p,afterValue:h}=l,b=F.getValueType(p),w=F.getValueType(h),N=F.isPrimitiveValue(b),V=F.isPrimitiveValue(w),v=F.isPredefinedValueSet(b),T=F.isPredefinedValueSet(w);u={isContentVisible:N,isHeaderVisible:!0,backgroundColor:S.Yellow},N&&(v?u.borderShadowColor=S.Yellow:u.textHighlighterColor=S.Yellow),f={isContentVisible:V,isHeaderVisible:!0,backgroundColor:S.Yellow},V&&(T?f.borderShadowColor=S.Yellow:f.textHighlighterColor=S.Yellow),y=$o}o[s]={data:l,styles:{before:u,after:f},flags:{before:c,after:g},highlightingMode:y}}return o}}class Oa{static instance(e){if(!this.instances.has(null)){const n=new Ld;this.instances.set(null,n)}return this.instances.get(null)}}x(Oa,"instances",new Map);class jd extends ce{aggregate(e){const n=e[M];if(n){const o=n.data,s={type:o.type,causedAt:[]};return q(o)||k(o)?s.causedAt=o.beforeDeclarationPaths[0]:E(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[H.TitleRow]:s}}const t=e.value;if(!t)return;const r=t.data,i={type:r.type,causedAt:[]};return q(r)||k(r)?i.causedAt=r.beforeDeclarationPaths[0]:E(r)&&(i.causedAt=r.afterDeclarationPaths[0]),{[H.TitleRow]:i}}}class Pa{static instance(e){return this.instances.has(null)||this.instances.set(null,new jd),this.instances.get(null)}}x(Pa,"instances",new Map);class Jd extends br{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const i of Object.values(e))i&&r.add(i.data.type);return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!E(n)&&!k(n)&&!q(n)&&!Xe(n))return!1;return!0}}class Fd{static instance(e){return new Jd}}class Kd extends G{isComplexValue(e){return A(e)||Array.isArray(e)}aggregate(e,n,t,r,i){const o={};if(r){const s=r.diffs[M];if(s){const{data:l}=s;if(E(l)){const{afterValue:u}=l,f=F.getValueType(u);if(!F.isPrimitiveValue(f)&&this.isComplexValue(u)){const g=u[t],y=F.getValueType(g),p=F.isPrimitiveValue(y),h={data:{...l,afterValue:g},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},after:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:S.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:dn,inherited:!0};return o[M]=h,o}return o[M]=s,o}if(k(l)){const{beforeValue:u}=l,f=F.getValueType(u);if(!F.isPrimitiveValue(f)&&this.isComplexValue(u)){const g=u[t],y=F.getValueType(g),p=F.isPrimitiveValue(y),h={data:{...l,beforeValue:g},styles:{before:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:S.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:dn,inherited:!0};return o[M]=h,o}return o[M]=s,o}if(q(l)){const{beforeValue:u,afterValue:f}=l,c=F.getValueType(u),g=F.getValueType(f),y=F.isPrimitiveValue(c),p=F.isPrimitiveValue(g);if(y&&p)return o[M]=s,o;if(!y&&this.isComplexValue(u)&&p){const h=u[t],b=F.getValueType(h),w=F.isPrimitiveValue(b),N=F.isPredefinedValueSet(b),V={data:{...l,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:w,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:dn,inherited:!0};return w&&(V.styles.before.textHighlighterColor=S.Yellow),N&&(V.styles.before.borderShadowColor=S.Yellow),o[M]=V,o}if(!p&&this.isComplexValue(f)&&y){const h=f[t],b=F.getValueType(h),w=F.isPrimitiveValue(b),N=F.isPredefinedValueSet(b),V={data:{...l,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},after:{isContentVisible:w,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:dn,inherited:!0};return w&&(V.styles.after.textHighlighterColor=S.Yellow),N&&(V.styles.after.borderShadowColor=S.Yellow),o[M]=V,o}if(!y&&this.isComplexValue(u)&&!p&&this.isComplexValue(f)){const h=u[t],b=f[t],w=F.getValueType(h),N=F.getValueType(b),V=F.isPrimitiveValue(w),v=F.isPrimitiveValue(N),T=F.isPredefinedValueSet(w),j=F.isPredefinedValueSet(N),_={data:{...l,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&V,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?S.Gray:S.Yellow,textHighlighterColor:h!==void 0?S.Yellow:void 0},after:{isContentVisible:b!==void 0&&v,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?S.Gray:S.Yellow,textHighlighterColor:b!==void 0?S.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:dn,inherited:!0};return V&&(_.styles.before.textHighlighterColor=S.Yellow),v&&(_.styles.after.textHighlighterColor=S.Yellow),T&&(_.styles.before.borderShadowColor=S.Yellow),j&&(_.styles.after.borderShadowColor=S.Yellow),o[M]=_,o}}}else{const l=r.descendantDiffs[t];if(l)return o[M]=l,o}}}}class Ia{static instance(e){return this.instances.has(null)||this.instances.set(null,new Kd),this.instances.get(null)}}x(Ia,"instances",new Map);class Gd extends _d{constructor(n){const{source:t,diffsMetaKeys:r,supportJsonSchema:i=!1,logger:o=Ue()}=n;super();x(this,"tree");x(this,"source");x(this,"supportJsonSchema");x(this,"diffsMetaKeys");x(this,"logger");x(this,"nodeDataBuilder");x(this,"CHANGE_SEVERITIES",{[Xo]:6,[Qo]:5,[Zo]:4,[es]:3,[Ji]:2,[ns]:1});this.source=t,this.supportJsonSchema=i,this.diffsMetaKeys=r,this.logger=o,this.tree=new Md,this.nodeDataBuilder=new Pd}build(){if(!A(this.source))return this.tree;fr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new wt,diffMetaKeys:this.diffsMetaKeys},t=qa(),r=Hd({source:this.source,tree:this.tree,supportedNodeKinds:Yn,createNodeFromRaw:(i,o,s,l,u)=>this.createNodeFromRaw(i,o,s,l,u),createNodeParams:(i,o)=>({value:i??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(i,o)=>({parent:o,container:null,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(i,o)=>({parent:i.parent,container:o,ancestors:i.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:i=>i.type===de.SIMPLE,isComplexNode:i=>i.type===de.COMPLEX,resolveNodeKey:(i,o)=>this.resolveNodeKey(i,o),isDisallowedValue:i=>i===void 0,shouldStopAfterNodeCreation:(i,o)=>{if(!A(o)&&!Array.isArray(o))return!0;const s=i.value();return s?this.supportJsonSchema&&(s.before.valueType===Q.JSON_SCHEMA||s.after.valueType===Q.JSON_SCHEMA||s.before.valueType===Q.MULTI_SCHEMA||s.after.valueType===Q.MULTI_SCHEMA):!1}});return En(this.source,r,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return A(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,i,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,r,o),f=this.createNodeMeta(t,o),c={type:de.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:f,newDataLevel:l},g=this.tree.createSimpleNode(n,t,r,!1,c);this.assignNodeDiffs(g,r,o);const p=g.diffs[M];if(p){const{data:h}=p;if(E(h)&&u&&(u.before=F.DEFAULT_BASE_JSO_NODE_VALUE),k(h)&&u&&(u.after=F.DEFAULT_BASE_JSO_NODE_VALUE),q(h)){const{beforeValue:b}=h,w=F.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=w)}}return g}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:i}=r;return this.nodeDataBuilder.createNodeValue(t,n,i,()=>null)}createNodeDiffs(n,t,r){if(!this.isJsoTreeNodeKind(t))return;const i=r.parent&&this.isJsoSimpleTreeNodeWithDiffs(r.parent)?r.parent:void 0,o=r.container&&this.isJsoComplexTreeNodeWithDiffs(r.container)?r.container:void 0;return Ia.instance(t).aggregate(r.value,this.diffsMetaKeys,n,i,o)}createNodeDiffsSummary(n,t,r,i){if(this.isJsoTreeNodeKind(n))return Fd.instance(n).aggregate(t,r,i)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return Oa.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,i,o){if(this.isJsoTreeNodeKind(n)&&r)return Ha.instance(n).aggregate(t,r,i,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return Pa.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const i=this.createNodeDiffs(n.key,t,r);i&&Object.assign(n.diffs,i);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),vr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const f=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(r);f&&Object.assign(n.diffsSeverities,f)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const r=t.diffsSeverities["title-row"];if(r)return{"title-row":r}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[M];if(!t||!q(t.data))return!1;const r=F.getValueType(t.data.beforeValue),i=F.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(r),s=this.isJsoComplexValueType(i);return o!==s}isJsoComplexValueType(n){return n===Q.OBJECT||n===Q.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[M]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const r=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(r)return r}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===de.SIMPLE||n.type===de.COMPLEX))}isJsoTreeNodeKind(n){return Yn.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===de.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===de.COMPLEX}maxDiffType(n){let t;for(const r of n)this.compareDiffTypes(r,t)>0&&(t=r);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Er=m.createContext({});function La(){return m.useContext(Er)}const Fe={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function ja(a,e){if(e)return{type:"object",properties:{[a]:e}}}function lr(a,e,n,t){if(!e)return;const r=n==null?void 0:n.data,i=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[a]:e,...r&&i?{[i]:{[a]:r}}:{}}}}function Bd(a,e){if(e&&!(e.valueType!==Fe.JSON_SCHEMA&&e.valueType!==Fe.MULTI_SCHEMA))return A(e.value)?ja(a,e.value):void 0}function Ud(a,e,n,t){if(e&&!(e.before.valueType!==Fe.JSON_SCHEMA&&e.before.valueType!==Fe.MULTI_SCHEMA&&e.after.valueType!==Fe.JSON_SCHEMA&&e.after.valueType!==Fe.MULTI_SCHEMA)){if((e.before.valueType===Fe.JSON_SCHEMA||e.before.valueType===Fe.MULTI_SCHEMA)&&A(e.before.value))return lr(a,e.before.value,n,t);if((e.after.valueType===Fe.JSON_SCHEMA||e.after.valueType===Fe.MULTI_SCHEMA)&&A(e.after.value))return lr(a,e.after.value,n,t)}}const Ar=m.memo(a=>{const{isVisible:e,value:n,className:t}=a;return e?d.jsx("span",{className:t,children:`${n}`}):null});Ar.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ja(a){const{appearance:e}=a;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function Yd(a){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=a,r=Ja({appearance:e});return m.useMemo(()=>[r,e==="text"?ne.highlighter(n):"",e==="block"?ne.borderShadow(t):""].filter(Boolean).join(" "),[e,t,r,n])}const ut=m.memo(a=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,borderShadowColor:i}=a,o=Yd({appearance:t,textHighlighterColor:r,borderShadowColor:i});return d.jsx(Ar,{isVisible:e,value:n,className:o})});ut.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Tr=a=>{const{node:e,supportJsonSchema:n=!1}=a,{[te]:t}=a,r=Ce(),i=Pn(),{beforeLevel:o,afterLevel:s}=Hn(),{EmbeddedSchemaDiffsComponent:l}=La(),[u,f]=m.useState(!0),c=m.useCallback(()=>{f(O=>!O)},[]),g=e.value(),y=e.diffs,p=e.descendantDiffsSummary,h=m.useMemo(()=>y[M],[y]),b=m.useCallback(O=>{if(!g)return d.jsx(d.Fragment,{});if(!h)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(ut,{isVisible:g.after.isPrimitive,value:g.after.value,appearance:g.after.isPredefinedValueSet?"block":"text"}),!u&&d.jsx(ea,{values:Array.from(p)})]});const{styles:P}=h;return O===$?d.jsx(ut,{isVisible:P.before.isContentVisible,value:g.before.value,appearance:g.before.isPredefinedValueSet?"block":"text",textHighlighterColor:P.before.textHighlighterColor,borderShadowColor:P.before.borderShadowColor}):O===oe?d.jsx(ut,{isVisible:P.after.isContentVisible,value:g.after.value,appearance:g.after.isPredefinedValueSet?"block":"text",textHighlighterColor:P.after.textHighlighterColor,borderShadowColor:P.after.borderShadowColor}):d.jsx(d.Fragment,{})},[u,p,g,h]),w=m.useMemo(()=>{const O=Ze(e);return ae(O,{resolveDiff:()=>h})},[e,h]),N=e.childrenNodes(),V=m.useMemo(()=>{const O=!!g,P=!(g!=null&&g.before.isPrimitive)&&(g==null?void 0:g.before.valueType)!==Q.UNKNOWN,Y=!(g!=null&&g.after.isPrimitive)&&(g==null?void 0:g.after.valueType)!==Q.UNKNOWN;return O&&(P||Y)},[g]),v=m.useMemo(()=>!(g!=null&&g.before.isArrayItem)&&!(g!=null&&g.after.isArrayItem),[g]),T=m.useMemo(()=>n?Ud(e.key,g,h,i):void 0,[i,e.key,g,h,n]);if(T)return i?l?d.jsx(nn,{beforeLevel:Math.max(o-1,0),afterLevel:Math.max(s-1,0),children:d.jsx(l,{schema:T,expandedDepth:2,displayMode:r,diffMetaKeys:i,customizationOptions:Tn},e.id)}):(console.error("supportJsonSchema is set but no embeddedSchemaDiffsComponent was provided to JsoDiffsViewer",e),null):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const j=_a(N),[_,J]=(()=>{let O=o+1,P=s+1;const[Y]=N,ue=Y==null?void 0:Y.diffs[M];return ue&&j&&(O=ue.flags.before.increaseLevel?o+1:o,P=ue.flags.after.increaseLevel?s+1:s),[O,P]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(me,{"data-precededby":t,value:`${e.key}`,expandable:V,expanded:u,onClickExpander:V?c:void 0,variant:K.body2,enableHeaderValue:v,subheader:b,usage:Nt.JsoProperty,highlightingMode:h==null?void 0:h.highlightingMode,...w}),u&&d.jsx(nn,{beforeLevel:_,afterLevel:J,children:N.map(O=>d.jsx(Tr,{"data-precededby":R.JSO_PROPERTY,node:O,supportJsonSchema:n},O.id))})]})};Tr.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const Tt=m.memo(a=>a.mergedSource===null?null:d.jsx(xn,{fallback:d.jsx(Cn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(Wd,{...a})})),Wd=m.memo(a=>{const{mergedSource:e,displayMode:n=_n,initialLevel:t=0,supportJsonSchema:r=!1,devMode:i=!1,diffMetaKeys:o,diffTypes:s,embeddedSchemaDiffsComponent:l}=a,{[te]:u}=a,f=m.useMemo(()=>Ue(i),[i]),c=m.useMemo(()=>new Gd({source:e,supportJsonSchema:r,diffsMetaKeys:o,logger:f}),[e,r,o,f]),g=m.useMemo(()=>c.build(),[c]),y=m.useMemo(()=>({EmbeddedSchemaDiffsComponent:l}),[l]);f.debug("[JSO Diffs] Source:",e),f.debug("[JSO Diffs] Tree:",g);const p=g.root;if(!p)return null;const h=p.childrenNodes();if(h.length===0)return null;const b=_a(h),[w,N]=(()=>{let V=t,v=t;const[T]=h,j=T.diffs[M];return j&&b&&(V=j.flags.before.increaseLevel?t:t-1,v=j.flags.after.increaseLevel?t:t-1),[V,v]})();return d.jsx(Er.Provider,{value:y,children:d.jsx(Dr.Provider,{value:o,children:d.jsx(Zi.Provider,{value:s,children:d.jsx(Rn.Provider,{value:n,children:d.jsx(Mn.Provider,{value:Oe,children:d.jsx(nn,{beforeLevel:w,afterLevel:N,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:h.map((V,v)=>d.jsx(Tr,{"data-precededby":v===0?u:R.JSO_PROPERTY,node:V,supportJsonSchema:r},V.id))})})})})})})})});Tt.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},embeddedSchemaDiffsComponent:{required:!1,tsType:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  schema: unknown
  expandedDepth?: number
  displayMode?: DisplayMode
  diffMetaKeys: DiffMetaKeys
  diffTypes?: ReadonlyArray<DiffType>
  customizationOptions?: CustomizationOptions
}`,signature:{properties:[{key:"schema",value:{name:"unknown",required:!0}},{key:"expandedDepth",value:{name:"number",required:!1}},{key:"displayMode",value:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}],required:!1}},{key:"diffMetaKeys",value:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]},required:!0}},{key:"diffTypes",value:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>",required:!1}},{key:"customizationOptions",value:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
  /**
   * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
   * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
   * of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]},required:!1}}]}}],raw:"FC<JsoEmbeddedSchemaDiffsComponentProps>"},description:""}}};class zd extends cr{constructor(){super()}}function Fa(){return{"/*":()=>Fa(),kind:At.PROPERTY}}function $d(a){return vt(a)}const Xd=new Set(Yn);class Qd extends Dt{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!this.isJsoTreeNodeKind(e)||e!==At.PROPERTY?null:F.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return Xd.has(e)}}class Zd extends St{constructor(n){const{source:t,supportJsonSchema:r=!1,materializeDepth:i,logger:o=Ue()}=n;super();x(this,"tree");x(this,"source");x(this,"supportJsonSchema");x(this,"materializeDepth");x(this,"logger");x(this,"nodeDataBuilder");x(this,"lazyState",new Bi);x(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=r,this.materializeDepth=i,this.logger=o,this.tree=new zd,this.nodeDataBuilder=new Qd}build(){if(!A(this.source))return this.tree;const n={parent:null,container:null,ancestors:new wt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=Fa();return this.crawlHooks=$d({source:this.source,tree:this.tree,supportedNodeKinds:Yn,createNodeFromRaw:(r,i,o,s,l)=>this.createNodeFromRaw(r,i,o,s,l),createNodeParams:(r,i,o)=>({value:r??null,newDataLevel:!0,container:o,parent:i}),createStateForSimpleNode:(r,i)=>({parent:i,container:null,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),createStateForComplexNode:(r,i)=>({parent:r.parent,container:i,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),isSimpleNode:r=>this.isJsoSimpleTreeNode(r),isComplexNode:r=>this.isJsoComplexTreeNode(r),resolveNodeKey:(r,i)=>this.resolveNodeKey(r,i),isDisallowedValue:r=>r===void 0,shouldStopAfterNodeCreation:(r,i)=>{if(!A(i)&&!Array.isArray(i))return!0;const o=r.value();return o?this.supportJsonSchema&&(o.valueType===Q.JSON_SCHEMA||o.valueType===Q.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:ms}}),En(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const i={parent:n,container:null,ancestors:Ui(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};En(r.fragment,this.crawlHooks,{state:i,rules:r.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,r,i,o){const{parent:s,container:l,newDataLevel:u}=o;if(i){const y=this.createNodeMeta(t,o),p={type:de.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,p)}const f=this.createNodeValue(t,r,{...o,parent:s,container:l}),c=this.createNodeMeta(t,o),g={type:de.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:f,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r,parent:i=null}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:i}=r;return this.nodeDataBuilder.createNodeValue(t,n,i,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===de.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const Ka=m.memo(a=>{const{isVisible:e,value:n,appearance:t}=a,r=Ja({appearance:t});return d.jsx(Ar,{isVisible:e,value:n,className:r})});Ka.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Vr=a=>{const{node:e,supportJsonSchema:n=!1}=a,{[te]:t}=a,r=Ce(),i=pn(),{EmbeddedSchemaComponent:o}=La(),[s,l]=m.useState(!0),u=m.useCallback(()=>{l(h=>!h)},[]),f=e.value(),c=m.useMemo(()=>!!f&&!f.isPrimitive,[f]),g=m.useCallback(()=>f?d.jsx(Ka,{isVisible:f.isPrimitive,value:f.value,appearance:f.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[f]),y=e.childrenNodes(),p=m.useMemo(()=>n?Bd(e.key,f):void 0,[e.key,f,n]);return p?o?d.jsx(o,{schema:p,expandedDepth:2,displayMode:r,customizationOptions:Tn},e.id):(console.error("supportJsonSchema is set but no embeddedSchemaComponent was provided to JsoViewer",e),null):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(me,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:s,onClickExpander:u,variant:K.body2,enableHeaderValue:!(f!=null&&f.isArrayItem),subheader:g,usage:Nt.JsoProperty}),s&&d.jsx(Ie.Provider,{value:i+1,children:y.map(h=>d.jsx(Vr,{"data-precededby":R.JSO_PROPERTY,node:h,supportJsonSchema:n}))})]})};Vr.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const Vt=m.memo(a=>a.source===null?null:d.jsx(xn,{fallback:d.jsx(Cn,{componentName:"JSO Viewer"}),children:d.jsx(eu,{...a})})),eu=m.memo(a=>{const{source:e,displayMode:n=_n,layoutMode:t=an,initialLevel:r=0,supportJsonSchema:i=!1,devMode:o=!1,embeddedSchemaComponent:s}=a,{[te]:l}=a,u=m.useMemo(()=>Ue(o),[o]),f=m.useMemo(()=>new Zd({source:e,supportJsonSchema:i,logger:u}),[e,i,u]),c=m.useMemo(()=>f.build(),[f]),g=m.useMemo(()=>({EmbeddedSchemaComponent:s}),[s]);u.debug("[JSO] Source:",e),u.debug("[JSO] Tree:",c);const y=c.root;if(!y)return null;const p=y.childrenNodes();return p.length===0?null:d.jsx(Er.Provider,{value:g,children:d.jsx(Rn.Provider,{value:n,children:d.jsxs(Mn.Provider,{value:t,children:[" ",d.jsx(Ie.Provider,{value:r,children:d.jsx("div",{"data-testid":"jso-viewer",children:p.map((h,b)=>d.jsx(Vr,{"data-precededby":b===0?l:R.JSO_PROPERTY,node:h,supportJsonSchema:i},h.id))})})]})})})});Vt.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},layoutMode:{required:!1,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},embeddedSchemaComponent:{required:!1,tsType:{name:"FC",elements:[{name:"signature",type:"object",raw:`{
  schema: unknown
  expandedDepth?: number
  displayMode?: DisplayMode
  customizationOptions?: CustomizationOptions
}`,signature:{properties:[{key:"schema",value:{name:"unknown",required:!0}},{key:"expandedDepth",value:{name:"number",required:!1}},{key:"displayMode",value:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}],required:!1}},{key:"customizationOptions",value:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
  /**
   * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
   * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
   * of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]},required:!1}}]}}],raw:"FC<JsoEmbeddedSchemaComponentProps>"},description:""}}};const xr=({source:a,initialLevel:e})=>d.jsx(Vt,{source:a,initialLevel:e}),Cr=({mergedSource:a,initialLevel:e,displayMode:n,diffMetaKeys:t})=>d.jsx(Tt,{mergedSource:a,initialLevel:e,displayMode:n,diffMetaKeys:t});xr.__docgenInfo={description:"",methods:[],displayName:"DefaultExtensionsJsoComponent"};Cr.__docgenInfo={description:"",methods:[],displayName:"DefaultExtensionsJsoDiffsComponent"};const Rr=m.createContext(null);function nu(){const a=m.useContext(Rr);if(!a)throw new Error("useJsonSchemaEmbeddingContext must be used within JsonSchemaViewer or JsonSchemaDiffsViewer");return a}const tu=" or null";function Qe(a,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(An(a))return"";const n=a,t=(n==null?void 0:n.type)??kn,r=n&&typeof n=="object"&&"format"in n?n.format:void 0,i=n==null?void 0:n.title,o=n!=null&&n.nullable?tu:"";let s=String(t);return r&&(s+=`(${r})`),i&&(s+=`<${i}>`),s+=o,s}function ni(a){return a!=null}function Ga(a){if(!A(a))return{};const e={};return typeof a.minLength=="number"&&(e.minLength=a.minLength),typeof a.maxLength=="number"&&(e.maxLength=a.maxLength),typeof a.pattern=="string"&&(e.pattern=a.pattern),typeof a.minimum=="number"&&(e.minimum=a.minimum),typeof a.maximum=="number"&&(e.maximum=a.maximum),(typeof a.exclusiveMinimum=="number"||typeof a.exclusiveMinimum=="boolean")&&(e.exclusiveMinimum=a.exclusiveMinimum),(typeof a.exclusiveMaximum=="number"||typeof a.exclusiveMaximum=="boolean")&&(e.exclusiveMaximum=a.exclusiveMaximum),typeof a.multipleOf=="number"&&(e.multipleOf=a.multipleOf),typeof a.minProperties=="number"&&(e.minProperties=a.minProperties),typeof a.maxProperties=="number"&&(e.maxProperties=a.maxProperties),typeof a.uniqueItems=="boolean"&&(e.uniqueItems=a.uniqueItems),typeof a.minItems=="number"&&(e.minItems=a.minItems),typeof a.maxItems=="number"&&(e.maxItems=a.maxItems),e}function Ba(a){const e=cn(a);if(!e)return[];const n=[],t=Ga(e);return t.minLength!==void 0&&n.push(ve.MIN_LENGTH),t.maxLength!==void 0&&n.push(ve.MAX_LENGTH),t.pattern!==void 0&&n.push(ve.PATTERN),t.minimum!==void 0&&n.push(ve.MINIMUM),t.maximum!==void 0&&n.push(ve.MAXIMUM),ni(t.exclusiveMinimum)&&n.push(ve.EXCLUSIVE_MINIMUM),ni(t.exclusiveMaximum)&&n.push(ve.EXCLUSIVE_MAXIMUM),t.multipleOf!==void 0&&n.push(ve.MULTIPLE_OF),t.minProperties!==void 0&&n.push(ve.MIN_PROPERTIES),t.maxProperties!==void 0&&n.push(ve.MAX_PROPERTIES),t.uniqueItems!==void 0&&n.push(ve.UNIQUE_ITEMS),t.minItems!==void 0&&n.push(ve.MIN_ITEMS),t.maxItems!==void 0&&n.push(ve.MAX_ITEMS),n}function ru(a){return a!=null}function iu(a){return!!(a!=null&&a.extensions)&&Object.keys(a.extensions).length>0}function au(a){return!!(a!=null&&a.customAnnotations)&&Object.keys(a.customAnnotations).length>0}const ou="x-deprecated-reason";function su(a){var n;const e=(n=a==null?void 0:a.extensions)==null?void 0:n[ou];return typeof e=="string"&&e.length>0?e:void 0}class Ua{resolveNodeVisibility(e,n){const t=cn(e),r=zi(n),i=su(t),o=r&&!!(t!=null&&t.description),s=r&&!!i,l=r&&ru(t==null?void 0:t.default),u=r&&Array.isArray(t==null?void 0:t.examples)&&t.examples.length>0,f=r&&Array.isArray(t==null?void 0:t.enum)&&t.enum.length>0,c=r&&Ba(e).length>0,g=r&&iu(t),y=r&&au(t),p=l||u||f||c||g||y;return{showDescription:o,showDeprecationReasonRow:s,deprecationReason:i,showDefaultRow:l,showExamplesRow:u,showEnumValuesRow:f,showValidationsSection:c,showExtensionsRow:g,showCustomAnnotationsRow:y,showContentSection:o||s||p,showAnyAdditionalInfoRow:p}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:r,showEnumValuesRow:i,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!r,isDescriptionListLastRow:e&&t&&!i&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&i&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&ga(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const In=new Ua;function Xn(a,e){return In.resolveNodeVisibility(a,e)}function Mr(a,e){return In.resolveListLastRowFlags(a,e)}function lu(a,e){return In.resolveAdditionalInfoRowUsesAfterRowPrecededBy(a,e)}function _r(a){return In.resolveIsExpandable(a)}function xt(a,e){return In.resolveInitiallyExpanded(a,e)}function we(a,e){return In.resolveExpanderExpanded(a,e)}function Ya(a,e,n){if(!n)return a;const t=e===$;return(n===L.add?t:!t)?Math.max(a-1,0):a}var Be=(a=>(a.Default="default",a.JsonSchema="json-schema",a))(Be||{});const du={[Be.JsonSchema]:gr};function uu(a){return du[a]??zn}const Bn=m.memo(a=>{const{title:e,layoutSide:n,usage:t=Be.Default,lastInvisible:r=!1,diff:i,levelReductionAction:o}=a,{[te]:s}=a,l=pr(n),u=m.useMemo(()=>Ya(l,n,o),[l,n,o]),f=m.useMemo(()=>uu(t),[t]),c=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const{styles:b}=i,w=[];return n===$&&w.push(ne.background(b.before.backgroundColor)),n===oe&&w.push(ne.background(b.after.backgroundColor)),w},[i,n]),g=m.useMemo(()=>{const b=i==null?void 0:i.data;return b?E(b)?n===oe:k(b)?n===$:!0:!0},[i,n]),y=t===Be.JsonSchema,p=typeof e=="function"?e(n):e,h=g&&p!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":s,className:["nesting-indicator-title-row-content flex w-full h-full",y?"items-stretch":"",f,...c].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(bt,{level:u,lastInvisible:r&&g})}),h&&d.jsx(As,{title:p})]})});Bn.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ln=m.memo(a=>{const e=Pe(),{diffsSeverities:n,diffsSeverityPlacement:t=H.TitleRow}=a,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>Wn(r==null?void 0:r.causedAt),[r]);switch(e){case Oe:return d.jsx(qn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(bn,{left:d.jsx(Bn,{...a,layoutSide:$}),right:d.jsx(Bn,{...a,layoutSide:oe})})});case an:return d.jsx(hn,{content:d.jsx(Bn,{...a,layoutSide:oe})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Ln.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const qr=m.createContext(null);function Ct(){const a=m.useContext(qr);if(!a)throw new Error("useJsonSchemaViewerContext must be used within JsonSchemaViewer");return a}const ti=" or null";class fu{static takeFieldDiffs(e){const n=e.diffs.typeLabelFieldDiffs;if(!(!n||Object.keys(n).length===0))return n}static resolveTypeSideValue(e,n){const t=cn(e.value()),r=(t==null?void 0:t.type)??kn,i=this.takeFieldDiffs(e);return rt(r,i==null?void 0:i.type,n)??String(r)}static resolveSideDisplay(e,n,t){if(n!=null&&n.brokenRef)return{kind:$e.NO_DIFFS,text:`$ref: ${n.brokenRef}`};const r=e.value();if(An(r))return{kind:$e.NO_DIFFS,text:""};const i=this.takeFieldDiffs(e);if(!i)return{kind:$e.NO_DIFFS,text:Qe(r,n)};if(this.shouldUseMonolithicTypeLabelHighlight(i)){const c=Object.values(i).find(Boolean);return c?{kind:$e.WHOLE_DIFFS,text:this.buildMonolithicSideLabel(r,i,t),diff:this.buildMonolithicTypeLabelDiffMetadata(c)}:{kind:$e.NO_DIFFS,text:Qe(r,n)}}const o=[],s=this.buildTypeSideSegment(r,i.type,t);s&&o.push(s);const l=this.buildWrappedSideSegment(this.takeMergedFormat(r),i.format,t,this.wrapFormat);l&&o.push(l);const u=this.buildWrappedSideSegment(r==null?void 0:r.title,i.title,t,this.wrapTitle);u&&o.push(u);const f=this.takeNullableSuffixSegment(r,i.nullable,t);return f&&o.push(f),o.length===0?{kind:$e.NO_DIFFS,text:Qe(r,n)}:{kind:$e.PARTIAL_DIFFS,segments:o}}static shouldUseMonolithicTypeLabelHighlight(e){const n=Sa.map(r=>[r,e[r]]).filter(r=>!!r[1]);return n.length===0||n.length===1||!e.type||!e.title||!e.format?!1:new Set(n.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,n,t){const r=[],i=rt((e==null?void 0:e.type)??kn,n.type,t)??(e==null?void 0:e.type)??kn;r.push(String(i));const o=this.resolveWrappedFieldSideText(this.takeMergedFormat(e),n.format,t,this.wrapFormat);o&&r.push(o);const s=this.resolveWrappedFieldSideText(e==null?void 0:e.title,n.title,t,this.wrapTitle);return s&&r.push(s),this.isNullableOnSide(e,n.nullable,t)&&r.push(ti.trim()),r.join(" ")}static buildTypeSideSegment(e,n,t){const r=(e==null?void 0:e.type)??kn,i=rt(r,n,t);return i===void 0?n?void 0:{text:String(r)}:{text:i,diff:n}}static buildWrappedSideSegment(e,n,t,r){const i=this.resolveWrappedFieldSideText(e,n,t,r);if(i!==void 0)return{text:i,diff:n}}static resolveWrappedFieldSideText(e,n,t,r){const i=rt(e,n,t);if(i===void 0)return!n&&this.hasNonBlankText(e)?r(e):void 0;if(this.hasNonBlankText(i))return r(i)}static takeNullableSuffixSegment(e,n,t){if(!(An(e)||!this.isNullableOnSide(e,n,t)))return{text:ti.trim(),diff:n}}static isNullableOnSide(e,n,t){return n&&E(n.data)?t===oe:n&&k(n.data)?t===$:!!(e!=null&&e.nullable)}static takeMergedFormat(e){if(!e||typeof e!="object"||!("format"in e))return;const n=e.format;return typeof n=="string"?n:void 0}static hasNonBlankText(e){return!!e&&e.trim().length>0}static wrapFormat(e){return`(${e})`}static wrapTitle(e){return`<${e}>`}static buildMonolithicTypeLabelDiffMetadata(e){const{data:n}=e;return q(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Yellow}}}:E(n)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Green}}}:k(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class Le{static takeSharedRowDiffs(e){return e.diffs}static takeKindAnyNodeDiffs(e){return e.diffs}static takePropertyRowDiffsForRequired(e){if(e.kind===W.PROPERTY)return e.diffs}static takePropertyRowDiffs(e){return e.diffs}}class cu extends Le{static takeDiff(e){return this.takeSharedRowDiffs(e)[un]??e.diffs[M]}}class mu extends Le{static takeReadOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).readOnly}static takeWriteOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).writeOnly}static takeDeprecatedDiff(e){return this.takeKindAnyNodeDiffs(e).deprecated}static takeRawDiffs(e){const n=this.takeKindAnyNodeDiffs(e),t=this.takePropertyRowDiffsForRequired(e),r={};for(const o of Kn){const s=n[o];s!=null&&s.data&&(r[o]=s.data)}const i=t==null?void 0:t.required;return i!=null&&i.data&&(r.required=Wa.normalizeMetaDiffForDisplay(i)),r}static hasContentChange(e){return Object.keys(this.takeRawDiffs(e)).length>0}}class Wa extends Le{static takeMetaDiff(e){var n;return(n=this.takePropertyRowDiffsForRequired(e))==null?void 0:n.required}static normalizeMetaDiffForDisplay(e){if(!(e!=null&&e.data))return;const n=e.data;return E(n)?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:k(n)?{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}:q(n)?{type:n.type,scope:n.scope,description:n.description,action:L.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths,afterDeclarationPaths:n.afterDeclarationPaths}:n}static takeMetaDiffForDisplay(e){return this.normalizeMetaDiffForDisplay(this.takeMetaDiff(e))}static isVisibleOnSide(e,n,t){if(!n)return e===!0;const r=t===$;return E(n)?!r:k(n)?r:q(n)?r?n.beforeValue===!0:n.afterValue===!0:e===!0}}class yu extends Le{static takeNestingIndicatorRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).nestingIndicatorRowColorizingDiff}static takeNodeChangesSummary(e){return this.takeKindAnyNodeDiffs(e).nodeChangesSummary}static isWholePropertyAddOrRemove(e){const n=e.diffs[M];if(!n)return!1;const{data:t}=n;return t.action==="add"||t.action==="remove"}}class gu extends Le{static takeRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).extensionsRowColorizingDiff}static takeDiffs(e){return this.takeKindAnyNodeDiffs(e).extensionsDiffs}}class pu extends Le{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).customAnnotationDiffs)==null?void 0:t[n]}static takeRowColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).customAnnotationRowColorizingDiffs)==null?void 0:t[n]}static hasAnyDiff(e){const n=this.takeKindAnyNodeDiffs(e);return Object.keys(n.customAnnotationDiffs??{}).length>0||Object.keys(n.customAnnotationRowColorizingDiffs??{}).length>0}static resolveSideEntries(e,n,t){return za.resolveSideEntries(e,n,t)}}class za extends Le{static takeDiff(e){return this.takePropertyRowDiffs(e).default}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).defaultRowColorizingDiff}static resolveSideEntries(e,n,t){if(!n)return e===void 0?[]:[{text:he.formatListDisplayValue(e)}];const r=t===$,{data:i}=n;if(E(i))return r?[]:[{text:he.formatListDisplayValue(i.afterValue??e)}];if(k(i))return r?[{text:he.formatListDisplayValue(i.beforeValue??e)}]:[];if(q(i)){const o=r?i.beforeValue??e:i.afterValue??e;return[{text:he.formatListDisplayValue(o)}]}return e===void 0?[]:[{text:he.formatListDisplayValue(e)}]}}class hu extends Le{static takeDiff(e){return this.takePropertyRowDiffs(e).enumDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).enumValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).enumRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?tn.resolveWholeListSideEntries(e,n,r):tn.resolvePartialListSideEntries(e,t,r)}}class bu extends Le{static takeDiff(e){return this.takePropertyRowDiffs(e).examplesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).examplesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).examplesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?tn.resolveWholeListSideEntries(e,n,r):tn.resolvePartialListSideEntries(e,t,r)}}class vu extends Le{static takeDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?tn.resolveWholeListSideEntries(e,n,r):tn.resolvePartialListSideEntries(e,t,r)}}class $a extends Le{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowDiffs)==null?void 0:t[n]}static takeValueDiffs(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowValueDiffs)==null?void 0:t[n]}static takeColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowColorizingDiffs)==null?void 0:t[n]}static takeValueRangeCrawlDiffs(e){return this.takeKindAnyNodeDiffs(e).valueRangeCrawlDiffs}static hasSemanticDiffs(e,n){if(this.takeDiff(e,n)||this.takeColorizingDiff(e,n))return!0;const t=this.takeValueDiffs(e,n);return t?Object.values(t).some(r=>r!==void 0):!1}static resolveSideEntries(e,n,t,r,i,o){return e===qe.VALUE_RANGE&&(o!=null&&o.crawlDiffs)?this.ValueRange.resolveValueRangeDiffSideEntries(this.ValueRange.resolveValueRangeSideInputFromNodeValue(o.nodeValue),o.crawlDiffs,i,t,r):t?tn.resolveWholeListSideEntries(n,t,i):tn.resolveValidationRowPartialSideEntries(e,n,r,i)}}x($a,"ValueRange",yn);class tn{static resolveCore(e,n,t,r,i,o){const s=t===$,l=new Set,u=[];for(let f=0;f<e.length;f++){const c=r(f),g=c?n==null?void 0:n[c]:void 0,y=he.formatListDisplayValue(e[f]);if(!g||!c){u.push({text:y});continue}if(l.has(c))continue;l.add(c);const{data:p}=g;if(E(p)){s||u.push({text:i(c,p.afterValue??e[f],y),valueDiffKey:c,diff:g});continue}if(k(p)){s&&u.push({text:i(c,p.beforeValue??e[f],y),valueDiffKey:c,diff:g});continue}q(p)&&u.push({text:s?i(c,p.beforeValue??e[f],y):i(c,p.afterValue??e[f],y),valueDiffKey:c,diff:g})}for(const[f,c]of Object.entries(n??{}))!c||l.has(f)||k(c.data)&&s&&(u.push({text:i(f,c.data.beforeValue,he.formatListDisplayValue(c.data.beforeValue)),valueDiffKey:f,diff:c}),l.add(f));return u.sort((f,c)=>o(f.valueDiffKey,f.text)-o(c.valueDiffKey,c.text))}static resolveMergedTextIndex(e,n){for(let t=0;t<e.length;t++)if(he.formatListDisplayValue(e[t])===n)return t;return e.length}static resolveWholeListSideEntries(e,n,t){const r=t===$,{data:i}=n;return E(i)?r?[]:(Array.isArray(i.afterValue)?i.afterValue:e).map(s=>({text:he.formatListDisplayValue(s)})):k(i)?r?(Array.isArray(i.beforeValue)?i.beforeValue:e).map(s=>({text:he.formatListDisplayValue(s)})):[]:q(i)?(r?Array.isArray(i.beforeValue)?i.beforeValue:e:Array.isArray(i.afterValue)?i.afterValue:e).map(s=>({text:he.formatListDisplayValue(s)})):e.map(o=>({text:he.formatListDisplayValue(o)}))}static resolvePartialListSideEntries(e,n,t){return this.resolveCore(e,n,t,r=>String(r),(r,i)=>he.formatListDisplayValue(i),(r,i)=>this.resolveMergedTextIndex(e,i)).map(({text:r,valueDiffKey:i})=>({text:r,valueDiffKey:i}))}static resolveValidationRowChipDisplayText(e,n,t,r){return t===void 0?r:Aa(e,n,t)}static findValidationRowSourceKeyDiffForDisplayIndex(e,n,t){if(n)return Object.keys(n).find(r=>Qr(r,e)===t)}static resolveValidationRowPartialSideEntries(e,n,t,r){return this.resolveCore(n,t,r,i=>this.findValidationRowSourceKeyDiffForDisplayIndex(n,t,i),(i,o,s)=>this.resolveValidationRowChipDisplayText(e,i,o,s),(i,o)=>i!==void 0?Qr(i,n):this.resolveMergedTextIndex(n,o)).map(({text:i,valueDiffKey:o})=>({text:i,valueDiffKey:o}))}static takeValueDiffAtKey(e,n){if(n)return e==null?void 0:e[n]}}class he{static escapeStringDisplayValue(e){return JSON.stringify(e).slice(1,-1)}static formatListDisplayValue(e){return typeof e=="string"?e===""?this.EMPTY_STRING_DISPLAY_VALUE:this.escapeStringDisplayValue(e):typeof e=="object"&&e!==null?JSON.stringify(e,null,2):JSON.stringify(e)}static isEmptyStringDisplayValue(e){return e===this.EMPTY_STRING_DISPLAY_VALUE}}x(he,"EMPTY_STRING_DISPLAY_VALUE","<empty string>");class C{}x(C,"TitleRow",cu),x(C,"MetaFlags",mu),x(C,"RequiredStar",Wa),x(C,"NodeLevel",yu),x(C,"Extensions",gu),x(C,"CustomAnnotations",pu),x(C,"Default",za),x(C,"Enum",hu),x(C,"Examples",bu),x(C,"AllowedAdditionalPropertyNames",vu),x(C,"ValidationRows",$a),x(C,"ListSideEntries",tn),x(C,"Format",he),x(C,"TypeLabel",fu);class on{static isRootNode(e){return e.kind===W.ROOT}static isAdditionalPropertiesNode(e){return e.kind===W.ADDITIONAL_PROPERTIES}static isBooleanAdditionalPropertiesNode(e,n){const t=(n==null?void 0:n._fragment)??e.value();return this.isAdditionalPropertiesNode(e)&&t===!1}static isNestingIndicatorHiddenForPlainNode(e){var n;return ir((n=cn(e.value()))==null?void 0:n.type)}static isNestingIndicatorHiddenForSide(e,n){return ir(C.TypeLabel.resolveTypeSideValue(e,n))}}class Rt{static isOwnerNode(e){if(e.type!==de.COMPLEX)return!1;const n=e.nestedNodes();return n.length===0?!1:on.isRootNode(e)?!0:n.every(t=>this.isNestedKind(t.kind))}static isNestedKind(e){return ha(e)}static resolveNestingIndicatorTitle(e){var r;const t=(r=e.nestedNodes()[0])==null?void 0:r.kind;if(!(!t||!this.isNestedKind(t)))return t}}class Xa extends Rt{static resolveBranchValue(e){var r;const n=e.value();if(n!==null)return typeof n=="boolean"?null:n;const t=(r=e.meta())==null?void 0:r._fragment;return!A(t)||yt(t)?null:t}static resolveLeafStructuralChildren(e){if(e.type===de.SIMPLE)return e.childrenNodes();const n=e.nestedNodes();return n.length>0&&n.every(t=>!this.isNestedKind(t.kind))?n:e.childrenNodes()}}class Qa extends Rt{static resolveSelectedNestedNode(e,n,t){const r=t.get(e.id);if(r){const i=n.find(o=>o.id===r);if(i)return i}return n[0]}static resolveSelectorLevels(e,n){const t=[];let r=e;for(;r&&this.isOwnerNode(r);){const i=r.nestedNodes(),o=this.resolveSelectedNestedNode(r,i,n);if(!o)break;const s=Vl(r);if(t.push({combinerNode:r,nestedNodes:i,selectedNestedNode:o,showSelector:s.showSelector,combinerKindLabel:this.resolveNestingIndicatorTitle(r)}),this.isOwnerNode(o)){r=o;continue}break}return t}static resolveActiveLeafNode(e,n){let t=e;for(;this.isOwnerNode(t);){const r=t.nestedNodes(),i=this.resolveSelectedNestedNode(t,r,n);if(!i)break;t=i}return t}static resolveOptionLeafNode(e){return this.resolveActiveLeafNode(e,this.EMPTY_SELECTIONS)}static applySelection(e,n,t,r){const i=new Map(n);i.set(t,r);const o=new Set(this.resolveSelectorLevels(e,i).map(s=>s.combinerNode.id));for(const s of i.keys())o.has(s)||i.delete(s);return i}}x(Qa,"EMPTY_SELECTIONS",new Map);class Du extends Rt{static resolveOptionTitleSuffix(e){if(!this.isOwnerNode(e))return"";const n=this.resolveNestingIndicatorTitle(e);return n?` (${n})`:""}static buildSelectorOption(e,n,t=Qe(Xa.resolveBranchValue(e),e.meta())+this.resolveOptionTitleSuffix(e)){const r={title:t,node:e,testId:`json-schema-combiner-option-${n}`};if(!De(e))return r;const i=C.NodeLevel.isWholePropertyAddOrRemove(e);return{...r,diffs:e.diffs,...i?{}:{diffsSummary:e.diffsSummary,descendantDiffsSummary:e.descendantDiffsSummary}}}}class ie extends Rt{}x(ie,"Display",Xa),x(ie,"Selection",Qa),x(ie,"NodeDiffs",Du);class Qn{static resolveNextLevelPair(e,n,t){const r=(t==null?void 0:t.flags.before.increaseLevel)??!0,i=(t==null?void 0:t.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(r?e+1:e,0),afterLevel:Math.max(i?n+1:n,0)}}}const Su=new Ua;function wu(a){return a!=null}function Nu(a){return Object.keys(tr).some(e=>!!C.ValidationRows.takeDiff(a,e)||!!C.ValidationRows.takeColorizingDiff(a,e))}class ku{resolveNodeVisibility(e,n){const t=e.value(),r=cn(t),i=Su.resolveNodeVisibility(t,n),o=zi(n),s=o&&(!!(r!=null&&r.description)||!!e.diffs.description),l=o&&(i.showEnumValuesRow||!!C.Enum.takeDiff(e)||!!C.Enum.takeValueDiffs(e)||!!C.Enum.takeRowColorizingDiff(e)),u=o&&(wu(r==null?void 0:r.default)||!!C.Default.takeDiff(e)||!!C.Default.takeRowColorizingDiff(e)),f=o&&(i.showExamplesRow||!!C.Examples.takeDiff(e)||!!C.Examples.takeValueDiffs(e)||!!C.Examples.takeRowColorizingDiff(e)),c=o&&(Ba(t).length>0||Nu(e)),g=o&&(i.showCustomAnnotationsRow||C.CustomAnnotations.hasAnyDiff(e)),y=u||f||l||c||i.showExtensionsRow||g,p=s||i.showDeprecationReasonRow||y;return{...i,showDescription:s,showDefaultRow:u,showExamplesRow:f,showEnumValuesRow:l,showValidationsSection:c,showCustomAnnotationsRow:g,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Mr(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return lu(e,n)}}const Eu=new ku;function Hr(a,e){return Eu.resolveNodeVisibility(a,e)}const Au="markdown-text-row__json-schema-description",Tu="markdown-text-row__json-schema-expander",Vu=a=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:r}=a;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${r} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function xu(a,e,n){if(!e)return{resolvedValue:a,isInvisible:!1};const{data:t}=e,r=n===$;return E(t)?r?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:a,isInvisible:!1}:k(t)?r?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:a,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:q(t)?{resolvedValue:r?typeof t.beforeValue=="string"?t.beforeValue:a:typeof t.afterValue=="string"?t.afterValue:a,isInvisible:!1}:{resolvedValue:a,isInvisible:!1}}function Cu(a){switch(a){case K.body1:return"text-value-body1";case K.h1:case K.h2:case K.h3:case K.h4:case K.h5:case K.h6:return"text-value-body2";case K.body2:default:return"text-value-body2"}}function Ru(a,e){return a===Ve.JsonSchemaDescription?{markdownClassName:Au,expanderClassName:Tu}:{markdownClassName:["text-slate-700",Cu(e)].join(" "),expanderClassName:`text-value-expander ${ps(e)}`.trim()}}const Za=m.memo(a=>{const{value:e,variant:n=K.body2,usage:t,layoutSide:r,diff:i}=a,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>xu(e,i,r),[i,r,e]),f=m.useMemo(()=>o?l:ys(l),[o,l]),c=m.useMemo(()=>gs(l),[l]),g=m.useMemo(()=>Ru(t,n),[t,n]),y=m.useMemo(()=>{if(!(i!=null&&i.data))return[];const w=r===$?i.styles.before:i.styles.after,N=[];return w.textHighlighterColor&&N.push(ne.highlighter(w.textHighlighterColor)),N},[i,r]),p=m.useMemo(()=>["markdown",g.markdownClassName].filter(Boolean).join(" "),[g.markdownClassName]),h=m.useMemo(()=>({p:({children:w})=>d.jsx("p",{children:w})}),[]),b=m.useCallback(()=>{s(w=>!w)},[]);return u||!f?null:d.jsxs("div",{className:`markdown-text-row flex min-w-0 flex-col items-start gap-1 ${y.join(" ")}`,children:[d.jsx(Ts,{className:p,remarkPlugins:[Vs],components:h,children:f}),d.jsx(Vu,{isExpandable:c,expanded:o,onToggle:b,expanderClassName:g.expanderClassName})]})});Za.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const Mu={[Ve.DdlApiProperty]:hs,[Ve.JsonSchemaDescription]:gr},_u={[Ve.DdlApiProperty]:["min-h-[26px]"]};function qu(a){const e=Mu[a]??zn,n=_u[a]??[];return[e,...n].join(" ")}function Hu(a,e,n){return n===Ve.DdlApiProperty?vs.PropertyRow.isContentVisible(a,e):a!=null&&a.data?(e===$?a.styles.before:a.styles.after).isContentVisible??!0:!0}const ft=m.memo(a=>{const{value:e,variant:n=K.body2,layoutSide:t,usage:r=Ve.Default,hideLevelIndicatorWhenSideEmpty:i=!1,diff:o}=a,{[te]:s}=a,l=pr(t),u=r===Ve.DdlApiProperty,f=u||r===Ve.JsonSchemaDescription,c=m.useMemo(()=>Hu(o,t,r),[o,t,r]),g=r===Ve.JsonSchemaDescription&&l===0,y=f&&l>0&&(!i||c),p=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:w}=o,N=[];return t===$&&N.push(ne.background(w.before.backgroundColor)),t===oe&&N.push(ne.background(w.after.backgroundColor)),N},[o,t]),h=m.useMemo(()=>qu(r),[r]),b=d.jsx(Za,{value:e,variant:n,usage:r,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||r===Ve.JsonSchemaDescription?"items-stretch":"",h,...p].filter(Boolean).join(" "),children:[g&&d.jsx(bs,{}),y&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(bt,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):r===Ve.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:b}):b]})});ft.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const dr=m.memo(a=>{const e=Pe(),{diffsSeverities:n,diffsSeverityPlacement:t=H.DescriptionRow}=a,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),i=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>Wn(r==null?void 0:r.causedAt),[r]);switch(e){case Oe:return d.jsx(qn,{diffType:i,diffTypeCause:o,hidden:!1,children:d.jsx(bn,{left:d.jsx(ft,{...a,layoutSide:$}),right:d.jsx(ft,{...a,layoutSide:oe})})});case an:return d.jsx(hn,{content:d.jsx(ft,{...a,layoutSide:oe})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});dr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ou(a){return a?Ge({min:a.minimum,max:a.maximum,exclusiveMin:a.exclusiveMinimum,exclusiveMax:a.exclusiveMaximum}):{data:{},visible:!1}}const Se={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:ve.UNIQUE_ITEMS},ri=[Se.VALUE_LENGTH,Se.VALUE_PATTERN,Se.VALUE_RANGE,Se.VALUE_MULTIPLE_OF,Se.PROPERTIES_COUNT,Se.UNIQUE_ITEMS,Se.ITEMS_COUNT];class ii{static formatBoundRangeChips(e,n,t,r){const i=Ge({min:e,max:n,exclusiveMin:t,exclusiveMax:r});return i.visible?[i.data.lower,i.data.upper].filter(o=>!!o):[]}static formatValueRangeChips(e){const n=Ou(e);return n.visible?[n.data.lower,n.data.upper].filter(t=>!!t):[]}static formatScalar(e){return typeof e=="string"?e:JSON.stringify(e)}static resolve(e){if(!e)return[];const n=[],t=Ga(e),r=this.formatBoundRangeChips(t.minLength,t.maxLength);r.length&&n.push({key:Se.VALUE_LENGTH,label:na,values:r}),t.pattern!==void 0&&n.push({key:Se.VALUE_PATTERN,label:ta,values:[String(t.pattern)]});const i=this.formatValueRangeChips(t);i.length&&n.push({key:Se.VALUE_RANGE,label:ra,values:i}),t.multipleOf!==void 0&&n.push({key:Se.VALUE_MULTIPLE_OF,label:ia,values:[String(t.multipleOf)]});const o=this.formatBoundRangeChips(t.minProperties,t.maxProperties);o.length&&n.push({key:Se.PROPERTIES_COUNT,label:aa,values:o}),t.uniqueItems!==void 0&&n.push({key:Se.UNIQUE_ITEMS,label:oa,values:[String(t.uniqueItems)]});const s=this.formatBoundRangeChips(t.minItems,t.maxItems);return s.length&&n.push({key:Se.ITEMS_COUNT,label:sa,values:s}),n}static resolveListValues(e){return e.map(this.formatScalar)}static sortByType(e){return[...e].sort((n,t)=>ri.indexOf(n.key)-ri.indexOf(t.key))}}const eo=a=>{const{extensions:e,extensionsDiffs:n,extensionsRowColorizingDiff:t,diffsSeverities:r}=a,i=pn(),o=i+1,s=Ce(),l=Pn(),{ExtensionsJsoComponent:u,ExtensionsJsoDiffsComponent:f}=nu(),c=Hn(),g=(c==null?void 0:c.beforeLevel)??i,y=(c==null?void 0:c.afterLevel)??i,{beforeLevel:p,afterLevel:h}=m.useMemo(()=>Qn.resolveNextLevelPair(g,y,t),[g,y,t]),b=!!n&&Object.keys(n).length>0,w=m.useMemo(()=>!b||!l?e:{...e,[l.diffsMetaKey]:n},[l,e,n,b]);return d.jsx(Ie.Provider,{value:o,children:d.jsx(nn,{beforeLevel:p,afterLevel:h,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(Ln,{title:"Extensions",usage:Be.JsonSchema,lastInvisible:!0,diff:t,diffsSeverities:r,diffsSeverityPlacement:H.ExtensionsRow}),l?d.jsx(f,{mergedSource:w,initialLevel:o,displayMode:s,diffMetaKeys:l}):d.jsx(u,{source:e,initialLevel:o})]})})})};eo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""},extensionsDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>"}],raw:"Record<OpenApiExtensionKey, Diff<DiffType>>"}],raw:"Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>"},description:""},extensionsRowColorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const gn=m.memo(a=>{const{layoutSide:e,sideItems:n}=a;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,r)=>{const i=$i(t.diff,e);return d.jsx(Ds,{isVisible:!0,value:t.text,usage:Ss.JsonSchemaValidation,textHighlighterColor:i.textHighlighterColor,borderShadowColor:i.borderShadowColor,isFontMuted:i.isFontMuted,isEmptyStringPlaceholder:C.Format.isEmptyStringDisplayValue(t.text)},`${t.text}-${r}`)})}):null});gn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const ai={valueLength:na,valuePattern:ta,valueRange:ra,valueMultipleOf:ia,propertiesCount:aa,itemsCount:sa,uniqueItems:oa};function Pu(a){return De(a)&&(a.kind===W.PROPERTY||a.kind===W.ROOT)}const Zn=a=>{const{node:e,displayValue:n,isLastInList:t=!1}=a,r=Ce(),i=n??e.value(),o=cn(i),s=Pu(e)?e:void 0,l=De(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?Hr(s,r):Xn(i,r),[r,n,s,i]),f=m.useMemo(()=>l?C.Enum.takeDiff(l):void 0,[l]),c=m.useMemo(()=>l?C.Enum.takeValueDiffs(l):void 0,[l]),g=m.useMemo(()=>l?C.Enum.takeRowColorizingDiff(l):void 0,[l]),y=m.useMemo(()=>l?C.Examples.takeDiff(l):void 0,[l]),p=m.useMemo(()=>l?C.Examples.takeValueDiffs(l):void 0,[l]),h=m.useMemo(()=>l?C.Examples.takeRowColorizingDiff(l):void 0,[l]),b=m.useMemo(()=>l?C.Default.takeDiff(l):void 0,[l]),w=m.useMemo(()=>l?C.Default.takeRowColorizingDiff(l):void 0,[l]),N=m.useMemo(()=>l?C.Extensions.takeDiffs(l):void 0,[l]),V=m.useMemo(()=>l?C.Extensions.takeRowColorizingDiff(l):void 0,[l]),v=$n(e,De),T=m.useMemo(()=>ae(v,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[v]),j=m.useMemo(()=>{const I=ii.resolve(o);if(!l)return I;const B=new Set(I.map(z=>z.key)),U=Object.keys(ai).filter(z=>!B.has(z)).filter(z=>C.ValidationRows.hasSemanticDiffs(l,z)).map(z=>({key:z,label:ai[z],values:[]}));return ii.sortByType([...I,...U])},[l,o]),_=m.useMemo(()=>{var U;if(!on.isAdditionalPropertiesNode(e))return;const I=e.parent,B=cn((I==null?void 0:I.value())??null);return(U=B==null?void 0:B.propertyNames)==null?void 0:U.enum},[e]),J=m.useMemo(()=>l?C.AllowedAdditionalPropertyNames.takeDiff(l):void 0,[l]),O=m.useMemo(()=>l?C.AllowedAdditionalPropertyNames.takeValueDiffs(l):void 0,[l]),P=m.useMemo(()=>l?C.AllowedAdditionalPropertyNames.takeRowColorizingDiff(l):void 0,[l]),Y=r===ts&&!!(_!=null&&_.length),ue=m.useCallback(I=>{const B=C.AllowedAdditionalPropertyNames.resolveSideEntries(_??[],J,O,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(gn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:C.ListSideEntries.takeValueDiffAtKey(O,z)}))})},[_,J,O]),Z=m.useCallback(I=>{const B=C.Enum.resolveSideEntries((o==null?void 0:o.enum)??[],f,c,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(gn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:C.ListSideEntries.takeValueDiffAtKey(c,z)}))})},[f,c,o==null?void 0:o.enum]),se=m.useCallback(I=>{const B=C.Examples.resolveSideEntries((o==null?void 0:o.examples)??[],y,p,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(gn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:C.ListSideEntries.takeValueDiffAtKey(p,z)}))})},[y,p,o==null?void 0:o.examples]),Ye=m.useCallback((I,B)=>U=>{const z=C.CustomAnnotations.resolveSideEntries(I,B,U);return z.length===0?d.jsx(d.Fragment,{}):d.jsx(gn,{layoutSide:U,sideItems:z.map(({text:re})=>({text:re,diff:B}))})},[]),Dn=m.useCallback(I=>{const B=o==null?void 0:o.default,U=C.Default.resolveSideEntries(B,b,I);return U.length===0?d.jsx(d.Fragment,{}):d.jsx(gn,{layoutSide:I,sideItems:U.map(({text:z})=>({text:z,diff:b}))})},[b,o==null?void 0:o.default]),le=m.useCallback((I,B)=>U=>{const z=l?C.ValidationRows.takeDiff(l,I):void 0,re=l?C.ValidationRows.takeValueDiffs(l,I):void 0,Ne=C.ValidationRows.resolveSideEntries(I,B,z,re,U,I===qe.VALUE_RANGE&&l?{nodeValue:i,crawlDiffs:C.ValidationRows.takeValueRangeCrawlDiffs(l)??{}}:void 0);return Ne.length===0?d.jsx(d.Fragment,{}):d.jsx(gn,{layoutSide:U,sideItems:Ne.map(({text:jn,valueDiffKey:nt})=>({text:jn,diff:C.ListSideEntries.takeValueDiffAtKey(re,nt)}))})},[l,i]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(dr,{usage:Ve.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||T.diff)&&d.jsx(dr,{usage:Ve.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...T}),u.showDefaultRow&&d.jsx(wn,{label:"Default",usage:Nn.JsonSchemaValidation,subheader:Dn,colorizingDiff:w,diffsSeverities:b||w?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.DefaultRow}),u.showExamplesRow&&d.jsx(wn,{label:"Examples",usage:Nn.JsonSchemaValidation,subheader:se,diff:y,colorizingDiff:h,diffsSeverities:y||p||h?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.ExamplesRow}),u.showEnumValuesRow&&d.jsx(wn,{label:"Allowed values",usage:Nn.JsonSchemaValidation,subheader:Z,diff:f,colorizingDiff:g,diffsSeverities:f||c||g?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.EnumRow,...Mr(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showCustomAnnotationsRow&&Object.entries((o==null?void 0:o.customAnnotations)??{}).map(([I,B])=>{const U=l?C.CustomAnnotations.takeDiff(l,I):void 0,z=l?C.CustomAnnotations.takeRowColorizingDiff(l,I):void 0;return d.jsx(wn,{label:B.label,usage:Nn.JsonSchemaValidation,subheader:Ye(B.value,U),colorizingDiff:z,diffsSeverities:U||z?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.CustomAnnotationRow},I)}),Y&&d.jsx(wn,{label:xs,usage:Nn.JsonSchemaValidation,subheader:ue,diff:J,colorizingDiff:P,diffsSeverities:J||O||P?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&j.map(I=>{const B=I.key,U=l?C.ValidationRows.takeDiff(l,B):void 0,z=l?C.ValidationRows.takeColorizingDiff(l,B):void 0;return d.jsx(wn,{label:I.label,usage:Nn.JsonSchemaValidation,subheader:le(B,I.values),diff:U,colorizingDiff:z,diffsSeverities:l&&C.ValidationRows.hasSemanticDiffs(l,B)?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:Yi[B]},I.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(eo,{extensions:o.extensions,extensionsDiffs:N,extensionsRowColorizingDiff:V,diffsSeverities:V?v==null?void 0:v.nodeDiffsSeverities:void 0})]})};Zn.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Or=a=>{const{requiredChanged:e,readOnly:n,readOnlyDiff:t,writeOnly:r,writeOnlyDiff:i,deprecated:o,deprecatedDiff:s,requiredDiff:l,layoutSide:u}=a,f=Pe(),c=!!n||!!t,g=!!r||!!i,y=!!o||!!s;return!e&&!c&&!g&&!y?null:d.jsxs("div",{className:"flex flex-row gap-2 justify-between",children:[e&&d.jsx(it,{label:Cs,layoutMode:f,layoutSide:u,diff:l==null?void 0:l.data}),c&&d.jsx(it,{label:Rs,colorSchema:Gr,layoutMode:f,layoutSide:u,diff:t==null?void 0:t.data}),g&&d.jsx(it,{label:Ms,colorSchema:Gr,layoutMode:f,layoutSide:u,diff:i==null?void 0:i.data}),y&&d.jsx(it,{label:_s,colorSchema:qs,layoutMode:f,layoutSide:u,diff:s==null?void 0:s.data})]})};Or.__docgenInfo={description:"",methods:[],displayName:"TagsWithDiffs",props:{requiredChanged:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},readOnlyDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};class no{static buildTagsProps(e){const n=!!e.diffs[M],t=C.RequiredStar.takeMetaDiff(e);return{requiredChanged:!n&&!!t,requiredDiff:t,readOnlyDiff:C.MetaFlags.takeReadOnlyDiff(e),writeOnlyDiff:C.MetaFlags.takeWriteOnlyDiff(e),deprecatedDiff:C.MetaFlags.takeDeprecatedDiff(e)}}static buildRowDiffProps(e){return ae(Ze(e),{resolveDiff:()=>C.TitleRow.takeDiff(e)})}}const Iu="#64748B",to="#94A3B8",rn=m.memo(a=>{const{text:e,color:n,className:t}=a,r=n===void 0?Iu:n;return d.jsx("span",{className:"json-schema-type-value-text",style:r?{color:r}:void 0,children:t?d.jsx("span",{className:t,children:e}):e})});rn.__docgenInfo={description:"Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide\nwhether to render it at all.\n\n`className` (diff/highlighter classes) is applied to an INNER span, not the outer one, so it\nnever becomes a direct flex item of an ancestor `inline-flex` container (e.g.\n`.json-schema-type-value-segments`). A flex item's `display` is CSS-blockified - an `inline`\nbox becomes `block` - which makes `line-height` (not font metrics) determine the painted\nheight of a highlighter background, rendering it ~1px taller than legacy's equivalent\n(`NodeType.tsx`'s `.inline` divs, which stay genuinely inline because they're nested one level\nbelow their `inline-flex` ancestor). Keeping the highlighted element on a non-flex-item\ndescendant reproduces legacy's inline box-painting exactly.",methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const ro=m.memo(a=>{const{value:e,meta:n,suffix:t}=a;return d.jsxs(d.Fragment,{children:[d.jsx(rn,{text:Qe(e,n)}),t&&d.jsx(rn,{text:t})]})});ro.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `JsonSchemaCombiner.NodeDiffs.resolveOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const ur=m.memo(a=>{const{text:e,diff:n,layoutSide:t,color:r}=a,i=$i(n,t),o=[ne.highlighter(i.textHighlighterColor),ne.background(i.backgroundColor)].filter(Boolean).join(" ");return d.jsx(rn,{text:e,color:r,className:o||void 0})});ur.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const Mt=m.memo(a=>{const{display:e,layoutSide:n,color:t}=a;return e.kind===$e.NO_DIFFS?d.jsx(rn,{text:e.text,color:t}):e.kind===$e.WHOLE_DIFFS?d.jsx(ur,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center",children:e.segments.map((r,i)=>d.jsx(ur,{text:r.text,diff:r.diff,layoutSide:n,color:t},`${r.text}-${i}`))})});Mt.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const io=m.memo(a=>{const{node:e,meta:n,layoutSide:t,suffix:r}=a,i=C.TypeLabel.resolveSideDisplay(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(Mt,{display:i,layoutSide:t}),r&&d.jsx(rn,{text:r})]})});io.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const ao=a=>{const{value:e,meta:n,isCycle:t,layoutSide:r,showTypeLabel:i=!0,typeValueSuffix:o}=a;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(ro,{value:e,meta:n,suffix:o}),t&&d.jsx(Sr,{text:la,children:d.jsx(da,{})}),d.jsx(Or,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:r})]})},oo=a=>{const{meta:e,node:n,isCycle:t,layoutSide:r,showTypeLabel:i=!0,typeValueSuffix:o}=a,s=no.buildTagsProps(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[i&&d.jsx(io,{node:n,meta:e,layoutSide:r,suffix:o}),t&&d.jsx(Sr,{text:la,children:d.jsx(da,{})}),d.jsx(Or,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:r,...s})]})};ao.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:'See JsonSchemaTitleRowTypeValue\'s `suffix` prop - combiner-kind suffix, e.g. " (anyOf)".'}}};oo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const _e={BADGE:"badge",TEXT:"text"},Lu="Type: ",oi="additional property",ju="no additional properties",Ju="additional item",Fu="item";class Ku{static resolveDisplay(e){const{node:n,meta:t,headerRowTitle:r}=e,i=n.kind;return on.isRootNode(n)?{variant:_e.TEXT,text:r??Lu}:i===W.ADDITIONAL_PROPERTIES?((t==null?void 0:t._fragment)??n.value())===!1?{variant:_e.BADGE,text:ju,badgeKind:rs}:{variant:_e.BADGE,text:oi,badgeKind:tt}:i===W.PATTERN_PROPERTY?{variant:_e.BADGE,text:oi,badgeKind:tt}:i===W.ITEMS?{variant:_e.BADGE,text:Fu,badgeKind:tt}:i===W.ADDITIONAL_ITEMS?{variant:_e.BADGE,text:Ju,badgeKind:tt}:i===W.ITEM?{variant:_e.TEXT,text:`[${String(n.key)}]`}:{variant:_e.TEXT,text:String(n.key)}}}const so=a=>{const{required:e,requiredDiff:n,layoutSide:t}=a,r=Pe(),{isSideBySideDiffsLayoutMode:i}=is(r);return t===void 0||!(i?C.RequiredStar.isVisibleOnSide(e,n,t):e)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};so.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const lo="text-xs text-black font-Inter-Medium",uo=a=>{const{display:e,required:n=!1}=a;switch(e.variant){case _e.BADGE:return d.jsx(Fi,{kind:e.badgeKind,text:e.text,inline:!0});case _e.TEXT:return d.jsxs("div",{className:`inline ${lo}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},fo=a=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:r}=a;switch(e.variant){case _e.BADGE:return d.jsx(Fi,{kind:e.badgeKind,text:e.text,inline:!0});case _e.TEXT:return d.jsxs("div",{className:`inline ${lo}`,children:[e.text,d.jsx(so,{required:n,requiredDiff:t,layoutSide:r})]})}};uo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};fo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: typeof JsonSchemaNodeTitleVariants.BADGE; text: string; badgeKind: BadgeKind }
| { variant: typeof JsonSchemaNodeTitleVariants.TEXT; text: string }`,elements:[{name:"signature",type:"object",raw:"{ variant: typeof JsonSchemaNodeTitleVariants.BADGE; text: string; badgeKind: BadgeKind }",signature:{properties:[{key:"variant",value:{name:"JsonSchemaNodeTitleVariants.BADGE",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:"{ variant: typeof JsonSchemaNodeTitleVariants.TEXT; text: string }",signature:{properties:[{key:"variant",value:{name:"JsonSchemaNodeTitleVariants.TEXT",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Gu(a){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:i,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=a,u=kr(),f=e.meta(),c=cn(t??n.value()),g=n.meta(),y=m.useMemo(()=>Mr(i,r),[r,i]),p=m.useMemo(()=>Ku.resolveDisplay({node:e,meta:f,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,f,e]),h=m.useMemo(()=>w=>{const N=Xi(l);return(N?Qi(N,w):ws(l,w))?s?d.jsx(fo,{display:p,required:f==null?void 0:f.required,requiredDiff:o,layoutSide:w}):d.jsx(uo,{display:p,required:f==null?void 0:f.required}):null},[f==null?void 0:f.required,o,p,l,s]),b=m.useMemo(()=>!on.isBooleanAdditionalPropertiesNode(n,g),[g,n]);return{displayValueResolved:c,displayMeta:g,listLastRowFlags:y,titleContent:h,showTypeSubheader:b}}const Pr=a=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:f,withRequiredDiffIndicator:c=!1,renderSubheader:g,[te]:y}=a,{displayValueResolved:p,displayMeta:h,listLastRowFlags:b,titleContent:w,showTypeSubheader:N}=Gu({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:i,requiredDiff:f,withRequiredDiffIndicator:c,titleRowDiff:u==null?void 0:u.diff});return d.jsx(me,{...b,"data-precededby":y,titleContent:w,expandable:o,expanded:s,isRoot:on.isRootNode(e),onClickExpander:o?l:void 0,variant:K.body2,subheader:V=>g({layoutSide:V,displayValueResolved:p,displayMeta:h,displayNode:n,showTypeSubheader:N}),usage:Nt.JsonSchemaProperty,...u})};Pr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
  readonly showCustomAnnotationsRow: boolean
  readonly showContentSection: boolean
  readonly showAnyAdditionalInfoRow: boolean
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showCustomAnnotationsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},titleRowDiffProps:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`WithPrecededByProps & WithDdlListLastRowProps & {
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Ir=a=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,typeValueSuffix:u,...f}=a;return d.jsx(Pr,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:c,displayValueResolved:g,displayMeta:y,displayNode:p,showTypeSubheader:h})=>d.jsx(ao,{value:g,meta:y,isCycle:p.isCycle,layoutSide:c,showTypeLabel:h,typeValueSuffix:u})})};Ir.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
  readonly showCustomAnnotationsRow: boolean
  readonly showContentSection: boolean
  readonly showAnyAdditionalInfoRow: boolean
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showCustomAnnotationsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const co=m.memo(a=>{const{node:e}=a,n=ie.Selection.resolveOptionLeafNode(e),t=Qe(ie.Display.resolveBranchValue(n),n.meta())+ie.NodeDiffs.resolveOptionTitleSuffix(e);return d.jsx(rn,{text:t,color:null})});co.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`JsonSchemaCombiner.Selection.resolveOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const si=new Set;function _t(a){const{options:e,selectedOption:n,onSelectOption:t,variant:r,layoutSide:i=oe}=a;return e.length===0?null:d.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=Bu({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:i});if(l)return null;const u=s.join(" "),f=typeof o.title=="function"?o.title(i):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${r} ${n===o?"selected":""} ${u}`,onClick:c=>{c.preventDefault(),c.stopPropagation(),t(o)},children:f},o.node.id)})})}function Bu(a){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:r}=a,i=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[M];if(s){const{styles:l}=s;switch(r){case $:s.inherited||i.push(ne.borderShadow(l.before.borderShadowColor)),o=s.data.action===L.add;break;case oe:s.inherited||i.push(ne.borderShadow(l.after.borderShadowColor)),o=s.data.action===L.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??si,u=t??si,f=new Set([...l,...u]),c=as(f);i.push(c?ne.roundMarker(c):"")}}return{diffsRelatedClassesList:i,isInvisible:o}}_t.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var qt=(a=>(a.Primary="primary",a.Secondary="secondary",a))(qt||{});function Uu(a,e){if(!a)return"";const n=e===$?a.styles.before.backgroundColor:a.styles.after.backgroundColor;return ne.background(n)}const Yu=m.memo(a=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:r,layoutSide:i,levelReductionAction:o}=a,s=pr(i),l=m.useMemo(()=>Ya(s,i,o),[s,i,o]),u=m.useMemo(()=>Uu(r,i),[i,r]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${gr} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(bt,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(_t,{options:e,selectedOption:n,onSelectOption:t,variant:qt.Secondary,layoutSide:i})})]})}),Wt=m.memo(a=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=a;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(Bn,{title:e,usage:Be.JsonSchema,lastInvisible:!0,layoutSide:a.layoutSide,diff:t,levelReductionAction:a.levelReductionAction}),n&&d.jsx(Yu,{...a})]})}),Lr=m.memo(a=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=a,r=Pe(),i=m.useMemo(()=>t==null?void 0:t[H.TitleRow],[t]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>Wn(i==null?void 0:i.causedAt),[i]);if(!n&&!e)return null;switch(r){case Oe:return d.jsx(qn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(bn,{left:d.jsx(Wt,{...a,layoutSide:$}),right:d.jsx(Wt,{...a,layoutSide:oe})})});case an:return d.jsx(hn,{content:d.jsx(Wt,{...a,layoutSide:oe})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",r,") is not supported."]})});Lr.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};const mo=a=>{const{node:e,isLastInList:n=!1,[te]:t}=a,r=Ce(),i=pn(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Ct(),u=e.nestedNodes(),[f,c]=m.useState(()=>new Map),g=m.useMemo(()=>ie.Selection.resolveSelectorLevels(e,f),[e,f]),y=m.useMemo(()=>ie.Selection.resolveActiveLeafNode(e,f),[e,f]),p=m.useMemo(()=>ie.Display.resolveBranchValue(y),[y]),h=m.useMemo(()=>Xn(p,r),[p,r]),b=m.useMemo(()=>ie.Display.resolveLeafStructuralChildren(y),[y,l]),w=m.useMemo(()=>b.length>0,[b.length]),N=m.useMemo(()=>e.isCycle||b.length===0?!1:xt(y,{expandedDepth:o,level:i}),[e.isCycle,y,o,b.length,i]),V=m.useMemo(()=>we(y,N),[y,N,l]),[v,T]=m.useState(V),j=m.useRef(y.id);m.useEffect(()=>{if(j.current!==y.id){j.current=y.id,T(we(y,N));return}T(le=>we(y,le))},[y,N,l]);const _=m.useCallback(()=>{T(le=>{const I=!le;return I&&s(y),we(y,I)})},[y,s]),J=m.useMemo(()=>Qe(p,y.meta()),[y,p]),O=m.useMemo(()=>ie.NodeDiffs.resolveOptionTitleSuffix(e),[e]),P=Hn(),Y=(P==null?void 0:P.beforeLevel)??i,ue=(P==null?void 0:P.afterLevel)??i,{beforeLevel:Z,afterLevel:se}=m.useMemo(()=>Qn.resolveNextLevelPair(Y,ue,void 0),[Y,ue]),Ye=m.useCallback((le,I)=>{c(B=>ie.Selection.applySelection(e,B,le.id,I.node.id))},[e]);if(u.length===0)return null;const Dn=v&&b.length>0;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Ir,{"data-precededby":t,ownerNode:e,displayNode:y,displayValue:p,contentVisibility:h,isLastInList:n&&!h.showContentSection&&!w,expandable:w,expanded:v,typeValueSuffix:O,onClickExpander:_}),d.jsx(Zn,{node:y,displayValue:p,isLastInList:n&&!w&&g.every(le=>!le.showSelector)}),d.jsx(Ie.Provider,{value:i+1,children:d.jsxs(nn,{beforeLevel:Z,afterLevel:se,children:[g.map(le=>{const I=le.nestedNodes.map((U,z)=>ie.NodeDiffs.buildSelectorOption(U,z,()=>d.jsx(co,{node:U}))),B=I.find(U=>U.node.id===le.selectedNestedNode.id)??I[0]??null;return d.jsx(Lr,{combinerKindLabel:le.combinerKindLabel,showSelector:le.showSelector,options:I,selectedOption:B,onSelectOption:U=>Ye(le.combinerNode,U)},le.combinerNode.id)}),Dn&&d.jsxs(d.Fragment,{children:[d.jsx(Ln,{title:J,usage:Be.JsonSchema,lastInvisible:!0}),b.map((le,I)=>d.jsx(Ht,{"data-precededby":R.JSON_SCHEMA_PROPERTY,node:le,isLastInList:I===b.length-1},le.id))]})]})})]})};mo.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const yo=m.memo(a=>{const{node:e}=a;return on.isNestingIndicatorHiddenForPlainNode(e)?null:d.jsx(rn,{text:Qe(e.value(),e.meta()),color:to})});yo.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const go=a=>{const{node:e,isLastInList:n=!1,[te]:t}=a,r=Ce(),i=pn(),o=kr(),{expandedDepth:s,materializeChildren:l,treeRevision:u}=Ct(),f=m.useMemo(()=>Xn(e.value(),r),[r,e]),c=m.useMemo(()=>e.childrenNodes(),[e,u]),g=m.useMemo(()=>_r(e),[e,u]),y=m.useMemo(()=>xt(e,{expandedDepth:s,level:i}),[s,i,e]),p=m.useMemo(()=>we(e,y),[y,e,u]),[h,b]=m.useState(p);m.useEffect(()=>{b(P=>we(e,P))},[e,u]);const w=m.useCallback(()=>{b(P=>{const Y=!P;return Y&&l(e),we(e,Y)})},[l,e]),N=!!(o!=null&&o.suppressRootNestingIndicator)&&on.isRootNode(e)&&!f.showExtensionsRow&&c.length>0,V=N||!g||h,v=m.useCallback(()=>d.jsx(yo,{node:e}),[e]),T=Hn(),j=(T==null?void 0:T.beforeLevel)??i,_=(T==null?void 0:T.afterLevel)??i,{beforeLevel:J,afterLevel:O}=m.useMemo(()=>Qn.resolveNextLevelPair(j,_,void 0),[j,_]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[!N&&d.jsx(Ir,{"data-precededby":t,ownerNode:e,contentVisibility:f,isLastInList:n,expandable:g,expanded:h,onClickExpander:w}),V&&d.jsxs(d.Fragment,{children:[d.jsx(Zn,{node:e,isLastInList:n&&c.length===0}),c.length>0&&d.jsx(Ie.Provider,{value:i+1,children:d.jsxs(nn,{beforeLevel:J,afterLevel:O,children:[!N&&d.jsx(Ln,{title:v,usage:Be.JsonSchema,lastInvisible:!0}),c.map((P,Y)=>d.jsx(Ht,{"data-precededby":R.JSON_SCHEMA_PROPERTY,node:P,isLastInList:Y===c.length-1},P.id))]})})]})]})};go.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ht=a=>{const{node:e}=a;return ie.isOwnerNode(e)?d.jsx(mo,{...a}):d.jsx(go,{...a})};Ht.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ot=m.memo(a=>a.schema===null||a.schema===void 0?null:d.jsx(xn,{fallback:e=>d.jsx(Cn,{componentName:"JSON Schema Viewer",caught:e}),children:d.jsx(Wu,{...a})})),Wu=a=>{const{schema:e,expandedDepth:n=Ki,displayMode:t=_n,devMode:r=!1,initialLevel:i=0,customizationOptions:o}=a,s=m.useMemo(()=>Ue(r),[r]),l=m.useMemo(()=>new ba({source:e,materializeDepth:n-i+1,logger:s}),[e,n,i,s]),u=m.useMemo(()=>l.build(),[l]),[f,c]=m.useReducer(b=>b+1,0),g=m.useCallback(b=>{l.materializeChildren(b),c()},[l]),y=m.useMemo(()=>({expandedDepth:n,materializeChildren:g,treeRevision:f}),[n,g,f]),p=m.useMemo(()=>({ExtensionsJsoComponent:xr,ExtensionsJsoDiffsComponent:Cr}),[]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const h=u.root;return h?d.jsx(Rr.Provider,{value:p,children:d.jsx(qr.Provider,{value:y,children:d.jsx(Nr.Provider,{value:o,children:d.jsx(Rn.Provider,{value:t,children:d.jsx(Mn.Provider,{value:an,children:d.jsx(Ie.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-viewer",children:d.jsx(Ht,{node:h})})})})})})})}):null};Ot.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
  /**
   * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
   * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
   * of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]}},description:""}}};function po(a,e){return a.isCycle?!1:_r(a)?e.hideUnchangedNodes?e.isRoot||a.kind===W.ROOT?!0:Ta(a):e.level<e.expandedDepth:!0}const zt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}};class li{static buildCombinerSyntheticReplaceDiff(e){return e&&q(e.data)?{...e,styles:zt}:{data:{type:Ji,action:L.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:zt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe}}static buildNodeDiffsSeverityFromChangedProperty(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||q(n)?t.causedAt=n.beforeDeclarationPaths[0]??[]:E(n)&&(t.causedAt=n.afterDeclarationPaths[0]??[]),t}static buildNodeDiffsSeverityFromDiff(e){return this.buildNodeDiffsSeverityFromChangedProperty({data:e,styles:zt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:xe})}static collectChangedPropertyMetaData(e,n){if(!(!e||typeof e!="object")){if(yr(e)){n.push(e);return}for(const t of Object.values(e))this.collectChangedPropertyMetaData(t,n)}}static maxNodeDiffsSeverity(...e){let n;for(const t of e)t&&(!n||ce.compareDiffTypes(t.type,n.type)>0)&&(n=t);return n}static resolveUniformNestedNodesAction(e){const n=e.nestedNodes();if(n.length===0)return;let t;for(const r of n){if(!De(r))return;const i=r.diffs[M],o=i&&E(i.data)?L.add:i&&k(i.data)?L.remove:void 0;if(!o)return;if(!t){t=o;continue}if(t!==o)return}return t}static resolveCombinerSelectorLevelReductionAction(e){if(De(e)&&!C.NodeLevel.isWholePropertyAddOrRemove(e))return this.resolveUniformNestedNodesAction(e)}static nestedNodeHasDiffSignals(e){return e.diffsSummary.size>0||e.descendantDiffsSummary.size>0||Object.keys(e.diffs).length>0||Object.keys(e.descendantDiffs).length>0}static hasCombinerOwnerChanges(e){return De(e)?e.diffsSummary.size>0||Object.keys(e.descendantDiffs).length>0||e.descendantDiffsSummary.size>0?!0:e.nestedNodes().some(n=>De(n)&&this.nestedNodeHasDiffSignals(n)):!1}static buildCombinerSelectorRowDiff(e){if(!(!De(e)||!this.hasCombinerOwnerChanges(e)))return this.buildCombinerSyntheticReplaceDiff(e.diffs[M])}static buildCombinerSelectorRowDiffsSeverities(e){if(!De(e)||!this.hasCombinerOwnerChanges(e))return;const n=[];for(const s of Object.values(e.diffsSeverities))s&&n.push(s);for(const s of Object.values(e.descendantDiffs))s&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));for(const s of e.nestedNodes()){if(!De(s))continue;for(const f of Object.values(s.diffsSeverities))f&&n.push(f);const l=[];for(const f of Object.values(s.diffs))this.collectChangedPropertyMetaData(f,l);for(const f of l)n.push(this.buildNodeDiffsSeverityFromChangedProperty(f));const u=this.maxDiffType([...s.diffsSummary,...s.descendantDiffsSummary]);u&&n.push({type:u,causedAt:[]})}const t=e.diffs[M];t&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(t));const r=[];for(const s of Object.values(e.diffs))this.collectChangedPropertyMetaData(s,r);for(const s of r)n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));const i=this.maxDiffType([...e.diffsSummary,...e.descendantDiffsSummary]);i&&n.push({type:i,causedAt:[]});const o=this.maxNodeDiffsSeverity(...n);if(!o){const s=this.buildCombinerSyntheticReplaceDiff(t);return{[H.TitleRow]:this.buildNodeDiffsSeverityFromDiff(s.data)}}return{[H.TitleRow]:o}}static maxDiffType(e){let n;for(const t of e)(!n||ce.compareDiffTypes(t,n)>0)&&(n=t);return n}static resolveCombinerSelectorRowPresentation(e){if(De(e)){const n=C.NodeLevel.takeNestingIndicatorRowColorizingDiff(e);if(n){const t=e.diffsSeverities[H.NestingIndicatorRow];return{selectorRowDiff:n,diffsSeverities:t?{[H.TitleRow]:t}:void 0}}}return{selectorRowDiff:this.buildCombinerSelectorRowDiff(e),diffsSeverities:this.buildCombinerSelectorRowDiffsSeverities(e)}}}const ho="show-all",zu="show-only-changed-nodes";function $u(a){return a?zu:ho}function Xu(a){return a!==ho}const jr=m.createContext(null);function Qu(){const a=m.useContext(jr);if(!a)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaDiffsViewer");return a}function bo(){return m.useContext(jr)}function Zu(a){const[e,n]=m.useState(()=>new Set),t=m.useCallback(r=>{n(i=>{if(i.has(r))return i;const o=new Set(i);return o.add(r),o})},[]);return m.useMemo(()=>({mode:a,hideUnchangedNodes:Xu(a),revealedBlockIds:e,revealBlock:t}),[a,e,t])}const vo=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));vo.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function di(a){return a===1?"Show 1 unchanged node":`Show ${a} unchanged nodes`}const ct=m.memo(a=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:r,level:i,[te]:o}=a,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":r,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[i>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(bt,{level:i}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(os,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(Sr,{text:di(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":di(n),onClick:s,children:d.jsx(vo,{})})})})]})});ct.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Do=m.memo(a=>{const e=Pe(),n=pn();switch(e){case Oe:return d.jsx(bn,{left:d.jsx(ct,{...a,layoutSide:"before",level:n}),right:d.jsx(ct,{...a,layoutSide:"after",level:n})});case an:return d.jsx(hn,{content:d.jsx(ct,{...a,layoutSide:"after",level:n})});default:return null}});Do.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Jr=a=>{const{children:e}=a,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:r}=Qu(),{visibleSequence:i}=m.useMemo(()=>dd(e,{hideUnchangedNodes:n}),[e,n]);return d.jsx(d.Fragment,{children:i.map((o,s)=>{const l=s===i.length-1;return o.kind==="placeholder"?t.has(o.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(o.sourceIndex,o.sourceIndex+o.blockSize).map((u,f)=>d.jsx(Vn,{"data-precededby":R.JSON_SCHEMA_PROPERTY,node:u,isLastInList:l&&f===o.blockSize-1},u.id))},o.unchangedBlockId):d.jsx(Do,{unchangedBlockId:o.unchangedBlockId,count:o.blockSize,onReveal:r},o.unchangedBlockId):d.jsx(Vn,{"data-precededby":R.JSON_SCHEMA_PROPERTY,node:o.node,isLastInList:l},o.node.id)})})};Jr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};const Fr=a=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:i=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,typeValueSuffix:f,...c}=a,g=m.useMemo(()=>u??no.buildRowDiffProps(n),[n,u]),y=m.useMemo(()=>C.RequiredStar.takeMetaDiffForDisplay(e),[e]),p=Pe(),h=m.useMemo(()=>C.NodeLevel.takeNodeChangesSummary(n),[n]),b=!s&&o&&p===Oe&&!!h&&h.size>0;return d.jsx(Pr,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:i,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:g,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:w,displayMeta:N,displayNode:V,showTypeSubheader:v})=>Qi(Xi(g.diff),w)?d.jsxs(d.Fragment,{children:[d.jsx(oo,{meta:N,node:n,isCycle:V.isCycle,layoutSide:w,showTypeLabel:v,typeValueSuffix:f}),b&&d.jsx(ea,{values:Array.from(h)})]}):d.jsx(d.Fragment,{})})};Fr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
  readonly showCustomAnnotationsRow: boolean
  readonly showContentSection: boolean
  readonly showAnyAdditionalInfoRow: boolean
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showCustomAnnotationsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},titleRowDiffProps:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`WithPrecededByProps & WithDdlListLastRowProps & {
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const So=m.memo(a=>{const{node:e,layoutSide:n}=a,t=ie.Selection.resolveOptionLeafNode(e),r=C.TypeLabel.resolveSideDisplay(t,t.meta(),n),i=ie.NodeDiffs.resolveOptionTitleSuffix(e);return d.jsxs(d.Fragment,{children:[d.jsx(Mt,{display:r,layoutSide:n,color:null}),i&&d.jsx(rn,{text:i,color:null})]})});So.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function ef(a){return a.kind===W.PROPERTY}const wo=a=>{const{node:e,isLastInList:n=!1,[te]:t}=a,r=Ce(),i=pn(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Ct(),u=bo(),f=e.nestedNodes(),[c,g]=m.useState(()=>new Map),y=m.useMemo(()=>ie.Selection.resolveSelectorLevels(e,c),[e,c]),p=m.useMemo(()=>ie.Selection.resolveActiveLeafNode(e,c),[e,c]),h=m.useMemo(()=>ie.Display.resolveBranchValue(p),[p]),b=ef(p)?p:void 0,w=m.useMemo(()=>b?Hr(b,r):Xn(h,r),[h,b,r]),N=m.useMemo(()=>ie.Display.resolveLeafStructuralChildren(p),[p,l]),V=m.useMemo(()=>N.length>0,[N.length]),v=m.useMemo(()=>e.isCycle||N.length===0?!1:u!=null&&u.hideUnchangedNodes?po(p,{expandedDepth:o,level:i,hideUnchangedNodes:!0}):xt(p,{expandedDepth:o,level:i}),[e.isCycle,p,u==null?void 0:u.hideUnchangedNodes,o,N.length,i]),T=m.useMemo(()=>we(p,v),[p,v,l]),[j,_]=m.useState(T),J=m.useRef(p.id);m.useEffect(()=>{if(J.current!==p.id){J.current=p.id,_(we(p,v));return}_(re=>we(p,re))},[p,v,l]);const O=m.useCallback(()=>{_(re=>{const Ne=!re;return Ne&&s(p),we(p,Ne)})},[p,s]),P=m.useMemo(()=>Qe(h,p.meta()),[p,h]),Y=m.useMemo(()=>ie.NodeDiffs.resolveOptionTitleSuffix(e),[e]),ue=m.useMemo(()=>C.NodeLevel.takeNestingIndicatorRowColorizingDiff(p),[p]),Z=Hn(),se=(Z==null?void 0:Z.beforeLevel)??i,Ye=(Z==null?void 0:Z.afterLevel)??i,Dn=m.useMemo(()=>C.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),{beforeLevel:le,afterLevel:I}=m.useMemo(()=>Qn.resolveNextLevelPair(se,Ye,Dn),[se,Ye,Dn]),B=m.useCallback((re,Ne)=>{g(jn=>ie.Selection.applySelection(e,jn,re.id,Ne.node.id))},[e]);if(f.length===0)return null;const U=j&&N.length>0,z=!!u;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Fr,{"data-precededby":t,ownerNode:e,displayNode:p,displayValue:h,contentVisibility:w,isLastInList:n&&!w.showContentSection&&!V,expandable:V,expanded:j,onClickExpander:O,typeValueSuffix:Y}),d.jsx(Zn,{node:p,displayValue:h,isLastInList:n&&!V&&y.every(re=>!re.showSelector)}),d.jsx(Ie.Provider,{value:i+1,children:d.jsxs(nn,{beforeLevel:le,afterLevel:I,children:[y.map(re=>{const Ne=re.nestedNodes.map((Sn,Po)=>ie.NodeDiffs.buildSelectorOption(Sn,Po,Io=>d.jsx(So,{node:Sn,layoutSide:Io}))),jn=Ne.find(Sn=>Sn.node.id===re.selectedNestedNode.id)??Ne[0]??null,nt=li.resolveCombinerSelectorRowPresentation(re.combinerNode),Oo=li.resolveCombinerSelectorLevelReductionAction(re.combinerNode);return d.jsx(Lr,{combinerKindLabel:re.combinerKindLabel,showSelector:re.showSelector,options:Ne,selectedOption:jn,onSelectOption:Sn=>B(re.combinerNode,Sn),selectorRowDiff:nt.selectorRowDiff,diffsSeverities:nt.diffsSeverities,levelReductionAction:Oo},re.combinerNode.id)}),U&&d.jsxs(d.Fragment,{children:[d.jsx(Ln,{title:P,usage:Be.JsonSchema,lastInvisible:!0,diff:ue,diffsSeverities:p.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),z?d.jsx(Jr,{children:N}):N.map((re,Ne)=>d.jsx(Vn,{"data-precededby":R.JSON_SCHEMA_PROPERTY,node:re,isLastInList:Ne===N.length-1},re.id))]})]})})]})};wo.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const No=m.memo(a=>{const{node:e,meta:n,layoutSide:t}=a;if(on.isNestingIndicatorHiddenForSide(e,t))return null;const r=C.TypeLabel.resolveSideDisplay(e,n,t);return d.jsx(Mt,{display:r,layoutSide:t,color:to})});No.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function nf(a){return a.kind===W.PROPERTY}const ko=a=>{const{node:e,isLastInList:n=!1,[te]:t}=a,r=Ce(),i=pn(),o=kr(),{expandedDepth:s,materializeChildren:l,treeRevision:u}=Ct(),f=nf(e)?e:void 0,c=bo(),g=m.useMemo(()=>f?Hr(f,r):Xn(e.value(),r),[r,e,f]),y=m.useMemo(()=>e.childrenNodes(),[e,u]),p=m.useMemo(()=>_r(e),[e,u]),h=m.useMemo(()=>c!=null&&c.hideUnchangedNodes?po(e,{expandedDepth:s,level:i,hideUnchangedNodes:!0,isRoot:e.kind===W.ROOT}):xt(e,{expandedDepth:s,level:i}),[s,i,e,c==null?void 0:c.hideUnchangedNodes]),b=m.useMemo(()=>we(e,h),[h,e,u]),[w,N]=m.useState(b);m.useEffect(()=>{N(Z=>we(e,Z))},[e,u]);const V=m.useCallback(()=>{N(Z=>{const se=!Z;return se&&l(e),we(e,se)})},[l,e]),v=!!(o!=null&&o.suppressRootNestingIndicator)&&on.isRootNode(e)&&!g.showExtensionsRow&&y.length>0,T=v||!p||w,j=m.useCallback(Z=>d.jsx(No,{node:e,meta:e.meta(),layoutSide:Z}),[e]),_=m.useMemo(()=>C.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),J=Hn(),O=(J==null?void 0:J.beforeLevel)??i,P=(J==null?void 0:J.afterLevel)??i,{beforeLevel:Y,afterLevel:ue}=m.useMemo(()=>Qn.resolveNextLevelPair(O,P,_),[O,P,_]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[!v&&d.jsx(Fr,{"data-precededby":t,ownerNode:e,contentVisibility:g,isLastInList:n,expandable:p,expanded:w,onClickExpander:V}),T&&d.jsxs(d.Fragment,{children:[d.jsx(Zn,{node:e,isLastInList:n&&y.length===0}),y.length>0&&d.jsx(Ie.Provider,{value:i+1,children:d.jsxs(nn,{beforeLevel:Y,afterLevel:ue,children:[!v&&d.jsx(Ln,{title:j,usage:Be.JsonSchema,lastInvisible:!0,diff:_,diffsSeverities:e.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),c?d.jsx(Jr,{children:y}):y.map((Z,se)=>d.jsx(Vn,{"data-precededby":R.JSON_SCHEMA_PROPERTY,node:Z,isLastInList:se===y.length-1},Z.id))]})})]})]})};ko.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Vn=a=>{const{node:e}=a;return ie.isOwnerNode(e)?d.jsx(wo,{...a}):d.jsx(ko,{...a})};Vn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Pt=m.memo(a=>a.schema===null||a.schema===void 0?null:d.jsx(xn,{fallback:e=>d.jsx(Cn,{componentName:"JSON Schema Diffs Viewer",caught:e}),children:d.jsx(tf,{...a})})),tf=a=>{const{schema:e,expandedDepth:n=Ki,displayMode:t=_n,devMode:r=!1,initialLevel:i=0,customizationOptions:o,diffMetaKeys:s,hideUnchangedNodes:l=!0}=a,u=m.useMemo(()=>$u(l),[l]),f=Zu(u),c=m.useMemo(()=>Ue(r),[r]),g=m.useMemo(()=>new sd({source:e,materializeDepth:n-i+1,diffsMetaKeys:s,logger:c}),[e,n,i,s,c]),y=m.useMemo(()=>g.build(),[g]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",y);const[p,h]=m.useReducer(v=>v+1,0),b=m.useCallback(v=>{g.materializeChildren(v),h()},[g]),w=m.useMemo(()=>({expandedDepth:n,materializeChildren:b,treeRevision:p}),[n,b,p]),N=m.useMemo(()=>({ExtensionsJsoComponent:xr,ExtensionsJsoDiffsComponent:Cr}),[]),V=y.root;return V?d.jsx(Rr.Provider,{value:N,children:d.jsx(Dr.Provider,{value:s,children:d.jsx(jr.Provider,{value:f,children:d.jsx(qr.Provider,{value:w,children:d.jsx(Nr.Provider,{value:o,children:d.jsx(Rn.Provider,{value:t,children:d.jsx(Mn.Provider,{value:Oe,children:d.jsx(Ie.Provider,{value:i,children:d.jsx("div",{"data-testid":"json-schema-diffs-viewer",children:d.jsx(Vn,{node:V})})})})})})})})})}):null};Pt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
  /**
   * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
   * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
   * of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the removed legacy (api-data-model based) \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:`Placeholder - accepted but not implemented yet: the viewer currently ignores it and renders
all diffs regardless of their type. Reserved for filtering diffs by type.`},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-authoring) for the design analysis.'}}};var ht=(a=>(a.PRIMARY="primary",a.SECONDARY="secondary",a))(ht||{});const et=a=>{const{node:e,variant:n=ht.PRIMARY,[te]:t}=a,r=Ce(),i=Pn(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),f=e.nestedNodes(),c=m.useMemo(()=>f.filter(Bt).map((v,T)=>{var J;const j=((J=v.value())==null?void 0:J.protocol)??"",_=`binding-${T}`;return Ut(v)?{title:j,node:v,testId:_,diffs:v.diffs,diffsSummary:v.diffsSummary,descendantDiffs:v.descendantDiffs,descendantDiffsSummary:v.descendantDiffsSummary,diffsSeverities:v.diffsSeverities}:{title:j,node:v,testId:_}}),[f]),g=l!=null&&l.node&&Bt(l.node)?l.node:null,y=g==null?void 0:g.value(),{version:p="latest",binding:h=null}=y??{};m.useEffect(()=>{c.length>0&&l===null&&u(c[0])},[c,l]);const b=m.useCallback(v=>s?d.jsx(d.Fragment,{}):d.jsx(_t,{options:c,selectedOption:l,onSelectOption:u,variant:qt.Secondary,layoutSide:v}),[c,s,l]),w=m.useMemo(()=>{if(hd(e)){const v=Ze(e);return ae(v)}return{}},[e]),N=m.useMemo(()=>{if(g&&Ut(g)){const v=Ze(g);return ae(v,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:H.BindingVersionRow})}return{}},[g]),V=m.useMemo(()=>{if(!g)return null;if(Ut(g)&&i){const v=g.diffs[M],T=rf(h,v,i);return d.jsx(Tt,{"data-precededby":R.BINDING_VERSION_ROW,mergedSource:T,displayMode:r,initialLevel:1,supportJsonSchema:!0,embeddedSchemaDiffsComponent:Pt,diffMetaKeys:i})}return Bt(g)?d.jsx(Vt,{"data-precededby":R.BINDING_VERSION_ROW,source:h,displayMode:r,initialLevel:1,supportJsonSchema:!0,embeddedSchemaComponent:Ot}):null},[g,h,r,i]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===ht.PRIMARY?K.h3:K.h5,subheader:b,...w}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(en,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:p,variant:K.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...N}),V]})]})};function rf(a,e,n){if(!a)return null;const t=e==null?void 0:e.data;if(!t)return a;const{diffsMetaKey:r}=n;return{...a,[r]:Object.keys(a).reduce((o,s)=>{if(o[s]=t,E(t)){const l=a[s];o[s]={...t,afterValue:l}}if(k(t)){const l=a[s];o[s]={...t,beforeValue:l}}return o},{})}}et.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const It=a=>{const{node:e,[te]:n}=a,t=Pn(),r=e.value(),i=(r==null?void 0:r.rawValues)??{},o=m.useMemo(()=>{var s;if(bd(e)){const l=Ze(e);return{...ae(l),highlightingMode:(s=e.diffs[M])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:"Extensions",expandable:!1,variant:K.h3,usage:Nt.AsyncApiJsoSection,...o}),t?d.jsx(Tt,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:i,initialLevel:1,diffMetaKeys:t}):d.jsx(Vt,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:i,initialLevel:1})]})};It.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Eo="Address Parameters",af="Location",Jn="location",of="customAnnotations";function Un(a){return typeof a=="object"&&a!==null&&!Array.isArray(a)}function sf(a,e){if(!(Jn in a))return a;const{[Jn]:n,...t}=a,r={[Jn]:{label:af,value:n}};if(e){const i=Reflect.get(a,e),o=Un(i)?i[Jn]:void 0;o&&Reflect.set(r,e,{[Jn]:o})}return{...t,[of]:r}}function Ao(a,e){if(!Un(a))return a;const n=a.properties;if(!Un(n))return a;const t={};for(const[r,i]of Object.entries(n))t[r]=Un(i)?sf(i,e):i;if(e){const r=Reflect.get(n,e);r!==void 0&&Reflect.set(t,e,r)}return{...a,properties:t}}const To=a=>{const{node:e,[te]:n}=a,t=Ce();if(Dd(e))return d.jsx(lf,{"data-precededby":n,node:e});const r=e.value(),i=Ao((r==null?void 0:r.rawValues)??{});return d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:Eo,expandable:!1,variant:K.h3}),d.jsx(Ot,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:i,expandedDepth:2,displayMode:t,customizationOptions:Tn})]})},lf=a=>{const{node:e,[te]:n}=a,t=Ce(),r=e.value(),i=r==null?void 0:r.rawValues,o=Pn(),s=m.useMemo(()=>{const u=Ze(e);return ae(u)},[e]),l=m.useMemo(()=>{const u=Ao(i,o==null?void 0:o.diffsMetaKey);return df(u,o)?u:uf(u,e.diffs[M],o)},[i,o,e.diffs]);return!o||!i?null:d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:Eo,expandable:!1,variant:K.h3,...s}),d.jsx(Pt,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:l,expandedDepth:2,displayMode:t,diffMetaKeys:o,customizationOptions:Tn})]})};function df(a,e){if(!a||!e)return!1;const n=a.properties;return Un(n)?Reflect.get(n,e.diffsMetaKey)!==void 0:!1}function uf(a,e,n){if(!a||!e||!n)return a;const t=e.data,{diffsMetaKey:r}=n;return{...a,[r]:Object.keys(a).reduce((o,s)=>{if(o[s]=t,E(t)){const l=a[s];o[s]={...t,afterValue:l}}if(k(t)){const l=a[s];o[s]={...t,beforeValue:l}}return o},{})}}To.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const Vo=m.memo(a=>{const{renderAddress:e}=a,{diff:n,descendantDiffs:t,diffsSeverities:r}=a,i=m.useMemo(()=>r==null?void 0:r["server-address-row"],[r]),o=m.useMemo(()=>i==null?void 0:i.type,[i]),s=m.useMemo(()=>Wn(i==null?void 0:i.causedAt),[i]);switch(Pe()){case Oe:return d.jsx(qn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(bn,{left:e($),right:e(oe)})});case an:return d.jsx(hn,{content:e(oe)})}return null});Vo.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const xo=m.memo(a=>{const{node:e,[te]:n}=a,t=m.useMemo(()=>e.value(),[e]),i=e.childrenNodes().find(Et),o=$n(e,lt),{nodeDiffs:s}=o,l=m.useMemo(()=>ae(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ae(o,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[o]),f=m.useMemo(()=>ae(o,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[o]),c=m.useMemo(()=>ae(o,{resolveDiff:(N,V)=>{const v=ce.maxChangedPropertyMetaDataByDiffType(V("protocol"),V("host"));return N[M]??v}}),[o]),g=m.useCallback(N=>{var O;if(!t)return null;if(!lt(e))return d.jsx(d.Fragment,{children:t.protocol});const V=(O=e.diffs)==null?void 0:O.protocol;if(!V)return d.jsx(d.Fragment,{children:t.protocol});const v=new Set,{data:T,styles:j}=V;let _=t.protocol,J=!1;return N===$&&(v.add(ne.highlighter(j.before.textHighlighterColor)),k(T)||q(T)?_=T.beforeValue:Xe(T)&&(_=T.beforeKey),E(T)&&(J=!0)),N===oe&&(v.add(ne.highlighter(j.after.textHighlighterColor)),E(T)||q(T)?_=T.afterValue:Xe(T)&&(_=T.afterKey),k(T)&&(J=!0)),J?null:d.jsx("span",{className:Array.from(v).join(" "),children:_})},[e,t]),y=m.useCallback(N=>{var O;if(!t)return null;if(!lt(e))return d.jsx(d.Fragment,{children:t.host});const V=(O=e.diffs)==null?void 0:O.host;if(!V)return d.jsx(d.Fragment,{children:t.host});const v=new Set,{data:T,styles:j}=V;let _=t.host,J=!1;return N===$&&(v.add(ne.highlighter(j.before.textHighlighterColor)),k(T)||q(T)?_=T.beforeValue:Xe(T)&&(_=T.beforeKey),E(T)&&(J=!0)),N===oe&&(v.add(ne.highlighter(j.after.textHighlighterColor)),E(T)||q(T)?_=T.afterValue:Xe(T)&&(_=T.afterKey),k(T)&&(J=!0)),J?null:d.jsx("span",{className:Array.from(v).join(" "),children:_})},[e,t]),p=m.useCallback(N=>{var O;function V(P=!1,Y=[]){return d.jsx("div",{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${zn} py-2 flex flex-row w-full h-full ${Y.join(" ")}`,children:!P&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[g(N),"://",y(N)]})})}if(!lt(e))return V();const v=((O=e.diffs)==null?void 0:O[M])??c.diff;if(!v)return V();const{data:T,styles:j}=v,_=new Set;let J=!1;return N===$&&(E(T)?(_.add(ne.background(S.Gray)),J=!0):_.add(ne.background(j.before.backgroundColor))),N===oe&&(k(T)?(_.add(ne.background(S.Gray)),J=!0):_.add(ne.background(j.after.backgroundColor))),V(J,Array.from(_))},[e,y,g,c.diff]),h=m.useMemo(()=>He(t,s,"title"),[t,s]),b=m.useMemo(()=>He(t,s,"description"),[t,s]),w=m.useMemo(()=>He(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(me,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:K.h4,...l}),!h&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:K.h4,...l}),d.jsx(Vo,{renderAddress:p,...c}),b&&d.jsx(en,{"data-precededby":R.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:K.h6,textFontWeight:"normal",textColor:fn,...u}),w&&d.jsx(en,{"data-precededby":b?R.DESCRIPTION_ROW:R.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:K.h6,textFontWeight:"normal",textColor:fn,...f}),i&&d.jsx(et,{"data-precededby":w?R.SUMMARY_ROW:b?R.DESCRIPTION_ROW:R.SERVER_ADDRESS_ROW,node:i,variant:ht.SECONDARY})]}):null});xo.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const Co=m.memo(a=>{const{node:e,[te]:n}=a,t=m.useMemo(()=>e.childrenNodes().filter(pd),[e]),r=m.useMemo(()=>{if(Sd(e)){const i=Ze(e);return ae(i)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:K.h3,...r}),t.map((i,o)=>d.jsx(xo,{"data-precededby":o===0?R.MESSAGE_SECTION_HEADER_HIGH_LEVEL:R.SERVER_BLOCK,node:i},i.id))]})});Co.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Ro=a=>{const{node:e,[te]:n}=a,t=e.value(),r=e.childrenNodes(),i=r.find(Et),o=r.find(md),s=r.find(gd),l=r.find(wr),u=$n(e,vd),{nodeDiffs:f}=u,c=m.useMemo(()=>ae(u,{diffKey:"title"}),[u]),g=m.useMemo(()=>ae(u,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[u]),y=m.useMemo(()=>ae(u,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[u]),p=m.useMemo(()=>He(t,f,"title"),[t,f]),h=m.useMemo(()=>He(t,f,"description"),[t,f]),b=m.useMemo(()=>He(t,f,"summary"),[t,f]);return d.jsxs("div",{className:"flex flex-col",children:[p&&d.jsx(me,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:K.h2,...c}),!p&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:K.h2,...c}),h&&d.jsx(en,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:K.h5,textFontWeight:"normal",textColor:fn,...g}),b&&d.jsx(en,{"data-precededby":h?R.DESCRIPTION_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:K.h5,textFontWeight:"normal",textColor:fn,...y}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(To,{"data-precededby":h?R.DESCRIPTION_ROW:b?R.SUMMARY_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(Co,{"data-precededby":o?R.JSON_SCHEMA_VIEWER:h?R.DESCRIPTION_ROW:b?R.SUMMARY_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(It,{"data-precededby":s?R.SERVER_BLOCK:o?R.JSON_SCHEMA_VIEWER:h?R.DESCRIPTION_ROW:b?R.SUMMARY_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),i&&d.jsx(et,{"data-precededby":l?R.JSO_VIEWER:s?R.SERVER_BLOCK:o?R.JSON_SCHEMA_VIEWER:h?R.DESCRIPTION_ROW:b?R.SUMMARY_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};Ro.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Mo=a=>{const{node:e,[te]:n}=a,t=Ce(),r=Pe(),i=Pn(),o=Es(),s=e.childrenNodes(),l=s.find(fd),u=s.find(wr),f=s.find(Et),c=s.find(cd),g=m.useMemo(()=>fi(l,i),[l,i]),y=m.useMemo(()=>fi(c,i),[c,i]),p=m.useMemo(()=>{if(wd(l)){const w=Ze(l);return ae(w)}return{}},[l]),h=m.useMemo(()=>{if(Nd(c)){const w=Ze(c);return ae(w)}return{}},[c]),b=m.useCallback(w=>r===an?d.jsx(Ot,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:w,displayMode:t,customizationOptions:Tn}):r===Oe&&i?d.jsx(Pt,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:w,displayMode:t,diffMetaKeys:i,diffTypes:o,customizationOptions:Tn}):null,[i,o,t,r]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":n,value:"Headers",variant:K.h3,expandable:!1,...p}),b(g)]}),u&&d.jsx(It,{"data-precededby":l?R.JSON_SCHEMA_VIEWER:n,node:u}),f&&d.jsx(et,{"data-precededby":l?R.JSON_SCHEMA_VIEWER:u?R.JSO_VIEWER:n,node:f}),c&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":l?R.JSON_SCHEMA_VIEWER:u||f?R.JSO_VIEWER:n,value:"Payload",variant:K.h3,expandable:!1,...h}),b(y)]})]})},ui="Type";function fi(a,e){if(!a)return;const n=a.value();if(n)return a instanceof Re?lr(ui,n.schema,a.diffs[M],e):ja(ui,n.schema)}Mo.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const _o=a=>{const{node:e,[te]:n}=a,t=e.value(),r=e.childrenNodes(),i=r.find(Et),o=r.find(wr),s=$n(e,Ed),{nodeDiffs:l}=s,u=m.useMemo(()=>ae(s,{diffKey:"title"}),[s]),f=m.useMemo(()=>ae(s,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[s]),c=m.useMemo(()=>ae(s,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[s]),g=m.useMemo(()=>He(t,l,"title"),[t,l]),y=m.useMemo(()=>He(t,l,"description"),[t,l]),p=m.useMemo(()=>He(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(me,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:K.h2,expandable:!1,expanded:!0,...u}),!g&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),variant:K.h2,expandable:!1,expanded:!0,...u}),y&&d.jsx(en,{"data-precededby":R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:K.h5,textFontWeight:"normal",textColor:fn,...f}),p&&d.jsx(en,{"data-precededby":y?R.DESCRIPTION_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:K.h5,textFontWeight:"normal",textColor:fn,...c}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(It,{"data-precededby":p?R.SUMMARY_ROW:y?R.DESCRIPTION_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),i&&d.jsx(et,{"data-precededby":o?R.JSO_VIEWER:p?R.SUMMARY_ROW:y?R.DESCRIPTION_ROW:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:i})]})]})};_o.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const qo=a=>{const{node:e,[te]:n}=a;return xa(e)?d.jsx(Mo,{"data-precededby":n,node:e}):Ca(e)?d.jsx(Ro,{"data-precededby":n,node:e}):Ra(e)?d.jsx(_o,{"data-precededby":n,node:e}):null};qo.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Ho=a=>{const{node:e,[te]:n}=a,t=Pe();Ce();const[r,i]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(p=>{const h=ff(p),b=cf(p);return Td(p)?{node:p,title:h,testId:b,diffs:p.diffs,diffsSummary:p.diffsSummary,descendantDiffs:p.descendantDiffs,descendantDiffsSummary:p.descendantDiffsSummary,diffsSeverities:p.diffsSeverities}:{node:p,title:h,testId:b}}),[o]);m.useEffect(()=>{s.length>0&&r===null&&i(s[0])},[s,r]);const l=m.useMemo(()=>{var p;return Ad(e)?(p=e.diffs)==null?void 0:p[M]:null},[e]),u=m.useMemo(()=>{if(l){const{data:p}=l;if(q(p)||k(p))return p.beforeDeclarationPaths[0];if(E(p))return p.afterDeclarationPaths[0]}return null},[l]),f=m.useMemo(()=>{var p;return(p=l==null?void 0:l.data)==null?void 0:p.type},[l]),c=m.useMemo(()=>{const p=u==null?void 0:u.join(".");return p?`caused by ${p} change`:void 0},[u]),g=m.useCallback(p=>{const h=new Set;if(l){const{styles:b}=l;p===$&&h.add(ne.background(b.before.backgroundColor)),p===oe&&h.add(ne.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${zn} h-full ${Array.from(h).join(" ")}`,children:d.jsx(_t,{options:s,selectedOption:r,onSelectOption:i,variant:qt.Secondary,layoutSide:p})})},[l,n,s,r]),y=m.useCallback(()=>{switch(t){case Oe:return d.jsx(qn,{diffType:f,diffTypeCause:c,hidden:!1,children:d.jsx(bn,{left:g($),right:g(oe)})});default:return d.jsx(hn,{content:g(oe)})}},[f,c,t,g]);return d.jsxs("div",{className:"flex flex-col",children:[y(),r&&yd(r.node)&&d.jsx("div",{"data-testid":`${r.testId}-section`,children:d.jsx(qo,{"data-precededby":R.MESSAGE_SECTION_SELECTOR,node:r.node})})]})};function ff(a){switch(a.kind){case D.MESSAGE_CONTENT:return"Message";case D.MESSAGE_CHANNEL:return"Channel";case D.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function cf(a){switch(a.kind){case D.MESSAGE_CONTENT:return"message-content";case D.MESSAGE_CHANNEL:return"message-channel";case D.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Ho.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const Kr=a=>{const{node:e,noHeading:n=!1}=a,t=e.value(),r=m.useMemo(()=>e.childrenNodes(),[e]),i=$n(e,kd),{nodeDiffs:o}=i,s=m.useMemo(()=>ae(i,{diffKey:"title"}),[i]),l=m.useMemo(()=>ae(i,{diffKey:"address"}),[i]),u=m.useMemo(()=>ae(i,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[i]),f=m.useMemo(()=>ae(i,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[i]),c=m.useMemo(()=>He(t,o,"title"),[t,o]),g=m.useMemo(()=>He(t,o,"description"),[t,o]),y=m.useMemo(()=>He(t,o,"summary"),[t,o]),p=n?R.ROOT:R.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&c&&d.jsx(me,{"data-precededby":R.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:K.h1,...s}),!n&&!c&&d.jsx(me,{"data-precededby":R.ROOT,value:e.key.toString(),expandable:!1,variant:K.h1,...s}),d.jsx(Ma,{"data-precededby":p,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),g&&d.jsx(en,{"data-precededby":R.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:K.h4,textFontWeight:"normal",textColor:fn,...u}),y&&d.jsx(en,{"data-precededby":g?R.DESCRIPTION_ROW:R.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:K.h4,textFontWeight:"normal",textColor:fn,...f}),d.jsx(mf,{"data-precededby":y?R.SUMMARY_ROW:g?R.DESCRIPTION_ROW:R.ADDRESS_ROW,children:r})]})},mf=a=>{const{children:e,[te]:n}=a;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>ud(t)?d.jsx(Ho,{"data-precededby":n,node:t},t.key):null)})};Kr.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const yf=m.memo(a=>a.source===null?null:d.jsx(xn,{fallback:d.jsx(Cn,{componentName:"Async API Operation Viewer"}),children:d.jsx(gf,{...a})})),gf=m.memo(a=>{const{source:e,operationKeys:n,displayMode:t=_n,devMode:r=!1,noHeading:i=!1,referenceNamePropertyKey:o}=a,s=m.useMemo(()=>Ue(r),[r]),l=m.useMemo(()=>new fa({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const f=u==null?void 0:u.root;return!f||!Va(f)?null:d.jsx(Wi.Provider,{value:r,children:d.jsx(Rn.Provider,{value:t,children:d.jsxs(Mn.Provider,{value:an,children:[" ",d.jsx(Ie.Provider,{value:0,children:d.jsx(Kr,{node:f,noHeading:i})})]})})})});yf.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{yf as A,Vt as J,Cd as a,Ot as b,Pt as c,Tt as d};
