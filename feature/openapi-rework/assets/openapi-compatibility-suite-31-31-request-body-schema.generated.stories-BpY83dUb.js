import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-Bv5WFfYq.js";import{d as n,o as r,r as i,s as a,u as o}from"./compatibility-suite-utils-DqfSMFVH.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{t(),a(),n(),s={id:`openapi-compatibility-suite-31-31-request-body-schema`,title:`OpenAPI Compatibility Suite/OAS 3.1 vs OAS 3.1/request-body-schema`,render:i},c=`request-body-schema`,l={name:`add-exclusive-maximum`,args:r(o,c,`add-exclusive-maximum`,[`3.1.0`,`3.1.0`])},u={name:`add-exclusive-minimum`,args:r(o,c,`add-exclusive-minimum`,[`3.1.0`,`3.1.0`])},d={name:`add-null-to-union-type`,args:r(o,c,`add-null-to-union-type`,[`3.1.0`,`3.1.0`])},f={name:`add-sibling-description-for-ref`,args:r(o,c,`add-sibling-description-for-ref`,[`3.1.0`,`3.1.0`])},p={name:`add-union-type`,args:r(o,c,`add-union-type`,[`3.1.0`,`3.1.0`])},m={name:`change-from-exclusive-maximum-to-inclusive-maximum`,args:r(o,c,`change-from-exclusive-maximum-to-inclusive-maximum`,[`3.1.0`,`3.1.0`])},h={name:`change-from-exclusive-minimum-to-inclusive-minimum`,args:r(o,c,`change-from-exclusive-minimum-to-inclusive-minimum`,[`3.1.0`,`3.1.0`])},g={name:`change-from-inclusive-maximum-to-exclusive-maximum`,args:r(o,c,`change-from-inclusive-maximum-to-exclusive-maximum`,[`3.1.0`,`3.1.0`])},_={name:`change-from-inclusive-minimum-to-exclusive-minimum`,args:r(o,c,`change-from-inclusive-minimum-to-exclusive-minimum`,[`3.1.0`,`3.1.0`])},v={name:`change-referenced-enum-when-sibling-exists-for-ref`,args:r(o,c,`change-referenced-enum-when-sibling-exists-for-ref`,[`3.1.0`,`3.1.0`])},y={name:`change-sibling-enum-for-ref`,args:r(o,c,`change-sibling-enum-for-ref`,[`3.1.0`,`3.1.0`])},b={name:`decrease-exclusive-maximum-value`,args:r(o,c,`decrease-exclusive-maximum-value`,[`3.1.0`,`3.1.0`])},x={name:`decrease-exclusive-minimum-value`,args:r(o,c,`decrease-exclusive-minimum-value`,[`3.1.0`,`3.1.0`])},S={name:`increase-exclusive-maximum-value`,args:r(o,c,`increase-exclusive-maximum-value`,[`3.1.0`,`3.1.0`])},C={name:`increase-exclusive-minimum-value`,args:r(o,c,`increase-exclusive-minimum-value`,[`3.1.0`,`3.1.0`])},w={name:`remove-exclusive-maximum`,args:r(o,c,`remove-exclusive-maximum`,[`3.1.0`,`3.1.0`])},T={name:`remove-exclusive-minimum`,args:r(o,c,`remove-exclusive-minimum`,[`3.1.0`,`3.1.0`])},E={name:`remove-null-from-union-type`,args:r(o,c,`remove-null-from-union-type`,[`3.1.0`,`3.1.0`])},D={name:`remove-sibling-maxLength-for-ref`,args:r(o,c,`remove-sibling-maxLength-for-ref`,[`3.1.0`,`3.1.0`])},O={name:`remove-union-type`,args:r(o,c,`remove-union-type`,[`3.1.0`,`3.1.0`])},k={name:`reorder-types-in-union-type`,args:r(o,c,`reorder-types-in-union-type`,[`3.1.0`,`3.1.0`])},A={name:`union-type-equivalent-to-any-of`,args:r(o,c,`union-type-equivalent-to-any-of`,[`3.1.0`,`3.1.0`])},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-exclusive-maximum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-exclusive-maximum', ['3.1.0', '3.1.0'])
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-exclusive-minimum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-exclusive-minimum', ['3.1.0', '3.1.0'])
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-null-to-union-type',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-null-to-union-type', ['3.1.0', '3.1.0'])
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-sibling-description-for-ref',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-sibling-description-for-ref', ['3.1.0', '3.1.0'])
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'add-union-type',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-union-type', ['3.1.0', '3.1.0'])
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'change-from-exclusive-maximum-to-inclusive-maximum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-from-exclusive-maximum-to-inclusive-maximum', ['3.1.0', '3.1.0'])
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'change-from-exclusive-minimum-to-inclusive-minimum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-from-exclusive-minimum-to-inclusive-minimum', ['3.1.0', '3.1.0'])
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'change-from-inclusive-maximum-to-exclusive-maximum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-from-inclusive-maximum-to-exclusive-maximum', ['3.1.0', '3.1.0'])
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'change-from-inclusive-minimum-to-exclusive-minimum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-from-inclusive-minimum-to-exclusive-minimum', ['3.1.0', '3.1.0'])
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'change-referenced-enum-when-sibling-exists-for-ref',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-referenced-enum-when-sibling-exists-for-ref', ['3.1.0', '3.1.0'])
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'change-sibling-enum-for-ref',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-sibling-enum-for-ref', ['3.1.0', '3.1.0'])
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'decrease-exclusive-maximum-value',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'decrease-exclusive-maximum-value', ['3.1.0', '3.1.0'])
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'decrease-exclusive-minimum-value',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'decrease-exclusive-minimum-value', ['3.1.0', '3.1.0'])
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'increase-exclusive-maximum-value',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'increase-exclusive-maximum-value', ['3.1.0', '3.1.0'])
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'increase-exclusive-minimum-value',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'increase-exclusive-minimum-value', ['3.1.0', '3.1.0'])
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'remove-exclusive-maximum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-exclusive-maximum', ['3.1.0', '3.1.0'])
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'remove-exclusive-minimum',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-exclusive-minimum', ['3.1.0', '3.1.0'])
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'remove-null-from-union-type',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-null-from-union-type', ['3.1.0', '3.1.0'])
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'remove-sibling-maxLength-for-ref',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-sibling-maxLength-for-ref', ['3.1.0', '3.1.0'])
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'remove-union-type',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-union-type', ['3.1.0', '3.1.0'])
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'reorder-types-in-union-type',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'reorder-types-in-union-type', ['3.1.0', '3.1.0'])
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'union-type-equivalent-to-any-of',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'union-type-equivalent-to-any-of', ['3.1.0', '3.1.0'])
}`,...A.parameters?.docs?.source}}},j=[`AddExclusiveMaximum`,`AddExclusiveMinimum`,`AddNullToUnionType`,`AddSiblingDescriptionForRef`,`AddUnionType`,`ChangeFromExclusiveMaximumToInclusiveMaximum`,`ChangeFromExclusiveMinimumToInclusiveMinimum`,`ChangeFromInclusiveMaximumToExclusiveMaximum`,`ChangeFromInclusiveMinimumToExclusiveMinimum`,`ChangeReferencedEnumWhenSiblingExistsForRef`,`ChangeSiblingEnumForRef`,`DecreaseExclusiveMaximumValue`,`DecreaseExclusiveMinimumValue`,`IncreaseExclusiveMaximumValue`,`IncreaseExclusiveMinimumValue`,`RemoveExclusiveMaximum`,`RemoveExclusiveMinimum`,`RemoveNullFromUnionType`,`RemoveSiblingMaxLengthForRef`,`RemoveUnionType`,`ReorderTypesInUnionType`,`UnionTypeEquivalentToAnyOf`]})))()}M();export{l as AddExclusiveMaximum,u as AddExclusiveMinimum,d as AddNullToUnionType,f as AddSiblingDescriptionForRef,p as AddUnionType,m as ChangeFromExclusiveMaximumToInclusiveMaximum,h as ChangeFromExclusiveMinimumToInclusiveMinimum,g as ChangeFromInclusiveMaximumToExclusiveMaximum,_ as ChangeFromInclusiveMinimumToExclusiveMinimum,v as ChangeReferencedEnumWhenSiblingExistsForRef,y as ChangeSiblingEnumForRef,b as DecreaseExclusiveMaximumValue,x as DecreaseExclusiveMinimumValue,S as IncreaseExclusiveMaximumValue,C as IncreaseExclusiveMinimumValue,w as RemoveExclusiveMaximum,T as RemoveExclusiveMinimum,E as RemoveNullFromUnionType,D as RemoveSiblingMaxLengthForRef,O as RemoveUnionType,k as ReorderTypesInUnionType,A as UnionTypeEquivalentToAnyOf,j as __namedExportsOrder,s as default};