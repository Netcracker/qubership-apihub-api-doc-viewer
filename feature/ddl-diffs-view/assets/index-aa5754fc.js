var Si=Object.defineProperty;var _i=(i,e,n)=>e in i?Si(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var L=(i,e,n)=>(_i(i,typeof e!="symbol"?e+"":e,n),n);import{u as se,v as de,x as we,w as ue,P as Ae,Q as Ue,R as fe,T as ii,U as N,V as Ti,W as Ei,K as Z,X as Ii,M as ee,Y as Mi,Z as ke,_ as P,$ as R,H as Ke,a0 as G,a1 as ni,a2 as z,a3 as ge,a4 as pe,O as Li,a5 as ai,k as Te,S as Ee,a6 as ji,a7 as Oi,y as Fi,a8 as Be,N as ri,a9 as X,aa as Ri,ab as ti,ac as me,h as he,f as oi}from"./DiffBadge-7fb973e3.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const We={SIMPLE:"simple",COMPLEX:"complex"},Pi={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Gi=Object.values(Pi);new Set(Gi);class Ie{aggregateByDescendantDiffs(e,n,a,t){}static isDiffsRecord(e){if(!I(e))return!1;for(const n of Object.values(e))if(!Ie.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return I(n)&&(se(n)||de(n)||we(n)||ue(n))}}function I(i){return li(i)&&!Array.isArray(i)}function li(i){return typeof i=="object"&&i!==null}function Ui(i){return I(i)&&Object.keys(i).every(e=>typeof e=="string")}function He(i){return Array.isArray(i)}function na(i,e,n){let a=i,t=!1;for(const r of e){if(!I(a)&&!He(a))return;if(t){let d;li(a)&&(d=a[r]),!d&&He(a)&&n&&(d=a.find(f=>I(f)&&f[n]===r)),a=d,t=!1;continue}a=a[r],He(a)&&(t=!0)}return a}function aa(i,e){return Object.keys(i).find(n=>i[n]===e)}function ra(i){if(Ie.isDiffsRecord(i))return i}class ta{constructor(){L(this,"tree",null)}pick(e,n){if(!I(e))return null;const a={};for(const t of n){const r=String(t);if(!(r in e))continue;const l=e[r];Array.isArray(l)?a[r]=[...l]:I(l)?a[r]={...l}:a[r]=l}return this.isPartialOf(a,n)?a:null}isPartialOf(e,n){return Object.keys(e).every(a=>n.includes(a))}}const ie=()=>{},oa=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ie,info:ie,warn:ie,error:ie};function Ki(i){return i==null||!I(i)&&!Ae(i)}function la(i){const{source:e,tree:n,supportedNodeKinds:a,createNodeFromRaw:t,createNodeParams:r,createStateForSimpleNode:l,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:u,resolveNodeKey:g,isDisallowedValue:c=Ki,shouldStopAfterNodeCreation:p}=i;return[({value:y,state:h,key:C,path:b})=>{if(typeof C=="symbol")return;if(!I(y)&&!Ae(y))return{value:y};const{alreadyConvertedValuesCache:x,parent:w,container:T}=h,A=x.get(y);if(!A||!f(A)&&!u(A))return{value:y};if(!w||!f(w))return{value:y};const M="#"+Ue(b),v=g(C,y),k=n.createCycledClone(A,M,v,w);return T?T.addNestedNode(k):w&&w.addChildNode(k),{done:!0}},({key:y,value:h,path:C,state:b,rules:x})=>!x||!Array.isArray(x.transformers)?void 0:{value:x.transformers.reduce((A,M)=>M(y,A,e,C,b),h)},({key:y,value:h,path:C,rules:b,state:x})=>{if(!b)return{done:!0};if(typeof y=="symbol")return{done:!0};if(c(h))return{done:!0};if(!b.kind||!a.includes(b.kind))return;const{parent:w,container:T}=x,A="#"+Ue(C),M=g(y,h),{kind:v,complex:k=!1}=b,m=r(h,w,T),E=t(A,M,v,k,m);if(!E)return;T?T.addNestedNode(E):w&&w.addChildNode(E);let Q=h;if(p!=null&&p(E,h)){const K=w?w.descendantDiffs:void 0;if(!K||!(y in K))return{done:!0};const F=K[y];if(!F)return{done:!0};const{data:Ge}=F;ue(Ge)&&(Q=Ge.beforeValue)}const Y=new Map(x.alreadyConvertedValuesCache);(I(h)||Ae(h))&&Y.set(h,E);let O;return f(E)?O=l(x,E,Y):O=d(x,E,Y),{value:Q,state:O}}]}class Bi{}class ye{constructor(e="#",n="",a,t,r){L(this,"type");L(this,"parent");L(this,"container");L(this,"newDataLevel");L(this,"_value");L(this,"_meta");L(this,"_childrenNodes",[]);L(this,"_nestedNodes",[]);L(this,"_diffs",{});L(this,"_diffsSummary",new Set);L(this,"_descendantDiffs",{});L(this,"_descendantDiffsSummary",new Set);L(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=a,this.isCycle=t;const{type:l=We.SIMPLE,value:d=null,parent:f=null,container:u=null,newDataLevel:g=!0,meta:c}=r;this.type=l,this.parent=f,this.container=u,this.newDataLevel=g,this._value=d,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,a){const t=new ye(e,n,this.kind,!0,{type:this.type,parent:a,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return t.setChildrenNodes(this._childrenNodes),t.setNestedNodes(this._nestedNodes),t}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const a of this._nestedNodes){if(a.id===e)return a;if(n&&a.type===We.COMPLEX){const t=a.findNestedNode(e,n);if(t)return t}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const S={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Wi=Object.values(S);function Ye(i=S.TABLE){return{"/columns":{"/items":{"/*":()=>Ye(S.COLUMN)},kind:S.COLUMNS},"/indexes":{"/items":{"/*":()=>Ye(S.INDEX)},kind:S.INDEXES},kind:i}}function Yi(i){return i.kind===fe.Literal&&typeof i.value=="string"}function $i(i){return i.kind===fe.RawExpr&&typeof i.expr=="string"}function Xi(i){return I(i)&&typeof i.expr=="string"}function Ji(i){return I(i)&&typeof i.value=="string"}function zi(i){return I(i)&&i.kind===ii.Domain&&typeof i.type=="string"}function Qi(i){return i.kind===N.BoolType&&typeof i.type=="string"}function Zi(i){return i.kind===N.IntegerType&&typeof i.type=="string"}function $e(i){return i.kind===N.DecimalType&&typeof i.type=="string"}function Xe(i){return i.kind===N.FloatType&&typeof i.type=="string"}function Je(i){return i.kind===N.StringType&&typeof i.type=="string"}function ze(i){return i.kind===N.BinaryType&&typeof i.type=="string"}function Qe(i){return i.kind===N.TimeType&&typeof i.type=="string"}function en(i){return i.kind===N.JSONType&&typeof i.type=="string"}function nn(i){return i.kind===N.SpatialType&&typeof i.type=="string"}function an(i){return i.kind===N.UUIDType&&typeof i.type=="string"}function Ne(i){return i.kind===N.EnumType&&Array.isArray(i.values)}function rn(i){return i.kind===N.UnsupportedType&&typeof i.type=="string"}function Ze(i){return typeof i.type=="string"}function Ce(i){switch(i.kind){case fe.Literal:return Yi(i)?i.value:i.kind;case fe.RawExpr:return $i(i)?i.expr:i.kind;case Ti.NamedDefault:try{return Ce(Ei(i))}catch{return i.kind}default:return Xi(i)?i.expr:Ji(i)?i.value:i.kind}}const tn="Columns",on="Indexes";class sa{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const a=this.extractRealm(e);if(!a)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const t=this.findTableInRealm(a,n);return t?this.buildTableOrientedSpecFromRealm(a,t,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",a.schemas.map(r=>r.name)),null)}buildTableOrientedSpecFromRealm(e,n,a){const t=Z(n.attrs,ee.Comment);return{tableName:n.name,schemaName:a.schemaName,...t?{description:t.text}:{},columns:{title:tn,items:(n.columns??[]).map(r=>this.buildColumnRowValue(e,n,r,a.schemaName))},indexes:{title:on,items:(n.indexes??[]).map(r=>this.buildIndexRowValue(r))}}}extractRealm(e){return this.isRealm(e)?e:I(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var t;const a=e.schemas.find(r=>r.name===n.schemaName);if(a)return(t=a.tables)==null?void 0:t.find(r=>r.name===n.name)}isRealm(e){return I(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!I(e)||typeof e.tableName!="string"||!I(e.columns)||!Array.isArray(e.columns.items)||!I(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,a,t){var y,h,C;const r=Z(a.attrs,ee.Comment),l=(y=a.attrs)==null?void 0:y.find(b=>b.kind===Ii.Identity),d=Z(a.attrs,ee.GeneratedExpr),f=l!==void 0||d!==void 0,u=this.findForeignKeyForColumn(n,a),g=u!==void 0,c=g&&u?this.buildForeignKeyTarget(e,u,a,t):void 0,p=this.formatColumnType(a.type),_=(h=a.type)==null?void 0:h.type,V=_&&Ne(_)?_.values:void 0,D=this.isPrimaryKeyColumn(n,a);return{columnName:a.name,columnType:p,...V?{enumValues:V}:{},isPrimaryKey:D,isForeignKey:g,...c?{foreignKeyTarget:c}:{},isGenerated:f,...l?{generatedBy:"identity"}:{},...d&&!l?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(n,a),isNotNull:!D&&((C=a.type)==null?void 0:C.null)===!1,...a.default!==void 0?{defaultValue:Ce(a.default)}:{},...r?{description:r.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((t,r)=>t.seqNo-r.seqNo).map(t=>this.formatIndexPartName(t)).filter(t=>t.length>0),a=Z(e.attrs,ee.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...a?{description:a.text}:{}}}findSchemaNameForTable(e,n){var a;for(const t of e.schemas)if((a=t.tables)!=null&&a.some(r=>r===n))return t.name}isPrimaryKeyColumn(e,n){var a;return(((a=e.primaryKey)==null?void 0:a.parts)??[]).some(t=>{var r;return((r=t.column)==null?void 0:r.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(a=>{var t,r,l;return a.unique===!0&&((t=a.parts)==null?void 0:t.length)===1&&((l=(r=a.parts[0])==null?void 0:r.column)==null?void 0:l.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeyForColumn(e,n){var a;return(a=e.foreignKeys)==null?void 0:a.find(t=>{var r;return(r=t.columns)==null?void 0:r.some(l=>this.isSameForeignKeyColumn(l,n))})}buildForeignKeyTarget(e,n,a,t){var u,g;const r=((u=n.columns)==null?void 0:u.findIndex(c=>this.isSameForeignKeyColumn(c,a)))??-1;if(r<0)return;const l=n.refTable,d=(g=n.refColumns)==null?void 0:g[r];if(!l||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,l,t);if(f)return{schemaName:f,tableName:l.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,n,a){const t=this.findSchemaNameForTable(e,n);if(t)return t;const r=this.findUniqueSchemaNameForTableName(e,n.name);return r||a}findUniqueSchemaNameForTableName(e,n){const a=e.schemas.filter(t=>{var r;return(r=t.tables)==null?void 0:r.some(l=>l.name===n)}).map(t=>t.name);if(a.length===1)return a[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(zi(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return Qi(e)?{kind:N.BoolType,typeName:e.type,label:n}:Zi(e)?{kind:N.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:$e(e)?{kind:N.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Xe(e)?{kind:N.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Je(e)?{kind:N.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ze(e)?{kind:N.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:Qe(e)?{kind:N.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:en(e)?{kind:N.JSONType,typeName:e.type,label:n}:nn(e)?{kind:N.SpatialType,typeName:e.type,label:n}:an(e)?{kind:N.UUIDType,typeName:e.type,label:n}:Ne(e)?{kind:N.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:rn(e)?{kind:N.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:Ze(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ii.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return $e(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Je(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ze(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Xe(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):Qe(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ne(e)?n=e.type??e.values[0]??"enum":Ze(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const a=n.filter(t=>t!==void 0);return a.length===0?e:`${e} (${a.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Ce(e.expr):""}}const ln=new Set([S.TABLE,S.COLUMNS,S.COLUMN,S.INDEXES,S.INDEX]);class si extends Bi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,a,t){return!Ui(a)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:t(a,si.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return ln.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case S.TABLE:return["tableName","schemaName","description"];case S.COLUMNS:case S.INDEXES:return["title"];case S.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTarget","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case S.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const sn=s.createContext(!1),Me=i=>{const{children:e,diffType:n,diffTypeCause:a,hidden:t=!1}=i;return t||!n?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Mi,{variant:n,message:a}),e]})};Me.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const be=s.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});be.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const De=s.memo(i=>{const{left:e,right:n}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:n})]})});De.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Le="px-4",dn="",un="px-4",je="";var j=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(j||{});var H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const fn=i=>{const{isExpandable:e,expanded:n,setExpanded:a,variant:t}=i,r=s.useCallback(()=>{a==null||a(l=>!l)},[a]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${pn(t)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:r,children:n?"Show less":"Show more"})})})},di=s.memo(i=>{const{value:e,variant:n,layoutSide:a,onClick:t,diff:r,usage:l,highlightingMode:d=ke.Default}=i,f=d===ke.Default,u=d===ke.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:_,label:V}=i,[D,y]=s.useState(!1),h=s.useCallback((A,M,v)=>{if(v)return null;const k=u?"":M.join(" "),m=`text-value ${t?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),E=`${m} ${k}`.trim(),Q={onClick:t,..._!=null&&_.trim()?{style:{color:_}}:{}};A=D?A:cn(A);const Y=(O,K)=>{const F={...Q,className:K};switch(n){case H.h1:return o.jsx("h1",{...F,children:O});case H.h2:return o.jsx("h2",{...F,children:O});case H.h3:return o.jsx("h3",{...F,children:O});case H.h4:return o.jsx("h4",{...F,children:O});case H.h5:return o.jsx("h5",{...F,children:O});case H.h6:return o.jsx("h6",{...F,children:O});case H.body1:return o.jsx("span",{...F,className:`${K} text-value-body1`.trim(),children:O});case H.body2:return o.jsx("span",{...F,className:`${K} text-value-body2`.trim(),children:O})}};return V?Y(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${V}: `}),o.jsx("span",{className:k,children:A})]}),m):Y(A,E)},[D,u,V,p,c,t,_,g,n]),C=s.useCallback(A=>{const M=[];let v=A,k=!1;if(r){const{data:m,styles:E}=r;switch(a){case G:M.push(R.highlighter(E.before.textHighlighterColor)),f&&(de(m)&&(v=$(m.beforeValue)?m.beforeValue:v),ue(m)&&(l===j.JsoProperty&&!u&&M.push(R.highlighter(Ke.Yellow)),v=$(m.beforeValue)?m.beforeValue:v),we(m)&&(v=$(m.beforeKey)?m.beforeKey:v)),se(m)&&(k=!0);break;case P:M.push(R.highlighter(E.after.textHighlighterColor)),f&&(se(m)&&(v=$(m.afterValue)?m.afterValue:v),ue(m)&&(l===j.JsoProperty&&!u&&M.push(R.highlighter(Ke.Yellow)),v=$(m.afterValue)?m.afterValue:v),we(m)&&(v=$(m.afterKey)?m.afterKey:v)),de(m)&&(k=!0);break}}return[v,M,k]},[r,f,u,a,l]),[b,x,w]=C(e);return s.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[h(b,x,w),!w&&o.jsx(fn,{isExpandable:gn(b),expanded:D,setExpanded:y,variant:n})]}),[h,b,x,w,D,y,n])}),qe=5,Se=300;function gn(i){return i?i.length>Se||ni.trim(i.split(`
`)).length>qe:!1}function cn(i){if(!i)return;if(i.length>Se)return i.slice(0,Se)+"...";const e=ni.trim(i.split(`
`));return e.length>qe?e.slice(0,qe).join(`
`)+"...":i}function $(i){return typeof i=="string"}function pn(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const U="data-precededby",B="data-ddl-list-last-row";var q=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(q||{}),W=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(W||{});const mn={[W.DdlApiProperty]:je},hn={[W.DdlApiProperty]:["min-h-[26px]"]};function yn(i){const e=mn[i]??Le,n=hn[i]??[];return[e,...n].join(" ")}const ae=s.memo(i=>{const{value:e,variant:n,layoutSide:a,usage:t=W.Default}=i,{label:r,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:u}=i,{[U]:g}=i,{diff:c,descendantDiffs:p,diffsSeverities:_}=i,V=z(),D=t===W.DdlApiProperty,y=D&&V>0,h=s.useMemo(()=>{if(!c)return[];const{data:x,styles:w}=c;if(!x)return[];const T=[];return a===G&&T.push(R.background(w.before.backgroundColor)),a===P&&T.push(R.background(w.after.backgroundColor)),T},[c,a]),C=s.useMemo(()=>yn(t),[t]),b=o.jsx(di,{label:r,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:u,value:e,variant:n,layoutSide:a,diff:c});return o.jsxs("div",{"data-precededby":g,className:`text-row-content flex h-full ${D?"items-stretch":""} ${C} gap-2 ${h.join(" ")}`,children:[y&&o.jsxs("div",{"data-precededby":g,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ge,{level:V}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:b}):b]})});ae.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ve=s.memo(i=>{const e=pe(),{diffsSeverities:n,diffsSeverityPlacement:a=Li.DescriptionRow}=i,t=s.useMemo(()=>n==null?void 0:n[a],[n,a]),r=s.useMemo(()=>t==null?void 0:t.type,[t]),l=s.useMemo(()=>ai(t==null?void 0:t.causedAt),[t]);switch(e){case Ee:return o.jsx(Me,{diffType:r,diffTypeCause:l,hidden:!1,children:o.jsx(De,{left:o.jsx(ae,{...i,layoutSide:G}),right:o.jsx(ae,{...i,layoutSide:P})})});case Te:return o.jsx(be,{content:o.jsx(ae,{...i,layoutSide:P})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ve.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const Oe="#353C4E",bn=s.createContext(void 0);function Dn(){return s.useContext(bn)}const ui=i=>{const{expandable:e,expanded:n,onClick:a,level:t}=i,r=s.useContext(sn),l=t>0,d=a??(()=>{r&&console.warn("Expander callback is not provided.")});return!e&&!l?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${l?"gap-0.5":""}`,children:[l&&o.jsx(ji,{short:e}),e&&n!==void 0&&o.jsx(Oi,{onToggle:d,expanded:n})]})};ui.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const vn={[j.JsoProperty]:dn,[j.DdlApiSection]:un,[j.DdlApiProperty]:je},kn={[j.JsoProperty]:["min-h-[26px]"],[j.DdlApiProperty]:["min-h-[26px]"]};function Hn(i){const e=vn[i]??Le,n=kn[i]??[];return[e,...n].join(" ")}const re=s.memo(i=>{const{expandable:e,expanded:n,onClickExpander:a,value:t,variant:r,layoutSide:l,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:u,usage:g=j.Default,highlightingMode:c=Fi}=i,{diff:p,descendantDiffs:_,diffsSeverities:V}=i,{[U]:D,[B]:y}=i,h=s.useMemo(()=>{switch(g){case j.Default:return c.get(Be.Default);case j.AsyncApiJsoSection:case j.JsoProperty:return c.get(Be.JsoPropertyKey)}},[c,g]),C=z(),b=Dn(),x=s.useMemo(()=>b?l===G?b.beforeLevel:b.afterLevel:C,[l,C,b]),w=s.useMemo(()=>{const k=[];if(!p)return k;const{data:m,styles:E}=p;return m&&(l===G&&k.push(R.background(E.before.backgroundColor)),l===P&&k.push(R.background(E.after.backgroundColor))),k},[p,l]),T=s.useMemo(()=>f?o.jsx(di,{"data-precededby":D,value:t,variant:r,layoutSide:l,diff:p,usage:g,highlightingMode:h,onClick:a}):null,[f,D,t,r,l,p,g,h,a]),A=g===j.DdlApiProperty,M=s.useMemo(()=>d?o.jsxs(o.Fragment,{children:[(e||x>0)&&o.jsxs("div",{"data-precededby":D,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ge,{level:x}),o.jsx(ui,{expandable:e,expanded:n,onClick:a,level:x})]}),!A&&T]}):x>0&&o.jsx(ge,{level:x}),[d,e,x,D,n,a,T,A]),v=s.useMemo(()=>Hn(g),[g]);return o.jsxs("div",{"data-precededby":D,"data-ddl-list-last-row":y?!0:void 0,className:`title-row-content flex ${A?"items-stretch":"items-center"} h-full ${v} gap-2 ${w.join(" ")}`,children:[M,A?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[T,u==null?void 0:u(l)]}):u==null?void 0:u(l)]})});re.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const J=s.memo(i=>{const e=pe(),{diff:n,diffsSeverities:a,enableHeaderValue:t}=i,r=s.useMemo(()=>a==null?void 0:a["title-row"],[a]),l=s.useMemo(()=>r==null?void 0:r.type,[r]),d=s.useMemo(()=>ai(r==null?void 0:r.causedAt),[r]);switch(e){case Ee:return o.jsx(Me,{diffType:l,diffTypeCause:d,hidden:!1,children:o.jsx(De,{left:o.jsx(re,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:t,layoutSide:G}),right:o.jsx(re,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:t,layoutSide:P})})});case Te:return o.jsx(be,{content:o.jsx(re,{...i,layoutSide:P})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});J.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function da(i,e){return s.useMemo(()=>e(i)?fi(i):{},[e,i])}function fi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Nn(i,e={}){const{diffKey:n,fallbackToNodeDiff:a=!0,includeDescendantDiffs:t=!0,diffsSeverityPlacement:r,resolveDiff:l}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!d)return{};const g=Object.entries(d),c=V=>{const D=g.find(([y])=>y===String(V));return D==null?void 0:D[1]},p=n?c(n):void 0;return{diff:l?l(d,c):a?d[ri]??p:p,...t?{descendantDiffs:f}:{},diffsSeverities:u,...r?{diffsSeverityPlacement:r}:{}}}function Vn(i){return Wi.includes(i.kind)}function xn(i){return i.childrenNodes().filter(Vn)}function ua(i){return i.kind===S.TABLE}function wn(i){return i.kind===S.COLUMNS}function gi(i){return i.kind===S.COLUMN}function Ve(i){return gi(i)&&i instanceof ye}function An(i){return i.kind===S.INDEXES}function ci(i){return i.kind===S.INDEX}function xe(i){return ci(i)&&i instanceof ye}function Cn(i){return i.filter(gi)}function qn(i){return i.filter(ci)}const Sn=s.createContext(null);function _n(){const i=s.useContext(Sn);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Tn=({href:i,className:e,children:n})=>o.jsx("a",{href:i,className:e,children:n});Tn.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function En(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const In=["isPrimaryKey","isUnique","isNotNull","isGenerated","isForeignKey"],Mn=["isUnique"];function pi(i,e){const n={};let a=!1;for(const t of e){const r=i[t];r&&(n[t]=r,a=!0)}return a?n:void 0}function Ln(i){return pi(i.diffs,In)}function jn(i){return pi(i.diffs,Mn)}function Fe(i){const e=i.diffs[ri];if(e&&(se(e.data)||de(e.data)))return e}function mi(i){const e=Fe(i);if(!e)return{};const n=fi(i);return{...Nn(n,{resolveDiff:()=>e}),highlightingMode:e.highlightingMode}}function hi(i,e){return i?(e===G?i.styles.before:i.styles.after).isHeaderVisible:!0}const On="ux-badge_ddlapi_primary-key",yi="ux-badge_ddlapi_foreign-key",Fn="ux-badge_ddlapi_unique",Rn="ux-badge_ddlapi_not-null",Pn="ux-badge_ddlapi_generated",bi="public",Gn="Default",Un="As",Kn="Values";function Bn(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===bi?e:`${i.schemaName}.${e}`}function ei(i){return i.join(", ")}const _e=s.memo(i=>{const{target:e,hideBadge:n=!1}=i,{navigationLinkBuilder:a,navigationLinkComponent:t}=_n(),r=s.useMemo(()=>a(e.schemaName,e.tableName,e.columnName),[a,e]),l=o.jsx(t,{href:r,className:"ddlapi-foreign-key-link",children:Bn(e)});return n?l:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Ri,{text:"FK",colorSchema:yi,inline:!0}),l]})});_e.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."}}};function Di(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function vi(i,e){return!!i||!!e}function ki(i,e){return e===G?i.styles.before:i.styles.after}function Wn(i,e){if(i)return R.background(ki(i,e).backgroundColor)}function Hi(i,e){return i?ki(i,e).isContentVisible:!0}function ce(i,e,n){const a=Wn(e,n);return a?o.jsx("span",{className:`inline-flex items-center ${a}`,children:i}):i}function ne(i){const{label:e,colorSchema:n,flagValue:a,flagDiff:t,layoutMode:r,layoutSide:l}=i;if(!vi(a,t))return null;if(!Hi(t,l))return ce(Di(),t,l);const d=t==null?void 0:t.data;return ce(o.jsx(ti,{label:e,colorSchema:n,layoutMode:r,layoutSide:l,isNodeChanged:!1,isContentChanged:!!d,$changes:d}),t,l)}const Re=s.memo(i=>{const{value:e,flagDiffs:n,layoutSide:a}=i,t=pe(),r=s.useMemo(()=>n??{},[n]),l=s.useMemo(()=>ne({label:"PK",colorSchema:On,flagValue:e.isPrimaryKey,flagDiff:r.isPrimaryKey,layoutMode:t,layoutSide:a}),[r.isPrimaryKey,t,a,e.isPrimaryKey]),d=s.useMemo(()=>ne({label:"unique",colorSchema:Fn,flagValue:e.isUnique,flagDiff:r.isUnique,layoutMode:t,layoutSide:a}),[r.isUnique,t,a,e.isUnique]),f=s.useMemo(()=>ne({label:"not null",colorSchema:Rn,flagValue:e.isNotNull,flagDiff:r.isNotNull,layoutMode:t,layoutSide:a}),[r.isNotNull,t,a,e.isNotNull]),u=s.useMemo(()=>ne({label:"generated",colorSchema:Pn,flagValue:e.isGenerated,flagDiff:r.isGenerated,layoutMode:t,layoutSide:a}),[r.isGenerated,t,a,e.isGenerated]),g=s.useMemo(()=>{const p=r.isForeignKey;if(!vi(e.isForeignKey,p))return null;if(!Hi(p,a))return ce(Di(),p,a);const _=p==null?void 0:p.data;return _?ce(o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(ti,{label:"FK",colorSchema:yi,layoutMode:t,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:_}),e.foreignKeyTarget&&o.jsx(_e,{target:e.foreignKeyTarget,hideBadge:!0})]}),p,a):e.foreignKeyTarget?o.jsx(_e,{target:e.foreignKeyTarget}):null},[r.isForeignKey,t,a,e.foreignKeyTarget,e.isForeignKey]),c=s.useMemo(()=>[l,d,f,u,g].filter(Boolean),[g,u,f,l,d]);return c.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:c})});Re.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ni=s.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?o.jsx("span",{className:a,children:`${n}`}):null});Ni.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Yn(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const Pe=s.memo(i=>{const{isVisible:e,value:n,appearance:a}=i,t=Yn({appearance:a});return o.jsx(Ni,{isVisible:e,value:n,className:t})});Pe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const te=s.memo(i=>{const{label:e,subheader:n,layoutSide:a}=i,{[U]:t,[B]:r}=i,l=z();return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":t,"data-ddl-list-last-row":r?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${je} min-h-[26px] gap-2`,children:[l>0&&o.jsxs("div",{"data-precededby":t,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ge,{level:l}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(a)]})]})});te.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=s.memo(i=>{const e=pe();switch(e){case Ee:return o.jsx(De,{left:o.jsx(te,{...i,layoutSide:G}),right:o.jsx(te,{...i,layoutSide:P})});case Te:return o.jsx(be,{content:o.jsx(te,{...i,layoutSide:P})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""}}};const Vi=s.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?o.jsx("span",{className:a,children:`${n}`}):null});Vi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function $n(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const le=s.memo(i=>{const{isVisible:e,value:n}=i,a=$n();return o.jsx(Vi,{isVisible:e,value:n,className:a})});le.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const xi=i=>{const{node:e,additionalInfoPrecededBy:n=q.DDL_COLUMN_ROW,isLastInList:a=!1,[U]:t}=i,r=me(),l=e.value(),d=s.useMemo(()=>Ve(e)?Fe(e):void 0,[e]),f=s.useMemo(()=>Ve(e)?mi(e):{},[e]),u=s.useMemo(()=>Ve(e)?Ln(e):void 0,[e]),g=s.useCallback(v=>l?hi(d,v)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(Pe,{isVisible:!0,value:l.columnType.label,appearance:"text"}),o.jsx(Re,{layoutSide:v,value:l,flagDiffs:u})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[u,d,l]),c=s.useCallback(v=>{const k=l==null?void 0:l.defaultValue;return X(k)?o.jsx(le,{isVisible:!0,value:k}):o.jsx(o.Fragment,{})},[l]),p=s.useCallback(v=>{const k=l==null?void 0:l.generatedExpression;return X(k)?o.jsx(le,{isVisible:!0,value:k}):o.jsx(o.Fragment,{})},[l]),_=s.useCallback(v=>{var k;return(k=l==null?void 0:l.enumValues)!=null&&k.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:l.enumValues.map((m,E)=>o.jsx(le,{isVisible:!0,value:m},`${m}-${E}`))}):o.jsx(o.Fragment,{})},[l]),V=r===he,D=!!d,y=s.useMemo(()=>V&&!!(l!=null&&l.description),[V,l==null?void 0:l.description]),h=!!(l!=null&&l.enumValues&&l.enumValues.length>0),C=X(l==null?void 0:l.defaultValue),b=X(l==null?void 0:l.generatedExpression),w=a&&!(V&&(h||C||b)),T=a&&h&&!C&&!b,A=a&&C&&!b,M=a&&b;return l?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(J,{"data-precededby":t,[B]:w||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:g,usage:j.DdlApiProperty,...f}),y&&!D&&o.jsx(ve,{"data-precededby":q.DDL_COLUMN_ROW,value:l.description??"",variant:H.body2,textFontWeight:"normal",textColor:Oe,usage:W.DdlApiProperty}),V&&!D&&h&&o.jsx(oe,{"data-precededby":n,[B]:T||void 0,label:Kn,subheader:_}),V&&!D&&C&&o.jsx(oe,{"data-precededby":h?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:A||void 0,label:Gn,subheader:c}),V&&!D&&b&&o.jsx(oe,{"data-precededby":C||h?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[B]:M||void 0,label:Un,subheader:p})]}):null};xi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMN>
| DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`}]},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Xn(i,e){let n=!1;return i.map((a,t)=>{const r=t===i.length-1,l=t===0?q.DDL_SECTION_HEADER:n?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,d=n?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,f={columnNode:a,titlePrecededBy:l,additionalInfoPrecededBy:d,isLastInList:r};return n=e&&En(a.value()),f})}const wi=i=>{const{node:e,[U]:n}=i,a=z(),t=me(),r=e.value(),l=Cn(e.childrenNodes()),d=t===he,f=s.useMemo(()=>Xn(l,d),[l,d]);return l.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx(J,{"data-precededby":n,value:(r==null?void 0:r.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2}),o.jsx(oi.Provider,{value:a+1,children:f.map(({columnNode:u,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>o.jsx(xi,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:u},u.id))})]})};wi.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Ai=i=>{const{schemaName:e,[U]:n}=i;return e===bi?null:o.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Le}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Ai.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Ci=i=>{const{node:e,isLastInList:n=!1,[U]:a}=i,t=me(),r=e.value(),l=s.useMemo(()=>xe(e)?Fe(e):void 0,[e]),d=s.useMemo(()=>xe(e)?mi(e):{},[e]),f=s.useMemo(()=>xe(e)?jn(e):void 0,[e]),u=s.useMemo(()=>r?r.indexName?r.indexName:ei(r.partNames):"",[r]),g=s.useCallback(V=>r?hi(l,V)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.indexName&&o.jsx(Pe,{isVisible:!0,value:`(${ei(r.partNames)})`,appearance:"text"}),o.jsx(Re,{layoutSide:V,value:r,flagDiffs:f})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,l,r]),c=s.useMemo(()=>t===he&&!!(r!=null&&r.description),[t,r==null?void 0:r.description]),p=!!l,_=n;return r?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx(J,{"data-precededby":a,[B]:_||void 0,value:u,expandable:!1,expanded:!0,variant:H.body2,subheader:r.indexName||r.isUnique||f!=null&&f.isUnique?g:void 0,usage:j.DdlApiProperty,...d}),c&&!p&&o.jsx(ve,{"data-precededby":q.DDL_INDEX_ROW,value:r.description??"",variant:H.body1,textFontWeight:"normal",textColor:Oe,usage:W.DdlApiProperty})]}):null};Ci.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEX>
| DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`}]},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Jn(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?q.DDL_SECTION_HEADER:q.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const qi=i=>{const{node:e,[U]:n}=i,a=z(),t=e.value(),r=qn(e.childrenNodes()),l=s.useMemo(()=>Jn(r),[r]);return r.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx(J,{"data-precededby":n,value:(t==null?void 0:t.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2}),o.jsx(oi.Provider,{value:a+1,children:l.map(({indexNode:d,titlePrecededBy:f,isLastInList:u})=>o.jsx(Ci,{"data-precededby":f,isLastInList:u,node:d},d.id))})]})};qi.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const zn=i=>{const{node:e,noHeading:n=!1,[U]:a=q.ROOT}=i,t=me(),r=e.value(),l=xn(e),d=l.find(wn),f=l.find(An),u=!!(r!=null&&r.schemaName),g=t===he&&!!(r!=null&&r.description),c=n?q.ROOT:q.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&o.jsx(J,{"data-precededby":a,value:(r==null?void 0:r.tableName)??"",expandable:!1,expanded:!0,variant:H.h1}),u&&o.jsx(Ai,{"data-precededby":c,schemaName:(r==null?void 0:r.schemaName)??""}),g&&o.jsx(ve,{"data-precededby":u?q.DDL_TABLE_SCHEMA_ROW:c,value:(r==null?void 0:r.description)??"",variant:H.h4,textFontWeight:"normal",textColor:Oe}),d&&o.jsx(wi,{"data-precededby":g?q.DDL_TABLE_DESCRIPTION_ROW:u?q.DDL_TABLE_SCHEMA_ROW:c,node:d}),f&&o.jsx(qi,{"data-precededby":d!=null&&d.childrenNodes().length?q.DDL_COLUMN_ROW:g?q.DDL_TABLE_DESCRIPTION_ROW:u?q.DDL_TABLE_SCHEMA_ROW:c,node:f})]})};zn.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{Ie as A,sn as B,bn as C,sa as D,Dn as E,fi as F,Nn as G,J as H,j as I,ve as J,da as K,Oe as L,be as O,q as P,ye as S,We as T,Le as X,ta as a,si as b,la as c,Wi as d,oa as e,ua as f,Ye as g,Sn as h,I as i,zn as j,Tn as k,S as l,He as m,Pi as n,Bi as o,Ui as p,Gi as q,na as r,li as s,ra as t,aa as u,Me as v,De as w,di as x,H as y,U as z};
