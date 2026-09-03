import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-MuAs1xMh.js";import{a as n,i as r,n as i,r as a,t as o}from"./compatibility-suite-utils-BtO9Fk4R.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),a(),n(),s={id:`graphql-compatibility-suite-input-type-argument-of-root-type`,title:`GraphQL Compatibility Suite/input-type-argument-of-root-type`,render:o},c=`input-type-argument-of-root-type`,l={name:`add-description-for-field-of-input-type-argument`,args:i(r,c,`add-description-for-field-of-input-type-argument`)},u={name:`add-enum-value-of-field-in-input-type-argument`,args:i(r,c,`add-enum-value-of-field-in-input-type-argument`)},d={name:`add-input-type-argument`,args:i(r,c,`add-input-type-argument`)},f={name:`add-new-field-in-input-type-argument`,args:i(r,c,`add-new-field-in-input-type-argument`)},p={name:`change-type-of-field-in-input-type-argument`,args:i(r,c,`change-type-of-field-in-input-type-argument`)},m={name:`delete-description-for-field-of-input-type-argument`,args:i(r,c,`delete-description-for-field-of-input-type-argument`)},h={name:`mark-mandatory-field-of-input-type-argument-as-optional`,args:i(r,c,`mark-mandatory-field-of-input-type-argument-as-optional`)},g={name:`mark-optional-field-of-input-type-argument-as-mandatory`,args:i(r,c,`mark-optional-field-of-input-type-argument-as-mandatory`)},_={name:`remove-enum-value-of-field-in-input-type-argument`,args:i(r,c,`remove-enum-value-of-field-in-input-type-argument`)},v={name:`remove-field-from-input-type-argument`,args:i(r,c,`remove-field-from-input-type-argument`)},y={name:`remove-input-type-argument`,args:i(r,c,`remove-input-type-argument`)},b={name:`update-description-for-field-of-input-type-argument`,args:i(r,c,`update-description-for-field-of-input-type-argument`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-input-type-argument')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-input-type-argument')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-input-type-argument')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-new-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-input-type-argument')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'change-type-of-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-type-of-field-in-input-type-argument')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-input-type-argument')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-input-type-argument-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-input-type-argument-as-optional')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-input-type-argument-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-input-type-argument-as-mandatory')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-input-type-argument')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'remove-field-from-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-input-type-argument')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'remove-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-input-type-argument')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-input-type-argument',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-input-type-argument')
}`,...b.parameters?.docs?.source}}},x=[`AddDescriptionForFieldOfInputTypeArgument`,`AddEnumValueOfFieldInInputTypeArgument`,`AddInputTypeArgument`,`AddNewFieldInInputTypeArgument`,`ChangeTypeOfFieldInInputTypeArgument`,`DeleteDescriptionForFieldOfInputTypeArgument`,`MarkMandatoryFieldOfInputTypeArgumentAsOptional`,`MarkOptionalFieldOfInputTypeArgumentAsMandatory`,`RemoveEnumValueOfFieldInInputTypeArgument`,`RemoveFieldFromInputTypeArgument`,`RemoveInputTypeArgument`,`UpdateDescriptionForFieldOfInputTypeArgument`]})))()}S();export{l as AddDescriptionForFieldOfInputTypeArgument,u as AddEnumValueOfFieldInInputTypeArgument,d as AddInputTypeArgument,f as AddNewFieldInInputTypeArgument,p as ChangeTypeOfFieldInInputTypeArgument,m as DeleteDescriptionForFieldOfInputTypeArgument,h as MarkMandatoryFieldOfInputTypeArgumentAsOptional,g as MarkOptionalFieldOfInputTypeArgumentAsMandatory,_ as RemoveEnumValueOfFieldInInputTypeArgument,v as RemoveFieldFromInputTypeArgument,y as RemoveInputTypeArgument,b as UpdateDescriptionForFieldOfInputTypeArgument,x as __namedExportsOrder,s as default};