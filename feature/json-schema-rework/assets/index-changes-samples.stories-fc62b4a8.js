import{c as Ye,a as Ze,d as $e,b as en}from"./ddlapi-diffs-utils-394f1f1a.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-4658ea49.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-33d050d7.js";/* empty css              */import"./build-from-ddl-browser-5d12114c.js";import"./iframe-aed3d58b.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c2);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c3);
`,yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,Kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`,Vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,Wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,Zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,$n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'CHANGED index description text';
`,ei=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":nn,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":cn,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":tn,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":dn,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":rn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":sn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":on,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":an,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":_n,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":En,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":ln,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":un,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/before.sql":pn,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/before.sql":mn,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/before.sql":Tn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/before.sql":Cn,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/before.sql":gn,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/before.sql":bn,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/before.sql":xn,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/before.sql":An,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/before.sql":Sn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/before.sql":Nn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/before.sql":In,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/before.sql":fn,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/before.sql":Rn,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/before.sql":qn}),ni=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":On,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":hn,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Xn,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":vn,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":wn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":Dn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":Mn,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":Bn,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":Fn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":Hn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Ln,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":yn,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/after.sql":Un,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/after.sql":Qn,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/after.sql":jn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/after.sql":Gn,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/after.sql":Pn,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/after.sql":kn,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/after.sql":zn,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/after.sql":Jn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/after.sql":Kn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/after.sql":Vn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/after.sql":Wn,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/after.sql":Yn,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/after.sql":Zn,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/after.sql":$n}),ii=Ye(ei,ni),ci=Ze(ii),Ti={...$e,title:"DDL API Diffs Suite/Index Changes Samples"},e=en(ci),n=e("01-add-index-when-none-present"),i=e("02-add-index-unique-when-none-present"),c=e("03-remove-index-when-none-present"),t=e("04-remove-index-unique-when-none-present"),d=e("05-add-one-more-index-without-unique"),r=e("06-add-one-more-index-with-unique"),s=e("07-remove-one-more-index-without-unique"),o=e("08-remove-one-more-index-with-unique"),a=e("09-append-new-column-in-index"),_=e("10-remove-new-column-in-index"),E=e("11-replaced-column-in-index"),l=e("12-index-became-unique"),u=e("13-index-lost-unique"),p=e("14-remove-one-more-index-without-unique"),m=e("15-remove-one-more-index-with-unique"),T=e("16-remove-new-column-in-index"),C=e("17-unnamed-index-became-titled"),g=e("18-titled-index-became-unnamed"),b=e("19-unnamed-index-append-column"),x=e("20-unnamed-index-pop-column"),A=e("21-unnamed-index-replaced-column"),S=e("22-unnamed-index-became-unique"),N=e("23-unnamed-index-lost-unique"),I=e("24-add-index-description"),f=e("25-remove-index-description"),R=e("26-replace-index-description");var q,O,h;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("01-add-index-when-none-present")',...(h=(O=n.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var X,v,w;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("02-add-index-unique-when-none-present")',...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,M,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("03-remove-index-when-none-present")',...(B=(M=c.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var F,H,L;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("04-remove-index-unique-when-none-present")',...(L=(H=t.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var y,U,Q;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("05-add-one-more-index-without-unique")',...(Q=(U=d.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var j,G,P;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("06-add-one-more-index-with-unique")',...(P=(G=r.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var k,z,J;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("07-remove-one-more-index-without-unique")',...(J=(z=s.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,V,W;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("08-remove-one-more-index-with-unique")',...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,Z,$;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("09-append-new-column-in-index")',...($=(Z=a.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,ie;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("10-remove-new-column-in-index")',...(ie=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,te,de;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("11-replaced-column-in-index")',...(de=(te=E.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var re,se,oe;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("12-index-became-unique")',...(oe=(se=l.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,_e,Ee;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("13-index-lost-unique")',...(Ee=(_e=u.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var le,ue,pe;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("14-remove-one-more-index-without-unique")',...(pe=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,Te,Ce;m.parameters={...m.parameters,docs:{...(me=m.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("15-remove-one-more-index-with-unique")',...(Ce=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ge,be,xe;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("16-remove-new-column-in-index")',...(xe=(be=T.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Ae,Se,Ne;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("17-unnamed-index-became-titled")',...(Ne=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ie,fe,Re;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("18-titled-index-became-unnamed")',...(Re=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Re.source}}};var qe,Oe,he;b.parameters={...b.parameters,docs:{...(qe=b.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("19-unnamed-index-append-column")',...(he=(Oe=b.parameters)==null?void 0:Oe.docs)==null?void 0:he.source}}};var Xe,ve,we;x.parameters={...x.parameters,docs:{...(Xe=x.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("20-unnamed-index-pop-column")',...(we=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var De,Me,Be;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("21-unnamed-index-replaced-column")',...(Be=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Fe,He,Le;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("22-unnamed-index-became-unique")',...(Le=(He=S.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var ye,Ue,Qe;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("23-unnamed-index-lost-unique")',...(Qe=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var je,Ge,Pe;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("24-add-index-description")',...(Pe=(Ge=I.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.source}}};var ke,ze,Je;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("25-remove-index-description")',...(Je=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Ke,Ve,We;R.parameters={...R.parameters,docs:{...(Ke=R.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("26-replace-index-description")',...(We=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};const Ci=["Case_01_add_index_when_none_present","Case_02_add_index_unique_when_none_present","Case_03_remove_index_when_none_present","Case_04_remove_index_unique_when_none_present","Case_05_add_one_more_index_without_unique","Case_06_add_one_more_index_with_unique","Case_07_remove_one_more_index_without_unique","Case_08_remove_one_more_index_with_unique","Case_09_append_new_column_in_index","Case_10_remove_new_column_in_index","Case_11_replaced_column_in_index","Case_12_index_became_unique","Case_13_index_lost_unique","Case_14_remove_one_more_index_without_unique","Case_15_remove_one_more_index_with_unique","Case_16_remove_new_column_in_index","Case_17_unnamed_index_became_titled","Case_18_titled_index_became_unnamed","Case_19_unnamed_index_append_column","Case_20_unnamed_index_pop_column","Case_21_unnamed_index_replaced_column","Case_22_unnamed_index_became_unique","Case_23_unnamed_index_lost_unique","Case_24_add_index_description","Case_25_remove_index_description","Case_26_replace_index_description"];export{n as Case_01_add_index_when_none_present,i as Case_02_add_index_unique_when_none_present,c as Case_03_remove_index_when_none_present,t as Case_04_remove_index_unique_when_none_present,d as Case_05_add_one_more_index_without_unique,r as Case_06_add_one_more_index_with_unique,s as Case_07_remove_one_more_index_without_unique,o as Case_08_remove_one_more_index_with_unique,a as Case_09_append_new_column_in_index,_ as Case_10_remove_new_column_in_index,E as Case_11_replaced_column_in_index,l as Case_12_index_became_unique,u as Case_13_index_lost_unique,p as Case_14_remove_one_more_index_without_unique,m as Case_15_remove_one_more_index_with_unique,T as Case_16_remove_new_column_in_index,C as Case_17_unnamed_index_became_titled,g as Case_18_titled_index_became_unnamed,b as Case_19_unnamed_index_append_column,x as Case_20_unnamed_index_pop_column,A as Case_21_unnamed_index_replaced_column,S as Case_22_unnamed_index_became_unique,N as Case_23_unnamed_index_lost_unique,I as Case_24_add_index_description,f as Case_25_remove_index_description,R as Case_26_replace_index_description,Ci as __namedExportsOrder,Ti as default};
