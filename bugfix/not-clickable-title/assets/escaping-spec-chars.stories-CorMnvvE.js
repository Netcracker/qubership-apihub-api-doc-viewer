import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./ddl-samples-cases--_ZpUtcP.js";import{n as a,r as o,t as s}from"./ddl-samples-common-D5u_KB_h.js";var c;function l(){return(l=e((()=>{c=`CREATE TABLE t (
  label text DEFAULT E'path\\\\to\\\\file'
);
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE TABLE t (
  label text DEFAULT E'before\\rafter'
);
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE TABLE t (
  label text DEFAULT E'before\\r\\nafter'
);
`})))()}var m;function h(){return(h=e((()=>{m=`CREATE TABLE t (
  label text DEFAULT 'it''s fine'
);
`})))()}var g;function _(){return(_=e((()=>{g=`CREATE TABLE t (
  label text DEFAULT E'before\\nafter'
);
`})))()}var v;function y(){return(y=e((()=>{v=`CREATE TABLE t (
  label text DEFAULT '''fixed'''
);
`})))()}var b;function x(){return(x=e((()=>{b=`CREATE TABLE t (
  label text DEFAULT E'column-one\\tcolumn-two'
);
`})))()}var S;function C(){return(C=e((()=>{S=`CREATE TABLE t (
  label text DEFAULT 'café — 日本語 — Ω — 🚀'
);
`})))()}var w;function T(){return(T=e((()=>{w=`CREATE TABLE t (
  first_name text,
  last_name text,
  label text GENERATED ALWAYS AS (lower(trim(first_name)) || ' ' || upper(last_name)) STORED
);
`})))()}var E;function D(){return(D=e((()=>{E=`CREATE TABLE t (
  label text GENERATED ALWAYS AS ('''fixed''') STORED
);
`})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),r(),t(),o(),O=i(Object.assign({"../../../../samples/ddlapi/escaping-spec-chars/default-value-backslash/sample.sql":c,"../../../../samples/ddlapi/escaping-spec-chars/default-value-cr/sample.sql":u,"../../../../samples/ddlapi/escaping-spec-chars/default-value-crlf/sample.sql":f,"../../../../samples/ddlapi/escaping-spec-chars/default-value-embedded-single-quotes/sample.sql":m,"../../../../samples/ddlapi/escaping-spec-chars/default-value-lf/sample.sql":g,"../../../../samples/ddlapi/escaping-spec-chars/default-value-quoted/sample.sql":v,"../../../../samples/ddlapi/escaping-spec-chars/default-value-tab/sample.sql":b,"../../../../samples/ddlapi/escaping-spec-chars/default-value-unicode/sample.sql":S,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-composite/sample.sql":w,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-quoted/sample.sql":E})),k=n(O),A=s(k),j={...a,id:`ddlapi-suite-escaping-spec-chars`,title:`DDL API Suite/Escaping Spec Chars`},M=A(`default-value-backslash`),N=A(`default-value-cr`),P=A(`default-value-crlf`),F=A(`default-value-embedded-single-quotes`),I=A(`default-value-lf`),L=A(`default-value-quoted`),R=A(`default-value-tab`),z=A(`default-value-unicode`),B=A(`generated-expression-composite`),V=A(`generated-expression-quoted`),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("default-value-backslash")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("default-value-cr")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("default-value-crlf")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("default-value-embedded-single-quotes")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("default-value-lf")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("default-value-quoted")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("default-value-tab")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("default-value-unicode")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("generated-expression-composite")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("generated-expression-quoted")`,...V.parameters?.docs?.source}}},H=[`DefaultValueBackslash`,`DefaultValueCr`,`DefaultValueCrlf`,`DefaultValueEmbeddedSingleQuotes`,`DefaultValueLf`,`DefaultValueQuoted`,`DefaultValueTab`,`DefaultValueUnicode`,`GeneratedExpressionComposite`,`GeneratedExpressionQuoted`]})))()}U();export{M as DefaultValueBackslash,N as DefaultValueCr,P as DefaultValueCrlf,F as DefaultValueEmbeddedSingleQuotes,I as DefaultValueLf,L as DefaultValueQuoted,R as DefaultValueTab,z as DefaultValueUnicode,B as GeneratedExpressionComposite,V as GeneratedExpressionQuoted,H as __namedExportsOrder,j as default};