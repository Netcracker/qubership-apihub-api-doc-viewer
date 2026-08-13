var It=Object.defineProperty;var Mt=(i,e,t)=>e in i?It(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var k=(i,e,t)=>(Mt(i,typeof e!="symbol"?e+"":e,t),t);import{t as K,v as G,w as ze,x as X,Z as Ft,_ as he,$ as qe,N as z,a0 as Ri,P as T,a1 as jt,a2 as Rt,K as Ve,Q as Pt,M as we,a3 as Ot,U as E,H as de,a4 as Je,a5 as Ne,a6 as Gt,W as J,V as P,a7 as Pi,a8 as re,a9 as Te,X as Ie,R as Oi,Y as ai,l as oi,S as si,aa as Kt,ab as Ut,y as Bt,ac as _e,ad as Wt,ae as Gi,u as fe,f as Me,h as Ki}from"./DiffBadge-9c27b9bd.js";import{j as s}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const ie={SIMPLE:"simple",COMPLEX:"complex"};class Fe{constructor(e="#",t="",n,r,a){k(this,"type");k(this,"parent");k(this,"container");k(this,"newDataLevel");k(this,"_value");k(this,"_meta");k(this,"_childrenNodes",[]);k(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=ie.SIMPLE,value:l=null,parent:u=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=u,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new Fe(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ie.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class li extends Fe{constructor(t="#",n="",r,a,o){super(t,n,r,a,o);k(this,"type");this.id=t,this.key=n,this.kind=r,this.type=o.type}createCycledClone(t,n,r){const a=new li(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class Yt{constructor(){k(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const o=new Fe(e,t,n,r,a);return this.nodes.set(e,o),o}createComplexNode(e,t,n,r,a){const o=new li(e,t,n,r,a);return this.nodes.set(e,o),o}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const $t={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Xt=Object.values($t);new Set(Xt);class je{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!S(e))return!1;for(const t of Object.values(e))if(!je.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return S(t)&&(K(t)||G(t)||ze(t)||X(t))}}function S(i){return Ui(i)&&!Array.isArray(i)}function Ui(i){return typeof i=="object"&&i!==null}function zt(i){return S(i)&&Object.keys(i).every(e=>typeof e=="string")}function $e(i){return Array.isArray(i)}function pa(i,e,t){let n=i,r=!1;for(const a of e){if(!S(n)&&!$e(n))return;if(r){let l;Ui(n)&&(l=n[a]),!l&&$e(n)&&t&&(l=n.find(u=>S(u)&&u[t]===a)),n=l,r=!1;continue}n=n[a],$e(n)&&(r=!0)}return n}function ma(i,e){return Object.keys(i).find(t=>i[t]===e)}function ya(i){if(je.isDiffsRecord(i))return i}class Jt{constructor(){k(this,"tree",null)}pick(e,t){if(!S(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?n[a]=[...o]:S(o)?n[a]={...o}:n[a]=o}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class Bi{constructor(){k(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const ke=()=>{},Qt=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ke,info:ke,warn:ke,error:ke};class ba{constructor(){k(this,"fragments",new Map);k(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Ci(i,e){return"#"+Ft([...i,...e])}function Da(i,e){const t=new Bi,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function va(i){return Array.isArray(i)?i.length>0:S(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function Zt(i){return i==null||!S(i)&&!he(i)}function en(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:l,isSimpleNode:u,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=Zt,shouldStopAfterNodeCreation:m,lazy:p}=i;return[({value:y,state:h,key:x,path:A})=>{if(typeof x=="symbol")return;if(!S(y)&&!he(y))return{value:y};const{ancestors:N,parent:_,container:q,pathPrefix:b=[]}=h,v=N.get(y);if(!v||!u(v)&&!f(v))return{value:y};if(!_||!u(_))return{value:y};const M=Ci(b,A),V=g(x,y),U=t.createCycledClone(v,M,V,_);return q?q.addNestedNode(U):_&&_.addChildNode(U),{done:!0}},({key:y,value:h,path:x,state:A,rules:N})=>!N||!Array.isArray(N.transformers)?void 0:{value:N.transformers.reduce((b,v)=>v(y,b,e,x,A),h)},({key:y,value:h,path:x,rules:A,state:N})=>{if(!A)return{done:!0};if(typeof y=="symbol")return{done:!0};if(c(h))return{done:!0};if(!A.kind||!n.includes(A.kind))return;const{parent:_,container:q,ancestors:b,pathPrefix:v=[],depth:M=0,materializeDepth:V}=N,U=Ci(v,x),oe=g(y,h),{kind:ve,complex:Y=!1}=A,se=a(h,_,q),F=r(U,oe,ve,Y,se);if(!F)return;q?q.addNestedNode(F):_&&_.addChildNode(F),p&&(S(h)||he(h))&&p.state.rememberFragment(U,h);let wi=h;if(m!=null&&m(F,h)){const Ye=_?_.descendantDiffs:void 0;if(!Ye||!(y in Ye))return{done:!0};const xi=Ye[y];if(!xi)return{done:!0};const{data:Ni}=xi;X(Ni)&&(wi=Ni.beforeValue)}const ki=M+(se.newDataLevel?1:0),Hi=!!(p&&u(F)&&V!==void 0&&ki>=V&&(S(h)||he(h))&&p.resolveHasOwnChildren(h,A));Hi&&p.state.defer({nodeId:U,fragment:h,path:[...v,...x],rules:A});const We=S(h)||he(h);We&&b.enter(h,F);let ce;return u(F)?ce=o(N,F):ce=l(N,F),ce={...ce,depth:ki,materializeDepth:N.materializeDepth,pathPrefix:N.pathPrefix},Hi?{done:!0,exitHook:We?()=>{b.leave(h)}:void 0}:{value:wi,state:ce,exitHook:We?()=>{b.leave(h)}:void 0}}]}class tn{}class ae{constructor(e="#",t="",n,r,a){k(this,"type");k(this,"parent");k(this,"container");k(this,"newDataLevel");k(this,"_value");k(this,"_meta");k(this,"_childrenNodes",[]);k(this,"_nestedNodes",[]);k(this,"_diffs",{});k(this,"_diffsSummary",new Set);k(this,"_descendantDiffs",{});k(this,"_descendantDiffsSummary",new Set);k(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=ie.SIMPLE,value:l=null,parent:u=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=u,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new ae(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ie.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class nn extends Yt{constructor(){super()}}const I={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Wi=Object.values(I),Yi="<unnamed>";function rn(i){return i??Yi}function $i(i){return i!==Yi}function an(i,e){return e.indexName&&$i(e.indexName)?e.indexName:i}function Va(i,e,t){return t||(e!=null&&e.indexName&&$i(e.indexName)?e.indexName:String(i))}function Qe(i=I.TABLE){return{"/columns":{"/items":{"/*":()=>Qe(I.COLUMN)},kind:I.COLUMNS},"/indexes":{"/items":{"/*":()=>Qe(I.INDEX)},kind:I.INDEXES},kind:i}}const Si={Identity:"identity",Expression:"expression"};function on(i){return i.kind===qe.Literal&&typeof i.value=="string"}function sn(i){return i.kind===qe.RawExpr&&typeof i.expr=="string"}function ln(i){return S(i)&&typeof i.expr=="string"}function dn(i){return S(i)&&typeof i.value=="string"}const ge="titleRow",un=["typeName","size","precision","scale","label"],wa={ToEnum:"to-enum",FromEnum:"from-enum"},ka={Lost:"lost",Gained:"gained"},Xi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],zi=["isUnique"],Ha=[z,ge,"tableName","schemaName","description"],xa=[z,ge,"columnName","description","generatedExpression",...Xi],Na=[z,ge,"indexName","description",...zi];function fn(i){if(!S(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!S(t)||!("before"in t)||!("after"in t)?!1:je.isDiff(e)}function Ji(i){return fn(i[ge])}function gn(i){return S(i)&&i.kind===Ri.Domain&&typeof i.type=="string"}function cn(i){return i.kind===T.BoolType&&typeof i.type=="string"}function hn(i){return i.kind===T.IntegerType&&typeof i.type=="string"}function Ai(i){return i.kind===T.DecimalType&&typeof i.type=="string"}function qi(i){return i.kind===T.FloatType&&typeof i.type=="string"}function Ti(i){return i.kind===T.StringType&&typeof i.type=="string"}function _i(i){return i.kind===T.BinaryType&&typeof i.type=="string"}function Ei(i){return i.kind===T.TimeType&&typeof i.type=="string"}function pn(i){return i.kind===T.JSONType&&typeof i.type=="string"}function mn(i){return i.kind===T.SpatialType&&typeof i.type=="string"}function yn(i){return i.kind===T.UUIDType&&typeof i.type=="string"}function Xe(i){return i.kind===T.EnumType&&Array.isArray(i.values)}function bn(i){return i.kind===T.UnsupportedType&&typeof i.type=="string"}function Li(i){return typeof i.type=="string"}function di(i){switch(i.kind){case qe.Literal:return on(i)?i.value:i.kind;case qe.RawExpr:return sn(i)?i.expr:i.kind;case jt.NamedDefault:try{return di(Rt(i))}catch{return i.kind}default:return ln(i)?i.expr:dn(i)?i.value:i.kind}}function Qi(i){return Zi(di(i))}function Dn(i){return Zi(i)}function Zi(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const vn="Columns",Vn="Indexes";class wn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=Ve(t.attrs,we.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:vn,items:(t.columns??[]).map(a=>this.buildColumnRowValue(e,t,a,n.schemaName))},indexes:{title:Vn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:S(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return S(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!S(e)||typeof e.tableName!="string"||!S(e.columns)||!Array.isArray(e.columns.items)||!S(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,r){var H,y,h;const a=Ve(n.attrs,we.Comment),o=(H=n.attrs)==null?void 0:H.find(x=>x.kind===Pt.Identity),l=Ve(n.attrs,we.GeneratedExpr),u=o!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(x=>this.buildForeignKeyTarget(e,x,n,r)).filter(x=>x!==void 0),c=g.length>0,m=this.formatColumnType(n.type),p=(y=n.type)==null?void 0:y.type,D=p&&Xe(p)?p.values:void 0,w=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:m,...D?{enumValues:D}:{},isPrimaryKey:w,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:u,...o?{generatedBy:Si.Identity}:{},...l&&!o?{generatedBy:Si.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!w&&((h=n.type)==null?void 0:h.null)===!1,...n.default!==void 0?{defaultValue:Qi(n.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=Ve(e.attrs,we.Comment);return{indexName:rn(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const r of e.schemas)if((n=r.tables)!=null&&n.some(a=>a===t))return r.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isSingleColumnIndexForColumn(e,t){var n,r;return(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,t))})}buildForeignKeyTarget(e,t,n,r){var f,g;const a=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(a<0)return;const o=t.refTable,l=(g=t.refColumns)==null?void 0:g[a];if(!o||!l)return;const u=this.resolveForeignKeyTargetSchemaName(e,o,r);if(u)return{schemaName:u,tableName:o.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const r=this.findSchemaNameForTable(e,t);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,t.name);return a||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===t)}).map(r=>r.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(gn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return cn(e)?{kind:T.BoolType,typeName:e.type,label:t}:hn(e)?{kind:T.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ai(e)?{kind:T.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:qi(e)?{kind:T.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ti(e)?{kind:T.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:_i(e)?{kind:T.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Ei(e)?{kind:T.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:pn(e)?{kind:T.JSONType,typeName:e.type,label:t}:mn(e)?{kind:T.SpatialType,typeName:e.type,label:t}:yn(e)?{kind:T.UUIDType,typeName:e.type,label:t}:Xe(e)?{kind:T.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:bn(e)?{kind:T.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Li(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Ri.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Ai(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ti(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):_i(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):qi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Ei(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Xe(e)?t=e.type??e.values[0]??"enum":Li(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?di(e.expr):""}}function kn(i){return en(i)}const Hn=new Set([I.TABLE,I.COLUMNS,I.COLUMN,I.INDEXES,I.INDEX]);class ui extends tn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!zt(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,ui.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Hn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case I.TABLE:return["tableName","schemaName","description"];case I.COLUMNS:case I.INDEXES:return["title"];case I.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case I.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const xn="[DDL API]";class Ca extends Jt{constructor(t){const{source:n,tableKey:r,logger:a=Qt()}=t;super();k(this,"tree");k(this,"source");k(this,"tableKey");k(this,"logger");k(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!S(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new Bi},r=Qe(),a=kn({source:t,tree:this.tree,supportedNodeKinds:Wi,createNodeFromRaw:(o,l,u,f,g)=>this.createNodeFromRaw(o,l,u,f,g),createNodeParams:(o,l,u)=>({value:S(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:l,container:u}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l)});return Ot(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return xn}createTree(){return new nn}createNodeDataBuilder(){return new ui}prepareSource(){return new wn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,o){const{parent:l,container:u,newDataLevel:f}=o;if(a){const p=this.createNodeMeta(n,o),D={type:ie.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(u),value:null,meta:p,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,D)}const g=this.createNodeValue(n,r,o),c=this.createNodeMeta(n,o),m={type:ie.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(u),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,m)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(o,l)=>this.pick(o,l))}resolveNodeKey(t,n){return S(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?an(t,n):t:t}isSimpleTreeNode(t){return t.type===ie.SIMPLE}isComplexTreeNode(t){return t.type===ie.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function Nn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const B={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function et(i,e,t){const n=t===E,r=new Set,a=[],o=u=>{const f=e==null?void 0:e[u];if(f)return f;for(const g of Object.values(e??{}))if(g&&X(g.data)&&g.data.afterValue===u)return g};for(const u of i){const f=o(u);if(!f){a.push({text:u});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(K(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(G(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(X(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:u:typeof g.afterValue=="string"?g.afterValue:u;a.push({text:c,diff:f})}}for(const[u,f]of Object.entries(e??{}))!f||r.has(f)||G(f.data)&&n&&(a.push({text:u,diff:f}),r.add(f));const l=u=>{const f=i.indexOf(u);return f>=0?f:i.length};return a.sort((u,f)=>l(u.text)-l(f.text))}function it(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function pe(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===E;return K(n)?r?void 0:String(n.afterValue??i??""):G(n)?r?String(n.beforeValue??i??""):void 0:X(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function Cn(i,e){return(e===E?i.styles.before:i.styles.after).isContentVisible}const tt=["size","precision","scale"];function Sn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function An(i,e){var f;const t=(f=i.value())==null?void 0:f.columnType;if(!t)return{kind:B.NO_DIFFS,text:""};const n=Sn(i);if(!n)return{kind:B.NO_DIFFS,text:t.label};const r=n.typeName??n.label,a=n.typeName?"typeName":"label";if(qn(n)){const g=Object.values(n).find(Boolean);return g?{kind:B.WHOLE_DIFFS,text:Tn(t,n,a,e),diff:Ln(g)}:{kind:B.NO_DIFFS,text:t.label}}const o=[],l=pe(Ze(t),r,e);l!==void 0&&o.push({text:l,diff:r});const u=_n(t,n,e);return o.push(...u),o.length===0?{kind:B.NO_DIFFS,text:t.label}:{kind:B.PARTIAL_DIFFS,segments:o}}function qn(i){const e=un.map(n=>[n,i[n]]).filter(n=>!!n[1]);if(e.length===0)return!1;if(e.length===1){const[n]=e[0];return n==="typeName"||n==="label"}return new Set(e.map(([,n])=>n.data.action)).size===1}function Tn(i,e,t,n){const r=pe(Ze(i),e[t],n)??Ze(i),a=[];for(const o of tt){const l=pe(fi(i,o),e[o],n);l!==void 0&&a.push(l)}return a.length===0?r:`${r} (${a.join(", ")})`}function _n(i,e,t){const n=En(i,e,t);if(n.length===0)return[];const r=n.flatMap(a=>{const o=pe(fi(i,a),e[a],t);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...it(r,"spaced")]}function En(i,e,t){return tt.filter(n=>{const r=e[n];return r?Cn(r,t):fi(i,n)!==void 0})}function Ze(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function fi(i,e){if(!(e in i))return;const t=Reflect.get(i,e);return typeof t=="number"?t:void 0}function Ln(i){const{data:e}=i;return X(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Yellow}}}:K(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Green}}}:G(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function In(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Mn(i,e){var o;const t=((o=i.value())==null?void 0:o.partNames)??[],n=In(i),r=n?et(t,n,e):t.map(l=>({text:l})),a=it(r,"tight");return a.length===0?{kind:B.NO_DIFFS,text:""}:{kind:B.PARTIAL_DIFFS,segments:a}}function Fn(i){if(Ji(i.diffs))return i.diffs[ge]}function jn(i){const e=i.diffs[z];if(e&&(K(e.data)||G(e.data)))return e}function Rn(i){return i.diffs.schemaName}function Sa(i){return i.diffs.description}function Aa(i,e){var o;const t=((o=i.value())==null?void 0:o.schemaName)??"",n=Rn(i);if(!n)return t;const r=n.data,a=e===E;return K(r)?a?"":t:G(r)?a?t:"":X(r)?a?typeof r.beforeValue=="string"?r.beforeValue:t:typeof r.afterValue=="string"?r.afterValue:t:t}function Pn(i){if(Ji(i.diffs))return i.diffs[ge]}function On(i){const e=i.diffs[z];if(e&&(K(e.data)||G(e.data)))return e}function nt(i,e){return i?(e===E?i.styles.before:i.styles.after).isHeaderVisible:!0}function Gn(i,e){return i?(e===E?i.styles.before:i.styles.after).isContentVisible:!0}function rt(i){const e=i.diffs[z];return e?K(e.data)||G(e.data):!1}function Kn(i){const t=i.diffs.foreignKeyTargetDiffs;if(!(!t||Object.keys(t).length===0))return t}function Un(i){const e={};let t=!1;for(const n of Xi){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function ei(i){return i.diffs.generatedExpression}function at(i){return i.diffs.description}function ot(i){return i.diffs.description}function gi(i){const t=i.diffs.enumValueDiffs;if(!(!t||Object.keys(t).length===0))return t}function Bn(i){return i.diffs.enumValuesRowColorizingDiff}function ci(i){return i.diffs.defaultValue}function st(i){return i.diffs.defaultValueRowColorizingDiff}function Wn(i,e){var o;const t=(o=i.value())==null?void 0:o.defaultValue,n=ci(i),r=e===E;if(!n){const l=i.diffs[z];if(l){const u=l.data;if(K(u))return r?void 0:t;if(G(u))return r?t:void 0}return t}const a=n.data;return K(a)?r?void 0:t??He(a.afterValue):G(a)?r?He(a.beforeValue)??t:void 0:X(a)?r?He(a.beforeValue)??t:He(a.afterValue)??t:t}function He(i){if(typeof i=="string")return Dn(i);if(S(i)&&"kind"in i)return Qi(i)}function Yn(i,e){var t;return et(((t=i.value())==null?void 0:t.enumValues)??[],gi(i),e).map(({text:n,diff:r})=>({literal:n,diff:r}))}function lt(i){const e={};let t=!1;for(const n of zi){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function $n(i){return i?i.highlightingMode.get(Je.Default)!==Ne.Invisible:!1}const Xn=d.createContext(!1),Re=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:s.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[s.jsx(Gt,{variant:t,message:n}),e]})};Re.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Pe=d.memo(i=>{const{content:e}=i;return s.jsx("div",{className:"flex flex-row w-full",children:e})});Pe.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Oe=d.memo(i=>{const{left:e,right:t}=i;return s.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[s.jsx("div",{className:"flex w-1/2",children:e}),s.jsx("div",{className:"flex w-1/2",children:t})]})});Oe.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ge="px-4",zn="",Jn="px-4",hi="";var L=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(L||{});var C=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(C||{});const Qn=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=d.useCallback(()=>{n==null||n(o=>!o)},[n]);return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"mt-1",children:s.jsx("a",{className:`text-value-expander ${ir(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},dt=d.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:o,highlightingMode:l=Ne.Default}=i,u=l===Ne.Default,f=l===Ne.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:m,textColor:p,label:D}=i,[w,H]=d.useState(!1),y=d.useCallback((q,b,v)=>{if(v)return null;const M=f?"":b.join(" "),V=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),U=`${V} ${M}`.trim(),oe={onClick:r,...p!=null&&p.trim()?{style:{color:p}}:{}};q=w?q:er(q);const ve=(Y,se)=>{const F={...oe,className:se};switch(t){case C.h1:return s.jsx("h1",{...F,children:Y});case C.h2:return s.jsx("h2",{...F,children:Y});case C.h3:return s.jsx("h3",{...F,children:Y});case C.h4:return s.jsx("h4",{...F,children:Y});case C.h5:return s.jsx("h5",{...F,children:Y});case C.h6:return s.jsx("h6",{...F,children:Y});case C.body1:return s.jsx("span",{...F,className:`${se} text-value-body1`.trim(),children:Y});case C.body2:return s.jsx("span",{...F,className:`${se} text-value-body2`.trim(),children:Y})}};return D?ve(s.jsxs(s.Fragment,{children:[s.jsx("span",{className:c?`font-${c}`:"font-bold",style:m!=null&&m.trim()?{color:m}:{},children:`${D}: `}),s.jsx("span",{className:M,children:q})]}),V):ve(q,U)},[w,f,D,m,c,r,p,g,t]),h=d.useCallback(q=>{const b=[];let v=q,M=!1;if(a){const{data:V,styles:U}=a;switch(n){case E:b.push(P.highlighter(U.before.textHighlighterColor)),u&&(G(V)&&(v=le(V.beforeValue)?V.beforeValue:v),X(V)&&(o===L.JsoProperty&&!f&&b.push(P.highlighter(de.Yellow)),v=le(V.beforeValue)?V.beforeValue:v),ze(V)&&(v=le(V.beforeKey)?V.beforeKey:v)),K(V)&&(M=!0);break;case J:b.push(P.highlighter(U.after.textHighlighterColor)),u&&(K(V)&&(v=le(V.afterValue)?V.afterValue:v),X(V)&&(o===L.JsoProperty&&!f&&b.push(P.highlighter(de.Yellow)),v=le(V.afterValue)?V.afterValue:v),ze(V)&&(v=le(V.afterKey)?V.afterKey:v)),G(V)&&(M=!0);break}}return[v,b,M]},[a,u,f,n,o]),[x,A,N]=h(e);return d.useMemo(()=>s.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(x,A,N),!N&&s.jsx(Qn,{isExpandable:Zn(x),expanded:w,setExpanded:H,variant:t})]}),[y,x,A,N,w,H,t])}),ii=5,ti=300;function Zn(i){return i?i.length>ti||Pi.trim(i.split(`
`)).length>ii:!1}function er(i){if(!i)return;if(i.length>ti)return i.slice(0,ti)+"...";const e=Pi.trim(i.split(`
`));return e.length>ii?e.slice(0,ii).join(`
`)+"...":i}function le(i){return typeof i=="string"}function ir(i){switch(i){case C.h1:return"text-value-expander--h1";case C.h2:return"text-value-expander--h2";case C.h3:return"text-value-expander--h3";case C.h4:return"text-value-expander--h4";case C.h5:return"text-value-expander--h5";case C.h6:return"text-value-expander--h6";case C.body1:return"text-value-expander--body1";case C.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const W="data-precededby",j="data-ddl-list-last-row";var R=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(R||{}),Q=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Q||{});const tr={[Q.DdlApiProperty]:hi},nr={[Q.DdlApiProperty]:["min-h-[26px]"]};function rr(i){const e=tr[i]??Ge,t=nr[i]??[];return[e,...t].join(" ")}const Ce=d.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=Q.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:l,textFontWeight:u,labelColor:f,textColor:g}=i,{[W]:c}=i,{diff:m,descendantDiffs:p,diffsSeverities:D}=i,w=re(),H=r===Q.DdlApiProperty,y=d.useMemo(()=>!a||Gn(m,n),[m,a,n]),h=H&&w>0&&y,x=d.useMemo(()=>{if(!m)return[];const{data:_,styles:q}=m;if(!_)return[];const b=[];return n===E&&b.push(P.background(q.before.backgroundColor)),n===J&&b.push(P.background(q.after.backgroundColor)),b},[m,n]),A=d.useMemo(()=>rr(r),[r]),N=s.jsx(dt,{label:o,labelFontWeight:l,textFontWeight:u,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:m});return s.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${H?"items-stretch":""} ${A} gap-2 ${x.join(" ")}`,children:[h&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(Te,{level:w}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),H?s.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:N}):N]})});Ce.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const me=d.memo(i=>{const e=Ie(),{diffsSeverities:t,diffsSeverityPlacement:n=Oi.DescriptionRow}=i,r=d.useMemo(()=>t==null?void 0:t[n],[t,n]),a=d.useMemo(()=>r==null?void 0:r.type,[r]),o=d.useMemo(()=>ai(r==null?void 0:r.causedAt),[r]);switch(e){case si:return s.jsx(Re,{diffType:a,diffTypeCause:o,hidden:!1,children:s.jsx(Oe,{left:s.jsx(Ce,{...i,layoutSide:E}),right:s.jsx(Ce,{...i,layoutSide:J})})});case oi:return s.jsx(Pe,{content:s.jsx(Ce,{...i,layoutSide:J})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});me.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Ke="#353C4E",ar=d.createContext(void 0);function or(){return d.useContext(ar)}const ut=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=d.useContext(Xn),o=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:s.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&s.jsx(Kt,{short:e}),e&&t!==void 0&&s.jsx(Ut,{onToggle:l,expanded:t})]})};ut.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const sr={[L.JsoProperty]:zn,[L.DdlApiSection]:Jn,[L.DdlApiProperty]:hi},lr={[L.JsoProperty]:["min-h-[26px]"],[L.DdlApiProperty]:["min-h-[26px]"]};function dr(i){const e=sr[i]??Ge,t=lr[i]??[];return[e,...t].join(" ")}const Se=d.memo(i=>{const{expandable:e,expanded:t,onClickExpander:n,value:r,variant:a,layoutSide:o,enableHeader:l=!0,enableHeaderValue:u=!0,subheader:f,usage:g=L.Default,highlightingMode:c=Bt,hideLevelIndicatorWhenSideEmpty:m=!1}=i,{diff:p,descendantDiffs:D,diffsSeverities:w}=i,{[W]:H,[j]:y}=i,h=d.useMemo(()=>{switch(g){case L.Default:return c.get(Je.Default);case L.AsyncApiJsoSection:case L.JsoProperty:return c.get(Je.JsoPropertyKey)}},[c,g]),x=re(),A=or(),N=d.useMemo(()=>A?o===E?A.beforeLevel:A.afterLevel:x,[o,x,A]),_=d.useMemo(()=>{const V=[];if(!p)return V;const{data:U,styles:oe}=p;return U&&(o===E&&V.push(P.background(oe.before.backgroundColor)),o===J&&V.push(P.background(oe.after.backgroundColor))),V},[p,o]),q=d.useMemo(()=>u?s.jsx(dt,{"data-precededby":H,value:r,variant:a,layoutSide:o,diff:p,usage:g,highlightingMode:h,onClick:n}):null,[u,H,r,a,o,p,g,h,n]),b=g===L.DdlApiProperty,v=d.useMemo(()=>l?s.jsxs(s.Fragment,{children:[(e||N>0)&&s.jsxs("div",{"data-precededby":H,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(Te,{level:N}),s.jsx(ut,{expandable:e,expanded:t,onClick:n,level:N})]}),!b&&q]}):m?null:N>0&&s.jsx(Te,{level:N}),[l,e,t,q,m,b,N,n,H]),M=d.useMemo(()=>dr(g),[g]);return s.jsxs("div",{"data-precededby":H,"data-ddl-list-last-row":y?!0:void 0,"data-usage":g!==L.Default?g:void 0,className:`title-row-content flex w-full ${b?"items-stretch":"items-center"} h-full ${M} gap-2 ${_.join(" ")}`,children:[v,b?s.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[q,f==null?void 0:f(o)]}):f==null?void 0:f(o)]})});Se.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(i=>{const e=Ie(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=d.useMemo(()=>n==null?void 0:n["title-row"],[n]),o=d.useMemo(()=>a==null?void 0:a.type,[a]),l=d.useMemo(()=>ai(a==null?void 0:a.causedAt),[a]);switch(e){case si:return s.jsx(Re,{diffType:o,diffTypeCause:l,hidden:!1,children:s.jsx(Oe,{left:s.jsx(Se,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:E}),right:s.jsx(Se,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:J})})});case oi:return s.jsx(Pe,{content:s.jsx(Se,{...i,layoutSide:J})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function qa(i,e){return d.useMemo(()=>e(i)?ye(i):{},[e,i])}function ye(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ue(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:l,nodeDescendantDiffs:u,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=D=>{const w=g.find(([H])=>H===String(D));return w==null?void 0:w[1]},m=t?c(t):void 0;return{diff:o?o(l,c):n?l[z]??m:m,...r?{descendantDiffs:u}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function ur(i){return Wi.includes(i.kind)}function Ta(i){return i.childrenNodes().filter(ur)}function fr(i){return i.kind===I.TABLE}function _a(i){return fr(i)&&i instanceof ae}function gr(i){return i.kind===I.COLUMNS}function cr(i){return gr(i)&&i instanceof ae}function hr(i){return pr(i)&&i instanceof ae}function ft(i){return i.kind===I.COLUMN}function pi(i){return ft(i)&&i instanceof ae}function pr(i){return i.kind===I.INDEXES}function gt(i){return i.kind===I.INDEX}function ct(i){return gt(i)&&i instanceof ae}function ht(i){return i.filter(ft)}function pt(i){return i.filter(gt)}const mr=d.createContext(null);function yr(){const i=d.useContext(mr);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const br=({href:i,className:e,children:t})=>s.jsx("a",{href:i,className:e,children:t});br.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const mt=On;function yt(i){const e=Ue(ye(i),{resolveDiff:()=>Pn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Ea(i){const e=Ue(ye(i),{resolveDiff:()=>Fn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const La=jn,Dr="ux-badge_ddlapi_primary-key",bt="ux-badge_ddlapi_foreign-key",vr="ux-badge_ddlapi_unique",Vr="ux-badge_ddlapi_not-null",wr="ux-badge_ddlapi_generated",kr="public",Dt="Default",vt="As",Vt="Values";function Hr(i){return i?!!(_e(i.defaultValue)||_e(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const xr="detailed";function $(i){return i===xr}function Ee(i){return i!=null}let wt=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),o=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l,showAnyAdditionalInfoRow:a||o||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return $(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return $(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return $(t)&&Ee(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return $(t)&&Ee(e==null?void 0:e.generatedExpression)}};const mi=new wt;function Nr(i,e){return mi.resolveNodeVisibility(i,e)}function Cr(i,e){return mi.resolveListLastRowFlags(i,e)}function Ii(i,e){return mi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const kt=d.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?s.jsx("span",{className:n,children:s.jsx("span",{className:r||void 0,children:`${t}`})}):null});kt.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Sr(i={}){const{textHighlighterColor:e,borderShadowColor:t,isFontMuted:n}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",P.borderShadow(t)].filter(Boolean).join(" "),valueClassName:[P.highlighter(e),n?P.fontMuted():""].filter(Boolean).join(" ")}),[t,n,e])}const te=d.memo(i=>{const{isVisible:e,value:t,textHighlighterColor:n,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:l}=Sr({textHighlighterColor:n,borderShadowColor:r,isFontMuted:a});return s.jsx(kt,{isVisible:e,value:t,blockClassName:o,valueClassName:l})});te.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};var O=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(O||{});const Ar={[O.DdlApiProperty]:hi,[O.JsonSchemaValidation]:Ge},qr={[O.DdlApiProperty]:"ddlapi-property-row-body",[O.Default]:"additional-info-row-body",[O.JsonSchemaValidation]:"additional-info-row-body"},Tr={[O.DdlApiProperty]:"min-h-[26px]"};function _r(i,e={}){return{xPaddingClass:e.xPaddingClass??Ar[i]??Ge,bodyClass:e.bodyClass??qr[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Tr[i]??"",stretchLevelIndicator:i===O.DdlApiProperty}}const Ae=d.memo(i=>{var N;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1,usage:l=O.Default,xPaddingClass:u,bodyClass:f,minHeightClass:g}=i,{[W]:c,[j]:m}=i,p=re(),D=d.useMemo(()=>_r(l,{xPaddingClass:u,bodyClass:f,minHeightClass:g}),[l,u,f,g]),w=n===E?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,y=(N=(n===E?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??w)==null?void 0:N.backgroundColor,h=d.useMemo(()=>y?[P.background(y)]:[],[y]),x=d.useMemo(()=>{const _=a==null?void 0:a.data;if(_){if(K(_))return n!==E;if(G(_))return n===E}return(w==null?void 0:w.isContentVisible)??!0},[a,w==null?void 0:w.isContentVisible,n]),A=p>0&&(!o||x);return s.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":m?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",D.xPaddingClass,D.minHeightClass,D.stretchLevelIndicator?"items-stretch":"",h.join(" ")].filter(Boolean).join(" "),children:[A&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(Te,{level:p}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),x&&s.jsxs("div",{className:`${D.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[s.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});Ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ne=d.memo(i=>{var r;const e=Ie(),t=(r=i.diffsSeverities)==null?void 0:r[Oi.AdditionalInfoRow],n=d.useMemo(()=>ai(t==null?void 0:t.causedAt),[t==null?void 0:t.causedAt]);switch(e){case si:return s.jsx(Re,{diffType:t==null?void 0:t.type,diffTypeCause:n,hidden:!1,children:s.jsx(Oe,{left:s.jsx(Ae,{...i,layoutSide:E}),right:s.jsx(Ae,{...i,layoutSide:J})})});case oi:return s.jsx(Pe,{content:s.jsx(Ae,{...i,layoutSide:J})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};function ue(i,e){return i?(e===E?i.styles.before:i.styles.after).textHighlighterColor:void 0}function Ht(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===kr?e:`${i.schemaName}.${e}`}function Er(i){return i.join(", ")}const ni=d.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=yr(),o=d.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=d.useMemo(()=>["ddlapi-foreign-key-link",P.highlighter(n)].filter(Boolean).join(" "),[n]),u=s.jsx(a,{href:o,className:l,children:Ht(e)});return t?u:s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Wt,{text:"FK",colorSchema:bt,inline:!0}),u]})});ni.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Lr(){return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function xt(i,e){return!!i||!!e}function yi(i,e){return i?e===E?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Ir(i,e,t){return xt(i,e)&&yi(e,t)}function xe(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:l}=i;if(!xt(r,a))return null;if(!yi(a,l))return Lr();const u=$n(a)?a==null?void 0:a.data:void 0;return s.jsx(Gi,{label:t,colorSchema:n,layoutMode:o,layoutSide:l,isNodeChanged:!1,isContentChanged:!!u,$changes:u},Fr(e,t))}function Mr(i){const{columnId:e,target:t,targetDiff:n,layoutMode:r,layoutSide:a}=i,o=jr(e,t),l=ue(n,a);if(n&&!yi(n,a))return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!n)return s.jsx(ni,{target:t},o);const u=n.data;return s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Gi,{label:"FK",colorSchema:bt,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:u}),s.jsx(ni,{target:t,hideBadge:!0,textHighlighterColor:l})]},o)}const be=d.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Ie(),l=d.useMemo(()=>n??{},[n]),u=d.useMemo(()=>r??{},[r]),f=d.useMemo(()=>xe({columnId:e,label:"PK",colorSchema:Dr,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,l.isPrimaryKey,o,a,t.isPrimaryKey]),g=d.useMemo(()=>Ir(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=d.useMemo(()=>xe({columnId:e,label:"unique",colorSchema:vr,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:o,layoutSide:a}),[e,l.isUnique,o,a,t.isUnique]),m=d.useMemo(()=>g?null:xe({columnId:e,label:"not null",colorSchema:Vr,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:o,layoutSide:a}),[e,l.isNotNull,g,o,a,t.isNotNull]),p=d.useMemo(()=>xe({columnId:e,label:"generated",colorSchema:wr,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:o,layoutSide:a}),[e,l.isGenerated,o,a,t.isGenerated]),D=d.useMemo(()=>{const H=t.foreignKeyTargets??[];return H.length===0?[]:H.map(y=>Mr({columnId:e,target:y,targetDiff:u[Nn(y)],layoutMode:o,layoutSide:a}))},[e,o,a,u,t.foreignKeyTargets]),w=d.useMemo(()=>[f,c,m,p,...D].filter(Boolean),[D,p,m,f,c]);return w.length===0?null:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w})});function Fr(i,e){return`${i}-${e}`}function jr(i,e){return`${i}-FK-${Ht(e)}`}be.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const bi=d.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?s.jsx("span",{className:n,children:`${t}`}):null});bi.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var Z=(i=>(i.Text="text",i.Block="block",i))(Z||{});function Nt(i){const{appearance:e}=i;return d.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const De=d.memo(i=>{const{isVisible:e,value:t,appearance:n=Z.Text}=i,r=Nt({appearance:n});return s.jsx(bi,{isVisible:e,value:t,className:r})});De.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const Di=i=>{const{node:e,additionalInfoPrecededBy:t=R.DDL_COLUMN_ROW,isLastInList:n=!1,[W]:r}=i,a=fe(),o=e.value(),l=d.useMemo(()=>Nr(e,a),[e,a]),u=d.useMemo(()=>Cr(n,l),[n,l]),f=d.useCallback(p=>o?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(De,{isVisible:!0,value:o.columnType.label,appearance:Z.Text}),s.jsx(be,{columnId:e.id,layoutSide:p,value:o})]}):s.jsx(s.Fragment,{}),[e.id,o]),g=d.useCallback(p=>{const D=o==null?void 0:o.defaultValue;return _e(D)?s.jsx(te,{isVisible:!0,value:D}):s.jsx(s.Fragment,{})},[o]),c=d.useCallback(p=>{const D=o==null?void 0:o.generatedExpression;return _e(D)?s.jsx(te,{isVisible:!0,value:D}):s.jsx(s.Fragment,{})},[o]),m=d.useCallback(p=>{var D;return(D=o==null?void 0:o.enumValues)!=null&&D.length?s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((w,H)=>s.jsx(te,{isVisible:!0,value:w},`${w}-${H}`))}):s.jsx(s.Fragment,{})},[o]);return o?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(ee,{"data-precededby":r,[j]:u.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:f,usage:L.DdlApiProperty}),l.showDescription&&s.jsx(me,{"data-precededby":R.DDL_COLUMN_ROW,[j]:u.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body2,textFontWeight:"normal",textColor:Ke,usage:Q.DdlApiProperty}),l.showEnumValuesRow&&s.jsx(ne,{usage:O.DdlApiProperty,"data-precededby":t,[j]:u.isEnumAdditionalInfoListLastRow||void 0,label:Vt,subheader:m}),l.showDefaultRow&&s.jsx(ne,{usage:O.DdlApiProperty,"data-precededby":Ii(l,"default")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:u.isDefaultAdditionalInfoListLastRow||void 0,label:Dt,subheader:g}),l.showGeneratedRow&&s.jsx(ne,{usage:O.DdlApiProperty,"data-precededby":Ii(l,"generated")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:u.isGeneratedAdditionalInfoListLastRow||void 0,label:vt,subheader:c})]}):null};Di.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Mi(i,e){return i?(e===E?i.styles.before:i.styles.after).borderShadowColor:void 0}function Rr(i,e){return i?(e===E?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Pr(i){if(pi(i))return Kn(i)}function Or(i){if(pi(i))return Un(i)}function Gr(i){if(ct(i))return lt(i)}const Fi=new wt;class Kr{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,at(e),t),o=this.resolveEnumValuesRowVisible(n,gi(e),t),l=this.resolveDefaultRowVisible(n,ci(e),st(e),r,t),u=this.resolveGeneratedRowVisible(n,ei(e),t);return{showDescription:a,showEnumValuesRow:o,showDefaultRow:l,showGeneratedRow:u,showAnyAdditionalInfoRow:o||l||u}}resolveListLastRowFlags(e,t){return Fi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Fi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=ei(e);return pe(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[z];return!!t&&(K(t.data)||G(t.data))}resolveDescriptionRowVisible(e,t,n){return $(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return $(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const o=Ee(e==null?void 0:e.defaultValue)||!!t||!!n;return $(a)&&o}resolveGeneratedRowVisible(e,t,n){return $(n)&&(Ee(e==null?void 0:e.generatedExpression)||!!t)}}const Be=new Kr;function Ur(i,e){return Be.resolveNodeVisibility(i,e)}function Br(i,e){return Be.resolveListLastRowFlags(i,e)}function ji(i,e){return Be.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Wr(i,e){return Be.resolveGeneratedExpressionSideDisplay(i,e)}function Yr(i,e){return i?(e===E?i.styles.before:i.styles.after).backgroundColor:void 0}function $r(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=Nt({appearance:e});return d.useMemo(()=>[r,P.highlighter(t),P.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const vi=d.memo(i=>{const{isVisible:e,value:t,appearance:n=Z.Text,textHighlighterColor:r,backgroundColor:a}=i,o=$r({appearance:n,textHighlighterColor:r,backgroundColor:a});return s.jsx(bi,{isVisible:e,value:t,className:o})});vi.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Xr(i){return i.text===", "||i.text===","}function ri(i,e,t,n){return i.diff?s.jsx(vi,{isVisible:!0,value:i.text,appearance:Z.Text,textHighlighterColor:ue(i.diff,t),backgroundColor:n?Yr(i.diff,t):void 0},`${i.text}-${e}`):s.jsx(De,{isVisible:!0,value:i.text,appearance:Z.Text},`${i.text}-${e}`)}function zr(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(Xr(r)){n=!0;return}n&&(t.push(s.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(ri(r,a,e,!1))}),t}const Le=d.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===B.NO_DIFFS?ri({text:e.text},0,t,!1):e.kind===B.WHOLE_DIFFS?ri({text:e.text,diff:e.diff},0,t,!0):s.jsx("span",{className:"inline-flex items-center",children:zr(e.segments,t)})});Le.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Jr(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function Qr(i,e,t){return i.diff?s.jsx(vi,{isVisible:!0,value:i.text,appearance:Z.Text,textHighlighterColor:ue(i.diff,t)},`${i.text}-${e}`):s.jsx(De,{isVisible:!0,value:i.text,appearance:Z.Text},`${i.text}-${e}`)}const Ct=d.memo(i=>{const{node:e,layoutSide:t}=i,n=An(e,t);if(n.kind===B.NO_DIFFS||n.kind===B.WHOLE_DIFFS)return s.jsx(Le,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=Jr(n.segments);return s.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,l)=>Qr(o,l,t)),a.length>0&&s.jsx(Le,{layoutSide:t,display:{kind:B.PARTIAL_DIFFS,segments:a}})]})});Ct.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const St=i=>{const{node:e,additionalInfoPrecededBy:t=R.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[W]:a}=i,o=fe(),l=e.value(),u=d.useMemo(()=>mt(e),[e]),f=d.useMemo(()=>yt(e),[e]),g=d.useMemo(()=>Or(e),[e]),c=d.useMemo(()=>Pr(e),[e]),m=d.useMemo(()=>at(e),[e]),p=d.useMemo(()=>ei(e),[e]),D=d.useMemo(()=>gi(e),[e]),w=d.useMemo(()=>Bn(e),[e]),H=d.useMemo(()=>ci(e),[e]),y=d.useMemo(()=>st(e),[e]),h=d.useMemo(()=>Ur(e,o),[e,o]),x=d.useMemo(()=>Br(n,h),[n,h]),A=d.useCallback(b=>l?nt(u,b)?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Ct,{node:e,layoutSide:b}),s.jsx(be,{columnId:e.id,layoutSide:b,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{}),[g,c,e,u,l]),N=d.useCallback(b=>{const v=Wn(e,b);return v===void 0?s.jsx(s.Fragment,{}):s.jsx(te,{isVisible:!0,value:v,textHighlighterColor:ue(H,b),borderShadowColor:Mi(H,b)})},[H,e]),_=d.useCallback(b=>{const v=Wr(e,b);return v===void 0?s.jsx(s.Fragment,{}):s.jsx(te,{isVisible:!0,value:v,textHighlighterColor:ue(p,b)})},[p,e]),q=d.useCallback(b=>{const v=Yn(e,b);return v.length===0?s.jsx(s.Fragment,{}):s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:v.map((M,V)=>s.jsx(te,{isVisible:!0,value:M.literal,textHighlighterColor:ue(M.diff,b),borderShadowColor:Mi(M.diff,b),isFontMuted:Rr(M.diff,b)},`${M.literal}-${V}`))})},[e]);return l?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(ee,{"data-precededby":a,[j]:x.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:A,usage:L.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),h.showDescription&&s.jsx(me,{"data-precededby":R.DDL_COLUMN_ROW,[j]:x.isDescriptionListLastRow||void 0,value:l.description??"",variant:C.body2,textFontWeight:"normal",textColor:Ke,usage:Q.DdlApiProperty,diff:m,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),h.showEnumValuesRow&&s.jsx(ne,{usage:O.DdlApiProperty,"data-precededby":t,[j]:x.isEnumAdditionalInfoListLastRow||void 0,label:Vt,subheader:q,colorizingDiff:w,diffsSeverities:D||w?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),h.showDefaultRow&&s.jsx(ne,{usage:O.DdlApiProperty,"data-precededby":ji(h,"default")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:x.isDefaultAdditionalInfoListLastRow||void 0,label:Dt,subheader:N,colorizingDiff:y,diffsSeverities:H||y?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),h.showGeneratedRow&&s.jsx(ne,{usage:O.DdlApiProperty,"data-precededby":ji(h,"generated")?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:x.isGeneratedAdditionalInfoListLastRow||void 0,label:vt,subheader:_,diff:p,colorizingDiff:e.diffs[z],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};St.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function At(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,o=t?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:R.DDL_COLUMN_ROW,l=t?R.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:R.DDL_COLUMN_ROW,u={columnNode:n,titlePrecededBy:o,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&Hr(n.value()),u})}const Zr=i=>{const{node:e,[W]:t}=i;return cr(e)?s.jsx(ia,{"data-precededby":t,node:e}):s.jsx(ea,{"data-precededby":t,node:e})},ea=i=>{const{node:e,[W]:t}=i,n=re(),r=fe(),a=e.value(),o=ht(e.childrenNodes()),l=r===Ki,u=d.useMemo(()=>At(o,l),[o,l]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(ee,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:L.DdlApiSection}),s.jsx(Me.Provider,{value:n+1,children:u.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:m})=>s.jsx(Di,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:m,node:f},f.id))})]})},ia=i=>{const{node:e,[W]:t}=i,n=re(),r=fe(),a=e.value(),o=ht(e.childrenNodes()),l=r===Ki,u=d.useMemo(()=>Ue(ye(e)),[e]),f=d.useMemo(()=>At(o,l),[o,l]),g=d.useMemo(()=>rt(e),[e]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(ee,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2,usage:L.DdlApiSection,...u}),s.jsx(Me.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:m,additionalInfoPrecededBy:p,isLastInList:D})=>pi(c)?s.jsx(St,{"data-precededby":m,additionalInfoPrecededBy:p,isLastInList:D,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):s.jsx(Di,{"data-precededby":m,additionalInfoPrecededBy:p,isLastInList:D,node:c},c.id))})]})};Zr.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let qt=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return $(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const Tt=new qt;function ta(i,e){return Tt.resolveNodeVisibility(i,e)}function na(i,e){return Tt.resolveListLastRowFlags(i,e)}const Vi=i=>{const{node:e,isLastInList:t=!1,[W]:n}=i,r=fe(),a=e.value(),o=d.useMemo(()=>ta(e,r),[e,r]),l=d.useMemo(()=>na(t,o),[t,o]),u=(a==null?void 0:a.indexName)??"",f=d.useCallback(c=>{if(!a)return s.jsx(s.Fragment,{});const m=Er(a.partNames);return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&s.jsx(De,{isVisible:!0,value:`(${m})`,appearance:Z.Text}),s.jsx(be,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=o.showDescription;return a?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(ee,{"data-precededby":n,[j]:l.isTitleListLastRow||void 0,value:u,expandable:!1,expanded:!0,variant:C.body2,subheader:o.showSubheader?f:void 0,usage:L.DdlApiProperty}),g&&s.jsx(me,{"data-precededby":R.DDL_INDEX_ROW,[j]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:C.body1,textFontWeight:"normal",textColor:Ke,usage:Q.DdlApiProperty})]}):null};Vi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ra=new qt;class aa{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,ot(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=lt(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return ra.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return $(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const _t=new aa;function oa(i,e){return _t.resolveNodeVisibility(i,e)}function sa(i,e){return _t.resolveListLastRowFlags(i,e)}const Et=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[W]:r}=i,a=fe(),o=e.value(),l=d.useMemo(()=>oa(e,a),[e,a]),u=d.useMemo(()=>sa(t,l),[t,l]),f=d.useMemo(()=>mt(e),[e]),g=d.useMemo(()=>yt(e),[e]),c=d.useMemo(()=>Gr(e),[e]),m=d.useMemo(()=>ot(e),[e]),p=(o==null?void 0:o.indexName)??"",D=d.useCallback(y=>{const h=Mn(e,y);return s.jsx(Le,{layoutSide:y,display:h})},[e]),w=d.useCallback(y=>{if(!o)return s.jsx(s.Fragment,{});if(!nt(f,y))return s.jsx(s.Fragment,{});const h=o.partNames.length>0;return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[h&&D(y),s.jsx(be,{columnId:e.id,layoutSide:y,value:o,flagDiffs:c})]})},[c,e.id,f,D,o]),H=l.showDescription;return o?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(ee,{"data-precededby":r,[j]:u.isTitleListLastRow||void 0,value:p,expandable:!1,expanded:!0,variant:C.body2,subheader:l.showSubheader?w:void 0,usage:L.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),H&&s.jsx(me,{"data-precededby":R.DDL_INDEX_ROW,[j]:u.isDescriptionListLastRow||void 0,value:o.description??"",variant:C.body1,textFontWeight:"normal",textColor:Ke,usage:Q.DdlApiProperty,diff:m,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Et.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Lt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:R.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const la=i=>{const{node:e,[W]:t}=i;return hr(e)?s.jsx(ua,{"data-precededby":t,node:e}):s.jsx(da,{"data-precededby":t,node:e})},da=i=>{const{node:e,[W]:t}=i,n=re(),r=e.value(),a=pt(e.childrenNodes()),o=d.useMemo(()=>Lt(a),[a]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(ee,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:L.DdlApiSection}),s.jsx(Me.Provider,{value:n+1,children:o.map(({indexNode:l,titlePrecededBy:u,isLastInList:f})=>s.jsx(Vi,{"data-precededby":u,isLastInList:f,node:l},l.id))})]})},ua=i=>{const{node:e,[W]:t}=i,n=re(),r=e.value(),a=pt(e.childrenNodes()),o=d.useMemo(()=>Ue(ye(e)),[e]),l=d.useMemo(()=>Lt(a),[a]),u=d.useMemo(()=>rt(e),[e]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(ee,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2,usage:L.DdlApiSection,...o}),s.jsx(Me.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>ct(f)?s.jsx(Et,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:u,node:f},f.id):s.jsx(Vi,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};la.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{$e as $,W as A,xa as B,Zr as C,kr as D,ge as E,wa as F,ka as G,un as H,la as I,Na as J,Ha as K,Wi as L,ue as M,Re as N,Pe as O,R as P,Oe as Q,La as R,ae as S,ee as T,Ea as U,Rn as V,Sa as W,Ge as X,Aa as Y,_a as Z,Yt as _,pr as a,$t as a0,en as a1,tn as a2,zt as a3,Jt as a4,Xt as a5,ie as a6,Bi as a7,pa as a8,Ui as a9,ma as aa,dt as ab,Xn as ac,ar as ad,or as ae,ye as af,Ue as ag,L as ah,ba as ai,va as aj,Da as ak,qa as al,C as b,me as c,Ke as d,Qt as e,Ca as f,Ta as g,fr as h,gr as i,mr as j,br as k,S as l,wn as m,Xe as n,Nn as o,Dn as p,Qi as q,Va as r,$i as s,ya as t,ui as u,je as v,I as w,Xi as x,zi as y,fn as z};
