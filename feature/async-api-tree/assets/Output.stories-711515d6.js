import{b as a}from"./graph-api-transformers-27c02a61.js";import{j as b}from"./_commonjs-dynamic-modules-6308e768.js";import{G as q}from"./GraphQLOperationViewer-048505bc.js";import{b as T}from"./preprocess-4271bdc4.js";import"./GraphPropNodeViewer-9a3dca89.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-f14864f0.js";const Q=o=>{const{source:N,circular:I=!1}=o,G=T({source:N,circular:I});return b.jsx(q,{...o,source:G})};Q.__docgenInfo={description:"",methods:[],displayName:"TestGraphQLOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},circular:{required:!1,tsType:{name:"boolean"},description:""}}};const v={title:"GraphQL Operation Viewer/Output",component:Q,parameters:{},argTypes:{source:{control:"object"}}},e={args:{source:a(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};e.storyName="[Query] No args. Primitive nullable output";const r={args:{source:a(`
      type Mutation {
        """Transforms random object to string"""
        asString: String
      }
    `),circular:!0,operationType:"mutation",operationName:"asString"}};r.storyName="[Mutation] No args. Primitive nullable output";const t={args:{source:a(`
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
    `),circular:!0,operationType:"query",operationName:"getShape"}};t.storyName="[Query] Union with nested union in output";const n={args:{source:a(`
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
    `),circular:!0,operationType:"query",operationName:"getGeometry"}};n.storyName="[Method] Union with nested union in output";var i,u,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,l,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(l=t.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var d,h,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const P=["QueryNoArgsPrimitiveNullableOutput","MutationNoArgsPrimitiveNullableOutput","QueryWithUnionInOutput","MethodWithUnionInOutput"];export{n as MethodWithUnionInOutput,r as MutationNoArgsPrimitiveNullableOutput,e as QueryNoArgsPrimitiveNullableOutput,t as QueryWithUnionInOutput,P as __namedExportsOrder,v as default};
