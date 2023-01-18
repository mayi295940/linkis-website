"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[85842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"\u603b\u89c8",sidebar_position:1},a=void 0,p={unversionedId:"api/overview",id:"version-1.3.0/api/overview",title:"\u603b\u89c8",description:"1. \u6587\u6863\u8bf4\u660e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/zh-CN/docs/1.3.0/api/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/api/overview.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"\u603b\u89c8",sidebar_position:1},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Presto \u5f15\u64ce",permalink:"/zh-CN/docs/1.3.0/engine-usage/presto"},next:{title:"\u767b\u5f55\u6587\u6863",permalink:"/zh-CN/docs/1.3.0/api/login-api"}},l={},c=[{value:"1. \u6587\u6863\u8bf4\u660e",id:"1-\u6587\u6863\u8bf4\u660e",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u6587\u6863\u8bf4\u660e"},"1. \u6587\u6863\u8bf4\u660e"),(0,i.kt)("p",null,"Linkis1.0 \u5728Linkix0.x\u7248\u672c\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u91cd\u6784\u4f18\u5316\uff0c\u540c\u65f6\u4e5f\u517c\u5bb9\u4e860.x\u7684\u63a5\u53e3\uff0c\u4f46\u662f\u4e3a\u4e86\u9632\u6b62\u5728\u4f7f\u75281.0\u7248\u672c\u65f6\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u9700\u8981\u60a8\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528Linkis1.0\u5b9a\u5236\u5316\u5f00\u53d1\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u5230Linkis\u7684\u6743\u9650\u8ba4\u8bc1\u63a5\u53e3\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/api/login-api"},"\u767b\u5f55API\u6587\u6863"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0\u63d0\u4f9bJDBC\u7684\u63a5\u53e3\uff0c\u9700\u8981\u4f7f\u7528JDBC\u7684\u65b9\u5f0f\u63a5\u5165Linkis\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/api/jdbc-api"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884cJDBC API\u6587\u6863"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0\u63d0\u4f9b\u4e86Rest\u63a5\u53e3\uff0c\u5982\u679c\u9700\u8981\u5728Linkis\u7684\u57fa\u7840\u4e0a\u5f00\u53d1\u4e0a\u5c42\u5e94\u7528\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/api/linkis-task-operator"},"\u4efb\u52a1\u63d0\u4ea4\u6267\u884cRest API\u6587\u6863"),"\u3002"))))}u.isMDXComponent=!0}}]);