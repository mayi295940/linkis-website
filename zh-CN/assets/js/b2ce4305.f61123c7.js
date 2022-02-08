"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4150],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,k=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50555:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={title:"\u603b\u89c8",sidebar_position:0},l=void 0,u={unversionedId:"architecture/overview",id:"version-1.0.3/architecture/overview",title:"\u603b\u89c8",description:"1. \u6587\u6863\u7ed3\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/zh-CN/docs/1.0.3/architecture/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/overview.md",tags:[],version:"1.0.3",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u4efb\u52a1\u63d0\u4ea4\u6267\u884c Rest API \u6587\u6863",permalink:"/zh-CN/docs/1.0.3/api/linkis_task_operator"},next:{title:"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0",permalink:"/zh-CN/docs/1.0.3/architecture/difference_between_1.0_and_0.x"}},p=[{value:"1. \u6587\u6863\u7ed3\u6784",id:"1-\u6587\u6863\u7ed3\u6784",children:[],level:2}],s={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6587\u6863\u7ed3\u6784"},"1. \u6587\u6863\u7ed3\u6784"),(0,a.kt)("p",null,"Linkis 1.0 \u5c06\u6240\u6709\u5fae\u670d\u52a1\u603b\u4f53\u5212\u5206\u4e3a\u4e09\u5927\u7c7b\uff1a\u516c\u5171\u589e\u5f3a\u670d\u52a1\u3001\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u3001\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\u3002\u5982\u4e0b\u56fe\u6240\u793a\u4e3aLinkis 1.0 \u7684\u67b6\u6784\u56fe\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Linkis1.0\u67b6\u6784\u56fe",src:r(45941).Z,width:"2078",height:"1610"})),(0,a.kt)("p",null,"\u5404\u5927\u7c7b\u7684\u5177\u4f53\u804c\u8d23\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u516c\u5171\u589e\u5f3a\u670d\u52a1\u4e3a Linkis 0.X \u5df2\u7ecf\u63d0\u4f9b\u7684\u7269\u6599\u5e93\u670d\u52a1\u3001\u4e0a\u4e0b\u6587\u670d\u52a1\u3001\u6570\u636e\u6e90\u670d\u52a1\u548c\u516c\u5171\u670d\u52a1\u7b49\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5fae\u670d\u52a1\u6cbb\u7406\u670d\u52a1\u4e3a Linkis 0.X \u5df2\u7ecf\u63d0\u4f9b\u7684 Spring Cloud Gateway\u3001Eureka \u548c Open Feign\uff0c\u540c\u65f6 Linkis1.0 \u8fd8\u4f1a\u63d0\u4f9b\u5bf9 Nacos \u7684\u652f\u6301\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u662f Linkis 1.0 \u7684\u6838\u5fc3\u91cd\u70b9\uff0c\u4ece \u63d0\u4ea4 \u2014> \u51c6\u5907 \u2014> \u6267\u884c\u4e09\u4e2a\u9636\u6bb5\uff0c\u6765\u5168\u9762\u5347\u7ea7 Linkis \u5bf9 \u7528\u6237\u4efb\u52a1\u7684\u6267\u884c\u7ba1\u63a7\u80fd\u529b\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f Linkis1.0 \u67b6\u6784\u6587\u6863\u7684\u76ee\u5f55\u5217\u8868\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linkis1.0\u5728\u67b6\u6784\u4e0a\u7684\u7279\u70b9\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"difference_between_1.0_and_0.x"},"Linkis1.0 \u4e0e Linkis0.x \u7684\u533a\u522b"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linkis1.0\u516c\u5171\u589e\u5f3a\u670d\u52a1\u76f8\u5173\u6587\u6863\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0.3/architecture/public_enhancement_services/overview"},"\u516c\u5171\u589e\u5f3a\u670d\u52a1"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linkis1.0\u5fae\u670d\u52a1\u6cbb\u7406\u76f8\u5173\u6587\u6863\uff0c\u8bf7\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0.3/architecture/microservice_governance_services/overview"},"\u5fae\u670d\u52a1\u6cbb\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linkis1.0\u63d0\u51fa\u7684\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u76f8\u5173\u6587\u6863\uff0c\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.0.3/architecture/computation_governance_services/overview"},"\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1"),"\u3002"))))}f.isMDXComponent=!0},45941:function(e,t,r){t.Z=r.p+"assets/images/Linkis1.0-architecture-9a0201e7e7b569c36835ce58edec9969.png"}}]);