import{c as ye,d as Ue,a as Qe}from"./ddlapi-diffs-utils-31421dfa.js";import{b as je}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-fd6285f4.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";/* empty css              */import"./build-from-ddl-browser-8639db24.js";import"./iframe-b8cab779.js";import"../sb-preview/runtime.js";import"./test-diff-meta-keys-5677f54d.js";import"./ddl-story-navigation-f02fad16.js";import"./ddl-story-realm-utils-c0692776.js";const Ge=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
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

CREATE INDEX idx_t_code ON public.t (code);
`,ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
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

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,We=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,Ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,$e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c2);
`,en=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c3);
`,In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'CHANGED index description text';
`,Fn=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":Ge,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":Pe,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":ke,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":ze,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":Je,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":Ke,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":Ve,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":We,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":Ye,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":Ze,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":$e,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":en,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/before.sql":nn,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/before.sql":cn,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/before.sql":tn,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/before.sql":dn,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/before.sql":sn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/before.sql":rn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/before.sql":an,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/before.sql":on,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/before.sql":_n,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/before.sql":En,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/before.sql":pn}),Hn=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":ln,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":un,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":mn,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":Tn,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":Cn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":gn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":bn,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":xn,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":An,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":Sn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Nn,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":In,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/after.sql":fn,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/after.sql":Rn,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/after.sql":qn,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/after.sql":On,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/after.sql":Xn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/after.sql":hn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/after.sql":vn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/after.sql":wn,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/after.sql":Dn,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/after.sql":Mn,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/after.sql":Bn}),Ln=ye(Fn,Hn),yn=je(Ln),ei={...Ue,title:"DDL API Diffs Suite/Index Changes Samples"},e=Qe(yn),n=e("01-add-index-when-none-present"),i=e("02-add-index-unique-when-none-present"),c=e("03-remove-index-when-none-present"),t=e("04-remove-index-unique-when-none-present"),d=e("05-add-one-more-index-without-unique"),s=e("06-add-one-more-index-with-unique"),r=e("07-remove-one-more-index-without-unique"),a=e("08-remove-one-more-index-with-unique"),o=e("09-append-new-column-in-index"),_=e("10-remove-new-column-in-index"),E=e("11-replaced-column-in-index"),p=e("12-index-became-unique"),l=e("13-index-lost-unique"),u=e("17-unnamed-index-became-titled"),m=e("18-titled-index-became-unnamed"),T=e("19-unnamed-index-append-column"),C=e("20-unnamed-index-pop-column"),g=e("21-unnamed-index-replaced-column"),b=e("22-unnamed-index-became-unique"),x=e("23-unnamed-index-lost-unique"),A=e("24-add-index-description"),S=e("25-remove-index-description"),N=e("26-replace-index-description");var I,f,R;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("01-add-index-when-none-present")',...(R=(f=n.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var q,O,X;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("02-add-index-unique-when-none-present")',...(X=(O=i.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var h,v,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("03-remove-index-when-none-present")',...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,M,B;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("04-remove-index-unique-when-none-present")',...(B=(M=t.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var F,H,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("05-add-one-more-index-without-unique")',...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var y,U,Q;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("06-add-one-more-index-with-unique")',...(Q=(U=s.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var j,G,P;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("07-remove-one-more-index-without-unique")',...(P=(G=r.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var k,z,J;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("08-remove-one-more-index-with-unique")',...(J=(z=a.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,V,W;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("09-append-new-column-in-index")',...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,Z,$;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("10-remove-new-column-in-index")',...($=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,ie;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("11-replaced-column-in-index")',...(ie=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,te,de;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("12-index-became-unique")',...(de=(te=p.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var se,re,ae;l.parameters={...l.parameters,docs:{...(se=l.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("13-index-lost-unique")',...(ae=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,_e,Ee;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("17-unnamed-index-became-titled")',...(Ee=(_e=u.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var pe,le,ue;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("18-titled-index-became-unnamed")',...(ue=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var me,Te,Ce;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("19-unnamed-index-append-column")',...(Ce=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ge,be,xe;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("20-unnamed-index-pop-column")',...(xe=(be=C.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Ae,Se,Ne;g.parameters={...g.parameters,docs:{...(Ae=g.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("21-unnamed-index-replaced-column")',...(Ne=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ie,fe,Re;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("22-unnamed-index-became-unique")',...(Re=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:Re.source}}};var qe,Oe,Xe;x.parameters={...x.parameters,docs:{...(qe=x.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("23-unnamed-index-lost-unique")',...(Xe=(Oe=x.parameters)==null?void 0:Oe.docs)==null?void 0:Xe.source}}};var he,ve,we;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("24-add-index-description")',...(we=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var De,Me,Be;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("25-remove-index-description")',...(Be=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Fe,He,Le;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("26-replace-index-description")',...(Le=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};const ni=["Case_01_add_index_when_none_present","Case_02_add_index_unique_when_none_present","Case_03_remove_index_when_none_present","Case_04_remove_index_unique_when_none_present","Case_05_add_one_more_index_without_unique","Case_06_add_one_more_index_with_unique","Case_07_remove_one_more_index_without_unique","Case_08_remove_one_more_index_with_unique","Case_09_append_new_column_in_index","Case_10_remove_new_column_in_index","Case_11_replaced_column_in_index","Case_12_index_became_unique","Case_13_index_lost_unique","Case_17_unnamed_index_became_titled","Case_18_titled_index_became_unnamed","Case_19_unnamed_index_append_column","Case_20_unnamed_index_pop_column","Case_21_unnamed_index_replaced_column","Case_22_unnamed_index_became_unique","Case_23_unnamed_index_lost_unique","Case_24_add_index_description","Case_25_remove_index_description","Case_26_replace_index_description"];export{n as Case_01_add_index_when_none_present,i as Case_02_add_index_unique_when_none_present,c as Case_03_remove_index_when_none_present,t as Case_04_remove_index_unique_when_none_present,d as Case_05_add_one_more_index_without_unique,s as Case_06_add_one_more_index_with_unique,r as Case_07_remove_one_more_index_without_unique,a as Case_08_remove_one_more_index_with_unique,o as Case_09_append_new_column_in_index,_ as Case_10_remove_new_column_in_index,E as Case_11_replaced_column_in_index,p as Case_12_index_became_unique,l as Case_13_index_lost_unique,u as Case_17_unnamed_index_became_titled,m as Case_18_titled_index_became_unnamed,T as Case_19_unnamed_index_append_column,C as Case_20_unnamed_index_pop_column,g as Case_21_unnamed_index_replaced_column,b as Case_22_unnamed_index_became_unique,x as Case_23_unnamed_index_lost_unique,A as Case_24_add_index_description,S as Case_25_remove_index_description,N as Case_26_replace_index_description,ni as __namedExportsOrder,ei as default};
