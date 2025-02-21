import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function p(i){if(i.ep)return;i.ep=!0;const e=a(i);fetch(i.href,e)}})();const E="modulepreload",O=function(r,s){return new URL(r,s).href},m={},t=function(s,a,p){if(!a||a.length===0)return s();const i=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=O(e,p),e in m)return;m[e]=!0;const o=e.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!p)for(let n=i.length-1;n>=0;n--){const c=i[n];if(c.href===e&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const _=document.createElement("link");if(_.rel=o?"stylesheet":E,o||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),o)return new Promise((n,c)=>{_.addEventListener("load",n),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:d}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=d({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const y={"./src/stories/GraphApiDiffTest.stories.tsx":async()=>t(()=>import("./GraphApiDiffTest.stories-b1b75f70.js"),["./GraphApiDiffTest.stories-b1b75f70.js","./ErrorBoundaryFallback-b06f9844.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./GraphQLOperationDiffViewer-281743fc.js","./buildASTSchema-602eb288.js","./preprocess-3791bbcb.js","./helpers-a6f7d357.js"],import.meta.url),"./src/stories/GraphApiTest.stories.tsx":async()=>t(()=>import("./GraphApiTest.stories-35875606.js"),["./GraphApiTest.stories-35875606.js","./GraphQLOperationViewer-8c09b82a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./buildASTSchema-602eb288.js","./helpers-a6f7d357.js","./preprocess-3791bbcb.js"],import.meta.url),"./src/stories/GraphQLOperationDiffViewer/Output.stories.ts":async()=>t(()=>import("./Output.stories-f64f9f6e.js"),["./Output.stories-f64f9f6e.js","./ErrorBoundaryFallback-b06f9844.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./graph-api-transformers-7ee9aee1.js","./buildASTSchema-602eb288.js","./preprocess-3791bbcb.js","./GraphQLOperationDiffViewer-281743fc.js"],import.meta.url),"./src/stories/GraphQLOperationViewer/Output.stories.ts":async()=>t(()=>import("./Output.stories-dd4786a0.js"),["./Output.stories-dd4786a0.js","./graph-api-transformers-7ee9aee1.js","./ErrorBoundaryFallback-b06f9844.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./buildASTSchema-602eb288.js","./GraphQLOperationViewer-8c09b82a.js","./preprocess-3791bbcb.js"],import.meta.url),"./src/stories/JsonSchemaDiffTest.stories.tsx":async()=>t(()=>import("./JsonSchemaDiffTest.stories-f5c2cba8.js"),["./JsonSchemaDiffTest.stories-f5c2cba8.js","./JsonSchemaDiffViewer-5e1c0655.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./preprocess-3791bbcb.js"],import.meta.url),"./src/stories/JsonSchemaTest.stories.tsx":async()=>t(()=>import("./JsonSchemaTest.stories-2e0f6346.js"),["./JsonSchemaTest.stories-2e0f6346.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js"],import.meta.url),"./src/stories/Main.stories.ts":async()=>t(()=>import("./Main.stories-f5db3d35.js"),["./Main.stories-f5db3d35.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/directives.generated.stories.tsx":async()=>t(()=>import("./directives.generated.stories-39da3d43.js"),["./directives.generated.stories-39da3d43.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/input-type-argument-of-root-type.generated.stories.tsx":async()=>t(()=>import("./input-type-argument-of-root-type.generated.stories-866c63bb.js"),["./input-type-argument-of-root-type.generated.stories-866c63bb.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/interface-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./interface-output-type-of-root-type.generated.stories-5c49ba2e.js"),["./interface-output-type-of-root-type.generated.stories-5c49ba2e.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/object-output-type-of-root-type-that-implements-interface.generated.stories.tsx":async()=>t(()=>import("./object-output-type-of-root-type-that-implements-interface.generated.stories-f0087b9b.js"),["./object-output-type-of-root-type-that-implements-interface.generated.stories-f0087b9b.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/object-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./object-output-type-of-root-type.generated.stories-70907029.js"),["./object-output-type-of-root-type.generated.stories-70907029.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/root-type-general.generated.stories.tsx":async()=>t(()=>import("./root-type-general.generated.stories-091b0131.js"),["./root-type-general.generated.stories-091b0131.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/scalar-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./scalar-output-type-of-root-type.generated.stories-9bdceac2.js"),["./scalar-output-type-of-root-type.generated.stories-9bdceac2.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/scalar-type-argument-of-root-type.generated.stories.tsx":async()=>t(()=>import("./scalar-type-argument-of-root-type.generated.stories-3c8e4cf6.js"),["./scalar-type-argument-of-root-type.generated.stories-3c8e4cf6.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/union-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./union-output-type-of-root-type.generated.stories-1e6c62c8.js"),["./union-output-type-of-root-type.generated.stories-1e6c62c8.js","./JsonSchemaViewer-dc828f2a.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-b06f9844.js","./index-415bee12.js","./ErrorBoundaryFallback-8c42ae14.css","./JsonPropNodeViewer-466fab92.js","./JsonSchemaDiffViewer-5e1c0655.js","./GraphQLOperationViewer-8c09b82a.js","./buildASTSchema-602eb288.js","./GraphQLOperationDiffViewer-281743fc.js","./compatibility-suite-utils-b7050b58.js","./graph-api-transformers-7ee9aee1.js"],import.meta.url)};async function R(r){return y[r]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,g=async(r=[])=>{const s=await Promise.all([r.at(0)??t(()=>import("./entry-preview-09facc8f.js"),["./entry-preview-09facc8f.js","./index-f46741a2.js","./react-18-f103fcb4.js"],import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-7b8bcc85.js"),["./entry-preview-docs-7b8bcc85.js","./_getPrototype-15d0d45b.js","./index-f46741a2.js","./index-415bee12.js","./index-356e4a49.js"],import.meta.url),r.at(2)??t(()=>import("./preview-2ff2accb.js"),["./preview-2ff2accb.js","./index-1b441bc2.js"],import.meta.url),r.at(3)??t(()=>import("./preview-7f618f92.js"),[],import.meta.url),r.at(4)??t(()=>import("./preview-e085edad.js"),[],import.meta.url),r.at(5)??t(()=>import("./preview-98b085a7.js"),["./preview-98b085a7.js","./index-356e4a49.js"],import.meta.url),r.at(6)??t(()=>import("./preview-73c648b3.js"),[],import.meta.url),r.at(7)??t(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),r.at(8)??t(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),r.at(9)??t(()=>import("./preview-dfa23190.js"),[],import.meta.url),r.at(10)??t(()=>import("./preview-04144ad3.js"),[],import.meta.url),r.at(11)??t(()=>import("./preview-0b293f2a.js"),[],import.meta.url),r.at(12)??t(()=>import("./preview-231e6381.js"),["./preview-231e6381.js","./preview-a222099b.css"],import.meta.url)]);return T(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(R,g);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
