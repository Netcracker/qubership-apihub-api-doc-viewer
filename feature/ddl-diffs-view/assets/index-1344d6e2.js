var Zi=Object.defineProperty;var en=(e,i,n)=>i in e?Zi(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var O=(e,i,n)=>(en(e,typeof i!="symbol"?i+"":i,n),n);import{v as W,w as R,y as Fe,x as U,_ as Oe,$ as ii,a0 as xe,N as te,a1 as fi,Q as S,a2 as nn,a3 as tn,M as me,R as an,O as ye,V as A,H as le,a4 as Pe,a5 as ve,a6 as rn,X as z,W as P,a7 as gi,a8 as de,a9 as Ce,Y as Ne,T as ci,Z as Be,k as We,S as Ye,aa as on,ab as ln,z as sn,ac as $,ad as un,ae as hi,u as fe,h as ge,f as pi}from"./DiffBadge-225a7fbf.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const ni={SIMPLE:"simple",COMPLEX:"complex"},dn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},fn=Object.values(dn);new Set(fn);class Se{aggregateByDescendantDiffs(i,n,t,r){}static isDiffsRecord(i){if(!_(i))return!1;for(const n of Object.values(i))if(!Se.isDiff(n))return!1;return!0}static isDiff(i){const n=i;return _(n)&&(W(n)||R(n)||Fe(n)||U(n))}}function _(e){return mi(e)&&!Array.isArray(e)}function mi(e){return typeof e=="object"&&e!==null}function gn(e){return _(e)&&Object.keys(e).every(i=>typeof i=="string")}function Le(e){return Array.isArray(e)}function la(e,i,n){let t=e,r=!1;for(const a of i){if(!_(t)&&!Le(t))return;if(r){let s;mi(t)&&(s=t[a]),!s&&Le(t)&&n&&(s=t.find(g=>_(g)&&g[n]===a)),t=s,r=!1;continue}t=t[a],Le(t)&&(r=!0)}return t}function sa(e,i){return Object.keys(e).find(n=>e[n]===i)}function ua(e){if(Se.isDiffsRecord(e))return e}class da{constructor(){O(this,"tree",null)}pick(i,n){if(!_(i))return null;const t={};for(const r of n){const a=String(r);if(!(a in i))continue;const o=i[a];Array.isArray(o)?t[a]=[...o]:_(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(i,n){return Object.keys(i).every(t=>n.includes(t))}}const be=()=>{},fa=(e=!1)=>e?{debug:(...i)=>console.debug(...i),info:(...i)=>console.info(...i),warn:(...i)=>console.warn(...i),error:(...i)=>console.error(...i)}:{debug:be,info:be,warn:be,error:be};function cn(e){return e==null||!_(e)&&!Oe(e)}function ga(e){const{source:i,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:g,isComplexNode:d,resolveNodeKey:f,isDisallowedValue:c=cn,shouldStopAfterNodeCreation:h}=e;return[({value:m,state:y,key:L,path:v})=>{if(typeof L=="symbol")return;if(!_(m)&&!Oe(m))return{value:m};const{alreadyConvertedValuesCache:N,parent:b,container:x}=y,H=N.get(m);if(!H||!g(H)&&!d(H))return{value:m};if(!b||!g(b))return{value:m};const T="#"+ii(v),C=f(L,m),E=n.createCycledClone(H,T,C,b);return x?x.addNestedNode(E):b&&b.addChildNode(E),{done:!0}},({key:m,value:y,path:L,state:v,rules:N})=>!N||!Array.isArray(N.transformers)?void 0:{value:N.transformers.reduce((H,T)=>T(m,H,i,L,v),y)},({key:m,value:y,path:L,rules:v,state:N})=>{if(!v)return{done:!0};if(typeof m=="symbol")return{done:!0};if(c(y))return{done:!0};if(!v.kind||!t.includes(v.kind))return;const{parent:b,container:x}=N,H="#"+ii(L),T=f(m,y),{kind:C,complex:E=!1}=v,k=a(y,b,x),j=r(H,T,C,E,k);if(!j)return;x?x.addNestedNode(j):b&&b.addChildNode(j);let re=y;if(h!=null&&h(j,y)){const X=b?b.descendantDiffs:void 0;if(!X||!(m in X))return{done:!0};const q=X[m];if(!q)return{done:!0};const{data:Y}=q;U(Y)&&(re=Y.beforeValue)}const Z=new Map(N.alreadyConvertedValuesCache);(_(y)||Oe(y))&&Z.set(y,j);let G;return g(j)?G=o(N,j,Z):G=s(N,j,Z),{value:re,state:G}}]}class hn{}class ce{constructor(i="#",n="",t,r,a){O(this,"type");O(this,"parent");O(this,"container");O(this,"newDataLevel");O(this,"_value");O(this,"_meta");O(this,"_childrenNodes",[]);O(this,"_nestedNodes",[]);O(this,"_diffs",{});O(this,"_diffsSummary",new Set);O(this,"_descendantDiffs",{});O(this,"_descendantDiffsSummary",new Set);O(this,"_diffsSeverities",{});this.id=i,this.key=n,this.kind=t,this.isCycle=r;const{type:o=ni.SIMPLE,value:s=null,parent:g=null,container:d=null,newDataLevel:f=!0,meta:c}=a;this.type=o,this.parent=g,this.container=d,this.newDataLevel=f,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(i,n,t){const r=new ce(i,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(i){return i?null:this._value}meta(){return this._meta}childrenNodes(i){return i?[]:this._childrenNodes}setChildrenNodes(i){this._childrenNodes.length=0,this._childrenNodes.push(...i)}nestedNodes(){return this._nestedNodes}setNestedNodes(i){this._nestedNodes.length=0,this._nestedNodes.push(...i)}findNestedNode(i,n=!1){if(!i&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===i)return t;if(n&&t.type===ni.COMPLEX){const r=t.findNestedNode(i,n);if(r)return r}}return null}addChildNode(i){this._childrenNodes.push(i)}addNestedNode(i){this._nestedNodes.push(i)}addDiffsSummary(i){for(const n of i)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(i):this.parent&&this.parent.addDiffsSummary(i)}addDescendantDiffsSummary(i){for(const n of i)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(i):this.parent&&this.parent.addDescendantDiffsSummary(i)}}const M={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},pn=Object.values(M),yi="<unnamed>";function mn(e){return e??yi}function bi(e){return e!==yi}function ca(e,i){return i.indexName&&bi(i.indexName)?i.indexName:e}function ha(e,i,n){return n||(i!=null&&i.indexName&&bi(i.indexName)?i.indexName:String(e))}function ti(e=M.TABLE){return{"/columns":{"/items":{"/*":()=>ti(M.COLUMN)},kind:M.COLUMNS},"/indexes":{"/items":{"/*":()=>ti(M.INDEX)},kind:M.INDEXES},kind:e}}function yn(e){return e.kind===xe.Literal&&typeof e.value=="string"}function bn(e){return e.kind===xe.RawExpr&&typeof e.expr=="string"}function Dn(e){return _(e)&&typeof e.expr=="string"}function vn(e){return _(e)&&typeof e.value=="string"}const se="titleRow",kn=["typeName","size","precision","scale","label"],pa={ToEnum:"to-enum",FromEnum:"from-enum"},ma={Lost:"lost",Gained:"gained"},Di=["isPrimaryKey","isUnique","isNotNull","isGenerated"],vi=["isUnique"],ya=[te,se,"tableName","schemaName","description"],ba=[te,se,"columnName","description","generatedExpression",...Di],Da=[te,se,"indexName",...vi];function Vn(e){if(!_(e)||!("data"in e)||!("styles"in e)||!("flags"in e)||!("highlightingMode"in e))return!1;const{data:i,styles:n}=e;return!_(n)||!("before"in n)||!("after"in n)?!1:Se.isDiff(i)}function ki(e){return Vn(e[se])}function Hn(e){return _(e)&&e.kind===fi.Domain&&typeof e.type=="string"}function xn(e){return e.kind===S.BoolType&&typeof e.type=="string"}function Cn(e){return e.kind===S.IntegerType&&typeof e.type=="string"}function ai(e){return e.kind===S.DecimalType&&typeof e.type=="string"}function ri(e){return e.kind===S.FloatType&&typeof e.type=="string"}function oi(e){return e.kind===S.StringType&&typeof e.type=="string"}function li(e){return e.kind===S.BinaryType&&typeof e.type=="string"}function si(e){return e.kind===S.TimeType&&typeof e.type=="string"}function qn(e){return e.kind===S.JSONType&&typeof e.type=="string"}function wn(e){return e.kind===S.SpatialType&&typeof e.type=="string"}function Nn(e){return e.kind===S.UUIDType&&typeof e.type=="string"}function Ie(e){return e.kind===S.EnumType&&Array.isArray(e.values)}function Sn(e){return e.kind===S.UnsupportedType&&typeof e.type=="string"}function ui(e){return typeof e.type=="string"}function $e(e){switch(e.kind){case xe.Literal:return yn(e)?e.value:e.kind;case xe.RawExpr:return bn(e)?e.expr:e.kind;case nn.NamedDefault:try{return $e(tn(e))}catch{return e.kind}default:return Dn(e)?e.expr:vn(e)?e.value:e.kind}}function Vi(e){return Hi($e(e))}function An(e){return Hi(e)}function Hi(e){return e.length<2||e[0]!=="'"||e[e.length-1]!=="'"?e:e.slice(1,-1).replace(/''/g,"'")}const Tn="Columns",En="Indexes";class va{constructor(i){this.logger=i}transformSourceToTableOrientedSpec(i,n){if(this.isDdlApiTableOrientedSpec(i))return i;const t=this.extractRealm(i);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,i),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(i,n,t){const r=me(n.attrs,ye.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:Tn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(i,n,a,t.schemaName))},indexes:{title:En,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(i){return this.isRealm(i)?i:_(i)&&this.isRealm(i.realm)?i.realm:null}findTableInRealm(i,n){var r;const t=i.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(i){return _(i)?typeof i.ddlapi=="string"&&Array.isArray(i.schemas):!1}isDdlApiTableOrientedSpec(i){return!(!_(i)||typeof i.tableName!="string"||!_(i.columns)||!Array.isArray(i.columns.items)||!_(i.indexes)||!Array.isArray(i.indexes.items))}buildColumnRowValue(i,n,t,r){var m,y,L;const a=me(t.attrs,ye.Comment),o=(m=t.attrs)==null?void 0:m.find(v=>v.kind===an.Identity),s=me(t.attrs,ye.GeneratedExpr),g=o!==void 0||s!==void 0,f=this.findForeignKeysForColumn(n,t).map(v=>this.buildForeignKeyTarget(i,v,t,r)).filter(v=>v!==void 0),c=f.length>0,h=this.formatColumnType(t.type),D=(y=t.type)==null?void 0:y.type,V=D&&Ie(D)?D.values:void 0,p=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:h,...V?{enumValues:V}:{},isPrimaryKey:p,isForeignKey:c,...f.length>0?{foreignKeyTargets:f}:{},isGenerated:g,...o?{generatedBy:"identity"}:{},...s&&!o?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!p&&((L=t.type)==null?void 0:L.null)===!1,...t.default!==void 0?{defaultValue:Vi(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(i){const n=(i.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=me(i.attrs,ye.Comment);return{indexName:mn(i.name),partNames:n,isUnique:i.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(i,n){var t;for(const r of i.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(i,n){var t;return(((t=i.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isUniqueColumn(i,n){return(i.indexes??[]).some(t=>{var r,a,o;return t.unique===!0&&((r=t.parts)==null?void 0:r.length)===1&&((o=(a=t.parts[0])==null?void 0:a.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(i,n){return i===n||i.name===n.name}findForeignKeysForColumn(i,n){return(i.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(i,n,t,r){var d,f;const a=((d=n.columns)==null?void 0:d.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,s=(f=n.refColumns)==null?void 0:f[a];if(!o||!s)return;const g=this.resolveForeignKeyTargetSchemaName(i,o,r);if(g)return{schemaName:g,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(i,n,t){const r=this.findSchemaNameForTable(i,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(i,n.name);return a||t}findUniqueSchemaNameForTableName(i,n){const t=i.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(i){return i!=null&&i.raw?{kind:"Raw",raw:i.raw,label:i.raw}:i!=null&&i.type?this.formatSchemaType(i.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(i){if(Hn(i))return this.formatPgDomainType(i);const n=this.formatSchemaTypeLabel(i);return xn(i)?{kind:S.BoolType,typeName:i.type,label:n}:Cn(i)?{kind:S.IntegerType,typeName:i.type,label:n,...i.unsigned!==void 0?{unsigned:i.unsigned}:{}}:ai(i)?{kind:S.DecimalType,typeName:i.type,label:n,...i.precision!==void 0?{precision:i.precision}:{},...i.scale!==void 0?{scale:i.scale}:{},...i.unsigned!==void 0?{unsigned:i.unsigned}:{}}:ri(i)?{kind:S.FloatType,typeName:i.type,label:n,...i.precision!==void 0?{precision:i.precision}:{},...i.unsigned!==void 0?{unsigned:i.unsigned}:{}}:oi(i)?{kind:S.StringType,typeName:i.type,label:n,...i.size!==void 0?{size:i.size}:{}}:li(i)?{kind:S.BinaryType,typeName:i.type,label:n,...i.size!==void 0?{size:i.size}:{}}:si(i)?{kind:S.TimeType,typeName:i.type,label:n,...i.precision!==void 0?{precision:i.precision}:{},...i.scale!==void 0?{scale:i.scale}:{}}:qn(i)?{kind:S.JSONType,typeName:i.type,label:n}:wn(i)?{kind:S.SpatialType,typeName:i.type,label:n}:Nn(i)?{kind:S.UUIDType,typeName:i.type,label:n}:Ie(i)?{kind:S.EnumType,label:n,...i.type!==void 0?{typeName:i.type}:{},values:i.values}:Sn(i)?{kind:S.UnsupportedType,typeName:i.type,label:n}:{kind:i.kind,label:ui(i)?i.type:i.kind}}formatPgDomainType(i){const n=i.baseType?this.formatSchemaTypeLabel(i.baseType):void 0;return{kind:fi.Domain,name:i.type,label:i.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(i){let n;return ai(i)?n=this.formatParameterizedTypeLabel(i.type,i.precision,i.scale):oi(i)?n=this.formatParameterizedTypeLabel(i.type,i.size):li(i)?n=this.formatParameterizedTypeLabel(i.type,i.size):ri(i)?n=this.formatParameterizedTypeLabel(i.type,i.precision):si(i)?n=this.formatParameterizedTypeLabel(i.type,i.precision,i.scale):Ie(i)?n=i.type??i.values[0]??"enum":ui(i)?n=i.type:n=i.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(i){return i.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(i,...n){const t=n.filter(r=>r!==void 0);return t.length===0?i:`${i} (${t.join(", ")})`}formatIndexPartName(i){var n;return(n=i.column)!=null&&n.name?i.column.name:i.expr?$e(i.expr):""}}const _n=new Set([M.TABLE,M.COLUMNS,M.COLUMN,M.INDEXES,M.INDEX]);class xi extends hn{createNodeMeta(i){return{_fragment:i}}createNodeValue(i,n,t,r){return!gn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(i)?null:r(t,xi.getDdlApiTreeNodeValueProps(i))}isDdlApiTreeNodeKindWithNodeValue(i){return _n.has(i)}static getDdlApiTreeNodeValueProps(i){switch(i){case M.TABLE:return["tableName","schemaName","description"];case M.COLUMNS:case M.INDEXES:return["title"];case M.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case M.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function Mn(e){return`${e.schemaName}\0${e.tableName}\0${e.columnName}`}function Ln(e,i,n){const t=n===A,r=new Set,a=[],o=g=>{const d=i==null?void 0:i[g];if(d)return d;for(const f of Object.values(i??{}))if(f&&U(f.data)&&f.data.afterValue===g)return f};for(const g of e){const d=o(g);if(!d){a.push({text:g});continue}if(r.has(d))continue;r.add(d);const{data:f}=d;if(W(f)){!t&&typeof f.afterValue=="string"&&a.push({text:f.afterValue,diff:d});continue}if(R(f)){t&&typeof f.beforeValue=="string"&&a.push({text:f.beforeValue,diff:d});continue}if(U(f)){const c=t?typeof f.beforeValue=="string"?f.beforeValue:g:typeof f.afterValue=="string"?f.afterValue:g;a.push({text:c,diff:d})}}for(const[g,d]of Object.entries(i??{}))!d||r.has(d)||R(d.data)&&t&&(a.push({text:g,diff:d}),r.add(d));const s=g=>{const d=e.indexOf(g);return d>=0?d:e.length};return a.sort((g,d)=>s(g.text)-s(d.text))}function Ci(e,i="none"){if(e.length===0)return[];const n=[];return i==="tight"?n.push({text:"("}):i==="spaced"&&n.push({text:" ("}),e.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(i==="tight"||i==="spaced")&&n.push({text:")"}),n}function qe(e,i,n){if(!i)return e!==void 0?String(e):void 0;const{data:t}=i,r=n===A;return W(t)?r?void 0:String(t.afterValue??e??""):R(t)?r?String(t.beforeValue??e??""):void 0:U(t)?String(r?t.beforeValue??e??"":t.afterValue??e??""):e!==void 0?String(e):void 0}function In(e,i){return(i===A?e.styles.before:e.styles.after).isContentVisible}const qi=["size","precision","scale"];function jn(e){const i=e.diffs.columnTypeFieldDiffs;if(!(!i||Object.keys(i).length===0))return i}function Fn(e,i){var d;const n=(d=e.value())==null?void 0:d.columnType;if(!n)return{kind:"plain",text:""};const t=jn(e);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(On(t)){const f=Object.values(t).find(Boolean);return f?{kind:"monolithic",text:Pn(n,t,a,i),diff:Un(f)}:{kind:"plain",text:n.label}}const o=[],s=qe(Re(n),r,i);s!==void 0&&o.push({text:s,diff:r});const g=Rn(n,t,i);return o.push(...g),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function On(e){const i=kn.map(t=>[t,e[t]]).filter(t=>!!t[1]);if(i.length===0)return!1;if(i.length===1){const[t]=i[0];return t==="typeName"||t==="label"}return new Set(i.map(([,t])=>t.data.action)).size===1}function Pn(e,i,n,t){const r=qe(Re(e),i[n],t)??Re(e),a=[];for(const o of qi){const s=qe(Xe(e,o),i[o],t);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function Rn(e,i,n){const t=Gn(e,i,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=qe(Xe(e,a),i[a],n);return o===void 0?[]:[{text:o,diff:i[a]}]});return[...Ci(r,"spaced")]}function Gn(e,i,n){return qi.filter(t=>{const r=i[t];return r?In(r,n):Xe(e,t)!==void 0})}function Re(e){return"typeName"in e&&typeof e.typeName=="string"?e.typeName:"name"in e&&typeof e.name=="string"?e.name:e.label}function Xe(e,i){if(!(i in e))return;const n=Reflect.get(e,i);return typeof n=="number"?n:void 0}function Un(e){const{data:i}=e;return U(i)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:le.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:le.Yellow}}}:W(i)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:le.Green}}}:R(i)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:le.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}function Kn(e){const i=e.diffs.partNameDiffs;if(!(!i||Object.keys(i).length===0))return i}function Bn(e,i){var o;const n=((o=e.value())==null?void 0:o.partNames)??[],t=Kn(e),r=t?Ln(n,t,i):n.map(s=>({text:s})),a=Ci(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function Wn(e){if(ki(e.diffs))return e.diffs[se]}function Yn(e){const i=e.diffs[te];if(i&&(W(i.data)||R(i.data)))return i}function $n(e){return e.diffs.schemaName}function ka(e){return e.diffs.description}function Va(e,i){var o;const n=((o=e.value())==null?void 0:o.schemaName)??"",t=$n(e);if(!t)return n;const r=t.data,a=i===A;return W(r)?a?"":n:R(r)?a?n:"":U(r)?a?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}function Xn(e){if(ki(e.diffs))return e.diffs[se]}function zn(e){const i=e.diffs[te];if(i&&(W(i.data)||R(i.data)))return i}function wi(e,i){return e?(i===A?e.styles.before:e.styles.after).isHeaderVisible:!0}function Jn(e){const n=e.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function Qn(e){const i={};let n=!1;for(const t of Di){const r=e.diffs[t];r&&(i[t]=r,n=!0)}return n?i:void 0}function Zn(e){return e.diffs.generatedExpression}function et(e){return e.diffs.description}function Ni(e){const n=e.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function it(e){return e.diffs.enumValuesRowColorizingDiff}function Si(e){return e.diffs.defaultValue}function nt(e){return e.diffs.defaultValueRowColorizingDiff}function tt(e,i){var o;const n=(o=e.value())==null?void 0:o.defaultValue,t=Si(e);if(!t)return n;const r=t.data,a=i===A;return W(r)?a?void 0:n:R(r)?a?je(r.beforeValue)??n:void 0:U(r)?a?je(r.beforeValue)??n:je(r.afterValue)??n:n}function je(e){if(typeof e=="string")return An(e);if(_(e)&&"kind"in e)return Vi(e)}function at(e,i){var d;const n=((d=e.value())==null?void 0:d.enumValues)??[],t=Ni(e),r=i===A,a=new Set,o=[],s=f=>{const c=t==null?void 0:t[f];if(c)return c;for(const h of Object.values(t??{}))if(h&&U(h.data)&&h.data.afterValue===f)return h};for(const f of n){const c=s(f);if(!c){o.push({literal:f});continue}if(a.has(c))continue;a.add(c);const{data:h}=c;if(W(h)){!r&&typeof h.afterValue=="string"&&o.push({literal:h.afterValue,diff:c});continue}if(R(h)){r&&typeof h.beforeValue=="string"&&o.push({literal:h.beforeValue,diff:c});continue}if(U(h)){const D=r?typeof h.beforeValue=="string"?h.beforeValue:f:typeof h.afterValue=="string"?h.afterValue:f;o.push({literal:D,diff:c})}}for(const[f,c]of Object.entries(t??{}))!c||a.has(c)||R(c.data)&&r&&(o.push({literal:f,diff:c}),a.add(c));const g=f=>{const c=n.indexOf(f);return c>=0?c:n.length};return o.sort((f,c)=>g(f.literal)-g(c.literal))}function rt(e){const i={};let n=!1;for(const t of vi){const r=e.diffs[t];r&&(i[t]=r,n=!0)}return n?i:void 0}function ot(e){return e?e.highlightingMode.get(Pe.Default)!==ve.Invisible:!1}const lt=u.createContext(!1),Ae=e=>{const{children:i,diffType:n,diffTypeCause:t,hidden:r=!1}=e;return r||!n?i:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(rn,{variant:n,message:t}),i]})};Ae.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Te=u.memo(e=>{const{content:i}=e;return l.jsx("div",{className:"flex flex-row w-full",children:i})});Te.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ee=u.memo(e=>{const{left:i,right:n}=e;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:i}),l.jsx("div",{className:"flex w-1/2",children:n})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ai="px-4",st="",ut="px-4",ze="";var I=(e=>(e.Default="default",e.AsyncApiJsoSection="async-api-jso-section",e.JsoProperty="jso-property",e.DdlApiSection="ddlapi-section",e.DdlApiProperty="ddlapi-property",e))(I||{});var w=(e=>(e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.body2="body2",e.body1="body1",e))(w||{});const dt=e=>{const{isExpandable:i,expanded:n,setExpanded:t,variant:r}=e,a=u.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:i&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${ct(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Ti=u.memo(e=>{const{value:i,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:s=ve.Default}=e,g=s===ve.Default,d=s===ve.Invisible,{textFontWeight:f,labelFontWeight:c,labelColor:h,textColor:D,label:V}=e,[p,m]=u.useState(!1),y=u.useCallback((H,T,C)=>{if(C)return null;const E=d?"":T.join(" "),k=`text-value ${r?"hover:cursor-pointer":""} ${f?`font-${f}`:""}`.trim(),j=`${k} ${E}`.trim(),re={onClick:r,...D!=null&&D.trim()?{style:{color:D}}:{}};H=p?H:gt(H);const Z=(G,X)=>{const q={...re,className:X};switch(n){case w.h1:return l.jsx("h1",{...q,children:G});case w.h2:return l.jsx("h2",{...q,children:G});case w.h3:return l.jsx("h3",{...q,children:G});case w.h4:return l.jsx("h4",{...q,children:G});case w.h5:return l.jsx("h5",{...q,children:G});case w.h6:return l.jsx("h6",{...q,children:G});case w.body1:return l.jsx("span",{...q,className:`${X} text-value-body1`.trim(),children:G});case w.body2:return l.jsx("span",{...q,className:`${X} text-value-body2`.trim(),children:G})}};return V?Z(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:h!=null&&h.trim()?{color:h}:{},children:`${V}: `}),l.jsx("span",{className:E,children:H})]}),k):Z(H,j)},[p,d,V,h,c,r,D,f,n]),L=u.useCallback(H=>{const T=[];let C=H,E=!1;if(a){const{data:k,styles:j}=a;switch(t){case A:T.push(P.highlighter(j.before.textHighlighterColor)),g&&(R(k)&&(C=oe(k.beforeValue)?k.beforeValue:C),U(k)&&(o===I.JsoProperty&&!d&&T.push(P.highlighter(le.Yellow)),C=oe(k.beforeValue)?k.beforeValue:C),Fe(k)&&(C=oe(k.beforeKey)?k.beforeKey:C)),W(k)&&(E=!0);break;case z:T.push(P.highlighter(j.after.textHighlighterColor)),g&&(W(k)&&(C=oe(k.afterValue)?k.afterValue:C),U(k)&&(o===I.JsoProperty&&!d&&T.push(P.highlighter(le.Yellow)),C=oe(k.afterValue)?k.afterValue:C),Fe(k)&&(C=oe(k.afterKey)?k.afterKey:C)),R(k)&&(E=!0);break}}return[C,T,E]},[a,g,d,t,o]),[v,N,b]=L(i);return u.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(v,N,b),!b&&l.jsx(dt,{isExpandable:ft(v),expanded:p,setExpanded:m,variant:n})]}),[y,v,N,b,p,m,n])}),Ge=5,Ue=300;function ft(e){return e?e.length>Ue||gi.trim(e.split(`
`)).length>Ge:!1}function gt(e){if(!e)return;if(e.length>Ue)return e.slice(0,Ue)+"...";const i=gi.trim(e.split(`
`));return i.length>Ge?i.slice(0,Ge).join(`
`)+"...":e}function oe(e){return typeof e=="string"}function ct(e){switch(e){case w.h1:return"text-value-expander--h1";case w.h2:return"text-value-expander--h2";case w.h3:return"text-value-expander--h3";case w.h4:return"text-value-expander--h4";case w.h5:return"text-value-expander--h5";case w.h6:return"text-value-expander--h6";case w.body1:return"text-value-expander--body1";case w.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const Q="data-precededby",B="data-ddl-list-last-row";var F=(e=>(e.ROOT="root",e.ADDRESS_ROW="address-row",e.DESCRIPTION_ROW="description-row",e.SUMMARY_ROW="summary-row",e.MESSAGE_SECTION_SELECTOR="message-section-selector",e.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",e.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",e.JSON_SCHEMA_VIEWER="json-schema-viewer",e.JSO_VIEWER="jso-viewer",e.JSO_PROPERTY="jso-property",e.BINDING_VERSION_ROW="binding-version-row",e.SERVER_BLOCK="server-block",e.SERVER_ADDRESS_ROW="server-address-row",e.DDL_TABLE_HEADER_ROW="ddl-table-header-row",e.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",e.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",e.DDL_SECTION_HEADER="ddl-section-header",e.DDL_COLUMN_ROW="ddl-column-row",e.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",e.DDL_INDEX_ROW="ddl-index-row",e))(F||{}),J=(e=>(e.Default="default",e.DdlApiProperty="ddlapi-property",e))(J||{});const ht={[J.DdlApiProperty]:ze},pt={[J.DdlApiProperty]:["min-h-[26px]"]};function mt(e){const i=ht[e]??Ai,n=pt[e]??[];return[i,...n].join(" ")}const ke=u.memo(e=>{const{value:i,variant:n,layoutSide:t,usage:r=J.Default}=e,{label:a,labelFontWeight:o,textFontWeight:s,labelColor:g,textColor:d}=e,{[Q]:f}=e,{diff:c,descendantDiffs:h,diffsSeverities:D}=e,V=de(),p=r===J.DdlApiProperty,m=p&&V>0,y=u.useMemo(()=>{if(!c)return[];const{data:N,styles:b}=c;if(!N)return[];const x=[];return t===A&&x.push(P.background(b.before.backgroundColor)),t===z&&x.push(P.background(b.after.backgroundColor)),x},[c,t]),L=u.useMemo(()=>mt(r),[r]),v=l.jsx(Ti,{label:a,labelFontWeight:o,textFontWeight:s,labelColor:g,textColor:d,value:i,variant:n,layoutSide:t,diff:c});return l.jsxs("div",{"data-precededby":f,className:`text-row-content flex w-full h-full ${p?"items-stretch":""} ${L} gap-2 ${y.join(" ")}`,children:[m&&l.jsxs("div",{"data-precededby":f,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(Ce,{level:V}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});ke.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const he=u.memo(e=>{const i=Ne(),{diffsSeverities:n,diffsSeverityPlacement:t=ci.DescriptionRow}=e,r=u.useMemo(()=>n==null?void 0:n[t],[n,t]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),o=u.useMemo(()=>Be(r==null?void 0:r.causedAt),[r]);switch(i){case Ye:return l.jsx(Ae,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ke,{...e,layoutSide:A}),right:l.jsx(ke,{...e,layoutSide:z})})});case We:return l.jsx(Te,{content:l.jsx(ke,{...e,layoutSide:z})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});he.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const _e="#353C4E",yt=u.createContext(void 0);function bt(){return u.useContext(yt)}const Ei=e=>{const{expandable:i,expanded:n,onClick:t,level:r}=e,a=u.useContext(lt),o=r>0,s=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!i&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(on,{short:i}),i&&n!==void 0&&l.jsx(ln,{onToggle:s,expanded:n})]})};Ei.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Dt={[I.JsoProperty]:st,[I.DdlApiSection]:ut,[I.DdlApiProperty]:ze},vt={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function kt(e){const i=Dt[e]??Ai,n=vt[e]??[];return[i,...n].join(" ")}const Ve=u.memo(e=>{const{expandable:i,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:g=!0,subheader:d,usage:f=I.Default,highlightingMode:c=sn}=e,{diff:h,descendantDiffs:D,diffsSeverities:V}=e,{[Q]:p,[B]:m}=e,y=u.useMemo(()=>{switch(f){case I.Default:return c.get(Pe.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return c.get(Pe.JsoPropertyKey)}},[c,f]),L=de(),v=bt(),N=u.useMemo(()=>v?o===A?v.beforeLevel:v.afterLevel:L,[o,L,v]),b=u.useMemo(()=>{const E=[];if(!h)return E;const{data:k,styles:j}=h;return k&&(o===A&&E.push(P.background(j.before.backgroundColor)),o===z&&E.push(P.background(j.after.backgroundColor))),E},[h,o]),x=u.useMemo(()=>g?l.jsx(Ti,{"data-precededby":p,value:r,variant:a,layoutSide:o,diff:h,usage:f,highlightingMode:y,onClick:t}):null,[g,p,r,a,o,h,f,y,t]),H=f===I.DdlApiProperty,T=u.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(i||N>0)&&l.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(Ce,{level:N}),l.jsx(Ei,{expandable:i,expanded:n,onClick:t,level:N})]}),!H&&x]}):N>0&&l.jsx(Ce,{level:N}),[s,i,N,p,n,t,x,H]),C=u.useMemo(()=>kt(f),[f]);return l.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":m?!0:void 0,"data-usage":f!==I.Default?f:void 0,className:`title-row-content flex w-full ${H?"items-stretch":"items-center"} h-full ${C} gap-2 ${b.join(" ")}`,children:[T,H?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[x,d==null?void 0:d(o)]}):d==null?void 0:d(o)]})});Ve.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ae=u.memo(e=>{const i=Ne(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=e,a=u.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=u.useMemo(()=>a==null?void 0:a.type,[a]),s=u.useMemo(()=>Be(a==null?void 0:a.causedAt),[a]);switch(i){case Ye:return l.jsx(Ae,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(Ee,{left:l.jsx(Ve,{...e,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:A}),right:l.jsx(Ve,{...e,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:z})})});case We:return l.jsx(Te,{content:l.jsx(Ve,{...e,layoutSide:z})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});ae.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function Ha(e,i){return u.useMemo(()=>i(e)?Je(e):{},[i,e])}function Je(e){return{nodeDiffs:e.diffs,nodeDescendantDiffs:e.descendantDiffs,nodeDiffsSeverities:e.diffsSeverities}}function _i(e,i={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=i,{nodeDiffs:s,nodeDescendantDiffs:g,nodeDiffsSeverities:d}=e;if(!s)return{};const f=Object.entries(s),c=V=>{const p=f.find(([m])=>m===String(V));return p==null?void 0:p[1]},h=n?c(n):void 0;return{diff:o?o(s,c):t?s[te]??h:h,...r?{descendantDiffs:g}:{},diffsSeverities:d,...a?{diffsSeverityPlacement:a}:{}}}function Vt(e){return pn.includes(e.kind)}function xa(e){return e.childrenNodes().filter(Vt)}function Ht(e){return e.kind===M.TABLE}function Ca(e){return Ht(e)&&e instanceof ce}function qa(e){return e.kind===M.COLUMNS}function Mi(e){return e.kind===M.COLUMN}function Qe(e){return Mi(e)&&e instanceof ce}function wa(e){return e.kind===M.INDEXES}function Li(e){return e.kind===M.INDEX}function Ii(e){return Li(e)&&e instanceof ce}function xt(e){return e.filter(Mi)}function Ct(e){return e.filter(Li)}const qt=u.createContext(null);function wt(){const e=u.useContext(qt);if(!e)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return e}const Nt=({href:e,className:i,children:n})=>l.jsx("a",{href:e,className:i,children:n});Nt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const ji=zn;function Fi(e){const i=_i(Je(e),{resolveDiff:()=>Xn(e)});return i.diff?{...i,highlightingMode:i.diff.highlightingMode}:{}}function Na(e){const i=_i(Je(e),{resolveDiff:()=>Wn(e)});return i.diff?{...i,highlightingMode:i.diff.highlightingMode}:{}}const Sa=Yn,St="ux-badge_ddlapi_primary-key",Oi="ux-badge_ddlapi_foreign-key",At="ux-badge_ddlapi_unique",Tt="ux-badge_ddlapi_not-null",Et="ux-badge_ddlapi_generated",_t="public",Pi="Default",Ri="As",Gi="Values";function Mt(e){return e?!!($(e.defaultValue)||$(e.generatedExpression)||e.enumValues&&e.enumValues.length>0):!1}const Ui=u.memo(e=>{const{isVisible:i,value:n,blockClassName:t,valueClassName:r}=e;return i?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});Ui.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Lt(e={}){const{textHighlighterColor:i,borderShadowColor:n,isFontMuted:t}=e;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",P.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[P.highlighter(i),t?P.fontMuted():""].filter(Boolean).join(" ")}),[n,t,i])}const ee=u.memo(e=>{const{isVisible:i,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=e,{blockClassName:o,valueClassName:s}=Lt({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(Ui,{isVisible:i,value:n,blockClassName:o,valueClassName:s})});ee.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const He=u.memo(e=>{var V;const{label:i,subheader:n,layoutSide:t,diff:r,colorizingDiff:a}=e,{[Q]:o,[B]:s}=e,g=de(),d=t===A?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,c=(V=(t===A?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??d)==null?void 0:V.backgroundColor,h=u.useMemo(()=>c?[P.background(c)]:[],[c]),D=u.useMemo(()=>{const p=a==null?void 0:a.data;if(p){if(W(p))return t!==A;if(R(p))return t===A}return(d==null?void 0:d.isContentVisible)??!0},[a,d==null?void 0:d.isContentVisible,t]);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":o,"data-ddl-list-last-row":s?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${ze} min-h-[26px] gap-2 ${h.join(" ")}`,children:[g>0&&l.jsxs("div",{"data-precededby":o,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(Ce,{level:g}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${i}:`}),n==null?void 0:n(t)]})]})});He.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ie=u.memo(e=>{var r;const i=Ne(),n=(r=e.diffsSeverities)==null?void 0:r[ci.AdditionalInfoRow],t=u.useMemo(()=>Be(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(i){case Ye:return l.jsx(Ae,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(Ee,{left:l.jsx(He,{...e,layoutSide:A}),right:l.jsx(He,{...e,layoutSide:z})})});case We:return l.jsx(Te,{content:l.jsx(He,{...e,layoutSide:z})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});ie.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function ne(e,i){return e?(i===A?e.styles.before:e.styles.after).textHighlighterColor:void 0}function Ki(e){const i=`${e.tableName}.${e.columnName}`;return!e.schemaName||e.schemaName===_t?i:`${e.schemaName}.${i}`}function It(e){return e.join(", ")}const Ke=u.memo(e=>{const{target:i,hideBadge:n=!1,textHighlighterColor:t}=e,{navigationLinkBuilder:r,navigationLinkComponent:a}=wt(),o=u.useMemo(()=>r(i.schemaName,i.tableName,i.columnName),[r,i]),s=u.useMemo(()=>["ddlapi-foreign-key-link",P.highlighter(t)].filter(Boolean).join(" "),[t]),g=l.jsx(a,{href:o,className:s,children:Ki(i)});return n?g:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(un,{text:"FK",colorSchema:Oi,inline:!0}),g]})});Ke.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function jt(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Bi(e,i){return!!e||!!i}function Ze(e,i){return e?i===A?e.styles.before.isContentVisible:e.styles.after.isContentVisible:!0}function Ft(e,i,n){return Bi(e,i)&&Ze(i,n)}function De(e){const{columnId:i,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=e;if(!Bi(r,a))return null;if(!Ze(a,s))return jt();const g=ot(a)?a==null?void 0:a.data:void 0;return l.jsx(hi,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!g,$changes:g},Pt(i,n))}function Ot(e){const{columnId:i,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=e,o=Rt(i,n),s=ne(t,a);if(t&&!Ze(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Ke,{target:n},o);const g=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(hi,{label:"FK",colorSchema:Oi,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:g}),l.jsx(Ke,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const pe=u.memo(e=>{const{columnId:i,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=e,o=Ne(),s=u.useMemo(()=>t??{},[t]),g=u.useMemo(()=>r??{},[r]),d=u.useMemo(()=>De({columnId:i,label:"PK",colorSchema:St,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[i,s.isPrimaryKey,o,a,n.isPrimaryKey]),f=u.useMemo(()=>Ft(n.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,n.isPrimaryKey]),c=u.useMemo(()=>De({columnId:i,label:"unique",colorSchema:At,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[i,s.isUnique,o,a,n.isUnique]),h=u.useMemo(()=>f?null:De({columnId:i,label:"not null",colorSchema:Tt,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[i,s.isNotNull,f,o,a,n.isNotNull]),D=u.useMemo(()=>De({columnId:i,label:"generated",colorSchema:Et,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[i,s.isGenerated,o,a,n.isGenerated]),V=u.useMemo(()=>{const m=n.foreignKeyTargets??[];return m.length===0?[]:m.map(y=>Ot({columnId:i,target:y,targetDiff:g[Mn(y)],layoutMode:o,layoutSide:a}))},[i,o,a,g,n.foreignKeyTargets]),p=u.useMemo(()=>[d,c,h,D,...V].filter(Boolean),[V,D,h,d,c]);return p.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p})});function Pt(e,i){return`${e}-${i}`}function Rt(e,i){return`${e}-FK-${Ki(i)}`}pe.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ei=u.memo(e=>{const{isVisible:i,value:n,className:t}=e;return i?l.jsx("span",{className:t,children:`${n}`}):null});ei.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Wi(e){const{appearance:i}=e;return u.useMemo(()=>["ddlapi-property-value","subheader",i].filter(Boolean).join(" "),[i])}const ue=u.memo(e=>{const{isVisible:i,value:n,appearance:t}=e,r=Wi({appearance:t});return l.jsx(ei,{isVisible:i,value:n,className:r})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Yi=e=>{const{node:i,additionalInfoPrecededBy:n=F.DDL_COLUMN_ROW,isLastInList:t=!1,[Q]:r}=e,a=fe(),o=i.value(),s=u.useCallback(b=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(ue,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(pe,{columnId:i.id,layoutSide:b,value:o})]}):l.jsx(l.Fragment,{}),[i.id,o]),g=u.useCallback(b=>{const x=o==null?void 0:o.defaultValue;return $(x)?l.jsx(ee,{isVisible:!0,value:x}):l.jsx(l.Fragment,{})},[o]),d=u.useCallback(b=>{const x=o==null?void 0:o.generatedExpression;return $(x)?l.jsx(ee,{isVisible:!0,value:x}):l.jsx(l.Fragment,{})},[o]),f=u.useCallback(b=>{var x;return(x=o==null?void 0:o.enumValues)!=null&&x.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((H,T)=>l.jsx(ee,{isVisible:!0,value:H},`${H}-${T}`))}):l.jsx(l.Fragment,{})},[o]),c=a===ge,h=u.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),D=!!(o!=null&&o.enumValues&&o.enumValues.length>0),V=$(o==null?void 0:o.defaultValue),p=$(o==null?void 0:o.generatedExpression),y=t&&!(c&&(D||V||p)),L=t&&D&&!V&&!p,v=t&&V&&!p,N=t&&p;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ae,{"data-precededby":r,[B]:y||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:w.body2,subheader:s,usage:I.DdlApiProperty}),h&&l.jsx(he,{"data-precededby":F.DDL_COLUMN_ROW,value:o.description??"",variant:w.body2,textFontWeight:"normal",textColor:_e,usage:J.DdlApiProperty}),c&&D&&l.jsx(ie,{"data-precededby":n,[B]:L||void 0,label:Gi,subheader:f}),c&&V&&l.jsx(ie,{"data-precededby":D?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:v||void 0,label:Pi,subheader:g}),c&&p&&l.jsx(ie,{"data-precededby":V||D?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:N||void 0,label:Ri,subheader:d})]}):null};Yi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function di(e,i){return e?(i===A?e.styles.before:e.styles.after).borderShadowColor:void 0}function Gt(e,i){return e?(i===A?e.styles.before:e.styles.after).isFontMuted===!0:!1}function Ut(e){if(Qe(e))return Jn(e)}function Kt(e){if(Qe(e))return Qn(e)}function Bt(e){if(Ii(e))return rt(e)}function Wt(e){const{appearance:i,textHighlighterColor:n,backgroundColor:t}=e,r=Wi({appearance:i});return u.useMemo(()=>[r,P.highlighter(n),P.background(t)].filter(Boolean).join(" "),[i,t,r,n])}const Me=u.memo(e=>{const{isVisible:i,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=e,o=Wt({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(ei,{isVisible:i,value:n,className:o})});Me.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Yt(e,i){return e?(i===A?e.styles.before:e.styles.after).backgroundColor:void 0}function $t(e){return e.text===", "||e.text===","}function Xt(e,i){const n=[];let t=!1;return e.forEach((r,a)=>{if($t(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(zt(r,a,i))}),n}function zt(e,i,n){return e.diff?l.jsx(Me,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:ne(e.diff,n)},`${e.text}-${i}`):l.jsx(ue,{isVisible:!0,value:e.text,appearance:"text"},`${e.text}-${i}`)}const we=u.memo(e=>{const{display:i,layoutSide:n}=e;return i.kind==="plain"?l.jsx(ue,{isVisible:!0,value:i.text,appearance:"text"}):i.kind==="monolithic"?l.jsx(Me,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:ne(i.diff,n),backgroundColor:Yt(i.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:Xt(i.segments,n)})});we.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Jt(e){const i=e.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return i===-1?{typeNameSegments:e,parameterSegments:[]}:{typeNameSegments:e.slice(0,i),parameterSegments:e.slice(i)}}function Qt(e,i,n){return e.diff?l.jsx(Me,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:ne(e.diff,n)},`${e.text}-${i}`):l.jsx(ue,{isVisible:!0,value:e.text,appearance:"text"},`${e.text}-${i}`)}const $i=u.memo(e=>{const{node:i,layoutSide:n}=e,t=Fn(i,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(we,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=Jt(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>Qt(o,s,n)),a.length>0&&l.jsx(we,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});$i.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Xi=e=>{const{node:i,additionalInfoPrecededBy:n=F.DDL_COLUMN_ROW,isLastInList:t=!1,[Q]:r}=e,a=fe(),o=i.value(),s=u.useMemo(()=>ji(i),[i]),g=u.useMemo(()=>Fi(i),[i]),d=u.useMemo(()=>Kt(i),[i]),f=u.useMemo(()=>Ut(i),[i]),c=u.useMemo(()=>et(i),[i]),h=u.useMemo(()=>Zn(i),[i]),D=u.useMemo(()=>Ni(i),[i]),V=u.useMemo(()=>it(i),[i]),p=u.useMemo(()=>Si(i),[i]),m=u.useMemo(()=>nt(i),[i]),y=u.useCallback(q=>o?wi(s,q)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx($i,{node:i,layoutSide:q}),l.jsx(pe,{columnId:i.id,layoutSide:q,value:o,flagDiffs:d,foreignKeyTargetDiffs:f})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[d,f,i,s,o]),L=u.useCallback(q=>{const Y=tt(i,q);return $(Y)?l.jsx(ee,{isVisible:!0,value:Y,textHighlighterColor:ne(p,q),borderShadowColor:di(p,q)}):l.jsx(l.Fragment,{})},[p,i]),v=u.useCallback(q=>{const Y=(()=>{const K=h==null?void 0:h.data;return K?q===A?R(K)||U(K)?K.beforeValue:void 0:W(K)||U(K)?K.afterValue:void 0:o==null?void 0:o.generatedExpression})();return $(Y)?l.jsx(ee,{isVisible:!0,value:Y,textHighlighterColor:ne(h,q)}):l.jsx(l.Fragment,{})},[h,o]),N=u.useCallback(q=>{const Y=at(i,q);return Y.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Y.map((K,Qi)=>l.jsx(ee,{isVisible:!0,value:K.literal,textHighlighterColor:ne(K.diff,q),borderShadowColor:di(K.diff,q),isFontMuted:Gt(K.diff,q)},`${K.literal}-${Qi}`))})},[i]),b=a===ge,x=!!s,H=b&&(!!(o!=null&&o.description)||!!c),T=!!(o!=null&&o.enumValues&&o.enumValues.length>0||D),C=!!($(o==null?void 0:o.defaultValue)||p||m),E=$(o==null?void 0:o.generatedExpression)||!!h,k=b&&(T||C||E),j=t&&!H&&!k,re=t&&H&&!k,Z=t&&T&&!C&&!E,G=t&&C&&!E,X=t&&E;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ae,{"data-precededby":r,[B]:j||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:w.body2,subheader:y,usage:I.DdlApiProperty,...g}),H&&l.jsx(he,{"data-precededby":F.DDL_COLUMN_ROW,[B]:re||void 0,value:o.description??"",variant:w.body2,textFontWeight:"normal",textColor:_e,usage:J.DdlApiProperty,diff:c,diffsSeverities:i.diffsSeverities}),b&&T&&l.jsx(ie,{"data-precededby":n,[B]:Z||void 0,label:Gi,subheader:N,colorizingDiff:V,diffsSeverities:D?i.diffsSeverities:void 0}),b&&!x&&C&&l.jsx(ie,{"data-precededby":T?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:G||void 0,label:Pi,subheader:L,colorizingDiff:m,diffsSeverities:p||m?i.diffsSeverities:void 0}),b&&E&&l.jsx(ie,{"data-precededby":C||T?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:X||void 0,label:Ri,subheader:v,diff:h,colorizingDiff:i.diffs[te],diffsSeverities:i.diffsSeverities})]}):null};Xi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Zt(e,i){let n=!1;return e.map((t,r)=>{const a=r===e.length-1,o=n?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,s=n?F.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:F.DDL_COLUMN_ROW,g={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return n=i&&Mt(t.value()),g})}const ea=e=>{const{node:i,[Q]:n}=e,t=de(),r=fe(),a=i.value(),o=xt(i.childrenNodes()),s=r===ge,g=u.useMemo(()=>Zt(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ae,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:w.h2,usage:I.DdlApiSection}),l.jsx(pi.Provider,{value:t+1,children:g.map(({columnNode:d,titlePrecededBy:f,additionalInfoPrecededBy:c,isLastInList:h})=>Qe(d)?l.jsx(Xi,{"data-precededby":f,additionalInfoPrecededBy:c,isLastInList:h,node:d},d.id):l.jsx(Yi,{"data-precededby":f,additionalInfoPrecededBy:c,isLastInList:h,node:d},d.id))})]})};ea.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const zi=e=>{const{node:i,isLastInList:n=!1,[Q]:t}=e,r=fe(),a=i.value(),o=(a==null?void 0:a.indexName)??"",s=u.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const h=It(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(ue,{isVisible:!0,value:`(${h})`,appearance:"text"}),l.jsx(pe,{columnId:i.id,layoutSide:c,value:a})]})},[i.id,a]),g=u.useMemo(()=>r===ge&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),d=n,f=!!a&&(a.partNames.length>0||a.isUnique);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ae,{"data-precededby":t,[B]:d||void 0,value:o,expandable:!1,expanded:!0,variant:w.body2,subheader:f?s:void 0,usage:I.DdlApiProperty}),g&&l.jsx(he,{"data-precededby":F.DDL_INDEX_ROW,value:a.description??"",variant:w.body1,textFontWeight:"normal",textColor:_e,usage:J.DdlApiProperty})]}):null};zi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ji=e=>{const{node:i,isLastInList:n=!1,[Q]:t}=e,r=fe(),a=i.value(),o=u.useMemo(()=>ji(i),[i]),s=u.useMemo(()=>Fi(i),[i]),g=u.useMemo(()=>Bt(i),[i]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(m=>{const y=Bn(i,m);return l.jsx(we,{layoutSide:m,display:y})},[i]),c=u.useCallback(m=>{if(!a)return l.jsx(l.Fragment,{});if(!wi(o,m))return l.jsx(l.Fragment,{});const y=a.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[y&&f(m),l.jsx(pe,{columnId:i.id,layoutSide:m,value:a,flagDiffs:g})]})},[g,i.id,o,f,a]),h=u.useMemo(()=>r===ge&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),D=!!o,V=n,p=!!a&&(a.partNames.length>0||a.isUnique||!!(g!=null&&g.isUnique));return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ae,{"data-precededby":t,[B]:V||void 0,value:d,expandable:!1,expanded:!0,variant:w.body2,subheader:p?c:void 0,usage:I.DdlApiProperty,...s}),h&&!D&&l.jsx(he,{"data-precededby":F.DDL_INDEX_ROW,value:a.description??"",variant:w.body1,textFontWeight:"normal",textColor:_e,usage:J.DdlApiProperty})]}):null};Ji.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ia(e){return e.map((i,n)=>({indexNode:i,titlePrecededBy:F.DDL_INDEX_ROW,isLastInList:n===e.length-1}))}const na=e=>{const{node:i,[Q]:n}=e,t=de(),r=i.value(),a=Ct(i.childrenNodes()),o=u.useMemo(()=>ia(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ae,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:w.h2,usage:I.DdlApiSection}),l.jsx(pi.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:g,isLastInList:d})=>Ii(s)?l.jsx(Ji,{"data-precededby":g,isLastInList:d,node:s},s.id):l.jsx(zi,{"data-precededby":g,isLastInList:d,node:s},s.id))})]})};na.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};export{ka as $,Q as A,Se as B,ea as C,va as D,M as E,Di as F,vi as G,Vn as H,na as I,ba as J,se as K,pa as L,ma as M,kn as N,Da as O,F as P,ya as Q,ne as R,ce as S,ni as T,Te as U,Ae as V,Ee as W,Ai as X,Sa as Y,Na as Z,$n as _,da as a,Va as a0,Ca as a1,Le as a2,dn as a3,hn as a4,gn as a5,fn as a6,la as a7,mi as a8,sa as a9,Ti as aa,lt as ab,yt as ac,bt as ad,Je as ae,_i as af,I as ag,Ha as ah,xi as b,ga as c,pn as d,fa as e,_t as f,ti as g,xa as h,_ as i,qa as j,wa as k,ae as l,w as m,he as n,_e as o,Ht as p,qt as q,ca as r,Nt as s,ha as t,Ie as u,Mn as v,An as w,Vi as x,bi as y,ua as z};
