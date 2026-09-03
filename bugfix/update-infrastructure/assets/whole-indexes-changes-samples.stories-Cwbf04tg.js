import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./ddlapi-diffs-utils-CXjdOS2c.js";var o;function s(){return(s=e((()=>{o=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var c;function l(){return(l=e((()=>{c=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),l(),d(),p(),t(),m=a(Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/before.sql":o,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/before.sql":c}),Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/after.sql":u,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/after.sql":f})),h=i(m),g={...n,title:`DDL API Diffs Suite/Whole Indexes Changes Samples`},_=r(h),v=_(`01-add-two-indexes-when-none-present`),y=_(`02-remove-two-indexes-when-two-present`),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("01-add-two-indexes-when-none-present")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("02-remove-two-indexes-when-two-present")`,...y.parameters?.docs?.source}}},b=[`Case_01_add_two_indexes_when_none_present`,`Case_02_remove_two_indexes_when_two_present`]})))()}x();export{v as Case_01_add_two_indexes_when_none_present,y as Case_02_remove_two_indexes_when_two_present,b as __namedExportsOrder,g as default};