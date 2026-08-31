import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./ddlapi-diffs-utils-CczPNSSy.js";var o;function s(){return(s=e((()=>{o=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var c;function l(){return(l=e((()=>{c=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

CREATE INDEX idx_t_id ON public.t (id);
`})))()}var m;function h(){return(h=e((()=>{m=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var g;function _(){return(_=e((()=>{g=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var v;function y(){return(y=e((()=>{v=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

CREATE INDEX idx_t_id ON public.t (id);
`})))()}var b;function x(){return(x=e((()=>{b=`CREATE SCHEMA IF NOT EXISTS public;
`})))()}var S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),l(),d(),p(),h(),_(),y(),x(),t(),S=a(Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/before.sql":o,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/before.sql":c,"../../../../samples/ddlapi-diffs/whole-table-changes/03-wholly-added-table-with-index/before.sql":u,"../../../../samples/ddlapi-diffs/whole-table-changes/04-wholly-removed-table-with-index/before.sql":f}),Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/after.sql":m,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/after.sql":g,"../../../../samples/ddlapi-diffs/whole-table-changes/03-wholly-added-table-with-index/after.sql":v,"../../../../samples/ddlapi-diffs/whole-table-changes/04-wholly-removed-table-with-index/after.sql":b})),C=i(S),w={...n,title:`DDL API Diffs Suite/Whole Table Changes Samples`},T=r(C),E=T(`01-wholly-added-table`),D=T(`02-wholly-removed-table`),O=T(`03-wholly-added-table-with-index`),k=T(`04-wholly-removed-table-with-index`),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("01-wholly-added-table")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("02-wholly-removed-table")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("03-wholly-added-table-with-index")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("04-wholly-removed-table-with-index")`,...k.parameters?.docs?.source}}},A=[`Case_01_wholly_added_table`,`Case_02_wholly_removed_table`,`Case_03_wholly_added_table_with_index`,`Case_04_wholly_removed_table_with_index`]})))()}j();export{E as Case_01_wholly_added_table,D as Case_02_wholly_removed_table,O as Case_03_wholly_added_table_with_index,k as Case_04_wholly_removed_table_with_index,A as __namedExportsOrder,w as default};