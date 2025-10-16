import{j as E}from"./_commonjs-dynamic-modules-6308e768.js";import{G as o}from"./GraphQLOperationViewer-53f2c593.js";import{g as p}from"./helpers-c39cf333.js";import{a as c}from"./preprocess-6450b3e3.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-c4199cc4.js";import"./index-415bee12.js";import"./buildASTSchema-e7ff8afa.js";import"./model-85c8217a.js";const M={title:"Graph Api Viewer",component:o,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},e={args:{source:{},expandedDepth:100}},r={args:{source:c({source:p`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},n={render:t=>{const a=c({source:p`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return E.jsx(o,{...t,source:a})},args:{}},s={render:t=>{const a=c({source:p`
type Query {
  user(id: ID!): User  
}

type User {
  id: ID!
  name: String!
  email: String!
  peer: User @deprecated
}
      `,circular:!0});return E.jsx(o,{...t,source:a})},args:{}};var i,u,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,y,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var l,S,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiSchema({
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
    });
    return <GraphQLOperationViewer {...args} source={processedSource} />;
  },
  args: {}
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var U,x,D;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiSchema({
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
    });
    return <GraphQLOperationViewer {...args} source={processedSource} />;
  },
  args: {}
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const O=["Test","Union","SelfCycled","Experiment"];export{s as Experiment,n as SelfCycled,e as Test,r as Union,O as __namedExportsOrder,M as default};
