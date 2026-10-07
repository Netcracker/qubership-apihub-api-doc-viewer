import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./ddl-samples-cases--_ZpUtcP.js";import{n as a,r as o,t as s}from"./ddl-samples-common-DKyEXnpA.js";var c;function l(){return(l=e((()=>{c=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`})))()}var u;function d(){return(d=e((()=>{u=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{l(),d(),r(),t(),o(),f=i(Object.assign({"../../../../samples/ddlapi/table-descriptions/long-description/sample.sql":c,"../../../../samples/ddlapi/table-descriptions/short-description/sample.sql":u})),p=n(f),m=s(p),h={...a,id:`ddlapi-suite-table-descriptions`,title:`DDL API Suite/Table Descriptions`},g=m(`long-description`),_=m(`short-description`),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("long-description")`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("short-description")`,..._.parameters?.docs?.source}}},v=[`LongDescription`,`ShortDescription`]})))()}y();export{g as LongDescription,_ as ShortDescription,v as __namedExportsOrder,h as default};