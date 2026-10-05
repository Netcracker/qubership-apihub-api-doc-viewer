import{c as pe,d as fe,a as ue}from"./ddlapi-diffs-utils-31421dfa.js";import{b as Re}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-fd6285f4.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";/* empty css              */import"./build-from-ddl-browser-8639db24.js";import"./iframe-b8cab779.js";import"../sb-preview/runtime.js";import"./test-diff-meta-keys-5677f54d.js";import"./ddl-story-navigation-f02fad16.js";import"./ddl-story-realm-utils-c0692776.js";const be=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,Ae=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,Ce=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,Te=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target(id)
);
`,ke=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`,ye=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,he=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,Se=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`,Ye=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`,Ne=`CREATE TABLE public.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_old(id)
);
`,Be=`CREATE SCHEMA custom;

CREATE TABLE custom.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_old(id)
);
`,Le=`CREATE SCHEMA custom1;

CREATE TABLE custom1.target_old (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom1.target_old(id)
);
`,Ie=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_old FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`,Fe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,ve=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_removed FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`,Me=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  other_ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_moved FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`,Ke=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);

CREATE INDEX idx_t_ref_id ON public.t (ref_id);
`,we=`CREATE TABLE public.target (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(code)
);
`,Pe=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`,qe=`CREATE SCHEMA custom;

CREATE TABLE custom.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target(id)
);
`,Oe=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target(id)
);
`,xe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);
`,He=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`,De=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(id)
);
`,Ge=`CREATE TABLE public.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(id)
);
`,Xe=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(id)
);
`,je=`CREATE SCHEMA custom;

CREATE TABLE custom.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom.target_new(code)
);
`,ze=`CREATE TABLE public.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target_new(code)
);
`,Je=`CREATE SCHEMA custom2;

CREATE TABLE custom2.target_new (
  code integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES custom2.target_new(code)
);
`,Qe=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_new FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`,Ue=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`,Ve=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id)
);
`,We=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer,
  other_ref_id integer,
  CONSTRAINT fk_t_target_kept FOREIGN KEY (ref_id) REFERENCES public.target(id),
  CONSTRAINT fk_t_target_moved FOREIGN KEY (other_ref_id) REFERENCES public.target(id)
);
`,Ze=`CREATE TABLE public.target (
  id integer PRIMARY KEY
);

CREATE TABLE public.t (
  ref_id integer REFERENCES public.target(id)
);

CREATE INDEX idx_t_ref_id ON public.t (ref_id);
COMMENT ON INDEX public.idx_t_ref_id IS 'Speeds up lookups by target';
`,$e=Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/before.sql":be,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/before.sql":Ae,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/before.sql":Ce,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/before.sql":Te,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/before.sql":ke,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/before.sql":ye,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/before.sql":he,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/before.sql":Se,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/before.sql":Ye,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/before.sql":Ne,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/before.sql":Be,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/before.sql":Le,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/13-renamed-foreign-key/before.sql":Ie,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/14-unnamed-foreign-key-became-named/before.sql":Fe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/15-removed-foreign-key-next-to-kept-one-with-same-target/before.sql":ve,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/16-foreign-key-moved-off-column-next-to-kept-one-with-same-target/before.sql":Me,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/17-unchanged-unnamed-foreign-key-with-index-description-added/before.sql":Ke}),et=Object.assign({"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/01-replaced-foreign-key-column/after.sql":we,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/02-replaced-foreign-key-table/after.sql":Pe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/03-replaced-foreign-key-schema-public-to-custom/after.sql":qe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/04-replaced-foreign-key-schema-custom1-to-custom2/after.sql":Oe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/05-replaced-foreign-key-schema-custom-to-public/after.sql":xe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/06-replaced-foreign-key-table-and-column/after.sql":He,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/07-replaced-foreign-key-schema-public-to-custom-and-table/after.sql":De,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/08-replaced-foreign-key-schema-custom-to-public-and-table/after.sql":Ge,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/09-replaced-foreign-key-schema-custom1-to-custom2-and-table/after.sql":Xe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/10-replaced-foreign-key-schema-public-to-custom-table-and-column/after.sql":je,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/11-replaced-foreign-key-schema-custom-to-public-table-and-column/after.sql":ze,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column/after.sql":Je,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/13-renamed-foreign-key/after.sql":Qe,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/14-unnamed-foreign-key-became-named/after.sql":Ue,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/15-removed-foreign-key-next-to-kept-one-with-same-target/after.sql":Ve,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/16-foreign-key-moved-off-column-next-to-kept-one-with-same-target/after.sql":We,"../../../../samples/ddlapi-diffs/foreign-key-reference-changes/17-unchanged-unnamed-foreign-key-with-index-description-added/after.sql":Ze}),tt=pe($e,et),rt=Re(tt),ut={...fe,title:"DDL API Diffs Suite/Foreign Key Reference Changes Samples"},e=ue(rt),t=e("01-replaced-foreign-key-column"),r=e("02-replaced-foreign-key-table"),n=e("03-replaced-foreign-key-schema-public-to-custom"),a=e("04-replaced-foreign-key-schema-custom1-to-custom2"),o=e("05-replaced-foreign-key-schema-custom-to-public"),c=e("06-replaced-foreign-key-table-and-column"),s=e("07-replaced-foreign-key-schema-public-to-custom-and-table"),i=e("08-replaced-foreign-key-schema-custom-to-public-and-table"),_=e("09-replaced-foreign-key-schema-custom1-to-custom2-and-table"),d=e("10-replaced-foreign-key-schema-public-to-custom-table-and-column"),l=e("11-replaced-foreign-key-schema-custom-to-public-table-and-column"),E=e("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column"),g=e("13-renamed-foreign-key"),m=e("14-unnamed-foreign-key-became-named"),p=e("15-removed-foreign-key-next-to-kept-one-with-same-target"),f=e("16-foreign-key-moved-off-column-next-to-kept-one-with-same-target"),u=e("17-unchanged-unnamed-foreign-key-with-index-description-added");var R,b,A;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("01-replaced-foreign-key-column")',...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var C,T,k;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("02-replaced-foreign-key-table")',...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var y,h,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("03-replaced-foreign-key-schema-public-to-custom")',...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var Y,N,B;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("04-replaced-foreign-key-schema-custom1-to-custom2")',...(B=(N=a.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var L,I,F;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("05-replaced-foreign-key-schema-custom-to-public")',...(F=(I=o.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var v,M,K;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("06-replaced-foreign-key-table-and-column")',...(K=(M=c.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var w,P,q;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("07-replaced-foreign-key-schema-public-to-custom-and-table")',...(q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var O,x,H;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("08-replaced-foreign-key-schema-custom-to-public-and-table")',...(H=(x=i.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var D,G,X;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("09-replaced-foreign-key-schema-custom1-to-custom2-and-table")',...(X=(G=_.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var j,z,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("10-replaced-foreign-key-schema-public-to-custom-table-and-column")',...(J=(z=d.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("11-replaced-foreign-key-schema-custom-to-public-table-and-column")',...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,Z,$;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("12-replaced-foreign-key-schema-custom1-to-custom2-table-and-column")',...($=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("13-renamed-foreign-key")',...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ae,oe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("14-unnamed-foreign-key-became-named")',...(oe=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ce,se,ie;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("15-removed-foreign-key-next-to-kept-one-with-same-target")',...(ie=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var _e,de,le;f.parameters={...f.parameters,docs:{...(_e=f.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("16-foreign-key-moved-off-column-next-to-kept-one-with-same-target")',...(le=(de=f.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var Ee,ge,me;u.parameters={...u.parameters,docs:{...(Ee=u.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("17-unchanged-unnamed-foreign-key-with-index-description-added")',...(me=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};const Rt=["Case_01_replaced_foreign_key_column","Case_02_replaced_foreign_key_table","Case_03_replaced_foreign_key_schema_public_to_custom","Case_04_replaced_foreign_key_schema_custom1_to_custom2","Case_05_replaced_foreign_key_schema_custom_to_public","Case_06_replaced_foreign_key_table_and_column","Case_07_replaced_foreign_key_schema_public_to_custom_and_table","Case_08_replaced_foreign_key_schema_custom_to_public_and_table","Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table","Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column","Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column","Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column","Case_13_renamed_foreign_key","Case_14_unnamed_foreign_key_became_named","Case_15_removed_foreign_key_next_to_kept_one_with_same_target","Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target","Case_17_unchanged_unnamed_foreign_key_with_index_description_added"];export{t as Case_01_replaced_foreign_key_column,r as Case_02_replaced_foreign_key_table,n as Case_03_replaced_foreign_key_schema_public_to_custom,a as Case_04_replaced_foreign_key_schema_custom1_to_custom2,o as Case_05_replaced_foreign_key_schema_custom_to_public,c as Case_06_replaced_foreign_key_table_and_column,s as Case_07_replaced_foreign_key_schema_public_to_custom_and_table,i as Case_08_replaced_foreign_key_schema_custom_to_public_and_table,_ as Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table,d as Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column,l as Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column,E as Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column,g as Case_13_renamed_foreign_key,m as Case_14_unnamed_foreign_key_became_named,p as Case_15_removed_foreign_key_next_to_kept_one_with_same_target,f as Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target,u as Case_17_unchanged_unnamed_foreign_key_with_index_description_added,Rt as __namedExportsOrder,ut as default};
