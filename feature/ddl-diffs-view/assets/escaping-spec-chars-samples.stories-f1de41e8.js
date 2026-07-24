import{c as N,a as W,d as Y,b as j}from"./ddl-samples-common-32d42bd2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableViewer-462fec9a.js";import"./DiffBadge-a8af3c87.js";import"./index-11147e1a.js";import"./build-from-ddl-browser-7b15aa75.js";import"./iframe-1754a727.js";import"../sb-preview/runtime.js";const M=`CREATE TABLE t (
  label text DEFAULT E'path\\\\to\\\\file'
);
`,P=`CREATE TABLE t (
  label text DEFAULT E'before\\rafter'
);
`,z=`CREATE TABLE t (
  label text DEFAULT E'before\\r\\nafter'
);
`,H=`CREATE TABLE t (
  label text DEFAULT 'it''s fine'
);
`,J=`CREATE TABLE t (
  label text DEFAULT E'before\\nafter'
);
`,K=`CREATE TABLE t (
  label text DEFAULT '''fixed'''
);
`,X=`CREATE TABLE t (
  label text DEFAULT E'column-one\\tcolumn-two'
);
`,Z=`CREATE TABLE t (
  label text DEFAULT 'café — 日本語 — Ω — 🚀'
);
`,$=`CREATE TABLE t (
  first_name text,
  last_name text,
  label text GENERATED ALWAYS AS (lower(trim(first_name)) || ' ' || upper(last_name)) STORED
);
`,ee=`CREATE TABLE t (
  label text GENERATED ALWAYS AS ('''fixed''') STORED
);
`,ae=Object.assign({"../../../../samples/ddlapi/escaping-spec-chars/default-value-backslash/sample.sql":M,"../../../../samples/ddlapi/escaping-spec-chars/default-value-cr/sample.sql":P,"../../../../samples/ddlapi/escaping-spec-chars/default-value-crlf/sample.sql":z,"../../../../samples/ddlapi/escaping-spec-chars/default-value-embedded-single-quotes/sample.sql":H,"../../../../samples/ddlapi/escaping-spec-chars/default-value-lf/sample.sql":J,"../../../../samples/ddlapi/escaping-spec-chars/default-value-quoted/sample.sql":K,"../../../../samples/ddlapi/escaping-spec-chars/default-value-tab/sample.sql":X,"../../../../samples/ddlapi/escaping-spec-chars/default-value-unicode/sample.sql":Z,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-composite/sample.sql":$,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-quoted/sample.sql":ee}),se=N(ae),te=W(se),e=j(te),me={...Y,id:"ddlapi-suite-escaping-spec-chars",title:"DDL API Suite/Escaping Spec Chars"},a=e("default-value-backslash"),s=e("default-value-cr"),t=e("default-value-crlf"),r=e("default-value-embedded-single-quotes"),l=e("default-value-lf"),o=e("default-value-quoted"),c=e("default-value-tab"),u=e("default-value-unicode"),p=e("generated-expression-composite"),d=e("generated-expression-quoted");var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("default-value-backslash")',...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var f,E,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("default-value-cr")',...(_=(E=s.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var g,b,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("default-value-crlf")',...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var S,v,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("default-value-embedded-single-quotes")',...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var D,C,x;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("default-value-lf")',...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var L,q,h;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("default-value-quoted")',...(h=(q=o.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var y,V,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("default-value-tab")',...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var R,F,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("default-value-unicode")',...(U=(F=u.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var G,Q,k;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("generated-expression-composite")',...(k=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:k.source}}};var O,I,w;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("generated-expression-quoted")',...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const fe=["DefaultValueBackslash","DefaultValueCr","DefaultValueCrlf","DefaultValueEmbeddedSingleQuotes","DefaultValueLf","DefaultValueQuoted","DefaultValueTab","DefaultValueUnicode","GeneratedExpressionComposite","GeneratedExpressionQuoted"];export{a as DefaultValueBackslash,s as DefaultValueCr,t as DefaultValueCrlf,r as DefaultValueEmbeddedSingleQuotes,l as DefaultValueLf,o as DefaultValueQuoted,c as DefaultValueTab,u as DefaultValueUnicode,p as GeneratedExpressionComposite,d as GeneratedExpressionQuoted,fe as __namedExportsOrder,me as default};
