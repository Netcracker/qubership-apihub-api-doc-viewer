import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{Br as r,Hr as i,Kt as a,en as o,qt as s}from"./UxBadge-DY_kBTyT.js";import{o as c,s as l}from"./AsyncApiOperationViewer-B3f6WOxg.js";import{i as u,r as d}from"./preprocess-f7jvjge6.js";import{n as f,t as p}from"./parse-yaml-source-C_EzBWAu.js";import{c as m,t as h}from"./openapi-story-args-DSlkmn-B.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),i(),o(),g=t(),m(),d(),p(),_=n(),v={diffsMetaKey:s,aggregatedDiffsMetaKey:a},y=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    get:
      operationId: getOrder
      summary: Get an order
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: The order.
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  total:
                    type: number
`,b=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    get:
      operationId: getOrder
      summary: Get an order by its id
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: The order.
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  total:
                    type: number
                  currency:
                    type: string
        '404':
          description: Not found.
`,x=e=>{let{beforeSourceText:t,afterSourceText:n,path:r,method:i,displayMode:a,hideUnchangedNodes:o,devMode:s}=e,l=(0,g.useMemo)(()=>u(f(t),f(n)),[t,n]);return(0,_.jsx)(c,{mergedSource:l,operationKeys:r&&i?{path:r,method:i}:void 0,diffMetaKeys:v,displayMode:a,hideUnchangedNodes:o,devMode:s})},S={title:`Debug/OpenAPI Operation Diffs Viewer`,component:x,argTypes:{...h,beforeSourceText:{control:`text`},afterSourceText:{control:`text`},path:{control:`text`},method:{control:`text`},devMode:{control:`boolean`}},args:{beforeSourceText:y,afterSourceText:b,path:`/orders/{orderId}`,method:`get`,displayMode:r,hideUnchangedNodes:!1,devMode:!0}},C={},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w=[`Debug`]})))()}T();export{C as Debug,w as __namedExportsOrder,S as default};