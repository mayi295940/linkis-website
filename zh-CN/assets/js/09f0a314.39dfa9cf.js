"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[86223],{3905:(n,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>u});var l=i(67294);function a(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function t(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,l)}return i}function o(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach((function(e){a(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function r(n,e){if(null==n)return{};var i,l,a=function(n,e){if(null==n)return{};var i,l,a={},t=Object.keys(n);for(l=0;l<t.length;l++)i=t[l],e.indexOf(i)>=0||(a[i]=n[i]);return a}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(l=0;l<t.length;l++)i=t[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(a[i]=n[i])}return a}var s=l.createContext({}),c=function(n){var e=l.useContext(s),i=e;return n&&(i="function"==typeof n?n(e):o(o({},e),n)),i},p=function(n){var e=c(n.components);return l.createElement(s.Provider,{value:e},n.children)},d="mdxType",h={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(n,e){var i=n.components,a=n.mdxType,t=n.originalType,s=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),d=c(i),k=a,u=d["".concat(s,".").concat(k)]||d[k]||h[k]||t;return i?l.createElement(u,o(o({ref:e},p),{},{components:i})):l.createElement(u,o({ref:e},p))}));function u(n,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var t=i.length,o=new Array(t);o[0]=k;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[d]="string"==typeof n?n:a,o[1]=r;for(var c=2;c<t;c++)o[c]=i[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}k.displayName="MDXCreateElement"},73088:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var l=i(87462),a=(i(67294),i(3905));const t={title:"\u57fa\u4e8e CDH6.3.2 \u90e8\u7f72 Apache Linkis1.1.1 \u548c DSS1.1.0",authors:["kevinWdong"],tags:["blog","linki1.1.1","hadoop3.0.0-cdh6.3.2","spark2.4.8","hive2.1.1"]},o=void 0,r={permalink:"/zh-CN/blog/2022/09/27/linkis111-deploy",editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-09-27-linkis111-deploy/index.md",title:"\u57fa\u4e8e CDH6.3.2 \u90e8\u7f72 Apache Linkis1.1.1 \u548c DSS1.1.0",description:"\u524d\u8a00",date:"2022-09-27T00:00:00.000Z",formattedDate:"2022\u5e749\u670827\u65e5",tags:[{label:"blog",permalink:"/zh-CN/blog/tags/blog"},{label:"linki1.1.1",permalink:"/zh-CN/blog/tags/linki-1-1-1"},{label:"hadoop3.0.0-cdh6.3.2",permalink:"/zh-CN/blog/tags/hadoop-3-0-0-cdh-6-3-2"},{label:"spark2.4.8",permalink:"/zh-CN/blog/tags/spark-2-4-8"},{label:"hive2.1.1",permalink:"/zh-CN/blog/tags/hive-2-1-1"}],readingTime:6.375,hasTruncateMarker:!1,authors:[{name:"kevinWdong",title:"contributors",url:"https://github.com/kongslove",imageURL:"https://avatars.githubusercontent.com/u/42604208?v=4",key:"kevinWdong"}],frontMatter:{title:"\u57fa\u4e8e CDH6.3.2 \u90e8\u7f72 Apache Linkis1.1.1 \u548c DSS1.1.0",authors:["kevinWdong"],tags:["blog","linki1.1.1","hadoop3.0.0-cdh6.3.2","spark2.4.8","hive2.1.1"]},prevItem:{title:"Linkis 1.3.0 PES(Public Enhancement Services) \u670d\u52a1\u7ec4\u5185\u90e8\u5206\u670d\u52a1\u7684\u5408\u5e76",permalink:"/zh-CN/blog/2022/10/09/linkis-service-merge"},nextItem:{title:"Linkis1.1.1 \u9002\u914d hadoop3.1.1 \u4ee5\u53ca\u90e8\u7f72\u5176\u4ed6\u7cfb\u7edf\u670d\u52a1",permalink:"/zh-CN/blog/2022/08/08/linkis111-compile-integration"}},s={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u4e00\u3001\u73af\u5883",id:"\u4e00\u73af\u5883",level:2},{value:"CDH6.3.2 \u5404\u7ec4\u4ef6\u7248\u672c",id:"cdh632-\u5404\u7ec4\u4ef6\u7248\u672c",level:4},{value:"\u786c\u4ef6\u73af\u5883",id:"\u786c\u4ef6\u73af\u5883",level:4},{value:"\u4e8c\u3001Linkis\u5b89\u88c5\u90e8\u7f72",id:"\u4e8clinkis\u5b89\u88c5\u90e8\u7f72",level:2},{value:"2.1\u7f16\u8bd1\u4ee3\u7801or release\u5b89\u88c5\u5305\uff1f",id:"21\u7f16\u8bd1\u4ee3\u7801or-release\u5b89\u88c5\u5305",level:3},{value:"2.2\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898",id:"22\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898",level:3},{value:"\u4e09\u3001DSS\u90e8\u7f72",id:"\u4e09dss\u90e8\u7f72",level:2},{value:"3.1 DSS \u5de6\u4fa7\u6570\u636e\u5e93\u5c55\u793a\u7684\u6570\u636e\u5e93\u5217\u8868\u663e\u793a\u4e0d\u5168",id:"31-dss-\u5de6\u4fa7\u6570\u636e\u5e93\u5c55\u793a\u7684\u6570\u636e\u5e93\u5217\u8868\u663e\u793a\u4e0d\u5168",level:4},{value:"3.2 DSS \u5de5\u4f5c\u6d41\u4e2d\u6267\u884cjdbc\u811a\u672c\u62a5\u9519 jdbc.name is empty",id:"32-dss-\u5de5\u4f5c\u6d41\u4e2d\u6267\u884cjdbc\u811a\u672c\u62a5\u9519-jdbcname-is-empty",level:4}],p={toc:c};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,l.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u7684\u53d1\u5c55\u548c\u793e\u533a\u4ea7\u54c1\u7684\u66f4\u65b0\u8fed\u4ee3\uff0c\u6211\u4eec\u53d1\u73b0Linkis1.X\u5728\u8d44\u6e90\u7ba1\u7406\uff0c\u5f15\u64ce\u7ba1\u7406\u65b9\u9762\u6709\u6781\u5927\u7684\u6027\u80fd\u63d0\u5347\uff0c\u53ef\u4ee5\u66f4\u597d\u7684\u6ee1\u8db3\u6570\u636e\u4e2d\u53f0\u7684\u5efa\u8bbe\u3002\u76f8\u8f83\u4e8e0.9.3\u7248\u672c\u548c\u6211\u4eec\u4e4b\u524d\u4f7f\u7528\u7684\u5e73\u53f0\uff0c \u5728\u7528\u6237\u4f53\u9a8c\u65b9\u9762\u4e5f\u5f97\u5230\u5f88\u5927\u7684\u63d0\u5347\uff0c\u4efb\u52a1\u5931\u8d25\u9875\u9762\u65e0\u6cd5\u65b9\u4fbf\u67e5\u770b\u8be6\u60c5\u7b49\u95ee\u9898\u4e5f\u90fd\u5f97\u5230\u6539\u5584\uff0c\u56e0\u6b64\u51b3\u5b9a\u5347\u7ea7Linkis\u4ee5\u53caWDS\u5957\u4ef6\uff0c\u90a3\u4e48\u5982\u4e0b\u662f\u5177\u4f53\u7684\u5b9e\u8df5\u64cd\u4f5c\uff0c\u5e0c\u671b\u7ed9\u5927\u5bb6\u5e26\u6765\u53c2\u8003\u3002 "),(0,a.kt)("h2",{id:"\u4e00\u73af\u5883"},"\u4e00\u3001\u73af\u5883"),(0,a.kt)("h4",{id:"cdh632-\u5404\u7ec4\u4ef6\u7248\u672c"},"CDH6.3.2 \u5404\u7ec4\u4ef6\u7248\u672c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hadoop:3.0.0-cdh6.3.2"),(0,a.kt)("li",{parentName:"ul"},"hive:2.1.1-cdh6.3.2"),(0,a.kt)("li",{parentName:"ul"},"spark\uff1a2.4.8")),(0,a.kt)("h4",{id:"\u786c\u4ef6\u73af\u5883"},"\u786c\u4ef6\u73af\u5883"),(0,a.kt)("p",null,"2\u53f0 128G \u4e91\u7269\u7406\u673a"),(0,a.kt)("h2",{id:"\u4e8clinkis\u5b89\u88c5\u90e8\u7f72"},"\u4e8c\u3001Linkis\u5b89\u88c5\u90e8\u7f72"),(0,a.kt)("h3",{id:"21\u7f16\u8bd1\u4ee3\u7801or-release\u5b89\u88c5\u5305"},"2.1\u7f16\u8bd1\u4ee3\u7801or release\u5b89\u88c5\u5305\uff1f"),(0,a.kt)("p",null,"\u672c\u6b21\u5b89\u88c5\u90e8\u7f72\u91c7\u7528\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},"release\u5b89\u88c5\u5305"),"\u65b9\u5f0f\u90e8\u7f72\u3002\u4e3a\u4e86\u9002\u914d\u53f8\u5185CDH6.3.2\u7248\u672c\uff0chadoop\u548chive\u7684\u76f8\u5173\u4f9d\u8d56\u5305\u9700\u8981\u66ff\u6362\u6210CDH6.3.2\u7248\u672c\uff0c\u8fd9\u91cc\u91c7\u7528\u7684\u662f\u76f4\u63a5\u66ff\u6362\u5b89\u88c5\u5305\u7684\u65b9\u5f0f\u3002\u9700\u8981\u66ff\u6362\u7684\u4f9d\u8d56\u5305\u4e0e\u6a21\u5757\u5982\u4e0bl\u5217\u8868\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--\u6d89\u53ca\u5230\u7684\u6a21\u5757\nlinkis-engineconn-plugins/spark\nlinkis-engineconn-plugins/hive\n/linkis-commons/public-module\n/linkis-computation-governance/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----\u9700\u8981\u66f4\u6362cdh\u5305\u7684\u5217\u8868\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hive-shims-0.23-2.1.1-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hive-shims-scheduler-2.1.1-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-hdfs-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-hdfs-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-jobclient-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-api-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-server-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-hdfs-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-core-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-shuffle-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-mapreduce-client-core-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-yarn-api-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-yarn-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-yarn-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-hdfs-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-yarn-api-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-yarn-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-yarn-common-3.0.0-cdh6.3.2.jar\n\n")),(0,a.kt)("h3",{id:"22\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"},"2.2\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"),(0,a.kt)("p",null,"1\u3001kerberos\u914d\u7f6e\n\u9700\u8981\u5728linkis.properties\u516c\u5171\u914d\u7f6e\u4e2d\u6dfb\u52a0\n\u5404\u4e2a\u5f15\u64ceconf\u4e5f\u9700\u8981\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wds.linkis.keytab.enable=true\nwds.linkis.keytab.file=/hadoop/bigdata/kerberos/keytab\nwds.linkis.keytab.host.enabled=false\nwds.linkis.keytab.host=your_host\n")),(0,a.kt)("p",null,"2\u3001\u66f4\u6362Hadoop\u4f9d\u8d56\u5305\u540e\u542f\u52a8\u62a5\u9519java.lang.NoClassDefFoundError:org/apache/commons/configuration2/Configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(19402).Z,width:"750",height:"216"})),(0,a.kt)("p",null,"\u539f\u56e0\uff1aConfiguration\u7c7b\u51b2\u7a81\uff0c\u5728linkis-commons\u6a21\u5757\u4e0b\u5728\u6dfb\u52a0\u4e00\u4e2acommons-configuration2-2.1.1.jar\u89e3\u51b3\u51b2\u7a81"),(0,a.kt)("p",null,"3\u3001script\u4e2d\u8fd0\u884cspark\u3001python\u7b49\u62a5\u9519no plugin for XXX\n\u73b0\u8c61\uff1a\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539\u5b8cspark/python\u7684\u7248\u672c\u540e\uff0c\u542f\u52a8\u5f15\u64ce\u62a5\u9519no plugin for XXX\n",(0,a.kt)("img",{alt:"image",src:i(58141).Z,width:"750",height:"216"}),"\n\u539f\u56e0\uff1aLabelCommonConfig.java\u548cGovernaceCommonConf.scala\u8fd9\u4e24\u4e2a\u7c7b\u4e2d\u5199\u6b7b\u4e86\u5f15\u64ce\u7684\u7248\u672c\uff0c\u4fee\u6539\u76f8\u5e94\u7248\u672c\uff0c\u7f16\u8bd1\u540e\u66ff\u6362\u6389linkis\u4ee5\u53ca\u5176\u4ed6\u7ec4\u4ef6\uff08\u5305\u62ecschedulis\u7b49\uff09\u91cc\u9762\u6240\u6709\u5305\u542b\u8fd9\u4e24\u4e2a\u7c7b\u7684jar\uff08linkis-computation-governance-common-1.1.1.jar\u548clinkis-label-common-1.1.1.jar\uff09"),(0,a.kt)("p",null,"4\u3001python\u5f15\u64ce\u6267\u884c\u62a5\u9519\uff0c\u521d\u59cb\u5316\u5931\u8d25"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539python.py,\u79fb\u9664\u5f15\u5165pandas\u6a21\u5757")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6epython\u52a0\u8f7d\u76ee\u5f55\uff0c\u4fee\u6539python\u5f15\u64ce\u7684linkis-engineconn.properties"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"pythonVersion=/usr/local/bin/python3.6\n")))),(0,a.kt)("p",null,"5\u3001\u8fd0\u884cpyspark\u4efb\u52a1\u5931\u8d25\u62a5\u9519\n",(0,a.kt)("img",{alt:"image",src:i(94885).Z,width:"1542",height:"341"}),"\n\u539f\u56e0\uff1a\u672a\u8bbe\u7f6ePYSPARK_VERSION\n\u89e3\u51b3\u65b9\u6cd5\uff1a\n\u5728/etc/profile\u4e0b\u8bbe\u7f6e\u4e24\u4e2a\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export PYSPARK_PYTHON=/usr/local/bin/python3.6\n\nexport PYSPARK_DRIVER_PYTHON=/usr/local/bin/python3.6\n")),(0,a.kt)("p",null,"6\u3001\u6267\u884cpyspark\u4efb\u52a1\u62a5\u9519\njava.lang.NoSuchFieldError: HIVE_STATS_JDBC_TIMEOUT\n",(0,a.kt)("img",{alt:"image",src:i(13963).Z,width:"1549",height:"361"}),"\n\u539f\u56e0\uff1aspark2.4.8\u91cc\u9762\u4f7f\u7528\u7684\u662fhive1.2.1\u7684\u5305\uff0c\u4f46\u662f\u6211\u4eec\u7684hive\u5347\u7ea7\u5230\u4e862.1.1\u7248\u672c\uff0chive2\u91cc\u9762\u5df2\u7ecf\u53bb\u6389\u4e86\u8fd9\u4e2a\u53c2\u6570\uff0c\u7136\u540espark-sql\u91cc\u9762\u7684\u4ee3\u7801\u4f9d\u7136\u662f\u8981\u8c03\u7528hive\u7684\u8fd9\u4e2a\u53c2\u6570\u7684\uff0c\u7136\u540e\u5c31\u62a5\u9519\u4e86\uff0c\n\u6240\u4ee5\u5728spark-sql/hive\u4ee3\u7801\u4e2d\u5220\u9664\u6389\u4e86HIVE_STATS_JDBC_TIMEOUT\u8fd9\u4e2a\u53c2\u6570\uff0c\u91cd\u65b0\u7f16\u8bd1\u540e\u6253\u5305\uff0c\u66ff\u6362spark2.4.8\u4e2d\u7684spark-hive_2.11-2.4.8.jar"),(0,a.kt)("p",null,"7\u3001jdbc\u5f15\u64ce\u6267\u884c\u51fa\u73b0\u4ee3\u7406\u7528\u6237\u5f02\u5e38"),(0,a.kt)("p",null,"\u73b0\u8c61\uff1a\u7528A\u7528\u6237\u53bb\u6267\u884c\u4e00\u4e2ajdbc\u4efb\u52a11\uff0c\u5f15\u64ce\u9009\u4e86\u53ef\u4ee5\u590d\u7528\uff0c\u7136\u540e\u6211\u4e5f\u7528B\u7528\u6237\u53bb\u6267\u884c\u4e00\u4e2ajdbc\u4efb\u52a12\uff0c\u53d1\u73b0 \u4efb\u52a12\u7684\u63d0\u4ea4\u4eba\u662fA\n\u5206\u6790\u539f\u56e0\uff1a\nConnectionManager::getConnection\n",(0,a.kt)("img",{alt:"image",src:i(59542).Z,width:"1027",height:"439"}),"\n\u8fd9\u91cc\u521b\u5efadatasource\u7684\u65f6\u5019\u662f\u6839\u636ekey\u6765\u5224\u65ad\u662f\u5426\u521b\u5efa\uff0c\u800c\u8fd9\u4e2akey\u662fjdbc url \uff0c\u4f46\u8fd9\u79cd\u7c92\u5ea6\u53ef\u80fd\u6709\u70b9\u5927\uff0c\u56e0\u4e3a\u6709\u53ef\u80fd\u662f\u4e0d\u540c\u7684\u7528\u6237\u53bb\u8bbf\u95ee\u540c\u4e00\u4e2a\u6570\u636e\u6e90\uff0c\u6bd4\u5982\u8bf4hive,\u4ed6\u4eec\u7684url\u662f\u4e00\u6837\u7684\uff0c\u4f46\u662f\u8d26\u53f7\u5bc6\u7801\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6240\u4ee5\u5f53\u7b2c\u4e00\u4e2a\u7528\u6237\u53bb\u521b\u5efadatasource\u65f6\uff0cusername\u5df2\u7ecf\u6307\u5b9a\u4e86\uff0c\u7b2c\u4e8c\u4e2a\u7528\u6237\u8fdb\u6765\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u8fd9\u4e2a\u6570\u636e\u6e90\u5b58\u5728\uff0c\u5c31\u76f4\u63a5\u62ff\u8fd9\u4e2a\u6570\u636e\u6e90\u53bb\u7528\uff0c\u800c\u4e0d\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684datasource\uff0c\u6240\u4ee5\u9020\u6210\u4e86\u7528\u6237B\u63d0\u4ea4\u7684\u4ee3\u7801\u901a\u8fc7A\u53bb\u6267\u884c\u4e86\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u89e3\u51b3\u65b9\u6cd5\uff1a\u6570\u636e\u6e90\u7f13\u5b58map\u7684key\u7c92\u5ea6\u964d\u4f4e\uff0c\u6539\u6210jdbc.url+jdbc.user\u3002"),(0,a.kt)("h2",{id:"\u4e09dss\u90e8\u7f72"},"\u4e09\u3001DSS\u90e8\u7f72"),(0,a.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u53c2\u8003\u5b98\u7f51\u6587\u6863\u8fdb\u884c\u5b89\u88c5\u914d\u7f6e\uff0c\u4e0b\u9762\u8bf4\u660e\u4e00\u4e0b\u5728\u5b89\u88c5\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u4e8b\u9879\u3002"),(0,a.kt)("h4",{id:"31-dss-\u5de6\u4fa7\u6570\u636e\u5e93\u5c55\u793a\u7684\u6570\u636e\u5e93\u5217\u8868\u663e\u793a\u4e0d\u5168"},"3.1 DSS \u5de6\u4fa7\u6570\u636e\u5e93\u5c55\u793a\u7684\u6570\u636e\u5e93\u5217\u8868\u663e\u793a\u4e0d\u5168"),(0,a.kt)("p",null,"\u5206\u6790\uff1aDSS\u6570\u636e\u6e90\u6a21\u5757\u663e\u793a\u7684\u6570\u636e\u5e93\u4fe1\u606f\u662f\u6765\u6e90\u4e8ehive\u7684\u5143\u6570\u636e\u5e93\uff0c\u4f46\u7531\u4e8eCDH6\u4e2d\u901a\u8fc7sentry\u8fdb\u884c\u6743\u9650\u63a7\u5236\uff0c\u5927\u90e8\u5206\u7684hive\u8868\u5143\u6570\u636e\u4fe1\u606f\u6ca1\u6709\u5b58\u5728\u4e8ehive metastore\u4e2d\uff0c\u6240\u4ee5\u5c55\u793a\u7684\u6570\u636e\u5b58\u5728\u7f3a\u5931\u3002\n\u89e3\u51b3\u65b9\u6cd5\uff1a\n\u5c06\u539f\u6709\u903b\u8f91\u6539\u9020\u6210\u4f7f\u7528jdbc\u94fe\u63a5hive\u7684\u65b9\u5f0f\uff0c\u4ecejdbc\u4e2d\u83b7\u53d6\u8868\u6570\u636e\u5c55\u793a\u3002\n\u7b80\u5355\u903b\u8f91\u63cf\u8ff0\uff1a\njdbc\u7684properties\u4fe1\u606f\u901a\u8fc7linkis\u63a7\u5236\u53f0\u914d\u7f6e\u7684IDE-jdbc\u7684\u914d\u7f6e\u4fe1\u606f\u83b7\u53d6\u3002\nDBS\uff1a\u901a\u8fc7connection.getMetaData()\u83b7\u53d6schema\nTBS\uff1aconnection.getMetaData().getTables()\u83b7\u53d6\u5bf9\u5e94db\u4e0b\u7684tables\nCOLUMNS:\u901a\u8fc7\u6267\u884cdescribe  table \u83b7\u53d6\u8868\u7684columns\u4fe1\u606f"),(0,a.kt)("h4",{id:"32-dss-\u5de5\u4f5c\u6d41\u4e2d\u6267\u884cjdbc\u811a\u672c\u62a5\u9519-jdbcname-is-empty"},"3.2 DSS \u5de5\u4f5c\u6d41\u4e2d\u6267\u884cjdbc\u811a\u672c\u62a5\u9519 jdbc.name is empty"),(0,a.kt)("p",null,"\u5206\u6790\uff1adss workflow\u4e2d\u9ed8\u8ba4\u6267\u884c\u7684creator\u662fSchedulis\uff0c\u7531\u4e8e\u5728\u7ba1\u7406\u53f0\u4e2d\u672a\u914d\u7f6eSchedulis\u7684\u76f8\u5173\u5f15\u64ce\u53c2\u6570\uff0c\u5bfc\u81f4\u8bfb\u53d6\u7684\u53c2\u6570\u5168\u4e3a\u7a7a\u3002\n\u5728\u63a7\u5236\u53f0\u4e2d\u6dfb\u52a0Schedulis\u7684Category\u65f6\u62a5\u9519\uff0c\u201dSchedulis\u76ee\u5f55\u5df2\u5b58\u5728\u201c\u3002\u7531\u4e8e\u8c03\u5ea6\u7cfb\u7edf\u4e2d\u7684creator\u662fschedulis\uff0c\u5bfc\u81f4\u65e0\u6cd5\u6dfb\u52a0Schedulis Category,\u4e3a\u4e86\u66f4\u597d\u7684\u6807\u8bc6\u5404\u4e2a\u7cfb\u7edf\uff0c\u6240\u4ee5\u5c06dss workflow\u4e2d\u9ed8\u8ba4\u6267\u884c\u7684creator\u6539\u6210nodeexcetion\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u5728dss-flow-execution-server.properties\u4e2d\u6dfb\u52a0wds.linkis.flow.job.creator.v1=nodeexecution\u4e00\u884c\u914d\u7f6e\u5373\u53ef\u3002"))}d.isMDXComponent=!0},19402:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/config-err-0b7267a47e539866aefbe8be9db6c197.png"},59542:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/jdbc-engine-analyze-e765a7057a729bb49816e9e7ebffc787.png"},58141:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/pugin-error-0b7267a47e539866aefbe8be9db6c197.png"},94885:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/pyspark-error-59e263d21e848c5bda995cdc900e0ca9.png"},13963:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/spark-hive-verion-error-73f07dc42df540b1aeb4ea048a131fa8.png"}}]);