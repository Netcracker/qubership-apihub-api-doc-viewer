import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as ee,i as te,n as ne,r as re,t as ie}from"./ddlapi-diffs-utils-DYfV48Zp.js";var ae;function oe(){return(oe=e((()=>{ae=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var se;function ce(){return(ce=e((()=>{se=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var le;function ue(){return(ue=e((()=>{le=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var de;function fe(){return(fe=e((()=>{de=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`})))()}var pe;function me(){return(me=e((()=>{pe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var he;function ge(){return(ge=e((()=>{he=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var ye;function be(){return(be=e((()=>{ye=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c2);
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var t;function n(){return(n=e((()=>{t=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`})))()}var r;function i(){return(i=e((()=>{r=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var a;function o(){return(o=e((()=>{a=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`})))()}var s;function c(){return(c=e((()=>{s=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`})))()}var l;function u(){return(u=e((()=>{l=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var d;function f(){return(f=e((()=>{d=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var p;function m(){return(m=e((()=>{p=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var h;function g(){return(g=e((()=>{h=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`})))()}var _;function v(){return(v=e((()=>{_=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var y;function b(){return(b=e((()=>{y=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var x;function S(){return(S=e((()=>{x=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`})))()}var C;function w(){return(w=e((()=>{C=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var T;function ke(){return(ke=e((()=>{T=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE UNIQUE INDEX idx_t_code_unique ON public.t (code);
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE INDEX idx_t_c2 ON public.t (c2);
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
CREATE UNIQUE INDEX idx_t_c2_unique ON public.t (c2);
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2, c3);
`})))()}var E;function Xe(){return(Xe=e((()=>{E=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_replaced_column ON public.t (c1, c3);
`})))()}var $e;function et(){return(et=e((()=>{$e=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX idx_t_c1 ON public.t (c1);
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var rt;function it(){return(it=e((()=>{rt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var at;function ot(){return(ot=e((()=>{at=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var st;function ct(){return(ct=e((()=>{st=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer,
  c3 integer
);

CREATE INDEX idx_t_c1_c2 ON public.t (c1, c2);
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX idx_t_c1 ON public.t (c1);
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1, c2);
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer,
  c2 integer
);

CREATE INDEX ON public.t (c2);
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE UNIQUE INDEX ON public.t (c1);
`})))()}var xt;function St(){return(St=e((()=>{xt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  c1 integer
);

CREATE INDEX ON public.t (c1);
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'index description text';
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE public.t (
  id integer,
  code integer
);

CREATE INDEX idx_t_code ON public.t (code);

COMMENT ON INDEX public.idx_t_code IS 'CHANGED index description text';
`})))()}var kt,At,jt,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Mt;function Nt(){return(Nt=e((()=>{oe(),ce(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),ee(),kt=ie(Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/before.sql":ae,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/before.sql":se,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/before.sql":le,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/before.sql":de,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/before.sql":pe,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/before.sql":he,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/before.sql":_e,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/before.sql":ye,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/before.sql":xe,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/before.sql":Ce,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/before.sql":Te,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/before.sql":De,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/before.sql":t,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/before.sql":r,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/before.sql":a,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/before.sql":s,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/before.sql":l,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/before.sql":d,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/before.sql":p,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/before.sql":h,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/before.sql":_,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/before.sql":y,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/before.sql":x,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/before.sql":C,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/before.sql":T,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/before.sql":Ae}),Object.assign({"../../../../samples/ddlapi-diffs/index-changes/01-add-index-when-none-present/after.sql":Me,"../../../../samples/ddlapi-diffs/index-changes/02-add-index-unique-when-none-present/after.sql":Pe,"../../../../samples/ddlapi-diffs/index-changes/03-remove-index-when-none-present/after.sql":Ie,"../../../../samples/ddlapi-diffs/index-changes/04-remove-index-unique-when-none-present/after.sql":Re,"../../../../samples/ddlapi-diffs/index-changes/05-add-one-more-index-without-unique/after.sql":Be,"../../../../samples/ddlapi-diffs/index-changes/06-add-one-more-index-with-unique/after.sql":He,"../../../../samples/ddlapi-diffs/index-changes/07-remove-one-more-index-without-unique/after.sql":We,"../../../../samples/ddlapi-diffs/index-changes/08-remove-one-more-index-with-unique/after.sql":Ke,"../../../../samples/ddlapi-diffs/index-changes/09-append-new-column-in-index/after.sql":Je,"../../../../samples/ddlapi-diffs/index-changes/10-remove-new-column-in-index/after.sql":E,"../../../../samples/ddlapi-diffs/index-changes/11-replaced-column-in-index/after.sql":Ze,"../../../../samples/ddlapi-diffs/index-changes/12-index-became-unique/after.sql":$e,"../../../../samples/ddlapi-diffs/index-changes/13-index-lost-unique/after.sql":tt,"../../../../samples/ddlapi-diffs/index-changes/14-remove-one-more-index-without-unique/after.sql":rt,"../../../../samples/ddlapi-diffs/index-changes/15-remove-one-more-index-with-unique/after.sql":at,"../../../../samples/ddlapi-diffs/index-changes/16-remove-new-column-in-index/after.sql":st,"../../../../samples/ddlapi-diffs/index-changes/17-unnamed-index-became-titled/after.sql":lt,"../../../../samples/ddlapi-diffs/index-changes/18-titled-index-became-unnamed/after.sql":dt,"../../../../samples/ddlapi-diffs/index-changes/19-unnamed-index-append-column/after.sql":pt,"../../../../samples/ddlapi-diffs/index-changes/20-unnamed-index-pop-column/after.sql":ht,"../../../../samples/ddlapi-diffs/index-changes/21-unnamed-index-replaced-column/after.sql":_t,"../../../../samples/ddlapi-diffs/index-changes/22-unnamed-index-became-unique/after.sql":yt,"../../../../samples/ddlapi-diffs/index-changes/23-unnamed-index-lost-unique/after.sql":xt,"../../../../samples/ddlapi-diffs/index-changes/24-add-index-description/after.sql":Ct,"../../../../samples/ddlapi-diffs/index-changes/25-remove-index-description/after.sql":Tt,"../../../../samples/ddlapi-diffs/index-changes/26-replace-index-description/after.sql":Dt})),At=re(kt),jt={...te,title:`DDL API Diffs Suite/Index Changes Samples`},D=ne(At),O=D(`01-add-index-when-none-present`),k=D(`02-add-index-unique-when-none-present`),A=D(`03-remove-index-when-none-present`),j=D(`04-remove-index-unique-when-none-present`),M=D(`05-add-one-more-index-without-unique`),N=D(`06-add-one-more-index-with-unique`),P=D(`07-remove-one-more-index-without-unique`),F=D(`08-remove-one-more-index-with-unique`),I=D(`09-append-new-column-in-index`),L=D(`10-remove-new-column-in-index`),R=D(`11-replaced-column-in-index`),z=D(`12-index-became-unique`),B=D(`13-index-lost-unique`),V=D(`14-remove-one-more-index-without-unique`),H=D(`15-remove-one-more-index-with-unique`),U=D(`16-remove-new-column-in-index`),W=D(`17-unnamed-index-became-titled`),G=D(`18-titled-index-became-unnamed`),K=D(`19-unnamed-index-append-column`),q=D(`20-unnamed-index-pop-column`),J=D(`21-unnamed-index-replaced-column`),Y=D(`22-unnamed-index-became-unique`),X=D(`23-unnamed-index-lost-unique`),Z=D(`24-add-index-description`),Q=D(`25-remove-index-description`),$=D(`26-replace-index-description`),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("01-add-index-when-none-present")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("02-add-index-unique-when-none-present")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("03-remove-index-when-none-present")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("04-remove-index-unique-when-none-present")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("05-add-one-more-index-without-unique")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("06-add-one-more-index-with-unique")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("07-remove-one-more-index-without-unique")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("08-remove-one-more-index-with-unique")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("09-append-new-column-in-index")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("10-remove-new-column-in-index")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("11-replaced-column-in-index")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("12-index-became-unique")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("13-index-lost-unique")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("14-remove-one-more-index-without-unique")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("15-remove-one-more-index-with-unique")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("16-remove-new-column-in-index")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("17-unnamed-index-became-titled")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("18-titled-index-became-unnamed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("19-unnamed-index-append-column")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("20-unnamed-index-pop-column")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("21-unnamed-index-replaced-column")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("22-unnamed-index-became-unique")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("23-unnamed-index-lost-unique")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("24-add-index-description")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("25-remove-index-description")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("26-replace-index-description")`,...$.parameters?.docs?.source}}},Mt=`Case_01_add_index_when_none_present.Case_02_add_index_unique_when_none_present.Case_03_remove_index_when_none_present.Case_04_remove_index_unique_when_none_present.Case_05_add_one_more_index_without_unique.Case_06_add_one_more_index_with_unique.Case_07_remove_one_more_index_without_unique.Case_08_remove_one_more_index_with_unique.Case_09_append_new_column_in_index.Case_10_remove_new_column_in_index.Case_11_replaced_column_in_index.Case_12_index_became_unique.Case_13_index_lost_unique.Case_14_remove_one_more_index_without_unique.Case_15_remove_one_more_index_with_unique.Case_16_remove_new_column_in_index.Case_17_unnamed_index_became_titled.Case_18_titled_index_became_unnamed.Case_19_unnamed_index_append_column.Case_20_unnamed_index_pop_column.Case_21_unnamed_index_replaced_column.Case_22_unnamed_index_became_unique.Case_23_unnamed_index_lost_unique.Case_24_add_index_description.Case_25_remove_index_description.Case_26_replace_index_description`.split(`.`)})))()}Nt();export{O as Case_01_add_index_when_none_present,k as Case_02_add_index_unique_when_none_present,A as Case_03_remove_index_when_none_present,j as Case_04_remove_index_unique_when_none_present,M as Case_05_add_one_more_index_without_unique,N as Case_06_add_one_more_index_with_unique,P as Case_07_remove_one_more_index_without_unique,F as Case_08_remove_one_more_index_with_unique,I as Case_09_append_new_column_in_index,L as Case_10_remove_new_column_in_index,R as Case_11_replaced_column_in_index,z as Case_12_index_became_unique,B as Case_13_index_lost_unique,V as Case_14_remove_one_more_index_without_unique,H as Case_15_remove_one_more_index_with_unique,U as Case_16_remove_new_column_in_index,W as Case_17_unnamed_index_became_titled,G as Case_18_titled_index_became_unnamed,K as Case_19_unnamed_index_append_column,q as Case_20_unnamed_index_pop_column,J as Case_21_unnamed_index_replaced_column,Y as Case_22_unnamed_index_became_unique,X as Case_23_unnamed_index_lost_unique,Z as Case_24_add_index_description,Q as Case_25_remove_index_description,$ as Case_26_replace_index_description,Mt as __namedExportsOrder,jt as default};