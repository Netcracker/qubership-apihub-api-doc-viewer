import{G as l}from"./GraphQLOperationViewer-0d4b5459.js";import{g as m}from"./helpers-bd299663.js";import{a as d}from"./preprocess-66da88cd.js";import"./jsx-runtime-beaa2906.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-544b3552.js";import"./index-415bee12.js";import"./buildASTSchema-5b3e7609.js";const G={title:"Graph Api Viewer",component:l,parameters:{},argTypes:{},args:{source:{}}},e={args:{source:{},expandedDepth:100}},r={args:{source:d({source:m`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},n={args:{source:d({source:m`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0})}};var t,a,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var s,o,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,y,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const U=["Test","Union","SelfCycled"];export{n as SelfCycled,e as Test,r as Union,U as __namedExportsOrder,G as default};
