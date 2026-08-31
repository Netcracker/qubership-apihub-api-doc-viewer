import"./AsyncApiOperationViewer-465b155e.js";import"./DdlTableDiffsViewer-efacc174.js";import"./DdlTableViewer-7442658d.js";import"./GraphQLOperationDiffViewer-efa1db5a.js";import"./GraphQLOperationViewer-e3dc128f.js";import"./DiffBadge-4e6868e6.js";import{D as Jr,g as e,T as r}from"./compatibility-suite-utils-df51b607.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-f1c4d46c.js";/* empty css              */import"./GraphPropNodeViewer-162569f6.js";import"./index-415bee12.js";import"./graph-api-transformers-0f74cb65.js";import"./buildASTSchema-f14864f0.js";import"./index-8cf80a84.js";import"./build-from-ddl-browser-3ec9ecee.js";import"./iframe-f3449af9.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const na={id:"ddlapi-compatibility-suite-column-type",title:"DDL API Compatibility Suite/column-type",render:Jr},a="column-type",t={name:"binary-to-text",args:e(r,a,"binary-to-text")},o={name:"bool-to-int",args:e(r,a,"bool-to-int")},s={name:"date-to-timestamp",args:e(r,a,"date-to-timestamp")},n={name:"decrease-decimal-precision",args:e(r,a,"decrease-decimal-precision")},c={name:"decrease-decimal-scale",args:e(r,a,"decrease-decimal-scale")},i={name:"decrease-varchar-size",args:e(r,a,"decrease-varchar-size")},m={name:"enum-to-text",args:e(r,a,"enum-to-text")},d={name:"float-to-decimal",args:e(r,a,"float-to-decimal")},g={name:"increase-decimal-precision",args:e(r,a,"increase-decimal-precision")},T={name:"increase-decimal-scale",args:e(r,a,"increase-decimal-scale")},l={name:"increase-varchar-size",args:e(r,a,"increase-varchar-size")},S={name:"int-to-bool",args:e(r,a,"int-to-bool")},p={name:"integer-to-varchar",args:e(r,a,"integer-to-varchar")},_={name:"json-to-jsonb",args:e(r,a,"json-to-jsonb")},u={name:"json-to-text",args:e(r,a,"json-to-text")},D={name:"jsonb-to-json",args:e(r,a,"jsonb-to-json")},E={name:"narrow-bigint-to-smallint",args:e(r,a,"narrow-bigint-to-smallint")},I={name:"narrow-cross-family-to-text",args:e(r,a,"narrow-cross-family-to-text")},P={name:"narrow-double-to-real",args:e(r,a,"narrow-double-to-real")},A={name:"numeric-to-float",args:e(r,a,"numeric-to-float")},x={name:"numeric-to-integer",args:e(r,a,"numeric-to-integer")},y={name:"text-to-binary",args:e(r,a,"text-to-binary")},b={name:"text-to-enum",args:e(r,a,"text-to-enum")},U={name:"text-to-json",args:e(r,a,"text-to-json")},h={name:"text-to-uuid",args:e(r,a,"text-to-uuid")},C={name:"text-to-varchar-limited",args:e(r,a,"text-to-varchar-limited")},L={name:"text-to-varchar-unlimited",args:e(r,a,"text-to-varchar-unlimited")},w={name:"timestamp-to-date",args:e(r,a,"timestamp-to-date")},Y={name:"uuid-to-text",args:e(r,a,"uuid-to-text")},v={name:"varchar-to-integer",args:e(r,a,"varchar-to-integer")},j={name:"varchar-to-text",args:e(r,a,"varchar-to-text")},f={name:"widen-bigint-to-numeric",args:e(r,a,"widen-bigint-to-numeric")},B={name:"widen-float-to-double",args:e(r,a,"widen-float-to-double")},N={name:"widen-integer-to-bigint",args:e(r,a,"widen-integer-to-bigint")},V={name:"widen-integer-to-numeric",args:e(r,a,"widen-integer-to-numeric")},z={name:"widen-smallint-to-integer",args:e(r,a,"widen-smallint-to-integer")};var J,W,F;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'binary-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'binary-to-text')
}`,...(F=(W=t.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var R,O,k;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'bool-to-int',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'bool-to-int')
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var q,G,H;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'date-to-timestamp',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'date-to-timestamp')
}`,...(H=(G=s.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,M,Q;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'decrease-decimal-precision',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'decrease-decimal-precision')
}`,...(Q=(M=n.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Z,$;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'decrease-decimal-scale',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'decrease-decimal-scale')
}`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'decrease-varchar-size',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'decrease-varchar-size')
}`,...(ae=(re=i.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,se;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'enum-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'enum-to-text')
}`,...(se=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ce,ie;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'float-to-decimal',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'float-to-decimal')
}`,...(ie=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,de,ge;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'increase-decimal-precision',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-decimal-precision')
}`,...(ge=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var Te,le,Se;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'increase-decimal-scale',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-decimal-scale')
}`,...(Se=(le=T.parameters)==null?void 0:le.docs)==null?void 0:Se.source}}};var pe,_e,ue;l.parameters={...l.parameters,docs:{...(pe=l.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'increase-varchar-size',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-varchar-size')
}`,...(ue=(_e=l.parameters)==null?void 0:_e.docs)==null?void 0:ue.source}}};var De,Ee,Ie;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'int-to-bool',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'int-to-bool')
}`,...(Ie=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Pe,Ae,xe;p.parameters={...p.parameters,docs:{...(Pe=p.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'integer-to-varchar',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-varchar')
}`,...(xe=(Ae=p.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};var ye,be,Ue;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'json-to-jsonb',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'json-to-jsonb')
}`,...(Ue=(be=_.parameters)==null?void 0:be.docs)==null?void 0:Ue.source}}};var he,Ce,Le;u.parameters={...u.parameters,docs:{...(he=u.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'json-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'json-to-text')
}`,...(Le=(Ce=u.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var we,Ye,ve;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'jsonb-to-json',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'jsonb-to-json')
}`,...(ve=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:ve.source}}};var je,fe,Be;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'narrow-bigint-to-smallint',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-bigint-to-smallint')
}`,...(Be=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var Ne,Ve,ze;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'narrow-cross-family-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-cross-family-to-text')
}`,...(ze=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Je,We,Fe;P.parameters={...P.parameters,docs:{...(Je=P.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'narrow-double-to-real',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-double-to-real')
}`,...(Fe=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Re,Oe,ke;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'numeric-to-float',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'numeric-to-float')
}`,...(ke=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source}}};var qe,Ge,He;x.parameters={...x.parameters,docs:{...(qe=x.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'numeric-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'numeric-to-integer')
}`,...(He=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Me,Qe;y.parameters={...y.parameters,docs:{...(Ke=y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'text-to-binary',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-binary')
}`,...(Qe=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};var Xe,Ze,$e;b.parameters={...b.parameters,docs:{...(Xe=b.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'text-to-enum',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-enum')
}`,...($e=(Ze=b.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var er,rr,ar;U.parameters={...U.parameters,docs:{...(er=U.parameters)==null?void 0:er.docs,source:{originalSource:`{
  name: 'text-to-json',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-json')
}`,...(ar=(rr=U.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,or,sr;h.parameters={...h.parameters,docs:{...(tr=h.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: 'text-to-uuid',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-uuid')
}`,...(sr=(or=h.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var nr,cr,ir;C.parameters={...C.parameters,docs:{...(nr=C.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  name: 'text-to-varchar-limited',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-varchar-limited')
}`,...(ir=(cr=C.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var mr,dr,gr;L.parameters={...L.parameters,docs:{...(mr=L.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  name: 'text-to-varchar-unlimited',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-varchar-unlimited')
}`,...(gr=(dr=L.parameters)==null?void 0:dr.docs)==null?void 0:gr.source}}};var Tr,lr,Sr;w.parameters={...w.parameters,docs:{...(Tr=w.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  name: 'timestamp-to-date',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'timestamp-to-date')
}`,...(Sr=(lr=w.parameters)==null?void 0:lr.docs)==null?void 0:Sr.source}}};var pr,_r,ur;Y.parameters={...Y.parameters,docs:{...(pr=Y.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  name: 'uuid-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'uuid-to-text')
}`,...(ur=(_r=Y.parameters)==null?void 0:_r.docs)==null?void 0:ur.source}}};var Dr,Er,Ir;v.parameters={...v.parameters,docs:{...(Dr=v.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  name: 'varchar-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'varchar-to-integer')
}`,...(Ir=(Er=v.parameters)==null?void 0:Er.docs)==null?void 0:Ir.source}}};var Pr,Ar,xr;j.parameters={...j.parameters,docs:{...(Pr=j.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  name: 'varchar-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'varchar-to-text')
}`,...(xr=(Ar=j.parameters)==null?void 0:Ar.docs)==null?void 0:xr.source}}};var yr,br,Ur;f.parameters={...f.parameters,docs:{...(yr=f.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  name: 'widen-bigint-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-bigint-to-numeric')
}`,...(Ur=(br=f.parameters)==null?void 0:br.docs)==null?void 0:Ur.source}}};var hr,Cr,Lr;B.parameters={...B.parameters,docs:{...(hr=B.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  name: 'widen-float-to-double',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-float-to-double')
}`,...(Lr=(Cr=B.parameters)==null?void 0:Cr.docs)==null?void 0:Lr.source}}};var wr,Yr,vr;N.parameters={...N.parameters,docs:{...(wr=N.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  name: 'widen-integer-to-bigint',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-integer-to-bigint')
}`,...(vr=(Yr=N.parameters)==null?void 0:Yr.docs)==null?void 0:vr.source}}};var jr,fr,Br;V.parameters={...V.parameters,docs:{...(jr=V.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  name: 'widen-integer-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-integer-to-numeric')
}`,...(Br=(fr=V.parameters)==null?void 0:fr.docs)==null?void 0:Br.source}}};var Nr,Vr,zr;z.parameters={...z.parameters,docs:{...(Nr=z.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  name: 'widen-smallint-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-smallint-to-integer')
}`,...(zr=(Vr=z.parameters)==null?void 0:Vr.docs)==null?void 0:zr.source}}};const ca=["BinaryToText","BoolToInt","DateToTimestamp","DecreaseDecimalPrecision","DecreaseDecimalScale","DecreaseVarcharSize","EnumToText","FloatToDecimal","IncreaseDecimalPrecision","IncreaseDecimalScale","IncreaseVarcharSize","IntToBool","IntegerToVarchar","JsonToJsonb","JsonToText","JsonbToJson","NarrowBigintToSmallint","NarrowCrossFamilyToText","NarrowDoubleToReal","NumericToFloat","NumericToInteger","TextToBinary","TextToEnum","TextToJson","TextToUuid","TextToVarcharLimited","TextToVarcharUnlimited","TimestampToDate","UuidToText","VarcharToInteger","VarcharToText","WidenBigintToNumeric","WidenFloatToDouble","WidenIntegerToBigint","WidenIntegerToNumeric","WidenSmallintToInteger"];export{t as BinaryToText,o as BoolToInt,s as DateToTimestamp,n as DecreaseDecimalPrecision,c as DecreaseDecimalScale,i as DecreaseVarcharSize,m as EnumToText,d as FloatToDecimal,g as IncreaseDecimalPrecision,T as IncreaseDecimalScale,l as IncreaseVarcharSize,S as IntToBool,p as IntegerToVarchar,_ as JsonToJsonb,u as JsonToText,D as JsonbToJson,E as NarrowBigintToSmallint,I as NarrowCrossFamilyToText,P as NarrowDoubleToReal,A as NumericToFloat,x as NumericToInteger,y as TextToBinary,b as TextToEnum,U as TextToJson,h as TextToUuid,C as TextToVarcharLimited,L as TextToVarcharUnlimited,w as TimestampToDate,Y as UuidToText,v as VarcharToInteger,j as VarcharToText,f as WidenBigintToNumeric,B as WidenFloatToDouble,N as WidenIntegerToBigint,V as WidenIntegerToNumeric,z as WidenSmallintToInteger,ca as __namedExportsOrder,na as default};
