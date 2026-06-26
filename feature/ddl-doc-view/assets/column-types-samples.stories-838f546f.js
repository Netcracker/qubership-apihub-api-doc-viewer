import{D as Ca}from"./DdlTableViewer-750521b8.js";import{c as Sa,a as Aa,b as ba}from"./ddl-samples-common-adee4b70.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-9c60b91e.js";import"./build-from-ddl-browser-9de55d63.js";import"./iframe-0655e00e.js";import"../sb-preview/runtime.js";const va=`CREATE TABLE t (
  c bigint
);
`,Ba=`CREATE TABLE t (
  c bit varying(16)
);
`,qa=`CREATE TABLE t (
  c bit(8)
);
`,La=`CREATE TABLE t (
  c boolean
);
`,Ra=`CREATE TABLE t (
  c box
);
`,ha=`CREATE TABLE t (
  c bytea
);
`,xa=`CREATE TABLE t (
  c char(5)
);
`,Pa=`CREATE TABLE t (
  c character varying(255)
);
`,Da=`CREATE TABLE t (
  c character(10)
);
`,za=`CREATE TABLE t (
  c cidr
);
`,Ia=`CREATE TABLE t (
  c circle
);
`,ja=`CREATE TABLE t (
  c date
);
`,Ma=`CREATE TABLE t (
  c decimal(6, 3)
);
`,Va=`CREATE DOMAIN positive_int AS integer CHECK (VALUE > 0);

CREATE TABLE t (
  c positive_int
);
`,Na=`CREATE TABLE t (
  c double precision
);
`,wa=`CREATE TYPE mood AS ENUM ('happy', 'sad');

CREATE TABLE t (
  c mood
);
`,Ja=`CREATE TABLE t (
  c inet
);
`,Ua=`CREATE TABLE t (
  c integer
);
`,fa=`CREATE TABLE t (
  c interval
);
`,Oa=`CREATE TABLE t (
  c json
);
`,Fa=`CREATE TABLE t (
  c jsonb
);
`,Wa=`CREATE TABLE t (
  c line
);
`,Xa=`CREATE TABLE t (
  c lseg
);
`,Za=`CREATE TABLE t (
  c macaddr8
);
`,Ha=`CREATE TABLE t (
  c macaddr
);
`,Ka=`CREATE TABLE t (
  c money
);
`,Ya=`CREATE TABLE t (
  c numeric(10, 2)
);
`,ka=`CREATE TABLE t (
  c numeric
);
`,Ga=`CREATE TABLE t (
  c path
);
`,Qa=`CREATE TABLE t (
  c point
);
`,$a=`CREATE TABLE t (
  c polygon
);
`,er=`CREATE TABLE t (
  c real
);
`,sr=`CREATE TABLE t (
  c smallint
);
`,ar=`CREATE TABLE t (
  c text
);
`,rr=`CREATE TABLE t (
  c time(3)
);
`,tr=`CREATE TABLE t (
  c time with time zone
);
`,or=`CREATE TABLE t (
  c time
);
`,cr=`CREATE TABLE t (
  c timestamp(6)
);
`,nr=`CREATE TABLE t (
  c timestamp
);
`,mr=`CREATE TABLE t (
  c timestamptz
);
`,pr=`CREATE TABLE t (
  c tsquery
);
`,ir=`CREATE TABLE t (
  c tsvector
);
`,lr=`CREATE TABLE t (
  c uuid
);
`,dr=`CREATE TABLE t (
  c varchar(100)
);
`,_r=`CREATE TABLE t (
  c xml
);
`,ur=Object.assign({"../../../../samples/ddlapi/column-types/bigint/sample.sql":va,"../../../../samples/ddlapi/column-types/bit-varying/sample.sql":Ba,"../../../../samples/ddlapi/column-types/bit/sample.sql":qa,"../../../../samples/ddlapi/column-types/boolean/sample.sql":La,"../../../../samples/ddlapi/column-types/box/sample.sql":Ra,"../../../../samples/ddlapi/column-types/bytea/sample.sql":ha,"../../../../samples/ddlapi/column-types/char/sample.sql":xa,"../../../../samples/ddlapi/column-types/character-varying/sample.sql":Pa,"../../../../samples/ddlapi/column-types/character/sample.sql":Da,"../../../../samples/ddlapi/column-types/cidr/sample.sql":za,"../../../../samples/ddlapi/column-types/circle/sample.sql":Ia,"../../../../samples/ddlapi/column-types/date/sample.sql":ja,"../../../../samples/ddlapi/column-types/decimal-precision-scale/sample.sql":Ma,"../../../../samples/ddlapi/column-types/domain/sample.sql":Va,"../../../../samples/ddlapi/column-types/double-precision/sample.sql":Na,"../../../../samples/ddlapi/column-types/enum/sample.sql":wa,"../../../../samples/ddlapi/column-types/inet/sample.sql":Ja,"../../../../samples/ddlapi/column-types/integer/sample.sql":Ua,"../../../../samples/ddlapi/column-types/interval/sample.sql":fa,"../../../../samples/ddlapi/column-types/json/sample.sql":Oa,"../../../../samples/ddlapi/column-types/jsonb/sample.sql":Fa,"../../../../samples/ddlapi/column-types/line/sample.sql":Wa,"../../../../samples/ddlapi/column-types/lseg/sample.sql":Xa,"../../../../samples/ddlapi/column-types/macaddr-8/sample.sql":Za,"../../../../samples/ddlapi/column-types/macaddr/sample.sql":Ha,"../../../../samples/ddlapi/column-types/money/sample.sql":Ka,"../../../../samples/ddlapi/column-types/numeric-precision-scale/sample.sql":Ya,"../../../../samples/ddlapi/column-types/numeric/sample.sql":ka,"../../../../samples/ddlapi/column-types/path/sample.sql":Ga,"../../../../samples/ddlapi/column-types/point/sample.sql":Qa,"../../../../samples/ddlapi/column-types/polygon/sample.sql":$a,"../../../../samples/ddlapi/column-types/real/sample.sql":er,"../../../../samples/ddlapi/column-types/smallint/sample.sql":sr,"../../../../samples/ddlapi/column-types/text/sample.sql":ar,"../../../../samples/ddlapi/column-types/time-precision/sample.sql":rr,"../../../../samples/ddlapi/column-types/time-with-time-zone/sample.sql":tr,"../../../../samples/ddlapi/column-types/time/sample.sql":or,"../../../../samples/ddlapi/column-types/timestamp-precision/sample.sql":cr,"../../../../samples/ddlapi/column-types/timestamp/sample.sql":nr,"../../../../samples/ddlapi/column-types/timestamptz/sample.sql":mr,"../../../../samples/ddlapi/column-types/tsquery/sample.sql":pr,"../../../../samples/ddlapi/column-types/tsvector/sample.sql":ir,"../../../../samples/ddlapi/column-types/uuid/sample.sql":lr,"../../../../samples/ddlapi/column-types/varchar/sample.sql":dr,"../../../../samples/ddlapi/column-types/xml/sample.sql":_r}),Er=Sa(ur),yr=Aa(Er),e=ba(yr),qr={id:"ddl-api-suite-column-types",title:"DDL API Suite/Column Types",component:Ca},s=e("bigint"),a=e("bit"),r=e("bit-varying"),t=e("boolean"),o=e("box"),c=e("bytea"),n=e("char"),m=e("character"),p=e("character-varying"),i=e("cidr"),l=e("circle"),d=e("date"),_=e("decimal-precision-scale"),u=e("domain"),E=e("double-precision"),y=e("enum"),g=e("inet"),T=e("integer"),C=e("interval"),S=e("json"),A=e("jsonb"),b=e("line"),v=e("lseg"),B=e("macaddr"),q=e("macaddr-8"),L=e("money"),R=e("numeric"),h=e("numeric-precision-scale"),x=e("path"),P=e("point"),D=e("polygon"),z=e("real"),I=e("smallint"),j=e("text"),M=e("time"),V=e("time-precision"),N=e("time-with-time-zone"),w=e("timestamp"),J=e("timestamp-precision"),U=e("timestamptz"),f=e("tsquery"),O=e("tsvector"),F=e("uuid"),W=e("varchar"),X=e("xml");var Z,H,K;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("bigint")',...(K=(H=s.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Y,k,G;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("bit")',...(G=(k=a.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var Q,$,ee;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("bit-varying")',...(ee=($=r.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ae,re;t.parameters={...t.parameters,docs:{...(se=t.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("boolean")',...(re=(ae=t.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,oe,ce;o.parameters={...o.parameters,docs:{...(te=o.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("box")',...(ce=(oe=o.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ne,me,pe;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("bytea")',...(pe=(me=c.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ie,le,de;n.parameters={...n.parameters,docs:{...(ie=n.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("char")',...(de=(le=n.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var _e,ue,Ee;m.parameters={...m.parameters,docs:{...(_e=m.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("character")',...(Ee=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:Ee.source}}};var ye,ge,Te;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("character-varying")',...(Te=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var Ce,Se,Ae;i.parameters={...i.parameters,docs:{...(Ce=i.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("cidr")',...(Ae=(Se=i.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var be,ve,Be;l.parameters={...l.parameters,docs:{...(be=l.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("circle")',...(Be=(ve=l.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var qe,Le,Re;d.parameters={...d.parameters,docs:{...(qe=d.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("date")',...(Re=(Le=d.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var he,xe,Pe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("decimal-precision-scale")',...(Pe=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var De,ze,Ie;u.parameters={...u.parameters,docs:{...(De=u.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("domain")',...(Ie=(ze=u.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var je,Me,Ve;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("double-precision")',...(Ve=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ne,we,Je;y.parameters={...y.parameters,docs:{...(Ne=y.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("enum")',...(Je=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Je.source}}};var Ue,fe,Oe;g.parameters={...g.parameters,docs:{...(Ue=g.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("inet")',...(Oe=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Oe.source}}};var Fe,We,Xe;T.parameters={...T.parameters,docs:{...(Fe=T.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("integer")',...(Xe=(We=T.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ze,He,Ke;C.parameters={...C.parameters,docs:{...(Ze=C.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("interval")',...(Ke=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Ye,ke,Ge;S.parameters={...S.parameters,docs:{...(Ye=S.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("json")',...(Ge=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var Qe,$e,es;A.parameters={...A.parameters,docs:{...(Qe=A.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("jsonb")',...(es=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:es.source}}};var ss,as,rs;b.parameters={...b.parameters,docs:{...(ss=b.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("line")',...(rs=(as=b.parameters)==null?void 0:as.docs)==null?void 0:rs.source}}};var ts,os,cs;v.parameters={...v.parameters,docs:{...(ts=v.parameters)==null?void 0:ts.docs,source:{originalSource:'createCaseStory("lseg")',...(cs=(os=v.parameters)==null?void 0:os.docs)==null?void 0:cs.source}}};var ns,ms,ps;B.parameters={...B.parameters,docs:{...(ns=B.parameters)==null?void 0:ns.docs,source:{originalSource:'createCaseStory("macaddr")',...(ps=(ms=B.parameters)==null?void 0:ms.docs)==null?void 0:ps.source}}};var is,ls,ds;q.parameters={...q.parameters,docs:{...(is=q.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("macaddr-8")',...(ds=(ls=q.parameters)==null?void 0:ls.docs)==null?void 0:ds.source}}};var _s,us,Es;L.parameters={...L.parameters,docs:{...(_s=L.parameters)==null?void 0:_s.docs,source:{originalSource:'createCaseStory("money")',...(Es=(us=L.parameters)==null?void 0:us.docs)==null?void 0:Es.source}}};var ys,gs,Ts;R.parameters={...R.parameters,docs:{...(ys=R.parameters)==null?void 0:ys.docs,source:{originalSource:'createCaseStory("numeric")',...(Ts=(gs=R.parameters)==null?void 0:gs.docs)==null?void 0:Ts.source}}};var Cs,Ss,As;h.parameters={...h.parameters,docs:{...(Cs=h.parameters)==null?void 0:Cs.docs,source:{originalSource:'createCaseStory("numeric-precision-scale")',...(As=(Ss=h.parameters)==null?void 0:Ss.docs)==null?void 0:As.source}}};var bs,vs,Bs;x.parameters={...x.parameters,docs:{...(bs=x.parameters)==null?void 0:bs.docs,source:{originalSource:'createCaseStory("path")',...(Bs=(vs=x.parameters)==null?void 0:vs.docs)==null?void 0:Bs.source}}};var qs,Ls,Rs;P.parameters={...P.parameters,docs:{...(qs=P.parameters)==null?void 0:qs.docs,source:{originalSource:'createCaseStory("point")',...(Rs=(Ls=P.parameters)==null?void 0:Ls.docs)==null?void 0:Rs.source}}};var hs,xs,Ps;D.parameters={...D.parameters,docs:{...(hs=D.parameters)==null?void 0:hs.docs,source:{originalSource:'createCaseStory("polygon")',...(Ps=(xs=D.parameters)==null?void 0:xs.docs)==null?void 0:Ps.source}}};var Ds,zs,Is;z.parameters={...z.parameters,docs:{...(Ds=z.parameters)==null?void 0:Ds.docs,source:{originalSource:'createCaseStory("real")',...(Is=(zs=z.parameters)==null?void 0:zs.docs)==null?void 0:Is.source}}};var js,Ms,Vs;I.parameters={...I.parameters,docs:{...(js=I.parameters)==null?void 0:js.docs,source:{originalSource:'createCaseStory("smallint")',...(Vs=(Ms=I.parameters)==null?void 0:Ms.docs)==null?void 0:Vs.source}}};var Ns,ws,Js;j.parameters={...j.parameters,docs:{...(Ns=j.parameters)==null?void 0:Ns.docs,source:{originalSource:'createCaseStory("text")',...(Js=(ws=j.parameters)==null?void 0:ws.docs)==null?void 0:Js.source}}};var Us,fs,Os;M.parameters={...M.parameters,docs:{...(Us=M.parameters)==null?void 0:Us.docs,source:{originalSource:'createCaseStory("time")',...(Os=(fs=M.parameters)==null?void 0:fs.docs)==null?void 0:Os.source}}};var Fs,Ws,Xs;V.parameters={...V.parameters,docs:{...(Fs=V.parameters)==null?void 0:Fs.docs,source:{originalSource:'createCaseStory("time-precision")',...(Xs=(Ws=V.parameters)==null?void 0:Ws.docs)==null?void 0:Xs.source}}};var Zs,Hs,Ks;N.parameters={...N.parameters,docs:{...(Zs=N.parameters)==null?void 0:Zs.docs,source:{originalSource:'createCaseStory("time-with-time-zone")',...(Ks=(Hs=N.parameters)==null?void 0:Hs.docs)==null?void 0:Ks.source}}};var Ys,ks,Gs;w.parameters={...w.parameters,docs:{...(Ys=w.parameters)==null?void 0:Ys.docs,source:{originalSource:'createCaseStory("timestamp")',...(Gs=(ks=w.parameters)==null?void 0:ks.docs)==null?void 0:Gs.source}}};var Qs,$s,ea;J.parameters={...J.parameters,docs:{...(Qs=J.parameters)==null?void 0:Qs.docs,source:{originalSource:'createCaseStory("timestamp-precision")',...(ea=($s=J.parameters)==null?void 0:$s.docs)==null?void 0:ea.source}}};var sa,aa,ra;U.parameters={...U.parameters,docs:{...(sa=U.parameters)==null?void 0:sa.docs,source:{originalSource:'createCaseStory("timestamptz")',...(ra=(aa=U.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var ta,oa,ca;f.parameters={...f.parameters,docs:{...(ta=f.parameters)==null?void 0:ta.docs,source:{originalSource:'createCaseStory("tsquery")',...(ca=(oa=f.parameters)==null?void 0:oa.docs)==null?void 0:ca.source}}};var na,ma,pa;O.parameters={...O.parameters,docs:{...(na=O.parameters)==null?void 0:na.docs,source:{originalSource:'createCaseStory("tsvector")',...(pa=(ma=O.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var ia,la,da;F.parameters={...F.parameters,docs:{...(ia=F.parameters)==null?void 0:ia.docs,source:{originalSource:'createCaseStory("uuid")',...(da=(la=F.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var _a,ua,Ea;W.parameters={...W.parameters,docs:{...(_a=W.parameters)==null?void 0:_a.docs,source:{originalSource:'createCaseStory("varchar")',...(Ea=(ua=W.parameters)==null?void 0:ua.docs)==null?void 0:Ea.source}}};var ya,ga,Ta;X.parameters={...X.parameters,docs:{...(ya=X.parameters)==null?void 0:ya.docs,source:{originalSource:'createCaseStory("xml")',...(Ta=(ga=X.parameters)==null?void 0:ga.docs)==null?void 0:Ta.source}}};const Lr=["Bigint","Bit","BitVarying","Boolean","Box","Bytea","Char","Character","CharacterVarying","Cidr","Circle","Date","DecimalPrecisionScale","Domain","DoublePrecision","Enum","Inet","Integer","Interval","Json","Jsonb","Line","Lseg","Macaddr","Macaddr8","Money","Numeric","NumericPrecisionScale","Path","Point","Polygon","Real","Smallint","Text","Time","TimePrecision","TimeWithTimeZone","Timestamp","TimestampPrecision","Timestamptz","Tsquery","Tsvector","Uuid","Varchar","Xml"];export{s as Bigint,a as Bit,r as BitVarying,t as Boolean,o as Box,c as Bytea,n as Char,m as Character,p as CharacterVarying,i as Cidr,l as Circle,d as Date,_ as DecimalPrecisionScale,u as Domain,E as DoublePrecision,y as Enum,g as Inet,T as Integer,C as Interval,S as Json,A as Jsonb,b as Line,v as Lseg,B as Macaddr,q as Macaddr8,L as Money,R as Numeric,h as NumericPrecisionScale,x as Path,P as Point,D as Polygon,z as Real,I as Smallint,j as Text,M as Time,V as TimePrecision,N as TimeWithTimeZone,w as Timestamp,J as TimestampPrecision,U as Timestamptz,f as Tsquery,O as Tsvector,F as Uuid,W as Varchar,X as Xml,Lr as __namedExportsOrder,qr as default};
