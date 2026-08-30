import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./GraphQLOperationViewer-2q6f0Gjg.js";import{r as i,s as a}from"./preprocess-CVD3NpS4.js";import{n as o,r as s}from"./helpers-BEPeAio-.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),s(),c=t(),l={title:`GraphQL Operation Viewer/Test Stories`,component:r,parameters:{},argTypes:{source:{control:`object`}},args:{source:{}}},u={args:{source:{},expandedDepth:100}},d={args:{source:a({source:o`
        type Query {
          test: Union
        }
        union Union = String | ID | MyType
        type MyType {
          id: ID!
        }
      `})}},f={render:e=>{let t=a({source:o`
        type Query {
          test: CycledEntity
        }
        type CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return(0,c.jsx)(r,{...e,source:t})},args:{}},p={render:e=>{let t=a({source:o`
        type Query {
          test: CycledEntity
        }
        input CycledEntity {
          value: String
          child: CycledEntity
        }
      `,circular:!0});return(0,c.jsx)(r,{...e,source:t})},args:{}},m={render:e=>{let t=a({source:o`
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
      `,circular:!0});return(0,c.jsx)(r,{...e,source:t})},args:{}},h={render:e=>{let t=a({source:o`
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
      `,circular:!0});return(0,c.jsx)(r,{...e,source:t})},args:{}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: {},
    expandedDepth: 100
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Test`,`Union`,`SelfCycled`,`SelfCycledInput`,`TwoBranchesSelfCycled`,`TwoBranchesSelfCycledInput`]})))()}_();export{f as SelfCycled,p as SelfCycledInput,u as Test,m as TwoBranchesSelfCycled,h as TwoBranchesSelfCycledInput,d as Union,g as __namedExportsOrder,l as default};