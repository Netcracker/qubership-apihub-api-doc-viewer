var Bt=Object.defineProperty;var Wt=(i,e,t)=>e in i?Bt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var v=(i,e,t)=>(Wt(i,typeof e!="symbol"?e+"":e,t),t);import{t as Y,v as K,w as ai,x as Z,Z as Yt,_ as Ve,$ as Re,N as ee,a0 as et,P as q,a1 as $t,a2 as Jt,K as Ae,Q as Xt,M as _e,a3 as zt,U as L,H as me,a4 as ri,a5 as qe,a6 as Qt,a7 as Zt,a8 as en,a9 as tn,aa as nn,ab as an,ac as rn,ad as on,ae as sn,af as ln,ag as dn,ah as un,ai as fn,aj as gn,R as te,ak as cn,al as it,W as ne,V as U,am as ge,an as xe,X as Ge,Y as pi,l as hi,S as mi,ao as oi,ap as si,y as pn,aq as Fe,ar as hn,as as mn,at as Ne,au as ei,av as ii,aw as yn,ax as bn,O as Pi,ay as Dn,az as vn,u as be,f as Ue,h as tt}from"./UxBadge-3d9cd0ec.js";import{j as s}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const se={SIMPLE:"simple",COMPLEX:"complex"};class Ke{constructor(e="#",t="",n,a,r){v(this,"type");v(this,"parent");v(this,"container");v(this,"newDataLevel");v(this,"_value");v(this,"_meta");v(this,"_childrenNodes",[]);v(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=a;const{type:o=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=r;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const a=new Ke(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const a=n.findNestedNode(e,t);if(a)return a}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class yi extends Ke{constructor(t="#",n="",a,r,o){super(t,n,a,r,o);v(this,"type");this.id=t,this.key=n,this.kind=a,this.type=o.type}createCycledClone(t,n,a){const r=new yi(t,n,this.kind,!0,{type:this.type,parent:a,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class Vn{constructor(){v(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,a,r){const o=new Ke(e,t,n,a,r);return this.nodes.set(e,o),o}createComplexNode(e,t,n,a,r){const o=new yi(e,t,n,a,r);return this.nodes.set(e,o),o}createCycledClone(e,t,n,a){const r=e.createCycledClone(t,n,a);return this.nodes.set(t,r),r}}const Nn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},wn=Object.values(Nn);new Set(wn);class Be{aggregateByDescendantDiffs(e,t,n,a){}static isDiffsRecord(e){if(!_(e))return!1;for(const t of Object.values(e))if(!Be.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return _(t)&&(Y(t)||K(t)||ai(t)||Z(t))}}function _(i){return nt(i)&&!Array.isArray(i)}function nt(i){return typeof i=="object"&&i!==null}function xn(i){return _(i)&&Object.keys(i).every(e=>typeof e=="string")}function ti(i){return Array.isArray(i)}function Cr(i){return typeof i=="number"}function Ar(i){return typeof i=="string"}function _r(i,e,t){let n=i,a=!1;for(const r of e){if(!_(n)&&!ti(n))return;if(a){let l;nt(n)&&(l=n[r]),!l&&ti(n)&&t&&(l=n.find(d=>_(d)&&d[t]===r)),n=l,a=!1;continue}n=n[r],ti(n)&&(a=!0)}return n}function Er(i,e){return Object.keys(i).find(t=>i[t]===e)}function Tr(i){if(Be.isDiffsRecord(i))return i}class Sn{constructor(){v(this,"tree",null)}pick(e,t){if(!_(e))return null;const n={};for(const a of t){const r=String(a);if(!(r in e))continue;const o=e[r];Array.isArray(o)?n[r]=[...o]:_(o)?n[r]={...o}:n[r]=o}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class at{constructor(){v(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const Ee=()=>{},kn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:Ee,info:Ee,warn:Ee,error:Ee};class qr{constructor(){v(this,"fragments",new Map);v(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Oi(i,e){return"#"+Yt([...i,...e])}function Ir(i,e){const t=new at,n=[];for(let a=i;a;a=a.container??a.parent)n.push(a);for(const a of n.reverse()){const r=e.get(a.id);r&&t.enter(r,a)}return t}function Lr(i){return Array.isArray(i)?i.length>0:_(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function Hn(i){return i==null||!_(i)&&!Ve(i)}function Cn(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:a,createNodeParams:r,createStateForSimpleNode:o,createStateForComplexNode:l,isSimpleNode:d,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=Hn,shouldSkipNodeCreation:p,shouldStopAfterNodeCreation:y,lazy:h}=i;return[({value:D,state:m,key:F,path:E})=>{if(typeof F=="symbol")return;if(!_(D)&&!Ve(D))return{value:D};const{ancestors:T,parent:N,container:w,pathPrefix:x=[]}=m,A=T.get(D);if(!A||!d(A)&&!f(A))return{value:D};if(!N||!d(N))return{value:D};const S=Oi(x,E),X=g(F,D),z=t.createCycledClone(A,S,X,N);return w?w.addNestedNode(z):N&&N.addChildNode(z),{done:!0}},({key:D,value:m,path:F,state:E,rules:T})=>!T||!Array.isArray(T.transformers)?void 0:{value:T.transformers.reduce((x,A)=>A(D,x,e,F,E),m)},({key:D,value:m,path:F,rules:E,state:T})=>{if(!E)return{done:!0};if(typeof D=="symbol")return{done:!0};if(c(m))return{done:!0};if(p!=null&&p(m,E)||!E.kind||!n.includes(E.kind))return;const{parent:N,container:w,ancestors:x,pathPrefix:A=[],depth:S=0,materializeDepth:X}=T,z=Oi(A,F),pe=g(D,m),{kind:P,complex:le=!1}=E,B=r(m,N,w,P),ie=a(z,pe,P,le,B);if(!ie)return;w?w.addNestedNode(ie):N&&N.addChildNode(ie),h&&(_(m)||Ve(m))&&h.state.rememberFragment(z,m);let Ii=m;if(y!=null&&y(ie,m)){const Ze=N?N.descendantDiffs:void 0;if(!Ze||!(D in Ze))return{done:!0};const Ri=Ze[D];if(!Ri)return{done:!0};const{data:Fi}=Ri;Z(Fi)&&(Ii=Fi.beforeValue)}const Li=S+(B.newDataLevel?1:0),Mi=!!(h&&d(ie)&&X!==void 0&&Li>=X&&(_(m)||Ve(m))&&h.resolveHasOwnChildren(m,E));Mi&&h.state.defer({nodeId:z,fragment:m,path:[...A,...F],rules:E});const Qe=_(m)||Ve(m);Qe&&x.enter(m,ie);let ve;return d(ie)?ve=o(T,ie):ve=l(T,ie),ve={...ve,depth:Li,materializeDepth:T.materializeDepth,pathPrefix:T.pathPrefix},Mi?{done:!0,exitHook:Qe?()=>{x.leave(m)}:void 0}:{value:Ii,state:ve,exitHook:Qe?()=>{x.leave(m)}:void 0}}]}class An{}class ce{constructor(e="#",t="",n,a,r){v(this,"type");v(this,"parent");v(this,"container");v(this,"newDataLevel");v(this,"_value");v(this,"_meta");v(this,"_childrenNodes",[]);v(this,"_nestedNodes",[]);v(this,"_diffs",{});v(this,"_diffsSummary",new Set);v(this,"_descendantDiffs",{});v(this,"_descendantDiffsSummary",new Set);v(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=a;const{type:o=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=r;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const a=new ce(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a.copyDiffsFrom(this),a}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const a=n.findNestedNode(e,t);if(a)return a}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class _n extends Vn{constructor(){super()}}const R={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},rt=Object.values(R),ot="<unnamed>";function En(i){return i??ot}function st(i){return i!==ot}function Tn(i,e){return e.indexName&&st(e.indexName)?e.indexName:i}function Mr(i,e,t){return t||(e!=null&&e.indexName&&st(e.indexName)?e.indexName:String(i))}function li(i=R.TABLE){return{"/columns":{"/items":{"/*":()=>li(R.COLUMN)},kind:R.COLUMNS},"/indexes":{"/items":{"/*":()=>li(R.INDEX)},kind:R.INDEXES},kind:i}}const ji={Identity:"identity",Expression:"expression"};function qn(i){return i.kind===Re.Literal&&typeof i.value=="string"}function In(i){return i.kind===Re.RawExpr&&typeof i.expr=="string"}function Ln(i){return _(i)&&typeof i.expr=="string"}function Mn(i){return _(i)&&typeof i.value=="string"}function Rn(i){if(!_(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!_(t)||!("before"in t)||!("after"in t)?!1:Be.isDiff(e)}const De="titleRow",Fn=["typeName","size","precision","scale","label"],Rr={ToEnum:"to-enum",FromEnum:"from-enum"},Fr={Lost:"lost",Gained:"gained"},lt=["isPrimaryKey","isUnique","isNotNull","isGenerated"],dt=["isUnique"],Pr=[ee,De,"tableName","schemaName","description"],Or=[ee,De,"columnName","description","generatedExpression",...lt],jr=[ee,De,"indexName","description",...dt];function ut(i){return Rn(i[De])}function Pn(i){return _(i)&&i.kind===et.Domain&&typeof i.type=="string"}function On(i){return i.kind===q.BoolType&&typeof i.type=="string"}function jn(i){return i.kind===q.IntegerType&&typeof i.type=="string"}function Gi(i){return i.kind===q.DecimalType&&typeof i.type=="string"}function Ui(i){return i.kind===q.FloatType&&typeof i.type=="string"}function Ki(i){return i.kind===q.StringType&&typeof i.type=="string"}function Bi(i){return i.kind===q.BinaryType&&typeof i.type=="string"}function Wi(i){return i.kind===q.TimeType&&typeof i.type=="string"}function Gn(i){return i.kind===q.JSONType&&typeof i.type=="string"}function Un(i){return i.kind===q.SpatialType&&typeof i.type=="string"}function Kn(i){return i.kind===q.UUIDType&&typeof i.type=="string"}function ni(i){return i.kind===q.EnumType&&Array.isArray(i.values)}function Bn(i){return i.kind===q.UnsupportedType&&typeof i.type=="string"}function Yi(i){return typeof i.type=="string"}function bi(i){switch(i.kind){case Re.Literal:return qn(i)?i.value:i.kind;case Re.RawExpr:return In(i)?i.expr:i.kind;case $t.NamedDefault:try{return bi(Jt(i))}catch{return i.kind}default:return Ln(i)?i.expr:Mn(i)?i.value:i.kind}}function ft(i){return ct(gt(bi(i)))}function Wn(i){return ct(gt(i))}function gt(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}function ct(i){return i.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}const Yn="Columns",$n="Indexes";class Jn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const a=this.findTableInRealm(n,t);return a?this.buildTableOrientedSpecFromRealm(n,a,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(r=>r.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const a=Ae(t.attrs,_e.Comment);return{tableName:t.name,schemaName:n.schemaName,...a?{description:a.text}:{},columns:{title:Yn,items:(t.columns??[]).map(r=>this.buildColumnRowValue(e,t,r,n.schemaName))},indexes:{title:$n,items:(t.indexes??[]).map(r=>this.buildIndexRowValue(r))}}}extractRealm(e){return this.isRealm(e)?e:_(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var a;const n=e.schemas.find(r=>r.name===t.schemaName);if(n)return(a=n.tables)==null?void 0:a.find(r=>r.name===t.name)}isRealm(e){return _(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!_(e)||typeof e.tableName!="string"||!_(e.columns)||!Array.isArray(e.columns.items)||!_(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,a){var k,H,D;const r=Ae(n.attrs,_e.Comment),o=(k=n.attrs)==null?void 0:k.find(m=>m.kind===Xt.Identity),l=Ae(n.attrs,_e.GeneratedExpr),d=o!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(m=>this.buildForeignKeyTarget(e,m,n,a)).filter(m=>m!==void 0),c=g.length>0,p=this.formatColumnType(n.type),y=(H=n.type)==null?void 0:H.type,h=y&&ni(y)?y.values:void 0,b=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:b,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:d,...o?{generatedBy:ji.Identity}:{},...l&&!o?{generatedBy:ji.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!b&&((D=n.type)==null?void 0:D.null)===!1,...n.default!==void 0?{defaultValue:ft(n.default)}:{},...r?{description:r.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((a,r)=>a.seqNo-r.seqNo).map(a=>this.formatIndexPartName(a)).filter(a=>a.length>0),n=Ae(e.attrs,_e.Comment);return{indexName:En(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const a of e.schemas)if((n=a.tables)!=null&&n.some(r=>r===t))return a.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(a=>{var r;return((r=a.column)==null?void 0:r.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,a;return e.unique===!0&&(e.parts??[]).length===1&&((a=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:a.name)===t}isSingleColumnIndexForColumn(e,t){var n,a;return(e.parts??[]).length===1&&((a=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:a.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var a;return(a=n.columns)==null?void 0:a.some(r=>this.isSameForeignKeyColumn(r,t))})}buildForeignKeyTarget(e,t,n,a){var f,g;const r=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(r<0)return;const o=t.refTable,l=(g=t.refColumns)==null?void 0:g[r];if(!o||!l)return;const d=this.resolveForeignKeyTargetSchemaName(e,o,a);if(d)return{schemaName:d,tableName:o.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const a=this.findSchemaNameForTable(e,t);if(a)return a;const r=this.findUniqueSchemaNameForTableName(e,t.name);return r||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(a=>{var r;return(r=a.tables)==null?void 0:r.some(o=>o.name===t)}).map(a=>a.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Pn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return On(e)?{kind:q.BoolType,typeName:e.type,label:t}:jn(e)?{kind:q.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Gi(e)?{kind:q.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ui(e)?{kind:q.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ki(e)?{kind:q.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Bi(e)?{kind:q.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Wi(e)?{kind:q.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Gn(e)?{kind:q.JSONType,typeName:e.type,label:t}:Un(e)?{kind:q.SpatialType,typeName:e.type,label:t}:Kn(e)?{kind:q.UUIDType,typeName:e.type,label:t}:ni(e)?{kind:q.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Bn(e)?{kind:q.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Yi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:et.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Gi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ki(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Bi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ui(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Wi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ni(e)?t=e.type??e.values[0]??"enum":Yi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(a=>a!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?bi(e.expr):""}}function Xn(i){return Cn(i)}const zn=new Set([R.TABLE,R.COLUMNS,R.COLUMN,R.INDEXES,R.INDEX]);class Di extends An{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,a){return!xn(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:a(n,Di.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return zn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case R.TABLE:return["tableName","schemaName","description"];case R.COLUMNS:case R.INDEXES:return["title"];case R.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case R.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const Qn="[DDL API]";class Gr extends Sn{constructor(t){const{source:n,tableKey:a,logger:r=kn()}=t;super();v(this,"tree");v(this,"source");v(this,"tableKey");v(this,"logger");v(this,"nodeDataBuilder");this.source=n,this.tableKey=a,this.logger=r,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!_(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new at},a=li(),r=Xn({source:t,tree:this.tree,supportedNodeKinds:rt,createNodeFromRaw:(o,l,d,f,g)=>this.createNodeFromRaw(o,l,d,f,g),createNodeParams:(o,l,d)=>({value:_(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l)});return zt(t,r,{state:n,rules:a}),this.tree}get logPrefix(){return Qn}createTree(){return new _n}createNodeDataBuilder(){return new Di}prepareSource(){return new Jn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,a,r,o){const{parent:l,container:d,newDataLevel:f}=o;if(r){const y=this.createNodeMeta(n,o),h={type:se.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:y,newDataLevel:f};return this.tree.createComplexNode(t,n,a,!1,h)}const g=this.createNodeValue(n,a,o),c=this.createNodeMeta(n,o),p={type:se.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,a,!1,p)}createNodeMeta(t,n){const{value:a}=n;return this.nodeDataBuilder.createNodeMeta(a)}createNodeValue(t,n,a){const{value:r}=a;return this.nodeDataBuilder.createNodeValue(n,t,r,(o,l)=>this.pick(o,l))}resolveNodeKey(t,n){return _(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?Tn(t,n):t:t}isSimpleTreeNode(t){return t.type===se.SIMPLE}isComplexTreeNode(t){return t.type===se.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function Zn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const $={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function pt(i,e,t){const n=t===L,a=new Set,r=[],o=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&Z(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=o(d);if(!f){r.push({text:d});continue}if(a.has(f))continue;a.add(f);const{data:g}=f;if(Y(g)){!n&&typeof g.afterValue=="string"&&r.push({text:g.afterValue,diff:f});continue}if(K(g)){n&&typeof g.beforeValue=="string"&&r.push({text:g.beforeValue,diff:f});continue}if(Z(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;r.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||a.has(f)||K(f.data)&&n&&(r.push({text:d,diff:f}),a.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return r.sort((d,f)=>l(d.text)-l(f.text))}function ht(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,a)=>{a>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function we(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,a=t===L;return Y(n)?a?void 0:String(n.afterValue??i??""):K(n)?a?String(n.beforeValue??i??""):void 0:Z(n)?String(a?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function mt(i,e){return(e===L?i.styles.before:i.styles.after).isContentVisible}function ea(i,e){return i?mt(i,e):!0}function ia(i,e){return i?(e===L?i.styles.before:i.styles.after).isHeaderVisible:!0}function ta(i){if(i&&(Y(i.data)||K(i.data)))return i}const $i=["size","precision","scale"];class W{static takeFieldDiffs(e){const t=e.diffs.columnTypeFieldDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var g;const n=(g=e.value())==null?void 0:g.columnType;if(!n)return{kind:$.NO_DIFFS,text:""};const a=W.takeFieldDiffs(e);if(!a)return{kind:$.NO_DIFFS,text:n.label};const r=a.typeName??a.label,o=a.typeName?"typeName":"label";if(W.shouldUseMonolithicHighlight(a)){const c=Object.values(a).find(Boolean);return c?{kind:$.WHOLE_DIFFS,text:W.buildMonolithicSideLabel(n,a,o,t),diff:W.buildMonolithicDiffMetadata(c)}:{kind:$.NO_DIFFS,text:n.label}}const l=[],d=we(W.takeDisplayName(n),r,t);d!==void 0&&l.push({text:d,diff:r});const f=W.buildParameterSideSegments(n,a,t);return l.push(...f),l.length===0?{kind:$.NO_DIFFS,text:n.label}:{kind:$.PARTIAL_DIFFS,segments:l}}static shouldUseMonolithicHighlight(e){const t=Fn.map(a=>[a,e[a]]).filter(a=>!!a[1]);if(t.length===0)return!1;if(t.length===1){const[a]=t[0];return a==="typeName"||a==="label"}return new Set(t.map(([,a])=>a.data.action)).size===1}static buildMonolithicSideLabel(e,t,n,a){const r=we(W.takeDisplayName(e),t[n],a)??W.takeDisplayName(e),o=[];for(const l of $i){const d=we(W.takeParameterValue(e,l),t[l],a);d!==void 0&&o.push(d)}return o.length===0?r:`${r} (${o.join(", ")})`}static buildParameterSideSegments(e,t,n){const a=W.collectVisibleParameterKeys(e,t,n);if(a.length===0)return[];const r=a.flatMap(o=>{const l=we(W.takeParameterValue(e,o),t[o],n);return l===void 0?[]:[{text:l,diff:t[o]}]});return[...ht(r,"spaced")]}static collectVisibleParameterKeys(e,t,n){return $i.filter(a=>{const r=t[a];return r?mt(r,n):W.takeParameterValue(e,a)!==void 0})}static takeDisplayName(e){return"typeName"in e&&typeof e.typeName=="string"?e.typeName:"name"in e&&typeof e.name=="string"?e.name:e.label}static takeParameterValue(e,t){if(!(t in e))return;const n=Reflect.get(e,t);return typeof n=="number"?n:void 0}static buildMonolithicDiffMetadata(e){const{data:t}=e;return Z(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow}}}:Y(t)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Green}}}:K(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class vi{static takeDiffs(e){const t=e.diffs.partNameDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.partNames)??[],a=vi.takeDiffs(e),r=a?pt(n,a,t):n.map(d=>({text:d})),o=ht(r,"tight");return o.length===0?{kind:$.NO_DIFFS,text:""}:{kind:$.PARTIAL_DIFFS,segments:o}}}class Vi{static takeTitleRowDiff(e){if(ut(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){const t=e.diffs[ee];if(t&&(Y(t.data)||K(t.data)))return t}static takeSchemaNameDiff(e){return e.diffs.schemaName}static takeDescriptionDiff(e){return e.diffs.description}static resolveSchemaNameSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.schemaName)??"",a=Vi.takeSchemaNameDiff(e);if(!a)return n;const r=a.data,o=t===L;return Y(r)?o?"":n:K(r)?o?n:"":Z(r)?o?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}}class na{static takeTitleRowDiff(e){if(ut(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){return ta(e.diffs[ee])}static isSubheaderVisible(e,t){return ia(e,t)}static isContentVisible(e,t){return ea(e,t)}static isListSectionUniformWholeNodeChange(e){const t=e.diffs[ee];return t?Y(t.data)||K(t.data):!1}}class aa{static takeFlagDiffs(e){const t={};let n=!1;for(const a of lt){const r=e.diffs[a];r&&(t[a]=r,n=!0)}return n?t:void 0}static isFlagBadgeHighlighted(e){return e?e.highlightingMode.get(ri.Default)!==qe.Invisible:!1}static takeGeneratedExpressionDiff(e){return e.diffs.generatedExpression}static takeDescriptionDiff(e){return e.diffs.description}}let ra=class{static takeTargetDiffs(e){const n=e.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}};class de{static takeDiff(e){return e.diffs.defaultValue}static takeRowColorizingDiff(e){return e.diffs.defaultValueRowColorizingDiff}static resolveSideDisplay(e,t){var l;const n=(l=e.value())==null?void 0:l.defaultValue,a=de.takeDiff(e),r=t===L;if(!a){const d=e.diffs[ee];if(d){const f=d.data;if(Y(f))return r?void 0:n;if(K(f))return r?n:void 0}return n}const o=a.data;return Y(o)?r?void 0:n??de.formatDiffSide(o.afterValue):K(o)?r?de.formatDiffSide(o.beforeValue)??n:void 0:Z(o)?r?de.formatDiffSide(o.beforeValue)??n:de.formatDiffSide(o.afterValue)??n:n}static formatDiffSide(e){if(typeof e=="string")return Wn(e);if(_(e)&&"kind"in e)return ft(e)}}class Ni{static takeDiffs(e){const n=e.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}static takeRowColorizingDiff(e){return e.diffs.enumValuesRowColorizingDiff}static resolveSideItems(e,t){var n;return pt(((n=e.value())==null?void 0:n.enumValues)??[],Ni.takeDiffs(e),t).map(({text:a,diff:r})=>({literal:a,diff:r}))}}class oa{static takeFlagDiffs(e){const t={};let n=!1;for(const a of dt){const r=e.diffs[a];r&&(t[a]=r,n=!0)}return n?t:void 0}static takeDescriptionDiff(e){return e.diffs.description}}class V{}v(V,"Table",Vi),v(V,"PropertyRow",na),v(V,"Column",aa),v(V,"ForeignKey",ra),v(V,"ColumnDefaultValue",de),v(V,"ColumnEnumValues",Ni),v(V,"Index",oa),v(V,"IndexPartNames",vi),v(V,"ColumnTypeLabel",W);const sa={ENUM:Qt,MIN_LENGTH:Zt,MAX_LENGTH:en,PATTERN:tn,MINIMUM:nn,MAXIMUM:an,EXCLUSIVE_MINIMUM:rn,EXCLUSIVE_MAXIMUM:on,MULTIPLE_OF:sn,MIN_PROPERTIES:ln,MAX_PROPERTIES:dn,UNIQUE_ITEMS:un,MIN_ITEMS:fn,MAX_ITEMS:gn},M={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:sa.UNIQUE_ITEMS},Kr={[M.VALUE_LENGTH]:["minLength","maxLength"],[M.VALUE_PATTERN]:["pattern"],[M.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[M.VALUE_MULTIPLE_OF]:["multipleOf"],[M.PROPERTIES_COUNT]:["minProperties","maxProperties"],[M.ITEMS_COUNT]:["minItems","maxItems"],[M.UNIQUE_ITEMS]:["uniqueItems"]},Br={[M.VALUE_LENGTH]:te.ValueLengthRow,[M.VALUE_PATTERN]:te.ValuePatternRow,[M.VALUE_RANGE]:te.ValueRangeRow,[M.VALUE_MULTIPLE_OF]:te.ValueMultipleOfRow,[M.PROPERTIES_COUNT]:te.PropertiesCountRow,[M.ITEMS_COUNT]:te.ItemsCountRow,[M.UNIQUE_ITEMS]:te.UniqueItemsRow},Wr={[M.VALUE_LENGTH]:{minLength:0,maxLength:1},[M.VALUE_PATTERN]:{pattern:0},[M.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[M.VALUE_MULTIPLE_OF]:{multipleOf:0},[M.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[M.ITEMS_COUNT]:{minItems:0,maxItems:1},[M.UNIQUE_ITEMS]:{uniqueItems:0}},la=u.createContext(!1),We=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:a=!1}=i;return a||!t?e:s.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[s.jsx(cn,{variant:t,message:n}),e]})};We.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ye=u.memo(i=>{const{content:e}=i;return s.jsx("div",{className:"flex flex-row w-full",children:e})});Ye.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const $e=u.memo(i=>{const{left:e,right:t}=i;return s.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[s.jsx("div",{className:"flex w-1/2",children:e}),s.jsx("div",{className:"flex w-1/2",children:t})]})});$e.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const wi="px-4",di="",da="px-4",xi="";var I=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(I||{}),C=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(C||{});const ui=5,fi=300;function ua(i){return i?i.length>fi||it.trim(i.split(`
`)).length>ui:!1}function fa(i){if(!i)return;if(i.length>fi)return i.slice(0,fi)+"...";const e=it.trim(i.split(`
`));return e.length>ui?e.slice(0,ui).join(`
`)+"...":i}function ga(i){switch(i){case C.h1:return"text-value-expander--h1";case C.h2:return"text-value-expander--h2";case C.h3:return"text-value-expander--h3";case C.h4:return"text-value-expander--h4";case C.h5:return"text-value-expander--h5";case C.h6:return"text-value-expander--h6";case C.body1:return"text-value-expander--body1";case C.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const ca=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:a}=i,r=u.useCallback(()=>{n==null||n(o=>!o)},[n]);return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"mt-1",children:s.jsx("a",{className:`text-value-expander ${ga(a)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:r,children:t?"Show less":"Show more"})})})},yt=u.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:a,diff:r,usage:o,highlightingMode:l=qe.Default}=i,d=l===qe.Default,f=l===qe.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:y,label:h}=i,[b,k]=u.useState(!1),H=u.useCallback((N,w,x)=>{if(x)return null;const A=f?"":w.join(" "),S=`text-value ${a?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),X=`${S} ${A}`.trim(),z={onClick:a,...y!=null&&y.trim()?{style:{color:y}}:{}};N=b?N:fa(N);const pe=(P,le)=>{const B={...z,className:le};switch(t){case C.h1:return s.jsx("h1",{...B,children:P});case C.h2:return s.jsx("h2",{...B,children:P});case C.h3:return s.jsx("h3",{...B,children:P});case C.h4:return s.jsx("h4",{...B,children:P});case C.h5:return s.jsx("h5",{...B,children:P});case C.h6:return s.jsx("h6",{...B,children:P});case C.body1:return s.jsx("span",{...B,className:`${le} text-value-body1`.trim(),children:P});case C.body2:return s.jsx("span",{...B,className:`${le} text-value-body2`.trim(),children:P})}};return h?pe(s.jsxs(s.Fragment,{children:[s.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),s.jsx("span",{className:A,children:N})]}),S):pe(N,X)},[b,f,h,p,c,a,y,g,t]),D=u.useCallback(N=>{const w=[];let x=N,A=!1;if(r){const{data:S,styles:X}=r;switch(n){case L:w.push(U.highlighter(X.before.textHighlighterColor)),d&&(K(S)&&(x=he(S.beforeValue)?S.beforeValue:x),Z(S)&&(o===I.JsoProperty&&!f&&w.push(U.highlighter(me.Yellow)),x=he(S.beforeValue)?S.beforeValue:x),ai(S)&&(x=he(S.beforeKey)?S.beforeKey:x)),Y(S)&&(A=!0);break;case ne:w.push(U.highlighter(X.after.textHighlighterColor)),d&&(Y(S)&&(x=he(S.afterValue)?S.afterValue:x),Z(S)&&(o===I.JsoProperty&&!f&&w.push(U.highlighter(me.Yellow)),x=he(S.afterValue)?S.afterValue:x),ai(S)&&(x=he(S.afterKey)?S.afterKey:x)),K(S)&&(A=!0);break}}return[x,w,A]},[r,d,f,n,o]),[m,F,E]=D(e);return u.useMemo(()=>s.jsxs("div",{className:"flex flex-col items-start gap-1",children:[H(m,F,E),!E&&s.jsx(ca,{isExpandable:ua(m),expanded:b,setExpanded:k,variant:t})]}),[H,m,F,E,b,k,t])});function he(i){return typeof i=="string"}const J="data-precededby",O="data-ddl-list-last-row";var j=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSON_SCHEMA_PROPERTY="json-schema-property",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(j||{}),ae=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(ae||{});const pa={[ae.DdlApiProperty]:xi},ha={[ae.DdlApiProperty]:["min-h-[26px]"]};function ma(i){const e=pa[i]??wi,t=ha[i]??[];return[e,...t].join(" ")}const Ie=u.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:a=ae.Default,hideLevelIndicatorWhenSideEmpty:r=!1}=i,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[J]:c}=i,{diff:p,descendantDiffs:y,diffsSeverities:h}=i,b=ge(),k=a===ae.DdlApiProperty,H=u.useMemo(()=>!r||V.PropertyRow.isContentVisible(p,n),[p,r,n]),D=k&&b>0&&H,m=u.useMemo(()=>{if(!p)return[];const{data:T,styles:N}=p;if(!T)return[];const w=[];return n===L&&w.push(U.background(N.before.backgroundColor)),n===ne&&w.push(U.background(N.after.backgroundColor)),w},[p,n]),F=u.useMemo(()=>ma(a),[a]),E=s.jsx(yt,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return s.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${k?"items-stretch":""} ${F} gap-2 ${m.join(" ")}`,children:[D&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:b}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),k?s.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:E}):E]})});Ie.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Se=u.memo(i=>{const e=Ge(),{diffsSeverities:t,diffsSeverityPlacement:n=te.DescriptionRow}=i,a=u.useMemo(()=>t==null?void 0:t[n],[t,n]),r=u.useMemo(()=>a==null?void 0:a.type,[a]),o=u.useMemo(()=>pi(a==null?void 0:a.causedAt),[a]);switch(e){case mi:return s.jsx(We,{diffType:r,diffTypeCause:o,hidden:!1,children:s.jsx($e,{left:s.jsx(Ie,{...i,layoutSide:L}),right:s.jsx(Ie,{...i,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Ie,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Se.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Je="#353C4E",ya=u.createContext(void 0);function bt(){return u.useContext(ya)}const Dt=i=>{const{expandable:e,expanded:t,onClick:n,level:a}=i,r=u.useContext(la),o=a>0,l=n??(()=>{r&&console.warn("Expander callback is not provided.")});return!e&&!o?null:s.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&s.jsx(oi,{short:e}),e&&t!==void 0&&s.jsx(si,{onToggle:l,expanded:t})]})};Dt.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ji="w-4 min-w-[16px] shrink-0 flex-none",ba="w-3 min-w-[12px] shrink-0 flex-none",Si=()=>s.jsx("div",{className:ba,"aria-hidden":"true"}),vt=i=>{const{isRoot:e,expandable:t,expanded:n,onClick:a}=i;return e&&!t?s.jsx(Si,{}):e&&t?s.jsx("div",{className:"flex flex-row items-center justify-center pt-1.5",children:n!==void 0&&s.jsx(si,{onToggle:a??(()=>{}),expanded:n})}):t?s.jsxs("div",{className:`flex flex-row items-center justify-center pt-1.5 gap-0.5 ${Ji}`,children:[s.jsx(oi,{short:!0}),n!==void 0&&s.jsx(si,{onToggle:a??(()=>{}),expanded:n})]}):s.jsx("div",{className:`flex flex-row items-center justify-center pt-1.5 ${Ji}`,children:s.jsx(oi,{})})};Si.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRootExpanderOffset"};vt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExpanderColumn",props:{isRoot:{required:!0,tsType:{name:"boolean"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Da={[I.JsoProperty]:di,[I.DdlApiSection]:da,[I.DdlApiProperty]:xi,[I.JsonSchemaProperty]:di},va={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function Va(i){const e=Da[i]??wi,t=va[i]??[];return[e,...t].join(" ")}const Le=u.memo(i=>{const{expandable:e,expanded:t,isRoot:n=!1,onClickExpander:a,value:r,titleContent:o,variant:l,layoutSide:d,enableHeader:f=!0,enableHeaderValue:g=!0,subheader:c,usage:p=I.Default,highlightingMode:y=pn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:b,descendantDiffs:k,diffsSeverities:H}=i,{[J]:D,[O]:m}=i,F=u.useMemo(()=>{switch(p){case I.Default:return y.get(ri.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return y.get(ri.JsoPropertyKey)}},[y,p]),E=ge(),T=bt(),N=u.useMemo(()=>T?d===L?T.beforeLevel:T.afterLevel:E,[d,E,T]),w=u.useMemo(()=>{const P=[];if(!b)return P;const{data:le,styles:B}=b;return le&&(d===L&&P.push(U.background(B.before.backgroundColor)),d===ne&&P.push(U.background(B.after.backgroundColor))),P},[b,d]),x=u.useMemo(()=>typeof o=="function"?o(d):o||(g?s.jsx(yt,{"data-precededby":D,value:r,variant:l,layoutSide:d,diff:b,usage:p,highlightingMode:F,onClick:a}):null),[o,g,D,r,l,d,b,p,F,a]),A=p===I.DdlApiProperty,S=p===I.JsonSchemaProperty,X=n||N===0,z=u.useMemo(()=>f?S?s.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex shrink-0 items-stretch self-stretch",children:[s.jsx(xe,{level:N}),s.jsx(vt,{isRoot:X,expandable:e,expanded:t,onClick:a})]}):s.jsxs(s.Fragment,{children:[(e||N>0)&&s.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:N}),s.jsx(Dt,{expandable:e,expanded:t,onClick:a,level:N})]}),!A&&x]}):h?null:N>0&&s.jsx(xe,{level:N}),[f,e,t,h,A,S,X,N,a,D]),pe=u.useMemo(()=>Va(p),[p]);return s.jsxs("div",{"data-precededby":D,"data-ddl-list-last-row":m?!0:void 0,"data-usage":p!==I.Default?p:void 0,className:`title-row-content flex w-full ${A||S?"items-stretch":"items-center"} h-full ${pe} gap-2 ${w.join(" ")}`,children:[z,A?s.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[x,c==null?void 0:c(d)]}):S?s.jsxs("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center gap-2",children:[x,c==null?void 0:c(d)]}):c==null?void 0:c(d)]})});Le.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{const e=Ge(),{diff:t,diffsSeverities:n,enableHeaderValue:a}=i,r=u.useMemo(()=>n==null?void 0:n["title-row"],[n]),o=u.useMemo(()=>r==null?void 0:r.type,[r]),l=u.useMemo(()=>pi(r==null?void 0:r.causedAt),[r]);switch(e){case mi:return s.jsx(We,{diffType:o,diffTypeCause:l,hidden:!1,children:s.jsx($e,{left:s.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:a,layoutSide:L}),right:s.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:a,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Le,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Yr(i,e){return u.useMemo(()=>e(i)?ke(i):{},[e,i])}function ke(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Xe(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:a=!0,diffsSeverityPlacement:r,resolveDiff:o}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const b=g.find(([k])=>k===String(h));return b==null?void 0:b[1]},p=t?c(t):void 0;return{diff:o?o(l,c):n?l[ee]??p:p,...a?{descendantDiffs:d}:{},diffsSeverities:f,...r?{diffsSeverityPlacement:r}:{}}}function Na(i){return rt.includes(i.kind)}function $r(i){return i.childrenNodes().filter(Na)}function wa(i){return i.kind===R.TABLE}function Jr(i){return wa(i)&&i instanceof ce}function xa(i){return i.kind===R.COLUMNS}function Sa(i){return xa(i)&&i instanceof ce}function ka(i){return Ha(i)&&i instanceof ce}function Vt(i){return i.kind===R.COLUMN}function ki(i){return Vt(i)&&i instanceof ce}function Ha(i){return i.kind===R.INDEXES}function Nt(i){return i.kind===R.INDEX}function wt(i){return Nt(i)&&i instanceof ce}function xt(i){return i.filter(Vt)}function St(i){return i.filter(Nt)}const Ca=u.createContext(null);function Aa(){const i=u.useContext(Ca);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const _a=({href:i,className:e,children:t})=>s.jsx("a",{href:i,className:e,children:t});_a.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const kt=V.PropertyRow.takeNodeDiffIfPresent;function Ht(i){const e=Xe(ke(i),{resolveDiff:()=>V.PropertyRow.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Xr(i){const e=Xe(ke(i),{resolveDiff:()=>V.Table.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const zr=V.Table.takeNodeDiffIfPresent,Ea="ux-badge_ddlapi_primary-key",Ct="ux-badge_ddlapi_foreign-key",Ta="ux-badge_ddlapi_unique",qa="ux-badge_ddlapi_not-null",Ia="ux-badge_ddlapi_generated",La="public",At="Default",_t="As",Et="Values";function Ma(i){return i?!!(Fe(i.defaultValue)||Fe(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Ra="detailed";function Q(i){return i===Ra}function Pe(i){return i!=null}let Tt=class{resolveNodeVisibility(e,t){const n=e.value(),a=this.resolveDescriptionRowVisible(n,t),r=this.resolveEnumValuesRowVisible(n,t),o=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:a,showEnumValuesRow:r,showDefaultRow:o,showGeneratedRow:l,showAnyAdditionalInfoRow:r||o||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:a,showEnumValuesRow:r,showDefaultRow:o,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!a,isDescriptionListLastRow:e&&n&&!a,isEnumAdditionalInfoListLastRow:e&&r&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return Q(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return Q(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return Q(t)&&Pe(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return Q(t)&&Pe(e==null?void 0:e.generatedExpression)}};const Hi=new Tt;function Fa(i,e){return Hi.resolveNodeVisibility(i,e)}function Pa(i,e){return Hi.resolveListLastRowFlags(i,e)}function Xi(i,e){return Hi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const qt=u.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:a}=i;return e?s.jsx("div",{className:n,children:s.jsx("pre",{className:a||void 0,style:{fontFamily:"Inter"},children:`${t}`})}):null});qt.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var Oe=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(Oe||{});function Oa(i={}){const{usage:e=Oe.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:a,isEmptyStringPlaceholder:r}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",e===Oe.JsonSchemaValidation?"additional-info-piece_json-schema-validation":"",U.borderShadow(n)].filter(Boolean).join(" "),valueClassName:["inline",U.highlighter(t),a?U.fontMuted():"",r?"additional-info-piece_empty-string-placeholder":""].filter(Boolean).join(" ")}),[n,r,a,t,e])}const ue=u.memo(i=>{const{isVisible:e,value:t,usage:n=Oe.Default,textHighlighterColor:a,borderShadowColor:r,isFontMuted:o,isEmptyStringPlaceholder:l}=i,{blockClassName:d,valueClassName:f}=Oa({usage:n,textHighlighterColor:a,borderShadowColor:r,isFontMuted:o,isEmptyStringPlaceholder:l});return s.jsx(qt,{isVisible:e,value:t,blockClassName:d,valueClassName:f})});ue.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""},isEmptyStringPlaceholder:{required:!1,tsType:{name:"boolean"},description:""}}};function ja(i){const e=ge(),t=bt();return u.useMemo(()=>t?i===L?t.beforeLevel:t.afterLevel:e,[i,e,t])}var G=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(G||{});const Ga={[G.DdlApiProperty]:xi,[G.JsonSchemaValidation]:di},Ua={[G.DdlApiProperty]:"ddlapi-property-row-body",[G.Default]:"additional-info-row-body",[G.JsonSchemaValidation]:"json-schema-property-row-body"},Ka={[G.DdlApiProperty]:"min-h-[26px]"};function Ba(i,e={}){return{xPaddingClass:e.xPaddingClass??Ga[i]??wi,bodyClass:e.bodyClass??Ua[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Ka[i]??"",stretchLevelIndicator:i===G.DdlApiProperty}}const Me=u.memo(i=>{var T;const{label:e,subheader:t,layoutSide:n,diff:a,colorizingDiff:r,hideLevelIndicatorWhenSideEmpty:o=!1,usage:l=G.Default,xPaddingClass:d,bodyClass:f,minHeightClass:g}=i,{[J]:c,[O]:p}=i,y=ja(n),h=u.useMemo(()=>Ba(l,{xPaddingClass:d,bodyClass:f,minHeightClass:g}),[l,d,f,g]),b=n===L?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after,H=(T=(n===L?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after)??b)==null?void 0:T.backgroundColor,D=u.useMemo(()=>H?[U.background(H)]:[],[H]),m=u.useMemo(()=>{const N=r==null?void 0:r.data;if(N){if(Y(N))return n!==L;if(K(N))return n===L}return(b==null?void 0:b.isContentVisible)??!0},[r,b==null?void 0:b.isContentVisible,n]),F=l===G.JsonSchemaValidation&&y===0,E=y>0&&(!o||m);return s.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":p?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",D.join(" ")].filter(Boolean).join(" "),children:[F&&s.jsx(Si,{}),E&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:y}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m&&s.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[s.jsx("div",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});Me.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fe=u.memo(i=>{var r;const e=Ge(),t=i.diffsSeverityPlacement??te.AdditionalInfoRow,n=(r=i.diffsSeverities)==null?void 0:r[t],a=u.useMemo(()=>pi(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case mi:return s.jsx(We,{diffType:n==null?void 0:n.type,diffTypeCause:a,hidden:!1,children:s.jsx($e,{left:s.jsx(Me,{...i,layoutSide:L}),right:s.jsx(Me,{...i,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Me,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});fe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:"Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when\na viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /\nExamples / Allowed values / validation-constraint rows) so each row's floating badge reflects\nonly its own diff, not the node's overall max severity."},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};const Ci=i=>{const{label:e,colorSchema:t=ei(ii),layoutMode:n,layoutSide:a,diff:r}=i,o=hn(),l=r==null?void 0:r.type,d=mn(l,o),{isDocumentLayoutMode:f,isInlineDiffsLayoutMode:g}=Dn(n),{originSide:c,changedSide:p}=vn(a);if(!(!f&&!!r))return s.jsx(Ne,{text:e,colorSchema:t});const h=r.action,b=`${ei(ii)} ${bn[h]}`,k=h===Pi.remove&&(g||c),H=h===Pi.add&&(g||p);return d?k?s.jsx(Ne,{text:s.jsx("span",{className:yn,children:e}),colorSchema:b}):H?s.jsx(Ne,{text:e,colorSchema:b}):null:k||H?s.jsx(Ne,{text:e,colorSchema:ei(ii)}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"BadgeWithDiffs",props:{label:{required:!0,tsType:{name:"string"},description:""},colorSchema:{required:!1,tsType:{name:"string"},description:""},layoutMode:{required:!0,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},diff:{required:!1,tsType:{name:"Diff"},description:""}}};function ye(i,e){return i?(e===L?i.styles.before:i.styles.after).textHighlighterColor:void 0}function It(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===La?e:`${i.schemaName}.${e}`}function Wa(i){return i.join(", ")}const gi=u.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:a,navigationLinkComponent:r}=Aa(),o=u.useMemo(()=>a(e.schemaName,e.tableName,e.columnName),[a,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",U.highlighter(n)].filter(Boolean).join(" "),[n]),d=s.jsx(r,{href:o,className:l,children:It(e)});return t?d:s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Ne,{text:"FK",colorSchema:Ct,inline:!0}),d]})});gi.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Ya(){return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Lt(i,e){return!!i||!!e}function Ai(i,e){return i?e===L?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function $a(i,e,t){return Lt(i,e)&&Ai(e,t)}function Te(i){const{columnId:e,label:t,colorSchema:n,flagValue:a,flagDiff:r,layoutMode:o,layoutSide:l}=i;if(!Lt(a,r))return null;if(!Ai(r,l))return Ya();const d=V.Column.isFlagBadgeHighlighted(r)?r==null?void 0:r.data:void 0;return s.jsx(Ci,{label:t,colorSchema:n,layoutMode:o,layoutSide:l,diff:d},Xa(e,t))}function Ja(i){const{columnId:e,target:t,targetDiff:n,layoutMode:a,layoutSide:r}=i,o=za(e,t),l=ye(n,r);if(n&&!Ai(n,r))return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!n)return s.jsx(gi,{target:t},o);const d=n.data;return s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Ci,{label:"FK",colorSchema:Ct,layoutMode:a,layoutSide:r,diff:d}),s.jsx(gi,{target:t,hideBadge:!0,textHighlighterColor:l})]},o)}const He=u.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:a,layoutSide:r}=i,o=Ge(),l=u.useMemo(()=>n??{},[n]),d=u.useMemo(()=>a??{},[a]),f=u.useMemo(()=>Te({columnId:e,label:"PK",colorSchema:Ea,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:o,layoutSide:r}),[e,l.isPrimaryKey,o,r,t.isPrimaryKey]),g=u.useMemo(()=>$a(t.isPrimaryKey,l.isPrimaryKey,r),[l.isPrimaryKey,r,t.isPrimaryKey]),c=u.useMemo(()=>Te({columnId:e,label:"unique",colorSchema:Ta,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:o,layoutSide:r}),[e,l.isUnique,o,r,t.isUnique]),p=u.useMemo(()=>g?null:Te({columnId:e,label:"not null",colorSchema:qa,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:o,layoutSide:r}),[e,l.isNotNull,g,o,r,t.isNotNull]),y=u.useMemo(()=>Te({columnId:e,label:"generated",colorSchema:Ia,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:o,layoutSide:r}),[e,l.isGenerated,o,r,t.isGenerated]),h=u.useMemo(()=>{const k=t.foreignKeyTargets??[];return k.length===0?[]:k.map(H=>Ja({columnId:e,target:H,targetDiff:d[Zn(H)],layoutMode:o,layoutSide:r}))},[e,o,r,d,t.foreignKeyTargets]),b=u.useMemo(()=>[f,c,p,y,...h].filter(Boolean),[h,y,p,f,c]);return b.length===0?null:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:b})});function Xa(i,e){return`${i}-${e}`}function za(i,e){return`${i}-FK-${It(e)}`}He.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=u.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?s.jsx("span",{className:n,children:`${t}`}):null});_i.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var re=(i=>(i.Text="text",i.Block="block",i))(re||{});function Mt(i){const{appearance:e}=i;return u.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const Ce=u.memo(i=>{const{isVisible:e,value:t,appearance:n=re.Text}=i,a=Mt({appearance:n});return s.jsx(_i,{isVisible:e,value:t,className:a})});Ce.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const Ei=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,[J]:a}=i,r=be(),o=e.value(),l=u.useMemo(()=>Fa(e,r),[e,r]),d=u.useMemo(()=>Pa(n,l),[n,l]),f=u.useCallback(y=>o?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Ce,{isVisible:!0,value:o.columnType.label,appearance:re.Text}),s.jsx(He,{columnId:e.id,layoutSide:y,value:o})]}):s.jsx(s.Fragment,{}),[e.id,o]),g=u.useCallback(y=>{const h=o==null?void 0:o.defaultValue;return Fe(h)?s.jsx(ue,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),c=u.useCallback(y=>{const h=o==null?void 0:o.generatedExpression;return Fe(h)?s.jsx(ue,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),p=u.useCallback(y=>{var h;return(h=o==null?void 0:o.enumValues)!=null&&h.length?s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((b,k)=>s.jsx(ue,{isVisible:!0,value:b},`${b}-${k}`))}):s.jsx(s.Fragment,{})},[o]);return o?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":a,[O]:d.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:f,usage:I.DdlApiProperty}),l.showDescription&&s.jsx(Se,{"data-precededby":j.DDL_COLUMN_ROW,[O]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body2,textFontWeight:"normal",textColor:Je,usage:ae.DdlApiProperty}),l.showEnumValuesRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":t,[O]:d.isEnumAdditionalInfoListLastRow||void 0,label:Et,subheader:p}),l.showDefaultRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Xi(l,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:d.isDefaultAdditionalInfoListLastRow||void 0,label:At,subheader:g}),l.showGeneratedRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Xi(l,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:_t,subheader:c})]}):null};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function zi(i,e){return i?(e===L?i.styles.before:i.styles.after).borderShadowColor:void 0}function Qa(i,e){return i?(e===L?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Za(i){if(ki(i))return V.ForeignKey.takeTargetDiffs(i)}function er(i){if(ki(i))return V.Column.takeFlagDiffs(i)}function ir(i){if(wt(i))return V.Index.takeFlagDiffs(i)}const Qi=new Tt;class tr{resolveNodeVisibility(e,t){const n=e.value(),a=this.isWholeNodeAddOrRemove(e),r=this.resolveDescriptionRowVisible(n,V.Column.takeDescriptionDiff(e),t),o=this.resolveEnumValuesRowVisible(n,V.ColumnEnumValues.takeDiffs(e),t),l=this.resolveDefaultRowVisible(n,V.ColumnDefaultValue.takeDiff(e),V.ColumnDefaultValue.takeRowColorizingDiff(e),a,t),d=this.resolveGeneratedRowVisible(n,V.Column.takeGeneratedExpressionDiff(e),t);return{showDescription:r,showEnumValuesRow:o,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:o||l||d}}resolveListLastRowFlags(e,t){return Qi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Qi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var r;const n=(r=e.value())==null?void 0:r.generatedExpression,a=V.Column.takeGeneratedExpressionDiff(e);return we(n,a,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[ee];return!!t&&(Y(t.data)||K(t.data))}resolveDescriptionRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,a,r){const o=Pe(e==null?void 0:e.defaultValue)||!!t||!!n;return Q(r)&&o}resolveGeneratedRowVisible(e,t,n){return Q(n)&&(Pe(e==null?void 0:e.generatedExpression)||!!t)}}const ze=new tr;function nr(i,e){return ze.resolveNodeVisibility(i,e)}function ar(i,e){return ze.resolveListLastRowFlags(i,e)}function Zi(i,e){return ze.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function rr(i,e){return ze.resolveGeneratedExpressionSideDisplay(i,e)}function or(i,e){return i?(e===L?i.styles.before:i.styles.after).backgroundColor:void 0}function sr(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,a=Mt({appearance:e});return u.useMemo(()=>[a,U.highlighter(t),U.background(n)].filter(Boolean).join(" "),[e,n,a,t])}const Ti=u.memo(i=>{const{isVisible:e,value:t,appearance:n=re.Text,textHighlighterColor:a,backgroundColor:r}=i,o=sr({appearance:n,textHighlighterColor:a,backgroundColor:r});return s.jsx(_i,{isVisible:e,value:t,className:o})});Ti.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function lr(i){return i.text===", "||i.text===","}function ci(i,e,t,n){return i.diff?s.jsx(Ti,{isVisible:!0,value:i.text,appearance:re.Text,textHighlighterColor:ye(i.diff,t),backgroundColor:n?or(i.diff,t):void 0},`${i.text}-${e}`):s.jsx(Ce,{isVisible:!0,value:i.text,appearance:re.Text},`${i.text}-${e}`)}function dr(i,e){const t=[];let n=!1;return i.forEach((a,r)=>{if(lr(a)){n=!0;return}n&&(t.push(s.jsx("span",{className:"mr-1",children:","},`comma-${r}`)),n=!1),t.push(ci(a,r,e,!1))}),t}const je=u.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===$.NO_DIFFS?ci({text:e.text},0,t,!1):e.kind===$.WHOLE_DIFFS?ci({text:e.text,diff:e.diff},0,t,!0):s.jsx("span",{className:"inline-flex items-center",children:dr(e.segments,t)})});je.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function ur(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function fr(i,e,t){return i.diff?s.jsx(Ti,{isVisible:!0,value:i.text,appearance:re.Text,textHighlighterColor:ye(i.diff,t)},`${i.text}-${e}`):s.jsx(Ce,{isVisible:!0,value:i.text,appearance:re.Text},`${i.text}-${e}`)}const Rt=u.memo(i=>{const{node:e,layoutSide:t}=i,n=V.ColumnTypeLabel.resolveSideDisplay(e,t);if(n.kind===$.NO_DIFFS||n.kind===$.WHOLE_DIFFS)return s.jsx(je,{layoutSide:t,display:n});const{typeNameSegments:a,parameterSegments:r}=ur(n.segments);return s.jsxs("span",{className:"inline-flex items-center gap-1",children:[a.map((o,l)=>fr(o,l,t)),r.length>0&&s.jsx(je,{layoutSide:t,display:{kind:$.PARTIAL_DIFFS,segments:r}})]})});Rt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ft=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:a=!1,[J]:r}=i,o=be(),l=e.value(),d=u.useMemo(()=>kt(e),[e]),f=u.useMemo(()=>Ht(e),[e]),g=u.useMemo(()=>er(e),[e]),c=u.useMemo(()=>Za(e),[e]),p=u.useMemo(()=>V.Column.takeDescriptionDiff(e),[e]),y=u.useMemo(()=>V.Column.takeGeneratedExpressionDiff(e),[e]),h=u.useMemo(()=>V.ColumnEnumValues.takeDiffs(e),[e]),b=u.useMemo(()=>V.ColumnEnumValues.takeRowColorizingDiff(e),[e]),k=u.useMemo(()=>V.ColumnDefaultValue.takeDiff(e),[e]),H=u.useMemo(()=>V.ColumnDefaultValue.takeRowColorizingDiff(e),[e]),D=u.useMemo(()=>nr(e,o),[e,o]),m=u.useMemo(()=>ar(n,D),[n,D]),F=u.useCallback(w=>l?V.PropertyRow.isSubheaderVisible(d,w)?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Rt,{node:e,layoutSide:w}),s.jsx(He,{columnId:e.id,layoutSide:w,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{}),[g,c,e,d,l]),E=u.useCallback(w=>{const x=V.ColumnDefaultValue.resolveSideDisplay(e,w);return x===void 0?s.jsx(s.Fragment,{}):s.jsx(ue,{isVisible:!0,value:x,textHighlighterColor:ye(k,w),borderShadowColor:zi(k,w)})},[k,e]),T=u.useCallback(w=>{const x=rr(e,w);return x===void 0?s.jsx(s.Fragment,{}):s.jsx(ue,{isVisible:!0,value:x,textHighlighterColor:ye(y,w)})},[y,e]),N=u.useCallback(w=>{const x=V.ColumnEnumValues.resolveSideItems(e,w);return x.length===0?s.jsx(s.Fragment,{}):s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:x.map((A,S)=>s.jsx(ue,{isVisible:!0,value:A.literal,textHighlighterColor:ye(A.diff,w),borderShadowColor:zi(A.diff,w),isFontMuted:Qa(A.diff,w)},`${A.literal}-${S}`))})},[e]);return l?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":r,[O]:m.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:F,usage:I.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:a,...f}),D.showDescription&&s.jsx(Se,{"data-precededby":j.DDL_COLUMN_ROW,[O]:m.isDescriptionListLastRow||void 0,value:l.description??"",variant:C.body2,textFontWeight:"normal",textColor:Je,usage:ae.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:a}),D.showEnumValuesRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":t,[O]:m.isEnumAdditionalInfoListLastRow||void 0,label:Et,subheader:N,colorizingDiff:b,diffsSeverities:h||b?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:a}),D.showDefaultRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Zi(D,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:m.isDefaultAdditionalInfoListLastRow||void 0,label:At,subheader:E,colorizingDiff:H,diffsSeverities:k||H?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:a}),D.showGeneratedRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Zi(D,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:m.isGeneratedAdditionalInfoListLastRow||void 0,label:_t,subheader:T,diff:y,colorizingDiff:e.diffs[ee],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:a})]}):null};Ft.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Pt(i,e){let t=!1;return i.map((n,a)=>{const r=a===i.length-1,o=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,l=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,d={columnNode:n,titlePrecededBy:o,additionalInfoPrecededBy:l,isLastInList:r};return t=e&&Ma(n.value()),d})}const gr=i=>{const{node:e,[J]:t}=i;return Sa(e)?s.jsx(pr,{"data-precededby":t,node:e}):s.jsx(cr,{"data-precededby":t,node:e})},cr=i=>{const{node:e,[J]:t}=i,n=ge(),a=be(),r=e.value(),o=xt(e.childrenNodes()),l=a===tt,d=u.useMemo(()=>Pt(o,l),[o,l]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection}),s.jsx(Ue.Provider,{value:n+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>s.jsx(Ei,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},pr=i=>{const{node:e,[J]:t}=i,n=ge(),a=be(),r=e.value(),o=xt(e.childrenNodes()),l=a===tt,d=u.useMemo(()=>Xe(ke(e)),[e]),f=u.useMemo(()=>Pt(o,l),[o,l]),g=u.useMemo(()=>V.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection,...d}),s.jsx(Ue.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:y,isLastInList:h})=>ki(c)?s.jsx(Ft,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):s.jsx(Ei,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,node:c},c.id))})]})};gr.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Ot=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return Q(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const jt=new Ot;function hr(i,e){return jt.resolveNodeVisibility(i,e)}function mr(i,e){return jt.resolveListLastRowFlags(i,e)}const qi=i=>{const{node:e,isLastInList:t=!1,[J]:n}=i,a=be(),r=e.value(),o=u.useMemo(()=>hr(e,a),[e,a]),l=u.useMemo(()=>mr(t,o),[t,o]),d=(r==null?void 0:r.indexName)??"",f=u.useCallback(c=>{if(!r)return s.jsx(s.Fragment,{});const p=Wa(r.partNames);return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.partNames.length>0&&s.jsx(Ce,{isVisible:!0,value:`(${p})`,appearance:re.Text}),s.jsx(He,{columnId:e.id,layoutSide:c,value:r})]})},[e.id,r]),g=o.showDescription;return r?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":n,[O]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:C.body2,subheader:o.showSubheader?f:void 0,usage:I.DdlApiProperty}),g&&s.jsx(Se,{"data-precededby":j.DDL_INDEX_ROW,[O]:l.isDescriptionListLastRow||void 0,value:r.description??"",variant:C.body1,textFontWeight:"normal",textColor:Je,usage:ae.DdlApiProperty})]}):null};qi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const yr=new Ot;class br{resolveNodeVisibility(e,t){var a;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,V.Index.takeDescriptionDiff(e),t),showSubheader:this.resolveSubheaderVisible(n,(a=V.Index.takeFlagDiffs(e))==null?void 0:a.isUnique)}}resolveListLastRowFlags(e,t){return yr.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const Gt=new br;function Dr(i,e){return Gt.resolveNodeVisibility(i,e)}function vr(i,e){return Gt.resolveListLastRowFlags(i,e)}const Ut=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[J]:a}=i,r=be(),o=e.value(),l=u.useMemo(()=>Dr(e,r),[e,r]),d=u.useMemo(()=>vr(t,l),[t,l]),f=u.useMemo(()=>kt(e),[e]),g=u.useMemo(()=>Ht(e),[e]),c=u.useMemo(()=>ir(e),[e]),p=u.useMemo(()=>V.Index.takeDescriptionDiff(e),[e]),y=(o==null?void 0:o.indexName)??"",h=u.useCallback(H=>{const D=V.IndexPartNames.resolveSideDisplay(e,H);return s.jsx(je,{layoutSide:H,display:D})},[e]),b=u.useCallback(H=>{if(!o)return s.jsx(s.Fragment,{});if(!V.PropertyRow.isSubheaderVisible(f,H))return s.jsx(s.Fragment,{});const D=o.partNames.length>0;return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[D&&h(H),s.jsx(He,{columnId:e.id,layoutSide:H,value:o,flagDiffs:c})]})},[c,e.id,f,h,o]),k=l.showDescription;return o?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":a,[O]:d.isTitleListLastRow||void 0,value:y,expandable:!1,expanded:!0,variant:C.body2,subheader:l.showSubheader?b:void 0,usage:I.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),k&&s.jsx(Se,{"data-precededby":j.DDL_INDEX_ROW,[O]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body1,textFontWeight:"normal",textColor:Je,usage:ae.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Ut.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Kt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:j.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const Vr=i=>{const{node:e,[J]:t}=i;return ka(e)?s.jsx(wr,{"data-precededby":t,node:e}):s.jsx(Nr,{"data-precededby":t,node:e})},Nr=i=>{const{node:e,[J]:t}=i,n=ge(),a=e.value(),r=St(e.childrenNodes()),o=u.useMemo(()=>Kt(r),[r]);return r.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection}),s.jsx(Ue.Provider,{value:n+1,children:o.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>s.jsx(qi,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},wr=i=>{const{node:e,[J]:t}=i,n=ge(),a=e.value(),r=St(e.childrenNodes()),o=u.useMemo(()=>Xe(ke(e)),[e]),l=u.useMemo(()=>Kt(r),[r]),d=u.useMemo(()=>V.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return r.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection,...o}),s.jsx(Ue.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>wt(f)?s.jsx(Ut,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):s.jsx(qi,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};Vr.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Cn as $,J as A,Or as B,gr as C,La as D,De as E,Rr as F,Fr as G,Fn as H,Vr as I,jr as J,Pr as K,rt as L,ye as M,We as N,Ye as O,j as P,$e as Q,zr as R,ce as S,oe as T,Xr as U,V,Jr as W,wi as X,Vn as Y,ti as Z,Nn as _,Ha as a,An as a0,xn as a1,Sn as a2,wn as a3,se as a4,at as a5,_r as a6,nt as a7,Er as a8,Ar as a9,Si as aA,ue as aB,Oe as aC,zi as aD,Qa as aE,Yr as aF,fe as aG,G as aH,Ci as aI,or as aJ,ta as aK,ia as aL,ea as aM,Cr as aa,qr as ab,Ir as ac,M as ad,Br as ae,Kr as af,Wr as ag,yt as ah,la as ai,ya as aj,bt as ak,ke as al,Xe as am,I as an,Lr as ao,sa as ap,Q as aq,di as ar,ja as as,we as at,$ as au,fa as av,ua as aw,ae as ax,ga as ay,xi as az,C as b,Se as c,Je as d,kn as e,Gr as f,$r as g,wa as h,xa as i,Ca as j,_a as k,_ as l,Jn as m,ni as n,Zn as o,Wn as p,ft as q,Mr as r,st as s,Tr as t,Di as u,Be as v,R as w,lt as x,dt as y,Rn as z};
