import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{i as r,n as i,r as a,t as o}from"./ddlapi-diffs-utils-DaX7n7iy.js";var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{c(),u(),f(),m(),r(),t(),h=o(Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/before.sql":s,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/before.sql":l}),Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/after.sql":d,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/after.sql":p})),g=n(h),_={...a,title:`DDL API Diffs Suite/Whole Indexes Changes Samples`},v=i(g),y=v(`01-add-two-indexes-when-none-present`),b=v(`02-remove-two-indexes-when-two-present`),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("01-add-two-indexes-when-none-present")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("02-remove-two-indexes-when-two-present")`,...b.parameters?.docs?.source}}},x=[`Case_01_add_two_indexes_when_none_present`,`Case_02_remove_two_indexes_when_two_present`]})))()}S();export{y as Case_01_add_two_indexes_when_none_present,b as Case_02_remove_two_indexes_when_two_present,x as __namedExportsOrder,_ as default};