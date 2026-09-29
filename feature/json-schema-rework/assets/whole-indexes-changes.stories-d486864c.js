import{c as p,d,a as _}from"./ddlapi-diffs-utils-b72c3e33.js";import{b as l}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-5f4cf09a.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";/* empty css              */import"./build-from-ddl-browser-5858486c.js";import"./iframe-1d9babc1.js";import"../sb-preview/runtime.js";import"./test-diff-meta-keys-5677f54d.js";import"./ddl-story-navigation-f02fad16.js";import"./ddl-story-realm-utils-c0692776.js";const m=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  c1 integer,
  c2 text
);
`,E=`CREATE SCHEMA IF NOT EXISTS public;

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
`,C=Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/before.sql":m,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/before.sql":E}),f=Object.assign({"../../../../samples/ddlapi-diffs/whole-indexes-changes/01-add-two-indexes-when-none-present/after.sql":w,"../../../../samples/ddlapi-diffs/whole-indexes-changes/02-remove-two-indexes-when-two-present/after.sql":x}),S=p(C,f),T=l(S),F={...d,title:"DDL API Diffs Suite/Whole Indexes Changes Samples"},c=_(T),e=c("01-add-two-indexes-when-none-present"),t=c("02-remove-two-indexes-when-two-present");var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'createCaseStory("01-add-two-indexes-when-none-present")',...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("02-remove-two-indexes-when-two-present")',...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const L=["Case_01_add_two_indexes_when_none_present","Case_02_remove_two_indexes_when_two_present"];export{e as Case_01_add_two_indexes_when_none_present,t as Case_02_remove_two_indexes_when_two_present,L as __namedExportsOrder,F as default};
