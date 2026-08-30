import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Jr as t,qr as n}from"./DiffBadge-DZLJW5IF.js";import{a as r,i,n as a,o,r as s,t as c}from"./ddl-samples-common-BOsts2r6.js";var l;function u(){return(u=e((()=>{l=`CREATE TABLE t (
  status text NOT NULL DEFAULT 'active'
);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

CREATE TABLE t (
  feeling mood NOT NULL DEFAULT 'neutral'
);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE TABLE t (
  label text GENERATED ALWAYS AS (upper(status)) STORED,
  status text NOT NULL DEFAULT 'draft'
);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE TABLE t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Stub long comment for ddlapi simple display mode screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline column descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub.';
`})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{u(),f(),m(),g(),t(),o(),s(),_=i(Object.assign({"../../../../samples/ddlapi/display-mode-simple/default-value/sample.sql":l,"../../../../samples/ddlapi/display-mode-simple/enum-values/sample.sql":d,"../../../../samples/ddlapi/display-mode-simple/generated-expression/sample.sql":p,"../../../../samples/ddlapi/display-mode-simple/long-description/sample.sql":h})),v=r(_),y=c(v,{displayMode:n}),b={...a,id:`ddlapi-suite-display-mode-simple`,title:`DDL API Suite/Display Mode Simple`},x=y(`default-value`),S=y(`enum-values`),C=y(`generated-expression`),w=y(`long-description`),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("default-value")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("enum-values")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("generated-expression")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("long-description")`,...w.parameters?.docs?.source}}},T=[`DefaultValue`,`EnumValues`,`GeneratedExpression`,`LongDescription`]})))()}E();export{x as DefaultValue,S as EnumValues,C as GeneratedExpression,w as LongDescription,T as __namedExportsOrder,b as default};