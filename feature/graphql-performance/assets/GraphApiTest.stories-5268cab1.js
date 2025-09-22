import{G as h}from"./GraphQLOperationViewer-50089edc.js";import{g as o}from"./helpers-a71e9c26.js";import{a as t}from"./preprocess-ac95b6f1.js";import"./jsx-runtime-beaa2906.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-95f64865.js";import"./index-415bee12.js";import"./buildASTSchema-7b63fb9b.js";import"./model-2adec116.js";const F={title:"Graph Api Viewer",component:h,parameters:{},argTypes:{},args:{source:{}}},e={args:{source:{},expandedDepth:100}},n={args:{source:t({source:o`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},p={args:{source:t({source:o`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0})}},r={args:{source:t({source:o`
      directive @foo on ARGUMENT_DEFINITION | FIELD_DEFINITION | INPUT_FIELD_DEFINITION
      directive @bar on ARGUMENT_DEFINITION | FIELD_DEFINITION | INPUT_FIELD_DEFINITION

      type Query {
        todo(
          arg11: MyInput
          arg12: MyInput!
          "Description"
          arg13: MyInput
          "Description"
          arg14: MyInput!
          arg21: [MyInput]
          arg22: [MyInput!]
          arg23: [MyInput]!
          arg24: [MyInput!]!
          arg31: MyInput @foo
          arg32: MyInput! @foo
          arg33: MyInput @bar
          arg34: MyInput @bar
          arg35: MyInput @foo @bar
          arg36: MyInput! @foo @bar
          arg37: MyInput @deprecated
          arg38: MyInput @deprecated(reason: "AAA")
          arg39: MyInput @deprecated(reason: "BBBBBBB")
        ): MyType!

        todo2: MyUnion    
      }

      type MyType {
        a: String!
        b: Int!
        c: Boolean
        method11: MyType
        method12: MyType!
        "Description"
        method13: MyType
        "Description"
        method14: MyType!
        method21: [MyType]
        method22: [MyType!]
        method23: [MyType]!
        method24: [MyType!]!
        method31: MyType @foo
        method32: MyType! @foo
        method33: MyType @bar
        method34: MyType @bar
        method35: MyType @foo @bar
        method36: MyType! @foo @bar
        method37: MyType @deprecated
        method38: MyType @deprecated(reason: "AAA")
        method39: MyType @deprecated(reason: "BBBBBBB")
        method4: MyUnion
      }

      input MyInput {
        a: String!
        b: Int!
        c: Boolean
        prop11: MyInput
        prop12: MyInput!
        "Description"
        prop13: MyInput
        "Description"
        prop14: MyInput!
        prop21: [MyInput]
        prop22: [MyInput!]
        prop23: [MyInput]!
        prop24: [MyInput!]!
        prop31: MyInput @foo
        prop32: MyInput! @foo
        prop33: MyInput @bar
        prop34: MyInput @bar
        prop35: MyInput @foo @bar
        prop36: MyInput! @foo @bar
        prop37: MyInput @deprecated
        prop38: MyInput @deprecated(reason: "AAA")
        prop39: MyInput @deprecated(reason: "BBBBBBB")
        prop4: MyUnion
      }

      union MyUnion = MyType | MyInput
      `,circular:!0})}};var y,a,I;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(I=(a=e.parameters)==null?void 0:a.docs)==null?void 0:I.source}}};var M,u,d;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiSchema({
      source: graphapi\`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      \`
    })
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,s,i;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiSchema({
      source: graphapi\`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      \`,
      circular: true
    })
  }
}`,...(i=(s=p.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,T,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiSchema({
      source: graphapi\`
      directive @foo on ARGUMENT_DEFINITION | FIELD_DEFINITION | INPUT_FIELD_DEFINITION
      directive @bar on ARGUMENT_DEFINITION | FIELD_DEFINITION | INPUT_FIELD_DEFINITION

      type Query {
        todo(
          arg11: MyInput
          arg12: MyInput!
          "Description"
          arg13: MyInput
          "Description"
          arg14: MyInput!
          arg21: [MyInput]
          arg22: [MyInput!]
          arg23: [MyInput]!
          arg24: [MyInput!]!
          arg31: MyInput @foo
          arg32: MyInput! @foo
          arg33: MyInput @bar
          arg34: MyInput @bar
          arg35: MyInput @foo @bar
          arg36: MyInput! @foo @bar
          arg37: MyInput @deprecated
          arg38: MyInput @deprecated(reason: "AAA")
          arg39: MyInput @deprecated(reason: "BBBBBBB")
        ): MyType!

        todo2: MyUnion    
      }

      type MyType {
        a: String!
        b: Int!
        c: Boolean
        method11: MyType
        method12: MyType!
        "Description"
        method13: MyType
        "Description"
        method14: MyType!
        method21: [MyType]
        method22: [MyType!]
        method23: [MyType]!
        method24: [MyType!]!
        method31: MyType @foo
        method32: MyType! @foo
        method33: MyType @bar
        method34: MyType @bar
        method35: MyType @foo @bar
        method36: MyType! @foo @bar
        method37: MyType @deprecated
        method38: MyType @deprecated(reason: "AAA")
        method39: MyType @deprecated(reason: "BBBBBBB")
        method4: MyUnion
      }

      input MyInput {
        a: String!
        b: Int!
        c: Boolean
        prop11: MyInput
        prop12: MyInput!
        "Description"
        prop13: MyInput
        "Description"
        prop14: MyInput!
        prop21: [MyInput]
        prop22: [MyInput!]
        prop23: [MyInput]!
        prop24: [MyInput!]!
        prop31: MyInput @foo
        prop32: MyInput! @foo
        prop33: MyInput @bar
        prop34: MyInput @bar
        prop35: MyInput @foo @bar
        prop36: MyInput! @foo @bar
        prop37: MyInput @deprecated
        prop38: MyInput @deprecated(reason: "AAA")
        prop39: MyInput @deprecated(reason: "BBBBBBB")
        prop4: MyUnion
      }

      union MyUnion = MyType | MyInput
      \`,
      circular: true
    })
  }
}`,...(g=(T=r.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const S=["Test","Union","SelfCycled","PerformanceResearch"];export{r as PerformanceResearch,p as SelfCycled,e as Test,n as Union,S as __namedExportsOrder,F as default};
