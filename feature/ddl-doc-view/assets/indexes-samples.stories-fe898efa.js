import{D as U}from"./DdlTableViewer-750521b8.js";import{c as B,a as X,b as f}from"./ddl-samples-common-adee4b70.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-9c60b91e.js";import"./build-from-ddl-browser-9de55d63.js";import"./iframe-0655e00e.js";import"../sb-preview/runtime.js";const P=`CREATE TABLE t (
  order_id integer,
  customer_id integer
);

CREATE INDEX idx_t_order ON t (order_id) INCLUDE (customer_id);
`,Q=`CREATE TABLE t (
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
`,V=`CREATE TABLE t (
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
`,k=Object.assign({"../../../../samples/ddlapi/indexes/covering-include/sample.sql":P,"../../../../samples/ddlapi/indexes/expression/sample.sql":Q,"../../../../samples/ddlapi/indexes/nulls-not-distinct/sample.sql":F,"../../../../samples/ddlapi/indexes/one-column-unique/sample.sql":j,"../../../../samples/ddlapi/indexes/one-column/sample.sql":H,"../../../../samples/ddlapi/indexes/partial/sample.sql":V,"../../../../samples/ddlapi/indexes/two-columns-unique/sample.sql":W,"../../../../samples/ddlapi/indexes/two-columns/sample.sql":h}),z=B(k),G=X(z),e=f(G),oe={id:"ddl-api-suite-indexes",title:"DDL API Suite/Indexes",component:U},s=e("covering-include"),o=e("expression"),t=e("nulls-not-distinct"),r=e("one-column"),n=e("one-column-unique"),a=e("partial"),i=e("two-columns"),c=e("two-columns-unique");var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("covering-include")',...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("expression")',...(_=(u=o.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var E,C,g;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("nulls-not-distinct")',...(g=(C=t.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,x,N;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("one-column")',...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var A,S,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("one-column-unique")',...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var q,D,b;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("partial")',...(b=(D=a.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var R,w,v;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("two-columns")',...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var O,y,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("two-columns-unique")',...(L=(y=c.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const te=["CoveringInclude","Expression","NullsNotDistinct","OneColumn","OneColumnUnique","Partial","TwoColumns","TwoColumnsUnique"];export{s as CoveringInclude,o as Expression,t as NullsNotDistinct,r as OneColumn,n as OneColumnUnique,a as Partial,i as TwoColumns,c as TwoColumnsUnique,te as __namedExportsOrder,oe as default};
