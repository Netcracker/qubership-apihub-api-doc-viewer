import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-B3f6WOxg.js";import{d as n,o as r,r as i,s as a,u as o}from"./compatibility-suite-utils-CHfcf7kq.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{t(),a(),n(),s={id:`openapi-compatibility-suite-30-30-request`,title:`OpenAPI Compatibility Suite/OAS 3.0 vs OAS 3.0/request`,render:i},c=`request`,l={name:`add-allowReserved-with-default-value-for-requestBody-parameter-encoding`,args:r(o,c,`add-allowReserved-with-default-value-for-requestBody-parameter-encoding`,[`3.0.0`,`3.0.0`])},u={name:`add-example-of-request-body`,args:r(o,c,`add-example-of-request-body`,[`3.0.0`,`3.0.0`])},d={name:`add-request-body-description`,args:r(o,c,`add-request-body-description`,[`3.0.0`,`3.0.0`])},f={name:`add-required-attribute-with-default-value-for-requestBody`,args:r(o,c,`add-required-attribute-with-default-value-for-requestBody`,[`3.0.0`,`3.0.0`])},p={name:`mark-request-body-as-optional-option-1`,args:r(o,c,`mark-request-body-as-optional-option-1`,[`3.0.0`,`3.0.0`])},m={name:`mark-request-body-as-optional-option-2`,args:r(o,c,`mark-request-body-as-optional-option-2`,[`3.0.0`,`3.0.0`])},h={name:`mark-request-body-as-required-option-1`,args:r(o,c,`mark-request-body-as-required-option-1`,[`3.0.0`,`3.0.0`])},g={name:`mark-request-body-as-required-option-2`,args:r(o,c,`mark-request-body-as-required-option-2`,[`3.0.0`,`3.0.0`])},_={name:`remove-allowReserved-with-default-value-from-requestBody-parameter-encoding`,args:r(o,c,`remove-allowReserved-with-default-value-from-requestBody-parameter-encoding`,[`3.0.0`,`3.0.0`])},v={name:`remove-example-of-request-body`,args:r(o,c,`remove-example-of-request-body`,[`3.0.0`,`3.0.0`])},y={name:`remove-request-body-description`,args:r(o,c,`remove-request-body-description`,[`3.0.0`,`3.0.0`])},b={name:`remove-required-attribute-with-default-value-from-requestBody`,args:r(o,c,`remove-required-attribute-with-default-value-from-requestBody`,[`3.0.0`,`3.0.0`])},x={name:`update-example-of-request-body`,args:r(o,c,`update-example-of-request-body`,[`3.0.0`,`3.0.0`])},S={name:`update-media-type-of-request-body`,args:r(o,c,`update-media-type-of-request-body`,[`3.0.0`,`3.0.0`])},C={name:`update-request-body-description`,args:r(o,c,`update-request-body-description`,[`3.0.0`,`3.0.0`])},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-allowReserved-with-default-value-for-requestBody-parameter-encoding',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-allowReserved-with-default-value-for-requestBody-parameter-encoding', ['3.0.0', '3.0.0'])
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'add-example-of-request-body',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-example-of-request-body', ['3.0.0', '3.0.0'])
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'add-request-body-description',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-request-body-description', ['3.0.0', '3.0.0'])
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'add-required-attribute-with-default-value-for-requestBody',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-required-attribute-with-default-value-for-requestBody', ['3.0.0', '3.0.0'])
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'mark-request-body-as-optional-option-1',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'mark-request-body-as-optional-option-1', ['3.0.0', '3.0.0'])
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'mark-request-body-as-optional-option-2',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'mark-request-body-as-optional-option-2', ['3.0.0', '3.0.0'])
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'mark-request-body-as-required-option-1',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'mark-request-body-as-required-option-1', ['3.0.0', '3.0.0'])
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'mark-request-body-as-required-option-2',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'mark-request-body-as-required-option-2', ['3.0.0', '3.0.0'])
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'remove-allowReserved-with-default-value-from-requestBody-parameter-encoding',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-allowReserved-with-default-value-from-requestBody-parameter-encoding', ['3.0.0', '3.0.0'])
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'remove-example-of-request-body',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-example-of-request-body', ['3.0.0', '3.0.0'])
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'remove-request-body-description',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-request-body-description', ['3.0.0', '3.0.0'])
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'remove-required-attribute-with-default-value-from-requestBody',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-required-attribute-with-default-value-from-requestBody', ['3.0.0', '3.0.0'])
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'update-example-of-request-body',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-example-of-request-body', ['3.0.0', '3.0.0'])
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'update-media-type-of-request-body',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-media-type-of-request-body', ['3.0.0', '3.0.0'])
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'update-request-body-description',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'update-request-body-description', ['3.0.0', '3.0.0'])
}`,...C.parameters?.docs?.source}}},w=[`AddAllowReservedWithDefaultValueForRequestBodyParameterEncoding`,`AddExampleOfRequestBody`,`AddRequestBodyDescription`,`AddRequiredAttributeWithDefaultValueForRequestBody`,`MarkRequestBodyAsOptionalOption1`,`MarkRequestBodyAsOptionalOption2`,`MarkRequestBodyAsRequiredOption1`,`MarkRequestBodyAsRequiredOption2`,`RemoveAllowReservedWithDefaultValueFromRequestBodyParameterEncoding`,`RemoveExampleOfRequestBody`,`RemoveRequestBodyDescription`,`RemoveRequiredAttributeWithDefaultValueFromRequestBody`,`UpdateExampleOfRequestBody`,`UpdateMediaTypeOfRequestBody`,`UpdateRequestBodyDescription`]})))()}T();export{l as AddAllowReservedWithDefaultValueForRequestBodyParameterEncoding,u as AddExampleOfRequestBody,d as AddRequestBodyDescription,f as AddRequiredAttributeWithDefaultValueForRequestBody,p as MarkRequestBodyAsOptionalOption1,m as MarkRequestBodyAsOptionalOption2,h as MarkRequestBodyAsRequiredOption1,g as MarkRequestBodyAsRequiredOption2,_ as RemoveAllowReservedWithDefaultValueFromRequestBodyParameterEncoding,v as RemoveExampleOfRequestBody,y as RemoveRequestBodyDescription,b as RemoveRequiredAttributeWithDefaultValueFromRequestBody,x as UpdateExampleOfRequestBody,S as UpdateMediaTypeOfRequestBody,C as UpdateRequestBodyDescription,w as __namedExportsOrder,s as default};