import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./ddl-samples-common-blDsCtUc.js";var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`})))()}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{c(),u(),i(),a(),d=n(Object.assign({"../../../../samples/ddlapi/table-descriptions/long-description/sample.sql":s,"../../../../samples/ddlapi/table-descriptions/short-description/sample.sql":l})),f=t(d),p=o(f),m={...r,id:`ddlapi-suite-table-descriptions`,title:`DDL API Suite/Table Descriptions`},h=p(`long-description`),g=p(`short-description`),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createCaseStory("long-description")`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("short-description")`,...g.parameters?.docs?.source}}},_=[`LongDescription`,`ShortDescription`]})))()}v();export{h as LongDescription,g as ShortDescription,_ as __namedExportsOrder,m as default};