import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as ee,i as te,n as ne,r as re,t as ie}from"./ddlapi-diffs-utils-C25c8dq2.js";var ae;function oe(){return(oe=e((()=>{ae=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`})))()}var se;function ce(){return(ce=e((()=>{se=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`})))()}var le;function ue(){return(ue=e((()=>{le=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`})))()}var de;function fe(){return(fe=e((()=>{de=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`})))()}var pe;function me(){return(me=e((()=>{pe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`})))()}var he;function ge(){return(ge=e((()=>{he=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`})))()}var ye;function be(){return(be=e((()=>{ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`})))()}var je;function Me(){return(Me=e((()=>{je=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`})))()}var Ve;function He(){return(He=e((()=>{Ve=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`})))()}var $e;function et(){return(et=e((()=>{$e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`})))()}var rt;function it(){return(it=e((()=>{rt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`})))()}var at;function ot(){return(ot=e((()=>{at=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`})))()}var st;function ct(){return(ct=e((()=>{st=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`})))()}var xt;function St(){return(St=e((()=>{xt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`})))()}var kt;function At(){return(At=e((()=>{kt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL
);
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`})))()}var $t;function en(){return(en=e((()=>{$t=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`})))()}var rn;function an(){return(an=e((()=>{rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`})))()}var on;function sn(){return(sn=e((()=>{on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`})))()}var un;function dn(){return(dn=e((()=>{un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`})))()}var On;function kn(){return(kn=e((()=>{On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`})))()}var An;function jn(){return(jn=e((()=>{An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`})))()}var Mn;function Nn(){return(Nn=e((()=>{Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`})))()}var Pn;function Fn(){return(Fn=e((()=>{Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`})))()}var In;function Ln(){return(Ln=e((()=>{In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`})))()}var Rn;function zn(){return(zn=e((()=>{Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`})))()}var Bn;function Vn(){return(Vn=e((()=>{Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`})))()}var Hn;function Un(){return(Un=e((()=>{Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`})))()}var Wn;function Gn(){return(Gn=e((()=>{Wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`})))()}var Kn;function qn(){return(qn=e((()=>{Kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown_1'::character varying NOT NULL
);
`})))()}var Jn;function Yn(){return(Yn=e((()=>{Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`})))()}var Xn;function Zn(){return(Zn=e((()=>{Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`})))()}var Qn;function $n(){return($n=e((()=>{Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`})))()}var er;function tr(){return(tr=e((()=>{er=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`})))()}var nr;function rr(){return(rr=e((()=>{nr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`})))()}var ir;function ar(){return(ar=e((()=>{ir=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`})))()}var or;function sr(){return(sr=e((()=>{or=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`})))()}var cr;function lr(){return(lr=e((()=>{cr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`})))()}var ur;function dr(){return(dr=e((()=>{ur=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`})))()}var fr;function pr(){return(pr=e((()=>{fr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`})))()}var mr;function hr(){return(hr=e((()=>{mr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`})))()}var gr;function _r(){return(_r=e((()=>{gr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`})))()}var vr;function yr(){return(yr=e((()=>{vr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`})))()}var br;function xr(){return(xr=e((()=>{br=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`})))()}var Sr;function Cr(){return(Cr=e((()=>{Sr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`})))()}var wr;function Tr(){return(Tr=e((()=>{wr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`})))()}var Er;function Dr(){return(Dr=e((()=>{Er=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`})))()}var Or;function kr(){return(kr=e((()=>{Or=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`})))()}var Ar;function jr(){return(jr=e((()=>{Ar=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`})))()}var Mr;function Nr(){return(Nr=e((()=>{Mr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`})))()}var Pr;function Fr(){return(Fr=e((()=>{Pr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`})))()}var Ir;function Lr(){return(Lr=e((()=>{Ir=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`})))()}var Rr;function zr(){return(zr=e((()=>{Rr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`})))()}var Br;function Vr(){return(Vr=e((()=>{Br=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`})))()}var Hr;function Ur(){return(Ur=e((()=>{Hr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL
);
`})))()}var Wr;function Gr(){return(Gr=e((()=>{Wr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`})))()}var Kr;function qr(){return(qr=e((()=>{Kr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`})))()}var Jr;function Yr(){return(Yr=e((()=>{Jr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`})))()}var Xr;function Zr(){return(Zr=e((()=>{Xr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`})))()}var Qr;function $r(){return($r=e((()=>{Qr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`})))()}var ei;function ti(){return(ti=e((()=>{ei=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`})))()}var ni;function ri(){return(ri=e((()=>{ni=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`})))()}var ii;function ai(){return(ai=e((()=>{ii=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`})))()}var oi;function si(){return(si=e((()=>{oi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`})))()}var ci;function li(){return(li=e((()=>{ci=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`})))()}var ui;function di(){return(di=e((()=>{ui=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`})))()}var fi;function pi(){return(pi=e((()=>{fi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`})))()}var mi;function hi(){return(hi=e((()=>{mi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`})))()}var gi;function _i(){return(_i=e((()=>{gi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`})))()}var vi;function yi(){return(yi=e((()=>{vi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`})))()}var bi;function xi(){return(xi=e((()=>{bi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`})))()}var Si;function Ci(){return(Ci=e((()=>{Si=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`})))()}var wi;function Ti(){return(Ti=e((()=>{wi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`})))()}var Ei;function Di(){return(Di=e((()=>{Ei=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`})))()}var Oi;function ki(){return(ki=e((()=>{Oi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`})))()}var Ai;function ji(){return(ji=e((()=>{Ai=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`})))()}var Mi;function Ni(){return(Ni=e((()=>{Mi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`})))()}var Pi;function Fi(){return(Fi=e((()=>{Pi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`})))()}var Ii;function Li(){return(Li=e((()=>{Ii=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`})))()}var Ri;function zi(){return(zi=e((()=>{Ri=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var Bi;function Vi(){return(Vi=e((()=>{Bi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 42
);
`})))()}var Hi;function Ui(){return(Ui=e((()=>{Hi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'010'
);
`})))()}var Wi;function Gi(){return(Gi=e((()=>{Wi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'0101'
);
`})))()}var Ki;function qi(){return(qi=e((()=>{Ki=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT false
);
`})))()}var Ji;function Yi(){return(Yi=e((()=>{Ji=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0304'
);
`})))()}var Xi;function Zi(){return(Zi=e((()=>{Xi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'xyz'
);
`})))()}var Qi;function $i(){return($i=e((()=>{Qi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2025-01-01'
);
`})))()}var ea;function ta(){return(ta=e((()=>{ea=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 2.71
);
`})))()}var na;function ra(){return(ra=e((()=>{na=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 42
);
`})))()}var ia;function aa(){return(aa=e((()=>{ia=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '2 hours'
);
`})))()}var oa;function sa(){return(sa=e((()=>{oa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '[]'
);
`})))()}var ca;function la(){return(la=e((()=>{ca=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"published"}'::jsonb
);
`})))()}var ua;function da(){return(da=e((()=>{ua=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 100
);
`})))()}var fa;function pa(){return(pa=e((()=>{fa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 9.99
);
`})))()}var ma;function ha(){return(ha=e((()=>{ma=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 2.5
);
`})))()}var ga;function _a(){return(_a=e((()=>{ga=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 7
);
`})))()}var va;function ya(){return(ya=e((()=>{va=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'published'
);
`})))()}var ba;function xa(){return(xa=e((()=>{ba=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '18:30:00'
);
`})))()}var Sa;function Ca(){return(Ca=e((()=>{Sa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '09:00:00+02'
);
`})))()}var wa;function Ta(){return(Ta=e((()=>{wa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2025-01-01 00:00:00'
);
`})))()}var Ea;function Da(){return(Da=e((()=>{Ea=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2025-01-01 00:00:00+02'
);
`})))()}var Oa;function ka(){return(ka=e((()=>{Oa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
);
`})))()}var Aa;function ja(){return(ja=e((()=>{Aa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'inactive'
);
`})))()}var Ma;function Na(){return(Na=e((()=>{Ma=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'done'
);
`})))()}var Pa;function Fa(){return(Fa=e((()=>{Pa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown_2'::character varying NOT NULL
);
`})))()}var Ia,La,Ra,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,za,H,U,W,G,K,q,J,Y,X,Z,Q,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,$,co;function lo(){return(lo=e((()=>{oe(),ce(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),Vn(),Un(),Gn(),qn(),Yn(),Zn(),$n(),tr(),rr(),ar(),sr(),lr(),dr(),pr(),hr(),_r(),yr(),xr(),Cr(),Tr(),Dr(),kr(),jr(),Nr(),Fr(),Lr(),zr(),Vr(),Ur(),Gr(),qr(),Yr(),Zr(),$r(),ti(),ri(),ai(),si(),li(),di(),pi(),hi(),_i(),yi(),xi(),Ci(),Ti(),Di(),ki(),ji(),Ni(),Fi(),Li(),zi(),Vi(),Ui(),Gi(),qi(),Yi(),Zi(),$i(),ta(),ra(),aa(),sa(),la(),da(),pa(),ha(),_a(),ya(),xa(),Ca(),Ta(),Da(),ka(),ja(),Na(),Fa(),ee(),Ia=ie(Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/before.sql":ae,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/before.sql":se,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/before.sql":le,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/before.sql":de,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/before.sql":pe,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/before.sql":he,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/before.sql":_e,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/before.sql":ye,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/before.sql":xe,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/before.sql":Ce,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/before.sql":Te,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/before.sql":De,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/before.sql":ke,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/before.sql":je,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/before.sql":Ne,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/before.sql":Fe,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/before.sql":Le,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/before.sql":ze,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/before.sql":Ve,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/before.sql":Ue,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/before.sql":Ge,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/before.sql":qe,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/before.sql":Ye,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/before.sql":Ze,"../../../../samples/ddlapi-diffs/column-default-changes/125-add-default-varchar-raw-expr/before.sql":$e,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/before.sql":tt,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/before.sql":rt,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/before.sql":at,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/before.sql":st,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/before.sql":lt,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/before.sql":dt,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/before.sql":pt,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/before.sql":ht,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/before.sql":_t,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/before.sql":yt,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/before.sql":xt,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/before.sql":Ct,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/before.sql":Tt,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/before.sql":Dt,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/before.sql":kt,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/before.sql":jt,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/before.sql":Nt,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/before.sql":Ft,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/before.sql":Lt,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/before.sql":zt,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/before.sql":Vt,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/before.sql":Ut,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/before.sql":Gt,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/before.sql":qt,"../../../../samples/ddlapi-diffs/column-default-changes/225-remove-default-varchar-raw-expr/before.sql":Yt,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/before.sql":Zt,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/before.sql":$t,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/before.sql":tn,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/before.sql":rn,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/before.sql":on,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/before.sql":cn,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/before.sql":un,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/before.sql":fn,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/before.sql":mn,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/before.sql":gn,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/before.sql":vn,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/before.sql":bn,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/before.sql":Sn,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/before.sql":wn,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/before.sql":En,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/before.sql":On,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/before.sql":An,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/before.sql":Mn,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/before.sql":Pn,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/before.sql":In,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/before.sql":Rn,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/before.sql":Bn,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/before.sql":Hn,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/before.sql":Wn,"../../../../samples/ddlapi-diffs/column-default-changes/325-replace-default-varchar-raw-expr/before.sql":Kn}),Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/after.sql":Jn,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/after.sql":Xn,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/after.sql":Qn,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/after.sql":er,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/after.sql":nr,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/after.sql":ir,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/after.sql":or,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/after.sql":cr,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/after.sql":ur,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/after.sql":fr,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/after.sql":mr,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/after.sql":gr,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/after.sql":vr,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/after.sql":br,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/after.sql":Sr,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/after.sql":wr,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/after.sql":Er,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/after.sql":Or,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/after.sql":Ar,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/after.sql":Mr,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/after.sql":Pr,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/after.sql":Ir,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/after.sql":Rr,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/after.sql":Br,"../../../../samples/ddlapi-diffs/column-default-changes/125-add-default-varchar-raw-expr/after.sql":Hr,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/after.sql":Wr,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/after.sql":Kr,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/after.sql":Jr,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/after.sql":Xr,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/after.sql":Qr,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/after.sql":ei,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/after.sql":ni,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/after.sql":ii,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/after.sql":oi,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/after.sql":ci,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/after.sql":ui,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/after.sql":fi,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/after.sql":mi,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/after.sql":gi,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/after.sql":vi,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/after.sql":bi,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/after.sql":Si,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/after.sql":wi,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/after.sql":Ei,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/after.sql":Oi,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/after.sql":Ai,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/after.sql":Mi,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/after.sql":Pi,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/after.sql":Ii,"../../../../samples/ddlapi-diffs/column-default-changes/225-remove-default-varchar-raw-expr/after.sql":Ri,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/after.sql":Bi,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/after.sql":Hi,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/after.sql":Wi,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/after.sql":Ki,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/after.sql":Ji,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/after.sql":Xi,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/after.sql":Qi,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/after.sql":ea,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/after.sql":na,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/after.sql":ia,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/after.sql":oa,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/after.sql":ca,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/after.sql":ua,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/after.sql":fa,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/after.sql":ma,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/after.sql":ga,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/after.sql":va,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/after.sql":ba,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/after.sql":Sa,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/after.sql":wa,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/after.sql":Ea,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/after.sql":Oa,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/after.sql":Aa,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/after.sql":Ma,"../../../../samples/ddlapi-diffs/column-default-changes/325-replace-default-varchar-raw-expr/after.sql":Pa})),La=re(Ia),Ra={...te,title:`DDL API Diffs Suite/Column Default Changes Samples`},t=ne(La),n=t(`101-add-default-bigint`),r=t(`201-remove-default-bigint`),i=t(`301-replace-default-bigint`),a=t(`102-add-default-bit`),o=t(`202-remove-default-bit`),s=t(`302-replace-default-bit`),c=t(`103-add-default-bit-varying`),l=t(`203-remove-default-bit-varying`),u=t(`303-replace-default-bit-varying`),d=t(`104-add-default-boolean`),f=t(`204-remove-default-boolean`),p=t(`304-replace-default-boolean`),m=t(`105-add-default-bytea`),h=t(`205-remove-default-bytea`),g=t(`305-replace-default-bytea`),_=t(`106-add-default-char`),v=t(`206-remove-default-char`),y=t(`306-replace-default-char`),b=t(`107-add-default-date`),x=t(`207-remove-default-date`),S=t(`307-replace-default-date`),C=t(`108-add-default-double-precision`),w=t(`208-remove-default-double-precision`),T=t(`308-replace-default-double-precision`),E=t(`109-add-default-integer`),D=t(`209-remove-default-integer`),O=t(`309-replace-default-integer`),k=t(`110-add-default-interval`),A=t(`210-remove-default-interval`),j=t(`310-replace-default-interval`),M=t(`111-add-default-json`),N=t(`211-remove-default-json`),P=t(`311-replace-default-json`),F=t(`112-add-default-jsonb`),I=t(`212-remove-default-jsonb`),L=t(`312-replace-default-jsonb`),R=t(`113-add-default-money`),z=t(`213-remove-default-money`),B=t(`313-replace-default-money`),V=t(`114-add-default-numeric`),za=t(`214-remove-default-numeric`),H=t(`314-replace-default-numeric`),U=t(`115-add-default-real`),W=t(`215-remove-default-real`),G=t(`315-replace-default-real`),K=t(`116-add-default-smallint`),q=t(`216-remove-default-smallint`),J=t(`316-replace-default-smallint`),Y=t(`117-add-default-text`),X=t(`217-remove-default-text`),Z=t(`317-replace-default-text`),Q=t(`118-add-default-time`),Ba=t(`218-remove-default-time`),Va=t(`318-replace-default-time`),Ha=t(`119-add-default-timetz`),Ua=t(`219-remove-default-timetz`),Wa=t(`319-replace-default-timetz`),Ga=t(`120-add-default-timestamp`),Ka=t(`220-remove-default-timestamp`),qa=t(`320-replace-default-timestamp`),Ja=t(`121-add-default-timestamptz`),Ya=t(`221-remove-default-timestamptz`),Xa=t(`321-replace-default-timestamptz`),Za=t(`122-add-default-uuid`),Qa=t(`222-remove-default-uuid`),$a=t(`322-replace-default-uuid`),eo=t(`123-add-default-varchar`),to=t(`223-remove-default-varchar`),no=t(`323-replace-default-varchar`),ro=t(`124-add-default-enum`),io=t(`224-remove-default-enum`),ao=t(`324-replace-default-enum`),oo=t(`125-add-default-varchar-raw-expr`),so=t(`225-remove-default-varchar-raw-expr`),$=t(`325-replace-default-varchar-raw-expr`),n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`createCaseStory("101-add-default-bigint")`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`createCaseStory("201-remove-default-bigint")`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`createCaseStory("301-replace-default-bigint")`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`createCaseStory("102-add-default-bit")`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`createCaseStory("202-remove-default-bit")`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`createCaseStory("302-replace-default-bit")`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`createCaseStory("103-add-default-bit-varying")`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`createCaseStory("203-remove-default-bit-varying")`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`createCaseStory("303-replace-default-bit-varying")`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`createCaseStory("104-add-default-boolean")`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`createCaseStory("204-remove-default-boolean")`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`createCaseStory("304-replace-default-boolean")`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createCaseStory("105-add-default-bytea")`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createCaseStory("205-remove-default-bytea")`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("305-replace-default-bytea")`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("106-add-default-char")`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("206-remove-default-char")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("306-replace-default-char")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("107-add-default-date")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("207-remove-default-date")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("307-replace-default-date")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("108-add-default-double-precision")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("208-remove-default-double-precision")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("308-replace-default-double-precision")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("109-add-default-integer")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("209-remove-default-integer")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("309-replace-default-integer")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("110-add-default-interval")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("210-remove-default-interval")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("310-replace-default-interval")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("111-add-default-json")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("211-remove-default-json")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("311-replace-default-json")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("112-add-default-jsonb")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("212-remove-default-jsonb")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("312-replace-default-jsonb")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("113-add-default-money")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("213-remove-default-money")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("313-replace-default-money")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("114-add-default-numeric")`,...V.parameters?.docs?.source}}},za.parameters={...za.parameters,docs:{...za.parameters?.docs,source:{originalSource:`createCaseStory("214-remove-default-numeric")`,...za.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("314-replace-default-numeric")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("115-add-default-real")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("215-remove-default-real")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("315-replace-default-real")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("116-add-default-smallint")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("216-remove-default-smallint")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("316-replace-default-smallint")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("117-add-default-text")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("217-remove-default-text")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("317-replace-default-text")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("118-add-default-time")`,...Q.parameters?.docs?.source}}},Ba.parameters={...Ba.parameters,docs:{...Ba.parameters?.docs,source:{originalSource:`createCaseStory("218-remove-default-time")`,...Ba.parameters?.docs?.source}}},Va.parameters={...Va.parameters,docs:{...Va.parameters?.docs,source:{originalSource:`createCaseStory("318-replace-default-time")`,...Va.parameters?.docs?.source}}},Ha.parameters={...Ha.parameters,docs:{...Ha.parameters?.docs,source:{originalSource:`createCaseStory("119-add-default-timetz")`,...Ha.parameters?.docs?.source}}},Ua.parameters={...Ua.parameters,docs:{...Ua.parameters?.docs,source:{originalSource:`createCaseStory("219-remove-default-timetz")`,...Ua.parameters?.docs?.source}}},Wa.parameters={...Wa.parameters,docs:{...Wa.parameters?.docs,source:{originalSource:`createCaseStory("319-replace-default-timetz")`,...Wa.parameters?.docs?.source}}},Ga.parameters={...Ga.parameters,docs:{...Ga.parameters?.docs,source:{originalSource:`createCaseStory("120-add-default-timestamp")`,...Ga.parameters?.docs?.source}}},Ka.parameters={...Ka.parameters,docs:{...Ka.parameters?.docs,source:{originalSource:`createCaseStory("220-remove-default-timestamp")`,...Ka.parameters?.docs?.source}}},qa.parameters={...qa.parameters,docs:{...qa.parameters?.docs,source:{originalSource:`createCaseStory("320-replace-default-timestamp")`,...qa.parameters?.docs?.source}}},Ja.parameters={...Ja.parameters,docs:{...Ja.parameters?.docs,source:{originalSource:`createCaseStory("121-add-default-timestamptz")`,...Ja.parameters?.docs?.source}}},Ya.parameters={...Ya.parameters,docs:{...Ya.parameters?.docs,source:{originalSource:`createCaseStory("221-remove-default-timestamptz")`,...Ya.parameters?.docs?.source}}},Xa.parameters={...Xa.parameters,docs:{...Xa.parameters?.docs,source:{originalSource:`createCaseStory("321-replace-default-timestamptz")`,...Xa.parameters?.docs?.source}}},Za.parameters={...Za.parameters,docs:{...Za.parameters?.docs,source:{originalSource:`createCaseStory("122-add-default-uuid")`,...Za.parameters?.docs?.source}}},Qa.parameters={...Qa.parameters,docs:{...Qa.parameters?.docs,source:{originalSource:`createCaseStory("222-remove-default-uuid")`,...Qa.parameters?.docs?.source}}},$a.parameters={...$a.parameters,docs:{...$a.parameters?.docs,source:{originalSource:`createCaseStory("322-replace-default-uuid")`,...$a.parameters?.docs?.source}}},eo.parameters={...eo.parameters,docs:{...eo.parameters?.docs,source:{originalSource:`createCaseStory("123-add-default-varchar")`,...eo.parameters?.docs?.source}}},to.parameters={...to.parameters,docs:{...to.parameters?.docs,source:{originalSource:`createCaseStory("223-remove-default-varchar")`,...to.parameters?.docs?.source}}},no.parameters={...no.parameters,docs:{...no.parameters?.docs,source:{originalSource:`createCaseStory("323-replace-default-varchar")`,...no.parameters?.docs?.source}}},ro.parameters={...ro.parameters,docs:{...ro.parameters?.docs,source:{originalSource:`createCaseStory("124-add-default-enum")`,...ro.parameters?.docs?.source}}},io.parameters={...io.parameters,docs:{...io.parameters?.docs,source:{originalSource:`createCaseStory("224-remove-default-enum")`,...io.parameters?.docs?.source}}},ao.parameters={...ao.parameters,docs:{...ao.parameters?.docs,source:{originalSource:`createCaseStory("324-replace-default-enum")`,...ao.parameters?.docs?.source}}},oo.parameters={...oo.parameters,docs:{...oo.parameters?.docs,source:{originalSource:`createCaseStory("125-add-default-varchar-raw-expr")`,...oo.parameters?.docs?.source}}},so.parameters={...so.parameters,docs:{...so.parameters?.docs,source:{originalSource:`createCaseStory("225-remove-default-varchar-raw-expr")`,...so.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("325-replace-default-varchar-raw-expr")`,...$.parameters?.docs?.source}}},co=`Case_101_add_default_bigint.Case_201_remove_default_bigint.Case_301_replace_default_bigint.Case_102_add_default_bit.Case_202_remove_default_bit.Case_302_replace_default_bit.Case_103_add_default_bit_varying.Case_203_remove_default_bit_varying.Case_303_replace_default_bit_varying.Case_104_add_default_boolean.Case_204_remove_default_boolean.Case_304_replace_default_boolean.Case_105_add_default_bytea.Case_205_remove_default_bytea.Case_305_replace_default_bytea.Case_106_add_default_char.Case_206_remove_default_char.Case_306_replace_default_char.Case_107_add_default_date.Case_207_remove_default_date.Case_307_replace_default_date.Case_108_add_default_double_precision.Case_208_remove_default_double_precision.Case_308_replace_default_double_precision.Case_109_add_default_integer.Case_209_remove_default_integer.Case_309_replace_default_integer.Case_110_add_default_interval.Case_210_remove_default_interval.Case_310_replace_default_interval.Case_111_add_default_json.Case_211_remove_default_json.Case_311_replace_default_json.Case_112_add_default_jsonb.Case_212_remove_default_jsonb.Case_312_replace_default_jsonb.Case_113_add_default_money.Case_213_remove_default_money.Case_313_replace_default_money.Case_114_add_default_numeric.Case_214_remove_default_numeric.Case_314_replace_default_numeric.Case_115_add_default_real.Case_215_remove_default_real.Case_315_replace_default_real.Case_116_add_default_smallint.Case_216_remove_default_smallint.Case_316_replace_default_smallint.Case_117_add_default_text.Case_217_remove_default_text.Case_317_replace_default_text.Case_118_add_default_time.Case_218_remove_default_time.Case_318_replace_default_time.Case_119_add_default_timetz.Case_219_remove_default_timetz.Case_319_replace_default_timetz.Case_120_add_default_timestamp.Case_220_remove_default_timestamp.Case_320_replace_default_timestamp.Case_121_add_default_timestamptz.Case_221_remove_default_timestamptz.Case_321_replace_default_timestamptz.Case_122_add_default_uuid.Case_222_remove_default_uuid.Case_322_replace_default_uuid.Case_123_add_default_varchar.Case_223_remove_default_varchar.Case_323_replace_default_varchar.Case_124_add_default_enum.Case_224_remove_default_enum.Case_324_replace_default_enum.Case_125_add_default_varchar_raw_expr.Case_225_remove_default_varchar_raw_expr.Case_325_replace_default_varchar_raw_expr`.split(`.`)})))()}lo();export{n as Case_101_add_default_bigint,a as Case_102_add_default_bit,c as Case_103_add_default_bit_varying,d as Case_104_add_default_boolean,m as Case_105_add_default_bytea,_ as Case_106_add_default_char,b as Case_107_add_default_date,C as Case_108_add_default_double_precision,E as Case_109_add_default_integer,k as Case_110_add_default_interval,M as Case_111_add_default_json,F as Case_112_add_default_jsonb,R as Case_113_add_default_money,V as Case_114_add_default_numeric,U as Case_115_add_default_real,K as Case_116_add_default_smallint,Y as Case_117_add_default_text,Q as Case_118_add_default_time,Ha as Case_119_add_default_timetz,Ga as Case_120_add_default_timestamp,Ja as Case_121_add_default_timestamptz,Za as Case_122_add_default_uuid,eo as Case_123_add_default_varchar,ro as Case_124_add_default_enum,oo as Case_125_add_default_varchar_raw_expr,r as Case_201_remove_default_bigint,o as Case_202_remove_default_bit,l as Case_203_remove_default_bit_varying,f as Case_204_remove_default_boolean,h as Case_205_remove_default_bytea,v as Case_206_remove_default_char,x as Case_207_remove_default_date,w as Case_208_remove_default_double_precision,D as Case_209_remove_default_integer,A as Case_210_remove_default_interval,N as Case_211_remove_default_json,I as Case_212_remove_default_jsonb,z as Case_213_remove_default_money,za as Case_214_remove_default_numeric,W as Case_215_remove_default_real,q as Case_216_remove_default_smallint,X as Case_217_remove_default_text,Ba as Case_218_remove_default_time,Ua as Case_219_remove_default_timetz,Ka as Case_220_remove_default_timestamp,Ya as Case_221_remove_default_timestamptz,Qa as Case_222_remove_default_uuid,to as Case_223_remove_default_varchar,io as Case_224_remove_default_enum,so as Case_225_remove_default_varchar_raw_expr,i as Case_301_replace_default_bigint,s as Case_302_replace_default_bit,u as Case_303_replace_default_bit_varying,p as Case_304_replace_default_boolean,g as Case_305_replace_default_bytea,y as Case_306_replace_default_char,S as Case_307_replace_default_date,T as Case_308_replace_default_double_precision,O as Case_309_replace_default_integer,j as Case_310_replace_default_interval,P as Case_311_replace_default_json,L as Case_312_replace_default_jsonb,B as Case_313_replace_default_money,H as Case_314_replace_default_numeric,G as Case_315_replace_default_real,J as Case_316_replace_default_smallint,Z as Case_317_replace_default_text,Va as Case_318_replace_default_time,Wa as Case_319_replace_default_timetz,qa as Case_320_replace_default_timestamp,Xa as Case_321_replace_default_timestamptz,$a as Case_322_replace_default_uuid,no as Case_323_replace_default_varchar,ao as Case_324_replace_default_enum,$ as Case_325_replace_default_varchar_raw_expr,co as __namedExportsOrder,Ra as default};