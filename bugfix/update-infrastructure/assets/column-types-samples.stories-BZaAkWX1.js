import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as ee,i as te,n as ne,o as re,r as ie,t as ae}from"./ddl-samples-common-Bcvrnfqw.js";var oe;function se(){return(se=e((()=>{oe=`CREATE TABLE t (
  c bigint
);
`})))()}var ce;function le(){return(le=e((()=>{ce=`CREATE TABLE t (
  c bit(8)
);
`})))()}var ue;function de(){return(de=e((()=>{ue=`CREATE TABLE t (
  c bit varying(16)
);
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`CREATE TABLE t (
  c boolean
);
`})))()}var me;function he(){return(he=e((()=>{me=`CREATE TABLE t (
  c box
);
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`CREATE TABLE t (
  c bytea
);
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`CREATE TABLE t (
  c char(5)
);
`})))()}var be;function xe(){return(xe=e((()=>{be=`CREATE TABLE t (
  c character(10)
);
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`CREATE TABLE t (
  c character varying(255)
);
`})))()}var we;function Te(){return(Te=e((()=>{we=`CREATE TABLE t (
  c cidr
);
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`CREATE TABLE t (
  c circle
);
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`CREATE TABLE t (
  c date
);
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`CREATE TABLE t (
  c decimal(6, 3)
);
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`CREATE DOMAIN positive_int AS integer CHECK (VALUE > 0);

CREATE TABLE t (
  c positive_int
);
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`CREATE TABLE t (
  c double precision
);
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`CREATE TYPE mood AS ENUM ('happy', 'sad');

CREATE TABLE t (
  c mood
);
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`CREATE TABLE t (
  c inet
);
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`CREATE TABLE t (
  c integer
);
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`CREATE TABLE t (
  c interval
);
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`CREATE TABLE t (
  c json
);
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`CREATE TABLE t (
  c jsonb
);
`})))()}var t;function n(){return(n=e((()=>{t=`CREATE TABLE t (
  c line
);
`})))()}var r;function i(){return(i=e((()=>{r=`CREATE TABLE t (
  c lseg
);
`})))()}var a;function o(){return(o=e((()=>{a=`CREATE TABLE t (
  c macaddr
);
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`CREATE TABLE t (
  c macaddr8
);
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`CREATE TABLE t (
  c money
);
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`CREATE TABLE t (
  c numeric
);
`})))()}var et;function tt(){return(tt=e((()=>{et=`CREATE TABLE t (
  c numeric(10, 2)
);
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`CREATE TABLE t (
  c path
);
`})))()}var it;function at(){return(at=e((()=>{it=`CREATE TABLE t (
  c point
);
`})))()}var ot;function st(){return(st=e((()=>{ot=`CREATE TABLE t (
  c polygon
);
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`CREATE TABLE t (
  c real
);
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`CREATE TABLE t (
  c smallint
);
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`CREATE TABLE t (
  c text
);
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`CREATE TABLE t (
  c time
);
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`CREATE TABLE t (
  c time(3)
);
`})))()}var vt;function s(){return(s=e((()=>{vt=`CREATE TABLE t (
  c time with time zone
);
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`CREATE TABLE t (
  c timestamp
);
`})))()}var xt;function St(){return(St=e((()=>{xt=`CREATE TABLE t (
  c timestamp(6)
);
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`CREATE TABLE t (
  c timestamptz
);
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`CREATE TABLE t (
  c tsquery
);
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`CREATE TABLE t (
  c tsvector
);
`})))()}var kt;function At(){return(At=e((()=>{kt=`CREATE TABLE t (
  c uuid
);
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`CREATE TABLE t (
  c varchar(100)
);
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`CREATE TABLE t (
  c xml
);
`})))()}var Ft,It,c,Lt,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Rt;function zt(){return(zt=e((()=>{se(),le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),n(),i(),o(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),s(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),re(),ie(),Ft=te(Object.assign({"../../../../samples/ddlapi/column-types/bigint/sample.sql":oe,"../../../../samples/ddlapi/column-types/bit/sample.sql":ce,"../../../../samples/ddlapi/column-types/bit-varying/sample.sql":ue,"../../../../samples/ddlapi/column-types/boolean/sample.sql":fe,"../../../../samples/ddlapi/column-types/box/sample.sql":me,"../../../../samples/ddlapi/column-types/bytea/sample.sql":ge,"../../../../samples/ddlapi/column-types/char/sample.sql":ve,"../../../../samples/ddlapi/column-types/character/sample.sql":be,"../../../../samples/ddlapi/column-types/character-varying/sample.sql":Se,"../../../../samples/ddlapi/column-types/cidr/sample.sql":we,"../../../../samples/ddlapi/column-types/circle/sample.sql":Ee,"../../../../samples/ddlapi/column-types/date/sample.sql":Oe,"../../../../samples/ddlapi/column-types/decimal-precision-scale/sample.sql":Ae,"../../../../samples/ddlapi/column-types/domain/sample.sql":Me,"../../../../samples/ddlapi/column-types/double-precision/sample.sql":Pe,"../../../../samples/ddlapi/column-types/enum/sample.sql":Ie,"../../../../samples/ddlapi/column-types/inet/sample.sql":Re,"../../../../samples/ddlapi/column-types/integer/sample.sql":Be,"../../../../samples/ddlapi/column-types/interval/sample.sql":He,"../../../../samples/ddlapi/column-types/json/sample.sql":We,"../../../../samples/ddlapi/column-types/jsonb/sample.sql":Ke,"../../../../samples/ddlapi/column-types/line/sample.sql":t,"../../../../samples/ddlapi/column-types/lseg/sample.sql":r,"../../../../samples/ddlapi/column-types/macaddr/sample.sql":a,"../../../../samples/ddlapi/column-types/macaddr-8/sample.sql":Je,"../../../../samples/ddlapi/column-types/money/sample.sql":Xe,"../../../../samples/ddlapi/column-types/numeric/sample.sql":Qe,"../../../../samples/ddlapi/column-types/numeric-precision-scale/sample.sql":et,"../../../../samples/ddlapi/column-types/path/sample.sql":nt,"../../../../samples/ddlapi/column-types/point/sample.sql":it,"../../../../samples/ddlapi/column-types/polygon/sample.sql":ot,"../../../../samples/ddlapi/column-types/real/sample.sql":ct,"../../../../samples/ddlapi/column-types/smallint/sample.sql":ut,"../../../../samples/ddlapi/column-types/text/sample.sql":ft,"../../../../samples/ddlapi/column-types/time/sample.sql":mt,"../../../../samples/ddlapi/column-types/time-precision/sample.sql":gt,"../../../../samples/ddlapi/column-types/time-with-time-zone/sample.sql":vt,"../../../../samples/ddlapi/column-types/timestamp/sample.sql":yt,"../../../../samples/ddlapi/column-types/timestamp-precision/sample.sql":xt,"../../../../samples/ddlapi/column-types/timestamptz/sample.sql":Ct,"../../../../samples/ddlapi/column-types/tsquery/sample.sql":Tt,"../../../../samples/ddlapi/column-types/tsvector/sample.sql":Dt,"../../../../samples/ddlapi/column-types/uuid/sample.sql":kt,"../../../../samples/ddlapi/column-types/varchar/sample.sql":jt,"../../../../samples/ddlapi/column-types/xml/sample.sql":Nt})),It=ee(Ft),c=ae(It),Lt={...ne,id:`ddlapi-suite-column-types`,title:`DDL API Suite/Column Types`},l=c(`bigint`),u=c(`bit`),d=c(`bit-varying`),f=c(`boolean`),p=c(`box`),m=c(`bytea`),h=c(`char`),g=c(`character`),_=c(`character-varying`),v=c(`cidr`),y=c(`circle`),b=c(`date`),x=c(`decimal-precision-scale`),S=c(`domain`),C=c(`double-precision`),w=c(`enum`),T=c(`inet`),E=c(`integer`),D=c(`interval`),O=c(`json`),k=c(`jsonb`),A=c(`line`),j=c(`lseg`),M=c(`macaddr`),N=c(`macaddr-8`),P=c(`money`),F=c(`numeric`),I=c(`numeric-precision-scale`),L=c(`path`),R=c(`point`),z=c(`polygon`),B=c(`real`),V=c(`smallint`),H=c(`text`),U=c(`time`),W=c(`time-precision`),G=c(`time-with-time-zone`),K=c(`timestamp`),q=c(`timestamp-precision`),J=c(`timestamptz`),Y=c(`tsquery`),X=c(`tsvector`),Z=c(`uuid`),Q=c(`varchar`),$=c(`xml`),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`createCaseStory("bigint")`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`createCaseStory("bit")`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`createCaseStory("bit-varying")`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`createCaseStory("boolean")`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`createCaseStory("box")`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createCaseStory("bytea")`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createCaseStory("char")`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("character")`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("character-varying")`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("cidr")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("circle")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("date")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("decimal-precision-scale")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("domain")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("double-precision")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("enum")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("inet")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("integer")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("interval")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("json")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("jsonb")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("line")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("lseg")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("macaddr")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("macaddr-8")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("money")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("numeric")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("numeric-precision-scale")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("path")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("point")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("polygon")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("real")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("smallint")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("text")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("time")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("time-precision")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("time-with-time-zone")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("timestamp")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("timestamp-precision")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("timestamptz")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("tsquery")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("tsvector")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("uuid")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("varchar")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("xml")`,...$.parameters?.docs?.source}}},Rt=`Bigint.Bit.BitVarying.Boolean.Box.Bytea.Char.Character.CharacterVarying.Cidr.Circle.Date.DecimalPrecisionScale.Domain.DoublePrecision.Enum.Inet.Integer.Interval.Json.Jsonb.Line.Lseg.Macaddr.Macaddr8.Money.Numeric.NumericPrecisionScale.Path.Point.Polygon.Real.Smallint.Text.Time.TimePrecision.TimeWithTimeZone.Timestamp.TimestampPrecision.Timestamptz.Tsquery.Tsvector.Uuid.Varchar.Xml`.split(`.`)})))()}zt();export{l as Bigint,u as Bit,d as BitVarying,f as Boolean,p as Box,m as Bytea,h as Char,g as Character,_ as CharacterVarying,v as Cidr,y as Circle,b as Date,x as DecimalPrecisionScale,S as Domain,C as DoublePrecision,w as Enum,T as Inet,E as Integer,D as Interval,O as Json,k as Jsonb,A as Line,j as Lseg,M as Macaddr,N as Macaddr8,P as Money,F as Numeric,I as NumericPrecisionScale,L as Path,R as Point,z as Polygon,B as Real,V as Smallint,H as Text,U as Time,W as TimePrecision,G as TimeWithTimeZone,K as Timestamp,q as TimestampPrecision,J as Timestamptz,Y as Tsquery,X as Tsvector,Z as Uuid,Q as Varchar,$ as Xml,Rt as __namedExportsOrder,Lt as default};