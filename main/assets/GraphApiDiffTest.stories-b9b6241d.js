import{S as r,D as n}from"./ErrorBoundaryFallback-4397c758.js";import{G as Fr}from"./GraphQLOperationDiffViewer-44835b83.js";import{p as t}from"./preprocess-debb489c.js";import{g as e}from"./helpers-f21dd9b2.js";import"./jsx-runtime-beaa2906.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-535a766a.js";const Kr={title:"Graph Api Diff Viewer",component:Fr,parameters:{},argTypes:{},args:{source:{}}},o={args:{source:t({beforeSource:{},afterSource:{}}),layoutMode:r,diffMetaKey:n}},B=e`
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
  unchangedDeprecatedProperty: String @deprecated
  unchangedDeprecatedWithReasonProperty: String @deprecated(reason: "Reason!!!")
  unchangedNotDeprecatedProperty: String
  enum: Enum
  bugEnum: BugEnum
}
enum Enum {
  deprecatedValue
  unDeprecatedValue @deprecated
  deprecatedWithReasonValue
  unDeprecatedWithReasonValue @deprecated(reason: "Will be removed")
  changedDeprecationReasonProperty @deprecated(reason: "BEFORE")
  unchangedDeprecatedValue @deprecated
  unchangedDeprecatedWithReasonValue @deprecated(reason: "Reason!!!")
  unchangedNotDeprecatedValue
}
enum BugEnum {
  deprecated
}
`,U=e`
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
  unchangedDeprecatedProperty: String @deprecated
  unchangedDeprecatedWithReasonProperty: String @deprecated(reason: "Reason!!!")
  unchangedNotDeprecatedProperty: String
  enum: Enum
  bugEnum: BugEnum
}
enum Enum {
  deprecatedValue @deprecated
  unDeprecatedValue
  deprecatedWithReasonValue @deprecated(reason: "Will be removed")
  unDeprecatedWithReasonValue
  changedDeprecationReasonProperty @deprecated(reason: "AFTER")
  unchangedDeprecatedValue @deprecated
  unchangedDeprecatedWithReasonValue @deprecated(reason: "Reason!!!")
  unchangedNotDeprecatedValue
}
enum BugEnum {
  deprecated @deprecated
}
`,a={args:{source:t({beforeSource:B,afterSource:U}),layoutMode:r,diffMetaKey:n}},i={args:{source:t({beforeSource:B,afterSource:U}),operationPath:"unDeprecatedQuery",layoutMode:r,diffMetaKey:n}},c={args:{source:t({beforeSource:B,afterSource:U}),operationPath:"deprecatedWithReasonQuery",layoutMode:r,diffMetaKey:n}},s={args:{source:t({beforeSource:B,afterSource:U}),operationPath:"unDeprecatedWithReasonQuery",layoutMode:r,diffMetaKey:n}},u={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},p={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},d={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},hr=e`
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
`,Mr=e`
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
`,f={args:{source:t({beforeSource:hr,afterSource:Mr}),layoutMode:r,diffMetaKey:n}},D={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},y={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},I={args:{source:t({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:r,diffMetaKey:n}},S={args:{source:t({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:r,diffMetaKey:n}},E={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},m={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},g={args:{source:t({beforeSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:r,diffMetaKey:n}},_={args:{source:t({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:r,diffMetaKey:n}},l={args:{source:t({beforeSource:e`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:r,diffMetaKey:n}},F={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},h={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},M={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},v={args:{source:t({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:r,diffMetaKey:n}},T={args:{source:t({beforeSource:e`
        type Query {
          test: String
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:r,diffMetaKey:n}},N={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},A={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}},O={args:{source:t({beforeSource:e`
        type Query {
          test: [String]
        }
      `,afterSource:e`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:r,diffMetaKey:n}},Q={args:{source:t({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:r,diffMetaKey:n}},L={args:{source:t({beforeSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:r,diffMetaKey:n}},Y={args:{source:t({beforeSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:e`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:r,diffMetaKey:n}},K={args:{source:t({beforeSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:e`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:r,diffMetaKey:n}},b={args:{source:t({beforeSource:e`
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
      `}),layoutMode:r,diffMetaKey:n}};var R,W,V;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: {},
      afterSource: {}
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(V=(W=o.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var G,P,C;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(C=(P=a.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var x,w,H;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'unDeprecatedQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(H=(w=i.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var k,j,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'deprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,J,X;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    operationPath: 'unDeprecatedWithReasonQuery',
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(X=(J=s.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,te;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(te=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ae,ie;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,se,ue;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: complexEnumBefore,
      afterSource: complexEnumAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    diffMetaKey: DIFF_META_KEY
  }
}`,...(ue=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var pe,de,fe;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var De,ye,Ie;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Se,Ee,me;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(me=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:me.source}}};var ge,_e,le;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(le=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:le.source}}};var Fe,he,Me;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(he=E.parameters)==null?void 0:he.docs)==null?void 0:Me.source}}};var ve,Te,Ne;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Ae,Oe,Qe;g.parameters={...g.parameters,docs:{...(Ae=g.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Qe=(Oe=g.parameters)==null?void 0:Oe.docs)==null?void 0:Qe.source}}};var Le,Ye,Ke;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ke=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var be,Be,Ue;l.parameters={...l.parameters,docs:{...(be=l.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ue=(Be=l.parameters)==null?void 0:Be.docs)==null?void 0:Ue.source}}};var Re,We,Ve;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ve=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var Ge,Pe,Ce;h.parameters={...h.parameters,docs:{...(Ge=h.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ce=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var xe,we,He;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(we=M.parameters)==null?void 0:we.docs)==null?void 0:He.source}}};var ke,je,qe;v.parameters={...v.parameters,docs:{...(ke=v.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(qe=(je=v.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var ze,Je,Xe;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,$e,er;N.parameters={...N.parameters,docs:{...(Ze=N.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(er=($e=N.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};var rr,nr,tr;A.parameters={...A.parameters,docs:{...(rr=A.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(tr=(nr=A.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,ar,ir;O.parameters={...O.parameters,docs:{...(or=O.parameters)==null?void 0:or.docs,source:{originalSource:`{
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
}`,...(ir=(ar=O.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var cr,sr,ur;Q.parameters={...Q.parameters,docs:{...(cr=Q.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
}`,...(ur=(sr=Q.parameters)==null?void 0:sr.docs)==null?void 0:ur.source}}};var pr,dr,fr;L.parameters={...L.parameters,docs:{...(pr=L.parameters)==null?void 0:pr.docs,source:{originalSource:`{
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
}`,...(fr=(dr=L.parameters)==null?void 0:dr.docs)==null?void 0:fr.source}}};var Dr,yr,Ir;Y.parameters={...Y.parameters,docs:{...(Dr=Y.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
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
}`,...(Ir=(yr=Y.parameters)==null?void 0:yr.docs)==null?void 0:Ir.source}}};var Sr,Er,mr;K.parameters={...K.parameters,docs:{...(Sr=K.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(mr=(Er=K.parameters)==null?void 0:Er.docs)==null?void 0:mr.source}}};var gr,_r,lr;b.parameters={...b.parameters,docs:{...(gr=b.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(lr=(_r=b.parameters)==null?void 0:_r.docs)==null?void 0:lr.source}}};const br=["Test","DeprecatedQuery","UnDeprecatedQuery","DeprecatedWithReasonQuery","UnDeprecatedWithReasonQuery","SimpleEnum","WhollyAddedSimpleEnum","WhollyRemovedSimpleEnum","ComplexEnum","WhollyAddedComplexEnum","WhollyRemovedComplexEnum","WhollyAddedDirective","WhollyRemovedDirective","AppendDirective","PopDirective","AddedDirectiveLocation","RemovedDirectiveLocation","ReplacedDirectiveLocation","AddedDirectiveDescription","RemovedDirectiveDescription","ReplacedDirectiveDescription","StringToStringOrInt","StringToIntOrFloat","StringToStringOrEnum","StringToEnum1OrEnum2","ListToStringOrInt","DirectiveUsageAddedArgValue","DirectiveUsageRemovedArgValue","DirectiveUsageChangedArgValue","ChangedUnion","ChangedObjectiveUnion"];export{F as AddedDirectiveDescription,g as AddedDirectiveLocation,E as AppendDirective,b as ChangedObjectiveUnion,K as ChangedUnion,f as ComplexEnum,a as DeprecatedQuery,c as DeprecatedWithReasonQuery,Q as DirectiveUsageAddedArgValue,Y as DirectiveUsageChangedArgValue,L as DirectiveUsageRemovedArgValue,O as ListToStringOrInt,m as PopDirective,h as RemovedDirectiveDescription,_ as RemovedDirectiveLocation,M as ReplacedDirectiveDescription,l as ReplacedDirectiveLocation,u as SimpleEnum,A as StringToEnum1OrEnum2,T as StringToIntOrFloat,N as StringToStringOrEnum,v as StringToStringOrInt,o as Test,i as UnDeprecatedQuery,s as UnDeprecatedWithReasonQuery,D as WhollyAddedComplexEnum,I as WhollyAddedDirective,p as WhollyAddedSimpleEnum,y as WhollyRemovedComplexEnum,S as WhollyRemovedDirective,d as WhollyRemovedSimpleEnum,br as __namedExportsOrder,Kr as default};
