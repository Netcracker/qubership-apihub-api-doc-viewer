import{c as d,a as p,d as _,b as l}from"./ddlapi-diffs-utils-a6cf6d1e.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-a7bf7281.js";import"./DiffBadge-04d5bd8d.js";import"./IndexesNodeViewer-d4b52b40.js";/* empty css              */import"./build-from-ddl-browser-9bbf5fd5.js";import"./iframe-3ee68a39.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const E=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`,m=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,w=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,x=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`,C=Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/before.sql":E,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/before.sql":m}),f=Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/after.sql":w,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/after.sql":x}),S=d(C,f),T=p(S),X={..._,title:"DDL API Diffs Suite/Whole Indexes Changes Samples"},c=l(T),e=c("01-add-two-indexes-when-none-present"),t=c("02-remove-two-indexes-when-two-present");var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("01-add-two-indexes-when-none-present")',...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("02-remove-two-indexes-when-two-present")',...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["Case_01_add_two_indexes_when_none_present","Case_02_remove_two_indexes_when_two_present"];export{e as Case_01_add_two_indexes_when_none_present,t as Case_02_remove_two_indexes_when_two_present,B as __namedExportsOrder,X as default};
