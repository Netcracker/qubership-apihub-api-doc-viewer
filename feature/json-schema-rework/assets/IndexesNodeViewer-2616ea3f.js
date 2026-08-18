var Rt=Object.defineProperty;var Pt=(i,e,t)=>e in i?Rt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var w=(i,e,t)=>(Pt(i,typeof e!="symbol"?e+"":e,t),t);import{t as K,v as G,w as ze,x as z,Z as Ot,_ as me,$ as Te,N as J,a0 as Gi,P as _,a1 as Gt,a2 as Kt,K as we,Q as Ut,M as ke,a3 as Bt,U as L,H as ue,a4 as Je,a5 as Ce,a6 as Wt,W as Z,V as P,a7 as Ki,a8 as se,a9 as _e,X as Me,R as Ui,Y as oi,l as si,S as li,aa as Yt,ab as $t,y as Xt,ac as Ee,ad as zt,ae as Bi,u as ge,f as Fe,h as Wi}from"./DiffBadge-6dc75daf.js";import{j as s}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const ne={SIMPLE:"simple",COMPLEX:"complex"};class je{constructor(e="#",t="",n,r,a){w(this,"type");w(this,"parent");w(this,"container");w(this,"newDataLevel");w(this,"_value");w(this,"_meta");w(this,"_childrenNodes",[]);w(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=ne.SIMPLE,value:l=null,parent:u=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=u,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new je(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ne.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class di extends je{constructor(t="#",n="",r,a,o){super(t,n,r,a,o);w(this,"type");this.id=t,this.key=n,this.kind=r,this.type=o.type}createCycledClone(t,n,r){const a=new di(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class Jt{constructor(){w(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const o=new je(e,t,n,r,a);return this.nodes.set(e,o),o}createComplexNode(e,t,n,r,a){const o=new di(e,t,n,r,a);return this.nodes.set(e,o),o}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const Qt={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Zt=Object.values(Qt);new Set(Zt);class Re{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!A(e))return!1;for(const t of Object.values(e))if(!Re.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return A(t)&&(K(t)||G(t)||ze(t)||z(t))}}function A(i){return Yi(i)&&!Array.isArray(i)}function Yi(i){return typeof i=="object"&&i!==null}function en(i){return A(i)&&Object.keys(i).every(e=>typeof e=="string")}function $e(i){return Array.isArray(i)}function va(i){return typeof i=="number"}function Va(i){return typeof i=="string"}function wa(i,e,t){let n=i,r=!1;for(const a of e){if(!A(n)&&!$e(n))return;if(r){let l;Yi(n)&&(l=n[a]),!l&&$e(n)&&t&&(l=n.find(u=>A(u)&&u[t]===a)),n=l,r=!1;continue}n=n[a],$e(n)&&(r=!0)}return n}function ka(i,e){return Object.keys(i).find(t=>i[t]===e)}function Ha(i){if(Re.isDiffsRecord(i))return i}class tn{constructor(){w(this,"tree",null)}pick(e,t){if(!A(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?n[a]=[...o]:A(o)?n[a]={...o}:n[a]=o}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class $i{constructor(){w(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const He=()=>{},nn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:He,info:He,warn:He,error:He};class xa{constructor(){w(this,"fragments",new Map);w(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function qi(i,e){return"#"+Ot([...i,...e])}function Na(i,e){const t=new $i,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function Ca(i){return Array.isArray(i)?i.length>0:A(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function rn(i){return i==null||!A(i)&&!me(i)}function an(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:l,isSimpleNode:u,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=rn,shouldSkipNodeCreation:m,shouldStopAfterNodeCreation:y,lazy:h}=i;return[({value:D,state:p,key:M,path:N})=>{if(typeof M=="symbol")return;if(!A(D)&&!me(D))return{value:D};const{ancestors:C,parent:S,container:b,pathPrefix:v=[]}=p,T=C.get(D);if(!T||!u(T)&&!f(T))return{value:D};if(!S||!u(S))return{value:D};const H=qi(v,N),R=g(M,D),Y=t.createCycledClone(T,H,R,S);return b?b.addNestedNode(Y):S&&S.addChildNode(Y),{done:!0}},({key:D,value:p,path:M,state:N,rules:C})=>!C||!Array.isArray(C.transformers)?void 0:{value:C.transformers.reduce((v,T)=>T(D,v,e,M,N),p)},({key:D,value:p,path:M,rules:N,state:C})=>{if(!N)return{done:!0};if(typeof D=="symbol")return{done:!0};if(c(p))return{done:!0};if(m!=null&&m(p,N)||!N.kind||!n.includes(N.kind))return;const{parent:S,container:b,ancestors:v,pathPrefix:T=[],depth:H=0,materializeDepth:R}=C,Y=qi(T,M),re=g(D,p),{kind:$,complex:he=!1}=N,W=a(p,S,b),Q=r(Y,re,$,he,W);if(!Q)return;b?b.addNestedNode(Q):S&&S.addChildNode(Q),h&&(A(p)||me(p))&&h.state.rememberFragment(Y,p);let xi=p;if(y!=null&&y(Q,p)){const Ye=S?S.descendantDiffs:void 0;if(!Ye||!(D in Ye))return{done:!0};const Si=Ye[D];if(!Si)return{done:!0};const{data:Ai}=Si;z(Ai)&&(xi=Ai.beforeValue)}const Ni=H+(W.newDataLevel?1:0),Ci=!!(h&&u(Q)&&R!==void 0&&Ni>=R&&(A(p)||me(p))&&h.resolveHasOwnChildren(p,N));Ci&&h.state.defer({nodeId:Y,fragment:p,path:[...T,...M],rules:N});const We=A(p)||me(p);We&&v.enter(p,Q);let pe;return u(Q)?pe=o(C,Q):pe=l(C,Q),pe={...pe,depth:Ni,materializeDepth:C.materializeDepth,pathPrefix:C.pathPrefix},Ci?{done:!0,exitHook:We?()=>{v.leave(p)}:void 0}:{value:xi,state:pe,exitHook:We?()=>{v.leave(p)}:void 0}}]}class on{}class le{constructor(e="#",t="",n,r,a){w(this,"type");w(this,"parent");w(this,"container");w(this,"newDataLevel");w(this,"_value");w(this,"_meta");w(this,"_childrenNodes",[]);w(this,"_nestedNodes",[]);w(this,"_diffs",{});w(this,"_diffsSummary",new Set);w(this,"_descendantDiffs",{});w(this,"_descendantDiffsSummary",new Set);w(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=ne.SIMPLE,value:l=null,parent:u=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=u,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new le(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ne.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class sn extends Jt{constructor(){super()}}const I={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Xi=Object.values(I),zi="<unnamed>";function ln(i){return i??zi}function Ji(i){return i!==zi}function dn(i,e){return e.indexName&&Ji(e.indexName)?e.indexName:i}function Sa(i,e,t){return t||(e!=null&&e.indexName&&Ji(e.indexName)?e.indexName:String(i))}function Qe(i=I.TABLE){return{"/columns":{"/items":{"/*":()=>Qe(I.COLUMN)},kind:I.COLUMNS},"/indexes":{"/items":{"/*":()=>Qe(I.INDEX)},kind:I.INDEXES},kind:i}}const Ti={Identity:"identity",Expression:"expression"};function un(i){return i.kind===Te.Literal&&typeof i.value=="string"}function fn(i){return i.kind===Te.RawExpr&&typeof i.expr=="string"}function gn(i){return A(i)&&typeof i.expr=="string"}function cn(i){return A(i)&&typeof i.value=="string"}const ce="titleRow",hn=["typeName","size","precision","scale","label"],Aa={ToEnum:"to-enum",FromEnum:"from-enum"},qa={Lost:"lost",Gained:"gained"},Qi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],Zi=["isUnique"],Ta=[J,ce,"tableName","schemaName","description"],_a=[J,ce,"columnName","description","generatedExpression",...Qi],Ea=[J,ce,"indexName","description",...Zi];function pn(i){if(!A(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!A(t)||!("before"in t)||!("after"in t)?!1:Re.isDiff(e)}function et(i){return pn(i[ce])}function mn(i){return A(i)&&i.kind===Gi.Domain&&typeof i.type=="string"}function yn(i){return i.kind===_.BoolType&&typeof i.type=="string"}function bn(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function _i(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function Ei(i){return i.kind===_.FloatType&&typeof i.type=="string"}function Li(i){return i.kind===_.StringType&&typeof i.type=="string"}function Ii(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function Mi(i){return i.kind===_.TimeType&&typeof i.type=="string"}function Dn(i){return i.kind===_.JSONType&&typeof i.type=="string"}function vn(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function Vn(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function Xe(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function wn(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function Fi(i){return typeof i.type=="string"}function ui(i){switch(i.kind){case Te.Literal:return un(i)?i.value:i.kind;case Te.RawExpr:return fn(i)?i.expr:i.kind;case Gt.NamedDefault:try{return ui(Kt(i))}catch{return i.kind}default:return gn(i)?i.expr:cn(i)?i.value:i.kind}}function it(i){return tt(ui(i))}function kn(i){return tt(i)}function tt(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Hn="Columns",xn="Indexes";class Nn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=we(t.attrs,ke.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:Hn,items:(t.columns??[]).map(a=>this.buildColumnRowValue(e,t,a,n.schemaName))},indexes:{title:xn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:A(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return A(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!A(e)||typeof e.tableName!="string"||!A(e.columns)||!Array.isArray(e.columns.items)||!A(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,r){var q,k,D;const a=we(n.attrs,ke.Comment),o=(q=n.attrs)==null?void 0:q.find(p=>p.kind===Ut.Identity),l=we(n.attrs,ke.GeneratedExpr),u=o!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(p=>this.buildForeignKeyTarget(e,p,n,r)).filter(p=>p!==void 0),c=g.length>0,m=this.formatColumnType(n.type),y=(k=n.type)==null?void 0:k.type,h=y&&Xe(y)?y.values:void 0,V=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:m,...h?{enumValues:h}:{},isPrimaryKey:V,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:u,...o?{generatedBy:Ti.Identity}:{},...l&&!o?{generatedBy:Ti.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!V&&((D=n.type)==null?void 0:D.null)===!1,...n.default!==void 0?{defaultValue:it(n.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=we(e.attrs,ke.Comment);return{indexName:ln(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const r of e.schemas)if((n=r.tables)!=null&&n.some(a=>a===t))return r.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isSingleColumnIndexForColumn(e,t){var n,r;return(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,t))})}buildForeignKeyTarget(e,t,n,r){var f,g;const a=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(a<0)return;const o=t.refTable,l=(g=t.refColumns)==null?void 0:g[a];if(!o||!l)return;const u=this.resolveForeignKeyTargetSchemaName(e,o,r);if(u)return{schemaName:u,tableName:o.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const r=this.findSchemaNameForTable(e,t);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,t.name);return a||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===t)}).map(r=>r.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(mn(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return yn(e)?{kind:_.BoolType,typeName:e.type,label:t}:bn(e)?{kind:_.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:_i(e)?{kind:_.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ei(e)?{kind:_.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Li(e)?{kind:_.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Ii(e)?{kind:_.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Mi(e)?{kind:_.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Dn(e)?{kind:_.JSONType,typeName:e.type,label:t}:vn(e)?{kind:_.SpatialType,typeName:e.type,label:t}:Vn(e)?{kind:_.UUIDType,typeName:e.type,label:t}:Xe(e)?{kind:_.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:wn(e)?{kind:_.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Fi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Gi.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return _i(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Li(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ii(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Ei(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Mi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Xe(e)?t=e.type??e.values[0]??"enum":Fi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?ui(e.expr):""}}function Cn(i){return an(i)}const Sn=new Set([I.TABLE,I.COLUMNS,I.COLUMN,I.INDEXES,I.INDEX]);class fi extends on{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!en(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,fi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Sn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case I.TABLE:return["tableName","schemaName","description"];case I.COLUMNS:case I.INDEXES:return["title"];case I.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case I.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const An="[DDL API]";class La extends tn{constructor(t){const{source:n,tableKey:r,logger:a=nn()}=t;super();w(this,"tree");w(this,"source");w(this,"tableKey");w(this,"logger");w(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!A(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new $i},r=Qe(),a=Cn({source:t,tree:this.tree,supportedNodeKinds:Xi,createNodeFromRaw:(o,l,u,f,g)=>this.createNodeFromRaw(o,l,u,f,g),createNodeParams:(o,l,u)=>({value:A(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:l,container:u}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l)});return Bt(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return An}createTree(){return new sn}createNodeDataBuilder(){return new fi}prepareSource(){return new Nn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,o){const{parent:l,container:u,newDataLevel:f}=o;if(a){const y=this.createNodeMeta(n,o),h={type:ne.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(u),value:null,meta:y,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,h)}const g=this.createNodeValue(n,r,o),c=this.createNodeMeta(n,o),m={type:ne.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(u),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,m)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(o,l)=>this.pick(o,l))}resolveNodeKey(t,n){return A(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?dn(t,n):t:t}isSimpleTreeNode(t){return t.type===ne.SIMPLE}isComplexTreeNode(t){return t.type===ne.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function qn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const U={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function nt(i,e,t){const n=t===L,r=new Set,a=[],o=u=>{const f=e==null?void 0:e[u];if(f)return f;for(const g of Object.values(e??{}))if(g&&z(g.data)&&g.data.afterValue===u)return g};for(const u of i){const f=o(u);if(!f){a.push({text:u});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(K(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(G(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(z(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:u:typeof g.afterValue=="string"?g.afterValue:u;a.push({text:c,diff:f})}}for(const[u,f]of Object.entries(e??{}))!f||r.has(f)||G(f.data)&&n&&(a.push({text:u,diff:f}),r.add(f));const l=u=>{const f=i.indexOf(u);return f>=0?f:i.length};return a.sort((u,f)=>l(u.text)-l(f.text))}function rt(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function ye(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===L;return K(n)?r?void 0:String(n.afterValue??i??""):G(n)?r?String(n.beforeValue??i??""):void 0:z(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function at(i,e){return(e===L?i.styles.before:i.styles.after).isContentVisible}function Tn(i,e){return i?at(i,e):!0}function _n(i,e){return i?(e===L?i.styles.before:i.styles.after).isHeaderVisible:!0}function En(i){if(i&&(K(i.data)||G(i.data)))return i}const ot=["size","precision","scale"];function Ln(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function In(i,e){var f;const t=(f=i.value())==null?void 0:f.columnType;if(!t)return{kind:U.NO_DIFFS,text:""};const n=Ln(i);if(!n)return{kind:U.NO_DIFFS,text:t.label};const r=n.typeName??n.label,a=n.typeName?"typeName":"label";if(Mn(n)){const g=Object.values(n).find(Boolean);return g?{kind:U.WHOLE_DIFFS,text:Fn(t,n,a,e),diff:Pn(g)}:{kind:U.NO_DIFFS,text:t.label}}const o=[],l=ye(Ze(t),r,e);l!==void 0&&o.push({text:l,diff:r});const u=jn(t,n,e);return o.push(...u),o.length===0?{kind:U.NO_DIFFS,text:t.label}:{kind:U.PARTIAL_DIFFS,segments:o}}function Mn(i){const e=hn.map(n=>[n,i[n]]).filter(n=>!!n[1]);if(e.length===0)return!1;if(e.length===1){const[n]=e[0];return n==="typeName"||n==="label"}return new Set(e.map(([,n])=>n.data.action)).size===1}function Fn(i,e,t,n){const r=ye(Ze(i),e[t],n)??Ze(i),a=[];for(const o of ot){const l=ye(gi(i,o),e[o],n);l!==void 0&&a.push(l)}return a.length===0?r:`${r} (${a.join(", ")})`}function jn(i,e,t){const n=Rn(i,e,t);if(n.length===0)return[];const r=n.flatMap(a=>{const o=ye(gi(i,a),e[a],t);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...rt(r,"spaced")]}function Rn(i,e,t){return ot.filter(n=>{const r=e[n];return r?at(r,t):gi(i,n)!==void 0})}function Ze(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function gi(i,e){if(!(e in i))return;const t=Reflect.get(i,e);return typeof t=="number"?t:void 0}function Pn(i){const{data:e}=i;return z(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Yellow}}}:K(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Green}}}:G(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function On(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Gn(i,e){var o;const t=((o=i.value())==null?void 0:o.partNames)??[],n=On(i),r=n?nt(t,n,e):t.map(l=>({text:l})),a=rt(r,"tight");return a.length===0?{kind:U.NO_DIFFS,text:""}:{kind:U.PARTIAL_DIFFS,segments:a}}function Kn(i){if(et(i.diffs))return i.diffs[ce]}function Un(i){const e=i.diffs[J];if(e&&(K(e.data)||G(e.data)))return e}function Bn(i){return i.diffs.schemaName}function Ia(i){return i.diffs.description}function Ma(i,e){var o;const t=((o=i.value())==null?void 0:o.schemaName)??"",n=Bn(i);if(!n)return t;const r=n.data,a=e===L;return K(r)?a?"":t:G(r)?a?t:"":z(r)?a?typeof r.beforeValue=="string"?r.beforeValue:t:typeof r.afterValue=="string"?r.afterValue:t:t}function Wn(i){if(et(i.diffs))return i.diffs[ce]}function Yn(i){return En(i.diffs[J])}function st(i,e){return _n(i,e)}function $n(i,e){return Tn(i,e)}function lt(i){const e=i.diffs[J];return e?K(e.data)||G(e.data):!1}function Xn(i){const t=i.diffs.foreignKeyTargetDiffs;if(!(!t||Object.keys(t).length===0))return t}function zn(i){const e={};let t=!1;for(const n of Qi){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function ei(i){return i.diffs.generatedExpression}function dt(i){return i.diffs.description}function ut(i){return i.diffs.description}function ci(i){const t=i.diffs.enumValueDiffs;if(!(!t||Object.keys(t).length===0))return t}function Jn(i){return i.diffs.enumValuesRowColorizingDiff}function hi(i){return i.diffs.defaultValue}function ft(i){return i.diffs.defaultValueRowColorizingDiff}function Qn(i,e){var o;const t=(o=i.value())==null?void 0:o.defaultValue,n=hi(i),r=e===L;if(!n){const l=i.diffs[J];if(l){const u=l.data;if(K(u))return r?void 0:t;if(G(u))return r?t:void 0}return t}const a=n.data;return K(a)?r?void 0:t??xe(a.afterValue):G(a)?r?xe(a.beforeValue)??t:void 0:z(a)?r?xe(a.beforeValue)??t:xe(a.afterValue)??t:t}function xe(i){if(typeof i=="string")return kn(i);if(A(i)&&"kind"in i)return it(i)}function Zn(i,e){var t;return nt(((t=i.value())==null?void 0:t.enumValues)??[],ci(i),e).map(({text:n,diff:r})=>({literal:n,diff:r}))}function gt(i){const e={};let t=!1;for(const n of Zi){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function er(i){return i?i.highlightingMode.get(Je.Default)!==Ce.Invisible:!1}const ir=d.createContext(!1),Pe=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:s.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[s.jsx(Wt,{variant:t,message:n}),e]})};Pe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Oe=d.memo(i=>{const{content:e}=i;return s.jsx("div",{className:"flex flex-row w-full",children:e})});Oe.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ge=d.memo(i=>{const{left:e,right:t}=i;return s.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[s.jsx("div",{className:"flex w-1/2",children:e}),s.jsx("div",{className:"flex w-1/2",children:t})]})});Ge.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const pi="px-4",ii="",tr="px-4",mi="";var E=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(E||{});var x=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(x||{});const nr=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=d.useCallback(()=>{n==null||n(o=>!o)},[n]);return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"mt-1",children:s.jsx("a",{className:`text-value-expander ${or(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},ct=d.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:o,highlightingMode:l=Ce.Default}=i,u=l===Ce.Default,f=l===Ce.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:m,textColor:y,label:h}=i,[V,q]=d.useState(!1),k=d.useCallback((S,b,v)=>{if(v)return null;const T=f?"":b.join(" "),H=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),R=`${H} ${T}`.trim(),Y={onClick:r,...y!=null&&y.trim()?{style:{color:y}}:{}};S=V?S:ar(S);const re=($,he)=>{const W={...Y,className:he};switch(t){case x.h1:return s.jsx("h1",{...W,children:$});case x.h2:return s.jsx("h2",{...W,children:$});case x.h3:return s.jsx("h3",{...W,children:$});case x.h4:return s.jsx("h4",{...W,children:$});case x.h5:return s.jsx("h5",{...W,children:$});case x.h6:return s.jsx("h6",{...W,children:$});case x.body1:return s.jsx("span",{...W,className:`${he} text-value-body1`.trim(),children:$});case x.body2:return s.jsx("span",{...W,className:`${he} text-value-body2`.trim(),children:$})}};return h?re(s.jsxs(s.Fragment,{children:[s.jsx("span",{className:c?`font-${c}`:"font-bold",style:m!=null&&m.trim()?{color:m}:{},children:`${h}: `}),s.jsx("span",{className:T,children:S})]}),H):re(S,R)},[V,f,h,m,c,r,y,g,t]),D=d.useCallback(S=>{const b=[];let v=S,T=!1;if(a){const{data:H,styles:R}=a;switch(n){case L:b.push(P.highlighter(R.before.textHighlighterColor)),u&&(G(H)&&(v=de(H.beforeValue)?H.beforeValue:v),z(H)&&(o===E.JsoProperty&&!f&&b.push(P.highlighter(ue.Yellow)),v=de(H.beforeValue)?H.beforeValue:v),ze(H)&&(v=de(H.beforeKey)?H.beforeKey:v)),K(H)&&(T=!0);break;case Z:b.push(P.highlighter(R.after.textHighlighterColor)),u&&(K(H)&&(v=de(H.afterValue)?H.afterValue:v),z(H)&&(o===E.JsoProperty&&!f&&b.push(P.highlighter(ue.Yellow)),v=de(H.afterValue)?H.afterValue:v),ze(H)&&(v=de(H.afterKey)?H.afterKey:v)),G(H)&&(T=!0);break}}return[v,b,T]},[a,u,f,n,o]),[p,M,N]=D(e);return d.useMemo(()=>s.jsxs("div",{className:"flex flex-col items-start gap-1",children:[k(p,M,N),!N&&s.jsx(nr,{isExpandable:rr(p),expanded:V,setExpanded:q,variant:t})]}),[k,p,M,N,V,q,t])}),ti=5,ni=300;function rr(i){return i?i.length>ni||Ki.trim(i.split(`
`)).length>ti:!1}function ar(i){if(!i)return;if(i.length>ni)return i.slice(0,ni)+"...";const e=Ki.trim(i.split(`
`));return e.length>ti?e.slice(0,ti).join(`
`)+"...":i}function de(i){return typeof i=="string"}function or(i){switch(i){case x.h1:return"text-value-expander--h1";case x.h2:return"text-value-expander--h2";case x.h3:return"text-value-expander--h3";case x.h4:return"text-value-expander--h4";case x.h5:return"text-value-expander--h5";case x.h6:return"text-value-expander--h6";case x.body1:return"text-value-expander--body1";case x.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const B="data-precededby",F="data-ddl-list-last-row";var j=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(j||{}),ee=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(ee||{});const sr={[ee.DdlApiProperty]:mi},lr={[ee.DdlApiProperty]:["min-h-[26px]"]};function dr(i){const e=sr[i]??pi,t=lr[i]??[];return[e,...t].join(" ")}const Se=d.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=ee.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:l,textFontWeight:u,labelColor:f,textColor:g}=i,{[B]:c}=i,{diff:m,descendantDiffs:y,diffsSeverities:h}=i,V=se(),q=r===ee.DdlApiProperty,k=d.useMemo(()=>!a||$n(m,n),[m,a,n]),D=q&&V>0&&k,p=d.useMemo(()=>{if(!m)return[];const{data:C,styles:S}=m;if(!C)return[];const b=[];return n===L&&b.push(P.background(S.before.backgroundColor)),n===Z&&b.push(P.background(S.after.backgroundColor)),b},[m,n]),M=d.useMemo(()=>dr(r),[r]),N=s.jsx(ct,{label:o,labelFontWeight:l,textFontWeight:u,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:m});return s.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${q?"items-stretch":""} ${M} gap-2 ${p.join(" ")}`,children:[D&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(_e,{level:V}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),q?s.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:N}):N]})});Se.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const be=d.memo(i=>{const e=Me(),{diffsSeverities:t,diffsSeverityPlacement:n=Ui.DescriptionRow}=i,r=d.useMemo(()=>t==null?void 0:t[n],[t,n]),a=d.useMemo(()=>r==null?void 0:r.type,[r]),o=d.useMemo(()=>oi(r==null?void 0:r.causedAt),[r]);switch(e){case li:return s.jsx(Pe,{diffType:a,diffTypeCause:o,hidden:!1,children:s.jsx(Ge,{left:s.jsx(Se,{...i,layoutSide:L}),right:s.jsx(Se,{...i,layoutSide:Z})})});case si:return s.jsx(Oe,{content:s.jsx(Se,{...i,layoutSide:Z})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});be.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Ke="#353C4E",ur=d.createContext(void 0);function fr(){return d.useContext(ur)}const ht=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=d.useContext(ir),o=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:s.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&s.jsx(Yt,{short:e}),e&&t!==void 0&&s.jsx($t,{onToggle:l,expanded:t})]})};ht.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const gr={[E.JsoProperty]:ii,[E.DdlApiSection]:tr,[E.DdlApiProperty]:mi,[E.JsonSchemaProperty]:ii},cr={[E.JsoProperty]:["min-h-[26px]"],[E.DdlApiProperty]:["min-h-[26px]"],[E.JsonSchemaProperty]:["min-h-[26px]"]};function hr(i){const e=gr[i]??pi,t=cr[i]??[];return[e,...t].join(" ")}const Ae=d.memo(i=>{const{expandable:e,expanded:t,onClickExpander:n,value:r,titleContent:a,variant:o,layoutSide:l,enableHeader:u=!0,enableHeaderValue:f=!0,subheader:g,usage:c=E.Default,highlightingMode:m=Xt,hideLevelIndicatorWhenSideEmpty:y=!1}=i,{diff:h,descendantDiffs:V,diffsSeverities:q}=i,{[B]:k,[F]:D}=i,p=d.useMemo(()=>{switch(c){case E.Default:return m.get(Je.Default);case E.AsyncApiJsoSection:case E.JsoProperty:return m.get(Je.JsoPropertyKey)}},[m,c]),M=se(),N=fr(),C=d.useMemo(()=>N?l===L?N.beforeLevel:N.afterLevel:M,[l,M,N]),S=d.useMemo(()=>{const R=[];if(!h)return R;const{data:Y,styles:re}=h;return Y&&(l===L&&R.push(P.background(re.before.backgroundColor)),l===Z&&R.push(P.background(re.after.backgroundColor))),R},[h,l]),b=d.useMemo(()=>a||(f?s.jsx(ct,{"data-precededby":k,value:r,variant:o,layoutSide:l,diff:h,usage:c,highlightingMode:p,onClick:n}):null),[a,f,k,r,o,l,h,c,p,n]),v=c===E.DdlApiProperty,T=d.useMemo(()=>u?s.jsxs(s.Fragment,{children:[(e||C>0)&&s.jsxs("div",{"data-precededby":k,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(_e,{level:C}),s.jsx(ht,{expandable:e,expanded:t,onClick:n,level:C})]}),!v&&b]}):y?null:C>0&&s.jsx(_e,{level:C}),[u,e,t,b,y,v,C,n,k]),H=d.useMemo(()=>hr(c),[c]);return s.jsxs("div",{"data-precededby":k,"data-ddl-list-last-row":D?!0:void 0,"data-usage":c!==E.Default?c:void 0,className:`title-row-content flex w-full ${v?"items-stretch":"items-center"} h-full ${H} gap-2 ${S.join(" ")}`,children:[T,v?s.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[b,g==null?void 0:g(l)]}):g==null?void 0:g(l)]})});Ae.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"ReactElement"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=d.memo(i=>{const e=Me(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=d.useMemo(()=>n==null?void 0:n["title-row"],[n]),o=d.useMemo(()=>a==null?void 0:a.type,[a]),l=d.useMemo(()=>oi(a==null?void 0:a.causedAt),[a]);switch(e){case li:return s.jsx(Pe,{diffType:o,diffTypeCause:l,hidden:!1,children:s.jsx(Ge,{left:s.jsx(Ae,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:L}),right:s.jsx(Ae,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:Z})})});case si:return s.jsx(Oe,{content:s.jsx(Ae,{...i,layoutSide:Z})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"ReactElement"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Fa(i,e){return d.useMemo(()=>e(i)?De(i):{},[e,i])}function De(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ue(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:l,nodeDescendantDiffs:u,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const V=g.find(([q])=>q===String(h));return V==null?void 0:V[1]},m=t?c(t):void 0;return{diff:o?o(l,c):n?l[J]??m:m,...r?{descendantDiffs:u}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function pr(i){return Xi.includes(i.kind)}function ja(i){return i.childrenNodes().filter(pr)}function mr(i){return i.kind===I.TABLE}function Ra(i){return mr(i)&&i instanceof le}function yr(i){return i.kind===I.COLUMNS}function br(i){return yr(i)&&i instanceof le}function Dr(i){return vr(i)&&i instanceof le}function pt(i){return i.kind===I.COLUMN}function yi(i){return pt(i)&&i instanceof le}function vr(i){return i.kind===I.INDEXES}function mt(i){return i.kind===I.INDEX}function yt(i){return mt(i)&&i instanceof le}function bt(i){return i.filter(pt)}function Dt(i){return i.filter(mt)}const Vr=d.createContext(null);function wr(){const i=d.useContext(Vr);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const kr=({href:i,className:e,children:t})=>s.jsx("a",{href:i,className:e,children:t});kr.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const vt=Yn;function Vt(i){const e=Ue(De(i),{resolveDiff:()=>Wn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Pa(i){const e=Ue(De(i),{resolveDiff:()=>Kn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Oa=Un,Hr="ux-badge_ddlapi_primary-key",wt="ux-badge_ddlapi_foreign-key",xr="ux-badge_ddlapi_unique",Nr="ux-badge_ddlapi_not-null",Cr="ux-badge_ddlapi_generated",Sr="public",kt="Default",Ht="As",xt="Values";function Ar(i){return i?!!(Ee(i.defaultValue)||Ee(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const qr="detailed";function X(i){return i===qr}function Le(i){return i!=null}let Nt=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),o=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l,showAnyAdditionalInfoRow:a||o||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return X(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return X(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return X(t)&&Le(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return X(t)&&Le(e==null?void 0:e.generatedExpression)}};const bi=new Nt;function Tr(i,e){return bi.resolveNodeVisibility(i,e)}function _r(i,e){return bi.resolveListLastRowFlags(i,e)}function ji(i,e){return bi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const Ct=d.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?s.jsx("span",{className:n,children:s.jsx("span",{className:r||void 0,children:`${t}`})}):null});Ct.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var Di=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(Di||{});function Er(i={}){const{usage:e=Di.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:r}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",P.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[P.highlighter(t),r?P.fontMuted():""].filter(Boolean).join(" ")}),[n,r,t,e])}const ae=d.memo(i=>{const{isVisible:e,value:t,usage:n=Di.Default,textHighlighterColor:r,borderShadowColor:a,isFontMuted:o}=i,{blockClassName:l,valueClassName:u}=Er({usage:n,textHighlighterColor:r,borderShadowColor:a,isFontMuted:o});return s.jsx(Ct,{isVisible:e,value:t,blockClassName:l,valueClassName:u})});ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};var O=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(O||{});const Lr={[O.DdlApiProperty]:mi,[O.JsonSchemaValidation]:ii},Ir={[O.DdlApiProperty]:"ddlapi-property-row-body",[O.Default]:"additional-info-row-body",[O.JsonSchemaValidation]:"additional-info-row-body"},Mr={[O.DdlApiProperty]:"min-h-[26px]"};function Fr(i,e={}){return{xPaddingClass:e.xPaddingClass??Lr[i]??pi,bodyClass:e.bodyClass??Ir[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??Mr[i]??"",stretchLevelIndicator:i===O.DdlApiProperty}}const qe=d.memo(i=>{var N;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1,usage:l=O.Default,xPaddingClass:u,bodyClass:f,minHeightClass:g}=i,{[B]:c,[F]:m}=i,y=se(),h=d.useMemo(()=>Fr(l,{xPaddingClass:u,bodyClass:f,minHeightClass:g}),[l,u,f,g]),V=n===L?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,k=(N=(n===L?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??V)==null?void 0:N.backgroundColor,D=d.useMemo(()=>k?[P.background(k)]:[],[k]),p=d.useMemo(()=>{const C=a==null?void 0:a.data;if(C){if(K(C))return n!==L;if(G(C))return n===L}return(V==null?void 0:V.isContentVisible)??!0},[a,V==null?void 0:V.isContentVisible,n]),M=y>0&&(!o||p);return s.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":m?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",D.join(" ")].filter(Boolean).join(" "),children:[M&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(_e,{level:y}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p&&s.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[s.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});qe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=d.memo(i=>{var r;const e=Me(),t=(r=i.diffsSeverities)==null?void 0:r[Ui.AdditionalInfoRow],n=d.useMemo(()=>oi(t==null?void 0:t.causedAt),[t==null?void 0:t.causedAt]);switch(e){case li:return s.jsx(Pe,{diffType:t==null?void 0:t.type,diffTypeCause:n,hidden:!1,children:s.jsx(Ge,{left:s.jsx(qe,{...i,layoutSide:L}),right:s.jsx(qe,{...i,layoutSide:Z})})});case si:return s.jsx(Oe,{content:s.jsx(qe,{...i,layoutSide:Z})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};function fe(i,e){return i?(e===L?i.styles.before:i.styles.after).textHighlighterColor:void 0}function St(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Sr?e:`${i.schemaName}.${e}`}function jr(i){return i.join(", ")}const ri=d.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=wr(),o=d.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=d.useMemo(()=>["ddlapi-foreign-key-link",P.highlighter(n)].filter(Boolean).join(" "),[n]),u=s.jsx(a,{href:o,className:l,children:St(e)});return t?u:s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(zt,{text:"FK",colorSchema:wt,inline:!0}),u]})});ri.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Rr(){return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function At(i,e){return!!i||!!e}function vi(i,e){return i?e===L?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Pr(i,e,t){return At(i,e)&&vi(e,t)}function Ne(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:l}=i;if(!At(r,a))return null;if(!vi(a,l))return Rr();const u=er(a)?a==null?void 0:a.data:void 0;return s.jsx(Bi,{label:t,colorSchema:n,layoutMode:o,layoutSide:l,isNodeChanged:!1,isContentChanged:!!u,$changes:u},Gr(e,t))}function Or(i){const{columnId:e,target:t,targetDiff:n,layoutMode:r,layoutSide:a}=i,o=Kr(e,t),l=fe(n,a);if(n&&!vi(n,a))return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!n)return s.jsx(ri,{target:t},o);const u=n.data;return s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(Bi,{label:"FK",colorSchema:wt,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:u}),s.jsx(ri,{target:t,hideBadge:!0,textHighlighterColor:l})]},o)}const ve=d.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Me(),l=d.useMemo(()=>n??{},[n]),u=d.useMemo(()=>r??{},[r]),f=d.useMemo(()=>Ne({columnId:e,label:"PK",colorSchema:Hr,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,l.isPrimaryKey,o,a,t.isPrimaryKey]),g=d.useMemo(()=>Pr(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=d.useMemo(()=>Ne({columnId:e,label:"unique",colorSchema:xr,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:o,layoutSide:a}),[e,l.isUnique,o,a,t.isUnique]),m=d.useMemo(()=>g?null:Ne({columnId:e,label:"not null",colorSchema:Nr,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:o,layoutSide:a}),[e,l.isNotNull,g,o,a,t.isNotNull]),y=d.useMemo(()=>Ne({columnId:e,label:"generated",colorSchema:Cr,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:o,layoutSide:a}),[e,l.isGenerated,o,a,t.isGenerated]),h=d.useMemo(()=>{const q=t.foreignKeyTargets??[];return q.length===0?[]:q.map(k=>Or({columnId:e,target:k,targetDiff:u[qn(k)],layoutMode:o,layoutSide:a}))},[e,o,a,u,t.foreignKeyTargets]),V=d.useMemo(()=>[f,c,m,y,...h].filter(Boolean),[h,y,m,f,c]);return V.length===0?null:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:V})});function Gr(i,e){return`${i}-${e}`}function Kr(i,e){return`${i}-FK-${St(e)}`}ve.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Vi=d.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?s.jsx("span",{className:n,children:`${t}`}):null});Vi.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var ie=(i=>(i.Text="text",i.Block="block",i))(ie||{});function qt(i){const{appearance:e}=i;return d.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const Ve=d.memo(i=>{const{isVisible:e,value:t,appearance:n=ie.Text}=i,r=qt({appearance:n});return s.jsx(Vi,{isVisible:e,value:t,className:r})});Ve.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const wi=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,[B]:r}=i,a=ge(),o=e.value(),l=d.useMemo(()=>Tr(e,a),[e,a]),u=d.useMemo(()=>_r(n,l),[n,l]),f=d.useCallback(y=>o?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Ve,{isVisible:!0,value:o.columnType.label,appearance:ie.Text}),s.jsx(ve,{columnId:e.id,layoutSide:y,value:o})]}):s.jsx(s.Fragment,{}),[e.id,o]),g=d.useCallback(y=>{const h=o==null?void 0:o.defaultValue;return Ee(h)?s.jsx(ae,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),c=d.useCallback(y=>{const h=o==null?void 0:o.generatedExpression;return Ee(h)?s.jsx(ae,{isVisible:!0,value:h}):s.jsx(s.Fragment,{})},[o]),m=d.useCallback(y=>{var h;return(h=o==null?void 0:o.enumValues)!=null&&h.length?s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((V,q)=>s.jsx(ae,{isVisible:!0,value:V},`${V}-${q}`))}):s.jsx(s.Fragment,{})},[o]);return o?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(te,{"data-precededby":r,[F]:u.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:f,usage:E.DdlApiProperty}),l.showDescription&&s.jsx(be,{"data-precededby":j.DDL_COLUMN_ROW,[F]:u.isDescriptionListLastRow||void 0,value:o.description??"",variant:x.body2,textFontWeight:"normal",textColor:Ke,usage:ee.DdlApiProperty}),l.showEnumValuesRow&&s.jsx(oe,{usage:O.DdlApiProperty,"data-precededby":t,[F]:u.isEnumAdditionalInfoListLastRow||void 0,label:xt,subheader:m}),l.showDefaultRow&&s.jsx(oe,{usage:O.DdlApiProperty,"data-precededby":ji(l,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:u.isDefaultAdditionalInfoListLastRow||void 0,label:kt,subheader:g}),l.showGeneratedRow&&s.jsx(oe,{usage:O.DdlApiProperty,"data-precededby":ji(l,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:u.isGeneratedAdditionalInfoListLastRow||void 0,label:Ht,subheader:c})]}):null};wi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ri(i,e){return i?(e===L?i.styles.before:i.styles.after).borderShadowColor:void 0}function Ur(i,e){return i?(e===L?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Br(i){if(yi(i))return Xn(i)}function Wr(i){if(yi(i))return zn(i)}function Yr(i){if(yt(i))return gt(i)}const Pi=new Nt;class $r{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,dt(e),t),o=this.resolveEnumValuesRowVisible(n,ci(e),t),l=this.resolveDefaultRowVisible(n,hi(e),ft(e),r,t),u=this.resolveGeneratedRowVisible(n,ei(e),t);return{showDescription:a,showEnumValuesRow:o,showDefaultRow:l,showGeneratedRow:u,showAnyAdditionalInfoRow:o||l||u}}resolveListLastRowFlags(e,t){return Pi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Pi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=ei(e);return ye(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[J];return!!t&&(K(t.data)||G(t.data))}resolveDescriptionRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const o=Le(e==null?void 0:e.defaultValue)||!!t||!!n;return X(a)&&o}resolveGeneratedRowVisible(e,t,n){return X(n)&&(Le(e==null?void 0:e.generatedExpression)||!!t)}}const Be=new $r;function Xr(i,e){return Be.resolveNodeVisibility(i,e)}function zr(i,e){return Be.resolveListLastRowFlags(i,e)}function Oi(i,e){return Be.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Jr(i,e){return Be.resolveGeneratedExpressionSideDisplay(i,e)}function Qr(i,e){return i?(e===L?i.styles.before:i.styles.after).backgroundColor:void 0}function Zr(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=qt({appearance:e});return d.useMemo(()=>[r,P.highlighter(t),P.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const ki=d.memo(i=>{const{isVisible:e,value:t,appearance:n=ie.Text,textHighlighterColor:r,backgroundColor:a}=i,o=Zr({appearance:n,textHighlighterColor:r,backgroundColor:a});return s.jsx(Vi,{isVisible:e,value:t,className:o})});ki.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function ea(i){return i.text===", "||i.text===","}function ai(i,e,t,n){return i.diff?s.jsx(ki,{isVisible:!0,value:i.text,appearance:ie.Text,textHighlighterColor:fe(i.diff,t),backgroundColor:n?Qr(i.diff,t):void 0},`${i.text}-${e}`):s.jsx(Ve,{isVisible:!0,value:i.text,appearance:ie.Text},`${i.text}-${e}`)}function ia(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(ea(r)){n=!0;return}n&&(t.push(s.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(ai(r,a,e,!1))}),t}const Ie=d.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===U.NO_DIFFS?ai({text:e.text},0,t,!1):e.kind===U.WHOLE_DIFFS?ai({text:e.text,diff:e.diff},0,t,!0):s.jsx("span",{className:"inline-flex items-center",children:ia(e.segments,t)})});Ie.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function ta(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function na(i,e,t){return i.diff?s.jsx(ki,{isVisible:!0,value:i.text,appearance:ie.Text,textHighlighterColor:fe(i.diff,t)},`${i.text}-${e}`):s.jsx(Ve,{isVisible:!0,value:i.text,appearance:ie.Text},`${i.text}-${e}`)}const Tt=d.memo(i=>{const{node:e,layoutSide:t}=i,n=In(e,t);if(n.kind===U.NO_DIFFS||n.kind===U.WHOLE_DIFFS)return s.jsx(Ie,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=ta(n.segments);return s.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,l)=>na(o,l,t)),a.length>0&&s.jsx(Ie,{layoutSide:t,display:{kind:U.PARTIAL_DIFFS,segments:a}})]})});Tt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const _t=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[B]:a}=i,o=ge(),l=e.value(),u=d.useMemo(()=>vt(e),[e]),f=d.useMemo(()=>Vt(e),[e]),g=d.useMemo(()=>Wr(e),[e]),c=d.useMemo(()=>Br(e),[e]),m=d.useMemo(()=>dt(e),[e]),y=d.useMemo(()=>ei(e),[e]),h=d.useMemo(()=>ci(e),[e]),V=d.useMemo(()=>Jn(e),[e]),q=d.useMemo(()=>hi(e),[e]),k=d.useMemo(()=>ft(e),[e]),D=d.useMemo(()=>Xr(e,o),[e,o]),p=d.useMemo(()=>zr(n,D),[n,D]),M=d.useCallback(b=>l?st(u,b)?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(Tt,{node:e,layoutSide:b}),s.jsx(ve,{columnId:e.id,layoutSide:b,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{}),[g,c,e,u,l]),N=d.useCallback(b=>{const v=Qn(e,b);return v===void 0?s.jsx(s.Fragment,{}):s.jsx(ae,{isVisible:!0,value:v,textHighlighterColor:fe(q,b),borderShadowColor:Ri(q,b)})},[q,e]),C=d.useCallback(b=>{const v=Jr(e,b);return v===void 0?s.jsx(s.Fragment,{}):s.jsx(ae,{isVisible:!0,value:v,textHighlighterColor:fe(y,b)})},[y,e]),S=d.useCallback(b=>{const v=Zn(e,b);return v.length===0?s.jsx(s.Fragment,{}):s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:v.map((T,H)=>s.jsx(ae,{isVisible:!0,value:T.literal,textHighlighterColor:fe(T.diff,b),borderShadowColor:Ri(T.diff,b),isFontMuted:Ur(T.diff,b)},`${T.literal}-${H}`))})},[e]);return l?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(te,{"data-precededby":a,[F]:p.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:M,usage:E.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),D.showDescription&&s.jsx(be,{"data-precededby":j.DDL_COLUMN_ROW,[F]:p.isDescriptionListLastRow||void 0,value:l.description??"",variant:x.body2,textFontWeight:"normal",textColor:Ke,usage:ee.DdlApiProperty,diff:m,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),D.showEnumValuesRow&&s.jsx(oe,{usage:O.DdlApiProperty,"data-precededby":t,[F]:p.isEnumAdditionalInfoListLastRow||void 0,label:xt,subheader:S,colorizingDiff:V,diffsSeverities:h||V?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),D.showDefaultRow&&s.jsx(oe,{usage:O.DdlApiProperty,"data-precededby":Oi(D,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:p.isDefaultAdditionalInfoListLastRow||void 0,label:kt,subheader:N,colorizingDiff:k,diffsSeverities:q||k?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),D.showGeneratedRow&&s.jsx(oe,{usage:O.DdlApiProperty,"data-precededby":Oi(D,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[F]:p.isGeneratedAdditionalInfoListLastRow||void 0,label:Ht,subheader:C,diff:y,colorizingDiff:e.diffs[J],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};_t.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Et(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,o=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,l=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,u={columnNode:n,titlePrecededBy:o,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&Ar(n.value()),u})}const ra=i=>{const{node:e,[B]:t}=i;return br(e)?s.jsx(oa,{"data-precededby":t,node:e}):s.jsx(aa,{"data-precededby":t,node:e})},aa=i=>{const{node:e,[B]:t}=i,n=se(),r=ge(),a=e.value(),o=bt(e.childrenNodes()),l=r===Wi,u=d.useMemo(()=>Et(o,l),[o,l]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(te,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2,usage:E.DdlApiSection}),s.jsx(Fe.Provider,{value:n+1,children:u.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:m})=>s.jsx(wi,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:m,node:f},f.id))})]})},oa=i=>{const{node:e,[B]:t}=i,n=se(),r=ge(),a=e.value(),o=bt(e.childrenNodes()),l=r===Wi,u=d.useMemo(()=>Ue(De(e)),[e]),f=d.useMemo(()=>Et(o,l),[o,l]),g=d.useMemo(()=>lt(e),[e]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(te,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2,usage:E.DdlApiSection,...u}),s.jsx(Fe.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:m,additionalInfoPrecededBy:y,isLastInList:h})=>yi(c)?s.jsx(_t,{"data-precededby":m,additionalInfoPrecededBy:y,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):s.jsx(wi,{"data-precededby":m,additionalInfoPrecededBy:y,isLastInList:h,node:c},c.id))})]})};ra.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Lt=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return X(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const It=new Lt;function sa(i,e){return It.resolveNodeVisibility(i,e)}function la(i,e){return It.resolveListLastRowFlags(i,e)}const Hi=i=>{const{node:e,isLastInList:t=!1,[B]:n}=i,r=ge(),a=e.value(),o=d.useMemo(()=>sa(e,r),[e,r]),l=d.useMemo(()=>la(t,o),[t,o]),u=(a==null?void 0:a.indexName)??"",f=d.useCallback(c=>{if(!a)return s.jsx(s.Fragment,{});const m=jr(a.partNames);return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&s.jsx(Ve,{isVisible:!0,value:`(${m})`,appearance:ie.Text}),s.jsx(ve,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=o.showDescription;return a?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(te,{"data-precededby":n,[F]:l.isTitleListLastRow||void 0,value:u,expandable:!1,expanded:!0,variant:x.body2,subheader:o.showSubheader?f:void 0,usage:E.DdlApiProperty}),g&&s.jsx(be,{"data-precededby":j.DDL_INDEX_ROW,[F]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:Ke,usage:ee.DdlApiProperty})]}):null};Hi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const da=new Lt;class ua{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,ut(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=gt(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return da.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const Mt=new ua;function fa(i,e){return Mt.resolveNodeVisibility(i,e)}function ga(i,e){return Mt.resolveListLastRowFlags(i,e)}const Ft=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[B]:r}=i,a=ge(),o=e.value(),l=d.useMemo(()=>fa(e,a),[e,a]),u=d.useMemo(()=>ga(t,l),[t,l]),f=d.useMemo(()=>vt(e),[e]),g=d.useMemo(()=>Vt(e),[e]),c=d.useMemo(()=>Yr(e),[e]),m=d.useMemo(()=>ut(e),[e]),y=(o==null?void 0:o.indexName)??"",h=d.useCallback(k=>{const D=Gn(e,k);return s.jsx(Ie,{layoutSide:k,display:D})},[e]),V=d.useCallback(k=>{if(!o)return s.jsx(s.Fragment,{});if(!st(f,k))return s.jsx(s.Fragment,{});const D=o.partNames.length>0;return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[D&&h(k),s.jsx(ve,{columnId:e.id,layoutSide:k,value:o,flagDiffs:c})]})},[c,e.id,f,h,o]),q=l.showDescription;return o?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(te,{"data-precededby":r,[F]:u.isTitleListLastRow||void 0,value:y,expandable:!1,expanded:!0,variant:x.body2,subheader:l.showSubheader?V:void 0,usage:E.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),q&&s.jsx(be,{"data-precededby":j.DDL_INDEX_ROW,[F]:u.isDescriptionListLastRow||void 0,value:o.description??"",variant:x.body1,textFontWeight:"normal",textColor:Ke,usage:ee.DdlApiProperty,diff:m,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Ft.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function jt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:j.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const ca=i=>{const{node:e,[B]:t}=i;return Dr(e)?s.jsx(pa,{"data-precededby":t,node:e}):s.jsx(ha,{"data-precededby":t,node:e})},ha=i=>{const{node:e,[B]:t}=i,n=se(),r=e.value(),a=Dt(e.childrenNodes()),o=d.useMemo(()=>jt(a),[a]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(te,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2,usage:E.DdlApiSection}),s.jsx(Fe.Provider,{value:n+1,children:o.map(({indexNode:l,titlePrecededBy:u,isLastInList:f})=>s.jsx(Hi,{"data-precededby":u,isLastInList:f,node:l},l.id))})]})},pa=i=>{const{node:e,[B]:t}=i,n=se(),r=e.value(),a=Dt(e.childrenNodes()),o=d.useMemo(()=>Ue(De(e)),[e]),l=d.useMemo(()=>jt(a),[a]),u=d.useMemo(()=>lt(e),[e]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(te,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2,usage:E.DdlApiSection,...o}),s.jsx(Fe.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>yt(f)?s.jsx(Ft,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:u,node:f},f.id):s.jsx(Hi,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};ca.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{$e as $,B as A,_a as B,ra as C,Sr as D,ce as E,Aa as F,qa as G,hn as H,ca as I,Ea as J,Ta as K,Xi as L,fe as M,Pe as N,Oe as O,j as P,Ge as Q,Oa as R,le as S,te as T,Pa as U,Bn as V,Ia as W,pi as X,Ma as Y,Ra as Z,Jt as _,vr as a,Qt as a0,an as a1,on as a2,en as a3,tn as a4,Zt as a5,ne as a6,$i as a7,wa as a8,Yi as a9,O as aA,ka as aa,Va as ab,va as ac,xa as ad,Na as ae,ct as af,ir as ag,ur as ah,fr as ai,De as aj,Ue as ak,E as al,Ca as am,ii as an,X as ao,ee as ap,mi as aq,$n as ar,Ve as as,ie as at,ae as au,Di as av,Fa as aw,_n as ax,En as ay,oe as az,x as b,be as c,Ke as d,nn as e,La as f,ja as g,mr as h,yr as i,Vr as j,kr as k,A as l,Nn as m,Xe as n,qn as o,kn as p,it as q,Sa as r,Ji as s,Ha as t,fi as u,Re as v,I as w,Qi as x,Zi as y,pn as z};
