import{j as t}from"./_commonjs-dynamic-modules-6308e768.js";import{D as s}from"./DdlTableViewer-d0ef3c09.js";import{b as T}from"./build-from-ddl-browser-e94e0249.js";import"./index-f46741a2.js";import"./UxBadge-36d61adc.js";import"./iframe-a1207777.js";import"../sb-preview/runtime.js";const D=`CREATE TABLE items (
  id bigint PRIMARY KEY,
  sku varchar(64) NOT NULL UNIQUE,
  quantity integer NOT NULL DEFAULT 0
);`,A=`CREATE TABLE departments (
  id bigint PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE employees (
  id bigint PRIMARY KEY,
  department_id bigint REFERENCES departments (id) ON DELETE CASCADE,
  full_name text NOT NULL
);`,_=`CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');

CREATE TABLE diary (
  id bigint PRIMARY KEY,
  entry_date date NOT NULL,
  mood mood NOT NULL
);`;async function l(a){return{realm:await T(a)}}const m=(a,e,N)=>{console.log(`Navigating to ${a}.${e}.${N}`)},M={title:"DDL API Suite/Simple Table",component:s},r={loaders:[()=>l(D)],render:(a,{loaded:e})=>t.jsx(s,{source:e.realm,tableKey:{schemaName:"public",name:"items"},navigationCallback:m,devMode:!0})},o={loaders:[()=>l(A)],render:(a,{loaded:e})=>t.jsx(s,{source:e.realm,tableKey:{schemaName:"public",name:"employees"},navigationCallback:m})},n={loaders:[()=>l(_)],render:(a,{loaded:e})=>t.jsx(s,{source:e.realm,tableKey:{schemaName:"public",name:"diary"},navigationCallback:m})};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  loaders: [() => loadRealm(SIMPLE_TABLE_DDL)],
  render: (_args, {
    loaded
  }) => <DdlTableViewer source={loaded!.realm} tableKey={{
    schemaName: "public",
    name: "items"
  }} navigationCallback={navigationCallback} devMode />
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var E,p,u;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  loaders: [() => loadRealm(FOREIGN_KEY_DDL)],
  render: (_args, {
    loaded
  }) => <DdlTableViewer source={loaded!.realm} tableKey={{
    schemaName: "public",
    name: "employees"
  }} navigationCallback={navigationCallback} />
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,L,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  loaders: [() => loadRealm(ENUM_TABLE_DDL)],
  render: (_args, {
    loaded
  }) => <DdlTableViewer source={loaded!.realm} tableKey={{
    schemaName: "public",
    name: "diary"
  }} navigationCallback={navigationCallback} />
}`,...(g=(L=n.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};const Y=["PrimaryKeyAndDefaults","ForeignKeys","EnumColumn"];export{n as EnumColumn,o as ForeignKeys,r as PrimaryKeyAndDefaults,Y as __namedExportsOrder,M as default};
