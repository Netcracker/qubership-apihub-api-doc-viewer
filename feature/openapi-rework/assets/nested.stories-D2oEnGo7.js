import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{a,o,r as s,s as c,t as l}from"./property-samples-common-DCm4mFta.js";var u;function d(){return(d=e((()=>{u=`id: 1
customer:
  name: Ann
  email: a@x
  phone: "123"
  address:
    city: Rome
    zip: "001"
    country: IT
status: new
meta:
  source: web
  tags:
    - a
    - b
`})))()}var f;function p(){return(p=e((()=>{f=`a:
  a1: 1
  b:
    b1: 2
    c:
      c1: 3
      d: before
      c2: 4
    b2: 5
  a2: 6
z: last
`})))()}var m;function h(){return(h=e((()=>{m=`left:
  keep: 1
  inner:
    keep: 2
    value: l1
middle:
  keep: 3
  inner:
    keep: 4
    value: same
right:
  keep: 5
  inner:
    keep: 6
    value: r1
`})))()}var g;function _(){return(_=e((()=>{g=`owner: team-a
schema:
  type: object
  properties:
    p1:
      type: string
    p2:
      type: integer
      description: Before
    p3:
      type: boolean
    p4:
      type: string
version: null
`})))()}var v;function y(){return(y=e((()=>{v=`id: 1
customer:
  name: Ann
  email: b@x
  phone: "123"
  address:
    city: Rome
    zip: "002"
    country: IT
status: new
meta:
  source: web
  tags:
    - a
    - b
`})))()}var b;function x(){return(x=e((()=>{b=`a:
  a1: 1
  b:
    b1: 2
    c:
      c1: 3
      d: after
      c2: 4
    b2: 5
  a2: 6
z: last
`})))()}var S;function C(){return(C=e((()=>{S=`left:
  keep: 1
  inner:
    keep: 2
    value: l2
middle:
  keep: 3
  inner:
    keep: 4
    value: same
right:
  keep: 5
  inner:
    keep: 6
    value: r2
`})))()}var w;function T(){return(T=e((()=>{w=`owner: team-a
schema:
  type: object
  properties:
    p1:
      type: string
    p2:
      type: integer
      description: After
    p3:
      type: boolean
    p4:
      type: string
version: "2"
`})))()}var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),o(),s(),r(),t(),E=!0,D=n(i(Object.assign({"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.1-third-level-changes-with-unchanged-siblings/before.yaml":u,"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.2-fourth-level-change/before.yaml":f,"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.3-changes-in-two-branches-unchanged-branch-between/before.yaml":m,"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.4-json-schema-value-changed/before.yaml":g}),Object.assign({"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.1-third-level-changes-with-unchanged-siblings/after.yaml":v,"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.2-fourth-level-change/after.yaml":b,"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.3-changes-in-two-branches-unchanged-branch-between/after.yaml":S,"../../../../samples/jso-diffs/hiding-unchanged-nodes/nested/3.4-json-schema-value-changed/after.yaml":w}))),O={title:`JSO Diffs Suite (Hiding Unchanged Nodes)/Nested`,component:l,argTypes:c},k=a(l,D,E),A=k(`3.1-third-level-changes-with-unchanged-siblings`),j=k(`3.2-fourth-level-change`),M=k(`3.3-changes-in-two-branches-unchanged-branch-between`),N=k(`3.4-json-schema-value-changed`),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("3.1-third-level-changes-with-unchanged-siblings")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("3.2-fourth-level-change")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("3.3-changes-in-two-branches-unchanged-branch-between")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("3.4-json-schema-value-changed")`,...N.parameters?.docs?.source}}},P=[`Case_3_1_third_level_changes_with_unchanged_siblings`,`Case_3_2_fourth_level_change`,`Case_3_3_changes_in_two_branches_unchanged_branch_between`,`Case_3_4_json_schema_value_changed`]})))()}F();export{A as Case_3_1_third_level_changes_with_unchanged_siblings,j as Case_3_2_fourth_level_change,M as Case_3_3_changes_in_two_branches_unchanged_branch_between,N as Case_3_4_json_schema_value_changed,P as __namedExportsOrder,O as default};