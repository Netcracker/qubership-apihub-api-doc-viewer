var Fi=Object.defineProperty;var Oi=(i,e,n)=>e in i?Fi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var j=(i,e,n)=>(Oi(i,typeof e!="symbol"?e+"":e,n),n);import{u as ie,v as ne,x as Se,w as ae,F as _e,G as Ye,J as Ri,K as Pi,M as Gi,O as Ui,P as Bi,Q as Ki,R as De,T as ti,U as _,V as Wi,W as Yi,z as ge,X as $i,A as ce,Y as Xi,Z as we,_ as B,$ as Y,H as ee,a0 as K,a1 as ri,a2 as le,a3 as ve,a4 as xe,B as oi,a5 as li,k as je,S as Fe,a6 as Ji,a7 as zi,y as Qi,a8 as $e,N as Oe,a9 as G,aa as Zi,ab as si,ac as te,h as re,ad as Xe,f as di}from"./DiffBadge-7380a431.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as s}from"./index-f46741a2.js";const Je={SIMPLE:"simple",COMPLEX:"complex"},en={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},nn=Object.values(en);new Set(nn);class Re{aggregateByDescendantDiffs(e,n,a,l){}static isDiffsRecord(e){if(!L(e))return!1;for(const n of Object.values(e))if(!Re.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return L(n)&&(ie(n)||ne(n)||Se(n)||ae(n))}}function L(i){return ui(i)&&!Array.isArray(i)}function ui(i){return typeof i=="object"&&i!==null}function an(i){return L(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ae(i){return Array.isArray(i)}function ha(i,e,n){let a=i,l=!1;for(const t of e){if(!L(a)&&!Ae(a))return;if(l){let d;ui(a)&&(d=a[t]),!d&&Ae(a)&&n&&(d=a.find(f=>L(f)&&f[n]===t)),a=d,l=!1;continue}a=a[t],Ae(a)&&(l=!0)}return a}function ya(i,e){return Object.keys(i).find(n=>i[n]===e)}function ba(i){if(Re.isDiffsRecord(i))return i}class Da{constructor(){j(this,"tree",null)}pick(e,n){if(!L(e))return null;const a={};for(const l of n){const t=String(l);if(!(t in e))continue;const r=e[t];Array.isArray(r)?a[t]=[...r]:L(r)?a[t]={...r}:a[t]=r}return this.isPartialOf(a,n)?a:null}isPartialOf(e,n){return Object.keys(e).every(a=>n.includes(a))}}const pe=()=>{},va=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:pe,info:pe,warn:pe,error:pe};function tn(i){return i==null||!L(i)&&!_e(i)}function ka(i){const{source:e,tree:n,supportedNodeKinds:a,createNodeFromRaw:l,createNodeParams:t,createStateForSimpleNode:r,createStateForComplexNode:d,isSimpleNode:f,isComplexNode:u,resolveNodeKey:c,isDisallowedValue:g=tn,shouldStopAfterNodeCreation:p}=i;return[({value:v,state:h,key:S,path:y})=>{if(typeof S=="symbol")return;if(!L(v)&&!_e(v))return{value:v};const{alreadyConvertedValuesCache:q,parent:x,container:H}=h,A=q.get(v);if(!A||!f(A)&&!u(A))return{value:v};if(!x||!f(x))return{value:v};const E="#"+Ye(y),V=c(S,v),C=n.createCycledClone(A,E,V,x);return H?H.addNestedNode(C):x&&x.addChildNode(C),{done:!0}},({key:v,value:h,path:S,state:y,rules:q})=>!q||!Array.isArray(q.transformers)?void 0:{value:q.transformers.reduce((A,E)=>E(v,A,e,S,y),h)},({key:v,value:h,path:S,rules:y,state:q})=>{if(!y)return{done:!0};if(typeof v=="symbol")return{done:!0};if(g(h))return{done:!0};if(!y.kind||!a.includes(y.kind))return;const{parent:x,container:H}=q,A="#"+Ye(S),E=c(v,h),{kind:V,complex:C=!1}=y,b=t(h,x,H),I=l(A,E,V,C,b);if(!I)return;H?H.addNestedNode(I):x&&x.addChildNode(I);let fe=h;if(p!=null&&p(I,h)){const X=x?x.descendantDiffs:void 0;if(!X||!(v in X))return{done:!0};const R=X[v];if(!R)return{done:!0};const{data:We}=R;ae(We)&&(fe=We.beforeValue)}const Q=new Map(q.alreadyConvertedValuesCache);(L(h)||_e(h))&&Q.set(h,I);let F;return f(I)?F=r(q,I,Q):F=d(q,I,Q),{value:fe,state:F}}]}class rn{}class He{constructor(e="#",n="",a,l,t){j(this,"type");j(this,"parent");j(this,"container");j(this,"newDataLevel");j(this,"_value");j(this,"_meta");j(this,"_childrenNodes",[]);j(this,"_nestedNodes",[]);j(this,"_diffs",{});j(this,"_diffsSummary",new Set);j(this,"_descendantDiffs",{});j(this,"_descendantDiffsSummary",new Set);j(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=a,this.isCycle=l;const{type:r=Je.SIMPLE,value:d=null,parent:f=null,container:u=null,newDataLevel:c=!0,meta:g}=t;this.type=r,this.parent=f,this.container=u,this.newDataLevel=c,this._value=d,this._meta=g}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,a){const l=new He(e,n,this.kind,!0,{type:this.type,parent:a,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return l.setChildrenNodes(this._childrenNodes),l.setNestedNodes(this._nestedNodes),l}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const a of this._nestedNodes){if(a.id===e)return a;if(n&&a.type===Je.COMPLEX){const l=a.findNestedNode(e,n);if(l)return l}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const U=class U{static maxDiffByDiffType(...e){let n;for(const a of e)a&&U.compareDiffTypes(a.type,n==null?void 0:n.type)>0&&(n=a);return n}static maxChangedPropertyMetaDataByDiffType(...e){const n=e.filter(l=>!!l);let a;for(const l of n)U.compareDiffTypes(l.data.type,a==null?void 0:a.data.type)>0&&(a=l);return a}static compareDiffTypes(e,n){return!e&&!n?0:!e&&n?U.DIFF_TYPE_SEVERITIES[n]:e&&!n?U.DIFF_TYPE_SEVERITIES[e]:U.DIFF_TYPE_SEVERITIES[e]-U.DIFF_TYPE_SEVERITIES[n]}};j(U,"DIFF_TYPE_SEVERITIES",{[Ri]:6,[Pi]:5,[Gi]:4,[Ui]:3,[Bi]:2,[Ki]:1});let Te=U;const T={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},on=Object.values(T);function ze(i=T.TABLE){return{"/columns":{"/items":{"/*":()=>ze(T.COLUMN)},kind:T.COLUMNS},"/indexes":{"/items":{"/*":()=>ze(T.INDEX)},kind:T.INDEXES},kind:i}}function ln(i){return i.kind===De.Literal&&typeof i.value=="string"}function sn(i){return i.kind===De.RawExpr&&typeof i.expr=="string"}function dn(i){return L(i)&&typeof i.expr=="string"}function un(i){return L(i)&&typeof i.value=="string"}function fn(i){return L(i)&&i.kind===ti.Domain&&typeof i.type=="string"}function gn(i){return i.kind===_.BoolType&&typeof i.type=="string"}function cn(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function Qe(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function Ze(i){return i.kind===_.FloatType&&typeof i.type=="string"}function ei(i){return i.kind===_.StringType&&typeof i.type=="string"}function ii(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function ni(i){return i.kind===_.TimeType&&typeof i.type=="string"}function pn(i){return i.kind===_.JSONType&&typeof i.type=="string"}function mn(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function hn(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function Ce(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function yn(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function ai(i){return typeof i.type=="string"}function Ee(i){switch(i.kind){case De.Literal:return ln(i)?i.value:i.kind;case De.RawExpr:return sn(i)?i.expr:i.kind;case Wi.NamedDefault:try{return Ee(Yi(i))}catch{return i.kind}default:return dn(i)?i.expr:un(i)?i.value:i.kind}}const bn="Columns",Dn="Indexes";class xa{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const a=this.extractRealm(e);if(!a)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const l=this.findTableInRealm(a,n);return l?this.buildTableOrientedSpecFromRealm(a,l,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",a.schemas.map(t=>t.name)),null)}buildTableOrientedSpecFromRealm(e,n,a){const l=ge(n.attrs,ce.Comment);return{tableName:n.name,schemaName:a.schemaName,...l?{description:l.text}:{},columns:{title:bn,items:(n.columns??[]).map(t=>this.buildColumnRowValue(e,n,t,a.schemaName))},indexes:{title:Dn,items:(n.indexes??[]).map(t=>this.buildIndexRowValue(t))}}}extractRealm(e){return this.isRealm(e)?e:L(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var l;const a=e.schemas.find(t=>t.name===n.schemaName);if(a)return(l=a.tables)==null?void 0:l.find(t=>t.name===n.name)}isRealm(e){return L(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!L(e)||typeof e.tableName!="string"||!L(e.columns)||!Array.isArray(e.columns.items)||!L(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,a,l){var v,h,S;const t=ge(a.attrs,ce.Comment),r=(v=a.attrs)==null?void 0:v.find(y=>y.kind===$i.Identity),d=ge(a.attrs,ce.GeneratedExpr),f=r!==void 0||d!==void 0,u=this.findForeignKeyForColumn(n,a),c=u!==void 0,g=c&&u?this.buildForeignKeyTarget(e,u,a,l):void 0,p=this.formatColumnType(a.type),w=(h=a.type)==null?void 0:h.type,D=w&&Ce(w)?w.values:void 0,m=this.isPrimaryKeyColumn(n,a);return{columnName:a.name,columnType:p,...D?{enumValues:D}:{},isPrimaryKey:m,isForeignKey:c,...g?{foreignKeyTarget:g}:{},isGenerated:f,...r?{generatedBy:"identity"}:{},...d&&!r?{generatedBy:"expression"}:{},...d?{generatedExpression:d.expr}:{},isUnique:this.isUniqueColumn(n,a),isNotNull:!m&&((S=a.type)==null?void 0:S.null)===!1,...a.default!==void 0?{defaultValue:Ee(a.default)}:{},...t?{description:t.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((l,t)=>l.seqNo-t.seqNo).map(l=>this.formatIndexPartName(l)).filter(l=>l.length>0),a=ge(e.attrs,ce.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...a?{description:a.text}:{}}}findSchemaNameForTable(e,n){var a;for(const l of e.schemas)if((a=l.tables)!=null&&a.some(t=>t===n))return l.name}isPrimaryKeyColumn(e,n){var a;return(((a=e.primaryKey)==null?void 0:a.parts)??[]).some(l=>{var t;return((t=l.column)==null?void 0:t.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(a=>{var l,t,r;return a.unique===!0&&((l=a.parts)==null?void 0:l.length)===1&&((r=(t=a.parts[0])==null?void 0:t.column)==null?void 0:r.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeyForColumn(e,n){var a;return(a=e.foreignKeys)==null?void 0:a.find(l=>{var t;return(t=l.columns)==null?void 0:t.some(r=>this.isSameForeignKeyColumn(r,n))})}buildForeignKeyTarget(e,n,a,l){var u,c;const t=((u=n.columns)==null?void 0:u.findIndex(g=>this.isSameForeignKeyColumn(g,a)))??-1;if(t<0)return;const r=n.refTable,d=(c=n.refColumns)==null?void 0:c[t];if(!r||!d)return;const f=this.resolveForeignKeyTargetSchemaName(e,r,l);if(f)return{schemaName:f,tableName:r.name,columnName:d.name}}resolveForeignKeyTargetSchemaName(e,n,a){const l=this.findSchemaNameForTable(e,n);if(l)return l;const t=this.findUniqueSchemaNameForTableName(e,n.name);return t||a}findUniqueSchemaNameForTableName(e,n){const a=e.schemas.filter(l=>{var t;return(t=l.tables)==null?void 0:t.some(r=>r.name===n)}).map(l=>l.name);if(a.length===1)return a[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(fn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return gn(e)?{kind:_.BoolType,typeName:e.type,label:n}:cn(e)?{kind:_.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Qe(e)?{kind:_.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ze(e)?{kind:_.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ei(e)?{kind:_.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ii(e)?{kind:_.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:ni(e)?{kind:_.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:pn(e)?{kind:_.JSONType,typeName:e.type,label:n}:mn(e)?{kind:_.SpatialType,typeName:e.type,label:n}:hn(e)?{kind:_.UUIDType,typeName:e.type,label:n}:Ce(e)?{kind:_.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:yn(e)?{kind:_.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:ai(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:ti.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return Qe(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):ei(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ii(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Ze(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):ni(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ce(e)?n=e.type??e.values[0]??"enum":ai(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const a=n.filter(l=>l!==void 0);return a.length===0?e:`${e} (${a.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Ee(e.expr):""}}const vn=new Set([T.TABLE,T.COLUMNS,T.COLUMN,T.INDEXES,T.INDEX]);class fi extends rn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,a,l){return!an(a)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:l(a,fi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return vn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case T.TABLE:return["tableName","schemaName","description"];case T.COLUMNS:case T.INDEXES:return["title"];case T.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTarget","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case T.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const kn=s.createContext(!1),Pe=i=>{const{children:e,diffType:n,diffTypeCause:a,hidden:l=!1}=i;return l||!n?e:o.jsxs("div",{className:"flex flex-row relative w-full",children:[o.jsx(Xi,{variant:n,message:a}),e]})};Pe.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ve=s.memo(i=>{const{content:e}=i;return o.jsx("div",{className:"flex flex-row w-full",children:e})});Ve.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ne=s.memo(i=>{const{left:e,right:n}=i;return o.jsxs("div",{className:"flex flex-row w-full",children:[o.jsx("div",{className:"w-1/2",children:e}),o.jsx("div",{className:"w-1/2",children:n})]})});Ne.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ge="px-4",xn="",Hn="px-4",Ue="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var k=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(k||{});const Vn=i=>{const{isExpandable:e,expanded:n,setExpanded:a,variant:l}=i,t=s.useCallback(()=>{a==null||a(r=>!r)},[a]);return o.jsx(o.Fragment,{children:e&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${An(l)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})})})},gi=s.memo(i=>{const{value:e,variant:n,layoutSide:a,onClick:l,diff:t,usage:r,highlightingMode:d=we.Default}=i,f=d===we.Default,u=d===we.Invisible,{textFontWeight:c,labelFontWeight:g,labelColor:p,textColor:w,label:D}=i,[m,v]=s.useState(!1),h=s.useCallback((A,E,V)=>{if(V)return null;const C=u?"":E.join(" "),b=`text-value ${l?"hover:cursor-pointer":""} ${c?`font-${c}`:""}`.trim(),I=`${b} ${C}`.trim(),fe={onClick:l,...w!=null&&w.trim()?{style:{color:w}}:{}};A=m?A:wn(A);const Q=(F,X)=>{const R={...fe,className:X};switch(n){case k.h1:return o.jsx("h1",{...R,children:F});case k.h2:return o.jsx("h2",{...R,children:F});case k.h3:return o.jsx("h3",{...R,children:F});case k.h4:return o.jsx("h4",{...R,children:F});case k.h5:return o.jsx("h5",{...R,children:F});case k.h6:return o.jsx("h6",{...R,children:F});case k.body1:return o.jsx("span",{...R,className:`${X} text-value-body1`.trim(),children:F});case k.body2:return o.jsx("span",{...R,className:`${X} text-value-body2`.trim(),children:F})}};return D?Q(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:g?`font-${g}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${D}: `}),o.jsx("span",{className:C,children:A})]}),b):Q(A,I)},[m,u,D,p,g,l,w,c,n]),S=s.useCallback(A=>{const E=[];let V=A,C=!1;if(t){const{data:b,styles:I}=t;switch(a){case K:E.push(Y.highlighter(I.before.textHighlighterColor)),f&&(ne(b)&&(V=Z(b.beforeValue)?b.beforeValue:V),ae(b)&&(r===M.JsoProperty&&!u&&E.push(Y.highlighter(ee.Yellow)),V=Z(b.beforeValue)?b.beforeValue:V),Se(b)&&(V=Z(b.beforeKey)?b.beforeKey:V)),ie(b)&&(C=!0);break;case B:E.push(Y.highlighter(I.after.textHighlighterColor)),f&&(ie(b)&&(V=Z(b.afterValue)?b.afterValue:V),ae(b)&&(r===M.JsoProperty&&!u&&E.push(Y.highlighter(ee.Yellow)),V=Z(b.afterValue)?b.afterValue:V),Se(b)&&(V=Z(b.afterKey)?b.afterKey:V)),ne(b)&&(C=!0);break}}return[V,E,C]},[t,f,u,a,r]),[y,q,x]=S(e);return s.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[h(y,q,x),!x&&o.jsx(Vn,{isExpandable:Nn(y),expanded:m,setExpanded:v,variant:n})]}),[h,y,q,x,m,v,n])}),Ie=5,Le=300;function Nn(i){return i?i.length>Le||ri.trim(i.split(`
`)).length>Ie:!1}function wn(i){if(!i)return;if(i.length>Le)return i.slice(0,Le)+"...";const e=ri.trim(i.split(`
`));return e.length>Ie?e.slice(0,Ie).join(`
`)+"...":i}function Z(i){return typeof i=="string"}function An(i){switch(i){case k.h1:return"text-value-expander--h1";case k.h2:return"text-value-expander--h2";case k.h3:return"text-value-expander--h3";case k.h4:return"text-value-expander--h4";case k.h5:return"text-value-expander--h5";case k.h6:return"text-value-expander--h6";case k.body1:return"text-value-expander--body1";case k.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const P="data-precededby",O="data-ddl-list-last-row";var N=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(N||{}),W=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(W||{});const Cn={[W.DdlApiProperty]:Ue},qn={[W.DdlApiProperty]:["min-h-[26px]"]};function Sn(i){const e=Cn[i]??Ge,n=qn[i]??[];return[e,...n].join(" ")}const he=s.memo(i=>{const{value:e,variant:n,layoutSide:a,usage:l=W.Default}=i,{label:t,labelFontWeight:r,textFontWeight:d,labelColor:f,textColor:u}=i,{[P]:c}=i,{diff:g,descendantDiffs:p,diffsSeverities:w}=i,D=le(),m=l===W.DdlApiProperty,v=m&&D>0,h=s.useMemo(()=>{if(!g)return[];const{data:q,styles:x}=g;if(!q)return[];const H=[];return a===K&&H.push(Y.background(x.before.backgroundColor)),a===B&&H.push(Y.background(x.after.backgroundColor)),H},[g,a]),S=s.useMemo(()=>Sn(l),[l]),y=o.jsx(gi,{label:t,labelFontWeight:r,textFontWeight:d,labelColor:f,textColor:u,value:e,variant:n,layoutSide:a,diff:g});return o.jsxs("div",{"data-precededby":c,className:`text-row-content flex h-full ${m?"items-stretch":""} ${S} gap-2 ${h.join(" ")}`,children:[v&&o.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ve,{level:D}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),m?o.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:y}):y]})});he.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=s.memo(i=>{const e=xe(),{diffsSeverities:n,diffsSeverityPlacement:a=oi.DescriptionRow}=i,l=s.useMemo(()=>n==null?void 0:n[a],[n,a]),t=s.useMemo(()=>l==null?void 0:l.type,[l]),r=s.useMemo(()=>li(l==null?void 0:l.causedAt),[l]);switch(e){case Fe:return o.jsx(Pe,{diffType:t,diffTypeCause:r,hidden:!1,children:o.jsx(Ne,{left:o.jsx(he,{...i,layoutSide:K}),right:o.jsx(he,{...i,layoutSide:B})})});case je:return o.jsx(Ve,{content:o.jsx(he,{...i,layoutSide:B})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const se="#353C4E",_n=s.createContext(void 0);function Tn(){return s.useContext(_n)}const ci=i=>{const{expandable:e,expanded:n,onClick:a,level:l}=i,t=s.useContext(kn),r=l>0,d=a??(()=>{t&&console.warn("Expander callback is not provided.")});return!e&&!r?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${r?"gap-0.5":""}`,children:[r&&o.jsx(Ji,{short:e}),e&&n!==void 0&&o.jsx(zi,{onToggle:d,expanded:n})]})};ci.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const En={[M.JsoProperty]:xn,[M.DdlApiSection]:Hn,[M.DdlApiProperty]:Ue},In={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function Ln(i){const e=En[i]??Ge,n=In[i]??[];return[e,...n].join(" ")}const ye=s.memo(i=>{const{expandable:e,expanded:n,onClickExpander:a,value:l,variant:t,layoutSide:r,enableHeader:d=!0,enableHeaderValue:f=!0,subheader:u,usage:c=M.Default,highlightingMode:g=Qi}=i,{diff:p,descendantDiffs:w,diffsSeverities:D}=i,{[P]:m,[O]:v}=i,h=s.useMemo(()=>{switch(c){case M.Default:return g.get($e.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return g.get($e.JsoPropertyKey)}},[g,c]),S=le(),y=Tn(),q=s.useMemo(()=>y?r===K?y.beforeLevel:y.afterLevel:S,[r,S,y]),x=s.useMemo(()=>{const C=[];if(!p)return C;const{data:b,styles:I}=p;return b&&(r===K&&C.push(Y.background(I.before.backgroundColor)),r===B&&C.push(Y.background(I.after.backgroundColor))),C},[p,r]),H=s.useMemo(()=>f?o.jsx(gi,{"data-precededby":m,value:l,variant:t,layoutSide:r,diff:p,usage:c,highlightingMode:h,onClick:a}):null,[f,m,l,t,r,p,c,h,a]),A=c===M.DdlApiProperty,E=s.useMemo(()=>d?o.jsxs(o.Fragment,{children:[(e||q>0)&&o.jsxs("div",{"data-precededby":m,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ve,{level:q}),o.jsx(ci,{expandable:e,expanded:n,onClick:a,level:q})]}),!A&&H]}):q>0&&o.jsx(ve,{level:q}),[d,e,q,m,n,a,H,A]),V=s.useMemo(()=>Ln(c),[c]);return o.jsxs("div",{"data-precededby":m,"data-ddl-list-last-row":v?!0:void 0,className:`title-row-content flex ${A?"items-stretch":"items-center"} h-full ${V} gap-2 ${x.join(" ")}`,children:[E,A?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[H,u==null?void 0:u(r)]}):u==null?void 0:u(r)]})});ye.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const $=s.memo(i=>{const e=xe(),{diff:n,diffsSeverities:a,enableHeaderValue:l}=i,t=s.useMemo(()=>a==null?void 0:a["title-row"],[a]),r=s.useMemo(()=>t==null?void 0:t.type,[t]),d=s.useMemo(()=>li(t==null?void 0:t.causedAt),[t]);switch(e){case Fe:return o.jsx(Pe,{diffType:r,diffTypeCause:d,hidden:!1,children:o.jsx(Ne,{left:o.jsx(ye,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:K}),right:o.jsx(ye,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:l,layoutSide:B})})});case je:return o.jsx(Ve,{content:o.jsx(ye,{...i,layoutSide:B})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});$.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function Ha(i,e){return s.useMemo(()=>e(i)?pi(i):{},[e,i])}function pi(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Mn(i,e={}){const{diffKey:n,fallbackToNodeDiff:a=!0,includeDescendantDiffs:l=!0,diffsSeverityPlacement:t,resolveDiff:r}=e,{nodeDiffs:d,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!d)return{};const c=Object.entries(d),g=D=>{const m=c.find(([v])=>v===String(D));return m==null?void 0:m[1]},p=n?g(n):void 0;return{diff:r?r(d,g):a?d[Oe]??p:p,...l?{descendantDiffs:f}:{},diffsSeverities:u,...t?{diffsSeverityPlacement:t}:{}}}function jn(i){return on.includes(i.kind)}function Fn(i){return i.childrenNodes().filter(jn)}function Va(i){return i.kind===T.TABLE}function On(i){return i.kind===T.COLUMNS}function mi(i){return i.kind===T.COLUMN}function Rn(i){return mi(i)&&i instanceof He}function Pn(i){return i.kind===T.INDEXES}function hi(i){return i.kind===T.INDEX}function Gn(i){return hi(i)&&i instanceof He}function Un(i){return i.filter(mi)}function Bn(i){return i.filter(hi)}const Kn=s.createContext(null);function Wn(){const i=s.useContext(Kn);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Yn=({href:i,className:e,children:n})=>o.jsx("a",{href:i,className:e,children:n});Yn.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function $n(i){return i?!!(G(i.defaultValue)||G(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Xn="ux-badge_ddlapi_primary-key",yi="ux-badge_ddlapi_foreign-key",Jn="ux-badge_ddlapi_unique",zn="ux-badge_ddlapi_not-null",Qn="ux-badge_ddlapi_generated",bi="public",Di="Default",vi="As",ki="Values";function Zn(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===bi?e:`${i.schemaName}.${e}`}function ke(i){return i.join(", ")}const Me=s.memo(i=>{const{target:e,hideBadge:n=!1}=i,{navigationLinkBuilder:a,navigationLinkComponent:l}=Wn(),t=s.useMemo(()=>a(e.schemaName,e.tableName,e.columnName),[a,e]),r=o.jsx(l,{href:t,className:"ddlapi-foreign-key-link",children:Zn(e)});return n?r:o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(Zi,{text:"FK",colorSchema:yi,inline:!0}),r]})});Me.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."}}};function xi(){return o.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Hi(i,e){return!!i||!!e}function Vi(i,e){return i?e===K?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function me(i){const{label:e,colorSchema:n,flagValue:a,flagDiff:l,layoutMode:t,layoutSide:r}=i;if(!Hi(a,l))return null;if(!Vi(l,r))return xi();const d=l==null?void 0:l.data;return o.jsx(si,{label:e,colorSchema:n,layoutMode:t,layoutSide:r,isNodeChanged:!1,isContentChanged:!!d,$changes:d})}const de=s.memo(i=>{const{value:e,flagDiffs:n,layoutSide:a}=i,l=xe(),t=s.useMemo(()=>n??{},[n]),r=s.useMemo(()=>me({label:"PK",colorSchema:Xn,flagValue:e.isPrimaryKey,flagDiff:t.isPrimaryKey,layoutMode:l,layoutSide:a}),[t.isPrimaryKey,l,a,e.isPrimaryKey]),d=s.useMemo(()=>me({label:"unique",colorSchema:Jn,flagValue:e.isUnique,flagDiff:t.isUnique,layoutMode:l,layoutSide:a}),[t.isUnique,l,a,e.isUnique]),f=s.useMemo(()=>me({label:"not null",colorSchema:zn,flagValue:e.isNotNull,flagDiff:t.isNotNull,layoutMode:l,layoutSide:a}),[t.isNotNull,l,a,e.isNotNull]),u=s.useMemo(()=>me({label:"generated",colorSchema:Qn,flagValue:e.isGenerated,flagDiff:t.isGenerated,layoutMode:l,layoutSide:a}),[t.isGenerated,l,a,e.isGenerated]),c=s.useMemo(()=>{const p=t.isForeignKey;if(!Hi(e.isForeignKey,p))return null;if(!Vi(p,a))return xi();const w=p==null?void 0:p.data;return w?o.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[o.jsx(si,{label:"FK",colorSchema:yi,layoutMode:l,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:w}),e.foreignKeyTarget&&o.jsx(Me,{target:e.foreignKeyTarget,hideBadge:!0})]}):e.foreignKeyTarget?o.jsx(Me,{target:e.foreignKeyTarget}):null},[t.isForeignKey,l,a,e.foreignKeyTarget,e.isForeignKey]),g=s.useMemo(()=>[r,d,f,u,c].filter(Boolean),[c,u,f,r,d]);return g.length===0?null:o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:g})});de.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ni=s.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?o.jsx("span",{className:a,children:`${n}`}):null});Ni.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function ea(i){const{appearance:e}=i;return s.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=s.memo(i=>{const{isVisible:e,value:n,appearance:a}=i,l=ea({appearance:a});return o.jsx(Ni,{isVisible:e,value:n,className:l})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const be=s.memo(i=>{const{label:e,subheader:n,layoutSide:a}=i,{[P]:l,[O]:t}=i,r=le();return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":l,"data-ddl-list-last-row":t?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Ue} min-h-[26px] gap-2`,children:[r>0&&o.jsxs("div",{"data-precededby":l,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ve,{level:r}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[o.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(a)]})]})});be.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const J=s.memo(i=>{const e=xe();switch(e){case Fe:return o.jsx(Ne,{left:o.jsx(be,{...i,layoutSide:K}),right:o.jsx(be,{...i,layoutSide:B})});case je:return o.jsx(Ve,{content:o.jsx(be,{...i,layoutSide:B})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});J.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},name:"layoutSide"}],return:{name:"ReactElement"}}},description:""}}};const wi=s.memo(i=>{const{isVisible:e,value:n,className:a}=i;return e?o.jsx("span",{className:a,children:`${n}`}):null});wi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function ia(){return s.useMemo(()=>["additional-info-piece","subheader","block"].join(" "),[])}const z=s.memo(i=>{const{isVisible:e,value:n}=i,a=ia();return o.jsx(wi,{isVisible:e,value:n,className:a})});z.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""}}};const Ai=i=>{const{node:e,additionalInfoPrecededBy:n=N.DDL_COLUMN_ROW,isLastInList:a=!1,[P]:l}=i,t=te(),r=e.value(),d=s.useCallback(x=>r?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:r.columnType.label,appearance:"text"}),o.jsx(de,{layoutSide:x,value:r})]}):o.jsx(o.Fragment,{}),[r]),f=s.useCallback(x=>{const H=r==null?void 0:r.defaultValue;return G(H)?o.jsx(z,{isVisible:!0,value:H}):o.jsx(o.Fragment,{})},[r]),u=s.useCallback(x=>{const H=r==null?void 0:r.generatedExpression;return G(H)?o.jsx(z,{isVisible:!0,value:H}):o.jsx(o.Fragment,{})},[r]),c=s.useCallback(x=>{var H;return(H=r==null?void 0:r.enumValues)!=null&&H.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:r.enumValues.map((A,E)=>o.jsx(z,{isVisible:!0,value:A},`${A}-${E}`))}):o.jsx(o.Fragment,{})},[r]),g=t===re,p=s.useMemo(()=>g&&!!(r!=null&&r.description),[g,r==null?void 0:r.description]),w=!!(r!=null&&r.enumValues&&r.enumValues.length>0),D=G(r==null?void 0:r.defaultValue),m=G(r==null?void 0:r.generatedExpression),h=a&&!(g&&(w||D||m)),S=a&&w&&!D&&!m,y=a&&D&&!m,q=a&&m;return r?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx($,{"data-precededby":l,[O]:h||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:k.body2,subheader:d,usage:M.DdlApiProperty}),p&&o.jsx(oe,{"data-precededby":N.DDL_COLUMN_ROW,value:r.description??"",variant:k.body2,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty}),g&&w&&o.jsx(J,{"data-precededby":n,[O]:S||void 0,label:ki,subheader:c}),g&&D&&o.jsx(J,{"data-precededby":w?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[O]:y||void 0,label:Di,subheader:f}),g&&m&&o.jsx(J,{"data-precededby":D||w?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[O]:q||void 0,label:vi,subheader:u})]}):null};Ai.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Be=["isPrimaryKey","isUnique","isNotNull","isGenerated","isForeignKey"],Ci=["isUnique"];function qi(i,e){const n={};let a=!1;for(const l of e){const t=i[l];t&&(n[l]=t,a=!0)}return a?n:void 0}function na(i){return qi(i.diffs,Be)}function aa(i){return qi(i.diffs,Ci)}function Ke(i){const e=i.diffs[Oe];if(e&&(ie(e.data)||ne(e.data)))return e}const qe={before:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:ee.Yellow,textHighlighterColor:ee.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,backgroundColor:ee.Yellow,textHighlighterColor:ee.Yellow}};function ta(i){const{data:e}=i;return ae(e)?{...i,styles:qe}:ie(e)?{...i,data:{type:e.type,scope:e.scope,description:e.description,action:Xe.replace,beforeValue:!1,afterValue:!0,beforeDeclarationPaths:[],afterDeclarationPaths:e.afterDeclarationPaths},styles:qe}:ne(e)?{...i,data:{type:e.type,scope:e.scope,description:e.description,action:Xe.replace,beforeValue:!0,afterValue:!1,beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:[]},styles:qe}:i}function ra(i){for(const e of Be){const n=i[e];if(n)return ta(n)}}function oa(i){const e=i.diffs,n=[],a=e[Oe];if(a&&n.push(a),i.kind===T.COLUMN){const l=e.columnName;l&&n.push(l);for(const t of Be){const r=e[t];r&&n.push(r)}}if(i.kind===T.INDEX){const l=e.indexName;l&&n.push(l);for(const t of Ci){const r=e[t];r&&n.push(r)}}return n}function la(i){const e=i.data,n={type:e.type,causedAt:[]};return ne(e)||ae(e)?n.causedAt=e.beforeDeclarationPaths[0]:ie(e)&&(n.causedAt=e.afterDeclarationPaths[0]),n}function sa(i){const e=Te.maxChangedPropertyMetaDataByDiffType(...oa(i));if(e)return{[oi.TitleRow]:la(e)}}function Si(i){const e=pi(i),n=Ke(i),a=Mn(e,{resolveDiff:t=>n??ra(t)});if(!a.diff)return{};const l=sa(i);return{...a,diffsSeverities:l??a.diffsSeverities,highlightingMode:a.diff.highlightingMode}}function _i(i,e){return i?(e===K?i.styles.before:i.styles.after).isHeaderVisible:!0}const Ti=i=>{const{node:e,additionalInfoPrecededBy:n=N.DDL_COLUMN_ROW,isLastInList:a=!1,[P]:l}=i,t=te(),r=e.value(),d=s.useMemo(()=>Ke(e),[e]),f=s.useMemo(()=>Si(e),[e]),u=s.useMemo(()=>na(e),[e]),c=s.useCallback(V=>r?_i(d,V)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsx(ue,{isVisible:!0,value:r.columnType.label,appearance:"text"}),o.jsx(de,{layoutSide:V,value:r,flagDiffs:u})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[u,d,r]),g=s.useCallback(V=>{const C=r==null?void 0:r.defaultValue;return G(C)?o.jsx(z,{isVisible:!0,value:C}):o.jsx(o.Fragment,{})},[r]),p=s.useCallback(V=>{const C=r==null?void 0:r.generatedExpression;return G(C)?o.jsx(z,{isVisible:!0,value:C}):o.jsx(o.Fragment,{})},[r]),w=s.useCallback(V=>{var C;return(C=r==null?void 0:r.enumValues)!=null&&C.length?o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:r.enumValues.map((b,I)=>o.jsx(z,{isVisible:!0,value:b},`${b}-${I}`))}):o.jsx(o.Fragment,{})},[r]),D=t===re,m=!!d,v=s.useMemo(()=>D&&!!(r!=null&&r.description),[D,r==null?void 0:r.description]),h=!!(r!=null&&r.enumValues&&r.enumValues.length>0),S=G(r==null?void 0:r.defaultValue),y=G(r==null?void 0:r.generatedExpression),x=a&&!(D&&(h||S||y)),H=a&&h&&!S&&!y,A=a&&S&&!y,E=a&&y;return r?o.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx($,{"data-precededby":l,[O]:x||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:k.body2,subheader:c,usage:M.DdlApiProperty,...f}),v&&!m&&o.jsx(oe,{"data-precededby":N.DDL_COLUMN_ROW,value:r.description??"",variant:k.body2,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty}),D&&!m&&h&&o.jsx(J,{"data-precededby":n,[O]:H||void 0,label:ki,subheader:w}),D&&!m&&S&&o.jsx(J,{"data-precededby":h?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[O]:A||void 0,label:Di,subheader:g}),D&&!m&&y&&o.jsx(J,{"data-precededby":S||h?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[O]:E||void 0,label:vi,subheader:p})]}):null};Ti.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function da(i,e){let n=!1;return i.map((a,l)=>{const t=l===i.length-1,r=l===0?N.DDL_SECTION_HEADER:n?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:N.DDL_COLUMN_ROW,d=n?N.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:N.DDL_COLUMN_ROW,f={columnNode:a,titlePrecededBy:r,additionalInfoPrecededBy:d,isLastInList:t};return n=e&&$n(a.value()),f})}const Ei=i=>{const{node:e,[P]:n}=i,a=le(),l=te(),t=e.value(),r=Un(e.childrenNodes()),d=l===re,f=s.useMemo(()=>da(r,d),[r,d]);return r.length===0?null:o.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[o.jsx($,{"data-precededby":n,value:(t==null?void 0:t.title)??"Columns",expandable:!1,expanded:!0,variant:k.h2}),o.jsx(di.Provider,{value:a+1,children:f.map(({columnNode:u,titlePrecededBy:c,additionalInfoPrecededBy:g,isLastInList:p})=>Rn(u)?o.jsx(Ti,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id):o.jsx(Ai,{"data-precededby":c,additionalInfoPrecededBy:g,isLastInList:p,node:u},u.id))})]})};Ei.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Ii=i=>{const{schemaName:e,[P]:n}=i;return e===bi?null:o.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Ge}`,children:o.jsx("span",{className:"ddl-schema-name-block",children:e})})};Ii.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Li=i=>{const{node:e,isLastInList:n=!1,[P]:a}=i,l=te(),t=e.value(),r=s.useMemo(()=>t?t.indexName?t.indexName:ke(t.partNames):"",[t]),d=s.useCallback(c=>t?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ke(t.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:c,value:t})]}):o.jsx(o.Fragment,{}),[t]),f=s.useMemo(()=>l===re&&!!(t!=null&&t.description),[l,t==null?void 0:t.description]),u=n;return t?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx($,{"data-precededby":a,[O]:u||void 0,value:r,expandable:!1,expanded:!0,variant:k.body2,subheader:t.indexName||t.isUnique?d:void 0,usage:M.DdlApiProperty}),f&&o.jsx(oe,{"data-precededby":N.DDL_INDEX_ROW,value:t.description??"",variant:k.body1,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Mi=i=>{const{node:e,isLastInList:n=!1,[P]:a}=i,l=te(),t=e.value(),r=s.useMemo(()=>Ke(e),[e]),d=s.useMemo(()=>Si(e),[e]),f=s.useMemo(()=>aa(e),[e]),u=s.useMemo(()=>t?t.indexName?t.indexName:ke(t.partNames):"",[t]),c=s.useCallback(D=>t?_i(r,D)?o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.indexName&&o.jsx(ue,{isVisible:!0,value:`(${ke(t.partNames)})`,appearance:"text"}),o.jsx(de,{layoutSide:D,value:t,flagDiffs:f})]}):o.jsx(o.Fragment,{}):o.jsx(o.Fragment,{}),[f,r,t]),g=s.useMemo(()=>l===re&&!!(t!=null&&t.description),[l,t==null?void 0:t.description]),p=!!r,w=n;return t?o.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[o.jsx($,{"data-precededby":a,[O]:w||void 0,value:u,expandable:!1,expanded:!0,variant:k.body2,subheader:t.indexName||t.isUnique||f!=null&&f.isUnique?c:void 0,usage:M.DdlApiProperty,...d}),g&&!p&&o.jsx(oe,{"data-precededby":N.DDL_INDEX_ROW,value:t.description??"",variant:k.body1,textFontWeight:"normal",textColor:se,usage:W.DdlApiProperty})]}):null};Mi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ua(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?N.DDL_SECTION_HEADER:N.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const ji=i=>{const{node:e,[P]:n}=i,a=le(),l=e.value(),t=Bn(e.childrenNodes()),r=s.useMemo(()=>ua(t),[t]);return t.length===0?null:o.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[o.jsx($,{"data-precededby":n,value:(l==null?void 0:l.title)??"Indexes",expandable:!1,expanded:!0,variant:k.h2}),o.jsx(di.Provider,{value:a+1,children:r.map(({indexNode:d,titlePrecededBy:f,isLastInList:u})=>Gn(d)?o.jsx(Mi,{"data-precededby":f,isLastInList:u,node:d},d.id):o.jsx(Li,{"data-precededby":f,isLastInList:u,node:d},d.id))})]})};ji.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const fa=i=>{const{node:e,noHeading:n=!1,[P]:a=N.ROOT}=i,l=te(),t=e.value(),r=Fn(e),d=r.find(On),f=r.find(Pn),u=!!(t!=null&&t.schemaName),c=l===re&&!!(t!=null&&t.description),g=n?N.ROOT:N.DDL_TABLE_HEADER_ROW;return o.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&o.jsx($,{"data-precededby":a,value:(t==null?void 0:t.tableName)??"",expandable:!1,expanded:!0,variant:k.h1}),u&&o.jsx(Ii,{"data-precededby":g,schemaName:(t==null?void 0:t.schemaName)??""}),c&&o.jsx(oe,{"data-precededby":u?N.DDL_TABLE_SCHEMA_ROW:g,value:(t==null?void 0:t.description)??"",variant:k.h4,textFontWeight:"normal",textColor:se}),d&&o.jsx(Ei,{"data-precededby":c?N.DDL_TABLE_DESCRIPTION_ROW:u?N.DDL_TABLE_SCHEMA_ROW:g,node:d}),f&&o.jsx(ji,{"data-precededby":d!=null&&d.childrenNodes().length?N.DDL_COLUMN_ROW:c?N.DDL_TABLE_DESCRIPTION_ROW:u?N.DDL_TABLE_SCHEMA_ROW:g,node:f})]})};fa.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{Te as A,P as B,kn as C,xa as D,_n as E,Tn as F,pi as G,Mn as H,$ as I,M as J,oe as K,Ha as L,se as M,Ve as O,N as P,He as S,Je as T,Ge as X,Da as a,fi as b,ka as c,on as d,va as e,Va as f,ze as g,Kn as h,L as i,fa as j,Yn as k,Re as l,T as m,Ae as n,en as o,rn as p,an as q,nn as r,ha as s,ba as t,ui as u,ya as v,Pe as w,Ne as x,gi as y,k as z};
