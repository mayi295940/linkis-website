"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[99071],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>g});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p="mdxType",k={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},E=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=c(t),E=i,g=p["".concat(s,".").concat(E)]||p[E]||k[E]||a;return t?r.createElement(g,o(o({ref:e},u),{},{components:t})):r.createElement(g,o({ref:e},u))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=E;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[p]="string"==typeof n?n:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}E.displayName="MDXCreateElement"},81588:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={title:"\u4efb\u52a1\u6d41\u8f6c\u6d41\u7a0b\u4ecb\u7ecd",sidebar_position:2},o=void 0,l={unversionedId:"architecture/task-flow",id:"architecture/task-flow",title:"\u4efb\u52a1\u6d41\u8f6c\u6d41\u7a0b\u4ecb\u7ecd",description:"Linkis\u4efb\u52a1\u6267\u884c\u662fLinkis\u7684\u6838\u5fc3\u529f\u80fd\uff0c\u8c03\u7528\u5230Linkis\u7684\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u3001\u516c\u5171\u589e\u5f3a\u670d\u52a1\uff0c\u5fae\u670d\u52a1\u6cbb\u7406\u7684\u4e09\u5c42\u670d\u52a1\uff0c\u73b0\u5728\u5df2\u7ecf\u652f\u6301\u4e86OLAP\u3001OLTP\u3001Streaming\u7b49\u5f15\u64ce\u7c7b\u578b\u7684\u4efb\u52a1\u6267\u884c\uff0c\u672c\u6587\u5c06\u5bf9OLAP\u7c7b\u578b\u5f15\u64ce\u7684\u4efb\u52a1\u63d0\u4ea4\u3001\u51c6\u5907\u3001\u6267\u884c\u3001\u7ed3\u679c\u8fd4\u56de\u7b49\u6d41\u7a0b\u8fdb\u884c\u4ecb\u7ecd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/task-flow.md",sourceDirName:"architecture",slug:"/architecture/task-flow",permalink:"/zh-CN/docs/1.3.2/architecture/task-flow",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/task-flow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4efb\u52a1\u6d41\u8f6c\u6d41\u7a0b\u4ecb\u7ecd",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.2/architecture/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.2/architecture/service-architecture/overview"}},s={},c=[{value:"\u5173\u952e\u540d\u8bcd\uff1a",id:"\u5173\u952e\u540d\u8bcd",level:2},{value:"\u4e00\u3001Linkis\u4ea4\u4e92\u5f0f\u4efb\u52a1\u6267\u884c\u67b6\u6784",id:"\u4e00linkis\u4ea4\u4e92\u5f0f\u4efb\u52a1\u6267\u884c\u67b6\u6784",level:2},{value:"1.1\u3001\u4efb\u52a1\u6267\u884c\u601d\u8003",id:"11\u4efb\u52a1\u6267\u884c\u601d\u8003",level:3},{value:"1.2\u3001Linkis\u4efb\u52a1\u6267\u884c\u8bbe\u8ba1",id:"12linkis\u4efb\u52a1\u6267\u884c\u8bbe\u8ba1",level:3},{value:"\u4e8c\u3001\u4efb\u52a1\u6267\u884c\u6d41\u7a0b\u4ecb\u7ecd",id:"\u4e8c\u4efb\u52a1\u6267\u884c\u6d41\u7a0b\u4ecb\u7ecd",level:2},{value:"2.1 Job\u63d0\u4ea4\u9636\u6bb5",id:"21-job\u63d0\u4ea4\u9636\u6bb5",level:3},{value:"2.2 Job\u51c6\u5907\u9636\u6bb5",id:"22-job\u51c6\u5907\u9636\u6bb5",level:3},{value:"2.2.1 Entrance\u6b65\u9aa4\uff1a",id:"221-entrance\u6b65\u9aa4",level:3},{value:"2.2.2 LinkisMaster\u6b65\u9aa4\uff1a",id:"222-linkismaster\u6b65\u9aa4",level:3},{value:"2.3 Job\u6267\u884c\u9636\u6bb5",id:"23-job\u6267\u884c\u9636\u6bb5",level:3},{value:"2.4 Job\u7ed3\u679c\u63a8\u9001\u9636\u6bb5",id:"24-job\u7ed3\u679c\u63a8\u9001\u9636\u6bb5",level:3},{value:"\u4e09\u3001\u603b\u7ed3",id:"\u4e09\u603b\u7ed3",level:2}],u={toc:c};function p(n){let{components:e,...a}=n;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," Linkis\u4efb\u52a1\u6267\u884c\u662fLinkis\u7684\u6838\u5fc3\u529f\u80fd\uff0c\u8c03\u7528\u5230Linkis\u7684\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u3001\u516c\u5171\u589e\u5f3a\u670d\u52a1\uff0c\u5fae\u670d\u52a1\u6cbb\u7406\u7684\u4e09\u5c42\u670d\u52a1\uff0c\u73b0\u5728\u5df2\u7ecf\u652f\u6301\u4e86OLAP\u3001OLTP\u3001Streaming\u7b49\u5f15\u64ce\u7c7b\u578b\u7684\u4efb\u52a1\u6267\u884c\uff0c\u672c\u6587\u5c06\u5bf9OLAP\u7c7b\u578b\u5f15\u64ce\u7684\u4efb\u52a1\u63d0\u4ea4\u3001\u51c6\u5907\u3001\u6267\u884c\u3001\u7ed3\u679c\u8fd4\u56de\u7b49\u6d41\u7a0b\u8fdb\u884c\u4ecb\u7ecd\u3002")),(0,i.kt)("h2",{id:"\u5173\u952e\u540d\u8bcd"},"\u5173\u952e\u540d\u8bcd\uff1a"),(0,i.kt)("p",null,"LinkisMaster\uff1aLinkis\u7684\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u5c42\u67b6\u4e2d\u7684\u7ba1\u7406\u670d\u52a1\uff0c\u4e3b\u8981\u5305\u542b\u4e86AppManager\u3001ResourceManager\u3001LabelManager\u7b49\u51e0\u4e2a\u7ba1\u63a7\u670d\u52a1\u3002\u539f\u540dLinkisManager\u670d\u52a1\nEntrance\uff1a\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u5c42\u67b6\u4e2d\u7684\u5165\u53e3\u670d\u52a1\uff0c\u5b8c\u6210\u4efb\u52a1\u7684\u8c03\u5ea6\u3001\u72b6\u6001\u7ba1\u63a7\u3001\u4efb\u52a1\u4fe1\u606f\u63a8\u9001\u7b49\u529f\u80fd\nOrchestrator\uff1aLinkis\u7684\u7f16\u6392\u670d\u52a1\uff0c\u63d0\u4f9b\u5f3a\u5927\u7684\u7f16\u6392\u548c\u8ba1\u7b97\u7b56\u7565\u80fd\u529b\uff0c\u6ee1\u8db3\u591a\u6d3b\u3001\u4e3b\u5907\u3001\u4e8b\u52a1\u3001\u91cd\u653e\u3001\u9650\u6d41\u3001\u5f02\u6784\u548c\u6df7\u7b97\u7b49\u591a\u79cd\u5e94\u7528\u573a\u666f\u7684\u9700\u6c42\u3002\u73b0\u9636\u6bb5Orchestrator\u88abEntrance\u670d\u52a1\u6240\u4f9d\u8d56\nEngineConn\uff08EC\uff09\uff1a\u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u8d1f\u8d23\u63a5\u53d7\u4efb\u52a1\u5e76\u63d0\u4ea4\u7ed9\u5e95\u5c42\u5f15\u64ce\u5982Spark\u3001hive\u3001Flink\u3001Presto\u3001trino\u7b49\u8fdb\u884c\u6267\u884c\nEngineConnManager\uff08ECM\uff09\uff1aLinkis \u7684EC\u8fdb\u7a0b\u7ba1\u7406\u670d\u52a1\uff0c\u8d1f\u8d23\u7ba1\u63a7EngineConn\u7684\u751f\u547d\u5468\u671f\uff08\u542f\u52a8\u3001\u505c\u6b62\uff09\nLinkisEnginePluginServer\uff1a\u8be5\u670d\u52a1\u8d1f\u8d23\u7ba1\u7406\u5404\u4e2a\u5f15\u64ce\u7684\u542f\u52a8\u7269\u6599\u548c\u914d\u7f6e\uff0c\u53e6\u5916\u63d0\u4f9b\u6bcf\u4e2aEngineConn\u7684\u542f\u52a8\u547d\u4ee4\u83b7\u53d6\uff0c\u4ee5\u53ca\u6bcf\u4e2aEngineConn\u6240\u9700\u8981\u7684\u8d44\u6e90\nPublicEnhencementService\uff08PES\uff09\uff1a \u516c\u5171\u589e\u5f3a\u670d\u52a1\uff0c\u4e3a\u5176\u4ed6\u5fae\u670d\u52a1\u6a21\u5757\u63d0\u4f9b\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u3001\u4e0a\u4e0b\u6587\u670d\u52a1\u3001\u7269\u6599\u5e93\u3001\u6570\u636e\u6e90\u7ba1\u7406\u3001\u5fae\u670d\u52a1\u7ba1\u7406\u548c\u5386\u53f2\u4efb\u52a1\u67e5\u8be2\u7b49\u529f\u80fd\u7684\u6a21\u5757"),(0,i.kt)("h2",{id:"\u4e00linkis\u4ea4\u4e92\u5f0f\u4efb\u52a1\u6267\u884c\u67b6\u6784"},"\u4e00\u3001Linkis\u4ea4\u4e92\u5f0f\u4efb\u52a1\u6267\u884c\u67b6\u6784"),(0,i.kt)("h3",{id:"11\u4efb\u52a1\u6267\u884c\u601d\u8003"},"1.1\u3001\u4efb\u52a1\u6267\u884c\u601d\u8003"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u5728\u73b0\u6709Linkis1.0\u4efb\u52a1\u6267\u884c\u67b6\u6784\u4e4b\u524d\uff0c\u4e5f\u7ecf\u5386\u4e86\u591a\u6b21\u6f14\u53d8\uff0c\u4ece\u6700\u5f00\u59cb\u7528\u6237\u4e00\u591a\u8d77\u6765\u5c31\u5404\u79cdFullGC\u5bfc\u81f4\u670d\u52a1\u5d29\u6e83\uff0c\u5230\u7528\u6237\u5f00\u53d1\u7684\u811a\u672c\u5982\u4f55\u652f\u6301\u591a\u5e73\u53f0\u3001\u591a\u79df\u6237\u3001\u5f3a\u7ba1\u63a7\u3001\u9ad8\u5e76\u53d1\u8fd0\u884c\uff0c\u6211\u4eec\u9047\u89c1\u4e86\u5982\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5982\u4f55\u652f\u6301\u79df\u6237\u6237\u7684\u4e0a\u4e07\u5e76\u53d1\u5e76\u4e92\u76f8\u9694\u79bb?"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u4f55\u652f\u6301\u4e0a\u4e0b\u6587\u7edf\u4e00 \uff0c\u7528\u6237\u5b9a\u4e49\u7684UDF\u3001\u81ea\u5b9a\u4e49\u53d8\u91cf\u7b49\u652f\u6301\u591a\u4e2a\u7cfb\u7edf\u4f7f\u7528?"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u4f55\u652f\u6301\u9ad8\u53ef\u7528\uff0c\u505a\u5230\u7528\u6237\u63d0\u4ea4\u7684\u4efb\u52a1\u80fd\u591f\u6b63\u5e38\u8fd0\u884c\u5b8c?"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u4f55\u652f\u6301\u4efb\u52a1\u7684\u5e95\u5c42\u5f15\u64ce\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\u80fd\u591f\u5b9e\u65f6\u63a8\u9001\u7ed9\u524d\u7aef\uff1f"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u4f55\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u4efb\u52a1\u63d0\u4ea4sql\u3001python\u3001shell\u3001scala\u3001java\u7b49")),(0,i.kt)("h3",{id:"12linkis\u4efb\u52a1\u6267\u884c\u8bbe\u8ba1"},"1.2\u3001Linkis\u4efb\u52a1\u6267\u884c\u8bbe\u8ba1"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u57fa\u4e8e\u4ee5\u4e0a5\u4e2a\u95ee\u9898\u51fa\u53d1\uff0cLinkis\u5c06OLTP\u4efb\u52a1\u5206\u6210\u4e86\u56db\u4e2a\u9636\u6bb5\uff0c\u5206\u522b\u662f:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u9636\u6bb5\uff1aAPP\u63d0\u4ea4\u5230Linkis\u7684CG-Entrance\u670d\u52a1\u5230\u5b8c\u6210\u4efb\u52a1\u7684\u6301\u4e45\u5316\uff08PS-JobHistory\uff09\u4ee5\u53ca\u4efb\u52a1\u7684\u5404\u79cd\u62e6\u622a\u5668\u5904\u7406\uff08\u5371\u9669\u8bed\u6cd5\u3001\u53d8\u91cf\u66ff\u6362\u3001\u53c2\u6570\u68c0\u67e5\uff09\u7b49\u6b65\u9aa4\uff0c\u5e76\u505a\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u7684\u5e76\u53d1\u63a7\u5236\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u51c6\u5907\u9636\u6bb5\uff1a\u4efb\u52a1\u5728Entrance\u88abScheduler\u6d88\u8d39\u8c03\u5ea6\u7ed9Orchestrator\u6a21\u5757\u8fdb\u884c\u4efb\u52a1\u7684\u7f16\u6392\u3001\u5e76\u5411LinkisMaster\u5b8c\u6210EngineConn\u7684\u7533\u8bf7\uff0c\u5728\u8fd9\u8fc7\u7a0b\u4e2d\u4f1a\u5bf9\u79df\u6237\u7684\u8d44\u6e90\u8fdb\u884c\u7ba1\u63a7\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c\u9636\u6bb5\uff1a\u4efb\u52a1\u4eceOrchestrator\u63d0\u4ea4\u7ed9EngineConn\u6267\u884c\uff0cEngineConn\u5177\u4f53\u63d0\u4ea4\u5e95\u5c42\u5f15\u64ce\u8fdb\u884c\u6267\u884c\uff0c\u5e76\u5b9e\u65f6\u5c06\u4efb\u52a1\u7684\u4fe1\u606f\u63a8\u9001\u7ed9\u8c03\u7528\u65b9\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u7ed3\u679c\u8fd4\u56de\u9636\u6bb5\uff1a\u5411\u8c03\u7528\u65b9\u8fd4\u56de\u7ed3\u679c\uff0c\u652f\u6301json\u548cio\u6d41\u8fd4\u56de\u7ed3\u679c\u96c6\nLinkis\u7684\u6574\u4f53\u4efb\u52a1\u6267\u884c\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,i.kt)("img",{alt:"arc",src:t(33613).Z,width:"1061",height:"517"}))),(0,i.kt)("h2",{id:"\u4e8c\u4efb\u52a1\u6267\u884c\u6d41\u7a0b\u4ecb\u7ecd"},"\u4e8c\u3001\u4efb\u52a1\u6267\u884c\u6d41\u7a0b\u4ecb\u7ecd"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u9996\u5148\u6211\u4eec\u5148\u5bf9OLAP\u578b\u4efb\u52a1\u7684\u5904\u7406\u6d41\u7a0b\u8fdb\u884c\u4e00\u4e2a\u7b80\u8981\u4ecb\u7ecd\uff0c\u4efb\u52a1\u6574\u4f53\u7684\u4e00\u4e2a\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,i.kt)("img",{alt:"flow",src:t(19821).Z,width:"1005",height:"467"})),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u6574\u4e2a\u4efb\u52a1\u6d89\u53ca\u5230\u4e86\u6240\u6709\u7684\u8ba1\u7b97\u6cbb\u7406\u7684\u6240\u6709\u670d\u52a1\uff0c\u4efb\u52a1\u901a\u8fc7Gateway\u8f6c\u53d1\u5230Linkis\u7684\u4eba\u53e3\u670d\u52a1Entrance\u540e\uff0c\u4f1a\u901a\u8fc7\u5bf9\u4efb\u52a1\u7684\u6807\u7b7e\u8fdb\u884c\u591a\u7ea7\u8c03\u5ea6\uff08\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f\uff09\u901a\u8fc7FIFO\u7684\u6a21\u5f0f\u5b8c\u6210\u4efb\u52a1\u7684\u8c03\u5ea6\u6267\u884c\uff0cEntrance\u63a5\u7740\u5c06\u4efb\u52a1\u63d0\u4ea4\u7ed9Orchestrator\u8fdb\u884c\u4efb\u52a1\u7f16\u6392\u548c\u63d0\u4ea4\uff0cOrchestrator\u4f1a\u5411LinkisMaster\u5b8c\u6210EC\u7684\u7533\u8bf7\uff0c\u5728\u8fd9\u8fc7\u7a0b\u4e2d\u4f1a\u901a\u8fc7\u4efb\u52a1\u7684Label\u8fdb\u884c\u8d44\u6e90\u7ba1\u63a7\u548c\u5f15\u64ce\u7248\u672c\u9009\u62e9\u7533\u8bf7\u4e0d\u540c\u7684EC\u3002\u63a5\u7740Orchestrator\u5c06\u7f16\u6392\u540e\u7684\u4efb\u52a1\u63d0\u4ea4\u7ed9EC\u8fdb\u884c\u6267\u884c\uff0cEC\u4f1a\u5c06job\u7684\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u8d44\u6e90\u4f7f\u7528\u7b49\u4fe1\u606f\u63a8\u52a8\u7ed9Entrance\u670d\u52a1\uff0c\u5e76\u63a8\u9001\u7ed9\u8c03\u7528\u65b9\u3002\u4e0b\u9762\u6211\u4eec\u57fa\u4e8e\u4e0a\u56fe\u548c\u7ed3\u5408\u4efb\u52a1\u7684\u56db\u4e2a\u9636\u6bb5\uff08\u63d0\u4ea4\u3001\u51c6\u5907\u3001\u6267\u884c\u3001\u8fd4\u56de\uff09\u5bf9\u4efb\u52a1\u7684\u6267\u884c\u6d41\u7a0b\u8fdb\u884c\u4e00\u4e2a\u7b80\u8981\u4ecb\u7ecd\u3002"),(0,i.kt)("h3",{id:"21-job\u63d0\u4ea4\u9636\u6bb5"},"2.1 Job\u63d0\u4ea4\u9636\u6bb5"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Job\u63d0\u4ea4\u9636\u6bb5Linkis\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u4efb\u52a1\uff1aSQL, Python, Shell, Scala, Java\u7b49\uff0c\u652f\u6301\u4e0d\u540c\u7684\u63d0\u4ea4\u63a5\u53e3\uff0c\u652f\u6301Restful/JDBC/Python/Shell\u7b49\u63d0\u4ea4\u63a5\u53e3\u3002\u63d0\u4ea4\u4efb\u52a1\u4e3b\u8981\u5305\u542b\u4efb\u52a1\u4ee3\u7801\u3001\u6807\u7b7e\u3001\u53c2\u6570\u7b49\u4fe1\u606f\u5373\u53ef\uff0c\u4e0b\u9762\u662f\u4e00\u4e2aRestFul\u7684\u793a\u4f8b\uff1a\n\u901a\u8fc7Restfu\u63a5\u53e3\u53d1\u8d77\u4e00\u4e2aSpark Sql\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON"},'    "method": "/api/rest_j/v1/entrance/submit",\n    "data": {\n  "executionContent": {\n    "code": "select * from table01",\n    "runType": "sql"\n  },\n  "params": {\n    "variable": {// task variable \n      "testvar": "hello"\n    },\n    "configuration": {\n      "runtime": {// task runtime params \n        "jdbc.url": "XX"\n      },\n      "startup": { // ec start up params \n        "spark.executor.cores": "4"\n      }\n    }\n  },\n  "source": { //task source information\n    "scriptPath": "file:///tmp/hadoop/test.sql"\n  },\n  "labels": {\n    "engineType": "spark-2.4.3",\n    "userCreator": "hadoop-IDE"\n  }\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u9996\u5148\u4f1a\u63d0\u4ea4\u7ed9Linkis\u7684\u7f51\u5173linkis-mg-gateway\u670d\u52a1\uff0cGateway\u4f1a\u901a\u8fc7\u4efb\u52a1\u4e2d\u662f\u5426\u5e26\u6709routeLabel\u6765\u8f6c\u53d1\u7ed9\u5bf9\u5e94\u7684Entrance\u670d\u52a1\uff0c\u5982\u679c\u6ca1\u6709RouteLabel\u5219\u968f\u673a\u8f6c\u53d1\u7ed9\u4e00\u4e2aEntrance\u670d\u52a1"),(0,i.kt)("li",{parentName:"ol"},"Entrance\u63a5\u53d7\u5230\u5bf9\u5e94\u7684Job\u540e\uff0c\u4f1a\u8c03\u7528PES\u4e2dJobHistory\u6a21\u5757\u7684RPC\u5bf9Job\u7684\u4fe1\u606f\u8fdb\u884c\u6301\u4e45\u5316\uff0c\u5e76\u5bf9\u53c2\u6570\u548c\u4ee3\u7801\u8fdb\u6027\u89e3\u6790\u5bf9\u81ea\u5b9a\u4e49\u53d8\u91cf\u8fdb\u884c\u66ff\u6362\uff0c\u5e76\u63d0\u4ea4\u7ed9\u8c03\u5ea6\u5668\uff08\u9ed8\u8ba4FIFO\u8c03\u5ea6\uff09\u8c03\u5ea6\u5668\u4f1a\u901a\u8fc7\u4efb\u52a1\u7684\u6807\u7b7e\u8fdb\u884c\u5206\u7ec4\uff0c\u6807\u7b7e\u4e0d\u540c\u7684\u4efb\u52a1\u4e92\u76f8\u4e0d\u5f71\u54cd\u8c03\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ol"},"Entrance\u5728\u901a\u8fc7FIFO\u8c03\u5ea6\u5668\u6d88\u8d39\u540e\u4f1a\u63d0\u4ea4\u7ed9Orchestrator\u8fdb\u884c\u7f16\u6392\u6267\u884c\uff0c\u5c31\u5b8c\u6210\u4e86\u4efb\u52a1\u7684\u63d0\u4ea4\u9636\u6bb5\n\u4e3b\u8981\u6d89\u53ca\u7684\u7c7b\u7b80\u5355\u8bf4\u660e\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EntranceRestfulApi: \u5165\u53e3\u670d\u52a1\u7684Controller\u7c7b\uff0c\u4efb\u52a1\u63d0\u4ea4\u3001\u72b6\u6001\u3001\u65e5\u5fd7\u3001\u7ed3\u679c\u3001job\u4fe1\u606f\u3001\u4efb\u52a1kill\u7b49\u64cd\u4f5c\nEntranceServer\uff1a\u4efb\u52a1\u7684\u63d0\u4ea4\u5165\u53e3\uff0c\u5b8c\u6210\u4efb\u52a1\u7684\u6301\u4e45\u5316\u3001\u4efb\u52a1\u62e6\u622a\u89e3\u6790\uff08EntranceInterceptors\uff09\u3001\u63d0\u4ea4\u7ed9\u8c03\u5ea6\u5668\nEntranceContext\uff1aEntrance\u7684\u4e0a\u4e0b\u6587\u6301\u6709\u7c7b\uff0c\u5305\u542b\u83b7\u53d6\u8c03\u5ea6\u5668\u3001\u4efb\u52a1\u89e3\u6790\u62e6\u622a\u5668\u3001logManager\u3001\u6301\u4e45\u5316\u3001listenBus\u7b49\u65b9\u6cd5\nFIFOScheduler\uff1a FIFO\u8c03\u5ea6\u5668\uff0c\u7528\u4e8e\u8c03\u5ea6\u4efb\u52a1\nEntranceExecutor\uff1a\u8c03\u5ea6\u7684\u6267\u884c\u5668\uff0c\u4efb\u52a1\u8c03\u5ea6\u540e\u4f1a\u63d0\u4ea4\u7ed9EntranceExecutor\u8fdb\u884c\u6267\u884c\nEntranceJob\uff1a\u8c03\u5ea6\u5668\u8c03\u5ea6\u7684job\u4efb\u52a1\uff0c\u901a\u8fc7EntranceParser\u89e3\u6790\u7528\u6237\u63d0\u4ea4\u7684JobRequest\u8fdb\u884c\u751f\u6210\u548cJobRequest\u4e00\u4e00\u5bf9\u5e94\n")),(0,i.kt)("p",null,"\u6b64\u65f6\u4efb\u52a1\u72b6\u6001\u4e3a\u6392\u961f\u72b6\u6001"),(0,i.kt)("h3",{id:"22-job\u51c6\u5907\u9636\u6bb5"},"2.2 Job\u51c6\u5907\u9636\u6bb5"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","Entrance\u7684\u8c03\u5ea6\u5668\uff0c\u4f1a\u6309\u7167Job\u4e2d\u7684Label\u751f\u6210\u4e0d\u540c\u7684\u6d88\u8d39\u5668\u53bb\u6d88\u8d39\u4efb\u52a1\uff0c\u4efb\u52a1\u88ab\u6d88\u8d39\u4fee\u6539\u72b6\u6001\u4e3aRunning\u65f6\u5f00\u59cb\u8fdb\u5165\u51c6\u5907\u72b6\u6001\uff0c\u5230\u5bf9\u5e94\u7684\u4efb\u52a1\u540e\u5c31\u662f\u4efb\u52a1\u7684\u51c6\u5907\u9636\u6bb5\u5f00\u59cb\u4e86\u3002\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u51e0\u4e2a\u670d\u52a1\uff1aEntrance\u3001LinkisMaster\u3001EnginepluginServer\u3001EngineConnManager\u3001EngineConn\uff0c\u4e0b\u9762\u5c06\u5bf9\u4ee5\u4e0b\u670d\u52a1\u8fdb\u884c\u5206\u5f00\u4ecb\u7ecd\u3002"),(0,i.kt)("h3",{id:"221-entrance\u6b65\u9aa4"},"2.2.1 Entrance\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6d88\u8d39\u5668\uff08FIFOUserConsumer\uff09\u901a\u8fc7\u5bf9\u5e94\u6807\u7b7e\u914d\u7f6e\u7684\u652f\u6301\u5e76\u53d1\u6570\u8fdb\u884c\u6d88\u8d39\u5c06\u4efb\u52a1\u6d88\u8d39\u8c03\u5ea6\u7ed9\u7f16\u6392\u5668\uff08Orchestrator\uff09\u8fdb\u884c\u6267\u884c"),(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u662fOrchestrator\u5bf9\u63d0\u4ea4\u7684\u4efb\u52a1\u8fdb\u884c\u7f16\u6392\uff0c\u5bf9\u4e8e\u666e\u901a\u7684hive\u548cSpark\u5355\u5f15\u64ce\u7684\u4efb\u52a1\u4e3b\u8981\u662f\u4efb\u52a1\u7684\u89e3\u6790\u3001label\u68c0\u67e5\u548c\u6821\u9a8c\uff0c\u5bf9\u4e8e\u591a\u6570\u636e\u6e90\u6df7\u7b97\u7684\u573a\u666f\u4f1a\u62c6\u5206\u4e0d\u540c\u7684\u4efb\u52a1\u63d0\u4ea4\u7ed9\u4e0d\u540c\u7684\u6570\u636e\u6e90\u8fdb\u884c\u6267\u884c\u7b49"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u51c6\u5907\u9636\u6bb5\uff0c\u7f16\u6392\u5668Orchestrator\u53e6\u5916\u4e00\u4e2a\u91cd\u8981\u7684\u4e8b\u60c5\u662f\u901a\u8fc7\u8bf7\u6c42LinkisMaster\u83b7\u53d6\u7528\u4e8e\u6267\u884c\u4efb\u52a1\u7684EngineConn\u3002\u5982\u679cLinkisMaster\u6709\u5bf9\u5e94\u7684EngineConn\u53ef\u4ee5\u590d\u7528\u5219\u76f4\u63a5\u8fd4\u56de\uff0c\u5982\u679c\u6ca1\u6709\u5219\u521b\u5efaEngineConn\u3002"),(0,i.kt)("li",{parentName:"ol"},"Orchestrator\u62ff\u5230\u4efb\u52a1\u540e\u63d0\u4ea4\u7ed9EngineConn\u8fdb\u884c\u6267\u884c\uff0c\u51c6\u5907\u9636\u6bb5\u7ed3\u675f\uff0c\u8fdb\u5165Job\u6267\u884c\u9636\u6bb5\n\u4e3b\u8981\u6d89\u53ca\u7684\u7c7b\u7b80\u5355\u8bf4\u660e\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## Entrance\nFIFOUserConsumer: \u8c03\u5ea6\u5668\u7684\u6d88\u8d39\u5668\uff0c\u4f1a\u6839\u636e\u6807\u7b7e\u751f\u6210\u4e0d\u540c\u7684\u6d88\u8d39\u5668\uff0c\u5982IDE-hadoop\u3001spark-2.4.3\u751f\u6210\u4e0d\u540c\u7684\u6d88\u8d39\u5668\u3002\u6d88\u8d39\u63d0\u4ea4\u7684\u4efb\u52a1\u3002\u5e76\u63a7\u5236\u540c\u65f6\u8fd0\u884c\u7684\u4efb\u52a1\u4e2a\u6570\uff0c\u901a\u8fc7\u5bf9\u5e94\u6807\u7b7e\u914d\u7f6e\u7684\u5e76\u53d1\u6570\uff1awds.linkis.rm.instance\nDefaultEntranceExecutor\uff1a\u4efb\u52a1\u6267\u884c\u7684\u5165\u53e3\uff0c\u53d1\u8d77\u7f16\u6392\u5668\u7684\u8c03\u7528\uff1acallExecute\nJobReq: \u7f16\u6392\u5668\u63a5\u53d7\u7684\u4efb\u52a1\u5bf9\u8c61\uff0c\u901a\u8fc7EntranceJob\u8f6c\u6362\u800c\u6765\uff0c\u4e3b\u8981\u5305\u62ec\u4ee3\u7801\u3001\u6807\u7b7e\u4fe1\u606f\u3001\u53c2\u6570\u7b49\nOrchestratorSession\uff1a\u7c7b\u4f3c\u4e8eSparkSession\uff0c\u662f\u7f16\u6392\u5668\u7684\u5165\u53e3\u3002\u6b63\u5e38\u5355\u4f8b\u3002\nOrchestration\uff1aJobReq\u88abOrchestratorSession\u7f16\u6392\u540e\u7684\u8fd4\u56de\u5bf9\u8c61\uff0c\u652f\u6301\u6267\u884c\u548c\u6253\u5370\u6267\u884c\u8ba1\u5212\u7b49\nOrchestrationFuture\uff1a Orchestration\u9009\u62e9\u5f02\u6b65\u6267\u884c\u7684\u8fd4\u56de\uff0c\u5305\u62eccancel\u3001waitForCompleted\u3001getResponse\u7b49\u5e38\u7528\u65b9\u6cd5\nOperation\uff1a\u7528\u4e8e\u6269\u5c55\u64cd\u4f5c\u4efb\u52a1\u7684\u63a5\u53e3\uff0c\u73b0\u5728\u5df2\u7ecf\u5b9e\u73b0\u4e86\u7528\u4e8e\u83b7\u53d6\u65e5\u5fd7\u7684LogOperation\u3001\u83b7\u53d6\u8fdb\u5ea6\u7684ProgressOperation\u7b49\n\n## Orchestrator\nCodeLogicalUnitExecTask: \u4ee3\u7801\u7c7b\u578b\u4efb\u52a1\u7684\u6267\u884c\u5165\u53e3\uff0c\u4efb\u52a1\u6700\u7ec8\u7f16\u6392\u8fd0\u884c\u540e\u4f1a\u8c03\u7528\u8be5\u7c7b\u7684execute\u65b9\u6cd5\uff0c\u9996\u5148\u4f1a\u5411LinkisMaster\u8bf7\u6c42EngineConn\u518d\u63d0\u4ea4\u6267\u884c\nDefaultCodeExecTaskExecutorManager\uff1a\u8d1f\u8d23\u7ba1\u63a7\u4ee3\u7801\u7c7b\u578b\u7684EngineConn\uff0c\u5305\u62ec\u8bf7\u6c42\u548c\u91ca\u653eEngineConn\nComputationEngineConnManager\uff1a\u8d1f\u8d23LinkisMaster\u8fdb\u884c\u5bf9\u63a5\uff0c\u8bf7\u6c42\u548c\u91ca\u653eENgineConn\n")),(0,i.kt)("h3",{id:"222-linkismaster\u6b65\u9aa4"},"2.2.2 LinkisMaster\u6b65\u9aa4\uff1a"),(0,i.kt)("p",null,"1.LinkisMaster\u63a5\u53d7\u5230Entrance\u670d\u52a1\u53d1\u51fa\u7684\u8bf7\u6c42EngineConn\u8bf7\u6c42\u8fdb\u884c\u5904\u7406\n2.\u5224\u65ad\u662f\u5426\u6709\u5bf9\u5e94Label\u53ef\u4ee5\u590d\u7528\u7684EngineConn\uff0c\u6709\u5219\u76f4\u63a5\u8fd4\u56de\n3.\u5982\u679c\u6ca1\u6709\u5219\u8fdb\u5165\u521b\u5efaEngineConn\u6d41\u7a0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9996\u5148\u901a\u8fc7Label\u9009\u62e9\u5408\u9002\u7684EngineConnManager\u670d\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u63a5\u7740\u901a\u8fc7\u8c03\u7528EnginePluginServer\u83b7\u53d6\u672c\u6b21\u8bf7\u6c42EngineConn\u7684\u8d44\u6e90\u7c7b\u578b\u548c\u8d44\u6e90\u4f7f\u7528\uff0c"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8d44\u6e90\u7c7b\u578b\u548c\u8d44\u6e90\uff0c\u5224\u65ad\u5bf9\u5e94\u7684Label\u662f\u5426\u8fd8\u6709\u8d44\u6e90\uff0c\u5982\u679c\u6709\u5219\u8fdb\u5165\u521b\u5efa\uff0c\u5426\u5219\u629b\u51fa\u91cd\u8bd5\u5f02\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u7b2c\u4e00\u6b65\u7684EngineConnManager\u542f\u52a8EngineConn"),(0,i.kt)("li",{parentName:"ul"},"\u7b49\u5f85EngineConn\u7a7a\u95f2\uff0c\u8fd4\u56de\u521b\u5efa\u7684EngineConn\uff0c\u5426\u5219\u5224\u65ad\u5f02\u5e38\u662f\u5426\u53ef\u4ee5\u91cd\u8bd5")),(0,i.kt)("p",null,"4.\u9501\u5b9a\u521b\u5efa\u7684EngineConn\u8fd4\u56de\u7ed9Entrance\uff0c\u6ce8\u610f\u8fd9\u91cc\u4e3a\u5f02\u6b65\u8bf7\u6c42Entrance\u53d1\u51faEC\u8bf7\u6c42\u540e\u4f1a\u63a5\u53d7\u5230\u5bf9\u5e94\u7684\u8bf7\u6c42ID\uff0cLinkisMaster\u8bf7\u6c42\u5b8c\u6bd5\u540e\u4e3b\u52a8\u901a\u8fc7\u7ed9\u5bf9\u5e94\u7684Entrance\u670d\u52a1"),(0,i.kt)("p",null,"\u4e3b\u8981\u6d89\u53ca\u7684\u7c7b\u7b80\u5355\u8bf4\u660e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## LinkisMaster\nEngineAskEngineService\uff1a LinkisMaster\u8d1f\u8d23\u5904\u7406\u5f15\u64ce\u8bf7\u6c42\u7684\u5904\u7406\u7c7b\uff0c\u4e3b\u8981\u903b\u8f91\u901a\u8fc7\u8c03\u7528EngineReuseService\u5224\u65ad\u662f\u5426\u6709EngineConn\u53ef\u4ee5\u590d\u7528\uff0c\u5426\u5219\u8c03\u7528EngineCreateService\u521b\u5efaEngineConn\nEngineCreateService\uff1a\u8d1f\u8d23\u521b\u5efaEngineConn\uff0c\u4e3b\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a\n\n\n## LinkisEnginePluginServer\nEngineConnLaunchService\uff1a\u63d0\u4f9bECM\u83b7\u53d6\u5bf9\u5e94\u5f15\u64ce\u7c7b\u578bEngineConn\u7684\u542f\u52a8\u4fe1\u606f\nEngineConnResourceFactoryService\uff1a\u63d0\u4f9b\u7ed9LinkisMaster\u83b7\u53d6\u5bf9\u5e94\u672c\u6b21\u4efb\u52a1\u6240\u9700\u8981\u542f\u52a8EngineConn\u9700\u8981\u7684\u8d44\u6e90\nEngineConnResourceService\uff1a \u8d1f\u8d23\u7ba1\u7406\u5f15\u64ce\u7269\u6599\uff0c\u5305\u62ec\u5237\u65b0\u548c\u5237\u65b0\u6240\u6709\n\n## EngineConnManager\nAbstractEngineConnLaunchService\uff1a\u8d1f\u8d23\u542f\u52a8\u63a5\u53d7LinkisMaster\u8bf7\u6c42\u542f\u52a8EngineConn\u7684\u8bf7\u6c42\uff0c\u5e76\u5b8c\u6210EngineConn\u5f15\u64ce\u7684\u542f\u52a8\nECMHook\uff1a \u7528\u4e8e\u5904\u7406EngineConn\u542f\u52a8\u524d\u540e\u7684\u524d\u7f6e\u540e\u7f6e\u64cd\u4f5c\uff0c\u5982hive UDF Jar\u52a0\u5165\u5230EngineConn\u542f\u52a8\u7684classPath\u4e2d\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u8bf4\u660e\u7684\u662f\u5982\u679c\u7528\u6237\u5b58\u5728\u4e00\u4e2a\u53ef\u7528\u7a7a\u95f2\u7684\u5f15\u64ce\uff0c\u5219\u4f1a\u8df3\u8fc71\uff0c2\uff0c3\uff0c4 \u56db\u4e2a\u6b65\u9aa4\uff1b"),(0,i.kt)("h3",{id:"23-job\u6267\u884c\u9636\u6bb5"},"2.3 Job\u6267\u884c\u9636\u6bb5"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u5f53Entrance\u670d\u52a1\u4e2d\u7684\u7f16\u6392\u5668\u62ff\u5230EngineConn\u540e\u5c31\u8fdb\u5165\u4e86\u6267\u884c\u9636\u6bb5\uff0cCodeLogicalUnitExecTask\u4f1a\u5c06\u4efb\u52a1\u63d0\u4ea4\u7ed9EngineConn\u8fdb\u884c\u6267\u884c\uff0cEngineConn\u4f1a\u901a\u8fc7\u5bf9\u5e94\u7684CodeLanguageLabel\u521b\u5efa\u4e0d\u540c\u7684\u6267\u884c\u5668\u8fdb\u884c\u6267\u884c\u3002\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"CodeLogicalUnitExecTask\u901a\u8fc7RPC\u63d0\u4ea4\u4efb\u52a1\u7ed9\u5230EngineConn"),(0,i.kt)("li",{parentName:"ol"},"EngineConn\u5224\u65ad\u662f\u5426\u6709\u5bf9\u5e94\u7684CodeLanguageLabel\u7684\u6267\u884c\u5668\uff0c\u5982\u679c\u6ca1\u6709\u5219\u521b\u5efa"),(0,i.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u7ed9Executor\u8fdb\u884c\u6267\u884c\uff0c\u901a\u8fc7\u94fe\u63a5\u5230\u5177\u4f53\u5e95\u5c42\u7684\u5f15\u64ce\u6267\u884c\u8fdb\u884c\u6267\u884c\uff0c\u5982Spark\u901a\u8fc7sparkSession\u63d0\u4ea4sql\u3001pyspark\u3001scala\u4efb\u52a1"),(0,i.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u72b6\u6001\u6d41\u8f6c\u5b9e\u65f6\u63a8\u9001\u7ed9Entrance\u670d\u52a1"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5b9e\u73b0log4jAppender\uff0cSendAppender\u901a\u8fc7RPC\u5c06\u65e5\u5fd7\u63a8\u9001\u7ed9Entrance\u670d\u52a1"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5b9a\u65f6\u4efb\u52a1\u5b9e\u65f6\u63a8\u9001\u4efb\u52a1\u8fdb\u5ea6\u548c\u8d44\u6e90\u4fe1\u606f\u7ed9\u5230Entrance")),(0,i.kt)("p",null,"\u4e3b\u8981\u6d89\u53ca\u7684\u7c7b\u7b80\u5355\u8bf4\u660e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ComputationTaskExecutionReceiver\uff1aEntrance\u670d\u52a1\u7aef\u7f16\u6392\u5668\u7528\u4e8e\u63a5\u6536EngineConn\u6240\u6709RPC\u8bf7\u6c42\u7684\u670d\u52a1\u7c7b\uff0c\u8d1f\u8d23\u63a5\u6536\u8fdb\u5ea6\u3001\u65e5\u5fd7\u3001\u72b6\u6001\u3001\u7ed3\u679c\u96c6\u5728\u901a\u8fc7ListenerBus\u7684\u6a21\u5f0f\u63a8\u9001\u7ed9\u4e0a\u6b21\u8c03\u7528\u65b9\nTaskExecutionServiceImpl\uff1aEngineConn\u63a5\u6536Entrance\u6240\u6709RPC\u8bf7\u6c42\u7684\u670d\u52a1\u7c7b\uff0c\u5305\u62ec\u4efb\u52a1\u6267\u884c\u3001\u72b6\u6001\u67e5\u8be2\u3001\u4efb\u52a1Kill\u7b49\nComputationExecutor\uff1a\u5177\u4f53\u7684\u4efb\u52a1\u6267\u884c\u7236\u7c7b\uff0c\u6bd4\u5982Spark\u5206\u4e3aSQL/Python/Scala Executor\nComputationExecutorHook: \u7528\u4e8eExecutor\u521b\u5efa\u524d\u540e\u7684Hook\uff0c\u6bd4\u5982\u521d\u59cb\u5316UDF\u3001\u6267\u884c\u9ed8\u8ba4\u7684UseDB\u7b49\nEngineConnSyncListener: ResultSetListener/TaskProgressListener/TaskStatusListener \u7528\u4e8e\u76d1\u542cExecutor\u6267\u884c\u4efb\u52a1\u8fc7\u7a0b\u4e2d\u7684\u8fdb\u5ea6\u3001\u7ed3\u679c\u96c6\u3001\u548c\u8fdb\u5ea6\u7b49\u4fe1\u606f\nSendAppender\uff1a \u8d1f\u8d23\u63a8\u9001EngineConn\u7aef\u7684\u65e5\u5fd7\u7ed9\u5230Entrance\n")),(0,i.kt)("h3",{id:"24-job\u7ed3\u679c\u63a8\u9001\u9636\u6bb5"},"2.4 Job\u7ed3\u679c\u63a8\u9001\u9636\u6bb5"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u8be5\u9636\u6bb5\u6bd4\u8f83\u7b80\u5355\uff0c\u4e3b\u8981\u7528\u4e8e\u5c06\u4efb\u52a1\u5728EngineConn\u4ea7\u751f\u7684\u7ed3\u679c\u96c6\u8fd4\u56de\u7ed9Client\uff0c\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u5728EngineConn\u6267\u884c\u4efb\u52a1\u8fc7\u7a0b\u4e2d\u4f1a\u8fdb\u884c\u7ed3\u679c\u96c6\u5199\u5165\uff0c\u5199\u5165\u5230\u6587\u4ef6\u7cfb\u7edf\u4e2d\u83b7\u53d6\u5230\u5bf9\u5e94\u8def\u5f84\u3002\u5f53\u7136\u4e5f\u652f\u6301\u5185\u5b58\u7f13\u5b58\uff0c\u9ed8\u8ba4\u5199\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"EngineConn\u5c06\u5bf9\u5e94\u7684\u7ed3\u679c\u96c6\u8def\u5f84\u548c\u7ed3\u679c\u96c6\u4e2a\u6570\u8fd4\u56de\u7ed9Entrance"),(0,i.kt)("li",{parentName:"ol"},"Entrance\u8c03\u7528JobHistory\u5c06\u7ed3\u679c\u96c6\u8def\u5f84\u4fe1\u606f\u66f4\u65b0\u5230\u4efb\u52a1\u8868\u4e2d"),(0,i.kt)("li",{parentName:"ol"},"Client\u901a\u8fc7\u4efb\u52a1\u4fe1\u606f\u83b7\u53d6\u5230\u7ed3\u679c\u96c6\u8def\u5f84\u5e76\u8bfb\u53d6\u7ed3\u679c\u96c6\n\u4e3b\u8981\u6d89\u53ca\u7684\u7c7b\u7b80\u5355\u8bf4\u660e\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EngineExecutionContext:\u8d1f\u8d23\u521b\u5efa\u7ed3\u679c\u96c6\u548c\u63a8\u9001\u7ed3\u679c\u96c6\u7ed9\u5230Entrance\u670d\u52a1\nResultSetWriter\uff1a\u8d1f\u8d23\u5199\u7ed3\u679c\u96c6\u5230\u6587\u4ef6\u7cfb\u7edf\u4e2d\u652f\u6301linkis-storage\u652f\u6301\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u73b0\u5728\u4ee5\u53ca\u652f\u6301\u672c\u5730\u548cHDFS\u3002\u652f\u6301\u7684\u7ed3\u679c\u96c6\u7c7b\u578b\uff0c\u8868\u683c\u3001\u6587\u672c\u3001HTML\u3001\u56fe\u7247\u7b49\nJobHistory\uff1a\u5b58\u50a8\u6709\u4efb\u52a1\u7684\u6240\u6709\u4fe1\u606f\u5305\u62ec\u72b6\u6001\u3001\u7ed3\u679c\u8def\u5f84\u3001\u6307\u6807\u4fe1\u606f\u7b49\u5bf9\u5e94DB\u4e2d\u7684\u5b9e\u4f53\u7c7b\nResultSetReader\uff1a\u8bfb\u53d6\u7ed3\u679c\u96c6\u7684\u5173\u952e\u7c7b\n")),(0,i.kt)("h2",{id:"\u4e09\u603b\u7ed3"},"\u4e09\u3001\u603b\u7ed3"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u4e0a\u9762\u6211\u4eec\u4e3b\u8981\u4ecb\u7ecd\u4e86Linkis\u8ba1\u7b97\u6cbb\u7406\u670d\u52a1\u7ec4CGS\u7684OLAP\u4efb\u52a1\u7684\u6574\u4e2a\u6267\u884c\u6d41\u7a0b\uff0c\u6309\u7167\u4efb\u52a1\u8bf7\u6c42\u7684\u5904\u7406\u8fc7\u7a0b\u5bf9\u4efb\u52a1\u62c6\u5206\u6210\u4e86\u63d0\u4ea4\u3001\u51c6\u5907\u3001\u6267\u884c\u3001\u8fd4\u56de\u7ed3\u679c\u56db\u4e2a\u9636\u6bb5\u3002CGS\u4e3b\u8981\u5c31\u662f\u9075\u5faa\u8fd94\u4e2a\u9636\u6bb5\u6765\u8bbe\u8ba1\u5b9e\u73b0\u7684\uff0c\u670d\u52a1\u4e8e\u8fd94\u4e2a\u9636\u6bb5\uff0c\u4e14\u4e3a\u6bcf\u4e2a\u9636\u6bb5\u63d0\u4f9b\u4e86\u5f3a\u5927\u548c\u7075\u6d3b\u7684\u80fd\u529b\u3002\u5728\u63d0\u4ea4\u9636\u6bb5\uff0c\u4e3b\u8981\u63d0\u4f9b\u901a\u7528\u7684\u63a5\u53e3\uff0c\u63a5\u6536\u4e0a\u5c42\u5e94\u7528\u5de5\u5177\u63d0\u4ea4\u8fc7\u6765\u7684\u4efb\u52a1\uff0c\u5e76\u80fd\u63d0\u4f9b\u57fa\u7840\u7684\u89e3\u6790\u548c\u62e6\u622a\u80fd\u529b\uff1b\u5728\u51c6\u5907\u9636\u6bb5\uff0c\u4e3b\u8981\u901a\u8fc7\u7f16\u6392\u5668Orchestrator\u548cLinkisMaster\u5b8c\u6210\u5bf9\u4efb\u52a1\u7684\u89e3\u6790\u7f16\u6392\uff0c\u5e76\u4e14\u505a\u8d44\u6e90\u63a7\u5236\u548c\u5b8c\u6210EngineConn\u7684\u521b\u5efa\uff1b\u6267\u884c\u9636\u6bb5\uff0c\u901a\u8fc7\u5f15\u64ce\u8fde\u63a5\u5668EngineConn\u6765\u53bb\u5b9e\u9645\u5b8c\u6210\u548c\u5e95\u5c42\u5f15\u64ce\u7684\u5bf9\u63a5\uff0c\u901a\u5e38\u6bcf\u4e2a\u7528\u6237\u8981\u8fde\u63a5\u4e0d\u540c\u7684\u5e95\u5c42\u5f15\u64ce\uff0c\u5c31\u5f97\u5148\u542f\u52a8\u4e00\u4e2a\u5bf9\u5e94\u7684\u5e95\u5c42\u5f15\u64ce\u8fde\u63a5\u5668EC\u3002\u8ba1\u7b97\u4efb\u52a1\u901a\u8fc7EC\u6765\u63d0\u4ea4\u7ed9\u5e95\u5c42\u5f15\u64ce\u505a\u5b9e\u9645\u7684\u6267\u884c\u548c\u72b6\u6001\u3001\u65e5\u5fd7\u3001\u7ed3\u679c\u7b49\u4fe1\u606f\u7684\u83b7\u53d6\uff0c\u53ca\u5728\u7ed3\u679c\u8fd4\u56de\u9636\u6bb5\uff0c\u8fd4\u56de\u4efb\u52a1\u6267\u884c\u7684\u7ed3\u679c\u4fe1\u606f\uff0c\u652f\u6301\u6309\u7167\u591a\u79cd\u8fd4\u56de\u6a21\u5f0f\uff0c\u5982\uff1a\u6587\u4ef6\u6d41\u3001JSON\u3001JDBC\u7b49\u3002\u6574\u4f53\u7684\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"time",src:t(49367).Z,width:"1353",height:"948"})))}p.isMDXComponent=!0},33613:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/linkis_job_arc-53d75e433b76ba786432f5a63391d5e7.png"},19821:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/linkis_job_flow-1fb921406a0fe0fee71654be709c89f2.png"},49367:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/linkis_job_time-27dc29c05dd07903e9a96e7ed9ae4f67.png"}}]);