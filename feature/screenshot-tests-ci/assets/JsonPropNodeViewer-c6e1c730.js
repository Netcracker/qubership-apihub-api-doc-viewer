import{j as s}from"./jsx-runtime-beaa2906.js";import{r as R}from"./index-f46741a2.js";import{x as We,i as Ye,y as Xe,z as ae,B as ee,F as Qe,G as ze,H as Ze,K as he,M as Ve,N as es,O as Ne,P as ve,Q as me,U as Ce,R as _e,T as ss,m as ts,V as ns,W as as,X as is,Y as os,Z as rs,_ as ls,$ as cs,a0 as ds,a1 as ms,a2 as us,a3 as ps,a4 as xs,a5 as we,A as hs,a6 as fs,a7 as gs,a8 as vs,a9 as ys,aa as Es,ab as Ns,ac as Cs,ad as _s,ae as S,af as Ae,ag as Te,ah as ne,ai as V,aj as Re,ak as be,al as oe,am as fe,an as As,ao as Ts,ap as Is,aq as Ds,ar as Pe,as as ye,at as Ie,au as Ls,av as k,aw as Ss,ax as $s,ay as ws,az as Rs,aA as bs,aB as Ps,aC as Os,aD as js,aE as Ms,aF as Us,aG as Oe,r as je,aH as Ks,aI as Bs,aJ as qs,aK as Me,aL as Fs,aM as Ee,aN as Gs,aO as Hs,aP as ks,g as Ue,aQ as Js,p as Ws,aR as Ys,t as Ke,aS as Xs,aT as Qs,aU as zs,aV as Zs,aW as Vs}from"./ErrorBoundaryFallback-0b215312.js";const et=R.createContext(void 0);function st(){return R.useContext(et)}const tt=["type","nullable","title","format"],nt=["required","readOnly","writeOnly","deprecated"],Be=a=>{const{nodeTitleData:e,nodeTypeData:c,isCircularRef:u,readOnly:N,writeOnly:y,deprecated:n,isExpandable:i,expanded:t,sorted:d,isRoot:E,onToggleExpander:m,onToggleSort:C,layoutMode:T=ts,level:I=0,$changes:D,$metaChanges:h,$nodeChange:p,$nodeChangesSummary:f}=a,l=!!p,o=We(),_=st(),g=Ye(_)&&(e!=null&&e.title)&&_[e.title]?_[e.title]:void 0,v=Xe(l?void 0:f),X=R.useCallback(P=>o.length===0||o.includes(P),[o]),{isDocumentLayoutMode:b,isInlineDiffsLayoutMode:$,isSideBySideDiffsLayoutMode:w}=ns(T),r=!!D&&tt.some(P=>ae(D[P]))||!!h&&nt.some(P=>ae(h[P])),{nodeAdded:F,nodeRemoved:L,nodeReplaced:x}={nodeAdded:l&&p.action===ee.add,nodeRemoved:l&&p.action===ee.remove,nodeReplaced:l&&p.action===ee.replace},Q=Qe(ze(D,h,Ze),o),[M,se]=l?he(p):r?he(...Q):Ve,H=es(M,o),z=l?Ne[p==null?void 0:p.action]:r?Ne[ee.replace]:"",O=({layoutSide:P})=>{const[ge,j]=R.useState(!1),G=[{label:t?ms:us,onClick:m},{label:d?ps:xs,onClick:C}],te=Je=>j(Je.open),re=w?"w-1/2":"w-full",le=!b&&!l&&r&&!!(h!=null&&h.required),ie=as(),ce=ie&&ie===P,de=()=>s.jsxs(s.Fragment,{children:[c&&s.jsx("div",{className:"text-xs font-normal text-slate-500",children:s.jsx(we,{...c,showNullable:!0,layoutMode:T,layoutSide:P,$changes:D})}),hs.isNotEmpty(v)&&!b&&i&&!t&&s.jsx("div",{className:"text-xs font-normal text-slate-500",children:s.jsx(fs,{values:v,filter:X})}),u&&s.jsx(gs,{text:vs,children:s.jsx(ys,{})}),s.jsx(Es,{requiredChanged:le,readOnly:N,writeOnly:y,deprecated:n,layoutSide:P,isNodeChanged:l,isContentChanged:r,$nodeChange:p,$metaChanges:h}),g&&s.jsx(Ns,{label:g,colorSchema:Cs[_s],layoutMode:T,layoutSide:P,isNodeChanged:!1,isContentChanged:!1})]});return s.jsx("div",{className:`flex flex-col ${is} ${re}`,children:s.jsxs("div",{className:"flex flex-row relative",children:[s.jsx(os,{level:I}),s.jsx(rs,{isRoot:E,isExpandable:i,expanded:t,onToggleExpander:m,onToggleContextMenu:te}),s.jsxs("div",{className:"flex flex-row items-center gap-2 pt-2 pb-1",children:[s.jsx("div",{className:`text-xs text-black font-Inter-Medium ${i?"hover:cursor-pointer":""}`,onClick:i?m:void 0,onContextMenu:ls(i,te),children:s.jsx(cs,{...e,showRequired:!0,layoutMode:T,layoutSide:P,requiredChange:h==null?void 0:h.required})}),!ce&&s.jsx(de,{}),s.jsx(ds,{visible:ge,onClickAway:()=>te({open:!1}),menuItems:G})]})]})})};return b?s.jsx("div",{className:"flex flex-row",children:s.jsx(O,{...a,layoutSide:ve})}):$?!l&&!r?s.jsx("div",{className:"flex flex-row",children:s.jsx(O,{...a,layoutSide:me})}):s.jsxs("div",{className:`flex flex-row relative ${H?z:""}`,children:[M&&H&&s.jsx(Ce,{variant:M,message:se}),s.jsx(O,{...a,layoutSide:me})]}):w?!l&&!r?s.jsxs("div",{className:"flex flex-row",children:[s.jsx(O,{...a,layoutSide:me}),s.jsx(O,{...a,layoutSide:ve})]}):s.jsxs("div",{className:`flex flex-row relative ${H?z:""}`,children:[M&&H&&s.jsx(Ce,{variant:M,message:se}),!l&&r||l&&(L||x)?s.jsx(O,{...a,layoutSide:me}):s.jsx(_e,{level:(p==null?void 0:p.depth)??I}),!l&&r||l&&(F||x)?s.jsx(O,{...a,layoutSide:ve}):s.jsx(_e,{level:(p==null?void 0:p.depth)??I})]}):s.jsx(ss,{layoutMode:T})};Be.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{nodeTitleData:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  title: string | number
  required: boolean
  nullable: boolean
  isBadge: boolean
  badgeKind: BadgeKind
  isIndex: boolean
  isDirective: boolean
}`,signature:{properties:[{key:"title",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"required",value:{name:"boolean",required:!0}},{key:"nullable",value:{name:"boolean",required:!0}},{key:"isBadge",value:{name:"boolean",required:!0}},{key:"badgeKind",value:{name:"union",raw:`| typeof BADGE_KIND_DEFAULT
| typeof BADGE_KIND_DEFAULT_OUTLINE
| typeof BADGE_KIND_INFO
| typeof BADGE_KIND_WARNING
| typeof BADGE_KIND_ALTERNATIVE_INFO
| typeof BADGE_KIND_ERROR
| typeof BADGE_KIND_SUCCESS`,elements:[{name:"BADGE_KIND_DEFAULT"},{name:"BADGE_KIND_DEFAULT_OUTLINE"},{name:"BADGE_KIND_INFO"},{name:"BADGE_KIND_WARNING"},{name:"BADGE_KIND_ALTERNATIVE_INFO"},{name:"BADGE_KIND_ERROR"},{name:"BADGE_KIND_SUCCESS"}],required:!0}},{key:"isIndex",value:{name:"boolean",required:!0}},{key:"isDirective",value:{name:"boolean",required:!0}}]}}],raw:`Partial<{
  title: string | number
  required: boolean
  nullable: boolean
  isBadge: boolean
  badgeKind: BadgeKind
  isIndex: boolean
  isDirective: boolean
}>`},description:""},nodeTypeData:{required:!0,tsType:{name:"union",raw:"NodeTypeData | null",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  brokenRef: string
  type: string
  nullable: boolean
  entity: string
  combiner: string
}`,signature:{properties:[{key:"brokenRef",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"nullable",value:{name:"boolean",required:!0}},{key:"entity",value:{name:"string",required:!0}},{key:"combiner",value:{name:"string",required:!0}}]}}],raw:`Partial<{
  brokenRef: string
  type: string
  nullable: boolean
  entity: string
  combiner: string
}>`},{name:"null"}]},description:""},isCircularRef:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},writeOnly:{required:!1,tsType:{name:"boolean"},description:""},deprecated:{required:!1,tsType:{name:"boolean"},description:""},isExpandable:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},sorted:{required:!0,tsType:{name:"number"},description:""},isRoot:{required:!0,tsType:{name:"boolean"},description:""},onToggleExpander:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleSort:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function at(a,e){var f,l,o;if(!e)return{};const c=e==null?void 0:e.enum,u=e==null?void 0:e.minLength,N=e==null?void 0:e.maxLength,y=e==null?void 0:e.pattern,n=e,i=n!=null&&n.exclusiveMinimum&&S(n==null?void 0:n.minimum)?n.minimum:void 0,t=n!=null&&n.exclusiveMaximum&&S(n==null?void 0:n.maximum)?n.maximum:void 0,d=i||n==null?void 0:n.minimum,E=t||n==null?void 0:n.maximum,m=n==null?void 0:n.multipleOf,C=(o=(l=(f=a==null?void 0:a.parent)==null?void 0:f.value())==null?void 0:l.propertyNames)==null?void 0:o.enum,T=e==null?void 0:e.minProperties,I=e==null?void 0:e.maxProperties,D=e==null?void 0:e.uniqueItems,h=e==null?void 0:e.minItems,p=e==null?void 0:e.maxItems;return{any:{allowedValues:c},string:{minLength:u,maxLength:N,pattern:y},number:{minimum:d,maximum:E,exclusiveMinimum:i,exclusiveMaximum:t,multipleOf:m},object:{allowedPropertyNames:C,minProperties:T,maxProperties:I},array:{uniqueItems:D,minItems:h,maxItems:p}}}const J="?",A="{value}",W=">",ue=">=",Y="<",pe="<=",U=1,B=2,K=4,q=8,xe={0:{lower:void 0,upper:void 0},[U]:{lower:`${ue} ${A}`,upper:void 0},[B]:{lower:`${W} ${J}`,upper:void 0},[K]:{lower:void 0,upper:`${pe} ${A}`},[q]:{lower:void 0,upper:`${Y} ${J}`},[B|U]:{lower:`${W} ${A}`,upper:void 0},[B|K]:{lower:`${W} ${J}`,upper:`${pe} ${A}`},[B|q]:{lower:`${W} ${J}`,upper:`${Y} ${J}`},[q|U]:{lower:`${ue} ${A}`,upper:`${Y} ${J}`},[q|K]:{lower:void 0,upper:`${Y} ${A}`},[K|U]:{lower:`${ue} ${A}`,upper:`${pe} ${A}`},[B|U|K]:{lower:`${W} ${A}`,upper:`${pe} ${A}`},[B|U|q]:{lower:`${W} ${A}`,upper:`${Y} ${J}`},[B|K|q]:{lower:`${W} ${J}`,upper:`${Y} ${A}`},[q|U|K]:{lower:`${ue} ${A}`,upper:`${Y} ${A}`},[U|B|K|q]:{lower:`${W} ${A}`,upper:`${Y} ${A}`}};function it(a,e,c){var z,O;const u={data:{},changes:{},changesKeys:[],visible:!1},N=a.minimum,y=a.exclusiveMinimum,n=a.maximum,i=a.exclusiveMaximum,t=e.minimum,d=e.exclusiveMinimum,E=e.maximum,m=e.exclusiveMaximum,[C]=he(t,d),[T]=he(E,m),I=S(N),D=S(n),h=S(t),p=S(E),f=S(d),l=S(m),o=Ae(t),_=Te(t),g=ne(t),v=Ae(E),X=Te(E),b=ne(E);let $=0,w=0;I&&(!h||o||g)&&(w|=U),y&&(!f||ne(d)&&d.afterValue)&&(w|=B),D&&(!p||v||b)&&(w|=K),i&&(!l||ne(m)&&m.afterValue)&&(w|=q);const r=w in xe?{...xe[w]}:void 0;if(r!=null&&r.lower&&(r.lower=r.lower.replace(A,`${N}`)),r!=null&&r.upper&&(r.upper=r.upper.replace(A,`${n}`)),u.data.lower=r==null?void 0:r.lower,u.data.upper=r==null?void 0:r.upper,!h&&!f&&!p&&!l)return u.visible=De(u.data.lower,u.data.upper),u;let F,L;I&&!h&&(F=N,$|=U),(_||g)&&(F=t.beforeValue,$|=U),D&&!p&&(L=n,$|=K),(X||b)&&(L=E.beforeValue,$|=K),(y&&!f||ne(d)&&d.beforeValue)&&($|=B),(i&&!l||ne(m)&&m.beforeValue)&&($|=q);const x=$ in xe?{...xe[$]}:void 0;x!=null&&x.lower&&(x.lower=x.lower.replace(A,`${F}`)),x!=null&&x.upper&&(x.upper=x.upper.replace(A,`${L}`)),(z=u.data).lower??(z.lower=x==null?void 0:x.lower),(O=u.data).upper??(O.upper=x==null?void 0:x.upper),u.visible=De(u.data.lower,u.data.upper);const Q=Le(C,x==null?void 0:x.lower,r==null?void 0:r.lower),M=Le(T,x==null?void 0:x.upper,r==null?void 0:r.upper),se=Se(t,d),H=Se(E,m);return Q&&($e(Q,se),u.changes.lower=Q),M&&($e(M,H),u.changes.upper=M),u.changesKeys=V(u.data,c),u}function De(a,e){return!!a||!!e}function Le(a,e,c){if(!(a===void 0||e===c))return e===void 0&&c!==void 0?{type:a,action:ee.add,afterValue:c}:e!==void 0&&c===void 0?{type:a,action:ee.remove,beforeValue:e}:{type:a,action:ee.replace,beforeValue:e,afterValue:c}}function Se(...a){const e={beforeDeclarationPaths:[],afterDeclarationPaths:[]};for(const c of a)c&&(Re(c)&&e.beforeDeclarationPaths.push(...c.beforeDeclarationPaths),be(c)&&e.afterDeclarationPaths.push(...c.afterDeclarationPaths));return e}function $e(a,e){if(a)return Re(a)&&(a.beforeDeclarationPaths=e.beforeDeclarationPaths),be(a)&&(a.afterDeclarationPaths=e.afterDeclarationPaths),a}const Z={valueLength:["minLength","maxLength"],valuePattern:["pattern"],valueRange:["lower","upper"],multipleOf:["multipleOf"],propertiesCount:["minProperties","maxProperties"],itemsCount:["minItems","maxItems"],uniqueItems:["uniqueItems"]},qe=a=>{var te,re,le,ie,ce,de;const{shift:e=!1,state:c,$nodeChange:u}=a,N=c.node,n=c.meta,i=c.value,t=i,d=(te=c.parent)==null?void 0:te.value,E=(re=c.parent)==null?void 0:re.value,m=oe(),C=fe(),T=As(N),I=Ts(N),D=Is(i),h=Ds(i),p=Pe(i),f=ye(i)||ye(d),{any:l,string:o,number:_,object:g,array:v}=at(N,i),X={minimum:i==null?void 0:i.minimum,exclusiveMinimum:!!(i!=null&&i.exclusiveMinimum),maximum:i==null?void 0:i.maximum,exclusiveMaximum:!!(i!=null&&i.exclusiveMaximum)},b=(le=t==null?void 0:t.$changes)==null?void 0:le.minimum,$=(ie=t==null?void 0:t.$changes)==null?void 0:ie.exclusiveMinimum,w=(ce=t==null?void 0:t.$changes)==null?void 0:ce.maximum,r=(de=t==null?void 0:t.$changes)==null?void 0:de.exclusiveMaximum,F={minimum:ae(b)?b:void 0,exclusiveMinimum:ae($)?$:void 0,maximum:ae(w)?w:void 0,exclusiveMaximum:ae(r)?r:void 0},{data:L,changes:x,changesKeys:Q,visible:M}=it(X,F,Z.valueRange),se=V(o,Z.valueLength),H=V(o,Z.valuePattern),z=V(_,Z.multipleOf),O=V(g,Z.propertiesCount),P=V(v,Z.uniqueItems),ge=V(v,Z.itemsCount),j=u??(n==null?void 0:n.$nodeChange),G=t==null?void 0:t.$changes;return s.jsxs(s.Fragment,{children:[(l==null?void 0:l.allowedValues)&&s.jsx(Ie,{shift:e,$changesKey:"enum",title:Ls,items:l.allowedValues,layoutMode:C,level:m,$nodeChange:j,$changes:G}),D&&s.jsxs(s.Fragment,{children:[(S(o==null?void 0:o.minLength)||S(o==null?void 0:o.maxLength))&&s.jsx(k,{shift:e,$changesKeys:se,title:Ss,items:{minLength:o==null?void 0:o.minLength,maxLength:o==null?void 0:o.maxLength},layoutMode:C,level:m,$nodeChange:j,$changes:G}),S(o==null?void 0:o.pattern)&&s.jsx(k,{shift:e,$changesKeys:H,title:$s,items:{pattern:o==null?void 0:o.pattern},layoutMode:C,level:m,$nodeChange:j,$changes:G})]}),h&&s.jsxs(s.Fragment,{children:[M&&s.jsx(k,{shift:e,$changesKeys:Q,title:ws,items:L,layoutMode:C,level:m,$nodeChange:j,$changes:x}),S(_==null?void 0:_.multipleOf)&&s.jsx(k,{shift:e,$changesKeys:z,title:Rs,items:{multipleOf:_==null?void 0:_.multipleOf},layoutMode:C,level:m,$nodeChange:j,$changes:G})]}),f&&s.jsxs(s.Fragment,{children:[I&&s.jsx(k,{shift:e,$changesKeys:[],title:bs,items:{additionalPropertyNamePattern:N.key},layoutMode:C,level:m,$nodeChange:j}),T&&(g==null?void 0:g.allowedPropertyNames)&&s.jsx(Ie,{shift:e,$changesKey:"propertyNames",title:Ps,items:g.allowedPropertyNames,layoutMode:C,level:m,$nodeChange:j,$changes:E==null?void 0:E.$changes}),(S(g==null?void 0:g.minProperties)||S(g==null?void 0:g.maxProperties))&&s.jsx(k,{shift:e,$changesKeys:O,title:Os,items:{minProperties:g==null?void 0:g.minProperties,maxProperties:g==null?void 0:g.maxProperties},layoutMode:C,level:m,$nodeChange:j,$changes:G})]}),p&&s.jsxs(s.Fragment,{children:[S(v==null?void 0:v.uniqueItems)&&s.jsx(k,{shift:e,$changesKeys:P,title:js,items:{uniqueItems:`${v.uniqueItems}`},layoutMode:C,level:m,$nodeChange:j,$changes:G}),(S(v==null?void 0:v.minItems)||S(v==null?void 0:v.maxItems))&&s.jsx(k,{shift:e,$changesKeys:ge,title:Ms,items:{minItems:v==null?void 0:v.minItems,maxItems:v==null?void 0:v.maxItems},layoutMode:C,level:m,$nodeChange:j,$changes:G})]})]})};qe.__docgenInfo={description:"",methods:[],displayName:"Validations"};const Fe=a=>{const{state:e,disableNestingHeader:c,onToggleExpander:u,onToggleSort:N,$nodeChange:y}=a,n=e.node,i=oe(),t=e.meta,d=t,E=e.value,m=E,C=Us(),T=fe(),I=Oe(e),[D,h]=R.useState(!1),[p,f]=R.useState(0);R.useEffect(()=>{const g=e.children.filter(je).length===0;(!Ks(n)||e.expanded&&g)&&!n.isCycle?h(!0):h(e.expanded),f(e.sorted)},[n,n.isCycle,e,e.expanded,e.sorted]);const l=!Bs(n),o=!qs(n),_=Me(n);return s.jsxs("div",{className:"flex flex-col",children:[!c&&s.jsx(Be,{nodeTitleData:Fs({node:n,nodeValue:E,nodeMeta:t}),nodeTypeData:Ee({node:n,nodeValue:E}),isCircularRef:n.isCycle,readOnly:t==null?void 0:t.readOnly,writeOnly:t==null?void 0:t.writeOnly,deprecated:t==null?void 0:t.deprecated,isExpandable:I,expanded:e.expanded,sorted:p,isRoot:_,onToggleExpander:u,onToggleSort:N,layoutMode:T,level:i,$changes:m==null?void 0:m.$changes,$metaChanges:d==null?void 0:d.$metaChanges,$nodeChange:y??(d==null?void 0:d.$nodeChange),$nodeChangesSummary:d==null?void 0:d.$nodeChangesSummary}),C&&D&&l&&s.jsx("div",{"data-name":"Body",className:"flex flex-col grow",children:o&&s.jsxs("div",{"data-name":"Content",className:"flex flex-col",children:[s.jsx(Gs,{shift:I&&_,state:e,$nodeChange:y}),s.jsx(qe,{shift:I&&_,state:e,$nodeChange:y})]})})]})};Fe.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeBody"};const Ge=a=>{const{state:e,onGlobalSelectNestedNode:c,$nodeChange:u}=a,N=Hs(),y=oe(),i=e.node.newDataLevel?y+1:y,t=e.node.meta,d=e.nested,[E,m]=R.useState(e.selected),C=f=>{if(f){e.select(f),m(f),c(f);const l=d.find(o=>o.id===f);N==null||N(l)}},T=fe(),I=R.useMemo(()=>{const f={};return d.forEach(l=>{const o=l.value().$changes??{},_=Ee({node:l});_&&(f[l.id]={..._,...Object.keys(o).length?{$changes:o}:{}})}),f},[d]),D=oe()+1,h=d.find(f=>(f==null?void 0:f.id)===E),p=ks(h)?h==null?void 0:h.kind:"";return s.jsx(Ue.Provider,{value:i,children:s.jsx(Js,{nodesTypeData:I,selectedNodeId:E,combiner:p,onSelect:C,layoutMode:T,level:D,$nodeChange:u??(t==null?void 0:t.$nodeChange),$nestedChanges:t==null?void 0:t.$nestedChanges,$nestedChangesSummary:T!==Ws?e.$nestedChangesSummary:void 0})})};Ge.__docgenInfo={description:"",methods:[],displayName:"JsonCombinerNodeViewer"};const He=a=>{const{disableNestingHeader:e,items:c,onGlobalSelectNestedNode:u,$nodeChange:N,nestingIndicatorTitleData:y}=a,n=fe();return s.jsx(s.Fragment,{children:c.map((i,t)=>je(i)?s.jsxs("div",{children:[!e&&y&&i.first&&s.jsx(Ys,{shift:!1,NodeType:we,nodeTypeData:y.nodeTypeData,depth:y.nodeDepth,layoutMode:n,$nodeChange:y.$nodeChange,$changes:y.$changes}),s.jsx(ke,{state:i,$nodeChange:N},`prop-${t}`)]},`prop-${t}`):Ke(i)?s.jsx(Ge,{state:i,onGlobalSelectNestedNode:u,$nodeChange:N},`combiner-${t}`):null)})};He.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeChildren"};const ke=a=>{const{state:e,overriddenKind:c,$nodeChange:u}=a,N=e.node,y=e.value,n=e.children,i=n.filter(L=>!Ke(L)),t=y,d=e.meta,E=Me(N),m=ye(y),C=Pe(y),T=oe(),I=e.node.newDataLevel,D=!E&&I?T+1:T,h=Oe(e),[p,f]=R.useState(!1),[,l]=R.useState(0);R.useEffect(()=>{f(e.expanded),l(e.sorted)},[e.expanded,e.sorted]);const[,o]=R.useState(),_=L=>{L&&(e.setSelected(L),o(e.selected))},[g,v]=R.useState(void 0),X=L=>{if(L){const x=Vs(L);v(x)}},b=u??(d==null?void 0:d.$nodeChange),$=Xs(i),w=c==="parameters"&&E&&(m||C),r=Ee({node:N,nodeValue:y});r==null||delete r.combiner;const F=r?{nodeTypeData:r,nodeDepth:D+1,$nodeChange:b??$,$changes:t==null?void 0:t.$changes}:void 0;return s.jsx(Ue.Provider,{value:D,children:s.jsx(Qs,{value:g,setValue:X,children:s.jsxs("div",{"data-name":"JsonNode",className:"flex flex-col grow",children:[s.jsx(Fe,{state:e,disableNestingHeader:w,onToggleExpander:L=>zs(e,f,L),onToggleSort:()=>Zs(e,l),$nodeChange:b}),h&&p&&s.jsx(He,{disableNestingHeader:w,items:n,onGlobalSelectNestedNode:_,$nodeChange:b,nestingIndicatorTitleData:F})]})})})};ke.__docgenInfo={description:"",methods:[],displayName:"JsonPropNodeViewer"};export{ke as J,et as T,Ge as a};
