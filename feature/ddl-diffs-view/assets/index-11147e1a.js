var Fi=Object.defineProperty;var Oi=(i,e,a)=>e in i?Fi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var F=(i,e,a)=>(Oi(i,typeof e!="symbol"?e+"":e,a),a);import{u as ee,v as ie,x as _e,w as ae,R as Te,T as We,U as be,N as le,V as ni,W as A,X as Ri,Y as Pi,K as fe,O as Gi,M as ge,Z as Ui,_ as Ne,$ as W,a0 as U,H as Ye,a1 as O,a2 as ri,a3 as oe,a4 as De,a5 as He,Q as ti,a6 as je,k as Fe,S as Oe,a7 as Ki,a8 as Bi,y as Wi,a9 as $e,aa as B,ab as Yi,ac as li,ad as ne,h as re,f as oi}from"./DiffBadge-a8af3c87.js";import{j as t}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Xe={SIMPLE:"simple",COMPLEX:"complex"},$i={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Xi=Object.values($i);new Set(Xi);class ke{aggregateByDescendantDiffs(e,a,r,o){}static isDiffsRecord(e){if(!E(e))return!1;for(const a of Object.values(e))if(!ke.isDiff(a))return!1;return!0}static isDiff(e){const a=e;return E(a)&&(ee(a)||ie(a)||_e(a)||ae(a))}}function E(i){return si(i)&&!Array.isArray(i)}function si(i){return typeof i=="object"&&i!==null}function Ji(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ae(i){return Array.isArray(i)}function mn(i,e,a){let r=i,o=!1;for(const n of e){if(!E(r)&&!Ae(r))return;if(o){let d;si(r)&&(d=r[n]),!d&&Ae(r)&&a&&(d=r.find(u=>E(u)&&u[a]===n)),r=d,o=!1;continue}r=r[n],Ae(r)&&(o=!0)}return r}function yn(i,e){return Object.keys(i).find(a=>i[a]===e)}function bn(i){if(ke.isDiffsRecord(i))return i}class Dn{constructor(){F(this,"tree",null)}pick(e,a){if(!E(e))return null;const r={};for(const o of a){const n=String(o);if(!(n in e))continue;const l=e[n];Array.isArray(l)?r[n]=[...l]:E(l)?r[n]={...l}:r[n]=l}return this.isPartialOf(r,a)?r:null}isPartialOf(e,a){return Object.keys(e).every(r=>a.includes(r))}}const ce=()=>{},vn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ce,info:ce,warn:ce,error:ce};function zi(i){return i==null||!E(i)&&!Te(i)}function Hn(i){const{source:e,tree:a,supportedNodeKinds:r,createNodeFromRaw:o,createNodeParams:n,createStateForSimpleNode:l,createStateForComplexNode:d,isSimpleNode:u,isComplexNode:f,resolveNodeKey:c,isDisallowedValue:g=zi,shouldStopAfterNodeCreation:m}=i;return[({value:h,state:D,key:T,path:b})=>{if(typeof T=="symbol")return;if(!E(h)&&!Te(h))return{value:h};const{alreadyConvertedValuesCache:k,parent:v,container:C}=D,w=k.get(h);if(!w||!u(w)&&!f(w))return{value:h};if(!v||!u(v))return{value:h};const M="#"+We(b),S=c(T,h),L=a.createCycledClone(w,M,S,v);return C?C.addNestedNode(L):v&&v.addChildNode(L),{done:!0}},({key:h,value:D,path:T,state:b,rules:k})=>!k||!Array.isArray(k.transformers)?void 0:{value:k.transformers.reduce((w,M)=>M(h,w,e,T,b),D)},({key:h,value:D,path:T,rules:b,state:k})=>{if(!b)return{done:!0};if(typeof h=="symbol")return{done:!0};if(g(D))return{done:!0};if(!b.kind||!r.includes(b.kind))return;const{parent:v,container:C}=k,w="#"+We(T),M=c(h,D),{kind:S,complex:L=!1}=b,y=n(D,v,C),N=o(w,M,S,L,y);if(!N)return;C?C.addNestedNode(N):v&&v.addChildNode(N);let j=D;if(m!=null&&m(N,D)){const J=v?v.descendantDiffs:void 0;if(!J||!(h in J))return{done:!0};const G=J[h];if(!G)return{done:!0};const{data:Be}=G;ae(Be)&&(j=Be.beforeValue)}const $=new Map(k.alreadyConvertedValuesCache);(E(D)||Te(D))&&$.set(D,N);let R;return u(N)?R=l(k,N,$):R=d(k,N,$),{value:j,state:R}}]}class Qi{}class Ve{constructor(e="#",a="",r,o,n){F(this,"type");F(this,"parent");F(this,"container");F(this,"newDataLevel");F(this,"_value");F(this,"_meta");F(this,"_childrenNodes",[]);F(this,"_nestedNodes",[]);F(this,"_diffs",{});F(this,"_diffsSummary",new Set);F(this,"_descendantDiffs",{});F(this,"_descendantDiffsSummary",new Set);F(this,"_diffsSeverities",{});this.id=e,this.key=a,this.kind=r,this.isCycle=o;const{type:l=Xe.SIMPLE,value:d=null,parent:u=null,container:f=null,newDataLevel:c=!0,meta:g}=n;this.type=l,this.parent=u,this.container=f,this.newDataLevel=c,this._value=d,this._meta=g}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,a,r){const o=new Ve(e,a,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return o.setChildrenNodes(this._childrenNodes),o.setNestedNodes(this._nestedNodes),o}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,a=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const r of this._nestedNodes){if(r.id===e)return r;if(a&&r.type===Xe.COMPLEX){const o=r.findNestedNode(e,a);if(o)return o}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const a of e)this._diffsSummary.add(a),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const a of e)this._descendantDiffsSummary.add(a),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const _={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Zi=Object.values(_);function Je(i=_.TABLE){return{"/columns":{"/items":{"/*":()=>Je(_.COLUMN)},kind:_.COLUMNS},"/indexes":{"/items":{"/*":()=>Je(_.INDEX)},kind:_.INDEXES},kind:i}}function ea(i){return i.kind===be.Literal&&typeof i.value=="string"}function ia(i){return i.kind===be.RawExpr&&typeof i.expr=="string"}function aa(i){return E(i)&&typeof i.expr=="string"}function na(i){return E(i)&&typeof i.value=="string"}const xe="titleRow",di=["isPrimaryKey","isUnique","isNotNull","isGenerated"],ui=["isUnique"],kn=[le,xe,"columnName","description","generatedExpression",...di],Vn=[le,xe,"indexName",...ui];function ra(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:a}=i;return!E(a)||!("before"in a)||!("after"in a)?!1:ke.isDiff(e)}function ta(i){return ra(i[xe])}function la(i){return E(i)&&i.kind===ni.Domain&&typeof i.type=="string"}function oa(i){return i.kind===A.BoolType&&typeof i.type=="string"}function sa(i){return i.kind===A.IntegerType&&typeof i.type=="string"}function ze(i){return i.kind===A.DecimalType&&typeof i.type=="string"}function Qe(i){return i.kind===A.FloatType&&typeof i.type=="string"}function Ze(i){return i.kind===A.StringType&&typeof i.type=="string"}function ei(i){return i.kind===A.BinaryType&&typeof i.type=="string"}function ii(i){return i.kind===A.TimeType&&typeof i.type=="string"}function da(i){return i.kind===A.JSONType&&typeof i.type=="string"}function ua(i){return i.kind===A.SpatialType&&typeof i.type=="string"}function fa(i){return i.kind===A.UUIDType&&typeof i.type=="string"}function Se(i){return i.kind===A.EnumType&&Array.isArray(i.values)}function ga(i){return i.kind===A.UnsupportedType&&typeof i.type=="string"}function ai(i){return typeof i.type=="string"}function Ee(i){switch(i.kind){case be.Literal:return ea(i)?i.value:i.kind;case be.RawExpr:return ia(i)?i.expr:i.kind;case Ri.NamedDefault:try{return Ee(Pi(i))}catch{return i.kind}default:return aa(i)?i.expr:na(i)?i.value:i.kind}}const ca="Columns",pa="Indexes";class xn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,a){if(this.isDdlApiTableOrientedSpec(e))return e;const r=this.extractRealm(e);if(!r)return this.logger.debug("[DDL API] Unsupported source shape for table key:",a,e),null;const o=this.findTableInRealm(r,a);return o?this.buildTableOrientedSpecFromRealm(r,o,a):(this.logger.debug("[DDL API] Table not found in realm:",a,"available schemas:",r.schemas.map(n=>n.name)),null)}buildTableOrientedSpecFromRealm(e,a,r){const o=fe(a.attrs,ge.Comment);return{tableName:a.name,schemaName:r.schemaName,...o?{description:o.text}:{},columns:{title:ca,items:(a.columns??[]).map(n=>this.buildColumnRowValue(e,a,n,r.schemaName))},indexes:{title:pa,items:(a.indexes??[]).map(n=>this.buildIndexRowValue(n))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,a){var o;const r=e.schemas.find(n=>n.name===a.schemaName);if(r)return(o=r.tables)==null?void 0:o.find(n=>n.name===a.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,a,r,o){var h,D,T;const n=fe(r.attrs,ge.Comment),l=(h=r.attrs)==null?void 0:h.find(b=>b.kind===Gi.Identity),d=fe(r.attrs,ge.GeneratedExpr),u=l!==void 0||d!==void 0,c=this.findForeignKeysForColumn(a,r).map(b=>this.buildForeignKeyTarget(e,b,r,o)).filter(b=>b!==void 0),g=c.length>0,m=this.formatColumnType(r.type),x=(D=r.type)==null?void 0:D.type,H=x&&Se(x)?x.values:void 0,p=this.isPrimaryKeyColumn(a,r);return{columnName:r.name,columnType:m,...H?{enumValues:H}:{},isPrimaryKey:p,isForeignKey:g,...c.length>0?{foreignKeyTargets:c}:{},isGenerated:u,...l?{generatedBy:"identity"}:{},...d&&!l?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(a,r),isNotNull:!p&&((T=r.type)==null?void 0:T.null)===!1,...r.default!==void 0?{defaultValue:Ee(r.default)}:{},...n?{description:n.text}:{}}}buildIndexRowValue(e){const a=(e.parts??[]).slice().sort((o,n)=>o.seqNo-n.seqNo).map(o=>this.formatIndexPartName(o)).filter(o=>o.length>0),r=fe(e.attrs,ge.Comment);return{...e.name?{indexName:e.name}:{},partNames:a,isUnique:e.unique===!0,...r?{description:r.text}:{}}}findSchemaNameForTable(e,a){var r;for(const o of e.schemas)if((r=o.tables)!=null&&r.some(n=>n===a))return o.name}isPrimaryKeyColumn(e,a){var r;return(((r=e.primaryKey)==null?void 0:r.parts)??[]).some(o=>{var n;return((n=o.column)==null?void 0:n.name)===a.name})}isUniqueColumn(e,a){return(e.indexes??[]).some(r=>{var o,n,l;return r.unique===!0&&((o=r.parts)==null?void 0:o.length)===1&&((l=(n=r.parts[0])==null?void 0:n.column)==null?void 0:l.name)===a.name})}isSameForeignKeyColumn(e,a){return e===a||e.name===a.name}findForeignKeysForColumn(e,a){return(e.foreignKeys??[]).filter(r=>{var o;return(o=r.columns)==null?void 0:o.some(n=>this.isSameForeignKeyColumn(n,a))})}buildForeignKeyTarget(e,a,r,o){var f,c;const n=((f=a.columns)==null?void 0:f.findIndex(g=>this.isSameForeignKeyColumn(g,r)))??-1;if(n<0)return;const l=a.refTable,d=(c=a.refColumns)==null?void 0:c[n];if(!l||!d)return;const u=this.resolveForeignKeyTargetSchemaName(e,l,o);if(u)return{schemaName:u,tableName:l.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,a,r){const o=this.findSchemaNameForTable(e,a);if(o)return o;const n=this.findUniqueSchemaNameForTableName(e,a.name);return n||r}findUniqueSchemaNameForTableName(e,a){const r=e.schemas.filter(o=>{var n;return(n=o.tables)==null?void 0:n.some(l=>l.name===a)}).map(o=>o.name);if(r.length===1)return r[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(la(e))return this.formatPgDomainType(e);const a=this.formatSchemaTypeLabel(e);return oa(e)?{kind:A.BoolType,typeName:e.type,label:a}:sa(e)?{kind:A.IntegerType,typeName:e.type,label:a,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ze(e)?{kind:A.DecimalType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Qe(e)?{kind:A.FloatType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ze(e)?{kind:A.StringType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:ei(e)?{kind:A.BinaryType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:ii(e)?{kind:A.TimeType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:da(e)?{kind:A.JSONType,typeName:e.type,label:a}:ua(e)?{kind:A.SpatialType,typeName:e.type,label:a}:fa(e)?{kind:A.UUIDType,typeName:e.type,label:a}:Se(e)?{kind:A.EnumType,label:a,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:ga(e)?{kind:A.UnsupportedType,typeName:e.type,label:a}:{kind:e.kind,label:ai(e)?e.type:e.kind}}formatPgDomainType(e){const a=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ni.Domain,name:e.type,label:e.type,...a?{baseTypeLabel:a}:{}}}formatSchemaTypeLabel(e){let a;return ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):ei(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):Qe(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision):ii(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Se(e)?a=e.type??e.values[0]??"enum":ai(e)?a=e.type:a=e.kind,this.normalizeTypeLabelSpacing(a)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...a){const r=a.filter(o=>o!==void 0);return r.length===0?e:`${e} (${r.join(", ")})`}formatIndexPartName(e){var a;return(a=e.column)!=null&&a.name?e.column.name:e.expr?Ee(e.expr):""}}const ha=new Set([_.TABLE,_.COLUMNS,_.COLUMN,_.INDEXES,_.INDEX]);class fi extends Qi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,a,r,o){return!Ji(r)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:o(r,fi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return ha.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case _.TABLE:return["tableName","schemaName","description"];case _.COLUMNS:case _.INDEXES:return["title"];case _.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case _.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function ma(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function ya(i){if(ta(i.diffs))return i.diffs[xe]}function Re(i){const e=i.diffs[le];if(e&&(ee(e.data)||ie(e.data)))return e}function gi(i,e){return i?(e==="origin"?i.styles.before:i.styles.after).isHeaderVisible:!0}function ba(i){const a=i.diffs.foreignKeyTargetDiffs;if(!(!a||Object.keys(a).length===0))return a}function Da(i){if(Re(i))return;const e={};let a=!1;for(const r of di){const o=i.diffs[r];o&&(e[r]=o,a=!0)}return a?e:void 0}function va(i){return i.diffs.generatedExpression}function Ha(i){if(Re(i))return;const e={};let a=!1;for(const r of ui){const o=i.diffs[r];o&&(e[r]=o,a=!0)}return a?e:void 0}const ka=s.createContext(!1),qe=i=>{const{children:e,diffType:a,diffTypeCause:r,hidden:o=!1}=i;return o||!a?e:t.jsxs("div",{className:"flex flex-row relative w-full",children:[t.jsx(Ui,{variant:a,message:r}),e]})};qe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce=s.memo(i=>{const{content:e}=i;return t.jsx("div",{className:"flex flex-row w-full",children:e})});Ce.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const we=s.memo(i=>{const{left:e,right:a}=i;return t.jsxs("div",{className:"flex flex-row w-full",children:[t.jsx("div",{className:"w-1/2",children:e}),t.jsx("div",{className:"w-1/2",children:a})]})});we.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Pe="px-4",Va="",xa="px-4",Ge="";var I=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(I||{});var V=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(V||{});const qa=i=>{const{isExpandable:e,expanded:a,setExpanded:r,variant:o}=i,n=s.useCallback(()=>{r==null||r(l=>!l)},[r]);return t.jsx(t.Fragment,{children:e&&t.jsx("div",{className:"mt-1",children:t.jsx("a",{className:`text-value-expander ${Na(o)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:n,children:a?"Show less":"Show more"})})})},ci=s.memo(i=>{const{value:e,variant:a,layoutSide:r,onClick:o,diff:n,usage:l,highlightingMode:d=Ne.Default}=i,u=d===Ne.Default,f=d===Ne.Invisible,{textFontWeight:c,labelFontWeight:g,labelColor:m,textColor:x,label:H}=i,[p,h]=s.useState(!1),D=s.useCallback((w,M,S)=>{if(S)return null;const L=f?"":M.join(" "),y=`text-value ${o?"hover:cursor-pointer":""} ${c?`font-${c}`:""}`.trim(),N=`${y} ${L}`.trim(),j={onClick:o,...x!=null&&x.trim()?{style:{color:x}}:{}};w=p?w:wa(w);const $=(R,J)=>{const G={...j,className:J};switch(a){case V.h1:return t.jsx("h1",{...G,children:R});case V.h2:return t.jsx("h2",{...G,children:R});case V.h3:return t.jsx("h3",{...G,children:R});case V.h4:return t.jsx("h4",{...G,children:R});case V.h5:return t.jsx("h5",{...G,children:R});case V.h6:return t.jsx("h6",{...G,children:R});case V.body1:return t.jsx("span",{...G,className:`${J} text-value-body1`.trim(),children:R});case V.body2:return t.jsx("span",{...G,className:`${J} text-value-body2`.trim(),children:R})}};return H?$(t.jsxs(t.Fragment,{children:[t.jsx("span",{className:g?`font-${g}`:"font-bold",style:m!=null&&m.trim()?{color:m}:{},children:`${H}: `}),t.jsx("span",{className:L,children:w})]}),y):$(w,N)},[p,f,H,m,g,o,x,c,a]),T=s.useCallback(w=>{const M=[];let S=w,L=!1;if(n){const{data:y,styles:N}=n;switch(r){case O:M.push(U.highlighter(N.before.textHighlighterColor)),u&&(ie(y)&&(S=Z(y.beforeValue)?y.beforeValue:S),ae(y)&&(l===I.JsoProperty&&!f&&M.push(U.highlighter(Ye.Yellow)),S=Z(y.beforeValue)?y.beforeValue:S),_e(y)&&(S=Z(y.beforeKey)?y.beforeKey:S)),ee(y)&&(L=!0);break;case W:M.push(U.highlighter(N.after.textHighlighterColor)),u&&(ee(y)&&(S=Z(y.afterValue)?y.afterValue:S),ae(y)&&(l===I.JsoProperty&&!f&&M.push(U.highlighter(Ye.Yellow)),S=Z(y.afterValue)?y.afterValue:S),_e(y)&&(S=Z(y.afterKey)?y.afterKey:S)),ie(y)&&(L=!0);break}}return[S,M,L]},[n,u,f,r,l]),[b,k,v]=T(e);return s.useMemo(()=>t.jsxs("div",{className:"flex flex-col items-start gap-1",children:[D(b,k,v),!v&&t.jsx(qa,{isExpandable:Ca(b),expanded:p,setExpanded:h,variant:a})]}),[D,b,k,v,p,h,a])}),Me=5,Le=300;function Ca(i){return i?i.length>Le||ri.trim(i.split(`
`)).length>Me:!1}function wa(i){if(!i)return;if(i.length>Le)return i.slice(0,Le)+"...";const e=ri.trim(i.split(`
`));return e.length>Me?e.slice(0,Me).join(`
`)+"...":i}function Z(i){return typeof i=="string"}function Na(i){switch(i){case V.h1:return"text-value-expander--h1";case V.h2:return"text-value-expander--h2";case V.h3:return"text-value-expander--h3";case V.h4:return"text-value-expander--h4";case V.h5:return"text-value-expander--h5";case V.h6:return"text-value-expander--h6";case V.body1:return"text-value-expander--body1";case V.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const K="data-precededby",P="data-ddl-list-last-row";var q=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(q||{}),Y=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Y||{});const Aa={[Y.DdlApiProperty]:Ge},Sa={[Y.DdlApiProperty]:["min-h-[26px]"]};function _a(i){const e=Aa[i]??Pe,a=Sa[i]??[];return[e,...a].join(" ")}const he=s.memo(i=>{const{value:e,variant:a,layoutSide:r,usage:o=Y.Default}=i,{label:n,labelFontWeight:l,textFontWeight:d,labelColor:u,textColor:f}=i,{[K]:c}=i,{diff:g,descendantDiffs:m,diffsSeverities:x}=i,H=oe(),p=o===Y.DdlApiProperty,h=p&&H>0,D=s.useMemo(()=>{if(!g)return[];const{data:k,styles:v}=g;if(!k)return[];const C=[];return r===O&&C.push(U.background(v.before.backgroundColor)),r===W&&C.push(U.background(v.after.backgroundColor)),C},[g,r]),T=s.useMemo(()=>_a(o),[o]),b=t.jsx(ci,{label:n,labelFontWeight:l,textFontWeight:d,labelColor:u,textColor:f,value:e,variant:a,layoutSide:r,diff:g});return t.jsxs("div",{"data-precededby":c,className:`text-row-content flex h-full ${p?"items-stretch":""} ${T} gap-2 ${D.join(" ")}`,children:[h&&t.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(De,{level:H}),t.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?t.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});he.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=s.memo(i=>{const e=He(),{diffsSeverities:a,diffsSeverityPlacement:r=ti.DescriptionRow}=i,o=s.useMemo(()=>a==null?void 0:a[r],[a,r]),n=s.useMemo(()=>o==null?void 0:o.type,[o]),l=s.useMemo(()=>je(o==null?void 0:o.causedAt),[o]);switch(e){case Oe:return t.jsx(qe,{diffType:n,diffTypeCause:l,hidden:!1,children:t.jsx(we,{left:t.jsx(he,{...i,layoutSide:O}),right:t.jsx(he,{...i,layoutSide:W})})});case Fe:return t.jsx(Ce,{content:t.jsx(he,{...i,layoutSide:W})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const se="#353C4E",Ta=s.createContext(void 0);function Ea(){return s.useContext(Ta)}const pi=i=>{const{expandable:e,expanded:a,onClick:r,level:o}=i,n=s.useContext(ka),l=o>0,d=r??(()=>{n&&console.warn("Expander callback is not provided.")});return!e&&!l?null:t.jsxs("div",{className:`flex flex-row items-center justify-center ${l?"gap-0.5":""}`,children:[l&&t.jsx(Ki,{short:e}),e&&a!==void 0&&t.jsx(Bi,{onToggle:d,expanded:a})]})};pi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ma={[I.JsoProperty]:Va,[I.DdlApiSection]:xa,[I.DdlApiProperty]:Ge},La={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function Ia(i){const e=Ma[i]??Pe,a=La[i]??[];return[e,...a].join(" ")}const me=s.memo(i=>{const{expandable:e,expanded:a,onClickExpander:r,value:o,variant:n,layoutSide:l,enableHeader:d=!0,enableHeaderValue:u=!0,subheader:f,usage:c=I.Default,highlightingMode:g=Wi}=i,{diff:m,descendantDiffs:x,diffsSeverities:H}=i,{[K]:p,[P]:h}=i,D=s.useMemo(()=>{switch(c){case I.Default:return g.get($e.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return g.get($e.JsoPropertyKey)}},[g,c]),T=oe(),b=Ea(),k=s.useMemo(()=>b?l===O?b.beforeLevel:b.afterLevel:T,[l,T,b]),v=s.useMemo(()=>{const L=[];if(!m)return L;const{data:y,styles:N}=m;return y&&(l===O&&L.push(U.background(N.before.backgroundColor)),l===W&&L.push(U.background(N.after.backgroundColor))),L},[m,l]),C=s.useMemo(()=>u?t.jsx(ci,{"data-precededby":p,value:o,variant:n,layoutSide:l,diff:m,usage:c,highlightingMode:D,onClick:r}):null,[u,p,o,n,l,m,c,D,r]),w=c===I.DdlApiProperty,M=s.useMemo(()=>d?t.jsxs(t.Fragment,{children:[(e||k>0)&&t.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(De,{level:k}),t.jsx(pi,{expandable:e,expanded:a,onClick:r,level:k})]}),!w&&C]}):k>0&&t.jsx(De,{level:k}),[d,e,k,p,a,r,C,w]),S=s.useMemo(()=>Ia(c),[c]);return t.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":h?!0:void 0,className:`title-row-content flex ${w?"items-stretch":"items-center"} h-full ${S} gap-2 ${v.join(" ")}`,children:[M,w?t.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[C,f==null?void 0:f(l)]}):f==null?void 0:f(l)]})});me.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const X=s.memo(i=>{const e=He(),{diff:a,diffsSeverities:r,enableHeaderValue:o}=i,n=s.useMemo(()=>r==null?void 0:r["title-row"],[r]),l=s.useMemo(()=>n==null?void 0:n.type,[n]),d=s.useMemo(()=>je(n==null?void 0:n.causedAt),[n]);switch(e){case Oe:return t.jsx(qe,{diffType:l,diffTypeCause:d,hidden:!1,children:t.jsx(we,{left:t.jsx(me,{...i,enableHeader:(a==null?void 0:a.styles.before.isHeaderVisible)??!0,enableHeaderValue:o,layoutSide:O}),right:t.jsx(me,{...i,enableHeader:(a==null?void 0:a.styles.after.isHeaderVisible)??!0,enableHeaderValue:o,layoutSide:W})})});case Fe:return t.jsx(Ce,{content:t.jsx(me,{...i,layoutSide:W})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});X.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function qn(i,e){return s.useMemo(()=>e(i)?hi(i):{},[e,i])}function hi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function ja(i,e={}){const{diffKey:a,fallbackToNodeDiff:r=!0,includeDescendantDiffs:o=!0,diffsSeverityPlacement:n,resolveDiff:l}=e,{nodeDiffs:d,nodeDescendantDiffs:u,nodeDiffsSeverities:f}=i;if(!d)return{};const c=Object.entries(d),g=H=>{const p=c.find(([h])=>h===String(H));return p==null?void 0:p[1]},m=a?g(a):void 0;return{diff:l?l(d,g):r?d[le]??m:m,...o?{descendantDiffs:u}:{},diffsSeverities:f,...n?{diffsSeverityPlacement:n}:{}}}function Fa(i){return Zi.includes(i.kind)}function Oa(i){return i.childrenNodes().filter(Fa)}function Cn(i){return i.kind===_.TABLE}function Ra(i){return i.kind===_.COLUMNS}function mi(i){return i.kind===_.COLUMN}function Ue(i){return mi(i)&&i instanceof Ve}function Pa(i){return i.kind===_.INDEXES}function yi(i){return i.kind===_.INDEX}function bi(i){return yi(i)&&i instanceof Ve}function Ga(i){return i.filter(mi)}function Ua(i){return i.filter(yi)}const Ka=s.createContext(null);function Ba(){const i=s.useContext(Ka);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Wa=({href:i,className:e,children:a})=>t.jsx("a",{href:i,className:e,children:a});Wa.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Ya(i){return i?!!(B(i.defaultValue)||B(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Di=s.memo(i=>{const{isVisible:e,value:a,blockClassName:r,valueClassName:o}=i;return e?t.jsx("span",{className:r,children:t.jsx("span",{className:o||void 0,children:`${a}`})}):null});Di.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function $a(i){return s.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block"].join(" "),valueClassName:U.highlighter(i)}),[i])}const z=s.memo(i=>{const{isVisible:e,value:a,textHighlighterColor:r}=i,{blockClassName:o,valueClassName:n}=$a(r);return t.jsx(Di,{isVisible:e,value:a,blockClassName:o,valueClassName:n})});z.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};const ye=s.memo(i=>{var H;const{label:e,subheader:a,layoutSide:r,diff:o,colorizingDiff:n}=i,{[K]:l,[P]:d}=i,u=oe(),f=r===O?o==null?void 0:o.styles.before:o==null?void 0:o.styles.after,g=(H=(r===O?n==null?void 0:n.styles.before:n==null?void 0:n.styles.after)??f)==null?void 0:H.backgroundColor,m=s.useMemo(()=>g?[U.background(g)]:[],[g]),x=s.useMemo(()=>{const p=n==null?void 0:n.data;if(p){if(ee(p))return r!==O;if(ie(p))return r===O}return(f==null?void 0:f.isContentVisible)??!0},[n,f==null?void 0:f.isContentVisible,r]);return t.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":l,"data-ddl-list-last-row":d?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Ge} min-h-[26px] gap-2 ${m.join(" ")}`,children:[u>0&&t.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(De,{level:u}),t.jsx("div",{className:"w-4","aria-hidden":"true"})]}),x&&t.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[t.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),a==null?void 0:a(r)]})]})});ye.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Q=s.memo(i=>{var o;const e=He(),a=(o=i.diffsSeverities)==null?void 0:o[ti.AdditionalInfoRow],r=s.useMemo(()=>je(a==null?void 0:a.causedAt),[a==null?void 0:a.causedAt]);switch(e){case Oe:return t.jsx(qe,{diffType:a==null?void 0:a.type,diffTypeCause:r,hidden:!1,children:t.jsx(we,{left:t.jsx(ye,{...i,layoutSide:O}),right:t.jsx(ye,{...i,layoutSide:W})})});case Fe:return t.jsx(Ce,{content:t.jsx(ye,{...i,layoutSide:W})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Q.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function vi(i,e){return i?(e===O?i.styles.before:i.styles.after).textHighlighterColor:void 0}const Xa="ux-badge_ddlapi_primary-key",Hi="ux-badge_ddlapi_foreign-key",Ja="ux-badge_ddlapi_unique",za="ux-badge_ddlapi_not-null",Qa="ux-badge_ddlapi_generated",ki="public",Vi="Default",xi="As",qi="Values";function Ci(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===ki?e:`${i.schemaName}.${e}`}function ve(i){return i.join(", ")}const Ie=s.memo(i=>{const{target:e,hideBadge:a=!1,textHighlighterColor:r}=i,{navigationLinkBuilder:o,navigationLinkComponent:n}=Ba(),l=s.useMemo(()=>o(e.schemaName,e.tableName,e.columnName),[o,e]),d=s.useMemo(()=>["ddlapi-foreign-key-link",U.highlighter(r)].filter(Boolean).join(" "),[r]),u=t.jsx(n,{href:l,className:d,children:Ci(e)});return a?u:t.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[t.jsx(Yi,{text:"FK",colorSchema:Hi,inline:!0}),u]})});Ie.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Za(){return t.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function wi(i,e){return!!i||!!e}function Ke(i,e){return i?e===O?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function en(i,e,a){return wi(i,e)&&Ke(e,a)}function pe(i){const{columnId:e,label:a,colorSchema:r,flagValue:o,flagDiff:n,layoutMode:l,layoutSide:d}=i;if(!wi(o,n))return null;if(!Ke(n,d))return Za();const u=n==null?void 0:n.data;return t.jsx(li,{label:a,colorSchema:r,layoutMode:l,layoutSide:d,isNodeChanged:!1,isContentChanged:!!u,$changes:u},nn(e,a))}function an(i){const{columnId:e,target:a,targetDiff:r,layoutMode:o,layoutSide:n}=i,l=rn(e,a),d=vi(r,n);if(r&&!Ke(r,n))return t.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},l);if(!r)return t.jsx(Ie,{target:a},l);const u=r.data;return t.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[t.jsx(li,{label:"FK",colorSchema:Hi,layoutMode:o,layoutSide:n,isNodeChanged:!1,isContentChanged:!0,$changes:u}),t.jsx(Ie,{target:a,hideBadge:!0,textHighlighterColor:d})]},l)}const de=s.memo(i=>{const{columnId:e,value:a,flagDiffs:r,foreignKeyTargetDiffs:o,layoutSide:n}=i,l=He(),d=s.useMemo(()=>r??{},[r]),u=s.useMemo(()=>o??{},[o]),f=s.useMemo(()=>pe({columnId:e,label:"PK",colorSchema:Xa,flagValue:a.isPrimaryKey,flagDiff:d.isPrimaryKey,layoutMode:l,layoutSide:n}),[e,d.isPrimaryKey,l,n,a.isPrimaryKey]),c=s.useMemo(()=>en(a.isPrimaryKey,d.isPrimaryKey,n),[d.isPrimaryKey,n,a.isPrimaryKey]),g=s.useMemo(()=>pe({columnId:e,label:"unique",colorSchema:Ja,flagValue:a.isUnique,flagDiff:d.isUnique,layoutMode:l,layoutSide:n}),[e,d.isUnique,l,n,a.isUnique]),m=s.useMemo(()=>c?null:pe({columnId:e,label:"not null",colorSchema:za,flagValue:a.isNotNull,flagDiff:d.isNotNull,layoutMode:l,layoutSide:n}),[e,d.isNotNull,c,l,n,a.isNotNull]),x=s.useMemo(()=>pe({columnId:e,label:"generated",colorSchema:Qa,flagValue:a.isGenerated,flagDiff:d.isGenerated,layoutMode:l,layoutSide:n}),[e,d.isGenerated,l,n,a.isGenerated]),H=s.useMemo(()=>{const h=a.foreignKeyTargets??[];return h.length===0?[]:h.map(D=>an({columnId:e,target:D,targetDiff:u[ma(D)],layoutMode:l,layoutSide:n}))},[e,l,n,u,a.foreignKeyTargets]),p=s.useMemo(()=>[f,g,m,x,...H].filter(Boolean),[H,x,m,f,g]);return p.length===0?null:t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p})});function nn(i,e){return`${i}-${e}`}function rn(i,e){return`${i}-FK-${Ci(e)}`}de.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ni=s.memo(i=>{const{isVisible:e,value:a,className:r}=i;return e?t.jsx("span",{className:r,children:`${a}`}):null});Ni.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function tn(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=s.memo(i=>{const{isVisible:e,value:a,appearance:r}=i,o=tn({appearance:r});return t.jsx(Ni,{isVisible:e,value:a,className:o})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ai=i=>{const{node:e,additionalInfoPrecededBy:a=q.DDL_COLUMN_ROW,isLastInList:r=!1,[K]:o}=i,n=ne(),l=e.value(),d=s.useCallback(v=>l?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(ue,{isVisible:!0,value:l.columnType.label,appearance:"text"}),t.jsx(de,{columnId:e.id,layoutSide:v,value:l})]}):t.jsx(t.Fragment,{}),[e.id,l]),u=s.useCallback(v=>{const C=l==null?void 0:l.defaultValue;return B(C)?t.jsx(z,{isVisible:!0,value:C}):t.jsx(t.Fragment,{})},[l]),f=s.useCallback(v=>{const C=l==null?void 0:l.generatedExpression;return B(C)?t.jsx(z,{isVisible:!0,value:C}):t.jsx(t.Fragment,{})},[l]),c=s.useCallback(v=>{var C;return(C=l==null?void 0:l.enumValues)!=null&&C.length?t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:l.enumValues.map((w,M)=>t.jsx(z,{isVisible:!0,value:w},`${w}-${M}`))}):t.jsx(t.Fragment,{})},[l]),g=n===re,m=s.useMemo(()=>g&&!!(l!=null&&l.description),[g,l==null?void 0:l.description]),x=!!(l!=null&&l.enumValues&&l.enumValues.length>0),H=B(l==null?void 0:l.defaultValue),p=B(l==null?void 0:l.generatedExpression),D=r&&!(g&&(x||H||p)),T=r&&x&&!H&&!p,b=r&&H&&!p,k=r&&p;return l?t.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(X,{"data-precededby":o,[P]:D||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:d,usage:I.DdlApiProperty}),m&&t.jsx(te,{"data-precededby":q.DDL_COLUMN_ROW,value:l.description??"",variant:V.body2,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty}),g&&x&&t.jsx(Q,{"data-precededby":a,[P]:T||void 0,label:qi,subheader:c}),g&&H&&t.jsx(Q,{"data-precededby":x?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:b||void 0,label:Vi,subheader:u}),g&&p&&t.jsx(Q,{"data-precededby":H||x?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:k||void 0,label:xi,subheader:f})]}):null};Ai.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ln(i){if(Ue(i))return ba(i)}function on(i){if(Ue(i))return Da(i)}function sn(i){if(bi(i))return Ha(i)}const Si=Re;function _i(i){const e=ja(hi(i),{resolveDiff:()=>ya(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ti=i=>{const{node:e,additionalInfoPrecededBy:a=q.DDL_COLUMN_ROW,isLastInList:r=!1,[K]:o}=i,n=ne(),l=e.value(),d=s.useMemo(()=>Si(e),[e]),u=s.useMemo(()=>_i(e),[e]),f=s.useMemo(()=>on(e),[e]),c=s.useMemo(()=>ln(e),[e]),g=s.useMemo(()=>va(e),[e]),m=s.useCallback(y=>l?gi(d,y)?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(ue,{isVisible:!0,value:l.columnType.label,appearance:"text"}),t.jsx(de,{columnId:e.id,layoutSide:y,value:l,flagDiffs:f,foreignKeyTargetDiffs:c})]}):t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{}),[f,c,e.id,d,l]),x=s.useCallback(y=>{const N=l==null?void 0:l.defaultValue;return B(N)?t.jsx(z,{isVisible:!0,value:N}):t.jsx(t.Fragment,{})},[l]),H=s.useCallback(y=>{const N=(()=>{const j=g==null?void 0:g.data;return j?y===O?ie(j)||ae(j)?j.beforeValue:void 0:ee(j)||ae(j)?j.afterValue:void 0:l==null?void 0:l.generatedExpression})();return B(N)?t.jsx(z,{isVisible:!0,value:N,textHighlighterColor:vi(g,y)}):t.jsx(t.Fragment,{})},[g,l]),p=s.useCallback(y=>{var N;return(N=l==null?void 0:l.enumValues)!=null&&N.length?t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:l.enumValues.map((j,$)=>t.jsx(z,{isVisible:!0,value:j},`${j}-${$}`))}):t.jsx(t.Fragment,{})},[l]),h=n===re,D=!!d,T=s.useMemo(()=>h&&!!(l!=null&&l.description),[h,l==null?void 0:l.description]),b=!!(l!=null&&l.enumValues&&l.enumValues.length>0),k=B(l==null?void 0:l.defaultValue),v=B(l==null?void 0:l.generatedExpression)||!!g,w=r&&!(h&&(b||k||v)),M=r&&b&&!k&&!v,S=r&&k&&!v,L=r&&v;return l?t.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(X,{"data-precededby":o,[P]:w||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:m,usage:I.DdlApiProperty,...u}),T&&!D&&t.jsx(te,{"data-precededby":q.DDL_COLUMN_ROW,value:l.description??"",variant:V.body2,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty}),h&&!D&&b&&t.jsx(Q,{"data-precededby":a,[P]:M||void 0,label:qi,subheader:p}),h&&!D&&k&&t.jsx(Q,{"data-precededby":b?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:S||void 0,label:Vi,subheader:x}),h&&v&&t.jsx(Q,{"data-precededby":k||b?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:L||void 0,label:xi,subheader:H,diff:g,colorizingDiff:e.diffs[le],diffsSeverities:e.diffsSeverities})]}):null};Ti.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function dn(i,e){let a=!1;return i.map((r,o)=>{const n=o===i.length-1,l=o===0?q.DDL_SECTION_HEADER:a?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,d=a?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,u={columnNode:r,titlePrecededBy:l,additionalInfoPrecededBy:d,isLastInList:n};return a=e&&Ya(r.value()),u})}const Ei=i=>{const{node:e,[K]:a}=i,r=oe(),o=ne(),n=e.value(),l=Ga(e.childrenNodes()),d=o===re,u=s.useMemo(()=>dn(l,d),[l,d]);return l.length===0?null:t.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[t.jsx(X,{"data-precededby":a,value:(n==null?void 0:n.title)??"Columns",expandable:!1,expanded:!0,variant:V.h2}),t.jsx(oi.Provider,{value:r+1,children:u.map(({columnNode:f,titlePrecededBy:c,additionalInfoPrecededBy:g,isLastInList:m})=>Ue(f)?t.jsx(Ti,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:m,node:f},f.id):t.jsx(Ai,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:m,node:f},f.id))})]})};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Mi=i=>{const{schemaName:e,[K]:a}=i;return e===ki?null:t.jsx("div",{"data-precededby":a,className:`ddl-schema-name-block-row flex h-full ${Pe}`,children:t.jsx("span",{className:"ddl-schema-name-block",children:e})})};Mi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Li=i=>{const{node:e,isLastInList:a=!1,[K]:r}=i,o=ne(),n=e.value(),l=s.useMemo(()=>n?n.indexName?n.indexName:ve(n.partNames):"",[n]),d=s.useCallback(c=>n?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&t.jsx(ue,{isVisible:!0,value:`(${ve(n.partNames)})`,appearance:"text"}),t.jsx(de,{layoutSide:c,value:n})]}):t.jsx(t.Fragment,{}),[n]),u=s.useMemo(()=>o===re&&!!(n!=null&&n.description),[o,n==null?void 0:n.description]),f=a;return n?t.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(X,{"data-precededby":r,[P]:f||void 0,value:l,expandable:!1,expanded:!0,variant:V.body2,subheader:n.indexName||n.isUnique?d:void 0,usage:I.DdlApiProperty}),u&&t.jsx(te,{"data-precededby":q.DDL_INDEX_ROW,value:n.description??"",variant:V.body1,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ii=i=>{const{node:e,isLastInList:a=!1,[K]:r}=i,o=ne(),n=e.value(),l=s.useMemo(()=>Si(e),[e]),d=s.useMemo(()=>_i(e),[e]),u=s.useMemo(()=>sn(e),[e]),f=s.useMemo(()=>n?n.indexName?n.indexName:ve(n.partNames):"",[n]),c=s.useCallback(H=>n?gi(l,H)?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&t.jsx(ue,{isVisible:!0,value:`(${ve(n.partNames)})`,appearance:"text"}),t.jsx(de,{layoutSide:H,value:n,flagDiffs:u})]}):t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{}),[u,l,n]),g=s.useMemo(()=>o===re&&!!(n!=null&&n.description),[o,n==null?void 0:n.description]),m=!!l,x=a;return n?t.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(X,{"data-precededby":r,[P]:x||void 0,value:f,expandable:!1,expanded:!0,variant:V.body2,subheader:n.indexName||n.isUnique||u!=null&&u.isUnique?c:void 0,usage:I.DdlApiProperty,...d}),g&&!m&&t.jsx(te,{"data-precededby":q.DDL_INDEX_ROW,value:n.description??"",variant:V.body1,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty})]}):null};Ii.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function un(i){return i.map((e,a)=>({indexNode:e,titlePrecededBy:a===0?q.DDL_SECTION_HEADER:q.DDL_INDEX_ROW,isLastInList:a===i.length-1}))}const ji=i=>{const{node:e,[K]:a}=i,r=oe(),o=e.value(),n=Ua(e.childrenNodes()),l=s.useMemo(()=>un(n),[n]);return n.length===0?null:t.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[t.jsx(X,{"data-precededby":a,value:(o==null?void 0:o.title)??"Indexes",expandable:!1,expanded:!0,variant:V.h2}),t.jsx(oi.Provider,{value:r+1,children:l.map(({indexNode:d,titlePrecededBy:u,isLastInList:f})=>bi(d)?t.jsx(Ii,{"data-precededby":u,isLastInList:f,node:d},d.id):t.jsx(Li,{"data-precededby":u,isLastInList:f,node:d},d.id))})]})};ji.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const fn=i=>{const{node:e,noHeading:a=!1,[K]:r=q.ROOT}=i,o=ne(),n=e.value(),l=Oa(e),d=l.find(Ra),u=l.find(Pa),f=!!(n!=null&&n.schemaName),c=o===re&&!!(n!=null&&n.description),g=a?q.ROOT:q.DDL_TABLE_HEADER_ROW;return t.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!a&&t.jsx(X,{"data-precededby":r,value:(n==null?void 0:n.tableName)??"",expandable:!1,expanded:!0,variant:V.h1}),f&&t.jsx(Mi,{"data-precededby":g,schemaName:(n==null?void 0:n.schemaName)??""}),c&&t.jsx(te,{"data-precededby":f?q.DDL_TABLE_SCHEMA_ROW:g,value:(n==null?void 0:n.description)??"",variant:V.h4,textFontWeight:"normal",textColor:se}),d&&t.jsx(Ei,{"data-precededby":c?q.DDL_TABLE_DESCRIPTION_ROW:f?q.DDL_TABLE_SCHEMA_ROW:g,node:d}),u&&t.jsx(ji,{"data-precededby":d!=null&&d.childrenNodes().length?q.DDL_COLUMN_ROW:c?q.DDL_TABLE_DESCRIPTION_ROW:f?q.DDL_TABLE_SCHEMA_ROW:g,node:u})]})};fn.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{ke as A,si as B,yn as C,xn as D,qe as E,we as F,ci as G,V as H,K as I,ka as J,Ta as K,Ea as L,hi as M,ja as N,Ce as O,X as P,I as Q,q as R,Ve as S,Xe as T,te as U,qn as V,se as W,Pe as X,Dn as a,fi as b,Hn as c,Zi as d,vn as e,Cn as f,Je as g,Ka as h,E as i,fn as j,Wa as k,ma as l,di as m,ui as n,_ as o,ra as p,kn as q,xe as r,Vn as s,bn as t,Ae as u,$i as v,Qi as w,Ji as x,Xi as y,mn as z};
