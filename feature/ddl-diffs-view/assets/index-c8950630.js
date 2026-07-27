var nn=Object.defineProperty;var tn=(i,e,n)=>e in i?nn(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var O=(i,e,n)=>(tn(i,typeof e!="symbol"?e+"":e,n),n);import{u as Y,v as K,x as Fe,w as B,U as Oe,V as ni,W as Ve,N as fe,X as gi,P as S,Y as an,Z as rn,K as he,Q as on,M as me,_ as E,H as oe,$ as Re,a0 as De,a1 as ln,a2 as J,a3 as R,a4 as ci,a5 as ge,a6 as xe,a7 as we,R as pi,a8 as We,k as Ye,S as $e,a9 as sn,aa as dn,y as un,ab as X,ac as fn,ad as hi,ae as le,h as se,f as mi}from"./DiffBadge-40fbf5b6.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const ti={SIMPLE:"simple",COMPLEX:"complex"},gn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},cn=Object.values(gn);new Set(cn);class Ne{aggregateByDescendantDiffs(e,n,t,r){}static isDiffsRecord(e){if(!L(e))return!1;for(const n of Object.values(e))if(!Ne.isDiff(n))return!1;return!0}static isDiff(e){const n=e;return L(n)&&(Y(n)||K(n)||Fe(n)||B(n))}}function L(i){return yi(i)&&!Array.isArray(i)}function yi(i){return typeof i=="object"&&i!==null}function pn(i){return L(i)&&Object.keys(i).every(e=>typeof e=="string")}function Le(i){return Array.isArray(i)}function ra(i,e,n){let t=i,r=!1;for(const a of e){if(!L(t)&&!Le(t))return;if(r){let s;yi(t)&&(s=t[a]),!s&&Le(t)&&n&&(s=t.find(g=>L(g)&&g[n]===a)),t=s,r=!1;continue}t=t[a],Le(t)&&(r=!0)}return t}function oa(i,e){return Object.keys(i).find(n=>i[n]===e)}function la(i){if(Ne.isDiffsRecord(i))return i}class sa{constructor(){O(this,"tree",null)}pick(e,n){if(!L(e))return null;const t={};for(const r of n){const a=String(r);if(!(a in e))continue;const o=e[a];Array.isArray(o)?t[a]=[...o]:L(o)?t[a]={...o}:t[a]=o}return this.isPartialOf(t,n)?t:null}isPartialOf(e,n){return Object.keys(e).every(t=>n.includes(t))}}const ye=()=>{},da=(i=!1)=>i?{debug:(...e)=>console.debug(...e),info:(...e)=>console.info(...e),warn:(...e)=>console.warn(...e),error:(...e)=>console.error(...e)}:{debug:ye,info:ye,warn:ye,error:ye};function hn(i){return i==null||!L(i)&&!Oe(i)}function ua(i){const{source:e,tree:n,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:a,createStateForSimpleNode:o,createStateForComplexNode:s,isSimpleNode:g,isComplexNode:f,resolveNodeKey:u,isDisallowedValue:c=hn,shouldStopAfterNodeCreation:p}=i;return[({value:y,state:v,key:M,path:m})=>{if(typeof M=="symbol")return;if(!L(y)&&!Oe(y))return{value:y};const{alreadyConvertedValuesCache:V,parent:b,container:q}=v,C=V.get(y);if(!C||!g(C)&&!f(C))return{value:y};if(!b||!g(b))return{value:y};const T="#"+ni(m),w=u(M,y),_=n.createCycledClone(C,T,w,b);return q?q.addNestedNode(_):b&&b.addChildNode(_),{done:!0}},({key:y,value:v,path:M,state:m,rules:V})=>!V||!Array.isArray(V.transformers)?void 0:{value:V.transformers.reduce((C,T)=>T(y,C,e,M,m),v)},({key:y,value:v,path:M,rules:m,state:V})=>{if(!m)return{done:!0};if(typeof y=="symbol")return{done:!0};if(c(v))return{done:!0};if(!m.kind||!t.includes(m.kind))return;const{parent:b,container:q}=V,C="#"+ni(M),T=u(y,v),{kind:w,complex:_=!1}=m,k=a(v,b,q),j=r(C,T,w,_,k);if(!j)return;q?q.addNestedNode(j):b&&b.addChildNode(j);let ae=v;if(p!=null&&p(j,v)){const z=b?b.descendantDiffs:void 0;if(!z||!(y in z))return{done:!0};const N=z[y];if(!N)return{done:!0};const{data:W}=N;B(W)&&(ae=W.beforeValue)}const Z=new Map(V.alreadyConvertedValuesCache);(L(v)||Oe(v))&&Z.set(v,j);let P;return g(j)?P=o(V,j,Z):P=s(V,j,Z),{value:ae,state:P}}]}class mn{}class Ae{constructor(e="#",n="",t,r,a){O(this,"type");O(this,"parent");O(this,"container");O(this,"newDataLevel");O(this,"_value");O(this,"_meta");O(this,"_childrenNodes",[]);O(this,"_nestedNodes",[]);O(this,"_diffs",{});O(this,"_diffsSummary",new Set);O(this,"_descendantDiffs",{});O(this,"_descendantDiffsSummary",new Set);O(this,"_diffsSeverities",{});this.id=e,this.key=n,this.kind=t,this.isCycle=r;const{type:o=ti.SIMPLE,value:s=null,parent:g=null,container:f=null,newDataLevel:u=!0,meta:c}=a;this.type=o,this.parent=g,this.container=f,this.newDataLevel=u,this._value=s,this._meta=c}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(e,n,t){const r=new Ae(e,n,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r.setChildrenNodes(this._childrenNodes),r.setNestedNodes(this._nestedNodes),r}value(e){return e?null:this._value}meta(){return this._meta}childrenNodes(e){return e?[]:this._childrenNodes}setChildrenNodes(e){this._childrenNodes.length=0,this._childrenNodes.push(...e)}nestedNodes(){return this._nestedNodes}setNestedNodes(e){this._nestedNodes.length=0,this._nestedNodes.push(...e)}findNestedNode(e,n=!1){if(!e&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===e)return t;if(n&&t.type===ti.COMPLEX){const r=t.findNestedNode(e,n);if(r)return r}}return null}addChildNode(e){this._childrenNodes.push(e)}addNestedNode(e){this._nestedNodes.push(e)}addDiffsSummary(e){for(const n of e)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(e):this.parent&&this.parent.addDiffsSummary(e)}addDescendantDiffsSummary(e){for(const n of e)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(e):this.parent&&this.parent.addDescendantDiffsSummary(e)}}const I={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},yn=Object.values(I);function ai(i=I.TABLE){return{"/columns":{"/items":{"/*":()=>ai(I.COLUMN)},kind:I.COLUMNS},"/indexes":{"/items":{"/*":()=>ai(I.INDEX)},kind:I.INDEXES},kind:i}}function bn(i){return i.kind===Ve.Literal&&typeof i.value=="string"}function Dn(i){return i.kind===Ve.RawExpr&&typeof i.expr=="string"}function vn(i){return L(i)&&typeof i.expr=="string"}function kn(i){return L(i)&&typeof i.value=="string"}const Se="titleRow",Hn=["typeName","size","precision","scale","label"],fa={ToEnum:"to-enum",FromEnum:"from-enum"},ga={Lost:"lost",Gained:"gained"},bi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],Di=["isUnique"],ca=[fe,Se,"columnName","description","generatedExpression",...bi],pa=[fe,Se,"indexName",...Di];function Vn(i){if(!L(i)||!("data"in i)||!("styles"in i)||!("flags"in i)||!("highlightingMode"in i))return!1;const{data:e,styles:n}=i;return!L(n)||!("before"in n)||!("after"in n)?!1:Ne.isDiff(e)}function xn(i){return Vn(i[Se])}function Cn(i){return L(i)&&i.kind===gi.Domain&&typeof i.type=="string"}function qn(i){return i.kind===S.BoolType&&typeof i.type=="string"}function wn(i){return i.kind===S.IntegerType&&typeof i.type=="string"}function ri(i){return i.kind===S.DecimalType&&typeof i.type=="string"}function oi(i){return i.kind===S.FloatType&&typeof i.type=="string"}function li(i){return i.kind===S.StringType&&typeof i.type=="string"}function si(i){return i.kind===S.BinaryType&&typeof i.type=="string"}function di(i){return i.kind===S.TimeType&&typeof i.type=="string"}function Nn(i){return i.kind===S.JSONType&&typeof i.type=="string"}function An(i){return i.kind===S.SpatialType&&typeof i.type=="string"}function Sn(i){return i.kind===S.UUIDType&&typeof i.type=="string"}function Ie(i){return i.kind===S.EnumType&&Array.isArray(i.values)}function Tn(i){return i.kind===S.UnsupportedType&&typeof i.type=="string"}function ui(i){return typeof i.type=="string"}function Xe(i){switch(i.kind){case Ve.Literal:return bn(i)?i.value:i.kind;case Ve.RawExpr:return Dn(i)?i.expr:i.kind;case an.NamedDefault:try{return Xe(rn(i))}catch{return i.kind}default:return vn(i)?i.expr:kn(i)?i.value:i.kind}}function vi(i){return ki(Xe(i))}function _n(i){return ki(i)}function ki(i){return i.length<2||i[0]!=="'"||i[i.length-1]!=="'"?i:i.slice(1,-1).replace(/''/g,"'")}const En="Columns",Mn="Indexes";class ha{constructor(e){this.logger=e}transformSourceToTableOrientedSpec(e,n){if(this.isDdlApiTableOrientedSpec(e))return e;const t=this.extractRealm(e);if(!t)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,e),null;const r=this.findTableInRealm(t,n);return r?this.buildTableOrientedSpecFromRealm(t,r,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",t.schemas.map(a=>a.name)),null)}buildTableOrientedSpecFromRealm(e,n,t){const r=he(n.attrs,me.Comment);return{tableName:n.name,schemaName:t.schemaName,...r?{description:r.text}:{},columns:{title:En,items:(n.columns??[]).map(a=>this.buildColumnRowValue(e,n,a,t.schemaName))},indexes:{title:Mn,items:(n.indexes??[]).map(a=>this.buildIndexRowValue(a))}}}extractRealm(e){return this.isRealm(e)?e:L(e)&&this.isRealm(e.realm)?e.realm:null}findTableInRealm(e,n){var r;const t=e.schemas.find(a=>a.name===n.schemaName);if(t)return(r=t.tables)==null?void 0:r.find(a=>a.name===n.name)}isRealm(e){return L(e)?typeof e.ddlapi=="string"&&Array.isArray(e.schemas):!1}isDdlApiTableOrientedSpec(e){return!(!L(e)||typeof e.tableName!="string"||!L(e.columns)||!Array.isArray(e.columns.items)||!L(e.indexes)||!Array.isArray(e.indexes.items))}buildColumnRowValue(e,n,t,r){var y,v,M;const a=he(t.attrs,me.Comment),o=(y=t.attrs)==null?void 0:y.find(m=>m.kind===on.Identity),s=he(t.attrs,me.GeneratedExpr),g=o!==void 0||s!==void 0,u=this.findForeignKeysForColumn(n,t).map(m=>this.buildForeignKeyTarget(e,m,t,r)).filter(m=>m!==void 0),c=u.length>0,p=this.formatColumnType(t.type),D=(v=t.type)==null?void 0:v.type,H=D&&Ie(D)?D.values:void 0,h=this.isPrimaryKeyColumn(n,t);return{columnName:t.name,columnType:p,...H?{enumValues:H}:{},isPrimaryKey:h,isForeignKey:c,...u.length>0?{foreignKeyTargets:u}:{},isGenerated:g,...o?{generatedBy:"identity"}:{},...s&&!o?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,t),isNotNull:!h&&((M=t.type)==null?void 0:M.null)===!1,...t.default!==void 0?{defaultValue:vi(t.default)}:{},...a?{description:a.text}:{}}}buildIndexRowValue(e){const n=(e.parts??[]).slice().sort((r,a)=>r.seqNo-a.seqNo).map(r=>this.formatIndexPartName(r)).filter(r=>r.length>0),t=he(e.attrs,me.Comment);return{...e.name?{indexName:e.name}:{},partNames:n,isUnique:e.unique===!0,...t?{description:t.text}:{}}}findSchemaNameForTable(e,n){var t;for(const r of e.schemas)if((t=r.tables)!=null&&t.some(a=>a===n))return r.name}isPrimaryKeyColumn(e,n){var t;return(((t=e.primaryKey)==null?void 0:t.parts)??[]).some(r=>{var a;return((a=r.column)==null?void 0:a.name)===n.name})}isUniqueColumn(e,n){return(e.indexes??[]).some(t=>{var r,a,o;return t.unique===!0&&((r=t.parts)==null?void 0:r.length)===1&&((o=(a=t.parts[0])==null?void 0:a.column)==null?void 0:o.name)===n.name})}isSameForeignKeyColumn(e,n){return e===n||e.name===n.name}findForeignKeysForColumn(e,n){return(e.foreignKeys??[]).filter(t=>{var r;return(r=t.columns)==null?void 0:r.some(a=>this.isSameForeignKeyColumn(a,n))})}buildForeignKeyTarget(e,n,t,r){var f,u;const a=((f=n.columns)==null?void 0:f.findIndex(c=>this.isSameForeignKeyColumn(c,t)))??-1;if(a<0)return;const o=n.refTable,s=(u=n.refColumns)==null?void 0:u[a];if(!o||!s)return;const g=this.resolveForeignKeyTargetSchemaName(e,o,r);if(g)return{schemaName:g,tableName:o.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(e,n,t){const r=this.findSchemaNameForTable(e,n);if(r)return r;const a=this.findUniqueSchemaNameForTableName(e,n.name);return a||t}findUniqueSchemaNameForTableName(e,n){const t=e.schemas.filter(r=>{var a;return(a=r.tables)==null?void 0:a.some(o=>o.name===n)}).map(r=>r.name);if(t.length===1)return t[0]}formatColumnType(e){return e!=null&&e.raw?{kind:"Raw",raw:e.raw,label:e.raw}:e!=null&&e.type?this.formatSchemaType(e.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(e){if(Cn(e))return this.formatPgDomainType(e);const n=this.formatSchemaTypeLabel(e);return qn(e)?{kind:S.BoolType,typeName:e.type,label:n}:wn(e)?{kind:S.IntegerType,typeName:e.type,label:n,...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:ri(e)?{kind:S.DecimalType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:oi(e)?{kind:S.FloatType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.unsigned!==void 0?{unsigned:e.unsigned}:{}}:li(e)?{kind:S.StringType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:si(e)?{kind:S.BinaryType,typeName:e.type,label:n,...e.size!==void 0?{size:e.size}:{}}:di(e)?{kind:S.TimeType,typeName:e.type,label:n,...e.precision!==void 0?{precision:e.precision}:{},...e.scale!==void 0?{scale:e.scale}:{}}:Nn(e)?{kind:S.JSONType,typeName:e.type,label:n}:An(e)?{kind:S.SpatialType,typeName:e.type,label:n}:Sn(e)?{kind:S.UUIDType,typeName:e.type,label:n}:Ie(e)?{kind:S.EnumType,label:n,...e.type!==void 0?{typeName:e.type}:{},values:e.values}:Tn(e)?{kind:S.UnsupportedType,typeName:e.type,label:n}:{kind:e.kind,label:ui(e)?e.type:e.kind}}formatPgDomainType(e){const n=e.baseType?this.formatSchemaTypeLabel(e.baseType):void 0;return{kind:gi.Domain,name:e.type,label:e.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(e){let n;return ri(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):li(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):si(e)?n=this.formatParameterizedTypeLabel(e.type,e.size):oi(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision):di(e)?n=this.formatParameterizedTypeLabel(e.type,e.precision,e.scale):Ie(e)?n=e.type??e.values[0]??"enum":ui(e)?n=e.type:n=e.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(e){return e.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(e,...n){const t=n.filter(r=>r!==void 0);return t.length===0?e:`${e} (${t.join(", ")})`}formatIndexPartName(e){var n;return(n=e.column)!=null&&n.name?e.column.name:e.expr?Xe(e.expr):""}}const Ln=new Set([I.TABLE,I.COLUMNS,I.COLUMN,I.INDEXES,I.INDEX]);class Hi extends mn{createNodeMeta(e){return{_fragment:e}}createNodeValue(e,n,t,r){return!pn(t)||!this.isDdlApiTreeNodeKindWithNodeValue(e)?null:r(t,Hi.getDdlApiTreeNodeValueProps(e))}isDdlApiTreeNodeKindWithNodeValue(e){return Ln.has(e)}static getDdlApiTreeNodeValueProps(e){switch(e){case I.TABLE:return["tableName","schemaName","description"];case I.COLUMNS:case I.INDEXES:return["title"];case I.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case I.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function In(i){return`${i.schemaName}\0${i.tableName}\0${i.columnName}`}function jn(i,e,n){const t=n===E,r=new Set,a=[],o=g=>{const f=e==null?void 0:e[g];if(f)return f;for(const u of Object.values(e??{}))if(u&&B(u.data)&&u.data.afterValue===g)return u};for(const g of i){const f=o(g);if(!f){a.push({text:g});continue}if(r.has(f))continue;r.add(f);const{data:u}=f;if(Y(u)){!t&&typeof u.afterValue=="string"&&a.push({text:u.afterValue,diff:f});continue}if(K(u)){t&&typeof u.beforeValue=="string"&&a.push({text:u.beforeValue,diff:f});continue}if(B(u)){const c=t?typeof u.beforeValue=="string"?u.beforeValue:g:typeof u.afterValue=="string"?u.afterValue:g;a.push({text:c,diff:f})}}for(const[g,f]of Object.entries(e??{}))!f||r.has(f)||K(f.data)&&t&&(a.push({text:g,diff:f}),r.add(f));const s=g=>{const f=i.indexOf(g);return f>=0?f:i.length};return a.sort((g,f)=>s(g.text)-s(f.text))}function Vi(i,e="none"){if(i.length===0)return[];const n=[];return e==="tight"?n.push({text:"("}):e==="spaced"&&n.push({text:" ("}),i.forEach((t,r)=>{r>0&&n.push({text:", "}),n.push({text:t.text,diff:t.diff})}),(e==="tight"||e==="spaced")&&n.push({text:")"}),n}function Ce(i,e,n){if(!e)return i!==void 0?String(i):void 0;const{data:t}=e,r=n===E;return Y(t)?r?void 0:String(t.afterValue??i??""):K(t)?r?String(t.beforeValue??i??""):void 0:B(t)?String(r?t.beforeValue??i??"":t.afterValue??i??""):i!==void 0?String(i):void 0}function Fn(i,e){return(e===E?i.styles.before:i.styles.after).isContentVisible}const xi=["size","precision","scale"];function On(i){const e=i.diffs.columnTypeFieldDiffs;if(!(!e||Object.keys(e).length===0))return e}function Rn(i,e){var f;const n=(f=i.value())==null?void 0:f.columnType;if(!n)return{kind:"plain",text:""};const t=On(i);if(!t)return{kind:"plain",text:n.label};const r=t.typeName??t.label,a=t.typeName?"typeName":"label";if(Pn(t)){const u=Object.values(t).find(Boolean);return u?{kind:"monolithic",text:Gn(n,t,a,e),diff:Bn(u)}:{kind:"plain",text:n.label}}const o=[],s=Ce(Pe(n),r,e);s!==void 0&&o.push({text:s,diff:r});const g=Un(n,t,e);return o.push(...g),o.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:o}}function Pn(i){const e=Hn.map(t=>[t,i[t]]).filter(t=>!!t[1]);if(e.length===0)return!1;if(e.length===1){const[t]=e[0];return t==="typeName"||t==="label"}return new Set(e.map(([,t])=>t.data.action)).size===1}function Gn(i,e,n,t){const r=Ce(Pe(i),e[n],t)??Pe(i),a=[];for(const o of xi){const s=Ce(ze(i,o),e[o],t);s!==void 0&&a.push(s)}return a.length===0?r:`${r} (${a.join(", ")})`}function Un(i,e,n){const t=Kn(i,e,n);if(t.length===0)return[];const r=t.flatMap(a=>{const o=Ce(ze(i,a),e[a],n);return o===void 0?[]:[{text:o,diff:e[a]}]});return[...Vi(r,"spaced")]}function Kn(i,e,n){return xi.filter(t=>{const r=e[t];return r?Fn(r,n):ze(i,t)!==void 0})}function Pe(i){return"typeName"in i&&typeof i.typeName=="string"?i.typeName:"name"in i&&typeof i.name=="string"?i.name:i.label}function ze(i,e){if(!(e in i))return;const n=Reflect.get(i,e);return typeof n=="number"?n:void 0}function Bn(i){const{data:e}=i;return B(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Yellow}}}:Y(e)?{...i,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Green}}}:K(e)?{...i,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:oe.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:i}function Ci(i){const e=i.diffs.partNameDiffs;if(!(!e||Object.keys(e).length===0))return e}function Wn(i,e,n){var s;const t=((s=i.value())==null?void 0:s.partNames)??[],r=Ci(i);if(!r)return{kind:"plain",text:t.join(", ")};const a=jn(t,r,e),o=Vi(a,n);return o.length===0?{kind:"plain",text:t.join(", ")}:{kind:"segmented",segments:o}}function Yn(i){if(xn(i.diffs))return i.diffs[Se]}function $n(i){const e=i.diffs[fe];if(e&&(Y(e.data)||K(e.data)))return e}function qi(i,e){return i?(e===E?i.styles.before:i.styles.after).isHeaderVisible:!0}function Xn(i){const n=i.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function zn(i){const e={};let n=!1;for(const t of bi){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function Jn(i){return i.diffs.generatedExpression}function Qn(i){return i.diffs.description}function wi(i){const n=i.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function Zn(i){return i.diffs.enumValuesRowColorizingDiff}function Ni(i){return i.diffs.defaultValue}function et(i){return i.diffs.defaultValueRowColorizingDiff}function it(i,e){var o;const n=(o=i.value())==null?void 0:o.defaultValue,t=Ni(i);if(!t)return n;const r=t.data,a=e===E;return Y(r)?a?void 0:n:K(r)?a?je(r.beforeValue)??n:void 0:B(r)?a?je(r.beforeValue)??n:je(r.afterValue)??n:n}function je(i){if(typeof i=="string")return _n(i);if(L(i)&&"kind"in i)return vi(i)}function nt(i,e){var f;const n=((f=i.value())==null?void 0:f.enumValues)??[],t=wi(i),r=e===E,a=new Set,o=[],s=u=>{const c=t==null?void 0:t[u];if(c)return c;for(const p of Object.values(t??{}))if(p&&B(p.data)&&p.data.afterValue===u)return p};for(const u of n){const c=s(u);if(!c){o.push({literal:u});continue}if(a.has(c))continue;a.add(c);const{data:p}=c;if(Y(p)){!r&&typeof p.afterValue=="string"&&o.push({literal:p.afterValue,diff:c});continue}if(K(p)){r&&typeof p.beforeValue=="string"&&o.push({literal:p.beforeValue,diff:c});continue}if(B(p)){const D=r?typeof p.beforeValue=="string"?p.beforeValue:u:typeof p.afterValue=="string"?p.afterValue:u;o.push({literal:D,diff:c})}}for(const[u,c]of Object.entries(t??{}))!c||a.has(c)||K(c.data)&&r&&(o.push({literal:u,diff:c}),a.add(c));const g=u=>{const c=n.indexOf(u);return c>=0?c:n.length};return o.sort((u,c)=>g(u.literal)-g(c.literal))}function tt(i){const e={};let n=!1;for(const t of Di){const r=i.diffs[t];r&&(e[t]=r,n=!0)}return n?e:void 0}function at(i){return i?i.highlightingMode.get(Re.Default)!==De.Invisible:!1}const rt=d.createContext(!1),Te=i=>{const{children:e,diffType:n,diffTypeCause:t,hidden:r=!1}=i;return r||!n?e:l.jsxs("div",{className:"flex flex-row relative w-full",children:[l.jsx(ln,{variant:n,message:t}),e]})};Te.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const _e=d.memo(i=>{const{content:e}=i;return l.jsx("div",{className:"flex flex-row w-full",children:e})});_e.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ee=d.memo(i=>{const{left:e,right:n}=i;return l.jsxs("div",{className:"flex flex-row w-full",children:[l.jsx("div",{className:"w-1/2",children:e}),l.jsx("div",{className:"w-1/2",children:n})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Je="px-4",ot="",lt="px-4",Qe="";var F=(i=>(i.Default="default",i.AsyncApiJsoSection="async-api-jso-section",i.JsoProperty="jso-property",i.DdlApiSection="ddlapi-section",i.DdlApiProperty="ddlapi-property",i))(F||{});var x=(i=>(i.h1="h1",i.h2="h2",i.h3="h3",i.h4="h4",i.h5="h5",i.h6="h6",i.body2="body2",i.body1="body1",i))(x||{});const st=i=>{const{isExpandable:e,expanded:n,setExpanded:t,variant:r}=i,a=d.useCallback(()=>{t==null||t(o=>!o)},[t]);return l.jsx(l.Fragment,{children:e&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${ft(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:a,children:n?"Show less":"Show more"})})})},Ai=d.memo(i=>{const{value:e,variant:n,layoutSide:t,onClick:r,diff:a,usage:o,highlightingMode:s=De.Default}=i,g=s===De.Default,f=s===De.Invisible,{textFontWeight:u,labelFontWeight:c,labelColor:p,textColor:D,label:H}=i,[h,y]=d.useState(!1),v=d.useCallback((C,T,w)=>{if(w)return null;const _=f?"":T.join(" "),k=`text-value ${r?"hover:cursor-pointer":""} ${u?`font-${u}`:""}`.trim(),j=`${k} ${_}`.trim(),ae={onClick:r,...D!=null&&D.trim()?{style:{color:D}}:{}};C=h?C:ut(C);const Z=(P,z)=>{const N={...ae,className:z};switch(n){case x.h1:return l.jsx("h1",{...N,children:P});case x.h2:return l.jsx("h2",{...N,children:P});case x.h3:return l.jsx("h3",{...N,children:P});case x.h4:return l.jsx("h4",{...N,children:P});case x.h5:return l.jsx("h5",{...N,children:P});case x.h6:return l.jsx("h6",{...N,children:P});case x.body1:return l.jsx("span",{...N,className:`${z} text-value-body1`.trim(),children:P});case x.body2:return l.jsx("span",{...N,className:`${z} text-value-body2`.trim(),children:P})}};return H?Z(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:c?`font-${c}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${H}: `}),l.jsx("span",{className:_,children:C})]}),k):Z(C,j)},[h,f,H,p,c,r,D,u,n]),M=d.useCallback(C=>{const T=[];let w=C,_=!1;if(a){const{data:k,styles:j}=a;switch(t){case E:T.push(R.highlighter(j.before.textHighlighterColor)),g&&(K(k)&&(w=re(k.beforeValue)?k.beforeValue:w),B(k)&&(o===F.JsoProperty&&!f&&T.push(R.highlighter(oe.Yellow)),w=re(k.beforeValue)?k.beforeValue:w),Fe(k)&&(w=re(k.beforeKey)?k.beforeKey:w)),Y(k)&&(_=!0);break;case J:T.push(R.highlighter(j.after.textHighlighterColor)),g&&(Y(k)&&(w=re(k.afterValue)?k.afterValue:w),B(k)&&(o===F.JsoProperty&&!f&&T.push(R.highlighter(oe.Yellow)),w=re(k.afterValue)?k.afterValue:w),Fe(k)&&(w=re(k.afterKey)?k.afterKey:w)),K(k)&&(_=!0);break}}return[w,T,_]},[a,g,f,t,o]),[m,V,b]=M(e);return d.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[v(m,V,b),!b&&l.jsx(st,{isExpandable:dt(m),expanded:h,setExpanded:y,variant:n})]}),[v,m,V,b,h,y,n])}),Ge=5,Ue=300;function dt(i){return i?i.length>Ue||ci.trim(i.split(`
`)).length>Ge:!1}function ut(i){if(!i)return;if(i.length>Ue)return i.slice(0,Ue)+"...";const e=ci.trim(i.split(`
`));return e.length>Ge?e.slice(0,Ge).join(`
`)+"...":i}function re(i){return typeof i=="string"}function ft(i){switch(i){case x.h1:return"text-value-expander--h1";case x.h2:return"text-value-expander--h2";case x.h3:return"text-value-expander--h3";case x.h4:return"text-value-expander--h4";case x.h5:return"text-value-expander--h5";case x.h6:return"text-value-expander--h6";case x.body1:return"text-value-expander--body1";case x.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const $="data-precededby",U="data-ddl-list-last-row";var A=(i=>(i.ROOT="root",i.ADDRESS_ROW="address-row",i.DESCRIPTION_ROW="description-row",i.SUMMARY_ROW="summary-row",i.MESSAGE_SECTION_SELECTOR="message-section-selector",i.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",i.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",i.JSON_SCHEMA_VIEWER="json-schema-viewer",i.JSO_VIEWER="jso-viewer",i.JSO_PROPERTY="jso-property",i.BINDING_VERSION_ROW="binding-version-row",i.SERVER_BLOCK="server-block",i.SERVER_ADDRESS_ROW="server-address-row",i.DDL_TABLE_HEADER_ROW="ddl-table-header-row",i.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",i.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",i.DDL_SECTION_HEADER="ddl-section-header",i.DDL_COLUMN_ROW="ddl-column-row",i.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",i.DDL_INDEX_ROW="ddl-index-row",i))(A||{}),Q=(i=>(i.Default="default",i.DdlApiProperty="ddlapi-property",i))(Q||{});const gt={[Q.DdlApiProperty]:Qe},ct={[Q.DdlApiProperty]:["min-h-[26px]"]};function pt(i){const e=gt[i]??Je,n=ct[i]??[];return[e,...n].join(" ")}const ve=d.memo(i=>{const{value:e,variant:n,layoutSide:t,usage:r=Q.Default}=i,{label:a,labelFontWeight:o,textFontWeight:s,labelColor:g,textColor:f}=i,{[$]:u}=i,{diff:c,descendantDiffs:p,diffsSeverities:D}=i,H=ge(),h=r===Q.DdlApiProperty,y=h&&H>0,v=d.useMemo(()=>{if(!c)return[];const{data:V,styles:b}=c;if(!V)return[];const q=[];return t===E&&q.push(R.background(b.before.backgroundColor)),t===J&&q.push(R.background(b.after.backgroundColor)),q},[c,t]),M=d.useMemo(()=>pt(r),[r]),m=l.jsx(Ai,{label:a,labelFontWeight:o,textFontWeight:s,labelColor:g,textColor:f,value:e,variant:n,layoutSide:t,diff:c});return l.jsxs("div",{"data-precededby":u,className:`text-row-content flex h-full ${h?"items-stretch":""} ${M} gap-2 ${v.join(" ")}`,children:[y&&l.jsxs("div",{"data-precededby":u,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:H}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:m}):m]})});ve.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const de=d.memo(i=>{const e=we(),{diffsSeverities:n,diffsSeverityPlacement:t=pi.DescriptionRow}=i,r=d.useMemo(()=>n==null?void 0:n[t],[n,t]),a=d.useMemo(()=>r==null?void 0:r.type,[r]),o=d.useMemo(()=>We(r==null?void 0:r.causedAt),[r]);switch(e){case $e:return l.jsx(Te,{diffType:a,diffTypeCause:o,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ve,{...i,layoutSide:E}),right:l.jsx(ve,{...i,layoutSide:J})})});case Ye:return l.jsx(_e,{content:l.jsx(ve,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});de.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const ce="#353C4E",ht=d.createContext(void 0);function mt(){return d.useContext(ht)}const Si=i=>{const{expandable:e,expanded:n,onClick:t,level:r}=i,a=d.useContext(rt),o=r>0,s=t??(()=>{a&&console.warn("Expander callback is not provided.")});return!e&&!o?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${o?"gap-0.5":""}`,children:[o&&l.jsx(sn,{short:e}),e&&n!==void 0&&l.jsx(dn,{onToggle:s,expanded:n})]})};Si.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const yt={[F.JsoProperty]:ot,[F.DdlApiSection]:lt,[F.DdlApiProperty]:Qe},bt={[F.JsoProperty]:["min-h-[26px]"],[F.DdlApiProperty]:["min-h-[26px]"]};function Dt(i){const e=yt[i]??Je,n=bt[i]??[];return[e,...n].join(" ")}const ke=d.memo(i=>{const{expandable:e,expanded:n,onClickExpander:t,value:r,variant:a,layoutSide:o,enableHeader:s=!0,enableHeaderValue:g=!0,subheader:f,usage:u=F.Default,highlightingMode:c=un}=i,{diff:p,descendantDiffs:D,diffsSeverities:H}=i,{[$]:h,[U]:y}=i,v=d.useMemo(()=>{switch(u){case F.Default:return c.get(Re.Default);case F.AsyncApiJsoSection:case F.JsoProperty:return c.get(Re.JsoPropertyKey)}},[c,u]),M=ge(),m=mt(),V=d.useMemo(()=>m?o===E?m.beforeLevel:m.afterLevel:M,[o,M,m]),b=d.useMemo(()=>{const _=[];if(!p)return _;const{data:k,styles:j}=p;return k&&(o===E&&_.push(R.background(j.before.backgroundColor)),o===J&&_.push(R.background(j.after.backgroundColor))),_},[p,o]),q=d.useMemo(()=>g?l.jsx(Ai,{"data-precededby":h,value:r,variant:a,layoutSide:o,diff:p,usage:u,highlightingMode:v,onClick:t}):null,[g,h,r,a,o,p,u,v,t]),C=u===F.DdlApiProperty,T=d.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(e||V>0)&&l.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:V}),l.jsx(Si,{expandable:e,expanded:n,onClick:t,level:V})]}),!C&&q]}):V>0&&l.jsx(xe,{level:V}),[s,e,V,h,n,t,q,C]),w=d.useMemo(()=>Dt(u),[u]);return l.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":y?!0:void 0,className:`title-row-content flex ${C?"items-stretch":"items-center"} h-full ${w} gap-2 ${b.join(" ")}`,children:[T,C?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[q,f==null?void 0:f(o)]}):f==null?void 0:f(o)]})});ke.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(i=>{const e=we(),{diff:n,diffsSeverities:t,enableHeaderValue:r}=i,a=d.useMemo(()=>t==null?void 0:t["title-row"],[t]),o=d.useMemo(()=>a==null?void 0:a.type,[a]),s=d.useMemo(()=>We(a==null?void 0:a.causedAt),[a]);switch(e){case $e:return l.jsx(Te,{diffType:o,diffTypeCause:s,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ke,{...i,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:E}),right:l.jsx(ke,{...i,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:J})})});case Ye:return l.jsx(_e,{content:l.jsx(ke,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function ma(i,e){return d.useMemo(()=>e(i)?Ti(i):{},[e,i])}function Ti(i){return{nodeDiffs:i.diffs,nodeDescendantDiffs:i.descendantDiffs,nodeDiffsSeverities:i.diffsSeverities}}function vt(i,e={}){const{diffKey:n,fallbackToNodeDiff:t=!0,includeDescendantDiffs:r=!0,diffsSeverityPlacement:a,resolveDiff:o}=e,{nodeDiffs:s,nodeDescendantDiffs:g,nodeDiffsSeverities:f}=i;if(!s)return{};const u=Object.entries(s),c=H=>{const h=u.find(([y])=>y===String(H));return h==null?void 0:h[1]},p=n?c(n):void 0;return{diff:o?o(s,c):t?s[fe]??p:p,...r?{descendantDiffs:g}:{},diffsSeverities:f,...a?{diffsSeverityPlacement:a}:{}}}function kt(i){return yn.includes(i.kind)}function Ht(i){return i.childrenNodes().filter(kt)}function ya(i){return i.kind===I.TABLE}function Vt(i){return i.kind===I.COLUMNS}function _i(i){return i.kind===I.COLUMN}function Ze(i){return _i(i)&&i instanceof Ae}function xt(i){return i.kind===I.INDEXES}function Ei(i){return i.kind===I.INDEX}function Mi(i){return Ei(i)&&i instanceof Ae}function Ct(i){return i.filter(_i)}function qt(i){return i.filter(Ei)}const wt=d.createContext(null);function Nt(){const i=d.useContext(wt);if(!i)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return i}const At=({href:i,className:e,children:n})=>l.jsx("a",{href:i,className:e,children:n});At.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function St(i){return i?!!(X(i.defaultValue)||X(i.generatedExpression)||i.enumValues&&i.enumValues.length>0):!1}const Li=d.memo(i=>{const{isVisible:e,value:n,blockClassName:t,valueClassName:r}=i;return e?l.jsx("span",{className:t,children:l.jsx("span",{className:r||void 0,children:`${n}`})}):null});Li.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function Tt(i={}){const{textHighlighterColor:e,borderShadowColor:n,isFontMuted:t}=i;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",R.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[R.highlighter(e),t?R.fontMuted():""].filter(Boolean).join(" ")}),[n,t,e])}const ie=d.memo(i=>{const{isVisible:e,value:n,textHighlighterColor:t,borderShadowColor:r,isFontMuted:a}=i,{blockClassName:o,valueClassName:s}=Tt({textHighlighterColor:t,borderShadowColor:r,isFontMuted:a});return l.jsx(Li,{isVisible:e,value:n,blockClassName:o,valueClassName:s})});ie.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const He=d.memo(i=>{var H;const{label:e,subheader:n,layoutSide:t,diff:r,colorizingDiff:a}=i,{[$]:o,[U]:s}=i,g=ge(),f=t===E?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,c=(H=(t===E?a==null?void 0:a.styles.before:a==null?void 0:a.styles.after)??f)==null?void 0:H.backgroundColor,p=d.useMemo(()=>c?[R.background(c)]:[],[c]),D=d.useMemo(()=>{const h=a==null?void 0:a.data;if(h){if(Y(h))return t!==E;if(K(h))return t===E}return(f==null?void 0:f.isContentVisible)??!0},[a,f==null?void 0:f.isContentVisible,t]);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":o,"data-ddl-list-last-row":s?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${Qe} min-h-[26px] gap-2 ${p.join(" ")}`,children:[g>0&&l.jsxs("div",{"data-precededby":o,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:g}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),D&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${e}:`}),n==null?void 0:n(t)]})]})});He.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ne=d.memo(i=>{var r;const e=we(),n=(r=i.diffsSeverities)==null?void 0:r[pi.AdditionalInfoRow],t=d.useMemo(()=>We(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(e){case $e:return l.jsx(Te,{diffType:n==null?void 0:n.type,diffTypeCause:t,hidden:!1,children:l.jsx(Ee,{left:l.jsx(He,{...i,layoutSide:E}),right:l.jsx(He,{...i,layoutSide:J})})});case Ye:return l.jsx(_e,{content:l.jsx(He,{...i,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",e,") is not supported."]})});ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function te(i,e){return i?(e===E?i.styles.before:i.styles.after).textHighlighterColor:void 0}const _t="ux-badge_ddlapi_primary-key",Ii="ux-badge_ddlapi_foreign-key",Et="ux-badge_ddlapi_unique",Mt="ux-badge_ddlapi_not-null",Lt="ux-badge_ddlapi_generated",ji="public",Fi="Default",Oi="As",Ri="Values";function Pi(i){const e=`${i.tableName}.${i.columnName}`;return!i.schemaName||i.schemaName===ji?e:`${i.schemaName}.${e}`}function Ke(i){return i.join(", ")}const Be=d.memo(i=>{const{target:e,hideBadge:n=!1,textHighlighterColor:t}=i,{navigationLinkBuilder:r,navigationLinkComponent:a}=Nt(),o=d.useMemo(()=>r(e.schemaName,e.tableName,e.columnName),[r,e]),s=d.useMemo(()=>["ddlapi-foreign-key-link",R.highlighter(t)].filter(Boolean).join(" "),[t]),g=l.jsx(a,{href:o,className:s,children:Pi(e)});return n?g:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(fn,{text:"FK",colorSchema:Ii,inline:!0}),g]})});Be.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function It(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Gi(i,e){return!!i||!!e}function ei(i,e){return i?e===E?i.styles.before.isContentVisible:i.styles.after.isContentVisible:!0}function jt(i,e,n){return Gi(i,e)&&ei(e,n)}function be(i){const{columnId:e,label:n,colorSchema:t,flagValue:r,flagDiff:a,layoutMode:o,layoutSide:s}=i;if(!Gi(r,a))return null;if(!ei(a,s))return It();const g=at(a)?a==null?void 0:a.data:void 0;return l.jsx(hi,{label:n,colorSchema:t,layoutMode:o,layoutSide:s,isNodeChanged:!1,isContentChanged:!!g,$changes:g},Ot(e,n))}function Ft(i){const{columnId:e,target:n,targetDiff:t,layoutMode:r,layoutSide:a}=i,o=Rt(e,n),s=te(t,a);if(t&&!ei(t,a))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},o);if(!t)return l.jsx(Be,{target:n},o);const g=t.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(hi,{label:"FK",colorSchema:Ii,layoutMode:r,layoutSide:a,isNodeChanged:!1,isContentChanged:!0,$changes:g}),l.jsx(Be,{target:n,hideBadge:!0,textHighlighterColor:s})]},o)}const pe=d.memo(i=>{const{columnId:e,value:n,flagDiffs:t,foreignKeyTargetDiffs:r,layoutSide:a}=i,o=we(),s=d.useMemo(()=>t??{},[t]),g=d.useMemo(()=>r??{},[r]),f=d.useMemo(()=>be({columnId:e,label:"PK",colorSchema:_t,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:o,layoutSide:a}),[e,s.isPrimaryKey,o,a,n.isPrimaryKey]),u=d.useMemo(()=>jt(n.isPrimaryKey,s.isPrimaryKey,a),[s.isPrimaryKey,a,n.isPrimaryKey]),c=d.useMemo(()=>be({columnId:e,label:"unique",colorSchema:Et,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:o,layoutSide:a}),[e,s.isUnique,o,a,n.isUnique]),p=d.useMemo(()=>u?null:be({columnId:e,label:"not null",colorSchema:Mt,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:o,layoutSide:a}),[e,s.isNotNull,u,o,a,n.isNotNull]),D=d.useMemo(()=>be({columnId:e,label:"generated",colorSchema:Lt,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:o,layoutSide:a}),[e,s.isGenerated,o,a,n.isGenerated]),H=d.useMemo(()=>{const y=n.foreignKeyTargets??[];return y.length===0?[]:y.map(v=>Ft({columnId:e,target:v,targetDiff:g[In(v)],layoutMode:o,layoutSide:a}))},[e,o,a,g,n.foreignKeyTargets]),h=d.useMemo(()=>[f,c,p,D,...H].filter(Boolean),[H,D,p,f,c]);return h.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:h})});function Ot(i,e){return`${i}-${e}`}function Rt(i,e){return`${i}-FK-${Pi(e)}`}pe.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ii=d.memo(i=>{const{isVisible:e,value:n,className:t}=i;return e?l.jsx("span",{className:t,children:`${n}`}):null});ii.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ui(i){const{appearance:e}=i;return d.useMemo(()=>["ddlapi-property-value","subheader",e].filter(Boolean).join(" "),[e])}const ue=d.memo(i=>{const{isVisible:e,value:n,appearance:t}=i,r=Ui({appearance:t});return l.jsx(ii,{isVisible:e,value:n,className:r})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Ki=i=>{const{node:e,additionalInfoPrecededBy:n=A.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:r}=i,a=le(),o=e.value(),s=d.useCallback(b=>o?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(ue,{isVisible:!0,value:o.columnType.label,appearance:"text"}),l.jsx(pe,{columnId:e.id,layoutSide:b,value:o})]}):l.jsx(l.Fragment,{}),[e.id,o]),g=d.useCallback(b=>{const q=o==null?void 0:o.defaultValue;return X(q)?l.jsx(ie,{isVisible:!0,value:q}):l.jsx(l.Fragment,{})},[o]),f=d.useCallback(b=>{const q=o==null?void 0:o.generatedExpression;return X(q)?l.jsx(ie,{isVisible:!0,value:q}):l.jsx(l.Fragment,{})},[o]),u=d.useCallback(b=>{var q;return(q=o==null?void 0:o.enumValues)!=null&&q.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:o.enumValues.map((C,T)=>l.jsx(ie,{isVisible:!0,value:C},`${C}-${T}`))}):l.jsx(l.Fragment,{})},[o]),c=a===se,p=d.useMemo(()=>c&&!!(o!=null&&o.description),[c,o==null?void 0:o.description]),D=!!(o!=null&&o.enumValues&&o.enumValues.length>0),H=X(o==null?void 0:o.defaultValue),h=X(o==null?void 0:o.generatedExpression),v=t&&!(c&&(D||H||h)),M=t&&D&&!H&&!h,m=t&&H&&!h,V=t&&h;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[U]:v||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:s,usage:F.DdlApiProperty}),p&&l.jsx(de,{"data-precededby":A.DDL_COLUMN_ROW,value:o.description??"",variant:x.body2,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty}),c&&D&&l.jsx(ne,{"data-precededby":n,[U]:M||void 0,label:Ri,subheader:u}),c&&H&&l.jsx(ne,{"data-precededby":D?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:m||void 0,label:Fi,subheader:g}),c&&h&&l.jsx(ne,{"data-precededby":H||D?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:V||void 0,label:Oi,subheader:f})]}):null};Ki.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function fi(i,e){return i?(e===E?i.styles.before:i.styles.after).borderShadowColor:void 0}function Pt(i,e){return i?(e===E?i.styles.before:i.styles.after).isFontMuted===!0:!1}function Gt(i){if(Ze(i))return Xn(i)}function Ut(i){if(Ze(i))return zn(i)}function Kt(i){if(Mi(i))return tt(i)}const Bi=$n;function Wi(i){const e=vt(Ti(i),{resolveDiff:()=>Yn(i)});return e.diff?{...e,highlightingMode:e.diff.highlightingMode}:{}}function Bt(i){const{appearance:e,textHighlighterColor:n,backgroundColor:t}=i,r=Ui({appearance:e});return d.useMemo(()=>[r,R.highlighter(n),R.background(t)].filter(Boolean).join(" "),[e,t,r,n])}const Me=d.memo(i=>{const{isVisible:e,value:n,appearance:t,textHighlighterColor:r,backgroundColor:a}=i,o=Bt({appearance:t,textHighlighterColor:r,backgroundColor:a});return l.jsx(ii,{isVisible:e,value:n,className:o})});Me.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Wt(i,e){return i?(e===E?i.styles.before:i.styles.after).backgroundColor:void 0}function Yt(i){return i.text===", "||i.text===","}function $t(i,e){const n=[];let t=!1;return i.forEach((r,a)=>{if(Yt(r)){t=!0;return}t&&(n.push(l.jsx("span",{className:"mr-1",children:","},`comma-${a}`)),t=!1),n.push(Xt(r,a,e))}),n}function Xt(i,e,n){return i.diff?l.jsx(Me,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:te(i.diff,n)},`${i.text}-${e}`):l.jsx(ue,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const qe=d.memo(i=>{const{display:e,layoutSide:n}=i;return e.kind==="plain"?l.jsx(ue,{isVisible:!0,value:e.text,appearance:"text"}):e.kind==="monolithic"?l.jsx(Me,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:te(e.diff,n),backgroundColor:Wt(e.diff,n)}):l.jsx("span",{className:"inline-flex items-center",children:$t(e.segments,n)})});qe.__docgenInfo={description:"",methods:[],displayName:"DdlCommaSeparatedListWithDiffs",props:{layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:'"segmented"',required:!0}},{key:"segments",value:{name:"unknown",required:!0}}]}}]},description:""}}};function zt(i){const e=i.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return e===-1?{typeNameSegments:i,parameterSegments:[]}:{typeNameSegments:i.slice(0,e),parameterSegments:i.slice(e)}}function Jt(i,e,n){return i.diff?l.jsx(Me,{isVisible:!0,value:i.text,appearance:"text",textHighlighterColor:te(i.diff,n)},`${i.text}-${e}`):l.jsx(ue,{isVisible:!0,value:i.text,appearance:"text"},`${i.text}-${e}`)}const Yi=d.memo(i=>{const{node:e,layoutSide:n}=i,t=Rn(e,n);if(t.kind==="plain"||t.kind==="monolithic")return l.jsx(qe,{layoutSide:n,display:t});const{typeNameSegments:r,parameterSegments:a}=zt(t.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[r.map((o,s)=>Jt(o,s,n)),a.length>0&&l.jsx(qe,{layoutSide:n,display:{kind:"segmented",segments:a}})]})});Yi.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const $i=i=>{const{node:e,additionalInfoPrecededBy:n=A.DDL_COLUMN_ROW,isLastInList:t=!1,[$]:r}=i,a=le(),o=e.value(),s=d.useMemo(()=>Bi(e),[e]),g=d.useMemo(()=>Wi(e),[e]),f=d.useMemo(()=>Ut(e),[e]),u=d.useMemo(()=>Gt(e),[e]),c=d.useMemo(()=>Qn(e),[e]),p=d.useMemo(()=>Jn(e),[e]),D=d.useMemo(()=>wi(e),[e]),H=d.useMemo(()=>Zn(e),[e]),h=d.useMemo(()=>Ni(e),[e]),y=d.useMemo(()=>et(e),[e]),v=d.useCallback(N=>o?qi(s,N)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(Yi,{node:e,layoutSide:N}),l.jsx(pe,{columnId:e.id,layoutSide:N,value:o,flagDiffs:f,foreignKeyTargetDiffs:u})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[f,u,e,s,o]),M=d.useCallback(N=>{const W=it(e,N);return X(W)?l.jsx(ie,{isVisible:!0,value:W,textHighlighterColor:te(h,N),borderShadowColor:fi(h,N)}):l.jsx(l.Fragment,{})},[h,e]),m=d.useCallback(N=>{const W=(()=>{const G=p==null?void 0:p.data;return G?N===E?K(G)||B(G)?G.beforeValue:void 0:Y(G)||B(G)?G.afterValue:void 0:o==null?void 0:o.generatedExpression})();return X(W)?l.jsx(ie,{isVisible:!0,value:W,textHighlighterColor:te(p,N)}):l.jsx(l.Fragment,{})},[p,o]),V=d.useCallback(N=>{const W=nt(e,N);return W.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:W.map((G,en)=>l.jsx(ie,{isVisible:!0,value:G.literal,textHighlighterColor:te(G.diff,N),borderShadowColor:fi(G.diff,N),isFontMuted:Pt(G.diff,N)},`${G.literal}-${en}`))})},[e]),b=a===se,q=!!s,C=b&&(!!(o!=null&&o.description)||!!c),T=!!(o!=null&&o.enumValues&&o.enumValues.length>0||D),w=!!(X(o==null?void 0:o.defaultValue)||h||y),_=X(o==null?void 0:o.generatedExpression)||!!p,k=b&&(T||w||_),j=t&&!C&&!k,ae=t&&C&&!k,Z=t&&T&&!w&&!_,P=t&&w&&!_,z=t&&_;return o?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":r,[U]:j||void 0,value:o.columnName,expandable:!1,expanded:!0,variant:x.body2,subheader:v,usage:F.DdlApiProperty,...g}),C&&l.jsx(de,{"data-precededby":A.DDL_COLUMN_ROW,[U]:ae||void 0,value:o.description??"",variant:x.body2,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty,diff:c,diffsSeverities:e.diffsSeverities}),b&&T&&l.jsx(ne,{"data-precededby":n,[U]:Z||void 0,label:Ri,subheader:V,colorizingDiff:H,diffsSeverities:D?e.diffsSeverities:void 0}),b&&!q&&w&&l.jsx(ne,{"data-precededby":T?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:P||void 0,label:Fi,subheader:M,colorizingDiff:y,diffsSeverities:h||y?e.diffsSeverities:void 0}),b&&_&&l.jsx(ne,{"data-precededby":w||T?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:z||void 0,label:Oi,subheader:m,diff:p,colorizingDiff:e.diffs[fe],diffsSeverities:e.diffsSeverities})]}):null};$i.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Qt(i,e){let n=!1;return i.map((t,r)=>{const a=r===i.length-1,o=r===0?A.DDL_SECTION_HEADER:n?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:A.DDL_COLUMN_ROW,s=n?A.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:A.DDL_COLUMN_ROW,g={columnNode:t,titlePrecededBy:o,additionalInfoPrecededBy:s,isLastInList:a};return n=e&&St(t.value()),g})}const Xi=i=>{const{node:e,[$]:n}=i,t=ge(),r=le(),a=e.value(),o=Ct(e.childrenNodes()),s=r===se,g=d.useMemo(()=>Qt(o,s),[o,s]);return o.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(a==null?void 0:a.title)??"Columns",expandable:!1,expanded:!0,variant:x.h2}),l.jsx(mi.Provider,{value:t+1,children:g.map(({columnNode:f,titlePrecededBy:u,additionalInfoPrecededBy:c,isLastInList:p})=>Ze(f)?l.jsx($i,{"data-precededby":u,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id):l.jsx(Ki,{"data-precededby":u,additionalInfoPrecededBy:c,isLastInList:p,node:f},f.id))})]})};Xi.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const zi=i=>{const{schemaName:e,[$]:n}=i;return e===ji?null:l.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Je}`,children:l.jsx("span",{className:"ddl-schema-name-block",children:e})})};zi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const Ji=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,r=le(),a=e.value(),o=d.useMemo(()=>a?a.indexName?a.indexName:Ke(a.partNames):"",[a]),s=d.useCallback(u=>a?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.indexName&&l.jsx(ue,{isVisible:!0,value:`(${Ke(a.partNames)})`,appearance:"text"}),l.jsx(pe,{layoutSide:u,value:a})]}):l.jsx(l.Fragment,{}),[a]),g=d.useMemo(()=>r===se&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),f=n;return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[U]:f||void 0,value:o,expandable:!1,expanded:!0,variant:x.body2,subheader:a.indexName||a.isUnique?s:void 0,usage:F.DdlApiProperty}),g&&l.jsx(de,{"data-precededby":A.DDL_INDEX_ROW,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty})]}):null};Ji.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Qi=i=>{const{node:e,isLastInList:n=!1,[$]:t}=i,r=le(),a=e.value(),o=d.useMemo(()=>Bi(e),[e]),s=d.useMemo(()=>Wi(e),[e]),g=d.useMemo(()=>Kt(e),[e]),f=d.useMemo(()=>Ci(e),[e]),u=!!(a!=null&&a.indexName),c=!!f,p=d.useMemo(()=>a?a.indexName?a.indexName:c?"":Ke(a.partNames):"",[c,a]),D=d.useCallback(m=>{const b=Wn(e,m,u?"tight":"none");return l.jsx(qe,{layoutSide:m,display:b})},[u,e]),H=d.useCallback(m=>{if(!a)return l.jsx(l.Fragment,{});if(!qi(o,m))return l.jsx(l.Fragment,{});const V=a.partNames.length>0&&(u||c);return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[V&&D(m),l.jsx(pe,{columnId:e.id,layoutSide:m,value:a,flagDiffs:g})]})},[g,u,c,e.id,o,D,a]),h=d.useMemo(()=>r===se&&!!(a!=null&&a.description),[r,a==null?void 0:a.description]),y=!!o,v=n,M=!!a&&(u&&a.partNames.length>0||a.isUnique||!!(g!=null&&g.isUnique)||!u&&c);return a?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":t,[U]:v||void 0,value:p,expandable:!1,expanded:!0,variant:x.body2,subheader:M?H:void 0,usage:F.DdlApiProperty,...s}),h&&!y&&l.jsx(de,{"data-precededby":A.DDL_INDEX_ROW,value:a.description??"",variant:x.body1,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty})]}):null};Qi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Zt(i){return i.map((e,n)=>({indexNode:e,titlePrecededBy:n===0?A.DDL_SECTION_HEADER:A.DDL_INDEX_ROW,isLastInList:n===i.length-1}))}const Zi=i=>{const{node:e,[$]:n}=i,t=ge(),r=e.value(),a=qt(e.childrenNodes()),o=d.useMemo(()=>Zt(a),[a]);return a.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(r==null?void 0:r.title)??"Indexes",expandable:!1,expanded:!0,variant:x.h2}),l.jsx(mi.Provider,{value:t+1,children:o.map(({indexNode:s,titlePrecededBy:g,isLastInList:f})=>Mi(s)?l.jsx(Qi,{"data-precededby":g,isLastInList:f,node:s},s.id):l.jsx(Ji,{"data-precededby":g,isLastInList:f,node:s},s.id))})]})};Zi.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const ea=i=>{const{node:e,noHeading:n=!1,[$]:t=A.ROOT}=i,r=le(),a=e.value(),o=Ht(e),s=o.find(Vt),g=o.find(xt),f=!!(a!=null&&a.schemaName),u=r===se&&!!(a!=null&&a.description),c=n?A.ROOT:A.DDL_TABLE_HEADER_ROW;return l.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&l.jsx(ee,{"data-precededby":t,value:(a==null?void 0:a.tableName)??"",expandable:!1,expanded:!0,variant:x.h1}),f&&l.jsx(zi,{"data-precededby":c,schemaName:(a==null?void 0:a.schemaName)??""}),u&&l.jsx(de,{"data-precededby":f?A.DDL_TABLE_SCHEMA_ROW:c,value:(a==null?void 0:a.description)??"",variant:x.h4,textFontWeight:"normal",textColor:ce}),s&&l.jsx(Xi,{"data-precededby":u?A.DDL_TABLE_DESCRIPTION_ROW:f?A.DDL_TABLE_SCHEMA_ROW:c,node:s}),g&&l.jsx(Zi,{"data-precededby":s!=null&&s.childrenNodes().length?A.DDL_COLUMN_ROW:u?A.DDL_TABLE_DESCRIPTION_ROW:f?A.DDL_TABLE_SCHEMA_ROW:c,node:g})]})};ea.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{de as $,Ne as A,Le as B,gn as C,ha as D,mn as E,pn as F,cn as G,ra as H,yi as I,oa as J,Te as K,Ee as L,Ai as M,x as N,_e as O,$ as P,rt as Q,ht as R,Ae as S,ti as T,mt as U,Ti as V,vt as W,Je as X,ee as Y,F as Z,A as _,sa as a,ma as a0,ce as a1,Hi as b,ua as c,yn as d,da as e,ya as f,ai as g,wt as h,L as i,ea as j,At as k,Ie as l,In as m,_n as n,vi as o,bi as p,Di as q,I as r,Vn as s,la as t,ca as u,Se as v,fa as w,ga as x,Hn as y,pa as z};
