import{j as M}from"./jsx-runtime-beaa2906.js";import{a as ln,w as hn,D as pn,s as sn,A as Q,S as dn}from"./ErrorBoundaryFallback-3f4642c0.js";import{g as gn,r as bn}from"./index-f46741a2.js";import{G as vn}from"./GraphQLOperationDiffViewer-58f43414.js";import{b as Y}from"./graph-api-transformers-cf565eec.js";import{e as on,f as On,g as _,h as $,j as X,k as C,l as V,m as jn,n as G,o as E,p as rn,q as qn,r as an,s as Kn,t as xn,v as In,w as Sn,x as H,b as J}from"./buildASTSchema-47c530d1.js";var f;(function(n){n.TYPE_REMOVED="TYPE_REMOVED",n.TYPE_CHANGED_KIND="TYPE_CHANGED_KIND",n.TYPE_REMOVED_FROM_UNION="TYPE_REMOVED_FROM_UNION",n.VALUE_REMOVED_FROM_ENUM="VALUE_REMOVED_FROM_ENUM",n.REQUIRED_INPUT_FIELD_ADDED="REQUIRED_INPUT_FIELD_ADDED",n.IMPLEMENTED_INTERFACE_REMOVED="IMPLEMENTED_INTERFACE_REMOVED",n.FIELD_REMOVED="FIELD_REMOVED",n.FIELD_CHANGED_KIND="FIELD_CHANGED_KIND",n.REQUIRED_ARG_ADDED="REQUIRED_ARG_ADDED",n.ARG_REMOVED="ARG_REMOVED",n.ARG_CHANGED_KIND="ARG_CHANGED_KIND",n.DIRECTIVE_REMOVED="DIRECTIVE_REMOVED",n.DIRECTIVE_ARG_REMOVED="DIRECTIVE_ARG_REMOVED",n.REQUIRED_DIRECTIVE_ARG_ADDED="REQUIRED_DIRECTIVE_ARG_ADDED",n.DIRECTIVE_REPEATABLE_REMOVED="DIRECTIVE_REPEATABLE_REMOVED",n.DIRECTIVE_LOCATION_REMOVED="DIRECTIVE_LOCATION_REMOVED"})(f||(f={}));var g;(function(n){n.VALUE_ADDED_TO_ENUM="VALUE_ADDED_TO_ENUM",n.TYPE_ADDED_TO_UNION="TYPE_ADDED_TO_UNION",n.OPTIONAL_INPUT_FIELD_ADDED="OPTIONAL_INPUT_FIELD_ADDED",n.OPTIONAL_ARG_ADDED="OPTIONAL_ARG_ADDED",n.IMPLEMENTED_INTERFACE_ADDED="IMPLEMENTED_INTERFACE_ADDED",n.ARG_DEFAULT_VALUE_CHANGE="ARG_DEFAULT_VALUE_CHANGE"})(g||(g={}));function Dn(n,t){return mn(n,t).filter(p=>p.type in f)}function Fn(n,t){return mn(n,t).filter(p=>p.type in g)}function mn(n,t){return[...En(n,t),...An(n,t)]}function An(n,t){const p=[],o=q(n.getDirectives(),t.getDirectives());for(const e of o.removed)p.push({type:f.DIRECTIVE_REMOVED,description:`${e.name} was removed.`});for(const[e,s]of o.persisted){const c=q(e.args,s.args);for(const a of c.added)on(a)&&p.push({type:f.REQUIRED_DIRECTIVE_ARG_ADDED,description:`A required arg ${a.name} on directive ${e.name} was added.`});for(const a of c.removed)p.push({type:f.DIRECTIVE_ARG_REMOVED,description:`${a.name} was removed from ${e.name}.`});e.isRepeatable&&!s.isRepeatable&&p.push({type:f.DIRECTIVE_REPEATABLE_REMOVED,description:`Repeatable flag was removed from ${e.name}.`});for(const a of e.locations)s.locations.includes(a)||p.push({type:f.DIRECTIVE_LOCATION_REMOVED,description:`${a} was removed from ${e.name}.`})}return p}function En(n,t){const p=[],o=q(Object.values(n.getTypeMap()),Object.values(t.getTypeMap()));for(const e of o.removed)p.push({type:f.TYPE_REMOVED,description:On(e)?`Standard scalar ${e.name} was removed because it is not referenced anymore.`:`${e.name} was removed.`});for(const[e,s]of o.persisted)_(e)&&_(s)?p.push(...Tn(e,s)):$(e)&&$(s)?p.push(...Pn(e,s)):X(e)&&X(s)?p.push(...Bn(e,s)):C(e)&&C(s)?p.push(...nn(e,s),...Z(e,s)):V(e)&&V(s)?p.push(...nn(e,s),...Z(e,s)):e.constructor!==s.constructor&&p.push({type:f.TYPE_CHANGED_KIND,description:`${e.name} changed from ${en(e)} to ${en(s)}.`});return p}function Bn(n,t){const p=[],o=q(Object.values(n.getFields()),Object.values(t.getFields()));for(const e of o.added)jn(e)?p.push({type:f.REQUIRED_INPUT_FIELD_ADDED,description:`A required field ${e.name} on input type ${n.name} was added.`}):p.push({type:g.OPTIONAL_INPUT_FIELD_ADDED,description:`An optional field ${e.name} on input type ${n.name} was added.`});for(const e of o.removed)p.push({type:f.FIELD_REMOVED,description:`${n.name}.${e.name} was removed.`});for(const[e,s]of o.persisted)L(e.type,s.type)||p.push({type:f.FIELD_CHANGED_KIND,description:`${n.name}.${e.name} changed type from ${String(e.type)} to ${String(s.type)}.`});return p}function Pn(n,t){const p=[],o=q(n.getTypes(),t.getTypes());for(const e of o.added)p.push({type:g.TYPE_ADDED_TO_UNION,description:`${e.name} was added to union type ${n.name}.`});for(const e of o.removed)p.push({type:f.TYPE_REMOVED_FROM_UNION,description:`${e.name} was removed from union type ${n.name}.`});return p}function Tn(n,t){const p=[],o=q(n.getValues(),t.getValues());for(const e of o.added)p.push({type:g.VALUE_ADDED_TO_ENUM,description:`${e.name} was added to enum type ${n.name}.`});for(const e of o.removed)p.push({type:f.VALUE_REMOVED_FROM_ENUM,description:`${e.name} was removed from enum type ${n.name}.`});return p}function Z(n,t){const p=[],o=q(n.getInterfaces(),t.getInterfaces());for(const e of o.added)p.push({type:g.IMPLEMENTED_INTERFACE_ADDED,description:`${e.name} added to interfaces implemented by ${n.name}.`});for(const e of o.removed)p.push({type:f.IMPLEMENTED_INTERFACE_REMOVED,description:`${n.name} no longer implements interface ${e.name}.`});return p}function nn(n,t){const p=[],o=q(Object.values(n.getFields()),Object.values(t.getFields()));for(const e of o.removed)p.push({type:f.FIELD_REMOVED,description:`${n.name}.${e.name} was removed.`});for(const[e,s]of o.persisted)p.push(...Ln(n,e,s)),T(e.type,s.type)||p.push({type:f.FIELD_CHANGED_KIND,description:`${n.name}.${e.name} changed type from ${String(e.type)} to ${String(s.type)}.`});return p}function Ln(n,t,p){const o=[],e=q(t.args,p.args);for(const s of e.removed)o.push({type:f.ARG_REMOVED,description:`${n.name}.${t.name} arg ${s.name} was removed.`});for(const[s,c]of e.persisted)if(!L(s.type,c.type))o.push({type:f.ARG_CHANGED_KIND,description:`${n.name}.${t.name} arg ${s.name} has changed type from ${String(s.type)} to ${String(c.type)}.`});else if(s.defaultValue!==void 0)if(c.defaultValue===void 0)o.push({type:g.ARG_DEFAULT_VALUE_CHANGE,description:`${n.name}.${t.name} arg ${s.name} defaultValue was removed.`});else{const u=tn(s.defaultValue,s.type),d=tn(c.defaultValue,c.type);u!==d&&o.push({type:g.ARG_DEFAULT_VALUE_CHANGE,description:`${n.name}.${t.name} arg ${s.name} has changed defaultValue from ${u} to ${d}.`})}for(const s of e.added)on(s)?o.push({type:f.REQUIRED_ARG_ADDED,description:`A required arg ${s.name} on ${n.name}.${t.name} was added.`}):o.push({type:g.OPTIONAL_ARG_ADDED,description:`An optional arg ${s.name} on ${n.name}.${t.name} was added.`});return o}function T(n,t){return G(n)?G(t)&&T(n.ofType,t.ofType)||E(t)&&T(n,t.ofType):E(n)?E(t)&&T(n.ofType,t.ofType):rn(t)&&n.name===t.name||E(t)&&T(n,t.ofType)}function L(n,t){return G(n)?G(t)&&L(n.ofType,t.ofType):E(n)?E(t)&&L(n.ofType,t.ofType)||!E(t)&&L(n.ofType,t):rn(t)&&n.name===t.name}function en(n){if(qn(n))return"a Scalar type";if(C(n))return"an Object type";if(V(n))return"an Interface type";if($(n))return"a Union type";if(_(n))return"an Enum type";if(X(n))return"an Input type";an(!1,"Unexpected type: "+Kn(n))}function tn(n,t){const p=xn(n,t);return p!=null||an(!1),In(Sn(p))}function q(n,t){const p=[],o=[],e=[],s=H(n,({name:a})=>a),c=H(t,({name:a})=>a);for(const a of n){const u=c[a.name];u===void 0?o.push(a):e.push([a,u])}for(const a of t)s[a.name]===void 0&&p.push(a);return{added:p,persisted:e,removed:o}}var cn={exports:{}};(function(n){(function(){function t(r,m){document.addEventListener?r.addEventListener("scroll",m,!1):r.attachEvent("scroll",m)}function p(r){document.body?r():document.addEventListener?document.addEventListener("DOMContentLoaded",function m(){document.removeEventListener("DOMContentLoaded",m),r()}):document.attachEvent("onreadystatechange",function m(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",m),r())})}function o(r){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(r)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function e(r,m){r.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+m+";"}function s(r){var m=r.g.offsetWidth,i=m+100;return r.j.style.width=i+"px",r.i.scrollLeft=i,r.h.scrollLeft=r.h.scrollWidth+100,r.l!==m?(r.l=m,!0):!1}function c(r,m){function i(){var l=K;s(l)&&l.g.parentNode!==null&&m(l.l)}var K=r;t(r.h,i),t(r.i,i),s(r)}function a(r,m,i){m=m||{},i=i||window,this.family=r,this.style=m.style||"normal",this.weight=m.weight||"normal",this.stretch=m.stretch||"normal",this.context=i}var u=null,d=null,P=null,I=null;function fn(r){return d===null&&(k(r)&&/Apple/.test(window.navigator.vendor)?(r=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),d=!!r&&603>parseInt(r[1],10)):d=!1),d}function k(r){return I===null&&(I=!!r.document.fonts),I}function S(r,m){var i=r.style,K=r.weight;if(P===null){var l=document.createElement("div");try{l.style.font="condensed 100px sans-serif"}catch{}P=l.style.font!==""}return[i,K,P?r.stretch:"","100px",m].join(" ")}a.prototype.load=function(r,m){var i=this,K=r||"BESbswy",l=0,D=m||3e3,U=new Date().getTime();return new Promise(function(W,z){if(k(i.context)&&!fn(i.context)){var yn=new Promise(function(F,A){function b(){new Date().getTime()-U>=D?A(Error(""+D+"ms timeout exceeded")):i.context.document.fonts.load(S(i,'"'+i.family+'"'),K).then(function(x){1<=x.length?F():setTimeout(b,25)},A)}b()}),un=new Promise(function(F,A){l=setTimeout(function(){A(Error(""+D+"ms timeout exceeded"))},D)});Promise.race([un,yn]).then(function(){clearTimeout(l),W(i)},z)}else p(function(){function F(){var y;(y=v!=-1&&O!=-1||v!=-1&&j!=-1||O!=-1&&j!=-1)&&((y=v!=O&&v!=j&&O!=j)||(u===null&&(y=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),u=!!y&&(536>parseInt(y[1],10)||parseInt(y[1],10)===536&&11>=parseInt(y[2],10))),y=u&&(v==R&&O==R&&j==R||v==N&&O==N&&j==N||v==w&&O==w&&j==w)),y=!y),y&&(h.parentNode!==null&&h.parentNode.removeChild(h),clearTimeout(l),W(i))}function A(){if(new Date().getTime()-U>=D)h.parentNode!==null&&h.parentNode.removeChild(h),z(Error(""+D+"ms timeout exceeded"));else{var y=i.context.document.hidden;(y===!0||y===void 0)&&(v=b.g.offsetWidth,O=x.g.offsetWidth,j=B.g.offsetWidth,F()),l=setTimeout(A,50)}}var b=new o(K),x=new o(K),B=new o(K),v=-1,O=-1,j=-1,R=-1,N=-1,w=-1,h=document.createElement("div");h.dir="ltr",e(b,S(i,"sans-serif")),e(x,S(i,"serif")),e(B,S(i,"monospace")),h.appendChild(b.g),h.appendChild(x.g),h.appendChild(B.g),i.context.document.body.appendChild(h),R=b.g.offsetWidth,N=x.g.offsetWidth,w=B.g.offsetWidth,A(),c(b,function(y){v=y,F()}),e(b,S(i,'"'+i.family+'",sans-serif')),c(x,function(y){O=y,F()}),e(x,S(i,'"'+i.family+'",serif')),c(B,function(y){j=y,F()}),e(B,S(i,'"'+i.family+'",monospace'))})})},n.exports=a})()})(cn);var Rn=cn.exports;const Nn=gn(Rn),Jn="graphql";function wn(n,t,p){const o=`${n}/${t}/${p}`,e=Qn.get(o);return e?[e.before,e.after]:["",""]}const Qn=new Map([["graphql/directives/add-argument-default-value-for-schema-directive",{before:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/add-argument-default-value-of-executable-directive-with-no-usage",{before:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 0) on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/add-argument-default-value-of-schema-directive-with-no-usage",{before:`directive @limit(offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/add-argument-for-executable-directive-with-no-usage",{before:`directive @limit on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}
`}],["graphql/directives/add-argument-for-schema-directive",{before:`directive @limit on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/add-argument-for-schema-directive-with-no-usage",{before:`directive @mock on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`,after:`directive @mock(value: JSON) on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`}],["graphql/directives/add-default-deprecated-directive-for-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana
}`}],["graphql/directives/add-default-deprecated-directive-for-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated
}`}],["graphql/directives/add-deprecated-directive-with-reason-for-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated (reason: "No longer supported")
  banana
}`}],["graphql/directives/add-deprecated-directive-with-reason-for-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "No longer supported")
} `}],["graphql/directives/add-executable-directive-with-no-usage",{before:`type Query {
  fruits: [String]
}`,after:`directive @limit on FIELD

type Query {
  fruits: [String]
}`}],["graphql/directives/add-executable-location-to-directive",{before:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION",after:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION | FIELD"}],["graphql/directives/add-new-schema-location-to-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 0) on FIELD_DEFINITION | ENUM_VALUE

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/add-reason-for-deprecated-directive",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana
}`,after:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "Use Huawei instead")
    banana
}
`}],["graphql/directives/add-reason-of-deprecated-directive-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "Use Huawei instead")
}`}],["graphql/directives/add-schema-directive-with-no-usage",{before:`type Query {
  fruits: [String]
}`,after:`directive @mock on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/apply-schema-directive-to-argument-definition",{before:`directive @sort on ARGUMENT_DEFINITION

type Query {
  fruits(id: ID): [String]
}`,after:`directive @sort on ARGUMENT_DEFINITION

type Query {
  fruits(id: ID @sort): [String]
}
`}],["graphql/directives/apply-schema-directive-to-enum",{before:`directive @sort on ENUM

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`,after:`directive @sort on ENUM

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season @sort{
  FALL
  WINTER
  SPRING
}`}],["graphql/directives/apply-schema-directive-to-enum-value",{before:`directive @sort on ENUM_VALUE

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`,after:`directive @sort on ENUM_VALUE

type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL @sort
  WINTER
  SPRING
}`}],["graphql/directives/apply-schema-directive-to-field-definition",{before:`directive @sort on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID
  name: String
}`,after:`directive @sort on FIELD_DEFINITION
type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @sort
  name: String
}`}],["graphql/directives/apply-schema-directive-to-input-field-definition",{before:`directive @sort on INPUT_FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

input Fruit {
  id: ID
  name: String
} `,after:`directive @sort on INPUT_FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

input Fruit {
  id: ID @sort
  name: String
} `}],["graphql/directives/apply-schema-directive-to-input-object",{before:`directive @sort on INPUT_OBJECT

type Query {
  fruits(in: Fruit): String
}

input Fruit {
  id: ID
  name: String
} `,after:`directive @sort on INPUT_OBJECT

type Query {
  fruits(in: Fruit): String
}

input Fruit @sort {
  id: ID
  name: String
} `}],["graphql/directives/apply-schema-directive-to-interface",{before:`directive @sort on INTERFACE

type Query {
  fruits: [Fruit]
}

interface Fruit {
  id: ID
  name: String
}`,after:`directive @sort on INTERFACE

type Query {
  fruits: [Fruit]
}  

interface Fruit @sort {
  id: ID
  name: String
}`}],["graphql/directives/apply-schema-directive-to-object",{before:`directive @sort on OBJECT

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID
  name: String
}`,after:`directive @sort on OBJECT

type Query {
  fruits: [Fruit]
}

type Fruit @sort {
  id: ID
  name: String
}`}],["graphql/directives/apply-schema-directive-to-scalar",{before:`type Query {
  fruitsNumber: Count
}

scalar Count `,after:`directive @multipleOf on SCALAR

type Query {
  fruitsNumber: Count
}

scalar Count @multipleOf`}],["graphql/directives/apply-schema-directive-to-union",{before:`directive @sort on UNION 

type Apple {
  name: String
  variety: String
}

type Banana {
  name: String
  length: Int
}

union Fruit = Apple | Banana

type Query {
  fruits: [Fruit]
}
 `,after:`directive @sort on UNION 

type Apple {
  name: String
  variety: String
}

type Banana {
  name: String
  length: Int
}

union Fruit @sort = Apple | Banana

type Query {
  fruits: [Fruit]
}`}],["graphql/directives/delete-argument-default-value-for-schema-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/delete-argument-default-value-of-executable-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-argument-default-value-of-schema-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-argument-for-schema-directive",{before:`directive @limit (offset: Int) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/delete-argument-for-schema-directive-with-no-usage",{before:`directive @mock(value: JSON) on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`,after:`directive @mock on FIELD_DEFINITION

scalar JSON

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-argument-in-executable-directive-with-no-usage",{before:`directive @limit(offset: Int) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/delete-executable-directive-with-no-usage",{before:`directive @limit on FIELD 

type Query {
  fruits: [String]
}`,after:`type Query {
  fruits: [String]
}`}],["graphql/directives/delete-executable-location-to-directive",{before:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION | FIELD",after:"directive @limit (offset: Int = 0) on FRAGMENT_DEFINITION"}],["graphql/directives/delete-schema-directive-with-no-usage",{before:`directive @mock on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`type Query {
  fruits: [String]
}`}],["graphql/directives/delete-schema-location-in-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION | ENUM_VALUE

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/remove-default-deprecated-directive-for-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/directives/remove-deprecated-directive-from-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`}],["graphql/directives/remove-deprecated-directive-with-reason-from-enum-value",{before:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated (reason: "No longer supported")
  banana
}`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple
  banana
}`}],["graphql/directives/remove-deprecated-directive-with-reason-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "No longer supported")
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/directives/remove-reason-for-deprecated-directive",{before:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "No longer supported")
    banana @deprecated (reason: "Not fresh")
}
`,after:`type Query {
  fruits: [FruitType]
}
enum FruitType {
  apple @deprecated
  banana @deprecated
}`}],["graphql/directives/remove-reason-of-deprecated-directive-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID @deprecated (reason: "No longer supported")
  name: String @deprecated (reason: "Do not use")
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID @deprecated
  name: String @deprecated
}`}],["graphql/directives/update-argument-default-value-for-schema-directive",{before:`directive @limit (offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`,after:`directive @limit (offset: Int = 1) on FIELD_DEFINITION

type Query {
  fruits: [Fruit]
}

type Fruit {
  id: ID @limit
  name: String
}`}],["graphql/directives/update-argument-default-value-of-executable-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD 

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 1) on FIELD 

type Query {
  fruits: [String]
}`}],["graphql/directives/update-argument-default-value-of-schema-directive-with-no-usage",{before:`directive @limit(offset: Int = 0) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`,after:`directive @limit(offset: Int = 1) on FIELD_DEFINITION

type Query {
  fruits: [String]
}`}],["graphql/directives/update-reason-for-deprecated-directive",{before:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "No longer supported")
    banana
}
`,after:`type Query {
    fruits: [FruitType]
}
enum FruitType {
    apple @deprecated (reason: "was deleted")
    banana
}
`}],["graphql/directives/update-reason-for-deprecated-directive-in-field-definition",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "Do not use")
} `,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String @deprecated (reason: "It shall not be used")
} `}],["graphql/input-type-argument-of-root-type/add-description-for-field-of-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  """
  The content of the message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/add-enum-value-of-field-in-input-type-argument",{before:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
  video
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/add-input-type-argument",{before:`type Mutation {
  createMessage: String
}
 
`,after:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/add-new-field-in-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String
  author: String
  likes: Int
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/change-type-of-field-in-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
  createTimestamp: String
}
type Mutation {
  createMessage(input: MessageInput): String
}
`,after:`input MessageInput {
  content: String
  author: String
    createTimestamp: Int
}
type Mutation {
  createMessage(input: MessageInput): String
}
`}],["graphql/input-type-argument-of-root-type/delete-description-for-field-of-input-type-argument",{before:`input MessageInput {
  """
  The content of the message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/mark-mandatory-field-of-input-type-argument-as-optional",{before:`input MessageInput {
  content: String!
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/mark-optional-field-of-input-type-argument-as-mandatory",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String!
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/remove-enum-value-of-field-in-input-type-argument",{before:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
  video
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  content: Content
  author: String
  createTimestamp: String
}
enum Content {
  text
  image
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/input-type-argument-of-root-type/remove-field-from-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
  likes: Int
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`input MessageInput {
  content: String
  likes: Int
}
type Mutation {
  createMessage(input: MessageInput): String
} `}],["graphql/input-type-argument-of-root-type/remove-input-type-argument",{before:`input MessageInput {
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
} `,after:`type Mutation {
  createMessage: String
}
`}],["graphql/input-type-argument-of-root-type/update-description-for-field-of-input-type-argument",{before:`input MessageInput {
  """
  The content of the message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`,after:`input MessageInput {
  """
  Details of message.
  """
  content: String
  author: String
}
type Mutation {
  createMessage(input: MessageInput): String
}`}],["graphql/interface-output-type-of-root-type/add-description-for-field-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}
`}],["graphql/interface-output-type-of-root-type/add-description-for-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/add-enum-value-of-field-in-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`}],["graphql/interface-output-type-of-root-type/add-new-field-in-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/change-field-type-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: Int
  name: String
}`}],["graphql/interface-output-type-of-root-type/delete-description-for-field-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit { 
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/delete-description-of-output-interface",{before:`type Query {
  fruits: Fruit
}
  """Fruit object details"""
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/mark-mandatory-field-of-output-interface-as-optional",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID!
  name: String
}
`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/mark-optional-field-of-output-interface-as-mandatory",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID!
  name: String
}`}],["graphql/interface-output-type-of-root-type/remove-enum-value-of-field-in-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`}],["graphql/interface-output-type-of-root-type/remove-field-from-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  id: ID
}`}],["graphql/interface-output-type-of-root-type/update-description-for-field-of-output-interface",{before:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
interface Fruit {
  """ 
  fruit id
  """
  id: ID
  name: String
}`}],["graphql/interface-output-type-of-root-type/update-description-of-output-interface",{before:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
interface Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit fields"""
interface Fruit {
  id: ID
  name: String
}
`}],["graphql/object-output-type-of-root-type/add-description-for-field-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}
`}],["graphql/object-output-type-of-root-type/add-description-for-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/add-enum-value-of-field-in-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`}],["graphql/object-output-type-of-root-type/add-new-field-in-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/change-field-type-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: Int
  name: String
}`}],["graphql/object-output-type-of-root-type/delete-description-for-field-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit { 
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/delete-description-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
  """Fruit object details"""
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/mark-mandatory-field-of-output-object-type-as-optional",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID!
  name: String
}
`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/mark-optional-field-of-output-object-type-as-mandatory",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID!
  name: String
}`}],["graphql/object-output-type-of-root-type/remove-enum-value-of-field-in-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
  banana
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
  type: FruitType
}
enum FruitType {
  apple
}`}],["graphql/object-output-type-of-root-type/remove-field-from-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  id: ID
}`}],["graphql/object-output-type-of-root-type/update-description-for-field-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  Unique identifier of fruit
  """
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
type Fruit {
  """ 
  fruit id
  """
  id: ID
  name: String
}`}],["graphql/object-output-type-of-root-type/update-description-of-output-object-type",{before:`type Query {
  fruits: Fruit
}
"""Fruit object details"""
type Fruit {
  id: ID
  name: String
}`,after:`type Query {
  fruits: Fruit
}
"""Fruit fields"""
type Fruit {
  id: ID
  name: String
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-description-for-field-of-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
""" Unique ID of the Fruit."""
  id: ID
""" Name of the Fruit."""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-description-for-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`""" Common properties"""
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-interface-for-object-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Animal {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/add-new-field-in-interface-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/change-field-type-of-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: Int
  name: String
  color: String
}
type Apple implements Fruit {
  id: Int
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/change-interface-for-object-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Animal {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Animal {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Fruit {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/delete-description-for-field-of-interface-type",{before:`interface Fruit {
""" Unique ID of the Fruit."""
  id: ID
""" Name of the Fruit."""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name of the Apple."""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/delete-description-for-interface-type",{before:`""" Common properties""" 
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/delete-interface-for-object-type",{before:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat implements Animal {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple {
  id: ID
  name: String
  color: String
}
interface Animal {
  id: ID
  name: String
}
type Cat {
  id: ID
  name: String
  color: String
}
type Query {
  apples: [Apple]
  animals: [Animal]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/mark-mandatory-field-of-interface-type-as-optional",{before:`interface Fruit {
  id: ID!
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID!
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/mark-optional-field-of-interface-type-as-mandatory",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`,after:`interface Fruit {
  id: ID!
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID!
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/remove-field-from-interface-type",{before:`interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`interface Fruit {
  id: ID
  name: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/object-output-type-of-root-type-that-implements-interface/update-description-for-field-of-interface-type",{before:`interface Fruit {
""" Unique ID of the Fruit."""
  id: ID
""" Name of the Fruit."""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name"""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`,after:`interface Fruit {
""" Fruit ID"""
  id: ID
""" Name"""  
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
""" Name"""  
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}
`}],["graphql/object-output-type-of-root-type-that-implements-interface/update-description-for-interface-type",{before:`""" Common properties""" 
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`,after:`""" Fruit Interface properties""" 
interface Fruit {
  id: ID
  name: String
  color: String
}
type Apple implements Fruit {
  id: ID
  name: String
  color: String
  variety: String
}
type Query {
  fruits: [Apple]
}`}],["graphql/root-type-general/add-description-for-root-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  """
  The root query for fetching fruit data
  """
  fruits: String
}
`}],["graphql/root-type-general/add-new-root-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: String
    fruitsByColor: String
}
`}],["graphql/root-type-general/change-description-for-root-type",{before:`type Query {
  """
  The root query for fetching fruit data
  """
  fruits: String
}
`,after:`type Query {
  """
  fruit data
  """
  fruits: String
}
`}],["graphql/root-type-general/delete-description-for-root-type",{before:`type Query {
  """
  The root query for fetching fruit data
  """
  fruits: String
}
`,after:`type Query {
  fruits: String
}`}],["graphql/root-type-general/delete-root-type",{before:`type Query {
  fruits: String
    fruitsByColor: String
}
`,after:`type Query {
  fruits: String
}`}],["graphql/scalar-output-type-of-root-type/add-description-for-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  fruit apple
  """
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/add-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/add-list-type-for-output-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: [String]
}`}],["graphql/scalar-output-type-of-root-type/change-description-for-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  representing fruit apple
  """
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  fruit details of apple
  """
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/change-output-type",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: Int
}`}],["graphql/scalar-output-type-of-root-type/delete-description-for-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  """
  representing fruit apple
  """
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`}],["graphql/scalar-output-type-of-root-type/mark-mandatory-output-type-as-optional",{before:`type Query {
  fruits: String!
}`,after:`type Query {
  fruits: String
}`}],["graphql/scalar-output-type-of-root-type/mark-optional-output-type-as-mandatory",{before:`type Query {
  fruits: String
}`,after:`type Query {
  fruits: String!
}`}],["graphql/scalar-output-type-of-root-type/remove-enum-value-in-output-type",{before:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
  orange
}`,after:`type Query {
  fruits: Fruit
}
enum Fruit {
  apple
  mango
}`}],["graphql/scalar-type-argument-of-root-type/add-default-value-of-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: ID = "F4"): String
}`}],["graphql/scalar-type-argument-of-root-type/add-default-value-of-required-argument",{before:`type Query {
  fruits(id: ID!): String
}`,after:`type Query {
  fruits(id: ID! = "F4"): String
}
`}],["graphql/scalar-type-argument-of-root-type/add-description-for-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(
  """
  Unique identifier of fruit.
  """ 
  id: ID): String
}
`}],["graphql/scalar-type-argument-of-root-type/add-description-for-enum-type",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
enum representing different seasons.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`}],["graphql/scalar-type-argument-of-root-type/add-description-for-enum-value",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Represents Fall season.
  """
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/add-enum-value-in-enum-argument",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
  SUMMER
}`}],["graphql/scalar-type-argument-of-root-type/add-optional-argument",{before:`type Query {
  fruits: String
}
`,after:`type Query {
  fruits(id: ID): String
}
`}],["graphql/scalar-type-argument-of-root-type/add-second-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: ID, hasEdibleSeeds: Boolean): String
}`}],["graphql/scalar-type-argument-of-root-type/change-default-value-of-argument",{before:`type Query {
  fruits(id: ID = "F4"): String
}`,after:`type Query {
  fruits(id: ID = "F8"): String
}`}],["graphql/scalar-type-argument-of-root-type/change-default-value-of-required-argument",{before:`type Query {
  fruits(id: ID! = "F4"): String
}`,after:`type Query {
  fruits(id: ID! = "F8"): String
}
`}],["graphql/scalar-type-argument-of-root-type/change-description-for-enum-type",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
enum representing different seasons.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
different season values.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`}],["graphql/scalar-type-argument-of-root-type/change-description-for-enum-value",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Represents Fall season.
  """
  FALL
  WINTER
  SPRING
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Fall season.
  """
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/change-type-of-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: Int): String
}
`}],["graphql/scalar-type-argument-of-root-type/delete-description-for-enum-type",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
"""
enum representing different seasons.
"""
enum Season {
  FALL
  WINTER
  SPRING
}
`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}
`}],["graphql/scalar-type-argument-of-root-type/delete-description-for-enum-value",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  """
  Represents Fall season.
  """
  FALL
  WINTER
  SPRING
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season {
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/delete-description-of-argument",{before:`type Query {
  fruits(
  """
  Unique identifier of fruit.
  """ 
  id: ID): String
}
`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/mark-mandatory-argument-as-optional",{before:`type Query {
  fruits(id: ID!): String
}`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/mark-optional-argument-as-mandatory",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits(id: ID!): String
}`}],["graphql/scalar-type-argument-of-root-type/remove-argument",{before:`type Query {
  fruits(id: ID): String
}`,after:`type Query {
  fruits: String
}`}],["graphql/scalar-type-argument-of-root-type/remove-default-value-of-argument",{before:`type Query {
  fruits(id: ID = "F4"): String
}`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/remove-default-value-of-required-argument",{before:`type Query {
  fruits(id: ID! = "F4"): String
}`,after:`type Query {
  fruits(id: ID!): String
}
`}],["graphql/scalar-type-argument-of-root-type/remove-enum-value-in-enum-argument",{before:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season { 
  FALL
  WINTER
  SPRING
  SUMMER
}`,after:`type Query {
  fruits(seasonWhenRipe: Season): String
}
enum Season { 
  FALL
  WINTER
  SPRING
}`}],["graphql/scalar-type-argument-of-root-type/remove-one-argument",{before:`type Query {
  fruits(id: ID, hasEdibleSeeds: Boolean): String
}`,after:`type Query {
  fruits(id: ID): String
}`}],["graphql/scalar-type-argument-of-root-type/update-description-of-argument",{before:`type Query {
  fruits(
  """
  Unique identifier of fruit.
  """ 
  id: ID): String
}
`,after:`type Query {
  fruits(
  """
  Unique id of fruit.
  """ 
  id: ID): String
}
`}],["graphql/union-output-type-of-root-type/add-field-description-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
"""
The unique identifier for the Apple.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/add-new-field-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
  origin: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/add-object-type-in-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Grapes | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/change-field-type-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: Int
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/change-object-type-in-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Grapes | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/delete-field-description-in-object-type-from-union-type",{before:`type Apple {
"""
The unique identifier for the Apple.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/mark-mandatory-field-as-optional-in-object-type-from-union-type",{before:`type Apple {
  id: ID!
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/mark-optional-field-as-mandatory-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID!
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/remove-field-in-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
  origin: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/remove-object-type-from-union-type",{before:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana | Grapes
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
type Grapes {
  id: ID
  name: String
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["graphql/union-output-type-of-root-type/update-field-description-in-object-type-from-union-type",{before:`type Apple {
"""
The unique identifier for the Apple.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`,after:`type Apple {
"""
The Apple ID.
"""
  id: ID
  name: String
  color: String
  variety: String
}
type Banana {
  id: ID
  name: String
  color: String
  length: Int
}
union Fruit = Apple | Banana
type Query {
  fruits: [Fruit]
}`}],["openapi/general-operation-parameters/add-alternative-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
        - ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/add-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: false
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-custom-property-in-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v2-release"
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-custom-property-in-security-schemes",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: high
`}],["openapi/general-operation-parameters/add-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-description-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-mandatory-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
          ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/add-new-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
    post:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-new-object-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-new-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }

  /path2:
    get:
      responses:
        '200':
          description: OK
          content: { }

`}],["openapi/general-operation-parameters/add-objects-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
        release: 2022.1
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/add-operation-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a description.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-operationId-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: someGetOperation
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-scope-for-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - read_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`}],["openapi/general-operation-parameters/add-security-with-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - basicAuth: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
`}],["openapi/general-operation-parameters/add-server-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-server-url",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-server-variable-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-tag",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
tags:
  - name: tag1
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
tags:
  - name: tag1
paths:
  /path1:
    get:
      tags:
        - tag1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-variable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/add-variable-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-alternative-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
        - ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/remove-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: false
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/remove-custom-property-in-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v2-release"
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/remove-custom-property-in-security-schemes",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: high
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/remove-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-description-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-mandatory-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
          ApiKeyAuth2: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
    ApiKeyAuth2:
      type: apiKey
      in: header
      name: X-API-KEY
`}],["openapi/general-operation-parameters/remove-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
    post:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-objects-custom-property-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
        release: 2022.1
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/remove-operation-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a description.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-operationId-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: someGetOperation
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }

  /path2:
    get:
      responses:
        '200':
          description: OK
          content: { }

`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-scope-for-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - write_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`}],["openapi/general-operation-parameters/remove-security-with-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - BasicAuth: [ ]
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
`}],["openapi/general-operation-parameters/remove-server-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-server-url",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-server-variable-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-tag",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
tags:
  - name: tag1
paths:
  /path1:
    get:
      tags:
        - tag1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-variable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/remove-variable-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
                - "some-name-2"
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-custom-property-value-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: false
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use: true
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-custom-property-value-in-path",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v2-release"
    get:
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    x-feature-flag: "v3-release"
    get:
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-custom-property-value-in-security-schemes",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: medium
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      security:
        - ApiKeyAuth1: [ ]
      responses:
        '200':
          description: OK
components:
  securitySchemes:
    ApiKeyAuth1:
      type: apiKey
      in: header
      name: X-API-KEY
      x-security-level: high
`}],["openapi/general-operation-parameters/update-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      deprecated: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-description-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: NEW External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-objects-custom-property-value-in-operation",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: no usages
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      x-internal-use-reason:
        reason: internal
      responses:
        '200':
          description: OK
`}],["openapi/general-operation-parameters/update-operation-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a description.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      description: It is a NEW description.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-operation-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a summary
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      summary: It is a NEW summary
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-operationId-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: someGetOperation
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      operationId: newGetOperation
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-scope-for-authentication-method",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - write_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      security:
        - oAuthSample:
            - read_pets
      responses:
        '200':
          description: OK
          content: { }
components:
  securitySchemes:
    oAuthSample:
      type: oauth2
      description: This API uses OAuth 2 with the implicit grant flow.
      flows:
        implicit:
          authorizationUrl: https://api.example.com/oauth2/authorize
          scopes:
            read_pets: read your pets
            write_pets: modify pets in your account
`}],["openapi/general-operation-parameters/update-server-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a description of server
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
          description: It is a  NEW  description of server
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-server-url",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://new-example.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-server-variable-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
              description: It is a description  NEW  value of username variable.
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-url-of-operation-external-doc",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://example.com
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      externalDocs:
        description: External Docs
        url: https://clientdomain.com
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-variable-default-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: new-default-name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/general-operation-parameters/update-variable-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
                - "some-name-2"
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      servers:
        - url: https://{username}.example.com
          description: It is a description of server
          variables:
            username:
              default: some-name-1
              enum:
                - "some-name-1"
                - "some-name-2"
                - "some-name-3"
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/human-readable/encoding-object-allow-reserved",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                allowReserved: true
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                allowReserved: false
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-content-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png, image/jpeg
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-encoding",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-explode",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                explode: true
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                explode: false
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-headers",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png
                headers:
                  X-Rate-Limit-Limit:
                    description: The number of allowed requests in the current period
                    schema:
                      type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                profileImage: {}
            encoding:
              profileImage:
                contentType: image/png
                headers:
                  X-Rate-Limit-Limit:
                    description: The number of allowed requests in the current period
                    schema:
                      type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/encoding-object-style",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
                style: form
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                historyMetadata:
                  type: object
                  properties: {}
            encoding:
              historyMetadata:
                contentType: application/xml; charset=utf-8
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              description: Example for minimum value
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      description: Example for minimum value
      value: 0
      summary: Offset value
`}],["openapi/human-readable/examples-object-examples-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: A sample offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-examples-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: A sample offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`}],["openapi/human-readable/examples-object-external-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
              externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-external-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
      externalValue: 'https://example.org/examples/address-example.xml'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`}],["openapi/human-readable/examples-object-summary-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: A sample offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-summary-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: A sample offset value
`}],["openapi/human-readable/examples-object-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 0
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value: 1
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-value-object-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value:
                prop1:
                  prop11: value0
                prop2: value2
              summary: Offset value
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          examples:
            one:
              value:
                prop1:
                  prop11: value1
                prop2: value2
              summary: Offset value
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/examples-object-value-object-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value:
        prop1:
          prop11:  value0
        prop2: value2
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value:
        prop1:
          prop11:  value1
        prop2: value2
      summary: Offset value
`}],["openapi/human-readable/examples-object-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 0
      summary: Offset value
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
      examples:
        one:
          $ref: '#/components/examples/zero'
  examples:
    zero:
      value: 1
      summary: Offset value
`}],["openapi/human-readable/header-object-allow-empty-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              allowEmptyValue: true
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-allow-empty-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      allowEmptyValue: true
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/header-object-allow-reserved-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              allowReserved: true
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              allowReserved: false
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-allow-reserved-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      allowReserved: true
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      allowReserved: false
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-deprecated-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              deprecated: true
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              deprecated: false
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-deprecated-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      deprecated: true
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      deprecated: false
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/header-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              description: Request limit
              schema:
                type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              description: The number of allowed requests in the current period
              schema:
                type: integer
`}],["openapi/human-readable/header-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      description: Request limit
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      description: The number of allowed requests in the current period
      schema:
        type: integer
`}],["openapi/human-readable/header-object-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example:
                prop1:
                  prop11: value1
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example:
                prop1:
                  prop11: value2
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example:
        prop1:
          prop11: value1
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example:
        prop1:
          prop11: value2
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example: abc
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              example: bcd
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example: abc
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      example: bcd
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-explode-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              explode: true
              schema:
                type: array
                items:
                  type: string
`}],["openapi/human-readable/header-object-explode-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      explode: true
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/header-object-header-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              description: Request limit
              schema:
                type: integer
`}],["openapi/human-readable/header-object-header-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      description: Request limit
      schema:
        type: integer
`}],["openapi/human-readable/header-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              required: false
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              required: true
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      required: false
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      required: true
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/header-object-style-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              style: simple
              schema:
                type: integer
                description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              style: form
              schema:
                type: integer
                description: Request limit
`}],["openapi/human-readable/header-object-style-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      style: simple
      schema:
        type: integer
        description: Request limit
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
          headers:
            XRateLimit:
              $ref: '#/components/headers/X-Rate-Limit'
components:
  headers:
    X-Rate-Limit:
      style: form
      schema:
        type: integer
        description: Request limit
`}],["openapi/human-readable/parameter-object-allow-empty-value-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          allowEmptyValue: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-allow-empty-value-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      allowEmptyValue: true
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-allow-reserved-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset
          schema:
            type: integer
            minimum: 0
        - in: header
          name: offset2
          allowReserved: false
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset
          allowReserved: true
          schema:
            type: integer
            minimum: 0
        - in: header
          name: offset2
          allowReserved: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-allow-reserved-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset
      allowReserved: true
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-deprecated-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          deprecated: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-deprecated-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      deprecated: true
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          description: abc
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      description: abc
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example:
            prop1: test
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example:
            prop1: test2
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example:
        prop1: test
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example:
        prop1: test2
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example: 1
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          example: 2
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example: 1
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      example: 2
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-explode-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-explode-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      explode: false
      schema:
        type: array
        items:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      explode: true
      schema:
        type: array
        items:
          type: string
`}],["openapi/human-readable/parameter-object-in-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-in-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-name-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: header
          name: offset2
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-name-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: header
      name: offset2
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-parameter-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
        - in: query
          name: limit
          required: false
          schema:
            type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-parameter-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
        - $ref: '#/components/parameters/limitParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
    limitParam:
      in: query
      name: limit
      required: false
      schema:
        type: integer
`}],["openapi/human-readable/parameter-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          required: true
          schema:
            type: integer
            minimum: 0
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        minimum: 0
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      required: true
      schema:
        type: integer
        minimum: 0
`}],["openapi/human-readable/parameter-object-style-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          style: form
          schema:
            type: integer
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          style: simple
          schema:
            type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/parameter-object-style-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      style: form
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      style: simple
      schema:
        type: integer
`}],["openapi/human-readable/request-body-object-content-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example:
              prop1: value1
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example:
              prop1: value2
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-content-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example:
            prop1: value1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example:
            prop1: value2
`}],["openapi/human-readable/request-body-object-content-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example: abc
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: object
              properties:
                prop1:
                  type: string
                prop2:
                  type: string
            example: cba
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-content-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example: abc
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: string
          example: cba
`}],["openapi/human-readable/request-body-object-content-media-type-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
          application/xml:
            schema:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-content-media-type-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
        application/xml:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/request-body-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: A JSON object containing pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: A JSON object containing pet information
      content:
        application/json:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/request-body-object-request-body-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: A JSON object containing pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-request-body-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: A JSON object containing pet information
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/request-body-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        required: true
        content:
          application/json:
            schema:
              type: string

      responses:
        '200':
          description: OK
`}],["openapi/human-readable/request-body-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      content:
        application/json:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        $ref: '#/components/requestBodies/PetBody'
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      description: Pet information
      required: true
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/response-object-content-example-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example:
                prop1:
                  prop11: value1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example:
                prop1:
                  prop11: value2
`}],["openapi/human-readable/response-object-content-example-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example:
            prop1:
              prop11: value1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example:
            prop1:
              prop11: value2
`}],["openapi/human-readable/response-object-content-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example: abc
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
              example: cde
`}],["openapi/human-readable/response-object-content-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example: abc
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
          example: cde
`}],["openapi/human-readable/response-object-content-media-type-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
            application/xml:
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
`}],["openapi/human-readable/response-object-content-media-type-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
        application/xml:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/response-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          description: Resource was not found
          content:
            application/json:
              schema:
                type: string
`}],["openapi/human-readable/response-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: Resource was not found
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/response-object-response-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
        '404':
          description: The specified resource was not found
          content:
            application/json:
              schema:
                type: string
`}],["openapi/human-readable/response-object-response-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: OK
        '404':
          $ref: '#/components/responses/NotFound'
components:
  responses:
    NotFound:
      description: The specified resource was not found
      content:
        application/json:
          schema:
            type: string
`}],["openapi/human-readable/schema-object-any-of-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-any-of-array-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop11:
                    anyOf:
                      - type: object
                        properties:
                          prop1:
                            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop11:
                    anyOf:
                      - type: object
                        properties:
                          prop1:
                            type: string
                      - type: object
                        properties:
                          prop2:
                            type: number
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-any-of-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      anyOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      anyOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
        - type: object
          properties:
            prop3:
              type: string
`}],["openapi/human-readable/schema-object-attribute-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        writeOnly: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`}],["openapi/human-readable/schema-object-attribute-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    required:
                      - prop11
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`}],["openapi/human-readable/schema-object-attribute-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      writeOnly: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
`}],["openapi/human-readable/schema-object-default-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        default: 1
`}],["openapi/human-readable/schema-object-default-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        default: abc
          description: 'desc'
`}],["openapi/human-readable/schema-object-default-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      default: 1
`}],["openapi/human-readable/schema-object-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
`}],["openapi/human-readable/schema-object-enum-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        enum:
          - 1
          - 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        enum:
          - 1
          - 2
          - 3
`}],["openapi/human-readable/schema-object-enum-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: 'desc'
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        enum:
                          - abc
                          - bcd
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          description: 'desc'
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        enum:
                          - abc
                          - bcd
                          - cde
`}],["openapi/human-readable/schema-object-enum-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      enum:
        - 1
        - 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      enum:
        - 1
        - 2
        - 3
`}],["openapi/human-readable/schema-object-example-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
              example:
                prop1: "dog"
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-example-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
      example:
        prop1: "dog"
`}],["openapi/human-readable/schema-object-external-docs-description-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: More info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-external-docs-description-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet-schema
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: More info about the Pet schema
        url: https://example.com/docs/pet-schema
`}],["openapi/human-readable/schema-object-external-docs-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-external-docs-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet-schema
`}],["openapi/human-readable/schema-object-external-docs-url-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/schema
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              description: A schema representing a pet in the pet store
              type: object
              properties:
                prop1:
                  type: string
              externalDocs:
                description: Find more info about the Pet schema
                url: https://example.com/docs/pet-schema
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-external-docs-url-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      description: A schema representing a pet in the pet store
      type: object
      properties:
        prop1:
          type: string
      externalDocs:
        description: Find more info about the Pet schema
        url: https://example.com/docs/pet-schema
`}],["openapi/human-readable/schema-object-format-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        format: int32
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        format: int64
`}],["openapi/human-readable/schema-object-format-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'desc'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        format: email
          description: 'desc'
`}],["openapi/human-readable/schema-object-format-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      format: int32
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      format: int64
`}],["openapi/human-readable/schema-object-one-of-array-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: string

      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-one-of-array-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop11:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop11:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/human-readable/schema-object-one-of-array-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      oneOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      oneOf:
        - type: object
          properties:
            prop1:
              type: string
        - type: object
          properties:
            prop2:
              type: number
        - type: object
          properties:
            prop3:
              type: string
`}],["openapi/human-readable/schema-object-properties-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop2:
                type: object
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: object
            properties:
              prop2:
                type: object
                properties:
                  prop3:
                    type: string
`}],["openapi/human-readable/schema-object-properties-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop2:
                    type: object
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - in: query
          name: offset
          schema:
            type: object
            properties:
              prop1:
                type: object
                properties:
                  prop2:
                    type: object
                    properties:
                      prop3:
                        type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-properties-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
        prop2:
          type: object
          properties:
            prop21:
              type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
        prop2:
          type: object
          properties:
            prop21:
              type: string
            prop22:
              type: string
`}],["openapi/human-readable/schema-object-required-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        properties:
          prop1:
            type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: object
        required:
          - prop1
        properties:
          prop1:
            type: string
`}],["openapi/human-readable/schema-object-required-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: object
      required:
        - prop1
      properties:
        prop1:
          type: string
`}],["openapi/human-readable/schema-object-schema-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
            schema:
              type: integer
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-schema-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    post:
      summary: Add a new pet
      requestBody:
        description: Pet information
        content:
          application/json:
            example: abc
            schema:
              $ref: '#/components/schemas/offsetSchema'
      responses:
        '200':
          description: OK
components:
  schemas:
    offsetSchema:
      type: integer
`}],["openapi/human-readable/schema-object-title-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: Pet Schema
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
`}],["openapi/human-readable/schema-object-title-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        prop1:
          type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pet:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      title: Pet Schema
      type: object
      properties:
        prop1:
          type: string
`}],["openapi/human-readable/schema-object-type-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: string
`}],["openapi/human-readable/schema-object-type-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'response description'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: number
          description: 'response description'
`}],["openapi/human-readable/schema-object-type-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: string
`}],["openapi/human-readable/schema-object-validator-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        multipleOf: 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        type: integer
        multipleOf: 4
`}],["openapi/human-readable/schema-object-validator-inline-inline",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
          description: 'response description'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  prop1:
                    type: object
                    properties:
                      prop11:
                        type: string
                        maxLength: 10
          description: 'response description'
`}],["openapi/human-readable/schema-object-validator-ref",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      multipleOf: 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /users:
    get:
      summary: Gets a list of users.
      parameters:
        - $ref: '#/components/parameters/offsetParam'
      responses:
        '200':
          description: OK
components:
  parameters:
    offsetParam:
      in: query
      name: offset
      schema:
        $ref: '#/components/schemas/offsetSchema'
  schemas:
    offsetSchema:
      type: integer
      multipleOf: 4
`}],["openapi/operation-parameters/add-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/operation-parameters/add-header-parameter-with-name-accept",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Accept
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-header-parameter-with-name-authorization",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Authorization
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-header-parameter-with-name-content-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Content-Type
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-operation-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-parameter-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-parameter-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-style-form-for-cookie-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: cookie
          style: form
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-style-form-for-query-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-style-simple-for-header-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: header
          style: simple
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/add-style-simple-for-path-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1/{param1}:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1/{param1}:
    get:
      parameters:
        - name: param1
          in: path
          style: simple
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-empty-value-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-empty-value-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-reserved-characters-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/allow-reserved-characters-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/explicitly-prohibit-reserved-characters-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-form-style-as-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-form-style-as-not-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: form
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-not-form-style-as-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-array-parameter-with-not-form-style-as-not-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: true
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          style: spaceDelimited
          schema:
            type: array
            items:
              type: string
        - name: param2
          in: query
          style: spaceDelimited
          explode: false
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-parameter-as-deprecated",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          deprecated: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          deprecated: true
          schema:
            type: string
        - name: param2
          in: query
          deprecated: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-parameter-as-optional",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          required: true
          schema:
            type: string
        - name: param2
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-parameter-as-required",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          required: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          required: true
          schema:
            type: string
        - name: param2
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-primitive-parameter-as-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          explode: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          explode: true
          schema:
            type: string
        - name: param2
          in: query
          explode: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/mark-primitive-parameter-as-not-exploded",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          explode: true
          schema:
            type: string
        - name: param2
          in: query
          explode: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          explode: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-empty-value-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-empty-value-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowEmptyValue: true
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowEmptyValue: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-reserved-characters-for-not-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: path
          schema:
            type: string
        - name: param2
          in: path
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/prohibit-reserved-characters-for-query",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          allowReserved: true
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          allowReserved: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value 1
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/operation-parameters/remove-deprecated-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          deprecated: true
          schema:
            type: string
        - name: param2
          in: query
          deprecated: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
        - name: param2
          in: query
          deprecated: false
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-header-parameter-with-name-accept",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Accept
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-header-parameter-with-name-authorization",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Authorization
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-header-parameter-with-name-content-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: Content-Type
          in: header
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-operation-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-parameter-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/remove-parameter-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-custom-property-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value 1
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      parameters:
        - name: param1
          in: query
          x-custom-prop: some value 2
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/operation-parameters/update-parameter-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          description: It is a  NEW  param1 description.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-parameter-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
          example: someExampleValue222
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-parameter-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      parameters:
        - name: param1
          in: cookie
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/operation-parameters/update-style-for-path-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1/{param1}:
    get:
      parameters:
        - name: param1
          in: path
          style: simple
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1/{param1}:
    get:
      parameters:
        - name: param1
          in: path
          style: matrix
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-additional-examples-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
            example2:
              value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-example-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Long description for the example.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-example-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: short summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/add-examples-object-for-parameter",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/remove-example-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Long description for the example.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/remove-example-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: short summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/remove-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
              externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-example-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Long description for the example.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              description: Changed description.
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-example-summary",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: short summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              summary: changed summary
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-example-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
              externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
              externalValue: 'https://foo.bar/examples/address-example.txt'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-examples/update-name-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example1:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: filter
          in: query
          schema:
            type: string
          examples:
            example0:
              value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-all-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-all-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
              - type: object
                properties:
                  prop3:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-any-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
              - type: object
                properties:
                  prop3:
                    type: boolean
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
            discriminator:
              propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
            discriminator:
              propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
              - val2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
              - val2
              - val3
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            format: float
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            format: email
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            maxItems: 5
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            maxLength: 11
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            maxProperties: 10
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
                minItems: 0
                items:
                  type: string
              option2:
                type: array
                items:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
                minItems: 1
                items:
                  type: string
              option2:
                type: array
                minItems: 1
                items:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                minLength: 0
              option2:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                minLength: 1
              option2:
                type: string
                minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                minProperties: 0
                properties:
                  prop1:
                    type: string
              option2:
                properties:
                  prop1:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                minProperties: 1
                properties:
                  prop1:
                    type: string
              option2:
                minProperties: 1
                properties:
                  prop1:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            multipleOf: 2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-new-property-compliance",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-non-boolean-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            additionalProperties:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-one-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
              - type: object
                properties:
                  prop3:
                    type: boolean
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            pattern: '^[A-Za-z0-9_-]+$'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            required:
              - prop1
              - prop2
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-required-property-with-default",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
                default: 'Sample'
              prop2:
                type: number
                default: 5
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            required:
              - prop1
              - prop2
            properties:
              prop1:
                type: string
                default: 'Sample'
              prop2:
                type: number
                default: 5
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            title: schema title
            type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
                xml:
                  name: 'xml-id'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
              title:
                type: string
              author:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
              title:
                type: string
              author:
                type: string
            xml:
              name: 'xml-book'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-xml-prefix-and-namespace-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
            xml:
              prefix: 'p1'
              namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/add-xml-wrapped-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            items:
              type: string
            xml:
              wrapped: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/allow-non-unique-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
                uniqueItems: true
              option2:
                type: array
                uniqueItems: true

      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
              option2:
                type: array
                uniqueItems: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            maxItems: 10
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            maxItems: 5
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            maxLength: 22
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            maxLength: 11
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            maxProperties: 20
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            maxProperties: 10
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            maximum: 199
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            minItems: 3
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            minItems: 1
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            minLength: 3
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            minProperties: 2
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            minProperties: 1
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/decrease-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            minimum: 11
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            maxItems: 5
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            maxItems: 10
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            maxLength: 11
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            maxLength: 22
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            maxProperties: 10
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            maxProperties: 20
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            maximum: 199
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            minItems: 1
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            minItems: 3
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            minLength: 5
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            minProperties: 1
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            minProperties: 2
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/increase-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            minimum: 11
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-maximum-value-as-exclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                maximum: 99
              option2:
                type: number
                maximum: 99
                exclusiveMaximum: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                maximum: 99
                exclusiveMaximum: true
              option2:
                type: number
                maximum: 99
                exclusiveMaximum: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-maximum-value-as-inclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                maximum: 99
                exclusiveMaximum: true
              option2:
                type: number
                maximum: 99
                exclusiveMaximum: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                maximum: 99
              option2:
                type: number
                maximum: 99
                exclusiveMaximum: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-minimum-value-as-exclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                minimum: 1
              option2:
                type: number
                minimum: 1
                exclusiveMinimum: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                minimum: 1
                exclusiveMinimum: true
              option2:
                type: number
                minimum: 1
                exclusiveMinimum: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-minimum-value-as-inclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                minimum: 1
                exclusiveMinimum: true
              option2:
                type: number
                minimum: 1
                exclusiveMinimum: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: number
                minimum: 1
              option2:
                type: number
                minimum: 1
                exclusiveMinimum: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-object-property-as-not-read-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                readOnly: true
              option2:
                type: string
                readOnly: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                readOnly: false
              option2:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-object-property-as-not-write-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                writeOnly: true
              option2:
                type: string
                writeOnly: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
              option2:
                type: string
                writeOnly: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-object-property-as-read-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                readOnly: false
              option2:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                readOnly: true
              option2:
                type: string
                readOnly: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-object-property-as-write-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
              option2:
                type: string
                writeOnly: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                writeOnly: true
              option2:
                type: string
                writeOnly: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-property-as-xml-attribute",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: integer
              option2:
                type: integer
                xml:
                  attribute: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: integer
                xml:
                  attribute: true
              option2:
                type: integer
                xml:
                  attribute: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-property-as-xml-element",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: integer
                xml:
                  attribute: true
              option2:
                type: integer
                xml:
                  attribute: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: integer
              option2:
                type: integer
                xml:
                  attribute: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-schema-value-as-non-nullable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                nullable: true
              option2:
                type: string
                nullable: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
              option2:
                type: string
                nullable: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/mark-schema-value-as-nullable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
              option2:
                type: string
                nullable: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                nullable: true
              option2:
                type: string
                nullable: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/prohibit-non-unique-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
              option2:
                type: array
                uniqueItems: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
                uniqueItems: true
              option2:
                type: array
                uniqueItems: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            additionalProperties:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-all-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-all-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
              - type: object
                properties:
                  prop3:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-any-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
              - type: object
                properties:
                  prop3:
                    type: boolean
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
            discriminator:
              propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
            discriminator:
              propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
              - val2
              - val3
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
              - val2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            format: float
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            format: email
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            maxItems: 5
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            maxLength: 22
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            maxProperties: 10
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
                minItems: 1
                items:
                  type: string
              option2:
                type: array
                minItems: 1
                items:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: array
                minItems: 0
                items:
                  type: string
              option2:
                type: array
                items:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                minLength: 1
              option2:
                type: string
                minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
                minLength: 0
              option2:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                minProperties: 1
                properties:
                  prop1:
                    type: string
              option2:
                minProperties: 1
                properties:
                  prop1:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                minProperties: 0
                properties:
                  prop1:
                    type: string
              option2:
                properties:
                  prop1:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            multipleOf: 2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-one-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
              - type: object
                properties:
                  prop3:
                    type: boolean
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                properties:
                  prop1:
                    type: string
              - type: object
                properties:
                  prop2:
                    type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            pattern: '^[A-Za-z0-9_-]+$'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-property-compliance",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              prop1:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            required:
              - prop1
              - prop2
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            required:
              - prop2
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            title: schema title
            type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
                xml:
                  name: 'xml-id'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
              title:
                type: string
              author:
                type: string
            xml:
              name: 'xml-book'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
              title:
                type: string
              author:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-xml-prefix-and-namespace-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
            xml:
              prefix: 'p1'
              namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/remove-xml-wrapped-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            items:
              type: string
            xml:
              wrapped: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: array
            items:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-definition-of-free-form-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: object
              option2:
                type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: object
                additionalProperties: true
              option2:
                type: object
                additionalProperties: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                  - attribute
                properties:
                  objectType:
                    type: string
                  attribute:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                  - attribute
                properties:
                  objectType:
                    type: string
                  attribute:
                    type: string
            discriminator:
              propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                  - attribute
                properties:
                  objectType:
                    type: string
                  attribute:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                  - attribute
                properties:
                  objectType:
                    type: string
                  attribute:
                    type: string
            discriminator:
              propertyName: attribute
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
            discriminator:
              propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            oneOf:
              - type: object
                title: simpleObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
              - type: object
                title: complexObject
                required:
                  - objectType
                properties:
                  objectType:
                    type: string
            discriminator:
              propertyName: attribute
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
              - val2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            enum:
              - val1
              - val3
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            format: float
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            format: double
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            format: email
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            format: date-time
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            multipleOf: 2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            multipleOf: 5
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            pattern: '^[A-Za-z0-9_-]+$'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
            pattern: '^\\d{3}-\\d{2}-\\d{4}$'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            required:
              - prop1
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            required:
              - prop2
            properties:
              prop1:
                type: string
              prop2:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            title: This is a title
            type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            title: This is a new title
            type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-schema-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-schema-type-from-any-type-to-specific-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema: { }
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
`}],["openapi/parameters-schema/update-schema-type-from-nothing-to-specific-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses: { }
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
              - type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses: { }
      parameters:
        - name: p1
          in: query
          schema:
            type: string
`}],["openapi/parameters-schema/update-schema-type-from-specific-type-to-any-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1:
                type: string
              option2:
                type: string
                description: abc
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            properties:
              option1: { }
              option2:
                description: abc
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-schema-type-from-specific-type-to-nothing",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            allOf:
              - type: object
              - type: string
      responses:
        '200':
          description: OK
`}],["openapi/parameters-schema/update-schema-type-to-an-equivalent-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            anyOf:
              - type: string
              - type: number
              - type: integer
              - type: boolean
              - type: array
                items: { }
              - type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-specific-type-to-number-with-exclusive-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: number
            exclusiveMaximum: true
            exclusiveMinimum: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-type-of-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            additionalProperties:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            additionalProperties:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
                xml:
                  name: 'xml-id'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
                xml:
                  name: 'xml-id-2'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
              title:
                type: string
              author:
                type: string
            xml:
              name: 'xml-book'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
              title:
                type: string
              author:
                type: string
            xml:
              name: 'xml-book-1'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/parameters-schema/update-xml-prefix-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
            xml:
              prefix: 'p1'
              namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      parameters:
        - name: p1
          in: query
          schema:
            type: object
            properties:
              id:
                type: integer
            xml:
              prefix: 'p2'
              namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/add-example-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/add-request-body-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: This is description of request body
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-optional-option-1",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-optional-option-2",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: false
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-required-option-1",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/mark-request-body-as-required-option-2",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: false
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        required: true
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/remove-example-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/remove-request-body-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: The BillingAccount to be created
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/update-example-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: string
            example: value2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/update-media-type-of-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/json:
            schema: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          application/xml:
            schema: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request/update-request-body-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: This is description of request body
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        description: Some changes are made in request body
        content: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-additional-examples-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
              example2:
                value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: Long description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-examples-object-for-request-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/add-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: short description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/remove-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: Long description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/remove-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
                externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/remove-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: short description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: Long description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                description: changed description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-example-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
                externalValue: 'https://example.org/examples/address-example.xml'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
                externalValue: 'https://foo.bar/examples/address-example.txt'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-name-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example0:
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-examples/update-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: short description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
            examples:
              example1:
                summary: changed description
                value: name
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-all-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-all-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-any-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: boolean
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
              discriminator:
                propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
              discriminator:
                propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
                - val2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
                - val2
                - val3
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              format: float
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              format: email
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              maxItems: 1
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              maxLength: 11
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              maxProperties: 10
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                  minItems: 0
                  items:
                    type: string
                option2:
                  type: array
                  items:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                  minItems: 1
                  items:
                    type: string
                option2:
                  type: array
                  minItems: 1
                  items:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  minLength: 0
                option2:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  minLength: 1
                option2:
                  type: string
                  minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  minProperties: 0
                  properties:
                    prop1:
                      type: string
                option2:
                  properties:
                    prop1:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  minProperties: 1
                  properties:
                    prop1:
                      type: string
                option2:
                  minProperties: 1
                  properties:
                    prop1:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              multipleOf: 2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-new-property-compliance",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-non-boolean-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              additionalProperties:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-one-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: boolean
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              pattern: '^[A-Za-z0-9_-]+$'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              required:
                - prop1
                - prop2
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-required-property-with-default",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
                  default: 'Sample'
                prop2:
                  type: number
                  default: 5
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              required:
                - prop1
                - prop2
              properties:
                prop1:
                  type: string
                  default: 'Sample'
                prop2:
                  type: number
                  default: 5
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: This is a title
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                  xml:
                    name: 'xml-id'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                title:
                  type: string
                author:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                title:
                  type: string
                author:
                  type: string
              xml:
                name: 'xml-book'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-xml-prefix-and-namespace-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
              xml:
                prefix: 'p1'
                namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/add-xml-wrapped-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              items:
                type: string
              xml:
                wrapped: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/allow-non-unique-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                  uniqueItems: true
                option2:
                  type: array
                  uniqueItems: true

      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                option2:
                  type: array
                  uniqueItems: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              maxItems: 10
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              maxItems: 5
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              maxLength: 22
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              maxLength: 11
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              maxProperties: 20
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              maxProperties: 10
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              maximum: 199
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              minItems: 3
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              minItems: 1
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              minLength: 3
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              minProperties: 2
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              minProperties: 1
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/decrease-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              minimum: 11
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              maxItems: 5
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              maxItems: 10
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              maxLength: 11
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              maxLength: 22
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              maxProperties: 10
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              maxProperties: 20
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              maximum: 199
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              minItems: 1
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              minItems: 3
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              minLength: 5
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              minProperties: 1
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              minProperties: 2
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/increase-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              minimum: 11
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-maximum-value-as-exclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  maximum: 99
                option2:
                  type: number
                  maximum: 99
                  exclusiveMaximum: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  maximum: 99
                  exclusiveMaximum: true
                option2:
                  type: number
                  maximum: 99
                  exclusiveMaximum: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-maximum-value-as-inclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  maximum: 99
                  exclusiveMaximum: true
                option2:
                  type: number
                  maximum: 99
                  exclusiveMaximum: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  maximum: 99
                option2:
                  type: number
                  maximum: 99
                  exclusiveMaximum: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-minimum-value-as-exclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  minimum: 1
                option2:
                  type: number
                  minimum: 1
                  exclusiveMinimum: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  minimum: 1
                  exclusiveMinimum: true
                option2:
                  type: number
                  minimum: 1
                  exclusiveMinimum: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-minimum-value-as-inclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  minimum: 1
                  exclusiveMinimum: true
                option2:
                  type: number
                  minimum: 1
                  exclusiveMinimum: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: number
                  minimum: 1
                option2:
                  type: number
                  minimum: 1
                  exclusiveMinimum: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-object-property-as-not-read-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  readOnly: true
                option2:
                  type: string
                  readOnly: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  readOnly: false
                option2:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-object-property-as-not-write-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  writeOnly: true
                option2:
                  type: string
                  writeOnly: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                option2:
                  type: string
                  writeOnly: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-object-property-as-read-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  readOnly: false
                option2:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  readOnly: true
                option2:
                  type: string
                  readOnly: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-object-property-as-write-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                option2:
                  type: string
                  writeOnly: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  writeOnly: true
                option2:
                  type: string
                  writeOnly: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-property-as-xml-attribute",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: integer
                option2:
                  type: string
                  xml:
                    attribute: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: integer
                  xml:
                    attribute: true
                option2:
                  type: string
                  xml:
                    attribute: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-property-as-xml-element",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: integer
                  xml:
                    attribute: true
                option2:
                  type: string
                  xml:
                    attribute: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: integer
                option2:
                  type: string
                  xml:
                    attribute: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-schema-value-as-non-nullable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  nullable: true
                option2:
                  type: string
                  nullable: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                option2:
                  type: string
                  nullable: false
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/mark-schema-value-as-nullable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                option2:
                  type: string
                  nullable: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  nullable: true
                option2:
                  type: string
                  nullable: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/prohibit-non-unique-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                option2:
                  type: array
                  uniqueItems: false
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                  uniqueItems: true
                option2:
                  type: array
                  uniqueItems: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              additionalProperties:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-all-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-all-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-any-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: boolean
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
              discriminator:
                propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
              discriminator:
                propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                  properties:
                    objectType:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
                - val2
                - val3
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
                - val2
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              format: float
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              format: email
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              maxItems: 5
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              maxLength: 22
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              maxProperties: 10
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              maximum: 99
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                  minItems: 1
                  items:
                    type: string
                option2:
                  type: array
                  minItems: 1
                  items:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: array
                  minItems: 0
                  items:
                    type: string
                option2:
                  type: array
                  items:
                    type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  minLength: 1
                option2:
                  type: string
                  minLength: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                  minLength: 0
                option2:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  minProperties: 1
                  properties:
                    prop1:
                      type: string
                option2:
                  minProperties: 1
                  properties:
                    prop1:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  minProperties: 0
                  properties:
                    prop1:
                      type: string
                option2:
                  properties:
                    prop1:
                      type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              minimum: 1
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              multipleOf: 2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-one-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
                - type: object
                  properties:
                    prop3:
                      type: boolean
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  properties:
                    prop1:
                      type: string
                - type: object
                  properties:
                    prop2:
                      type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              pattern: '^[A-Za-z0-9_-]+$'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-property-compliance",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                prop1:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              required:
                - prop1
                - prop2
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              required:
                - prop2
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: This is a title
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                  xml:
                    name: 'xml-id'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                title:
                  type: string
                author:
                  type: string
              xml:
                name: 'xml-book'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                title:
                  type: string
                author:
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-xml-prefix-and-namespace-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
              xml:
                prefix: 'p1'
                namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/remove-xml-wrapped-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              items:
                type: string
              xml:
                wrapped: true
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: array
              items:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-definition-of-free-form-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: object
                option2:
                  type: object
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: object
                  additionalProperties: true
                option2:
                  type: object
                  additionalProperties: { }
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
              discriminator:
                propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
              discriminator:
                propertyName: attribute
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
              discriminator:
                propertyName: objectType
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              oneOf:
                - type: object
                  title: simpleObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
                - type: object
                  title: complexObject
                  required:
                    - objectType
                    - attribute
                  properties:
                    objectType:
                      type: string
                    attribute:
                      type: string
              discriminator:
                propertyName: attribute
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
                - val2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              enum:
                - val1
                - val3
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              format: float
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              format: double
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              format: email
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              format: date-time
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              multipleOf: 2
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              multipleOf: 5
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              pattern: '^[A-Za-z0-9_-]+$'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
              pattern: '^\\d{3}-\\d{2}-\\d{4}$'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              required:
                - prop1
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              required:
                - prop2
              properties:
                prop1:
                  type: string
                prop2:
                  type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: This is a title
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              title: This is a new title
              type: string
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-schema-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-schema-type-from-any-type-to-specific-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema: { }
      responses:
        '200':
          description: Ok
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: Ok
`}],["openapi/request-body-schema/update-schema-type-from-nothing-to-specific-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                - type: string
      responses:
        '200':
          description: Ok
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: Ok
`}],["openapi/request-body-schema/update-schema-type-from-specific-type-to-any-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1:
                  type: string
                option2:
                  description: abc
                  type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              properties:
                option1: { }
                option2:
                  description: abc
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-schema-type-from-specific-type-to-nothing",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: Ok
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              allOf:
                - type: object
                - type: string
      responses:
        '200':
          description: Ok
`}],["openapi/request-body-schema/update-schema-type-to-an-equivalent-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema: { }
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              anyOf:
                - type: string
                - type: number
                - type: integer
                - type: boolean
                - type: array
                  items: { }
                - type: object
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-specific-type-to-number-with-exclusive-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: number
              exclusiveMinimum: true
              exclusiveMaximum: true
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-type-of-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              additionalProperties:
                type: string
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              additionalProperties:
                type: number
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                  xml:
                    name: 'xml-id'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                  xml:
                    name: 'xml-id-2'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                title:
                  type: string
                author:
                  type: string
              xml:
                name: 'xml-book'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
                title:
                  type: string
                author:
                  type: string
              xml:
                name: 'xml-book-1'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/request-body-schema/update-xml-prefix-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
              xml:
                prefix: 'p1'
                namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      requestBody:
        content:
          'application/json':
            schema:
              type: object
              properties:
                id:
                  type: integer
              xml:
                prefix: 'p2'
                namespace: 'http://example.com/schema'
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/response/add-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: true
`}],["openapi/response/add-header-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: some description
              schema:
                type: integer
`}],["openapi/response/add-new-response",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
        '202':
          description: OK
          content: { }
`}],["openapi/response/add-response-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/response/add-response-header",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer
`}],["openapi/response/remove-custom-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
`}],["openapi/response/remove-header-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: some description
              schema:
                type: integer`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer
`}],["openapi/response/remove-response",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
        '202':
          description: OK
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }`}],["openapi/response/remove-response-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: some value
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          content: { }
`}],["openapi/response/remove-response-header",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
`}],["openapi/response/update-custom-property-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /pets:
    get:
      summary: List all pets
      responses:
        '200':
          description: A list of pets
          x-cacheable: false
`}],["openapi/response/update-header-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: some description
              schema:
                type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              description: changed description
              schema:
                type: integer
`}],["openapi/response/update-header-name",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Limit:
              schema:
                type: integer`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: OK
          content: { }
          headers:
            X-Rate-Limit-Remaining:
              schema:
                type: integer
`}],["openapi/response/update-response-description",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: some value
          content: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    get:
      responses:
        '200':
          description: changed value
          content: { }
`}],["openapi/response-body-examples/add-additional-examples-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                example2:
                  value: name2
`}],["openapi/response-body-examples/add-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: Long description
                  value: name
`}],["openapi/response-body-examples/add-examples-object-for-response-body",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/add-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: short description
                  value: name
`}],["openapi/response-body-examples/remove-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: Long description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/remove-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                  externalValue: 'https://example.org/examples/address-example.xml'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/remove-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: short description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`}],["openapi/response-body-examples/update-description-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: Long description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  description: changed description
                  value: name
`}],["openapi/response-body-examples/update-example-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name2
`}],["openapi/response-body-examples/update-external-value-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                  externalValue: 'https://example.org/examples/address-example.xml'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
                  externalValue: 'https://foo.bar/examples/address-example.txt'
`}],["openapi/response-body-examples/update-name-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example0:
                  value: name
`}],["openapi/response-body-examples/update-summary-of-example",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: short description
                  value: name
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
              examples:
                example1:
                  summary: changed description
                  value: name
`}],["openapi/response-body-schema/add-all-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                allOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/response-body-schema/add-all-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                allOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                allOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
                  - type: object
                    properties:
                      prop3:
                        type: number
`}],["openapi/response-body-schema/add-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/response-body-schema/add-any-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
                  - type: object
                    properties:
                      prop3:
                        type: boolean
`}],["openapi/response-body-schema/add-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                discriminator:
                  propertyName: objectType
`}],["openapi/response-body-schema/add-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                discriminator:
                  propertyName: objectType
`}],["openapi/response-body-schema/add-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
`}],["openapi/response-body-schema/add-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
                  - val2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
                  - val2
                  - val3
`}],["openapi/response-body-schema/add-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                format: float
`}],["openapi/response-body-schema/add-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                format: email
`}],["openapi/response-body-schema/add-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                maxItems: 1
                items:
                  type: string
`}],["openapi/response-body-schema/add-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                maxLength: 11
`}],["openapi/response-body-schema/add-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                maxProperties: 10
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/add-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                maximum: 99
`}],["openapi/response-body-schema/add-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                    minItems: 0
                    items:
                      type: string
                  option2:
                    type: array
                    items:
                      type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                    minItems: 1
                    items:
                      type: string
                  option2:
                    type: array
                    minItems: 1
                    items:
                      type: string
`}],["openapi/response-body-schema/add-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    minLength: 0
                  option2:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    minLength: 1
                  option2:
                    type: string
                    minLength: 1
`}],["openapi/response-body-schema/add-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    minProperties: 0
                    properties:
                      prop1:
                        type: string
                  option2:
                    properties:
                      prop1:
                        type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    minProperties: 1
                    properties:
                      prop1:
                        type: string
                  option2:
                    minProperties: 1
                    properties:
                      prop1:
                        type: string
`}],["openapi/response-body-schema/add-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                minimum: 1
`}],["openapi/response-body-schema/add-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                multipleOf: 2
`}],["openapi/response-body-schema/add-new-property-compliance",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`}],["openapi/response-body-schema/add-non-boolean-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                additionalProperties:
                  type: string
`}],["openapi/response-body-schema/add-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/response-body-schema/add-one-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
                  - type: object
                    properties:
                      prop3:
                        type: boolean
`}],["openapi/response-body-schema/add-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                pattern: '^[A-Za-z0-9_-]+$'
`}],["openapi/response-body-schema/add-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                required:
                  - prop1
                  - prop2
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`}],["openapi/response-body-schema/add-required-property-with-default",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
                    default: 'Sample'
                  prop2:
                    type: number
                    default: 5
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                required:
                  - prop1
                  - prop2
                properties:
                  prop1:
                    type: string
                    default: 'Sample'
                  prop2:
                    type: number
                    default: 5
`}],["openapi/response-body-schema/add-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                title: schema title
                type: string
`}],["openapi/response-body-schema/add-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                    xml:
                      name: 'xml-id'
`}],["openapi/response-body-schema/add-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  title:
                    type: string
                  author:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  title:
                    type: string
                  author:
                    type: string
                xml:
                  name: 'xml-book'
`}],["openapi/response-body-schema/add-xml-prefix-and-namespace-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                xml:
                  prefix: 'p1'
                  namespace: 'http://example.com/schema'
`}],["openapi/response-body-schema/add-xml-wrapped-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                items:
                  type: string
                xml:
                  wrapped: true
`}],["openapi/response-body-schema/allow-non-unique-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                    uniqueItems: true
                  option2:
                    type: array
                    uniqueItems: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                  option2:
                    type: array
                    uniqueItems: false
`}],["openapi/response-body-schema/decrease-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                maxItems: 10
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                maxItems: 5
                items:
                  type: string
`}],["openapi/response-body-schema/decrease-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                maxLength: 22
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                maxLength: 11
`}],["openapi/response-body-schema/decrease-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                maxProperties: 20
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                maxProperties: 10
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/decrease-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                maximum: 199
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                maximum: 99
`}],["openapi/response-body-schema/decrease-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                minItems: 3
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                minItems: 1
                items:
                  type: string
`}],["openapi/response-body-schema/decrease-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                minLength: 3
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                minLength: 1
`}],["openapi/response-body-schema/decrease-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                minProperties: 2
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                minProperties: 1
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/decrease-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                minimum: 11
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                minimum: 1
`}],["openapi/response-body-schema/increase-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                maxItems: 5
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                maxItems: 10
                items:
                  type: string
`}],["openapi/response-body-schema/increase-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                maxLength: 11
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                maxLength: 22
`}],["openapi/response-body-schema/increase-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                maxProperties: 10
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                maxProperties: 20
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/increase-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                maximum: 99
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                maximum: 199
`}],["openapi/response-body-schema/increase-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                minItems: 1
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                minItems: 3
                items:
                  type: string
`}],["openapi/response-body-schema/increase-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                minLength: 1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                minLength: 5
`}],["openapi/response-body-schema/increase-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                minProperties: 1
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                minProperties: 2
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/increase-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                minimum: 1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                minimum: 11
`}],["openapi/response-body-schema/mark-maximum-value-as-exclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    maximum: 99
                  option2:
                    type: number
                    maximum: 99
                    exclusiveMaximum: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    maximum: 99
                    exclusiveMaximum: true
                  option2:
                    type: number
                    maximum: 99
                    exclusiveMaximum: true
`}],["openapi/response-body-schema/mark-maximum-value-as-inclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    maximum: 99
                    exclusiveMaximum: true
                  option2:
                    type: number
                    maximum: 99
                    exclusiveMaximum: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    maximum: 99
                  option2:
                    type: number
                    maximum: 99
                    exclusiveMaximum: false
`}],["openapi/response-body-schema/mark-minimum-value-as-exclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    minimum: 1
                  option2:
                    type: number
                    minimum: 1
                    exclusiveMinimum: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    minimum: 1
                    exclusiveMinimum: true
                  option2:
                    type: number
                    minimum: 1
                    exclusiveMinimum: true
`}],["openapi/response-body-schema/mark-minimum-value-as-inclusive-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    minimum: 1
                    exclusiveMinimum: true
                  option2:
                    type: number
                    minimum: 1
                    exclusiveMinimum: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: number
                    minimum: 1
                  option2:
                    type: number
                    minimum: 1
                    exclusiveMinimum: false
`}],["openapi/response-body-schema/mark-object-property-as-not-read-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    readOnly: true
                  option2:
                    type: string
                    readOnly: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                  option2:
                    type: string
                    readOnly: false
`}],["openapi/response-body-schema/mark-object-property-as-not-write-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    writeOnly: true
                  option2:
                    type: number
                    writeOnly: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                  option2:
                    type: number
                    writeOnly: false
`}],["openapi/response-body-schema/mark-object-property-as-read-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                  option2:
                    type: string
                    readOnly: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    readOnly: true
                  option2:
                    type: string
                    readOnly: true
`}],["openapi/response-body-schema/mark-object-property-as-write-only",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                  option2:
                    type: number
                    writeOnly: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    writeOnly: true
                  option2:
                    type: number
                    writeOnly: true
`}],["openapi/response-body-schema/mark-property-as-xml-attribute",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: integer
                  option2:
                    type: string
                    xml:
                      attribute: false`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: integer
                    xml:
                      attribute: true
                  option2:
                    type: string
                    xml:
                      attribute: true
`}],["openapi/response-body-schema/mark-property-as-xml-element",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: integer
                    xml:
                      attribute: true
                  option2:
                    type: string
                    xml:
                      attribute: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: integer
                  option2:
                    type: string
                    xml:
                      attribute: false
`}],["openapi/response-body-schema/mark-schema-value-as-non-nullable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    nullable: true
                  option2:
                    type: string
                    nullable: true
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    nullable: false
                  option2:
                    type: string
`}],["openapi/response-body-schema/mark-schema-value-as-nullable",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                  option2:
                    type: string
                    nullable: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    nullable: true
                  option2:
                    type: string
                    nullable: true
`}],["openapi/response-body-schema/prohibit-non-unique-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                  option2:
                    type: array
                    uniqueItems: false
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                    uniqueItems: true
                  option2:
                    type: array
                    uniqueItems: true
`}],["openapi/response-body-schema/remove-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                additionalProperties:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
`}],["openapi/response-body-schema/remove-all-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                allOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/remove-all-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                allOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
                  - type: object
                    properties:
                      prop3:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                allOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/response-body-schema/remove-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/remove-any-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
                  - type: object
                    properties:
                      prop3:
                        type: boolean
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/response-body-schema/remove-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                discriminator:
                  propertyName: objectType
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
`}],["openapi/response-body-schema/remove-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                discriminator:
                  propertyName: objectType
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
`}],["openapi/response-body-schema/remove-enum",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`}],["openapi/response-body-schema/remove-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
                  - val2
                  - val3
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
                  - val2
`}],["openapi/response-body-schema/remove-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                format: float
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`}],["openapi/response-body-schema/remove-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                format: email
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`}],["openapi/response-body-schema/remove-max-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                maxItems: 5
                items:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                items:
                  type: string
`}],["openapi/response-body-schema/remove-max-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                maxLength: 22
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`}],["openapi/response-body-schema/remove-max-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                maxProperties: 10
                properties:
                  prop1:
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/remove-maximum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                maximum: 99
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`}],["openapi/response-body-schema/remove-min-items-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                    minItems: 1
                    items:
                      type: string
                  option2:
                    type: array
                    minItems: 1
                    items:
                      type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: array
                    minItems: 0
                    items:
                      type: string
                  option2:
                    type: array
                    items:
                      type: string
`}],["openapi/response-body-schema/remove-min-length-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    minLength: 1
                  option2:
                    type: string
                    minLength: 1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                    minLength: 0
                  option2:
                    type: string
`}],["openapi/response-body-schema/remove-min-properties-for-object-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    minProperties: 1
                    properties:
                      prop1:
                        type: string
                  option2:
                    minProperties: 1
                    properties:
                      prop1:
                        type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    minProperties: 0
                    properties:
                      prop1:
                        type: string
                  option2:
                    properties:
                      prop1:
                        type: string
`}],["openapi/response-body-schema/remove-minimum-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                minimum: 1
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`}],["openapi/response-body-schema/remove-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                multipleOf: 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`}],["openapi/response-body-schema/remove-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/remove-one-of-option",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
                  - type: object
                    properties:
                      prop3:
                        type: boolean
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    properties:
                      prop1:
                        type: string
                  - type: object
                    properties:
                      prop2:
                        type: number
`}],["openapi/response-body-schema/remove-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                pattern: '^[A-Za-z0-9_-]+$'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`}],["openapi/response-body-schema/remove-property-compliance",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  prop1:
                    type: string
`}],["openapi/response-body-schema/remove-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                required:
                  - prop1
                  - prop2
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                required:
                  - prop2
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`}],["openapi/response-body-schema/remove-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                title: This is a title
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`}],["openapi/response-body-schema/remove-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                    xml:
                      name: 'xml-id'`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
`}],["openapi/response-body-schema/remove-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  title:
                    type: string
                  author:
                    type: string
                xml:
                  name: 'xml-book'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  title:
                    type: string
                  author:
                    type: string
`}],["openapi/response-body-schema/remove-xml-prefix-and-namespace-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                xml:
                  prefix: 'p1'
                  namespace: 'http://example.com/schema'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
`}],["openapi/response-body-schema/remove-xml-wrapped-for-array-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                items:
                  type: string
                xml:
                  wrapped: true`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: array
                items:
                  type: string
`}],["openapi/response-body-schema/update-definition-of-free-form-object",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: object
                  option2:
                    type: object
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: object
                    additionalProperties: true
                  option2:
                    type: object
                    additionalProperties: { }
`}],["openapi/response-body-schema/update-discriminator-for-any-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                      - attribute
                    properties:
                      objectType:
                        type: string
                      attribute:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                      - attribute
                    properties:
                      objectType:
                        type: string
                      attribute:
                        type: string
                discriminator:
                  propertyName: objectType
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                      - attribute
                    properties:
                      objectType:
                        type: string
                      attribute:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                      - attribute
                    properties:
                      objectType:
                        type: string
                      attribute:
                        type: string
                discriminator:
                  propertyName: attribute
`}],["openapi/response-body-schema/update-discriminator-for-one-of",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                discriminator:
                  propertyName: objectType
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                oneOf:
                  - type: object
                    title: simpleObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                  - type: object
                    title: complexObject
                    required:
                      - objectType
                    properties:
                      objectType:
                        type: string
                discriminator:
                  propertyName: attribute`}],["openapi/response-body-schema/update-enum-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
                  - val2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                enum:
                  - val1
                  - val3
`}],["openapi/response-body-schema/update-format-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                format: float
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                format: double
`}],["openapi/response-body-schema/update-format-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                format: email

`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                format: date-time
`}],["openapi/response-body-schema/update-multiple-of-for-number-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                multipleOf: 2
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                multipleOf: 5
`}],["openapi/response-body-schema/update-pattern-for-string-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                pattern: '^[A-Za-z0-9_-]+$'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
                pattern: '^\\d{3}-\\d{2}-\\d{4}$'
`}],["openapi/response-body-schema/update-required-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                required:
                  - prop1
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                required:
                  - prop2
                properties:
                  prop1:
                    type: string
                  prop2:
                    type: number
`}],["openapi/response-body-schema/update-schema-title",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                title: This is a title
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                title: This is a NEW title
                type: string
`}],["openapi/response-body-schema/update-schema-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
`}],["openapi/response-body-schema/update-schema-type-from-any-type-to-specific-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                description: any to string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                description: any to string
                type: string
`}],["openapi/response-body-schema/update-schema-type-from-nothing-type-to-string-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                description: string to nothing
                allOf:
                  - type: string
                  - type: number
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                description: string to nothing
                type: string
`}],["openapi/response-body-schema/update-schema-type-from-specific-type-to-any-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1:
                    type: string
                  option2:
                    description: abc
                    type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                properties:
                  option1: { }
                  option2:
                    description: abc
`}],["openapi/response-body-schema/update-schema-type-from-string-type-to-nothing-type",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                description: string to nothing
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                description: string to nothing
                allOf:
                  - type: string
                  - type: number
`}],["openapi/response-body-schema/update-schema-type-to-an-equivalent-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema: { }
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                anyOf:
                  - type: string
                  - type: number
                  - type: integer
                  - type: boolean
                  - type: array
                    items: { }
                  - type: object
`}],["openapi/response-body-schema/update-specific-type-to-number-with-exclusive-value",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: number
                exclusiveMaximum: true
                exclusiveMinimum: true
`}],["openapi/response-body-schema/update-type-of-additional-properties",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                additionalProperties:
                  type: string
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                additionalProperties:
                  type: number
`}],["openapi/response-body-schema/update-xml-name-replacement-for-property",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                    xml:
                      name: 'xml-id'`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                    xml:
                      name: 'xml-id-2'
`}],["openapi/response-body-schema/update-xml-name-replacement-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  title:
                    type: string
                  author:
                    type: string
                xml:
                  name: 'xml-book'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                  title:
                    type: string
                  author:
                    type: string
                xml:
                  name: 'xml-book-1'
`}],["openapi/response-body-schema/update-xml-prefix-for-schema",{before:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                xml:
                  prefix: 'p1'
                  namespace: 'http://example.com/schema'
`,after:`openapi: 3.0.3
info:
  title: test
  version: 0.1.0
paths:
  /path1:
    post:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  id:
                    type: integer
                xml:
                  prefix: 'p2'
                  namespace: 'http://example.com/schema'
`}]]),Gn=Symbol("synthetic-title"),Mn={validate:!0,liftCombiners:!0,syntheticTitleFlag:Gn,unify:!0,allowNotValidSyntheticChanges:!0},_n=(n,t)=>{const e=ln(n,t,{...Mn,beforeSource:n,afterSource:t,mode:hn,metaKey:pn});return $n(e.merged)&&(e.merged.toJSON=()=>sn(e.merged)),e};function $n(n){return n!=null&&typeof n=="object"}const Xn=["Inter"];function Cn({before:n,after:t}){const{diffs:p,merged:o}=_n(Y(n),Y(t)),[e,s]=bn.useState(!1),c=Xn.map(a=>new Nn(a).load(null,1e4));return Promise.all(c).then(()=>{s(!0)}),e?(console.log("apihub-diff:",sn(p.map(a=>{const{beforeDeclarationPaths:u=[],afterDeclarationPaths:d=[],...P}={...a};return{...P,...Q.isNotEmpty(u)?{beforeDeclarationPaths:`[${u.map(I=>`[${I.join()}]`).join()}]`}:{},...Q.isNotEmpty(d)?{afterDeclarationPaths:`[${d.map(I=>`[${I.join()}]`).join()}]`}:{}}}))),Vn(n,t),M.jsx(vn,{layoutMode:dn,diffMetaKey:pn,source:o})):M.jsx(M.Fragment,{})}function Vn(n,t){const p=J(n,{noLocation:!0}),o=J(t,{noLocation:!0}),e=Dn(p,o),s=Fn(p,o);console.log("GraphQL Changes:"),Q.isNotEmpty(e)?console.log("Breaking Changes:",e.map(c=>`
${c.description}`).join()):console.log("No Breaking Changes"),Q.isNotEmpty(s)?console.log("Dangerous Changes:",s.map(c=>`
${c.description}`).join()):console.log("No Dangerous Changes")}function Zn(n,t,p){const[o,e]=wn(n,t,p);return{before:o,after:e}}Cn.__docgenInfo={description:"",methods:[],displayName:"GraphQLStoryComponent",props:{before:{required:!0,tsType:{name:"string"},description:""},after:{required:!0,tsType:{name:"string"},description:""}}};export{Cn as G,Jn as T,Zn as g};
