var ji=Object.defineProperty;var Fi=(i,e,a)=>e in i?ji(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var F=(i,e,a)=>(Fi(i,typeof e!="symbol"?e+"":e,a),a);import{u as ee,v as ie,x as _e,w as ae,R as Te,T as We,U as be,N as oe,V as ni,W as A,X as Oi,Y as Ri,K as fe,O as Pi,M as ge,Z as Gi,_ as Ne,$ as W,a0 as U,H as Ye,a1 as O,a2 as ri,a3 as le,a4 as De,a5 as He,Q as ti,a6 as je,k as Fe,S as Oe,a7 as Ki,a8 as Ui,y as Bi,a9 as $e,aa as B,ab as Wi,ac as oi,ad as ne,h as re,f as li}from"./DiffBadge-a8af3c87.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Xe={SIMPLE:"simple",COMPLEX:"complex"},Yi={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},$i=Object.values(Yi);new Set($i);class ke{aggregateByDescendantDiffs(e,a,r,l){}static isDiffsRecord(e){if(!E(e))return!1;for(const a of Object.values(e))if(!ke.isDiff(a))return!1;return!0}static isDiff(e){const a=e;return E(a)&&(ee(a)||ie(a)||_e(a)||ae(a))}}function E(i){return si(i)&&!Array.isArray(i)}function si(i){return typeof i=="object"&&i!==null}function Xi(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ae(i){return Array.isArray(i)}function mn(i,e,a){let r=i,l=!1;for(const n of e){if(!E(r)&&!Ae(r))return;if(l){let d;si(r)&&(d=r[n]),!d&&Ae(r)&&a&&(d=r.find(u=>E(u)&&u[a]===n)),r=d,l=!1;continue}r=r[n],Ae(r)&&(l=!0)}return r}function yn(i,e){return Object.keys(i).find(a=>i[a]===e)}function bn(i){if(ke.isDiffsRecord(i))return i}class Dn{constructor(){F(this,"tree",null)}pick(e,a){if(!E(e))return null;const r={};for(const l of a){const n=String(l);if(!(n in e))continue;const t=e[n];Array.isArray(t)?r[n]=[...t]:E(t)?r[n]={...t}:r[n]=t}return this.isPartialOf(r,a)?r:null}isPartialOf(e,a){return Object.keys(e).every(r=>a.includes(r))}}const ce=()=>{},vn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ce,info:ce,warn:ce,error:ce};function Ji(i){return i==null||!E(i)&&!Te(i)}function Hn(i){const{source:e,tree:a,supportedNodeKinds:r,createNodeFromRaw:l,createNodeParams:n,createStateForSimpleNode:t,createStateForComplexNode:d,isSimpleNode:u,isComplexNode:f,resolveNodeKey:c,isDisallowedValue:g=Ji,shouldStopAfterNodeCreation:m}=i;return[({value:h,state:D,key:T,path:y})=>{if(typeof T=="symbol")return;if(!E(h)&&!Te(h))return{value:h};const{alreadyConvertedValuesCache:k,parent:v,container:C}=D,w=k.get(h);if(!w||!u(w)&&!f(w))return{value:h};if(!v||!u(v))return{value:h};const M="#"+We(y),S=c(T,h),L=a.createCycledClone(w,M,S,v);return C?C.addNestedNode(L):v&&v.addChildNode(L),{done:!0}},({key:h,value:D,path:T,state:y,rules:k})=>!k||!Array.isArray(k.transformers)?void 0:{value:k.transformers.reduce((w,M)=>M(h,w,e,T,y),D)},({key:h,value:D,path:T,rules:y,state:k})=>{if(!y)return{done:!0};if(typeof h=="symbol")return{done:!0};if(g(D))return{done:!0};if(!y.kind||!r.includes(y.kind))return;const{parent:v,container:C}=k,w="#"+We(T),M=c(h,D),{kind:S,complex:L=!1}=y,b=n(D,v,C),N=l(w,M,S,L,b);if(!N)return;C?C.addNestedNode(N):v&&v.addChildNode(N);let j=D;if(m!=null&&m(N,D)){const J=v?v.descendantDiffs:void 0;if(!J||!(h in J))return{done:!0};const G=J[h];if(!G)return{done:!0};const{data:Be}=G;ae(Be)&&(j=Be.beforeValue)}const $=new Map(k.alreadyConvertedValuesCache);(E(D)||Te(D))&&$.set(D,N);let R;return u(N)?R=t(k,N,$):R=d(k,N,$),{value:j,state:R}}]}class zi{}class Ve{constructor(e="#",a="",r,l,n){F(this,"type");F(this,"parent");F(this,"container");F(this,"newDataLevel");F(this,"_value");F(this,"_meta");F(this,"_childrenNodes",[]);F(this,"_nestedNodes",[]);F(this,"_diffs",{});F(this,"_diffsSummary",new Set);F(this,"_descendantDiffs",{});F(this,"_descendantDiffsSummary",new Set);F(this,"_diffsSeverities",{});this.id=e,this.key=a,this.kind=r,this.isCycle=l;const{type:t=Xe.SIMPLE,value:d=null,parent:u=null,container:f=null,newDataLevel:c=!0,meta:g}=n;this.type=t,this.parent=u,this.container=f,this.newDataLevel=c,this._value=d,this._meta=g}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,a,r){const l=new Ve(e,a,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,a=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const r of this._nestedNodes){if(r.id===e)return r;if(a&&r.type===Xe.COMPLEX){const l=r.findNestedNode(e,a);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const a of e)this._diffsSummary.add(a),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const a of e)this._descendantDiffsSummary.add(a),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const _={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Qi=Object.values(_);function Je(i=_.TABLE){return{"/columns":{"/items":{"/*":()=>Je(_.COLUMN)},kind:_.COLUMNS},"/indexes":{"/items":{"/*":()=>Je(_.INDEX)},kind:_.INDEXES},kind:i}}function Zi(i){return i.kind===be.Literal&&typeof i.value=="string"}function ea(i){return i.kind===be.RawExpr&&typeof i.expr=="string"}function ia(i){return E(i)&&typeof i.expr=="string"}function aa(i){return E(i)&&typeof i.value=="string"}const xe="titleRow",di=["isPrimaryKey","isUnique","isNotNull","isGenerated"],ui=["isUnique"],kn=[oe,xe,"columnName","description","generatedExpression",...di],Vn=[oe,xe,"indexName",...ui];function na(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:a}=i;return!E(a)||!("before"in a)||!("after"in a)?!1:ke.isDiff(e)}function ra(i){return na(i[xe])}function ta(i){return E(i)&&i.kind===ni.Domain&&typeof i.type=="string"}function oa(i){return i.kind===A.BoolType&&typeof i.type=="string"}function la(i){return i.kind===A.IntegerType&&typeof i.type=="string"}function ze(i){return i.kind===A.DecimalType&&typeof i.type=="string"}function Qe(i){return i.kind===A.FloatType&&typeof i.type=="string"}function Ze(i){return i.kind===A.StringType&&typeof i.type=="string"}function ei(i){return i.kind===A.BinaryType&&typeof i.type=="string"}function ii(i){return i.kind===A.TimeType&&typeof i.type=="string"}function sa(i){return i.kind===A.JSONType&&typeof i.type=="string"}function da(i){return i.kind===A.SpatialType&&typeof i.type=="string"}function ua(i){return i.kind===A.UUIDType&&typeof i.type=="string"}function Se(i){return i.kind===A.EnumType&&Array.isArray(i.values)}function fa(i){return i.kind===A.UnsupportedType&&typeof i.type=="string"}function ai(i){return typeof i.type=="string"}function Ee(i){switch(i.kind){case be.Literal:return Zi(i)?i.value:i.kind;case be.RawExpr:return ea(i)?i.expr:i.kind;case Oi.NamedDefault:try{return Ee(Ri(i))}catch{return i.kind}default:return ia(i)?i.expr:aa(i)?i.value:i.kind}}const ga="Columns",ca="Indexes";class xn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,a){if(this.isDdlApiTableOrientedSpec(e))return e;const r=this.extractRealm(e);if(!r)return this.logger.debug("[DDL API] Unsupported source shape for table key:",a,e),null;const l=this.findTableInRealm(r,a);return l?this.buildTableOrientedSpecFromRealm(r,l,a):(this.logger.debug("[DDL API] Table not found in realm:",a,"available schemas:",r.schemas.map(n=>n.name)),null)}buildTableOrientedSpecFromRealm(e,a,r){const l=fe(a.attrs,ge.Comment);return{tableName:a.name,schemaName:r.schemaName,...l?{description:l.text}:{},columns:{title:ga,items:(a.columns??[]).map(n=>this.buildColumnRowValue(e,a,n,r.schemaName))},indexes:{title:ca,items:(a.indexes??[]).map(n=>this.buildIndexRowValue(n))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,a){var l;const r=e.schemas.find(n=>n.name===a.schemaName);if(r)return(l=r.tables)==null?void 0:l.find(n=>n.name===a.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,a,r,l){var h,D,T;const n=fe(r.attrs,ge.Comment),t=(h=r.attrs)==null?void 0:h.find(y=>y.kind===Pi.Identity),d=fe(r.attrs,ge.GeneratedExpr),u=t!==void 0||d!==void 0,c=this.findForeignKeysForColumn(a,r).map(y=>this.buildForeignKeyTarget(e,y,r,l)).filter(y=>y!==void 0),g=c.length>0,m=this.formatColumnType(r.type),x=(D=r.type)==null?void 0:D.type,H=x&&Se(x)?x.values:void 0,p=this.isPrimaryKeyColumn(a,r);return{columnName:r.name,columnType:m,...H?{enumValues:H}:{},isPrimaryKey:p,isForeignKey:g,...c.length>0?{foreignKeyTargets:c}:{},isGenerated:u,...t?{generatedBy:"identity"}:{},...d&&!t?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(a,r),isNotNull:!p&&((T=r.type)==null?void 0:T.null)===!1,...r.default!==void 0?{defaultValue:Ee(r.default)}:{},...n?{description:n.text}:{}}}buildIndexRowValue(e){const a=(e.parts??[]).slice().sort((l,n)=>l.seqNo-n.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),r=fe(e.attrs,ge.Comment);return{...e.name?{indexName:e.name}:{},partNames:a,isUnique:e.unique===!0,...r?{description:r.text}:{}}}findSchemaNameForTable(e,a){var r;for(const l of e.schemas)if((r=l.tables)!=null&&r.some(n=>n===a))return l.name}isPrimaryKeyColumn(e,a){var r;return(((r=e.primaryKey)==null?void 0:r.parts)??[]).some(l=>{var n;return((n=l.column)==null?void 0:n.name)===a.name})}isUniqueColumn(e,a){return(e.indexes??[]).some(r=>{var l,n,t;return r.unique===!0&&((l=r.parts)==null?void 0:l.length)===1&&((t=(n=r.parts[0])==null?void 0:n.column)==null?void 0:t.name)===a.name})}isSameForeignKeyColumn(e,a){return e===a||e.name===a.name}findForeignKeysForColumn(e,a){return(e.foreignKeys??[]).filter(r=>{var l;return(l=r.columns)==null?void 0:l.some(n=>this.isSameForeignKeyColumn(n,a))})}buildForeignKeyTarget(e,a,r,l){var f,c;const n=((f=a.columns)==null?void 0:f.findIndex(g=>this.isSameForeignKeyColumn(g,r)))??-1;if(n<0)return;const t=a.refTable,d=(c=a.refColumns)==null?void 0:c[n];if(!t||!d)return;const u=this.resolveForeignKeyTargetSchemaName(e,t,l);if(u)return{schemaName:u,tableName:t.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,a,r){const l=this.findSchemaNameForTable(e,a);if(l)return l;const n=this.findUniqueSchemaNameForTableName(e,a.name);return n||r}findUniqueSchemaNameForTableName(e,a){const r=e.schemas.filter(l=>{var n;return(n=l.tables)==null?void 0:n.some(t=>t.name===a)}).map(l=>l.name);if(r.length===1)return r[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(ta(e))return this.formatPgDomainType(e);const a=this.formatSchemaTypeLabel(e);return oa(e)?{kind:A.BoolType,typeName:e.type,label:a}:la(e)?{kind:A.IntegerType,typeName:e.type,label:a,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ze(e)?{kind:A.DecimalType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Qe(e)?{kind:A.FloatType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ze(e)?{kind:A.StringType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:ei(e)?{kind:A.BinaryType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:ii(e)?{kind:A.TimeType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:sa(e)?{kind:A.JSONType,typeName:e.type,label:a}:da(e)?{kind:A.SpatialType,typeName:e.type,label:a}:ua(e)?{kind:A.UUIDType,typeName:e.type,label:a}:Se(e)?{kind:A.EnumType,label:a,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:fa(e)?{kind:A.UnsupportedType,typeName:e.type,label:a}:{kind:e.kind,label:ai(e)?e.type:e.kind}}formatPgDomainType(e){const a=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ni.Domain,name:e.type,label:e.type,...a?{baseTypeLabel:a}:{}}}formatSchemaTypeLabel(e){let a;return ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):ei(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):Qe(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision):ii(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Se(e)?a=e.type??e.values[0]??"enum":ai(e)?a=e.type:a=e.kind,this.normalizeTypeLabelSpacing(a)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...a){const r=a.filter(l=>l!==void 0);return r.length===0?e:`${e} (${r.join(", ")})`}formatIndexPartName(e){var a;return(a=e.column)!=null&&a.name?e.column.name:e.expr?Ee(e.expr):""}}const pa=new Set([_.TABLE,_.COLUMNS,_.COLUMN,_.INDEXES,_.INDEX]);class fi extends zi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,a,r,l){return!Xi(r)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(r,fi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return pa.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case _.TABLE:return["tableName","schemaName","description"];case _.COLUMNS:case _.INDEXES:return["title"];case _.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case _.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function ha(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function ma(i){if(ra(i.diffs))return i.diffs[xe]}function Re(i){const e=i.diffs[oe];if(e&&(ee(e.data)||ie(e.data)))return e}function gi(i,e){return i?(e==="origin"?i.styles.before:i.styles.after).isHeaderVisible:!0}function ya(i){const a=i.diffs.foreignKeyTargetDiffs;if(!(!a||Object.keys(a).length===0))return a}function ba(i){if(Re(i))return;const e={};let a=!1;for(const r of di){const l=i.diffs[r];l&&(e[r]=l,a=!0)}return a?e:void 0}function Da(i){return i.diffs.generatedExpression}function va(i){if(Re(i))return;const e={};let a=!1;for(const r of ui){const l=i.diffs[r];l&&(e[r]=l,a=!0)}return a?e:void 0}const Ha=s.createContext(!1),qe=i=>{const{children:e,diffType:a,diffTypeCause:r,hidden:l=!1}=i;return l||!a?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Gi,{variant:a,message:r}),e]})};qe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce=s.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Ce.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const we=s.memo(i=>{const{left:e,right:a}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:a})]})});we.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Pe="px-4",ka="",Va="px-4",Ge="";var I=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(I||{});var V=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(V||{});const xa=i=>{const{isExpandable:e,expanded:a,setExpanded:r,variant:l}=i,n=s.useCallback(()=>{r==null||r(t=>!t)},[r]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${wa(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:n,children:a?"Show less":"Show more"})})})},ci=s.memo(i=>{const{value:e,variant:a,layoutSide:r,onClick:l,diff:n,usage:t,highlightingMode:d=Ne.Default}=i,u=d===Ne.Default,f=d===Ne.Invisible,{textFontWeight:c,labelFontWeight:g,labelColor:m,textColor:x,label:H}=i,[p,h]=s.useState(!1),D=s.useCallback((w,M,S)=>{if(S)return null;const L=f?"":M.join(" "),b=`text-value ${l?"hover:cursor-pointer":""} ${c?`font-${c}`:""}`.trim(),N=`${b} ${L}`.trim(),j={onClick:l,...x!=null&&x.trim()?{style:{color:x}}:{}};w=p?w:Ca(w);const $=(R,J)=>{const G={...j,className:J};switch(a){case V.h1:return o.jsx("h1",{...G,children:R});case V.h2:return o.jsx("h2",{...G,children:R});case V.h3:return o.jsx("h3",{...G,children:R});case V.h4:return o.jsx("h4",{...G,children:R});case V.h5:return o.jsx("h5",{...G,children:R});case V.h6:return o.jsx("h6",{...G,children:R});case V.body1:return o.jsx("span",{...G,className:`${J} text-value-body1`.trim(),children:R});case V.body2:return o.jsx("span",{...G,className:`${J} text-value-body2`.trim(),children:R})}};return H?$(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:g?`font-${g}`:"font-bold",style:m!=null&&m.trim()?{color:m}:{},children:`${H}: `}),o.jsx("span",{className:L,children:w})]}),b):$(w,N)},[p,f,H,m,g,l,x,c,a]),T=s.useCallback(w=>{const M=[];let S=w,L=!1;if(n){const{data:b,styles:N}=n;switch(r){case O:M.push(U.highlighter(N.before.textHighlighterColor)),u&&(ie(b)&&(S=Z(b.beforeValue)?b.beforeValue:S),ae(b)&&(t===I.JsoProperty&&!f&&M.push(U.highlighter(Ye.Yellow)),S=Z(b.beforeValue)?b.beforeValue:S),_e(b)&&(S=Z(b.beforeKey)?b.beforeKey:S)),ee(b)&&(L=!0);break;case W:M.push(U.highlighter(N.after.textHighlighterColor)),u&&(ee(b)&&(S=Z(b.afterValue)?b.afterValue:S),ae(b)&&(t===I.JsoProperty&&!f&&M.push(U.highlighter(Ye.Yellow)),S=Z(b.afterValue)?b.afterValue:S),_e(b)&&(S=Z(b.afterKey)?b.afterKey:S)),ie(b)&&(L=!0);break}}return[S,M,L]},[n,u,f,r,t]),[y,k,v]=T(e);return s.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[D(y,k,v),!v&&o.jsx(xa,{isExpandable:qa(y),expanded:p,setExpanded:h,variant:a})]}),[D,y,k,v,p,h,a])}),Me=5,Le=300;function qa(i){return i?i.length>Le||ri.trim(i.split(`
`)).length>Me:!1}function Ca(i){if(!i)return;if(i.length>Le)return i.slice(0,Le)+"...";const e=ri.trim(i.split(`
`));return e.length>Me?e.slice(0,Me).join(`
`)+"...":i}function Z(i){return typeof i=="string"}function wa(i){switch(i){case V.h1:return"text-value-expander--h1";case V.h2:return"text-value-expander--h2";case V.h3:return"text-value-expander--h3";case V.h4:return"text-value-expander--h4";case V.h5:return"text-value-expander--h5";case V.h6:return"text-value-expander--h6";case V.body1:return"text-value-expander--body1";case V.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const K="data-precededby",P="data-ddl-list-last-row";var q=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(q||{}),Y=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Y||{});const Na={[Y.DdlApiProperty]:Ge},Aa={[Y.DdlApiProperty]:["min-h-[26px]"]};function Sa(i){const e=Na[i]??Pe,a=Aa[i]??[];return[e,...a].join(" ")}const he=s.memo(i=>{const{value:e,variant:a,layoutSide:r,usage:l=Y.Default}=i,{label:n,labelFontWeight:t,textFontWeight:d,labelColor:u,textColor:f}=i,{[K]:c}=i,{diff:g,descendantDiffs:m,diffsSeverities:x}=i,H=le(),p=l===Y.DdlApiProperty,h=p&&H>0,D=s.useMemo(()=>{if(!g)return[];const{data:k,styles:v}=g;if(!k)return[];const C=[];return r===O&&C.push(U.background(v.before.backgroundColor)),r===W&&C.push(U.background(v.after.backgroundColor)),C},[g,r]),T=s.useMemo(()=>Sa(l),[l]),y=o.jsx(ci,{label:n,labelFontWeight:t,textFontWeight:d,labelColor:u,textColor:f,value:e,variant:a,layoutSide:r,diff:g});return o.jsxs("div",{"data-precededby":c,className:`text-row-content flex h-full ${p?"items-stretch":""} ${T} gap-2 ${D.join(" ")}`,children:[h&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:H}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:y}):y]})});he.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=s.memo(i=>{const e=He(),{diffsSeverities:a,diffsSeverityPlacement:r=ti.DescriptionRow}=i,l=s.useMemo(()=>a==null?void 0:a[r],[a,r]),n=s.useMemo(()=>l==null?void 0:l.type,[l]),t=s.useMemo(()=>je(l==null?void 0:l.causedAt),[l]);switch(e){case Oe:return o.jsx(qe,{diffType:n,diffTypeCause:t,hidden:!1,children:o.jsx(we,{left:o.jsx(he,{...i,layoutSide:O}),right:o.jsx(he,{...i,layoutSide:W})})});case Fe:return o.jsx(Ce,{content:o.jsx(he,{...i,layoutSide:W})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const se="#353C4E",_a=s.createContext(void 0);function Ta(){return s.useContext(_a)}const pi=i=>{const{expandable:e,expanded:a,onClick:r,level:l}=i,n=s.useContext(Ha),t=l>0,d=r??(()=>{n&&console.warn("Expander callback is not provided.")});return!e&&!t?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${t?"gap-0.5":""}`,children:[t&&o.jsx(Ki,{short:e}),e&&a!==void 0&&o.jsx(Ui,{onToggle:d,expanded:a})]})};pi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ea={[I.JsoProperty]:ka,[I.DdlApiSection]:Va,[I.DdlApiProperty]:Ge},Ma={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function La(i){const e=Ea[i]??Pe,a=Ma[i]??[];return[e,...a].join(" ")}const me=s.memo(i=>{const{expandable:e,expanded:a,onClickExpander:r,value:l,variant:n,layoutSide:t,enableHeader:d=!0,enableHeaderValue:u=!0,subheader:f,usage:c=I.Default,highlightingMode:g=Bi}=i,{diff:m,descendantDiffs:x,diffsSeverities:H}=i,{[K]:p,[P]:h}=i,D=s.useMemo(()=>{switch(c){case I.Default:return g.get($e.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return g.get($e.JsoPropertyKey)}},[g,c]),T=le(),y=Ta(),k=s.useMemo(()=>y?t===O?y.beforeLevel:y.afterLevel:T,[t,T,y]),v=s.useMemo(()=>{const L=[];if(!m)return L;const{data:b,styles:N}=m;return b&&(t===O&&L.push(U.background(N.before.backgroundColor)),t===W&&L.push(U.background(N.after.backgroundColor))),L},[m,t]),C=s.useMemo(()=>u?o.jsx(ci,{"data-precededby":p,value:l,variant:n,layoutSide:t,diff:m,usage:c,highlightingMode:D,onClick:r}):null,[u,p,l,n,t,m,c,D,r]),w=c===I.DdlApiProperty,M=s.useMemo(()=>d?o.jsxs(o.Fragment,{children:[(e||k>0)&&o.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:k}),o.jsx(pi,{expandable:e,expanded:a,onClick:r,level:k})]}),!w&&C]}):k>0&&o.jsx(De,{level:k}),[d,e,k,p,a,r,C,w]),S=s.useMemo(()=>La(c),[c]);return o.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":h?!0:void 0,className:`title-row-content flex ${w?"items-stretch":"items-center"} h-full ${S} gap-2 ${v.join(" ")}`,children:[M,w?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[C,f==null?void 0:f(t)]}):f==null?void 0:f(t)]})});me.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const X=s.memo(i=>{const e=He(),{diff:a,diffsSeverities:r,enableHeaderValue:l}=i,n=s.useMemo(()=>r==null?void 0:r["title-row"],[r]),t=s.useMemo(()=>n==null?void 0:n.type,[n]),d=s.useMemo(()=>je(n==null?void 0:n.causedAt),[n]);switch(e){case Oe:return o.jsx(qe,{diffType:t,diffTypeCause:d,hidden:!1,children:o.jsx(we,{left:o.jsx(me,{...i,enableHeader:(a==null?void 0:a.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:O}),right:o.jsx(me,{...i,enableHeader:(a==null?void 0:a.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:W})})});case Fe:return o.jsx(Ce,{content:o.jsx(me,{...i,layoutSide:W})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});X.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function qn(i,e){return s.useMemo(()=>e(i)?hi(i):{},[e,i])}function hi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ia(i,e={}){const{diffKey:a,fallbackToNodeDiff:r=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:n,resolveDiff:t}=e,{nodeDiffs:d,nodeDescendantDiffs:u,nodeDiffsSeverities:f}=i;if(!d)return{};const c=Object.entries(d),g=H=>{const p=c.find(([h])=>h===String(H));return p==null?void 0:p[1]},m=a?g(a):void 0;return{diff:t?t(d,g):r?d[oe]??m:m,...l?{descendantDiffs:u}:{},diffsSeverities:f,...n?{diffsSeverityPlacement:n}:{}}}function ja(i){return Qi.includes(i.kind)}function Fa(i){return i.childrenNodes().filter(ja)}function Cn(i){return i.kind===_.TABLE}function Oa(i){return i.kind===_.COLUMNS}function mi(i){return i.kind===_.COLUMN}function Ke(i){return mi(i)&&i instanceof Ve}function Ra(i){return i.kind===_.INDEXES}function yi(i){return i.kind===_.INDEX}function bi(i){return yi(i)&&i instanceof Ve}function Pa(i){return i.filter(mi)}function Ga(i){return i.filter(yi)}const Ka=s.createContext(null);function Ua(){const i=s.useContext(Ka);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Ba=({href:i,className:e,children:a})=>o.jsx("a",{href:i,className:e,children:a});Ba.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Wa(i){return i?!!(B(i.defaultValue)||B(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Di=s.memo(i=>{const{isVisible:e,value:a,className:r}=i;return e?o.jsx("span",{className:r,children:`${a}`}):null});Di.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ya(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const z=s.memo(i=>{const{isVisible:e,value:a}=i,r=Ya();return o.jsx(Di,{isVisible:e,value:a,className:r})});z.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const ye=s.memo(i=>{var H;const{label:e,subheader:a,layoutSide:r,diff:l,colorizingDiff:n}=i,{[K]:t,[P]:d}=i,u=le(),f=r===O?l==null?void 0:l.styles.before:l==null?void 0:l.styles.after,g=(H=(r===O?n==null?void 0:n.styles.before:n==null?void 0:n.styles.after)??f)==null?void 0:H.backgroundColor,m=s.useMemo(()=>g?[U.background(g)]:[],[g]),x=s.useMemo(()=>{const p=n==null?void 0:n.data;if(p){if(ee(p))return r!==O;if(ie(p))return r===O}return(f==null?void 0:f.isContentVisible)??!0},[n,f==null?void 0:f.isContentVisible,r]);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":t,"data-ddl-list-last-row":d?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Ge} min-h-[26px] gap-2 ${m.join(" ")}`,children:[u>0&&o.jsxs("div",{"data-precededby":t,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:u}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),x&&o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),a==null?void 0:a(r)]})]})});ye.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Q=s.memo(i=>{var l;const e=He(),a=(l=i.diffsSeverities)==null?void 0:l[ti.AdditionalInfoRow],r=s.useMemo(()=>je(a==null?void 0:a.causedAt),[a==null?void 0:a.causedAt]);switch(e){case Oe:return o.jsx(qe,{diffType:a==null?void 0:a.type,diffTypeCause:r,hidden:!1,children:o.jsx(we,{left:o.jsx(ye,{...i,layoutSide:O}),right:o.jsx(ye,{...i,layoutSide:W})})});case Fe:return o.jsx(Ce,{content:o.jsx(ye,{...i,layoutSide:W})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Q.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const $a="ux-badge_ddlapi_primary-key",vi="ux-badge_ddlapi_foreign-key",Xa="ux-badge_ddlapi_unique",Ja="ux-badge_ddlapi_not-null",za="ux-badge_ddlapi_generated",Hi="public",ki="Default",Vi="As",xi="Values";function qi(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Hi?e:`${i.schemaName}.${e}`}function ve(i){return i.join(", ")}const Ie=s.memo(i=>{const{target:e,hideBadge:a=!1,textHighlighterColor:r}=i,{navigationLinkBuilder:l,navigationLinkComponent:n}=Ua(),t=s.useMemo(()=>l(e.schemaName,e.tableName,e.columnName),[l,e]),d=s.useMemo(()=>["ddlapi-foreign-key-link",U.highlighter(r)].filter(Boolean).join(" "),[r]),u=o.jsx(n,{href:t,className:d,children:qi(e)});return a?u:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Wi,{text:"FK",colorSchema:vi,inline:!0}),u]})});Ie.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Qa(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Ci(i,e){return!!i||!!e}function Ue(i,e){return i?e===O?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Za(i,e,a){return Ci(i,e)&&Ue(e,a)}function pe(i){const{columnId:e,label:a,colorSchema:r,flagValue:l,flagDiff:n,layoutMode:t,layoutSide:d}=i;if(!Ci(l,n))return null;if(!Ue(n,d))return Qa();const u=n==null?void 0:n.data;return o.jsx(oi,{label:a,colorSchema:r,layoutMode:t,layoutSide:d,isNodeChanged:!1,isContentChanged:!!u,$changes:u},nn(e,a))}function en(i,e){return i?(e===O?i.styles.before:i.styles.after).textHighlighterColor:void 0}function an(i){const{columnId:e,target:a,targetDiff:r,layoutMode:l,layoutSide:n}=i,t=rn(e,a),d=en(r,n);if(r&&!Ue(r,n))return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},t);if(!r)return o.jsx(Ie,{target:a},t);const u=r.data;return o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(oi,{label:"FK",colorSchema:vi,layoutMode:l,layoutSide:n,isNodeChanged:!1,isContentChanged:!0,$changes:u}),o.jsx(Ie,{target:a,hideBadge:!0,textHighlighterColor:d})]},t)}const de=s.memo(i=>{const{columnId:e,value:a,flagDiffs:r,foreignKeyTargetDiffs:l,layoutSide:n}=i,t=He(),d=s.useMemo(()=>r??{},[r]),u=s.useMemo(()=>l??{},[l]),f=s.useMemo(()=>pe({columnId:e,label:"PK",colorSchema:$a,flagValue:a.isPrimaryKey,flagDiff:d.isPrimaryKey,layoutMode:t,layoutSide:n}),[e,d.isPrimaryKey,t,n,a.isPrimaryKey]),c=s.useMemo(()=>Za(a.isPrimaryKey,d.isPrimaryKey,n),[d.isPrimaryKey,n,a.isPrimaryKey]),g=s.useMemo(()=>pe({columnId:e,label:"unique",colorSchema:Xa,flagValue:a.isUnique,flagDiff:d.isUnique,layoutMode:t,layoutSide:n}),[e,d.isUnique,t,n,a.isUnique]),m=s.useMemo(()=>c?null:pe({columnId:e,label:"not null",colorSchema:Ja,flagValue:a.isNotNull,flagDiff:d.isNotNull,layoutMode:t,layoutSide:n}),[e,d.isNotNull,c,t,n,a.isNotNull]),x=s.useMemo(()=>pe({columnId:e,label:"generated",colorSchema:za,flagValue:a.isGenerated,flagDiff:d.isGenerated,layoutMode:t,layoutSide:n}),[e,d.isGenerated,t,n,a.isGenerated]),H=s.useMemo(()=>{const h=a.foreignKeyTargets??[];return h.length===0?[]:h.map(D=>an({columnId:e,target:D,targetDiff:u[ha(D)],layoutMode:t,layoutSide:n}))},[e,t,n,u,a.foreignKeyTargets]),p=s.useMemo(()=>[f,g,m,x,...H].filter(Boolean),[H,x,m,f,g]);return p.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p})});function nn(i,e){return`${i}-${e}`}function rn(i,e){return`${i}-FK-${qi(e)}`}de.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const wi=s.memo(i=>{const{isVisible:e,value:a,className:r}=i;return e?o.jsx("span",{className:r,children:`${a}`}):null});wi.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function tn(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=s.memo(i=>{const{isVisible:e,value:a,appearance:r}=i,l=tn({appearance:r});return o.jsx(wi,{isVisible:e,value:a,className:l})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ni=i=>{const{node:e,additionalInfoPrecededBy:a=q.DDL_COLUMN_ROW,isLastInList:r=!1,[K]:l}=i,n=ne(),t=e.value(),d=s.useCallback(v=>t?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:v,value:t})]}):o.jsx(o.Fragment,{}),[e.id,t]),u=s.useCallback(v=>{const C=t==null?void 0:t.defaultValue;return B(C)?o.jsx(z,{isVisible:!0,value:C}):o.jsx(o.Fragment,{})},[t]),f=s.useCallback(v=>{const C=t==null?void 0:t.generatedExpression;return B(C)?o.jsx(z,{isVisible:!0,value:C}):o.jsx(o.Fragment,{})},[t]),c=s.useCallback(v=>{var C;return(C=t==null?void 0:t.enumValues)!=null&&C.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((w,M)=>o.jsx(z,{isVisible:!0,value:w},`${w}-${M}`))}):o.jsx(o.Fragment,{})},[t]),g=n===re,m=s.useMemo(()=>g&&!!(t!=null&&t.description),[g,t==null?void 0:t.description]),x=!!(t!=null&&t.enumValues&&t.enumValues.length>0),H=B(t==null?void 0:t.defaultValue),p=B(t==null?void 0:t.generatedExpression),D=r&&!(g&&(x||H||p)),T=r&&x&&!H&&!p,y=r&&H&&!p,k=r&&p;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(X,{"data-precededby":l,[P]:D||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:d,usage:I.DdlApiProperty}),m&&o.jsx(te,{"data-precededby":q.DDL_COLUMN_ROW,value:t.description??"",variant:V.body2,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty}),g&&x&&o.jsx(Q,{"data-precededby":a,[P]:T||void 0,label:xi,subheader:c}),g&&H&&o.jsx(Q,{"data-precededby":x?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:y||void 0,label:ki,subheader:u}),g&&p&&o.jsx(Q,{"data-precededby":H||x?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:k||void 0,label:Vi,subheader:f})]}):null};Ni.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function on(i){if(Ke(i))return ya(i)}function ln(i){if(Ke(i))return ba(i)}function sn(i){if(bi(i))return va(i)}const Ai=Re;function Si(i){const e=Ia(hi(i),{resolveDiff:()=>ma(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const _i=i=>{const{node:e,additionalInfoPrecededBy:a=q.DDL_COLUMN_ROW,isLastInList:r=!1,[K]:l}=i,n=ne(),t=e.value(),d=s.useMemo(()=>Ai(e),[e]),u=s.useMemo(()=>Si(e),[e]),f=s.useMemo(()=>ln(e),[e]),c=s.useMemo(()=>on(e),[e]),g=s.useMemo(()=>Da(e),[e]),m=s.useCallback(b=>t?gi(d,b)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:b,value:t,flagDiffs:f,foreignKeyTargetDiffs:c})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,c,e.id,d,t]),x=s.useCallback(b=>{const N=t==null?void 0:t.defaultValue;return B(N)?o.jsx(z,{isVisible:!0,value:N}):o.jsx(o.Fragment,{})},[t]),H=s.useCallback(b=>{const N=(()=>{const j=g==null?void 0:g.data;return j?b===O?ie(j)||ae(j)?j.beforeValue:void 0:ee(j)||ae(j)?j.afterValue:void 0:t==null?void 0:t.generatedExpression})();return B(N)?o.jsx(z,{isVisible:!0,value:N}):o.jsx(o.Fragment,{})},[g,t]),p=s.useCallback(b=>{var N;return(N=t==null?void 0:t.enumValues)!=null&&N.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((j,$)=>o.jsx(z,{isVisible:!0,value:j},`${j}-${$}`))}):o.jsx(o.Fragment,{})},[t]),h=n===re,D=!!d,T=s.useMemo(()=>h&&!!(t!=null&&t.description),[h,t==null?void 0:t.description]),y=!!(t!=null&&t.enumValues&&t.enumValues.length>0),k=B(t==null?void 0:t.defaultValue),v=B(t==null?void 0:t.generatedExpression)||!!g,w=r&&!(h&&(y||k||v)),M=r&&y&&!k&&!v,S=r&&k&&!v,L=r&&v;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(X,{"data-precededby":l,[P]:w||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:m,usage:I.DdlApiProperty,...u}),T&&!D&&o.jsx(te,{"data-precededby":q.DDL_COLUMN_ROW,value:t.description??"",variant:V.body2,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty}),h&&!D&&y&&o.jsx(Q,{"data-precededby":a,[P]:M||void 0,label:xi,subheader:p}),h&&!D&&k&&o.jsx(Q,{"data-precededby":y?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:S||void 0,label:ki,subheader:x}),h&&v&&o.jsx(Q,{"data-precededby":k||y?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[P]:L||void 0,label:Vi,subheader:H,diff:g,colorizingDiff:e.diffs[oe],diffsSeverities:e.diffsSeverities})]}):null};_i.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function dn(i,e){let a=!1;return i.map((r,l)=>{const n=l===i.length-1,t=l===0?q.DDL_SECTION_HEADER:a?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,d=a?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,u={columnNode:r,titlePrecededBy:t,additionalInfoPrecededBy:d,isLastInList:n};return a=e&&Wa(r.value()),u})}const Ti=i=>{const{node:e,[K]:a}=i,r=le(),l=ne(),n=e.value(),t=Pa(e.childrenNodes()),d=l===re,u=s.useMemo(()=>dn(t,d),[t,d]);return t.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(X,{"data-precededby":a,value:(n==null?void 0:n.title)??"Columns",expandable:!1,expanded:!0,variant:V.h2}),o.jsx(li.Provider,{value:r+1,children:u.map(({columnNode:f,titlePrecededBy:c,additionalInfoPrecededBy:g,isLastInList:m})=>Ke(f)?o.jsx(_i,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:m,node:f},f.id):o.jsx(Ni,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:m,node:f},f.id))})]})};Ti.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Ei=i=>{const{schemaName:e,[K]:a}=i;return e===Hi?null:o.jsx("div",{"data-precededby":a,className:`ddl-schema-name-block-row flex h-full ${Pe}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Ei.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Mi=i=>{const{node:e,isLastInList:a=!1,[K]:r}=i,l=ne(),n=e.value(),t=s.useMemo(()=>n?n.indexName?n.indexName:ve(n.partNames):"",[n]),d=s.useCallback(c=>n?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ve(n.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:c,value:n})]}):o.jsx(o.Fragment,{}),[n]),u=s.useMemo(()=>l===re&&!!(n!=null&&n.description),[l,n==null?void 0:n.description]),f=a;return n?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(X,{"data-precededby":r,[P]:f||void 0,value:t,expandable:!1,expanded:!0,variant:V.body2,subheader:n.indexName||n.isUnique?d:void 0,usage:I.DdlApiProperty}),u&&o.jsx(te,{"data-precededby":q.DDL_INDEX_ROW,value:n.description??"",variant:V.body1,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty})]}):null};Mi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Li=i=>{const{node:e,isLastInList:a=!1,[K]:r}=i,l=ne(),n=e.value(),t=s.useMemo(()=>Ai(e),[e]),d=s.useMemo(()=>Si(e),[e]),u=s.useMemo(()=>sn(e),[e]),f=s.useMemo(()=>n?n.indexName?n.indexName:ve(n.partNames):"",[n]),c=s.useCallback(H=>n?gi(t,H)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ve(n.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:H,value:n,flagDiffs:u})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[u,t,n]),g=s.useMemo(()=>l===re&&!!(n!=null&&n.description),[l,n==null?void 0:n.description]),m=!!t,x=a;return n?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(X,{"data-precededby":r,[P]:x||void 0,value:f,expandable:!1,expanded:!0,variant:V.body2,subheader:n.indexName||n.isUnique||u!=null&&u.isUnique?c:void 0,usage:I.DdlApiProperty,...d}),g&&!m&&o.jsx(te,{"data-precededby":q.DDL_INDEX_ROW,value:n.description??"",variant:V.body1,textFontWeight:"normal",textColor:se,usage:Y.DdlApiProperty})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function un(i){return i.map((e,a)=>({indexNode:e,titlePrecededBy:a===0?q.DDL_SECTION_HEADER:q.DDL_INDEX_ROW,isLastInList:a===i.length-1}))}const Ii=i=>{const{node:e,[K]:a}=i,r=le(),l=e.value(),n=Ga(e.childrenNodes()),t=s.useMemo(()=>un(n),[n]);return n.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(X,{"data-precededby":a,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:V.h2}),o.jsx(li.Provider,{value:r+1,children:t.map(({indexNode:d,titlePrecededBy:u,isLastInList:f})=>bi(d)?o.jsx(Li,{"data-precededby":u,isLastInList:f,node:d},d.id):o.jsx(Mi,{"data-precededby":u,isLastInList:f,node:d},d.id))})]})};Ii.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const fn=i=>{const{node:e,noHeading:a=!1,[K]:r=q.ROOT}=i,l=ne(),n=e.value(),t=Fa(e),d=t.find(Oa),u=t.find(Ra),f=!!(n!=null&&n.schemaName),c=l===re&&!!(n!=null&&n.description),g=a?q.ROOT:q.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!a&&o.jsx(X,{"data-precededby":r,value:(n==null?void 0:n.tableName)??"",expandable:!1,expanded:!0,variant:V.h1}),f&&o.jsx(Ei,{"data-precededby":g,schemaName:(n==null?void 0:n.schemaName)??""}),c&&o.jsx(te,{"data-precededby":f?q.DDL_TABLE_SCHEMA_ROW:g,value:(n==null?void 0:n.description)??"",variant:V.h4,textFontWeight:"normal",textColor:se}),d&&o.jsx(Ti,{"data-precededby":c?q.DDL_TABLE_DESCRIPTION_ROW:f?q.DDL_TABLE_SCHEMA_ROW:g,node:d}),u&&o.jsx(Ii,{"data-precededby":d!=null&&d.childrenNodes().length?q.DDL_COLUMN_ROW:c?q.DDL_TABLE_DESCRIPTION_ROW:f?q.DDL_TABLE_SCHEMA_ROW:g,node:u})]})};fn.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{ke as A,si as B,yn as C,xn as D,qe as E,we as F,ci as G,V as H,K as I,Ha as J,_a as K,Ta as L,hi as M,Ia as N,Ce as O,X as P,I as Q,q as R,Ve as S,Xe as T,te as U,qn as V,se as W,Pe as X,Dn as a,fi as b,Hn as c,Qi as d,vn as e,Cn as f,Je as g,Ka as h,E as i,fn as j,Ba as k,ha as l,di as m,ui as n,_ as o,na as p,kn as q,xe as r,Vn as s,bn as t,Ae as u,Yi as v,zi as w,Xi as x,$i as y,mn as z};
