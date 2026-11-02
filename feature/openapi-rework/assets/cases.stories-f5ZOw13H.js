import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{i as r,n as i,r as a,t as o}from"./ddlapi-diffs-utils-C1xClhYI.js";var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer NOT NULL
);

COMMENT ON TABLE public.t IS 'Customer orders';
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Order title';
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  status text NOT NULL DEFAULT 'active'
);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.mood AS ENUM ('happy', 'sad');

CREATE TABLE public.t (
  feeling public.mood NOT NULL
);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  status text NOT NULL,
  label text GENERATED ALWAYS AS (upper(status)) STORED
);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  title text NOT NULL
);

CREATE INDEX t_title_idx ON public.t (title);

COMMENT ON INDEX public.t_title_idx IS 'Lookup by title';
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer NOT NULL
);

COMMENT ON TABLE public.t IS 'Customer orders, one row per order';
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Order title shown to the customer';
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  status text NOT NULL DEFAULT 'draft'
);
`})))()}var T;function E(){return(E=e((()=>{T=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.mood AS ENUM ('happy', 'neutral');

CREATE TABLE public.t (
  feeling public.mood NOT NULL
);
`})))()}var D;function O(){return(O=e((()=>{D=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  status text NOT NULL,
  label text GENERATED ALWAYS AS (lower(status)) STORED
);
`})))()}var k;function A(){return(A=e((()=>{k=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  title text NOT NULL
);

CREATE INDEX t_title_idx ON public.t (title);

COMMENT ON INDEX public.t_title_idx IS 'Lookup by order title';
`})))()}var j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),r(),t(),j=n(o(Object.assign({"../../../../samples/ddlapi-diffs-display-mode-simple/01-table-description/before.sql":s,"../../../../samples/ddlapi-diffs-display-mode-simple/02-column-description/before.sql":l,"../../../../samples/ddlapi-diffs-display-mode-simple/03-column-default/before.sql":d,"../../../../samples/ddlapi-diffs-display-mode-simple/04-column-enum-values/before.sql":p,"../../../../samples/ddlapi-diffs-display-mode-simple/05-column-generated-expression/before.sql":h,"../../../../samples/ddlapi-diffs-display-mode-simple/06-index-description/before.sql":_}),Object.assign({"../../../../samples/ddlapi-diffs-display-mode-simple/01-table-description/after.sql":y,"../../../../samples/ddlapi-diffs-display-mode-simple/02-column-description/after.sql":x,"../../../../samples/ddlapi-diffs-display-mode-simple/03-column-default/after.sql":C,"../../../../samples/ddlapi-diffs-display-mode-simple/04-column-enum-values/after.sql":T,"../../../../samples/ddlapi-diffs-display-mode-simple/05-column-generated-expression/after.sql":D,"../../../../samples/ddlapi-diffs-display-mode-simple/06-index-description/after.sql":k}))),M=i(j),N={...a,id:`ddl-api-diffs-suite-display-mode-simple`,title:`DDL API Diffs Suite (Display Mode = simple)`},P=M(`01-table-description`),F=M(`02-column-description`),I=M(`03-column-default`),L=M(`04-column-enum-values`),R=M(`05-column-generated-expression`),z=M(`06-index-description`),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("01-table-description")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("02-column-description")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("03-column-default")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("04-column-enum-values")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("05-column-generated-expression")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("06-index-description")`,...z.parameters?.docs?.source}}},B=[`Case_01_table_description`,`Case_02_column_description`,`Case_03_column_default`,`Case_04_column_enum_values`,`Case_05_column_generated_expression`,`Case_06_index_description`]})))()}V();export{P as Case_01_table_description,F as Case_02_column_description,I as Case_03_column_default,L as Case_04_column_enum_values,R as Case_05_column_generated_expression,z as Case_06_index_description,B as __namedExportsOrder,N as default};