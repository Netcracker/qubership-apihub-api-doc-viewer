var ji=Object.defineProperty;var Oi=(i,e,n)=>e in i?ji(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var V=(i,e,n)=>(Oi(i,typeof e!="symbol"?e+"":e,n),n);import{y as G,n as Ki,i as C,b as Gi,f as He,r as Ui,s as Bi,N as Wi,u as $i,c as Yi,v as Xi,j as zi,D as Ji,d as Qi,C as M,E as Zi,A as _,Q as en,X as nn,O as tn,m as rn,S as an,z as I,P as k,F as me,G as j,K as U,T as R,R as S,a as q,H as P,I as B,J as W,U as on,V as sn,B as ln}from"./take-diff-side-background-color-85ec54fb.js";import{aF as fe,aG as Qe,U as y,aH as dn,aI as un,R as ae,V as fn,T as oe,at as gn,y as E,z as L,F as Y,Y as T,H as se,aD as cn,aA as pn,N as O,av as Z,Z as J,_ as Ne,aE as mn,$ as Ze,W as hn,a0 as yn,l as bn,S as Dn,aJ as ge,u as X,f as he,h as ei}from"./index-71f1bfe0.js";import{j as s}from"./_commonjs-dynamic-modules-6308e768.js";import{r as u}from"./index-f46741a2.js";import{U as vn,D as ii}from"./DiffBadge-51a3ec54.js";class K{constructor(e="#",n="",t,r,a){V(this,"type");V(this,"parent");V(this,"container");V(this,"newDataLevel");V(this,"_value");V(this,"_meta");V(this,"_childrenNodes",[]);V(this,"_nestedNodes",[]);V(this,"_diffs",{});V(this,"_diffsSummary",new Set);V(this,"_descendantDiffs",{});V(this,"_descendantDiffsSummary",new Set);V(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=G.SIMPLE,value:l=null,parent:d=null,container:f=null,newDataLevel:g=!0,meta:c}=a;this.type=o,this.parent=d,this.container=f,this.newDataLevel=g,this._value=l,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new K(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r.copyDiffsFrom(this),r}copyDiffsFrom(e){Object.assign(this._diffs,e._diffs);for(const n of e._diffsSummary)this._diffsSummary.add(n);Object.assign(this._descendantDiffs,e._descendantDiffs);for(const n of e._descendantDiffsSummary)this._descendantDiffsSummary.add(n);Object.assign(this._diffsSeverities,e._diffsSeverities)}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===G.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n)}}class wn extends Ki{constructor(){super()}}const b={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},ni=Object.values(b),ti="<unnamed>";function Vn(i){return i??ti}function ri(i){return i!==ti}function Nn(i,e){return e.indexName&&ri(e.indexName)?e.indexName:i}function mr(i,e,n){return n||(e!=null&&e.indexName&&ri(e.indexName)?e.indexName:String(i))}function xe(i=b.TABLE){return{"/columns":{"/items":{"/*":()=>xe(b.COLUMN)},kind:b.COLUMNS},"/indexes":{"/items":{"/*":()=>xe(b.INDEX)},kind:b.INDEXES},kind:i}}const Oe={Identity:"identity",Expression:"expression"};function xn(i){return i.kind===fe.Literal&&typeof i.value=="string"}function kn(i){return i.kind===fe.RawExpr&&typeof i.expr=="string"}function Cn(i){return C(i)&&typeof i.expr=="string"}function Sn(i){return C(i)&&typeof i.value=="string"}function An(i){if(!C(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!C(n)||!("before"in n)||!("after"in n)?!1:Gi.isDiff(e)}function ai(i){return An(i[He])}function Hn(i){return C(i)&&i.kind===Qe.Domain&&typeof i.type=="string"}function Tn(i){return i.kind===y.BoolType&&typeof i.type=="string"}function qn(i){return i.kind===y.IntegerType&&typeof i.type=="string"}function Ke(i){return i.kind===y.DecimalType&&typeof i.type=="string"}function Ge(i){return i.kind===y.FloatType&&typeof i.type=="string"}function Ue(i){return i.kind===y.StringType&&typeof i.type=="string"}function Be(i){return i.kind===y.BinaryType&&typeof i.type=="string"}function We(i){return i.kind===y.TimeType&&typeof i.type=="string"}function Ln(i){return i.kind===y.JSONType&&typeof i.type=="string"}function _n(i){return i.kind===y.SpatialType&&typeof i.type=="string"}function In(i){return i.kind===y.UUIDType&&typeof i.type=="string"}function Ve(i){return i.kind===y.EnumType&&Array.isArray(i.values)}function En(i){return i.kind===y.UnsupportedType&&typeof i.type=="string"}function $e(i){return typeof i.type=="string"}function Te(i){switch(i.kind){case fe.Literal:return xn(i)?i.value:i.kind;case fe.RawExpr:return kn(i)?i.expr:i.kind;case dn.NamedDefault:try{return Te(un(i))}catch{return i.kind}default:return Cn(i)?i.expr:Sn(i)?i.value:i.kind}}function oi(i){return si(Te(i))}function Fn(i){return si(i)}function si(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Mn="Columns",Rn="Indexes";class Pn{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=ae(n.attrs,oe.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:Mn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:Rn,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:C(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return C(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!C(e)||typeof e.tableName!="string"||!C(e.columns)||!Array.isArray(e.columns.items)||!C(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var v,N,x;const a=ae(t.attrs,oe.Comment),o=(v=t.attrs)==null?void 0:v.find(A=>A.kind===fn.Identity),l=ae(t.attrs,oe.GeneratedExpr),d=o!==void 0||l!==void 0,g=this.findForeignKeysForColumn(n,t).map(A=>this.buildForeignKeyTarget(e,A,t,r)).filter(A=>A!==void 0),c=g.length>0,p=this.formatColumnType(t.type),h=(N=t.type)==null?void 0:N.type,m=h&&Ve(h)?h.values:void 0,D=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:p,...m?{enumValues:m}:{},isPrimaryKey:D,isForeignKey:c,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:d,...o?{generatedBy:Oe.Identity}:{},...l&&!o?{generatedBy:Oe.Expression}:{},...l?{generatedExpression:l.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!D&&((x=t.type)==null?void 0:x.null)===!1,...t.default!==void 0?{defaultValue:oi(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=ae(e.attrs,oe.Comment);return{indexName:Vn(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isSingleColumnUniqueIndexForColumn(e,n){var t,r;return e.unique===!0&&(e.parts??[]).length===1&&((r=(t=(e.parts??[])[0])==null?void 0:t.column)==null?void 0:r.name)===n}isSingleColumnIndexForColumn(e,n){var t,r;return(e.parts??[]).length===1&&((r=(t=(e.parts??[])[0])==null?void 0:t.column)==null?void 0:r.name)===n}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>this.isSingleColumnUniqueIndexForColumn(t,n.name))}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var f,g;const a=((f=n.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,l=(g=n.refColumns)==null?void 0:g[a];if(!o||!l)return;const d=this.resolveForeignKeyTargetSchemaName(e,o,r);if(d)return{schemaName:d,tableName:o.name,columnName:l.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Hn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return Tn(e)?{kind:y.BoolType,typeName:e.type,label:n}:qn(e)?{kind:y.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ke(e)?{kind:y.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ge(e)?{kind:y.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:Ue(e)?{kind:y.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:Be(e)?{kind:y.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:We(e)?{kind:y.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Ln(e)?{kind:y.JSONType,typeName:e.type,label:n}:_n(e)?{kind:y.SpatialType,typeName:e.type,label:n}:In(e)?{kind:y.UUIDType,typeName:e.type,label:n}:Ve(e)?{kind:y.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:En(e)?{kind:y.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:$e(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:Qe.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return Ke(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ue(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Be(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):Ge(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):We(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ve(e)?n=e.type??e.values[0]??"enum":$e(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Te(e.expr):""}}function jn(i){return Ui(i)}const On=new Set([b.TABLE,b.COLUMNS,b.COLUMN,b.INDEXES,b.INDEX]);class qe extends Bi{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!Wi(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,qe.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return On.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case b.TABLE:return["tableName","schemaName","description"];case b.COLUMNS:case b.INDEXES:return["title"];case b.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case b.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}const Kn="[DDL API]";class hr extends $i{constructor(n){const{source:t,tableKey:r,logger:a=Yi()}=n;super();V(this,"tree");V(this,"source");V(this,"tableKey");V(this,"logger");V(this,"nodeDataBuilder");this.source=t,this.tableKey=r,this.logger=a,this.tree=this.createTree(),this.nodeDataBuilder=this.createNodeDataBuilder()}build(){if(!C(this.source)&&!Array.isArray(this.source))return this.tree;const n=this.prepareSource();if(!n)return this.tree;this.logger.debug(`${this.logPrefix} Prepared Source:`,n);const t={parent:null,container:null,ancestors:new Xi},r=xe(),a=jn({source:n,tree:this.tree,supportedNodeKinds:ni,createNodeFromRaw:(o,l,d,f,g)=>this.createNodeFromRaw(o,l,d,f,g),createNodeParams:(o,l,d)=>({value:C(o)&&!Array.isArray(o)?o:null,newDataLevel:!0,parent:l,container:d}),createStateForSimpleNode:(o,l)=>({parent:l,container:null,ancestors:o.ancestors}),createStateForComplexNode:(o,l)=>({parent:o.parent,container:l,ancestors:o.ancestors}),isSimpleNode:o=>this.isSimpleTreeNode(o),isComplexNode:o=>this.isComplexTreeNode(o),resolveNodeKey:(o,l)=>this.resolveNodeKey(o,l)});return gn(n,a,{state:t,rules:r}),this.tree}get logPrefix(){return Kn}createTree(){return new wn}createNodeDataBuilder(){return new qe}prepareSource(){return new Pn(this.logger).transformSourceToTableOrientedSpec(this.source,this.tableKey)}createNodeFromRaw(n,t,r,a,o){const{parent:l,container:d,newDataLevel:f}=o;if(a){const h=this.createNodeMeta(t,o),m={type:G.COMPLEX,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:null,meta:h,newDataLevel:f};return this.tree.createComplexNode(n,t,r,!1,m)}const g=this.createNodeValue(t,r,o),c=this.createNodeMeta(t,o),p={type:G.SIMPLE,parent:this.takeSimpleTreeNode(l),container:this.takeComplexTreeNode(d),value:g,meta:c,newDataLevel:f};return this.tree.createSimpleNode(n,t,r,!1,p)}createNodeMeta(n,t){const{value:r}=t;return this.nodeDataBuilder.createNodeMeta(r)}createNodeValue(n,t,r){const{value:a}=r;return this.nodeDataBuilder.createNodeValue(t,n,a,(o,l)=>this.pick(o,l))}resolveNodeKey(n,t){return C(t)?"columnName"in t&&typeof t.columnName=="string"?t.columnName:"indexName"in t&&typeof t.indexName=="string"?Nn(n,t):n:n}isSimpleTreeNode(n){return n.type===G.SIMPLE}isComplexTreeNode(n){return n.type===G.COMPLEX}takeSimpleTreeNode(n){return n&&this.isSimpleTreeNode(n)?n:null}takeComplexTreeNode(n){return n&&this.isComplexTreeNode(n)?n:null}}function Gn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}const H={NO_DIFFS:"no-diffs",WHOLE_DIFFS:"whole-diffs",PARTIAL_DIFFS:"partial-diffs"};function li(i,e,n){const t=n===T,r=new Set,a=[],o=d=>{const f=e==null?void 0:e[d];if(f)return f;for(const g of Object.values(e??{}))if(g&&Y(g.data)&&g.data.afterValue===d)return g};for(const d of i){const f=o(d);if(!f){a.push({text:d});continue}if(r.has(f))continue;r.add(f);const{data:g}=f;if(E(g)){!t&&typeof g.afterValue=="string"&&a.push({text:g.afterValue,diff:f});continue}if(L(g)){t&&typeof g.beforeValue=="string"&&a.push({text:g.beforeValue,diff:f});continue}if(Y(g)){const c=t?typeof g.beforeValue=="string"?g.beforeValue:d:typeof g.afterValue=="string"?g.afterValue:d;a.push({text:c,diff:f})}}for(const[d,f]of Object.entries(e??{}))!f||r.has(f)||L(f.data)&&t&&(a.push({text:d,diff:f}),r.add(f));const l=d=>{const f=i.indexOf(d);return f>=0?f:i.length};return a.sort((d,f)=>l(d.text)-l(f.text))}function di(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Q(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===T;return E(t)?r?void 0:String(t.afterValue??i??""):L(t)?r?String(t.beforeValue??i??""):void 0:Y(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function Un(i,e){return(e===T?i.styles.before:i.styles.after).isContentVisible}const ui=["size","precision","scale"];function Bn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Wn(i,e){var f;const n=(f=i.value())==null?void 0:f.columnType;if(!n)return{kind:H.NO_DIFFS,text:""};const t=Bn(i);if(!t)return{kind:H.NO_DIFFS,text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if($n(t)){const g=Object.values(t).find(Boolean);return g?{kind:H.WHOLE_DIFFS,text:Yn(n,t,a,e),diff:Jn(g)}:{kind:H.NO_DIFFS,text:n.label}}const o=[],l=Q(ke(n),r,e);l!==void 0&&o.push({text:l,diff:r});const d=Xn(n,t,e);return o.push(...d),o.length===0?{kind:H.NO_DIFFS,text:n.label}:{kind:H.PARTIAL_DIFFS,segments:o}}function $n(i){const e=zi.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function Yn(i,e,n,t){const r=Q(ke(i),e[n],t)??ke(i),a=[];for(const o of ui){const l=Q(Le(i,o),e[o],t);l!==void 0&&a.push(l)}return a.length===0?r:`${r} (${a.join(", ")})`}function Xn(i,e,n){const t=zn(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Q(Le(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...di(r,"spaced")]}function zn(i,e,n){return ui.filter(t=>{const r=e[t];return r?Un(r,n):Le(i,t)!==void 0})}function ke(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function Le(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function Jn(i){const{data:e}=i;return Y(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Yellow}}}:E(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Green}}}:L(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:se.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function Qn(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Zn(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=Qn(i),r=t?li(n,t,e):n.map(l=>({text:l})),a=di(r,"tight");return a.length===0?{kind:H.NO_DIFFS,text:""}:{kind:H.PARTIAL_DIFFS,segments:a}}function et(i){if(ai(i.diffs))return i.diffs[He]}function it(i){const e=i.diffs[O];if(e&&(E(e.data)||L(e.data)))return e}function nt(i){return i.diffs.schemaName}function yr(i){return i.diffs.description}function br(i,e){var o;const n=((o=i.value())==null?void 0:o.schemaName)??"",t=nt(i);if(!t)return n;const r=t.data,a=e===T;return E(r)?a?"":n:L(r)?a?n:"":Y(r)?a?typeof r.beforeValue=="string"?r.beforeValue:n:typeof r.afterValue=="string"?r.afterValue:n:n}function tt(i){if(ai(i.diffs))return i.diffs[He]}function rt(i){const e=i.diffs[O];if(e&&(E(e.data)||L(e.data)))return e}function fi(i,e){return i?(e===T?i.styles.before:i.styles.after).isHeaderVisible:!0}function at(i,e){return i?(e===T?i.styles.before:i.styles.after).isContentVisible:!0}function gi(i){const e=i.diffs[O];return e?E(e.data)||L(e.data):!1}function ot(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function st(i){const e={};let n=!1;for(const t of Ji){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function Ce(i){return i.diffs.generatedExpression}function ci(i){return i.diffs.description}function pi(i){return i.diffs.description}function _e(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function lt(i){return i.diffs.enumValuesRowColorizingDiff}function Ie(i){return i.diffs.defaultValue}function mi(i){return i.diffs.defaultValueRowColorizingDiff}function dt(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Ie(i),r=e===T;if(!t){const l=i.diffs[O];if(l){const d=l.data;if(E(d))return r?void 0:n;if(L(d))return r?n:void 0}return n}const a=t.data;return E(a)?r?void 0:n??le(a.afterValue):L(a)?r?le(a.beforeValue)??n:void 0:Y(a)?r?le(a.beforeValue)??n:le(a.afterValue)??n:n}function le(i){if(typeof i=="string")return Fn(i);if(C(i)&&"kind"in i)return oi(i)}function ut(i,e){var n;return li(((n=i.value())==null?void 0:n.enumValues)??[],_e(i),e).map(({text:t,diff:r})=>({literal:t,diff:r}))}function hi(i){const e={};let n=!1;for(const t of Qi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function ft(i){return i?i.highlightingMode.get(cn.Default)!==pn.Invisible:!1}const gt={[M.DdlApiProperty]:Zi},ct={[M.DdlApiProperty]:["min-h-[26px]"]};function pt(i){const e=gt[i]??nn,n=ct[i]??[];return[e,...n].join(" ")}const ue=u.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=M.Default,hideLevelIndicatorWhenSideEmpty:a=!1}=i,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g}=i,{[_]:c}=i,{diff:p,descendantDiffs:h,diffsSeverities:m}=i,D=Z(),v=r===M.DdlApiProperty,N=u.useMemo(()=>!a||at(p,t),[p,a,t]),x=v&&D>0&&N,A=u.useMemo(()=>{if(!p)return[];const{data:we,styles:re}=p;if(!we)return[];const w=[];return t===T&&w.push(J.background(re.before.backgroundColor)),t===Ne&&w.push(J.background(re.after.backgroundColor)),w},[p,t]),ve=u.useMemo(()=>pt(r),[r]),te=s.jsx(en,{label:o,labelFontWeight:l,textFontWeight:d,labelColor:f,textColor:g,value:e,variant:n,layoutSide:t,diff:p});return s.jsxs("div",{"data-precededby":c,className:`text-row-content flex w-full h-full ${v?"items-stretch":""} ${ve} gap-2 ${A.join(" ")}`,children:[x&&s.jsxs("div",{"data-precededby":c,className:"level-indicator-column flex items-stretch self-stretch",children:[s.jsx(mn,{level:D}),s.jsx("div",{className:"w-4","aria-hidden":"true"})]}),v?s.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:te}):te]})});ue.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=u.memo(i=>{const e=Ze(),{diffsSeverities:n,diffsSeverityPlacement:t=hn.DescriptionRow}=i,r=u.useMemo(()=>n==null?void 0:n[t],[n,t]),a=u.useMemo(()=>r==null?void 0:r.type,[r]),o=u.useMemo(()=>yn(r==null?void 0:r.causedAt),[r]);switch(e){case Dn:return s.jsx(rn,{diffType:a,diffTypeCause:o,hidden:!1,children:s.jsx(an,{left:s.jsx(ue,{...i,layoutSide:T}),right:s.jsx(ue,{...i,layoutSide:Ne})})});case bn:return s.jsx(tn,{content:s.jsx(ue,{...i,layoutSide:Ne})})}return s.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const ye="#353C4E";function Dr(i,e){return u.useMemo(()=>e(i)?ie(i):{},[e,i])}function ie(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function be(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:l,nodeDescendantDiffs:d,nodeDiffsSeverities:f}=i;if(!l)return{};const g=Object.entries(l),c=m=>{const D=g.find(([v])=>v===String(m));return D==null?void 0:D[1]},p=n?c(n):void 0;return{diff:o?o(l,c):t?l[O]??p:p,...r?{descendantDiffs:d}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function mt(i){return ni.includes(i.kind)}function vr(i){return i.childrenNodes().filter(mt)}function ht(i){return i.kind===b.TABLE}function wr(i){return ht(i)&&i instanceof K}function yt(i){return i.kind===b.COLUMNS}function bt(i){return yt(i)&&i instanceof K}function Dt(i){return vt(i)&&i instanceof K}function yi(i){return i.kind===b.COLUMN}function Ee(i){return yi(i)&&i instanceof K}function vt(i){return i.kind===b.INDEXES}function bi(i){return i.kind===b.INDEX}function Di(i){return bi(i)&&i instanceof K}function vi(i){return i.filter(yi)}function wi(i){return i.filter(bi)}const wt=u.createContext(null);function Vt(){const i=u.useContext(wt);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Nt=({href:i,className:e,children:n})=>s.jsx("a",{href:i,className:e,children:n});Nt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};const Vi=rt;function Ni(i){const e=be(ie(i),{resolveDiff:()=>tt(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Vr(i){const e=be(ie(i),{resolveDiff:()=>et(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}const Nr=it,xt="ux-badge_ddlapi_primary-key",xi="ux-badge_ddlapi_foreign-key",kt="ux-badge_ddlapi_unique",Ct="ux-badge_ddlapi_not-null",St="ux-badge_ddlapi_generated",At="public",ki="Default",Ci="As",Si="Values";function Ht(i){return i?!!(ge(i.defaultValue)||ge(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}function ce(i){return i!=null}let Ai=class{resolveNodeVisibility(e,n){const t=e.value(),r=this.resolveDescriptionRowVisible(t,n),a=this.resolveEnumValuesRowVisible(t,n),o=this.resolveDefaultRowVisible(t,n),l=this.resolveGeneratedRowVisible(t,n);return{showDescription:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l,showAnyAdditionalInfoRow:a||o||l}}resolveListLastRowFlags(e,n){return this.resolveListLastRowFlagsFromVisibility(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return this.resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,n)}resolveListLastRowFlagsFromVisibility(e,n){const{showDescription:t,showAnyAdditionalInfoRow:r,showEnumValuesRow:a,showDefaultRow:o,showGeneratedRow:l}=n;return{isTitleListLastRow:e&&!t&&!r,isDescriptionListLastRow:e&&t&&!r,isEnumAdditionalInfoListLastRow:e&&a&&!o&&!l,isDefaultAdditionalInfoListLastRow:e&&o&&!l,isGeneratedAdditionalInfoListLastRow:e&&l}}resolveAdditionalInfoRowUsesAfterRowPrecededByFromVisibility(e,n){return n==="default"?e.showEnumValuesRow:e.showEnumValuesRow||e.showDefaultRow}resolveDescriptionRowVisible(e,n){return I(n)&&!!(e!=null&&e.description)}resolveEnumValuesRowVisible(e,n){return I(n)&&!!(e!=null&&e.enumValues&&e.enumValues.length>0)}resolveDefaultRowVisible(e,n){return I(n)&&ce(e==null?void 0:e.defaultValue)}resolveGeneratedRowVisible(e,n){return I(n)&&ce(e==null?void 0:e.generatedExpression)}};const Fe=new Ai;function Tt(i,e){return Fe.resolveNodeVisibility(i,e)}function qt(i,e){return Fe.resolveListLastRowFlags(i,e)}function Ye(i,e){return Fe.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function $(i,e){return i?(e===T?i.styles.before:i.styles.after).textHighlighterColor:void 0}function Hi(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===At?e:`${i.schemaName}.${e}`}function Lt(i){return i.join(", ")}const Se=u.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Vt(),o=u.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),l=u.useMemo(()=>["ddlapi-foreign-key-link",J.highlighter(t)].filter(Boolean).join(" "),[t]),d=s.jsx(a,{href:o,className:l,children:Hi(e)});return n?d:s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(vn,{text:"FK",colorSchema:xi,inline:!0}),d]})});Se.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function _t(){return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Ti(i,e){return!!i||!!e}function Me(i,e){return i?e===T?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function It(i,e,n){return Ti(i,e)&&Me(e,n)}function de(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:l}=i;if(!Ti(r,a))return null;if(!Me(a,l))return _t();const d=ft(a)?a==null?void 0:a.data:void 0;return s.jsx(ii,{label:n,colorSchema:t,layoutMode:o,layoutSide:l,isNodeChanged:!1,isContentChanged:!!d,$changes:d},Ft(e,n))}function Et(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=Mt(e,n),l=$(t,a);if(t&&!Me(t,a))return s.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return s.jsx(Se,{target:n},o);const d=t.data;return s.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[s.jsx(ii,{label:"FK",colorSchema:xi,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:d}),s.jsx(Se,{target:n,hideBadge:!0,textHighlighterColor:l})]},o)}const ne=u.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=Ze(),l=u.useMemo(()=>t??{},[t]),d=u.useMemo(()=>r??{},[r]),f=u.useMemo(()=>de({columnId:e,label:"PK",colorSchema:xt,flagValue:n.isPrimaryKey,flagDiff:l.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,l.isPrimaryKey,o,a,n.isPrimaryKey]),g=u.useMemo(()=>It(n.isPrimaryKey,l.isPrimaryKey,a),[l.isPrimaryKey,a,n.isPrimaryKey]),c=u.useMemo(()=>de({columnId:e,label:"unique",colorSchema:kt,flagValue:n.isUnique,flagDiff:l.isUnique,layoutMode:o,layoutSide:a}),[e,l.isUnique,o,a,n.isUnique]),p=u.useMemo(()=>g?null:de({columnId:e,label:"not null",colorSchema:Ct,flagValue:n.isNotNull,flagDiff:l.isNotNull,layoutMode:o,layoutSide:a}),[e,l.isNotNull,g,o,a,n.isNotNull]),h=u.useMemo(()=>de({columnId:e,label:"generated",colorSchema:St,flagValue:n.isGenerated,flagDiff:l.isGenerated,layoutMode:o,layoutSide:a}),[e,l.isGenerated,o,a,n.isGenerated]),m=u.useMemo(()=>{const v=n.foreignKeyTargets??[];return v.length===0?[]:v.map(N=>Et({columnId:e,target:N,targetDiff:d[Gn(N)],layoutMode:o,layoutSide:a}))},[e,o,a,d,n.foreignKeyTargets]),D=u.useMemo(()=>[f,c,p,h,...m].filter(Boolean),[m,h,p,f,c]);return D.length===0?null:s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:D})});function Ft(i,e){return`${i}-${e}`}function Mt(i,e){return`${i}-FK-${Hi(e)}`}ne.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Re=i=>{const{node:e,additionalInfoPrecededBy:n=k.DDL_COLUMN_ROW,isLastInList:t=!1,[_]:r}=i,a=X(),o=e.value(),l=u.useMemo(()=>Tt(e,a),[e,a]),d=u.useMemo(()=>qt(t,l),[t,l]),f=u.useCallback(h=>o?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(me,{isVisible:!0,value:o.columnType.label,appearance:j.Text}),s.jsx(ne,{columnId:e.id,layoutSide:h,value:o})]}):s.jsx(s.Fragment,{}),[e.id,o]),g=u.useCallback(h=>{const m=o==null?void 0:o.defaultValue;return ge(m)?s.jsx(U,{isVisible:!0,value:m}):s.jsx(s.Fragment,{})},[o]),c=u.useCallback(h=>{const m=o==null?void 0:o.generatedExpression;return ge(m)?s.jsx(U,{isVisible:!0,value:m}):s.jsx(s.Fragment,{})},[o]),p=u.useCallback(h=>{var m;return(m=o==null?void 0:o.enumValues)!=null&&m.length?s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((D,v)=>s.jsx(U,{isVisible:!0,value:D},`${D}-${v}`))}):s.jsx(s.Fragment,{})},[o]);return o?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(R,{"data-precededby":r,[S]:d.isTitleListLastRow||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:q.body2,subheader:f,usage:P.DdlApiProperty}),l.showDescription&&s.jsx(ee,{"data-precededby":k.DDL_COLUMN_ROW,[S]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:q.body2,textFontWeight:"normal",textColor:ye,usage:M.DdlApiProperty}),l.showEnumValuesRow&&s.jsx(B,{usage:W.DdlApiProperty,"data-precededby":n,[S]:d.isEnumAdditionalInfoListLastRow||void 0,label:Si,subheader:p}),l.showDefaultRow&&s.jsx(B,{usage:W.DdlApiProperty,"data-precededby":Ye(l,"default")?k.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[S]:d.isDefaultAdditionalInfoListLastRow||void 0,label:ki,subheader:g}),l.showGeneratedRow&&s.jsx(B,{usage:W.DdlApiProperty,"data-precededby":Ye(l,"generated")?k.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[S]:d.isGeneratedAdditionalInfoListLastRow||void 0,label:Ci,subheader:c})]}):null};Re.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Xe(i,e){return i?(e===T?i.styles.before:i.styles.after).borderShadowColor:void 0}function Rt(i,e){return i?(e===T?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Pt(i){if(Ee(i))return ot(i)}function jt(i){if(Ee(i))return st(i)}function Ot(i){if(Di(i))return hi(i)}const ze=new Ai;class Kt{resolveNodeVisibility(e,n){const t=e.value(),r=this.isWholeNodeAddOrRemove(e),a=this.resolveDescriptionRowVisible(t,ci(e),n),o=this.resolveEnumValuesRowVisible(t,_e(e),n),l=this.resolveDefaultRowVisible(t,Ie(e),mi(e),r,n),d=this.resolveGeneratedRowVisible(t,Ce(e),n);return{showDescription:a,showEnumValuesRow:o,showDefaultRow:l,showGeneratedRow:d,showAnyAdditionalInfoRow:o||l||d}}resolveListLastRowFlags(e,n){return ze.resolveListLastRowFlags(e,n)}resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n){return ze.resolveAdditionalInfoRowUsesAfterRowPrecededBy(e,n)}resolveGeneratedExpressionSideDisplay(e,n){var a;const t=(a=e.value())==null?void 0:a.generatedExpression,r=Ce(e);return Q(t,r,n)}isWholeNodeAddOrRemove(e){const n=e.diffs[O];return!!n&&(E(n.data)||L(n.data))}resolveDescriptionRowVisible(e,n,t){return I(t)&&(!!(e!=null&&e.description)||!!n)}resolveEnumValuesRowVisible(e,n,t){return I(t)&&(!!(e!=null&&e.enumValues&&e.enumValues.length>0)||!!n)}resolveDefaultRowVisible(e,n,t,r,a){const o=ce(e==null?void 0:e.defaultValue)||!!n||!!t;return I(a)&&o}resolveGeneratedRowVisible(e,n,t){return I(t)&&(ce(e==null?void 0:e.generatedExpression)||!!n)}}const De=new Kt;function Gt(i,e){return De.resolveNodeVisibility(i,e)}function Ut(i,e){return De.resolveListLastRowFlags(i,e)}function Je(i,e){return De.resolveAdditionalInfoRowUsesAfterRowPrecededBy(i,e)}function Bt(i,e){return De.resolveGeneratedExpressionSideDisplay(i,e)}function Wt(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=on({appearance:e});return u.useMemo(()=>[r,J.highlighter(n),J.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const Pe=u.memo(i=>{const{isVisible:e,value:n,appearance:t=j.Text,textHighlighterColor:r,backgroundColor:a}=i,o=Wt({appearance:t,textHighlighterColor:r,backgroundColor:a});return s.jsx(sn,{isVisible:e,value:n,className:o})});Pe.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function $t(i){return i.text===", "||i.text===","}function Ae(i,e,n,t){return i.diff?s.jsx(Pe,{isVisible:!0,value:i.text,appearance:j.Text,textHighlighterColor:$(i.diff,n),backgroundColor:t?ln(i.diff,n):void 0},`${i.text}-${e}`):s.jsx(me,{isVisible:!0,value:i.text,appearance:j.Text},`${i.text}-${e}`)}function Yt(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if($t(r)){t=!0;return}t&&(n.push(s.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(Ae(r,a,e,!1))}),n}const pe=u.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind===H.NO_DIFFS?Ae({text:e.text},0,n,!1):e.kind===H.WHOLE_DIFFS?Ae({text:e.text,diff:e.diff},0,n,!0):s.jsx("span",{className:"inline-flex items-center",children:Yt(e.segments,n)})});pe.__docgenInfo={description:"",methods:[],displayName:"CommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""},display:{required:!0,tsType:{name:"union",raw:`| {
  readonly kind: typeof SideListDisplayKinds.NO_DIFFS
  readonly text: string
}
| {
  readonly kind: typeof SideListDisplayKinds.WHOLE_DIFFS
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}
| {
  readonly kind: typeof SideListDisplayKinds.PARTIAL_DIFFS
  readonly segments: readonly ListSideSegment[]
}`,elements:[{name:"signature",type:"object",raw:`{
  readonly kind: typeof SideListDisplayKinds.NO_DIFFS
  readonly text: string
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.NO_DIFFS",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  readonly kind: typeof SideListDisplayKinds.WHOLE_DIFFS
  readonly text: string
  readonly diff: ChangedPropertyMetaData
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.WHOLE_DIFFS",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"diff",value:{name:"signature",type:"object",raw:`{
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
  readonly kind: typeof SideListDisplayKinds.PARTIAL_DIFFS
  readonly segments: readonly ListSideSegment[]
}`,signature:{properties:[{key:"kind",value:{name:"SideListDisplayKinds.PARTIAL_DIFFS",required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Xt(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function zt(i,e,n){return i.diff?s.jsx(Pe,{isVisible:!0,value:i.text,appearance:j.Text,textHighlighterColor:$(i.diff,n)},`${i.text}-${e}`):s.jsx(me,{isVisible:!0,value:i.text,appearance:j.Text},`${i.text}-${e}`)}const qi=u.memo(i=>{const{node:e,layoutSide:n}=i,t=Wn(e,n);if(t.kind===H.NO_DIFFS||t.kind===H.WHOLE_DIFFS)return s.jsx(pe,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=Xt(t.segments);return s.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,l)=>zt(o,l,n)),a.length>0&&s.jsx(pe,{layoutSide:n,display:{kind:H.PARTIAL_DIFFS,segments:a}})]})});qi.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Li=i=>{const{node:e,additionalInfoPrecededBy:n=k.DDL_COLUMN_ROW,isLastInList:t=!1,hideLevelIndicatorWhenSideEmpty:r=!1,[_]:a}=i,o=X(),l=e.value(),d=u.useMemo(()=>Vi(e),[e]),f=u.useMemo(()=>Ni(e),[e]),g=u.useMemo(()=>jt(e),[e]),c=u.useMemo(()=>Pt(e),[e]),p=u.useMemo(()=>ci(e),[e]),h=u.useMemo(()=>Ce(e),[e]),m=u.useMemo(()=>_e(e),[e]),D=u.useMemo(()=>lt(e),[e]),v=u.useMemo(()=>Ie(e),[e]),N=u.useMemo(()=>mi(e),[e]),x=u.useMemo(()=>Gt(e,o),[e,o]),A=u.useMemo(()=>Ut(t,x),[t,x]),ve=u.useCallback(w=>l?fi(d,w)?s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(qi,{node:e,layoutSide:w}),s.jsx(ne,{columnId:e.id,layoutSide:w,value:l,flagDiffs:g,foreignKeyTargetDiffs:c})]}):s.jsx(s.Fragment,{}):s.jsx(s.Fragment,{}),[g,c,e,d,l]),te=u.useCallback(w=>{const F=dt(e,w);return F===void 0?s.jsx(s.Fragment,{}):s.jsx(U,{isVisible:!0,value:F,textHighlighterColor:$(v,w),borderShadowColor:Xe(v,w)})},[v,e]),we=u.useCallback(w=>{const F=Bt(e,w);return F===void 0?s.jsx(s.Fragment,{}):s.jsx(U,{isVisible:!0,value:F,textHighlighterColor:$(h,w)})},[h,e]),re=u.useCallback(w=>{const F=ut(e,w);return F.length===0?s.jsx(s.Fragment,{}):s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:F.map((z,Pi)=>s.jsx(U,{isVisible:!0,value:z.literal,textHighlighterColor:$(z.diff,w),borderShadowColor:Xe(z.diff,w),isFontMuted:Rt(z.diff,w)},`${z.literal}-${Pi}`))})},[e]);return l?s.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(R,{"data-precededby":a,[S]:A.isTitleListLastRow||void 0,value:l.columnName,expandable:!1,expanded:!0,variant:q.body2,subheader:ve,usage:P.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:r,...f}),x.showDescription&&s.jsx(ee,{"data-precededby":k.DDL_COLUMN_ROW,[S]:A.isDescriptionListLastRow||void 0,value:l.description??"",variant:q.body2,textFontWeight:"normal",textColor:ye,usage:M.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r}),x.showEnumValuesRow&&s.jsx(B,{usage:W.DdlApiProperty,"data-precededby":n,[S]:A.isEnumAdditionalInfoListLastRow||void 0,label:Si,subheader:re,colorizingDiff:D,diffsSeverities:m||D?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),x.showDefaultRow&&s.jsx(B,{usage:W.DdlApiProperty,"data-precededby":Je(x,"default")?k.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[S]:A.isDefaultAdditionalInfoListLastRow||void 0,label:ki,subheader:te,colorizingDiff:N,diffsSeverities:v||N?e.diffsSeverities:void 0,hideLevelIndicatorWhenSideEmpty:r}),x.showGeneratedRow&&s.jsx(B,{usage:W.DdlApiProperty,"data-precededby":Je(x,"generated")?k.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[S]:A.isGeneratedAdditionalInfoListLastRow||void 0,label:Ci,subheader:we,diff:h,colorizingDiff:e.diffs[O],diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:r})]}):null};Li.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function _i(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=n?k.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:k.DDL_COLUMN_ROW,l=n?k.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:k.DDL_COLUMN_ROW,d={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:l,isLastInList:a};return n=e&&Ht(t.value()),d})}const Jt=i=>{const{node:e,[_]:n}=i;return bt(e)?s.jsx(Zt,{"data-precededby":n,node:e}):s.jsx(Qt,{"data-precededby":n,node:e})},Qt=i=>{const{node:e,[_]:n}=i,t=Z(),r=X(),a=e.value(),o=vi(e.childrenNodes()),l=r===ei,d=u.useMemo(()=>_i(o,l),[o,l]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(R,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:q.h2,usage:P.DdlApiSection}),s.jsx(he.Provider,{value:t+1,children:d.map(({columnNode:f,titlePrecededBy:g,additionalInfoPrecededBy:c,isLastInList:p})=>s.jsx(Re,{"data-precededby":g,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})},Zt=i=>{const{node:e,[_]:n}=i,t=Z(),r=X(),a=e.value(),o=vi(e.childrenNodes()),l=r===ei,d=u.useMemo(()=>be(ie(e)),[e]),f=u.useMemo(()=>_i(o,l),[o,l]),g=u.useMemo(()=>gi(e),[e]);return o.length===0?null:s.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[s.jsx(R,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:q.h2,usage:P.DdlApiSection,...d}),s.jsx(he.Provider,{value:t+1,children:f.map(({columnNode:c,titlePrecededBy:p,additionalInfoPrecededBy:h,isLastInList:m})=>Ee(c)?s.jsx(Li,{"data-precededby":p,additionalInfoPrecededBy:h,isLastInList:m,hideLevelIndicatorWhenSideEmpty:g,node:c},c.id):s.jsx(Re,{"data-precededby":p,additionalInfoPrecededBy:h,isLastInList:m,node:c},c.id))})]})};Jt.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
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
>`}]},description:""}}};let Ii=class{resolveNodeVisibility(e,n){const t=e.value();return{showDescription:this.resolveDescriptionRowVisible(t,n),showSubheader:this.resolveSubheaderVisible(t)}}resolveListLastRowFlags(e,n){return this.resolveListLastRowFlagsFromVisibility(e,n)}resolveListLastRowFlagsFromVisibility(e,n){const{showDescription:t}=n;return{isTitleListLastRow:e&&!t,isDescriptionListLastRow:e&&t}}resolveDescriptionRowVisible(e,n){return I(n)&&!!(e!=null&&e.description)}resolveSubheaderVisible(e){return!!e&&(e.partNames.length>0||e.isUnique)}};const Ei=new Ii;function er(i,e){return Ei.resolveNodeVisibility(i,e)}function ir(i,e){return Ei.resolveListLastRowFlags(i,e)}const je=i=>{const{node:e,isLastInList:n=!1,[_]:t}=i,r=X(),a=e.value(),o=u.useMemo(()=>er(e,r),[e,r]),l=u.useMemo(()=>ir(n,o),[n,o]),d=(a==null?void 0:a.indexName)??"",f=u.useCallback(c=>{if(!a)return s.jsx(s.Fragment,{});const p=Lt(a.partNames);return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&s.jsx(me,{isVisible:!0,value:`(${p})`,appearance:j.Text}),s.jsx(ne,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=o.showDescription;return a?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(R,{"data-precededby":t,[S]:l.isTitleListLastRow||void 0,value:d,expandable:!1,expanded:!0,variant:q.body2,subheader:o.showSubheader?f:void 0,usage:P.DdlApiProperty}),g&&s.jsx(ee,{"data-precededby":k.DDL_INDEX_ROW,[S]:l.isDescriptionListLastRow||void 0,value:a.description??"",variant:q.body1,textFontWeight:"normal",textColor:ye,usage:M.DdlApiProperty})]}):null};je.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const nr=new Ii;class tr{resolveNodeVisibility(e,n){var r;const t=e.value();return{showDescription:this.resolveDescriptionRowVisible(t,pi(e),n),showSubheader:this.resolveSubheaderVisible(t,(r=hi(e))==null?void 0:r.isUnique)}}resolveListLastRowFlags(e,n){return nr.resolveListLastRowFlags(e,n)}resolveDescriptionRowVisible(e,n,t){return I(t)&&(!!(e!=null&&e.description)||!!n)}resolveSubheaderVisible(e,n){return!!e&&(e.partNames.length>0||e.isUnique||!!n)}}const Fi=new tr;function rr(i,e){return Fi.resolveNodeVisibility(i,e)}function ar(i,e){return Fi.resolveListLastRowFlags(i,e)}const Mi=i=>{const{node:e,isLastInList:n=!1,hideLevelIndicatorWhenSideEmpty:t=!1,[_]:r}=i,a=X(),o=e.value(),l=u.useMemo(()=>rr(e,a),[e,a]),d=u.useMemo(()=>ar(n,l),[n,l]),f=u.useMemo(()=>Vi(e),[e]),g=u.useMemo(()=>Ni(e),[e]),c=u.useMemo(()=>Ot(e),[e]),p=u.useMemo(()=>pi(e),[e]),h=(o==null?void 0:o.indexName)??"",m=u.useCallback(N=>{const x=Zn(e,N);return s.jsx(pe,{layoutSide:N,display:x})},[e]),D=u.useCallback(N=>{if(!o)return s.jsx(s.Fragment,{});if(!fi(f,N))return s.jsx(s.Fragment,{});const x=o.partNames.length>0;return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[x&&m(N),s.jsx(ne,{columnId:e.id,layoutSide:N,value:o,flagDiffs:c})]})},[c,e.id,f,m,o]),v=l.showDescription;return o?s.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[s.jsx(R,{"data-precededby":r,[S]:d.isTitleListLastRow||void 0,value:h,expandable:!1,expanded:!0,variant:q.body2,subheader:l.showSubheader?D:void 0,usage:P.DdlApiProperty,hideLevelIndicatorWhenSideEmpty:t,...g}),v&&s.jsx(ee,{"data-precededby":k.DDL_INDEX_ROW,[S]:d.isDescriptionListLastRow||void 0,value:o.description??"",variant:q.body1,textFontWeight:"normal",textColor:ye,usage:M.DdlApiProperty,diff:p,diffsSeverities:e.diffsSeverities,hideLevelIndicatorWhenSideEmpty:t})]}):null};Mi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};function Ri(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:k.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const or=i=>{const{node:e,[_]:n}=i;return Dt(e)?s.jsx(lr,{"data-precededby":n,node:e}):s.jsx(sr,{"data-precededby":n,node:e})},sr=i=>{const{node:e,[_]:n}=i,t=Z(),r=e.value(),a=wi(e.childrenNodes()),o=u.useMemo(()=>Ri(a),[a]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(R,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:q.h2,usage:P.DdlApiSection}),s.jsx(he.Provider,{value:t+1,children:o.map(({indexNode:l,titlePrecededBy:d,isLastInList:f})=>s.jsx(je,{"data-precededby":d,isLastInList:f,node:l},l.id))})]})},lr=i=>{const{node:e,[_]:n}=i,t=Z(),r=e.value(),a=wi(e.childrenNodes()),o=u.useMemo(()=>be(ie(e)),[e]),l=u.useMemo(()=>Ri(a),[a]),d=u.useMemo(()=>gi(e),[e]);return a.length===0?null:s.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[s.jsx(R,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:q.h2,usage:P.DdlApiSection,...o}),s.jsx(he.Provider,{value:t+1,children:l.map(({indexNode:f,titlePrecededBy:g,isLastInList:c})=>Di(f)?s.jsx(Mi,{"data-precededby":g,isLastInList:c,hideLevelIndicatorWhenSideEmpty:d,node:f},f.id):s.jsx(je,{"data-precededby":g,isLastInList:c,node:f},f.id))})]})};or.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"union",raw:`| DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
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
>`}]},description:""}}};export{ie as A,be as B,Jt as C,At as D,Dr as E,or as I,K as S,ee as T,vt as a,ye as b,hr as c,ht as d,wt as e,Nt as f,vr as g,Pn as h,yt as i,Ve as j,Gn as k,Fn as l,oi as m,ri as n,qe as o,b as p,An as q,mr as r,ni as s,$ as t,Nr as u,Vr as v,nt as w,yr as x,br as y,wr as z};
