import{c as Sr,a as Cr,j as Or,b as xr}from"./json-schema-samples-common-92bce2c7.js";import"./parse-yaml-source-d821fde9.js";import"./public-api-d6a34651.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-99f9967d.js";import"./DiffBadge-eb96c658.js";import"./IndexesNodeViewer-8c01fa85.js";import"./DdlTableDiffsViewer-aa31b967.js";/* empty css              */import"./DdlTableViewer-e400cdbb.js";import"./GraphQLOperationDiffViewer-1ec780a8.js";import"./GraphPropNodeViewer-f886ab8b.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a2317908.js";const Pr=`type: object

`,vr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true

`,Nr=`type: object
description: Sample object description

`,qr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description

`,wr=`type: object
properties:
  name:
    type: string
  id:
    type: integer

`,Br=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer

`,Jr=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer

`,Fr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer

`,Ir=`type: object
additionalProperties:
  type: string

`,Er=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
additionalProperties:
  type: string

`,Mr=`type: object
description: Sample object description
additionalProperties:
  type: string

`,kr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
additionalProperties:
  type: string

`,zr=`type: object
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string

`,Ar=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string

`,Dr=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string

`,Gr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string

`,Hr=`type: object
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Kr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Lr=`type: object
description: Sample object description
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Qr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Rr=`type: object
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Tr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Ur=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Vr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Wr=`type: object
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Xr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Yr=`type: object
description: Sample object description
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,Zr=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,$r=`type: object
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,ea=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,ra=`type: object
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,aa=`type: object
title: Sample Object
readOnly: true
writeOnly: true
deprecated: true
description: Sample object description
properties:
  name:
    type: string
  id:
    type: integer
additionalProperties:
  type: string
required:
  - name
minProperties: 1
maxProperties: 10
propertyNames:
  enum:
    - name
    - id
enum:
  - name: first
  - name: second
default:
  name: default
examples:
  - name: example

`,na=Object.assign({"../../../../samples/json-schema/object/001-type-only/sample.yaml":Pr,"../../../../samples/json-schema/object/002-header/sample.yaml":vr,"../../../../samples/json-schema/object/003-description/sample.yaml":Nr,"../../../../samples/json-schema/object/004-header-description/sample.yaml":qr,"../../../../samples/json-schema/object/005-properties/sample.yaml":wr,"../../../../samples/json-schema/object/006-header-properties/sample.yaml":Br,"../../../../samples/json-schema/object/007-description-properties/sample.yaml":Jr,"../../../../samples/json-schema/object/008-header-description-properties/sample.yaml":Fr,"../../../../samples/json-schema/object/009-additional-properties/sample.yaml":Ir,"../../../../samples/json-schema/object/010-header-additional-properties/sample.yaml":Er,"../../../../samples/json-schema/object/011-description-additional-properties/sample.yaml":Mr,"../../../../samples/json-schema/object/012-header-description-additional-properties/sample.yaml":kr,"../../../../samples/json-schema/object/013-properties-additional-properties/sample.yaml":zr,"../../../../samples/json-schema/object/014-header-properties-additional-properties/sample.yaml":Ar,"../../../../samples/json-schema/object/015-description-properties-additional-properties/sample.yaml":Dr,"../../../../samples/json-schema/object/016-header-description-properties-additional-properties/sample.yaml":Gr,"../../../../samples/json-schema/object/017-additional-info/sample.yaml":Hr,"../../../../samples/json-schema/object/018-header-additional-info/sample.yaml":Kr,"../../../../samples/json-schema/object/019-description-additional-info/sample.yaml":Lr,"../../../../samples/json-schema/object/020-header-description-additional-info/sample.yaml":Qr,"../../../../samples/json-schema/object/021-properties-additional-info/sample.yaml":Rr,"../../../../samples/json-schema/object/022-header-properties-additional-info/sample.yaml":Tr,"../../../../samples/json-schema/object/023-description-properties-additional-info/sample.yaml":Ur,"../../../../samples/json-schema/object/024-header-description-properties-additional-info/sample.yaml":Vr,"../../../../samples/json-schema/object/025-additional-properties-additional-info/sample.yaml":Wr,"../../../../samples/json-schema/object/026-header-additional-properties-additional-info/sample.yaml":Xr,"../../../../samples/json-schema/object/027-description-additional-properties-additional-info/sample.yaml":Yr,"../../../../samples/json-schema/object/028-header-description-additional-properties-additional-info/sample.yaml":Zr,"../../../../samples/json-schema/object/029-properties-additional-properties-additional-info/sample.yaml":$r,"../../../../samples/json-schema/object/030-header-properties-additional-properties-additional-info/sample.yaml":ea,"../../../../samples/json-schema/object/031-description-properties-additional-properties-additional-info/sample.yaml":ra,"../../../../samples/json-schema/object/032-header-description-properties-additional-properties-additional-info/sample.yaml":aa}),ta=Sr(na),ia=Cr(ta),e=xr(ia),Sa={...Or,id:"json-schema-suite-object",title:"JSON Schema Suite/Object"},r=e("001-type-only"),a=e("002-header"),n=e("003-description"),t=e("004-header-description"),i=e("005-properties"),o=e("006-header-properties"),s=e("007-description-properties"),p=e("008-header-description-properties"),d=e("009-additional-properties"),c=e("010-header-additional-properties"),m=e("011-description-additional-properties"),l=e("012-header-description-additional-properties"),_=e("013-properties-additional-properties"),u=e("014-header-properties-additional-properties"),y=e("015-description-properties-additional-properties"),j=e("016-header-description-properties-additional-properties"),b=e("017-additional-info"),f=e("018-header-additional-info"),h=e("019-description-additional-info"),g=e("020-header-description-additional-info"),S=e("021-properties-additional-info"),C=e("022-header-properties-additional-info"),O=e("023-description-properties-additional-info"),x=e("024-header-description-properties-additional-info"),P=e("025-additional-properties-additional-info"),v=e("026-header-additional-properties-additional-info"),N=e("027-description-additional-properties-additional-info"),q=e("028-header-description-additional-properties-additional-info"),w=e("029-properties-additional-properties-additional-info"),B=e("030-header-properties-additional-properties-additional-info"),J=e("031-description-properties-additional-properties-additional-info"),F=e("032-header-description-properties-additional-properties-additional-info");var I,E,M;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("001-type-only")',...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,z,A;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("002-header")',...(A=(z=a.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,G,H;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("003-description")',...(H=(G=n.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,L,Q;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("004-header-description")',...(Q=(L=t.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var R,T,U;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("005-properties")',...(U=(T=i.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var V,W,X;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("006-header-properties")',...(X=(W=o.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("007-description-properties")',...($=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("008-header-description-properties")',...(ae=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,ie;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("009-additional-properties")',...(ie=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var oe,se,pe;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("010-header-additional-properties")',...(pe=(se=c.parameters)==null?void 0:se.docs)==null?void 0:pe.source}}};var de,ce,me;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("011-description-additional-properties")',...(me=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,_e,ue;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("012-header-description-additional-properties")',...(ue=(_e=l.parameters)==null?void 0:_e.docs)==null?void 0:ue.source}}};var ye,je,be;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("013-properties-additional-properties")',...(be=(je=_.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var fe,he,ge;u.parameters={...u.parameters,docs:{...(fe=u.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("014-header-properties-additional-properties")',...(ge=(he=u.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var Se,Ce,Oe;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("015-description-properties-additional-properties")',...(Oe=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var xe,Pe,ve;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("016-header-description-properties-additional-properties")',...(ve=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:ve.source}}};var Ne,qe,we;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("017-additional-info")',...(we=(qe=b.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};var Be,Je,Fe;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("018-header-additional-info")',...(Fe=(Je=f.parameters)==null?void 0:Je.docs)==null?void 0:Fe.source}}};var Ie,Ee,Me;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("019-description-additional-info")',...(Me=(Ee=h.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var ke,ze,Ae;g.parameters={...g.parameters,docs:{...(ke=g.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("020-header-description-additional-info")',...(Ae=(ze=g.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};var De,Ge,He;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("021-properties-additional-info")',...(He=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Le,Qe;C.parameters={...C.parameters,docs:{...(Ke=C.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("022-header-properties-additional-info")',...(Qe=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:Qe.source}}};var Re,Te,Ue;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("023-description-properties-additional-info")',...(Ue=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Ue.source}}};var Ve,We,Xe;x.parameters={...x.parameters,docs:{...(Ve=x.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("024-header-description-properties-additional-info")',...(Xe=(We=x.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("025-additional-properties-additional-info")',...($e=(Ze=P.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var er,rr,ar;v.parameters={...v.parameters,docs:{...(er=v.parameters)==null?void 0:er.docs,source:{originalSource:'createCaseStory("026-header-additional-properties-additional-info")',...(ar=(rr=v.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var nr,tr,ir;N.parameters={...N.parameters,docs:{...(nr=N.parameters)==null?void 0:nr.docs,source:{originalSource:'createCaseStory("027-description-additional-properties-additional-info")',...(ir=(tr=N.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};var or,sr,pr;q.parameters={...q.parameters,docs:{...(or=q.parameters)==null?void 0:or.docs,source:{originalSource:'createCaseStory("028-header-description-additional-properties-additional-info")',...(pr=(sr=q.parameters)==null?void 0:sr.docs)==null?void 0:pr.source}}};var dr,cr,mr;w.parameters={...w.parameters,docs:{...(dr=w.parameters)==null?void 0:dr.docs,source:{originalSource:'createCaseStory("029-properties-additional-properties-additional-info")',...(mr=(cr=w.parameters)==null?void 0:cr.docs)==null?void 0:mr.source}}};var lr,_r,ur;B.parameters={...B.parameters,docs:{...(lr=B.parameters)==null?void 0:lr.docs,source:{originalSource:'createCaseStory("030-header-properties-additional-properties-additional-info")',...(ur=(_r=B.parameters)==null?void 0:_r.docs)==null?void 0:ur.source}}};var yr,jr,br;J.parameters={...J.parameters,docs:{...(yr=J.parameters)==null?void 0:yr.docs,source:{originalSource:'createCaseStory("031-description-properties-additional-properties-additional-info")',...(br=(jr=J.parameters)==null?void 0:jr.docs)==null?void 0:br.source}}};var fr,hr,gr;F.parameters={...F.parameters,docs:{...(fr=F.parameters)==null?void 0:fr.docs,source:{originalSource:'createCaseStory("032-header-description-properties-additional-properties-additional-info")',...(gr=(hr=F.parameters)==null?void 0:hr.docs)==null?void 0:gr.source}}};const Ca=["Case_001_type_only","Case_002_header","Case_003_description","Case_004_header_description","Case_005_properties","Case_006_header_properties","Case_007_description_properties","Case_008_header_description_properties","Case_009_additional_properties","Case_010_header_additional_properties","Case_011_description_additional_properties","Case_012_header_description_additional_properties","Case_013_properties_additional_properties","Case_014_header_properties_additional_properties","Case_015_description_properties_additional_properties","Case_016_header_description_properties_additional_properties","Case_017_additional_info","Case_018_header_additional_info","Case_019_description_additional_info","Case_020_header_description_additional_info","Case_021_properties_additional_info","Case_022_header_properties_additional_info","Case_023_description_properties_additional_info","Case_024_header_description_properties_additional_info","Case_025_additional_properties_additional_info","Case_026_header_additional_properties_additional_info","Case_027_description_additional_properties_additional_info","Case_028_header_description_additional_properties_additional_info","Case_029_properties_additional_properties_additional_info","Case_030_header_properties_additional_properties_additional_info","Case_031_description_properties_additional_properties_additional_info","Case_032_header_description_properties_additional_properties_additional_info"];export{r as Case_001_type_only,a as Case_002_header,n as Case_003_description,t as Case_004_header_description,i as Case_005_properties,o as Case_006_header_properties,s as Case_007_description_properties,p as Case_008_header_description_properties,d as Case_009_additional_properties,c as Case_010_header_additional_properties,m as Case_011_description_additional_properties,l as Case_012_header_description_additional_properties,_ as Case_013_properties_additional_properties,u as Case_014_header_properties_additional_properties,y as Case_015_description_properties_additional_properties,j as Case_016_header_description_properties_additional_properties,b as Case_017_additional_info,f as Case_018_header_additional_info,h as Case_019_description_additional_info,g as Case_020_header_description_additional_info,S as Case_021_properties_additional_info,C as Case_022_header_properties_additional_info,O as Case_023_description_properties_additional_info,x as Case_024_header_description_properties_additional_info,P as Case_025_additional_properties_additional_info,v as Case_026_header_additional_properties_additional_info,N as Case_027_description_additional_properties_additional_info,q as Case_028_header_description_additional_properties_additional_info,w as Case_029_properties_additional_properties_additional_info,B as Case_030_header_properties_additional_properties_additional_info,J as Case_031_description_properties_additional_properties_additional_info,F as Case_032_header_description_properties_additional_properties_additional_info,Ca as __namedExportsOrder,Sa as default};
