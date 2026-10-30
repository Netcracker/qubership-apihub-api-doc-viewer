import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{a as r,i}from"./AsyncApiOperationViewer-D0M4xHQ_.js";import{Qt as a,en as o}from"./UxBadge-BGHR5KdO.js";import{m as s,r as c}from"./preprocess-lXSz3s7w.js";import{n as l,t as u}from"./parse-yaml-source-C_EzBWAu.js";import{c as d,o as f}from"./openapi-story-args-BtS9TgbL.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),o(),p=t(),d(),c(),u(),m=n(),h=`openapi: 3.0.3
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
        '404':
          description: Not found.
    delete:
      operationId: deleteOrder
      summary: Delete an order
      responses:
        '204':
          description: Deleted.
`,g=({sourceText:e,path:t,method:n,displayMode:r,devMode:a})=>{let o=(0,p.useMemo)(()=>s(l(e)),[e]);return(0,m.jsx)(i,{source:o,operationKeys:t&&n?{path:t,method:n}:void 0,displayMode:r,devMode:a})},_={title:`Debug/OpenAPI Operation Viewer`,component:g,argTypes:{...f,sourceText:{control:`text`},path:{control:`text`},method:{control:`text`},devMode:{control:`boolean`}},args:{sourceText:h,path:`/orders/{orderId}`,method:`get`,displayMode:a,devMode:!0}},v={},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y=[`Debug`]})))()}b();export{v as Debug,y as __namedExportsOrder,_ as default};