var Fe=Object.defineProperty;var Pe=(e,i,a)=>i in e?Fe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a;var k=(e,i,a)=>(Pe(e,typeof i!="symbol"?i+"":i,a),a);import{y as X,z,A as re,F as Z,ax as Ye,ay as W,N as le,az as Ue,aA as ae,_ as Y,Z as j,H as Se,Y as O,aw as ke,aB as We,aC as Be,G as Je,aD as Ce,av as Ee,aE as ne,$ as _e,a0 as xe,l as we,S as Te,W as Ke}from"./index-71f1bfe0.js";import{j as o}from"./_commonjs-dynamic-modules-6308e768.js";import{r as l}from"./index-f46741a2.js";const Ve={SIMPLE:"simple",COMPLEX:"complex"};class Q{constructor(i="#",a="",t,r,n){k(this,"type");k(this,"parent");k(this,"container");k(this,"newDataLevel");k(this,"_value");k(this,"_meta");k(this,"_childrenNodes",[]);k(this,"_nestedNodes",[]);this.id=i,this.key=a,this.kind=t,this.isCycle=r;const{type:s=Ve.SIMPLE,value:h=null,parent:p=null,container:v=null,newDataLevel:y=!0,meta:E}=n;this.type=s,this.parent=p,this.container=v,this.newDataLevel=y,this._value=h,this._meta=E}createCycledClone(i,a,t){const r=new Q(i,a,this.kind,!0,{type:this.type,parent:t,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return r._childrenNodes=this._childrenNodes,r._nestedNodes=this._nestedNodes,r}value(i){return i?null:this._value}meta(){return this._meta}childrenNodes(i){return i?[]:this._childrenNodes}setChildrenNodes(i){this._childrenNodes.length=0,this._childrenNodes.push(...i)}nestedNodes(){return this._nestedNodes}setNestedNodes(i){this._nestedNodes.length=0,this._nestedNodes.push(...i)}findNestedNode(i,a=!1){if(!i&&this._nestedNodes.length)return this._nestedNodes[0];for(const t of this._nestedNodes){if(t.id===i)return t;if(a&&t.type===Ve.COMPLEX){const r=t.findNestedNode(i,a);if(r)return r}}return null}addChildNode(i){this._childrenNodes.push(i)}addNestedNode(i){this._nestedNodes.push(i)}}class de extends Q{constructor(a="#",t="",r,n,s){super(a,t,r,n,s);k(this,"type");this.id=a,this.key=t,this.kind=r,this.type=s.type}createCycledClone(a,t,r){const n=new de(a,t,this.kind,!0,{type:this.type,parent:r,container:null,newDataLevel:this.newDataLevel,value:this._value!==null?{...this._value}:null,meta:{...this._meta}});return n._childrenNodes=this._childrenNodes,n._nestedNodes=this._nestedNodes,n}value(a){const t=this.findNestedNode(a,!0);return(t==null?void 0:t.value())??null}childrenNodes(a){const t=this.findNestedNode(a,!0);return(t==null?void 0:t.childrenNodes())??[]}}class xi{constructor(){k(this,"nodes",new Map)}get root(){return this.nodes.get("#")??null}createSimpleNode(i,a,t,r,n){const s=new Q(i,a,t,r,n);return this.nodes.set(i,s),s}createComplexNode(i,a,t,r,n){const s=new de(i,a,t,r,n);return this.nodes.set(i,s),s}createCycledClone(i,a,t,r){const n=i.createCycledClone(a,t,r);return this.nodes.set(a,n),n}}const $e={BINDING:"binding",BINDINGS:"bindings",EXTENSIONS:"extensions",MESSAGE:"message",MESSAGE_CHANNEL:"channel",MESSAGE_CHANNEL_PARAMETERS:"channelParameters",MESSAGE_CONTENT:"messageContent",MESSAGE_HEADERS:"messageHeaders",MESSAGE_OPERATION:"operation",MESSAGE_PAYLOAD:"messagePayload",MESSAGE_SECTION_SELECTOR:"messageSectionSelector",SERVER:"server",SERVERS:"servers"},Xe=Object.values($e);new Set(Xe);class ue{aggregateByDescendantDiffs(i,a,t,r){}static isDiffsRecord(i){if(!T(i))return!1;for(const a of Object.values(i))if(!ue.isDiff(a))return!1;return!0}static isDiff(i){const a=i;return T(a)&&(X(a)||z(a)||re(a)||Z(a))}}function T(e){return Ne(e)&&!Array.isArray(e)}function Ne(e){return typeof e=="object"&&e!==null}function wi(e){return T(e)&&Object.keys(e).every(i=>typeof i=="string")}function te(e){return Array.isArray(e)}function Ti(e){return typeof e=="number"}function Ni(e){return typeof e=="string"}function Ii(e,i,a){let t=e,r=!1;for(const n of i){if(!T(t)&&!te(t))return;if(r){let h;Ne(t)&&(h=t[n]),!h&&te(t)&&a&&(h=t.find(p=>T(p)&&p[a]===n)),t=h,r=!1;continue}t=t[n],te(t)&&(r=!0)}return t}function Mi(e,i){return Object.keys(e).find(a=>e[a]===i)}function Li(e){if(ue.isDiffsRecord(e))return e}class ji{constructor(){k(this,"tree",null)}pick(i,a){if(!T(i))return null;const t={};for(const r of a){const n=String(r);if(!(n in i))continue;const s=i[n];Array.isArray(s)?t[n]=[...s]:T(s)?t[n]={...s}:t[n]=s}return this.isPartialOf(t,a)?t:null}isPartialOf(i,a){return Object.keys(i).every(t=>a.includes(t))}}class ze{constructor(){k(this,"byValue",new Map)}get(i){return this.byValue.get(i)}enter(i,a){this.byValue.set(i,a)}leave(i){this.byValue.delete(i)}}const J=()=>{},Oi=(e=!1)=>e?{debug:(...i)=>console.debug(...i),info:(...i)=>console.info(...i),warn:(...i)=>console.warn(...i),error:(...i)=>console.error(...i)}:{debug:J,info:J,warn:J,error:J};class Ri{constructor(){k(this,"fragments",new Map);k(this,"pending",new Map)}defer(i){this.fragments.set(i.nodeId,i.fragment),this.pending.set(i.nodeId,i)}rememberFragment(i,a){this.fragments.set(i,a)}}function Ae(e,i){return"#"+Ye([...e,...i])}function Gi(e,i){const a=new ze,t=[];for(let r=e;r;r=r.container??r.parent)t.push(r);for(const r of t.reverse()){const n=i.get(r.id);n&&a.enter(n,r)}return a}function Fi(e){return Array.isArray(e)?e.length>0:T(e)?Reflect.ownKeys(e).some(i=>typeof i!="symbol"):!1}function Ze(e){return e==null||!T(e)&&!W(e)}function Pi(e){const{source:i,tree:a,supportedNodeKinds:t,createNodeFromRaw:r,createNodeParams:n,createStateForSimpleNode:s,createStateForComplexNode:h,isSimpleNode:p,isComplexNode:v,resolveNodeKey:y,isDisallowedValue:E=Ze,shouldStopAfterNodeCreation:_,lazy:m}=e;return[({value:c,state:u,key:V,path:b})=>{if(typeof V=="symbol")return;if(!T(c)&&!W(c))return{value:c};const{ancestors:g,parent:H,container:S,pathPrefix:D=[]}=u,f=g.get(c);if(!f||!p(f)&&!v(f))return{value:c};if(!H||!p(H))return{value:c};const N=Ae(D,b),d=y(V,c),w=a.createCycledClone(f,N,d,H);return S?S.addNestedNode(w):H&&H.addChildNode(w),{done:!0}},({key:c,value:u,path:V,state:b,rules:g})=>!g||!Array.isArray(g.transformers)?void 0:{value:g.transformers.reduce((D,f)=>f(c,D,i,V,b),u)},({key:c,value:u,path:V,rules:b,state:g})=>{if(!b)return{done:!0};if(typeof c=="symbol")return{done:!0};if(E(u))return{done:!0};if(!b.kind||!t.includes(b.kind))return;const{parent:H,container:S,ancestors:D,pathPrefix:f=[],depth:N=0,materializeDepth:d}=g,w=Ae(f,V),G=y(c,u),{kind:B,complex:L=!1}=b,F=n(u,H,S),C=r(w,G,B,L,F);if(!C)return;S?S.addNestedNode(C):H&&H.addChildNode(C),m&&(T(u)||W(u))&&m.state.rememberFragment(w,u);let me=u;if(_!=null&&_(C,u)){const ie=H?H.descendantDiffs:void 0;if(!ie||!(c in ie))return{done:!0};const ve=ie[c];if(!ve)return{done:!0};const{data:He}=ve;Z(He)&&(me=He.beforeValue)}const be=N+(F.newDataLevel?1:0),De=!!(m&&p(C)&&d!==void 0&&be>=d&&(T(u)||W(u))&&m.resolveHasOwnChildren(u,b));De&&m.state.defer({nodeId:w,fragment:u,path:[...f,...V],rules:b});const ee=T(u)||W(u);ee&&D.enter(u,C);let U;return p(C)?U=s(g,C):U=h(g,C),U={...U,depth:be,materializeDepth:g.materializeDepth,pathPrefix:g.pathPrefix},De?{done:!0,exitHook:ee?()=>{D.leave(u)}:void 0}:{value:me,state:U,exitHook:ee?()=>{D.leave(u)}:void 0}}]}class Yi{}const fe="titleRow",Ui=["typeName","size","precision","scale","label"],Wi={ToEnum:"to-enum",FromEnum:"from-enum"},Bi={Lost:"lost",Gained:"gained"},Qe=["isPrimaryKey","isUnique","isNotNull","isGenerated"],ei=["isUnique"],Ji=[le,fe,"tableName","schemaName","description"],Ki=[le,fe,"columnName","description","generatedExpression",...Qe],$i=[le,fe,"indexName","description",...ei],ii=l.createContext(!1),ge=e=>{const{children:i,diffType:a,diffTypeCause:t,hidden:r=!1}=e;return r||!a?i:o.jsxs("div",{className:"flex flex-row relative w-full items-stretch",children:[o.jsx(Ue,{variant:a,message:t}),i]})};ge.__docgenInfo={description:"",methods:[],displayName:"DiffFloatingBadgeWrapper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},diffType:{required:!0,tsType:{name:"union",raw:"DiffType | undefined",elements:[{name:"DiffType"},{name:"undefined"}]},description:""},diffTypeCause:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""}}};const he=l.memo(e=>{const{content:i}=e;return o.jsx("div",{className:"flex flex-row w-full",children:i})});he.__docgenInfo={description:"",methods:[],displayName:"OneSideLayout",props:{content:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const ce=l.memo(e=>{const{left:i,right:a}=e;return o.jsxs("div",{className:"flex w-full flex-row items-stretch",children:[o.jsx("div",{className:"flex w-1/2",children:i}),o.jsx("div",{className:"flex w-1/2",children:a})]})});ce.__docgenInfo={description:"",methods:[],displayName:"SideBySideLayout",props:{left:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""},right:{required:!0,tsType:{name:"union",raw:"ReactElement | null",elements:[{name:"ReactElement"},{name:"null"}]},description:""}}};const pe="px-4",qe="",ai="px-4",Ie="";var q=(e=>(e.Default="default",e.AsyncApiJsoSection="async-api-jso-section",e.JsoProperty="jso-property",e.DdlApiSection="ddlapi-section",e.DdlApiProperty="ddlapi-property",e.JsonSchemaProperty="json-schema-property",e))(q||{});var A=(e=>(e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.body2="body2",e.body1="body1",e))(A||{});const ti=e=>{const{isExpandable:i,expanded:a,setExpanded:t,variant:r}=e,n=l.useCallback(()=>{t==null||t(s=>!s)},[t]);return o.jsx(o.Fragment,{children:i&&o.jsx("div",{className:"mt-1",children:o.jsx("a",{className:`text-value-expander ${si(r)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim(),onClick:n,children:a?"Show less":"Show more"})})})},ri=l.memo(e=>{const{value:i,variant:a,layoutSide:t,onClick:r,diff:n,usage:s,highlightingMode:h=ae.Default}=e,p=h===ae.Default,v=h===ae.Invisible,{textFontWeight:y,labelFontWeight:E,labelColor:_,textColor:m,label:I}=e,[x,M]=l.useState(!1),c=l.useCallback((S,D,f)=>{if(f)return null;const N=v?"":D.join(" "),d=`text-value ${r?"hover:cursor-pointer":""} ${y?`font-${y}`:""}`.trim(),w=`${d} ${N}`.trim(),G={onClick:r,...m!=null&&m.trim()?{style:{color:m}}:{}};S=x?S:oi(S);const B=(L,F)=>{const C={...G,className:F};switch(a){case A.h1:return o.jsx("h1",{...C,children:L});case A.h2:return o.jsx("h2",{...C,children:L});case A.h3:return o.jsx("h3",{...C,children:L});case A.h4:return o.jsx("h4",{...C,children:L});case A.h5:return o.jsx("h5",{...C,children:L});case A.h6:return o.jsx("h6",{...C,children:L});case A.body1:return o.jsx("span",{...C,className:`${F} text-value-body1`.trim(),children:L});case A.body2:return o.jsx("span",{...C,className:`${F} text-value-body2`.trim(),children:L})}};return I?B(o.jsxs(o.Fragment,{children:[o.jsx("span",{className:E?`font-${E}`:"font-bold",style:_!=null&&_.trim()?{color:_}:{},children:`${I}: `}),o.jsx("span",{className:N,children:S})]}),d):B(S,w)},[x,v,I,_,E,r,m,y,a]),u=l.useCallback(S=>{const D=[];let f=S,N=!1;if(n){const{data:d,styles:w}=n;switch(t){case O:D.push(j.highlighter(w.before.textHighlighterColor)),p&&(z(d)&&(f=P(d.beforeValue)?d.beforeValue:f),Z(d)&&(s===q.JsoProperty&&!v&&D.push(j.highlighter(Se.Yellow)),f=P(d.beforeValue)?d.beforeValue:f),re(d)&&(f=P(d.beforeKey)?d.beforeKey:f)),X(d)&&(N=!0);break;case Y:D.push(j.highlighter(w.after.textHighlighterColor)),p&&(X(d)&&(f=P(d.afterValue)?d.afterValue:f),Z(d)&&(s===q.JsoProperty&&!v&&D.push(j.highlighter(Se.Yellow)),f=P(d.afterValue)?d.afterValue:f),re(d)&&(f=P(d.afterKey)?d.afterKey:f)),z(d)&&(N=!0);break}}return[f,D,N]},[n,p,v,t,s]),[V,b,g]=u(i);return l.useMemo(()=>o.jsxs("div",{className:"flex flex-col items-start gap-1",children:[c(V,b,g),!g&&o.jsx(ti,{isExpandable:ni(V),expanded:x,setExpanded:M,variant:a})]}),[c,V,b,g,x,M,a])}),oe=5,se=300;function ni(e){return e?e.length>se||ke.trim(e.split(`
`)).length>oe:!1}function oi(e){if(!e)return;if(e.length>se)return e.slice(0,se)+"...";const i=ke.trim(e.split(`
`));return i.length>oe?i.slice(0,oe).join(`
`)+"...":e}function P(e){return typeof e=="string"}function si(e){switch(e){case A.h1:return"text-value-expander--h1";case A.h2:return"text-value-expander--h2";case A.h3:return"text-value-expander--h3";case A.h4:return"text-value-expander--h4";case A.h5:return"text-value-expander--h5";case A.h6:return"text-value-expander--h6";case A.body1:return"text-value-expander--body1";case A.body2:return"text-value-expander--body2";default:return"text-value-expander--body2"}}const Me="data-precededby",Le="data-ddl-list-last-row";var li=(e=>(e.ROOT="root",e.ADDRESS_ROW="address-row",e.DESCRIPTION_ROW="description-row",e.SUMMARY_ROW="summary-row",e.MESSAGE_SECTION_SELECTOR="message-section-selector",e.MESSAGE_SECTION_HEADER_HIGH_LEVEL="message-section-header-high-level",e.MESSAGE_SECTION_HEADER_LOW_LEVEL="message-section-header-low-level",e.JSON_SCHEMA_VIEWER="json-schema-viewer",e.JSO_VIEWER="jso-viewer",e.JSO_PROPERTY="jso-property",e.BINDING_VERSION_ROW="binding-version-row",e.SERVER_BLOCK="server-block",e.SERVER_ADDRESS_ROW="server-address-row",e.DDL_TABLE_HEADER_ROW="ddl-table-header-row",e.DDL_TABLE_SCHEMA_ROW="ddl-table-schema-row",e.DDL_TABLE_DESCRIPTION_ROW="ddl-table-description-row",e.DDL_SECTION_HEADER="ddl-section-header",e.DDL_COLUMN_ROW="ddl-column-row",e.DDL_COLUMN_AFTER_ADDITIONAL_INFO_ROW="ddl-column-after-additional-info-row",e.DDL_INDEX_ROW="ddl-index-row",e))(li||{}),di=(e=>(e.Default="default",e.DdlApiProperty="ddlapi-property",e))(di||{});const ui=l.createContext(void 0);function fi(){return l.useContext(ui)}const je=e=>{const{expandable:i,expanded:a,onClick:t,level:r}=e,n=l.useContext(ii),s=r>0,h=t??(()=>{n&&console.warn("Expander callback is not provided.")});return!i&&!s?null:o.jsxs("div",{className:`flex flex-row items-center justify-center ${s?"gap-0.5":""}`,children:[s&&o.jsx(We,{short:i}),i&&a!==void 0&&o.jsx(Be,{onToggle:h,expanded:a})]})};je.__docgenInfo={description:"",methods:[],displayName:"Expander",props:{expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!0,tsType:{name:"number"},description:""}}};const gi={[q.JsoProperty]:qe,[q.DdlApiSection]:ai,[q.DdlApiProperty]:Ie,[q.JsonSchemaProperty]:qe},hi={[q.JsoProperty]:["min-h-[26px]"],[q.DdlApiProperty]:["min-h-[26px]"],[q.JsonSchemaProperty]:["min-h-[26px]"]};function ci(e){const i=gi[e]??pe,a=hi[e]??[];return[i,...a].join(" ")}const K=l.memo(e=>{const{expandable:i,expanded:a,onClickExpander:t,value:r,variant:n,layoutSide:s,enableHeader:h=!0,enableHeaderValue:p=!0,subheader:v,usage:y=q.Default,highlightingMode:E=Je,hideLevelIndicatorWhenSideEmpty:_=!1}=e,{diff:m,descendantDiffs:I,diffsSeverities:x}=e,{[Me]:M,[Le]:c}=e,u=l.useMemo(()=>{switch(y){case q.Default:return E.get(Ce.Default);case q.AsyncApiJsoSection:case q.JsoProperty:return E.get(Ce.JsoPropertyKey)}},[E,y]),V=Ee(),b=fi(),g=l.useMemo(()=>b?s===O?b.beforeLevel:b.afterLevel:V,[s,V,b]),H=l.useMemo(()=>{const d=[];if(!m)return d;const{data:w,styles:G}=m;return w&&(s===O&&d.push(j.background(G.before.backgroundColor)),s===Y&&d.push(j.background(G.after.backgroundColor))),d},[m,s]),S=l.useMemo(()=>p?o.jsx(ri,{"data-precededby":M,value:r,variant:n,layoutSide:s,diff:m,usage:y,highlightingMode:u,onClick:t}):null,[p,M,r,n,s,m,y,u,t]),D=y===q.DdlApiProperty,f=l.useMemo(()=>h?o.jsxs(o.Fragment,{children:[(i||g>0)&&o.jsxs("div",{"data-precededby":M,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ne,{level:g}),o.jsx(je,{expandable:i,expanded:a,onClick:t,level:g})]}),!D&&S]}):_?null:g>0&&o.jsx(ne,{level:g}),[h,i,a,S,_,D,g,t,M]),N=l.useMemo(()=>ci(y),[y]);return o.jsxs("div",{"data-precededby":M,"data-ddl-list-last-row":c?!0:void 0,"data-usage":y!==q.Default?y:void 0,className:`title-row-content flex w-full ${D?"items-stretch":"items-center"} h-full ${N} gap-2 ${H.join(" ")}`,children:[f,D?o.jsxs("div",{className:"ddlapi-property-row-body flex min-w-0 flex-1 items-center gap-2",children:[S,v==null?void 0:v(s)]}):v==null?void 0:v(s)]})});K.__docgenInfo={description:"",methods:[],displayName:"TitleRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const pi=l.memo(e=>{const i=_e(),{diff:a,diffsSeverities:t,enableHeaderValue:r}=e,n=l.useMemo(()=>t==null?void 0:t["title-row"],[t]),s=l.useMemo(()=>n==null?void 0:n.type,[n]),h=l.useMemo(()=>xe(n==null?void 0:n.causedAt),[n]);switch(i){case Te:return o.jsx(ge,{diffType:s,diffTypeCause:h,hidden:!1,children:o.jsx(ce,{left:o.jsx(K,{...e,enableHeader:(a==null?void 0:a.styles.before.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:O}),right:o.jsx(K,{...e,enableHeader:(a==null?void 0:a.styles.after.isHeaderVisible)??!0,enableHeaderValue:r,layoutSide:Y})})});case we:return o.jsx(he,{content:o.jsx(K,{...e,layoutSide:Y})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});pi.__docgenInfo={description:"",methods:[],displayName:"TitleRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},expandable:{required:!0,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:""},onClickExpander:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!0,tsType:{name:"TextValueVariant"},description:""},enableHeader:{required:!1,tsType:{name:"boolean"},description:""},enableHeaderValue:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""}}};const yi="detailed";function Xi(e){return e===yi}const Oe=l.memo(e=>{const{isVisible:i,value:a,blockClassName:t,valueClassName:r}=e;return i?o.jsx("span",{className:t,children:o.jsx("span",{className:r||void 0,children:`${a}`})}):null});Oe.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPieceBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},blockClassName:{required:!1,tsType:{name:"string"},description:""},valueClassName:{required:!1,tsType:{name:"string"},description:""}}};var ye=(e=>(e.Default="default",e.DdlApiProperty="ddlapi-property",e.JsonSchemaValidation="json-schema-validation",e))(ye||{});function mi(e={}){const{usage:i=ye.Default,textHighlighterColor:a,borderShadowColor:t,isFontMuted:r}=e;return l.useMemo(()=>({blockClassName:["additional-info-piece","subheader","block",j.borderShadow(t)].filter(Boolean).join(" "),valueClassName:[j.highlighter(a),r?j.fontMuted():""].filter(Boolean).join(" ")}),[t,r,a,i])}const bi=l.memo(e=>{const{isVisible:i,value:a,usage:t=ye.Default,textHighlighterColor:r,borderShadowColor:n,isFontMuted:s}=e,{blockClassName:h,valueClassName:p}=mi({usage:t,textHighlighterColor:r,borderShadowColor:n,isFontMuted:s});return o.jsx(Oe,{isVisible:i,value:a,blockClassName:h,valueClassName:p})});bi.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoPiece",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoPieceUsage"},description:""},textHighlighterColor:{required:!1,tsType:{name:"Exclude",elements:[{name:"HighlightVariant"},{name:"HighlightVariant.Gray"}],raw:"Exclude<HighlightVariant, HighlightVariant.Gray>"},description:""},borderShadowColor:{required:!1,tsType:{name:"HighlightVariant"},description:""},isFontMuted:{required:!1,tsType:{name:"boolean"},description:""}}};var R=(e=>(e.Default="default",e.DdlApiProperty="ddlapi-property",e.JsonSchemaValidation="json-schema-validation",e))(R||{});const Di={[R.DdlApiProperty]:Ie,[R.JsonSchemaValidation]:pe},vi={[R.DdlApiProperty]:"ddlapi-property-row-body",[R.Default]:"additional-info-row-body",[R.JsonSchemaValidation]:"additional-info-row-body"},Hi={[R.DdlApiProperty]:"min-h-[26px]"};function Si(e,i={}){return{xPaddingClass:i.xPaddingClass??Di[e]??pe,bodyClass:i.bodyClass??vi[e]??"additional-info-row-body",minHeightClass:i.minHeightClass??Hi[e]??"",stretchLevelIndicator:e===R.DdlApiProperty}}const $=l.memo(e=>{var g;const{label:i,subheader:a,layoutSide:t,diff:r,colorizingDiff:n,hideLevelIndicatorWhenSideEmpty:s=!1,usage:h=R.Default,xPaddingClass:p,bodyClass:v,minHeightClass:y}=e,{[Me]:E,[Le]:_}=e,m=Ee(),I=l.useMemo(()=>Si(h,{xPaddingClass:p,bodyClass:v,minHeightClass:y}),[h,p,v,y]),x=t===O?r==null?void 0:r.styles.before:r==null?void 0:r.styles.after,c=(g=(t===O?n==null?void 0:n.styles.before:n==null?void 0:n.styles.after)??x)==null?void 0:g.backgroundColor,u=l.useMemo(()=>c?[j.background(c)]:[],[c]),V=l.useMemo(()=>{const H=n==null?void 0:n.data;if(H){if(X(H))return t!==O;if(z(H))return t===O}return(x==null?void 0:x.isContentVisible)??!0},[n,x==null?void 0:x.isContentVisible,t]),b=m>0&&(!s||V);return o.jsxs("div",{"data-testid":"additional-info-row-content","data-precededby":E,"data-ddl-list-last-row":_?!0:void 0,className:["additional-info-row-content flex w-full items-stretch h-full gap-2",I.xPaddingClass,I.minHeightClass,I.stretchLevelIndicator?"items-stretch":"",u.join(" ")].filter(Boolean).join(" "),children:[b&&o.jsxs("div",{"data-precededby":E,className:"level-indicator-column flex items-stretch self-stretch",children:[o.jsx(ne,{level:m}),o.jsx("div",{className:"w-4","aria-hidden":"true"})]}),V&&o.jsxs("div",{className:`${I.bodyClass} flex min-w-0 flex-1 items-center gap-2`,children:[o.jsx("span",{className:"additional-info-row-label",children:`${i}:`}),a==null?void 0:a(t)]})]})});$.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRowContent",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""},layoutSide:{required:!0,tsType:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
| typeof CHANGED_LAYOUT_SIDE`,elements:[{name:"ORIGIN_LAYOUT_SIDE"},{name:"CHANGED_LAYOUT_SIDE"}]},description:""}}};const Ci=l.memo(e=>{var r;const i=_e(),a=(r=e.diffsSeverities)==null?void 0:r[Ke.AdditionalInfoRow],t=l.useMemo(()=>xe(a==null?void 0:a.causedAt),[a==null?void 0:a.causedAt]);switch(i){case Te:return o.jsx(ge,{diffType:a==null?void 0:a.type,diffTypeCause:t,hidden:!1,children:o.jsx(ce,{left:o.jsx($,{...e,layoutSide:O}),right:o.jsx($,{...e,layoutSide:Y})})});case we:return o.jsx(he,{content:o.jsx($,{...e,layoutSide:Y})})}return o.jsxs("div",{style:{fontSize:12,marginTop:4,marginBottom:4},children:["This layout mode (",i,") is not supported."]})});Ci.__docgenInfo={description:"",methods:[],displayName:"AdditionalInfoRow",props:{"data-precededby":{required:!1,tsType:{name:"PrecededBy"},description:""},"data-ddl-list-last-row":{required:!1,tsType:{name:"boolean"},description:""},xPaddingClass:{required:!1,tsType:{name:"string"},description:""},bodyClass:{required:!1,tsType:{name:"string"},description:""},minHeightClass:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},subheader:{required:!1,tsType:{name:"signature",type:"function",raw:"(layoutSide: LayoutSide) => ReactElement",signature:{arguments:[{type:{name:"union",raw:`| typeof ORIGIN_LAYOUT_SIDE
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
}`,signature:{properties:[{key:"type",value:{name:"DiffType",required:!0}},{key:"causedAt",value:{name:"JsonPath",required:!0}}]}}],raw:"Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>"}],raw:"Partial<Record<NodeDiffsSeverityPlacemennt, NodeDiffsSeverity>>"},description:""},hideLevelIndicatorWhenSideEmpty:{required:!1,tsType:{name:"boolean"},description:""},usage:{required:!1,tsType:{name:"AdditionalInfoRowUsage"},description:""}}};const Re=l.memo(e=>{const{isVisible:i,value:a,className:t}=e;return i?o.jsx("span",{className:t,children:`${a}`}):null});Re.__docgenInfo={description:"",methods:[],displayName:"SubheaderValueBase",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var Ge=(e=>(e.Text="text",e.Block="block",e))(Ge||{});function Vi(e){const{appearance:i}=e;return l.useMemo(()=>["title-row-subheader-value","subheader",i].filter(Boolean).join(" "),[i])}const Ai=l.memo(e=>{const{isVisible:i,value:a,appearance:t=Ge.Text}=e,r=Vi({appearance:t});return o.jsx(Re,{isVisible:i,value:a,className:r})});Ai.__docgenInfo={description:"",methods:[],displayName:"SubheaderValue",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"SubheaderValueAppearance"},description:""}}};function zi(e,i){return e?(i===O?e.styles.before:e.styles.after).backgroundColor:void 0}export{Mi as $,Me as A,zi as B,di as C,Qe as D,Ie as E,Ai as F,Ge as G,q as H,Ci as I,R as J,bi as K,Ri as L,ye as M,wi as N,he as O,li as P,ri as Q,Le as R,ce as S,pi as T,Vi as U,Re as V,$e as W,pe as X,Xe as Y,Ii as Z,Ne as _,A as a,ii as a0,ui as a1,fi as a2,ue as b,Oi as c,ei as d,Ki as e,fe as f,Wi as g,Bi as h,T as i,Ui as j,$i as k,Ji as l,ge as m,xi as n,te as o,Ni as p,Ti as q,Pi as r,Yi as s,Li as t,ji as u,ze as v,Fi as w,Gi as x,Ve as y,Xi as z};
