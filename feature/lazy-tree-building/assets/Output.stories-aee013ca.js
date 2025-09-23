import{b as a}from"./graph-api-transformers-51c561ee.js";import{j as N}from"./jsx-runtime-beaa2906.js";import{G as O}from"./GraphQLOperationViewer-a4e42843.js";import{a as P}from"./preprocess-a5033adf.js";import"./ErrorBoundaryFallback-28eaf6cc.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-588dd810.js";import"./model-e6c05388.js";const Q=i=>{const{source:I,circular:G=!1}=i,b=P({source:I,circular:G});return N.jsx(O,{...i,source:b})};Q.__docgenInfo={description:"",methods:[],displayName:"TestGraphQLOperationViewer",props:{source:{required:!0,tsType:{name:"unknown"},description:""},circular:{required:!1,tsType:{name:"boolean"},description:""}}};const v={title:"GraphQL Operation Viewer/Output",component:Q,parameters:{},argTypes:{source:{control:"object"}}},e={args:{source:a(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),circular:!0,operationPath:"getString"}};e.storyName="[Query] No args. Primitive nullable output";const r={args:{source:a(`
      type Mutation {
        """Transforms random object to string"""
        asString: String
      }
    `),circular:!0,operationPath:"asString"}};r.storyName="[Mutation] No args. Primitive nullable output";const t={args:{source:a(`
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
    `),circular:!0,operationPath:"getShape"}};t.storyName="[Query] Union with nested union in output";const n={args:{source:a(`
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
    `),circular:!0,operationPath:"getGeometry"}};n.storyName="[Method] Union with nested union in output";var o,u,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    source: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String
      }
    \`),
    circular: true,
    operationPath: 'getString'
  }
}`,...(s=(u=e.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var p,c,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    source: buildGraphApiSchema(\`
      type Mutation {
        """Transforms random object to string"""
        asString: String
      }
    \`),
    circular: true,
    operationPath: 'asString'
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,l,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    operationPath: 'getShape'
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var d,y,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    operationPath: 'getGeometry'
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const U=["QueryNoArgsPrimitiveNullableOutput","MutationNoArgsPrimitiveNullableOutput","QueryWithUnionInOutput","MethodWithUnionInOutput"];export{n as MethodWithUnionInOutput,r as MutationNoArgsPrimitiveNullableOutput,e as QueryNoArgsPrimitiveNullableOutput,t as QueryWithUnionInOutput,U as __namedExportsOrder,v as default};
