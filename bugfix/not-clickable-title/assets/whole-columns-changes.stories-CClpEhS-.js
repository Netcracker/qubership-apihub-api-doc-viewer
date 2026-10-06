import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{i as r,n as i,r as a,t as o}from"./ddlapi-diffs-utils-CvkUrkAu.js";var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t ();
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t ();
`})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{c(),u(),f(),m(),r(),t(),h=o(Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/before.sql":s,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/before.sql":l}),Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/after.sql":d,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/after.sql":p})),g=n(h),_={...a,title:`DDL API Diffs Suite/Whole Columns Changes Samples`},v=i(g),y=v(`01-add-two-columns-to-empty-table`),b=v(`02-remove-two-columns-from-table-with-two-columns`),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("01-add-two-columns-to-empty-table")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("02-remove-two-columns-from-table-with-two-columns")`,...b.parameters?.docs?.source}}},x=[`Case_01_add_two_columns_to_empty_table`,`Case_02_remove_two_columns_from_table_with_two_columns`]})))()}S();export{y as Case_01_add_two_columns_to_empty_table,b as Case_02_remove_two_columns_from_table_with_two_columns,x as __namedExportsOrder,_ as default};