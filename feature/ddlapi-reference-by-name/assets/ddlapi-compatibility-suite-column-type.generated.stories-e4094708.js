import"./AsyncApiOperationViewer-15bf0539.js";import"./DdlTableDiffsViewer-972c38fb.js";import"./DdlTableViewer-b95a4cbb.js";import"./GraphQLOperationDiffViewer-490dc0d4.js";import"./GraphQLOperationViewer-b682e589.js";import"./DiffBadge-08a7a6ec.js";import{D as Wr,g as e,T as r}from"./compatibility-suite-utils-3ae3f5e1.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-ff869b69.js";/* empty css              */import"./GraphPropNodeViewer-b12d062f.js";import"./index-415bee12.js";import"./graph-api-transformers-1ee76527.js";import"./buildASTSchema-f14864f0.js";import"./index-8cf80a84.js";import"./build-from-ddl-browser-63fffab1.js";import"./iframe-75eb3ea3.js";import"../sb-preview/runtime.js";import"./ddl-story-realm-utils-c0692776.js";const na={id:"ddlapi-compatibility-suite-column-type",title:"DDL API Compatibility Suite/column-type",render:Wr},a="column-type",t={name:"boolean-to-integer",args:e(r,a,"boolean-to-integer")},o={name:"bytea-to-text",args:e(r,a,"bytea-to-text")},s={name:"date-to-timestamp",args:e(r,a,"date-to-timestamp")},n={name:"decrease-decimal-precision",args:e(r,a,"decrease-decimal-precision")},c={name:"decrease-decimal-scale",args:e(r,a,"decrease-decimal-scale")},i={name:"decrease-varchar-size",args:e(r,a,"decrease-varchar-size")},m={name:"enum-to-text",args:e(r,a,"enum-to-text")},g={name:"increase-decimal-precision",args:e(r,a,"increase-decimal-precision")},d={name:"increase-decimal-scale",args:e(r,a,"increase-decimal-scale")},T={name:"increase-varchar-size",args:e(r,a,"increase-varchar-size")},l={name:"integer-to-boolean",args:e(r,a,"integer-to-boolean")},S={name:"integer-to-text",args:e(r,a,"integer-to-text")},p={name:"integer-to-varchar",args:e(r,a,"integer-to-varchar")},u={name:"json-to-jsonb",args:e(r,a,"json-to-jsonb")},_={name:"json-to-text",args:e(r,a,"json-to-text")},D={name:"jsonb-to-json",args:e(r,a,"jsonb-to-json")},E={name:"narrow-bigint-to-smallint",args:e(r,a,"narrow-bigint-to-smallint")},I={name:"narrow-double-to-real",args:e(r,a,"narrow-double-to-real")},P={name:"numeric-to-integer",args:e(r,a,"numeric-to-integer")},A={name:"numeric-to-real",args:e(r,a,"numeric-to-real")},x={name:"real-to-numeric",args:e(r,a,"real-to-numeric")},y={name:"text-to-bytea",args:e(r,a,"text-to-bytea")},b={name:"text-to-enum",args:e(r,a,"text-to-enum")},U={name:"text-to-json",args:e(r,a,"text-to-json")},h={name:"text-to-uuid",args:e(r,a,"text-to-uuid")},L={name:"text-to-varchar-limited",args:e(r,a,"text-to-varchar-limited")},C={name:"text-to-varchar-unlimited",args:e(r,a,"text-to-varchar-unlimited")},Y={name:"timestamp-to-date",args:e(r,a,"timestamp-to-date")},w={name:"uuid-to-text",args:e(r,a,"uuid-to-text")},v={name:"varchar-to-integer",args:e(r,a,"varchar-to-integer")},j={name:"varchar-to-text",args:e(r,a,"varchar-to-text")},B={name:"widen-bigint-to-numeric",args:e(r,a,"widen-bigint-to-numeric")},N={name:"widen-integer-to-bigint",args:e(r,a,"widen-integer-to-bigint")},V={name:"widen-integer-to-numeric",args:e(r,a,"widen-integer-to-numeric")},z={name:"widen-real-to-double",args:e(r,a,"widen-real-to-double")},J={name:"widen-smallint-to-integer",args:e(r,a,"widen-smallint-to-integer")};var W,R,f;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'boolean-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'boolean-to-integer')
}`,...(f=(R=t.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var O,k,q;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'bytea-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'bytea-to-text')
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,G,H;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(se=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ce,ie;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'increase-decimal-precision',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-decimal-precision')
}`,...(ie=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,ge,de;d.parameters={...d.parameters,docs:{...(me=d.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'increase-decimal-scale',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-decimal-scale')
}`,...(de=(ge=d.parameters)==null?void 0:ge.docs)==null?void 0:de.source}}};var Te,le,Se;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'increase-varchar-size',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-varchar-size')
}`,...(Se=(le=T.parameters)==null?void 0:le.docs)==null?void 0:Se.source}}};var pe,ue,_e;l.parameters={...l.parameters,docs:{...(pe=l.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'integer-to-boolean',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-boolean')
}`,...(_e=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}};var De,Ee,Ie;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'integer-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-text')
}`,...(Ie=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Pe,Ae,xe;p.parameters={...p.parameters,docs:{...(Pe=p.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'integer-to-varchar',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-varchar')
}`,...(xe=(Ae=p.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};var ye,be,Ue;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'json-to-jsonb',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'json-to-jsonb')
}`,...(Ue=(be=u.parameters)==null?void 0:be.docs)==null?void 0:Ue.source}}};var he,Le,Ce;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'json-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'json-to-text')
}`,...(Ce=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};var Ye,we,ve;D.parameters={...D.parameters,docs:{...(Ye=D.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'jsonb-to-json',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'jsonb-to-json')
}`,...(ve=(we=D.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var je,Be,Ne;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'narrow-bigint-to-smallint',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-bigint-to-smallint')
}`,...(Ne=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var Ve,ze,Je;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'narrow-double-to-real',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-double-to-real')
}`,...(Je=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var We,Re,fe;P.parameters={...P.parameters,docs:{...(We=P.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'numeric-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'numeric-to-integer')
}`,...(fe=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:fe.source}}};var Oe,ke,qe;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'numeric-to-real',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'numeric-to-real')
}`,...(qe=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var Fe,Ge,He;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'real-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'real-to-numeric')
}`,...(He=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Me,Qe;y.parameters={...y.parameters,docs:{...(Ke=y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'text-to-bytea',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-bytea')
}`,...(Qe=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};var Xe,Ze,$e;b.parameters={...b.parameters,docs:{...(Xe=b.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'text-to-enum',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-enum')
}`,...($e=(Ze=b.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var er,rr,ar;U.parameters={...U.parameters,docs:{...(er=U.parameters)==null?void 0:er.docs,source:{originalSource:`{
  name: 'text-to-json',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-json')
}`,...(ar=(rr=U.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,or,sr;h.parameters={...h.parameters,docs:{...(tr=h.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  name: 'text-to-uuid',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-uuid')
}`,...(sr=(or=h.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var nr,cr,ir;L.parameters={...L.parameters,docs:{...(nr=L.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  name: 'text-to-varchar-limited',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-varchar-limited')
}`,...(ir=(cr=L.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var mr,gr,dr;C.parameters={...C.parameters,docs:{...(mr=C.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  name: 'text-to-varchar-unlimited',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-varchar-unlimited')
}`,...(dr=(gr=C.parameters)==null?void 0:gr.docs)==null?void 0:dr.source}}};var Tr,lr,Sr;Y.parameters={...Y.parameters,docs:{...(Tr=Y.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
  name: 'timestamp-to-date',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'timestamp-to-date')
}`,...(Sr=(lr=Y.parameters)==null?void 0:lr.docs)==null?void 0:Sr.source}}};var pr,ur,_r;w.parameters={...w.parameters,docs:{...(pr=w.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  name: 'uuid-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'uuid-to-text')
}`,...(_r=(ur=w.parameters)==null?void 0:ur.docs)==null?void 0:_r.source}}};var Dr,Er,Ir;v.parameters={...v.parameters,docs:{...(Dr=v.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  name: 'varchar-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'varchar-to-integer')
}`,...(Ir=(Er=v.parameters)==null?void 0:Er.docs)==null?void 0:Ir.source}}};var Pr,Ar,xr;j.parameters={...j.parameters,docs:{...(Pr=j.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  name: 'varchar-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'varchar-to-text')
}`,...(xr=(Ar=j.parameters)==null?void 0:Ar.docs)==null?void 0:xr.source}}};var yr,br,Ur;B.parameters={...B.parameters,docs:{...(yr=B.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  name: 'widen-bigint-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-bigint-to-numeric')
}`,...(Ur=(br=B.parameters)==null?void 0:br.docs)==null?void 0:Ur.source}}};var hr,Lr,Cr;N.parameters={...N.parameters,docs:{...(hr=N.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  name: 'widen-integer-to-bigint',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-integer-to-bigint')
}`,...(Cr=(Lr=N.parameters)==null?void 0:Lr.docs)==null?void 0:Cr.source}}};var Yr,wr,vr;V.parameters={...V.parameters,docs:{...(Yr=V.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  name: 'widen-integer-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-integer-to-numeric')
}`,...(vr=(wr=V.parameters)==null?void 0:wr.docs)==null?void 0:vr.source}}};var jr,Br,Nr;z.parameters={...z.parameters,docs:{...(jr=z.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  name: 'widen-real-to-double',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-real-to-double')
}`,...(Nr=(Br=z.parameters)==null?void 0:Br.docs)==null?void 0:Nr.source}}};var Vr,zr,Jr;J.parameters={...J.parameters,docs:{...(Vr=J.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  name: 'widen-smallint-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-smallint-to-integer')
}`,...(Jr=(zr=J.parameters)==null?void 0:zr.docs)==null?void 0:Jr.source}}};const ca=["BooleanToInteger","ByteaToText","DateToTimestamp","DecreaseDecimalPrecision","DecreaseDecimalScale","DecreaseVarcharSize","EnumToText","IncreaseDecimalPrecision","IncreaseDecimalScale","IncreaseVarcharSize","IntegerToBoolean","IntegerToText","IntegerToVarchar","JsonToJsonb","JsonToText","JsonbToJson","NarrowBigintToSmallint","NarrowDoubleToReal","NumericToInteger","NumericToReal","RealToNumeric","TextToBytea","TextToEnum","TextToJson","TextToUuid","TextToVarcharLimited","TextToVarcharUnlimited","TimestampToDate","UuidToText","VarcharToInteger","VarcharToText","WidenBigintToNumeric","WidenIntegerToBigint","WidenIntegerToNumeric","WidenRealToDouble","WidenSmallintToInteger"];export{t as BooleanToInteger,o as ByteaToText,s as DateToTimestamp,n as DecreaseDecimalPrecision,c as DecreaseDecimalScale,i as DecreaseVarcharSize,m as EnumToText,g as IncreaseDecimalPrecision,d as IncreaseDecimalScale,T as IncreaseVarcharSize,l as IntegerToBoolean,S as IntegerToText,p as IntegerToVarchar,u as JsonToJsonb,_ as JsonToText,D as JsonbToJson,E as NarrowBigintToSmallint,I as NarrowDoubleToReal,P as NumericToInteger,A as NumericToReal,x as RealToNumeric,y as TextToBytea,b as TextToEnum,U as TextToJson,h as TextToUuid,L as TextToVarcharLimited,C as TextToVarcharUnlimited,Y as TimestampToDate,w as UuidToText,v as VarcharToInteger,j as VarcharToText,B as WidenBigintToNumeric,N as WidenIntegerToBigint,V as WidenIntegerToNumeric,z as WidenRealToDouble,J as WidenSmallintToInteger,ca as __namedExportsOrder,na as default};
