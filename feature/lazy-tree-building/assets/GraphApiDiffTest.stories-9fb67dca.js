import{j as br}from"./_commonjs-dynamic-modules-6308e768.js";import{S as t,D as r}from"./ErrorBoundaryFallback-1b53b0f5.js";import{G as C}from"./GraphQLOperationDiffViewer-3804d0a8.js";import{p as n}from"./preprocess-a80a6175.js";import{g as e,b as U}from"./helpers-96e3b9e2.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-a0ce1388.js";import"./model-2d31871b.js";const jr={title:"Graph Api Diff Viewer",component:C,parameters:{},argTypes:{},args:{source:{}}},o={args:{source:n({beforeSource:{},afterSource:{}}),layoutMode:t,diffMetaKey:r}},P=e`
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
`,a={args:{source:n({beforeSource:P,afterSource:W}),layoutMode:t,diffMetaKey:r}},i={args:{source:n({beforeSource:P,afterSource:W}),operationPath:"unDeprecatedQuery",layoutMode:t,diffMetaKey:r}},c={args:{source:n({beforeSource:P,afterSource:W}),operationPath:"deprecatedWithReasonQuery",layoutMode:t,diffMetaKey:r}},s={args:{source:n({beforeSource:P,afterSource:W}),operationPath:"unDeprecatedWithReasonQuery",layoutMode:t,diffMetaKey:r}},p={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},u={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},d={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},Kr=e`
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
`,f={args:{source:n({beforeSource:Kr,afterSource:Br}),layoutMode:t,diffMetaKey:r}},y={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},D={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},I={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,diffMetaKey:r}},S={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:t,diffMetaKey:r}},E={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},m={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},g={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,diffMetaKey:r}},_={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,diffMetaKey:r}},l={args:{source:n({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,diffMetaKey:r}},F={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},h={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},M={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},A={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:t,diffMetaKey:r}},v={args:{source:n({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:t,diffMetaKey:r}},N={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},T={args:{source:n({beforeSource:e`
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
      `}),layoutMode:t,diffMetaKey:r}},O={args:{source:n({beforeSource:e`
        type Query {
          test: [String]
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:t,diffMetaKey:r}},Q={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:t,diffMetaKey:r}},L={args:{source:n({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:t,diffMetaKey:r}},Y={args:{source:n({beforeSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:t,diffMetaKey:r}},R={args:{source:n({beforeSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:t,diffMetaKey:r}},b={args:{source:n({beforeSource:e`
        type Query {
          test: Entity
        }
        union Entity = A | B
        type A {
          id: ID!
          name: String
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
          id: ID!
          name: String
        }
        type B {
          key: ID!
          title: String
        }
        type C {
          login: ID!
          email: String
        }
      `}),layoutMode:t,diffMetaKey:r}},K={render:G=>{const V=n({beforeSource:U(`
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
      `),circular:!0});return br.jsx(C,{...G,source:V})},args:{expandedDepth:2,diffMetaKey:r,layoutMode:"side-by-side-diffs",operationPath:"companyCount"}},B={render:G=>{const V=n({beforeSource:U(`
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
      `),circular:!0});return br.jsx(C,{...G,source:V})},args:{expandedDepth:2,diffMetaKey:r,layoutMode:"side-by-side-diffs",operationPath:"companyCount"}};var x,w,H;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: {},
      afterSource: {}
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(H=(w=o.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var j,k,q;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(q=(k=a.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,J,X;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'unDeprecatedQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(X=(J=i.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'deprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,te;s.parameters={...s.parameters,docs:{...(re=s.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'unDeprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(te=(ne=s.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ae,ie;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,se,pe;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(pe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:pe.source}}};var ue,de,fe;d.parameters={...d.parameters,docs:{...(ue=d.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(fe=(de=d.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ye,De,Ie;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: complexEnumBefore,
      afterSource: complexEnumAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Ie=(De=f.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Se,Ee,me;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(me=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:me.source}}};var ge,_e,le;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(le=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:le.source}}};var Fe,he,Me;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Me=(he=I.parameters)==null?void 0:he.docs)==null?void 0:Me.source}}};var Ae,ve,Ne;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Ne=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};var Te,Oe,Qe;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Qe=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Qe.source}}};var Le,Ye,Re;m.parameters={...m.parameters,docs:{...(Le=m.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Re=(Ye=m.parameters)==null?void 0:Ye.docs)==null?void 0:Re.source}}};var be,Ke,Be;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Be=(Ke=g.parameters)==null?void 0:Ke.docs)==null?void 0:Be.source}}};var Ue,Pe,We;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(We=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Ge,Ve,Ce;l.parameters={...l.parameters,docs:{...(Ge=l.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Ce=(Ve=l.parameters)==null?void 0:Ve.docs)==null?void 0:Ce.source}}};var xe,we,He;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(He=(we=F.parameters)==null?void 0:we.docs)==null?void 0:He.source}}};var je,ke,qe;h.parameters={...h.parameters,docs:{...(je=h.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(qe=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var ze,Je,Xe;M.parameters={...M.parameters,docs:{...(ze=M.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Xe=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,$e,er;A.parameters={...A.parameters,docs:{...(Ze=A.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(er=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};var rr,nr,tr;v.parameters={...v.parameters,docs:{...(rr=v.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(tr=(nr=v.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,ar,ir;N.parameters={...N.parameters,docs:{...(or=N.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(ir=(ar=N.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var cr,sr,pr;T.parameters={...T.parameters,docs:{...(cr=T.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(pr=(sr=T.parameters)==null?void 0:sr.docs)==null?void 0:pr.source}}};var ur,dr,fr;O.parameters={...O.parameters,docs:{...(ur=O.parameters)==null?void 0:ur.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(fr=(dr=O.parameters)==null?void 0:dr.docs)==null?void 0:fr.source}}};var yr,Dr,Ir;Q.parameters={...Q.parameters,docs:{...(yr=Q.parameters)==null?void 0:yr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Ir=(Dr=Q.parameters)==null?void 0:Dr.docs)==null?void 0:Ir.source}}};var Sr,Er,mr;L.parameters={...L.parameters,docs:{...(Sr=L.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(mr=(Er=L.parameters)==null?void 0:Er.docs)==null?void 0:mr.source}}};var gr,_r,lr;Y.parameters={...Y.parameters,docs:{...(gr=Y.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(lr=(_r=Y.parameters)==null?void 0:_r.docs)==null?void 0:lr.source}}};var Fr,hr,Mr;R.parameters={...R.parameters,docs:{...(Fr=R.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Mr=(hr=R.parameters)==null?void 0:hr.docs)==null?void 0:Mr.source}}};var Ar,vr,Nr;b.parameters={...b.parameters,docs:{...(Ar=b.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: graphapi\`
        type Query {
          test: Entity
        }
        union Entity = A | B
        type A {
          id: ID!
          name: String
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
          id: ID!
          name: String
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
    diffMetaKey: DIFF_META_KEY
  }
}`,...(Nr=(vr=b.parameters)==null?void 0:vr.docs)==null?void 0:Nr.source}}};var Tr,Or,Qr;K.parameters={...K.parameters,docs:{...(Tr=K.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY,
    layoutMode: 'side-by-side-diffs',
    operationPath: 'companyCount'
  }
}`,...(Qr=(Or=K.parameters)==null?void 0:Or.docs)==null?void 0:Qr.source}}};var Lr,Yr,Rr;B.parameters={...B.parameters,docs:{...(Lr=B.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
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
    diffMetaKey: DIFF_META_KEY,
    layoutMode: 'side-by-side-diffs',
    operationPath: 'companyCount'
  }
}`,...(Rr=(Yr=B.parameters)==null?void 0:Yr.docs)==null?void 0:Rr.source}}};const kr=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion","TypeToInput","EnumChanges"];export{F as AddedDirectiveDescription,g as AddedDirectiveLocation,E as AppendDirective,b as ChangedObjectiveUnion,R as ChangedUnion,f as ComplexEnum,a as DeprecatedQuery,c as DeprecatedWithReasonQuery,Q as DirectiveUsageAddedArgValue,Y as DirectiveUsageChangedArgValue,L as DirectiveUsageRemovedArgValue,B as EnumChanges,O as ListToStringOrInt,m as PopDirective,h as RemovedDirectiveDescription,_ as RemovedDirectiveLocation,M as ReplacedDirectiveDescription,l as ReplacedDirectiveLocation,p as SimpleEnum,T as StringToEnum1OrEnum2,v as StringToIntOrFloat,N as StringToStringOrEnum,A as StringToStringOrInt,o as Test,K as TypeToInput,i as UnDeprecatedQuery,s as UnDeprecatedWithReasonQuery,y as WhollyAddedComplexEnum,I as WhollyAddedDirective,u as WhollyAddedSimpleEnum,D as WhollyRemovedComplexEnum,S as WhollyRemovedDirective,d as WhollyRemovedSimpleEnum,kr as __namedExportsOrder,jr as default};
