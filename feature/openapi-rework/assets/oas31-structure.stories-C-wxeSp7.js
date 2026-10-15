import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-jItzu8yB.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-DmBx3KsT.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - $ref: "#/components/parameters/PageSize"
          description: Overridden next to the \`$ref\`.
      requestBody:
        $ref: "#/components/requestBodies/OrderBody"
        description: Body description overridden next to the \`$ref\`.
      responses:
        "200":
          $ref: "#/components/responses/Ok"
          description: Response description overridden next to the \`$ref\`.
components:
  parameters:
    PageSize:
      name: pageSize
      in: query
      description: Original description.
      schema:
        type: integer
  requestBodies:
    OrderBody:
      description: Original body description.
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: string
              status:
                type: string
                enum:
                  - new
                  - paid
  responses:
    Ok:
      description: Original response description.
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    $ref: "#/components/pathItems/Orders"
components:
  pathItems:
    Orders:
      post:
        summary: Update an order (from components.pathItems)
        responses:
          "200":
            description: ""
`})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{d(),p(),t(),o(),s(),m=c(Object.assign({"../../../../samples/openapi/oas31/structure/01-reference-description-overrides/sample.yaml":u,"../../../../samples/openapi/oas31/structure/02-components-path-items/sample.yaml":f})),h={title:`OpenAPI Operation Suite/OAS 3.1/Document Structure`,component:l,argTypes:i,args:n,play:r},g=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(m,e),path:t,method:n,switchTo:r}}),_=g(`01-reference-description-overrides`,`/orders`,`post`,[]),v=g(`02-components-path-items`,`/orders`,`post`,[]),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("01-reference-description-overrides", "/orders", "post", [])`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("02-components-path-items", "/orders", "post", [])`,...v.parameters?.docs?.source}}},y=[`Case_01_reference_description_overrides`,`Case_02_components_path_items`]})))()}b();export{_ as Case_01_reference_description_overrides,v as Case_02_components_path_items,y as __namedExportsOrder,h as default};