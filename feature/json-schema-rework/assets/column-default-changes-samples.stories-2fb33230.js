import{c as Bs,a as Ms,d as Os,b as qs}from"./ddlapi-diffs-utils-4c2fa322.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-a78946b7.js";import"./DiffBadge-7a1cf565.js";import"./IndexesNodeViewer-87d60c03.js";/* empty css              */import"./build-from-ddl-browser-bc4d42aa.js";import"./iframe-eccac3e5.js";import"../sb-preview/runtime.js";import"./index-8cf80a84.js";import"./ddl-story-realm-utils-c0692776.js";const Hs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`,Xs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`,Ds=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`,Us=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`,js=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`,xs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`,zs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`,ws=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`,Ps=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`,Ys=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`,ks=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`,Gs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`,Js=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`,Ks=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`,Qs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`,Vs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`,Ws=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`,Zs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`,$s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`,en=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`,an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`,tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`,sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`,nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`,dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`,cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`,on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`,_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`,An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`,Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`,In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`,Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`,Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`,yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`,Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL
);
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`,Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`,Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`,jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`,zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`,Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`,Yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`,kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`,Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`,Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`,Kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`,Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`,Vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`,Wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`,Zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`,$n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`,er=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`,ar=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`,lr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown_1'::character varying NOT NULL
);
`,tr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`,sr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`,nr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`,rr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`,dr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`,cr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`,or=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`,ir=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`,_r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`,ur=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`,pr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`,Er=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`,mr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`,fr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`,Tr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`,br=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`,Ar=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`,Cr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`,gr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`,Sr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`,vr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`,Rr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`,Ir=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`,Lr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`,Fr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown'::character varying NOT NULL
);
`,hr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`,yr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`,Nr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`,Br=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`,Mr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`,Or=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`,qr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`,Hr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`,Xr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`,Dr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`,Ur=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`,jr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`,xr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`,zr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`,wr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`,Pr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`,Yr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`,kr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`,Gr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`,Jr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`,Kr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`,Qr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`,Vr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`,Wr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`,Zr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer
);
`,$r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 42
);
`,ed=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'010'
);
`,ad=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'0101'
);
`,ld=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT false
);
`,td=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0304'
);
`,sd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'xyz'
);
`,nd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2025-01-01'
);
`,rd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 2.71
);
`,dd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 42
);
`,cd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '2 hours'
);
`,od=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '[]'
);
`,id=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"published"}'::jsonb
);
`,_d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 100
);
`,ud=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 9.99
);
`,pd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 2.5
);
`,Ed=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 7
);
`,md=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'published'
);
`,fd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '18:30:00'
);
`,Td=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '09:00:00+02'
);
`,bd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2025-01-01 00:00:00'
);
`,Ad=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2025-01-01 00:00:00+02'
);
`,Cd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
);
`,gd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'inactive'
);
`,Sd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'done'
);
`,vd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  shareability_status varchar DEFAULT 'unknown_2'::character varying NOT NULL
);
`,Rd=Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/before.sql":Hs,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/before.sql":Xs,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/before.sql":Ds,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/before.sql":Us,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/before.sql":js,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/before.sql":xs,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/before.sql":zs,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/before.sql":ws,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/before.sql":Ps,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/before.sql":Ys,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/before.sql":ks,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/before.sql":Gs,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/before.sql":Js,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/before.sql":Ks,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/before.sql":Qs,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/before.sql":Vs,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/before.sql":Ws,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/before.sql":Zs,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/before.sql":$s,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/before.sql":en,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/before.sql":an,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/before.sql":ln,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/before.sql":tn,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/before.sql":sn,"../../../../samples/ddlapi-diffs/column-default-changes/125-add-default-varchar-raw-expr/before.sql":nn,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/before.sql":rn,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/before.sql":dn,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/before.sql":cn,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/before.sql":on,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/before.sql":_n,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/before.sql":un,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/before.sql":pn,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/before.sql":En,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/before.sql":mn,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/before.sql":fn,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/before.sql":Tn,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/before.sql":bn,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/before.sql":An,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/before.sql":Cn,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/before.sql":gn,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/before.sql":Sn,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/before.sql":vn,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/before.sql":Rn,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/before.sql":In,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/before.sql":Ln,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/before.sql":Fn,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/before.sql":hn,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/before.sql":yn,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/before.sql":Nn,"../../../../samples/ddlapi-diffs/column-default-changes/225-remove-default-varchar-raw-expr/before.sql":Bn,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/before.sql":Mn,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/before.sql":On,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/before.sql":qn,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/before.sql":Hn,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/before.sql":Xn,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/before.sql":Dn,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/before.sql":Un,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/before.sql":jn,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/before.sql":xn,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/before.sql":zn,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/before.sql":wn,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/before.sql":Pn,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/before.sql":Yn,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/before.sql":kn,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/before.sql":Gn,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/before.sql":Jn,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/before.sql":Kn,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/before.sql":Qn,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/before.sql":Vn,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/before.sql":Wn,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/before.sql":Zn,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/before.sql":$n,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/before.sql":er,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/before.sql":ar,"../../../../samples/ddlapi-diffs/column-default-changes/325-replace-default-varchar-raw-expr/before.sql":lr}),Id=Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/after.sql":tr,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/after.sql":sr,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/after.sql":nr,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/after.sql":rr,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/after.sql":dr,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/after.sql":cr,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/after.sql":or,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/after.sql":ir,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/after.sql":_r,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/after.sql":ur,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/after.sql":pr,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/after.sql":Er,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/after.sql":mr,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/after.sql":fr,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/after.sql":Tr,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/after.sql":br,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/after.sql":Ar,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/after.sql":Cr,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/after.sql":gr,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/after.sql":Sr,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/after.sql":vr,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/after.sql":Rr,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/after.sql":Ir,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/after.sql":Lr,"../../../../samples/ddlapi-diffs/column-default-changes/125-add-default-varchar-raw-expr/after.sql":Fr,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/after.sql":hr,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/after.sql":yr,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/after.sql":Nr,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/after.sql":Br,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/after.sql":Mr,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/after.sql":Or,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/after.sql":qr,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/after.sql":Hr,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/after.sql":Xr,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/after.sql":Dr,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/after.sql":Ur,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/after.sql":jr,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/after.sql":xr,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/after.sql":zr,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/after.sql":wr,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/after.sql":Pr,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/after.sql":Yr,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/after.sql":kr,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/after.sql":Gr,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/after.sql":Jr,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/after.sql":Kr,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/after.sql":Qr,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/after.sql":Vr,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/after.sql":Wr,"../../../../samples/ddlapi-diffs/column-default-changes/225-remove-default-varchar-raw-expr/after.sql":Zr,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/after.sql":$r,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/after.sql":ed,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/after.sql":ad,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/after.sql":ld,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/after.sql":td,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/after.sql":sd,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/after.sql":nd,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/after.sql":rd,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/after.sql":dd,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/after.sql":cd,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/after.sql":od,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/after.sql":id,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/after.sql":_d,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/after.sql":ud,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/after.sql":pd,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/after.sql":Ed,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/after.sql":md,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/after.sql":fd,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/after.sql":Td,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/after.sql":bd,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/after.sql":Ad,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/after.sql":Cd,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/after.sql":gd,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/after.sql":Sd,"../../../../samples/ddlapi-diffs/column-default-changes/325-replace-default-varchar-raw-expr/after.sql":vd}),Ld=Bs(Rd,Id),Fd=Ms(Ld),xd={...Os,title:"DDL API Diffs Suite/Column Default Changes Samples"},e=qs(Fd),a=e("101-add-default-bigint"),l=e("201-remove-default-bigint"),t=e("301-replace-default-bigint"),s=e("102-add-default-bit"),n=e("202-remove-default-bit"),r=e("302-replace-default-bit"),d=e("103-add-default-bit-varying"),c=e("203-remove-default-bit-varying"),o=e("303-replace-default-bit-varying"),i=e("104-add-default-boolean"),_=e("204-remove-default-boolean"),u=e("304-replace-default-boolean"),p=e("105-add-default-bytea"),E=e("205-remove-default-bytea"),m=e("305-replace-default-bytea"),f=e("106-add-default-char"),T=e("206-remove-default-char"),b=e("306-replace-default-char"),A=e("107-add-default-date"),C=e("207-remove-default-date"),g=e("307-replace-default-date"),S=e("108-add-default-double-precision"),v=e("208-remove-default-double-precision"),R=e("308-replace-default-double-precision"),I=e("109-add-default-integer"),L=e("209-remove-default-integer"),F=e("309-replace-default-integer"),h=e("110-add-default-interval"),y=e("210-remove-default-interval"),N=e("310-replace-default-interval"),B=e("111-add-default-json"),M=e("211-remove-default-json"),O=e("311-replace-default-json"),q=e("112-add-default-jsonb"),H=e("212-remove-default-jsonb"),X=e("312-replace-default-jsonb"),D=e("113-add-default-money"),U=e("213-remove-default-money"),j=e("313-replace-default-money"),x=e("114-add-default-numeric"),z=e("214-remove-default-numeric"),w=e("314-replace-default-numeric"),P=e("115-add-default-real"),Y=e("215-remove-default-real"),k=e("315-replace-default-real"),G=e("116-add-default-smallint"),J=e("216-remove-default-smallint"),K=e("316-replace-default-smallint"),Q=e("117-add-default-text"),V=e("217-remove-default-text"),W=e("317-replace-default-text"),Z=e("118-add-default-time"),$=e("218-remove-default-time"),ee=e("318-replace-default-time"),ae=e("119-add-default-timetz"),le=e("219-remove-default-timetz"),te=e("319-replace-default-timetz"),se=e("120-add-default-timestamp"),ne=e("220-remove-default-timestamp"),re=e("320-replace-default-timestamp"),de=e("121-add-default-timestamptz"),ce=e("221-remove-default-timestamptz"),oe=e("321-replace-default-timestamptz"),ie=e("122-add-default-uuid"),_e=e("222-remove-default-uuid"),ue=e("322-replace-default-uuid"),pe=e("123-add-default-varchar"),Ee=e("223-remove-default-varchar"),me=e("323-replace-default-varchar"),fe=e("124-add-default-enum"),Te=e("224-remove-default-enum"),be=e("324-replace-default-enum"),Ae=e("125-add-default-varchar-raw-expr"),Ce=e("225-remove-default-varchar-raw-expr"),ge=e("325-replace-default-varchar-raw-expr");var Se,ve,Re;a.parameters={...a.parameters,docs:{...(Se=a.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("101-add-default-bigint")',...(Re=(ve=a.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var Ie,Le,Fe;l.parameters={...l.parameters,docs:{...(Ie=l.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("201-remove-default-bigint")',...(Fe=(Le=l.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var he,ye,Ne;t.parameters={...t.parameters,docs:{...(he=t.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("301-replace-default-bigint")',...(Ne=(ye=t.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var Be,Me,Oe;s.parameters={...s.parameters,docs:{...(Be=s.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("102-add-default-bit")',...(Oe=(Me=s.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var qe,He,Xe;n.parameters={...n.parameters,docs:{...(qe=n.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("202-remove-default-bit")',...(Xe=(He=n.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var De,Ue,je;r.parameters={...r.parameters,docs:{...(De=r.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("302-replace-default-bit")',...(je=(Ue=r.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var xe,ze,we;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("103-add-default-bit-varying")',...(we=(ze=d.parameters)==null?void 0:ze.docs)==null?void 0:we.source}}};var Pe,Ye,ke;c.parameters={...c.parameters,docs:{...(Pe=c.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("203-remove-default-bit-varying")',...(ke=(Ye=c.parameters)==null?void 0:Ye.docs)==null?void 0:ke.source}}};var Ge,Je,Ke;o.parameters={...o.parameters,docs:{...(Ge=o.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("303-replace-default-bit-varying")',...(Ke=(Je=o.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ve,We;i.parameters={...i.parameters,docs:{...(Qe=i.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("104-add-default-boolean")',...(We=(Ve=i.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ze,$e,ea;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("204-remove-default-boolean")',...(ea=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};var aa,la,ta;u.parameters={...u.parameters,docs:{...(aa=u.parameters)==null?void 0:aa.docs,source:{originalSource:'createCaseStory("304-replace-default-boolean")',...(ta=(la=u.parameters)==null?void 0:la.docs)==null?void 0:ta.source}}};var sa,na,ra;p.parameters={...p.parameters,docs:{...(sa=p.parameters)==null?void 0:sa.docs,source:{originalSource:'createCaseStory("105-add-default-bytea")',...(ra=(na=p.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var da,ca,oa;E.parameters={...E.parameters,docs:{...(da=E.parameters)==null?void 0:da.docs,source:{originalSource:'createCaseStory("205-remove-default-bytea")',...(oa=(ca=E.parameters)==null?void 0:ca.docs)==null?void 0:oa.source}}};var ia,_a,ua;m.parameters={...m.parameters,docs:{...(ia=m.parameters)==null?void 0:ia.docs,source:{originalSource:'createCaseStory("305-replace-default-bytea")',...(ua=(_a=m.parameters)==null?void 0:_a.docs)==null?void 0:ua.source}}};var pa,Ea,ma;f.parameters={...f.parameters,docs:{...(pa=f.parameters)==null?void 0:pa.docs,source:{originalSource:'createCaseStory("106-add-default-char")',...(ma=(Ea=f.parameters)==null?void 0:Ea.docs)==null?void 0:ma.source}}};var fa,Ta,ba;T.parameters={...T.parameters,docs:{...(fa=T.parameters)==null?void 0:fa.docs,source:{originalSource:'createCaseStory("206-remove-default-char")',...(ba=(Ta=T.parameters)==null?void 0:Ta.docs)==null?void 0:ba.source}}};var Aa,Ca,ga;b.parameters={...b.parameters,docs:{...(Aa=b.parameters)==null?void 0:Aa.docs,source:{originalSource:'createCaseStory("306-replace-default-char")',...(ga=(Ca=b.parameters)==null?void 0:Ca.docs)==null?void 0:ga.source}}};var Sa,va,Ra;A.parameters={...A.parameters,docs:{...(Sa=A.parameters)==null?void 0:Sa.docs,source:{originalSource:'createCaseStory("107-add-default-date")',...(Ra=(va=A.parameters)==null?void 0:va.docs)==null?void 0:Ra.source}}};var Ia,La,Fa;C.parameters={...C.parameters,docs:{...(Ia=C.parameters)==null?void 0:Ia.docs,source:{originalSource:'createCaseStory("207-remove-default-date")',...(Fa=(La=C.parameters)==null?void 0:La.docs)==null?void 0:Fa.source}}};var ha,ya,Na;g.parameters={...g.parameters,docs:{...(ha=g.parameters)==null?void 0:ha.docs,source:{originalSource:'createCaseStory("307-replace-default-date")',...(Na=(ya=g.parameters)==null?void 0:ya.docs)==null?void 0:Na.source}}};var Ba,Ma,Oa;S.parameters={...S.parameters,docs:{...(Ba=S.parameters)==null?void 0:Ba.docs,source:{originalSource:'createCaseStory("108-add-default-double-precision")',...(Oa=(Ma=S.parameters)==null?void 0:Ma.docs)==null?void 0:Oa.source}}};var qa,Ha,Xa;v.parameters={...v.parameters,docs:{...(qa=v.parameters)==null?void 0:qa.docs,source:{originalSource:'createCaseStory("208-remove-default-double-precision")',...(Xa=(Ha=v.parameters)==null?void 0:Ha.docs)==null?void 0:Xa.source}}};var Da,Ua,ja;R.parameters={...R.parameters,docs:{...(Da=R.parameters)==null?void 0:Da.docs,source:{originalSource:'createCaseStory("308-replace-default-double-precision")',...(ja=(Ua=R.parameters)==null?void 0:Ua.docs)==null?void 0:ja.source}}};var xa,za,wa;I.parameters={...I.parameters,docs:{...(xa=I.parameters)==null?void 0:xa.docs,source:{originalSource:'createCaseStory("109-add-default-integer")',...(wa=(za=I.parameters)==null?void 0:za.docs)==null?void 0:wa.source}}};var Pa,Ya,ka;L.parameters={...L.parameters,docs:{...(Pa=L.parameters)==null?void 0:Pa.docs,source:{originalSource:'createCaseStory("209-remove-default-integer")',...(ka=(Ya=L.parameters)==null?void 0:Ya.docs)==null?void 0:ka.source}}};var Ga,Ja,Ka;F.parameters={...F.parameters,docs:{...(Ga=F.parameters)==null?void 0:Ga.docs,source:{originalSource:'createCaseStory("309-replace-default-integer")',...(Ka=(Ja=F.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Va,Wa;h.parameters={...h.parameters,docs:{...(Qa=h.parameters)==null?void 0:Qa.docs,source:{originalSource:'createCaseStory("110-add-default-interval")',...(Wa=(Va=h.parameters)==null?void 0:Va.docs)==null?void 0:Wa.source}}};var Za,$a,el;y.parameters={...y.parameters,docs:{...(Za=y.parameters)==null?void 0:Za.docs,source:{originalSource:'createCaseStory("210-remove-default-interval")',...(el=($a=y.parameters)==null?void 0:$a.docs)==null?void 0:el.source}}};var al,ll,tl;N.parameters={...N.parameters,docs:{...(al=N.parameters)==null?void 0:al.docs,source:{originalSource:'createCaseStory("310-replace-default-interval")',...(tl=(ll=N.parameters)==null?void 0:ll.docs)==null?void 0:tl.source}}};var sl,nl,rl;B.parameters={...B.parameters,docs:{...(sl=B.parameters)==null?void 0:sl.docs,source:{originalSource:'createCaseStory("111-add-default-json")',...(rl=(nl=B.parameters)==null?void 0:nl.docs)==null?void 0:rl.source}}};var dl,cl,ol;M.parameters={...M.parameters,docs:{...(dl=M.parameters)==null?void 0:dl.docs,source:{originalSource:'createCaseStory("211-remove-default-json")',...(ol=(cl=M.parameters)==null?void 0:cl.docs)==null?void 0:ol.source}}};var il,_l,ul;O.parameters={...O.parameters,docs:{...(il=O.parameters)==null?void 0:il.docs,source:{originalSource:'createCaseStory("311-replace-default-json")',...(ul=(_l=O.parameters)==null?void 0:_l.docs)==null?void 0:ul.source}}};var pl,El,ml;q.parameters={...q.parameters,docs:{...(pl=q.parameters)==null?void 0:pl.docs,source:{originalSource:'createCaseStory("112-add-default-jsonb")',...(ml=(El=q.parameters)==null?void 0:El.docs)==null?void 0:ml.source}}};var fl,Tl,bl;H.parameters={...H.parameters,docs:{...(fl=H.parameters)==null?void 0:fl.docs,source:{originalSource:'createCaseStory("212-remove-default-jsonb")',...(bl=(Tl=H.parameters)==null?void 0:Tl.docs)==null?void 0:bl.source}}};var Al,Cl,gl;X.parameters={...X.parameters,docs:{...(Al=X.parameters)==null?void 0:Al.docs,source:{originalSource:'createCaseStory("312-replace-default-jsonb")',...(gl=(Cl=X.parameters)==null?void 0:Cl.docs)==null?void 0:gl.source}}};var Sl,vl,Rl;D.parameters={...D.parameters,docs:{...(Sl=D.parameters)==null?void 0:Sl.docs,source:{originalSource:'createCaseStory("113-add-default-money")',...(Rl=(vl=D.parameters)==null?void 0:vl.docs)==null?void 0:Rl.source}}};var Il,Ll,Fl;U.parameters={...U.parameters,docs:{...(Il=U.parameters)==null?void 0:Il.docs,source:{originalSource:'createCaseStory("213-remove-default-money")',...(Fl=(Ll=U.parameters)==null?void 0:Ll.docs)==null?void 0:Fl.source}}};var hl,yl,Nl;j.parameters={...j.parameters,docs:{...(hl=j.parameters)==null?void 0:hl.docs,source:{originalSource:'createCaseStory("313-replace-default-money")',...(Nl=(yl=j.parameters)==null?void 0:yl.docs)==null?void 0:Nl.source}}};var Bl,Ml,Ol;x.parameters={...x.parameters,docs:{...(Bl=x.parameters)==null?void 0:Bl.docs,source:{originalSource:'createCaseStory("114-add-default-numeric")',...(Ol=(Ml=x.parameters)==null?void 0:Ml.docs)==null?void 0:Ol.source}}};var ql,Hl,Xl;z.parameters={...z.parameters,docs:{...(ql=z.parameters)==null?void 0:ql.docs,source:{originalSource:'createCaseStory("214-remove-default-numeric")',...(Xl=(Hl=z.parameters)==null?void 0:Hl.docs)==null?void 0:Xl.source}}};var Dl,Ul,jl;w.parameters={...w.parameters,docs:{...(Dl=w.parameters)==null?void 0:Dl.docs,source:{originalSource:'createCaseStory("314-replace-default-numeric")',...(jl=(Ul=w.parameters)==null?void 0:Ul.docs)==null?void 0:jl.source}}};var xl,zl,wl;P.parameters={...P.parameters,docs:{...(xl=P.parameters)==null?void 0:xl.docs,source:{originalSource:'createCaseStory("115-add-default-real")',...(wl=(zl=P.parameters)==null?void 0:zl.docs)==null?void 0:wl.source}}};var Pl,Yl,kl;Y.parameters={...Y.parameters,docs:{...(Pl=Y.parameters)==null?void 0:Pl.docs,source:{originalSource:'createCaseStory("215-remove-default-real")',...(kl=(Yl=Y.parameters)==null?void 0:Yl.docs)==null?void 0:kl.source}}};var Gl,Jl,Kl;k.parameters={...k.parameters,docs:{...(Gl=k.parameters)==null?void 0:Gl.docs,source:{originalSource:'createCaseStory("315-replace-default-real")',...(Kl=(Jl=k.parameters)==null?void 0:Jl.docs)==null?void 0:Kl.source}}};var Ql,Vl,Wl;G.parameters={...G.parameters,docs:{...(Ql=G.parameters)==null?void 0:Ql.docs,source:{originalSource:'createCaseStory("116-add-default-smallint")',...(Wl=(Vl=G.parameters)==null?void 0:Vl.docs)==null?void 0:Wl.source}}};var Zl,$l,et;J.parameters={...J.parameters,docs:{...(Zl=J.parameters)==null?void 0:Zl.docs,source:{originalSource:'createCaseStory("216-remove-default-smallint")',...(et=($l=J.parameters)==null?void 0:$l.docs)==null?void 0:et.source}}};var at,lt,tt;K.parameters={...K.parameters,docs:{...(at=K.parameters)==null?void 0:at.docs,source:{originalSource:'createCaseStory("316-replace-default-smallint")',...(tt=(lt=K.parameters)==null?void 0:lt.docs)==null?void 0:tt.source}}};var st,nt,rt;Q.parameters={...Q.parameters,docs:{...(st=Q.parameters)==null?void 0:st.docs,source:{originalSource:'createCaseStory("117-add-default-text")',...(rt=(nt=Q.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var dt,ct,ot;V.parameters={...V.parameters,docs:{...(dt=V.parameters)==null?void 0:dt.docs,source:{originalSource:'createCaseStory("217-remove-default-text")',...(ot=(ct=V.parameters)==null?void 0:ct.docs)==null?void 0:ot.source}}};var it,_t,ut;W.parameters={...W.parameters,docs:{...(it=W.parameters)==null?void 0:it.docs,source:{originalSource:'createCaseStory("317-replace-default-text")',...(ut=(_t=W.parameters)==null?void 0:_t.docs)==null?void 0:ut.source}}};var pt,Et,mt;Z.parameters={...Z.parameters,docs:{...(pt=Z.parameters)==null?void 0:pt.docs,source:{originalSource:'createCaseStory("118-add-default-time")',...(mt=(Et=Z.parameters)==null?void 0:Et.docs)==null?void 0:mt.source}}};var ft,Tt,bt;$.parameters={...$.parameters,docs:{...(ft=$.parameters)==null?void 0:ft.docs,source:{originalSource:'createCaseStory("218-remove-default-time")',...(bt=(Tt=$.parameters)==null?void 0:Tt.docs)==null?void 0:bt.source}}};var At,Ct,gt;ee.parameters={...ee.parameters,docs:{...(At=ee.parameters)==null?void 0:At.docs,source:{originalSource:'createCaseStory("318-replace-default-time")',...(gt=(Ct=ee.parameters)==null?void 0:Ct.docs)==null?void 0:gt.source}}};var St,vt,Rt;ae.parameters={...ae.parameters,docs:{...(St=ae.parameters)==null?void 0:St.docs,source:{originalSource:'createCaseStory("119-add-default-timetz")',...(Rt=(vt=ae.parameters)==null?void 0:vt.docs)==null?void 0:Rt.source}}};var It,Lt,Ft;le.parameters={...le.parameters,docs:{...(It=le.parameters)==null?void 0:It.docs,source:{originalSource:'createCaseStory("219-remove-default-timetz")',...(Ft=(Lt=le.parameters)==null?void 0:Lt.docs)==null?void 0:Ft.source}}};var ht,yt,Nt;te.parameters={...te.parameters,docs:{...(ht=te.parameters)==null?void 0:ht.docs,source:{originalSource:'createCaseStory("319-replace-default-timetz")',...(Nt=(yt=te.parameters)==null?void 0:yt.docs)==null?void 0:Nt.source}}};var Bt,Mt,Ot;se.parameters={...se.parameters,docs:{...(Bt=se.parameters)==null?void 0:Bt.docs,source:{originalSource:'createCaseStory("120-add-default-timestamp")',...(Ot=(Mt=se.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var qt,Ht,Xt;ne.parameters={...ne.parameters,docs:{...(qt=ne.parameters)==null?void 0:qt.docs,source:{originalSource:'createCaseStory("220-remove-default-timestamp")',...(Xt=(Ht=ne.parameters)==null?void 0:Ht.docs)==null?void 0:Xt.source}}};var Dt,Ut,jt;re.parameters={...re.parameters,docs:{...(Dt=re.parameters)==null?void 0:Dt.docs,source:{originalSource:'createCaseStory("320-replace-default-timestamp")',...(jt=(Ut=re.parameters)==null?void 0:Ut.docs)==null?void 0:jt.source}}};var xt,zt,wt;de.parameters={...de.parameters,docs:{...(xt=de.parameters)==null?void 0:xt.docs,source:{originalSource:'createCaseStory("121-add-default-timestamptz")',...(wt=(zt=de.parameters)==null?void 0:zt.docs)==null?void 0:wt.source}}};var Pt,Yt,kt;ce.parameters={...ce.parameters,docs:{...(Pt=ce.parameters)==null?void 0:Pt.docs,source:{originalSource:'createCaseStory("221-remove-default-timestamptz")',...(kt=(Yt=ce.parameters)==null?void 0:Yt.docs)==null?void 0:kt.source}}};var Gt,Jt,Kt;oe.parameters={...oe.parameters,docs:{...(Gt=oe.parameters)==null?void 0:Gt.docs,source:{originalSource:'createCaseStory("321-replace-default-timestamptz")',...(Kt=(Jt=oe.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source}}};var Qt,Vt,Wt;ie.parameters={...ie.parameters,docs:{...(Qt=ie.parameters)==null?void 0:Qt.docs,source:{originalSource:'createCaseStory("122-add-default-uuid")',...(Wt=(Vt=ie.parameters)==null?void 0:Vt.docs)==null?void 0:Wt.source}}};var Zt,$t,es;_e.parameters={..._e.parameters,docs:{...(Zt=_e.parameters)==null?void 0:Zt.docs,source:{originalSource:'createCaseStory("222-remove-default-uuid")',...(es=($t=_e.parameters)==null?void 0:$t.docs)==null?void 0:es.source}}};var as,ls,ts;ue.parameters={...ue.parameters,docs:{...(as=ue.parameters)==null?void 0:as.docs,source:{originalSource:'createCaseStory("322-replace-default-uuid")',...(ts=(ls=ue.parameters)==null?void 0:ls.docs)==null?void 0:ts.source}}};var ss,ns,rs;pe.parameters={...pe.parameters,docs:{...(ss=pe.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("123-add-default-varchar")',...(rs=(ns=pe.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var ds,cs,os;Ee.parameters={...Ee.parameters,docs:{...(ds=Ee.parameters)==null?void 0:ds.docs,source:{originalSource:'createCaseStory("223-remove-default-varchar")',...(os=(cs=Ee.parameters)==null?void 0:cs.docs)==null?void 0:os.source}}};var is,_s,us;me.parameters={...me.parameters,docs:{...(is=me.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("323-replace-default-varchar")',...(us=(_s=me.parameters)==null?void 0:_s.docs)==null?void 0:us.source}}};var ps,Es,ms;fe.parameters={...fe.parameters,docs:{...(ps=fe.parameters)==null?void 0:ps.docs,source:{originalSource:'createCaseStory("124-add-default-enum")',...(ms=(Es=fe.parameters)==null?void 0:Es.docs)==null?void 0:ms.source}}};var fs,Ts,bs;Te.parameters={...Te.parameters,docs:{...(fs=Te.parameters)==null?void 0:fs.docs,source:{originalSource:'createCaseStory("224-remove-default-enum")',...(bs=(Ts=Te.parameters)==null?void 0:Ts.docs)==null?void 0:bs.source}}};var As,Cs,gs;be.parameters={...be.parameters,docs:{...(As=be.parameters)==null?void 0:As.docs,source:{originalSource:'createCaseStory("324-replace-default-enum")',...(gs=(Cs=be.parameters)==null?void 0:Cs.docs)==null?void 0:gs.source}}};var Ss,vs,Rs;Ae.parameters={...Ae.parameters,docs:{...(Ss=Ae.parameters)==null?void 0:Ss.docs,source:{originalSource:'createCaseStory("125-add-default-varchar-raw-expr")',...(Rs=(vs=Ae.parameters)==null?void 0:vs.docs)==null?void 0:Rs.source}}};var Is,Ls,Fs;Ce.parameters={...Ce.parameters,docs:{...(Is=Ce.parameters)==null?void 0:Is.docs,source:{originalSource:'createCaseStory("225-remove-default-varchar-raw-expr")',...(Fs=(Ls=Ce.parameters)==null?void 0:Ls.docs)==null?void 0:Fs.source}}};var hs,ys,Ns;ge.parameters={...ge.parameters,docs:{...(hs=ge.parameters)==null?void 0:hs.docs,source:{originalSource:'createCaseStory("325-replace-default-varchar-raw-expr")',...(Ns=(ys=ge.parameters)==null?void 0:ys.docs)==null?void 0:Ns.source}}};const zd=["Case_101_add_default_bigint","Case_201_remove_default_bigint","Case_301_replace_default_bigint","Case_102_add_default_bit","Case_202_remove_default_bit","Case_302_replace_default_bit","Case_103_add_default_bit_varying","Case_203_remove_default_bit_varying","Case_303_replace_default_bit_varying","Case_104_add_default_boolean","Case_204_remove_default_boolean","Case_304_replace_default_boolean","Case_105_add_default_bytea","Case_205_remove_default_bytea","Case_305_replace_default_bytea","Case_106_add_default_char","Case_206_remove_default_char","Case_306_replace_default_char","Case_107_add_default_date","Case_207_remove_default_date","Case_307_replace_default_date","Case_108_add_default_double_precision","Case_208_remove_default_double_precision","Case_308_replace_default_double_precision","Case_109_add_default_integer","Case_209_remove_default_integer","Case_309_replace_default_integer","Case_110_add_default_interval","Case_210_remove_default_interval","Case_310_replace_default_interval","Case_111_add_default_json","Case_211_remove_default_json","Case_311_replace_default_json","Case_112_add_default_jsonb","Case_212_remove_default_jsonb","Case_312_replace_default_jsonb","Case_113_add_default_money","Case_213_remove_default_money","Case_313_replace_default_money","Case_114_add_default_numeric","Case_214_remove_default_numeric","Case_314_replace_default_numeric","Case_115_add_default_real","Case_215_remove_default_real","Case_315_replace_default_real","Case_116_add_default_smallint","Case_216_remove_default_smallint","Case_316_replace_default_smallint","Case_117_add_default_text","Case_217_remove_default_text","Case_317_replace_default_text","Case_118_add_default_time","Case_218_remove_default_time","Case_318_replace_default_time","Case_119_add_default_timetz","Case_219_remove_default_timetz","Case_319_replace_default_timetz","Case_120_add_default_timestamp","Case_220_remove_default_timestamp","Case_320_replace_default_timestamp","Case_121_add_default_timestamptz","Case_221_remove_default_timestamptz","Case_321_replace_default_timestamptz","Case_122_add_default_uuid","Case_222_remove_default_uuid","Case_322_replace_default_uuid","Case_123_add_default_varchar","Case_223_remove_default_varchar","Case_323_replace_default_varchar","Case_124_add_default_enum","Case_224_remove_default_enum","Case_324_replace_default_enum","Case_125_add_default_varchar_raw_expr","Case_225_remove_default_varchar_raw_expr","Case_325_replace_default_varchar_raw_expr"];export{a as Case_101_add_default_bigint,s as Case_102_add_default_bit,d as Case_103_add_default_bit_varying,i as Case_104_add_default_boolean,p as Case_105_add_default_bytea,f as Case_106_add_default_char,A as Case_107_add_default_date,S as Case_108_add_default_double_precision,I as Case_109_add_default_integer,h as Case_110_add_default_interval,B as Case_111_add_default_json,q as Case_112_add_default_jsonb,D as Case_113_add_default_money,x as Case_114_add_default_numeric,P as Case_115_add_default_real,G as Case_116_add_default_smallint,Q as Case_117_add_default_text,Z as Case_118_add_default_time,ae as Case_119_add_default_timetz,se as Case_120_add_default_timestamp,de as Case_121_add_default_timestamptz,ie as Case_122_add_default_uuid,pe as Case_123_add_default_varchar,fe as Case_124_add_default_enum,Ae as Case_125_add_default_varchar_raw_expr,l as Case_201_remove_default_bigint,n as Case_202_remove_default_bit,c as Case_203_remove_default_bit_varying,_ as Case_204_remove_default_boolean,E as Case_205_remove_default_bytea,T as Case_206_remove_default_char,C as Case_207_remove_default_date,v as Case_208_remove_default_double_precision,L as Case_209_remove_default_integer,y as Case_210_remove_default_interval,M as Case_211_remove_default_json,H as Case_212_remove_default_jsonb,U as Case_213_remove_default_money,z as Case_214_remove_default_numeric,Y as Case_215_remove_default_real,J as Case_216_remove_default_smallint,V as Case_217_remove_default_text,$ as Case_218_remove_default_time,le as Case_219_remove_default_timetz,ne as Case_220_remove_default_timestamp,ce as Case_221_remove_default_timestamptz,_e as Case_222_remove_default_uuid,Ee as Case_223_remove_default_varchar,Te as Case_224_remove_default_enum,Ce as Case_225_remove_default_varchar_raw_expr,t as Case_301_replace_default_bigint,r as Case_302_replace_default_bit,o as Case_303_replace_default_bit_varying,u as Case_304_replace_default_boolean,m as Case_305_replace_default_bytea,b as Case_306_replace_default_char,g as Case_307_replace_default_date,R as Case_308_replace_default_double_precision,F as Case_309_replace_default_integer,N as Case_310_replace_default_interval,O as Case_311_replace_default_json,X as Case_312_replace_default_jsonb,j as Case_313_replace_default_money,w as Case_314_replace_default_numeric,k as Case_315_replace_default_real,K as Case_316_replace_default_smallint,W as Case_317_replace_default_text,ee as Case_318_replace_default_time,te as Case_319_replace_default_timetz,re as Case_320_replace_default_timestamp,oe as Case_321_replace_default_timestamptz,ue as Case_322_replace_default_uuid,me as Case_323_replace_default_varchar,be as Case_324_replace_default_enum,ge as Case_325_replace_default_varchar_raw_expr,zd as __namedExportsOrder,xd as default};
