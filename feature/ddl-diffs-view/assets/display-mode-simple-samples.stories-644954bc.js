import{D as _}from"./DdlTableViewer-34a33bb6.js";import{p as L}from"./UxBadge-da5a4e9c.js";import{c as T,a as A,b as y}from"./ddl-samples-common-4cf1204a.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./index-d7fb8465.js";import"./build-from-ddl-browser-8b28d327.js";import"./iframe-000d5e4c.js";import"../sb-preview/runtime.js";const D=`CREATE TABLE t (
  status text NOT NULL DEFAULT 'active'
);
`,v=`CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

CREATE TABLE t (
  feeling mood NOT NULL DEFAULT 'neutral'
);
`,C=`CREATE TABLE t (
  label text GENERATED ALWAYS AS (upper(status)) STORED,
  status text NOT NULL DEFAULT 'draft'
);
`,b=`CREATE TABLE t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Stub long comment for ddlapi simple display mode screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline column descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub.';
`,x=Object.assign({"../../../../samples/ddlapi/display-mode-simple/default-value/sample.sql":D,"../../../../samples/ddlapi/display-mode-simple/enum-values/sample.sql":v,"../../../../samples/ddlapi/display-mode-simple/generated-expression/sample.sql":C,"../../../../samples/ddlapi/display-mode-simple/long-description/sample.sql":b}),N=T(x),f=A(N),o=y(f,{displayMode:L}),P={id:"ddlapi-suite-display-mode-simple",title:"DDL API Suite/Display Mode Simple",component:_},e=o("default-value"),s=o("enum-values"),t=o("generated-expression"),a=o("long-description");var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("default-value")',...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,p,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("enum-values")',...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:'createCaseStory("generated-expression")',...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var E,g,S;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("long-description")',...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const V=["DefaultValue","EnumValues","GeneratedExpression","LongDescription"];export{e as DefaultValue,s as EnumValues,t as GeneratedExpression,a as LongDescription,V as __namedExportsOrder,P as default};
