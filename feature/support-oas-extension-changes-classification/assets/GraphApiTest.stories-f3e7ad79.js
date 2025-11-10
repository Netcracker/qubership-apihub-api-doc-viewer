import{G as l}from"./GraphQLOperationViewer-81e448c8.js";import{g as m}from"./helpers-156e334c.js";import{a as d}from"./preprocess-630b827c.js";import"./jsx-runtime-beaa2906.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-7e37b4e6.js";import"./index-415bee12.js";import"./buildASTSchema-94b05d67.js";import"./model-91abd69b.js";const U={title:"Graph Api Viewer",component:l,parameters:{},argTypes:{},args:{source:{}}},e={args:{source:{},expandedDepth:100}},r={args:{source:d({source:m`
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
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const Q=["Test","Union","SelfCycled"];export{n as SelfCycled,e as Test,r as Union,Q as __namedExportsOrder,U as default};
