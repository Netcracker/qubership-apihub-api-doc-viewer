import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{o as t,s as n}from"./AsyncApiOperationViewer-MuAs1xMh.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),r={title:`JSO Suite/General`,component:t,parameters:{},argTypes:{source:{control:`object`},supportJsonSchema:{control:`boolean`}},args:{source:{},supportJsonSchema:!0,initialLevel:1}},i={args:{source:{string:`string`,number:123,boolean:!0,null:null}}},a={args:{source:{object:{string:`string`,number:123,boolean:!0,null:null}}}},o={args:{source:{array:[1,2,3]}}},s={args:{source:{rootObject:{nestedObject:{string:`string`,number:123,boolean:!0,null:null}}}}},c={args:{source:{array:[{string:`string`},{object:{number:123}},[1,2,3]]}}},l={args:{source:{rootObject:{string:`string`,plainArray:[1,2,3],nestedObject:{number:123},nestedArray:[{boolean:!0},{object:{null:null}}]}}}},u={args:{source:{array:[`string`,{number:123},{nestedObject:{boolean:!0}},[1,`222`,{null:null}]]}}},d={args:{source:{string:`string`,schema:{type:`string`,minLength:1,maxLength:10,enum:[`a`,`b`,`c`],default:`a`,examples:[`a`,`b`,`c`],description:`A string property`}}}},f={args:{source:{string:`string`,schema:{type:`object`,properties:{string:{type:`string`,description:`A string property`},number:{type:`number`,description:`A number property`}}}}}},p={args:{source:{string:`string`,schema:{type:`array`,items:{type:`string`,description:`A string property`}}}}},m={args:{source:{string:`string`,schema:{oneOf:[{type:`string`,description:`A string property`},{type:`number`,description:`A number property`}]}}}},h={args:{source:{object:{string:`string`},schema:{type:`string`,description:`A string property`}}}},g={args:{source:{array:[`string`],schema:{type:`string`,description:`A string property`}}}},_={args:{source:{string:`string`,schema:{type:`string`,minLength:1,maxLength:10,enum:[`a`,`b`,`c`],default:`a`,examples:[`a`,`b`,`c`],description:`A string property`}},initialLevel:1}},v={args:{source:{string:`string`,schema:{type:`object`,properties:{string:{type:`string`,description:`A string property`},number:{type:`number`,description:`A number property`}}}},initialLevel:1}},y={args:{source:{string:`string`,schema:{type:`array`,items:{type:`string`,description:`A string property`}}},initialLevel:1}},b={args:{source:{string:`string`,schema:{oneOf:[{type:`string`,description:`A string property`},{type:`number`,description:`A number property`}]}},initialLevel:1}},x={args:{source:{object:{string:`string`},schema:{type:`string`,description:`A string property`}},initialLevel:1}},S={args:{source:{array:[`string`],schema:{type:`string`,description:`A string property`}},initialLevel:1}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      number: 123,
      boolean: true,
      null: null
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      object: {
        string: 'string',
        number: 123,
        boolean: true,
        null: null
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      array: [1, 2, 3]
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      rootObject: {
        nestedObject: {
          string: 'string',
          number: 123,
          boolean: true,
          null: null
        }
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      array: [{
        string: 'string'
      }, {
        object: {
          number: 123
        }
      }, [1, 2, 3]]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      rootObject: {
        string: 'string',
        plainArray: [1, 2, 3],
        nestedObject: {
          number: 123
        },
        nestedArray: [{
          boolean: true
        }, {
          object: {
            null: null
          }
        }]
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      array: ['string', {
        number: 123
      }, {
        nestedObject: {
          boolean: true
        }
      }, [1, '222', {
        null: null
      }]]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        type: 'string',
        minLength: 1,
        maxLength: 10,
        enum: ['a', 'b', 'c'],
        default: 'a',
        examples: ['a', 'b', 'c'],
        description: 'A string property'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        type: 'object',
        properties: {
          string: {
            type: 'string',
            description: 'A string property'
          },
          number: {
            type: 'number',
            description: 'A number property'
          }
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        type: 'array',
        items: {
          type: 'string',
          description: 'A string property'
        }
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        oneOf: [{
          type: 'string',
          description: 'A string property'
        }, {
          type: 'number',
          description: 'A number property'
        }]
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      object: {
        string: 'string'
      },
      schema: {
        type: 'string',
        description: 'A string property'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      array: ['string'],
      schema: {
        type: 'string',
        description: 'A string property'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        type: 'string',
        minLength: 1,
        maxLength: 10,
        enum: ['a', 'b', 'c'],
        default: 'a',
        examples: ['a', 'b', 'c'],
        description: 'A string property'
      }
    },
    initialLevel: 1
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        type: 'object',
        properties: {
          string: {
            type: 'string',
            description: 'A string property'
          },
          number: {
            type: 'number',
            description: 'A number property'
          }
        }
      }
    },
    initialLevel: 1
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        type: 'array',
        items: {
          type: 'string',
          description: 'A string property'
        }
      }
    },
    initialLevel: 1
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      schema: {
        oneOf: [{
          type: 'string',
          description: 'A string property'
        }, {
          type: 'number',
          description: 'A number property'
        }]
      }
    },
    initialLevel: 1
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      object: {
        string: 'string'
      },
      schema: {
        type: 'string',
        description: 'A string property'
      }
    },
    initialLevel: 1
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    source: {
      array: ['string'],
      schema: {
        type: 'string',
        description: 'A string property'
      }
    },
    initialLevel: 1
  }
}`,...S.parameters?.docs?.source}}},C=[`PrimitiveProperties`,`PrimitiveObjectProperty`,`PrimitiveArrayProperty`,`NestedObjectProperty`,`NestedArrayProperty`,`AllKindsOfObjectProperties`,`AllKindsOfArrayItems`,`PrimitivePropAndPrimitiveSchema`,`PrimitivePropAndObjectSchema`,`PrimitivePropAndArraySchema`,`PrimitivePropAndCombinerSchema`,`ObjectPropAndPrimitiveSchema`,`ArrayPropAndPrimitiveSchema`,`SecondLevelPrimitivePropAndPrimitiveSchema`,`SecondLevelPrimitivePropAndObjectSchema`,`SecondLevelPrimitivePropAndArraySchema`,`SecondLevelPrimitivePropAndCombinerSchema`,`SecondLevelObjectPropAndPrimitiveSchema`,`SecondLevelArrayPropAndPrimitiveSchema`]})))()}w();export{u as AllKindsOfArrayItems,l as AllKindsOfObjectProperties,g as ArrayPropAndPrimitiveSchema,c as NestedArrayProperty,s as NestedObjectProperty,h as ObjectPropAndPrimitiveSchema,o as PrimitiveArrayProperty,a as PrimitiveObjectProperty,p as PrimitivePropAndArraySchema,m as PrimitivePropAndCombinerSchema,f as PrimitivePropAndObjectSchema,d as PrimitivePropAndPrimitiveSchema,i as PrimitiveProperties,S as SecondLevelArrayPropAndPrimitiveSchema,x as SecondLevelObjectPropAndPrimitiveSchema,y as SecondLevelPrimitivePropAndArraySchema,b as SecondLevelPrimitivePropAndCombinerSchema,v as SecondLevelPrimitivePropAndObjectSchema,_ as SecondLevelPrimitivePropAndPrimitiveSchema,C as __namedExportsOrder,r as default};