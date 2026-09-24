var Go=Object.defineProperty;var Bo=(i,e,n)=>e in i?Go(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var M=(i,e,n)=>(Bo(i,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{aA as mt,a3 as wn,N as R,d as cr,t as E,H as S,v as k,x as q,y as Ve,R as H,w as We,O as L,aB as an,aC as Zt,aD as er,aE as nr,aF as gi,aG as pi,aH as hi,aI as bi,aJ as vi,aK as Di,aL as Si,aM as wi,aN as Uo,aO as tr,aP as Ni,aQ as ki,a6 as Ei,aR as Ai,aS as Ti,aT as Vi,ai as xi,aj as Ci,ah as Ri,aU as Mi,af as _i,ag as qi,aV as Hi,aW as rr,ae as Oi,aa as Pi,ac as Ii,ab as Li,ad as ji,a7 as Ji,a8 as Fi,a9 as Ki,U as X,X as qe,Y as Un,W as ae,S as _e,V as ne,E as Tn,c as Vn,e as xn,L as Cn,f as He,p as Rn,aX as Yo,aY as Wo,aZ as zo,a_ as $o,a$ as Xo,b0 as Qo,b1 as Zo,b2 as es,b3 as ns,z as ts,A as rs,B as is,F as as,G as Gi,J as os,u as xe,am as mn,l as nn,an as bt,h as ss,b4 as ls,b5 as tt,ay as ds,at as Bi,b6 as us,g as Ui,ao as fs}from"./UxBadge-3d9cd0ec.js";import{Y as mr,l as T,Z as be,_ as D,$ as vt,a0 as Dt,a1 as cs,a2 as St,a3 as Yi,a4 as le,e as Ke,a5 as wt,t as ue,a6 as ee,a7 as yr,a8 as ms,v as G,a9 as ys,aa as gs,ab as Wi,ac as zi,ad as ce,ae as $i,z as gr,af as ir,ag as ps,S as Ce,O as yn,N as Mn,Q as gn,ah as jt,b as K,X as Yn,A as te,ai as Xi,aj as hs,ak as _n,al as $e,am as ie,T as me,an as Nt,P as x,ao as bs,ap as ve,aq as Qi,ar as pr,as as hr,at as rt,au as Ye,av as vs,aw as Ds,ax as Te,ay as Ss,az as ws,aA as Ns,V as ks,aB as Es,aC as As,M as Zi,aD as Ts,aE as Vs,aF as Wn,aG as vn,aH as Dn,aI as it,aJ as xs,aK as ea,aL as na,aM as Cs,c as Xe,d as sn}from"./IndexesNodeViewer-343f36de.js";import{r as m}from"./index-f46741a2.js";import{T as br,A as pn,a as qn,b as fe,c as vr,m as Dr,t as Rs,C as Ms,d as Sr,e as wr,u as Hn,f as ta}from"./DdlTableDiffsViewer-daaefaef.js";/* empty css              */import"./DdlTableViewer-d7742d03.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphQLOperationViewer-19ba9549.js";import{U as ra,N as _s,R as qs,r as Hs,V as ia,g as aa,h as oa,j as sa,P as la,k as da,I as ua,A as Os,l as Ps,m as Is,B as zr,W as Ls,D as js,n as Js,o as Nr,C as fa,p as ca}from"./GraphPropNodeViewer-0af21220.js";class Fs extends mr{constructor(){super()}}const $r=(i,e)=>!T(e)||be(e)?e:{rawValues:e},Ks=(i,e)=>{if(!T(e)||be(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof i=="symbol"?i.toString():`${i}`}},Xr=(i,e)=>T(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function jn(i){return{"/data":{"/content":()=>jn(D.MESSAGE_CONTENT),"/channel":()=>jn(D.MESSAGE_CHANNEL),"/operation":()=>jn(D.MESSAGE_OPERATION),kind:D.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:D.MESSAGE_CHANNEL_PARAMETERS,transformers:[$r]},"/servers":{"/*":()=>jn(D.SERVER),kind:D.SERVERS},"/extensions":{kind:D.EXTENSIONS,transformers:[$r]},"/bindings":{"/*":{kind:D.BINDING,transformers:[Ks]},kind:D.BINDINGS,complex:!0},"/headers":{kind:D.MESSAGE_HEADERS,transformers:[Xr]},"/payload":{kind:D.MESSAGE_PAYLOAD,transformers:[Xr]},kind:i}}const Gs="<address unknown>";class ma{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,r;const a=e.operations??{};let o,s;if(n)t=n.operationKey,r=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(a).at(0),o){const u=a[o],f=this.isReferenceObject(u)?null:u;if(f){const c=(l=f.messages)==null?void 0:l[0],g=this.isReferenceObject(c)?null:c;if(g){const y=g[this.referenceNamePropertyKey];s=typeof y=="string"?y:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,r=s}return{operationKey:t,messageKey:r}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var C;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},r=this.operationKeysOrDefaults(e,n);if(!r)return null;const{operationKey:a,messageKey:o}=r,s=Object.entries(t).filter(v=>{const[A,j]=v;return!this.isReferenceObject(j)&&A===a}).map(([,v])=>v).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${a}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let f=(s.messages??[]).filter(v=>!this.isReferenceObject(v)).find(v=>T(v)&&v[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!f){const v=(C=l.messages)==null?void 0:C[o];if(f=this.isReferenceObject(v)?void 0:v,!f)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const c=this.copyExtensions(s),g=this.copyExtensions(l),y=this.copyExtensions(f),p=v=>T(v)?{[this.referenceNamePropertyKey]:v[this.referenceNamePropertyKey]}:void 0,h=p(f),b=p(l),w=p(s);return{...h??{},id:o,...f.name?{internalTitle:f.name}:{},...f.title?{title:f.title}:{},...f.summary?{summary:f.summary}:{},...f.description?{description:f.description}:{},action:s.action,address:l.address??Gs,data:{content:{...f.headers?{headers:f.headers}:{},...y?{extensions:y}:{},...f.bindings?{bindings:f.bindings}:{},...f.payload?{payload:f.payload}:{}},channel:{...b??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...g?{extensions:g}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...w??{},id:a,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...c?{extensions:c}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[r,a]of Object.entries(e))n[r]=this.isReferenceObject(a)?a:{type:"string",...a};const t=e;for(const r of Reflect.ownKeys(e))typeof r=="symbol"&&Object.defineProperty(n,r,{value:t[r],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,r)=>(t[r]=e[r],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function Bs(i){return vt(i)}const Us=new Set([D.BINDING,D.EXTENSIONS,D.MESSAGE,D.MESSAGE_CHANNEL,D.MESSAGE_CHANNEL_PARAMETERS,D.MESSAGE_HEADERS,D.MESSAGE_OPERATION,D.MESSAGE_PAYLOAD,D.SERVER]),at=["title","description","summary"];class kt extends Dt{createNodeMeta(e){return{...T(e)&&mt in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,r){return!cs(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:r(t,kt.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Us.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case D.BINDING:return["binding","version","protocol"];case D.EXTENSIONS:case D.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case D.MESSAGE:return[...at,"internalTitle","action","address"];case D.MESSAGE_CHANNEL:return[...at];case D.MESSAGE_OPERATION:return[...at];case D.MESSAGE_HEADERS:case D.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case D.SERVER:return[...at,"host","protocol"];default:return[]}}}const Ys="[AsyncAPI]";class ya extends St{constructor(n){const{source:t,referenceNamePropertyKey:r,operationKeys:a,logger:o=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"referenceNamePropertyKey");M(this,"operationKeys");M(this,"logger");M(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=r,this.operationKeys=a,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!T(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new wt},r=jn(D.MESSAGE),a=Bs({source:n,tree:this.tree,supportedNodeKinds:Yi,createNodeFromRaw:(o,s,l,u,f)=>this.createNodeFromRaw(o,s,l,u,f),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>T(s)&&!!s.isPrimitive});return wn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Ys}createTree(){return new Fs}createNodeDataBuilder(){return new kt}prepareSource(){return new ma(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return T(n)?n:null}resolveNodeKey(n,t){if(!T(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const r=t[this.referenceNamePropertyKey];if(typeof r=="string"||typeof r=="number")return r}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u}=o;if(a){const y=this.createNodeMeta(t,o),p={type:le.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,p)}const f=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),g={type:le.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:f,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===le.SIMPLE}isComplexTreeNode(n){return n.type===le.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Ws extends br{constructor(){super()}}function Qr(i){return"diffs"in i&&"diffsSummary"in i&&"descendantDiffs"in i&&"descendantDiffsSummary"in i&&"diffsSeverities"in i}const zs="x-";function Jt(i){return i===void 0||typeof i=="symbol"?!1:(typeof i=="string"?i:`${i}`).startsWith(zs)}class $s extends ma{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:r,messageKey:a}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=ue(ee(e,["operations",o],this.referenceNamePropertyKey)),f=ue(ee(e,["operations",r,o],this.referenceNamePropertyKey));ue(ee(e,["operations",r,"bindings",o],this.referenceNamePropertyKey));const c=ue(ee(e,["operations",r,"channel",o],this.referenceNamePropertyKey));ue(ee(e,["operations",r,"channel","bindings",o],this.referenceNamePropertyKey)),ue(ee(e,["operations",r,"channel","servers",o],this.referenceNamePropertyKey));const g=ue(ee(e,["operations",r,"messages",o],this.referenceNamePropertyKey)),y=ue(ee(e,["operations",r,"messages",a,o],this.referenceNamePropertyKey));ue(ee(e,["operations",r,"messages",a,"bindings",o],this.referenceNamePropertyKey));const p=ee(e,["operations",r,"messages",a],this.referenceNamePropertyKey),h=ee(e,["operations",r,"messages"],this.referenceNamePropertyKey),b=T(p)&&yr(h)?ms(h,p):void 0,w=(b&&typeof b!="symbol"?g==null?void 0:g[b]:void 0)??(r&&typeof r!="symbol"?u==null?void 0:u[r]:void 0),N=l;if(!(o in N)){const C=y==null?void 0:y.title,v=y==null?void 0:y.name,A=y==null?void 0:y.description,j=y==null?void 0:y.summary,_=c==null?void 0:c.address,J=y==null?void 0:y.headers,O=y==null?void 0:y.payload,P=N.data.content.extensions;if(P&&!(o in P)){const de=Object.keys(y??{}).reduce((Z,oe)=>{if(!Jt(oe))return Z;const Ge=y==null?void 0:y[oe];return Ge&&(Z[oe]=Ge),Z},{});N.data.content.extensions=Object.assign(P,{[o]:de})}const Y=N.data.content;if(Y&&!(o in Y)){const de={...J?{headers:J}:{},...O?{payload:O}:{}};N.data.content=Object.assign(Y,{[o]:de})}N[o]={...w?{[R]:w}:{},...C?{title:C}:{},...v?{internalTitle:v}:{},...A?{description:A}:{},...j?{summary:j}:{},..._?{address:_}:{}}}if(!(o in N.data.channel)){const C=c==null?void 0:c.title,v=c==null?void 0:c.description,A=c==null?void 0:c.summary,j=c==null?void 0:c.address,_=N.data.channel.extensions;if(_&&!(o in _)){const J=Object.keys(c??{}).reduce((O,P)=>{if(!Jt(P))return O;const Y=c==null?void 0:c[P];return Y&&(O[P]=Y),O},{});N.data.channel.extensions=Object.assign(_,{[o]:J})}N.data.channel[o]={...C?{title:C}:{},...v?{description:v}:{},...A?{summary:A}:{},...j?{address:j}:{}}}if(!(o in N.data.operation)){const C=f==null?void 0:f.title,v=f==null?void 0:f.description,A=f==null?void 0:f.summary,j=N.data.operation.extensions;if(j&&!(o in j)){const _=Object.keys(f??{}).reduce((J,O)=>{if(!Jt(O))return J;const P=f==null?void 0:f[O];return P&&(J[O]=P),J},{});N.data.operation.extensions=Object.assign(j,{[o]:_})}N.data.operation[o]={...C?{title:C}:{},...v?{description:v}:{},...A?{summary:A}:{}}}return cr(N,o,s),N}hasOnlyAllowedDiffMetaSymbols(e){if(!T(e)&&!be(e))return!0;if(be(e))return e.every(a=>this.hasOnlyAllowedDiffMetaSymbols(a));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(a=>n.has(a))?Object.values(e).every(a=>this.hasOnlyAllowedDiffMetaSymbols(a)):!1}}class Xs extends kt{createNodeValue(e,n,t,r){return super.createNodeValue(e,n,t,r)}createNodeMeta(e){return super.createNodeMeta(e)}}class Qs extends pn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;a.add(s)}return a}}class Zs extends pn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{aggregatedDiffsMetaKey:o}=r,s=ee(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&a.add(l.type);return a}}class el extends pn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=ue(ee(t,["parameters","properties",o]));if(l)for(const c of Object.values(l))c&&a.add(c.type);const u=ee(t,["parameters",s]);if(this.isDiffsSet(u))for(const c of u)c&&a.add(c.type);const f=ue(ee(t,["extensions",o]));if(f)for(const c of Object.values(f))c&&a.add(c.type);return a}}class nl extends pn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=ue(ee(t,["extensions",o]));if(l)for(const c of Object.values(l))c&&a.add(c.type);const u=ee(t,["headers",s]);if(this.isDiffsSet(u))for(const c of u)c&&a.add(c.type);const f=ee(t,["payload",s]);if(this.isDiffsSet(f))for(const c of f)c&&a.add(c.type);return a}}class tl extends pn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o}=r,s=ue(ee(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&a.add(l.type);return a}}var Qt;let rl=(Qt=class{static instance(e){switch(e){case D.BINDING:if(!this.instances.has(D.BINDING)){const n=new Zs;this.instances.set(D.BINDING,n)}return this.instances.get(D.BINDING);case D.MESSAGE_CONTENT:if(!this.instances.has(D.MESSAGE_CONTENT)){const n=new nl;this.instances.set(D.MESSAGE_CONTENT,n)}return this.instances.get(D.MESSAGE_CONTENT);case D.MESSAGE_CHANNEL:if(!this.instances.has(D.MESSAGE_CHANNEL)){const n=new el;this.instances.set(D.MESSAGE_CHANNEL,n)}return this.instances.get(D.MESSAGE_CHANNEL);case D.MESSAGE_OPERATION:if(!this.instances.has(D.MESSAGE_OPERATION)){const n=new tl;this.instances.set(D.MESSAGE_OPERATION,n)}return this.instances.get(D.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Qs;this.instances.set(null,n)}return this.instances.get(null)}}},M(Qt,"instances",new Map),Qt);class il extends qn{aggregate(e,n){}}class al extends qn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n,a=ue(ee(e,[r],t));if(!a)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},f=a[l];f&&(s=!0,this.aggregateWholeNodeDiff(f,u),o[l]=u[R])}return s?o:void 0}}class ol extends qn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,r=ue(ee(e,[t])),a=r==null?void 0:r.headers,o=r==null?void 0:r.payload,s={};if(a){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};E(a)&&(l={...l,backgroundColor:S.Gray},u={...u,backgroundColor:S.Green}),k(a)&&(l={...l,backgroundColor:S.Red},u={...u,backgroundColor:S.Gray}),q(a)&&(l={...l,backgroundColor:S.Yellow},u={...u,backgroundColor:S.Yellow}),s.headers={data:a,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};E(o)&&(l={...l,backgroundColor:S.Gray},u={...u,backgroundColor:S.Green}),k(o)&&(l={...l,backgroundColor:S.Red},u={...u,backgroundColor:S.Gray}),q(o)&&(l={...l,backgroundColor:S.Yellow},u={...u,backgroundColor:S.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}return s}}class sl extends qn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n;if(!Array.isArray(e))return;const a=ue(ee(e,[r],t));if(!a)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const f=e[l][t];if(!f)continue;const c={},g=a[l];g&&(s=!0,this.aggregateWholeNodeDiff(g,c),o[f]=c[R])}return s?o:void 0}}class ga{static instance(e){switch(e){case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new al),this.instances.get(D.BINDINGS);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new sl),this.instances.get(D.SERVERS);case D.MESSAGE_CONTENT:return this.instances.has(D.MESSAGE_CONTENT)||this.instances.set(D.MESSAGE_CONTENT,new ol),this.instances.get(D.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new il;this.instances.set(null,n)}return this.instances.get(null)}}}M(ga,"instances",new Map);class ll extends fe{aggregate(e){const n=e[R];if(n){const c=n.data,y={type:c.type,causedAt:[]};return q(c)?(y.causedAt=c.beforeDeclarationPaths[0],{[H.TitleRow]:y,[H.BindingVersionRow]:y}):(k(c)?y.causedAt=c.beforeDeclarationPaths[0]:E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),{[H.TitleRow]:y,[H.DescriptionRow]:y,[H.SummaryRow]:y,[H.AddressRow]:y,[H.BindingVersionRow]:y,[H.ServerAddressRow]:y})}const t=e.title,r=e.description,a=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,f={};if(t){const c=t.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.TitleRow]=y}if(r){const c=r.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.DescriptionRow]=y}if(a){const c=a.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.SummaryRow]=y}if(o){const c=o.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.AddressRow]=y}if(s){const c=s.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.BindingVersionRow]=y}if(l||u){const c=l==null?void 0:l.data,g=u==null?void 0:u.data,y=fe.maxDiffByDiffType(c,g);if(y){const p={type:y.type,causedAt:[]};(k(y)||q(y))&&(p.causedAt=y.beforeDeclarationPaths[0]),E(y)&&(p.causedAt=y.afterDeclarationPaths[0]),f[H.ServerAddressRow]=p}}return Object.keys(f).length>0?f:void 0}}class pa{static instance(e){switch(e){default:return new ll}}}M(pa,"instances",new Map);class dl extends vr{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const a of Object.values(e)){if(!a)continue;const o=a.data.type;r.add(o)}return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!E(n)&&!k(n)&&!q(n)&&!We(n))return!1;return!0}}class ul{static instance(e){switch(e){default:return new dl}}}class dn extends G{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,r,a,o){const{diffsMetaKey:s}=t;if(!T(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const y=o.diffs[R];if(y&&(E(y.data)||k(y.data)))return u[R]={...y,inherited:!0},u;{const p=o.descendantDiffs[r];if(p)return u[R]=p,u}}else if(a){const y=a.diffs[R];if(y&&(E(y.data)||k(y.data)))return u[R]={...y,inherited:!0},u;{const p=a.descendantDiffs[r];if(p)return u[R]=p,u}}if(!G.isDiffsRecord(l))return;const f=l.title;f&&this.aggregateTextDiff(f,"title",u);const c=l.description;c&&this.aggregateTextDiff(c,"description",u);const g=l.summary;return g&&this.aggregateTextDiff(g,"summary",u),u}aggregateTextDiff(n,t,r){let a=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;E(n)&&(a={...a,isContentVisible:!1,backgroundColor:S.Gray},o={...o,isContentVisible:!0,backgroundColor:S.Green}),k(n)&&(a={...a,isContentVisible:!0,backgroundColor:S.Red},o={...o,isContentVisible:!1,backgroundColor:S.Gray}),(We(n)||q(n))&&(a={...a,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},o={...o,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),r[t]={data:n,styles:{before:a,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}}class fl extends dn{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!T(e))return;let s=super.aggregate(e,n,t,r,a);if(s){const u=s[R];if(u){const{data:f,styles:c}=u;E(f)&&(c.after.borderShadowColor=S.Green),k(f)&&(c.before.borderShadowColor=S.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=ee(e,["binding"]);if(T(l)){const u=l[o];if(G.isDiffsRecord(u)){const f=u.bindingVersion;f&&this.aggregateTextDiff(f,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let r;if(E(t)&&T(t.afterValue)){const a=t.afterValue.bindingVersion;r={...t,afterValue:a},this.aggregateTextDiff(r,"version",n)}if(k(t)&&T(t.beforeValue)){const a=t.beforeValue.bindingVersion;r={...t,beforeValue:a},this.aggregateTextDiff(r,"version",n)}}}class cl extends dn{aggregateByDescendantDiffs(e,n,t){var u;if(n[R])return n;if(!T(e))return;const r=Object.keys(e).length,a=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(a!==r)return n[R]=s(),n;let l=o.data.action;for(const f of Object.values(t))if(((u=f==null?void 0:f.data)==null?void 0:u.action)!==l){l=L.replace;break}return l===L.replace?(n[R]=s(),n):(n[R]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let r;const a={...n,beforeDeclarationPaths:k(n)?n.beforeDeclarationPaths:[],beforeValue:k(n)?n.beforeValue:void 0,afterDeclarationPaths:E(n)?n.afterDeclarationPaths:[],afterValue:E(n)?n.afterValue:void 0,action:L.replace};return()=>(r||(r={data:a,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:S.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}),r)}}class ml extends dn{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t,r){if(n[R])return n;const a=ee(e,["rawValues"]);if(!T(a))return;const{diffsMetaKey:o}=r,s=a[o];if(!G.isDiffsRecord(s))return;const l=Object.keys(a).length,u=Object.keys(s).length;if(l!==u)return;const[f]=Object.values(s);if(!f)return;let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},p=y;return E(f)&&(c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(f)&&(c={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},g={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),n[R]={data:f,styles:{before:c,after:g},flags:{before:y,after:p},highlightingMode:an},n}}class yl extends dn{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!T(e))return;let s=super.aggregate(e,n,t,r,a);s||(s={});const l=e[o];if(G.isDiffsRecord(l)){const u=l[R];if(u){let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};E(u)&&(c={...c,isContentVisible:!1,backgroundColor:S.Gray},g={...g,isContentVisible:!0,backgroundColor:S.Green}),k(u)&&(c={...c,isContentVisible:!0,backgroundColor:S.Red},g={...g,isContentVisible:!1,backgroundColor:S.Gray}),s[R]={data:u,highlightingMode:Ve,styles:{before:c,after:g},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const f=l.address;f&&this.aggregateTextDiff(f,"address",s)}return Object.keys(s).length>0?s:void 0}}class gl extends dn{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t,r){if(n[R])return n;const a=ee(e,["rawValues","properties"]);if(!T(a))return;const{diffsMetaKey:o}=r,s=a[o];if(!G.isDiffsRecord(s))return;const l=Object.keys(a).length,u=Object.keys(s).length;if(l!==u)return;const[f]=Object.values(s);if(!f)return;let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},p=y;return E(f)&&(c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(f)&&(c={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},g={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),n[R]={data:f,styles:{before:c,after:g},flags:{before:y,after:p},highlightingMode:Ve},n}}class pl extends dn{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!T(e))return;let s=super.aggregate(e,n,t,r,a);s||(s={});const l=e[o];if(G.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const f=l.protocol;f&&this.aggregateTextDiff(f,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class hl extends dn{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t){if(n[R])return n;if(!Array.isArray(e))return;const r=e.length,a=Object.keys(t).length;if(r!==a)return;const[o]=Object.values(t);if(o)return n[R]=o,n}}class ar{static instance(e){switch(e){case D.BINDING:return this.instances.has(D.BINDING)||this.instances.set(D.BINDING,new fl),this.instances.get(D.BINDING);case D.BINDINGS:return this.instances.has(D.BINDINGS)||this.instances.set(D.BINDINGS,new cl),this.instances.get(D.BINDINGS);case D.EXTENSIONS:return this.instances.has(D.EXTENSIONS)||this.instances.set(D.EXTENSIONS,new ml),this.instances.get(D.EXTENSIONS);case D.MESSAGE:return this.instances.has(D.MESSAGE)||this.instances.set(D.MESSAGE,new yl),this.instances.get(D.MESSAGE);case D.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(D.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(D.MESSAGE_CHANNEL_PARAMETERS,new gl),this.instances.get(D.MESSAGE_CHANNEL_PARAMETERS);case D.SERVER:return this.instances.has(D.SERVER)||this.instances.set(D.SERVER,new pl),this.instances.get(D.SERVER);case D.SERVERS:return this.instances.has(D.SERVERS)||this.instances.set(D.SERVERS,new hl),this.instances.get(D.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new dn),this.instances.get(null)}}}M(ar,"instances",new Map);const bl="[AsyncAPI][WithDiffs]";class vl extends ya{constructor(n){super(n);M(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return bl}createTree(){return new Ws}createNodeDataBuilder(){return new Xs}prepareSource(){return new $s(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return yr(n)?n:null}createNodeFromRaw(n,t,r,a,o){const s=super.createNodeFromRaw(n,t,r,a,o);return!s||!Qr(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isAsyncApiTreeNodeKind(t))return;const a=this.takeSimpleTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return ar.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isAsyncApiTreeNodeKind(n))return ul.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return ga.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,r,a){if(this.isAsyncApiTreeNodeKind(n)&&t)return ar.instance(n).aggregateByDescendantDiffs(t,r,a,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isAsyncApiTreeNodeKind(n)&&r)return rl.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return pa.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Dr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return Yi.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&Qr(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Dl extends mr{constructor(){super()}}const W={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},ha=Object.values(W),Sn="unknown",Sl="any",wl="nothing",$={UNKNOWN:Sn,ANY:Sl,NOTHING:wl,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},Nl=Object.values($);function kl(i){return!i||!ys(i)?!1:Nl.some(e=>e===i)}function El(i){return T(i)&&mt in i}function Ft(i,e){const n=i[e];return be(n)&&n.length>0}function Nn(i){return typeof i=="boolean"}function ln(i){return i==null||typeof i=="boolean"?null:i}const Al=[$.STRING,$.NUMBER,$.INTEGER,$.BOOLEAN];function kr(i){return!!i&&Al.includes(i)}const Tl=[$.ANY,$.NOTHING];function Vl(i){return!!i&&Tl.includes(i)}function yt(i){return!T(i)||be(i)?!1:Ft(i,"allOf")||Ft(i,"oneOf")||Ft(i,"anyOf")}function Zr(i){return T(i)&&Reflect.ownKeys(i).length>0}function Kt(i){return be(i)&&i.length>0}function ba(i,e){if(!T(i)&&!be(i))return!1;if(be(i))return i.length>0;const n=i;if(Kt(n[Zt])||Kt(n[er])||Kt(n[nr])||Zr(n[gi])||Zr(n[pi]))return!0;const t=n[hi];if(t!==void 0&&t!==!1||n[bi]!==void 0)return!0;const r=n[vi];return r!==void 0&&r!==!1}const Pe={root:W.ROOT,definition:W.DEFINITION,property:W.PROPERTY,additionalProperties:W.ADDITIONAL_PROPERTIES,patternProperty:W.PATTERN_PROPERTY,items:W.ITEMS,item:W.ITEM,additionalItems:W.ADDITIONAL_ITEMS,allOf:W.ALL_OF,anyOf:W.ANY_OF,oneOf:W.ONE_OF},xl=(i,e)=>{if(!T(e)||be(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},Cl="x-";function gt(i){return i===void 0||typeof i=="symbol"?!1:(typeof i=="string"?i:`${i}`).startsWith(Cl)}function Rl(i,e){if(!T(e)||be(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>gt(s));if(t.length===0)return e;const r=new Set(t),a=t.reduce((s,l)=>(gt(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&r.has(s)||(o[s]=e[s]);return o.extensions=a,o}const Ml=[xl,Rl];function Ie(i=Pe.root){return{"/allOf":{"/*":()=>Ie(Pe.allOf)},"/oneOf":{"/*":()=>Ie(Pe.oneOf)},"/anyOf":{"/*":()=>Ie(Pe.anyOf)},"/properties":{"/*":()=>Ie(Pe.property)},"/items":()=>({...Ie(Pe.items),"/*":({key:e})=>gs(e)?Ie(Pe.item):{}}),"/additionalProperties":()=>Ie(Pe.additionalProperties),"/additionalItems":()=>Ie(Pe.additionalItems),"/patternProperties":{"/*":()=>Ie(Pe.patternProperty)},kind:i,transformers:Ml}}const _l=new Set([W.ALL_OF,W.ANY_OF,W.ONE_OF]);class ql{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,r=n.length>0,a=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:r,isExpandable:a,initiallyExpanded:a&&!e.isCycle}}isCombinerKind(e){return _l.has(e)}}const va=new ql;function Hl(i){return va.resolveNodeVisibility(i)}function Et(i){return va.isCombinerKind(i)}function Ol(i){return vt(i)}const Pl={type:$.ANY};function Il(i,e){if(Nn(e)){if(e===!1)return!1;if(e===!0&&i===W.ADDITIONAL_PROPERTIES)return Pl}}function Ll(i,e){if(!e||typeof i=="number"||!i)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(i))}function De(i){return"diffs"in i&&"diffsSummary"in i&&"descendantDiffs"in i&&"descendantDiffsSummary"in i&&"diffsSeverities"in i}const jl="extensions",Jl="customAnnotations",ge=class ge extends Dt{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case $.UNKNOWN:case $.ANY:case $.NOTHING:case $.NULL:case $.BOOLEAN:return ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case $.STRING:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,rr,Ji,Fi,Ki];case $.NUMBER:case $.INTEGER:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,rr,Oi,Pi,Ii,Li,ji];case $.OBJECT:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Mi,_i,qi,Hi];case $.ARRAY:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,xi,Ci,Ri];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,r=!1){const a=Ll(n,t),o=El(e)?{brokenRef:String(e.$ref)}:{};return!yt(e)&&T(e)?{...this.pick(e,ge.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:a,...o,_fragment:e,isCycle:r}:{required:a,...o,_fragment:e,isCycle:r}}createNodeValue(e,n,t,r){if(t==null)return null;const a=Il(e,t);if(a!==void 0)return a;if(Nn(t))return t;if(!T(t)||yt(t))return null;const o=kl(t.type)?t.type:$.UNKNOWN;return o===$.UNKNOWN||o===$.ANY||o===$.NOTHING||o===$.NULL||o===$.BOOLEAN?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.STRING?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.NUMBER||o===$.INTEGER?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.OBJECT?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.ARRAY?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};M(ge,"JSON_SCHEMA_TREE_NODE_META_PROPS",[Di,Si,wi,Uo]),M(ge,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[tr,Ni,ki,Ei,Ai,Ti,Vi,jl,Jl]);let pt=ge;const Fl="[JSON Schema]";class Da extends St{constructor(n){const{source:t,materializeDepth:r,logger:a=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"materializeDepth");M(this,"logger");M(this,"nodeDataBuilder");M(this,"lazyState",new Wi);M(this,"crawlHooks",null);this.source=t,this.materializeDepth=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!T(n))return this.tree;const t={parent:null,container:null,ancestors:new wt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},r=Ie();return this.crawlHooks=Ol({source:n,tree:this.tree,supportedNodeKinds:ha,createNodeFromRaw:(a,o,s,l,u)=>this.createNodeFromRaw(a,o,s,l,u),createNodeParams:(a,o,s,l)=>({value:Nn(a)||T(a)&&!Array.isArray(a)?a:null,newDataLevel:!Et(l),parent:o,container:s}),createStateForSimpleNode:(a,o)=>({parent:o,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,o)=>({parent:a.parent,container:o,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isSimpleTreeNode(a),isComplexNode:a=>this.isComplexTreeNode(a),resolveNodeKey:(a,o)=>this.resolveNodeKey(a,o),isDisallowedValue:a=>a==null,shouldSkipNodeCreation:a=>be(a),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:ba}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),wn(n,this.crawlHooks,{state:t,rules:r}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const a={parent:n,container:null,ancestors:zi(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};wn(r.fragment,this.crawlHooks,{state:a,rules:r.rules},!0)}get logPrefix(){return Fl}createTree(){return new Dl}createNodeDataBuilder(){return new pt((n,t)=>this.pick(n,t))}prepareSource(){return T(this.source)?this.source:null}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u,value:f}=o;if(a||T(f)&&yt(f)){const h=this.createNodeMeta(t,o),b={type:le.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,b)}const g=this.createNodeValue(t,r,o),y=this.createNodeMeta(t,o),p={type:le.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:g,meta:y,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,p)}createNodeMeta(n,t){const{value:r,parent:a}=t;return this.nodeDataBuilder.buildNodeMeta(r,n,a,!1)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===le.SIMPLE}isComplexTreeNode(n){return n.type===le.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Kl extends br{constructor(){super()}}class Gl{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!T(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return cr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class Bl extends pt{constructor(e){super(e)}}class Ul extends pn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n))o&&(!E(o.data)&&!k(o.data)||a.add(o.data.type));return a}}class Sa{static instance(e){return this.kindAnyInstance}}M(Sa,"kindAnyInstance",new Ul);const Yl=["properties","patternProperties","allOf","anyOf","oneOf","items"],Wl=new Set(["properties","patternProperties"]);class zl extends qn{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});M(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!T(n))return;const{diffsMetaKey:r}=t,a={};for(const o of this.resolveDescendantDiffsRecords(n,r))for(const[s,l]of Object.entries(o))!l||s===R||!G.isDiff(l)||(a[s]=this.buildDescendantDiffMetadata(l));return Object.keys(a).length>0?a:void 0}resolveDescendantDiffsRecords(n,t){const r=[],a=ue(Reflect.get(n,t));a&&r.push(a);for(const o of Yl){const s=Reflect.get(n,o);if(!T(s)&&!be(s))continue;const l=ue(Reflect.get(s,t));if(l){r.push(l);continue}const u=a==null?void 0:a[o];if(u&&(E(u)||k(u))&&(Wl.has(o)?T(s):be(s))){const g=this.decomposeWholeChildBagDiff(s,u);g&&r.push(g)}}return r}decomposeWholeChildBagDiff(n,t){const r=be(n)?n.map((o,s)=>String(s)):Object.keys(n);if(r.length===0)return;const a={};for(const o of r)a[o]=this.buildDecomposedChildBagEntryDiff(t);return a}buildDecomposedChildBagEntryDiff(n){return E(n)?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=Ve;return E(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},a={...a,increaseLevel:!1},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Green,borderShadowColor:S.Green},o={...o,increaseLevel:!0}),k(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Red,borderShadowColor:S.Red},a={...a,increaseLevel:!0},r={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},o={...o,increaseLevel:!1}),q(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:a,after:o},highlightingMode:s}}}class wa{static instance(e){return this.kindAnyInstance}}M(wa,"kindAnyInstance",new zl);const on="titleRow",Na=["type","format","title"],Jn=["readOnly","writeOnly","deprecated"];class $l extends fe{aggregate(e){const n=e[R],t={};return n?(t[H.TitleRow]=this.buildNodeDiffsSeverity(n),t[H.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[H.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n),t[H.ExtensionsRow]=this.buildNodeDiffsSeverity(n),t[H.CustomAnnotationRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",H.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",H.NestingIndicatorRow,t),this.applyRowSeverity(e,"extensionsRowColorizingDiff",H.ExtensionsRow,t),this.applyCustomAnnotationsRowSeverity(e,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var r,a,o;const t=e;for(const s of Object.values(ce)){const l=fe.maxChangedPropertyMetaDataByDiffType((r=t.validationRowDiffs)==null?void 0:r[s],(a=t.validationRowColorizingDiffs)==null?void 0:a[s],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[s])??{}));l&&(n[$i[s]]=this.buildNodeDiffsSeverity(l))}}applyCustomAnnotationsRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(t.customAnnotationDiffs??{}),...Object.values(t.customAnnotationRowColorizingDiffs??{}));r&&(n[H.CustomAnnotationRow]=this.buildNodeDiffsSeverity(r))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,r=[t[on],...Object.values(t.typeLabelFieldDiffs??{})],a=fe.maxChangedPropertyMetaDataByDiffType(...r);a&&(n[H.TitleRow]=this.buildNodeDiffsSeverity(a))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||q(n)?t.causedAt=n.beforeDeclarationPaths[0]:E(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,r){const a=e[n];a&&(r[t]=this.buildNodeDiffsSeverity(a))}}class Xl extends $l{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);r&&(n[H.DefaultRow]=this.buildNodeDiffsSeverity(r))}applyEnumRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));r&&(n[H.EnumRow]=this.buildNodeDiffsSeverity(r))}applyExamplesRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));r&&(n[H.ExamplesRow]=this.buildNodeDiffsSeverity(r))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));r&&(n[H.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(r))}}class ka{static instance(e){return this.kindPropertyInstance}}M(ka,"kindPropertyInstance",new Xl);function Gt(i,e){for(const n of Object.values(e??{}))gr(n)&&i.add(n.data.type)}class Ql extends vr{aggregate(e,n,t){const r=new Set;if(!e)return r;const a=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){Gt(r,a[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){Gt(r,a[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(a.validationRowValueDiffs??{}))Gt(r,l);continue}gr(s)&&r.add(s.data.type)}return r}}class Ea{static instance(e){return this.kindAnyInstance}}M(Ea,"kindAnyInstance",new Ql);const je={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Aa(i){return typeof i.exclusiveMin=="number"||typeof i.exclusiveMax=="number"?je.OAS_3_1_NUMERIC_EXCLUSIVE:je.OAS_3_0_BOOLEAN_EXCLUSIVE}function Zl(i){return i.dialect??Aa(i)}const ed="?",ye="{value}",Ue="{exclusive_value}",tn=">",ot=">=",rn="<",st="<=",Ne=1,ke=2,Ee=4,Ae=8,ei={0:{lower:void 0,upper:void 0},[Ne]:{lower:`${ot} ${ye}`,upper:void 0},[ke]:{lower:`${tn} ${Ue}`,upper:void 0},[Ee]:{lower:void 0,upper:`${st} ${ye}`},[Ae]:{lower:void 0,upper:`${rn} ${Ue}`},[ke|Ne]:{lower:`${tn} ${ye}`,upper:void 0},[ke|Ee]:{lower:`${tn} ${Ue}`,upper:`${st} ${ye}`},[ke|Ae]:{lower:`${tn} ${Ue}`,upper:`${rn} ${Ue}`},[Ae|Ne]:{lower:`${ot} ${ye}`,upper:`${rn} ${Ue}`},[Ae|Ee]:{lower:void 0,upper:`${rn} ${ye}`},[Ee|Ne]:{lower:`${ot} ${ye}`,upper:`${st} ${ye}`},[ke|Ne|Ee]:{lower:`${tn} ${ye}`,upper:`${st} ${ye}`},[ke|Ne|Ae]:{lower:`${tn} ${ye}`,upper:`${rn} ${Ue}`},[ke|Ee|Ae]:{lower:`${tn} ${Ue}`,upper:`${rn} ${ye}`},[Ae|Ne|Ee]:{lower:`${ot} ${ye}`,upper:`${rn} ${ye}`},[Ne|ke|Ee|Ae]:{lower:`${tn} ${ye}`,upper:`${rn} ${ye}`}};function or(i){return i!=null}function ni(i){return i!==void 0&&i!==!1}function nd(i,e,n){return(i&(Ne|ke))!==(Ne|ke)||n===void 0||typeof e!="number"?i:n>=e?i&~Ne:i&~ke}function td(i,e,n){return(i&(Ee|Ae))!==(Ee|Ae)||n===void 0||typeof e!="number"?i:n<=e?i&~Ee:i&~Ae}function ti(i,e,n){return i.replace(ye,`${e}`).replace(Ue,or(n)?`${n}`:ed)}function rd(i,e){return or(i)||or(e)}function id(i){const{min:e,max:n,exclusiveMin:t,exclusiveMax:r}=i;let a=0;return e!==void 0&&(a|=Ne),ni(t)&&(a|=ke),n!==void 0&&(a|=Ee),ni(r)&&(a|=Ae),a}function Ta(i,e){let n=i;return typeof e.exclusiveMin!="number"&&!(n&Ne)&&(n&=~ke),typeof e.exclusiveMax!="number"&&!(n&Ee)&&(n&=~Ae),n}function ad(i,e){return Ta(i,e)}function od(i,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let r=nd(i,e.min,n);return r=td(r,e.max,t),r}const sd={[je.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:Ta},[je.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:ad}};function ld(i,e){const n=sd[e];let t=id(i);return t=n.applyExclusiveSuppression(t,i),od(t,i)}function Je(i){const e={data:{},visible:!1},n=Zl(i),t=typeof i.exclusiveMin=="number"?i.exclusiveMin:void 0,r=typeof i.exclusiveMax=="number"?i.exclusiveMax:void 0,a=ld(i,n),o=a in ei?{...ei[a]}:void 0;return o!=null&&o.lower&&(e.data.lower=ti(o.lower,i.min,t)),o!=null&&o.upper&&(e.data.upper=ti(o.upper,i.max,r)),e.visible=rd(e.data.lower,e.data.upper),e}const Fn="0",dt="1";class fn{static isDefined(e){return e!=null}static isExclusiveActive(e){return e!==void 0&&e!==!1}static isExclusiveDiffValueActive(e){return e!==void 0&&e!==!1}static diffAdd(e){return!!e&&E(e)}static diffRemove(e){return!!e&&k(e)}static diffReplace(e){return!!e&&q(e)}static readDiffAfterValue(e){if(e&&(E(e)||q(e)))return e.afterValue}static readNumericDiffBeforeValue(e){if(!e||!(k(e)||q(e)))return;const n=e.beforeValue;return typeof n=="number"?n:void 0}static readExclusiveDiffBeforeValue(e){if(!e||!(k(e)||q(e)))return;const n=e.beforeValue;if(typeof n=="number"||typeof n=="boolean")return n}static resolveBeforeAfterLabels(e,n){const t=e.minimum,r=e.exclusiveMinimum,a=e.maximum,o=e.exclusiveMaximum,s=n.minimum,l=n.exclusiveMinimum,u=n.maximum,f=n.exclusiveMaximum,c=this.isDefined(t),g=this.isDefined(a),y=this.isDefined(s),p=this.isDefined(u),h=this.isDefined(l),b=this.isDefined(f),w=this.diffAdd(s),N=this.diffRemove(s),C=this.diffReplace(s),v=this.diffAdd(u),A=this.diffRemove(u),j=this.diffReplace(u),_=Je({min:c&&(!y||w||C)?t:void 0,max:g&&(!p||v||j)?a:void 0,exclusiveMin:this.isExclusiveActive(r)&&(!h||this.diffAdd(l)||this.diffReplace(l)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(l)))?r:void 0,exclusiveMax:this.isExclusiveActive(o)&&(!b||this.diffAdd(f)||this.diffReplace(f)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(f)))?o:void 0}).data;if(!(y||h||p||b))return{before:{..._},after:_};let O,P,Y,de;if(c&&!y&&(O=t),(N||C)&&(O=this.readNumericDiffBeforeValue(s)),g&&!p&&(P=a),(A||j)&&(P=this.readNumericDiffBeforeValue(u)),this.isExclusiveActive(r)&&!h&&(Y=r),this.diffReplace(l)||this.diffRemove(l)){const oe=this.readExclusiveDiffBeforeValue(l);this.isExclusiveDiffValueActive(oe)&&(Y=oe)}if(this.isExclusiveActive(o)&&!b&&(de=o),this.diffReplace(f)||this.diffRemove(f)){const oe=this.readExclusiveDiffBeforeValue(f);this.isExclusiveDiffValueActive(oe)&&(de=oe)}return{before:Je({min:O,max:P,exclusiveMin:Y,exclusiveMax:de}).data,after:_}}static chipTextsFromLabels(e){return[e.lower,e.upper].filter(n=>!!n)}static resolveSlotValueDiffKey(e,n){if(!n)return;const t=e==="lower"?Fn:dt;if(n[t])return t;if(e==="lower")return n.minimum?"minimum":n.exclusiveMinimum?"exclusiveMinimum":void 0;if(n.maximum)return"maximum";if(n.exclusiveMaximum)return"exclusiveMaximum"}static resolveChipDiffType(...e){for(const n of e)if(n)return n.type}static compareValueRangeChipStrings(e,n,t){if(!(e===void 0||n===t))return n===void 0&&t!==void 0?{type:e,action:L.add,afterValue:t}:n!==void 0&&t===void 0?{type:e,action:L.remove,beforeValue:n}:{type:e,action:L.replace,beforeValue:n,afterValue:t}}static classifyValueRangeWholeRowAction(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),a=!!(t.lower||t.upper),o=!!(r.lower||r.upper);if(!a&&o)return L.add;if(a&&!o)return L.remove}static buildValueRangeChipStringDiffs(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),a=this.resolveChipDiffType(n.minimum,n.exclusiveMinimum),o=this.resolveChipDiffType(n.maximum,n.exclusiveMaximum),s={},l=this.compareValueRangeChipStrings(a,t.lower,r.lower);l&&(s[Fn]=l);const u=this.compareValueRangeChipStrings(o,t.upper,r.upper);return u&&(s[dt]=u),s}static collectChangedValueRangeChipDiffs(e,n){const t=this.buildValueRangeChipStringDiffs(e,n);return[t[Fn],t[dt]].filter(r=>r!==void 0)}static inferValueRangeBoundRangeDialect(e,n){const t={min:e.min??e.minimum,max:e.max??e.maximum,exclusiveMin:e.exclusiveMin??e.exclusiveMinimum,exclusiveMax:e.exclusiveMax??e.exclusiveMaximum};if(Aa(t)===je.OAS_3_1_NUMERIC_EXCLUSIVE)return je.OAS_3_1_NUMERIC_EXCLUSIVE;for(const r of["exclusiveMinimum","exclusiveMaximum"]){const a=n[r];if(a&&(E(a)&&typeof a.afterValue=="number"||k(a)&&typeof a.beforeValue=="number"||q(a)&&(typeof a.beforeValue=="number"||typeof a.afterValue=="number")))return je.OAS_3_1_NUMERIC_EXCLUSIVE}return je.OAS_3_0_BOOLEAN_EXCLUSIVE}static isValueRangePartialSingleChipChange(e,n){if(this.classifyValueRangeWholeRowAction(e,n)!==void 0)return!1;const t=this.collectChangedValueRangeChipDiffs(e,n);if(t.length!==1)return!1;const r=t[0];return E(r)||k(r)}static isValueRangePartialBoundChange(e,n){return this.isValueRangePartialSingleChipChange(e,n)}static buildSideEntriesFromLabels(e,n,t){const r=[],a=[{slot:"lower",text:e.lower,oppositeText:t.lower},{slot:"upper",text:e.upper,oppositeText:t.upper}];for(const{slot:o,text:s,oppositeText:l}of a){if(!s)continue;const u=s!==l?this.resolveSlotValueDiffKey(o,n):void 0;r.push({text:s,valueDiffKey:u})}return r}static resolveValueRangeDiffSideEntries(e,n,t,r,a){const{before:o,after:s}=this.resolveBeforeAfterLabels(e,n),l=t===X;if(r){const c=r.data;if(E(c)||k(c)){const g=l?o:s,y=l?s:o;return this.buildSideEntriesFromLabels(g,a,y)}}const u=l?o:s,f=l?s:o;return this.buildSideEntriesFromLabels(u,a,f)}static extractValueRangeCrawlDiffs(e,n){const t=Reflect.get(e,n);return!t||typeof t!="object"?{}:{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}}static isBooleanExclusiveBoundFlagDiff(e,n){return e!=="exclusiveMinimum"&&e!=="exclusiveMaximum"?!1:typeof(E(n)?n.afterValue:k(n)?n.beforeValue:q(n)?n.beforeValue??n.afterValue:void 0)=="boolean"}static filterValueRangeSemanticSourceKeys(e,n){return e.filter(t=>{const r=n[t];return r?t==="exclusiveMinimum"||t==="exclusiveMaximum"?!this.isBooleanExclusiveBoundFlagDiff(t,r):!0:!1})}static isExclusiveBoundValue(e){return typeof e=="number"||typeof e=="boolean"}static readValueRangeBoundFields(e){if(!T(e))return{};const n={};return typeof e.minimum=="number"&&(n.minimum=e.minimum),typeof e.maximum=="number"&&(n.maximum=e.maximum),this.isExclusiveBoundValue(e.exclusiveMinimum)&&(n.exclusiveMinimum=e.exclusiveMinimum),this.isExclusiveBoundValue(e.exclusiveMaximum)&&(n.exclusiveMaximum=e.exclusiveMaximum),n}static resolveValueRangeSideInputFromNodeValue(e){const n=this.readValueRangeBoundFields(e);return{...n,min:n.minimum,max:n.maximum,exclusiveMin:n.exclusiveMinimum,exclusiveMax:n.exclusiveMaximum}}static resolveValueRangeBeforeAfterLabelsForTest(e,n){return this.resolveBeforeAfterLabels(e,n)}static resolveValueRangeChipTextsForTest(e,n,t){const{before:r,after:a}=this.resolveBeforeAfterLabels(e,n);return this.chipTextsFromLabels(t===X?r:a)}}function Be(i){return typeof i=="string"?i:JSON.stringify(i)}function Va(i,e,n){switch(i){case ce.VALUE_LENGTH:case ce.PROPERTIES_COUNT:case ce.ITEMS_COUNT:{if(e.startsWith("min"))return Je({min:Number(n)}).data.lower??Be(n);if(e.startsWith("max"))return Je({max:Number(n)}).data.upper??Be(n);break}case ce.VALUE_RANGE:{if(e==="minimum")return Je({min:Number(n)}).data.lower??Be(n);if(e==="maximum")return Je({max:Number(n)}).data.upper??Be(n);if(e==="exclusiveMinimum")return Je({exclusiveMin:typeof n=="number"?n:!0}).data.lower??Be(n);if(e==="exclusiveMaximum")return Je({exclusiveMax:typeof n=="number"?n:!0}).data.upper??Be(n);break}case ce.VALUE_PATTERN:case ce.VALUE_MULTIPLE_OF:case ce.UNIQUE_ITEMS:return Be(n);default:return Be(n)}return Be(n)}function dd(i){return i.startsWith("min")||i==="exclusiveMinimum"}function ud(i){return i.startsWith("max")||i==="exclusiveMaximum"}function ri(i,e){return e.length<=1||dd(i)?0:ud(i)?1:0}class fd extends G{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});M(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}});M(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}})}aggregate(n,t,r,a,o){const{diffsMetaKey:s}=t,l={};if(o){const c=o.diffs[R];if(c&&(E(c.data)||k(c.data)))return l[R]={...c,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l;const g=o.descendantDiffs[r];if(g)return l[R]=g,this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l}else if(a){const c=a.diffs[R];if(c&&(E(c.data)||k(c.data)))return l[R]={...c,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l;const g=a.descendantDiffs[r];if(g)return l[R]=g,this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l}if(!T(n)&&!Array.isArray(n))return;const u=n[s],f=G.isDiffsRecord(u)?u:void 0;if(f){const c=f[R];c&&this.aggregateTextDiff(c,R,l);const g=f.title,y=f.format,p=f.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:g},l);const h=f.description;if(h&&this.aggregateTextDiff(h,"description",l),!this.hasWholeNodeAddOrRemoveDiff(l))for(const w of Jn){const N=f[w];G.isDiff(N)&&this.aggregateMetaFlagDiff(N,w,l)}T(n)&&this.aggregateValidationRowDiffs(n,f,l),this.aggregateExtensionsDiffs(f,l)}return this.aggregateCustomAnnotationsDiffs(n,f??{},s,l),this.stripMetaFlagDiffsWhenWholeNode(l),this.aggregateTitleRowDiff(l),Object.keys(l).length>0?l:void 0}aggregateByDescendantDiffs(n,t,r,a){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,r),this.aggregateExtensionsUniformRowColorizingDiff(n,t),this.aggregateNodeChangesSummary(n,t,a),t}aggregateNodeChangesSummary(n,t,r){const a=new Set;for(const s of Object.values(t.typeLabelFieldDiffs??{}))s!=null&&s.data&&a.add(s.data);const o=new Set;for(const s of Rs(n,r))a.has(s)||s!=null&&s.type&&o.add(s.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,r){const a=t[R];if(a&&(E(a.data)||k(a.data))){const y=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(a));t.nestingIndicatorRowColorizingDiff=y,t.extensionsRowColorizingDiff=y;return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const y=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(y){const p=this.resolveTypePrimitivenessCrossing(o),h=p&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,p):this.asReplaceRowColorizingDiff(y);t.nestingIndicatorRowColorizingDiff={...h,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!T(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(y=>r[y]);if(l.some(y=>!y))return;const[u,...f]=l;if(!E(u.data)&&!k(u.data))return;const c=u.data.action;f.every(y=>y.data.action===c&&(E(y.data)||k(y.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}aggregateExtensionsUniformRowColorizingDiff(n,t){if(t.extensionsRowColorizingDiff)return;const r=Object.values(t.extensionsDiffs??{});if(r.length===0)return;const a=T(n)?Reflect.get(n,"extensions"):void 0,o=T(a)?Object.keys(a).length:0;if(r.length!==o)return;const[s,...l]=r;if(!E(s)&&!k(s))return;const u=s.action;l.every(c=>c.action===u&&(E(c)||k(c)))&&(t.extensionsRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(s)))}withNestingLevelFlags(n){const{data:t}=n;return E(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:k(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return kr(n)||Vl(n)}resolveTypePrimitivenessCrossing(n){var l;const t=(l=n.type)==null?void 0:l.data;if(!t||!q(t))return;const r=typeof t.beforeValue=="string"?t.beforeValue:void 0,a=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(r),s=this.isChildlessTypeValue(a);if(o!==s)return{beforeIsPrimitive:o,afterIsPrimitive:s}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:r}=n;return q(r)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:r.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:L.add,afterValue:!0,afterDeclarationPaths:r.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],r=Reflect.get(n,"properties");T(r)&&t.push(...Object.keys(r));const a=Reflect.get(n,"patternProperties");T(a)&&t.push(...Object.keys(a));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,f)=>t.push(String(f))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(this.normalizeBooleanFlagDiffReplace(n))}normalizeBooleanFlagDiffReplace(n){return!q(n)||typeof n.afterValue!="boolean"?n:n.afterValue?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}}aggregateTypeLabelFieldDiffs(n,t){const r={};for(const a of Na){const o=n[a];G.isDiff(o)&&(r[a]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(r).length>0&&(t.typeLabelFieldDiffs=r)}aggregateTitleRowDiff(n){const t=n[R];if(t&&(E(t.data)||k(t.data))){n[on]=t;return}for(const r of Jn){const a=n[r];if(a){n[on]=this.asReplaceFlagDiffForTitleRow(a);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const r=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(t));r&&(n[on]=this.asReplaceRowColorizingDiff(r))}buildTypeLabelFieldDiffMetadata(n){return q(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:S.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:S.Green},removeBefore:{textHighlighterColor:S.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES;return E(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},r={...r,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},r={...r,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),(We(n)||q(n))&&(t={...t,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},r={...r,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}asReplaceRowColorizingDiff(n){const{data:t}=n;return q(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return E(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}:k(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const r=this.buildChangedPropertyMetaDataFromDiff(n);return{...r,styles:{before:{...r.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...r.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),r=typeof n.beforeValue=="boolean",a=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:r?void 0:S.Yellow,borderShadowColor:r?S.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:a?void 0:S.Yellow,borderShadowColor:a?S.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return E(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:L.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[R];return!!t&&(E(t.data)||k(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Jn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return q(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:L.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:L.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const r=t[R];if(!(!r||!(E(r.data)||k(r.data)))&&T(n))for(const[a,o]of Object.entries(ir)){const s=a;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(r)))}}aggregateWholeNodeInheritedExtensionsDiffs(n,t){const r=t[R];if(!r||!(E(r.data)||k(r.data))||!T(n))return;const a=Reflect.get(n,"extensions");if(!T(a))return;const o=Object.keys(a).filter(gt);if(o.length===0)return;const{data:s}=r,l=a,u={};if(E(s))for(const f of o)u[f]={type:s.type,scope:s.scope,description:s.description,action:L.add,afterValue:l[f],afterDeclarationPaths:s.afterDeclarationPaths??[]};else if(k(s))for(const f of o)u[f]={type:s.type,scope:s.scope,description:s.description,action:L.remove,beforeValue:l[f],beforeDeclarationPaths:s.beforeDeclarationPaths??[]};t.extensionsDiffs=u}aggregateExtensionsDiffs(n,t){const r={};for(const[a,o]of Object.entries(n))!gt(a)||!G.isDiff(o)||(r[a]=o);Object.keys(r).length>0&&(t.extensionsDiffs=r)}aggregateCustomAnnotationsDiffs(n,t,r,a){const o={},s={},l=(y,p)=>{if(q(p)){const b=this.buildBooleanAwareChipReplaceDiffMetadata(p);o[y]=b,s[y]=this.asReplaceRowColorizingDiff(b);return}const h=this.buildChangedPropertyMetaDataFromDiff(p);o[y]=h,s[y]=h},u=t.customAnnotations;if(G.isDiff(u)){const{type:y,scope:p,description:h}=u;if(E(u)&&T(u.afterValue))for(const[b,w]of Object.entries(u.afterValue))l(b,{type:y,scope:p,description:h,action:L.add,afterValue:w==null?void 0:w.value,afterDeclarationPaths:u.afterDeclarationPaths??[]});else if(k(u)&&T(u.beforeValue))for(const[b,w]of Object.entries(u.beforeValue))l(b,{type:y,scope:p,description:h,action:L.remove,beforeValue:w==null?void 0:w.value,beforeDeclarationPaths:u.beforeDeclarationPaths??[]});this.assignCustomAnnotationDiffs(a,o,s);return}if(!T(n))return;const f=Reflect.get(n,"customAnnotations");if(!T(f))return;const c=Reflect.get(f,r),g=G.isDiffsRecord(c)?c:{};for(const y of Object.keys(f)){const p=g[y];if(G.isDiff(p)){l(y,p);continue}const h=Reflect.get(f,y);if(!T(h))continue;const b=Reflect.get(h,r),w=G.isDiffsRecord(b)?b.value:void 0;G.isDiff(w)&&l(y,w)}this.assignCustomAnnotationDiffs(a,o,s)}assignCustomAnnotationDiffs(n,t,r){Object.keys(t).length>0&&(n.customAnnotationDiffs=t),Object.keys(r).length>0&&(n.customAnnotationRowColorizingDiffs=r)}aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,t){var f,c;const r=t[R];if(!r||!(E(r.data)||k(r.data))||!T(n))return;const a=Reflect.get(n,"customAnnotations");if(!T(a))return;const o=Object.keys(a);if(o.length===0)return;const{data:s}=r,l=a,u={};if(E(s))for(const g of o)u[g]=this.buildChangedPropertyMetaDataFromDiff({type:s.type,scope:s.scope,description:s.description,action:L.add,afterValue:(f=l[g])==null?void 0:f.value,afterDeclarationPaths:s.afterDeclarationPaths??[]});else if(k(s))for(const g of o)u[g]=this.buildChangedPropertyMetaDataFromDiff({type:s.type,scope:s.scope,description:s.description,action:L.remove,beforeValue:(c=l[g])==null?void 0:c.value,beforeDeclarationPaths:s.beforeDeclarationPaths??[]});Object.keys(u).length>0&&(t.customAnnotationDiffs=u,t.customAnnotationRowColorizingDiffs=u)}aggregateValidationRowDiffs(n,t,r){for(const[a,o]of Object.entries(ir)){const s=o.filter(v=>t[v]);if(s.length===0)continue;const l=a,u=l===ce.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(r.valueRangeCrawlDiffs=u);const f=l===ce.VALUE_RANGE?fn.filterValueRangeSemanticSourceKeys(s,t):s,c=s.map(v=>t[v]).filter(v=>G.isDiff(v));if(c.length===0)continue;r.validationRowColorizingDiffs??(r.validationRowColorizingDiffs={});const g=fn.resolveValueRangeSideInputFromNodeValue(n),y=u?fn.classifyValueRangeWholeRowAction(g,u):void 0;if(u&&(y===L.add||y===L.remove)){const v=y===L.add?this.mergeDiffActionFragment(c,L.add,this.resolveWholeRowDisplayValues(l,s,c,L.add)):this.mergeDiffActionFragment(c,L.remove,this.resolveWholeRowDisplayValues(l,s,c,L.remove)),A=this.buildChangedPropertyMetaDataFromDiff(v);r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=A,r.validationRowColorizingDiffs[l]=A;continue}if(u&&fn.isValueRangePartialBoundChange(g,u)){this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l);continue}const p=o.some(v=>!s.includes(v)&&Reflect.get(n,v)!==void 0),h=!p&&c.every(E),b=!p&&c.every(k);if(h){const v=this.resolveWholeRowDisplayValues(l,s,c,L.add),A=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(c,L.add,v));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=A,r.validationRowColorizingDiffs[l]=A;continue}if(b){const v=this.resolveWholeRowDisplayValues(l,s,c,L.remove),A=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(c,L.remove,v));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=A,r.validationRowColorizingDiffs[l]=A;continue}if(f.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l));continue}const w=f.map(v=>t[v]).filter(v=>G.isDiff(v)).map(v=>this.buildChangedPropertyMetaDataFromDiff(v)),N=fe.maxChangedPropertyMetaDataByDiffType(...w);if(!N)continue;const C=this.buildValidationRowValueDiffs(l,f,t);r.validationRowValueDiffs??(r.validationRowValueDiffs={}),r.validationRowValueDiffs[l]=C,r.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(N),u&&this.mergeValueRangeLabelChipDiffs(n,u,r,l)}}mergeValueRangeLabelChipDiffs(n,t,r,a){const o=fn.buildValueRangeChipStringDiffs(fn.resolveValueRangeSideInputFromNodeValue(n),t),s=[Fn,dt];if(!s.some(c=>o[c]))return;r.validationRowValueDiffs??(r.validationRowValueDiffs={});const f={...r.validationRowValueDiffs[a]??{}};for(const c of s){const g=o[c];if(!g||f[c])continue;const y=c===Fn?"lower":"upper",p=this.attachValueRangeChipDiffPaths(g,y,t);f[c]=this.buildValueRangeLabelChipDiffMetadata(p)}r.validationRowValueDiffs[a]=f}applyValueRangeFormattingRowColorizingDiff(n,t,r,a){var f;const o=(f=r.validationRowValueDiffs)==null?void 0:f[a];if(!o||!Object.values(o).some(c=>c!==void 0))return;const s=n.map(c=>t[c]).filter(c=>G.isDiff(c));if(s.length===0)return;const l=s.map(c=>this.buildChangedPropertyMetaDataFromDiff(c)),u=fe.maxChangedPropertyMetaDataByDiffType(...l);u&&(r.validationRowColorizingDiffs[a]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,r){const a=t==="lower"?[r.minimum,r.exclusiveMinimum]:[r.maximum,r.exclusiveMaximum],o=[],s=[];for(const l of a)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return q(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:S.Green},removeBefore:{borderShadowColor:S.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,r){const a=ps[n],o={};for(const s of t){const l=r[s];if(!G.isDiff(l)||a[s]===void 0)continue;const f=this.buildListValueDiffMetadata(l);o[s]=fe.maxChangedPropertyMetaDataByDiffType(o[s],f)??f}return o}resolveWholeRowDisplayValues(n,t,r,a){const o=[];return t.forEach((s,l)=>{const u=r[l],f=a===L.add?E(u)?u.afterValue:void 0:k(u)?u.beforeValue:void 0;f!==void 0&&o.push(Va(n,s,f))}),o}mergeDiffActionFragment(n,t,r){const a=n[0],o=n.flatMap(l=>k(l)||q(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>E(l)||q(l)?l.afterDeclarationPaths:[]);return t===L.add?{type:a.type,scope:a.scope,description:a.description,action:L.add,afterValue:r,afterDeclarationPaths:s}:{type:a.type,scope:a.scope,description:a.description,action:L.remove,beforeValue:r,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return q(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:S.Green},removeBefore:{borderShadowColor:S.Red,isFontMuted:!0}})}}class cd extends fd{aggregate(e,n,t,r,a){const o=super.aggregate(e,n,t,r,a);if(!T(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=G.isDiffsRecord(l),f=this.resolveWholeListFieldDiff(e,"enum",s),c=this.resolveWholeListFieldDiff(e,"examples",s),g=this.resolveListFieldItemDiffs(e,"enum",s),y=this.resolveListFieldItemDiffs(e,"examples",s),p=this.resolveAllowedAdditionalPropertyNamesDiff(t,r,s),h=!!f||!!c||Object.keys(g).length>0||Object.keys(y).length>0||!!p;if(!o&&!u&&!h){const w=this.resolveRequiredMetaDiff(t,r,s);if(!w)return;const N={required:w};return this.aggregatePropertyTitleRowDiff(N),N}const b={...o??{}};if(u){const w=l.default;G.isDiff(w)&&(b.default=this.buildDefaultValueDiffMetadata(w))}if(f&&(b.enumDiff=f),Object.keys(g).length>0&&(b.enumValueDiffs=g),c&&(b.examplesDiff=c),Object.keys(y).length>0&&(b.examplesValueDiffs=y),p!=null&&p.diff&&(b.allowedAdditionalPropertyNamesDiff=p.diff),Object.keys((p==null?void 0:p.valueDiffs)??{}).length>0&&(b.allowedAdditionalPropertyNamesValueDiffs=p.valueDiffs),this.aggregateEnumRowColorizingDiff(e,b),this.aggregateExamplesRowColorizingDiff(e,b),this.aggregateDefaultRowColorizingDiff(e,b),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(p==null?void 0:p.mergedValues,b),this.hasWholeNodeAddOrRemoveDiff(b))delete b.required;else{const w=this.resolveRequiredMetaDiff(t,r,s);w&&(b.required=w)}return this.stripMetaFlagDiffsWhenWholeNode(b),this.aggregatePropertyTitleRowDiff(b),Object.keys(b).length>0?b:void 0}aggregatePropertyTitleRowDiff(e){const n=e[R];if(n&&(E(n.data)||k(n.data))){e[on]=n;return}for(const r of Jn){const a=e[r];if(a){e[on]=this.asReplaceFlagDiffForTitleRow(a);return}}const t=e.required;if(t){e[on]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var c;if(!n||typeof e!="string"||!e)return;const r=n.value(),a=(c=n.meta())==null?void 0:c._fragment;if(!T(a)&&!T(r))return;const o=String(e),s=T(a)?Reflect.get(a,t):void 0,l=T(a)?Reflect.get(a,"required"):void 0,u=T(r)&&"required"in r?r.required:void 0,f=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if(G.isDiffsRecord(s)){const g=s.required;if(G.isDiff(g)){const y=this.resolveRequiredMetaDiffFromWholeArrayDiff(g,o);if(y)return y}if(G.isDiffsRecord(g)){const y=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(g,o,f);if(y)return y}}if(Array.isArray(f)){const g=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(f,t,o);if(g)return g}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(E(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(k(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(q(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],r=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==r.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const r=t.indexOf(n);if(r>=0){const a=e[String(r)];if(G.isDiff(a))return this.buildChangedPropertyMetaDataFromDiff(a)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const r=Reflect.get(e,n);if(!G.isDiffsRecord(r))return;const a=e.indexOf(t);if(a>=0){const o=r[String(a)];if(G.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(r,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(G.isDiff(t)){if(E(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(k(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return q(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const r=Reflect.get(e,t);if(!G.isDiffsRecord(r))return;const a=r[n];if(G.isDiff(a)){if(E(a)&&Array.isArray(a.afterValue))return this.buildChangedPropertyMetaDataFromDiff(a);if(k(a)&&Array.isArray(a.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(a)}}resolveListFieldItemDiffs(e,n,t){const r={},a=Reflect.get(e,n);if(!Array.isArray(a))return r;const o=Reflect.get(a,t);return G.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,r),r}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,r]of Object.entries(e))!r||n[t]||(n[t]=this.buildListValueDiffMetadata(r))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var c;if(e!==W.ADDITIONAL_PROPERTIES||!n)return;const r=(c=n.meta())==null?void 0:c._fragment;if(!T(r))return;const a=Reflect.get(r,"propertyNames"),o=Reflect.get(r,t),s=G.isDiffsRecord(o)?o.propertyNames:void 0;if(G.isDiff(s)){const g=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(s);if(g)return g}if(!T(a))return;const l=Reflect.get(a,"enum");if(!Array.isArray(l)||l.length===0)return;const u=this.resolveWholeListFieldDiff(a,"enum",t),f=this.resolveListFieldItemDiffs(a,"enum",t);if(!(!u&&Object.keys(f).length===0))return{diff:u,valueDiffs:Object.keys(f).length>0?f:void 0,mergedValues:l}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(E(e)&&T(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(k(e)&&T(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,r,a){if(!Array.isArray(e)||e.length===0)return;const o=n[R];if(o&&(E(o.data)||k(o.data))){n[a]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const s=n[t];if(s){n[a]=s;return}const l=n[r];if(!l||Object.keys(l).length===0)return;const u=Object.values(l);if(u.length===e.length){const[c,...g]=u;if((E(c.data)||k(c.data))&&g.every(y=>y.data.action===c.data.action)){n[a]=this.buildChangedPropertyMetaDataFromDiff(c.data);for(const y of Object.keys(l)){const p=l[y];p&&(l[y]=this.buildChipAddRemoveDiffMetadata(p.data))}return}}const f=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(l));f&&(n[a]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),r=t!=null,a=n[R];if(a&&(E(a.data)||k(a.data))){(r||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(a));return}const o=n.default;if(!o)return;const s=o.data;if(E(s)||k(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}q(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class sr{static instance(e){return this.kindPropertyInstance}}M(sr,"kindPropertyInstance",new cd);const md="[JSON Schema][WithDiffs]";class yd extends Da{constructor(n){super(n);M(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return md}createTree(){return new Kl}createNodeDataBuilder(){return new Bl((n,t)=>this.pick(n,t))}prepareSource(){return new Gl(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,r,a,o){const s=super.createNodeFromRaw(n,t,r,a,o);return!s||!De(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isJsonSchemaTreeNodeKind(t))return;const a=this.takeTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return sr.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isJsonSchemaTreeNodeKind(n))return Ea.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return wa.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,r,a){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return sr.instance(n).aggregateByDescendantDiffs(t,r,a,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isJsonSchemaTreeNodeKind(n)&&r)return Sa.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return ka.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Dr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return ha.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&De(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function Bt(i){return!!i&&Object.keys(i).length>0}function ii(i){return!!i&&i.size>0}function gd(i){const e=new Set;for(const n of Object.values(i.diffs))n&&e.add(n.data.type);for(const n of Object.values(i.descendantDiffs))n&&e.add(n.data.type);for(const n of i.diffsSummary)e.add(n);for(const n of i.descendantDiffsSummary)e.add(n);for(const n of Object.values(i.diffsSeverities))n&&e.add(n.type);return e}function ai(i,e){if(!(Bt(i.diffs)||Bt(i.descendantDiffs)||ii(i.diffsSummary)||ii(i.descendantDiffsSummary)||Bt(i.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=gd(i);for(const r of t)if(e.diffTypes.has(r))return!0;return!1}function lr(i,e,n){if(i.isCycle)return ai(i,e);if(n.visiting.has(i.id))return!1;n.visiting.add(i.id);try{return ai(i,e)?!0:i.type===le.COMPLEX?i.nestedNodes().some(t=>lr(t,e,n)):i.childrenNodes().some(t=>lr(t,e,n))}finally{n.visiting.delete(i.id)}}function xa(i,e){return lr(i,e,{visiting:new Set})}function pd(i,e,n){if(!n){const o=i.map(()=>({visible:!0})),s=i.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],r=[];let a=0;for(;a<i.length;){if(e(i[a])){t.push({visible:!0}),r.push({kind:"node",node:i[a],sourceIndex:a}),a++;continue}const o=a;for(;a<i.length&&!e(i[a]);)a++;const s=i[o].id,l=a-o;for(let u=o;u<a;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});r.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:r}}function hd(i,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return pd(i,r=>xa(r,t),n)}function Ca(i){return i.kind===D.MESSAGE}function bd(i){return i.kind===D.MESSAGE_SECTION_SELECTOR}function Ra(i){return i.kind===D.MESSAGE_CONTENT}function vd(i){return i.kind===D.MESSAGE_HEADERS&&i.key==="headers"}function Dd(i){return i.kind===D.MESSAGE_PAYLOAD&&i.key==="payload"}function Ma(i){return i.kind===D.MESSAGE_CHANNEL}function Sd(i){return i.kind===D.MESSAGE_CHANNEL_PARAMETERS}function _a(i){return i.kind===D.MESSAGE_OPERATION}function Er(i){return i.kind===D.EXTENSIONS}function At(i){return i.kind===D.BINDINGS}function Ut(i){return i.kind===D.BINDING}function wd(i){return Ra(i)||Ma(i)||_a(i)}function Nd(i){return i.kind===D.SERVERS}function kd(i){return i.kind===D.SERVER}function Me(i,e,n){var r;if(!T(i))return!1;if(!e)return(i==null?void 0:i[n])!==void 0;const t=(r=e[n])==null?void 0:r.data;return t?k(t)?t.beforeValue!==void 0:E(t)?t.afterValue!==void 0:q(t)?t.beforeValue!==void 0||t.afterValue!==void 0:We(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(i==null?void 0:i[n])!==void 0}function Re(i,e,n){return!!i&&(n===void 0||(Array.isArray(n)?n.includes(i.kind):i.kind===n))&&i instanceof e}function Ed(i){return Re(i,Ms,D.BINDINGS)}function Yt(i){return Re(i,Ce,D.BINDING)}function Ad(i){return Re(i,Ce)}function Td(i){return Re(i,Ce,D.MESSAGE_CHANNEL)}function Vd(i){return Re(i,Ce)}function lt(i){return Re(i,Ce,D.SERVER)}function xd(i){return Re(i,Ce)}function Cd(i){return Re(i,Ce,D.MESSAGE_HEADERS)}function Rd(i){return Re(i,Ce,D.MESSAGE_PAYLOAD)}function Md(i){return Re(i,Ce,D.MESSAGE)}function _d(i){return Re(i,Ce,D.MESSAGE_OPERATION)}function qd(i){return Re(i,Ce,D.MESSAGE_SECTION_SELECTOR)}function Hd(i){return Re(i,Ce,[D.MESSAGE_CONTENT,D.MESSAGE_CHANNEL,D.MESSAGE_OPERATION])}const qa=i=>{const e=qe(),{diff:n,descendantDiffs:t,diffsSeverities:r}=i,a=m.useMemo(()=>r==null?void 0:r["address-row"],[r]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>Un(a==null?void 0:a.causedAt),[a]);switch(e){case _e:return d.jsx(Mn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(gn,{left:d.jsx(Wt,{...i,layoutSide:X}),right:d.jsx(Wt,{...i,layoutSide:ae})})});default:return d.jsx(yn,{content:d.jsx(Wt,{...i,layoutSide:ae})})}},Od={send:"bg-sky-400",receive:"bg-green-500"},Wt=i=>{const{action:e,address:n,layoutSide:t,diff:r}=i,{[te]:a}=i,o=m.useCallback(()=>{const l=r&&Pd(r);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Od[e]} text-white rounded-md`,children:e.toUpperCase()});if(r&&(E(r.data)&&t===X&&(u=null),k(r.data)&&t===ae&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(jt,{value:n,variant:K.h4,layoutSide:t,diff:r,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:f,beforeSuffix:c,afterSuffix:g,diff:y}=l,p=t===X?c:g;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(jt,{value:f,variant:K.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(jt,{value:p,variant:K.h4,layoutSide:t,diff:y,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,r,t]),s=m.useMemo(()=>{const l=new Set;if(r){const{styles:u}=r;t===X?l.add(ne.background(u.before.backgroundColor)):l.add(ne.background(u.after.backgroundColor))}return Array.from(l)},[r,t]);return d.jsx("div",{"data-precededby":a,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${Yn} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Pd(i){const{data:e}=i;if(!q(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const r=n.indexOf("{"),a=t.indexOf("{"),o=r===-1?n:n.slice(0,r),s=a===-1?t:t.slice(0,a);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:r===-1?"":n.slice(r),afterSuffix:a===-1?"":t.slice(a),diff:{...i,data:l}}}qa.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Id=m.memo(i=>i.mergedSource===null?null:d.jsx(Tn,{fallback:d.jsx(Vn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Ld,{...i})})),Ld=m.memo(i=>{const{mergedSource:e,operationKeys:n,displayMode:t=Rn,devMode:r=!1,noHeading:a=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=i,u=m.useMemo(()=>Ke(r),[r]),f=m.useMemo(()=>new vl({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),c=m.useMemo(()=>(f==null?void 0:f.build())??null,[f]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",c);const g=c==null?void 0:c.root;return!g||!Ca(g)?null:d.jsx(Sr.Provider,{value:s,children:d.jsx(wr.Provider,{value:l,children:d.jsx(Xi.Provider,{value:r,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Cn.Provider,{value:_e,children:d.jsx(He.Provider,{value:0,children:d.jsx(Wr,{node:g,noHeading:a})})})})})})})});Id.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Ar=m.createContext(void 0);function Tr(){return m.useContext(Ar)}const kn={suppressRootNestingIndicator:!0},Qe=m.memo(i=>{const{beforeLevel:e,afterLevel:n,children:t}=i,[r,a]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{a(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:r,afterLevel:o}),[r,o]);return d.jsx(hs.Provider,{value:l,children:t})});Qe.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function Ha(i){let e;for(const n of i){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class jd extends br{constructor(){super()}}const Tt={PROPERTY:"property"},Bn=Object.values(Tt),Q={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class Jd extends St{constructor(){super(...arguments);M(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,r,a){}}const pe=class pe{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,r=pe.isArrayItemKey(e);return pe.transformRawJsoValueToBaseJsoNodeValue(n,t,r)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const r=pe.getValueType(e),a=pe.isPrimitiveValue(r);return{title:n,value:e,valueType:r,isPrimitive:a,isArrayItem:t,isPredefinedValueSet:pe.isPredefinedValueSet(r)}}static isPredefinedValueSet(e){return e===Q.BOOLEAN||e===Q.NULL}static isPrimitiveValue(e){return e!==Q.JSON_SCHEMA&&e!==Q.MULTI_SCHEMA&&e!==Q.OBJECT&&e!==Q.ARRAY}static getValueType(e){return typeof e=="string"?Q.STRING:typeof e=="number"?Q.NUMBER:typeof e=="boolean"?Q.BOOLEAN:typeof e=="object"?e===null?Q.NULL:Array.isArray(e)?Q.ARRAY:pe.isJsonSchema(e)?Q.JSON_SCHEMA:pe.isMultiSchema(e)?Q.MULTI_SCHEMA:Q.OBJECT:Q.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=tr in e&&typeof e.type=="string"&&Yo.some(r=>r===e.type)||er in e&&Array.isArray(e.oneOf)&&e.oneOf.every(r=>pe.isJsonSchema(r))||nr in e&&Array.isArray(e.anyOf)&&e.anyOf.every(r=>pe.isJsonSchema(r))||Zt in e&&Array.isArray(e.allOf)&&e.allOf.every(r=>pe.isJsonSchema(r))||mt in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([ki,Wo,zo,Hi,$o,Xo,Qo,tr,Ni,rr,Ai,Oi,Li,ji,Pi,Ii,Fi,Ji,Ki,Ci,xi,Ri,qi,_i,bi,vi,Mi,Ei,gi,hi,pi,Zt,er,nr,Zo,Vi,Si,wi,Ti,Di,es,mt]);return n&&Object.keys(e).every(r=>t.has(r)||pe.isExtensionPropertyInJsonSchema(r)||pe.isAllowedCustomPropertyInJsonSchema(r))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&T(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!yr(e))return e;const t=ue(e[n]);if(!t)return e;const r=new Set(Object.keys(e)),a=new Set(Object.keys(t)),o=r.intersection(a);let s;for(const l of o){const u=e[l],f=t[l];if(u===void 0||f===void 0||!q(f))continue;const{beforeValue:c,afterValue:g}=f,y=T(c),p=Array.isArray(c),h=T(g),b=Array.isArray(g);if(!(p&&h||y&&b))continue;s||(s={...e});const N={...c,...g};s[l]=N}return s??e}};M(pe,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:Q.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let F=pe;const Fd=(i,e,n,t,r)=>F.mergeComparisonBetweenArrayAndObject(e,r.diffMetaKeys.diffsMetaKey);function Oa(){return{"/*":()=>Oa(),transformers:[Fd],kind:Tt.PROPERTY}}function Kd(i){return vt(i)}const Gd=new Set(Bn);class Bd extends Dt{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){if(!this.isJsoTreeNodeKind(e))return null;const a=F.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:a,after:a}}isJsoTreeNodeKind(e){return Gd.has(e)}}class Ud extends pn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n))o&&(!E(o.data)&&!k(o.data)||a.add(o.data.type));return a}}class Pa{static instance(e){if(!this.instances.has(null)){const n=new Ud;this.instances.set(null,n)}return this.instances.get(null)}}M(Pa,"instances",new Map);class Yd extends qn{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});M(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!T(n)&&!Array.isArray(n))return;const{diffsMetaKey:r}=t,a=ue(n[r]);if(!a)return;const o={};for(const[s,l]of Object.entries(a)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_FLAGS,g=this.DEFAULT_DIFF_FLAGS,y=Ve;if(E(l)){const{afterValue:p}=l,h=F.getValueType(p),b=F.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},c={...c,increaseLevel:!1},f={isContentVisible:b,isHeaderVisible:!0,backgroundColor:S.Green},g={...g,increaseLevel:!0},y=an}if(k(l)){const{beforeValue:p}=l,h=F.getValueType(p);u={isContentVisible:F.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:S.Red},c={...c,increaseLevel:!0},f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={...g,increaseLevel:!1},y=an}if(q(l)){const{beforeValue:p,afterValue:h}=l,b=F.getValueType(p),w=F.getValueType(h),N=F.isPrimitiveValue(b),C=F.isPrimitiveValue(w),v=F.isPredefinedValueSet(b),A=F.isPredefinedValueSet(w);u={isContentVisible:N,isHeaderVisible:!0,backgroundColor:S.Yellow},N&&(v?u.borderShadowColor=S.Yellow:u.textHighlighterColor=S.Yellow),f={isContentVisible:C,isHeaderVisible:!0,backgroundColor:S.Yellow},C&&(A?f.borderShadowColor=S.Yellow:f.textHighlighterColor=S.Yellow),y=ns}o[s]={data:l,styles:{before:u,after:f},flags:{before:c,after:g},highlightingMode:y}}return o}}class Ia{static instance(e){if(!this.instances.has(null)){const n=new Yd;this.instances.set(null,n)}return this.instances.get(null)}}M(Ia,"instances",new Map);class Wd extends fe{aggregate(e){const n=e[R];if(n){const o=n.data,s={type:o.type,causedAt:[]};return q(o)||k(o)?s.causedAt=o.beforeDeclarationPaths[0]:E(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[H.TitleRow]:s}}const t=e.value;if(!t)return;const r=t.data,a={type:r.type,causedAt:[]};return q(r)||k(r)?a.causedAt=r.beforeDeclarationPaths[0]:E(r)&&(a.causedAt=r.afterDeclarationPaths[0]),{[H.TitleRow]:a}}}class La{static instance(e){return this.instances.has(null)||this.instances.set(null,new Wd),this.instances.get(null)}}M(La,"instances",new Map);class zd extends vr{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const a of Object.values(e))a&&r.add(a.data.type);return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!E(n)&&!k(n)&&!q(n)&&!We(n))return!1;return!0}}class $d{static instance(e){return new zd}}class Xd extends G{isComplexValue(e){return T(e)||Array.isArray(e)}aggregate(e,n,t,r,a){const o={};if(r){const s=r.diffs[R];if(s){const{data:l}=s;if(E(l)){const{afterValue:u}=l,f=F.getValueType(u);if(!F.isPrimitiveValue(f)&&this.isComplexValue(u)){const g=u[t],y=F.getValueType(g),p=F.isPrimitiveValue(y),h={data:{...l,afterValue:g},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},after:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:S.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:an,inherited:!0};return o[R]=h,o}return o[R]=s,o}if(k(l)){const{beforeValue:u}=l,f=F.getValueType(u);if(!F.isPrimitiveValue(f)&&this.isComplexValue(u)){const g=u[t],y=F.getValueType(g),p=F.isPrimitiveValue(y),h={data:{...l,beforeValue:g},styles:{before:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:S.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:an,inherited:!0};return o[R]=h,o}return o[R]=s,o}if(q(l)){const{beforeValue:u,afterValue:f}=l,c=F.getValueType(u),g=F.getValueType(f),y=F.isPrimitiveValue(c),p=F.isPrimitiveValue(g);if(y&&p)return o[R]=s,o;if(!y&&this.isComplexValue(u)&&p){const h=u[t],b=F.getValueType(h),w=F.isPrimitiveValue(b),N=F.isPredefinedValueSet(b),C={data:{...l,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:w,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:an,inherited:!0};return w&&(C.styles.before.textHighlighterColor=S.Yellow),N&&(C.styles.before.borderShadowColor=S.Yellow),o[R]=C,o}if(!p&&this.isComplexValue(f)&&y){const h=f[t],b=F.getValueType(h),w=F.isPrimitiveValue(b),N=F.isPredefinedValueSet(b),C={data:{...l,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},after:{isContentVisible:w,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:an,inherited:!0};return w&&(C.styles.after.textHighlighterColor=S.Yellow),N&&(C.styles.after.borderShadowColor=S.Yellow),o[R]=C,o}if(!y&&this.isComplexValue(u)&&!p&&this.isComplexValue(f)){const h=u[t],b=f[t],w=F.getValueType(h),N=F.getValueType(b),C=F.isPrimitiveValue(w),v=F.isPrimitiveValue(N),A=F.isPredefinedValueSet(w),j=F.isPredefinedValueSet(N),_={data:{...l,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&C,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?S.Gray:S.Yellow,textHighlighterColor:h!==void 0?S.Yellow:void 0},after:{isContentVisible:b!==void 0&&v,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?S.Gray:S.Yellow,textHighlighterColor:b!==void 0?S.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:an,inherited:!0};return C&&(_.styles.before.textHighlighterColor=S.Yellow),v&&(_.styles.after.textHighlighterColor=S.Yellow),A&&(_.styles.before.borderShadowColor=S.Yellow),j&&(_.styles.after.borderShadowColor=S.Yellow),o[R]=_,o}}}else{const l=r.descendantDiffs[t];if(l)return o[R]=l,o}}}}class ja{static instance(e){return this.instances.has(null)||this.instances.set(null,new Xd),this.instances.get(null)}}M(ja,"instances",new Map);class Qd extends Jd{constructor(n){const{source:t,diffsMetaKeys:r,supportJsonSchema:a=!1,logger:o=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"supportJsonSchema");M(this,"diffsMetaKeys");M(this,"logger");M(this,"nodeDataBuilder");M(this,"CHANGE_SEVERITIES",{[ts]:6,[rs]:5,[is]:4,[as]:3,[Gi]:2,[os]:1});this.source=t,this.supportJsonSchema=a,this.diffsMetaKeys=r,this.logger=o,this.tree=new jd,this.nodeDataBuilder=new Bd}build(){if(!T(this.source))return this.tree;cr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new wt,diffMetaKeys:this.diffsMetaKeys},t=Oa(),r=Kd({source:this.source,tree:this.tree,supportedNodeKinds:Bn,createNodeFromRaw:(a,o,s,l,u)=>this.createNodeFromRaw(a,o,s,l,u),createNodeParams:(a,o)=>({value:a??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(a,o)=>({parent:o,container:null,ancestors:a.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(a,o)=>({parent:a.parent,container:o,ancestors:a.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:a=>a.type===le.SIMPLE,isComplexNode:a=>a.type===le.COMPLEX,resolveNodeKey:(a,o)=>this.resolveNodeKey(a,o),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,o)=>{if(!T(o)&&!Array.isArray(o))return!0;const s=a.value();return s?this.supportJsonSchema&&(s.before.valueType===Q.JSON_SCHEMA||s.after.valueType===Q.JSON_SCHEMA||s.before.valueType===Q.MULTI_SCHEMA||s.after.valueType===Q.MULTI_SCHEMA):!1}});return wn(this.source,r,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return T(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,a,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,r,o),f=this.createNodeMeta(t,o),c={type:le.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:f,newDataLevel:l},g=this.tree.createSimpleNode(n,t,r,!1,c);this.assignNodeDiffs(g,r,o);const p=g.diffs[R];if(p){const{data:h}=p;if(E(h)&&u&&(u.before=F.DEFAULT_BASE_JSO_NODE_VALUE),k(h)&&u&&(u.after=F.DEFAULT_BASE_JSO_NODE_VALUE),q(h)){const{beforeValue:b}=h,w=F.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=w)}}return g}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,()=>null)}createNodeDiffs(n,t,r){if(!this.isJsoTreeNodeKind(t))return;const a=r.parent&&this.isJsoSimpleTreeNodeWithDiffs(r.parent)?r.parent:void 0,o=r.container&&this.isJsoComplexTreeNodeWithDiffs(r.container)?r.container:void 0;return ja.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isJsoTreeNodeKind(n))return $d.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return Ia.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isJsoTreeNodeKind(n)&&r)return Pa.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return La.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Dr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const f=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(r);f&&Object.assign(n.diffsSeverities,f)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const r=t.diffsSeverities["title-row"];if(r)return{"title-row":r}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[R];if(!t||!q(t.data))return!1;const r=F.getValueType(t.data.beforeValue),a=F.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(r),s=this.isJsoComplexValueType(a);return o!==s}isJsoComplexValueType(n){return n===Q.OBJECT||n===Q.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[R]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const r=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(r)return r}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===le.SIMPLE||n.type===le.COMPLEX))}isJsoTreeNodeKind(n){return Bn.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===le.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===le.COMPLEX}maxDiffType(n){let t;for(const r of n)this.compareDiffTypes(r,t)>0&&(t=r);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const Vr=m.createContext({});function Ja(){return m.useContext(Vr)}const Le={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function Fa(i,e){if(e)return{type:"object",properties:{[i]:e}}}function dr(i,e,n,t){if(!e)return;const r=n==null?void 0:n.data,a=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[i]:e,...r&&a?{[a]:{[i]:r}}:{}}}}function Zd(i,e){if(e&&!(e.valueType!==Le.JSON_SCHEMA&&e.valueType!==Le.MULTI_SCHEMA))return T(e.value)?Fa(i,e.value):void 0}function eu(i,e,n,t){if(e&&!(e.before.valueType!==Le.JSON_SCHEMA&&e.before.valueType!==Le.MULTI_SCHEMA&&e.after.valueType!==Le.JSON_SCHEMA&&e.after.valueType!==Le.MULTI_SCHEMA)){if((e.before.valueType===Le.JSON_SCHEMA||e.before.valueType===Le.MULTI_SCHEMA)&&T(e.before.value))return dr(i,e.before.value,n,t);if((e.after.valueType===Le.JSON_SCHEMA||e.after.valueType===Le.MULTI_SCHEMA)&&T(e.after.value))return dr(i,e.after.value,n,t)}}const xr=m.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?d.jsx("span",{className:t,children:`${n}`}):null});xr.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ka(i){const{appearance:e}=i;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function nu(i){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=i,r=Ka({appearance:e});return m.useMemo(()=>[r,e==="text"?ne.highlighter(n):"",e==="block"?ne.borderShadow(t):""].filter(Boolean).join(" "),[e,t,r,n])}const ut=m.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,borderShadowColor:a}=i,o=nu({appearance:t,textHighlighterColor:r,borderShadowColor:a});return d.jsx(xr,{isVisible:e,value:n,className:o})});ut.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Cr=i=>{const{node:e,supportJsonSchema:n=!1}=i,{[te]:t}=i,r=xe(),a=Hn(),{beforeLevel:o,afterLevel:s}=_n(),{EmbeddedSchemaDiffsComponent:l}=Ja(),[u,f]=m.useState(!0),c=m.useCallback(()=>{f(O=>!O)},[]),g=e.value(),y=e.diffs,p=e.descendantDiffsSummary,h=m.useMemo(()=>y[R],[y]),b=m.useCallback(O=>{if(!g)return d.jsx(d.Fragment,{});if(!h)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(ut,{isVisible:g.after.isPrimitive,value:g.after.value,appearance:g.after.isPredefinedValueSet?"block":"text"}),!u&&d.jsx(ra,{values:Array.from(p)})]});const{styles:P}=h;return O===X?d.jsx(ut,{isVisible:P.before.isContentVisible,value:g.before.value,appearance:g.before.isPredefinedValueSet?"block":"text",textHighlighterColor:P.before.textHighlighterColor,borderShadowColor:P.before.borderShadowColor}):O===ae?d.jsx(ut,{isVisible:P.after.isContentVisible,value:g.after.value,appearance:g.after.isPredefinedValueSet?"block":"text",textHighlighterColor:P.after.textHighlighterColor,borderShadowColor:P.after.borderShadowColor}):d.jsx(d.Fragment,{})},[u,p,g,h]),w=m.useMemo(()=>{const O=$e(e);return ie(O,{resolveDiff:()=>h})},[e,h]),N=e.childrenNodes(),C=m.useMemo(()=>{const O=!!g,P=!(g!=null&&g.before.isPrimitive)&&(g==null?void 0:g.before.valueType)!==Q.UNKNOWN,Y=!(g!=null&&g.after.isPrimitive)&&(g==null?void 0:g.after.valueType)!==Q.UNKNOWN;return O&&(P||Y)},[g]),v=m.useMemo(()=>!(g!=null&&g.before.isArrayItem)&&!(g!=null&&g.after.isArrayItem),[g]),A=m.useMemo(()=>n?eu(e.key,g,h,a):void 0,[a,e.key,g,h,n]);if(A)return a?l?d.jsx(Qe,{beforeLevel:Math.max(o-1,0),afterLevel:Math.max(s-1,0),children:d.jsx(l,{schema:A,expandedDepth:2,displayMode:r,diffMetaKeys:a,customizationOptions:kn},e.id)}):(console.error("supportJsonSchema is set but no embeddedSchemaDiffsComponent was provided to JsoDiffsViewer",e),null):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const j=Ha(N),[_,J]=(()=>{let O=o+1,P=s+1;const[Y]=N,de=Y==null?void 0:Y.diffs[R];return de&&j&&(O=de.flags.before.increaseLevel?o+1:o,P=de.flags.after.increaseLevel?s+1:s),[O,P]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(me,{"data-precededby":t,value:`${e.key}`,expandable:C,expanded:u,onClickExpander:C?c:void 0,variant:K.body2,enableHeaderValue:v,subheader:b,usage:Nt.JsoProperty,highlightingMode:h==null?void 0:h.highlightingMode,...w}),u&&d.jsx(Qe,{beforeLevel:_,afterLevel:J,children:N.map(O=>d.jsx(Cr,{"data-precededby":x.JSO_PROPERTY,node:O,supportJsonSchema:n},O.id))})]})};Cr.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const Vt=m.memo(i=>i.mergedSource===null?null:d.jsx(Tn,{fallback:d.jsx(Vn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(tu,{...i})})),tu=m.memo(i=>{const{mergedSource:e,displayMode:n=Rn,initialLevel:t=0,supportJsonSchema:r=!1,devMode:a=!1,diffMetaKeys:o,diffTypes:s,embeddedSchemaDiffsComponent:l}=i,{[te]:u}=i,f=m.useMemo(()=>Ke(a),[a]),c=m.useMemo(()=>new Qd({source:e,supportJsonSchema:r,diffsMetaKeys:o,logger:f}),[e,r,o,f]),g=m.useMemo(()=>c.build(),[c]),y=m.useMemo(()=>({EmbeddedSchemaDiffsComponent:l}),[l]);f.debug("[JSO Diffs] Source:",e),f.debug("[JSO Diffs] Tree:",g);const p=g.root;if(!p)return null;const h=p.childrenNodes();if(h.length===0)return null;const b=Ha(h),[w,N]=(()=>{let C=t,v=t;const[A]=h,j=A.diffs[R];return j&&b&&(C=j.flags.before.increaseLevel?t:t-1,v=j.flags.after.increaseLevel?t:t-1),[C,v]})();return d.jsx(Vr.Provider,{value:y,children:d.jsx(Sr.Provider,{value:o,children:d.jsx(wr.Provider,{value:s,children:d.jsx(xn.Provider,{value:n,children:d.jsx(Cn.Provider,{value:_e,children:d.jsx(Qe,{beforeLevel:w,afterLevel:N,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:h.map((C,v)=>d.jsx(Cr,{"data-precededby":v===0?u:x.JSO_PROPERTY,node:C,supportJsonSchema:r},C.id))})})})})})})})});Vt.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
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
   * of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]},required:!1}}]}}],raw:"FC<JsoEmbeddedSchemaDiffsComponentProps>"},description:""}}};class ru extends mr{constructor(){super()}}function Ga(){return{"/*":()=>Ga(),kind:Tt.PROPERTY}}function iu(i){return vt(i)}const au=new Set(Bn);class ou extends Dt{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!this.isJsoTreeNodeKind(e)||e!==Tt.PROPERTY?null:F.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return au.has(e)}}class su extends St{constructor(n){const{source:t,supportJsonSchema:r=!1,materializeDepth:a,logger:o=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"supportJsonSchema");M(this,"materializeDepth");M(this,"logger");M(this,"nodeDataBuilder");M(this,"lazyState",new Wi);M(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=r,this.materializeDepth=a,this.logger=o,this.tree=new ru,this.nodeDataBuilder=new ou}build(){if(!T(this.source))return this.tree;const n={parent:null,container:null,ancestors:new wt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=Ga();return this.crawlHooks=iu({source:this.source,tree:this.tree,supportedNodeKinds:Bn,createNodeFromRaw:(r,a,o,s,l)=>this.createNodeFromRaw(r,a,o,s,l),createNodeParams:(r,a,o)=>({value:r??null,newDataLevel:!0,container:o,parent:a}),createStateForSimpleNode:(r,a)=>({parent:a,container:null,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),createStateForComplexNode:(r,a)=>({parent:r.parent,container:a,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),isSimpleNode:r=>this.isJsoSimpleTreeNode(r),isComplexNode:r=>this.isJsoComplexTreeNode(r),resolveNodeKey:(r,a)=>this.resolveNodeKey(r,a),isDisallowedValue:r=>r===void 0,shouldStopAfterNodeCreation:(r,a)=>{if(!T(a)&&!Array.isArray(a))return!0;const o=r.value();return o?this.supportJsonSchema&&(o.valueType===Q.JSON_SCHEMA||o.valueType===Q.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:bs}}),wn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const a={parent:n,container:null,ancestors:zi(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};wn(r.fragment,this.crawlHooks,{state:a,rules:r.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u}=o;if(a){const y=this.createNodeMeta(t,o),p={type:le.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,p)}const f=this.createNodeValue(t,r,{...o,parent:s,container:l}),c=this.createNodeMeta(t,o),g={type:le.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:f,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r,parent:a=null}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===le.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const Ba=m.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=Ka({appearance:t});return d.jsx(xr,{isVisible:e,value:n,className:r})});Ba.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Rr=i=>{const{node:e,supportJsonSchema:n=!1}=i,{[te]:t}=i,r=xe(),a=mn(),{EmbeddedSchemaComponent:o}=Ja(),[s,l]=m.useState(!0),u=m.useCallback(()=>{l(h=>!h)},[]),f=e.value(),c=m.useMemo(()=>!!f&&!f.isPrimitive,[f]),g=m.useCallback(()=>f?d.jsx(Ba,{isVisible:f.isPrimitive,value:f.value,appearance:f.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[f]),y=e.childrenNodes(),p=m.useMemo(()=>n?Zd(e.key,f):void 0,[e.key,f,n]);return p?o?d.jsx(o,{schema:p,expandedDepth:2,displayMode:r,customizationOptions:kn},e.id):(console.error("supportJsonSchema is set but no embeddedSchemaComponent was provided to JsoViewer",e),null):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(me,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:s,onClickExpander:u,variant:K.body2,enableHeaderValue:!(f!=null&&f.isArrayItem),subheader:g,usage:Nt.JsoProperty}),s&&d.jsx(He.Provider,{value:a+1,children:y.map(h=>d.jsx(Rr,{"data-precededby":x.JSO_PROPERTY,node:h,supportJsonSchema:n}))})]})};Rr.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const xt=m.memo(i=>i.source===null?null:d.jsx(Tn,{fallback:d.jsx(Vn,{componentName:"JSO Viewer"}),children:d.jsx(lu,{...i})})),lu=m.memo(i=>{const{source:e,displayMode:n=Rn,layoutMode:t=nn,initialLevel:r=0,supportJsonSchema:a=!1,devMode:o=!1,embeddedSchemaComponent:s}=i,{[te]:l}=i,u=m.useMemo(()=>Ke(o),[o]),f=m.useMemo(()=>new su({source:e,supportJsonSchema:a,logger:u}),[e,a,u]),c=m.useMemo(()=>f.build(),[f]),g=m.useMemo(()=>({EmbeddedSchemaComponent:s}),[s]);u.debug("[JSO] Source:",e),u.debug("[JSO] Tree:",c);const y=c.root;if(!y)return null;const p=y.childrenNodes();return p.length===0?null:d.jsx(Vr.Provider,{value:g,children:d.jsx(xn.Provider,{value:n,children:d.jsxs(Cn.Provider,{value:t,children:[" ",d.jsx(He.Provider,{value:r,children:d.jsx("div",{"data-testid":"jso-viewer",children:p.map((h,b)=>d.jsx(Rr,{"data-precededby":b===0?l:x.JSO_PROPERTY,node:h,supportJsonSchema:a},h.id))})})]})})})});xt.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
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
   * of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]},required:!1}}]}}],raw:"FC<JsoEmbeddedSchemaComponentProps>"},description:""}}};const Mr=({source:i,initialLevel:e})=>d.jsx(xt,{source:i,initialLevel:e}),_r=({mergedSource:i,initialLevel:e,displayMode:n,diffMetaKeys:t})=>d.jsx(Vt,{mergedSource:i,initialLevel:e,displayMode:n,diffMetaKeys:t});Mr.__docgenInfo={description:"",methods:[],displayName:"DefaultExtensionsJsoComponent"};_r.__docgenInfo={description:"",methods:[],displayName:"DefaultExtensionsJsoDiffsComponent"};const qr=m.createContext(null);function du(){const i=m.useContext(qr);if(!i)throw new Error("useJsonSchemaEmbeddingContext must be used within JsonSchemaNextViewer or JsonSchemaNextDiffsViewer");return i}const uu=" or null";function ze(i,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(Nn(i))return"";const n=i,t=(n==null?void 0:n.type)??Sn,r=n&&typeof n=="object"&&"format"in n?n.format:void 0,a=n==null?void 0:n.title,o=n!=null&&n.nullable?uu:"";let s=String(t);return r&&(s+=`(${r})`),a&&(s+=`<${a}>`),s+=o,s}function oi(i){return i!=null}function Ua(i){if(!T(i))return{};const e={};return typeof i.minLength=="number"&&(e.minLength=i.minLength),typeof i.maxLength=="number"&&(e.maxLength=i.maxLength),typeof i.pattern=="string"&&(e.pattern=i.pattern),typeof i.minimum=="number"&&(e.minimum=i.minimum),typeof i.maximum=="number"&&(e.maximum=i.maximum),(typeof i.exclusiveMinimum=="number"||typeof i.exclusiveMinimum=="boolean")&&(e.exclusiveMinimum=i.exclusiveMinimum),(typeof i.exclusiveMaximum=="number"||typeof i.exclusiveMaximum=="boolean")&&(e.exclusiveMaximum=i.exclusiveMaximum),typeof i.multipleOf=="number"&&(e.multipleOf=i.multipleOf),typeof i.minProperties=="number"&&(e.minProperties=i.minProperties),typeof i.maxProperties=="number"&&(e.maxProperties=i.maxProperties),typeof i.uniqueItems=="boolean"&&(e.uniqueItems=i.uniqueItems),typeof i.minItems=="number"&&(e.minItems=i.minItems),typeof i.maxItems=="number"&&(e.maxItems=i.maxItems),e}function Ya(i){const e=ln(i);if(!e)return[];const n=[],t=Ua(e);return t.minLength!==void 0&&n.push(ve.MIN_LENGTH),t.maxLength!==void 0&&n.push(ve.MAX_LENGTH),t.pattern!==void 0&&n.push(ve.PATTERN),t.minimum!==void 0&&n.push(ve.MINIMUM),t.maximum!==void 0&&n.push(ve.MAXIMUM),oi(t.exclusiveMinimum)&&n.push(ve.EXCLUSIVE_MINIMUM),oi(t.exclusiveMaximum)&&n.push(ve.EXCLUSIVE_MAXIMUM),t.multipleOf!==void 0&&n.push(ve.MULTIPLE_OF),t.minProperties!==void 0&&n.push(ve.MIN_PROPERTIES),t.maxProperties!==void 0&&n.push(ve.MAX_PROPERTIES),t.uniqueItems!==void 0&&n.push(ve.UNIQUE_ITEMS),t.minItems!==void 0&&n.push(ve.MIN_ITEMS),t.maxItems!==void 0&&n.push(ve.MAX_ITEMS),n}function fu(i){return i!=null}function cu(i){return!!(i!=null&&i.extensions)&&Object.keys(i.extensions).length>0}function mu(i){return!!(i!=null&&i.customAnnotations)&&Object.keys(i.customAnnotations).length>0}const yu="x-deprecated-reason";function gu(i){var n;const e=(n=i==null?void 0:i.extensions)==null?void 0:n[yu];return typeof e=="string"&&e.length>0?e:void 0}class Wa{resolveNodeVisibility(e,n){const t=ln(e),r=Qi(n),a=gu(t),o=r&&!!(t!=null&&t.description),s=r&&!!a,l=r&&fu(t==null?void 0:t.default),u=r&&Array.isArray(t==null?void 0:t.examples)&&t.examples.length>0,f=r&&Array.isArray(t==null?void 0:t.enum)&&t.enum.length>0,c=r&&Ya(e).length>0,g=r&&cu(t),y=r&&mu(t),p=l||u||f||c||g||y;return{showDescription:o,showDeprecationReasonRow:s,deprecationReason:a,showDefaultRow:l,showExamplesRow:u,showEnumValuesRow:f,showValidationsSection:c,showExtensionsRow:g,showCustomAnnotationsRow:y,showContentSection:o||s||p,showAnyAdditionalInfoRow:p}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:r,showEnumValuesRow:a,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!r,isDescriptionListLastRow:e&&t&&!a&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&ba(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const On=new Wa;function zn(i,e){return On.resolveNodeVisibility(i,e)}function Hr(i,e){return On.resolveListLastRowFlags(i,e)}function pu(i,e){return On.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Or(i){return On.resolveIsExpandable(i)}function Ct(i,e){return On.resolveInitiallyExpanded(i,e)}function Se(i,e){return On.resolveExpanderExpanded(i,e)}function za(i,e,n){if(!n)return i;const t=e===X;return(n===L.add?t:!t)?Math.max(i-1,0):i}var Fe=(i=>(i.Default="default",i.JsonSchema="json-schema",i))(Fe||{});const hu={[Fe.JsonSchema]:pr};function bu(i){return hu[i]??Yn}const Kn=m.memo(i=>{const{title:e,layoutSide:n,usage:t=Fe.Default,lastInvisible:r=!1,diff:a,levelReductionAction:o}=i,{[te]:s}=i,l=hr(n),u=m.useMemo(()=>za(l,n,o),[l,n,o]),f=m.useMemo(()=>bu(t),[t]),c=m.useMemo(()=>{if(!(a!=null&&a.data))return[];const{styles:b}=a,w=[];return n===X&&w.push(ne.background(b.before.backgroundColor)),n===ae&&w.push(ne.background(b.after.backgroundColor)),w},[a,n]),g=m.useMemo(()=>{const b=a==null?void 0:a.data;return b?E(b)?n===ae:k(b)?n===X:!0:!0},[a,n]),y=t===Fe.JsonSchema,p=typeof e=="function"?e(n):e,h=g&&p!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":s,className:["nesting-indicator-title-row-content flex w-full h-full",y?"items-stretch":"",f,...c].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(bt,{level:u,lastInvisible:r&&g})}),h&&d.jsx(_s,{title:p})]})});Kn.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Pn=m.memo(i=>{const e=qe(),{diffsSeverities:n,diffsSeverityPlacement:t=H.TitleRow}=i,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),a=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>Un(r==null?void 0:r.causedAt),[r]);switch(e){case _e:return d.jsx(Mn,{diffType:a,diffTypeCause:o,hidden:!1,children:d.jsx(gn,{left:d.jsx(Kn,{...i,layoutSide:X}),right:d.jsx(Kn,{...i,layoutSide:ae})})});case nn:return d.jsx(yn,{content:d.jsx(Kn,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Pn.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Pr=m.createContext(null);function Rt(){const i=m.useContext(Pr);if(!i)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return i}const si=" or null";class vu{static takeFieldDiffs(e){const n=e.diffs.typeLabelFieldDiffs;if(!(!n||Object.keys(n).length===0))return n}static resolveTypeSideValue(e,n){const t=ln(e.value()),r=(t==null?void 0:t.type)??Sn,a=this.takeFieldDiffs(e);return rt(r,a==null?void 0:a.type,n)??String(r)}static resolveSideDisplay(e,n,t){if(n!=null&&n.brokenRef)return{kind:Ye.NO_DIFFS,text:`$ref: ${n.brokenRef}`};const r=e.value();if(Nn(r))return{kind:Ye.NO_DIFFS,text:""};const a=this.takeFieldDiffs(e);if(!a)return{kind:Ye.NO_DIFFS,text:ze(r,n)};if(this.shouldUseMonolithicTypeLabelHighlight(a)){const c=Object.values(a).find(Boolean);return c?{kind:Ye.WHOLE_DIFFS,text:this.buildMonolithicSideLabel(r,a,t),diff:this.buildMonolithicTypeLabelDiffMetadata(c)}:{kind:Ye.NO_DIFFS,text:ze(r,n)}}const o=[],s=this.buildTypeSideSegment(r,a.type,t);s&&o.push(s);const l=this.buildWrappedSideSegment(this.takeMergedFormat(r),a.format,t,this.wrapFormat);l&&o.push(l);const u=this.buildWrappedSideSegment(r==null?void 0:r.title,a.title,t,this.wrapTitle);u&&o.push(u);const f=this.takeNullableSuffixSegment(r);return f&&o.push(f),o.length===0?{kind:Ye.NO_DIFFS,text:ze(r,n)}:{kind:Ye.PARTIAL_DIFFS,segments:o}}static shouldUseMonolithicTypeLabelHighlight(e){const n=Na.map(r=>[r,e[r]]).filter(r=>!!r[1]);return n.length===0||n.length===1||!e.type||!e.title||!e.format?!1:new Set(n.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,n,t){const r=[],a=rt((e==null?void 0:e.type)??Sn,n.type,t)??(e==null?void 0:e.type)??Sn;r.push(String(a));const o=this.resolveWrappedFieldSideText(this.takeMergedFormat(e),n.format,t,this.wrapFormat);o&&r.push(o);const s=this.resolveWrappedFieldSideText(e==null?void 0:e.title,n.title,t,this.wrapTitle);return s&&r.push(s),e!=null&&e.nullable&&r.push(si.trim()),r.join(" ")}static buildTypeSideSegment(e,n,t){const r=(e==null?void 0:e.type)??Sn,a=rt(r,n,t);return a===void 0?n?void 0:{text:String(r)}:{text:a,diff:n}}static buildWrappedSideSegment(e,n,t,r){const a=this.resolveWrappedFieldSideText(e,n,t,r);if(a!==void 0)return{text:a,diff:n}}static resolveWrappedFieldSideText(e,n,t,r){const a=rt(e,n,t);if(a===void 0)return!n&&this.hasNonBlankText(e)?r(e):void 0;if(this.hasNonBlankText(a))return r(a)}static takeNullableSuffixSegment(e){if(!(Nn(e)||!(e!=null&&e.nullable)))return{text:si.trim()}}static takeMergedFormat(e){if(!e||typeof e!="object"||!("format"in e))return;const n=e.format;return typeof n=="string"?n:void 0}static hasNonBlankText(e){return!!e&&e.trim().length>0}static wrapFormat(e){return`(${e})`}static wrapTitle(e){return`<${e}>`}static buildMonolithicTypeLabelDiffMetadata(e){const{data:n}=e;return q(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Yellow}}}:E(n)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Green}}}:k(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class Oe{static takeSharedRowDiffs(e){return e.diffs}static takeKindAnyNodeDiffs(e){return e.diffs}static takePropertyRowDiffsForRequired(e){if(e.kind===W.PROPERTY)return e.diffs}static takePropertyRowDiffs(e){return e.diffs}}class Du extends Oe{static takeDiff(e){return this.takeSharedRowDiffs(e)[on]??e.diffs[R]}}class Su extends Oe{static takeReadOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).readOnly}static takeWriteOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).writeOnly}static takeDeprecatedDiff(e){return this.takeKindAnyNodeDiffs(e).deprecated}static takeRawDiffs(e){const n=this.takeKindAnyNodeDiffs(e),t=this.takePropertyRowDiffsForRequired(e),r={};for(const o of Jn){const s=n[o];s!=null&&s.data&&(r[o]=s.data)}const a=t==null?void 0:t.required;return a!=null&&a.data&&(r.required=$a.normalizeMetaDiffForDisplay(a)),r}static hasContentChange(e){return Object.keys(this.takeRawDiffs(e)).length>0}}class $a extends Oe{static takeMetaDiff(e){var n;return(n=this.takePropertyRowDiffsForRequired(e))==null?void 0:n.required}static normalizeMetaDiffForDisplay(e){if(!(e!=null&&e.data))return;const n=e.data;return E(n)?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:k(n)?{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}:q(n)?{type:n.type,scope:n.scope,description:n.description,action:L.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths,afterDeclarationPaths:n.afterDeclarationPaths}:n}static takeMetaDiffForDisplay(e){return this.normalizeMetaDiffForDisplay(this.takeMetaDiff(e))}static isVisibleOnSide(e,n,t){if(!n)return e===!0;const r=t===X;return E(n)?!r:k(n)?r:q(n)?r?n.beforeValue===!0:n.afterValue===!0:e===!0}}class wu extends Oe{static takeNestingIndicatorRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).nestingIndicatorRowColorizingDiff}static takeNodeChangesSummary(e){return this.takeKindAnyNodeDiffs(e).nodeChangesSummary}static isWholePropertyAddOrRemove(e){const n=e.diffs[R];if(!n)return!1;const{data:t}=n;return t.action==="add"||t.action==="remove"}}class Nu extends Oe{static takeRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).extensionsRowColorizingDiff}static takeDiffs(e){return this.takeKindAnyNodeDiffs(e).extensionsDiffs}}class ku extends Oe{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).customAnnotationDiffs)==null?void 0:t[n]}static takeRowColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).customAnnotationRowColorizingDiffs)==null?void 0:t[n]}static hasAnyDiff(e){const n=this.takeKindAnyNodeDiffs(e);return Object.keys(n.customAnnotationDiffs??{}).length>0||Object.keys(n.customAnnotationRowColorizingDiffs??{}).length>0}static resolveSideEntries(e,n,t){return Xa.resolveSideEntries(e,n,t)}}class Xa extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).default}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).defaultRowColorizingDiff}static resolveSideEntries(e,n,t){if(!n)return e===void 0?[]:[{text:he.formatListDisplayValue(e)}];const r=t===X,{data:a}=n;if(E(a))return r?[]:[{text:he.formatListDisplayValue(a.afterValue??e)}];if(k(a))return r?[{text:he.formatListDisplayValue(a.beforeValue??e)}]:[];if(q(a)){const o=r?a.beforeValue??e:a.afterValue??e;return[{text:he.formatListDisplayValue(o)}]}return e===void 0?[]:[{text:he.formatListDisplayValue(e)}]}}class Eu extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).enumDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).enumValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).enumRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?Ze.resolveWholeListSideEntries(e,n,r):Ze.resolvePartialListSideEntries(e,t,r)}}class Au extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).examplesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).examplesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).examplesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?Ze.resolveWholeListSideEntries(e,n,r):Ze.resolvePartialListSideEntries(e,t,r)}}class Tu extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?Ze.resolveWholeListSideEntries(e,n,r):Ze.resolvePartialListSideEntries(e,t,r)}}class Qa extends Oe{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowDiffs)==null?void 0:t[n]}static takeValueDiffs(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowValueDiffs)==null?void 0:t[n]}static takeColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowColorizingDiffs)==null?void 0:t[n]}static takeValueRangeCrawlDiffs(e){return this.takeKindAnyNodeDiffs(e).valueRangeCrawlDiffs}static hasSemanticDiffs(e,n){if(this.takeDiff(e,n)||this.takeColorizingDiff(e,n))return!0;const t=this.takeValueDiffs(e,n);return t?Object.values(t).some(r=>r!==void 0):!1}static resolveSideEntries(e,n,t,r,a,o){return e===ce.VALUE_RANGE&&(o!=null&&o.crawlDiffs)?this.ValueRange.resolveValueRangeDiffSideEntries(this.ValueRange.resolveValueRangeSideInputFromNodeValue(o.nodeValue),o.crawlDiffs,a,t,r):t?Ze.resolveWholeListSideEntries(n,t,a):Ze.resolveValidationRowPartialSideEntries(e,n,r,a)}}M(Qa,"ValueRange",fn);class Ze{static resolveCore(e,n,t,r,a,o){const s=t===X,l=new Set,u=[];for(let f=0;f<e.length;f++){const c=r(f),g=c?n==null?void 0:n[c]:void 0,y=he.formatListDisplayValue(e[f]);if(!g||!c){u.push({text:y});continue}if(l.has(c))continue;l.add(c);const{data:p}=g;if(E(p)){s||u.push({text:a(c,p.afterValue??e[f],y),valueDiffKey:c,diff:g});continue}if(k(p)){s&&u.push({text:a(c,p.beforeValue??e[f],y),valueDiffKey:c,diff:g});continue}q(p)&&u.push({text:s?a(c,p.beforeValue??e[f],y):a(c,p.afterValue??e[f],y),valueDiffKey:c,diff:g})}for(const[f,c]of Object.entries(n??{}))!c||l.has(f)||k(c.data)&&s&&(u.push({text:a(f,c.data.beforeValue,he.formatListDisplayValue(c.data.beforeValue)),valueDiffKey:f,diff:c}),l.add(f));return u.sort((f,c)=>o(f.valueDiffKey,f.text)-o(c.valueDiffKey,c.text))}static resolveMergedTextIndex(e,n){for(let t=0;t<e.length;t++)if(he.formatListDisplayValue(e[t])===n)return t;return e.length}static resolveWholeListSideEntries(e,n,t){const r=t===X,{data:a}=n;return E(a)?r?[]:(Array.isArray(a.afterValue)?a.afterValue:e).map(s=>({text:he.formatListDisplayValue(s)})):k(a)?r?(Array.isArray(a.beforeValue)?a.beforeValue:e).map(s=>({text:he.formatListDisplayValue(s)})):[]:q(a)?(r?Array.isArray(a.beforeValue)?a.beforeValue:e:Array.isArray(a.afterValue)?a.afterValue:e).map(s=>({text:he.formatListDisplayValue(s)})):e.map(o=>({text:he.formatListDisplayValue(o)}))}static resolvePartialListSideEntries(e,n,t){return this.resolveCore(e,n,t,r=>String(r),(r,a)=>he.formatListDisplayValue(a),(r,a)=>this.resolveMergedTextIndex(e,a)).map(({text:r,valueDiffKey:a})=>({text:r,valueDiffKey:a}))}static resolveValidationRowChipDisplayText(e,n,t,r){return t===void 0?r:Va(e,n,t)}static findValidationRowSourceKeyDiffForDisplayIndex(e,n,t){if(n)return Object.keys(n).find(r=>ri(r,e)===t)}static resolveValidationRowPartialSideEntries(e,n,t,r){return this.resolveCore(n,t,r,a=>this.findValidationRowSourceKeyDiffForDisplayIndex(n,t,a),(a,o,s)=>this.resolveValidationRowChipDisplayText(e,a,o,s),(a,o)=>a!==void 0?ri(a,n):this.resolveMergedTextIndex(n,o)).map(({text:a,valueDiffKey:o})=>({text:a,valueDiffKey:o}))}static takeValueDiffAtKey(e,n){if(n)return e==null?void 0:e[n]}}class he{static escapeStringDisplayValue(e){return JSON.stringify(e).slice(1,-1)}static formatListDisplayValue(e){return typeof e=="string"?e===""?this.EMPTY_STRING_DISPLAY_VALUE:this.escapeStringDisplayValue(e):typeof e=="object"&&e!==null?JSON.stringify(e,null,2):JSON.stringify(e)}static isEmptyStringDisplayValue(e){return e===this.EMPTY_STRING_DISPLAY_VALUE}}M(he,"EMPTY_STRING_DISPLAY_VALUE","<empty string>");class V{}M(V,"TitleRow",Du),M(V,"MetaFlags",Su),M(V,"RequiredStar",$a),M(V,"NodeLevel",wu),M(V,"Extensions",Nu),M(V,"CustomAnnotations",ku),M(V,"Default",Xa),M(V,"Enum",Eu),M(V,"Examples",Au),M(V,"AllowedAdditionalPropertyNames",Tu),M(V,"ValidationRows",Qa),M(V,"ListSideEntries",Ze),M(V,"Format",he),M(V,"TypeLabel",vu);function $n(i){return i.kind===W.ROOT}function Vu(i){return i.kind===W.ADDITIONAL_PROPERTIES}function En(i){if(i.type!==le.COMPLEX)return!1;const e=i.nestedNodes();return e.length===0?!1:$n(i)?!0:e.every(n=>Et(n.kind))}function xu(i){return Et(i)}function Cu(i){var e;return kr((e=ln(i.value()))==null?void 0:e.type)}function Ru(i,e){return kr(V.TypeLabel.resolveTypeSideValue(i,e))}function Za(i){var t;const n=(t=i.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!xu(n)))return n}function eo(i,e,n){const t=n.get(i.id);if(t){const r=e.find(a=>a.id===t);if(r)return r}return e[0]}function Ir(i,e){const n=[];let t=i;for(;t&&En(t);){const r=t.nestedNodes(),a=eo(t,r,e);if(!a)break;const o=Hl(t);if(n.push({combinerNode:t,nestedNodes:r,selectedNestedNode:a,showSelector:o.showSelector,combinerKindLabel:Za(t)}),En(a)){t=a;continue}break}return n}function Lr(i,e){let n=i;for(;En(n);){const t=n.nestedNodes(),r=eo(n,t,e);if(!r)break;n=r}return n}const Mu=new Map;function no(i){return Lr(i,Mu)}function to(i,e,n,t){const r=new Map(e);r.set(n,t);const a=new Set(Ir(i,r).map(o=>o.combinerNode.id));for(const o of r.keys())a.has(o)||r.delete(o);return r}function Mt(i){var t;const e=i.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=i.meta())==null?void 0:t._fragment;return!T(n)||yt(n)?null:n}function ro(i){if(i.type===le.SIMPLE)return i.childrenNodes();const e=i.nestedNodes();return e.length>0&&e.every(n=>!Et(n.kind))?e:i.childrenNodes()}function Xn(i){if(!En(i))return"";const e=Za(i);return e?` (${e})`:""}function io(i,e,n=ze(Mt(i),i.meta())+Xn(i)){const t={title:n,node:i,testId:`json-schema-combiner-option-${e}`};if(!De(i))return t;const r=V.NodeLevel.isWholePropertyAddOrRemove(i);return{...t,diffs:i.diffs,...r?{}:{diffsSummary:i.diffsSummary,descendantDiffsSummary:i.descendantDiffsSummary}}}function Qn(i,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,r=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?i+1:i,0),afterLevel:Math.max(r?e+1:e,0)}}const _u=new Wa;function qu(i){return i!=null}function Hu(i){return Object.keys(ir).some(e=>!!V.ValidationRows.takeDiff(i,e)||!!V.ValidationRows.takeColorizingDiff(i,e))}class Ou{resolveNodeVisibility(e,n){const t=e.value(),r=ln(t),a=_u.resolveNodeVisibility(t,n),o=Qi(n),s=o&&(!!(r!=null&&r.description)||!!e.diffs.description),l=o&&(a.showEnumValuesRow||!!V.Enum.takeDiff(e)||!!V.Enum.takeValueDiffs(e)||!!V.Enum.takeRowColorizingDiff(e)),u=o&&(qu(r==null?void 0:r.default)||!!V.Default.takeDiff(e)||!!V.Default.takeRowColorizingDiff(e)),f=o&&(a.showExamplesRow||!!V.Examples.takeDiff(e)||!!V.Examples.takeValueDiffs(e)||!!V.Examples.takeRowColorizingDiff(e)),c=o&&(Ya(t).length>0||Hu(e)),g=o&&(a.showCustomAnnotationsRow||V.CustomAnnotations.hasAnyDiff(e)),y=u||f||l||c||a.showExtensionsRow||g,p=s||a.showDeprecationReasonRow||y;return{...a,showDescription:s,showDefaultRow:u,showExamplesRow:f,showEnumValuesRow:l,showValidationsSection:c,showCustomAnnotationsRow:g,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Hr(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return pu(e,n)}}const Pu=new Ou;function jr(i,e){return Pu.resolveNodeVisibility(i,e)}const Iu="markdown-text-row__json-schema-description",Lu="markdown-text-row__json-schema-expander",ju=i=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:r}=i;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${r} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function Ju(i,e,n){if(!e)return{resolvedValue:i,isInvisible:!1};const{data:t}=e,r=n===X;return E(t)?r?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:i,isInvisible:!1}:k(t)?r?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:i,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:q(t)?{resolvedValue:r?typeof t.beforeValue=="string"?t.beforeValue:i:typeof t.afterValue=="string"?t.afterValue:i,isInvisible:!1}:{resolvedValue:i,isInvisible:!1}}function Fu(i){switch(i){case K.body1:return"text-value-body1";case K.h1:case K.h2:case K.h3:case K.h4:case K.h5:case K.h6:return"text-value-body2";case K.body2:default:return"text-value-body2"}}function Ku(i,e){return i===Te.JsonSchemaDescription?{markdownClassName:Iu,expanderClassName:Lu}:{markdownClassName:["text-slate-700",Fu(e)].join(" "),expanderClassName:`text-value-expander ${Ss(e)}`.trim()}}const ao=m.memo(i=>{const{value:e,variant:n=K.body2,usage:t,layoutSide:r,diff:a}=i,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>Ju(e,a,r),[a,r,e]),f=m.useMemo(()=>o?l:vs(l),[o,l]),c=m.useMemo(()=>Ds(l),[l]),g=m.useMemo(()=>Ku(t,n),[t,n]),y=m.useMemo(()=>{if(!(a!=null&&a.data))return[];const w=r===X?a.styles.before:a.styles.after,N=[];return w.textHighlighterColor&&N.push(ne.highlighter(w.textHighlighterColor)),N},[a,r]),p=m.useMemo(()=>["markdown",g.markdownClassName].filter(Boolean).join(" "),[g.markdownClassName]),h=m.useMemo(()=>({p:({children:w})=>d.jsx("p",{children:w})}),[]),b=m.useCallback(()=>{s(w=>!w)},[]);return u||!f?null:d.jsxs("div",{className:`markdown-text-row flex min-w-0 flex-col items-start gap-1 ${y.join(" ")}`,children:[d.jsx(qs,{className:p,remarkPlugins:[Hs],components:h,children:f}),d.jsx(ju,{isExpandable:c,expanded:o,onToggle:b,expanderClassName:g.expanderClassName})]})});ao.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const Gu={[Te.DdlApiProperty]:ws,[Te.JsonSchemaDescription]:pr},Bu={[Te.DdlApiProperty]:["min-h-[26px]"]};function Uu(i){const e=Gu[i]??Yn,n=Bu[i]??[];return[e,...n].join(" ")}function Yu(i,e,n){return n===Te.DdlApiProperty?ks.PropertyRow.isContentVisible(i,e):i!=null&&i.data?(e===X?i.styles.before:i.styles.after).isContentVisible??!0:!0}const ft=m.memo(i=>{const{value:e,variant:n=K.body2,layoutSide:t,usage:r=Te.Default,hideLevelIndicatorWhenSideEmpty:a=!1,diff:o}=i,{[te]:s}=i,l=hr(t),u=r===Te.DdlApiProperty,f=u||r===Te.JsonSchemaDescription,c=m.useMemo(()=>Yu(o,t,r),[o,t,r]),g=r===Te.JsonSchemaDescription&&l===0,y=f&&l>0&&(!a||c),p=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:w}=o,N=[];return t===X&&N.push(ne.background(w.before.backgroundColor)),t===ae&&N.push(ne.background(w.after.backgroundColor)),N},[o,t]),h=m.useMemo(()=>Uu(r),[r]),b=d.jsx(ao,{value:e,variant:n,usage:r,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||r===Te.JsonSchemaDescription?"items-stretch":"",h,...p].filter(Boolean).join(" "),children:[g&&d.jsx(Ns,{}),y&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(bt,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):r===Te.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:b}):b]})});ft.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ur=m.memo(i=>{const e=qe(),{diffsSeverities:n,diffsSeverityPlacement:t=H.DescriptionRow}=i,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),a=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>Un(r==null?void 0:r.causedAt),[r]);switch(e){case _e:return d.jsx(Mn,{diffType:a,diffTypeCause:o,hidden:!1,children:d.jsx(gn,{left:d.jsx(ft,{...i,layoutSide:X}),right:d.jsx(ft,{...i,layoutSide:ae})})});case nn:return d.jsx(yn,{content:d.jsx(ft,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ur.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Wu(i){return i?Je({min:i.minimum,max:i.maximum,exclusiveMin:i.exclusiveMinimum,exclusiveMax:i.exclusiveMaximum}):{data:{},visible:!1}}const un={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:ve.UNIQUE_ITEMS};function zt(i,e,n,t){const r=Je({min:i,max:e,exclusiveMin:n,exclusiveMax:t});return r.visible?[r.data.lower,r.data.upper].filter(a=>!!a):[]}function zu(i){const e=Wu(i);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function $u(i){if(!i)return[];const e=[],n=Ua(i),t=zt(n.minLength,n.maxLength);t.length&&e.push({key:un.VALUE_LENGTH,label:ia,values:t}),n.pattern!==void 0&&e.push({key:un.VALUE_PATTERN,label:aa,values:[String(n.pattern)]});const r=zu(n);r.length&&e.push({key:un.VALUE_RANGE,label:oa,values:r}),n.multipleOf!==void 0&&e.push({key:un.VALUE_MULTIPLE_OF,label:sa,values:[String(n.multipleOf)]});const a=zt(n.minProperties,n.maxProperties);a.length&&e.push({key:un.PROPERTIES_COUNT,label:la,values:a}),n.uniqueItems!==void 0&&e.push({key:un.UNIQUE_ITEMS,label:da,values:[String(n.uniqueItems)]});const o=zt(n.minItems,n.maxItems);return o.length&&e.push({key:un.ITEMS_COUNT,label:ua,values:o}),e}const li=[ce.VALUE_LENGTH,ce.VALUE_PATTERN,ce.VALUE_RANGE,ce.VALUE_MULTIPLE_OF,ce.PROPERTIES_COUNT,ce.UNIQUE_ITEMS,ce.ITEMS_COUNT];function Xu(i){return[...i].sort((e,n)=>li.indexOf(e.key)-li.indexOf(n.key))}const oo=i=>{const{extensions:e,extensionsDiffs:n,extensionsRowColorizingDiff:t,diffsSeverities:r}=i,a=mn(),o=a+1,s=xe(),l=Hn(),{ExtensionsJsoComponent:u,ExtensionsJsoDiffsComponent:f}=du(),c=_n(),g=(c==null?void 0:c.beforeLevel)??a,y=(c==null?void 0:c.afterLevel)??a,{beforeLevel:p,afterLevel:h}=m.useMemo(()=>Qn(g,y,t),[g,y,t]),b=!!n&&Object.keys(n).length>0,w=m.useMemo(()=>!b||!l?e:{...e,[l.diffsMetaKey]:n},[l,e,n,b]);return d.jsx(He.Provider,{value:o,children:d.jsx(Qe,{beforeLevel:p,afterLevel:h,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(Pn,{title:"Extensions",usage:Fe.JsonSchema,lastInvisible:!0,diff:t,diffsSeverities:r,diffsSeverityPlacement:H.ExtensionsRow}),l?d.jsx(f,{mergedSource:w,initialLevel:o,displayMode:s,diffMetaKeys:l}):d.jsx(u,{source:e,initialLevel:o})]})})})};oo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""},extensionsDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>"}],raw:"Record<OpenApiExtensionKey, Diff<DiffType>>"}],raw:"Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>"},description:""},extensionsRowColorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const cn=m.memo(i=>{const{layoutSide:e,sideItems:n}=i;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,r)=>d.jsx(Es,{isVisible:!0,value:t.text,usage:As.JsonSchemaValidation,textHighlighterColor:Zi(t.diff,e),borderShadowColor:Ts(t.diff,e),isFontMuted:Vs(t.diff,e),isEmptyStringPlaceholder:V.Format.isEmptyStringDisplayValue(t.text)},`${t.text}-${r}`))}):null});cn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const di={valueLength:ia,valuePattern:aa,valueRange:oa,valueMultipleOf:sa,propertiesCount:la,itemsCount:ua,uniqueItems:da};function Qu(i){return De(i)&&(i.kind===W.PROPERTY||i.kind===W.ROOT)}const Zn=i=>{const{node:e,displayValue:n,isLastInList:t=!1}=i,r=xe(),a=n??e.value(),o=ln(a),s=Qu(e)?e:void 0,l=De(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?jr(s,r):zn(a,r),[r,n,s,a]),f=m.useMemo(()=>l?V.Enum.takeDiff(l):void 0,[l]),c=m.useMemo(()=>l?V.Enum.takeValueDiffs(l):void 0,[l]),g=m.useMemo(()=>l?V.Enum.takeRowColorizingDiff(l):void 0,[l]),y=m.useMemo(()=>l?V.Examples.takeDiff(l):void 0,[l]),p=m.useMemo(()=>l?V.Examples.takeValueDiffs(l):void 0,[l]),h=m.useMemo(()=>l?V.Examples.takeRowColorizingDiff(l):void 0,[l]),b=m.useMemo(()=>l?V.Default.takeDiff(l):void 0,[l]),w=m.useMemo(()=>l?V.Default.takeRowColorizingDiff(l):void 0,[l]),N=m.useMemo(()=>l?V.Extensions.takeDiffs(l):void 0,[l]),C=m.useMemo(()=>l?V.Extensions.takeRowColorizingDiff(l):void 0,[l]),v=Wn(e,De),A=m.useMemo(()=>ie(v,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[v]),j=m.useMemo(()=>{const I=$u(o);if(!l)return I;const B=new Set(I.map(z=>z.key)),U=Object.keys(di).filter(z=>!B.has(z)).filter(z=>V.ValidationRows.hasSemanticDiffs(l,z)).map(z=>({key:z,label:di[z],values:[]}));return Xu([...I,...U])},[l,o]),_=m.useMemo(()=>{var U;if(!Vu(e))return;const I=e.parent,B=ln((I==null?void 0:I.value())??null);return(U=B==null?void 0:B.propertyNames)==null?void 0:U.enum},[e]),J=m.useMemo(()=>l?V.AllowedAdditionalPropertyNames.takeDiff(l):void 0,[l]),O=m.useMemo(()=>l?V.AllowedAdditionalPropertyNames.takeValueDiffs(l):void 0,[l]),P=m.useMemo(()=>l?V.AllowedAdditionalPropertyNames.takeRowColorizingDiff(l):void 0,[l]),Y=r===ss&&!!(_!=null&&_.length),de=m.useCallback(I=>{const B=V.AllowedAdditionalPropertyNames.resolveSideEntries(_??[],J,O,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(cn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:V.ListSideEntries.takeValueDiffAtKey(O,z)}))})},[_,J,O]),Z=m.useCallback(I=>{const B=V.Enum.resolveSideEntries((o==null?void 0:o.enum)??[],f,c,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(cn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:V.ListSideEntries.takeValueDiffAtKey(c,z)}))})},[f,c,o==null?void 0:o.enum]),oe=m.useCallback(I=>{const B=V.Examples.resolveSideEntries((o==null?void 0:o.examples)??[],y,p,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(cn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:V.ListSideEntries.takeValueDiffAtKey(p,z)}))})},[y,p,o==null?void 0:o.examples]),Ge=m.useCallback((I,B)=>U=>{const z=V.CustomAnnotations.resolveSideEntries(I,B,U);return z.length===0?d.jsx(d.Fragment,{}):d.jsx(cn,{layoutSide:U,sideItems:z.map(({text:re})=>({text:re,diff:B}))})},[]),hn=m.useCallback(I=>{const B=o==null?void 0:o.default,U=V.Default.resolveSideEntries(B,b,I);return U.length===0?d.jsx(d.Fragment,{}):d.jsx(cn,{layoutSide:I,sideItems:U.map(({text:z})=>({text:z,diff:b}))})},[b,o==null?void 0:o.default]),se=m.useCallback((I,B)=>U=>{const z=l?V.ValidationRows.takeDiff(l,I):void 0,re=l?V.ValidationRows.takeValueDiffs(l,I):void 0,we=V.ValidationRows.resolveSideEntries(I,B,z,re,U,I===ce.VALUE_RANGE&&l?{nodeValue:a,crawlDiffs:V.ValidationRows.takeValueRangeCrawlDiffs(l)??{}}:void 0);return we.length===0?d.jsx(d.Fragment,{}):d.jsx(cn,{layoutSide:U,sideItems:we.map(({text:In,valueDiffKey:nt})=>({text:In,diff:V.ListSideEntries.takeValueDiffAtKey(re,nt)}))})},[l,a]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(ur,{usage:Te.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||A.diff)&&d.jsx(ur,{usage:Te.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...A}),u.showDefaultRow&&d.jsx(vn,{label:"Default",usage:Dn.JsonSchemaValidation,subheader:hn,colorizingDiff:w,diffsSeverities:b||w?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.DefaultRow}),u.showExamplesRow&&d.jsx(vn,{label:"Examples",usage:Dn.JsonSchemaValidation,subheader:oe,diff:y,colorizingDiff:h,diffsSeverities:y||p||h?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.ExamplesRow}),u.showEnumValuesRow&&d.jsx(vn,{label:"Allowed values",usage:Dn.JsonSchemaValidation,subheader:Z,diff:f,colorizingDiff:g,diffsSeverities:f||c||g?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.EnumRow,...Hr(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showCustomAnnotationsRow&&Object.entries((o==null?void 0:o.customAnnotations)??{}).map(([I,B])=>{const U=l?V.CustomAnnotations.takeDiff(l,I):void 0,z=l?V.CustomAnnotations.takeRowColorizingDiff(l,I):void 0;return d.jsx(vn,{label:B.label,usage:Dn.JsonSchemaValidation,subheader:Ge(B.value,U),colorizingDiff:z,diffsSeverities:U||z?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.CustomAnnotationRow},I)}),Y&&d.jsx(vn,{label:Os,usage:Dn.JsonSchemaValidation,subheader:de,diff:J,colorizingDiff:P,diffsSeverities:J||O||P?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&j.map(I=>{const B=I.key,U=l?V.ValidationRows.takeDiff(l,B):void 0,z=l?V.ValidationRows.takeColorizingDiff(l,B):void 0;return d.jsx(vn,{label:I.label,usage:Dn.JsonSchemaValidation,subheader:se(B,I.values),diff:U,colorizingDiff:z,diffsSeverities:l&&V.ValidationRows.hasSemanticDiffs(l,B)?v==null?void 0:v.nodeDiffsSeverities:void 0,diffsSeverityPlacement:$i[B]},I.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(oo,{extensions:o.extensions,extensionsDiffs:N,extensionsRowColorizingDiff:C,diffsSeverities:C?v==null?void 0:v.nodeDiffsSeverities:void 0})]})};Zn.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Jr=i=>{const{requiredChanged:e,readOnly:n,readOnlyDiff:t,writeOnly:r,writeOnlyDiff:a,deprecated:o,deprecatedDiff:s,requiredDiff:l,layoutSide:u}=i,f=qe(),c=!!n||!!t,g=!!r||!!a,y=!!o||!!s;return!e&&!c&&!g&&!y?null:d.jsxs("div",{className:"flex flex-row gap-2 justify-between",children:[e&&d.jsx(it,{label:Ps,layoutMode:f,layoutSide:u,diff:l==null?void 0:l.data}),c&&d.jsx(it,{label:Is,colorSchema:zr,layoutMode:f,layoutSide:u,diff:t==null?void 0:t.data}),g&&d.jsx(it,{label:Ls,colorSchema:zr,layoutMode:f,layoutSide:u,diff:a==null?void 0:a.data}),y&&d.jsx(it,{label:js,colorSchema:Js,layoutMode:f,layoutSide:u,diff:s==null?void 0:s.data})]})};Jr.__docgenInfo={description:"",methods:[],displayName:"TagsWithDiffs",props:{requiredChanged:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},readOnlyDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Zu(i){const e=!!i.diffs[R],n=V.RequiredStar.takeMetaDiff(i);return{requiredChanged:!e&&!!n,requiredDiff:n,readOnlyDiff:V.MetaFlags.takeReadOnlyDiff(i),writeOnlyDiff:V.MetaFlags.takeWriteOnlyDiff(i),deprecatedDiff:V.MetaFlags.takeDeprecatedDiff(i)}}const ef="#64748B",so="#94A3B8",en=m.memo(i=>{const{text:e,color:n,className:t}=i,r=n===void 0?ef:n;return d.jsx("span",{className:"json-schema-type-value-text",style:r?{color:r}:void 0,children:t?d.jsx("span",{className:t,children:e}):e})});en.__docgenInfo={description:"Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide\nwhether to render it at all.\n\n`className` (diff/highlighter classes) is applied to an INNER span, not the outer one, so it\nnever becomes a direct flex item of an ancestor `inline-flex` container (e.g.\n`.json-schema-type-value-segments`). A flex item's `display` is CSS-blockified - an `inline`\nbox becomes `block` - which makes `line-height` (not font metrics) determine the painted\nheight of a highlighter background, rendering it ~1px taller than legacy's equivalent\n(`NodeType.tsx`'s `.inline` divs, which stay genuinely inline because they're nested one level\nbelow their `inline-flex` ancestor). Keeping the highlighted element on a non-flex-item\ndescendant reproduces legacy's inline box-painting exactly.",methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const lo=m.memo(i=>{const{value:e,meta:n,suffix:t}=i;return d.jsxs(d.Fragment,{children:[d.jsx(en,{text:ze(e,n)}),t&&d.jsx(en,{text:t})]})});lo.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const fr=m.memo(i=>{const{text:e,diff:n,layoutSide:t,color:r}=i,a=Zi(n,t),o=xs(n,t),s=[ne.highlighter(a),ne.background(o)].filter(Boolean).join(" ");return d.jsx(en,{text:e,color:r,className:s||void 0})});fr.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const _t=m.memo(i=>{const{display:e,layoutSide:n,color:t}=i;return e.kind===Ye.NO_DIFFS?d.jsx(en,{text:e.text,color:t}):e.kind===Ye.WHOLE_DIFFS?d.jsx(fr,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center",children:e.segments.map((r,a)=>d.jsx(fr,{text:r.text,diff:r.diff,layoutSide:n,color:t},`${r.text}-${a}`))})});_t.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const uo=m.memo(i=>{const{node:e,meta:n,layoutSide:t,suffix:r}=i,a=V.TypeLabel.resolveSideDisplay(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(_t,{display:a,layoutSide:t}),r&&d.jsx(en,{text:r})]})});uo.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const fo=i=>{const{value:e,meta:n,isCycle:t,layoutSide:r,showTypeLabel:a=!0,typeValueSuffix:o}=i;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[a&&d.jsx(lo,{value:e,meta:n,suffix:o}),t&&d.jsx(Nr,{text:fa,children:d.jsx(ca,{})}),d.jsx(Jr,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:r})]})},co=i=>{const{meta:e,node:n,isCycle:t,layoutSide:r,showTypeLabel:a=!0,typeValueSuffix:o}=i,s=Zu(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[a&&d.jsx(uo,{node:n,meta:e,layoutSide:r,suffix:o}),t&&d.jsx(Nr,{text:fa,children:d.jsx(ca,{})}),d.jsx(Jr,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:r,...s})]})};fo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:'See JsonSchemaTitleRowTypeValue\'s `suffix` prop - combiner-kind suffix, e.g. " (anyOf)".'}}};co.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const nf="Type: ";function tf(i){const{node:e,meta:n,headerRowTitle:t}=i,r=e.kind;return $n(e)?{variant:"text",text:t??nf}:r===W.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:"badge",text:"no additional properties",badgeKind:ls}:{variant:"badge",text:"additional property",badgeKind:tt}:r===W.PATTERN_PROPERTY?{variant:"badge",text:"additional property",badgeKind:tt}:r===W.ITEMS?{variant:"badge",text:"item",badgeKind:tt}:r===W.ADDITIONAL_ITEMS?{variant:"badge",text:"additional item",badgeKind:tt}:r===W.ITEM?{variant:"text",text:`[${String(e.key)}]`}:{variant:"text",text:String(e.key)}}function rf(i,e){const n=(e==null?void 0:e._fragment)??i.value();return i.kind===W.ADDITIONAL_PROPERTIES&&n===!1}const mo=i=>{const{required:e,requiredDiff:n,layoutSide:t}=i,r=qe(),{isDocumentLayoutMode:a,isSideBySideDiffsLayoutMode:o}=ds(r);return a?e?d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"}):null:t===void 0||!(o?V.RequiredStar.isVisibleOnSide(e,n,t):e)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};mo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const yo="text-xs text-black font-Inter-Medium",go=i=>{const{display:e,required:n=!1}=i;switch(e.variant){case"badge":return d.jsx(Bi,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${yo}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},po=i=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:r}=i;switch(e.variant){case"badge":return d.jsx(Bi,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${yo}`,children:[e.text,d.jsx(mo,{required:n,requiredDiff:t,layoutSide:r})]})}};go.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};po.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: "badge"; text: string; badgeKind: BadgeKind }
| { variant: "text"; text: string }`,elements:[{name:"signature",type:"object",raw:'{ variant: "badge"; text: string; badgeKind: BadgeKind }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"badge"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:'{ variant: "text"; text: string }',signature:{properties:[{key:"variant",value:{name:"literal",value:'"text"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function af(i){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=i,u=Tr(),f=e.meta(),c=ln(t??n.value()),g=n.meta(),y=m.useMemo(()=>Hr(a,r),[r,a]),p=m.useMemo(()=>tf({node:e,meta:f,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,f,e]),h=m.useMemo(()=>w=>{const N=ea(l);return(N?na(N,w):Cs(l,w))?s?d.jsx(po,{display:p,required:f==null?void 0:f.required,requiredDiff:o,layoutSide:w}):d.jsx(go,{display:p,required:f==null?void 0:f.required}):null},[f==null?void 0:f.required,o,p,l,s]),b=m.useMemo(()=>!rf(n,g),[g,n]);return{displayValueResolved:c,displayMeta:g,listLastRowFlags:y,titleContent:h,showTypeSubheader:b}}const Fr=i=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:f,withRequiredDiffIndicator:c=!1,renderSubheader:g,[te]:y}=i,{displayValueResolved:p,displayMeta:h,listLastRowFlags:b,titleContent:w,showTypeSubheader:N}=af({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,requiredDiff:f,withRequiredDiffIndicator:c,titleRowDiff:u==null?void 0:u.diff});return d.jsx(me,{...b,"data-precededby":y,titleContent:w,expandable:o,expanded:s,isRoot:$n(e),onClickExpander:o?l:void 0,variant:K.body2,subheader:C=>g({layoutSide:C,displayValueResolved:p,displayMeta:h,displayNode:n,showTypeSubheader:N}),usage:Nt.JsonSchemaProperty,...u})};Fr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Kr=i=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,typeValueSuffix:u,...f}=i;return d.jsx(Fr,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:c,displayValueResolved:g,displayMeta:y,displayNode:p,showTypeSubheader:h})=>d.jsx(fo,{value:g,meta:y,isCycle:p.isCycle,layoutSide:c,showTypeLabel:h,typeValueSuffix:u})})};Kr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showCustomAnnotationsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const ho=m.memo(i=>{const{node:e}=i,n=no(e),t=ze(Mt(n),n.meta())+Xn(e);return d.jsx(en,{text:t,color:null})});ho.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const ui=new Set;function qt(i){const{options:e,selectedOption:n,onSelectOption:t,variant:r,layoutSide:a=ae}=i;return e.length===0?null:d.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=of({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:a});if(l)return null;const u=s.join(" "),f=typeof o.title=="function"?o.title(a):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${r} ${n===o?"selected":""} ${u}`,onClick:c=>{c.preventDefault(),c.stopPropagation(),t(o)},children:f},o.node.id)})})}function of(i){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:r}=i,a=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[R];if(s){const{styles:l}=s;switch(r){case X:s.inherited||a.push(ne.borderShadow(l.before.borderShadowColor)),o=s.data.action===L.add;break;case ae:s.inherited||a.push(ne.borderShadow(l.after.borderShadowColor)),o=s.data.action===L.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??ui,u=t??ui,f=new Set([...l,...u]),c=us(f);a.push(c?ne.roundMarker(c):"")}}return{diffsRelatedClassesList:a,isInvisible:o}}qt.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var Ht=(i=>(i.Primary="primary",i.Secondary="secondary",i))(Ht||{});function sf(i,e){if(!i)return"";const n=e===X?i.styles.before.backgroundColor:i.styles.after.backgroundColor;return ne.background(n)}const lf=m.memo(i=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:r,layoutSide:a,levelReductionAction:o}=i,s=hr(a),l=m.useMemo(()=>za(s,a,o),[s,a,o]),u=m.useMemo(()=>sf(r,a),[a,r]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${pr} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(bt,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(qt,{options:e,selectedOption:n,onSelectOption:t,variant:Ht.Secondary,layoutSide:a})})]})}),$t=m.memo(i=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=i;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(Kn,{title:e,usage:Fe.JsonSchema,lastInvisible:!0,layoutSide:i.layoutSide,diff:t,levelReductionAction:i.levelReductionAction}),n&&d.jsx(lf,{...i})]})}),Gr=m.memo(i=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=i,r=qe(),a=m.useMemo(()=>t==null?void 0:t[H.TitleRow],[t]),o=m.useMemo(()=>a==null?void 0:a.type,[a]),s=m.useMemo(()=>Un(a==null?void 0:a.causedAt),[a]);if(!n&&!e)return null;switch(r){case _e:return d.jsx(Mn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(gn,{left:d.jsx($t,{...i,layoutSide:X}),right:d.jsx($t,{...i,layoutSide:ae})})});case nn:return d.jsx(yn,{content:d.jsx($t,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",r,") is not supported."]})});Gr.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};const bo=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=mn(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Rt(),u=e.nestedNodes(),[f,c]=m.useState(()=>new Map),g=m.useMemo(()=>Ir(e,f),[e,f]),y=m.useMemo(()=>Lr(e,f),[e,f]),p=m.useMemo(()=>Mt(y),[y]),h=m.useMemo(()=>zn(p,r),[p,r]),b=m.useMemo(()=>ro(y),[y,l]),w=m.useMemo(()=>b.length>0,[b.length]),N=m.useMemo(()=>e.isCycle||b.length===0?!1:Ct(y,{expandedDepth:o,level:a}),[e.isCycle,y,o,b.length,a]),C=m.useMemo(()=>Se(y,N),[y,N,l]),[v,A]=m.useState(C),j=m.useRef(y.id);m.useEffect(()=>{if(j.current!==y.id){j.current=y.id,A(Se(y,N));return}A(se=>Se(y,se))},[y,N,l]);const _=m.useCallback(()=>{A(se=>{const I=!se;return I&&s(y),Se(y,I)})},[y,s]),J=m.useMemo(()=>ze(p,y.meta()),[y,p]),O=m.useMemo(()=>Xn(e),[e]),P=_n(),Y=(P==null?void 0:P.beforeLevel)??a,de=(P==null?void 0:P.afterLevel)??a,{beforeLevel:Z,afterLevel:oe}=m.useMemo(()=>Qn(Y,de,void 0),[Y,de]),Ge=m.useCallback((se,I)=>{c(B=>to(e,B,se.id,I.node.id))},[e]);if(u.length===0)return null;const hn=v&&b.length>0;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Kr,{"data-precededby":t,ownerNode:e,displayNode:y,displayValue:p,contentVisibility:h,isLastInList:n&&!h.showContentSection&&!w,expandable:w,expanded:v,typeValueSuffix:O,onClickExpander:_}),d.jsx(Zn,{node:y,displayValue:p,isLastInList:n&&!w&&g.every(se=>!se.showSelector)}),d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:Z,afterLevel:oe,children:[g.map(se=>{const I=se.nestedNodes.map((U,z)=>io(U,z,()=>d.jsx(ho,{node:U}))),B=I.find(U=>U.node.id===se.selectedNestedNode.id)??I[0]??null;return d.jsx(Gr,{combinerKindLabel:se.combinerKindLabel,showSelector:se.showSelector,options:I,selectedOption:B,onSelectOption:U=>Ge(se.combinerNode,U)},se.combinerNode.id)}),hn&&d.jsxs(d.Fragment,{children:[d.jsx(Pn,{title:J,usage:Fe.JsonSchema,lastInvisible:!0}),b.map((se,I)=>d.jsx(Ot,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:se,isLastInList:I===b.length-1},se.id))]})]})})]})};bo.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const vo=m.memo(i=>{const{node:e}=i;return Cu(e)?null:d.jsx(en,{text:ze(e.value(),e.meta()),color:so})});vo.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const Do=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=mn(),o=Tr(),{expandedDepth:s,materializeChildren:l,treeRevision:u}=Rt(),f=m.useMemo(()=>zn(e.value(),r),[r,e]),c=m.useMemo(()=>e.childrenNodes(),[e,u]),g=m.useMemo(()=>Or(e),[e,u]),y=m.useMemo(()=>Ct(e,{expandedDepth:s,level:a}),[s,a,e]),p=m.useMemo(()=>Se(e,y),[y,e,u]),[h,b]=m.useState(p);m.useEffect(()=>{b(P=>Se(e,P))},[e,u]);const w=m.useCallback(()=>{b(P=>{const Y=!P;return Y&&l(e),Se(e,Y)})},[l,e]),N=!!(o!=null&&o.suppressRootNestingIndicator)&&$n(e)&&!f.showExtensionsRow&&c.length>0,C=N||!g||h,v=m.useCallback(()=>d.jsx(vo,{node:e}),[e]),A=_n(),j=(A==null?void 0:A.beforeLevel)??a,_=(A==null?void 0:A.afterLevel)??a,{beforeLevel:J,afterLevel:O}=m.useMemo(()=>Qn(j,_,void 0),[j,_]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[!N&&d.jsx(Kr,{"data-precededby":t,ownerNode:e,contentVisibility:f,isLastInList:n,expandable:g,expanded:h,onClickExpander:w}),C&&d.jsxs(d.Fragment,{children:[d.jsx(Zn,{node:e,isLastInList:n&&c.length===0}),c.length>0&&d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:J,afterLevel:O,children:[!N&&d.jsx(Pn,{title:v,usage:Fe.JsonSchema,lastInvisible:!0}),c.map((P,Y)=>d.jsx(Ot,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:P,isLastInList:Y===c.length-1},P.id))]})})]})]})};Do.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ot=i=>{const{node:e}=i;return En(e)?d.jsx(bo,{...i}):d.jsx(Do,{...i})};Ot.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Pt=m.memo(i=>i.schema===null||i.schema===void 0?null:d.jsx(Tn,{fallback:d.jsx(Vn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(df,{...i})})),df=i=>{const{schema:e,expandedDepth:n=Ui,displayMode:t=Rn,devMode:r=!1,initialLevel:a=0,customizationOptions:o}=i,s=m.useMemo(()=>Ke(r),[r]),l=m.useMemo(()=>new Da({source:e,materializeDepth:n-a+1,logger:s}),[e,n,a,s]),u=m.useMemo(()=>l.build(),[l]),[f,c]=m.useReducer(b=>b+1,0),g=m.useCallback(b=>{l.materializeChildren(b),c()},[l]),y=m.useMemo(()=>({expandedDepth:n,materializeChildren:g,treeRevision:f}),[n,g,f]),p=m.useMemo(()=>({ExtensionsJsoComponent:Mr,ExtensionsJsoDiffsComponent:_r}),[]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const h=u.root;return h?d.jsx(qr.Provider,{value:p,children:d.jsx(Pr.Provider,{value:y,children:d.jsx(Ar.Provider,{value:o,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Cn.Provider,{value:nn,children:d.jsx(He.Provider,{value:a,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(Ot,{node:h})})})})})})})}):null};Pt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
  /**
   * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
   * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
   * of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]}},description:""}}};function So(i,e){return i.isCycle?!1:Or(i)?e.hideUnchangedNodes?e.isRoot||i.kind===W.ROOT?!0:xa(i):e.level<e.expandedDepth:!0}const Xt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}};class fi{static buildCombinerSyntheticReplaceDiff(e){return e&&q(e.data)?{...e,styles:Xt}:{data:{type:Gi,action:L.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:Xt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}static buildNodeDiffsSeverityFromChangedProperty(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||q(n)?t.causedAt=n.beforeDeclarationPaths[0]??[]:E(n)&&(t.causedAt=n.afterDeclarationPaths[0]??[]),t}static buildNodeDiffsSeverityFromDiff(e){return this.buildNodeDiffsSeverityFromChangedProperty({data:e,styles:Xt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve})}static collectChangedPropertyMetaData(e,n){if(!(!e||typeof e!="object")){if(gr(e)){n.push(e);return}for(const t of Object.values(e))this.collectChangedPropertyMetaData(t,n)}}static maxNodeDiffsSeverity(...e){let n;for(const t of e)t&&(!n||fe.compareDiffTypes(t.type,n.type)>0)&&(n=t);return n}static resolveUniformNestedNodesAction(e){const n=e.nestedNodes();if(n.length===0)return;let t;for(const r of n){if(!De(r))return;const a=r.diffs[R],o=a&&E(a.data)?L.add:a&&k(a.data)?L.remove:void 0;if(!o)return;if(!t){t=o;continue}if(t!==o)return}return t}static resolveCombinerSelectorLevelReductionAction(e){if(De(e)&&!V.NodeLevel.isWholePropertyAddOrRemove(e))return this.resolveUniformNestedNodesAction(e)}static nestedNodeHasDiffSignals(e){return e.diffsSummary.size>0||e.descendantDiffsSummary.size>0||Object.keys(e.diffs).length>0||Object.keys(e.descendantDiffs).length>0}static hasCombinerOwnerChanges(e){return De(e)?e.diffsSummary.size>0||Object.keys(e.descendantDiffs).length>0||e.descendantDiffsSummary.size>0?!0:e.nestedNodes().some(n=>De(n)&&this.nestedNodeHasDiffSignals(n)):!1}static buildCombinerSelectorRowDiff(e){if(!(!De(e)||!this.hasCombinerOwnerChanges(e)))return this.buildCombinerSyntheticReplaceDiff(e.diffs[R])}static buildCombinerSelectorRowDiffsSeverities(e){if(!De(e)||!this.hasCombinerOwnerChanges(e))return;const n=[];for(const s of Object.values(e.diffsSeverities))s&&n.push(s);for(const s of Object.values(e.descendantDiffs))s&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));for(const s of e.nestedNodes()){if(!De(s))continue;for(const f of Object.values(s.diffsSeverities))f&&n.push(f);const l=[];for(const f of Object.values(s.diffs))this.collectChangedPropertyMetaData(f,l);for(const f of l)n.push(this.buildNodeDiffsSeverityFromChangedProperty(f));const u=this.maxDiffType([...s.diffsSummary,...s.descendantDiffsSummary]);u&&n.push({type:u,causedAt:[]})}const t=e.diffs[R];t&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(t));const r=[];for(const s of Object.values(e.diffs))this.collectChangedPropertyMetaData(s,r);for(const s of r)n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));const a=this.maxDiffType([...e.diffsSummary,...e.descendantDiffsSummary]);a&&n.push({type:a,causedAt:[]});const o=this.maxNodeDiffsSeverity(...n);if(!o){const s=this.buildCombinerSyntheticReplaceDiff(t);return{[H.TitleRow]:this.buildNodeDiffsSeverityFromDiff(s.data)}}return{[H.TitleRow]:o}}static maxDiffType(e){let n;for(const t of e)(!n||fe.compareDiffTypes(t,n)>0)&&(n=t);return n}static resolveCombinerSelectorRowPresentation(e){if(De(e)){const n=V.NodeLevel.takeNestingIndicatorRowColorizingDiff(e);if(n){const t=e.diffsSeverities[H.NestingIndicatorRow];return{selectorRowDiff:n,diffsSeverities:t?{[H.TitleRow]:t}:void 0}}}return{selectorRowDiff:this.buildCombinerSelectorRowDiff(e),diffsSeverities:this.buildCombinerSelectorRowDiffsSeverities(e)}}}const wo="show-all",uf="show-only-changed-nodes";function ff(i){return i?uf:wo}function cf(i){return i!==wo}const Br=m.createContext(null);function mf(){const i=m.useContext(Br);if(!i)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return i}function No(){return m.useContext(Br)}function yf(i){const[e,n]=m.useState(()=>new Set),t=m.useCallback(r=>{n(a=>{if(a.has(r))return a;const o=new Set(a);return o.add(r),o})},[]);return m.useMemo(()=>({mode:i,hideUnchangedNodes:cf(i),revealedBlockIds:e,revealBlock:t}),[i,e,t])}const ko=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));ko.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function ci(i){return i===1?"Show 1 unchanged node":`Show ${i} unchanged nodes`}const ct=m.memo(i=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:r,level:a,[te]:o}=i,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":r,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[a>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(bt,{level:a}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(fs,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(Nr,{text:ci(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":ci(n),onClick:s,children:d.jsx(ko,{})})})})]})});ct.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Eo=m.memo(i=>{const e=qe(),n=mn();switch(e){case _e:return d.jsx(gn,{left:d.jsx(ct,{...i,layoutSide:"before",level:n}),right:d.jsx(ct,{...i,layoutSide:"after",level:n})});case nn:return d.jsx(yn,{content:d.jsx(ct,{...i,layoutSide:"after",level:n})});default:return null}});Eo.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Ur=i=>{const{children:e}=i,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:r}=mf(),a=ta(),o=m.useMemo(()=>a?new Set(a):void 0,[a]),{visibleSequence:s}=m.useMemo(()=>hd(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:s.map((l,u)=>{const f=u===s.length-1;return l.kind==="placeholder"?t.has(l.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(l.sourceIndex,l.sourceIndex+l.blockSize).map((c,g)=>d.jsx(An,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:c,isLastInList:f&&g===l.blockSize-1},c.id))},l.unchangedBlockId):d.jsx(Eo,{unchangedBlockId:l.unchangedBlockId,count:l.blockSize,onReveal:r},l.unchangedBlockId):d.jsx(An,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:l.node,isLastInList:f},l.node.id)})})};Ur.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};function gf(i){return ie($e(i),{resolveDiff:()=>V.TitleRow.takeDiff(i)})}const Yr=i=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,typeValueSuffix:f,...c}=i,g=m.useMemo(()=>u??gf(n),[n,u]),y=m.useMemo(()=>V.RequiredStar.takeMetaDiffForDisplay(e),[e]),p=qe(),h=m.useMemo(()=>V.NodeLevel.takeNodeChangesSummary(n),[n]),b=!s&&o&&p===_e&&!!h&&h.size>0;return d.jsx(Fr,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:g,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:w,displayMeta:N,displayNode:C,showTypeSubheader:v})=>na(ea(g.diff),w)?d.jsxs(d.Fragment,{children:[d.jsx(co,{meta:N,node:n,isCycle:C.isCycle,layoutSide:w,showTypeLabel:v,typeValueSuffix:f}),b&&d.jsx(ra,{values:Array.from(h)})]}):d.jsx(d.Fragment,{})})};Yr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const Ao=m.memo(i=>{const{node:e,layoutSide:n}=i,t=no(e),r=V.TypeLabel.resolveSideDisplay(t,t.meta(),n),a=Xn(e);return d.jsxs(d.Fragment,{children:[d.jsx(_t,{display:r,layoutSide:n,color:null}),a&&d.jsx(en,{text:a,color:null})]})});Ao.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function pf(i){return i.kind===W.PROPERTY}const To=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=mn(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Rt(),u=No(),f=e.nestedNodes(),[c,g]=m.useState(()=>new Map),y=m.useMemo(()=>Ir(e,c),[e,c]),p=m.useMemo(()=>Lr(e,c),[e,c]),h=m.useMemo(()=>Mt(p),[p]),b=pf(p)?p:void 0,w=m.useMemo(()=>b?jr(b,r):zn(h,r),[h,b,r]),N=m.useMemo(()=>ro(p),[p,l]),C=m.useMemo(()=>N.length>0,[N.length]),v=m.useMemo(()=>e.isCycle||N.length===0?!1:u!=null&&u.hideUnchangedNodes?So(p,{expandedDepth:o,level:a,hideUnchangedNodes:!0}):Ct(p,{expandedDepth:o,level:a}),[e.isCycle,p,u==null?void 0:u.hideUnchangedNodes,o,N.length,a]),A=m.useMemo(()=>Se(p,v),[p,v,l]),[j,_]=m.useState(A),J=m.useRef(p.id);m.useEffect(()=>{if(J.current!==p.id){J.current=p.id,_(Se(p,v));return}_(re=>Se(p,re))},[p,v,l]);const O=m.useCallback(()=>{_(re=>{const we=!re;return we&&s(p),Se(p,we)})},[p,s]),P=m.useMemo(()=>ze(h,p.meta()),[p,h]),Y=m.useMemo(()=>Xn(e),[e]),de=m.useMemo(()=>V.NodeLevel.takeNestingIndicatorRowColorizingDiff(p),[p]),Z=_n(),oe=(Z==null?void 0:Z.beforeLevel)??a,Ge=(Z==null?void 0:Z.afterLevel)??a,hn=m.useMemo(()=>V.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),{beforeLevel:se,afterLevel:I}=m.useMemo(()=>Qn(oe,Ge,hn),[oe,Ge,hn]),B=m.useCallback((re,we)=>{g(In=>to(e,In,re.id,we.node.id))},[e]);if(f.length===0)return null;const U=j&&N.length>0,z=!!u;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Yr,{"data-precededby":t,ownerNode:e,displayNode:p,displayValue:h,contentVisibility:w,isLastInList:n&&!w.showContentSection&&!C,expandable:C,expanded:j,onClickExpander:O,typeValueSuffix:Y}),d.jsx(Zn,{node:p,displayValue:h,isLastInList:n&&!C&&y.every(re=>!re.showSelector)}),d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:se,afterLevel:I,children:[y.map(re=>{const we=re.nestedNodes.map((bn,Fo)=>io(bn,Fo,Ko=>d.jsx(Ao,{node:bn,layoutSide:Ko}))),In=we.find(bn=>bn.node.id===re.selectedNestedNode.id)??we[0]??null,nt=fi.resolveCombinerSelectorRowPresentation(re.combinerNode),Jo=fi.resolveCombinerSelectorLevelReductionAction(re.combinerNode);return d.jsx(Gr,{combinerKindLabel:re.combinerKindLabel,showSelector:re.showSelector,options:we,selectedOption:In,onSelectOption:bn=>B(re.combinerNode,bn),selectorRowDiff:nt.selectorRowDiff,diffsSeverities:nt.diffsSeverities,levelReductionAction:Jo},re.combinerNode.id)}),U&&d.jsxs(d.Fragment,{children:[d.jsx(Pn,{title:P,usage:Fe.JsonSchema,lastInvisible:!0,diff:de,diffsSeverities:p.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),z?d.jsx(Ur,{children:N}):N.map((re,we)=>d.jsx(An,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:re,isLastInList:we===N.length-1},re.id))]})]})})]})};To.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Vo=m.memo(i=>{const{node:e,meta:n,layoutSide:t}=i;if(Ru(e,t))return null;const r=V.TypeLabel.resolveSideDisplay(e,n,t);return d.jsx(_t,{display:r,layoutSide:t,color:so})});Vo.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function hf(i){return i.kind===W.PROPERTY}const xo=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=mn(),o=Tr(),{expandedDepth:s,materializeChildren:l,treeRevision:u}=Rt(),f=hf(e)?e:void 0,c=No(),g=m.useMemo(()=>f?jr(f,r):zn(e.value(),r),[r,e,f]),y=m.useMemo(()=>e.childrenNodes(),[e,u]),p=m.useMemo(()=>Or(e),[e,u]),h=m.useMemo(()=>c!=null&&c.hideUnchangedNodes?So(e,{expandedDepth:s,level:a,hideUnchangedNodes:!0,isRoot:e.kind===W.ROOT}):Ct(e,{expandedDepth:s,level:a}),[s,a,e,c==null?void 0:c.hideUnchangedNodes]),b=m.useMemo(()=>Se(e,h),[h,e,u]),[w,N]=m.useState(b);m.useEffect(()=>{N(Z=>Se(e,Z))},[e,u]);const C=m.useCallback(()=>{N(Z=>{const oe=!Z;return oe&&l(e),Se(e,oe)})},[l,e]),v=!!(o!=null&&o.suppressRootNestingIndicator)&&$n(e)&&!g.showExtensionsRow&&y.length>0,A=v||!p||w,j=m.useCallback(Z=>d.jsx(Vo,{node:e,meta:e.meta(),layoutSide:Z}),[e]),_=m.useMemo(()=>V.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),J=_n(),O=(J==null?void 0:J.beforeLevel)??a,P=(J==null?void 0:J.afterLevel)??a,{beforeLevel:Y,afterLevel:de}=m.useMemo(()=>Qn(O,P,_),[O,P,_]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[!v&&d.jsx(Yr,{"data-precededby":t,ownerNode:e,contentVisibility:g,isLastInList:n,expandable:p,expanded:w,onClickExpander:C}),A&&d.jsxs(d.Fragment,{children:[d.jsx(Zn,{node:e,isLastInList:n&&y.length===0}),y.length>0&&d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:Y,afterLevel:de,children:[!v&&d.jsx(Pn,{title:j,usage:Fe.JsonSchema,lastInvisible:!0,diff:_,diffsSeverities:e.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),c?d.jsx(Ur,{children:y}):y.map((Z,oe)=>d.jsx(An,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:Z,isLastInList:oe===y.length-1},Z.id))]})})]})]})};xo.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const An=i=>{const{node:e}=i;return En(e)?d.jsx(To,{...i}):d.jsx(xo,{...i})};An.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const It=m.memo(i=>i.schema===null||i.schema===void 0?null:d.jsx(Tn,{fallback:d.jsx(Vn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(bf,{...i})})),bf=i=>{const{schema:e,expandedDepth:n=Ui,displayMode:t=Rn,devMode:r=!1,initialLevel:a=0,customizationOptions:o,diffMetaKeys:s,diffTypes:l,hideUnchangedNodes:u=!0}=i,f=m.useMemo(()=>ff(u),[u]),c=yf(f),g=m.useMemo(()=>Ke(r),[r]),y=m.useMemo(()=>new yd({source:e,materializeDepth:n-a+1,diffsMetaKeys:s,logger:g}),[e,n,a,s,g]),p=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",p);const[h,b]=m.useReducer(A=>A+1,0),w=m.useCallback(A=>{y.materializeChildren(A),b()},[y]),N=m.useMemo(()=>({expandedDepth:n,materializeChildren:w,treeRevision:h}),[n,w,h]),C=m.useMemo(()=>({ExtensionsJsoComponent:Mr,ExtensionsJsoDiffsComponent:_r}),[]),v=p.root;return v?d.jsx(qr.Provider,{value:C,children:d.jsx(Sr.Provider,{value:s,children:d.jsx(wr.Provider,{value:l,children:d.jsx(Br.Provider,{value:c,children:d.jsx(Pr.Provider,{value:N,children:d.jsx(Ar.Provider,{value:o,children:d.jsx(xn.Provider,{value:t,children:d.jsx(Cn.Provider,{value:_e,children:d.jsx(He.Provider,{value:a,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(An,{node:v})})})})})})})})})})}):null};It.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},initialLevel:{required:!1,tsType:{name:"number"},description:""},customizationOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  headerRowTitle?: string
  /**
   * Root-only: suppresses the root node's own title row and the nesting-indicator row before its
   * children, so a synthetic wrapper schema's properties render as a flat top-level list instead
   * of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
   * \`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
   * JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
   * purely to get a property row per key.
   */
  suppressRootNestingIndicator?: boolean
}`,signature:{properties:[{key:"headerRowTitle",value:{name:"string",required:!1}},{key:"suppressRootNestingIndicator",value:{name:"boolean",required:!1},description:`Root-only: suppresses the root node's own title row and the nesting-indicator row before its
children, so a synthetic wrapper schema's properties render as a flat top-level list instead
of one nested "object" row. Mirrors the legacy \`JsonSchemaViewer\`'s
\`overriddenKind === 'parameters'\` behavior for hosts (AsyncAPI message content/parameters,
JSO-embedded schema values) that wrap a raw value in \`{type: 'object', properties: {...}}\`
purely to get a property row per key.`}]}},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.'}}};var ht=(i=>(i.PRIMARY="primary",i.SECONDARY="secondary",i))(ht||{});const et=i=>{const{node:e,variant:n=ht.PRIMARY,[te]:t}=i,r=xe(),a=Hn(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),f=e.nestedNodes(),c=m.useMemo(()=>f.filter(Ut).map((v,A)=>{var J;const j=((J=v.value())==null?void 0:J.protocol)??"",_=`binding-${A}`;return Yt(v)?{title:j,node:v,testId:_,diffs:v.diffs,diffsSummary:v.diffsSummary,descendantDiffs:v.descendantDiffs,descendantDiffsSummary:v.descendantDiffsSummary,diffsSeverities:v.diffsSeverities}:{title:j,node:v,testId:_}}),[f]),g=l!=null&&l.node&&Ut(l.node)?l.node:null,y=g==null?void 0:g.value(),{version:p="latest",binding:h=null}=y??{};m.useEffect(()=>{c.length>0&&l===null&&u(c[0])},[c,l]);const b=m.useCallback(v=>s?d.jsx(d.Fragment,{}):d.jsx(qt,{options:c,selectedOption:l,onSelectOption:u,variant:Ht.Secondary,layoutSide:v}),[c,s,l]),w=m.useMemo(()=>{if(Ed(e)){const v=$e(e);return ie(v)}return{}},[e]),N=m.useMemo(()=>{if(g&&Yt(g)){const v=$e(g);return ie(v,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:H.BindingVersionRow})}return{}},[g]),C=m.useMemo(()=>{if(!g)return null;if(Yt(g)&&a){const v=g.diffs[R],A=vf(h,v,a);return d.jsx(Vt,{"data-precededby":x.BINDING_VERSION_ROW,mergedSource:A,displayMode:r,initialLevel:1,supportJsonSchema:!0,embeddedSchemaDiffsComponent:It,diffMetaKeys:a})}return Ut(g)?d.jsx(xt,{"data-precededby":x.BINDING_VERSION_ROW,source:h,displayMode:r,initialLevel:1,supportJsonSchema:!0,embeddedSchemaComponent:Pt}):null},[g,h,r,a]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===ht.PRIMARY?K.h3:K.h5,subheader:b,...w}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(Xe,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:p,variant:K.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...N}),C]})]})};function vf(i,e,n){if(!i)return null;const t=e==null?void 0:e.data;if(!t)return i;const{diffsMetaKey:r}=n;return{...i,[r]:Object.keys(i).reduce((o,s)=>{if(o[s]=t,E(t)){const l=i[s];o[s]={...t,afterValue:l}}if(k(t)){const l=i[s];o[s]={...t,beforeValue:l}}return o},{})}}et.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const Lt=i=>{const{node:e,[te]:n}=i,t=Hn(),r=e.value(),a=(r==null?void 0:r.rawValues)??{},o=m.useMemo(()=>{var s;if(Ad(e)){const l=$e(e);return{...ie(l),highlightingMode:(s=e.diffs[R])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:"Extensions",expandable:!1,variant:K.h3,usage:Nt.AsyncApiJsoSection,...o}),t?d.jsx(Vt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:a,initialLevel:1,diffMetaKeys:t}):d.jsx(xt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:a,initialLevel:1})]})};Lt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Co="Address Parameters",Df="Location",Ln="location",Sf="customAnnotations";function Gn(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function wf(i,e){if(!(Ln in i))return i;const{[Ln]:n,...t}=i,r={[Ln]:{label:Df,value:n}};if(e){const a=Reflect.get(i,e),o=Gn(a)?a[Ln]:void 0;o&&Reflect.set(r,e,{[Ln]:o})}return{...t,[Sf]:r}}function Ro(i,e){if(!Gn(i))return i;const n=i.properties;if(!Gn(n))return i;const t={};for(const[r,a]of Object.entries(n))t[r]=Gn(a)?wf(a,e):a;if(e){const r=Reflect.get(n,e);r!==void 0&&Reflect.set(t,e,r)}return{...i,properties:t}}const Mo=i=>{const{node:e,[te]:n}=i,t=xe();if(Vd(e))return d.jsx(Nf,{"data-precededby":n,node:e});const r=e.value(),a=Ro((r==null?void 0:r.rawValues)??{});return d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:Co,expandable:!1,variant:K.h3}),d.jsx(Pt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:a,expandedDepth:2,displayMode:t,customizationOptions:kn})]})},Nf=i=>{const{node:e,[te]:n}=i,t=xe(),r=e.value(),a=r==null?void 0:r.rawValues,o=Hn(),s=m.useMemo(()=>{const u=$e(e);return ie(u)},[e]),l=m.useMemo(()=>{const u=Ro(a,o==null?void 0:o.diffsMetaKey);return kf(u,o)?u:Ef(u,e.diffs[R],o)},[a,o,e.diffs]);return!o||!a?null:d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:Co,expandable:!1,variant:K.h3,...s}),d.jsx(It,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:l,expandedDepth:2,displayMode:t,diffMetaKeys:o,customizationOptions:kn})]})};function kf(i,e){if(!i||!e)return!1;const n=i.properties;return Gn(n)?Reflect.get(n,e.diffsMetaKey)!==void 0:!1}function Ef(i,e,n){if(!i||!e||!n)return i;const t=e.data,{diffsMetaKey:r}=n;return{...i,[r]:Object.keys(i).reduce((o,s)=>{if(o[s]=t,E(t)){const l=i[s];o[s]={...t,afterValue:l}}if(k(t)){const l=i[s];o[s]={...t,beforeValue:l}}return o},{})}}Mo.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const _o=m.memo(i=>{const{renderAddress:e}=i,{diff:n,descendantDiffs:t,diffsSeverities:r}=i,a=m.useMemo(()=>r==null?void 0:r["server-address-row"],[r]),o=m.useMemo(()=>a==null?void 0:a.type,[a]),s=m.useMemo(()=>Un(a==null?void 0:a.causedAt),[a]);switch(qe()){case _e:return d.jsx(Mn,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(gn,{left:e(X),right:e(ae)})});case nn:return d.jsx(yn,{content:e(ae)})}return null});_o.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const qo=m.memo(i=>{const{node:e,[te]:n}=i,t=m.useMemo(()=>e.value(),[e]),a=e.childrenNodes().find(At),o=Wn(e,lt),{nodeDiffs:s}=o,l=m.useMemo(()=>ie(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ie(o,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[o]),f=m.useMemo(()=>ie(o,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[o]),c=m.useMemo(()=>ie(o,{resolveDiff:(N,C)=>{const v=fe.maxChangedPropertyMetaDataByDiffType(C("protocol"),C("host"));return N[R]??v}}),[o]),g=m.useCallback(N=>{var O;if(!t)return null;if(!lt(e))return d.jsx(d.Fragment,{children:t.protocol});const C=(O=e.diffs)==null?void 0:O.protocol;if(!C)return d.jsx(d.Fragment,{children:t.protocol});const v=new Set,{data:A,styles:j}=C;let _=t.protocol,J=!1;return N===X&&(v.add(ne.highlighter(j.before.textHighlighterColor)),k(A)||q(A)?_=A.beforeValue:We(A)&&(_=A.beforeKey),E(A)&&(J=!0)),N===ae&&(v.add(ne.highlighter(j.after.textHighlighterColor)),E(A)||q(A)?_=A.afterValue:We(A)&&(_=A.afterKey),k(A)&&(J=!0)),J?null:d.jsx("span",{className:Array.from(v).join(" "),children:_})},[e,t]),y=m.useCallback(N=>{var O;if(!t)return null;if(!lt(e))return d.jsx(d.Fragment,{children:t.host});const C=(O=e.diffs)==null?void 0:O.host;if(!C)return d.jsx(d.Fragment,{children:t.host});const v=new Set,{data:A,styles:j}=C;let _=t.host,J=!1;return N===X&&(v.add(ne.highlighter(j.before.textHighlighterColor)),k(A)||q(A)?_=A.beforeValue:We(A)&&(_=A.beforeKey),E(A)&&(J=!0)),N===ae&&(v.add(ne.highlighter(j.after.textHighlighterColor)),E(A)||q(A)?_=A.afterValue:We(A)&&(_=A.afterKey),k(A)&&(J=!0)),J?null:d.jsx("span",{className:Array.from(v).join(" "),children:_})},[e,t]),p=m.useCallback(N=>{var O;function C(P=!1,Y=[]){return d.jsx("div",{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${Yn} py-2 flex flex-row w-full h-full ${Y.join(" ")}`,children:!P&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[g(N),"://",y(N)]})})}if(!lt(e))return C();const v=((O=e.diffs)==null?void 0:O[R])??c.diff;if(!v)return C();const{data:A,styles:j}=v,_=new Set;let J=!1;return N===X&&(E(A)?(_.add(ne.background(S.Gray)),J=!0):_.add(ne.background(j.before.backgroundColor))),N===ae&&(k(A)?(_.add(ne.background(S.Gray)),J=!0):_.add(ne.background(j.after.backgroundColor))),C(J,Array.from(_))},[e,y,g,c.diff]),h=m.useMemo(()=>Me(t,s,"title"),[t,s]),b=m.useMemo(()=>Me(t,s,"description"),[t,s]),w=m.useMemo(()=>Me(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(me,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:K.h4,...l}),!h&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:K.h4,...l}),d.jsx(_o,{renderAddress:p,...c}),b&&d.jsx(Xe,{"data-precededby":x.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:K.h6,textFontWeight:"normal",textColor:sn,...u}),w&&d.jsx(Xe,{"data-precededby":b?x.DESCRIPTION_ROW:x.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:K.h6,textFontWeight:"normal",textColor:sn,...f}),a&&d.jsx(et,{"data-precededby":w?x.SUMMARY_ROW:b?x.DESCRIPTION_ROW:x.SERVER_ADDRESS_ROW,node:a,variant:ht.SECONDARY})]}):null});qo.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const Ho=m.memo(i=>{const{node:e,[te]:n}=i,t=m.useMemo(()=>e.childrenNodes().filter(kd),[e]),r=m.useMemo(()=>{if(xd(e)){const a=$e(e);return ie(a)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:K.h3,...r}),t.map((a,o)=>d.jsx(qo,{"data-precededby":o===0?x.MESSAGE_SECTION_HEADER_HIGH_LEVEL:x.SERVER_BLOCK,node:a},a.id))]})});Ho.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Oo=i=>{const{node:e,[te]:n}=i,t=e.value(),r=e.childrenNodes(),a=r.find(At),o=r.find(Sd),s=r.find(Nd),l=r.find(Er),u=Wn(e,Td),{nodeDiffs:f}=u,c=m.useMemo(()=>ie(u,{diffKey:"title"}),[u]),g=m.useMemo(()=>ie(u,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[u]),y=m.useMemo(()=>ie(u,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[u]),p=m.useMemo(()=>Me(t,f,"title"),[t,f]),h=m.useMemo(()=>Me(t,f,"description"),[t,f]),b=m.useMemo(()=>Me(t,f,"summary"),[t,f]);return d.jsxs("div",{className:"flex flex-col",children:[p&&d.jsx(me,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:K.h2,...c}),!p&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:K.h2,...c}),h&&d.jsx(Xe,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:K.h5,textFontWeight:"normal",textColor:sn,...g}),b&&d.jsx(Xe,{"data-precededby":h?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:K.h5,textFontWeight:"normal",textColor:sn,...y}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Mo,{"data-precededby":h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(Ho,{"data-precededby":o?x.JSON_SCHEMA_VIEWER:h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(Lt,{"data-precededby":s?x.SERVER_BLOCK:o?x.JSON_SCHEMA_VIEWER:h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),a&&d.jsx(et,{"data-precededby":l?x.JSO_VIEWER:s?x.SERVER_BLOCK:o?x.JSON_SCHEMA_VIEWER:h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:a})]})]})};Oo.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Po=i=>{const{node:e,[te]:n}=i,t=xe(),r=qe(),a=Hn(),o=ta(),s=e.childrenNodes(),l=s.find(vd),u=s.find(Er),f=s.find(At),c=s.find(Dd),g=m.useMemo(()=>yi(l,a),[l,a]),y=m.useMemo(()=>yi(c,a),[c,a]),p=m.useMemo(()=>{if(Cd(l)){const w=$e(l);return ie(w)}return{}},[l]),h=m.useMemo(()=>{if(Rd(c)){const w=$e(c);return ie(w)}return{}},[c]),b=m.useCallback(w=>r===nn?d.jsx(Pt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:w,displayMode:t,customizationOptions:kn}):r===_e&&a?d.jsx(It,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:w,displayMode:t,diffMetaKeys:a,diffTypes:o,customizationOptions:kn}):null,[a,o,t,r]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":n,value:"Headers",variant:K.h3,expandable:!1,...p}),b(g)]}),u&&d.jsx(Lt,{"data-precededby":l?x.JSON_SCHEMA_VIEWER:n,node:u}),f&&d.jsx(et,{"data-precededby":l?x.JSON_SCHEMA_VIEWER:u?x.JSO_VIEWER:n,node:f}),c&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":l?x.JSON_SCHEMA_VIEWER:u||f?x.JSO_VIEWER:n,value:"Payload",variant:K.h3,expandable:!1,...h}),b(y)]})]})},mi="Type";function yi(i,e){if(!i)return;const n=i.value();if(n)return i instanceof Ce?dr(mi,n.schema,i.diffs[R],e):Fa(mi,n.schema)}Po.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Io=i=>{const{node:e,[te]:n}=i,t=e.value(),r=e.childrenNodes(),a=r.find(At),o=r.find(Er),s=Wn(e,_d),{nodeDiffs:l}=s,u=m.useMemo(()=>ie(s,{diffKey:"title"}),[s]),f=m.useMemo(()=>ie(s,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[s]),c=m.useMemo(()=>ie(s,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[s]),g=m.useMemo(()=>Me(t,l,"title"),[t,l]),y=m.useMemo(()=>Me(t,l,"description"),[t,l]),p=m.useMemo(()=>Me(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(me,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:K.h2,expandable:!1,expanded:!0,...u}),!g&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),variant:K.h2,expandable:!1,expanded:!0,...u}),y&&d.jsx(Xe,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:K.h5,textFontWeight:"normal",textColor:sn,...f}),p&&d.jsx(Xe,{"data-precededby":y?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:K.h5,textFontWeight:"normal",textColor:sn,...c}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(Lt,{"data-precededby":p?x.SUMMARY_ROW:y?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),a&&d.jsx(et,{"data-precededby":o?x.JSO_VIEWER:p?x.SUMMARY_ROW:y?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:a})]})]})};Io.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Lo=i=>{const{node:e,[te]:n}=i;return Ra(e)?d.jsx(Po,{"data-precededby":n,node:e}):Ma(e)?d.jsx(Oo,{"data-precededby":n,node:e}):_a(e)?d.jsx(Io,{"data-precededby":n,node:e}):null};Lo.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const jo=i=>{const{node:e,[te]:n}=i,t=qe();xe();const[r,a]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(p=>{const h=Af(p),b=Tf(p);return Hd(p)?{node:p,title:h,testId:b,diffs:p.diffs,diffsSummary:p.diffsSummary,descendantDiffs:p.descendantDiffs,descendantDiffsSummary:p.descendantDiffsSummary,diffsSeverities:p.diffsSeverities}:{node:p,title:h,testId:b}}),[o]);m.useEffect(()=>{s.length>0&&r===null&&a(s[0])},[s,r]);const l=m.useMemo(()=>{var p;return qd(e)?(p=e.diffs)==null?void 0:p[R]:null},[e]),u=m.useMemo(()=>{if(l){const{data:p}=l;if(q(p)||k(p))return p.beforeDeclarationPaths[0];if(E(p))return p.afterDeclarationPaths[0]}return null},[l]),f=m.useMemo(()=>{var p;return(p=l==null?void 0:l.data)==null?void 0:p.type},[l]),c=m.useMemo(()=>{const p=u==null?void 0:u.join(".");return p?`caused by ${p} change`:void 0},[u]),g=m.useCallback(p=>{const h=new Set;if(l){const{styles:b}=l;p===X&&h.add(ne.background(b.before.backgroundColor)),p===ae&&h.add(ne.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${Yn} h-full ${Array.from(h).join(" ")}`,children:d.jsx(qt,{options:s,selectedOption:r,onSelectOption:a,variant:Ht.Secondary,layoutSide:p})})},[l,n,s,r]),y=m.useCallback(()=>{switch(t){case _e:return d.jsx(Mn,{diffType:f,diffTypeCause:c,hidden:!1,children:d.jsx(gn,{left:g(X),right:g(ae)})});default:return d.jsx(yn,{content:g(ae)})}},[f,c,t,g]);return d.jsxs("div",{className:"flex flex-col",children:[y(),r&&wd(r.node)&&d.jsx("div",{"data-testid":`${r.testId}-section`,children:d.jsx(Lo,{"data-precededby":x.MESSAGE_SECTION_SELECTOR,node:r.node})})]})};function Af(i){switch(i.kind){case D.MESSAGE_CONTENT:return"Message";case D.MESSAGE_CHANNEL:return"Channel";case D.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function Tf(i){switch(i.kind){case D.MESSAGE_CONTENT:return"message-content";case D.MESSAGE_CHANNEL:return"message-channel";case D.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}jo.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const Wr=i=>{const{node:e,noHeading:n=!1}=i,t=e.value(),r=m.useMemo(()=>e.childrenNodes(),[e]),a=Wn(e,Md),{nodeDiffs:o}=a,s=m.useMemo(()=>ie(a,{diffKey:"title"}),[a]),l=m.useMemo(()=>ie(a,{diffKey:"address"}),[a]),u=m.useMemo(()=>ie(a,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[a]),f=m.useMemo(()=>ie(a,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[a]),c=m.useMemo(()=>Me(t,o,"title"),[t,o]),g=m.useMemo(()=>Me(t,o,"description"),[t,o]),y=m.useMemo(()=>Me(t,o,"summary"),[t,o]),p=n?x.ROOT:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&c&&d.jsx(me,{"data-precededby":x.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:K.h1,...s}),!n&&!c&&d.jsx(me,{"data-precededby":x.ROOT,value:e.key.toString(),expandable:!1,variant:K.h1,...s}),d.jsx(qa,{"data-precededby":p,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),g&&d.jsx(Xe,{"data-precededby":x.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:K.h4,textFontWeight:"normal",textColor:sn,...u}),y&&d.jsx(Xe,{"data-precededby":g?x.DESCRIPTION_ROW:x.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:K.h4,textFontWeight:"normal",textColor:sn,...f}),d.jsx(Vf,{"data-precededby":y?x.SUMMARY_ROW:g?x.DESCRIPTION_ROW:x.ADDRESS_ROW,children:r})]})},Vf=i=>{const{children:e,[te]:n}=i;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>bd(t)?d.jsx(jo,{"data-precededby":n,node:t},t.key):null)})};Wr.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const xf=m.memo(i=>i.source===null?null:d.jsx(Tn,{fallback:d.jsx(Vn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Cf,{...i})})),Cf=m.memo(i=>{const{source:e,operationKeys:n,displayMode:t=Rn,devMode:r=!1,noHeading:a=!1,referenceNamePropertyKey:o}=i,s=m.useMemo(()=>Ke(r),[r]),l=m.useMemo(()=>new ya({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const f=u==null?void 0:u.root;return!f||!Ca(f)?null:d.jsx(Xi.Provider,{value:r,children:d.jsx(xn.Provider,{value:t,children:d.jsxs(Cn.Provider,{value:nn,children:[" ",d.jsx(He.Provider,{value:0,children:d.jsx(Wr,{node:f,noHeading:a})})]})})})});xf.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{xf as A,xt as J,Id as a,Pt as b,It as c,Vt as d};
