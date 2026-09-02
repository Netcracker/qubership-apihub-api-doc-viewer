import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./ddlapi-diffs-utils-DYfV48Zp.js";var o;function s(){return(s=e((()=>{o=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t ();
`})))()}var c;function l(){return(l=e((()=>{c=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t ();
`})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),l(),d(),p(),t(),m=a(Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/before.sql":o,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/before.sql":c}),Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/after.sql":u,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/after.sql":f})),h=i(m),g={...n,title:`DDL API Diffs Suite/Whole Columns Changes Samples`},_=r(h),v=_(`01-add-two-columns-to-empty-table`),y=_(`02-remove-two-columns-from-table-with-two-columns`),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("01-add-two-columns-to-empty-table")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("02-remove-two-columns-from-table-with-two-columns")`,...y.parameters?.docs?.source}}},b=[`Case_01_add_two_columns_to_empty_table`,`Case_02_remove_two_columns_from_table_with_two_columns`]})))()}x();export{v as Case_01_add_two_columns_to_empty_table,y as Case_02_remove_two_columns_from_table_with_two_columns,b as __namedExportsOrder,g as default};