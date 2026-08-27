import{c as H,a as M,d as W,b as h}from"./ddl-samples-common-9bde0d82.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableViewer-72898774.js";import"./DiffBadge-04d5bd8d.js";import"./IndexesNodeViewer-d4b52b40.js";import"./build-from-ddl-browser-9bbf5fd5.js";import"./iframe-3ee68a39.js";import"../sb-preview/runtime.js";const k=`CREATE TABLE t (
  order_id integer,
  customer_id integer
);

CREATE INDEX idx_t_order ON t (order_id) INCLUDE (customer_id);
`,z=`CREATE TABLE t (
  name text
);

CREATE INDEX idx_t_name_lower ON t ((lower(name)));
`,G=`CREATE TABLE t (
  user_id integer,
  org_id integer
);

CREATE UNIQUE INDEX idx_t_user_org ON t (user_id, org_id) NULLS NOT DISTINCT;
`,J=`CREATE TABLE t (
  code text
);

CREATE UNIQUE INDEX idx_t_code ON t (code);
`,K=`CREATE TABLE t (
  email text
);

CREATE INDEX idx_t_email ON t (email);
`,V=`CREATE TABLE t (
  status text,
  owner_id integer
);

CREATE INDEX idx_t_active_owner ON t (owner_id) WHERE status = 'active';
`,Y=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE UNIQUE INDEX idx_t_a_b ON t (a, b);
`,Z=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE INDEX idx_t_a_b ON t (a, b);
`,$=`CREATE TABLE t (
  c1 integer
);

CREATE UNIQUE INDEX ON t (c1);
`,ee=`CREATE TABLE t (
  c1 integer
);

CREATE INDEX ON t (c1);
`,se=Object.assign({"../../../../samples/ddlapi/indexes/covering-include/sample.sql":k,"../../../../samples/ddlapi/indexes/expression/sample.sql":z,"../../../../samples/ddlapi/indexes/nulls-not-distinct/sample.sql":G,"../../../../samples/ddlapi/indexes/one-column-unique/sample.sql":J,"../../../../samples/ddlapi/indexes/one-column/sample.sql":K,"../../../../samples/ddlapi/indexes/partial/sample.sql":V,"../../../../samples/ddlapi/indexes/two-columns-unique/sample.sql":Y,"../../../../samples/ddlapi/indexes/two-columns/sample.sql":Z,"../../../../samples/ddlapi/indexes/unnamed-index-unique/sample.sql":$,"../../../../samples/ddlapi/indexes/unnamed-index/sample.sql":ee}),ne=H(se),re=M(ne),e=h(re),pe={...W,id:"ddlapi-suite-indexes",title:"DDL API Suite/Indexes"},s=e("covering-include"),n=e("expression"),r=e("nulls-not-distinct"),t=e("one-column"),a=e("one-column-unique"),o=e("partial"),i=e("two-columns"),c=e("two-columns-unique"),d=e("unnamed-index"),l=e("unnamed-index-unique");var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("covering-include")',...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var _,E,C;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("expression")',...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var x,g,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("nulls-not-distinct")',...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var N,A,S;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("one-column")',...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var I,q,R;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("one-column-unique")',...(R=(q=a.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var U,b,D;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("partial")',...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var v,O,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("two-columns")',...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var w,L,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("two-columns-unique")',...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var X,Q,P;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("unnamed-index")',...(P=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:P.source}}};var f,F,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("unnamed-index-unique")',...(j=(F=l.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const _e=["CoveringInclude","Expression","NullsNotDistinct","OneColumn","OneColumnUnique","Partial","TwoColumns","TwoColumnsUnique","UnnamedIndex","UnnamedIndexUnique"];export{s as CoveringInclude,n as Expression,r as NullsNotDistinct,t as OneColumn,a as OneColumnUnique,o as Partial,i as TwoColumns,c as TwoColumnsUnique,d as UnnamedIndex,l as UnnamedIndexUnique,_e as __namedExportsOrder,pe as default};
