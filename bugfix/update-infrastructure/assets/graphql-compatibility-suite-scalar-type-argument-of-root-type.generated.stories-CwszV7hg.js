import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-C2motuXe.js";import{a as n,i as r,n as i,r as a,t as o}from"./compatibility-suite-utils-Bi5ZMGxU.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{t(),a(),n(),s={id:`graphql-compatibility-suite-scalar-type-argument-of-root-type`,title:`GraphQL Compatibility Suite/scalar-type-argument-of-root-type`,render:o},c=`scalar-type-argument-of-root-type`,l={name:`add-default-value-of-argument`,args:i(r,c,`add-default-value-of-argument`)},u={name:`add-default-value-of-required-argument`,args:i(r,c,`add-default-value-of-required-argument`)},d={name:`add-description-for-argument`,args:i(r,c,`add-description-for-argument`)},f={name:`add-description-for-enum-type`,args:i(r,c,`add-description-for-enum-type`)},p={name:`add-description-for-enum-value`,args:i(r,c,`add-description-for-enum-value`)},m={name:`add-enum-value-in-enum-argument`,args:i(r,c,`add-enum-value-in-enum-argument`)},h={name:`add-optional-argument`,args:i(r,c,`add-optional-argument`)},g={name:`add-second-argument`,args:i(r,c,`add-second-argument`)},_={name:`change-default-value-of-argument`,args:i(r,c,`change-default-value-of-argument`)},v={name:`change-default-value-of-required-argument`,args:i(r,c,`change-default-value-of-required-argument`)},y={name:`change-description-for-enum-type`,args:i(r,c,`change-description-for-enum-type`)},b={name:`change-description-for-enum-value`,args:i(r,c,`change-description-for-enum-value`)},x={name:`change-type-of-argument`,args:i(r,c,`change-type-of-argument`)},S={name:`delete-description-for-enum-type`,args:i(r,c,`delete-description-for-enum-type`)},C={name:`delete-description-for-enum-value`,args:i(r,c,`delete-description-for-enum-value`)},w={name:`delete-description-of-argument`,args:i(r,c,`delete-description-of-argument`)},T={name:`mark-mandatory-argument-as-optional`,args:i(r,c,`mark-mandatory-argument-as-optional`)},E={name:`mark-optional-argument-as-mandatory`,args:i(r,c,`mark-optional-argument-as-mandatory`)},D={name:`remove-argument`,args:i(r,c,`remove-argument`)},O={name:`remove-default-value-of-argument`,args:i(r,c,`remove-default-value-of-argument`)},k={name:`remove-default-value-of-required-argument`,args:i(r,c,`remove-default-value-of-required-argument`)},A={name:`remove-enum-value-in-enum-argument`,args:i(r,c,`remove-enum-value-in-enum-argument`)},j={name:`remove-one-argument`,args:i(r,c,`remove-one-argument`)},M={name:`update-description-of-argument`,args:i(r,c,`update-description-of-argument`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-default-value-of-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-default-value-of-argument')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-default-value-of-required-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-default-value-of-required-argument')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-argument')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-enum-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-enum-type')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-enum-value',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-enum-value')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'add-enum-value-in-enum-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-in-enum-argument')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'add-optional-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-optional-argument')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'add-second-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-second-argument')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'change-default-value-of-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-default-value-of-argument')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'change-default-value-of-required-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-default-value-of-required-argument')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'change-description-for-enum-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-enum-type')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'change-description-for-enum-value',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-description-for-enum-value')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'change-type-of-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-type-of-argument')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-enum-type')
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-for-enum-value',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-enum-value')
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-of-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-of-argument')
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'mark-mandatory-argument-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-argument-as-optional')
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'mark-optional-argument-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-argument-as-mandatory')
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'remove-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-argument')
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'remove-default-value-of-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-default-value-of-argument')
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'remove-default-value-of-required-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-default-value-of-required-argument')
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'remove-enum-value-in-enum-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-in-enum-argument')
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'remove-one-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-one-argument')
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'update-description-of-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-of-argument')
}`,...M.parameters?.docs?.source}}},N=[`AddDefaultValueOfArgument`,`AddDefaultValueOfRequiredArgument`,`AddDescriptionForArgument`,`AddDescriptionForEnumType`,`AddDescriptionForEnumValue`,`AddEnumValueInEnumArgument`,`AddOptionalArgument`,`AddSecondArgument`,`ChangeDefaultValueOfArgument`,`ChangeDefaultValueOfRequiredArgument`,`ChangeDescriptionForEnumType`,`ChangeDescriptionForEnumValue`,`ChangeTypeOfArgument`,`DeleteDescriptionForEnumType`,`DeleteDescriptionForEnumValue`,`DeleteDescriptionOfArgument`,`MarkMandatoryArgumentAsOptional`,`MarkOptionalArgumentAsMandatory`,`RemoveArgument`,`RemoveDefaultValueOfArgument`,`RemoveDefaultValueOfRequiredArgument`,`RemoveEnumValueInEnumArgument`,`RemoveOneArgument`,`UpdateDescriptionOfArgument`]})))()}P();export{l as AddDefaultValueOfArgument,u as AddDefaultValueOfRequiredArgument,d as AddDescriptionForArgument,f as AddDescriptionForEnumType,p as AddDescriptionForEnumValue,m as AddEnumValueInEnumArgument,h as AddOptionalArgument,g as AddSecondArgument,_ as ChangeDefaultValueOfArgument,v as ChangeDefaultValueOfRequiredArgument,y as ChangeDescriptionForEnumType,b as ChangeDescriptionForEnumValue,x as ChangeTypeOfArgument,S as DeleteDescriptionForEnumType,C as DeleteDescriptionForEnumValue,w as DeleteDescriptionOfArgument,T as MarkMandatoryArgumentAsOptional,E as MarkOptionalArgumentAsMandatory,D as RemoveArgument,O as RemoveDefaultValueOfArgument,k as RemoveDefaultValueOfRequiredArgument,A as RemoveEnumValueInEnumArgument,j as RemoveOneArgument,M as UpdateDescriptionOfArgument,N as __namedExportsOrder,s as default};