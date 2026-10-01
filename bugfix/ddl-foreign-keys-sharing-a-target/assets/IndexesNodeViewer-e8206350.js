var wt=Object.defineProperty;var kt=(i,e,t)=>e in i?wt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var w=(i,e,t)=>(kt(i,typeof e!="symbol"?e+"":e,t),t);import{t as G,v as P,x as Ue,w as B,Z as Be,_ as pi,$ as Ne,N as $,a0 as Ci,P as S,a1 as xt,a2 as Ht,K as me,Q as Nt,M as ye,a3 as Ct,U as T,H as se,a4 as We,a5 as Ve,a6 as qt,W as X,V as F,a7 as qi,a8 as re,a9 as Ce,X as Te,R as Ai,Y as Qe,l as Ze,S as ei,aa as At,ab as St,y as Tt,ac as qe,ad as Et,ae as Si,u as de,f as Ee,h as Ti}from"./DiffBadge-462be392.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const Q={SIMPLE:"simple",COMPLEX:"complex"};class _e{constructor(e="#",t="",n,r,a){w(this,"type");w(this,"parent");w(this,"container");w(this,"newDataLevel");w(this,"_value");w(this,"_meta");w(this,"_childrenNodes",[]);w(this,"_nestedNodes",[]);this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=Q.SIMPLE,value:s=null,parent:u=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=u,this.container=f,this.newDataLevel=g,this._value=s,this._meta=c}createCycledClone(e,t,n){const r=new _e(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===Q.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class ii extends _e{constructor(t="#",n="",r,a,o){super(t,n,r,a,o);w(this,"type");this.id=t,this.key=n,this.kind=r,this.type=o.type}createCycledClone(t,n,r){const a=new ii(t,n,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a.setChildrenNodes(this._childrenNodes),a.setNestedNodes(this._nestedNodes),a}value(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.value())??null}childrenNodes(t){const n=this.findNestedNode(t,!0);return(n==null?void 0:n.childrenNodes())??[]}}class _t{constructor(){w(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,t,n,r,a){const o=new _e(e,t,n,r,a);return this.nodes.set(e,o),o}createComplexNode(e,t,n,r,a){const o=new ii(e,t,n,r,a);return this.nodes.set(e,o),o}createCycledClone(e,t,n,r){const a=e.createCycledClone(t,n,r);return this.nodes.set(t,a),a}}const Lt={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Mt=Object.values(Lt);new Set(Mt);class Le{aggregateByDescendantDiffs(e,t,n,r){}static isDiffsRecord(e){if(!A(e))return!1;for(const t of Object.values(e))if(!Le.isDiff(t))return!1;return!0}static isDiff(e){const t=e;return A(t)&&(G(t)||P(t)||Ue(t)||B(t))}}function A(i){return Ei(i)&&!Array.isArray(i)}function Ei(i){return typeof i=="object"&&i!==null}function It(i){return A(i)&&Object.keys(i).every(e=>typeof e=="string")}function Ge(i){return Array.isArray(i)}function ta(i,e,t){let n=i,r=!1;for(const a of e){if(!A(n)&&!Ge(n))return;if(r){let s;Ei(n)&&(s=n[a]),!s&&Ge(n)&&t&&(s=n.find(u=>A(u)&&u[t]===a)),n=s,r=!1;continue}n=n[a],Ge(n)&&(r=!0)}return n}function na(i,e){return Object.keys(i).find(t=>i[t]===e)}function ra(i){if(Le.isDiffsRecord(i))return i}class jt{constructor(){w(this,"tree",null)}pick(e,t){if(!A(e))return null;const n={};for(const r of t){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?n[a]=[...o]:A(o)?n[a]={...o}:n[a]=o}return this.isPartialOf(n,t)?n:null}isPartialOf(e,t){return Object.keys(e).every(n=>t.includes(n))}}const be=()=>{},Rt=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:be,info:be,warn:be,error:be};function Ft(i){return i==null||!A(i)&&!Be(i)}function Pt(i){const{source:e,tree:t,supportedNodeKinds:n,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:u,isComplexNode:f,resolveNodeKey:g,isDisallowedValue:c=Ft,shouldStopAfterNodeCreation:p}=i;return[({value:h,state:m,key:H,path:C})=>{if(typeof H=="symbol")return;if(!A(h)&&!Be(h))return{value:h};const{alreadyConvertedValuesCache:E,parent:N,container:O}=m,q=E.get(h);if(!q||!u(q)&&!f(q))return{value:h};if(!N||!u(N))return{value:h};const b="#"+pi(C),V=g(H,h),M=t.createCycledClone(q,b,V,N);return O?O.addNestedNode(M):N&&N.addChildNode(M),{done:!0}},({key:h,value:m,path:H,state:C,rules:E})=>!E||!Array.isArray(E.transformers)?void 0:{value:E.transformers.reduce((q,b)=>b(h,q,e,H,C),m)},({key:h,value:m,path:H,rules:C,state:E})=>{if(!C)return{done:!0};if(typeof h=="symbol")return{done:!0};if(c(m))return{done:!0};if(!C.kind||!n.includes(C.kind))return;const{parent:N,container:O}=E,q="#"+pi(H),b=g(h,m),{kind:V,complex:M=!1}=C,v=a(m,N,O),R=r(q,b,V,M,v);if(!R)return;O?O.addNestedNode(R):N&&N.addChildNode(R);let Z=m;if(p!=null&&p(R,m)){const ee=N?N.descendantDiffs:void 0;if(!ee||!(h in ee))return{done:!0};const W=ee[h];if(!W)return{done:!0};const{data:hi}=W;B(hi)&&(Z=hi.beforeValue)}const oe=new Map(E.alreadyConvertedValuesCache);(A(m)||Be(m))&&oe.set(m,R);let U;return u(R)?U=o(E,R,oe):U=s(E,R,oe),{value:Z,state:U}}]}class Ot{}class ae{constructor(e="#",t="",n,r,a){w(this,"type");w(this,"parent");w(this,"container");w(this,"newDataLevel");w(this,"_value");w(this,"_meta");w(this,"_childrenNodes",[]);w(this,"_nestedNodes",[]);w(this,"_diffs",{});w(this,"_diffsSummary",new Set);w(this,"_descendantDiffs",{});w(this,"_descendantDiffsSummary",new Set);w(this,"_diffsSeverities",{});this.id=e,this.key=t,this.kind=n,this.isCycle=r;const{type:o=Q.SIMPLE,value:s=null,parent:u=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=u,this.container=f,this.newDataLevel=g,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,t,n){const r=new ae(e,t,this.kind,!0,{type:this.type,parent:n,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,t=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const n of this._nestedNodes){if(n.id===e)return n;if(t&&n.type===Q.COMPLEX){const r=n.findNestedNode(e,t);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const t of e)this._diffsSummary.add(t),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const t of e)this._descendantDiffsSummary.add(t),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}class Gt extends _t{constructor(){super()}}const L={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},_i=Object.values(L),Li="<unnamed>";function Kt(i){return i??Li}function Mi(i){return i!==Li}function Ut(i,e){return e.indexName&&Mi(e.indexName)?e.indexName:i}function aa(i,e,t){return t||(e!=null&&e.indexName&&Mi(e.indexName)?e.indexName:String(i))}function Ye(i=L.TABLE){return{"/columns":{"/items":{"/*":()=>Ye(L.COLUMN)},kind:L.COLUMNS},"/indexes":{"/items":{"/*":()=>Ye(L.INDEX)},kind:L.INDEXES},kind:i}}const mi={Identity:"identity",Expression:"expression"};function Bt(i){return i.kind===Ne.Literal&&typeof i.value=="string"}function Wt(i){return i.kind===Ne.RawExpr&&typeof i.expr=="string"}function Yt(i){return A(i)&&typeof i.expr=="string"}function $t(i){return A(i)&&typeof i.value=="string"}const ue="titleRow",Xt=["typeName","size","precision","scale","label"],oa={ToEnum:"to-enum",FromEnum:"from-enum"},la={Lost:"lost",Gained:"gained"},Ii=["isPrimaryKey","isUnique","isNotNull","isGenerated"],ji=["isUnique"],sa=[$,ue,"tableName","schemaName","description"],da=[$,ue,"columnName","description","generatedExpression",...Ii],ua=[$,ue,"indexName","description",...ji];function zt(i){if(!A(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:t}=i;return!A(t)||!("before"in t)||!("after"in t)?!1:Le.isDiff(e)}function Ri(i){return zt(i[ue])}function Jt(i){return A(i)&&i.kind===Ci.Domain&&typeof i.type=="string"}function Qt(i){return i.kind===S.BoolType&&typeof i.type=="string"}function Zt(i){return i.kind===S.IntegerType&&typeof i.type=="string"}function yi(i){return i.kind===S.DecimalType&&typeof i.type=="string"}function bi(i){return i.kind===S.FloatType&&typeof i.type=="string"}function Di(i){return i.kind===S.StringType&&typeof i.type=="string"}function vi(i){return i.kind===S.BinaryType&&typeof i.type=="string"}function Vi(i){return i.kind===S.TimeType&&typeof i.type=="string"}function en(i){return i.kind===S.JSONType&&typeof i.type=="string"}function tn(i){return i.kind===S.SpatialType&&typeof i.type=="string"}function nn(i){return i.kind===S.UUIDType&&typeof i.type=="string"}function Ke(i){return i.kind===S.EnumType&&Array.isArray(i.values)}function rn(i){return i.kind===S.UnsupportedType&&typeof i.type=="string"}function wi(i){return typeof i.type=="string"}function ti(i){switch(i.kind){case Ne.Literal:return Bt(i)?i.value:i.kind;case Ne.RawExpr:return Wt(i)?i.expr:i.kind;case xt.NamedDefault:try{return ti(Ht(i))}catch{return i.kind}default:return Yt(i)?i.expr:$t(i)?i.value:i.kind}}function Fi(i){return Pi(ti(i))}function an(i){return Pi(i)}function Pi(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const on="Columns",ln="Indexes";class sn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,t){if(this.isDdlApiTableOrientedSpec(e))return e;const n=this.extractRealm(e);if(!n)return this.logger.debug("[DDL API] Unsupported source shape for table key:",t,e),null;const r=this.findTableInRealm(n,t);return r?this.buildTableOrientedSpecFromRealm(n,r,t):(this.logger.debug("[DDL API] Table not found in realm:",t,"available schemas:",n.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,t,n){const r=me(t.attrs,ye.Comment);return{tableName:t.name,schemaName:n.schemaName,...r?{description:r.text}:{},columns:{title:on,items:(t.columns??[]).map(a=>this.buildColumnRowValue(t,a))},indexes:{title:ln,items:(t.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:A(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,t){var r;const n=e.schemas.find(a=>a.name===t.schemaName);if(n)return(r=n.tables)==null?void 0:r.find(a=>a.name===t.name)}isRealm(e){return A(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!A(e)||typeof e.tableName!="string"||!A(e.columns)||!Array.isArray(e.columns.items)||!A(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,t){var D,k,h;const n=me(t.attrs,ye.Comment),r=(D=t.attrs)==null?void 0:D.find(m=>m.kind===Nt.Identity),a=me(t.attrs,ye.GeneratedExpr),o=r!==void 0||a!==void 0,u=this.findForeignKeysForColumn(e,t).map(m=>this.buildForeignKeyTarget(m,t)).filter(m=>m!==void 0),f=u.length>0,g=this.formatColumnType(t.type),c=(k=t.type)==null?void 0:k.type,p=c&&Ke(c)?c.values:void 0,y=this.isPrimaryKeyColumn(e,t);return{columnName:t.name,columnType:g,...p?{enumValues:p}:{},isPrimaryKey:y,isForeignKey:f,...u.length>0?{foreignKeyTargets:u}:{},isGenerated:o,...r?{generatedBy:mi.Identity}:{},...a&&!r?{generatedBy:mi.Expression}:{},...a?{generatedExpression:a.expr}:{},isUnique:this.isUniqueColumn(e,t),isNotNull:!y&&((h=t.type)==null?void 0:h.null)===!1,...t.default!==void 0?{defaultValue:Fi(t.default)}:{},...n?{description:n.text}:{}}}buildIndexRowValue(e){const t=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),n=me(e.attrs,ye.Comment);return{indexName:Kt(e.name),partNames:t,isUnique:e.unique===!0,...n?{description:n.text}:{}}}isPrimaryKeyColumn(e,t){var n;return(((n=e.primaryKey)==null?void 0:n.parts)??[]).some(r=>r.column===t.name)}isSingleColumnUniqueIndexForColumn(e,t){var n;return e.unique===!0&&(e.parts??[]).length===1&&((n=(e.parts??[])[0])==null?void 0:n.column)===t}isSingleColumnIndexForColumn(e,t){var n;return(e.parts??[]).length===1&&((n=(e.parts??[])[0])==null?void 0:n.column)===t}isUniqueColumn(e,t){return(e.indexes??[]).some(n=>this.isSingleColumnUniqueIndexForColumn(n,t.name))}findForeignKeysForColumn(e,t){return(e.foreignKeys??[]).filter(n=>{var r;return(r=n.columns)==null?void 0:r.includes(t.name)})}buildForeignKeyTarget(e,t){var o,s;const n=((o=e.columns)==null?void 0:o.indexOf(t.name))??-1;if(n<0)return;const r=e.refTable,a=(s=e.refColumns)==null?void 0:s[n];if(!(!r||!a))return{schemaName:r.schema,tableName:r.name,columnName:a}}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Jt(e))return this.formatPgDomainType(e);const t=this.formatSchemaTypeLabel(e);return Qt(e)?{kind:S.BoolType,typeName:e.type,label:t}:Zt(e)?{kind:S.IntegerType,typeName:e.type,label:t,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:yi(e)?{kind:S.DecimalType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:bi(e)?{kind:S.FloatType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Di(e)?{kind:S.StringType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:vi(e)?{kind:S.BinaryType,typeName:e.type,label:t,...e.size!==void 0?{size:e.size}:{}}:Vi(e)?{kind:S.TimeType,typeName:e.type,label:t,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:en(e)?{kind:S.JSONType,typeName:e.type,label:t}:tn(e)?{kind:S.SpatialType,typeName:e.type,label:t}:nn(e)?{kind:S.UUIDType,typeName:e.type,label:t}:Ke(e)?{kind:S.EnumType,label:t,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:rn(e)?{kind:S.UnsupportedType,typeName:e.type,label:t}:{kind:e.kind,label:wi(e)?e.type:e.kind}}formatPgDomainType(e){const t=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Ci.Domain,name:e.type,label:e.type,...t?{baseTypeLabel:t}:{}}}formatSchemaTypeLabel(e){let t;return yi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Di(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):vi(e)?t=this.formatParameterizedTypeLabel(e.type,e.size):bi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision):Vi(e)?t=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ke(e)?t=e.type??e.values[0]??"enum":wi(e)?t=e.type:t=e.kind,this.normalizeTypeLabelSpacing(t)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...t){const n=t.filter(r=>r!==void 0);return n.length===0?e:`${e} (${n.join(", ")})`}formatIndexPartName(e){return e.column?e.column:e.expr?ti(e.expr):""}}function dn(i){return Pt(i)}const un=new Set([L.TABLE,L.COLUMNS,L.COLUMN,L.INDEXES,L.INDEX]);class ni extends Ot{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,t,n,r){return!It(n)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(n,ni.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return un.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case L.TABLE:return["tableName","schemaName","description"];case L.COLUMNS:case L.INDEXES:return["title"];case L.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case L.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const fn="[DDL API]";class fa extends jt{constructor(t){const{source:n,tableKey:r,logger:a=Rt()}=t;super();w(this,"tree");w(this,"source");w(this,"tableKey");w(this,"logger");w(this,"nodeDataBuilder");this.source=n,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!A(this.source)&&!Array.isArray(this.source))return this.tree;const t=this.prepareSource();if(!t)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,t);const n={parent:null,container:null,alreadyConvertedValuesCache:new Map},r=Ye(),a=dn({source:t,tree:this.tree,supportedNodeKinds:_i,createNodeFromRaw:(o,s,u,f,g)=>this.createNodeFromRaw(o,s,u,f,g),createNodeParams:(o,s,u)=>({value:A(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:s,container:u}),createStateForSimpleNode:(o,s,u)=>({parent:s,container:null,alreadyConvertedValuesCache:u}),createStateForComplexNode:(o,s,u)=>({parent:o.parent,container:s,alreadyConvertedValuesCache:u}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s)});return Ct(t,a,{state:n,rules:r}),this.tree}get logPrefix(){return fn}createTree(){return new Gt}createNodeDataBuilder(){return new ni}prepareSource(){return new sn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(t,n,r,a,o){const{parent:s,container:u,newDataLevel:f}=o;if(a){const y=this.createNodeMeta(n,o),D={type:Q.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(u),value:null,meta:y,newDataLevel:f};return this.tree.createComplexNode(t,n,r,!1,D)}const g=this.createNodeValue(n,r,o),c=this.createNodeMeta(n,o),p={type:Q.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(u),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(t,n,r,!1,p)}createNodeMeta(t,n){const{value:r}=n;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(t,n,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(n,t,a,(o,s)=>this.pick(o,s))}resolveNodeKey(t,n){return A(n)?"columnName"in n&&typeof n.columnName=="string"?n.columnName:"indexName"in n&&typeof n.indexName=="string"?Ut(t,n):t:t}isSimpleTreeNode(t){return t.type===Q.SIMPLE}isComplexTreeNode(t){return t.type===Q.COMPLEX}takeSimpleTreeNode(t){return t&&this.isSimpleTreeNode(t)?t:null}takeComplexTreeNode(t){return t&&this.isComplexTreeNode(t)?t:null}}function gn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function cn(i){const e=new Map;return i.map(t=>{const n=gn(t),r=e.get(n)??0;return e.set(n,r+1),r===0?n:`${n}\0${r}`})}function Oi(i,e,t){const n=t===T,r=new Set,a=[],o=u=>{const f=e==null?void 0:e[u];if(f)return f;for(const g of Object.values(e??{}))if(g&&B(g.data)&&g.data.afterValue===u)return g};for(const u of i){const f=o(u);if(!f){a.push({text:u});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(G(g)){!n&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(P(g)){n&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(B(g)){const c=n?typeof g.beforeValue=="string"?g.beforeValue:u:typeof g.afterValue=="string"?g.afterValue:u;a.push({text:c,diff:f})}}for(const[u,f]of Object.entries(e??{}))!f||r.has(f)||P(f.data)&&n&&(a.push({text:u,diff:f}),r.add(f));const s=u=>{const f=i.indexOf(u);return f>=0?f:i.length};return a.sort((u,f)=>s(u.text)-s(f.text))}function Gi(i,e="none"){if(i.length===0)return[];const t=[];return e==="tight"?t.push({text:"("}):e==="spaced"&&t.push({text:" ("}),i.forEach((n,r)=>{r>0&&t.push({text:", "}),t.push({text:n.text,diff:n.diff})}),(e==="tight"||e==="spaced")&&t.push({text:")"}),t}function ge(i,e,t){if(!e)return i!==void 0?String(i):void 0;const{data:n}=e,r=t===T;return G(n)?r?void 0:String(n.afterValue??i??""):P(n)?r?String(n.beforeValue??i??""):void 0:B(n)?String(r?n.beforeValue??i??"":n.afterValue??i??""):i!==void 0?String(i):void 0}function hn(i,e){return(e===T?i.styles.before:i.styles.after).isContentVisible}const Ki=["size","precision","scale"];function pn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function mn(i,e){var f;const t=(f=i.value())==null?void 0:f.columnType;if(!t)return{kind:"plain",text:""};const n=pn(i);if(!n)return{kind:"plain",text:t.label};const r=n.typeName??n.label,a=n.typeName?"typeName":"label";if(yn(n)){const g=Object.values(n).find(Boolean);return g?{kind:"monolithic",text:bn(t,n,a,e),diff:Vn(g)}:{kind:"plain",text:t.label}}const o=[],s=ge($e(t),r,e);s!==void 0&&o.push({text:s,diff:r});const u=Dn(t,n,e);return o.push(...u),o.length===0?{kind:"plain",text:t.label}:{kind:"segmented",segments:o}}function yn(i){const e=Xt.map(n=>[n,i[n]]).filter(n=>!!n[1]);if(e.length===0)return!1;if(e.length===1){const[n]=e[0];return n==="typeName"||n==="label"}return new Set(e.map(([,n])=>n.data.action)).size===1}function bn(i,e,t,n){const r=ge($e(i),e[t],n)??$e(i),a=[];for(const o of Ki){const s=ge(ri(i,o),e[o],n);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function Dn(i,e,t){const n=vn(i,e,t);if(n.length===0)return[];const r=n.flatMap(a=>{const o=ge(ri(i,a),e[a],t);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...Gi(r,"spaced")]}function vn(i,e,t){return Ki.filter(n=>{const r=e[n];return r?hn(r,t):ri(i,n)!==void 0})}function $e(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function ri(i,e){if(!(e in i))return;const t=Reflect.get(i,e);return typeof t=="number"?t:void 0}function Vn(i){const{data:e}=i;return B(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Yellow}}}:G(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Green}}}:P(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function wn(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function kn(i,e){var o;const t=((o=i.value())==null?void 0:o.partNames)??[],n=wn(i),r=n?Oi(t,n,e):t.map(s=>({text:s})),a=Gi(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function xn(i){if(Ri(i.diffs))return i.diffs[ue]}function Hn(i){const e=i.diffs[$];if(e&&(G(e.data)||P(e.data)))return e}function Nn(i){return i.diffs.schemaName}function ga(i){return i.diffs.description}function ca(i,e){var o;const t=((o=i.value())==null?void 0:o.schemaName)??"",n=Nn(i);if(!n)return t;const r=n.data,a=e===T;return G(r)?a?"":t:P(r)?a?t:"":B(r)?a?typeof r.beforeValue=="string"?r.beforeValue:t:typeof r.afterValue=="string"?r.afterValue:t:t}function Cn(i){if(Ri(i.diffs))return i.diffs[ue]}function qn(i){const e=i.diffs[$];if(e&&(G(e.data)||P(e.data)))return e}function Ui(i,e){return i?(e===T?i.styles.before:i.styles.after).isHeaderVisible:!0}function An(i,e){return i?(e===T?i.styles.before:i.styles.after).isContentVisible:!0}function Bi(i){const e=i.diffs[$];return e?G(e.data)||P(e.data):!1}function Sn(i){const t=i.diffs.foreignKeyTargetDiffs;if(!(!t||Object.keys(t).length===0))return t}function Tn(i,e,t){const n=e==null?void 0:e.data;return t===T&&n&&B(n)&&En(n.beforeValue)?n.beforeValue:i}function En(i){return A(i)&&typeof i.schemaName=="string"&&typeof i.tableName=="string"&&typeof i.columnName=="string"}function _n(i){const e={};let t=!1;for(const n of Ii){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function Xe(i){return i.diffs.generatedExpression}function Wi(i){return i.diffs.description}function Yi(i){return i.diffs.description}function ai(i){const t=i.diffs.enumValueDiffs;if(!(!t||Object.keys(t).length===0))return t}function Ln(i){return i.diffs.enumValuesRowColorizingDiff}function oi(i){return i.diffs.defaultValue}function $i(i){return i.diffs.defaultValueRowColorizingDiff}function Mn(i,e){var o;const t=(o=i.value())==null?void 0:o.defaultValue,n=oi(i),r=e===T;if(!n){const s=i.diffs[$];if(s){const u=s.data;if(G(u))return r?void 0:t;if(P(u))return r?t:void 0}return t}const a=n.data;return G(a)?r?void 0:t??De(a.afterValue):P(a)?r?De(a.beforeValue)??t:void 0:B(a)?r?De(a.beforeValue)??t:De(a.afterValue)??t:t}function De(i){if(typeof i=="string")return an(i);if(A(i)&&"kind"in i)return Fi(i)}function In(i,e){var t;return Oi(((t=i.value())==null?void 0:t.enumValues)??[],ai(i),e).map(({text:n,diff:r})=>({literal:n,diff:r}))}function Xi(i){const e={};let t=!1;for(const n of ji){const r=i.diffs[n];r&&(e[n]=r,t=!0)}return t?e:void 0}function jn(i){return i?i.highlightingMode.get(We.Default)!==Ve.Invisible:!1}const Rn=d.createContext(!1),Me=i=>{const{children:e,diffType:t,diffTypeCause:n,hidden:r=!1}=i;return r||!t?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(qt,{variant:t,message:n}),e]})};Me.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie=d.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});Ie.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const je=d.memo(i=>{const{left:e,right:t}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:t})]})});je.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const zi="px-4",Fn="",Pn="px-4",li="";var _=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(_||{});var x=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(x||{});const On=i=>{const{isExpandable:e,expanded:t,setExpanded:n,variant:r}=i,a=d.useCallback(()=>{n==null||n(o=>!o)},[n]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${Un(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:t?"Show less":"Show more"})})})},Ji=d.memo(i=>{const{value:e,variant:t,layoutSide:n,onClick:r,diff:a,usage:o,highlightingMode:s=Ve.Default}=i,u=s===Ve.Default,f=s===Ve.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:p,textColor:y,label:D}=i,[k,h]=d.useState(!1),m=d.useCallback((q,b,V)=>{if(V)return null;const M=f?"":b.join(" "),v=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),R=`${v} ${M}`.trim(),Z={onClick:r,...y!=null&&y.trim()?{style:{color:y}}:{}};q=k?q:Kn(q);const oe=(U,ee)=>{const W={...Z,className:ee};switch(t){case x.h1:return l.jsx("h1",{...W,children:U});case x.h2:return l.jsx("h2",{...W,children:U});case x.h3:return l.jsx("h3",{...W,children:U});case x.h4:return l.jsx("h4",{...W,children:U});case x.h5:return l.jsx("h5",{...W,children:U});case x.h6:return l.jsx("h6",{...W,children:U});case x.body1:return l.jsx("span",{...W,className:`${ee} text-value-body1`.trim(),children:U});case x.body2:return l.jsx("span",{...W,className:`${ee} text-value-body2`.trim(),children:U})}};return D?oe(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${D}: `}),l.jsx("span",{className:M,children:q})]}),v):oe(q,R)},[k,f,D,p,c,r,y,g,t]),H=d.useCallback(q=>{const b=[];let V=q,M=!1;if(a){const{data:v,styles:R}=a;switch(n){case T:b.push(F.highlighter(R.before.textHighlighterColor)),u&&(P(v)&&(V=le(v.beforeValue)?v.beforeValue:V),B(v)&&(o===_.JsoProperty&&!f&&b.push(F.highlighter(se.Yellow)),V=le(v.beforeValue)?v.beforeValue:V),Ue(v)&&(V=le(v.beforeKey)?v.beforeKey:V)),G(v)&&(M=!0);break;case X:b.push(F.highlighter(R.after.textHighlighterColor)),u&&(G(v)&&(V=le(v.afterValue)?v.afterValue:V),B(v)&&(o===_.JsoProperty&&!f&&b.push(F.highlighter(se.Yellow)),V=le(v.afterValue)?v.afterValue:V),Ue(v)&&(V=le(v.afterKey)?v.afterKey:V)),P(v)&&(M=!0);break}}return[V,b,M]},[a,u,f,n,o]),[C,E,N]=H(e);return d.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[m(C,E,N),!N&&l.jsx(On,{isExpandable:Gn(C),expanded:k,setExpanded:h,variant:t})]}),[m,C,E,N,k,h,t])}),ze=5,Je=300;function Gn(i){return i?i.length>Je||qi.trim(i.split(`
`)).length>ze:!1}function Kn(i){if(!i)return;if(i.length>Je)return i.slice(0,Je)+"...";const e=qi.trim(i.split(`
`));return e.length>ze?e.slice(0,ze).join(`
`)+"...":i}function le(i){return typeof i=="string"}function Un(i){switch(i){case x.h1:return"text-value-expander--h1";case x.h2:return"text-value-expander--h2";case x.h3:return"text-value-expander--h3";case x.h4:return"text-value-expander--h4";case x.h5:return"text-value-expander--h5";case x.h6:return"text-value-expander--h6";case x.body1:return"text-value-expander--body1";case x.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const K="data-precededby",I="data-ddl-list-last-row";var j=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(j||{}),z=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(z||{});const Bn={[z.DdlApiProperty]:li},Wn={[z.DdlApiProperty]:["min-h-[26px]"]};function Yn(i){const e=Bn[i]??zi,t=Wn[i]??[];return[e,...t].join(" ")}const we=d.memo(i=>{const{value:e,variant:t,layoutSide:n,usage:r=z.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:s,textFontWeight:u,labelColor:f,textColor:g}=i,{[K]:c}=i,{diff:p,descendantDiffs:y,diffsSeverities:D}=i,k=re(),h=r===z.DdlApiProperty,m=d.useMemo(()=>!a||An(p,n),[p,a,n]),H=h&&k>0&&m,C=d.useMemo(()=>{if(!p)return[];const{data:O,styles:q}=p;if(!O)return[];const b=[];return n===T&&b.push(F.background(q.before.backgroundColor)),n===X&&b.push(F.background(q.after.backgroundColor)),b},[p,n]),E=d.useMemo(()=>Yn(r),[r]),N=l.jsx(Ji,{label:o,labelFontWeight:s,textFontWeight:u,labelColor:f,textColor:g,value:e,variant:t,layoutSide:n,diff:p});return l.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${h?"items-stretch":""} ${E} gap-2 ${C.join(" ")}`,children:[H&&l.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(Ce,{level:k}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:N}):N]})});we.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ce=d.memo(i=>{const e=Te(),{diffsSeverities:t,diffsSeverityPlacement:n=Ai.DescriptionRow}=i,r=d.useMemo(()=>t==null?void 0:t[n],[t,n]),a=d.useMemo(()=>r==null?void 0:r.type,[r]),o=d.useMemo(()=>Qe(r==null?void 0:r.causedAt),[r]);switch(e){case ei:return l.jsx(Me,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(je,{left:l.jsx(we,{...i,layoutSide:T}),right:l.jsx(we,{...i,layoutSide:X})})});case Ze:return l.jsx(Ie,{content:l.jsx(we,{...i,layoutSide:X})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ce.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Re="#353C4E",$n=d.createContext(void 0);function Xn(){return d.useContext($n)}const Qi=i=>{const{expandable:e,expanded:t,onClick:n,level:r}=i,a=d.useContext(Rn),o=r>0,s=n??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(At,{short:e}),e&&t!==void 0&&l.jsx(St,{onToggle:s,expanded:t})]})};Qi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const zn={[_.JsoProperty]:Fn,[_.DdlApiSection]:Pn,[_.DdlApiProperty]:li},Jn={[_.JsoProperty]:["min-h-[26px]"],[_.DdlApiProperty]:["min-h-[26px]"]};function Qn(i){const e=zn[i]??zi,t=Jn[i]??[];return[e,...t].join(" ")}const ke=d.memo(i=>{const{expandable:e,expanded:t,onClickExpander:n,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:u=!0,subheader:f,usage:g=_.Default,highlightingMode:c=Tt,hideLevelIndicatorWhenSideEmpty:p=!1}=i,{diff:y,descendantDiffs:D,diffsSeverities:k}=i,{[K]:h,[I]:m}=i,H=d.useMemo(()=>{switch(g){case _.Default:return c.get(We.Default);case _.AsyncApiJsoSection:case _.JsoProperty:return c.get(We.JsoPropertyKey)}},[c,g]),C=re(),E=Xn(),N=d.useMemo(()=>E?o===T?E.beforeLevel:E.afterLevel:C,[o,C,E]),O=d.useMemo(()=>{const v=[];if(!y)return v;const{data:R,styles:Z}=y;return R&&(o===T&&v.push(F.background(Z.before.backgroundColor)),o===X&&v.push(F.background(Z.after.backgroundColor))),v},[y,o]),q=d.useMemo(()=>u?l.jsx(Ji,{"data-precededby":h,value:r,variant:a,layoutSide:o,diff:y,usage:g,highlightingMode:H,onClick:n}):null,[u,h,r,a,o,y,g,H,n]),b=g===_.DdlApiProperty,V=d.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||N>0)&&l.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(Ce,{level:N}),l.jsx(Qi,{expandable:e,expanded:t,onClick:n,level:N})]}),!b&&q]}):p?null:N>0&&l.jsx(Ce,{level:N}),[s,e,t,q,p,b,N,n,h]),M=d.useMemo(()=>Qn(g),[g]);return l.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":m?!0:void 0,"data-usage":g!==_.Default?g:void 0,className:`title-row-content flex w-full ${b?"items-stretch":"items-center"} h-full ${M} gap-2 ${O.join(" ")}`,children:[V,b?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[q,f==null?void 0:f(o)]}):f==null?void 0:f(o)]})});ke.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const J=d.memo(i=>{const e=Te(),{diff:t,diffsSeverities:n,enableHeaderValue:r}=i,a=d.useMemo(()=>n==null?void 0:n["title-row"],[n]),o=d.useMemo(()=>a==null?void 0:a.type,[a]),s=d.useMemo(()=>Qe(a==null?void 0:a.causedAt),[a]);switch(e){case ei:return l.jsx(Me,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(je,{left:l.jsx(ke,{...i,enableHeader:(t==null?void 0:t.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:T}),right:l.jsx(ke,{...i,enableHeader:(t==null?void 0:t.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:X})})});case Ze:return l.jsx(Ie,{content:l.jsx(ke,{...i,layoutSide:X})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});J.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function ha(i,e){return d.useMemo(()=>e(i)?he(i):{},[e,i])}function he(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Fe(i,e={}){const{diffKey:t,fallbackToNodeDiff:n=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:u,nodeDiffsSeverities:f}=i;if(!s)return{};const g=Object.entries(s),c=D=>{const k=g.find(([h])=>h===String(D));return k==null?void 0:k[1]},p=t?c(t):void 0;return{diff:o?o(s,c):n?s[$]??p:p,...r?{descendantDiffs:u}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function Zn(i){return _i.includes(i.kind)}function pa(i){return i.childrenNodes().filter(Zn)}function er(i){return i.kind===L.TABLE}function ma(i){return er(i)&&i instanceof ae}function ir(i){return i.kind===L.COLUMNS}function tr(i){return ir(i)&&i instanceof ae}function nr(i){return rr(i)&&i instanceof ae}function Zi(i){return i.kind===L.COLUMN}function si(i){return Zi(i)&&i instanceof ae}function rr(i){return i.kind===L.INDEXES}function et(i){return i.kind===L.INDEX}function it(i){return et(i)&&i instanceof ae}function tt(i){return i.filter(Zi)}function nt(i){return i.filter(et)}const ar=d.createContext(null);function or(){const i=d.useContext(ar);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const lr=({href:i,className:e,children:t})=>l.jsx("a",{href:i,className:e,children:t});lr.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const rt=qn;function at(i){const e=Fe(he(i),{resolveDiff:()=>Cn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function ya(i){const e=Fe(he(i),{resolveDiff:()=>xn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const ba=Hn,sr="ux-badge_ddlapi_primary-key",ot="ux-badge_ddlapi_foreign-key",dr="ux-badge_ddlapi_unique",ur="ux-badge_ddlapi_not-null",fr="ux-badge_ddlapi_generated",gr="public",lt="Default",st="As",dt="Values";function cr(i){return i?!!(qe(i.defaultValue)||qe(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const hr="detailed";function Y(i){return i===hr}function Ae(i){return i!=null}let ut=class{resolveNodeVisibility(e,t){const n=e.value(),r=this.resolveDescriptionRowVisible(n,t),a=this.resolveEnumValuesRowVisible(n,t),o=this.resolveDefaultRowVisible(n,t),s=this.resolveGeneratedRowVisible(n,t);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:s,showAnyAdditionalInfoRow:a||o||s}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:s}=t;return{isTitleListLastRow:e&&!n&&!r,isDescriptionListLastRow:e&&n&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!s,isDefaultAdditionalInfoListLastRow:e&&o&&!s,isGeneratedAdditionalInfoListLastRow:e&&s}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,t){return t==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,t){return Y(t)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,t){return Y(t)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,t){return Y(t)&&Ae(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,t){return Y(t)&&Ae(e==null?void 0:e.generatedExpression)}};const di=new ut;function pr(i,e){return di.resolveNodeVisibility(i,e)}function mr(i,e){return di.resolveListLastRowFlags(i,e)}function ki(i,e){return di.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}const ft=d.memo(i=>{const{isVisible:e,value:t,blockClassName:n,valueClassName:r}=i;return e?l.jsx("span",{className:n,children:l.jsx("span",{className:r||void 0,children:`${t}`})}):null});ft.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function yr(i={}){const{textHighlighterColor:e,borderShadowColor:t,isFontMuted:n}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",F.borderShadow(t)].filter(Boolean).join(" "),valueClassName:[F.highlighter(e),n?F.fontMuted():""].filter(Boolean).join(" ")}),[t,n,e])}const ie=d.memo(i=>{const{isVisible:e,value:t,textHighlighterColor:n,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:s}=yr({textHighlighterColor:n,borderShadowColor:r,isFontMuted:a});return l.jsx(ft,{isVisible:e,value:t,blockClassName:o,valueClassName:s})});ie.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const xe=d.memo(i=>{var h;const{label:e,subheader:t,layoutSide:n,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1}=i,{[K]:s,[I]:u}=i,f=re(),g=n===T?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,p=(h=(n===T?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??g)==null?void 0:h.backgroundColor,y=d.useMemo(()=>p?[F.background(p)]:[],[p]),D=d.useMemo(()=>{const m=a==null?void 0:a.data;if(m){if(G(m))return n!==T;if(P(m))return n===T}return(g==null?void 0:g.isContentVisible)??!0},[a,g==null?void 0:g.isContentVisible,n]),k=f>0&&(!o||D);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":s,"data-ddl-list-last-row":u?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${li} min-h-[26px] gap-2 ${y.join(" ")}`,children:[k&&l.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(Ce,{level:f}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),t==null?void 0:t(n)]})]})});xe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const te=d.memo(i=>{var r;const e=Te(),t=(r=i.diffsSeverities)==null?void 0:r[Ai.AdditionalInfoRow],n=d.useMemo(()=>Qe(t==null?void 0:t.causedAt),[t==null?void 0:t.causedAt]);switch(e){case ei:return l.jsx(Me,{diffType:t==null?void 0:t.type,diffTypeCause:n,hidden:!1,children:l.jsx(je,{left:l.jsx(xe,{...i,layoutSide:T}),right:l.jsx(xe,{...i,layoutSide:X})})});case Ze:return l.jsx(Ie,{content:l.jsx(xe,{...i,layoutSide:X})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});te.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function ne(i,e){return i?(e===T?i.styles.before:i.styles.after).textHighlighterColor:void 0}function br(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===gr?e:`${i.schemaName}.${e}`}function Dr(i){return i.join(", ")}const He=d.memo(i=>{const{target:e,hideBadge:t=!1,textHighlighterColor:n}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=or(),o=d.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),s=d.useMemo(()=>["ddlapi-foreign-key-link",F.highlighter(n)].filter(Boolean).join(" "),[n]),u=l.jsx(a,{href:o,className:s,children:br(e)});return t?u:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Et,{text:"FK",colorSchema:ot,inline:!0}),u]})});He.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function vr(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function gt(i,e){return!!i||!!e}function ui(i,e){return i?e===T?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Vr(i,e,t){return gt(i,e)&&ui(e,t)}function ve(i){const{columnId:e,label:t,colorSchema:n,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=i;if(!gt(r,a))return null;if(!ui(a,s))return vr();const u=jn(a)?a==null?void 0:a.data:void 0;return l.jsx(Si,{label:t,colorSchema:n,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!u,$changes:u},kr(e,t))}function wr(i){const{columnId:e,target:t,targetKey:n,targetDiff:r,layoutMode:a,layoutSide:o}=i,s=xr(e,n),u=ne(r,o);if(r&&!ui(r,o))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},s);if(!r)return l.jsx(He,{target:t},s);if(B(r.data))return l.jsx(He,{target:Tn(t,r,o),textHighlighterColor:u},s);const f=r.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Si,{label:"FK",colorSchema:ot,layoutMode:a,layoutSide:o,isNodeChanged:!1,isContentChanged:!0,$changes:f}),l.jsx(He,{target:t,hideBadge:!0,textHighlighterColor:u})]},s)}const pe=d.memo(i=>{const{columnId:e,value:t,flagDiffs:n,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Te(),s=d.useMemo(()=>n??{},[n]),u=d.useMemo(()=>r??{},[r]),f=d.useMemo(()=>ve({columnId:e,label:"PK",colorSchema:sr,flagValue:t.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,s.isPrimaryKey,o,a,t.isPrimaryKey]),g=d.useMemo(()=>Vr(t.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,t.isPrimaryKey]),c=d.useMemo(()=>ve({columnId:e,label:"unique",colorSchema:dr,flagValue:t.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[e,s.isUnique,o,a,t.isUnique]),p=d.useMemo(()=>g?null:ve({columnId:e,label:"not null",colorSchema:ur,flagValue:t.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[e,s.isNotNull,g,o,a,t.isNotNull]),y=d.useMemo(()=>ve({columnId:e,label:"generated",colorSchema:fr,flagValue:t.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[e,s.isGenerated,o,a,t.isGenerated]),D=d.useMemo(()=>{const h=t.foreignKeyTargets??[];if(h.length===0)return[];const m=cn(h);return h.map((H,C)=>wr({columnId:e,target:H,targetKey:m[C],targetDiff:u[m[C]],layoutMode:o,layoutSide:a}))},[e,o,a,u,t.foreignKeyTargets]),k=d.useMemo(()=>[f,c,p,y,...D].filter(Boolean),[D,y,p,f,c]);return k.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:k})});function kr(i,e){return`${i}-${e}`}function xr(i,e){return`${i}-FK-${e}`}pe.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const fi=d.memo(i=>{const{isVisible:e,value:t,className:n}=i;return e?l.jsx("span",{className:n,children:`${t}`}):null});fi.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function ct(i){const{appearance:e}=i;return d.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const fe=d.memo(i=>{const{isVisible:e,value:t,appearance:n}=i,r=ct({appearance:n});return l.jsx(fi,{isVisible:e,value:t,className:r})});fe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const gi=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,[K]:r}=i,a=de(),o=e.value(),s=d.useMemo(()=>pr(e,a),[e,a]),u=d.useMemo(()=>mr(n,s),[n,s]),f=d.useCallback(y=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(fe,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(pe,{columnId:e.id,layoutSide:y,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),g=d.useCallback(y=>{const D=o==null?void 0:o.defaultValue;return qe(D)?l.jsx(ie,{isVisible:!0,value:D}):l.jsx(l.Fragment,{})},[o]),c=d.useCallback(y=>{const D=o==null?void 0:o.generatedExpression;return qe(D)?l.jsx(ie,{isVisible:!0,value:D}):l.jsx(l.Fragment,{})},[o]),p=d.useCallback(y=>{var D;return(D=o==null?void 0:o.enumValues)!=null&&D.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((k,h)=>l.jsx(ie,{isVisible:!0,value:k},`${k}-${h}`))}):l.jsx(l.Fragment,{})},[o]);return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(J,{"data-precededby":r,[I]:u.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:f,usage:_.DdlApiProperty}),s.showDescription&&l.jsx(ce,{"data-precededby":j.DDL_COLUMN_ROW,[I]:u.isDescriptionListLastRow||void 0,value:o.description??"",variant:x.body2,textFontWeight:"normal",textColor:Re,usage:z.DdlApiProperty}),s.showEnumValuesRow&&l.jsx(te,{"data-precededby":t,[I]:u.isEnumAdditionalInfoListLastRow||void 0,label:dt,subheader:p}),s.showDefaultRow&&l.jsx(te,{"data-precededby":ki(s,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[I]:u.isDefaultAdditionalInfoListLastRow||void 0,label:lt,subheader:g}),s.showGeneratedRow&&l.jsx(te,{"data-precededby":ki(s,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[I]:u.isGeneratedAdditionalInfoListLastRow||void 0,label:st,subheader:c})]}):null};gi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function xi(i,e){return i?(e===T?i.styles.before:i.styles.after).borderShadowColor:void 0}function Hr(i,e){return i?(e===T?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Nr(i){if(si(i))return Sn(i)}function Cr(i){if(si(i))return _n(i)}function qr(i){if(it(i))return Xi(i)}const Hi=new ut;class Ar{resolveNodeVisibility(e,t){const n=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(n,Wi(e),t),o=this.resolveEnumValuesRowVisible(n,ai(e),t),s=this.resolveDefaultRowVisible(n,oi(e),$i(e),r,t),u=this.resolveGeneratedRowVisible(n,Xe(e),t);return{showDescription:a,showEnumValuesRow:o,showDefaultRow:s,showGeneratedRow:u,showAnyAdditionalInfoRow:o||s||u}}resolveListLastRowFlags(e,t){return Hi.resolveListLastRowFlags(e,t)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t){return Hi.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,t)}resolveGeneratedExpressionSideDisplay(e,t){var a;const n=(a=e.value())==null?void 0:a.generatedExpression,r=Xe(e);return ge(n,r,t)}isWholeNodeAddOrRemove(e){const t=e.diffs[$];return!!t&&(G(t.data)||P(t.data))}resolveDescriptionRowVisible(e,t,n){return Y(n)&&(!!(e!=null&&e.description)||!!t)}resolveEnumValuesRowVisible(e,t,n){return Y(n)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!t)}resolveDefaultRowVisible(e,t,n,r,a){const o=Ae(e==null?void 0:e.defaultValue)||!!t||!!n;return Y(a)&&o}resolveGeneratedRowVisible(e,t,n){return Y(n)&&(Ae(e==null?void 0:e.generatedExpression)||!!t)}}const Pe=new Ar;function Sr(i,e){return Pe.resolveNodeVisibility(i,e)}function Tr(i,e){return Pe.resolveListLastRowFlags(i,e)}function Ni(i,e){return Pe.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Er(i,e){return Pe.resolveGeneratedExpressionSideDisplay(i,e)}function _r(i){const{appearance:e,textHighlighterColor:t,backgroundColor:n}=i,r=ct({appearance:e});return d.useMemo(()=>[r,F.highlighter(t),F.background(n)].filter(Boolean).join(" "),[e,n,r,t])}const Oe=d.memo(i=>{const{isVisible:e,value:t,appearance:n,textHighlighterColor:r,backgroundColor:a}=i,o=_r({appearance:n,textHighlighterColor:r,backgroundColor:a});return l.jsx(fi,{isVisible:e,value:t,className:o})});Oe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Lr(i,e){return i?(e===T?i.styles.before:i.styles.after).backgroundColor:void 0}function Mr(i){return i.text===", "||i.text===","}function Ir(i,e){const t=[];let n=!1;return i.forEach((r,a)=>{if(Mr(r)){n=!0;return}n&&(t.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),n=!1),t.push(jr(r,a,e))}),t}function jr(i,e,t){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:ne(i.diff,t)},`${i.text}-${e}`):l.jsx(fe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Se=d.memo(i=>{const{display:e,layoutSide:t}=i;return e.kind==="plain"?l.jsx(fe,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Oe,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:ne(e.diff,t),backgroundColor:Lr(e.diff,t)}):l.jsx("span",{className:"inline-flex items-center",children:Ir(e.segments,t)})});Se.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},display:{required:!0,tsType:{name:"union",raw:`| {
  readonly kind: "plain"
  readonly text: string
}
| {
  readonly kind: "monolithic"
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}
| {
  readonly kind: "segmented"
  readonly segments: readonly DdlListSideSegment[]
}`,elements:[{name:"signature",type:"object",raw:`{
  readonly kind: "plain"
  readonly text: string
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"plain"',required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  readonly kind: "monolithic"
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"monolithic"',required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"diff",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"increaseLevel",value:{name:"boolean",required:!0}}]},required:!0}}]},required:!0}},{key:"highlightingMode",value:{name:"Map",elements:[{name:"DiffHiglightingApplicationArea"},{name:"DiffHighlightingApplicationMode"}],raw:"Map<DiffHiglightingApplicationArea, DiffHighlightingApplicationMode>",required:!0}},{key:"inherited",value:{name:"boolean",required:!1}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  readonly kind: "segmented"
  readonly segments: readonly DdlListSideSegment[]
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Rr(i){const e=i.findIndex(t=>t.text.startsWith("(")||t.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function Fr(i,e,t){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:ne(i.diff,t)},`${i.text}-${e}`):l.jsx(fe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const ht=d.memo(i=>{const{node:e,layoutSide:t}=i,n=mn(e,t);if(n.kind==="plain"||n.kind==="monolithic")return l.jsx(Se,{layoutSide:t,display:n});const{typeNameSegments:r,parameterSegments:a}=Rr(n.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>Fr(o,s,t)),a.length>0&&l.jsx(Se,{layoutSide:t,display:{kind:"segmented",segments:a}})]})});ht.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const pt=i=>{const{node:e,additionalInfoPrecededBy:t=j.DDL_COLUMN_ROW,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[K]:a}=i,o=de(),s=e.value(),u=d.useMemo(()=>rt(e),[e]),f=d.useMemo(()=>at(e),[e]),g=d.useMemo(()=>Cr(e),[e]),c=d.useMemo(()=>Nr(e),[e]),p=d.useMemo(()=>Wi(e),[e]),y=d.useMemo(()=>Xe(e),[e]),D=d.useMemo(()=>ai(e),[e]),k=d.useMemo(()=>Ln(e),[e]),h=d.useMemo(()=>oi(e),[e]),m=d.useMemo(()=>$i(e),[e]),H=d.useMemo(()=>Sr(e,o),[e,o]),C=d.useMemo(()=>Tr(n,H),[n,H]),E=d.useCallback(b=>s?Ui(u,b)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(ht,{node:e,layoutSide:b}),l.jsx(pe,{columnId:e.id,layoutSide:b,value:s,flagDiffs:g,foreignKeyTargetDiffs:c})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[g,c,e,u,s]),N=d.useCallback(b=>{const V=Mn(e,b);return V===void 0?l.jsx(l.Fragment,{}):l.jsx(ie,{isVisible:!0,value:V,textHighlighterColor:ne(h,b),borderShadowColor:xi(h,b)})},[h,e]),O=d.useCallback(b=>{const V=Er(e,b);return V===void 0?l.jsx(l.Fragment,{}):l.jsx(ie,{isVisible:!0,value:V,textHighlighterColor:ne(y,b)})},[y,e]),q=d.useCallback(b=>{const V=In(e,b);return V.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:V.map((M,v)=>l.jsx(ie,{isVisible:!0,value:M.literal,textHighlighterColor:ne(M.diff,b),borderShadowColor:xi(M.diff,b),isFontMuted:Hr(M.diff,b)},`${M.literal}-${v}`))})},[e]);return s?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(J,{"data-precededby":a,[I]:C.isTitleListLastRow||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:E,usage:_.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),H.showDescription&&l.jsx(ce,{"data-precededby":j.DDL_COLUMN_ROW,[I]:C.isDescriptionListLastRow||void 0,value:s.description??"",variant:x.body2,textFontWeight:"normal",textColor:Re,usage:z.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),H.showEnumValuesRow&&l.jsx(te,{"data-precededby":t,[I]:C.isEnumAdditionalInfoListLastRow||void 0,label:dt,subheader:q,colorizingDiff:k,diffsSeverities:D||k?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),H.showDefaultRow&&l.jsx(te,{"data-precededby":Ni(H,"default")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[I]:C.isDefaultAdditionalInfoListLastRow||void 0,label:lt,subheader:N,colorizingDiff:m,diffsSeverities:h||m?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),H.showGeneratedRow&&l.jsx(te,{"data-precededby":Ni(H,"generated")?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:t,[I]:C.isGeneratedAdditionalInfoListLastRow||void 0,label:st,subheader:O,diff:y,colorizingDiff:e.diffs[$],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};pt.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function mt(i,e){let t=!1;return i.map((n,r)=>{const a=r===i.length-1,o=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,s=t?j.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:j.DDL_COLUMN_ROW,u={columnNode:n,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return t=e&&cr(n.value()),u})}const Pr=i=>{const{node:e,[K]:t}=i;return tr(e)?l.jsx(Gr,{"data-precededby":t,node:e}):l.jsx(Or,{"data-precededby":t,node:e})},Or=i=>{const{node:e,[K]:t}=i,n=re(),r=de(),a=e.value(),o=tt(e.childrenNodes()),s=r===Ti,u=d.useMemo(()=>mt(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(J,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2,usage:_.DdlApiSection}),l.jsx(Ee.Provider,{value:n+1,children:u.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>l.jsx(gi,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},Gr=i=>{const{node:e,[K]:t}=i,n=re(),r=de(),a=e.value(),o=tt(e.childrenNodes()),s=r===Ti,u=d.useMemo(()=>Fe(he(e)),[e]),f=d.useMemo(()=>mt(o,s),[o,s]),g=d.useMemo(()=>Bi(e),[e]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(J,{"data-precededby":t,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2,usage:_.DdlApiSection,...u}),l.jsx(Ee.Provider,{value:n+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:y,isLastInList:D})=>si(c)?l.jsx(pt,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:D,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):l.jsx(gi,{"data-precededby":p,additionalInfoPrecededBy:y,isLastInList:D,node:c},c.id))})]})};Pr.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
| DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMNS>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`}]},description:""}}};let yt=class{resolveNodeVisibility(e,t){const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,t),showSubheader:this.resolveSubheaderVisible(n)}}resolveListLastRowFlags(e,t){return this.resolveListLastRowFlagsFromVisibility(e,t)}resolveListLastRowFlagsFromVisibility(e,t){const{showDescription:n}=t;return{isTitleListLastRow:e&&!n,isDescriptionListLastRow:e&&n}}resolveDescriptionRowVisible(e,t){return Y(t)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const bt=new yt;function Kr(i,e){return bt.resolveNodeVisibility(i,e)}function Ur(i,e){return bt.resolveListLastRowFlags(i,e)}const ci=i=>{const{node:e,isLastInList:t=!1,[K]:n}=i,r=de(),a=e.value(),o=d.useMemo(()=>Kr(e,r),[e,r]),s=d.useMemo(()=>Ur(t,o),[t,o]),u=(a==null?void 0:a.indexName)??"",f=d.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const p=Dr(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(fe,{isVisible:!0,value:`(${p})`,appearance:"text"}),l.jsx(pe,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=o.showDescription;return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(J,{"data-precededby":n,[I]:s.isTitleListLastRow||void 0,value:u,expandable:!1,expanded:!0,variant:x.body2,subheader:o.showSubheader?f:void 0,usage:_.DdlApiProperty}),g&&l.jsx(ce,{"data-precededby":j.DDL_INDEX_ROW,[I]:s.isDescriptionListLastRow||void 0,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:Re,usage:z.DdlApiProperty})]}):null};ci.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Br=new yt;class Wr{resolveNodeVisibility(e,t){var r;const n=e.value();return{showDescription:this.resolveDescriptionRowVisible(n,Yi(e),t),showSubheader:this.resolveSubheaderVisible(n,(r=Xi(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,t){return Br.resolveListLastRowFlags(e,t)}resolveDescriptionRowVisible(e,t,n){return Y(n)&&(!!(e!=null&&e.description)||!!t)}resolveSubheaderVisible(e,t){return!!e&&(e.partNames.length>0||e.isUnique||!!t)}}const Dt=new Wr;function Yr(i,e){return Dt.resolveNodeVisibility(i,e)}function $r(i,e){return Dt.resolveListLastRowFlags(i,e)}const vt=i=>{const{node:e,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:n=!1,[K]:r}=i,a=de(),o=e.value(),s=d.useMemo(()=>Yr(e,a),[e,a]),u=d.useMemo(()=>$r(t,s),[t,s]),f=d.useMemo(()=>rt(e),[e]),g=d.useMemo(()=>at(e),[e]),c=d.useMemo(()=>qr(e),[e]),p=d.useMemo(()=>Yi(e),[e]),y=(o==null?void 0:o.indexName)??"",D=d.useCallback(m=>{const H=kn(e,m);return l.jsx(Se,{layoutSide:m,display:H})},[e]),k=d.useCallback(m=>{if(!o)return l.jsx(l.Fragment,{});if(!Ui(f,m))return l.jsx(l.Fragment,{});const H=o.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[H&&D(m),l.jsx(pe,{columnId:e.id,layoutSide:m,value:o,flagDiffs:c})]})},[c,e.id,f,D,o]),h=s.showDescription;return o?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(J,{"data-precededby":r,[I]:u.isTitleListLastRow||void 0,value:y,expandable:!1,expanded:!0,variant:x.body2,subheader:s.showSubheader?k:void 0,usage:_.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:n,...g}),h&&l.jsx(ce,{"data-precededby":j.DDL_INDEX_ROW,[I]:u.isDescriptionListLastRow||void 0,value:o.description??"",variant:x.body1,textFontWeight:"normal",textColor:Re,usage:z.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:n})]}):null};vt.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Vt(i){return i.map((e,t)=>({indexNode:e,titlePrecededBy:j.DDL_INDEX_ROW,isLastInList:t===i.length-1}))}const Xr=i=>{const{node:e,[K]:t}=i;return nr(e)?l.jsx(Jr,{"data-precededby":t,node:e}):l.jsx(zr,{"data-precededby":t,node:e})},zr=i=>{const{node:e,[K]:t}=i,n=re(),r=e.value(),a=nt(e.childrenNodes()),o=d.useMemo(()=>Vt(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(J,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2,usage:_.DdlApiSection}),l.jsx(Ee.Provider,{value:n+1,children:o.map(({indexNode:s,titlePrecededBy:u,isLastInList:f})=>l.jsx(ci,{"data-precededby":u,isLastInList:f,node:s},s.id))})]})},Jr=i=>{const{node:e,[K]:t}=i,n=re(),r=e.value(),a=nt(e.childrenNodes()),o=d.useMemo(()=>Fe(he(e)),[e]),s=d.useMemo(()=>Vt(a),[a]),u=d.useMemo(()=>Bi(e),[e]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(J,{"data-precededby":t,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2,usage:_.DdlApiSection,...o}),l.jsx(Ee.Provider,{value:n+1,children:s.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>it(f)?l.jsx(vt,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:u,node:f},f.id):l.jsx(ci,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};Xr.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
| DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEXES>`,elements:[{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`}]},description:""}}};export{_t as $,K as A,zt as B,Pr as C,gr as D,da as E,ue as F,oa as G,la as H,Xr as I,Xt as J,ua as K,sa as L,_i as M,ne as N,Ie as O,j as P,Me as Q,je as R,ae as S,J as T,ba as U,ya as V,Nn as W,zi as X,ga as Y,ca as Z,ma as _,rr as a,Ge as a0,Lt as a1,Pt as a2,Ot as a3,It as a4,jt as a5,Mt as a6,Q as a7,ta as a8,Ei as a9,na as aa,Ji as ab,Rn as ac,$n as ad,Xn as ae,he as af,Fe as ag,_ as ah,ha as ai,x as b,ce as c,Re as d,Rt as e,fa as f,pa as g,er as h,ir as i,ar as j,lr as k,sn as l,A as m,Ke as n,cn as o,gn as p,an as q,aa as r,Fi as s,Mi as t,ra as u,ni as v,Le as w,L as x,Ii as y,ji as z};
