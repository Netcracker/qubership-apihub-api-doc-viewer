import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{G as n}from"./GraphQLOperationViewer-3d9e1054.js";import{b as t}from"./preprocess-8e69768e.js";import{g as s}from"./helpers-53592bba.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-28195d99.js";import"./index-415bee12.js";import"./buildASTSchema-f14864f0.js";const b={title:"GraphQL Operation Viewer/Test Stories",component:n,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},c={args:{source:{},expandedDepth:100}},o={args:{source:t({source:s`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},a={render:e=>{const r=t({source:s`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}},p={render:e=>{const r=t({source:s`
        type Query {
          test: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}},i={render:e=>{const r=t({source:s`
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
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}},y={render:e=>{const r=t({source:s`
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
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}};var d,l,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(m=(l=c.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,S,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,E,Q;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Q=(E=a.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};var f,G,T;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(G=p.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var w,x,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var v,I,j;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(I=y.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const _=["Test","Union","SelfCycled","SelfCycledInput","TwoBranchesSelfCycled","TwoBranchesSelfCycledInput"];export{a as SelfCycled,p as SelfCycledInput,c as Test,i as TwoBranchesSelfCycled,y as TwoBranchesSelfCycledInput,o as Union,_ as __namedExportsOrder,b as default};
