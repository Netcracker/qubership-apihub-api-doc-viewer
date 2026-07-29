var nn=Object.defineProperty;var tn=(i,e,n)=>e in i?nn(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var O=(i,e,n)=>(tn(i,typeof e!="symbol"?e+"":e,n),n);import{u as Y,v as K,x as Fe,w as B,U as Oe,V as ii,W as Ve,N as fe,X as fi,P as S,Y as an,Z as rn,K as he,Q as on,M as me,_ as E,H as oe,$ as Pe,a0 as De,a1 as ln,a2 as J,a3 as P,a4 as gi,a5 as ge,a6 as xe,a7 as we,R as ci,a8 as Be,k as We,S as Ye,a9 as sn,aa as dn,y as un,ab as X,ac as fn,ad as pi,ae as le,h as se,f as hi}from"./DiffBadge-40fbf5b6.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const ni={SIMPLE:"simple",COMPLEX:"complex"},gn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},cn=Object.values(gn);new Set(cn);class Ne{aggregateByDescendantDiffs(e,n,t,r){}static isDiffsRecord(e){if(!M(e))return!1;for(const n of Object.values(e))if(!Ne.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return M(n)&&(Y(n)||K(n)||Fe(n)||B(n))}}function M(i){return mi(i)&&!Array.isArray(i)}function mi(i){return typeof i=="object"&&i!==null}function pn(i){return M(i)&&Object.keys(i).every(e=>typeof e=="string")}function Le(i){return Array.isArray(i)}function sa(i,e,n){let t=i,r=!1;for(const a of e){if(!M(t)&&!Le(t))return;if(r){let s;mi(t)&&(s=t[a]),!s&&Le(t)&&n&&(s=t.find(g=>M(g)&&g[n]===a)),t=s,r=!1;continue}t=t[a],Le(t)&&(r=!0)}return t}function da(i,e){return Object.keys(i).find(n=>i[n]===e)}function ua(i){if(Ne.isDiffsRecord(i))return i}class fa{constructor(){O(this,"tree",null)}pick(e,n){if(!M(e))return null;const t={};for(const r of n){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?t[a]=[...o]:M(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const ye=()=>{},ga=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ye,info:ye,warn:ye,error:ye};function hn(i){return i==null||!M(i)&&!Oe(i)}function ca(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:g,isComplexNode:u,resolveNodeKey:f,isDisallowedValue:c=hn,shouldStopAfterNodeCreation:p}=i;return[({value:m,state:y,key:I,path:v})=>{if(typeof I=="symbol")return;if(!M(m)&&!Oe(m))return{value:m};const{alreadyConvertedValuesCache:N,parent:b,container:C}=y,x=N.get(m);if(!x||!g(x)&&!u(x))return{value:m};if(!b||!g(b))return{value:m};const T="#"+ii(v),q=f(I,m),_=n.createCycledClone(x,T,q,b);return C?C.addNestedNode(_):b&&b.addChildNode(_),{done:!0}},({key:m,value:y,path:I,state:v,rules:N})=>!N||!Array.isArray(N.transformers)?void 0:{value:N.transformers.reduce((x,T)=>T(m,x,e,I,v),y)},({key:m,value:y,path:I,rules:v,state:N})=>{if(!v)return{done:!0};if(typeof m=="symbol")return{done:!0};if(c(y))return{done:!0};if(!v.kind||!t.includes(v.kind))return;const{parent:b,container:C}=N,x="#"+ii(I),T=f(m,y),{kind:q,complex:_=!1}=v,k=a(y,b,C),F=r(x,T,q,_,k);if(!F)return;C?C.addNestedNode(F):b&&b.addChildNode(F);let ae=y;if(p!=null&&p(F,y)){const z=b?b.descendantDiffs:void 0;if(!z||!(m in z))return{done:!0};const w=z[m];if(!w)return{done:!0};const{data:W}=w;B(W)&&(ae=W.beforeValue)}const Z=new Map(N.alreadyConvertedValuesCache);(M(y)||Oe(y))&&Z.set(y,F);let R;return g(F)?R=o(N,F,Z):R=s(N,F,Z),{value:ae,state:R}}]}class mn{}class Ae{constructor(e="#",n="",t,r,a){O(this,"type");O(this,"parent");O(this,"container");O(this,"newDataLevel");O(this,"_value");O(this,"_meta");O(this,"_childrenNodes",[]);O(this,"_nestedNodes",[]);O(this,"_diffs",{});O(this,"_diffsSummary",new Set);O(this,"_descendantDiffs",{});O(this,"_descendantDiffsSummary",new Set);O(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=ni.SIMPLE,value:s=null,parent:g=null,container:u=null,newDataLevel:f=!0,meta:c}=a;this.type=o,this.parent=g,this.container=u,this.newDataLevel=f,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new Ae(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===ni.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const L={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},yn=Object.values(L),yi="<unnamed>";function bn(i){return i??yi}function bi(i){return i!==yi}function pa(i,e){return e.indexName&&bi(e.indexName)?e.indexName:i}function ha(i,e,n){return n||(e!=null&&e.indexName&&bi(e.indexName)?e.indexName:String(i))}function ti(i=L.TABLE){return{"/columns":{"/items":{"/*":()=>ti(L.COLUMN)},kind:L.COLUMNS},"/indexes":{"/items":{"/*":()=>ti(L.INDEX)},kind:L.INDEXES},kind:i}}function Dn(i){return i.kind===Ve.Literal&&typeof i.value=="string"}function vn(i){return i.kind===Ve.RawExpr&&typeof i.expr=="string"}function kn(i){return M(i)&&typeof i.expr=="string"}function Hn(i){return M(i)&&typeof i.value=="string"}const Se="titleRow",Vn=["typeName","size","precision","scale","label"],ma={ToEnum:"to-enum",FromEnum:"from-enum"},ya={Lost:"lost",Gained:"gained"},Di=["isPrimaryKey","isUnique","isNotNull","isGenerated"],vi=["isUnique"],ba=[fe,Se,"columnName","description","generatedExpression",...Di],Da=[fe,Se,"indexName",...vi];function xn(i){if(!M(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!M(n)||!("before"in n)||!("after"in n)?!1:Ne.isDiff(e)}function Cn(i){return xn(i[Se])}function qn(i){return M(i)&&i.kind===fi.Domain&&typeof i.type=="string"}function wn(i){return i.kind===S.BoolType&&typeof i.type=="string"}function Nn(i){return i.kind===S.IntegerType&&typeof i.type=="string"}function ai(i){return i.kind===S.DecimalType&&typeof i.type=="string"}function ri(i){return i.kind===S.FloatType&&typeof i.type=="string"}function oi(i){return i.kind===S.StringType&&typeof i.type=="string"}function li(i){return i.kind===S.BinaryType&&typeof i.type=="string"}function si(i){return i.kind===S.TimeType&&typeof i.type=="string"}function An(i){return i.kind===S.JSONType&&typeof i.type=="string"}function Sn(i){return i.kind===S.SpatialType&&typeof i.type=="string"}function Tn(i){return i.kind===S.UUIDType&&typeof i.type=="string"}function Ie(i){return i.kind===S.EnumType&&Array.isArray(i.values)}function _n(i){return i.kind===S.UnsupportedType&&typeof i.type=="string"}function di(i){return typeof i.type=="string"}function $e(i){switch(i.kind){case Ve.Literal:return Dn(i)?i.value:i.kind;case Ve.RawExpr:return vn(i)?i.expr:i.kind;case an.NamedDefault:try{return $e(rn(i))}catch{return i.kind}default:return kn(i)?i.expr:Hn(i)?i.value:i.kind}}function ki(i){return Hi($e(i))}function En(i){return Hi(i)}function Hi(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const Mn="Columns",Ln="Indexes";class va{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=he(n.attrs,me.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:Mn,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:Ln,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:M(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return M(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!M(e)||typeof e.tableName!="string"||!M(e.columns)||!Array.isArray(e.columns.items)||!M(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var m,y,I;const a=he(t.attrs,me.Comment),o=(m=t.attrs)==null?void 0:m.find(v=>v.kind===on.Identity),s=he(t.attrs,me.GeneratedExpr),g=o!==void 0||s!==void 0,f=this.findForeignKeysForColumn(n,t).map(v=>this.buildForeignKeyTarget(e,v,t,r)).filter(v=>v!==void 0),c=f.length>0,p=this.formatColumnType(t.type),D=(y=t.type)==null?void 0:y.type,H=D&&Ie(D)?D.values:void 0,h=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:p,...H?{enumValues:H}:{},isPrimaryKey:h,isForeignKey:c,...f.length>0?{foreignKeyTargets:f}:{},isGenerated:g,...o?{generatedBy:"identity"}:{},...s&&!o?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!h&&((I=t.type)==null?void 0:I.null)===!1,...t.default!==void 0?{defaultValue:ki(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=he(e.attrs,me.Comment);return{indexName:bn(e.name),partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>{var r,a,o;return t.unique===!0&&((r=t.parts)==null?void 0:r.length)===1&&((o=(a=t.parts[0])==null?void 0:a.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var u,f;const a=((u=n.columns)==null?void 0:u.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,s=(f=n.refColumns)==null?void 0:f[a];if(!o||!s)return;const g=this.resolveForeignKeyTargetSchemaName(e,o,r);if(g)return{schemaName:g,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(qn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return wn(e)?{kind:S.BoolType,typeName:e.type,label:n}:Nn(e)?{kind:S.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ai(e)?{kind:S.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ri(e)?{kind:S.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:oi(e)?{kind:S.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:li(e)?{kind:S.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:si(e)?{kind:S.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:An(e)?{kind:S.JSONType,typeName:e.type,label:n}:Sn(e)?{kind:S.SpatialType,typeName:e.type,label:n}:Tn(e)?{kind:S.UUIDType,typeName:e.type,label:n}:Ie(e)?{kind:S.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:_n(e)?{kind:S.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:di(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:fi.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return ai(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):oi(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):li(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):ri(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):si(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ie(e)?n=e.type??e.values[0]??"enum":di(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?$e(e.expr):""}}const In=new Set([L.TABLE,L.COLUMNS,L.COLUMN,L.INDEXES,L.INDEX]);class Vi extends mn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!pn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,Vi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return In.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case L.TABLE:return["tableName","schemaName","description"];case L.COLUMNS:case L.INDEXES:return["title"];case L.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case L.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function jn(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function Fn(i,e,n){const t=n===E,r=new Set,a=[],o=g=>{const u=e==null?void 0:e[g];if(u)return u;for(const f of Object.values(e??{}))if(f&&B(f.data)&&f.data.afterValue===g)return f};for(const g of i){const u=o(g);if(!u){a.push({text:g});continue}if(r.has(u))continue;r.add(u);const{data:f}=u;if(Y(f)){!t&&typeof f.afterValue=="string"&&a.push({text:f.afterValue,diff:u});continue}if(K(f)){t&&typeof f.beforeValue=="string"&&a.push({text:f.beforeValue,diff:u});continue}if(B(f)){const c=t?typeof f.beforeValue=="string"?f.beforeValue:g:typeof f.afterValue=="string"?f.afterValue:g;a.push({text:c,diff:u})}}for(const[g,u]of Object.entries(e??{}))!u||r.has(u)||K(u.data)&&t&&(a.push({text:g,diff:u}),r.add(u));const s=g=>{const u=i.indexOf(g);return u>=0?u:i.length};return a.sort((g,u)=>s(g.text)-s(u.text))}function xi(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Ce(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===E;return Y(t)?r?void 0:String(t.afterValue??i??""):K(t)?r?String(t.beforeValue??i??""):void 0:B(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function On(i,e){return(e===E?i.styles.before:i.styles.after).isContentVisible}const Ci=["size","precision","scale"];function Pn(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Rn(i,e){var u;const n=(u=i.value())==null?void 0:u.columnType;if(!n)return{kind:"plain",text:""};const t=Pn(i);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(Gn(t)){const f=Object.values(t).find(Boolean);return f?{kind:"monolithic",text:Un(n,t,a,e),diff:Wn(f)}:{kind:"plain",text:n.label}}const o=[],s=Ce(Re(n),r,e);s!==void 0&&o.push({text:s,diff:r});const g=Kn(n,t,e);return o.push(...g),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function Gn(i){const e=Vn.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function Un(i,e,n,t){const r=Ce(Re(i),e[n],t)??Re(i),a=[];for(const o of Ci){const s=Ce(Xe(i,o),e[o],t);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function Kn(i,e,n){const t=Bn(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Ce(Xe(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...xi(r,"spaced")]}function Bn(i,e,n){return Ci.filter(t=>{const r=e[t];return r?On(r,n):Xe(i,t)!==void 0})}function Re(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function Xe(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function Wn(i){const{data:e}=i;return B(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Yellow}}}:Y(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Green}}}:K(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function Yn(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function $n(i,e){var o;const n=((o=i.value())==null?void 0:o.partNames)??[],t=Yn(i),r=t?Fn(n,t,e):n.map(s=>({text:s})),a=xi(r,"tight");return a.length===0?{kind:"plain",text:""}:{kind:"segmented",segments:a}}function Xn(i){if(Cn(i.diffs))return i.diffs[Se]}function zn(i){const e=i.diffs[fe];if(e&&(Y(e.data)||K(e.data)))return e}function qi(i,e){return i?(e===E?i.styles.before:i.styles.after).isHeaderVisible:!0}function Jn(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function Qn(i){const e={};let n=!1;for(const t of Di){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function Zn(i){return i.diffs.generatedExpression}function et(i){return i.diffs.description}function wi(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function it(i){return i.diffs.enumValuesRowColorizingDiff}function Ni(i){return i.diffs.defaultValue}function nt(i){return i.diffs.defaultValueRowColorizingDiff}function tt(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Ni(i);if(!t)return n;const r=t.data,a=e===E;return Y(r)?a?void 0:n:K(r)?a?je(r.beforeValue)??n:void 0:B(r)?a?je(r.beforeValue)??n:je(r.afterValue)??n:n}function je(i){if(typeof i=="string")return En(i);if(M(i)&&"kind"in i)return ki(i)}function at(i,e){var u;const n=((u=i.value())==null?void 0:u.enumValues)??[],t=wi(i),r=e===E,a=new Set,o=[],s=f=>{const c=t==null?void 0:t[f];if(c)return c;for(const p of Object.values(t??{}))if(p&&B(p.data)&&p.data.afterValue===f)return p};for(const f of n){const c=s(f);if(!c){o.push({literal:f});continue}if(a.has(c))continue;a.add(c);const{data:p}=c;if(Y(p)){!r&&typeof p.afterValue=="string"&&o.push({literal:p.afterValue,diff:c});continue}if(K(p)){r&&typeof p.beforeValue=="string"&&o.push({literal:p.beforeValue,diff:c});continue}if(B(p)){const D=r?typeof p.beforeValue=="string"?p.beforeValue:f:typeof p.afterValue=="string"?p.afterValue:f;o.push({literal:D,diff:c})}}for(const[f,c]of Object.entries(t??{}))!c||a.has(c)||K(c.data)&&r&&(o.push({literal:f,diff:c}),a.add(c));const g=f=>{const c=n.indexOf(f);return c>=0?c:n.length};return o.sort((f,c)=>g(f.literal)-g(c.literal))}function rt(i){const e={};let n=!1;for(const t of vi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function ot(i){return i?i.highlightingMode.get(Pe.Default)!==De.Invisible:!1}const lt=d.createContext(!1),Te=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:r=!1}=i;return r||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[l.jsx(ln,{variant:n,message:t}),e]})};Te.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const _e=d.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});_e.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ee=d.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[l.jsx("div",{className:"flex w-1/2",children:e}),l.jsx("div",{className:"flex w-1/2",children:n})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const ze="px-4",st="",dt="px-4",Je="";var j=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(j||{});var V=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(V||{});const ut=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:r}=i,a=d.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${ct(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Ai=d.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:s=De.Default}=i,g=s===De.Default,u=s===De.Invisible,{textFontWeight:f,labelFontWeight:c,labelColor:p,textColor:D,label:H}=i,[h,m]=d.useState(!1),y=d.useCallback((x,T,q)=>{if(q)return null;const _=u?"":T.join(" "),k=`text-value ${r?"hover:cursor-pointer":""} ${f?`font-${f}`:""}`.trim(),F=`${k} ${_}`.trim(),ae={onClick:r,...D!=null&&D.trim()?{style:{color:D}}:{}};x=h?x:gt(x);const Z=(R,z)=>{const w={...ae,className:z};switch(n){case V.h1:return l.jsx("h1",{...w,children:R});case V.h2:return l.jsx("h2",{...w,children:R});case V.h3:return l.jsx("h3",{...w,children:R});case V.h4:return l.jsx("h4",{...w,children:R});case V.h5:return l.jsx("h5",{...w,children:R});case V.h6:return l.jsx("h6",{...w,children:R});case V.body1:return l.jsx("span",{...w,className:`${z} text-value-body1`.trim(),children:R});case V.body2:return l.jsx("span",{...w,className:`${z} text-value-body2`.trim(),children:R})}};return H?Z(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${H}: `}),l.jsx("span",{className:_,children:x})]}),k):Z(x,F)},[h,u,H,p,c,r,D,f,n]),I=d.useCallback(x=>{const T=[];let q=x,_=!1;if(a){const{data:k,styles:F}=a;switch(t){case E:T.push(P.highlighter(F.before.textHighlighterColor)),g&&(K(k)&&(q=re(k.beforeValue)?k.beforeValue:q),B(k)&&(o===j.JsoProperty&&!u&&T.push(P.highlighter(oe.Yellow)),q=re(k.beforeValue)?k.beforeValue:q),Fe(k)&&(q=re(k.beforeKey)?k.beforeKey:q)),Y(k)&&(_=!0);break;case J:T.push(P.highlighter(F.after.textHighlighterColor)),g&&(Y(k)&&(q=re(k.afterValue)?k.afterValue:q),B(k)&&(o===j.JsoProperty&&!u&&T.push(P.highlighter(oe.Yellow)),q=re(k.afterValue)?k.afterValue:q),Fe(k)&&(q=re(k.afterKey)?k.afterKey:q)),K(k)&&(_=!0);break}}return[q,T,_]},[a,g,u,t,o]),[v,N,b]=I(e);return d.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[y(v,N,b),!b&&l.jsx(ut,{isExpandable:ft(v),expanded:h,setExpanded:m,variant:n})]}),[y,v,N,b,h,m,n])}),Ge=5,Ue=300;function ft(i){return i?i.length>Ue||gi.trim(i.split(`
`)).length>Ge:!1}function gt(i){if(!i)return;if(i.length>Ue)return i.slice(0,Ue)+"...";const e=gi.trim(i.split(`
`));return e.length>Ge?e.slice(0,Ge).join(`
`)+"...":i}function re(i){return typeof i=="string"}function ct(i){switch(i){case V.h1:return"text-value-expander--h1";case V.h2:return"text-value-expander--h2";case V.h3:return"text-value-expander--h3";case V.h4:return"text-value-expander--h4";case V.h5:return"text-value-expander--h5";case V.h6:return"text-value-expander--h6";case V.body1:return"text-value-expander--body1";case V.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const $="data-precededby",U="data-ddl-list-last-row";var A=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(A||{}),Q=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Q||{});const pt={[Q.DdlApiProperty]:Je},ht={[Q.DdlApiProperty]:["min-h-[26px]"]};function mt(i){const e=pt[i]??ze,n=ht[i]??[];return[e,...n].join(" ")}const ve=d.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=Q.Default}=i,{label:a,labelFontWeight:o,textFontWeight:s,labelColor:g,textColor:u}=i,{[$]:f}=i,{diff:c,descendantDiffs:p,diffsSeverities:D}=i,H=ge(),h=r===Q.DdlApiProperty,m=h&&H>0,y=d.useMemo(()=>{if(!c)return[];const{data:N,styles:b}=c;if(!N)return[];const C=[];return t===E&&C.push(P.background(b.before.backgroundColor)),t===J&&C.push(P.background(b.after.backgroundColor)),C},[c,t]),I=d.useMemo(()=>mt(r),[r]),v=l.jsx(Ai,{label:a,labelFontWeight:o,textFontWeight:s,labelColor:g,textColor:u,value:e,variant:n,layoutSide:t,diff:c});return l.jsxs("div",{"data-precededby":f,className:`text-row-content flex w-full h-full ${h?"items-stretch":""} ${I} gap-2 ${y.join(" ")}`,children:[m&&l.jsxs("div",{"data-precededby":f,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:H}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:v}):v]})});ve.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const de=d.memo(i=>{const e=we(),{diffsSeverities:n,diffsSeverityPlacement:t=ci.DescriptionRow}=i,r=d.useMemo(()=>n==null?void 0:n[t],[n,t]),a=d.useMemo(()=>r==null?void 0:r.type,[r]),o=d.useMemo(()=>Be(r==null?void 0:r.causedAt),[r]);switch(e){case Ye:return l.jsx(Te,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ve,{...i,layoutSide:E}),right:l.jsx(ve,{...i,layoutSide:J})})});case We:return l.jsx(_e,{content:l.jsx(ve,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});de.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const ce="#353C4E",yt=d.createContext(void 0);function bt(){return d.useContext(yt)}const Si=i=>{const{expandable:e,expanded:n,onClick:t,level:r}=i,a=d.useContext(lt),o=r>0,s=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(sn,{short:e}),e&&n!==void 0&&l.jsx(dn,{onToggle:s,expanded:n})]})};Si.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const Dt={[j.JsoProperty]:st,[j.DdlApiSection]:dt,[j.DdlApiProperty]:Je},vt={[j.JsoProperty]:["min-h-[26px]"],[j.DdlApiProperty]:["min-h-[26px]"]};function kt(i){const e=Dt[i]??ze,n=vt[i]??[];return[e,...n].join(" ")}const ke=d.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:g=!0,subheader:u,usage:f=j.Default,highlightingMode:c=un}=i,{diff:p,descendantDiffs:D,diffsSeverities:H}=i,{[$]:h,[U]:m}=i,y=d.useMemo(()=>{switch(f){case j.Default:return c.get(Pe.Default);case j.AsyncApiJsoSection:case j.JsoProperty:return c.get(Pe.JsoPropertyKey)}},[c,f]),I=ge(),v=bt(),N=d.useMemo(()=>v?o===E?v.beforeLevel:v.afterLevel:I,[o,I,v]),b=d.useMemo(()=>{const _=[];if(!p)return _;const{data:k,styles:F}=p;return k&&(o===E&&_.push(P.background(F.before.backgroundColor)),o===J&&_.push(P.background(F.after.backgroundColor))),_},[p,o]),C=d.useMemo(()=>g?l.jsx(Ai,{"data-precededby":h,value:r,variant:a,layoutSide:o,diff:p,usage:f,highlightingMode:y,onClick:t}):null,[g,h,r,a,o,p,f,y,t]),x=f===j.DdlApiProperty,T=d.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||N>0)&&l.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:N}),l.jsx(Si,{expandable:e,expanded:n,onClick:t,level:N})]}),!x&&C]}):N>0&&l.jsx(xe,{level:N}),[s,e,N,h,n,t,C,x]),q=d.useMemo(()=>kt(f),[f]);return l.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":m?!0:void 0,"data-usage":f!==j.Default?f:void 0,className:`title-row-content flex w-full ${x?"items-stretch":"items-center"} h-full ${q} gap-2 ${b.join(" ")}`,children:[T,x?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[C,u==null?void 0:u(o)]}):u==null?void 0:u(o)]})});ke.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(i=>{const e=we(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=i,a=d.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=d.useMemo(()=>a==null?void 0:a.type,[a]),s=d.useMemo(()=>Be(a==null?void 0:a.causedAt),[a]);switch(e){case Ye:return l.jsx(Te,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ke,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:E}),right:l.jsx(ke,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:J})})});case We:return l.jsx(_e,{content:l.jsx(ke,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function ka(i,e){return d.useMemo(()=>e(i)?Ti(i):{},[e,i])}function Ti(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function Ht(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:g,nodeDiffsSeverities:u}=i;if(!s)return{};const f=Object.entries(s),c=H=>{const h=f.find(([m])=>m===String(H));return h==null?void 0:h[1]},p=n?c(n):void 0;return{diff:o?o(s,c):t?s[fe]??p:p,...r?{descendantDiffs:g}:{},diffsSeverities:u,...a?{diffsSeverityPlacement:a}:{}}}function Vt(i){return yn.includes(i.kind)}function xt(i){return i.childrenNodes().filter(Vt)}function Ha(i){return i.kind===L.TABLE}function Ct(i){return i.kind===L.COLUMNS}function _i(i){return i.kind===L.COLUMN}function Qe(i){return _i(i)&&i instanceof Ae}function qt(i){return i.kind===L.INDEXES}function Ei(i){return i.kind===L.INDEX}function Mi(i){return Ei(i)&&i instanceof Ae}function wt(i){return i.filter(_i)}function Nt(i){return i.filter(Ei)}const At=d.createContext(null);function St(){const i=d.useContext(At);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const Tt=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});Tt.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function _t(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Li=d.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:r}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});Li.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Et(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",P.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[P.highlighter(e),t?P.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ie=d.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:s}=Et({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(Li,{isVisible:e,value:n,blockClassName:o,valueClassName:s})});ie.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const He=d.memo(i=>{var H;const{label:e,subheader:n,layoutSide:t,diff:r,colorizingDiff:a}=i,{[$]:o,[U]:s}=i,g=ge(),u=t===E?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,c=(H=(t===E?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??u)==null?void 0:H.backgroundColor,p=d.useMemo(()=>c?[P.background(c)]:[],[c]),D=d.useMemo(()=>{const h=a==null?void 0:a.data;if(h){if(Y(h))return t!==E;if(K(h))return t===E}return(u==null?void 0:u.isContentVisible)??!0},[a,u==null?void 0:u.isContentVisible,t]);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":o,"data-ddl-list-last-row":s?!0:void 0,className:`additional-info-row-content flex w-full items-stretch h-full ${Je} min-h-[26px] gap-2 ${p.join(" ")}`,children:[g>0&&l.jsxs("div",{"data-precededby":o,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:g}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});He.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ne=d.memo(i=>{var r;const e=we(),n=(r=i.diffsSeverities)==null?void 0:r[ci.AdditionalInfoRow],t=d.useMemo(()=>Be(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case Ye:return l.jsx(Te,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(Ee,{left:l.jsx(He,{...i,layoutSide:E}),right:l.jsx(He,{...i,layoutSide:J})})});case We:return l.jsx(_e,{content:l.jsx(He,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function te(i,e){return i?(e===E?i.styles.before:i.styles.after).textHighlighterColor:void 0}const Mt="ux-badge_ddlapi_primary-key",Ii="ux-badge_ddlapi_foreign-key",Lt="ux-badge_ddlapi_unique",It="ux-badge_ddlapi_not-null",jt="ux-badge_ddlapi_generated",ji="public",Fi="Default",Oi="As",Pi="Values";function Ri(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===ji?e:`${i.schemaName}.${e}`}function Ft(i){return i.join(", ")}const Ke=d.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=St(),o=d.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),s=d.useMemo(()=>["ddlapi-foreign-key-link",P.highlighter(t)].filter(Boolean).join(" "),[t]),g=l.jsx(a,{href:o,className:s,children:Ri(e)});return n?g:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(fn,{text:"FK",colorSchema:Ii,inline:!0}),g]})});Ke.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Ot(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Gi(i,e){return!!i||!!e}function Ze(i,e){return i?e===E?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function Pt(i,e,n){return Gi(i,e)&&Ze(e,n)}function be(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=i;if(!Gi(r,a))return null;if(!Ze(a,s))return Ot();const g=ot(a)?a==null?void 0:a.data:void 0;return l.jsx(pi,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!g,$changes:g},Gt(e,n))}function Rt(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=Ut(e,n),s=te(t,a);if(t&&!Ze(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Ke,{target:n},o);const g=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(pi,{label:"FK",colorSchema:Ii,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:g}),l.jsx(Ke,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const pe=d.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=we(),s=d.useMemo(()=>t??{},[t]),g=d.useMemo(()=>r??{},[r]),u=d.useMemo(()=>be({columnId:e,label:"PK",colorSchema:Mt,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,s.isPrimaryKey,o,a,n.isPrimaryKey]),f=d.useMemo(()=>Pt(n.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,n.isPrimaryKey]),c=d.useMemo(()=>be({columnId:e,label:"unique",colorSchema:Lt,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[e,s.isUnique,o,a,n.isUnique]),p=d.useMemo(()=>f?null:be({columnId:e,label:"not null",colorSchema:It,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[e,s.isNotNull,f,o,a,n.isNotNull]),D=d.useMemo(()=>be({columnId:e,label:"generated",colorSchema:jt,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[e,s.isGenerated,o,a,n.isGenerated]),H=d.useMemo(()=>{const m=n.foreignKeyTargets??[];return m.length===0?[]:m.map(y=>Rt({columnId:e,target:y,targetDiff:g[jn(y)],layoutMode:o,layoutSide:a}))},[e,o,a,g,n.foreignKeyTargets]),h=d.useMemo(()=>[u,c,p,D,...H].filter(Boolean),[H,D,p,u,c]);return h.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:h})});function Gt(i,e){return`${i}-${e}`}function Ut(i,e){return`${i}-FK-${Ri(e)}`}pe.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ei=d.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});ei.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ui(i){const{appearance:e}=i;return d.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=d.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=Ui({appearance:t});return l.jsx(ei,{isVisible:e,value:n,className:r})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ki=i=>{const{node:e,additionalInfoPrecededBy:n=A.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:r}=i,a=le(),o=e.value(),s=d.useCallback(b=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(ue,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(pe,{columnId:e.id,layoutSide:b,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),g=d.useCallback(b=>{const C=o==null?void 0:o.defaultValue;return X(C)?l.jsx(ie,{isVisible:!0,value:C}):l.jsx(l.Fragment,{})},[o]),u=d.useCallback(b=>{const C=o==null?void 0:o.generatedExpression;return X(C)?l.jsx(ie,{isVisible:!0,value:C}):l.jsx(l.Fragment,{})},[o]),f=d.useCallback(b=>{var C;return(C=o==null?void 0:o.enumValues)!=null&&C.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((x,T)=>l.jsx(ie,{isVisible:!0,value:x},`${x}-${T}`))}):l.jsx(l.Fragment,{})},[o]),c=a===se,p=d.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),D=!!(o!=null&&o.enumValues&&o.enumValues.length>0),H=X(o==null?void 0:o.defaultValue),h=X(o==null?void 0:o.generatedExpression),y=t&&!(c&&(D||H||h)),I=t&&D&&!H&&!h,v=t&&H&&!h,N=t&&h;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[U]:y||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:s,usage:j.DdlApiProperty}),p&&l.jsx(de,{"data-precededby":A.DDL_COLUMN_ROW,value:o.description??"",variant:V.body2,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty}),c&&D&&l.jsx(ne,{"data-precededby":n,[U]:I||void 0,label:Pi,subheader:f}),c&&H&&l.jsx(ne,{"data-precededby":D?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:v||void 0,label:Fi,subheader:g}),c&&h&&l.jsx(ne,{"data-precededby":H||D?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:N||void 0,label:Oi,subheader:u})]}):null};Ki.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ui(i,e){return i?(e===E?i.styles.before:i.styles.after).borderShadowColor:void 0}function Kt(i,e){return i?(e===E?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Bt(i){if(Qe(i))return Jn(i)}function Wt(i){if(Qe(i))return Qn(i)}function Yt(i){if(Mi(i))return rt(i)}const Bi=zn;function Wi(i){const e=Ht(Ti(i),{resolveDiff:()=>Xn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function $t(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=Ui({appearance:e});return d.useMemo(()=>[r,P.highlighter(n),P.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const Me=d.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=i,o=$t({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(ei,{isVisible:e,value:n,className:o})});Me.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Xt(i,e){return i?(e===E?i.styles.before:i.styles.after).backgroundColor:void 0}function zt(i){return i.text===", "||i.text===","}function Jt(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if(zt(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(Qt(r,a,e))}),n}function Qt(i,e,n){return i.diff?l.jsx(Me,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:te(i.diff,n)},`${i.text}-${e}`):l.jsx(ue,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const qe=d.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(ue,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Me,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:te(e.diff,n),backgroundColor:Xt(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:Jt(e.segments,n)})});qe.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function Zt(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function ea(i,e,n){return i.diff?l.jsx(Me,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:te(i.diff,n)},`${i.text}-${e}`):l.jsx(ue,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Yi=d.memo(i=>{const{node:e,layoutSide:n}=i,t=Rn(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(qe,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=Zt(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>ea(o,s,n)),a.length>0&&l.jsx(qe,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});Yi.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const $i=i=>{const{node:e,additionalInfoPrecededBy:n=A.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:r}=i,a=le(),o=e.value(),s=d.useMemo(()=>Bi(e),[e]),g=d.useMemo(()=>Wi(e),[e]),u=d.useMemo(()=>Wt(e),[e]),f=d.useMemo(()=>Bt(e),[e]),c=d.useMemo(()=>et(e),[e]),p=d.useMemo(()=>Zn(e),[e]),D=d.useMemo(()=>wi(e),[e]),H=d.useMemo(()=>it(e),[e]),h=d.useMemo(()=>Ni(e),[e]),m=d.useMemo(()=>nt(e),[e]),y=d.useCallback(w=>o?qi(s,w)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(Yi,{node:e,layoutSide:w}),l.jsx(pe,{columnId:e.id,layoutSide:w,value:o,flagDiffs:u,foreignKeyTargetDiffs:f})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[u,f,e,s,o]),I=d.useCallback(w=>{const W=tt(e,w);return X(W)?l.jsx(ie,{isVisible:!0,value:W,textHighlighterColor:te(h,w),borderShadowColor:ui(h,w)}):l.jsx(l.Fragment,{})},[h,e]),v=d.useCallback(w=>{const W=(()=>{const G=p==null?void 0:p.data;return G?w===E?K(G)||B(G)?G.beforeValue:void 0:Y(G)||B(G)?G.afterValue:void 0:o==null?void 0:o.generatedExpression})();return X(W)?l.jsx(ie,{isVisible:!0,value:W,textHighlighterColor:te(p,w)}):l.jsx(l.Fragment,{})},[p,o]),N=d.useCallback(w=>{const W=at(e,w);return W.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:W.map((G,en)=>l.jsx(ie,{isVisible:!0,value:G.literal,textHighlighterColor:te(G.diff,w),borderShadowColor:ui(G.diff,w),isFontMuted:Kt(G.diff,w)},`${G.literal}-${en}`))})},[e]),b=a===se,C=!!s,x=b&&(!!(o!=null&&o.description)||!!c),T=!!(o!=null&&o.enumValues&&o.enumValues.length>0||D),q=!!(X(o==null?void 0:o.defaultValue)||h||m),_=X(o==null?void 0:o.generatedExpression)||!!p,k=b&&(T||q||_),F=t&&!x&&!k,ae=t&&x&&!k,Z=t&&T&&!q&&!_,R=t&&q&&!_,z=t&&_;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[U]:F||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:y,usage:j.DdlApiProperty,...g}),x&&l.jsx(de,{"data-precededby":A.DDL_COLUMN_ROW,[U]:ae||void 0,value:o.description??"",variant:V.body2,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty,diff:c,diffsSeverities:e.diffsSeverities}),b&&T&&l.jsx(ne,{"data-precededby":n,[U]:Z||void 0,label:Pi,subheader:N,colorizingDiff:H,diffsSeverities:D?e.diffsSeverities:void 0}),b&&!C&&q&&l.jsx(ne,{"data-precededby":T?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:R||void 0,label:Fi,subheader:I,colorizingDiff:m,diffsSeverities:h||m?e.diffsSeverities:void 0}),b&&_&&l.jsx(ne,{"data-precededby":q||T?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:z||void 0,label:Oi,subheader:v,diff:p,colorizingDiff:e.diffs[fe],diffsSeverities:e.diffsSeverities})]}):null};$i.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function ia(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=n?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:A.DDL_COLUMN_ROW,s=n?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:A.DDL_COLUMN_ROW,g={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return n=e&&_t(t.value()),g})}const Xi=i=>{const{node:e,[$]:n}=i,t=ge(),r=le(),a=e.value(),o=wt(e.childrenNodes()),s=r===se,g=d.useMemo(()=>ia(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:V.h2,usage:j.DdlApiSection}),l.jsx(hi.Provider,{value:t+1,children:g.map(({columnNode:u,titlePrecededBy:f,additionalInfoPrecededBy:c,isLastInList:p})=>Qe(u)?l.jsx($i,{"data-precededby":f,additionalInfoPrecededBy:c,isLastInList:p,node:u},u.id):l.jsx(Ki,{"data-precededby":f,additionalInfoPrecededBy:c,isLastInList:p,node:u},u.id))})]})};Xi.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const zi=i=>{const{schemaName:e,[$]:n}=i;return e===ji?null:l.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${ze}`,children:l.jsx("span",{className:"ddl-schema-name-block",children:e})})};zi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Ji=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,r=le(),a=e.value(),o=(a==null?void 0:a.indexName)??"",s=d.useCallback(c=>{if(!a)return l.jsx(l.Fragment,{});const p=Ft(a.partNames);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.partNames.length>0&&l.jsx(ue,{isVisible:!0,value:`(${p})`,appearance:"text"}),l.jsx(pe,{columnId:e.id,layoutSide:c,value:a})]})},[e.id,a]),g=d.useMemo(()=>r===se&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),u=n,f=!!a&&(a.partNames.length>0||a.isUnique);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[U]:u||void 0,value:o,expandable:!1,expanded:!0,variant:V.body2,subheader:f?s:void 0,usage:j.DdlApiProperty}),g&&l.jsx(de,{"data-precededby":A.DDL_INDEX_ROW,value:a.description??"",variant:V.body1,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty})]}):null};Ji.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Qi=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,r=le(),a=e.value(),o=d.useMemo(()=>Bi(e),[e]),s=d.useMemo(()=>Wi(e),[e]),g=d.useMemo(()=>Yt(e),[e]),u=(a==null?void 0:a.indexName)??"",f=d.useCallback(m=>{const y=$n(e,m);return l.jsx(qe,{layoutSide:m,display:y})},[e]),c=d.useCallback(m=>{if(!a)return l.jsx(l.Fragment,{});if(!qi(o,m))return l.jsx(l.Fragment,{});const y=a.partNames.length>0;return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[y&&f(m),l.jsx(pe,{columnId:e.id,layoutSide:m,value:a,flagDiffs:g})]})},[g,e.id,o,f,a]),p=d.useMemo(()=>r===se&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),D=!!o,H=n,h=!!a&&(a.partNames.length>0||a.isUnique||!!(g!=null&&g.isUnique));return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[U]:H||void 0,value:u,expandable:!1,expanded:!0,variant:V.body2,subheader:h?c:void 0,usage:j.DdlApiProperty,...s}),p&&!D&&l.jsx(de,{"data-precededby":A.DDL_INDEX_ROW,value:a.description??"",variant:V.body1,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty})]}):null};Qi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function na(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:A.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Zi=i=>{const{node:e,[$]:n}=i,t=ge(),r=e.value(),a=Nt(e.childrenNodes()),o=d.useMemo(()=>na(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:V.h2,usage:j.DdlApiSection}),l.jsx(hi.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:g,isLastInList:u})=>Mi(s)?l.jsx(Qi,{"data-precededby":g,isLastInList:u,node:s},s.id):l.jsx(Ji,{"data-precededby":g,isLastInList:u,node:s},s.id))})]})};Zi.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const ta=i=>{const{node:e,noHeading:n=!1,[$]:t=A.ROOT}=i,r=le(),a=e.value(),o=xt(e),s=o.find(Ct),g=o.find(qt),u=!!(a!=null&&a.schemaName),f=r===se&&!!(a!=null&&a.description),c=n?A.ROOT:A.DDL_TABLE_HEADER_ROW;return l.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&l.jsx(ee,{"data-precededby":t,value:(a==null?void 0:a.tableName)??"",expandable:!1,expanded:!0,variant:V.h1}),u&&l.jsx(zi,{"data-precededby":c,schemaName:(a==null?void 0:a.schemaName)??""}),f&&l.jsx(de,{"data-precededby":u?A.DDL_TABLE_SCHEMA_ROW:c,value:(a==null?void 0:a.description)??"",variant:V.h4,textFontWeight:"normal",textColor:ce}),s&&l.jsx(Xi,{"data-precededby":f?A.DDL_TABLE_DESCRIPTION_ROW:u?A.DDL_TABLE_SCHEMA_ROW:c,node:s}),g&&l.jsx(Zi,{"data-precededby":s!=null&&s.childrenNodes().length?A.DDL_COLUMN_ROW:f?A.DDL_TABLE_DESCRIPTION_ROW:u?A.DDL_TABLE_SCHEMA_ROW:c,node:g})]})};ta.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{ee as $,Ne as A,ya as B,Vn as C,va as D,Da as E,Le as F,gn as G,mn as H,pn as I,cn as J,sa as K,mi as L,da as M,Te as N,_e as O,Ee as P,Ai as Q,V as R,Ae as S,ni as T,$ as U,lt as V,yt as W,ze as X,bt as Y,Ti as Z,Ht as _,fa as a,j as a0,A as a1,de as a2,ka as a3,ce as a4,Vi as b,ca as c,yn as d,ga as e,Ha as f,ti as g,At as h,M as i,ta as j,Tt as k,ha as l,Ie as m,jn as n,En as o,ki as p,bi as q,pa as r,Di as s,ua as t,vi as u,L as v,xn as w,ba as x,Se as y,ma as z};
