var Fi=Object.defineProperty;var Oi=(i,e,a)=>e in i?Fi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var P=(i,e,a)=>(Oi(i,typeof e!="symbol"?e+"":e,a),a);import{u as ee,v as X,x as Te,w as J,T as Ee,U as Ye,V as ve,N as oe,W as ni,X as _,Y as Ri,Z as Pi,K as ge,P as Gi,M as ce,_ as Me,$ as me,a0 as F,a1 as Ki,a2 as W,a3 as K,H as $e,a4 as ri,a5 as le,a6 as He,a7 as Ve,Q as ti,a8 as Re,k as Pe,S as Ge,a9 as Ui,aa as Bi,y as Wi,ab as B,ac as Yi,ad as oi,ae as ne,h as re,f as li}from"./DiffBadge-d6b0d892.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Xe={SIMPLE:"simple",COMPLEX:"complex"},$i={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Xi=Object.values($i);new Set(Xi);class xe{aggregateByDescendantDiffs(e,a,r,l){}static isDiffsRecord(e){if(!L(e))return!1;for(const a of Object.values(e))if(!xe.isDiff(a))return!1;return!0}static isDiff(e){const a=e;return L(a)&&(ee(a)||X(a)||Te(a)||J(a))}}function L(i){return si(i)&&!Array.isArray(i)}function si(i){return typeof i=="object"&&i!==null}function Ji(i){return L(i)&&Object.keys(i).every(e=>typeof e=="string")}function Se(i){return Array.isArray(i)}function Vn(i,e,a){let r=i,l=!1;for(const n of e){if(!L(r)&&!Se(r))return;if(l){let d;si(r)&&(d=r[n]),!d&&Se(r)&&a&&(d=r.find(f=>L(f)&&f[a]===n)),r=d,l=!1;continue}r=r[n],Se(r)&&(l=!0)}return r}function xn(i,e){return Object.keys(i).find(a=>i[a]===e)}function Cn(i){if(xe.isDiffsRecord(i))return i}class qn{constructor(){P(this,"tree",null)}pick(e,a){if(!L(e))return null;const r={};for(const l of a){const n=String(l);if(!(n in e))continue;const t=e[n];Array.isArray(t)?r[n]=[...t]:L(t)?r[n]={...t}:r[n]=t}return this.isPartialOf(r,a)?r:null}isPartialOf(e,a){return Object.keys(e).every(r=>a.includes(r))}}const he=()=>{},wn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:he,info:he,warn:he,error:he};function zi(i){return i==null||!L(i)&&!Ee(i)}function Nn(i){const{source:e,tree:a,supportedNodeKinds:r,createNodeFromRaw:l,createNodeParams:n,createStateForSimpleNode:t,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:c,resolveNodeKey:g,isDisallowedValue:u=zi,shouldStopAfterNodeCreation:h}=i;return[({value:y,state:H,key:M,path:m})=>{if(typeof M=="symbol")return;if(!L(y)&&!Ee(y))return{value:y};const{alreadyConvertedValuesCache:w,parent:k,container:D}=H,V=w.get(y);if(!V||!f(V)&&!c(V))return{value:y};if(!k||!f(k))return{value:y};const T="#"+Ye(m),A=g(M,y),I=a.createCycledClone(V,T,A,k);return D?D.addNestedNode(I):k&&k.addChildNode(I),{done:!0}},({key:y,value:H,path:M,state:m,rules:w})=>!w||!Array.isArray(w.transformers)?void 0:{value:w.transformers.reduce((V,T)=>T(y,V,e,M,m),H)},({key:y,value:H,path:M,rules:m,state:w})=>{if(!m)return{done:!0};if(typeof y=="symbol")return{done:!0};if(u(H))return{done:!0};if(!m.kind||!r.includes(m.kind))return;const{parent:k,container:D}=w,V="#"+Ye(M),T=g(y,H),{kind:A,complex:I=!1}=m,x=n(H,k,D),j=l(V,T,A,I,x);if(!j)return;D?D.addNestedNode(j):k&&k.addChildNode(j);let ie=H;if(h!=null&&h(j,H)){const R=k?k.descendantDiffs:void 0;if(!R||!(y in R))return{done:!0};const N=R[y];if(!N)return{done:!0};const{data:fe}=N;J(fe)&&(ie=fe.beforeValue)}const $=new Map(w.alreadyConvertedValuesCache);(L(H)||Ee(H))&&$.set(H,j);let S;return f(j)?S=t(w,j,$):S=d(w,j,$),{value:ie,state:S}}]}class Qi{}class Ce{constructor(e="#",a="",r,l,n){P(this,"type");P(this,"parent");P(this,"container");P(this,"newDataLevel");P(this,"_value");P(this,"_meta");P(this,"_childrenNodes",[]);P(this,"_nestedNodes",[]);P(this,"_diffs",{});P(this,"_diffsSummary",new Set);P(this,"_descendantDiffs",{});P(this,"_descendantDiffsSummary",new Set);P(this,"_diffsSeverities",{});this.id=e,this.key=a,this.kind=r,this.isCycle=l;const{type:t=Xe.SIMPLE,value:d=null,parent:f=null,container:c=null,newDataLevel:g=!0,meta:u}=n;this.type=t,this.parent=f,this.container=c,this.newDataLevel=g,this._value=d,this._meta=u}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,a,r){const l=new Ce(e,a,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,a=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const r of this._nestedNodes){if(r.id===e)return r;if(a&&r.type===Xe.COMPLEX){const l=r.findNestedNode(e,a);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const a of e)this._diffsSummary.add(a),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const a of e)this._descendantDiffsSummary.add(a),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const E={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Zi=Object.values(E);function Je(i=E.TABLE){return{"/columns":{"/items":{"/*":()=>Je(E.COLUMN)},kind:E.COLUMNS},"/indexes":{"/items":{"/*":()=>Je(E.INDEX)},kind:E.INDEXES},kind:i}}function ea(i){return i.kind===ve.Literal&&typeof i.value=="string"}function ia(i){return i.kind===ve.RawExpr&&typeof i.expr=="string"}function aa(i){return L(i)&&typeof i.expr=="string"}function na(i){return L(i)&&typeof i.value=="string"}const qe="titleRow",di=["isPrimaryKey","isUnique","isNotNull","isGenerated"],ui=["isUnique"],An=[oe,qe,"columnName","description","generatedExpression",...di],Sn=[oe,qe,"indexName",...ui];function ra(i){if(!L(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:a}=i;return!L(a)||!("before"in a)||!("after"in a)?!1:xe.isDiff(e)}function ta(i){return ra(i[qe])}function oa(i){return L(i)&&i.kind===ni.Domain&&typeof i.type=="string"}function la(i){return i.kind===_.BoolType&&typeof i.type=="string"}function sa(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function ze(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function Qe(i){return i.kind===_.FloatType&&typeof i.type=="string"}function Ze(i){return i.kind===_.StringType&&typeof i.type=="string"}function ei(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function ii(i){return i.kind===_.TimeType&&typeof i.type=="string"}function da(i){return i.kind===_.JSONType&&typeof i.type=="string"}function ua(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function fa(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function _e(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function ga(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function ai(i){return typeof i.type=="string"}function Le(i){switch(i.kind){case ve.Literal:return ea(i)?i.value:i.kind;case ve.RawExpr:return ia(i)?i.expr:i.kind;case Ri.NamedDefault:try{return Le(Pi(i))}catch{return i.kind}default:return aa(i)?i.expr:na(i)?i.value:i.kind}}const ca="Columns",ha="Indexes";class _n{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,a){if(this.isDdlApiTableOrientedSpec(e))return e;const r=this.extractRealm(e);if(!r)return this.logger.debug("[DDL API] Unsupported source shape for table key:",a,e),null;const l=this.findTableInRealm(r,a);return l?this.buildTableOrientedSpecFromRealm(r,l,a):(this.logger.debug("[DDL API] Table not found in realm:",a,"available schemas:",r.schemas.map(n=>n.name)),null)}buildTableOrientedSpecFromRealm(e,a,r){const l=ge(a.attrs,ce.Comment);return{tableName:a.name,schemaName:r.schemaName,...l?{description:l.text}:{},columns:{title:ca,items:(a.columns??[]).map(n=>this.buildColumnRowValue(e,a,n,r.schemaName))},indexes:{title:ha,items:(a.indexes??[]).map(n=>this.buildIndexRowValue(n))}}}extractRealm(e){return this.isRealm(e)?e:L(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,a){var l;const r=e.schemas.find(n=>n.name===a.schemaName);if(r)return(l=r.tables)==null?void 0:l.find(n=>n.name===a.name)}isRealm(e){return L(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!L(e)||typeof e.tableName!="string"||!L(e.columns)||!Array.isArray(e.columns.items)||!L(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,a,r,l){var y,H,M;const n=ge(r.attrs,ce.Comment),t=(y=r.attrs)==null?void 0:y.find(m=>m.kind===Gi.Identity),d=ge(r.attrs,ce.GeneratedExpr),f=t!==void 0||d!==void 0,g=this.findForeignKeysForColumn(a,r).map(m=>this.buildForeignKeyTarget(e,m,r,l)).filter(m=>m!==void 0),u=g.length>0,h=this.formatColumnType(r.type),b=(H=r.type)==null?void 0:H.type,v=b&&_e(b)?b.values:void 0,p=this.isPrimaryKeyColumn(a,r);return{columnName:r.name,columnType:h,...v?{enumValues:v}:{},isPrimaryKey:p,isForeignKey:u,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:f,...t?{generatedBy:"identity"}:{},...d&&!t?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(a,r),isNotNull:!p&&((M=r.type)==null?void 0:M.null)===!1,...r.default!==void 0?{defaultValue:Le(r.default)}:{},...n?{description:n.text}:{}}}buildIndexRowValue(e){const a=(e.parts??[]).slice().sort((l,n)=>l.seqNo-n.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),r=ge(e.attrs,ce.Comment);return{...e.name?{indexName:e.name}:{},partNames:a,isUnique:e.unique===!0,...r?{description:r.text}:{}}}findSchemaNameForTable(e,a){var r;for(const l of e.schemas)if((r=l.tables)!=null&&r.some(n=>n===a))return l.name}isPrimaryKeyColumn(e,a){var r;return(((r=e.primaryKey)==null?void 0:r.parts)??[]).some(l=>{var n;return((n=l.column)==null?void 0:n.name)===a.name})}isUniqueColumn(e,a){return(e.indexes??[]).some(r=>{var l,n,t;return r.unique===!0&&((l=r.parts)==null?void 0:l.length)===1&&((t=(n=r.parts[0])==null?void 0:n.column)==null?void 0:t.name)===a.name})}isSameForeignKeyColumn(e,a){return e===a||e.name===a.name}findForeignKeysForColumn(e,a){return(e.foreignKeys??[]).filter(r=>{var l;return(l=r.columns)==null?void 0:l.some(n=>this.isSameForeignKeyColumn(n,a))})}buildForeignKeyTarget(e,a,r,l){var c,g;const n=((c=a.columns)==null?void 0:c.findIndex(u=>this.isSameForeignKeyColumn(u,r)))??-1;if(n<0)return;const t=a.refTable,d=(g=a.refColumns)==null?void 0:g[n];if(!t||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,t,l);if(f)return{schemaName:f,tableName:t.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,a,r){const l=this.findSchemaNameForTable(e,a);if(l)return l;const n=this.findUniqueSchemaNameForTableName(e,a.name);return n||r}findUniqueSchemaNameForTableName(e,a){const r=e.schemas.filter(l=>{var n;return(n=l.tables)==null?void 0:n.some(t=>t.name===a)}).map(l=>l.name);if(r.length===1)return r[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(oa(e))return this.formatPgDomainType(e);const a=this.formatSchemaTypeLabel(e);return la(e)?{kind:_.BoolType,typeName:e.type,label:a}:sa(e)?{kind:_.IntegerType,typeName:e.type,label:a,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ze(e)?{kind:_.DecimalType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Qe(e)?{kind:_.FloatType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ze(e)?{kind:_.StringType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:ei(e)?{kind:_.BinaryType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:ii(e)?{kind:_.TimeType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:da(e)?{kind:_.JSONType,typeName:e.type,label:a}:ua(e)?{kind:_.SpatialType,typeName:e.type,label:a}:fa(e)?{kind:_.UUIDType,typeName:e.type,label:a}:_e(e)?{kind:_.EnumType,label:a,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:ga(e)?{kind:_.UnsupportedType,typeName:e.type,label:a}:{kind:e.kind,label:ai(e)?e.type:e.kind}}formatPgDomainType(e){const a=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ni.Domain,name:e.type,label:e.type,...a?{baseTypeLabel:a}:{}}}formatSchemaTypeLabel(e){let a;return ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):ei(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):Qe(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision):ii(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):_e(e)?a=e.type??e.values[0]??"enum":ai(e)?a=e.type:a=e.kind,this.normalizeTypeLabelSpacing(a)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...a){const r=a.filter(l=>l!==void 0);return r.length===0?e:`${e} (${r.join(", ")})`}formatIndexPartName(e){var a;return(a=e.column)!=null&&a.name?e.column.name:e.expr?Le(e.expr):""}}const pa=new Set([E.TABLE,E.COLUMNS,E.COLUMN,E.INDEXES,E.INDEX]);class fi extends Qi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,a,r,l){return!Ji(r)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(r,fi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return pa.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case E.TABLE:return["tableName","schemaName","description"];case E.COLUMNS:case E.INDEXES:return["title"];case E.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case E.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function ma(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function ya(i){if(ta(i.diffs))return i.diffs[qe]}function ba(i){const e=i.diffs[oe];if(e&&(ee(e.data)||X(e.data)))return e}function gi(i,e){return i?(e===F?i.styles.before:i.styles.after).isHeaderVisible:!0}function Da(i){const a=i.diffs.foreignKeyTargetDiffs;if(!(!a||Object.keys(a).length===0))return a}function va(i){const e={};let a=!1;for(const r of di){const l=i.diffs[r];l&&(e[r]=l,a=!0)}return a?e:void 0}function Ha(i){return i.diffs.generatedExpression}function ka(i){return i.diffs.description}function ci(i){const a=i.diffs.enumValueDiffs;if(!(!a||Object.keys(a).length===0))return a}function Va(i){return i.diffs.enumValuesRowColorizingDiff}function xa(i,e){var c;const a=((c=i.value())==null?void 0:c.enumValues)??[],r=ci(i),l=e===F,n=new Set,t=[],d=g=>{const u=r==null?void 0:r[g];if(u)return u;for(const h of Object.values(r??{}))if(h&&J(h.data)&&h.data.afterValue===g)return h};for(const g of a){const u=d(g);if(!u){t.push({literal:g});continue}if(n.has(u))continue;n.add(u);const{data:h}=u;if(ee(h)){!l&&typeof h.afterValue=="string"&&t.push({literal:h.afterValue,diff:u});continue}if(X(h)){l&&typeof h.beforeValue=="string"&&t.push({literal:h.beforeValue,diff:u});continue}if(J(h)){const b=l?typeof h.beforeValue=="string"?h.beforeValue:g:typeof h.afterValue=="string"?h.afterValue:g;t.push({literal:b,diff:u})}}for(const[g,u]of Object.entries(r??{}))!u||n.has(u)||X(u.data)&&l&&(t.push({literal:g,diff:u}),n.add(u));const f=g=>{const u=a.indexOf(g);return u>=0?u:a.length};return t.sort((g,u)=>f(g.literal)-f(u.literal))}function Ca(i){const e={};let a=!1;for(const r of ui){const l=i.diffs[r];l&&(e[r]=l,a=!0)}return a?e:void 0}function qa(i){return i?i.highlightingMode.get(Me.Default)!==me.Invisible:!1}const wa=s.createContext(!1),we=i=>{const{children:e,diffType:a,diffTypeCause:r,hidden:l=!1}=i;return l||!a?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Ki,{variant:a,message:r}),e]})};we.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ne=s.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Ne.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ae=s.memo(i=>{const{left:e,right:a}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:a})]})});Ae.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ke="px-4",Na="",Aa="px-4",Ue="";var O=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(O||{});var C=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(C||{});const Sa=i=>{const{isExpandable:e,expanded:a,setExpanded:r,variant:l}=i,n=s.useCallback(()=>{r==null||r(t=>!t)},[r]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${Ea(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:n,children:a?"Show less":"Show more"})})})},hi=s.memo(i=>{const{value:e,variant:a,layoutSide:r,onClick:l,diff:n,usage:t,highlightingMode:d=me.Default}=i,f=d===me.Default,c=d===me.Invisible,{textFontWeight:g,labelFontWeight:u,labelColor:h,textColor:b,label:v}=i,[p,y]=s.useState(!1),H=s.useCallback((V,T,A)=>{if(A)return null;const I=c?"":T.join(" "),x=`text-value ${l?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),j=`${x} ${I}`.trim(),ie={onClick:l,...b!=null&&b.trim()?{style:{color:b}}:{}};V=p?V:Ta(V);const $=(S,R)=>{const N={...ie,className:R};switch(a){case C.h1:return o.jsx("h1",{...N,children:S});case C.h2:return o.jsx("h2",{...N,children:S});case C.h3:return o.jsx("h3",{...N,children:S});case C.h4:return o.jsx("h4",{...N,children:S});case C.h5:return o.jsx("h5",{...N,children:S});case C.h6:return o.jsx("h6",{...N,children:S});case C.body1:return o.jsx("span",{...N,className:`${R} text-value-body1`.trim(),children:S});case C.body2:return o.jsx("span",{...N,className:`${R} text-value-body2`.trim(),children:S})}};return v?$(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:u?`font-${u}`:"font-bold",style:h!=null&&h.trim()?{color:h}:{},children:`${v}: `}),o.jsx("span",{className:I,children:V})]}),x):$(V,j)},[p,c,v,h,u,l,b,g,a]),M=s.useCallback(V=>{const T=[];let A=V,I=!1;if(n){const{data:x,styles:j}=n;switch(r){case F:T.push(K.highlighter(j.before.textHighlighterColor)),f&&(X(x)&&(A=ae(x.beforeValue)?x.beforeValue:A),J(x)&&(t===O.JsoProperty&&!c&&T.push(K.highlighter($e.Yellow)),A=ae(x.beforeValue)?x.beforeValue:A),Te(x)&&(A=ae(x.beforeKey)?x.beforeKey:A)),ee(x)&&(I=!0);break;case W:T.push(K.highlighter(j.after.textHighlighterColor)),f&&(ee(x)&&(A=ae(x.afterValue)?x.afterValue:A),J(x)&&(t===O.JsoProperty&&!c&&T.push(K.highlighter($e.Yellow)),A=ae(x.afterValue)?x.afterValue:A),Te(x)&&(A=ae(x.afterKey)?x.afterKey:A)),X(x)&&(I=!0);break}}return[A,T,I]},[n,f,c,r,t]),[m,w,k]=M(e);return s.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[H(m,w,k),!k&&o.jsx(Sa,{isExpandable:_a(m),expanded:p,setExpanded:y,variant:a})]}),[H,m,w,k,p,y,a])}),Ie=5,je=300;function _a(i){return i?i.length>je||ri.trim(i.split(`
`)).length>Ie:!1}function Ta(i){if(!i)return;if(i.length>je)return i.slice(0,je)+"...";const e=ri.trim(i.split(`
`));return e.length>Ie?e.slice(0,Ie).join(`
`)+"...":i}function ae(i){return typeof i=="string"}function Ea(i){switch(i){case C.h1:return"text-value-expander--h1";case C.h2:return"text-value-expander--h2";case C.h3:return"text-value-expander--h3";case C.h4:return"text-value-expander--h4";case C.h5:return"text-value-expander--h5";case C.h6:return"text-value-expander--h6";case C.body1:return"text-value-expander--body1";case C.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const U="data-precededby",G="data-ddl-list-last-row";var q=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(q||{}),Y=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Y||{});const Ma={[Y.DdlApiProperty]:Ue},La={[Y.DdlApiProperty]:["min-h-[26px]"]};function Ia(i){const e=Ma[i]??Ke,a=La[i]??[];return[e,...a].join(" ")}const ye=s.memo(i=>{const{value:e,variant:a,layoutSide:r,usage:l=Y.Default}=i,{label:n,labelFontWeight:t,textFontWeight:d,labelColor:f,textColor:c}=i,{[U]:g}=i,{diff:u,descendantDiffs:h,diffsSeverities:b}=i,v=le(),p=l===Y.DdlApiProperty,y=p&&v>0,H=s.useMemo(()=>{if(!u)return[];const{data:w,styles:k}=u;if(!w)return[];const D=[];return r===F&&D.push(K.background(k.before.backgroundColor)),r===W&&D.push(K.background(k.after.backgroundColor)),D},[u,r]),M=s.useMemo(()=>Ia(l),[l]),m=o.jsx(hi,{label:n,labelFontWeight:t,textFontWeight:d,labelColor:f,textColor:c,value:e,variant:a,layoutSide:r,diff:u});return o.jsxs("div",{"data-precededby":g,className:`text-row-content flex h-full ${p?"items-stretch":""} ${M} gap-2 ${H.join(" ")}`,children:[y&&o.jsxs("div",{"data-precededby":g,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(He,{level:v}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:m}):m]})});ye.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=s.memo(i=>{const e=Ve(),{diffsSeverities:a,diffsSeverityPlacement:r=ti.DescriptionRow}=i,l=s.useMemo(()=>a==null?void 0:a[r],[a,r]),n=s.useMemo(()=>l==null?void 0:l.type,[l]),t=s.useMemo(()=>Re(l==null?void 0:l.causedAt),[l]);switch(e){case Ge:return o.jsx(we,{diffType:n,diffTypeCause:t,hidden:!1,children:o.jsx(Ae,{left:o.jsx(ye,{...i,layoutSide:F}),right:o.jsx(ye,{...i,layoutSide:W})})});case Pe:return o.jsx(Ne,{content:o.jsx(ye,{...i,layoutSide:W})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const se="#353C4E",ja=s.createContext(void 0);function Fa(){return s.useContext(ja)}const pi=i=>{const{expandable:e,expanded:a,onClick:r,level:l}=i,n=s.useContext(wa),t=l>0,d=r??(()=>{n&&console.warn("Expander callback is not provided.")});return!e&&!t?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${t?"gap-0.5":""}`,children:[t&&o.jsx(Ui,{short:e}),e&&a!==void 0&&o.jsx(Bi,{onToggle:d,expanded:a})]})};pi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Oa={[O.JsoProperty]:Na,[O.DdlApiSection]:Aa,[O.DdlApiProperty]:Ue},Ra={[O.JsoProperty]:["min-h-[26px]"],[O.DdlApiProperty]:["min-h-[26px]"]};function Pa(i){const e=Oa[i]??Ke,a=Ra[i]??[];return[e,...a].join(" ")}const be=s.memo(i=>{const{expandable:e,expanded:a,onClickExpander:r,value:l,variant:n,layoutSide:t,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:c,usage:g=O.Default,highlightingMode:u=Wi}=i,{diff:h,descendantDiffs:b,diffsSeverities:v}=i,{[U]:p,[G]:y}=i,H=s.useMemo(()=>{switch(g){case O.Default:return u.get(Me.Default);case O.AsyncApiJsoSection:case O.JsoProperty:return u.get(Me.JsoPropertyKey)}},[u,g]),M=le(),m=Fa(),w=s.useMemo(()=>m?t===F?m.beforeLevel:m.afterLevel:M,[t,M,m]),k=s.useMemo(()=>{const I=[];if(!h)return I;const{data:x,styles:j}=h;return x&&(t===F&&I.push(K.background(j.before.backgroundColor)),t===W&&I.push(K.background(j.after.backgroundColor))),I},[h,t]),D=s.useMemo(()=>f?o.jsx(hi,{"data-precededby":p,value:l,variant:n,layoutSide:t,diff:h,usage:g,highlightingMode:H,onClick:r}):null,[f,p,l,n,t,h,g,H,r]),V=g===O.DdlApiProperty,T=s.useMemo(()=>d?o.jsxs(o.Fragment,{children:[(e||w>0)&&o.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(He,{level:w}),o.jsx(pi,{expandable:e,expanded:a,onClick:r,level:w})]}),!V&&D]}):w>0&&o.jsx(He,{level:w}),[d,e,w,p,a,r,D,V]),A=s.useMemo(()=>Pa(g),[g]);return o.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":y?!0:void 0,className:`title-row-content flex ${V?"items-stretch":"items-center"} h-full ${A} gap-2 ${k.join(" ")}`,children:[T,V?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[D,c==null?void 0:c(t)]}):c==null?void 0:c(t)]})});be.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const z=s.memo(i=>{const e=Ve(),{diff:a,diffsSeverities:r,enableHeaderValue:l}=i,n=s.useMemo(()=>r==null?void 0:r["title-row"],[r]),t=s.useMemo(()=>n==null?void 0:n.type,[n]),d=s.useMemo(()=>Re(n==null?void 0:n.causedAt),[n]);switch(e){case Ge:return o.jsx(we,{diffType:t,diffTypeCause:d,hidden:!1,children:o.jsx(Ae,{left:o.jsx(be,{...i,enableHeader:(a==null?void 0:a.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:F}),right:o.jsx(be,{...i,enableHeader:(a==null?void 0:a.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:W})})});case Pe:return o.jsx(Ne,{content:o.jsx(be,{...i,layoutSide:W})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});z.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function Tn(i,e){return s.useMemo(()=>e(i)?mi(i):{},[e,i])}function mi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ga(i,e={}){const{diffKey:a,fallbackToNodeDiff:r=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:n,resolveDiff:t}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:c}=i;if(!d)return{};const g=Object.entries(d),u=v=>{const p=g.find(([y])=>y===String(v));return p==null?void 0:p[1]},h=a?u(a):void 0;return{diff:t?t(d,u):r?d[oe]??h:h,...l?{descendantDiffs:f}:{},diffsSeverities:c,...n?{diffsSeverityPlacement:n}:{}}}function Ka(i){return Zi.includes(i.kind)}function Ua(i){return i.childrenNodes().filter(Ka)}function En(i){return i.kind===E.TABLE}function Ba(i){return i.kind===E.COLUMNS}function yi(i){return i.kind===E.COLUMN}function Be(i){return yi(i)&&i instanceof Ce}function Wa(i){return i.kind===E.INDEXES}function bi(i){return i.kind===E.INDEX}function Di(i){return bi(i)&&i instanceof Ce}function Ya(i){return i.filter(yi)}function $a(i){return i.filter(bi)}const Xa=s.createContext(null);function Ja(){const i=s.useContext(Xa);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const za=({href:i,className:e,children:a})=>o.jsx("a",{href:i,className:e,children:a});za.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Qa(i){return i?!!(B(i.defaultValue)||B(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const vi=s.memo(i=>{const{isVisible:e,value:a,blockClassName:r,valueClassName:l}=i;return e?o.jsx("span",{className:r,children:o.jsx("span",{className:l||void 0,children:`${a}`})}):null});vi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Za(i={}){const{textHighlighterColor:e,borderShadowColor:a,isFontMuted:r}=i;return s.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",K.borderShadow(a)].filter(Boolean).join(" "),valueClassName:[K.highlighter(e),r?K.fontMuted():""].filter(Boolean).join(" ")}),[a,r,e])}const Q=s.memo(i=>{const{isVisible:e,value:a,textHighlighterColor:r,borderShadowColor:l,isFontMuted:n}=i,{blockClassName:t,valueClassName:d}=Za({textHighlighterColor:r,borderShadowColor:l,isFontMuted:n});return o.jsx(vi,{isVisible:e,value:a,blockClassName:t,valueClassName:d})});Q.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const De=s.memo(i=>{var v;const{label:e,subheader:a,layoutSide:r,diff:l,colorizingDiff:n}=i,{[U]:t,[G]:d}=i,f=le(),c=r===F?l==null?void 0:l.styles.before:l==null?void 0:l.styles.after,u=(v=(r===F?n==null?void 0:n.styles.before:n==null?void 0:n.styles.after)??c)==null?void 0:v.backgroundColor,h=s.useMemo(()=>u?[K.background(u)]:[],[u]),b=s.useMemo(()=>{const p=n==null?void 0:n.data;if(p){if(ee(p))return r!==F;if(X(p))return r===F}return(c==null?void 0:c.isContentVisible)??!0},[n,c==null?void 0:c.isContentVisible,r]);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":t,"data-ddl-list-last-row":d?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Ue} min-h-[26px] gap-2 ${h.join(" ")}`,children:[f>0&&o.jsxs("div",{"data-precededby":t,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(He,{level:f}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),b&&o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),a==null?void 0:a(r)]})]})});De.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Z=s.memo(i=>{var l;const e=Ve(),a=(l=i.diffsSeverities)==null?void 0:l[ti.AdditionalInfoRow],r=s.useMemo(()=>Re(a==null?void 0:a.causedAt),[a==null?void 0:a.causedAt]);switch(e){case Ge:return o.jsx(we,{diffType:a==null?void 0:a.type,diffTypeCause:r,hidden:!1,children:o.jsx(Ae,{left:o.jsx(De,{...i,layoutSide:F}),right:o.jsx(De,{...i,layoutSide:W})})});case Pe:return o.jsx(Ne,{content:o.jsx(De,{...i,layoutSide:W})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Z.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function Fe(i,e){return i?(e===F?i.styles.before:i.styles.after).textHighlighterColor:void 0}const en="ux-badge_ddlapi_primary-key",Hi="ux-badge_ddlapi_foreign-key",an="ux-badge_ddlapi_unique",nn="ux-badge_ddlapi_not-null",rn="ux-badge_ddlapi_generated",ki="public",Vi="Default",xi="As",Ci="Values";function qi(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===ki?e:`${i.schemaName}.${e}`}function ke(i){return i.join(", ")}const Oe=s.memo(i=>{const{target:e,hideBadge:a=!1,textHighlighterColor:r}=i,{navigationLinkBuilder:l,navigationLinkComponent:n}=Ja(),t=s.useMemo(()=>l(e.schemaName,e.tableName,e.columnName),[l,e]),d=s.useMemo(()=>["ddlapi-foreign-key-link",K.highlighter(r)].filter(Boolean).join(" "),[r]),f=o.jsx(n,{href:t,className:d,children:qi(e)});return a?f:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Yi,{text:"FK",colorSchema:Hi,inline:!0}),f]})});Oe.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function tn(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function wi(i,e){return!!i||!!e}function We(i,e){return i?e===F?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function on(i,e,a){return wi(i,e)&&We(e,a)}function pe(i){const{columnId:e,label:a,colorSchema:r,flagValue:l,flagDiff:n,layoutMode:t,layoutSide:d}=i;if(!wi(l,n))return null;if(!We(n,d))return tn();const f=qa(n)?n==null?void 0:n.data:void 0;return o.jsx(oi,{label:a,colorSchema:r,layoutMode:t,layoutSide:d,isNodeChanged:!1,isContentChanged:!!f,$changes:f},sn(e,a))}function ln(i){const{columnId:e,target:a,targetDiff:r,layoutMode:l,layoutSide:n}=i,t=dn(e,a),d=Fe(r,n);if(r&&!We(r,n))return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},t);if(!r)return o.jsx(Oe,{target:a},t);const f=r.data;return o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(oi,{label:"FK",colorSchema:Hi,layoutMode:l,layoutSide:n,isNodeChanged:!1,isContentChanged:!0,$changes:f}),o.jsx(Oe,{target:a,hideBadge:!0,textHighlighterColor:d})]},t)}const de=s.memo(i=>{const{columnId:e,value:a,flagDiffs:r,foreignKeyTargetDiffs:l,layoutSide:n}=i,t=Ve(),d=s.useMemo(()=>r??{},[r]),f=s.useMemo(()=>l??{},[l]),c=s.useMemo(()=>pe({columnId:e,label:"PK",colorSchema:en,flagValue:a.isPrimaryKey,flagDiff:d.isPrimaryKey,layoutMode:t,layoutSide:n}),[e,d.isPrimaryKey,t,n,a.isPrimaryKey]),g=s.useMemo(()=>on(a.isPrimaryKey,d.isPrimaryKey,n),[d.isPrimaryKey,n,a.isPrimaryKey]),u=s.useMemo(()=>pe({columnId:e,label:"unique",colorSchema:an,flagValue:a.isUnique,flagDiff:d.isUnique,layoutMode:t,layoutSide:n}),[e,d.isUnique,t,n,a.isUnique]),h=s.useMemo(()=>g?null:pe({columnId:e,label:"not null",colorSchema:nn,flagValue:a.isNotNull,flagDiff:d.isNotNull,layoutMode:t,layoutSide:n}),[e,d.isNotNull,g,t,n,a.isNotNull]),b=s.useMemo(()=>pe({columnId:e,label:"generated",colorSchema:rn,flagValue:a.isGenerated,flagDiff:d.isGenerated,layoutMode:t,layoutSide:n}),[e,d.isGenerated,t,n,a.isGenerated]),v=s.useMemo(()=>{const y=a.foreignKeyTargets??[];return y.length===0?[]:y.map(H=>ln({columnId:e,target:H,targetDiff:f[ma(H)],layoutMode:t,layoutSide:n}))},[e,t,n,f,a.foreignKeyTargets]),p=s.useMemo(()=>[c,u,h,b,...v].filter(Boolean),[v,b,h,c,u]);return p.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p})});function sn(i,e){return`${i}-${e}`}function dn(i,e){return`${i}-FK-${qi(e)}`}de.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ni=s.memo(i=>{const{isVisible:e,value:a,className:r}=i;return e?o.jsx("span",{className:r,children:`${a}`}):null});Ni.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function un(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=s.memo(i=>{const{isVisible:e,value:a,appearance:r}=i,l=un({appearance:r});return o.jsx(Ni,{isVisible:e,value:a,className:l})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ai=i=>{const{node:e,additionalInfoPrecededBy:a=q.DDL_COLUMN_ROW,isLastInList:r=!1,[U]:l}=i,n=ne(),t=e.value(),d=s.useCallback(k=>t?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:k,value:t})]}):o.jsx(o.Fragment,{}),[e.id,t]),f=s.useCallback(k=>{const D=t==null?void 0:t.defaultValue;return B(D)?o.jsx(Q,{isVisible:!0,value:D}):o.jsx(o.Fragment,{})},[t]),c=s.useCallback(k=>{const D=t==null?void 0:t.generatedExpression;return B(D)?o.jsx(Q,{isVisible:!0,value:D}):o.jsx(o.Fragment,{})},[t]),g=s.useCallback(k=>{var D;return(D=t==null?void 0:t.enumValues)!=null&&D.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((V,T)=>o.jsx(Q,{isVisible:!0,value:V},`${V}-${T}`))}):o.jsx(o.Fragment,{})},[t]),u=n===re,h=s.useMemo(()=>u&&!!(t!=null&&t.description),[u,t==null?void 0:t.description]),b=!!(t!=null&&t.enumValues&&t.enumValues.length>0),v=B(t==null?void 0:t.defaultValue),p=B(t==null?void 0:t.generatedExpression),H=r&&!(u&&(b||v||p)),M=r&&b&&!v&&!p,m=r&&v&&!p,w=r&&p;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(z,{"data-precededby":l,[G]:H||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:d,usage:O.DdlApiProperty}),h&&o.jsx(te,{"data-precededby":q.DDL_COLUMN_ROW,value:t.description??"",variant:C.body2,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty}),u&&b&&o.jsx(Z,{"data-precededby":a,[G]:M||void 0,label:Ci,subheader:g}),u&&v&&o.jsx(Z,{"data-precededby":b?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[G]:m||void 0,label:Vi,subheader:f}),u&&p&&o.jsx(Z,{"data-precededby":v||b?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[G]:w||void 0,label:xi,subheader:c})]}):null};Ai.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function fn(i,e){return i?(e===F?i.styles.before:i.styles.after).borderShadowColor:void 0}function gn(i,e){return i?(e===F?i.styles.before:i.styles.after).isFontMuted===!0:!1}function cn(i){if(Be(i))return Da(i)}function hn(i){if(Be(i))return va(i)}function pn(i){if(Di(i))return Ca(i)}const Si=ba;function _i(i){const e=Ga(mi(i),{resolveDiff:()=>ya(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ti=i=>{const{node:e,additionalInfoPrecededBy:a=q.DDL_COLUMN_ROW,isLastInList:r=!1,[U]:l}=i,n=ne(),t=e.value(),d=s.useMemo(()=>Si(e),[e]),f=s.useMemo(()=>_i(e),[e]),c=s.useMemo(()=>hn(e),[e]),g=s.useMemo(()=>cn(e),[e]),u=s.useMemo(()=>ka(e),[e]),h=s.useMemo(()=>Ha(e),[e]),b=s.useMemo(()=>ci(e),[e]),v=s.useMemo(()=>Va(e),[e]),p=s.useCallback(S=>t?gi(d,S)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:S,value:t,flagDiffs:c,foreignKeyTargetDiffs:g})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[c,g,e.id,d,t]),y=s.useCallback(S=>{const R=t==null?void 0:t.defaultValue;return B(R)?o.jsx(Q,{isVisible:!0,value:R}):o.jsx(o.Fragment,{})},[t]),H=s.useCallback(S=>{const R=(()=>{const N=h==null?void 0:h.data;return N?S===F?X(N)||J(N)?N.beforeValue:void 0:ee(N)||J(N)?N.afterValue:void 0:t==null?void 0:t.generatedExpression})();return B(R)?o.jsx(Q,{isVisible:!0,value:R,textHighlighterColor:Fe(h,S)}):o.jsx(o.Fragment,{})},[h,t]),M=s.useCallback(S=>{const R=xa(e,S);return R.length===0?o.jsx(o.Fragment,{}):o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:R.map((N,fe)=>o.jsx(Q,{isVisible:!0,value:N.literal,textHighlighterColor:Fe(N.diff,S),borderShadowColor:fn(N.diff,S),isFontMuted:gn(N.diff,S)},`${N.literal}-${fe}`))})},[e]),m=n===re,w=!!d,k=m&&(!!(t!=null&&t.description)||!!u),D=!!(t!=null&&t.enumValues&&t.enumValues.length>0||b),V=B(t==null?void 0:t.defaultValue),T=B(t==null?void 0:t.generatedExpression)||!!h,A=m&&(D||V||T),I=r&&!k&&!A,x=r&&k&&!A,j=r&&D&&!V&&!T,ie=r&&V&&!T,$=r&&T;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(z,{"data-precededby":l,[G]:I||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:C.body2,subheader:p,usage:O.DdlApiProperty,...f}),k&&o.jsx(te,{"data-precededby":q.DDL_COLUMN_ROW,[G]:x||void 0,value:t.description??"",variant:C.body2,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty,diff:u,diffsSeverities:e.diffsSeverities}),m&&D&&o.jsx(Z,{"data-precededby":a,[G]:j||void 0,label:Ci,subheader:M,colorizingDiff:v,diffsSeverities:b?e.diffsSeverities:void 0}),m&&!w&&V&&o.jsx(Z,{"data-precededby":D?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[G]:ie||void 0,label:Vi,subheader:y}),m&&T&&o.jsx(Z,{"data-precededby":V||D?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[G]:$||void 0,label:xi,subheader:H,diff:h,colorizingDiff:e.diffs[oe],diffsSeverities:e.diffsSeverities})]}):null};Ti.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function mn(i,e){let a=!1;return i.map((r,l)=>{const n=l===i.length-1,t=l===0?q.DDL_SECTION_HEADER:a?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,d=a?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,f={columnNode:r,titlePrecededBy:t,additionalInfoPrecededBy:d,isLastInList:n};return a=e&&Qa(r.value()),f})}const Ei=i=>{const{node:e,[U]:a}=i,r=le(),l=ne(),n=e.value(),t=Ya(e.childrenNodes()),d=l===re,f=s.useMemo(()=>mn(t,d),[t,d]);return t.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(z,{"data-precededby":a,value:(n==null?void 0:n.title)??"Columns",expandable:!1,expanded:!0,variant:C.h2}),o.jsx(li.Provider,{value:r+1,children:f.map(({columnNode:c,titlePrecededBy:g,additionalInfoPrecededBy:u,isLastInList:h})=>Be(c)?o.jsx(Ti,{"data-precededby":g,additionalInfoPrecededBy:u,isLastInList:h,node:c},c.id):o.jsx(Ai,{"data-precededby":g,additionalInfoPrecededBy:u,isLastInList:h,node:c},c.id))})]})};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Mi=i=>{const{schemaName:e,[U]:a}=i;return e===ki?null:o.jsx("div",{"data-precededby":a,className:`ddl-schema-name-block-row flex h-full ${Ke}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Mi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Li=i=>{const{node:e,isLastInList:a=!1,[U]:r}=i,l=ne(),n=e.value(),t=s.useMemo(()=>n?n.indexName?n.indexName:ke(n.partNames):"",[n]),d=s.useCallback(g=>n?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ke(n.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:g,value:n})]}):o.jsx(o.Fragment,{}),[n]),f=s.useMemo(()=>l===re&&!!(n!=null&&n.description),[l,n==null?void 0:n.description]),c=a;return n?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(z,{"data-precededby":r,[G]:c||void 0,value:t,expandable:!1,expanded:!0,variant:C.body2,subheader:n.indexName||n.isUnique?d:void 0,usage:O.DdlApiProperty}),f&&o.jsx(te,{"data-precededby":q.DDL_INDEX_ROW,value:n.description??"",variant:C.body1,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ii=i=>{const{node:e,isLastInList:a=!1,[U]:r}=i,l=ne(),n=e.value(),t=s.useMemo(()=>Si(e),[e]),d=s.useMemo(()=>_i(e),[e]),f=s.useMemo(()=>pn(e),[e]),c=s.useMemo(()=>n?n.indexName?n.indexName:ke(n.partNames):"",[n]),g=s.useCallback(v=>n?gi(t,v)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ke(n.partNames)})`,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:v,value:n,flagDiffs:f})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,t,n]),u=s.useMemo(()=>l===re&&!!(n!=null&&n.description),[l,n==null?void 0:n.description]),h=!!t,b=a;return n?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(z,{"data-precededby":r,[G]:b||void 0,value:c,expandable:!1,expanded:!0,variant:C.body2,subheader:n.indexName||n.isUnique||f!=null&&f.isUnique?g:void 0,usage:O.DdlApiProperty,...d}),u&&!h&&o.jsx(te,{"data-precededby":q.DDL_INDEX_ROW,value:n.description??"",variant:C.body1,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty})]}):null};Ii.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function yn(i){return i.map((e,a)=>({indexNode:e,titlePrecededBy:a===0?q.DDL_SECTION_HEADER:q.DDL_INDEX_ROW,isLastInList:a===i.length-1}))}const ji=i=>{const{node:e,[U]:a}=i,r=le(),l=e.value(),n=$a(e.childrenNodes()),t=s.useMemo(()=>yn(n),[n]);return n.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(z,{"data-precededby":a,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:C.h2}),o.jsx(li.Provider,{value:r+1,children:t.map(({indexNode:d,titlePrecededBy:f,isLastInList:c})=>Di(d)?o.jsx(Ii,{"data-precededby":f,isLastInList:c,node:d},d.id):o.jsx(Li,{"data-precededby":f,isLastInList:c,node:d},d.id))})]})};ji.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const bn=i=>{const{node:e,noHeading:a=!1,[U]:r=q.ROOT}=i,l=ne(),n=e.value(),t=Ua(e),d=t.find(Ba),f=t.find(Wa),c=!!(n!=null&&n.schemaName),g=l===re&&!!(n!=null&&n.description),u=a?q.ROOT:q.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!a&&o.jsx(z,{"data-precededby":r,value:(n==null?void 0:n.tableName)??"",expandable:!1,expanded:!0,variant:C.h1}),c&&o.jsx(Mi,{"data-precededby":u,schemaName:(n==null?void 0:n.schemaName)??""}),g&&o.jsx(te,{"data-precededby":c?q.DDL_TABLE_SCHEMA_ROW:u,value:(n==null?void 0:n.description)??"",variant:C.h4,textFontWeight:"normal",textColor:se}),d&&o.jsx(Ei,{"data-precededby":g?q.DDL_TABLE_DESCRIPTION_ROW:c?q.DDL_TABLE_SCHEMA_ROW:u,node:d}),f&&o.jsx(ji,{"data-precededby":d!=null&&d.childrenNodes().length?q.DDL_COLUMN_ROW:g?q.DDL_TABLE_DESCRIPTION_ROW:c?q.DDL_TABLE_SCHEMA_ROW:u,node:f})]})};bn.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{xe as A,Vn as B,si as C,_n as D,xn as E,we as F,Ae as G,hi as H,C as I,U as J,wa as K,ja as L,Fa as M,mi as N,Ne as O,Ga as P,z as Q,O as R,Ce as S,Xe as T,q as U,te as V,Tn as W,Ke as X,se as Y,qn as a,fi as b,Nn as c,Zi as d,wn as e,En as f,Je as g,Xa as h,L as i,bn as j,za as k,_e as l,ma as m,di as n,ui as o,E as p,ra as q,An as r,qe as s,Cn as t,Sn as u,Se as v,$i as w,Qi as x,Ji as y,Xi as z};
