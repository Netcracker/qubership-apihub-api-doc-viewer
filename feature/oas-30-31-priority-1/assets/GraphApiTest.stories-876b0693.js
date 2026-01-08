import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{G as n}from"./GraphQLOperationViewer-1c409726.js";import{a as t}from"./preprocess-6a722d22.js";import{g as c}from"./helpers-8e3d0f6f.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-9d599c59.js";import"./index-415bee12.js";import"./buildASTSchema-fb7b676b.js";import"./model-d676d907.js";const b={title:"Graph Api Viewer",component:n,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},s={args:{source:{},expandedDepth:100}},o={args:{source:t({source:c`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},a={render:e=>{const r=t({source:c`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}},p={render:e=>{const r=t({source:c`
        type Query {
          test: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}},i={render:e=>{const r=t({source:c`
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
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}},y={render:e=>{const r=t({source:c`
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
      `,circular:!0});return u.jsx(n,{...e,source:r})},args:{}};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,h,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,E,Q;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(I=y.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const k=["Test","Union","SelfCycled","SelfCycledInput","TwoBranchesSelfCycled","TwoBranchesSelfCycledInput"];export{a as SelfCycled,p as SelfCycledInput,s as Test,i as TwoBranchesSelfCycled,y as TwoBranchesSelfCycledInput,o as Union,k as __namedExportsOrder,b as default};
