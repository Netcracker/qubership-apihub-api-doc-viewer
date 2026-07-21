var Ii=Object.defineProperty;var Li=(i,e,n)=>e in i?Ii(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var j=(i,e,n)=>(Li(i,typeof e!="symbol"?e+"":e,n),n);import{u as pe,v as me,x as _e,w as he,Q as Se,R as Ge,T as ye,N as ve,U as Ze,V as S,W as Mi,X as ji,K as le,Y as Oi,M as se,Z as Ri,_ as Ae,$ as U,a0 as B,H as Ue,a1 as W,a2 as ei,a3 as ne,a4 as be,a5 as ke,O as Fi,a6 as ii,k as Me,S as je,a7 as Pi,a8 as Gi,y as Ui,a9 as Ke,aa as G,ab as Ki,ac as ni,ad as Z,h as ee,f as ai}from"./DiffBadge-03c32659.js";import{j as t}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Be={SIMPLE:"simple",COMPLEX:"complex"},Bi={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Wi=Object.values(Bi);new Set(Wi);class xe{aggregateByDescendantDiffs(e,n,a,l){}static isDiffsRecord(e){if(!E(e))return!1;for(const n of Object.values(e))if(!xe.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return E(n)&&(pe(n)||me(n)||_e(n)||he(n))}}function E(i){return ri(i)&&!Array.isArray(i)}function ri(i){return typeof i=="object"&&i!==null}function Yi(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ce(i){return Array.isArray(i)}function oa(i,e,n){let a=i,l=!1;for(const r of e){if(!E(a)&&!Ce(a))return;if(l){let d;ri(a)&&(d=a[r]),!d&&Ce(a)&&n&&(d=a.find(f=>E(f)&&f[n]===r)),a=d,l=!1;continue}a=a[r],Ce(a)&&(l=!0)}return a}function la(i,e){return Object.keys(i).find(n=>i[n]===e)}function sa(i){if(xe.isDiffsRecord(i))return i}class da{constructor(){j(this,"tree",null)}pick(e,n){if(!E(e))return null;const a={};for(const l of n){const r=String(l);if(!(r in e))continue;const o=e[r];Array.isArray(o)?a[r]=[...o]:E(o)?a[r]={...o}:a[r]=o}return this.isPartialOf(a,n)?a:null}isPartialOf(e,n){return Object.keys(e).every(a=>n.includes(a))}}const de=()=>{},ua=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:de,info:de,warn:de,error:de};function $i(i){return i==null||!E(i)&&!Se(i)}function fa(i){const{source:e,tree:n,supportedNodeKinds:a,createNodeFromRaw:l,createNodeParams:r,createStateForSimpleNode:o,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:u,resolveNodeKey:c,isDisallowedValue:g=$i,shouldStopAfterNodeCreation:p}=i;return[({value:v,state:h,key:_,path:y})=>{if(typeof _=="symbol")return;if(!E(v)&&!Se(v))return{value:v};const{alreadyConvertedValuesCache:q,parent:x,container:H}=h,A=q.get(v);if(!A||!f(A)&&!u(A))return{value:v};if(!x||!f(x))return{value:v};const I="#"+Ge(y),V=c(_,v),C=n.createCycledClone(A,I,V,x);return H?H.addNestedNode(C):x&&x.addChildNode(C),{done:!0}},({key:v,value:h,path:_,state:y,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((A,I)=>I(v,A,e,_,y),h)},({key:v,value:h,path:_,rules:y,state:q})=>{if(!y)return{done:!0};if(typeof v=="symbol")return{done:!0};if(g(h))return{done:!0};if(!y.kind||!a.includes(y.kind))return;const{parent:x,container:H}=q,A="#"+Ge(_),I=c(v,h),{kind:V,complex:C=!1}=y,b=r(h,x,H),L=l(A,I,V,C,b);if(!L)return;H?H.addNestedNode(L):x&&x.addChildNode(L);let oe=h;if(p!=null&&p(L,h)){const $=x?x.descendantDiffs:void 0;if(!$||!(v in $))return{done:!0};const F=$[v];if(!F)return{done:!0};const{data:Pe}=F;he(Pe)&&(oe=Pe.beforeValue)}const z=new Map(q.alreadyConvertedValuesCache);(E(h)||Se(h))&&z.set(h,L);let O;return f(L)?O=o(q,L,z):O=d(q,L,z),{value:oe,state:O}}]}class Xi{}class He{constructor(e="#",n="",a,l,r){j(this,"type");j(this,"parent");j(this,"container");j(this,"newDataLevel");j(this,"_value");j(this,"_meta");j(this,"_childrenNodes",[]);j(this,"_nestedNodes",[]);j(this,"_diffs",{});j(this,"_diffsSummary",new Set);j(this,"_descendantDiffs",{});j(this,"_descendantDiffsSummary",new Set);j(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=a,this.isCycle=l;const{type:o=Be.SIMPLE,value:d=null,parent:f=null,container:u=null,newDataLevel:c=!0,meta:g}=r;this.type=o,this.parent=f,this.container=u,this.newDataLevel=c,this._value=d,this._meta=g}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,a){const l=new He(e,n,this.kind,!0,{type:this.type,parent:a,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const a of this._nestedNodes){if(a.id===e)return a;if(n&&a.type===Be.COMPLEX){const l=a.findNestedNode(e,n);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const T={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Ji=Object.values(T);function We(i=T.TABLE){return{"/columns":{"/items":{"/*":()=>We(T.COLUMN)},kind:T.COLUMNS},"/indexes":{"/items":{"/*":()=>We(T.INDEX)},kind:T.INDEXES},kind:i}}function zi(i){return i.kind===ye.Literal&&typeof i.value=="string"}function Qi(i){return i.kind===ye.RawExpr&&typeof i.expr=="string"}function Zi(i){return E(i)&&typeof i.expr=="string"}function en(i){return E(i)&&typeof i.value=="string"}const Ve="titleRow",ti=["isPrimaryKey","isUnique","isNotNull","isGenerated","isForeignKey"],oi=["isUnique"],ga=[ve,Ve,"columnName","description",...ti],ca=[ve,Ve,"indexName",...oi];function nn(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!E(n)||!("before"in n)||!("after"in n)?!1:xe.isDiff(e)}function an(i){return nn(i[Ve])}function rn(i){return E(i)&&i.kind===Ze.Domain&&typeof i.type=="string"}function tn(i){return i.kind===S.BoolType&&typeof i.type=="string"}function on(i){return i.kind===S.IntegerType&&typeof i.type=="string"}function Ye(i){return i.kind===S.DecimalType&&typeof i.type=="string"}function $e(i){return i.kind===S.FloatType&&typeof i.type=="string"}function Xe(i){return i.kind===S.StringType&&typeof i.type=="string"}function Je(i){return i.kind===S.BinaryType&&typeof i.type=="string"}function ze(i){return i.kind===S.TimeType&&typeof i.type=="string"}function ln(i){return i.kind===S.JSONType&&typeof i.type=="string"}function sn(i){return i.kind===S.SpatialType&&typeof i.type=="string"}function dn(i){return i.kind===S.UUIDType&&typeof i.type=="string"}function qe(i){return i.kind===S.EnumType&&Array.isArray(i.values)}function un(i){return i.kind===S.UnsupportedType&&typeof i.type=="string"}function Qe(i){return typeof i.type=="string"}function Te(i){switch(i.kind){case ye.Literal:return zi(i)?i.value:i.kind;case ye.RawExpr:return Qi(i)?i.expr:i.kind;case Mi.NamedDefault:try{return Te(ji(i))}catch{return i.kind}default:return Zi(i)?i.expr:en(i)?i.value:i.kind}}const fn="Columns",gn="Indexes";class pa{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const a=this.extractRealm(e);if(!a)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const l=this.findTableInRealm(a,n);return l?this.buildTableOrientedSpecFromRealm(a,l,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",a.schemas.map(r=>r.name)),null)}buildTableOrientedSpecFromRealm(e,n,a){const l=le(n.attrs,se.Comment);return{tableName:n.name,schemaName:a.schemaName,...l?{description:l.text}:{},columns:{title:fn,items:(n.columns??[]).map(r=>this.buildColumnRowValue(e,n,r,a.schemaName))},indexes:{title:gn,items:(n.indexes??[]).map(r=>this.buildIndexRowValue(r))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var l;const a=e.schemas.find(r=>r.name===n.schemaName);if(a)return(l=a.tables)==null?void 0:l.find(r=>r.name===n.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,a,l){var v,h,_;const r=le(a.attrs,se.Comment),o=(v=a.attrs)==null?void 0:v.find(y=>y.kind===Oi.Identity),d=le(a.attrs,se.GeneratedExpr),f=o!==void 0||d!==void 0,u=this.findForeignKeyForColumn(n,a),c=u!==void 0,g=c&&u?this.buildForeignKeyTarget(e,u,a,l):void 0,p=this.formatColumnType(a.type),w=(h=a.type)==null?void 0:h.type,D=w&&qe(w)?w.values:void 0,m=this.isPrimaryKeyColumn(n,a);return{columnName:a.name,columnType:p,...D?{enumValues:D}:{},isPrimaryKey:m,isForeignKey:c,...g?{foreignKeyTarget:g}:{},isGenerated:f,...o?{generatedBy:"identity"}:{},...d&&!o?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(n,a),isNotNull:!m&&((_=a.type)==null?void 0:_.null)===!1,...a.default!==void 0?{defaultValue:Te(a.default)}:{},...r?{description:r.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((l,r)=>l.seqNo-r.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),a=le(e.attrs,se.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...a?{description:a.text}:{}}}findSchemaNameForTable(e,n){var a;for(const l of e.schemas)if((a=l.tables)!=null&&a.some(r=>r===n))return l.name}isPrimaryKeyColumn(e,n){var a;return(((a=e.primaryKey)==null?void 0:a.parts)??[]).some(l=>{var r;return((r=l.column)==null?void 0:r.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(a=>{var l,r,o;return a.unique===!0&&((l=a.parts)==null?void 0:l.length)===1&&((o=(r=a.parts[0])==null?void 0:r.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeyForColumn(e,n){var a;return(a=e.foreignKeys)==null?void 0:a.find(l=>{var r;return(r=l.columns)==null?void 0:r.some(o=>this.isSameForeignKeyColumn(o,n))})}buildForeignKeyTarget(e,n,a,l){var u,c;const r=((u=n.columns)==null?void 0:u.findIndex(g=>this.isSameForeignKeyColumn(g,a)))??-1;if(r<0)return;const o=n.refTable,d=(c=n.refColumns)==null?void 0:c[r];if(!o||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,o,l);if(f)return{schemaName:f,tableName:o.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,n,a){const l=this.findSchemaNameForTable(e,n);if(l)return l;const r=this.findUniqueSchemaNameForTableName(e,n.name);return r||a}findUniqueSchemaNameForTableName(e,n){const a=e.schemas.filter(l=>{var r;return(r=l.tables)==null?void 0:r.some(o=>o.name===n)}).map(l=>l.name);if(a.length===1)return a[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(rn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return tn(e)?{kind:S.BoolType,typeName:e.type,label:n}:on(e)?{kind:S.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ye(e)?{kind:S.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:$e(e)?{kind:S.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Xe(e)?{kind:S.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:Je(e)?{kind:S.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ze(e)?{kind:S.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:ln(e)?{kind:S.JSONType,typeName:e.type,label:n}:sn(e)?{kind:S.SpatialType,typeName:e.type,label:n}:dn(e)?{kind:S.UUIDType,typeName:e.type,label:n}:qe(e)?{kind:S.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:un(e)?{kind:S.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:Qe(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Ze.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return Ye(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Xe(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Je(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):$e(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):ze(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):qe(e)?n=e.type??e.values[0]??"enum":Qe(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const a=n.filter(l=>l!==void 0);return a.length===0?e:`${e} (${a.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Te(e.expr):""}}const cn=new Set([T.TABLE,T.COLUMNS,T.COLUMN,T.INDEXES,T.INDEX]);class li extends Xi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,a,l){return!Yi(a)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(a,li.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return cn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case T.TABLE:return["tableName","schemaName","description"];case T.COLUMNS:case T.INDEXES:return["title"];case T.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTarget","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case T.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function pn(i){if(an(i.diffs))return i.diffs[Ve]}function mn(i){const e=i.diffs[ve];if(e&&(pe(e.data)||me(e.data)))return e}function si(i,e){return i?(e==="origin"?i.styles.before:i.styles.after).isHeaderVisible:!0}const hn=s.createContext(!1),Oe=i=>{const{children:e,diffType:n,diffTypeCause:a,hidden:l=!1}=i;return l||!n?e:t.jsxs("div",{className:"flex flex-row relative w-full",children:[t.jsx(Ri,{variant:n,message:a}),e]})};Oe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ne=s.memo(i=>{const{content:e}=i;return t.jsx("div",{className:"flex flex-row w-full",children:e})});Ne.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const we=s.memo(i=>{const{left:e,right:n}=i;return t.jsxs("div",{className:"flex flex-row w-full",children:[t.jsx("div",{className:"w-1/2",children:e}),t.jsx("div",{className:"w-1/2",children:n})]})});we.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Re="px-4",yn="",bn="px-4",Fe="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var k=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(k||{});const Dn=i=>{const{isExpandable:e,expanded:n,setExpanded:a,variant:l}=i,r=s.useCallback(()=>{a==null||a(o=>!o)},[a]);return t.jsx(t.Fragment,{children:e&&t.jsx("div",{className:"mt-1",children:t.jsx("a",{className:`text-value-expander ${xn(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:r,children:n?"Show less":"Show more"})})})},di=s.memo(i=>{const{value:e,variant:n,layoutSide:a,onClick:l,diff:r,usage:o,highlightingMode:d=Ae.Default}=i,f=d===Ae.Default,u=d===Ae.Invisible,{textFontWeight:c,labelFontWeight:g,labelColor:p,textColor:w,label:D}=i,[m,v]=s.useState(!1),h=s.useCallback((A,I,V)=>{if(V)return null;const C=u?"":I.join(" "),b=`text-value ${l?"hover:cursor-pointer":""} ${c?`font-${c}`:""}`.trim(),L=`${b} ${C}`.trim(),oe={onClick:l,...w!=null&&w.trim()?{style:{color:w}}:{}};A=m?A:kn(A);const z=(O,$)=>{const F={...oe,className:$};switch(n){case k.h1:return t.jsx("h1",{...F,children:O});case k.h2:return t.jsx("h2",{...F,children:O});case k.h3:return t.jsx("h3",{...F,children:O});case k.h4:return t.jsx("h4",{...F,children:O});case k.h5:return t.jsx("h5",{...F,children:O});case k.h6:return t.jsx("h6",{...F,children:O});case k.body1:return t.jsx("span",{...F,className:`${$} text-value-body1`.trim(),children:O});case k.body2:return t.jsx("span",{...F,className:`${$} text-value-body2`.trim(),children:O})}};return D?z(t.jsxs(t.Fragment,{children:[t.jsx("span",{className:g?`font-${g}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${D}: `}),t.jsx("span",{className:C,children:A})]}),b):z(A,L)},[m,u,D,p,g,l,w,c,n]),_=s.useCallback(A=>{const I=[];let V=A,C=!1;if(r){const{data:b,styles:L}=r;switch(a){case W:I.push(B.highlighter(L.before.textHighlighterColor)),f&&(me(b)&&(V=Q(b.beforeValue)?b.beforeValue:V),he(b)&&(o===M.JsoProperty&&!u&&I.push(B.highlighter(Ue.Yellow)),V=Q(b.beforeValue)?b.beforeValue:V),_e(b)&&(V=Q(b.beforeKey)?b.beforeKey:V)),pe(b)&&(C=!0);break;case U:I.push(B.highlighter(L.after.textHighlighterColor)),f&&(pe(b)&&(V=Q(b.afterValue)?b.afterValue:V),he(b)&&(o===M.JsoProperty&&!u&&I.push(B.highlighter(Ue.Yellow)),V=Q(b.afterValue)?b.afterValue:V),_e(b)&&(V=Q(b.afterKey)?b.afterKey:V)),me(b)&&(C=!0);break}}return[V,I,C]},[r,f,u,a,o]),[y,q,x]=_(e);return s.useMemo(()=>t.jsxs("div",{className:"flex flex-col items-start gap-1",children:[h(y,q,x),!x&&t.jsx(Dn,{isExpandable:vn(y),expanded:m,setExpanded:v,variant:n})]}),[h,y,q,x,m,v,n])}),Ee=5,Ie=300;function vn(i){return i?i.length>Ie||ei.trim(i.split(`
`)).length>Ee:!1}function kn(i){if(!i)return;if(i.length>Ie)return i.slice(0,Ie)+"...";const e=ei.trim(i.split(`
`));return e.length>Ee?e.slice(0,Ee).join(`
`)+"...":i}function Q(i){return typeof i=="string"}function xn(i){switch(i){case k.h1:return"text-value-expander--h1";case k.h2:return"text-value-expander--h2";case k.h3:return"text-value-expander--h3";case k.h4:return"text-value-expander--h4";case k.h5:return"text-value-expander--h5";case k.h6:return"text-value-expander--h6";case k.body1:return"text-value-expander--body1";case k.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const P="data-precededby",R="data-ddl-list-last-row";var N=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(N||{}),K=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(K||{});const Hn={[K.DdlApiProperty]:Fe},Vn={[K.DdlApiProperty]:["min-h-[26px]"]};function Nn(i){const e=Hn[i]??Re,n=Vn[i]??[];return[e,...n].join(" ")}const fe=s.memo(i=>{const{value:e,variant:n,layoutSide:a,usage:l=K.Default}=i,{label:r,labelFontWeight:o,textFontWeight:d,labelColor:f,textColor:u}=i,{[P]:c}=i,{diff:g,descendantDiffs:p,diffsSeverities:w}=i,D=ne(),m=l===K.DdlApiProperty,v=m&&D>0,h=s.useMemo(()=>{if(!g)return[];const{data:q,styles:x}=g;if(!q)return[];const H=[];return a===W&&H.push(B.background(x.before.backgroundColor)),a===U&&H.push(B.background(x.after.backgroundColor)),H},[g,a]),_=s.useMemo(()=>Nn(l),[l]),y=t.jsx(di,{label:r,labelFontWeight:o,textFontWeight:d,labelColor:f,textColor:u,value:e,variant:n,layoutSide:a,diff:g});return t.jsxs("div",{"data-precededby":c,className:`text-row-content flex h-full ${m?"items-stretch":""} ${_} gap-2 ${h.join(" ")}`,children:[v&&t.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(be,{level:D}),t.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m?t.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:y}):y]})});fe.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ie=s.memo(i=>{const e=ke(),{diffsSeverities:n,diffsSeverityPlacement:a=Fi.DescriptionRow}=i,l=s.useMemo(()=>n==null?void 0:n[a],[n,a]),r=s.useMemo(()=>l==null?void 0:l.type,[l]),o=s.useMemo(()=>ii(l==null?void 0:l.causedAt),[l]);switch(e){case je:return t.jsx(Oe,{diffType:r,diffTypeCause:o,hidden:!1,children:t.jsx(we,{left:t.jsx(fe,{...i,layoutSide:W}),right:t.jsx(fe,{...i,layoutSide:U})})});case Me:return t.jsx(Ne,{content:t.jsx(fe,{...i,layoutSide:U})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ie.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const ae="#353C4E",wn=s.createContext(void 0);function An(){return s.useContext(wn)}const ui=i=>{const{expandable:e,expanded:n,onClick:a,level:l}=i,r=s.useContext(hn),o=l>0,d=a??(()=>{r&&console.warn("Expander callback is not provided.")});return!e&&!o?null:t.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&t.jsx(Pi,{short:e}),e&&n!==void 0&&t.jsx(Gi,{onToggle:d,expanded:n})]})};ui.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Cn={[M.JsoProperty]:yn,[M.DdlApiSection]:bn,[M.DdlApiProperty]:Fe},qn={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function _n(i){const e=Cn[i]??Re,n=qn[i]??[];return[e,...n].join(" ")}const ge=s.memo(i=>{const{expandable:e,expanded:n,onClickExpander:a,value:l,variant:r,layoutSide:o,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:u,usage:c=M.Default,highlightingMode:g=Ui}=i,{diff:p,descendantDiffs:w,diffsSeverities:D}=i,{[P]:m,[R]:v}=i,h=s.useMemo(()=>{switch(c){case M.Default:return g.get(Ke.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return g.get(Ke.JsoPropertyKey)}},[g,c]),_=ne(),y=An(),q=s.useMemo(()=>y?o===W?y.beforeLevel:y.afterLevel:_,[o,_,y]),x=s.useMemo(()=>{const C=[];if(!p)return C;const{data:b,styles:L}=p;return b&&(o===W&&C.push(B.background(L.before.backgroundColor)),o===U&&C.push(B.background(L.after.backgroundColor))),C},[p,o]),H=s.useMemo(()=>f?t.jsx(di,{"data-precededby":m,value:l,variant:r,layoutSide:o,diff:p,usage:c,highlightingMode:h,onClick:a}):null,[f,m,l,r,o,p,c,h,a]),A=c===M.DdlApiProperty,I=s.useMemo(()=>d?t.jsxs(t.Fragment,{children:[(e||q>0)&&t.jsxs("div",{"data-precededby":m,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(be,{level:q}),t.jsx(ui,{expandable:e,expanded:n,onClick:a,level:q})]}),!A&&H]}):q>0&&t.jsx(be,{level:q}),[d,e,q,m,n,a,H,A]),V=s.useMemo(()=>_n(c),[c]);return t.jsxs("div",{"data-precededby":m,"data-ddl-list-last-row":v?!0:void 0,className:`title-row-content flex ${A?"items-stretch":"items-center"} h-full ${V} gap-2 ${x.join(" ")}`,children:[I,A?t.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[H,u==null?void 0:u(o)]}):u==null?void 0:u(o)]})});ge.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Y=s.memo(i=>{const e=ke(),{diff:n,diffsSeverities:a,enableHeaderValue:l}=i,r=s.useMemo(()=>a==null?void 0:a["title-row"],[a]),o=s.useMemo(()=>r==null?void 0:r.type,[r]),d=s.useMemo(()=>ii(r==null?void 0:r.causedAt),[r]);switch(e){case je:return t.jsx(Oe,{diffType:o,diffTypeCause:d,hidden:!1,children:t.jsx(we,{left:t.jsx(ge,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:W}),right:t.jsx(ge,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:U})})});case Me:return t.jsx(Ne,{content:t.jsx(ge,{...i,layoutSide:U})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Y.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function ma(i,e){return s.useMemo(()=>e(i)?fi(i):{},[e,i])}function fi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Sn(i,e={}){const{diffKey:n,fallbackToNodeDiff:a=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:r,resolveDiff:o}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!d)return{};const c=Object.entries(d),g=D=>{const m=c.find(([v])=>v===String(D));return m==null?void 0:m[1]},p=n?g(n):void 0;return{diff:o?o(d,g):a?d[ve]??p:p,...l?{descendantDiffs:f}:{},diffsSeverities:u,...r?{diffsSeverityPlacement:r}:{}}}function Tn(i){return Ji.includes(i.kind)}function En(i){return i.childrenNodes().filter(Tn)}function ha(i){return i.kind===T.TABLE}function In(i){return i.kind===T.COLUMNS}function gi(i){return i.kind===T.COLUMN}function Ln(i){return gi(i)&&i instanceof He}function Mn(i){return i.kind===T.INDEXES}function ci(i){return i.kind===T.INDEX}function jn(i){return ci(i)&&i instanceof He}function On(i){return i.filter(gi)}function Rn(i){return i.filter(ci)}const Fn=s.createContext(null);function Pn(){const i=s.useContext(Fn);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Gn=({href:i,className:e,children:n})=>t.jsx("a",{href:i,className:e,children:n});Gn.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Un(i){return i?!!(G(i.defaultValue)||G(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Kn="ux-badge_ddlapi_primary-key",pi="ux-badge_ddlapi_foreign-key",Bn="ux-badge_ddlapi_unique",Wn="ux-badge_ddlapi_not-null",Yn="ux-badge_ddlapi_generated",mi="public",hi="Default",yi="As",bi="Values";function $n(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===mi?e:`${i.schemaName}.${e}`}function De(i){return i.join(", ")}const Le=s.memo(i=>{const{target:e,hideBadge:n=!1}=i,{navigationLinkBuilder:a,navigationLinkComponent:l}=Pn(),r=s.useMemo(()=>a(e.schemaName,e.tableName,e.columnName),[a,e]),o=t.jsx(l,{href:r,className:"ddlapi-foreign-key-link",children:$n(e)});return n?o:t.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[t.jsx(Ki,{text:"FK",colorSchema:pi,inline:!0}),o]})});Le.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."}}};function Di(){return t.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function vi(i,e){return!!i||!!e}function ki(i,e){return i?e===W?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function ue(i){const{label:e,colorSchema:n,flagValue:a,flagDiff:l,layoutMode:r,layoutSide:o}=i;if(!vi(a,l))return null;if(!ki(l,o))return Di();const d=l==null?void 0:l.data;return t.jsx(ni,{label:e,colorSchema:n,layoutMode:r,layoutSide:o,isNodeChanged:!1,isContentChanged:!!d,$changes:d})}const re=s.memo(i=>{const{value:e,flagDiffs:n,layoutSide:a}=i,l=ke(),r=s.useMemo(()=>n??{},[n]),o=s.useMemo(()=>ue({label:"PK",colorSchema:Kn,flagValue:e.isPrimaryKey,flagDiff:r.isPrimaryKey,layoutMode:l,layoutSide:a}),[r.isPrimaryKey,l,a,e.isPrimaryKey]),d=s.useMemo(()=>ue({label:"unique",colorSchema:Bn,flagValue:e.isUnique,flagDiff:r.isUnique,layoutMode:l,layoutSide:a}),[r.isUnique,l,a,e.isUnique]),f=s.useMemo(()=>ue({label:"not null",colorSchema:Wn,flagValue:e.isNotNull,flagDiff:r.isNotNull,layoutMode:l,layoutSide:a}),[r.isNotNull,l,a,e.isNotNull]),u=s.useMemo(()=>ue({label:"generated",colorSchema:Yn,flagValue:e.isGenerated,flagDiff:r.isGenerated,layoutMode:l,layoutSide:a}),[r.isGenerated,l,a,e.isGenerated]),c=s.useMemo(()=>{const p=r.isForeignKey;if(!vi(e.isForeignKey,p))return null;if(!ki(p,a))return Di();const w=p==null?void 0:p.data;return w?t.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[t.jsx(ni,{label:"FK",colorSchema:pi,layoutMode:l,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:w}),e.foreignKeyTarget&&t.jsx(Le,{target:e.foreignKeyTarget,hideBadge:!0})]}):e.foreignKeyTarget?t.jsx(Le,{target:e.foreignKeyTarget}):null},[r.isForeignKey,l,a,e.foreignKeyTarget,e.isForeignKey]),g=s.useMemo(()=>[o,d,f,u,c].filter(Boolean),[c,u,f,o,d]);return g.length===0?null:t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:g})});re.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const xi=s.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?t.jsx("span",{className:a,children:`${n}`}):null});xi.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Xn(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const te=s.memo(i=>{const{isVisible:e,value:n,appearance:a}=i,l=Xn({appearance:a});return t.jsx(xi,{isVisible:e,value:n,className:l})});te.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const ce=s.memo(i=>{const{label:e,subheader:n,layoutSide:a}=i,{[P]:l,[R]:r}=i,o=ne();return t.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":l,"data-ddl-list-last-row":r?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Fe} min-h-[26px] gap-2`,children:[o>0&&t.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(be,{level:o}),t.jsx("div",{className:"w-4","aria-hidden":"true"})]}),t.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[t.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(a)]})]})});ce.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const X=s.memo(i=>{const e=ke();switch(e){case je:return t.jsx(we,{left:t.jsx(ce,{...i,layoutSide:W}),right:t.jsx(ce,{...i,layoutSide:U})});case Me:return t.jsx(Ne,{content:t.jsx(ce,{...i,layoutSide:U})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});X.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""}}};const Hi=s.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?t.jsx("span",{className:a,children:`${n}`}):null});Hi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Jn(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const J=s.memo(i=>{const{isVisible:e,value:n}=i,a=Jn();return t.jsx(Hi,{isVisible:e,value:n,className:a})});J.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const Vi=i=>{const{node:e,additionalInfoPrecededBy:n=N.DDL_COLUMN_ROW,isLastInList:a=!1,[P]:l}=i,r=Z(),o=e.value(),d=s.useCallback(x=>o?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(te,{isVisible:!0,value:o.columnType.label,appearance:"text"}),t.jsx(re,{layoutSide:x,value:o})]}):t.jsx(t.Fragment,{}),[o]),f=s.useCallback(x=>{const H=o==null?void 0:o.defaultValue;return G(H)?t.jsx(J,{isVisible:!0,value:H}):t.jsx(t.Fragment,{})},[o]),u=s.useCallback(x=>{const H=o==null?void 0:o.generatedExpression;return G(H)?t.jsx(J,{isVisible:!0,value:H}):t.jsx(t.Fragment,{})},[o]),c=s.useCallback(x=>{var H;return(H=o==null?void 0:o.enumValues)!=null&&H.length?t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((A,I)=>t.jsx(J,{isVisible:!0,value:A},`${A}-${I}`))}):t.jsx(t.Fragment,{})},[o]),g=r===ee,p=s.useMemo(()=>g&&!!(o!=null&&o.description),[g,o==null?void 0:o.description]),w=!!(o!=null&&o.enumValues&&o.enumValues.length>0),D=G(o==null?void 0:o.defaultValue),m=G(o==null?void 0:o.generatedExpression),h=a&&!(g&&(w||D||m)),_=a&&w&&!D&&!m,y=a&&D&&!m,q=a&&m;return o?t.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":l,[R]:h||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:k.body2,subheader:d,usage:M.DdlApiProperty}),p&&t.jsx(ie,{"data-precededby":N.DDL_COLUMN_ROW,value:o.description??"",variant:k.body2,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty}),g&&w&&t.jsx(X,{"data-precededby":n,[R]:_||void 0,label:bi,subheader:c}),g&&D&&t.jsx(X,{"data-precededby":w?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:y||void 0,label:hi,subheader:f}),g&&m&&t.jsx(X,{"data-precededby":D||w?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:q||void 0,label:yi,subheader:u})]}):null};Vi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ni(i,e){const n={};let a=!1;for(const l of e){const r=i[l];r&&(n[l]=r,a=!0)}return a?n:void 0}function zn(i){return Ni(i.diffs,ti)}function Qn(i){return Ni(i.diffs,oi)}const wi=mn;function Ai(i){const e=Sn(fi(i),{resolveDiff:()=>pn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Ci=i=>{const{node:e,additionalInfoPrecededBy:n=N.DDL_COLUMN_ROW,isLastInList:a=!1,[P]:l}=i,r=Z(),o=e.value(),d=s.useMemo(()=>wi(e),[e]),f=s.useMemo(()=>Ai(e),[e]),u=s.useMemo(()=>zn(e),[e]),c=s.useCallback(V=>o?si(d,V)?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(te,{isVisible:!0,value:o.columnType.label,appearance:"text"}),t.jsx(re,{layoutSide:V,value:o,flagDiffs:u})]}):t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{}),[u,d,o]),g=s.useCallback(V=>{const C=o==null?void 0:o.defaultValue;return G(C)?t.jsx(J,{isVisible:!0,value:C}):t.jsx(t.Fragment,{})},[o]),p=s.useCallback(V=>{const C=o==null?void 0:o.generatedExpression;return G(C)?t.jsx(J,{isVisible:!0,value:C}):t.jsx(t.Fragment,{})},[o]),w=s.useCallback(V=>{var C;return(C=o==null?void 0:o.enumValues)!=null&&C.length?t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((b,L)=>t.jsx(J,{isVisible:!0,value:b},`${b}-${L}`))}):t.jsx(t.Fragment,{})},[o]),D=r===ee,m=!!d,v=s.useMemo(()=>D&&!!(o!=null&&o.description),[D,o==null?void 0:o.description]),h=!!(o!=null&&o.enumValues&&o.enumValues.length>0),_=G(o==null?void 0:o.defaultValue),y=G(o==null?void 0:o.generatedExpression),x=a&&!(D&&(h||_||y)),H=a&&h&&!_&&!y,A=a&&_&&!y,I=a&&y;return o?t.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":l,[R]:x||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:k.body2,subheader:c,usage:M.DdlApiProperty,...f}),v&&!m&&t.jsx(ie,{"data-precededby":N.DDL_COLUMN_ROW,value:o.description??"",variant:k.body2,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty}),D&&!m&&h&&t.jsx(X,{"data-precededby":n,[R]:H||void 0,label:bi,subheader:w}),D&&!m&&_&&t.jsx(X,{"data-precededby":h?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:A||void 0,label:hi,subheader:g}),D&&!m&&y&&t.jsx(X,{"data-precededby":_||h?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:I||void 0,label:yi,subheader:p})]}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Zn(i,e){let n=!1;return i.map((a,l)=>{const r=l===i.length-1,o=l===0?N.DDL_SECTION_HEADER:n?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:N.DDL_COLUMN_ROW,d=n?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:N.DDL_COLUMN_ROW,f={columnNode:a,titlePrecededBy:o,additionalInfoPrecededBy:d,isLastInList:r};return n=e&&Un(a.value()),f})}const qi=i=>{const{node:e,[P]:n}=i,a=ne(),l=Z(),r=e.value(),o=On(e.childrenNodes()),d=l===ee,f=s.useMemo(()=>Zn(o,d),[o,d]);return o.length===0?null:t.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[t.jsx(Y,{"data-precededby":n,value:(r==null?void 0:r.title)??"Columns",expandable:!1,expanded:!0,variant:k.h2}),t.jsx(ai.Provider,{value:a+1,children:f.map(({columnNode:u,titlePrecededBy:c,additionalInfoPrecededBy:g,isLastInList:p})=>Ln(u)?t.jsx(Ci,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id):t.jsx(Vi,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id))})]})};qi.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const _i=i=>{const{schemaName:e,[P]:n}=i;return e===mi?null:t.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Re}`,children:t.jsx("span",{className:"ddl-schema-name-block",children:e})})};_i.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Si=i=>{const{node:e,isLastInList:n=!1,[P]:a}=i,l=Z(),r=e.value(),o=s.useMemo(()=>r?r.indexName?r.indexName:De(r.partNames):"",[r]),d=s.useCallback(c=>r?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.indexName&&t.jsx(te,{isVisible:!0,value:`(${De(r.partNames)})`,appearance:"text"}),t.jsx(re,{layoutSide:c,value:r})]}):t.jsx(t.Fragment,{}),[r]),f=s.useMemo(()=>l===ee&&!!(r!=null&&r.description),[l,r==null?void 0:r.description]),u=n;return r?t.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":a,[R]:u||void 0,value:o,expandable:!1,expanded:!0,variant:k.body2,subheader:r.indexName||r.isUnique?d:void 0,usage:M.DdlApiProperty}),f&&t.jsx(ie,{"data-precededby":N.DDL_INDEX_ROW,value:r.description??"",variant:k.body1,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty})]}):null};Si.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ti=i=>{const{node:e,isLastInList:n=!1,[P]:a}=i,l=Z(),r=e.value(),o=s.useMemo(()=>wi(e),[e]),d=s.useMemo(()=>Ai(e),[e]),f=s.useMemo(()=>Qn(e),[e]),u=s.useMemo(()=>r?r.indexName?r.indexName:De(r.partNames):"",[r]),c=s.useCallback(D=>r?si(o,D)?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.indexName&&t.jsx(te,{isVisible:!0,value:`(${De(r.partNames)})`,appearance:"text"}),t.jsx(re,{layoutSide:D,value:r,flagDiffs:f})]}):t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{}),[f,o,r]),g=s.useMemo(()=>l===ee&&!!(r!=null&&r.description),[l,r==null?void 0:r.description]),p=!!o,w=n;return r?t.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":a,[R]:w||void 0,value:u,expandable:!1,expanded:!0,variant:k.body2,subheader:r.indexName||r.isUnique||f!=null&&f.isUnique?c:void 0,usage:M.DdlApiProperty,...d}),g&&!p&&t.jsx(ie,{"data-precededby":N.DDL_INDEX_ROW,value:r.description??"",variant:k.body1,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty})]}):null};Ti.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ea(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?N.DDL_SECTION_HEADER:N.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Ei=i=>{const{node:e,[P]:n}=i,a=ne(),l=e.value(),r=Rn(e.childrenNodes()),o=s.useMemo(()=>ea(r),[r]);return r.length===0?null:t.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[t.jsx(Y,{"data-precededby":n,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:k.h2}),t.jsx(ai.Provider,{value:a+1,children:o.map(({indexNode:d,titlePrecededBy:f,isLastInList:u})=>jn(d)?t.jsx(Ti,{"data-precededby":f,isLastInList:u,node:d},d.id):t.jsx(Si,{"data-precededby":f,isLastInList:u,node:d},d.id))})]})};Ei.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const ia=i=>{const{node:e,noHeading:n=!1,[P]:a=N.ROOT}=i,l=Z(),r=e.value(),o=En(e),d=o.find(In),f=o.find(Mn),u=!!(r!=null&&r.schemaName),c=l===ee&&!!(r!=null&&r.description),g=n?N.ROOT:N.DDL_TABLE_HEADER_ROW;return t.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&t.jsx(Y,{"data-precededby":a,value:(r==null?void 0:r.tableName)??"",expandable:!1,expanded:!0,variant:k.h1}),u&&t.jsx(_i,{"data-precededby":g,schemaName:(r==null?void 0:r.schemaName)??""}),c&&t.jsx(ie,{"data-precededby":u?N.DDL_TABLE_SCHEMA_ROW:g,value:(r==null?void 0:r.description)??"",variant:k.h4,textFontWeight:"normal",textColor:ae}),d&&t.jsx(qi,{"data-precededby":c?N.DDL_TABLE_DESCRIPTION_ROW:u?N.DDL_TABLE_SCHEMA_ROW:g,node:d}),f&&t.jsx(Ei,{"data-precededby":d!=null&&d.childrenNodes().length?N.DDL_COLUMN_ROW:c?N.DDL_TABLE_DESCRIPTION_ROW:u?N.DDL_TABLE_SCHEMA_ROW:g,node:f})]})};ia.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{xe as A,la as B,Oe as C,pa as D,we as E,di as F,k as G,P as H,hn as I,wn as J,An as K,fi as L,Sn as M,Y as N,Ne as O,M as P,N as Q,ie as R,He as S,Be as T,ma as U,ae as V,Re as X,da as a,li as b,fa as c,Ji as d,ua as e,ha as f,We as g,Fn as h,E as i,ia as j,Gn as k,ti as l,oi as m,T as n,nn as o,ga as p,Ve as q,ca as r,Ce as s,sa as t,Bi as u,Xi as v,Yi as w,Wi as x,oa as y,ri as z};
