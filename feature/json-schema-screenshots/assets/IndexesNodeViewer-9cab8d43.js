var Wt=Object.defineProperty;var Yt=(i,e,t)=>e in i?Wt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var x=(i,e,t)=>(Yt(i,typeof e!="symbol"?e+"":e,t),t);import{t as B,v as U,w as Ze,x as z,Z as $t,_ as be,$ as Ie,N as Q,a0 as $i,P as T,a1 as Jt,a2 as Xt,K as He,Q as zt,M as Se,a3 as Qt,U as I,H as ce,a4 as ei,a5 as _e,a6 as Zt,a7 as en,a8 as tn,a9 as nn,aa as rn,ab as an,ac as on,ad as sn,ae as ln,af as dn,ag as un,ah as fn,ai as gn,aj as cn,R as ee,ak as pn,al as Ji,W as ie,V as G,am as de,an as De,X as je,Y as fi,l as gi,S as ci,ao as ii,ap as ti,y as hn,aq as Le,ar as mn,as as Xi,u as he,f as Fe,h as zi}from"./DiffBadge-2c39fcfb.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const ae={SIMPLE:"simple",COMPLEX:"complex"};class Oe{constructor(e="#",t="",n,r,a){x(this,"type");x(this,"parent");x(this,"container");x(this,"newDataLevel");x(this,"_value");x(this,"_meta");x(this,"_childrenNodes",[]);x(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:s=ae.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=s,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}createCycledClone(e,t,n){const r=new Oe(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ae.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class pi extends Oe{constructor(t="#",n="",r,a,s){super(t,n,r,a,s);x(this,"type");this.id=t,this.key=n,this.kind=r,this.type=s.type}createCycledClone(t,n,r){const a=new pi(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return a._childrenNodes=this._childrenNodes,a._nestedNodes=this._nestedNodes,a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class yn{constructor(){x(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const s=new Oe(e,t,n,r,a);return this.nodes.set(e,s),s}createComplexNode(e,t,n,r,a){const s=new pi(e,t,n,r,a);return this.nodes.set(e,s),s}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const bn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Dn=Object.values(bn);new Set(Dn);class Ge{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!k(e))return!1;for(const t of Object.values(e))if(!Ge.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return k(t)&&(B(t)||U(t)||Ze(t)||z(t))}}function k(i){return Qi(i)&&!Array.isArray(i)}function Qi(i){return typeof i=="object"&&i!==null}function vn(i){return k(i)&&Object.keys(i).every(e=>typeof e=="string")}function ze(i){return Array.isArray(i)}function Oa(i){return typeof i=="number"}function Ga(i){return typeof i=="string"}function Ua(i,e,t){let n=i,r=!1;for(const a of e){if(!k(n)&&!ze(n))return;if(r){let l;Qi(n)&&(l=n[a]),!l&&ze(n)&&t&&(l=n.find(d=>k(d)&&d[t]===a)),n=l,r=!1;continue}n=n[a],ze(n)&&(r=!0)}return n}function Ka(i,e){return Object.keys(i).find(t=>i[t]===e)}function Ba(i){if(Ge.isDiffsRecord(i))return i}class Vn{constructor(){x(this,"tree",null)}pick(e,t){if(!k(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const s=e[a];Array.isArray(s)?n[a]=[...s]:k(s)?n[a]={...s}:n[a]=s}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}class Zi{constructor(){x(this,"byValue",new Map)}get(e){return this.byValue.get(e)}enter(e,t){this.byValue.set(e,t)}leave(e){this.byValue.delete(e)}}const ke=()=>{},wn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ke,info:ke,warn:ke,error:ke};class Wa{constructor(){x(this,"fragments",new Map);x(this,"pending",new Map)}defer(e){this.fragments.set(e.nodeId,e.fragment),this.pending.set(e.nodeId,e)}rememberFragment(e,t){this.fragments.set(e,t)}}function Li(i,e){return"#"+$t([...i,...e])}function Ya(i,e){const t=new Zi,n=[];for(let r=i;r;r=r.container??r.parent)n.push(r);for(const r of n.reverse()){const a=e.get(r.id);a&&t.enter(a,r)}return t}function $a(i){return Array.isArray(i)?i.length>0:k(i)?Reflect.ownKeys(i).some(e=>typeof e!="symbol"):!1}function Nn(i){return i==null||!k(i)&&!be(i)}function xn(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:s,createStateForComplexNode:l,isSimpleNode:d,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=Nn,shouldSkipNodeCreation:p,shouldStopAfterNodeCreation:b,lazy:h}=i;return[({value:y,state:m,key:R,path:_})=>{if(typeof R=="symbol")return;if(!k(y)&&!be(y))return{value:y};const{ancestors:E,parent:v,container:V,pathPrefix:w=[]}=m,S=E.get(y);if(!S||!d(S)&&!f(S))return{value:y};if(!v||!d(v))return{value:y};const N=Li(w,_),$=g(R,y),J=t.createCycledClone(S,N,$,v);return V?V.addNestedNode(J):v&&v.addChildNode(J),{done:!0}},({key:y,value:m,path:R,state:_,rules:E})=>!E||!Array.isArray(E.transformers)?void 0:{value:E.transformers.reduce((w,S)=>S(y,w,e,R,_),m)},({key:y,value:m,path:R,rules:_,state:E})=>{if(!_)return{done:!0};if(typeof y=="symbol")return{done:!0};if(c(m))return{done:!0};if(p!=null&&p(m,_)||!_.kind||!n.includes(_.kind))return;const{parent:v,container:V,ancestors:w,pathPrefix:S=[],depth:N=0,materializeDepth:$}=E,J=Li(S,R),fe=g(y,m),{kind:P,complex:oe=!1}=_,K=a(m,v,V,P),Z=r(J,fe,P,oe,K);if(!Z)return;V?V.addNestedNode(Z):v&&v.addChildNode(Z),h&&(k(m)||be(m))&&h.state.rememberFragment(J,m);let _i=m;if(b!=null&&b(Z,m)){const Xe=v?v.descendantDiffs:void 0;if(!Xe||!(y in Xe))return{done:!0};const qi=Xe[y];if(!qi)return{done:!0};const{data:Ii}=qi;z(Ii)&&(_i=Ii.beforeValue)}const Ei=N+(K.newDataLevel?1:0),Ti=!!(h&&d(Z)&&$!==void 0&&Ei>=$&&(k(m)||be(m))&&h.resolveHasOwnChildren(m,_));Ti&&h.state.defer({nodeId:J,fragment:m,path:[...S,...R],rules:_});const Je=k(m)||be(m);Je&&w.enter(m,Z);let ye;return d(Z)?ye=s(E,Z):ye=l(E,Z),ye={...ye,depth:Ei,materializeDepth:E.materializeDepth,pathPrefix:E.pathPrefix},Ti?{done:!0,exitHook:Je?()=>{w.leave(m)}:void 0}:{value:_i,state:ye,exitHook:Je?()=>{w.leave(m)}:void 0}}]}class Hn{}class ue{constructor(e="#",t="",n,r,a){x(this,"type");x(this,"parent");x(this,"container");x(this,"newDataLevel");x(this,"_value");x(this,"_meta");x(this,"_childrenNodes",[]);x(this,"_nestedNodes",[]);x(this,"_diffs",{});x(this,"_diffsSummary",new Set);x(this,"_descendantDiffs",{});x(this,"_descendantDiffsSummary",new Set);x(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:s=ae.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=s,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new ue(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?typeof this._value=="object"?{...this._value}:this._value:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const t of e._diffsSummary)this._diffsSummary.add(t);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const t of e._descendantDiffsSummary)this._descendantDiffsSummary.add(t);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===ae.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t)}}class Sn extends yn{constructor(){super()}}const M={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},et=Object.values(M),it="<unnamed>";function kn(i){return i??it}function tt(i){return i!==it}function Cn(i,e){return e.indexName&&tt(e.indexName)?e.indexName:i}function Ja(i,e,t){return t||(e!=null&&e.indexName&&tt(e.indexName)?e.indexName:String(i))}function ni(i=M.TABLE){return{"/columns":{"/items":{"/*":()=>ni(M.COLUMN)},kind:M.COLUMNS},"/indexes":{"/items":{"/*":()=>ni(M.INDEX)},kind:M.INDEXES},kind:i}}const Mi={Identity:"identity",Expression:"expression"};function An(i){return i.kind===Ie.Literal&&typeof i.value=="string"}function _n(i){return i.kind===Ie.RawExpr&&typeof i.expr=="string"}function En(i){return k(i)&&typeof i.expr=="string"}function Tn(i){return k(i)&&typeof i.value=="string"}const me="titleRow",qn=["typeName","size","precision","scale","label"],Xa={ToEnum:"to-enum",FromEnum:"from-enum"},za={Lost:"lost",Gained:"gained"},nt=["isPrimaryKey","isUnique","isNotNull","isGenerated"],rt=["isUnique"],Qa=[Q,me,"tableName","schemaName","description"],Za=[Q,me,"columnName","description","generatedExpression",...nt],eo=[Q,me,"indexName","description",...rt];function In(i){if(!k(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!k(t)||!("before"in t)||!("after"in t)?!1:Ge.isDiff(e)}function at(i){return In(i[me])}function Ln(i){return k(i)&&i.kind===$i.Domain&&typeof i.type=="string"}function Mn(i){return i.kind===T.BoolType&&typeof i.type=="string"}function Rn(i){return i.kind===T.IntegerType&&typeof i.type=="string"}function Ri(i){return i.kind===T.DecimalType&&typeof i.type=="string"}function Pi(i){return i.kind===T.FloatType&&typeof i.type=="string"}function ji(i){return i.kind===T.StringType&&typeof i.type=="string"}function Fi(i){return i.kind===T.BinaryType&&typeof i.type=="string"}function Oi(i){return i.kind===T.TimeType&&typeof i.type=="string"}function Pn(i){return i.kind===T.JSONType&&typeof i.type=="string"}function jn(i){return i.kind===T.SpatialType&&typeof i.type=="string"}function Fn(i){return i.kind===T.UUIDType&&typeof i.type=="string"}function Qe(i){return i.kind===T.EnumType&&Array.isArray(i.values)}function On(i){return i.kind===T.UnsupportedType&&typeof i.type=="string"}function Gi(i){return typeof i.type=="string"}function hi(i){switch(i.kind){case Ie.Literal:return An(i)?i.value:i.kind;case Ie.RawExpr:return _n(i)?i.expr:i.kind;case Jt.NamedDefault:try{return hi(Xt(i))}catch{return i.kind}default:return En(i)?i.expr:Tn(i)?i.value:i.kind}}function ot(i){return st(hi(i))}function Gn(i){return st(i)}function st(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Un="Columns",Kn="Indexes";class Bn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=He(t.attrs,Se.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:Un,items:(t.columns??[]).map(a=>this.buildColumnRowValue(e,t,a,n.schemaName))},indexes:{title:Kn,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:k(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return k(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!k(e)||typeof e.tableName!="string"||!k(e.columns)||!Array.isArray(e.columns.items)||!k(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t,n,r){var C,A,y;const a=He(n.attrs,Se.Comment),s=(C=n.attrs)==null?void 0:C.find(m=>m.kind===zt.Identity),l=He(n.attrs,Se.GeneratedExpr),d=s!==void 0||l!==void 0,g=this.findForeignKeysForColumn(t,n).map(m=>this.buildForeignKeyTarget(e,m,n,r)).filter(m=>m!==void 0),c=g.length>0,p=this.formatColumnType(n.type),b=(A=n.type)==null?void 0:A.type,h=b&&Qe(b)?b.values:void 0,D=this.isPrimaryKeyColumn(t,n);return{columnName:n.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:D,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:d,...s?{generatedBy:Mi.Identity}:{},...l&&!s?{generatedBy:Mi.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(t,n),isNotNull:!D&&((y=n.type)==null?void 0:y.null)===!1,...n.default!==void 0?{defaultValue:ot(n.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=He(e.attrs,Se.Comment);return{indexName:kn(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}findSchemaNameForTable(e,t){var n;for(const r of e.schemas)if((n=r.tables)!=null&&n.some(a=>a===t))return r.name}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===t.name})}isSingleColumnUniqueIndexForColumn(e,t){var n,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isSingleColumnIndexForColumn(e,t){var n,r;return(e.parts??[]).length===1&&((r=(n=(e.parts??[])[0])==null?void 0:n.column)==null?void 0:r.name)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}isSameForeignKeyColumn(e,t){return e===t||e.name===t.name}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,t))})}buildForeignKeyTarget(e,t,n,r){var f,g;const a=((f=t.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,n)))??-1;if(a<0)return;const s=t.refTable,l=(g=t.refColumns)==null?void 0:g[a];if(!s||!l)return;const d=this.resolveForeignKeyTargetSchemaName(e,s,r);if(d)return{schemaName:d,tableName:s.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,t,n){const r=this.findSchemaNameForTable(e,t);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,t.name);return a||n}findUniqueSchemaNameForTableName(e,t){const n=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(s=>s.name===t)}).map(r=>r.name);if(n.length===1)return n[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Ln(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return Mn(e)?{kind:T.BoolType,typeName:e.type,label:t}:Rn(e)?{kind:T.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ri(e)?{kind:T.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Pi(e)?{kind:T.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ji(e)?{kind:T.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Fi(e)?{kind:T.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Oi(e)?{kind:T.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Pn(e)?{kind:T.JSONType,typeName:e.type,label:t}:jn(e)?{kind:T.SpatialType,typeName:e.type,label:t}:Fn(e)?{kind:T.UUIDType,typeName:e.type,label:t}:Qe(e)?{kind:T.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:On(e)?{kind:T.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:Gi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:$i.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return Ri(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ji(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Fi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):Pi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Oi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Qe(e)?t=e.type??e.values[0]??"enum":Gi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){var t;return(t=e.column)!=null&&t.name?e.column.name:e.expr?hi(e.expr):""}}function Wn(i){return xn(i)}const Yn=new Set([M.TABLE,M.COLUMNS,M.COLUMN,M.INDEXES,M.INDEX]);class mi extends Hn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!vn(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,mi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Yn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case M.TABLE:return["tableName","schemaName","description"];case M.COLUMNS:case M.INDEXES:return["title"];case M.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case M.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const $n="[DDL API]";class io extends Vn{constructor(t){const{source:n,tableKey:r,logger:a=wn()}=t;super();x(this,"tree");x(this,"source");x(this,"tableKey");x(this,"logger");x(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!k(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,ancestors:new Zi},r=ni(),a=Wn({source:t,tree:this.tree,supportedNodeKinds:et,createNodeFromRaw:(s,l,d,f,g)=>this.createNodeFromRaw(s,l,d,f,g),createNodeParams:(s,l,d)=>({value:k(s)&&!Array.isArray(s)?s:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(s,l)=>({parent:l,container:null,ancestors:s.ancestors}),createStateForComplexNode:(s,l)=>({parent:s.parent,container:l,ancestors:s.ancestors}),isSimpleNode:s=>this.isSimpleTreeNode(s),isComplexNode:s=>this.isComplexTreeNode(s),resolveNodeKey:(s,l)=>this.resolveNodeKey(s,l)});return Qt(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return $n}createTree(){return new Sn}createNodeDataBuilder(){return new mi}prepareSource(){return new Bn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,s){const{parent:l,container:d,newDataLevel:f}=s;if(a){const b=this.createNodeMeta(n,s),h={type:ae.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:b,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,h)}const g=this.createNodeValue(n,r,s),c=this.createNodeMeta(n,s),p={type:ae.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,p)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(s,l)=>this.pick(s,l))}resolveNodeKey(t,n){return k(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?Cn(t,n):t:t}isSimpleTreeNode(t){return t.type===ae.SIMPLE}isComplexTreeNode(t){return t.type===ae.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function Jn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const W={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function lt(i,e,t){const n=t===I,r=new Set,a=[],s=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&z(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=s(d);if(!f){a.push({text:d});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(B(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(U(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(z(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;a.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||r.has(f)||U(f.data)&&n&&(a.push({text:d,diff:f}),r.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return a.sort((d,f)=>l(d.text)-l(f.text))}function dt(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function ve(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===I;return B(n)?r?void 0:String(n.afterValue??i??""):U(n)?r?String(n.beforeValue??i??""):void 0:z(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function ut(i,e){return(e===I?i.styles.before:i.styles.after).isContentVisible}function Xn(i,e){return i?ut(i,e):!0}function zn(i,e){return i?(e===I?i.styles.before:i.styles.after).isHeaderVisible:!0}function Qn(i){if(i&&(B(i.data)||U(i.data)))return i}const ft=["size","precision","scale"];function Zn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function er(i,e){var f;const t=(f=i.value())==null?void 0:f.columnType;if(!t)return{kind:W.NO_DIFFS,text:""};const n=Zn(i);if(!n)return{kind:W.NO_DIFFS,text:t.label};const r=n.typeName??n.label,a=n.typeName?"typeName":"label";if(ir(n)){const g=Object.values(n).find(Boolean);return g?{kind:W.WHOLE_DIFFS,text:tr(t,n,a,e),diff:ar(g)}:{kind:W.NO_DIFFS,text:t.label}}const s=[],l=ve(ri(t),r,e);l!==void 0&&s.push({text:l,diff:r});const d=nr(t,n,e);return s.push(...d),s.length===0?{kind:W.NO_DIFFS,text:t.label}:{kind:W.PARTIAL_DIFFS,segments:s}}function ir(i){const e=qn.map(n=>[n,i[n]]).filter(n=>!!n[1]);if(e.length===0)return!1;if(e.length===1){const[n]=e[0];return n==="typeName"||n==="label"}return new Set(e.map(([,n])=>n.data.action)).size===1}function tr(i,e,t,n){const r=ve(ri(i),e[t],n)??ri(i),a=[];for(const s of ft){const l=ve(yi(i,s),e[s],n);l!==void 0&&a.push(l)}return a.length===0?r:`${r} (${a.join(", ")})`}function nr(i,e,t){const n=rr(i,e,t);if(n.length===0)return[];const r=n.flatMap(a=>{const s=ve(yi(i,a),e[a],t);return s===void 0?[]:[{text:s,diff:e[a]}]});return[...dt(r,"spaced")]}function rr(i,e,t){return ft.filter(n=>{const r=e[n];return r?ut(r,t):yi(i,n)!==void 0})}function ri(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function yi(i,e){if(!(e in i))return;const t=Reflect.get(i,e);return typeof t=="number"?t:void 0}function ar(i){const{data:e}=i;return z(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ce.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ce.Yellow}}}:B(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ce.Green}}}:U(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ce.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function or(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function sr(i,e){var s;const t=((s=i.value())==null?void 0:s.partNames)??[],n=or(i),r=n?lt(t,n,e):t.map(l=>({text:l})),a=dt(r,"tight");return a.length===0?{kind:W.NO_DIFFS,text:""}:{kind:W.PARTIAL_DIFFS,segments:a}}function lr(i){if(at(i.diffs))return i.diffs[me]}function dr(i){const e=i.diffs[Q];if(e&&(B(e.data)||U(e.data)))return e}function ur(i){return i.diffs.schemaName}function to(i){return i.diffs.description}function no(i,e){var s;const t=((s=i.value())==null?void 0:s.schemaName)??"",n=ur(i);if(!n)return t;const r=n.data,a=e===I;return B(r)?a?"":t:U(r)?a?t:"":z(r)?a?typeof r.beforeValue=="string"?r.beforeValue:t:typeof r.afterValue=="string"?r.afterValue:t:t}function fr(i){if(at(i.diffs))return i.diffs[me]}function gr(i){return Qn(i.diffs[Q])}function gt(i,e){return zn(i,e)}function cr(i,e){return Xn(i,e)}function ct(i){const e=i.diffs[Q];return e?B(e.data)||U(e.data):!1}function pr(i){const t=i.diffs.foreignKeyTargetDiffs;if(!(!t||Object.keys(t).length===0))return t}function hr(i){const e={};let t=!1;for(const n of nt){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function ai(i){return i.diffs.generatedExpression}function pt(i){return i.diffs.description}function ht(i){return i.diffs.description}function bi(i){const t=i.diffs.enumValueDiffs;if(!(!t||Object.keys(t).length===0))return t}function mr(i){return i.diffs.enumValuesRowColorizingDiff}function Di(i){return i.diffs.defaultValue}function mt(i){return i.diffs.defaultValueRowColorizingDiff}function yr(i,e){var s;const t=(s=i.value())==null?void 0:s.defaultValue,n=Di(i),r=e===I;if(!n){const l=i.diffs[Q];if(l){const d=l.data;if(B(d))return r?void 0:t;if(U(d))return r?t:void 0}return t}const a=n.data;return B(a)?r?void 0:t??Ce(a.afterValue):U(a)?r?Ce(a.beforeValue)??t:void 0:z(a)?r?Ce(a.beforeValue)??t:Ce(a.afterValue)??t:t}function Ce(i){if(typeof i=="string")return Gn(i);if(k(i)&&"kind"in i)return ot(i)}function br(i,e){var t;return lt(((t=i.value())==null?void 0:t.enumValues)??[],bi(i),e).map(({text:n,diff:r})=>({literal:n,diff:r}))}function yt(i){const e={};let t=!1;for(const n of rt){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function Dr(i){return i?i.highlightingMode.get(ei.Default)!==_e.Invisible:!1}const vr={ENUM:Zt,MIN_LENGTH:en,MAX_LENGTH:tn,PATTERN:nn,MINIMUM:rn,MAXIMUM:an,EXCLUSIVE_MINIMUM:on,EXCLUSIVE_MAXIMUM:sn,MULTIPLE_OF:ln,MIN_PROPERTIES:dn,MAX_PROPERTIES:un,UNIQUE_ITEMS:fn,MIN_ITEMS:gn,MAX_ITEMS:cn},L={VALUE_LENGTH:"valueLength",VALUE_PATTERN:"valuePattern",VALUE_RANGE:"valueRange",VALUE_MULTIPLE_OF:"valueMultipleOf",PROPERTIES_COUNT:"propertiesCount",ITEMS_COUNT:"itemsCount",UNIQUE_ITEMS:vr.UNIQUE_ITEMS},ro={[L.VALUE_LENGTH]:["minLength","maxLength"],[L.VALUE_PATTERN]:["pattern"],[L.VALUE_RANGE]:["minimum","maximum","exclusiveMinimum","exclusiveMaximum"],[L.VALUE_MULTIPLE_OF]:["multipleOf"],[L.PROPERTIES_COUNT]:["minProperties","maxProperties"],[L.ITEMS_COUNT]:["minItems","maxItems"],[L.UNIQUE_ITEMS]:["uniqueItems"]},ao={[L.VALUE_LENGTH]:ee.ValueLengthRow,[L.VALUE_PATTERN]:ee.ValuePatternRow,[L.VALUE_RANGE]:ee.ValueRangeRow,[L.VALUE_MULTIPLE_OF]:ee.ValueMultipleOfRow,[L.PROPERTIES_COUNT]:ee.PropertiesCountRow,[L.ITEMS_COUNT]:ee.ItemsCountRow,[L.UNIQUE_ITEMS]:ee.UniqueItemsRow},oo={[L.VALUE_LENGTH]:{minLength:0,maxLength:1},[L.VALUE_PATTERN]:{pattern:0},[L.VALUE_RANGE]:{minimum:0,exclusiveMinimum:0,maximum:1,exclusiveMaximum:1},[L.VALUE_MULTIPLE_OF]:{multipleOf:0},[L.PROPERTIES_COUNT]:{minProperties:0,maxProperties:1},[L.ITEMS_COUNT]:{minItems:0,maxItems:1},[L.UNIQUE_ITEMS]:{uniqueItems:0}},Vr=u.createContext(!1),Ue=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:o.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[o.jsx(pn,{variant:t,message:n}),e]})};Ue.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ke=u.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Ke.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Be=u.memo(i=>{const{left:e,right:t}=i;return o.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[o.jsx("div",{className:"flex w-1/2",children:e}),o.jsx("div",{className:"flex w-1/2",children:t})]})});Be.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const vi="px-4",oi="",wr="px-4",Vi="";var q=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i.JsonSchemaProperty="json-schema-property",i))(q||{}),H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const si=5,li=300;function Nr(i){return i?i.length>li||Ji.trim(i.split(`
`)).length>si:!1}function xr(i){if(!i)return;if(i.length>li)return i.slice(0,li)+"...";const e=Ji.trim(i.split(`
`));return e.length>si?e.slice(0,si).join(`
`)+"...":i}function Hr(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const Sr=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=u.useCallback(()=>{n==null||n(s=>!s)},[n]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${Hr(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},bt=u.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:s,highlightingMode:l=_e.Default}=i,d=l===_e.Default,f=l===_e.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:b,label:h}=i,[D,C]=u.useState(!1),A=u.useCallback((v,V,w)=>{if(w)return null;const S=f?"":V.join(" "),N=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),$=`${N} ${S}`.trim(),J={onClick:r,...b!=null&&b.trim()?{style:{color:b}}:{}};v=D?v:xr(v);const fe=(P,oe)=>{const K={...J,className:oe};switch(t){case H.h1:return o.jsx("h1",{...K,children:P});case H.h2:return o.jsx("h2",{...K,children:P});case H.h3:return o.jsx("h3",{...K,children:P});case H.h4:return o.jsx("h4",{...K,children:P});case H.h5:return o.jsx("h5",{...K,children:P});case H.h6:return o.jsx("h6",{...K,children:P});case H.body1:return o.jsx("span",{...K,className:`${oe} text-value-body1`.trim(),children:P});case H.body2:return o.jsx("span",{...K,className:`${oe} text-value-body2`.trim(),children:P})}};return h?fe(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),o.jsx("span",{className:S,children:v})]}),N):fe(v,$)},[D,f,h,p,c,r,b,g,t]),y=u.useCallback(v=>{const V=[];let w=v,S=!1;if(a){const{data:N,styles:$}=a;switch(n){case I:V.push(G.highlighter($.before.textHighlighterColor)),d&&(U(N)&&(w=ge(N.beforeValue)?N.beforeValue:w),z(N)&&(s===q.JsoProperty&&!f&&V.push(G.highlighter(ce.Yellow)),w=ge(N.beforeValue)?N.beforeValue:w),Ze(N)&&(w=ge(N.beforeKey)?N.beforeKey:w)),B(N)&&(S=!0);break;case ie:V.push(G.highlighter($.after.textHighlighterColor)),d&&(B(N)&&(w=ge(N.afterValue)?N.afterValue:w),z(N)&&(s===q.JsoProperty&&!f&&V.push(G.highlighter(ce.Yellow)),w=ge(N.afterValue)?N.afterValue:w),Ze(N)&&(w=ge(N.afterKey)?N.afterKey:w)),U(N)&&(S=!0);break}}return[w,V,S]},[a,d,f,n,s]),[m,R,_]=y(e);return u.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[A(m,R,_),!_&&o.jsx(Sr,{isExpandable:Nr(m),expanded:D,setExpanded:C,variant:t})]}),[A,m,R,_,D,C,t])});function ge(i){return typeof i=="string"}const Y="data-precededby",j="data-ddl-list-last-row";var F=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSON_SCHEMA_PROPERTY="json-schema-property",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(F||{}),te=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaDescription="json-schema-description",i))(te||{});const kr={[te.DdlApiProperty]:Vi},Cr={[te.DdlApiProperty]:["min-h-[26px]"]};function Ar(i){const e=kr[i]??vi,t=Cr[i]??[];return[e,...t].join(" ")}const Ee=u.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=te.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:s,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[Y]:c}=i,{diff:p,descendantDiffs:b,diffsSeverities:h}=i,D=de(),C=r===te.DdlApiProperty,A=u.useMemo(()=>!a||cr(p,n),[p,a,n]),y=C&&D>0&&A,m=u.useMemo(()=>{if(!p)return[];const{data:E,styles:v}=p;if(!E)return[];const V=[];return n===I&&V.push(G.background(v.before.backgroundColor)),n===ie&&V.push(G.background(v.after.backgroundColor)),V},[p,n]),R=u.useMemo(()=>Ar(r),[r]),_=o.jsx(bt,{label:s,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return o.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${C?"items-stretch":""} ${R} gap-2 ${m.join(" ")}`,children:[y&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:D}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),C?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:_}):_]})});Ee.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ve=u.memo(i=>{const e=je(),{diffsSeverities:t,diffsSeverityPlacement:n=ee.DescriptionRow}=i,r=u.useMemo(()=>t==null?void 0:t[n],[t,n]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),s=u.useMemo(()=>fi(r==null?void 0:r.causedAt),[r]);switch(e){case ci:return o.jsx(Ue,{diffType:a,diffTypeCause:s,hidden:!1,children:o.jsx(Be,{left:o.jsx(Ee,{...i,layoutSide:I}),right:o.jsx(Ee,{...i,layoutSide:ie})})});case gi:return o.jsx(Ke,{content:o.jsx(Ee,{...i,layoutSide:ie})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Ve.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const We="#353C4E",_r=u.createContext(void 0);function Dt(){return u.useContext(_r)}const vt=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=u.useContext(Vr),s=r>0,l=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!s?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${s?"gap-0.5":""}`,children:[s&&o.jsx(ii,{short:e}),e&&t!==void 0&&o.jsx(ti,{onToggle:l,expanded:t})]})};vt.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ui="w-4 min-w-[16px] shrink-0 flex-none",Er="w-3 min-w-[12px] shrink-0 flex-none",wi=()=>o.jsx("div",{className:Er,"aria-hidden":"true"}),Vt=i=>{const{isRoot:e,expandable:t,expanded:n,onClick:r}=i;return e&&!t?o.jsx(wi,{}):e&&t?o.jsx("div",{className:"flex flex-row items-center justify-center pt-1.5",children:n!==void 0&&o.jsx(ti,{onToggle:r??(()=>{}),expanded:n})}):t?o.jsxs("div",{className:`flex flex-row items-center justify-center pt-1.5 gap-0.5 ${Ui}`,children:[o.jsx(ii,{short:!0}),n!==void 0&&o.jsx(ti,{onToggle:r??(()=>{}),expanded:n})]}):o.jsx("div",{className:`flex flex-row items-center justify-center pt-1.5 ${Ui}`,children:o.jsx(ii,{})})};wi.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRootExpanderOffset"};Vt.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaExpanderColumn",props:{isRoot:{required:!0,tsType:{name:"boolean"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tr={[q.JsoProperty]:oi,[q.DdlApiSection]:wr,[q.DdlApiProperty]:Vi,[q.JsonSchemaProperty]:oi},qr={[q.JsoProperty]:["min-h-[26px]"],[q.DdlApiProperty]:["min-h-[26px]"]};function Ir(i){const e=Tr[i]??vi,t=qr[i]??[];return[e,...t].join(" ")}const Te=u.memo(i=>{const{expandable:e,expanded:t,isRoot:n=!1,onClickExpander:r,value:a,titleContent:s,variant:l,layoutSide:d,enableHeader:f=!0,enableHeaderValue:g=!0,subheader:c,usage:p=q.Default,highlightingMode:b=hn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:D,descendantDiffs:C,diffsSeverities:A}=i,{[Y]:y,[j]:m}=i,R=u.useMemo(()=>{switch(p){case q.Default:return b.get(ei.Default);case q.AsyncApiJsoSection:case q.JsoProperty:return b.get(ei.JsoPropertyKey)}},[b,p]),_=de(),E=Dt(),v=u.useMemo(()=>E?d===I?E.beforeLevel:E.afterLevel:_,[d,_,E]),V=u.useMemo(()=>{const P=[];if(!D)return P;const{data:oe,styles:K}=D;return oe&&(d===I&&P.push(G.background(K.before.backgroundColor)),d===ie&&P.push(G.background(K.after.backgroundColor))),P},[D,d]),w=u.useMemo(()=>typeof s=="function"?s(d):s||(g?o.jsx(bt,{"data-precededby":y,value:a,variant:l,layoutSide:d,diff:D,usage:p,highlightingMode:R,onClick:r}):null),[s,g,y,a,l,d,D,p,R,r]),S=p===q.DdlApiProperty,N=p===q.JsonSchemaProperty,$=n||v===0,J=u.useMemo(()=>f?N?o.jsxs("div",{"data-precededby":y,className:"level-indicator-column flex shrink-0 items-stretch self-stretch",children:[o.jsx(De,{level:v}),o.jsx(Vt,{isRoot:$,expandable:e,expanded:t,onClick:r})]}):o.jsxs(o.Fragment,{children:[(e||v>0)&&o.jsxs("div",{"data-precededby":y,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:v}),o.jsx(vt,{expandable:e,expanded:t,onClick:r,level:v})]}),!S&&w]}):h?null:v>0&&o.jsx(De,{level:v}),[f,e,t,h,S,N,$,v,r,y]),fe=u.useMemo(()=>Ir(p),[p]);return o.jsxs("div",{"data-precededby":y,"data-ddl-list-last-row":m?!0:void 0,"data-usage":p!==q.Default?p:void 0,className:`title-row-content flex w-full ${S||N?"items-stretch":"items-center"} h-full ${fe} gap-2 ${V.join(" ")}`,children:[J,S?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[w,c==null?void 0:c(d)]}):N?o.jsxs("div",{className:"json-schema-property-row-body flex min-h-[26px] min-w-0 flex-1 items-center gap-2",children:[w,c==null?void 0:c(d)]}):c==null?void 0:c(d)]})});Te.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const re=u.memo(i=>{const e=je(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=u.useMemo(()=>n==null?void 0:n["title-row"],[n]),s=u.useMemo(()=>a==null?void 0:a.type,[a]),l=u.useMemo(()=>fi(a==null?void 0:a.causedAt),[a]);switch(e){case ci:return o.jsx(Ue,{diffType:s,diffTypeCause:l,hidden:!1,children:o.jsx(Be,{left:o.jsx(Te,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:I}),right:o.jsx(Te,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:ie})})});case gi:return o.jsx(Ke,{content:o.jsx(Te,{...i,layoutSide:ie})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});re.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},titleContent:{required:!1,tsType:{name:"union",raw:"ReactElement | ((layoutSide: LayoutSide) => ReactElement | null)",elements:[{name:"ReactElement"},{name:"unknown"}]},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},isRoot:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function so(i,e){return u.useMemo(()=>e(i)?we(i):{},[e,i])}function we(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ye(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:s}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=h=>{const D=g.find(([C])=>C===String(h));return D==null?void 0:D[1]},p=t?c(t):void 0;return{diff:s?s(l,c):n?l[Q]??p:p,...r?{descendantDiffs:d}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function Lr(i){return et.includes(i.kind)}function lo(i){return i.childrenNodes().filter(Lr)}function Mr(i){return i.kind===M.TABLE}function uo(i){return Mr(i)&&i instanceof ue}function Rr(i){return i.kind===M.COLUMNS}function Pr(i){return Rr(i)&&i instanceof ue}function jr(i){return Fr(i)&&i instanceof ue}function wt(i){return i.kind===M.COLUMN}function Ni(i){return wt(i)&&i instanceof ue}function Fr(i){return i.kind===M.INDEXES}function Nt(i){return i.kind===M.INDEX}function xt(i){return Nt(i)&&i instanceof ue}function Ht(i){return i.filter(wt)}function St(i){return i.filter(Nt)}const Or=u.createContext(null);function Gr(){const i=u.useContext(Or);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Ur=({href:i,className:e,children:t})=>o.jsx("a",{href:i,className:e,children:t});Ur.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const kt=gr;function Ct(i){const e=Ye(we(i),{resolveDiff:()=>fr(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function fo(i){const e=Ye(we(i),{resolveDiff:()=>lr(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const go=dr,Kr="ux-badge_ddlapi_primary-key",At="ux-badge_ddlapi_foreign-key",Br="ux-badge_ddlapi_unique",Wr="ux-badge_ddlapi_not-null",Yr="ux-badge_ddlapi_generated",$r="public",_t="Default",Et="As",Tt="Values";function Jr(i){return i?!!(Le(i.defaultValue)||Le(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Xr="detailed";function X(i){return i===Xr}function Me(i){return i!=null}let qt=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),s=this.resolveDefaultRowVisible(n,t),l=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:s,showGeneratedRow:l,showAnyAdditionalInfoRow:a||s||l}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:s,showGeneratedRow:l}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!s&&!l,isDefaultAdditionalInfoListLastRow:e&&s&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return X(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return X(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return X(t)&&Me(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return X(t)&&Me(e==null?void 0:e.generatedExpression)}};const xi=new qt;function zr(i,e){return xi.resolveNodeVisibility(i,e)}function Qr(i,e){return xi.resolveListLastRowFlags(i,e)}function Ki(i,e){return xi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const It=u.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?o.jsx("div",{className:n,children:o.jsx("pre",{className:r||void 0,style:{fontFamily:"Inter"},children:`${t}`})}):null});It.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var Re=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(Re||{});function Zr(i={}){const{usage:e=Re.Default,textHighlighterColor:t,borderShadowColor:n,isFontMuted:r,isEmptyStringPlaceholder:a}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",e===Re.JsonSchemaValidation?"additional-info-piece_json-schema-validation":"",G.borderShadow(n)].filter(Boolean).join(" "),valueClassName:["inline",G.highlighter(t),r?G.fontMuted():"",a?"additional-info-piece_empty-string-placeholder":""].filter(Boolean).join(" ")}),[n,a,r,t,e])}const se=u.memo(i=>{const{isVisible:e,value:t,usage:n=Re.Default,textHighlighterColor:r,borderShadowColor:a,isFontMuted:s,isEmptyStringPlaceholder:l}=i,{blockClassName:d,valueClassName:f}=Zr({usage:n,textHighlighterColor:r,borderShadowColor:a,isFontMuted:s,isEmptyStringPlaceholder:l});return o.jsx(It,{isVisible:e,value:t,blockClassName:d,valueClassName:f})});se.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""},isEmptyStringPlaceholder:{required:!1,tsType:{name:"boolean"},description:""}}};function ea(i){const e=de(),t=Dt();return u.useMemo(()=>t?i===I?t.beforeLevel:t.afterLevel:e,[i,e,t])}var O=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i.JsonSchemaValidation="json-schema-validation",i))(O||{});const ia={[O.DdlApiProperty]:Vi,[O.JsonSchemaValidation]:oi},ta={[O.DdlApiProperty]:"ddlapi-property-row-body",[O.Default]:"additional-info-row-body",[O.JsonSchemaValidation]:"json-schema-property-row-body"},na={[O.DdlApiProperty]:"min-h-[26px]"};function ra(i,e={}){return{xPaddingClass:e.xPaddingClass??ia[i]??vi,bodyClass:e.bodyClass??ta[i]??"additional-info-row-body",minHeightClass:e.minHeightClass??na[i]??"",stretchLevelIndicator:i===O.DdlApiProperty}}const qe=u.memo(i=>{var E;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:s=!1,usage:l=O.Default,xPaddingClass:d,bodyClass:f,minHeightClass:g}=i,{[Y]:c,[j]:p}=i,b=ea(n),h=u.useMemo(()=>ra(l,{xPaddingClass:d,bodyClass:f,minHeightClass:g}),[l,d,f,g]),D=n===I?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,A=(E=(n===I?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??D)==null?void 0:E.backgroundColor,y=u.useMemo(()=>A?[G.background(A)]:[],[A]),m=u.useMemo(()=>{const v=a==null?void 0:a.data;if(v){if(B(v))return n!==I;if(U(v))return n===I}return(D==null?void 0:D.isContentVisible)??!0},[a,D==null?void 0:D.isContentVisible,n]),R=l===O.JsonSchemaValidation&&b===0,_=b>0&&(!s||m);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":c,"data-ddl-list-last-row":p?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",h.xPaddingClass,h.minHeightClass,h.stretchLevelIndicator?"items-stretch":"",y.join(" ")].filter(Boolean).join(" "),children:[R&&o.jsx(wi,{}),_&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:b}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m&&o.jsxs("div",{className:`${h.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[o.jsx("div",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});qe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const le=u.memo(i=>{var a;const e=je(),t=i.diffsSeverityPlacement??ee.AdditionalInfoRow,n=(a=i.diffsSeverities)==null?void 0:a[t],r=u.useMemo(()=>fi(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case ci:return o.jsx(Ue,{diffType:n==null?void 0:n.type,diffTypeCause:r,hidden:!1,children:o.jsx(Be,{left:o.jsx(qe,{...i,layoutSide:I}),right:o.jsx(qe,{...i,layoutSide:ie})})});case gi:return o.jsx(Ke,{content:o.jsx(qe,{...i,layoutSide:ie})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});le.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:"Defaults to `NodeDiffsSeverityPlacemennt.AdditionalInfoRow`. Pass a dedicated placement when\na viewer renders several `AdditionalInfoRow`s for one node (e.g. JSON Schema's Default /\nExamples / Allowed values / validation-constraint rows) so each row's floating badge reflects\nonly its own diff, not the node's overall max severity."},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};function pe(i,e){return i?(e===I?i.styles.before:i.styles.after).textHighlighterColor:void 0}function Lt(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===$r?e:`${i.schemaName}.${e}`}function aa(i){return i.join(", ")}const di=u.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Gr(),s=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",G.highlighter(n)].filter(Boolean).join(" "),[n]),d=o.jsx(a,{href:s,className:l,children:Lt(e)});return t?d:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(mn,{text:"FK",colorSchema:At,inline:!0}),d]})});di.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function oa(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Mt(i,e){return!!i||!!e}function Hi(i,e){return i?e===I?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function sa(i,e,t){return Mt(i,e)&&Hi(e,t)}function Ae(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:s,layoutSide:l}=i;if(!Mt(r,a))return null;if(!Hi(a,l))return oa();const d=Dr(a)?a==null?void 0:a.data:void 0;return o.jsx(Xi,{label:t,colorSchema:n,layoutMode:s,layoutSide:l,isNodeChanged:!1,isContentChanged:!!d,$changes:d},da(e,t))}function la(i){const{columnId:e,target:t,targetDiff:n,layoutMode:r,layoutSide:a}=i,s=ua(e,t),l=pe(n,a);if(n&&!Hi(n,a))return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},s);if(!n)return o.jsx(di,{target:t},s);const d=n.data;return o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Xi,{label:"FK",colorSchema:At,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:d}),o.jsx(di,{target:t,hideBadge:!0,textHighlighterColor:l})]},s)}const Ne=u.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,s=je(),l=u.useMemo(()=>n??{},[n]),d=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Ae({columnId:e,label:"PK",colorSchema:Kr,flagValue:t.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:s,layoutSide:a}),[e,l.isPrimaryKey,s,a,t.isPrimaryKey]),g=u.useMemo(()=>sa(t.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,t.isPrimaryKey]),c=u.useMemo(()=>Ae({columnId:e,label:"unique",colorSchema:Br,flagValue:t.isUnique,flagDiff:l.isUnique,layoutMode:s,layoutSide:a}),[e,l.isUnique,s,a,t.isUnique]),p=u.useMemo(()=>g?null:Ae({columnId:e,label:"not null",colorSchema:Wr,flagValue:t.isNotNull,flagDiff:l.isNotNull,layoutMode:s,layoutSide:a}),[e,l.isNotNull,g,s,a,t.isNotNull]),b=u.useMemo(()=>Ae({columnId:e,label:"generated",colorSchema:Yr,flagValue:t.isGenerated,flagDiff:l.isGenerated,layoutMode:s,layoutSide:a}),[e,l.isGenerated,s,a,t.isGenerated]),h=u.useMemo(()=>{const C=t.foreignKeyTargets??[];return C.length===0?[]:C.map(A=>la({columnId:e,target:A,targetDiff:d[Jn(A)],layoutMode:s,layoutSide:a}))},[e,s,a,d,t.foreignKeyTargets]),D=u.useMemo(()=>[f,c,p,b,...h].filter(Boolean),[h,b,p,f,c]);return D.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:D})});function da(i,e){return`${i}-${e}`}function ua(i,e){return`${i}-FK-${Lt(e)}`}Ne.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Si=u.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?o.jsx("span",{className:n,children:`${t}`}):null});Si.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var ne=(i=>(i.Text="text",i.Block="block",i))(ne||{});function Rt(i){const{appearance:e}=i;return u.useMemo(()=>["title-row-subheader-value","subheader",e].filter(Boolean).join(" "),[e])}const xe=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ne.Text}=i,r=Rt({appearance:n});return o.jsx(Si,{isVisible:e,value:t,className:r})});xe.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};const ki=i=>{const{node:e,additionalInfoPrecededBy:t=F.DDL_COLUMN_ROW,isLastInList:n=!1,[Y]:r}=i,a=he(),s=e.value(),l=u.useMemo(()=>zr(e,a),[e,a]),d=u.useMemo(()=>Qr(n,l),[n,l]),f=u.useCallback(b=>s?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(xe,{isVisible:!0,value:s.columnType.label,appearance:ne.Text}),o.jsx(Ne,{columnId:e.id,layoutSide:b,value:s})]}):o.jsx(o.Fragment,{}),[e.id,s]),g=u.useCallback(b=>{const h=s==null?void 0:s.defaultValue;return Le(h)?o.jsx(se,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[s]),c=u.useCallback(b=>{const h=s==null?void 0:s.generatedExpression;return Le(h)?o.jsx(se,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[s]),p=u.useCallback(b=>{var h;return(h=s==null?void 0:s.enumValues)!=null&&h.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:s.enumValues.map((D,C)=>o.jsx(se,{isVisible:!0,value:D},`${D}-${C}`))}):o.jsx(o.Fragment,{})},[s]);return s?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(re,{"data-precededby":r,[j]:d.isTitleListLastRow||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:f,usage:q.DdlApiProperty}),l.showDescription&&o.jsx(Ve,{"data-precededby":F.DDL_COLUMN_ROW,[j]:d.isDescriptionListLastRow||void 0,value:s.description??"",variant:H.body2,textFontWeight:"normal",textColor:We,usage:te.DdlApiProperty}),l.showEnumValuesRow&&o.jsx(le,{usage:O.DdlApiProperty,"data-precededby":t,[j]:d.isEnumAdditionalInfoListLastRow||void 0,label:Tt,subheader:p}),l.showDefaultRow&&o.jsx(le,{usage:O.DdlApiProperty,"data-precededby":Ki(l,"default")?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:d.isDefaultAdditionalInfoListLastRow||void 0,label:_t,subheader:g}),l.showGeneratedRow&&o.jsx(le,{usage:O.DdlApiProperty,"data-precededby":Ki(l,"generated")?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:Et,subheader:c})]}):null};ki.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Bi(i,e){return i?(e===I?i.styles.before:i.styles.after).borderShadowColor:void 0}function fa(i,e){return i?(e===I?i.styles.before:i.styles.after).isFontMuted===!0:!1}function ga(i){if(Ni(i))return pr(i)}function ca(i){if(Ni(i))return hr(i)}function pa(i){if(xt(i))return yt(i)}const Wi=new qt;class ha{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,pt(e),t),s=this.resolveEnumValuesRowVisible(n,bi(e),t),l=this.resolveDefaultRowVisible(n,Di(e),mt(e),r,t),d=this.resolveGeneratedRowVisible(n,ai(e),t);return{showDescription:a,showEnumValuesRow:s,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:s||l||d}}resolveListLastRowFlags(e,t){return Wi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Wi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=ai(e);return ve(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[Q];return!!t&&(B(t.data)||U(t.data))}resolveDescriptionRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const s=Me(e==null?void 0:e.defaultValue)||!!t||!!n;return X(a)&&s}resolveGeneratedRowVisible(e,t,n){return X(n)&&(Me(e==null?void 0:e.generatedExpression)||!!t)}}const $e=new ha;function ma(i,e){return $e.resolveNodeVisibility(i,e)}function ya(i,e){return $e.resolveListLastRowFlags(i,e)}function Yi(i,e){return $e.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function ba(i,e){return $e.resolveGeneratedExpressionSideDisplay(i,e)}function Da(i,e){return i?(e===I?i.styles.before:i.styles.after).backgroundColor:void 0}function va(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=Rt({appearance:e});return u.useMemo(()=>[r,G.highlighter(t),G.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const Ci=u.memo(i=>{const{isVisible:e,value:t,appearance:n=ne.Text,textHighlighterColor:r,backgroundColor:a}=i,s=va({appearance:n,textHighlighterColor:r,backgroundColor:a});return o.jsx(Si,{isVisible:e,value:t,className:s})});Ci.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Va(i){return i.text===", "||i.text===","}function ui(i,e,t,n){return i.diff?o.jsx(Ci,{isVisible:!0,value:i.text,appearance:ne.Text,textHighlighterColor:pe(i.diff,t),backgroundColor:n?Da(i.diff,t):void 0},`${i.text}-${e}`):o.jsx(xe,{isVisible:!0,value:i.text,appearance:ne.Text},`${i.text}-${e}`)}function wa(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(Va(r)){n=!0;return}n&&(t.push(o.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(ui(r,a,e,!1))}),t}const Pe=u.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind===W.NO_DIFFS?ui({text:e.text},0,t,!1):e.kind===W.WHOLE_DIFFS?ui({text:e.text,diff:e.diff},0,t,!0):o.jsx("span",{className:"inline-flex items-center",children:wa(e.segments,t)})});Pe.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Na(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function xa(i,e,t){return i.diff?o.jsx(Ci,{isVisible:!0,value:i.text,appearance:ne.Text,textHighlighterColor:pe(i.diff,t)},`${i.text}-${e}`):o.jsx(xe,{isVisible:!0,value:i.text,appearance:ne.Text},`${i.text}-${e}`)}const Pt=u.memo(i=>{const{node:e,layoutSide:t}=i,n=er(e,t);if(n.kind===W.NO_DIFFS||n.kind===W.WHOLE_DIFFS)return o.jsx(Pe,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=Na(n.segments);return o.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((s,l)=>xa(s,l,t)),a.length>0&&o.jsx(Pe,{layoutSide:t,display:{kind:W.PARTIAL_DIFFS,segments:a}})]})});Pt.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const jt=i=>{const{node:e,additionalInfoPrecededBy:t=F.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[Y]:a}=i,s=he(),l=e.value(),d=u.useMemo(()=>kt(e),[e]),f=u.useMemo(()=>Ct(e),[e]),g=u.useMemo(()=>ca(e),[e]),c=u.useMemo(()=>ga(e),[e]),p=u.useMemo(()=>pt(e),[e]),b=u.useMemo(()=>ai(e),[e]),h=u.useMemo(()=>bi(e),[e]),D=u.useMemo(()=>mr(e),[e]),C=u.useMemo(()=>Di(e),[e]),A=u.useMemo(()=>mt(e),[e]),y=u.useMemo(()=>ma(e,s),[e,s]),m=u.useMemo(()=>ya(n,y),[n,y]),R=u.useCallback(V=>l?gt(d,V)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(Pt,{node:e,layoutSide:V}),o.jsx(Ne,{columnId:e.id,layoutSide:V,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[g,c,e,d,l]),_=u.useCallback(V=>{const w=yr(e,V);return w===void 0?o.jsx(o.Fragment,{}):o.jsx(se,{isVisible:!0,value:w,textHighlighterColor:pe(C,V),borderShadowColor:Bi(C,V)})},[C,e]),E=u.useCallback(V=>{const w=ba(e,V);return w===void 0?o.jsx(o.Fragment,{}):o.jsx(se,{isVisible:!0,value:w,textHighlighterColor:pe(b,V)})},[b,e]),v=u.useCallback(V=>{const w=br(e,V);return w.length===0?o.jsx(o.Fragment,{}):o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w.map((S,N)=>o.jsx(se,{isVisible:!0,value:S.literal,textHighlighterColor:pe(S.diff,V),borderShadowColor:Bi(S.diff,V),isFontMuted:fa(S.diff,V)},`${S.literal}-${N}`))})},[e]);return l?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(re,{"data-precededby":a,[j]:m.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:R,usage:q.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),y.showDescription&&o.jsx(Ve,{"data-precededby":F.DDL_COLUMN_ROW,[j]:m.isDescriptionListLastRow||void 0,value:l.description??"",variant:H.body2,textFontWeight:"normal",textColor:We,usage:te.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),y.showEnumValuesRow&&o.jsx(le,{usage:O.DdlApiProperty,"data-precededby":t,[j]:m.isEnumAdditionalInfoListLastRow||void 0,label:Tt,subheader:v,colorizingDiff:D,diffsSeverities:h||D?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),y.showDefaultRow&&o.jsx(le,{usage:O.DdlApiProperty,"data-precededby":Yi(y,"default")?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:m.isDefaultAdditionalInfoListLastRow||void 0,label:_t,subheader:_,colorizingDiff:A,diffsSeverities:C||A?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),y.showGeneratedRow&&o.jsx(le,{usage:O.DdlApiProperty,"data-precededby":Yi(y,"generated")?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[j]:m.isGeneratedAdditionalInfoListLastRow||void 0,label:Et,subheader:E,diff:b,colorizingDiff:e.diffs[Q],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};jt.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ft(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,s=t?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,l=t?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,d={columnNode:n,titlePrecededBy:s,additionalInfoPrecededBy:l,isLastInList:a};return t=e&&Jr(n.value()),d})}const Ha=i=>{const{node:e,[Y]:t}=i;return Pr(e)?o.jsx(ka,{"data-precededby":t,node:e}):o.jsx(Sa,{"data-precededby":t,node:e})},Sa=i=>{const{node:e,[Y]:t}=i,n=de(),r=he(),a=e.value(),s=Ht(e.childrenNodes()),l=r===zi,d=u.useMemo(()=>Ft(s,l),[s,l]);return s.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(re,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:q.DdlApiSection}),o.jsx(Fe.Provider,{value:n+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>o.jsx(ki,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},ka=i=>{const{node:e,[Y]:t}=i,n=de(),r=he(),a=e.value(),s=Ht(e.childrenNodes()),l=r===zi,d=u.useMemo(()=>Ye(we(e)),[e]),f=u.useMemo(()=>Ft(s,l),[s,l]),g=u.useMemo(()=>ct(e),[e]);return s.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(re,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:q.DdlApiSection,...d}),o.jsx(Fe.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:b,isLastInList:h})=>Ni(c)?o.jsx(jt,{"data-precededby":p,additionalInfoPrecededBy:b,isLastInList:h,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):o.jsx(ki,{"data-precededby":p,additionalInfoPrecededBy:b,isLastInList:h,node:c},c.id))})]})};Ha.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Ot=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return X(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const Gt=new Ot;function Ca(i,e){return Gt.resolveNodeVisibility(i,e)}function Aa(i,e){return Gt.resolveListLastRowFlags(i,e)}const Ai=i=>{const{node:e,isLastInList:t=!1,[Y]:n}=i,r=he(),a=e.value(),s=u.useMemo(()=>Ca(e,r),[e,r]),l=u.useMemo(()=>Aa(t,s),[t,s]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(c=>{if(!a)return o.jsx(o.Fragment,{});const p=aa(a.partNames);return o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&o.jsx(xe,{isVisible:!0,value:`(${p})`,appearance:ne.Text}),o.jsx(Ne,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=s.showDescription;return a?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(re,{"data-precededby":n,[j]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:H.body2,subheader:s.showSubheader?f:void 0,usage:q.DdlApiProperty}),g&&o.jsx(Ve,{"data-precededby":F.DDL_INDEX_ROW,[j]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:We,usage:te.DdlApiProperty})]}):null};Ai.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const _a=new Ot;class Ea{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,ht(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=yt(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return _a.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return X(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const Ut=new Ea;function Ta(i,e){return Ut.resolveNodeVisibility(i,e)}function qa(i,e){return Ut.resolveListLastRowFlags(i,e)}const Kt=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[Y]:r}=i,a=he(),s=e.value(),l=u.useMemo(()=>Ta(e,a),[e,a]),d=u.useMemo(()=>qa(t,l),[t,l]),f=u.useMemo(()=>kt(e),[e]),g=u.useMemo(()=>Ct(e),[e]),c=u.useMemo(()=>pa(e),[e]),p=u.useMemo(()=>ht(e),[e]),b=(s==null?void 0:s.indexName)??"",h=u.useCallback(A=>{const y=sr(e,A);return o.jsx(Pe,{layoutSide:A,display:y})},[e]),D=u.useCallback(A=>{if(!s)return o.jsx(o.Fragment,{});if(!gt(f,A))return o.jsx(o.Fragment,{});const y=s.partNames.length>0;return o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[y&&h(A),o.jsx(Ne,{columnId:e.id,layoutSide:A,value:s,flagDiffs:c})]})},[c,e.id,f,h,s]),C=l.showDescription;return s?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(re,{"data-precededby":r,[j]:d.isTitleListLastRow||void 0,value:b,expandable:!1,expanded:!0,variant:H.body2,subheader:l.showSubheader?D:void 0,usage:q.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),C&&o.jsx(Ve,{"data-precededby":F.DDL_INDEX_ROW,[j]:d.isDescriptionListLastRow||void 0,value:s.description??"",variant:H.body1,textFontWeight:"normal",textColor:We,usage:te.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};Kt.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Bt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:F.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const Ia=i=>{const{node:e,[Y]:t}=i;return jr(e)?o.jsx(Ma,{"data-precededby":t,node:e}):o.jsx(La,{"data-precededby":t,node:e})},La=i=>{const{node:e,[Y]:t}=i,n=de(),r=e.value(),a=St(e.childrenNodes()),s=u.useMemo(()=>Bt(a),[a]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(re,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:q.DdlApiSection}),o.jsx(Fe.Provider,{value:n+1,children:s.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>o.jsx(Ai,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},Ma=i=>{const{node:e,[Y]:t}=i,n=de(),r=e.value(),a=St(e.childrenNodes()),s=u.useMemo(()=>Ye(we(e)),[e]),l=u.useMemo(()=>Bt(a),[a]),d=u.useMemo(()=>ct(e),[e]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(re,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:q.DdlApiSection,...s}),o.jsx(Fe.Provider,{value:n+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>xt(f)?o.jsx(Kt,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):o.jsx(Ai,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};Ia.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{ze as $,Y as A,Za as B,Ha as C,$r as D,me as E,Xa as F,za as G,qn as H,Ia as I,eo as J,Qa as K,et as L,pe as M,Ue as N,Ke as O,F as P,Be as Q,go as R,ue as S,re as T,fo as U,ur as V,to as W,vi as X,no as Y,uo as Z,yn as _,Fr as a,bn as a0,xn as a1,Hn as a2,vn as a3,Vn as a4,Dn as a5,ae as a6,Zi as a7,Ua as a8,Qi as a9,te as aA,Hr as aB,Vi as aC,wi as aD,cr as aE,se as aF,Re as aG,Bi as aH,fa as aI,so as aJ,le as aK,O as aL,Qn as aM,zn as aN,Xn as aO,Ka as aa,Ga as ab,Oa as ac,Wa as ad,Ya as ae,L as af,ao as ag,ro as ah,oo as ai,bt as aj,Vr as ak,_r as al,Dt as am,we as an,Ye as ao,q as ap,$a as aq,vr as ar,X as as,W as at,ve as au,oi as av,ea as aw,Da as ax,xr as ay,Nr as az,H as b,Ve as c,We as d,wn as e,io as f,lo as g,Mr as h,Rr as i,Or as j,Ur as k,k as l,Bn as m,Qe as n,Jn as o,Gn as p,ot as q,Ja as r,tt as s,Ba as t,mi as u,Ge as v,M as w,nt as x,rt as y,In as z};
