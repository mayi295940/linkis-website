"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[29698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u51cf\u5c11\u57fa\u7840\u5f15\u64ce\u4e0d\u540c\u7248\u672c\u517c\u5bb9\u6027\u95ee\u9898",sidebar_position:.2},o=void 0,p={unversionedId:"feature/base-engine-compatibilty",id:"feature/base-engine-compatibilty",title:"\u51cf\u5c11\u57fa\u7840\u5f15\u64ce\u4e0d\u540c\u7248\u672c\u517c\u5bb9\u6027\u95ee\u9898",description:"1. \u9700\u6c42\u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/feature/base-engine-compatibilty.md",sourceDirName:"feature",slug:"/feature/base-engine-compatibilty",permalink:"/zh-CN/docs/1.4.0/feature/base-engine-compatibilty",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/feature/base-engine-compatibilty.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"\u51cf\u5c11\u57fa\u7840\u5f15\u64ce\u4e0d\u540c\u7248\u672c\u517c\u5bb9\u6027\u95ee\u9898",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u603b\u89c8",permalink:"/zh-CN/docs/1.4.0/feature/overview"},next:{title:"\u6839\u636e\u6570\u636e\u6e90\u751f\u6210SQL",permalink:"/zh-CN/docs/1.4.0/feature/datasource-generate-sql"}},l={},c=[{value:"1. \u9700\u6c42\u80cc\u666f",id:"1-\u9700\u6c42\u80cc\u666f",level:2},{value:"2. \u4f7f\u7528\u8bf4\u660e",id:"2-\u4f7f\u7528\u8bf4\u660e",level:2},{value:"3. \u6ce8\u610f\u4e8b\u9879",id:"3-\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u9700\u6c42\u80cc\u666f"},"1. \u9700\u6c42\u80cc\u666f"),(0,a.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u9700\u8981\u4fee\u6539linkis\u4ee3\u7801\u6765\u9002\u914d\u4e0d\u540c\u7684hive\u7248\u672c\u3001spark\u7248\u672c\uff0c\u56e0\u4e3a\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u7f16\u8bd1\u53ef\u80fd\u4f1a\u5931\u8d25\uff0c\u6211\u4eec\u53ef\u4ee5\u51cf\u5c11\u8fd9\u4e9b\u57fa\u7840\u5f15\u64ce\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"2-\u4f7f\u7528\u8bf4\u660e"},"2. \u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,"\u4e0d\u540c\u7684hive\u7248\u672c\u7684\u7f16\u8bd1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"-D=xxx"),"\u5c31\u53ef\u4ee5\u4e86\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install package -Dhive.version=3.1.3\n\n")),(0,a.kt)("p",null,"\u4e0d\u540c\u7248\u672c\u7684spark\u7f16\u8bd1\uff0c\u6211\u4eec\u4e5f\u53ea\u9700\u8981\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"-D=xxx"),"\u5c31\u53ef\u4ee5\u4e86\uff0c\u5e38\u7528\u7684\u4f7f\u7528\u573a\u666f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spark3+hadoop3\nmvn install package\n\nspark3+hadoop2\nmvn install package  -Phadoop-2.7\n\nspark2+hadoop2\nmvn install package -Pspark-2.4 -Phadoop-2.7\n\nspark2+ hadoop3\nmvn install package -Pspark-2.4\n\n")),(0,a.kt)("h2",{id:"3-\u6ce8\u610f\u4e8b\u9879"},"3. \u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"spark\u7684\u5b50\u7248\u672c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"-Dspark.version=xxx")," \u6765\u6307\u5b9a\nhadoop\u7684\u5b50\u7248\u672c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"-Dhadoop.version=xxx")," \u6765\u6307\u5b9a"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn install package -Pspark-3.2 -Phadoop-3.3 -Dspark.version=3.1.3\n")))}d.isMDXComponent=!0}}]);