import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{S as a,D as r,a as t}from"./ErrorBoundaryFallback-c3594ea4.js";import{G as c}from"./GraphQLOperationDiffViewer-4955c876.js";import{p as n}from"./preprocess-b27faa96.js";import{g as e,b as o}from"./helpers-4bcc2d3c.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-fe48f87f.js";import"./model-af29a1e3.js";const ot={title:"Graph Api Diff Viewer",component:c,parameters:{},argTypes:{},args:{source:{}}},p={args:{source:n({beforeSource:{},afterSource:{}}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},H=e`
type Query {
  deprecatedQuery: Response
  unDeprecatedQuery: Response @deprecated
  deprecatedWithReasonQuery: Response
  unDeprecatedWithReasonQuery: Response @deprecated(reason: "Will be removed")
}
type Response {
  deprecatedProperty: String
  unDeprecatedProperty: String @deprecated
  deprecatedWithReasonProperty: String
  unDeprecatedWithReasonProperty: String @deprecated(reason: "Will be removed")
  changedDeprecationReasonProperty: String @deprecated(reason: "BEFORE")
  notChangedDeprecatedProperty: String @deprecated
  notChangedDeprecatedWithReasonProperty: String @deprecated(reason: "Reason!!!")
  notChangedNotDeprecatedProperty: String
  enum: Enum
  bugEnum: BugEnum
}
enum Enum {
  deprecatedValue
  unDeprecatedValue @deprecated
  deprecatedWithReasonValue
  unDeprecatedWithReasonValue @deprecated(reason: "Will be removed")
  changedDeprecationReasonProperty @deprecated(reason: "BEFORE")
  changedDeprecationReasonPropertyFromDefault @deprecated
  changedDeprecationReasonPropertyToDefault @deprecated(reason: "Not default reason")
  notChangedDeprecatedValue @deprecated
  notChangedDeprecatedWithReasonValue @deprecated(reason: "Reason!!!")
  notChangedNotDeprecatedValue
}
enum BugEnum {
  deprecated
}
`,k=e`
type Query {
  deprecatedQuery: Response @deprecated
  unDeprecatedQuery: Response
  deprecatedWithReasonQuery: Response @deprecated(reason: "Will be removed")
  unDeprecatedWithReasonQuery: Response
}
type Response {
  deprecatedProperty: String @deprecated
  unDeprecatedProperty: String
  deprecatedWithReasonProperty: String @deprecated(reason: "Will be removed")
  unDeprecatedWithReasonProperty: String
  changedDeprecationReasonProperty: String @deprecated(reason: "AFTER")
  notChangedDeprecatedProperty: String @deprecated
  notChangedDeprecatedWithReasonProperty: String @deprecated(reason: "Reason!!!")
  notChangedNotDeprecatedProperty: String
  enum: Enum
  bugEnum: BugEnum
}
enum Enum {
  deprecatedValue @deprecated
  unDeprecatedValue
  deprecatedWithReasonValue @deprecated(reason: "Will be removed")
  unDeprecatedWithReasonValue
  changedDeprecationReasonProperty @deprecated(reason: "AFTER")
  changedDeprecationReasonPropertyFromDefault @deprecated(reason: "Not default reason")
  changedDeprecationReasonPropertyToDefault @deprecated
  notChangedDeprecatedValue @deprecated
  notChangedDeprecatedWithReasonValue @deprecated(reason: "Reason!!!")
  notChangedNotDeprecatedValue
}
enum BugEnum {
  deprecated @deprecated
}
`,u={args:{source:n({beforeSource:H,afterSource:k}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},y={args:{source:n({beforeSource:H,afterSource:k}),operationPath:"unDeprecatedQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},f={args:{source:n({beforeSource:H,afterSource:k}),operationPath:"deprecatedWithReasonQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},D={args:{source:n({beforeSource:H,afterSource:k}),operationPath:"unDeprecatedWithReasonQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},E={args:{source:n({beforeSource:e`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
          fourth
        }
      `,afterSource:e`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          THIRD
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},g={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},S={args:{source:n({beforeSource:e`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
        }
      `,afterSource:e`
        type Query {
          test: String
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},qr=e`
type Query {
  test: Enum
}
enum Enum {
  simpleValue
  "My value"
  valueWithDescription
  valueWithDeprecation @deprecated
  valueWithCustomDeprecation @deprecated(reason: "Because why")

  "My value"
  complexValue @deprecated(reason: "Because why")
  "My value"
  complexValueRemovedDescription @deprecated(reason: "Because why")
  "My value"
  complexValueRemovedDeprecation @deprecated(reason: "Because why")
  complexValueAddedDescription @deprecated(reason: "Because why")
  "My value"
  complexValueAddedDeprecation
  "My value"
  complexValueBecameSimple @deprecated(reason: "Because why")

  removedValue
  "My value"
  removedValueWithDescription
  "My value"
  valueWithChangedDescription
  removedValueWithDeprecation @deprecated
  removedValueWithCustomDeprecation @deprecated(reason: "Because why")
  valueWithChangedDeprecationReason @deprecated(reason: "Because why")
}
`,zr=e`
type Query {
  test: Enum
}
enum Enum {
  simpleValue
  "My value"
  valueWithDescription
  valueWithDeprecation @deprecated
  valueWithCustomDeprecation @deprecated(reason: "Because why")

  "My value"
  complexValue @deprecated(reason: "Because why")
  complexValueRemovedDescription @deprecated(reason: "Because why")
  "My value"
  complexValueRemovedDeprecation
  "My value"
  complexValueAddedDescription @deprecated(reason: "Because why")
  "My value"
  complexValueAddedDeprecation @deprecated(reason: "Because why")
  complexValueBecameSimple

  addedValue
  "My value"
  addedValueWithDescription
  "My value CHANGED"
  valueWithChangedDescription
  addedValueWithDeprecation @deprecated
  addedValueWithCustomDeprecation @deprecated(reason: "Because why")
  valueWithChangedDeprecationReason @deprecated(reason: "Because why CHANGED")
}
`,I={args:{source:n({beforeSource:qr,afterSource:zr}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},m={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on ENUM_VALUE
        type Query {
          test: Enum
        }
        enum Enum {
          first
          "My Value"
          second
          third @deprecated
          "My value"
          fourth @foo @deprecated(reason: "Because why")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},_={args:{source:n({beforeSource:e`
        directive @foo on ENUM_VALUE
        type Query {
          test: Enum
        }
        enum Enum {
          first
          "My Value"
          second
          third @deprecated
          "My value"
          fourth @foo @deprecated(reason: "Because why")
        }
      `,afterSource:e`
        type Query {
          test: String
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},l={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},F={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},M={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo @bar
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},A={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo @bar
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @bar
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},h={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},K={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},T={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},v={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},N={args:{source:n({beforeSource:e`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},G={args:{source:n({beforeSource:e`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        "CHANGED directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},O={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},R={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Q={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Enum
        enum Enum {
          first
          second
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Y={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Enum1 | Enum2
        enum Enum1 {
          first
          second
        }
        enum Enum2 {
          third
          fourth
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},L={args:{source:n({beforeSource:e`
        type Query {
          test: [String]
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},b={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},B={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},C={args:{source:n({beforeSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},U={args:{source:n({beforeSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},P={args:{source:n({beforeSource:e`
        type Query {
          test: Entity
        }
        union Entity = A | B
        type A {
          id: ID!
          name(a: Int, b: Boolean): String
        }
        type B {
          key: ID!
          title: String
        }
      `,afterSource:e`
        type Query {
          test: Entity
        }
        union Entity = A | B | C
        type A {
          id(b: Boolean): ID!
          name(a: Int): String
        }
        type B {
          key: ID!
          title: String
        }
        type C {
          login: ID!
          email: String
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},W={render:s=>{const i=n({beforeSource:o(`
        type Query {
          test: Type
        }
        
        type Type {
          id: ID!
        }
      `),afterSource:o(`
        type Query {
          test: Input
        }
        
        input Input {
          id: ID!
        }
      `),circular:!0});return d.jsx(c,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs",operationPath:"companyCount"}},V={render:s=>{const i=n({beforeSource:o(`
        type Query {
          test: Fruit
        }
        
        enum Fruit {
          "Removed APPLE description"
          APPLE
          BANANA
          "Changed ORANGE description"
          ORANGE
          PINEAPPLE
          STRAWBERRY
        }
      `),afterSource:o(`
        type Query {
          test: Fruit
        }
        
        enum Fruit {
          APPLE
          "Added BANANA description"
          BANANA
          "CHANGED ORANGE description"
          ORANGE
          PEAR
          STRAWBERRY
        }
      `),circular:!0});return d.jsx(c,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs",operationPath:"companyCount"}},x={render:s=>{const i=n({beforeSource:o(`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `),afterSource:o(`
        directive @foo on FIELD_DEFINITION | ENUM_VALUE
        type Query {
          test: String @foo
        }
      `),circular:!0});return d.jsx(c,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs"}},w={render:s=>{const i=n({beforeSource:o(`
        type Query {
          test: Response
        }
        type Response {
          id: ID!
          name: String
          removedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `),afterSource:o(`
        type Query {
          test: Response
        }
        type Response {
          id: ID!
          name: String
          addedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `),circular:!0});return d.jsx(c,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs"}},j={render:s=>{const i=n({beforeSource:o(`
        type Query {
          test: Response
        }
        input Response {
          id: ID!
          name: String
          removedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `),afterSource:o(`
        type Query {
          test: Response
        }
        input Response {
          id: ID!
          name: String
          addedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `),circular:!0});return d.jsx(c,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs"}};var q,z,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: {},
      afterSource: {}
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(J=(z=p.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'unDeprecatedQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ae,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'deprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(oe=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,ce;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'unDeprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(ce=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,ue;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
          fourth
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          THIRD
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(ue=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ye,fe,De;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(De=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};var Ee,ge,Se;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: String
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Se=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var Ie,me,_e;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: complexEnumBefore,
      afterSource: complexEnumAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(_e=(me=I.parameters)==null?void 0:me.docs)==null?void 0:_e.source}}};var le,Fe,Me;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        directive @foo on ENUM_VALUE
        type Query {
          test: Enum
        }
        enum Enum {
          first
          "My Value"
          second
          third @deprecated
          "My value"
          fourth @foo @deprecated(reason: "Because why")
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Me=(Fe=m.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ae,he,Ke;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on ENUM_VALUE
        type Query {
          test: Enum
        }
        enum Enum {
          first
          "My Value"
          second
          third @deprecated
          "My value"
          fourth @foo @deprecated(reason: "Because why")
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: String
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Ke=(he=_.parameters)==null?void 0:he.docs)==null?void 0:Ke.source}}};var Te,ve,Ne;l.parameters={...l.parameters,docs:{...(Te=l.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Ne=(ve=l.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};var Ge,Oe,Re;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Re=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var Qe,Ye,Le;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo @bar
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Le=(Ye=M.parameters)==null?void 0:Ye.docs)==null?void 0:Le.source}}};var be,Be,Ce;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo @bar
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @bar
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Ce=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var Ue,Pe,We;h.parameters={...h.parameters,docs:{...(Ue=h.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(We=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Ve,xe,we;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(we=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var je,He,ke;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(ke=(He=T.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var qe,ze,Je;v.parameters={...v.parameters,docs:{...(qe=v.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Je=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Xe,Ze,$e;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...($e=(Ze=N.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var er,rr,tr;G.parameters={...G.parameters,docs:{...(er=G.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        "CHANGED directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(tr=(rr=G.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var nr,ar,or;O.parameters={...O.parameters,docs:{...(nr=O.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Union
        }
        union Union = String | Int
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(or=(ar=O.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var sr,ir,cr;R.parameters={...R.parameters,docs:{...(sr=R.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Union
        }
        union Union = Int | Float
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(cr=(ir=R.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var dr,pr,ur;Q.parameters={...Q.parameters,docs:{...(dr=Q.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Union
        }
        union Union = String | Enum
        enum Enum {
          first
          second
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(ur=(pr=Q.parameters)==null?void 0:pr.docs)==null?void 0:ur.source}}};var yr,fr,Dr;Y.parameters={...Y.parameters,docs:{...(yr=Y.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: String
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Union
        }
        union Union = Enum1 | Enum2
        enum Enum1 {
          first
          second
        }
        enum Enum2 {
          third
          fourth
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Dr=(fr=Y.parameters)==null?void 0:fr.docs)==null?void 0:Dr.source}}};var Er,gr,Sr;L.parameters={...L.parameters,docs:{...(Er=L.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: [String]
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Union
        }
        union Union = String | Int
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Sr=(gr=L.parameters)==null?void 0:gr.docs)==null?void 0:Sr.source}}};var Ir,mr,_r;b.parameters={...b.parameters,docs:{...(Ir=b.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`,
      afterSource: graphapi\`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(_r=(mr=b.parameters)==null?void 0:mr.docs)==null?void 0:_r.source}}};var lr,Fr,Mr;B.parameters={...B.parameters,docs:{...(lr=B.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      \`,
      afterSource: graphapi\`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Mr=(Fr=B.parameters)==null?void 0:Fr.docs)==null?void 0:Mr.source}}};var Ar,hr,Kr;C.parameters={...C.parameters,docs:{...(Ar=C.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      \`,
      afterSource: graphapi\`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Kr=(hr=C.parameters)==null?void 0:hr.docs)==null?void 0:Kr.source}}};var Tr,vr,Nr;U.parameters={...U.parameters,docs:{...(Tr=U.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      \`,
      afterSource: graphapi\`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Nr=(vr=U.parameters)==null?void 0:vr.docs)==null?void 0:Nr.source}}};var Gr,Or,Rr;P.parameters={...P.parameters,docs:{...(Gr=P.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: Entity
        }
        union Entity = A | B
        type A {
          id: ID!
          name(a: Int, b: Boolean): String
        }
        type B {
          key: ID!
          title: String
        }
      \`,
      afterSource: graphapi\`
        type Query {
          test: Entity
        }
        union Entity = A | B | C
        type A {
          id(b: Boolean): ID!
          name(a: Int): String
        }
        type B {
          key: ID!
          title: String
        }
        type C {
          login: ID!
          email: String
        }
      \`
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    }
  }
}`,...(Rr=(Or=P.parameters)==null?void 0:Or.docs)==null?void 0:Rr.source}}};var Qr,Yr,Lr;W.parameters={...W.parameters,docs:{...(Qr=W.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        type Query {
          test: Type
        }
        
        type Type {
          id: ID!
        }
      \`),
      afterSource: buildGraphApi(\`
        type Query {
          test: Input
        }
        
        input Input {
          id: ID!
        }
      \`),
      circular: true
    });
    return <GraphQLOperationDiffViewer {...args} source={processedSource} />;
  },
  args: {
    expandedDepth: 2,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    },
    layoutMode: 'side-by-side-diffs',
    operationPath: 'companyCount'
  }
}`,...(Lr=(Yr=W.parameters)==null?void 0:Yr.docs)==null?void 0:Lr.source}}};var br,Br,Cr;V.parameters={...V.parameters,docs:{...(br=V.parameters)==null?void 0:br.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        type Query {
          test: Fruit
        }
        
        enum Fruit {
          "Removed APPLE description"
          APPLE
          BANANA
          "Changed ORANGE description"
          ORANGE
          PINEAPPLE
          STRAWBERRY
        }
      \`),
      afterSource: buildGraphApi(\`
        type Query {
          test: Fruit
        }
        
        enum Fruit {
          APPLE
          "Added BANANA description"
          BANANA
          "CHANGED ORANGE description"
          ORANGE
          PEAR
          STRAWBERRY
        }
      \`),
      circular: true
    });
    return <GraphQLOperationDiffViewer {...args} source={processedSource} />;
  },
  args: {
    expandedDepth: 2,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    },
    layoutMode: 'side-by-side-diffs',
    operationPath: 'companyCount'
  }
}`,...(Cr=(Br=V.parameters)==null?void 0:Br.docs)==null?void 0:Cr.source}}};var Ur,Pr,Wr;x.parameters={...x.parameters,docs:{...(Ur=x.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      \`),
      afterSource: buildGraphApi(\`
        directive @foo on FIELD_DEFINITION | ENUM_VALUE
        type Query {
          test: String @foo
        }
      \`),
      circular: true
    });
    return <GraphQLOperationDiffViewer {...args} source={processedSource} />;
  },
  args: {
    expandedDepth: 2,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    },
    layoutMode: 'side-by-side-diffs'
  }
}`,...(Wr=(Pr=x.parameters)==null?void 0:Pr.docs)==null?void 0:Wr.source}}};var Vr,xr,wr;w.parameters={...w.parameters,docs:{...(Vr=w.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        type Query {
          test: Response
        }
        type Response {
          id: ID!
          name: String
          removedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      \`),
      afterSource: buildGraphApi(\`
        type Query {
          test: Response
        }
        type Response {
          id: ID!
          name: String
          addedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      \`),
      circular: true
    });
    return <GraphQLOperationDiffViewer {...args} source={processedSource} />;
  },
  args: {
    expandedDepth: 2,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    },
    layoutMode: 'side-by-side-diffs'
  }
}`,...(wr=(xr=w.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};var jr,Hr,kr;j.parameters={...j.parameters,docs:{...(jr=j.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        type Query {
          test: Response
        }
        input Response {
          id: ID!
          name: String
          removedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      \`),
      afterSource: buildGraphApi(\`
        type Query {
          test: Response
        }
        input Response {
          id: ID!
          name: String
          addedCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      \`),
      circular: true
    });
    return <GraphQLOperationDiffViewer {...args} source={processedSource} />;
  },
  args: {
    expandedDepth: 2,
    metaKeys: {
      diffsMetaKey: DIFF_META_KEY,
      aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY
    },
    layoutMode: 'side-by-side-diffs'
  }
}`,...(kr=(Hr=j.parameters)==null?void 0:Hr.docs)==null?void 0:kr.source}}};const st=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion","TypeToInput","EnumChanges","DirectiveUsageLocationsChanged","ChangedCircularMethods","ChangedCircularProperties"];export{v as AddedDirectiveDescription,h as AddedDirectiveLocation,M as AppendDirective,w as ChangedCircularMethods,j as ChangedCircularProperties,P as ChangedObjectiveUnion,U as ChangedUnion,I as ComplexEnum,u as DeprecatedQuery,f as DeprecatedWithReasonQuery,b as DirectiveUsageAddedArgValue,C as DirectiveUsageChangedArgValue,x as DirectiveUsageLocationsChanged,B as DirectiveUsageRemovedArgValue,V as EnumChanges,L as ListToStringOrInt,A as PopDirective,N as RemovedDirectiveDescription,K as RemovedDirectiveLocation,G as ReplacedDirectiveDescription,T as ReplacedDirectiveLocation,E as SimpleEnum,Y as StringToEnum1OrEnum2,R as StringToIntOrFloat,Q as StringToStringOrEnum,O as StringToStringOrInt,p as Test,W as TypeToInput,y as UnDeprecatedQuery,D as UnDeprecatedWithReasonQuery,m as WhollyAddedComplexEnum,l as WhollyAddedDirective,g as WhollyAddedSimpleEnum,_ as WhollyRemovedComplexEnum,F as WhollyRemovedDirective,S as WhollyRemovedSimpleEnum,st as __namedExportsOrder,ot as default};
