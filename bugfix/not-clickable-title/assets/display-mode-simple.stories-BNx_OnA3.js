import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{Rr as t,zr as n}from"./UxBadge-9Okyl55V.js";import{i as r,r as i}from"./sample-cases-DDoAHGgD.js";import{n as a,t as o}from"./ddl-samples-cases--_ZpUtcP.js";import{n as s,r as c,t as l}from"./ddl-samples-common-DKyEXnpA.js";var u;function d(){return(d=e((()=>{u=`CREATE TABLE t (
  status text NOT NULL DEFAULT 'active'
);
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

CREATE TABLE t (
  feeling mood NOT NULL DEFAULT 'neutral'
);
`})))()}var m;function h(){return(h=e((()=>{m=`CREATE TABLE t (
  label text GENERATED ALWAYS AS (upper(status)) STORED,
  status text NOT NULL DEFAULT 'draft'
);
`})))()}var g;function _(){return(_=e((()=>{g=`CREATE TABLE t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Stub long comment for ddlapi simple display mode screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline column descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub.';
`})))()}var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{d(),p(),h(),_(),n(),a(),r(),c(),v=o(Object.assign({"../../../../samples/ddlapi/display-mode-simple/default-value/sample.sql":u,"../../../../samples/ddlapi/display-mode-simple/enum-values/sample.sql":f,"../../../../samples/ddlapi/display-mode-simple/generated-expression/sample.sql":m,"../../../../samples/ddlapi/display-mode-simple/long-description/sample.sql":g})),y=i(v),b=l(y,{displayMode:t}),x={...s,id:`ddlapi-suite-display-mode-simple`,title:`DDL API Suite/Display Mode Simple`},S=b(`default-value`),C=b(`enum-values`),w=b(`generated-expression`),T=b(`long-description`),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("default-value")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("enum-values")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("generated-expression")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("long-description")`,...T.parameters?.docs?.source}}},E=[`DefaultValue`,`EnumValues`,`GeneratedExpression`,`LongDescription`]})))()}D();export{S as DefaultValue,C as EnumValues,w as GeneratedExpression,T as LongDescription,E as __namedExportsOrder,x as default};