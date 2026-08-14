import{c as n,a as i,d as _,b as p}from"./ddlapi-diffs-utils-e33f1d06.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-78b6311e.js";import"./index-71f1bfe0.js";import"./IndexesNodeViewer-05731b79.js";import"./take-diff-side-background-color-85ec54fb.js";import"./DiffBadge-51a3ec54.js";/* empty css              */import"./build-from-ddl-browser-2ed2d276.js";import"./iframe-dbd39598.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const d=`CREATE SCHEMA IF NOT EXISTS public;

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
`,E=Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/before.sql":d,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/before.sql":u}),w=Object.assign({"../../../../samples/ddlapi-diffs/whole-columns-changes/01-add-two-columns-to-empty-table/after.sql":f,"../../../../samples/ddlapi-diffs/whole-columns-changes/02-remove-two-columns-from-table-with-two-columns/after.sql":b}),C=n(E,w),S=i(C),q={..._,title:"DDL API Diffs Suite/Whole Columns Changes Samples"},r=p(S),e=r("01-add-two-columns-to-empty-table"),o=r("02-remove-two-columns-from-table-with-two-columns");var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-add-two-columns-to-empty-table")',...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("02-remove-two-columns-from-table-with-two-columns")',...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const x=["Case_01_add_two_columns_to_empty_table","Case_02_remove_two_columns_from_table_with_two_columns"];export{e as Case_01_add_two_columns_to_empty_table,o as Case_02_remove_two_columns_from_table_with_two_columns,x as __namedExportsOrder,q as default};
