"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1369],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=k(n),u=l,c=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49299:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return s},default:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],p={title:"\u5feb\u901f\u90e8\u7f72",sidebar_position:1},o=void 0,k={unversionedId:"deployment/quick_deploy",id:"deployment/quick_deploy",title:"\u5feb\u901f\u90e8\u7f72",description:"1. \u6ce8\u610f\u4e8b\u9879",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/quick_deploy.md",sourceDirName:"deployment",slug:"/deployment/quick_deploy",permalink:"/zh-CN/docs/1.1.0/deployment/quick_deploy",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/quick_deploy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5feb\u901f\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linkis \u7b80\u8ff0",permalink:"/zh-CN/docs/1.1.0/introduction"},next:{title:"\u5206\u5e03\u5f0f\u90e8\u7f72",permalink:"/zh-CN/docs/1.1.0/deployment/cluster_deployment"}},s=[{value:"1. \u6ce8\u610f\u4e8b\u9879",id:"1-\u6ce8\u610f\u4e8b\u9879",children:[],level:2},{value:"2. \u786e\u5b9a\u60a8\u7684\u5b89\u88c5\u73af\u5883",id:"2-\u786e\u5b9a\u60a8\u7684\u5b89\u88c5\u73af\u5883",children:[],level:2},{value:"3. Linkis\u73af\u5883\u51c6\u5907",id:"3-linkis\u73af\u5883\u51c6\u5907",children:[{value:"3.1 \u57fa\u7840\u8f6f\u4ef6\u5b89\u88c5",id:"31-\u57fa\u7840\u8f6f\u4ef6\u5b89\u88c5",children:[],level:3},{value:"3.2 \u521b\u5efa\u7528\u6237",id:"32-\u521b\u5efa\u7528\u6237",children:[],level:3},{value:"3.3 \u5b89\u88c5\u5305\u51c6\u5907",id:"33-\u5b89\u88c5\u5305\u51c6\u5907",children:[],level:3},{value:"3.4 \u4e0d\u4f9d\u8d56HDFS\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539",id:"34-\u4e0d\u4f9d\u8d56hdfs\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539",children:[],level:3},{value:"e. \u4f9d\u8d56HDFS/Hive/Spark\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539",id:"e-\u4f9d\u8d56hdfshivespark\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539",children:[],level:3},{value:"3.5 \u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e",id:"35-\u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e",children:[],level:3}],level:2},{value:"4. \u5b89\u88c5\u548c\u542f\u52a8",id:"4-\u5b89\u88c5\u548c\u542f\u52a8",children:[{value:"4.1 \u6267\u884c\u5b89\u88c5\u811a\u672c\uff1a",id:"41-\u6267\u884c\u5b89\u88c5\u811a\u672c",children:[],level:3},{value:"4.2 \u5b89\u88c5\u6b65\u9aa4",id:"42-\u5b89\u88c5\u6b65\u9aa4",children:[],level:3},{value:"4.3 \u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a",id:"43-\u662f\u5426\u5b89\u88c5\u6210\u529f",children:[],level:3},{value:'<font color="red"> 4.4 \u6dfb\u52a0mysql\u9a71\u52a8\u5305</font>',id:"-44-\u6dfb\u52a0mysql\u9a71\u52a8\u5305",children:[],level:3},{value:"4.5 \u5feb\u901f\u542f\u52a8Linkis",id:"45-\u5feb\u901f\u542f\u52a8linkis",children:[{value:"(1)\u3001\u542f\u52a8\u670d\u52a1\uff1a",id:"1\u542f\u52a8\u670d\u52a1",children:[],level:4},{value:"(2)\u3001\u67e5\u770b\u662f\u5426\u542f\u52a8\u6210\u529f",id:"2\u67e5\u770b\u662f\u5426\u542f\u52a8\u6210\u529f",children:[],level:4},{value:"(3)\u3001\u67e5\u770b\u670d\u52a1\u662f\u5426\u6b63\u5e38",id:"3\u67e5\u770b\u670d\u52a1\u662f\u5426\u6b63\u5e38",children:[],level:4}],level:3}],level:2}],d={toc:s};function m(t){var e=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u6ce8\u610f\u4e8b\u9879"},"1. \u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("font",{color:"red"},"\u56e0\u4e3amysql-connector-java\u9a71\u52a8\u662fGPL2.0\u534f\u8bae\uff0c\u4e0d\u6ee1\u8db3Apache\u5f00\u6e90\u534f\u8bae\u5173\u4e8elicense\u7684\u653f\u7b56\uff0c\u56e0\u6b64\u4ece1.0.3\u7248\u672c\u5f00\u59cb\uff0c\u63d0\u4f9b\u7684Apache\u7248\u672c\u5b98\u65b9\u90e8\u7f72\u5305\uff0c\u9ed8\u8ba4\u662f\u6ca1\u6709mysql-connector-java-x.x.x.jar\u7684\u4f9d\u8d56\u5305\uff0c\u5b89\u88c5\u90e8\u7f72\u65f6\u9700\u8981\u6dfb\u52a0\u4f9d\u8d56\u5230\u5bf9\u5e94\u7684lib\u5305\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u9996\u6b21\u63a5\u89e6\u5e76\u4f7f\u7528Linkis\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u8be5\u7ae0\u8282\uff1b\u5982\u679c\u60a8\u5df2\u7ecf\u662f Linkis \u7684\u4f7f\u7528\u7528\u6237\uff0c\u5b89\u88c5\u6216\u5347\u7ea7\u524d\u5efa\u8bae\u5148\u9605\u8bfb\uff1a",(0,r.kt)("a",{parentName:"strong",href:"/zh-CN/docs/1.1.0/architecture/difference_between_1.0_and_0.x"},"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0")),"\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff1a\u9664\u4e86 Linkis1.0 \u5b89\u88c5\u5305\u9ed8\u8ba4\u5df2\u7ecf\u5305\u542b\u7684\uff1aPython/Shell/Hive/Spark\u56db\u4e2aEngineConnPlugin\u4ee5\u5916\uff0c\u5982\u679c\u5927\u5bb6\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u5982 JDBC \u5f15\u64ce\u7b49\u7c7b\u578b\u7684\u5176\u4ed6\u5f15\u64ce\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.0/deployment/engine_conn_plugin_installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"Linkis1.0.3 \u9ed8\u8ba4\u5df2\u9002\u914d\u7684\u5f15\u64ce\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5f15\u64ce\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9002\u914d\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b98\u65b9\u5b89\u88c5\u5305\u662f\u5426\u5305\u542b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flink"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hive"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Spark"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0\u5df2\u9002\u914d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Presto"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1.0\u672a\u9002\u914d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1.0\u672a\u9002\u914d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Impala"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1.0\u672a\u9002\u914d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MLSQL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1.0\u672a\u9002\u914d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TiSpark"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1.0\u672a\u9002\u914d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u4e0d\u5305\u542b"))))),(0,r.kt)("h2",{id:"2-\u786e\u5b9a\u60a8\u7684\u5b89\u88c5\u73af\u5883"},"2. \u786e\u5b9a\u60a8\u7684\u5b89\u88c5\u73af\u5883"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7ed9\u51fa\u6bcf\u4e2a\u5f15\u64ce\u7684\u4f9d\u8d56\u4fe1\u606f\u5217\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5f15\u64ce\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f9d\u8d56\u73af\u5883"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7279\u6b8a\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Python\u73af\u5883"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u548c\u7ed3\u679c\u96c6\u5982\u679c\u914d\u7f6ehdfs://\u5219\u4f9d\u8d56HDFS\u73af\u5883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u65e0\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u548c\u7ed3\u679c\u96c6\u8def\u5f84\u5982\u679c\u914d\u7f6ehdfs://\u5219\u4f9d\u8d56HDFS\u73af\u5883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shell"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u65e0\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u548c\u7ed3\u679c\u96c6\u8def\u5f84\u5982\u679c\u914d\u7f6ehdfs://\u5219\u4f9d\u8d56HDFS\u73af\u5883")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hive"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56Hadoop\u548cHive\u73af\u5883"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Spark"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56Hadoop/Hive/Spark"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8981\u6c42\uff1a\u5b89\u88c5Linkis\u9700\u8981\u81f3\u5c113G\u5185\u5b58\u3002")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u6bcf\u4e2a\u5fae\u670d\u52a1JVM\u5806\u5185\u5b58\u4e3a512M\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_HEAP_SIZE"),"\u6765\u7edf\u4e00\u8c03\u6574\u6bcf\u4e2a\u5fae\u670d\u52a1\u7684\u5806\u5185\u5b58\uff0c\u5982\u679c\u60a8\u7684\u670d\u52a1\u5668\u8d44\u6e90\u8f83\u5c11\uff0c\u6211\u4eec\u5efa\u8bae\u4fee\u6539\u8be5\u53c2\u6570\u4e3a128M\u3002\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vim ${LINKIS_HOME}/deploy-config/linkis-env.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    # java application default jvm memory.\n    export SERVER_HEAP_SIZE="128M"\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-linkis\u73af\u5883\u51c6\u5907"},"3. Linkis\u73af\u5883\u51c6\u5907"),(0,r.kt)("h3",{id:"31-\u57fa\u7840\u8f6f\u4ef6\u5b89\u88c5"},"3.1 \u57fa\u7840\u8f6f\u4ef6\u5b89\u88c5"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u8f6f\u4ef6\u5fc5\u88c5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL (5.5+)\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://www.runoob.com/mysql/mysql-install.html"},"\u5982\u4f55\u5b89\u88c5MySQL")),(0,r.kt)("li",{parentName:"ul"},"JDK (1.8.0_141\u4ee5\u4e0a)\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://www.runoob.com/java/java-environment-setup.html"},"\u5982\u4f55\u5b89\u88c5JDK"))),(0,r.kt)("h3",{id:"32-\u521b\u5efa\u7528\u6237"},"3.2 \u521b\u5efa\u7528\u6237"),(0,r.kt)("p",null,"\u4f8b\u5982: ",(0,r.kt)("strong",{parentName:"p"},"\u90e8\u7f72\u7528\u6237\u662fhadoop\u8d26\u53f7")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u90e8\u7f72\u673a\u5668\u4e0a\u521b\u5efa\u90e8\u7f72\u7528\u6237\uff0c\u7528\u4e8e\u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    sudo useradd hadoop  \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u56e0\u4e3aLinkis\u7684\u670d\u52a1\u662f\u4ee5 sudo -u ${linux-user} \u65b9\u5f0f\u6765\u5207\u6362\u5f15\u64ce\uff0c\u4ece\u800c\u6267\u884c\u4f5c\u4e1a\uff0c\u6240\u4ee5\u90e8\u7f72\u7528\u6237\u9700\u8981\u6709 sudo \u6743\u9650\uff0c\u800c\u4e14\u662f\u514d\u5bc6\u7684\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vi /etc/sudoers\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"    hadoop  ALL=(ALL)       NOPASSWD: NOPASSWD: ALL\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u6bcf\u53f0\u5b89\u88c5\u8282\u70b9\u8bbe\u7f6e\u5982\u4e0b\u7684\u5168\u5c40\u73af\u5883\u53d8\u91cf\uff0c\u4ee5\u4fbfLinkis\u80fd\u6b63\u5e38\u4f7f\u7528Hadoop\u3001Hive\u548cSpark"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u5b89\u88c5\u7528\u6237\u7684.bash_rc\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vim /home/hadoop/.bash_rc ##\u4ee5\u90e8\u7f72\u7528\u6237Hadoop\u4e3a\u4f8b\n")),(0,r.kt)("p",null,"   \u4e0b\u65b9\u4e3a\u73af\u5883\u53d8\u91cf\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    #JDK\n    export JAVA_HOME=/nemo/jdk1.8.0_141\n\n    ##\u5982\u679c\u4e0d\u4f7f\u7528Hive\u3001Spark\u7b49\u5f15\u64ce\u4e14\u4e0d\u4f9d\u8d56Hadoop\uff0c\u5219\u4e0d\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\n    #HADOOP  \n    export HADOOP_HOME=/appcom/Install/hadoop\n    export HADOOP_CONF_DIR=/appcom/config/hadoop-config\n    #Hive\n    export HIVE_HOME=/appcom/Install/hive\n    export HIVE_CONF_DIR=/appcom/config/hive-config\n    #Spark\n    export SPARK_HOME=/appcom/Install/spark\n    export SPARK_CONF_DIR=/appcom/config/spark-config/\n    export PYSPARK_ALLOW_INSECURE_GATEWAY=1  # Pyspark\u5fc5\u987b\u52a0\u7684\u53c2\u6570\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5982\u679c\u60a8\u7684Pyspark\u548cPython\u60f3\u62e5\u6709\u753b\u56fe\u529f\u80fd\uff0c\u5219\u8fd8\u9700\u5728\u6240\u6709\u5b89\u88c5\u8282\u70b9\uff0c\u5b89\u88c5\u753b\u56fe\u6a21\u5757"),"\u3002\u547d\u4ee4\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    python -m pip install matplotlib\n")),(0,r.kt)("h3",{id:"33-\u5b89\u88c5\u5305\u51c6\u5907"},"3.3 \u5b89\u88c5\u5305\u51c6\u5907"),(0,r.kt)("p",null,"\u4eceLinkis\u5df2\u53d1\u5e03\u7684release\u4e2d\uff08",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/download/main"},"\u70b9\u51fb\u8fd9\u91cc\u8fdb\u5165\u4e0b\u8f7d\u9875\u9762"),"\uff09\uff0c\u4e0b\u8f7d\u6700\u65b0\u7684\u5b89\u88c5\u5305\u3002"),(0,r.kt)("p",null,"\u5148\u89e3\u538b\u5b89\u88c5\u5305\u5230\u5b89\u88c5\u76ee\u5f55\uff0c\u5e76\u5bf9\u89e3\u538b\u540e\u7684\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    #version >=1.0.3\n    tar -xvf  apache-linkis-x.x.x-incubating-bin.tar.gz\n")),(0,r.kt)("h3",{id:"34-\u4e0d\u4f9d\u8d56hdfs\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539"},"3.4 \u4e0d\u4f9d\u8d56HDFS\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vi deploy-config/linkis-env.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n    #SSH_PORT=22        #\u6307\u5b9aSSH\u7aef\u53e3\uff0c\u5982\u679c\u5355\u673a\u7248\u672c\u5b89\u88c5\u53ef\u4ee5\u4e0d\u914d\u7f6e\n    deployUser=hadoop      #\u6307\u5b9a\u90e8\u7f72\u7528\u6237\n    LINKIS_INSTALL_HOME=/appcom/Install/Linkis    # \u6307\u5b9a\u5b89\u88c5\u76ee\u5f55\n    WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop    # \u6307\u5b9a\u7528\u6237\u6839\u76ee\u5f55\uff0c\u4e00\u822c\u7528\u4e8e\u5b58\u50a8\u7528\u6237\u7684\u811a\u672c\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6\u7b49\uff0c\u662f\u7528\u6237\u7684\u5de5\u4f5c\u7a7a\u95f4\u3002\n    RESULT_SET_ROOT_PATH=file:///tmp/linkis   # \u7ed3\u679c\u96c6\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u5b58\u50a8Job\u7684\u7ed3\u679c\u96c6\u6587\u4ef6\n    ENGINECONN_ROOT_PATH=/appcom/tmp #\u5b58\u653eECP\u7684\u5b89\u88c5\u8def\u5f84\uff0c\u9700\u8981\u90e8\u7f72\u7528\u6237\u6709\u5199\u6743\u9650\u7684\u672c\u5730\u76ee\u5f55\n    ENTRANCE_CONFIG_LOG_PATH=file:///tmp/linkis/  #ENTRANCE\u7684\u65e5\u5fd7\u8def\u5f84\n    ## LDAP\u914d\u7f6e\uff0c\u9ed8\u8ba4Linkis\u53ea\u652f\u6301\u90e8\u7f72\u7528\u6237\u767b\u5f55\uff0c\u5982\u679c\u9700\u8981\u652f\u6301\u591a\u7528\u6237\u767b\u5f55\u53ef\u4ee5\u4f7f\u7528LDAP\uff0c\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u53c2\u6570\uff1a\n    #LDAP_URL=ldap://localhost:1389/ \n    #LDAP_BASEDN=dc=webank,dc=com\n")),(0,r.kt)("h3",{id:"e-\u4f9d\u8d56hdfshivespark\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539"},"e. \u4f9d\u8d56HDFS/Hive/Spark\u7684\u57fa\u7840\u914d\u7f6e\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"     vi deploy-config/linkis-env.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    SSH_PORT=22        #\u6307\u5b9aSSH\u7aef\u53e3\uff0c\u5982\u679c\u5355\u673a\u7248\u672c\u5b89\u88c5\u53ef\u4ee5\u4e0d\u914d\u7f6e\n    deployUser=hadoop      #\u6307\u5b9a\u90e8\u7f72\u7528\u6237\n    WORKSPACE_USER_ROOT_PATH=file:///tmp/hadoop    # \u6307\u5b9a\u7528\u6237\u6839\u76ee\u5f55\uff0c\u4e00\u822c\u7528\u4e8e\u5b58\u50a8\u7528\u6237\u7684\u811a\u672c\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6\u7b49\uff0c\u662f\u7528\u6237\u7684\u5de5\u4f5c\u7a7a\u95f4\u3002\n    RESULT_SET_ROOT_PATH=hdfs:///tmp/linkis   # \u7ed3\u679c\u96c6\u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u5b58\u50a8Job\u7684\u7ed3\u679c\u96c6\u6587\u4ef6\n    ENGINECONN_ROOT_PATH=/appcom/tmp #\u5b58\u653eECP\u7684\u5b89\u88c5\u8def\u5f84\uff0c\u9700\u8981\u90e8\u7f72\u7528\u6237\u6709\u5199\u6743\u9650\u7684\u672c\u5730\u76ee\u5f55\n    ENTRANCE_CONFIG_LOG_PATH=hdfs:///tmp/linkis/  #ENTRANCE\u7684\u65e5\u5fd7\u8def\u5f84\n\n    #\u56e0\u4e3a1.0\u652f\u6301\u591aYarn\u96c6\u7fa4\uff0c\u4f7f\u7528\u5230Yarn\u961f\u5217\u8d44\u6e90\u7684\u4e00\u5b9a\u9700\u8981\u914d\u7f6eYARN_RESTFUL_URL\n    YARN_RESTFUL_URL=http://127.0.0.1:8088  #Yarn\u7684ResourceManager\u7684\u5730\u5740\n\n    # \u5982\u679c\u60a8\u60f3\u914d\u5408Scriptis\u4e00\u8d77\u4f7f\u7528\uff0cCDH\u7248\u7684Hive\uff0c\u8fd8\u9700\u8981\u914d\u7f6e\u5982\u4e0b\u53c2\u6570\uff08\u793e\u533a\u7248Hive\u53ef\u5ffd\u7565\u8be5\u914d\u7f6e\uff09\n    HIVE_META_URL=jdbc://...   # HiveMeta\u5143\u6570\u636e\u5e93\u7684URL\n    HIVE_META_USER=   # HiveMeta\u5143\u6570\u636e\u5e93\u7684\u7528\u6237\n    HIVE_META_PASSWORD=    # HiveMeta\u5143\u6570\u636e\u5e93\u7684\u5bc6\u7801\n    \n    # \u914d\u7f6ehadoop/hive/spark\u7684\u914d\u7f6e\u76ee\u5f55 \n    HADOOP_CONF_DIR=/appcom/config/hadoop-config  #hadoop\u7684conf\u76ee\u5f55\n    HIVE_CONF_DIR=/appcom/config/hive-config   #hive\u7684conf\u76ee\u5f55\n    SPARK_CONF_DIR=/appcom/config/spark-config #spark\u7684conf\u76ee\u5f55\n\n    ## LDAP\u914d\u7f6e\uff0c\u9ed8\u8ba4Linkis\u53ea\u652f\u6301\u90e8\u7f72\u7528\u6237\u767b\u5f55\uff0c\u5982\u679c\u9700\u8981\u652f\u6301\u591a\u7528\u6237\u767b\u5f55\u53ef\u4ee5\u4f7f\u7528LDAP\uff0c\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u53c2\u6570\uff1a\n    #LDAP_URL=ldap://localhost:1389/ \n    #LDAP_BASEDN=\n    \n    ##\u5982\u679cspark\u4e0d\u662f2.4.3\u7684\u7248\u672c\u9700\u8981\u4fee\u6539\u53c2\u6570\uff1a\n    #SPARK_VERSION=3.1.1\n\n    ##\u5982\u679chive\u4e0d\u662f1.2.1\u7684\u7248\u672c\u9700\u8981\u4fee\u6539\u53c2\u6570\uff1a\n    #HIVE_VERSION=2.3.3\n")),(0,r.kt)("h3",{id:"35-\u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e"},"3.5 \u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vi deploy-config/db.sh \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n    # \u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u8fde\u63a5\u4fe1\u606f\n    # \u5305\u62ecIP\u5730\u5740\u3001\u6570\u636e\u5e93\u540d\u79f0\u3001\u7528\u6237\u540d\u3001\u7aef\u53e3\n    # \u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u7528\u6237\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u3001\u914d\u7f6e\u53c2\u6570\u3001UDF\u548c\u5c0f\u51fd\u6570\uff0c\u4ee5\u53ca\u63d0\u4f9bJobHistory\u7684\u5e95\u5c42\u5b58\u50a8\n    MYSQL_HOST=\n    MYSQL_PORT=\n    MYSQL_DB=\n    MYSQL_USER=\n    MYSQL_PASSWORD=\n")),(0,r.kt)("h2",{id:"4-\u5b89\u88c5\u548c\u542f\u52a8"},"4. \u5b89\u88c5\u548c\u542f\u52a8"),(0,r.kt)("h3",{id:"41-\u6267\u884c\u5b89\u88c5\u811a\u672c"},"4.1 \u6267\u884c\u5b89\u88c5\u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    sh bin/install.sh\n")),(0,r.kt)("h3",{id:"42-\u5b89\u88c5\u6b65\u9aa4"},"4.2 \u5b89\u88c5\u6b65\u9aa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"install.sh\u811a\u672c\u4f1a\u8be2\u95ee\u60a8\u662f\u5426\u9700\u8981\u521d\u59cb\u5316\u6570\u636e\u5e93\u5e76\u5bfc\u5165\u5143\u6570\u636e\u3002")),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u56e0\u4e3a\u62c5\u5fc3\u7528\u6237\u91cd\u590d\u6267\u884cinstall.sh\u811a\u672c\uff0c\u628a\u6570\u636e\u5e93\u4e2d\u7684\u7528\u6237\u6570\u636e\u6e05\u7a7a\uff0c\u6240\u4ee5\u5728install.sh\u6267\u884c\u65f6\uff0c\u4f1a\u8be2\u95ee\u7528\u6237\u662f\u5426\u9700\u8981\u521d\u59cb\u5316\u6570\u636e\u5e93\u5e76\u5bfc\u5165\u5143\u6570\u636e\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21\u5b89\u88c5"),"\u5fc5\u987b\u9009\u662f\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u662f\u5347\u7ea7\u5df2\u6709\u73af\u5883\u7684 Linkis0.X \u5230 Linkis1.0\uff0c\u8bf7\u4e0d\u8981\u76f4\u63a5\u9009\u662f\uff0c\u8bf7\u5148\u53c2\u8003 ",(0,r.kt)("a",{parentName:"strong",href:"/zh-CN/docs/1.1.0/upgrade/upgrade_from_0.X_to_1.0_guide"},"Linkis1.0\u5347\u7ea7\u6307\u5357")),"\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u662f\u5347\u7ea7\u5df2\u6709\u73af\u5883\u7684 Linkis0.X \u5230 Linkis1.0\uff0c\u8bf7\u4e0d\u8981\u76f4\u63a5\u9009\u662f\uff0c\u8bf7\u5148\u53c2\u8003 ",(0,r.kt)("a",{parentName:"strong",href:"/zh-CN/docs/1.1.0/upgrade/upgrade_from_0.X_to_1.0_guide"},"Linkis1.0\u5347\u7ea7\u6307\u5357")),"\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0",(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u662f\u5347\u7ea7\u5df2\u6709\u73af\u5883\u7684 Linkis0.X \u5230 Linkis1.0\uff0c\u8bf7\u4e0d\u8981\u76f4\u63a5\u9009\u662f\uff0c\u8bf7\u5148\u53c2\u8003 ",(0,r.kt)("a",{parentName:"strong",href:"/zh-CN/docs/1.1.0/upgrade/upgrade_from_0.X_to_1.0_guide"},"Linkis1.0\u5347\u7ea7\u6307\u5357")),"\u3002"),(0,r.kt)("h3",{id:"43-\u662f\u5426\u5b89\u88c5\u6210\u529f"},"4.3 \u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u901a\u8fc7\u67e5\u770b\u63a7\u5236\u53f0\u6253\u5370\u7684\u65e5\u5fd7\u4fe1\u606f\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5982\u679c\u6709\u9519\u8bef\u4fe1\u606f\uff0c\u53ef\u4ee5\u67e5\u770b\u5177\u4f53\u62a5\u9519\u539f\u56e0\u3002"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.qq.com/doc/DSGZhdnpMV3lTUUxq"},"\u5e38\u89c1\u95ee\u9898"),"\uff0c\u83b7\u53d6\u95ee\u9898\u7684\u89e3\u7b54\u3002"),(0,r.kt)("h3",{id:"-44-\u6dfb\u52a0mysql\u9a71\u52a8\u5305"},(0,r.kt)("font",{color:"red"}," 4.4 \u6dfb\u52a0mysql\u9a71\u52a8\u5305")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u56e0\u4e3amysql-connector-java\u9a71\u52a8\u662fGPL2.0\u534f\u8bae\uff0c\u4e0d\u6ee1\u8db3Apache\u5f00\u6e90\u534f\u8bae\u5173\u4e8elicense\u7684\u653f\u7b56\uff0c\u56e0\u6b64\u4ece1.0.3\u7248\u672c\u5f00\u59cb\uff0c\u63d0\u4f9b\u7684Apache\u7248\u672c\u5b98\u65b9\u90e8\u7f72\u5305\uff0c\u9ed8\u8ba4\u662f\u6ca1\u6709mysql-connector-java-x.x.x.jar\u7684\u4f9d\u8d56\u5305\uff0c\u5b89\u88c5\u90e8\u7f72\u65f6\u9700\u8981\u81ea\u884c\u6dfb\u52a0\u4f9d\u8d56\u5230\u5bf9\u5e94\u7684lib\u5305\u4e2d"))),(0,r.kt)("p",null,"\u4e0b\u8f7dmysql\u9a71\u52a8 \u4ee55.1.49\u7248\u672c\u4e3a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar"},"\u4e0b\u8f7d\u94fe\u63a5")," ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar"},"https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar")),(0,r.kt)("p",null,"\u62f7\u8d1dmysql \u9a71\u52a8\u5305\u81f3lib\u5305\u4e0b "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp mysql-connector-java-5.1.49.jar  {LINKIS_INSTALL_HOME}/lib/linkis-spring-cloud-services/linkis-mg-gateway/\ncp mysql-connector-java-5.1.49.jar  {LINKIS_INSTALL_HOME}/lib/linkis-commons/public-module/\n")),(0,r.kt)("h3",{id:"45-\u5feb\u901f\u542f\u52a8linkis"},"4.5 \u5feb\u901f\u542f\u52a8Linkis"),(0,r.kt)("h4",{id:"1\u542f\u52a8\u670d\u52a1"},"(1)\u3001\u542f\u52a8\u670d\u52a1\uff1a"),(0,r.kt)("p",null,"  \u5728\u5b89\u88c5\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8\u6240\u6709\u670d\u52a1\uff1a    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  sh sbin/linkis-start-all.sh\n")),(0,r.kt)("h4",{id:"2\u67e5\u770b\u662f\u5426\u542f\u52a8\u6210\u529f"},"(2)\u3001\u67e5\u770b\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,r.kt)("p",null,"  \u53ef\u4ee5\u5728Eureka\u754c\u9762\u67e5\u770b\u670d\u52a1\u542f\u52a8\u6210\u529f\u60c5\u51b5\uff0c\u67e5\u770b\u65b9\u6cd5\uff1a"),(0,r.kt)("p",null,"  \u4f7f\u7528http://${EUREKA_INSTALL_IP}:${EUREKA_PORT}, \u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\uff0c\u67e5\u770b\u670d\u52a1\u662f\u5426\u6ce8\u518c\u6210\u529f\u3002"),(0,r.kt)("p",null,"  \u5982\u679c\u60a8\u6ca1\u6709\u5728config.sh\u6307\u5b9aEUREKA_INSTALL_IP\u548cEUREKA_INSTALL_IP\uff0c\u5219HTTP\u5730\u5740\u4e3a\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:20303"},"http://127.0.0.1:20303")),(0,r.kt)("p",null,"  \u5982\u4e0b\u56fe\uff0c\u5982\u60a8\u7684Eureka\u4e3b\u9875\u51fa\u73b0\u4ee5\u4e0b\u5fae\u670d\u52a1\uff0c\u5219\u8868\u793a\u670d\u52a1\u90fd\u542f\u52a8\u6210\u529f\uff0c\u53ef\u4ee5\u6b63\u5e38\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u4e86\uff1a"),(0,r.kt)("p",null,"  \u9ed8\u8ba4\u4f1a\u542f\u52a88\u4e2aLinkis\u5fae\u670d\u52a1\uff0c\u5176\u4e2d\u56fe\u4e0blinkis-cg-engineconn\u670d\u52a1\u4e3a\u8fd0\u884c\u4efb\u52a1\u624d\u4f1a\u542f\u52a8"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkis1.0_Eureka",src:n(71662).Z,width:"1470",height:"505"})),(0,r.kt)("h4",{id:"3\u67e5\u770b\u670d\u52a1\u662f\u5426\u6b63\u5e38"},"(3)\u3001\u67e5\u770b\u670d\u52a1\u662f\u5426\u6b63\u5e38"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u542f\u52a8\u6210\u529f\u540e\u60a8\u53ef\u4ee5\u901a\u8fc7\uff0c\u5b89\u88c5\u524d\u7aef\u7ba1\u7406\u53f0\uff0c\u6765\u68c0\u9a8c\u670d\u52a1\u7684\u6b63\u5e38\u6027\uff0c",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.1.0/deployment/web_install"},"\u70b9\u51fb\u8df3\u8f6c\u7ba1\u7406\u53f0\u5b89\u88c5\u6587\u6863")," "),(0,r.kt)("li",{parentName:"ol"},"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7Linkis\u7528\u6237\u624b\u518c\u6765\u6d4b\u8bd5Linis\u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c\u4efb\u52a1\uff0c",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.1.0/user_guide/overview"},"\u70b9\u51fb\u8df3\u8f6c\u7528\u6237\u624b\u518c"))))}m.isMDXComponent=!0},71662:function(t,e,n){e.Z=n.p+"assets/images/Linkis1.0_combined_eureka-3d096175871c82b66a0a8baedfed2987.png"}}]);