var un=Object.defineProperty;var fn=(i,e,n)=>e in i?un(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var V=(i,e,n)=>(fn(i,typeof e!="symbol"?e+"":e,n),n);import{t as U,v as O,x as Ue,w as B,Z as Be,_ as fi,$ as we,N as re,a0 as vi,P as _,a1 as gn,a2 as cn,K as De,Q as hn,M as ve,a3 as pn,U as S,H as fe,a4 as We,a5 as He,a6 as mn,W as Q,V as R,a7 as ki,a8 as se,a9 as qe,X as Te,R as Vi,Y as Qe,k as Ze,S as ei,aa as yn,ab as bn,y as Dn,ac as X,ad as vn,ae as Hi,u as ge,h as ce,f as _e}from"./DiffBadge-2df369cb.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const te={SIMPLE:"simple",COMPLEX:"complex"};class Ee{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=te.SIMPLE,value:s=null,parent:g=null,container:f=null,newDataLevel:d=!0,meta:c}=a;this.type=o,this.parent=g,this.container=f,this.newDataLevel=d,this._value=s,this._meta=c}createCycledClone(e,n,t){const r=new Ee(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===te.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class ii extends Ee{constructor(n="#",t="",r,a,o){super(n,t,r,a,o);V(this,"type");this.id=n,this.key=t,this.kind=r,this.type=o.type}createCycledClone(n,t,r){const a=new ii(n,t,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a.setChildrenNodes(this._childrenNodes),a.setNestedNodes(this._nestedNodes),a}value(n){const t=this.findNestedNode(n,!0);return(t==null?void 0:t.value())??null}childrenNodes(n){const t=this.findNestedNode(n,!0);return(t==null?void 0:t.childrenNodes())??[]}}class kn{constructor(){V(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,n,t,r,a){const o=new Ee(e,n,t,r,a);return this.nodes.set(e,o),o}createComplexNode(e,n,t,r,a){const o=new ii(e,n,t,r,a);return this.nodes.set(e,o),o}createCycledClone(e,n,t,r){const a=e.createCycledClone(n,t,r);return this.nodes.set(n,a),a}}const Vn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Hn=Object.values(Vn);new Set(Hn);class Me{aggregateByDescendantDiffs(e,n,t,r){}static isDiffsRecord(e){if(!E(e))return!1;for(const n of Object.values(e))if(!Me.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return E(n)&&(U(n)||O(n)||Ue(n)||B(n))}}function E(i){return xi(i)&&!Array.isArray(i)}function xi(i){return typeof i=="object"&&i!==null}function xn(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Re(i){return Array.isArray(i)}function _r(i,e,n){let t=i,r=!1;for(const a of e){if(!E(t)&&!Re(t))return;if(r){let s;xi(t)&&(s=t[a]),!s&&Re(t)&&n&&(s=t.find(g=>E(g)&&g[n]===a)),t=s,r=!1;continue}t=t[a],Re(t)&&(r=!0)}return t}function Er(i,e){return Object.keys(i).find(n=>i[n]===e)}function Mr(i){if(Me.isDiffsRecord(i))return i}class Cn{constructor(){V(this,"tree",null)}pick(e,n){if(!E(e))return null;const t={};for(const r of n){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?t[a]=[...o]:E(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const ke=()=>{},Nn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ke,info:ke,warn:ke,error:ke};function wn(i){return i==null||!E(i)&&!Be(i)}function qn(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:g,isComplexNode:f,resolveNodeKey:d,isDisallowedValue:c=wn,shouldStopAfterNodeCreation:h}=i;return[({value:p,state:y,key:A,path:N})=>{if(typeof A=="symbol")return;if(!E(p)&&!Be(p))return{value:p};const{alreadyConvertedValuesCache:T,parent:v,container:w}=y,x=T.get(p);if(!x||!g(x)&&!f(x))return{value:p};if(!v||!g(v))return{value:p};const C="#"+fi(N),q=d(A,p),I=n.createCycledClone(x,C,q,v);return w?w.addNestedNode(I):v&&v.addChildNode(I),{done:!0}},({key:p,value:y,path:A,state:N,rules:T})=>!T||!Array.isArray(T.transformers)?void 0:{value:T.transformers.reduce((x,C)=>C(p,x,e,A,N),y)},({key:p,value:y,path:A,rules:N,state:T})=>{if(!N)return{done:!0};if(typeof p=="symbol")return{done:!0};if(c(y))return{done:!0};if(!N.kind||!t.includes(N.kind))return;const{parent:v,container:w}=T,x="#"+fi(A),C=d(p,y),{kind:q,complex:I=!1}=N,b=a(y,v,w),j=r(x,C,q,I,b);if(!j)return;w?w.addNestedNode(j):v&&v.addChildNode(j);let z=y;if(h!=null&&h(j,y)){const J=v?v.descendantDiffs:void 0;if(!J||!(p in J))return{done:!0};const W=J[p];if(!W)return{done:!0};const{data:F}=W;B(F)&&(z=F.beforeValue)}const ie=new Map(T.alreadyConvertedValuesCache);(E(y)||Be(y))&&ie.set(y,j);let G;return g(j)?G=o(T,j,ie):G=s(T,j,ie),{value:z,state:G}}]}class Sn{}class de{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);V(this,"_diffs",{});V(this,"_diffsSummary",new Set);V(this,"_descendantDiffs",{});V(this,"_descendantDiffsSummary",new Set);V(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=te.SIMPLE,value:s=null,parent:g=null,container:f=null,newDataLevel:d=!0,meta:c}=a;this.type=o,this.parent=g,this.container=f,this.newDataLevel=d,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new de(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===te.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}class An extends kn{constructor(){super()}}const L={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},Ci=Object.values(L),Ni="<unnamed>";function Tn(i){return i??Ni}function wi(i){return i!==Ni}function _n(i,e){return e.indexName&&wi(e.indexName)?e.indexName:i}function Lr(i,e,n){return n||(e!=null&&e.indexName&&wi(e.indexName)?e.indexName:String(i))}function Ye(i=L.TABLE){return{"/columns":{"/items":{"/*":()=>Ye(L.COLUMN)},kind:L.COLUMNS},"/indexes":{"/items":{"/*":()=>Ye(L.INDEX)},kind:L.INDEXES},kind:i}}const gi={Identity:"identity",Expression:"expression"};function En(i){return i.kind===we.Literal&&typeof i.value=="string"}function Mn(i){return i.kind===we.RawExpr&&typeof i.expr=="string"}function Ln(i){return E(i)&&typeof i.expr=="string"}function In(i){return E(i)&&typeof i.value=="string"}const he="titleRow",jn=["typeName","size","precision","scale","label"],Ir={ToEnum:"to-enum",FromEnum:"from-enum"},jr={Lost:"lost",Gained:"gained"},qi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],Si=["isUnique"],Fr=[re,he,"tableName","schemaName","description"],Pr=[re,he,"columnName","description","generatedExpression",...qi],Or=[re,he,"indexName","description",...Si];function Fn(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!E(n)||!("before"in n)||!("after"in n)?!1:Me.isDiff(e)}function Ai(i){return Fn(i[he])}function Pn(i){return E(i)&&i.kind===vi.Domain&&typeof i.type=="string"}function On(i){return i.kind===_.BoolType&&typeof i.type=="string"}function Rn(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function ci(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function hi(i){return i.kind===_.FloatType&&typeof i.type=="string"}function pi(i){return i.kind===_.StringType&&typeof i.type=="string"}function mi(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function yi(i){return i.kind===_.TimeType&&typeof i.type=="string"}function Gn(i){return i.kind===_.JSONType&&typeof i.type=="string"}function Kn(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function Un(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function Ge(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function Bn(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function bi(i){return typeof i.type=="string"}function ni(i){switch(i.kind){case we.Literal:return En(i)?i.value:i.kind;case we.RawExpr:return Mn(i)?i.expr:i.kind;case gn.NamedDefault:try{return ni(cn(i))}catch{return i.kind}default:return Ln(i)?i.expr:In(i)?i.value:i.kind}}function Ti(i){return _i(ni(i))}function Wn(i){return _i(i)}function _i(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Yn="Columns",$n="Indexes";class Xn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=De(n.attrs,ve.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:Yn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:$n,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var p,y,A;const a=De(t.attrs,ve.Comment),o=(p=t.attrs)==null?void 0:p.find(N=>N.kind===hn.Identity),s=De(t.attrs,ve.GeneratedExpr),g=o!==void 0||s!==void 0,d=this.findForeignKeysForColumn(n,t).map(N=>this.buildForeignKeyTarget(e,N,t,r)).filter(N=>N!==void 0),c=d.length>0,h=this.formatColumnType(t.type),m=(y=t.type)==null?void 0:y.type,D=m&&Ge(m)?m.values:void 0,k=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:h,...D?{enumValues:D}:{},isPrimaryKey:k,isForeignKey:c,...d.length>0?{foreignKeyTargets:d}:{},isGenerated:g,...o?{generatedBy:gi.Identity}:{},...s&&!o?{generatedBy:gi.Expression}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!k&&((A=t.type)==null?void 0:A.null)===!1,...t.default!==void 0?{defaultValue:Ti(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=De(e.attrs,ve.Comment);return{indexName:Tn(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isSingleColumnUniqueIndexForColumn(e,n){var t,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(t=(e.parts??[])[0])==null?void 0:t.column)==null?void 0:r.name)===n}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>this.isSingleColumnUniqueIndexForColumn(t,n.name))}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var f,d;const a=((f=n.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,s=(d=n.refColumns)==null?void 0:d[a];if(!o||!s)return;const g=this.resolveForeignKeyTargetSchemaName(e,o,r);if(g)return{schemaName:g,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Pn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return On(e)?{kind:_.BoolType,typeName:e.type,label:n}:Rn(e)?{kind:_.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ci(e)?{kind:_.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:hi(e)?{kind:_.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:pi(e)?{kind:_.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:mi(e)?{kind:_.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:yi(e)?{kind:_.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Gn(e)?{kind:_.JSONType,typeName:e.type,label:n}:Kn(e)?{kind:_.SpatialType,typeName:e.type,label:n}:Un(e)?{kind:_.UUIDType,typeName:e.type,label:n}:Ge(e)?{kind:_.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Bn(e)?{kind:_.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:bi(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:vi.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return ci(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):pi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):mi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):hi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):yi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ge(e)?n=e.type??e.values[0]??"enum":bi(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?ni(e.expr):""}}function zn(i){return qn(i)}const Jn=new Set([L.TABLE,L.COLUMNS,L.COLUMN,L.INDEXES,L.INDEX]);class ti extends Sn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!xn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,ti.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Jn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case L.TABLE:return["tableName","schemaName","description"];case L.COLUMNS:case L.INDEXES:return["title"];case L.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case L.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const Qn="[DDL API]";class Rr extends Cn{constructor(n){const{source:t,tableKey:r,logger:a=Nn()}=n;super();V(this,"tree");V(this,"source");V(this,"tableKey");V(this,"logger");V(this,"nodeDataBuilder");this.source=t,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!E(this.source)&&!Array.isArray(this.source))return this.tree;const n=this.prepareSource();if(!n)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,alreadyConvertedValuesCache:new Map},r=Ye(),a=zn({source:n,tree:this.tree,supportedNodeKinds:Ci,createNodeFromRaw:(o,s,g,f,d)=>this.createNodeFromRaw(o,s,g,f,d),createNodeParams:(o,s,g)=>({value:E(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:s,container:g}),createStateForSimpleNode:(o,s,g)=>({parent:s,container:null,alreadyConvertedValuesCache:g}),createStateForComplexNode:(o,s,g)=>({parent:o.parent,container:s,alreadyConvertedValuesCache:g}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s)});return pn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Qn}createTree(){return new An}createNodeDataBuilder(){return new ti}prepareSource(){return new Xn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:g,newDataLevel:f}=o;if(a){const m=this.createNodeMeta(t,o),D={type:te.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(g),value:null,meta:m,newDataLevel:f};return this.tree.createComplexNode(n,t,r,!1,D)}const d=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),h={type:te.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(g),value:d,meta:c,newDataLevel:f};return this.tree.createSimpleNode(n,t,r,!1,h)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return E(t)?"columnName"in t&&typeof t.columnName=="string"?t.columnName:"indexName"in t&&typeof t.indexName=="string"?_n(n,t):n:n}isSimpleTreeNode(n){return n.type===te.SIMPLE}isComplexTreeNode(n){return n.type===te.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}function Zn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function et(i,e,n){const t=n===S,r=new Set,a=[],o=g=>{const f=e==null?void 0:e[g];if(f)return f;for(const d of Object.values(e??{}))if(d&&B(d.data)&&d.data.afterValue===g)return d};for(const g of i){const f=o(g);if(!f){a.push({text:g});continue}if(r.has(f))continue;r.add(f);const{data:d}=f;if(U(d)){!t&&typeof d.afterValue=="string"&&a.push({text:d.afterValue,diff:f});continue}if(O(d)){t&&typeof d.beforeValue=="string"&&a.push({text:d.beforeValue,diff:f});continue}if(B(d)){const c=t?typeof d.beforeValue=="string"?d.beforeValue:g:typeof d.afterValue=="string"?d.afterValue:g;a.push({text:c,diff:f})}}for(const[g,f]of Object.entries(e??{}))!f||r.has(f)||O(f.data)&&t&&(a.push({text:g,diff:f}),r.add(f));const s=g=>{const f=i.indexOf(g);return f>=0?f:i.length};return a.sort((g,f)=>s(g.text)-s(f.text))}function Ei(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Se(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===S;return U(t)?r?void 0:String(t.afterValue??i??""):O(t)?r?String(t.beforeValue??i??""):void 0:B(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function it(i,e){return(e===S?i.styles.before:i.styles.after).isContentVisible}const Mi=["size","precision","scale"];function nt(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function tt(i,e){var f;const n=(f=i.value())==null?void 0:f.columnType;if(!n)return{kind:"plain",text:""};const t=nt(i);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(rt(t)){const d=Object.values(t).find(Boolean);return d?{kind:"monolithic",text:at(n,t,a,e),diff:st(d)}:{kind:"plain",text:n.label}}const o=[],s=Se($e(n),r,e);s!==void 0&&o.push({text:s,diff:r});const g=ot(n,t,e);return o.push(...g),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function rt(i){const e=jn.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function at(i,e,n,t){const r=Se($e(i),e[n],t)??$e(i),a=[];for(const o of Mi){const s=Se(ri(i,o),e[o],t);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function ot(i,e,n){const t=lt(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Se(ri(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...Ei(r,"spaced")]}function lt(i,e,n){return Mi.filter(t=>{const r=e[t];return r?it(r,n):ri(i,t)!==void 0})}function $e(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function ri(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function st(i){const{data:e}=i;return B(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow}}}:U(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Green}}}:O(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function dt(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function ut(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=dt(i),r=t?et(n,t,e):n.map(s=>({text:s})),a=Ei(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function ft(i){if(Ai(i.diffs))return i.diffs[he]}function gt(i){const e=i.diffs[re];if(e&&(U(e.data)||O(e.data)))return e}function ct(i){return i.diffs.schemaName}function Gr(i){return i.diffs.description}function Kr(i,e){var o;const n=((o=i.value())==null?void 0:o.schemaName)??"",t=ct(i);if(!t)return n;const r=t.data,a=e===S;return U(r)?a?"":n:O(r)?a?n:"":B(r)?a?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}function ht(i){if(Ai(i.diffs))return i.diffs[he]}function pt(i){const e=i.diffs[re];if(e&&(U(e.data)||O(e.data)))return e}function Li(i,e){return i?(e===S?i.styles.before:i.styles.after).isHeaderVisible:!0}function mt(i,e){return i?(e===S?i.styles.before:i.styles.after).isContentVisible:!0}function Ii(i){const e=i.diffs[re];return e?U(e.data)||O(e.data):!1}function yt(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function bt(i){const e={};let n=!1;for(const t of qi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function Dt(i){return i.diffs.generatedExpression}function vt(i){return i.diffs.description}function kt(i){return i.diffs.description}function ji(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function Vt(i){return i.diffs.enumValuesRowColorizingDiff}function Fi(i){return i.diffs.defaultValue}function Ht(i){return i.diffs.defaultValueRowColorizingDiff}function xt(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Fi(i);if(!t)return n;const r=t.data,a=e===S;return U(r)?a?void 0:n:O(r)?a?Ke(r.beforeValue)??n:void 0:B(r)?a?Ke(r.beforeValue)??n:Ke(r.afterValue)??n:n}function Ke(i){if(typeof i=="string")return Wn(i);if(E(i)&&"kind"in i)return Ti(i)}function Ct(i,e){var f;const n=((f=i.value())==null?void 0:f.enumValues)??[],t=ji(i),r=e===S,a=new Set,o=[],s=d=>{const c=t==null?void 0:t[d];if(c)return c;for(const h of Object.values(t??{}))if(h&&B(h.data)&&h.data.afterValue===d)return h};for(const d of n){const c=s(d);if(!c){o.push({literal:d});continue}if(a.has(c))continue;a.add(c);const{data:h}=c;if(U(h)){!r&&typeof h.afterValue=="string"&&o.push({literal:h.afterValue,diff:c});continue}if(O(h)){r&&typeof h.beforeValue=="string"&&o.push({literal:h.beforeValue,diff:c});continue}if(B(h)){const m=r?typeof h.beforeValue=="string"?h.beforeValue:d:typeof h.afterValue=="string"?h.afterValue:d;o.push({literal:m,diff:c})}}for(const[d,c]of Object.entries(t??{}))!c||a.has(c)||O(c.data)&&r&&(o.push({literal:d,diff:c}),a.add(c));const g=d=>{const c=n.indexOf(d);return c>=0?c:n.length};return o.sort((d,c)=>g(d.literal)-g(c.literal))}function Nt(i){const e={};let n=!1;for(const t of Si){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function wt(i){return i?i.highlightingMode.get(We.Default)!==He.Invisible:!1}const qt=u.createContext(!1),Le=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:r=!1}=i;return r||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(mn,{variant:n,message:t}),e]})};Le.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie=u.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});Ie.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const je=u.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:n})]})});je.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Pi="px-4",St="",At="px-4",ai="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const Tt=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:r}=i,a=u.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${Mt(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Oi=u.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:s=He.Default}=i,g=s===He.Default,f=s===He.Invisible,{textFontWeight:d,labelFontWeight:c,labelColor:h,textColor:m,label:D}=i,[k,p]=u.useState(!1),y=u.useCallback((x,C,q)=>{if(q)return null;const I=f?"":C.join(" "),b=`text-value ${r?"hover:cursor-pointer":""} ${d?`font-${d}`:""}`.trim(),j=`${b} ${I}`.trim(),z={onClick:r,...m!=null&&m.trim()?{style:{color:m}}:{}};x=k?x:Et(x);const ie=(G,J)=>{const W={...z,className:J};switch(n){case H.h1:return l.jsx("h1",{...W,children:G});case H.h2:return l.jsx("h2",{...W,children:G});case H.h3:return l.jsx("h3",{...W,children:G});case H.h4:return l.jsx("h4",{...W,children:G});case H.h5:return l.jsx("h5",{...W,children:G});case H.h6:return l.jsx("h6",{...W,children:G});case H.body1:return l.jsx("span",{...W,className:`${J} text-value-body1`.trim(),children:G});case H.body2:return l.jsx("span",{...W,className:`${J} text-value-body2`.trim(),children:G})}};return D?ie(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:h!=null&&h.trim()?{color:h}:{},children:`${D}: `}),l.jsx("span",{className:I,children:x})]}),b):ie(x,j)},[k,f,D,h,c,r,m,d,n]),A=u.useCallback(x=>{const C=[];let q=x,I=!1;if(a){const{data:b,styles:j}=a;switch(t){case S:C.push(R.highlighter(j.before.textHighlighterColor)),g&&(O(b)&&(q=ue(b.beforeValue)?b.beforeValue:q),B(b)&&(o===M.JsoProperty&&!f&&C.push(R.highlighter(fe.Yellow)),q=ue(b.beforeValue)?b.beforeValue:q),Ue(b)&&(q=ue(b.beforeKey)?b.beforeKey:q)),U(b)&&(I=!0);break;case Q:C.push(R.highlighter(j.after.textHighlighterColor)),g&&(U(b)&&(q=ue(b.afterValue)?b.afterValue:q),B(b)&&(o===M.JsoProperty&&!f&&C.push(R.highlighter(fe.Yellow)),q=ue(b.afterValue)?b.afterValue:q),Ue(b)&&(q=ue(b.afterKey)?b.afterKey:q)),O(b)&&(I=!0);break}}return[q,C,I]},[a,g,f,t,o]),[N,T,v]=A(e);return u.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(N,T,v),!v&&l.jsx(Tt,{isExpandable:_t(N),expanded:k,setExpanded:p,variant:n})]}),[y,N,T,v,k,p,n])}),Xe=5,ze=300;function _t(i){return i?i.length>ze||ki.trim(i.split(`
`)).length>Xe:!1}function Et(i){if(!i)return;if(i.length>ze)return i.slice(0,ze)+"...";const e=ki.trim(i.split(`
`));return e.length>Xe?e.slice(0,Xe).join(`
`)+"...":i}function ue(i){return typeof i=="string"}function Mt(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const $="data-precededby",K="data-ddl-list-last-row";var P=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(P||{}),Z=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Z||{});const Lt={[Z.DdlApiProperty]:ai},It={[Z.DdlApiProperty]:["min-h-[26px]"]};function jt(i){const e=Lt[i]??Pi,n=It[i]??[];return[e,...n].join(" ")}const xe=u.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=Z.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:s,textFontWeight:g,labelColor:f,textColor:d}=i,{[$]:c}=i,{diff:h,descendantDiffs:m,diffsSeverities:D}=i,k=se(),p=r===Z.DdlApiProperty,y=u.useMemo(()=>!a||mt(h,t),[h,a,t]),A=p&&k>0&&y,N=u.useMemo(()=>{if(!h)return[];const{data:w,styles:x}=h;if(!w)return[];const C=[];return t===S&&C.push(R.background(x.before.backgroundColor)),t===Q&&C.push(R.background(x.after.backgroundColor)),C},[h,t]),T=u.useMemo(()=>jt(r),[r]),v=l.jsx(Oi,{label:o,labelFontWeight:s,textFontWeight:g,labelColor:f,textColor:d,value:e,variant:n,layoutSide:t,diff:h});return l.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${p?"items-stretch":""} ${T} gap-2 ${N.join(" ")}`,children:[A&&l.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:k}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});xe.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const me=u.memo(i=>{const e=Te(),{diffsSeverities:n,diffsSeverityPlacement:t=Vi.DescriptionRow}=i,r=u.useMemo(()=>n==null?void 0:n[t],[n,t]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),o=u.useMemo(()=>Qe(r==null?void 0:r.causedAt),[r]);switch(e){case ei:return l.jsx(Le,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(je,{left:l.jsx(xe,{...i,layoutSide:S}),right:l.jsx(xe,{...i,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(xe,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});me.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Fe="#353C4E",Ft=u.createContext(void 0);function Pt(){return u.useContext(Ft)}const Ri=i=>{const{expandable:e,expanded:n,onClick:t,level:r}=i,a=u.useContext(qt),o=r>0,s=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(yn,{short:e}),e&&n!==void 0&&l.jsx(bn,{onToggle:s,expanded:n})]})};Ri.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Ot={[M.JsoProperty]:St,[M.DdlApiSection]:At,[M.DdlApiProperty]:ai},Rt={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function Gt(i){const e=Ot[i]??Pi,n=Rt[i]??[];return[e,...n].join(" ")}const Ce=u.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:g=!0,subheader:f,usage:d=M.Default,highlightingMode:c=Dn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:m,descendantDiffs:D,diffsSeverities:k}=i,{[$]:p,[K]:y}=i,A=u.useMemo(()=>{switch(d){case M.Default:return c.get(We.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return c.get(We.JsoPropertyKey)}},[c,d]),N=se(),T=Pt(),v=u.useMemo(()=>T?o===S?T.beforeLevel:T.afterLevel:N,[o,N,T]),w=u.useMemo(()=>{const b=[];if(!m)return b;const{data:j,styles:z}=m;return j&&(o===S&&b.push(R.background(z.before.backgroundColor)),o===Q&&b.push(R.background(z.after.backgroundColor))),b},[m,o]),x=u.useMemo(()=>g?l.jsx(Oi,{"data-precededby":p,value:r,variant:a,layoutSide:o,diff:m,usage:d,highlightingMode:A,onClick:t}):null,[g,p,r,a,o,m,d,A,t]),C=d===M.DdlApiProperty,q=u.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||v>0)&&l.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:v}),l.jsx(Ri,{expandable:e,expanded:n,onClick:t,level:v})]}),!C&&x]}):h?null:v>0&&l.jsx(qe,{level:v}),[s,e,n,x,h,C,v,t,p]),I=u.useMemo(()=>Gt(d),[d]);return l.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":y?!0:void 0,"data-usage":d!==M.Default?d:void 0,className:`title-row-content flex w-full ${C?"items-stretch":"items-center"} h-full ${I} gap-2 ${w.join(" ")}`,children:[q,C?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[x,f==null?void 0:f(o)]}):f==null?void 0:f(o)]})});Ce.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=u.memo(i=>{const e=Te(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=i,a=u.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=u.useMemo(()=>a==null?void 0:a.type,[a]),s=u.useMemo(()=>Qe(a==null?void 0:a.causedAt),[a]);switch(e){case ei:return l.jsx(Le,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(je,{left:l.jsx(Ce,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:S}),right:l.jsx(Ce,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(Ce,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ur(i,e){return u.useMemo(()=>e(i)?ye(i):{},[e,i])}function ye(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Pe(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:g,nodeDiffsSeverities:f}=i;if(!s)return{};const d=Object.entries(s),c=D=>{const k=d.find(([p])=>p===String(D));return k==null?void 0:k[1]},h=n?c(n):void 0;return{diff:o?o(s,c):t?s[re]??h:h,...r?{descendantDiffs:g}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function Kt(i){return Ci.includes(i.kind)}function Br(i){return i.childrenNodes().filter(Kt)}function Ut(i){return i.kind===L.TABLE}function Wr(i){return Ut(i)&&i instanceof de}function Bt(i){return i.kind===L.COLUMNS}function Wt(i){return Bt(i)&&i instanceof de}function Yt(i){return $t(i)&&i instanceof de}function Gi(i){return i.kind===L.COLUMN}function oi(i){return Gi(i)&&i instanceof de}function $t(i){return i.kind===L.INDEXES}function Ki(i){return i.kind===L.INDEX}function Ui(i){return Ki(i)&&i instanceof de}function Bi(i){return i.filter(Gi)}function Wi(i){return i.filter(Ki)}const Xt=u.createContext(null);function zt(){const i=u.useContext(Xt);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Jt=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});Jt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const Yi=pt;function $i(i){const e=Pe(ye(i),{resolveDiff:()=>ht(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Yr(i){const e=Pe(ye(i),{resolveDiff:()=>ft(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const $r=gt,Qt="ux-badge_ddlapi_primary-key",Xi="ux-badge_ddlapi_foreign-key",Zt="ux-badge_ddlapi_unique",er="ux-badge_ddlapi_not-null",ir="ux-badge_ddlapi_generated",nr="public",zi="Default",Ji="As",Qi="Values";function tr(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Zi=u.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:r}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});Zi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function rr(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",R.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[R.highlighter(e),t?R.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ae=u.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:s}=rr({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(Zi,{isVisible:e,value:n,blockClassName:o,valueClassName:s})});ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const Ne=u.memo(i=>{var p;const{label:e,subheader:n,layoutSide:t,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1}=i,{[$]:s,[K]:g}=i,f=se(),d=t===S?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,h=(p=(t===S?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??d)==null?void 0:p.backgroundColor,m=u.useMemo(()=>h?[R.background(h)]:[],[h]),D=u.useMemo(()=>{const y=a==null?void 0:a.data;if(y){if(U(y))return t!==S;if(O(y))return t===S}return(d==null?void 0:d.isContentVisible)??!0},[a,d==null?void 0:d.isContentVisible,t]),k=f>0&&(!o||D);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":s,"data-ddl-list-last-row":g?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${ai} min-h-[26px] gap-2 ${m.join(" ")}`,children:[k&&l.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:f}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});Ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{var r;const e=Te(),n=(r=i.diffsSeverities)==null?void 0:r[Vi.AdditionalInfoRow],t=u.useMemo(()=>Qe(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case ei:return l.jsx(Le,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(je,{left:l.jsx(Ne,{...i,layoutSide:S}),right:l.jsx(Ne,{...i,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(Ne,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function le(i,e){return i?(e===S?i.styles.before:i.styles.after).textHighlighterColor:void 0}function en(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===nr?e:`${i.schemaName}.${e}`}function ar(i){return i.join(", ")}const Je=u.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=zt(),o=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),s=u.useMemo(()=>["ddlapi-foreign-key-link",R.highlighter(t)].filter(Boolean).join(" "),[t]),g=l.jsx(a,{href:o,className:s,children:en(e)});return n?g:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(vn,{text:"FK",colorSchema:Xi,inline:!0}),g]})});Je.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function or(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function nn(i,e){return!!i||!!e}function li(i,e){return i?e===S?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function lr(i,e,n){return nn(i,e)&&li(e,n)}function Ve(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=i;if(!nn(r,a))return null;if(!li(a,s))return or();const g=wt(a)?a==null?void 0:a.data:void 0;return l.jsx(Hi,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!g,$changes:g},dr(e,n))}function sr(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=ur(e,n),s=le(t,a);if(t&&!li(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Je,{target:n},o);const g=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Hi,{label:"FK",colorSchema:Xi,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:g}),l.jsx(Je,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const be=u.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Te(),s=u.useMemo(()=>t??{},[t]),g=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Ve({columnId:e,label:"PK",colorSchema:Qt,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,s.isPrimaryKey,o,a,n.isPrimaryKey]),d=u.useMemo(()=>lr(n.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,n.isPrimaryKey]),c=u.useMemo(()=>Ve({columnId:e,label:"unique",colorSchema:Zt,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[e,s.isUnique,o,a,n.isUnique]),h=u.useMemo(()=>d?null:Ve({columnId:e,label:"not null",colorSchema:er,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[e,s.isNotNull,d,o,a,n.isNotNull]),m=u.useMemo(()=>Ve({columnId:e,label:"generated",colorSchema:ir,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[e,s.isGenerated,o,a,n.isGenerated]),D=u.useMemo(()=>{const p=n.foreignKeyTargets??[];return p.length===0?[]:p.map(y=>sr({columnId:e,target:y,targetDiff:g[Zn(y)],layoutMode:o,layoutSide:a}))},[e,o,a,g,n.foreignKeyTargets]),k=u.useMemo(()=>[f,c,h,m,...D].filter(Boolean),[D,m,h,f,c]);return k.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:k})});function dr(i,e){return`${i}-${e}`}function ur(i,e){return`${i}-FK-${en(e)}`}be.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const si=u.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});si.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function tn(i){const{appearance:e}=i;return u.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const pe=u.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=tn({appearance:t});return l.jsx(si,{isVisible:e,value:n,className:r})});pe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const di=i=>{const{node:e,additionalInfoPrecededBy:n=P.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:r}=i,a=ge(),o=e.value(),s=u.useCallback(v=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(pe,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(be,{columnId:e.id,layoutSide:v,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),g=u.useCallback(v=>{const w=o==null?void 0:o.defaultValue;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),f=u.useCallback(v=>{const w=o==null?void 0:o.generatedExpression;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),d=u.useCallback(v=>{var w;return(w=o==null?void 0:o.enumValues)!=null&&w.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((x,C)=>l.jsx(ae,{isVisible:!0,value:x},`${x}-${C}`))}):l.jsx(l.Fragment,{})},[o]),c=a===ce,h=u.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),m=!!(o!=null&&o.enumValues&&o.enumValues.length>0),D=X(o==null?void 0:o.defaultValue),k=X(o==null?void 0:o.generatedExpression),y=t&&!(c&&(m||D||k)),A=t&&m&&!D&&!k,N=t&&D&&!k,T=t&&k;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[K]:y||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:s,usage:M.DdlApiProperty}),h&&l.jsx(me,{"data-precededby":P.DDL_COLUMN_ROW,value:o.description??"",variant:H.body2,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty}),c&&m&&l.jsx(oe,{"data-precededby":n,[K]:A||void 0,label:Qi,subheader:d}),c&&D&&l.jsx(oe,{"data-precededby":m?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:N||void 0,label:zi,subheader:g}),c&&k&&l.jsx(oe,{"data-precededby":D||m?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:T||void 0,label:Ji,subheader:f})]}):null};di.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Di(i,e){return i?(e===S?i.styles.before:i.styles.after).borderShadowColor:void 0}function fr(i,e){return i?(e===S?i.styles.before:i.styles.after).isFontMuted===!0:!1}function gr(i){if(oi(i))return yt(i)}function cr(i){if(oi(i))return bt(i)}function hr(i){if(Ui(i))return Nt(i)}function pr(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=tn({appearance:e});return u.useMemo(()=>[r,R.highlighter(n),R.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const Oe=u.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=i,o=pr({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(si,{isVisible:e,value:n,className:o})});Oe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function mr(i,e){return i?(e===S?i.styles.before:i.styles.after).backgroundColor:void 0}function yr(i){return i.text===", "||i.text===","}function br(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if(yr(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(Dr(r,a,e))}),n}function Dr(i,e,n){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:le(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Ae=u.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(pe,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Oe,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:le(e.diff,n),backgroundColor:mr(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:br(e.segments,n)})});Ae.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function vr(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function kr(i,e,n){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:le(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const rn=u.memo(i=>{const{node:e,layoutSide:n}=i,t=tt(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(Ae,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=vr(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>kr(o,s,n)),a.length>0&&l.jsx(Ae,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});rn.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const an=i=>{const{node:e,additionalInfoPrecededBy:n=P.DDL_COLUMN_ROW,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[$]:a}=i,o=ge(),s=e.value(),g=u.useMemo(()=>Yi(e),[e]),f=u.useMemo(()=>$i(e),[e]),d=u.useMemo(()=>cr(e),[e]),c=u.useMemo(()=>gr(e),[e]),h=u.useMemo(()=>vt(e),[e]),m=u.useMemo(()=>Dt(e),[e]),D=u.useMemo(()=>ji(e),[e]),k=u.useMemo(()=>Vt(e),[e]),p=u.useMemo(()=>Fi(e),[e]),y=u.useMemo(()=>Ht(e),[e]),A=u.useCallback(F=>s?Li(g,F)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(rn,{node:e,layoutSide:F}),l.jsx(be,{columnId:e.id,layoutSide:F,value:s,flagDiffs:d,foreignKeyTargetDiffs:c})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[d,c,e,g,s]),N=u.useCallback(F=>{const ne=xt(e,F);return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:le(p,F),borderShadowColor:Di(p,F)}):l.jsx(l.Fragment,{})},[p,e]),T=u.useCallback(F=>{const ne=(()=>{const Y=m==null?void 0:m.data;return Y?F===S?O(Y)||B(Y)?Y.beforeValue:void 0:U(Y)||B(Y)?Y.afterValue:void 0:s==null?void 0:s.generatedExpression})();return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:le(m,F)}):l.jsx(l.Fragment,{})},[m,s]),v=u.useCallback(F=>{const ne=Ct(e,F);return ne.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:ne.map((Y,dn)=>l.jsx(ae,{isVisible:!0,value:Y.literal,textHighlighterColor:le(Y.diff,F),borderShadowColor:Di(Y.diff,F),isFontMuted:fr(Y.diff,F)},`${Y.literal}-${dn}`))})},[e]),w=o===ce,x=!!g,C=w&&(!!(s!=null&&s.description)||!!h),q=!!(s!=null&&s.enumValues&&s.enumValues.length>0||D),I=!!(X(s==null?void 0:s.defaultValue)||p||y),b=X(s==null?void 0:s.generatedExpression)||!!m,j=w&&(q||I||b),z=t&&!C&&!j,ie=t&&C&&!j,G=t&&q&&!I&&!b,J=t&&I&&!b,W=t&&b;return s?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[K]:z||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:A,usage:M.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),C&&l.jsx(me,{"data-precededby":P.DDL_COLUMN_ROW,[K]:ie||void 0,value:s.description??"",variant:H.body2,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty,diff:h,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),w&&q&&l.jsx(oe,{"data-precededby":n,[K]:G||void 0,label:Qi,subheader:v,colorizingDiff:k,diffsSeverities:D?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),w&&!x&&I&&l.jsx(oe,{"data-precededby":q?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:J||void 0,label:zi,subheader:N,colorizingDiff:y,diffsSeverities:p||y?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),w&&b&&l.jsx(oe,{"data-precededby":I||q?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:W||void 0,label:Ji,subheader:T,diff:m,colorizingDiff:e.diffs[re],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};an.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function on(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=n?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:P.DDL_COLUMN_ROW,s=n?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:P.DDL_COLUMN_ROW,g={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return n=e&&tr(t.value()),g})}const Vr=i=>{const{node:e,[$]:n}=i;return Wt(e)?l.jsx(xr,{"data-precededby":n,node:e}):l.jsx(Hr,{"data-precededby":n,node:e})},Hr=i=>{const{node:e,[$]:n}=i,t=se(),r=ge(),a=e.value(),o=Bi(e.childrenNodes()),s=r===ce,g=u.useMemo(()=>on(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection}),l.jsx(_e.Provider,{value:t+1,children:g.map(({columnNode:f,titlePrecededBy:d,additionalInfoPrecededBy:c,isLastInList:h})=>l.jsx(di,{"data-precededby":d,additionalInfoPrecededBy:c,isLastInList:h,node:f},f.id))})]})},xr=i=>{const{node:e,[$]:n}=i,t=se(),r=ge(),a=e.value(),o=Bi(e.childrenNodes()),s=r===ce,g=u.useMemo(()=>Pe(ye(e)),[e]),f=u.useMemo(()=>on(o,s),[o,s]),d=u.useMemo(()=>Ii(e),[e]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection,...g}),l.jsx(_e.Provider,{value:t+1,children:f.map(({columnNode:c,titlePrecededBy:h,additionalInfoPrecededBy:m,isLastInList:D})=>oi(c)?l.jsx(an,{"data-precededby":h,additionalInfoPrecededBy:m,isLastInList:D,hideLevelIndicatorWhenSideEmpty:d,node:c},c.id):l.jsx(di,{"data-precededby":h,additionalInfoPrecededBy:m,isLastInList:D,node:c},c.id))})]})};Vr.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};const ui=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,r=ge(),a=e.value(),o=(a==null?void 0:a.indexName)??"",s=u.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const h=ar(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(pe,{isVisible:!0,value:`(${h})`,appearance:"text"}),l.jsx(be,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=u.useMemo(()=>r===ce&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),f=n,d=!!a&&(a.partNames.length>0||a.isUnique);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[K]:f||void 0,value:o,expandable:!1,expanded:!0,variant:H.body2,subheader:d?s:void 0,usage:M.DdlApiProperty}),g&&l.jsx(me,{"data-precededby":P.DDL_INDEX_ROW,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty})]}):null};ui.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const ln=i=>{const{node:e,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:t=!1,[$]:r}=i,a=ge(),o=e.value(),s=u.useMemo(()=>Yi(e),[e]),g=u.useMemo(()=>$i(e),[e]),f=u.useMemo(()=>hr(e),[e]),d=u.useMemo(()=>kt(e),[e]),c=(o==null?void 0:o.indexName)??"",h=u.useCallback(y=>{const A=ut(e,y);return l.jsx(Ae,{layoutSide:y,display:A})},[e]),m=u.useCallback(y=>{if(!o)return l.jsx(l.Fragment,{});if(!Li(s,y))return l.jsx(l.Fragment,{});const A=o.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A&&h(y),l.jsx(be,{columnId:e.id,layoutSide:y,value:o,flagDiffs:f})]})},[f,e.id,s,h,o]),D=u.useMemo(()=>a===ce&&(!!(o!=null&&o.description)||!!d),[d,a,o==null?void 0:o.description]),k=n&&!D,p=!!o&&(o.partNames.length>0||o.isUnique||!!(f!=null&&f.isUnique));return o?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[K]:k||void 0,value:c,expandable:!1,expanded:!0,variant:H.body2,subheader:p?m:void 0,usage:M.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:t,...g}),D&&l.jsx(me,{"data-precededby":P.DDL_INDEX_ROW,[K]:n||void 0,value:o.description??"",variant:H.body1,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty,diff:d,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:t})]}):null};ln.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function sn(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:P.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Cr=i=>{const{node:e,[$]:n}=i;return Yt(e)?l.jsx(wr,{"data-precededby":n,node:e}):l.jsx(Nr,{"data-precededby":n,node:e})},Nr=i=>{const{node:e,[$]:n}=i,t=se(),r=e.value(),a=Wi(e.childrenNodes()),o=u.useMemo(()=>sn(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection}),l.jsx(_e.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:g,isLastInList:f})=>l.jsx(ui,{"data-precededby":g,isLastInList:f,node:s},s.id))})]})},wr=i=>{const{node:e,[$]:n}=i,t=se(),r=e.value(),a=Wi(e.childrenNodes()),o=u.useMemo(()=>Pe(ye(e)),[e]),s=u.useMemo(()=>sn(a),[a]),g=u.useMemo(()=>Ii(e),[e]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection,...o}),l.jsx(_e.Provider,{value:t+1,children:s.map(({indexNode:f,titlePrecededBy:d,isLastInList:c})=>Ui(f)?l.jsx(ln,{"data-precededby":d,isLastInList:c,hideLevelIndicatorWhenSideEmpty:g,node:f},f.id):l.jsx(ui,{"data-precededby":d,isLastInList:c,node:f},f.id))})]})};Cr.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Re as $,$ as A,Pr as B,Vr as C,nr as D,he as E,Ir as F,jr as G,jn as H,Cr as I,Or as J,Fr as K,Ci as L,le as M,Le as N,Ie as O,P,je as Q,$r as R,de as S,ee as T,Yr as U,ct as V,Gr as W,Pi as X,Kr as Y,Wr as Z,kn as _,$t as a,Vn as a0,qn as a1,Sn as a2,xn as a3,Cn as a4,Hn as a5,te as a6,_r as a7,xi as a8,Er as a9,Oi as aa,qt as ab,Ft as ac,Pt as ad,ye as ae,Pe as af,M as ag,Ur as ah,H as b,me as c,Fe as d,Nn as e,Rr as f,Br as g,Ut as h,Bt as i,Xt as j,Jt as k,Xn as l,E as m,Ge as n,Zn as o,Wn as p,Ti as q,Lr as r,wi as s,Mr as t,ti as u,Me as v,L as w,qi as x,Si as y,Fn as z};
