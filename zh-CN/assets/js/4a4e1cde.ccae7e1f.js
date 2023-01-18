"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[74067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=c,b=u["".concat(a,".").concat(m)]||u[m]||v[m]||i;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[u]="string"==typeof e?e:c,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),c=(r(67294),r(3905));const i={title:"CS Persistence \u67b6\u6784",sidebar_position:5},s=void 0,o={unversionedId:"architecture/public-enhancement-services/context-service/context-service-persistence",id:"version-1.1.1/architecture/public-enhancement-services/context-service/context-service-persistence",title:"CS Persistence \u67b6\u6784",description:"CSPersistence\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/architecture/public-enhancement-services/context-service/context-service-persistence.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service-persistence",permalink:"/zh-CN/docs/1.1.1/architecture/public-enhancement-services/context-service/context-service-persistence",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.1/architecture/public-enhancement-services/context-service/context-service-persistence.md",tags:[],version:"1.1.1",sidebarPosition:5,frontMatter:{title:"CS Persistence \u67b6\u6784",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CS Listener \u67b6\u6784",permalink:"/zh-CN/docs/1.1.1/architecture/public-enhancement-services/context-service/context-service-listener"},next:{title:"CS Search \u67b6\u6784",permalink:"/zh-CN/docs/1.1.1/architecture/public-enhancement-services/context-service/context-service-search"}},a={},l=[{value:"<strong>CSPersistence\u67b6\u6784</strong>",id:"cspersistence\u67b6\u6784",level:2},{value:"Persistence UML\u56fe",id:"persistence-uml\u56fe",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,c.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"cspersistence\u67b6\u6784"},(0,c.kt)("strong",{parentName:"h2"},"CSPersistence\u67b6\u6784")),(0,c.kt)("h3",{id:"persistence-uml\u56fe"},"Persistence UML\u56fe"),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(83901).Z,width:"3613",height:"2260"})),(0,c.kt)("p",null,"Persistence\u6a21\u5757\u4e3b\u8981\u5b9a\u4e49\u4e86ContextService\u6301\u4e45\u5316\u76f8\u5173\u64cd\u4f5c\u3002\u5b9e\u4f53\u4e3b\u8981\u5305\u542bCSID\u3001ContextKeyValue\u76f8\u5173\u3001CSResource\u76f8\u5173\u3001CSTable\u76f8\u5173\u3002"))}u.isMDXComponent=!0},83901:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linkis-contextservice-persistence-01-25aca98ebb1c3b97a98e0f4a3ab40e6f.png"}}]);