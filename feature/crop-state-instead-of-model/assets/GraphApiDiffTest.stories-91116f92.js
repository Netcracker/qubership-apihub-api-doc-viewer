import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{S as t,D as Hr,a as kr}from"./ErrorBoundaryFallback-f83cac0e.js";import{G as i}from"./GraphQLOperationDiffViewer-982928a2.js";import{p as r}from"./preprocess-7dc4b148.js";import{g as e,b as o}from"./helpers-2fe123dd.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-d9adf413.js";import"./model-48abba89.js";const sn={title:"Graph Api Diff Viewer",component:i,parameters:{},argTypes:{},args:{source:{}}},n={diffsMetaKey:Hr,aggregatedDiffsMetaKey:kr},p={args:{source:r({beforeSource:{},afterSource:{}}),layoutMode:t,metaKeys:n}},q=e`
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
`,j=e`
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
`,u={args:{source:r({beforeSource:q,afterSource:j}),layoutMode:t,metaKeys:n}},d={args:{source:r({beforeSource:q,afterSource:j}),operationType:"query",operationName:"unDeprecatedQuery",layoutMode:t,metaKeys:n}},y={args:{source:r({beforeSource:q,afterSource:j}),operationType:"query",operationName:"deprecatedWithReasonQuery",layoutMode:t,metaKeys:n}},S={args:{source:r({beforeSource:q,afterSource:j}),operationType:"query",operationName:"unDeprecatedWithReasonQuery",layoutMode:t,metaKeys:n}},D={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},m={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},I={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},zr=e`
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
`,Jr=e`
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
`,E={args:{source:r({beforeSource:zr,afterSource:Jr}),layoutMode:t,metaKeys:n}},f={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},g={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},l={args:{source:r({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,metaKeys:n}},_={args:{source:r({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:t,metaKeys:n}},F={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},h={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},A={args:{source:r({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,metaKeys:n}},v={args:{source:r({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,metaKeys:n}},N={args:{source:r({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,metaKeys:n}},T={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},M={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},O={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},Q={args:{source:r({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:t,metaKeys:n}},L={args:{source:r({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:t,metaKeys:n}},b={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},R={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},K={args:{source:r({beforeSource:e`
        type Query {
          test: [String]
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:t,metaKeys:n}},Y={args:{source:r({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:t,metaKeys:n}},B={args:{source:r({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,metaKeys:n}},C={args:{source:r({beforeSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:t,metaKeys:n}},U={args:{source:r({beforeSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:t,metaKeys:n}},G={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},W={render:a=>{const s=r({beforeSource:o(`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs",operationType:"query",operationName:"companyCount"}},P={render:a=>{const s=r({beforeSource:o(`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs",operationType:"query",operationName:"companyCount"}},V={render:a=>{const s=r({beforeSource:o(`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `),afterSource:o(`
        directive @foo on FIELD_DEFINITION | ENUM_VALUE
        type Query {
          test: String @foo
        }
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs"}},x={render:a=>{const s=r({beforeSource:o(`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs"}},w={render:a=>{const s=r({beforeSource:o(`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs"}};var H,k,z;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: {},
      afterSource: {}
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var J,X,Z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationType: 'query',
    operationName: 'unDeprecatedQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(re=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationType: 'query',
    operationName: 'deprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,se,ie;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationType: 'query',
    operationName: 'unDeprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,pe,ue;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(ue=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,ye,Se;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Se=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var De,me,Ie;I.parameters={...I.parameters,docs:{...(De=I.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Ie=(me=I.parameters)==null?void 0:me.docs)==null?void 0:Ie.source}}};var Ee,fe,ge;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: complexEnumBefore,
      afterSource: complexEnumAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(ge=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var le,_e,Fe;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Fe=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var he,Ae,ve;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(ve=(Ae=g.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var Ne,Te,Me;l.parameters={...l.parameters,docs:{...(Ne=l.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Me=(Te=l.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var Oe,Qe,Le;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Le=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:Le.source}}};var be,Re,Ke;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Ke=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Ke.source}}};var Ye,Be,Ce;h.parameters={...h.parameters,docs:{...(Ye=h.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Ce=(Be=h.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var Ue,Ge,We;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(We=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var Pe,Ve,xe;v.parameters={...v.parameters,docs:{...(Pe=v.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(xe=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:xe.source}}};var we,qe,je;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(je=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};var He,ke,ze;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(ze=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Je,Xe,Ze;M.parameters={...M.parameters,docs:{...(Je=M.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Ze=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var $e,er,rr;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(rr=(er=O.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var nr,tr,or;Q.parameters={...Q.parameters,docs:{...(nr=Q.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(or=(tr=Q.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var ar,sr,ir;L.parameters={...L.parameters,docs:{...(ar=L.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(ir=(sr=L.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var cr,pr,ur;b.parameters={...b.parameters,docs:{...(cr=b.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(ur=(pr=b.parameters)==null?void 0:pr.docs)==null?void 0:ur.source}}};var dr,yr,Sr;R.parameters={...R.parameters,docs:{...(dr=R.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Sr=(yr=R.parameters)==null?void 0:yr.docs)==null?void 0:Sr.source}}};var Dr,mr,Ir;K.parameters={...K.parameters,docs:{...(Dr=K.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Ir=(mr=K.parameters)==null?void 0:mr.docs)==null?void 0:Ir.source}}};var Er,fr,gr;Y.parameters={...Y.parameters,docs:{...(Er=Y.parameters)==null?void 0:Er.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(gr=(fr=Y.parameters)==null?void 0:fr.docs)==null?void 0:gr.source}}};var lr,_r,Fr;B.parameters={...B.parameters,docs:{...(lr=B.parameters)==null?void 0:lr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Fr=(_r=B.parameters)==null?void 0:_r.docs)==null?void 0:Fr.source}}};var hr,Ar,vr;C.parameters={...C.parameters,docs:{...(hr=C.parameters)==null?void 0:hr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(vr=(Ar=C.parameters)==null?void 0:Ar.docs)==null?void 0:vr.source}}};var Nr,Tr,Mr;U.parameters={...U.parameters,docs:{...(Nr=U.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Mr=(Tr=U.parameters)==null?void 0:Tr.docs)==null?void 0:Mr.source}}};var Or,Qr,Lr;G.parameters={...G.parameters,docs:{...(Or=G.parameters)==null?void 0:Or.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS
  }
}`,...(Lr=(Qr=G.parameters)==null?void 0:Qr.docs)==null?void 0:Lr.source}}};var br,Rr,Kr;W.parameters={...W.parameters,docs:{...(br=W.parameters)==null?void 0:br.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS,
    layoutMode: 'side-by-side-diffs',
    operationType: 'query',
    operationName: 'companyCount'
  }
}`,...(Kr=(Rr=W.parameters)==null?void 0:Rr.docs)==null?void 0:Kr.source}}};var Yr,Br,Cr;P.parameters={...P.parameters,docs:{...(Yr=P.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS,
    layoutMode: 'side-by-side-diffs',
    operationType: 'query',
    operationName: 'companyCount'
  }
}`,...(Cr=(Br=P.parameters)==null?void 0:Br.docs)==null?void 0:Cr.source}}};var Ur,Gr,Wr;V.parameters={...V.parameters,docs:{...(Ur=V.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS,
    layoutMode: 'side-by-side-diffs'
  }
}`,...(Wr=(Gr=V.parameters)==null?void 0:Gr.docs)==null?void 0:Wr.source}}};var Pr,Vr,xr;x.parameters={...x.parameters,docs:{...(Pr=x.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS,
    layoutMode: 'side-by-side-diffs'
  }
}`,...(xr=(Vr=x.parameters)==null?void 0:Vr.docs)==null?void 0:xr.source}}};var wr,qr,jr;w.parameters={...w.parameters,docs:{...(wr=w.parameters)==null?void 0:wr.docs,source:{originalSource:`{
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
    metaKeys: DIFF_META_KEYS,
    layoutMode: 'side-by-side-diffs'
  }
}`,...(jr=(qr=w.parameters)==null?void 0:qr.docs)==null?void 0:jr.source}}};const cn=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion","TypeToInput","EnumChanges","DirectiveUsageLocationsChanged","ChangedCircularMethods","ChangedCircularProperties"];export{T as AddedDirectiveDescription,A as AddedDirectiveLocation,F as AppendDirective,x as ChangedCircularMethods,w as ChangedCircularProperties,G as ChangedObjectiveUnion,U as ChangedUnion,E as ComplexEnum,u as DeprecatedQuery,y as DeprecatedWithReasonQuery,Y as DirectiveUsageAddedArgValue,C as DirectiveUsageChangedArgValue,V as DirectiveUsageLocationsChanged,B as DirectiveUsageRemovedArgValue,P as EnumChanges,K as ListToStringOrInt,h as PopDirective,M as RemovedDirectiveDescription,v as RemovedDirectiveLocation,O as ReplacedDirectiveDescription,N as ReplacedDirectiveLocation,D as SimpleEnum,R as StringToEnum1OrEnum2,L as StringToIntOrFloat,b as StringToStringOrEnum,Q as StringToStringOrInt,p as Test,W as TypeToInput,d as UnDeprecatedQuery,S as UnDeprecatedWithReasonQuery,f as WhollyAddedComplexEnum,l as WhollyAddedDirective,m as WhollyAddedSimpleEnum,g as WhollyRemovedComplexEnum,_ as WhollyRemovedDirective,I as WhollyRemovedSimpleEnum,cn as __namedExportsOrder,sn as default};
