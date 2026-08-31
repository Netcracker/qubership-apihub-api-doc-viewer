import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DRGMQe9r.js";import{Gr as n,Hr as r,Ur as i,Wr as a,nn as o,rn as s,un as c}from"./DiffBadge-NQ9YrfGS.js";import{n as l,t as u}from"./GraphQLOperationDiffViewer-DyIrKsrB.js";import{o as d,r as f}from"./preprocess-D1c9NRE6.js";import{n as p,t as m}from"./graph-api-transformers-CSHzaHW_.js";var h,g;function _(){return(_=e((()=>{f(),l(),h=t(),g=e=>{let{beforeSource:t,afterSource:n,circular:r=!1}=e,i=d({beforeSource:t,afterSource:n,circular:r});return(0,h.jsx)(u,{...e,source:i})},g.__docgenInfo={description:``,methods:[],displayName:`TestGraphQLOperationDiffViewer`,props:{beforeSource:{required:!1,tsType:{name:`unknown`},description:``},afterSource:{required:!0,tsType:{name:`unknown`},description:``},circular:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{c(),p(),n(),_(),v={title:`GraphQL Operation Diff Viewer/Output`,component:g,parameters:{},argTypes:{beforeSource:{control:`object`},afterSource:{control:`object`},layoutMode:{control:`radio`,options:[r,i,a]},filters:{control:`check`,options:[`breaking`,`non-breaking`,`annotation`,`unclassified`,`deprecated`]}},args:{layoutMode:a,metaKeys:{diffsMetaKey:s,aggregatedDiffsMetaKey:o}}},y={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString: Int!
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},y.storyName=`[Query] No args. Changed primitive output type`,b={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},b.storyName=`[Query] No args. Primitive output marked as NOT nullable`,x={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString: String
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},x.storyName=`[Query] No args. Primitive output marked as NULLABLE`,S={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},S.storyName=`[Query] Primitive output. Added args`,C={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString: String!
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},C.storyName=`[Query] Primitive output. Removed args`,w={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},w.storyName=`[Query] Primitive output. Added 1 arg`,T={args:{beforeSource:m(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!, regexp: String): String!
      }
    `),afterSource:m(`
      type Query {
        """Returns a random string"""
        getString(pretty: Boolean!): String!
      }
    `),circular:!0,operationType:`query`,operationName:`getString`}},T.storyName=`[Query] Primitive output. Removed 1 arg`,E={args:{beforeSource:m(`
      type Query {
        """Returns a book name by its ID"""
        getBook(id: ID!): String!
      }
    `),afterSource:m(`
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
    `),circular:!0,operationType:`query`,operationName:`getBook`}},E.storyName=`[Query] 1 arg. Primitive output -> Object output`,D={args:{beforeSource:m(`
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
    `),afterSource:m(`
      type Query {
        """Returns a book name by its ID"""
        getBook(id: ID!): String!
      }
    `),circular:!0,operationType:`query`,operationName:`getBook`}},D.storyName=`[Query] 1 arg. Object output -> Primitive output`,O={args:{beforeSource:m(`
      type Query {
        """Returns book names by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [String!]!
      }
    `),afterSource:m(`
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
    `),circular:!0,operationType:`query`,operationName:`getBooks`}},O.storyName=`[Query] 1 arg. Array of primitive output -> Array of objective output`,k={args:{beforeSource:m(`
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
    `),afterSource:m(`
      type Query {
        """Returns book names by search query. If argument is empty it returns all the books"""
        getBooks(searchQuery: String): [String!]!
      }
    `),circular:!0,operationType:`query`,operationName:`getBooks`}},k.storyName=`[Query] 1 arg. Array of objective output -> Array of primitive output`,A={args:{beforeSource:m(`
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
    `),afterSource:m(`
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
    `),circular:!0,operationType:`query`,operationName:`getBooks`}},A.storyName=`[Query] 1 arg. Array of objective output -> Objective output`,j={args:{beforeSource:m(`
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
    `),afterSource:m(`
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
    `),circular:!0,operationType:`query`,operationName:`getBooks`}},j.storyName=`[Query] 1 arg. Objective output -> Array of object output`,M={args:{beforeSource:m(`
      type Query {
        """Returns generic instance of shape"""
        getRandomShape: Shape!
      }
      
      type Shape {
        kind: String!
        sizes: [Int!]!
      }
    `),afterSource:m(`
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
    `),circular:!0,operationType:`query`,operationName:`getRandomShape`}},M.storyName=`[Query] 1 arg. Object output -> oneOf object output`,N={args:{beforeSource:m(`
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
    `),afterSource:m(`
      type Query {
        """Returns generic instance of shape"""
        getRandomShape: Shape!
      }
      
      type Shape {
        kind: String!
        sizes: [Int!]!
      }
    `),circular:!0,operationType:`query`,operationName:`getRandomShape`}},N.storyName=`[Query] 1 arg. oneOf object output -> object output`,P={args:{beforeSource:m(`
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
    `),afterSource:m(`
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
    `)}},P.storyName=`[Query][Method] Query with no args returns utility with 1 method. Added 1 more method`,F={args:{beforeSource:m(`
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
    `),afterSource:m(`
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
    `)}},F.storyName=`[Query][Method] Query with no args returns utility with 2 methods. Removed 1 method`,I={args:{beforeSource:m(`
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
    `),afterSource:m(`
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
    `)}},I.storyName=`[Query][Method] Query with no args returns utility with 1 method. Added 1 arg to the method`,L={args:{beforeSource:m(`
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
    `),afterSource:m(`
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
    `)}},L.storyName=`[Query][Method] Query with no args returns utility with 1 method. Removed 1 arg from the method`,y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`QueryNoArgsChangedPrimitiveOutput`,`QueryNoArgsPrimitiveOutputMarkedAsNotNullable`,`QueryNoArgsPrimitiveOutputMarkedAsNullable`,`QueryPrimitiveOutputAddedArgs`,`QueryPrimitiveOutputRemovedArgs`,`QueryPrimitiveOutputAddedNewArg`,`QueryPrimitiveOutputRemovedExistingArg`,`QueryWithArgsChangedPrimitiveToObjectOutput`,`QueryWithArgsChangedObjectToPrimitiveOutput`,`QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput`,`QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive`,`QueryWithArgsChangedArrayOfObjectOutputToObjectOutput`,`QueryWithArgsChangedObjectOutputToArrayOfObjectOutput`,`QueryNoArgsChangedObjectOutputToOneOfOutput`,`QueryNoArgsChangedOneOfOutputToObjectOutput`,`QueryNoArgsReturnsUtilityAdded1Method`,`QueryNoArgsReturnsUtilityRemoved1Method`,`QueryNoArgsReturnsUtility1MethodAdded1Arg`,`QueryNoArgsReturnsUtility1MethodRemoved1Arg`]})))()}z();export{M as QueryNoArgsChangedObjectOutputToOneOfOutput,N as QueryNoArgsChangedOneOfOutputToObjectOutput,y as QueryNoArgsChangedPrimitiveOutput,b as QueryNoArgsPrimitiveOutputMarkedAsNotNullable,x as QueryNoArgsPrimitiveOutputMarkedAsNullable,I as QueryNoArgsReturnsUtility1MethodAdded1Arg,L as QueryNoArgsReturnsUtility1MethodRemoved1Arg,P as QueryNoArgsReturnsUtilityAdded1Method,F as QueryNoArgsReturnsUtilityRemoved1Method,S as QueryPrimitiveOutputAddedArgs,w as QueryPrimitiveOutputAddedNewArg,C as QueryPrimitiveOutputRemovedArgs,T as QueryPrimitiveOutputRemovedExistingArg,k as QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive,A as QueryWithArgsChangedArrayOfObjectOutputToObjectOutput,O as QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput,j as QueryWithArgsChangedObjectOutputToArrayOfObjectOutput,D as QueryWithArgsChangedObjectToPrimitiveOutput,E as QueryWithArgsChangedPrimitiveToObjectOutput,R as __namedExportsOrder,v as default};