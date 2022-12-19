"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[13168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),o=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(k.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(n),d=r,s=c["".concat(k,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58154:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5206\u5e03\u5f0f\u90e8\u7f72",sidebar_position:2},i=void 0,p={unversionedId:"deployment/deploy-cluster",id:"deployment/deploy-cluster",isDocsHomePage:!1,title:"\u5206\u5e03\u5f0f\u90e8\u7f72",description:"Linkis\u7684\u5355\u673a\u90e8\u7f72\u65b9\u5f0f\u7b80\u5355\uff0c\u8fc7\u591a\u7684\u8fdb\u7a0b\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u4f1a\u8ba9\u670d\u52a1\u5668\u538b\u529b\u8fc7\u5927\uff0c\u751f\u4ea7\u73af\u5883\u4e3a\u4e86\u4fdd\u8bc1\u670d\u52a1\u7684\u9ad8\u53ef\u7528\uff0c\u63a8\u8350\u4f7f\u7528\u5206\u90e8\u7f72\u90e8\u7f72\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/deploy-cluster.md",sourceDirName:"deployment",slug:"/deployment/deploy-cluster",permalink:"/zh-CN/docs/1.3.1/deployment/deploy-cluster",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/deploy-cluster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5206\u5e03\u5f0f\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.1/deployment/deploy-quick"},next:{title:"\u7ba1\u7406\u53f0\u90e8\u7f72",permalink:"/zh-CN/docs/1.3.1/deployment/deploy-console"}},k=[{value:"1 \u591a\u8282\u70b9\u90e8\u7f72\u65b9\u5f0f\u8ba1\u7b97\u6a21\u578b\u53c2\u8003",id:"1-\u591a\u8282\u70b9\u90e8\u7f72\u65b9\u5f0f\u8ba1\u7b97\u6a21\u578b\u53c2\u8003",children:[{value:"1.1 \u540c\u65f6\u5728\u7ebf\u4eba\u657010-50",id:"11-\u540c\u65f6\u5728\u7ebf\u4eba\u657010-50",children:[]},{value:"1.2 \u540c\u65f6\u5728\u7ebf\u4eba\u657050-100",id:"12-\u540c\u65f6\u5728\u7ebf\u4eba\u657050-100",children:[]},{value:"1.3 \u540c\u65f6\u4f7f\u7528\u4eba\u6570 100-300",id:"13-\u540c\u65f6\u4f7f\u7528\u4eba\u6570-100-300",children:[]},{value:"1.4 \u540c\u65f6\u4f7f\u7528\u4eba\u6570300-500",id:"14-\u540c\u65f6\u4f7f\u7528\u4eba\u6570300-500",children:[]},{value:"1.5 \u540c\u65f6\u4f7f\u7528\u4eba\u6570500\u4ee5\u4e0a",id:"15-\u540c\u65f6\u4f7f\u7528\u4eba\u6570500\u4ee5\u4e0a",children:[]}]},{value:"2 \u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u6d41\u7a0b",id:"2-\u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u6d41\u7a0b",children:[{value:"2.1 \u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u73af\u5883\u51c6\u5907",id:"21-\u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u73af\u5883\u51c6\u5907",children:[]},{value:"2.2 Eureka\u591a\u6d3b\u914d\u7f6e\u8c03\u6574",id:"22-eureka\u591a\u6d3b\u914d\u7f6e\u8c03\u6574",children:[]},{value:"2.3 \u5b89\u88c5\u7269\u6599\u7684\u540c\u6b65",id:"23-\u5b89\u88c5\u7269\u6599\u7684\u540c\u6b65",children:[]},{value:"2.4 \u8c03\u6574\u542f\u52a8\u811a\u672c",id:"24-\u8c03\u6574\u542f\u52a8\u811a\u672c",children:[]}]},{value:"3 \u6ce8\u610f\u4e8b\u9879",id:"3-\u6ce8\u610f\u4e8b\u9879",children:[]}],o={toc:k};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Linkis\u7684\u5355\u673a\u90e8\u7f72\u65b9\u5f0f\u7b80\u5355\uff0c\u8fc7\u591a\u7684\u8fdb\u7a0b\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u4f1a\u8ba9\u670d\u52a1\u5668\u538b\u529b\u8fc7\u5927\uff0c\u751f\u4ea7\u73af\u5883\u4e3a\u4e86\u4fdd\u8bc1\u670d\u52a1\u7684\u9ad8\u53ef\u7528\uff0c\u63a8\u8350\u4f7f\u7528\u5206\u90e8\u7f72\u90e8\u7f72\u3002\xa0\n\u90e8\u7f72\u65b9\u6848\u7684\u9009\u62e9\uff0c\u548c\u516c\u53f8\u7684\u7528\u6237\u89c4\u6a21\u3001\u7528\u6237\u4f7f\u7528\u4e60\u60ef\u3001\u96c6\u7fa4\u540c\u65f6\u4f7f\u7528\u4eba\u6570\u90fd\u6709\u5173\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u4f1a\u4ee5\u4f7f\u7528Linkis\u7684\u540c\u65f6\u4f7f\u7528\u4eba\u6570\u548c\u7528\u6237\u5bf9\u6267\u884c\u5f15\u64ce\u7684\u504f\u597d\u6765\u505a\u4f9d\u636e\u8fdb\u884c\u90e8\u7f72\u65b9\u5f0f\u7684\u9009\u62e9\u3002"),(0,r.kt)("h2",{id:"1-\u591a\u8282\u70b9\u90e8\u7f72\u65b9\u5f0f\u8ba1\u7b97\u6a21\u578b\u53c2\u8003"},"1 \u591a\u8282\u70b9\u90e8\u7f72\u65b9\u5f0f\u8ba1\u7b97\u6a21\u578b\u53c2\u8003"),(0,r.kt)("p",null,"Linkis\u7684\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u652f\u6301\u591a\u6d3b\u7684\u90e8\u7f72\u65b9\u6848\uff0c\u5f53\u7136\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u5728\u7cfb\u7edf\u4e2d\u627f\u62c5\u7684\u89d2\u8272\u4e0d\u4e00\u6837\uff0c\u6709\u7684\u5fae\u670d\u52a1\u8c03\u7528\u9891\u7387\u5f88\u9ad8\uff0c\u8d44\u6e90\u4f1a\u5904\u4e8e\u9ad8\u8d1f\u8377\u7684\u60c5\u51b5\uff0c\n",(0,r.kt)("strong",{parentName:"p"},"\u5728\u5b89\u88c5EngineConnManager\u7684\u673a\u5668\u4e0a\uff0c\u7531\u4e8e\u4f1a\u542f\u52a8\u7528\u6237\u7684\u5f15\u64ce\u8fdb\u7a0b\uff0c\u673a\u5668\u7684\u5185\u5b58\u8d1f\u8f7d\u4f1a\u6bd4\u8f83\u9ad8\uff0c\u5176\u4ed6\u7c7b\u578b\u7684\u5fae\u670d\u52a1\u5bf9\u673a\u5668\u7684\u8d1f\u8f7d\u5219\u76f8\u5bf9\u4e0d\u4f1a\u5f88\u9ad8\uff0c\n"),"\u5bf9\u4e8e\u8fd9\u7c7b\u5fae\u670d\u52a1\u6211\u4eec\u5efa\u8bae\u542f\u52a8\u591a\u4e2a\u8fdb\u884c\u5206\u5e03\u5f0f\u90e8\u7f72\uff0cLinkis\u52a8\u6001\u4f7f\u7528\u7684\u603b\u8d44\u6e90\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8ba1\u7b97\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EngineConnManager"),"\u4f7f\u7528\u603b\u8d44\u6e90",(0,r.kt)("br",null),"\n= \u603b\u5185\u5b58 + \u603b\u6838\u6570 ",(0,r.kt)("br",null),"\n= ",(0,r.kt)("strong",{parentName:"p"},"\u540c\u65f6\u5728\u7ebf\u4eba\u6570 ","*"," (\u6240\u6709\u7c7b\u578b\u7684\u5f15\u64ce\u5360\u7528\u5185\u5b58) ","*","\u5355\u7528\u6237\u6700\u9ad8\u5e76\u53d1\u6570+ \u540c\u65f6\u5728\u7ebf\u4eba\u6570 ","*","\n(\u6240\u6709\u7c7b\u578b\u7684\u5f15\u64ce\u5360\u7528\u6838\u6570) ","*","\u5355\u7528\u6237\u6700\u9ad8\u5e76\u53d1\u6570")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\n\u53ea\u4f7f\u7528spark\u3001hive\u3001python\u5f15\u64ce\u4e14\u5355\u7528\u6237\u6700\u9ad8\u5e76\u53d1\u6570\u4e3a1\u7684\u60c5\u51b5\u4e0b\uff0c\u540c\u65f6\u4f7f\u7528\u4eba\u657050\u4eba\uff0c\nspark\u7684Driver\u5185\u5b581G\uff0chive client\u5185\u5b581G\uff0cpython client 1G\uff0c\u6bcf\u4e2a\u5f15\u64ce\u90fd\u4f7f\u75281\u4e2a\u6838\n\nEngineConnManager\uff08ECM\uff09\u4f7f\u7528\u603b\u8d44\u6e90\n= 50 *\uff081+1+1\uff09G *1 + 50 *(1+1+1)\u6838*1\n= 150G \u5185\u5b58 + 150 CPU\u6838\n")),(0,r.kt)("p",null,"\u5206\u5e03\u5f0f\u90e8\u7f72\u65f6\u5fae\u670d\u52a1\u672c\u8eab\u5360\u7528\u7684\u5185\u5b58\u53ef\u4ee5\u6309\u7167\u6bcf\u4e2a2G\u8ba1\u7b97\uff0c\u5bf9\u4e8e\u4f7f\u7528\u4eba\u6570\u8f83\u591a\u7684\u60c5\u51b5\u4e0b\u5efa\u8bae\u8c03\u5927ps-publicservice\u7684\u5185\u5b58\u81f36G\uff0c\u540c\u65f6\u5efa\u8bae\u9884\u755910G\u5185\u5b58\u4f5c\u4e3abuffer\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u5047\u8bbe",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u7528\u6237\u540c\u65f6\u542f\u52a8\u4e24\u4e2a\u5f15\u64ce\u4e3a\u4f8b"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e64G\u5185\u5b58\u7684\u673a\u5668"),"\uff0c\u53c2\u8003\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("h3",{id:"11-\u540c\u65f6\u5728\u7ebf\u4eba\u657010-50"},"1.1 \u540c\u65f6\u5728\u7ebf\u4eba\u657010-50"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EngineConnManager"),"\u4f7f\u7528\u603b\u8d44\u6e90 = \u603b\u5185\u5b58 + \u603b\u6838\u6570 =\n",(0,r.kt)("strong",{parentName:"p"},"\u540c\u65f6\u5728\u7ebf\u4eba\u6570 ","*"," (\u6240\u6709\u7c7b\u578b\u7684\u5f15\u64ce\u5360\u7528\u5185\u5b58) ","*","\u5355\u7528\u6237\u6700\u9ad8\u5e76\u53d1\u6570+ \u540c\u65f6\u5728\u7ebf\u4eba\u6570 ","*","\n(\u6240\u6709\u7c7b\u578b\u7684\u5f15\u64ce\u5360\u7528\u6838\u6570) ","*","\u5355\u7528\u6237\u6700\u9ad8\u5e76\u53d1\u6570")),(0,r.kt)("p",null,"\u603b\u5185\u5b58:\u540c\u65f6\u5728\u7ebf\u4eba\u6570 50 ",(0,r.kt)("em",{parentName:"p"}," \u5355\u4e2a\u5f15\u64ce 1G\u5185\u5b58 ")," \u6bcf\u4e2a\u7528\u6237\u540c\u65f6\u542f\u52a8\u4e24\u4e2a\u5f15\u64ce 2 = 100G\u5185\u5b58"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  ",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"),"4\u53f0\u670d\u52a1\u5668\uff0c\u5206\u522b\u547d\u540d\u4e3aS1,S2,S3,S4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1\u3001S2(\u5171128G)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u53f0\u673a\u5668\u5355\u72ec\u90e8\u7f72")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S3\u3001S4"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka\u9ad8\u53ef\u7528\u90e8\u7f72")))),(0,r.kt)("h3",{id:"12-\u540c\u65f6\u5728\u7ebf\u4eba\u657050-100"},"1.2 \u540c\u65f6\u5728\u7ebf\u4eba\u657050-100"),(0,r.kt)("p",null,"\u603b\u5185\u5b58:\u540c\u65f6\u5728\u7ebf\u4eba\u6570 100 ",(0,r.kt)("em",{parentName:"p"}," \u5355\u4e2a\u5f15\u64ce 1G\u5185\u5b58 ")," \u6bcf\u4e2a\u7528\u6237\u540c\u65f6\u542f\u52a8\u4e24\u4e2a\u5f15\u64ce 2 = 200G\u5185\u5b58"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  ",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"),":6\u53f0\u670d\u52a1\u5668\uff0c\u5206\u522b\u547d\u540d\u4e3aS1,S2,S3,S4,S5,S6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S4(\u5171256G)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u53f0\u673a\u5668\u5355\u72ec\u90e8\u7f72")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S5\u3001S6"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka\u9ad8\u53ef\u7528\u90e8\u7f72")))),(0,r.kt)("h3",{id:"13-\u540c\u65f6\u4f7f\u7528\u4eba\u6570-100-300"},"1.3 \u540c\u65f6\u4f7f\u7528\u4eba\u6570 100-300"),(0,r.kt)("p",null,"\u603b\u5185\u5b58:\u540c\u65f6\u5728\u7ebf\u4eba\u6570 300 ",(0,r.kt)("em",{parentName:"p"}," \u5355\u4e2a\u5f15\u64ce 1G\u5185\u5b58 ")," \u6bcf\u4e2a\u7528\u6237\u540c\u65f6\u542f\u52a8\u4e24\u4e2a\u5f15\u64ce 2 = 600G\u5185\u5b58"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"),":12\u53f0\u670d\u52a1\u5668\uff0c\u5206\u522b\u547d\u540d\u4e3aS1,S2..S12"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S10(\u5171640G)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u53f0\u673a\u5668\u5355\u72ec\u90e8\u7f72")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S11\u3001S12"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka\u9ad8\u53ef\u7528\u90e8\u7f72")))),(0,r.kt)("h3",{id:"14-\u540c\u65f6\u4f7f\u7528\u4eba\u6570300-500"},"1.4 \u540c\u65f6\u4f7f\u7528\u4eba\u6570300-500"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"),"\uff1a20\u53f0\u670d\u52a1\u5668\uff0c\u5206\u522b\u547d\u540d\u4e3aS1,S2..S20")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S18"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u53f0\u673a\u5668\u5355\u72ec\u90e8\u7f72")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S19\u3001S20"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka\u9ad8\u53ef\u7528\u90e8\u7f72\uff0c\u90e8\u5206\u5fae\u670d\u52a1\u5982\u679c\u8bf7\u6c42\u91cf\u4e0a\u4e07\u53ef\u4ee5\u8003\u8651\u6269\u5bb9\uff0c\u76ee\u524d\u53cc\u6d3b\u90e8\u7f72\u53ef\u4ee5\u652f\u6301\u884c\u5185\u4e0a\u5343\u7528\u6237\u4f7f\u7528")))),(0,r.kt)("h3",{id:"15-\u540c\u65f6\u4f7f\u7528\u4eba\u6570500\u4ee5\u4e0a"},"1.5 \u540c\u65f6\u4f7f\u7528\u4eba\u6570500\u4ee5\u4e0a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6309\u7167\u540c\u65f6\u5728\u7ebf800\u4eba\u4f30\u7b97\n",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"),"\uff1a34\u53f0\u670d\u52a1\u5668\uff0c\u5206\u522b\u547d\u540d\u4e3aS1,S2..S34")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Host name"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cg-engineconnmanager"),(0,r.kt)("td",{parentName:"tr",align:null},"S1-S32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u53f0\u673a\u5668\u5355\u72ec\u90e8\u7f72")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other services"),(0,r.kt)("td",{parentName:"tr",align:null},"S33\u3001S34"),(0,r.kt)("td",{parentName:"tr",align:null},"Eureka\u9ad8\u53ef\u7528\u90e8\u7f72\uff0c\u90e8\u5206\u5fae\u670d\u52a1\u5982\u679c\u8bf7\u6c42\u91cf\u4e0a\u4e07\u53ef\u4ee5\u8003\u8651\u6269\u5bb9\uff0c\u76ee\u524d\u53cc\u6d3b\u90e8\u7f72\u53ef\u4ee5\u652f\u6301\u884c\u5185\u4e0a\u5343\u7528\u6237\u4f7f\u7528")))),(0,r.kt)("h2",{id:"2-\u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u6d41\u7a0b"},"2 \u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u6d41\u7a0b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u53ea\u662f\u4e00\u4e2a\u53c2\u8003\u6837\u4f8b\uff0c\u4ee5\u4e24\u53f0\u670d\u52a1\u5668\u4e3a\u4f8b\u8fdb\u884c\u5206\u5e03\u5f0f\u90e8\u7f72\u3002\u76ee\u524d\u4e00\u952e\u5b89\u88c5\u811a\u672c\u5bf9\u5206\u5e03\u5f0f\u90e8\u7f72\u8fd8\u6ca1\u6709\u5f88\u597d\u7684\u652f\u6301\uff0c\u9700\u8981\u624b\u52a8\u8fdb\u884c\u8c03\u6574\u90e8\u7f72\u3002")),(0,r.kt)("p",null,"\u5047\u5982\u5df2\u7ecf\u5728\u670d\u52a1\u5668A\u4e0a\uff0c\u6210\u529f\u4ee5\u5355\u673a\u65b9\u5f0f\u90e8\u7f72\u4e86linkis\uff0c\u73b0\u5728\u60f3\u6dfb\u52a0\u4e00\u53f0\u670d\u52a1\u5668B\uff0c\u8fdb\u884c\u5206\u5e03\u5f0f\u90e8\u7f72\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4"),(0,r.kt)("p",null,"\u6a21\u5f0f\uff1aEureka\u670d\u52a1\u591a\u6d3b\u90e8\u7f72 \uff0c\u90e8\u5206\u670d\u52a1\u90e8\u7f72\u5728\u670d\u52a1\u5668A\uff0c\u90e8\u5206\u670d\u52a1\u90e8\u7f72\u5728\u670d\u52a1\u5668B\u4e0a "),(0,r.kt)("h3",{id:"21-\u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u73af\u5883\u51c6\u5907"},"2.1 \u5206\u5e03\u5f0f\u90e8\u7f72\u7684\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u548c\u670d\u52a1\u5668A\u4e00\u6837\uff0c\u670d\u52a1\u5668B\u9700\u8981\u8fdb\u884c\u57fa\u7840\u7684\u73af\u5883\u51c6\u5907\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"deploy-quick#3-linkis%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87"},"Linkis\u73af\u5883\u51c6\u5907")),(0,r.kt)("h3",{id:"22-eureka\u591a\u6d3b\u914d\u7f6e\u8c03\u6574"},"2.2 Eureka\u591a\u6d3b\u914d\u7f6e\u8c03\u6574"),(0,r.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3Eureka\u670d\u52a1\uff0c\u9700\u8981\u90e8\u7f72\u5728\u670d\u52a1\u5668A\u548c\u670d\u52a1\u5668B\u4e0a\uff0c"),(0,r.kt)("p",null,"\u4fee\u6539Eureka\u914d\u7f6e\u6587\u4ef6,\u628a\u4e24\u53f0Eureka\u7684\u914d\u7f6e\u5730\u5740\u90fd\u52a0\u4e0a\uff0c\u8ba9Eureka\u670d\u52a1\u4e4b\u95f4\u76f8\u4e92\u6ce8\u518c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u670d\u52a1\u5668A\u4e0a\uff0c\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\u4fee\u6539  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4fee\u6539 $LINKIS_HOME/conf/application-eureka.yml\u548c$LINKIS_HOME/conf/application-linkis.yml\u914d\u7f6e\n\neureka:\n  client:\n    serviceUrl:\n      defaultZone: http:/eurekaIp1:port1/eureka/,http:/eurekaIp2:port2/eureka/\n\n\n\u4fee\u6539 $LINKIS_HOME/conf/linkis.properties \u914d\u7f6e\n  \nwds.linkis.eureka.defaultZone=http:/eurekaIp1:port1/eureka/,http:/eurekaIp2:port2/eureka/  \n")),(0,r.kt)("h3",{id:"23-\u5b89\u88c5\u7269\u6599\u7684\u540c\u6b65"},"2.3 \u5b89\u88c5\u7269\u6599\u7684\u540c\u6b65"),(0,r.kt)("p",null,"\u5728\u670d\u52a1\u5668A\u4e0a\uff0c\u5c06linkis\u7684\u6210\u529f\u5b89\u88c5\u7684\u76ee\u5f55",(0,r.kt)("inlineCode",{parentName:"p"},"$LINKIS_HOME")," \u6253\u5305\uff0c\u7136\u540e\u62f7\u8d1d\u5e76\u89e3\u538b\u5230\u670d\u52a1\u5668B\u7684\u76f8\u540c\u76ee\u5f55\u4e0b\u3002\n\u6b64\u65f6\uff0c\u5982\u679c\u5728\u670d\u52a1\u5668A\u4e0a\u4ee5\u53ca\u670d\u52a1\u5668B\u4e0a\uff0c\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"sbin/linkis-start-all.sh"),"\u547d\u4ee4\u542f\u52a8\u6240\u6709\u670d\u52a1\uff0c\u90a3\u4e48\u6240\u6709\u670d\u52a1\u90fd\u6709\u4e24\u4e2a\u5b9e\u4f8b\u3002 \u53ef\u4ee5\u8bbf\u95eeeureka\u670d\u52a1\u5c55\u793a\u9875\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},"http:/eurekaIp1:port1\uff0c\u6216http:/eurekaIp2:port2")," \u67e5\u770b"),(0,r.kt)("h3",{id:"24-\u8c03\u6574\u542f\u52a8\u811a\u672c"},"2.4 \u8c03\u6574\u542f\u52a8\u811a\u672c"),(0,r.kt)("p",null,"\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u786e\u5b9a\u670d\u52a1\u5668A\u548c\u670d\u52a1\u5668B\u4e0a\u9700\u8981\u90e8\u7f72\u7684\u670d\u52a1\uff0c\n\u6bd4\u5982 \u5fae\u670d\u52a1",(0,r.kt)("inlineCode",{parentName:"p"},"linkis-cg-engineconnmanager")," \u4e0d\u4f1a\u90e8\u7f72\u5728\u670d\u52a1\u5668A\u4e0a\uff0c\n\u5219\u4fee\u6539\u670d\u52a1\u5668A\u7684\u4e00\u952e\u542f\u505c\u811a\u672c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sbin/linkis-start-all.sh"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"sbin/linkis-stop-all.sh"),"\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"cg-engineconnmanager"),"\u670d\u52a1\u76f8\u5173\u7684\u542f\u505c\u547d\u4ee4\uff0c\u6ce8\u91ca\u6389 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'sbin/linkis-start-all.sh\n#linkis-cg-linkismanage\n#SERVER_NAME="cg-linkismanager"\n#SERVER_IP=$MANAGER_INSTALL_IP\n#startApp\n\nsbin/linkis-stop-all.sh\n#linkis-cg-engineconnmanager(ecm)\n#SERVER_NAME="cg-engineconnmanager"\n#SERVER_IP=$ENGINECONNMANAGER_INSTALL_IP\n#stopApp\n\n')),(0,r.kt)("h2",{id:"3-\u6ce8\u610f\u4e8b\u9879"},"3 \u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5206\u90e8\u7f72\u90e8\u7f72\u65f6\uff0clinkis\u7684\u5b89\u88c5\u76ee\u5f55\u5efa\u8bae\u4fdd\u6301\u4e00\u81f4\uff0c\u65b9\u4fbf\u7edf\u4e00\u7ba1\u63a7\uff0c\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u6700\u597d\u4e5f\u4fdd\u6301\u4e00\u81f4 "),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e9b\u670d\u52a1\u5668\uff0c\u7aef\u53e3\u5df2\u88ab\u5176\u4ed6\u5e94\u7528\u5360\u7528\uff0c\u65e0\u6cd5\u4f7f\u7528\u65f6\uff0c\u9700\u8981\u8c03\u6574\u8be5\u670d\u52a1\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},"mg-gateway\u7684\u591a\u6d3b\u90e8\u7f72\uff0c\u76ee\u524d\u56e0\u4e3a\u767b\u9646session\u4e0d\u652f\u6301\u5206\u5e03\u5f0f\uff0c\u7528\u4e00\u4e2a\u7528\u6237\u7684\u8bf7\u6c42\uff0c\u9700\u8981\u8bf7\u6c42\u5230\u540c\u4e00\u4e2agateway\u5b9e\u4f8b\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7nginx\u7684ip hash\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u6765\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u952e\u542f\u505c\u811a\u672c\uff0c\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u8fdb\u884c\u8c03\u6574\uff0c\u5bf9\u4e8e\u4e0d\u518d\u672c\u672c\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u7684\u5fae\u670d\u52a1\uff0c\u9700\u8981\u5728\u4e00\u952e\u542f\u52a8\u811a\u672c\u4e2d\uff0c\u5c06\u5bf9\u5e94\u7684\u542f\u505c\u547d\u4ee4\u6ce8\u91ca\u6389\u3002")))}u.isMDXComponent=!0}}]);