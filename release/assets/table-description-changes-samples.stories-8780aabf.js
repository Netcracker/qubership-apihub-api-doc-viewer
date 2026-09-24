import{c as L,a as y,d as D,b as F}from"./ddlapi-diffs-utils-2ce3d586.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-b43d1e75.js";import"./DiffBadge-3394d163.js";import"./IndexesNodeViewer-6c0f4422.js";/* empty css              */import"./build-from-ddl-browser-8650a1d5.js";import"./iframe-e1ba2de3.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const H=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

`,X=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`,w=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`,P=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

`,j=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description diff screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,G=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description diff screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,k=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`,z=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description diff screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,J=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`,K=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

`,Q=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'CHANGED table description text';

`,U=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description diff screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,V=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

`,W=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'CHANGED stub long comment for ddlapi table description diff screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,Y=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description diff screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,Z=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`,$=Object.assign({"../../../../samples/ddlapi-diffs/table-description-changes/01-add-table-description/before.sql":H,"../../../../samples/ddlapi-diffs/table-description-changes/02-remove-table-description/before.sql":X,"../../../../samples/ddlapi-diffs/table-description-changes/03-replace-table-description/before.sql":w,"../../../../samples/ddlapi-diffs/table-description-changes/04-add-long-table-description/before.sql":P,"../../../../samples/ddlapi-diffs/table-description-changes/05-remove-long-table-description/before.sql":j,"../../../../samples/ddlapi-diffs/table-description-changes/06-replace-long-table-description/before.sql":G,"../../../../samples/ddlapi-diffs/table-description-changes/07-replace-short-to-long-table-description/before.sql":k,"../../../../samples/ddlapi-diffs/table-description-changes/08-replace-long-to-short-table-description/before.sql":z}),ee=Object.assign({"../../../../samples/ddlapi-diffs/table-description-changes/01-add-table-description/after.sql":J,"../../../../samples/ddlapi-diffs/table-description-changes/02-remove-table-description/after.sql":K,"../../../../samples/ddlapi-diffs/table-description-changes/03-replace-table-description/after.sql":Q,"../../../../samples/ddlapi-diffs/table-description-changes/04-add-long-table-description/after.sql":U,"../../../../samples/ddlapi-diffs/table-description-changes/05-remove-long-table-description/after.sql":V,"../../../../samples/ddlapi-diffs/table-description-changes/06-replace-long-table-description/after.sql":W,"../../../../samples/ddlapi-diffs/table-description-changes/07-replace-short-to-long-table-description/after.sql":Y,"../../../../samples/ddlapi-diffs/table-description-changes/08-replace-long-to-short-table-description/after.sql":Z}),te=L($,ee),ie=y(te),_e={...D,title:"DDL API Diffs Suite/Table Description Changes Samples"},e=F(ie),t=e("01-add-table-description"),i=e("02-remove-table-description"),n=e("03-replace-table-description"),o=e("04-add-long-table-description"),s=e("05-remove-long-table-description"),r=e("06-replace-long-table-description"),a=e("07-replace-short-to-long-table-description"),l=e("08-replace-long-to-short-table-description");var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("01-add-table-description")',...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("02-remove-table-description")',...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var _,g,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("03-replace-table-description")',...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var S,T,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("04-add-long-table-description")',...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var A,f,h;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("05-remove-long-table-description")',...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,I,O;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("06-replace-long-table-description")',...(O=(I=r.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var N,M,q;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("07-replace-short-to-long-table-description")',...(q=(M=a.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var x,B,R;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("08-replace-long-to-short-table-description")',...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const ge=["Case_01_add_table_description","Case_02_remove_table_description","Case_03_replace_table_description","Case_04_add_long_table_description","Case_05_remove_long_table_description","Case_06_replace_long_table_description","Case_07_replace_short_to_long_table_description","Case_08_replace_long_to_short_table_description"];export{t as Case_01_add_table_description,i as Case_02_remove_table_description,n as Case_03_replace_table_description,o as Case_04_add_long_table_description,s as Case_05_remove_long_table_description,r as Case_06_replace_long_table_description,a as Case_07_replace_short_to_long_table_description,l as Case_08_replace_long_to_short_table_description,ge as __namedExportsOrder,_e as default};
