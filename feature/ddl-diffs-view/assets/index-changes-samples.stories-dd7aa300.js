import{c as dn,a as sn,d as on,b as an}from"./ddlapi-diffs-utils-3e39316e.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-a4c16d47.js";import"./DiffBadge-2df369cb.js";import"./index-d1f148d9.js";/* empty css              */import"./build-from-ddl-browser-ea49d0db.js";import"./iframe-5a2848f4.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const _n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`,Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`,jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`,Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`,Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`,Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,Kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c3 ON public.t (c1, c3);
`,Vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`,Wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,Zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,$n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,ei=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`,ni=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,ii=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`,ci=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,ti=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`,ri=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`,di=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`,si=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`,oi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`,ai=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`,_i=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`,Ei=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'CHANGED index description text';
`,ui=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":_n,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":En,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":un,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":ln,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":pn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":mn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":Tn,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":Cn,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":gn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":bn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":xn,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":An,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/before.sql":Sn,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/before.sql":Nn,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/before.sql":In,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/before.sql":fn,"../../../../samples/ddlapi-diffs/index-changes/17-restore-replaced-column-in-index/before.sql":Rn,"../../../../samples/ddlapi-diffs/index-changes/18-index-not-unique/before.sql":qn,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-became-titled/before.sql":On,"../../../../samples/ddlapi-diffs/index-changes/20-titled-index-became-unnamed/before.sql":Xn,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-append-column/before.sql":hn,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-pop-column/before.sql":vn,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-replaced-column/before.sql":wn,"../../../../samples/ddlapi-diffs/index-changes/24-unnamed-index-became-unique/before.sql":Dn,"../../../../samples/ddlapi-diffs/index-changes/25-unnamed-index-lost-unique/before.sql":Mn,"../../../../samples/ddlapi-diffs/index-changes/26-add-index-description/before.sql":Bn,"../../../../samples/ddlapi-diffs/index-changes/27-remove-index-description/before.sql":Fn,"../../../../samples/ddlapi-diffs/index-changes/28-replace-index-description/before.sql":Hn}),li=Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":Ln,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":yn,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Un,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":Qn,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":jn,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":Gn,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":Pn,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":kn,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":zn,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":Jn,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Kn,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":Vn,"../../../../samples/ddlapi-diffs/index-changes/13-index-not-unique/after.sql":Wn,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/after.sql":Yn,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/after.sql":Zn,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/after.sql":$n,"../../../../samples/ddlapi-diffs/index-changes/17-restore-replaced-column-in-index/after.sql":ei,"../../../../samples/ddlapi-diffs/index-changes/18-index-not-unique/after.sql":ni,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-became-titled/after.sql":ii,"../../../../samples/ddlapi-diffs/index-changes/20-titled-index-became-unnamed/after.sql":ci,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-append-column/after.sql":ti,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-pop-column/after.sql":ri,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-replaced-column/after.sql":di,"../../../../samples/ddlapi-diffs/index-changes/24-unnamed-index-became-unique/after.sql":si,"../../../../samples/ddlapi-diffs/index-changes/25-unnamed-index-lost-unique/after.sql":oi,"../../../../samples/ddlapi-diffs/index-changes/26-add-index-description/after.sql":ai,"../../../../samples/ddlapi-diffs/index-changes/27-remove-index-description/after.sql":_i,"../../../../samples/ddlapi-diffs/index-changes/28-replace-index-description/after.sql":Ei}),pi=dn(ui,li),mi=sn(pi),qi={...on,title:"DDL API Diffs Suite/Index Changes Samples"},e=an(mi),n=e("01-add-index-when-none-present"),i=e("02-add-index-unique-when-none-present"),c=e("03-remove-index-when-none-present"),t=e("04-remove-index-unique-when-none-present"),r=e("05-add-one-more-index-without-unique"),d=e("06-add-one-more-index-with-unique"),s=e("07-remove-one-more-index-without-unique"),o=e("08-remove-one-more-index-with-unique"),a=e("09-append-new-column-in-index"),_=e("10-remove-new-column-in-index"),E=e("11-replaced-column-in-index"),u=e("12-index-became-unique"),l=e("13-index-not-unique"),p=e("14-remove-one-more-index-without-unique"),m=e("15-remove-one-more-index-with-unique"),T=e("16-remove-new-column-in-index"),C=e("17-restore-replaced-column-in-index"),g=e("18-index-not-unique"),b=e("19-unnamed-index-became-titled"),x=e("20-titled-index-became-unnamed"),A=e("21-unnamed-index-append-column"),S=e("22-unnamed-index-pop-column"),N=e("23-unnamed-index-replaced-column"),I=e("24-unnamed-index-became-unique"),f=e("25-unnamed-index-lost-unique"),R=e("26-add-index-description"),q=e("27-remove-index-description"),O=e("28-replace-index-description");var X,h,v;n.parameters={...n.parameters,docs:{...(X=n.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("01-add-index-when-none-present")',...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,D,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("02-add-index-unique-when-none-present")',...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var B,F,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("03-remove-index-when-none-present")',...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,y,U;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("04-remove-index-unique-when-none-present")',...(U=(y=t.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var Q,j,G;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("05-add-one-more-index-without-unique")',...(G=(j=r.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var P,k,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("06-add-one-more-index-with-unique")',...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var J,K,V;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("07-remove-one-more-index-without-unique")',...(V=(K=s.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var W,Y,Z;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("08-remove-one-more-index-with-unique")',...(Z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:'createCaseStory("09-append-new-column-in-index")',...(ne=(ee=a.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ie,ce,te;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("10-remove-new-column-in-index")',...(te=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:te.source}}};var re,de,se;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("11-replaced-column-in-index")',...(se=(de=E.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var oe,ae,_e;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("12-index-became-unique")',...(_e=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:_e.source}}};var Ee,ue,le;l.parameters={...l.parameters,docs:{...(Ee=l.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("13-index-not-unique")',...(le=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var pe,me,Te;p.parameters={...p.parameters,docs:{...(pe=p.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("14-remove-one-more-index-without-unique")',...(Te=(me=p.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var Ce,ge,be;m.parameters={...m.parameters,docs:{...(Ce=m.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("15-remove-one-more-index-with-unique")',...(be=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var xe,Ae,Se;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("16-remove-new-column-in-index")',...(Se=(Ae=T.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var Ne,Ie,fe;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("17-restore-replaced-column-in-index")',...(fe=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var Re,qe,Oe;g.parameters={...g.parameters,docs:{...(Re=g.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("18-index-not-unique")',...(Oe=(qe=g.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};var Xe,he,ve;b.parameters={...b.parameters,docs:{...(Xe=b.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("19-unnamed-index-became-titled")',...(ve=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var we,De,Me;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("20-titled-index-became-unnamed")',...(Me=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var Be,Fe,He;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("21-unnamed-index-append-column")',...(He=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Le,ye,Ue;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("22-unnamed-index-pop-column")',...(Ue=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Ue.source}}};var Qe,je,Ge;N.parameters={...N.parameters,docs:{...(Qe=N.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("23-unnamed-index-replaced-column")',...(Ge=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var Pe,ke,ze;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("24-unnamed-index-became-unique")',...(ze=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Je,Ke,Ve;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("25-unnamed-index-lost-unique")',...(Ve=(Ke=f.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var We,Ye,Ze;R.parameters={...R.parameters,docs:{...(We=R.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("26-add-index-description")',...(Ze=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,en,nn;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("27-remove-index-description")',...(nn=(en=q.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var cn,tn,rn;O.parameters={...O.parameters,docs:{...(cn=O.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("28-replace-index-description")',...(rn=(tn=O.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const Oi=["Case_01_add_index_when_none_present","Case_02_add_index_unique_when_none_present","Case_03_remove_index_when_none_present","Case_04_remove_index_unique_when_none_present","Case_05_add_one_more_index_without_unique","Case_06_add_one_more_index_with_unique","Case_07_remove_one_more_index_without_unique","Case_08_remove_one_more_index_with_unique","Case_09_append_new_column_in_index","Case_10_remove_new_column_in_index","Case_11_replaced_column_in_index","Case_12_index_became_unique","Case_13_index_not_unique","Case_14_remove_one_more_index_without_unique","Case_15_remove_one_more_index_with_unique","Case_16_remove_new_column_in_index","Case_17_restore_replaced_column_in_index","Case_18_index_not_unique","Case_19_unnamed_index_became_titled","Case_20_titled_index_became_unnamed","Case_21_unnamed_index_append_column","Case_22_unnamed_index_pop_column","Case_23_unnamed_index_replaced_column","Case_24_unnamed_index_became_unique","Case_25_unnamed_index_lost_unique","Case_26_add_index_description","Case_27_remove_index_description","Case_28_replace_index_description"];export{n as Case_01_add_index_when_none_present,i as Case_02_add_index_unique_when_none_present,c as Case_03_remove_index_when_none_present,t as Case_04_remove_index_unique_when_none_present,r as Case_05_add_one_more_index_without_unique,d as Case_06_add_one_more_index_with_unique,s as Case_07_remove_one_more_index_without_unique,o as Case_08_remove_one_more_index_with_unique,a as Case_09_append_new_column_in_index,_ as Case_10_remove_new_column_in_index,E as Case_11_replaced_column_in_index,u as Case_12_index_became_unique,l as Case_13_index_not_unique,p as Case_14_remove_one_more_index_without_unique,m as Case_15_remove_one_more_index_with_unique,T as Case_16_remove_new_column_in_index,C as Case_17_restore_replaced_column_in_index,g as Case_18_index_not_unique,b as Case_19_unnamed_index_became_titled,x as Case_20_titled_index_became_unnamed,A as Case_21_unnamed_index_append_column,S as Case_22_unnamed_index_pop_column,N as Case_23_unnamed_index_replaced_column,I as Case_24_unnamed_index_became_unique,f as Case_25_unnamed_index_lost_unique,R as Case_26_add_index_description,q as Case_27_remove_index_description,O as Case_28_replace_index_description,Oi as __namedExportsOrder,qi as default};
