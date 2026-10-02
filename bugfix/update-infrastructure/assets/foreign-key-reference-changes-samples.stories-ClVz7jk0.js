import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as ee,i as te,n as ne,r as re,t as ie}from"./ddlapi-diffs-utils-C_y3wa0W.js";var ae;function oe(){return(oe=e((()=>{ae=`CREATE TABLE public.target (
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
`})))()}var he;function ge(){return(ge=e((()=>{he=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var ye;function t(){return(t=e((()=>{ye=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`})))()}var n;function r(){return(r=e((()=>{n=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`})))()}var i;function a(){return(a=e((()=>{i=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`})))()}var o;function s(){return(s=e((()=>{o=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`})))()}var c;function l(){return(l=e((()=>{c=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`})))()}var u;function d(){return(d=e((()=>{u=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_old FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var f;function p(){return(p=e((()=>{f=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var m;function h(){return(h=e((()=>{m=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_removed FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var g;function _(){return(_=e((()=>{g=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  other_ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_moved FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var v;function y(){return(y=e((()=>{v=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);

CREATE INDEX idx_t_ref_id ON public.t (ref_id);
`})))()}var b;function x(){return(x=e((()=>{b=`CREATE TABLE public.target (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(code)
);
`})))()}var S;function C(){return(C=e((()=>{S=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`})))()}var w;function T(){return(T=e((()=>{w=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`})))()}var E;function D(){return(D=e((()=>{E=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target(id)
);
`})))()}var O;function k(){return(k=e((()=>{O=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`})))()}var A;function j(){return(j=e((()=>{A=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`})))()}var M;function N(){return(N=e((()=>{M=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(id)
);
`})))()}var P;function F(){return(F=e((()=>{P=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`})))()}var be;function xe(){return(xe=e((()=>{be=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(id)
);
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(code)
);
`})))()}var we;function Te(){return(Te=e((()=>{we=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(code)
);
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_new FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  other_ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_moved FOREIGN KEY (other_ref_id) REFERENCES public.target(id)
);
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);

CREATE INDEX idx_t_ref_id ON public.t (ref_id);
COMMENT ON INDEX public.idx_t_ref_id IS 'Speeds up lookups by target';
`})))()}var Re,ze,Be,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ve;function He(){return(He=e((()=>{oe(),ce(),ue(),fe(),me(),ge(),ve(),t(),r(),a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ee(),Re=ie(Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/before.sql":ae,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/before.sql":se,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/before.sql":le,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/before.sql":de,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/before.sql":pe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/before.sql":he,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/before.sql":_e,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/before.sql":ye,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/before.sql":n,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/before.sql":i,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/before.sql":o,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/before.sql":c,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/13-renamed-foreign-key/before.sql":u,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/14-unnamed-foreign-key-became-named/before.sql":f,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/15-removed-foreign-key-next-to-kept-one-with-same-target/before.sql":m,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/16-foreign-key-moved-off-column-next-to-kept-one-with-same-target/before.sql":g,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/17-unchanged-unnamed-foreign-key-with-index-description-added/before.sql":v}),Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/after.sql":b,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/after.sql":S,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/after.sql":w,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/after.sql":E,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/after.sql":O,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/after.sql":A,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/after.sql":M,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/after.sql":P,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/after.sql":be,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/after.sql":Se,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/after.sql":we,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/after.sql":Ee,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/13-renamed-foreign-key/after.sql":Oe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/14-unnamed-foreign-key-became-named/after.sql":Ae,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/15-removed-foreign-key-next-to-kept-one-with-same-target/after.sql":Me,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/16-foreign-key-moved-off-column-next-to-kept-one-with-same-target/after.sql":Pe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/17-unchanged-unnamed-foreign-key-with-index-description-added/after.sql":Ie})),ze=re(Re),Be={...te,title:`DDL API Diffs Suite/Foreign Key Reference Changes Samples`},I=ne(ze),L=I(`01-replaced-foreign-key-column`),R=I(`02-replaced-foreign-key-table`),z=I(`03-replaced-foreign-key-schema-public-to-custom`),B=I(`04-replaced-foreign-key-schema-custom1-to-custom2`),V=I(`05-replaced-foreign-key-schema-custom-to-public`),H=I(`06-replaced-foreign-key-table-and-column`),U=I(`07-replaced-foreign-key-schema-public-to-custom-and-table`),W=I(`08-replaced-foreign-key-schema-custom-to-public-and-table`),G=I(`09-replaced-foreign-key-schema-custom1-to-custom2-and-table`),K=I(`10-replaced-foreign-key-schema-public-to-custom-table-and-column`),q=I(`11-replaced-foreign-key-schema-custom-to-public-table-and-column`),J=I(`12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column`),Y=I(`13-renamed-foreign-key`),X=I(`14-unnamed-foreign-key-became-named`),Z=I(`15-removed-foreign-key-next-to-kept-one-with-same-target`),Q=I(`16-foreign-key-moved-off-column-next-to-kept-one-with-same-target`),$=I(`17-unchanged-unnamed-foreign-key-with-index-description-added`),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("01-replaced-foreign-key-column")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("02-replaced-foreign-key-table")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("03-replaced-foreign-key-schema-public-to-custom")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("04-replaced-foreign-key-schema-custom1-to-custom2")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("05-replaced-foreign-key-schema-custom-to-public")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("06-replaced-foreign-key-table-and-column")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("07-replaced-foreign-key-schema-public-to-custom-and-table")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("08-replaced-foreign-key-schema-custom-to-public-and-table")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("09-replaced-foreign-key-schema-custom1-to-custom2-and-table")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("10-replaced-foreign-key-schema-public-to-custom-table-and-column")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("11-replaced-foreign-key-schema-custom-to-public-table-and-column")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("13-renamed-foreign-key")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("14-unnamed-foreign-key-became-named")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("15-removed-foreign-key-next-to-kept-one-with-same-target")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("16-foreign-key-moved-off-column-next-to-kept-one-with-same-target")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("17-unchanged-unnamed-foreign-key-with-index-description-added")`,...$.parameters?.docs?.source}}},Ve=[`Case_01_replaced_foreign_key_column`,`Case_02_replaced_foreign_key_table`,`Case_03_replaced_foreign_key_schema_public_to_custom`,`Case_04_replaced_foreign_key_schema_custom1_to_custom2`,`Case_05_replaced_foreign_key_schema_custom_to_public`,`Case_06_replaced_foreign_key_table_and_column`,`Case_07_replaced_foreign_key_schema_public_to_custom_and_table`,`Case_08_replaced_foreign_key_schema_custom_to_public_and_table`,`Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table`,`Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column`,`Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column`,`Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column`,`Case_13_renamed_foreign_key`,`Case_14_unnamed_foreign_key_became_named`,`Case_15_removed_foreign_key_next_to_kept_one_with_same_target`,`Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target`,`Case_17_unchanged_unnamed_foreign_key_with_index_description_added`]})))()}He();export{L as Case_01_replaced_foreign_key_column,R as Case_02_replaced_foreign_key_table,z as Case_03_replaced_foreign_key_schema_public_to_custom,B as Case_04_replaced_foreign_key_schema_custom1_to_custom2,V as Case_05_replaced_foreign_key_schema_custom_to_public,H as Case_06_replaced_foreign_key_table_and_column,U as Case_07_replaced_foreign_key_schema_public_to_custom_and_table,W as Case_08_replaced_foreign_key_schema_custom_to_public_and_table,G as Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table,K as Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column,q as Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column,J as Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column,Y as Case_13_renamed_foreign_key,X as Case_14_unnamed_foreign_key_became_named,Z as Case_15_removed_foreign_key_next_to_kept_one_with_same_target,Q as Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target,$ as Case_17_unchanged_unnamed_foreign_key_with_index_description_added,Ve as __namedExportsOrder,Be as default};