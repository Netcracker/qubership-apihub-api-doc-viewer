import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DRGMQe9r.js";import{Gr as ee,Wr as n,nn as te,rn as ne,un as re}from"./DiffBadge-U28InHZ_.js";import{n as ie,t as r}from"./GraphQLOperationDiffViewer-P7TU4ACL.js";import{o as i,r as ae}from"./preprocess-BN4irEAr.js";import{n as a,r as oe,t as o}from"./helpers-DGz7Lx1l.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{re(),ie(),ee(),ae(),oe(),s=t(),c={title:`GraphQL Operation Diff Viewer/Test Stories`,component:r,parameters:{},argTypes:{},args:{source:{}}},l={diffsMetaKey:ne,aggregatedDiffsMetaKey:te},u={args:{source:i({beforeSource:{},afterSource:{}}),layoutMode:n,metaKeys:l}},d=a`
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
`,f=a`
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
`,p={args:{source:i({beforeSource:d,afterSource:f}),layoutMode:n,metaKeys:l}},m={args:{source:i({beforeSource:d,afterSource:f}),operationType:`query`,operationName:`unDeprecatedQuery`,layoutMode:n,metaKeys:l}},h={args:{source:i({beforeSource:d,afterSource:f}),operationType:`query`,operationName:`deprecatedWithReasonQuery`,layoutMode:n,metaKeys:l}},g={args:{source:i({beforeSource:d,afterSource:f}),operationType:`query`,operationName:`unDeprecatedWithReasonQuery`,layoutMode:n,metaKeys:l}},_={args:{source:i({beforeSource:a`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
          fourth
        }
      `,afterSource:a`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          THIRD
        }
      `}),layoutMode:n,metaKeys:l}},v={args:{source:i({beforeSource:a`
        type Query {
          test: String
        }
      `,afterSource:a`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
        }
      `}),layoutMode:n,metaKeys:l}},y={args:{source:i({beforeSource:a`
        type Query {
          test: Enum
        }
        enum Enum {
          first
          second
          third
        }
      `,afterSource:a`
        type Query {
          test: String
        }
      `}),layoutMode:n,metaKeys:l}},b=a`
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
`,x=a`
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
`,S={args:{source:i({beforeSource:b,afterSource:x}),layoutMode:n,metaKeys:l}},C={args:{source:i({beforeSource:a`
        type Query {
          test: String
        }
      `,afterSource:a`
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
      `}),layoutMode:n,metaKeys:l}},w={args:{source:i({beforeSource:a`
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
      `,afterSource:a`
        type Query {
          test: String
        }
      `}),layoutMode:n,metaKeys:l}},T={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},E={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String
        }
      `}),layoutMode:n,metaKeys:l}},D={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo @bar
        }
      `}),layoutMode:n,metaKeys:l}},O={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @foo @bar
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION
        directive @bar on FIELD_DEFINITION
        type Query {
          test: String @bar
        }
      `}),layoutMode:n,metaKeys:l}},k={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},A={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},j={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION | ARGUMENT_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},M={args:{source:i({beforeSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},N={args:{source:i({beforeSource:a`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},P={args:{source:i({beforeSource:a`
        "Directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        "CHANGED directive description"
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},F={args:{source:i({beforeSource:a`
        type Query {
          test: String
        }
      `,afterSource:a`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:n,metaKeys:l}},I={args:{source:i({beforeSource:a`
        type Query {
          test: String
        }
      `,afterSource:a`
        type Query {
          test: Union
        }
        union Union = Int | Float
      `}),layoutMode:n,metaKeys:l}},L={args:{source:i({beforeSource:a`
        type Query {
          test: String
        }
      `,afterSource:a`
        type Query {
          test: Union
        }
        union Union = String | Enum
        enum Enum {
          first
          second
        }
      `}),layoutMode:n,metaKeys:l}},R={args:{source:i({beforeSource:a`
        type Query {
          test: String
        }
      `,afterSource:a`
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
      `}),layoutMode:n,metaKeys:l}},z={args:{source:i({beforeSource:a`
        type Query {
          test: [String]
        }
      `,afterSource:a`
        type Query {
          test: Union
        }
        union Union = String | Int
      `}),layoutMode:n,metaKeys:l}},B={args:{source:i({beforeSource:a`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `,afterSource:a`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:n,metaKeys:l}},V={args:{source:i({beforeSource:a`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:a`
        directive @foo(val: String) on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `}),layoutMode:n,metaKeys:l}},H={args:{source:i({beforeSource:a`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "Before")
        }
      `,afterSource:a`
        directive @foo(val: String = "Default") on FIELD_DEFINITION
        type Query {
          test: String @foo(val: "After")
        }
      `}),layoutMode:n,metaKeys:l}},U={args:{source:i({beforeSource:a`
        type Query {
          test: Primitive
        }
        union Primitive = String | Int | Float | Boolean
      `,afterSource:a`
        type Query {
          test: Primitive
        }
        union Primitive = ID | String | Int | Float | Boolean
      `}),layoutMode:n,metaKeys:l}},W={args:{source:i({beforeSource:a`
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
      `,afterSource:a`
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
      `}),layoutMode:n,metaKeys:l}},G={render:e=>{let t=i({beforeSource:o(`
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
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`,operationType:`query`,operationName:`companyCount`}},K={render:e=>{let t=i({beforeSource:o(`
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
          "Small soft red-purple berry"
          RASPBERRY
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
          "Blueberry is a blue berry"
          BLUEBERRY
          STRAWBERRY
        }
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`,operationType:`query`,operationName:`companyCount`}},q={render:e=>{let t=i({beforeSource:o(`
        directive @foo on FIELD_DEFINITION
        type Query {
          test: String @foo
        }
      `),afterSource:o(`
        directive @foo on FIELD_DEFINITION | ENUM_VALUE
        type Query {
          test: String @foo
        }
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`}},J={render:e=>{let t=i({beforeSource:o(`
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
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`}},Y={render:e=>{let t=i({beforeSource:o(`
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
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`}},X={render:e=>{let t=i({beforeSource:o(`
        type Query {
          first: Int
          second: String @deprecated(reason: "Some reason")
        }
      `),afterSource:o(`
        type Query {
          first: Int
        }
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`,operationName:`second`,operationType:`query`}},Z={render:e=>{let t=i({beforeSource:o(`
        type Query {
          first: Int
        }
      `),afterSource:o(`
        type Query {
          first: Int
          second: String @deprecated(reason: "Some reason")
        }
      `),circular:!0});return(0,s.jsx)(r,{...e,source:t})},args:{expandedDepth:2,metaKeys:l,layoutMode:`side-by-side-diffs`,operationName:`second`,operationType:`query`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: {},
      afterSource: {}
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: deprecationBefore,
      afterSource: deprecationAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiDiffSchema({
      beforeSource: complexEnumBefore,
      afterSource: complexEnumAfter
    }),
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
          "Small soft red-purple berry"
          RASPBERRY
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
          "Blueberry is a blue berry"
          BLUEBERRY
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=`Test.DeprecatedQuery.UnDeprecatedQuery.DeprecatedWithReasonQuery.UnDeprecatedWithReasonQuery.SimpleEnum.WhollyAddedSimpleEnum.WhollyRemovedSimpleEnum.ComplexEnum.WhollyAddedComplexEnum.WhollyRemovedComplexEnum.WhollyAddedDirective.WhollyRemovedDirective.AppendDirective.PopDirective.AddedDirectiveLocation.RemovedDirectiveLocation.ReplacedDirectiveLocation.AddedDirectiveDescription.RemovedDirectiveDescription.ReplacedDirectiveDescription.StringToStringOrInt.StringToIntOrFloat.StringToStringOrEnum.StringToEnum1OrEnum2.ListToStringOrInt.DirectiveUsageAddedArgValue.DirectiveUsageRemovedArgValue.DirectiveUsageChangedArgValue.ChangedUnion.ChangedObjectiveUnion.TypeToInput.EnumChanges.DirectiveUsageLocationsChanged.ChangedCircularMethods.ChangedCircularProperties.BugWithDeprecationReasonDiffInWhollyRemoved.BugWithDeprecationReasonDiffInWhollyAdded`.split(`.`)})))()}$();export{M as AddedDirectiveDescription,k as AddedDirectiveLocation,D as AppendDirective,Z as BugWithDeprecationReasonDiffInWhollyAdded,X as BugWithDeprecationReasonDiffInWhollyRemoved,J as ChangedCircularMethods,Y as ChangedCircularProperties,W as ChangedObjectiveUnion,U as ChangedUnion,S as ComplexEnum,p as DeprecatedQuery,h as DeprecatedWithReasonQuery,B as DirectiveUsageAddedArgValue,H as DirectiveUsageChangedArgValue,q as DirectiveUsageLocationsChanged,V as DirectiveUsageRemovedArgValue,K as EnumChanges,z as ListToStringOrInt,O as PopDirective,N as RemovedDirectiveDescription,A as RemovedDirectiveLocation,P as ReplacedDirectiveDescription,j as ReplacedDirectiveLocation,_ as SimpleEnum,R as StringToEnum1OrEnum2,I as StringToIntOrFloat,L as StringToStringOrEnum,F as StringToStringOrInt,u as Test,G as TypeToInput,m as UnDeprecatedQuery,g as UnDeprecatedWithReasonQuery,C as WhollyAddedComplexEnum,T as WhollyAddedDirective,v as WhollyAddedSimpleEnum,w as WhollyRemovedComplexEnum,E as WhollyRemovedDirective,y as WhollyRemovedSimpleEnum,Q as __namedExportsOrder,c as default};