"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[59709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Overview",sidebar_position:0},a=void 0,p={unversionedId:"api/overview",id:"version-1.2.0/api/overview",title:"Overview",description:"1. Document description",source:"@site/versioned_docs/version-1.2.0/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/1.2.0/api/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.2.0/api/overview.md",tags:[],version:"1.2.0",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Presto Engine",permalink:"/docs/1.2.0/engine-usage/presto"},next:{title:"Login Api",permalink:"/docs/1.2.0/api/login-api"}},s={},c=[{value:"1. Document description",id:"1-document-description",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-document-description"},"1. Document description"),(0,i.kt)("p",null,"Linkis1.0 has been refactored and optimized on the basis of Linkix0.x, and it is also compatible with the 0.x interface. However, in order to prevent compatibility problems when using version 1.0, you need to read the following documents carefully:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When using Linkis1.0 for customized development, you need to use Linkis's authorization authentication interface. Please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2.0/api/login-api"},"Login API Document")," carefully.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0 provides a JDBC interface. You need to use JDBC to access Linkis. Please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2.0/api/jdbc-api"},"Task Submit and Execute JDBC API Document"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Linkis1.0 provides the Rest interface. If you need to develop upper-level applications on the basis of Linkis, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.2.0/api/linkis-task-operator"},"Task Submit and Execute Rest API Document"),"."))))}u.isMDXComponent=!0}}]);