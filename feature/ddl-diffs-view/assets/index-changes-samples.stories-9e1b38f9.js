import{c as nn,a as cn,d as tn,b as dn}from"./ddlapi-diffs-utils-7d9d86d1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-a17beac5.js";import"./DiffBadge-6c81c7f3.js";import"./IndexesNodeViewer-9bc65cb7.js";/* empty css              */import"./build-from-ddl-browser-59eab3a7.js";import"./iframe-f8263289.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
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
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
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

CREATE INDEX idx_t_c1 ON public.t (c1);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,$n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,ei=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`,ni=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,ii=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,ci=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,ti=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,di=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'CHANGED index description text';
`,ri=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":rn,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":sn,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":on,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":an,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":_n,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":En,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":un,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":ln,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":pn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":mn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":Tn,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":Cn,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/before.sql":gn,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/before.sql":bn,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/before.sql":xn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/before.sql":An,"../../../../samples/ddlapi-diffs/index-changes/17-index-not-unique/before.sql":Sn,"../../../../samples/ddlapi-diffs/index-changes/18-unnamed-index-became-titled/before.sql":Nn,"../../../../samples/ddlapi-diffs/index-changes/19-titled-index-became-unnamed/before.sql":In,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-append-column/before.sql":fn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-pop-column/before.sql":Rn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-replaced-column/before.sql":qn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-became-unique/before.sql":On,"../../../../samples/ddlapi-diffs/index-changes/24-unnamed-index-lost-unique/before.sql":hn,"../../../../samples/ddlapi-diffs/index-changes/25-add-index-description/before.sql":Xn,"../../../../samples/ddlapi-diffs/index-changes/26-remove-index-description/before.sql":vn,"../../../../samples/ddlapi-diffs/index-changes/27-replace-index-description/before.sql":wn}),si=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":Dn,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":Mn,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Bn,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":Fn,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":Hn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":Ln,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":yn,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":Un,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":Qn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":jn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Gn,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":Pn,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/after.sql":kn,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/after.sql":zn,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/after.sql":Jn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/after.sql":Kn,"../../../../samples/ddlapi-diffs/index-changes/17-index-not-unique/after.sql":Vn,"../../../../samples/ddlapi-diffs/index-changes/18-unnamed-index-became-titled/after.sql":Wn,"../../../../samples/ddlapi-diffs/index-changes/19-titled-index-became-unnamed/after.sql":Yn,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-append-column/after.sql":Zn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-pop-column/after.sql":$n,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-replaced-column/after.sql":ei,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-became-unique/after.sql":ni,"../../../../samples/ddlapi-diffs/index-changes/24-unnamed-index-lost-unique/after.sql":ii,"../../../../samples/ddlapi-diffs/index-changes/25-add-index-description/after.sql":ci,"../../../../samples/ddlapi-diffs/index-changes/26-remove-index-description/after.sql":ti,"../../../../samples/ddlapi-diffs/index-changes/27-replace-index-description/after.sql":di}),oi=nn(ri,si),ai=cn(oi),Si={...tn,title:"DDL API Diffs Suite/Index Changes Samples"},e=dn(ai),n=e("01-add-index-when-none-present"),i=e("02-add-index-unique-when-none-present"),c=e("03-remove-index-when-none-present"),t=e("04-remove-index-unique-when-none-present"),d=e("05-add-one-more-index-without-unique"),r=e("06-add-one-more-index-with-unique"),s=e("07-remove-one-more-index-without-unique"),o=e("08-remove-one-more-index-with-unique"),a=e("09-append-new-column-in-index"),_=e("10-remove-new-column-in-index"),E=e("11-replaced-column-in-index"),u=e("12-index-became-unique"),l=e("13-index-not-unique"),p=e("14-remove-one-more-index-without-unique"),m=e("15-remove-one-more-index-with-unique"),T=e("16-remove-new-column-in-index"),C=e("17-index-not-unique"),g=e("18-unnamed-index-became-titled"),b=e("19-titled-index-became-unnamed"),x=e("20-unnamed-index-append-column"),A=e("21-unnamed-index-pop-column"),S=e("22-unnamed-index-replaced-column"),N=e("23-unnamed-index-became-unique"),I=e("24-unnamed-index-lost-unique"),f=e("25-add-index-description"),R=e("26-remove-index-description"),q=e("27-replace-index-description");var O,h,X;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("01-add-index-when-none-present")',...(X=(h=n.parameters)==null?void 0:h.docs)==null?void 0:X.source}}};var v,w,D;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("02-add-index-unique-when-none-present")',...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,B,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:'createCaseStory("03-remove-index-when-none-present")',...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,L,y;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("04-remove-index-unique-when-none-present")',...(y=(L=t.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var U,Q,j;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("05-add-one-more-index-without-unique")',...(j=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:j.source}}};var G,P,k;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("06-add-one-more-index-with-unique")',...(k=(P=r.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var z,J,K;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("07-remove-one-more-index-without-unique")',...(K=(J=s.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var V,W,Y;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("08-remove-one-more-index-with-unique")',...(Y=(W=o.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;a.parameters={...a.parameters,docs:{...(Z=a.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("09-append-new-column-in-index")',...(ee=($=a.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ie,ce;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("10-remove-new-column-in-index")',...(ce=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var te,de,re;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("11-replaced-column-in-index")',...(re=(de=E.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};var se,oe,ae;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("12-index-became-unique")',...(ae=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var _e,Ee,ue;l.parameters={...l.parameters,docs:{...(_e=l.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("13-index-not-unique")',...(ue=(Ee=l.parameters)==null?void 0:Ee.docs)==null?void 0:ue.source}}};var le,pe,me;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("14-remove-one-more-index-without-unique")',...(me=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var Te,Ce,ge;m.parameters={...m.parameters,docs:{...(Te=m.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("15-remove-one-more-index-with-unique")',...(ge=(Ce=m.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var be,xe,Ae;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("16-remove-new-column-in-index")',...(Ae=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var Se,Ne,Ie;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("17-index-not-unique")',...(Ie=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var fe,Re,qe;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("18-unnamed-index-became-titled")',...(qe=(Re=g.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Oe,he,Xe;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("19-titled-index-became-unnamed")',...(Xe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:Xe.source}}};var ve,we,De;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("20-unnamed-index-append-column")',...(De=(we=x.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Me,Be,Fe;A.parameters={...A.parameters,docs:{...(Me=A.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("21-unnamed-index-pop-column")',...(Fe=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var He,Le,ye;S.parameters={...S.parameters,docs:{...(He=S.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("22-unnamed-index-replaced-column")',...(ye=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:ye.source}}};var Ue,Qe,je;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("23-unnamed-index-became-unique")',...(je=(Qe=N.parameters)==null?void 0:Qe.docs)==null?void 0:je.source}}};var Ge,Pe,ke;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("24-unnamed-index-lost-unique")',...(ke=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var ze,Je,Ke;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("25-add-index-description")',...(Ke=(Je=f.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Ve,We,Ye;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("26-remove-index-description")',...(Ye=(We=R.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var Ze,$e,en;q.parameters={...q.parameters,docs:{...(Ze=q.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("27-replace-index-description")',...(en=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:en.source}}};const Ni=["Case_01_add_index_when_none_present","Case_02_add_index_unique_when_none_present","Case_03_remove_index_when_none_present","Case_04_remove_index_unique_when_none_present","Case_05_add_one_more_index_without_unique","Case_06_add_one_more_index_with_unique","Case_07_remove_one_more_index_without_unique","Case_08_remove_one_more_index_with_unique","Case_09_append_new_column_in_index","Case_10_remove_new_column_in_index","Case_11_replaced_column_in_index","Case_12_index_became_unique","Case_13_index_not_unique","Case_14_remove_one_more_index_without_unique","Case_15_remove_one_more_index_with_unique","Case_16_remove_new_column_in_index","Case_17_index_not_unique","Case_18_unnamed_index_became_titled","Case_19_titled_index_became_unnamed","Case_20_unnamed_index_append_column","Case_21_unnamed_index_pop_column","Case_22_unnamed_index_replaced_column","Case_23_unnamed_index_became_unique","Case_24_unnamed_index_lost_unique","Case_25_add_index_description","Case_26_remove_index_description","Case_27_replace_index_description"];export{n as Case_01_add_index_when_none_present,i as Case_02_add_index_unique_when_none_present,c as Case_03_remove_index_when_none_present,t as Case_04_remove_index_unique_when_none_present,d as Case_05_add_one_more_index_without_unique,r as Case_06_add_one_more_index_with_unique,s as Case_07_remove_one_more_index_without_unique,o as Case_08_remove_one_more_index_with_unique,a as Case_09_append_new_column_in_index,_ as Case_10_remove_new_column_in_index,E as Case_11_replaced_column_in_index,u as Case_12_index_became_unique,l as Case_13_index_not_unique,p as Case_14_remove_one_more_index_without_unique,m as Case_15_remove_one_more_index_with_unique,T as Case_16_remove_new_column_in_index,C as Case_17_index_not_unique,g as Case_18_unnamed_index_became_titled,b as Case_19_titled_index_became_unnamed,x as Case_20_unnamed_index_append_column,A as Case_21_unnamed_index_pop_column,S as Case_22_unnamed_index_replaced_column,N as Case_23_unnamed_index_became_unique,I as Case_24_unnamed_index_lost_unique,f as Case_25_add_index_description,R as Case_26_remove_index_description,q as Case_27_replace_index_description,Ni as __namedExportsOrder,Si as default};
