import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./ddl-samples-common-BOsts2r6.js";var s;function c(){return(c=e((()=>{s=`CREATE TABLE t (
  order_id integer,
  customer_id integer
);

CREATE INDEX idx_t_order ON t (order_id) INCLUDE (customer_id);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE TABLE t (
  name text
);

CREATE INDEX idx_t_name_lower ON t ((lower(name)));
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE TABLE t (
  user_id integer,
  org_id integer
);

CREATE UNIQUE INDEX idx_t_user_org ON t (user_id, org_id) NULLS NOT DISTINCT;
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE TABLE t (
  email text
);

CREATE INDEX idx_t_email ON t (email);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE TABLE t (
  code text
);

CREATE UNIQUE INDEX idx_t_code ON t (code);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE TABLE t (
  status text,
  owner_id integer
);

CREATE INDEX idx_t_active_owner ON t (owner_id) WHERE status = 'active';
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE INDEX idx_t_a_b ON t (a, b);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE UNIQUE INDEX idx_t_a_b ON t (a, b);
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE TABLE t (
  c1 integer
);

CREATE INDEX ON t (c1);
`})))()}var T;function E(){return(E=e((()=>{T=`CREATE TABLE t (
  c1 integer
);

CREATE UNIQUE INDEX ON t (c1);
`})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),i(),a(),D=n(Object.assign({"../../../../samples/ddlapi/indexes/covering-include/sample.sql":s,"../../../../samples/ddlapi/indexes/expression/sample.sql":l,"../../../../samples/ddlapi/indexes/nulls-not-distinct/sample.sql":d,"../../../../samples/ddlapi/indexes/one-column/sample.sql":p,"../../../../samples/ddlapi/indexes/one-column-unique/sample.sql":h,"../../../../samples/ddlapi/indexes/partial/sample.sql":_,"../../../../samples/ddlapi/indexes/two-columns/sample.sql":y,"../../../../samples/ddlapi/indexes/two-columns-unique/sample.sql":x,"../../../../samples/ddlapi/indexes/unnamed-index/sample.sql":C,"../../../../samples/ddlapi/indexes/unnamed-index-unique/sample.sql":T})),O=t(D),k=o(O),A={...r,id:`ddlapi-suite-indexes`,title:`DDL API Suite/Indexes`},j=k(`covering-include`),M=k(`expression`),N=k(`nulls-not-distinct`),P=k(`one-column`),F=k(`one-column-unique`),I=k(`partial`),L=k(`two-columns`),R=k(`two-columns-unique`),z=k(`unnamed-index`),B=k(`unnamed-index-unique`),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("covering-include")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("expression")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("nulls-not-distinct")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("one-column")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("one-column-unique")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("partial")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("two-columns")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("two-columns-unique")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("unnamed-index")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("unnamed-index-unique")`,...B.parameters?.docs?.source}}},V=[`CoveringInclude`,`Expression`,`NullsNotDistinct`,`OneColumn`,`OneColumnUnique`,`Partial`,`TwoColumns`,`TwoColumnsUnique`,`UnnamedIndex`,`UnnamedIndexUnique`]})))()}H();export{j as CoveringInclude,M as Expression,N as NullsNotDistinct,P as OneColumn,F as OneColumnUnique,I as Partial,L as TwoColumns,R as TwoColumnsUnique,z as UnnamedIndex,B as UnnamedIndexUnique,V as __namedExportsOrder,A as default};