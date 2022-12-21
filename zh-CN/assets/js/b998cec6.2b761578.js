"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[21617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},g),{},{components:n})):a.createElement(k,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u603b\u89c8",sidebar_position:0},l="LinkisManager\u67b6\u6784\u8bbe\u8ba1",o={unversionedId:"architecture/computation-governance-services/linkis-manager/overview",id:"version-1.1.2/architecture/computation-governance-services/linkis-manager/overview",title:"\u603b\u89c8",description:"LinkisManager\u4f5c\u4e3aLinkis\u7684\u4e00\u4e2a\u72ec\u7acb\u5fae\u670d\u52a1\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e86AppManager\uff08\u5e94\u7528\u7ba1\u7406\uff09\u3001ResourceManager\uff08\u8d44\u6e90\u7ba1\u7406\uff09\u3001LabelManager\uff08\u6807\u7b7e\u7ba1\u7406\uff09\u7684\u80fd\u529b\uff0c\u80fd\u591f\u652f\u6301\u591a\u6d3b\u90e8\u7f72\uff0c\u5177\u5907\u9ad8\u53ef\u7528\u3001\u6613\u6269\u5c55\u7684\u7279\u6027\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/computation-governance-services/linkis-manager/overview.md",sourceDirName:"architecture/computation-governance-services/linkis-manager",slug:"/architecture/computation-governance-services/linkis-manager/overview",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/linkis-manager/overview",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.2/architecture/computation-governance-services/linkis-manager/overview.md",tags:[],version:"1.1.2",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Linkis\u4efb\u52a1\u6267\u884c\u6d41\u7a0b",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/job-submission-preparation-and-execution-process"},next:{title:"AppManager \u67b6\u6784",permalink:"/zh-CN/docs/1.1.2/architecture/computation-governance-services/linkis-manager/app-manager"}},p={},c=[{value:"\u4e00. \u67b6\u6784\u56fe",id:"\u4e00-\u67b6\u6784\u56fe",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u4e8c. \u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd",id:"\u4e8c-\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"1. \u5e94\u7528\u7ba1\u7406\u6a21\u5757 linkis-application-manager",id:"1-\u5e94\u7528\u7ba1\u7406\u6a21\u5757-linkis-application-manager",level:3},{value:"2. \u6807\u7b7e\u7ba1\u7406\u6a21\u5757 linkis-label-manager",id:"2-\u6807\u7b7e\u7ba1\u7406\u6a21\u5757-linkis-label-manager",level:3},{value:"3. \u8d44\u6e90\u7ba1\u7406\u6a21\u5757 linkis-resource-manager",id:"3-\u8d44\u6e90\u7ba1\u7406\u6a21\u5757-linkis-resource-manager",level:3},{value:"4. \u76d1\u63a7\u6a21\u5757 linkis-manager-monitor",id:"4-\u76d1\u63a7\u6a21\u5757-linkis-manager-monitor",level:3}],g={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linkismanager\u67b6\u6784\u8bbe\u8ba1"},"LinkisManager\u67b6\u6784\u8bbe\u8ba1"),(0,r.kt)("p",null,"LinkisManager\u4f5c\u4e3aLinkis\u7684\u4e00\u4e2a\u72ec\u7acb\u5fae\u670d\u52a1\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e86AppManager\uff08\u5e94\u7528\u7ba1\u7406\uff09\u3001ResourceManager\uff08\u8d44\u6e90\u7ba1\u7406\uff09\u3001LabelManager\uff08\u6807\u7b7e\u7ba1\u7406\uff09\u7684\u80fd\u529b\uff0c\u80fd\u591f\u652f\u6301\u591a\u6d3b\u90e8\u7f72\uff0c\u5177\u5907\u9ad8\u53ef\u7528\u3001\u6613\u6269\u5c55\u7684\u7279\u6027\u3002"),(0,r.kt)("h2",{id:"\u4e00-\u67b6\u6784\u56fe"},"\u4e00. \u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01",src:n(40533).Z,width:"1267",height:"724"})),(0,r.kt)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EngineConnManager\uff08ECM\uff09\uff1a \u5f15\u64ce\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u542f\u52a8\u548c\u7ba1\u7406\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"EngineConn\uff08EC\uff09\uff1a\u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u8fde\u63a5\u5e95\u5c42\u8ba1\u7b97\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"ResourceManager\uff08RM\uff09\uff1a\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u8282\u70b9\u8d44\u6e90")),(0,r.kt)("h2",{id:"\u4e8c-\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c. \u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"1-\u5e94\u7528\u7ba1\u7406\u6a21\u5757-linkis-application-manager"},"1. \u5e94\u7528\u7ba1\u7406\u6a21\u5757 linkis-application-manager"),(0,r.kt)("p",null,"AppManager\u7528\u4e8e\u5f15\u64ce\u7684\u7edf\u4e00\u8c03\u5ea6\u548c\u7ba1\u7406"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u63a5\u53e3/\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMInfoService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConnManager\u4fe1\u606f\u67e5\u8be2\u3001\u4fee\u6539\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMRegisterService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConnManager\u6ce8\u518c\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMEngineService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConnManager\u5bf9EngineConn\u7684\u521b\u5efa\u3001\u67e5\u8be2\u3001\u5173\u95ed\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineAskEngineService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u67e5\u8be2EngineConn\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnStatusCallbackService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u5904\u7406EngineConn\u72b6\u6001\u56de\u8c03\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineCreateService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u521b\u5efaEngineConn\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineInfoService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u67e5\u8be2\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineKillService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u505c\u6b62\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineRecycleService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u56de\u6536\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineReuseService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u590d\u7528\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineStopService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u7684\u81ea\u6bc1\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineSwitchService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u5f15\u64ce\u5207\u6362\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AMHeartbeatService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86EngineConnManager\u548cEngineConn\u8282\u70b9\u5fc3\u8df3\u5904\u7406\u529f\u80fd")))),(0,r.kt)("p",null,"\u901a\u8fc7AppManager\u7533\u8bf7\u5f15\u64ce\u6d41\u7a0b\u5982\u4e0b\uff1a\n",(0,r.kt)("img",{src:n(57234).Z,width:"799",height:"614"})),(0,r.kt)("h3",{id:"2-\u6807\u7b7e\u7ba1\u7406\u6a21\u5757-linkis-label-manager"},"2. \u6807\u7b7e\u7ba1\u7406\u6a21\u5757 linkis-label-manager"),(0,r.kt)("p",null,"LabelManager\u63d0\u4f9b\u6807\u7b7e\u7ba1\u7406\u548c\u89e3\u6790\u80fd\u529b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u63a5\u53e3/\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u6807\u7b7e\u589e\u5220\u6539\u67e5\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceLabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u8d44\u6e90\u6807\u7b7e\u7ba1\u7406\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserLabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u7528\u6237\u6807\u7b7e\u7ba1\u7406\u529f\u80fd")))),(0,r.kt)("p",null,"LabelManager\u67b6\u6784\u56fe\u5982\u4e0b\uff1a\n",(0,r.kt)("img",{src:n(81846).Z,width:"1280",height:"720"})),(0,r.kt)("h3",{id:"3-\u8d44\u6e90\u7ba1\u7406\u6a21\u5757-linkis-resource-manager"},"3. \u8d44\u6e90\u7ba1\u7406\u6a21\u5757 linkis-resource-manager"),(0,r.kt)("p",null,"ResourceManager\u7528\u4e8e\u7ba1\u7406\u5f15\u64ce\u548c\u961f\u5217\u7684\u6240\u6709\u8d44\u6e90\u5206\u914d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u63a5\u53e3/\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RequestResourceService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86EngineConn\u8d44\u6e90\u7533\u8bf7\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceManagerService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86EngineConn\u8d44\u6e90\u91ca\u653e\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LabelResourceService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u6807\u7b7e\u5bf9\u5e94\u8d44\u6e90\u7ba1\u7406\u529f\u80fd")))),(0,r.kt)("p",null,"ResourceManager\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55128).Z,width:"1558",height:"760"})),(0,r.kt)("h3",{id:"4-\u76d1\u63a7\u6a21\u5757-linkis-manager-monitor"},"4. \u76d1\u63a7\u6a21\u5757 linkis-manager-monitor"),(0,r.kt)("p",null,"Monitor\u63d0\u4f9b\u4e86\u8282\u70b9\u72b6\u6001\u76d1\u63a7\u7684\u529f\u80fd"))}u.isMDXComponent=!0},57234:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AppManager-01-b3e8fc5e41d7bdca31d42da47ccacbcd.png"},81846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LabelManager-01-9067663004be2725f54c16cf0e98f2ab.png"},40533:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LinkisManager-01-41eca880a2b8e34825a070f14b145dba.png"},55128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ResourceManager-01-8248d7a32c20780dcae31297ef3ace52.png"}}]);