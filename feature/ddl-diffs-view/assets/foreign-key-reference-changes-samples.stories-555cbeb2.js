import{c as V,a as W,d as X,b as Z}from"./ddlapi-diffs-utils-185b13e2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-e6207b70.js";import"./DiffBadge-a8af3c87.js";import"./index-11147e1a.js";/* empty css              */import"./build-from-ddl-browser-ae512415.js";import"./iframe-16dfb69a.js";import"../sb-preview/runtime.js";const $=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,ee=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,te=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,re=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target(id)
);
`,ce=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`,ae=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,ne=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,oe=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`,se=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`,ie=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,_e=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`,le=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`,de=`CREATE TABLE public.target (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(code)
);
`,Ee=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`,me=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`,pe=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target(id)
);
`,ue=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,ge=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`,fe=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(id)
);
`,be=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`,Re=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(id)
);
`,Ae=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(code)
);
`,Ce=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`,ye=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(code)
);
`,Te=Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/before.sql":$,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/before.sql":ee,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/before.sql":te,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/before.sql":re,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/before.sql":ce,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/before.sql":ae,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/before.sql":ne,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/before.sql":oe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/before.sql":se,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/before.sql":ie,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/before.sql":_e,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/before.sql":le}),ke=Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/after.sql":de,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/after.sql":Ee,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/after.sql":me,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/after.sql":pe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/after.sql":ue,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/after.sql":ge,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/after.sql":fe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/after.sql":be,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/after.sql":Re,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/after.sql":Ae,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/after.sql":Ce,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/after.sql":ye}),he=V(Te,ke),Se=W(he),Ne={...X,title:"DDL API Diffs Suite/Foreign Key Reference Changes Samples"},e=Z(Se),t=e("01-replaced-foreign-key-column"),r=e("02-replaced-foreign-key-table"),c=e("03-replaced-foreign-key-schema-public-to-custom"),a=e("04-replaced-foreign-key-schema-custom1-to-custom2"),n=e("05-replaced-foreign-key-schema-custom-to-public"),o=e("06-replaced-foreign-key-table-and-column"),s=e("07-replaced-foreign-key-schema-public-to-custom-and-table"),i=e("08-replaced-foreign-key-schema-custom-to-public-and-table"),_=e("09-replaced-foreign-key-schema-custom1-to-custom2-and-table"),l=e("10-replaced-foreign-key-schema-public-to-custom-table-and-column"),d=e("11-replaced-foreign-key-schema-custom-to-public-table-and-column"),E=e("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column");var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("01-replaced-foreign-key-column")',...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:'createCaseStory("02-replaced-foreign-key-table")',...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var R,A,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("03-replaced-foreign-key-schema-public-to-custom")',...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var y,T,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("04-replaced-foreign-key-schema-custom1-to-custom2")',...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var h,S,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("05-replaced-foreign-key-schema-custom-to-public")',...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var L,Y,M;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("06-replaced-foreign-key-table-and-column")',...(M=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var F,I,K;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("07-replaced-foreign-key-schema-public-to-custom-and-table")',...(K=(I=s.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var P,q,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("08-replaced-foreign-key-schema-custom-to-public-and-table")',...(v=(q=i.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var N,w,H;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("09-replaced-foreign-key-schema-custom1-to-custom2-and-table")',...(H=(w=_.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var D,O,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("10-replaced-foreign-key-schema-public-to-custom-table-and-column")',...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var x,z,G;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("11-replaced-foreign-key-schema-custom-to-public-table-and-column")',...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,U;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column")',...(U=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const we=["Case_01_replaced_foreign_key_column","Case_02_replaced_foreign_key_table","Case_03_replaced_foreign_key_schema_public_to_custom","Case_04_replaced_foreign_key_schema_custom1_to_custom2","Case_05_replaced_foreign_key_schema_custom_to_public","Case_06_replaced_foreign_key_table_and_column","Case_07_replaced_foreign_key_schema_public_to_custom_and_table","Case_08_replaced_foreign_key_schema_custom_to_public_and_table","Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table","Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column","Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column","Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column"];export{t as Case_01_replaced_foreign_key_column,r as Case_02_replaced_foreign_key_table,c as Case_03_replaced_foreign_key_schema_public_to_custom,a as Case_04_replaced_foreign_key_schema_custom1_to_custom2,n as Case_05_replaced_foreign_key_schema_custom_to_public,o as Case_06_replaced_foreign_key_table_and_column,s as Case_07_replaced_foreign_key_schema_public_to_custom_and_table,i as Case_08_replaced_foreign_key_schema_custom_to_public_and_table,_ as Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table,l as Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column,d as Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column,E as Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column,we as __namedExportsOrder,Ne as default};
