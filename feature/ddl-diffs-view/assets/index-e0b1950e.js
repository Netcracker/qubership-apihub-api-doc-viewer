var Fi=Object.defineProperty;var Oi=(i,e,a)=>e in i?Fi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var j=(i,e,a)=>(Oi(i,typeof e!="symbol"?e+"":e,a),a);import{u as ee,v as ie,x as _e,w as ae,R as Te,T as Ke,U as be,N as oe,V as ii,W as _,X as Ri,Y as Pi,K as fe,O as Gi,M as ge,Z as Ui,_ as Ae,$ as B,a0 as K,H as Be,a1 as F,a2 as ai,a3 as le,a4 as De,a5 as He,Q as ni,a6 as je,k as Fe,S as Oe,a7 as Ki,a8 as Bi,y as Wi,a9 as We,aa as U,ab as Yi,ac as ri,ad as ne,h as re,f as ti}from"./DiffBadge-a8af3c87.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Ye={SIMPLE:"simple",COMPLEX:"complex"},$i={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Xi=Object.values($i);new Set(Xi);class ke{aggregateByDescendantDiffs(e,a,r,l){}static isDiffsRecord(e){if(!M(e))return!1;for(const a of Object.values(e))if(!ke.isDiff(a))return!1;return!0}static isDiff(e){const a=e;return M(a)&&(ee(a)||ie(a)||_e(a)||ae(a))}}function M(i){return oi(i)&&!Array.isArray(i)}function oi(i){return typeof i=="object"&&i!==null}function Ji(i){return M(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ne(i){return Array.isArray(i)}function dn(i,e,a){let r=i,l=!1;for(const n of e){if(!M(r)&&!Ne(r))return;if(l){let d;oi(r)&&(d=r[n]),!d&&Ne(r)&&a&&(d=r.find(f=>M(f)&&f[a]===n)),r=d,l=!1;continue}r=r[n],Ne(r)&&(l=!0)}return r}function un(i,e){return Object.keys(i).find(a=>i[a]===e)}function fn(i){if(ke.isDiffsRecord(i))return i}class gn{constructor(){j(this,"tree",null)}pick(e,a){if(!M(e))return null;const r={};for(const l of a){const n=String(l);if(!(n in e))continue;const t=e[n];Array.isArray(t)?r[n]=[...t]:M(t)?r[n]={...t}:r[n]=t}return this.isPartialOf(r,a)?r:null}isPartialOf(e,a){return Object.keys(e).every(r=>a.includes(r))}}const pe=()=>{},pn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:pe,info:pe,warn:pe,error:pe};function zi(i){return i==null||!M(i)&&!Te(i)}function cn(i){const{source:e,tree:a,supportedNodeKinds:r,createNodeFromRaw:l,createNodeParams:n,createStateForSimpleNode:t,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:u,resolveNodeKey:g,isDisallowedValue:p=zi,shouldStopAfterNodeCreation:m}=i;return[({value:b,state:V,key:N,path:v})=>{if(typeof N=="symbol")return;if(!M(b)&&!Te(b))return{value:b};const{alreadyConvertedValuesCache:H,parent:x,container:q}=V,A=H.get(b);if(!A||!f(A)&&!u(A))return{value:b};if(!x||!f(x))return{value:b};const L="#"+Ke(v),T=g(N,b),S=a.createCycledClone(A,L,T,x);return q?q.addNestedNode(S):x&&x.addChildNode(S),{done:!0}},({key:b,value:V,path:N,state:v,rules:H})=>!H||!Array.isArray(H.transformers)?void 0:{value:H.transformers.reduce((A,L)=>L(b,A,e,N,v),V)},({key:b,value:V,path:N,rules:v,state:H})=>{if(!v)return{done:!0};if(typeof b=="symbol")return{done:!0};if(p(V))return{done:!0};if(!v.kind||!r.includes(v.kind))return;const{parent:x,container:q}=H,A="#"+Ke(N),L=g(b,V),{kind:T,complex:S=!1}=v,h=n(V,x,q),w=l(A,L,T,S,h);if(!w)return;q?q.addNestedNode(w):x&&x.addChildNode(w);let z=V;if(m!=null&&m(w,V)){const $=x?x.descendantDiffs:void 0;if(!$||!(b in $))return{done:!0};const P=$[b];if(!P)return{done:!0};const{data:Ue}=P;ae(Ue)&&(z=Ue.beforeValue)}const Q=new Map(H.alreadyConvertedValuesCache);(M(V)||Te(V))&&Q.set(V,w);let O;return f(w)?O=t(H,w,Q):O=d(H,w,Q),{value:z,state:O}}]}class Qi{}class Ve{constructor(e="#",a="",r,l,n){j(this,"type");j(this,"parent");j(this,"container");j(this,"newDataLevel");j(this,"_value");j(this,"_meta");j(this,"_childrenNodes",[]);j(this,"_nestedNodes",[]);j(this,"_diffs",{});j(this,"_diffsSummary",new Set);j(this,"_descendantDiffs",{});j(this,"_descendantDiffsSummary",new Set);j(this,"_diffsSeverities",{});this.id=e,this.key=a,this.kind=r,this.isCycle=l;const{type:t=Ye.SIMPLE,value:d=null,parent:f=null,container:u=null,newDataLevel:g=!0,meta:p}=n;this.type=t,this.parent=f,this.container=u,this.newDataLevel=g,this._value=d,this._meta=p}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,a,r){const l=new Ve(e,a,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,a=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const r of this._nestedNodes){if(r.id===e)return r;if(a&&r.type===Ye.COMPLEX){const l=r.findNestedNode(e,a);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const a of e)this._diffsSummary.add(a),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const a of e)this._descendantDiffsSummary.add(a),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const E={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Zi=Object.values(E);function $e(i=E.TABLE){return{"/columns":{"/items":{"/*":()=>$e(E.COLUMN)},kind:E.COLUMNS},"/indexes":{"/items":{"/*":()=>$e(E.INDEX)},kind:E.INDEXES},kind:i}}function ea(i){return i.kind===be.Literal&&typeof i.value=="string"}function ia(i){return i.kind===be.RawExpr&&typeof i.expr=="string"}function aa(i){return M(i)&&typeof i.expr=="string"}function na(i){return M(i)&&typeof i.value=="string"}const xe="titleRow",li=["isPrimaryKey","isUnique","isNotNull","isGenerated","isForeignKey"],si=["isUnique"],hn=[oe,xe,"columnName","description","generatedExpression",...li],mn=[oe,xe,"indexName",...si];function ra(i){if(!M(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:a}=i;return!M(a)||!("before"in a)||!("after"in a)?!1:ke.isDiff(e)}function ta(i){return ra(i[xe])}function oa(i){return M(i)&&i.kind===ii.Domain&&typeof i.type=="string"}function la(i){return i.kind===_.BoolType&&typeof i.type=="string"}function sa(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function Xe(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function Je(i){return i.kind===_.FloatType&&typeof i.type=="string"}function ze(i){return i.kind===_.StringType&&typeof i.type=="string"}function Qe(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function Ze(i){return i.kind===_.TimeType&&typeof i.type=="string"}function da(i){return i.kind===_.JSONType&&typeof i.type=="string"}function ua(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function fa(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function Se(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function ga(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function ei(i){return typeof i.type=="string"}function Ee(i){switch(i.kind){case be.Literal:return ea(i)?i.value:i.kind;case be.RawExpr:return ia(i)?i.expr:i.kind;case Ri.NamedDefault:try{return Ee(Pi(i))}catch{return i.kind}default:return aa(i)?i.expr:na(i)?i.value:i.kind}}const pa="Columns",ca="Indexes";class yn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,a){if(this.isDdlApiTableOrientedSpec(e))return e;const r=this.extractRealm(e);if(!r)return this.logger.debug("[DDL API] Unsupported source shape for table key:",a,e),null;const l=this.findTableInRealm(r,a);return l?this.buildTableOrientedSpecFromRealm(r,l,a):(this.logger.debug("[DDL API] Table not found in realm:",a,"available schemas:",r.schemas.map(n=>n.name)),null)}buildTableOrientedSpecFromRealm(e,a,r){const l=fe(a.attrs,ge.Comment);return{tableName:a.name,schemaName:r.schemaName,...l?{description:l.text}:{},columns:{title:pa,items:(a.columns??[]).map(n=>this.buildColumnRowValue(e,a,n,r.schemaName))},indexes:{title:ca,items:(a.indexes??[]).map(n=>this.buildIndexRowValue(n))}}}extractRealm(e){return this.isRealm(e)?e:M(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,a){var l;const r=e.schemas.find(n=>n.name===a.schemaName);if(r)return(l=r.tables)==null?void 0:l.find(n=>n.name===a.name)}isRealm(e){return M(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!M(e)||typeof e.tableName!="string"||!M(e.columns)||!Array.isArray(e.columns.items)||!M(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,a,r,l){var b,V,N;const n=fe(r.attrs,ge.Comment),t=(b=r.attrs)==null?void 0:b.find(v=>v.kind===Gi.Identity),d=fe(r.attrs,ge.GeneratedExpr),f=t!==void 0||d!==void 0,u=this.findForeignKeyForColumn(a,r),g=u!==void 0,p=g&&u?this.buildForeignKeyTarget(e,u,r,l):void 0,m=this.formatColumnType(r.type),y=(V=r.type)==null?void 0:V.type,D=y&&Se(y)?y.values:void 0,c=this.isPrimaryKeyColumn(a,r);return{columnName:r.name,columnType:m,...D?{enumValues:D}:{},isPrimaryKey:c,isForeignKey:g,...p?{foreignKeyTarget:p}:{},isGenerated:f,...t?{generatedBy:"identity"}:{},...d&&!t?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(a,r),isNotNull:!c&&((N=r.type)==null?void 0:N.null)===!1,...r.default!==void 0?{defaultValue:Ee(r.default)}:{},...n?{description:n.text}:{}}}buildIndexRowValue(e){const a=(e.parts??[]).slice().sort((l,n)=>l.seqNo-n.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),r=fe(e.attrs,ge.Comment);return{...e.name?{indexName:e.name}:{},partNames:a,isUnique:e.unique===!0,...r?{description:r.text}:{}}}findSchemaNameForTable(e,a){var r;for(const l of e.schemas)if((r=l.tables)!=null&&r.some(n=>n===a))return l.name}isPrimaryKeyColumn(e,a){var r;return(((r=e.primaryKey)==null?void 0:r.parts)??[]).some(l=>{var n;return((n=l.column)==null?void 0:n.name)===a.name})}isUniqueColumn(e,a){return(e.indexes??[]).some(r=>{var l,n,t;return r.unique===!0&&((l=r.parts)==null?void 0:l.length)===1&&((t=(n=r.parts[0])==null?void 0:n.column)==null?void 0:t.name)===a.name})}isSameForeignKeyColumn(e,a){return e===a||e.name===a.name}findForeignKeyForColumn(e,a){var r;return(r=e.foreignKeys)==null?void 0:r.find(l=>{var n;return(n=l.columns)==null?void 0:n.some(t=>this.isSameForeignKeyColumn(t,a))})}buildForeignKeyTarget(e,a,r,l){var u,g;const n=((u=a.columns)==null?void 0:u.findIndex(p=>this.isSameForeignKeyColumn(p,r)))??-1;if(n<0)return;const t=a.refTable,d=(g=a.refColumns)==null?void 0:g[n];if(!t||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,t,l);if(f)return{schemaName:f,tableName:t.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,a,r){const l=this.findSchemaNameForTable(e,a);if(l)return l;const n=this.findUniqueSchemaNameForTableName(e,a.name);return n||r}findUniqueSchemaNameForTableName(e,a){const r=e.schemas.filter(l=>{var n;return(n=l.tables)==null?void 0:n.some(t=>t.name===a)}).map(l=>l.name);if(r.length===1)return r[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(oa(e))return this.formatPgDomainType(e);const a=this.formatSchemaTypeLabel(e);return la(e)?{kind:_.BoolType,typeName:e.type,label:a}:sa(e)?{kind:_.IntegerType,typeName:e.type,label:a,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Xe(e)?{kind:_.DecimalType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Je(e)?{kind:_.FloatType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ze(e)?{kind:_.StringType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:Qe(e)?{kind:_.BinaryType,typeName:e.type,label:a,...e.size!==void 0?{size:e.size}:{}}:Ze(e)?{kind:_.TimeType,typeName:e.type,label:a,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:da(e)?{kind:_.JSONType,typeName:e.type,label:a}:ua(e)?{kind:_.SpatialType,typeName:e.type,label:a}:fa(e)?{kind:_.UUIDType,typeName:e.type,label:a}:Se(e)?{kind:_.EnumType,label:a,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:ga(e)?{kind:_.UnsupportedType,typeName:e.type,label:a}:{kind:e.kind,label:ei(e)?e.type:e.kind}}formatPgDomainType(e){const a=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ii.Domain,name:e.type,label:e.type,...a?{baseTypeLabel:a}:{}}}formatSchemaTypeLabel(e){let a;return Xe(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):Qe(e)?a=this.formatParameterizedTypeLabel(e.type,e.size):Je(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision):Ze(e)?a=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Se(e)?a=e.type??e.values[0]??"enum":ei(e)?a=e.type:a=e.kind,this.normalizeTypeLabelSpacing(a)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...a){const r=a.filter(l=>l!==void 0);return r.length===0?e:`${e} (${r.join(", ")})`}formatIndexPartName(e){var a;return(a=e.column)!=null&&a.name?e.column.name:e.expr?Ee(e.expr):""}}const ha=new Set([E.TABLE,E.COLUMNS,E.COLUMN,E.INDEXES,E.INDEX]);class di extends Qi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,a,r,l){return!Ji(r)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(r,di.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return ha.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case E.TABLE:return["tableName","schemaName","description"];case E.COLUMNS:case E.INDEXES:return["title"];case E.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTarget","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case E.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function ma(i){if(ta(i.diffs))return i.diffs[xe]}function Re(i){const e=i.diffs[oe];if(e&&(ee(e.data)||ie(e.data)))return e}function ui(i,e){return i?(e==="origin"?i.styles.before:i.styles.after).isHeaderVisible:!0}function ya(i){if(Re(i))return;const e={};let a=!1;for(const r of li){const l=i.diffs[r];l&&(e[r]=l,a=!0)}return a?e:void 0}function ba(i){return i.diffs.generatedExpression}function Da(i){if(Re(i))return;const e={};let a=!1;for(const r of si){const l=i.diffs[r];l&&(e[r]=l,a=!0)}return a?e:void 0}const va=s.createContext(!1),qe=i=>{const{children:e,diffType:a,diffTypeCause:r,hidden:l=!1}=i;return l||!a?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Ui,{variant:a,message:r}),e]})};qe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const we=s.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});we.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ce=s.memo(i=>{const{left:e,right:a}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:a})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Pe="px-4",Ha="",ka="px-4",Ge="";var I=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(I||{});var k=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(k||{});const Va=i=>{const{isExpandable:e,expanded:a,setExpanded:r,variant:l}=i,n=s.useCallback(()=>{r==null||r(t=>!t)},[r]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${wa(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:n,children:a?"Show less":"Show more"})})})},fi=s.memo(i=>{const{value:e,variant:a,layoutSide:r,onClick:l,diff:n,usage:t,highlightingMode:d=Ae.Default}=i,f=d===Ae.Default,u=d===Ae.Invisible,{textFontWeight:g,labelFontWeight:p,labelColor:m,textColor:y,label:D}=i,[c,b]=s.useState(!1),V=s.useCallback((A,L,T)=>{if(T)return null;const S=u?"":L.join(" "),h=`text-value ${l?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),w=`${h} ${S}`.trim(),z={onClick:l,...y!=null&&y.trim()?{style:{color:y}}:{}};A=c?A:qa(A);const Q=(O,$)=>{const P={...z,className:$};switch(a){case k.h1:return o.jsx("h1",{...P,children:O});case k.h2:return o.jsx("h2",{...P,children:O});case k.h3:return o.jsx("h3",{...P,children:O});case k.h4:return o.jsx("h4",{...P,children:O});case k.h5:return o.jsx("h5",{...P,children:O});case k.h6:return o.jsx("h6",{...P,children:O});case k.body1:return o.jsx("span",{...P,className:`${$} text-value-body1`.trim(),children:O});case k.body2:return o.jsx("span",{...P,className:`${$} text-value-body2`.trim(),children:O})}};return D?Q(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:p?`font-${p}`:"font-bold",style:m!=null&&m.trim()?{color:m}:{},children:`${D}: `}),o.jsx("span",{className:S,children:A})]}),h):Q(A,w)},[c,u,D,m,p,l,y,g,a]),N=s.useCallback(A=>{const L=[];let T=A,S=!1;if(n){const{data:h,styles:w}=n;switch(r){case F:L.push(K.highlighter(w.before.textHighlighterColor)),f&&(ie(h)&&(T=Z(h.beforeValue)?h.beforeValue:T),ae(h)&&(t===I.JsoProperty&&!u&&L.push(K.highlighter(Be.Yellow)),T=Z(h.beforeValue)?h.beforeValue:T),_e(h)&&(T=Z(h.beforeKey)?h.beforeKey:T)),ee(h)&&(S=!0);break;case B:L.push(K.highlighter(w.after.textHighlighterColor)),f&&(ee(h)&&(T=Z(h.afterValue)?h.afterValue:T),ae(h)&&(t===I.JsoProperty&&!u&&L.push(K.highlighter(Be.Yellow)),T=Z(h.afterValue)?h.afterValue:T),_e(h)&&(T=Z(h.afterKey)?h.afterKey:T)),ie(h)&&(S=!0);break}}return[T,L,S]},[n,f,u,r,t]),[v,H,x]=N(e);return s.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[V(v,H,x),!x&&o.jsx(Va,{isExpandable:xa(v),expanded:c,setExpanded:b,variant:a})]}),[V,v,H,x,c,b,a])}),Me=5,Le=300;function xa(i){return i?i.length>Le||ai.trim(i.split(`
`)).length>Me:!1}function qa(i){if(!i)return;if(i.length>Le)return i.slice(0,Le)+"...";const e=ai.trim(i.split(`
`));return e.length>Me?e.slice(0,Me).join(`
`)+"...":i}function Z(i){return typeof i=="string"}function wa(i){switch(i){case k.h1:return"text-value-expander--h1";case k.h2:return"text-value-expander--h2";case k.h3:return"text-value-expander--h3";case k.h4:return"text-value-expander--h4";case k.h5:return"text-value-expander--h5";case k.h6:return"text-value-expander--h6";case k.body1:return"text-value-expander--body1";case k.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const G="data-precededby",R="data-ddl-list-last-row";var C=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(C||{}),W=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(W||{});const Ca={[W.DdlApiProperty]:Ge},Aa={[W.DdlApiProperty]:["min-h-[26px]"]};function Na(i){const e=Ca[i]??Pe,a=Aa[i]??[];return[e,...a].join(" ")}const he=s.memo(i=>{const{value:e,variant:a,layoutSide:r,usage:l=W.Default}=i,{label:n,labelFontWeight:t,textFontWeight:d,labelColor:f,textColor:u}=i,{[G]:g}=i,{diff:p,descendantDiffs:m,diffsSeverities:y}=i,D=le(),c=l===W.DdlApiProperty,b=c&&D>0,V=s.useMemo(()=>{if(!p)return[];const{data:H,styles:x}=p;if(!H)return[];const q=[];return r===F&&q.push(K.background(x.before.backgroundColor)),r===B&&q.push(K.background(x.after.backgroundColor)),q},[p,r]),N=s.useMemo(()=>Na(l),[l]),v=o.jsx(fi,{label:n,labelFontWeight:t,textFontWeight:d,labelColor:f,textColor:u,value:e,variant:a,layoutSide:r,diff:p});return o.jsxs("div",{"data-precededby":g,className:`text-row-content flex h-full ${c?"items-stretch":""} ${N} gap-2 ${V.join(" ")}`,children:[b&&o.jsxs("div",{"data-precededby":g,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:D}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),c?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});he.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=s.memo(i=>{const e=He(),{diffsSeverities:a,diffsSeverityPlacement:r=ni.DescriptionRow}=i,l=s.useMemo(()=>a==null?void 0:a[r],[a,r]),n=s.useMemo(()=>l==null?void 0:l.type,[l]),t=s.useMemo(()=>je(l==null?void 0:l.causedAt),[l]);switch(e){case Oe:return o.jsx(qe,{diffType:n,diffTypeCause:t,hidden:!1,children:o.jsx(Ce,{left:o.jsx(he,{...i,layoutSide:F}),right:o.jsx(he,{...i,layoutSide:B})})});case Fe:return o.jsx(we,{content:o.jsx(he,{...i,layoutSide:B})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const se="#353C4E",Sa=s.createContext(void 0);function _a(){return s.useContext(Sa)}const gi=i=>{const{expandable:e,expanded:a,onClick:r,level:l}=i,n=s.useContext(va),t=l>0,d=r??(()=>{n&&console.warn("Expander callback is not provided.")});return!e&&!t?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${t?"gap-0.5":""}`,children:[t&&o.jsx(Ki,{short:e}),e&&a!==void 0&&o.jsx(Bi,{onToggle:d,expanded:a})]})};gi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ta={[I.JsoProperty]:Ha,[I.DdlApiSection]:ka,[I.DdlApiProperty]:Ge},Ea={[I.JsoProperty]:["min-h-[26px]"],[I.DdlApiProperty]:["min-h-[26px]"]};function Ma(i){const e=Ta[i]??Pe,a=Ea[i]??[];return[e,...a].join(" ")}const me=s.memo(i=>{const{expandable:e,expanded:a,onClickExpander:r,value:l,variant:n,layoutSide:t,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:u,usage:g=I.Default,highlightingMode:p=Wi}=i,{diff:m,descendantDiffs:y,diffsSeverities:D}=i,{[G]:c,[R]:b}=i,V=s.useMemo(()=>{switch(g){case I.Default:return p.get(We.Default);case I.AsyncApiJsoSection:case I.JsoProperty:return p.get(We.JsoPropertyKey)}},[p,g]),N=le(),v=_a(),H=s.useMemo(()=>v?t===F?v.beforeLevel:v.afterLevel:N,[t,N,v]),x=s.useMemo(()=>{const S=[];if(!m)return S;const{data:h,styles:w}=m;return h&&(t===F&&S.push(K.background(w.before.backgroundColor)),t===B&&S.push(K.background(w.after.backgroundColor))),S},[m,t]),q=s.useMemo(()=>f?o.jsx(fi,{"data-precededby":c,value:l,variant:n,layoutSide:t,diff:m,usage:g,highlightingMode:V,onClick:r}):null,[f,c,l,n,t,m,g,V,r]),A=g===I.DdlApiProperty,L=s.useMemo(()=>d?o.jsxs(o.Fragment,{children:[(e||H>0)&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:H}),o.jsx(gi,{expandable:e,expanded:a,onClick:r,level:H})]}),!A&&q]}):H>0&&o.jsx(De,{level:H}),[d,e,H,c,a,r,q,A]),T=s.useMemo(()=>Ma(g),[g]);return o.jsxs("div",{"data-precededby":c,"data-ddl-list-last-row":b?!0:void 0,className:`title-row-content flex ${A?"items-stretch":"items-center"} h-full ${T} gap-2 ${x.join(" ")}`,children:[L,A?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[q,u==null?void 0:u(t)]}):u==null?void 0:u(t)]})});me.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Y=s.memo(i=>{const e=He(),{diff:a,diffsSeverities:r,enableHeaderValue:l}=i,n=s.useMemo(()=>r==null?void 0:r["title-row"],[r]),t=s.useMemo(()=>n==null?void 0:n.type,[n]),d=s.useMemo(()=>je(n==null?void 0:n.causedAt),[n]);switch(e){case Oe:return o.jsx(qe,{diffType:t,diffTypeCause:d,hidden:!1,children:o.jsx(Ce,{left:o.jsx(me,{...i,enableHeader:(a==null?void 0:a.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:F}),right:o.jsx(me,{...i,enableHeader:(a==null?void 0:a.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:B})})});case Fe:return o.jsx(we,{content:o.jsx(me,{...i,layoutSide:B})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Y.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function bn(i,e){return s.useMemo(()=>e(i)?pi(i):{},[e,i])}function pi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function La(i,e={}){const{diffKey:a,fallbackToNodeDiff:r=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:n,resolveDiff:t}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!d)return{};const g=Object.entries(d),p=D=>{const c=g.find(([b])=>b===String(D));return c==null?void 0:c[1]},m=a?p(a):void 0;return{diff:t?t(d,p):r?d[oe]??m:m,...l?{descendantDiffs:f}:{},diffsSeverities:u,...n?{diffsSeverityPlacement:n}:{}}}function Ia(i){return Zi.includes(i.kind)}function ja(i){return i.childrenNodes().filter(Ia)}function Dn(i){return i.kind===E.TABLE}function Fa(i){return i.kind===E.COLUMNS}function ci(i){return i.kind===E.COLUMN}function hi(i){return ci(i)&&i instanceof Ve}function Oa(i){return i.kind===E.INDEXES}function mi(i){return i.kind===E.INDEX}function yi(i){return mi(i)&&i instanceof Ve}function Ra(i){return i.filter(ci)}function Pa(i){return i.filter(mi)}const Ga=s.createContext(null);function Ua(){const i=s.useContext(Ga);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Ka=({href:i,className:e,children:a})=>o.jsx("a",{href:i,className:e,children:a});Ka.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Ba(i){return i?!!(U(i.defaultValue)||U(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const bi=s.memo(i=>{const{isVisible:e,value:a,className:r}=i;return e?o.jsx("span",{className:r,children:`${a}`}):null});bi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Wa(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const X=s.memo(i=>{const{isVisible:e,value:a}=i,r=Wa();return o.jsx(bi,{isVisible:e,value:a,className:r})});X.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const ye=s.memo(i=>{var D;const{label:e,subheader:a,layoutSide:r,diff:l,colorizingDiff:n}=i,{[G]:t,[R]:d}=i,f=le(),u=r===F?l==null?void 0:l.styles.before:l==null?void 0:l.styles.after,p=(D=(r===F?n==null?void 0:n.styles.before:n==null?void 0:n.styles.after)??u)==null?void 0:D.backgroundColor,m=s.useMemo(()=>p?[K.background(p)]:[],[p]),y=s.useMemo(()=>{const c=n==null?void 0:n.data;if(c){if(ee(c))return r!==F;if(ie(c))return r===F}return(u==null?void 0:u.isContentVisible)??!0},[n,u==null?void 0:u.isContentVisible,r]);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":t,"data-ddl-list-last-row":d?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Ge} min-h-[26px] gap-2 ${m.join(" ")}`,children:[f>0&&o.jsxs("div",{"data-precededby":t,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(De,{level:f}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),y&&o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),a==null?void 0:a(r)]})]})});ye.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const J=s.memo(i=>{var l;const e=He(),a=(l=i.diffsSeverities)==null?void 0:l[ni.AdditionalInfoRow],r=s.useMemo(()=>je(a==null?void 0:a.causedAt),[a==null?void 0:a.causedAt]);switch(e){case Oe:return o.jsx(qe,{diffType:a==null?void 0:a.type,diffTypeCause:r,hidden:!1,children:o.jsx(Ce,{left:o.jsx(ye,{...i,layoutSide:F}),right:o.jsx(ye,{...i,layoutSide:B})})});case Fe:return o.jsx(we,{content:o.jsx(ye,{...i,layoutSide:B})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});J.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};const Ya="ux-badge_ddlapi_primary-key",Di="ux-badge_ddlapi_foreign-key",$a="ux-badge_ddlapi_unique",Xa="ux-badge_ddlapi_not-null",Ja="ux-badge_ddlapi_generated",vi="public",Hi="Default",ki="As",Vi="Values";function za(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===vi?e:`${i.schemaName}.${e}`}function ve(i){return i.join(", ")}const Ie=s.memo(i=>{const{target:e,hideBadge:a=!1}=i,{navigationLinkBuilder:r,navigationLinkComponent:l}=Ua(),n=s.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),t=o.jsx(l,{href:n,className:"ddlapi-foreign-key-link",children:za(e)});return a?t:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Yi,{text:"FK",colorSchema:Di,inline:!0}),t]})});Ie.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."}}};function xi(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function qi(i,e){return!!i||!!e}function wi(i,e){return i?e===F?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function ce(i){const{columnId:e,label:a,colorSchema:r,flagValue:l,flagDiff:n,layoutMode:t,layoutSide:d}=i;if(!qi(l,n))return null;if(!wi(n,d))return xi();const f=n==null?void 0:n.data;return o.jsx(ri,{label:a,colorSchema:r,layoutMode:t,layoutSide:d,isNodeChanged:!1,isContentChanged:!!f,$changes:f},Ci(e,a))}const de=s.memo(i=>{const{columnId:e,value:a,flagDiffs:r,layoutSide:l}=i,n=He(),t=s.useMemo(()=>r??{},[r]),d=s.useMemo(()=>ce({columnId:e,label:"PK",colorSchema:Ya,flagValue:a.isPrimaryKey,flagDiff:t.isPrimaryKey,layoutMode:n,layoutSide:l}),[e,t.isPrimaryKey,n,l,a.isPrimaryKey]),f=s.useMemo(()=>ce({columnId:e,label:"unique",colorSchema:$a,flagValue:a.isUnique,flagDiff:t.isUnique,layoutMode:n,layoutSide:l}),[e,t.isUnique,n,l,a.isUnique]),u=s.useMemo(()=>ce({columnId:e,label:"not null",colorSchema:Xa,flagValue:a.isNotNull,flagDiff:t.isNotNull,layoutMode:n,layoutSide:l}),[e,t.isNotNull,n,l,a.isNotNull]),g=s.useMemo(()=>ce({columnId:e,label:"generated",colorSchema:Ja,flagValue:a.isGenerated,flagDiff:t.isGenerated,layoutMode:n,layoutSide:l}),[e,t.isGenerated,n,l,a.isGenerated]),p=s.useMemo(()=>{const y=t.isForeignKey;if(!qi(a.isForeignKey,y))return null;if(!wi(y,l))return xi();const D=y==null?void 0:y.data;return D?o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(ri,{label:"FK",colorSchema:Di,layoutMode:n,layoutSide:l,isNodeChanged:!1,isContentChanged:!0,$changes:D},Ci(e,"FK")),a.foreignKeyTarget&&o.jsx(Ie,{target:a.foreignKeyTarget,hideBadge:!0})]}):a.foreignKeyTarget?o.jsx(Ie,{target:a.foreignKeyTarget}):null},[e,t.isForeignKey,n,l,a.foreignKeyTarget,a.isForeignKey]),m=s.useMemo(()=>[d,f,u,g,p].filter(Boolean),[p,g,u,d,f]);return m.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:m})});function Ci(i,e){return`${i}-${e}`}de.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  isPrimaryKey?: boolean
  isUnique?: boolean
  isNotNull?: boolean
  isGenerated?: boolean
  isForeignKey?: boolean
  foreignKeyTarget?: DdlApiForeignKeyTarget
}`,signature:{properties:[{key:"isPrimaryKey",value:{name:"boolean",required:!1}},{key:"isUnique",value:{name:"boolean",required:!1}},{key:"isNotNull",value:{name:"boolean",required:!1}},{key:"isGenerated",value:{name:"boolean",required:!1}},{key:"isForeignKey",value:{name:"boolean",required:!1}},{key:"foreignKeyTarget",value:{name:"DdlApiForeignKeyTarget",required:!1}}]}},description:""},flagDiffs:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  isPrimaryKey?: ChangedPropertyMetaData
  isUnique?: ChangedPropertyMetaData
  isNotNull?: ChangedPropertyMetaData
  isGenerated?: ChangedPropertyMetaData
  isForeignKey?: ChangedPropertyMetaData
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}},{key:"isForeignKey",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!1}}]}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ai=s.memo(i=>{const{isVisible:e,value:a,className:r}=i;return e?o.jsx("span",{className:r,children:`${a}`}):null});Ai.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Qa(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=s.memo(i=>{const{isVisible:e,value:a,appearance:r}=i,l=Qa({appearance:r});return o.jsx(Ai,{isVisible:e,value:a,className:l})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ni=i=>{const{node:e,additionalInfoPrecededBy:a=C.DDL_COLUMN_ROW,isLastInList:r=!1,[G]:l}=i,n=ne(),t=e.value(),d=s.useCallback(x=>t?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:x,value:t})]}):o.jsx(o.Fragment,{}),[e.id,t]),f=s.useCallback(x=>{const q=t==null?void 0:t.defaultValue;return U(q)?o.jsx(X,{isVisible:!0,value:q}):o.jsx(o.Fragment,{})},[t]),u=s.useCallback(x=>{const q=t==null?void 0:t.generatedExpression;return U(q)?o.jsx(X,{isVisible:!0,value:q}):o.jsx(o.Fragment,{})},[t]),g=s.useCallback(x=>{var q;return(q=t==null?void 0:t.enumValues)!=null&&q.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((A,L)=>o.jsx(X,{isVisible:!0,value:A},`${A}-${L}`))}):o.jsx(o.Fragment,{})},[t]),p=n===re,m=s.useMemo(()=>p&&!!(t!=null&&t.description),[p,t==null?void 0:t.description]),y=!!(t!=null&&t.enumValues&&t.enumValues.length>0),D=U(t==null?void 0:t.defaultValue),c=U(t==null?void 0:t.generatedExpression),V=r&&!(p&&(y||D||c)),N=r&&y&&!D&&!c,v=r&&D&&!c,H=r&&c;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":l,[R]:V||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:k.body2,subheader:d,usage:I.DdlApiProperty}),m&&o.jsx(te,{"data-precededby":C.DDL_COLUMN_ROW,value:t.description??"",variant:k.body2,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty}),p&&y&&o.jsx(J,{"data-precededby":a,[R]:N||void 0,label:Vi,subheader:g}),p&&D&&o.jsx(J,{"data-precededby":y?C.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[R]:v||void 0,label:Hi,subheader:f}),p&&c&&o.jsx(J,{"data-precededby":D||y?C.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[R]:H||void 0,label:ki,subheader:u})]}):null};Ni.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Za(i){if(hi(i))return ya(i)}function en(i){if(yi(i))return Da(i)}const Si=Re;function _i(i){const e=La(pi(i),{resolveDiff:()=>ma(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ti=i=>{const{node:e,additionalInfoPrecededBy:a=C.DDL_COLUMN_ROW,isLastInList:r=!1,[G]:l}=i,n=ne(),t=e.value(),d=s.useMemo(()=>Si(e),[e]),f=s.useMemo(()=>_i(e),[e]),u=s.useMemo(()=>Za(e),[e]),g=s.useMemo(()=>ba(e),[e]),p=s.useCallback(S=>t?ui(d,S)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(de,{columnId:e.id,layoutSide:S,value:t,flagDiffs:u})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[u,e.id,d,t]),m=s.useCallback(S=>{const h=t==null?void 0:t.defaultValue;return U(h)?o.jsx(X,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[t]),y=s.useCallback(S=>{const h=(()=>{const w=g==null?void 0:g.data;return w?S===F?ie(w)||ae(w)?w.beforeValue:void 0:ee(w)||ae(w)?w.afterValue:void 0:t==null?void 0:t.generatedExpression})();return U(h)?o.jsx(X,{isVisible:!0,value:h}):o.jsx(o.Fragment,{})},[g,t]),D=s.useCallback(S=>{var h;return(h=t==null?void 0:t.enumValues)!=null&&h.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((w,z)=>o.jsx(X,{isVisible:!0,value:w},`${w}-${z}`))}):o.jsx(o.Fragment,{})},[t]),c=n===re,b=!!d,V=s.useMemo(()=>c&&!!(t!=null&&t.description),[c,t==null?void 0:t.description]),N=!!(t!=null&&t.enumValues&&t.enumValues.length>0),v=U(t==null?void 0:t.defaultValue),H=U(t==null?void 0:t.generatedExpression)||!!g,q=r&&!(c&&(N||v||H)),A=r&&N&&!v&&!H,L=r&&v&&!H,T=r&&H;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":l,[R]:q||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:k.body2,subheader:p,usage:I.DdlApiProperty,...f}),V&&!b&&o.jsx(te,{"data-precededby":C.DDL_COLUMN_ROW,value:t.description??"",variant:k.body2,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty}),c&&!b&&N&&o.jsx(J,{"data-precededby":a,[R]:A||void 0,label:Vi,subheader:D}),c&&!b&&v&&o.jsx(J,{"data-precededby":N?C.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[R]:L||void 0,label:Hi,subheader:m}),c&&H&&o.jsx(J,{"data-precededby":v||N?C.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:a,[R]:T||void 0,label:ki,subheader:y,diff:g,colorizingDiff:e.diffs[oe],diffsSeverities:e.diffsSeverities})]}):null};Ti.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function an(i,e){let a=!1;return i.map((r,l)=>{const n=l===i.length-1,t=l===0?C.DDL_SECTION_HEADER:a?C.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:C.DDL_COLUMN_ROW,d=a?C.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:C.DDL_COLUMN_ROW,f={columnNode:r,titlePrecededBy:t,additionalInfoPrecededBy:d,isLastInList:n};return a=e&&Ba(r.value()),f})}const Ei=i=>{const{node:e,[G]:a}=i,r=le(),l=ne(),n=e.value(),t=Ra(e.childrenNodes()),d=l===re,f=s.useMemo(()=>an(t,d),[t,d]);return t.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(Y,{"data-precededby":a,value:(n==null?void 0:n.title)??"Columns",expandable:!1,expanded:!0,variant:k.h2}),o.jsx(ti.Provider,{value:r+1,children:f.map(({columnNode:u,titlePrecededBy:g,additionalInfoPrecededBy:p,isLastInList:m})=>hi(u)?o.jsx(Ti,{"data-precededby":g,additionalInfoPrecededBy:p,isLastInList:m,node:u},u.id):o.jsx(Ni,{"data-precededby":g,additionalInfoPrecededBy:p,isLastInList:m,node:u},u.id))})]})};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Mi=i=>{const{schemaName:e,[G]:a}=i;return e===vi?null:o.jsx("div",{"data-precededby":a,className:`ddl-schema-name-block-row flex h-full ${Pe}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Mi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Li=i=>{const{node:e,isLastInList:a=!1,[G]:r}=i,l=ne(),n=e.value(),t=s.useMemo(()=>n?n.indexName?n.indexName:ve(n.partNames):"",[n]),d=s.useCallback(g=>n?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ve(n.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:g,value:n})]}):o.jsx(o.Fragment,{}),[n]),f=s.useMemo(()=>l===re&&!!(n!=null&&n.description),[l,n==null?void 0:n.description]),u=a;return n?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":r,[R]:u||void 0,value:t,expandable:!1,expanded:!0,variant:k.body2,subheader:n.indexName||n.isUnique?d:void 0,usage:I.DdlApiProperty}),f&&o.jsx(te,{"data-precededby":C.DDL_INDEX_ROW,value:n.description??"",variant:k.body1,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ii=i=>{const{node:e,isLastInList:a=!1,[G]:r}=i,l=ne(),n=e.value(),t=s.useMemo(()=>Si(e),[e]),d=s.useMemo(()=>_i(e),[e]),f=s.useMemo(()=>en(e),[e]),u=s.useMemo(()=>n?n.indexName?n.indexName:ve(n.partNames):"",[n]),g=s.useCallback(D=>n?ui(t,D)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ve(n.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:D,value:n,flagDiffs:f})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,t,n]),p=s.useMemo(()=>l===re&&!!(n!=null&&n.description),[l,n==null?void 0:n.description]),m=!!t,y=a;return n?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":r,[R]:y||void 0,value:u,expandable:!1,expanded:!0,variant:k.body2,subheader:n.indexName||n.isUnique||f!=null&&f.isUnique?g:void 0,usage:I.DdlApiProperty,...d}),p&&!m&&o.jsx(te,{"data-precededby":C.DDL_INDEX_ROW,value:n.description??"",variant:k.body1,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty})]}):null};Ii.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function nn(i){return i.map((e,a)=>({indexNode:e,titlePrecededBy:a===0?C.DDL_SECTION_HEADER:C.DDL_INDEX_ROW,isLastInList:a===i.length-1}))}const ji=i=>{const{node:e,[G]:a}=i,r=le(),l=e.value(),n=Pa(e.childrenNodes()),t=s.useMemo(()=>nn(n),[n]);return n.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(Y,{"data-precededby":a,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:k.h2}),o.jsx(ti.Provider,{value:r+1,children:t.map(({indexNode:d,titlePrecededBy:f,isLastInList:u})=>yi(d)?o.jsx(Ii,{"data-precededby":f,isLastInList:u,node:d},d.id):o.jsx(Li,{"data-precededby":f,isLastInList:u,node:d},d.id))})]})};ji.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const rn=i=>{const{node:e,noHeading:a=!1,[G]:r=C.ROOT}=i,l=ne(),n=e.value(),t=ja(e),d=t.find(Fa),f=t.find(Oa),u=!!(n!=null&&n.schemaName),g=l===re&&!!(n!=null&&n.description),p=a?C.ROOT:C.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!a&&o.jsx(Y,{"data-precededby":r,value:(n==null?void 0:n.tableName)??"",expandable:!1,expanded:!0,variant:k.h1}),u&&o.jsx(Mi,{"data-precededby":p,schemaName:(n==null?void 0:n.schemaName)??""}),g&&o.jsx(te,{"data-precededby":u?C.DDL_TABLE_SCHEMA_ROW:p,value:(n==null?void 0:n.description)??"",variant:k.h4,textFontWeight:"normal",textColor:se}),d&&o.jsx(Ei,{"data-precededby":g?C.DDL_TABLE_DESCRIPTION_ROW:u?C.DDL_TABLE_SCHEMA_ROW:p,node:d}),f&&o.jsx(ji,{"data-precededby":d!=null&&d.childrenNodes().length?C.DDL_COLUMN_ROW:g?C.DDL_TABLE_DESCRIPTION_ROW:u?C.DDL_TABLE_SCHEMA_ROW:p,node:f})]})};rn.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{ke as A,un as B,qe as C,yn as D,Ce as E,fi as F,k as G,G as H,va as I,Sa as J,_a as K,pi as L,La as M,Y as N,we as O,I as P,C as Q,te as R,Ve as S,Ye as T,bn as U,se as V,Pe as X,gn as a,di as b,cn as c,Zi as d,pn as e,Dn as f,$e as g,Ga as h,M as i,rn as j,Ka as k,li as l,si as m,E as n,ra as o,hn as p,xe as q,mn as r,Ne as s,fn as t,$i as u,Qi as v,Ji as w,Xi as x,dn as y,oi as z};
