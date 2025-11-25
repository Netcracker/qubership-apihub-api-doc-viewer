import{p as Pe,I as Te,S as Q,D as we,a as ve}from"./ErrorBoundaryFallback-09c571d0.js";import{b as e}from"./graph-api-transformers-8742d037.js";import{j as qe}from"./_commonjs-dynamic-modules-6308e768.js";import{p as xe}from"./preprocess-c84282fc.js";import{G as je}from"./GraphQLOperationDiffViewer-16e793c4.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-a4cbe6d7.js";import"./model-93bd46ad.js";const Oe=f=>{const{beforeSource:Ge,afterSource:Ne,circular:Be=!1}=f,De=xe({beforeSource:Ge,afterSource:Ne,circular:Be});return qe.jsx(je,{...f,source:De})};Oe.__docgenInfo={description:"",methods:[],displayName:"TestGraphQLOperationDiffViewer",props:{beforeSource:{required:!1,tsType:{name:"unknown"},description:""},afterSource:{required:!0,tsType:{name:"unknown"},description:""},circular:{required:!1,tsType:{name:"boolean"},description:""}}};const Ye={title:"GraphQL Operation Diff Viewer/Output",component:Oe,parameters:{},argTypes:{beforeSource:{control:"object"},afterSource:{control:"object"},layoutMode:{control:"radio",options:[Pe,Te,Q]},filters:{control:"check",options:["breaking","non-breaking","annotation","unclassified","deprecated"]}},args:{layoutMode:Q,metaKeys:{diffsMetaKey:we,aggregatedDiffsMetaKey:ve}}},r={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: Int!
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};r.storyName="[Query] No args. Changed primitive output type";const t={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};t.storyName="[Query] No args. Primitive output marked as NOT nullable";const n={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};n.storyName="[Query] No args. Primitive output marked as NULLABLE";const a={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};a.storyName="[Query] Primitive output. Added args";const o={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};o.storyName="[Query] Primitive output. Removed args";const i={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};i.storyName="[Query] Primitive output. Added 1 arg";const u={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),circular:!0,operationType:"query",operationName:"getString"}};u.storyName="[Query] Primitive output. Removed 1 arg";const s={args:{beforeSource:e(`
      type Query {
        """Returns a book name by its ID"""
        getBook(id: ID!): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a book model by its ID"""
        getBook(id: ID!): Book!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),circular:!0,operationType:"query",operationName:"getBook"}};s.storyName="[Query] 1 arg. Primitive output -> Object output";const p={args:{beforeSource:e(`
      type Query {
        """Returns a book model by its ID"""
        getBook(id: ID!): Book!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a book name by its ID"""
        getBook(id: ID!): String!
      }
    `),circular:!0,operationType:"query",operationName:"getBook"}};p.storyName="[Query] 1 arg. Object output -> Primitive output";const y={args:{beforeSource:e(`
      type Query {
        """Returns book names by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [String!]!
      }
    `),afterSource:e(`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),circular:!0,operationType:"query",operationName:"getBooks"}};y.storyName="[Query] 1 arg. Array of primitive output -> Array of objective output";const c={args:{beforeSource:e(`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns book names by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [String!]!
      }
    `),circular:!0,operationType:"query",operationName:"getBooks"}};c.storyName="[Query] 1 arg. Array of objective output -> Array of primitive output";const g={args:{beforeSource:e(`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): Library!
      }
      
      type Library {
        books: [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),circular:!0,operationType:"query",operationName:"getBooks"}};g.storyName="[Query] 1 arg. Array of objective output -> Objective output";const S={args:{beforeSource:e(`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): Library!
      }
      
      type Library {
        books: [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    `),circular:!0,operationType:"query",operationName:"getBooks"}};S.storyName="[Query] 1 arg. Objective output -> Array of object output";const m={args:{beforeSource:e(`
      type Query {
        """Returns generic instance of shape"""
        getRandomShape: Shape!
      }
      
      type Shape {
        kind: String!
        sizes: [Int!]!
      }
    `),afterSource:e(`
      type Query {
        """Returns prefabs"""
        getRandomShape: Shape!
      }

      type Circle {
        kind: String!
        radius: Int!
      }
      
      type Rectangle {
        kind: String!
        width: Int!
        height: Int!
      }
      
      union Shape = Circle | Rectangle
    `),circular:!0,operationType:"query",operationName:"getRandomShape"}};m.storyName="[Query] 1 arg. Object output -> oneOf object output";const d={args:{beforeSource:e(`
      type Query {
        """Returns prefabs"""
        getRandomShape: Shape!
      }

      type Circle {
        kind: String!
        radius: Int!
      }
      
      type Rectangle {
        kind: String!
        width: Int!
        height: Int!
      }
      
      union Shape = Circle | Rectangle
    `),afterSource:e(`
      type Query {
        """Returns generic instance of shape"""
        getRandomShape: Shape!
      }
      
      type Shape {
        kind: String!
        sizes: [Int!]!
      }
    `),circular:!0,operationType:"query",operationName:"getRandomShape"}};d.storyName="[Query] 1 arg. oneOf object output -> object output";const h={args:{beforeSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `),afterSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
        buildCircle(radius: Int!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `)}};h.storyName="[Query][Method] Query with no args returns utility with 1 method. Added 1 more method";const l={args:{beforeSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
        buildCircle(radius: Int!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `),afterSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `)}};l.storyName="[Query][Method] Query with no args returns utility with 2 methods. Removed 1 method";const b={args:{beforeSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `),afterSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideCount: Int!, sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `)}};b.storyName="[Query][Method] Query with no args returns utility with 1 method. Added 1 arg to the method";const I={args:{beforeSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideCount: Int!, sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `),afterSource:e(`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    `)}};I.storyName="[Query][Method] Query with no args returns utility with 1 method. Removed 1 arg from the method";var k,A,R;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: Int!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(R=(A=r.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,G,N;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(N=(G=t.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var B,D,P;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var T,w,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var q,x,j;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var z,C,M;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var L,_,E;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getString'
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var U,W,F;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a book name by its ID"""
        getBook(id: ID!): String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a book model by its ID"""
        getBook(id: ID!): Book!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getBook'
  }
}`,...(F=(W=s.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var Y,K,V;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns a book model by its ID"""
        getBook(id: ID!): Book!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns a book name by its ID"""
        getBook(id: ID!): String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getBook'
  }
}`,...(V=(K=p.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var H,J,X;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns book names by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [String!]!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getBooks'
  }
}`,...(X=(J=y.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns book names by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [String!]!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getBooks'
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,te,ne;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): Library!
      }
      
      type Library {
        books: [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getBooks'
  }
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,ie;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): Library!
      }
      
      type Library {
        books: [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns books by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [Book!]!
      }
      
      """Data model represents a book"""
      type Book {
        id: ID!
        name: String!
        author: String
        genre: String!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getBooks'
  }
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,se,pe;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns generic instance of shape"""
        getRandomShape: Shape!
      }
      
      type Shape {
        kind: String!
        sizes: [Int!]!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns prefabs"""
        getRandomShape: Shape!
      }

      type Circle {
        kind: String!
        radius: Int!
      }
      
      type Rectangle {
        kind: String!
        width: Int!
        height: Int!
      }
      
      union Shape = Circle | Rectangle
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getRandomShape'
  }
}`,...(pe=(se=m.parameters)==null?void 0:se.docs)==null?void 0:pe.source}}};var ye,ce,ge;d.parameters={...d.parameters,docs:{...(ye=d.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns prefabs"""
        getRandomShape: Shape!
      }

      type Circle {
        kind: String!
        radius: Int!
      }
      
      type Rectangle {
        kind: String!
        width: Int!
        height: Int!
      }
      
      union Shape = Circle | Rectangle
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns generic instance of shape"""
        getRandomShape: Shape!
      }
      
      type Shape {
        kind: String!
        sizes: [Int!]!
      }
    \`),
    circular: true,
    operationType: 'query',
    operationName: 'getRandomShape'
  }
}`,...(ge=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var Se,me,de;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
        buildCircle(radius: Int!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`)
  }
}`,...(de=(me=h.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var he,le,be;l.parameters={...l.parameters,docs:{...(he=l.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
        buildCircle(radius: Int!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`)
  }
}`,...(be=(le=l.parameters)==null?void 0:le.docs)==null?void 0:be.source}}};var Ie,fe,Qe;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideCount: Int!, sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`)
  }
}`,...(Qe=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:Qe.source}}};var ke,Ae,Re;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    beforeSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideCount: Int!, sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`),
    afterSource: buildGraphApiSchema(\`
      type Query {
        """Returns instance of utility which creates shapes"""
        getGeometry: Geometry!
      }
      
      type Geometry {
        buildShape(sideSizes: [Int!]!): Shape!
      }
      
      type Shape {
        sideSizes: [Int!]!
        draw(x: Int!, y: Int): Picture
      }
      
      type Picture {
        x: Int!
        y: Int!
        shape: Shape!
      }
    \`)
  }
}`,...(Re=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};const Ke=["QueryNoArgsChangedPrimitiveOutput","QueryNoArgsPrimitiveOutputMarkedAsNotNullable","QueryNoArgsPrimitiveOutputMarkedAsNullable","QueryPrimitiveOutputAddedArgs","QueryPrimitiveOutputRemovedArgs","QueryPrimitiveOutputAddedNewArg","QueryPrimitiveOutputRemovedExistingArg","QueryWithArgsChangedPrimitiveToObjectOutput","QueryWithArgsChangedObjectToPrimitiveOutput","QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput","QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive","QueryWithArgsChangedArrayOfObjectOutputToObjectOutput","QueryWithArgsChangedObjectOutputToArrayOfObjectOutput","QueryNoArgsChangedObjectOutputToOneOfOutput","QueryNoArgsChangedOneOfOutputToObjectOutput","QueryNoArgsReturnsUtilityAdded1Method","QueryNoArgsReturnsUtilityRemoved1Method","QueryNoArgsReturnsUtility1MethodAdded1Arg","QueryNoArgsReturnsUtility1MethodRemoved1Arg"];export{m as QueryNoArgsChangedObjectOutputToOneOfOutput,d as QueryNoArgsChangedOneOfOutputToObjectOutput,r as QueryNoArgsChangedPrimitiveOutput,t as QueryNoArgsPrimitiveOutputMarkedAsNotNullable,n as QueryNoArgsPrimitiveOutputMarkedAsNullable,b as QueryNoArgsReturnsUtility1MethodAdded1Arg,I as QueryNoArgsReturnsUtility1MethodRemoved1Arg,h as QueryNoArgsReturnsUtilityAdded1Method,l as QueryNoArgsReturnsUtilityRemoved1Method,a as QueryPrimitiveOutputAddedArgs,i as QueryPrimitiveOutputAddedNewArg,o as QueryPrimitiveOutputRemovedArgs,u as QueryPrimitiveOutputRemovedExistingArg,c as QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive,g as QueryWithArgsChangedArrayOfObjectOutputToObjectOutput,y as QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput,S as QueryWithArgsChangedObjectOutputToArrayOfObjectOutput,p as QueryWithArgsChangedObjectToPrimitiveOutput,s as QueryWithArgsChangedPrimitiveToObjectOutput,Ke as __namedExportsOrder,Ye as default};
