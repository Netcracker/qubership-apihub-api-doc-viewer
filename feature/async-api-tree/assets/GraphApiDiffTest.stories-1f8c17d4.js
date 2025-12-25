import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{S as t,D as rn,a as nn}from"./ExpandingCaret-e106a777.js";import{G as i}from"./GraphQLOperationDiffViewer-340b0a30.js";import{p as r}from"./preprocess-a40bf68d.js";import{g as e,b as o}from"./helpers-b70a4a12.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-8e3c4540.js";import"./NestingIndicatorTitleRow-2dfb2f5c.js";import"./model-b1f28616.js";const In={title:"Graph Api Diff Viewer",component:i,parameters:{},argTypes:{},args:{source:{}}},n={diffsMetaKey:rn,aggregatedDiffsMetaKey:nn},p={args:{source:r({beforeSource:{},afterSource:{}}),layoutMode:t,metaKeys:n}},H=e`
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
`,u={args:{source:r({beforeSource:H,afterSource:k}),layoutMode:t,metaKeys:n}},d={args:{source:r({beforeSource:H,afterSource:k}),operationType:"query",operationName:"unDeprecatedQuery",layoutMode:t,metaKeys:n}},y={args:{source:r({beforeSource:H,afterSource:k}),operationType:"query",operationName:"deprecatedWithReasonQuery",layoutMode:t,metaKeys:n}},S={args:{source:r({beforeSource:H,afterSource:k}),operationType:"query",operationName:"unDeprecatedWithReasonQuery",layoutMode:t,metaKeys:n}},D={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},tn=e`
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
`,on=e`
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
`,E={args:{source:r({beforeSource:tn,afterSource:on}),layoutMode:t,metaKeys:n}},f={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},h={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},F={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},N={args:{source:r({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,metaKeys:n}},v={args:{source:r({beforeSource:e`
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
      `}),layoutMode:t,metaKeys:n}},b={args:{source:r({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:t,metaKeys:n}},L={args:{source:r({beforeSource:e`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs",operationType:"query",operationName:"companyCount"}},V={render:a=>{const s=r({beforeSource:o(`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs",operationType:"query",operationName:"companyCount"}},P={render:a=>{const s=r({beforeSource:o(`
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
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs"}},q={render:a=>{const s=r({beforeSource:o(`
        type Query {
          first: Int
          second: String @deprecated(reason: "Some reason")
        }
      `),afterSource:o(`
        type Query {
          first: Int
        }
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs",operationName:"second",operationType:"query"}},j={render:a=>{const s=r({beforeSource:o(`
        type Query {
          first: Int
        }
      `),afterSource:o(`
        type Query {
          first: Int
          second: String @deprecated(reason: "Some reason")
        }
      `),circular:!0});return c.jsx(i,{...a,source:s})},args:{expandedDepth:2,metaKeys:n,layoutMode:"side-by-side-diffs",operationName:"second",operationType:"query"}};var z,J,X;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: {},
      afterSource: {}
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(X=(J=p.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,te;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(te=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ae,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ce,pe;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,ye;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ye.source}}};var Se,De,me;m.parameters={...m.parameters,docs:{...(Se=m.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(me=(De=m.parameters)==null?void 0:De.docs)==null?void 0:me.source}}};var Ie,Ee,fe;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(fe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};var ge,le,_e;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: complexEnumBefore,
      afterSource: complexEnumAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...(_e=(le=E.parameters)==null?void 0:le.docs)==null?void 0:_e.source}}};var he,Fe,Ae;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ae=(Fe=f.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var Ne,ve,Te;g.parameters={...g.parameters,docs:{...(Ne=g.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Te=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Me,Oe,Qe;l.parameters={...l.parameters,docs:{...(Me=l.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Qe=(Oe=l.parameters)==null?void 0:Oe.docs)==null?void 0:Qe.source}}};var be,Le,Re;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Re=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var Ke,Ye,Be;h.parameters={...h.parameters,docs:{...(Ke=h.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Be=(Ye=h.parameters)==null?void 0:Ye.docs)==null?void 0:Be.source}}};var Ce,Ue,Ge;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var We,Ve,Pe;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Pe=(Ve=A.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var xe,we,qe;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(qe=(we=N.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};var je,He,ke;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(ke=(He=v.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var ze,Je,Xe;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,$e,er;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(er=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};var rr,nr,tr;O.parameters={...O.parameters,docs:{...(rr=O.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(tr=(nr=O.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,ar,sr;Q.parameters={...Q.parameters,docs:{...(or=Q.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(sr=(ar=Q.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var ir,cr,pr;b.parameters={...b.parameters,docs:{...(ir=b.parameters)==null?void 0:ir.docs,source:{originalSource:`{
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
}`,...(pr=(cr=b.parameters)==null?void 0:cr.docs)==null?void 0:pr.source}}};var ur,dr,yr;L.parameters={...L.parameters,docs:{...(ur=L.parameters)==null?void 0:ur.docs,source:{originalSource:`{
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
}`,...(yr=(dr=L.parameters)==null?void 0:dr.docs)==null?void 0:yr.source}}};var Sr,Dr,mr;R.parameters={...R.parameters,docs:{...(Sr=R.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(mr=(Dr=R.parameters)==null?void 0:Dr.docs)==null?void 0:mr.source}}};var Ir,Er,fr;K.parameters={...K.parameters,docs:{...(Ir=K.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
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
}`,...(fr=(Er=K.parameters)==null?void 0:Er.docs)==null?void 0:fr.source}}};var gr,lr,_r;Y.parameters={...Y.parameters,docs:{...(gr=Y.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(_r=(lr=Y.parameters)==null?void 0:lr.docs)==null?void 0:_r.source}}};var hr,Fr,Ar;B.parameters={...B.parameters,docs:{...(hr=B.parameters)==null?void 0:hr.docs,source:{originalSource:`{
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
}`,...(Ar=(Fr=B.parameters)==null?void 0:Fr.docs)==null?void 0:Ar.source}}};var Nr,vr,Tr;C.parameters={...C.parameters,docs:{...(Nr=C.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
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
}`,...(Tr=(vr=C.parameters)==null?void 0:vr.docs)==null?void 0:Tr.source}}};var Mr,Or,Qr;U.parameters={...U.parameters,docs:{...(Mr=U.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
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
}`,...(Qr=(Or=U.parameters)==null?void 0:Or.docs)==null?void 0:Qr.source}}};var br,Lr,Rr;G.parameters={...G.parameters,docs:{...(br=G.parameters)==null?void 0:br.docs,source:{originalSource:`{
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
}`,...(Rr=(Lr=G.parameters)==null?void 0:Lr.docs)==null?void 0:Rr.source}}};var Kr,Yr,Br;W.parameters={...W.parameters,docs:{...(Kr=W.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
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
}`,...(Br=(Yr=W.parameters)==null?void 0:Yr.docs)==null?void 0:Br.source}}};var Cr,Ur,Gr;V.parameters={...V.parameters,docs:{...(Cr=V.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
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
}`,...(Gr=(Ur=V.parameters)==null?void 0:Ur.docs)==null?void 0:Gr.source}}};var Wr,Vr,Pr;P.parameters={...P.parameters,docs:{...(Wr=P.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
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
}`,...(Pr=(Vr=P.parameters)==null?void 0:Vr.docs)==null?void 0:Pr.source}}};var xr,wr,qr;x.parameters={...x.parameters,docs:{...(xr=x.parameters)==null?void 0:xr.docs,source:{originalSource:`{
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
}`,...(qr=(wr=x.parameters)==null?void 0:wr.docs)==null?void 0:qr.source}}};var jr,Hr,kr;w.parameters={...w.parameters,docs:{...(jr=w.parameters)==null?void 0:jr.docs,source:{originalSource:`{
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
}`,...(kr=(Hr=w.parameters)==null?void 0:Hr.docs)==null?void 0:kr.source}}};var zr,Jr,Xr;q.parameters={...q.parameters,docs:{...(zr=q.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        type Query {
          first: Int
          second: String @deprecated(reason: "Some reason")
        }
      \`),
      afterSource: buildGraphApi(\`
        type Query {
          first: Int
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
    operationName: 'second',
    operationType: 'query'
  }
}`,...(Xr=(Jr=q.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var Zr,$r,en;j.parameters={...j.parameters,docs:{...(Zr=j.parameters)==null?void 0:Zr.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiDiffSchema({
      beforeSource: buildGraphApi(\`
        type Query {
          first: Int
        }
      \`),
      afterSource: buildGraphApi(\`
        type Query {
          first: Int
          second: String @deprecated(reason: "Some reason")
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
    operationName: 'second',
    operationType: 'query'
  }
}`,...(en=($r=j.parameters)==null?void 0:$r.docs)==null?void 0:en.source}}};const En=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion","TypeToInput","EnumChanges","DirectiveUsageLocationsChanged","ChangedCircularMethods","ChangedCircularProperties","BugWithDeprecationReasonDiffInWhollyRemoved","BugWithDeprecationReasonDiffInWhollyAdded"];export{T as AddedDirectiveDescription,A as AddedDirectiveLocation,h as AppendDirective,j as BugWithDeprecationReasonDiffInWhollyAdded,q as BugWithDeprecationReasonDiffInWhollyRemoved,x as ChangedCircularMethods,w as ChangedCircularProperties,G as ChangedObjectiveUnion,U as ChangedUnion,E as ComplexEnum,u as DeprecatedQuery,y as DeprecatedWithReasonQuery,Y as DirectiveUsageAddedArgValue,C as DirectiveUsageChangedArgValue,P as DirectiveUsageLocationsChanged,B as DirectiveUsageRemovedArgValue,V as EnumChanges,K as ListToStringOrInt,F as PopDirective,M as RemovedDirectiveDescription,N as RemovedDirectiveLocation,O as ReplacedDirectiveDescription,v as ReplacedDirectiveLocation,D as SimpleEnum,R as StringToEnum1OrEnum2,b as StringToIntOrFloat,L as StringToStringOrEnum,Q as StringToStringOrInt,p as Test,W as TypeToInput,d as UnDeprecatedQuery,S as UnDeprecatedWithReasonQuery,f as WhollyAddedComplexEnum,l as WhollyAddedDirective,m as WhollyAddedSimpleEnum,g as WhollyRemovedComplexEnum,_ as WhollyRemovedDirective,I as WhollyRemovedSimpleEnum,En as __namedExportsOrder,In as default};
