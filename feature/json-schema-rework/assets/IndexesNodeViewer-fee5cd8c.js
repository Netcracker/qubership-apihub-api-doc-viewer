var Kt=Object.defineProperty;var Bt=(i,e,t)=>e in i?Kt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var D=(i,e,t)=>(Bt(i,typeof e!="symbol"?e+"":e,t),t);import{y as $,x as B,w as ai,t as z,_ as Wt,$ as Ve,a0 as Pe,N as ee,a1 as Zi,P as I,a2 as Yt,a3 as $t,M as Ae,Q as Jt,O as _e,a4 as Xt,R as P,H as me,a5 as oi,a6 as qe,a7 as zt,a8 as Qt,a9 as Zt,aa as en,ab as tn,ac as nn,ad as rn,ae as an,af as on,ag as sn,ah as ln,ai as dn,aj as un,ak as fn,U as te,al as gn,am as et,T as ne,X as K,an as ge,ao as xe,Y as Ue,Z as pi,l as hi,S as mi,ap as si,aq as li,z as cn,ar as Fe,as as pn,at as hn,au as we,av as ii,aw as ti,ax as mn,ay as yn,v as Fi,az as bn,aA as Dn,u as be,f as Ke,h as it}from"./UxBadge-190a23d2.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const se={SIMPLE:"simple",COMPLEX:"complex"};class Be{constructor(e="#",t="",n,r,a){D(this,"type");D(this,"parent");D(this,"container");D(this,"newDataLevel");D(this,"_value");D(this,"_meta");D(this,"_childrenNodes",[]);D(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:s=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=s,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new Be(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class yi extends Be{constructor(t="#",n="",r,a,s){super(t,n,r,a,s);D(this,"type");this.id=t,this.key=n,this.kind=r,this.type=s.type}createCycledClone(t,n,r){const a=new yi(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class vn{constructor(){D(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const s=new Be(e,t,n,r,a);return this.nodes.set(e,s),s}createComplexNode(e,t,n,r,a){const s=new yi(e,t,n,r,a);return this.nodes.set(e,s),s}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const Vn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},wn=Object.values(Vn);new Set(wn);class We{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!_(e))return!1;for(const t of Object.values(e))if(!We.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return _(t)&&($(t)||B(t)||ai(t)||z(t))}}function _(i){return tt(i)&&!Array.isArray(i)}function tt(i){return typeof i=="object"&&i!==null}function Nn(i){return _(i)&&Object.keys(i).every(e=>typeof e=="string")}function ni(i){return Array.isArray(i)}function Ca(i){return typeof i=="number"}function Aa(i){return typeof i=="string"}function _a(i,e,t){let n=i,r=!1;for(const a of e){if(!_(n)&&!ni(n))return;if(r){let l;tt(n)&&(l=n[a]),!l&&ni(n)&&t&&(l=n.find(d=>_(d)&&d[t]===a)),n=l,r=!1;continue}n=n[a],ni(n)&&(r=!0)}return n}function Ea(i,e){return Object.keys(i).find(t=>i[t]===e)}function Ta(i){if(We.isDiffsRecord(i))return i}class xn{constructor(){D(this,"tree",null)}pick(e,t){if(!_(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const s=e[a];Array.isArray(s)?n[a]=[...s]:_(s)?n[a]={...s}:n[a]=s}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class nt{constructor(){D(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const Ee=()=>{},Sn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:Ee,info:Ee,warn:Ee,error:Ee};class qa{constructor(){D(this,"fragments",new Map);D(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Oi(i,e){return"#"+Wt([...i,...e])}function Ia(i,e){const t=new nt,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function La(i){return Array.isArray(i)?i.length>0:_(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function kn(i){return i==null||!_(i)&&!Ve(i)}function Hn(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:s,createStateForComplexNode:l,isSimpleNode:d,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=kn,shouldSkipNodeCreation:p,shouldStopAfterNodeCreation:y,lazy:h}=i;return[({value:b,state:V,key:L,path:E})=>{if(typeof L=="symbol")return;if(!_(b)&&!Ve(b))return{value:b};const{ancestors:q,parent:w,container:x,pathPrefix:N=[]}=V,H=q.get(b);if(!H||!d(H)&&!f(H))return{value:b};if(!w||!d(w))return{value:b};const S=Oi(N,E),O=g(L,b),Q=t.createCycledClone(H,S,O,w);return x?x.addNestedNode(Q):w&&w.addChildNode(Q),{done:!0}},({key:b,value:V,path:L,state:E,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((N,H)=>H(b,N,e,L,E),V)},({key:b,value:V,path:L,rules:E,state:q})=>{if(!E)return{done:!0};if(typeof b=="symbol")return{done:!0};if(c(V))return{done:!0};if(p!=null&&p(V,E)||!E.kind||!n.includes(E.kind))return;const{parent:w,container:x,ancestors:N,pathPrefix:H=[],depth:S=0,materializeDepth:O}=q,Q=Oi(H,L),pe=g(b,V),{kind:F,complex:le=!1}=E,W=a(V,w,x,F),ie=r(Q,pe,F,le,W);if(!ie)return;x?x.addNestedNode(ie):w&&w.addChildNode(ie),h&&(_(V)||Ve(V))&&h.state.rememberFragment(Q,V);let Ii=V;if(y!=null&&y(ie,V)){const ei=w?w.descendantDiffs:void 0;if(!ei||!(b in ei))return{done:!0};const Ri=ei[b];if(!Ri)return{done:!0};const{data:Pi}=Ri;z(Pi)&&(Ii=Pi.beforeValue)}const Li=S+(W.newDataLevel?1:0),Mi=!!(h&&d(ie)&&O!==void 0&&Li>=O&&(_(V)||Ve(V))&&h.resolveHasOwnChildren(V,E));Mi&&h.state.defer({nodeId:Q,fragment:V,path:[...H,...L],rules:E});const Ze=_(V)||Ve(V);Ze&&N.enter(V,ie);let ve;return d(ie)?ve=s(q,ie):ve=l(q,ie),ve={...ve,depth:Li,materializeDepth:q.materializeDepth,pathPrefix:q.pathPrefix},Mi?{done:!0,exitHook:Ze?()=>{N.leave(V)}:void 0}:{value:Ii,state:ve,exitHook:Ze?()=>{N.leave(V)}:void 0}}]}class Cn{}class ce{constructor(e="#",t="",n,r,a){D(this,"type");D(this,"parent");D(this,"container");D(this,"newDataLevel");D(this,"_value");D(this,"_meta");D(this,"_childrenNodes",[]);D(this,"_nestedNodes",[]);D(this,"_diffs",{});D(this,"_diffsSummary",new Set);D(this,"_descendantDiffs",{});D(this,"_descendantDiffsSummary",new Set);D(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:s=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=s,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new ce(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class An extends vn{constructor(){super()}}const R={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},rt=Object.values(R),at="<unnamed>";function _n(i){return i??at}function ot(i){return i!==at}function En(i,e){return e.indexName&&ot(e.indexName)?e.indexName:i}function Ma(i,e,t){return t||(e!=null&&e.indexName&&ot(e.indexName)?e.indexName:String(i))}function di(i=R.TABLE){return{"/columns":{"/items":{"/*":()=>di(R.COLUMN)},kind:R.COLUMNS},"/indexes":{"/items":{"/*":()=>di(R.INDEX)},kind:R.INDEXES},kind:i}}const ji={Identity:"identity",Expression:"expression"};function Tn(i){return i.kind===Pe.Literal&&typeof i.value=="string"}function qn(i){return i.kind===Pe.RawExpr&&typeof i.expr=="string"}function In(i){return _(i)&&typeof i.expr=="string"}function Ln(i){return _(i)&&typeof i.value=="string"}function Mn(i){if(!_(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!_(t)||!("before"in t)||!("after"in t)?!1:We.isDiff(e)}const De="titleRow",Rn=["typeName","size","precision","scale","label"],Ra={ToEnum:"to-enum",FromEnum:"from-enum"},Pa={Lost:"lost",Gained:"gained"},st=["isPrimaryKey","isUnique","isNotNull","isGenerated"],lt=["isUnique"],Fa=[ee,De,"schemaName","description"],Oa=[ee,De,"description","generatedExpression",...st],ja=[ee,De,"description",...lt];function dt(i){return Mn(i[De])}function Pn(i){return _(i)&&i.kind===Zi.Domain&&typeof i.type=="string"}function Fn(i){return i.kind===I.BoolType&&typeof i.type=="string"}function On(i){return i.kind===I.IntegerType&&typeof i.type=="string"}function Gi(i){return i.kind===I.DecimalType&&typeof i.type=="string"}function Ui(i){return i.kind===I.FloatType&&typeof i.type=="string"}function Ki(i){return i.kind===I.StringType&&typeof i.type=="string"}function Bi(i){return i.kind===I.BinaryType&&typeof i.type=="string"}function Wi(i){return i.kind===I.TimeType&&typeof i.type=="string"}function jn(i){return i.kind===I.JSONType&&typeof i.type=="string"}function Gn(i){return i.kind===I.SpatialType&&typeof i.type=="string"}function Un(i){return i.kind===I.UUIDType&&typeof i.type=="string"}function ri(i){return i.kind===I.EnumType&&Array.isArray(i.values)}function Kn(i){return i.kind===I.UnsupportedType&&typeof i.type=="string"}function Yi(i){return typeof i.type=="string"}function bi(i){switch(i.kind){case Pe.Literal:return Tn(i)?i.value:i.kind;case Pe.RawExpr:return qn(i)?i.expr:i.kind;case Yt.NamedDefault:try{return bi($t(i))}catch{return i.kind}default:return In(i)?i.expr:Ln(i)?i.value:i.kind}}function ut(i){return gt(ft(bi(i)))}function Bn(i){return gt(ft(i))}function ft(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}function gt(i){return i.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}const Wn="Columns",Yn="Indexes";class $n{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=Ae(t.attrs,_e.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:Wn,items:(t.columns??[]).map(a=>this.buildColumnRowValue(t,a))},indexes:{title:Yn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:_(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return _(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!_(e)||typeof e.tableName!="string"||!_(e.columns)||!Array.isArray(e.columns.items)||!_(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t){var h,m,C;const n=Ae(t.attrs,_e.Comment),r=(h=t.attrs)==null?void 0:h.find(k=>k.kind===Jt.Identity),a=Ae(t.attrs,_e.GeneratedExpr),s=r!==void 0||a!==void 0,d=this.findForeignKeysForColumn(e,t).map(k=>this.buildForeignKeyTarget(k,t)).filter(k=>k!==void 0),f=d.length>0,g=this.formatColumnType(t.type),c=(m=t.type)==null?void 0:m.type,p=c&&ri(c)?c.values:void 0,y=this.isPrimaryKeyColumn(e,t);return{columnName:t.name,columnType:g,...p?{enumValues:p}:{},isPrimaryKey:y,isForeignKey:f,...d.length>0?{foreignKeyTargets:d}:{},isGenerated:s,...r?{generatedBy:ji.Identity}:{},...a&&!r?{generatedBy:ji.Expression}:{},...a?{generatedExpression:a.expr}:{},isUnique:this.isUniqueColumn(e,t),isNotNull:!y&&((C=t.type)==null?void 0:C.null)===!1,...t.default!==void 0?{defaultValue:ut(t.default)}:{},...n?{description:n.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=Ae(e.attrs,_e.Comment);return{indexName:_n(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>r.column===t.name)}isSingleColumnUniqueIndexForColumn(e,t){return e.unique===!0&&this.isSingleColumnIndexForColumn(e,t)}isSingleColumnIndexForColumn(e,t){const n=e.parts??[];return n.length===1&&n[0].column===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.includes(t.name)})}buildForeignKeyTarget(e,t){var s,l;const n=((s=e.columns)==null?void 0:s.indexOf(t.name))??-1;if(n<0)return;const r=e.refTable,a=(l=e.refColumns)==null?void 0:l[n];if(!(!r||!a))return{schemaName:r.schema,tableName:r.name,columnName:a}}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Pn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return Fn(e)?{kind:I.BoolType,typeName:e.type,label:t}:On(e)?{kind:I.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Gi(e)?{kind:I.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ui(e)?{kind:I.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ki(e)?{kind:I.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Bi(e)?{kind:I.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Wi(e)?{kind:I.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:jn(e)?{kind:I.JSONType,typeName:e.type,label:t}:Gn(e)?{kind:I.SpatialType,typeName:e.type,label:t}:Un(e)?{kind:I.UUIDType,typeName:e.type,label:t}:ri(e)?{kind:I.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Kn(e)?{kind:I.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Yi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Zi.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Gi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ki(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Bi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ui(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Wi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ri(e)?t=e.type??e.values[0]??"enum":Yi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){return e.column?e.column:e.expr?bi(e.expr):""}}function Jn(i){return Hn(i)}const Xn=new Set([R.TABLE,R.COLUMNS,R.COLUMN,R.INDEXES,R.INDEX]);class Di extends Cn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!Nn(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,Di.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Xn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case R.TABLE:return["tableName","schemaName","description"];case R.COLUMNS:case R.INDEXES:return["title"];case R.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case R.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const zn="[DDL API]";class Ga extends xn{constructor(t){const{source:n,tableKey:r,logger:a=Sn()}=t;super();D(this,"tree");D(this,"source");D(this,"tableKey");D(this,"logger");D(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!_(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new nt},r=di(),a=Jn({source:t,tree:this.tree,supportedNodeKinds:rt,createNodeFromRaw:(s,l,d,f,g)=>this.createNodeFromRaw(s,l,d,f,g),createNodeParams:(s,l,d)=>({value:_(s)&&!Array.isArray(s)?s:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(s,l)=>({parent:l,container:null,ancestors:s.ancestors}),createStateForComplexNode:(s,l)=>({parent:s.parent,container:l,ancestors:s.ancestors}),isSimpleNode:s=>this.isSimpleTreeNode(s),isComplexNode:s=>this.isComplexTreeNode(s),resolveNodeKey:(s,l)=>this.resolveNodeKey(s,l)});return Xt(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return zn}createTree(){return new An}createNodeDataBuilder(){return new Di}prepareSource(){return new $n(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,s){const{parent:l,container:d,newDataLevel:f}=s;if(a){const y=this.createNodeMeta(n,s),h={type:se.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:y,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,h)}const g=this.createNodeValue(n,r,s),c=this.createNodeMeta(n,s),p={type:se.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,p)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(s,l)=>this.pick(s,l))}resolveNodeKey(t,n){return _(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?En(t,n):t:t}isSimpleTreeNode(t){return t.type===se.SIMPLE}isComplexTreeNode(t){return t.type===se.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function Qn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function Zn(i){const e=new Map;return i.map(t=>{const n=Qn(t),r=e.get(n)??0;return e.set(n,r+1),r===0?n:`${n}\0${r}`})}const J={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function ct(i,e,t){const n=t===P,r=new Set,a=[],s=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&z(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=s(d);if(!f){a.push({text:d});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if($(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(B(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(z(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;a.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||r.has(f)||B(f.data)&&n&&(a.push({text:d,diff:f}),r.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return a.sort((d,f)=>l(d.text)-l(f.text))}function pt(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function Ne(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===P;return $(n)?r?void 0:String(n.afterValue??i??""):B(n)?r?String(n.beforeValue??i??""):void 0:z(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function ht(i,e){return(e===P?i.styles.before:i.styles.after).isContentVisible}function er(i,e){return i?ht(i,e):!0}function ir(i,e){return i?(e===P?i.styles.before:i.styles.after).isHeaderVisible:!0}function tr(i){if(i&&($(i.data)||B(i.data)))return i}const $i=["size","precision","scale"];class Y{static takeFieldDiffs(e){const t=e.diffs.columnTypeFieldDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var g;const n=(g=e.value())==null?void 0:g.columnType;if(!n)return{kind:J.NO_DIFFS,text:""};const r=Y.takeFieldDiffs(e);if(!r)return{kind:J.NO_DIFFS,text:n.label};const a=r.typeName??r.label,s=r.typeName?"typeName":"label";if(Y.shouldUseMonolithicHighlight(r)){const c=Object.values(r).find(Boolean);return c?{kind:J.WHOLE_DIFFS,text:Y.buildMonolithicSideLabel(n,r,s,t),diff:Y.buildMonolithicDiffMetadata(c)}:{kind:J.NO_DIFFS,text:n.label}}const l=[],d=Ne(Y.takeDisplayName(n),a,t);d!==void 0&&l.push({text:d,diff:a});const f=Y.buildParameterSideSegments(n,r,t);return l.push(...f),l.length===0?{kind:J.NO_DIFFS,text:n.label}:{kind:J.PARTIAL_DIFFS,segments:l}}static shouldUseMonolithicHighlight(e){const t=Rn.map(r=>[r,e[r]]).filter(r=>!!r[1]);if(t.length===0)return!1;if(t.length===1){const[r]=t[0];return r==="typeName"||r==="label"}return new Set(t.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,t,n,r){const a=Ne(Y.takeDisplayName(e),t[n],r)??Y.takeDisplayName(e),s=[];for(const l of $i){const d=Ne(Y.takeParameterValue(e,l),t[l],r);d!==void 0&&s.push(d)}return s.length===0?a:`${a} (${s.join(", ")})`}static buildParameterSideSegments(e,t,n){const r=Y.collectVisibleParameterKeys(e,t,n);if(r.length===0)return[];const a=r.flatMap(s=>{const l=Ne(Y.takeParameterValue(e,s),t[s],n);return l===void 0?[]:[{text:l,diff:t[s]}]});return[...pt(a,"spaced")]}static collectVisibleParameterKeys(e,t,n){return $i.filter(r=>{const a=t[r];return a?ht(a,n):Y.takeParameterValue(e,r)!==void 0})}static takeDisplayName(e){return"typeName"in e&&typeof e.typeName=="string"?e.typeName:"name"in e&&typeof e.name=="string"?e.name:e.label}static takeParameterValue(e,t){if(!(t in e))return;const n=Reflect.get(e,t);return typeof n=="number"?n:void 0}static buildMonolithicDiffMetadata(e){const{data:t}=e;return z(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow}}}:$(t)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Green}}}:B(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class vi{static takeDiffs(e){const t=e.diffs.partNameDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.partNames)??[],r=vi.takeDiffs(e),a=r?ct(n,r,t):n.map(d=>({text:d})),s=pt(a,"tight");return s.length===0?{kind:J.NO_DIFFS,text:""}:{kind:J.PARTIAL_DIFFS,segments:s}}}class Vi{static takeTitleRowDiff(e){if(dt(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){const t=e.diffs[ee];if(t&&($(t.data)||B(t.data)))return t}static takeSchemaNameDiff(e){return e.diffs.schemaName}static takeDescriptionDiff(e){return e.diffs.description}static resolveSchemaNameSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.schemaName)??"",r=Vi.takeSchemaNameDiff(e);if(!r)return n;const a=r.data,s=t===P;return $(a)?s?"":n:B(a)?s?n:"":z(a)?s?typeof a.beforeValue=="string"?a.beforeValue:n:typeof a.afterValue=="string"?a.afterValue:n:n}}class nr{static takeTitleRowDiff(e){if(dt(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){return tr(e.diffs[ee])}static isSubheaderVisible(e,t){return ir(e,t)}static isContentVisible(e,t){return er(e,t)}static isListSectionUniformWholeNodeChange(e){const t=e.diffs[ee];return t?$(t.data)||B(t.data):!1}}class rr{static takeFlagDiffs(e){const t={};let n=!1;for(const r of st){const a=e.diffs[r];a&&(t[r]=a,n=!0)}return n?t:void 0}static isFlagBadgeHighlighted(e){return e?e.highlightingMode.get(oi.Default)!==qe.Invisible:!1}static takeGeneratedExpressionDiff(e){return e.diffs.generatedExpression}static takeDescriptionDiff(e){return e.diffs.description}}let ar=class mt{static takeTargetDiffs(e){const n=e.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}static resolveTargetSideDisplay(e,t,n){const r=t==null?void 0:t.data;return n===P&&r&&z(r)&&mt.isTarget(r.beforeValue)?r.beforeValue:e}static isTarget(e){return _(e)&&typeof e.schemaName=="string"&&typeof e.tableName=="string"&&typeof e.columnName=="string"}};class de{static takeDiff(e){return e.diffs.defaultValue}static takeRowColorizingDiff(e){return e.diffs.defaultValueRowColorizingDiff}static resolveSideDisplay(e,t){var l;const n=(l=e.value())==null?void 0:l.defaultValue,r=de.takeDiff(e),a=t===P;if(!r){const d=e.diffs[ee];if(d){const f=d.data;if($(f))return a?void 0:n;if(B(f))return a?n:void 0}return n}const s=r.data;return $(s)?a?void 0:n??de.formatDiffSide(s.afterValue):B(s)?a?de.formatDiffSide(s.beforeValue)??n:void 0:z(s)?a?de.formatDiffSide(s.beforeValue)??n:de.formatDiffSide(s.afterValue)??n:n}static formatDiffSide(e){if(typeof e=="string")return Bn(e);if(_(e)&&"kind"in e)return ut(e)}}class wi{static takeDiffs(e){const n=e.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}static takeRowColorizingDiff(e){return e.diffs.enumValuesRowColorizingDiff}static resolveSideItems(e,t){var n;return ct(((n=e.value())==null?void 0:n.enumValues)??[],wi.takeDiffs(e),t).map(({text:r,diff:a})=>({literal:r,diff:a}))}}class or{static takeFlagDiffs(e){const t={};let n=!1;for(const r of lt){const a=e.diffs[r];a&&(t[r]=a,n=!0)}return n?t:void 0}static takeDescriptionDiff(e){return e.diffs.description}}class v{}D(v,"Table",Vi),D(v,"PropertyRow",nr),D(v,"Column",rr),D(v,"ForeignKey",ar),D(v,"ColumnDefaultValue",de),D(v,"ColumnEnumValues",wi),D(v,"Index",or),D(v,"IndexPartNames",vi),D(v,"ColumnTypeLabel",Y);const sr={ENUM:zt,MIN_LENGTH:Qt,MAX_LENGTH:Zt,PATTERN:en,MINIMUM:tn,MAXIMUM:nn,EXCLUSIVE_MINIMUM:rn,EXCLUSIVE_MAXIMUM:an,MULTIPLE_OF:on,MIN_PROPERTIES:sn,MAX_PROPERTIES:ln,UNIQUE_ITEMS:dn,MIN_ITEMS:un,MAX_ITEMS:fn},M={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:sr.UNIQUE_ITEMS},Ua={[M.VALUE_LENGTH]:["minLength","maxLength"],[M.VALUE_PATTERN]:["pattern"],[M.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[M.VALUE_MULTIPLE_OF]:["multipleOf"],[M.PROPERTIES_COUNT]:["minProperties","maxProperties"],[M.ITEMS_COUNT]:["minItems","maxItems"],[M.UNIQUE_ITEMS]:["uniqueItems"]},Ka={[M.VALUE_LENGTH]:te.ValueLengthRow,[M.VALUE_PATTERN]:te.ValuePatternRow,[M.VALUE_RANGE]:te.ValueRangeRow,[M.VALUE_MULTIPLE_OF]:te.ValueMultipleOfRow,[M.PROPERTIES_COUNT]:te.PropertiesCountRow,[M.ITEMS_COUNT]:te.ItemsCountRow,[M.UNIQUE_ITEMS]:te.UniqueItemsRow},Ba={[M.VALUE_LENGTH]:{minLength:0,maxLength:1},[M.VALUE_PATTERN]:{pattern:0},[M.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[M.VALUE_MULTIPLE_OF]:{multipleOf:0},[M.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[M.ITEMS_COUNT]:{minItems:0,maxItems:1},[M.UNIQUE_ITEMS]:{uniqueItems:0}},lr=u.createContext(!1),Ye=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:o.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[o.jsx(gn,{variant:t,message:n}),e]})};Ye.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const $e=u.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});$e.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Je=u.memo(i=>{const{left:e,right:t}=i;return o.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[o.jsx("div",{className:"flex w-1/2",children:e}),o.jsx("div",{className:"flex w-1/2",children:t})]})});Je.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ni="px-4",ui="",dr="px-4",xi="";var T=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(T||{}),A=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(A||{});const fi=5,gi=300;function ur(i){return i?i.length>gi||et.trim(i.split(`
`)).length>fi:!1}function fr(i){if(!i)return;if(i.length>gi)return i.slice(0,gi)+"...";const e=et.trim(i.split(`
`));return e.length>fi?e.slice(0,fi).join(`
`)+"...":i}function gr(i){switch(i){case A.h1:return"text-value-expander--h1";case A.h2:return"text-value-expander--h2";case A.h3:return"text-value-expander--h3";case A.h4:return"text-value-expander--h4";case A.h5:return"text-value-expander--h5";case A.h6:return"text-value-expander--h6";case A.body1:return"text-value-expander--body1";case A.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const cr=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=u.useCallback(()=>{n==null||n(s=>!s)},[n]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${gr(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},yt=u.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:s,highlightingMode:l=qe.Default}=i,d=l===qe.Default,f=l===qe.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:y,label:h}=i,[m,C]=u.useState(!1),k=u.useCallback((w,x,N)=>{if(N)return null;const H=f?"":x.join(" "),S=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),O=`${S} ${H}`.trim(),Q={onClick:r,...y!=null&&y.trim()?{style:{color:y}}:{}};w=m?w:fr(w);const pe=(F,le)=>{const W={...Q,className:le};switch(t){case A.h1:return o.jsx("h1",{...W,children:F});case A.h2:return o.jsx("h2",{...W,children:F});case A.h3:return o.jsx("h3",{...W,children:F});case A.h4:return o.jsx("h4",{...W,children:F});case A.h5:return o.jsx("h5",{...W,children:F});case A.h6:return o.jsx("h6",{...W,children:F});case A.body1:return o.jsx("span",{...W,className:`${le} text-value-body1`.trim(),children:F});case A.body2:return o.jsx("span",{...W,className:`${le} text-value-body2`.trim(),children:F})}};return h?pe(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),o.jsx("span",{className:H,children:w})]}),S):pe(w,O)},[m,f,h,p,c,r,y,g,t]),b=u.useCallback(w=>{const x=[];let N=w,H=!1;if(a){const{data:S,styles:O}=a;switch(n){case P:x.push(K.highlighter(O.before.textHighlighterColor)),d&&(B(S)&&(N=he(S.beforeValue)?S.beforeValue:N),z(S)&&(s===T.JsoProperty&&!f&&x.push(K.highlighter(me.Yellow)),N=he(S.beforeValue)?S.beforeValue:N),ai(S)&&(N=he(S.beforeKey)?S.beforeKey:N)),$(S)&&(H=!0);break;case ne:x.push(K.highlighter(O.after.textHighlighterColor)),d&&($(S)&&(N=he(S.afterValue)?S.afterValue:N),z(S)&&(s===T.JsoProperty&&!f&&x.push(K.highlighter(me.Yellow)),N=he(S.afterValue)?S.afterValue:N),ai(S)&&(N=he(S.afterKey)?S.afterKey:N)),B(S)&&(H=!0);break}}return[N,x,H]},[a,d,f,n,s]),[V,L,E]=b(e);return u.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[k(V,L,E),!E&&o.jsx(cr,{isExpandable:ur(V),expanded:m,setExpanded:C,variant:t})]}),[k,V,L,E,m,C,t])});function he(i){return typeof i=="string"}const X="data-precededby",j="data-ddl-list-last-row";var G=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSON_SCHEMA_PROPERTY="json-schema-property",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(G||{}),re=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(re||{});const pr={[re.DdlApiProperty]:xi},hr={[re.DdlApiProperty]:["min-h-[26px]"]};function mr(i){const e=pr[i]??Ni,t=hr[i]??[];return[e,...t].join(" ")}const Ie=u.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=re.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:s,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[X]:c}=i,{diff:p,descendantDiffs:y,diffsSeverities:h}=i,m=ge(),C=r===re.DdlApiProperty,k=u.useMemo(()=>!a||v.PropertyRow.isContentVisible(p,n),[p,a,n]),b=C&&m>0&&k,V=u.useMemo(()=>{if(!p)return[];const{data:q,styles:w}=p;if(!q)return[];const x=[];return n===P&&x.push(K.background(w.before.backgroundColor)),n===ne&&x.push(K.background(w.after.backgroundColor)),x},[p,n]),L=u.useMemo(()=>mr(r),[r]),E=o.jsx(yt,{label:s,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return o.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${C?"items-stretch":""} ${L} gap-2 ${V.join(" ")}`,children:[b&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(xe,{level:m}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),C?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:E}):E]})});Ie.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Se=u.memo(i=>{const e=Ue(),{diffsSeverities:t,diffsSeverityPlacement:n=te.DescriptionRow}=i,r=u.useMemo(()=>t==null?void 0:t[n],[t,n]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),s=u.useMemo(()=>pi(r==null?void 0:r.causedAt),[r]);switch(e){case mi:return o.jsx(Ye,{diffType:a,diffTypeCause:s,hidden:!1,children:o.jsx(Je,{left:o.jsx(Ie,{...i,layoutSide:P}),right:o.jsx(Ie,{...i,layoutSide:ne})})});case hi:return o.jsx($e,{content:o.jsx(Ie,{...i,layoutSide:ne})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Se.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Xe="#353C4E",yr=u.createContext(void 0);function bt(){return u.useContext(yr)}const Dt=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=u.useContext(lr),s=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!s?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${s?"gap-0.5":""}`,children:[s&&o.jsx(si,{short:e}),e&&t!==void 0&&o.jsx(li,{onToggle:l,expanded:t})]})};Dt.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ji="w-4 min-w-[16px] shrink-0 flex-none",br="w-3 min-w-[12px] shrink-0 flex-none",Si=()=>o.jsx("div",{className:br,"aria-hidden":"true"}),vt=i=>{const{isRoot:e,expandable:t,expanded:n,onClick:r}=i;return e&&!t?o.jsx(Si,{}):e&&t?o.jsx("div",{className:"flex flex-row items-center justify-center pt-1.5",children:n!==void 0&&o.jsx(li,{onToggle:r??(()=>{}),expanded:n})}):t?o.jsxs("div",{className:`flex flex-row items-center justify-center pt-1.5 gap-0.5 ${Ji}`,children:[o.jsx(si,{short:!0}),n!==void 0&&o.jsx(li,{onToggle:r??(()=>{}),expanded:n})]}):o.jsx("div",{className:`flex flex-row items-center justify-center pt-1.5 ${Ji}`,children:o.jsx(si,{})})};Si.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRootExpanderOffset"};vt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExpanderColumn",props:{isRoot:{required:!0,tsType:{name:"boolean"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Dr={[T.JsoProperty]:ui,[T.DdlApiSection]:dr,[T.DdlApiProperty]:xi,[T.JsonSchemaProperty]:ui},vr={[T.JsoProperty]:["min-h-[26px]"],[T.DdlApiProperty]:["min-h-[26px]"]};function Vr(i){const e=Dr[i]??Ni,t=vr[i]??[];return[e,...t].join(" ")}const Le=u.memo(i=>{const{expandable:e,expanded:t,isRoot:n=!1,onClickExpander:r,value:a,titleContent:s,variant:l,layoutSide:d,enableHeader:f=!0,enableHeaderValue:g=!0,subheader:c,usage:p=T.Default,highlightingMode:y=cn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:m,descendantDiffs:C,diffsSeverities:k}=i,{[X]:b,[j]:V}=i,L=u.useMemo(()=>{switch(p){case T.Default:case T.DdlApiProperty:return y.get(oi.Default);case T.AsyncApiJsoSection:case T.JsoProperty:return y.get(oi.JsoPropertyKey)}},[y,p]),E=ge(),q=bt(),w=u.useMemo(()=>q?d===P?q.beforeLevel:q.afterLevel:E,[d,E,q]),x=u.useMemo(()=>{const F=[];if(!m)return F;const{data:le,styles:W}=m;return le&&(d===P&&F.push(K.background(W.before.backgroundColor)),d===ne&&F.push(K.background(W.after.backgroundColor))),F},[m,d]),N=u.useMemo(()=>typeof s=="function"?s(d):s||(g?o.jsx(yt,{"data-precededby":b,value:a,variant:l,layoutSide:d,diff:m,usage:p,highlightingMode:L,onClick:r}):null),[s,g,b,a,l,d,m,p,L,r]),H=p===T.DdlApiProperty,S=p===T.JsonSchemaProperty,O=n||w===0,Q=u.useMemo(()=>f?S?o.jsxs("div",{"data-precededby":b,className:"level-indicator-column flex shrink-0 items-stretch self-stretch",children:[o.jsx(xe,{level:w}),o.jsx(vt,{isRoot:O,expandable:e,expanded:t,onClick:r})]}):o.jsxs(o.Fragment,{children:[(e||w>0)&&o.jsxs("div",{"data-precededby":b,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(xe,{level:w}),o.jsx(Dt,{expandable:e,expanded:t,onClick:r,level:w})]}),!H&&N]}):h?null:w>0&&o.jsx(xe,{level:w}),[f,e,t,h,H,S,O,w,r,b]),pe=u.useMemo(()=>Vr(p),[p]);return o.jsxs("div",{"data-precededby":b,"data-ddl-list-last-row":V?!0:void 0,"data-usage":p!==T.Default?p:void 0,className:`title-row-content flex w-full ${H||S?"items-stretch":"items-center"} h-full ${pe} gap-2 ${x.join(" ")}`,children:[Q,H?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[N,c==null?void 0:c(d)]}):S?o.jsxs("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center gap-2",children:[N,c==null?void 0:c(d)]}):c==null?void 0:c(d)]})});Le.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},usage:{required:!1,tsType:{name:"TitleRowUsage"},description:""},highlightingMode:{required:!1,tsType:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{const e=Ue(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=u.useMemo(()=>n==null?void 0:n["title-row"],[n]),s=u.useMemo(()=>a==null?void 0:a.type,[a]),l=u.useMemo(()=>pi(a==null?void 0:a.causedAt),[a]);switch(e){case mi:return o.jsx(Ye,{diffType:s,diffTypeCause:l,hidden:!1,children:o.jsx(Je,{left:o.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:P}),right:o.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:ne})})});case hi:return o.jsx($e,{content:o.jsx(Le,{...i,layoutSide:ne})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},usage:{required:!1,tsType:{name:"TitleRowUsage"},description:""},highlightingMode:{required:!1,tsType:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Wa(i,e){return u.useMemo(()=>e(i)?ke(i):{},[e,i])}function ke(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function ze(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:s}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const m=g.find(([C])=>C===String(h));return m==null?void 0:m[1]},p=t?c(t):void 0;return{diff:s?s(l,c):n?l[ee]??p:p,...r?{descendantDiffs:d}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function wr(i){return rt.includes(i.kind)}function Ya(i){return i.childrenNodes().filter(wr)}function Nr(i){return i.kind===R.TABLE}function $a(i){return Nr(i)&&i instanceof ce}function xr(i){return i.kind===R.COLUMNS}function Sr(i){return xr(i)&&i instanceof ce}function kr(i){return Hr(i)&&i instanceof ce}function Vt(i){return i.kind===R.COLUMN}function ki(i){return Vt(i)&&i instanceof ce}function Hr(i){return i.kind===R.INDEXES}function wt(i){return i.kind===R.INDEX}function Nt(i){return wt(i)&&i instanceof ce}function xt(i){return i.filter(Vt)}function St(i){return i.filter(wt)}const Cr=u.createContext(null);function Ar(){const i=u.useContext(Cr);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const _r=({href:i,className:e,children:t})=>o.jsx("a",{href:i,className:e,children:t});_r.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const kt=v.PropertyRow.takeNodeDiffIfPresent;function Ht(i){const e=ze(ke(i),{resolveDiff:()=>v.PropertyRow.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Ja(i){const e=ze(ke(i),{resolveDiff:()=>v.Table.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Xa=v.Table.takeNodeDiffIfPresent,Er="ux-badge_ddlapi_primary-key",Ct="ux-badge_ddlapi_foreign-key",Tr="ux-badge_ddlapi_unique",qr="ux-badge_ddlapi_not-null",Ir="ux-badge_ddlapi_generated",Lr="public",At="Default",_t="As",Et="Values";function Mr(i){return i?!!(Fe(i.defaultValue)||Fe(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Rr="detailed";function Z(i){return i===Rr}function Oe(i){return i!=null}let Tt=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),s=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:s,showGeneratedRow:l,showAnyAdditionalInfoRow:a||s||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:s,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!s&&!l,isDefaultAdditionalInfoListLastRow:e&&s&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return Z(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return Z(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return Z(t)&&Oe(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return Z(t)&&Oe(e==null?void 0:e.generatedExpression)}};const Hi=new Tt;function Pr(i,e){return Hi.resolveNodeVisibility(i,e)}function Fr(i,e){return Hi.resolveListLastRowFlags(i,e)}function Xi(i,e){return Hi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const qt=u.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?o.jsx("div",{className:n,children:o.jsx("pre",{className:r||void 0,style:{fontFamily:"Inter"},children:`${t}`})}):null});qt.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var je=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(je||{});function Or(i={}){const{usage:e=je.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:r,isEmptyStringPlaceholder:a}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",e===je.JsonSchemaValidation?"additional-info-piece_json-schema-validation":"",K.borderShadow(n)].filter(Boolean).join(" "),valueClassName:["inline",K.highlighter(t),r?K.fontMuted():"",a?"additional-info-piece_empty-string-placeholder":""].filter(Boolean).join(" ")}),[n,a,r,t,e])}const ue=u.memo(i=>{const{isVisible:e,value:t,usage:n=je.Default,textHighlighterColor:r,borderShadowColor:a,isFontMuted:s,isEmptyStringPlaceholder:l}=i,{blockClassName:d,valueClassName:f}=Or({usage:n,textHighlighterColor:r,borderShadowColor:a,isFontMuted:s,isEmptyStringPlaceholder:l});return o.jsx(qt,{isVisible:e,value:t,blockClassName:d,valueClassName:f})});ue.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""},isEmptyStringPlaceholder:{required:!1,tsType:{name:"boolean"},description:""}}};function jr(i){const e=ge(),t=bt();return u.useMemo(()=>t?i===P?t.beforeLevel:t.afterLevel:e,[i,e,t])}var U=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(U||{});const Gr={[U.DdlApiProperty]:xi,[U.JsonSchemaValidation]:ui},Ur={[U.DdlApiProperty]:"ddlapi-property-row-body",[U.Default]:"additional-info-row-body",[U.JsonSchemaValidation]:"json-schema-property-row-body"},Kr={[U.DdlApiProperty]:"min-h-[26px]"};function Br(i,e={}){return{xPaddingClass:e.xPaddingClass??Gr[i]??Ni,bodyClass:e.bodyClass??Ur[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Kr[i]??"",stretchLevelIndicator:i===U.DdlApiProperty}}const Me=u.memo(i=>{var q;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:s=!1,usage:l=U.Default,xPaddingClass:d,bodyClass:f,minHeightClass:g}=i,{[X]:c,[j]:p}=i,y=jr(n),h=u.useMemo(()=>Br(l,{xPaddingClass:d,bodyClass:f,minHeightClass:g}),[l,d,f,g]),m=n===P?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,k=(q=(n===P?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??m)==null?void 0:q.backgroundColor,b=u.useMemo(()=>k?[K.background(k)]:[],[k]),V=u.useMemo(()=>{const w=a==null?void 0:a.data;if(w){if($(w))return n!==P;if(B(w))return n===P}return(m==null?void 0:m.isContentVisible)??!0},[a,m==null?void 0:m.isContentVisible,n]),L=l===U.JsonSchemaValidation&&y===0,E=y>0&&(!s||V);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":p?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",b.join(" ")].filter(Boolean).join(" "),children:[L&&o.jsx(Si,{}),E&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(xe,{level:y}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),V&&o.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[o.jsx("div",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});Me.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},colorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:"Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when\na viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /\nExamples / Allowed values / validation-constraint rows) so each row's floating badge reflects\nonly its own diff, not the node's overall max severity."},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fe=u.memo(i=>{var a;const e=Ue(),t=i.diffsSeverityPlacement??te.AdditionalInfoRow,n=(a=i.diffsSeverities)==null?void 0:a[t],r=u.useMemo(()=>pi(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case mi:return o.jsx(Ye,{diffType:n==null?void 0:n.type,diffTypeCause:r,hidden:!1,children:o.jsx(Je,{left:o.jsx(Me,{...i,layoutSide:P}),right:o.jsx(Me,{...i,layoutSide:ne})})});case hi:return o.jsx($e,{content:o.jsx(Me,{...i,layoutSide:ne})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});fe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}},description:""},colorizingDiff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:"Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when\na viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /\nExamples / Allowed values / validation-constraint rows) so each row's floating badge reflects\nonly its own diff, not the node's overall max severity."},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};const Ci=i=>{const{label:e,colorSchema:t=ii(ti),layoutMode:n,layoutSide:r,diff:a}=i,s=pn(),l=a==null?void 0:a.type,d=hn(l,s),{isDocumentLayoutMode:f,isInlineDiffsLayoutMode:g}=bn(n),{originSide:c,changedSide:p}=Dn(r);if(!(!f&&!!a))return o.jsx(we,{text:e,colorSchema:t});const h=a.action,m=`${ii(ti)} ${yn[h]}`,C=h===Fi.remove&&(g||c),k=h===Fi.add&&(g||p);return d?C?o.jsx(we,{text:o.jsx("span",{className:mn,children:e}),colorSchema:m}):k?o.jsx(we,{text:e,colorSchema:m}):null:C||k?o.jsx(we,{text:e,colorSchema:ii(ti)}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"BadgeWithDiffs",props:{label:{required:!0,tsType:{name:"string"},description:""},colorSchema:{required:!1,tsType:{name:"string"},description:""},layoutMode:{required:!0,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},diff:{required:!1,tsType:{name:"Diff"},description:""}}};const Wr={isContentVisible:!0,isHeaderVisible:!0};function ye(i,e){return i?e===P?i.styles.before:i.styles.after:Wr}function Yr(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Lr?e:`${i.schemaName}.${e}`}function $r(i){return i.join(", ")}const Re=u.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Ar(),s=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",K.highlighter(n)].filter(Boolean).join(" "),[n]),d=o.jsx(a,{href:s,className:l,children:Yr(e)});return t?d:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(we,{text:"FK",colorSchema:Ct,inline:!0}),d]})});Re.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Jr(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function It(i,e){return!!i||!!e}function Ai(i,e){return i?e===P?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Xr(i,e,t){return It(i,e)&&Ai(e,t)}function Te(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:s,layoutSide:l}=i;if(!It(r,a))return null;if(!Ai(a,l))return Jr();const d=v.Column.isFlagBadgeHighlighted(a)?a==null?void 0:a.data:void 0;return o.jsx(Ci,{label:t,colorSchema:n,layoutMode:s,layoutSide:l,diff:d},Qr(e,t))}function zr(i){const{columnId:e,target:t,targetKey:n,targetDiff:r,layoutMode:a,layoutSide:s}=i,l=Zr(e,n),f=ye(r,s).textHighlighterColor;if(r&&!Ai(r,s))return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},l);if(!r)return o.jsx(Re,{target:t},l);if(z(r.data))return o.jsx(Re,{target:v.ForeignKey.resolveTargetSideDisplay(t,r,s),textHighlighterColor:f},l);const g=r.data;return o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Ci,{label:"FK",colorSchema:Ct,layoutMode:a,layoutSide:s,diff:g}),o.jsx(Re,{target:t,hideBadge:!0,textHighlighterColor:f})]},l)}const He=u.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,s=Ue(),l=u.useMemo(()=>n??{},[n]),d=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Te({columnId:e,label:"PK",colorSchema:Er,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:s,layoutSide:a}),[e,l.isPrimaryKey,s,a,t.isPrimaryKey]),g=u.useMemo(()=>Xr(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=u.useMemo(()=>Te({columnId:e,label:"unique",colorSchema:Tr,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:s,layoutSide:a}),[e,l.isUnique,s,a,t.isUnique]),p=u.useMemo(()=>g?null:Te({columnId:e,label:"not null",colorSchema:qr,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:s,layoutSide:a}),[e,l.isNotNull,g,s,a,t.isNotNull]),y=u.useMemo(()=>Te({columnId:e,label:"generated",colorSchema:Ir,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:s,layoutSide:a}),[e,l.isGenerated,s,a,t.isGenerated]),h=u.useMemo(()=>{const C=t.foreignKeyTargets??[];if(C.length===0)return[];const k=Zn(C);return C.map((b,V)=>{const L=k[V];return zr({columnId:e,target:b,targetKey:L,targetDiff:d[L],layoutMode:s,layoutSide:a})})},[e,s,a,d,t.foreignKeyTargets]),m=u.useMemo(()=>[f,c,p,y,...h].filter(Boolean),[h,y,p,f,c]);return m.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:m})});function Qr(i,e){return`${i}-${e}`}function Zr(i,e){return`${i}-FK-${e}`}He.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isPrimaryKey?: boolean
  isUnique?: boolean
  isNotNull?: boolean
  isGenerated?: boolean
  isForeignKey?: boolean
  foreignKeyTargets?: readonly DdlApiForeignKeyTarget[]
}`,signature:{properties:[{key:"isPrimaryKey",value:{name:"boolean",required:!1}},{key:"isUnique",value:{name:"boolean",required:!1}},{key:"isNotNull",value:{name:"boolean",required:!1}},{key:"isGenerated",value:{name:"boolean",required:!1}},{key:"isForeignKey",value:{name:"boolean",required:!1}},{key:"foreignKeyTargets",value:{name:"unknown",required:!1}}]}},description:""},flagDiffs:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  isPrimaryKey?: ChangedPropertyMetaData
  isUnique?: ChangedPropertyMetaData
  isNotNull?: ChangedPropertyMetaData
  isGenerated?: ChangedPropertyMetaData
}`,signature:{properties:[{key:"isPrimaryKey",value:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}},{key:"isUnique",value:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}},{key:"isNotNull",value:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}},{key:"isGenerated",value:{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}}]}},description:""},foreignKeyTargetDiffs:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  data: Diff<DiffType>
  styles: {
    before: DiffStyles
    after: DiffStyles
  }
  flags: {
    before: DiffFlags
    after: DiffFlags
  }
  highlightingMode: Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>
  inherited?: boolean
}`,signature:{properties:[{key:"data",value:{name:"Diff",elements:[{name:"DiffType"}],raw:"Diff<DiffType>",required:!0}},{key:"styles",value:{name:"signature",type:"object",raw:`{
  before: DiffStyles
  after: DiffStyles
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  isContentVisible: boolean
  isHeaderVisible: boolean
  textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  backgroundColor?: HighlightVariant
  borderShadowColor?: HighlightVariant
  isFontMuted?: boolean
}`,signature:{properties:[{key:"isContentVisible",value:{name:"boolean",required:!0}},{key:"isHeaderVisible",value:{name:"boolean",required:!0}},{key:"textHighlighterColor",value:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>",required:!1}},{key:"backgroundColor",value:{name:"HighlightVariant",required:!1}},{key:"borderShadowColor",value:{name:"HighlightVariant",required:!1}},{key:"isFontMuted",value:{name:"boolean",required:!1}}]},required:!0}}]},required:!0}},{key:"flags",value:{name:"signature",type:"object",raw:`{
  before: DiffFlags
  after: DiffFlags
}`,signature:{properties:[{key:"before",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}},{key:"after",value:{name:"signature",type:"object",raw:`{
  increaseLevel: boolean
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]}}],raw:"Record<string, ChangedPropertyMetaData>"}],raw:"Partial<Record<string, ChangedPropertyMetaData>>"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=u.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?o.jsx("span",{className:n,children:`${t}`}):null});_i.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var ae=(i=>(i.Text="text",i.Block="block",i))(ae||{});function Lt(i){const{appearance:e}=i;return u.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const Ce=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ae.Text}=i,r=Lt({appearance:n});return o.jsx(_i,{isVisible:e,value:t,className:r})});Ce.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const Ei=i=>{const{node:e,additionalInfoPrecededBy:t=G.DDL_COLUMN_ROW,isLastInList:n=!1,[X]:r}=i,a=be(),s=e.value(),l=u.useMemo(()=>Pr(e,a),[e,a]),d=u.useMemo(()=>Fr(n,l),[n,l]),f=u.useCallback(y=>s?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(Ce,{isVisible:!0,value:s.columnType.label,appearance:ae.Text}),o.jsx(He,{columnId:e.id,layoutSide:y,value:s})]}):o.jsx(o.Fragment,{}),[e.id,s]),g=u.useCallback(y=>{const h=s==null?void 0:s.defaultValue;return Fe(h)?o.jsx(ue,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[s]),c=u.useCallback(y=>{const h=s==null?void 0:s.generatedExpression;return Fe(h)?o.jsx(ue,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[s]),p=u.useCallback(y=>{var h;return(h=s==null?void 0:s.enumValues)!=null&&h.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:s.enumValues.map((m,C)=>o.jsx(ue,{isVisible:!0,value:m},`${m}-${C}`))}):o.jsx(o.Fragment,{})},[s]);return s?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(oe,{"data-precededby":r,[j]:d.isTitleListLastRow||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:A.body2,subheader:f,usage:T.DdlApiProperty}),l.showDescription&&o.jsx(Se,{"data-precededby":G.DDL_COLUMN_ROW,[j]:d.isDescriptionListLastRow||void 0,value:s.description??"",variant:A.body2,textFontWeight:"normal",textColor:Xe,usage:re.DdlApiProperty}),l.showEnumValuesRow&&o.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":t,[j]:d.isEnumAdditionalInfoListLastRow||void 0,label:Et,subheader:p}),l.showDefaultRow&&o.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Xi(l,"default")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:d.isDefaultAdditionalInfoListLastRow||void 0,label:At,subheader:g}),l.showGeneratedRow&&o.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Xi(l,"generated")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:_t,subheader:c})]}):null};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ea(i){if(ki(i))return v.ForeignKey.takeTargetDiffs(i)}function ia(i){if(ki(i))return v.Column.takeFlagDiffs(i)}function ta(i){if(Nt(i))return v.Index.takeFlagDiffs(i)}const zi=new Tt;class na{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,v.Column.takeDescriptionDiff(e),t),s=this.resolveEnumValuesRowVisible(n,v.ColumnEnumValues.takeDiffs(e),t),l=this.resolveDefaultRowVisible(n,v.ColumnDefaultValue.takeDiff(e),v.ColumnDefaultValue.takeRowColorizingDiff(e),r,t),d=this.resolveGeneratedRowVisible(n,v.Column.takeGeneratedExpressionDiff(e),t);return{showDescription:a,showEnumValuesRow:s,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:s||l||d}}resolveListLastRowFlags(e,t){return zi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return zi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=v.Column.takeGeneratedExpressionDiff(e);return Ne(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[ee];return!!t&&($(t.data)||B(t.data))}resolveDescriptionRowVisible(e,t,n){return Z(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return Z(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const s=Oe(e==null?void 0:e.defaultValue)||!!t||!!n;return Z(a)&&s}resolveGeneratedRowVisible(e,t,n){return Z(n)&&(Oe(e==null?void 0:e.generatedExpression)||!!t)}}const Qe=new na;function ra(i,e){return Qe.resolveNodeVisibility(i,e)}function aa(i,e){return Qe.resolveListLastRowFlags(i,e)}function Qi(i,e){return Qe.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function oa(i,e){return Qe.resolveGeneratedExpressionSideDisplay(i,e)}function sa(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=Lt({appearance:e});return u.useMemo(()=>[r,K.highlighter(t),K.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const Ti=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ae.Text,textHighlighterColor:r,backgroundColor:a}=i,s=sa({appearance:n,textHighlighterColor:r,backgroundColor:a});return o.jsx(_i,{isVisible:e,value:t,className:s})});Ti.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function la(i){return i.text===", "||i.text===","}function ci(i,e,t,n){if(i.diff){const r=ye(i.diff,t);return o.jsx(Ti,{isVisible:!0,value:i.text,appearance:ae.Text,textHighlighterColor:r.textHighlighterColor,backgroundColor:n?r.backgroundColor:void 0},`${i.text}-${e}`)}return o.jsx(Ce,{isVisible:!0,value:i.text,appearance:ae.Text},`${i.text}-${e}`)}function da(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(la(r)){n=!0;return}n&&(t.push(o.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(ci(r,a,e,!1))}),t}const Ge=u.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===J.NO_DIFFS?ci({text:e.text},0,t,!1):e.kind===J.WHOLE_DIFFS?ci({text:e.text,diff:e.diff},0,t,!0):o.jsx("span",{className:"inline-flex items-center",children:da(e.segments,t)})});Ge.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},display:{required:!0,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function ua(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function fa(i,e,t){if(i.diff){const n=ye(i.diff,t);return o.jsx(Ti,{isVisible:!0,value:i.text,appearance:ae.Text,textHighlighterColor:n.textHighlighterColor},`${i.text}-${e}`)}return o.jsx(Ce,{isVisible:!0,value:i.text,appearance:ae.Text},`${i.text}-${e}`)}const Mt=u.memo(i=>{const{node:e,layoutSide:t}=i,n=v.ColumnTypeLabel.resolveSideDisplay(e,t);if(n.kind===J.NO_DIFFS||n.kind===J.WHOLE_DIFFS)return o.jsx(Ge,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=ua(n.segments);return o.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((s,l)=>fa(s,l,t)),a.length>0&&o.jsx(Ge,{layoutSide:t,display:{kind:J.PARTIAL_DIFFS,segments:a}})]})});Mt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Rt=i=>{const{node:e,additionalInfoPrecededBy:t=G.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[X]:a}=i,s=be(),l=e.value(),d=u.useMemo(()=>kt(e),[e]),f=u.useMemo(()=>Ht(e),[e]),g=u.useMemo(()=>ia(e),[e]),c=u.useMemo(()=>ea(e),[e]),p=u.useMemo(()=>v.Column.takeDescriptionDiff(e),[e]),y=u.useMemo(()=>v.Column.takeGeneratedExpressionDiff(e),[e]),h=u.useMemo(()=>v.ColumnEnumValues.takeDiffs(e),[e]),m=u.useMemo(()=>v.ColumnEnumValues.takeRowColorizingDiff(e),[e]),C=u.useMemo(()=>v.ColumnDefaultValue.takeDiff(e),[e]),k=u.useMemo(()=>v.ColumnDefaultValue.takeRowColorizingDiff(e),[e]),b=u.useMemo(()=>ra(e,s),[e,s]),V=u.useMemo(()=>aa(n,b),[n,b]),L=u.useCallback(x=>l?v.PropertyRow.isSubheaderVisible(d,x)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(Mt,{node:e,layoutSide:x}),o.jsx(He,{columnId:e.id,layoutSide:x,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[g,c,e,d,l]),E=u.useCallback(x=>{const N=v.ColumnDefaultValue.resolveSideDisplay(e,x);if(N===void 0)return o.jsx(o.Fragment,{});const H=ye(C,x);return o.jsx(ue,{isVisible:!0,value:N,textHighlighterColor:H.textHighlighterColor,borderShadowColor:H.borderShadowColor})},[C,e]),q=u.useCallback(x=>{const N=oa(e,x);if(N===void 0)return o.jsx(o.Fragment,{});const H=ye(y,x);return o.jsx(ue,{isVisible:!0,value:N,textHighlighterColor:H.textHighlighterColor})},[y,e]),w=u.useCallback(x=>{const N=v.ColumnEnumValues.resolveSideItems(e,x);return N.length===0?o.jsx(o.Fragment,{}):o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:N.map((H,S)=>{const O=ye(H.diff,x);return o.jsx(ue,{isVisible:!0,value:H.literal,textHighlighterColor:O.textHighlighterColor,borderShadowColor:O.borderShadowColor,isFontMuted:O.isFontMuted},`${H.literal}-${S}`)})})},[e]);return l?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(oe,{"data-precededby":a,[j]:V.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:A.body2,subheader:L,usage:T.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),b.showDescription&&o.jsx(Se,{"data-precededby":G.DDL_COLUMN_ROW,[j]:V.isDescriptionListLastRow||void 0,value:l.description??"",variant:A.body2,textFontWeight:"normal",textColor:Xe,usage:re.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),b.showEnumValuesRow&&o.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":t,[j]:V.isEnumAdditionalInfoListLastRow||void 0,label:Et,subheader:w,colorizingDiff:m,diffsSeverities:h||m?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),b.showDefaultRow&&o.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Qi(b,"default")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:V.isDefaultAdditionalInfoListLastRow||void 0,label:At,subheader:E,colorizingDiff:k,diffsSeverities:C||k?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),b.showGeneratedRow&&o.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Qi(b,"generated")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:V.isGeneratedAdditionalInfoListLastRow||void 0,label:_t,subheader:q,diff:y,colorizingDiff:e.diffs[ee],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};Rt.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Pt(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,s=t?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:G.DDL_COLUMN_ROW,l=t?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:G.DDL_COLUMN_ROW,d={columnNode:n,titlePrecededBy:s,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&Mr(n.value()),d})}const ga=i=>{const{node:e,[X]:t}=i;return Sr(e)?o.jsx(pa,{"data-precededby":t,node:e}):o.jsx(ca,{"data-precededby":t,node:e})},ca=i=>{const{node:e,[X]:t}=i,n=ge(),r=be(),a=e.value(),s=xt(e.childrenNodes()),l=r===it,d=u.useMemo(()=>Pt(s,l),[s,l]);return s.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:A.h2,usage:T.DdlApiSection}),o.jsx(Ke.Provider,{value:n+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>o.jsx(Ei,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},pa=i=>{const{node:e,[X]:t}=i,n=ge(),r=be(),a=e.value(),s=xt(e.childrenNodes()),l=r===it,d=u.useMemo(()=>ze(ke(e)),[e]),f=u.useMemo(()=>Pt(s,l),[s,l]),g=u.useMemo(()=>v.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return s.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:A.h2,usage:T.DdlApiSection,...d}),o.jsx(Ke.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:y,isLastInList:h})=>ki(c)?o.jsx(Rt,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):o.jsx(Ei,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,node:c},c.id))})]})};ga.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
| DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMNS>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`}]},description:""}}};let Ft=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return Z(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const Ot=new Ft;function ha(i,e){return Ot.resolveNodeVisibility(i,e)}function ma(i,e){return Ot.resolveListLastRowFlags(i,e)}const qi=i=>{const{node:e,isLastInList:t=!1,[X]:n}=i,r=be(),a=e.value(),s=u.useMemo(()=>ha(e,r),[e,r]),l=u.useMemo(()=>ma(t,s),[t,s]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(c=>{if(!a)return o.jsx(o.Fragment,{});const p=$r(a.partNames);return o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&o.jsx(Ce,{isVisible:!0,value:`(${p})`,appearance:ae.Text}),o.jsx(He,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=s.showDescription;return a?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(oe,{"data-precededby":n,[j]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:A.body2,subheader:s.showSubheader?f:void 0,usage:T.DdlApiProperty}),g&&o.jsx(Se,{"data-precededby":G.DDL_INDEX_ROW,[j]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:A.body1,textFontWeight:"normal",textColor:Xe,usage:re.DdlApiProperty})]}):null};qi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ya=new Ft;class ba{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,v.Index.takeDescriptionDiff(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=v.Index.takeFlagDiffs(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return ya.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return Z(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const jt=new ba;function Da(i,e){return jt.resolveNodeVisibility(i,e)}function va(i,e){return jt.resolveListLastRowFlags(i,e)}const Gt=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[X]:r}=i,a=be(),s=e.value(),l=u.useMemo(()=>Da(e,a),[e,a]),d=u.useMemo(()=>va(t,l),[t,l]),f=u.useMemo(()=>kt(e),[e]),g=u.useMemo(()=>Ht(e),[e]),c=u.useMemo(()=>ta(e),[e]),p=u.useMemo(()=>v.Index.takeDescriptionDiff(e),[e]),y=(s==null?void 0:s.indexName)??"",h=u.useCallback(k=>{const b=v.IndexPartNames.resolveSideDisplay(e,k);return o.jsx(Ge,{layoutSide:k,display:b})},[e]),m=u.useCallback(k=>{if(!s)return o.jsx(o.Fragment,{});if(!v.PropertyRow.isSubheaderVisible(f,k))return o.jsx(o.Fragment,{});const b=s.partNames.length>0;return o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[b&&h(k),o.jsx(He,{columnId:e.id,layoutSide:k,value:s,flagDiffs:c})]})},[c,e.id,f,h,s]),C=l.showDescription;return s?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(oe,{"data-precededby":r,[j]:d.isTitleListLastRow||void 0,value:y,expandable:!1,expanded:!0,variant:A.body2,subheader:l.showSubheader?m:void 0,usage:T.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),C&&o.jsx(Se,{"data-precededby":G.DDL_INDEX_ROW,[j]:d.isDescriptionListLastRow||void 0,value:s.description??"",variant:A.body1,textFontWeight:"normal",textColor:Xe,usage:re.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Gt.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ut(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:G.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const Va=i=>{const{node:e,[X]:t}=i;return kr(e)?o.jsx(Na,{"data-precededby":t,node:e}):o.jsx(wa,{"data-precededby":t,node:e})},wa=i=>{const{node:e,[X]:t}=i,n=ge(),r=e.value(),a=St(e.childrenNodes()),s=u.useMemo(()=>Ut(a),[a]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:A.h2,usage:T.DdlApiSection}),o.jsx(Ke.Provider,{value:n+1,children:s.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>o.jsx(qi,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},Na=i=>{const{node:e,[X]:t}=i,n=ge(),r=e.value(),a=St(e.childrenNodes()),s=u.useMemo(()=>ze(ke(e)),[e]),l=u.useMemo(()=>Ut(a),[a]),d=u.useMemo(()=>v.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:A.h2,usage:T.DdlApiSection,...s}),o.jsx(Ke.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>Nt(f)?o.jsx(Gt,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):o.jsx(qi,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};Va.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
| DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEXES>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`}]},description:""}}};export{Hn as $,X as A,Mn as B,ga as C,Lr as D,Oa as E,De as F,Ra as G,Pa as H,Va as I,Rn as J,ja as K,Fa as L,rt as M,ye as N,Ye as O,G as P,Je as Q,Xa as R,ce as S,oe as T,Ja as U,v as V,$a as W,Ni as X,vn as Y,ni as Z,Vn as _,Hr as a,Cn as a0,Nn as a1,xn as a2,wn as a3,se as a4,nt as a5,_a as a6,tt as a7,Ea as a8,Aa as a9,xi as aA,Si as aB,ue as aC,je as aD,Wa as aE,fe as aF,U as aG,Ci as aH,tr as aI,ir as aJ,er as aK,Ca as aa,qa as ab,Ia as ac,M as ad,Ka as ae,Ua as af,Ba as ag,$e as ah,yt as ai,lr as aj,yr as ak,bt as al,ke as am,ze as an,T as ao,La as ap,sr as aq,Z as ar,ui as as,jr as at,Ne as au,J as av,fr as aw,ur as ax,re as ay,gr as az,A as b,Se as c,Xe as d,Sn as e,Ga as f,Ya as g,Nr as h,xr as i,Cr as j,_r as k,_ as l,$n as m,ri as n,Zn as o,Qn as p,Bn as q,Ma as r,ut as s,ot as t,Ta as u,Di as v,We as w,R as x,st as y,lt as z};
