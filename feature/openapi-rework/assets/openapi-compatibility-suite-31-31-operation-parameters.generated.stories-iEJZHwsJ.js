import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-B3f6WOxg.js";import{d as n,o as r,r as i,s as a,u as o}from"./compatibility-suite-utils-CHfcf7kq.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),a(),n(),s={id:`openapi-compatibility-suite-31-31-operation-parameters`,title:`OpenAPI Compatibility Suite/OAS 3.1 vs OAS 3.1/operation-parameters`,render:i},c=`operation-parameters`,l={name:`add-overriden-description`,args:r(o,c,`add-overriden-description`,[`3.1.0`,`3.1.0`])},u={name:`change-overriden-description`,args:r(o,c,`change-overriden-description`,[`3.1.0`,`3.1.0`])},d={name:`change-referenced-description-when-overridden-exists`,args:r(o,c,`change-referenced-description-when-overridden-exists`,[`3.1.0`,`3.1.0`])},f={name:`remove-overriden-description`,args:r(o,c,`remove-overriden-description`,[`3.1.0`,`3.1.0`])},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'add-overriden-description',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'add-overriden-description', ['3.1.0', '3.1.0'])
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'change-overriden-description',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-overriden-description', ['3.1.0', '3.1.0'])
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'change-referenced-description-when-overridden-exists',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'change-referenced-description-when-overridden-exists', ['3.1.0', '3.1.0'])
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'remove-overriden-description',
  args: getOpenApiStoryArgs(TEST_SPEC_TYPE_OPEN_API, SUITE_ID, 'remove-overriden-description', ['3.1.0', '3.1.0'])
}`,...f.parameters?.docs?.source}}},p=[`AddOverridenDescription`,`ChangeOverridenDescription`,`ChangeReferencedDescriptionWhenOverriddenExists`,`RemoveOverridenDescription`]})))()}m();export{l as AddOverridenDescription,u as ChangeOverridenDescription,d as ChangeReferencedDescriptionWhenOverriddenExists,f as RemoveOverridenDescription,p as __namedExportsOrder,s as default};