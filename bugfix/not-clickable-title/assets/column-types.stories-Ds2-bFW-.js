import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{n as ne,t as re}from"./ddl-samples-cases--_ZpUtcP.js";import{n as ie,r as ae,t as oe}from"./ddl-samples-common-D5u_KB_h.js";var se;function ce(){return(ce=e((()=>{se=`CREATE TABLE t (
  c bigint
);
`})))()}var le;function ue(){return(ue=e((()=>{le=`CREATE TABLE t (
  c bit(8)
);
`})))()}var de;function fe(){return(fe=e((()=>{de=`CREATE TABLE t (
  c bit varying(16)
);
`})))()}var pe;function me(){return(me=e((()=>{pe=`CREATE TABLE t (
  c boolean
);
`})))()}var he;function ge(){return(ge=e((()=>{he=`CREATE TABLE t (
  c box
);
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`CREATE TABLE t (
  c bytea
);
`})))()}var ye;function be(){return(be=e((()=>{ye=`CREATE TABLE t (
  c char(5)
);
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`CREATE TABLE t (
  c character(10)
);
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`CREATE TABLE t (
  c character varying(255)
);
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`CREATE TABLE t (
  c cidr
);
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`CREATE TABLE t (
  c circle
);
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`CREATE TABLE t (
  c date
);
`})))()}var je;function Me(){return(Me=e((()=>{je=`CREATE TABLE t (
  c decimal(6, 3)
);
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`CREATE DOMAIN positive_int AS integer CHECK (VALUE > 0);

CREATE TABLE t (
  c positive_int
);
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`CREATE TABLE t (
  c double precision
);
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`CREATE TYPE mood AS ENUM ('happy', 'sad');

CREATE TABLE t (
  c mood
);
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`CREATE TABLE t (
  c inet
);
`})))()}var Ve;function He(){return(He=e((()=>{Ve=`CREATE TABLE t (
  c integer
);
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`CREATE TABLE t (
  c interval
);
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`CREATE TABLE t (
  c json
);
`})))()}var qe;function t(){return(t=e((()=>{qe=`CREATE TABLE t (
  c jsonb
);
`})))()}var n;function r(){return(r=e((()=>{n=`CREATE TABLE t (
  c line
);
`})))()}var Je;function i(){return(i=e((()=>{Je=`CREATE TABLE t (
  c lseg
);
`})))()}var a;function o(){return(o=e((()=>{a=`CREATE TABLE t (
  c macaddr
);
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`CREATE TABLE t (
  c macaddr8
);
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`CREATE TABLE t (
  c money
);
`})))()}var $e;function et(){return(et=e((()=>{$e=`CREATE TABLE t (
  c numeric
);
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`CREATE TABLE t (
  c numeric(10, 2)
);
`})))()}var rt;function it(){return(it=e((()=>{rt=`CREATE TABLE t (
  c path
);
`})))()}var at;function ot(){return(ot=e((()=>{at=`CREATE TABLE t (
  c point
);
`})))()}var st;function ct(){return(ct=e((()=>{st=`CREATE TABLE t (
  c polygon
);
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`CREATE TABLE t (
  c real
);
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`CREATE TABLE t (
  c smallint
);
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`CREATE TABLE t (
  c text
);
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`CREATE TABLE t (
  c time
);
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`CREATE TABLE t (
  c time(3)
);
`})))()}var s;function yt(){return(yt=e((()=>{s=`CREATE TABLE t (
  c time with time zone
);
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`CREATE TABLE t (
  c timestamp
);
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`CREATE TABLE t (
  c timestamp(6)
);
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`CREATE TABLE t (
  c timestamptz
);
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`CREATE TABLE t (
  c tsquery
);
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`CREATE TABLE t (
  c tsvector
);
`})))()}var At;function jt(){return(jt=e((()=>{At=`CREATE TABLE t (
  c uuid
);
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`CREATE TABLE t (
  c varchar(100)
);
`})))()}var Pt;function Ft(){return(Ft=e((()=>{Pt=`CREATE TABLE t (
  c xml
);
`})))()}var It,Lt,c,Rt,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,zt;function Bt(){return(Bt=e((()=>{ce(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),t(),r(),i(),o(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),ne(),ee(),ae(),It=re(Object.assign({"../../../../samples/ddlapi/column-types/bigint/sample.sql":se,"../../../../samples/ddlapi/column-types/bit/sample.sql":le,"../../../../samples/ddlapi/column-types/bit-varying/sample.sql":de,"../../../../samples/ddlapi/column-types/boolean/sample.sql":pe,"../../../../samples/ddlapi/column-types/box/sample.sql":he,"../../../../samples/ddlapi/column-types/bytea/sample.sql":_e,"../../../../samples/ddlapi/column-types/char/sample.sql":ye,"../../../../samples/ddlapi/column-types/character/sample.sql":xe,"../../../../samples/ddlapi/column-types/character-varying/sample.sql":Ce,"../../../../samples/ddlapi/column-types/cidr/sample.sql":Te,"../../../../samples/ddlapi/column-types/circle/sample.sql":De,"../../../../samples/ddlapi/column-types/date/sample.sql":ke,"../../../../samples/ddlapi/column-types/decimal-precision-scale/sample.sql":je,"../../../../samples/ddlapi/column-types/domain/sample.sql":Ne,"../../../../samples/ddlapi/column-types/double-precision/sample.sql":Fe,"../../../../samples/ddlapi/column-types/enum/sample.sql":Le,"../../../../samples/ddlapi/column-types/inet/sample.sql":ze,"../../../../samples/ddlapi/column-types/integer/sample.sql":Ve,"../../../../samples/ddlapi/column-types/interval/sample.sql":Ue,"../../../../samples/ddlapi/column-types/json/sample.sql":Ge,"../../../../samples/ddlapi/column-types/jsonb/sample.sql":qe,"../../../../samples/ddlapi/column-types/line/sample.sql":n,"../../../../samples/ddlapi/column-types/lseg/sample.sql":Je,"../../../../samples/ddlapi/column-types/macaddr/sample.sql":a,"../../../../samples/ddlapi/column-types/macaddr-8/sample.sql":Ye,"../../../../samples/ddlapi/column-types/money/sample.sql":Ze,"../../../../samples/ddlapi/column-types/numeric/sample.sql":$e,"../../../../samples/ddlapi/column-types/numeric-precision-scale/sample.sql":tt,"../../../../samples/ddlapi/column-types/path/sample.sql":rt,"../../../../samples/ddlapi/column-types/point/sample.sql":at,"../../../../samples/ddlapi/column-types/polygon/sample.sql":st,"../../../../samples/ddlapi/column-types/real/sample.sql":lt,"../../../../samples/ddlapi/column-types/smallint/sample.sql":dt,"../../../../samples/ddlapi/column-types/text/sample.sql":pt,"../../../../samples/ddlapi/column-types/time/sample.sql":ht,"../../../../samples/ddlapi/column-types/time-precision/sample.sql":_t,"../../../../samples/ddlapi/column-types/time-with-time-zone/sample.sql":s,"../../../../samples/ddlapi/column-types/timestamp/sample.sql":bt,"../../../../samples/ddlapi/column-types/timestamp-precision/sample.sql":St,"../../../../samples/ddlapi/column-types/timestamptz/sample.sql":wt,"../../../../samples/ddlapi/column-types/tsquery/sample.sql":Et,"../../../../samples/ddlapi/column-types/tsvector/sample.sql":Ot,"../../../../samples/ddlapi/column-types/uuid/sample.sql":At,"../../../../samples/ddlapi/column-types/varchar/sample.sql":Mt,"../../../../samples/ddlapi/column-types/xml/sample.sql":Pt})),Lt=te(It),c=oe(Lt),Rt={...ie,id:`ddlapi-suite-column-types`,title:`DDL API Suite/Column Types`},l=c(`bigint`),u=c(`bit`),d=c(`bit-varying`),f=c(`boolean`),p=c(`box`),m=c(`bytea`),h=c(`char`),g=c(`character`),_=c(`character-varying`),v=c(`cidr`),y=c(`circle`),b=c(`date`),x=c(`decimal-precision-scale`),S=c(`domain`),C=c(`double-precision`),w=c(`enum`),T=c(`inet`),E=c(`integer`),D=c(`interval`),O=c(`json`),k=c(`jsonb`),A=c(`line`),j=c(`lseg`),M=c(`macaddr`),N=c(`macaddr-8`),P=c(`money`),F=c(`numeric`),I=c(`numeric-precision-scale`),L=c(`path`),R=c(`point`),z=c(`polygon`),B=c(`real`),V=c(`smallint`),H=c(`text`),U=c(`time`),W=c(`time-precision`),G=c(`time-with-time-zone`),K=c(`timestamp`),q=c(`timestamp-precision`),J=c(`timestamptz`),Y=c(`tsquery`),X=c(`tsvector`),Z=c(`uuid`),Q=c(`varchar`),$=c(`xml`),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`createCaseStory("bigint")`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`createCaseStory("bit")`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`createCaseStory("bit-varying")`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`createCaseStory("boolean")`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`createCaseStory("box")`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createCaseStory("bytea")`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createCaseStory("char")`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("character")`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("character-varying")`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("cidr")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("circle")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("date")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("decimal-precision-scale")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("domain")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("double-precision")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("enum")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("inet")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("integer")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("interval")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("json")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("jsonb")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("line")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("lseg")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("macaddr")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("macaddr-8")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("money")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("numeric")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("numeric-precision-scale")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("path")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("point")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("polygon")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("real")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("smallint")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("text")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("time")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("time-precision")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("time-with-time-zone")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("timestamp")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("timestamp-precision")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("timestamptz")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("tsquery")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("tsvector")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("uuid")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("varchar")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("xml")`,...$.parameters?.docs?.source}}},zt=`Bigint.Bit.BitVarying.Boolean.Box.Bytea.Char.Character.CharacterVarying.Cidr.Circle.Date.DecimalPrecisionScale.Domain.DoublePrecision.Enum.Inet.Integer.Interval.Json.Jsonb.Line.Lseg.Macaddr.Macaddr8.Money.Numeric.NumericPrecisionScale.Path.Point.Polygon.Real.Smallint.Text.Time.TimePrecision.TimeWithTimeZone.Timestamp.TimestampPrecision.Timestamptz.Tsquery.Tsvector.Uuid.Varchar.Xml`.split(`.`)})))()}Bt();export{l as Bigint,u as Bit,d as BitVarying,f as Boolean,p as Box,m as Bytea,h as Char,g as Character,_ as CharacterVarying,v as Cidr,y as Circle,b as Date,x as DecimalPrecisionScale,S as Domain,C as DoublePrecision,w as Enum,T as Inet,E as Integer,D as Interval,O as Json,k as Jsonb,A as Line,j as Lseg,M as Macaddr,N as Macaddr8,P as Money,F as Numeric,I as NumericPrecisionScale,L as Path,R as Point,z as Polygon,B as Real,V as Smallint,H as Text,U as Time,W as TimePrecision,G as TimeWithTimeZone,K as Timestamp,q as TimestampPrecision,J as Timestamptz,Y as Tsquery,X as Tsvector,Z as Uuid,Q as Varchar,$ as Xml,zt as __namedExportsOrder,Rt as default};