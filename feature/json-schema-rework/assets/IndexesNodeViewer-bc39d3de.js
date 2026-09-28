var Kt=Object.defineProperty;var Bt=(i,e,t)=>e in i?Kt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var v=(i,e,t)=>(Bt(i,typeof e!="symbol"?e+"":e,t),t);import{t as $,v as B,w as ri,x as Z,Z as Wt,_ as Ve,$ as Re,N as ee,a0 as Zi,P as q,a1 as Yt,a2 as $t,K as Ae,Q as Jt,M as _e,a3 as Xt,U as R,H as me,a4 as ai,a5 as qe,a6 as zt,a7 as Qt,a8 as Zt,a9 as en,aa as tn,ab as nn,ac as rn,ad as an,ae as on,af as sn,ag as ln,ah as dn,ai as un,aj as fn,R as te,ak as gn,al as et,W as ne,V as K,am as ge,an as xe,X as Ge,Y as pi,l as hi,S as mi,ao as oi,ap as si,y as cn,aq as Fe,ar as pn,as as hn,at as Ne,au as ei,av as ii,aw as mn,ax as yn,O as Pi,ay as bn,az as Dn,u as be,f as Ue,h as it}from"./UxBadge-3d9cd0ec.js";import{j as s}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const se={SIMPLE:"simple",COMPLEX:"complex"};class Ke{constructor(e="#",t="",n,r,a){v(this,"type");v(this,"parent");v(this,"container");v(this,"newDataLevel");v(this,"_value");v(this,"_meta");v(this,"_childrenNodes",[]);v(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new Ke(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class yi extends Ke{constructor(t="#",n="",r,a,o){super(t,n,r,a,o);v(this,"type");this.id=t,this.key=n,this.kind=r,this.type=o.type}createCycledClone(t,n,r){const a=new yi(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class vn{constructor(){v(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const o=new Ke(e,t,n,r,a);return this.nodes.set(e,o),o}createComplexNode(e,t,n,r,a){const o=new yi(e,t,n,r,a);return this.nodes.set(e,o),o}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const Vn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Nn=Object.values(Vn);new Set(Nn);class Be{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!_(e))return!1;for(const t of Object.values(e))if(!Be.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return _(t)&&($(t)||B(t)||ri(t)||Z(t))}}function _(i){return tt(i)&&!Array.isArray(i)}function tt(i){return typeof i=="object"&&i!==null}function wn(i){return _(i)&&Object.keys(i).every(e=>typeof e=="string")}function ti(i){return Array.isArray(i)}function ka(i){return typeof i=="number"}function Ha(i){return typeof i=="string"}function Ca(i,e,t){let n=i,r=!1;for(const a of e){if(!_(n)&&!ti(n))return;if(r){let l;tt(n)&&(l=n[a]),!l&&ti(n)&&t&&(l=n.find(d=>_(d)&&d[t]===a)),n=l,r=!1;continue}n=n[a],ti(n)&&(r=!0)}return n}function Aa(i,e){return Object.keys(i).find(t=>i[t]===e)}function _a(i){if(Be.isDiffsRecord(i))return i}class xn{constructor(){v(this,"tree",null)}pick(e,t){if(!_(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?n[a]=[...o]:_(o)?n[a]={...o}:n[a]=o}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class nt{constructor(){v(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const Ee=()=>{},Sn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:Ee,info:Ee,warn:Ee,error:Ee};class Ea{constructor(){v(this,"fragments",new Map);v(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Oi(i,e){return"#"+Wt([...i,...e])}function Ta(i,e){const t=new nt,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function qa(i){return Array.isArray(i)?i.length>0:_(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function kn(i){return i==null||!_(i)&&!Ve(i)}function Hn(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:l,isSimpleNode:d,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=kn,shouldSkipNodeCreation:p,shouldStopAfterNodeCreation:y,lazy:h}=i;return[({value:D,state:m,key:F,path:E})=>{if(typeof F=="symbol")return;if(!_(D)&&!Ve(D))return{value:D};const{ancestors:T,parent:N,container:x,pathPrefix:w=[]}=m,k=T.get(D);if(!k||!d(k)&&!f(k))return{value:D};if(!N||!d(N))return{value:D};const S=Oi(w,E),O=g(F,D),z=t.createCycledClone(k,S,O,N);return x?x.addNestedNode(z):N&&N.addChildNode(z),{done:!0}},({key:D,value:m,path:F,state:E,rules:T})=>!T||!Array.isArray(T.transformers)?void 0:{value:T.transformers.reduce((w,k)=>k(D,w,e,F,E),m)},({key:D,value:m,path:F,rules:E,state:T})=>{if(!E)return{done:!0};if(typeof D=="symbol")return{done:!0};if(c(m))return{done:!0};if(p!=null&&p(m,E)||!E.kind||!n.includes(E.kind))return;const{parent:N,container:x,ancestors:w,pathPrefix:k=[],depth:S=0,materializeDepth:O}=T,z=Oi(k,F),pe=g(D,m),{kind:P,complex:le=!1}=E,W=a(m,N,x,P),ie=r(z,pe,P,le,W);if(!ie)return;x?x.addNestedNode(ie):N&&N.addChildNode(ie),h&&(_(m)||Ve(m))&&h.state.rememberFragment(z,m);let Ii=m;if(y!=null&&y(ie,m)){const Ze=N?N.descendantDiffs:void 0;if(!Ze||!(D in Ze))return{done:!0};const Ri=Ze[D];if(!Ri)return{done:!0};const{data:Fi}=Ri;Z(Fi)&&(Ii=Fi.beforeValue)}const Li=S+(W.newDataLevel?1:0),Mi=!!(h&&d(ie)&&O!==void 0&&Li>=O&&(_(m)||Ve(m))&&h.resolveHasOwnChildren(m,E));Mi&&h.state.defer({nodeId:z,fragment:m,path:[...k,...F],rules:E});const Qe=_(m)||Ve(m);Qe&&w.enter(m,ie);let ve;return d(ie)?ve=o(T,ie):ve=l(T,ie),ve={...ve,depth:Li,materializeDepth:T.materializeDepth,pathPrefix:T.pathPrefix},Mi?{done:!0,exitHook:Qe?()=>{w.leave(m)}:void 0}:{value:Ii,state:ve,exitHook:Qe?()=>{w.leave(m)}:void 0}}]}class Cn{}class ce{constructor(e="#",t="",n,r,a){v(this,"type");v(this,"parent");v(this,"container");v(this,"newDataLevel");v(this,"_value");v(this,"_meta");v(this,"_childrenNodes",[]);v(this,"_nestedNodes",[]);v(this,"_diffs",{});v(this,"_diffsSummary",new Set);v(this,"_descendantDiffs",{});v(this,"_descendantDiffsSummary",new Set);v(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new ce(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class An extends vn{constructor(){super()}}const M={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},rt=Object.values(M),at="<unnamed>";function _n(i){return i??at}function ot(i){return i!==at}function En(i,e){return e.indexName&&ot(e.indexName)?e.indexName:i}function Ia(i,e,t){return t||(e!=null&&e.indexName&&ot(e.indexName)?e.indexName:String(i))}function li(i=M.TABLE){return{"/columns":{"/items":{"/*":()=>li(M.COLUMN)},kind:M.COLUMNS},"/indexes":{"/items":{"/*":()=>li(M.INDEX)},kind:M.INDEXES},kind:i}}const ji={Identity:"identity",Expression:"expression"};function Tn(i){return i.kind===Re.Literal&&typeof i.value=="string"}function qn(i){return i.kind===Re.RawExpr&&typeof i.expr=="string"}function In(i){return _(i)&&typeof i.expr=="string"}function Ln(i){return _(i)&&typeof i.value=="string"}function Mn(i){if(!_(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!_(t)||!("before"in t)||!("after"in t)?!1:Be.isDiff(e)}const De="titleRow",Rn=["typeName","size","precision","scale","label"],La={ToEnum:"to-enum",FromEnum:"from-enum"},Ma={Lost:"lost",Gained:"gained"},st=["isPrimaryKey","isUnique","isNotNull","isGenerated"],lt=["isUnique"],Ra=[ee,De,"tableName","schemaName","description"],Fa=[ee,De,"columnName","description","generatedExpression",...st],Pa=[ee,De,"indexName","description",...lt];function dt(i){return Mn(i[De])}function Fn(i){return _(i)&&i.kind===Zi.Domain&&typeof i.type=="string"}function Pn(i){return i.kind===q.BoolType&&typeof i.type=="string"}function On(i){return i.kind===q.IntegerType&&typeof i.type=="string"}function Gi(i){return i.kind===q.DecimalType&&typeof i.type=="string"}function Ui(i){return i.kind===q.FloatType&&typeof i.type=="string"}function Ki(i){return i.kind===q.StringType&&typeof i.type=="string"}function Bi(i){return i.kind===q.BinaryType&&typeof i.type=="string"}function Wi(i){return i.kind===q.TimeType&&typeof i.type=="string"}function jn(i){return i.kind===q.JSONType&&typeof i.type=="string"}function Gn(i){return i.kind===q.SpatialType&&typeof i.type=="string"}function Un(i){return i.kind===q.UUIDType&&typeof i.type=="string"}function ni(i){return i.kind===q.EnumType&&Array.isArray(i.values)}function Kn(i){return i.kind===q.UnsupportedType&&typeof i.type=="string"}function Yi(i){return typeof i.type=="string"}function bi(i){switch(i.kind){case Re.Literal:return Tn(i)?i.value:i.kind;case Re.RawExpr:return qn(i)?i.expr:i.kind;case Yt.NamedDefault:try{return bi($t(i))}catch{return i.kind}default:return In(i)?i.expr:Ln(i)?i.value:i.kind}}function ut(i){return gt(ft(bi(i)))}function Bn(i){return gt(ft(i))}function ft(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}function gt(i){return i.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}const Wn="Columns",Yn="Indexes";class $n{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=Ae(t.attrs,_e.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:Wn,items:(t.columns??[]).map(a=>this.buildColumnRowValue(e,t,a,n.schemaName))},indexes:{title:Yn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:_(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return _(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!_(e)||typeof e.tableName!="string"||!_(e.columns)||!Array.isArray(e.columns.items)||!_(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,r){var A,H,D;const a=Ae(n.attrs,_e.Comment),o=(A=n.attrs)==null?void 0:A.find(m=>m.kind===Jt.Identity),l=Ae(n.attrs,_e.GeneratedExpr),d=o!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(m=>this.buildForeignKeyTarget(e,m,n,r)).filter(m=>m!==void 0),c=g.length>0,p=this.formatColumnType(n.type),y=(H=n.type)==null?void 0:H.type,h=y&&ni(y)?y.values:void 0,b=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:b,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:d,...o?{generatedBy:ji.Identity}:{},...l&&!o?{generatedBy:ji.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!b&&((D=n.type)==null?void 0:D.null)===!1,...n.default!==void 0?{defaultValue:ut(n.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=Ae(e.attrs,_e.Comment);return{indexName:_n(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const r of e.schemas)if((n=r.tables)!=null&&n.some(a=>a===t))return r.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isSingleColumnIndexForColumn(e,t){var n,r;return(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,t))})}buildForeignKeyTarget(e,t,n,r){var f,g;const a=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(a<0)return;const o=t.refTable,l=(g=t.refColumns)==null?void 0:g[a];if(!o||!l)return;const d=this.resolveForeignKeyTargetSchemaName(e,o,r);if(d)return{schemaName:d,tableName:o.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const r=this.findSchemaNameForTable(e,t);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,t.name);return a||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===t)}).map(r=>r.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Fn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return Pn(e)?{kind:q.BoolType,typeName:e.type,label:t}:On(e)?{kind:q.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Gi(e)?{kind:q.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ui(e)?{kind:q.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ki(e)?{kind:q.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Bi(e)?{kind:q.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Wi(e)?{kind:q.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:jn(e)?{kind:q.JSONType,typeName:e.type,label:t}:Gn(e)?{kind:q.SpatialType,typeName:e.type,label:t}:Un(e)?{kind:q.UUIDType,typeName:e.type,label:t}:ni(e)?{kind:q.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Kn(e)?{kind:q.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Yi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Zi.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Gi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ki(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Bi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ui(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Wi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ni(e)?t=e.type??e.values[0]??"enum":Yi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?bi(e.expr):""}}function Jn(i){return Hn(i)}const Xn=new Set([M.TABLE,M.COLUMNS,M.COLUMN,M.INDEXES,M.INDEX]);class Di extends Cn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!wn(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,Di.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Xn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case M.TABLE:return["tableName","schemaName","description"];case M.COLUMNS:case M.INDEXES:return["title"];case M.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case M.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const zn="[DDL API]";class Oa extends xn{constructor(t){const{source:n,tableKey:r,logger:a=Sn()}=t;super();v(this,"tree");v(this,"source");v(this,"tableKey");v(this,"logger");v(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!_(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new nt},r=li(),a=Jn({source:t,tree:this.tree,supportedNodeKinds:rt,createNodeFromRaw:(o,l,d,f,g)=>this.createNodeFromRaw(o,l,d,f,g),createNodeParams:(o,l,d)=>({value:_(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l)});return Xt(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return zn}createTree(){return new An}createNodeDataBuilder(){return new Di}prepareSource(){return new $n(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,o){const{parent:l,container:d,newDataLevel:f}=o;if(a){const y=this.createNodeMeta(n,o),h={type:se.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:y,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,h)}const g=this.createNodeValue(n,r,o),c=this.createNodeMeta(n,o),p={type:se.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,p)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(o,l)=>this.pick(o,l))}resolveNodeKey(t,n){return _(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?En(t,n):t:t}isSimpleTreeNode(t){return t.type===se.SIMPLE}isComplexTreeNode(t){return t.type===se.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function Qn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const J={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function ct(i,e,t){const n=t===R,r=new Set,a=[],o=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&Z(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=o(d);if(!f){a.push({text:d});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if($(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(B(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(Z(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;a.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||r.has(f)||B(f.data)&&n&&(a.push({text:d,diff:f}),r.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return a.sort((d,f)=>l(d.text)-l(f.text))}function pt(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function we(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===R;return $(n)?r?void 0:String(n.afterValue??i??""):B(n)?r?String(n.beforeValue??i??""):void 0:Z(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function ht(i,e){return(e===R?i.styles.before:i.styles.after).isContentVisible}function Zn(i,e){return i?ht(i,e):!0}function er(i,e){return i?(e===R?i.styles.before:i.styles.after).isHeaderVisible:!0}function ir(i){if(i&&($(i.data)||B(i.data)))return i}const $i=["size","precision","scale"];class Y{static takeFieldDiffs(e){const t=e.diffs.columnTypeFieldDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var g;const n=(g=e.value())==null?void 0:g.columnType;if(!n)return{kind:J.NO_DIFFS,text:""};const r=Y.takeFieldDiffs(e);if(!r)return{kind:J.NO_DIFFS,text:n.label};const a=r.typeName??r.label,o=r.typeName?"typeName":"label";if(Y.shouldUseMonolithicHighlight(r)){const c=Object.values(r).find(Boolean);return c?{kind:J.WHOLE_DIFFS,text:Y.buildMonolithicSideLabel(n,r,o,t),diff:Y.buildMonolithicDiffMetadata(c)}:{kind:J.NO_DIFFS,text:n.label}}const l=[],d=we(Y.takeDisplayName(n),a,t);d!==void 0&&l.push({text:d,diff:a});const f=Y.buildParameterSideSegments(n,r,t);return l.push(...f),l.length===0?{kind:J.NO_DIFFS,text:n.label}:{kind:J.PARTIAL_DIFFS,segments:l}}static shouldUseMonolithicHighlight(e){const t=Rn.map(r=>[r,e[r]]).filter(r=>!!r[1]);if(t.length===0)return!1;if(t.length===1){const[r]=t[0];return r==="typeName"||r==="label"}return new Set(t.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,t,n,r){const a=we(Y.takeDisplayName(e),t[n],r)??Y.takeDisplayName(e),o=[];for(const l of $i){const d=we(Y.takeParameterValue(e,l),t[l],r);d!==void 0&&o.push(d)}return o.length===0?a:`${a} (${o.join(", ")})`}static buildParameterSideSegments(e,t,n){const r=Y.collectVisibleParameterKeys(e,t,n);if(r.length===0)return[];const a=r.flatMap(o=>{const l=we(Y.takeParameterValue(e,o),t[o],n);return l===void 0?[]:[{text:l,diff:t[o]}]});return[...pt(a,"spaced")]}static collectVisibleParameterKeys(e,t,n){return $i.filter(r=>{const a=t[r];return a?ht(a,n):Y.takeParameterValue(e,r)!==void 0})}static takeDisplayName(e){return"typeName"in e&&typeof e.typeName=="string"?e.typeName:"name"in e&&typeof e.name=="string"?e.name:e.label}static takeParameterValue(e,t){if(!(t in e))return;const n=Reflect.get(e,t);return typeof n=="number"?n:void 0}static buildMonolithicDiffMetadata(e){const{data:t}=e;return Z(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow}}}:$(t)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Green}}}:B(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class vi{static takeDiffs(e){const t=e.diffs.partNameDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.partNames)??[],r=vi.takeDiffs(e),a=r?ct(n,r,t):n.map(d=>({text:d})),o=pt(a,"tight");return o.length===0?{kind:J.NO_DIFFS,text:""}:{kind:J.PARTIAL_DIFFS,segments:o}}}class Vi{static takeTitleRowDiff(e){if(dt(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){const t=e.diffs[ee];if(t&&($(t.data)||B(t.data)))return t}static takeSchemaNameDiff(e){return e.diffs.schemaName}static takeDescriptionDiff(e){return e.diffs.description}static resolveSchemaNameSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.schemaName)??"",r=Vi.takeSchemaNameDiff(e);if(!r)return n;const a=r.data,o=t===R;return $(a)?o?"":n:B(a)?o?n:"":Z(a)?o?typeof a.beforeValue=="string"?a.beforeValue:n:typeof a.afterValue=="string"?a.afterValue:n:n}}class tr{static takeTitleRowDiff(e){if(dt(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){return ir(e.diffs[ee])}static isSubheaderVisible(e,t){return er(e,t)}static isContentVisible(e,t){return Zn(e,t)}static isListSectionUniformWholeNodeChange(e){const t=e.diffs[ee];return t?$(t.data)||B(t.data):!1}}class nr{static takeFlagDiffs(e){const t={};let n=!1;for(const r of st){const a=e.diffs[r];a&&(t[r]=a,n=!0)}return n?t:void 0}static isFlagBadgeHighlighted(e){return e?e.highlightingMode.get(ai.Default)!==qe.Invisible:!1}static takeGeneratedExpressionDiff(e){return e.diffs.generatedExpression}static takeDescriptionDiff(e){return e.diffs.description}}let rr=class{static takeTargetDiffs(e){const n=e.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}};class de{static takeDiff(e){return e.diffs.defaultValue}static takeRowColorizingDiff(e){return e.diffs.defaultValueRowColorizingDiff}static resolveSideDisplay(e,t){var l;const n=(l=e.value())==null?void 0:l.defaultValue,r=de.takeDiff(e),a=t===R;if(!r){const d=e.diffs[ee];if(d){const f=d.data;if($(f))return a?void 0:n;if(B(f))return a?n:void 0}return n}const o=r.data;return $(o)?a?void 0:n??de.formatDiffSide(o.afterValue):B(o)?a?de.formatDiffSide(o.beforeValue)??n:void 0:Z(o)?a?de.formatDiffSide(o.beforeValue)??n:de.formatDiffSide(o.afterValue)??n:n}static formatDiffSide(e){if(typeof e=="string")return Bn(e);if(_(e)&&"kind"in e)return ut(e)}}class Ni{static takeDiffs(e){const n=e.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}static takeRowColorizingDiff(e){return e.diffs.enumValuesRowColorizingDiff}static resolveSideItems(e,t){var n;return ct(((n=e.value())==null?void 0:n.enumValues)??[],Ni.takeDiffs(e),t).map(({text:r,diff:a})=>({literal:r,diff:a}))}}class ar{static takeFlagDiffs(e){const t={};let n=!1;for(const r of lt){const a=e.diffs[r];a&&(t[r]=a,n=!0)}return n?t:void 0}static takeDescriptionDiff(e){return e.diffs.description}}class V{}v(V,"Table",Vi),v(V,"PropertyRow",tr),v(V,"Column",nr),v(V,"ForeignKey",rr),v(V,"ColumnDefaultValue",de),v(V,"ColumnEnumValues",Ni),v(V,"Index",ar),v(V,"IndexPartNames",vi),v(V,"ColumnTypeLabel",Y);const or={ENUM:zt,MIN_LENGTH:Qt,MAX_LENGTH:Zt,PATTERN:en,MINIMUM:tn,MAXIMUM:nn,EXCLUSIVE_MINIMUM:rn,EXCLUSIVE_MAXIMUM:an,MULTIPLE_OF:on,MIN_PROPERTIES:sn,MAX_PROPERTIES:ln,UNIQUE_ITEMS:dn,MIN_ITEMS:un,MAX_ITEMS:fn},L={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:or.UNIQUE_ITEMS},Ga={[L.VALUE_LENGTH]:["minLength","maxLength"],[L.VALUE_PATTERN]:["pattern"],[L.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[L.VALUE_MULTIPLE_OF]:["multipleOf"],[L.PROPERTIES_COUNT]:["minProperties","maxProperties"],[L.ITEMS_COUNT]:["minItems","maxItems"],[L.UNIQUE_ITEMS]:["uniqueItems"]},Ua={[L.VALUE_LENGTH]:te.ValueLengthRow,[L.VALUE_PATTERN]:te.ValuePatternRow,[L.VALUE_RANGE]:te.ValueRangeRow,[L.VALUE_MULTIPLE_OF]:te.ValueMultipleOfRow,[L.PROPERTIES_COUNT]:te.PropertiesCountRow,[L.ITEMS_COUNT]:te.ItemsCountRow,[L.UNIQUE_ITEMS]:te.UniqueItemsRow},Ka={[L.VALUE_LENGTH]:{minLength:0,maxLength:1},[L.VALUE_PATTERN]:{pattern:0},[L.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[L.VALUE_MULTIPLE_OF]:{multipleOf:0},[L.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[L.ITEMS_COUNT]:{minItems:0,maxItems:1},[L.UNIQUE_ITEMS]:{uniqueItems:0}},sr=u.createContext(!1),We=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:s.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[s.jsx(gn,{variant:t,message:n}),e]})};We.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ye=u.memo(i=>{const{content:e}=i;return s.jsx("div",{className:"flex flex-row w-full",children:e})});Ye.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const $e=u.memo(i=>{const{left:e,right:t}=i;return s.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[s.jsx("div",{className:"flex w-1/2",children:e}),s.jsx("div",{className:"flex w-1/2",children:t})]})});$e.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const wi="px-4",di="",lr="px-4",xi="";var I=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(I||{}),C=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(C||{});const ui=5,fi=300;function dr(i){return i?i.length>fi||et.trim(i.split(`
`)).length>ui:!1}function ur(i){if(!i)return;if(i.length>fi)return i.slice(0,fi)+"...";const e=et.trim(i.split(`
`));return e.length>ui?e.slice(0,ui).join(`
`)+"...":i}function fr(i){switch(i){case C.h1:return"text-value-expander--h1";case C.h2:return"text-value-expander--h2";case C.h3:return"text-value-expander--h3";case C.h4:return"text-value-expander--h4";case C.h5:return"text-value-expander--h5";case C.h6:return"text-value-expander--h6";case C.body1:return"text-value-expander--body1";case C.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const gr=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=u.useCallback(()=>{n==null||n(o=>!o)},[n]);return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"mt-1",children:s.jsx("a",{className:`text-value-expander ${fr(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},mt=u.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:o,highlightingMode:l=qe.Default}=i,d=l===qe.Default,f=l===qe.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:y,label:h}=i,[b,A]=u.useState(!1),H=u.useCallback((N,x,w)=>{if(w)return null;const k=f?"":x.join(" "),S=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),O=`${S} ${k}`.trim(),z={onClick:r,...y!=null&&y.trim()?{style:{color:y}}:{}};N=b?N:ur(N);const pe=(P,le)=>{const W={...z,className:le};switch(t){case C.h1:return s.jsx("h1",{...W,children:P});case C.h2:return s.jsx("h2",{...W,children:P});case C.h3:return s.jsx("h3",{...W,children:P});case C.h4:return s.jsx("h4",{...W,children:P});case C.h5:return s.jsx("h5",{...W,children:P});case C.h6:return s.jsx("h6",{...W,children:P});case C.body1:return s.jsx("span",{...W,className:`${le} text-value-body1`.trim(),children:P});case C.body2:return s.jsx("span",{...W,className:`${le} text-value-body2`.trim(),children:P})}};return h?pe(s.jsxs(s.Fragment,{children:[s.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),s.jsx("span",{className:k,children:N})]}),S):pe(N,O)},[b,f,h,p,c,r,y,g,t]),D=u.useCallback(N=>{const x=[];let w=N,k=!1;if(a){const{data:S,styles:O}=a;switch(n){case R:x.push(K.highlighter(O.before.textHighlighterColor)),d&&(B(S)&&(w=he(S.beforeValue)?S.beforeValue:w),Z(S)&&(o===I.JsoProperty&&!f&&x.push(K.highlighter(me.Yellow)),w=he(S.beforeValue)?S.beforeValue:w),ri(S)&&(w=he(S.beforeKey)?S.beforeKey:w)),$(S)&&(k=!0);break;case ne:x.push(K.highlighter(O.after.textHighlighterColor)),d&&($(S)&&(w=he(S.afterValue)?S.afterValue:w),Z(S)&&(o===I.JsoProperty&&!f&&x.push(K.highlighter(me.Yellow)),w=he(S.afterValue)?S.afterValue:w),ri(S)&&(w=he(S.afterKey)?S.afterKey:w)),B(S)&&(k=!0);break}}return[w,x,k]},[a,d,f,n,o]),[m,F,E]=D(e);return u.useMemo(()=>s.jsxs("div",{className:"flex flex-col items-start gap-1",children:[H(m,F,E),!E&&s.jsx(gr,{isExpandable:dr(m),expanded:b,setExpanded:A,variant:t})]}),[H,m,F,E,b,A,t])});function he(i){return typeof i=="string"}const X="data-precededby",j="data-ddl-list-last-row";var G=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSON_SCHEMA_PROPERTY="json-schema-property",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(G||{}),re=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(re||{});const cr={[re.DdlApiProperty]:xi},pr={[re.DdlApiProperty]:["min-h-[26px]"]};function hr(i){const e=cr[i]??wi,t=pr[i]??[];return[e,...t].join(" ")}const Ie=u.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=re.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[X]:c}=i,{diff:p,descendantDiffs:y,diffsSeverities:h}=i,b=ge(),A=r===re.DdlApiProperty,H=u.useMemo(()=>!a||V.PropertyRow.isContentVisible(p,n),[p,a,n]),D=A&&b>0&&H,m=u.useMemo(()=>{if(!p)return[];const{data:T,styles:N}=p;if(!T)return[];const x=[];return n===R&&x.push(K.background(N.before.backgroundColor)),n===ne&&x.push(K.background(N.after.backgroundColor)),x},[p,n]),F=u.useMemo(()=>hr(r),[r]),E=s.jsx(mt,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return s.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${A?"items-stretch":""} ${F} gap-2 ${m.join(" ")}`,children:[D&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:b}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),A?s.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:E}):E]})});Ie.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Se=u.memo(i=>{const e=Ge(),{diffsSeverities:t,diffsSeverityPlacement:n=te.DescriptionRow}=i,r=u.useMemo(()=>t==null?void 0:t[n],[t,n]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),o=u.useMemo(()=>pi(r==null?void 0:r.causedAt),[r]);switch(e){case mi:return s.jsx(We,{diffType:a,diffTypeCause:o,hidden:!1,children:s.jsx($e,{left:s.jsx(Ie,{...i,layoutSide:R}),right:s.jsx(Ie,{...i,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Ie,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Se.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Je="#353C4E",mr=u.createContext(void 0);function yt(){return u.useContext(mr)}const bt=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=u.useContext(sr),o=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:s.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&s.jsx(oi,{short:e}),e&&t!==void 0&&s.jsx(si,{onToggle:l,expanded:t})]})};bt.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ji="w-4 min-w-[16px] shrink-0 flex-none",yr="w-3 min-w-[12px] shrink-0 flex-none",Si=()=>s.jsx("div",{className:yr,"aria-hidden":"true"}),Dt=i=>{const{isRoot:e,expandable:t,expanded:n,onClick:r}=i;return e&&!t?s.jsx(Si,{}):e&&t?s.jsx("div",{className:"flex flex-row items-center justify-center pt-1.5",children:n!==void 0&&s.jsx(si,{onToggle:r??(()=>{}),expanded:n})}):t?s.jsxs("div",{className:`flex flex-row items-center justify-center pt-1.5 gap-0.5 ${Ji}`,children:[s.jsx(oi,{short:!0}),n!==void 0&&s.jsx(si,{onToggle:r??(()=>{}),expanded:n})]}):s.jsx("div",{className:`flex flex-row items-center justify-center pt-1.5 ${Ji}`,children:s.jsx(oi,{})})};Si.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRootExpanderOffset"};Dt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExpanderColumn",props:{isRoot:{required:!0,tsType:{name:"boolean"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const br={[I.JsoProperty]:di,[I.DdlApiSection]:lr,[I.DdlApiProperty]:xi,[I.JsonSchemaProperty]:di},Dr={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function vr(i){const e=br[i]??wi,t=Dr[i]??[];return[e,...t].join(" ")}const Le=u.memo(i=>{const{expandable:e,expanded:t,isRoot:n=!1,onClickExpander:r,value:a,titleContent:o,variant:l,layoutSide:d,enableHeader:f=!0,enableHeaderValue:g=!0,subheader:c,usage:p=I.Default,highlightingMode:y=cn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:b,descendantDiffs:A,diffsSeverities:H}=i,{[X]:D,[j]:m}=i,F=u.useMemo(()=>{switch(p){case I.Default:return y.get(ai.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return y.get(ai.JsoPropertyKey)}},[y,p]),E=ge(),T=yt(),N=u.useMemo(()=>T?d===R?T.beforeLevel:T.afterLevel:E,[d,E,T]),x=u.useMemo(()=>{const P=[];if(!b)return P;const{data:le,styles:W}=b;return le&&(d===R&&P.push(K.background(W.before.backgroundColor)),d===ne&&P.push(K.background(W.after.backgroundColor))),P},[b,d]),w=u.useMemo(()=>typeof o=="function"?o(d):o||(g?s.jsx(mt,{"data-precededby":D,value:a,variant:l,layoutSide:d,diff:b,usage:p,highlightingMode:F,onClick:r}):null),[o,g,D,a,l,d,b,p,F,r]),k=p===I.DdlApiProperty,S=p===I.JsonSchemaProperty,O=n||N===0,z=u.useMemo(()=>f?S?s.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex shrink-0 items-stretch self-stretch",children:[s.jsx(xe,{level:N}),s.jsx(Dt,{isRoot:O,expandable:e,expanded:t,onClick:r})]}):s.jsxs(s.Fragment,{children:[(e||N>0)&&s.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:N}),s.jsx(bt,{expandable:e,expanded:t,onClick:r,level:N})]}),!k&&w]}):h?null:N>0&&s.jsx(xe,{level:N}),[f,e,t,h,k,S,O,N,r,D]),pe=u.useMemo(()=>vr(p),[p]);return s.jsxs("div",{"data-precededby":D,"data-ddl-list-last-row":m?!0:void 0,"data-usage":p!==I.Default?p:void 0,className:`title-row-content flex w-full ${k||S?"items-stretch":"items-center"} h-full ${pe} gap-2 ${x.join(" ")}`,children:[z,k?s.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[w,c==null?void 0:c(d)]}):S?s.jsxs("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center gap-2",children:[w,c==null?void 0:c(d)]}):c==null?void 0:c(d)]})});Le.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{const e=Ge(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=u.useMemo(()=>n==null?void 0:n["title-row"],[n]),o=u.useMemo(()=>a==null?void 0:a.type,[a]),l=u.useMemo(()=>pi(a==null?void 0:a.causedAt),[a]);switch(e){case mi:return s.jsx(We,{diffType:o,diffTypeCause:l,hidden:!1,children:s.jsx($e,{left:s.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:R}),right:s.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Le,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ba(i,e){return u.useMemo(()=>e(i)?ke(i):{},[e,i])}function ke(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Xe(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const b=g.find(([A])=>A===String(h));return b==null?void 0:b[1]},p=t?c(t):void 0;return{diff:o?o(l,c):n?l[ee]??p:p,...r?{descendantDiffs:d}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function Vr(i){return rt.includes(i.kind)}function Wa(i){return i.childrenNodes().filter(Vr)}function Nr(i){return i.kind===M.TABLE}function Ya(i){return Nr(i)&&i instanceof ce}function wr(i){return i.kind===M.COLUMNS}function xr(i){return wr(i)&&i instanceof ce}function Sr(i){return kr(i)&&i instanceof ce}function vt(i){return i.kind===M.COLUMN}function ki(i){return vt(i)&&i instanceof ce}function kr(i){return i.kind===M.INDEXES}function Vt(i){return i.kind===M.INDEX}function Nt(i){return Vt(i)&&i instanceof ce}function wt(i){return i.filter(vt)}function xt(i){return i.filter(Vt)}const Hr=u.createContext(null);function Cr(){const i=u.useContext(Hr);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Ar=({href:i,className:e,children:t})=>s.jsx("a",{href:i,className:e,children:t});Ar.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const St=V.PropertyRow.takeNodeDiffIfPresent;function kt(i){const e=Xe(ke(i),{resolveDiff:()=>V.PropertyRow.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function $a(i){const e=Xe(ke(i),{resolveDiff:()=>V.Table.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ja=V.Table.takeNodeDiffIfPresent,_r="ux-badge_ddlapi_primary-key",Ht="ux-badge_ddlapi_foreign-key",Er="ux-badge_ddlapi_unique",Tr="ux-badge_ddlapi_not-null",qr="ux-badge_ddlapi_generated",Ir="public",Ct="Default",At="As",_t="Values";function Lr(i){return i?!!(Fe(i.defaultValue)||Fe(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Mr="detailed";function Q(i){return i===Mr}function Pe(i){return i!=null}let Et=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),o=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l,showAnyAdditionalInfoRow:a||o||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return Q(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return Q(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return Q(t)&&Pe(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return Q(t)&&Pe(e==null?void 0:e.generatedExpression)}};const Hi=new Et;function Rr(i,e){return Hi.resolveNodeVisibility(i,e)}function Fr(i,e){return Hi.resolveListLastRowFlags(i,e)}function Xi(i,e){return Hi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const Tt=u.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?s.jsx("div",{className:n,children:s.jsx("pre",{className:r||void 0,style:{fontFamily:"Inter"},children:`${t}`})}):null});Tt.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var Oe=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(Oe||{});function Pr(i={}){const{usage:e=Oe.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:r,isEmptyStringPlaceholder:a}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",e===Oe.JsonSchemaValidation?"additional-info-piece_json-schema-validation":"",K.borderShadow(n)].filter(Boolean).join(" "),valueClassName:["inline",K.highlighter(t),r?K.fontMuted():"",a?"additional-info-piece_empty-string-placeholder":""].filter(Boolean).join(" ")}),[n,a,r,t,e])}const ue=u.memo(i=>{const{isVisible:e,value:t,usage:n=Oe.Default,textHighlighterColor:r,borderShadowColor:a,isFontMuted:o,isEmptyStringPlaceholder:l}=i,{blockClassName:d,valueClassName:f}=Pr({usage:n,textHighlighterColor:r,borderShadowColor:a,isFontMuted:o,isEmptyStringPlaceholder:l});return s.jsx(Tt,{isVisible:e,value:t,blockClassName:d,valueClassName:f})});ue.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""},isEmptyStringPlaceholder:{required:!1,tsType:{name:"boolean"},description:""}}};function Or(i){const e=ge(),t=yt();return u.useMemo(()=>t?i===R?t.beforeLevel:t.afterLevel:e,[i,e,t])}var U=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(U||{});const jr={[U.DdlApiProperty]:xi,[U.JsonSchemaValidation]:di},Gr={[U.DdlApiProperty]:"ddlapi-property-row-body",[U.Default]:"additional-info-row-body",[U.JsonSchemaValidation]:"json-schema-property-row-body"},Ur={[U.DdlApiProperty]:"min-h-[26px]"};function Kr(i,e={}){return{xPaddingClass:e.xPaddingClass??jr[i]??wi,bodyClass:e.bodyClass??Gr[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Ur[i]??"",stretchLevelIndicator:i===U.DdlApiProperty}}const Me=u.memo(i=>{var T;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1,usage:l=U.Default,xPaddingClass:d,bodyClass:f,minHeightClass:g}=i,{[X]:c,[j]:p}=i,y=Or(n),h=u.useMemo(()=>Kr(l,{xPaddingClass:d,bodyClass:f,minHeightClass:g}),[l,d,f,g]),b=n===R?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,H=(T=(n===R?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??b)==null?void 0:T.backgroundColor,D=u.useMemo(()=>H?[K.background(H)]:[],[H]),m=u.useMemo(()=>{const N=a==null?void 0:a.data;if(N){if($(N))return n!==R;if(B(N))return n===R}return(b==null?void 0:b.isContentVisible)??!0},[a,b==null?void 0:b.isContentVisible,n]),F=l===U.JsonSchemaValidation&&y===0,E=y>0&&(!o||m);return s.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":p?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",D.join(" ")].filter(Boolean).join(" "),children:[F&&s.jsx(Si,{}),E&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:y}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m&&s.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[s.jsx("div",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});Me.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fe=u.memo(i=>{var a;const e=Ge(),t=i.diffsSeverityPlacement??te.AdditionalInfoRow,n=(a=i.diffsSeverities)==null?void 0:a[t],r=u.useMemo(()=>pi(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case mi:return s.jsx(We,{diffType:n==null?void 0:n.type,diffTypeCause:r,hidden:!1,children:s.jsx($e,{left:s.jsx(Me,{...i,layoutSide:R}),right:s.jsx(Me,{...i,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Me,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});fe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:"Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when\na viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /\nExamples / Allowed values / validation-constraint rows) so each row's floating badge reflects\nonly its own diff, not the node's overall max severity."},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};const Ci=i=>{const{label:e,colorSchema:t=ei(ii),layoutMode:n,layoutSide:r,diff:a}=i,o=pn(),l=a==null?void 0:a.type,d=hn(l,o),{isDocumentLayoutMode:f,isInlineDiffsLayoutMode:g}=bn(n),{originSide:c,changedSide:p}=Dn(r);if(!(!f&&!!a))return s.jsx(Ne,{text:e,colorSchema:t});const h=a.action,b=`${ei(ii)} ${yn[h]}`,A=h===Pi.remove&&(g||c),H=h===Pi.add&&(g||p);return d?A?s.jsx(Ne,{text:s.jsx("span",{className:mn,children:e}),colorSchema:b}):H?s.jsx(Ne,{text:e,colorSchema:b}):null:A||H?s.jsx(Ne,{text:e,colorSchema:ei(ii)}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"BadgeWithDiffs",props:{label:{required:!0,tsType:{name:"string"},description:""},colorSchema:{required:!1,tsType:{name:"string"},description:""},layoutMode:{required:!0,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},diff:{required:!1,tsType:{name:"Diff"},description:""}}};const Br={isContentVisible:!0,isHeaderVisible:!0};function ye(i,e){return i?e===R?i.styles.before:i.styles.after:Br}function qt(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Ir?e:`${i.schemaName}.${e}`}function Wr(i){return i.join(", ")}const gi=u.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Cr(),o=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",K.highlighter(n)].filter(Boolean).join(" "),[n]),d=s.jsx(a,{href:o,className:l,children:qt(e)});return t?d:s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Ne,{text:"FK",colorSchema:Ht,inline:!0}),d]})});gi.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Yr(){return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function It(i,e){return!!i||!!e}function Ai(i,e){return i?e===R?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function $r(i,e,t){return It(i,e)&&Ai(e,t)}function Te(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:l}=i;if(!It(r,a))return null;if(!Ai(a,l))return Yr();const d=V.Column.isFlagBadgeHighlighted(a)?a==null?void 0:a.data:void 0;return s.jsx(Ci,{label:t,colorSchema:n,layoutMode:o,layoutSide:l,diff:d},Xr(e,t))}function Jr(i){const{columnId:e,target:t,targetDiff:n,layoutMode:r,layoutSide:a}=i,o=zr(e,t),d=ye(n,a).textHighlighterColor;if(n&&!Ai(n,a))return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!n)return s.jsx(gi,{target:t},o);const f=n.data;return s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Ci,{label:"FK",colorSchema:Ht,layoutMode:r,layoutSide:a,diff:f}),s.jsx(gi,{target:t,hideBadge:!0,textHighlighterColor:d})]},o)}const He=u.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Ge(),l=u.useMemo(()=>n??{},[n]),d=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Te({columnId:e,label:"PK",colorSchema:_r,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,l.isPrimaryKey,o,a,t.isPrimaryKey]),g=u.useMemo(()=>$r(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=u.useMemo(()=>Te({columnId:e,label:"unique",colorSchema:Er,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:o,layoutSide:a}),[e,l.isUnique,o,a,t.isUnique]),p=u.useMemo(()=>g?null:Te({columnId:e,label:"not null",colorSchema:Tr,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:o,layoutSide:a}),[e,l.isNotNull,g,o,a,t.isNotNull]),y=u.useMemo(()=>Te({columnId:e,label:"generated",colorSchema:qr,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:o,layoutSide:a}),[e,l.isGenerated,o,a,t.isGenerated]),h=u.useMemo(()=>{const A=t.foreignKeyTargets??[];return A.length===0?[]:A.map(H=>Jr({columnId:e,target:H,targetDiff:d[Qn(H)],layoutMode:o,layoutSide:a}))},[e,o,a,d,t.foreignKeyTargets]),b=u.useMemo(()=>[f,c,p,y,...h].filter(Boolean),[h,y,p,f,c]);return b.length===0?null:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:b})});function Xr(i,e){return`${i}-${e}`}function zr(i,e){return`${i}-FK-${qt(e)}`}He.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=u.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?s.jsx("span",{className:n,children:`${t}`}):null});_i.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var ae=(i=>(i.Text="text",i.Block="block",i))(ae||{});function Lt(i){const{appearance:e}=i;return u.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const Ce=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ae.Text}=i,r=Lt({appearance:n});return s.jsx(_i,{isVisible:e,value:t,className:r})});Ce.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const Ei=i=>{const{node:e,additionalInfoPrecededBy:t=G.DDL_COLUMN_ROW,isLastInList:n=!1,[X]:r}=i,a=be(),o=e.value(),l=u.useMemo(()=>Rr(e,a),[e,a]),d=u.useMemo(()=>Fr(n,l),[n,l]),f=u.useCallback(y=>o?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Ce,{isVisible:!0,value:o.columnType.label,appearance:ae.Text}),s.jsx(He,{columnId:e.id,layoutSide:y,value:o})]}):s.jsx(s.Fragment,{}),[e.id,o]),g=u.useCallback(y=>{const h=o==null?void 0:o.defaultValue;return Fe(h)?s.jsx(ue,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),c=u.useCallback(y=>{const h=o==null?void 0:o.generatedExpression;return Fe(h)?s.jsx(ue,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),p=u.useCallback(y=>{var h;return(h=o==null?void 0:o.enumValues)!=null&&h.length?s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((b,A)=>s.jsx(ue,{isVisible:!0,value:b},`${b}-${A}`))}):s.jsx(s.Fragment,{})},[o]);return o?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":r,[j]:d.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:f,usage:I.DdlApiProperty}),l.showDescription&&s.jsx(Se,{"data-precededby":G.DDL_COLUMN_ROW,[j]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body2,textFontWeight:"normal",textColor:Je,usage:re.DdlApiProperty}),l.showEnumValuesRow&&s.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":t,[j]:d.isEnumAdditionalInfoListLastRow||void 0,label:_t,subheader:p}),l.showDefaultRow&&s.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Xi(l,"default")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:d.isDefaultAdditionalInfoListLastRow||void 0,label:Ct,subheader:g}),l.showGeneratedRow&&s.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Xi(l,"generated")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:At,subheader:c})]}):null};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Qr(i){if(ki(i))return V.ForeignKey.takeTargetDiffs(i)}function Zr(i){if(ki(i))return V.Column.takeFlagDiffs(i)}function ea(i){if(Nt(i))return V.Index.takeFlagDiffs(i)}const zi=new Et;class ia{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,V.Column.takeDescriptionDiff(e),t),o=this.resolveEnumValuesRowVisible(n,V.ColumnEnumValues.takeDiffs(e),t),l=this.resolveDefaultRowVisible(n,V.ColumnDefaultValue.takeDiff(e),V.ColumnDefaultValue.takeRowColorizingDiff(e),r,t),d=this.resolveGeneratedRowVisible(n,V.Column.takeGeneratedExpressionDiff(e),t);return{showDescription:a,showEnumValuesRow:o,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:o||l||d}}resolveListLastRowFlags(e,t){return zi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return zi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=V.Column.takeGeneratedExpressionDiff(e);return we(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[ee];return!!t&&($(t.data)||B(t.data))}resolveDescriptionRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const o=Pe(e==null?void 0:e.defaultValue)||!!t||!!n;return Q(a)&&o}resolveGeneratedRowVisible(e,t,n){return Q(n)&&(Pe(e==null?void 0:e.generatedExpression)||!!t)}}const ze=new ia;function ta(i,e){return ze.resolveNodeVisibility(i,e)}function na(i,e){return ze.resolveListLastRowFlags(i,e)}function Qi(i,e){return ze.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function ra(i,e){return ze.resolveGeneratedExpressionSideDisplay(i,e)}function aa(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=Lt({appearance:e});return u.useMemo(()=>[r,K.highlighter(t),K.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const Ti=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ae.Text,textHighlighterColor:r,backgroundColor:a}=i,o=aa({appearance:n,textHighlighterColor:r,backgroundColor:a});return s.jsx(_i,{isVisible:e,value:t,className:o})});Ti.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function oa(i){return i.text===", "||i.text===","}function ci(i,e,t,n){if(i.diff){const r=ye(i.diff,t);return s.jsx(Ti,{isVisible:!0,value:i.text,appearance:ae.Text,textHighlighterColor:r.textHighlighterColor,backgroundColor:n?r.backgroundColor:void 0},`${i.text}-${e}`)}return s.jsx(Ce,{isVisible:!0,value:i.text,appearance:ae.Text},`${i.text}-${e}`)}function sa(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(oa(r)){n=!0;return}n&&(t.push(s.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(ci(r,a,e,!1))}),t}const je=u.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===J.NO_DIFFS?ci({text:e.text},0,t,!1):e.kind===J.WHOLE_DIFFS?ci({text:e.text,diff:e.diff},0,t,!0):s.jsx("span",{className:"inline-flex items-center",children:sa(e.segments,t)})});je.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function la(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function da(i,e,t){if(i.diff){const n=ye(i.diff,t);return s.jsx(Ti,{isVisible:!0,value:i.text,appearance:ae.Text,textHighlighterColor:n.textHighlighterColor},`${i.text}-${e}`)}return s.jsx(Ce,{isVisible:!0,value:i.text,appearance:ae.Text},`${i.text}-${e}`)}const Mt=u.memo(i=>{const{node:e,layoutSide:t}=i,n=V.ColumnTypeLabel.resolveSideDisplay(e,t);if(n.kind===J.NO_DIFFS||n.kind===J.WHOLE_DIFFS)return s.jsx(je,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=la(n.segments);return s.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,l)=>da(o,l,t)),a.length>0&&s.jsx(je,{layoutSide:t,display:{kind:J.PARTIAL_DIFFS,segments:a}})]})});Mt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Rt=i=>{const{node:e,additionalInfoPrecededBy:t=G.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[X]:a}=i,o=be(),l=e.value(),d=u.useMemo(()=>St(e),[e]),f=u.useMemo(()=>kt(e),[e]),g=u.useMemo(()=>Zr(e),[e]),c=u.useMemo(()=>Qr(e),[e]),p=u.useMemo(()=>V.Column.takeDescriptionDiff(e),[e]),y=u.useMemo(()=>V.Column.takeGeneratedExpressionDiff(e),[e]),h=u.useMemo(()=>V.ColumnEnumValues.takeDiffs(e),[e]),b=u.useMemo(()=>V.ColumnEnumValues.takeRowColorizingDiff(e),[e]),A=u.useMemo(()=>V.ColumnDefaultValue.takeDiff(e),[e]),H=u.useMemo(()=>V.ColumnDefaultValue.takeRowColorizingDiff(e),[e]),D=u.useMemo(()=>ta(e,o),[e,o]),m=u.useMemo(()=>na(n,D),[n,D]),F=u.useCallback(x=>l?V.PropertyRow.isSubheaderVisible(d,x)?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Mt,{node:e,layoutSide:x}),s.jsx(He,{columnId:e.id,layoutSide:x,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{}),[g,c,e,d,l]),E=u.useCallback(x=>{const w=V.ColumnDefaultValue.resolveSideDisplay(e,x);if(w===void 0)return s.jsx(s.Fragment,{});const k=ye(A,x);return s.jsx(ue,{isVisible:!0,value:w,textHighlighterColor:k.textHighlighterColor,borderShadowColor:k.borderShadowColor})},[A,e]),T=u.useCallback(x=>{const w=ra(e,x);if(w===void 0)return s.jsx(s.Fragment,{});const k=ye(y,x);return s.jsx(ue,{isVisible:!0,value:w,textHighlighterColor:k.textHighlighterColor})},[y,e]),N=u.useCallback(x=>{const w=V.ColumnEnumValues.resolveSideItems(e,x);return w.length===0?s.jsx(s.Fragment,{}):s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w.map((k,S)=>{const O=ye(k.diff,x);return s.jsx(ue,{isVisible:!0,value:k.literal,textHighlighterColor:O.textHighlighterColor,borderShadowColor:O.borderShadowColor,isFontMuted:O.isFontMuted},`${k.literal}-${S}`)})})},[e]);return l?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":a,[j]:m.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:F,usage:I.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),D.showDescription&&s.jsx(Se,{"data-precededby":G.DDL_COLUMN_ROW,[j]:m.isDescriptionListLastRow||void 0,value:l.description??"",variant:C.body2,textFontWeight:"normal",textColor:Je,usage:re.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),D.showEnumValuesRow&&s.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":t,[j]:m.isEnumAdditionalInfoListLastRow||void 0,label:_t,subheader:N,colorizingDiff:b,diffsSeverities:h||b?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),D.showDefaultRow&&s.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Qi(D,"default")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:m.isDefaultAdditionalInfoListLastRow||void 0,label:Ct,subheader:E,colorizingDiff:H,diffsSeverities:A||H?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),D.showGeneratedRow&&s.jsx(fe,{usage:U.DdlApiProperty,"data-precededby":Qi(D,"generated")?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:m.isGeneratedAdditionalInfoListLastRow||void 0,label:At,subheader:T,diff:y,colorizingDiff:e.diffs[ee],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};Rt.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ft(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,o=t?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:G.DDL_COLUMN_ROW,l=t?G.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:G.DDL_COLUMN_ROW,d={columnNode:n,titlePrecededBy:o,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&Lr(n.value()),d})}const ua=i=>{const{node:e,[X]:t}=i;return xr(e)?s.jsx(ga,{"data-precededby":t,node:e}):s.jsx(fa,{"data-precededby":t,node:e})},fa=i=>{const{node:e,[X]:t}=i,n=ge(),r=be(),a=e.value(),o=wt(e.childrenNodes()),l=r===it,d=u.useMemo(()=>Ft(o,l),[o,l]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection}),s.jsx(Ue.Provider,{value:n+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>s.jsx(Ei,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},ga=i=>{const{node:e,[X]:t}=i,n=ge(),r=be(),a=e.value(),o=wt(e.childrenNodes()),l=r===it,d=u.useMemo(()=>Xe(ke(e)),[e]),f=u.useMemo(()=>Ft(o,l),[o,l]),g=u.useMemo(()=>V.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection,...d}),s.jsx(Ue.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:y,isLastInList:h})=>ki(c)?s.jsx(Rt,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):s.jsx(Ei,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,node:c},c.id))})]})};ua.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Pt=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return Q(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const Ot=new Pt;function ca(i,e){return Ot.resolveNodeVisibility(i,e)}function pa(i,e){return Ot.resolveListLastRowFlags(i,e)}const qi=i=>{const{node:e,isLastInList:t=!1,[X]:n}=i,r=be(),a=e.value(),o=u.useMemo(()=>ca(e,r),[e,r]),l=u.useMemo(()=>pa(t,o),[t,o]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(c=>{if(!a)return s.jsx(s.Fragment,{});const p=Wr(a.partNames);return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&s.jsx(Ce,{isVisible:!0,value:`(${p})`,appearance:ae.Text}),s.jsx(He,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=o.showDescription;return a?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":n,[j]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:C.body2,subheader:o.showSubheader?f:void 0,usage:I.DdlApiProperty}),g&&s.jsx(Se,{"data-precededby":G.DDL_INDEX_ROW,[j]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:C.body1,textFontWeight:"normal",textColor:Je,usage:re.DdlApiProperty})]}):null};qi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ha=new Pt;class ma{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,V.Index.takeDescriptionDiff(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=V.Index.takeFlagDiffs(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return ha.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const jt=new ma;function ya(i,e){return jt.resolveNodeVisibility(i,e)}function ba(i,e){return jt.resolveListLastRowFlags(i,e)}const Gt=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[X]:r}=i,a=be(),o=e.value(),l=u.useMemo(()=>ya(e,a),[e,a]),d=u.useMemo(()=>ba(t,l),[t,l]),f=u.useMemo(()=>St(e),[e]),g=u.useMemo(()=>kt(e),[e]),c=u.useMemo(()=>ea(e),[e]),p=u.useMemo(()=>V.Index.takeDescriptionDiff(e),[e]),y=(o==null?void 0:o.indexName)??"",h=u.useCallback(H=>{const D=V.IndexPartNames.resolveSideDisplay(e,H);return s.jsx(je,{layoutSide:H,display:D})},[e]),b=u.useCallback(H=>{if(!o)return s.jsx(s.Fragment,{});if(!V.PropertyRow.isSubheaderVisible(f,H))return s.jsx(s.Fragment,{});const D=o.partNames.length>0;return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[D&&h(H),s.jsx(He,{columnId:e.id,layoutSide:H,value:o,flagDiffs:c})]})},[c,e.id,f,h,o]),A=l.showDescription;return o?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":r,[j]:d.isTitleListLastRow||void 0,value:y,expandable:!1,expanded:!0,variant:C.body2,subheader:l.showSubheader?b:void 0,usage:I.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),A&&s.jsx(Se,{"data-precededby":G.DDL_INDEX_ROW,[j]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body1,textFontWeight:"normal",textColor:Je,usage:re.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Gt.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ut(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:G.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const Da=i=>{const{node:e,[X]:t}=i;return Sr(e)?s.jsx(Va,{"data-precededby":t,node:e}):s.jsx(va,{"data-precededby":t,node:e})},va=i=>{const{node:e,[X]:t}=i,n=ge(),r=e.value(),a=xt(e.childrenNodes()),o=u.useMemo(()=>Ut(a),[a]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection}),s.jsx(Ue.Provider,{value:n+1,children:o.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>s.jsx(qi,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},Va=i=>{const{node:e,[X]:t}=i,n=ge(),r=e.value(),a=xt(e.childrenNodes()),o=u.useMemo(()=>Xe(ke(e)),[e]),l=u.useMemo(()=>Ut(a),[a]),d=u.useMemo(()=>V.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection,...o}),s.jsx(Ue.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>Nt(f)?s.jsx(Gt,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):s.jsx(qi,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};Da.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Cn as $,X as A,Fa as B,ua as C,Ir as D,De as E,La as F,Ma as G,Rn as H,Da as I,Pa as J,Ra as K,rt as L,ye as M,We as N,$e as O,G as P,Ja as Q,$a as R,ce as S,oe as T,V as U,Ya as V,vn as W,wi as X,ti as Y,Vn as Z,Hn as _,kr as a,wn as a0,xn as a1,Nn as a2,se as a3,nt as a4,Ca as a5,tt as a6,Aa as a7,Ha as a8,ka as a9,Si as aA,ue as aB,Oe as aC,Ba as aD,fe as aE,U as aF,Ci as aG,ir as aH,er as aI,Zn as aJ,Ea as aa,Ta as ab,L as ac,Ua as ad,Ga as ae,Ka as af,Ye as ag,mt as ah,sr as ai,mr as aj,yt as ak,ke as al,Xe as am,I as an,qa as ao,or as ap,Q as aq,di as ar,Or as as,we as at,J as au,ur as av,dr as aw,re as ax,fr as ay,xi as az,C as b,Se as c,Je as d,Sn as e,Oa as f,Wa as g,Nr as h,wr as i,Hr as j,Ar as k,_ as l,$n as m,ni as n,Qn as o,Bn as p,ut as q,Ia as r,ot as s,_a as t,Di as u,Be as v,M as w,st as x,lt as y,Mn as z};
