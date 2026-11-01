import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./ddl-samples-cases--_ZpUtcP.js";import{n as a,r as o,t as s}from"./ddl-samples-common-xWs_Q1-e.js";var c;function l(){return(l=e((()=>{c=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer NOT NULL
);

COMMENT ON TABLE public.t IS 'Customer orders';
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Order title';
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  status text NOT NULL DEFAULT 'active'
);
`})))()}var m;function h(){return(h=e((()=>{m=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.mood AS ENUM ('happy', 'sad');

CREATE TABLE public.t (
  feeling public.mood NOT NULL
);
`})))()}var g;function _(){return(_=e((()=>{g=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  status text NOT NULL,
  label text GENERATED ALWAYS AS (upper(status)) STORED
);
`})))()}var v;function y(){return(y=e((()=>{v=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  title text NOT NULL
);

CREATE INDEX t_title_idx ON public.t (title);

COMMENT ON INDEX public.t_title_idx IS 'Lookup by title';
`})))()}var b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{l(),d(),p(),h(),_(),y(),r(),t(),o(),b=n(i(Object.assign({"../../../../samples/ddlapi-display-mode-simple/01-table-description/sample.sql":c,"../../../../samples/ddlapi-display-mode-simple/02-column-description/sample.sql":u,"../../../../samples/ddlapi-display-mode-simple/03-column-default/sample.sql":f,"../../../../samples/ddlapi-display-mode-simple/04-column-enum-values/sample.sql":m,"../../../../samples/ddlapi-display-mode-simple/05-column-generated-expression/sample.sql":g,"../../../../samples/ddlapi-display-mode-simple/06-index-description/sample.sql":v}))),x=s(b),S={...a,id:`ddl-api-suite-display-mode-simple`,title:`DDL API Suite (Display Mode = simple)`},C=x(`01-table-description`),w=x(`02-column-description`),T=x(`03-column-default`),E=x(`04-column-enum-values`),D=x(`05-column-generated-expression`),O=x(`06-index-description`),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("01-table-description")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("02-column-description")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("03-column-default")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("04-column-enum-values")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("05-column-generated-expression")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("06-index-description")`,...O.parameters?.docs?.source}}},k=[`Case_01_table_description`,`Case_02_column_description`,`Case_03_column_default`,`Case_04_column_enum_values`,`Case_05_column_generated_expression`,`Case_06_index_description`]})))()}A();export{C as Case_01_table_description,w as Case_02_column_description,T as Case_03_column_default,E as Case_04_column_enum_values,D as Case_05_column_generated_expression,O as Case_06_index_description,k as __namedExportsOrder,S as default};