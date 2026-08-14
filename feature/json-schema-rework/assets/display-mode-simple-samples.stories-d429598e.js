import{q as _}from"./index-71f1bfe0.js";import{c as L,a as A,d as T,b as y}from"./ddl-samples-common-bb6c7383.js";import"./index-f46741a2.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./DdlTableViewer-4b03edfb.js";import"./IndexesNodeViewer-05731b79.js";import"./take-diff-side-background-color-85ec54fb.js";import"./DiffBadge-51a3ec54.js";import"./build-from-ddl-browser-2ed2d276.js";import"./iframe-dbd39598.js";import"../sb-preview/runtime.js";const v=`CREATE TABLE t (
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
`,b=Object.assign({"../../../../samples/ddlapi/display-mode-simple/default-value/sample.sql":v,"../../../../samples/ddlapi/display-mode-simple/enum-values/sample.sql":C,"../../../../samples/ddlapi/display-mode-simple/generated-expression/sample.sql":D,"../../../../samples/ddlapi/display-mode-simple/long-description/sample.sql":x}),N=L(b),f=A(N),o=y(f,{displayMode:_}),G={...T,id:"ddlapi-suite-display-mode-simple",title:"DDL API Suite/Display Mode Simple"},e=o("default-value"),s=o("enum-values"),t=o("generated-expression"),a=o("long-description");var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:'createCaseStory("default-value")',...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,p,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("enum-values")',...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("generated-expression")',...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var E,S,g;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("long-description")',...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const Y=["DefaultValue","EnumValues","GeneratedExpression","LongDescription"];export{e as DefaultValue,s as EnumValues,t as GeneratedExpression,a as LongDescription,Y as __namedExportsOrder,G as default};
