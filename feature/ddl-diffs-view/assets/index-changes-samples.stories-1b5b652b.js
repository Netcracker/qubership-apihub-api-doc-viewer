import{c as xe,a as Ae,d as be,b as Se}from"./ddlapi-diffs-utils-ab8cd0c0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-28caea3a.js";import"./DiffBadge-a8af3c87.js";import"./index-c9469f15.js";/* empty css              */import"./build-from-ddl-browser-07e161e8.js";import"./iframe-55315aec.js";import"../sb-preview/runtime.js";const fe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Ie=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Ne=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,Re=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,qe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,he=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,ve=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,we=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,Oe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Xe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,De=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Be=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Fe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Le=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Me=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,He=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,Ue=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Qe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,je=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,Pe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,ke=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Ge=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,Je=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Ke=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Ve=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,We=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,Ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,$e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,en=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,sn=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":fe,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":Ie,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":Ne,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":Re,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":qe,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":he,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":ve,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":we,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":Oe,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":Xe,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":De,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":Be,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/before.sql":Fe,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/before.sql":Le,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/before.sql":Me,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/before.sql":He,"../../../../samples/ddlapi-diffs/index-changes/17-restore-replaced-column-in-index/before.sql":ye,"../../../../samples/ddlapi-diffs/index-changes/18-index-not-unique/before.sql":Ue}),on=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":Qe,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":je,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Pe,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":ke,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":ze,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":Ge,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":Je,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":Ke,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":Ve,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":We,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Ye,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":Ze,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/after.sql":$e,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/after.sql":en,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/after.sql":nn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/after.sql":tn,"../../../../samples/ddlapi-diffs/index-changes/17-restore-replaced-column-in-index/after.sql":cn,"../../../../samples/ddlapi-diffs/index-changes/18-index-not-unique/after.sql":rn}),_n=xe(sn,on),dn=Ae(_n),An={...be,title:"DDL API Diffs Suite/Index Changes Samples"},e=Se(dn),n=e("01-add-index-when-none-present"),i=e("02-add-index-unique-when-none-present"),t=e("03-remove-index-when-none-present"),c=e("04-remove-index-unique-when-none-present"),r=e("05-add-one-more-index-without-unique"),s=e("06-add-one-more-index-with-unique"),o=e("07-remove-one-more-index-without-unique"),_=e("08-remove-one-more-index-with-unique"),d=e("09-append-new-column-in-index"),a=e("10-remove-new-column-in-index"),E=e("11-replaced-column-in-index"),u=e("12-index-became-unique"),l=e("13-index-not-unique"),p=e("14-remove-one-more-index-without-unique"),m=e("15-remove-one-more-index-with-unique"),T=e("16-remove-new-column-in-index"),g=e("17-restore-replaced-column-in-index"),C=e("18-index-not-unique");var x,A,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("01-add-index-when-none-present")',...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var S,f,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("02-add-index-unique-when-none-present")',...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var N,R,q;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("03-remove-index-when-none-present")',...(q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var h,v,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("04-remove-index-unique-when-none-present")',...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var O,X,D;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("05-add-one-more-index-without-unique")',...(D=(X=r.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var B,F,L;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("06-add-one-more-index-with-unique")',...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,H,y;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("07-remove-one-more-index-without-unique")',...(y=(H=o.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var U,Q,j;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("08-remove-one-more-index-with-unique")',...(j=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:j.source}}};var P,k,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("09-append-new-column-in-index")',...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var G,J,K;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("10-remove-new-column-in-index")',...(K=(J=a.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var V,W,Y;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("11-replaced-column-in-index")',...(Y=(W=E.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("12-index-became-unique")',...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ie,te;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("13-index-not-unique")',...(te=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var ce,re,se;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("14-remove-one-more-index-without-unique")',...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,_e,de;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("15-remove-one-more-index-with-unique")',...(de=(_e=m.parameters)==null?void 0:_e.docs)==null?void 0:de.source}}};var ae,Ee,ue;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("16-remove-new-column-in-index")',...(ue=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:ue.source}}};var le,pe,me;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("17-restore-replaced-column-in-index")',...(me=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var Te,ge,Ce;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("18-index-not-unique")',...(Ce=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};const bn=["Case_01_add_index_when_none_present","Case_02_add_index_unique_when_none_present","Case_03_remove_index_when_none_present","Case_04_remove_index_unique_when_none_present","Case_05_add_one_more_index_without_unique","Case_06_add_one_more_index_with_unique","Case_07_remove_one_more_index_without_unique","Case_08_remove_one_more_index_with_unique","Case_09_append_new_column_in_index","Case_10_remove_new_column_in_index","Case_11_replaced_column_in_index","Case_12_index_became_unique","Case_13_index_not_unique","Case_14_remove_one_more_index_without_unique","Case_15_remove_one_more_index_with_unique","Case_16_remove_new_column_in_index","Case_17_restore_replaced_column_in_index","Case_18_index_not_unique"];export{n as Case_01_add_index_when_none_present,i as Case_02_add_index_unique_when_none_present,t as Case_03_remove_index_when_none_present,c as Case_04_remove_index_unique_when_none_present,r as Case_05_add_one_more_index_without_unique,s as Case_06_add_one_more_index_with_unique,o as Case_07_remove_one_more_index_without_unique,_ as Case_08_remove_one_more_index_with_unique,d as Case_09_append_new_column_in_index,a as Case_10_remove_new_column_in_index,E as Case_11_replaced_column_in_index,u as Case_12_index_became_unique,l as Case_13_index_not_unique,p as Case_14_remove_one_more_index_without_unique,m as Case_15_remove_one_more_index_with_unique,T as Case_16_remove_new_column_in_index,g as Case_17_restore_replaced_column_in_index,C as Case_18_index_not_unique,bn as __namedExportsOrder,An as default};
