import{a as l,i as m,s as h,n as T,d as b,D as E}from"./ErrorBoundaryFallback-0b215312.js";const u=Symbol("syntheticTitle"),d={syntheticTitleFlag:u,unify:!0,validate:!0,liftCombiners:!0,allowNotValidSyntheticChanges:!0};function f(){return{openapi:"3.0.2",paths:{"/test":{post:{summary:"Test Operation",description:"Description for Test Operation",parameters:[{name:"TestRequestHeader",in:"header",schema:{$ref:"#/components/schemas/__Substitution__"}},{name:"TestRequestCookie",in:"cookie",schema:{$ref:"#/components/schemas/__Substitution__"}},{name:"TestPathParam",in:"path",schema:{$ref:"#/components/schemas/__Substitution__"}},{name:"TestQueryParam",in:"query",schema:{$ref:"#/components/schemas/__Substitution__"}}],requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/__Substitution__"}}}},responses:{200:{headers:{testResponseHeader:{schema:{$ref:"#/components/schemas/__Substitution__"}}},content:{"application/json":{schema:{$ref:"#/components/schemas/__Substitution__"}}}},401:{content:{"application/json":{schema:{$ref:"#/components/schemas/__Substitution__"}}}},403:{content:{"application/json":{schema:{$ref:"#/components/schemas/__Substitution__"}}}},404:{content:{"application/json":{schema:{$ref:"#/components/schemas/__Substitution__"}}}},500:{content:{"application/json":{schema:{$ref:"#/components/schemas/__Substitution__"}}}}}}}},components:{schemas:{__Substitution__:null}}}}const R="request-header",y="request-cookie",O="path-parameter",A="query-parameter",D="request-body",j="response-header",g="response-200-body",G="response-401-body",P="response-403-body",N="response-404-body",C="response-500-body";function $(e,s){switch(s){case R:return e.paths["/test"].post.parameters[0].schema;case y:return e.paths["/test"].post.parameters[1].schema;case O:return e.paths["/test"].post.parameters[2].schema;case A:return e.paths["/test"].post.parameters[3].schema;case D:return e.paths["/test"].post.requestBody.content["application/json"].schema;case j:return e.paths["/test"].post.responses[200].headers.testResponseHeader.schema;case g:return e.paths["/test"].post.responses[200].content["application/json"].schema;case G:return e.paths["/test"].post.responses[401].content["application/json"].schema;case P:return e.paths["/test"].post.responses[403].content["application/json"].schema;case N:return e.paths["/test"].post.responses[404].content["application/json"].schema;case C:return e.paths["/test"].post.responses[500].content["application/json"].schema}}function S(e,s){const a=Object.keys(e),c=Object.keys(s),t=new Set([...a,...c]),p={};for(const r of t){const n=e[r],o=s[r],_=m(n),i=m(o);_&&i?p[r]={...n,...o}:_?p[r]={...n}:i&&(p[r]={...o})}return p}function q(e){const{beforeSchema:s,afterSchema:a,beforeAdditionalComponents:c={},afterAdditionalComponents:t={},target:p,circular:r=!1}=e,n=f();n.components.schemas.__Substitution__=s,n.components=S(n.components,c);const o=f();o.components.schemas.__Substitution__=a,o.components=S(o.components,t);const _=l(n,o,{...d,beforeSource:n,afterSource:o,metaKey:E}).merged,i=$(_,p);return r&&m(i)&&(i.toJSON=()=>h(i)),i}function Y(e){const{source:s,circular:a=!1}=e,c=T(s,{syntheticTitleFlag:u,unify:!0,validate:!0,liftCombiners:!0}),t=b(c,{syntheticTitleFlag:u,unify:!0,validate:!0,liftCombiners:!0});return a&&m(t)&&(t.toJSON=()=>h(t)),t}function k(e){const{beforeSource:s,afterSource:a,circular:c=!1}=e,t=l(s,a,{beforeSource:s,afterSource:a,syntheticTitleFlag:u,metaKey:E,validate:!0,liftCombiners:!0,unify:!0}).merged;return c&&m(t)&&(t.toJSON=()=>h(t)),t}export{g as R,Y as a,q as b,k as p};
