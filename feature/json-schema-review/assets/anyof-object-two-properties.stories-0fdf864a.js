import{c as m}from"./diffs-samples-cases-1df1f3ae.js";import{c as d,d as c,j as y,a as f}from"./json-schema-diffs-utils-33235f68.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-f409c7c9.js";import"./UxBadge-26cb9909.js";import"./IndexesNodeViewer-9562384b.js";import"./DdlTableDiffsViewer-dbb8d5b6.js";/* empty css              */import"./DdlTableViewer-65ac2970.js";import"./GraphQLOperationDiffViewer-1684ae4b.js";import"./GraphPropNodeViewer-8d4634e8.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-938dff1f.js";import"./preprocess-2e2ab2fd.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const _=`anyOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`,l=`anyOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,b=`anyOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,S=`anyOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`,j=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-object-two-properties/01-second-property-added/before.yaml":_,"../../../../samples/json-schema-diffs/extensions/anyof-object-two-properties/02-second-property-removed/before.yaml":l}),g=Object.assign({"../../../../samples/json-schema-diffs/extensions/anyof-object-two-properties/01-second-property-added/after.yaml":b,"../../../../samples/json-schema-diffs/extensions/anyof-object-two-properties/02-second-property-removed/after.yaml":S}),u=m(j,g),v=d(u),z={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AnyOf Object Two Properties",component:c,argTypes:y},i=f(c,v),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,a,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const G=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,G as __namedExportsOrder,z as default};
