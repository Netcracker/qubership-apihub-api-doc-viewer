import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-Bv5WFfYq.js";import{d as n,o as r,r as i,s as a,u as o}from"./compatibility-suite-utils-DqfSMFVH.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),a(),n(),s={id:`openapi-compatibility-suite-30-30-response-body-examples`,title:`OpenAPI Compatibility Suite/OAS 3.0 vs OAS 3.0/response-body-examples`,render:i},c=`response-body-examples`,l={name:`add-additional-examples-object`,args:r(o,c,`add-additional-examples-object`,[`3.0.0`,`3.0.0`])},u={name:`add-description-of-example`,args:r(o,c,`add-description-of-example`,[`3.0.0`,`3.0.0`])},d={name:`add-examples-object-for-response-body`,args:r(o,c,`add-examples-object-for-response-body`,[`3.0.0`,`3.0.0`])},f={name:`add-summary-of-example`,args:r(o,c,`add-summary-of-example`,[`3.0.0`,`3.0.0`])},p={name:`remove-description-of-example`,args:r(o,c,`remove-description-of-example`,[`3.0.0`,`3.0.0`])},m={name:`remove-external-value-of-example`,args:r(o,c,`remove-external-value-of-example`,[`3.0.0`,`3.0.0`])},h={name:`remove-summary-of-example`,args:r(o,c,`remove-summary-of-example`,[`3.0.0`,`3.0.0`])},g={name:`update-description-of-example`,args:r(o,c,`update-description-of-example`,[`3.0.0`,`3.0.0`])},_={name:`update-example-value`,args:r(o,c,`update-example-value`,[`3.0.0`,`3.0.0`])},v={name:`update-external-value-of-example`,args:r(o,c,`update-external-value-of-example`,[`3.0.0`,`3.0.0`])},y={name:`update-name-of-example`,args:r(o,c,`update-name-of-example`,[`3.0.0`,`3.0.0`])},b={name:`update-summary-of-example`,args:r(o,c,`update-summary-of-example`,[`3.0.0`,`3.0.0`])},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-additional-examples-object',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-additional-examples-object', ['3.0.0', '3.0.0'])
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-description-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-description-of-example', ['3.0.0', '3.0.0'])
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-examples-object-for-response-body',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-examples-object-for-response-body', ['3.0.0', '3.0.0'])
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-summary-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-summary-of-example', ['3.0.0', '3.0.0'])
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'remove-description-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-description-of-example', ['3.0.0', '3.0.0'])
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'remove-external-value-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-external-value-of-example', ['3.0.0', '3.0.0'])
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'remove-summary-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-summary-of-example', ['3.0.0', '3.0.0'])
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'update-description-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-description-of-example', ['3.0.0', '3.0.0'])
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'update-example-value',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-example-value', ['3.0.0', '3.0.0'])
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'update-external-value-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-external-value-of-example', ['3.0.0', '3.0.0'])
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'update-name-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-name-of-example', ['3.0.0', '3.0.0'])
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'update-summary-of-example',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-summary-of-example', ['3.0.0', '3.0.0'])
}`,...b.parameters?.docs?.source}}},x=[`AddAdditionalExamplesObject`,`AddDescriptionOfExample`,`AddExamplesObjectForResponseBody`,`AddSummaryOfExample`,`RemoveDescriptionOfExample`,`RemoveExternalValueOfExample`,`RemoveSummaryOfExample`,`UpdateDescriptionOfExample`,`UpdateExampleValue`,`UpdateExternalValueOfExample`,`UpdateNameOfExample`,`UpdateSummaryOfExample`]})))()}S();export{l as AddAdditionalExamplesObject,u as AddDescriptionOfExample,d as AddExamplesObjectForResponseBody,f as AddSummaryOfExample,p as RemoveDescriptionOfExample,m as RemoveExternalValueOfExample,h as RemoveSummaryOfExample,g as UpdateDescriptionOfExample,_ as UpdateExampleValue,v as UpdateExternalValueOfExample,y as UpdateNameOfExample,b as UpdateSummaryOfExample,x as __namedExportsOrder,s as default};