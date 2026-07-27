var Wi=Object.defineProperty;var Yi=(i,e,n)=>e in i?Wi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var P=(i,e,n)=>(Yi(i,typeof e!="symbol"?e+"":e,n),n);import{u as $,v as W,x as Le,w as Y,T as Ie,U as Ze,V as ke,N as de,W as di,X as T,Y as $i,Z as Xi,K as pe,P as zi,M as he,_ as M,H as ae,$ as je,a0 as be,a1 as Ji,a2 as X,a3 as G,a4 as ui,a5 as ue,a6 as Ve,a7 as we,Q as fi,a8 as Ke,k as Ue,S as Be,a9 as Qi,aa as Zi,y as en,ab as B,ac as nn,ad as gi,ae as te,h as re,f as ci}from"./DiffBadge-ef5acf15.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const ei={SIMPLE:"simple",COMPLEX:"complex"},an={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},tn=Object.values(an);new Set(tn);class qe{aggregateByDescendantDiffs(e,n,a,l){}static isDiffsRecord(e){if(!I(e))return!1;for(const n of Object.values(e))if(!qe.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return I(n)&&($(n)||W(n)||Le(n)||Y(n))}}function I(i){return pi(i)&&!Array.isArray(i)}function pi(i){return typeof i=="object"&&i!==null}function rn(i){return I(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ee(i){return Array.isArray(i)}function Ga(i,e,n){let a=i,l=!1;for(const t of e){if(!I(a)&&!Ee(a))return;if(l){let s;pi(a)&&(s=a[t]),!s&&Ee(a)&&n&&(s=a.find(f=>I(f)&&f[n]===t)),a=s,l=!1;continue}a=a[t],Ee(a)&&(l=!0)}return a}function Ka(i,e){return Object.keys(i).find(n=>i[n]===e)}function Ua(i){if(qe.isDiffsRecord(i))return i}class Ba{constructor(){P(this,"tree",null)}pick(e,n){if(!I(e))return null;const a={};for(const l of n){const t=String(l);if(!(t in e))continue;const r=e[t];Array.isArray(r)?a[t]=[...r]:I(r)?a[t]={...r}:a[t]=r}return this.isPartialOf(a,n)?a:null}isPartialOf(e,n){return Object.keys(e).every(a=>n.includes(a))}}const me=()=>{},Wa=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:me,info:me,warn:me,error:me};function on(i){return i==null||!I(i)&&!Ie(i)}function Ya(i){const{source:e,tree:n,supportedNodeKinds:a,createNodeFromRaw:l,createNodeParams:t,createStateForSimpleNode:r,createStateForComplexNode:s,isSimpleNode:f,isComplexNode:c,resolveNodeKey:g,isDisallowedValue:u=on,shouldStopAfterNodeCreation:p}=i;return[({value:y,state:H,key:L,path:m})=>{if(typeof L=="symbol")return;if(!I(y)&&!Ie(y))return{value:y};const{alreadyConvertedValuesCache:q,parent:k,container:D}=H,V=q.get(y);if(!V||!f(V)&&!c(V))return{value:y};if(!k||!f(k))return{value:y};const _="#"+Ze(m),S=g(L,y),j=n.createCycledClone(V,_,S,k);return D?D.addNestedNode(j):k&&k.addChildNode(j),{done:!0}},({key:y,value:H,path:L,state:m,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((V,_)=>_(y,V,e,L,m),H)},({key:y,value:H,path:L,rules:m,state:q})=>{if(!m)return{done:!0};if(typeof y=="symbol")return{done:!0};if(u(H))return{done:!0};if(!m.kind||!a.includes(m.kind))return;const{parent:k,container:D}=q,V="#"+Ze(L),_=g(y,H),{kind:S,complex:j=!1}=m,x=t(H,k,D),F=l(V,_,S,j,x);if(!F)return;D?D.addNestedNode(F):k&&k.addChildNode(F);let ie=H;if(p!=null&&p(F,H)){const R=k?k.descendantDiffs:void 0;if(!R||!(y in R))return{done:!0};const A=R[y];if(!A)return{done:!0};const{data:ce}=A;Y(ce)&&(ie=ce.beforeValue)}const J=new Map(q.alreadyConvertedValuesCache);(I(H)||Ie(H))&&J.set(H,F);let N;return f(F)?N=r(q,F,J):N=s(q,F,J),{value:ie,state:N}}]}class ln{}class Ne{constructor(e="#",n="",a,l,t){P(this,"type");P(this,"parent");P(this,"container");P(this,"newDataLevel");P(this,"_value");P(this,"_meta");P(this,"_childrenNodes",[]);P(this,"_nestedNodes",[]);P(this,"_diffs",{});P(this,"_diffsSummary",new Set);P(this,"_descendantDiffs",{});P(this,"_descendantDiffsSummary",new Set);P(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=a,this.isCycle=l;const{type:r=ei.SIMPLE,value:s=null,parent:f=null,container:c=null,newDataLevel:g=!0,meta:u}=t;this.type=r,this.parent=f,this.container=c,this.newDataLevel=g,this._value=s,this._meta=u}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,a){const l=new Ne(e,n,this.kind,!0,{type:this.type,parent:a,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const a of this._nestedNodes){if(a.id===e)return a;if(n&&a.type===ei.COMPLEX){const l=a.findNestedNode(e,n);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const E={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},sn=Object.values(E);function ii(i=E.TABLE){return{"/columns":{"/items":{"/*":()=>ii(E.COLUMN)},kind:E.COLUMNS},"/indexes":{"/items":{"/*":()=>ii(E.INDEX)},kind:E.INDEXES},kind:i}}function dn(i){return i.kind===ke.Literal&&typeof i.value=="string"}function un(i){return i.kind===ke.RawExpr&&typeof i.expr=="string"}function fn(i){return I(i)&&typeof i.expr=="string"}function gn(i){return I(i)&&typeof i.value=="string"}const Ae="titleRow",cn=["typeName","size","precision","scale","label"],hi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],mi=["isUnique"],$a=[de,Ae,"columnName","description","generatedExpression",...hi],Xa=[de,Ae,"indexName",...mi];function pn(i){if(!I(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!I(n)||!("before"in n)||!("after"in n)?!1:qe.isDiff(e)}function hn(i){return pn(i[Ae])}function mn(i){return I(i)&&i.kind===di.Domain&&typeof i.type=="string"}function yn(i){return i.kind===T.BoolType&&typeof i.type=="string"}function bn(i){return i.kind===T.IntegerType&&typeof i.type=="string"}function ni(i){return i.kind===T.DecimalType&&typeof i.type=="string"}function ai(i){return i.kind===T.FloatType&&typeof i.type=="string"}function ti(i){return i.kind===T.StringType&&typeof i.type=="string"}function ri(i){return i.kind===T.BinaryType&&typeof i.type=="string"}function oi(i){return i.kind===T.TimeType&&typeof i.type=="string"}function Dn(i){return i.kind===T.JSONType&&typeof i.type=="string"}function vn(i){return i.kind===T.SpatialType&&typeof i.type=="string"}function Hn(i){return i.kind===T.UUIDType&&typeof i.type=="string"}function Me(i){return i.kind===T.EnumType&&Array.isArray(i.values)}function kn(i){return i.kind===T.UnsupportedType&&typeof i.type=="string"}function li(i){return typeof i.type=="string"}function Fe(i){switch(i.kind){case ke.Literal:return dn(i)?i.value:i.kind;case ke.RawExpr:return un(i)?i.expr:i.kind;case $i.NamedDefault:try{return Fe(Xi(i))}catch{return i.kind}default:return fn(i)?i.expr:gn(i)?i.value:i.kind}}const Vn="Columns",xn="Indexes";class za{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const a=this.extractRealm(e);if(!a)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const l=this.findTableInRealm(a,n);return l?this.buildTableOrientedSpecFromRealm(a,l,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",a.schemas.map(t=>t.name)),null)}buildTableOrientedSpecFromRealm(e,n,a){const l=pe(n.attrs,he.Comment);return{tableName:n.name,schemaName:a.schemaName,...l?{description:l.text}:{},columns:{title:Vn,items:(n.columns??[]).map(t=>this.buildColumnRowValue(e,n,t,a.schemaName))},indexes:{title:xn,items:(n.indexes??[]).map(t=>this.buildIndexRowValue(t))}}}extractRealm(e){return this.isRealm(e)?e:I(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var l;const a=e.schemas.find(t=>t.name===n.schemaName);if(a)return(l=a.tables)==null?void 0:l.find(t=>t.name===n.name)}isRealm(e){return I(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!I(e)||typeof e.tableName!="string"||!I(e.columns)||!Array.isArray(e.columns.items)||!I(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,a,l){var y,H,L;const t=pe(a.attrs,he.Comment),r=(y=a.attrs)==null?void 0:y.find(m=>m.kind===zi.Identity),s=pe(a.attrs,he.GeneratedExpr),f=r!==void 0||s!==void 0,g=this.findForeignKeysForColumn(n,a).map(m=>this.buildForeignKeyTarget(e,m,a,l)).filter(m=>m!==void 0),u=g.length>0,p=this.formatColumnType(a.type),b=(H=a.type)==null?void 0:H.type,v=b&&Me(b)?b.values:void 0,h=this.isPrimaryKeyColumn(n,a);return{columnName:a.name,columnType:p,...v?{enumValues:v}:{},isPrimaryKey:h,isForeignKey:u,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:f,...r?{generatedBy:"identity"}:{},...s&&!r?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,a),isNotNull:!h&&((L=a.type)==null?void 0:L.null)===!1,...a.default!==void 0?{defaultValue:Fe(a.default)}:{},...t?{description:t.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((l,t)=>l.seqNo-t.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),a=pe(e.attrs,he.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...a?{description:a.text}:{}}}findSchemaNameForTable(e,n){var a;for(const l of e.schemas)if((a=l.tables)!=null&&a.some(t=>t===n))return l.name}isPrimaryKeyColumn(e,n){var a;return(((a=e.primaryKey)==null?void 0:a.parts)??[]).some(l=>{var t;return((t=l.column)==null?void 0:t.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(a=>{var l,t,r;return a.unique===!0&&((l=a.parts)==null?void 0:l.length)===1&&((r=(t=a.parts[0])==null?void 0:t.column)==null?void 0:r.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(a=>{var l;return(l=a.columns)==null?void 0:l.some(t=>this.isSameForeignKeyColumn(t,n))})}buildForeignKeyTarget(e,n,a,l){var c,g;const t=((c=n.columns)==null?void 0:c.findIndex(u=>this.isSameForeignKeyColumn(u,a)))??-1;if(t<0)return;const r=n.refTable,s=(g=n.refColumns)==null?void 0:g[t];if(!r||!s)return;const f=this.resolveForeignKeyTargetSchemaName(e,r,l);if(f)return{schemaName:f,tableName:r.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,a){const l=this.findSchemaNameForTable(e,n);if(l)return l;const t=this.findUniqueSchemaNameForTableName(e,n.name);return t||a}findUniqueSchemaNameForTableName(e,n){const a=e.schemas.filter(l=>{var t;return(t=l.tables)==null?void 0:t.some(r=>r.name===n)}).map(l=>l.name);if(a.length===1)return a[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(mn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return yn(e)?{kind:T.BoolType,typeName:e.type,label:n}:bn(e)?{kind:T.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ni(e)?{kind:T.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ai(e)?{kind:T.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ti(e)?{kind:T.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ri(e)?{kind:T.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:oi(e)?{kind:T.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Dn(e)?{kind:T.JSONType,typeName:e.type,label:n}:vn(e)?{kind:T.SpatialType,typeName:e.type,label:n}:Hn(e)?{kind:T.UUIDType,typeName:e.type,label:n}:Me(e)?{kind:T.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:kn(e)?{kind:T.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:li(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:di.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return ni(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ti(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ri(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ai(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):oi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Me(e)?n=e.type??e.values[0]??"enum":li(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const a=n.filter(l=>l!==void 0);return a.length===0?e:`${e} (${a.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Fe(e.expr):""}}const Cn=new Set([E.TABLE,E.COLUMNS,E.COLUMN,E.INDEXES,E.INDEX]);class yi extends ln{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,a,l){return!rn(a)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(a,yi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Cn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case E.TABLE:return["tableName","schemaName","description"];case E.COLUMNS:case E.INDEXES:return["title"];case E.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case E.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function wn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const bi=["size","precision","scale"];function qn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Nn(i,e){var c;const n=(c=i.value())==null?void 0:c.columnType;if(!n)return{kind:"plain",text:""};const a=qn(i);if(!a)return{kind:"plain",text:n.label};const l=a.typeName??a.label,t=a.typeName?"typeName":"label";if(An(a)){const g=Object.values(a).find(Boolean);return g?{kind:"monolithic",text:Sn(n,a,t,e),diff:Mn(g)}:{kind:"plain",text:n.label}}const r=[],s=xe(Oe(n),l,e);s!==void 0&&r.push({text:s,diff:l});const f=Tn(n,a,e);return r.push(...f),r.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:r}}function An(i){const e=cn.map(a=>[a,i[a]]).filter(a=>!!a[1]);if(e.length===0)return!1;if(e.length===1){const[a]=e[0];return a==="typeName"||a==="label"}return new Set(e.map(([,a])=>a.data.action)).size===1}function Sn(i,e,n,a){const l=xe(Oe(i),e[n],a)??Oe(i),t=[];for(const r of bi){const s=xe(We(i,r),e[r],a);s!==void 0&&t.push(s)}return t.length===0?l:`${l} (${t.join(", ")})`}function Tn(i,e,n){const a=_n(i,e,n);if(a.length===0)return[];const l=[{text:" ("}];return a.forEach((t,r)=>{r>0&&l.push({text:", "});const s=xe(We(i,t),e[t],n);s!==void 0&&l.push({text:s,diff:e[t]})}),l.push({text:")"}),l}function _n(i,e,n){return bi.filter(a=>{const l=e[a];return l?En(l,n):We(i,a)!==void 0})}function Oe(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function We(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function xe(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:a}=e,l=n===M;return $(a)?l?void 0:String(a.afterValue??i??""):W(a)?l?String(a.beforeValue??i??""):void 0:Y(a)?String(l?a.beforeValue??i??"":a.afterValue??i??""):i!==void 0?String(i):void 0}function En(i,e){return(e===M?i.styles.before:i.styles.after).isContentVisible}function Mn(i){const{data:e}=i;return Y(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ae.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ae.Yellow}}}:$(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ae.Green}}}:W(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:ae.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function Ln(i){if(hn(i.diffs))return i.diffs[Ae]}function In(i){const e=i.diffs[de];if(e&&($(e.data)||W(e.data)))return e}function Di(i,e){return i?(e===M?i.styles.before:i.styles.after).isHeaderVisible:!0}function jn(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function Fn(i){const e={};let n=!1;for(const a of hi){const l=i.diffs[a];l&&(e[a]=l,n=!0)}return n?e:void 0}function On(i){return i.diffs.generatedExpression}function Rn(i){return i.diffs.description}function vi(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function Pn(i){return i.diffs.enumValuesRowColorizingDiff}function Gn(i,e){var c;const n=((c=i.value())==null?void 0:c.enumValues)??[],a=vi(i),l=e===M,t=new Set,r=[],s=g=>{const u=a==null?void 0:a[g];if(u)return u;for(const p of Object.values(a??{}))if(p&&Y(p.data)&&p.data.afterValue===g)return p};for(const g of n){const u=s(g);if(!u){r.push({literal:g});continue}if(t.has(u))continue;t.add(u);const{data:p}=u;if($(p)){!l&&typeof p.afterValue=="string"&&r.push({literal:p.afterValue,diff:u});continue}if(W(p)){l&&typeof p.beforeValue=="string"&&r.push({literal:p.beforeValue,diff:u});continue}if(Y(p)){const b=l?typeof p.beforeValue=="string"?p.beforeValue:g:typeof p.afterValue=="string"?p.afterValue:g;r.push({literal:b,diff:u})}}for(const[g,u]of Object.entries(a??{}))!u||t.has(u)||W(u.data)&&l&&(r.push({literal:g,diff:u}),t.add(u));const f=g=>{const u=n.indexOf(g);return u>=0?u:n.length};return r.sort((g,u)=>f(g.literal)-f(u.literal))}function Kn(i){const e={};let n=!1;for(const a of mi){const l=i.diffs[a];l&&(e[a]=l,n=!0)}return n?e:void 0}function Un(i){return i?i.highlightingMode.get(je.Default)!==be.Invisible:!1}const Bn=d.createContext(!1),Se=i=>{const{children:e,diffType:n,diffTypeCause:a,hidden:l=!1}=i;return l||!n?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Ji,{variant:n,message:a}),e]})};Se.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Te=d.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Te.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const _e=d.memo(i=>{const{left:e,right:n}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:n})]})});_e.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ye="px-4",Wn="",Yn="px-4",$e="";var O=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(O||{});var C=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(C||{});const $n=i=>{const{isExpandable:e,expanded:n,setExpanded:a,variant:l}=i,t=d.useCallback(()=>{a==null||a(r=>!r)},[a]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${Jn(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})})})},Hi=d.memo(i=>{const{value:e,variant:n,layoutSide:a,onClick:l,diff:t,usage:r,highlightingMode:s=be.Default}=i,f=s===be.Default,c=s===be.Invisible,{textFontWeight:g,labelFontWeight:u,labelColor:p,textColor:b,label:v}=i,[h,y]=d.useState(!1),H=d.useCallback((V,_,S)=>{if(S)return null;const j=c?"":_.join(" "),x=`text-value ${l?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),F=`${x} ${j}`.trim(),ie={onClick:l,...b!=null&&b.trim()?{style:{color:b}}:{}};V=h?V:zn(V);const J=(N,R)=>{const A={...ie,className:R};switch(n){case C.h1:return o.jsx("h1",{...A,children:N});case C.h2:return o.jsx("h2",{...A,children:N});case C.h3:return o.jsx("h3",{...A,children:N});case C.h4:return o.jsx("h4",{...A,children:N});case C.h5:return o.jsx("h5",{...A,children:N});case C.h6:return o.jsx("h6",{...A,children:N});case C.body1:return o.jsx("span",{...A,className:`${R} text-value-body1`.trim(),children:N});case C.body2:return o.jsx("span",{...A,className:`${R} text-value-body2`.trim(),children:N})}};return v?J(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:u?`font-${u}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${v}: `}),o.jsx("span",{className:j,children:V})]}),x):J(V,F)},[h,c,v,p,u,l,b,g,n]),L=d.useCallback(V=>{const _=[];let S=V,j=!1;if(t){const{data:x,styles:F}=t;switch(a){case M:_.push(G.highlighter(F.before.textHighlighterColor)),f&&(W(x)&&(S=ne(x.beforeValue)?x.beforeValue:S),Y(x)&&(r===O.JsoProperty&&!c&&_.push(G.highlighter(ae.Yellow)),S=ne(x.beforeValue)?x.beforeValue:S),Le(x)&&(S=ne(x.beforeKey)?x.beforeKey:S)),$(x)&&(j=!0);break;case X:_.push(G.highlighter(F.after.textHighlighterColor)),f&&($(x)&&(S=ne(x.afterValue)?x.afterValue:S),Y(x)&&(r===O.JsoProperty&&!c&&_.push(G.highlighter(ae.Yellow)),S=ne(x.afterValue)?x.afterValue:S),Le(x)&&(S=ne(x.afterKey)?x.afterKey:S)),W(x)&&(j=!0);break}}return[S,_,j]},[t,f,c,a,r]),[m,q,k]=L(e);return d.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[H(m,q,k),!k&&o.jsx($n,{isExpandable:Xn(m),expanded:h,setExpanded:y,variant:n})]}),[H,m,q,k,h,y,n])}),Re=5,Pe=300;function Xn(i){return i?i.length>Pe||ui.trim(i.split(`
`)).length>Re:!1}function zn(i){if(!i)return;if(i.length>Pe)return i.slice(0,Pe)+"...";const e=ui.trim(i.split(`
`));return e.length>Re?e.slice(0,Re).join(`
`)+"...":i}function ne(i){return typeof i=="string"}function Jn(i){switch(i){case C.h1:return"text-value-expander--h1";case C.h2:return"text-value-expander--h2";case C.h3:return"text-value-expander--h3";case C.h4:return"text-value-expander--h4";case C.h5:return"text-value-expander--h5";case C.h6:return"text-value-expander--h6";case C.body1:return"text-value-expander--body1";case C.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const U="data-precededby",K="data-ddl-list-last-row";var w=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(w||{}),z=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(z||{});const Qn={[z.DdlApiProperty]:$e},Zn={[z.DdlApiProperty]:["min-h-[26px]"]};function ea(i){const e=Qn[i]??Ye,n=Zn[i]??[];return[e,...n].join(" ")}const De=d.memo(i=>{const{value:e,variant:n,layoutSide:a,usage:l=z.Default}=i,{label:t,labelFontWeight:r,textFontWeight:s,labelColor:f,textColor:c}=i,{[U]:g}=i,{diff:u,descendantDiffs:p,diffsSeverities:b}=i,v=ue(),h=l===z.DdlApiProperty,y=h&&v>0,H=d.useMemo(()=>{if(!u)return[];const{data:q,styles:k}=u;if(!q)return[];const D=[];return a===M&&D.push(G.background(k.before.backgroundColor)),a===X&&D.push(G.background(k.after.backgroundColor)),D},[u,a]),L=d.useMemo(()=>ea(l),[l]),m=o.jsx(Hi,{label:t,labelFontWeight:r,textFontWeight:s,labelColor:f,textColor:c,value:e,variant:n,layoutSide:a,diff:u});return o.jsxs("div",{"data-precededby":g,className:`text-row-content flex h-full ${h?"items-stretch":""} ${L} gap-2 ${H.join(" ")}`,children:[y&&o.jsxs("div",{"data-precededby":g,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(Ve,{level:v}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:m}):m]})});De.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=d.memo(i=>{const e=we(),{diffsSeverities:n,diffsSeverityPlacement:a=fi.DescriptionRow}=i,l=d.useMemo(()=>n==null?void 0:n[a],[n,a]),t=d.useMemo(()=>l==null?void 0:l.type,[l]),r=d.useMemo(()=>Ke(l==null?void 0:l.causedAt),[l]);switch(e){case Be:return o.jsx(Se,{diffType:t,diffTypeCause:r,hidden:!1,children:o.jsx(_e,{left:o.jsx(De,{...i,layoutSide:M}),right:o.jsx(De,{...i,layoutSide:X})})});case Ue:return o.jsx(Te,{content:o.jsx(De,{...i,layoutSide:X})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const fe="#353C4E",ia=d.createContext(void 0);function na(){return d.useContext(ia)}const ki=i=>{const{expandable:e,expanded:n,onClick:a,level:l}=i,t=d.useContext(Bn),r=l>0,s=a??(()=>{t&&console.warn("Expander callback is not provided.")});return!e&&!r?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${r?"gap-0.5":""}`,children:[r&&o.jsx(Qi,{short:e}),e&&n!==void 0&&o.jsx(Zi,{onToggle:s,expanded:n})]})};ki.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const aa={[O.JsoProperty]:Wn,[O.DdlApiSection]:Yn,[O.DdlApiProperty]:$e},ta={[O.JsoProperty]:["min-h-[26px]"],[O.DdlApiProperty]:["min-h-[26px]"]};function ra(i){const e=aa[i]??Ye,n=ta[i]??[];return[e,...n].join(" ")}const ve=d.memo(i=>{const{expandable:e,expanded:n,onClickExpander:a,value:l,variant:t,layoutSide:r,enableHeader:s=!0,enableHeaderValue:f=!0,subheader:c,usage:g=O.Default,highlightingMode:u=en}=i,{diff:p,descendantDiffs:b,diffsSeverities:v}=i,{[U]:h,[K]:y}=i,H=d.useMemo(()=>{switch(g){case O.Default:return u.get(je.Default);case O.AsyncApiJsoSection:case O.JsoProperty:return u.get(je.JsoPropertyKey)}},[u,g]),L=ue(),m=na(),q=d.useMemo(()=>m?r===M?m.beforeLevel:m.afterLevel:L,[r,L,m]),k=d.useMemo(()=>{const j=[];if(!p)return j;const{data:x,styles:F}=p;return x&&(r===M&&j.push(G.background(F.before.backgroundColor)),r===X&&j.push(G.background(F.after.backgroundColor))),j},[p,r]),D=d.useMemo(()=>f?o.jsx(Hi,{"data-precededby":h,value:l,variant:t,layoutSide:r,diff:p,usage:g,highlightingMode:H,onClick:a}):null,[f,h,l,t,r,p,g,H,a]),V=g===O.DdlApiProperty,_=d.useMemo(()=>s?o.jsxs(o.Fragment,{children:[(e||q>0)&&o.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(Ve,{level:q}),o.jsx(ki,{expandable:e,expanded:n,onClick:a,level:q})]}),!V&&D]}):q>0&&o.jsx(Ve,{level:q}),[s,e,q,h,n,a,D,V]),S=d.useMemo(()=>ra(g),[g]);return o.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":y?!0:void 0,className:`title-row-content flex ${V?"items-stretch":"items-center"} h-full ${S} gap-2 ${k.join(" ")}`,children:[_,V?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[D,c==null?void 0:c(r)]}):c==null?void 0:c(r)]})});ve.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Q=d.memo(i=>{const e=we(),{diff:n,diffsSeverities:a,enableHeaderValue:l}=i,t=d.useMemo(()=>a==null?void 0:a["title-row"],[a]),r=d.useMemo(()=>t==null?void 0:t.type,[t]),s=d.useMemo(()=>Ke(t==null?void 0:t.causedAt),[t]);switch(e){case Be:return o.jsx(Se,{diffType:r,diffTypeCause:s,hidden:!1,children:o.jsx(_e,{left:o.jsx(ve,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:M}),right:o.jsx(ve,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:X})})});case Ue:return o.jsx(Te,{content:o.jsx(ve,{...i,layoutSide:X})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Q.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function Ja(i,e){return d.useMemo(()=>e(i)?Vi(i):{},[e,i])}function Vi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function oa(i,e={}){const{diffKey:n,fallbackToNodeDiff:a=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:t,resolveDiff:r}=e,{nodeDiffs:s,nodeDescendantDiffs:f,nodeDiffsSeverities:c}=i;if(!s)return{};const g=Object.entries(s),u=v=>{const h=g.find(([y])=>y===String(v));return h==null?void 0:h[1]},p=n?u(n):void 0;return{diff:r?r(s,u):a?s[de]??p:p,...l?{descendantDiffs:f}:{},diffsSeverities:c,...t?{diffsSeverityPlacement:t}:{}}}function la(i){return sn.includes(i.kind)}function sa(i){return i.childrenNodes().filter(la)}function Qa(i){return i.kind===E.TABLE}function da(i){return i.kind===E.COLUMNS}function xi(i){return i.kind===E.COLUMN}function Xe(i){return xi(i)&&i instanceof Ne}function ua(i){return i.kind===E.INDEXES}function Ci(i){return i.kind===E.INDEX}function wi(i){return Ci(i)&&i instanceof Ne}function fa(i){return i.filter(xi)}function ga(i){return i.filter(Ci)}const ca=d.createContext(null);function pa(){const i=d.useContext(ca);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const ha=({href:i,className:e,children:n})=>o.jsx("a",{href:i,className:e,children:n});ha.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function ma(i){return i?!!(B(i.defaultValue)||B(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const qi=d.memo(i=>{const{isVisible:e,value:n,blockClassName:a,valueClassName:l}=i;return e?o.jsx("span",{className:a,children:o.jsx("span",{className:l||void 0,children:`${n}`})}):null});qi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function ya(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:a}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",G.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[G.highlighter(e),a?G.fontMuted():""].filter(Boolean).join(" ")}),[n,a,e])}const Z=d.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:a,borderShadowColor:l,isFontMuted:t}=i,{blockClassName:r,valueClassName:s}=ya({textHighlighterColor:a,borderShadowColor:l,isFontMuted:t});return o.jsx(qi,{isVisible:e,value:n,blockClassName:r,valueClassName:s})});Z.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const He=d.memo(i=>{var v;const{label:e,subheader:n,layoutSide:a,diff:l,colorizingDiff:t}=i,{[U]:r,[K]:s}=i,f=ue(),c=a===M?l==null?void 0:l.styles.before:l==null?void 0:l.styles.after,u=(v=(a===M?t==null?void 0:t.styles.before:t==null?void 0:t.styles.after)??c)==null?void 0:v.backgroundColor,p=d.useMemo(()=>u?[G.background(u)]:[],[u]),b=d.useMemo(()=>{const h=t==null?void 0:t.data;if(h){if($(h))return a!==M;if(W(h))return a===M}return(c==null?void 0:c.isContentVisible)??!0},[t,c==null?void 0:c.isContentVisible,a]);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":r,"data-ddl-list-last-row":s?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${$e} min-h-[26px] gap-2 ${p.join(" ")}`,children:[f>0&&o.jsxs("div",{"data-precededby":r,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(Ve,{level:f}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),b&&o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(a)]})]})});He.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(i=>{var l;const e=we(),n=(l=i.diffsSeverities)==null?void 0:l[fi.AdditionalInfoRow],a=d.useMemo(()=>Ke(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case Be:return o.jsx(Se,{diffType:n==null?void 0:n.type,diffTypeCause:a,hidden:!1,children:o.jsx(_e,{left:o.jsx(He,{...i,layoutSide:M}),right:o.jsx(He,{...i,layoutSide:X})})});case Ue:return o.jsx(Te,{content:o.jsx(He,{...i,layoutSide:X})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function se(i,e){return i?(e===M?i.styles.before:i.styles.after).textHighlighterColor:void 0}const ba="ux-badge_ddlapi_primary-key",Ni="ux-badge_ddlapi_foreign-key",Da="ux-badge_ddlapi_unique",va="ux-badge_ddlapi_not-null",Ha="ux-badge_ddlapi_generated",Ai="public",Si="Default",Ti="As",_i="Values";function Ei(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Ai?e:`${i.schemaName}.${e}`}function Ce(i){return i.join(", ")}const Ge=d.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:a}=i,{navigationLinkBuilder:l,navigationLinkComponent:t}=pa(),r=d.useMemo(()=>l(e.schemaName,e.tableName,e.columnName),[l,e]),s=d.useMemo(()=>["ddlapi-foreign-key-link",G.highlighter(a)].filter(Boolean).join(" "),[a]),f=o.jsx(t,{href:r,className:s,children:Ei(e)});return n?f:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(nn,{text:"FK",colorSchema:Ni,inline:!0}),f]})});Ge.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function ka(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Mi(i,e){return!!i||!!e}function ze(i,e){return i?e===M?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Va(i,e,n){return Mi(i,e)&&ze(e,n)}function ye(i){const{columnId:e,label:n,colorSchema:a,flagValue:l,flagDiff:t,layoutMode:r,layoutSide:s}=i;if(!Mi(l,t))return null;if(!ze(t,s))return ka();const f=Un(t)?t==null?void 0:t.data:void 0;return o.jsx(gi,{label:n,colorSchema:a,layoutMode:r,layoutSide:s,isNodeChanged:!1,isContentChanged:!!f,$changes:f},Ca(e,n))}function xa(i){const{columnId:e,target:n,targetDiff:a,layoutMode:l,layoutSide:t}=i,r=wa(e,n),s=se(a,t);if(a&&!ze(a,t))return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},r);if(!a)return o.jsx(Ge,{target:n},r);const f=a.data;return o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(gi,{label:"FK",colorSchema:Ni,layoutMode:l,layoutSide:t,isNodeChanged:!1,isContentChanged:!0,$changes:f}),o.jsx(Ge,{target:n,hideBadge:!0,textHighlighterColor:s})]},r)}const ge=d.memo(i=>{const{columnId:e,value:n,flagDiffs:a,foreignKeyTargetDiffs:l,layoutSide:t}=i,r=we(),s=d.useMemo(()=>a??{},[a]),f=d.useMemo(()=>l??{},[l]),c=d.useMemo(()=>ye({columnId:e,label:"PK",colorSchema:ba,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:r,layoutSide:t}),[e,s.isPrimaryKey,r,t,n.isPrimaryKey]),g=d.useMemo(()=>Va(n.isPrimaryKey,s.isPrimaryKey,t),[s.isPrimaryKey,t,n.isPrimaryKey]),u=d.useMemo(()=>ye({columnId:e,label:"unique",colorSchema:Da,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:r,layoutSide:t}),[e,s.isUnique,r,t,n.isUnique]),p=d.useMemo(()=>g?null:ye({columnId:e,label:"not null",colorSchema:va,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:r,layoutSide:t}),[e,s.isNotNull,g,r,t,n.isNotNull]),b=d.useMemo(()=>ye({columnId:e,label:"generated",colorSchema:Ha,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:r,layoutSide:t}),[e,s.isGenerated,r,t,n.isGenerated]),v=d.useMemo(()=>{const y=n.foreignKeyTargets??[];return y.length===0?[]:y.map(H=>xa({columnId:e,target:H,targetDiff:f[wn(H)],layoutMode:r,layoutSide:t}))},[e,r,t,f,n.foreignKeyTargets]),h=d.useMemo(()=>[c,u,p,b,...v].filter(Boolean),[v,b,p,c,u]);return h.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:h})});function Ca(i,e){return`${i}-${e}`}function wa(i,e){return`${i}-FK-${Ei(e)}`}ge.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Je=d.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?o.jsx("span",{className:a,children:`${n}`}):null});Je.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Li(i){const{appearance:e}=i;return d.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const le=d.memo(i=>{const{isVisible:e,value:n,appearance:a}=i,l=Li({appearance:a});return o.jsx(Je,{isVisible:e,value:n,className:l})});le.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ii=i=>{const{node:e,additionalInfoPrecededBy:n=w.DDL_COLUMN_ROW,isLastInList:a=!1,[U]:l}=i,t=te(),r=e.value(),s=d.useCallback(k=>r?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(le,{isVisible:!0,value:r.columnType.label,appearance:"text"}),o.jsx(ge,{columnId:e.id,layoutSide:k,value:r})]}):o.jsx(o.Fragment,{}),[e.id,r]),f=d.useCallback(k=>{const D=r==null?void 0:r.defaultValue;return B(D)?o.jsx(Z,{isVisible:!0,value:D}):o.jsx(o.Fragment,{})},[r]),c=d.useCallback(k=>{const D=r==null?void 0:r.generatedExpression;return B(D)?o.jsx(Z,{isVisible:!0,value:D}):o.jsx(o.Fragment,{})},[r]),g=d.useCallback(k=>{var D;return(D=r==null?void 0:r.enumValues)!=null&&D.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:r.enumValues.map((V,_)=>o.jsx(Z,{isVisible:!0,value:V},`${V}-${_}`))}):o.jsx(o.Fragment,{})},[r]),u=t===re,p=d.useMemo(()=>u&&!!(r!=null&&r.description),[u,r==null?void 0:r.description]),b=!!(r!=null&&r.enumValues&&r.enumValues.length>0),v=B(r==null?void 0:r.defaultValue),h=B(r==null?void 0:r.generatedExpression),H=a&&!(u&&(b||v||h)),L=a&&b&&!v&&!h,m=a&&v&&!h,q=a&&h;return r?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Q,{"data-precededby":l,[K]:H||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:s,usage:O.DdlApiProperty}),p&&o.jsx(oe,{"data-precededby":w.DDL_COLUMN_ROW,value:r.description??"",variant:C.body2,textFontWeight:"normal",textColor:fe,usage:z.DdlApiProperty}),u&&b&&o.jsx(ee,{"data-precededby":n,[K]:L||void 0,label:_i,subheader:g}),u&&v&&o.jsx(ee,{"data-precededby":b?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:m||void 0,label:Si,subheader:f}),u&&h&&o.jsx(ee,{"data-precededby":v||b?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:q||void 0,label:Ti,subheader:c})]}):null};Ii.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function qa(i,e){return i?(e===M?i.styles.before:i.styles.after).borderShadowColor:void 0}function Na(i,e){return i?(e===M?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Aa(i){if(Xe(i))return jn(i)}function Sa(i){if(Xe(i))return Fn(i)}function Ta(i){if(wi(i))return Kn(i)}const ji=In;function Fi(i){const e=oa(Vi(i),{resolveDiff:()=>Ln(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function _a(i,e){return i?(e===M?i.styles.before:i.styles.after).backgroundColor:void 0}function Ea(i){const{appearance:e,textHighlighterColor:n,backgroundColor:a}=i,l=Li({appearance:e});return d.useMemo(()=>[l,G.highlighter(n),G.background(a)].filter(Boolean).join(" "),[e,a,l,n])}const Qe=d.memo(i=>{const{isVisible:e,value:n,appearance:a,textHighlighterColor:l,backgroundColor:t}=i,r=Ea({appearance:a,textHighlighterColor:l,backgroundColor:t});return o.jsx(Je,{isVisible:e,value:n,className:r})});Qe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Ma(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function si(i,e,n){return i.diff?o.jsx(Qe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:se(i.diff,n)},`${i.text}-${e}`):o.jsx(le,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Oi=d.memo(i=>{const{node:e,layoutSide:n}=i,a=Nn(e,n);if(a.kind==="plain")return o.jsx(le,{isVisible:!0,value:a.text,appearance:"text"});if(a.kind==="monolithic")return o.jsx(Qe,{isVisible:!0,value:a.text,appearance:"text",textHighlighterColor:se(a.diff,n),backgroundColor:_a(a.diff,n)});const{typeNameSegments:l,parameterSegments:t}=Ma(a.segments);return o.jsxs("span",{className:"inline-flex items-center gap-1",children:[l.map((r,s)=>si(r,s,n)),t.length>0&&o.jsx("span",{className:"inline-flex items-center",children:t.map((r,s)=>si(r,s,n))})]})});Oi.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ri=i=>{const{node:e,additionalInfoPrecededBy:n=w.DDL_COLUMN_ROW,isLastInList:a=!1,[U]:l}=i,t=te(),r=e.value(),s=d.useMemo(()=>ji(e),[e]),f=d.useMemo(()=>Fi(e),[e]),c=d.useMemo(()=>Sa(e),[e]),g=d.useMemo(()=>Aa(e),[e]),u=d.useMemo(()=>Rn(e),[e]),p=d.useMemo(()=>On(e),[e]),b=d.useMemo(()=>vi(e),[e]),v=d.useMemo(()=>Pn(e),[e]),h=d.useCallback(N=>r?Di(s,N)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(Oi,{node:e,layoutSide:N}),o.jsx(ge,{columnId:e.id,layoutSide:N,value:r,flagDiffs:c,foreignKeyTargetDiffs:g})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[c,g,e,s,r]),y=d.useCallback(N=>{const R=r==null?void 0:r.defaultValue;return B(R)?o.jsx(Z,{isVisible:!0,value:R}):o.jsx(o.Fragment,{})},[r]),H=d.useCallback(N=>{const R=(()=>{const A=p==null?void 0:p.data;return A?N===M?W(A)||Y(A)?A.beforeValue:void 0:$(A)||Y(A)?A.afterValue:void 0:r==null?void 0:r.generatedExpression})();return B(R)?o.jsx(Z,{isVisible:!0,value:R,textHighlighterColor:se(p,N)}):o.jsx(o.Fragment,{})},[p,r]),L=d.useCallback(N=>{const R=Gn(e,N);return R.length===0?o.jsx(o.Fragment,{}):o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:R.map((A,ce)=>o.jsx(Z,{isVisible:!0,value:A.literal,textHighlighterColor:se(A.diff,N),borderShadowColor:qa(A.diff,N),isFontMuted:Na(A.diff,N)},`${A.literal}-${ce}`))})},[e]),m=t===re,q=!!s,k=m&&(!!(r!=null&&r.description)||!!u),D=!!(r!=null&&r.enumValues&&r.enumValues.length>0||b),V=B(r==null?void 0:r.defaultValue),_=B(r==null?void 0:r.generatedExpression)||!!p,S=m&&(D||V||_),j=a&&!k&&!S,x=a&&k&&!S,F=a&&D&&!V&&!_,ie=a&&V&&!_,J=a&&_;return r?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Q,{"data-precededby":l,[K]:j||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:h,usage:O.DdlApiProperty,...f}),k&&o.jsx(oe,{"data-precededby":w.DDL_COLUMN_ROW,[K]:x||void 0,value:r.description??"",variant:C.body2,textFontWeight:"normal",textColor:fe,usage:z.DdlApiProperty,diff:u,diffsSeverities:e.diffsSeverities}),m&&D&&o.jsx(ee,{"data-precededby":n,[K]:F||void 0,label:_i,subheader:L,colorizingDiff:v,diffsSeverities:b?e.diffsSeverities:void 0}),m&&!q&&V&&o.jsx(ee,{"data-precededby":D?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:ie||void 0,label:Si,subheader:y}),m&&_&&o.jsx(ee,{"data-precededby":V||D?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:J||void 0,label:Ti,subheader:H,diff:p,colorizingDiff:e.diffs[de],diffsSeverities:e.diffsSeverities})]}):null};Ri.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function La(i,e){let n=!1;return i.map((a,l)=>{const t=l===i.length-1,r=l===0?w.DDL_SECTION_HEADER:n?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:w.DDL_COLUMN_ROW,s=n?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:w.DDL_COLUMN_ROW,f={columnNode:a,titlePrecededBy:r,additionalInfoPrecededBy:s,isLastInList:t};return n=e&&ma(a.value()),f})}const Pi=i=>{const{node:e,[U]:n}=i,a=ue(),l=te(),t=e.value(),r=fa(e.childrenNodes()),s=l===re,f=d.useMemo(()=>La(r,s),[r,s]);return r.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(Q,{"data-precededby":n,value:(t==null?void 0:t.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2}),o.jsx(ci.Provider,{value:a+1,children:f.map(({columnNode:c,titlePrecededBy:g,additionalInfoPrecededBy:u,isLastInList:p})=>Xe(c)?o.jsx(Ri,{"data-precededby":g,additionalInfoPrecededBy:u,isLastInList:p,node:c},c.id):o.jsx(Ii,{"data-precededby":g,additionalInfoPrecededBy:u,isLastInList:p,node:c},c.id))})]})};Pi.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Gi=i=>{const{schemaName:e,[U]:n}=i;return e===Ai?null:o.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Ye}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Gi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Ki=i=>{const{node:e,isLastInList:n=!1,[U]:a}=i,l=te(),t=e.value(),r=d.useMemo(()=>t?t.indexName?t.indexName:Ce(t.partNames):"",[t]),s=d.useCallback(g=>t?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.indexName&&o.jsx(le,{isVisible:!0,value:`(${Ce(t.partNames)})`,appearance:"text"}),o.jsx(ge,{layoutSide:g,value:t})]}):o.jsx(o.Fragment,{}),[t]),f=d.useMemo(()=>l===re&&!!(t!=null&&t.description),[l,t==null?void 0:t.description]),c=n;return t?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Q,{"data-precededby":a,[K]:c||void 0,value:r,expandable:!1,expanded:!0,variant:C.body2,subheader:t.indexName||t.isUnique?s:void 0,usage:O.DdlApiProperty}),f&&o.jsx(oe,{"data-precededby":w.DDL_INDEX_ROW,value:t.description??"",variant:C.body1,textFontWeight:"normal",textColor:fe,usage:z.DdlApiProperty})]}):null};Ki.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ui=i=>{const{node:e,isLastInList:n=!1,[U]:a}=i,l=te(),t=e.value(),r=d.useMemo(()=>ji(e),[e]),s=d.useMemo(()=>Fi(e),[e]),f=d.useMemo(()=>Ta(e),[e]),c=d.useMemo(()=>t?t.indexName?t.indexName:Ce(t.partNames):"",[t]),g=d.useCallback(v=>t?Di(r,v)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.indexName&&o.jsx(le,{isVisible:!0,value:`(${Ce(t.partNames)})`,appearance:"text"}),o.jsx(ge,{columnId:e.id,layoutSide:v,value:t,flagDiffs:f})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,r,t]),u=d.useMemo(()=>l===re&&!!(t!=null&&t.description),[l,t==null?void 0:t.description]),p=!!r,b=n;return t?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Q,{"data-precededby":a,[K]:b||void 0,value:c,expandable:!1,expanded:!0,variant:C.body2,subheader:t.indexName||t.isUnique||f!=null&&f.isUnique?g:void 0,usage:O.DdlApiProperty,...s}),u&&!p&&o.jsx(oe,{"data-precededby":w.DDL_INDEX_ROW,value:t.description??"",variant:C.body1,textFontWeight:"normal",textColor:fe,usage:z.DdlApiProperty})]}):null};Ui.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ia(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?w.DDL_SECTION_HEADER:w.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Bi=i=>{const{node:e,[U]:n}=i,a=ue(),l=e.value(),t=ga(e.childrenNodes()),r=d.useMemo(()=>Ia(t),[t]);return t.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(Q,{"data-precededby":n,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2}),o.jsx(ci.Provider,{value:a+1,children:r.map(({indexNode:s,titlePrecededBy:f,isLastInList:c})=>wi(s)?o.jsx(Ui,{"data-precededby":f,isLastInList:c,node:s},s.id):o.jsx(Ki,{"data-precededby":f,isLastInList:c,node:s},s.id))})]})};Bi.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const ja=i=>{const{node:e,noHeading:n=!1,[U]:a=w.ROOT}=i,l=te(),t=e.value(),r=sa(e),s=r.find(da),f=r.find(ua),c=!!(t!=null&&t.schemaName),g=l===re&&!!(t!=null&&t.description),u=n?w.ROOT:w.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&o.jsx(Q,{"data-precededby":a,value:(t==null?void 0:t.tableName)??"",expandable:!1,expanded:!0,variant:C.h1}),c&&o.jsx(Gi,{"data-precededby":u,schemaName:(t==null?void 0:t.schemaName)??""}),g&&o.jsx(oe,{"data-precededby":c?w.DDL_TABLE_SCHEMA_ROW:u,value:(t==null?void 0:t.description)??"",variant:C.h4,textFontWeight:"normal",textColor:fe}),s&&o.jsx(Pi,{"data-precededby":g?w.DDL_TABLE_DESCRIPTION_ROW:c?w.DDL_TABLE_SCHEMA_ROW:u,node:s}),f&&o.jsx(Bi,{"data-precededby":s!=null&&s.childrenNodes().length?w.DDL_COLUMN_ROW:g?w.DDL_TABLE_DESCRIPTION_ROW:c?w.DDL_TABLE_SCHEMA_ROW:u,node:f})]})};ja.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{qe as A,tn as B,Ga as C,za as D,pi as E,Ka as F,Se as G,_e as H,Hi as I,C as J,U as K,Bn as L,ia as M,na as N,Te as O,Vi as P,oa as Q,Q as R,Ne as S,ei as T,O as U,w as V,oe as W,Ye as X,Ja as Y,fe as Z,Ba as a,yi as b,Ya as c,sn as d,Wa as e,Qa as f,ii as g,ca as h,I as i,ja as j,ha as k,Me as l,wn as m,hi as n,mi as o,E as p,pn as q,$a as r,Ae as s,Ua as t,cn as u,Xa as v,Ee as w,an as x,ln as y,rn as z};
