import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{i as ne,n as re,r as ie,t as ae}from"./ddlapi-diffs-utils-DaX7n7iy.js";var oe;function se(){return(se=e((()=>{oe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var ce;function le(){return(le=e((()=>{ce=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var ue;function de(){return(de=e((()=>{ue=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target(id)
);
`})))()}var me;function he(){return(he=e((()=>{me=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var t;function n(){return(n=e((()=>{t=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`})))()}var r;function i(){return(i=e((()=>{r=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`})))()}var a;function o(){return(o=e((()=>{a=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_old FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_removed FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  other_ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_moved FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);

CREATE INDEX idx_t_ref_id ON public.t (ref_id);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE TABLE public.target (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(code)
);
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`})))()}var T;function E(){return(E=e((()=>{T=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`})))()}var D;function O(){return(O=e((()=>{D=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target(id)
);
`})))()}var k;function A(){return(A=e((()=>{k=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var j;function M(){return(M=e((()=>{j=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`})))()}var N;function P(){return(P=e((()=>{N=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(id)
);
`})))()}var F;function be(){return(be=e((()=>{F=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(id)
);
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(code)
);
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(code)
);
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_new FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var je;function Me(){return(Me=e((()=>{je=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  other_ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_moved FOREIGN KEY (other_ref_id) REFERENCES public.target(id)
);
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);

CREATE INDEX idx_t_ref_id ON public.t (ref_id);
COMMENT ON INDEX public.idx_t_ref_id IS 'Speeds up lookups by target';
`})))()}var ze,Be,Ve,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,He;function Ue(){return(Ue=e((()=>{se(),le(),de(),pe(),he(),_e(),ye(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),be(),Se(),we(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),ne(),ee(),ze=ae(Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/before.sql":oe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/before.sql":ce,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/before.sql":ue,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/before.sql":fe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/before.sql":me,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/before.sql":ge,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/before.sql":ve,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/before.sql":t,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/before.sql":r,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/before.sql":a,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/before.sql":s,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/before.sql":l,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/13-renamed-foreign-key/before.sql":d,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/14-unnamed-foreign-key-became-named/before.sql":p,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/15-removed-foreign-key-next-to-kept-one-with-same-target/before.sql":h,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/16-foreign-key-moved-off-column-next-to-kept-one-with-same-target/before.sql":_,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/17-unchanged-unnamed-foreign-key-with-index-description-added/before.sql":y}),Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/after.sql":x,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/after.sql":C,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/after.sql":T,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/after.sql":D,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/after.sql":k,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/after.sql":j,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/after.sql":N,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/after.sql":F,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/after.sql":xe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/after.sql":Ce,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/after.sql":Te,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/after.sql":De,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/13-renamed-foreign-key/after.sql":ke,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/14-unnamed-foreign-key-became-named/after.sql":je,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/15-removed-foreign-key-next-to-kept-one-with-same-target/after.sql":Ne,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/16-foreign-key-moved-off-column-next-to-kept-one-with-same-target/after.sql":Fe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/17-unchanged-unnamed-foreign-key-with-index-description-added/after.sql":Le})),Be=te(ze),Ve={...ie,title:`DDL API Diffs Suite/Foreign Key Reference Changes Samples`},I=re(Be),L=I(`01-replaced-foreign-key-column`),R=I(`02-replaced-foreign-key-table`),z=I(`03-replaced-foreign-key-schema-public-to-custom`),B=I(`04-replaced-foreign-key-schema-custom1-to-custom2`),V=I(`05-replaced-foreign-key-schema-custom-to-public`),H=I(`06-replaced-foreign-key-table-and-column`),U=I(`07-replaced-foreign-key-schema-public-to-custom-and-table`),W=I(`08-replaced-foreign-key-schema-custom-to-public-and-table`),G=I(`09-replaced-foreign-key-schema-custom1-to-custom2-and-table`),K=I(`10-replaced-foreign-key-schema-public-to-custom-table-and-column`),q=I(`11-replaced-foreign-key-schema-custom-to-public-table-and-column`),J=I(`12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column`),Y=I(`13-renamed-foreign-key`),X=I(`14-unnamed-foreign-key-became-named`),Z=I(`15-removed-foreign-key-next-to-kept-one-with-same-target`),Q=I(`16-foreign-key-moved-off-column-next-to-kept-one-with-same-target`),$=I(`17-unchanged-unnamed-foreign-key-with-index-description-added`),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("01-replaced-foreign-key-column")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("02-replaced-foreign-key-table")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("03-replaced-foreign-key-schema-public-to-custom")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("04-replaced-foreign-key-schema-custom1-to-custom2")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("05-replaced-foreign-key-schema-custom-to-public")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("06-replaced-foreign-key-table-and-column")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("07-replaced-foreign-key-schema-public-to-custom-and-table")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("08-replaced-foreign-key-schema-custom-to-public-and-table")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("09-replaced-foreign-key-schema-custom1-to-custom2-and-table")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("10-replaced-foreign-key-schema-public-to-custom-table-and-column")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("11-replaced-foreign-key-schema-custom-to-public-table-and-column")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("13-renamed-foreign-key")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("14-unnamed-foreign-key-became-named")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("15-removed-foreign-key-next-to-kept-one-with-same-target")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("16-foreign-key-moved-off-column-next-to-kept-one-with-same-target")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("17-unchanged-unnamed-foreign-key-with-index-description-added")`,...$.parameters?.docs?.source}}},He=[`Case_01_replaced_foreign_key_column`,`Case_02_replaced_foreign_key_table`,`Case_03_replaced_foreign_key_schema_public_to_custom`,`Case_04_replaced_foreign_key_schema_custom1_to_custom2`,`Case_05_replaced_foreign_key_schema_custom_to_public`,`Case_06_replaced_foreign_key_table_and_column`,`Case_07_replaced_foreign_key_schema_public_to_custom_and_table`,`Case_08_replaced_foreign_key_schema_custom_to_public_and_table`,`Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table`,`Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column`,`Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column`,`Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column`,`Case_13_renamed_foreign_key`,`Case_14_unnamed_foreign_key_became_named`,`Case_15_removed_foreign_key_next_to_kept_one_with_same_target`,`Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target`,`Case_17_unchanged_unnamed_foreign_key_with_index_description_added`]})))()}Ue();export{L as Case_01_replaced_foreign_key_column,R as Case_02_replaced_foreign_key_table,z as Case_03_replaced_foreign_key_schema_public_to_custom,B as Case_04_replaced_foreign_key_schema_custom1_to_custom2,V as Case_05_replaced_foreign_key_schema_custom_to_public,H as Case_06_replaced_foreign_key_table_and_column,U as Case_07_replaced_foreign_key_schema_public_to_custom_and_table,W as Case_08_replaced_foreign_key_schema_custom_to_public_and_table,G as Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table,K as Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column,q as Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column,J as Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column,Y as Case_13_renamed_foreign_key,X as Case_14_unnamed_foreign_key_became_named,Z as Case_15_removed_foreign_key_next_to_kept_one_with_same_target,Q as Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target,$ as Case_17_unchanged_unnamed_foreign_key_with_index_description_added,He as __namedExportsOrder,Ve as default};