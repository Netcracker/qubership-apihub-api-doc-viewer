var dn=Object.defineProperty;var un=(i,e,n)=>e in i?dn(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var V=(i,e,n)=>(un(i,typeof e!="symbol"?e+"":e,n),n);import{t as U,v as O,x as Ue,w as B,Z as Be,_ as fi,$ as we,N as re,a0 as Di,P as _,a1 as fn,a2 as gn,K as De,Q as cn,M as ve,a3 as hn,U as S,H as fe,a4 as We,a5 as He,a6 as pn,W as Q,V as R,a7 as vi,a8 as se,a9 as qe,X as Te,R as ki,Y as Qe,k as Ze,S as ei,aa as mn,ab as yn,y as bn,ac as X,ad as Dn,ae as Vi,u as ge,h as ce,f as _e}from"./DiffBadge-2df369cb.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";const te={SIMPLE:"simple",COMPLEX:"complex"};class Ee{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=te.SIMPLE,value:s=null,parent:g=null,container:f=null,newDataLevel:d=!0,meta:c}=a;this.type=o,this.parent=g,this.container=f,this.newDataLevel=d,this._value=s,this._meta=c}createCycledClone(e,n,t){const r=new Ee(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===te.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}}class ii extends Ee{constructor(n="#",t="",r,a,o){super(n,t,r,a,o);V(this,"type");this.id=n,this.key=t,this.kind=r,this.type=o.type}createCycledClone(n,t,r){const a=new ii(n,t,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return a.setChildrenNodes(this._childrenNodes),a.setNestedNodes(this._nestedNodes),a}value(n){const t=this.findNestedNode(n,!0);return(t==null?void 0:t.value())??null}childrenNodes(n){const t=this.findNestedNode(n,!0);return(t==null?void 0:t.childrenNodes())??[]}}class vn{constructor(){V(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(e,n,t,r,a){const o=new Ee(e,n,t,r,a);return this.nodes.set(e,o),o}createComplexNode(e,n,t,r,a){const o=new ii(e,n,t,r,a);return this.nodes.set(e,o),o}createCycledClone(e,n,t,r){const a=e.createCycledClone(n,t,r);return this.nodes.set(n,a),a}}const kn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Vn=Object.values(kn);new Set(Vn);class Me{aggregateByDescendantDiffs(e,n,t,r){}static isDiffsRecord(e){if(!E(e))return!1;for(const n of Object.values(e))if(!Me.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return E(n)&&(U(n)||O(n)||Ue(n)||B(n))}}function E(i){return Hi(i)&&!Array.isArray(i)}function Hi(i){return typeof i=="object"&&i!==null}function Hn(i){return E(i)&&Object.keys(i).every(e=>typeof e=="string")}function Re(i){return Array.isArray(i)}function Tr(i,e,n){let t=i,r=!1;for(const a of e){if(!E(t)&&!Re(t))return;if(r){let s;Hi(t)&&(s=t[a]),!s&&Re(t)&&n&&(s=t.find(g=>E(g)&&g[n]===a)),t=s,r=!1;continue}t=t[a],Re(t)&&(r=!0)}return t}function _r(i,e){return Object.keys(i).find(n=>i[n]===e)}function Er(i){if(Me.isDiffsRecord(i))return i}class xn{constructor(){V(this,"tree",null)}pick(e,n){if(!E(e))return null;const t={};for(const r of n){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?t[a]=[...o]:E(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const ke=()=>{},Nn=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ke,info:ke,warn:ke,error:ke};function Cn(i){return i==null||!E(i)&&!Be(i)}function wn(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:g,isComplexNode:f,resolveNodeKey:d,isDisallowedValue:c=Cn,shouldStopAfterNodeCreation:h}=i;return[({value:p,state:y,key:A,path:C})=>{if(typeof A=="symbol")return;if(!E(p)&&!Be(p))return{value:p};const{alreadyConvertedValuesCache:T,parent:v,container:w}=y,x=T.get(p);if(!x||!g(x)&&!f(x))return{value:p};if(!v||!g(v))return{value:p};const N="#"+fi(C),q=d(A,p),I=n.createCycledClone(x,N,q,v);return w?w.addNestedNode(I):v&&v.addChildNode(I),{done:!0}},({key:p,value:y,path:A,state:C,rules:T})=>!T||!Array.isArray(T.transformers)?void 0:{value:T.transformers.reduce((x,N)=>N(p,x,e,A,C),y)},({key:p,value:y,path:A,rules:C,state:T})=>{if(!C)return{done:!0};if(typeof p=="symbol")return{done:!0};if(c(y))return{done:!0};if(!C.kind||!t.includes(C.kind))return;const{parent:v,container:w}=T,x="#"+fi(A),N=d(p,y),{kind:q,complex:I=!1}=C,b=a(y,v,w),j=r(x,N,q,I,b);if(!j)return;w?w.addNestedNode(j):v&&v.addChildNode(j);let z=y;if(h!=null&&h(j,y)){const J=v?v.descendantDiffs:void 0;if(!J||!(p in J))return{done:!0};const W=J[p];if(!W)return{done:!0};const{data:F}=W;B(F)&&(z=F.beforeValue)}const ie=new Map(T.alreadyConvertedValuesCache);(E(y)||Be(y))&&ie.set(y,j);let G;return g(j)?G=o(T,j,ie):G=s(T,j,ie),{value:z,state:G}}]}class qn{}class de{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);V(this,"_diffs",{});V(this,"_diffsSummary",new Set);V(this,"_descendantDiffs",{});V(this,"_descendantDiffsSummary",new Set);V(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=te.SIMPLE,value:s=null,parent:g=null,container:f=null,newDataLevel:d=!0,meta:c}=a;this.type=o,this.parent=g,this.container=f,this.newDataLevel=d,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new de(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===te.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}class Sn extends vn{constructor(){super()}}const L={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},xi=Object.values(L),Ni="<unnamed>";function An(i){return i??Ni}function Ci(i){return i!==Ni}function Tn(i,e){return e.indexName&&Ci(e.indexName)?e.indexName:i}function Mr(i,e,n){return n||(e!=null&&e.indexName&&Ci(e.indexName)?e.indexName:String(i))}function Ye(i=L.TABLE){return{"/columns":{"/items":{"/*":()=>Ye(L.COLUMN)},kind:L.COLUMNS},"/indexes":{"/items":{"/*":()=>Ye(L.INDEX)},kind:L.INDEXES},kind:i}}function _n(i){return i.kind===we.Literal&&typeof i.value=="string"}function En(i){return i.kind===we.RawExpr&&typeof i.expr=="string"}function Mn(i){return E(i)&&typeof i.expr=="string"}function Ln(i){return E(i)&&typeof i.value=="string"}const he="titleRow",In=["typeName","size","precision","scale","label"],Lr={ToEnum:"to-enum",FromEnum:"from-enum"},Ir={Lost:"lost",Gained:"gained"},wi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],qi=["isUnique"],jr=[re,he,"tableName","schemaName","description"],Fr=[re,he,"columnName","description","generatedExpression",...wi],Pr=[re,he,"indexName",...qi];function jn(i){if(!E(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!E(n)||!("before"in n)||!("after"in n)?!1:Me.isDiff(e)}function Si(i){return jn(i[he])}function Fn(i){return E(i)&&i.kind===Di.Domain&&typeof i.type=="string"}function Pn(i){return i.kind===_.BoolType&&typeof i.type=="string"}function On(i){return i.kind===_.IntegerType&&typeof i.type=="string"}function gi(i){return i.kind===_.DecimalType&&typeof i.type=="string"}function ci(i){return i.kind===_.FloatType&&typeof i.type=="string"}function hi(i){return i.kind===_.StringType&&typeof i.type=="string"}function pi(i){return i.kind===_.BinaryType&&typeof i.type=="string"}function mi(i){return i.kind===_.TimeType&&typeof i.type=="string"}function Rn(i){return i.kind===_.JSONType&&typeof i.type=="string"}function Gn(i){return i.kind===_.SpatialType&&typeof i.type=="string"}function Kn(i){return i.kind===_.UUIDType&&typeof i.type=="string"}function Ge(i){return i.kind===_.EnumType&&Array.isArray(i.values)}function Un(i){return i.kind===_.UnsupportedType&&typeof i.type=="string"}function yi(i){return typeof i.type=="string"}function ni(i){switch(i.kind){case we.Literal:return _n(i)?i.value:i.kind;case we.RawExpr:return En(i)?i.expr:i.kind;case fn.NamedDefault:try{return ni(gn(i))}catch{return i.kind}default:return Mn(i)?i.expr:Ln(i)?i.value:i.kind}}function Ai(i){return Ti(ni(i))}function Bn(i){return Ti(i)}function Ti(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Wn="Columns",Yn="Indexes";class $n{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=De(n.attrs,ve.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:Wn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:Yn,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:E(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return E(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!E(e)||typeof e.tableName!="string"||!E(e.columns)||!Array.isArray(e.columns.items)||!E(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var p,y,A;const a=De(t.attrs,ve.Comment),o=(p=t.attrs)==null?void 0:p.find(C=>C.kind===cn.Identity),s=De(t.attrs,ve.GeneratedExpr),g=o!==void 0||s!==void 0,d=this.findForeignKeysForColumn(n,t).map(C=>this.buildForeignKeyTarget(e,C,t,r)).filter(C=>C!==void 0),c=d.length>0,h=this.formatColumnType(t.type),m=(y=t.type)==null?void 0:y.type,D=m&&Ge(m)?m.values:void 0,k=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:h,...D?{enumValues:D}:{},isPrimaryKey:k,isForeignKey:c,...d.length>0?{foreignKeyTargets:d}:{},isGenerated:g,...o?{generatedBy:"identity"}:{},...s&&!o?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!k&&((A=t.type)==null?void 0:A.null)===!1,...t.default!==void 0?{defaultValue:Ai(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=De(e.attrs,ve.Comment);return{indexName:An(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>{var r,a,o;return t.unique===!0&&((r=t.parts)==null?void 0:r.length)===1&&((o=(a=t.parts[0])==null?void 0:a.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var f,d;const a=((f=n.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,s=(d=n.refColumns)==null?void 0:d[a];if(!o||!s)return;const g=this.resolveForeignKeyTargetSchemaName(e,o,r);if(g)return{schemaName:g,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Fn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return Pn(e)?{kind:_.BoolType,typeName:e.type,label:n}:On(e)?{kind:_.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:gi(e)?{kind:_.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ci(e)?{kind:_.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:hi(e)?{kind:_.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:pi(e)?{kind:_.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:mi(e)?{kind:_.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Rn(e)?{kind:_.JSONType,typeName:e.type,label:n}:Gn(e)?{kind:_.SpatialType,typeName:e.type,label:n}:Kn(e)?{kind:_.UUIDType,typeName:e.type,label:n}:Ge(e)?{kind:_.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Un(e)?{kind:_.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:yi(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Di.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return gi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):hi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):pi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ci(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):mi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ge(e)?n=e.type??e.values[0]??"enum":yi(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?ni(e.expr):""}}function Xn(i){return wn(i)}const zn=new Set([L.TABLE,L.COLUMNS,L.COLUMN,L.INDEXES,L.INDEX]);class ti extends qn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!Hn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,ti.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return zn.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case L.TABLE:return["tableName","schemaName","description"];case L.COLUMNS:case L.INDEXES:return["title"];case L.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case L.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const Jn="[DDL API]";class Or extends xn{constructor(n){const{source:t,tableKey:r,logger:a=Nn()}=n;super();V(this,"tree");V(this,"source");V(this,"tableKey");V(this,"logger");V(this,"nodeDataBuilder");this.source=t,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!E(this.source)&&!Array.isArray(this.source))return this.tree;const n=this.prepareSource();if(!n)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,alreadyConvertedValuesCache:new Map},r=Ye(),a=Xn({source:n,tree:this.tree,supportedNodeKinds:xi,createNodeFromRaw:(o,s,g,f,d)=>this.createNodeFromRaw(o,s,g,f,d),createNodeParams:(o,s,g)=>({value:E(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:s,container:g}),createStateForSimpleNode:(o,s,g)=>({parent:s,container:null,alreadyConvertedValuesCache:g}),createStateForComplexNode:(o,s,g)=>({parent:o.parent,container:s,alreadyConvertedValuesCache:g}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,s)=>this.resolveNodeKey(o,s)});return hn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Jn}createTree(){return new Sn}createNodeDataBuilder(){return new ti}prepareSource(){return new $n(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(n,t,r,a,o){const{parent:s,container:g,newDataLevel:f}=o;if(a){const m=this.createNodeMeta(t,o),D={type:te.COMPLEX,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(g),value:null,meta:m,newDataLevel:f};return this.tree.createComplexNode(n,t,r,!1,D)}const d=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),h={type:te.SIMPLE,parent:this.takeSimpleTreeNode(s),container:this.takeComplexTreeNode(g),value:d,meta:c,newDataLevel:f};return this.tree.createSimpleNode(n,t,r,!1,h)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,s)=>this.pick(o,s))}resolveNodeKey(n,t){return E(t)?"columnName"in t&&typeof t.columnName=="string"?t.columnName:"indexName"in t&&typeof t.indexName=="string"?Tn(n,t):n:n}isSimpleTreeNode(n){return n.type===te.SIMPLE}isComplexTreeNode(n){return n.type===te.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}function Qn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function Zn(i,e,n){const t=n===S,r=new Set,a=[],o=g=>{const f=e==null?void 0:e[g];if(f)return f;for(const d of Object.values(e??{}))if(d&&B(d.data)&&d.data.afterValue===g)return d};for(const g of i){const f=o(g);if(!f){a.push({text:g});continue}if(r.has(f))continue;r.add(f);const{data:d}=f;if(U(d)){!t&&typeof d.afterValue=="string"&&a.push({text:d.afterValue,diff:f});continue}if(O(d)){t&&typeof d.beforeValue=="string"&&a.push({text:d.beforeValue,diff:f});continue}if(B(d)){const c=t?typeof d.beforeValue=="string"?d.beforeValue:g:typeof d.afterValue=="string"?d.afterValue:g;a.push({text:c,diff:f})}}for(const[g,f]of Object.entries(e??{}))!f||r.has(f)||O(f.data)&&t&&(a.push({text:g,diff:f}),r.add(f));const s=g=>{const f=i.indexOf(g);return f>=0?f:i.length};return a.sort((g,f)=>s(g.text)-s(f.text))}function _i(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Se(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===S;return U(t)?r?void 0:String(t.afterValue??i??""):O(t)?r?String(t.beforeValue??i??""):void 0:B(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function et(i,e){return(e===S?i.styles.before:i.styles.after).isContentVisible}const Ei=["size","precision","scale"];function it(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function nt(i,e){var f;const n=(f=i.value())==null?void 0:f.columnType;if(!n)return{kind:"plain",text:""};const t=it(i);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(tt(t)){const d=Object.values(t).find(Boolean);return d?{kind:"monolithic",text:rt(n,t,a,e),diff:lt(d)}:{kind:"plain",text:n.label}}const o=[],s=Se($e(n),r,e);s!==void 0&&o.push({text:s,diff:r});const g=at(n,t,e);return o.push(...g),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function tt(i){const e=In.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function rt(i,e,n,t){const r=Se($e(i),e[n],t)??$e(i),a=[];for(const o of Ei){const s=Se(ri(i,o),e[o],t);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function at(i,e,n){const t=ot(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Se(ri(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[..._i(r,"spaced")]}function ot(i,e,n){return Ei.filter(t=>{const r=e[t];return r?et(r,n):ri(i,t)!==void 0})}function $e(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function ri(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function lt(i){const{data:e}=i;return B(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Yellow}}}:U(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Green}}}:O(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:fe.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function st(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function dt(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=st(i),r=t?Zn(n,t,e):n.map(s=>({text:s})),a=_i(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function ut(i){if(Si(i.diffs))return i.diffs[he]}function ft(i){const e=i.diffs[re];if(e&&(U(e.data)||O(e.data)))return e}function gt(i){return i.diffs.schemaName}function Rr(i){return i.diffs.description}function Gr(i,e){var o;const n=((o=i.value())==null?void 0:o.schemaName)??"",t=gt(i);if(!t)return n;const r=t.data,a=e===S;return U(r)?a?"":n:O(r)?a?n:"":B(r)?a?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}function ct(i){if(Si(i.diffs))return i.diffs[he]}function ht(i){const e=i.diffs[re];if(e&&(U(e.data)||O(e.data)))return e}function Mi(i,e){return i?(e===S?i.styles.before:i.styles.after).isHeaderVisible:!0}function pt(i,e){return i?(e===S?i.styles.before:i.styles.after).isContentVisible:!0}function Li(i){const e=i.diffs[re];return e?U(e.data)||O(e.data):!1}function mt(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function yt(i){const e={};let n=!1;for(const t of wi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function bt(i){return i.diffs.generatedExpression}function Dt(i){return i.diffs.description}function vt(i){return i.diffs.description}function Ii(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function kt(i){return i.diffs.enumValuesRowColorizingDiff}function ji(i){return i.diffs.defaultValue}function Vt(i){return i.diffs.defaultValueRowColorizingDiff}function Ht(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=ji(i);if(!t)return n;const r=t.data,a=e===S;return U(r)?a?void 0:n:O(r)?a?Ke(r.beforeValue)??n:void 0:B(r)?a?Ke(r.beforeValue)??n:Ke(r.afterValue)??n:n}function Ke(i){if(typeof i=="string")return Bn(i);if(E(i)&&"kind"in i)return Ai(i)}function xt(i,e){var f;const n=((f=i.value())==null?void 0:f.enumValues)??[],t=Ii(i),r=e===S,a=new Set,o=[],s=d=>{const c=t==null?void 0:t[d];if(c)return c;for(const h of Object.values(t??{}))if(h&&B(h.data)&&h.data.afterValue===d)return h};for(const d of n){const c=s(d);if(!c){o.push({literal:d});continue}if(a.has(c))continue;a.add(c);const{data:h}=c;if(U(h)){!r&&typeof h.afterValue=="string"&&o.push({literal:h.afterValue,diff:c});continue}if(O(h)){r&&typeof h.beforeValue=="string"&&o.push({literal:h.beforeValue,diff:c});continue}if(B(h)){const m=r?typeof h.beforeValue=="string"?h.beforeValue:d:typeof h.afterValue=="string"?h.afterValue:d;o.push({literal:m,diff:c})}}for(const[d,c]of Object.entries(t??{}))!c||a.has(c)||O(c.data)&&r&&(o.push({literal:d,diff:c}),a.add(c));const g=d=>{const c=n.indexOf(d);return c>=0?c:n.length};return o.sort((d,c)=>g(d.literal)-g(c.literal))}function Nt(i){const e={};let n=!1;for(const t of qi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function Ct(i){return i?i.highlightingMode.get(We.Default)!==He.Invisible:!1}const wt=u.createContext(!1),Le=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:r=!1}=i;return r||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(pn,{variant:n,message:t}),e]})};Le.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const Ie=u.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});Ie.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const je=u.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:n})]})});je.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Fi="px-4",qt="",St="px-4",ai="";var M=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(M||{});var H=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(H||{});const At=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:r}=i,a=u.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${Et(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Pi=u.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:s=He.Default}=i,g=s===He.Default,f=s===He.Invisible,{textFontWeight:d,labelFontWeight:c,labelColor:h,textColor:m,label:D}=i,[k,p]=u.useState(!1),y=u.useCallback((x,N,q)=>{if(q)return null;const I=f?"":N.join(" "),b=`text-value ${r?"hover:cursor-pointer":""} ${d?`font-${d}`:""}`.trim(),j=`${b} ${I}`.trim(),z={onClick:r,...m!=null&&m.trim()?{style:{color:m}}:{}};x=k?x:_t(x);const ie=(G,J)=>{const W={...z,className:J};switch(n){case H.h1:return l.jsx("h1",{...W,children:G});case H.h2:return l.jsx("h2",{...W,children:G});case H.h3:return l.jsx("h3",{...W,children:G});case H.h4:return l.jsx("h4",{...W,children:G});case H.h5:return l.jsx("h5",{...W,children:G});case H.h6:return l.jsx("h6",{...W,children:G});case H.body1:return l.jsx("span",{...W,className:`${J} text-value-body1`.trim(),children:G});case H.body2:return l.jsx("span",{...W,className:`${J} text-value-body2`.trim(),children:G})}};return D?ie(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:h!=null&&h.trim()?{color:h}:{},children:`${D}: `}),l.jsx("span",{className:I,children:x})]}),b):ie(x,j)},[k,f,D,h,c,r,m,d,n]),A=u.useCallback(x=>{const N=[];let q=x,I=!1;if(a){const{data:b,styles:j}=a;switch(t){case S:N.push(R.highlighter(j.before.textHighlighterColor)),g&&(O(b)&&(q=ue(b.beforeValue)?b.beforeValue:q),B(b)&&(o===M.JsoProperty&&!f&&N.push(R.highlighter(fe.Yellow)),q=ue(b.beforeValue)?b.beforeValue:q),Ue(b)&&(q=ue(b.beforeKey)?b.beforeKey:q)),U(b)&&(I=!0);break;case Q:N.push(R.highlighter(j.after.textHighlighterColor)),g&&(U(b)&&(q=ue(b.afterValue)?b.afterValue:q),B(b)&&(o===M.JsoProperty&&!f&&N.push(R.highlighter(fe.Yellow)),q=ue(b.afterValue)?b.afterValue:q),Ue(b)&&(q=ue(b.afterKey)?b.afterKey:q)),O(b)&&(I=!0);break}}return[q,N,I]},[a,g,f,t,o]),[C,T,v]=A(e);return u.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(C,T,v),!v&&l.jsx(At,{isExpandable:Tt(C),expanded:k,setExpanded:p,variant:n})]}),[y,C,T,v,k,p,n])}),Xe=5,ze=300;function Tt(i){return i?i.length>ze||vi.trim(i.split(`
`)).length>Xe:!1}function _t(i){if(!i)return;if(i.length>ze)return i.slice(0,ze)+"...";const e=vi.trim(i.split(`
`));return e.length>Xe?e.slice(0,Xe).join(`
`)+"...":i}function ue(i){return typeof i=="string"}function Et(i){switch(i){case H.h1:return"text-value-expander--h1";case H.h2:return"text-value-expander--h2";case H.h3:return"text-value-expander--h3";case H.h4:return"text-value-expander--h4";case H.h5:return"text-value-expander--h5";case H.h6:return"text-value-expander--h6";case H.body1:return"text-value-expander--body1";case H.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const $="data-precededby",K="data-ddl-list-last-row";var P=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(P||{}),Z=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Z||{});const Mt={[Z.DdlApiProperty]:ai},Lt={[Z.DdlApiProperty]:["min-h-[26px]"]};function It(i){const e=Mt[i]??Fi,n=Lt[i]??[];return[e,...n].join(" ")}const xe=u.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=Z.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:s,textFontWeight:g,labelColor:f,textColor:d}=i,{[$]:c}=i,{diff:h,descendantDiffs:m,diffsSeverities:D}=i,k=se(),p=r===Z.DdlApiProperty,y=u.useMemo(()=>!a||pt(h,t),[h,a,t]),A=p&&k>0&&y,C=u.useMemo(()=>{if(!h)return[];const{data:w,styles:x}=h;if(!w)return[];const N=[];return t===S&&N.push(R.background(x.before.backgroundColor)),t===Q&&N.push(R.background(x.after.backgroundColor)),N},[h,t]),T=u.useMemo(()=>It(r),[r]),v=l.jsx(Pi,{label:o,labelFontWeight:s,textFontWeight:g,labelColor:f,textColor:d,value:e,variant:n,layoutSide:t,diff:h});return l.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${p?"items-stretch":""} ${T} gap-2 ${C.join(" ")}`,children:[A&&l.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:k}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),p?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});xe.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const me=u.memo(i=>{const e=Te(),{diffsSeverities:n,diffsSeverityPlacement:t=ki.DescriptionRow}=i,r=u.useMemo(()=>n==null?void 0:n[t],[n,t]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),o=u.useMemo(()=>Qe(r==null?void 0:r.causedAt),[r]);switch(e){case ei:return l.jsx(Le,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(je,{left:l.jsx(xe,{...i,layoutSide:S}),right:l.jsx(xe,{...i,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(xe,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});me.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const Fe="#353C4E",jt=u.createContext(void 0);function Ft(){return u.useContext(jt)}const Oi=i=>{const{expandable:e,expanded:n,onClick:t,level:r}=i,a=u.useContext(wt),o=r>0,s=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(mn,{short:e}),e&&n!==void 0&&l.jsx(yn,{onToggle:s,expanded:n})]})};Oi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Pt={[M.JsoProperty]:qt,[M.DdlApiSection]:St,[M.DdlApiProperty]:ai},Ot={[M.JsoProperty]:["min-h-[26px]"],[M.DdlApiProperty]:["min-h-[26px]"]};function Rt(i){const e=Pt[i]??Fi,n=Ot[i]??[];return[e,...n].join(" ")}const Ne=u.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:g=!0,subheader:f,usage:d=M.Default,highlightingMode:c=bn,hideLevelIndicatorWhenSideEmpty:h=!1}=i,{diff:m,descendantDiffs:D,diffsSeverities:k}=i,{[$]:p,[K]:y}=i,A=u.useMemo(()=>{switch(d){case M.Default:return c.get(We.Default);case M.AsyncApiJsoSection:case M.JsoProperty:return c.get(We.JsoPropertyKey)}},[c,d]),C=se(),T=Ft(),v=u.useMemo(()=>T?o===S?T.beforeLevel:T.afterLevel:C,[o,C,T]),w=u.useMemo(()=>{const b=[];if(!m)return b;const{data:j,styles:z}=m;return j&&(o===S&&b.push(R.background(z.before.backgroundColor)),o===Q&&b.push(R.background(z.after.backgroundColor))),b},[m,o]),x=u.useMemo(()=>g?l.jsx(Pi,{"data-precededby":p,value:r,variant:a,layoutSide:o,diff:m,usage:d,highlightingMode:A,onClick:t}):null,[g,p,r,a,o,m,d,A,t]),N=d===M.DdlApiProperty,q=u.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||v>0)&&l.jsxs("div",{"data-precededby":p,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:v}),l.jsx(Oi,{expandable:e,expanded:n,onClick:t,level:v})]}),!N&&x]}):h?null:v>0&&l.jsx(qe,{level:v}),[s,e,n,x,h,N,v,t,p]),I=u.useMemo(()=>Rt(d),[d]);return l.jsxs("div",{"data-precededby":p,"data-ddl-list-last-row":y?!0:void 0,"data-usage":d!==M.Default?d:void 0,className:`title-row-content flex w-full ${N?"items-stretch":"items-center"} h-full ${I} gap-2 ${w.join(" ")}`,children:[q,N?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[x,f==null?void 0:f(o)]}):f==null?void 0:f(o)]})});Ne.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=u.memo(i=>{const e=Te(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=i,a=u.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=u.useMemo(()=>a==null?void 0:a.type,[a]),s=u.useMemo(()=>Qe(a==null?void 0:a.causedAt),[a]);switch(e){case ei:return l.jsx(Le,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(je,{left:l.jsx(Ne,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:S}),right:l.jsx(Ne,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(Ne,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Kr(i,e){return u.useMemo(()=>e(i)?ye(i):{},[e,i])}function ye(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Pe(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:g,nodeDiffsSeverities:f}=i;if(!s)return{};const d=Object.entries(s),c=D=>{const k=d.find(([p])=>p===String(D));return k==null?void 0:k[1]},h=n?c(n):void 0;return{diff:o?o(s,c):t?s[re]??h:h,...r?{descendantDiffs:g}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function Gt(i){return xi.includes(i.kind)}function Ur(i){return i.childrenNodes().filter(Gt)}function Kt(i){return i.kind===L.TABLE}function Br(i){return Kt(i)&&i instanceof de}function Ut(i){return i.kind===L.COLUMNS}function Bt(i){return Ut(i)&&i instanceof de}function Wt(i){return Yt(i)&&i instanceof de}function Ri(i){return i.kind===L.COLUMN}function oi(i){return Ri(i)&&i instanceof de}function Yt(i){return i.kind===L.INDEXES}function Gi(i){return i.kind===L.INDEX}function Ki(i){return Gi(i)&&i instanceof de}function Ui(i){return i.filter(Ri)}function Bi(i){return i.filter(Gi)}const $t=u.createContext(null);function Xt(){const i=u.useContext($t);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const zt=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});zt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const Wi=ht;function Yi(i){const e=Pe(ye(i),{resolveDiff:()=>ct(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Wr(i){const e=Pe(ye(i),{resolveDiff:()=>ut(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Yr=ft,Jt="ux-badge_ddlapi_primary-key",$i="ux-badge_ddlapi_foreign-key",Qt="ux-badge_ddlapi_unique",Zt="ux-badge_ddlapi_not-null",er="ux-badge_ddlapi_generated",ir="public",Xi="Default",zi="As",Ji="Values";function nr(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Qi=u.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:r}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});Qi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function tr(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return u.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",R.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[R.highlighter(e),t?R.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ae=u.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:s}=tr({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(Qi,{isVisible:e,value:n,blockClassName:o,valueClassName:s})});ae.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce=u.memo(i=>{var p;const{label:e,subheader:n,layoutSide:t,diff:r,colorizingDiff:a,hideLevelIndicatorWhenSideEmpty:o=!1}=i,{[$]:s,[K]:g}=i,f=se(),d=t===S?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,h=(p=(t===S?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??d)==null?void 0:p.backgroundColor,m=u.useMemo(()=>h?[R.background(h)]:[],[h]),D=u.useMemo(()=>{const y=a==null?void 0:a.data;if(y){if(U(y))return t!==S;if(O(y))return t===S}return(d==null?void 0:d.isContentVisible)??!0},[a,d==null?void 0:d.isContentVisible,t]),k=f>0&&(!o||D);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":s,"data-ddl-list-last-row":g?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${ai} min-h-[26px] gap-2 ${m.join(" ")}`,children:[k&&l.jsxs("div",{"data-precededby":s,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(qe,{level:f}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const oe=u.memo(i=>{var r;const e=Te(),n=(r=i.diffsSeverities)==null?void 0:r[ki.AdditionalInfoRow],t=u.useMemo(()=>Qe(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case ei:return l.jsx(Le,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(je,{left:l.jsx(Ce,{...i,layoutSide:S}),right:l.jsx(Ce,{...i,layoutSide:Q})})});case Ze:return l.jsx(Ie,{content:l.jsx(Ce,{...i,layoutSide:Q})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function le(i,e){return i?(e===S?i.styles.before:i.styles.after).textHighlighterColor:void 0}function Zi(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===ir?e:`${i.schemaName}.${e}`}function rr(i){return i.join(", ")}const Je=u.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Xt(),o=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),s=u.useMemo(()=>["ddlapi-foreign-key-link",R.highlighter(t)].filter(Boolean).join(" "),[t]),g=l.jsx(a,{href:o,className:s,children:Zi(e)});return n?g:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Dn,{text:"FK",colorSchema:$i,inline:!0}),g]})});Je.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function ar(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function en(i,e){return!!i||!!e}function li(i,e){return i?e===S?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function or(i,e,n){return en(i,e)&&li(e,n)}function Ve(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=i;if(!en(r,a))return null;if(!li(a,s))return ar();const g=Ct(a)?a==null?void 0:a.data:void 0;return l.jsx(Vi,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!g,$changes:g},sr(e,n))}function lr(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=dr(e,n),s=le(t,a);if(t&&!li(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Je,{target:n},o);const g=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(Vi,{label:"FK",colorSchema:$i,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:g}),l.jsx(Je,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const be=u.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Te(),s=u.useMemo(()=>t??{},[t]),g=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>Ve({columnId:e,label:"PK",colorSchema:Jt,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,s.isPrimaryKey,o,a,n.isPrimaryKey]),d=u.useMemo(()=>or(n.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,n.isPrimaryKey]),c=u.useMemo(()=>Ve({columnId:e,label:"unique",colorSchema:Qt,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[e,s.isUnique,o,a,n.isUnique]),h=u.useMemo(()=>d?null:Ve({columnId:e,label:"not null",colorSchema:Zt,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[e,s.isNotNull,d,o,a,n.isNotNull]),m=u.useMemo(()=>Ve({columnId:e,label:"generated",colorSchema:er,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[e,s.isGenerated,o,a,n.isGenerated]),D=u.useMemo(()=>{const p=n.foreignKeyTargets??[];return p.length===0?[]:p.map(y=>lr({columnId:e,target:y,targetDiff:g[Qn(y)],layoutMode:o,layoutSide:a}))},[e,o,a,g,n.foreignKeyTargets]),k=u.useMemo(()=>[f,c,h,m,...D].filter(Boolean),[D,m,h,f,c]);return k.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:k})});function sr(i,e){return`${i}-${e}`}function dr(i,e){return`${i}-FK-${Zi(e)}`}be.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const si=u.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});si.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function nn(i){const{appearance:e}=i;return u.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const pe=u.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=nn({appearance:t});return l.jsx(si,{isVisible:e,value:n,className:r})});pe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const di=i=>{const{node:e,additionalInfoPrecededBy:n=P.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:r}=i,a=ge(),o=e.value(),s=u.useCallback(v=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(pe,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(be,{columnId:e.id,layoutSide:v,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),g=u.useCallback(v=>{const w=o==null?void 0:o.defaultValue;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),f=u.useCallback(v=>{const w=o==null?void 0:o.generatedExpression;return X(w)?l.jsx(ae,{isVisible:!0,value:w}):l.jsx(l.Fragment,{})},[o]),d=u.useCallback(v=>{var w;return(w=o==null?void 0:o.enumValues)!=null&&w.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((x,N)=>l.jsx(ae,{isVisible:!0,value:x},`${x}-${N}`))}):l.jsx(l.Fragment,{})},[o]),c=a===ce,h=u.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),m=!!(o!=null&&o.enumValues&&o.enumValues.length>0),D=X(o==null?void 0:o.defaultValue),k=X(o==null?void 0:o.generatedExpression),y=t&&!(c&&(m||D||k)),A=t&&m&&!D&&!k,C=t&&D&&!k,T=t&&k;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[K]:y||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:s,usage:M.DdlApiProperty}),h&&l.jsx(me,{"data-precededby":P.DDL_COLUMN_ROW,value:o.description??"",variant:H.body2,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty}),c&&m&&l.jsx(oe,{"data-precededby":n,[K]:A||void 0,label:Ji,subheader:d}),c&&D&&l.jsx(oe,{"data-precededby":m?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:C||void 0,label:Xi,subheader:g}),c&&k&&l.jsx(oe,{"data-precededby":D||m?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:T||void 0,label:zi,subheader:f})]}):null};di.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function bi(i,e){return i?(e===S?i.styles.before:i.styles.after).borderShadowColor:void 0}function ur(i,e){return i?(e===S?i.styles.before:i.styles.after).isFontMuted===!0:!1}function fr(i){if(oi(i))return mt(i)}function gr(i){if(oi(i))return yt(i)}function cr(i){if(Ki(i))return Nt(i)}function hr(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=nn({appearance:e});return u.useMemo(()=>[r,R.highlighter(n),R.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const Oe=u.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=i,o=hr({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(si,{isVisible:e,value:n,className:o})});Oe.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function pr(i,e){return i?(e===S?i.styles.before:i.styles.after).backgroundColor:void 0}function mr(i){return i.text===", "||i.text===","}function yr(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if(mr(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(br(r,a,e))}),n}function br(i,e,n){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:le(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Ae=u.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(pe,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Oe,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:le(e.diff,n),backgroundColor:pr(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:yr(e.segments,n)})});Ae.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Dr(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function vr(i,e,n){return i.diff?l.jsx(Oe,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:le(i.diff,n)},`${i.text}-${e}`):l.jsx(pe,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const tn=u.memo(i=>{const{node:e,layoutSide:n}=i,t=nt(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(Ae,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=Dr(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>vr(o,s,n)),a.length>0&&l.jsx(Ae,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});tn.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const rn=i=>{const{node:e,additionalInfoPrecededBy:n=P.DDL_COLUMN_ROW,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[$]:a}=i,o=ge(),s=e.value(),g=u.useMemo(()=>Wi(e),[e]),f=u.useMemo(()=>Yi(e),[e]),d=u.useMemo(()=>gr(e),[e]),c=u.useMemo(()=>fr(e),[e]),h=u.useMemo(()=>Dt(e),[e]),m=u.useMemo(()=>bt(e),[e]),D=u.useMemo(()=>Ii(e),[e]),k=u.useMemo(()=>kt(e),[e]),p=u.useMemo(()=>ji(e),[e]),y=u.useMemo(()=>Vt(e),[e]),A=u.useCallback(F=>s?Mi(g,F)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(tn,{node:e,layoutSide:F}),l.jsx(be,{columnId:e.id,layoutSide:F,value:s,flagDiffs:d,foreignKeyTargetDiffs:c})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[d,c,e,g,s]),C=u.useCallback(F=>{const ne=Ht(e,F);return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:le(p,F),borderShadowColor:bi(p,F)}):l.jsx(l.Fragment,{})},[p,e]),T=u.useCallback(F=>{const ne=(()=>{const Y=m==null?void 0:m.data;return Y?F===S?O(Y)||B(Y)?Y.beforeValue:void 0:U(Y)||B(Y)?Y.afterValue:void 0:s==null?void 0:s.generatedExpression})();return X(ne)?l.jsx(ae,{isVisible:!0,value:ne,textHighlighterColor:le(m,F)}):l.jsx(l.Fragment,{})},[m,s]),v=u.useCallback(F=>{const ne=xt(e,F);return ne.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:ne.map((Y,sn)=>l.jsx(ae,{isVisible:!0,value:Y.literal,textHighlighterColor:le(Y.diff,F),borderShadowColor:bi(Y.diff,F),isFontMuted:ur(Y.diff,F)},`${Y.literal}-${sn}`))})},[e]),w=o===ce,x=!!g,N=w&&(!!(s!=null&&s.description)||!!h),q=!!(s!=null&&s.enumValues&&s.enumValues.length>0||D),I=!!(X(s==null?void 0:s.defaultValue)||p||y),b=X(s==null?void 0:s.generatedExpression)||!!m,j=w&&(q||I||b),z=t&&!N&&!j,ie=t&&N&&!j,G=t&&q&&!I&&!b,J=t&&I&&!b,W=t&&b;return s?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[K]:z||void 0,value:s.columnName,expandable:!1,expanded:!0,variant:H.body2,subheader:A,usage:M.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),N&&l.jsx(me,{"data-precededby":P.DDL_COLUMN_ROW,[K]:ie||void 0,value:s.description??"",variant:H.body2,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty,diff:h,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),w&&q&&l.jsx(oe,{"data-precededby":n,[K]:G||void 0,label:Ji,subheader:v,colorizingDiff:k,diffsSeverities:D?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),w&&!x&&I&&l.jsx(oe,{"data-precededby":q?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:J||void 0,label:Xi,subheader:C,colorizingDiff:y,diffsSeverities:p||y?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),w&&b&&l.jsx(oe,{"data-precededby":I||q?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[K]:W||void 0,label:zi,subheader:T,diff:m,colorizingDiff:e.diffs[re],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};rn.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function an(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=n?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:P.DDL_COLUMN_ROW,s=n?P.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:P.DDL_COLUMN_ROW,g={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return n=e&&nr(t.value()),g})}const kr=i=>{const{node:e,[$]:n}=i;return Bt(e)?l.jsx(Hr,{"data-precededby":n,node:e}):l.jsx(Vr,{"data-precededby":n,node:e})},Vr=i=>{const{node:e,[$]:n}=i,t=se(),r=ge(),a=e.value(),o=Ui(e.childrenNodes()),s=r===ce,g=u.useMemo(()=>an(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection}),l.jsx(_e.Provider,{value:t+1,children:g.map(({columnNode:f,titlePrecededBy:d,additionalInfoPrecededBy:c,isLastInList:h})=>l.jsx(di,{"data-precededby":d,additionalInfoPrecededBy:c,isLastInList:h,node:f},f.id))})]})},Hr=i=>{const{node:e,[$]:n}=i,t=se(),r=ge(),a=e.value(),o=Ui(e.childrenNodes()),s=r===ce,g=u.useMemo(()=>Pe(ye(e)),[e]),f=u.useMemo(()=>an(o,s),[o,s]),d=u.useMemo(()=>Li(e),[e]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection,...g}),l.jsx(_e.Provider,{value:t+1,children:f.map(({columnNode:c,titlePrecededBy:h,additionalInfoPrecededBy:m,isLastInList:D})=>oi(c)?l.jsx(rn,{"data-precededby":h,additionalInfoPrecededBy:m,isLastInList:D,hideLevelIndicatorWhenSideEmpty:d,node:c},c.id):l.jsx(di,{"data-precededby":h,additionalInfoPrecededBy:m,isLastInList:D,node:c},c.id))})]})};kr.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};const ui=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,r=ge(),a=e.value(),o=(a==null?void 0:a.indexName)??"",s=u.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const h=rr(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(pe,{isVisible:!0,value:`(${h})`,appearance:"text"}),l.jsx(be,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=u.useMemo(()=>r===ce&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),f=n,d=!!a&&(a.partNames.length>0||a.isUnique);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[K]:f||void 0,value:o,expandable:!1,expanded:!0,variant:H.body2,subheader:d?s:void 0,usage:M.DdlApiProperty}),g&&l.jsx(me,{"data-precededby":P.DDL_INDEX_ROW,value:a.description??"",variant:H.body1,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty})]}):null};ui.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const on=i=>{const{node:e,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:t=!1,[$]:r}=i,a=ge(),o=e.value(),s=u.useMemo(()=>Wi(e),[e]),g=u.useMemo(()=>Yi(e),[e]),f=u.useMemo(()=>cr(e),[e]),d=u.useMemo(()=>vt(e),[e]),c=(o==null?void 0:o.indexName)??"",h=u.useCallback(y=>{const A=dt(e,y);return l.jsx(Ae,{layoutSide:y,display:A})},[e]),m=u.useCallback(y=>{if(!o)return l.jsx(l.Fragment,{});if(!Mi(s,y))return l.jsx(l.Fragment,{});const A=o.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[A&&h(y),l.jsx(be,{columnId:e.id,layoutSide:y,value:o,flagDiffs:f})]})},[f,e.id,s,h,o]),D=u.useMemo(()=>a===ce&&(!!(o!=null&&o.description)||!!d),[d,a,o==null?void 0:o.description]),k=n&&!D,p=!!o&&(o.partNames.length>0||o.isUnique||!!(f!=null&&f.isUnique));return o?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[K]:k||void 0,value:c,expandable:!1,expanded:!0,variant:H.body2,subheader:p?m:void 0,usage:M.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:t,...g}),D&&l.jsx(me,{"data-precededby":P.DDL_INDEX_ROW,[K]:n||void 0,value:o.description??"",variant:H.body1,textFontWeight:"normal",textColor:Fe,usage:Z.DdlApiProperty,diff:d,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:t})]}):null};on.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function ln(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:P.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const xr=i=>{const{node:e,[$]:n}=i;return Wt(e)?l.jsx(Cr,{"data-precededby":n,node:e}):l.jsx(Nr,{"data-precededby":n,node:e})},Nr=i=>{const{node:e,[$]:n}=i,t=se(),r=e.value(),a=Bi(e.childrenNodes()),o=u.useMemo(()=>ln(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection}),l.jsx(_e.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:g,isLastInList:f})=>l.jsx(ui,{"data-precededby":g,isLastInList:f,node:s},s.id))})]})},Cr=i=>{const{node:e,[$]:n}=i,t=se(),r=e.value(),a=Bi(e.childrenNodes()),o=u.useMemo(()=>Pe(ye(e)),[e]),s=u.useMemo(()=>ln(a),[a]),g=u.useMemo(()=>Li(e),[e]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:H.h2,usage:M.DdlApiSection,...o}),l.jsx(_e.Provider,{value:t+1,children:s.map(({indexNode:f,titlePrecededBy:d,isLastInList:c})=>Ki(f)?l.jsx(on,{"data-precededby":d,isLastInList:c,hideLevelIndicatorWhenSideEmpty:g,node:f},f.id):l.jsx(ui,{"data-precededby":d,isLastInList:c,node:f},f.id))})]})};xr.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{Re as $,$ as A,Fr as B,kr as C,ir as D,he as E,Lr as F,Ir as G,In as H,xr as I,Pr as J,jr as K,xi as L,le as M,Le as N,Ie as O,P,je as Q,Yr as R,de as S,ee as T,Wr as U,gt as V,Rr as W,Fi as X,Gr as Y,Br as Z,vn as _,Yt as a,kn as a0,wn as a1,qn as a2,Hn as a3,xn as a4,Vn as a5,te as a6,Tr as a7,Hi as a8,_r as a9,Pi as aa,wt as ab,jt as ac,Ft as ad,ye as ae,Pe as af,M as ag,Kr as ah,H as b,me as c,Fe as d,Nn as e,Or as f,Ur as g,Kt as h,Ut as i,$t as j,zt as k,$n as l,E as m,Ge as n,Qn as o,Bn as p,Ai as q,Mr as r,Ci as s,Er as t,ti as u,Me as v,L as w,wi as x,qi as y,jn as z};
