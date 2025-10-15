import{j as Lr}from"./_commonjs-dynamic-modules-6308e768.js";import{S as a,D as r,a as t}from"./ErrorBoundaryFallback-ca4ed22f.js";import{G as x}from"./GraphQLOperationDiffViewer-4d47f298.js";import{p as n}from"./preprocess-95d4dfd2.js";import{g as e,b as U}from"./helpers-2e68b178.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-7af137fc.js";import"./model-97564a50.js";const kr={title:"Graph Api Diff Viewer",component:x,parameters:{},argTypes:{},args:{source:{}}},o={args:{source:n({beforeSource:{},afterSource:{}}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},P=e`
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
`,W=e`
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
`,s={args:{source:n({beforeSource:P,afterSource:W}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},i={args:{source:n({beforeSource:P,afterSource:W}),operationPath:"unDeprecatedQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},c={args:{source:n({beforeSource:P,afterSource:W}),operationPath:"deprecatedWithReasonQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},p={args:{source:n({beforeSource:P,afterSource:W}),operationPath:"unDeprecatedWithReasonQuery",layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},u={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},d={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},f={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},br=e`
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
`,Br=e`
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
`,y={args:{source:n({beforeSource:br,afterSource:Br}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},D={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},E={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},g={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},I={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},S={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},m={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},_={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},F={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},M={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},l={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},A={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},h={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},K={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},T={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},v={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},N={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},G={args:{source:n({beforeSource:e`
        type Query {
          test: [String]
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},O={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Q={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},Y={args:{source:n({beforeSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},R={args:{source:n({beforeSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},L={args:{source:n({beforeSource:e`
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
      `}),layoutMode:a,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t}}},b={render:V=>{const C=n({beforeSource:U(`
        type Query {
          test: Type
        }
        
        type Type {
          id: ID!
        }
      `),afterSource:U(`
        type Query {
          test: Input
        }
        
        input Input {
          id: ID!
        }
      `),circular:!0});return Lr.jsx(x,{...V,source:C})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs",operationPath:"companyCount"}},B={render:V=>{const C=n({beforeSource:U(`
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
      `),afterSource:U(`
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
      `),circular:!0});return Lr.jsx(x,{...V,source:C})},args:{expandedDepth:2,metaKeys:{diffsMetaKey:r,aggregatedDiffsMetaKey:t},layoutMode:"side-by-side-diffs",operationPath:"companyCount"}};var w,H,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(H=o.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var k,q,z;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(q=s.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,X,Z;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(re=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,ae;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ie;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,pe,ue;d.parameters={...d.parameters,docs:{...(ce=d.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(pe=d.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,fe,ye;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var De,Ee,ge;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ge=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:ge.source}}};var Ie,Se,me;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(me=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:me.source}}};var _e,Fe,Me;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Me=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var le,Ae,he;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(he=(Ae=g.parameters)==null?void 0:Ae.docs)==null?void 0:he.source}}};var Ke,Te,ve;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(ve=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var Ne,Ge,Oe;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Oe=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Qe,Ye,Re;m.parameters={...m.parameters,docs:{...(Qe=m.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Re=(Ye=m.parameters)==null?void 0:Ye.docs)==null?void 0:Re.source}}};var Le,be,Be;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Be=(be=_.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};var Ue,Pe,We;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(We=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Ve,Ce,xe;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(xe=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var we,He,je;l.parameters={...l.parameters,docs:{...(we=l.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(je=(He=l.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var ke,qe,ze;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(ze=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var Je,Xe,Ze;h.parameters={...h.parameters,docs:{...(Je=h.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=h.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var $e,er,rr;K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(rr=(er=K.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var tr,nr,ar;T.parameters={...T.parameters,docs:{...(tr=T.parameters)==null?void 0:tr.docs,source:{originalSource:`{
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
}`,...(ar=(nr=T.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var or,sr,ir;v.parameters={...v.parameters,docs:{...(or=v.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ir=(sr=v.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var cr,pr,ur;N.parameters={...N.parameters,docs:{...(cr=N.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
}`,...(ur=(pr=N.parameters)==null?void 0:pr.docs)==null?void 0:ur.source}}};var dr,fr,yr;G.parameters={...G.parameters,docs:{...(dr=G.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(yr=(fr=G.parameters)==null?void 0:fr.docs)==null?void 0:yr.source}}};var Dr,Er,gr;O.parameters={...O.parameters,docs:{...(Dr=O.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
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
}`,...(gr=(Er=O.parameters)==null?void 0:Er.docs)==null?void 0:gr.source}}};var Ir,Sr,mr;Q.parameters={...Q.parameters,docs:{...(Ir=Q.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
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
}`,...(mr=(Sr=Q.parameters)==null?void 0:Sr.docs)==null?void 0:mr.source}}};var _r,Fr,Mr;Y.parameters={...Y.parameters,docs:{...(_r=Y.parameters)==null?void 0:_r.docs,source:{originalSource:`{
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
}`,...(Mr=(Fr=Y.parameters)==null?void 0:Fr.docs)==null?void 0:Mr.source}}};var lr,Ar,hr;R.parameters={...R.parameters,docs:{...(lr=R.parameters)==null?void 0:lr.docs,source:{originalSource:`{
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
}`,...(hr=(Ar=R.parameters)==null?void 0:Ar.docs)==null?void 0:hr.source}}};var Kr,Tr,vr;L.parameters={...L.parameters,docs:{...(Kr=L.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
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
}`,...(vr=(Tr=L.parameters)==null?void 0:Tr.docs)==null?void 0:vr.source}}};var Nr,Gr,Or;b.parameters={...b.parameters,docs:{...(Nr=b.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
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
}`,...(Or=(Gr=b.parameters)==null?void 0:Gr.docs)==null?void 0:Or.source}}};var Qr,Yr,Rr;B.parameters={...B.parameters,docs:{...(Qr=B.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
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
}`,...(Rr=(Yr=B.parameters)==null?void 0:Yr.docs)==null?void 0:Rr.source}}};const qr=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion","TypeToInput","EnumChanges"];export{l as AddedDirectiveDescription,_ as AddedDirectiveLocation,S as AppendDirective,L as ChangedObjectiveUnion,R as ChangedUnion,y as ComplexEnum,s as DeprecatedQuery,c as DeprecatedWithReasonQuery,O as DirectiveUsageAddedArgValue,Y as DirectiveUsageChangedArgValue,Q as DirectiveUsageRemovedArgValue,B as EnumChanges,G as ListToStringOrInt,m as PopDirective,A as RemovedDirectiveDescription,F as RemovedDirectiveLocation,h as ReplacedDirectiveDescription,M as ReplacedDirectiveLocation,u as SimpleEnum,N as StringToEnum1OrEnum2,T as StringToIntOrFloat,v as StringToStringOrEnum,K as StringToStringOrInt,o as Test,b as TypeToInput,i as UnDeprecatedQuery,p as UnDeprecatedWithReasonQuery,D as WhollyAddedComplexEnum,g as WhollyAddedDirective,d as WhollyAddedSimpleEnum,E as WhollyRemovedComplexEnum,I as WhollyRemovedDirective,f as WhollyRemovedSimpleEnum,qr as __namedExportsOrder,kr as default};
