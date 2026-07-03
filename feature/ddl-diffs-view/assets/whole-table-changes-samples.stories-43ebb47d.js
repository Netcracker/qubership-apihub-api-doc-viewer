import{D as p}from"./DdlTableDiffsViewer-06cb784a.js";import{c as b,a as f,b as h}from"./ddlapi-diffs-utils-d96c4800.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-d0e51bff.js";import"./index-abe66225.js";/* empty css              */import"./build-from-ddl-browser-23601a01.js";import"./iframe-6018cafb.js";import"../sb-preview/runtime.js";const E=`CREATE SCHEMA IF NOT EXISTS public;
`,C=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,S=`CREATE SCHEMA IF NOT EXISTS public;

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
`,A=Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/before.sql":E,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/before.sql":C,"../../../../samples/ddlapi-diffs/whole-table-changes/03-changed-schema-of-table/before.sql":S}),y=Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/after.sql":g,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/after.sql":T,"../../../../samples/ddlapi-diffs/whole-table-changes/03-changed-schema-of-table/after.sql":u}),w=b(A,y),I=f(w),X={title:"DDL API Diffs Suite/Whole Table Changes Samples",component:p},l=h(I),e=l("01-wholly-added-table"),a=l("02-wholly-removed-table"),s=l("03-changed-schema-of-table");var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-wholly-added-table")',...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("02-wholly-removed-table")',...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var n,_,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("03-changed-schema-of-table")',...(m=(_=s.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const L=["Case_01_wholly_added_table","Case_02_wholly_removed_table","Case_03_changed_schema_of_table"];export{e as Case_01_wholly_added_table,a as Case_02_wholly_removed_table,s as Case_03_changed_schema_of_table,L as __namedExportsOrder,X as default};
