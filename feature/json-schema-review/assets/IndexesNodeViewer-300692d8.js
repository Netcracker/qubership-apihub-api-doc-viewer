var Bt=Object.defineProperty;var Wt=(i,e,t)=>e in i?Bt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var v=(i,e,t)=>(Wt(i,typeof e!="symbol"?e+"":e,t),t);import{r as Y,t as K,v as ri,w as Z,Y as Yt,Z as Ve,_ as Re,N as ee,$ as et,O as q,a0 as Jt,a1 as $t,J as Ae,P as Xt,K as _e,a2 as zt,T as L,H as me,a3 as ai,a4 as qe,a5 as Qt,a6 as Zt,a7 as en,a8 as tn,a9 as nn,aa as rn,ab as an,ac as on,ad as sn,ae as ln,af as dn,ag as un,ah as fn,ai as gn,Q as te,aj as cn,ak as it,V as ne,U,al as ge,am as xe,W as Ge,X as pi,k as hi,S as mi,an as oi,ao as si,x as pn,ap as Fe,aq as hn,ar as mn,as as Ne,at as ei,au as ii,av as yn,aw as bn,M as Pi,ax as Dn,ay as vn,u as be,f as Ue,h as tt}from"./UxBadge-96977876.js";import{j as s}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const se={SIMPLE:"simple",COMPLEX:"complex"};class Ke{constructor(e="#",t="",n,r,a){v(this,"type");v(this,"parent");v(this,"container");v(this,"newDataLevel");v(this,"_value");v(this,"_meta");v(this,"_childrenNodes",[]);v(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new Ke(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class yi extends Ke{constructor(t="#",n="",r,a,o){super(t,n,r,a,o);v(this,"type");this.id=t,this.key=n,this.kind=r,this.type=o.type}createCycledClone(t,n,r){const a=new yi(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class Vn{constructor(){v(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const o=new Ke(e,t,n,r,a);return this.nodes.set(e,o),o}createComplexNode(e,t,n,r,a){const o=new yi(e,t,n,r,a);return this.nodes.set(e,o),o}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const Nn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},wn=Object.values(Nn);new Set(wn);class Be{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!_(e))return!1;for(const t of Object.values(e))if(!Be.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return _(t)&&(Y(t)||K(t)||ri(t)||Z(t))}}function _(i){return nt(i)&&!Array.isArray(i)}function nt(i){return typeof i=="object"&&i!==null}function xn(i){return _(i)&&Object.keys(i).every(e=>typeof e=="string")}function ti(i){return Array.isArray(i)}function Ca(i){return typeof i=="number"}function Aa(i){return typeof i=="string"}function _a(i,e,t){let n=i,r=!1;for(const a of e){if(!_(n)&&!ti(n))return;if(r){let l;nt(n)&&(l=n[a]),!l&&ti(n)&&t&&(l=n.find(d=>_(d)&&d[t]===a)),n=l,r=!1;continue}n=n[a],ti(n)&&(r=!0)}return n}function Ea(i,e){return Object.keys(i).find(t=>i[t]===e)}function Ta(i){if(Be.isDiffsRecord(i))return i}class Sn{constructor(){v(this,"tree",null)}pick(e,t){if(!_(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?n[a]=[...o]:_(o)?n[a]={...o}:n[a]=o}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class rt{constructor(){v(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const Ee=()=>{},kn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:Ee,info:Ee,warn:Ee,error:Ee};class qa{constructor(){v(this,"fragments",new Map);v(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Oi(i,e){return"#"+Yt([...i,...e])}function Ia(i,e){const t=new rt,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function La(i){return Array.isArray(i)?i.length>0:_(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function Hn(i){return i==null||!_(i)&&!Ve(i)}function Cn(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:l,isSimpleNode:d,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=Hn,shouldSkipNodeCreation:p,shouldStopAfterNodeCreation:y,lazy:h}=i;return[({value:D,state:m,key:F,path:E})=>{if(typeof F=="symbol")return;if(!_(D)&&!Ve(D))return{value:D};const{ancestors:T,parent:N,container:w,pathPrefix:x=[]}=m,A=T.get(D);if(!A||!d(A)&&!f(A))return{value:D};if(!N||!d(N))return{value:D};const S=Oi(x,E),X=g(F,D),z=t.createCycledClone(A,S,X,N);return w?w.addNestedNode(z):N&&N.addChildNode(z),{done:!0}},({key:D,value:m,path:F,state:E,rules:T})=>!T||!Array.isArray(T.transformers)?void 0:{value:T.transformers.reduce((x,A)=>A(D,x,e,F,E),m)},({key:D,value:m,path:F,rules:E,state:T})=>{if(!E)return{done:!0};if(typeof D=="symbol")return{done:!0};if(c(m))return{done:!0};if(p!=null&&p(m,E)||!E.kind||!n.includes(E.kind))return;const{parent:N,container:w,ancestors:x,pathPrefix:A=[],depth:S=0,materializeDepth:X}=T,z=Oi(A,F),pe=g(D,m),{kind:P,complex:le=!1}=E,B=a(m,N,w,P),ie=r(z,pe,P,le,B);if(!ie)return;w?w.addNestedNode(ie):N&&N.addChildNode(ie),h&&(_(m)||Ve(m))&&h.state.rememberFragment(z,m);let Ii=m;if(y!=null&&y(ie,m)){const Ze=N?N.descendantDiffs:void 0;if(!Ze||!(D in Ze))return{done:!0};const Ri=Ze[D];if(!Ri)return{done:!0};const{data:Fi}=Ri;Z(Fi)&&(Ii=Fi.beforeValue)}const Li=S+(B.newDataLevel?1:0),Mi=!!(h&&d(ie)&&X!==void 0&&Li>=X&&(_(m)||Ve(m))&&h.resolveHasOwnChildren(m,E));Mi&&h.state.defer({nodeId:z,fragment:m,path:[...A,...F],rules:E});const Qe=_(m)||Ve(m);Qe&&x.enter(m,ie);let ve;return d(ie)?ve=o(T,ie):ve=l(T,ie),ve={...ve,depth:Li,materializeDepth:T.materializeDepth,pathPrefix:T.pathPrefix},Mi?{done:!0,exitHook:Qe?()=>{x.leave(m)}:void 0}:{value:Ii,state:ve,exitHook:Qe?()=>{x.leave(m)}:void 0}}]}class An{}class ce{constructor(e="#",t="",n,r,a){v(this,"type");v(this,"parent");v(this,"container");v(this,"newDataLevel");v(this,"_value");v(this,"_meta");v(this,"_childrenNodes",[]);v(this,"_nestedNodes",[]);v(this,"_diffs",{});v(this,"_diffsSummary",new Set);v(this,"_descendantDiffs",{});v(this,"_descendantDiffsSummary",new Set);v(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=se.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new ce(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===se.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class _n extends Vn{constructor(){super()}}const R={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},at=Object.values(R),ot="<unnamed>";function En(i){return i??ot}function st(i){return i!==ot}function Tn(i,e){return e.indexName&&st(e.indexName)?e.indexName:i}function Ma(i,e,t){return t||(e!=null&&e.indexName&&st(e.indexName)?e.indexName:String(i))}function li(i=R.TABLE){return{"/columns":{"/items":{"/*":()=>li(R.COLUMN)},kind:R.COLUMNS},"/indexes":{"/items":{"/*":()=>li(R.INDEX)},kind:R.INDEXES},kind:i}}const ji={Identity:"identity",Expression:"expression"};function qn(i){return i.kind===Re.Literal&&typeof i.value=="string"}function In(i){return i.kind===Re.RawExpr&&typeof i.expr=="string"}function Ln(i){return _(i)&&typeof i.expr=="string"}function Mn(i){return _(i)&&typeof i.value=="string"}function Rn(i){if(!_(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!_(t)||!("before"in t)||!("after"in t)?!1:Be.isDiff(e)}const De="titleRow",Fn=["typeName","size","precision","scale","label"],Ra={ToEnum:"to-enum",FromEnum:"from-enum"},Fa={Lost:"lost",Gained:"gained"},lt=["isPrimaryKey","isUnique","isNotNull","isGenerated"],dt=["isUnique"],Pa=[ee,De,"tableName","schemaName","description"],Oa=[ee,De,"columnName","description","generatedExpression",...lt],ja=[ee,De,"indexName","description",...dt];function ut(i){return Rn(i[De])}function Pn(i){return _(i)&&i.kind===et.Domain&&typeof i.type=="string"}function On(i){return i.kind===q.BoolType&&typeof i.type=="string"}function jn(i){return i.kind===q.IntegerType&&typeof i.type=="string"}function Gi(i){return i.kind===q.DecimalType&&typeof i.type=="string"}function Ui(i){return i.kind===q.FloatType&&typeof i.type=="string"}function Ki(i){return i.kind===q.StringType&&typeof i.type=="string"}function Bi(i){return i.kind===q.BinaryType&&typeof i.type=="string"}function Wi(i){return i.kind===q.TimeType&&typeof i.type=="string"}function Gn(i){return i.kind===q.JSONType&&typeof i.type=="string"}function Un(i){return i.kind===q.SpatialType&&typeof i.type=="string"}function Kn(i){return i.kind===q.UUIDType&&typeof i.type=="string"}function ni(i){return i.kind===q.EnumType&&Array.isArray(i.values)}function Bn(i){return i.kind===q.UnsupportedType&&typeof i.type=="string"}function Yi(i){return typeof i.type=="string"}function bi(i){switch(i.kind){case Re.Literal:return qn(i)?i.value:i.kind;case Re.RawExpr:return In(i)?i.expr:i.kind;case Jt.NamedDefault:try{return bi($t(i))}catch{return i.kind}default:return Ln(i)?i.expr:Mn(i)?i.value:i.kind}}function ft(i){return ct(gt(bi(i)))}function Wn(i){return ct(gt(i))}function gt(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}function ct(i){return i.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}const Yn="Columns",Jn="Indexes";class $n{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=Ae(t.attrs,_e.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:Yn,items:(t.columns??[]).map(a=>this.buildColumnRowValue(e,t,a,n.schemaName))},indexes:{title:Jn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:_(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return _(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!_(e)||typeof e.tableName!="string"||!_(e.columns)||!Array.isArray(e.columns.items)||!_(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,r){var k,H,D;const a=Ae(n.attrs,_e.Comment),o=(k=n.attrs)==null?void 0:k.find(m=>m.kind===Xt.Identity),l=Ae(n.attrs,_e.GeneratedExpr),d=o!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(m=>this.buildForeignKeyTarget(e,m,n,r)).filter(m=>m!==void 0),c=g.length>0,p=this.formatColumnType(n.type),y=(H=n.type)==null?void 0:H.type,h=y&&ni(y)?y.values:void 0,b=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:b,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:d,...o?{generatedBy:ji.Identity}:{},...l&&!o?{generatedBy:ji.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!b&&((D=n.type)==null?void 0:D.null)===!1,...n.default!==void 0?{defaultValue:ft(n.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=Ae(e.attrs,_e.Comment);return{indexName:En(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const r of e.schemas)if((n=r.tables)!=null&&n.some(a=>a===t))return r.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isSingleColumnIndexForColumn(e,t){var n,r;return(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,t))})}buildForeignKeyTarget(e,t,n,r){var f,g;const a=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(a<0)return;const o=t.refTable,l=(g=t.refColumns)==null?void 0:g[a];if(!o||!l)return;const d=this.resolveForeignKeyTargetSchemaName(e,o,r);if(d)return{schemaName:d,tableName:o.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const r=this.findSchemaNameForTable(e,t);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,t.name);return a||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===t)}).map(r=>r.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Pn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return On(e)?{kind:q.BoolType,typeName:e.type,label:t}:jn(e)?{kind:q.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Gi(e)?{kind:q.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ui(e)?{kind:q.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ki(e)?{kind:q.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Bi(e)?{kind:q.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Wi(e)?{kind:q.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Gn(e)?{kind:q.JSONType,typeName:e.type,label:t}:Un(e)?{kind:q.SpatialType,typeName:e.type,label:t}:Kn(e)?{kind:q.UUIDType,typeName:e.type,label:t}:ni(e)?{kind:q.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Bn(e)?{kind:q.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Yi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:et.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Gi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ki(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Bi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ui(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Wi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ni(e)?t=e.type??e.values[0]??"enum":Yi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?bi(e.expr):""}}function Xn(i){return Cn(i)}const zn=new Set([R.TABLE,R.COLUMNS,R.COLUMN,R.INDEXES,R.INDEX]);class Di extends An{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!xn(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,Di.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return zn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case R.TABLE:return["tableName","schemaName","description"];case R.COLUMNS:case R.INDEXES:return["title"];case R.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case R.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const Qn="[DDL API]";class Ga extends Sn{constructor(t){const{source:n,tableKey:r,logger:a=kn()}=t;super();v(this,"tree");v(this,"source");v(this,"tableKey");v(this,"logger");v(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!_(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new rt},r=li(),a=Xn({source:t,tree:this.tree,supportedNodeKinds:at,createNodeFromRaw:(o,l,d,f,g)=>this.createNodeFromRaw(o,l,d,f,g),createNodeParams:(o,l,d)=>({value:_(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l)});return zt(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return Qn}createTree(){return new _n}createNodeDataBuilder(){return new Di}prepareSource(){return new $n(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,o){const{parent:l,container:d,newDataLevel:f}=o;if(a){const y=this.createNodeMeta(n,o),h={type:se.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:y,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,h)}const g=this.createNodeValue(n,r,o),c=this.createNodeMeta(n,o),p={type:se.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,p)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(o,l)=>this.pick(o,l))}resolveNodeKey(t,n){return _(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?Tn(t,n):t:t}isSimpleTreeNode(t){return t.type===se.SIMPLE}isComplexTreeNode(t){return t.type===se.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function Zn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const J={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function pt(i,e,t){const n=t===L,r=new Set,a=[],o=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&Z(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=o(d);if(!f){a.push({text:d});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(Y(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(K(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(Z(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;a.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||r.has(f)||K(f.data)&&n&&(a.push({text:d,diff:f}),r.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return a.sort((d,f)=>l(d.text)-l(f.text))}function ht(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function we(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===L;return Y(n)?r?void 0:String(n.afterValue??i??""):K(n)?r?String(n.beforeValue??i??""):void 0:Z(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function mt(i,e){return(e===L?i.styles.before:i.styles.after).isContentVisible}function er(i,e){return i?mt(i,e):!0}function ir(i,e){return i?(e===L?i.styles.before:i.styles.after).isHeaderVisible:!0}function tr(i){if(i&&(Y(i.data)||K(i.data)))return i}const Ji=["size","precision","scale"];class W{static takeFieldDiffs(e){const t=e.diffs.columnTypeFieldDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var g;const n=(g=e.value())==null?void 0:g.columnType;if(!n)return{kind:J.NO_DIFFS,text:""};const r=W.takeFieldDiffs(e);if(!r)return{kind:J.NO_DIFFS,text:n.label};const a=r.typeName??r.label,o=r.typeName?"typeName":"label";if(W.shouldUseMonolithicHighlight(r)){const c=Object.values(r).find(Boolean);return c?{kind:J.WHOLE_DIFFS,text:W.buildMonolithicSideLabel(n,r,o,t),diff:W.buildMonolithicDiffMetadata(c)}:{kind:J.NO_DIFFS,text:n.label}}const l=[],d=we(W.takeDisplayName(n),a,t);d!==void 0&&l.push({text:d,diff:a});const f=W.buildParameterSideSegments(n,r,t);return l.push(...f),l.length===0?{kind:J.NO_DIFFS,text:n.label}:{kind:J.PARTIAL_DIFFS,segments:l}}static shouldUseMonolithicHighlight(e){const t=Fn.map(r=>[r,e[r]]).filter(r=>!!r[1]);if(t.length===0)return!1;if(t.length===1){const[r]=t[0];return r==="typeName"||r==="label"}return new Set(t.map(([,r])=>r.data.action)).size===1}static buildMonolithicSideLabel(e,t,n,r){const a=we(W.takeDisplayName(e),t[n],r)??W.takeDisplayName(e),o=[];for(const l of Ji){const d=we(W.takeParameterValue(e,l),t[l],r);d!==void 0&&o.push(d)}return o.length===0?a:`${a} (${o.join(", ")})`}static buildParameterSideSegments(e,t,n){const r=W.collectVisibleParameterKeys(e,t,n);if(r.length===0)return[];const a=r.flatMap(o=>{const l=we(W.takeParameterValue(e,o),t[o],n);return l===void 0?[]:[{text:l,diff:t[o]}]});return[...ht(a,"spaced")]}static collectVisibleParameterKeys(e,t,n){return Ji.filter(r=>{const a=t[r];return a?mt(a,n):W.takeParameterValue(e,r)!==void 0})}static takeDisplayName(e){return"typeName"in e&&typeof e.typeName=="string"?e.typeName:"name"in e&&typeof e.name=="string"?e.name:e.label}static takeParameterValue(e,t){if(!(t in e))return;const n=Reflect.get(e,t);return typeof n=="number"?n:void 0}static buildMonolithicDiffMetadata(e){const{data:t}=e;return Z(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Yellow}}}:Y(t)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Green}}}:K(t)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:me.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}}class vi{static takeDiffs(e){const t=e.diffs.partNameDiffs;if(!(!t||Object.keys(t).length===0))return t}static resolveSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.partNames)??[],r=vi.takeDiffs(e),a=r?pt(n,r,t):n.map(d=>({text:d})),o=ht(a,"tight");return o.length===0?{kind:J.NO_DIFFS,text:""}:{kind:J.PARTIAL_DIFFS,segments:o}}}class Vi{static takeTitleRowDiff(e){if(ut(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){const t=e.diffs[ee];if(t&&(Y(t.data)||K(t.data)))return t}static takeSchemaNameDiff(e){return e.diffs.schemaName}static takeDescriptionDiff(e){return e.diffs.description}static resolveSchemaNameSideDisplay(e,t){var l;const n=((l=e.value())==null?void 0:l.schemaName)??"",r=Vi.takeSchemaNameDiff(e);if(!r)return n;const a=r.data,o=t===L;return Y(a)?o?"":n:K(a)?o?n:"":Z(a)?o?typeof a.beforeValue=="string"?a.beforeValue:n:typeof a.afterValue=="string"?a.afterValue:n:n}}class nr{static takeTitleRowDiff(e){if(ut(e.diffs))return e.diffs[De]}static takeNodeDiffIfPresent(e){return tr(e.diffs[ee])}static isSubheaderVisible(e,t){return ir(e,t)}static isContentVisible(e,t){return er(e,t)}static isListSectionUniformWholeNodeChange(e){const t=e.diffs[ee];return t?Y(t.data)||K(t.data):!1}}class rr{static takeFlagDiffs(e){const t={};let n=!1;for(const r of lt){const a=e.diffs[r];a&&(t[r]=a,n=!0)}return n?t:void 0}static isFlagBadgeHighlighted(e){return e?e.highlightingMode.get(ai.Default)!==qe.Invisible:!1}static takeGeneratedExpressionDiff(e){return e.diffs.generatedExpression}static takeDescriptionDiff(e){return e.diffs.description}}let ar=class{static takeTargetDiffs(e){const n=e.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}};class de{static takeDiff(e){return e.diffs.defaultValue}static takeRowColorizingDiff(e){return e.diffs.defaultValueRowColorizingDiff}static resolveSideDisplay(e,t){var l;const n=(l=e.value())==null?void 0:l.defaultValue,r=de.takeDiff(e),a=t===L;if(!r){const d=e.diffs[ee];if(d){const f=d.data;if(Y(f))return a?void 0:n;if(K(f))return a?n:void 0}return n}const o=r.data;return Y(o)?a?void 0:n??de.formatDiffSide(o.afterValue):K(o)?a?de.formatDiffSide(o.beforeValue)??n:void 0:Z(o)?a?de.formatDiffSide(o.beforeValue)??n:de.formatDiffSide(o.afterValue)??n:n}static formatDiffSide(e){if(typeof e=="string")return Wn(e);if(_(e)&&"kind"in e)return ft(e)}}class Ni{static takeDiffs(e){const n=e.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}static takeRowColorizingDiff(e){return e.diffs.enumValuesRowColorizingDiff}static resolveSideItems(e,t){var n;return pt(((n=e.value())==null?void 0:n.enumValues)??[],Ni.takeDiffs(e),t).map(({text:r,diff:a})=>({literal:r,diff:a}))}}class or{static takeFlagDiffs(e){const t={};let n=!1;for(const r of dt){const a=e.diffs[r];a&&(t[r]=a,n=!0)}return n?t:void 0}static takeDescriptionDiff(e){return e.diffs.description}}class V{}v(V,"Table",Vi),v(V,"PropertyRow",nr),v(V,"Column",rr),v(V,"ForeignKey",ar),v(V,"ColumnDefaultValue",de),v(V,"ColumnEnumValues",Ni),v(V,"Index",or),v(V,"IndexPartNames",vi),v(V,"ColumnTypeLabel",W);const sr={ENUM:Qt,MIN_LENGTH:Zt,MAX_LENGTH:en,PATTERN:tn,MINIMUM:nn,MAXIMUM:rn,EXCLUSIVE_MINIMUM:an,EXCLUSIVE_MAXIMUM:on,MULTIPLE_OF:sn,MIN_PROPERTIES:ln,MAX_PROPERTIES:dn,UNIQUE_ITEMS:un,MIN_ITEMS:fn,MAX_ITEMS:gn},M={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:sr.UNIQUE_ITEMS},Ka={[M.VALUE_LENGTH]:["minLength","maxLength"],[M.VALUE_PATTERN]:["pattern"],[M.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[M.VALUE_MULTIPLE_OF]:["multipleOf"],[M.PROPERTIES_COUNT]:["minProperties","maxProperties"],[M.ITEMS_COUNT]:["minItems","maxItems"],[M.UNIQUE_ITEMS]:["uniqueItems"]},Ba={[M.VALUE_LENGTH]:te.ValueLengthRow,[M.VALUE_PATTERN]:te.ValuePatternRow,[M.VALUE_RANGE]:te.ValueRangeRow,[M.VALUE_MULTIPLE_OF]:te.ValueMultipleOfRow,[M.PROPERTIES_COUNT]:te.PropertiesCountRow,[M.ITEMS_COUNT]:te.ItemsCountRow,[M.UNIQUE_ITEMS]:te.UniqueItemsRow},Wa={[M.VALUE_LENGTH]:{minLength:0,maxLength:1},[M.VALUE_PATTERN]:{pattern:0},[M.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[M.VALUE_MULTIPLE_OF]:{multipleOf:0},[M.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[M.ITEMS_COUNT]:{minItems:0,maxItems:1},[M.UNIQUE_ITEMS]:{uniqueItems:0}},lr=u.createContext(!1),We=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:s.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[s.jsx(cn,{variant:t,message:n}),e]})};We.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ye=u.memo(i=>{const{content:e}=i;return s.jsx("div",{className:"flex flex-row w-full",children:e})});Ye.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Je=u.memo(i=>{const{left:e,right:t}=i;return s.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[s.jsx("div",{className:"flex w-1/2",children:e}),s.jsx("div",{className:"flex w-1/2",children:t})]})});Je.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const wi="px-4",di="",dr="px-4",xi="";var I=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(I||{}),C=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(C||{});const ui=5,fi=300;function ur(i){return i?i.length>fi||it.trim(i.split(`
`)).length>ui:!1}function fr(i){if(!i)return;if(i.length>fi)return i.slice(0,fi)+"...";const e=it.trim(i.split(`
`));return e.length>ui?e.slice(0,ui).join(`
`)+"...":i}function gr(i){switch(i){case C.h1:return"text-value-expander--h1";case C.h2:return"text-value-expander--h2";case C.h3:return"text-value-expander--h3";case C.h4:return"text-value-expander--h4";case C.h5:return"text-value-expander--h5";case C.h6:return"text-value-expander--h6";case C.body1:return"text-value-expander--body1";case C.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const cr=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=u.useCallback(()=>{n==null||n(o=>!o)},[n]);return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"mt-1",children:s.jsx("a",{className:`text-value-expander ${gr(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},yt=u.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:o,highlightingMode:l=qe.Default}=i,d=l===qe.Default,f=l===qe.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:y,label:h}=i,[b,k]=u.useState(!1),H=u.useCallback((N,w,x)=>{if(x)return null;const A=f?"":w.join(" "),S=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),X=`${S} ${A}`.trim(),z={onClick:r,...y!=null&&y.trim()?{style:{color:y}}:{}};N=b?N:fr(N);const pe=(P,le)=>{const B={...z,className:le};switch(t){case C.h1:return s.jsx("h1",{...B,children:P});case C.h2:return s.jsx("h2",{...B,children:P});case C.h3:return s.jsx("h3",{...B,children:P});case C.h4:return s.jsx("h4",{...B,children:P});case C.h5:return s.jsx("h5",{...B,children:P});case C.h6:return s.jsx("h6",{...B,children:P});case C.body1:return s.jsx("span",{...B,className:`${le} text-value-body1`.trim(),children:P});case C.body2:return s.jsx("span",{...B,className:`${le} text-value-body2`.trim(),children:P})}};return h?pe(s.jsxs(s.Fragment,{children:[s.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),s.jsx("span",{className:A,children:N})]}),S):pe(N,X)},[b,f,h,p,c,r,y,g,t]),D=u.useCallback(N=>{const w=[];let x=N,A=!1;if(a){const{data:S,styles:X}=a;switch(n){case L:w.push(U.highlighter(X.before.textHighlighterColor)),d&&(K(S)&&(x=he(S.beforeValue)?S.beforeValue:x),Z(S)&&(o===I.JsoProperty&&!f&&w.push(U.highlighter(me.Yellow)),x=he(S.beforeValue)?S.beforeValue:x),ri(S)&&(x=he(S.beforeKey)?S.beforeKey:x)),Y(S)&&(A=!0);break;case ne:w.push(U.highlighter(X.after.textHighlighterColor)),d&&(Y(S)&&(x=he(S.afterValue)?S.afterValue:x),Z(S)&&(o===I.JsoProperty&&!f&&w.push(U.highlighter(me.Yellow)),x=he(S.afterValue)?S.afterValue:x),ri(S)&&(x=he(S.afterKey)?S.afterKey:x)),K(S)&&(A=!0);break}}return[x,w,A]},[a,d,f,n,o]),[m,F,E]=D(e);return u.useMemo(()=>s.jsxs("div",{className:"flex flex-col items-start gap-1",children:[H(m,F,E),!E&&s.jsx(cr,{isExpandable:ur(m),expanded:b,setExpanded:k,variant:t})]}),[H,m,F,E,b,k,t])});function he(i){return typeof i=="string"}const $="data-precededby",O="data-ddl-list-last-row";var j=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSON_SCHEMA_PROPERTY="json-schema-property",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(j||{}),re=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(re||{});const pr={[re.DdlApiProperty]:xi},hr={[re.DdlApiProperty]:["min-h-[26px]"]};function mr(i){const e=pr[i]??wi,t=hr[i]??[];return[e,...t].join(" ")}const Ie=u.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=re.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[$]:c}=i,{diff:p,descendantDiffs:y,diffsSeverities:h}=i,b=ge(),k=r===re.DdlApiProperty,H=u.useMemo(()=>!a||V.PropertyRow.isContentVisible(p,n),[p,a,n]),D=k&&b>0&&H,m=u.useMemo(()=>{if(!p)return[];const{data:T,styles:N}=p;if(!T)return[];const w=[];return n===L&&w.push(U.background(N.before.backgroundColor)),n===ne&&w.push(U.background(N.after.backgroundColor)),w},[p,n]),F=u.useMemo(()=>mr(r),[r]),E=s.jsx(yt,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return s.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${k?"items-stretch":""} ${F} gap-2 ${m.join(" ")}`,children:[D&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:b}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),k?s.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:E}):E]})});Ie.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Se=u.memo(i=>{const e=Ge(),{diffsSeverities:t,diffsSeverityPlacement:n=te.DescriptionRow}=i,r=u.useMemo(()=>t==null?void 0:t[n],[t,n]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),o=u.useMemo(()=>pi(r==null?void 0:r.causedAt),[r]);switch(e){case mi:return s.jsx(We,{diffType:a,diffTypeCause:o,hidden:!1,children:s.jsx(Je,{left:s.jsx(Ie,{...i,layoutSide:L}),right:s.jsx(Ie,{...i,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Ie,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Se.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const $e="#353C4E",yr=u.createContext(void 0);function bt(){return u.useContext(yr)}const Dt=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=u.useContext(lr),o=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:s.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&s.jsx(oi,{short:e}),e&&t!==void 0&&s.jsx(si,{onToggle:l,expanded:t})]})};Dt.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const $i="w-4 min-w-[16px] shrink-0 flex-none",br="w-3 min-w-[12px] shrink-0 flex-none",Si=()=>s.jsx("div",{className:br,"aria-hidden":"true"}),vt=i=>{const{isRoot:e,expandable:t,expanded:n,onClick:r}=i;return e&&!t?s.jsx(Si,{}):e&&t?s.jsx("div",{className:"flex flex-row items-center justify-center pt-1.5",children:n!==void 0&&s.jsx(si,{onToggle:r??(()=>{}),expanded:n})}):t?s.jsxs("div",{className:`flex flex-row items-center justify-center pt-1.5 gap-0.5 ${$i}`,children:[s.jsx(oi,{short:!0}),n!==void 0&&s.jsx(si,{onToggle:r??(()=>{}),expanded:n})]}):s.jsx("div",{className:`flex flex-row items-center justify-center pt-1.5 ${$i}`,children:s.jsx(oi,{})})};Si.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRootExpanderOffset"};vt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExpanderColumn",props:{isRoot:{required:!0,tsType:{name:"boolean"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Dr={[I.JsoProperty]:di,[I.DdlApiSection]:dr,[I.DdlApiProperty]:xi,[I.JsonSchemaProperty]:di},vr={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function Vr(i){const e=Dr[i]??wi,t=vr[i]??[];return[e,...t].join(" ")}const Le=u.memo(i=>{const{expandable:e,expanded:t,isRoot:n=!1,onClickExpander:r,value:a,titleContent:o,variant:l,layoutSide:d,enableHeader:f=!0,enableHeaderValue:g=!0,subheader:c,usage:p=I.Default,highlightingMode:y=pn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:b,descendantDiffs:k,diffsSeverities:H}=i,{[$]:D,[O]:m}=i,F=u.useMemo(()=>{switch(p){case I.Default:return y.get(ai.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return y.get(ai.JsoPropertyKey)}},[y,p]),E=ge(),T=bt(),N=u.useMemo(()=>T?d===L?T.beforeLevel:T.afterLevel:E,[d,E,T]),w=u.useMemo(()=>{const P=[];if(!b)return P;const{data:le,styles:B}=b;return le&&(d===L&&P.push(U.background(B.before.backgroundColor)),d===ne&&P.push(U.background(B.after.backgroundColor))),P},[b,d]),x=u.useMemo(()=>typeof o=="function"?o(d):o||(g?s.jsx(yt,{"data-precededby":D,value:a,variant:l,layoutSide:d,diff:b,usage:p,highlightingMode:F,onClick:r}):null),[o,g,D,a,l,d,b,p,F,r]),A=p===I.DdlApiProperty,S=p===I.JsonSchemaProperty,X=n||N===0,z=u.useMemo(()=>f?S?s.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex shrink-0 items-stretch self-stretch",children:[s.jsx(xe,{level:N}),s.jsx(vt,{isRoot:X,expandable:e,expanded:t,onClick:r})]}):s.jsxs(s.Fragment,{children:[(e||N>0)&&s.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:N}),s.jsx(Dt,{expandable:e,expanded:t,onClick:r,level:N})]}),!A&&x]}):h?null:N>0&&s.jsx(xe,{level:N}),[f,e,t,h,A,S,X,N,r,D]),pe=u.useMemo(()=>Vr(p),[p]);return s.jsxs("div",{"data-precededby":D,"data-ddl-list-last-row":m?!0:void 0,"data-usage":p!==I.Default?p:void 0,className:`title-row-content flex w-full ${A||S?"items-stretch":"items-center"} h-full ${pe} gap-2 ${w.join(" ")}`,children:[z,A?s.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[x,c==null?void 0:c(d)]}):S?s.jsxs("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center gap-2",children:[x,c==null?void 0:c(d)]}):c==null?void 0:c(d)]})});Le.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{const e=Ge(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=u.useMemo(()=>n==null?void 0:n["title-row"],[n]),o=u.useMemo(()=>a==null?void 0:a.type,[a]),l=u.useMemo(()=>pi(a==null?void 0:a.causedAt),[a]);switch(e){case mi:return s.jsx(We,{diffType:o,diffTypeCause:l,hidden:!1,children:s.jsx(Je,{left:s.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:L}),right:s.jsx(Le,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Le,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ya(i,e){return u.useMemo(()=>e(i)?ke(i):{},[e,i])}function ke(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Xe(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const b=g.find(([k])=>k===String(h));return b==null?void 0:b[1]},p=t?c(t):void 0;return{diff:o?o(l,c):n?l[ee]??p:p,...r?{descendantDiffs:d}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function Nr(i){return at.includes(i.kind)}function Ja(i){return i.childrenNodes().filter(Nr)}function wr(i){return i.kind===R.TABLE}function $a(i){return wr(i)&&i instanceof ce}function xr(i){return i.kind===R.COLUMNS}function Sr(i){return xr(i)&&i instanceof ce}function kr(i){return Hr(i)&&i instanceof ce}function Vt(i){return i.kind===R.COLUMN}function ki(i){return Vt(i)&&i instanceof ce}function Hr(i){return i.kind===R.INDEXES}function Nt(i){return i.kind===R.INDEX}function wt(i){return Nt(i)&&i instanceof ce}function xt(i){return i.filter(Vt)}function St(i){return i.filter(Nt)}const Cr=u.createContext(null);function Ar(){const i=u.useContext(Cr);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const _r=({href:i,className:e,children:t})=>s.jsx("a",{href:i,className:e,children:t});_r.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const kt=V.PropertyRow.takeNodeDiffIfPresent;function Ht(i){const e=Xe(ke(i),{resolveDiff:()=>V.PropertyRow.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Xa(i){const e=Xe(ke(i),{resolveDiff:()=>V.Table.takeTitleRowDiff(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const za=V.Table.takeNodeDiffIfPresent,Er="ux-badge_ddlapi_primary-key",Ct="ux-badge_ddlapi_foreign-key",Tr="ux-badge_ddlapi_unique",qr="ux-badge_ddlapi_not-null",Ir="ux-badge_ddlapi_generated",Lr="public",At="Default",_t="As",Et="Values";function Mr(i){return i?!!(Fe(i.defaultValue)||Fe(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Rr="detailed";function Q(i){return i===Rr}function Pe(i){return i!=null}let Tt=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),o=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l,showAnyAdditionalInfoRow:a||o||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return Q(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return Q(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return Q(t)&&Pe(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return Q(t)&&Pe(e==null?void 0:e.generatedExpression)}};const Hi=new Tt;function Fr(i,e){return Hi.resolveNodeVisibility(i,e)}function Pr(i,e){return Hi.resolveListLastRowFlags(i,e)}function Xi(i,e){return Hi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const qt=u.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?s.jsx("div",{className:n,children:s.jsx("pre",{className:r||void 0,style:{fontFamily:"Inter"},children:`${t}`})}):null});qt.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var Oe=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(Oe||{});function Or(i={}){const{usage:e=Oe.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:r,isEmptyStringPlaceholder:a}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",e===Oe.JsonSchemaValidation?"additional-info-piece_json-schema-validation":"",U.borderShadow(n)].filter(Boolean).join(" "),valueClassName:["inline",U.highlighter(t),r?U.fontMuted():"",a?"additional-info-piece_empty-string-placeholder":""].filter(Boolean).join(" ")}),[n,a,r,t,e])}const ue=u.memo(i=>{const{isVisible:e,value:t,usage:n=Oe.Default,textHighlighterColor:r,borderShadowColor:a,isFontMuted:o,isEmptyStringPlaceholder:l}=i,{blockClassName:d,valueClassName:f}=Or({usage:n,textHighlighterColor:r,borderShadowColor:a,isFontMuted:o,isEmptyStringPlaceholder:l});return s.jsx(qt,{isVisible:e,value:t,blockClassName:d,valueClassName:f})});ue.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""},isEmptyStringPlaceholder:{required:!1,tsType:{name:"boolean"},description:""}}};function jr(i){const e=ge(),t=bt();return u.useMemo(()=>t?i===L?t.beforeLevel:t.afterLevel:e,[i,e,t])}var G=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(G||{});const Gr={[G.DdlApiProperty]:xi,[G.JsonSchemaValidation]:di},Ur={[G.DdlApiProperty]:"ddlapi-property-row-body",[G.Default]:"additional-info-row-body",[G.JsonSchemaValidation]:"json-schema-property-row-body"},Kr={[G.DdlApiProperty]:"min-h-[26px]"};function Br(i,e={}){return{xPaddingClass:e.xPaddingClass??Gr[i]??wi,bodyClass:e.bodyClass??Ur[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Kr[i]??"",stretchLevelIndicator:i===G.DdlApiProperty}}const Me=u.memo(i=>{var T;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1,usage:l=G.Default,xPaddingClass:d,bodyClass:f,minHeightClass:g}=i,{[$]:c,[O]:p}=i,y=jr(n),h=u.useMemo(()=>Br(l,{xPaddingClass:d,bodyClass:f,minHeightClass:g}),[l,d,f,g]),b=n===L?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,H=(T=(n===L?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??b)==null?void 0:T.backgroundColor,D=u.useMemo(()=>H?[U.background(H)]:[],[H]),m=u.useMemo(()=>{const N=a==null?void 0:a.data;if(N){if(Y(N))return n!==L;if(K(N))return n===L}return(b==null?void 0:b.isContentVisible)??!0},[a,b==null?void 0:b.isContentVisible,n]),F=l===G.JsonSchemaValidation&&y===0,E=y>0&&(!o||m);return s.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":p?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",D.join(" ")].filter(Boolean).join(" "),children:[F&&s.jsx(Si,{}),E&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(xe,{level:y}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m&&s.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[s.jsx("div",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});Me.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fe=u.memo(i=>{var a;const e=Ge(),t=i.diffsSeverityPlacement??te.AdditionalInfoRow,n=(a=i.diffsSeverities)==null?void 0:a[t],r=u.useMemo(()=>pi(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case mi:return s.jsx(We,{diffType:n==null?void 0:n.type,diffTypeCause:r,hidden:!1,children:s.jsx(Je,{left:s.jsx(Me,{...i,layoutSide:L}),right:s.jsx(Me,{...i,layoutSide:ne})})});case hi:return s.jsx(Ye,{content:s.jsx(Me,{...i,layoutSide:ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});fe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:"Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when\na viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /\nExamples / Allowed values / validation-constraint rows) so each row's floating badge reflects\nonly its own diff, not the node's overall max severity."},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};const Ci=i=>{const{label:e,colorSchema:t=ei(ii),layoutMode:n,layoutSide:r,diff:a}=i,o=hn(),l=a==null?void 0:a.type,d=mn(l,o),{isDocumentLayoutMode:f,isInlineDiffsLayoutMode:g}=Dn(n),{originSide:c,changedSide:p}=vn(r);if(!(!f&&!!a))return s.jsx(Ne,{text:e,colorSchema:t});const h=a.action,b=`${ei(ii)} ${bn[h]}`,k=h===Pi.remove&&(g||c),H=h===Pi.add&&(g||p);return d?k?s.jsx(Ne,{text:s.jsx("span",{className:yn,children:e}),colorSchema:b}):H?s.jsx(Ne,{text:e,colorSchema:b}):null:k||H?s.jsx(Ne,{text:e,colorSchema:ei(ii)}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"BadgeWithDiffs",props:{label:{required:!0,tsType:{name:"string"},description:""},colorSchema:{required:!1,tsType:{name:"string"},description:""},layoutMode:{required:!0,tsType:{name:"union",raw:`| typeof DOCUMENT_LAYOUT_MODE
| typeof INLINE_DIFFS_LAYOUT_MODE
| typeof SIDE_BY_SIDE_DIFFS_LAYOUT_MODE`,elements:[{name:"DOCUMENT_LAYOUT_MODE"},{name:"INLINE_DIFFS_LAYOUT_MODE"},{name:"SIDE_BY_SIDE_DIFFS_LAYOUT_MODE"}]},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},diff:{required:!1,tsType:{name:"Diff"},description:""}}};function ye(i,e){return i?(e===L?i.styles.before:i.styles.after).textHighlighterColor:void 0}function It(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Lr?e:`${i.schemaName}.${e}`}function Wr(i){return i.join(", ")}const gi=u.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Ar(),o=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",U.highlighter(n)].filter(Boolean).join(" "),[n]),d=s.jsx(a,{href:o,className:l,children:It(e)});return t?d:s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Ne,{text:"FK",colorSchema:Ct,inline:!0}),d]})});gi.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Yr(){return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Lt(i,e){return!!i||!!e}function Ai(i,e){return i?e===L?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Jr(i,e,t){return Lt(i,e)&&Ai(e,t)}function Te(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:l}=i;if(!Lt(r,a))return null;if(!Ai(a,l))return Yr();const d=V.Column.isFlagBadgeHighlighted(a)?a==null?void 0:a.data:void 0;return s.jsx(Ci,{label:t,colorSchema:n,layoutMode:o,layoutSide:l,diff:d},Xr(e,t))}function $r(i){const{columnId:e,target:t,targetDiff:n,layoutMode:r,layoutSide:a}=i,o=zr(e,t),l=ye(n,a);if(n&&!Ai(n,a))return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!n)return s.jsx(gi,{target:t},o);const d=n.data;return s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Ci,{label:"FK",colorSchema:Ct,layoutMode:r,layoutSide:a,diff:d}),s.jsx(gi,{target:t,hideBadge:!0,textHighlighterColor:l})]},o)}const He=u.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Ge(),l=u.useMemo(()=>n??{},[n]),d=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Te({columnId:e,label:"PK",colorSchema:Er,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,l.isPrimaryKey,o,a,t.isPrimaryKey]),g=u.useMemo(()=>Jr(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=u.useMemo(()=>Te({columnId:e,label:"unique",colorSchema:Tr,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:o,layoutSide:a}),[e,l.isUnique,o,a,t.isUnique]),p=u.useMemo(()=>g?null:Te({columnId:e,label:"not null",colorSchema:qr,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:o,layoutSide:a}),[e,l.isNotNull,g,o,a,t.isNotNull]),y=u.useMemo(()=>Te({columnId:e,label:"generated",colorSchema:Ir,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:o,layoutSide:a}),[e,l.isGenerated,o,a,t.isGenerated]),h=u.useMemo(()=>{const k=t.foreignKeyTargets??[];return k.length===0?[]:k.map(H=>$r({columnId:e,target:H,targetDiff:d[Zn(H)],layoutMode:o,layoutSide:a}))},[e,o,a,d,t.foreignKeyTargets]),b=u.useMemo(()=>[f,c,p,y,...h].filter(Boolean),[h,y,p,f,c]);return b.length===0?null:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:b})});function Xr(i,e){return`${i}-${e}`}function zr(i,e){return`${i}-FK-${It(e)}`}He.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _i=u.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?s.jsx("span",{className:n,children:`${t}`}):null});_i.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var ae=(i=>(i.Text="text",i.Block="block",i))(ae||{});function Mt(i){const{appearance:e}=i;return u.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const Ce=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ae.Text}=i,r=Mt({appearance:n});return s.jsx(_i,{isVisible:e,value:t,className:r})});Ce.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const Ei=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,[$]:r}=i,a=be(),o=e.value(),l=u.useMemo(()=>Fr(e,a),[e,a]),d=u.useMemo(()=>Pr(n,l),[n,l]),f=u.useCallback(y=>o?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Ce,{isVisible:!0,value:o.columnType.label,appearance:ae.Text}),s.jsx(He,{columnId:e.id,layoutSide:y,value:o})]}):s.jsx(s.Fragment,{}),[e.id,o]),g=u.useCallback(y=>{const h=o==null?void 0:o.defaultValue;return Fe(h)?s.jsx(ue,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),c=u.useCallback(y=>{const h=o==null?void 0:o.generatedExpression;return Fe(h)?s.jsx(ue,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),p=u.useCallback(y=>{var h;return(h=o==null?void 0:o.enumValues)!=null&&h.length?s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((b,k)=>s.jsx(ue,{isVisible:!0,value:b},`${b}-${k}`))}):s.jsx(s.Fragment,{})},[o]);return o?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":r,[O]:d.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:f,usage:I.DdlApiProperty}),l.showDescription&&s.jsx(Se,{"data-precededby":j.DDL_COLUMN_ROW,[O]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body2,textFontWeight:"normal",textColor:$e,usage:re.DdlApiProperty}),l.showEnumValuesRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":t,[O]:d.isEnumAdditionalInfoListLastRow||void 0,label:Et,subheader:p}),l.showDefaultRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Xi(l,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:d.isDefaultAdditionalInfoListLastRow||void 0,label:At,subheader:g}),l.showGeneratedRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Xi(l,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:_t,subheader:c})]}):null};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function zi(i,e){return i?(e===L?i.styles.before:i.styles.after).borderShadowColor:void 0}function Qr(i,e){return i?(e===L?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Zr(i){if(ki(i))return V.ForeignKey.takeTargetDiffs(i)}function ea(i){if(ki(i))return V.Column.takeFlagDiffs(i)}function ia(i){if(wt(i))return V.Index.takeFlagDiffs(i)}const Qi=new Tt;class ta{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,V.Column.takeDescriptionDiff(e),t),o=this.resolveEnumValuesRowVisible(n,V.ColumnEnumValues.takeDiffs(e),t),l=this.resolveDefaultRowVisible(n,V.ColumnDefaultValue.takeDiff(e),V.ColumnDefaultValue.takeRowColorizingDiff(e),r,t),d=this.resolveGeneratedRowVisible(n,V.Column.takeGeneratedExpressionDiff(e),t);return{showDescription:a,showEnumValuesRow:o,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:o||l||d}}resolveListLastRowFlags(e,t){return Qi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Qi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=V.Column.takeGeneratedExpressionDiff(e);return we(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[ee];return!!t&&(Y(t.data)||K(t.data))}resolveDescriptionRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const o=Pe(e==null?void 0:e.defaultValue)||!!t||!!n;return Q(a)&&o}resolveGeneratedRowVisible(e,t,n){return Q(n)&&(Pe(e==null?void 0:e.generatedExpression)||!!t)}}const ze=new ta;function na(i,e){return ze.resolveNodeVisibility(i,e)}function ra(i,e){return ze.resolveListLastRowFlags(i,e)}function Zi(i,e){return ze.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function aa(i,e){return ze.resolveGeneratedExpressionSideDisplay(i,e)}function oa(i,e){return i?(e===L?i.styles.before:i.styles.after).backgroundColor:void 0}function sa(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=Mt({appearance:e});return u.useMemo(()=>[r,U.highlighter(t),U.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const Ti=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ae.Text,textHighlighterColor:r,backgroundColor:a}=i,o=sa({appearance:n,textHighlighterColor:r,backgroundColor:a});return s.jsx(_i,{isVisible:e,value:t,className:o})});Ti.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function la(i){return i.text===", "||i.text===","}function ci(i,e,t,n){return i.diff?s.jsx(Ti,{isVisible:!0,value:i.text,appearance:ae.Text,textHighlighterColor:ye(i.diff,t),backgroundColor:n?oa(i.diff,t):void 0},`${i.text}-${e}`):s.jsx(Ce,{isVisible:!0,value:i.text,appearance:ae.Text},`${i.text}-${e}`)}function da(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(la(r)){n=!0;return}n&&(t.push(s.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(ci(r,a,e,!1))}),t}const je=u.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===J.NO_DIFFS?ci({text:e.text},0,t,!1):e.kind===J.WHOLE_DIFFS?ci({text:e.text,diff:e.diff},0,t,!0):s.jsx("span",{className:"inline-flex items-center",children:da(e.segments,t)})});je.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function ua(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function fa(i,e,t){return i.diff?s.jsx(Ti,{isVisible:!0,value:i.text,appearance:ae.Text,textHighlighterColor:ye(i.diff,t)},`${i.text}-${e}`):s.jsx(Ce,{isVisible:!0,value:i.text,appearance:ae.Text},`${i.text}-${e}`)}const Rt=u.memo(i=>{const{node:e,layoutSide:t}=i,n=V.ColumnTypeLabel.resolveSideDisplay(e,t);if(n.kind===J.NO_DIFFS||n.kind===J.WHOLE_DIFFS)return s.jsx(je,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=ua(n.segments);return s.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,l)=>fa(o,l,t)),a.length>0&&s.jsx(je,{layoutSide:t,display:{kind:J.PARTIAL_DIFFS,segments:a}})]})});Rt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ft=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[$]:a}=i,o=be(),l=e.value(),d=u.useMemo(()=>kt(e),[e]),f=u.useMemo(()=>Ht(e),[e]),g=u.useMemo(()=>ea(e),[e]),c=u.useMemo(()=>Zr(e),[e]),p=u.useMemo(()=>V.Column.takeDescriptionDiff(e),[e]),y=u.useMemo(()=>V.Column.takeGeneratedExpressionDiff(e),[e]),h=u.useMemo(()=>V.ColumnEnumValues.takeDiffs(e),[e]),b=u.useMemo(()=>V.ColumnEnumValues.takeRowColorizingDiff(e),[e]),k=u.useMemo(()=>V.ColumnDefaultValue.takeDiff(e),[e]),H=u.useMemo(()=>V.ColumnDefaultValue.takeRowColorizingDiff(e),[e]),D=u.useMemo(()=>na(e,o),[e,o]),m=u.useMemo(()=>ra(n,D),[n,D]),F=u.useCallback(w=>l?V.PropertyRow.isSubheaderVisible(d,w)?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Rt,{node:e,layoutSide:w}),s.jsx(He,{columnId:e.id,layoutSide:w,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{}),[g,c,e,d,l]),E=u.useCallback(w=>{const x=V.ColumnDefaultValue.resolveSideDisplay(e,w);return x===void 0?s.jsx(s.Fragment,{}):s.jsx(ue,{isVisible:!0,value:x,textHighlighterColor:ye(k,w),borderShadowColor:zi(k,w)})},[k,e]),T=u.useCallback(w=>{const x=aa(e,w);return x===void 0?s.jsx(s.Fragment,{}):s.jsx(ue,{isVisible:!0,value:x,textHighlighterColor:ye(y,w)})},[y,e]),N=u.useCallback(w=>{const x=V.ColumnEnumValues.resolveSideItems(e,w);return x.length===0?s.jsx(s.Fragment,{}):s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:x.map((A,S)=>s.jsx(ue,{isVisible:!0,value:A.literal,textHighlighterColor:ye(A.diff,w),borderShadowColor:zi(A.diff,w),isFontMuted:Qr(A.diff,w)},`${A.literal}-${S}`))})},[e]);return l?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":a,[O]:m.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:F,usage:I.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),D.showDescription&&s.jsx(Se,{"data-precededby":j.DDL_COLUMN_ROW,[O]:m.isDescriptionListLastRow||void 0,value:l.description??"",variant:C.body2,textFontWeight:"normal",textColor:$e,usage:re.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),D.showEnumValuesRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":t,[O]:m.isEnumAdditionalInfoListLastRow||void 0,label:Et,subheader:N,colorizingDiff:b,diffsSeverities:h||b?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),D.showDefaultRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Zi(D,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:m.isDefaultAdditionalInfoListLastRow||void 0,label:At,subheader:E,colorizingDiff:H,diffsSeverities:k||H?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),D.showGeneratedRow&&s.jsx(fe,{usage:G.DdlApiProperty,"data-precededby":Zi(D,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[O]:m.isGeneratedAdditionalInfoListLastRow||void 0,label:_t,subheader:T,diff:y,colorizingDiff:e.diffs[ee],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};Ft.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Pt(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,o=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,l=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,d={columnNode:n,titlePrecededBy:o,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&Mr(n.value()),d})}const ga=i=>{const{node:e,[$]:t}=i;return Sr(e)?s.jsx(pa,{"data-precededby":t,node:e}):s.jsx(ca,{"data-precededby":t,node:e})},ca=i=>{const{node:e,[$]:t}=i,n=ge(),r=be(),a=e.value(),o=xt(e.childrenNodes()),l=r===tt,d=u.useMemo(()=>Pt(o,l),[o,l]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection}),s.jsx(Ue.Provider,{value:n+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>s.jsx(Ei,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},pa=i=>{const{node:e,[$]:t}=i,n=ge(),r=be(),a=e.value(),o=xt(e.childrenNodes()),l=r===tt,d=u.useMemo(()=>Xe(ke(e)),[e]),f=u.useMemo(()=>Pt(o,l),[o,l]),g=u.useMemo(()=>V.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection,...d}),s.jsx(Ue.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:y,isLastInList:h})=>ki(c)?s.jsx(Ft,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):s.jsx(Ei,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:h,node:c},c.id))})]})};ga.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Ot=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return Q(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const jt=new Ot;function ha(i,e){return jt.resolveNodeVisibility(i,e)}function ma(i,e){return jt.resolveListLastRowFlags(i,e)}const qi=i=>{const{node:e,isLastInList:t=!1,[$]:n}=i,r=be(),a=e.value(),o=u.useMemo(()=>ha(e,r),[e,r]),l=u.useMemo(()=>ma(t,o),[t,o]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(c=>{if(!a)return s.jsx(s.Fragment,{});const p=Wr(a.partNames);return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&s.jsx(Ce,{isVisible:!0,value:`(${p})`,appearance:ae.Text}),s.jsx(He,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=o.showDescription;return a?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":n,[O]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:C.body2,subheader:o.showSubheader?f:void 0,usage:I.DdlApiProperty}),g&&s.jsx(Se,{"data-precededby":j.DDL_INDEX_ROW,[O]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:C.body1,textFontWeight:"normal",textColor:$e,usage:re.DdlApiProperty})]}):null};qi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ya=new Ot;class ba{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,V.Index.takeDescriptionDiff(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=V.Index.takeFlagDiffs(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return ya.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return Q(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const Gt=new ba;function Da(i,e){return Gt.resolveNodeVisibility(i,e)}function va(i,e){return Gt.resolveListLastRowFlags(i,e)}const Ut=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[$]:r}=i,a=be(),o=e.value(),l=u.useMemo(()=>Da(e,a),[e,a]),d=u.useMemo(()=>va(t,l),[t,l]),f=u.useMemo(()=>kt(e),[e]),g=u.useMemo(()=>Ht(e),[e]),c=u.useMemo(()=>ia(e),[e]),p=u.useMemo(()=>V.Index.takeDescriptionDiff(e),[e]),y=(o==null?void 0:o.indexName)??"",h=u.useCallback(H=>{const D=V.IndexPartNames.resolveSideDisplay(e,H);return s.jsx(je,{layoutSide:H,display:D})},[e]),b=u.useCallback(H=>{if(!o)return s.jsx(s.Fragment,{});if(!V.PropertyRow.isSubheaderVisible(f,H))return s.jsx(s.Fragment,{});const D=o.partNames.length>0;return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[D&&h(H),s.jsx(He,{columnId:e.id,layoutSide:H,value:o,flagDiffs:c})]})},[c,e.id,f,h,o]),k=l.showDescription;return o?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(oe,{"data-precededby":r,[O]:d.isTitleListLastRow||void 0,value:y,expandable:!1,expanded:!0,variant:C.body2,subheader:l.showSubheader?b:void 0,usage:I.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),k&&s.jsx(Se,{"data-precededby":j.DDL_INDEX_ROW,[O]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body1,textFontWeight:"normal",textColor:$e,usage:re.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Ut.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Kt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:j.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const Va=i=>{const{node:e,[$]:t}=i;return kr(e)?s.jsx(wa,{"data-precededby":t,node:e}):s.jsx(Na,{"data-precededby":t,node:e})},Na=i=>{const{node:e,[$]:t}=i,n=ge(),r=e.value(),a=St(e.childrenNodes()),o=u.useMemo(()=>Kt(a),[a]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection}),s.jsx(Ue.Provider,{value:n+1,children:o.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>s.jsx(qi,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},wa=i=>{const{node:e,[$]:t}=i,n=ge(),r=e.value(),a=St(e.childrenNodes()),o=u.useMemo(()=>Xe(ke(e)),[e]),l=u.useMemo(()=>Kt(a),[a]),d=u.useMemo(()=>V.PropertyRow.isListSectionUniformWholeNodeChange(e),[e]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(oe,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:I.DdlApiSection,...o}),s.jsx(Ue.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>wt(f)?s.jsx(Ut,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):s.jsx(qi,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};Va.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Cn as $,$ as A,Oa as B,ga as C,Lr as D,De as E,Ra as F,Fa as G,Fn as H,Va as I,ja as J,Pa as K,at as L,ye as M,We as N,Ye as O,j as P,Je as Q,za as R,ce as S,oe as T,Xa as U,V,$a as W,wi as X,Vn as Y,ti as Z,Nn as _,Hr as a,An as a0,xn as a1,Sn as a2,wn as a3,se as a4,rt as a5,_a as a6,nt as a7,Ea as a8,Aa as a9,Si as aA,ue as aB,Oe as aC,zi as aD,Qr as aE,Ya as aF,fe as aG,G as aH,Ci as aI,oa as aJ,tr as aK,ir as aL,er as aM,Ca as aa,qa as ab,Ia as ac,M as ad,Ba as ae,Ka as af,Wa as ag,yt as ah,lr as ai,yr as aj,bt as ak,ke as al,Xe as am,I as an,La as ao,sr as ap,Q as aq,di as ar,jr as as,we as at,J as au,fr as av,ur as aw,re as ax,gr as ay,xi as az,C as b,Se as c,$e as d,kn as e,Ga as f,Ja as g,wr as h,xr as i,Cr as j,_r as k,_ as l,$n as m,ni as n,Zn as o,Wn as p,ft as q,Ma as r,st as s,Ta as t,Di as u,Be as v,R as w,lt as x,dt as y,Rn as z};
