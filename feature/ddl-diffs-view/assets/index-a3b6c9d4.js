var ji=Object.defineProperty;var Oi=(i,e,n)=>e in i?ji(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var j=(i,e,n)=>(Oi(i,typeof e!="symbol"?e+"":e,n),n);import{u as pe,v as me,x as _e,w as he,R as Se,T as Ue,U as ye,N as ve,V as ei,W as S,X as Ri,Y as Fi,K as le,O as Pi,M as se,Z as Gi,_ as Ae,$ as U,a0 as B,H as Ke,a1 as W,a2 as ii,a3 as ne,a4 as be,a5 as ke,P as Ui,a6 as ni,k as Me,S as je,a7 as Ki,a8 as Bi,y as Wi,a9 as Be,aa as G,ab as Yi,ac as ai,ad as Z,h as ee,f as ri}from"./DiffBadge-20c083b3.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const We={SIMPLE:"simple",COMPLEX:"complex"},$i={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Xi=Object.values($i);new Set(Xi);class xe{aggregateByDescendantDiffs(e,n,r,l){}static isDiffsRecord(e){if(!E(e))return!1;for(const n of Object.values(e))if(!xe.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return E(n)&&(pe(n)||me(n)||_e(n)||he(n))}}function E(i){return ti(i)&&!Array.isArray(i)}function ti(i){return typeof i=="object"&&i!==null}function Ji(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ce(i){return Array.isArray(i)}function sa(i,e,n){let r=i,l=!1;for(const a of e){if(!E(r)&&!Ce(r))return;if(l){let d;ti(r)&&(d=r[a]),!d&&Ce(r)&&n&&(d=r.find(f=>E(f)&&f[n]===a)),r=d,l=!1;continue}r=r[a],Ce(r)&&(l=!0)}return r}function da(i,e){return Object.keys(i).find(n=>i[n]===e)}function ua(i){if(xe.isDiffsRecord(i))return i}class fa{constructor(){j(this,"tree",null)}pick(e,n){if(!E(e))return null;const r={};for(const l of n){const a=String(l);if(!(a in e))continue;const t=e[a];Array.isArray(t)?r[a]=[...t]:E(t)?r[a]={...t}:r[a]=t}return this.isPartialOf(r,n)?r:null}isPartialOf(e,n){return Object.keys(e).every(r=>n.includes(r))}}const de=()=>{},ga=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:de,info:de,warn:de,error:de};function zi(i){return i==null||!E(i)&&!Se(i)}function ca(i){const{source:e,tree:n,supportedNodeKinds:r,createNodeFromRaw:l,createNodeParams:a,createStateForSimpleNode:t,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:u,resolveNodeKey:c,isDisallowedValue:g=zi,shouldStopAfterNodeCreation:p}=i;return[({value:k,state:y,key:_,path:b})=>{if(typeof _=="symbol")return;if(!E(k)&&!Se(k))return{value:k};const{alreadyConvertedValuesCache:q,parent:H,container:V}=y,A=q.get(k);if(!A||!f(A)&&!u(A))return{value:k};if(!H||!f(H))return{value:k};const I="#"+Ue(b),N=c(_,k),C=n.createCycledClone(A,I,N,H);return V?V.addNestedNode(C):H&&H.addChildNode(C),{done:!0}},({key:k,value:y,path:_,state:b,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((A,I)=>I(k,A,e,_,b),y)},({key:k,value:y,path:_,rules:b,state:q})=>{if(!b)return{done:!0};if(typeof k=="symbol")return{done:!0};if(g(y))return{done:!0};if(!b.kind||!r.includes(b.kind))return;const{parent:H,container:V}=q,A="#"+Ue(_),I=c(k,y),{kind:N,complex:C=!1}=b,D=a(y,H,V),L=l(A,I,N,C,D);if(!L)return;V?V.addNestedNode(L):H&&H.addChildNode(L);let oe=y;if(p!=null&&p(L,y)){const $=H?H.descendantDiffs:void 0;if(!$||!(k in $))return{done:!0};const F=$[k];if(!F)return{done:!0};const{data:Ge}=F;he(Ge)&&(oe=Ge.beforeValue)}const z=new Map(q.alreadyConvertedValuesCache);(E(y)||Se(y))&&z.set(y,L);let O;return f(L)?O=t(q,L,z):O=d(q,L,z),{value:oe,state:O}}]}class Qi{}class He{constructor(e="#",n="",r,l,a){j(this,"type");j(this,"parent");j(this,"container");j(this,"newDataLevel");j(this,"_value");j(this,"_meta");j(this,"_childrenNodes",[]);j(this,"_nestedNodes",[]);j(this,"_diffs",{});j(this,"_diffsSummary",new Set);j(this,"_descendantDiffs",{});j(this,"_descendantDiffsSummary",new Set);j(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=r,this.isCycle=l;const{type:t=We.SIMPLE,value:d=null,parent:f=null,container:u=null,newDataLevel:c=!0,meta:g}=a;this.type=t,this.parent=f,this.container=u,this.newDataLevel=c,this._value=d,this._meta=g}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,r){const l=new He(e,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const r of this._nestedNodes){if(r.id===e)return r;if(n&&r.type===We.COMPLEX){const l=r.findNestedNode(e,n);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const T={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Zi=Object.values(T);function Ye(i=T.TABLE){return{"/columns":{"/items":{"/*":()=>Ye(T.COLUMN)},kind:T.COLUMNS},"/indexes":{"/items":{"/*":()=>Ye(T.INDEX)},kind:T.INDEXES},kind:i}}function en(i){return i.kind===ye.Literal&&typeof i.value=="string"}function nn(i){return i.kind===ye.RawExpr&&typeof i.expr=="string"}function an(i){return E(i)&&typeof i.expr=="string"}function rn(i){return E(i)&&typeof i.value=="string"}const Ve="titleRow",oi=["isPrimaryKey","isUnique","isNotNull","isGenerated","isForeignKey"],li=["isUnique"],pa=[ve,Ve,"columnName","description",...oi],ma=[ve,Ve,"indexName",...li];function tn(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!E(n)||!("before"in n)||!("after"in n)?!1:xe.isDiff(e)}function on(i){return tn(i[Ve])}function ln(i){return E(i)&&i.kind===ei.Domain&&typeof i.type=="string"}function sn(i){return i.kind===S.BoolType&&typeof i.type=="string"}function dn(i){return i.kind===S.IntegerType&&typeof i.type=="string"}function $e(i){return i.kind===S.DecimalType&&typeof i.type=="string"}function Xe(i){return i.kind===S.FloatType&&typeof i.type=="string"}function Je(i){return i.kind===S.StringType&&typeof i.type=="string"}function ze(i){return i.kind===S.BinaryType&&typeof i.type=="string"}function Qe(i){return i.kind===S.TimeType&&typeof i.type=="string"}function un(i){return i.kind===S.JSONType&&typeof i.type=="string"}function fn(i){return i.kind===S.SpatialType&&typeof i.type=="string"}function gn(i){return i.kind===S.UUIDType&&typeof i.type=="string"}function qe(i){return i.kind===S.EnumType&&Array.isArray(i.values)}function cn(i){return i.kind===S.UnsupportedType&&typeof i.type=="string"}function Ze(i){return typeof i.type=="string"}function Te(i){switch(i.kind){case ye.Literal:return en(i)?i.value:i.kind;case ye.RawExpr:return nn(i)?i.expr:i.kind;case Ri.NamedDefault:try{return Te(Fi(i))}catch{return i.kind}default:return an(i)?i.expr:rn(i)?i.value:i.kind}}const pn="Columns",mn="Indexes";class ha{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const r=this.extractRealm(e);if(!r)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const l=this.findTableInRealm(r,n);return l?this.buildTableOrientedSpecFromRealm(r,l,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",r.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,r){const l=le(n.attrs,se.Comment);return{tableName:n.name,schemaName:r.schemaName,...l?{description:l.text}:{},columns:{title:pn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,r.schemaName))},indexes:{title:mn,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var l;const r=e.schemas.find(a=>a.name===n.schemaName);if(r)return(l=r.tables)==null?void 0:l.find(a=>a.name===n.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,r,l){var k,y,_;const a=le(r.attrs,se.Comment),t=(k=r.attrs)==null?void 0:k.find(b=>b.kind===Pi.Identity),d=le(r.attrs,se.GeneratedExpr),f=t!==void 0||d!==void 0,u=this.findForeignKeyForColumn(n,r),c=u!==void 0,g=c&&u?this.buildForeignKeyTarget(e,u,r,l):void 0,p=this.formatColumnType(r.type),v=(y=r.type)==null?void 0:y.type,h=v&&qe(v)?v.values:void 0,m=this.isPrimaryKeyColumn(n,r);return{columnName:r.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:m,isForeignKey:c,...g?{foreignKeyTarget:g}:{},isGenerated:f,...t?{generatedBy:"identity"}:{},...d&&!t?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(n,r),isNotNull:!m&&((_=r.type)==null?void 0:_.null)===!1,...r.default!==void 0?{defaultValue:Te(r.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((l,a)=>l.seqNo-a.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),r=le(e.attrs,se.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...r?{description:r.text}:{}}}findSchemaNameForTable(e,n){var r;for(const l of e.schemas)if((r=l.tables)!=null&&r.some(a=>a===n))return l.name}isPrimaryKeyColumn(e,n){var r;return(((r=e.primaryKey)==null?void 0:r.parts)??[]).some(l=>{var a;return((a=l.column)==null?void 0:a.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(r=>{var l,a,t;return r.unique===!0&&((l=r.parts)==null?void 0:l.length)===1&&((t=(a=r.parts[0])==null?void 0:a.column)==null?void 0:t.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeyForColumn(e,n){var r;return(r=e.foreignKeys)==null?void 0:r.find(l=>{var a;return(a=l.columns)==null?void 0:a.some(t=>this.isSameForeignKeyColumn(t,n))})}buildForeignKeyTarget(e,n,r,l){var u,c;const a=((u=n.columns)==null?void 0:u.findIndex(g=>this.isSameForeignKeyColumn(g,r)))??-1;if(a<0)return;const t=n.refTable,d=(c=n.refColumns)==null?void 0:c[a];if(!t||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,t,l);if(f)return{schemaName:f,tableName:t.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,n,r){const l=this.findSchemaNameForTable(e,n);if(l)return l;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||r}findUniqueSchemaNameForTableName(e,n){const r=e.schemas.filter(l=>{var a;return(a=l.tables)==null?void 0:a.some(t=>t.name===n)}).map(l=>l.name);if(r.length===1)return r[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(ln(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return sn(e)?{kind:S.BoolType,typeName:e.type,label:n}:dn(e)?{kind:S.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:$e(e)?{kind:S.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Xe(e)?{kind:S.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Je(e)?{kind:S.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ze(e)?{kind:S.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:Qe(e)?{kind:S.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:un(e)?{kind:S.JSONType,typeName:e.type,label:n}:fn(e)?{kind:S.SpatialType,typeName:e.type,label:n}:gn(e)?{kind:S.UUIDType,typeName:e.type,label:n}:qe(e)?{kind:S.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:cn(e)?{kind:S.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:Ze(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ei.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return $e(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Je(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ze(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Xe(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):Qe(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):qe(e)?n=e.type??e.values[0]??"enum":Ze(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const r=n.filter(l=>l!==void 0);return r.length===0?e:`${e} (${r.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Te(e.expr):""}}const hn=new Set([T.TABLE,T.COLUMNS,T.COLUMN,T.INDEXES,T.INDEX]);class si extends Qi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,r,l){return!Ji(r)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(r,si.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return hn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case T.TABLE:return["tableName","schemaName","description"];case T.COLUMNS:case T.INDEXES:return["title"];case T.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTarget","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case T.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function yn(i){if(on(i.diffs))return i.diffs[Ve]}function Oe(i){const e=i.diffs[ve];if(e&&(pe(e.data)||me(e.data)))return e}function di(i,e){return i?(e==="origin"?i.styles.before:i.styles.after).isHeaderVisible:!0}function bn(i){if(Oe(i))return;const e={};let n=!1;for(const r of oi){const l=i.diffs[r];l&&(e[r]=l,n=!0)}return n?e:void 0}function Dn(i){if(Oe(i))return;const e={};let n=!1;for(const r of li){const l=i.diffs[r];l&&(e[r]=l,n=!0)}return n?e:void 0}const vn=s.createContext(!1),Re=i=>{const{children:e,diffType:n,diffTypeCause:r,hidden:l=!1}=i;return l||!n?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Gi,{variant:n,message:r}),e]})};Re.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ne=s.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Ne.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const we=s.memo(i=>{const{left:e,right:n}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:n})]})});we.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Fe="px-4",kn="",xn="px-4",Pe="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var x=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(x||{});const Hn=i=>{const{isExpandable:e,expanded:n,setExpanded:r,variant:l}=i,a=s.useCallback(()=>{r==null||r(t=>!t)},[r]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${wn(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},ui=s.memo(i=>{const{value:e,variant:n,layoutSide:r,onClick:l,diff:a,usage:t,highlightingMode:d=Ae.Default}=i,f=d===Ae.Default,u=d===Ae.Invisible,{textFontWeight:c,labelFontWeight:g,labelColor:p,textColor:v,label:h}=i,[m,k]=s.useState(!1),y=s.useCallback((A,I,N)=>{if(N)return null;const C=u?"":I.join(" "),D=`text-value ${l?"hover:cursor-pointer":""} ${c?`font-${c}`:""}`.trim(),L=`${D} ${C}`.trim(),oe={onClick:l,...v!=null&&v.trim()?{style:{color:v}}:{}};A=m?A:Nn(A);const z=(O,$)=>{const F={...oe,className:$};switch(n){case x.h1:return o.jsx("h1",{...F,children:O});case x.h2:return o.jsx("h2",{...F,children:O});case x.h3:return o.jsx("h3",{...F,children:O});case x.h4:return o.jsx("h4",{...F,children:O});case x.h5:return o.jsx("h5",{...F,children:O});case x.h6:return o.jsx("h6",{...F,children:O});case x.body1:return o.jsx("span",{...F,className:`${$} text-value-body1`.trim(),children:O});case x.body2:return o.jsx("span",{...F,className:`${$} text-value-body2`.trim(),children:O})}};return h?z(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:g?`font-${g}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),o.jsx("span",{className:C,children:A})]}),D):z(A,L)},[m,u,h,p,g,l,v,c,n]),_=s.useCallback(A=>{const I=[];let N=A,C=!1;if(a){const{data:D,styles:L}=a;switch(r){case W:I.push(B.highlighter(L.before.textHighlighterColor)),f&&(me(D)&&(N=Q(D.beforeValue)?D.beforeValue:N),he(D)&&(t===M.JsoProperty&&!u&&I.push(B.highlighter(Ke.Yellow)),N=Q(D.beforeValue)?D.beforeValue:N),_e(D)&&(N=Q(D.beforeKey)?D.beforeKey:N)),pe(D)&&(C=!0);break;case U:I.push(B.highlighter(L.after.textHighlighterColor)),f&&(pe(D)&&(N=Q(D.afterValue)?D.afterValue:N),he(D)&&(t===M.JsoProperty&&!u&&I.push(B.highlighter(Ke.Yellow)),N=Q(D.afterValue)?D.afterValue:N),_e(D)&&(N=Q(D.afterKey)?D.afterKey:N)),me(D)&&(C=!0);break}}return[N,I,C]},[a,f,u,r,t]),[b,q,H]=_(e);return s.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(b,q,H),!H&&o.jsx(Hn,{isExpandable:Vn(b),expanded:m,setExpanded:k,variant:n})]}),[y,b,q,H,m,k,n])}),Ee=5,Ie=300;function Vn(i){return i?i.length>Ie||ii.trim(i.split(`
`)).length>Ee:!1}function Nn(i){if(!i)return;if(i.length>Ie)return i.slice(0,Ie)+"...";const e=ii.trim(i.split(`
`));return e.length>Ee?e.slice(0,Ee).join(`
`)+"...":i}function Q(i){return typeof i=="string"}function wn(i){switch(i){case x.h1:return"text-value-expander--h1";case x.h2:return"text-value-expander--h2";case x.h3:return"text-value-expander--h3";case x.h4:return"text-value-expander--h4";case x.h5:return"text-value-expander--h5";case x.h6:return"text-value-expander--h6";case x.body1:return"text-value-expander--body1";case x.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const P="data-precededby",R="data-ddl-list-last-row";var w=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(w||{}),K=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(K||{});const An={[K.DdlApiProperty]:Pe},Cn={[K.DdlApiProperty]:["min-h-[26px]"]};function qn(i){const e=An[i]??Fe,n=Cn[i]??[];return[e,...n].join(" ")}const fe=s.memo(i=>{const{value:e,variant:n,layoutSide:r,usage:l=K.Default}=i,{label:a,labelFontWeight:t,textFontWeight:d,labelColor:f,textColor:u}=i,{[P]:c}=i,{diff:g,descendantDiffs:p,diffsSeverities:v}=i,h=ne(),m=l===K.DdlApiProperty,k=m&&h>0,y=s.useMemo(()=>{if(!g)return[];const{data:q,styles:H}=g;if(!q)return[];const V=[];return r===W&&V.push(B.background(H.before.backgroundColor)),r===U&&V.push(B.background(H.after.backgroundColor)),V},[g,r]),_=s.useMemo(()=>qn(l),[l]),b=o.jsx(ui,{label:a,labelFontWeight:t,textFontWeight:d,labelColor:f,textColor:u,value:e,variant:n,layoutSide:r,diff:g});return o.jsxs("div",{"data-precededby":c,className:`text-row-content flex h-full ${m?"items-stretch":""} ${_} gap-2 ${y.join(" ")}`,children:[k&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(be,{level:h}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});fe.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ie=s.memo(i=>{const e=ke(),{diffsSeverities:n,diffsSeverityPlacement:r=Ui.DescriptionRow}=i,l=s.useMemo(()=>n==null?void 0:n[r],[n,r]),a=s.useMemo(()=>l==null?void 0:l.type,[l]),t=s.useMemo(()=>ni(l==null?void 0:l.causedAt),[l]);switch(e){case je:return o.jsx(Re,{diffType:a,diffTypeCause:t,hidden:!1,children:o.jsx(we,{left:o.jsx(fe,{...i,layoutSide:W}),right:o.jsx(fe,{...i,layoutSide:U})})});case Me:return o.jsx(Ne,{content:o.jsx(fe,{...i,layoutSide:U})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ie.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const ae="#353C4E",_n=s.createContext(void 0);function Sn(){return s.useContext(_n)}const fi=i=>{const{expandable:e,expanded:n,onClick:r,level:l}=i,a=s.useContext(vn),t=l>0,d=r??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!t?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${t?"gap-0.5":""}`,children:[t&&o.jsx(Ki,{short:e}),e&&n!==void 0&&o.jsx(Bi,{onToggle:d,expanded:n})]})};fi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Tn={[M.JsoProperty]:kn,[M.DdlApiSection]:xn,[M.DdlApiProperty]:Pe},En={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function In(i){const e=Tn[i]??Fe,n=En[i]??[];return[e,...n].join(" ")}const ge=s.memo(i=>{const{expandable:e,expanded:n,onClickExpander:r,value:l,variant:a,layoutSide:t,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:u,usage:c=M.Default,highlightingMode:g=Wi}=i,{diff:p,descendantDiffs:v,diffsSeverities:h}=i,{[P]:m,[R]:k}=i,y=s.useMemo(()=>{switch(c){case M.Default:return g.get(Be.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return g.get(Be.JsoPropertyKey)}},[g,c]),_=ne(),b=Sn(),q=s.useMemo(()=>b?t===W?b.beforeLevel:b.afterLevel:_,[t,_,b]),H=s.useMemo(()=>{const C=[];if(!p)return C;const{data:D,styles:L}=p;return D&&(t===W&&C.push(B.background(L.before.backgroundColor)),t===U&&C.push(B.background(L.after.backgroundColor))),C},[p,t]),V=s.useMemo(()=>f?o.jsx(ui,{"data-precededby":m,value:l,variant:a,layoutSide:t,diff:p,usage:c,highlightingMode:y,onClick:r}):null,[f,m,l,a,t,p,c,y,r]),A=c===M.DdlApiProperty,I=s.useMemo(()=>d?o.jsxs(o.Fragment,{children:[(e||q>0)&&o.jsxs("div",{"data-precededby":m,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(be,{level:q}),o.jsx(fi,{expandable:e,expanded:n,onClick:r,level:q})]}),!A&&V]}):q>0&&o.jsx(be,{level:q}),[d,e,q,m,n,r,V,A]),N=s.useMemo(()=>In(c),[c]);return o.jsxs("div",{"data-precededby":m,"data-ddl-list-last-row":k?!0:void 0,className:`title-row-content flex ${A?"items-stretch":"items-center"} h-full ${N} gap-2 ${H.join(" ")}`,children:[I,A?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[V,u==null?void 0:u(t)]}):u==null?void 0:u(t)]})});ge.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Y=s.memo(i=>{const e=ke(),{diff:n,diffsSeverities:r,enableHeaderValue:l}=i,a=s.useMemo(()=>r==null?void 0:r["title-row"],[r]),t=s.useMemo(()=>a==null?void 0:a.type,[a]),d=s.useMemo(()=>ni(a==null?void 0:a.causedAt),[a]);switch(e){case je:return o.jsx(Re,{diffType:t,diffTypeCause:d,hidden:!1,children:o.jsx(we,{left:o.jsx(ge,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:W}),right:o.jsx(ge,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:U})})});case Me:return o.jsx(Ne,{content:o.jsx(ge,{...i,layoutSide:U})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Y.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function ya(i,e){return s.useMemo(()=>e(i)?gi(i):{},[e,i])}function gi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ln(i,e={}){const{diffKey:n,fallbackToNodeDiff:r=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:a,resolveDiff:t}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!d)return{};const c=Object.entries(d),g=h=>{const m=c.find(([k])=>k===String(h));return m==null?void 0:m[1]},p=n?g(n):void 0;return{diff:t?t(d,g):r?d[ve]??p:p,...l?{descendantDiffs:f}:{},diffsSeverities:u,...a?{diffsSeverityPlacement:a}:{}}}function Mn(i){return Zi.includes(i.kind)}function jn(i){return i.childrenNodes().filter(Mn)}function ba(i){return i.kind===T.TABLE}function On(i){return i.kind===T.COLUMNS}function ci(i){return i.kind===T.COLUMN}function pi(i){return ci(i)&&i instanceof He}function Rn(i){return i.kind===T.INDEXES}function mi(i){return i.kind===T.INDEX}function hi(i){return mi(i)&&i instanceof He}function Fn(i){return i.filter(ci)}function Pn(i){return i.filter(mi)}const Gn=s.createContext(null);function Un(){const i=s.useContext(Gn);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Kn=({href:i,className:e,children:n})=>o.jsx("a",{href:i,className:e,children:n});Kn.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Bn(i){return i?!!(G(i.defaultValue)||G(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const yi=s.memo(i=>{const{isVisible:e,value:n,className:r}=i;return e?o.jsx("span",{className:r,children:`${n}`}):null});yi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Wn(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const X=s.memo(i=>{const{isVisible:e,value:n}=i,r=Wn();return o.jsx(yi,{isVisible:e,value:n,className:r})});X.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const ce=s.memo(i=>{const{label:e,subheader:n,layoutSide:r}=i,{[P]:l,[R]:a}=i,t=ne();return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":l,"data-ddl-list-last-row":a?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Pe} min-h-[26px] gap-2`,children:[t>0&&o.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(be,{level:t}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(r)]})]})});ce.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const J=s.memo(i=>{const e=ke();switch(e){case je:return o.jsx(we,{left:o.jsx(ce,{...i,layoutSide:W}),right:o.jsx(ce,{...i,layoutSide:U})});case Me:return o.jsx(Ne,{content:o.jsx(ce,{...i,layoutSide:U})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});J.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""}}};const Yn="ux-badge_ddlapi_primary-key",bi="ux-badge_ddlapi_foreign-key",$n="ux-badge_ddlapi_unique",Xn="ux-badge_ddlapi_not-null",Jn="ux-badge_ddlapi_generated",Di="public",vi="Default",ki="As",xi="Values";function zn(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===Di?e:`${i.schemaName}.${e}`}function De(i){return i.join(", ")}const Le=s.memo(i=>{const{target:e,hideBadge:n=!1}=i,{navigationLinkBuilder:r,navigationLinkComponent:l}=Un(),a=s.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),t=o.jsx(l,{href:a,className:"ddlapi-foreign-key-link",children:zn(e)});return n?t:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Yi,{text:"FK",colorSchema:bi,inline:!0}),t]})});Le.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."}}};function Hi(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Vi(i,e){return!!i||!!e}function Ni(i,e){return i?e===W?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function ue(i){const{columnId:e,label:n,colorSchema:r,flagValue:l,flagDiff:a,layoutMode:t,layoutSide:d}=i;if(!Vi(l,a))return null;if(!Ni(a,d))return Hi();const f=a==null?void 0:a.data;return o.jsx(ai,{label:n,colorSchema:r,layoutMode:t,layoutSide:d,isNodeChanged:!1,isContentChanged:!!f,$changes:f},wi(e,n))}const re=s.memo(i=>{const{columnId:e,value:n,flagDiffs:r,layoutSide:l}=i,a=ke(),t=s.useMemo(()=>r??{},[r]),d=s.useMemo(()=>ue({columnId:e,label:"PK",colorSchema:Yn,flagValue:n.isPrimaryKey,flagDiff:t.isPrimaryKey,layoutMode:a,layoutSide:l}),[e,t.isPrimaryKey,a,l,n.isPrimaryKey]),f=s.useMemo(()=>ue({columnId:e,label:"unique",colorSchema:$n,flagValue:n.isUnique,flagDiff:t.isUnique,layoutMode:a,layoutSide:l}),[e,t.isUnique,a,l,n.isUnique]),u=s.useMemo(()=>ue({columnId:e,label:"not null",colorSchema:Xn,flagValue:n.isNotNull,flagDiff:t.isNotNull,layoutMode:a,layoutSide:l}),[e,t.isNotNull,a,l,n.isNotNull]),c=s.useMemo(()=>ue({columnId:e,label:"generated",colorSchema:Jn,flagValue:n.isGenerated,flagDiff:t.isGenerated,layoutMode:a,layoutSide:l}),[e,t.isGenerated,a,l,n.isGenerated]),g=s.useMemo(()=>{const v=t.isForeignKey;if(!Vi(n.isForeignKey,v))return null;if(!Ni(v,l))return Hi();const h=v==null?void 0:v.data;return h?o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(ai,{label:"FK",colorSchema:bi,layoutMode:a,layoutSide:l,isNodeChanged:!1,isContentChanged:!0,$changes:h},wi(e,"FK")),n.foreignKeyTarget&&o.jsx(Le,{target:n.foreignKeyTarget,hideBadge:!0})]}):n.foreignKeyTarget?o.jsx(Le,{target:n.foreignKeyTarget}):null},[e,t.isForeignKey,a,l,n.foreignKeyTarget,n.isForeignKey]),p=s.useMemo(()=>[d,f,u,c,g].filter(Boolean),[g,c,u,d,f]);return p.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p})});function wi(i,e){return`${i}-${e}`}re.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ai=s.memo(i=>{const{isVisible:e,value:n,className:r}=i;return e?o.jsx("span",{className:r,children:`${n}`}):null});Ai.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Qn(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const te=s.memo(i=>{const{isVisible:e,value:n,appearance:r}=i,l=Qn({appearance:r});return o.jsx(Ai,{isVisible:e,value:n,className:l})});te.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ci=i=>{const{node:e,additionalInfoPrecededBy:n=w.DDL_COLUMN_ROW,isLastInList:r=!1,[P]:l}=i,a=Z(),t=e.value(),d=s.useCallback(H=>t?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(te,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(re,{columnId:e.id,layoutSide:H,value:t})]}):o.jsx(o.Fragment,{}),[e.id,t]),f=s.useCallback(H=>{const V=t==null?void 0:t.defaultValue;return G(V)?o.jsx(X,{isVisible:!0,value:V}):o.jsx(o.Fragment,{})},[t]),u=s.useCallback(H=>{const V=t==null?void 0:t.generatedExpression;return G(V)?o.jsx(X,{isVisible:!0,value:V}):o.jsx(o.Fragment,{})},[t]),c=s.useCallback(H=>{var V;return(V=t==null?void 0:t.enumValues)!=null&&V.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((A,I)=>o.jsx(X,{isVisible:!0,value:A},`${A}-${I}`))}):o.jsx(o.Fragment,{})},[t]),g=a===ee,p=s.useMemo(()=>g&&!!(t!=null&&t.description),[g,t==null?void 0:t.description]),v=!!(t!=null&&t.enumValues&&t.enumValues.length>0),h=G(t==null?void 0:t.defaultValue),m=G(t==null?void 0:t.generatedExpression),y=r&&!(g&&(v||h||m)),_=r&&v&&!h&&!m,b=r&&h&&!m,q=r&&m;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":l,[R]:y||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:d,usage:M.DdlApiProperty}),p&&o.jsx(ie,{"data-precededby":w.DDL_COLUMN_ROW,value:t.description??"",variant:x.body2,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty}),g&&v&&o.jsx(J,{"data-precededby":n,[R]:_||void 0,label:xi,subheader:c}),g&&h&&o.jsx(J,{"data-precededby":v?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:b||void 0,label:vi,subheader:f}),g&&m&&o.jsx(J,{"data-precededby":h||v?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:q||void 0,label:ki,subheader:u})]}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Zn(i){if(pi(i))return bn(i)}function ea(i){if(hi(i))return Dn(i)}const qi=Oe;function _i(i){const e=Ln(gi(i),{resolveDiff:()=>yn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Si=i=>{const{node:e,additionalInfoPrecededBy:n=w.DDL_COLUMN_ROW,isLastInList:r=!1,[P]:l}=i,a=Z(),t=e.value(),d=s.useMemo(()=>qi(e),[e]),f=s.useMemo(()=>_i(e),[e]),u=s.useMemo(()=>Zn(e),[e]),c=s.useCallback(N=>t?di(d,N)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(te,{isVisible:!0,value:t.columnType.label,appearance:"text"}),o.jsx(re,{columnId:e.id,layoutSide:N,value:t,flagDiffs:u})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[u,e.id,d,t]),g=s.useCallback(N=>{const C=t==null?void 0:t.defaultValue;return G(C)?o.jsx(X,{isVisible:!0,value:C}):o.jsx(o.Fragment,{})},[t]),p=s.useCallback(N=>{const C=t==null?void 0:t.generatedExpression;return G(C)?o.jsx(X,{isVisible:!0,value:C}):o.jsx(o.Fragment,{})},[t]),v=s.useCallback(N=>{var C;return(C=t==null?void 0:t.enumValues)!=null&&C.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.enumValues.map((D,L)=>o.jsx(X,{isVisible:!0,value:D},`${D}-${L}`))}):o.jsx(o.Fragment,{})},[t]),h=a===ee,m=!!d,k=s.useMemo(()=>h&&!!(t!=null&&t.description),[h,t==null?void 0:t.description]),y=!!(t!=null&&t.enumValues&&t.enumValues.length>0),_=G(t==null?void 0:t.defaultValue),b=G(t==null?void 0:t.generatedExpression),H=r&&!(h&&(y||_||b)),V=r&&y&&!_&&!b,A=r&&_&&!b,I=r&&b;return t?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":l,[R]:H||void 0,value:t.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:c,usage:M.DdlApiProperty,...f}),k&&!m&&o.jsx(ie,{"data-precededby":w.DDL_COLUMN_ROW,value:t.description??"",variant:x.body2,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty}),h&&!m&&y&&o.jsx(J,{"data-precededby":n,[R]:V||void 0,label:xi,subheader:v}),h&&!m&&_&&o.jsx(J,{"data-precededby":y?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:A||void 0,label:vi,subheader:g}),h&&!m&&b&&o.jsx(J,{"data-precededby":_||y?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:I||void 0,label:ki,subheader:p})]}):null};Si.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ia(i,e){let n=!1;return i.map((r,l)=>{const a=l===i.length-1,t=l===0?w.DDL_SECTION_HEADER:n?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:w.DDL_COLUMN_ROW,d=n?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:w.DDL_COLUMN_ROW,f={columnNode:r,titlePrecededBy:t,additionalInfoPrecededBy:d,isLastInList:a};return n=e&&Bn(r.value()),f})}const Ti=i=>{const{node:e,[P]:n}=i,r=ne(),l=Z(),a=e.value(),t=Fn(e.childrenNodes()),d=l===ee,f=s.useMemo(()=>ia(t,d),[t,d]);return t.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(Y,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2}),o.jsx(ri.Provider,{value:r+1,children:f.map(({columnNode:u,titlePrecededBy:c,additionalInfoPrecededBy:g,isLastInList:p})=>pi(u)?o.jsx(Si,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id):o.jsx(Ci,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id))})]})};Ti.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Ei=i=>{const{schemaName:e,[P]:n}=i;return e===Di?null:o.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Fe}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Ei.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Ii=i=>{const{node:e,isLastInList:n=!1,[P]:r}=i,l=Z(),a=e.value(),t=s.useMemo(()=>a?a.indexName?a.indexName:De(a.partNames):"",[a]),d=s.useCallback(c=>a?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.indexName&&o.jsx(te,{isVisible:!0,value:`(${De(a.partNames)})`,appearance:"text"}),o.jsx(re,{layoutSide:c,value:a})]}):o.jsx(o.Fragment,{}),[a]),f=s.useMemo(()=>l===ee&&!!(a!=null&&a.description),[l,a==null?void 0:a.description]),u=n;return a?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":r,[R]:u||void 0,value:t,expandable:!1,expanded:!0,variant:x.body2,subheader:a.indexName||a.isUnique?d:void 0,usage:M.DdlApiProperty}),f&&o.jsx(ie,{"data-precededby":w.DDL_INDEX_ROW,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty})]}):null};Ii.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Li=i=>{const{node:e,isLastInList:n=!1,[P]:r}=i,l=Z(),a=e.value(),t=s.useMemo(()=>qi(e),[e]),d=s.useMemo(()=>_i(e),[e]),f=s.useMemo(()=>ea(e),[e]),u=s.useMemo(()=>a?a.indexName?a.indexName:De(a.partNames):"",[a]),c=s.useCallback(h=>a?di(t,h)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.indexName&&o.jsx(te,{isVisible:!0,value:`(${De(a.partNames)})`,appearance:"text"}),o.jsx(re,{layoutSide:h,value:a,flagDiffs:f})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,t,a]),g=s.useMemo(()=>l===ee&&!!(a!=null&&a.description),[l,a==null?void 0:a.description]),p=!!t,v=n;return a?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(Y,{"data-precededby":r,[R]:v||void 0,value:u,expandable:!1,expanded:!0,variant:x.body2,subheader:a.indexName||a.isUnique||f!=null&&f.isUnique?c:void 0,usage:M.DdlApiProperty,...d}),g&&!p&&o.jsx(ie,{"data-precededby":w.DDL_INDEX_ROW,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function na(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?w.DDL_SECTION_HEADER:w.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Mi=i=>{const{node:e,[P]:n}=i,r=ne(),l=e.value(),a=Pn(e.childrenNodes()),t=s.useMemo(()=>na(a),[a]);return a.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(Y,{"data-precededby":n,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2}),o.jsx(ri.Provider,{value:r+1,children:t.map(({indexNode:d,titlePrecededBy:f,isLastInList:u})=>hi(d)?o.jsx(Li,{"data-precededby":f,isLastInList:u,node:d},d.id):o.jsx(Ii,{"data-precededby":f,isLastInList:u,node:d},d.id))})]})};Mi.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const aa=i=>{const{node:e,noHeading:n=!1,[P]:r=w.ROOT}=i,l=Z(),a=e.value(),t=jn(e),d=t.find(On),f=t.find(Rn),u=!!(a!=null&&a.schemaName),c=l===ee&&!!(a!=null&&a.description),g=n?w.ROOT:w.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&o.jsx(Y,{"data-precededby":r,value:(a==null?void 0:a.tableName)??"",expandable:!1,expanded:!0,variant:x.h1}),u&&o.jsx(Ei,{"data-precededby":g,schemaName:(a==null?void 0:a.schemaName)??""}),c&&o.jsx(ie,{"data-precededby":u?w.DDL_TABLE_SCHEMA_ROW:g,value:(a==null?void 0:a.description)??"",variant:x.h4,textFontWeight:"normal",textColor:ae}),d&&o.jsx(Ti,{"data-precededby":c?w.DDL_TABLE_DESCRIPTION_ROW:u?w.DDL_TABLE_SCHEMA_ROW:g,node:d}),f&&o.jsx(Mi,{"data-precededby":d!=null&&d.childrenNodes().length?w.DDL_COLUMN_ROW:c?w.DDL_TABLE_DESCRIPTION_ROW:u?w.DDL_TABLE_SCHEMA_ROW:g,node:f})]})};aa.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{xe as A,da as B,Re as C,ha as D,we as E,ui as F,x as G,P as H,vn as I,_n as J,Sn as K,gi as L,Ln as M,Y as N,Ne as O,M as P,w as Q,ie as R,He as S,We as T,ya as U,ae as V,Fe as X,fa as a,si as b,ca as c,Zi as d,ga as e,ba as f,Ye as g,Gn as h,E as i,aa as j,Kn as k,oi as l,li as m,T as n,tn as o,pa as p,Ve as q,ma as r,Ce as s,ua as t,$i as u,Qi as v,Ji as w,Xi as x,sa as y,ti as z};
