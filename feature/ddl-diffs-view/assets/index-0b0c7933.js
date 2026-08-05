var fn=Object.defineProperty;var gn=(i,e,n)=>e in i?fn(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var V=(i,e,n)=>(gn(i,typeof e!="symbol"?e+"":e,n),n);import{t as W,v as K,x as Ue,w as $,Z as Be,_ as fi,$ as we,N as re,a0 as vi,P as T,a1 as cn,a2 as hn,K as De,Q as pn,M as ve,a3 as mn,U as E,H as fe,a4 as We,a5 as He,a6 as yn,W as Q,V as O,a7 as ki,a8 as se,a9 as qe,X as Te,R as Vi,Y as Qe,k as Ze,S as ei,aa as bn,ab as Dn,y as vn,ac as X,ad as kn,ae as Hi,u as ge,h as ce,f as _e}from"./DiffBadge-2df369cb.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const te={SIMPLE:"simple",COMPLEX:"complex"};class Ee{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=te.SIMPLE,value:s=null,parent:f=null,container:u=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=f,this.container=u,this.newDataLevel=g,this._value=s,this._meta=c}createCycledClone(e,n,t){const r=new Ee(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===te.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class ii extends Ee{constructor(n="#",t="",r,a,o){super(n,t,r,a,o);V(this,"type");this.id=n,this.key=t,this.kind=r,this.type=o.type}createCycledClone(n,t,r){const a=new ii(n,t,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a.setChildrenNodes(this._childrenNodes),a.setNestedNodes(this._nestedNodes),a}value(n){const t=this.findNestedNode(n,!0);return(t==null?void 0:t.value())??null}childrenNodes(n){const t=this.findNestedNode(n,!0);return(t==null?void 0:t.childrenNodes())??[]}}class Vn{constructor(){V(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,n,t,r,a){const o=new Ee(e,n,t,r,a);return this.nodes.set(e,o),o}createComplexNode(e,n,t,r,a){const o=new ii(e,n,t,r,a);return this.nodes.set(e,o),o}createCycledClone(e,n,t,r){const a=e.createCycledClone(n,t,r);return this.nodes.set(n,a),a}}const Hn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},xn=Object.values(Hn);new Set(xn);class Me{aggregateByDescendantDiffs(e,n,t,r){}static isDiffsRecord(e){if(!_(e))return!1;for(const n of Object.values(e))if(!Me.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return _(n)&&(W(n)||K(n)||Ue(n)||$(n))}}function _(i){return xi(i)&&!Array.isArray(i)}function xi(i){return typeof i=="object"&&i!==null}function Cn(i){return _(i)&&Object.keys(i).every(e=>typeof e=="string")}function Re(i){return Array.isArray(i)}function _r(i,e,n){let t=i,r=!1;for(const a of e){if(!_(t)&&!Re(t))return;if(r){let s;xi(t)&&(s=t[a]),!s&&Re(t)&&n&&(s=t.find(f=>_(f)&&f[n]===a)),t=s,r=!1;continue}t=t[a],Re(t)&&(r=!0)}return t}function Er(i,e){return Object.keys(i).find(n=>i[n]===e)}function Mr(i){if(Me.isDiffsRecord(i))return i}class Nn{constructor(){V(this,"tree",null)}pick(e,n){if(!_(e))return null;const t={};for(const r of n){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?t[a]=[...o]:_(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const ke=()=>{},wn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ke,info:ke,warn:ke,error:ke};function qn(i){return i==null||!_(i)&&!Be(i)}function Sn(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:f,isComplexNode:u,resolveNodeKey:g,isDisallowedValue:c=qn,shouldStopAfterNodeCreation:h}=i;return[({value:p,state:y,key:S,path:N})=>{if(typeof S=="symbol")return;if(!_(p)&&!Be(p))return{value:p};const{alreadyConvertedValuesCache:A,parent:v,container:w}=y,x=A.get(p);if(!x||!f(x)&&!u(x))return{value:p};if(!v||!f(v))return{value:p};const C="#"+fi(N),q=g(S,p),I=n.createCycledClone(x,C,q,v);return w?w.addNestedNode(I):v&&v.addChildNode(I),{done:!0}},({key:p,value:y,path:S,state:N,rules:A})=>!A||!Array.isArray(A.transformers)?void 0:{value:A.transformers.reduce((x,C)=>C(p,x,e,S,N),y)},({key:p,value:y,path:S,rules:N,state:A})=>{if(!N)return{done:!0};if(typeof p=="symbol")return{done:!0};if(c(y))return{done:!0};if(!N.kind||!t.includes(N.kind))return;const{parent:v,container:w}=A,x="#"+fi(S),C=g(p,y),{kind:q,complex:I=!1}=N,b=a(y,v,w),j=r(x,C,q,I,b);if(!j)return;w?w.addNestedNode(j):v&&v.addChildNode(j);let z=y;if(h!=null&&h(j,y)){const J=v?v.descendantDiffs:void 0;if(!J||!(p in J))return{done:!0};const U=J[p];if(!U)return{done:!0};const{data:F}=U;$(F)&&(z=F.beforeValue)}const ie=new Map(A.alreadyConvertedValuesCache);(_(y)||Be(y))&&ie.set(y,j);let R;return f(j)?R=o(A,j,ie):R=s(A,j,ie),{value:z,state:R}}]}class An{}class de{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);V(this,"_diffs",{});V(this,"_diffsSummary",new Set);V(this,"_descendantDiffs",{});V(this,"_descendantDiffsSummary",new Set);V(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=te.SIMPLE,value:s=null,parent:f=null,container:u=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=f,this.container=u,this.newDataLevel=g,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new de(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===te.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}class Tn extends Vn{constructor(){super()}}const L={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Ci=Object.values(L),Ni="<unnamed>";function _n(i){return i??Ni}function wi(i){return i!==Ni}function En(i,e){return e.indexName&&wi(e.indexName)?e.indexName:i}function Lr(i,e,n){return n||(e!=null&&e.indexName&&wi(e.indexName)?e.indexName:String(i))}function Ye(i=L.TABLE){return{"/columns":{"/items":{"/*":()=>Ye(L.COLUMN)},kind:L.COLUMNS},"/indexes":{"/items":{"/*":()=>Ye(L.INDEX)},kind:L.INDEXES},kind:i}}const gi={Identity:"identity",Expression:"expression"};function Mn(i){return i.kind===we.Literal&&typeof i.value=="string"}function Ln(i){return i.kind===we.RawExpr&&typeof i.expr=="string"}function In(i){return _(i)&&typeof i.expr=="string"}function jn(i){return _(i)&&typeof i.value=="string"}const he="titleRow",Fn=["typeName","size","precision","scale","label"],Ir={ToEnum:"to-enum",FromEnum:"from-enum"},jr={Lost:"lost",Gained:"gained"},qi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],Si=["isUnique"],Fr=[re,he,"tableName","schemaName","description"],Pr=[re,he,"columnName","description","generatedExpression",...qi],Or=[re,he,"indexName","description",...Si];function Pn(i){if(!_(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!_(n)||!("before"in n)||!("after"in n)?!1:Me.isDiff(e)}function Ai(i){return Pn(i[he])}function On(i){return _(i)&&i.kind===vi.Domain&&typeof i.type=="string"}function Rn(i){return i.kind===T.BoolType&&typeof i.type=="string"}function Gn(i){return i.kind===T.IntegerType&&typeof i.type=="string"}function ci(i){return i.kind===T.DecimalType&&typeof i.type=="string"}function hi(i){return i.kind===T.FloatType&&typeof i.type=="string"}function pi(i){return i.kind===T.StringType&&typeof i.type=="string"}function mi(i){return i.kind===T.BinaryType&&typeof i.type=="string"}function yi(i){return i.kind===T.TimeType&&typeof i.type=="string"}function Kn(i){return i.kind===T.JSONType&&typeof i.type=="string"}function Un(i){return i.kind===T.SpatialType&&typeof i.type=="string"}function Bn(i){return i.kind===T.UUIDType&&typeof i.type=="string"}function Ge(i){return i.kind===T.EnumType&&Array.isArray(i.values)}function Wn(i){return i.kind===T.UnsupportedType&&typeof i.type=="string"}function bi(i){return typeof i.type=="string"}function ni(i){switch(i.kind){case we.Literal:return Mn(i)?i.value:i.kind;case we.RawExpr:return Ln(i)?i.expr:i.kind;case cn.NamedDefault:try{return ni(hn(i))}catch{return i.kind}default:return In(i)?i.expr:jn(i)?i.value:i.kind}}function Ti(i){return _i(ni(i))}function Yn(i){return _i(i)}function _i(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const $n="Columns",Xn="Indexes";class zn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=De(n.attrs,ve.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:$n,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:Xn,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:_(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return _(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!_(e)||typeof e.tableName!="string"||!_(e.columns)||!Array.isArray(e.columns.items)||!_(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var p,y,S;const a=De(t.attrs,ve.Comment),o=(p=t.attrs)==null?void 0:p.find(N=>N.kind===pn.Identity),s=De(t.attrs,ve.GeneratedExpr),f=o!==void 0||s!==void 0,g=this.findForeignKeysForColumn(n,t).map(N=>this.buildForeignKeyTarget(e,N,t,r)).filter(N=>N!==void 0),c=g.length>0,h=this.formatColumnType(t.type),m=(y=t.type)==null?void 0:y.type,D=m&&Ge(m)?m.values:void 0,k=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:h,...D?{enumValues:D}:{},isPrimaryKey:k,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:f,...o?{generatedBy:gi.Identity}:{},...s&&!o?{generatedBy:gi.Expression}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!k&&((S=t.type)==null?void 0:S.null)===!1,...t.default!==void 0?{defaultValue:Ti(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=De(e.attrs,ve.Comment);return{indexName:_n(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isSingleColumnUniqueIndexForColumn(e,n){var t,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(t=(e.parts??[])[0])==null?void 0:t.column)==null?void 0:r.name)===n}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>this.isSingleColumnUniqueIndexForColumn(t,n.name))}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var u,g;const a=((u=n.columns)==null?void 0:u.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,s=(g=n.refColumns)==null?void 0:g[a];if(!o||!s)return;const f=this.resolveForeignKeyTargetSchemaName(e,o,r);if(f)return{schemaName:f,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(On(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return Rn(e)?{kind:T.BoolType,typeName:e.type,label:n}:Gn(e)?{kind:T.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ci(e)?{kind:T.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:hi(e)?{kind:T.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:pi(e)?{kind:T.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:mi(e)?{kind:T.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:yi(e)?{kind:T.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Kn(e)?{kind:T.JSONType,typeName:e.type,label:n}:Un(e)?{kind:T.SpatialType,typeName:e.type,label:n}:Bn(e)?{kind:T.UUIDType,typeName:e.type,label:n}:Ge(e)?{kind:T.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Wn(e)?{kind:T.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:bi(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:vi.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return ci(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):pi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):mi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):hi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):yi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ge(e)?n=e.type??e.values[0]??"enum":bi(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?ni(e.expr):""}}function Jn(i){return Sn(i)}const Qn=new Set([L.TABLE,L.COLUMNS,L.COLUMN,L.INDEXES,L.INDEX]);class ti extends An{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!Cn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,ti.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Qn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case L.TABLE:return["tableName","schemaName","description"];case L.COLUMNS:case L.INDEXES:return["title"];case L.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case L.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const Zn="[DDL API]";class Rr extends Nn{constructor(n){const{source:t,tableKey:r,logger:a=wn()}=n;super();V(this,"tree");V(this,"source");V(this,"tableKey");V(this,"logger");V(this,"nodeDataBuilder");this.source=t,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!_(this.source)&&!Array.isArray(this.source))return this.tree;const n=this.prepareSource();if(!n)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,alreadyConvertedValuesCache:new Map},r=Ye(),a=Jn({source:n,tree:this.tree,supportedNodeKinds:Ci,createNodeFromRaw:(o,s,f,u,g)=>this.createNodeFromRaw(o,s,f,u,g),createNodeParams:(o,s,f)=>({value:_(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:s,container:f}),createStateForSimpleNode:(o,s,f)=>({parent:s,container:null,alreadyConvertedValuesCache:f}),createStateForComplexNode:(o,s,f)=>({parent:o.parent,container:s,alreadyConvertedValuesCache:f}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s)});return mn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Zn}createTree(){return new Tn}createNodeDataBuilder(){return new ti}prepareSource(){return new zn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:f,newDataLevel:u}=o;if(a){const m=this.createNodeMeta(t,o),D={type:te.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(f),value:null,meta:m,newDataLevel:u};return this.tree.createComplexNode(n,t,r,!1,D)}const g=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),h={type:te.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(f),value:g,meta:c,newDataLevel:u};return this.tree.createSimpleNode(n,t,r,!1,h)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return _(t)?"columnName"in t&&typeof t.columnName=="string"?t.columnName:"indexName"in t&&typeof t.indexName=="string"?En(n,t):n:n}isSimpleTreeNode(n){return n.type===te.SIMPLE}isComplexTreeNode(n){return n.type===te.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}function et(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function Ei(i,e,n){const t=n===E,r=new Set,a=[],o=f=>{const u=e==null?void 0:e[f];if(u)return u;for(const g of Object.values(e??{}))if(g&&$(g.data)&&g.data.afterValue===f)return g};for(const f of i){const u=o(f);if(!u){a.push({text:f});continue}if(r.has(u))continue;r.add(u);const{data:g}=u;if(W(g)){!t&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:u});continue}if(K(g)){t&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:u});continue}if($(g)){const c=t?typeof g.beforeValue=="string"?g.beforeValue:f:typeof g.afterValue=="string"?g.afterValue:f;a.push({text:c,diff:u})}}for(const[f,u]of Object.entries(e??{}))!u||r.has(u)||K(u.data)&&t&&(a.push({text:f,diff:u}),r.add(u));const s=f=>{const u=i.indexOf(f);return u>=0?u:i.length};return a.sort((f,u)=>s(f.text)-s(u.text))}function Mi(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Se(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===E;return W(t)?r?void 0:String(t.afterValue??i??""):K(t)?r?String(t.beforeValue??i??""):void 0:$(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function it(i,e){return(e===E?i.styles.before:i.styles.after).isContentVisible}const Li=["size","precision","scale"];function nt(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function tt(i,e){var u;const n=(u=i.value())==null?void 0:u.columnType;if(!n)return{kind:"plain",text:""};const t=nt(i);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(rt(t)){const g=Object.values(t).find(Boolean);return g?{kind:"monolithic",text:at(n,t,a,e),diff:st(g)}:{kind:"plain",text:n.label}}const o=[],s=Se($e(n),r,e);s!==void 0&&o.push({text:s,diff:r});const f=ot(n,t,e);return o.push(...f),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function rt(i){const e=Fn.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function at(i,e,n,t){const r=Se($e(i),e[n],t)??$e(i),a=[];for(const o of Li){const s=Se(ri(i,o),e[o],t);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function ot(i,e,n){const t=lt(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Se(ri(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...Mi(r,"spaced")]}function lt(i,e,n){return Li.filter(t=>{const r=e[t];return r?it(r,n):ri(i,t)!==void 0})}function $e(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function ri(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function st(i){const{data:e}=i;return $(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow}}}:W(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Green}}}:K(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function dt(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function ut(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=dt(i),r=t?Ei(n,t,e):n.map(s=>({text:s})),a=Mi(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function ft(i){if(Ai(i.diffs))return i.diffs[he]}function gt(i){const e=i.diffs[re];if(e&&(W(e.data)||K(e.data)))return e}function ct(i){return i.diffs.schemaName}function Gr(i){return i.diffs.description}function Kr(i,e){var o;const n=((o=i.value())==null?void 0:o.schemaName)??"",t=ct(i);if(!t)return n;const r=t.data,a=e===E;return W(r)?a?"":n:K(r)?a?n:"":$(r)?a?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}function ht(i){if(Ai(i.diffs))return i.diffs[he]}function pt(i){const e=i.diffs[re];if(e&&(W(e.data)||K(e.data)))return e}function Ii(i,e){return i?(e===E?i.styles.before:i.styles.after).isHeaderVisible:!0}function mt(i,e){return i?(e===E?i.styles.before:i.styles.after).isContentVisible:!0}function ji(i){const e=i.diffs[re];return e?W(e.data)||K(e.data):!1}function yt(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function bt(i){const e={};let n=!1;for(const t of qi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function Dt(i){return i.diffs.generatedExpression}function vt(i){return i.diffs.description}function kt(i){return i.diffs.description}function Fi(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function Vt(i){return i.diffs.enumValuesRowColorizingDiff}function Pi(i){return i.diffs.defaultValue}function Ht(i){return i.diffs.defaultValueRowColorizingDiff}function xt(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Pi(i);if(!t)return n;const r=t.data,a=e===E;return W(r)?a?void 0:n:K(r)?a?Ke(r.beforeValue)??n:void 0:$(r)?a?Ke(r.beforeValue)??n:Ke(r.afterValue)??n:n}function Ke(i){if(typeof i=="string")return Yn(i);if(_(i)&&"kind"in i)return Ti(i)}function Ct(i,e){var n;return Ei(((n=i.value())==null?void 0:n.enumValues)??[],Fi(i),e).map(({text:t,diff:r})=>({literal:t,diff:r}))}function Nt(i){const e={};let n=!1;for(const t of Si){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function wt(i){return i?i.highlightingMode.get(We.Default)!==He.Invisible:!1}const qt=d.createContext(!1),Le=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:r=!1}=i;return r||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(yn,{variant:n,message:t}),e]})};Le.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie=d.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});Ie.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const je=d.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:n})]})});je.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Oi="px-4",St="",At="px-4",ai="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const Tt=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:r}=i,a=d.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${Mt(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Ri=d.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:s=He.Default}=i,f=s===He.Default,u=s===He.Invisible,{textFontWeight:g,labelFontWeight:c,labelColor:h,textColor:m,label:D}=i,[k,p]=d.useState(!1),y=d.useCallback((x,C,q)=>{if(q)return null;const I=u?"":C.join(" "),b=`text-value ${r?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),j=`${b} ${I}`.trim(),z={onClick:r,...m!=null&&m.trim()?{style:{color:m}}:{}};x=k?x:Et(x);const ie=(R,J)=>{const U={...z,className:J};switch(n){case H.h1:return l.jsx("h1",{...U,children:R});case H.h2:return l.jsx("h2",{...U,children:R});case H.h3:return l.jsx("h3",{...U,children:R});case H.h4:return l.jsx("h4",{...U,children:R});case H.h5:return l.jsx("h5",{...U,children:R});case H.h6:return l.jsx("h6",{...U,children:R});case H.body1:return l.jsx("span",{...U,className:`${J} text-value-body1`.trim(),children:R});case H.body2:return l.jsx("span",{...U,className:`${J} text-value-body2`.trim(),children:R})}};return D?ie(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:h!=null&&h.trim()?{color:h}:{},children:`${D}: `}),l.jsx("span",{className:I,children:x})]}),b):ie(x,j)},[k,u,D,h,c,r,m,g,n]),S=d.useCallback(x=>{const C=[];let q=x,I=!1;if(a){const{data:b,styles:j}=a;switch(t){case E:C.push(O.highlighter(j.before.textHighlighterColor)),f&&(K(b)&&(q=ue(b.beforeValue)?b.beforeValue:q),$(b)&&(o===M.JsoProperty&&!u&&C.push(O.highlighter(fe.Yellow)),q=ue(b.beforeValue)?b.beforeValue:q),Ue(b)&&(q=ue(b.beforeKey)?b.beforeKey:q)),W(b)&&(I=!0);break;case Q:C.push(O.highlighter(j.after.textHighlighterColor)),f&&(W(b)&&(q=ue(b.afterValue)?b.afterValue:q),$(b)&&(o===M.JsoProperty&&!u&&C.push(O.highlighter(fe.Yellow)),q=ue(b.afterValue)?b.afterValue:q),Ue(b)&&(q=ue(b.afterKey)?b.afterKey:q)),K(b)&&(I=!0);break}}return[q,C,I]},[a,f,u,t,o]),[N,A,v]=S(e);return d.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(N,A,v),!v&&l.jsx(Tt,{isExpandable:_t(N),expanded:k,setExpanded:p,variant:n})]}),[y,N,A,v,k,p,n])}),Xe=5,ze=300;function _t(i){return i?i.length>ze||ki.trim(i.split(`
`)).length>Xe:!1}function Et(i){if(!i)return;if(i.length>ze)return i.slice(0,ze)+"...";const e=ki.trim(i.split(`
`));return e.length>Xe?e.slice(0,Xe).join(`
`)+"...":i}function ue(i){return typeof i=="string"}function Mt(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const Y="data-precededby",G="data-ddl-list-last-row";var P=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(P||{}),Z=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Z||{});const Lt={[Z.DdlApiProperty]:ai},It={[Z.DdlApiProperty]:["min-h-[26px]"]};function jt(i){const e=Lt[i]??Oi,n=It[i]??[];return[e,...n].join(" ")}const xe=d.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=Z.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:s,textFontWeight:f,labelColor:u,textColor:g}=i,{[Y]:c}=i,{diff:h,descendantDiffs:m,diffsSeverities:D}=i,k=se(),p=r===Z.DdlApiProperty,y=d.useMemo(()=>!a||mt(h,t),[h,a,t]),S=p&&k>0&&y,N=d.useMemo(()=>{if(!h)return[];const{data:w,styles:x}=h;if(!w)return[];const C=[];return t===E&&C.push(O.background(x.before.backgroundColor)),t===Q&&C.push(O.background(x.after.backgroundColor)),C},[h,t]),A=d.useMemo(()=>jt(r),[r]),v=l.jsx(Ri,{label:o,labelFontWeight:s,textFontWeight:f,labelColor:u,textColor:g,value:e,variant:n,layoutSide:t,diff:h});return l.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${p?"items-stretch":""} ${A} gap-2 ${N.join(" ")}`,children:[S&&l.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:k}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});xe.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const me=d.memo(i=>{const e=Te(),{diffsSeverities:n,diffsSeverityPlacement:t=Vi.DescriptionRow}=i,r=d.useMemo(()=>n==null?void 0:n[t],[n,t]),a=d.useMemo(()=>r==null?void 0:r.type,[r]),o=d.useMemo(()=>Qe(r==null?void 0:r.causedAt),[r]);switch(e){case ei:return l.jsx(Le,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(je,{left:l.jsx(xe,{...i,layoutSide:E}),right:l.jsx(xe,{...i,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(xe,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});me.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Fe="#353C4E",Ft=d.createContext(void 0);function Pt(){return d.useContext(Ft)}const Gi=i=>{const{expandable:e,expanded:n,onClick:t,level:r}=i,a=d.useContext(qt),o=r>0,s=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(bn,{short:e}),e&&n!==void 0&&l.jsx(Dn,{onToggle:s,expanded:n})]})};Gi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ot={[M.JsoProperty]:St,[M.DdlApiSection]:At,[M.DdlApiProperty]:ai},Rt={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function Gt(i){const e=Ot[i]??Oi,n=Rt[i]??[];return[e,...n].join(" ")}const Ce=d.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:f=!0,subheader:u,usage:g=M.Default,highlightingMode:c=vn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:m,descendantDiffs:D,diffsSeverities:k}=i,{[Y]:p,[G]:y}=i,S=d.useMemo(()=>{switch(g){case M.Default:return c.get(We.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return c.get(We.JsoPropertyKey)}},[c,g]),N=se(),A=Pt(),v=d.useMemo(()=>A?o===E?A.beforeLevel:A.afterLevel:N,[o,N,A]),w=d.useMemo(()=>{const b=[];if(!m)return b;const{data:j,styles:z}=m;return j&&(o===E&&b.push(O.background(z.before.backgroundColor)),o===Q&&b.push(O.background(z.after.backgroundColor))),b},[m,o]),x=d.useMemo(()=>f?l.jsx(Ri,{"data-precededby":p,value:r,variant:a,layoutSide:o,diff:m,usage:g,highlightingMode:S,onClick:t}):null,[f,p,r,a,o,m,g,S,t]),C=g===M.DdlApiProperty,q=d.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||v>0)&&l.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:v}),l.jsx(Gi,{expandable:e,expanded:n,onClick:t,level:v})]}),!C&&x]}):h?null:v>0&&l.jsx(qe,{level:v}),[s,e,n,x,h,C,v,t,p]),I=d.useMemo(()=>Gt(g),[g]);return l.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":y?!0:void 0,"data-usage":g!==M.Default?g:void 0,className:`title-row-content flex w-full ${C?"items-stretch":"items-center"} h-full ${I} gap-2 ${w.join(" ")}`,children:[q,C?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[x,u==null?void 0:u(o)]}):u==null?void 0:u(o)]})});Ce.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(i=>{const e=Te(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=i,a=d.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=d.useMemo(()=>a==null?void 0:a.type,[a]),s=d.useMemo(()=>Qe(a==null?void 0:a.causedAt),[a]);switch(e){case ei:return l.jsx(Le,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(je,{left:l.jsx(Ce,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:E}),right:l.jsx(Ce,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(Ce,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ur(i,e){return d.useMemo(()=>e(i)?ye(i):{},[e,i])}function ye(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Pe(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:f,nodeDiffsSeverities:u}=i;if(!s)return{};const g=Object.entries(s),c=D=>{const k=g.find(([p])=>p===String(D));return k==null?void 0:k[1]},h=n?c(n):void 0;return{diff:o?o(s,c):t?s[re]??h:h,...r?{descendantDiffs:f}:{},diffsSeverities:u,...a?{diffsSeverityPlacement:a}:{}}}function Kt(i){return Ci.includes(i.kind)}function Br(i){return i.childrenNodes().filter(Kt)}function Ut(i){return i.kind===L.TABLE}function Wr(i){return Ut(i)&&i instanceof de}function Bt(i){return i.kind===L.COLUMNS}function Wt(i){return Bt(i)&&i instanceof de}function Yt(i){return $t(i)&&i instanceof de}function Ki(i){return i.kind===L.COLUMN}function oi(i){return Ki(i)&&i instanceof de}function $t(i){return i.kind===L.INDEXES}function Ui(i){return i.kind===L.INDEX}function Bi(i){return Ui(i)&&i instanceof de}function Wi(i){return i.filter(Ki)}function Yi(i){return i.filter(Ui)}const Xt=d.createContext(null);function zt(){const i=d.useContext(Xt);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Jt=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});Jt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const $i=pt;function Xi(i){const e=Pe(ye(i),{resolveDiff:()=>ht(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Yr(i){const e=Pe(ye(i),{resolveDiff:()=>ft(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const $r=gt,Qt="ux-badge_ddlapi_primary-key",zi="ux-badge_ddlapi_foreign-key",Zt="ux-badge_ddlapi_unique",er="ux-badge_ddlapi_not-null",ir="ux-badge_ddlapi_generated",nr="public",Ji="Default",Qi="As",Zi="Values";function tr(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const en=d.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:r}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});en.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function rr(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",O.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[O.highlighter(e),t?O.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ae=d.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:s}=rr({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(en,{isVisible:e,value:n,blockClassName:o,valueClassName:s})});ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const Ne=d.memo(i=>{var p;const{label:e,subheader:n,layoutSide:t,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1}=i,{[Y]:s,[G]:f}=i,u=se(),g=t===E?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,h=(p=(t===E?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??g)==null?void 0:p.backgroundColor,m=d.useMemo(()=>h?[O.background(h)]:[],[h]),D=d.useMemo(()=>{const y=a==null?void 0:a.data;if(y){if(W(y))return t!==E;if(K(y))return t===E}return(g==null?void 0:g.isContentVisible)??!0},[a,g==null?void 0:g.isContentVisible,t]),k=u>0&&(!o||D);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":s,"data-ddl-list-last-row":f?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${ai} min-h-[26px] gap-2 ${m.join(" ")}`,children:[k&&l.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:u}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});Ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=d.memo(i=>{var r;const e=Te(),n=(r=i.diffsSeverities)==null?void 0:r[Vi.AdditionalInfoRow],t=d.useMemo(()=>Qe(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case ei:return l.jsx(Le,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(je,{left:l.jsx(Ne,{...i,layoutSide:E}),right:l.jsx(Ne,{...i,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(Ne,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function le(i,e){return i?(e===E?i.styles.before:i.styles.after).textHighlighterColor:void 0}function nn(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===nr?e:`${i.schemaName}.${e}`}function ar(i){return i.join(", ")}const Je=d.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=zt(),o=d.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),s=d.useMemo(()=>["ddlapi-foreign-key-link",O.highlighter(t)].filter(Boolean).join(" "),[t]),f=l.jsx(a,{href:o,className:s,children:nn(e)});return n?f:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(kn,{text:"FK",colorSchema:zi,inline:!0}),f]})});Je.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function or(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function tn(i,e){return!!i||!!e}function li(i,e){return i?e===E?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function lr(i,e,n){return tn(i,e)&&li(e,n)}function Ve(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=i;if(!tn(r,a))return null;if(!li(a,s))return or();const f=wt(a)?a==null?void 0:a.data:void 0;return l.jsx(Hi,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!f,$changes:f},dr(e,n))}function sr(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=ur(e,n),s=le(t,a);if(t&&!li(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Je,{target:n},o);const f=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Hi,{label:"FK",colorSchema:zi,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:f}),l.jsx(Je,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const be=d.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Te(),s=d.useMemo(()=>t??{},[t]),f=d.useMemo(()=>r??{},[r]),u=d.useMemo(()=>Ve({columnId:e,label:"PK",colorSchema:Qt,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,s.isPrimaryKey,o,a,n.isPrimaryKey]),g=d.useMemo(()=>lr(n.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,n.isPrimaryKey]),c=d.useMemo(()=>Ve({columnId:e,label:"unique",colorSchema:Zt,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[e,s.isUnique,o,a,n.isUnique]),h=d.useMemo(()=>g?null:Ve({columnId:e,label:"not null",colorSchema:er,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[e,s.isNotNull,g,o,a,n.isNotNull]),m=d.useMemo(()=>Ve({columnId:e,label:"generated",colorSchema:ir,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[e,s.isGenerated,o,a,n.isGenerated]),D=d.useMemo(()=>{const p=n.foreignKeyTargets??[];return p.length===0?[]:p.map(y=>sr({columnId:e,target:y,targetDiff:f[et(y)],layoutMode:o,layoutSide:a}))},[e,o,a,f,n.foreignKeyTargets]),k=d.useMemo(()=>[u,c,h,m,...D].filter(Boolean),[D,m,h,u,c]);return k.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:k})});function dr(i,e){return`${i}-${e}`}function ur(i,e){return`${i}-FK-${nn(e)}`}be.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const si=d.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});si.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function rn(i){const{appearance:e}=i;return d.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const pe=d.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=rn({appearance:t});return l.jsx(si,{isVisible:e,value:n,className:r})});pe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const di=i=>{const{node:e,additionalInfoPrecededBy:n=P.DDL_COLUMN_ROW,isLastInList:t=!1,[Y]:r}=i,a=ge(),o=e.value(),s=d.useCallback(v=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(pe,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(be,{columnId:e.id,layoutSide:v,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),f=d.useCallback(v=>{const w=o==null?void 0:o.defaultValue;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),u=d.useCallback(v=>{const w=o==null?void 0:o.generatedExpression;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),g=d.useCallback(v=>{var w;return(w=o==null?void 0:o.enumValues)!=null&&w.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((x,C)=>l.jsx(ae,{isVisible:!0,value:x},`${x}-${C}`))}):l.jsx(l.Fragment,{})},[o]),c=a===ce,h=d.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),m=!!(o!=null&&o.enumValues&&o.enumValues.length>0),D=X(o==null?void 0:o.defaultValue),k=X(o==null?void 0:o.generatedExpression),y=t&&!(c&&(m||D||k)),S=t&&m&&!D&&!k,N=t&&D&&!k,A=t&&k;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[G]:y||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:s,usage:M.DdlApiProperty}),h&&l.jsx(me,{"data-precededby":P.DDL_COLUMN_ROW,value:o.description??"",variant:H.body2,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty}),c&&m&&l.jsx(oe,{"data-precededby":n,[G]:S||void 0,label:Zi,subheader:g}),c&&D&&l.jsx(oe,{"data-precededby":m?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[G]:N||void 0,label:Ji,subheader:f}),c&&k&&l.jsx(oe,{"data-precededby":D||m?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[G]:A||void 0,label:Qi,subheader:u})]}):null};di.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Di(i,e){return i?(e===E?i.styles.before:i.styles.after).borderShadowColor:void 0}function fr(i,e){return i?(e===E?i.styles.before:i.styles.after).isFontMuted===!0:!1}function gr(i){if(oi(i))return yt(i)}function cr(i){if(oi(i))return bt(i)}function hr(i){if(Bi(i))return Nt(i)}function pr(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=rn({appearance:e});return d.useMemo(()=>[r,O.highlighter(n),O.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const Oe=d.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=i,o=pr({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(si,{isVisible:e,value:n,className:o})});Oe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function mr(i,e){return i?(e===E?i.styles.before:i.styles.after).backgroundColor:void 0}function yr(i){return i.text===", "||i.text===","}function br(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if(yr(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(Dr(r,a,e))}),n}function Dr(i,e,n){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:le(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Ae=d.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(pe,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Oe,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:le(e.diff,n),backgroundColor:mr(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:br(e.segments,n)})});Ae.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function vr(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function kr(i,e,n){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:le(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const an=d.memo(i=>{const{node:e,layoutSide:n}=i,t=tt(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(Ae,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=vr(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>kr(o,s,n)),a.length>0&&l.jsx(Ae,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});an.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const on=i=>{const{node:e,additionalInfoPrecededBy:n=P.DDL_COLUMN_ROW,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[Y]:a}=i,o=ge(),s=e.value(),f=d.useMemo(()=>$i(e),[e]),u=d.useMemo(()=>Xi(e),[e]),g=d.useMemo(()=>cr(e),[e]),c=d.useMemo(()=>gr(e),[e]),h=d.useMemo(()=>vt(e),[e]),m=d.useMemo(()=>Dt(e),[e]),D=d.useMemo(()=>Fi(e),[e]),k=d.useMemo(()=>Vt(e),[e]),p=d.useMemo(()=>Pi(e),[e]),y=d.useMemo(()=>Ht(e),[e]),S=d.useCallback(F=>s?Ii(f,F)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(an,{node:e,layoutSide:F}),l.jsx(be,{columnId:e.id,layoutSide:F,value:s,flagDiffs:g,foreignKeyTargetDiffs:c})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[g,c,e,f,s]),N=d.useCallback(F=>{const ne=xt(e,F);return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:le(p,F),borderShadowColor:Di(p,F)}):l.jsx(l.Fragment,{})},[p,e]),A=d.useCallback(F=>{const ne=(()=>{const B=m==null?void 0:m.data;return B?F===E?K(B)||$(B)?B.beforeValue:void 0:W(B)||$(B)?B.afterValue:void 0:s==null?void 0:s.generatedExpression})();return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:le(m,F)}):l.jsx(l.Fragment,{})},[m,s]),v=d.useCallback(F=>{const ne=Ct(e,F);return ne.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:ne.map((B,un)=>l.jsx(ae,{isVisible:!0,value:B.literal,textHighlighterColor:le(B.diff,F),borderShadowColor:Di(B.diff,F),isFontMuted:fr(B.diff,F)},`${B.literal}-${un}`))})},[e]),w=o===ce,x=!!f,C=w&&(!!(s!=null&&s.description)||!!h),q=!!(s!=null&&s.enumValues&&s.enumValues.length>0||D),I=!!(X(s==null?void 0:s.defaultValue)||p||y),b=X(s==null?void 0:s.generatedExpression)||!!m,j=w&&(q||I||b),z=t&&!C&&!j,ie=t&&C&&!j,R=t&&q&&!I&&!b,J=t&&I&&!b,U=t&&b;return s?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[G]:z||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:S,usage:M.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...u}),C&&l.jsx(me,{"data-precededby":P.DDL_COLUMN_ROW,[G]:ie||void 0,value:s.description??"",variant:H.body2,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty,diff:h,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),w&&q&&l.jsx(oe,{"data-precededby":n,[G]:R||void 0,label:Zi,subheader:v,colorizingDiff:k,diffsSeverities:D?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),w&&!x&&I&&l.jsx(oe,{"data-precededby":q?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[G]:J||void 0,label:Ji,subheader:N,colorizingDiff:y,diffsSeverities:p||y?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),w&&b&&l.jsx(oe,{"data-precededby":I||q?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[G]:U||void 0,label:Qi,subheader:A,diff:m,colorizingDiff:e.diffs[re],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};on.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function ln(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=n?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:P.DDL_COLUMN_ROW,s=n?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:P.DDL_COLUMN_ROW,f={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return n=e&&tr(t.value()),f})}const Vr=i=>{const{node:e,[Y]:n}=i;return Wt(e)?l.jsx(xr,{"data-precededby":n,node:e}):l.jsx(Hr,{"data-precededby":n,node:e})},Hr=i=>{const{node:e,[Y]:n}=i,t=se(),r=ge(),a=e.value(),o=Wi(e.childrenNodes()),s=r===ce,f=d.useMemo(()=>ln(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection}),l.jsx(_e.Provider,{value:t+1,children:f.map(({columnNode:u,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:h})=>l.jsx(di,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:h,node:u},u.id))})]})},xr=i=>{const{node:e,[Y]:n}=i,t=se(),r=ge(),a=e.value(),o=Wi(e.childrenNodes()),s=r===ce,f=d.useMemo(()=>Pe(ye(e)),[e]),u=d.useMemo(()=>ln(o,s),[o,s]),g=d.useMemo(()=>ji(e),[e]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection,...f}),l.jsx(_e.Provider,{value:t+1,children:u.map(({columnNode:c,titlePrecededBy:h,additionalInfoPrecededBy:m,isLastInList:D})=>oi(c)?l.jsx(on,{"data-precededby":h,additionalInfoPrecededBy:m,isLastInList:D,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):l.jsx(di,{"data-precededby":h,additionalInfoPrecededBy:m,isLastInList:D,node:c},c.id))})]})};Vr.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};const ui=i=>{const{node:e,isLastInList:n=!1,[Y]:t}=i,r=ge(),a=e.value(),o=(a==null?void 0:a.indexName)??"",s=d.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const h=ar(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(pe,{isVisible:!0,value:`(${h})`,appearance:"text"}),l.jsx(be,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),f=d.useMemo(()=>r===ce&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),u=n,g=!!a&&(a.partNames.length>0||a.isUnique);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[G]:u||void 0,value:o,expandable:!1,expanded:!0,variant:H.body2,subheader:g?s:void 0,usage:M.DdlApiProperty}),f&&l.jsx(me,{"data-precededby":P.DDL_INDEX_ROW,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty})]}):null};ui.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const sn=i=>{const{node:e,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:t=!1,[Y]:r}=i,a=ge(),o=e.value(),s=d.useMemo(()=>$i(e),[e]),f=d.useMemo(()=>Xi(e),[e]),u=d.useMemo(()=>hr(e),[e]),g=d.useMemo(()=>kt(e),[e]),c=(o==null?void 0:o.indexName)??"",h=d.useCallback(y=>{const S=ut(e,y);return l.jsx(Ae,{layoutSide:y,display:S})},[e]),m=d.useCallback(y=>{if(!o)return l.jsx(l.Fragment,{});if(!Ii(s,y))return l.jsx(l.Fragment,{});const S=o.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[S&&h(y),l.jsx(be,{columnId:e.id,layoutSide:y,value:o,flagDiffs:u})]})},[u,e.id,s,h,o]),D=d.useMemo(()=>a===ce&&(!!(o!=null&&o.description)||!!g),[g,a,o==null?void 0:o.description]),k=n&&!D,p=!!o&&(o.partNames.length>0||o.isUnique||!!(u!=null&&u.isUnique));return o?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[G]:k||void 0,value:c,expandable:!1,expanded:!0,variant:H.body2,subheader:p?m:void 0,usage:M.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:t,...f}),D&&l.jsx(me,{"data-precededby":P.DDL_INDEX_ROW,[G]:n||void 0,value:o.description??"",variant:H.body1,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty,diff:g,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:t})]}):null};sn.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function dn(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:P.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Cr=i=>{const{node:e,[Y]:n}=i;return Yt(e)?l.jsx(wr,{"data-precededby":n,node:e}):l.jsx(Nr,{"data-precededby":n,node:e})},Nr=i=>{const{node:e,[Y]:n}=i,t=se(),r=e.value(),a=Yi(e.childrenNodes()),o=d.useMemo(()=>dn(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection}),l.jsx(_e.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:f,isLastInList:u})=>l.jsx(ui,{"data-precededby":f,isLastInList:u,node:s},s.id))})]})},wr=i=>{const{node:e,[Y]:n}=i,t=se(),r=e.value(),a=Yi(e.childrenNodes()),o=d.useMemo(()=>Pe(ye(e)),[e]),s=d.useMemo(()=>dn(a),[a]),f=d.useMemo(()=>ji(e),[e]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection,...o}),l.jsx(_e.Provider,{value:t+1,children:s.map(({indexNode:u,titlePrecededBy:g,isLastInList:c})=>Bi(u)?l.jsx(sn,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:f,node:u},u.id):l.jsx(ui,{"data-precededby":g,isLastInList:c,node:u},u.id))})]})};Cr.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Re as $,Y as A,Pr as B,Vr as C,nr as D,he as E,Ir as F,jr as G,Fn as H,Cr as I,Or as J,Fr as K,Ci as L,le as M,Le as N,Ie as O,P,je as Q,$r as R,de as S,ee as T,Yr as U,ct as V,Gr as W,Oi as X,Kr as Y,Wr as Z,Vn as _,$t as a,Hn as a0,Sn as a1,An as a2,Cn as a3,Nn as a4,xn as a5,te as a6,_r as a7,xi as a8,Er as a9,Ri as aa,qt as ab,Ft as ac,Pt as ad,ye as ae,Pe as af,M as ag,Ur as ah,H as b,me as c,Fe as d,wn as e,Rr as f,Br as g,Ut as h,Bt as i,Xt as j,Jt as k,zn as l,_ as m,Ge as n,et as o,Yn as p,Ti as q,Lr as r,wi as s,Mr as t,ti as u,Me as v,L as w,qi as x,Si as y,Pn as z};
