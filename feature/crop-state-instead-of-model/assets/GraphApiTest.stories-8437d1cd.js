import{j as c}from"./_commonjs-dynamic-modules-6308e768.js";import{G as n}from"./GraphQLOperationViewer-2e880140.js";import{a as t}from"./preprocess-910c1116.js";import{g as s}from"./helpers-2f6d3fe7.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-c4d4c471.js";import"./index-415bee12.js";import"./buildASTSchema-4ed1da85.js";import"./model-a854a501.js";const k={title:"Graph Api Viewer",component:n,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},o={args:{source:{},expandedDepth:100}},a={args:{source:t({source:s`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},p={render:e=>{const r=t({source:s`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return c.jsx(n,{...e,source:r})},args:{}},i={render:e=>{const r=t({source:s`
        type Query {
          test: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return c.jsx(n,{...e,source:r})},args:{}},u={render:e=>{const r=t({source:s`
        type Query {
          test: Response
        }
        type Response {
          cycled: CycledEntity
          anotherCycled: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return c.jsx(n,{...e,source:r})},args:{}},d={render:e=>{const r=t({source:s`
        type Query {
          test: Response
        }
        type Response {
          cycled: CycledEntity
          anotherCycled: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return c.jsx(n,{...e,source:r})},args:{}},y={render:e=>{const r=t({source:s`
        type Query {
          first(arg: Arg): Resp
          second(anotherarg: Int! = 100): Boolean!
          third(a: String, b: Int, c: Boolean): String!
        }
        input Arg {
          firstArgField: String
          secondArgField: Int
        }
        type Resp {
          firstRespField: Boolean
          secondRespField: Float!
        }
      `,circular:!0});return c.jsx(n,{...e,source:r,operationType:"query",operationName:"first"})},args:{}};var l,g,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var S,h,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var E,f,Q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(Q=(f=p.parameters)==null?void 0:f.docs)==null?void 0:Q.source}}};var R,A,G;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiSchema({
      source: graphapi\`
        type Query {
          test: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      \`,
      circular: true
    });
    return <GraphQLOperationViewer {...args} source={processedSource} />;
  },
  args: {}
}`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var I,T,w;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiSchema({
      source: graphapi\`
        type Query {
          test: Response
        }
        type Response {
          cycled: CycledEntity
          anotherCycled: CycledEntity
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
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var x,v,B;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiSchema({
      source: graphapi\`
        type Query {
          test: Response
        }
        type Response {
          cycled: CycledEntity
          anotherCycled: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      \`,
      circular: true
    });
    return <GraphQLOperationViewer {...args} source={processedSource} />;
  },
  args: {}
}`,...(B=(v=d.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var F,O,j;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const processedSource = prepareGraphApiSchema({
      source: graphapi\`
        type Query {
          first(arg: Arg): Resp
          second(anotherarg: Int! = 100): Boolean!
          third(a: String, b: Int, c: Boolean): String!
        }
        input Arg {
          firstArgField: String
          secondArgField: Int
        }
        type Resp {
          firstRespField: Boolean
          secondRespField: Float!
        }
      \`,
      circular: true
    });
    return <GraphQLOperationViewer {...args} source={processedSource} operationType='query' operationName='first' />;
  },
  args: {}
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const z=["Test","Union","SelfCycled","SelfCycledInput","TwoBranchesSelfCycled","TwoBranchesSelfCycledInput","SeveralOps"];export{p as SelfCycled,i as SelfCycledInput,y as SeveralOps,o as Test,u as TwoBranchesSelfCycled,d as TwoBranchesSelfCycledInput,a as Union,z as __namedExportsOrder,k as default};
