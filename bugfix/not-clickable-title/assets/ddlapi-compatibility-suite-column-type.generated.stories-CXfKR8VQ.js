import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t}from"./AsyncApiOperationViewer-BZqnVG_y.js";import{a as n,c as r,o as i,r as a,t as o}from"./compatibility-suite-utils-B-fPBKpb.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{t(),n(),r(),s={id:`ddlapi-compatibility-suite-column-type`,title:`DDL API Compatibility Suite/column-type`,render:o},c=`column-type`,l={name:`boolean-to-integer`,args:a(i,c,`boolean-to-integer`)},u={name:`bytea-to-text`,args:a(i,c,`bytea-to-text`)},d={name:`date-to-timestamp`,args:a(i,c,`date-to-timestamp`)},f={name:`decrease-decimal-precision`,args:a(i,c,`decrease-decimal-precision`)},p={name:`decrease-decimal-scale`,args:a(i,c,`decrease-decimal-scale`)},m={name:`decrease-varchar-size`,args:a(i,c,`decrease-varchar-size`)},h={name:`enum-to-text`,args:a(i,c,`enum-to-text`)},g={name:`increase-decimal-precision`,args:a(i,c,`increase-decimal-precision`)},_={name:`increase-decimal-scale`,args:a(i,c,`increase-decimal-scale`)},v={name:`increase-varchar-size`,args:a(i,c,`increase-varchar-size`)},y={name:`integer-to-boolean`,args:a(i,c,`integer-to-boolean`)},b={name:`integer-to-text`,args:a(i,c,`integer-to-text`)},x={name:`integer-to-varchar`,args:a(i,c,`integer-to-varchar`)},S={name:`json-to-jsonb`,args:a(i,c,`json-to-jsonb`)},C={name:`json-to-text`,args:a(i,c,`json-to-text`)},w={name:`jsonb-to-json`,args:a(i,c,`jsonb-to-json`)},T={name:`narrow-bigint-to-smallint`,args:a(i,c,`narrow-bigint-to-smallint`)},E={name:`narrow-double-to-real`,args:a(i,c,`narrow-double-to-real`)},D={name:`numeric-to-integer`,args:a(i,c,`numeric-to-integer`)},O={name:`numeric-to-real`,args:a(i,c,`numeric-to-real`)},k={name:`real-to-numeric`,args:a(i,c,`real-to-numeric`)},A={name:`text-to-bytea`,args:a(i,c,`text-to-bytea`)},j={name:`text-to-enum`,args:a(i,c,`text-to-enum`)},M={name:`text-to-json`,args:a(i,c,`text-to-json`)},N={name:`text-to-uuid`,args:a(i,c,`text-to-uuid`)},P={name:`text-to-varchar-limited`,args:a(i,c,`text-to-varchar-limited`)},F={name:`text-to-varchar-unlimited`,args:a(i,c,`text-to-varchar-unlimited`)},I={name:`timestamp-to-date`,args:a(i,c,`timestamp-to-date`)},L={name:`uuid-to-text`,args:a(i,c,`uuid-to-text`)},R={name:`varchar-to-integer`,args:a(i,c,`varchar-to-integer`)},z={name:`varchar-to-text`,args:a(i,c,`varchar-to-text`)},B={name:`widen-bigint-to-numeric`,args:a(i,c,`widen-bigint-to-numeric`)},V={name:`widen-integer-to-bigint`,args:a(i,c,`widen-integer-to-bigint`)},H={name:`widen-integer-to-numeric`,args:a(i,c,`widen-integer-to-numeric`)},U={name:`widen-real-to-double`,args:a(i,c,`widen-real-to-double`)},W={name:`widen-smallint-to-integer`,args:a(i,c,`widen-smallint-to-integer`)},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'boolean-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'boolean-to-integer')
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'bytea-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'bytea-to-text')
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'date-to-timestamp',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'date-to-timestamp')
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'decrease-decimal-precision',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'decrease-decimal-precision')
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'decrease-decimal-scale',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'decrease-decimal-scale')
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'decrease-varchar-size',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'decrease-varchar-size')
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'enum-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'enum-to-text')
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'increase-decimal-precision',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-decimal-precision')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'increase-decimal-scale',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-decimal-scale')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'increase-varchar-size',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'increase-varchar-size')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'integer-to-boolean',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-boolean')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'integer-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-text')
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'integer-to-varchar',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'integer-to-varchar')
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'json-to-jsonb',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'json-to-jsonb')
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'json-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'json-to-text')
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'jsonb-to-json',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'jsonb-to-json')
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'narrow-bigint-to-smallint',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-bigint-to-smallint')
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'narrow-double-to-real',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'narrow-double-to-real')
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'numeric-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'numeric-to-integer')
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'numeric-to-real',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'numeric-to-real')
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'real-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'real-to-numeric')
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'text-to-bytea',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-bytea')
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'text-to-enum',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-enum')
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'text-to-json',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-json')
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'text-to-uuid',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-uuid')
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'text-to-varchar-limited',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-varchar-limited')
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'text-to-varchar-unlimited',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'text-to-varchar-unlimited')
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'timestamp-to-date',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'timestamp-to-date')
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'uuid-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'uuid-to-text')
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'varchar-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'varchar-to-integer')
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'varchar-to-text',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'varchar-to-text')
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'widen-bigint-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-bigint-to-numeric')
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'widen-integer-to-bigint',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-integer-to-bigint')
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'widen-integer-to-numeric',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-integer-to-numeric')
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'widen-real-to-double',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-real-to-double')
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'widen-smallint-to-integer',
  args: getDdlStoryArgs(TEST_SPEC_TYPE_DDL_API, SUITE_ID, 'widen-smallint-to-integer')
}`,...W.parameters?.docs?.source}}},G=`BooleanToInteger.ByteaToText.DateToTimestamp.DecreaseDecimalPrecision.DecreaseDecimalScale.DecreaseVarcharSize.EnumToText.IncreaseDecimalPrecision.IncreaseDecimalScale.IncreaseVarcharSize.IntegerToBoolean.IntegerToText.IntegerToVarchar.JsonToJsonb.JsonToText.JsonbToJson.NarrowBigintToSmallint.NarrowDoubleToReal.NumericToInteger.NumericToReal.RealToNumeric.TextToBytea.TextToEnum.TextToJson.TextToUuid.TextToVarcharLimited.TextToVarcharUnlimited.TimestampToDate.UuidToText.VarcharToInteger.VarcharToText.WidenBigintToNumeric.WidenIntegerToBigint.WidenIntegerToNumeric.WidenRealToDouble.WidenSmallintToInteger`.split(`.`)})))()}K();export{l as BooleanToInteger,u as ByteaToText,d as DateToTimestamp,f as DecreaseDecimalPrecision,p as DecreaseDecimalScale,m as DecreaseVarcharSize,h as EnumToText,g as IncreaseDecimalPrecision,_ as IncreaseDecimalScale,v as IncreaseVarcharSize,y as IntegerToBoolean,b as IntegerToText,x as IntegerToVarchar,S as JsonToJsonb,C as JsonToText,w as JsonbToJson,T as NarrowBigintToSmallint,E as NarrowDoubleToReal,D as NumericToInteger,O as NumericToReal,k as RealToNumeric,A as TextToBytea,j as TextToEnum,M as TextToJson,N as TextToUuid,P as TextToVarcharLimited,F as TextToVarcharUnlimited,I as TimestampToDate,L as UuidToText,R as VarcharToInteger,z as VarcharToText,B as WidenBigintToNumeric,V as WidenIntegerToBigint,H as WidenIntegerToNumeric,U as WidenRealToDouble,W as WidenSmallintToInteger,G as __namedExportsOrder,s as default};