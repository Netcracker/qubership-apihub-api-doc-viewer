import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./json-schema-samples-cases-CskDrk9H.js";import{n as a,r as o,t as s}from"./json-schema-samples-common-DCgFGHiY.js";var c;function l(){return(l=e((()=>{c=`type: string
description: Returns the current status of the requested resource, including any associated metadata that downstream consumers may find useful.
`})))()}var u;function d(){return(d=e((()=>{u=`type: string
description: |-
  Represents a single resource returned by the API server.
  Includes core identifying fields and status flags.
  Additional metadata may be attached when available.
`})))()}var f;function p(){return(p=e((()=>{f=`type: string
description: This field documents the resource in extensive detail, covering its identity, lifecycle, ownership, and the relationships it maintains with other resources in the system, so that API consumers can build reliable integrations without needing to consult external documentation for basic structural questions. This field documents the resource in extensive detail, covering its identity, lifecycle, ownership, and the relationships it maintains with other resources in the system, so that API consumers can build reliable integrations without needing to consult external documentation for basic structural questions. This field documents the resource in extensive detail, covering its identity, lifecycle, ownership, and the relationships it maintains with other resources in the system, so that API consumers can build reliable integrations without needing to consult external documentation for basic structural questions. This field documents the resource in extensive detail, covering its identity, l
`})))()}var m;function h(){return(h=e((()=>{m=`type: string
description: |-
  Overview of the resource.
  Identifies unique attributes.
  Tracks creation timestamps.
  Tracks update timestamps.
  Lists related resource links.
  Notes deprecated fields.
  Flags experimental features.
  Describes access permissions.
  Summarizes validation rules.
  Ends with usage notes.
`})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),d(),p(),h(),r(),t(),a(),g=i(Object.assign({"../../../../samples/json-schema/description/001-short-single-line/sample.yaml":c,"../../../../samples/json-schema/description/002-short-multi-line/sample.yaml":u,"../../../../samples/json-schema/description/003-long-single-line/sample.yaml":f,"../../../../samples/json-schema/description/004-long-multi-line/sample.yaml":m})),_=n(g),v=s(_),y={...o,id:`json-schema-suite-description`,title:`JSON Schema Suite/Description`},b=v(`001-short-single-line`),x=v(`002-short-multi-line`),S=v(`003-long-single-line`),C=v(`004-long-multi-line`),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("001-short-single-line")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("002-short-multi-line")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("003-long-single-line")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("004-long-multi-line")`,...C.parameters?.docs?.source}}},w=[`Case_001_short_single_line`,`Case_002_short_multi_line`,`Case_003_long_single_line`,`Case_004_long_multi_line`]})))()}T();export{b as Case_001_short_single_line,x as Case_002_short_multi_line,S as Case_003_long_single_line,C as Case_004_long_multi_line,w as __namedExportsOrder,y as default};