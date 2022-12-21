"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[68440],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),k=a,s=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(s,i(i({ref:e},m),{},{components:n})):r.createElement(s,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71711:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5f15\u64ce\u7269\u6599\u7ba1\u7406",authors:["aiceflower"],tags:["bml","linki1.3.1"]},i="\u603b\u89c8",o={permalink:"/zh-CN/blog/2022/12/02/material-manage",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-12-02-material-manage/index.md",title:"\u5f15\u64ce\u7269\u6599\u7ba1\u7406",description:"\u80cc\u666f",date:"2022-12-02T00:00:00.000Z",formattedDate:"2022\u5e7412\u67082\u65e5",tags:[{label:"bml",permalink:"/zh-CN/blog/tags/bml"},{label:"linki1.3.1",permalink:"/zh-CN/blog/tags/linki-1-3-1"}],readingTime:4.175,hasTruncateMarker:!1,authors:[{name:"aiceflower",title:"\u5fae\u4f17\u94f6\u884c\u5f00\u53d1\u5de5\u7a0b\u5e08",url:"https://github.com/aiceflower/",imageURL:"https://avatars.githubusercontent.com/u/22620332?s=400&v=4",key:"aiceflower"}],frontMatter:{title:"\u5f15\u64ce\u7269\u6599\u7ba1\u7406",authors:["aiceflower"],tags:["bml","linki1.3.1"]},nextItem:{title:"Linkis 1.3.0 PES(Public Enhancement Services) \u670d\u52a1\u7ec4\u5185\u90e8\u5206\u670d\u52a1\u7684\u5408\u5e76",permalink:"/zh-CN/blog/2022/10/09/linkis-service-merge"}},p={authorsImageUrls:[void 0]},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:2},{value:"\u67b6\u6784\u8bf4\u660e",id:"\u67b6\u6784\u8bf4\u660e",level:2},{value:"\u6838\u5fc3\u6d41\u7a0b",id:"\u6838\u5fc3\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u5e93\u8bbe\u8ba1",id:"\u6570\u636e\u5e93\u8bbe\u8ba1",level:2}],m={toc:u};function c(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"\u5f15\u64ce\u7269\u6599\u7ba1\u7406\u662flinkis\u5f15\u64ce\u7269\u6599\u7ba1\u7406\u7cfb\u7edf\uff0c\u4e3b\u8981\u7528\u6765\u7ba1\u7406Linkis\u7684\u5f15\u64ce\u7269\u6599\u6587\u4ef6\uff0c\u5b58\u50a8\u7528\u6237\u7684\u5404\u79cd\u5f15\u64ce\u6587\u4ef6\uff0c\u5305\u62ec\u5f15\u64ce\u7c7b\u578b\u3001\u5f15\u64ce\u7248\u672c\u7b49\u4fe1\u606f\u3002\u603b\u4f53\u6d41\u7a0b\u4e3a\u538b\u7f29\u6587\u4ef6\u7ecf\u524d\u7aef\u6d4f\u89c8\u5668\u4e0a\u4f20\u81f3\u7269\u6599\u5e93\uff08BML\uff09\uff0c\u7269\u6599\u538b\u7f29\u6587\u4ef6\u89e3\u538b\u3001\u6821\u9a8c\uff0c\u9700\u8981\u6267\u884c\u65f6\u5982\u679c\u53d1\u73b0\u672c\u5730\u4e0d\u5b58\u5728\u8be5\u5f15\u64ce\uff0c\u5219\u9700\u8981\u53bb\u7269\u6599\u5e93\u4e2d\u5bfb\u627e\u5e76\u4e0b\u8f7d\u5b89\u88c5\u6ce8\u518c\u4ece\u800c\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5177\u5907\u4ee5\u4e0b\u529f\u80fd\u70b9\uff1a"),(0,a.kt)("p",null,"1)\u3001\u652f\u6301\u4e0a\u4f20\u6253\u5305\u597d\u7684\u5f15\u64ce\u6587\u4ef6\uff0c\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u53d7nginx\u7684\u914d\u7f6e\u5f71\u54cd\uff0c\u6587\u4ef6\u7c7b\u578b\u4e3azip\u6587\u4ef6\u7c7b\u578b\uff0c\u5728windows\u73af\u5883\u4e0b\u81ea\u884c\u6253\u5305zip\u538b\u7f29\u6587\u4ef6\u4e0d\u652f\u6301\u3002"),(0,a.kt)("p",null,"2)\u3001\u652f\u6301\u5bf9\u5df2\u6709\u7684\u5f15\u64ce\u7269\u6599\u8fdb\u884c\u66f4\u65b0\uff0c\u66f4\u65b0\u540e\u5728BML\u4e2d\u65b0\u589e\u4e00\u4e2abml\u5f15\u64ce\u7269\u6599\u7684\u5b58\u50a8\u7248\u672c\uff0c\u53ef\u4ee5\u5bf9\u5f53\u524d\u7684\u7248\u672c\u8fdb\u884c\u56de\u6eda\u548c\u5220\u9664\u3002"),(0,a.kt)("p",null,"3)\u3001\u4e00\u4e2a\u5f15\u64ce\u6d89\u53ca\u4e24\u4e2a\u5f15\u64ce\u7269\u6599\uff0c\u5206\u522b\u662flib\u548cconf\uff0c\u53ef\u4ee5\u8fdb\u884c\u5206\u522b\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(16900).Z,width:"934",height:"924"})),(0,a.kt)("h2",{id:"\u67b6\u6784\u8bf4\u660e"},"\u67b6\u6784\u8bf4\u660e"),(0,a.kt)("p",null,"1\u3001\u5f15\u64ce\u7269\u6599\u7ba1\u7406\u5728Linkis web\u7ba1\u7406\u53f0\u4e2d\uff0c\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\uff0c\u5728\u5f00\u53d1\u8c03\u8bd5\u65f6\u9700\u8981\u8bbe\u7f6e\u6d4b\u8bd5\u73af\u5883\u4e0b\u7684\u7ba1\u7406\u5458\u5b57\u6bb5\u3002"),(0,a.kt)("p",null,"2\u3001\u5f15\u64ce\u7269\u6599\u7ba1\u7406\u6d89\u53ca\u5f15\u64ce\u7269\u6599\u6587\u4ef6\u7684\u589e\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff0c\u7269\u6599\u6587\u4ef6\u5206\u4e3alib\u548cconf\u5206\u522b\u5b58\u50a8\u3002\u6587\u4ef6\u4e2d\u6d89\u53ca\u4e24\u4e2a\u7248\u672c\u7684\u6982\u5ff5\uff0c\u4e00\u4e2a\u662f\u5f15\u64ce\u672c\u8eab\u7684\u7248\u672c\uff0c\u53e6\u4e00\u4e2a\u5219\u662f\u7269\u6599\u7248\u672c\uff0c\u5728\u66f4\u65b0\u64cd\u4f5c\u4e2d\u7269\u6599\u5982\u679c\u5b58\u5728\u4fee\u6539\u5219\u4f1a\u65b0\u589e\u4e00\u4e2a\u7269\u6599\u7248\u672c\u5e76\u5c06\u5176\u5b58\u50a8\u5728BML\u4e2d\uff0c\u652f\u6301\u7269\u6599\u7248\u672c\u7684\u5220\u9664\u548c\u56de\u6eda\u3002"),(0,a.kt)("p",null,"3\u3001\u5229\u7528BML Service\u5bf9\u5f15\u64ce\u7269\u6599\u6587\u4ef6\u8fdb\u884c\u5b58\u50a8\uff0c\u901a\u8fc7RPC\u8c03\u7528BML\u7684\u670d\u52a1\u5bf9\u6587\u4ef6\u8fdb\u884c\u5b58\u50a8\uff0c\u5f97\u5230\u5b58\u50a8\u7684\u8d44\u6e90id\u548c\u7248\u672c\u5e76\u4fdd\u5b58\u3002"),(0,a.kt)("h3",{id:"\u6838\u5fc3\u6d41\u7a0b"},"\u6838\u5fc3\u6d41\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0a\u4f20zip\u7c7b\u578b\u7684\u5f15\u64ce\u63d2\u4ef6\u6587\u4ef6\uff0c\u5148\u5b58\u50a8\u5728\u5f15\u64ce\u63d2\u4ef6Home\u76ee\u5f55\u4e2d\u5e76\u89e3\u538b\u6587\u4ef6\uff0c\u4e4b\u540e\u8fdb\u884c\u542f\u52a8\u5237\u65b0\u7a0b\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u89e3\u538b\u540e\u7684\u5f15\u64ce\u6587\u4ef6\u4e2d\u7684conf\u3001lib\u76ee\u5f55\u8fdb\u884c\u538b\u7f29\uff0c\u4e0a\u4f20\u81f3BML\uff08\u7269\u6599\u7ba1\u7406\u7cfb\u7edf\uff09\u4e2d\uff0c\u5206\u522b\u83b7\u53d6\u5bf9\u5e94\u7684BML\u7684\u8d44\u6e90id\u548c\u8d44\u6e90\u7248\u672c\uff0c\u8bfb\u53d6\u5bf9\u5e94\u5f15\u64ce\u540d\u79f0\u548c\u7248\u672c\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5f15\u64ce\u7269\u6599\u8d44\u6e90\u8868\u4e2d\uff0c\u65b0\u589e\u5f15\u64ce\u7269\u6599\u7684\u8bb0\u5f55\uff0c\u6bcf\u6b21\u4e0a\u4f20\u90fd\u4f1a\u5206\u522b\u4ea7\u751flib\u548cconf\u4e24\u6761\u6570\u636e\u3002\u9664\u4e86\u8bb0\u5f55\u8fd9\u4e2a\u5f15\u64ce\u7684\u540d\u79f0\u548c\u7c7b\u578b\u4fe1\u606f\u5916\uff0c\u6700\u91cd\u8981\u7684\u662f\u8bb0\u5f55\u4e86\u8be5\u5f15\u64ce\u5728\u7269\u6599\u7ba1\u7406\u7cfb\u7edf\u4e2d\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u5f15\u64ce\u7684\u8d44\u6e90id\u548c\u7248\u672c\u4fe1\u606f\uff0c\u5173\u8054\u81f3BML\u4e2d\u7684\u8d44\u6e90\u8868\u3002")),(0,a.kt)("h2",{id:"\u6570\u636e\u5e93\u8bbe\u8ba1"},"\u6570\u636e\u5e93\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u5f15\u64ce\u7269\u6599\u8d44\u6e90\u4fe1\u606f\u8868(linkis_cg_engine_conn_plugin_bml_resources)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7269\u6599\u5305\u6807\u8bc6id"),(0,a.kt)("td",{parentName:"tr",align:null},"Primary key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"engine_conn_type"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u653e\u8d44\u6e90\u7684\u4f4d\u7f6e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982Spark")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u7684\u7248\u672c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982Spark\u7684v2.4.3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"file_name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u6587\u4ef6\u540d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982lib.zip")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"file_size"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u6587\u4ef6\u5927\u5c0f"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"last_modified"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u6700\u540e\u7684\u4fee\u6539\u65f6\u95f4"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bml_resource_id"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8d44\u6e90\u5728BML\uff08\u7269\u6599\u7ba1\u7406\u7cfb\u7edf\uff09\u4e2d\u7684id"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5728BML\u4e2d\u6807\u8bc6\u5f15\u64ce\u6587\u4ef6\u7684id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bml_resource_version"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u8d44\u6e90\u5728BML\u4e2d\u7684\u7248\u672c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982v000001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"create_time"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u7684\u521b\u5efa\u65f6\u95f4"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"last_update_time"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6700\u540e\u7684\u66f4\u65b0\u65f6\u95f4"),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},16900:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/bml-94c1a3494a1d7b2321ad2c911c530901.jpg"}}]);