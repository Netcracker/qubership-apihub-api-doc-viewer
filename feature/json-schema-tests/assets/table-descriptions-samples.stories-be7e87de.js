import{c as l,a as p,d,b as m}from"./ddl-samples-common-2948e0f8.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableViewer-64f3e8cb.js";import"./DiffBadge-3394d163.js";import"./IndexesNodeViewer-6c0f4422.js";import"./build-from-ddl-browser-af203533.js";import"./iframe-ce71ffc2.js";import"../sb-preview/runtime.js";const u=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'Stub long comment for ddlapi table description screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline table descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub. Segment D: extra padding for six hundred characters.';

`,S=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);

COMMENT ON TABLE public.t IS 'table description text';

`,b=Object.assign({"../../../../samples/ddlapi/table-descriptions/long-description/sample.sql":u,"../../../../samples/ddlapi/table-descriptions/short-description/sample.sql":S}),g=l(b),E=p(g),c=m(E),B={...d,id:"ddlapi-suite-table-descriptions",title:"DDL API Suite/Table Descriptions"},e=c("long-description"),t=c("short-description");var i,s,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:'createCaseStory("long-description")',...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("short-description")',...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["LongDescription","ShortDescription"];export{e as LongDescription,t as ShortDescription,O as __namedExportsOrder,B as default};
