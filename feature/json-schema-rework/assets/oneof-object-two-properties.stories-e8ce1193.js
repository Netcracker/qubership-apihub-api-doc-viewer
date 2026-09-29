import{c as m}from"./diffs-samples-cases-91c2d1e6.js";import{d as c,j as d,c as y}from"./json-schema-diffs-utils-9309cc07.js";import{b as _}from"./sample-cases-8c510854.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-35ca18f4.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-84a953af.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const f=`oneOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`,l=`oneOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,b=`oneOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`,j=`oneOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`,S=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/01-second-property-added/before.yaml":f,"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/02-second-property-removed/before.yaml":l}),g=Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/01-second-property-added/after.yaml":b,"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/02-second-property-removed/after.yaml":j}),u=m(S,g),v=_(u),G={title:"JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/OneOf Object Two Properties",component:c,argTypes:d},i=y(c,v),e=i("01-second-property-added"),o=i("02-second-property-removed");var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:'createCaseStory("01-second-property-added")',...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'createCaseStory("02-second-property-removed")',...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const H=["Case_01_second_property_added","Case_02_second_property_removed"];export{e as Case_01_second_property_added,o as Case_02_second_property_removed,H as __namedExportsOrder,G as default};
