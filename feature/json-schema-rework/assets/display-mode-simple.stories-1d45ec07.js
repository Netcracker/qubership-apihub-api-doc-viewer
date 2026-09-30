import{r as _}from"./UxBadge-a3d5708d.js";import{c as L}from"./ddl-samples-cases-39a6e1ba.js";import{b as A}from"./sample-cases-8c510854.js";import{d as T,c as y}from"./ddl-samples-common-529f56a5.js";import"./index-f46741a2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./DdlTableViewer-34306a32.js";import"./IndexesNodeViewer-04e95f65.js";import"./build-from-ddl-browser-6c6ac1c8.js";import"./iframe-af39e7f4.js";import"../sb-preview/runtime.js";import"./ddl-story-navigation-f02fad16.js";const v=`CREATE TABLE t (
  status text NOT NULL DEFAULT 'active'
);
`,C=`CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

CREATE TABLE t (
  feeling mood NOT NULL DEFAULT 'neutral'
);
`,D=`CREATE TABLE t (
  label text GENERATED ALWAYS AS (upper(status)) STORED,
  status text NOT NULL DEFAULT 'draft'
);
`,x=`CREATE TABLE t (
  title text NOT NULL
);

COMMENT ON COLUMN public.t.title IS 'Stub long comment for ddlapi simple display mode screenshot tests. This placeholder text is intentionally verbose so the API doc viewer can render multiline column descriptions at realistic lengths without using production documentation. Segment A: lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segment B: ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Segment C: duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore end stub.';
`,b=Object.assign({"../../../../samples/ddlapi/display-mode-simple/default-value/sample.sql":v,"../../../../samples/ddlapi/display-mode-simple/enum-values/sample.sql":C,"../../../../samples/ddlapi/display-mode-simple/generated-expression/sample.sql":D,"../../../../samples/ddlapi/display-mode-simple/long-description/sample.sql":x}),f=L(b),N=A(f),o=y(N,{displayMode:_}),Y={...T,id:"ddlapi-suite-display-mode-simple",title:"DDL API Suite/Display Mode Simple"},e=o("default-value"),s=o("enum-values"),t=o("generated-expression"),a=o("long-description");var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("default-value")',...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,m,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("enum-values")',...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:'createCaseStory("generated-expression")',...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var E,S,g;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("long-description")',...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const w=["DefaultValue","EnumValues","GeneratedExpression","LongDescription"];export{e as DefaultValue,s as EnumValues,t as GeneratedExpression,a as LongDescription,w as __namedExportsOrder,Y as default};
