import{G as U}from"./GraphQLOperationViewer-5b49b7a3.js";import{g as t}from"./helpers-27f0ad66.js";import{a as s}from"./preprocess-850b9943.js";import"./jsx-runtime-beaa2906.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-5870ba89.js";import"./index-415bee12.js";import"./buildASTSchema-78ba14b3.js";import"./model-ef719c5f.js";const A={title:"Graph Api Viewer",component:U,parameters:{},argTypes:{},args:{source:{}}},e={args:{source:{},expandedDepth:100}},r={args:{source:s({source:t`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},n={args:{source:s({source:t`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0})}},a={args:{source:s({source:t`
type Query {
  user(id: ID!): User  
}

type User {
  id: ID!
  name: String!
  email: String!
  peer: User @deprecated
}
      `,circular:!0})}};var p,o,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,d,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,h,S;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: prepareGraphApiSchema({
      source: graphapi\`
type Query {
  user(id: ID!): User  
}

type User {
  id: ID!
  name: String!
  email: String!
  peer: User @deprecated
}
      \`,
      circular: true
    })
  }
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const M=["Test","Union","SelfCycled","Experiment"];export{a as Experiment,n as SelfCycled,e as Test,r as Union,M as __namedExportsOrder,A as default};
