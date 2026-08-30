import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-C2motuXe.js";import{a as n,i as r,n as i,r as a,t as o}from"./compatibility-suite-utils-Bi5ZMGxU.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{t(),a(),n(),s={id:`graphql-compatibility-suite-object-output-type-of-root-type`,title:`GraphQL Compatibility Suite/object-output-type-of-root-type`,render:o},c=`object-output-type-of-root-type`,l={name:`add-description-for-field-of-output-object-type`,args:i(r,c,`add-description-for-field-of-output-object-type`)},u={name:`add-description-for-output-object-type`,args:i(r,c,`add-description-for-output-object-type`)},d={name:`add-enum-value-of-field-in-output-object-type`,args:i(r,c,`add-enum-value-of-field-in-output-object-type`)},f={name:`add-new-field-in-output-object-type`,args:i(r,c,`add-new-field-in-output-object-type`)},p={name:`change-field-type-of-output-object-type`,args:i(r,c,`change-field-type-of-output-object-type`)},m={name:`change-field-type-of-output-object-type-from-enum-to-string`,args:i(r,c,`change-field-type-of-output-object-type-from-enum-to-string`)},h={name:`delete-description-for-field-of-output-object-type`,args:i(r,c,`delete-description-for-field-of-output-object-type`)},g={name:`delete-description-of-output-object-type`,args:i(r,c,`delete-description-of-output-object-type`)},_={name:`mark-mandatory-field-of-output-object-type-as-optional`,args:i(r,c,`mark-mandatory-field-of-output-object-type-as-optional`)},v={name:`mark-optional-field-of-output-object-type-as-mandatory`,args:i(r,c,`mark-optional-field-of-output-object-type-as-mandatory`)},y={name:`remove-enum-value-of-field-in-output-object-type`,args:i(r,c,`remove-enum-value-of-field-in-output-object-type`)},b={name:`remove-field-from-output-object-type`,args:i(r,c,`remove-field-from-output-object-type`)},x={name:`update-description-for-field-of-output-object-type`,args:i(r,c,`update-description-for-field-of-output-object-type`)},S={name:`update-description-of-output-object-type`,args:i(r,c,`update-description-of-output-object-type`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-output-object-type')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-output-object-type')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-output-object-type')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-new-field-in-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-output-object-type')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-object-type')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-object-type-from-enum-to-string',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-object-type-from-enum-to-string')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-output-object-type')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-of-output-object-type')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-output-object-type-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-output-object-type-as-optional')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-output-object-type-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-output-object-type-as-mandatory')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-output-object-type')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'remove-field-from-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-output-object-type')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-output-object-type')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'update-description-of-output-object-type',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-of-output-object-type')
}`,...S.parameters?.docs?.source}}},C=[`AddDescriptionForFieldOfOutputObjectType`,`AddDescriptionForOutputObjectType`,`AddEnumValueOfFieldInOutputObjectType`,`AddNewFieldInOutputObjectType`,`ChangeFieldTypeOfOutputObjectType`,`ChangeFieldTypeOfOutputObjectTypeFromEnumToString`,`DeleteDescriptionForFieldOfOutputObjectType`,`DeleteDescriptionOfOutputObjectType`,`MarkMandatoryFieldOfOutputObjectTypeAsOptional`,`MarkOptionalFieldOfOutputObjectTypeAsMandatory`,`RemoveEnumValueOfFieldInOutputObjectType`,`RemoveFieldFromOutputObjectType`,`UpdateDescriptionForFieldOfOutputObjectType`,`UpdateDescriptionOfOutputObjectType`]})))()}w();export{l as AddDescriptionForFieldOfOutputObjectType,u as AddDescriptionForOutputObjectType,d as AddEnumValueOfFieldInOutputObjectType,f as AddNewFieldInOutputObjectType,p as ChangeFieldTypeOfOutputObjectType,m as ChangeFieldTypeOfOutputObjectTypeFromEnumToString,h as DeleteDescriptionForFieldOfOutputObjectType,g as DeleteDescriptionOfOutputObjectType,_ as MarkMandatoryFieldOfOutputObjectTypeAsOptional,v as MarkOptionalFieldOfOutputObjectTypeAsMandatory,y as RemoveEnumValueOfFieldInOutputObjectType,b as RemoveFieldFromOutputObjectType,x as UpdateDescriptionForFieldOfOutputObjectType,S as UpdateDescriptionOfOutputObjectType,C as __namedExportsOrder,s as default};