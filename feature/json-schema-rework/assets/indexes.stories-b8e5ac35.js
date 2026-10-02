import{c as H}from"./ddl-samples-cases-39a6e1ba.js";import{b as M}from"./sample-cases-8c510854.js";import{d as W,c as h}from"./ddl-samples-common-80e06486.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableViewer-d84f848c.js";import"./UxBadge-7cc75759.js";import"./IndexesNodeViewer-6f9d01f2.js";import"./build-from-ddl-browser-9313e192.js";import"./iframe-1077a8eb.js";import"../sb-preview/runtime.js";import"./ddl-story-navigation-f02fad16.js";const k=`CREATE TABLE t (
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
`,se=Object.assign({"../../../../samples/ddlapi/indexes/covering-include/sample.sql":k,"../../../../samples/ddlapi/indexes/expression/sample.sql":z,"../../../../samples/ddlapi/indexes/nulls-not-distinct/sample.sql":G,"../../../../samples/ddlapi/indexes/one-column-unique/sample.sql":J,"../../../../samples/ddlapi/indexes/one-column/sample.sql":K,"../../../../samples/ddlapi/indexes/partial/sample.sql":V,"../../../../samples/ddlapi/indexes/two-columns-unique/sample.sql":Y,"../../../../samples/ddlapi/indexes/two-columns/sample.sql":Z,"../../../../samples/ddlapi/indexes/unnamed-index-unique/sample.sql":$,"../../../../samples/ddlapi/indexes/unnamed-index/sample.sql":ee}),ne=H(se),re=M(ne),e=h(re),Ce={...W,id:"ddlapi-suite-indexes",title:"DDL API Suite/Indexes"},s=e("covering-include"),n=e("expression"),r=e("nulls-not-distinct"),t=e("one-column"),o=e("one-column-unique"),a=e("partial"),i=e("two-columns"),c=e("two-columns-unique"),d=e("unnamed-index"),m=e("unnamed-index-unique");var l,u,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("covering-include")',...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var _,E,C;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("expression")',...(C=(E=n.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var x,g,T;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("nulls-not-distinct")',...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var N,A,S;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("one-column")',...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var I,q,R;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("one-column-unique")',...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var U,b,v;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("partial")',...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var D,O,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("two-columns")',...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var w,L,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("two-columns-unique")',...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var X,f,Q;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("unnamed-index")',...(Q=(f=d.parameters)==null?void 0:f.docs)==null?void 0:Q.source}}};var P,F,j;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("unnamed-index-unique")',...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const xe=["CoveringInclude","Expression","NullsNotDistinct","OneColumn","OneColumnUnique","Partial","TwoColumns","TwoColumnsUnique","UnnamedIndex","UnnamedIndexUnique"];export{s as CoveringInclude,n as Expression,r as NullsNotDistinct,t as OneColumn,o as OneColumnUnique,a as Partial,i as TwoColumns,c as TwoColumnsUnique,d as UnnamedIndex,m as UnnamedIndexUnique,xe as __namedExportsOrder,Ce as default};
