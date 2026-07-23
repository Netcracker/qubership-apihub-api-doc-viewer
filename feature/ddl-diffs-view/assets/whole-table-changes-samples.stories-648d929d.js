import{c as m,a as b,d as f,b as h}from"./ddlapi-diffs-utils-5ade2878.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-45321229.js";import"./DiffBadge-a8af3c87.js";import"./index-6638dd2d.js";/* empty css              */import"./build-from-ddl-browser-f562cbbf.js";import"./iframe-b78e3ccf.js";import"../sb-preview/runtime.js";const E=`CREATE SCHEMA IF NOT EXISTS public;
`,S=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,C=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,g=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,T=`CREATE SCHEMA IF NOT EXISTS public;
`,u=`CREATE SCHEMA IF NOT EXISTS audit;

CREATE TABLE audit.t (
  id integer
);
`,y=Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/before.sql":E,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/before.sql":S,"../../../../samples/ddlapi-diffs/whole-table-changes/03-changed-schema-of-table/before.sql":C}),A=Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/after.sql":g,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/after.sql":T,"../../../../samples/ddlapi-diffs/whole-table-changes/03-changed-schema-of-table/after.sql":u}),w=m(y,A),I=b(w),X={...f,title:"DDL API Diffs Suite/Whole Table Changes Samples"},l=h(I),e=l("01-wholly-added-table"),a=l("02-wholly-removed-table"),s=l("03-changed-schema-of-table");var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-wholly-added-table")',...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var d,c,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'createCaseStory("02-wholly-removed-table")',...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var n,_,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("03-changed-schema-of-table")',...(p=(_=s.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};const L=["Case_01_wholly_added_table","Case_02_wholly_removed_table","Case_03_changed_schema_of_table"];export{e as Case_01_wholly_added_table,a as Case_02_wholly_removed_table,s as Case_03_changed_schema_of_table,L as __namedExportsOrder,X as default};
