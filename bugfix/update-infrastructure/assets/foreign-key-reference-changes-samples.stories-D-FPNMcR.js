import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as ee,i as te,n as ne,r as re,t as ie}from"./ddlapi-diffs-utils-DYfV48Zp.js";var ae;function oe(){return(oe=e((()=>{ae=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var se;function ce(){return(ce=e((()=>{se=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var le;function ue(){return(ue=e((()=>{le=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var de;function fe(){return(fe=e((()=>{de=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target(id)
);
`})))()}var pe;function me(){return(me=e((()=>{pe=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`})))()}var t;function n(){return(n=e((()=>{t=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var r;function i(){return(i=e((()=>{r=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var a;function o(){return(o=e((()=>{a=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`})))()}var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE TABLE public.target (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(code)
);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target(id)
);
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var T;function E(){return(E=e((()=>{T=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`})))()}var D;function he(){return(he=e((()=>{D=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(id)
);
`})))()}var O;function k(){return(k=e((()=>{O=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`})))()}var A;function j(){return(j=e((()=>{A=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(id)
);
`})))()}var M;function N(){return(N=e((()=>{M=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(code)
);
`})))()}var P;function F(){return(F=e((()=>{P=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`})))()}var I;function L(){return(L=e((()=>{I=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(code)
);
`})))()}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ge;function _e(){return(_e=e((()=>{oe(),ce(),ue(),fe(),me(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),he(),k(),j(),N(),F(),L(),ee(),R=ie(Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/before.sql":ae,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/before.sql":se,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/before.sql":le,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/before.sql":de,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/before.sql":pe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/before.sql":t,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/before.sql":r,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/before.sql":a,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/before.sql":s,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/before.sql":l,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/before.sql":d,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/before.sql":p}),Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/after.sql":h,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/after.sql":_,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/after.sql":y,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/after.sql":x,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/after.sql":C,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/after.sql":T,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/after.sql":D,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/after.sql":O,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/after.sql":A,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/after.sql":M,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/after.sql":P,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/after.sql":I})),z=re(R),B={...te,title:`DDL API Diffs Suite/Foreign Key Reference Changes Samples`},V=ne(z),H=V(`01-replaced-foreign-key-column`),U=V(`02-replaced-foreign-key-table`),W=V(`03-replaced-foreign-key-schema-public-to-custom`),G=V(`04-replaced-foreign-key-schema-custom1-to-custom2`),K=V(`05-replaced-foreign-key-schema-custom-to-public`),q=V(`06-replaced-foreign-key-table-and-column`),J=V(`07-replaced-foreign-key-schema-public-to-custom-and-table`),Y=V(`08-replaced-foreign-key-schema-custom-to-public-and-table`),X=V(`09-replaced-foreign-key-schema-custom1-to-custom2-and-table`),Z=V(`10-replaced-foreign-key-schema-public-to-custom-table-and-column`),Q=V(`11-replaced-foreign-key-schema-custom-to-public-table-and-column`),$=V(`12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column`),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("01-replaced-foreign-key-column")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("02-replaced-foreign-key-table")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("03-replaced-foreign-key-schema-public-to-custom")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("04-replaced-foreign-key-schema-custom1-to-custom2")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("05-replaced-foreign-key-schema-custom-to-public")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("06-replaced-foreign-key-table-and-column")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("07-replaced-foreign-key-schema-public-to-custom-and-table")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("08-replaced-foreign-key-schema-custom-to-public-and-table")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("09-replaced-foreign-key-schema-custom1-to-custom2-and-table")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("10-replaced-foreign-key-schema-public-to-custom-table-and-column")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("11-replaced-foreign-key-schema-custom-to-public-table-and-column")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column")`,...$.parameters?.docs?.source}}},ge=[`Case_01_replaced_foreign_key_column`,`Case_02_replaced_foreign_key_table`,`Case_03_replaced_foreign_key_schema_public_to_custom`,`Case_04_replaced_foreign_key_schema_custom1_to_custom2`,`Case_05_replaced_foreign_key_schema_custom_to_public`,`Case_06_replaced_foreign_key_table_and_column`,`Case_07_replaced_foreign_key_schema_public_to_custom_and_table`,`Case_08_replaced_foreign_key_schema_custom_to_public_and_table`,`Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table`,`Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column`,`Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column`,`Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column`]})))()}_e();export{H as Case_01_replaced_foreign_key_column,U as Case_02_replaced_foreign_key_table,W as Case_03_replaced_foreign_key_schema_public_to_custom,G as Case_04_replaced_foreign_key_schema_custom1_to_custom2,K as Case_05_replaced_foreign_key_schema_custom_to_public,q as Case_06_replaced_foreign_key_table_and_column,J as Case_07_replaced_foreign_key_schema_public_to_custom_and_table,Y as Case_08_replaced_foreign_key_schema_custom_to_public_and_table,X as Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table,Z as Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column,Q as Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column,$ as Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column,ge as __namedExportsOrder,B as default};