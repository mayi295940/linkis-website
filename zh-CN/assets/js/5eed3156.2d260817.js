"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[88804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createContext({}),p=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},o=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),o=p(n),f=r,k=o["".concat(d,".").concat(f)]||o[f]||s[f]||a;return n?l.createElement(k,u(u({ref:t},c),{},{components:n})):l.createElement(k,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=o;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var p=2;p<a;p++)u[p]=n[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}o.displayName="MDXCreateElement"},21620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={title:"UDF \u7684\u4f7f\u7528",sidebar_position:9},u=void 0,i={unversionedId:"user-guide/control-panel/udf-function",id:"user-guide/control-panel/udf-function",title:"UDF \u7684\u4f7f\u7528",description:"1.UDF\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/udf-function.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/udf-function",permalink:"/zh-CN/docs/1.3.1/user-guide/control-panel/udf-function",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/udf-function.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"UDF \u7684\u4f7f\u7528",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u6570\u636e\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.1/user-guide/control-panel/basicdata-management"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.3.1/engine-usage/overview"}},d={},p=[{value:"1.UDF\u7b80\u4ecb",id:"1udf\u7b80\u4ecb",level:2},{value:"1.1 UDF \u51fd\u6570\u5b9e\u73b0",id:"11-udf-\u51fd\u6570\u5b9e\u73b0",level:3},{value:"1.2 UDF \u7684\u51e0\u79cd\u7c7b\u578b",id:"12-udf-\u7684\u51e0\u79cd\u7c7b\u578b",level:3},{value:"2.UDF\u589e\u5220\u6539",id:"2udf\u589e\u5220\u6539",level:2},{value:"2.1 UDF\u65b0\u589e",id:"21-udf\u65b0\u589e",level:3},{value:"2.2 UDF\u4fee\u6539",id:"22-udf\u4fee\u6539",level:3},{value:"2.3 UDF\u5220\u9664",id:"23-udf\u5220\u9664",level:3},{value:"3.UDF\u4f7f\u7528",id:"3udf\u4f7f\u7528",level:2},{value:"4.UDF\u5171\u4eab",id:"4udf\u5171\u4eab",level:2},{value:"5.\u5176\u4ed6\u529f\u80fd\u4ecb\u7ecd",id:"5\u5176\u4ed6\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"5.1 UDF\u79fb\u4ea4",id:"51-udf\u79fb\u4ea4",level:3},{value:"5.2 UDF\u8fc7\u671f",id:"52-udf\u8fc7\u671f",level:3},{value:"5.3 UDF\u7248\u672c\u5217\u8868",id:"53-udf\u7248\u672c\u5217\u8868",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1udf\u7b80\u4ecb"},"1.UDF\u7b80\u4ecb"),(0,r.kt)("p",null,"UDF\uff1aUser Defined Function\uff0c\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u67d0\u4e9b\u573a\u666f\u6211\u4eec\u9700\u8981\u4f7f\u7528hive\u7684\u51fd\u6570\u6765\u5904\u7406\u4e00\u4e9b\u6570\u636e\uff0c\u50cfcount()\uff0csum()\u8fd9\u4e9b\u51fd\u6570\u90fd\u662f\u5185\u7f6e\u7684\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u4f7f\u7528\u4e00\u4e9b\u6ca1\u6709\u81ea\u5e26\u7684\u51fd\u6570\u529f\u80fd\uff0c\u5219\u9700\u8981\u81ea\u5b9a\u4e49\u529f\u80fd\u51fd\u6570\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5199UDF\u6765\u5b8c\u6210\u3002"),(0,r.kt)("h3",{id:"11-udf-\u51fd\u6570\u5b9e\u73b0"},"1.1 UDF \u51fd\u6570\u5b9e\u73b0"),(0,r.kt)("p",null,"\u5b9e\u73b0\u4e00\u4e2aUDF\u7684\u65b9\u5f0f\u8f83\u4e3a\u7b80\u5355\uff1a\u53ea\u9700\u8981\u7ee7\u627fUDF\u7c7b\uff0c\u5e76\u91cd\u5199evaluate\u65b9\u6cd5\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public class HelloUDF extends UDF{\n        public String evaluate(String str){\n                try {\n                        return "Hello " + str;\n                } catch (Exception e) {\n                        // TODO: handle exception\n                        e.printStackTrace();\n                        return "ERROR";\n                }\n        }\n')),(0,r.kt)("h3",{id:"12-udf-\u7684\u51e0\u79cd\u7c7b\u578b"},"1.2 UDF \u7684\u51e0\u79cd\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UDF \u51fd\u6570(\u9700\u8981\u6ce8\u518c\u540e\u624d\u80fd\u4f7f\u7528):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u7528\u7c7b\u578b\u7684UDF\u51fd\u6570\uff1a\u6307Hive\u7684hql\u548cSpark\u7684sql\u90fd\u53ef\u4ee5\u7528\u7684UDF\u51fd\u6570\uff0c\u4e00\u822c\u7f16\u8bd1\u6210jar\u5305"),(0,r.kt)("li",{parentName:"ul"},"Spark\u7c7b\u578b\u7684UDF\u51fd\u6570\uff1aSpark\u4e13\u7528\u7684UDF\uff0c\u9700\u8981\u5148\u5efa\u7acb\u597d\u76f8\u5e94\u7684scala/python\u811a\u672c,\u901a\u8fc7scala\u6216python\u51fd\u6570\u6765\u6ce8\u518c\uff0c\u6ce8\u518c\u4e4b\u540e\u4e5f\u53ef\u4ee5\u5728sql\u4e2d\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u51fd\u6570 PythonUDF\u548cScalaUDF\u53ea\u80fd\u5728Spark\u5f15\u64ce\u4e2d\u4f7f\u7528"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"python\u51fd\u6570\uff0c\u57fa\u4e8epython\u7f16\u5199\u7684\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"scala \u51fd\u6570\uff0c\u57fa\u4e8escala\u7f16\u5199\u7684\u51fd\u6570")))),(0,r.kt)("h2",{id:"2udf\u589e\u5220\u6539"},"2.UDF\u589e\u5220\u6539"),(0,r.kt)("p",null,"\u70b9\u51fblinkis\u7ba1\u7406\u53f0:\u9996\u9875>>UDF\u7ba1\u7406\n",(0,r.kt)("img",{src:n(84479).Z,width:"1268",height:"575"})),(0,r.kt)("p",null,'\u8fdb\u5165\u6709"UDF\u7ba1\u7406"\u548c"\u51fd\u6570\u7ba1\u7406"\u4e24\u680f\uff0c\u5176\u4e2d\u5728\u51fd\u6570\u7ba1\u7406\u680f\u662f\u4e00\u822c\u7684\u65b9\u6cd5\u51fd\u6570\uff0c\u6bd4\u5982python\u548cscala\u51fd\u6570\uff0c\u8fd9\u79cd\u4e0d\u9700\u8981\u6ce8\u518c\u5373\u53ef\u5728\u811a\u672c\u91cc\u50cf\u666e\u901a\u51fd\u6570\u4e00\u6837\u4f7f\u7528,UDF\u5219\u9700\u8981\u6ce8\u518c\u540e\u624d\u80fd\u4f7f\u7528\u3002\n',(0,r.kt)("img",{src:n(64342).Z,width:"1266",height:"573"})),(0,r.kt)("h3",{id:"21-udf\u65b0\u589e"},"2.1 UDF\u65b0\u589e"),(0,r.kt)("p",null,"\u65b0\u589e\u901a\u7528\u7c7b\u578b\u7684UDF\u51fd\u6570:"),(0,r.kt)("p",null,"\u9700\u8981\u5148\u7f16\u8bd1\u597d\u76f8\u5e94\u7684Jar\u5305\uff0c\u5e76\u4e0a\u4f20\u81f3\u5bf9\u5e94\u7528\u6237\u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d(\u5982\u679c\u662f\u4f7f\u7528\u7684dss\u5168\u5bb6\u6876\uff0c\u53ef\u4ee5\u901a\u8fc7scriptis\u8fdb\u884c\u4e0a\u4f20\uff0c\u5982\u679c\u5355\u72ec\u81f3\u4f7f\u7528\u4e86linkis,\u9700\u8981\u624b\u52a8\u4e0a\u4f20\u81f3\u5bf9\u5e94\u7684\u76ee\u5f55)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(28919).Z,width:"468",height:"384"})),(0,r.kt)("p",null,"\u70b9\u51fb\u65b0\u589eUDF\u6309\u94ae\uff0c\u6709\u4e24\u79cd\u7c7b\u578b\u7684UDF\u53ef\u4ee5\u65b0\u589e\uff0c\u9009\u201c\u901a\u7528\u201d\u7c7b\u578b\u53ca\u4e3a\u901a\u8fc7jar\u5305\u65b9\u5f0f\u6ce8\u518c\uff0c\u6ce8\u518c\u683c\u5f0f\u9700\u8981\u5199UDF\u5b9e\u73b0\u7c7b\u7684\u5168\u9650\u5b9a\u7c7b\u540d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51008).Z,width:"468",height:"384"})),(0,r.kt)("p",null,"\u4f8b\u5982\u4e0b\u56fe UDFServiceImpl \u7684\u5168\u9650\u5b9a\u7c7b\u540d\u5c31\u662f\uff1aorg.apache.linkis.udf.service.impl.UDFServiceImpl"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31579).Z,width:"1285",height:"465"})),(0,r.kt)("p",null,"\u65b0\u589eSpark\u7c7b\u578b\u7684UDF\u51fd\u6570:"),(0,r.kt)("p",null,'\u5982\u679c\u662f\u9009\u62e9\u201cspark\u201d\u7c7b\u578b\uff0c\u5219\u9009\u62e9\u5b9a\u4e49\u597d\u7684scala\u6216python\u51fd\u6570\u6765\u6ce8\u518c\uff0c\u81ea\u5b9a\u4e49\u51fd\u6570\u9700\u8981\u5199 scala \u6216 python \u7c7b\u578b\u811a\u672c\u3002\u6ce8\u518c\u4e4b\u540e\u4e5f\u53ef\u4ee5\u5728sql\u4e2d\u4f7f\u7528\uff0c\u7c7b\u4f3c\uff1aselect hello("abc")\u3002'),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c\u65f6\u5e94\u8be5\u586b\u5199\u65b0\u5efa\u811a\u672c\u4e2d\u7684\u65b9\u6cd5\u540d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u65b0\u589eudf\u540e\u5bf9\u5e94\u7684jar\u5305\u6216\u8005\u811a\u672c\u5185\u5bb9\u4f1a\u4e0a\u4f20\u5230bml\u5b58\u50a8\u3002\u5982\u679c\u672c\u5730\u4fee\u6539\u4e86\u8d44\u6e90\u9700\u8981\u66f4\u65b0\u540e\u624d\u80fd\u751f\u6548\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66098).Z,width:"468",height:"384"})),(0,r.kt)("h3",{id:"22-udf\u4fee\u6539"},"2.2 UDF\u4fee\u6539"),(0,r.kt)("p",null,"\u70b9\u51fb\u5bf9\u5e94udf\u7684\u7f16\u8f91\u6309\u94ae\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50909).Z,width:"1253",height:"566"})),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u66f4\u65b0udf\u7684\u5185\u5bb9\uff0c\u5219\u9700\u8981\u7f16\u8f91\u8be5udf\u91cd\u65b0\u4e0a\u4f20\uff0c\u5e76\u5bf9\u8be5udf\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u7248\u672c\u3002\u5982\u679c\u811a\u672c\u5185\u5bb9\u6ca1\u6709\u6539\u53d8\uff0c\u800c\u53ea\u662f\u4fee\u6539\u4e86\u5176\u4ed6\u5185\u5bb9\u5982\uff1a\u4f7f\u7528\u683c\u5f0f\uff0c\u5219\u53ea\u66f4\u65b0\u4fe1\u606f\uff0c\u4e0d\u4f1a\u751f\u6210\u65b0\u7684\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41837).Z,width:"1253",height:"566"})),(0,r.kt)("h3",{id:"23-udf\u5220\u9664"},"2.3 UDF\u5220\u9664"),(0,r.kt)("p",null,"\u70b9\u51fb\u5bf9\u5e94udf\u7684\u5220\u9664\u6309\u94ae\u5373\u53ef\uff0c\u6ce8\u610f\uff1a\u4f1a\u5220\u9664\u8be5udf\u7684\u6240\u6709\u7248\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(11932).Z,width:"1257",height:"557"})),(0,r.kt)("h2",{id:"3udf\u4f7f\u7528"},"3.UDF\u4f7f\u7528"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u4f60\u521b\u5efa\u7684UDF\u751f\u6548\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff0c\u5219\u9700\u8981\u52a0\u8f7d\u8be5UDF\u3002\u201c\u52a0\u8f7d\u201d/\u201c\u53d6\u6d88\u52a0\u8f7d\u201d\u7684\u5165\u53e3\u5904\u4e3a\uff1a\u8fdb\u5165scriptis\u5de6\u4fa7UDF\u51fd\u6570->\u4e2a\u4eba\u51fd\u6570\uff0c\u521b\u5efa\u7684UDF\u5747\u5728\u4e2a\u4eba\u51fd\u6570\u5217\u8868\u5904\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce81\uff1a\u65b0\u589eUDF\u65f6\u5982\u679c\u6ca1\u6709\u5728\u9875\u9762\u4e0a\u4e3b\u52a8\u53d6\u6d88\u52fe\u9009\uff0c\u5219\u4f1a\u9ed8\u8ba4\u52fe\u9009\u52a0\u8f7d\u3002\u6b64\u65f6\u9700\u8981kill\u6389\u5bf9\u5e94\u5f15\u64ce\u4f7f\u4e4b\u65b0\u8d77\u4e00\u4e2a\u5f15\u64ce\uff0c\u64cd\u4f5c\u624d\u4f1a\u751f\u6548\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce82\uff1a\u52a0\u8f7d/\u53d6\u6d88\u52a0\u8f7dudf\u7684\u64cd\u4f5c\uff0c\u9700\u8981kill\u6389\u5bf9\u5e94\u5f15\u64ce\u4f7f\u4e4b\u65b0\u8d77\u4e00\u4e2a\u5f15\u64ce\uff0c\u64cd\u4f5c\u624d\u4f1a\u751f\u6548\u3002")),(0,r.kt)("p",null,"\u5217\u8868\u4e2d\u975e\u4e2a\u4eba\u51fd\u6570\u4ecb\u7ecd\uff1a"),(0,r.kt)("p",null,"BDAP\u51fd\u6570\uff1a\u7531bdap\u521b\u5efa\u7684\u7ed9\u7528\u6237\u4f7f\u7528\u7684\u51fd\u6570\uff0c\u5982\u8131\u654f\u51fd\u6570\u7b49\u3002\u6ce8\uff1abdap\u51fd\u6570\u9700\u8981\u4e3b\u52a8\u52a0\u8f7d\u624d\u80fd\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u7cfb\u7edf\u51fd\u6570\uff1a\u7cfb\u7edf\u9ed8\u8ba4\u7684\u81ea\u5e26\u51fd\u6570\uff0c\u4e0d\u9700\u8981\u7528\u6237\u81ea\u5df1\u52a0\u8f7d\u5c31\u80fd\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5171\u4eab\u51fd\u6570\uff1a\u5176\u4ed6\u4eba\u5171\u4eab\u7ed9\u4f60\u7684\u51fd\u6570\uff0c\u4f60\u9700\u8981\u52a0\u8f7d\u5b83\u5c31\u80fd\u4f7f\u7528"),(0,r.kt)("p",null,"\u8fc7\u671f\u51fd\u6570\uff1a\u4e5f\u662f\u5171\u4eab\u51fd\u6570\uff0c\u53ea\u4e0d\u8fc7\u5171\u4eab\u8005\u6807\u8bb0\u4e86\u5b83\u4e3a\u8fc7\u671f\uff0c\u6682\u4e0d\u5f71\u54cd\u4f7f\u7528"),(0,r.kt)("h2",{id:"4udf\u5171\u4eab"},"4.UDF\u5171\u4eab"),(0,r.kt)("p",null,"\u524d\u63d0\uff1a\u5171\u4eab\u529f\u80fd\u9700\u8981\u7528\u6237\u4e3a\u7ba1\u7406\u5458\u624d\u80fd\u4f7f\u7528\uff0c\u5426\u5219\u524d\u7aef\u9875\u9762\u4e0d\u4f1a\u63d0\u4f9b\u64cd\u4f5c\u5165\u53e3\u3002"),(0,r.kt)("p",null,"\u70b9\u51fbudf\u7684\u5171\u4eab\u6309\u94ae\uff1a\u4f1a\u5f39\u51fa\u5185\u5bb9\u6846\uff0c\u8f93\u5165\u4f60\u60f3\u8981\u5171\u4eab\u7684\u7528\u6237\u5217\u8868\uff08\u9017\u53f7\u5206\u9694\uff09\u3002"),(0,r.kt)("p",null,"\u6ce8\uff1a\u5171\u4eab\u7ed9\u4ed6\u4eba\u540e\u9700\u8981\u4ed6\u4eba\u4e3b\u52a8\u52a0\u8f7d\u8be5UDF\u624d\u80fd\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5171\u4eab\u4e4b\u540e\uff0c\u88ab\u5171\u4eab\u7528\u6237\u53ef\u4ee5\u5728\u201c\u5171\u4eab\u51fd\u6570\u201d\u4e2d\u627e\u5230\uff0c\u52fe\u9009\u52a0\u8f7d\u5373\u53ef\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"5\u5176\u4ed6\u529f\u80fd\u4ecb\u7ecd"},"5.\u5176\u4ed6\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"51-udf\u79fb\u4ea4"},"5.1 UDF\u79fb\u4ea4"),(0,r.kt)("p",null,"\u5982\u7528\u6237\u79bb\u804c\u65f6\u53ef\u80fd\u9700\u8981\u79fb\u4ea4\u4e2a\u4ebaudf\u7ed9\u4ed6\u4eba\u3002\u70b9\u51fb\u79fb\u4ea4\u6309\u94ae\uff0c\u9009\u62e9\u4f60\u7684\u79fb\u4ea4\u5bf9\u8c61\uff0c\u70b9\u51fb\u786e\u5b9a\u3002"),(0,r.kt)("h3",{id:"52-udf\u8fc7\u671f"},"5.2 UDF\u8fc7\u671f"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5171\u4eab\u7ed9\u4ed6\u4eba\u7684UDF\uff0c\u5982\u679c\u5df2\u7ecf\u88ab\u5171\u4eab\u7528\u6237\u6240\u52a0\u8f7d\uff0c\u5219\u4e0d\u80fd\u76f4\u63a5\u5220\u9664\u8be5udf\uff0c\u53ea\u80fd\u6807\u8bb0\u8be5udf\u4e3a\u8fc7\u671f\u3002\u6682\u65f6\u53ea\u4f5c\u6807\u8bb0\u4f5c\u7528\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"53-udf\u7248\u672c\u5217\u8868"},"5.3 UDF\u7248\u672c\u5217\u8868"),(0,r.kt)("p",null,"\u70b9\u51fb\u67d0udf\u7684\u201c\u7248\u672c\u5217\u8868\u201d\u6309\u94ae\uff0c\u53ef\u4ee5\u67e5\u770b\u8be5udf\u7684\u6240\u6709\u7248\u672c\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u7248\u672c\u63d0\u4f9b\u5982\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("p",null,"\u521b\u5efa\u65b0\u7248\u672c\uff1a\u5c06\u5bf9\u5e94\u7248\u672c\u62f7\u8d1d\u4e00\u4efd\u81f3\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u4e0b\u8f7d\uff1a\u5c06udf\u6587\u4ef6\u4ecebml\u4e0b\u8f7d\u81f3\u672c\u5730\u3002"),(0,r.kt)("p",null,"\u67e5\u770b\u6e90\u7801\uff1a\u5bf9\u4e8epython/scala\u811a\u672c\u7c7b\u578b\u5219\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u6e90\u7801\uff0cjar\u7c7b\u578b\u4e0d\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u53d1\u5e03\uff1a\u5171\u4eabudf\u53ef\u4ee5\u5bf9\u5176\u70b9\u51fb\u53d1\u5e03\u67d0\u4e2a\u7248\u672c\uff0c\u4f7f\u8be5\u7248\u672c\u5bf9\u88ab\u5171\u4eab\u7528\u6237\u751f\u6548\u3002\u6ce8\uff1a\u88ab\u5171\u4eab\u7528\u6237\u4f7f\u7528\u7684\u662fudf\u5df2\u53d1\u5e03\u7684\u6700\u65b0\u7248\u672c\uff0c\u4e2a\u4eba\u7528\u6237\u4f7f\u7528\u7684\u59cb\u7ec8\u662f\u6700\u65b0\u7248\u672c\u3002"))}s.isMDXComponent=!0},31579:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf-cllass-90d57ed7337f001d4cfed693a29e8e16.png"},84479:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_01-213afa51d799fb2b606d7cd8bcbf1da4.png"},64342:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_02-c19ed2ebb926d5d33dd3444e22bbcee7.png"},51008:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_03-c157bf8ac43579c02bd63d6ed4d8ea25.png"},66098:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_04-c157bf8ac43579c02bd63d6ed4d8ea25.png"},50909:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_05-f378f9cf353295a96cfe0e514863e224.png"},41837:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_06-f378f9cf353295a96cfe0e514863e224.png"},11932:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_07-d112e549ddce84db6fb70c9da6ed44fa.png"},28919:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/udf_09-51edbb1e326e617c3485db02a801aa2a.png"}}]);