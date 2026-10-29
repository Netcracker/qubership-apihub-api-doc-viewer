import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{Br as r,Hr as i}from"./UxBadge-DY_kBTyT.js";import{a,i as o}from"./AsyncApiOperationViewer-B3f6WOxg.js";import{m as s,r as c}from"./preprocess-f7jvjge6.js";import{n as l,t as u}from"./parse-yaml-source-C_EzBWAu.js";import{c as d,o as f}from"./openapi-story-args-DSlkmn-B.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{a(),i(),p=t(),d(),c(),u(),m=n(),h=`openapi: 3.0.3
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
`,g=({sourceText:e,path:t,method:n,displayMode:r,devMode:i})=>{let a=(0,p.useMemo)(()=>s(l(e)),[e]);return(0,m.jsx)(o,{source:a,operationKeys:t&&n?{path:t,method:n}:void 0,displayMode:r,devMode:i})},_={title:`Debug/OpenAPI Operation Viewer`,component:g,argTypes:{...f,sourceText:{control:`text`},path:{control:`text`},method:{control:`text`},devMode:{control:`boolean`}},args:{sourceText:h,path:`/orders/{orderId}`,method:`get`,displayMode:r,devMode:!0}},v={},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y=[`Debug`]})))()}b();export{v as Debug,y as __namedExportsOrder,_ as default};