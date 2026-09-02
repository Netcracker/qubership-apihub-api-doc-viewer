import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./ddl-samples-common-DXUvEst_.js";var s;function c(){return(c=e((()=>{s=`CREATE TABLE t (
  label text DEFAULT E'path\\\\to\\\\file'
);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE TABLE t (
  label text DEFAULT E'before\\rafter'
);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE TABLE t (
  label text DEFAULT E'before\\r\\nafter'
);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE TABLE t (
  label text DEFAULT 'it''s fine'
);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE TABLE t (
  label text DEFAULT E'before\\nafter'
);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE TABLE t (
  label text DEFAULT '''fixed'''
);
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE TABLE t (
  label text DEFAULT E'column-one\\tcolumn-two'
);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE TABLE t (
  label text DEFAULT 'café — 日本語 — Ω — 🚀'
);
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE TABLE t (
  first_name text,
  last_name text,
  label text GENERATED ALWAYS AS (lower(trim(first_name)) || ' ' || upper(last_name)) STORED
);
`})))()}var T;function E(){return(E=e((()=>{T=`CREATE TABLE t (
  label text GENERATED ALWAYS AS ('''fixed''') STORED
);
`})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),i(),a(),D=n(Object.assign({"../../../../samples/ddlapi/escaping-spec-chars/default-value-backslash/sample.sql":s,"../../../../samples/ddlapi/escaping-spec-chars/default-value-cr/sample.sql":l,"../../../../samples/ddlapi/escaping-spec-chars/default-value-crlf/sample.sql":d,"../../../../samples/ddlapi/escaping-spec-chars/default-value-embedded-single-quotes/sample.sql":p,"../../../../samples/ddlapi/escaping-spec-chars/default-value-lf/sample.sql":h,"../../../../samples/ddlapi/escaping-spec-chars/default-value-quoted/sample.sql":_,"../../../../samples/ddlapi/escaping-spec-chars/default-value-tab/sample.sql":y,"../../../../samples/ddlapi/escaping-spec-chars/default-value-unicode/sample.sql":x,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-composite/sample.sql":C,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-quoted/sample.sql":T})),O=t(D),k=o(O),A={...r,id:`ddlapi-suite-escaping-spec-chars`,title:`DDL API Suite/Escaping Spec Chars`},j=k(`default-value-backslash`),M=k(`default-value-cr`),N=k(`default-value-crlf`),P=k(`default-value-embedded-single-quotes`),F=k(`default-value-lf`),I=k(`default-value-quoted`),L=k(`default-value-tab`),R=k(`default-value-unicode`),z=k(`generated-expression-composite`),B=k(`generated-expression-quoted`),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("default-value-backslash")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("default-value-cr")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("default-value-crlf")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("default-value-embedded-single-quotes")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("default-value-lf")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("default-value-quoted")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("default-value-tab")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("default-value-unicode")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("generated-expression-composite")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("generated-expression-quoted")`,...B.parameters?.docs?.source}}},V=[`DefaultValueBackslash`,`DefaultValueCr`,`DefaultValueCrlf`,`DefaultValueEmbeddedSingleQuotes`,`DefaultValueLf`,`DefaultValueQuoted`,`DefaultValueTab`,`DefaultValueUnicode`,`GeneratedExpressionComposite`,`GeneratedExpressionQuoted`]})))()}H();export{j as DefaultValueBackslash,M as DefaultValueCr,N as DefaultValueCrlf,P as DefaultValueEmbeddedSingleQuotes,F as DefaultValueLf,I as DefaultValueQuoted,L as DefaultValueTab,R as DefaultValueUnicode,z as GeneratedExpressionComposite,B as GeneratedExpressionQuoted,V as __namedExportsOrder,A as default};