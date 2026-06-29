import{D as N}from"./DdlTableViewer-985110d6.js";import{c as W,a as Y,b as j}from"./ddl-samples-common-9b420777.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-5cb62018.js";import"./build-from-ddl-browser-eb082e48.js";import"./iframe-5b598a18.js";import"../sb-preview/runtime.js";const P=`CREATE TABLE t (
  label text DEFAULT E'path\\\\to\\\\file'
);
`,z=`CREATE TABLE t (
  label text DEFAULT E'before\\rafter'
);
`,H=`CREATE TABLE t (
  label text DEFAULT E'before\\r\\nafter'
);
`,J=`CREATE TABLE t (
  label text DEFAULT 'it''s fine'
);
`,K=`CREATE TABLE t (
  label text DEFAULT E'before\\nafter'
);
`,M=`CREATE TABLE t (
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
`,ae=Object.assign({"../../../../samples/ddlapi/escaping-spec-chars/default-value-backslash/sample.sql":P,"../../../../samples/ddlapi/escaping-spec-chars/default-value-cr/sample.sql":z,"../../../../samples/ddlapi/escaping-spec-chars/default-value-crlf/sample.sql":H,"../../../../samples/ddlapi/escaping-spec-chars/default-value-embedded-single-quotes/sample.sql":J,"../../../../samples/ddlapi/escaping-spec-chars/default-value-lf/sample.sql":K,"../../../../samples/ddlapi/escaping-spec-chars/default-value-quoted/sample.sql":M,"../../../../samples/ddlapi/escaping-spec-chars/default-value-tab/sample.sql":X,"../../../../samples/ddlapi/escaping-spec-chars/default-value-unicode/sample.sql":Z,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-composite/sample.sql":$,"../../../../samples/ddlapi/escaping-spec-chars/generated-expression-quoted/sample.sql":ee}),se=W(ae),te=Y(se),e=j(te),ie={id:"ddl-api-suite-escaping-spec-chars",title:"DDL API Suite/Escaping Spec Chars",component:N},a=e("default-value-backslash"),s=e("default-value-cr"),t=e("default-value-crlf"),r=e("default-value-embedded-single-quotes"),l=e("default-value-lf"),o=e("default-value-quoted"),c=e("default-value-tab"),u=e("default-value-unicode"),p=e("generated-expression-composite"),d=e("generated-expression-quoted");var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("default-value-backslash")',...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var f,E,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("default-value-cr")',...(_=(E=s.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var g,b,A;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("default-value-crlf")',...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var T,v,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("default-value-embedded-single-quotes")',...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var S,C,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("default-value-lf")',...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var L,q,h;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("default-value-quoted")',...(h=(q=o.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var V,y,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("default-value-tab")',...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var R,F,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("default-value-unicode")',...(U=(F=u.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var G,Q,k;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("generated-expression-composite")',...(k=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:k.source}}};var O,w,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("generated-expression-quoted")',...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const me=["DefaultValueBackslash","DefaultValueCr","DefaultValueCrlf","DefaultValueEmbeddedSingleQuotes","DefaultValueLf","DefaultValueQuoted","DefaultValueTab","DefaultValueUnicode","GeneratedExpressionComposite","GeneratedExpressionQuoted"];export{a as DefaultValueBackslash,s as DefaultValueCr,t as DefaultValueCrlf,r as DefaultValueEmbeddedSingleQuotes,l as DefaultValueLf,o as DefaultValueQuoted,c as DefaultValueTab,u as DefaultValueUnicode,p as GeneratedExpressionComposite,d as GeneratedExpressionQuoted,me as __namedExportsOrder,ie as default};
