var Li=Object.defineProperty;var Mi=(i,e,n)=>e in i?Li(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var j=(i,e,n)=>(Mi(i,typeof e!="symbol"?e+"":e,n),n);import{u as pe,v as me,x as _e,w as he,R as Se,T as Ge,U as ye,N as ve,V as Ze,W as S,X as ji,Y as Oi,K as le,O as Ri,M as se,Z as Fi,_ as Ae,$ as U,a0 as B,H as Ue,a1 as W,a2 as ei,a3 as ne,a4 as be,a5 as ke,P as Pi,a6 as ii,k as Me,S as je,a7 as Gi,a8 as Ui,y as Ki,a9 as Ke,aa as G,ab as Bi,ac as ni,ad as Z,h as ee,f as ai}from"./DiffBadge-20c083b3.js";import{j as t}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Be={SIMPLE:"simple",COMPLEX:"complex"},Wi={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Yi=Object.values(Wi);new Set(Yi);class xe{aggregateByDescendantDiffs(e,n,o,l){}static isDiffsRecord(e){if(!E(e))return!1;for(const n of Object.values(e))if(!xe.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return E(n)&&(pe(n)||me(n)||_e(n)||he(n))}}function E(i){return ri(i)&&!Array.isArray(i)}function ri(i){return typeof i=="object"&&i!==null}function $i(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ce(i){return Array.isArray(i)}function la(i,e,n){let o=i,l=!1;for(const a of e){if(!E(o)&&!Ce(o))return;if(l){let d;ri(o)&&(d=o[a]),!d&&Ce(o)&&n&&(d=o.find(f=>E(f)&&f[n]===a)),o=d,l=!1;continue}o=o[a],Ce(o)&&(l=!0)}return o}function sa(i,e){return Object.keys(i).find(n=>i[n]===e)}function da(i){if(xe.isDiffsRecord(i))return i}class ua{constructor(){j(this,"tree",null)}pick(e,n){if(!E(e))return null;const o={};for(const l of n){const a=String(l);if(!(a in e))continue;const r=e[a];Array.isArray(r)?o[a]=[...r]:E(r)?o[a]={...r}:o[a]=r}return this.isPartialOf(o,n)?o:null}isPartialOf(e,n){return Object.keys(e).every(o=>n.includes(o))}}const de=()=>{},fa=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:de,info:de,warn:de,error:de};function Xi(i){return i==null||!E(i)&&!Se(i)}function ga(i){const{source:e,tree:n,supportedNodeKinds:o,createNodeFromRaw:l,createNodeParams:a,createStateForSimpleNode:r,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:u,resolveNodeKey:c,isDisallowedValue:g=Xi,shouldStopAfterNodeCreation:p}=i;return[({value:k,state:y,key:_,path:b})=>{if(typeof _=="symbol")return;if(!E(k)&&!Se(k))return{value:k};const{alreadyConvertedValuesCache:q,parent:H,container:V}=y,A=q.get(k);if(!A||!f(A)&&!u(A))return{value:k};if(!H||!f(H))return{value:k};const I="#"+Ge(b),N=c(_,k),C=n.createCycledClone(A,I,N,H);return V?V.addNestedNode(C):H&&H.addChildNode(C),{done:!0}},({key:k,value:y,path:_,state:b,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((A,I)=>I(k,A,e,_,b),y)},({key:k,value:y,path:_,rules:b,state:q})=>{if(!b)return{done:!0};if(typeof k=="symbol")return{done:!0};if(g(y))return{done:!0};if(!b.kind||!o.includes(b.kind))return;const{parent:H,container:V}=q,A="#"+Ge(_),I=c(k,y),{kind:N,complex:C=!1}=b,D=a(y,H,V),L=l(A,I,N,C,D);if(!L)return;V?V.addNestedNode(L):H&&H.addChildNode(L);let oe=y;if(p!=null&&p(L,y)){const $=H?H.descendantDiffs:void 0;if(!$||!(k in $))return{done:!0};const F=$[k];if(!F)return{done:!0};const{data:Pe}=F;he(Pe)&&(oe=Pe.beforeValue)}const z=new Map(q.alreadyConvertedValuesCache);(E(y)||Se(y))&&z.set(y,L);let O;return f(L)?O=r(q,L,z):O=d(q,L,z),{value:oe,state:O}}]}class Ji{}class He{constructor(e="#",n="",o,l,a){j(this,"type");j(this,"parent");j(this,"container");j(this,"newDataLevel");j(this,"_value");j(this,"_meta");j(this,"_childrenNodes",[]);j(this,"_nestedNodes",[]);j(this,"_diffs",{});j(this,"_diffsSummary",new Set);j(this,"_descendantDiffs",{});j(this,"_descendantDiffsSummary",new Set);j(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=o,this.isCycle=l;const{type:r=Be.SIMPLE,value:d=null,parent:f=null,container:u=null,newDataLevel:c=!0,meta:g}=a;this.type=r,this.parent=f,this.container=u,this.newDataLevel=c,this._value=d,this._meta=g}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,o){const l=new He(e,n,this.kind,!0,{type:this.type,parent:o,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const o of this._nestedNodes){if(o.id===e)return o;if(n&&o.type===Be.COMPLEX){const l=o.findNestedNode(e,n);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const T={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},zi=Object.values(T);function We(i=T.TABLE){return{"/columns":{"/items":{"/*":()=>We(T.COLUMN)},kind:T.COLUMNS},"/indexes":{"/items":{"/*":()=>We(T.INDEX)},kind:T.INDEXES},kind:i}}function Qi(i){return i.kind===ye.Literal&&typeof i.value=="string"}function Zi(i){return i.kind===ye.RawExpr&&typeof i.expr=="string"}function en(i){return E(i)&&typeof i.expr=="string"}function nn(i){return E(i)&&typeof i.value=="string"}const Ve="titleRow",ti=["isPrimaryKey","isUnique","isNotNull","isGenerated","isForeignKey"],oi=["isUnique"],ca=[ve,Ve,"columnName","description",...ti],pa=[ve,Ve,"indexName",...oi];function an(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!E(n)||!("before"in n)||!("after"in n)?!1:xe.isDiff(e)}function rn(i){return an(i[Ve])}function tn(i){return E(i)&&i.kind===Ze.Domain&&typeof i.type=="string"}function on(i){return i.kind===S.BoolType&&typeof i.type=="string"}function ln(i){return i.kind===S.IntegerType&&typeof i.type=="string"}function Ye(i){return i.kind===S.DecimalType&&typeof i.type=="string"}function $e(i){return i.kind===S.FloatType&&typeof i.type=="string"}function Xe(i){return i.kind===S.StringType&&typeof i.type=="string"}function Je(i){return i.kind===S.BinaryType&&typeof i.type=="string"}function ze(i){return i.kind===S.TimeType&&typeof i.type=="string"}function sn(i){return i.kind===S.JSONType&&typeof i.type=="string"}function dn(i){return i.kind===S.SpatialType&&typeof i.type=="string"}function un(i){return i.kind===S.UUIDType&&typeof i.type=="string"}function qe(i){return i.kind===S.EnumType&&Array.isArray(i.values)}function fn(i){return i.kind===S.UnsupportedType&&typeof i.type=="string"}function Qe(i){return typeof i.type=="string"}function Te(i){switch(i.kind){case ye.Literal:return Qi(i)?i.value:i.kind;case ye.RawExpr:return Zi(i)?i.expr:i.kind;case ji.NamedDefault:try{return Te(Oi(i))}catch{return i.kind}default:return en(i)?i.expr:nn(i)?i.value:i.kind}}const gn="Columns",cn="Indexes";class ma{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const o=this.extractRealm(e);if(!o)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const l=this.findTableInRealm(o,n);return l?this.buildTableOrientedSpecFromRealm(o,l,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",o.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,o){const l=le(n.attrs,se.Comment);return{tableName:n.name,schemaName:o.schemaName,...l?{description:l.text}:{},columns:{title:gn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,o.schemaName))},indexes:{title:cn,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var l;const o=e.schemas.find(a=>a.name===n.schemaName);if(o)return(l=o.tables)==null?void 0:l.find(a=>a.name===n.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,o,l){var k,y,_;const a=le(o.attrs,se.Comment),r=(k=o.attrs)==null?void 0:k.find(b=>b.kind===Ri.Identity),d=le(o.attrs,se.GeneratedExpr),f=r!==void 0||d!==void 0,u=this.findForeignKeyForColumn(n,o),c=u!==void 0,g=c&&u?this.buildForeignKeyTarget(e,u,o,l):void 0,p=this.formatColumnType(o.type),v=(y=o.type)==null?void 0:y.type,h=v&&qe(v)?v.values:void 0,m=this.isPrimaryKeyColumn(n,o);return{columnName:o.name,columnType:p,...h?{enumValues:h}:{},isPrimaryKey:m,isForeignKey:c,...g?{foreignKeyTarget:g}:{},isGenerated:f,...r?{generatedBy:"identity"}:{},...d&&!r?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(n,o),isNotNull:!m&&((_=o.type)==null?void 0:_.null)===!1,...o.default!==void 0?{defaultValue:Te(o.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((l,a)=>l.seqNo-a.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),o=le(e.attrs,se.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...o?{description:o.text}:{}}}findSchemaNameForTable(e,n){var o;for(const l of e.schemas)if((o=l.tables)!=null&&o.some(a=>a===n))return l.name}isPrimaryKeyColumn(e,n){var o;return(((o=e.primaryKey)==null?void 0:o.parts)??[]).some(l=>{var a;return((a=l.column)==null?void 0:a.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(o=>{var l,a,r;return o.unique===!0&&((l=o.parts)==null?void 0:l.length)===1&&((r=(a=o.parts[0])==null?void 0:a.column)==null?void 0:r.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeyForColumn(e,n){var o;return(o=e.foreignKeys)==null?void 0:o.find(l=>{var a;return(a=l.columns)==null?void 0:a.some(r=>this.isSameForeignKeyColumn(r,n))})}buildForeignKeyTarget(e,n,o,l){var u,c;const a=((u=n.columns)==null?void 0:u.findIndex(g=>this.isSameForeignKeyColumn(g,o)))??-1;if(a<0)return;const r=n.refTable,d=(c=n.refColumns)==null?void 0:c[a];if(!r||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,r,l);if(f)return{schemaName:f,tableName:r.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,n,o){const l=this.findSchemaNameForTable(e,n);if(l)return l;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||o}findUniqueSchemaNameForTableName(e,n){const o=e.schemas.filter(l=>{var a;return(a=l.tables)==null?void 0:a.some(r=>r.name===n)}).map(l=>l.name);if(o.length===1)return o[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(tn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return on(e)?{kind:S.BoolType,typeName:e.type,label:n}:ln(e)?{kind:S.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ye(e)?{kind:S.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:$e(e)?{kind:S.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Xe(e)?{kind:S.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:Je(e)?{kind:S.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ze(e)?{kind:S.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:sn(e)?{kind:S.JSONType,typeName:e.type,label:n}:dn(e)?{kind:S.SpatialType,typeName:e.type,label:n}:un(e)?{kind:S.UUIDType,typeName:e.type,label:n}:qe(e)?{kind:S.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:fn(e)?{kind:S.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:Qe(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Ze.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return Ye(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Xe(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Je(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):$e(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):ze(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):qe(e)?n=e.type??e.values[0]??"enum":Qe(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const o=n.filter(l=>l!==void 0);return o.length===0?e:`${e} (${o.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Te(e.expr):""}}const pn=new Set([T.TABLE,T.COLUMNS,T.COLUMN,T.INDEXES,T.INDEX]);class li extends Ji{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,o,l){return!$i(o)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(o,li.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return pn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case T.TABLE:return["tableName","schemaName","description"];case T.COLUMNS:case T.INDEXES:return["title"];case T.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTarget","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case T.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function mn(i){if(rn(i.diffs))return i.diffs[Ve]}function hn(i){const e=i.diffs[ve];if(e&&(pe(e.data)||me(e.data)))return e}function si(i,e){return i?(e==="origin"?i.styles.before:i.styles.after).isHeaderVisible:!0}const yn=s.createContext(!1),Oe=i=>{const{children:e,diffType:n,diffTypeCause:o,hidden:l=!1}=i;return l||!n?e:t.jsxs("div",{className:"flex flex-row relative w-full",children:[t.jsx(Fi,{variant:n,message:o}),e]})};Oe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ne=s.memo(i=>{const{content:e}=i;return t.jsx("div",{className:"flex flex-row w-full",children:e})});Ne.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const we=s.memo(i=>{const{left:e,right:n}=i;return t.jsxs("div",{className:"flex flex-row w-full",children:[t.jsx("div",{className:"w-1/2",children:e}),t.jsx("div",{className:"w-1/2",children:n})]})});we.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Re="px-4",bn="",Dn="px-4",Fe="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var x=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(x||{});const vn=i=>{const{isExpandable:e,expanded:n,setExpanded:o,variant:l}=i,a=s.useCallback(()=>{o==null||o(r=>!r)},[o]);return t.jsx(t.Fragment,{children:e&&t.jsx("div",{className:"mt-1",children:t.jsx("a",{className:`text-value-expander ${Hn(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},di=s.memo(i=>{const{value:e,variant:n,layoutSide:o,onClick:l,diff:a,usage:r,highlightingMode:d=Ae.Default}=i,f=d===Ae.Default,u=d===Ae.Invisible,{textFontWeight:c,labelFontWeight:g,labelColor:p,textColor:v,label:h}=i,[m,k]=s.useState(!1),y=s.useCallback((A,I,N)=>{if(N)return null;const C=u?"":I.join(" "),D=`text-value ${l?"hover:cursor-pointer":""} ${c?`font-${c}`:""}`.trim(),L=`${D} ${C}`.trim(),oe={onClick:l,...v!=null&&v.trim()?{style:{color:v}}:{}};A=m?A:xn(A);const z=(O,$)=>{const F={...oe,className:$};switch(n){case x.h1:return t.jsx("h1",{...F,children:O});case x.h2:return t.jsx("h2",{...F,children:O});case x.h3:return t.jsx("h3",{...F,children:O});case x.h4:return t.jsx("h4",{...F,children:O});case x.h5:return t.jsx("h5",{...F,children:O});case x.h6:return t.jsx("h6",{...F,children:O});case x.body1:return t.jsx("span",{...F,className:`${$} text-value-body1`.trim(),children:O});case x.body2:return t.jsx("span",{...F,className:`${$} text-value-body2`.trim(),children:O})}};return h?z(t.jsxs(t.Fragment,{children:[t.jsx("span",{className:g?`font-${g}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${h}: `}),t.jsx("span",{className:C,children:A})]}),D):z(A,L)},[m,u,h,p,g,l,v,c,n]),_=s.useCallback(A=>{const I=[];let N=A,C=!1;if(a){const{data:D,styles:L}=a;switch(o){case W:I.push(B.highlighter(L.before.textHighlighterColor)),f&&(me(D)&&(N=Q(D.beforeValue)?D.beforeValue:N),he(D)&&(r===M.JsoProperty&&!u&&I.push(B.highlighter(Ue.Yellow)),N=Q(D.beforeValue)?D.beforeValue:N),_e(D)&&(N=Q(D.beforeKey)?D.beforeKey:N)),pe(D)&&(C=!0);break;case U:I.push(B.highlighter(L.after.textHighlighterColor)),f&&(pe(D)&&(N=Q(D.afterValue)?D.afterValue:N),he(D)&&(r===M.JsoProperty&&!u&&I.push(B.highlighter(Ue.Yellow)),N=Q(D.afterValue)?D.afterValue:N),_e(D)&&(N=Q(D.afterKey)?D.afterKey:N)),me(D)&&(C=!0);break}}return[N,I,C]},[a,f,u,o,r]),[b,q,H]=_(e);return s.useMemo(()=>t.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(b,q,H),!H&&t.jsx(vn,{isExpandable:kn(b),expanded:m,setExpanded:k,variant:n})]}),[y,b,q,H,m,k,n])}),Ee=5,Ie=300;function kn(i){return i?i.length>Ie||ei.trim(i.split(`
`)).length>Ee:!1}function xn(i){if(!i)return;if(i.length>Ie)return i.slice(0,Ie)+"...";const e=ei.trim(i.split(`
`));return e.length>Ee?e.slice(0,Ee).join(`
`)+"...":i}function Q(i){return typeof i=="string"}function Hn(i){switch(i){case x.h1:return"text-value-expander--h1";case x.h2:return"text-value-expander--h2";case x.h3:return"text-value-expander--h3";case x.h4:return"text-value-expander--h4";case x.h5:return"text-value-expander--h5";case x.h6:return"text-value-expander--h6";case x.body1:return"text-value-expander--body1";case x.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const P="data-precededby",R="data-ddl-list-last-row";var w=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(w||{}),K=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(K||{});const Vn={[K.DdlApiProperty]:Fe},Nn={[K.DdlApiProperty]:["min-h-[26px]"]};function wn(i){const e=Vn[i]??Re,n=Nn[i]??[];return[e,...n].join(" ")}const fe=s.memo(i=>{const{value:e,variant:n,layoutSide:o,usage:l=K.Default}=i,{label:a,labelFontWeight:r,textFontWeight:d,labelColor:f,textColor:u}=i,{[P]:c}=i,{diff:g,descendantDiffs:p,diffsSeverities:v}=i,h=ne(),m=l===K.DdlApiProperty,k=m&&h>0,y=s.useMemo(()=>{if(!g)return[];const{data:q,styles:H}=g;if(!q)return[];const V=[];return o===W&&V.push(B.background(H.before.backgroundColor)),o===U&&V.push(B.background(H.after.backgroundColor)),V},[g,o]),_=s.useMemo(()=>wn(l),[l]),b=t.jsx(di,{label:a,labelFontWeight:r,textFontWeight:d,labelColor:f,textColor:u,value:e,variant:n,layoutSide:o,diff:g});return t.jsxs("div",{"data-precededby":c,className:`text-row-content flex h-full ${m?"items-stretch":""} ${_} gap-2 ${y.join(" ")}`,children:[k&&t.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(be,{level:h}),t.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m?t.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});fe.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ie=s.memo(i=>{const e=ke(),{diffsSeverities:n,diffsSeverityPlacement:o=Pi.DescriptionRow}=i,l=s.useMemo(()=>n==null?void 0:n[o],[n,o]),a=s.useMemo(()=>l==null?void 0:l.type,[l]),r=s.useMemo(()=>ii(l==null?void 0:l.causedAt),[l]);switch(e){case je:return t.jsx(Oe,{diffType:a,diffTypeCause:r,hidden:!1,children:t.jsx(we,{left:t.jsx(fe,{...i,layoutSide:W}),right:t.jsx(fe,{...i,layoutSide:U})})});case Me:return t.jsx(Ne,{content:t.jsx(fe,{...i,layoutSide:U})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ie.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const ae="#353C4E",An=s.createContext(void 0);function Cn(){return s.useContext(An)}const ui=i=>{const{expandable:e,expanded:n,onClick:o,level:l}=i,a=s.useContext(yn),r=l>0,d=o??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!r?null:t.jsxs("div",{className:`flex flex-row items-center justify-center ${r?"gap-0.5":""}`,children:[r&&t.jsx(Gi,{short:e}),e&&n!==void 0&&t.jsx(Ui,{onToggle:d,expanded:n})]})};ui.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const qn={[M.JsoProperty]:bn,[M.DdlApiSection]:Dn,[M.DdlApiProperty]:Fe},_n={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function Sn(i){const e=qn[i]??Re,n=_n[i]??[];return[e,...n].join(" ")}const ge=s.memo(i=>{const{expandable:e,expanded:n,onClickExpander:o,value:l,variant:a,layoutSide:r,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:u,usage:c=M.Default,highlightingMode:g=Ki}=i,{diff:p,descendantDiffs:v,diffsSeverities:h}=i,{[P]:m,[R]:k}=i,y=s.useMemo(()=>{switch(c){case M.Default:return g.get(Ke.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return g.get(Ke.JsoPropertyKey)}},[g,c]),_=ne(),b=Cn(),q=s.useMemo(()=>b?r===W?b.beforeLevel:b.afterLevel:_,[r,_,b]),H=s.useMemo(()=>{const C=[];if(!p)return C;const{data:D,styles:L}=p;return D&&(r===W&&C.push(B.background(L.before.backgroundColor)),r===U&&C.push(B.background(L.after.backgroundColor))),C},[p,r]),V=s.useMemo(()=>f?t.jsx(di,{"data-precededby":m,value:l,variant:a,layoutSide:r,diff:p,usage:c,highlightingMode:y,onClick:o}):null,[f,m,l,a,r,p,c,y,o]),A=c===M.DdlApiProperty,I=s.useMemo(()=>d?t.jsxs(t.Fragment,{children:[(e||q>0)&&t.jsxs("div",{"data-precededby":m,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(be,{level:q}),t.jsx(ui,{expandable:e,expanded:n,onClick:o,level:q})]}),!A&&V]}):q>0&&t.jsx(be,{level:q}),[d,e,q,m,n,o,V,A]),N=s.useMemo(()=>Sn(c),[c]);return t.jsxs("div",{"data-precededby":m,"data-ddl-list-last-row":k?!0:void 0,className:`title-row-content flex ${A?"items-stretch":"items-center"} h-full ${N} gap-2 ${H.join(" ")}`,children:[I,A?t.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[V,u==null?void 0:u(r)]}):u==null?void 0:u(r)]})});ge.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Y=s.memo(i=>{const e=ke(),{diff:n,diffsSeverities:o,enableHeaderValue:l}=i,a=s.useMemo(()=>o==null?void 0:o["title-row"],[o]),r=s.useMemo(()=>a==null?void 0:a.type,[a]),d=s.useMemo(()=>ii(a==null?void 0:a.causedAt),[a]);switch(e){case je:return t.jsx(Oe,{diffType:r,diffTypeCause:d,hidden:!1,children:t.jsx(we,{left:t.jsx(ge,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:W}),right:t.jsx(ge,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:U})})});case Me:return t.jsx(Ne,{content:t.jsx(ge,{...i,layoutSide:U})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});Y.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function ha(i,e){return s.useMemo(()=>e(i)?fi(i):{},[e,i])}function fi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Tn(i,e={}){const{diffKey:n,fallbackToNodeDiff:o=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:a,resolveDiff:r}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!d)return{};const c=Object.entries(d),g=h=>{const m=c.find(([k])=>k===String(h));return m==null?void 0:m[1]},p=n?g(n):void 0;return{diff:r?r(d,g):o?d[ve]??p:p,...l?{descendantDiffs:f}:{},diffsSeverities:u,...a?{diffsSeverityPlacement:a}:{}}}function En(i){return zi.includes(i.kind)}function In(i){return i.childrenNodes().filter(En)}function ya(i){return i.kind===T.TABLE}function Ln(i){return i.kind===T.COLUMNS}function gi(i){return i.kind===T.COLUMN}function Mn(i){return gi(i)&&i instanceof He}function jn(i){return i.kind===T.INDEXES}function ci(i){return i.kind===T.INDEX}function On(i){return ci(i)&&i instanceof He}function Rn(i){return i.filter(gi)}function Fn(i){return i.filter(ci)}const Pn=s.createContext(null);function Gn(){const i=s.useContext(Pn);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Un=({href:i,className:e,children:n})=>t.jsx("a",{href:i,className:e,children:n});Un.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Kn(i){return i?!!(G(i.defaultValue)||G(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const pi=s.memo(i=>{const{isVisible:e,value:n,className:o}=i;return e?t.jsx("span",{className:o,children:`${n}`}):null});pi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Bn(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const X=s.memo(i=>{const{isVisible:e,value:n}=i,o=Bn();return t.jsx(pi,{isVisible:e,value:n,className:o})});X.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const ce=s.memo(i=>{const{label:e,subheader:n,layoutSide:o}=i,{[P]:l,[R]:a}=i,r=ne();return t.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":l,"data-ddl-list-last-row":a?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Fe} min-h-[26px] gap-2`,children:[r>0&&t.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[t.jsx(be,{level:r}),t.jsx("div",{className:"w-4","aria-hidden":"true"})]}),t.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[t.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(o)]})]})});ce.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const J=s.memo(i=>{const e=ke();switch(e){case je:return t.jsx(we,{left:t.jsx(ce,{...i,layoutSide:W}),right:t.jsx(ce,{...i,layoutSide:U})});case Me:return t.jsx(Ne,{content:t.jsx(ce,{...i,layoutSide:U})})}return t.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});J.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""}}};const Wn="ux-badge_ddlapi_primary-key",mi="ux-badge_ddlapi_foreign-key",Yn="ux-badge_ddlapi_unique",$n="ux-badge_ddlapi_not-null",Xn="ux-badge_ddlapi_generated",hi="public",yi="Default",bi="As",Di="Values";function Jn(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===hi?e:`${i.schemaName}.${e}`}function De(i){return i.join(", ")}const Le=s.memo(i=>{const{target:e,hideBadge:n=!1}=i,{navigationLinkBuilder:o,navigationLinkComponent:l}=Gn(),a=s.useMemo(()=>o(e.schemaName,e.tableName,e.columnName),[o,e]),r=t.jsx(l,{href:a,className:"ddlapi-foreign-key-link",children:Jn(e)});return n?r:t.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[t.jsx(Bi,{text:"FK",colorSchema:mi,inline:!0}),r]})});Le.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."}}};function vi(){return t.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function ki(i,e){return!!i||!!e}function xi(i,e){return i?e===W?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function ue(i){const{columnId:e,label:n,colorSchema:o,flagValue:l,flagDiff:a,layoutMode:r,layoutSide:d}=i;if(!ki(l,a))return null;if(!xi(a,d))return vi();const f=a==null?void 0:a.data;return t.jsx(ni,{label:n,colorSchema:o,layoutMode:r,layoutSide:d,isNodeChanged:!1,isContentChanged:!!f,$changes:f},Hi(e,n))}const re=s.memo(i=>{const{columnId:e,value:n,flagDiffs:o,layoutSide:l}=i,a=ke(),r=s.useMemo(()=>o??{},[o]),d=s.useMemo(()=>ue({columnId:e,label:"PK",colorSchema:Wn,flagValue:n.isPrimaryKey,flagDiff:r.isPrimaryKey,layoutMode:a,layoutSide:l}),[e,r.isPrimaryKey,a,l,n.isPrimaryKey]),f=s.useMemo(()=>ue({columnId:e,label:"unique",colorSchema:Yn,flagValue:n.isUnique,flagDiff:r.isUnique,layoutMode:a,layoutSide:l}),[e,r.isUnique,a,l,n.isUnique]),u=s.useMemo(()=>ue({columnId:e,label:"not null",colorSchema:$n,flagValue:n.isNotNull,flagDiff:r.isNotNull,layoutMode:a,layoutSide:l}),[e,r.isNotNull,a,l,n.isNotNull]),c=s.useMemo(()=>ue({columnId:e,label:"generated",colorSchema:Xn,flagValue:n.isGenerated,flagDiff:r.isGenerated,layoutMode:a,layoutSide:l}),[e,r.isGenerated,a,l,n.isGenerated]),g=s.useMemo(()=>{const v=r.isForeignKey;if(!ki(n.isForeignKey,v))return null;if(!xi(v,l))return vi();const h=v==null?void 0:v.data;return h?t.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[t.jsx(ni,{label:"FK",colorSchema:mi,layoutMode:a,layoutSide:l,isNodeChanged:!1,isContentChanged:!0,$changes:h},Hi(e,"FK")),n.foreignKeyTarget&&t.jsx(Le,{target:n.foreignKeyTarget,hideBadge:!0})]}):n.foreignKeyTarget?t.jsx(Le,{target:n.foreignKeyTarget}):null},[e,r.isForeignKey,a,l,n.foreignKeyTarget,n.isForeignKey]),p=s.useMemo(()=>[d,f,u,c,g].filter(Boolean),[g,c,u,d,f]);return p.length===0?null:t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:p})});function Hi(i,e){return`${i}-${e}`}re.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Vi=s.memo(i=>{const{isVisible:e,value:n,className:o}=i;return e?t.jsx("span",{className:o,children:`${n}`}):null});Vi.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function zn(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const te=s.memo(i=>{const{isVisible:e,value:n,appearance:o}=i,l=zn({appearance:o});return t.jsx(Vi,{isVisible:e,value:n,className:l})});te.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ni=i=>{const{node:e,additionalInfoPrecededBy:n=w.DDL_COLUMN_ROW,isLastInList:o=!1,[P]:l}=i,a=Z(),r=e.value(),d=s.useCallback(H=>r?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(te,{isVisible:!0,value:r.columnType.label,appearance:"text"}),t.jsx(re,{columnId:e.id,layoutSide:H,value:r})]}):t.jsx(t.Fragment,{}),[e.id,r]),f=s.useCallback(H=>{const V=r==null?void 0:r.defaultValue;return G(V)?t.jsx(X,{isVisible:!0,value:V}):t.jsx(t.Fragment,{})},[r]),u=s.useCallback(H=>{const V=r==null?void 0:r.generatedExpression;return G(V)?t.jsx(X,{isVisible:!0,value:V}):t.jsx(t.Fragment,{})},[r]),c=s.useCallback(H=>{var V;return(V=r==null?void 0:r.enumValues)!=null&&V.length?t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:r.enumValues.map((A,I)=>t.jsx(X,{isVisible:!0,value:A},`${A}-${I}`))}):t.jsx(t.Fragment,{})},[r]),g=a===ee,p=s.useMemo(()=>g&&!!(r!=null&&r.description),[g,r==null?void 0:r.description]),v=!!(r!=null&&r.enumValues&&r.enumValues.length>0),h=G(r==null?void 0:r.defaultValue),m=G(r==null?void 0:r.generatedExpression),y=o&&!(g&&(v||h||m)),_=o&&v&&!h&&!m,b=o&&h&&!m,q=o&&m;return r?t.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":l,[R]:y||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:d,usage:M.DdlApiProperty}),p&&t.jsx(ie,{"data-precededby":w.DDL_COLUMN_ROW,value:r.description??"",variant:x.body2,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty}),g&&v&&t.jsx(J,{"data-precededby":n,[R]:_||void 0,label:Di,subheader:c}),g&&h&&t.jsx(J,{"data-precededby":v?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:b||void 0,label:yi,subheader:f}),g&&m&&t.jsx(J,{"data-precededby":h||v?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:q||void 0,label:bi,subheader:u})]}):null};Ni.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function wi(i,e){const n={};let o=!1;for(const l of e){const a=i[l];a&&(n[l]=a,o=!0)}return o?n:void 0}function Qn(i){return wi(i.diffs,ti)}function Zn(i){return wi(i.diffs,oi)}const Ai=hn;function Ci(i){const e=Tn(fi(i),{resolveDiff:()=>mn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const qi=i=>{const{node:e,additionalInfoPrecededBy:n=w.DDL_COLUMN_ROW,isLastInList:o=!1,[P]:l}=i,a=Z(),r=e.value(),d=s.useMemo(()=>Ai(e),[e]),f=s.useMemo(()=>Ci(e),[e]),u=s.useMemo(()=>Qn(e),[e]),c=s.useCallback(N=>r?si(d,N)?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx(te,{isVisible:!0,value:r.columnType.label,appearance:"text"}),t.jsx(re,{columnId:e.id,layoutSide:N,value:r,flagDiffs:u})]}):t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{}),[u,e.id,d,r]),g=s.useCallback(N=>{const C=r==null?void 0:r.defaultValue;return G(C)?t.jsx(X,{isVisible:!0,value:C}):t.jsx(t.Fragment,{})},[r]),p=s.useCallback(N=>{const C=r==null?void 0:r.generatedExpression;return G(C)?t.jsx(X,{isVisible:!0,value:C}):t.jsx(t.Fragment,{})},[r]),v=s.useCallback(N=>{var C;return(C=r==null?void 0:r.enumValues)!=null&&C.length?t.jsx("div",{className:"flex flex-wrap items-center gap-2",children:r.enumValues.map((D,L)=>t.jsx(X,{isVisible:!0,value:D},`${D}-${L}`))}):t.jsx(t.Fragment,{})},[r]),h=a===ee,m=!!d,k=s.useMemo(()=>h&&!!(r!=null&&r.description),[h,r==null?void 0:r.description]),y=!!(r!=null&&r.enumValues&&r.enumValues.length>0),_=G(r==null?void 0:r.defaultValue),b=G(r==null?void 0:r.generatedExpression),H=o&&!(h&&(y||_||b)),V=o&&y&&!_&&!b,A=o&&_&&!b,I=o&&b;return r?t.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":l,[R]:H||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:c,usage:M.DdlApiProperty,...f}),k&&!m&&t.jsx(ie,{"data-precededby":w.DDL_COLUMN_ROW,value:r.description??"",variant:x.body2,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty}),h&&!m&&y&&t.jsx(J,{"data-precededby":n,[R]:V||void 0,label:Di,subheader:v}),h&&!m&&_&&t.jsx(J,{"data-precededby":y?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:A||void 0,label:yi,subheader:g}),h&&!m&&b&&t.jsx(J,{"data-precededby":_||y?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[R]:I||void 0,label:bi,subheader:p})]}):null};qi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ea(i,e){let n=!1;return i.map((o,l)=>{const a=l===i.length-1,r=l===0?w.DDL_SECTION_HEADER:n?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:w.DDL_COLUMN_ROW,d=n?w.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:w.DDL_COLUMN_ROW,f={columnNode:o,titlePrecededBy:r,additionalInfoPrecededBy:d,isLastInList:a};return n=e&&Kn(o.value()),f})}const _i=i=>{const{node:e,[P]:n}=i,o=ne(),l=Z(),a=e.value(),r=Rn(e.childrenNodes()),d=l===ee,f=s.useMemo(()=>ea(r,d),[r,d]);return r.length===0?null:t.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[t.jsx(Y,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2}),t.jsx(ai.Provider,{value:o+1,children:f.map(({columnNode:u,titlePrecededBy:c,additionalInfoPrecededBy:g,isLastInList:p})=>Mn(u)?t.jsx(qi,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id):t.jsx(Ni,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id))})]})};_i.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Si=i=>{const{schemaName:e,[P]:n}=i;return e===hi?null:t.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Re}`,children:t.jsx("span",{className:"ddl-schema-name-block",children:e})})};Si.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Ti=i=>{const{node:e,isLastInList:n=!1,[P]:o}=i,l=Z(),a=e.value(),r=s.useMemo(()=>a?a.indexName?a.indexName:De(a.partNames):"",[a]),d=s.useCallback(c=>a?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.indexName&&t.jsx(te,{isVisible:!0,value:`(${De(a.partNames)})`,appearance:"text"}),t.jsx(re,{layoutSide:c,value:a})]}):t.jsx(t.Fragment,{}),[a]),f=s.useMemo(()=>l===ee&&!!(a!=null&&a.description),[l,a==null?void 0:a.description]),u=n;return a?t.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":o,[R]:u||void 0,value:r,expandable:!1,expanded:!0,variant:x.body2,subheader:a.indexName||a.isUnique?d:void 0,usage:M.DdlApiProperty}),f&&t.jsx(ie,{"data-precededby":w.DDL_INDEX_ROW,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty})]}):null};Ti.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Ei=i=>{const{node:e,isLastInList:n=!1,[P]:o}=i,l=Z(),a=e.value(),r=s.useMemo(()=>Ai(e),[e]),d=s.useMemo(()=>Ci(e),[e]),f=s.useMemo(()=>Zn(e),[e]),u=s.useMemo(()=>a?a.indexName?a.indexName:De(a.partNames):"",[a]),c=s.useCallback(h=>a?si(r,h)?t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.indexName&&t.jsx(te,{isVisible:!0,value:`(${De(a.partNames)})`,appearance:"text"}),t.jsx(re,{layoutSide:h,value:a,flagDiffs:f})]}):t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{}),[f,r,a]),g=s.useMemo(()=>l===ee&&!!(a!=null&&a.description),[l,a==null?void 0:a.description]),p=!!r,v=n;return a?t.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[t.jsx(Y,{"data-precededby":o,[R]:v||void 0,value:u,expandable:!1,expanded:!0,variant:x.body2,subheader:a.indexName||a.isUnique||f!=null&&f.isUnique?c:void 0,usage:M.DdlApiProperty,...d}),g&&!p&&t.jsx(ie,{"data-precededby":w.DDL_INDEX_ROW,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:ae,usage:K.DdlApiProperty})]}):null};Ei.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ia(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?w.DDL_SECTION_HEADER:w.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Ii=i=>{const{node:e,[P]:n}=i,o=ne(),l=e.value(),a=Fn(e.childrenNodes()),r=s.useMemo(()=>ia(a),[a]);return a.length===0?null:t.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[t.jsx(Y,{"data-precededby":n,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2}),t.jsx(ai.Provider,{value:o+1,children:r.map(({indexNode:d,titlePrecededBy:f,isLastInList:u})=>On(d)?t.jsx(Ei,{"data-precededby":f,isLastInList:u,node:d},d.id):t.jsx(Ti,{"data-precededby":f,isLastInList:u,node:d},d.id))})]})};Ii.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const na=i=>{const{node:e,noHeading:n=!1,[P]:o=w.ROOT}=i,l=Z(),a=e.value(),r=In(e),d=r.find(Ln),f=r.find(jn),u=!!(a!=null&&a.schemaName),c=l===ee&&!!(a!=null&&a.description),g=n?w.ROOT:w.DDL_TABLE_HEADER_ROW;return t.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&t.jsx(Y,{"data-precededby":o,value:(a==null?void 0:a.tableName)??"",expandable:!1,expanded:!0,variant:x.h1}),u&&t.jsx(Si,{"data-precededby":g,schemaName:(a==null?void 0:a.schemaName)??""}),c&&t.jsx(ie,{"data-precededby":u?w.DDL_TABLE_SCHEMA_ROW:g,value:(a==null?void 0:a.description)??"",variant:x.h4,textFontWeight:"normal",textColor:ae}),d&&t.jsx(_i,{"data-precededby":c?w.DDL_TABLE_DESCRIPTION_ROW:u?w.DDL_TABLE_SCHEMA_ROW:g,node:d}),f&&t.jsx(Ii,{"data-precededby":d!=null&&d.childrenNodes().length?w.DDL_COLUMN_ROW:c?w.DDL_TABLE_DESCRIPTION_ROW:u?w.DDL_TABLE_SCHEMA_ROW:g,node:f})]})};na.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{xe as A,sa as B,Oe as C,ma as D,we as E,di as F,x as G,P as H,yn as I,An as J,Cn as K,fi as L,Tn as M,Y as N,Ne as O,M as P,w as Q,ie as R,He as S,Be as T,ha as U,ae as V,Re as X,ua as a,li as b,ga as c,zi as d,fa as e,ya as f,We as g,Pn as h,E as i,na as j,Un as k,ti as l,oi as m,T as n,an as o,ca as p,Ve as q,pa as r,Ce as s,da as t,Wi as u,Ji as v,$i as w,Yi as x,la as y,ri as z};
