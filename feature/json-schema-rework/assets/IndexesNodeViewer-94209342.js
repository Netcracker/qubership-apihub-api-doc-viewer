var Ut=Object.defineProperty;var Bt=(i,e,t)=>e in i?Ut(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var k=(i,e,t)=>(Bt(i,typeof e!="symbol"?e+"":e,t),t);import{t as U,v as G,w as ze,x as J,Z as Wt,_ as me,$ as Ee,N as z,a0 as Wi,P as _,a1 as Yt,a2 as $t,K as xe,Q as Xt,M as ke,a3 as Jt,U as L,H as fe,a4 as Qe,a5 as Se,a6 as zt,W as Z,V as O,a7 as Yi,a8 as se,a9 as ye,X as je,R as $i,Y as di,l as ui,S as fi,aa as Ze,ab as ei,y as Qt,ac as Le,ad as Zt,ae as Xi,u as ce,f as Fe,h as Ji}from"./DiffBadge-ceca5443.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const ne={SIMPLE:"simple",COMPLEX:"complex"};class Re{constructor(e="#",t="",n,r,a){k(this,"type");k(this,"parent");k(this,"container");k(this,"newDataLevel");k(this,"_value");k(this,"_meta");k(this,"_childrenNodes",[]);k(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:s=ne.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=s,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new Re(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ne.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class gi extends Re{constructor(t="#",n="",r,a,s){super(t,n,r,a,s);k(this,"type");this.id=t,this.key=n,this.kind=r,this.type=s.type}createCycledClone(t,n,r){const a=new gi(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class en{constructor(){k(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const s=new Re(e,t,n,r,a);return this.nodes.set(e,s),s}createComplexNode(e,t,n,r,a){const s=new gi(e,t,n,r,a);return this.nodes.set(e,s),s}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const tn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},nn=Object.values(tn);new Set(nn);class Pe{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!C(e))return!1;for(const t of Object.values(e))if(!Pe.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return C(t)&&(U(t)||G(t)||ze(t)||J(t))}}function C(i){return zi(i)&&!Array.isArray(i)}function zi(i){return typeof i=="object"&&i!==null}function rn(i){return C(i)&&Object.keys(i).every(e=>typeof e=="string")}function Xe(i){return Array.isArray(i)}function xa(i){return typeof i=="number"}function ka(i){return typeof i=="string"}function Ha(i,e,t){let n=i,r=!1;for(const a of e){if(!C(n)&&!Xe(n))return;if(r){let l;zi(n)&&(l=n[a]),!l&&Xe(n)&&t&&(l=n.find(d=>C(d)&&d[t]===a)),n=l,r=!1;continue}n=n[a],Xe(n)&&(r=!0)}return n}function Na(i,e){return Object.keys(i).find(t=>i[t]===e)}function Ca(i){if(Pe.isDiffsRecord(i))return i}class an{constructor(){k(this,"tree",null)}pick(e,t){if(!C(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const s=e[a];Array.isArray(s)?n[a]=[...s]:C(s)?n[a]={...s}:n[a]=s}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class Qi{constructor(){k(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const He=()=>{},on=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:He,info:He,warn:He,error:He};class Sa{constructor(){k(this,"fragments",new Map);k(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Li(i,e){return"#"+Wt([...i,...e])}function Aa(i,e){const t=new Qi,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function qa(i){return Array.isArray(i)?i.length>0:C(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function sn(i){return i==null||!C(i)&&!me(i)}function ln(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:s,createStateForComplexNode:l,isSimpleNode:d,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=sn,shouldSkipNodeCreation:p,shouldStopAfterNodeCreation:b,lazy:h}=i;return[({value:y,state:m,key:M,path:q})=>{if(typeof M=="symbol")return;if(!C(y)&&!me(y))return{value:y};const{ancestors:T,parent:v,container:V,pathPrefix:w=[]}=m,N=T.get(y);if(!N||!d(N)&&!f(N))return{value:y};if(!v||!d(v))return{value:y};const x=Li(w,q),Y=g(M,y),$=t.createCycledClone(N,x,Y,v);return V?V.addNestedNode($):v&&v.addChildNode($),{done:!0}},({key:y,value:m,path:M,state:q,rules:T})=>!T||!Array.isArray(T.transformers)?void 0:{value:T.transformers.reduce((w,N)=>N(y,w,e,M,q),m)},({key:y,value:m,path:M,rules:q,state:T})=>{if(!q)return{done:!0};if(typeof y=="symbol")return{done:!0};if(c(m))return{done:!0};if(p!=null&&p(m,q)||!q.kind||!n.includes(q.kind))return;const{parent:v,container:V,ancestors:w,pathPrefix:N=[],depth:x=0,materializeDepth:Y}=T,$=Li(N,M),de=g(y,m),{kind:j,complex:re=!1}=q,K=a(m,v,V),Q=r($,de,j,re,K);if(!Q)return;V?V.addNestedNode(Q):v&&v.addChildNode(Q),h&&(C(m)||me(m))&&h.state.rememberFragment($,m);let Ai=m;if(b!=null&&b(Q,m)){const $e=v?v.descendantDiffs:void 0;if(!$e||!(y in $e))return{done:!0};const _i=$e[y];if(!_i)return{done:!0};const{data:Ei}=_i;J(Ei)&&(Ai=Ei.beforeValue)}const qi=x+(K.newDataLevel?1:0),Ti=!!(h&&d(Q)&&Y!==void 0&&qi>=Y&&(C(m)||me(m))&&h.resolveHasOwnChildren(m,q));Ti&&h.state.defer({nodeId:$,fragment:m,path:[...N,...M],rules:q});const Ye=C(m)||me(m);Ye&&w.enter(m,Q);let he;return d(Q)?he=s(T,Q):he=l(T,Q),he={...he,depth:qi,materializeDepth:T.materializeDepth,pathPrefix:T.pathPrefix},Ti?{done:!0,exitHook:Ye?()=>{w.leave(m)}:void 0}:{value:Ai,state:he,exitHook:Ye?()=>{w.leave(m)}:void 0}}]}class dn{}class le{constructor(e="#",t="",n,r,a){k(this,"type");k(this,"parent");k(this,"container");k(this,"newDataLevel");k(this,"_value");k(this,"_meta");k(this,"_childrenNodes",[]);k(this,"_nestedNodes",[]);k(this,"_diffs",{});k(this,"_diffsSummary",new Set);k(this,"_descendantDiffs",{});k(this,"_descendantDiffsSummary",new Set);k(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:s=ne.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=s,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new le(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ne.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class un extends en{constructor(){super()}}const I={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Zi=Object.values(I),et="<unnamed>";function fn(i){return i??et}function it(i){return i!==et}function gn(i,e){return e.indexName&&it(e.indexName)?e.indexName:i}function Ta(i,e,t){return t||(e!=null&&e.indexName&&it(e.indexName)?e.indexName:String(i))}function ii(i=I.TABLE){return{"/columns":{"/items":{"/*":()=>ii(I.COLUMN)},kind:I.COLUMNS},"/indexes":{"/items":{"/*":()=>ii(I.INDEX)},kind:I.INDEXES},kind:i}}const Ii={Identity:"identity",Expression:"expression"};function cn(i){return i.kind===Ee.Literal&&typeof i.value=="string"}function pn(i){return i.kind===Ee.RawExpr&&typeof i.expr=="string"}function hn(i){return C(i)&&typeof i.expr=="string"}function mn(i){return C(i)&&typeof i.value=="string"}const pe="titleRow",yn=["typeName","size","precision","scale","label"],_a={ToEnum:"to-enum",FromEnum:"from-enum"},Ea={Lost:"lost",Gained:"gained"},tt=["isPrimaryKey","isUnique","isNotNull","isGenerated"],nt=["isUnique"],La=[z,pe,"tableName","schemaName","description"],Ia=[z,pe,"columnName","description","generatedExpression",...tt],Ma=[z,pe,"indexName","description",...nt];function bn(i){if(!C(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!C(t)||!("before"in t)||!("after"in t)?!1:Pe.isDiff(e)}function rt(i){return bn(i[pe])}function Dn(i){return C(i)&&i.kind===Wi.Domain&&typeof i.type=="string"}function vn(i){return i.kind===_.BoolType&&typeof i.type=="string"}function Vn(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function Mi(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function ji(i){return i.kind===_.FloatType&&typeof i.type=="string"}function Fi(i){return i.kind===_.StringType&&typeof i.type=="string"}function Ri(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function Pi(i){return i.kind===_.TimeType&&typeof i.type=="string"}function wn(i){return i.kind===_.JSONType&&typeof i.type=="string"}function xn(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function kn(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function Je(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function Hn(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function Oi(i){return typeof i.type=="string"}function ci(i){switch(i.kind){case Ee.Literal:return cn(i)?i.value:i.kind;case Ee.RawExpr:return pn(i)?i.expr:i.kind;case Yt.NamedDefault:try{return ci($t(i))}catch{return i.kind}default:return hn(i)?i.expr:mn(i)?i.value:i.kind}}function at(i){return ot(ci(i))}function Nn(i){return ot(i)}function ot(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Cn="Columns",Sn="Indexes";class An{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=xe(t.attrs,ke.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:Cn,items:(t.columns??[]).map(a=>this.buildColumnRowValue(e,t,a,n.schemaName))},indexes:{title:Sn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:C(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return C(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!C(e)||typeof e.tableName!="string"||!C(e.columns)||!Array.isArray(e.columns.items)||!C(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,r){var S,A,y;const a=xe(n.attrs,ke.Comment),s=(S=n.attrs)==null?void 0:S.find(m=>m.kind===Xt.Identity),l=xe(n.attrs,ke.GeneratedExpr),d=s!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(m=>this.buildForeignKeyTarget(e,m,n,r)).filter(m=>m!==void 0),c=g.length>0,p=this.formatColumnType(n.type),b=(A=n.type)==null?void 0:A.type,h=b&&Je(b)?b.values:void 0,D=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:D,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:d,...s?{generatedBy:Ii.Identity}:{},...l&&!s?{generatedBy:Ii.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!D&&((y=n.type)==null?void 0:y.null)===!1,...n.default!==void 0?{defaultValue:at(n.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=xe(e.attrs,ke.Comment);return{indexName:fn(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const r of e.schemas)if((n=r.tables)!=null&&n.some(a=>a===t))return r.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isSingleColumnIndexForColumn(e,t){var n,r;return(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,t))})}buildForeignKeyTarget(e,t,n,r){var f,g;const a=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(a<0)return;const s=t.refTable,l=(g=t.refColumns)==null?void 0:g[a];if(!s||!l)return;const d=this.resolveForeignKeyTargetSchemaName(e,s,r);if(d)return{schemaName:d,tableName:s.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const r=this.findSchemaNameForTable(e,t);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,t.name);return a||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(s=>s.name===t)}).map(r=>r.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Dn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return vn(e)?{kind:_.BoolType,typeName:e.type,label:t}:Vn(e)?{kind:_.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Mi(e)?{kind:_.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ji(e)?{kind:_.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Fi(e)?{kind:_.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Ri(e)?{kind:_.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Pi(e)?{kind:_.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:wn(e)?{kind:_.JSONType,typeName:e.type,label:t}:xn(e)?{kind:_.SpatialType,typeName:e.type,label:t}:kn(e)?{kind:_.UUIDType,typeName:e.type,label:t}:Je(e)?{kind:_.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Hn(e)?{kind:_.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Oi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Wi.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Mi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Fi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ri(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):ji(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Pi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Je(e)?t=e.type??e.values[0]??"enum":Oi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?ci(e.expr):""}}function qn(i){return ln(i)}const Tn=new Set([I.TABLE,I.COLUMNS,I.COLUMN,I.INDEXES,I.INDEX]);class pi extends dn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!rn(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,pi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Tn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case I.TABLE:return["tableName","schemaName","description"];case I.COLUMNS:case I.INDEXES:return["title"];case I.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case I.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const _n="[DDL API]";class ja extends an{constructor(t){const{source:n,tableKey:r,logger:a=on()}=t;super();k(this,"tree");k(this,"source");k(this,"tableKey");k(this,"logger");k(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!C(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new Qi},r=ii(),a=qn({source:t,tree:this.tree,supportedNodeKinds:Zi,createNodeFromRaw:(s,l,d,f,g)=>this.createNodeFromRaw(s,l,d,f,g),createNodeParams:(s,l,d)=>({value:C(s)&&!Array.isArray(s)?s:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(s,l)=>({parent:l,container:null,ancestors:s.ancestors}),createStateForComplexNode:(s,l)=>({parent:s.parent,container:l,ancestors:s.ancestors}),isSimpleNode:s=>this.isSimpleTreeNode(s),isComplexNode:s=>this.isComplexTreeNode(s),resolveNodeKey:(s,l)=>this.resolveNodeKey(s,l)});return Jt(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return _n}createTree(){return new un}createNodeDataBuilder(){return new pi}prepareSource(){return new An(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,s){const{parent:l,container:d,newDataLevel:f}=s;if(a){const b=this.createNodeMeta(n,s),h={type:ne.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:b,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,h)}const g=this.createNodeValue(n,r,s),c=this.createNodeMeta(n,s),p={type:ne.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,p)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(s,l)=>this.pick(s,l))}resolveNodeKey(t,n){return C(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?gn(t,n):t:t}isSimpleTreeNode(t){return t.type===ne.SIMPLE}isComplexTreeNode(t){return t.type===ne.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function En(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const B={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function st(i,e,t){const n=t===L,r=new Set,a=[],s=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&J(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=s(d);if(!f){a.push({text:d});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(U(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(G(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(J(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;a.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||r.has(f)||G(f.data)&&n&&(a.push({text:d,diff:f}),r.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return a.sort((d,f)=>l(d.text)-l(f.text))}function lt(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function be(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===L;return U(n)?r?void 0:String(n.afterValue??i??""):G(n)?r?String(n.beforeValue??i??""):void 0:J(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function dt(i,e){return(e===L?i.styles.before:i.styles.after).isContentVisible}function Ln(i,e){return i?dt(i,e):!0}function In(i,e){return i?(e===L?i.styles.before:i.styles.after).isHeaderVisible:!0}function Mn(i){if(i&&(U(i.data)||G(i.data)))return i}const ut=["size","precision","scale"];function jn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Fn(i,e){var f;const t=(f=i.value())==null?void 0:f.columnType;if(!t)return{kind:B.NO_DIFFS,text:""};const n=jn(i);if(!n)return{kind:B.NO_DIFFS,text:t.label};const r=n.typeName??n.label,a=n.typeName?"typeName":"label";if(Rn(n)){const g=Object.values(n).find(Boolean);return g?{kind:B.WHOLE_DIFFS,text:Pn(t,n,a,e),diff:Kn(g)}:{kind:B.NO_DIFFS,text:t.label}}const s=[],l=be(ti(t),r,e);l!==void 0&&s.push({text:l,diff:r});const d=On(t,n,e);return s.push(...d),s.length===0?{kind:B.NO_DIFFS,text:t.label}:{kind:B.PARTIAL_DIFFS,segments:s}}function Rn(i){const e=yn.map(n=>[n,i[n]]).filter(n=>!!n[1]);if(e.length===0)return!1;if(e.length===1){const[n]=e[0];return n==="typeName"||n==="label"}return new Set(e.map(([,n])=>n.data.action)).size===1}function Pn(i,e,t,n){const r=be(ti(i),e[t],n)??ti(i),a=[];for(const s of ut){const l=be(hi(i,s),e[s],n);l!==void 0&&a.push(l)}return a.length===0?r:`${r} (${a.join(", ")})`}function On(i,e,t){const n=Gn(i,e,t);if(n.length===0)return[];const r=n.flatMap(a=>{const s=be(hi(i,a),e[a],t);return s===void 0?[]:[{text:s,diff:e[a]}]});return[...lt(r,"spaced")]}function Gn(i,e,t){return ut.filter(n=>{const r=e[n];return r?dt(r,t):hi(i,n)!==void 0})}function ti(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function hi(i,e){if(!(e in i))return;const t=Reflect.get(i,e);return typeof t=="number"?t:void 0}function Kn(i){const{data:e}=i;return J(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow}}}:U(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Green}}}:G(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function Un(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Bn(i,e){var s;const t=((s=i.value())==null?void 0:s.partNames)??[],n=Un(i),r=n?st(t,n,e):t.map(l=>({text:l})),a=lt(r,"tight");return a.length===0?{kind:B.NO_DIFFS,text:""}:{kind:B.PARTIAL_DIFFS,segments:a}}function Wn(i){if(rt(i.diffs))return i.diffs[pe]}function Yn(i){const e=i.diffs[z];if(e&&(U(e.data)||G(e.data)))return e}function $n(i){return i.diffs.schemaName}function Fa(i){return i.diffs.description}function Ra(i,e){var s;const t=((s=i.value())==null?void 0:s.schemaName)??"",n=$n(i);if(!n)return t;const r=n.data,a=e===L;return U(r)?a?"":t:G(r)?a?t:"":J(r)?a?typeof r.beforeValue=="string"?r.beforeValue:t:typeof r.afterValue=="string"?r.afterValue:t:t}function Xn(i){if(rt(i.diffs))return i.diffs[pe]}function Jn(i){return Mn(i.diffs[z])}function ft(i,e){return In(i,e)}function zn(i,e){return Ln(i,e)}function gt(i){const e=i.diffs[z];return e?U(e.data)||G(e.data):!1}function Qn(i){const t=i.diffs.foreignKeyTargetDiffs;if(!(!t||Object.keys(t).length===0))return t}function Zn(i){const e={};let t=!1;for(const n of tt){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function ni(i){return i.diffs.generatedExpression}function ct(i){return i.diffs.description}function pt(i){return i.diffs.description}function mi(i){const t=i.diffs.enumValueDiffs;if(!(!t||Object.keys(t).length===0))return t}function er(i){return i.diffs.enumValuesRowColorizingDiff}function yi(i){return i.diffs.defaultValue}function ht(i){return i.diffs.defaultValueRowColorizingDiff}function ir(i,e){var s;const t=(s=i.value())==null?void 0:s.defaultValue,n=yi(i),r=e===L;if(!n){const l=i.diffs[z];if(l){const d=l.data;if(U(d))return r?void 0:t;if(G(d))return r?t:void 0}return t}const a=n.data;return U(a)?r?void 0:t??Ne(a.afterValue):G(a)?r?Ne(a.beforeValue)??t:void 0:J(a)?r?Ne(a.beforeValue)??t:Ne(a.afterValue)??t:t}function Ne(i){if(typeof i=="string")return Nn(i);if(C(i)&&"kind"in i)return at(i)}function tr(i,e){var t;return st(((t=i.value())==null?void 0:t.enumValues)??[],mi(i),e).map(({text:n,diff:r})=>({literal:n,diff:r}))}function mt(i){const e={};let t=!1;for(const n of nt){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function nr(i){return i?i.highlightingMode.get(Qe.Default)!==Se.Invisible:!1}const rr=u.createContext(!1),Oe=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:o.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[o.jsx(zt,{variant:t,message:n}),e]})};Oe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ge=u.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Ge.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ke=u.memo(i=>{const{left:e,right:t}=i;return o.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[o.jsx("div",{className:"flex w-1/2",children:e}),o.jsx("div",{className:"flex w-1/2",children:t})]})});Ke.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const bi="px-4",ri="",ar="px-4",Di="";var E=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(E||{});var H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const or=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=u.useCallback(()=>{n==null||n(s=>!s)},[n]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${dr(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},yt=u.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:s,highlightingMode:l=Se.Default}=i,d=l===Se.Default,f=l===Se.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:b,label:h}=i,[D,S]=u.useState(!1),A=u.useCallback((v,V,w)=>{if(w)return null;const N=f?"":V.join(" "),x=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),Y=`${x} ${N}`.trim(),$={onClick:r,...b!=null&&b.trim()?{style:{color:b}}:{}};v=D?v:lr(v);const de=(j,re)=>{const K={...$,className:re};switch(t){case H.h1:return o.jsx("h1",{...K,children:j});case H.h2:return o.jsx("h2",{...K,children:j});case H.h3:return o.jsx("h3",{...K,children:j});case H.h4:return o.jsx("h4",{...K,children:j});case H.h5:return o.jsx("h5",{...K,children:j});case H.h6:return o.jsx("h6",{...K,children:j});case H.body1:return o.jsx("span",{...K,className:`${re} text-value-body1`.trim(),children:j});case H.body2:return o.jsx("span",{...K,className:`${re} text-value-body2`.trim(),children:j})}};return h?de(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),o.jsx("span",{className:N,children:v})]}),x):de(v,Y)},[D,f,h,p,c,r,b,g,t]),y=u.useCallback(v=>{const V=[];let w=v,N=!1;if(a){const{data:x,styles:Y}=a;switch(n){case L:V.push(O.highlighter(Y.before.textHighlighterColor)),d&&(G(x)&&(w=ue(x.beforeValue)?x.beforeValue:w),J(x)&&(s===E.JsoProperty&&!f&&V.push(O.highlighter(fe.Yellow)),w=ue(x.beforeValue)?x.beforeValue:w),ze(x)&&(w=ue(x.beforeKey)?x.beforeKey:w)),U(x)&&(N=!0);break;case Z:V.push(O.highlighter(Y.after.textHighlighterColor)),d&&(U(x)&&(w=ue(x.afterValue)?x.afterValue:w),J(x)&&(s===E.JsoProperty&&!f&&V.push(O.highlighter(fe.Yellow)),w=ue(x.afterValue)?x.afterValue:w),ze(x)&&(w=ue(x.afterKey)?x.afterKey:w)),G(x)&&(N=!0);break}}return[w,V,N]},[a,d,f,n,s]),[m,M,q]=y(e);return u.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[A(m,M,q),!q&&o.jsx(or,{isExpandable:sr(m),expanded:D,setExpanded:S,variant:t})]}),[A,m,M,q,D,S,t])}),ai=5,oi=300;function sr(i){return i?i.length>oi||Yi.trim(i.split(`
`)).length>ai:!1}function lr(i){if(!i)return;if(i.length>oi)return i.slice(0,oi)+"...";const e=Yi.trim(i.split(`
`));return e.length>ai?e.slice(0,ai).join(`
`)+"...":i}function ue(i){return typeof i=="string"}function dr(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const W="data-precededby",F="data-ddl-list-last-row";var R=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSON_SCHEMA_PROPERTY="json-schema-property",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(R||{}),ee=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(ee||{});const ur={[ee.DdlApiProperty]:Di},fr={[ee.DdlApiProperty]:["min-h-[26px]"]};function gr(i){const e=ur[i]??bi,t=fr[i]??[];return[e,...t].join(" ")}const Ae=u.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=ee.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:s,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[W]:c}=i,{diff:p,descendantDiffs:b,diffsSeverities:h}=i,D=se(),S=r===ee.DdlApiProperty,A=u.useMemo(()=>!a||zn(p,n),[p,a,n]),y=S&&D>0&&A,m=u.useMemo(()=>{if(!p)return[];const{data:T,styles:v}=p;if(!T)return[];const V=[];return n===L&&V.push(O.background(v.before.backgroundColor)),n===Z&&V.push(O.background(v.after.backgroundColor)),V},[p,n]),M=u.useMemo(()=>gr(r),[r]),q=o.jsx(yt,{label:s,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return o.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${S?"items-stretch":""} ${M} gap-2 ${m.join(" ")}`,children:[y&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ye,{level:D}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),S?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:q}):q]})});Ae.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const De=u.memo(i=>{const e=je(),{diffsSeverities:t,diffsSeverityPlacement:n=$i.DescriptionRow}=i,r=u.useMemo(()=>t==null?void 0:t[n],[t,n]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),s=u.useMemo(()=>di(r==null?void 0:r.causedAt),[r]);switch(e){case fi:return o.jsx(Oe,{diffType:a,diffTypeCause:s,hidden:!1,children:o.jsx(Ke,{left:o.jsx(Ae,{...i,layoutSide:L}),right:o.jsx(Ae,{...i,layoutSide:Z})})});case ui:return o.jsx(Ge,{content:o.jsx(Ae,{...i,layoutSide:Z})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});De.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Ue="#353C4E",cr=u.createContext(void 0);function pr(){return u.useContext(cr)}const bt=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=u.useContext(rr),s=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!s?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${s?"gap-0.5":""}`,children:[s&&o.jsx(Ze,{short:e}),e&&t!==void 0&&o.jsx(ei,{onToggle:l,expanded:t})]})};bt.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const qe="w-4 min-w-[16px] shrink-0 flex-none",vi=()=>o.jsx("div",{className:qe,"aria-hidden":"true"}),Dt=i=>{const{isRoot:e,expandable:t,expanded:n,onClick:r}=i;return e&&!t?o.jsx(vi,{}):e&&t?o.jsx("div",{className:`flex flex-row items-center justify-center ${qe}`,children:n!==void 0&&o.jsx(ei,{onToggle:r??(()=>{}),expanded:n})}):t?o.jsxs("div",{className:`flex flex-row items-center justify-center gap-0.5 ${qe}`,children:[o.jsx(Ze,{short:!0}),n!==void 0&&o.jsx(ei,{onToggle:r??(()=>{}),expanded:n})]}):o.jsx("div",{className:`flex flex-row items-center justify-center ${qe}`,children:o.jsx(Ze,{})})};vi.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRootExpanderOffset"};Dt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExpanderColumn",props:{isRoot:{required:!0,tsType:{name:"boolean"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const hr={[E.JsoProperty]:ri,[E.DdlApiSection]:ar,[E.DdlApiProperty]:Di,[E.JsonSchemaProperty]:ri},mr={[E.JsoProperty]:["min-h-[26px]"],[E.DdlApiProperty]:["min-h-[26px]"]};function yr(i){const e=hr[i]??bi,t=mr[i]??[];return[e,...t].join(" ")}const Te=u.memo(i=>{const{expandable:e,expanded:t,isRoot:n=!1,onClickExpander:r,value:a,titleContent:s,variant:l,layoutSide:d,enableHeader:f=!0,enableHeaderValue:g=!0,subheader:c,usage:p=E.Default,highlightingMode:b=Qt,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:D,descendantDiffs:S,diffsSeverities:A}=i,{[W]:y,[F]:m}=i,M=u.useMemo(()=>{switch(p){case E.Default:return b.get(Qe.Default);case E.AsyncApiJsoSection:case E.JsoProperty:return b.get(Qe.JsoPropertyKey)}},[b,p]),q=se(),T=pr(),v=u.useMemo(()=>T?d===L?T.beforeLevel:T.afterLevel:q,[d,q,T]),V=u.useMemo(()=>{const j=[];if(!D)return j;const{data:re,styles:K}=D;return re&&(d===L&&j.push(O.background(K.before.backgroundColor)),d===Z&&j.push(O.background(K.after.backgroundColor))),j},[D,d]),w=u.useMemo(()=>typeof s=="function"?s(d):s||(g?o.jsx(yt,{"data-precededby":y,value:a,variant:l,layoutSide:d,diff:D,usage:p,highlightingMode:M,onClick:r}):null),[s,g,y,a,l,d,D,p,M,r]),N=p===E.DdlApiProperty,x=p===E.JsonSchemaProperty,Y=n||v===0,$=u.useMemo(()=>f?x?o.jsxs("div",{"data-precededby":y,className:"level-indicator-column flex shrink-0 items-stretch self-stretch",children:[o.jsx(ye,{level:v}),o.jsx(Dt,{isRoot:Y,expandable:e,expanded:t,onClick:r})]}):o.jsxs(o.Fragment,{children:[(e||v>0)&&o.jsxs("div",{"data-precededby":y,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ye,{level:v}),o.jsx(bt,{expandable:e,expanded:t,onClick:r,level:v})]}),!N&&w]}):h?null:v>0&&o.jsx(ye,{level:v}),[f,e,t,h,N,x,Y,v,r,y]),de=u.useMemo(()=>yr(p),[p]);return o.jsxs("div",{"data-precededby":y,"data-ddl-list-last-row":m?!0:void 0,"data-usage":p!==E.Default?p:void 0,className:`title-row-content flex w-full ${N||x?"items-stretch":"items-center"} h-full ${de} gap-2 ${V.join(" ")}`,children:[$,N?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[w,c==null?void 0:c(d)]}):x?o.jsxs("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center gap-2",children:[w,c==null?void 0:c(d)]}):c==null?void 0:c(d)]})});Te.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=u.memo(i=>{const e=je(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=u.useMemo(()=>n==null?void 0:n["title-row"],[n]),s=u.useMemo(()=>a==null?void 0:a.type,[a]),l=u.useMemo(()=>di(a==null?void 0:a.causedAt),[a]);switch(e){case fi:return o.jsx(Oe,{diffType:s,diffTypeCause:l,hidden:!1,children:o.jsx(Ke,{left:o.jsx(Te,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:L}),right:o.jsx(Te,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:Z})})});case ui:return o.jsx(Ge,{content:o.jsx(Te,{...i,layoutSide:Z})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Pa(i,e){return u.useMemo(()=>e(i)?ve(i):{},[e,i])}function ve(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Be(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:s}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const D=g.find(([S])=>S===String(h));return D==null?void 0:D[1]},p=t?c(t):void 0;return{diff:s?s(l,c):n?l[z]??p:p,...r?{descendantDiffs:d}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function br(i){return Zi.includes(i.kind)}function Oa(i){return i.childrenNodes().filter(br)}function Dr(i){return i.kind===I.TABLE}function Ga(i){return Dr(i)&&i instanceof le}function vr(i){return i.kind===I.COLUMNS}function Vr(i){return vr(i)&&i instanceof le}function wr(i){return xr(i)&&i instanceof le}function vt(i){return i.kind===I.COLUMN}function Vi(i){return vt(i)&&i instanceof le}function xr(i){return i.kind===I.INDEXES}function Vt(i){return i.kind===I.INDEX}function wt(i){return Vt(i)&&i instanceof le}function xt(i){return i.filter(vt)}function kt(i){return i.filter(Vt)}const kr=u.createContext(null);function Hr(){const i=u.useContext(kr);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Nr=({href:i,className:e,children:t})=>o.jsx("a",{href:i,className:e,children:t});Nr.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const Ht=Jn;function Nt(i){const e=Be(ve(i),{resolveDiff:()=>Xn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Ka(i){const e=Be(ve(i),{resolveDiff:()=>Wn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ua=Yn,Cr="ux-badge_ddlapi_primary-key",Ct="ux-badge_ddlapi_foreign-key",Sr="ux-badge_ddlapi_unique",Ar="ux-badge_ddlapi_not-null",qr="ux-badge_ddlapi_generated",Tr="public",St="Default",At="As",qt="Values";function _r(i){return i?!!(Le(i.defaultValue)||Le(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Er="detailed";function X(i){return i===Er}function Ie(i){return i!=null}let Tt=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),s=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:s,showGeneratedRow:l,showAnyAdditionalInfoRow:a||s||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:s,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!s&&!l,isDefaultAdditionalInfoListLastRow:e&&s&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return X(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return X(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return X(t)&&Ie(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return X(t)&&Ie(e==null?void 0:e.generatedExpression)}};const wi=new Tt;function Lr(i,e){return wi.resolveNodeVisibility(i,e)}function Ir(i,e){return wi.resolveListLastRowFlags(i,e)}function Gi(i,e){return wi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const _t=u.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?o.jsx("span",{className:n,children:o.jsx("span",{className:r||void 0,children:`${t}`})}):null});_t.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var xi=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(xi||{});function Mr(i={}){const{usage:e=xi.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:r}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",O.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[O.highlighter(t),r?O.fontMuted():""].filter(Boolean).join(" ")}),[n,r,t,e])}const ae=u.memo(i=>{const{isVisible:e,value:t,usage:n=xi.Default,textHighlighterColor:r,borderShadowColor:a,isFontMuted:s}=i,{blockClassName:l,valueClassName:d}=Mr({usage:n,textHighlighterColor:r,borderShadowColor:a,isFontMuted:s});return o.jsx(_t,{isVisible:e,value:t,blockClassName:l,valueClassName:d})});ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};var P=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(P||{});const jr={[P.DdlApiProperty]:Di,[P.JsonSchemaValidation]:ri},Fr={[P.DdlApiProperty]:"ddlapi-property-row-body",[P.Default]:"additional-info-row-body",[P.JsonSchemaValidation]:"json-schema-property-row-body"},Rr={[P.DdlApiProperty]:"min-h-[26px]"};function Pr(i,e={}){return{xPaddingClass:e.xPaddingClass??jr[i]??bi,bodyClass:e.bodyClass??Fr[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Rr[i]??"",stretchLevelIndicator:i===P.DdlApiProperty}}const _e=u.memo(i=>{var T;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:s=!1,usage:l=P.Default,xPaddingClass:d,bodyClass:f,minHeightClass:g}=i,{[W]:c,[F]:p}=i,b=se(),h=u.useMemo(()=>Pr(l,{xPaddingClass:d,bodyClass:f,minHeightClass:g}),[l,d,f,g]),D=n===L?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,A=(T=(n===L?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??D)==null?void 0:T.backgroundColor,y=u.useMemo(()=>A?[O.background(A)]:[],[A]),m=u.useMemo(()=>{const v=a==null?void 0:a.data;if(v){if(U(v))return n!==L;if(G(v))return n===L}return(D==null?void 0:D.isContentVisible)??!0},[a,D==null?void 0:D.isContentVisible,n]),M=l===P.JsonSchemaValidation&&b===0,q=b>0&&(!s||m);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":p?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",y.join(" ")].filter(Boolean).join(" "),children:[M&&o.jsx(vi,{}),q&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ye,{level:b}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m&&o.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});_e.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{var r;const e=je(),t=(r=i.diffsSeverities)==null?void 0:r[$i.AdditionalInfoRow],n=u.useMemo(()=>di(t==null?void 0:t.causedAt),[t==null?void 0:t.causedAt]);switch(e){case fi:return o.jsx(Oe,{diffType:t==null?void 0:t.type,diffTypeCause:n,hidden:!1,children:o.jsx(Ke,{left:o.jsx(_e,{...i,layoutSide:L}),right:o.jsx(_e,{...i,layoutSide:Z})})});case ui:return o.jsx(Ge,{content:o.jsx(_e,{...i,layoutSide:Z})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};function ge(i,e){return i?(e===L?i.styles.before:i.styles.after).textHighlighterColor:void 0}function Et(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Tr?e:`${i.schemaName}.${e}`}function Or(i){return i.join(", ")}const si=u.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Hr(),s=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",O.highlighter(n)].filter(Boolean).join(" "),[n]),d=o.jsx(a,{href:s,className:l,children:Et(e)});return t?d:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Zt,{text:"FK",colorSchema:Ct,inline:!0}),d]})});si.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Gr(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Lt(i,e){return!!i||!!e}function ki(i,e){return i?e===L?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Kr(i,e,t){return Lt(i,e)&&ki(e,t)}function Ce(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:s,layoutSide:l}=i;if(!Lt(r,a))return null;if(!ki(a,l))return Gr();const d=nr(a)?a==null?void 0:a.data:void 0;return o.jsx(Xi,{label:t,colorSchema:n,layoutMode:s,layoutSide:l,isNodeChanged:!1,isContentChanged:!!d,$changes:d},Br(e,t))}function Ur(i){const{columnId:e,target:t,targetDiff:n,layoutMode:r,layoutSide:a}=i,s=Wr(e,t),l=ge(n,a);if(n&&!ki(n,a))return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},s);if(!n)return o.jsx(si,{target:t},s);const d=n.data;return o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Xi,{label:"FK",colorSchema:Ct,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:d}),o.jsx(si,{target:t,hideBadge:!0,textHighlighterColor:l})]},s)}const Ve=u.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,s=je(),l=u.useMemo(()=>n??{},[n]),d=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Ce({columnId:e,label:"PK",colorSchema:Cr,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:s,layoutSide:a}),[e,l.isPrimaryKey,s,a,t.isPrimaryKey]),g=u.useMemo(()=>Kr(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=u.useMemo(()=>Ce({columnId:e,label:"unique",colorSchema:Sr,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:s,layoutSide:a}),[e,l.isUnique,s,a,t.isUnique]),p=u.useMemo(()=>g?null:Ce({columnId:e,label:"not null",colorSchema:Ar,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:s,layoutSide:a}),[e,l.isNotNull,g,s,a,t.isNotNull]),b=u.useMemo(()=>Ce({columnId:e,label:"generated",colorSchema:qr,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:s,layoutSide:a}),[e,l.isGenerated,s,a,t.isGenerated]),h=u.useMemo(()=>{const S=t.foreignKeyTargets??[];return S.length===0?[]:S.map(A=>Ur({columnId:e,target:A,targetDiff:d[En(A)],layoutMode:s,layoutSide:a}))},[e,s,a,d,t.foreignKeyTargets]),D=u.useMemo(()=>[f,c,p,b,...h].filter(Boolean),[h,b,p,f,c]);return D.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:D})});function Br(i,e){return`${i}-${e}`}function Wr(i,e){return`${i}-FK-${Et(e)}`}Ve.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Hi=u.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?o.jsx("span",{className:n,children:`${t}`}):null});Hi.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var ie=(i=>(i.Text="text",i.Block="block",i))(ie||{});function It(i){const{appearance:e}=i;return u.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const we=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ie.Text}=i,r=It({appearance:n});return o.jsx(Hi,{isVisible:e,value:t,className:r})});we.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const Ni=i=>{const{node:e,additionalInfoPrecededBy:t=R.DDL_COLUMN_ROW,isLastInList:n=!1,[W]:r}=i,a=ce(),s=e.value(),l=u.useMemo(()=>Lr(e,a),[e,a]),d=u.useMemo(()=>Ir(n,l),[n,l]),f=u.useCallback(b=>s?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(we,{isVisible:!0,value:s.columnType.label,appearance:ie.Text}),o.jsx(Ve,{columnId:e.id,layoutSide:b,value:s})]}):o.jsx(o.Fragment,{}),[e.id,s]),g=u.useCallback(b=>{const h=s==null?void 0:s.defaultValue;return Le(h)?o.jsx(ae,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[s]),c=u.useCallback(b=>{const h=s==null?void 0:s.generatedExpression;return Le(h)?o.jsx(ae,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[s]),p=u.useCallback(b=>{var h;return(h=s==null?void 0:s.enumValues)!=null&&h.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:s.enumValues.map((D,S)=>o.jsx(ae,{isVisible:!0,value:D},`${D}-${S}`))}):o.jsx(o.Fragment,{})},[s]);return s?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(te,{"data-precededby":r,[F]:d.isTitleListLastRow||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:f,usage:E.DdlApiProperty}),l.showDescription&&o.jsx(De,{"data-precededby":R.DDL_COLUMN_ROW,[F]:d.isDescriptionListLastRow||void 0,value:s.description??"",variant:H.body2,textFontWeight:"normal",textColor:Ue,usage:ee.DdlApiProperty}),l.showEnumValuesRow&&o.jsx(oe,{usage:P.DdlApiProperty,"data-precededby":t,[F]:d.isEnumAdditionalInfoListLastRow||void 0,label:qt,subheader:p}),l.showDefaultRow&&o.jsx(oe,{usage:P.DdlApiProperty,"data-precededby":Gi(l,"default")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:d.isDefaultAdditionalInfoListLastRow||void 0,label:St,subheader:g}),l.showGeneratedRow&&o.jsx(oe,{usage:P.DdlApiProperty,"data-precededby":Gi(l,"generated")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:At,subheader:c})]}):null};Ni.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ki(i,e){return i?(e===L?i.styles.before:i.styles.after).borderShadowColor:void 0}function Yr(i,e){return i?(e===L?i.styles.before:i.styles.after).isFontMuted===!0:!1}function $r(i){if(Vi(i))return Qn(i)}function Xr(i){if(Vi(i))return Zn(i)}function Jr(i){if(wt(i))return mt(i)}const Ui=new Tt;class zr{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,ct(e),t),s=this.resolveEnumValuesRowVisible(n,mi(e),t),l=this.resolveDefaultRowVisible(n,yi(e),ht(e),r,t),d=this.resolveGeneratedRowVisible(n,ni(e),t);return{showDescription:a,showEnumValuesRow:s,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:s||l||d}}resolveListLastRowFlags(e,t){return Ui.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Ui.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=ni(e);return be(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[z];return!!t&&(U(t.data)||G(t.data))}resolveDescriptionRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const s=Ie(e==null?void 0:e.defaultValue)||!!t||!!n;return X(a)&&s}resolveGeneratedRowVisible(e,t,n){return X(n)&&(Ie(e==null?void 0:e.generatedExpression)||!!t)}}const We=new zr;function Qr(i,e){return We.resolveNodeVisibility(i,e)}function Zr(i,e){return We.resolveListLastRowFlags(i,e)}function Bi(i,e){return We.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function ea(i,e){return We.resolveGeneratedExpressionSideDisplay(i,e)}function ia(i,e){return i?(e===L?i.styles.before:i.styles.after).backgroundColor:void 0}function ta(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=It({appearance:e});return u.useMemo(()=>[r,O.highlighter(t),O.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const Ci=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ie.Text,textHighlighterColor:r,backgroundColor:a}=i,s=ta({appearance:n,textHighlighterColor:r,backgroundColor:a});return o.jsx(Hi,{isVisible:e,value:t,className:s})});Ci.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function na(i){return i.text===", "||i.text===","}function li(i,e,t,n){return i.diff?o.jsx(Ci,{isVisible:!0,value:i.text,appearance:ie.Text,textHighlighterColor:ge(i.diff,t),backgroundColor:n?ia(i.diff,t):void 0},`${i.text}-${e}`):o.jsx(we,{isVisible:!0,value:i.text,appearance:ie.Text},`${i.text}-${e}`)}function ra(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(na(r)){n=!0;return}n&&(t.push(o.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(li(r,a,e,!1))}),t}const Me=u.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===B.NO_DIFFS?li({text:e.text},0,t,!1):e.kind===B.WHOLE_DIFFS?li({text:e.text,diff:e.diff},0,t,!0):o.jsx("span",{className:"inline-flex items-center",children:ra(e.segments,t)})});Me.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function aa(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function oa(i,e,t){return i.diff?o.jsx(Ci,{isVisible:!0,value:i.text,appearance:ie.Text,textHighlighterColor:ge(i.diff,t)},`${i.text}-${e}`):o.jsx(we,{isVisible:!0,value:i.text,appearance:ie.Text},`${i.text}-${e}`)}const Mt=u.memo(i=>{const{node:e,layoutSide:t}=i,n=Fn(e,t);if(n.kind===B.NO_DIFFS||n.kind===B.WHOLE_DIFFS)return o.jsx(Me,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=aa(n.segments);return o.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((s,l)=>oa(s,l,t)),a.length>0&&o.jsx(Me,{layoutSide:t,display:{kind:B.PARTIAL_DIFFS,segments:a}})]})});Mt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const jt=i=>{const{node:e,additionalInfoPrecededBy:t=R.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[W]:a}=i,s=ce(),l=e.value(),d=u.useMemo(()=>Ht(e),[e]),f=u.useMemo(()=>Nt(e),[e]),g=u.useMemo(()=>Xr(e),[e]),c=u.useMemo(()=>$r(e),[e]),p=u.useMemo(()=>ct(e),[e]),b=u.useMemo(()=>ni(e),[e]),h=u.useMemo(()=>mi(e),[e]),D=u.useMemo(()=>er(e),[e]),S=u.useMemo(()=>yi(e),[e]),A=u.useMemo(()=>ht(e),[e]),y=u.useMemo(()=>Qr(e,s),[e,s]),m=u.useMemo(()=>Zr(n,y),[n,y]),M=u.useCallback(V=>l?ft(d,V)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(Mt,{node:e,layoutSide:V}),o.jsx(Ve,{columnId:e.id,layoutSide:V,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[g,c,e,d,l]),q=u.useCallback(V=>{const w=ir(e,V);return w===void 0?o.jsx(o.Fragment,{}):o.jsx(ae,{isVisible:!0,value:w,textHighlighterColor:ge(S,V),borderShadowColor:Ki(S,V)})},[S,e]),T=u.useCallback(V=>{const w=ea(e,V);return w===void 0?o.jsx(o.Fragment,{}):o.jsx(ae,{isVisible:!0,value:w,textHighlighterColor:ge(b,V)})},[b,e]),v=u.useCallback(V=>{const w=tr(e,V);return w.length===0?o.jsx(o.Fragment,{}):o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w.map((N,x)=>o.jsx(ae,{isVisible:!0,value:N.literal,textHighlighterColor:ge(N.diff,V),borderShadowColor:Ki(N.diff,V),isFontMuted:Yr(N.diff,V)},`${N.literal}-${x}`))})},[e]);return l?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(te,{"data-precededby":a,[F]:m.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:M,usage:E.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),y.showDescription&&o.jsx(De,{"data-precededby":R.DDL_COLUMN_ROW,[F]:m.isDescriptionListLastRow||void 0,value:l.description??"",variant:H.body2,textFontWeight:"normal",textColor:Ue,usage:ee.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),y.showEnumValuesRow&&o.jsx(oe,{usage:P.DdlApiProperty,"data-precededby":t,[F]:m.isEnumAdditionalInfoListLastRow||void 0,label:qt,subheader:v,colorizingDiff:D,diffsSeverities:h||D?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),y.showDefaultRow&&o.jsx(oe,{usage:P.DdlApiProperty,"data-precededby":Bi(y,"default")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:m.isDefaultAdditionalInfoListLastRow||void 0,label:St,subheader:q,colorizingDiff:A,diffsSeverities:S||A?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),y.showGeneratedRow&&o.jsx(oe,{usage:P.DdlApiProperty,"data-precededby":Bi(y,"generated")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:m.isGeneratedAdditionalInfoListLastRow||void 0,label:At,subheader:T,diff:b,colorizingDiff:e.diffs[z],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};jt.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ft(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,s=t?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:R.DDL_COLUMN_ROW,l=t?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:R.DDL_COLUMN_ROW,d={columnNode:n,titlePrecededBy:s,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&_r(n.value()),d})}const sa=i=>{const{node:e,[W]:t}=i;return Vr(e)?o.jsx(da,{"data-precededby":t,node:e}):o.jsx(la,{"data-precededby":t,node:e})},la=i=>{const{node:e,[W]:t}=i,n=se(),r=ce(),a=e.value(),s=xt(e.childrenNodes()),l=r===Ji,d=u.useMemo(()=>Ft(s,l),[s,l]);return s.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(te,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:E.DdlApiSection}),o.jsx(Fe.Provider,{value:n+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>o.jsx(Ni,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},da=i=>{const{node:e,[W]:t}=i,n=se(),r=ce(),a=e.value(),s=xt(e.childrenNodes()),l=r===Ji,d=u.useMemo(()=>Be(ve(e)),[e]),f=u.useMemo(()=>Ft(s,l),[s,l]),g=u.useMemo(()=>gt(e),[e]);return s.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(te,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:E.DdlApiSection,...d}),o.jsx(Fe.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:b,isLastInList:h})=>Vi(c)?o.jsx(jt,{"data-precededby":p,additionalInfoPrecededBy:b,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):o.jsx(Ni,{"data-precededby":p,additionalInfoPrecededBy:b,isLastInList:h,node:c},c.id))})]})};sa.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Rt=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return X(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const Pt=new Rt;function ua(i,e){return Pt.resolveNodeVisibility(i,e)}function fa(i,e){return Pt.resolveListLastRowFlags(i,e)}const Si=i=>{const{node:e,isLastInList:t=!1,[W]:n}=i,r=ce(),a=e.value(),s=u.useMemo(()=>ua(e,r),[e,r]),l=u.useMemo(()=>fa(t,s),[t,s]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(c=>{if(!a)return o.jsx(o.Fragment,{});const p=Or(a.partNames);return o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&o.jsx(we,{isVisible:!0,value:`(${p})`,appearance:ie.Text}),o.jsx(Ve,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=s.showDescription;return a?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(te,{"data-precededby":n,[F]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:H.body2,subheader:s.showSubheader?f:void 0,usage:E.DdlApiProperty}),g&&o.jsx(De,{"data-precededby":R.DDL_INDEX_ROW,[F]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:Ue,usage:ee.DdlApiProperty})]}):null};Si.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ga=new Rt;class ca{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,pt(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=mt(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return ga.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const Ot=new ca;function pa(i,e){return Ot.resolveNodeVisibility(i,e)}function ha(i,e){return Ot.resolveListLastRowFlags(i,e)}const Gt=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[W]:r}=i,a=ce(),s=e.value(),l=u.useMemo(()=>pa(e,a),[e,a]),d=u.useMemo(()=>ha(t,l),[t,l]),f=u.useMemo(()=>Ht(e),[e]),g=u.useMemo(()=>Nt(e),[e]),c=u.useMemo(()=>Jr(e),[e]),p=u.useMemo(()=>pt(e),[e]),b=(s==null?void 0:s.indexName)??"",h=u.useCallback(A=>{const y=Bn(e,A);return o.jsx(Me,{layoutSide:A,display:y})},[e]),D=u.useCallback(A=>{if(!s)return o.jsx(o.Fragment,{});if(!ft(f,A))return o.jsx(o.Fragment,{});const y=s.partNames.length>0;return o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[y&&h(A),o.jsx(Ve,{columnId:e.id,layoutSide:A,value:s,flagDiffs:c})]})},[c,e.id,f,h,s]),S=l.showDescription;return s?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(te,{"data-precededby":r,[F]:d.isTitleListLastRow||void 0,value:b,expandable:!1,expanded:!0,variant:H.body2,subheader:l.showSubheader?D:void 0,usage:E.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),S&&o.jsx(De,{"data-precededby":R.DDL_INDEX_ROW,[F]:d.isDescriptionListLastRow||void 0,value:s.description??"",variant:H.body1,textFontWeight:"normal",textColor:Ue,usage:ee.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Gt.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Kt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:R.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const ma=i=>{const{node:e,[W]:t}=i;return wr(e)?o.jsx(ba,{"data-precededby":t,node:e}):o.jsx(ya,{"data-precededby":t,node:e})},ya=i=>{const{node:e,[W]:t}=i,n=se(),r=e.value(),a=kt(e.childrenNodes()),s=u.useMemo(()=>Kt(a),[a]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(te,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:E.DdlApiSection}),o.jsx(Fe.Provider,{value:n+1,children:s.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>o.jsx(Si,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},ba=i=>{const{node:e,[W]:t}=i,n=se(),r=e.value(),a=kt(e.childrenNodes()),s=u.useMemo(()=>Be(ve(e)),[e]),l=u.useMemo(()=>Kt(a),[a]),d=u.useMemo(()=>gt(e),[e]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(te,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:E.DdlApiSection,...s}),o.jsx(Fe.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>wt(f)?o.jsx(Gt,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):o.jsx(Si,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};ma.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Xe as $,W as A,Ia as B,sa as C,Tr as D,pe as E,_a as F,Ea as G,yn as H,ma as I,Ma as J,La as K,Zi as L,ge as M,Oe as N,Ge as O,R as P,Ke as Q,Ua as R,le as S,te as T,Ka as U,$n as V,Fa as W,bi as X,Ra as Y,Ga as Z,en as _,xr as a,tn as a0,ln as a1,dn as a2,rn as a3,an as a4,nn as a5,ne as a6,Qi as a7,Ha as a8,zi as a9,xi as aA,Ki as aB,Yr as aC,Pa as aD,oe as aE,P as aF,Mn as aG,In as aH,Ln as aI,Na as aa,ka as ab,xa as ac,Sa as ad,Aa as ae,yt as af,rr as ag,cr as ah,pr as ai,ve as aj,Be as ak,E as al,qa as am,X as an,be as ao,B as ap,ri as aq,Me as ar,Ci as as,ie as at,we as au,ee as av,Di as aw,vi as ax,zn as ay,ae as az,H as b,De as c,Ue as d,on as e,ja as f,Oa as g,Dr as h,vr as i,kr as j,Nr as k,C as l,An as m,Je as n,En as o,Nn as p,at as q,Ta as r,it as s,Ca as t,pi as u,Pe as v,I as w,tt as x,nt as y,bn as z};
