var on=Object.defineProperty;var ln=(i,e,n)=>e in i?on(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var P=(i,e,n)=>(ln(i,typeof e!="symbol"?e+"":e,n),n);import{v as U,w as O,y as Ge,x as W,_ as Ke,$ as oi,a0 as we,N as te,a1 as mi,Q as T,a2 as sn,a3 as dn,M as be,R as un,O as De,V as N,H as ue,a4 as Ue,a5 as Ve,a6 as fn,X as Q,W as R,a7 as yi,a8 as le,a9 as qe,Y as Ae,T as bi,Z as Xe,k as ze,S as Je,aa as gn,ab as cn,z as pn,ac as X,ad as hn,ae as Di,u as fe,h as ge,f as Te}from"./DiffBadge-225a7fbf.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const li={SIMPLE:"simple",COMPLEX:"complex"},mn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},yn=Object.values(mn);new Set(yn);class Ee{aggregateByDescendantDiffs(e,n,t,a){}static isDiffsRecord(e){if(!_(e))return!1;for(const n of Object.values(e))if(!Ee.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return _(n)&&(U(n)||O(n)||Ge(n)||W(n))}}function _(i){return vi(i)&&!Array.isArray(i)}function vi(i){return typeof i=="object"&&i!==null}function bn(i){return _(i)&&Object.keys(i).every(e=>typeof e=="string")}function Oe(i){return Array.isArray(i)}function Da(i,e,n){let t=i,a=!1;for(const r of e){if(!_(t)&&!Oe(t))return;if(a){let s;vi(t)&&(s=t[r]),!s&&Oe(t)&&n&&(s=t.find(g=>_(g)&&g[n]===r)),t=s,a=!1;continue}t=t[r],Oe(t)&&(a=!0)}return t}function va(i,e){return Object.keys(i).find(n=>i[n]===e)}function ka(i){if(Ee.isDiffsRecord(i))return i}class Va{constructor(){P(this,"tree",null)}pick(e,n){if(!_(e))return null;const t={};for(const a of n){const r=String(a);if(!(r in e))continue;const o=e[r];Array.isArray(o)?t[r]=[...o]:_(o)?t[r]={...o}:t[r]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const ve=()=>{},Ha=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ve,info:ve,warn:ve,error:ve};function Dn(i){return i==null||!_(i)&&!Ke(i)}function xa(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:a,createNodeParams:r,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:g,isComplexNode:f,resolveNodeKey:u,isDisallowedValue:c=Dn,shouldStopAfterNodeCreation:p}=i;return[({value:h,state:y,key:S,path:C})=>{if(typeof S=="symbol")return;if(!_(h)&&!Ke(h))return{value:h};const{alreadyConvertedValuesCache:A,parent:D,container:w}=y,H=A.get(h);if(!H||!g(H)&&!f(H))return{value:h};if(!D||!g(D))return{value:h};const x="#"+oi(C),q=u(S,h),I=n.createCycledClone(H,x,q,D);return w?w.addNestedNode(I):D&&D.addChildNode(I),{done:!0}},({key:h,value:y,path:S,state:C,rules:A})=>!A||!Array.isArray(A.transformers)?void 0:{value:A.transformers.reduce((H,x)=>x(h,H,e,S,C),y)},({key:h,value:y,path:S,rules:C,state:A})=>{if(!C)return{done:!0};if(typeof h=="symbol")return{done:!0};if(c(y))return{done:!0};if(!C.kind||!t.includes(C.kind))return;const{parent:D,container:w}=A,H="#"+oi(S),x=u(h,y),{kind:q,complex:I=!1}=C,b=r(y,D,w),L=a(H,x,q,I,b);if(!L)return;w?w.addNestedNode(L):D&&D.addChildNode(L);let z=y;if(p!=null&&p(L,y)){const J=D?D.descendantDiffs:void 0;if(!J||!(h in J))return{done:!0};const B=J[h];if(!B)return{done:!0};const{data:j}=B;W(j)&&(z=j.beforeValue)}const ie=new Map(A.alreadyConvertedValuesCache);(_(y)||Ke(y))&&ie.set(y,L);let G;return g(L)?G=o(A,L,ie):G=s(A,L,ie),{value:z,state:G}}]}class vn{}class se{constructor(e="#",n="",t,a,r){P(this,"type");P(this,"parent");P(this,"container");P(this,"newDataLevel");P(this,"_value");P(this,"_meta");P(this,"_childrenNodes",[]);P(this,"_nestedNodes",[]);P(this,"_diffs",{});P(this,"_diffsSummary",new Set);P(this,"_descendantDiffs",{});P(this,"_descendantDiffsSummary",new Set);P(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=a;const{type:o=li.SIMPLE,value:s=null,parent:g=null,container:f=null,newDataLevel:u=!0,meta:c}=r;this.type=o,this.parent=g,this.container=f,this.newDataLevel=u,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const a=new se(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a.setChildrenNodes(this._childrenNodes),a.setNestedNodes(this._nestedNodes),a}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===li.COMPLEX){const a=t.findNestedNode(e,n);if(a)return a}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const M={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},kn=Object.values(M),ki="<unnamed>";function Vn(i){return i??ki}function Vi(i){return i!==ki}function Ca(i,e){return e.indexName&&Vi(e.indexName)?e.indexName:i}function wa(i,e,n){return n||(e!=null&&e.indexName&&Vi(e.indexName)?e.indexName:String(i))}function si(i=M.TABLE){return{"/columns":{"/items":{"/*":()=>si(M.COLUMN)},kind:M.COLUMNS},"/indexes":{"/items":{"/*":()=>si(M.INDEX)},kind:M.INDEXES},kind:i}}function Hn(i){return i.kind===we.Literal&&typeof i.value=="string"}function xn(i){return i.kind===we.RawExpr&&typeof i.expr=="string"}function Cn(i){return _(i)&&typeof i.expr=="string"}function wn(i){return _(i)&&typeof i.value=="string"}const ce="titleRow",qn=["typeName","size","precision","scale","label"],qa={ToEnum:"to-enum",FromEnum:"from-enum"},Na={Lost:"lost",Gained:"gained"},Hi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],xi=["isUnique"],Sa=[te,ce,"tableName","schemaName","description"],Aa=[te,ce,"columnName","description","generatedExpression",...Hi],Ta=[te,ce,"indexName",...xi];function Nn(i){if(!_(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!_(n)||!("before"in n)||!("after"in n)?!1:Ee.isDiff(e)}function Ci(i){return Nn(i[ce])}function Sn(i){return _(i)&&i.kind===mi.Domain&&typeof i.type=="string"}function An(i){return i.kind===T.BoolType&&typeof i.type=="string"}function Tn(i){return i.kind===T.IntegerType&&typeof i.type=="string"}function di(i){return i.kind===T.DecimalType&&typeof i.type=="string"}function ui(i){return i.kind===T.FloatType&&typeof i.type=="string"}function fi(i){return i.kind===T.StringType&&typeof i.type=="string"}function gi(i){return i.kind===T.BinaryType&&typeof i.type=="string"}function ci(i){return i.kind===T.TimeType&&typeof i.type=="string"}function En(i){return i.kind===T.JSONType&&typeof i.type=="string"}function _n(i){return i.kind===T.SpatialType&&typeof i.type=="string"}function Mn(i){return i.kind===T.UUIDType&&typeof i.type=="string"}function Pe(i){return i.kind===T.EnumType&&Array.isArray(i.values)}function In(i){return i.kind===T.UnsupportedType&&typeof i.type=="string"}function pi(i){return typeof i.type=="string"}function Qe(i){switch(i.kind){case we.Literal:return Hn(i)?i.value:i.kind;case we.RawExpr:return xn(i)?i.expr:i.kind;case sn.NamedDefault:try{return Qe(dn(i))}catch{return i.kind}default:return Cn(i)?i.expr:wn(i)?i.value:i.kind}}function wi(i){return qi(Qe(i))}function Ln(i){return qi(i)}function qi(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const jn="Columns",Fn="Indexes";class Ea{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const a=this.findTableInRealm(t,n);return a?this.buildTableOrientedSpecFromRealm(t,a,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(r=>r.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const a=be(n.attrs,De.Comment);return{tableName:n.name,schemaName:t.schemaName,...a?{description:a.text}:{},columns:{title:jn,items:(n.columns??[]).map(r=>this.buildColumnRowValue(e,n,r,t.schemaName))},indexes:{title:Fn,items:(n.indexes??[]).map(r=>this.buildIndexRowValue(r))}}}extractRealm(e){return this.isRealm(e)?e:_(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var a;const t=e.schemas.find(r=>r.name===n.schemaName);if(t)return(a=t.tables)==null?void 0:a.find(r=>r.name===n.name)}isRealm(e){return _(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!_(e)||typeof e.tableName!="string"||!_(e.columns)||!Array.isArray(e.columns.items)||!_(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,a){var h,y,S;const r=be(t.attrs,De.Comment),o=(h=t.attrs)==null?void 0:h.find(C=>C.kind===un.Identity),s=be(t.attrs,De.GeneratedExpr),g=o!==void 0||s!==void 0,u=this.findForeignKeysForColumn(n,t).map(C=>this.buildForeignKeyTarget(e,C,t,a)).filter(C=>C!==void 0),c=u.length>0,p=this.formatColumnType(t.type),m=(y=t.type)==null?void 0:y.type,v=m&&Pe(m)?m.values:void 0,k=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:p,...v?{enumValues:v}:{},isPrimaryKey:k,isForeignKey:c,...u.length>0?{foreignKeyTargets:u}:{},isGenerated:g,...o?{generatedBy:"identity"}:{},...s&&!o?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!k&&((S=t.type)==null?void 0:S.null)===!1,...t.default!==void 0?{defaultValue:wi(t.default)}:{},...r?{description:r.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((a,r)=>a.seqNo-r.seqNo).map(a=>this.formatIndexPartName(a)).filter(a=>a.length>0),t=be(e.attrs,De.Comment);return{indexName:Vn(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const a of e.schemas)if((t=a.tables)!=null&&t.some(r=>r===n))return a.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(a=>{var r;return((r=a.column)==null?void 0:r.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>{var a,r,o;return t.unique===!0&&((a=t.parts)==null?void 0:a.length)===1&&((o=(r=t.parts[0])==null?void 0:r.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var a;return(a=t.columns)==null?void 0:a.some(r=>this.isSameForeignKeyColumn(r,n))})}buildForeignKeyTarget(e,n,t,a){var f,u;const r=((f=n.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(r<0)return;const o=n.refTable,s=(u=n.refColumns)==null?void 0:u[r];if(!o||!s)return;const g=this.resolveForeignKeyTargetSchemaName(e,o,a);if(g)return{schemaName:g,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,t){const a=this.findSchemaNameForTable(e,n);if(a)return a;const r=this.findUniqueSchemaNameForTableName(e,n.name);return r||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(a=>{var r;return(r=a.tables)==null?void 0:r.some(o=>o.name===n)}).map(a=>a.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Sn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return An(e)?{kind:T.BoolType,typeName:e.type,label:n}:Tn(e)?{kind:T.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:di(e)?{kind:T.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ui(e)?{kind:T.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:fi(e)?{kind:T.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:gi(e)?{kind:T.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ci(e)?{kind:T.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:En(e)?{kind:T.JSONType,typeName:e.type,label:n}:_n(e)?{kind:T.SpatialType,typeName:e.type,label:n}:Mn(e)?{kind:T.UUIDType,typeName:e.type,label:n}:Pe(e)?{kind:T.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:In(e)?{kind:T.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:pi(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:mi.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return di(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):fi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):gi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ui(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):ci(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Pe(e)?n=e.type??e.values[0]??"enum":pi(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(a=>a!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Qe(e.expr):""}}const On=new Set([M.TABLE,M.COLUMNS,M.COLUMN,M.INDEXES,M.INDEX]);class Ni extends vn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,a){return!bn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:a(t,Ni.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return On.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case M.TABLE:return["tableName","schemaName","description"];case M.COLUMNS:case M.INDEXES:return["title"];case M.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case M.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function Pn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function Rn(i,e,n){const t=n===N,a=new Set,r=[],o=g=>{const f=e==null?void 0:e[g];if(f)return f;for(const u of Object.values(e??{}))if(u&&W(u.data)&&u.data.afterValue===g)return u};for(const g of i){const f=o(g);if(!f){r.push({text:g});continue}if(a.has(f))continue;a.add(f);const{data:u}=f;if(U(u)){!t&&typeof u.afterValue=="string"&&r.push({text:u.afterValue,diff:f});continue}if(O(u)){t&&typeof u.beforeValue=="string"&&r.push({text:u.beforeValue,diff:f});continue}if(W(u)){const c=t?typeof u.beforeValue=="string"?u.beforeValue:g:typeof u.afterValue=="string"?u.afterValue:g;r.push({text:c,diff:f})}}for(const[g,f]of Object.entries(e??{}))!f||a.has(f)||O(f.data)&&t&&(r.push({text:g,diff:f}),a.add(f));const s=g=>{const f=i.indexOf(g);return f>=0?f:i.length};return r.sort((g,f)=>s(g.text)-s(f.text))}function Si(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,a)=>{a>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Ne(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,a=n===N;return U(t)?a?void 0:String(t.afterValue??i??""):O(t)?a?String(t.beforeValue??i??""):void 0:W(t)?String(a?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function Gn(i,e){return(e===N?i.styles.before:i.styles.after).isContentVisible}const Ai=["size","precision","scale"];function Kn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Un(i,e){var f;const n=(f=i.value())==null?void 0:f.columnType;if(!n)return{kind:"plain",text:""};const t=Kn(i);if(!t)return{kind:"plain",text:n.label};const a=t.typeName??t.label,r=t.typeName?"typeName":"label";if(Wn(t)){const u=Object.values(t).find(Boolean);return u?{kind:"monolithic",text:Bn(n,t,r,e),diff:Xn(u)}:{kind:"plain",text:n.label}}const o=[],s=Ne(We(n),a,e);s!==void 0&&o.push({text:s,diff:a});const g=Yn(n,t,e);return o.push(...g),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function Wn(i){const e=qn.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function Bn(i,e,n,t){const a=Ne(We(i),e[n],t)??We(i),r=[];for(const o of Ai){const s=Ne(Ze(i,o),e[o],t);s!==void 0&&r.push(s)}return r.length===0?a:`${a} (${r.join(", ")})`}function Yn(i,e,n){const t=$n(i,e,n);if(t.length===0)return[];const a=t.flatMap(r=>{const o=Ne(Ze(i,r),e[r],n);return o===void 0?[]:[{text:o,diff:e[r]}]});return[...Si(a,"spaced")]}function $n(i,e,n){return Ai.filter(t=>{const a=e[t];return a?Gn(a,n):Ze(i,t)!==void 0})}function We(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function Ze(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function Xn(i){const{data:e}=i;return W(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Yellow}}}:U(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Green}}}:O(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ue.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function zn(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Jn(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=zn(i),a=t?Rn(n,t,e):n.map(s=>({text:s})),r=Si(a,"tight");return r.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:r}}function Qn(i){if(Ci(i.diffs))return i.diffs[ce]}function Zn(i){const e=i.diffs[te];if(e&&(U(e.data)||O(e.data)))return e}function et(i){return i.diffs.schemaName}function _a(i){return i.diffs.description}function Ma(i,e){var o;const n=((o=i.value())==null?void 0:o.schemaName)??"",t=et(i);if(!t)return n;const a=t.data,r=e===N;return U(a)?r?"":n:O(a)?r?n:"":W(a)?r?typeof a.beforeValue=="string"?a.beforeValue:n:typeof a.afterValue=="string"?a.afterValue:n:n}function it(i){if(Ci(i.diffs))return i.diffs[ce]}function nt(i){const e=i.diffs[te];if(e&&(U(e.data)||O(e.data)))return e}function Ti(i,e){return i?(e===N?i.styles.before:i.styles.after).isHeaderVisible:!0}function tt(i,e){return i?(e===N?i.styles.before:i.styles.after).isContentVisible:!0}function Ei(i){const e=i.diffs[te];return e?U(e.data)||O(e.data):!1}function at(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function rt(i){const e={};let n=!1;for(const t of Hi){const a=i.diffs[t];a&&(e[t]=a,n=!0)}return n?e:void 0}function ot(i){return i.diffs.generatedExpression}function lt(i){return i.diffs.description}function st(i){return i.diffs.description}function _i(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function dt(i){return i.diffs.enumValuesRowColorizingDiff}function Mi(i){return i.diffs.defaultValue}function ut(i){return i.diffs.defaultValueRowColorizingDiff}function ft(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Mi(i);if(!t)return n;const a=t.data,r=e===N;return U(a)?r?void 0:n:O(a)?r?Re(a.beforeValue)??n:void 0:W(a)?r?Re(a.beforeValue)??n:Re(a.afterValue)??n:n}function Re(i){if(typeof i=="string")return Ln(i);if(_(i)&&"kind"in i)return wi(i)}function gt(i,e){var f;const n=((f=i.value())==null?void 0:f.enumValues)??[],t=_i(i),a=e===N,r=new Set,o=[],s=u=>{const c=t==null?void 0:t[u];if(c)return c;for(const p of Object.values(t??{}))if(p&&W(p.data)&&p.data.afterValue===u)return p};for(const u of n){const c=s(u);if(!c){o.push({literal:u});continue}if(r.has(c))continue;r.add(c);const{data:p}=c;if(U(p)){!a&&typeof p.afterValue=="string"&&o.push({literal:p.afterValue,diff:c});continue}if(O(p)){a&&typeof p.beforeValue=="string"&&o.push({literal:p.beforeValue,diff:c});continue}if(W(p)){const m=a?typeof p.beforeValue=="string"?p.beforeValue:u:typeof p.afterValue=="string"?p.afterValue:u;o.push({literal:m,diff:c})}}for(const[u,c]of Object.entries(t??{}))!c||r.has(c)||O(c.data)&&a&&(o.push({literal:u,diff:c}),r.add(c));const g=u=>{const c=n.indexOf(u);return c>=0?c:n.length};return o.sort((u,c)=>g(u.literal)-g(c.literal))}function ct(i){const e={};let n=!1;for(const t of xi){const a=i.diffs[t];a&&(e[t]=a,n=!0)}return n?e:void 0}function pt(i){return i?i.highlightingMode.get(Ue.Default)!==Ve.Invisible:!1}const ht=d.createContext(!1),_e=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:a=!1}=i;return a||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(fn,{variant:n,message:t}),e]})};_e.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Me=d.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});Me.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ie=d.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:n})]})});Ie.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ii="px-4",mt="",yt="px-4",ei="";var E=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(E||{});var V=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(V||{});const bt=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:a}=i,r=d.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${kt(a)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:r,children:n?"Show less":"Show more"})})})},Li=d.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:a,diff:r,usage:o,highlightingMode:s=Ve.Default}=i,g=s===Ve.Default,f=s===Ve.Invisible,{textFontWeight:u,labelFontWeight:c,labelColor:p,textColor:m,label:v}=i,[k,h]=d.useState(!1),y=d.useCallback((H,x,q)=>{if(q)return null;const I=f?"":x.join(" "),b=`text-value ${a?"hover:cursor-pointer":""} ${u?`font-${u}`:""}`.trim(),L=`${b} ${I}`.trim(),z={onClick:a,...m!=null&&m.trim()?{style:{color:m}}:{}};H=k?H:vt(H);const ie=(G,J)=>{const B={...z,className:J};switch(n){case V.h1:return l.jsx("h1",{...B,children:G});case V.h2:return l.jsx("h2",{...B,children:G});case V.h3:return l.jsx("h3",{...B,children:G});case V.h4:return l.jsx("h4",{...B,children:G});case V.h5:return l.jsx("h5",{...B,children:G});case V.h6:return l.jsx("h6",{...B,children:G});case V.body1:return l.jsx("span",{...B,className:`${J} text-value-body1`.trim(),children:G});case V.body2:return l.jsx("span",{...B,className:`${J} text-value-body2`.trim(),children:G})}};return v?ie(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${v}: `}),l.jsx("span",{className:I,children:H})]}),b):ie(H,L)},[k,f,v,p,c,a,m,u,n]),S=d.useCallback(H=>{const x=[];let q=H,I=!1;if(r){const{data:b,styles:L}=r;switch(t){case N:x.push(R.highlighter(L.before.textHighlighterColor)),g&&(O(b)&&(q=de(b.beforeValue)?b.beforeValue:q),W(b)&&(o===E.JsoProperty&&!f&&x.push(R.highlighter(ue.Yellow)),q=de(b.beforeValue)?b.beforeValue:q),Ge(b)&&(q=de(b.beforeKey)?b.beforeKey:q)),U(b)&&(I=!0);break;case Q:x.push(R.highlighter(L.after.textHighlighterColor)),g&&(U(b)&&(q=de(b.afterValue)?b.afterValue:q),W(b)&&(o===E.JsoProperty&&!f&&x.push(R.highlighter(ue.Yellow)),q=de(b.afterValue)?b.afterValue:q),Ge(b)&&(q=de(b.afterKey)?b.afterKey:q)),O(b)&&(I=!0);break}}return[q,x,I]},[r,g,f,t,o]),[C,A,D]=S(e);return d.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(C,A,D),!D&&l.jsx(bt,{isExpandable:Dt(C),expanded:k,setExpanded:h,variant:n})]}),[y,C,A,D,k,h,n])}),Be=5,Ye=300;function Dt(i){return i?i.length>Ye||yi.trim(i.split(`
`)).length>Be:!1}function vt(i){if(!i)return;if(i.length>Ye)return i.slice(0,Ye)+"...";const e=yi.trim(i.split(`
`));return e.length>Be?e.slice(0,Be).join(`
`)+"...":i}function de(i){return typeof i=="string"}function kt(i){switch(i){case V.h1:return"text-value-expander--h1";case V.h2:return"text-value-expander--h2";case V.h3:return"text-value-expander--h3";case V.h4:return"text-value-expander--h4";case V.h5:return"text-value-expander--h5";case V.h6:return"text-value-expander--h6";case V.body1:return"text-value-expander--body1";case V.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const $="data-precededby",K="data-ddl-list-last-row";var F=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(F||{}),Z=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Z||{});const Vt={[Z.DdlApiProperty]:ei},Ht={[Z.DdlApiProperty]:["min-h-[26px]"]};function xt(i){const e=Vt[i]??Ii,n=Ht[i]??[];return[e,...n].join(" ")}const He=d.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:a=Z.Default,hideLevelIndicatorWhenSideEmpty:r=!1}=i,{label:o,labelFontWeight:s,textFontWeight:g,labelColor:f,textColor:u}=i,{[$]:c}=i,{diff:p,descendantDiffs:m,diffsSeverities:v}=i,k=le(),h=a===Z.DdlApiProperty,y=d.useMemo(()=>!r||tt(p,t),[p,r,t]),S=h&&k>0&&y,C=d.useMemo(()=>{if(!p)return[];const{data:w,styles:H}=p;if(!w)return[];const x=[];return t===N&&x.push(R.background(H.before.backgroundColor)),t===Q&&x.push(R.background(H.after.backgroundColor)),x},[p,t]),A=d.useMemo(()=>xt(a),[a]),D=l.jsx(Li,{label:o,labelFontWeight:s,textFontWeight:g,labelColor:f,textColor:u,value:e,variant:n,layoutSide:t,diff:p});return l.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${h?"items-stretch":""} ${A} gap-2 ${C.join(" ")}`,children:[S&&l.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:k}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:D}):D]})});He.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const he=d.memo(i=>{const e=Ae(),{diffsSeverities:n,diffsSeverityPlacement:t=bi.DescriptionRow}=i,a=d.useMemo(()=>n==null?void 0:n[t],[n,t]),r=d.useMemo(()=>a==null?void 0:a.type,[a]),o=d.useMemo(()=>Xe(a==null?void 0:a.causedAt),[a]);switch(e){case Je:return l.jsx(_e,{diffType:r,diffTypeCause:o,hidden:!1,children:l.jsx(Ie,{left:l.jsx(He,{...i,layoutSide:N}),right:l.jsx(He,{...i,layoutSide:Q})})});case ze:return l.jsx(Me,{content:l.jsx(He,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});he.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Le="#353C4E",Ct=d.createContext(void 0);function wt(){return d.useContext(Ct)}const ji=i=>{const{expandable:e,expanded:n,onClick:t,level:a}=i,r=d.useContext(ht),o=a>0,s=t??(()=>{r&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(gn,{short:e}),e&&n!==void 0&&l.jsx(cn,{onToggle:s,expanded:n})]})};ji.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const qt={[E.JsoProperty]:mt,[E.DdlApiSection]:yt,[E.DdlApiProperty]:ei},Nt={[E.JsoProperty]:["min-h-[26px]"],[E.DdlApiProperty]:["min-h-[26px]"]};function St(i){const e=qt[i]??Ii,n=Nt[i]??[];return[e,...n].join(" ")}const xe=d.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:a,variant:r,layoutSide:o,enableHeader:s=!0,enableHeaderValue:g=!0,subheader:f,usage:u=E.Default,highlightingMode:c=pn,hideLevelIndicatorWhenSideEmpty:p=!1}=i,{diff:m,descendantDiffs:v,diffsSeverities:k}=i,{[$]:h,[K]:y}=i,S=d.useMemo(()=>{switch(u){case E.Default:return c.get(Ue.Default);case E.AsyncApiJsoSection:case E.JsoProperty:return c.get(Ue.JsoPropertyKey)}},[c,u]),C=le(),A=wt(),D=d.useMemo(()=>A?o===N?A.beforeLevel:A.afterLevel:C,[o,C,A]),w=d.useMemo(()=>{const b=[];if(!m)return b;const{data:L,styles:z}=m;return L&&(o===N&&b.push(R.background(z.before.backgroundColor)),o===Q&&b.push(R.background(z.after.backgroundColor))),b},[m,o]),H=d.useMemo(()=>g?l.jsx(Li,{"data-precededby":h,value:a,variant:r,layoutSide:o,diff:m,usage:u,highlightingMode:S,onClick:t}):null,[g,h,a,r,o,m,u,S,t]),x=u===E.DdlApiProperty,q=d.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||D>0)&&l.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:D}),l.jsx(ji,{expandable:e,expanded:n,onClick:t,level:D})]}),!x&&H]}):p?null:D>0&&l.jsx(qe,{level:D}),[s,e,n,H,p,x,D,t,h]),I=d.useMemo(()=>St(u),[u]);return l.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":y?!0:void 0,"data-usage":u!==E.Default?u:void 0,className:`title-row-content flex w-full ${x?"items-stretch":"items-center"} h-full ${I} gap-2 ${w.join(" ")}`,children:[q,x?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[H,f==null?void 0:f(o)]}):f==null?void 0:f(o)]})});xe.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(i=>{const e=Ae(),{diff:n,diffsSeverities:t,enableHeaderValue:a}=i,r=d.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=d.useMemo(()=>r==null?void 0:r.type,[r]),s=d.useMemo(()=>Xe(r==null?void 0:r.causedAt),[r]);switch(e){case Je:return l.jsx(_e,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(Ie,{left:l.jsx(xe,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:a,layoutSide:N}),right:l.jsx(xe,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:a,layoutSide:Q})})});case ze:return l.jsx(Me,{content:l.jsx(xe,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ia(i,e){return d.useMemo(()=>e(i)?me(i):{},[e,i])}function me(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function je(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:a=!0,diffsSeverityPlacement:r,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:g,nodeDiffsSeverities:f}=i;if(!s)return{};const u=Object.entries(s),c=v=>{const k=u.find(([h])=>h===String(v));return k==null?void 0:k[1]},p=n?c(n):void 0;return{diff:o?o(s,c):t?s[te]??p:p,...a?{descendantDiffs:g}:{},diffsSeverities:f,...r?{diffsSeverityPlacement:r}:{}}}function At(i){return kn.includes(i.kind)}function La(i){return i.childrenNodes().filter(At)}function Tt(i){return i.kind===M.TABLE}function ja(i){return Tt(i)&&i instanceof se}function Et(i){return i.kind===M.COLUMNS}function _t(i){return Et(i)&&i instanceof se}function Mt(i){return It(i)&&i instanceof se}function Fi(i){return i.kind===M.COLUMN}function ii(i){return Fi(i)&&i instanceof se}function It(i){return i.kind===M.INDEXES}function Oi(i){return i.kind===M.INDEX}function Pi(i){return Oi(i)&&i instanceof se}function Ri(i){return i.filter(Fi)}function Gi(i){return i.filter(Oi)}const Lt=d.createContext(null);function jt(){const i=d.useContext(Lt);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Ft=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});Ft.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const Ki=nt;function Ui(i){const e=je(me(i),{resolveDiff:()=>it(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Fa(i){const e=je(me(i),{resolveDiff:()=>Qn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Oa=Zn,Ot="ux-badge_ddlapi_primary-key",Wi="ux-badge_ddlapi_foreign-key",Pt="ux-badge_ddlapi_unique",Rt="ux-badge_ddlapi_not-null",Gt="ux-badge_ddlapi_generated",Kt="public",Bi="Default",Yi="As",$i="Values";function Ut(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Xi=d.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:a}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:a||void 0,children:`${n}`})}):null});Xi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Wt(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",R.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[R.highlighter(e),t?R.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ae=d.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:a,isFontMuted:r}=i,{blockClassName:o,valueClassName:s}=Wt({textHighlighterColor:t,borderShadowColor:a,isFontMuted:r});return l.jsx(Xi,{isVisible:e,value:n,blockClassName:o,valueClassName:s})});ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce=d.memo(i=>{var h;const{label:e,subheader:n,layoutSide:t,diff:a,colorizingDiff:r,hideLevelIndicatorWhenSideEmpty:o=!1}=i,{[$]:s,[K]:g}=i,f=le(),u=t===N?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after,p=(h=(t===N?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after)??u)==null?void 0:h.backgroundColor,m=d.useMemo(()=>p?[R.background(p)]:[],[p]),v=d.useMemo(()=>{const y=r==null?void 0:r.data;if(y){if(U(y))return t!==N;if(O(y))return t===N}return(u==null?void 0:u.isContentVisible)??!0},[r,u==null?void 0:u.isContentVisible,t]),k=f>0&&(!o||v);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":s,"data-ddl-list-last-row":g?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${ei} min-h-[26px] gap-2 ${m.join(" ")}`,children:[k&&l.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:f}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),v&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const re=d.memo(i=>{var a;const e=Ae(),n=(a=i.diffsSeverities)==null?void 0:a[bi.AdditionalInfoRow],t=d.useMemo(()=>Xe(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case Je:return l.jsx(_e,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(Ie,{left:l.jsx(Ce,{...i,layoutSide:N}),right:l.jsx(Ce,{...i,layoutSide:Q})})});case ze:return l.jsx(Me,{content:l.jsx(Ce,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});re.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function oe(i,e){return i?(e===N?i.styles.before:i.styles.after).textHighlighterColor:void 0}function zi(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Kt?e:`${i.schemaName}.${e}`}function Bt(i){return i.join(", ")}const $e=d.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:a,navigationLinkComponent:r}=jt(),o=d.useMemo(()=>a(e.schemaName,e.tableName,e.columnName),[a,e]),s=d.useMemo(()=>["ddlapi-foreign-key-link",R.highlighter(t)].filter(Boolean).join(" "),[t]),g=l.jsx(r,{href:o,className:s,children:zi(e)});return n?g:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(hn,{text:"FK",colorSchema:Wi,inline:!0}),g]})});$e.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Yt(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Ji(i,e){return!!i||!!e}function ni(i,e){return i?e===N?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function $t(i,e,n){return Ji(i,e)&&ni(e,n)}function ke(i){const{columnId:e,label:n,colorSchema:t,flagValue:a,flagDiff:r,layoutMode:o,layoutSide:s}=i;if(!Ji(a,r))return null;if(!ni(r,s))return Yt();const g=pt(r)?r==null?void 0:r.data:void 0;return l.jsx(Di,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!g,$changes:g},zt(e,n))}function Xt(i){const{columnId:e,target:n,targetDiff:t,layoutMode:a,layoutSide:r}=i,o=Jt(e,n),s=oe(t,r);if(t&&!ni(t,r))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx($e,{target:n},o);const g=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Di,{label:"FK",colorSchema:Wi,layoutMode:a,layoutSide:r,isNodeChanged:!1,isContentChanged:!0,$changes:g}),l.jsx($e,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const ye=d.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:a,layoutSide:r}=i,o=Ae(),s=d.useMemo(()=>t??{},[t]),g=d.useMemo(()=>a??{},[a]),f=d.useMemo(()=>ke({columnId:e,label:"PK",colorSchema:Ot,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:r}),[e,s.isPrimaryKey,o,r,n.isPrimaryKey]),u=d.useMemo(()=>$t(n.isPrimaryKey,s.isPrimaryKey,r),[s.isPrimaryKey,r,n.isPrimaryKey]),c=d.useMemo(()=>ke({columnId:e,label:"unique",colorSchema:Pt,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:r}),[e,s.isUnique,o,r,n.isUnique]),p=d.useMemo(()=>u?null:ke({columnId:e,label:"not null",colorSchema:Rt,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:r}),[e,s.isNotNull,u,o,r,n.isNotNull]),m=d.useMemo(()=>ke({columnId:e,label:"generated",colorSchema:Gt,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:r}),[e,s.isGenerated,o,r,n.isGenerated]),v=d.useMemo(()=>{const h=n.foreignKeyTargets??[];return h.length===0?[]:h.map(y=>Xt({columnId:e,target:y,targetDiff:g[Pn(y)],layoutMode:o,layoutSide:r}))},[e,o,r,g,n.foreignKeyTargets]),k=d.useMemo(()=>[f,c,p,m,...v].filter(Boolean),[v,m,p,f,c]);return k.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:k})});function zt(i,e){return`${i}-${e}`}function Jt(i,e){return`${i}-FK-${zi(e)}`}ye.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ti=d.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});ti.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Qi(i){const{appearance:e}=i;return d.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const pe=d.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,a=Qi({appearance:t});return l.jsx(ti,{isVisible:e,value:n,className:a})});pe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const ai=i=>{const{node:e,additionalInfoPrecededBy:n=F.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:a}=i,r=fe(),o=e.value(),s=d.useCallback(D=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(pe,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(ye,{columnId:e.id,layoutSide:D,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),g=d.useCallback(D=>{const w=o==null?void 0:o.defaultValue;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),f=d.useCallback(D=>{const w=o==null?void 0:o.generatedExpression;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),u=d.useCallback(D=>{var w;return(w=o==null?void 0:o.enumValues)!=null&&w.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((H,x)=>l.jsx(ae,{isVisible:!0,value:H},`${H}-${x}`))}):l.jsx(l.Fragment,{})},[o]),c=r===ge,p=d.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),m=!!(o!=null&&o.enumValues&&o.enumValues.length>0),v=X(o==null?void 0:o.defaultValue),k=X(o==null?void 0:o.generatedExpression),y=t&&!(c&&(m||v||k)),S=t&&m&&!v&&!k,C=t&&v&&!k,A=t&&k;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[K]:y||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:s,usage:E.DdlApiProperty}),p&&l.jsx(he,{"data-precededby":F.DDL_COLUMN_ROW,value:o.description??"",variant:V.body2,textFontWeight:"normal",textColor:Le,usage:Z.DdlApiProperty}),c&&m&&l.jsx(re,{"data-precededby":n,[K]:S||void 0,label:$i,subheader:u}),c&&v&&l.jsx(re,{"data-precededby":m?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:C||void 0,label:Bi,subheader:g}),c&&k&&l.jsx(re,{"data-precededby":v||m?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:A||void 0,label:Yi,subheader:f})]}):null};ai.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function hi(i,e){return i?(e===N?i.styles.before:i.styles.after).borderShadowColor:void 0}function Qt(i,e){return i?(e===N?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Zt(i){if(ii(i))return at(i)}function ea(i){if(ii(i))return rt(i)}function ia(i){if(Pi(i))return ct(i)}function na(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,a=Qi({appearance:e});return d.useMemo(()=>[a,R.highlighter(n),R.background(t)].filter(Boolean).join(" "),[e,t,a,n])}const Fe=d.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:a,backgroundColor:r}=i,o=na({appearance:t,textHighlighterColor:a,backgroundColor:r});return l.jsx(ti,{isVisible:e,value:n,className:o})});Fe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function ta(i,e){return i?(e===N?i.styles.before:i.styles.after).backgroundColor:void 0}function aa(i){return i.text===", "||i.text===","}function ra(i,e){const n=[];let t=!1;return i.forEach((a,r)=>{if(aa(a)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${r}`)),t=!1),n.push(oa(a,r,e))}),n}function oa(i,e,n){return i.diff?l.jsx(Fe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:oe(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Se=d.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(pe,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Fe,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:oe(e.diff,n),backgroundColor:ta(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:ra(e.segments,n)})});Se.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},display:{required:!0,tsType:{name:"union",raw:`| {
  readonly kind: "plain"
  readonly text: string
}
| {
  readonly kind: "monolithic"
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}
| {
  readonly kind: "segmented"
  readonly segments: readonly DdlListSideSegment[]
}`,elements:[{name:"signature",type:"object",raw:`{
  readonly kind: "plain"
  readonly text: string
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"plain"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  readonly kind: "monolithic"
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"monolithic"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"diff",value:{name:"signature",type:"object",raw:`{
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
  readonly kind: "segmented"
  readonly segments: readonly DdlListSideSegment[]
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function la(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function sa(i,e,n){return i.diff?l.jsx(Fe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:oe(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Zi=d.memo(i=>{const{node:e,layoutSide:n}=i,t=Un(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(Se,{layoutSide:n,display:t});const{typeNameSegments:a,parameterSegments:r}=la(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[a.map((o,s)=>sa(o,s,n)),r.length>0&&l.jsx(Se,{layoutSide:n,display:{kind:"segmented",segments:r}})]})});Zi.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const en=i=>{const{node:e,additionalInfoPrecededBy:n=F.DDL_COLUMN_ROW,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:a=!1,[$]:r}=i,o=fe(),s=e.value(),g=d.useMemo(()=>Ki(e),[e]),f=d.useMemo(()=>Ui(e),[e]),u=d.useMemo(()=>ea(e),[e]),c=d.useMemo(()=>Zt(e),[e]),p=d.useMemo(()=>lt(e),[e]),m=d.useMemo(()=>ot(e),[e]),v=d.useMemo(()=>_i(e),[e]),k=d.useMemo(()=>dt(e),[e]),h=d.useMemo(()=>Mi(e),[e]),y=d.useMemo(()=>ut(e),[e]),S=d.useCallback(j=>s?Ti(g,j)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(Zi,{node:e,layoutSide:j}),l.jsx(ye,{columnId:e.id,layoutSide:j,value:s,flagDiffs:u,foreignKeyTargetDiffs:c})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[u,c,e,g,s]),C=d.useCallback(j=>{const ne=ft(e,j);return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:oe(h,j),borderShadowColor:hi(h,j)}):l.jsx(l.Fragment,{})},[h,e]),A=d.useCallback(j=>{const ne=(()=>{const Y=m==null?void 0:m.data;return Y?j===N?O(Y)||W(Y)?Y.beforeValue:void 0:U(Y)||W(Y)?Y.afterValue:void 0:s==null?void 0:s.generatedExpression})();return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:oe(m,j)}):l.jsx(l.Fragment,{})},[m,s]),D=d.useCallback(j=>{const ne=gt(e,j);return ne.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:ne.map((Y,rn)=>l.jsx(ae,{isVisible:!0,value:Y.literal,textHighlighterColor:oe(Y.diff,j),borderShadowColor:hi(Y.diff,j),isFontMuted:Qt(Y.diff,j)},`${Y.literal}-${rn}`))})},[e]),w=o===ge,H=!!g,x=w&&(!!(s!=null&&s.description)||!!p),q=!!(s!=null&&s.enumValues&&s.enumValues.length>0||v),I=!!(X(s==null?void 0:s.defaultValue)||h||y),b=X(s==null?void 0:s.generatedExpression)||!!m,L=w&&(q||I||b),z=t&&!x&&!L,ie=t&&x&&!L,G=t&&q&&!I&&!b,J=t&&I&&!b,B=t&&b;return s?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[K]:z||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:S,usage:E.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:a,...f}),x&&l.jsx(he,{"data-precededby":F.DDL_COLUMN_ROW,[K]:ie||void 0,value:s.description??"",variant:V.body2,textFontWeight:"normal",textColor:Le,usage:Z.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:a}),w&&q&&l.jsx(re,{"data-precededby":n,[K]:G||void 0,label:$i,subheader:D,colorizingDiff:k,diffsSeverities:v?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:a}),w&&!H&&I&&l.jsx(re,{"data-precededby":q?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:J||void 0,label:Bi,subheader:C,colorizingDiff:y,diffsSeverities:h||y?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:a}),w&&b&&l.jsx(re,{"data-precededby":I||q?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:B||void 0,label:Yi,subheader:A,diff:m,colorizingDiff:e.diffs[te],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:a})]}):null};en.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function nn(i,e){let n=!1;return i.map((t,a)=>{const r=a===i.length-1,o=n?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,s=n?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,g={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:r};return n=e&&Ut(t.value()),g})}const da=i=>{const{node:e,[$]:n}=i;return _t(e)?l.jsx(fa,{"data-precededby":n,node:e}):l.jsx(ua,{"data-precededby":n,node:e})},ua=i=>{const{node:e,[$]:n}=i,t=le(),a=fe(),r=e.value(),o=Ri(e.childrenNodes()),s=a===ge,g=d.useMemo(()=>nn(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Columns",expandable:!1,expanded:!0,variant:V.h2,usage:E.DdlApiSection}),l.jsx(Te.Provider,{value:t+1,children:g.map(({columnNode:f,titlePrecededBy:u,additionalInfoPrecededBy:c,isLastInList:p})=>l.jsx(ai,{"data-precededby":u,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},fa=i=>{const{node:e,[$]:n}=i,t=le(),a=fe(),r=e.value(),o=Ri(e.childrenNodes()),s=a===ge,g=d.useMemo(()=>je(me(e)),[e]),f=d.useMemo(()=>nn(o,s),[o,s]),u=d.useMemo(()=>Ei(e),[e]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Columns",expandable:!1,expanded:!0,variant:V.h2,usage:E.DdlApiSection,...g}),l.jsx(Te.Provider,{value:t+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:m,isLastInList:v})=>ii(c)?l.jsx(en,{"data-precededby":p,additionalInfoPrecededBy:m,isLastInList:v,hideLevelIndicatorWhenSideEmpty:u,node:c},c.id):l.jsx(ai,{"data-precededby":p,additionalInfoPrecededBy:m,isLastInList:v,node:c},c.id))})]})};da.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};const ri=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,a=fe(),r=e.value(),o=(r==null?void 0:r.indexName)??"",s=d.useCallback(c=>{if(!r)return l.jsx(l.Fragment,{});const p=Bt(r.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.partNames.length>0&&l.jsx(pe,{isVisible:!0,value:`(${p})`,appearance:"text"}),l.jsx(ye,{columnId:e.id,layoutSide:c,value:r})]})},[e.id,r]),g=d.useMemo(()=>a===ge&&!!(r!=null&&r.description),[a,r==null?void 0:r.description]),f=n,u=!!r&&(r.partNames.length>0||r.isUnique);return r?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[K]:f||void 0,value:o,expandable:!1,expanded:!0,variant:V.body2,subheader:u?s:void 0,usage:E.DdlApiProperty}),g&&l.jsx(he,{"data-precededby":F.DDL_INDEX_ROW,value:r.description??"",variant:V.body1,textFontWeight:"normal",textColor:Le,usage:Z.DdlApiProperty})]}):null};ri.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const tn=i=>{const{node:e,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:t=!1,[$]:a}=i,r=fe(),o=e.value(),s=d.useMemo(()=>Ki(e),[e]),g=d.useMemo(()=>Ui(e),[e]),f=d.useMemo(()=>ia(e),[e]),u=d.useMemo(()=>st(e),[e]),c=(o==null?void 0:o.indexName)??"",p=d.useCallback(y=>{const S=Jn(e,y);return l.jsx(Se,{layoutSide:y,display:S})},[e]),m=d.useCallback(y=>{if(!o)return l.jsx(l.Fragment,{});if(!Ti(s,y))return l.jsx(l.Fragment,{});const S=o.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[S&&p(y),l.jsx(ye,{columnId:e.id,layoutSide:y,value:o,flagDiffs:f})]})},[f,e.id,s,p,o]),v=d.useMemo(()=>r===ge&&(!!(o!=null&&o.description)||!!u),[u,r,o==null?void 0:o.description]),k=n&&!v,h=!!o&&(o.partNames.length>0||o.isUnique||!!(f!=null&&f.isUnique));return o?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[K]:k||void 0,value:c,expandable:!1,expanded:!0,variant:V.body2,subheader:h?m:void 0,usage:E.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:t,...g}),v&&l.jsx(he,{"data-precededby":F.DDL_INDEX_ROW,[K]:n||void 0,value:o.description??"",variant:V.body1,textFontWeight:"normal",textColor:Le,usage:Z.DdlApiProperty,diff:u,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:t})]}):null};tn.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function an(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:F.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const ga=i=>{const{node:e,[$]:n}=i;return Mt(e)?l.jsx(pa,{"data-precededby":n,node:e}):l.jsx(ca,{"data-precededby":n,node:e})},ca=i=>{const{node:e,[$]:n}=i,t=le(),a=e.value(),r=Gi(e.childrenNodes()),o=d.useMemo(()=>an(r),[r]);return r.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Indexes",expandable:!1,expanded:!0,variant:V.h2,usage:E.DdlApiSection}),l.jsx(Te.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:g,isLastInList:f})=>l.jsx(ri,{"data-precededby":g,isLastInList:f,node:s},s.id))})]})},pa=i=>{const{node:e,[$]:n}=i,t=le(),a=e.value(),r=Gi(e.childrenNodes()),o=d.useMemo(()=>je(me(e)),[e]),s=d.useMemo(()=>an(r),[r]),g=d.useMemo(()=>Ei(e),[e]);return r.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Indexes",expandable:!1,expanded:!0,variant:V.h2,usage:E.DdlApiSection,...o}),l.jsx(Te.Provider,{value:t+1,children:s.map(({indexNode:f,titlePrecededBy:u,isLastInList:c})=>Pi(f)?l.jsx(tn,{"data-precededby":u,isLastInList:c,hideLevelIndicatorWhenSideEmpty:g,node:f},f.id):l.jsx(ri,{"data-precededby":u,isLastInList:c,node:f},f.id))})]})};ga.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{_a as $,$ as A,Ee as B,da as C,Ea as D,M as E,Hi as F,xi as G,Nn as H,ga as I,Aa as J,ce as K,qa as L,Na as M,qn as N,Ta as O,F as P,Sa as Q,oe as R,se as S,li as T,Me as U,_e as V,Ie as W,Ii as X,Oa as Y,Fa as Z,et as _,Va as a,Ma as a0,ja as a1,Oe as a2,mn as a3,vn as a4,bn as a5,yn as a6,Da as a7,vi as a8,va as a9,Li as aa,ht as ab,Ct as ac,wt as ad,me as ae,je as af,E as ag,Ia as ah,Ni as b,xa as c,kn as d,Ha as e,Kt as f,si as g,La as h,_ as i,Et as j,It as k,ee as l,V as m,he as n,Le as o,Tt as p,Lt as q,Ca as r,Ft as s,wa as t,Pe as u,Pn as v,Ln as w,wi as x,Vi as y,ka as z};
