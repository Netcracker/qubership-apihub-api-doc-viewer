import{c as Je,a as Ke,d as Ve,b as We}from"./ddlapi-diffs-utils-9c6fb6c5.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-e73be42e.js";import"./DiffBadge-2df369cb.js";import"./index-fc67a618.js";/* empty css              */import"./build-from-ddl-browser-54574749.js";import"./iframe-d6c840c3.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const Ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,$e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,en=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,cn=`CREATE SCHEMA IF NOT EXISTS public;

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

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`,Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Kn=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":Ye,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":Ze,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":$e,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":en,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":nn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":cn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":tn,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":rn,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":sn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":dn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":an,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":_n,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/before.sql":on,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/before.sql":En,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/before.sql":un,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/before.sql":ln,"../../../../samples/ddlapi-diffs/index-changes/17-restore-replaced-column-in-index/before.sql":pn,"../../../../samples/ddlapi-diffs/index-changes/18-index-not-unique/before.sql":mn,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-became-titled/before.sql":Tn,"../../../../samples/ddlapi-diffs/index-changes/20-titled-index-became-unnamed/before.sql":Cn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-append-column/before.sql":gn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-pop-column/before.sql":bn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-replaced-column/before.sql":An,"../../../../samples/ddlapi-diffs/index-changes/24-unnamed-index-became-unique/before.sql":xn,"../../../../samples/ddlapi-diffs/index-changes/25-unnamed-index-lost-unique/before.sql":Sn}),Vn=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":In,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":fn,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Nn,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":Rn,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":qn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":hn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":On,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":Xn,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":vn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":wn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Dn,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":Bn,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/after.sql":Fn,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/after.sql":Ln,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/after.sql":Mn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/after.sql":Hn,"../../../../samples/ddlapi-diffs/index-changes/17-restore-replaced-column-in-index/after.sql":yn,"../../../../samples/ddlapi-diffs/index-changes/18-index-not-unique/after.sql":Un,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-became-titled/after.sql":Qn,"../../../../samples/ddlapi-diffs/index-changes/20-titled-index-became-unnamed/after.sql":jn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-append-column/after.sql":Pn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-pop-column/after.sql":kn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-replaced-column/after.sql":zn,"../../../../samples/ddlapi-diffs/index-changes/24-unnamed-index-became-unique/after.sql":Gn,"../../../../samples/ddlapi-diffs/index-changes/25-unnamed-index-lost-unique/after.sql":Jn}),Wn=Je(Kn,Vn),Yn=Ke(Wn),_i={...Ve,title:"DDL API Diffs Suite/Index Changes Samples"},e=We(Yn),n=e("01-add-index-when-none-present"),i=e("02-add-index-unique-when-none-present"),c=e("03-remove-index-when-none-present"),t=e("04-remove-index-unique-when-none-present"),r=e("05-add-one-more-index-without-unique"),s=e("06-add-one-more-index-with-unique"),d=e("07-remove-one-more-index-without-unique"),a=e("08-remove-one-more-index-with-unique"),_=e("09-append-new-column-in-index"),o=e("10-remove-new-column-in-index"),E=e("11-replaced-column-in-index"),u=e("12-index-became-unique"),l=e("13-index-not-unique"),p=e("14-remove-one-more-index-without-unique"),m=e("15-remove-one-more-index-with-unique"),T=e("16-remove-new-column-in-index"),C=e("17-restore-replaced-column-in-index"),g=e("18-index-not-unique"),b=e("19-unnamed-index-became-titled"),A=e("20-titled-index-became-unnamed"),x=e("21-unnamed-index-append-column"),S=e("22-unnamed-index-pop-column"),I=e("23-unnamed-index-replaced-column"),f=e("24-unnamed-index-became-unique"),N=e("25-unnamed-index-lost-unique");var R,q,h;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("01-add-index-when-none-present")',...(h=(q=n.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var O,X,v;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("02-add-index-unique-when-none-present")',...(v=(X=i.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};var w,D,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("03-remove-index-when-none-present")',...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var F,L,M;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("04-remove-index-unique-when-none-present")',...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,y,U;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("05-add-one-more-index-without-unique")',...(U=(y=r.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var Q,j,P;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("06-add-one-more-index-with-unique")',...(P=(j=s.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var k,z,G;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("07-remove-one-more-index-without-unique")',...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,V;a.parameters={...a.parameters,docs:{...(J=a.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("08-remove-one-more-index-with-unique")',...(V=(K=a.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var W,Y,Z;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("09-append-new-column-in-index")',...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:'createCaseStory("10-remove-new-column-in-index")',...(ne=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ie,ce,te;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("11-replaced-column-in-index")',...(te=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var re,se,de;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("12-index-became-unique")',...(de=(se=u.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ae,_e,oe;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("13-index-not-unique")',...(oe=(_e=l.parameters)==null?void 0:_e.docs)==null?void 0:oe.source}}};var Ee,ue,le;p.parameters={...p.parameters,docs:{...(Ee=p.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("14-remove-one-more-index-without-unique")',...(le=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var pe,me,Te;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("15-remove-one-more-index-with-unique")',...(Te=(me=m.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var Ce,ge,be;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("16-remove-new-column-in-index")',...(be=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Ae,xe,Se;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("17-restore-replaced-column-in-index")',...(Se=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ie,fe,Ne;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("18-index-not-unique")',...(Ne=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Ne.source}}};var Re,qe,he;b.parameters={...b.parameters,docs:{...(Re=b.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("19-unnamed-index-became-titled")',...(he=(qe=b.parameters)==null?void 0:qe.docs)==null?void 0:he.source}}};var Oe,Xe,ve;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("20-titled-index-became-unnamed")',...(ve=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:ve.source}}};var we,De,Be;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("21-unnamed-index-append-column")',...(Be=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var Fe,Le,Me;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("22-unnamed-index-pop-column")',...(Me=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var He,ye,Ue;I.parameters={...I.parameters,docs:{...(He=I.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("23-unnamed-index-replaced-column")',...(Ue=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Ue.source}}};var Qe,je,Pe;f.parameters={...f.parameters,docs:{...(Qe=f.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("24-unnamed-index-became-unique")',...(Pe=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var ke,ze,Ge;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("25-unnamed-index-lost-unique")',...(Ge=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};const oi=["Case_01_add_index_when_none_present","Case_02_add_index_unique_when_none_present","Case_03_remove_index_when_none_present","Case_04_remove_index_unique_when_none_present","Case_05_add_one_more_index_without_unique","Case_06_add_one_more_index_with_unique","Case_07_remove_one_more_index_without_unique","Case_08_remove_one_more_index_with_unique","Case_09_append_new_column_in_index","Case_10_remove_new_column_in_index","Case_11_replaced_column_in_index","Case_12_index_became_unique","Case_13_index_not_unique","Case_14_remove_one_more_index_without_unique","Case_15_remove_one_more_index_with_unique","Case_16_remove_new_column_in_index","Case_17_restore_replaced_column_in_index","Case_18_index_not_unique","Case_19_unnamed_index_became_titled","Case_20_titled_index_became_unnamed","Case_21_unnamed_index_append_column","Case_22_unnamed_index_pop_column","Case_23_unnamed_index_replaced_column","Case_24_unnamed_index_became_unique","Case_25_unnamed_index_lost_unique"];export{n as Case_01_add_index_when_none_present,i as Case_02_add_index_unique_when_none_present,c as Case_03_remove_index_when_none_present,t as Case_04_remove_index_unique_when_none_present,r as Case_05_add_one_more_index_without_unique,s as Case_06_add_one_more_index_with_unique,d as Case_07_remove_one_more_index_without_unique,a as Case_08_remove_one_more_index_with_unique,_ as Case_09_append_new_column_in_index,o as Case_10_remove_new_column_in_index,E as Case_11_replaced_column_in_index,u as Case_12_index_became_unique,l as Case_13_index_not_unique,p as Case_14_remove_one_more_index_without_unique,m as Case_15_remove_one_more_index_with_unique,T as Case_16_remove_new_column_in_index,C as Case_17_restore_replaced_column_in_index,g as Case_18_index_not_unique,b as Case_19_unnamed_index_became_titled,A as Case_20_titled_index_became_unnamed,x as Case_21_unnamed_index_append_column,S as Case_22_unnamed_index_pop_column,I as Case_23_unnamed_index_replaced_column,f as Case_24_unnamed_index_became_unique,N as Case_25_unnamed_index_lost_unique,oi as __namedExportsOrder,_i as default};
