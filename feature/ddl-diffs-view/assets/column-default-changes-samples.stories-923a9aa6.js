import{c as As,a as Cs,d as gs,b as Ss}from"./ddlapi-diffs-utils-f1477463.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./DdlTableDiffsViewer-dc9a1cbd.js";import"./DiffBadge-40fbf5b6.js";import"./index-c8950630.js";/* empty css              */import"./build-from-ddl-browser-b77a5236.js";import"./iframe-c1563942.js";import"../sb-preview/runtime.js";const vs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`,Rs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`,Is=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`,Fs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`,Ls=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`,hs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`,ys=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`,Bs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`,Ms=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`,Ns=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`,Os=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`,qs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`,Hs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`,Xs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`,Ds=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`,Us=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`,js=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`,zs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`,xs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`,ws=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`,Ps=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`,Ys=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`,ks=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`,Gs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`,Js=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`,Ks=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`,Qs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`,Vs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`,Ws=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`,Zs=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`,$s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`,en=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`,an=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`,ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`,tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`,sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`,nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`,rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`,dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`,cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`,on=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`,_n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`,un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`,pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`,mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`,En=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`,fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`,Tn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`,bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`,An=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`,Cn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`,gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`,Sn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`,vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`,Rn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`,In=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`,Fn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`,Ln=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`,hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`,yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`,Bn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`,Mn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`,Nn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`,On=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`,qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`,Hn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`,Xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`,Dn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`,Un=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`,jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`,zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`,xn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`,wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 0
);
`,Pn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'101'
);
`,Yn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'1010'
);
`,kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT true
);
`,Gn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0102'
);
`,Jn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'abc'
);
`,Kn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2024-06-15'
);
`,Qn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 3.14
);
`,Vn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 0
);
`,Wn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '1 day'
);
`,Zn=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '{}'
);
`,$n=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"draft"}'::jsonb
);
`,er=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 0
);
`,ar=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 1.50
);
`,lr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 1.5
);
`,tr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 0
);
`,sr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'draft'
);
`,nr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '12:00:00'
);
`,rr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '12:00:00+02'
);
`,dr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2024-06-15 12:00:00'
);
`,cr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2024-06-15 12:00:00+02'
);
`,or=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '550e8400-e29b-41d4-a716-446655440000'
);
`,ir=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'active'
);
`,_r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'pending'
);
`,ur=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint
);
`,pr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3)
);
`,mr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4)
);
`,Er=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean
);
`,fr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea
);
`,Tr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3)
);
`,br=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date
);
`,Ar=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision
);
`,Cr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer
);
`,gr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval
);
`,Sr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json
);
`,vr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb
);
`,Rr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money
);
`,Ir=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2)
);
`,Fr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real
);
`,Lr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint
);
`,hr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text
);
`,yr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time
);
`,Br=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone
);
`,Mr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp
);
`,Nr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone
);
`,Or=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid
);
`,qr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50)
);
`,Hr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status
);
`,Xr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bigint DEFAULT 42
);
`,Dr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit(3) DEFAULT B'010'
);
`,Ur=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bit varying(4) DEFAULT B'0101'
);
`,jr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col boolean DEFAULT false
);
`,zr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col bytea DEFAULT E'\\\\x0304'
);
`,xr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col char(3) DEFAULT 'xyz'
);
`,wr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col date DEFAULT '2025-01-01'
);
`,Pr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col double precision DEFAULT 2.71
);
`,Yr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col integer DEFAULT 42
);
`,kr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col interval DEFAULT '2 hours'
);
`,Gr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col json DEFAULT '[]'
);
`,Jr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col jsonb DEFAULT '{"status":"published"}'::jsonb
);
`,Kr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col money DEFAULT 100
);
`,Qr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col numeric(10, 2) DEFAULT 9.99
);
`,Vr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col real DEFAULT 2.5
);
`,Wr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col smallint DEFAULT 7
);
`,Zr=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col text DEFAULT 'published'
);
`,$r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time DEFAULT '18:30:00'
);
`,ed=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col time with time zone DEFAULT '09:00:00+02'
);
`,ad=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp DEFAULT '2025-01-01 00:00:00'
);
`,ld=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col timestamp with time zone DEFAULT '2025-01-01 00:00:00+02'
);
`,td=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col uuid DEFAULT '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
);
`,sd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  sample_col character varying(50) DEFAULT 'inactive'
);
`,nd=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TYPE public.sample_status AS ENUM ('pending', 'done');

CREATE TABLE public.t (
  id integer,
  sample_col public.sample_status DEFAULT 'done'
);
`,rd=Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/before.sql":vs,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/before.sql":Rs,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/before.sql":Is,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/before.sql":Fs,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/before.sql":Ls,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/before.sql":hs,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/before.sql":ys,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/before.sql":Bs,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/before.sql":Ms,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/before.sql":Ns,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/before.sql":Os,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/before.sql":qs,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/before.sql":Hs,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/before.sql":Xs,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/before.sql":Ds,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/before.sql":Us,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/before.sql":js,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/before.sql":zs,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/before.sql":xs,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/before.sql":ws,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/before.sql":Ps,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/before.sql":Ys,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/before.sql":ks,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/before.sql":Gs,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/before.sql":Js,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/before.sql":Ks,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/before.sql":Qs,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/before.sql":Vs,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/before.sql":Ws,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/before.sql":Zs,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/before.sql":$s,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/before.sql":en,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/before.sql":an,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/before.sql":ln,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/before.sql":tn,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/before.sql":sn,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/before.sql":nn,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/before.sql":rn,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/before.sql":dn,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/before.sql":cn,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/before.sql":on,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/before.sql":_n,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/before.sql":un,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/before.sql":pn,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/before.sql":mn,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/before.sql":En,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/before.sql":fn,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/before.sql":Tn,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/before.sql":bn,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/before.sql":An,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/before.sql":Cn,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/before.sql":gn,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/before.sql":Sn,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/before.sql":vn,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/before.sql":Rn,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/before.sql":In,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/before.sql":Fn,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/before.sql":Ln,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/before.sql":hn,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/before.sql":yn,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/before.sql":Bn,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/before.sql":Mn,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/before.sql":Nn,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/before.sql":On,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/before.sql":qn,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/before.sql":Hn,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/before.sql":Xn,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/before.sql":Dn,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/before.sql":Un,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/before.sql":jn,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/before.sql":zn,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/before.sql":xn}),dd=Object.assign({"../../../../samples/ddlapi-diffs/column-default-changes/101-add-default-bigint/after.sql":wn,"../../../../samples/ddlapi-diffs/column-default-changes/102-add-default-bit/after.sql":Pn,"../../../../samples/ddlapi-diffs/column-default-changes/103-add-default-bit-varying/after.sql":Yn,"../../../../samples/ddlapi-diffs/column-default-changes/104-add-default-boolean/after.sql":kn,"../../../../samples/ddlapi-diffs/column-default-changes/105-add-default-bytea/after.sql":Gn,"../../../../samples/ddlapi-diffs/column-default-changes/106-add-default-char/after.sql":Jn,"../../../../samples/ddlapi-diffs/column-default-changes/107-add-default-date/after.sql":Kn,"../../../../samples/ddlapi-diffs/column-default-changes/108-add-default-double-precision/after.sql":Qn,"../../../../samples/ddlapi-diffs/column-default-changes/109-add-default-integer/after.sql":Vn,"../../../../samples/ddlapi-diffs/column-default-changes/110-add-default-interval/after.sql":Wn,"../../../../samples/ddlapi-diffs/column-default-changes/111-add-default-json/after.sql":Zn,"../../../../samples/ddlapi-diffs/column-default-changes/112-add-default-jsonb/after.sql":$n,"../../../../samples/ddlapi-diffs/column-default-changes/113-add-default-money/after.sql":er,"../../../../samples/ddlapi-diffs/column-default-changes/114-add-default-numeric/after.sql":ar,"../../../../samples/ddlapi-diffs/column-default-changes/115-add-default-real/after.sql":lr,"../../../../samples/ddlapi-diffs/column-default-changes/116-add-default-smallint/after.sql":tr,"../../../../samples/ddlapi-diffs/column-default-changes/117-add-default-text/after.sql":sr,"../../../../samples/ddlapi-diffs/column-default-changes/118-add-default-time/after.sql":nr,"../../../../samples/ddlapi-diffs/column-default-changes/119-add-default-timetz/after.sql":rr,"../../../../samples/ddlapi-diffs/column-default-changes/120-add-default-timestamp/after.sql":dr,"../../../../samples/ddlapi-diffs/column-default-changes/121-add-default-timestamptz/after.sql":cr,"../../../../samples/ddlapi-diffs/column-default-changes/122-add-default-uuid/after.sql":or,"../../../../samples/ddlapi-diffs/column-default-changes/123-add-default-varchar/after.sql":ir,"../../../../samples/ddlapi-diffs/column-default-changes/124-add-default-enum/after.sql":_r,"../../../../samples/ddlapi-diffs/column-default-changes/201-remove-default-bigint/after.sql":ur,"../../../../samples/ddlapi-diffs/column-default-changes/202-remove-default-bit/after.sql":pr,"../../../../samples/ddlapi-diffs/column-default-changes/203-remove-default-bit-varying/after.sql":mr,"../../../../samples/ddlapi-diffs/column-default-changes/204-remove-default-boolean/after.sql":Er,"../../../../samples/ddlapi-diffs/column-default-changes/205-remove-default-bytea/after.sql":fr,"../../../../samples/ddlapi-diffs/column-default-changes/206-remove-default-char/after.sql":Tr,"../../../../samples/ddlapi-diffs/column-default-changes/207-remove-default-date/after.sql":br,"../../../../samples/ddlapi-diffs/column-default-changes/208-remove-default-double-precision/after.sql":Ar,"../../../../samples/ddlapi-diffs/column-default-changes/209-remove-default-integer/after.sql":Cr,"../../../../samples/ddlapi-diffs/column-default-changes/210-remove-default-interval/after.sql":gr,"../../../../samples/ddlapi-diffs/column-default-changes/211-remove-default-json/after.sql":Sr,"../../../../samples/ddlapi-diffs/column-default-changes/212-remove-default-jsonb/after.sql":vr,"../../../../samples/ddlapi-diffs/column-default-changes/213-remove-default-money/after.sql":Rr,"../../../../samples/ddlapi-diffs/column-default-changes/214-remove-default-numeric/after.sql":Ir,"../../../../samples/ddlapi-diffs/column-default-changes/215-remove-default-real/after.sql":Fr,"../../../../samples/ddlapi-diffs/column-default-changes/216-remove-default-smallint/after.sql":Lr,"../../../../samples/ddlapi-diffs/column-default-changes/217-remove-default-text/after.sql":hr,"../../../../samples/ddlapi-diffs/column-default-changes/218-remove-default-time/after.sql":yr,"../../../../samples/ddlapi-diffs/column-default-changes/219-remove-default-timetz/after.sql":Br,"../../../../samples/ddlapi-diffs/column-default-changes/220-remove-default-timestamp/after.sql":Mr,"../../../../samples/ddlapi-diffs/column-default-changes/221-remove-default-timestamptz/after.sql":Nr,"../../../../samples/ddlapi-diffs/column-default-changes/222-remove-default-uuid/after.sql":Or,"../../../../samples/ddlapi-diffs/column-default-changes/223-remove-default-varchar/after.sql":qr,"../../../../samples/ddlapi-diffs/column-default-changes/224-remove-default-enum/after.sql":Hr,"../../../../samples/ddlapi-diffs/column-default-changes/301-replace-default-bigint/after.sql":Xr,"../../../../samples/ddlapi-diffs/column-default-changes/302-replace-default-bit/after.sql":Dr,"../../../../samples/ddlapi-diffs/column-default-changes/303-replace-default-bit-varying/after.sql":Ur,"../../../../samples/ddlapi-diffs/column-default-changes/304-replace-default-boolean/after.sql":jr,"../../../../samples/ddlapi-diffs/column-default-changes/305-replace-default-bytea/after.sql":zr,"../../../../samples/ddlapi-diffs/column-default-changes/306-replace-default-char/after.sql":xr,"../../../../samples/ddlapi-diffs/column-default-changes/307-replace-default-date/after.sql":wr,"../../../../samples/ddlapi-diffs/column-default-changes/308-replace-default-double-precision/after.sql":Pr,"../../../../samples/ddlapi-diffs/column-default-changes/309-replace-default-integer/after.sql":Yr,"../../../../samples/ddlapi-diffs/column-default-changes/310-replace-default-interval/after.sql":kr,"../../../../samples/ddlapi-diffs/column-default-changes/311-replace-default-json/after.sql":Gr,"../../../../samples/ddlapi-diffs/column-default-changes/312-replace-default-jsonb/after.sql":Jr,"../../../../samples/ddlapi-diffs/column-default-changes/313-replace-default-money/after.sql":Kr,"../../../../samples/ddlapi-diffs/column-default-changes/314-replace-default-numeric/after.sql":Qr,"../../../../samples/ddlapi-diffs/column-default-changes/315-replace-default-real/after.sql":Vr,"../../../../samples/ddlapi-diffs/column-default-changes/316-replace-default-smallint/after.sql":Wr,"../../../../samples/ddlapi-diffs/column-default-changes/317-replace-default-text/after.sql":Zr,"../../../../samples/ddlapi-diffs/column-default-changes/318-replace-default-time/after.sql":$r,"../../../../samples/ddlapi-diffs/column-default-changes/319-replace-default-timetz/after.sql":ed,"../../../../samples/ddlapi-diffs/column-default-changes/320-replace-default-timestamp/after.sql":ad,"../../../../samples/ddlapi-diffs/column-default-changes/321-replace-default-timestamptz/after.sql":ld,"../../../../samples/ddlapi-diffs/column-default-changes/322-replace-default-uuid/after.sql":td,"../../../../samples/ddlapi-diffs/column-default-changes/323-replace-default-varchar/after.sql":sd,"../../../../samples/ddlapi-diffs/column-default-changes/324-replace-default-enum/after.sql":nd}),cd=As(rd,dd),od=Cs(cd),Cd={...gs,title:"DDL API Diffs Suite/Column Default Changes Samples"},e=Ss(od),a=e("101-add-default-bigint"),l=e("201-remove-default-bigint"),t=e("301-replace-default-bigint"),s=e("102-add-default-bit"),n=e("202-remove-default-bit"),r=e("302-replace-default-bit"),d=e("103-add-default-bit-varying"),c=e("203-remove-default-bit-varying"),o=e("303-replace-default-bit-varying"),i=e("104-add-default-boolean"),_=e("204-remove-default-boolean"),u=e("304-replace-default-boolean"),p=e("105-add-default-bytea"),m=e("205-remove-default-bytea"),E=e("305-replace-default-bytea"),f=e("106-add-default-char"),T=e("206-remove-default-char"),b=e("306-replace-default-char"),A=e("107-add-default-date"),C=e("207-remove-default-date"),g=e("307-replace-default-date"),S=e("108-add-default-double-precision"),v=e("208-remove-default-double-precision"),R=e("308-replace-default-double-precision"),I=e("109-add-default-integer"),F=e("209-remove-default-integer"),L=e("309-replace-default-integer"),h=e("110-add-default-interval"),y=e("210-remove-default-interval"),B=e("310-replace-default-interval"),M=e("111-add-default-json"),N=e("211-remove-default-json"),O=e("311-replace-default-json"),q=e("112-add-default-jsonb"),H=e("212-remove-default-jsonb"),X=e("312-replace-default-jsonb"),D=e("113-add-default-money"),U=e("213-remove-default-money"),j=e("313-replace-default-money"),z=e("114-add-default-numeric"),x=e("214-remove-default-numeric"),w=e("314-replace-default-numeric"),P=e("115-add-default-real"),Y=e("215-remove-default-real"),k=e("315-replace-default-real"),G=e("116-add-default-smallint"),J=e("216-remove-default-smallint"),K=e("316-replace-default-smallint"),Q=e("117-add-default-text"),V=e("217-remove-default-text"),W=e("317-replace-default-text"),Z=e("118-add-default-time"),$=e("218-remove-default-time"),ee=e("318-replace-default-time"),ae=e("119-add-default-timetz"),le=e("219-remove-default-timetz"),te=e("319-replace-default-timetz"),se=e("120-add-default-timestamp"),ne=e("220-remove-default-timestamp"),re=e("320-replace-default-timestamp"),de=e("121-add-default-timestamptz"),ce=e("221-remove-default-timestamptz"),oe=e("321-replace-default-timestamptz"),ie=e("122-add-default-uuid"),_e=e("222-remove-default-uuid"),ue=e("322-replace-default-uuid"),pe=e("123-add-default-varchar"),me=e("223-remove-default-varchar"),Ee=e("323-replace-default-varchar"),fe=e("124-add-default-enum"),Te=e("224-remove-default-enum"),be=e("324-replace-default-enum");var Ae,Ce,ge;a.parameters={...a.parameters,docs:{...(Ae=a.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("101-add-default-bigint")',...(ge=(Ce=a.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var Se,ve,Re;l.parameters={...l.parameters,docs:{...(Se=l.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("201-remove-default-bigint")',...(Re=(ve=l.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var Ie,Fe,Le;t.parameters={...t.parameters,docs:{...(Ie=t.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("301-replace-default-bigint")',...(Le=(Fe=t.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var he,ye,Be;s.parameters={...s.parameters,docs:{...(he=s.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("102-add-default-bit")',...(Be=(ye=s.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var Me,Ne,Oe;n.parameters={...n.parameters,docs:{...(Me=n.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("202-remove-default-bit")',...(Oe=(Ne=n.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var qe,He,Xe;r.parameters={...r.parameters,docs:{...(qe=r.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("302-replace-default-bit")',...(Xe=(He=r.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var De,Ue,je;d.parameters={...d.parameters,docs:{...(De=d.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("103-add-default-bit-varying")',...(je=(Ue=d.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var ze,xe,we;c.parameters={...c.parameters,docs:{...(ze=c.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("203-remove-default-bit-varying")',...(we=(xe=c.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Pe,Ye,ke;o.parameters={...o.parameters,docs:{...(Pe=o.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("303-replace-default-bit-varying")',...(ke=(Ye=o.parameters)==null?void 0:Ye.docs)==null?void 0:ke.source}}};var Ge,Je,Ke;i.parameters={...i.parameters,docs:{...(Ge=i.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("104-add-default-boolean")',...(Ke=(Je=i.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ve,We;_.parameters={..._.parameters,docs:{...(Qe=_.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("204-remove-default-boolean")',...(We=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ze,$e,ea;u.parameters={...u.parameters,docs:{...(Ze=u.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("304-replace-default-boolean")',...(ea=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:ea.source}}};var aa,la,ta;p.parameters={...p.parameters,docs:{...(aa=p.parameters)==null?void 0:aa.docs,source:{originalSource:'createCaseStory("105-add-default-bytea")',...(ta=(la=p.parameters)==null?void 0:la.docs)==null?void 0:ta.source}}};var sa,na,ra;m.parameters={...m.parameters,docs:{...(sa=m.parameters)==null?void 0:sa.docs,source:{originalSource:'createCaseStory("205-remove-default-bytea")',...(ra=(na=m.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var da,ca,oa;E.parameters={...E.parameters,docs:{...(da=E.parameters)==null?void 0:da.docs,source:{originalSource:'createCaseStory("305-replace-default-bytea")',...(oa=(ca=E.parameters)==null?void 0:ca.docs)==null?void 0:oa.source}}};var ia,_a,ua;f.parameters={...f.parameters,docs:{...(ia=f.parameters)==null?void 0:ia.docs,source:{originalSource:'createCaseStory("106-add-default-char")',...(ua=(_a=f.parameters)==null?void 0:_a.docs)==null?void 0:ua.source}}};var pa,ma,Ea;T.parameters={...T.parameters,docs:{...(pa=T.parameters)==null?void 0:pa.docs,source:{originalSource:'createCaseStory("206-remove-default-char")',...(Ea=(ma=T.parameters)==null?void 0:ma.docs)==null?void 0:Ea.source}}};var fa,Ta,ba;b.parameters={...b.parameters,docs:{...(fa=b.parameters)==null?void 0:fa.docs,source:{originalSource:'createCaseStory("306-replace-default-char")',...(ba=(Ta=b.parameters)==null?void 0:Ta.docs)==null?void 0:ba.source}}};var Aa,Ca,ga;A.parameters={...A.parameters,docs:{...(Aa=A.parameters)==null?void 0:Aa.docs,source:{originalSource:'createCaseStory("107-add-default-date")',...(ga=(Ca=A.parameters)==null?void 0:Ca.docs)==null?void 0:ga.source}}};var Sa,va,Ra;C.parameters={...C.parameters,docs:{...(Sa=C.parameters)==null?void 0:Sa.docs,source:{originalSource:'createCaseStory("207-remove-default-date")',...(Ra=(va=C.parameters)==null?void 0:va.docs)==null?void 0:Ra.source}}};var Ia,Fa,La;g.parameters={...g.parameters,docs:{...(Ia=g.parameters)==null?void 0:Ia.docs,source:{originalSource:'createCaseStory("307-replace-default-date")',...(La=(Fa=g.parameters)==null?void 0:Fa.docs)==null?void 0:La.source}}};var ha,ya,Ba;S.parameters={...S.parameters,docs:{...(ha=S.parameters)==null?void 0:ha.docs,source:{originalSource:'createCaseStory("108-add-default-double-precision")',...(Ba=(ya=S.parameters)==null?void 0:ya.docs)==null?void 0:Ba.source}}};var Ma,Na,Oa;v.parameters={...v.parameters,docs:{...(Ma=v.parameters)==null?void 0:Ma.docs,source:{originalSource:'createCaseStory("208-remove-default-double-precision")',...(Oa=(Na=v.parameters)==null?void 0:Na.docs)==null?void 0:Oa.source}}};var qa,Ha,Xa;R.parameters={...R.parameters,docs:{...(qa=R.parameters)==null?void 0:qa.docs,source:{originalSource:'createCaseStory("308-replace-default-double-precision")',...(Xa=(Ha=R.parameters)==null?void 0:Ha.docs)==null?void 0:Xa.source}}};var Da,Ua,ja;I.parameters={...I.parameters,docs:{...(Da=I.parameters)==null?void 0:Da.docs,source:{originalSource:'createCaseStory("109-add-default-integer")',...(ja=(Ua=I.parameters)==null?void 0:Ua.docs)==null?void 0:ja.source}}};var za,xa,wa;F.parameters={...F.parameters,docs:{...(za=F.parameters)==null?void 0:za.docs,source:{originalSource:'createCaseStory("209-remove-default-integer")',...(wa=(xa=F.parameters)==null?void 0:xa.docs)==null?void 0:wa.source}}};var Pa,Ya,ka;L.parameters={...L.parameters,docs:{...(Pa=L.parameters)==null?void 0:Pa.docs,source:{originalSource:'createCaseStory("309-replace-default-integer")',...(ka=(Ya=L.parameters)==null?void 0:Ya.docs)==null?void 0:ka.source}}};var Ga,Ja,Ka;h.parameters={...h.parameters,docs:{...(Ga=h.parameters)==null?void 0:Ga.docs,source:{originalSource:'createCaseStory("110-add-default-interval")',...(Ka=(Ja=h.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Va,Wa;y.parameters={...y.parameters,docs:{...(Qa=y.parameters)==null?void 0:Qa.docs,source:{originalSource:'createCaseStory("210-remove-default-interval")',...(Wa=(Va=y.parameters)==null?void 0:Va.docs)==null?void 0:Wa.source}}};var Za,$a,el;B.parameters={...B.parameters,docs:{...(Za=B.parameters)==null?void 0:Za.docs,source:{originalSource:'createCaseStory("310-replace-default-interval")',...(el=($a=B.parameters)==null?void 0:$a.docs)==null?void 0:el.source}}};var al,ll,tl;M.parameters={...M.parameters,docs:{...(al=M.parameters)==null?void 0:al.docs,source:{originalSource:'createCaseStory("111-add-default-json")',...(tl=(ll=M.parameters)==null?void 0:ll.docs)==null?void 0:tl.source}}};var sl,nl,rl;N.parameters={...N.parameters,docs:{...(sl=N.parameters)==null?void 0:sl.docs,source:{originalSource:'createCaseStory("211-remove-default-json")',...(rl=(nl=N.parameters)==null?void 0:nl.docs)==null?void 0:rl.source}}};var dl,cl,ol;O.parameters={...O.parameters,docs:{...(dl=O.parameters)==null?void 0:dl.docs,source:{originalSource:'createCaseStory("311-replace-default-json")',...(ol=(cl=O.parameters)==null?void 0:cl.docs)==null?void 0:ol.source}}};var il,_l,ul;q.parameters={...q.parameters,docs:{...(il=q.parameters)==null?void 0:il.docs,source:{originalSource:'createCaseStory("112-add-default-jsonb")',...(ul=(_l=q.parameters)==null?void 0:_l.docs)==null?void 0:ul.source}}};var pl,ml,El;H.parameters={...H.parameters,docs:{...(pl=H.parameters)==null?void 0:pl.docs,source:{originalSource:'createCaseStory("212-remove-default-jsonb")',...(El=(ml=H.parameters)==null?void 0:ml.docs)==null?void 0:El.source}}};var fl,Tl,bl;X.parameters={...X.parameters,docs:{...(fl=X.parameters)==null?void 0:fl.docs,source:{originalSource:'createCaseStory("312-replace-default-jsonb")',...(bl=(Tl=X.parameters)==null?void 0:Tl.docs)==null?void 0:bl.source}}};var Al,Cl,gl;D.parameters={...D.parameters,docs:{...(Al=D.parameters)==null?void 0:Al.docs,source:{originalSource:'createCaseStory("113-add-default-money")',...(gl=(Cl=D.parameters)==null?void 0:Cl.docs)==null?void 0:gl.source}}};var Sl,vl,Rl;U.parameters={...U.parameters,docs:{...(Sl=U.parameters)==null?void 0:Sl.docs,source:{originalSource:'createCaseStory("213-remove-default-money")',...(Rl=(vl=U.parameters)==null?void 0:vl.docs)==null?void 0:Rl.source}}};var Il,Fl,Ll;j.parameters={...j.parameters,docs:{...(Il=j.parameters)==null?void 0:Il.docs,source:{originalSource:'createCaseStory("313-replace-default-money")',...(Ll=(Fl=j.parameters)==null?void 0:Fl.docs)==null?void 0:Ll.source}}};var hl,yl,Bl;z.parameters={...z.parameters,docs:{...(hl=z.parameters)==null?void 0:hl.docs,source:{originalSource:'createCaseStory("114-add-default-numeric")',...(Bl=(yl=z.parameters)==null?void 0:yl.docs)==null?void 0:Bl.source}}};var Ml,Nl,Ol;x.parameters={...x.parameters,docs:{...(Ml=x.parameters)==null?void 0:Ml.docs,source:{originalSource:'createCaseStory("214-remove-default-numeric")',...(Ol=(Nl=x.parameters)==null?void 0:Nl.docs)==null?void 0:Ol.source}}};var ql,Hl,Xl;w.parameters={...w.parameters,docs:{...(ql=w.parameters)==null?void 0:ql.docs,source:{originalSource:'createCaseStory("314-replace-default-numeric")',...(Xl=(Hl=w.parameters)==null?void 0:Hl.docs)==null?void 0:Xl.source}}};var Dl,Ul,jl;P.parameters={...P.parameters,docs:{...(Dl=P.parameters)==null?void 0:Dl.docs,source:{originalSource:'createCaseStory("115-add-default-real")',...(jl=(Ul=P.parameters)==null?void 0:Ul.docs)==null?void 0:jl.source}}};var zl,xl,wl;Y.parameters={...Y.parameters,docs:{...(zl=Y.parameters)==null?void 0:zl.docs,source:{originalSource:'createCaseStory("215-remove-default-real")',...(wl=(xl=Y.parameters)==null?void 0:xl.docs)==null?void 0:wl.source}}};var Pl,Yl,kl;k.parameters={...k.parameters,docs:{...(Pl=k.parameters)==null?void 0:Pl.docs,source:{originalSource:'createCaseStory("315-replace-default-real")',...(kl=(Yl=k.parameters)==null?void 0:Yl.docs)==null?void 0:kl.source}}};var Gl,Jl,Kl;G.parameters={...G.parameters,docs:{...(Gl=G.parameters)==null?void 0:Gl.docs,source:{originalSource:'createCaseStory("116-add-default-smallint")',...(Kl=(Jl=G.parameters)==null?void 0:Jl.docs)==null?void 0:Kl.source}}};var Ql,Vl,Wl;J.parameters={...J.parameters,docs:{...(Ql=J.parameters)==null?void 0:Ql.docs,source:{originalSource:'createCaseStory("216-remove-default-smallint")',...(Wl=(Vl=J.parameters)==null?void 0:Vl.docs)==null?void 0:Wl.source}}};var Zl,$l,et;K.parameters={...K.parameters,docs:{...(Zl=K.parameters)==null?void 0:Zl.docs,source:{originalSource:'createCaseStory("316-replace-default-smallint")',...(et=($l=K.parameters)==null?void 0:$l.docs)==null?void 0:et.source}}};var at,lt,tt;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:'createCaseStory("117-add-default-text")',...(tt=(lt=Q.parameters)==null?void 0:lt.docs)==null?void 0:tt.source}}};var st,nt,rt;V.parameters={...V.parameters,docs:{...(st=V.parameters)==null?void 0:st.docs,source:{originalSource:'createCaseStory("217-remove-default-text")',...(rt=(nt=V.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var dt,ct,ot;W.parameters={...W.parameters,docs:{...(dt=W.parameters)==null?void 0:dt.docs,source:{originalSource:'createCaseStory("317-replace-default-text")',...(ot=(ct=W.parameters)==null?void 0:ct.docs)==null?void 0:ot.source}}};var it,_t,ut;Z.parameters={...Z.parameters,docs:{...(it=Z.parameters)==null?void 0:it.docs,source:{originalSource:'createCaseStory("118-add-default-time")',...(ut=(_t=Z.parameters)==null?void 0:_t.docs)==null?void 0:ut.source}}};var pt,mt,Et;$.parameters={...$.parameters,docs:{...(pt=$.parameters)==null?void 0:pt.docs,source:{originalSource:'createCaseStory("218-remove-default-time")',...(Et=(mt=$.parameters)==null?void 0:mt.docs)==null?void 0:Et.source}}};var ft,Tt,bt;ee.parameters={...ee.parameters,docs:{...(ft=ee.parameters)==null?void 0:ft.docs,source:{originalSource:'createCaseStory("318-replace-default-time")',...(bt=(Tt=ee.parameters)==null?void 0:Tt.docs)==null?void 0:bt.source}}};var At,Ct,gt;ae.parameters={...ae.parameters,docs:{...(At=ae.parameters)==null?void 0:At.docs,source:{originalSource:'createCaseStory("119-add-default-timetz")',...(gt=(Ct=ae.parameters)==null?void 0:Ct.docs)==null?void 0:gt.source}}};var St,vt,Rt;le.parameters={...le.parameters,docs:{...(St=le.parameters)==null?void 0:St.docs,source:{originalSource:'createCaseStory("219-remove-default-timetz")',...(Rt=(vt=le.parameters)==null?void 0:vt.docs)==null?void 0:Rt.source}}};var It,Ft,Lt;te.parameters={...te.parameters,docs:{...(It=te.parameters)==null?void 0:It.docs,source:{originalSource:'createCaseStory("319-replace-default-timetz")',...(Lt=(Ft=te.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var ht,yt,Bt;se.parameters={...se.parameters,docs:{...(ht=se.parameters)==null?void 0:ht.docs,source:{originalSource:'createCaseStory("120-add-default-timestamp")',...(Bt=(yt=se.parameters)==null?void 0:yt.docs)==null?void 0:Bt.source}}};var Mt,Nt,Ot;ne.parameters={...ne.parameters,docs:{...(Mt=ne.parameters)==null?void 0:Mt.docs,source:{originalSource:'createCaseStory("220-remove-default-timestamp")',...(Ot=(Nt=ne.parameters)==null?void 0:Nt.docs)==null?void 0:Ot.source}}};var qt,Ht,Xt;re.parameters={...re.parameters,docs:{...(qt=re.parameters)==null?void 0:qt.docs,source:{originalSource:'createCaseStory("320-replace-default-timestamp")',...(Xt=(Ht=re.parameters)==null?void 0:Ht.docs)==null?void 0:Xt.source}}};var Dt,Ut,jt;de.parameters={...de.parameters,docs:{...(Dt=de.parameters)==null?void 0:Dt.docs,source:{originalSource:'createCaseStory("121-add-default-timestamptz")',...(jt=(Ut=de.parameters)==null?void 0:Ut.docs)==null?void 0:jt.source}}};var zt,xt,wt;ce.parameters={...ce.parameters,docs:{...(zt=ce.parameters)==null?void 0:zt.docs,source:{originalSource:'createCaseStory("221-remove-default-timestamptz")',...(wt=(xt=ce.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Pt,Yt,kt;oe.parameters={...oe.parameters,docs:{...(Pt=oe.parameters)==null?void 0:Pt.docs,source:{originalSource:'createCaseStory("321-replace-default-timestamptz")',...(kt=(Yt=oe.parameters)==null?void 0:Yt.docs)==null?void 0:kt.source}}};var Gt,Jt,Kt;ie.parameters={...ie.parameters,docs:{...(Gt=ie.parameters)==null?void 0:Gt.docs,source:{originalSource:'createCaseStory("122-add-default-uuid")',...(Kt=(Jt=ie.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source}}};var Qt,Vt,Wt;_e.parameters={..._e.parameters,docs:{...(Qt=_e.parameters)==null?void 0:Qt.docs,source:{originalSource:'createCaseStory("222-remove-default-uuid")',...(Wt=(Vt=_e.parameters)==null?void 0:Vt.docs)==null?void 0:Wt.source}}};var Zt,$t,es;ue.parameters={...ue.parameters,docs:{...(Zt=ue.parameters)==null?void 0:Zt.docs,source:{originalSource:'createCaseStory("322-replace-default-uuid")',...(es=($t=ue.parameters)==null?void 0:$t.docs)==null?void 0:es.source}}};var as,ls,ts;pe.parameters={...pe.parameters,docs:{...(as=pe.parameters)==null?void 0:as.docs,source:{originalSource:'createCaseStory("123-add-default-varchar")',...(ts=(ls=pe.parameters)==null?void 0:ls.docs)==null?void 0:ts.source}}};var ss,ns,rs;me.parameters={...me.parameters,docs:{...(ss=me.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("223-remove-default-varchar")',...(rs=(ns=me.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var ds,cs,os;Ee.parameters={...Ee.parameters,docs:{...(ds=Ee.parameters)==null?void 0:ds.docs,source:{originalSource:'createCaseStory("323-replace-default-varchar")',...(os=(cs=Ee.parameters)==null?void 0:cs.docs)==null?void 0:os.source}}};var is,_s,us;fe.parameters={...fe.parameters,docs:{...(is=fe.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("124-add-default-enum")',...(us=(_s=fe.parameters)==null?void 0:_s.docs)==null?void 0:us.source}}};var ps,ms,Es;Te.parameters={...Te.parameters,docs:{...(ps=Te.parameters)==null?void 0:ps.docs,source:{originalSource:'createCaseStory("224-remove-default-enum")',...(Es=(ms=Te.parameters)==null?void 0:ms.docs)==null?void 0:Es.source}}};var fs,Ts,bs;be.parameters={...be.parameters,docs:{...(fs=be.parameters)==null?void 0:fs.docs,source:{originalSource:'createCaseStory("324-replace-default-enum")',...(bs=(Ts=be.parameters)==null?void 0:Ts.docs)==null?void 0:bs.source}}};const gd=["Case_101_add_default_bigint","Case_201_remove_default_bigint","Case_301_replace_default_bigint","Case_102_add_default_bit","Case_202_remove_default_bit","Case_302_replace_default_bit","Case_103_add_default_bit_varying","Case_203_remove_default_bit_varying","Case_303_replace_default_bit_varying","Case_104_add_default_boolean","Case_204_remove_default_boolean","Case_304_replace_default_boolean","Case_105_add_default_bytea","Case_205_remove_default_bytea","Case_305_replace_default_bytea","Case_106_add_default_char","Case_206_remove_default_char","Case_306_replace_default_char","Case_107_add_default_date","Case_207_remove_default_date","Case_307_replace_default_date","Case_108_add_default_double_precision","Case_208_remove_default_double_precision","Case_308_replace_default_double_precision","Case_109_add_default_integer","Case_209_remove_default_integer","Case_309_replace_default_integer","Case_110_add_default_interval","Case_210_remove_default_interval","Case_310_replace_default_interval","Case_111_add_default_json","Case_211_remove_default_json","Case_311_replace_default_json","Case_112_add_default_jsonb","Case_212_remove_default_jsonb","Case_312_replace_default_jsonb","Case_113_add_default_money","Case_213_remove_default_money","Case_313_replace_default_money","Case_114_add_default_numeric","Case_214_remove_default_numeric","Case_314_replace_default_numeric","Case_115_add_default_real","Case_215_remove_default_real","Case_315_replace_default_real","Case_116_add_default_smallint","Case_216_remove_default_smallint","Case_316_replace_default_smallint","Case_117_add_default_text","Case_217_remove_default_text","Case_317_replace_default_text","Case_118_add_default_time","Case_218_remove_default_time","Case_318_replace_default_time","Case_119_add_default_timetz","Case_219_remove_default_timetz","Case_319_replace_default_timetz","Case_120_add_default_timestamp","Case_220_remove_default_timestamp","Case_320_replace_default_timestamp","Case_121_add_default_timestamptz","Case_221_remove_default_timestamptz","Case_321_replace_default_timestamptz","Case_122_add_default_uuid","Case_222_remove_default_uuid","Case_322_replace_default_uuid","Case_123_add_default_varchar","Case_223_remove_default_varchar","Case_323_replace_default_varchar","Case_124_add_default_enum","Case_224_remove_default_enum","Case_324_replace_default_enum"];export{a as Case_101_add_default_bigint,s as Case_102_add_default_bit,d as Case_103_add_default_bit_varying,i as Case_104_add_default_boolean,p as Case_105_add_default_bytea,f as Case_106_add_default_char,A as Case_107_add_default_date,S as Case_108_add_default_double_precision,I as Case_109_add_default_integer,h as Case_110_add_default_interval,M as Case_111_add_default_json,q as Case_112_add_default_jsonb,D as Case_113_add_default_money,z as Case_114_add_default_numeric,P as Case_115_add_default_real,G as Case_116_add_default_smallint,Q as Case_117_add_default_text,Z as Case_118_add_default_time,ae as Case_119_add_default_timetz,se as Case_120_add_default_timestamp,de as Case_121_add_default_timestamptz,ie as Case_122_add_default_uuid,pe as Case_123_add_default_varchar,fe as Case_124_add_default_enum,l as Case_201_remove_default_bigint,n as Case_202_remove_default_bit,c as Case_203_remove_default_bit_varying,_ as Case_204_remove_default_boolean,m as Case_205_remove_default_bytea,T as Case_206_remove_default_char,C as Case_207_remove_default_date,v as Case_208_remove_default_double_precision,F as Case_209_remove_default_integer,y as Case_210_remove_default_interval,N as Case_211_remove_default_json,H as Case_212_remove_default_jsonb,U as Case_213_remove_default_money,x as Case_214_remove_default_numeric,Y as Case_215_remove_default_real,J as Case_216_remove_default_smallint,V as Case_217_remove_default_text,$ as Case_218_remove_default_time,le as Case_219_remove_default_timetz,ne as Case_220_remove_default_timestamp,ce as Case_221_remove_default_timestamptz,_e as Case_222_remove_default_uuid,me as Case_223_remove_default_varchar,Te as Case_224_remove_default_enum,t as Case_301_replace_default_bigint,r as Case_302_replace_default_bit,o as Case_303_replace_default_bit_varying,u as Case_304_replace_default_boolean,E as Case_305_replace_default_bytea,b as Case_306_replace_default_char,g as Case_307_replace_default_date,R as Case_308_replace_default_double_precision,L as Case_309_replace_default_integer,B as Case_310_replace_default_interval,O as Case_311_replace_default_json,X as Case_312_replace_default_jsonb,j as Case_313_replace_default_money,w as Case_314_replace_default_numeric,k as Case_315_replace_default_real,K as Case_316_replace_default_smallint,W as Case_317_replace_default_text,ee as Case_318_replace_default_time,te as Case_319_replace_default_timetz,re as Case_320_replace_default_timestamp,oe as Case_321_replace_default_timestamptz,ue as Case_322_replace_default_uuid,Ee as Case_323_replace_default_varchar,be as Case_324_replace_default_enum,gd as __namedExportsOrder,Cd as default};
