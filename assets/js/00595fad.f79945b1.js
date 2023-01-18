"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[86336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Test Specification",sidebar_position:7},i=void 0,c={unversionedId:"development/development-specification/unit-test",id:"development/development-specification/unit-test",title:"Test Specification",description:"1. [Mandatory] Tool classes and internal interfaces of services must have test case.",source:"@site/docs/development/development-specification/unit-test.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/unit-test",permalink:"/docs/1.3.2/development/development-specification/unit-test",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/development/development-specification/unit-test.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Test Specification",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Path Usage Specification",permalink:"/docs/1.3.2/development/development-specification/path-usage"},next:{title:"Version and New Feature Specification",permalink:"/docs/1.3.2/development/development-specification/version-feature-specifications"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Tool classes and internal interfaces of services must have test case."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Unit testing needs to be able to be automated (triggered by mvn compilation), independence (unit test cases cannot call each other), and repeatable execution (can be executed multiple times, with the same result)"),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," A test case should only test one method."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Test case exceptions cannot be caught and need to be thrown upwards."),(0,o.kt)("li",{parentName:"ol"},"[",(0,o.kt)("strong",{parentName:"li"},"Mandatory"),"]"," The unit test code must be written in the following project directory: src/test/java or scala, and it is not allowed to be written in other records."),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," Unit testing needs to consider boundary conditions, such as the end of the month and February."),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," For database-related unit tests, consider data rollback.")))}d.isMDXComponent=!0}}]);