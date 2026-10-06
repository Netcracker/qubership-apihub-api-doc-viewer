import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{i as r,n as i,r as a,t as o}from"./ddlapi-diffs-utils-CvkUrkAu.js";var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

CREATE INDEX idx_t_id ON public.t (id);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

CREATE INDEX idx_t_id ON public.t (id);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{c(),u(),f(),m(),g(),v(),b(),S(),r(),t(),C=o(Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/before.sql":s,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/before.sql":l,"../../../../samples/ddlapi-diffs/whole-table-changes/03-wholly-added-table-with-index/before.sql":d,"../../../../samples/ddlapi-diffs/whole-table-changes/04-wholly-removed-table-with-index/before.sql":p}),Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/after.sql":h,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/after.sql":_,"../../../../samples/ddlapi-diffs/whole-table-changes/03-wholly-added-table-with-index/after.sql":y,"../../../../samples/ddlapi-diffs/whole-table-changes/04-wholly-removed-table-with-index/after.sql":x})),w=n(C),T={...a,title:`DDL API Diffs Suite/Whole Table Changes Samples`},E=i(w),D=E(`01-wholly-added-table`),O=E(`02-wholly-removed-table`),k=E(`03-wholly-added-table-with-index`),A=E(`04-wholly-removed-table-with-index`),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("01-wholly-added-table")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("02-wholly-removed-table")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("03-wholly-added-table-with-index")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("04-wholly-removed-table-with-index")`,...A.parameters?.docs?.source}}},j=[`Case_01_wholly_added_table`,`Case_02_wholly_removed_table`,`Case_03_wholly_added_table_with_index`,`Case_04_wholly_removed_table_with_index`]})))()}M();export{D as Case_01_wholly_added_table,O as Case_02_wholly_removed_table,k as Case_03_wholly_added_table_with_index,A as Case_04_wholly_removed_table_with_index,j as __namedExportsOrder,T as default};