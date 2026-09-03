import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-CX16bUTc.js";import{a as n,i as r,n as i,r as a,t as o}from"./compatibility-suite-utils-B19Gs_H3.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{t(),a(),n(),s={id:`graphql-compatibility-suite-interface-output-type-of-root-type`,title:`GraphQL Compatibility Suite/interface-output-type-of-root-type`,render:o},c=`interface-output-type-of-root-type`,l={name:`add-description-for-field-of-output-interface`,args:i(r,c,`add-description-for-field-of-output-interface`)},u={name:`add-description-for-output-interface`,args:i(r,c,`add-description-for-output-interface`)},d={name:`add-enum-value-of-field-in-output-interface`,args:i(r,c,`add-enum-value-of-field-in-output-interface`)},f={name:`add-new-field-in-output-interface`,args:i(r,c,`add-new-field-in-output-interface`)},p={name:`change-field-type-of-output-interface`,args:i(r,c,`change-field-type-of-output-interface`)},m={name:`change-field-type-of-output-interface-from-enum-to-string`,args:i(r,c,`change-field-type-of-output-interface-from-enum-to-string`)},h={name:`delete-description-for-field-of-output-interface`,args:i(r,c,`delete-description-for-field-of-output-interface`)},g={name:`delete-description-of-output-interface`,args:i(r,c,`delete-description-of-output-interface`)},_={name:`mark-mandatory-field-of-output-interface-as-optional`,args:i(r,c,`mark-mandatory-field-of-output-interface-as-optional`)},v={name:`mark-optional-field-of-output-interface-as-mandatory`,args:i(r,c,`mark-optional-field-of-output-interface-as-mandatory`)},y={name:`remove-enum-value-of-field-in-output-interface`,args:i(r,c,`remove-enum-value-of-field-in-output-interface`)},b={name:`remove-field-from-output-interface`,args:i(r,c,`remove-field-from-output-interface`)},x={name:`update-description-for-field-of-output-interface`,args:i(r,c,`update-description-for-field-of-output-interface`)},S={name:`update-description-of-output-interface`,args:i(r,c,`update-description-of-output-interface`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-field-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-field-of-output-interface')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-description-for-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-description-for-output-interface')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-enum-value-of-field-in-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-enum-value-of-field-in-output-interface')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-new-field-in-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'add-new-field-in-output-interface')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-interface')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'change-field-type-of-output-interface-from-enum-to-string',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'change-field-type-of-output-interface-from-enum-to-string')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-for-field-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-for-field-of-output-interface')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'delete-description-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'delete-description-of-output-interface')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'mark-mandatory-field-of-output-interface-as-optional',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-mandatory-field-of-output-interface-as-optional')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'mark-optional-field-of-output-interface-as-mandatory',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'mark-optional-field-of-output-interface-as-mandatory')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'remove-enum-value-of-field-in-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-enum-value-of-field-in-output-interface')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'remove-field-from-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'remove-field-from-output-interface')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'update-description-for-field-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-for-field-of-output-interface')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'update-description-of-output-interface',
  args: getGraphQLStoryArgs(TEST_SPEC_TYPE_GRAPH_QL, SUITE_ID, 'update-description-of-output-interface')
}`,...S.parameters?.docs?.source}}},C=[`AddDescriptionForFieldOfOutputInterface`,`AddDescriptionForOutputInterface`,`AddEnumValueOfFieldInOutputInterface`,`AddNewFieldInOutputInterface`,`ChangeFieldTypeOfOutputInterface`,`ChangeFieldTypeOfOutputInterfaceFromEnumToString`,`DeleteDescriptionForFieldOfOutputInterface`,`DeleteDescriptionOfOutputInterface`,`MarkMandatoryFieldOfOutputInterfaceAsOptional`,`MarkOptionalFieldOfOutputInterfaceAsMandatory`,`RemoveEnumValueOfFieldInOutputInterface`,`RemoveFieldFromOutputInterface`,`UpdateDescriptionForFieldOfOutputInterface`,`UpdateDescriptionOfOutputInterface`]})))()}w();export{l as AddDescriptionForFieldOfOutputInterface,u as AddDescriptionForOutputInterface,d as AddEnumValueOfFieldInOutputInterface,f as AddNewFieldInOutputInterface,p as ChangeFieldTypeOfOutputInterface,m as ChangeFieldTypeOfOutputInterfaceFromEnumToString,h as DeleteDescriptionForFieldOfOutputInterface,g as DeleteDescriptionOfOutputInterface,_ as MarkMandatoryFieldOfOutputInterfaceAsOptional,v as MarkOptionalFieldOfOutputInterfaceAsMandatory,y as RemoveEnumValueOfFieldInOutputInterface,b as RemoveFieldFromOutputInterface,x as UpdateDescriptionForFieldOfOutputInterface,S as UpdateDescriptionOfOutputInterface,C as __namedExportsOrder,s as default};