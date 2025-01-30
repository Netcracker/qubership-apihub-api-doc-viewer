import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function p(i){if(i.ep)return;i.ep=!0;const e=a(i);fetch(i.href,e)}})();const E="modulepreload",O=function(r,s){return new URL(r,s).href},m={},t=function(s,a,p){if(!a||a.length===0)return s();const i=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=O(e,p),e in m)return;m[e]=!0;const o=e.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!p)for(let n=i.length-1;n>=0;n--){const c=i[n];if(c.href===e&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${l}`))return;const _=document.createElement("link");if(_.rel=o?"stylesheet":E,o||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),o)return new Promise((n,c)=>{_.addEventListener("load",n),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:d}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=d({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const y={"./src/stories/GraphApiDiffTest.stories.tsx":async()=>t(()=>import("./GraphApiDiffTest.stories-fef83d69.js"),["./GraphApiDiffTest.stories-fef83d69.js","./ErrorBoundaryFallback-3bf40c44.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./GraphQLOperationDiffViewer-f7c95eae.js","./buildASTSchema-2651c8f8.js","./preprocess-ff5b420e.js","./helpers-240a8900.js"],import.meta.url),"./src/stories/GraphApiTest.stories.tsx":async()=>t(()=>import("./GraphApiTest.stories-b019d9c3.js"),["./GraphApiTest.stories-b019d9c3.js","./GraphQLOperationViewer-a268206f.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./buildASTSchema-2651c8f8.js","./helpers-240a8900.js","./preprocess-ff5b420e.js"],import.meta.url),"./src/stories/GraphQLOperationDiffViewer/Output.stories.ts":async()=>t(()=>import("./Output.stories-dcc774b4.js"),["./Output.stories-dcc774b4.js","./ErrorBoundaryFallback-3bf40c44.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./graph-api-transformers-b7d254a3.js","./buildASTSchema-2651c8f8.js","./preprocess-ff5b420e.js","./GraphQLOperationDiffViewer-f7c95eae.js"],import.meta.url),"./src/stories/GraphQLOperationViewer/Output.stories.ts":async()=>t(()=>import("./Output.stories-66bad09b.js"),["./Output.stories-66bad09b.js","./graph-api-transformers-b7d254a3.js","./ErrorBoundaryFallback-3bf40c44.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./buildASTSchema-2651c8f8.js","./GraphQLOperationViewer-a268206f.js","./preprocess-ff5b420e.js"],import.meta.url),"./src/stories/JsonSchemaDiffTest.stories.tsx":async()=>t(()=>import("./JsonSchemaDiffTest.stories-153905b5.js"),["./JsonSchemaDiffTest.stories-153905b5.js","./JsonSchemaDiffViewer-51e5c258.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./preprocess-ff5b420e.js"],import.meta.url),"./src/stories/JsonSchemaTest.stories.tsx":async()=>t(()=>import("./JsonSchemaTest.stories-3efb7635.js"),["./JsonSchemaTest.stories-3efb7635.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js"],import.meta.url),"./src/stories/Main.stories.ts":async()=>t(()=>import("./Main.stories-0f0d9305.js"),["./Main.stories-0f0d9305.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/directives.generated.stories.tsx":async()=>t(()=>import("./directives.generated.stories-d53fc18c.js"),["./directives.generated.stories-d53fc18c.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/input-type-argument-of-root-type.generated.stories.tsx":async()=>t(()=>import("./input-type-argument-of-root-type.generated.stories-fbd3caf6.js"),["./input-type-argument-of-root-type.generated.stories-fbd3caf6.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/interface-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./interface-output-type-of-root-type.generated.stories-8fa002b4.js"),["./interface-output-type-of-root-type.generated.stories-8fa002b4.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/object-output-type-of-root-type-that-implements-interface.generated.stories.tsx":async()=>t(()=>import("./object-output-type-of-root-type-that-implements-interface.generated.stories-906c88c9.js"),["./object-output-type-of-root-type-that-implements-interface.generated.stories-906c88c9.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/object-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./object-output-type-of-root-type.generated.stories-cb32e9ef.js"),["./object-output-type-of-root-type.generated.stories-cb32e9ef.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/root-type-general.generated.stories.tsx":async()=>t(()=>import("./root-type-general.generated.stories-705345ae.js"),["./root-type-general.generated.stories-705345ae.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/scalar-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./scalar-output-type-of-root-type.generated.stories-02370a3f.js"),["./scalar-output-type-of-root-type.generated.stories-02370a3f.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/scalar-type-argument-of-root-type.generated.stories.tsx":async()=>t(()=>import("./scalar-type-argument-of-root-type.generated.stories-e5c502a1.js"),["./scalar-type-argument-of-root-type.generated.stories-e5c502a1.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url),"./src/stories/graphql-compatibility-suite/union-output-type-of-root-type.generated.stories.tsx":async()=>t(()=>import("./union-output-type-of-root-type.generated.stories-174188cb.js"),["./union-output-type-of-root-type.generated.stories-174188cb.js","./JsonSchemaViewer-c66d8784.js","./jsx-runtime-beaa2906.js","./index-f46741a2.js","./ErrorBoundaryFallback-3bf40c44.js","./index-415bee12.js","./ErrorBoundaryFallback-1bf30064.css","./JsonPropNodeViewer-0891661c.js","./JsonSchemaDiffViewer-51e5c258.js","./GraphQLOperationViewer-a268206f.js","./buildASTSchema-2651c8f8.js","./GraphQLOperationDiffViewer-f7c95eae.js","./compatibility-suite-utils-5431e36c.js","./graph-api-transformers-b7d254a3.js"],import.meta.url)};async function R(r){return y[r]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,g=async(r=[])=>{const s=await Promise.all([r.at(0)??t(()=>import("./entry-preview-09facc8f.js"),["./entry-preview-09facc8f.js","./index-f46741a2.js","./react-18-f103fcb4.js"],import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-7b8bcc85.js"),["./entry-preview-docs-7b8bcc85.js","./_getPrototype-15d0d45b.js","./index-f46741a2.js","./index-415bee12.js","./index-356e4a49.js"],import.meta.url),r.at(2)??t(()=>import("./preview-2ff2accb.js"),["./preview-2ff2accb.js","./index-1b441bc2.js"],import.meta.url),r.at(3)??t(()=>import("./preview-a7d55525.js"),[],import.meta.url),r.at(4)??t(()=>import("./preview-e085edad.js"),[],import.meta.url),r.at(5)??t(()=>import("./preview-98b085a7.js"),["./preview-98b085a7.js","./index-356e4a49.js"],import.meta.url),r.at(6)??t(()=>import("./preview-73c648b3.js"),[],import.meta.url),r.at(7)??t(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),r.at(8)??t(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),r.at(9)??t(()=>import("./preview-dfa23190.js"),[],import.meta.url),r.at(10)??t(()=>import("./preview-04144ad3.js"),[],import.meta.url),r.at(11)??t(()=>import("./preview-0b293f2a.js"),[],import.meta.url),r.at(12)??t(()=>import("./preview-231e6381.js"),["./preview-231e6381.js","./preview-a222099b.css"],import.meta.url)]);return T(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(R,g);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
