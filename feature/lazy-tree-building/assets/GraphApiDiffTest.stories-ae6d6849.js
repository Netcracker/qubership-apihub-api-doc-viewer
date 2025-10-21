import{j as H}from"./_commonjs-dynamic-modules-6308e768.js";import{S as a,D as r,a as t}from"./ErrorBoundaryFallback-1f8fbe38.js";import{G as C}from"./GraphQLOperationDiffViewer-0ada28e9.js";import{p as n}from"./preprocess-142fb67d.js";import{g as e,b as o}from"./helpers-51dadb75.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-0abab283.js";import"./model-d2e70025.js";const Xr={title:"Graph Api Diff Viewer",component:C,parameters:{},argTypes:{},args:{source:{}}},c={args:{source:n({beforeSource:{},afterSource:{}}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},x=e`
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
`,w=e`
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
`,p={args:{source:n({beforeSource:x,afterSource:w}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},u={args:{source:n({beforeSource:x,afterSource:w}),operationPath:"unDeprecatedQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},d={args:{source:n({beforeSource:x,afterSource:w}),operationPath:"deprecatedWithReasonQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},f={args:{source:n({beforeSource:x,afterSource:w}),operationPath:"unDeprecatedWithReasonQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},y={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},D={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},E={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Wr=e`
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
`,Vr=e`
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
`,g={args:{source:n({beforeSource:Wr,afterSource:Vr}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},I={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},S={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},m={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},_={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},F={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},M={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},l={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},A={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},h={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},K={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},T={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},N={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},v={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},G={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},O={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Q={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Y={args:{source:n({beforeSource:e`
        type Query {
          test: [String]
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},R={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},L={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},b={args:{source:n({beforeSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},B={args:{source:n({beforeSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},U={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},P={render:s=>{const i=n({beforeSource:o(`
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
      `),circular:!0});return H.jsx(C,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs",operationPath:"companyCount"}},W={render:s=>{const i=n({beforeSource:o(`
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
      `),circular:!0});return H.jsx(C,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs",operationPath:"companyCount"}},V={render:s=>{const i=n({beforeSource:o(`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `),afterSource:o(`
        directive @foo on FIELD_DEFINITION | ENUM_VALUE
        type Query {
          test: String @foo
        }
      `),circular:!0});return H.jsx(C,{...s,source:i})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs"}};var j,k,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,J,X;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(J=p.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,te,ne;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,pe;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,fe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ye,De,Ee;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ee=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var ge,Ie,Se;g.parameters={...g.parameters,docs:{...(ge=g.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Se=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var me,_e,Fe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Fe=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Me,le,Ae;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:Ae.source}}};var he,Ke,Te;m.parameters={...m.parameters,docs:{...(he=m.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(Ke=m.parameters)==null?void 0:Ke.docs)==null?void 0:Te.source}}};var Ne,ve,Ge;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ge=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:Ge.source}}};var Oe,Qe,Ye;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ye=(Qe=F.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Re,Le,be;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(be=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:be.source}}};var Be,Ue,Pe;l.parameters={...l.parameters,docs:{...(Be=l.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Pe=(Ue=l.parameters)==null?void 0:Ue.docs)==null?void 0:Pe.source}}};var We,Ve,Ce;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ce=(Ve=A.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var xe,we,He;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(we=h.parameters)==null?void 0:we.docs)==null?void 0:He.source}}};var je,ke,qe;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(qe=(ke=K.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var ze,Je,Xe;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,$e,er;N.parameters={...N.parameters,docs:{...(Ze=N.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(er=($e=N.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};var rr,tr,nr;v.parameters={...v.parameters,docs:{...(rr=v.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(nr=(tr=v.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var ar,or,sr;G.parameters={...G.parameters,docs:{...(ar=G.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
}`,...(sr=(or=G.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var ir,cr,pr;O.parameters={...O.parameters,docs:{...(ir=O.parameters)==null?void 0:ir.docs,source:{originalSource:`{
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
}`,...(pr=(cr=O.parameters)==null?void 0:cr.docs)==null?void 0:pr.source}}};var ur,dr,fr;Q.parameters={...Q.parameters,docs:{...(ur=Q.parameters)==null?void 0:ur.docs,source:{originalSource:`{
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
}`,...(fr=(dr=Q.parameters)==null?void 0:dr.docs)==null?void 0:fr.source}}};var yr,Dr,Er;Y.parameters={...Y.parameters,docs:{...(yr=Y.parameters)==null?void 0:yr.docs,source:{originalSource:`{
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
}`,...(Er=(Dr=Y.parameters)==null?void 0:Dr.docs)==null?void 0:Er.source}}};var gr,Ir,Sr;R.parameters={...R.parameters,docs:{...(gr=R.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(Sr=(Ir=R.parameters)==null?void 0:Ir.docs)==null?void 0:Sr.source}}};var mr,_r,Fr;L.parameters={...L.parameters,docs:{...(mr=L.parameters)==null?void 0:mr.docs,source:{originalSource:`{
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
}`,...(Fr=(_r=L.parameters)==null?void 0:_r.docs)==null?void 0:Fr.source}}};var Mr,lr,Ar;b.parameters={...b.parameters,docs:{...(Mr=b.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
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
}`,...(Ar=(lr=b.parameters)==null?void 0:lr.docs)==null?void 0:Ar.source}}};var hr,Kr,Tr;B.parameters={...B.parameters,docs:{...(hr=B.parameters)==null?void 0:hr.docs,source:{originalSource:`{
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
}`,...(Tr=(Kr=B.parameters)==null?void 0:Kr.docs)==null?void 0:Tr.source}}};var Nr,vr,Gr;U.parameters={...U.parameters,docs:{...(Nr=U.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
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
}`,...(Gr=(vr=U.parameters)==null?void 0:vr.docs)==null?void 0:Gr.source}}};var Or,Qr,Yr;P.parameters={...P.parameters,docs:{...(Or=P.parameters)==null?void 0:Or.docs,source:{originalSource:`{
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
}`,...(Yr=(Qr=P.parameters)==null?void 0:Qr.docs)==null?void 0:Yr.source}}};var Rr,Lr,br;W.parameters={...W.parameters,docs:{...(Rr=W.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
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
}`,...(br=(Lr=W.parameters)==null?void 0:Lr.docs)==null?void 0:br.source}}};var Br,Ur,Pr;V.parameters={...V.parameters,docs:{...(Br=V.parameters)==null?void 0:Br.docs,source:{originalSource:`{
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
}`,...(Pr=(Ur=V.parameters)==null?void 0:Ur.docs)==null?void 0:Pr.source}}};const Zr=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion","TypeToInput","EnumChanges","DirectiveUsageLocationsChanged"];export{K as AddedDirectiveDescription,l as AddedDirectiveLocation,F as AppendDirective,U as ChangedObjectiveUnion,B as ChangedUnion,g as ComplexEnum,p as DeprecatedQuery,d as DeprecatedWithReasonQuery,R as DirectiveUsageAddedArgValue,b as DirectiveUsageChangedArgValue,V as DirectiveUsageLocationsChanged,L as DirectiveUsageRemovedArgValue,W as EnumChanges,Y as ListToStringOrInt,M as PopDirective,T as RemovedDirectiveDescription,A as RemovedDirectiveLocation,N as ReplacedDirectiveDescription,h as ReplacedDirectiveLocation,y as SimpleEnum,Q as StringToEnum1OrEnum2,G as StringToIntOrFloat,O as StringToStringOrEnum,v as StringToStringOrInt,c as Test,P as TypeToInput,u as UnDeprecatedQuery,f as UnDeprecatedWithReasonQuery,I as WhollyAddedComplexEnum,m as WhollyAddedDirective,D as WhollyAddedSimpleEnum,S as WhollyRemovedComplexEnum,_ as WhollyRemovedDirective,E as WhollyRemovedSimpleEnum,Zr as __namedExportsOrder,Xr as default};
