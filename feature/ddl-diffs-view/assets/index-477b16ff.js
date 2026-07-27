var Qi=Object.defineProperty;var Zi=(e,i,n)=>i in e?Qi(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var O=(e,i,n)=>(Zi(e,typeof i!="symbol"?i+"":i,n),n);import{u as X,v as B,x as je,w as W,U as Fe,V as ii,W as Ve,N as fe,X as fi,P as S,Y as en,Z as nn,K as he,Q as an,M as me,_ as E,H as re,$ as Oe,a0 as De,a1 as tn,a2 as J,a3 as R,a4 as gi,a5 as ge,a6 as xe,a7 as qe,R as ci,a8 as Ke,k as Be,S as We,a9 as rn,aa as on,y as ln,ab as $,ac as sn,ad as pi,ae as le,h as se,f as hi}from"./DiffBadge-40fbf5b6.js";import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{r as d}from"./index-f46741a2.js";const ni={SIMPLE:"simple",COMPLEX:"complex"},dn={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},un=Object.values(dn);new Set(un);class Ne{aggregateByDescendantDiffs(i,n,a,o){}static isDiffsRecord(i){if(!M(i))return!1;for(const n of Object.values(i))if(!Ne.isDiff(n))return!1;return!0}static isDiff(i){const n=i;return M(n)&&(X(n)||B(n)||je(n)||W(n))}}function M(e){return mi(e)&&!Array.isArray(e)}function mi(e){return typeof e=="object"&&e!==null}function fn(e){return M(e)&&Object.keys(e).every(i=>typeof i=="string")}function Me(e){return Array.isArray(e)}function Ja(e,i,n){let a=e,o=!1;for(const t of i){if(!M(a)&&!Me(a))return;if(o){let s;mi(a)&&(s=a[t]),!s&&Me(a)&&n&&(s=a.find(f=>M(f)&&f[n]===t)),a=s,o=!1;continue}a=a[t],Me(a)&&(o=!0)}return a}function Qa(e,i){return Object.keys(e).find(n=>e[n]===i)}function Za(e){if(Ne.isDiffsRecord(e))return e}class et{constructor(){O(this,"tree",null)}pick(i,n){if(!M(i))return null;const a={};for(const o of n){const t=String(o);if(!(t in i))continue;const r=i[t];Array.isArray(r)?a[t]=[...r]:M(r)?a[t]={...r}:a[t]=r}return this.isPartialOf(a,n)?a:null}isPartialOf(i,n){return Object.keys(i).every(a=>n.includes(a))}}const ye=()=>{},it=(e=!1)=>e?{debug:(...i)=>console.debug(...i),info:(...i)=>console.info(...i),warn:(...i)=>console.warn(...i),error:(...i)=>console.error(...i)}:{debug:ye,info:ye,warn:ye,error:ye};function gn(e){return e==null||!M(e)&&!Fe(e)}function nt(e){const{source:i,tree:n,supportedNodeKinds:a,createNodeFromRaw:o,createNodeParams:t,createStateForSimpleNode:r,createStateForComplexNode:s,isSimpleNode:f,isComplexNode:c,resolveNodeKey:g,isDisallowedValue:u=gn,shouldStopAfterNodeCreation:p}=e;return[({value:m,state:v,key:I,path:H})=>{if(typeof I=="symbol")return;if(!M(m)&&!Fe(m))return{value:m};const{alreadyConvertedValuesCache:N,parent:y,container:C}=v,x=N.get(m);if(!x||!f(x)&&!c(x))return{value:m};if(!y||!f(y))return{value:m};const T="#"+ii(H),w=g(I,m),_=n.createCycledClone(x,T,w,y);return C?C.addNestedNode(_):y&&y.addChildNode(_),{done:!0}},({key:m,value:v,path:I,state:H,rules:N})=>!N||!Array.isArray(N.transformers)?void 0:{value:N.transformers.reduce((x,T)=>T(m,x,i,I,H),v)},({key:m,value:v,path:I,rules:H,state:N})=>{if(!H)return{done:!0};if(typeof m=="symbol")return{done:!0};if(u(v))return{done:!0};if(!H.kind||!a.includes(H.kind))return;const{parent:y,container:C}=N,x="#"+ii(I),T=g(m,v),{kind:w,complex:_=!1}=H,k=t(v,y,C),j=o(x,T,w,_,k);if(!j)return;C?C.addNestedNode(j):y&&y.addChildNode(j);let ae=v;if(p!=null&&p(j,v)){const z=y?y.descendantDiffs:void 0;if(!z||!(m in z))return{done:!0};const A=z[m];if(!A)return{done:!0};const{data:K}=A;W(K)&&(ae=K.beforeValue)}const Z=new Map(N.alreadyConvertedValuesCache);(M(v)||Fe(v))&&Z.set(v,j);let P;return f(j)?P=r(N,j,Z):P=s(N,j,Z),{value:ae,state:P}}]}class cn{}class Ae{constructor(i="#",n="",a,o,t){O(this,"type");O(this,"parent");O(this,"container");O(this,"newDataLevel");O(this,"_value");O(this,"_meta");O(this,"_childrenNodes",[]);O(this,"_nestedNodes",[]);O(this,"_diffs",{});O(this,"_diffsSummary",new Set);O(this,"_descendantDiffs",{});O(this,"_descendantDiffsSummary",new Set);O(this,"_diffsSeverities",{});this.id=i,this.key=n,this.kind=a,this.isCycle=o;const{type:r=ni.SIMPLE,value:s=null,parent:f=null,container:c=null,newDataLevel:g=!0,meta:u}=t;this.type=r,this.parent=f,this.container=c,this.newDataLevel=g,this._value=s,this._meta=u}get diffs(){return this._diffs}get diffsSummary(){return this._diffsSummary}get descendantDiffs(){return this._descendantDiffs}get descendantDiffsSummary(){return this._descendantDiffsSummary}get diffsSeverities(){return this._diffsSeverities}createCycledClone(i,n,a){const o=new Ae(i,n,this.kind,!0,{type:this.type,parent:a,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return o.setChildrenNodes(this._childrenNodes),o.setNestedNodes(this._nestedNodes),o}value(i){return i?null:this._value}meta(){return this._meta}childrenNodes(i){return i?[]:this._childrenNodes}setChildrenNodes(i){this._childrenNodes.length=0,this._childrenNodes.push(...i)}nestedNodes(){return this._nestedNodes}setNestedNodes(i){this._nestedNodes.length=0,this._nestedNodes.push(...i)}findNestedNode(i,n=!1){if(!i&&this._nestedNodes.length)return this._nestedNodes[0];for(const a of this._nestedNodes){if(a.id===i)return a;if(n&&a.type===ni.COMPLEX){const o=a.findNestedNode(i,n);if(o)return o}}return null}addChildNode(i){this._childrenNodes.push(i)}addNestedNode(i){this._nestedNodes.push(i)}addDiffsSummary(i){for(const n of i)this._diffsSummary.add(n),this.container?this.container.addDiffsSummary(i):this.parent&&this.parent.addDiffsSummary(i)}addDescendantDiffsSummary(i){for(const n of i)this._descendantDiffsSummary.add(n),this.container?this.container.addDescendantDiffsSummary(i):this.parent&&this.parent.addDescendantDiffsSummary(i)}}const L={TABLE:"table",COLUMNS:"columns",COLUMN:"column",INDEXES:"indexes",INDEX:"index"},pn=Object.values(L);function ai(e=L.TABLE){return{"/columns":{"/items":{"/*":()=>ai(L.COLUMN)},kind:L.COLUMNS},"/indexes":{"/items":{"/*":()=>ai(L.INDEX)},kind:L.INDEXES},kind:e}}function hn(e){return e.kind===Ve.Literal&&typeof e.value=="string"}function mn(e){return e.kind===Ve.RawExpr&&typeof e.expr=="string"}function yn(e){return M(e)&&typeof e.expr=="string"}function bn(e){return M(e)&&typeof e.value=="string"}const Se="titleRow",Dn=["typeName","size","precision","scale","label"],at={ToEnum:"to-enum",FromEnum:"from-enum"},tt={Lost:"lost",Gained:"gained"},yi=["isPrimaryKey","isUnique","isNotNull","isGenerated"],bi=["isUnique"],rt=[fe,Se,"columnName","description","generatedExpression",...yi],ot=[fe,Se,"indexName",...bi];function vn(e){if(!M(e)||!("data"in e)||!("styles"in e)||!("flags"in e)||!("highlightingMode"in e))return!1;const{data:i,styles:n}=e;return!M(n)||!("before"in n)||!("after"in n)?!1:Ne.isDiff(i)}function Hn(e){return vn(e[Se])}function kn(e){return M(e)&&e.kind===fi.Domain&&typeof e.type=="string"}function Vn(e){return e.kind===S.BoolType&&typeof e.type=="string"}function xn(e){return e.kind===S.IntegerType&&typeof e.type=="string"}function ti(e){return e.kind===S.DecimalType&&typeof e.type=="string"}function ri(e){return e.kind===S.FloatType&&typeof e.type=="string"}function oi(e){return e.kind===S.StringType&&typeof e.type=="string"}function li(e){return e.kind===S.BinaryType&&typeof e.type=="string"}function si(e){return e.kind===S.TimeType&&typeof e.type=="string"}function Cn(e){return e.kind===S.JSONType&&typeof e.type=="string"}function wn(e){return e.kind===S.SpatialType&&typeof e.type=="string"}function qn(e){return e.kind===S.UUIDType&&typeof e.type=="string"}function Le(e){return e.kind===S.EnumType&&Array.isArray(e.values)}function Nn(e){return e.kind===S.UnsupportedType&&typeof e.type=="string"}function di(e){return typeof e.type=="string"}function Ye(e){switch(e.kind){case Ve.Literal:return hn(e)?e.value:e.kind;case Ve.RawExpr:return mn(e)?e.expr:e.kind;case en.NamedDefault:try{return Ye(nn(e))}catch{return e.kind}default:return yn(e)?e.expr:bn(e)?e.value:e.kind}}function Di(e){return vi(Ye(e))}function An(e){return vi(e)}function vi(e){return e.length<2||e[0]!=="'"||e[e.length-1]!=="'"?e:e.slice(1,-1).replace(/''/g,"'")}const Sn="Columns",Tn="Indexes";class lt{constructor(i){this.logger=i}transformSourceToTableOrientedSpec(i,n){if(this.isDdlApiTableOrientedSpec(i))return i;const a=this.extractRealm(i);if(!a)return this.logger.debug("[DDL API] Unsupported source shape for table key:",n,i),null;const o=this.findTableInRealm(a,n);return o?this.buildTableOrientedSpecFromRealm(a,o,n):(this.logger.debug("[DDL API] Table not found in realm:",n,"available schemas:",a.schemas.map(t=>t.name)),null)}buildTableOrientedSpecFromRealm(i,n,a){const o=he(n.attrs,me.Comment);return{tableName:n.name,schemaName:a.schemaName,...o?{description:o.text}:{},columns:{title:Sn,items:(n.columns??[]).map(t=>this.buildColumnRowValue(i,n,t,a.schemaName))},indexes:{title:Tn,items:(n.indexes??[]).map(t=>this.buildIndexRowValue(t))}}}extractRealm(i){return this.isRealm(i)?i:M(i)&&this.isRealm(i.realm)?i.realm:null}findTableInRealm(i,n){var o;const a=i.schemas.find(t=>t.name===n.schemaName);if(a)return(o=a.tables)==null?void 0:o.find(t=>t.name===n.name)}isRealm(i){return M(i)?typeof i.ddlapi=="string"&&Array.isArray(i.schemas):!1}isDdlApiTableOrientedSpec(i){return!(!M(i)||typeof i.tableName!="string"||!M(i.columns)||!Array.isArray(i.columns.items)||!M(i.indexes)||!Array.isArray(i.indexes.items))}buildColumnRowValue(i,n,a,o){var m,v,I;const t=he(a.attrs,me.Comment),r=(m=a.attrs)==null?void 0:m.find(H=>H.kind===an.Identity),s=he(a.attrs,me.GeneratedExpr),f=r!==void 0||s!==void 0,g=this.findForeignKeysForColumn(n,a).map(H=>this.buildForeignKeyTarget(i,H,a,o)).filter(H=>H!==void 0),u=g.length>0,p=this.formatColumnType(a.type),b=(v=a.type)==null?void 0:v.type,D=b&&Le(b)?b.values:void 0,h=this.isPrimaryKeyColumn(n,a);return{columnName:a.name,columnType:p,...D?{enumValues:D}:{},isPrimaryKey:h,isForeignKey:u,...g.length>0?{foreignKeyTargets:g}:{},isGenerated:f,...r?{generatedBy:"identity"}:{},...s&&!r?{generatedBy:"expression"}:{},...s?{generatedExpression:s.expr}:{},isUnique:this.isUniqueColumn(n,a),isNotNull:!h&&((I=a.type)==null?void 0:I.null)===!1,...a.default!==void 0?{defaultValue:Di(a.default)}:{},...t?{description:t.text}:{}}}buildIndexRowValue(i){const n=(i.parts??[]).slice().sort((o,t)=>o.seqNo-t.seqNo).map(o=>this.formatIndexPartName(o)).filter(o=>o.length>0),a=he(i.attrs,me.Comment);return{...i.name?{indexName:i.name}:{},partNames:n,isUnique:i.unique===!0,...a?{description:a.text}:{}}}findSchemaNameForTable(i,n){var a;for(const o of i.schemas)if((a=o.tables)!=null&&a.some(t=>t===n))return o.name}isPrimaryKeyColumn(i,n){var a;return(((a=i.primaryKey)==null?void 0:a.parts)??[]).some(o=>{var t;return((t=o.column)==null?void 0:t.name)===n.name})}isUniqueColumn(i,n){return(i.indexes??[]).some(a=>{var o,t,r;return a.unique===!0&&((o=a.parts)==null?void 0:o.length)===1&&((r=(t=a.parts[0])==null?void 0:t.column)==null?void 0:r.name)===n.name})}isSameForeignKeyColumn(i,n){return i===n||i.name===n.name}findForeignKeysForColumn(i,n){return(i.foreignKeys??[]).filter(a=>{var o;return(o=a.columns)==null?void 0:o.some(t=>this.isSameForeignKeyColumn(t,n))})}buildForeignKeyTarget(i,n,a,o){var c,g;const t=((c=n.columns)==null?void 0:c.findIndex(u=>this.isSameForeignKeyColumn(u,a)))??-1;if(t<0)return;const r=n.refTable,s=(g=n.refColumns)==null?void 0:g[t];if(!r||!s)return;const f=this.resolveForeignKeyTargetSchemaName(i,r,o);if(f)return{schemaName:f,tableName:r.name,columnName:s.name}}resolveForeignKeyTargetSchemaName(i,n,a){const o=this.findSchemaNameForTable(i,n);if(o)return o;const t=this.findUniqueSchemaNameForTableName(i,n.name);return t||a}findUniqueSchemaNameForTableName(i,n){const a=i.schemas.filter(o=>{var t;return(t=o.tables)==null?void 0:t.some(r=>r.name===n)}).map(o=>o.name);if(a.length===1)return a[0]}formatColumnType(i){return i!=null&&i.raw?{kind:"Raw",raw:i.raw,label:i.raw}:i!=null&&i.type?this.formatSchemaType(i.type):{kind:"Raw",raw:"unknown",label:"unknown"}}formatSchemaType(i){if(kn(i))return this.formatPgDomainType(i);const n=this.formatSchemaTypeLabel(i);return Vn(i)?{kind:S.BoolType,typeName:i.type,label:n}:xn(i)?{kind:S.IntegerType,typeName:i.type,label:n,...i.unsigned!==void 0?{unsigned:i.unsigned}:{}}:ti(i)?{kind:S.DecimalType,typeName:i.type,label:n,...i.precision!==void 0?{precision:i.precision}:{},...i.scale!==void 0?{scale:i.scale}:{},...i.unsigned!==void 0?{unsigned:i.unsigned}:{}}:ri(i)?{kind:S.FloatType,typeName:i.type,label:n,...i.precision!==void 0?{precision:i.precision}:{},...i.unsigned!==void 0?{unsigned:i.unsigned}:{}}:oi(i)?{kind:S.StringType,typeName:i.type,label:n,...i.size!==void 0?{size:i.size}:{}}:li(i)?{kind:S.BinaryType,typeName:i.type,label:n,...i.size!==void 0?{size:i.size}:{}}:si(i)?{kind:S.TimeType,typeName:i.type,label:n,...i.precision!==void 0?{precision:i.precision}:{},...i.scale!==void 0?{scale:i.scale}:{}}:Cn(i)?{kind:S.JSONType,typeName:i.type,label:n}:wn(i)?{kind:S.SpatialType,typeName:i.type,label:n}:qn(i)?{kind:S.UUIDType,typeName:i.type,label:n}:Le(i)?{kind:S.EnumType,label:n,...i.type!==void 0?{typeName:i.type}:{},values:i.values}:Nn(i)?{kind:S.UnsupportedType,typeName:i.type,label:n}:{kind:i.kind,label:di(i)?i.type:i.kind}}formatPgDomainType(i){const n=i.baseType?this.formatSchemaTypeLabel(i.baseType):void 0;return{kind:fi.Domain,name:i.type,label:i.type,...n?{baseTypeLabel:n}:{}}}formatSchemaTypeLabel(i){let n;return ti(i)?n=this.formatParameterizedTypeLabel(i.type,i.precision,i.scale):oi(i)?n=this.formatParameterizedTypeLabel(i.type,i.size):li(i)?n=this.formatParameterizedTypeLabel(i.type,i.size):ri(i)?n=this.formatParameterizedTypeLabel(i.type,i.precision):si(i)?n=this.formatParameterizedTypeLabel(i.type,i.precision,i.scale):Le(i)?n=i.type??i.values[0]??"enum":di(i)?n=i.type:n=i.kind,this.normalizeTypeLabelSpacing(n)}normalizeTypeLabelSpacing(i){return i.replace(new RegExp("(?<=\\S)\\(","g")," (")}formatParameterizedTypeLabel(i,...n){const a=n.filter(o=>o!==void 0);return a.length===0?i:`${i} (${a.join(", ")})`}formatIndexPartName(i){var n;return(n=i.column)!=null&&n.name?i.column.name:i.expr?Ye(i.expr):""}}const _n=new Set([L.TABLE,L.COLUMNS,L.COLUMN,L.INDEXES,L.INDEX]);class Hi extends cn{createNodeMeta(i){return{_fragment:i}}createNodeValue(i,n,a,o){return!fn(a)||!this.isDdlApiTreeNodeKindWithNodeValue(i)?null:o(a,Hi.getDdlApiTreeNodeValueProps(i))}isDdlApiTreeNodeKindWithNodeValue(i){return _n.has(i)}static getDdlApiTreeNodeValueProps(i){switch(i){case L.TABLE:return["tableName","schemaName","description"];case L.COLUMNS:case L.INDEXES:return["title"];case L.COLUMN:return["columnName","columnType","enumValues","isPrimaryKey","isForeignKey","foreignKeyTargets","isGenerated","generatedBy","isUnique","isNotNull","defaultValue","generatedExpression","description"];case L.INDEX:return["indexName","partNames","isUnique","description"];default:return[]}}}function En(e){return`${e.schemaName}\0${e.tableName}\0${e.columnName}`}const ki=["size","precision","scale"];function Mn(e){const i=e.diffs.columnTypeFieldDiffs;if(!(!i||Object.keys(i).length===0))return i}function Ln(e,i){var c;const n=(c=e.value())==null?void 0:c.columnType;if(!n)return{kind:"plain",text:""};const a=Mn(e);if(!a)return{kind:"plain",text:n.label};const o=a.typeName??a.label,t=a.typeName?"typeName":"label";if(In(a)){const g=Object.values(a).find(Boolean);return g?{kind:"monolithic",text:jn(n,a,t,i),diff:Pn(g)}:{kind:"plain",text:n.label}}const r=[],s=Ce(Re(n),o,i);s!==void 0&&r.push({text:s,diff:o});const f=Fn(n,a,i);return r.push(...f),r.length===0?{kind:"plain",text:n.label}:{kind:"segmented",segments:r}}function In(e){const i=Dn.map(a=>[a,e[a]]).filter(a=>!!a[1]);if(i.length===0)return!1;if(i.length===1){const[a]=i[0];return a==="typeName"||a==="label"}return new Set(i.map(([,a])=>a.data.action)).size===1}function jn(e,i,n,a){const o=Ce(Re(e),i[n],a)??Re(e),t=[];for(const r of ki){const s=Ce($e(e,r),i[r],a);s!==void 0&&t.push(s)}return t.length===0?o:`${o} (${t.join(", ")})`}function Fn(e,i,n){const a=On(e,i,n);if(a.length===0)return[];const o=[{text:" ("}];return a.forEach((t,r)=>{r>0&&o.push({text:", "});const s=Ce($e(e,t),i[t],n);s!==void 0&&o.push({text:s,diff:i[t]})}),o.push({text:")"}),o}function On(e,i,n){return ki.filter(a=>{const o=i[a];return o?Rn(o,n):$e(e,a)!==void 0})}function Re(e){return"typeName"in e&&typeof e.typeName=="string"?e.typeName:"name"in e&&typeof e.name=="string"?e.name:e.label}function $e(e,i){if(!(i in e))return;const n=Reflect.get(e,i);return typeof n=="number"?n:void 0}function Ce(e,i,n){if(!i)return e!==void 0?String(e):void 0;const{data:a}=i,o=n===E;return X(a)?o?void 0:String(a.afterValue??e??""):B(a)?o?String(a.beforeValue??e??""):void 0:W(a)?String(o?a.beforeValue??e??"":a.afterValue??e??""):e!==void 0?String(e):void 0}function Rn(e,i){return(i===E?e.styles.before:e.styles.after).isContentVisible}function Pn(e){const{data:i}=e;return W(i)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:re.Yellow},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:re.Yellow}}}:X(i)?{...e,styles:{before:{isContentVisible:!1,isHeaderVisible:!0},after:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:re.Green}}}:B(i)?{...e,styles:{before:{isContentVisible:!0,isHeaderVisible:!0,textHighlighterColor:re.Red},after:{isContentVisible:!1,isHeaderVisible:!0}}}:e}function Gn(e){if(Hn(e.diffs))return e.diffs[Se]}function Un(e){const i=e.diffs[fe];if(i&&(X(i.data)||B(i.data)))return i}function Vi(e,i){return e?(i===E?e.styles.before:e.styles.after).isHeaderVisible:!0}function Kn(e){const n=e.diffs.foreignKeyTargetDiffs;if(!(!n||Object.keys(n).length===0))return n}function Bn(e){const i={};let n=!1;for(const a of yi){const o=e.diffs[a];o&&(i[a]=o,n=!0)}return n?i:void 0}function Wn(e){return e.diffs.generatedExpression}function Yn(e){return e.diffs.description}function xi(e){const n=e.diffs.enumValueDiffs;if(!(!n||Object.keys(n).length===0))return n}function $n(e){return e.diffs.enumValuesRowColorizingDiff}function Ci(e){return e.diffs.defaultValue}function Xn(e){return e.diffs.defaultValueRowColorizingDiff}function zn(e,i){var r;const n=(r=e.value())==null?void 0:r.defaultValue,a=Ci(e);if(!a)return n;const o=a.data,t=i===E;return X(o)?t?void 0:n:B(o)?t?Ie(o.beforeValue)??n:void 0:W(o)?t?Ie(o.beforeValue)??n:Ie(o.afterValue)??n:n}function Ie(e){if(typeof e=="string")return An(e);if(M(e)&&"kind"in e)return Di(e)}function Jn(e,i){var c;const n=((c=e.value())==null?void 0:c.enumValues)??[],a=xi(e),o=i===E,t=new Set,r=[],s=g=>{const u=a==null?void 0:a[g];if(u)return u;for(const p of Object.values(a??{}))if(p&&W(p.data)&&p.data.afterValue===g)return p};for(const g of n){const u=s(g);if(!u){r.push({literal:g});continue}if(t.has(u))continue;t.add(u);const{data:p}=u;if(X(p)){!o&&typeof p.afterValue=="string"&&r.push({literal:p.afterValue,diff:u});continue}if(B(p)){o&&typeof p.beforeValue=="string"&&r.push({literal:p.beforeValue,diff:u});continue}if(W(p)){const b=o?typeof p.beforeValue=="string"?p.beforeValue:g:typeof p.afterValue=="string"?p.afterValue:g;r.push({literal:b,diff:u})}}for(const[g,u]of Object.entries(a??{}))!u||t.has(u)||B(u.data)&&o&&(r.push({literal:g,diff:u}),t.add(u));const f=g=>{const u=n.indexOf(g);return u>=0?u:n.length};return r.sort((g,u)=>f(g.literal)-f(u.literal))}function Qn(e){const i={};let n=!1;for(const a of bi){const o=e.diffs[a];o&&(i[a]=o,n=!0)}return n?i:void 0}function Zn(e){return e?e.highlightingMode.get(Oe.Default)!==De.Invisible:!1}const ea=d.createContext(!1),Te=e=>{const{children:i,diffType:n,diffTypeCause:a,hidden:o=!1}=e;return o||!n?i:l.jsxs("div",{className:"flex flex-row relative w-full",children:[l.jsx(tn,{variant:n,message:a}),i]})};Te.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const _e=d.memo(e=>{const{content:i}=e;return l.jsx("div",{className:"flex flex-row w-full",children:i})});_e.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Ee=d.memo(e=>{const{left:i,right:n}=e;return l.jsxs("div",{className:"flex flex-row w-full",children:[l.jsx("div",{className:"w-1/2",children:i}),l.jsx("div",{className:"w-1/2",children:n})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const Xe="px-4",ia="",na="px-4",ze="";var F=(e=>(e.Default="default",e.AsyncApiJsoSection="async-api-jso-section",e.JsoProperty="jso-property",e.DdlApiSection="ddlapi-section",e.DdlApiProperty="ddlapi-property",e))(F||{});var V=(e=>(e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.body2="body2",e.body1="body1",e))(V||{});const aa=e=>{const{isExpandable:i,expanded:n,setExpanded:a,variant:o}=e,t=d.useCallback(()=>{a==null||a(r=>!r)},[a]);return l.jsx(l.Fragment,{children:i&&l.jsx("div",{className:"mt-1",children:l.jsx("a",{className:`text-value-expander ${oa(o)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:t,children:n?"Show less":"Show more"})})})},wi=d.memo(e=>{const{value:i,variant:n,layoutSide:a,onClick:o,diff:t,usage:r,highlightingMode:s=De.Default}=e,f=s===De.Default,c=s===De.Invisible,{textFontWeight:g,labelFontWeight:u,labelColor:p,textColor:b,label:D}=e,[h,m]=d.useState(!1),v=d.useCallback((x,T,w)=>{if(w)return null;const _=c?"":T.join(" "),k=`text-value ${o?"hover:cursor-pointer":""} ${g?`font-${g}`:""}`.trim(),j=`${k} ${_}`.trim(),ae={onClick:o,...b!=null&&b.trim()?{style:{color:b}}:{}};x=h?x:ra(x);const Z=(P,z)=>{const A={...ae,className:z};switch(n){case V.h1:return l.jsx("h1",{...A,children:P});case V.h2:return l.jsx("h2",{...A,children:P});case V.h3:return l.jsx("h3",{...A,children:P});case V.h4:return l.jsx("h4",{...A,children:P});case V.h5:return l.jsx("h5",{...A,children:P});case V.h6:return l.jsx("h6",{...A,children:P});case V.body1:return l.jsx("span",{...A,className:`${z} text-value-body1`.trim(),children:P});case V.body2:return l.jsx("span",{...A,className:`${z} text-value-body2`.trim(),children:P})}};return D?Z(l.jsxs(l.Fragment,{children:[l.jsx("span",{className:u?`font-${u}`:"font-bold",style:p!=null&&p.trim()?{color:p}:{},children:`${D}: `}),l.jsx("span",{className:_,children:x})]}),k):Z(x,j)},[h,c,D,p,u,o,b,g,n]),I=d.useCallback(x=>{const T=[];let w=x,_=!1;if(t){const{data:k,styles:j}=t;switch(a){case E:T.push(R.highlighter(j.before.textHighlighterColor)),f&&(B(k)&&(w=te(k.beforeValue)?k.beforeValue:w),W(k)&&(r===F.JsoProperty&&!c&&T.push(R.highlighter(re.Yellow)),w=te(k.beforeValue)?k.beforeValue:w),je(k)&&(w=te(k.beforeKey)?k.beforeKey:w)),X(k)&&(_=!0);break;case J:T.push(R.highlighter(j.after.textHighlighterColor)),f&&(X(k)&&(w=te(k.afterValue)?k.afterValue:w),W(k)&&(r===F.JsoProperty&&!c&&T.push(R.highlighter(re.Yellow)),w=te(k.afterValue)?k.afterValue:w),je(k)&&(w=te(k.afterKey)?k.afterKey:w)),B(k)&&(_=!0);break}}return[w,T,_]},[t,f,c,a,r]),[H,N,y]=I(i);return d.useMemo(()=>l.jsxs("div",{className:"flex flex-col items-start gap-1",children:[v(H,N,y),!y&&l.jsx(aa,{isExpandable:ta(H),expanded:h,setExpanded:m,variant:n})]}),[v,H,N,y,h,m,n])}),Pe=5,Ge=300;function ta(e){return e?e.length>Ge||gi.trim(e.split(`
`)).length>Pe:!1}function ra(e){if(!e)return;if(e.length>Ge)return e.slice(0,Ge)+"...";const i=gi.trim(e.split(`
`));return i.length>Pe?i.slice(0,Pe).join(`
`)+"...":e}function te(e){return typeof e=="string"}function oa(e){switch(e){case V.h1:return"text-value-expander--h1";case V.h2:return"text-value-expander--h2";case V.h3:return"text-value-expander--h3";case V.h4:return"text-value-expander--h4";case V.h5:return"text-value-expander--h5";case V.h6:return"text-value-expander--h6";case V.body1:return"text-value-expander--body1";case V.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const Y="data-precededby",U="data-ddl-list-last-row";var q=(e=>(e.ROOT="root",e.ADDRESS_ROW="address-row",e.DESCRIPTION_ROW="description-row",e.SUMMARY_ROW="summary-row",e.MESSAGE_SECTION_SELECTOR="message-section-selector",e.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",e.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",e.JSON_SCHEMA_VIEWER="json-schema-viewer",e.JSO_VIEWER="jso-viewer",e.JSO_PROPERTY="jso-property",e.BINDING_VERSION_ROW="binding-version-row",e.SERVER_BLOCK="server-block",e.SERVER_ADDRESS_ROW="server-address-row",e.DDL_TABLE_HEADER_ROW="ddl-table-header-row",e.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",e.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",e.DDL_SECTION_HEADER="ddl-section-header",e.DDL_COLUMN_ROW="ddl-column-row",e.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",e.DDL_INDEX_ROW="ddl-index-row",e))(q||{}),Q=(e=>(e.Default="default",e.DdlApiProperty="ddlapi-property",e))(Q||{});const la={[Q.DdlApiProperty]:ze},sa={[Q.DdlApiProperty]:["min-h-[26px]"]};function da(e){const i=la[e]??Xe,n=sa[e]??[];return[i,...n].join(" ")}const ve=d.memo(e=>{const{value:i,variant:n,layoutSide:a,usage:o=Q.Default}=e,{label:t,labelFontWeight:r,textFontWeight:s,labelColor:f,textColor:c}=e,{[Y]:g}=e,{diff:u,descendantDiffs:p,diffsSeverities:b}=e,D=ge(),h=o===Q.DdlApiProperty,m=h&&D>0,v=d.useMemo(()=>{if(!u)return[];const{data:N,styles:y}=u;if(!N)return[];const C=[];return a===E&&C.push(R.background(y.before.backgroundColor)),a===J&&C.push(R.background(y.after.backgroundColor)),C},[u,a]),I=d.useMemo(()=>da(o),[o]),H=l.jsx(wi,{label:t,labelFontWeight:r,textFontWeight:s,labelColor:f,textColor:c,value:i,variant:n,layoutSide:a,diff:u});return l.jsxs("div",{"data-precededby":g,className:`text-row-content flex h-full ${h?"items-stretch":""} ${I} gap-2 ${v.join(" ")}`,children:[m&&l.jsxs("div",{"data-precededby":g,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:D}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),h?l.jsx("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:H}):H]})});ve.__docgenInfo={description:"",methods:[],displayName:"TextRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const de=d.memo(e=>{const i=qe(),{diffsSeverities:n,diffsSeverityPlacement:a=ci.DescriptionRow}=e,o=d.useMemo(()=>n==null?void 0:n[a],[n,a]),t=d.useMemo(()=>o==null?void 0:o.type,[o]),r=d.useMemo(()=>Ke(o==null?void 0:o.causedAt),[o]);switch(i){case We:return l.jsx(Te,{diffType:t,diffTypeCause:r,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ve,{...e,layoutSide:E}),right:l.jsx(ve,{...e,layoutSide:J})})});case Be:return l.jsx(_e,{content:l.jsx(ve,{...e,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});de.__docgenInfo={description:"",methods:[],displayName:"TextRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},value:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelFontWeight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'bold'"}]},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},usage:{required:!1,tsType:{name:"TextRowUsage"},description:""},diff:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},diffsSeverityPlacement:{required:!1,tsType:{name:"NodeDiffsSeverityPlacemennt"},description:""}}};const ce="#353C4E",ua=d.createContext(void 0);function fa(){return d.useContext(ua)}const qi=e=>{const{expandable:i,expanded:n,onClick:a,level:o}=e,t=d.useContext(ea),r=o>0,s=a??(()=>{t&&console.warn("Expander callback is not provided.")});return!i&&!r?null:l.jsxs("div",{className:`flex flex-row items-center justify-center ${r?"gap-0.5":""}`,children:[r&&l.jsx(rn,{short:i}),i&&n!==void 0&&l.jsx(on,{onToggle:s,expanded:n})]})};qi.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const ga={[F.JsoProperty]:ia,[F.DdlApiSection]:na,[F.DdlApiProperty]:ze},ca={[F.JsoProperty]:["min-h-[26px]"],[F.DdlApiProperty]:["min-h-[26px]"]};function pa(e){const i=ga[e]??Xe,n=ca[e]??[];return[i,...n].join(" ")}const He=d.memo(e=>{const{expandable:i,expanded:n,onClickExpander:a,value:o,variant:t,layoutSide:r,enableHeader:s=!0,enableHeaderValue:f=!0,subheader:c,usage:g=F.Default,highlightingMode:u=ln}=e,{diff:p,descendantDiffs:b,diffsSeverities:D}=e,{[Y]:h,[U]:m}=e,v=d.useMemo(()=>{switch(g){case F.Default:return u.get(Oe.Default);case F.AsyncApiJsoSection:case F.JsoProperty:return u.get(Oe.JsoPropertyKey)}},[u,g]),I=ge(),H=fa(),N=d.useMemo(()=>H?r===E?H.beforeLevel:H.afterLevel:I,[r,I,H]),y=d.useMemo(()=>{const _=[];if(!p)return _;const{data:k,styles:j}=p;return k&&(r===E&&_.push(R.background(j.before.backgroundColor)),r===J&&_.push(R.background(j.after.backgroundColor))),_},[p,r]),C=d.useMemo(()=>f?l.jsx(wi,{"data-precededby":h,value:o,variant:t,layoutSide:r,diff:p,usage:g,highlightingMode:v,onClick:a}):null,[f,h,o,t,r,p,g,v,a]),x=g===F.DdlApiProperty,T=d.useMemo(()=>s?l.jsxs(l.Fragment,{children:[(i||N>0)&&l.jsxs("div",{"data-precededby":h,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:N}),l.jsx(qi,{expandable:i,expanded:n,onClick:a,level:N})]}),!x&&C]}):N>0&&l.jsx(xe,{level:N}),[s,i,N,h,n,a,C,x]),w=d.useMemo(()=>pa(g),[g]);return l.jsxs("div",{"data-precededby":h,"data-ddl-list-last-row":m?!0:void 0,className:`title-row-content flex ${x?"items-stretch":"items-center"} h-full ${w} gap-2 ${y.join(" ")}`,children:[T,x?l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[C,c==null?void 0:c(r)]}):c==null?void 0:c(r)]})});He.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ee=d.memo(e=>{const i=qe(),{diff:n,diffsSeverities:a,enableHeaderValue:o}=e,t=d.useMemo(()=>a==null?void 0:a["title-row"],[a]),r=d.useMemo(()=>t==null?void 0:t.type,[t]),s=d.useMemo(()=>Ke(t==null?void 0:t.causedAt),[t]);switch(i){case We:return l.jsx(Te,{diffType:r,diffTypeCause:s,hidden:!1,children:l.jsx(Ee,{left:l.jsx(He,{...e,enableHeader:(n==null?void 0:n.styles.before.isHeaderVisible)??!0,enableHeaderValue:o,layoutSide:E}),right:l.jsx(He,{...e,enableHeader:(n==null?void 0:n.styles.after.isHeaderVisible)??!0,enableHeaderValue:o,layoutSide:J})})});case Be:return l.jsx(_e,{content:l.jsx(He,{...e,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});ee.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function st(e,i){return d.useMemo(()=>i(e)?Ni(e):{},[i,e])}function Ni(e){return{nodeDiffs:e.diffs,nodeDescendantDiffs:e.descendantDiffs,nodeDiffsSeverities:e.diffsSeverities}}function ha(e,i={}){const{diffKey:n,fallbackToNodeDiff:a=!0,includeDescendantDiffs:o=!0,diffsSeverityPlacement:t,resolveDiff:r}=i,{nodeDiffs:s,nodeDescendantDiffs:f,nodeDiffsSeverities:c}=e;if(!s)return{};const g=Object.entries(s),u=D=>{const h=g.find(([m])=>m===String(D));return h==null?void 0:h[1]},p=n?u(n):void 0;return{diff:r?r(s,u):a?s[fe]??p:p,...o?{descendantDiffs:f}:{},diffsSeverities:c,...t?{diffsSeverityPlacement:t}:{}}}function ma(e){return pn.includes(e.kind)}function ya(e){return e.childrenNodes().filter(ma)}function dt(e){return e.kind===L.TABLE}function ba(e){return e.kind===L.COLUMNS}function Ai(e){return e.kind===L.COLUMN}function Je(e){return Ai(e)&&e instanceof Ae}function Da(e){return e.kind===L.INDEXES}function Si(e){return e.kind===L.INDEX}function Ti(e){return Si(e)&&e instanceof Ae}function va(e){return e.filter(Ai)}function Ha(e){return e.filter(Si)}const ka=d.createContext(null);function Va(){const e=d.useContext(ka);if(!e)throw new Error("useDdlTableViewerContext must be used within DdlTableViewer");return e}const xa=({href:e,className:i,children:n})=>l.jsx("a",{href:e,className:i,children:n});xa.__docgenInfo={description:"",methods:[],displayName:"DefaultNavigationLink"};function Ca(e){return e?!!($(e.defaultValue)||$(e.generatedExpression)||e.enumValues&&e.enumValues.length>0):!1}const _i=d.memo(e=>{const{isVisible:i,value:n,blockClassName:a,valueClassName:o}=e;return i?l.jsx("span",{className:a,children:l.jsx("span",{className:o||void 0,children:`${n}`})}):null});_i.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};function wa(e={}){const{textHighlighterColor:i,borderShadowColor:n,isFontMuted:a}=e;return d.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",R.borderShadow(n)].filter(Boolean).join(" "),valueClassName:[R.highlighter(i),a?R.fontMuted():""].filter(Boolean).join(" ")}),[n,a,i])}const ie=d.memo(e=>{const{isVisible:i,value:n,textHighlighterColor:a,borderShadowColor:o,isFontMuted:t}=e,{blockClassName:r,valueClassName:s}=wa({textHighlighterColor:a,borderShadowColor:o,isFontMuted:t});return l.jsx(_i,{isVisible:i,value:n,blockClassName:r,valueClassName:s})});ie.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};const ke=d.memo(e=>{var D;const{label:i,subheader:n,layoutSide:a,diff:o,colorizingDiff:t}=e,{[Y]:r,[U]:s}=e,f=ge(),c=a===E?o==null?void 0:o.styles.before:o==null?void 0:o.styles.after,u=(D=(a===E?t==null?void 0:t.styles.before:t==null?void 0:t.styles.after)??c)==null?void 0:D.backgroundColor,p=d.useMemo(()=>u?[R.background(u)]:[],[u]),b=d.useMemo(()=>{const h=t==null?void 0:t.data;if(h){if(X(h))return a!==E;if(B(h))return a===E}return(c==null?void 0:c.isContentVisible)??!0},[t,c==null?void 0:c.isContentVisible,a]);return l.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":r,"data-ddl-list-last-row":s?!0:void 0,className:`additional-info-row-content flex items-stretch h-full ${ze} min-h-[26px] gap-2 ${p.join(" ")}`,children:[f>0&&l.jsxs("div",{"data-precededby":r,className:"level-indicator-column flex items-stretch self-stretch",children:[l.jsx(xe,{level:f}),l.jsx("div",{className:"w-4","aria-hidden":"true"})]}),b&&l.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[l.jsx("span",{className:"additional-info-row-label",children:`${i}:`}),n==null?void 0:n(a)]})]})});ke.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const ne=d.memo(e=>{var o;const i=qe(),n=(o=e.diffsSeverities)==null?void 0:o[ci.AdditionalInfoRow],a=d.useMemo(()=>Ke(n==null?void 0:n.causedAt),[n==null?void 0:n.causedAt]);switch(i){case We:return l.jsx(Te,{diffType:n==null?void 0:n.type,diffTypeCause:a,hidden:!1,children:l.jsx(Ee,{left:l.jsx(ke,{...e,layoutSide:E}),right:l.jsx(ke,{...e,layoutSide:J})})});case Be:return l.jsx(_e,{content:l.jsx(ke,{...e,layoutSide:J})})}return l.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});ne.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""}}};function oe(e,i){return e?(i===E?e.styles.before:e.styles.after).textHighlighterColor:void 0}const qa="ux-badge_ddlapi_primary-key",Ei="ux-badge_ddlapi_foreign-key",Na="ux-badge_ddlapi_unique",Aa="ux-badge_ddlapi_not-null",Sa="ux-badge_ddlapi_generated",Mi="public",Li="Default",Ii="As",ji="Values";function Fi(e){const i=`${e.tableName}.${e.columnName}`;return!e.schemaName||e.schemaName===Mi?i:`${e.schemaName}.${i}`}function we(e){return e.join(", ")}const Ue=d.memo(e=>{const{target:i,hideBadge:n=!1,textHighlighterColor:a}=e,{navigationLinkBuilder:o,navigationLinkComponent:t}=Va(),r=d.useMemo(()=>o(i.schemaName,i.tableName,i.columnName),[o,i]),s=d.useMemo(()=>["ddlapi-foreign-key-link",R.highlighter(a)].filter(Boolean).join(" "),[a]),f=l.jsx(t,{href:r,className:s,children:Fi(i)});return n?f:l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(sn,{text:"FK",colorSchema:Ei,inline:!0}),f]})});Ue.__docgenInfo={description:"",methods:[],displayName:"ForeignKey",props:{target:{required:!0,tsType:{name:"DdlApiForeignKeyTarget"},description:""},hideBadge:{required:!1,tsType:{name:"boolean"},description:"When true, only the navigation link is rendered (FK badge supplied by the caller)."},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""}}};function Ta(){return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"})}function Oi(e,i){return!!e||!!i}function Qe(e,i){return e?i===E?e.styles.before.isContentVisible:e.styles.after.isContentVisible:!0}function _a(e,i,n){return Oi(e,i)&&Qe(i,n)}function be(e){const{columnId:i,label:n,colorSchema:a,flagValue:o,flagDiff:t,layoutMode:r,layoutSide:s}=e;if(!Oi(o,t))return null;if(!Qe(t,s))return Ta();const f=Zn(t)?t==null?void 0:t.data:void 0;return l.jsx(pi,{label:n,colorSchema:a,layoutMode:r,layoutSide:s,isNodeChanged:!1,isContentChanged:!!f,$changes:f},Ma(i,n))}function Ea(e){const{columnId:i,target:n,targetDiff:a,layoutMode:o,layoutSide:t}=e,r=La(i,n),s=oe(a,t);if(a&&!Qe(a,t))return l.jsx("span",{className:"inline-block min-h-[19px]","aria-hidden":"true"},r);if(!a)return l.jsx(Ue,{target:n},r);const f=a.data;return l.jsxs("div",{className:"ddlapi-foreign-key inline-flex flex-row items-center gap-1",children:[l.jsx(pi,{label:"FK",colorSchema:Ei,layoutMode:o,layoutSide:t,isNodeChanged:!1,isContentChanged:!0,$changes:f}),l.jsx(Ue,{target:n,hideBadge:!0,textHighlighterColor:s})]},r)}const pe=d.memo(e=>{const{columnId:i,value:n,flagDiffs:a,foreignKeyTargetDiffs:o,layoutSide:t}=e,r=qe(),s=d.useMemo(()=>a??{},[a]),f=d.useMemo(()=>o??{},[o]),c=d.useMemo(()=>be({columnId:i,label:"PK",colorSchema:qa,flagValue:n.isPrimaryKey,flagDiff:s.isPrimaryKey,layoutMode:r,layoutSide:t}),[i,s.isPrimaryKey,r,t,n.isPrimaryKey]),g=d.useMemo(()=>_a(n.isPrimaryKey,s.isPrimaryKey,t),[s.isPrimaryKey,t,n.isPrimaryKey]),u=d.useMemo(()=>be({columnId:i,label:"unique",colorSchema:Na,flagValue:n.isUnique,flagDiff:s.isUnique,layoutMode:r,layoutSide:t}),[i,s.isUnique,r,t,n.isUnique]),p=d.useMemo(()=>g?null:be({columnId:i,label:"not null",colorSchema:Aa,flagValue:n.isNotNull,flagDiff:s.isNotNull,layoutMode:r,layoutSide:t}),[i,s.isNotNull,g,r,t,n.isNotNull]),b=d.useMemo(()=>be({columnId:i,label:"generated",colorSchema:Sa,flagValue:n.isGenerated,flagDiff:s.isGenerated,layoutMode:r,layoutSide:t}),[i,s.isGenerated,r,t,n.isGenerated]),D=d.useMemo(()=>{const m=n.foreignKeyTargets??[];return m.length===0?[]:m.map(v=>Ea({columnId:i,target:v,targetDiff:f[En(v)],layoutMode:r,layoutSide:t}))},[i,r,t,f,n.foreignKeyTargets]),h=d.useMemo(()=>[c,u,p,b,...D].filter(Boolean),[D,b,p,c,u]);return h.length===0?null:l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:h})});function Ma(e,i){return`${e}-${i}`}function La(e,i){return`${e}-FK-${Fi(i)}`}pe.__docgenInfo={description:"",methods:[],displayName:"ColumnRowBadgesContent",props:{columnId:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ze=d.memo(e=>{const{isVisible:i,value:n,className:a}=e;return i?l.jsx("span",{className:a,children:`${n}`}):null});Ze.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Ri(e){const{appearance:i}=e;return d.useMemo(()=>["ddlapi-property-value","subheader",i].filter(Boolean).join(" "),[i])}const ue=d.memo(e=>{const{isVisible:i,value:n,appearance:a}=e,o=Ri({appearance:a});return l.jsx(Ze,{isVisible:i,value:n,className:o})});ue.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""}}};const Pi=e=>{const{node:i,additionalInfoPrecededBy:n=q.DDL_COLUMN_ROW,isLastInList:a=!1,[Y]:o}=e,t=le(),r=i.value(),s=d.useCallback(y=>r?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(ue,{isVisible:!0,value:r.columnType.label,appearance:"text"}),l.jsx(pe,{columnId:i.id,layoutSide:y,value:r})]}):l.jsx(l.Fragment,{}),[i.id,r]),f=d.useCallback(y=>{const C=r==null?void 0:r.defaultValue;return $(C)?l.jsx(ie,{isVisible:!0,value:C}):l.jsx(l.Fragment,{})},[r]),c=d.useCallback(y=>{const C=r==null?void 0:r.generatedExpression;return $(C)?l.jsx(ie,{isVisible:!0,value:C}):l.jsx(l.Fragment,{})},[r]),g=d.useCallback(y=>{var C;return(C=r==null?void 0:r.enumValues)!=null&&C.length?l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:r.enumValues.map((x,T)=>l.jsx(ie,{isVisible:!0,value:x},`${x}-${T}`))}):l.jsx(l.Fragment,{})},[r]),u=t===se,p=d.useMemo(()=>u&&!!(r!=null&&r.description),[u,r==null?void 0:r.description]),b=!!(r!=null&&r.enumValues&&r.enumValues.length>0),D=$(r==null?void 0:r.defaultValue),h=$(r==null?void 0:r.generatedExpression),v=a&&!(u&&(b||D||h)),I=a&&b&&!D&&!h,H=a&&D&&!h,N=a&&h;return r?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":o,[U]:v||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:s,usage:F.DdlApiProperty}),p&&l.jsx(de,{"data-precededby":q.DDL_COLUMN_ROW,value:r.description??"",variant:V.body2,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty}),u&&b&&l.jsx(ne,{"data-precededby":n,[U]:I||void 0,label:ji,subheader:g}),u&&D&&l.jsx(ne,{"data-precededby":b?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:H||void 0,label:Li,subheader:f}),u&&h&&l.jsx(ne,{"data-precededby":D||b?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:N||void 0,label:Ii,subheader:c})]}):null};Pi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ia(e,i){return e?(i===E?e.styles.before:e.styles.after).borderShadowColor:void 0}function ja(e,i){return e?(i===E?e.styles.before:e.styles.after).isFontMuted===!0:!1}function Fa(e){if(Je(e))return Kn(e)}function Oa(e){if(Je(e))return Bn(e)}function Ra(e){if(Ti(e))return Qn(e)}const Gi=Un;function Ui(e){const i=ha(Ni(e),{resolveDiff:()=>Gn(e)});return i.diff?{...i,highlightingMode:i.diff.highlightingMode}:{}}function Pa(e,i){return e?(i===E?e.styles.before:e.styles.after).backgroundColor:void 0}function Ga(e){const{appearance:i,textHighlighterColor:n,backgroundColor:a}=e,o=Ri({appearance:i});return d.useMemo(()=>[o,R.highlighter(n),R.background(a)].filter(Boolean).join(" "),[i,a,o,n])}const ei=d.memo(e=>{const{isVisible:i,value:n,appearance:a,textHighlighterColor:o,backgroundColor:t}=e,r=Ga({appearance:a,textHighlighterColor:o,backgroundColor:t});return l.jsx(Ze,{isVisible:i,value:n,className:r})});ei.__docgenInfo={description:"",methods:[],displayName:"DdlApiPropertyValueWithDiffs",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!0,tsType:{name:"union",raw:"'text' | 'block'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'block'"}]},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},backgroundColor:{required:!1,tsType:{name:"HighlightVariant"},description:""}}};function Ua(e){const i=e.findIndex(n=>n.text.startsWith("(")||n.text.startsWith(" ("));return i===-1?{typeNameSegments:e,parameterSegments:[]}:{typeNameSegments:e.slice(0,i),parameterSegments:e.slice(i)}}function ui(e,i,n){return e.diff?l.jsx(ei,{isVisible:!0,value:e.text,appearance:"text",textHighlighterColor:oe(e.diff,n)},`${e.text}-${i}`):l.jsx(ue,{isVisible:!0,value:e.text,appearance:"text"},`${e.text}-${i}`)}const Ki=d.memo(e=>{const{node:i,layoutSide:n}=e,a=Ln(i,n);if(a.kind==="plain")return l.jsx(ue,{isVisible:!0,value:a.text,appearance:"text"});if(a.kind==="monolithic")return l.jsx(ei,{isVisible:!0,value:a.text,appearance:"text",textHighlighterColor:oe(a.diff,n),backgroundColor:Pa(a.diff,n)});const{typeNameSegments:o,parameterSegments:t}=Ua(a.segments);return l.jsxs("span",{className:"inline-flex items-center gap-1",children:[o.map((r,s)=>ui(r,s,n)),t.length>0&&l.jsx("span",{className:"inline-flex items-center",children:t.map((r,s)=>ui(r,s,n))})]})});Ki.__docgenInfo={description:"",methods:[],displayName:"ColumnTypeLabelWithDiffs",props:{node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Bi=e=>{const{node:i,additionalInfoPrecededBy:n=q.DDL_COLUMN_ROW,isLastInList:a=!1,[Y]:o}=e,t=le(),r=i.value(),s=d.useMemo(()=>Gi(i),[i]),f=d.useMemo(()=>Ui(i),[i]),c=d.useMemo(()=>Oa(i),[i]),g=d.useMemo(()=>Fa(i),[i]),u=d.useMemo(()=>Yn(i),[i]),p=d.useMemo(()=>Wn(i),[i]),b=d.useMemo(()=>xi(i),[i]),D=d.useMemo(()=>$n(i),[i]),h=d.useMemo(()=>Ci(i),[i]),m=d.useMemo(()=>Xn(i),[i]),v=d.useCallback(A=>r?Vi(s,A)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx(Ki,{node:i,layoutSide:A}),l.jsx(pe,{columnId:i.id,layoutSide:A,value:r,flagDiffs:c,foreignKeyTargetDiffs:g})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[c,g,i,s,r]),I=d.useCallback(A=>{const K=zn(i,A);return $(K)?l.jsx(ie,{isVisible:!0,value:K,textHighlighterColor:oe(h,A)}):l.jsx(l.Fragment,{})},[h,i]),H=d.useCallback(A=>{const K=(()=>{const G=p==null?void 0:p.data;return G?A===E?B(G)||W(G)?G.beforeValue:void 0:X(G)||W(G)?G.afterValue:void 0:r==null?void 0:r.generatedExpression})();return $(K)?l.jsx(ie,{isVisible:!0,value:K,textHighlighterColor:oe(p,A)}):l.jsx(l.Fragment,{})},[p,r]),N=d.useCallback(A=>{const K=Jn(i,A);return K.length===0?l.jsx(l.Fragment,{}):l.jsx("div",{className:"flex flex-wrap items-center gap-2",children:K.map((G,Ji)=>l.jsx(ie,{isVisible:!0,value:G.literal,textHighlighterColor:oe(G.diff,A),borderShadowColor:Ia(G.diff,A),isFontMuted:ja(G.diff,A)},`${G.literal}-${Ji}`))})},[i]),y=t===se,C=!!s,x=y&&(!!(r!=null&&r.description)||!!u),T=!!(r!=null&&r.enumValues&&r.enumValues.length>0||b),w=!!($(r==null?void 0:r.defaultValue)||h||m),_=$(r==null?void 0:r.generatedExpression)||!!p,k=y&&(T||w||_),j=a&&!x&&!k,ae=a&&x&&!k,Z=a&&T&&!w&&!_,P=a&&w&&!_,z=a&&_;return r?l.jsxs("div",{"data-testid":"ddl-column-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":o,[U]:j||void 0,value:r.columnName,expandable:!1,expanded:!0,variant:V.body2,subheader:v,usage:F.DdlApiProperty,...f}),x&&l.jsx(de,{"data-precededby":q.DDL_COLUMN_ROW,[U]:ae||void 0,value:r.description??"",variant:V.body2,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty,diff:u,diffsSeverities:i.diffsSeverities}),y&&T&&l.jsx(ne,{"data-precededby":n,[U]:Z||void 0,label:ji,subheader:N,colorizingDiff:D,diffsSeverities:b?i.diffsSeverities:void 0}),y&&!C&&w&&l.jsx(ne,{"data-precededby":T?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:P||void 0,label:Li,subheader:I,colorizingDiff:m,diffsSeverities:h||m?i.diffsSeverities:void 0}),y&&_&&l.jsx(ne,{"data-precededby":w||T?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:n,[U]:z||void 0,label:Ii,subheader:H,diff:p,colorizingDiff:i.diffs[fe],diffsSeverities:i.diffsSeverities})]}):null};Bi.__docgenInfo={description:"",methods:[],displayName:"ColumnNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMN"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},additionalInfoPrecededBy:{required:!1,tsType:{name:"PrecededBy"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ka(e,i){let n=!1;return e.map((a,o)=>{const t=o===e.length-1,r=o===0?q.DDL_SECTION_HEADER:n?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,s=n?q.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW:q.DDL_COLUMN_ROW,f={columnNode:a,titlePrecededBy:r,additionalInfoPrecededBy:s,isLastInList:t};return n=i&&Ca(a.value()),f})}const Wi=e=>{const{node:i,[Y]:n}=e,a=ge(),o=le(),t=i.value(),r=va(i.childrenNodes()),s=o===se,f=d.useMemo(()=>Ka(r,s),[r,s]);return r.length===0?null:l.jsxs("div",{"data-testid":"ddl-columns-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(t==null?void 0:t.title)??"Columns",expandable:!1,expanded:!0,variant:V.h2}),l.jsx(hi.Provider,{value:a+1,children:f.map(({columnNode:c,titlePrecededBy:g,additionalInfoPrecededBy:u,isLastInList:p})=>Je(c)?l.jsx(Bi,{"data-precededby":g,additionalInfoPrecededBy:u,isLastInList:p,node:c},c.id):l.jsx(Pi,{"data-precededby":g,additionalInfoPrecededBy:u,isLastInList:p,node:c},c.id))})]})};Wi.__docgenInfo={description:"",methods:[],displayName:"ColumnsNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.COLUMNS"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Yi=e=>{const{schemaName:i,[Y]:n}=e;return i===Mi?null:l.jsx("div",{"data-precededby":n,className:`ddl-schema-name-block-row flex h-full ${Xe}`,children:l.jsx("span",{className:"ddl-schema-name-block",children:i})})};Yi.__docgenInfo={description:"",methods:[],displayName:"DdlSchemaNameBlock",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},schemaName:{required:!0,tsType:{name:"string"},description:""}}};const $i=e=>{const{node:i,isLastInList:n=!1,[Y]:a}=e,o=le(),t=i.value(),r=d.useMemo(()=>t?t.indexName?t.indexName:we(t.partNames):"",[t]),s=d.useCallback(g=>t?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.indexName&&l.jsx(ue,{isVisible:!0,value:`(${we(t.partNames)})`,appearance:"text"}),l.jsx(pe,{layoutSide:g,value:t})]}):l.jsx(l.Fragment,{}),[t]),f=d.useMemo(()=>o===se&&!!(t!=null&&t.description),[o,t==null?void 0:t.description]),c=n;return t?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[U]:c||void 0,value:r,expandable:!1,expanded:!0,variant:V.body2,subheader:t.indexName||t.isUnique?s:void 0,usage:F.DdlApiProperty}),f&&l.jsx(de,{"data-precededby":q.DDL_INDEX_ROW,value:t.description??"",variant:V.body1,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty})]}):null};$i.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};const Xi=e=>{const{node:i,isLastInList:n=!1,[Y]:a}=e,o=le(),t=i.value(),r=d.useMemo(()=>Gi(i),[i]),s=d.useMemo(()=>Ui(i),[i]),f=d.useMemo(()=>Ra(i),[i]),c=d.useMemo(()=>t?t.indexName?t.indexName:we(t.partNames):"",[t]),g=d.useCallback(D=>t?Vi(r,D)?l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.indexName&&l.jsx(ue,{isVisible:!0,value:`(${we(t.partNames)})`,appearance:"text"}),l.jsx(pe,{columnId:i.id,layoutSide:D,value:t,flagDiffs:f})]}):l.jsx(l.Fragment,{}):l.jsx(l.Fragment,{}),[f,r,t]),u=d.useMemo(()=>o===se&&!!(t!=null&&t.description),[o,t==null?void 0:t.description]),p=!!r,b=n;return t?l.jsxs("div",{"data-testid":"ddl-index-node-viewer",className:"flex flex-col ddlapi-property",children:[l.jsx(ee,{"data-precededby":a,[U]:b||void 0,value:c,expandable:!1,expanded:!0,variant:V.body2,subheader:t.indexName||t.isUnique||f!=null&&f.isUnique?g:void 0,usage:F.DdlApiProperty,...s}),u&&!p&&l.jsx(de,{"data-precededby":q.DDL_INDEX_ROW,value:t.description??"",variant:V.body1,textFontWeight:"normal",textColor:ce,usage:Q.DdlApiProperty})]}):null};Xi.__docgenInfo={description:"",methods:[],displayName:"IndexNodeViewerWithDiffs",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNodeWithDiffs",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEX"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`},{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]}],raw:`ITreeNodeWithDiffs<
  DdlApiTreeNodeValue<K> | null,
  K,
  DdlApiTreeNodeMeta,
  DdlApiTreeNodeValue<K> | null
>`},description:""},isLastInList:{required:!1,tsType:{name:"boolean"},description:""}}};function Ba(e){return e.map((i,n)=>({indexNode:i,titlePrecededBy:n===0?q.DDL_SECTION_HEADER:q.DDL_INDEX_ROW,isLastInList:n===e.length-1}))}const zi=e=>{const{node:i,[Y]:n}=e,a=ge(),o=i.value(),t=Ha(i.childrenNodes()),r=d.useMemo(()=>Ba(t),[t]);return t.length===0?null:l.jsxs("div",{"data-testid":"ddl-indexes-node-viewer",className:"flex flex-col",children:[l.jsx(ee,{"data-precededby":n,value:(o==null?void 0:o.title)??"Indexes",expandable:!1,expanded:!0,variant:V.h2}),l.jsx(hi.Provider,{value:a+1,children:r.map(({indexNode:s,titlePrecededBy:f,isLastInList:c})=>Ti(s)?l.jsx(Xi,{"data-precededby":f,isLastInList:c,node:s},s.id):l.jsx($i,{"data-precededby":f,isLastInList:c,node:s},s.id))})]})};zi.__docgenInfo={description:"",methods:[],displayName:"IndexesNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.INDEXES"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""}}};const Wa=e=>{const{node:i,noHeading:n=!1,[Y]:a=q.ROOT}=e,o=le(),t=i.value(),r=ya(i),s=r.find(ba),f=r.find(Da),c=!!(t!=null&&t.schemaName),g=o===se&&!!(t!=null&&t.description),u=n?q.ROOT:q.DDL_TABLE_HEADER_ROW;return l.jsxs("div",{"data-testid":"ddl-table-node-viewer",className:"flex flex-col",children:[!n&&l.jsx(ee,{"data-precededby":a,value:(t==null?void 0:t.tableName)??"",expandable:!1,expanded:!0,variant:V.h1}),c&&l.jsx(Yi,{"data-precededby":u,schemaName:(t==null?void 0:t.schemaName)??""}),g&&l.jsx(de,{"data-precededby":c?q.DDL_TABLE_SCHEMA_ROW:u,value:(t==null?void 0:t.description)??"",variant:V.h4,textFontWeight:"normal",textColor:ce}),s&&l.jsx(Wi,{"data-precededby":g?q.DDL_TABLE_DESCRIPTION_ROW:c?q.DDL_TABLE_SCHEMA_ROW:u,node:s}),f&&l.jsx(zi,{"data-precededby":s!=null&&s.childrenNodes().length?q.DDL_COLUMN_ROW:g?q.DDL_TABLE_DESCRIPTION_ROW:c?q.DDL_TABLE_SCHEMA_ROW:u,node:f})]})};Wa.__docgenInfo={description:"",methods:[],displayName:"TableNodeViewer",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},node:{required:!0,tsType:{name:"ITreeNode",elements:[{name:"union",raw:"DdlApiTreeNodeValue<K> | null",elements:[{name:"unknown"},{name:"null"}]},{name:"DdlApiTreeNodeKinds.TABLE"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  readonly _fragment: unknown
}`,signature:{properties:[{key:"_fragment",value:{name:"unknown",required:!0}}]}}],raw:`Partial<{
  readonly _fragment: unknown
}>`}],raw:"ITreeNode<DdlApiTreeNodeValue<K> | null, K, DdlApiTreeNodeMeta>"},description:""},noHeading:{required:!1,tsType:{name:"boolean"},description:""}}};export{de as $,Ne as A,Me as B,dn as C,lt as D,cn as E,fn as F,un as G,Ja as H,mi as I,Qa as J,Te as K,Ee as L,wi as M,V as N,_e as O,Y as P,ea as Q,ua as R,Ae as S,ni as T,fa as U,Ni as V,ha as W,Xe as X,ee as Y,F as Z,q as _,et as a,st as a0,ce as a1,Hi as b,nt as c,pn as d,it as e,dt as f,ai as g,ka as h,M as i,Wa as j,xa as k,Le as l,En as m,An as n,Di as o,yi as p,bi as q,L as r,vn as s,Za as t,rt as u,Se as v,at as w,tt as x,Dn as y,ot as z};
