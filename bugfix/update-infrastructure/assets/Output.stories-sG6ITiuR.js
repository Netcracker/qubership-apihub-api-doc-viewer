import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DRGMQe9r.js";import{n,t as r}from"./GraphQLOperationViewer-D5AArRQo.js";import{r as i,s as a}from"./preprocess-CVyTm_I1.js";import{n as o,t as s}from"./graph-api-transformers-CGdCuTpX.js";var c,l;function u(){return(u=e((()=>{n(),i(),c=t(),l=e=>{let{source:t,circular:n=!1}=e,i=a({source:t,circular:n});return(0,c.jsx)(r,{...e,source:i})},l.__docgenInfo={description:``,methods:[],displayName:`TestGraphQLOperationViewer`,props:{source:{required:!0,tsType:{name:`unknown`},description:``},circular:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{o(),u(),d={title:`GraphQL Operation Viewer/Output`,component:l,parameters:{},argTypes:{source:{control:`object`}}},f={args:{source:s(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},f.storyName=`[Query] No args. Primitive nullable output`,p={args:{source:s(`
      type Mutation {
        """Transforms random object to string"""
        asString: String
      }
    `),circular:!0,operationType:`mutation`,operationName:`asString`}},p.storyName=`[Mutation] No args. Primitive nullable output`,m={args:{source:s(`
      type Query {
        getShape: Shape!
      }
      
      type Square {
        size: Int!
      }
      type Rectangle {
        width: Int!
        height: Int
      }
      type Circle {
        radius: Int!
      }
      union Quadrangle = Square | Rectangle
      union Shape = Quadrangle | Circle
    `),circular:!0,operationType:`query`,operationName:`getShape`}},m.storyName=`[Query] Union with nested union in output`,h={args:{source:s(`
      type Query {
        getGeometry: Geometry!
      }
      
      type Geometry {
        getShape(kind: String!): Shape!
      }
      
      type Square {
        size: Int!
      }
      type Rectangle {
        width: Int!
        height: Int
      }
      type Circle {
        radius: Int!
      }
      union Quadrangle = Square | Rectangle
      union Shape = Quadrangle | Circle
    `),circular:!0,operationType:`query`,operationName:`getGeometry`}},h.storyName=`[Method] Union with nested union in output`,f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    source: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    source: buildGraphApiSchema(\`
      type Mutation {
        """Transforms random object to string"""
        asString: String
      }
    \`),
    circular: true,
    operationType: 'mutation',
    operationName: 'asString'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    source: buildGraphApiSchema(\`
      type Query {
        getShape: Shape!
      }
      
      type Square {
        size: Int!
      }
      type Rectangle {
        width: Int!
        height: Int
      }
      type Circle {
        radius: Int!
      }
      union Quadrangle = Square | Rectangle
      union Shape = Quadrangle | Circle
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getShape'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    source: buildGraphApiSchema(\`
      type Query {
        getGeometry: Geometry!
      }
      
      type Geometry {
        getShape(kind: String!): Shape!
      }
      
      type Square {
        size: Int!
      }
      type Rectangle {
        width: Int!
        height: Int
      }
      type Circle {
        radius: Int!
      }
      union Quadrangle = Square | Rectangle
      union Shape = Quadrangle | Circle
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getGeometry'
  }
}`,...h.parameters?.docs?.source}}},g=[`QueryNoArgsPrimitiveNullableOutput`,`MutationNoArgsPrimitiveNullableOutput`,`QueryWithUnionInOutput`,`MethodWithUnionInOutput`]})))()}_();export{h as MethodWithUnionInOutput,p as MutationNoArgsPrimitiveNullableOutput,f as QueryNoArgsPrimitiveNullableOutput,m as QueryWithUnionInOutput,g as __namedExportsOrder,d as default};