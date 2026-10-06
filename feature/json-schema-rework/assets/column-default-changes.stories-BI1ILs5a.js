import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{i as ne,n as re,r as ie,t as ae}from"./ddlapi-diffs-utils-CvkUrkAu.js";var oe;function se(){return(se=e((()=>{oe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`})))()}var ce;function le(){return(le=e((()=>{ce=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`})))()}var ue;function de(){return(de=e((()=>{ue=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`})))()}var me;function he(){return(he=e((()=>{me=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`})))()}var be;function xe(){return(xe=e((()=>{be=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`})))()}var we;function Te(){return(Te=e((()=>{we=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`})))()}var et;function tt(){return(tt=e((()=>{et=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`})))()}var it;function at(){return(at=e((()=>{it=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`})))()}var ot;function st(){return(st=e((()=>{ot=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`})))()}var At;function jt(){return(jt=e((()=>{At=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`})))()}var Pt;function Ft(){return(Ft=e((()=>{Pt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`})))()}var It;function Lt(){return(Lt=e((()=>{It=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`})))()}var Bt;function Vt(){return(Vt=e((()=>{Bt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`})))()}var Ht;function Ut(){return(Ut=e((()=>{Ht=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`})))()}var Wt;function Gt(){return(Gt=e((()=>{Wt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`})))()}var Kt;function qt(){return(qt=e((()=>{Kt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`})))()}var Jt;function Yt(){return(Yt=e((()=>{Jt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL
);
`})))()}var Qt;function $t(){return($t=e((()=>{Qt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`})))()}var en;function tn(){return(tn=e((()=>{en=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`})))()}var nn;function rn(){return(rn=e((()=>{nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`})))()}var an;function on(){return(on=e((()=>{an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`})))()}var sn;function cn(){return(cn=e((()=>{sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`})))()}var ln;function un(){return(un=e((()=>{ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`})))()}var dn;function fn(){return(fn=e((()=>{dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`})))()}var pn;function mn(){return(mn=e((()=>{pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`})))()}var hn;function gn(){return(gn=e((()=>{hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`})))()}var _n;function vn(){return(vn=e((()=>{_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`})))()}var yn;function bn(){return(bn=e((()=>{yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`})))()}var xn;function Sn(){return(Sn=e((()=>{xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`})))()}var Cn;function wn(){return(wn=e((()=>{Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`})))()}var Tn;function En(){return(En=e((()=>{Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`})))()}var Dn;function On(){return(On=e((()=>{Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`})))()}var kn;function An(){return(An=e((()=>{kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`})))()}var jn;function Mn(){return(Mn=e((()=>{jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`})))()}var Nn;function Pn(){return(Pn=e((()=>{Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`})))()}var Fn;function In(){return(In=e((()=>{Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`})))()}var Ln;function Rn(){return(Rn=e((()=>{Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`})))()}var zn;function Bn(){return(Bn=e((()=>{zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`})))()}var Vn;function Hn(){return(Hn=e((()=>{Vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`})))()}var Un;function Wn(){return(Wn=e((()=>{Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`})))()}var Gn;function Kn(){return(Kn=e((()=>{Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`})))()}var qn;function Jn(){return(Jn=e((()=>{qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown_1'::character varying NOT NULL
);
`})))()}var Yn;function Xn(){return(Xn=e((()=>{Yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`})))()}var Zn;function Qn(){return(Qn=e((()=>{Zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`})))()}var $n;function er(){return(er=e((()=>{$n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`})))()}var tr;function nr(){return(nr=e((()=>{tr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`})))()}var rr;function ir(){return(ir=e((()=>{rr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`})))()}var ar;function or(){return(or=e((()=>{ar=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`})))()}var sr;function cr(){return(cr=e((()=>{sr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`})))()}var lr;function ur(){return(ur=e((()=>{lr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`})))()}var dr;function fr(){return(fr=e((()=>{dr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`})))()}var pr;function mr(){return(mr=e((()=>{pr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`})))()}var hr;function gr(){return(gr=e((()=>{hr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`})))()}var _r;function vr(){return(vr=e((()=>{_r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`})))()}var yr;function br(){return(br=e((()=>{yr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`})))()}var xr;function Sr(){return(Sr=e((()=>{xr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`})))()}var Cr;function wr(){return(wr=e((()=>{Cr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`})))()}var Tr;function Er(){return(Er=e((()=>{Tr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`})))()}var Dr;function Or(){return(Or=e((()=>{Dr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`})))()}var kr;function Ar(){return(Ar=e((()=>{kr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`})))()}var jr;function Mr(){return(Mr=e((()=>{jr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`})))()}var Nr;function Pr(){return(Pr=e((()=>{Nr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`})))()}var Fr;function Ir(){return(Ir=e((()=>{Fr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`})))()}var Lr;function Rr(){return(Rr=e((()=>{Lr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`})))()}var zr;function Br(){return(Br=e((()=>{zr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`})))()}var Vr;function Hr(){return(Hr=e((()=>{Vr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`})))()}var Ur;function Wr(){return(Wr=e((()=>{Ur=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL
);
`})))()}var Gr;function Kr(){return(Kr=e((()=>{Gr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`})))()}var qr;function Jr(){return(Jr=e((()=>{qr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`})))()}var Yr;function Xr(){return(Xr=e((()=>{Yr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`})))()}var Zr;function Qr(){return(Qr=e((()=>{Zr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`})))()}var $r;function ei(){return(ei=e((()=>{$r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`})))()}var ti;function ni(){return(ni=e((()=>{ti=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`})))()}var ri;function ii(){return(ii=e((()=>{ri=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`})))()}var ai;function oi(){return(oi=e((()=>{ai=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`})))()}var si;function ci(){return(ci=e((()=>{si=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`})))()}var li;function ui(){return(ui=e((()=>{li=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`})))()}var di;function fi(){return(fi=e((()=>{di=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`})))()}var pi;function mi(){return(mi=e((()=>{pi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`})))()}var hi;function gi(){return(gi=e((()=>{hi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`})))()}var _i;function vi(){return(vi=e((()=>{_i=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`})))()}var yi;function bi(){return(bi=e((()=>{yi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`})))()}var xi;function Si(){return(Si=e((()=>{xi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`})))()}var Ci;function wi(){return(wi=e((()=>{Ci=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`})))()}var Ti;function Ei(){return(Ei=e((()=>{Ti=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`})))()}var Di;function Oi(){return(Oi=e((()=>{Di=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`})))()}var ki;function Ai(){return(Ai=e((()=>{ki=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`})))()}var ji;function Mi(){return(Mi=e((()=>{ji=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`})))()}var Ni;function Pi(){return(Pi=e((()=>{Ni=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`})))()}var Fi;function Ii(){return(Ii=e((()=>{Fi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`})))()}var Li;function Ri(){return(Ri=e((()=>{Li=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`})))()}var zi;function Bi(){return(Bi=e((()=>{zi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`})))()}var Vi;function Hi(){return(Hi=e((()=>{Vi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 42
);
`})))()}var Ui;function Wi(){return(Wi=e((()=>{Ui=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'010'
);
`})))()}var Gi;function Ki(){return(Ki=e((()=>{Gi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'0101'
);
`})))()}var qi;function Ji(){return(Ji=e((()=>{qi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT false
);
`})))()}var Yi;function Xi(){return(Xi=e((()=>{Yi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0304'
);
`})))()}var Zi;function Qi(){return(Qi=e((()=>{Zi=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'xyz'
);
`})))()}var $i;function ea(){return(ea=e((()=>{$i=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2025-01-01'
);
`})))()}var ta;function na(){return(na=e((()=>{ta=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 2.71
);
`})))()}var ra;function ia(){return(ia=e((()=>{ra=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 42
);
`})))()}var aa;function oa(){return(oa=e((()=>{aa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '2 hours'
);
`})))()}var sa;function ca(){return(ca=e((()=>{sa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '[]'
);
`})))()}var la;function ua(){return(ua=e((()=>{la=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"published"}'::jsonb
);
`})))()}var da;function fa(){return(fa=e((()=>{da=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 100
);
`})))()}var pa;function ma(){return(ma=e((()=>{pa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 9.99
);
`})))()}var ha;function ga(){return(ga=e((()=>{ha=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 2.5
);
`})))()}var _a;function va(){return(va=e((()=>{_a=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 7
);
`})))()}var ya;function ba(){return(ba=e((()=>{ya=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'published'
);
`})))()}var xa;function Sa(){return(Sa=e((()=>{xa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '18:30:00'
);
`})))()}var Ca;function wa(){return(wa=e((()=>{Ca=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '09:00:00+02'
);
`})))()}var Ta;function Ea(){return(Ea=e((()=>{Ta=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2025-01-01 00:00:00'
);
`})))()}var Da;function Oa(){return(Oa=e((()=>{Da=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2025-01-01 00:00:00+02'
);
`})))()}var ka;function Aa(){return(Aa=e((()=>{ka=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
);
`})))()}var ja;function Ma(){return(Ma=e((()=>{ja=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'inactive'
);
`})))()}var Na;function Pa(){return(Pa=e((()=>{Na=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'done'
);
`})))()}var Fa;function Ia(){return(Ia=e((()=>{Fa=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown_2'::character varying NOT NULL
);
`})))()}var La,Ra,za,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,Ba,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,$,oo;function so(){return(so=e((()=>{se(),le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),Lt(),zt(),Vt(),Ut(),Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),Sn(),wn(),En(),On(),An(),Mn(),Pn(),In(),Rn(),Bn(),Hn(),Wn(),Kn(),Jn(),Xn(),Qn(),er(),nr(),ir(),or(),cr(),ur(),fr(),mr(),gr(),vr(),br(),Sr(),wr(),Er(),Or(),Ar(),Mr(),Pr(),Ir(),Rr(),Br(),Hr(),Wr(),Kr(),Jr(),Xr(),Qr(),ei(),ni(),ii(),oi(),ci(),ui(),fi(),mi(),gi(),vi(),bi(),Si(),wi(),Ei(),Oi(),Ai(),Mi(),Pi(),Ii(),Ri(),Bi(),Hi(),Wi(),Ki(),Ji(),Xi(),Qi(),ea(),na(),ia(),oa(),ca(),ua(),fa(),ma(),ga(),va(),ba(),Sa(),wa(),Ea(),Oa(),Aa(),Ma(),Pa(),Ia(),ne(),ee(),La=ae(Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/before.sql":oe,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/before.sql":ce,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/before.sql":ue,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/before.sql":fe,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/before.sql":me,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/before.sql":ge,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/before.sql":ve,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/before.sql":be,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/before.sql":Se,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/before.sql":we,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/before.sql":Ee,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/before.sql":Oe,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/before.sql":Ae,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/before.sql":Me,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/before.sql":Pe,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/before.sql":Ie,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/before.sql":Re,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/before.sql":Be,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/before.sql":He,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/before.sql":We,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/before.sql":Ke,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/before.sql":Je,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/before.sql":Xe,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/before.sql":Qe,"../../../../samples/ddlapi-diffs/column-default-changes/125-add-default-varchar-raw-expr/before.sql":et,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/before.sql":nt,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/before.sql":it,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/before.sql":ot,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/before.sql":ct,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/before.sql":ut,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/before.sql":ft,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/before.sql":mt,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/before.sql":gt,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/before.sql":vt,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/before.sql":bt,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/before.sql":St,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/before.sql":wt,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/before.sql":Et,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/before.sql":Ot,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/before.sql":At,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/before.sql":Mt,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/before.sql":Pt,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/before.sql":It,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/before.sql":Rt,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/before.sql":Bt,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/before.sql":Ht,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/before.sql":Wt,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/before.sql":Kt,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/before.sql":Jt,"../../../../samples/ddlapi-diffs/column-default-changes/225-remove-default-varchar-raw-expr/before.sql":Xt,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/before.sql":Qt,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/before.sql":en,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/before.sql":nn,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/before.sql":an,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/before.sql":sn,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/before.sql":ln,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/before.sql":dn,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/before.sql":pn,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/before.sql":hn,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/before.sql":_n,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/before.sql":yn,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/before.sql":xn,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/before.sql":Cn,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/before.sql":Tn,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/before.sql":Dn,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/before.sql":kn,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/before.sql":jn,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/before.sql":Nn,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/before.sql":Fn,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/before.sql":Ln,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/before.sql":zn,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/before.sql":Vn,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/before.sql":Un,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/before.sql":Gn,"../../../../samples/ddlapi-diffs/column-default-changes/325-replace-default-varchar-raw-expr/before.sql":qn}),Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/after.sql":Yn,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/after.sql":Zn,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/after.sql":$n,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/after.sql":tr,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/after.sql":rr,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/after.sql":ar,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/after.sql":sr,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/after.sql":lr,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/after.sql":dr,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/after.sql":pr,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/after.sql":hr,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/after.sql":_r,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/after.sql":yr,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/after.sql":xr,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/after.sql":Cr,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/after.sql":Tr,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/after.sql":Dr,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/after.sql":kr,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/after.sql":jr,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/after.sql":Nr,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/after.sql":Fr,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/after.sql":Lr,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/after.sql":zr,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/after.sql":Vr,"../../../../samples/ddlapi-diffs/column-default-changes/125-add-default-varchar-raw-expr/after.sql":Ur,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/after.sql":Gr,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/after.sql":qr,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/after.sql":Yr,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/after.sql":Zr,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/after.sql":$r,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/after.sql":ti,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/after.sql":ri,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/after.sql":ai,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/after.sql":si,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/after.sql":li,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/after.sql":di,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/after.sql":pi,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/after.sql":hi,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/after.sql":_i,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/after.sql":yi,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/after.sql":xi,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/after.sql":Ci,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/after.sql":Ti,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/after.sql":Di,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/after.sql":ki,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/after.sql":ji,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/after.sql":Ni,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/after.sql":Fi,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/after.sql":Li,"../../../../samples/ddlapi-diffs/column-default-changes/225-remove-default-varchar-raw-expr/after.sql":zi,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/after.sql":Vi,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/after.sql":Ui,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/after.sql":Gi,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/after.sql":qi,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/after.sql":Yi,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/after.sql":Zi,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/after.sql":$i,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/after.sql":ta,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/after.sql":ra,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/after.sql":aa,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/after.sql":sa,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/after.sql":la,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/after.sql":da,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/after.sql":pa,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/after.sql":ha,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/after.sql":_a,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/after.sql":ya,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/after.sql":xa,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/after.sql":Ca,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/after.sql":Ta,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/after.sql":Da,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/after.sql":ka,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/after.sql":ja,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/after.sql":Na,"../../../../samples/ddlapi-diffs/column-default-changes/325-replace-default-varchar-raw-expr/after.sql":Fa})),Ra=te(La),za={...ie,title:`DDL API Diffs Suite/Column Default Changes Samples`},t=re(Ra),n=t(`101-add-default-bigint`),r=t(`201-remove-default-bigint`),i=t(`301-replace-default-bigint`),a=t(`102-add-default-bit`),o=t(`202-remove-default-bit`),s=t(`302-replace-default-bit`),c=t(`103-add-default-bit-varying`),l=t(`203-remove-default-bit-varying`),u=t(`303-replace-default-bit-varying`),d=t(`104-add-default-boolean`),f=t(`204-remove-default-boolean`),p=t(`304-replace-default-boolean`),m=t(`105-add-default-bytea`),h=t(`205-remove-default-bytea`),g=t(`305-replace-default-bytea`),_=t(`106-add-default-char`),v=t(`206-remove-default-char`),y=t(`306-replace-default-char`),b=t(`107-add-default-date`),x=t(`207-remove-default-date`),S=t(`307-replace-default-date`),C=t(`108-add-default-double-precision`),w=t(`208-remove-default-double-precision`),T=t(`308-replace-default-double-precision`),E=t(`109-add-default-integer`),D=t(`209-remove-default-integer`),O=t(`309-replace-default-integer`),k=t(`110-add-default-interval`),A=t(`210-remove-default-interval`),j=t(`310-replace-default-interval`),M=t(`111-add-default-json`),N=t(`211-remove-default-json`),P=t(`311-replace-default-json`),F=t(`112-add-default-jsonb`),I=t(`212-remove-default-jsonb`),L=t(`312-replace-default-jsonb`),Ba=t(`113-add-default-money`),R=t(`213-remove-default-money`),z=t(`313-replace-default-money`),B=t(`114-add-default-numeric`),V=t(`214-remove-default-numeric`),H=t(`314-replace-default-numeric`),U=t(`115-add-default-real`),W=t(`215-remove-default-real`),G=t(`315-replace-default-real`),K=t(`116-add-default-smallint`),q=t(`216-remove-default-smallint`),J=t(`316-replace-default-smallint`),Y=t(`117-add-default-text`),X=t(`217-remove-default-text`),Z=t(`317-replace-default-text`),Q=t(`118-add-default-time`),Va=t(`218-remove-default-time`),Ha=t(`318-replace-default-time`),Ua=t(`119-add-default-timetz`),Wa=t(`219-remove-default-timetz`),Ga=t(`319-replace-default-timetz`),Ka=t(`120-add-default-timestamp`),qa=t(`220-remove-default-timestamp`),Ja=t(`320-replace-default-timestamp`),Ya=t(`121-add-default-timestamptz`),Xa=t(`221-remove-default-timestamptz`),Za=t(`321-replace-default-timestamptz`),Qa=t(`122-add-default-uuid`),$a=t(`222-remove-default-uuid`),eo=t(`322-replace-default-uuid`),to=t(`123-add-default-varchar`),no=t(`223-remove-default-varchar`),ro=t(`323-replace-default-varchar`),io=t(`124-add-default-enum`),ao=t(`224-remove-default-enum`),$=t(`324-replace-default-enum`),n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`createCaseStory("101-add-default-bigint")`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`createCaseStory("201-remove-default-bigint")`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`createCaseStory("301-replace-default-bigint")`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`createCaseStory("102-add-default-bit")`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`createCaseStory("202-remove-default-bit")`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`createCaseStory("302-replace-default-bit")`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`createCaseStory("103-add-default-bit-varying")`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`createCaseStory("203-remove-default-bit-varying")`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`createCaseStory("303-replace-default-bit-varying")`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`createCaseStory("104-add-default-boolean")`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`createCaseStory("204-remove-default-boolean")`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`createCaseStory("304-replace-default-boolean")`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createCaseStory("105-add-default-bytea")`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createCaseStory("205-remove-default-bytea")`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("305-replace-default-bytea")`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("106-add-default-char")`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("206-remove-default-char")`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("306-replace-default-char")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("107-add-default-date")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("207-remove-default-date")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("307-replace-default-date")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("108-add-default-double-precision")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("208-remove-default-double-precision")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("308-replace-default-double-precision")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("109-add-default-integer")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("209-remove-default-integer")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("309-replace-default-integer")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("110-add-default-interval")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("210-remove-default-interval")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("310-replace-default-interval")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("111-add-default-json")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("211-remove-default-json")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("311-replace-default-json")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("112-add-default-jsonb")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("212-remove-default-jsonb")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("312-replace-default-jsonb")`,...L.parameters?.docs?.source}}},Ba.parameters={...Ba.parameters,docs:{...Ba.parameters?.docs,source:{originalSource:`createCaseStory("113-add-default-money")`,...Ba.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("213-remove-default-money")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("313-replace-default-money")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("114-add-default-numeric")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("214-remove-default-numeric")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("314-replace-default-numeric")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("115-add-default-real")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("215-remove-default-real")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("315-replace-default-real")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("116-add-default-smallint")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("216-remove-default-smallint")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("316-replace-default-smallint")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("117-add-default-text")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("217-remove-default-text")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("317-replace-default-text")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("118-add-default-time")`,...Q.parameters?.docs?.source}}},Va.parameters={...Va.parameters,docs:{...Va.parameters?.docs,source:{originalSource:`createCaseStory("218-remove-default-time")`,...Va.parameters?.docs?.source}}},Ha.parameters={...Ha.parameters,docs:{...Ha.parameters?.docs,source:{originalSource:`createCaseStory("318-replace-default-time")`,...Ha.parameters?.docs?.source}}},Ua.parameters={...Ua.parameters,docs:{...Ua.parameters?.docs,source:{originalSource:`createCaseStory("119-add-default-timetz")`,...Ua.parameters?.docs?.source}}},Wa.parameters={...Wa.parameters,docs:{...Wa.parameters?.docs,source:{originalSource:`createCaseStory("219-remove-default-timetz")`,...Wa.parameters?.docs?.source}}},Ga.parameters={...Ga.parameters,docs:{...Ga.parameters?.docs,source:{originalSource:`createCaseStory("319-replace-default-timetz")`,...Ga.parameters?.docs?.source}}},Ka.parameters={...Ka.parameters,docs:{...Ka.parameters?.docs,source:{originalSource:`createCaseStory("120-add-default-timestamp")`,...Ka.parameters?.docs?.source}}},qa.parameters={...qa.parameters,docs:{...qa.parameters?.docs,source:{originalSource:`createCaseStory("220-remove-default-timestamp")`,...qa.parameters?.docs?.source}}},Ja.parameters={...Ja.parameters,docs:{...Ja.parameters?.docs,source:{originalSource:`createCaseStory("320-replace-default-timestamp")`,...Ja.parameters?.docs?.source}}},Ya.parameters={...Ya.parameters,docs:{...Ya.parameters?.docs,source:{originalSource:`createCaseStory("121-add-default-timestamptz")`,...Ya.parameters?.docs?.source}}},Xa.parameters={...Xa.parameters,docs:{...Xa.parameters?.docs,source:{originalSource:`createCaseStory("221-remove-default-timestamptz")`,...Xa.parameters?.docs?.source}}},Za.parameters={...Za.parameters,docs:{...Za.parameters?.docs,source:{originalSource:`createCaseStory("321-replace-default-timestamptz")`,...Za.parameters?.docs?.source}}},Qa.parameters={...Qa.parameters,docs:{...Qa.parameters?.docs,source:{originalSource:`createCaseStory("122-add-default-uuid")`,...Qa.parameters?.docs?.source}}},$a.parameters={...$a.parameters,docs:{...$a.parameters?.docs,source:{originalSource:`createCaseStory("222-remove-default-uuid")`,...$a.parameters?.docs?.source}}},eo.parameters={...eo.parameters,docs:{...eo.parameters?.docs,source:{originalSource:`createCaseStory("322-replace-default-uuid")`,...eo.parameters?.docs?.source}}},to.parameters={...to.parameters,docs:{...to.parameters?.docs,source:{originalSource:`createCaseStory("123-add-default-varchar")`,...to.parameters?.docs?.source}}},no.parameters={...no.parameters,docs:{...no.parameters?.docs,source:{originalSource:`createCaseStory("223-remove-default-varchar")`,...no.parameters?.docs?.source}}},ro.parameters={...ro.parameters,docs:{...ro.parameters?.docs,source:{originalSource:`createCaseStory("323-replace-default-varchar")`,...ro.parameters?.docs?.source}}},io.parameters={...io.parameters,docs:{...io.parameters?.docs,source:{originalSource:`createCaseStory("124-add-default-enum")`,...io.parameters?.docs?.source}}},ao.parameters={...ao.parameters,docs:{...ao.parameters?.docs,source:{originalSource:`createCaseStory("224-remove-default-enum")`,...ao.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("324-replace-default-enum")`,...$.parameters?.docs?.source}}},oo=`Case_101_add_default_bigint.Case_201_remove_default_bigint.Case_301_replace_default_bigint.Case_102_add_default_bit.Case_202_remove_default_bit.Case_302_replace_default_bit.Case_103_add_default_bit_varying.Case_203_remove_default_bit_varying.Case_303_replace_default_bit_varying.Case_104_add_default_boolean.Case_204_remove_default_boolean.Case_304_replace_default_boolean.Case_105_add_default_bytea.Case_205_remove_default_bytea.Case_305_replace_default_bytea.Case_106_add_default_char.Case_206_remove_default_char.Case_306_replace_default_char.Case_107_add_default_date.Case_207_remove_default_date.Case_307_replace_default_date.Case_108_add_default_double_precision.Case_208_remove_default_double_precision.Case_308_replace_default_double_precision.Case_109_add_default_integer.Case_209_remove_default_integer.Case_309_replace_default_integer.Case_110_add_default_interval.Case_210_remove_default_interval.Case_310_replace_default_interval.Case_111_add_default_json.Case_211_remove_default_json.Case_311_replace_default_json.Case_112_add_default_jsonb.Case_212_remove_default_jsonb.Case_312_replace_default_jsonb.Case_113_add_default_money.Case_213_remove_default_money.Case_313_replace_default_money.Case_114_add_default_numeric.Case_214_remove_default_numeric.Case_314_replace_default_numeric.Case_115_add_default_real.Case_215_remove_default_real.Case_315_replace_default_real.Case_116_add_default_smallint.Case_216_remove_default_smallint.Case_316_replace_default_smallint.Case_117_add_default_text.Case_217_remove_default_text.Case_317_replace_default_text.Case_118_add_default_time.Case_218_remove_default_time.Case_318_replace_default_time.Case_119_add_default_timetz.Case_219_remove_default_timetz.Case_319_replace_default_timetz.Case_120_add_default_timestamp.Case_220_remove_default_timestamp.Case_320_replace_default_timestamp.Case_121_add_default_timestamptz.Case_221_remove_default_timestamptz.Case_321_replace_default_timestamptz.Case_122_add_default_uuid.Case_222_remove_default_uuid.Case_322_replace_default_uuid.Case_123_add_default_varchar.Case_223_remove_default_varchar.Case_323_replace_default_varchar.Case_124_add_default_enum.Case_224_remove_default_enum.Case_324_replace_default_enum`.split(`.`)})))()}so();export{n as Case_101_add_default_bigint,a as Case_102_add_default_bit,c as Case_103_add_default_bit_varying,d as Case_104_add_default_boolean,m as Case_105_add_default_bytea,_ as Case_106_add_default_char,b as Case_107_add_default_date,C as Case_108_add_default_double_precision,E as Case_109_add_default_integer,k as Case_110_add_default_interval,M as Case_111_add_default_json,F as Case_112_add_default_jsonb,Ba as Case_113_add_default_money,B as Case_114_add_default_numeric,U as Case_115_add_default_real,K as Case_116_add_default_smallint,Y as Case_117_add_default_text,Q as Case_118_add_default_time,Ua as Case_119_add_default_timetz,Ka as Case_120_add_default_timestamp,Ya as Case_121_add_default_timestamptz,Qa as Case_122_add_default_uuid,to as Case_123_add_default_varchar,io as Case_124_add_default_enum,r as Case_201_remove_default_bigint,o as Case_202_remove_default_bit,l as Case_203_remove_default_bit_varying,f as Case_204_remove_default_boolean,h as Case_205_remove_default_bytea,v as Case_206_remove_default_char,x as Case_207_remove_default_date,w as Case_208_remove_default_double_precision,D as Case_209_remove_default_integer,A as Case_210_remove_default_interval,N as Case_211_remove_default_json,I as Case_212_remove_default_jsonb,R as Case_213_remove_default_money,V as Case_214_remove_default_numeric,W as Case_215_remove_default_real,q as Case_216_remove_default_smallint,X as Case_217_remove_default_text,Va as Case_218_remove_default_time,Wa as Case_219_remove_default_timetz,qa as Case_220_remove_default_timestamp,Xa as Case_221_remove_default_timestamptz,$a as Case_222_remove_default_uuid,no as Case_223_remove_default_varchar,ao as Case_224_remove_default_enum,i as Case_301_replace_default_bigint,s as Case_302_replace_default_bit,u as Case_303_replace_default_bit_varying,p as Case_304_replace_default_boolean,g as Case_305_replace_default_bytea,y as Case_306_replace_default_char,S as Case_307_replace_default_date,T as Case_308_replace_default_double_precision,O as Case_309_replace_default_integer,j as Case_310_replace_default_interval,P as Case_311_replace_default_json,L as Case_312_replace_default_jsonb,z as Case_313_replace_default_money,H as Case_314_replace_default_numeric,G as Case_315_replace_default_real,J as Case_316_replace_default_smallint,Z as Case_317_replace_default_text,Ha as Case_318_replace_default_time,Ga as Case_319_replace_default_timetz,Ja as Case_320_replace_default_timestamp,Za as Case_321_replace_default_timestamptz,eo as Case_322_replace_default_uuid,ro as Case_323_replace_default_varchar,$ as Case_324_replace_default_enum,oo as __namedExportsOrder,za as default};