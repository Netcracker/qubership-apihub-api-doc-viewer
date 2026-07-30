var an=Object.defineProperty;var rn=(i,e,n)=>e in i?an(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var O=(i,e,n)=>(rn(i,typeof e!="symbol"?e+"":e,n),n);import{v as W,w as R,y as Re,x as K,_ as Ge,$ as ri,a0 as Ce,N as ae,a1 as hi,Q as A,a2 as on,a3 as ln,M as ye,R as sn,O as be,V as S,H as de,a4 as Ke,a5 as ke,a6 as dn,X as J,W as P,a7 as mi,a8 as re,a9 as we,Y as Ae,T as yi,Z as $e,k as Xe,S as ze,aa as un,ab as fn,z as gn,ac as X,ad as cn,ae as bi,u as ue,h as fe,f as Se}from"./DiffBadge-225a7fbf.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const oi={SIMPLE:"simple",COMPLEX:"complex"},pn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},hn=Object.values(pn);new Set(hn);class Te{aggregateByDescendantDiffs(e,n,t,r){}static isDiffsRecord(e){if(!M(e))return!1;for(const n of Object.values(e))if(!Te.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return M(n)&&(W(n)||R(n)||Re(n)||K(n))}}function M(i){return Di(i)&&!Array.isArray(i)}function Di(i){return typeof i=="object"&&i!==null}function mn(i){return M(i)&&Object.keys(i).every(e=>typeof e=="string")}function Fe(i){return Array.isArray(i)}function ha(i,e,n){let t=i,r=!1;for(const a of e){if(!M(t)&&!Fe(t))return;if(r){let d;Di(t)&&(d=t[a]),!d&&Fe(t)&&n&&(d=t.find(f=>M(f)&&f[n]===a)),t=d,r=!1;continue}t=t[a],Fe(t)&&(r=!0)}return t}function ma(i,e){return Object.keys(i).find(n=>i[n]===e)}function ya(i){if(Te.isDiffsRecord(i))return i}class ba{constructor(){O(this,"tree",null)}pick(e,n){if(!M(e))return null;const t={};for(const r of n){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?t[a]=[...o]:M(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const De=()=>{},Da=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:De,info:De,warn:De,error:De};function yn(i){return i==null||!M(i)&&!Ge(i)}function va(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:g,resolveNodeKey:u,isDisallowedValue:c=yn,shouldStopAfterNodeCreation:p}=i;return[({value:m,state:b,key:L,path:v})=>{if(typeof L=="symbol")return;if(!M(m)&&!Ge(m))return{value:m};const{alreadyConvertedValuesCache:q,parent:D,container:C}=b,x=q.get(m);if(!x||!f(x)&&!g(x))return{value:m};if(!D||!f(D))return{value:m};const T="#"+ri(v),w=u(L,m),E=n.createCycledClone(x,T,w,D);return C?C.addNestedNode(E):D&&D.addChildNode(E),{done:!0}},({key:m,value:b,path:L,state:v,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((x,T)=>T(m,x,e,L,v),b)},({key:m,value:b,path:L,rules:v,state:q})=>{if(!v)return{done:!0};if(typeof m=="symbol")return{done:!0};if(c(b))return{done:!0};if(!v.kind||!t.includes(v.kind))return;const{parent:D,container:C}=q,x="#"+ri(L),T=u(m,b),{kind:w,complex:E=!1}=v,k=a(b,D,C),j=r(x,T,w,E,k);if(!j)return;C?C.addNestedNode(j):D&&D.addChildNode(j);let le=b;if(p!=null&&p(j,b)){const z=D?D.descendantDiffs:void 0;if(!z||!(m in z))return{done:!0};const N=z[m];if(!N)return{done:!0};const{data:$}=N;K($)&&(le=$.beforeValue)}const ee=new Map(q.alreadyConvertedValuesCache);(M(b)||Ge(b))&&ee.set(b,j);let G;return f(j)?G=o(q,j,ee):G=d(q,j,ee),{value:le,state:G}}]}class bn{}class oe{constructor(e="#",n="",t,r,a){O(this,"type");O(this,"parent");O(this,"container");O(this,"newDataLevel");O(this,"_value");O(this,"_meta");O(this,"_childrenNodes",[]);O(this,"_nestedNodes",[]);O(this,"_diffs",{});O(this,"_diffsSummary",new Set);O(this,"_descendantDiffs",{});O(this,"_descendantDiffsSummary",new Set);O(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=oi.SIMPLE,value:d=null,parent:f=null,container:g=null,newDataLevel:u=!0,meta:c}=a;this.type=o,this.parent=f,this.container=g,this.newDataLevel=u,this._value=d,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new oe(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===oi.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const I={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Dn=Object.values(I),vi="<unnamed>";function vn(i){return i??vi}function ki(i){return i!==vi}function ka(i,e){return e.indexName&&ki(e.indexName)?e.indexName:i}function Va(i,e,n){return n||(e!=null&&e.indexName&&ki(e.indexName)?e.indexName:String(i))}function li(i=I.TABLE){return{"/columns":{"/items":{"/*":()=>li(I.COLUMN)},kind:I.COLUMNS},"/indexes":{"/items":{"/*":()=>li(I.INDEX)},kind:I.INDEXES},kind:i}}function kn(i){return i.kind===Ce.Literal&&typeof i.value=="string"}function Vn(i){return i.kind===Ce.RawExpr&&typeof i.expr=="string"}function Hn(i){return M(i)&&typeof i.expr=="string"}function xn(i){return M(i)&&typeof i.value=="string"}const ge="titleRow",Cn=["typeName","size","precision","scale","label"],Ha={ToEnum:"to-enum",FromEnum:"from-enum"},xa={Lost:"lost",Gained:"gained"},Vi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],Hi=["isUnique"],Ca=[ae,ge,"tableName","schemaName","description"],wa=[ae,ge,"columnName","description","generatedExpression",...Vi],Na=[ae,ge,"indexName",...Hi];function wn(i){if(!M(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!M(n)||!("before"in n)||!("after"in n)?!1:Te.isDiff(e)}function xi(i){return wn(i[ge])}function Nn(i){return M(i)&&i.kind===hi.Domain&&typeof i.type=="string"}function qn(i){return i.kind===A.BoolType&&typeof i.type=="string"}function An(i){return i.kind===A.IntegerType&&typeof i.type=="string"}function si(i){return i.kind===A.DecimalType&&typeof i.type=="string"}function di(i){return i.kind===A.FloatType&&typeof i.type=="string"}function ui(i){return i.kind===A.StringType&&typeof i.type=="string"}function fi(i){return i.kind===A.BinaryType&&typeof i.type=="string"}function gi(i){return i.kind===A.TimeType&&typeof i.type=="string"}function Sn(i){return i.kind===A.JSONType&&typeof i.type=="string"}function Tn(i){return i.kind===A.SpatialType&&typeof i.type=="string"}function En(i){return i.kind===A.UUIDType&&typeof i.type=="string"}function Oe(i){return i.kind===A.EnumType&&Array.isArray(i.values)}function _n(i){return i.kind===A.UnsupportedType&&typeof i.type=="string"}function ci(i){return typeof i.type=="string"}function Je(i){switch(i.kind){case Ce.Literal:return kn(i)?i.value:i.kind;case Ce.RawExpr:return Vn(i)?i.expr:i.kind;case on.NamedDefault:try{return Je(ln(i))}catch{return i.kind}default:return Hn(i)?i.expr:xn(i)?i.value:i.kind}}function Ci(i){return wi(Je(i))}function Mn(i){return wi(i)}function wi(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const In="Columns",Ln="Indexes";class qa{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=ye(n.attrs,be.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:In,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:Ln,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:M(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return M(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!M(e)||typeof e.tableName!="string"||!M(e.columns)||!Array.isArray(e.columns.items)||!M(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var m,b,L;const a=ye(t.attrs,be.Comment),o=(m=t.attrs)==null?void 0:m.find(v=>v.kind===sn.Identity),d=ye(t.attrs,be.GeneratedExpr),f=o!==void 0||d!==void 0,u=this.findForeignKeysForColumn(n,t).map(v=>this.buildForeignKeyTarget(e,v,t,r)).filter(v=>v!==void 0),c=u.length>0,p=this.formatColumnType(t.type),y=(b=t.type)==null?void 0:b.type,V=y&&Oe(y)?y.values:void 0,h=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:p,...V?{enumValues:V}:{},isPrimaryKey:h,isForeignKey:c,...u.length>0?{foreignKeyTargets:u}:{},isGenerated:f,...o?{generatedBy:"identity"}:{},...d&&!o?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!h&&((L=t.type)==null?void 0:L.null)===!1,...t.default!==void 0?{defaultValue:Ci(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=ye(e.attrs,be.Comment);return{indexName:vn(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>{var r,a,o;return t.unique===!0&&((r=t.parts)==null?void 0:r.length)===1&&((o=(a=t.parts[0])==null?void 0:a.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var g,u;const a=((g=n.columns)==null?void 0:g.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,d=(u=n.refColumns)==null?void 0:u[a];if(!o||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,o,r);if(f)return{schemaName:f,tableName:o.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Nn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return qn(e)?{kind:A.BoolType,typeName:e.type,label:n}:An(e)?{kind:A.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:si(e)?{kind:A.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:di(e)?{kind:A.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ui(e)?{kind:A.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:fi(e)?{kind:A.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:gi(e)?{kind:A.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Sn(e)?{kind:A.JSONType,typeName:e.type,label:n}:Tn(e)?{kind:A.SpatialType,typeName:e.type,label:n}:En(e)?{kind:A.UUIDType,typeName:e.type,label:n}:Oe(e)?{kind:A.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:_n(e)?{kind:A.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:ci(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:hi.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return si(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ui(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):fi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):di(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):gi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Oe(e)?n=e.type??e.values[0]??"enum":ci(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Je(e.expr):""}}const jn=new Set([I.TABLE,I.COLUMNS,I.COLUMN,I.INDEXES,I.INDEX]);class Ni extends bn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!mn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,Ni.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return jn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case I.TABLE:return["tableName","schemaName","description"];case I.COLUMNS:case I.INDEXES:return["title"];case I.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case I.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function Fn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function On(i,e,n){const t=n===S,r=new Set,a=[],o=f=>{const g=e==null?void 0:e[f];if(g)return g;for(const u of Object.values(e??{}))if(u&&K(u.data)&&u.data.afterValue===f)return u};for(const f of i){const g=o(f);if(!g){a.push({text:f});continue}if(r.has(g))continue;r.add(g);const{data:u}=g;if(W(u)){!t&&typeof u.afterValue=="string"&&a.push({text:u.afterValue,diff:g});continue}if(R(u)){t&&typeof u.beforeValue=="string"&&a.push({text:u.beforeValue,diff:g});continue}if(K(u)){const c=t?typeof u.beforeValue=="string"?u.beforeValue:f:typeof u.afterValue=="string"?u.afterValue:f;a.push({text:c,diff:g})}}for(const[f,g]of Object.entries(e??{}))!g||r.has(g)||R(g.data)&&t&&(a.push({text:f,diff:g}),r.add(g));const d=f=>{const g=i.indexOf(f);return g>=0?g:i.length};return a.sort((f,g)=>d(f.text)-d(g.text))}function qi(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Ne(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===S;return W(t)?r?void 0:String(t.afterValue??i??""):R(t)?r?String(t.beforeValue??i??""):void 0:K(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function Pn(i,e){return(e===S?i.styles.before:i.styles.after).isContentVisible}const Ai=["size","precision","scale"];function Rn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Gn(i,e){var g;const n=(g=i.value())==null?void 0:g.columnType;if(!n)return{kind:"plain",text:""};const t=Rn(i);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(Kn(t)){const u=Object.values(t).find(Boolean);return u?{kind:"monolithic",text:Un(n,t,a,e),diff:Yn(u)}:{kind:"plain",text:n.label}}const o=[],d=Ne(Ue(n),r,e);d!==void 0&&o.push({text:d,diff:r});const f=Bn(n,t,e);return o.push(...f),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function Kn(i){const e=Cn.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function Un(i,e,n,t){const r=Ne(Ue(i),e[n],t)??Ue(i),a=[];for(const o of Ai){const d=Ne(Qe(i,o),e[o],t);d!==void 0&&a.push(d)}return a.length===0?r:`${r} (${a.join(", ")})`}function Bn(i,e,n){const t=Wn(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Ne(Qe(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...qi(r,"spaced")]}function Wn(i,e,n){return Ai.filter(t=>{const r=e[t];return r?Pn(r,n):Qe(i,t)!==void 0})}function Ue(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function Qe(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function Yn(i){const{data:e}=i;return K(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Yellow}}}:W(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Green}}}:R(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:de.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function $n(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Xn(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=$n(i),r=t?On(n,t,e):n.map(d=>({text:d})),a=qi(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function zn(i){if(xi(i.diffs))return i.diffs[ge]}function Jn(i){const e=i.diffs[ae];if(e&&(W(e.data)||R(e.data)))return e}function Qn(i){return i.diffs.schemaName}function Aa(i){return i.diffs.description}function Sa(i,e){var o;const n=((o=i.value())==null?void 0:o.schemaName)??"",t=Qn(i);if(!t)return n;const r=t.data,a=e===S;return W(r)?a?"":n:R(r)?a?n:"":K(r)?a?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}function Zn(i){if(xi(i.diffs))return i.diffs[ge]}function et(i){const e=i.diffs[ae];if(e&&(W(e.data)||R(e.data)))return e}function Si(i,e){return i?(e===S?i.styles.before:i.styles.after).isHeaderVisible:!0}function it(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function nt(i){const e={};let n=!1;for(const t of Vi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function tt(i){return i.diffs.generatedExpression}function at(i){return i.diffs.description}function Ti(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function rt(i){return i.diffs.enumValuesRowColorizingDiff}function Ei(i){return i.diffs.defaultValue}function ot(i){return i.diffs.defaultValueRowColorizingDiff}function lt(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Ei(i);if(!t)return n;const r=t.data,a=e===S;return W(r)?a?void 0:n:R(r)?a?Pe(r.beforeValue)??n:void 0:K(r)?a?Pe(r.beforeValue)??n:Pe(r.afterValue)??n:n}function Pe(i){if(typeof i=="string")return Mn(i);if(M(i)&&"kind"in i)return Ci(i)}function st(i,e){var g;const n=((g=i.value())==null?void 0:g.enumValues)??[],t=Ti(i),r=e===S,a=new Set,o=[],d=u=>{const c=t==null?void 0:t[u];if(c)return c;for(const p of Object.values(t??{}))if(p&&K(p.data)&&p.data.afterValue===u)return p};for(const u of n){const c=d(u);if(!c){o.push({literal:u});continue}if(a.has(c))continue;a.add(c);const{data:p}=c;if(W(p)){!r&&typeof p.afterValue=="string"&&o.push({literal:p.afterValue,diff:c});continue}if(R(p)){r&&typeof p.beforeValue=="string"&&o.push({literal:p.beforeValue,diff:c});continue}if(K(p)){const y=r?typeof p.beforeValue=="string"?p.beforeValue:u:typeof p.afterValue=="string"?p.afterValue:u;o.push({literal:y,diff:c})}}for(const[u,c]of Object.entries(t??{}))!c||a.has(c)||R(c.data)&&r&&(o.push({literal:u,diff:c}),a.add(c));const f=u=>{const c=n.indexOf(u);return c>=0?c:n.length};return o.sort((u,c)=>f(u.literal)-f(c.literal))}function dt(i){const e={};let n=!1;for(const t of Hi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function ut(i){return i?i.highlightingMode.get(Ke.Default)!==ke.Invisible:!1}const ft=s.createContext(!1),Ee=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:r=!1}=i;return r||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(dn,{variant:n,message:t}),e]})};Ee.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const _e=s.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});_e.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Me=s.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:n})]})});Me.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const _i="px-4",gt="",ct="px-4",Ze="";var _=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(_||{});var H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const pt=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:r}=i,a=s.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${yt(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Mi=s.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:d=ke.Default}=i,f=d===ke.Default,g=d===ke.Invisible,{textFontWeight:u,labelFontWeight:c,labelColor:p,textColor:y,label:V}=i,[h,m]=s.useState(!1),b=s.useCallback((x,T,w)=>{if(w)return null;const E=g?"":T.join(" "),k=`text-value ${r?"hover:cursor-pointer":""} ${u?`font-${u}`:""}`.trim(),j=`${k} ${E}`.trim(),le={onClick:r,...y!=null&&y.trim()?{style:{color:y}}:{}};x=h?x:mt(x);const ee=(G,z)=>{const N={...le,className:z};switch(n){case H.h1:return l.jsx("h1",{...N,children:G});case H.h2:return l.jsx("h2",{...N,children:G});case H.h3:return l.jsx("h3",{...N,children:G});case H.h4:return l.jsx("h4",{...N,children:G});case H.h5:return l.jsx("h5",{...N,children:G});case H.h6:return l.jsx("h6",{...N,children:G});case H.body1:return l.jsx("span",{...N,className:`${z} text-value-body1`.trim(),children:G});case H.body2:return l.jsx("span",{...N,className:`${z} text-value-body2`.trim(),children:G})}};return V?ee(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${V}: `}),l.jsx("span",{className:E,children:x})]}),k):ee(x,j)},[h,g,V,p,c,r,y,u,n]),L=s.useCallback(x=>{const T=[];let w=x,E=!1;if(a){const{data:k,styles:j}=a;switch(t){case S:T.push(P.highlighter(j.before.textHighlighterColor)),f&&(R(k)&&(w=se(k.beforeValue)?k.beforeValue:w),K(k)&&(o===_.JsoProperty&&!g&&T.push(P.highlighter(de.Yellow)),w=se(k.beforeValue)?k.beforeValue:w),Re(k)&&(w=se(k.beforeKey)?k.beforeKey:w)),W(k)&&(E=!0);break;case J:T.push(P.highlighter(j.after.textHighlighterColor)),f&&(W(k)&&(w=se(k.afterValue)?k.afterValue:w),K(k)&&(o===_.JsoProperty&&!g&&T.push(P.highlighter(de.Yellow)),w=se(k.afterValue)?k.afterValue:w),Re(k)&&(w=se(k.afterKey)?k.afterKey:w)),R(k)&&(E=!0);break}}return[w,T,E]},[a,f,g,t,o]),[v,q,D]=L(e);return s.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[b(v,q,D),!D&&l.jsx(pt,{isExpandable:ht(v),expanded:h,setExpanded:m,variant:n})]}),[b,v,q,D,h,m,n])}),Be=5,We=300;function ht(i){return i?i.length>We||mi.trim(i.split(`
`)).length>Be:!1}function mt(i){if(!i)return;if(i.length>We)return i.slice(0,We)+"...";const e=mi.trim(i.split(`
`));return e.length>Be?e.slice(0,Be).join(`
`)+"...":i}function se(i){return typeof i=="string"}function yt(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const Y="data-precededby",B="data-ddl-list-last-row";var F=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(F||{}),Q=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Q||{});const bt={[Q.DdlApiProperty]:Ze},Dt={[Q.DdlApiProperty]:["min-h-[26px]"]};function vt(i){const e=bt[i]??_i,n=Dt[i]??[];return[e,...n].join(" ")}const Ve=s.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=Q.Default}=i,{label:a,labelFontWeight:o,textFontWeight:d,labelColor:f,textColor:g}=i,{[Y]:u}=i,{diff:c,descendantDiffs:p,diffsSeverities:y}=i,V=re(),h=r===Q.DdlApiProperty,m=h&&V>0,b=s.useMemo(()=>{if(!c)return[];const{data:q,styles:D}=c;if(!q)return[];const C=[];return t===S&&C.push(P.background(D.before.backgroundColor)),t===J&&C.push(P.background(D.after.backgroundColor)),C},[c,t]),L=s.useMemo(()=>vt(r),[r]),v=l.jsx(Mi,{label:a,labelFontWeight:o,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:n,layoutSide:t,diff:c});return l.jsxs("div",{"data-precededby":u,className:`text-row-content flex w-full h-full ${h?"items-stretch":""} ${L} gap-2 ${b.join(" ")}`,children:[m&&l.jsxs("div",{"data-precededby":u,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(we,{level:V}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});Ve.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const pe=s.memo(i=>{const e=Ae(),{diffsSeverities:n,diffsSeverityPlacement:t=yi.DescriptionRow}=i,r=s.useMemo(()=>n==null?void 0:n[t],[n,t]),a=s.useMemo(()=>r==null?void 0:r.type,[r]),o=s.useMemo(()=>$e(r==null?void 0:r.causedAt),[r]);switch(e){case ze:return l.jsx(Ee,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(Me,{left:l.jsx(Ve,{...i,layoutSide:S}),right:l.jsx(Ve,{...i,layoutSide:J})})});case Xe:return l.jsx(_e,{content:l.jsx(Ve,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});pe.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const Ie="#353C4E",kt=s.createContext(void 0);function Vt(){return s.useContext(kt)}const Ii=i=>{const{expandable:e,expanded:n,onClick:t,level:r}=i,a=s.useContext(ft),o=r>0,d=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(un,{short:e}),e&&n!==void 0&&l.jsx(fn,{onToggle:d,expanded:n})]})};Ii.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ht={[_.JsoProperty]:gt,[_.DdlApiSection]:ct,[_.DdlApiProperty]:Ze},xt={[_.JsoProperty]:["min-h-[26px]"],[_.DdlApiProperty]:["min-h-[26px]"]};function Ct(i){const e=Ht[i]??_i,n=xt[i]??[];return[e,...n].join(" ")}const He=s.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:g,usage:u=_.Default,highlightingMode:c=gn}=i,{diff:p,descendantDiffs:y,diffsSeverities:V}=i,{[Y]:h,[B]:m}=i,b=s.useMemo(()=>{switch(u){case _.Default:return c.get(Ke.Default);case _.AsyncApiJsoSection:case _.JsoProperty:return c.get(Ke.JsoPropertyKey)}},[c,u]),L=re(),v=Vt(),q=s.useMemo(()=>v?o===S?v.beforeLevel:v.afterLevel:L,[o,L,v]),D=s.useMemo(()=>{const E=[];if(!p)return E;const{data:k,styles:j}=p;return k&&(o===S&&E.push(P.background(j.before.backgroundColor)),o===J&&E.push(P.background(j.after.backgroundColor))),E},[p,o]),C=s.useMemo(()=>f?l.jsx(Mi,{"data-precededby":h,value:r,variant:a,layoutSide:o,diff:p,usage:u,highlightingMode:b,onClick:t}):null,[f,h,r,a,o,p,u,b,t]),x=u===_.DdlApiProperty,T=s.useMemo(()=>d?l.jsxs(l.Fragment,{children:[(e||q>0)&&l.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(we,{level:q}),l.jsx(Ii,{expandable:e,expanded:n,onClick:t,level:q})]}),!x&&C]}):q>0&&l.jsx(we,{level:q}),[d,e,q,h,n,t,C,x]),w=s.useMemo(()=>Ct(u),[u]);return l.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":m?!0:void 0,"data-usage":u!==_.Default?u:void 0,className:`title-row-content flex w-full ${x?"items-stretch":"items-center"} h-full ${w} gap-2 ${D.join(" ")}`,children:[T,x?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[C,g==null?void 0:g(o)]}):g==null?void 0:g(o)]})});He.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Z=s.memo(i=>{const e=Ae(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=i,a=s.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=s.useMemo(()=>a==null?void 0:a.type,[a]),d=s.useMemo(()=>$e(a==null?void 0:a.causedAt),[a]);switch(e){case ze:return l.jsx(Ee,{diffType:o,diffTypeCause:d,hidden:!1,children:l.jsx(Me,{left:l.jsx(He,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:S}),right:l.jsx(He,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:J})})});case Xe:return l.jsx(_e,{content:l.jsx(He,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Z.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function Ta(i,e){return s.useMemo(()=>e(i)?he(i):{},[e,i])}function he(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Le(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:g}=i;if(!d)return{};const u=Object.entries(d),c=V=>{const h=u.find(([m])=>m===String(V));return h==null?void 0:h[1]},p=n?c(n):void 0;return{diff:o?o(d,c):t?d[ae]??p:p,...r?{descendantDiffs:f}:{},diffsSeverities:g,...a?{diffsSeverityPlacement:a}:{}}}function wt(i){return Dn.includes(i.kind)}function Ea(i){return i.childrenNodes().filter(wt)}function Nt(i){return i.kind===I.TABLE}function _a(i){return Nt(i)&&i instanceof oe}function qt(i){return i.kind===I.COLUMNS}function At(i){return qt(i)&&i instanceof oe}function St(i){return Tt(i)&&i instanceof oe}function Li(i){return i.kind===I.COLUMN}function ei(i){return Li(i)&&i instanceof oe}function Tt(i){return i.kind===I.INDEXES}function ji(i){return i.kind===I.INDEX}function Fi(i){return ji(i)&&i instanceof oe}function Oi(i){return i.filter(Li)}function Pi(i){return i.filter(ji)}const Et=s.createContext(null);function _t(){const i=s.useContext(Et);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Mt=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});Mt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const Ri=et;function Gi(i){const e=Le(he(i),{resolveDiff:()=>Zn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Ma(i){const e=Le(he(i),{resolveDiff:()=>zn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ia=Jn,It="ux-badge_ddlapi_primary-key",Ki="ux-badge_ddlapi_foreign-key",Lt="ux-badge_ddlapi_unique",jt="ux-badge_ddlapi_not-null",Ft="ux-badge_ddlapi_generated",Ot="public",Ui="Default",Bi="As",Wi="Values";function Pt(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Yi=s.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:r}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});Yi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Rt(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return s.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",P.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[P.highlighter(e),t?P.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ie=s.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:d}=Rt({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(Yi,{isVisible:e,value:n,blockClassName:o,valueClassName:d})});ie.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const xe=s.memo(i=>{var V;const{label:e,subheader:n,layoutSide:t,diff:r,colorizingDiff:a}=i,{[Y]:o,[B]:d}=i,f=re(),g=t===S?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,c=(V=(t===S?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??g)==null?void 0:V.backgroundColor,p=s.useMemo(()=>c?[P.background(c)]:[],[c]),y=s.useMemo(()=>{const h=a==null?void 0:a.data;if(h){if(W(h))return t!==S;if(R(h))return t===S}return(g==null?void 0:g.isContentVisible)??!0},[a,g==null?void 0:g.isContentVisible,t]);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":o,"data-ddl-list-last-row":d?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${Ze} min-h-[26px] gap-2 ${p.join(" ")}`,children:[f>0&&l.jsxs("div",{"data-precededby":o,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(we,{level:f}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),y&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});xe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ne=s.memo(i=>{var r;const e=Ae(),n=(r=i.diffsSeverities)==null?void 0:r[yi.AdditionalInfoRow],t=s.useMemo(()=>$e(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case ze:return l.jsx(Ee,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(Me,{left:l.jsx(xe,{...i,layoutSide:S}),right:l.jsx(xe,{...i,layoutSide:J})})});case Xe:return l.jsx(_e,{content:l.jsx(xe,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function te(i,e){return i?(e===S?i.styles.before:i.styles.after).textHighlighterColor:void 0}function $i(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Ot?e:`${i.schemaName}.${e}`}function Gt(i){return i.join(", ")}const Ye=s.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=_t(),o=s.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),d=s.useMemo(()=>["ddlapi-foreign-key-link",P.highlighter(t)].filter(Boolean).join(" "),[t]),f=l.jsx(a,{href:o,className:d,children:$i(e)});return n?f:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(cn,{text:"FK",colorSchema:Ki,inline:!0}),f]})});Ye.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Kt(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Xi(i,e){return!!i||!!e}function ii(i,e){return i?e===S?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Ut(i,e,n){return Xi(i,e)&&ii(e,n)}function ve(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:d}=i;if(!Xi(r,a))return null;if(!ii(a,d))return Kt();const f=ut(a)?a==null?void 0:a.data:void 0;return l.jsx(bi,{label:n,colorSchema:t,layoutMode:o,layoutSide:d,isNodeChanged:!1,isContentChanged:!!f,$changes:f},Wt(e,n))}function Bt(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=Yt(e,n),d=te(t,a);if(t&&!ii(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Ye,{target:n},o);const f=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(bi,{label:"FK",colorSchema:Ki,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:f}),l.jsx(Ye,{target:n,hideBadge:!0,textHighlighterColor:d})]},o)}const me=s.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Ae(),d=s.useMemo(()=>t??{},[t]),f=s.useMemo(()=>r??{},[r]),g=s.useMemo(()=>ve({columnId:e,label:"PK",colorSchema:It,flagValue:n.isPrimaryKey,flagDiff:d.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,d.isPrimaryKey,o,a,n.isPrimaryKey]),u=s.useMemo(()=>Ut(n.isPrimaryKey,d.isPrimaryKey,a),[d.isPrimaryKey,a,n.isPrimaryKey]),c=s.useMemo(()=>ve({columnId:e,label:"unique",colorSchema:Lt,flagValue:n.isUnique,flagDiff:d.isUnique,layoutMode:o,layoutSide:a}),[e,d.isUnique,o,a,n.isUnique]),p=s.useMemo(()=>u?null:ve({columnId:e,label:"not null",colorSchema:jt,flagValue:n.isNotNull,flagDiff:d.isNotNull,layoutMode:o,layoutSide:a}),[e,d.isNotNull,u,o,a,n.isNotNull]),y=s.useMemo(()=>ve({columnId:e,label:"generated",colorSchema:Ft,flagValue:n.isGenerated,flagDiff:d.isGenerated,layoutMode:o,layoutSide:a}),[e,d.isGenerated,o,a,n.isGenerated]),V=s.useMemo(()=>{const m=n.foreignKeyTargets??[];return m.length===0?[]:m.map(b=>Bt({columnId:e,target:b,targetDiff:f[Fn(b)],layoutMode:o,layoutSide:a}))},[e,o,a,f,n.foreignKeyTargets]),h=s.useMemo(()=>[g,c,p,y,...V].filter(Boolean),[V,y,p,g,c]);return h.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:h})});function Wt(i,e){return`${i}-${e}`}function Yt(i,e){return`${i}-FK-${$i(e)}`}me.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ni=s.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});ni.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function zi(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ce=s.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=zi({appearance:t});return l.jsx(ni,{isVisible:e,value:n,className:r})});ce.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const ti=i=>{const{node:e,additionalInfoPrecededBy:n=F.DDL_COLUMN_ROW,isLastInList:t=!1,[Y]:r}=i,a=ue(),o=e.value(),d=s.useCallback(D=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(ce,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(me,{columnId:e.id,layoutSide:D,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),f=s.useCallback(D=>{const C=o==null?void 0:o.defaultValue;return X(C)?l.jsx(ie,{isVisible:!0,value:C}):l.jsx(l.Fragment,{})},[o]),g=s.useCallback(D=>{const C=o==null?void 0:o.generatedExpression;return X(C)?l.jsx(ie,{isVisible:!0,value:C}):l.jsx(l.Fragment,{})},[o]),u=s.useCallback(D=>{var C;return(C=o==null?void 0:o.enumValues)!=null&&C.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((x,T)=>l.jsx(ie,{isVisible:!0,value:x},`${x}-${T}`))}):l.jsx(l.Fragment,{})},[o]),c=a===fe,p=s.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),y=!!(o!=null&&o.enumValues&&o.enumValues.length>0),V=X(o==null?void 0:o.defaultValue),h=X(o==null?void 0:o.generatedExpression),b=t&&!(c&&(y||V||h)),L=t&&y&&!V&&!h,v=t&&V&&!h,q=t&&h;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(Z,{"data-precededby":r,[B]:b||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:d,usage:_.DdlApiProperty}),p&&l.jsx(pe,{"data-precededby":F.DDL_COLUMN_ROW,value:o.description??"",variant:H.body2,textFontWeight:"normal",textColor:Ie,usage:Q.DdlApiProperty}),c&&y&&l.jsx(ne,{"data-precededby":n,[B]:L||void 0,label:Wi,subheader:u}),c&&V&&l.jsx(ne,{"data-precededby":y?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:v||void 0,label:Ui,subheader:f}),c&&h&&l.jsx(ne,{"data-precededby":V||y?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:q||void 0,label:Bi,subheader:g})]}):null};ti.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function pi(i,e){return i?(e===S?i.styles.before:i.styles.after).borderShadowColor:void 0}function $t(i,e){return i?(e===S?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Xt(i){if(ei(i))return it(i)}function zt(i){if(ei(i))return nt(i)}function Jt(i){if(Fi(i))return dt(i)}function Qt(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=zi({appearance:e});return s.useMemo(()=>[r,P.highlighter(n),P.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const je=s.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=i,o=Qt({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(ni,{isVisible:e,value:n,className:o})});je.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Zt(i,e){return i?(e===S?i.styles.before:i.styles.after).backgroundColor:void 0}function ea(i){return i.text===", "||i.text===","}function ia(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if(ea(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(na(r,a,e))}),n}function na(i,e,n){return i.diff?l.jsx(je,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:te(i.diff,n)},`${i.text}-${e}`):l.jsx(ce,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const qe=s.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(ce,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(je,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:te(e.diff,n),backgroundColor:Zt(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:ia(e.segments,n)})});qe.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function ta(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function aa(i,e,n){return i.diff?l.jsx(je,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:te(i.diff,n)},`${i.text}-${e}`):l.jsx(ce,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Ji=s.memo(i=>{const{node:e,layoutSide:n}=i,t=Gn(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(qe,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=ta(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,d)=>aa(o,d,n)),a.length>0&&l.jsx(qe,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});Ji.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Qi=i=>{const{node:e,additionalInfoPrecededBy:n=F.DDL_COLUMN_ROW,isLastInList:t=!1,[Y]:r}=i,a=ue(),o=e.value(),d=s.useMemo(()=>Ri(e),[e]),f=s.useMemo(()=>Gi(e),[e]),g=s.useMemo(()=>zt(e),[e]),u=s.useMemo(()=>Xt(e),[e]),c=s.useMemo(()=>at(e),[e]),p=s.useMemo(()=>tt(e),[e]),y=s.useMemo(()=>Ti(e),[e]),V=s.useMemo(()=>rt(e),[e]),h=s.useMemo(()=>Ei(e),[e]),m=s.useMemo(()=>ot(e),[e]),b=s.useCallback(N=>o?Si(d,N)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(Ji,{node:e,layoutSide:N}),l.jsx(me,{columnId:e.id,layoutSide:N,value:o,flagDiffs:g,foreignKeyTargetDiffs:u})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[g,u,e,d,o]),L=s.useCallback(N=>{const $=lt(e,N);return X($)?l.jsx(ie,{isVisible:!0,value:$,textHighlighterColor:te(h,N),borderShadowColor:pi(h,N)}):l.jsx(l.Fragment,{})},[h,e]),v=s.useCallback(N=>{const $=(()=>{const U=p==null?void 0:p.data;return U?N===S?R(U)||K(U)?U.beforeValue:void 0:W(U)||K(U)?U.afterValue:void 0:o==null?void 0:o.generatedExpression})();return X($)?l.jsx(ie,{isVisible:!0,value:$,textHighlighterColor:te(p,N)}):l.jsx(l.Fragment,{})},[p,o]),q=s.useCallback(N=>{const $=st(e,N);return $.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:$.map((U,tn)=>l.jsx(ie,{isVisible:!0,value:U.literal,textHighlighterColor:te(U.diff,N),borderShadowColor:pi(U.diff,N),isFontMuted:$t(U.diff,N)},`${U.literal}-${tn}`))})},[e]),D=a===fe,C=!!d,x=D&&(!!(o!=null&&o.description)||!!c),T=!!(o!=null&&o.enumValues&&o.enumValues.length>0||y),w=!!(X(o==null?void 0:o.defaultValue)||h||m),E=X(o==null?void 0:o.generatedExpression)||!!p,k=D&&(T||w||E),j=t&&!x&&!k,le=t&&x&&!k,ee=t&&T&&!w&&!E,G=t&&w&&!E,z=t&&E;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(Z,{"data-precededby":r,[B]:j||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:b,usage:_.DdlApiProperty,...f}),x&&l.jsx(pe,{"data-precededby":F.DDL_COLUMN_ROW,[B]:le||void 0,value:o.description??"",variant:H.body2,textFontWeight:"normal",textColor:Ie,usage:Q.DdlApiProperty,diff:c,diffsSeverities:e.diffsSeverities}),D&&T&&l.jsx(ne,{"data-precededby":n,[B]:ee||void 0,label:Wi,subheader:q,colorizingDiff:V,diffsSeverities:y?e.diffsSeverities:void 0}),D&&!C&&w&&l.jsx(ne,{"data-precededby":T?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:G||void 0,label:Ui,subheader:L,colorizingDiff:m,diffsSeverities:h||m?e.diffsSeverities:void 0}),D&&E&&l.jsx(ne,{"data-precededby":w||T?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:z||void 0,label:Bi,subheader:v,diff:p,colorizingDiff:e.diffs[ae],diffsSeverities:e.diffsSeverities})]}):null};Qi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Zi(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=n?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,d=n?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,f={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:d,isLastInList:a};return n=e&&Pt(t.value()),f})}const ra=i=>{const{node:e,[Y]:n}=i;return At(e)?l.jsx(la,{"data-precededby":n,node:e}):l.jsx(oa,{"data-precededby":n,node:e})},oa=i=>{const{node:e,[Y]:n}=i,t=re(),r=ue(),a=e.value(),o=Oi(e.childrenNodes()),d=r===fe,f=s.useMemo(()=>Zi(o,d),[o,d]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(Z,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:_.DdlApiSection}),l.jsx(Se.Provider,{value:t+1,children:f.map(({columnNode:g,titlePrecededBy:u,additionalInfoPrecededBy:c,isLastInList:p})=>l.jsx(ti,{"data-precededby":u,additionalInfoPrecededBy:c,isLastInList:p,node:g},g.id))})]})},la=i=>{const{node:e,[Y]:n}=i,t=re(),r=ue(),a=e.value(),o=Oi(e.childrenNodes()),d=r===fe,f=s.useMemo(()=>Le(he(e)),[e]),g=s.useMemo(()=>Zi(o,d),[o,d]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(Z,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:_.DdlApiSection,...f}),l.jsx(Se.Provider,{value:t+1,children:g.map(({columnNode:u,titlePrecededBy:c,additionalInfoPrecededBy:p,isLastInList:y})=>ei(u)?l.jsx(Qi,{"data-precededby":c,additionalInfoPrecededBy:p,isLastInList:y,node:u},u.id):l.jsx(ti,{"data-precededby":c,additionalInfoPrecededBy:p,isLastInList:y,node:u},u.id))})]})};ra.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};const ai=i=>{const{node:e,isLastInList:n=!1,[Y]:t}=i,r=ue(),a=e.value(),o=(a==null?void 0:a.indexName)??"",d=s.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const p=Gt(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(ce,{isVisible:!0,value:`(${p})`,appearance:"text"}),l.jsx(me,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),f=s.useMemo(()=>r===fe&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),g=n,u=!!a&&(a.partNames.length>0||a.isUnique);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(Z,{"data-precededby":t,[B]:g||void 0,value:o,expandable:!1,expanded:!0,variant:H.body2,subheader:u?d:void 0,usage:_.DdlApiProperty}),f&&l.jsx(pe,{"data-precededby":F.DDL_INDEX_ROW,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:Ie,usage:Q.DdlApiProperty})]}):null};ai.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const en=i=>{const{node:e,isLastInList:n=!1,[Y]:t}=i,r=ue(),a=e.value(),o=s.useMemo(()=>Ri(e),[e]),d=s.useMemo(()=>Gi(e),[e]),f=s.useMemo(()=>Jt(e),[e]),g=(a==null?void 0:a.indexName)??"",u=s.useCallback(m=>{const b=Xn(e,m);return l.jsx(qe,{layoutSide:m,display:b})},[e]),c=s.useCallback(m=>{if(!a)return l.jsx(l.Fragment,{});if(!Si(o,m))return l.jsx(l.Fragment,{});const b=a.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[b&&u(m),l.jsx(me,{columnId:e.id,layoutSide:m,value:a,flagDiffs:f})]})},[f,e.id,o,u,a]),p=s.useMemo(()=>r===fe&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),y=!!o,V=n,h=!!a&&(a.partNames.length>0||a.isUnique||!!(f!=null&&f.isUnique));return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(Z,{"data-precededby":t,[B]:V||void 0,value:g,expandable:!1,expanded:!0,variant:H.body2,subheader:h?c:void 0,usage:_.DdlApiProperty,...d}),p&&!y&&l.jsx(pe,{"data-precededby":F.DDL_INDEX_ROW,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:Ie,usage:Q.DdlApiProperty})]}):null};en.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function nn(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:F.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const sa=i=>{const{node:e,[Y]:n}=i;return St(e)?l.jsx(ua,{"data-precededby":n,node:e}):l.jsx(da,{"data-precededby":n,node:e})},da=i=>{const{node:e,[Y]:n}=i,t=re(),r=e.value(),a=Pi(e.childrenNodes()),o=s.useMemo(()=>nn(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(Z,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:_.DdlApiSection}),l.jsx(Se.Provider,{value:t+1,children:o.map(({indexNode:d,titlePrecededBy:f,isLastInList:g})=>l.jsx(ai,{"data-precededby":f,isLastInList:g,node:d},d.id))})]})},ua=i=>{const{node:e,[Y]:n}=i,t=re(),r=e.value(),a=Pi(e.childrenNodes()),o=s.useMemo(()=>Le(he(e)),[e]),d=s.useMemo(()=>nn(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(Z,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:_.DdlApiSection,...o}),l.jsx(Se.Provider,{value:t+1,children:d.map(({indexNode:f,titlePrecededBy:g,isLastInList:u})=>Fi(f)?l.jsx(en,{"data-precededby":g,isLastInList:u,node:f},f.id):l.jsx(ai,{"data-precededby":g,isLastInList:u,node:f},f.id))})]})};sa.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Aa as $,Y as A,Te as B,ra as C,qa as D,I as E,Vi as F,Hi as G,wn as H,sa as I,wa as J,ge as K,Ha as L,xa as M,Cn as N,Na as O,F as P,Ca as Q,te as R,oe as S,oi as T,_e as U,Ee as V,Me as W,_i as X,Ia as Y,Ma as Z,Qn as _,ba as a,Sa as a0,_a as a1,Fe as a2,pn as a3,bn as a4,mn as a5,hn as a6,ha as a7,Di as a8,ma as a9,Mi as aa,ft as ab,kt as ac,Vt as ad,he as ae,Le as af,_ as ag,Ta as ah,Ni as b,va as c,Dn as d,Da as e,Ot as f,li as g,Ea as h,M as i,qt as j,Tt as k,Z as l,H as m,pe as n,Ie as o,Nt as p,Et as q,ka as r,Mt as s,Va as t,Oe as u,Fn as v,Mn as w,Ci as x,ki as y,ya as z};
