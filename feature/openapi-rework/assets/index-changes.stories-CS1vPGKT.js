import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{i as ne,n as re,r as ie,t as ae}from"./ddlapi-diffs-utils-C-E7qiKz.js";var oe;function se(){return(se=e((()=>{oe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var ce;function le(){return(le=e((()=>{ce=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var ue;function de(){return(de=e((()=>{ue=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`})))()}var me;function he(){return(he=e((()=>{me=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var be;function xe(){return(xe=e((()=>{be=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`})))()}var we;function Te(){return(Te=e((()=>{we=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`})))()}var t;function n(){return(n=e((()=>{t=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c2);
`})))()}var r;function i(){return(i=e((()=>{r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var a;function o(){return(o=e((()=>{a=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`})))()}var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`})))()}var T;function E(){return(E=e((()=>{T=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`})))()}var D;function O(){return(O=e((()=>{D=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`})))()}var He;function k(){return(k=e((()=>{He=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c3);
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var $e;function et(){return(et=e((()=>{$e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var rt;function it(){return(it=e((()=>{rt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`})))()}var at;function ot(){return(ot=e((()=>{at=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`})))()}var st;function ct(){return(ct=e((()=>{st=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'CHANGED index description text';
`})))()}var ht,gt,_t,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,vt;function yt(){return(yt=e((()=>{se(),le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),De(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),k(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),ne(),ee(),ht=ae(Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":oe,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":ce,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":ue,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":fe,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":me,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":ge,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":ve,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":be,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":Se,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":we,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":t,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":r,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/before.sql":a,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/before.sql":s,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/before.sql":l,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/before.sql":d,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/before.sql":p,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/before.sql":h,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/before.sql":_,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/before.sql":y,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/before.sql":x,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/before.sql":C,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/before.sql":T}),Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":D,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":Ee,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Oe,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":Ae,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":Me,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":Pe,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":Ie,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":Re,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":Be,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":He,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Ue,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":Ge,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/after.sql":qe,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/after.sql":Ye,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/after.sql":Ze,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/after.sql":$e,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/after.sql":tt,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/after.sql":rt,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/after.sql":at,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/after.sql":st,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/after.sql":lt,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/after.sql":dt,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/after.sql":pt})),gt=te(ht),_t={...ie,title:`DDL API Diffs Suite/Index Changes Samples`},A=re(gt),j=A(`01-add-index-when-none-present`),M=A(`02-add-index-unique-when-none-present`),N=A(`03-remove-index-when-none-present`),P=A(`04-remove-index-unique-when-none-present`),F=A(`05-add-one-more-index-without-unique`),I=A(`06-add-one-more-index-with-unique`),L=A(`07-remove-one-more-index-without-unique`),R=A(`08-remove-one-more-index-with-unique`),z=A(`09-append-new-column-in-index`),B=A(`10-remove-new-column-in-index`),V=A(`11-replaced-column-in-index`),H=A(`12-index-became-unique`),U=A(`13-index-lost-unique`),W=A(`17-unnamed-index-became-titled`),G=A(`18-titled-index-became-unnamed`),K=A(`19-unnamed-index-append-column`),q=A(`20-unnamed-index-pop-column`),J=A(`21-unnamed-index-replaced-column`),Y=A(`22-unnamed-index-became-unique`),X=A(`23-unnamed-index-lost-unique`),Z=A(`24-add-index-description`),Q=A(`25-remove-index-description`),$=A(`26-replace-index-description`),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("01-add-index-when-none-present")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("02-add-index-unique-when-none-present")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("03-remove-index-when-none-present")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("04-remove-index-unique-when-none-present")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("05-add-one-more-index-without-unique")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("06-add-one-more-index-with-unique")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("07-remove-one-more-index-without-unique")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("08-remove-one-more-index-with-unique")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("09-append-new-column-in-index")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("10-remove-new-column-in-index")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("11-replaced-column-in-index")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("12-index-became-unique")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("13-index-lost-unique")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("17-unnamed-index-became-titled")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("18-titled-index-became-unnamed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("19-unnamed-index-append-column")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("20-unnamed-index-pop-column")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("21-unnamed-index-replaced-column")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("22-unnamed-index-became-unique")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("23-unnamed-index-lost-unique")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("24-add-index-description")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("25-remove-index-description")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("26-replace-index-description")`,...$.parameters?.docs?.source}}},vt=[`Case_01_add_index_when_none_present`,`Case_02_add_index_unique_when_none_present`,`Case_03_remove_index_when_none_present`,`Case_04_remove_index_unique_when_none_present`,`Case_05_add_one_more_index_without_unique`,`Case_06_add_one_more_index_with_unique`,`Case_07_remove_one_more_index_without_unique`,`Case_08_remove_one_more_index_with_unique`,`Case_09_append_new_column_in_index`,`Case_10_remove_new_column_in_index`,`Case_11_replaced_column_in_index`,`Case_12_index_became_unique`,`Case_13_index_lost_unique`,`Case_17_unnamed_index_became_titled`,`Case_18_titled_index_became_unnamed`,`Case_19_unnamed_index_append_column`,`Case_20_unnamed_index_pop_column`,`Case_21_unnamed_index_replaced_column`,`Case_22_unnamed_index_became_unique`,`Case_23_unnamed_index_lost_unique`,`Case_24_add_index_description`,`Case_25_remove_index_description`,`Case_26_replace_index_description`]})))()}yt();export{j as Case_01_add_index_when_none_present,M as Case_02_add_index_unique_when_none_present,N as Case_03_remove_index_when_none_present,P as Case_04_remove_index_unique_when_none_present,F as Case_05_add_one_more_index_without_unique,I as Case_06_add_one_more_index_with_unique,L as Case_07_remove_one_more_index_without_unique,R as Case_08_remove_one_more_index_with_unique,z as Case_09_append_new_column_in_index,B as Case_10_remove_new_column_in_index,V as Case_11_replaced_column_in_index,H as Case_12_index_became_unique,U as Case_13_index_lost_unique,W as Case_17_unnamed_index_became_titled,G as Case_18_titled_index_became_unnamed,K as Case_19_unnamed_index_append_column,q as Case_20_unnamed_index_pop_column,J as Case_21_unnamed_index_replaced_column,Y as Case_22_unnamed_index_became_unique,X as Case_23_unnamed_index_lost_unique,Z as Case_24_add_index_description,Q as Case_25_remove_index_description,$ as Case_26_replace_index_description,vt as __namedExportsOrder,_t as default};