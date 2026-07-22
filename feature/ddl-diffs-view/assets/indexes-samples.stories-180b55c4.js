import{c as U,a as B,d as X,b as P}from"./ddl-samples-common-94a0deb8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableViewer-7c4bbf4d.js";import"./DiffBadge-20c083b3.js";import"./index-ea5de852.js";import"./build-from-ddl-browser-724a8cec.js";import"./iframe-5c8fad79.js";import"../sb-preview/runtime.js";const Q=`CREATE TABLE t (
  order_id integer,
  customer_id integer
);

CREATE INDEX idx_t_order ON t (order_id) INCLUDE (customer_id);
`,f=`CREATE TABLE t (
  name text
);

CREATE INDEX idx_t_name_lower ON t ((lower(name)));
`,F=`CREATE TABLE t (
  user_id integer,
  org_id integer
);

CREATE UNIQUE INDEX idx_t_user_org ON t (user_id, org_id) NULLS NOT DISTINCT;
`,j=`CREATE TABLE t (
  code text
);

CREATE UNIQUE INDEX idx_t_code ON t (code);
`,H=`CREATE TABLE t (
  email text
);

CREATE INDEX idx_t_email ON t (email);
`,M=`CREATE TABLE t (
  status text,
  owner_id integer
);

CREATE INDEX idx_t_active_owner ON t (owner_id) WHERE status = 'active';
`,W=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE UNIQUE INDEX idx_t_a_b ON t (a, b);
`,h=`CREATE TABLE t (
  a integer,
  b integer
);

CREATE INDEX idx_t_a_b ON t (a, b);
`,k=Object.assign({"../../../../samples/ddlapi/indexes/covering-include/sample.sql":Q,"../../../../samples/ddlapi/indexes/expression/sample.sql":f,"../../../../samples/ddlapi/indexes/nulls-not-distinct/sample.sql":F,"../../../../samples/ddlapi/indexes/one-column-unique/sample.sql":j,"../../../../samples/ddlapi/indexes/one-column/sample.sql":H,"../../../../samples/ddlapi/indexes/partial/sample.sql":M,"../../../../samples/ddlapi/indexes/two-columns-unique/sample.sql":W,"../../../../samples/ddlapi/indexes/two-columns/sample.sql":h}),z=U(k),G=B(z),e=P(G),oe={...X,id:"ddlapi-suite-indexes",title:"DDL API Suite/Indexes"},s=e("covering-include"),t=e("expression"),o=e("nulls-not-distinct"),r=e("one-column"),n=e("one-column-unique"),a=e("partial"),i=e("two-columns"),c=e("two-columns-unique");var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("covering-include")',...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,_;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("expression")',...(_=(u=t.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var E,C,g;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("nulls-not-distinct")',...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,x,N;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("one-column")',...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var A,S,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("one-column-unique")',...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var q,R,b;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("partial")',...(b=(R=a.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var D,v,w;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("two-columns")',...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var O,y,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("two-columns-unique")',...(L=(y=c.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const re=["CoveringInclude","Expression","NullsNotDistinct","OneColumn","OneColumnUnique","Partial","TwoColumns","TwoColumnsUnique"];export{s as CoveringInclude,t as Expression,o as NullsNotDistinct,r as OneColumn,n as OneColumnUnique,a as Partial,i as TwoColumns,c as TwoColumnsUnique,re as __namedExportsOrder,oe as default};
