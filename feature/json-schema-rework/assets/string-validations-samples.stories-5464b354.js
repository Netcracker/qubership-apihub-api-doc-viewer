import{c as Ge,a as He}from"./json-schema-samples-cases-65f7b341.js";import{j as Ke,c as Pe}from"./json-schema-samples-common-47d31331.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-ca4ded2c.js";import"./DiffBadge-ceca5443.js";import"./IndexesNodeViewer-45426e65.js";import"./DdlTableDiffsViewer-90eb36a6.js";/* empty css              */import"./DdlTableViewer-5fe64823.js";import"./GraphQLOperationDiffViewer-e3d9068d.js";import"./GraphPropNodeViewer-6b50c183.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-50742c46.js";const Qe=`type: string
default: ""
title: '[default] default = ""'

`,Re=`type: string
example: ""
title: '[example] example = ""'

`,Te=`type: string
default: "     "
title: '[default] default = "     "'

`,Ue=`type: string
example: "     "
title: '[example] example = "     "'

`,We=`type: string
default: "\\r\\n"
title: '[default] default = "\\r\\n"'

`,Xe=`type: string
example: "\\r\\n"
title: '[example] example = "\\r\\n"'

`,Ye=`type: string
default: "\\r"
title: '[default] default = "\\r"'

`,ea=`type: string
example: "\\r"
title: '[example] example = "\\r"'

`,aa=`type: string
default: |+
  
title: '[default] default = "\\n"'

`,sa=`type: string
example: |+
  
title: '[example] example = "\\n"'

`,ta=`type: string
default: "\\t"
title: '[default] default = "\\t"'

`,ra=`type: string
example: "\\t"
title: '[example] example = "\\t"'

`,la=`type: string
default: "    value with whitespaces around     "
title: '[default] default = "    value with whitespaces around     "'

`,na=`type: string
example: "    value with whitespaces around     "
title: '[example] example = "    value with whitespaces around     "'

`,ma=`type: string
default: just a value
title: '[default] default = "just a value"'

`,oa=`type: string
example: just a value
title: '[example] example = "just a value"'

`,pa=`type: string
examples:
  - ""
  - "     "
  - "\\r\\n"
  - "\\r"
  - |+
    
  - "\\t"
  - "    value with whitespaces around     "
  - just a value
title: "[examples] examples = all sample strings"

`,ca=`type: string
enum:
  - ""
  - "     "
  - "\\r\\n"
  - "\\r"
  - |+
    
  - "\\t"
  - "    value with whitespaces around     "
  - just a value
title: "[enum] enum = all sample strings"

`,_a=`type: string
minLength: 0
title: "[value-length] minLength = 0"

`,ia=`type: string
minLength: 1
title: "[value-length] minLength = 1"

`,da=`type: string
maxLength: 1
title: "[value-length] maxLength = 1"

`,ua=`type: string
minLength: 0
maxLength: 1
title: "[value-length] minLength = 0, maxLength = 1"

`,ga=`type: string
minLength: 1
maxLength: 2
title: "[value-length] minLength = 1, maxLength = 2"

`,ha=`type: string
pattern: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
title: "[pattern] pattern = email regexp"

`,xa=Object.assign({"../../../../samples/json-schema/string-validations/001-default-empty/sample.yaml":Qe,"../../../../samples/json-schema/string-validations/002-example-empty/sample.yaml":Re,"../../../../samples/json-schema/string-validations/003-default-whitespaces/sample.yaml":Te,"../../../../samples/json-schema/string-validations/004-example-whitespaces/sample.yaml":Ue,"../../../../samples/json-schema/string-validations/005-default-crlf/sample.yaml":We,"../../../../samples/json-schema/string-validations/006-example-crlf/sample.yaml":Xe,"../../../../samples/json-schema/string-validations/007-default-cr/sample.yaml":Ye,"../../../../samples/json-schema/string-validations/008-example-cr/sample.yaml":ea,"../../../../samples/json-schema/string-validations/009-default-lf/sample.yaml":aa,"../../../../samples/json-schema/string-validations/010-example-lf/sample.yaml":sa,"../../../../samples/json-schema/string-validations/011-default-tab/sample.yaml":ta,"../../../../samples/json-schema/string-validations/012-example-tab/sample.yaml":ra,"../../../../samples/json-schema/string-validations/013-default-padded/sample.yaml":la,"../../../../samples/json-schema/string-validations/014-example-padded/sample.yaml":na,"../../../../samples/json-schema/string-validations/015-default-plain/sample.yaml":ma,"../../../../samples/json-schema/string-validations/016-example-plain/sample.yaml":oa,"../../../../samples/json-schema/string-validations/017-examples-all-samples/sample.yaml":pa,"../../../../samples/json-schema/string-validations/018-enum-all-samples/sample.yaml":ca,"../../../../samples/json-schema/string-validations/019-min-length-0/sample.yaml":_a,"../../../../samples/json-schema/string-validations/020-min-length-1/sample.yaml":ia,"../../../../samples/json-schema/string-validations/021-max-length-1/sample.yaml":da,"../../../../samples/json-schema/string-validations/022-min-length-0-max-length-1/sample.yaml":ua,"../../../../samples/json-schema/string-validations/023-min-length-1-max-length-2/sample.yaml":ga,"../../../../samples/json-schema/string-validations/024-pattern-email/sample.yaml":ha}),ya=Ge(xa),fa=He(ya),e=Pe(fa),Ma={...Ke,id:"json-schema-suite-string-validations",title:"JSON Schema Suite/String  Validations"},a=e("001-default-empty"),s=e("002-example-empty"),t=e("003-default-whitespaces"),r=e("004-example-whitespaces"),l=e("005-default-crlf"),n=e("006-example-crlf"),m=e("007-default-cr"),o=e("008-example-cr"),p=e("009-default-lf"),c=e("010-example-lf"),_=e("011-default-tab"),i=e("012-example-tab"),d=e("013-default-padded"),u=e("014-example-padded"),g=e("015-default-plain"),h=e("016-example-plain"),x=e("017-examples-all-samples"),y=e("018-enum-all-samples"),f=e("019-min-length-0"),C=e("020-min-length-1"),v=e("021-max-length-1"),S=e("022-min-length-0-max-length-1"),b=e("023-min-length-1-max-length-2"),j=e("024-pattern-email");var w,L,z;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("001-default-empty")',...(z=(L=a.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,B,J;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("002-example-empty")',...(J=(B=s.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var O,Z,F;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("003-default-whitespaces")',...(F=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var I,E,M;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("004-example-whitespaces")',...(M=(E=r.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,V,$;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("005-default-crlf")',...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var k,q,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("006-example-crlf")',...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var G,H,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("007-default-cr")',...(K=(H=m.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,Q,R;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("008-example-cr")',...(R=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var T,U,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("009-default-lf")',...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,ee;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("010-example-lf")',...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,se,te;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("011-default-tab")',...(te=(se=_.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,le,ne;i.parameters={...i.parameters,docs:{...(re=i.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("012-example-tab")',...(ne=(le=i.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var me,oe,pe;d.parameters={...d.parameters,docs:{...(me=d.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("013-default-padded")',...(pe=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var ce,_e,ie;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("014-example-padded")',...(ie=(_e=u.parameters)==null?void 0:_e.docs)==null?void 0:ie.source}}};var de,ue,ge;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("015-default-plain")',...(ge=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,xe,ye;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("016-example-plain")',...(ye=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var fe,Ce,ve;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("017-examples-all-samples")',...(ve=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var Se,be,je;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("018-enum-all-samples")',...(je=(be=y.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var we,Le,ze;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("019-min-length-0")',...(ze=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Ae,Be,Je;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("020-min-length-1")',...(Je=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Je.source}}};var Oe,Ze,Fe;v.parameters={...v.parameters,docs:{...(Oe=v.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("021-max-length-1")',...(Fe=(Ze=v.parameters)==null?void 0:Ze.docs)==null?void 0:Fe.source}}};var Ie,Ee,Me;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("022-min-length-0-max-length-1")',...(Me=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Ne,Ve,$e;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("023-min-length-1-max-length-2")',...($e=(Ve=b.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};var ke,qe,De;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("024-pattern-email")',...(De=(qe=j.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};const Na=["Case_001_default_empty","Case_002_example_empty","Case_003_default_whitespaces","Case_004_example_whitespaces","Case_005_default_crlf","Case_006_example_crlf","Case_007_default_cr","Case_008_example_cr","Case_009_default_lf","Case_010_example_lf","Case_011_default_tab","Case_012_example_tab","Case_013_default_padded","Case_014_example_padded","Case_015_default_plain","Case_016_example_plain","Case_017_examples_all_samples","Case_018_enum_all_samples","Case_019_min_length_0","Case_020_min_length_1","Case_021_max_length_1","Case_022_min_length_0_max_length_1","Case_023_min_length_1_max_length_2","Case_024_pattern_email"];export{a as Case_001_default_empty,s as Case_002_example_empty,t as Case_003_default_whitespaces,r as Case_004_example_whitespaces,l as Case_005_default_crlf,n as Case_006_example_crlf,m as Case_007_default_cr,o as Case_008_example_cr,p as Case_009_default_lf,c as Case_010_example_lf,_ as Case_011_default_tab,i as Case_012_example_tab,d as Case_013_default_padded,u as Case_014_example_padded,g as Case_015_default_plain,h as Case_016_example_plain,x as Case_017_examples_all_samples,y as Case_018_enum_all_samples,f as Case_019_min_length_0,C as Case_020_min_length_1,v as Case_021_max_length_1,S as Case_022_min_length_0_max_length_1,b as Case_023_min_length_1_max_length_2,j as Case_024_pattern_email,Na as __namedExportsOrder,Ma as default};
