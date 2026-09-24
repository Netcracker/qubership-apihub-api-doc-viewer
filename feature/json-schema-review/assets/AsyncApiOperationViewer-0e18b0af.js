var Uo=Object.defineProperty;var Wo=(i,e,n)=>e in i?Uo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var M=(i,e,n)=>(Wo(i,typeof e!="symbol"?e+"":e,n),n);import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{aA as yt,a3 as Nn,N as R,d as mr,t as E,H as S,v as k,x as q,y as Ve,R as H,w as Ye,O as L,aB as on,aC as er,aD as nr,aE as tr,aF as hi,aG as bi,aH as Di,aI as vi,aJ as Si,aK as wi,aL as Ni,aM as ki,aN as Yo,aO as rr,aP as Ei,aQ as Ai,a6 as Ti,aR as Vi,aS as xi,aT as Ci,ai as Ri,aj as Mi,ah as _i,aU as qi,af as Hi,ag as Oi,aV as Pi,aW as ir,ae as Ii,aa as Li,ac as ji,ab as Ji,ad as Fi,a7 as Ki,a8 as Gi,a9 as Bi,U as X,X as qe,Y as Wn,W as ae,S as _e,V as ne,E as Vn,c as xn,e as Cn,L as Rn,f as He,p as Mn,aX as zo,aY as $o,aZ as Xo,a_ as Qo,a$ as Zo,b0 as es,b1 as ns,b2 as ts,b3 as rs,z as is,A as as,B as os,F as ss,G as Ui,J as ls,u as xe,am as yn,l as nn,an as Dt,h as ds,b4 as us,b5 as rt,ay as fs,at as Wi,b6 as cs,g as Yi,ao as ms}from"./UxBadge-3d9cd0ec.js";import{W as yr,l as T,Y as be,Z as v,_ as vt,$ as St,a0 as ys,a1 as wt,a2 as zi,a3 as le,e as Ke,a4 as Nt,t as ue,a5 as ee,a6 as gr,a7 as gs,v as G,a8 as ps,a9 as hs,aa as $i,ab as Xi,ac as ce,ad as Qi,z as pr,ae as ar,af as bs,S as Ce,ag as gn,N as _n,O as pn,ah as Jt,b as K,X as Yn,A as te,ai as Zi,aj as Ds,ak as qn,al as $e,am as ie,T as me,an as kt,P as x,ao as vs,ap as De,aq as ea,ar as hr,as as br,at as it,au as We,av as Ss,aw as ws,ax as Te,ay as Ns,az as ks,aA as Es,U as As,M as na,aB as Ts,aC as Vs,aD as zn,aE as vn,aF as Sn,aG as at,aH as ta,aI as ra,aJ as xs,c as Xe,d as ln}from"./IndexesNodeViewer-bc39d3de.js";import{r as m}from"./index-f46741a2.js";import{T as Dr,A as hn,a as Hn,b as fe,c as vr,m as Sr,t as Cs,C as Rs,d as wr,e as Nr,u as On,f as ia}from"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphQLOperationViewer-19ba9549.js";import{U as aa,N as Ms,R as _s,r as qs,V as oa,g as sa,h as la,j as da,P as ua,k as fa,I as ca,A as Hs,l as Os,m as Ps,B as $r,W as Is,D as Ls,n as js,o as kr,C as ma,p as ya}from"./GraphPropNodeViewer-0af21220.js";class Js extends yr{constructor(){super()}}const Xr=(i,e)=>!T(e)||be(e)?e:{rawValues:e},Fs=(i,e)=>{if(!T(e)||be(e))return e;const{bindingVersion:n,...t}=e;return{binding:t,version:n,protocol:typeof i=="symbol"?i.toString():`${i}`}},Qr=(i,e)=>T(e)?{schema:e.schema??e,schemaFormat:e.schemaFormat??null}:null;function Jn(i){return{"/data":{"/content":()=>Jn(v.MESSAGE_CONTENT),"/channel":()=>Jn(v.MESSAGE_CHANNEL),"/operation":()=>Jn(v.MESSAGE_OPERATION),kind:v.MESSAGE_SECTION_SELECTOR,complex:!0},"/parameters":{kind:v.MESSAGE_CHANNEL_PARAMETERS,transformers:[Xr]},"/servers":{"/*":()=>Jn(v.SERVER),kind:v.SERVERS},"/extensions":{kind:v.EXTENSIONS,transformers:[Xr]},"/bindings":{"/*":{kind:v.BINDING,transformers:[Fs]},kind:v.BINDINGS,complex:!0},"/headers":{kind:v.MESSAGE_HEADERS,transformers:[Qr]},"/payload":{kind:v.MESSAGE_PAYLOAD,transformers:[Qr]},kind:i}}const Ks="<address unknown>";class ga{constructor(e,n){this.referenceNamePropertyKey=e,this.logger=n}operationKeysOrDefaults(e,n){var l;let t,r;const a=e.operations??{};let o,s;if(n)t=n.operationKey,r=n.messageKey;else{if(this.logger.error("Operation key or message key is not provided. Looking for first operation, channel and message in source..."),o=Object.keys(a).at(0),o){const u=a[o],f=this.isReferenceObject(u)?null:u;if(f){const c=(l=f.messages)==null?void 0:l[0],g=this.isReferenceObject(c)?null:c;if(g){const y=g[this.referenceNamePropertyKey];s=typeof y=="string"?y:void 0}}}if(!o||!s)return!o&&this.logger.error("Cannot find first operation in source."),!s&&this.logger.error("Cannot find first operation message key in source."),null;this.logger.debug("[AsyncAPI] Found first operation, channel and message in source:",o,s),t=o,r=s}return{operationKey:t,messageKey:r}}transformOperationOrientedSpecToMessageOrientedSpec(e,n){var C;if(!this.isAsyncApiSpecification(e))return null;const t=e.operations??{},r=this.operationKeysOrDefaults(e,n);if(!r)return null;const{operationKey:a,messageKey:o}=r,s=Object.entries(t).filter(D=>{const[A,j]=D;return!this.isReferenceObject(j)&&A===a}).map(([,D])=>D).at(0);if(!s)return this.logger.error(`Cannot find operation with key (id) = ${a}`),null;const l=this.isReferenceObject(s.channel)?{}:s.channel;let f=(s.messages??[]).filter(D=>!this.isReferenceObject(D)).find(D=>T(D)&&D[this.referenceNamePropertyKey]===o);if(!l)return this.logger.error("Cannot find channel in the operation",s),null;if(!f){const D=(C=l.messages)==null?void 0:C[o];if(f=this.isReferenceObject(D)?void 0:D,!f)return this.logger.error(`Cannot find message with key (id) = ${o}`),null}const c=this.copyExtensions(s),g=this.copyExtensions(l),y=this.copyExtensions(f),p=D=>T(D)?{[this.referenceNamePropertyKey]:D[this.referenceNamePropertyKey]}:void 0,h=p(f),b=p(l),w=p(s);return{...h??{},id:o,...f.name?{internalTitle:f.name}:{},...f.title?{title:f.title}:{},...f.summary?{summary:f.summary}:{},...f.description?{description:f.description}:{},action:s.action,address:l.address??Ks,data:{content:{...f.headers?{headers:f.headers}:{},...y?{extensions:y}:{},...f.bindings?{bindings:f.bindings}:{},...f.payload?{payload:f.payload}:{}},channel:{...b??{},...l.title?{title:l.title}:{},...l.summary?{summary:l.summary}:{},...l.description?{description:l.description}:{},...g?{extensions:g}:{},...l.bindings?{bindings:l.bindings}:{},...l.parameters?{parameters:this.transformParametersToJsonSchema(l.parameters)}:{},...l.servers?{servers:l.servers}:{}},operation:{...w??{},id:a,...s.title?{title:s.title}:{},...s.summary?{summary:s.summary}:{},...s.description?{description:s.description}:{},...s.bindings?{bindings:s.bindings}:{},...c?{extensions:c}:{}}}}}transformParametersToJsonSchema(e){const n={};for(const[r,a]of Object.entries(e))n[r]=this.isReferenceObject(a)?a:{type:"string",...a};const t=e;for(const r of Reflect.ownKeys(e))typeof r=="symbol"&&Object.defineProperty(n,r,{value:t[r],configurable:!0,enumerable:!0,writable:!0});return{type:"object",properties:n}}copyExtensions(e){const n=Object.keys(e).filter(t=>t.startsWith("x-"));if(n.length!==0)return n.reduce((t,r)=>(t[r]=e[r],t),{})}isAsyncApiSpecification(e){return typeof e=="object"&&e!==null&&"asyncapi"in e&&typeof e.asyncapi=="string"}isReferenceObject(e){return typeof e=="object"&&e!==null&&"$ref"in e&&typeof e.$ref=="string"}}function Gs(i){return vt(i)}const Bs=new Set([v.BINDING,v.EXTENSIONS,v.MESSAGE,v.MESSAGE_CHANNEL,v.MESSAGE_CHANNEL_PARAMETERS,v.MESSAGE_HEADERS,v.MESSAGE_OPERATION,v.MESSAGE_PAYLOAD,v.SERVER]),ot=["title","description","summary"];class Et extends St{createNodeMeta(e){return{...T(e)&&yt in e?{brokenRef:`${e.$ref}`}:{},_fragment:e}}createNodeValue(e,n,t,r){return!ys(t)||!this.isAsyncApiTreeNodeKindWithNodeValue(e)?null:r(t,Et.getAsyncApiTreeNodeValueProps(e))}isAsyncApiTreeNodeKindWithNodeValue(e){return Bs.has(e)}static getAsyncApiTreeNodeValueProps(e){switch(e){case v.BINDING:return["binding","version","protocol"];case v.EXTENSIONS:case v.MESSAGE_CHANNEL_PARAMETERS:return["rawValues"];case v.MESSAGE:return[...ot,"internalTitle","action","address"];case v.MESSAGE_CHANNEL:return[...ot];case v.MESSAGE_OPERATION:return[...ot];case v.MESSAGE_HEADERS:case v.MESSAGE_PAYLOAD:return["schema","schemaFormat"];case v.SERVER:return[...ot,"host","protocol"];default:return[]}}}const Us="[AsyncAPI]";class pa extends wt{constructor(n){const{source:t,referenceNamePropertyKey:r,operationKeys:a,logger:o=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"referenceNamePropertyKey");M(this,"operationKeys");M(this,"logger");M(this,"nodeDataBuilder");this.source=t,this.referenceNamePropertyKey=r,this.operationKeys=a,this.logger=o,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!T(this.source))return this.tree;const n=this.prepareSource();this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Nt},r=Jn(v.MESSAGE),a=Gs({source:n,tree:this.tree,supportedNodeKinds:zi,createNodeFromRaw:(o,s,l,u,f)=>this.createNodeFromRaw(o,s,l,u,f),createNodeParams:(o,s,l)=>({value:this.takeCrawlValue(o),newDataLevel:!0,parent:s,container:l}),createStateForSimpleNode:(o,s)=>({parent:s,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,s)=>({parent:o.parent,container:s,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s),shouldStopAfterNodeCreation:(o,s)=>T(s)&&!!s.isPrimitive});return Nn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Us}createTree(){return new Js}createNodeDataBuilder(){return new Et}prepareSource(){return new ga(this.referenceNamePropertyKey,this.logger).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return T(n)?n:null}resolveNodeKey(n,t){if(!T(t))return n;if(this.referenceNamePropertyKey&&t[this.referenceNamePropertyKey]){const r=t[this.referenceNamePropertyKey];if(typeof r=="string"||typeof r=="number")return r}return"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u}=o;if(a){const y=this.createNodeMeta(t,o),p={type:le.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,p)}const f=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),g={type:le.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:f,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}isSimpleTreeNode(n){return n.type===le.SIMPLE}isComplexTreeNode(n){return n.type===le.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Ws extends Dr{constructor(){super()}}function Zr(i){return"diffs"in i&&"diffsSummary"in i&&"descendantDiffs"in i&&"descendantDiffsSummary"in i&&"diffsSeverities"in i}const Ys="x-";function Ft(i){return i===void 0||typeof i=="symbol"?!1:(typeof i=="string"?i:`${i}`).startsWith(Ys)}class zs extends ga{constructor(e,n,t){super(e,n),this.diffMetaKeys=t}transformOperationOrientedSpecToMessageOrientedSpec(e,n){if(!this.isAsyncApiSpecification(e))return null;const t=this.operationKeysOrDefaults(e,n);if(!t)return null;const{operationKey:r,messageKey:a}=t,{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=this.diffMetaKeys,l=super.transformOperationOrientedSpecToMessageOrientedSpec(e,t);if(!l)return null;const u=ue(ee(e,["operations",o],this.referenceNamePropertyKey)),f=ue(ee(e,["operations",r,o],this.referenceNamePropertyKey));ue(ee(e,["operations",r,"bindings",o],this.referenceNamePropertyKey));const c=ue(ee(e,["operations",r,"channel",o],this.referenceNamePropertyKey));ue(ee(e,["operations",r,"channel","bindings",o],this.referenceNamePropertyKey)),ue(ee(e,["operations",r,"channel","servers",o],this.referenceNamePropertyKey));const g=ue(ee(e,["operations",r,"messages",o],this.referenceNamePropertyKey)),y=ue(ee(e,["operations",r,"messages",a,o],this.referenceNamePropertyKey));ue(ee(e,["operations",r,"messages",a,"bindings",o],this.referenceNamePropertyKey));const p=ee(e,["operations",r,"messages",a],this.referenceNamePropertyKey),h=ee(e,["operations",r,"messages"],this.referenceNamePropertyKey),b=T(p)&&gr(h)?gs(h,p):void 0,w=(b&&typeof b!="symbol"?g==null?void 0:g[b]:void 0)??(r&&typeof r!="symbol"?u==null?void 0:u[r]:void 0),N=l;if(!(o in N)){const C=y==null?void 0:y.title,D=y==null?void 0:y.name,A=y==null?void 0:y.description,j=y==null?void 0:y.summary,_=c==null?void 0:c.address,J=y==null?void 0:y.headers,O=y==null?void 0:y.payload,P=N.data.content.extensions;if(P&&!(o in P)){const de=Object.keys(y??{}).reduce((Z,oe)=>{if(!Ft(oe))return Z;const Ge=y==null?void 0:y[oe];return Ge&&(Z[oe]=Ge),Z},{});N.data.content.extensions=Object.assign(P,{[o]:de})}const W=N.data.content;if(W&&!(o in W)){const de={...J?{headers:J}:{},...O?{payload:O}:{}};N.data.content=Object.assign(W,{[o]:de})}N[o]={...w?{[R]:w}:{},...C?{title:C}:{},...D?{internalTitle:D}:{},...A?{description:A}:{},...j?{summary:j}:{},..._?{address:_}:{}}}if(!(o in N.data.channel)){const C=c==null?void 0:c.title,D=c==null?void 0:c.description,A=c==null?void 0:c.summary,j=c==null?void 0:c.address,_=N.data.channel.extensions;if(_&&!(o in _)){const J=Object.keys(c??{}).reduce((O,P)=>{if(!Ft(P))return O;const W=c==null?void 0:c[P];return W&&(O[P]=W),O},{});N.data.channel.extensions=Object.assign(_,{[o]:J})}N.data.channel[o]={...C?{title:C}:{},...D?{description:D}:{},...A?{summary:A}:{},...j?{address:j}:{}}}if(!(o in N.data.operation)){const C=f==null?void 0:f.title,D=f==null?void 0:f.description,A=f==null?void 0:f.summary,j=N.data.operation.extensions;if(j&&!(o in j)){const _=Object.keys(f??{}).reduce((J,O)=>{if(!Ft(O))return J;const P=f==null?void 0:f[O];return P&&(J[O]=P),J},{});N.data.operation.extensions=Object.assign(j,{[o]:_})}N.data.operation[o]={...C?{title:C}:{},...D?{description:D}:{},...A?{summary:A}:{}}}return mr(N,o,s),N}hasOnlyAllowedDiffMetaSymbols(e){if(!T(e)&&!be(e))return!0;if(be(e))return e.every(a=>this.hasOnlyAllowedDiffMetaSymbols(a));const n=new Set([this.diffMetaKeys.diffsMetaKey,this.diffMetaKeys.aggregatedDiffsMetaKey]);return Object.getOwnPropertySymbols(e).every(a=>n.has(a))?Object.values(e).every(a=>this.hasOnlyAllowedDiffMetaSymbols(a)):!1}}class $s extends Et{createNodeValue(e,n,t,r){return super.createNodeValue(e,n,t,r)}createNodeMeta(e){return super.createNodeMeta(e)}}class Xs extends hn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n)){if(!o)continue;const s=o.data.type;a.add(s)}return a}}class Qs extends hn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{aggregatedDiffsMetaKey:o}=r,s=ee(t,["binding",o]);if(this.isDiffsSet(s))for(const l of s)l&&a.add(l.type);return a}}class Zs extends hn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=ue(ee(t,["parameters","properties",o]));if(l)for(const c of Object.values(l))c&&a.add(c.type);const u=ee(t,["parameters",s]);if(this.isDiffsSet(u))for(const c of u)c&&a.add(c.type);const f=ue(ee(t,["extensions",o]));if(f)for(const c of Object.values(f))c&&a.add(c.type);return a}}class el extends hn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o,aggregatedDiffsMetaKey:s}=r,l=ue(ee(t,["extensions",o]));if(l)for(const c of Object.values(l))c&&a.add(c.type);const u=ee(t,["headers",s]);if(this.isDiffsSet(u))for(const c of u)c&&a.add(c.type);const f=ee(t,["payload",s]);if(this.isDiffsSet(f))for(const c of f)c&&a.add(c.type);return a}}class nl extends hn{aggregate(e,n,t,r){const a=new Set;if(!t||!r)return a;const{diffsMetaKey:o}=r,s=ue(ee(t,["extensions",o]));if(s)for(const l of Object.values(s))l&&a.add(l.type);return a}}var Zt;let tl=(Zt=class{static instance(e){switch(e){case v.BINDING:if(!this.instances.has(v.BINDING)){const n=new Qs;this.instances.set(v.BINDING,n)}return this.instances.get(v.BINDING);case v.MESSAGE_CONTENT:if(!this.instances.has(v.MESSAGE_CONTENT)){const n=new el;this.instances.set(v.MESSAGE_CONTENT,n)}return this.instances.get(v.MESSAGE_CONTENT);case v.MESSAGE_CHANNEL:if(!this.instances.has(v.MESSAGE_CHANNEL)){const n=new Zs;this.instances.set(v.MESSAGE_CHANNEL,n)}return this.instances.get(v.MESSAGE_CHANNEL);case v.MESSAGE_OPERATION:if(!this.instances.has(v.MESSAGE_OPERATION)){const n=new nl;this.instances.set(v.MESSAGE_OPERATION,n)}return this.instances.get(v.MESSAGE_OPERATION);default:if(!this.instances.has(null)){const n=new Xs;this.instances.set(null,n)}return this.instances.get(null)}}},M(Zt,"instances",new Map),Zt);class rl extends Hn{aggregate(e,n){}}class il extends Hn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n,a=ue(ee(e,[r],t));if(!a)return;const o={};let s=!1;for(const l of Object.keys(e)){const u={},f=a[l];f&&(s=!0,this.aggregateWholeNodeDiff(f,u),o[l]=u[R])}return s?o:void 0}}class al extends Hn{aggregate(e,n){if(!e)return;const{diffsMetaKey:t}=n,r=ue(ee(e,[t])),a=r==null?void 0:r.headers,o=r==null?void 0:r.payload,s={};if(a){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};E(a)&&(l={...l,backgroundColor:S.Gray},u={...u,backgroundColor:S.Green}),k(a)&&(l={...l,backgroundColor:S.Red},u={...u,backgroundColor:S.Gray}),q(a)&&(l={...l,backgroundColor:S.Yellow},u={...u,backgroundColor:S.Yellow}),s.headers={data:a,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}if(o){let l={isContentVisible:!0,isHeaderVisible:!0},u={isContentVisible:!0,isHeaderVisible:!0};E(o)&&(l={...l,backgroundColor:S.Gray},u={...u,backgroundColor:S.Green}),k(o)&&(l={...l,backgroundColor:S.Red},u={...u,backgroundColor:S.Gray}),q(o)&&(l={...l,backgroundColor:S.Yellow},u={...u,backgroundColor:S.Yellow}),s.payload={data:o,styles:{before:l,after:u},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}return s}}class ol extends Hn{aggregate(e,n,t){if(!e)return;const{diffsMetaKey:r}=n;if(!Array.isArray(e))return;const a=ue(ee(e,[r],t));if(!a)return;const o={};let s=!1;for(let l=0;l<e.length;l++){const f=e[l][t];if(!f)continue;const c={},g=a[l];g&&(s=!0,this.aggregateWholeNodeDiff(g,c),o[f]=c[R])}return s?o:void 0}}class ha{static instance(e){switch(e){case v.BINDINGS:return this.instances.has(v.BINDINGS)||this.instances.set(v.BINDINGS,new il),this.instances.get(v.BINDINGS);case v.SERVERS:return this.instances.has(v.SERVERS)||this.instances.set(v.SERVERS,new ol),this.instances.get(v.SERVERS);case v.MESSAGE_CONTENT:return this.instances.has(v.MESSAGE_CONTENT)||this.instances.set(v.MESSAGE_CONTENT,new al),this.instances.get(v.MESSAGE_CONTENT);default:if(!this.instances.has(null)){const n=new rl;this.instances.set(null,n)}return this.instances.get(null)}}}M(ha,"instances",new Map);class sl extends fe{aggregate(e){const n=e[R];if(n){const c=n.data,y={type:c.type,causedAt:[]};return q(c)?(y.causedAt=c.beforeDeclarationPaths[0],{[H.TitleRow]:y,[H.BindingVersionRow]:y}):(k(c)?y.causedAt=c.beforeDeclarationPaths[0]:E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),{[H.TitleRow]:y,[H.DescriptionRow]:y,[H.SummaryRow]:y,[H.AddressRow]:y,[H.BindingVersionRow]:y,[H.ServerAddressRow]:y})}const t=e.title,r=e.description,a=e.summary,o=e.address,s=e.version,l=e.host,u=e.protocol,f={};if(t){const c=t.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.TitleRow]=y}if(r){const c=r.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.DescriptionRow]=y}if(a){const c=a.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.SummaryRow]=y}if(o){const c=o.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.AddressRow]=y}if(s){const c=s.data,y={type:c.type,causedAt:[]};(k(c)||q(c))&&(y.causedAt=c.beforeDeclarationPaths[0]),E(c)&&(y.causedAt=c.afterDeclarationPaths[0]),f[H.BindingVersionRow]=y}if(l||u){const c=l==null?void 0:l.data,g=u==null?void 0:u.data,y=fe.maxDiffByDiffType(c,g);if(y){const p={type:y.type,causedAt:[]};(k(y)||q(y))&&(p.causedAt=y.beforeDeclarationPaths[0]),E(y)&&(p.causedAt=y.afterDeclarationPaths[0]),f[H.ServerAddressRow]=p}}return Object.keys(f).length>0?f:void 0}}class ba{static instance(e){switch(e){default:return new sl}}}M(ba,"instances",new Map);class ll extends vr{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const a of Object.values(e)){if(!a)continue;const o=a.data.type;r.add(o)}return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!E(n)&&!k(n)&&!q(n)&&!Ye(n))return!1;return!0}}class dl{static instance(e){switch(e){default:return new ll}}}class un extends G{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0})}aggregate(n,t,r,a,o){const{diffsMetaKey:s}=t;if(!T(n)&&!Array.isArray(n))return;const l=n[s],u={};if(o){const y=o.diffs[R];if(y&&(E(y.data)||k(y.data)))return u[R]={...y,inherited:!0},u;{const p=o.descendantDiffs[r];if(p)return u[R]=p,u}}else if(a){const y=a.diffs[R];if(y&&(E(y.data)||k(y.data)))return u[R]={...y,inherited:!0},u;{const p=a.descendantDiffs[r];if(p)return u[R]=p,u}}if(!G.isDiffsRecord(l))return;const f=l.title;f&&this.aggregateTextDiff(f,"title",u);const c=l.description;c&&this.aggregateTextDiff(c,"description",u);const g=l.summary;return g&&this.aggregateTextDiff(g,"summary",u),u}aggregateTextDiff(n,t,r){let a=this.DEFAULT_DIFF_STYLES,o=this.DEFAULT_DIFF_STYLES;E(n)&&(a={...a,isContentVisible:!1,backgroundColor:S.Gray},o={...o,isContentVisible:!0,backgroundColor:S.Green}),k(n)&&(a={...a,isContentVisible:!0,backgroundColor:S.Red},o={...o,isContentVisible:!1,backgroundColor:S.Gray}),(Ye(n)||q(n))&&(a={...a,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},o={...o,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),r[t]={data:n,styles:{before:a,after:o},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}}class ul extends un{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!T(e))return;let s=super.aggregate(e,n,t,r,a);if(s){const u=s[R];if(u){const{data:f,styles:c}=u;E(f)&&(c.after.borderShadowColor=S.Green),k(f)&&(c.before.borderShadowColor=S.Red),this.aggregateBindingVersionDiffByWholeNodeDiff(u,s)}}s||(s={});const l=ee(e,["binding"]);if(T(l)){const u=l[o];if(G.isDiffsRecord(u)){const f=u.bindingVersion;f&&this.aggregateTextDiff(f,"version",s)}}return Object.keys(s).length>0?s:void 0}aggregateBindingVersionDiffByWholeNodeDiff(e,n){const{data:t}=e;let r;if(E(t)&&T(t.afterValue)){const a=t.afterValue.bindingVersion;r={...t,afterValue:a},this.aggregateTextDiff(r,"version",n)}if(k(t)&&T(t.beforeValue)){const a=t.beforeValue.bindingVersion;r={...t,beforeValue:a},this.aggregateTextDiff(r,"version",n)}}}class fl extends un{aggregateByDescendantDiffs(e,n,t){var u;if(n[R])return n;if(!T(e))return;const r=Object.keys(e).length,a=Object.keys(t).length,[o]=Object.values(t);if(!o)return;const s=this.createSyntheticReplaceChangedPropertyMetaDataFactory(o);if(a!==r)return n[R]=s(),n;let l=o.data.action;for(const f of Object.values(t))if(((u=f==null?void 0:f.data)==null?void 0:u.action)!==l){l=L.replace;break}return l===L.replace?(n[R]=s(),n):(n[R]=o,n)}createSyntheticReplaceChangedPropertyMetaDataFactory(e){const{data:n,styles:t}=e;let r;const a={...n,beforeDeclarationPaths:k(n)?n.beforeDeclarationPaths:[],beforeValue:k(n)?n.beforeValue:void 0,afterDeclarationPaths:E(n)?n.afterDeclarationPaths:[],afterValue:E(n)?n.afterValue:void 0,action:L.replace};return()=>(r||(r={data:a,styles:{before:{isContentVisible:t.before.isContentVisible,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:t.after.isContentVisible,isHeaderVisible:!0,backgroundColor:S.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}),r)}}class cl extends un{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t,r){if(n[R])return n;const a=ee(e,["rawValues"]);if(!T(a))return;const{diffsMetaKey:o}=r,s=a[o];if(!G.isDiffsRecord(s))return;const l=Object.keys(a).length,u=Object.keys(s).length;if(l!==u)return;const[f]=Object.values(s);if(!f)return;let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},p=y;return E(f)&&(c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(f)&&(c={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},g={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),n[R]={data:f,styles:{before:c,after:g},flags:{before:y,after:p},highlightingMode:on},n}}class ml extends un{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!T(e))return;let s=super.aggregate(e,n,t,r,a);s||(s={});const l=e[o];if(G.isDiffsRecord(l)){const u=l[R];if(u){let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};E(u)&&(c={...c,isContentVisible:!1,backgroundColor:S.Gray},g={...g,isContentVisible:!0,backgroundColor:S.Green}),k(u)&&(c={...c,isContentVisible:!0,backgroundColor:S.Red},g={...g,isContentVisible:!1,backgroundColor:S.Gray}),s[R]={data:u,highlightingMode:Ve,styles:{before:c,after:g},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}}}}const f=l.address;f&&this.aggregateTextDiff(f,"address",s)}return Object.keys(s).length>0?s:void 0}}class yl extends un{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t,r){if(n[R])return n;const a=ee(e,["rawValues","properties"]);if(!T(a))return;const{diffsMetaKey:o}=r,s=a[o];if(!G.isDiffsRecord(s))return;const l=Object.keys(a).length,u=Object.keys(s).length;if(l!==u)return;const[f]=Object.values(s);if(!f)return;let c={isContentVisible:!0,isHeaderVisible:!0},g={isContentVisible:!0,isHeaderVisible:!0};const y={increaseLevel:!1},p=y;return E(f)&&(c={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(f)&&(c={isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},g={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),n[R]={data:f,styles:{before:c,after:g},flags:{before:y,after:p},highlightingMode:Ve},n}}class gl extends un{aggregate(e,n,t,r,a){const{diffsMetaKey:o}=n;if(!T(e))return;let s=super.aggregate(e,n,t,r,a);s||(s={});const l=e[o];if(G.isDiffsRecord(l)){const u=l.host;u&&this.aggregateTextDiff(u,"host",s);const f=l.protocol;f&&this.aggregateTextDiff(f,"protocol",s)}return Object.keys(s).length>0?s:void 0}}class pl extends un{aggregate(e,n,t,r,a){return super.aggregate(e,n,t,r,a)}aggregateByDescendantDiffs(e,n,t){if(n[R])return n;if(!Array.isArray(e))return;const r=e.length,a=Object.keys(t).length;if(r!==a)return;const[o]=Object.values(t);if(o)return n[R]=o,n}}class or{static instance(e){switch(e){case v.BINDING:return this.instances.has(v.BINDING)||this.instances.set(v.BINDING,new ul),this.instances.get(v.BINDING);case v.BINDINGS:return this.instances.has(v.BINDINGS)||this.instances.set(v.BINDINGS,new fl),this.instances.get(v.BINDINGS);case v.EXTENSIONS:return this.instances.has(v.EXTENSIONS)||this.instances.set(v.EXTENSIONS,new cl),this.instances.get(v.EXTENSIONS);case v.MESSAGE:return this.instances.has(v.MESSAGE)||this.instances.set(v.MESSAGE,new ml),this.instances.get(v.MESSAGE);case v.MESSAGE_CHANNEL_PARAMETERS:return this.instances.has(v.MESSAGE_CHANNEL_PARAMETERS)||this.instances.set(v.MESSAGE_CHANNEL_PARAMETERS,new yl),this.instances.get(v.MESSAGE_CHANNEL_PARAMETERS);case v.SERVER:return this.instances.has(v.SERVER)||this.instances.set(v.SERVER,new gl),this.instances.get(v.SERVER);case v.SERVERS:return this.instances.has(v.SERVERS)||this.instances.set(v.SERVERS,new pl),this.instances.get(v.SERVERS);default:return this.instances.has(null)||this.instances.set(null,new un),this.instances.get(null)}}}M(or,"instances",new Map);const hl="[AsyncAPI][WithDiffs]";class bl extends pa{constructor(n){super(n);M(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return hl}createTree(){return new Ws}createNodeDataBuilder(){return new $s}prepareSource(){return new zs(this.referenceNamePropertyKey,this.logger,this.diffsMetaKeys).transformOperationOrientedSpecToMessageOrientedSpec(this.source,this.operationKeys)}takeCrawlValue(n){return gr(n)?n:null}createNodeFromRaw(n,t,r,a,o){const s=super.createNodeFromRaw(n,t,r,a,o);return!s||!Zr(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isAsyncApiTreeNodeKind(t))return;const a=this.takeSimpleTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return or.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isAsyncApiTreeNodeKind(n))return dl.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isAsyncApiTreeNodeKind(n))return ha.instance(n).aggregate(t.value,this.diffsMetaKeys,this.referenceNamePropertyKey)}updateNodeDiffsByDescendantDiffs(n,t,r,a){if(this.isAsyncApiTreeNodeKind(n)&&t)return or.instance(n).aggregateByDescendantDiffs(t,r,a,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isAsyncApiTreeNodeKind(n)&&r)return tl.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isAsyncApiTreeNodeKind(n)&&t)return ba.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Sr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isAsyncApiTreeNodeKind(n){return zi.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&Zr(n)?n:void 0}takeSimpleTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isSimpleTreeNode(t)?t:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}class Dl extends yr{constructor(){super()}}const Y={ROOT:"root",DEFINITION:"definition",PROPERTY:"property",ADDITIONAL_PROPERTIES:"additionalProperties",PATTERN_PROPERTY:"patternProperty",ITEMS:"items",ITEM:"item",ADDITIONAL_ITEMS:"additionalItems",ALL_OF:"allOf",ANY_OF:"anyOf",ONE_OF:"oneOf"},Da=Object.values(Y),wn="unknown",vl="any",Sl="nothing",$={UNKNOWN:wn,ANY:vl,NOTHING:Sl,NULL:"null",STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array"},wl=Object.values($);function Nl(i){return!i||!ps(i)?!1:wl.some(e=>e===i)}function kl(i){return T(i)&&yt in i}function Kt(i,e){const n=i[e];return be(n)&&n.length>0}function kn(i){return typeof i=="boolean"}function dn(i){return i==null||typeof i=="boolean"?null:i}const El=[$.STRING,$.NUMBER,$.INTEGER,$.BOOLEAN];function Er(i){return!!i&&El.includes(i)}const Al=[$.ANY,$.NOTHING];function Tl(i){return!!i&&Al.includes(i)}function gt(i){return!T(i)||be(i)?!1:Kt(i,"allOf")||Kt(i,"oneOf")||Kt(i,"anyOf")}function ei(i){return T(i)&&Reflect.ownKeys(i).length>0}function Gt(i){return be(i)&&i.length>0}function va(i,e){if(!T(i)&&!be(i))return!1;if(be(i))return i.length>0;const n=i;if(Gt(n[er])||Gt(n[nr])||Gt(n[tr])||ei(n[hi])||ei(n[bi]))return!0;const t=n[Di];if(t!==void 0&&t!==!1||n[vi]!==void 0)return!0;const r=n[Si];return r!==void 0&&r!==!1}const Pe={root:Y.ROOT,definition:Y.DEFINITION,property:Y.PROPERTY,additionalProperties:Y.ADDITIONAL_PROPERTIES,patternProperty:Y.PATTERN_PROPERTY,items:Y.ITEMS,item:Y.ITEM,additionalItems:Y.ADDITIONAL_ITEMS,allOf:Y.ALL_OF,anyOf:Y.ANY_OF,oneOf:Y.ONE_OF},Vl=(i,e)=>{if(!T(e)||be(e))return e;if("example"in e&&!("examples"in e)){const{example:n}=e;return e.examples=[n],e}return e},xl="x-";function pt(i){return i===void 0||typeof i=="symbol"?!1:(typeof i=="string"?i:`${i}`).startsWith(xl)}function Cl(i,e){if(!T(e)||be(e))return e;const n=Reflect.ownKeys(e),t=n.filter(s=>pt(s));if(t.length===0)return e;const r=new Set(t),a=t.reduce((s,l)=>(pt(l)&&(s[l]=e[l]),s),{}),o={};for(const s of n)typeof s=="string"&&r.has(s)||(o[s]=e[s]);return o.extensions=a,o}const Rl=[Vl,Cl];function Ie(i=Pe.root){return{"/allOf":{"/*":()=>Ie(Pe.allOf)},"/oneOf":{"/*":()=>Ie(Pe.oneOf)},"/anyOf":{"/*":()=>Ie(Pe.anyOf)},"/properties":{"/*":()=>Ie(Pe.property)},"/items":()=>({...Ie(Pe.items),"/*":({key:e})=>hs(e)?Ie(Pe.item):{}}),"/additionalProperties":()=>Ie(Pe.additionalProperties),"/additionalItems":()=>Ie(Pe.additionalItems),"/patternProperties":{"/*":()=>Ie(Pe.patternProperty)},kind:i,transformers:Rl}}const Ml=new Set([Y.ALL_OF,Y.ANY_OF,Y.ONE_OF]);class _l{resolveNodeVisibility(e){const n=e.nestedNodes(),t=n.length>0,r=n.length>0,a=!e.isCycle&&n.length>0;return{showSelector:t,showSubheader:r,isExpandable:a,initiallyExpanded:a&&!e.isCycle}}isCombinerKind(e){return Ml.has(e)}}const Sa=new _l;function ql(i){return Sa.resolveNodeVisibility(i)}function At(i){return Sa.isCombinerKind(i)}function Hl(i){return vt(i)}const Ol={type:$.ANY};function Pl(i,e){if(kn(e)){if(e===!1)return!1;if(e===!0&&i===Y.ADDITIONAL_PROPERTIES)return Ol}}function Il(i,e){if(!e||typeof i=="number"||!i)return!1;const n=e.value();return!!n&&typeof n=="object"&&"required"in n&&Array.isArray(n.required)&&n.required.includes(String(i))}function ve(i){return"diffs"in i&&"diffsSummary"in i&&"descendantDiffs"in i&&"descendantDiffsSummary"in i&&"diffsSeverities"in i}const Ll="extensions",jl="customAnnotations",ge=class ge extends St{constructor(e){super(),this.pick=e}static getJsonSchemaTreeNodeValueProps(e){switch(e){case $.UNKNOWN:case $.ANY:case $.NOTHING:case $.NULL:case $.BOOLEAN:return ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS;case $.STRING:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ir,Ki,Gi,Bi];case $.NUMBER:case $.INTEGER:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,ir,Ii,Li,ji,Ji,Fi];case $.OBJECT:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,qi,Hi,Oi,Pi];case $.ARRAY:return[...ge.JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS,Ri,Mi,_i];default:return[]}}createNodeMeta(e){return this.buildNodeMeta(e,"",null,!1)}buildNodeMeta(e,n="",t=null,r=!1){const a=Il(n,t),o=kl(e)?{brokenRef:String(e.$ref)}:{};return!gt(e)&&T(e)?{...this.pick(e,ge.JSON_SCHEMA_TREE_NODE_META_PROPS)??{},required:a,...o,_fragment:e,isCycle:r}:{required:a,...o,_fragment:e,isCycle:r}}createNodeValue(e,n,t,r){if(t==null)return null;const a=Pl(e,t);if(a!==void 0)return a;if(kn(t))return t;if(!T(t)||gt(t))return null;const o=Nl(t.type)?t.type:$.UNKNOWN;return o===$.UNKNOWN||o===$.ANY||o===$.NOTHING||o===$.NULL||o===$.BOOLEAN?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.STRING?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.NUMBER||o===$.INTEGER?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.OBJECT?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:o===$.ARRAY?{...r(t,ge.getJsonSchemaTreeNodeValueProps(o)),type:o}:null}};M(ge,"JSON_SCHEMA_TREE_NODE_META_PROPS",[wi,Ni,ki,Yo]),M(ge,"JSON_SCHEMA_TREE_NODE_VALUE_COMMON_PROPS",[rr,Ei,Ai,Ti,Vi,xi,Ci,Ll,jl]);let ht=ge;const Jl="[JSON Schema]";class wa extends wt{constructor(n){const{source:t,materializeDepth:r,logger:a=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"materializeDepth");M(this,"logger");M(this,"nodeDataBuilder");M(this,"lazyState",new $i);M(this,"crawlHooks",null);this.source=t,this.materializeDepth=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){const n=this.prepareSource();if(!n||!T(n))return this.tree;const t={parent:null,container:null,ancestors:new Nt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},r=Ie();return this.crawlHooks=Hl({source:n,tree:this.tree,supportedNodeKinds:Da,createNodeFromRaw:(a,o,s,l,u)=>this.createNodeFromRaw(a,o,s,l,u),createNodeParams:(a,o,s,l)=>({value:kn(a)||T(a)&&!Array.isArray(a)?a:null,newDataLevel:!At(l),parent:o,container:s}),createStateForSimpleNode:(a,o)=>({parent:o,container:null,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),createStateForComplexNode:(a,o)=>({parent:a.parent,container:o,ancestors:a.ancestors,depth:a.depth,materializeDepth:a.materializeDepth,pathPrefix:a.pathPrefix}),isSimpleNode:a=>this.isSimpleTreeNode(a),isComplexNode:a=>this.isComplexTreeNode(a),resolveNodeKey:(a,o)=>this.resolveNodeKey(a,o),isDisallowedValue:a=>a==null,shouldSkipNodeCreation:a=>be(a),lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:va}}),this.logger.debug(`${this.logPrefix} Building tree from source:`,n),Nn(n,this.crawlHooks,{state:t,rules:r}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const a={parent:n,container:null,ancestors:Xi(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};Nn(r.fragment,this.crawlHooks,{state:a,rules:r.rules},!0)}get logPrefix(){return Jl}createTree(){return new Dl}createNodeDataBuilder(){return new ht((n,t)=>this.pick(n,t))}prepareSource(){return T(this.source)?this.source:null}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u,value:f}=o;if(a||T(f)&&gt(f)){const h=this.createNodeMeta(t,o),b={type:le.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:null,meta:h,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,b)}const g=this.createNodeValue(t,r,o),y=this.createNodeMeta(t,o),p={type:le.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(l),value:g,meta:y,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,p)}createNodeMeta(n,t){const{value:r,parent:a}=t;return this.nodeDataBuilder.buildNodeMeta(r,n,a,!1)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return n}isSimpleTreeNode(n){return n.type===le.SIMPLE}isComplexTreeNode(n){return n.type===le.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}class Fl extends Dr{constructor(){super()}}class Kl{constructor(e,n){this.logger=e,this.diffMetaKeys=n}transformSourceToSchemaWithDiffs(e){if(!T(e))return null;const{diffsMetaKey:n,aggregatedDiffsMetaKey:t}=this.diffMetaKeys;return mr(e,n,t),this.logger.debug("[JSON Schema][WithDiffs] Prepared source with rollup:",e),e}}class Gl extends ht{constructor(e){super(e)}}class Bl extends hn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n))o&&(!E(o.data)&&!k(o.data)||a.add(o.data.type));return a}}class Na{static instance(e){return this.kindAnyInstance}}M(Na,"kindAnyInstance",new Bl);const Ul=["properties","patternProperties","allOf","anyOf","oneOf","items"],Wl=new Set(["properties","patternProperties"]);class Yl extends Hn{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});M(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!T(n))return;const{diffsMetaKey:r}=t,a={};for(const o of this.resolveDescendantDiffsRecords(n,r))for(const[s,l]of Object.entries(o))!l||s===R||!G.isDiff(l)||(a[s]=this.buildDescendantDiffMetadata(l));return Object.keys(a).length>0?a:void 0}resolveDescendantDiffsRecords(n,t){const r=[],a=ue(Reflect.get(n,t));a&&r.push(a);for(const o of Ul){const s=Reflect.get(n,o);if(!T(s)&&!be(s))continue;const l=ue(Reflect.get(s,t));if(l){r.push(l);continue}const u=a==null?void 0:a[o];if(u&&(E(u)||k(u))&&(Wl.has(o)?T(s):be(s))){const g=this.decomposeWholeChildBagDiff(s,u);g&&r.push(g)}}return r}decomposeWholeChildBagDiff(n,t){const r=be(n)?n.map((o,s)=>String(s)):Object.keys(n);if(r.length===0)return;const a={};for(const o of r)a[o]=this.buildDecomposedChildBagEntryDiff(t);return a}buildDecomposedChildBagEntryDiff(n){return E(n)?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:null,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:null,beforeDeclarationPaths:n.beforeDeclarationPaths}}buildDescendantDiffMetadata(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES,a=this.DEFAULT_DIFF_FLAGS,o=this.DEFAULT_DIFF_FLAGS;const s=Ve;return E(n)&&(t={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},a={...a,increaseLevel:!1},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Green,borderShadowColor:S.Green},o={...o,increaseLevel:!0}),k(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Red,borderShadowColor:S.Red},a={...a,increaseLevel:!0},r={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},o={...o,increaseLevel:!1}),q(n)&&(t={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},r={isContentVisible:!1,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:a,after:o},highlightingMode:s}}}class ka{static instance(e){return this.kindAnyInstance}}M(ka,"kindAnyInstance",new Yl);const sn="titleRow",Ea=["type","format","title"],Fn=["readOnly","writeOnly","deprecated"];class zl extends fe{aggregate(e){const n=e[R],t={};return n?(t[H.TitleRow]=this.buildNodeDiffsSeverity(n),t[H.DescriptionRow]=this.buildNodeDiffsSeverity(n),t[H.NestingIndicatorRow]=this.buildNodeDiffsSeverity(n),t[H.ExtensionsRow]=this.buildNodeDiffsSeverity(n),t[H.CustomAnnotationRow]=this.buildNodeDiffsSeverity(n)):(this.applyMaxRowSeverityFromTypeLabelDiffs(e,t),this.applyRowSeverity(e,"description",H.DescriptionRow,t),this.applyRowSeverity(e,"nestingIndicatorRowColorizingDiff",H.NestingIndicatorRow,t),this.applyRowSeverity(e,"extensionsRowColorizingDiff",H.ExtensionsRow,t),this.applyCustomAnnotationsRowSeverity(e,t)),this.applyValidationRowSeverities(e,t),Object.keys(t).length>0?t:void 0}applyValidationRowSeverities(e,n){var r,a,o;const t=e;for(const s of Object.values(ce)){const l=fe.maxChangedPropertyMetaDataByDiffType((r=t.validationRowDiffs)==null?void 0:r[s],(a=t.validationRowColorizingDiffs)==null?void 0:a[s],...Object.values(((o=t.validationRowValueDiffs)==null?void 0:o[s])??{}));l&&(n[Qi[s]]=this.buildNodeDiffsSeverity(l))}}applyCustomAnnotationsRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(t.customAnnotationDiffs??{}),...Object.values(t.customAnnotationRowColorizingDiffs??{}));r&&(n[H.CustomAnnotationRow]=this.buildNodeDiffsSeverity(r))}applyMaxRowSeverityFromTypeLabelDiffs(e,n){const t=e,r=[t[sn],...Object.values(t.typeLabelFieldDiffs??{})],a=fe.maxChangedPropertyMetaDataByDiffType(...r);a&&(n[H.TitleRow]=this.buildNodeDiffsSeverity(a))}buildNodeDiffsSeverity(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||q(n)?t.causedAt=n.beforeDeclarationPaths[0]:E(n)&&(t.causedAt=n.afterDeclarationPaths[0]),t}applyRowSeverity(e,n,t,r){const a=e[n];a&&(r[t]=this.buildNodeDiffsSeverity(a))}}class $l extends zl{aggregate(e){const n=super.aggregate(e)??{};return this.applyDefaultRowSeverity(e,n),this.applyEnumRowSeverity(e,n),this.applyExamplesRowSeverity(e,n),this.applyAllowedAdditionalPropertyNamesRowSeverity(e,n),Object.keys(n).length>0?n:void 0}applyDefaultRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.default,t.defaultRowColorizingDiff);r&&(n[H.DefaultRow]=this.buildNodeDiffsSeverity(r))}applyEnumRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.enumDiff,t.enumRowColorizingDiff,...Object.values(t.enumValueDiffs??{}));r&&(n[H.EnumRow]=this.buildNodeDiffsSeverity(r))}applyExamplesRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.examplesDiff,t.examplesRowColorizingDiff,...Object.values(t.examplesValueDiffs??{}));r&&(n[H.ExamplesRow]=this.buildNodeDiffsSeverity(r))}applyAllowedAdditionalPropertyNamesRowSeverity(e,n){const t=e,r=fe.maxChangedPropertyMetaDataByDiffType(t.allowedAdditionalPropertyNamesDiff,t.allowedAdditionalPropertyNamesRowColorizingDiff,...Object.values(t.allowedAdditionalPropertyNamesValueDiffs??{}));r&&(n[H.AllowedAdditionalPropertyNamesRow]=this.buildNodeDiffsSeverity(r))}}class Aa{static instance(e){return this.kindPropertyInstance}}M(Aa,"kindPropertyInstance",new $l);function Bt(i,e){for(const n of Object.values(e??{}))pr(n)&&i.add(n.data.type)}class Xl extends vr{aggregate(e,n,t){const r=new Set;if(!e)return r;const a=e;for(const[o,s]of Object.entries(e))if(s){if(o==="enumValueDiffs"||o==="examplesValueDiffs"){Bt(r,a[o]);continue}if(o==="validationRowDiffs"||o==="validationRowColorizingDiffs"){Bt(r,a[o]);continue}if(o==="validationRowValueDiffs"){for(const l of Object.values(a.validationRowValueDiffs??{}))Bt(r,l);continue}pr(s)&&r.add(s.data.type)}return r}}class Ta{static instance(e){return this.kindAnyInstance}}M(Ta,"kindAnyInstance",new Xl);const je={OAS_3_0_BOOLEAN_EXCLUSIVE:"oas-3-0-boolean-exclusive",OAS_3_1_NUMERIC_EXCLUSIVE:"oas-3-1-numeric-exclusive"};function Va(i){return typeof i.exclusiveMin=="number"||typeof i.exclusiveMax=="number"?je.OAS_3_1_NUMERIC_EXCLUSIVE:je.OAS_3_0_BOOLEAN_EXCLUSIVE}function Ql(i){return i.dialect??Va(i)}const Zl="?",ye="{value}",Ue="{exclusive_value}",tn=">",st=">=",rn="<",lt="<=",Ne=1,ke=2,Ee=4,Ae=8,ni={0:{lower:void 0,upper:void 0},[Ne]:{lower:`${st} ${ye}`,upper:void 0},[ke]:{lower:`${tn} ${Ue}`,upper:void 0},[Ee]:{lower:void 0,upper:`${lt} ${ye}`},[Ae]:{lower:void 0,upper:`${rn} ${Ue}`},[ke|Ne]:{lower:`${tn} ${ye}`,upper:void 0},[ke|Ee]:{lower:`${tn} ${Ue}`,upper:`${lt} ${ye}`},[ke|Ae]:{lower:`${tn} ${Ue}`,upper:`${rn} ${Ue}`},[Ae|Ne]:{lower:`${st} ${ye}`,upper:`${rn} ${Ue}`},[Ae|Ee]:{lower:void 0,upper:`${rn} ${ye}`},[Ee|Ne]:{lower:`${st} ${ye}`,upper:`${lt} ${ye}`},[ke|Ne|Ee]:{lower:`${tn} ${ye}`,upper:`${lt} ${ye}`},[ke|Ne|Ae]:{lower:`${tn} ${ye}`,upper:`${rn} ${Ue}`},[ke|Ee|Ae]:{lower:`${tn} ${Ue}`,upper:`${rn} ${ye}`},[Ae|Ne|Ee]:{lower:`${st} ${ye}`,upper:`${rn} ${ye}`},[Ne|ke|Ee|Ae]:{lower:`${tn} ${ye}`,upper:`${rn} ${ye}`}};function sr(i){return i!=null}function ti(i){return i!==void 0&&i!==!1}function ed(i,e,n){return(i&(Ne|ke))!==(Ne|ke)||n===void 0||typeof e!="number"?i:n>=e?i&~Ne:i&~ke}function nd(i,e,n){return(i&(Ee|Ae))!==(Ee|Ae)||n===void 0||typeof e!="number"?i:n<=e?i&~Ee:i&~Ae}function ri(i,e,n){return i.replace(ye,`${e}`).replace(Ue,sr(n)?`${n}`:Zl)}function td(i,e){return sr(i)||sr(e)}function rd(i){const{min:e,max:n,exclusiveMin:t,exclusiveMax:r}=i;let a=0;return e!==void 0&&(a|=Ne),ti(t)&&(a|=ke),n!==void 0&&(a|=Ee),ti(r)&&(a|=Ae),a}function xa(i,e){let n=i;return typeof e.exclusiveMin!="number"&&!(n&Ne)&&(n&=~ke),typeof e.exclusiveMax!="number"&&!(n&Ee)&&(n&=~Ae),n}function id(i,e){return xa(i,e)}function ad(i,e){const n=typeof e.exclusiveMin=="number"?e.exclusiveMin:void 0,t=typeof e.exclusiveMax=="number"?e.exclusiveMax:void 0;let r=ed(i,e.min,n);return r=nd(r,e.max,t),r}const od={[je.OAS_3_0_BOOLEAN_EXCLUSIVE]:{applyExclusiveSuppression:xa},[je.OAS_3_1_NUMERIC_EXCLUSIVE]:{applyExclusiveSuppression:id}};function sd(i,e){const n=od[e];let t=rd(i);return t=n.applyExclusiveSuppression(t,i),ad(t,i)}function Je(i){const e={data:{},visible:!1},n=Ql(i),t=typeof i.exclusiveMin=="number"?i.exclusiveMin:void 0,r=typeof i.exclusiveMax=="number"?i.exclusiveMax:void 0,a=sd(i,n),o=a in ni?{...ni[a]}:void 0;return o!=null&&o.lower&&(e.data.lower=ri(o.lower,i.min,t)),o!=null&&o.upper&&(e.data.upper=ri(o.upper,i.max,r)),e.visible=td(e.data.lower,e.data.upper),e}const Kn="0",ut="1";class cn{static isDefined(e){return e!=null}static isExclusiveActive(e){return e!==void 0&&e!==!1}static isExclusiveDiffValueActive(e){return e!==void 0&&e!==!1}static diffAdd(e){return!!e&&E(e)}static diffRemove(e){return!!e&&k(e)}static diffReplace(e){return!!e&&q(e)}static readDiffAfterValue(e){if(e&&(E(e)||q(e)))return e.afterValue}static readNumericDiffBeforeValue(e){if(!e||!(k(e)||q(e)))return;const n=e.beforeValue;return typeof n=="number"?n:void 0}static readExclusiveDiffBeforeValue(e){if(!e||!(k(e)||q(e)))return;const n=e.beforeValue;if(typeof n=="number"||typeof n=="boolean")return n}static resolveBeforeAfterLabels(e,n){const t=e.minimum,r=e.exclusiveMinimum,a=e.maximum,o=e.exclusiveMaximum,s=n.minimum,l=n.exclusiveMinimum,u=n.maximum,f=n.exclusiveMaximum,c=this.isDefined(t),g=this.isDefined(a),y=this.isDefined(s),p=this.isDefined(u),h=this.isDefined(l),b=this.isDefined(f),w=this.diffAdd(s),N=this.diffRemove(s),C=this.diffReplace(s),D=this.diffAdd(u),A=this.diffRemove(u),j=this.diffReplace(u),_=Je({min:c&&(!y||w||C)?t:void 0,max:g&&(!p||D||j)?a:void 0,exclusiveMin:this.isExclusiveActive(r)&&(!h||this.diffAdd(l)||this.diffReplace(l)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(l)))?r:void 0,exclusiveMax:this.isExclusiveActive(o)&&(!b||this.diffAdd(f)||this.diffReplace(f)&&this.isExclusiveDiffValueActive(this.readDiffAfterValue(f)))?o:void 0}).data;if(!(y||h||p||b))return{before:{..._},after:_};let O,P,W,de;if(c&&!y&&(O=t),(N||C)&&(O=this.readNumericDiffBeforeValue(s)),g&&!p&&(P=a),(A||j)&&(P=this.readNumericDiffBeforeValue(u)),this.isExclusiveActive(r)&&!h&&(W=r),this.diffReplace(l)||this.diffRemove(l)){const oe=this.readExclusiveDiffBeforeValue(l);this.isExclusiveDiffValueActive(oe)&&(W=oe)}if(this.isExclusiveActive(o)&&!b&&(de=o),this.diffReplace(f)||this.diffRemove(f)){const oe=this.readExclusiveDiffBeforeValue(f);this.isExclusiveDiffValueActive(oe)&&(de=oe)}return{before:Je({min:O,max:P,exclusiveMin:W,exclusiveMax:de}).data,after:_}}static chipTextsFromLabels(e){return[e.lower,e.upper].filter(n=>!!n)}static resolveSlotValueDiffKey(e,n){if(!n)return;const t=e==="lower"?Kn:ut;if(n[t])return t;if(e==="lower")return n.minimum?"minimum":n.exclusiveMinimum?"exclusiveMinimum":void 0;if(n.maximum)return"maximum";if(n.exclusiveMaximum)return"exclusiveMaximum"}static resolveChipDiffType(...e){for(const n of e)if(n)return n.type}static compareValueRangeChipStrings(e,n,t){if(!(e===void 0||n===t))return n===void 0&&t!==void 0?{type:e,action:L.add,afterValue:t}:n!==void 0&&t===void 0?{type:e,action:L.remove,beforeValue:n}:{type:e,action:L.replace,beforeValue:n,afterValue:t}}static classifyValueRangeWholeRowAction(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),a=!!(t.lower||t.upper),o=!!(r.lower||r.upper);if(!a&&o)return L.add;if(a&&!o)return L.remove}static buildValueRangeChipStringDiffs(e,n){const{before:t,after:r}=this.resolveBeforeAfterLabels(e,n),a=this.resolveChipDiffType(n.minimum,n.exclusiveMinimum),o=this.resolveChipDiffType(n.maximum,n.exclusiveMaximum),s={},l=this.compareValueRangeChipStrings(a,t.lower,r.lower);l&&(s[Kn]=l);const u=this.compareValueRangeChipStrings(o,t.upper,r.upper);return u&&(s[ut]=u),s}static collectChangedValueRangeChipDiffs(e,n){const t=this.buildValueRangeChipStringDiffs(e,n);return[t[Kn],t[ut]].filter(r=>r!==void 0)}static inferValueRangeBoundRangeDialect(e,n){const t={min:e.min??e.minimum,max:e.max??e.maximum,exclusiveMin:e.exclusiveMin??e.exclusiveMinimum,exclusiveMax:e.exclusiveMax??e.exclusiveMaximum};if(Va(t)===je.OAS_3_1_NUMERIC_EXCLUSIVE)return je.OAS_3_1_NUMERIC_EXCLUSIVE;for(const r of["exclusiveMinimum","exclusiveMaximum"]){const a=n[r];if(a&&(E(a)&&typeof a.afterValue=="number"||k(a)&&typeof a.beforeValue=="number"||q(a)&&(typeof a.beforeValue=="number"||typeof a.afterValue=="number")))return je.OAS_3_1_NUMERIC_EXCLUSIVE}return je.OAS_3_0_BOOLEAN_EXCLUSIVE}static isValueRangePartialSingleChipChange(e,n){if(this.classifyValueRangeWholeRowAction(e,n)!==void 0)return!1;const t=this.collectChangedValueRangeChipDiffs(e,n);if(t.length!==1)return!1;const r=t[0];return E(r)||k(r)}static isValueRangePartialBoundChange(e,n){return this.isValueRangePartialSingleChipChange(e,n)}static buildSideEntriesFromLabels(e,n,t){const r=[],a=[{slot:"lower",text:e.lower,oppositeText:t.lower},{slot:"upper",text:e.upper,oppositeText:t.upper}];for(const{slot:o,text:s,oppositeText:l}of a){if(!s)continue;const u=s!==l?this.resolveSlotValueDiffKey(o,n):void 0;r.push({text:s,valueDiffKey:u})}return r}static resolveValueRangeDiffSideEntries(e,n,t,r,a){const{before:o,after:s}=this.resolveBeforeAfterLabels(e,n),l=t===X;if(r){const c=r.data;if(E(c)||k(c)){const g=l?o:s,y=l?s:o;return this.buildSideEntriesFromLabels(g,a,y)}}const u=l?o:s,f=l?s:o;return this.buildSideEntriesFromLabels(u,a,f)}static extractValueRangeCrawlDiffs(e,n){const t=Reflect.get(e,n);return!t||typeof t!="object"?{}:{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}}static isBooleanExclusiveBoundFlagDiff(e,n){return e!=="exclusiveMinimum"&&e!=="exclusiveMaximum"?!1:typeof(E(n)?n.afterValue:k(n)?n.beforeValue:q(n)?n.beforeValue??n.afterValue:void 0)=="boolean"}static filterValueRangeSemanticSourceKeys(e,n){return e.filter(t=>{const r=n[t];return r?t==="exclusiveMinimum"||t==="exclusiveMaximum"?!this.isBooleanExclusiveBoundFlagDiff(t,r):!0:!1})}static isExclusiveBoundValue(e){return typeof e=="number"||typeof e=="boolean"}static readValueRangeBoundFields(e){if(!T(e))return{};const n={};return typeof e.minimum=="number"&&(n.minimum=e.minimum),typeof e.maximum=="number"&&(n.maximum=e.maximum),this.isExclusiveBoundValue(e.exclusiveMinimum)&&(n.exclusiveMinimum=e.exclusiveMinimum),this.isExclusiveBoundValue(e.exclusiveMaximum)&&(n.exclusiveMaximum=e.exclusiveMaximum),n}static resolveValueRangeSideInputFromNodeValue(e){const n=this.readValueRangeBoundFields(e);return{...n,min:n.minimum,max:n.maximum,exclusiveMin:n.exclusiveMinimum,exclusiveMax:n.exclusiveMaximum}}static resolveValueRangeBeforeAfterLabelsForTest(e,n){return this.resolveBeforeAfterLabels(e,n)}static resolveValueRangeChipTextsForTest(e,n,t){const{before:r,after:a}=this.resolveBeforeAfterLabels(e,n);return this.chipTextsFromLabels(t===X?r:a)}}function Be(i){return typeof i=="string"?i:JSON.stringify(i)}function Ca(i,e,n){switch(i){case ce.VALUE_LENGTH:case ce.PROPERTIES_COUNT:case ce.ITEMS_COUNT:{if(e.startsWith("min"))return Je({min:Number(n)}).data.lower??Be(n);if(e.startsWith("max"))return Je({max:Number(n)}).data.upper??Be(n);break}case ce.VALUE_RANGE:{if(e==="minimum")return Je({min:Number(n)}).data.lower??Be(n);if(e==="maximum")return Je({max:Number(n)}).data.upper??Be(n);if(e==="exclusiveMinimum")return Je({exclusiveMin:typeof n=="number"?n:!0}).data.lower??Be(n);if(e==="exclusiveMaximum")return Je({exclusiveMax:typeof n=="number"?n:!0}).data.upper??Be(n);break}case ce.VALUE_PATTERN:case ce.VALUE_MULTIPLE_OF:case ce.UNIQUE_ITEMS:return Be(n);default:return Be(n)}return Be(n)}function ld(i){return i.startsWith("min")||i==="exclusiveMinimum"}function dd(i){return i.startsWith("max")||i==="exclusiveMaximum"}function ii(i,e){return e.length<=1||ld(i)?0:dd(i)?1:0}class ud extends G{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});M(this,"ROW_PARTIAL_CHANGE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}});M(this,"TITLE_ROW_FLAG_AS_REPLACE_STYLES",{before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}})}aggregate(n,t,r,a,o){const{diffsMetaKey:s}=t,l={};if(o){const c=o.diffs[R];if(c&&(E(c.data)||k(c.data)))return l[R]={...c,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l;const g=o.descendantDiffs[r];if(g)return l[R]=g,this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l}else if(a){const c=a.diffs[R];if(c&&(E(c.data)||k(c.data)))return l[R]={...c,inherited:!0},this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l;const g=a.descendantDiffs[r];if(g)return l[R]=g,this.aggregateWholeNodeInheritedValidationRowDiffs(n,l),this.aggregateWholeNodeInheritedExtensionsDiffs(n,l),this.aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,l),l}if(!T(n)&&!Array.isArray(n))return;const u=n[s],f=G.isDiffsRecord(u)?u:void 0;if(f){const c=f[R];c&&this.aggregateTextDiff(c,R,l);const g=f.title,y=f.format,p=f.type;this.aggregateTypeLabelFieldDiffs({type:p,format:y,title:g},l);const h=f.description;if(h&&this.aggregateTextDiff(h,"description",l),!this.hasWholeNodeAddOrRemoveDiff(l))for(const w of Fn){const N=f[w];G.isDiff(N)&&this.aggregateMetaFlagDiff(N,w,l)}T(n)&&this.aggregateValidationRowDiffs(n,f,l),this.aggregateExtensionsDiffs(f,l)}return this.aggregateCustomAnnotationsDiffs(n,f??{},s,l),this.stripMetaFlagDiffsWhenWholeNode(l),this.aggregateTitleRowDiff(l),Object.keys(l).length>0?l:void 0}aggregateByDescendantDiffs(n,t,r,a){return this.aggregateNestingIndicatorRowColorizingDiff(n,t,r),this.aggregateExtensionsUniformRowColorizingDiff(n,t),this.aggregateNodeChangesSummary(n,t,a),t}aggregateNodeChangesSummary(n,t,r){const a=new Set;for(const s of Object.values(t.typeLabelFieldDiffs??{}))s!=null&&s.data&&a.add(s.data);const o=new Set;for(const s of Cs(n,r))a.has(s)||s!=null&&s.type&&o.add(s.type);o.size>0&&(t.nodeChangesSummary=o)}aggregateNestingIndicatorRowColorizingDiff(n,t,r){const a=t[R];if(a&&(E(a.data)||k(a.data))){const y=this.withNestingLevelFlags(this.buildWholeNodeInheritedRowColorizingDiff(a));t.nestingIndicatorRowColorizingDiff=y,t.extensionsRowColorizingDiff=y;return}const o=t.typeLabelFieldDiffs;if(o&&Object.keys(o).length>0){const y=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(o));if(y){const p=this.resolveTypePrimitivenessCrossing(o),h=p&&o.type?this.buildTypePrimitivenessCrossingRowColorizingDiff(o.type,p):this.asReplaceRowColorizingDiff(y);t.nestingIndicatorRowColorizingDiff={...h,flags:this.resolveTypeLabelNestingLevelFlags(o)};return}}if(!T(n))return;const s=this.collectJsonSchemaChildKeys(n);if(s.length===0)return;const l=s.map(y=>r[y]);if(l.some(y=>!y))return;const[u,...f]=l;if(!E(u.data)&&!k(u.data))return;const c=u.data.action;f.every(y=>y.data.action===c&&(E(y.data)||k(y.data)))&&(t.nestingIndicatorRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(u.data)))}aggregateExtensionsUniformRowColorizingDiff(n,t){if(t.extensionsRowColorizingDiff)return;const r=Object.values(t.extensionsDiffs??{});if(r.length===0)return;const a=T(n)?Reflect.get(n,"extensions"):void 0,o=T(a)?Object.keys(a).length:0;if(r.length!==o)return;const[s,...l]=r;if(!E(s)&&!k(s))return;const u=s.action;l.every(c=>c.action===u&&(E(c)||k(c)))&&(t.extensionsRowColorizingDiff=this.withNestingLevelFlags(this.buildChangedPropertyMetaDataFromDiff(s)))}withNestingLevelFlags(n){const{data:t}=n;return E(t)?{...n,flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}}}:k(t)?{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}}}:{...n,flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}}resolveTypeLabelNestingLevelFlags(n){const t=this.resolveTypePrimitivenessCrossing(n);return t?{before:{increaseLevel:!t.beforeIsPrimitive},after:{increaseLevel:!t.afterIsPrimitive}}:{before:{increaseLevel:!0},after:{increaseLevel:!0}}}isChildlessTypeValue(n){return Er(n)||Tl(n)}resolveTypePrimitivenessCrossing(n){var l;const t=(l=n.type)==null?void 0:l.data;if(!t||!q(t))return;const r=typeof t.beforeValue=="string"?t.beforeValue:void 0,a=typeof t.afterValue=="string"?t.afterValue:void 0,o=this.isChildlessTypeValue(r),s=this.isChildlessTypeValue(a);if(o!==s)return{beforeIsPrimitive:o,afterIsPrimitive:s}}buildTypePrimitivenessCrossingRowColorizingDiff(n,t){const{data:r}=n;return q(r)?t.afterIsPrimitive?this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:r.beforeDeclarationPaths}):this.buildChangedPropertyMetaDataFromDiff({type:r.type,scope:r.scope,description:r.description,action:L.add,afterValue:!0,afterDeclarationPaths:r.afterDeclarationPaths}):this.asReplaceRowColorizingDiff(n)}collectJsonSchemaChildKeys(n){const t=[],r=Reflect.get(n,"properties");T(r)&&t.push(...Object.keys(r));const a=Reflect.get(n,"patternProperties");T(a)&&t.push(...Object.keys(a));const o=Reflect.get(n,"items");Array.isArray(o)?o.forEach((u,f)=>t.push(String(f))):o!=null&&t.push("items");const s=Reflect.get(n,"additionalProperties");s!=null&&t.push("additionalProperties");const l=Reflect.get(n,"additionalItems");return l!=null&&t.push("additionalItems"),t}aggregateTextDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(n)}aggregateMetaFlagDiff(n,t,r){r[t]=this.buildChangedPropertyMetaDataFromDiff(this.normalizeBooleanFlagDiffReplace(n))}normalizeBooleanFlagDiffReplace(n){return!q(n)||typeof n.afterValue!="boolean"?n:n.afterValue?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}}aggregateTypeLabelFieldDiffs(n,t){const r={};for(const a of Ea){const o=n[a];G.isDiff(o)&&(r[a]=this.buildTypeLabelFieldDiffMetadata(o))}Object.keys(r).length>0&&(t.typeLabelFieldDiffs=r)}aggregateTitleRowDiff(n){const t=n[R];if(t&&(E(t.data)||k(t.data))){n[sn]=t;return}for(const r of Fn){const a=n[r];if(a){n[sn]=this.asReplaceFlagDiffForTitleRow(a);return}}this.aggregateTypeLabelTitleRowDiff(n)}aggregateTypeLabelTitleRowDiff(n){const t=n.typeLabelFieldDiffs;if(!t||Object.keys(t).length===0)return;const r=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(t));r&&(n[sn]=this.asReplaceRowColorizingDiff(r))}buildTypeLabelFieldDiffMetadata(n){return q(n)?this.buildChipReplaceDiffMetadata(n,{textHighlighterColor:S.Yellow}):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{textHighlighterColor:S.Green},removeBefore:{textHighlighterColor:S.Red}})}buildChangedPropertyMetaDataFromDiff(n){let t=this.DEFAULT_DIFF_STYLES,r=this.DEFAULT_DIFF_STYLES;return E(n)&&(t={...t,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},r={...r,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Green}),k(n)&&(t={...t,isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Red},r={...r,isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}),(Ye(n)||q(n))&&(t={...t,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},r={...r,isContentVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}),{data:n,styles:{before:t,after:r},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}asReplaceRowColorizingDiff(n){const{data:t}=n;return q(t)?{...n,styles:this.ROW_PARTIAL_CHANGE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.ROW_PARTIAL_CHANGE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:"replace",beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.ROW_PARTIAL_CHANGE_STYLES}:n}buildChipAddRemoveDiffMetadata(n,t){return E(n)?{data:n,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.addAfter}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}:k(n)?{data:n,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,...t==null?void 0:t.removeBefore},after:{isContentVisible:!1,isHeaderVisible:!0}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}:this.buildChangedPropertyMetaDataFromDiff(n)}buildChipReplaceDiffMetadata(n,t){const r=this.buildChangedPropertyMetaDataFromDiff(n);return{...r,styles:{before:{...r.styles.before,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor},after:{...r.styles.after,backgroundColor:void 0,textHighlighterColor:t.textHighlighterColor,borderShadowColor:t.borderShadowColor}}}}buildBooleanAwareChipReplaceDiffMetadata(n){const t=this.buildChangedPropertyMetaDataFromDiff(n),r=typeof n.beforeValue=="boolean",a=typeof n.afterValue=="boolean";return{...t,styles:{before:{...t.styles.before,backgroundColor:void 0,textHighlighterColor:r?void 0:S.Yellow,borderShadowColor:r?S.Yellow:void 0},after:{...t.styles.after,backgroundColor:void 0,textHighlighterColor:a?void 0:S.Yellow,borderShadowColor:a?S.Yellow:void 0}}}}buildWholeNodeInheritedRowColorizingDiff(n){const{data:t}=n;return E(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:L.add,afterValue:!0,afterDeclarationPaths:t.afterDeclarationPaths??[]}):k(t)?this.buildChangedPropertyMetaDataFromDiff({type:t.type,scope:t.scope,description:t.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:t.beforeDeclarationPaths??[]}):n}hasWholeNodeAddOrRemoveDiff(n){const t=n[R];return!!t&&(E(t.data)||k(t.data))}stripMetaFlagDiffsWhenWholeNode(n){if(this.hasWholeNodeAddOrRemoveDiff(n))for(const t of Fn)delete n[t]}asReplaceFlagDiffForTitleRow(n){const{data:t}=n;return q(t)?{...n,styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:E(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:L.replace,beforeValue:!1,afterValue:t.afterValue??!0,beforeDeclarationPaths:[],afterDeclarationPaths:t.afterDeclarationPaths},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:k(t)?{...n,data:{type:t.type,scope:t.scope,description:t.description,action:L.replace,beforeValue:t.beforeValue??!0,afterValue:!1,beforeDeclarationPaths:t.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:this.TITLE_ROW_FLAG_AS_REPLACE_STYLES}:n}aggregateWholeNodeInheritedValidationRowDiffs(n,t){const r=t[R];if(!(!r||!(E(r.data)||k(r.data)))&&T(n))for(const[a,o]of Object.entries(ar)){const s=a;o.some(u=>Reflect.get(n,u)!==void 0)&&(t.validationRowColorizingDiffs??(t.validationRowColorizingDiffs={}),t.validationRowColorizingDiffs[s]||(t.validationRowColorizingDiffs[s]=this.buildWholeNodeInheritedRowColorizingDiff(r)))}}aggregateWholeNodeInheritedExtensionsDiffs(n,t){const r=t[R];if(!r||!(E(r.data)||k(r.data))||!T(n))return;const a=Reflect.get(n,"extensions");if(!T(a))return;const o=Object.keys(a).filter(pt);if(o.length===0)return;const{data:s}=r,l=a,u={};if(E(s))for(const f of o)u[f]={type:s.type,scope:s.scope,description:s.description,action:L.add,afterValue:l[f],afterDeclarationPaths:s.afterDeclarationPaths??[]};else if(k(s))for(const f of o)u[f]={type:s.type,scope:s.scope,description:s.description,action:L.remove,beforeValue:l[f],beforeDeclarationPaths:s.beforeDeclarationPaths??[]};t.extensionsDiffs=u}aggregateExtensionsDiffs(n,t){const r={};for(const[a,o]of Object.entries(n))!pt(a)||!G.isDiff(o)||(r[a]=o);Object.keys(r).length>0&&(t.extensionsDiffs=r)}aggregateCustomAnnotationsDiffs(n,t,r,a){const o={},s={},l=(y,p)=>{if(q(p)){const b=this.buildBooleanAwareChipReplaceDiffMetadata(p);o[y]=b,s[y]=this.asReplaceRowColorizingDiff(b);return}const h=this.buildChangedPropertyMetaDataFromDiff(p);o[y]=h,s[y]=h},u=t.customAnnotations;if(G.isDiff(u)){const{type:y,scope:p,description:h}=u;if(E(u)&&T(u.afterValue))for(const[b,w]of Object.entries(u.afterValue))l(b,{type:y,scope:p,description:h,action:L.add,afterValue:w==null?void 0:w.value,afterDeclarationPaths:u.afterDeclarationPaths??[]});else if(k(u)&&T(u.beforeValue))for(const[b,w]of Object.entries(u.beforeValue))l(b,{type:y,scope:p,description:h,action:L.remove,beforeValue:w==null?void 0:w.value,beforeDeclarationPaths:u.beforeDeclarationPaths??[]});this.assignCustomAnnotationDiffs(a,o,s);return}if(!T(n))return;const f=Reflect.get(n,"customAnnotations");if(!T(f))return;const c=Reflect.get(f,r),g=G.isDiffsRecord(c)?c:{};for(const y of Object.keys(f)){const p=g[y];if(G.isDiff(p)){l(y,p);continue}const h=Reflect.get(f,y);if(!T(h))continue;const b=Reflect.get(h,r),w=G.isDiffsRecord(b)?b.value:void 0;G.isDiff(w)&&l(y,w)}this.assignCustomAnnotationDiffs(a,o,s)}assignCustomAnnotationDiffs(n,t,r){Object.keys(t).length>0&&(n.customAnnotationDiffs=t),Object.keys(r).length>0&&(n.customAnnotationRowColorizingDiffs=r)}aggregateWholeNodeInheritedCustomAnnotationsDiffs(n,t){var f,c;const r=t[R];if(!r||!(E(r.data)||k(r.data))||!T(n))return;const a=Reflect.get(n,"customAnnotations");if(!T(a))return;const o=Object.keys(a);if(o.length===0)return;const{data:s}=r,l=a,u={};if(E(s))for(const g of o)u[g]=this.buildChangedPropertyMetaDataFromDiff({type:s.type,scope:s.scope,description:s.description,action:L.add,afterValue:(f=l[g])==null?void 0:f.value,afterDeclarationPaths:s.afterDeclarationPaths??[]});else if(k(s))for(const g of o)u[g]=this.buildChangedPropertyMetaDataFromDiff({type:s.type,scope:s.scope,description:s.description,action:L.remove,beforeValue:(c=l[g])==null?void 0:c.value,beforeDeclarationPaths:s.beforeDeclarationPaths??[]});Object.keys(u).length>0&&(t.customAnnotationDiffs=u,t.customAnnotationRowColorizingDiffs=u)}aggregateValidationRowDiffs(n,t,r){for(const[a,o]of Object.entries(ar)){const s=o.filter(D=>t[D]);if(s.length===0)continue;const l=a,u=l===ce.VALUE_RANGE?{minimum:t.minimum,exclusiveMinimum:t.exclusiveMinimum,maximum:t.maximum,exclusiveMaximum:t.exclusiveMaximum}:void 0;u&&(r.valueRangeCrawlDiffs=u);const f=l===ce.VALUE_RANGE?cn.filterValueRangeSemanticSourceKeys(s,t):s,c=s.map(D=>t[D]).filter(D=>G.isDiff(D));if(c.length===0)continue;r.validationRowColorizingDiffs??(r.validationRowColorizingDiffs={});const g=cn.resolveValueRangeSideInputFromNodeValue(n),y=u?cn.classifyValueRangeWholeRowAction(g,u):void 0;if(u&&(y===L.add||y===L.remove)){const D=y===L.add?this.mergeDiffActionFragment(c,L.add,this.resolveWholeRowDisplayValues(l,s,c,L.add)):this.mergeDiffActionFragment(c,L.remove,this.resolveWholeRowDisplayValues(l,s,c,L.remove)),A=this.buildChangedPropertyMetaDataFromDiff(D);r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=A,r.validationRowColorizingDiffs[l]=A;continue}if(u&&cn.isValueRangePartialBoundChange(g,u)){this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l);continue}const p=o.some(D=>!s.includes(D)&&Reflect.get(n,D)!==void 0),h=!p&&c.every(E),b=!p&&c.every(k);if(h){const D=this.resolveWholeRowDisplayValues(l,s,c,L.add),A=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(c,L.add,D));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=A,r.validationRowColorizingDiffs[l]=A;continue}if(b){const D=this.resolveWholeRowDisplayValues(l,s,c,L.remove),A=this.buildChangedPropertyMetaDataFromDiff(this.mergeDiffActionFragment(c,L.remove,D));r.validationRowDiffs??(r.validationRowDiffs={}),r.validationRowDiffs[l]=A,r.validationRowColorizingDiffs[l]=A;continue}if(f.length===0){u&&(this.mergeValueRangeLabelChipDiffs(n,u,r,l),this.applyValueRangeFormattingRowColorizingDiff(s,t,r,l));continue}const w=f.map(D=>t[D]).filter(D=>G.isDiff(D)).map(D=>this.buildChangedPropertyMetaDataFromDiff(D)),N=fe.maxChangedPropertyMetaDataByDiffType(...w);if(!N)continue;const C=this.buildValidationRowValueDiffs(l,f,t);r.validationRowValueDiffs??(r.validationRowValueDiffs={}),r.validationRowValueDiffs[l]=C,r.validationRowColorizingDiffs[l]=this.asReplaceRowColorizingDiff(N),u&&this.mergeValueRangeLabelChipDiffs(n,u,r,l)}}mergeValueRangeLabelChipDiffs(n,t,r,a){const o=cn.buildValueRangeChipStringDiffs(cn.resolveValueRangeSideInputFromNodeValue(n),t),s=[Kn,ut];if(!s.some(c=>o[c]))return;r.validationRowValueDiffs??(r.validationRowValueDiffs={});const f={...r.validationRowValueDiffs[a]??{}};for(const c of s){const g=o[c];if(!g||f[c])continue;const y=c===Kn?"lower":"upper",p=this.attachValueRangeChipDiffPaths(g,y,t);f[c]=this.buildValueRangeLabelChipDiffMetadata(p)}r.validationRowValueDiffs[a]=f}applyValueRangeFormattingRowColorizingDiff(n,t,r,a){var f;const o=(f=r.validationRowValueDiffs)==null?void 0:f[a];if(!o||!Object.values(o).some(c=>c!==void 0))return;const s=n.map(c=>t[c]).filter(c=>G.isDiff(c));if(s.length===0)return;const l=s.map(c=>this.buildChangedPropertyMetaDataFromDiff(c)),u=fe.maxChangedPropertyMetaDataByDiffType(...l);u&&(r.validationRowColorizingDiffs[a]=this.asReplaceRowColorizingDiff(u))}attachValueRangeChipDiffPaths(n,t,r){const a=t==="lower"?[r.minimum,r.exclusiveMinimum]:[r.maximum,r.exclusiveMaximum],o=[],s=[];for(const l of a)l&&("beforeDeclarationPaths"in l&&l.beforeDeclarationPaths&&o.push(...l.beforeDeclarationPaths),"afterDeclarationPaths"in l&&l.afterDeclarationPaths&&s.push(...l.afterDeclarationPaths));return{...n,...o.length>0?{beforeDeclarationPaths:o}:{},...s.length>0?{afterDeclarationPaths:s}:{}}}buildValueRangeLabelChipDiffMetadata(n){return q(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:S.Green},removeBefore:{borderShadowColor:S.Red,isFontMuted:!0}})}buildValidationRowValueDiffs(n,t,r){const a=bs[n],o={};for(const s of t){const l=r[s];if(!G.isDiff(l)||a[s]===void 0)continue;const f=this.buildListValueDiffMetadata(l);o[s]=fe.maxChangedPropertyMetaDataByDiffType(o[s],f)??f}return o}resolveWholeRowDisplayValues(n,t,r,a){const o=[];return t.forEach((s,l)=>{const u=r[l],f=a===L.add?E(u)?u.afterValue:void 0:k(u)?u.beforeValue:void 0;f!==void 0&&o.push(Ca(n,s,f))}),o}mergeDiffActionFragment(n,t,r){const a=n[0],o=n.flatMap(l=>k(l)||q(l)?l.beforeDeclarationPaths:[]),s=n.flatMap(l=>E(l)||q(l)?l.afterDeclarationPaths:[]);return t===L.add?{type:a.type,scope:a.scope,description:a.description,action:L.add,afterValue:r,afterDeclarationPaths:s}:{type:a.type,scope:a.scope,description:a.description,action:L.remove,beforeValue:r,beforeDeclarationPaths:o}}buildListValueDiffMetadata(n){return q(n)?this.buildBooleanAwareChipReplaceDiffMetadata(n):this.buildChipAddRemoveDiffMetadata(n,{addAfter:{borderShadowColor:S.Green},removeBefore:{borderShadowColor:S.Red,isFontMuted:!0}})}}class fd extends ud{aggregate(e,n,t,r,a){const o=super.aggregate(e,n,t,r,a);if(!T(e))return o;const{diffsMetaKey:s}=n,l=Reflect.get(e,s),u=G.isDiffsRecord(l),f=this.resolveWholeListFieldDiff(e,"enum",s),c=this.resolveWholeListFieldDiff(e,"examples",s),g=this.resolveListFieldItemDiffs(e,"enum",s),y=this.resolveListFieldItemDiffs(e,"examples",s),p=this.resolveAllowedAdditionalPropertyNamesDiff(t,r,s),h=!!f||!!c||Object.keys(g).length>0||Object.keys(y).length>0||!!p;if(!o&&!u&&!h){const w=this.resolveRequiredMetaDiff(t,r,s);if(!w)return;const N={required:w};return this.aggregatePropertyTitleRowDiff(N),N}const b={...o??{}};if(u){const w=l.default;G.isDiff(w)&&(b.default=this.buildDefaultValueDiffMetadata(w))}if(f&&(b.enumDiff=f),Object.keys(g).length>0&&(b.enumValueDiffs=g),c&&(b.examplesDiff=c),Object.keys(y).length>0&&(b.examplesValueDiffs=y),p!=null&&p.diff&&(b.allowedAdditionalPropertyNamesDiff=p.diff),Object.keys((p==null?void 0:p.valueDiffs)??{}).length>0&&(b.allowedAdditionalPropertyNamesValueDiffs=p.valueDiffs),this.aggregateEnumRowColorizingDiff(e,b),this.aggregateExamplesRowColorizingDiff(e,b),this.aggregateDefaultRowColorizingDiff(e,b),this.aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(p==null?void 0:p.mergedValues,b),this.hasWholeNodeAddOrRemoveDiff(b))delete b.required;else{const w=this.resolveRequiredMetaDiff(t,r,s);w&&(b.required=w)}return this.stripMetaFlagDiffsWhenWholeNode(b),this.aggregatePropertyTitleRowDiff(b),Object.keys(b).length>0?b:void 0}aggregatePropertyTitleRowDiff(e){const n=e[R];if(n&&(E(n.data)||k(n.data))){e[sn]=n;return}for(const r of Fn){const a=e[r];if(a){e[sn]=this.asReplaceFlagDiffForTitleRow(a);return}}const t=e.required;if(t){e[sn]=this.asReplaceFlagDiffForTitleRow(t);return}this.aggregateTypeLabelTitleRowDiff(e)}stripMetaFlagDiffsWhenWholeNode(e){super.stripMetaFlagDiffsWhenWholeNode(e),this.hasWholeNodeAddOrRemoveDiff(e)&&delete e.required}resolveRequiredMetaDiff(e,n,t){var c;if(!n||typeof e!="string"||!e)return;const r=n.value(),a=(c=n.meta())==null?void 0:c._fragment;if(!T(a)&&!T(r))return;const o=String(e),s=T(a)?Reflect.get(a,t):void 0,l=T(a)?Reflect.get(a,"required"):void 0,u=T(r)&&"required"in r?r.required:void 0,f=Array.isArray(l)?l:Array.isArray(u)?u:void 0;if(G.isDiffsRecord(s)){const g=s.required;if(G.isDiff(g)){const y=this.resolveRequiredMetaDiffFromWholeArrayDiff(g,o);if(y)return y}if(G.isDiffsRecord(g)){const y=this.resolveRequiredMetaDiffFromIndexedDiffsRecord(g,o,f);if(y)return y}}if(Array.isArray(f)){const g=this.resolveRequiredMetaDiffFromArrayAttachedDiffs(f,t,o);if(g)return g}}resolveRequiredMetaDiffFromWholeArrayDiff(e,n){if(E(e)&&Array.isArray(e.afterValue)&&e.afterValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(k(e)&&Array.isArray(e.beforeValue)&&e.beforeValue.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e);if(q(e)){const t=Array.isArray(e.beforeValue)?e.beforeValue:[],r=Array.isArray(e.afterValue)?e.afterValue:[];if(t.includes(n)!==r.includes(n))return this.buildChangedPropertyMetaDataFromDiff(e)}}resolveRequiredMetaDiffFromIndexedDiffsRecord(e,n,t){if(Array.isArray(t)){const r=t.indexOf(n);if(r>=0){const a=e[String(r)];if(G.isDiff(a))return this.buildChangedPropertyMetaDataFromDiff(a)}}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n)}resolveRequiredMetaDiffFromArrayAttachedDiffs(e,n,t){const r=Reflect.get(e,n);if(!G.isDiffsRecord(r))return;const a=e.indexOf(t);if(a>=0){const o=r[String(a)];if(G.isDiff(o))return this.buildChangedPropertyMetaDataFromDiff(o)}return this.resolveRequiredMetaDiffFromPropertyKeyDiffs(r,t)}resolveRequiredMetaDiffFromPropertyKeyDiffs(e,n){for(const t of Object.values(e))if(G.isDiff(t)){if(E(t)&&t.afterValue===n)return this.buildChangedPropertyMetaDataFromDiff(t);if(k(t)&&t.beforeValue===n)return this.buildChangedPropertyMetaDataFromDiff(t)}}buildDefaultValueDiffMetadata(e){return q(e)?this.buildBooleanAwareChipReplaceDiffMetadata(e):this.buildChangedPropertyMetaDataFromDiff(e)}resolveWholeListFieldDiff(e,n,t){const r=Reflect.get(e,t);if(!G.isDiffsRecord(r))return;const a=r[n];if(G.isDiff(a)){if(E(a)&&Array.isArray(a.afterValue))return this.buildChangedPropertyMetaDataFromDiff(a);if(k(a)&&Array.isArray(a.beforeValue))return this.buildChangedPropertyMetaDataFromDiff(a)}}resolveListFieldItemDiffs(e,n,t){const r={},a=Reflect.get(e,n);if(!Array.isArray(a))return r;const o=Reflect.get(a,t);return G.isDiffsRecord(o)&&this.collectListItemDiffsFromDiffsRecord(o,r),r}collectListItemDiffsFromDiffsRecord(e,n){for(const[t,r]of Object.entries(e))!r||n[t]||(n[t]=this.buildListValueDiffMetadata(r))}resolveAllowedAdditionalPropertyNamesDiff(e,n,t){var c;if(e!==Y.ADDITIONAL_PROPERTIES||!n)return;const r=(c=n.meta())==null?void 0:c._fragment;if(!T(r))return;const a=Reflect.get(r,"propertyNames"),o=Reflect.get(r,t),s=G.isDiffsRecord(o)?o.propertyNames:void 0;if(G.isDiff(s)){const g=this.resolveAllowedAdditionalPropertyNamesWholeFieldDiff(s);if(g)return g}if(!T(a))return;const l=Reflect.get(a,"enum");if(!Array.isArray(l)||l.length===0)return;const u=this.resolveWholeListFieldDiff(a,"enum",t),f=this.resolveListFieldItemDiffs(a,"enum",t);if(!(!u&&Object.keys(f).length===0))return{diff:u,valueDiffs:Object.keys(f).length>0?f:void 0,mergedValues:l}}resolveAllowedAdditionalPropertyNamesWholeFieldDiff(e){if(E(e)&&T(e.afterValue)){const n=Reflect.get(e.afterValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}if(k(e)&&T(e.beforeValue)){const n=Reflect.get(e.beforeValue,"enum");if(Array.isArray(n)&&n.length>0)return{diff:this.buildChangedPropertyMetaDataFromDiff(e),mergedValues:n}}}aggregateEnumRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"enum"),n,"enumDiff","enumValueDiffs","enumRowColorizingDiff")}aggregateExamplesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(Reflect.get(e,"examples"),n,"examplesDiff","examplesValueDiffs","examplesRowColorizingDiff")}aggregateAllowedAdditionalPropertyNamesRowColorizingDiff(e,n){this.aggregateListRowColorizingDiff(e,n,"allowedAdditionalPropertyNamesDiff","allowedAdditionalPropertyNamesValueDiffs","allowedAdditionalPropertyNamesRowColorizingDiff")}aggregateListRowColorizingDiff(e,n,t,r,a){if(!Array.isArray(e)||e.length===0)return;const o=n[R];if(o&&(E(o.data)||k(o.data))){n[a]=this.buildWholeNodeInheritedRowColorizingDiff(o);return}const s=n[t];if(s){n[a]=s;return}const l=n[r];if(!l||Object.keys(l).length===0)return;const u=Object.values(l);if(u.length===e.length){const[c,...g]=u;if((E(c.data)||k(c.data))&&g.every(y=>y.data.action===c.data.action)){n[a]=this.buildChangedPropertyMetaDataFromDiff(c.data);for(const y of Object.keys(l)){const p=l[y];p&&(l[y]=this.buildChipAddRemoveDiffMetadata(p.data))}return}}const f=fe.maxChangedPropertyMetaDataByDiffType(...Object.values(l));f&&(n[a]=this.asReplaceRowColorizingDiff(f))}aggregateDefaultRowColorizingDiff(e,n){const t=Reflect.get(e,"default"),r=t!=null,a=n[R];if(a&&(E(a.data)||k(a.data))){(r||n.default)&&(n.defaultRowColorizingDiff=this.buildWholeNodeInheritedRowColorizingDiff(a));return}const o=n.default;if(!o)return;const s=o.data;if(E(s)||k(s)){n.defaultRowColorizingDiff=this.buildChangedPropertyMetaDataFromDiff(s);return}q(s)&&(n.defaultRowColorizingDiff=this.asReplaceRowColorizingDiff(o))}}class lr{static instance(e){return this.kindPropertyInstance}}M(lr,"kindPropertyInstance",new fd);const cd="[JSON Schema][WithDiffs]";class md extends wa{constructor(n){super(n);M(this,"diffsMetaKeys");this.diffsMetaKeys=n.diffsMetaKeys}build(){return super.build(),this.tree}get logPrefix(){return cd}createTree(){return new Fl}createNodeDataBuilder(){return new Gl((n,t)=>this.pick(n,t))}prepareSource(){return new Kl(this.logger,this.diffsMetaKeys).transformSourceToSchemaWithDiffs(this.source)}createNodeFromRaw(n,t,r,a,o){const s=super.createNodeFromRaw(n,t,r,a,o);return!s||!ve(s)||this.assignNodeDiffs(s,r,o),s}createNodeDiffs(n,t,r){if(!this.isJsonSchemaTreeNodeKind(t))return;const a=this.takeTreeNodeWithDiffs(r.parent),o=this.takeComplexTreeNodeWithDiffs(r.container);return lr.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isJsonSchemaTreeNodeKind(n))return Ta.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isJsonSchemaTreeNodeKind(n))return ka.instance(n).aggregate(t.value,this.diffsMetaKeys)}updateNodeDiffsByDescendantDiffs(n,t,r,a){if(this.isJsonSchemaTreeNodeKind(n)&&t!=null)return lr.instance(n).aggregateByDescendantDiffs(t,r,a,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isJsonSchemaTreeNodeKind(n)&&r)return Na.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isJsonSchemaTreeNodeKind(n)&&t)return Aa.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s),this.updateNodeDiffsByDescendantDiffs(t,r.value,n.diffs,n.descendantDiffs);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Sr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u)}isJsonSchemaTreeNodeKind(n){return Da.some(t=>t===n)}takeTreeNodeWithDiffs(n){return n&&ve(n)?n:void 0}takeComplexTreeNodeWithDiffs(n){const t=this.takeTreeNodeWithDiffs(n);return t&&this.isComplexTreeNode(t)?t:void 0}}function Ut(i){return!!i&&Object.keys(i).length>0}function ai(i){return!!i&&i.size>0}function yd(i){const e=new Set;for(const n of Object.values(i.diffs))n&&e.add(n.data.type);for(const n of Object.values(i.descendantDiffs))n&&e.add(n.data.type);for(const n of i.diffsSummary)e.add(n);for(const n of i.descendantDiffsSummary)e.add(n);for(const n of Object.values(i.diffsSeverities))n&&e.add(n.type);return e}function oi(i,e){if(!(Ut(i.diffs)||Ut(i.descendantDiffs)||ai(i.diffsSummary)||ai(i.descendantDiffsSummary)||Ut(i.diffsSeverities)))return!1;if(!(e!=null&&e.diffTypes))return!0;const t=yd(i);for(const r of t)if(e.diffTypes.has(r))return!0;return!1}function dr(i,e,n){if(i.isCycle)return oi(i,e);if(n.visiting.has(i.id))return!1;n.visiting.add(i.id);try{return oi(i,e)?!0:i.type===le.COMPLEX?i.nestedNodes().some(t=>dr(t,e,n)):i.childrenNodes().some(t=>dr(t,e,n))}finally{n.visiting.delete(i.id)}}function Ra(i,e){return dr(i,e,{visiting:new Set})}function gd(i,e,n){if(!n){const o=i.map(()=>({visible:!0})),s=i.map((l,u)=>({kind:"node",node:l,sourceIndex:u}));return{memberships:o,visibleSequence:s}}const t=[],r=[];let a=0;for(;a<i.length;){if(e(i[a])){t.push({visible:!0}),r.push({kind:"node",node:i[a],sourceIndex:a}),a++;continue}const o=a;for(;a<i.length&&!e(i[a]);)a++;const s=i[o].id,l=a-o;for(let u=o;u<a;u++)t.push({visible:!1,unchangedBlockId:s,isBlockStart:u===o,blockSize:l});r.push({kind:"placeholder",unchangedBlockId:s,blockSize:l,sourceIndex:o})}return{memberships:t,visibleSequence:r}}function pd(i,e){const n=(e==null?void 0:e.hideUnchangedNodes)!==!1,t=e!=null&&e.diffTypes?{diffTypes:e.diffTypes}:void 0;return gd(i,r=>Ra(r,t),n)}function Ma(i){return i.kind===v.MESSAGE}function hd(i){return i.kind===v.MESSAGE_SECTION_SELECTOR}function _a(i){return i.kind===v.MESSAGE_CONTENT}function bd(i){return i.kind===v.MESSAGE_HEADERS&&i.key==="headers"}function Dd(i){return i.kind===v.MESSAGE_PAYLOAD&&i.key==="payload"}function qa(i){return i.kind===v.MESSAGE_CHANNEL}function vd(i){return i.kind===v.MESSAGE_CHANNEL_PARAMETERS}function Ha(i){return i.kind===v.MESSAGE_OPERATION}function Ar(i){return i.kind===v.EXTENSIONS}function Tt(i){return i.kind===v.BINDINGS}function Wt(i){return i.kind===v.BINDING}function Sd(i){return _a(i)||qa(i)||Ha(i)}function wd(i){return i.kind===v.SERVERS}function Nd(i){return i.kind===v.SERVER}function Me(i,e,n){var r;if(!T(i))return!1;if(!e)return(i==null?void 0:i[n])!==void 0;const t=(r=e[n])==null?void 0:r.data;return t?k(t)?t.beforeValue!==void 0:E(t)?t.afterValue!==void 0:q(t)?t.beforeValue!==void 0||t.afterValue!==void 0:Ye(t)?t.beforeKey!==void 0||t.afterKey!==void 0:!1:(i==null?void 0:i[n])!==void 0}function Re(i,e,n){return!!i&&(n===void 0||(Array.isArray(n)?n.includes(i.kind):i.kind===n))&&i instanceof e}function kd(i){return Re(i,Rs,v.BINDINGS)}function Yt(i){return Re(i,Ce,v.BINDING)}function Ed(i){return Re(i,Ce)}function Ad(i){return Re(i,Ce,v.MESSAGE_CHANNEL)}function Td(i){return Re(i,Ce)}function dt(i){return Re(i,Ce,v.SERVER)}function Vd(i){return Re(i,Ce)}function xd(i){return Re(i,Ce,v.MESSAGE_HEADERS)}function Cd(i){return Re(i,Ce,v.MESSAGE_PAYLOAD)}function Rd(i){return Re(i,Ce,v.MESSAGE)}function Md(i){return Re(i,Ce,v.MESSAGE_OPERATION)}function _d(i){return Re(i,Ce,v.MESSAGE_SECTION_SELECTOR)}function qd(i){return Re(i,Ce,[v.MESSAGE_CONTENT,v.MESSAGE_CHANNEL,v.MESSAGE_OPERATION])}const Oa=i=>{const e=qe(),{diff:n,descendantDiffs:t,diffsSeverities:r}=i,a=m.useMemo(()=>r==null?void 0:r["address-row"],[r]),o=m.useMemo(()=>n==null?void 0:n.data.type,[n]),s=m.useMemo(()=>Wn(a==null?void 0:a.causedAt),[a]);switch(e){case _e:return d.jsx(_n,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(pn,{left:d.jsx(zt,{...i,layoutSide:X}),right:d.jsx(zt,{...i,layoutSide:ae})})});default:return d.jsx(gn,{content:d.jsx(zt,{...i,layoutSide:ae})})}},Hd={send:"bg-sky-400",receive:"bg-green-500"},zt=i=>{const{action:e,address:n,layoutSide:t,diff:r}=i,{[te]:a}=i,o=m.useCallback(()=>{const l=r&&Od(r);let u=d.jsx("div",{className:`font-bold px-1 py-0 ${Hd[e]} text-white rounded-md`,children:e.toUpperCase()});if(r&&(E(r.data)&&t===X&&(u=null),k(r.data)&&t===ae&&(u=null)),!l)return d.jsxs(d.Fragment,{children:[u,d.jsx(Jt,{value:n,variant:K.h4,layoutSide:t,diff:r,textFontWeight:"normal",textColor:"#626D82"})]});const{prefix:f,beforeSuffix:c,afterSuffix:g,diff:y}=l,p=t===X?c:g;return d.jsxs(d.Fragment,{children:[u,d.jsxs("div",{className:"flex flex-row",children:[d.jsx(Jt,{value:f,variant:K.h4,layoutSide:t,textFontWeight:"normal",textColor:"#626D82"}),d.jsx(Jt,{value:p,variant:K.h4,layoutSide:t,diff:y,textFontWeight:"normal",textColor:"#626D82"})]})]})},[e,n,r,t]),s=m.useMemo(()=>{const l=new Set;if(r){const{styles:u}=r;t===X?l.add(ne.background(u.before.backgroundColor)):l.add(ne.background(u.after.backgroundColor))}return Array.from(l)},[r,t]);return d.jsx("div",{"data-precededby":a,className:`address-row address-row-content font-Inter-Medium flex w-full h-full ${Yn} ${s.join(" ")}`,children:d.jsx("div",{className:"flex flex-row items-center w-max py-2 bg-slate-100 rounded-md gap-3",style:{paddingLeft:10,paddingRight:10},children:o()})})};function Od(i){const{data:e}=i;if(!q(e))return!1;const{beforeValue:n,afterValue:t}=e;if(typeof n!="string"||typeof t!="string")return!1;const r=n.indexOf("{"),a=t.indexOf("{"),o=r===-1?n:n.slice(0,r),s=a===-1?t:t.slice(0,a);if(o!==s)return!1;const l={...e,beforeValue:n.replace(o,""),afterValue:t.replace(o,"")};return{prefix:o,beforeSuffix:r===-1?"":n.slice(r),afterSuffix:a===-1?"":t.slice(a),diff:{...i,data:l}}}Oa.__docgenInfo={description:"",methods:[],displayName:"AddressRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},action:{required:!0,tsType:{name:"string"},description:""},address:{required:!0,tsType:{name:"string"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Pd=m.memo(i=>i.mergedSource===null?null:d.jsx(Vn,{fallback:d.jsx(xn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Id,{...i})})),Id=m.memo(i=>{const{mergedSource:e,operationKeys:n,displayMode:t=Mn,devMode:r=!1,noHeading:a=!1,referenceNamePropertyKey:o,diffMetaKeys:s,diffTypes:l}=i,u=m.useMemo(()=>Ke(r),[r]),f=m.useMemo(()=>new bl({source:e,referenceNamePropertyKey:o,diffsMetaKeys:s,operationKeys:n,logger:u}),[e,o,s,n,u]),c=m.useMemo(()=>(f==null?void 0:f.build())??null,[f]);u.debug("[AsyncAPI Diffs] Original Source:",e),u.debug("[AsyncAPI Diffs] Tree:",c);const g=c==null?void 0:c.root;return!g||!Ma(g)?null:d.jsx(wr.Provider,{value:s,children:d.jsx(Nr.Provider,{value:l,children:d.jsx(Zi.Provider,{value:r,children:d.jsx(Cn.Provider,{value:t,children:d.jsx(Rn.Provider,{value:_e,children:d.jsx(He.Provider,{value:0,children:d.jsx(zr,{node:g,noHeading:a})})})})})})})});Pd.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationDiffsViewer",props:{mergedSource:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""},diffMetaKeys:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""}}};const Tr=m.createContext(void 0);function Vr(){return m.useContext(Tr)}const En={suppressRootNestingIndicator:!0},Qe=m.memo(i=>{const{beforeLevel:e,afterLevel:n,children:t}=i,[r,a]=m.useState(0),[o,s]=m.useState(0);m.useEffect(()=>{a(e),s(n)},[e,n]);const l=m.useMemo(()=>({beforeLevel:r,afterLevel:o}),[r,o]);return d.jsx(Ds.Provider,{value:l,children:t})});Qe.__docgenInfo={description:"",methods:[],displayName:"AsyncLevelContextProvider",props:{beforeLevel:{required:!0,tsType:{name:"number"},description:""},afterLevel:{required:!0,tsType:{name:"number"},description:""}}};function Pa(i){let e;for(const n of i){const t=n.diffs[""];if(!t)return!1;if(!e){e=t.data.action;continue}if(e!==t.data.action)return!1}return!0}class Ld extends Dr{constructor(){super()}}const Vt={PROPERTY:"property"},Un=Object.values(Vt),Q={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};class jd extends wt{constructor(){super(...arguments);M(this,"treeWithDiffs",null)}updateNodeDiffsByDescendantDiffs(n,t,r,a){}}const pe=class pe{static transformRawJsoPropertyToBaseJsoNodeValue(e,n){const t=e==null?"":typeof e=="symbol"?e.toString():`${e}`,r=pe.isArrayItemKey(e);return pe.transformRawJsoValueToBaseJsoNodeValue(n,t,r)}static isArrayItemKey(e){return e==null?!1:typeof e=="string"?Number.parseInt(e)>=0:typeof e=="number"?e>=0:!0}static transformRawJsoValueToBaseJsoNodeValue(e,n="",t=!1){const r=pe.getValueType(e),a=pe.isPrimitiveValue(r);return{title:n,value:e,valueType:r,isPrimitive:a,isArrayItem:t,isPredefinedValueSet:pe.isPredefinedValueSet(r)}}static isPredefinedValueSet(e){return e===Q.BOOLEAN||e===Q.NULL}static isPrimitiveValue(e){return e!==Q.JSON_SCHEMA&&e!==Q.MULTI_SCHEMA&&e!==Q.OBJECT&&e!==Q.ARRAY}static getValueType(e){return typeof e=="string"?Q.STRING:typeof e=="number"?Q.NUMBER:typeof e=="boolean"?Q.BOOLEAN:typeof e=="object"?e===null?Q.NULL:Array.isArray(e)?Q.ARRAY:pe.isJsonSchema(e)?Q.JSON_SCHEMA:pe.isMultiSchema(e)?Q.MULTI_SCHEMA:Q.OBJECT:Q.UNKNOWN}static isJsonSchema(e){if(typeof e!="object"||e===null)return!1;const n=rr in e&&typeof e.type=="string"&&zo.some(r=>r===e.type)||nr in e&&Array.isArray(e.oneOf)&&e.oneOf.every(r=>pe.isJsonSchema(r))||tr in e&&Array.isArray(e.anyOf)&&e.anyOf.every(r=>pe.isJsonSchema(r))||er in e&&Array.isArray(e.allOf)&&e.allOf.every(r=>pe.isJsonSchema(r))||yt in e&&typeof e.$ref=="string"&&e.$ref.startsWith("#/"),t=new Set([Ai,$o,Xo,Pi,Qo,Zo,es,rr,Ei,ir,Vi,Ii,Ji,Fi,Li,ji,Gi,Ki,Bi,Mi,Ri,_i,Oi,Hi,vi,Si,qi,Ti,hi,Di,bi,er,nr,tr,ns,Ci,Ni,ki,xi,wi,ts,yt]);return n&&Object.keys(e).every(r=>t.has(r)||pe.isExtensionPropertyInJsonSchema(r)||pe.isAllowedCustomPropertyInJsonSchema(r))}static isAllowedCustomPropertyInJsonSchema(e){return e==="location"}static isExtensionPropertyInJsonSchema(e){return e.startsWith("x-")}static isMultiSchema(e){return typeof e!="object"||e===null?!1:!!("schemaFormat"in e&&typeof e.schemaFormat=="string"&&"schema"in e&&T(e.schema))}static mergeComparisonBetweenArrayAndObject(e,n){if(!gr(e))return e;const t=ue(e[n]);if(!t)return e;const r=new Set(Object.keys(e)),a=new Set(Object.keys(t)),o=r.intersection(a);let s;for(const l of o){const u=e[l],f=t[l];if(u===void 0||f===void 0||!q(f))continue;const{beforeValue:c,afterValue:g}=f,y=T(c),p=Array.isArray(c),h=T(g),b=Array.isArray(g);if(!(p&&h||y&&b))continue;s||(s={...e});const N={...c,...g};s[l]=N}return s??e}};M(pe,"DEFAULT_BASE_JSO_NODE_VALUE",{title:"",value:void 0,valueType:Q.UNKNOWN,isPrimitive:!1,isArrayItem:!1,isPredefinedValueSet:!1});let F=pe;const Jd=(i,e,n,t,r)=>F.mergeComparisonBetweenArrayAndObject(e,r.diffMetaKeys.diffsMetaKey);function Ia(){return{"/*":()=>Ia(),transformers:[Jd],kind:Vt.PROPERTY}}function Fd(i){return vt(i)}const Kd=new Set(Un);class Gd extends St{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){if(!this.isJsoTreeNodeKind(e))return null;const a=F.transformRawJsoPropertyToBaseJsoNodeValue(n,t);return{before:a,after:a}}isJsoTreeNodeKind(e){return Kd.has(e)}}class Bd extends hn{aggregate(e,n,t,r){const a=new Set;if(!n)return a;for(const o of Object.values(n))o&&(!E(o.data)&&!k(o.data)||a.add(o.data.type));return a}}class La{static instance(e){if(!this.instances.has(null)){const n=new Bd;this.instances.set(null,n)}return this.instances.get(null)}}M(La,"instances",new Map);class Ud extends Hn{constructor(){super(...arguments);M(this,"DEFAULT_DIFF_STYLES",{isContentVisible:!0,isHeaderVisible:!0});M(this,"DEFAULT_DIFF_FLAGS",{increaseLevel:!0})}aggregate(n,t){if(!T(n)&&!Array.isArray(n))return;const{diffsMetaKey:r}=t,a=ue(n[r]);if(!a)return;const o={};for(const[s,l]of Object.entries(a)){if(!l)continue;let u=this.DEFAULT_DIFF_STYLES,f=this.DEFAULT_DIFF_STYLES,c=this.DEFAULT_DIFF_FLAGS,g=this.DEFAULT_DIFF_FLAGS,y=Ve;if(E(l)){const{afterValue:p}=l,h=F.getValueType(p),b=F.isPrimitiveValue(h);u={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},c={...c,increaseLevel:!1},f={isContentVisible:b,isHeaderVisible:!0,backgroundColor:S.Green},g={...g,increaseLevel:!0},y=on}if(k(l)){const{beforeValue:p}=l,h=F.getValueType(p);u={isContentVisible:F.isPrimitiveValue(h),isHeaderVisible:!0,backgroundColor:S.Red},c={...c,increaseLevel:!0},f={isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},g={...g,increaseLevel:!1},y=on}if(q(l)){const{beforeValue:p,afterValue:h}=l,b=F.getValueType(p),w=F.getValueType(h),N=F.isPrimitiveValue(b),C=F.isPrimitiveValue(w),D=F.isPredefinedValueSet(b),A=F.isPredefinedValueSet(w);u={isContentVisible:N,isHeaderVisible:!0,backgroundColor:S.Yellow},N&&(D?u.borderShadowColor=S.Yellow:u.textHighlighterColor=S.Yellow),f={isContentVisible:C,isHeaderVisible:!0,backgroundColor:S.Yellow},C&&(A?f.borderShadowColor=S.Yellow:f.textHighlighterColor=S.Yellow),y=rs}o[s]={data:l,styles:{before:u,after:f},flags:{before:c,after:g},highlightingMode:y}}return o}}class ja{static instance(e){if(!this.instances.has(null)){const n=new Ud;this.instances.set(null,n)}return this.instances.get(null)}}M(ja,"instances",new Map);class Wd extends fe{aggregate(e){const n=e[R];if(n){const o=n.data,s={type:o.type,causedAt:[]};return q(o)||k(o)?s.causedAt=o.beforeDeclarationPaths[0]:E(o)&&(s.causedAt=o.afterDeclarationPaths[0]),{[H.TitleRow]:s}}const t=e.value;if(!t)return;const r=t.data,a={type:r.type,causedAt:[]};return q(r)||k(r)?a.causedAt=r.beforeDeclarationPaths[0]:E(r)&&(a.causedAt=r.afterDeclarationPaths[0]),{[H.TitleRow]:a}}}class Ja{static instance(e){return this.instances.has(null)||this.instances.set(null,new Wd),this.instances.get(null)}}M(Ja,"instances",new Map);class Yd extends vr{aggregate(e,n,t){const r=new Set;if(!e)return r;for(const a of Object.values(e))a&&r.add(a.data.type);return r}isDiffsSet(e){if(!e||!(e instanceof Set))return!1;for(const n of e)if(typeof n!="object"||!E(n)&&!k(n)&&!q(n)&&!Ye(n))return!1;return!0}}class zd{static instance(e){return new Yd}}class $d extends G{isComplexValue(e){return T(e)||Array.isArray(e)}aggregate(e,n,t,r,a){const o={};if(r){const s=r.diffs[R];if(s){const{data:l}=s;if(E(l)){const{afterValue:u}=l,f=F.getValueType(u);if(!F.isPrimitiveValue(f)&&this.isComplexValue(u)){const g=u[t],y=F.getValueType(g),p=F.isPrimitiveValue(y),h={data:{...l,afterValue:g},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},after:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:S.Green}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:on,inherited:!0};return o[R]=h,o}return o[R]=s,o}if(k(l)){const{beforeValue:u}=l,f=F.getValueType(u);if(!F.isPrimitiveValue(f)&&this.isComplexValue(u)){const g=u[t],y=F.getValueType(g),p=F.isPrimitiveValue(y),h={data:{...l,beforeValue:g},styles:{before:{isContentVisible:p,isHeaderVisible:!0,backgroundColor:S.Red},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:on,inherited:!0};return o[R]=h,o}return o[R]=s,o}if(q(l)){const{beforeValue:u,afterValue:f}=l,c=F.getValueType(u),g=F.getValueType(f),y=F.isPrimitiveValue(c),p=F.isPrimitiveValue(g);if(y&&p)return o[R]=s,o;if(!y&&this.isComplexValue(u)&&p){const h=u[t],b=F.getValueType(h),w=F.isPrimitiveValue(b),N=F.isPredefinedValueSet(b),C={data:{...l,beforeValue:h,afterValue:null},styles:{before:{isContentVisible:w,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow},after:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!1}},highlightingMode:on,inherited:!0};return w&&(C.styles.before.textHighlighterColor=S.Yellow),N&&(C.styles.before.borderShadowColor=S.Yellow),o[R]=C,o}if(!p&&this.isComplexValue(f)&&y){const h=f[t],b=F.getValueType(h),w=F.isPrimitiveValue(b),N=F.isPredefinedValueSet(b),C={data:{...l,beforeValue:null,afterValue:h},styles:{before:{isContentVisible:!1,isHeaderVisible:!1,backgroundColor:S.Gray},after:{isContentVisible:w,isHeaderVisible:!0,backgroundColor:S.Yellow,textHighlighterColor:S.Yellow}},flags:{before:{increaseLevel:!1},after:{increaseLevel:!0}},highlightingMode:on,inherited:!0};return w&&(C.styles.after.textHighlighterColor=S.Yellow),N&&(C.styles.after.borderShadowColor=S.Yellow),o[R]=C,o}if(!y&&this.isComplexValue(u)&&!p&&this.isComplexValue(f)){const h=u[t],b=f[t],w=F.getValueType(h),N=F.getValueType(b),C=F.isPrimitiveValue(w),D=F.isPrimitiveValue(N),A=F.isPredefinedValueSet(w),j=F.isPredefinedValueSet(N),_={data:{...l,beforeValue:h,afterValue:b},styles:{before:{isContentVisible:h!==void 0&&C,isHeaderVisible:h!==void 0,backgroundColor:h===void 0?S.Gray:S.Yellow,textHighlighterColor:h!==void 0?S.Yellow:void 0},after:{isContentVisible:b!==void 0&&D,isHeaderVisible:b!==void 0,backgroundColor:b===void 0?S.Gray:S.Yellow,textHighlighterColor:b!==void 0?S.Yellow:void 0}},flags:{before:{increaseLevel:!0},after:{increaseLevel:!0}},highlightingMode:on,inherited:!0};return C&&(_.styles.before.textHighlighterColor=S.Yellow),D&&(_.styles.after.textHighlighterColor=S.Yellow),A&&(_.styles.before.borderShadowColor=S.Yellow),j&&(_.styles.after.borderShadowColor=S.Yellow),o[R]=_,o}}}else{const l=r.descendantDiffs[t];if(l)return o[R]=l,o}}}}class Fa{static instance(e){return this.instances.has(null)||this.instances.set(null,new $d),this.instances.get(null)}}M(Fa,"instances",new Map);class Xd extends jd{constructor(n){const{source:t,diffsMetaKeys:r,supportJsonSchema:a=!1,logger:o=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"supportJsonSchema");M(this,"diffsMetaKeys");M(this,"logger");M(this,"nodeDataBuilder");M(this,"CHANGE_SEVERITIES",{[is]:6,[as]:5,[os]:4,[ss]:3,[Ui]:2,[ls]:1});this.source=t,this.supportJsonSchema=a,this.diffsMetaKeys=r,this.logger=o,this.tree=new Ld,this.nodeDataBuilder=new Gd}build(){if(!T(this.source))return this.tree;mr(this.source,this.diffsMetaKeys.diffsMetaKey,this.diffsMetaKeys.aggregatedDiffsMetaKey);const n={parent:null,container:null,ancestors:new Nt,diffMetaKeys:this.diffsMetaKeys},t=Ia(),r=Fd({source:this.source,tree:this.tree,supportedNodeKinds:Un,createNodeFromRaw:(a,o,s,l,u)=>this.createNodeFromRaw(a,o,s,l,u),createNodeParams:(a,o)=>({value:a??null,newDataLevel:!0,container:null,parent:o}),createStateForSimpleNode:(a,o)=>({parent:o,container:null,ancestors:a.ancestors,diffMetaKeys:this.diffsMetaKeys}),createStateForComplexNode:(a,o)=>({parent:a.parent,container:o,ancestors:a.ancestors,diffMetaKeys:this.diffsMetaKeys}),isSimpleNode:a=>a.type===le.SIMPLE,isComplexNode:a=>a.type===le.COMPLEX,resolveNodeKey:(a,o)=>this.resolveNodeKey(a,o),isDisallowedValue:a=>a===void 0,shouldStopAfterNodeCreation:(a,o)=>{if(!T(o)&&!Array.isArray(o))return!0;const s=a.value();return s?this.supportJsonSchema&&(s.before.valueType===Q.JSON_SCHEMA||s.after.valueType===Q.JSON_SCHEMA||s.before.valueType===Q.MULTI_SCHEMA||s.after.valueType===Q.MULTI_SCHEMA):!1}});return Nn(this.source,r,{state:n,rules:t}),this.tree}resolveNodeKey(n,t){return T(t)&&"id"in t&&typeof t.id=="string"?t.id:n}createNodeFromRaw(n,t,r,a,o){const{parent:s=null,newDataLevel:l}=o,u=this.createNodeValue(t,r,o),f=this.createNodeMeta(t,o),c={type:le.SIMPLE,parent:s&&this.isJsoSimpleTreeNodeWithDiffs(s)?s:null,container:null,value:u,meta:f,newDataLevel:l},g=this.tree.createSimpleNode(n,t,r,!1,c);this.assignNodeDiffs(g,r,o);const p=g.diffs[R];if(p){const{data:h}=p;if(E(h)&&u&&(u.before=F.DEFAULT_BASE_JSO_NODE_VALUE),k(h)&&u&&(u.after=F.DEFAULT_BASE_JSO_NODE_VALUE),q(h)){const{beforeValue:b}=h,w=F.transformRawJsoPropertyToBaseJsoNodeValue(t,b);u&&(u.before=w)}}return g}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,()=>null)}createNodeDiffs(n,t,r){if(!this.isJsoTreeNodeKind(t))return;const a=r.parent&&this.isJsoSimpleTreeNodeWithDiffs(r.parent)?r.parent:void 0,o=r.container&&this.isJsoComplexTreeNodeWithDiffs(r.container)?r.container:void 0;return Fa.instance(t).aggregate(r.value,this.diffsMetaKeys,n,a,o)}createNodeDiffsSummary(n,t,r,a){if(this.isJsoTreeNodeKind(n))return zd.instance(n).aggregate(t,r,a)}createNodeDescendantsDiffs(n,t){if(this.isJsoTreeNodeKind(n))return ja.instance(n).aggregate(t.value,this.diffsMetaKeys)}createNodeDescendantsDiffsSummary(n,t,r,a,o){if(this.isJsoTreeNodeKind(n)&&r)return La.instance(n).aggregate(t,r,a,o)}createNodeDiffsSeverities(n,t){if(this.isJsoTreeNodeKind(n)&&t)return Ja.instance(n).aggregate(t)}assignNodeDiffs(n,t,r){const a=this.createNodeDiffs(n.key,t,r);a&&Object.assign(n.diffs,a);const o=this.createNodeDiffsSummary(t,n.diffs,r.value,this.diffsMetaKeys);o&&(n.diffsSummary.clear(),n.addDiffsSummary(o));const s=this.createNodeDescendantsDiffs(t,r);s&&Object.assign(n.descendantDiffs,s);const l=this.createNodeDescendantsDiffsSummary(t,n.diffs,n.descendantDiffs,r.value,this.diffsMetaKeys);l&&(n.descendantDiffsSummary.clear(),n.addDescendantDiffsSummary(l)),Sr(n.descendantDiffsSummary,n.diffs,r.value,this.diffsMetaKeys);const u=this.createNodeDiffsSeverities(t,n.diffs);u&&Object.assign(n.diffsSeverities,u);const f=n.diffsSeverities["title-row"]?void 0:this.createPropagatedNodeDiffsSeverities(r);f&&Object.assign(n.diffsSeverities,f)}createPropagatedNodeDiffsSeverities(n){const t=this.resolveDiffsSeverityPropagationSourceNode(n);if(!t)return;const r=t.diffsSeverities["title-row"];if(r)return{"title-row":r}}resolveDiffsSeverityPropagationSourceNode(n){if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.parent,new Set);if(t)return t}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container)){const t=this.resolveEligibleDiffsSeveritySourceNode(n.container,new Set);if(t)return t}}isComplexTypeTransitionReplaceDiffNode(n){const t=n.diffs.value??n.diffs[R];if(!t||!q(t.data))return!1;const r=F.getValueType(t.data.beforeValue),a=F.getValueType(t.data.afterValue),o=this.isJsoComplexValueType(r),s=this.isJsoComplexValueType(a);return o!==s}isJsoComplexValueType(n){return n===Q.OBJECT||n===Q.ARRAY}isInheritedComplexTransitionSeverityNode(n){return!!(n.diffsSeverities["title-row"]&&!n.diffs[R]&&!n.diffs.value)}resolveEligibleDiffsSeveritySourceNode(n,t){if(!t.has(n.id)){if(t.add(n.id),n.diffsSeverities["title-row"]&&(this.isComplexTypeTransitionReplaceDiffNode(n)||this.isInheritedComplexTransitionSeverityNode(n)))return n;if(n.parent&&this.isJsoTreeNodeWithDiffs(n.parent)){const r=this.resolveEligibleDiffsSeveritySourceNode(n.parent,t);if(r)return r}if(n.container&&this.isJsoTreeNodeWithDiffs(n.container))return this.resolveEligibleDiffsSeveritySourceNode(n.container,t)}}isJsoTreeNodeWithDiffs(n){return!!(n&&typeof n=="object"&&"type"in n&&(n.type===le.SIMPLE||n.type===le.COMPLEX))}isJsoTreeNodeKind(n){return Un.some(t=>t===n)}isJsoSimpleTreeNodeWithDiffs(n){return n.type===le.SIMPLE}isJsoComplexTreeNodeWithDiffs(n){return n.type===le.COMPLEX}maxDiffType(n){let t;for(const r of n)this.compareDiffTypes(r,t)>0&&(t=r);return t}compareDiffTypes(n,t){return!n&&!t?0:!n&&t?this.CHANGE_SEVERITIES[t]:n&&!t?this.CHANGE_SEVERITIES[n]:this.CHANGE_SEVERITIES[n]-this.CHANGE_SEVERITIES[t]}}const xr=m.createContext({});function Ka(){return m.useContext(xr)}const Le={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",OBJECT:"object",ARRAY:"array",JSON_SCHEMA:"jsonSchema",MULTI_SCHEMA:"multiSchema",UNKNOWN:"unknown"};function Ga(i,e){if(e)return{type:"object",properties:{[i]:e}}}function ur(i,e,n,t){if(!e)return;const r=n==null?void 0:n.data,a=t==null?void 0:t.diffsMetaKey;return{type:"object",properties:{[i]:e,...r&&a?{[a]:{[i]:r}}:{}}}}function Qd(i,e){if(e&&!(e.valueType!==Le.JSON_SCHEMA&&e.valueType!==Le.MULTI_SCHEMA))return T(e.value)?Ga(i,e.value):void 0}function Zd(i,e,n,t){if(e&&!(e.before.valueType!==Le.JSON_SCHEMA&&e.before.valueType!==Le.MULTI_SCHEMA&&e.after.valueType!==Le.JSON_SCHEMA&&e.after.valueType!==Le.MULTI_SCHEMA)){if((e.before.valueType===Le.JSON_SCHEMA||e.before.valueType===Le.MULTI_SCHEMA)&&T(e.before.value))return ur(i,e.before.value,n,t);if((e.after.valueType===Le.JSON_SCHEMA||e.after.valueType===Le.MULTI_SCHEMA)&&T(e.after.value))return ur(i,e.after.value,n,t)}}const Cr=m.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?d.jsx("span",{className:t,children:`${n}`}):null});Cr.__docgenInfo={description:"",methods:[],displayName:"JsoValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ba(i){const{appearance:e}=i;return m.useMemo(()=>["jso-value","subheader",e].filter(Boolean).join(" "),[e])}function eu(i){const{appearance:e,textHighlighterColor:n,borderShadowColor:t}=i,r=Ba({appearance:e});return m.useMemo(()=>[r,e==="text"?ne.highlighter(n):"",e==="block"?ne.borderShadow(t):""].filter(Boolean).join(" "),[e,t,r,n])}const ft=m.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,borderShadowColor:a}=i,o=eu({appearance:t,textHighlighterColor:r,borderShadowColor:a});return d.jsx(Cr,{isVisible:e,value:n,className:o})});ft.__docgenInfo={description:"",methods:[],displayName:"JsoValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};const Rr=i=>{const{node:e,supportJsonSchema:n=!1}=i,{[te]:t}=i,r=xe(),a=On(),{beforeLevel:o,afterLevel:s}=qn(),{EmbeddedSchemaDiffsComponent:l}=Ka(),[u,f]=m.useState(!0),c=m.useCallback(()=>{f(O=>!O)},[]),g=e.value(),y=e.diffs,p=e.descendantDiffsSummary,h=m.useMemo(()=>y[R],[y]),b=m.useCallback(O=>{if(!g)return d.jsx(d.Fragment,{});if(!h)return d.jsxs("div",{className:"flex flex-row gap-2",children:[d.jsx(ft,{isVisible:g.after.isPrimitive,value:g.after.value,appearance:g.after.isPredefinedValueSet?"block":"text"}),!u&&d.jsx(aa,{values:Array.from(p)})]});const{styles:P}=h;return O===X?d.jsx(ft,{isVisible:P.before.isContentVisible,value:g.before.value,appearance:g.before.isPredefinedValueSet?"block":"text",textHighlighterColor:P.before.textHighlighterColor,borderShadowColor:P.before.borderShadowColor}):O===ae?d.jsx(ft,{isVisible:P.after.isContentVisible,value:g.after.value,appearance:g.after.isPredefinedValueSet?"block":"text",textHighlighterColor:P.after.textHighlighterColor,borderShadowColor:P.after.borderShadowColor}):d.jsx(d.Fragment,{})},[u,p,g,h]),w=m.useMemo(()=>{const O=$e(e);return ie(O,{resolveDiff:()=>h})},[e,h]),N=e.childrenNodes(),C=m.useMemo(()=>{const O=!!g,P=!(g!=null&&g.before.isPrimitive)&&(g==null?void 0:g.before.valueType)!==Q.UNKNOWN,W=!(g!=null&&g.after.isPrimitive)&&(g==null?void 0:g.after.valueType)!==Q.UNKNOWN;return O&&(P||W)},[g]),D=m.useMemo(()=>!(g!=null&&g.before.isArrayItem)&&!(g!=null&&g.after.isArrayItem),[g]),A=m.useMemo(()=>n?Zd(e.key,g,h,a):void 0,[a,e.key,g,h,n]);if(A)return a?l?d.jsx(Qe,{beforeLevel:Math.max(o-1,0),afterLevel:Math.max(s-1,0),children:d.jsx(l,{schema:A,expandedDepth:2,displayMode:r,diffMetaKeys:a,customizationOptions:En},e.id)}):(console.error("supportJsonSchema is set but no embeddedSchemaDiffsComponent was provided to JsoDiffsViewer",e),null):(console.error("diffMetaKeys is not defined, but JSON Schema node is defined",e),null);const j=Pa(N),[_,J]=(()=>{let O=o+1,P=s+1;const[W]=N,de=W==null?void 0:W.diffs[R];return de&&j&&(O=de.flags.before.increaseLevel?o+1:o,P=de.flags.after.increaseLevel?s+1:s),[O,P]})();return d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(me,{"data-precededby":t,value:`${e.key}`,expandable:C,expanded:u,onClickExpander:C?c:void 0,variant:K.body2,enableHeaderValue:D,subheader:b,usage:kt.JsoProperty,highlightingMode:h==null?void 0:h.highlightingMode,...w}),u&&d.jsx(Qe,{beforeLevel:_,afterLevel:J,children:N.map(O=>d.jsx(Rr,{"data-precededby":x.JSO_PROPERTY,node:O,supportJsonSchema:n},O.id))})]})};Rr.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsoTreeNodeValueWithDiffs | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}},{key:"valueType",value:{name:"JsoPropertyValueTypes[union]",raw:"typeof JsoPropertyValueTypes[keyof typeof JsoPropertyValueTypes]",required:!0}},{key:"isPrimitive",value:{name:"boolean",required:!0}},{key:"isArrayItem",value:{name:"boolean",required:!0}},{key:"isPredefinedValueSet",value:{name:"boolean",required:!0}}]},required:!0},{name:"literal",value:"'value'"}],raw:"Pick<JsoTreeNodeValueBase, 'value'>"}],raw:"ITreeNodeWithDiffs<JsoTreeNodeValueWithDiffs | null, JsoTreeNodeKind, JsoTreeNodeMeta, JsoTreeNodeDiffsSource>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const xt=m.memo(i=>i.mergedSource===null?null:d.jsx(Vn,{fallback:d.jsx(xn,{componentName:"JSO Diffs Viewer"}),children:d.jsx(nu,{...i})})),nu=m.memo(i=>{const{mergedSource:e,displayMode:n=Mn,initialLevel:t=0,supportJsonSchema:r=!1,devMode:a=!1,diffMetaKeys:o,diffTypes:s,embeddedSchemaDiffsComponent:l}=i,{[te]:u}=i,f=m.useMemo(()=>Ke(a),[a]),c=m.useMemo(()=>new Xd({source:e,supportJsonSchema:r,diffsMetaKeys:o,logger:f}),[e,r,o,f]),g=m.useMemo(()=>c.build(),[c]),y=m.useMemo(()=>({EmbeddedSchemaDiffsComponent:l}),[l]);f.debug("[JSO Diffs] Source:",e),f.debug("[JSO Diffs] Tree:",g);const p=g.root;if(!p)return null;const h=p.childrenNodes();if(h.length===0)return null;const b=Pa(h),[w,N]=(()=>{let C=t,D=t;const[A]=h,j=A.diffs[R];return j&&b&&(C=j.flags.before.increaseLevel?t:t-1,D=j.flags.after.increaseLevel?t:t-1),[C,D]})();return d.jsx(xr.Provider,{value:y,children:d.jsx(wr.Provider,{value:o,children:d.jsx(Nr.Provider,{value:s,children:d.jsx(Cn.Provider,{value:n,children:d.jsx(Rn.Provider,{value:_e,children:d.jsx(Qe,{beforeLevel:w,afterLevel:N,children:d.jsx("div",{"data-testid":"jso-diffs-viewer",children:h.map((C,D)=>d.jsx(Rr,{"data-precededby":D===0?u:x.JSO_PROPERTY,node:C,supportJsonSchema:r},C.id))})})})})})})})});xt.__docgenInfo={description:"",methods:[],displayName:"JsoDiffsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},mergedSource:{required:!0,tsType:{name:"unknown"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
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
purely to get a property row per key.`}]},required:!1}}]}}],raw:"FC<JsoEmbeddedSchemaDiffsComponentProps>"},description:""}}};class tu extends yr{constructor(){super()}}function Ua(){return{"/*":()=>Ua(),kind:Vt.PROPERTY}}function ru(i){return vt(i)}const iu=new Set(Un);class au extends St{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!this.isJsoTreeNodeKind(e)||e!==Vt.PROPERTY?null:F.transformRawJsoPropertyToBaseJsoNodeValue(n,t)}isJsoTreeNodeKind(e){return iu.has(e)}}class ou extends wt{constructor(n){const{source:t,supportJsonSchema:r=!1,materializeDepth:a,logger:o=Ke()}=n;super();M(this,"tree");M(this,"source");M(this,"supportJsonSchema");M(this,"materializeDepth");M(this,"logger");M(this,"nodeDataBuilder");M(this,"lazyState",new $i);M(this,"crawlHooks",null);this.source=t,this.supportJsonSchema=r,this.materializeDepth=a,this.logger=o,this.tree=new tu,this.nodeDataBuilder=new au}build(){if(!T(this.source))return this.tree;const n={parent:null,container:null,ancestors:new Nt,depth:0,materializeDepth:this.materializeDepth,pathPrefix:[]},t=Ua();return this.crawlHooks=ru({source:this.source,tree:this.tree,supportedNodeKinds:Un,createNodeFromRaw:(r,a,o,s,l)=>this.createNodeFromRaw(r,a,o,s,l),createNodeParams:(r,a,o)=>({value:r??null,newDataLevel:!0,container:o,parent:a}),createStateForSimpleNode:(r,a)=>({parent:a,container:null,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),createStateForComplexNode:(r,a)=>({parent:r.parent,container:a,ancestors:r.ancestors,depth:r.depth,materializeDepth:r.materializeDepth,pathPrefix:r.pathPrefix}),isSimpleNode:r=>this.isJsoSimpleTreeNode(r),isComplexNode:r=>this.isJsoComplexTreeNode(r),resolveNodeKey:(r,a)=>this.resolveNodeKey(r,a),isDisallowedValue:r=>r===void 0,shouldStopAfterNodeCreation:(r,a)=>{if(!T(a)&&!Array.isArray(a))return!0;const o=r.value();return o?this.supportJsonSchema&&(o.valueType===Q.JSON_SCHEMA||o.valueType===Q.MULTI_SCHEMA):!1},lazy:this.materializeDepth===void 0?void 0:{state:this.lazyState,resolveHasOwnChildren:vs}}),Nn(this.source,this.crawlHooks,{state:n,rules:t}),this.tree}materializeChildren(n,t=1){const r=this.lazyState.pending.get(n.id);if(!r||!this.crawlHooks)return;this.lazyState.pending.delete(r.nodeId);const a={parent:n,container:null,ancestors:Xi(n,this.lazyState.fragments),depth:0,materializeDepth:t,pathPrefix:r.path};Nn(r.fragment,this.crawlHooks,{state:a,rules:r.rules},!0)}resolveNodeKey(n,t){return n}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:l,newDataLevel:u}=o;if(a){const y=this.createNodeMeta(t,o),p={type:le.COMPLEX,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:null,meta:y,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,p)}const f=this.createNodeValue(t,r,{...o,parent:s,container:l}),c=this.createNodeMeta(t,o),g={type:le.SIMPLE,parent:s&&this.isJsoSimpleTreeNode(s)?s:null,container:l&&this.isJsoComplexTreeNode(l)?l:null,value:f,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,g)}createNodeMeta(n,t){const{value:r,parent:a=null}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}isJsoSimpleTreeNode(n){return n.type===le.SIMPLE}isJsoComplexTreeNode(n){return!this.isJsoSimpleTreeNode(n)}}const Wa=m.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=Ba({appearance:t});return d.jsx(Cr,{isVisible:e,value:n,className:r})});Wa.__docgenInfo={description:"",methods:[],displayName:"JsoValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Mr=i=>{const{node:e,supportJsonSchema:n=!1}=i,{[te]:t}=i,r=xe(),a=yn(),{EmbeddedSchemaComponent:o}=Ka(),[s,l]=m.useState(!0),u=m.useCallback(()=>{l(h=>!h)},[]),f=e.value(),c=m.useMemo(()=>!!f&&!f.isPrimitive,[f]),g=m.useCallback(()=>f?d.jsx(Wa,{isVisible:f.isPrimitive,value:f.value,appearance:f.isPredefinedValueSet?"block":"text"}):d.jsx(d.Fragment,{}),[f]),y=e.childrenNodes(),p=m.useMemo(()=>n?Qd(e.key,f):void 0,[e.key,f,n]);return p?o?d.jsx(o,{schema:p,expandedDepth:2,displayMode:r,customizationOptions:En},e.id):(console.error("supportJsonSchema is set but no embeddedSchemaComponent was provided to JsoViewer",e),null):d.jsxs("div",{"data-testid":"jso-property-node-viewer",className:"flex flex-col jso-property",children:[d.jsx(me,{"data-precededby":t,value:`${e.key}`,expandable:c,expanded:s,onClickExpander:u,variant:K.body2,enableHeaderValue:!(f!=null&&f.isArrayItem),subheader:g,usage:kt.JsoProperty}),s&&d.jsx(He.Provider,{value:a+1,children:y.map(h=>d.jsx(Mr,{"data-precededby":x.JSO_PROPERTY,node:h,supportJsonSchema:n}))})]})};Mr.__docgenInfo={description:"",methods:[],displayName:"JsoPropertyNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsoTreeNodeValue | null",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"ITreeNode<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>"},description:""},supportJsonSchema:{required:!1,tsType:{name:"boolean"},description:""}}};const Ct=m.memo(i=>i.source===null?null:d.jsx(Vn,{fallback:d.jsx(xn,{componentName:"JSO Viewer"}),children:d.jsx(su,{...i})})),su=m.memo(i=>{const{source:e,displayMode:n=Mn,layoutMode:t=nn,initialLevel:r=0,supportJsonSchema:a=!1,devMode:o=!1,embeddedSchemaComponent:s}=i,{[te]:l}=i,u=m.useMemo(()=>Ke(o),[o]),f=m.useMemo(()=>new ou({source:e,supportJsonSchema:a,logger:u}),[e,a,u]),c=m.useMemo(()=>f.build(),[f]),g=m.useMemo(()=>({EmbeddedSchemaComponent:s}),[s]);u.debug("[JSO] Source:",e),u.debug("[JSO] Tree:",c);const y=c.root;if(!y)return null;const p=y.childrenNodes();return p.length===0?null:d.jsx(xr.Provider,{value:g,children:d.jsx(Cn.Provider,{value:n,children:d.jsxs(Rn.Provider,{value:t,children:[" ",d.jsx(He.Provider,{value:r,children:d.jsx("div",{"data-testid":"jso-viewer",children:p.map((h,b)=>d.jsx(Mr,{"data-precededby":b===0?l:x.JSO_PROPERTY,node:h,supportJsonSchema:a},h.id))})})]})})})});Ct.__docgenInfo={description:"",methods:[],displayName:"JsoViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},source:{required:!0,tsType:{name:"union",raw:"object | null",elements:[{name:"object"},{name:"null"}]},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
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
purely to get a property row per key.`}]},required:!1}}]}}],raw:"FC<JsoEmbeddedSchemaComponentProps>"},description:""}}};const _r=({source:i,initialLevel:e})=>d.jsx(Ct,{source:i,initialLevel:e}),qr=({mergedSource:i,initialLevel:e,displayMode:n,diffMetaKeys:t})=>d.jsx(xt,{mergedSource:i,initialLevel:e,displayMode:n,diffMetaKeys:t});_r.__docgenInfo={description:"",methods:[],displayName:"DefaultExtensionsJsoComponent"};qr.__docgenInfo={description:"",methods:[],displayName:"DefaultExtensionsJsoDiffsComponent"};const Hr=m.createContext(null);function lu(){const i=m.useContext(Hr);if(!i)throw new Error("useJsonSchemaEmbeddingContext must be used within JsonSchemaNextViewer or JsonSchemaNextDiffsViewer");return i}const du=" or null";function ze(i,e){if(e!=null&&e.brokenRef)return`$ref: ${e.brokenRef}`;if(kn(i))return"";const n=i,t=(n==null?void 0:n.type)??wn,r=n&&typeof n=="object"&&"format"in n?n.format:void 0,a=n==null?void 0:n.title,o=n!=null&&n.nullable?du:"";let s=String(t);return r&&(s+=`(${r})`),a&&(s+=`<${a}>`),s+=o,s}function si(i){return i!=null}function Ya(i){if(!T(i))return{};const e={};return typeof i.minLength=="number"&&(e.minLength=i.minLength),typeof i.maxLength=="number"&&(e.maxLength=i.maxLength),typeof i.pattern=="string"&&(e.pattern=i.pattern),typeof i.minimum=="number"&&(e.minimum=i.minimum),typeof i.maximum=="number"&&(e.maximum=i.maximum),(typeof i.exclusiveMinimum=="number"||typeof i.exclusiveMinimum=="boolean")&&(e.exclusiveMinimum=i.exclusiveMinimum),(typeof i.exclusiveMaximum=="number"||typeof i.exclusiveMaximum=="boolean")&&(e.exclusiveMaximum=i.exclusiveMaximum),typeof i.multipleOf=="number"&&(e.multipleOf=i.multipleOf),typeof i.minProperties=="number"&&(e.minProperties=i.minProperties),typeof i.maxProperties=="number"&&(e.maxProperties=i.maxProperties),typeof i.uniqueItems=="boolean"&&(e.uniqueItems=i.uniqueItems),typeof i.minItems=="number"&&(e.minItems=i.minItems),typeof i.maxItems=="number"&&(e.maxItems=i.maxItems),e}function za(i){const e=dn(i);if(!e)return[];const n=[],t=Ya(e);return t.minLength!==void 0&&n.push(De.MIN_LENGTH),t.maxLength!==void 0&&n.push(De.MAX_LENGTH),t.pattern!==void 0&&n.push(De.PATTERN),t.minimum!==void 0&&n.push(De.MINIMUM),t.maximum!==void 0&&n.push(De.MAXIMUM),si(t.exclusiveMinimum)&&n.push(De.EXCLUSIVE_MINIMUM),si(t.exclusiveMaximum)&&n.push(De.EXCLUSIVE_MAXIMUM),t.multipleOf!==void 0&&n.push(De.MULTIPLE_OF),t.minProperties!==void 0&&n.push(De.MIN_PROPERTIES),t.maxProperties!==void 0&&n.push(De.MAX_PROPERTIES),t.uniqueItems!==void 0&&n.push(De.UNIQUE_ITEMS),t.minItems!==void 0&&n.push(De.MIN_ITEMS),t.maxItems!==void 0&&n.push(De.MAX_ITEMS),n}function uu(i){return i!=null}function fu(i){return!!(i!=null&&i.extensions)&&Object.keys(i.extensions).length>0}function cu(i){return!!(i!=null&&i.customAnnotations)&&Object.keys(i.customAnnotations).length>0}const mu="x-deprecated-reason";function yu(i){var n;const e=(n=i==null?void 0:i.extensions)==null?void 0:n[mu];return typeof e=="string"&&e.length>0?e:void 0}class $a{resolveNodeVisibility(e,n){const t=dn(e),r=ea(n),a=yu(t),o=r&&!!(t!=null&&t.description),s=r&&!!a,l=r&&uu(t==null?void 0:t.default),u=r&&Array.isArray(t==null?void 0:t.examples)&&t.examples.length>0,f=r&&Array.isArray(t==null?void 0:t.enum)&&t.enum.length>0,c=r&&za(e).length>0,g=r&&fu(t),y=r&&cu(t),p=l||u||f||c||g||y;return{showDescription:o,showDeprecationReasonRow:s,deprecationReason:a,showDefaultRow:l,showExamplesRow:u,showEnumValuesRow:f,showValidationsSection:c,showExtensionsRow:g,showCustomAnnotationsRow:y,showContentSection:o||s||p,showAnyAdditionalInfoRow:p}}resolveListLastRowFlags(e,n){const{showDescription:t,showContentSection:r,showEnumValuesRow:a,showDefaultRow:o,showExamplesRow:s}=n;return{isTitleListLastRow:e&&!r,isDescriptionListLastRow:e&&t&&!a&&!o&&!s,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isExamplesAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return n==="default"?e.showEnumValuesRow:n==="examples"?e.showEnumValuesRow||e.showDefaultRow:!1}resolveIsExpandable(e){if(e.childrenNodes().length>0)return!0;const n=typeof e.meta=="function"?e.meta():void 0,t=n==null?void 0:n._fragment;return t!==void 0&&va(t)}resolveInitiallyExpanded(e,n){return e.isCycle?!1:this.resolveIsExpandable(e)?n?n.level<n.expandedDepth:!1:!0}resolveExpanderExpanded(e,n){return!(!n||this.resolveIsExpandable(e)&&e.childrenNodes().length===0)}}const Pn=new $a;function $n(i,e){return Pn.resolveNodeVisibility(i,e)}function Or(i,e){return Pn.resolveListLastRowFlags(i,e)}function gu(i,e){return Pn.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Pr(i){return Pn.resolveIsExpandable(i)}function Rt(i,e){return Pn.resolveInitiallyExpanded(i,e)}function Se(i,e){return Pn.resolveExpanderExpanded(i,e)}function Xa(i,e,n){if(!n)return i;const t=e===X;return(n===L.add?t:!t)?Math.max(i-1,0):i}var Fe=(i=>(i.Default="default",i.JsonSchema="json-schema",i))(Fe||{});const pu={[Fe.JsonSchema]:hr};function hu(i){return pu[i]??Yn}const Gn=m.memo(i=>{const{title:e,layoutSide:n,usage:t=Fe.Default,lastInvisible:r=!1,diff:a,levelReductionAction:o}=i,{[te]:s}=i,l=br(n),u=m.useMemo(()=>Xa(l,n,o),[l,n,o]),f=m.useMemo(()=>hu(t),[t]),c=m.useMemo(()=>{if(!(a!=null&&a.data))return[];const{styles:b}=a,w=[];return n===X&&w.push(ne.background(b.before.backgroundColor)),n===ae&&w.push(ne.background(b.after.backgroundColor)),w},[a,n]),g=m.useMemo(()=>{const b=a==null?void 0:a.data;return b?E(b)?n===ae:k(b)?n===X:!0:!0},[a,n]),y=t===Fe.JsonSchema,p=typeof e=="function"?e(n):e,h=g&&p!=null;return d.jsxs("div",{"data-testid":"nesting-indicator-title-row-content","data-precededby":s,className:["nesting-indicator-title-row-content flex w-full h-full",y?"items-stretch":"",f,...c].filter(Boolean).join(" "),children:[d.jsx("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:d.jsx(Dt,{level:u,lastInvisible:r&&g})}),h&&d.jsx(Ms,{title:p})]})});Gn.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const In=m.memo(i=>{const e=qe(),{diffsSeverities:n,diffsSeverityPlacement:t=H.TitleRow}=i,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),a=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>Wn(r==null?void 0:r.causedAt),[r]);switch(e){case _e:return d.jsx(_n,{diffType:a,diffTypeCause:o,hidden:!1,children:d.jsx(pn,{left:d.jsx(Gn,{...i,layoutSide:X}),right:d.jsx(Gn,{...i,layoutSide:ae})})});case nn:return d.jsx(gn,{content:d.jsx(Gn,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});In.__docgenInfo={description:"",methods:[],displayName:"NestingIndicatorTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},title:{required:!0,tsType:{name:"union",raw:"ReactNode | ((layoutSide: LayoutSide) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},usage:{required:!1,tsType:{name:"NestingIndicatorTitleRowUsage"},description:""},lastInvisible:{required:!1,tsType:{name:"boolean"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:"JSON Schema combiner-selector-row level reduction only; unset for every other row/usage."}}};const Ir=m.createContext(null);function Mt(){const i=m.useContext(Ir);if(!i)throw new Error("useJsonSchemaNextViewerContext must be used within JsonSchemaNextViewer");return i}const li=" or null";class bu{static takeFieldDiffs(e){const n=e.diffs.typeLabelFieldDiffs;if(!(!n||Object.keys(n).length===0))return n}static resolveTypeSideValue(e,n){const t=dn(e.value()),r=(t==null?void 0:t.type)??wn,a=this.takeFieldDiffs(e);return it(r,a==null?void 0:a.type,n)??String(r)}static resolveSideDisplay(e,n,t){if(n!=null&&n.brokenRef)return{kind:We.NO_DIFFS,text:`$ref: ${n.brokenRef}`};const r=e.value();if(kn(r))return{kind:We.NO_DIFFS,text:""};const a=this.takeFieldDiffs(e);if(!a)return{kind:We.NO_DIFFS,text:ze(r,n)};if(this.shouldUseMonolithicTypeLabelHighlight(a)){const c=Object.values(a).find(Boolean);return c?{kind:We.WHOLE_DIFFS,text:this.buildMonolithicSideLabel(r,a,t),diff:this.buildMonolithicTypeLabelDiffMetadata(c)}:{kind:We.NO_DIFFS,text:ze(r,n)}}const o=[],s=this.buildTypeSideSegment(r,a.type,t);s&&o.push(s);const l=this.buildWrappedSideSegment(this.takeMergedFormat(r),a.format,t,this.wrapFormat);l&&o.push(l);const u=this.buildWrappedSideSegment(r==null?void 0:r.title,a.title,t,this.wrapTitle);u&&o.push(u);const f=this.takeNullableSuffixSegment(r);return f&&o.push(f),o.length===0?{kind:We.NO_DIFFS,text:ze(r,n)}:{kind:We.PARTIAL_DIFFS,segments:o}}static shouldUseMonolithicTypeLabelHighlight(e){const n=Ea.map(r=>[r,e[r]]).filter(r=>!!r[1]);return n.length===0||n.length===1||!e.type||!e.title||!e.format?!1:new Set(n.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,n,t){const r=[],a=it((e==null?void 0:e.type)??wn,n.type,t)??(e==null?void 0:e.type)??wn;r.push(String(a));const o=this.resolveWrappedFieldSideText(this.takeMergedFormat(e),n.format,t,this.wrapFormat);o&&r.push(o);const s=this.resolveWrappedFieldSideText(e==null?void 0:e.title,n.title,t,this.wrapTitle);return s&&r.push(s),e!=null&&e.nullable&&r.push(li.trim()),r.join(" ")}static buildTypeSideSegment(e,n,t){const r=(e==null?void 0:e.type)??wn,a=it(r,n,t);return a===void 0?n?void 0:{text:String(r)}:{text:a,diff:n}}static buildWrappedSideSegment(e,n,t,r){const a=this.resolveWrappedFieldSideText(e,n,t,r);if(a!==void 0)return{text:a,diff:n}}static resolveWrappedFieldSideText(e,n,t,r){const a=it(e,n,t);if(a===void 0)return!n&&this.hasNonBlankText(e)?r(e):void 0;if(this.hasNonBlankText(a))return r(a)}static takeNullableSuffixSegment(e){if(!(kn(e)||!(e!=null&&e.nullable)))return{text:li.trim()}}static takeMergedFormat(e){if(!e||typeof e!="object"||!("format"in e))return;const n=e.format;return typeof n=="string"?n:void 0}static hasNonBlankText(e){return!!e&&e.trim().length>0}static wrapFormat(e){return`(${e})`}static wrapTitle(e){return`<${e}>`}static buildMonolithicTypeLabelDiffMetadata(e){const{data:n}=e;return q(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Yellow}}}:E(n)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Green}}}:k(n)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:S.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class Oe{static takeSharedRowDiffs(e){return e.diffs}static takeKindAnyNodeDiffs(e){return e.diffs}static takePropertyRowDiffsForRequired(e){if(e.kind===Y.PROPERTY)return e.diffs}static takePropertyRowDiffs(e){return e.diffs}}class Du extends Oe{static takeDiff(e){return this.takeSharedRowDiffs(e)[sn]??e.diffs[R]}}class vu extends Oe{static takeReadOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).readOnly}static takeWriteOnlyDiff(e){return this.takeKindAnyNodeDiffs(e).writeOnly}static takeDeprecatedDiff(e){return this.takeKindAnyNodeDiffs(e).deprecated}static takeRawDiffs(e){const n=this.takeKindAnyNodeDiffs(e),t=this.takePropertyRowDiffsForRequired(e),r={};for(const o of Fn){const s=n[o];s!=null&&s.data&&(r[o]=s.data)}const a=t==null?void 0:t.required;return a!=null&&a.data&&(r.required=Qa.normalizeMetaDiffForDisplay(a)),r}static hasContentChange(e){return Object.keys(this.takeRawDiffs(e)).length>0}}class Qa extends Oe{static takeMetaDiff(e){var n;return(n=this.takePropertyRowDiffsForRequired(e))==null?void 0:n.required}static normalizeMetaDiffForDisplay(e){if(!(e!=null&&e.data))return;const n=e.data;return E(n)?{type:n.type,scope:n.scope,description:n.description,action:L.add,afterValue:!0,afterDeclarationPaths:n.afterDeclarationPaths}:k(n)?{type:n.type,scope:n.scope,description:n.description,action:L.remove,beforeValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths}:q(n)?{type:n.type,scope:n.scope,description:n.description,action:L.replace,beforeValue:!0,afterValue:!0,beforeDeclarationPaths:n.beforeDeclarationPaths,afterDeclarationPaths:n.afterDeclarationPaths}:n}static takeMetaDiffForDisplay(e){return this.normalizeMetaDiffForDisplay(this.takeMetaDiff(e))}static isVisibleOnSide(e,n,t){if(!n)return e===!0;const r=t===X;return E(n)?!r:k(n)?r:q(n)?r?n.beforeValue===!0:n.afterValue===!0:e===!0}}class Su extends Oe{static takeNestingIndicatorRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).nestingIndicatorRowColorizingDiff}static takeNodeChangesSummary(e){return this.takeKindAnyNodeDiffs(e).nodeChangesSummary}static isWholePropertyAddOrRemove(e){const n=e.diffs[R];if(!n)return!1;const{data:t}=n;return t.action==="add"||t.action==="remove"}}class wu extends Oe{static takeRowColorizingDiff(e){return this.takeKindAnyNodeDiffs(e).extensionsRowColorizingDiff}static takeDiffs(e){return this.takeKindAnyNodeDiffs(e).extensionsDiffs}}class Nu extends Oe{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).customAnnotationDiffs)==null?void 0:t[n]}static takeRowColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).customAnnotationRowColorizingDiffs)==null?void 0:t[n]}static hasAnyDiff(e){const n=this.takeKindAnyNodeDiffs(e);return Object.keys(n.customAnnotationDiffs??{}).length>0||Object.keys(n.customAnnotationRowColorizingDiffs??{}).length>0}static resolveSideEntries(e,n,t){return Za.resolveSideEntries(e,n,t)}}class Za extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).default}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).defaultRowColorizingDiff}static resolveSideEntries(e,n,t){if(!n)return e===void 0?[]:[{text:he.formatListDisplayValue(e)}];const r=t===X,{data:a}=n;if(E(a))return r?[]:[{text:he.formatListDisplayValue(a.afterValue??e)}];if(k(a))return r?[{text:he.formatListDisplayValue(a.beforeValue??e)}]:[];if(q(a)){const o=r?a.beforeValue??e:a.afterValue??e;return[{text:he.formatListDisplayValue(o)}]}return e===void 0?[]:[{text:he.formatListDisplayValue(e)}]}}class ku extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).enumDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).enumValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).enumRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?Ze.resolveWholeListSideEntries(e,n,r):Ze.resolvePartialListSideEntries(e,t,r)}}class Eu extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).examplesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).examplesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).examplesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?Ze.resolveWholeListSideEntries(e,n,r):Ze.resolvePartialListSideEntries(e,t,r)}}class Au extends Oe{static takeDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesDiff}static takeValueDiffs(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesValueDiffs}static takeRowColorizingDiff(e){return this.takePropertyRowDiffs(e).allowedAdditionalPropertyNamesRowColorizingDiff}static resolveSideEntries(e,n,t,r){return n?Ze.resolveWholeListSideEntries(e,n,r):Ze.resolvePartialListSideEntries(e,t,r)}}class eo extends Oe{static takeDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowDiffs)==null?void 0:t[n]}static takeValueDiffs(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowValueDiffs)==null?void 0:t[n]}static takeColorizingDiff(e,n){var t;return(t=this.takeKindAnyNodeDiffs(e).validationRowColorizingDiffs)==null?void 0:t[n]}static takeValueRangeCrawlDiffs(e){return this.takeKindAnyNodeDiffs(e).valueRangeCrawlDiffs}static hasSemanticDiffs(e,n){if(this.takeDiff(e,n)||this.takeColorizingDiff(e,n))return!0;const t=this.takeValueDiffs(e,n);return t?Object.values(t).some(r=>r!==void 0):!1}static resolveSideEntries(e,n,t,r,a,o){return e===ce.VALUE_RANGE&&(o!=null&&o.crawlDiffs)?this.ValueRange.resolveValueRangeDiffSideEntries(this.ValueRange.resolveValueRangeSideInputFromNodeValue(o.nodeValue),o.crawlDiffs,a,t,r):t?Ze.resolveWholeListSideEntries(n,t,a):Ze.resolveValidationRowPartialSideEntries(e,n,r,a)}}M(eo,"ValueRange",cn);class Ze{static resolveCore(e,n,t,r,a,o){const s=t===X,l=new Set,u=[];for(let f=0;f<e.length;f++){const c=r(f),g=c?n==null?void 0:n[c]:void 0,y=he.formatListDisplayValue(e[f]);if(!g||!c){u.push({text:y});continue}if(l.has(c))continue;l.add(c);const{data:p}=g;if(E(p)){s||u.push({text:a(c,p.afterValue??e[f],y),valueDiffKey:c,diff:g});continue}if(k(p)){s&&u.push({text:a(c,p.beforeValue??e[f],y),valueDiffKey:c,diff:g});continue}q(p)&&u.push({text:s?a(c,p.beforeValue??e[f],y):a(c,p.afterValue??e[f],y),valueDiffKey:c,diff:g})}for(const[f,c]of Object.entries(n??{}))!c||l.has(f)||k(c.data)&&s&&(u.push({text:a(f,c.data.beforeValue,he.formatListDisplayValue(c.data.beforeValue)),valueDiffKey:f,diff:c}),l.add(f));return u.sort((f,c)=>o(f.valueDiffKey,f.text)-o(c.valueDiffKey,c.text))}static resolveMergedTextIndex(e,n){for(let t=0;t<e.length;t++)if(he.formatListDisplayValue(e[t])===n)return t;return e.length}static resolveWholeListSideEntries(e,n,t){const r=t===X,{data:a}=n;return E(a)?r?[]:(Array.isArray(a.afterValue)?a.afterValue:e).map(s=>({text:he.formatListDisplayValue(s)})):k(a)?r?(Array.isArray(a.beforeValue)?a.beforeValue:e).map(s=>({text:he.formatListDisplayValue(s)})):[]:q(a)?(r?Array.isArray(a.beforeValue)?a.beforeValue:e:Array.isArray(a.afterValue)?a.afterValue:e).map(s=>({text:he.formatListDisplayValue(s)})):e.map(o=>({text:he.formatListDisplayValue(o)}))}static resolvePartialListSideEntries(e,n,t){return this.resolveCore(e,n,t,r=>String(r),(r,a)=>he.formatListDisplayValue(a),(r,a)=>this.resolveMergedTextIndex(e,a)).map(({text:r,valueDiffKey:a})=>({text:r,valueDiffKey:a}))}static resolveValidationRowChipDisplayText(e,n,t,r){return t===void 0?r:Ca(e,n,t)}static findValidationRowSourceKeyDiffForDisplayIndex(e,n,t){if(n)return Object.keys(n).find(r=>ii(r,e)===t)}static resolveValidationRowPartialSideEntries(e,n,t,r){return this.resolveCore(n,t,r,a=>this.findValidationRowSourceKeyDiffForDisplayIndex(n,t,a),(a,o,s)=>this.resolveValidationRowChipDisplayText(e,a,o,s),(a,o)=>a!==void 0?ii(a,n):this.resolveMergedTextIndex(n,o)).map(({text:a,valueDiffKey:o})=>({text:a,valueDiffKey:o}))}static takeValueDiffAtKey(e,n){if(n)return e==null?void 0:e[n]}}class he{static escapeStringDisplayValue(e){return JSON.stringify(e).slice(1,-1)}static formatListDisplayValue(e){return typeof e=="string"?e===""?this.EMPTY_STRING_DISPLAY_VALUE:this.escapeStringDisplayValue(e):typeof e=="object"&&e!==null?JSON.stringify(e,null,2):JSON.stringify(e)}static isEmptyStringDisplayValue(e){return e===this.EMPTY_STRING_DISPLAY_VALUE}}M(he,"EMPTY_STRING_DISPLAY_VALUE","<empty string>");class V{}M(V,"TitleRow",Du),M(V,"MetaFlags",vu),M(V,"RequiredStar",Qa),M(V,"NodeLevel",Su),M(V,"Extensions",wu),M(V,"CustomAnnotations",Nu),M(V,"Default",Za),M(V,"Enum",ku),M(V,"Examples",Eu),M(V,"AllowedAdditionalPropertyNames",Au),M(V,"ValidationRows",eo),M(V,"ListSideEntries",Ze),M(V,"Format",he),M(V,"TypeLabel",bu);function Xn(i){return i.kind===Y.ROOT}function Tu(i){return i.kind===Y.ADDITIONAL_PROPERTIES}function An(i){if(i.type!==le.COMPLEX)return!1;const e=i.nestedNodes();return e.length===0?!1:Xn(i)?!0:e.every(n=>At(n.kind))}function Vu(i){return At(i)}function xu(i){var e;return Er((e=dn(i.value()))==null?void 0:e.type)}function Cu(i,e){return Er(V.TypeLabel.resolveTypeSideValue(i,e))}function no(i){var t;const n=(t=i.nestedNodes()[0])==null?void 0:t.kind;if(!(!n||!Vu(n)))return n}function to(i,e,n){const t=n.get(i.id);if(t){const r=e.find(a=>a.id===t);if(r)return r}return e[0]}function Lr(i,e){const n=[];let t=i;for(;t&&An(t);){const r=t.nestedNodes(),a=to(t,r,e);if(!a)break;const o=ql(t);if(n.push({combinerNode:t,nestedNodes:r,selectedNestedNode:a,showSelector:o.showSelector,combinerKindLabel:no(t)}),An(a)){t=a;continue}break}return n}function jr(i,e){let n=i;for(;An(n);){const t=n.nestedNodes(),r=to(n,t,e);if(!r)break;n=r}return n}const Ru=new Map;function ro(i){return jr(i,Ru)}function io(i,e,n,t){const r=new Map(e);r.set(n,t);const a=new Set(Lr(i,r).map(o=>o.combinerNode.id));for(const o of r.keys())a.has(o)||r.delete(o);return r}function _t(i){var t;const e=i.value();if(e!==null)return typeof e=="boolean"?null:e;const n=(t=i.meta())==null?void 0:t._fragment;return!T(n)||gt(n)?null:n}function ao(i){if(i.type===le.SIMPLE)return i.childrenNodes();const e=i.nestedNodes();return e.length>0&&e.every(n=>!At(n.kind))?e:i.childrenNodes()}function Qn(i){if(!An(i))return"";const e=no(i);return e?` (${e})`:""}function oo(i,e,n=ze(_t(i),i.meta())+Qn(i)){const t={title:n,node:i,testId:`json-schema-combiner-option-${e}`};if(!ve(i))return t;const r=V.NodeLevel.isWholePropertyAddOrRemove(i);return{...t,diffs:i.diffs,...r?{}:{diffsSummary:i.diffsSummary,descendantDiffsSummary:i.descendantDiffsSummary}}}function Zn(i,e,n){const t=(n==null?void 0:n.flags.before.increaseLevel)??!0,r=(n==null?void 0:n.flags.after.increaseLevel)??!0;return{beforeLevel:Math.max(t?i+1:i,0),afterLevel:Math.max(r?e+1:e,0)}}const Mu=new $a;function _u(i){return i!=null}function qu(i){return Object.keys(ar).some(e=>!!V.ValidationRows.takeDiff(i,e)||!!V.ValidationRows.takeColorizingDiff(i,e))}class Hu{resolveNodeVisibility(e,n){const t=e.value(),r=dn(t),a=Mu.resolveNodeVisibility(t,n),o=ea(n),s=o&&(!!(r!=null&&r.description)||!!e.diffs.description),l=o&&(a.showEnumValuesRow||!!V.Enum.takeDiff(e)||!!V.Enum.takeValueDiffs(e)||!!V.Enum.takeRowColorizingDiff(e)),u=o&&(_u(r==null?void 0:r.default)||!!V.Default.takeDiff(e)||!!V.Default.takeRowColorizingDiff(e)),f=o&&(a.showExamplesRow||!!V.Examples.takeDiff(e)||!!V.Examples.takeValueDiffs(e)||!!V.Examples.takeRowColorizingDiff(e)),c=o&&(za(t).length>0||qu(e)),g=o&&(a.showCustomAnnotationsRow||V.CustomAnnotations.hasAnyDiff(e)),y=u||f||l||c||a.showExtensionsRow||g,p=s||a.showDeprecationReasonRow||y;return{...a,showDescription:s,showDefaultRow:u,showExamplesRow:f,showEnumValuesRow:l,showValidationsSection:c,showCustomAnnotationsRow:g,showContentSection:p,showAnyAdditionalInfoRow:y}}resolveListLastRowFlags(e,n){return Or(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return gu(e,n)}}const Ou=new Hu;function Jr(i,e){return Ou.resolveNodeVisibility(i,e)}const Pu="markdown-text-row__json-schema-description",Iu="markdown-text-row__json-schema-expander",Lu=i=>{const{isExpandable:e,expanded:n,onToggle:t,expanderClassName:r}=i;return e?d.jsx("div",{className:"mt-1",children:d.jsx("a",{className:`${r} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})}):null};function ju(i,e,n){if(!e)return{resolvedValue:i,isInvisible:!1};const{data:t}=e,r=n===X;return E(t)?r?{resolvedValue:"",isInvisible:!0}:{resolvedValue:typeof t.afterValue=="string"?t.afterValue:i,isInvisible:!1}:k(t)?r?{resolvedValue:typeof t.beforeValue=="string"?t.beforeValue:i,isInvisible:!1}:{resolvedValue:"",isInvisible:!0}:q(t)?{resolvedValue:r?typeof t.beforeValue=="string"?t.beforeValue:i:typeof t.afterValue=="string"?t.afterValue:i,isInvisible:!1}:{resolvedValue:i,isInvisible:!1}}function Ju(i){switch(i){case K.body1:return"text-value-body1";case K.h1:case K.h2:case K.h3:case K.h4:case K.h5:case K.h6:return"text-value-body2";case K.body2:default:return"text-value-body2"}}function Fu(i,e){return i===Te.JsonSchemaDescription?{markdownClassName:Pu,expanderClassName:Iu}:{markdownClassName:["text-slate-700",Ju(e)].join(" "),expanderClassName:`text-value-expander ${Ns(e)}`.trim()}}const so=m.memo(i=>{const{value:e,variant:n=K.body2,usage:t,layoutSide:r,diff:a}=i,[o,s]=m.useState(!1),{resolvedValue:l,isInvisible:u}=m.useMemo(()=>ju(e,a,r),[a,r,e]),f=m.useMemo(()=>o?l:Ss(l),[o,l]),c=m.useMemo(()=>ws(l),[l]),g=m.useMemo(()=>Fu(t,n),[t,n]),y=m.useMemo(()=>{if(!(a!=null&&a.data))return[];const w=r===X?a.styles.before:a.styles.after,N=[];return w.textHighlighterColor&&N.push(ne.highlighter(w.textHighlighterColor)),N},[a,r]),p=m.useMemo(()=>["markdown",g.markdownClassName].filter(Boolean).join(" "),[g.markdownClassName]),h=m.useMemo(()=>({p:({children:w})=>d.jsx("p",{children:w})}),[]),b=m.useCallback(()=>{s(w=>!w)},[]);return u||!f?null:d.jsxs("div",{className:`markdown-text-row flex min-w-0 flex-col items-start gap-1 ${y.join(" ")}`,children:[d.jsx(_s,{className:p,remarkPlugins:[qs],components:h,children:f}),d.jsx(Lu,{isExpandable:c,expanded:o,onToggle:b,expanderClassName:g.expanderClassName})]})});so.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextValue",props:{value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""}}};const Ku={[Te.DdlApiProperty]:ks,[Te.JsonSchemaDescription]:hr},Gu={[Te.DdlApiProperty]:["min-h-[26px]"]};function Bu(i){const e=Ku[i]??Yn,n=Gu[i]??[];return[e,...n].join(" ")}function Uu(i,e,n){return n===Te.DdlApiProperty?As.PropertyRow.isContentVisible(i,e):i!=null&&i.data?(e===X?i.styles.before:i.styles.after).isContentVisible??!0:!0}const ct=m.memo(i=>{const{value:e,variant:n=K.body2,layoutSide:t,usage:r=Te.Default,hideLevelIndicatorWhenSideEmpty:a=!1,diff:o}=i,{[te]:s}=i,l=br(t),u=r===Te.DdlApiProperty,f=u||r===Te.JsonSchemaDescription,c=m.useMemo(()=>Uu(o,t,r),[o,t,r]),g=r===Te.JsonSchemaDescription&&l===0,y=f&&l>0&&(!a||c),p=m.useMemo(()=>{if(!(o!=null&&o.data))return[];const{styles:w}=o,N=[];return t===X&&N.push(ne.background(w.before.backgroundColor)),t===ae&&N.push(ne.background(w.after.backgroundColor)),N},[o,t]),h=m.useMemo(()=>Bu(r),[r]),b=d.jsx(so,{value:e,variant:n,usage:r,layoutSide:t,diff:o});return d.jsxs("div",{"data-precededby":s,className:["markdown-text-row-content flex w-full h-full gap-2",u||r===Te.JsonSchemaDescription?"items-stretch":"",h,...p].filter(Boolean).join(" "),children:[g&&d.jsx(Es,{}),y&&d.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Dt,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),u?d.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):r===Te.JsonSchemaDescription?d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-start gap-2",children:b}):b]})});ct.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fr=m.memo(i=>{const e=qe(),{diffsSeverities:n,diffsSeverityPlacement:t=H.DescriptionRow}=i,r=m.useMemo(()=>n==null?void 0:n[t],[n,t]),a=m.useMemo(()=>r==null?void 0:r.type,[r]),o=m.useMemo(()=>Wn(r==null?void 0:r.causedAt),[r]);switch(e){case _e:return d.jsx(_n,{diffType:a,diffTypeCause:o,hidden:!1,children:d.jsx(pn,{left:d.jsx(ct,{...i,layoutSide:X}),right:d.jsx(ct,{...i,layoutSide:ae})})});case nn:return d.jsx(gn,{content:d.jsx(ct,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});fr.__docgenInfo={description:"",methods:[],displayName:"MarkdownTextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"TextValueVariant"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Wu(i){return i?Je({min:i.minimum,max:i.maximum,exclusiveMin:i.exclusiveMinimum,exclusiveMax:i.exclusiveMaximum}):{data:{},visible:!1}}const fn={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:De.UNIQUE_ITEMS};function $t(i,e,n,t){const r=Je({min:i,max:e,exclusiveMin:n,exclusiveMax:t});return r.visible?[r.data.lower,r.data.upper].filter(a=>!!a):[]}function Yu(i){const e=Wu(i);return e.visible?[e.data.lower,e.data.upper].filter(n=>!!n):[]}function zu(i){if(!i)return[];const e=[],n=Ya(i),t=$t(n.minLength,n.maxLength);t.length&&e.push({key:fn.VALUE_LENGTH,label:oa,values:t}),n.pattern!==void 0&&e.push({key:fn.VALUE_PATTERN,label:sa,values:[String(n.pattern)]});const r=Yu(n);r.length&&e.push({key:fn.VALUE_RANGE,label:la,values:r}),n.multipleOf!==void 0&&e.push({key:fn.VALUE_MULTIPLE_OF,label:da,values:[String(n.multipleOf)]});const a=$t(n.minProperties,n.maxProperties);a.length&&e.push({key:fn.PROPERTIES_COUNT,label:ua,values:a}),n.uniqueItems!==void 0&&e.push({key:fn.UNIQUE_ITEMS,label:fa,values:[String(n.uniqueItems)]});const o=$t(n.minItems,n.maxItems);return o.length&&e.push({key:fn.ITEMS_COUNT,label:ca,values:o}),e}const di=[ce.VALUE_LENGTH,ce.VALUE_PATTERN,ce.VALUE_RANGE,ce.VALUE_MULTIPLE_OF,ce.PROPERTIES_COUNT,ce.UNIQUE_ITEMS,ce.ITEMS_COUNT];function $u(i){return[...i].sort((e,n)=>di.indexOf(e.key)-di.indexOf(n.key))}const lo=i=>{const{extensions:e,extensionsDiffs:n,extensionsRowColorizingDiff:t,diffsSeverities:r}=i,a=yn(),o=a+1,s=xe(),l=On(),{ExtensionsJsoComponent:u,ExtensionsJsoDiffsComponent:f}=lu(),c=qn(),g=(c==null?void 0:c.beforeLevel)??a,y=(c==null?void 0:c.afterLevel)??a,{beforeLevel:p,afterLevel:h}=m.useMemo(()=>Zn(g,y,t),[g,y,t]),b=!!n&&Object.keys(n).length>0,w=m.useMemo(()=>!b||!l?e:{...e,[l.diffsMetaKey]:n},[l,e,n,b]);return d.jsx(He.Provider,{value:o,children:d.jsx(Qe,{beforeLevel:p,afterLevel:h,children:d.jsxs("div",{className:"flex flex-col",children:[d.jsx(In,{title:"Extensions",usage:Fe.JsonSchema,lastInvisible:!0,diff:t,diffsSeverities:r,diffsSeverityPlacement:H.ExtensionsRow}),l?d.jsx(f,{mergedSource:w,initialLevel:o,displayMode:s,diffMetaKeys:l}):d.jsx(u,{source:e,initialLevel:o})]})})})};lo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExtensionsSection",props:{extensions:{required:!0,tsType:{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"unknown"}],raw:"Record<OpenApiExtensionKey, unknown>"},description:""},extensionsDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"literal",value:"`${typeof OPEN_API_EXTENSION_PREFIX}${string}`"},{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>"}],raw:"Record<OpenApiExtensionKey, Diff<DiffType>>"}],raw:"Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>"},description:""},extensionsRowColorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const mn=m.memo(i=>{const{layoutSide:e,sideItems:n}=i;return n.length?d.jsx("div",{className:"flex flex-wrap items-start gap-2",children:n.map((t,r)=>{const a=na(t.diff,e);return d.jsx(Ts,{isVisible:!0,value:t.text,usage:Vs.JsonSchemaValidation,textHighlighterColor:a.textHighlighterColor,borderShadowColor:a.borderShadowColor,isFontMuted:a.isFontMuted,isEmptyStringPlaceholder:V.Format.isEmptyStringDisplayValue(t.text)},`${t.text}-${r}`)})}):null});mn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaValidationChips",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},sideItems:{required:!0,tsType:{name:"unknown"},description:""}}};const ui={valueLength:oa,valuePattern:sa,valueRange:la,valueMultipleOf:da,propertiesCount:ua,itemsCount:ca,uniqueItems:fa};function Xu(i){return ve(i)&&(i.kind===Y.PROPERTY||i.kind===Y.ROOT)}const et=i=>{const{node:e,displayValue:n,isLastInList:t=!1}=i,r=xe(),a=n??e.value(),o=dn(a),s=Xu(e)?e:void 0,l=ve(e)?e:void 0,u=m.useMemo(()=>s&&n===void 0?Jr(s,r):$n(a,r),[r,n,s,a]),f=m.useMemo(()=>l?V.Enum.takeDiff(l):void 0,[l]),c=m.useMemo(()=>l?V.Enum.takeValueDiffs(l):void 0,[l]),g=m.useMemo(()=>l?V.Enum.takeRowColorizingDiff(l):void 0,[l]),y=m.useMemo(()=>l?V.Examples.takeDiff(l):void 0,[l]),p=m.useMemo(()=>l?V.Examples.takeValueDiffs(l):void 0,[l]),h=m.useMemo(()=>l?V.Examples.takeRowColorizingDiff(l):void 0,[l]),b=m.useMemo(()=>l?V.Default.takeDiff(l):void 0,[l]),w=m.useMemo(()=>l?V.Default.takeRowColorizingDiff(l):void 0,[l]),N=m.useMemo(()=>l?V.Extensions.takeDiffs(l):void 0,[l]),C=m.useMemo(()=>l?V.Extensions.takeRowColorizingDiff(l):void 0,[l]),D=zn(e,ve),A=m.useMemo(()=>ie(D,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[D]),j=m.useMemo(()=>{const I=zu(o);if(!l)return I;const B=new Set(I.map(z=>z.key)),U=Object.keys(ui).filter(z=>!B.has(z)).filter(z=>V.ValidationRows.hasSemanticDiffs(l,z)).map(z=>({key:z,label:ui[z],values:[]}));return $u([...I,...U])},[l,o]),_=m.useMemo(()=>{var U;if(!Tu(e))return;const I=e.parent,B=dn((I==null?void 0:I.value())??null);return(U=B==null?void 0:B.propertyNames)==null?void 0:U.enum},[e]),J=m.useMemo(()=>l?V.AllowedAdditionalPropertyNames.takeDiff(l):void 0,[l]),O=m.useMemo(()=>l?V.AllowedAdditionalPropertyNames.takeValueDiffs(l):void 0,[l]),P=m.useMemo(()=>l?V.AllowedAdditionalPropertyNames.takeRowColorizingDiff(l):void 0,[l]),W=r===ds&&!!(_!=null&&_.length),de=m.useCallback(I=>{const B=V.AllowedAdditionalPropertyNames.resolveSideEntries(_??[],J,O,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(mn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:V.ListSideEntries.takeValueDiffAtKey(O,z)}))})},[_,J,O]),Z=m.useCallback(I=>{const B=V.Enum.resolveSideEntries((o==null?void 0:o.enum)??[],f,c,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(mn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:V.ListSideEntries.takeValueDiffAtKey(c,z)}))})},[f,c,o==null?void 0:o.enum]),oe=m.useCallback(I=>{const B=V.Examples.resolveSideEntries((o==null?void 0:o.examples)??[],y,p,I);return B.length===0?d.jsx(d.Fragment,{}):d.jsx(mn,{layoutSide:I,sideItems:B.map(({text:U,valueDiffKey:z})=>({text:U,diff:V.ListSideEntries.takeValueDiffAtKey(p,z)}))})},[y,p,o==null?void 0:o.examples]),Ge=m.useCallback((I,B)=>U=>{const z=V.CustomAnnotations.resolveSideEntries(I,B,U);return z.length===0?d.jsx(d.Fragment,{}):d.jsx(mn,{layoutSide:U,sideItems:z.map(({text:re})=>({text:re,diff:B}))})},[]),bn=m.useCallback(I=>{const B=o==null?void 0:o.default,U=V.Default.resolveSideEntries(B,b,I);return U.length===0?d.jsx(d.Fragment,{}):d.jsx(mn,{layoutSide:I,sideItems:U.map(({text:z})=>({text:z,diff:b}))})},[b,o==null?void 0:o.default]),se=m.useCallback((I,B)=>U=>{const z=l?V.ValidationRows.takeDiff(l,I):void 0,re=l?V.ValidationRows.takeValueDiffs(l,I):void 0,we=V.ValidationRows.resolveSideEntries(I,B,z,re,U,I===ce.VALUE_RANGE&&l?{nodeValue:a,crawlDiffs:V.ValidationRows.takeValueRangeCrawlDiffs(l)??{}}:void 0);return we.length===0?d.jsx(d.Fragment,{}):d.jsx(mn,{layoutSide:U,sideItems:we.map(({text:Ln,valueDiffKey:tt})=>({text:Ln,diff:V.ListSideEntries.takeValueDiffAtKey(re,tt)}))})},[l,a]);return d.jsxs(d.Fragment,{children:[u.showDeprecationReasonRow&&u.deprecationReason&&d.jsx(fr,{usage:Te.JsonSchemaDescription,value:`**Deprecation reason:** ${u.deprecationReason}`}),u.showDescription&&((o==null?void 0:o.description)||A.diff)&&d.jsx(fr,{usage:Te.JsonSchemaDescription,value:(o==null?void 0:o.description)??"",...A}),u.showDefaultRow&&d.jsx(vn,{label:"Default",usage:Sn.JsonSchemaValidation,subheader:bn,colorizingDiff:w,diffsSeverities:b||w?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.DefaultRow}),u.showExamplesRow&&d.jsx(vn,{label:"Examples",usage:Sn.JsonSchemaValidation,subheader:oe,diff:y,colorizingDiff:h,diffsSeverities:y||p||h?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.ExamplesRow}),u.showEnumValuesRow&&d.jsx(vn,{label:"Allowed values",usage:Sn.JsonSchemaValidation,subheader:Z,diff:f,colorizingDiff:g,diffsSeverities:f||c||g?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.EnumRow,...Or(t,{...u,showDefaultRow:!1,showExamplesRow:!1})}),u.showCustomAnnotationsRow&&Object.entries((o==null?void 0:o.customAnnotations)??{}).map(([I,B])=>{const U=l?V.CustomAnnotations.takeDiff(l,I):void 0,z=l?V.CustomAnnotations.takeRowColorizingDiff(l,I):void 0;return d.jsx(vn,{label:B.label,usage:Sn.JsonSchemaValidation,subheader:Ge(B.value,U),colorizingDiff:z,diffsSeverities:U||z?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.CustomAnnotationRow},I)}),W&&d.jsx(vn,{label:Hs,usage:Sn.JsonSchemaValidation,subheader:de,diff:J,colorizingDiff:P,diffsSeverities:J||O||P?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:H.AllowedAdditionalPropertyNamesRow}),u.showValidationsSection&&j.map(I=>{const B=I.key,U=l?V.ValidationRows.takeDiff(l,B):void 0,z=l?V.ValidationRows.takeColorizingDiff(l,B):void 0;return d.jsx(vn,{label:I.label,usage:Sn.JsonSchemaValidation,subheader:se(B,I.values),diff:U,colorizingDiff:z,diffsSeverities:l&&V.ValidationRows.hasSemanticDiffs(l,B)?D==null?void 0:D.nodeDiffsSeverities:void 0,diffsSeverityPlacement:Qi[B]},I.key)}),u.showExtensionsRow&&(o==null?void 0:o.extensions)&&d.jsx(lo,{extensions:o.extensions,extensionsDiffs:N,extensionsRowColorizingDiff:C,diffsSeverities:C?D==null?void 0:D.nodeDiffsSeverities:void 0})]})};et.__docgenInfo={description:"",methods:[],displayName:"SchemaNodePlainContent",props:{node:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`}]},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodeStoredValue | null",elements:[{name:"unknown"},{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Fr=i=>{const{requiredChanged:e,readOnly:n,readOnlyDiff:t,writeOnly:r,writeOnlyDiff:a,deprecated:o,deprecatedDiff:s,requiredDiff:l,layoutSide:u}=i,f=qe(),c=!!n||!!t,g=!!r||!!a,y=!!o||!!s;return!e&&!c&&!g&&!y?null:d.jsxs("div",{className:"flex flex-row gap-2 justify-between",children:[e&&d.jsx(at,{label:Os,layoutMode:f,layoutSide:u,diff:l==null?void 0:l.data}),c&&d.jsx(at,{label:Ps,colorSchema:$r,layoutMode:f,layoutSide:u,diff:t==null?void 0:t.data}),g&&d.jsx(at,{label:Is,colorSchema:$r,layoutMode:f,layoutSide:u,diff:a==null?void 0:a.data}),y&&d.jsx(at,{label:Ls,colorSchema:js,layoutMode:f,layoutSide:u,diff:s==null?void 0:s.data})]})};Fr.__docgenInfo={description:"",methods:[],displayName:"TagsWithDiffs",props:{requiredChanged:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},readOnlyDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Qu(i){const e=!!i.diffs[R],n=V.RequiredStar.takeMetaDiff(i);return{requiredChanged:!e&&!!n,requiredDiff:n,readOnlyDiff:V.MetaFlags.takeReadOnlyDiff(i),writeOnlyDiff:V.MetaFlags.takeWriteOnlyDiff(i),deprecatedDiff:V.MetaFlags.takeDeprecatedDiff(i)}}const Zu="#64748B",uo="#94A3B8",en=m.memo(i=>{const{text:e,color:n,className:t}=i,r=n===void 0?Zu:n;return d.jsx("span",{className:"json-schema-type-value-text",style:r?{color:r}:void 0,children:t?d.jsx("span",{className:t,children:e}):e})});en.__docgenInfo={description:"Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide\nwhether to render it at all.\n\n`className` (diff/highlighter classes) is applied to an INNER span, not the outer one, so it\nnever becomes a direct flex item of an ancestor `inline-flex` container (e.g.\n`.json-schema-type-value-segments`). A flex item's `display` is CSS-blockified - an `inline`\nbox becomes `block` - which makes `line-height` (not font metrics) determine the painted\nheight of a highlighter background, rendering it ~1px taller than legacy's equivalent\n(`NodeType.tsx`'s `.inline` divs, which stay genuinely inline because they're nested one level\nbelow their `inline-flex` ancestor). Keeping the highlighted element on a non-flex-item\ndescendant reproduces legacy's inline box-painting exactly.",methods:[],displayName:"JsonSchemaTypeValueText",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).\n`null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector\nbutton's own selected/unselected text color) applies instead. A string -> used as-is."},className:{required:!1,tsType:{name:"string"},description:""}}};const fo=m.memo(i=>{const{value:e,meta:n,suffix:t}=i;return d.jsxs(d.Fragment,{children:[d.jsx(en,{text:ze(e,n)}),t&&d.jsx(en,{text:t})]})});fo.__docgenInfo={description:"Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the\ntitle row always shows the type value; visibility for special cases (e.g. boolean\n`additionalProperties`) is decided by the caller's `showTypeLabel` gate.",methods:[],displayName:"JsonSchemaTitleRowTypeValue",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`},{name:"null"},{name:"undefined"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Plain, non-diff-highlighted trailing text (e.g. `resolveCombinerOptionTitleSuffix`'s\n`\" (anyOf)\"`) appended after the type value - used when this title row belongs to a\ncombiner-owning property, matching legacy's `NodeType.tsx` `{type} ({combiner})` display."}}};const cr=m.memo(i=>{const{text:e,diff:n,layoutSide:t,color:r}=i,a=na(n,t),o=[ne.highlighter(a.textHighlighterColor),ne.background(a.backgroundColor)].filter(Boolean).join(" ");return d.jsx(en,{text:e,color:r,className:o||void 0})});cr.__docgenInfo={description:`Diff-wrapper layer: computes highlighter/background chrome for one text segment and hands
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const qt=m.memo(i=>{const{display:e,layoutSide:n,color:t}=i;return e.kind===We.NO_DIFFS?d.jsx(en,{text:e.text,color:t}):e.kind===We.WHOLE_DIFFS?d.jsx(cr,{text:e.text,diff:e.diff,layoutSide:n,color:t}):d.jsx("span",{className:"json-schema-type-value-segments inline-flex items-center",children:e.segments.map((r,a)=>d.jsx(cr,{text:r.text,diff:r.diff,layoutSide:n,color:t},`${r.text}-${a}`))})});qt.__docgenInfo={description:`Local SideListDisplay renderer for JSON Schema type-value text, independent of
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const co=m.memo(i=>{const{node:e,meta:n,layoutSide:t,suffix:r}=i,a=V.TypeLabel.resolveSideDisplay(e,n,t);return d.jsxs(d.Fragment,{children:[d.jsx(qt,{display:a,layoutSide:t}),r&&d.jsx(en,{text:r})]})});co.__docgenInfo={description:`Title-row type-value orchestrator, with diffs. Never hides on primitiveness (see plain
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},suffix:{required:!1,tsType:{name:"string"},description:"See the plain sibling's `suffix` prop (JsonSchemaTitleRowTypeValue) - same contract."}}};const mo=i=>{const{value:e,meta:n,isCycle:t,layoutSide:r,showTypeLabel:a=!0,typeValueSuffix:o}=i;return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[a&&d.jsx(fo,{value:e,meta:n,suffix:o}),t&&d.jsx(kr,{text:ma,children:d.jsx(ya,{})}),d.jsx(Fr,{readOnly:n==null?void 0:n.readOnly,writeOnly:n==null?void 0:n.writeOnly,deprecated:n==null?void 0:n.deprecated,layoutSide:r})]})},yo=i=>{const{meta:e,node:n,isCycle:t,layoutSide:r,showTypeLabel:a=!0,typeValueSuffix:o}=i,s=Qu(n);return d.jsxs("div",{className:"flex flex-row items-center gap-2",children:[a&&d.jsx(co,{node:n,meta:e,layoutSide:r,suffix:o}),t&&d.jsx(kr,{text:ma,children:d.jsx(ya,{})}),d.jsx(Fr,{readOnly:e==null?void 0:e.readOnly,writeOnly:e==null?void 0:e.writeOnly,deprecated:e==null?void 0:e.deprecated,layoutSide:r,...s})]})};mo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheader",props:{value:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeValue | null | undefined",elements:[{name:"unknown"},{name:"null"},{name:"undefined"}]},description:""},meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:'See JsonSchemaTitleRowTypeValue\'s `suffix` prop - combiner-kind suffix, e.g. " (anyOf)".'}}};yo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaTitleSubheaderWithDiffs",props:{meta:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNodeMeta | null | undefined",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},showTypeLabel:{required:!1,tsType:{name:"boolean"},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:""}}};const an={BADGE:"badge",TEXT:"text"},ef="Type: ",fi="additional property",nf="no additional properties",tf="additional item",rf="item";function af(i){const{node:e,meta:n,headerRowTitle:t}=i,r=e.kind;return Xn(e)?{variant:an.TEXT,text:t??ef}:r===Y.ADDITIONAL_PROPERTIES?((n==null?void 0:n._fragment)??e.value())===!1?{variant:an.BADGE,text:nf,badgeKind:us}:{variant:an.BADGE,text:fi,badgeKind:rt}:r===Y.PATTERN_PROPERTY?{variant:an.BADGE,text:fi,badgeKind:rt}:r===Y.ITEMS?{variant:an.BADGE,text:rf,badgeKind:rt}:r===Y.ADDITIONAL_ITEMS?{variant:an.BADGE,text:tf,badgeKind:rt}:r===Y.ITEM?{variant:an.TEXT,text:`[${String(e.key)}]`}:{variant:an.TEXT,text:String(e.key)}}function of(i,e){const n=(e==null?void 0:e._fragment)??i.value();return i.kind===Y.ADDITIONAL_PROPERTIES&&n===!1}const go=i=>{const{required:e,requiredDiff:n,layoutSide:t}=i,r=qe(),{isSideBySideDiffsLayoutMode:a}=fs(r);return t===void 0||!(a?V.RequiredStar.isVisibleOnSide(e,n,t):e)?null:d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})};go.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRequiredDiffIndicator",props:{required:{required:!0,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const po="text-xs text-black font-Inter-Medium",ho=i=>{const{display:e,required:n=!1}=i;switch(e.variant){case"badge":return d.jsx(Wi,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${po}`,children:[e.text,n&&d.jsx("sup",{className:"ml-0.5 text-red-500",children:"*"})]})}},bo=i=>{const{display:e,required:n=!1,requiredDiff:t,layoutSide:r}=i;switch(e.variant){case"badge":return d.jsx(Wi,{kind:e.badgeKind,text:e.text,inline:!0});case"text":return d.jsxs("div",{className:`inline ${po}`,children:[e.text,d.jsx(go,{required:n,requiredDiff:t,layoutSide:r})]})}};ho.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitlePlain"};bo.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeTitleWithDiffs",props:{display:{required:!0,tsType:{name:"union",raw:`| { variant: typeof JsonSchemaNodeTitleVariants.BADGE; text: string; badgeKind: BadgeKind }
| { variant: typeof JsonSchemaNodeTitleVariants.TEXT; text: string }`,elements:[{name:"signature",type:"object",raw:"{ variant: typeof JsonSchemaNodeTitleVariants.BADGE; text: string; badgeKind: BadgeKind }",signature:{properties:[{key:"variant",value:{name:"JsonSchemaNodeTitleVariants.BADGE",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}}]}},{name:"signature",type:"object",raw:"{ variant: typeof JsonSchemaNodeTitleVariants.TEXT; text: string }",signature:{properties:[{key:"variant",value:{name:"JsonSchemaNodeTitleVariants.TEXT",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredDiff:{required:!1,tsType:{name:"Diff"},description:""},layoutSide:{required:!1,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function sf(i){const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,requiredDiff:o,withRequiredDiffIndicator:s=!1,titleRowDiff:l}=i,u=Vr(),f=e.meta(),c=dn(t??n.value()),g=n.meta(),y=m.useMemo(()=>Or(a,r),[r,a]),p=m.useMemo(()=>af({node:e,meta:f,headerRowTitle:u==null?void 0:u.headerRowTitle}),[u==null?void 0:u.headerRowTitle,f,e]),h=m.useMemo(()=>w=>{const N=ta(l);return(N?ra(N,w):xs(l,w))?s?d.jsx(bo,{display:p,required:f==null?void 0:f.required,requiredDiff:o,layoutSide:w}):d.jsx(ho,{display:p,required:f==null?void 0:f.required}):null},[f==null?void 0:f.required,o,p,l,s]),b=m.useMemo(()=>!of(n,g),[g,n]);return{displayValueResolved:c,displayMeta:g,listLastRowFlags:y,titleContent:h,showTypeSubheader:b}}const Kr=i=>{const{ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,requiredDiff:f,withRequiredDiffIndicator:c=!1,renderSubheader:g,[te]:y}=i,{displayValueResolved:p,displayMeta:h,listLastRowFlags:b,titleContent:w,showTypeSubheader:N}=sf({ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,requiredDiff:f,withRequiredDiffIndicator:c,titleRowDiff:u==null?void 0:u.diff});return d.jsx(me,{...b,"data-precededby":y,titleContent:w,expandable:o,expanded:s,isRoot:Xn(e),onClickExpander:o?l:void 0,variant:K.body2,subheader:C=>g({layoutSide:C,displayValueResolved:p,displayMeta:h,displayNode:n,showTypeSubheader:N}),usage:kt.JsonSchemaProperty,...u})};Kr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowBase",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"union",raw:"JsonSchemaTreeNode<K> | JsonSchemaTreeNodeWithDiffs<K>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`}],required:!0}},{key:"showTypeSubheader",value:{name:"boolean",required:!0}}]}},name:"context"}],return:{name:"ReactElement"}}},description:""}}};const Gr=i=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,typeValueSuffix:u,...f}=i;return d.jsx(Kr,{...f,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,expandable:o,expanded:s,onClickExpander:l,renderSubheader:({layoutSide:c,displayValueResolved:g,displayMeta:y,displayNode:p,showTypeSubheader:h})=>d.jsx(mo,{value:g,meta:y,isCycle:p.isCycle,layoutSide:c,showTypeLabel:h,typeValueSuffix:u})})};Gr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
}`,signature:{properties:[{key:"showDescription",value:{name:"boolean",required:!0}},{key:"showDeprecationReasonRow",value:{name:"boolean",required:!0}},{key:"deprecationReason",value:{name:"string",required:!1}},{key:"showDefaultRow",value:{name:"boolean",required:!0}},{key:"showExamplesRow",value:{name:"boolean",required:!0}},{key:"showEnumValuesRow",value:{name:"boolean",required:!0}},{key:"showValidationsSection",value:{name:"boolean",required:!0}},{key:"showExtensionsRow",value:{name:"boolean",required:!0}},{key:"showCustomAnnotationsRow",value:{name:"boolean",required:!0}},{key:"showContentSection",value:{name:"boolean",required:!0}},{key:"showAnyAdditionalInfoRow",value:{name:"boolean",required:!0}}]}},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const Do=m.memo(i=>{const{node:e}=i,n=ro(e),t=ze(_t(n),n.meta())+Qn(e);return d.jsx(en,{text:t,color:null})});Do.__docgenInfo={description:"Combiner-selector option button content, plain (no diffs). Displays the type value of the\nleaf reached by always taking the first nested variant recursively (see\n`resolveCombinerOptionLeafNode`), with a trailing \" (combinerKind)\" suffix when `node` (the\noption itself, not the resolved leaf) is itself a combiner owner. `color={null}` leaves text\ncolor to the button's own CSS (selected/unselected state), not the leaf's title-row default.",methods:[],displayName:"JsonSchemaCombinerOptionTypeValue",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const ci=new Set;function Ht(i){const{options:e,selectedOption:n,onSelectOption:t,variant:r,layoutSide:a=ae}=i;return e.length===0?null:d.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:e.map(o=>{const{diffsRelatedClassesList:s,isInvisible:l}=lf({diffs:o.diffs,diffsSummary:o.diffsSummary,descendantDiffsSummary:o.descendantDiffsSummary,layoutSide:a});if(l)return null;const u=s.join(" "),f=typeof o.title=="function"?o.title(a):o.title;return d.jsx("button",{"data-testid":o.testId,className:`button-selector-option button-selector-option_${r} ${n===o?"selected":""} ${u}`,onClick:c=>{c.preventDefault(),c.stopPropagation(),t(o)},children:f},o.node.id)})})}function lf(i){const{diffs:e,diffsSummary:n,descendantDiffsSummary:t,layoutSide:r}=i,a=[];let o=!1;if(e||n||t){const s=e==null?void 0:e[R];if(s){const{styles:l}=s;switch(r){case X:s.inherited||a.push(ne.borderShadow(l.before.borderShadowColor)),o=s.data.action===L.add;break;case ae:s.inherited||a.push(ne.borderShadow(l.after.borderShadowColor)),o=s.data.action===L.remove;break}}if(!(s!=null&&s.inherited)&&(n||t)){const l=n??ci,u=t??ci,f=new Set([...l,...u]),c=cs(f);a.push(c?ne.roundMarker(c):"")}}return{diffsRelatedClassesList:a,isInvisible:o}}Ht.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};var Ot=(i=>(i.Primary="primary",i.Secondary="secondary",i))(Ot||{});function df(i,e){if(!i)return"";const n=e===X?i.styles.before.backgroundColor:i.styles.after.backgroundColor;return ne.background(n)}const uf=m.memo(i=>{const{options:e,selectedOption:n,onSelectOption:t,selectorRowDiff:r,layoutSide:a,levelReductionAction:o}=i,s=br(a),l=m.useMemo(()=>Xa(s,a,o),[s,a,o]),u=m.useMemo(()=>df(r,a),[a,r]);return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row-content",className:`json-schema-combiner-selector-row-content flex w-full items-stretch gap-2 ${hr} ${u}`.trim(),children:[d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Dt,{level:l}),d.jsx("div",{className:"w-4","aria-hidden":"true"})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-w-0 flex-1 items-center",children:d.jsx(Ht,{options:e,selectedOption:n,onSelectOption:t,variant:Ot.Secondary,layoutSide:a})})]})}),Xt=m.memo(i=>{const{combinerKindLabel:e,showSelector:n=!0,selectorRowDiff:t}=i;return d.jsxs("div",{"data-testid":"json-schema-combiner-selector-row",className:"json-schema-combiner-selector-row flex w-full flex-col",children:[e&&d.jsx(Gn,{title:e,usage:Fe.JsonSchema,lastInvisible:!0,layoutSide:i.layoutSide,diff:t,levelReductionAction:i.levelReductionAction}),n&&d.jsx(uf,{...i})]})}),Br=m.memo(i=>{const{combinerKindLabel:e,showSelector:n=!0,diffsSeverities:t}=i,r=qe(),a=m.useMemo(()=>t==null?void 0:t[H.TitleRow],[t]),o=m.useMemo(()=>a==null?void 0:a.type,[a]),s=m.useMemo(()=>Wn(a==null?void 0:a.causedAt),[a]);if(!n&&!e)return null;switch(r){case _e:return d.jsx(_n,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(pn,{left:d.jsx(Xt,{...i,layoutSide:X}),right:d.jsx(Xt,{...i,layoutSide:ae})})});case nn:return d.jsx(gn,{content:d.jsx(Xt,{...i,layoutSide:ae})})}return d.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",r,") is not supported."]})});Br.__docgenInfo={description:"",methods:[],displayName:"CombinerSelectorRow",props:{combinerKindLabel:{required:!1,tsType:{name:"string"},description:""},showSelector:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},levelReductionAction:{required:!1,tsType:{name:"union",raw:"typeof DiffAction.add | typeof DiffAction.remove",elements:[{name:"DiffAction.add"},{name:"DiffAction.remove"}]},description:""}}};const vo=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=yn(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Mt(),u=e.nestedNodes(),[f,c]=m.useState(()=>new Map),g=m.useMemo(()=>Lr(e,f),[e,f]),y=m.useMemo(()=>jr(e,f),[e,f]),p=m.useMemo(()=>_t(y),[y]),h=m.useMemo(()=>$n(p,r),[p,r]),b=m.useMemo(()=>ao(y),[y,l]),w=m.useMemo(()=>b.length>0,[b.length]),N=m.useMemo(()=>e.isCycle||b.length===0?!1:Rt(y,{expandedDepth:o,level:a}),[e.isCycle,y,o,b.length,a]),C=m.useMemo(()=>Se(y,N),[y,N,l]),[D,A]=m.useState(C),j=m.useRef(y.id);m.useEffect(()=>{if(j.current!==y.id){j.current=y.id,A(Se(y,N));return}A(se=>Se(y,se))},[y,N,l]);const _=m.useCallback(()=>{A(se=>{const I=!se;return I&&s(y),Se(y,I)})},[y,s]),J=m.useMemo(()=>ze(p,y.meta()),[y,p]),O=m.useMemo(()=>Qn(e),[e]),P=qn(),W=(P==null?void 0:P.beforeLevel)??a,de=(P==null?void 0:P.afterLevel)??a,{beforeLevel:Z,afterLevel:oe}=m.useMemo(()=>Zn(W,de,void 0),[W,de]),Ge=m.useCallback((se,I)=>{c(B=>io(e,B,se.id,I.node.id))},[e]);if(u.length===0)return null;const bn=D&&b.length>0;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Gr,{"data-precededby":t,ownerNode:e,displayNode:y,displayValue:p,contentVisibility:h,isLastInList:n&&!h.showContentSection&&!w,expandable:w,expanded:D,typeValueSuffix:O,onClickExpander:_}),d.jsx(et,{node:y,displayValue:p,isLastInList:n&&!w&&g.every(se=>!se.showSelector)}),d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:Z,afterLevel:oe,children:[g.map(se=>{const I=se.nestedNodes.map((U,z)=>oo(U,z,()=>d.jsx(Do,{node:U}))),B=I.find(U=>U.node.id===se.selectedNestedNode.id)??I[0]??null;return d.jsx(Br,{combinerKindLabel:se.combinerKindLabel,showSelector:se.showSelector,options:I,selectedOption:B,onSelectOption:U=>Ge(se.combinerNode,U)},se.combinerNode.id)}),bn&&d.jsxs(d.Fragment,{children:[d.jsx(In,{title:J,usage:Fe.JsonSchema,lastInvisible:!0}),b.map((se,I)=>d.jsx(Pt,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:se,isLastInList:I===b.length-1},se.id))]})]})})]})};vo.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const So=m.memo(i=>{const{node:e}=i;return xu(e)?null:d.jsx(en,{text:ze(e.value(),e.meta()),color:uo})});So.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, plain (no diffs). Hidden when the node's
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
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""}}};const wo=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=yn(),o=Vr(),{expandedDepth:s,materializeChildren:l,treeRevision:u}=Mt(),f=m.useMemo(()=>$n(e.value(),r),[r,e]),c=m.useMemo(()=>e.childrenNodes(),[e,u]),g=m.useMemo(()=>Pr(e),[e,u]),y=m.useMemo(()=>Rt(e,{expandedDepth:s,level:a}),[s,a,e]),p=m.useMemo(()=>Se(e,y),[y,e,u]),[h,b]=m.useState(p);m.useEffect(()=>{b(P=>Se(e,P))},[e,u]);const w=m.useCallback(()=>{b(P=>{const W=!P;return W&&l(e),Se(e,W)})},[l,e]),N=!!(o!=null&&o.suppressRootNestingIndicator)&&Xn(e)&&!f.showExtensionsRow&&c.length>0,C=N||!g||h,D=m.useCallback(()=>d.jsx(So,{node:e}),[e]),A=qn(),j=(A==null?void 0:A.beforeLevel)??a,_=(A==null?void 0:A.afterLevel)??a,{beforeLevel:J,afterLevel:O}=m.useMemo(()=>Zn(j,_,void 0),[j,_]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[!N&&d.jsx(Gr,{"data-precededby":t,ownerNode:e,contentVisibility:f,isLastInList:n,expandable:g,expanded:h,onClickExpander:w}),C&&d.jsxs(d.Fragment,{children:[d.jsx(et,{node:e,isLastInList:n&&c.length===0}),c.length>0&&d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:J,afterLevel:O,children:[!N&&d.jsx(In,{title:D,usage:Fe.JsonSchema,lastInvisible:!0}),c.map((P,W)=>d.jsx(Pt,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:P,isLastInList:W===c.length-1},P.id))]})})]})]})};wo.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Pt=i=>{const{node:e}=i;return An(e)?d.jsx(vo,{...i}):d.jsx(wo,{...i})};Pt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}`,signature:{properties:[{key:"required",value:{name:"boolean",required:!0}},{key:"deprecated",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"writeOnly",value:{name:"boolean",required:!0}},{key:"externalDocs",value:{name:"unknown",required:!0}},{key:"brokenRef",value:{name:"string",required:!0}},{key:"_fragment",value:{name:"unknown",required:!0}},{key:"isCycle",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
}>`}],raw:"ITreeNode<JsonSchemaTreeNodeStoredValue | null, K, JsonSchemaTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const It=m.memo(i=>i.schema===null||i.schema===void 0?null:d.jsx(Vn,{fallback:d.jsx(xn,{componentName:"JSON Schema Next Viewer"}),children:d.jsx(ff,{...i})})),ff=i=>{const{schema:e,expandedDepth:n=Yi,displayMode:t=Mn,devMode:r=!1,initialLevel:a=0,customizationOptions:o}=i,s=m.useMemo(()=>Ke(r),[r]),l=m.useMemo(()=>new wa({source:e,materializeDepth:n-a+1,logger:s}),[e,n,a,s]),u=m.useMemo(()=>l.build(),[l]),[f,c]=m.useReducer(b=>b+1,0),g=m.useCallback(b=>{l.materializeChildren(b),c()},[l]),y=m.useMemo(()=>({expandedDepth:n,materializeChildren:g,treeRevision:f}),[n,g,f]),p=m.useMemo(()=>({ExtensionsJsoComponent:_r,ExtensionsJsoDiffsComponent:qr}),[]);console.debug("[JSON Schema] Schema:",e),console.debug("[JSON Schema] Tree:",u);const h=u.root;return h?d.jsx(Hr.Provider,{value:p,children:d.jsx(Ir.Provider,{value:y,children:d.jsx(Tr.Provider,{value:o,children:d.jsx(Cn.Provider,{value:t,children:d.jsx(Rn.Provider,{value:nn,children:d.jsx(He.Provider,{value:a,children:d.jsx("div",{"data-testid":"json-schema-next-viewer",children:d.jsx(Pt,{node:h})})})})})})})}):null};It.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
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
purely to get a property row per key.`}]}},description:""}}};function No(i,e){return i.isCycle?!1:Pr(i)?e.hideUnchangedNodes?e.isRoot||i.kind===Y.ROOT?!0:Ra(i):e.level<e.expandedDepth:!0}const Qt={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:S.Yellow}};class mi{static buildCombinerSyntheticReplaceDiff(e){return e&&q(e.data)?{...e,styles:Qt}:{data:{type:Ui,action:L.replace,scope:"root",description:"",beforeValue:void 0,afterValue:void 0,beforeDeclarationPaths:[],afterDeclarationPaths:[]},styles:Qt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve}}static buildNodeDiffsSeverityFromChangedProperty(e){const n=e.data,t={type:n.type,causedAt:[]};return k(n)||q(n)?t.causedAt=n.beforeDeclarationPaths[0]??[]:E(n)&&(t.causedAt=n.afterDeclarationPaths[0]??[]),t}static buildNodeDiffsSeverityFromDiff(e){return this.buildNodeDiffsSeverityFromChangedProperty({data:e,styles:Qt,flags:{before:{increaseLevel:!1},after:{increaseLevel:!1}},highlightingMode:Ve})}static collectChangedPropertyMetaData(e,n){if(!(!e||typeof e!="object")){if(pr(e)){n.push(e);return}for(const t of Object.values(e))this.collectChangedPropertyMetaData(t,n)}}static maxNodeDiffsSeverity(...e){let n;for(const t of e)t&&(!n||fe.compareDiffTypes(t.type,n.type)>0)&&(n=t);return n}static resolveUniformNestedNodesAction(e){const n=e.nestedNodes();if(n.length===0)return;let t;for(const r of n){if(!ve(r))return;const a=r.diffs[R],o=a&&E(a.data)?L.add:a&&k(a.data)?L.remove:void 0;if(!o)return;if(!t){t=o;continue}if(t!==o)return}return t}static resolveCombinerSelectorLevelReductionAction(e){if(ve(e)&&!V.NodeLevel.isWholePropertyAddOrRemove(e))return this.resolveUniformNestedNodesAction(e)}static nestedNodeHasDiffSignals(e){return e.diffsSummary.size>0||e.descendantDiffsSummary.size>0||Object.keys(e.diffs).length>0||Object.keys(e.descendantDiffs).length>0}static hasCombinerOwnerChanges(e){return ve(e)?e.diffsSummary.size>0||Object.keys(e.descendantDiffs).length>0||e.descendantDiffsSummary.size>0?!0:e.nestedNodes().some(n=>ve(n)&&this.nestedNodeHasDiffSignals(n)):!1}static buildCombinerSelectorRowDiff(e){if(!(!ve(e)||!this.hasCombinerOwnerChanges(e)))return this.buildCombinerSyntheticReplaceDiff(e.diffs[R])}static buildCombinerSelectorRowDiffsSeverities(e){if(!ve(e)||!this.hasCombinerOwnerChanges(e))return;const n=[];for(const s of Object.values(e.diffsSeverities))s&&n.push(s);for(const s of Object.values(e.descendantDiffs))s&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));for(const s of e.nestedNodes()){if(!ve(s))continue;for(const f of Object.values(s.diffsSeverities))f&&n.push(f);const l=[];for(const f of Object.values(s.diffs))this.collectChangedPropertyMetaData(f,l);for(const f of l)n.push(this.buildNodeDiffsSeverityFromChangedProperty(f));const u=this.maxDiffType([...s.diffsSummary,...s.descendantDiffsSummary]);u&&n.push({type:u,causedAt:[]})}const t=e.diffs[R];t&&n.push(this.buildNodeDiffsSeverityFromChangedProperty(t));const r=[];for(const s of Object.values(e.diffs))this.collectChangedPropertyMetaData(s,r);for(const s of r)n.push(this.buildNodeDiffsSeverityFromChangedProperty(s));const a=this.maxDiffType([...e.diffsSummary,...e.descendantDiffsSummary]);a&&n.push({type:a,causedAt:[]});const o=this.maxNodeDiffsSeverity(...n);if(!o){const s=this.buildCombinerSyntheticReplaceDiff(t);return{[H.TitleRow]:this.buildNodeDiffsSeverityFromDiff(s.data)}}return{[H.TitleRow]:o}}static maxDiffType(e){let n;for(const t of e)(!n||fe.compareDiffTypes(t,n)>0)&&(n=t);return n}static resolveCombinerSelectorRowPresentation(e){if(ve(e)){const n=V.NodeLevel.takeNestingIndicatorRowColorizingDiff(e);if(n){const t=e.diffsSeverities[H.NestingIndicatorRow];return{selectorRowDiff:n,diffsSeverities:t?{[H.TitleRow]:t}:void 0}}}return{selectorRowDiff:this.buildCombinerSelectorRowDiff(e),diffsSeverities:this.buildCombinerSelectorRowDiffsSeverities(e)}}}const ko="show-all",cf="show-only-changed-nodes";function mf(i){return i?cf:ko}function yf(i){return i!==ko}const Ur=m.createContext(null);function gf(){const i=m.useContext(Ur);if(!i)throw new Error("useUnchangedBlocksContext must be used within JsonSchemaNextDiffsViewer");return i}function Eo(){return m.useContext(Ur)}function pf(i){const[e,n]=m.useState(()=>new Set),t=m.useCallback(r=>{n(a=>{if(a.has(r))return a;const o=new Set(a);return o.add(r),o})},[]);return m.useMemo(()=>({mode:i,hideUnchangedNodes:yf(i),revealedBlockIds:e,revealBlock:t}),[i,e,t])}const Ao=m.memo(()=>d.jsx("div",{className:"flex",style:{marginTop:2},children:d.jsx("svg",{className:"three-dots-icon",width:"13",height:"3",viewBox:"0 0 13 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.5 0C12.3284 0 13 0.67157 13 1.5C13 2.3284 12.3284 3 11.5 3C10.6716 3 10 2.3284 10 1.5C10 0.67157 10.6716 0 11.5 0ZM6.5 0C7.3284 0 8 0.67157 8 1.5C8 2.3284 7.3284 3 6.5 3C5.67157 3 5 2.3284 5 1.5C5 0.67157 5.67157 0 6.5 0ZM1.5 0C2.32843 0 3 0.67157 3 1.5C3 2.3284 2.32843 3 1.5 3C0.67157 3 0 2.3284 0 1.5C0 0.67157 0.67157 0 1.5 0Z",fill:"#0068FF"})})}));Ao.__docgenInfo={description:"",methods:[],displayName:"ThreeDotsIcon"};function yi(i){return i===1?"Show 1 unchanged node":`Show ${i} unchanged nodes`}const mt=m.memo(i=>{const{unchangedBlockId:e,count:n,onReveal:t,layoutSide:r,level:a,[te]:o}=i,s=m.useCallback(()=>{t(e)},[t,e]);return d.jsxs("div",{"data-testid":"show-unchanged-nodes","data-precededby":o,"data-layout-side":r,className:["show-unchanged-row-content flex w-full items-stretch gap-2"].join(" "),children:[a>0&&d.jsxs("div",{className:"level-indicator-column flex items-stretch self-stretch",children:[d.jsx(Dt,{level:a}),d.jsx("div",{className:"show-unchanged-connector flex w-4 items-center justify-center","aria-hidden":"true",children:d.jsx(ms,{})})]}),d.jsx("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center",children:d.jsx(kr,{text:yi(n),children:d.jsx("button",{type:"button",className:"show-unchanged-trigger","aria-label":yi(n),onClick:s,children:d.jsx(Ao,{})})})})]})});mt.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:'"before" | "after"',elements:[{name:"literal",value:'"before"'},{name:"literal",value:'"after"'}]},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const To=m.memo(i=>{const e=qe(),n=yn();switch(e){case _e:return d.jsx(pn,{left:d.jsx(mt,{...i,layoutSide:"before",level:n}),right:d.jsx(mt,{...i,layoutSide:"after",level:n})});case nn:return d.jsx(gn,{content:d.jsx(mt,{...i,layoutSide:"after",level:n})});default:return null}});To.__docgenInfo={description:"",methods:[],displayName:"ShowUnchangedRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},unchangedBlockId:{required:!0,tsType:{name:"string"},description:""},count:{required:!0,tsType:{name:"number"},description:""},onReveal:{required:!0,tsType:{name:"signature",type:"function",raw:"(unchangedBlockId: NodeId) => void",signature:{arguments:[{type:{name:"string"},name:"unchangedBlockId"}],return:{name:"void"}}},description:""}}};const Wr=i=>{const{children:e}=i,{hideUnchangedNodes:n,revealedBlockIds:t,revealBlock:r}=gf(),a=ia(),o=m.useMemo(()=>a?new Set(a):void 0,[a]),{visibleSequence:s}=m.useMemo(()=>pd(e,{hideUnchangedNodes:n,diffTypes:o}),[e,o,n]);return d.jsx(d.Fragment,{children:s.map((l,u)=>{const f=u===s.length-1;return l.kind==="placeholder"?t.has(l.unchangedBlockId)?d.jsx(m.Fragment,{children:e.slice(l.sourceIndex,l.sourceIndex+l.blockSize).map((c,g)=>d.jsx(Tn,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:c,isLastInList:f&&g===l.blockSize-1},c.id))},l.unchangedBlockId):d.jsx(To,{unchangedBlockId:l.unchangedBlockId,count:l.blockSize,onReveal:r},l.unchangedBlockId):d.jsx(Tn,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:l.node,isLastInList:f},l.node.id)})})};Wr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeChildrenListWithDiffs",props:{children:{required:!0,tsType:{name:"unknown"},description:""}}};function hf(i){return ie($e(i),{resolveDiff:()=>V.TitleRow.takeDiff(i)})}const Yr=i=>{const{ownerNode:e,displayNode:n=e,displayValue:t,contentVisibility:r,isLastInList:a=!1,expandable:o=!1,expanded:s=!1,onClickExpander:l,titleRowDiffProps:u,typeValueSuffix:f,...c}=i,g=m.useMemo(()=>u??hf(n),[n,u]),y=m.useMemo(()=>V.RequiredStar.takeMetaDiffForDisplay(e),[e]),p=qe(),h=m.useMemo(()=>V.NodeLevel.takeNodeChangesSummary(n),[n]),b=!s&&o&&p===_e&&!!h&&h.size>0;return d.jsx(Kr,{...c,ownerNode:e,displayNode:n,displayValue:t,contentVisibility:r,isLastInList:a,expandable:o,expanded:s,onClickExpander:l,titleRowDiffProps:g,requiredDiff:y,withRequiredDiffIndicator:!0,renderSubheader:({layoutSide:w,displayMeta:N,displayNode:C,showTypeSubheader:D})=>ra(ta(g.diff),w)?d.jsxs(d.Fragment,{children:[d.jsx(yo,{meta:N,node:n,isCycle:C.isCycle,layoutSide:w,showTypeLabel:D,typeValueSuffix:f}),b&&d.jsx(aa,{values:Array.from(h)})]}):d.jsx(d.Fragment,{})})};Yr.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeTitleRowWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},ownerNode:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>",required:!1}},{key:"hideLevelIndicatorWhenSideEmpty",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"diff" | "descendantDiffs" | "diffsSeverities"',elements:[{name:"literal",value:'"diff"'},{name:"literal",value:'"descendantDiffs"'},{name:"literal",value:'"diffsSeverities"'}]}],raw:'Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">'},description:""},typeValueSuffix:{required:!1,tsType:{name:"string"},description:"See JsonSchemaTitleSubheaderProps's `typeValueSuffix` - only combiner owners pass this."}}};const Vo=m.memo(i=>{const{node:e,layoutSide:n}=i,t=ro(e),r=V.TypeLabel.resolveSideDisplay(t,t.meta(),n),a=Qn(e);return d.jsxs(d.Fragment,{children:[d.jsx(qt,{display:r,layoutSide:n,color:null}),a&&d.jsx(en,{text:a,color:null})]})});Vo.__docgenInfo={description:`Combiner-selector option button content, with diffs. Same leaf-resolution + suffix rule as
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function bf(i){return i.kind===Y.PROPERTY}const xo=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=yn(),{expandedDepth:o,materializeChildren:s,treeRevision:l}=Mt(),u=Eo(),f=e.nestedNodes(),[c,g]=m.useState(()=>new Map),y=m.useMemo(()=>Lr(e,c),[e,c]),p=m.useMemo(()=>jr(e,c),[e,c]),h=m.useMemo(()=>_t(p),[p]),b=bf(p)?p:void 0,w=m.useMemo(()=>b?Jr(b,r):$n(h,r),[h,b,r]),N=m.useMemo(()=>ao(p),[p,l]),C=m.useMemo(()=>N.length>0,[N.length]),D=m.useMemo(()=>e.isCycle||N.length===0?!1:u!=null&&u.hideUnchangedNodes?No(p,{expandedDepth:o,level:a,hideUnchangedNodes:!0}):Rt(p,{expandedDepth:o,level:a}),[e.isCycle,p,u==null?void 0:u.hideUnchangedNodes,o,N.length,a]),A=m.useMemo(()=>Se(p,D),[p,D,l]),[j,_]=m.useState(A),J=m.useRef(p.id);m.useEffect(()=>{if(J.current!==p.id){J.current=p.id,_(Se(p,D));return}_(re=>Se(p,re))},[p,D,l]);const O=m.useCallback(()=>{_(re=>{const we=!re;return we&&s(p),Se(p,we)})},[p,s]),P=m.useMemo(()=>ze(h,p.meta()),[p,h]),W=m.useMemo(()=>Qn(e),[e]),de=m.useMemo(()=>V.NodeLevel.takeNestingIndicatorRowColorizingDiff(p),[p]),Z=qn(),oe=(Z==null?void 0:Z.beforeLevel)??a,Ge=(Z==null?void 0:Z.afterLevel)??a,bn=m.useMemo(()=>V.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),{beforeLevel:se,afterLevel:I}=m.useMemo(()=>Zn(oe,Ge,bn),[oe,Ge,bn]),B=m.useCallback((re,we)=>{g(Ln=>io(e,Ln,re.id,we.node.id))},[e]);if(f.length===0)return null;const U=j&&N.length>0,z=!!u;return d.jsxs("div",{"data-testid":"json-schema-combiner-node-viewer",className:"json-schema-property flex flex-col",children:[d.jsx(Yr,{"data-precededby":t,ownerNode:e,displayNode:p,displayValue:h,contentVisibility:w,isLastInList:n&&!w.showContentSection&&!C,expandable:C,expanded:j,onClickExpander:O,typeValueSuffix:W}),d.jsx(et,{node:p,displayValue:h,isLastInList:n&&!C&&y.every(re=>!re.showSelector)}),d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:se,afterLevel:I,children:[y.map(re=>{const we=re.nestedNodes.map((Dn,Go)=>oo(Dn,Go,Bo=>d.jsx(Vo,{node:Dn,layoutSide:Bo}))),Ln=we.find(Dn=>Dn.node.id===re.selectedNestedNode.id)??we[0]??null,tt=mi.resolveCombinerSelectorRowPresentation(re.combinerNode),Ko=mi.resolveCombinerSelectorLevelReductionAction(re.combinerNode);return d.jsx(Br,{combinerKindLabel:re.combinerKindLabel,showSelector:re.showSelector,options:we,selectedOption:Ln,onSelectOption:Dn=>B(re.combinerNode,Dn),selectorRowDiff:tt.selectorRowDiff,diffsSeverities:tt.diffsSeverities,levelReductionAction:Ko},re.combinerNode.id)}),U&&d.jsxs(d.Fragment,{children:[d.jsx(In,{title:P,usage:Fe.JsonSchema,lastInvisible:!0,diff:de,diffsSeverities:p.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),z?d.jsx(Wr,{children:N}):N.map((re,we)=>d.jsx(Tn,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:re,isLastInList:we===N.length-1},re.id))]})]})})]})};xo.__docgenInfo={description:"",methods:[],displayName:"CombinerNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Co=m.memo(i=>{const{node:e,meta:n,layoutSide:t}=i;if(Cu(e,t))return null;const r=V.TypeLabel.resolveSideDisplay(e,n,t);return d.jsx(qt,{display:r,layoutSide:t,color:uo})});Co.__docgenInfo={description:`Nesting-indicator row type-value orchestrator, with diffs. Hidden on whichever side's
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};function Df(i){return i.kind===Y.PROPERTY}const Ro=i=>{const{node:e,isLastInList:n=!1,[te]:t}=i,r=xe(),a=yn(),o=Vr(),{expandedDepth:s,materializeChildren:l,treeRevision:u}=Mt(),f=Df(e)?e:void 0,c=Eo(),g=m.useMemo(()=>f?Jr(f,r):$n(e.value(),r),[r,e,f]),y=m.useMemo(()=>e.childrenNodes(),[e,u]),p=m.useMemo(()=>Pr(e),[e,u]),h=m.useMemo(()=>c!=null&&c.hideUnchangedNodes?No(e,{expandedDepth:s,level:a,hideUnchangedNodes:!0,isRoot:e.kind===Y.ROOT}):Rt(e,{expandedDepth:s,level:a}),[s,a,e,c==null?void 0:c.hideUnchangedNodes]),b=m.useMemo(()=>Se(e,h),[h,e,u]),[w,N]=m.useState(b);m.useEffect(()=>{N(Z=>Se(e,Z))},[e,u]);const C=m.useCallback(()=>{N(Z=>{const oe=!Z;return oe&&l(e),Se(e,oe)})},[l,e]),D=!!(o!=null&&o.suppressRootNestingIndicator)&&Xn(e)&&!g.showExtensionsRow&&y.length>0,A=D||!p||w,j=m.useCallback(Z=>d.jsx(Co,{node:e,meta:e.meta(),layoutSide:Z}),[e]),_=m.useMemo(()=>V.NodeLevel.takeNestingIndicatorRowColorizingDiff(e),[e]),J=qn(),O=(J==null?void 0:J.beforeLevel)??a,P=(J==null?void 0:J.afterLevel)??a,{beforeLevel:W,afterLevel:de}=m.useMemo(()=>Zn(O,P,_),[O,P,_]);return d.jsxs("div",{"data-testid":"json-schema-node-viewer","data-name":"JsonNode",className:"json-schema-property flex flex-col",children:[!D&&d.jsx(Yr,{"data-precededby":t,ownerNode:e,contentVisibility:g,isLastInList:n,expandable:p,expanded:w,onClickExpander:C}),A&&d.jsxs(d.Fragment,{children:[d.jsx(et,{node:e,isLastInList:n&&y.length===0}),y.length>0&&d.jsx(He.Provider,{value:a+1,children:d.jsxs(Qe,{beforeLevel:W,afterLevel:de,children:[!D&&d.jsx(In,{title:j,usage:Fe.JsonSchema,lastInvisible:!0,diff:_,diffsSeverities:e.diffsSeverities,diffsSeverityPlacement:H.NestingIndicatorRow}),c?d.jsx(Wr,{children:y}):y.map((Z,oe)=>d.jsx(Tn,{"data-precededby":x.JSON_SCHEMA_PROPERTY,node:Z,isLastInList:oe===y.length-1},Z.id))]})})]})]})};Ro.__docgenInfo={description:"",methods:[],displayName:"SchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Tn=i=>{const{node:e}=i;return An(e)?d.jsx(xo,{...i}):d.jsx(Ro,{...i})};Tn.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"JsonSchemaTreeNodeStoredValue | null",elements:[{name:"union",raw:"JsonSchemaTreeNodeValue | JsonSchemaTreeNodePrimitiveValue",elements:[{name:"unknown"},{name:"boolean"}]},{name:"null"}]},{name:"K"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly required: boolean
  readonly deprecated: boolean
  readonly readOnly: boolean
  readonly writeOnly: boolean
  readonly externalDocs: unknown
  readonly brokenRef: string
  readonly _fragment: unknown
  readonly isCycle: boolean
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
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Lt=m.memo(i=>i.schema===null||i.schema===void 0?null:d.jsx(Vn,{fallback:d.jsx(xn,{componentName:"JSON Schema Next Diffs Viewer"}),children:d.jsx(vf,{...i})})),vf=i=>{const{schema:e,expandedDepth:n=Yi,displayMode:t=Mn,devMode:r=!1,initialLevel:a=0,customizationOptions:o,diffMetaKeys:s,diffTypes:l,hideUnchangedNodes:u=!0}=i,f=m.useMemo(()=>mf(u),[u]),c=pf(f),g=m.useMemo(()=>Ke(r),[r]),y=m.useMemo(()=>new md({source:e,materializeDepth:n-a+1,diffsMetaKeys:s,logger:g}),[e,n,a,s,g]),p=m.useMemo(()=>y.build(),[y]);console.debug("[JSON Schema Diffs] Schema",e),console.debug("[JSON Schema Diffs] Tree:",p);const[h,b]=m.useReducer(A=>A+1,0),w=m.useCallback(A=>{y.materializeChildren(A),b()},[y]),N=m.useMemo(()=>({expandedDepth:n,materializeChildren:w,treeRevision:h}),[n,w,h]),C=m.useMemo(()=>({ExtensionsJsoComponent:_r,ExtensionsJsoDiffsComponent:qr}),[]),D=p.root;return D?d.jsx(Hr.Provider,{value:C,children:d.jsx(wr.Provider,{value:s,children:d.jsx(Nr.Provider,{value:l,children:d.jsx(Ur.Provider,{value:c,children:d.jsx(Ir.Provider,{value:N,children:d.jsx(Tr.Provider,{value:o,children:d.jsx(Cn.Provider,{value:t,children:d.jsx(Rn.Provider,{value:_e,children:d.jsx(He.Provider,{value:a,children:d.jsx("div",{"data-testid":"json-schema-next-diffs-viewer",children:d.jsx(Tn,{node:D})})})})})})})})})})}):null};Lt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaNextDiffsViewer",props:{schema:{required:!0,tsType:{name:"unknown"},description:""},expandedDepth:{required:!1,tsType:{name:"number"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
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
}`,signature:{properties:[{key:"diffsMetaKey",value:{name:"symbol",required:!0}},{key:"aggregatedDiffsMetaKey",value:{name:"symbol",required:!0}}]}},description:""},diffTypes:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DiffType"}],raw:"ReadonlyArray<DiffType>"},description:""},hideUnchangedNodes:{required:!1,tsType:{name:"boolean"},description:'Toggles the "showing/hiding unchanged nodes" feature as a whole: `true` (default) collapses\nruns of unchanged nodes behind a "Show unchanged" reveal control, `false` shows everything.\nModeled internally as `JsonSchemaDiffsNodesVisibilityMode` (see that file) because a third\nmode - hide nodes whose only diffs fall outside `diffTypes` - is already planned; see\nrefactoring-notes.md (agent-packages/api-doc-viewer-repo) for the design analysis.'}}};var bt=(i=>(i.PRIMARY="primary",i.SECONDARY="secondary",i))(bt||{});const nt=i=>{const{node:e,variant:n=bt.PRIMARY,[te]:t}=i,r=xe(),a=On(),o=e.meta(),s=o==null?void 0:o.brokenRef,[l,u]=m.useState(null),f=e.nestedNodes(),c=m.useMemo(()=>f.filter(Wt).map((D,A)=>{var J;const j=((J=D.value())==null?void 0:J.protocol)??"",_=`binding-${A}`;return Yt(D)?{title:j,node:D,testId:_,diffs:D.diffs,diffsSummary:D.diffsSummary,descendantDiffs:D.descendantDiffs,descendantDiffsSummary:D.descendantDiffsSummary,diffsSeverities:D.diffsSeverities}:{title:j,node:D,testId:_}}),[f]),g=l!=null&&l.node&&Wt(l.node)?l.node:null,y=g==null?void 0:g.value(),{version:p="latest",binding:h=null}=y??{};m.useEffect(()=>{c.length>0&&l===null&&u(c[0])},[c,l]);const b=m.useCallback(D=>s?d.jsx(d.Fragment,{}):d.jsx(Ht,{options:c,selectedOption:l,onSelectOption:u,variant:Ot.Secondary,layoutSide:D}),[c,s,l]),w=m.useMemo(()=>{if(kd(e)){const D=$e(e);return ie(D)}return{}},[e]),N=m.useMemo(()=>{if(g&&Yt(g)){const D=$e(g);return ie(D,{diffKey:"version",fallbackToNodeDiff:!1,diffsSeverityPlacement:H.BindingVersionRow})}return{}},[g]),C=m.useMemo(()=>{if(!g)return null;if(Yt(g)&&a){const D=g.diffs[R],A=Sf(h,D,a);return d.jsx(xt,{"data-precededby":x.BINDING_VERSION_ROW,mergedSource:A,displayMode:r,initialLevel:1,supportJsonSchema:!0,embeddedSchemaDiffsComponent:Lt,diffMetaKeys:a})}return Wt(g)?d.jsx(Ct,{"data-precededby":x.BINDING_VERSION_ROW,source:h,displayMode:r,initialLevel:1,supportJsonSchema:!0,embeddedSchemaComponent:It}):null},[g,h,r,a]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":t,value:"Bindings",expandable:!1,expanded:!0,variant:n===bt.PRIMARY?K.h3:K.h5,subheader:b,...w}),d.jsxs("div",{"data-testid":`${l==null?void 0:l.testId}-content`,className:"flex flex-col",children:[d.jsx(Xe,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:p,variant:K.body2,label:"Version",labelFontWeight:"medium",textFontWeight:"medium",...N}),C]})]})};function Sf(i,e,n){if(!i)return null;const t=e==null?void 0:e.data;if(!t)return i;const{diffsMetaKey:r}=n;return{...i,[r]:Object.keys(i).reduce((o,s)=>{if(o[s]=t,E(t)){const l=i[s];o[s]={...t,afterValue:l}}if(k(t)){const l=i[s];o[s]={...t,beforeValue:l}}return o},{})}}nt.__docgenInfo={description:"",methods:[],displayName:"BindingsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:"AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.BINDINGS>",elements:[{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.BINDINGS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
>`}]},description:""},variant:{required:!1,tsType:{name:"SizeVariant"},description:""}}};const jt=i=>{const{node:e,[te]:n}=i,t=On(),r=e.value(),a=(r==null?void 0:r.rawValues)??{},o=m.useMemo(()=>{var s;if(Ed(e)){const l=$e(e);return{...ie(l),highlightingMode:(s=e.diffs[R])==null?void 0:s.highlightingMode}}return{}},[e]);return d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:"Extensions",expandable:!1,variant:K.h3,usage:kt.AsyncApiJsoSection,...o}),t?d.jsx(xt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,mergedSource:a,initialLevel:1,diffMetaKeys:t}):d.jsx(Ct,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,source:a,initialLevel:1})]})};jt.__docgenInfo={description:"",methods:[],displayName:"ExtensionsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
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
>`}]},description:""}}};const Mo="Address Parameters",wf="Location",jn="location",Nf="customAnnotations";function Bn(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function kf(i,e){if(!(jn in i))return i;const{[jn]:n,...t}=i,r={[jn]:{label:wf,value:n}};if(e){const a=Reflect.get(i,e),o=Bn(a)?a[jn]:void 0;o&&Reflect.set(r,e,{[jn]:o})}return{...t,[Nf]:r}}function _o(i,e){if(!Bn(i))return i;const n=i.properties;if(!Bn(n))return i;const t={};for(const[r,a]of Object.entries(n))t[r]=Bn(a)?kf(a,e):a;if(e){const r=Reflect.get(n,e);r!==void 0&&Reflect.set(t,e,r)}return{...i,properties:t}}const qo=i=>{const{node:e,[te]:n}=i,t=xe();if(Td(e))return d.jsx(Ef,{"data-precededby":n,node:e});const r=e.value(),a=_o((r==null?void 0:r.rawValues)??{});return d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:Mo,expandable:!1,variant:K.h3}),d.jsx(It,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:a,expandedDepth:2,displayMode:t,customizationOptions:En})]})},Ef=i=>{const{node:e,[te]:n}=i,t=xe(),r=e.value(),a=r==null?void 0:r.rawValues,o=On(),s=m.useMemo(()=>{const u=$e(e);return ie(u)},[e]),l=m.useMemo(()=>{const u=_o(a,o==null?void 0:o.diffsMetaKey);return Af(u,o)?u:Tf(u,e.diffs[R],o)},[a,o,e.diffs]);return!o||!a?null:d.jsxs(d.Fragment,{children:[d.jsx(me,{"data-precededby":n,value:Mo,expandable:!1,variant:K.h3,...s}),d.jsx(Lt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:l,expandedDepth:2,displayMode:t,diffMetaKeys:o,customizationOptions:En})]})};function Af(i,e){if(!i||!e)return!1;const n=i.properties;return Bn(n)?Reflect.get(n,e.diffsMetaKey)!==void 0:!1}function Tf(i,e,n){if(!i||!e||!n)return i;const t=e.data,{diffsMetaKey:r}=n;return{...i,[r]:Object.keys(i).reduce((o,s)=>{if(o[s]=t,E(t)){const l=i[s];o[s]={...t,afterValue:l}}if(k(t)){const l=i[s];o[s]={...t,beforeValue:l}}return o},{})}}qo.__docgenInfo={description:"",methods:[],displayName:"MessageChannelParametersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
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
>`}]},description:""}}};const Ho=m.memo(i=>{const{renderAddress:e}=i,{diff:n,descendantDiffs:t,diffsSeverities:r}=i,a=m.useMemo(()=>r==null?void 0:r["server-address-row"],[r]),o=m.useMemo(()=>a==null?void 0:a.type,[a]),s=m.useMemo(()=>Wn(a==null?void 0:a.causedAt),[a]);switch(qe()){case _e:return d.jsx(_n,{diffType:o,diffTypeCause:s,hidden:!1,children:d.jsx(pn,{left:e(X),right:e(ae)})});case nn:return d.jsx(gn,{content:e(ae)})}return null});Ho.__docgenInfo={description:"",methods:[],displayName:"ServerAddressRow",props:{renderAddress:{required:!0,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement | null",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Oo=m.memo(i=>{const{node:e,[te]:n}=i,t=m.useMemo(()=>e.value(),[e]),a=e.childrenNodes().find(Tt),o=zn(e,dt),{nodeDiffs:s}=o,l=m.useMemo(()=>ie(o,{diffKey:"title"}),[o]),u=m.useMemo(()=>ie(o,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[o]),f=m.useMemo(()=>ie(o,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[o]),c=m.useMemo(()=>ie(o,{resolveDiff:(N,C)=>{const D=fe.maxChangedPropertyMetaDataByDiffType(C("protocol"),C("host"));return N[R]??D}}),[o]),g=m.useCallback(N=>{var O;if(!t)return null;if(!dt(e))return d.jsx(d.Fragment,{children:t.protocol});const C=(O=e.diffs)==null?void 0:O.protocol;if(!C)return d.jsx(d.Fragment,{children:t.protocol});const D=new Set,{data:A,styles:j}=C;let _=t.protocol,J=!1;return N===X&&(D.add(ne.highlighter(j.before.textHighlighterColor)),k(A)||q(A)?_=A.beforeValue:Ye(A)&&(_=A.beforeKey),E(A)&&(J=!0)),N===ae&&(D.add(ne.highlighter(j.after.textHighlighterColor)),E(A)||q(A)?_=A.afterValue:Ye(A)&&(_=A.afterKey),k(A)&&(J=!0)),J?null:d.jsx("span",{className:Array.from(D).join(" "),children:_})},[e,t]),y=m.useCallback(N=>{var O;if(!t)return null;if(!dt(e))return d.jsx(d.Fragment,{children:t.host});const C=(O=e.diffs)==null?void 0:O.host;if(!C)return d.jsx(d.Fragment,{children:t.host});const D=new Set,{data:A,styles:j}=C;let _=t.host,J=!1;return N===X&&(D.add(ne.highlighter(j.before.textHighlighterColor)),k(A)||q(A)?_=A.beforeValue:Ye(A)&&(_=A.beforeKey),E(A)&&(J=!0)),N===ae&&(D.add(ne.highlighter(j.after.textHighlighterColor)),E(A)||q(A)?_=A.afterValue:Ye(A)&&(_=A.afterKey),k(A)&&(J=!0)),J?null:d.jsx("span",{className:Array.from(D).join(" "),children:_})},[e,t]),p=m.useCallback(N=>{var O;function C(P=!1,W=[]){return d.jsx("div",{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,className:`${Yn} py-2 flex flex-row w-full h-full ${W.join(" ")}`,children:!P&&d.jsxs("div",{className:"server-address-container server-address server-subheader",children:[g(N),"://",y(N)]})})}if(!dt(e))return C();const D=((O=e.diffs)==null?void 0:O[R])??c.diff;if(!D)return C();const{data:A,styles:j}=D,_=new Set;let J=!1;return N===X&&(E(A)?(_.add(ne.background(S.Gray)),J=!0):_.add(ne.background(j.before.backgroundColor))),N===ae&&(k(A)?(_.add(ne.background(S.Gray)),J=!0):_.add(ne.background(j.after.backgroundColor))),C(J,Array.from(_))},[e,y,g,c.diff]),h=m.useMemo(()=>Me(t,s,"title"),[t,s]),b=m.useMemo(()=>Me(t,s,"description"),[t,s]),w=m.useMemo(()=>Me(t,s,"summary"),[t,s]);return t?d.jsxs("div",{className:"flex flex-col",children:[h&&d.jsx(me,{"data-precededby":n,value:t.title,expandable:!1,expanded:!0,variant:K.h4,...l}),!h&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:K.h4,...l}),d.jsx(Ho,{renderAddress:p,...c}),b&&d.jsx(Xe,{"data-precededby":x.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:K.h6,textFontWeight:"normal",textColor:ln,...u}),w&&d.jsx(Xe,{"data-precededby":b?x.DESCRIPTION_ROW:x.SERVER_ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:K.h6,textFontWeight:"normal",textColor:ln,...f}),a&&d.jsx(nt,{"data-precededby":w?x.SUMMARY_ROW:b?x.DESCRIPTION_ROW:x.SERVER_ADDRESS_ROW,node:a,variant:bt.SECONDARY})]}):null});Oo.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServerNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>
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
>`}]},description:""}}};const Po=m.memo(i=>{const{node:e,[te]:n}=i,t=m.useMemo(()=>e.childrenNodes().filter(Nd),[e]),r=m.useMemo(()=>{if(Vd(e)){const a=$e(e);return ie(a)}return{}},[e]);return d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":n,value:"Servers",expandable:!1,expanded:!0,variant:K.h3,...r}),t.map((a,o)=>d.jsx(Oo,{"data-precededby":o===0?x.MESSAGE_SECTION_HEADER_HIGH_LEVEL:x.SERVER_BLOCK,node:a},a.id))]})});Po.__docgenInfo={description:"",methods:[],displayName:"MessageChannelServersNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.SERVERS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Io=i=>{const{node:e,[te]:n}=i,t=e.value(),r=e.childrenNodes(),a=r.find(Tt),o=r.find(vd),s=r.find(wd),l=r.find(Ar),u=zn(e,Ad),{nodeDiffs:f}=u,c=m.useMemo(()=>ie(u,{diffKey:"title"}),[u]),g=m.useMemo(()=>ie(u,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[u]),y=m.useMemo(()=>ie(u,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[u]),p=m.useMemo(()=>Me(t,f,"title"),[t,f]),h=m.useMemo(()=>Me(t,f,"description"),[t,f]),b=m.useMemo(()=>Me(t,f,"summary"),[t,f]);return d.jsxs("div",{className:"flex flex-col",children:[p&&d.jsx(me,{"data-precededby":n,value:(t==null?void 0:t.title)??"",expandable:!1,expanded:!0,variant:K.h2,...c}),!p&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),expandable:!1,expanded:!0,variant:K.h2,...c}),h&&d.jsx(Xe,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:K.h5,textFontWeight:"normal",textColor:ln,...g}),b&&d.jsx(Xe,{"data-precededby":h?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:K.h5,textFontWeight:"normal",textColor:ln,...y}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(qo,{"data-precededby":h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),s&&d.jsx(Po,{"data-precededby":o?x.JSON_SCHEMA_VIEWER:h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:s}),l&&d.jsx(jt,{"data-precededby":s?x.SERVER_BLOCK:o?x.JSON_SCHEMA_VIEWER:h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:l}),a&&d.jsx(nt,{"data-precededby":l?x.JSO_VIEWER:s?x.SERVER_BLOCK:o?x.JSON_SCHEMA_VIEWER:h?x.DESCRIPTION_ROW:b?x.SUMMARY_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:a})]})]})};Io.__docgenInfo={description:"",methods:[],displayName:"MessageChannelNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Lo=i=>{const{node:e,[te]:n}=i,t=xe(),r=qe(),a=On(),o=ia(),s=e.childrenNodes(),l=s.find(bd),u=s.find(Ar),f=s.find(Tt),c=s.find(Dd),g=m.useMemo(()=>pi(l,a),[l,a]),y=m.useMemo(()=>pi(c,a),[c,a]),p=m.useMemo(()=>{if(xd(l)){const w=$e(l);return ie(w)}return{}},[l]),h=m.useMemo(()=>{if(Cd(c)){const w=$e(c);return ie(w)}return{}},[c]),b=m.useCallback(w=>r===nn?d.jsx(It,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:w,displayMode:t,customizationOptions:En}):r===_e&&a?d.jsx(Lt,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,schema:w,displayMode:t,diffMetaKeys:a,diffTypes:o,customizationOptions:En}):null,[a,o,t,r]);return d.jsxs("div",{className:"flex flex-col",children:[l&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":n,value:"Headers",variant:K.h3,expandable:!1,...p}),b(g)]}),u&&d.jsx(jt,{"data-precededby":l?x.JSON_SCHEMA_VIEWER:n,node:u}),f&&d.jsx(nt,{"data-precededby":l?x.JSON_SCHEMA_VIEWER:u?x.JSO_VIEWER:n,node:f}),c&&d.jsxs("div",{className:"flex flex-col",children:[d.jsx(me,{"data-precededby":l?x.JSON_SCHEMA_VIEWER:u||f?x.JSO_VIEWER:n,value:"Payload",variant:K.h3,expandable:!1,...h}),b(y)]})]})},gi="Type";function pi(i,e){if(!i)return;const n=i.value();if(n)return i instanceof Ce?ur(gi,n.schema,i.diffs[R],e):Ga(gi,n.schema)}Lo.__docgenInfo={description:"",methods:[],displayName:"MessageContentNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const jo=i=>{const{node:e,[te]:n}=i,t=e.value(),r=e.childrenNodes(),a=r.find(Tt),o=r.find(Ar),s=zn(e,Md),{nodeDiffs:l}=s,u=m.useMemo(()=>ie(s,{diffKey:"title"}),[s]),f=m.useMemo(()=>ie(s,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[s]),c=m.useMemo(()=>ie(s,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[s]),g=m.useMemo(()=>Me(t,l,"title"),[t,l]),y=m.useMemo(()=>Me(t,l,"description"),[t,l]),p=m.useMemo(()=>Me(t,l,"summary"),[t,l]);return d.jsxs("div",{className:"flex flex-col",children:[g&&d.jsx(me,{"data-precededby":n,value:(t==null?void 0:t.title)??"",variant:K.h2,expandable:!1,expanded:!0,...u}),!g&&d.jsx(me,{"data-precededby":n,value:e.key.toString(),variant:K.h2,expandable:!1,expanded:!0,...u}),y&&d.jsx(Xe,{"data-precededby":x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.description)??"",variant:K.h5,textFontWeight:"normal",textColor:ln,...f}),p&&d.jsx(Xe,{"data-precededby":y?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,value:(t==null?void 0:t.summary)??"",variant:K.h5,textFontWeight:"normal",textColor:ln,...c}),r.length>0&&d.jsxs("div",{className:"flex flex-col",children:[o&&d.jsx(jt,{"data-precededby":p?x.SUMMARY_ROW:y?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:o}),a&&d.jsx(nt,{"data-precededby":o?x.JSO_VIEWER:p?x.SUMMARY_ROW:y?x.DESCRIPTION_ROW:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL,node:a})]})]})};jo.__docgenInfo={description:"",methods:[],displayName:"MessageOperationNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Jo=i=>{const{node:e,[te]:n}=i;return _a(e)?d.jsx(Lo,{"data-precededby":n,node:e}):qa(e)?d.jsx(Io,{"data-precededby":n,node:e}):Ha(e)?d.jsx(jo,{"data-precededby":n,node:e}):null};Jo.__docgenInfo={description:"",methods:[],displayName:"MessageSectionViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"union",raw:`| typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT
| typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
| typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION`,elements:[{name:"AsyncApiTreeNodeKinds.MESSAGE_CONTENT"},{name:"AsyncApiTreeNodeKinds.MESSAGE_CHANNEL"},{name:"AsyncApiTreeNodeKinds.MESSAGE_OPERATION"}]},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""}}};const Fo=i=>{const{node:e,[te]:n}=i,t=qe();xe();const[r,a]=m.useState(null),o=e.nestedNodes(),s=m.useMemo(()=>o.map(p=>{const h=Vf(p),b=xf(p);return qd(p)?{node:p,title:h,testId:b,diffs:p.diffs,diffsSummary:p.diffsSummary,descendantDiffs:p.descendantDiffs,descendantDiffsSummary:p.descendantDiffsSummary,diffsSeverities:p.diffsSeverities}:{node:p,title:h,testId:b}}),[o]);m.useEffect(()=>{s.length>0&&r===null&&a(s[0])},[s,r]);const l=m.useMemo(()=>{var p;return _d(e)?(p=e.diffs)==null?void 0:p[R]:null},[e]),u=m.useMemo(()=>{if(l){const{data:p}=l;if(q(p)||k(p))return p.beforeDeclarationPaths[0];if(E(p))return p.afterDeclarationPaths[0]}return null},[l]),f=m.useMemo(()=>{var p;return(p=l==null?void 0:l.data)==null?void 0:p.type},[l]),c=m.useMemo(()=>{const p=u==null?void 0:u.join(".");return p?`caused by ${p} change`:void 0},[u]),g=m.useCallback(p=>{const h=new Set;if(l){const{styles:b}=l;p===X&&h.add(ne.background(b.before.backgroundColor)),p===ae&&h.add(ne.background(b.after.backgroundColor))}return d.jsx("div",{"data-precededby":n,className:`message-sections-selector ${Yn} h-full ${Array.from(h).join(" ")}`,children:d.jsx(Ht,{options:s,selectedOption:r,onSelectOption:a,variant:Ot.Secondary,layoutSide:p})})},[l,n,s,r]),y=m.useCallback(()=>{switch(t){case _e:return d.jsx(_n,{diffType:f,diffTypeCause:c,hidden:!1,children:d.jsx(pn,{left:g(X),right:g(ae)})});default:return d.jsx(gn,{content:g(ae)})}},[f,c,t,g]);return d.jsxs("div",{className:"flex flex-col",children:[y(),r&&Sd(r.node)&&d.jsx("div",{"data-testid":`${r.testId}-section`,children:d.jsx(Jo,{"data-precededby":x.MESSAGE_SECTION_SELECTOR,node:r.node})})]})};function Vf(i){switch(i.kind){case v.MESSAGE_CONTENT:return"Message";case v.MESSAGE_CHANNEL:return"Channel";case v.MESSAGE_OPERATION:return"Operation";default:return"Unknown"}}function xf(i){switch(i.kind){case v.MESSAGE_CONTENT:return"message-content";case v.MESSAGE_CHANNEL:return"message-channel";case v.MESSAGE_OPERATION:return"message-operation";default:return"unknown"}}Fo.__docgenInfo={description:"",methods:[],displayName:"MessageSectionsViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR>
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
>`}]},description:""}}};const zr=i=>{const{node:e,noHeading:n=!1}=i,t=e.value(),r=m.useMemo(()=>e.childrenNodes(),[e]),a=zn(e,Rd),{nodeDiffs:o}=a,s=m.useMemo(()=>ie(a,{diffKey:"title"}),[a]),l=m.useMemo(()=>ie(a,{diffKey:"address"}),[a]),u=m.useMemo(()=>ie(a,{diffKey:"description",diffsSeverityPlacement:H.DescriptionRow}),[a]),f=m.useMemo(()=>ie(a,{diffKey:"summary",diffsSeverityPlacement:H.SummaryRow}),[a]),c=m.useMemo(()=>Me(t,o,"title"),[t,o]),g=m.useMemo(()=>Me(t,o,"description"),[t,o]),y=m.useMemo(()=>Me(t,o,"summary"),[t,o]),p=n?x.ROOT:x.MESSAGE_SECTION_HEADER_HIGH_LEVEL;return d.jsxs("div",{className:"flex flex-col",children:[!n&&c&&d.jsx(me,{"data-precededby":x.ROOT,value:(t==null?void 0:t.title)??"",expandable:!1,variant:K.h1,...s}),!n&&!c&&d.jsx(me,{"data-precededby":x.ROOT,value:e.key.toString(),expandable:!1,variant:K.h1,...s}),d.jsx(Oa,{"data-precededby":p,action:(t==null?void 0:t.action)??"",address:(t==null?void 0:t.address)??"",...l}),g&&d.jsx(Xe,{"data-precededby":x.ADDRESS_ROW,value:(t==null?void 0:t.description)??"",variant:K.h4,textFontWeight:"normal",textColor:ln,...u}),y&&d.jsx(Xe,{"data-precededby":g?x.DESCRIPTION_ROW:x.ADDRESS_ROW,value:(t==null?void 0:t.summary)??"",variant:K.h4,textFontWeight:"normal",textColor:ln,...f}),d.jsx(Cf,{"data-precededby":y?x.SUMMARY_ROW:g?x.DESCRIPTION_ROW:x.ADDRESS_ROW,children:r})]})},Cf=i=>{const{children:e,[te]:n}=i;return d.jsx("div",{className:"flex flex-col",children:e.map(t=>hd(t)?d.jsx(Fo,{"data-precededby":n,node:t},t.key):null)})};zr.__docgenInfo={description:"",methods:[],displayName:"MessageNodeViewer",props:{node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"AsyncApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"AsyncApiTreeNodeKinds.MESSAGE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly brokenRef?: string
  readonly _fragment: unknown
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!1}},{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly brokenRef?: string
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<AsyncApiTreeNodeValue<K> | null, K, AsyncApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};const Rf=m.memo(i=>i.source===null?null:d.jsx(Vn,{fallback:d.jsx(xn,{componentName:"Async API Operation Viewer"}),children:d.jsx(Mf,{...i})})),Mf=m.memo(i=>{const{source:e,operationKeys:n,displayMode:t=Mn,devMode:r=!1,noHeading:a=!1,referenceNamePropertyKey:o}=i,s=m.useMemo(()=>Ke(r),[r]),l=m.useMemo(()=>new pa({source:e,referenceNamePropertyKey:o,operationKeys:n,logger:s}),[e,n,o,s]),u=m.useMemo(()=>(l==null?void 0:l.build())??null,[l]);s.debug("[AsyncAPI] Original Source:",e),s.debug("[AsyncAPI] Tree:",u);const f=u==null?void 0:u.root;return!f||!Ma(f)?null:d.jsx(Zi.Provider,{value:r,children:d.jsx(Cn.Provider,{value:t,children:d.jsxs(Rn.Provider,{value:nn,children:[" ",d.jsx(He.Provider,{value:0,children:d.jsx(zr,{node:f,noHeading:a})})]})})})});Rf.__docgenInfo={description:"",methods:[],displayName:"AsyncApiOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},operationKeys:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  operationKey: string // e.g. send-fruit, receive-fruit
  messageKey: string // e.g. send-fruit-message, receive-fruit-message
}`,signature:{properties:[{key:"operationKey",value:{name:"string",required:!0}},{key:"messageKey",value:{name:"string",required:!0}}]}},description:""},displayMode:{required:!1,tsType:{name:"union",raw:`| typeof SIMPLE_DISPLAY_MODE
| typeof DETAILED_DISPLAY_MODE`,elements:[{name:"SIMPLE_DISPLAY_MODE"},{name:"DETAILED_DISPLAY_MODE"}]},description:""},devMode:{required:!1,tsType:{name:"boolean"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""},referenceNamePropertyKey:{required:!0,tsType:{name:"symbol"},description:""}}};export{Rf as A,Ct as J,Pd as a,It as b,Lt as c,xt as d};
