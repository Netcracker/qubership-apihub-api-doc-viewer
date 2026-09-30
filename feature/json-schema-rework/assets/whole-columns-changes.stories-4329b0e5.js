import{c as n,d as i,a as _}from"./ddlapi-diffs-utils-47894b15.js";import{b as p}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-b5691702.js";import"./UxBadge-a3d5708d.js";import"./IndexesNodeViewer-04e95f65.js";/* empty css              */import"./build-from-ddl-browser-6c6ac1c8.js";import"./iframe-af39e7f4.js";import"../sb-preview/runtime.js";import"./test-diff-meta-keys-5677f54d.js";import"./ddl-story-navigation-f02fad16.js";import"./ddl-story-realm-utils-c0692776.js";const d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t ();
`,u=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`,f=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`,b=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t ();
`,E=Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/before.sql":d,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/before.sql":u}),w=Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/after.sql":f,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/after.sql":b}),C=n(E,w),S=p(C),q={...i,title:"DDL API Diffs Suite/Whole Columns Changes Samples"},c=_(S),e=c("01-add-two-columns-to-empty-table"),o=c("02-remove-two-columns-from-table-with-two-columns");var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-add-two-columns-to-empty-table")',...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,m,r;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("02-remove-two-columns-from-table-with-two-columns")',...(r=(m=o.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const x=["Case_01_add_two_columns_to_empty_table","Case_02_remove_two_columns_from_table_with_two_columns"];export{e as Case_01_add_two_columns_to_empty_table,o as Case_02_remove_two_columns_from_table_with_two_columns,x as __namedExportsOrder,q as default};
