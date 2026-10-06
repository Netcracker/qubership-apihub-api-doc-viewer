import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./ddl-samples-cases--_ZpUtcP.js";import{n as a,r as o,t as s}from"./ddl-samples-common-BJDSq72N.js";var c;function l(){return(l=e((()=>{c=`CREATE TABLE t (
  order_id integer,
  customer_id integer
);

CREATE INDEX idx_t_order ON t (order_id) INCLUDE (customer_id);
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE TABLE t (
  name text
);

CREATE INDEX idx_t_name_lower ON t ((lower(name)));
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE TABLE t (
  user_id integer,
  org_id integer
);

CREATE UNIQUE INDEX idx_t_user_org ON t (user_id, org_id) NULLS NOT DISTINCT;
`})))()}var m;function h(){return(h=e((()=>{m=`CREATE TABLE t (
  email text
);

CREATE INDEX idx_t_email ON t (email);
`})))()}var g;function _(){return(_=e((()=>{g=`CREATE TABLE t (
  code text
);

CREATE UNIQUE INDEX idx_t_code ON t (code);
`})))()}var v;function y(){return(y=e((()=>{v=`CREATE TABLE t (
  status text,
  owner_id integer
);

CREATE INDEX idx_t_active_owner ON t (owner_id) WHERE status = 'active';
`})))()}var b;function x(){return(x=e((()=>{b=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE INDEX idx_t_a_b ON t (a, b);
`})))()}var S;function C(){return(C=e((()=>{S=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE UNIQUE INDEX idx_t_a_b ON t (a, b);
`})))()}var w;function T(){return(T=e((()=>{w=`CREATE TABLE t (
  c1 integer
);

CREATE INDEX ON t (c1);
`})))()}var E;function D(){return(D=e((()=>{E=`CREATE TABLE t (
  c1 integer
);

CREATE UNIQUE INDEX ON t (c1);
`})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),r(),t(),o(),O=i(Object.assign({"../../../../samples/ddlapi/indexes/covering-include/sample.sql":c,"../../../../samples/ddlapi/indexes/expression/sample.sql":u,"../../../../samples/ddlapi/indexes/nulls-not-distinct/sample.sql":f,"../../../../samples/ddlapi/indexes/one-column/sample.sql":m,"../../../../samples/ddlapi/indexes/one-column-unique/sample.sql":g,"../../../../samples/ddlapi/indexes/partial/sample.sql":v,"../../../../samples/ddlapi/indexes/two-columns/sample.sql":b,"../../../../samples/ddlapi/indexes/two-columns-unique/sample.sql":S,"../../../../samples/ddlapi/indexes/unnamed-index/sample.sql":w,"../../../../samples/ddlapi/indexes/unnamed-index-unique/sample.sql":E})),k=n(O),A=s(k),j={...a,id:`ddlapi-suite-indexes`,title:`DDL API Suite/Indexes`},M=A(`covering-include`),N=A(`expression`),P=A(`nulls-not-distinct`),F=A(`one-column`),I=A(`one-column-unique`),L=A(`partial`),R=A(`two-columns`),z=A(`two-columns-unique`),B=A(`unnamed-index`),V=A(`unnamed-index-unique`),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("covering-include")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("expression")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("nulls-not-distinct")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("one-column")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("one-column-unique")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("partial")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("two-columns")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("two-columns-unique")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("unnamed-index")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("unnamed-index-unique")`,...V.parameters?.docs?.source}}},H=[`CoveringInclude`,`Expression`,`NullsNotDistinct`,`OneColumn`,`OneColumnUnique`,`Partial`,`TwoColumns`,`TwoColumnsUnique`,`UnnamedIndex`,`UnnamedIndexUnique`]})))()}U();export{M as CoveringInclude,N as Expression,P as NullsNotDistinct,F as OneColumn,I as OneColumnUnique,L as Partial,R as TwoColumns,z as TwoColumnsUnique,B as UnnamedIndex,V as UnnamedIndexUnique,H as __namedExportsOrder,j as default};