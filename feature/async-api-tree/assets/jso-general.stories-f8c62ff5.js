import{b as jr}from"./AsyncApiOperationViewer-000ebebc.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ea931b38.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-95c460fd.js";import"./GraphQLOperationDiffViewer-d71862cb.js";const Ir={title:"JSO Suite (General)",component:jr,parameters:{},argTypes:{source:{control:"object"}},args:{source:{}}},r={args:{source:{string:"string",number:123,boolean:!0,null:null}}},e={args:{source:{object:{string:"string",number:123,boolean:!0,null:null}}}},n={args:{source:{array:[1,2,3]}}},s={args:{source:{rootObject:{nestedObject:{string:"string",number:123,boolean:!0,null:null}}}}},t={args:{source:{array:[{string:"string"},{object:{number:123}},[1,2,3]]}}},i={args:{source:{rootObject:{string:"string",plainArray:[1,2,3],nestedObject:{number:123},nestedArray:[{boolean:!0},{object:{null:null}}]}}}},o={args:{source:{array:["string",{number:123},{nestedObject:{boolean:!0}},[1,"222",{null:null}]]}}},a={args:{source:{string:"string",schema:{type:"string",minLength:1,maxLength:10,enum:["a","b","c"],default:"a",examples:["a","b","c"],description:"A string property"}}}},c={args:{source:{string:"string",schema:{type:"object",properties:{string:{type:"string",description:"A string property"},number:{type:"number",description:"A number property"}}}}}},p={args:{source:{string:"string",schema:{type:"array",items:{type:"string",description:"A string property"}}}}},m={args:{source:{string:"string",schema:{oneOf:[{type:"string",description:"A string property"},{type:"number",description:"A number property"}]}}}},g={args:{source:{object:{string:"string"},schema:{type:"string",description:"A string property"}}}},u={args:{source:{array:["string"],schema:{type:"string",description:"A string property"}}}},d={args:{source:{string:"string",schema:{type:"string",minLength:1,maxLength:10,enum:["a","b","c"],default:"a",examples:["a","b","c"],description:"A string property"}},initialLevel:1}},l={args:{source:{string:"string",schema:{type:"object",properties:{string:{type:"string",description:"A string property"},number:{type:"number",description:"A number property"}}}},initialLevel:1}},y={args:{source:{string:"string",schema:{type:"array",items:{type:"string",description:"A string property"}}},initialLevel:1}},b={args:{source:{string:"string",schema:{oneOf:[{type:"string",description:"A string property"},{type:"number",description:"A number property"}]}},initialLevel:1}},A={args:{source:{object:{string:"string"},schema:{type:"string",description:"A string property"}},initialLevel:1}},P={args:{source:{array:["string"],schema:{type:"string",description:"A string property"}},initialLevel:1}};var v,S,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    source: {
      string: 'string',
      number: 123,
      boolean: true,
      null: null
    }
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var j,O,L;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(O=e.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var f,x,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    source: {
      array: [1, 2, 3]
    }
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var K,N,I;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(I=(N=s.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var J,_,w;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var E,G,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(G=i.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var V,k,q;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,B,D;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var F,H,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var Q,R,U;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(rr=($=g.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,nr,sr;u.parameters={...u.parameters,docs:{...(er=u.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    source: {
      array: ['string'],
      schema: {
        type: 'string',
        description: 'A string property'
      }
    }
  }
}`,...(sr=(nr=u.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var tr,ir,or;d.parameters={...d.parameters,docs:{...(tr=d.parameters)==null?void 0:tr.docs,source:{originalSource:`{
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
}`,...(or=(ir=d.parameters)==null?void 0:ir.docs)==null?void 0:or.source}}};var ar,cr,pr;l.parameters={...l.parameters,docs:{...(ar=l.parameters)==null?void 0:ar.docs,source:{originalSource:`{
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
}`,...(pr=(cr=l.parameters)==null?void 0:cr.docs)==null?void 0:pr.source}}};var mr,gr,ur;y.parameters={...y.parameters,docs:{...(mr=y.parameters)==null?void 0:mr.docs,source:{originalSource:`{
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
}`,...(ur=(gr=y.parameters)==null?void 0:gr.docs)==null?void 0:ur.source}}};var dr,lr,yr;b.parameters={...b.parameters,docs:{...(dr=b.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(yr=(lr=b.parameters)==null?void 0:lr.docs)==null?void 0:yr.source}}};var br,Ar,Pr;A.parameters={...A.parameters,docs:{...(br=A.parameters)==null?void 0:br.docs,source:{originalSource:`{
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
}`,...(Pr=(Ar=A.parameters)==null?void 0:Ar.docs)==null?void 0:Pr.source}}};var vr,Sr,hr;P.parameters={...P.parameters,docs:{...(vr=P.parameters)==null?void 0:vr.docs,source:{originalSource:`{
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
}`,...(hr=(Sr=P.parameters)==null?void 0:Sr.docs)==null?void 0:hr.source}}};const Jr=["PrimitiveProperties","PrimitiveObjectProperty","PrimitiveArrayProperty","NestedObjectProperty","NestedArrayProperty","AllKindsOfObjectProperties","AllKindsOfArrayItems","PrimitivePropAndPrimitiveSchema","PrimitivePropAndObjectSchema","PrimitivePropAndArraySchema","PrimitivePropAndCombinerSchema","ObjectPropAndPrimitiveSchema","ArrayPropAndPrimitiveSchema","SecondLevelPrimitivePropAndPrimitiveSchema","SecondLevelPrimitivePropAndObjectSchema","SecondLevelPrimitivePropAndArraySchema","SecondLevelPrimitivePropAndCombinerSchema","SecondLevelObjectPropAndPrimitiveSchema","SecondLevelArrayPropAndPrimitiveSchema"];export{o as AllKindsOfArrayItems,i as AllKindsOfObjectProperties,u as ArrayPropAndPrimitiveSchema,t as NestedArrayProperty,s as NestedObjectProperty,g as ObjectPropAndPrimitiveSchema,n as PrimitiveArrayProperty,e as PrimitiveObjectProperty,p as PrimitivePropAndArraySchema,m as PrimitivePropAndCombinerSchema,c as PrimitivePropAndObjectSchema,a as PrimitivePropAndPrimitiveSchema,r as PrimitiveProperties,P as SecondLevelArrayPropAndPrimitiveSchema,A as SecondLevelObjectPropAndPrimitiveSchema,y as SecondLevelPrimitivePropAndArraySchema,b as SecondLevelPrimitivePropAndCombinerSchema,l as SecondLevelPrimitivePropAndObjectSchema,d as SecondLevelPrimitivePropAndPrimitiveSchema,Jr as __namedExportsOrder,Ir as default};
