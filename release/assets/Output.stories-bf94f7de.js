import{p as Ne,I as we,S as Q,D as ve}from"./ErrorBoundaryFallback-4397c758.js";import{b as e}from"./graph-api-transformers-f45a71d4.js";import{j as xe}from"./jsx-runtime-beaa2906.js";import{p as je}from"./preprocess-debb489c.js";import{G as ze}from"./GraphQLOperationDiffViewer-44835b83.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./buildASTSchema-535a766a.js";const Oe=f=>{const{beforeSource:Ge,afterSource:Pe,circular:Be=!1}=f,De=je({beforeSource:Ge,afterSource:Pe,circular:Be});return xe.jsx(ze,{...f,source:De})};Oe.__docgenInfo={description:"",methods:[],displayName:"TestGraphQLOperationDiffViewer",props:{beforeSource:{required:!1,tsType:{name:"unknown"},description:""},afterSource:{required:!0,tsType:{name:"unknown"},description:""},circular:{required:!1,tsType:{name:"boolean"},description:""}}};const We={title:"GraphQL Operation Diff Viewer/Output",component:Oe,parameters:{},argTypes:{beforeSource:{control:"object"},afterSource:{control:"object"},layoutMode:{control:"radio",options:[Ne,we,Q]},filters:{control:"check",options:["breaking","non-breaking","annotation","unclassified","deprecated"]}},args:{layoutMode:Q,diffMetaKey:ve}},r={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: Int!
      }
    `),circular:!0,operationPath:"getString"}};r.storyName="[Query] No args. Changed primitive output type";const t={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),circular:!0,operationPath:"getString"}};t.storyName="[Query] No args. Primitive output marked as NOT nullable";const n={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),circular:!0,operationPath:"getString"}};n.storyName="[Query] No args. Primitive output marked as NULLABLE";const a={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),circular:!0,operationPath:"getString"}};a.storyName="[Query] Primitive output. Added args";const o={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),circular:!0,operationPath:"getString"}};o.storyName="[Query] Primitive output. Removed args";const i={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    `),circular:!0,operationPath:"getString"}};i.storyName="[Query] Primitive output. Added 1 arg";const s={args:{beforeSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    `),afterSource:e(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),circular:!0,operationPath:"getString"}};s.storyName="[Query] Primitive output. Removed 1 arg";const u={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getBook"}};u.storyName="[Query] 1 arg. Primitive output -> Object output";const p={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getBook"}};p.storyName="[Query] 1 arg. Object output -> Primitive output";const y={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getBooks"}};y.storyName="[Query] 1 arg. Array of primitive output -> Array of objective output";const c={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getBooks"}};c.storyName="[Query] 1 arg. Array of objective output -> Array of primitive output";const g={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getBooks"}};g.storyName="[Query] 1 arg. Array of objective output -> Objective output";const S={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getBooks"}};S.storyName="[Query] 1 arg. Objective output -> Array of object output";const h={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getRandomShape"}};h.storyName="[Query] 1 arg. Object output -> oneOf object output";const d={args:{beforeSource:e(`
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
    `),circular:!0,operationPath:"getRandomShape"}};d.storyName="[Query] 1 arg. oneOf object output -> object output";const m={args:{beforeSource:e(`
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
    `)}};m.storyName="[Query][Method] Query with no args returns utility with 1 method. Added 1 more method";const l={args:{beforeSource:e(`
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
    operationPath: 'getString'
  }
}`,...(R=(A=r.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,G,P;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    operationPath: 'getString'
  }
}`,...(P=(G=t.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var B,D,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    operationPath: 'getString'
  }
}`,...(N=(D=n.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var w,v,x;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    operationPath: 'getString'
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,z,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    operationPath: 'getString'
  }
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,M,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    operationPath: 'getString'
  }
}`,...(q=(M=i.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var L,_,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    operationPath: 'getString'
  }
}`,...(E=(_=s.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var U,W,F;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
    operationPath: 'getBook'
  }
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var Y,V,K;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    operationPath: 'getBook'
  }
}`,...(K=(V=p.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var H,J,X;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    operationPath: 'getBooks'
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
    operationPath: 'getBooks'
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
    operationPath: 'getBooks'
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
    operationPath: 'getBooks'
  }
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,ue,pe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
    operationPath: 'getRandomShape'
  }
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ye,ce,ge;d.parameters={...d.parameters,docs:{...(ye=d.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    operationPath: 'getRandomShape'
  }
}`,...(ge=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var Se,he,de;m.parameters={...m.parameters,docs:{...(Se=m.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(de=(he=m.parameters)==null?void 0:he.docs)==null?void 0:de.source}}};var me,le,be;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Re=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};const Fe=["QueryNoArgsChangedPrimitiveOutput","QueryNoArgsPrimitiveOutputMarkedAsNotNullable","QueryNoArgsPrimitiveOutputMarkedAsNullable","QueryPrimitiveOutputAddedArgs","QueryPrimitiveOutputRemovedArgs","QueryPrimitiveOutputAddedNewArg","QueryPrimitiveOutputRemovedExistingArg","QueryWithArgsChangedPrimitiveToObjectOutput","QueryWithArgsChangedObjectToPrimitiveOutput","QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput","QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive","QueryWithArgsChangedArrayOfObjectOutputToObjectOutput","QueryWithArgsChangedObjectOutputToArrayOfObjectOutput","QueryNoArgsChangedObjectOutputToOneOfOutput","QueryNoArgsChangedOneOfOutputToObjectOutput","QueryNoArgsReturnsUtilityAdded1Method","QueryNoArgsReturnsUtilityRemoved1Method","QueryNoArgsReturnsUtility1MethodAdded1Arg","QueryNoArgsReturnsUtility1MethodRemoved1Arg"];export{h as QueryNoArgsChangedObjectOutputToOneOfOutput,d as QueryNoArgsChangedOneOfOutputToObjectOutput,r as QueryNoArgsChangedPrimitiveOutput,t as QueryNoArgsPrimitiveOutputMarkedAsNotNullable,n as QueryNoArgsPrimitiveOutputMarkedAsNullable,b as QueryNoArgsReturnsUtility1MethodAdded1Arg,I as QueryNoArgsReturnsUtility1MethodRemoved1Arg,m as QueryNoArgsReturnsUtilityAdded1Method,l as QueryNoArgsReturnsUtilityRemoved1Method,a as QueryPrimitiveOutputAddedArgs,i as QueryPrimitiveOutputAddedNewArg,o as QueryPrimitiveOutputRemovedArgs,s as QueryPrimitiveOutputRemovedExistingArg,c as QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive,g as QueryWithArgsChangedArrayOfObjectOutputToObjectOutput,y as QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput,S as QueryWithArgsChangedObjectOutputToArrayOfObjectOutput,p as QueryWithArgsChangedObjectToPrimitiveOutput,u as QueryWithArgsChangedPrimitiveToObjectOutput,Fe as __namedExportsOrder,We as default};
