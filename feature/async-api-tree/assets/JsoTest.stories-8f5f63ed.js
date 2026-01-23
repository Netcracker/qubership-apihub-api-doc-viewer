import{J as xr}from"./AsyncApiOperationViewer-9eef89a4.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-185ab154.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-eb93d5d1.js";import"./GraphQLOperationDiffViewer-a15d6853.js";const Vr={title:"JSO Viewer",component:xr,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},r={args:{source:{}}},e={args:{source:{string:"string",number:123,boolean:!0,null:null}}},n={args:{source:{object:{string:"string",number:123,boolean:!0,null:null}}}},s={args:{source:{array:[1,2,3]}}},t={args:{source:{rootObject:{nestedObject:{string:"string",number:123,boolean:!0,null:null}}}}},i={args:{source:{array:[{string:"string"},{object:{number:123}},[1,2,3]]}}},o={args:{source:{rootObject:{string:"string",plainArray:[1,2,3],nestedObject:{number:123},nestedArray:[{boolean:!0},{object:{null:null}}]}}}},a={args:{source:{array:["string",{number:123},{nestedObject:{boolean:!0}},[1,"222",{null:null}]]}}},c={args:{source:{string:"string",schema:{type:"string",minLength:1,maxLength:10,enum:["a","b","c"],default:"a",examples:["a","b","c"],description:"A string property"}}}},p={args:{source:{string:"string",schema:{type:"object",properties:{string:{type:"string",description:"A string property"},number:{type:"number",description:"A number property"}}}}}},m={args:{source:{string:"string",schema:{type:"array",items:{type:"string",description:"A string property"}}}}},g={args:{source:{string:"string",schema:{oneOf:[{type:"string",description:"A string property"},{type:"number",description:"A number property"}]}}}},u={args:{source:{object:{string:"string"},schema:{type:"string",description:"A string property"}}}},d={args:{source:{array:["string"],schema:{type:"string",description:"A string property"}}}},l={args:{source:{string:"string",schema:{type:"string",minLength:1,maxLength:10,enum:["a","b","c"],default:"a",examples:["a","b","c"],description:"A string property"}},initialLevel:1}},y={args:{source:{string:"string",schema:{type:"object",properties:{string:{type:"string",description:"A string property"},number:{type:"number",description:"A number property"}}}},initialLevel:1}},b={args:{source:{string:"string",schema:{type:"array",items:{type:"string",description:"A string property"}}},initialLevel:1}},A={args:{source:{string:"string",schema:{oneOf:[{type:"string",description:"A string property"},{type:"number",description:"A number property"}]}},initialLevel:1}},P={args:{source:{object:{string:"string"},schema:{type:"string",description:"A string property"}},initialLevel:1}},v={args:{source:{array:["string"],schema:{type:"string",description:"A string property"}},initialLevel:1}};var S,h,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    source: {}
  }
}`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var O,L,f;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      number: 123,
      boolean: true,
      null: null
    }
  }
}`,...(f=(L=e.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var x,C,K;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(K=(C=n.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var N,J,T;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    source: {
      array: [1, 2, 3]
    }
  }
}`,...(T=(J=s.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var w,I,V;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(I=t.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var _,E,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var q,z,B;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(z=o.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,F,G;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(F=a.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,M,Q;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var R,U,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(er=(rr=g.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var nr,sr,tr;u.parameters={...u.parameters,docs:{...(nr=u.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
}`,...(tr=(sr=u.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var ir,or,ar;d.parameters={...d.parameters,docs:{...(ir=d.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    source: {
      array: ['string'],
      schema: {
        type: 'string',
        description: 'A string property'
      }
    }
  }
}`,...(ar=(or=d.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var cr,pr,mr;l.parameters={...l.parameters,docs:{...(cr=l.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
}`,...(mr=(pr=l.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var gr,ur,dr;y.parameters={...y.parameters,docs:{...(gr=y.parameters)==null?void 0:gr.docs,source:{originalSource:`{
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
}`,...(dr=(ur=y.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var lr,yr,br;b.parameters={...b.parameters,docs:{...(lr=b.parameters)==null?void 0:lr.docs,source:{originalSource:`{
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
}`,...(br=(yr=b.parameters)==null?void 0:yr.docs)==null?void 0:br.source}}};var Ar,Pr,vr;A.parameters={...A.parameters,docs:{...(Ar=A.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
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
}`,...(vr=(Pr=A.parameters)==null?void 0:Pr.docs)==null?void 0:vr.source}}};var Sr,hr,jr;P.parameters={...P.parameters,docs:{...(Sr=P.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(jr=(hr=P.parameters)==null?void 0:hr.docs)==null?void 0:jr.source}}};var Or,Lr,fr;v.parameters={...v.parameters,docs:{...(Or=v.parameters)==null?void 0:Or.docs,source:{originalSource:`{
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
}`,...(fr=(Lr=v.parameters)==null?void 0:Lr.docs)==null?void 0:fr.source}}};const _r=["Test","PrimitiveProperties","PrimitiveObjectProperty","PrimitiveArrayProperty","NestedObjectProperty","NestedArrayProperty","AllKindsOfObjectProperties","AllKindsOfArrayItems","PrimitivePropAndPrimitiveSchema","PrimitivePropAndObjectSchema","PrimitivePropAndArraySchema","PrimitivePropAndCombinerSchema","ObjectPropAndPrimitiveSchema","ArrayPropAndPrimitiveSchema","SecondLevelPrimitivePropAndPrimitiveSchema","SecondLevelPrimitivePropAndObjectSchema","SecondLevelPrimitivePropAndArraySchema","SecondLevelPrimitivePropAndCombinerSchema","SecondLevelObjectPropAndPrimitiveSchema","SecondLevelArrayPropAndPrimitiveSchema"];export{a as AllKindsOfArrayItems,o as AllKindsOfObjectProperties,d as ArrayPropAndPrimitiveSchema,i as NestedArrayProperty,t as NestedObjectProperty,u as ObjectPropAndPrimitiveSchema,s as PrimitiveArrayProperty,n as PrimitiveObjectProperty,m as PrimitivePropAndArraySchema,g as PrimitivePropAndCombinerSchema,p as PrimitivePropAndObjectSchema,c as PrimitivePropAndPrimitiveSchema,e as PrimitiveProperties,v as SecondLevelArrayPropAndPrimitiveSchema,P as SecondLevelObjectPropAndPrimitiveSchema,b as SecondLevelPrimitivePropAndArraySchema,A as SecondLevelPrimitivePropAndCombinerSchema,y as SecondLevelPrimitivePropAndObjectSchema,l as SecondLevelPrimitivePropAndPrimitiveSchema,r as Test,_r as __namedExportsOrder,Vr as default};
