import{c as w,a as S,d as C,b as f}from"./ddlapi-diffs-utils-11a1ff1e.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-8919eca1.js";import"./DiffBadge-ea2802e9.js";import"./IndexesNodeViewer-93dc441a.js";/* empty css              */import"./build-from-ddl-browser-06cc0a48.js";import"./iframe-98f1c0bc.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const T=`CREATE SCHEMA IF NOT EXISTS public;
`,y=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,u=`CREATE SCHEMA IF NOT EXISTS public;
`,g=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

CREATE INDEX idx_t_id ON public.t (id);
`,A=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,I=`CREATE SCHEMA IF NOT EXISTS public;
`,v=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

CREATE INDEX idx_t_id ON public.t (id);
`,x=`CREATE SCHEMA IF NOT EXISTS public;
`,R=Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/before.sql":T,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/before.sql":y,"../../../../samples/ddlapi-diffs/whole-table-changes/03-wholly-added-table-with-index/before.sql":u,"../../../../samples/ddlapi-diffs/whole-table-changes/04-wholly-removed-table-with-index/before.sql":g}),O=Object.assign({"../../../../samples/ddlapi-diffs/whole-table-changes/01-wholly-added-table/after.sql":A,"../../../../samples/ddlapi-diffs/whole-table-changes/02-wholly-removed-table/after.sql":I,"../../../../samples/ddlapi-diffs/whole-table-changes/03-wholly-added-table-with-index/after.sql":v,"../../../../samples/ddlapi-diffs/whole-table-changes/04-wholly-removed-table-with-index/after.sql":x}),D=w(R,O),N=S(D),G={...C,title:"DDL API Diffs Suite/Whole Table Changes Samples"},s=f(N),e=s("01-wholly-added-table"),l=s("02-wholly-removed-table"),a=s("03-wholly-added-table-with-index"),t=s("04-wholly-removed-table-with-index");var o,d,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'createCaseStory("01-wholly-added-table")',...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var r,_,n;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("02-wholly-removed-table")',...(n=(_=l.parameters)==null?void 0:_.docs)==null?void 0:n.source}}};var c,p,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("03-wholly-added-table-with-index")',...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,h,E;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("04-wholly-removed-table-with-index")',...(E=(h=t.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const J=["Case_01_wholly_added_table","Case_02_wholly_removed_table","Case_03_wholly_added_table_with_index","Case_04_wholly_removed_table_with_index"];export{e as Case_01_wholly_added_table,l as Case_02_wholly_removed_table,a as Case_03_wholly_added_table_with_index,t as Case_04_wholly_removed_table_with_index,J as __namedExportsOrder,G as default};
