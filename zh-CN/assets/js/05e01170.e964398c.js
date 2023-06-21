"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u901a\u8fc7 UDF ID \u52a0\u8f7d UDF",sidebar_position:.2},l=void 0,o={unversionedId:"feature/load-udf-by-udfid",id:"feature/load-udf-by-udfid",title:"\u901a\u8fc7 UDF ID \u52a0\u8f7d UDF",description:"1. \u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/feature/load-udf-by-udfid.md",sourceDirName:"feature",slug:"/feature/load-udf-by-udfid",permalink:"/zh-CN/docs/1.4.0/feature/load-udf-by-udfid",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/feature/load-udf-by-udfid.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"\u901a\u8fc7 UDF ID \u52a0\u8f7d UDF",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"Eureka \u4e0a\u62a5\u7248\u672c\u5143\u6570\u636e",permalink:"/zh-CN/docs/1.4.0/feature/eureka-version-metadata"},next:{title:"linkis\u4e2d\u79fb\u9664json4s\u4f9d\u8d56",permalink:"/zh-CN/docs/1.4.0/feature/remove-json4s-from-linkis"}},u={},s=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:2},{value:"2. \u4f7f\u7528\u8bf4\u660e",id:"2-\u4f7f\u7528\u8bf4\u660e",level:2},{value:"3. \u6ce8\u610f\u4e8b\u9879",id:"3-\u6ce8\u610f\u4e8b\u9879",level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,a.kt)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u52a0\u8f7d UDF \u4e0d\u662f\u901a\u8fc7 Scripts\u3001DSS \u7b49\u53ef\u89c6\u5316\u754c\u9762\u8fdb\u884c\u52a0\u8f7d\uff0c\u800c\u662f\u901a\u8fc7\u4ee3\u7801\u8fdb\u884c\u52a0\u8f7d\u3002\u8fd9\u5c31\u9700\u8981\u63d0\u4f9b\u901a\u8fc7 UDF ID \u52a0\u8f7d UDF \u7684\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"2-\u4f7f\u7528\u8bf4\u660e"},"2. \u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"linkis.user.udf.all.load")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u52a0\u8f7d\u7528\u6237\u9009\u4e2d\u7684\u6240\u6709 UDF"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"linkis.user.udf.custom.ids")),(0,a.kt)("td",{parentName:"tr",align:null},"UDF ID \u5217\u8868\uff0c\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},",")," \u5206\u9694"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("p",null,"\u901a\u8fc7 RestFul \u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u8bf7\u6c42\u793a\u4f8b\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'POST /api/rest_j/v1/entrance/submit\nContent-Type: application/json\nToken-Code: dss-AUTH\nToken-User: linkis\n\n{\n    "executionContent": {\n        "code": "show databases",\n        "runType": "sql"\n    },\n    "params": {\n        "configuration": {\n            "startup": {\n                "linkis.user.udf.all.load": false\n                "linkis.user.udf.custom.ids": "1,2,3"\n            }\n        }\n    },\n    "labels": {\n        "engineType": "spark-2.4.3",                  // pattern\uff1aengineType-version\n        "userCreator": "linkis-IDE"                   // userCreator: linkis is username\u3002IDE is system that be configed in Linkis\u3002\n    }\n}\n')),(0,a.kt)("h2",{id:"3-\u6ce8\u610f\u4e8b\u9879"},"3. \u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.user.udf.all.load")," \u6307\u5b9a true \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.user.udf.custom.ids")," \u53c2\u6570\u4e0d\u751f\u6548")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"/udf/isload?udfId=123&isLoad=true")," \u63a5\u53e3\u7684\u52a0\u8f7d\u662f\u76f8\u4e92\u72ec\u7acb\u7684"))))}c.isMDXComponent=!0}}]);