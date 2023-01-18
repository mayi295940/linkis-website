"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11290],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var k=a.createContext({}),o=function(n){var e=a.useContext(k),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=o(n.components);return a.createElement(k.Provider,{value:e},n.children)},g="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,k=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),g=o(t),u=i,d=g["".concat(k,".").concat(u)]||g[u]||c[u]||l;return t?a.createElement(d,r(r({ref:e},p),{},{components:t})):a.createElement(d,r({ref:e},p))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var k in e)hasOwnProperty.call(e,k)&&(s[k]=e[k]);s.originalType=n,s[g]="string"==typeof n?n:i,r[1]=s;for(var o=2;o<l;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58769:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>k,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const l={title:"\u5f00\u542f SkyWalking",sidebar_position:7},r=void 0,s={unversionedId:"deployment/involve-skywalking-into-linkis",id:"version-1.1.0/deployment/involve-skywalking-into-linkis",title:"\u5f00\u542f SkyWalking",description:"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u542f\u52a8 Linkis \u670d\u52a1\u7684\u65f6\u5019\u5f00\u542f SkyWalking\uff0c\u4ee5\u65b9\u4fbf\u540e\u7eed\u505a\u5206\u5e03\u5f0f trace \u548c troubleshooting\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/deployment/involve-skywalking-into-linkis.md",sourceDirName:"deployment",slug:"/deployment/involve-skywalking-into-linkis",permalink:"/zh-CN/docs/1.1.0/deployment/involve-skywalking-into-linkis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/deployment/involve-skywalking-into-linkis.md",tags:[],version:"1.1.0",sidebarPosition:7,frontMatter:{title:"\u5f00\u542f SkyWalking",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u7ba1\u7406\u53f0\u90e8\u7f72",permalink:"/zh-CN/docs/1.1.0/deployment/web-install"},next:{title:"\u6570\u636e\u6e90\u529f\u80fd\u4f7f\u7528",permalink:"/zh-CN/docs/1.1.0/deployment/start-metadatasource"}},k={},o=[{value:"1. SkyWalking \u4ecb\u7ecd",id:"1-skywalking-\u4ecb\u7ecd",level:2},{value:"1.1 SkyWalking \u662f\u4ec0\u4e48",id:"11-skywalking-\u662f\u4ec0\u4e48",level:3},{value:"1.2 SkyWalking \u67b6\u6784",id:"12-skywalking-\u67b6\u6784",level:3},{value:"2. \u90e8\u7f72 SkyWalking \u540e\u7aef",id:"2-\u90e8\u7f72-skywalking-\u540e\u7aef",level:2},{value:"3. Linkis \u670d\u52a1\u542f\u52a8\u5f00\u542f SkyWalking",id:"3-linkis-\u670d\u52a1\u542f\u52a8\u5f00\u542f-skywalking",level:2},{value:"4. \u7ed3\u679c\u5c55\u793a",id:"4-\u7ed3\u679c\u5c55\u793a",level:2}],p={toc:o};function g(n){let{components:e,...l}=n;return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u542f\u52a8 Linkis \u670d\u52a1\u7684\u65f6\u5019\u5f00\u542f SkyWalking\uff0c\u4ee5\u65b9\u4fbf\u540e\u7eed\u505a\u5206\u5e03\u5f0f trace \u548c troubleshooting\u3002"),(0,i.kt)("h2",{id:"1-skywalking-\u4ecb\u7ecd"},"1. SkyWalking \u4ecb\u7ecd"),(0,i.kt)("h3",{id:"11-skywalking-\u662f\u4ec0\u4e48"},"1.1 SkyWalking \u662f\u4ec0\u4e48"),(0,i.kt)("p",null,"SkyWalking \u662f\u5f00\u6e90\u7684\u53ef\u89c6\u5316\u5e73\u53f0\uff0c\u53ef\u4ee5\u4ece\u591a\u79cd\u6570\u636e\u6e90\u91c7\u96c6\u6570\u636e\uff0c\u5e76\u63d0\u4f9b\u5206\u6790\u3001\u805a\u5408\u4ee5\u53ca\u53ef\u89c6\u5316\u7b49\u529f\u80fd\u3002\u901a\u8fc7 SkyWalking\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u62d3\u6251\u7ed3\u6784\uff0c\u6570\u636e\u4ea4\u4e92\u6709\u4e00\u4e2a\u66f4\u52a0\u6e05\u6670\u7684\u89c6\u56fe\u3002"),(0,i.kt)("h3",{id:"12-skywalking-\u67b6\u6784"},"1.2 SkyWalking \u67b6\u6784"),(0,i.kt)("p",null,"\u4e0b\u56fe\u662f SkyWalking \u7684\u6574\u4f53\u67b6\u6784\u56fe\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(66909).Z,width:"1900",height:"850"})),(0,i.kt)("p",null,"\u4ece\u903b\u8f91\u4e0a\u53ef\u4ee5\u5212\u5206\u6210 4 \u4e2a\u90e8\u5206\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Probe"),"\uff1a\u53ef\u4ee5\u7406\u89e3\u4e3a\u6570\u636e\u91c7\u96c6 agent\uff0c\u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u91c7\u96c6\u548c\u683c\u5f0f\u5316\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Platform Backend"),"\uff1aSkyWalking \u7684\u540e\u7aef\u670d\u52a1\uff0c\u652f\u6301\u6570\u636e\u805a\u5408\u3001\u5206\u6790\u4ee5\u53ca\u6d41\u5f0f\u5904\u7406\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage"),"\uff1a\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\uff0c\u4ee5 plugin \u7684\u65b9\u5f0f\u652f\u6301\u591a\u79cd\u5b58\u50a8\u5f15\u64ce\uff0c\u6bd4\u5982 ElasticSearch, H2, MySQL, TiDB, InfluxDB \u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UI"),": \u6570\u636e\u53ef\u89c6\u5316\u3002")),(0,i.kt)("p",null,"\u5728 Linkis \u4e2d\u4f7f\u7528 SkyWalking\uff0c\u9700\u8981\u7528\u6237\u5df2\u7ecf\u5b58\u5728 Backend \u670d\u52a1\u4ee5\u53ca\u5bf9\u5e94\u7684 Storage\u3002Linkis \u670d\u52a1\u542f\u52a8\u7684\u65f6\u5019\u96c6\u6210 Probe \u5373\u53ef\u3002Probe \u96c6\u6210\u4e3b\u8981\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Language based native agent"),"\uff1a\u8fd9\u4e9b agent \u548c\u76ee\u6807\u670d\u52a1\u8fdb\u7a0b\u8fd0\u884c\u5728\u76f8\u540c\u7684\u7528\u6237\u7a7a\u95f4\uff0c\u4ece\u5916\u90e8\u6765\u770b\uff0cagent \u548c\u76ee\u6807\u670d\u52a1\u7684\u4ee3\u7801\u662f\u4e00\u6837\u7684\u3002\u4e00\u4e2a\u5178\u578b\u7684\u4f8b\u5b50\u662f Java agent\uff0c\u5728\u8fd0\u884c Java \u5e94\u7528\u7684\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"-javaagent")," \u6765\u6307\u5b9a agent\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service Mesh probes"),"\uff1a\u8fd9\u79cd Probe \u901a\u8fc7 sidecar \u6216\u8005 proxy \u6536\u96c6\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3rd-party intrument library"),"\uff1a\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u7b2c\u4e09\u65b9\u7684\u6570\u636e\uff0c\u6bd4\u5982 zipkin\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u5728 Linkis \u96c6\u6210 SkyWalking \u7684\u65f6\u5019\u91c7\u7528\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f java agent \u7684\u65b9\u5f0f\u3002\u4e0b\u9762\u6211\u4eec\u4e3a\u5927\u5bb6\u6f14\u793a\u4e00\u4e0b\u5982\u4f55\u5728 Linkis \u670d\u52a1\u4e2d\u5f00\u542f SkyWalking\u3002"),(0,i.kt)("h2",{id:"2-\u90e8\u7f72-skywalking-\u540e\u7aef"},"2. \u90e8\u7f72 SkyWalking \u540e\u7aef"),(0,i.kt)("p",null,"SkyWalking \u540e\u7aef\u662f\u5f00\u542f SkyWalk \u7684\u524d\u7f6e\u6761\u4ef6\uff0c\u4e0b\u9762\u5148\u7b80\u5355\u6f14\u793a\u4e0b\u5982\u4f55\u5b89\u88c5 SkyWalking \u7684\u540e\u7aef\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u4ece SkyWalking \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/downloads/"},"Downloads")," \u9875\u9762\u4e0b\u8f7d SkyWalking APM\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(61037).Z,width:"3206",height:"1596"})),(0,i.kt)("p",null,"\u4e0b\u8f7d\u5b8c\uff0c\u76f4\u63a5\u89e3\u538b\u5f97\u5230\u5982\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls\nbin  config  config-examples  LICENSE  licenses  logs  NOTICE  oap-libs  README.txt  tools  webapp\n")),(0,i.kt)("p",null,"\u540e\u7aef\u9ed8\u8ba4\u4f7f\u7528 H2 \u5185\u5b58\u6570\u636e\u5e93\u4f5c\u4e3a\u540e\u7aef\u5b58\u50a8\uff0c\u4e0d\u9700\u8981\u4fee\u6539\u914d\u7f6e\u3002\u6309\u5982\u4e0b\u65b9\u5f0f\u542f\u52a8\u3002"),(0,i.kt)("p",null,"\u542f\u52a8 Backend"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash bin/startup.sh\n")),(0,i.kt)("p",null,"\u542f\u52a8 WebApp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash bin/webappService.sh\n")),(0,i.kt)("p",null,"UI \u9ed8\u8ba4\u542f\u52a8\u5728 8080 \u7aef\u53e3\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 webapp \u76ee\u5f55\u4e0b\u7684 webapp.yml \u6587\u4ef6\u4fee\u6539\u76d1\u542c\u7aef\u53e3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 8080\n\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: oap-route\n          uri: lb://oap-service\n          predicates:\n            - Path=/graphql/**\n    discovery:\n      client:\n        simple:\n          instances:\n            oap-service:\n              - uri: http://127.0.0.1:12800\n            # - uri: http://<oap-host-1>:<oap-port1>\n            # - uri: http://<oap-host-2>:<oap-port2>\n\n  mvc:\n    throw-exception-if-no-handler-found: true\n\n  web:\n    resources:\n      add-mappings: true\n\nmanagement:\n  server:\n    base-path: /manage\n")),(0,i.kt)("h2",{id:"3-linkis-\u670d\u52a1\u542f\u52a8\u5f00\u542f-skywalking"},"3. Linkis \u670d\u52a1\u542f\u52a8\u5f00\u542f SkyWalking"),(0,i.kt)("p",null,"\u8fd9\u91cc\u5047\u5b9a\u5927\u5bb6\u5bf9 Linkis \u7684\u670d\u52a1\u90e8\u7f72\u5df2\u7ecf\u6bd4\u8f83\u6e05\u6670\uff0c\u5982\u679c\u8fd8\u4e0d\u6e05\u6670\uff0c\u53ef\u4ee5\u5f02\u6b65: "),(0,i.kt)("p",null,"\u5728 Linkis \u4e2d\u5f00\u542f SkyWalking \u9996\u5148\u9700\u8981\u4e0b\u8f7d SkyWalking \u7684 Java agent\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/downloads/"},"Downloads")," \u9875\u9762\u8fdb\u884c\u4e0b\u8f7d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(56935).Z,width:"3020",height:"1556"})),(0,i.kt)("p",null,"\u4e0b\u8f7d\u4e4b\u540e\u89e3\u538b\uff0c\u5185\u90e8\u7684\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree skywalking-agent                                   \n$ skywalking-agent\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 activations\n\u2502\xa0\xa0 \u251c\u2500\u2500 apm-toolkit-kafka-activation-8.8.0.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 bootstrap-plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 apm-jdk-http-plugin-8.8.0.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 apm-jdk-threading-plugin-8.8.0.jar\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 agent.config\n\u251c\u2500\u2500 licenses\n\u2502\xa0\xa0 \u2514\u2500\u2500 LICENSE-asm.txt\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 optional-plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 apm-customize-enhance-plugin-8.8.0.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 optional-reporter-plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 kafka-reporter-plugin-8.8.0.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 apm-activemq-5.x-plugin-8.8.0.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 ...\n\u2514\u2500\u2500 skywalking-agent.jar\n")),(0,i.kt)("p",null,"\u4fee\u6539 Linkis \u7684 deploy-config/linkis-env.sh \u4e2d\u7684\u914d\u7f6e\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"SKYWALKING_AGENT_PATH"),"\u3002\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"skywalking-agent.jar")," \u7684\u8def\u5f84\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SKYWALKING_AGENT_PATH=/path/to/skywalking-agent.jar\n")),(0,i.kt)("p",null,"\u7136\u540e\u542f\u52a8 Linkis \u5373\u53ef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash linkis-start-all.sh\n")),(0,i.kt)("h2",{id:"4-\u7ed3\u679c\u5c55\u793a"},"4. \u7ed3\u679c\u5c55\u793a"),(0,i.kt)("p",null,"Linkis \u7684 UI \u7aef\u53e3\u9ed8\u8ba4\u542f\u52a8\u5728 8080 \u7aef\u53e3\uff0cLinkis \u5f00\u542f SkyWalking \u4e4b\u540e\u6253\u5f00 UI \u5982\u679c\u80fd\u770b\u5230\u5982\u4e0b\u7684\u56fe\u5c31\u8868\u793a\u6210\u529f\u4e86\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u770b\u4e0d\u5230\u5c55\u793a\u6548\u679c,\u53ef\u80fd\u662f\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5c1d\u8bd5\u5207\u6362\u6d4f\u89c8\u5668\u8bd5\u8bd5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(19234).Z,width:"3830",height:"1732"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(64936).Z,width:"3816",height:"1694"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(61588).Z,width:"3832",height:"1608"})))}g.isMDXComponent=!0},61037:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_APM_Download-8d74253784919cf585ceaac291eb7ea4.png"},56935:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_Agent_Download-74a7666cd2ff6d33cfa8862ce341bc01.png"},66909:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_Architecture-24ff5ca3454b0bbd684f10e594af7378.png"},61588:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_Topology-9f1a2d3d9626efa5dc1c6f03edf52e32.png"},19234:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_UI_Dashboard-c7fdd2d1476e627e822105e72f53bf99.png"},64936:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/SkyWalking_UI_Dashboard2-e02aa14b783823a4839c991f59f16121.png"}}]);