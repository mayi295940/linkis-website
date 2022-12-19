"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[87680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,k=c["".concat(p,".").concat(u)]||c[u]||g[u]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20823:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"Hive",sidebar_position:2},l=void 0,o={unversionedId:"engine-usage/hive",id:"engine-usage/hive",isDocsHomePage:!1,title:"Hive",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0c Hive \u5f15\u64ce\u8fde\u63a5\u5668\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/hive.md",sourceDirName:"engine-usage",slug:"/engine-usage/hive",permalink:"/zh-CN/docs/1.3.1/engine-usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/hive.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hive",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Spark",permalink:"/zh-CN/docs/1.3.1/engine-usage/spark"},next:{title:"Python",permalink:"/zh-CN/docs/1.3.1/engine-usage/python"}},p=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",children:[{value:"1.1 \u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"11-\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"1.1 \u73af\u5883\u9a8c\u8bc1",id:"11-\u73af\u5883\u9a8c\u8bc1",children:[]}]},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 \u9ed8\u8ba4\u5f15\u64ce",id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce",children:[]},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",children:[]},{value:"3.2 \u901a\u8fc7Linkis SDK\u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7linkis-sdk\u63d0\u4ea4\u4efb\u52a1",children:[]}]},{value:"4. \u5f15\u64ce\u8fde\u63a5\u5668\u914d\u7f6e\u8bf4\u660e",id:"4-\u5f15\u64ce\u8fde\u63a5\u5668\u914d\u7f6e\u8bf4\u660e",children:[{value:"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",children:[]},{value:"4.2 \u961f\u5217\u8d44\u6e90\u914d\u7f6e",id:"42-\u961f\u5217\u8d44\u6e90\u914d\u7f6e",children:[]},{value:"4.3 \u914d\u7f6e\u4fee\u6539",id:"43-\u914d\u7f6e\u4fee\u6539",children:[]},{value:"4.4 \u5f15\u64ce\u8fde\u63a5\u5668\u76f8\u5173\u6570\u636e\u8868",id:"44-\u5f15\u64ce\u8fde\u63a5\u5668\u76f8\u5173\u6570\u636e\u8868",children:[]}]},{value:"5. Hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a",id:"5-hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a",children:[]}],d={toc:p};function s(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u5f15\u64ce\u8fde\u63a5\u5668\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,i.kt)("h3",{id:"11-\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.1 \u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,i.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hive\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")))),(0,i.kt)("h3",{id:"11-\u73af\u5883\u9a8c\u8bc1"},"1.1 \u73af\u5883\u9a8c\u8bc1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u94fe\u63a5hive\nbin/hive\n\n# \u6d4b\u8bd5\u547d\u4ee4\nshow databases;\n\n# \u80fd\u591f\u94fe\u63a5\u6210\u529f\uff0c\u5e76\u6b63\u5e38\u8f93\u51fa\u6570\u636e\u5e93\u4fe1\u606f\u4ee3\u8868\u73af\u5883\u914d\u7f6e\u6210\u529f\nhive (default)> show databases;\nOK\ndatabases_name\ndefault\n")),(0,i.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce"},"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"h2",href:"/zh-CN/docs/1.3.1/engine-usage/overview"},"\u9ed8\u8ba4\u5f15\u64ce")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"linkis")," \u53d1\u5e03\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u4e2d\u9ed8\u8ba4\u5305\u542b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u5f15\u64ce\u63d2\u4ef6\uff0c\u7528\u6237\u65e0\u9700\u989d\u5916\u5b89\u88c5\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u7684\u7248\u672c\u662f\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive1.x")," \u548c",(0,i.kt)("inlineCode",{parentName:"p"}," Hive2.x")," \uff0c\u9ed8\u8ba4\u662f\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive on MapReduce")," \uff0c\u5982\u679c\u60a8\u60f3\u6539\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive on Tez")," \uff0c\u9700\u8981\u60a8\u6309\u7167\u6b64 ",(0,i.kt)("inlineCode",{parentName:"p"},"PR")," \u8fdb\u884c\u4e00\u4e0b\u4fee\u6539\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/pull/541"},"https://github.com/apache/incubator-linkis/pull/541")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u652f\u6301\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u7248\u672c\u662f2.3.3\uff0c\u5982\u679c\u60a8\u60f3\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u7684\u7248\u672c\uff0c\u60a8\u53ef\u4ee5\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-engineplugin-hive")," \u6a21\u5757\uff0c\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"<hive.version\\>")," \u6807\u7b7e\uff0c\u7136\u540e\u5355\u72ec\u7f16\u8bd1\u6b64\u6a21\u5757\u5373\u53ef"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,i.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType hive-2.3.3 \\\n-codeType hql -code "show databases"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/linkiscli-manual"},(0,i.kt)("inlineCode",{parentName:"a"},"Linkis-Cli")," \u4f7f\u7528")),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-sdk\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7Linkis SDK\u63d0\u4ea4\u4efb\u52a1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Scala")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"SDK")," \u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/sdk-manual"},"JAVA SDK Manual"),"\u3002\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u4efb\u52a1\u4f60\u53ea\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"Demo")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"EngineConnType")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeType")," \u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-2.3.3"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "hql"); // required codeType\n')),(0,i.kt)("h2",{id:"4-\u5f15\u64ce\u8fde\u63a5\u5668\u914d\u7f6e\u8bf4\u660e"},"4. \u5f15\u64ce\u8fde\u63a5\u5668\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("h3",{id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"},"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.rm.instance"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u8fde\u63a5\u5668\u6700\u5927\u5e76\u53d1\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.java.driver.memory"),(0,i.kt)("td",{parentName:"tr",align:null},"1g"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u8fde\u63a5\u5668\u521d\u59cb\u5316\u5185\u5b58\u5927\u5c0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.max.free.time"),(0,i.kt)("td",{parentName:"tr",align:null},"1h"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u8fde\u63a5\u5668\u7a7a\u95f2\u9000\u51fa\u65f6\u95f4")))),(0,i.kt)("h3",{id:"42-\u961f\u5217\u8d44\u6e90\u914d\u7f6e"},"4.2 \u961f\u5217\u8d44\u6e90\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"MapReduce")," \u4efb\u52a1\u662f\u9700\u8981\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u961f\u5217\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"yarn",src:t(90542).Z}),"    "),(0,i.kt)("h3",{id:"43-\u914d\u7f6e\u4fee\u6539"},"4.3 \u914d\u7f6e\u4fee\u6539"),(0,i.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2d\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e"),(0,i.kt)("h4",{id:"431-\u7ba1\u7406\u53f0\u914d\u7f6e"},"4.3.1 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hive",src:t(78926).Z})),(0,i.kt)("p",null,"\u6ce8\u610f: \u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE")," \u6807\u7b7e\u4e0b\u7684\u914d\u7f6e\u540e\u9700\u8981\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"-creator IDE")," \u624d\u4f1a\u751f\u6548\uff08\u5176\u5b83\u6807\u7b7e\u7c7b\u4f3c\uff09\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -creator IDE \\\n-engineType hive-2.3.3 -codeType hql \\\n-code "show databases"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("h4",{id:"432-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.3.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,i.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "show databases;", "runType":  "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "wds.linkis.rm.instance":"10"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "hive-2.3.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,i.kt)("h3",{id:"44-\u5f15\u64ce\u8fde\u63a5\u5668\u76f8\u5173\u6570\u636e\u8868"},"4.4 \u5f15\u64ce\u8fde\u63a5\u5668\u76f8\u5173\u6570\u636e\u8868"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," \u662f\u901a\u8fc7\u5f15\u64ce\u8fde\u63a5\u5668\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u6240\u6d89\u53ca\u7684\u6570\u636e\u8868\u4fe1\u606f\u5982\u4e0b\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64ce\u8fde\u63a5\u5668\u6807\u7b7e\u5982\uff1ahive-2.3.3\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u8fde\u63a5\u5668\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u5173\u8054\u5173\u7cfb\n")),(0,i.kt)("p",null,"\u8868\u4e2d\u4e0e\u5f15\u64ce\u8fde\u63a5\u5668\u76f8\u5173\u7684\u521d\u59cb\u6570\u636e\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @HIVE_LABEL=\"hive-2.3.3\";\nSET @HIVE_ALL=CONCAT('*-*,',@HIVE_LABEL);\nSET @HIVE_IDE=CONCAT('*-IDE,',@HIVE_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @HIVE_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @HIVE_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @HIVE_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', '\u8303\u56f4\uff1a1-20\uff0c\u5355\u4f4d\uff1a\u4e2a', 'hive\u5f15\u64ce\u8fde\u63a5\u5668\u6700\u5927\u5e76\u53d1\u6570', '10', 'NumInterval', '[1,20]', '0', '0', '1', '\u961f\u5217\u8d44\u6e90', 'hive');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.memory', '\u53d6\u503c\u8303\u56f4\uff1a1-10\uff0c\u5355\u4f4d\uff1aG', 'hive\u5f15\u64ce\u8fde\u63a5\u5668\u521d\u59cb\u5316\u5185\u5b58\u5927\u5c0f','1g', 'Regex', '^([1-9]|10)(G|g)$', '0', '0', '1', 'hive\u5f15\u64ce\u8fde\u63a5\u5668\u8bbe\u7f6e', 'hive');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('hive.client.java.opts', 'hive\u5ba2\u6237\u7aef\u8fdb\u7a0b\u53c2\u6570', 'hive\u5f15\u64ce\u8fde\u63a5\u5668\u542f\u52a8\u65f6jvm\u53c2\u6570','', 'None', NULL, '1', '1', '1', 'hive\u5f15\u64ce\u8fde\u63a5\u5668\u8bbe\u7f6e', 'hive');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('mapred.reduce.tasks', '\u8303\u56f4\uff1a-1-10000\uff0c\u5355\u4f4d\uff1a\u4e2a', 'reduce\u6570', '-1', 'NumInterval', '[-1,10000]', '0', '1', '1', 'hive\u8d44\u6e90\u8bbe\u7f6e', 'hive');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.max.free.time', '\u53d6\u503c\u8303\u56f4\uff1a3m,15m,30m,1h,2h', '\u5f15\u64ce\u8fde\u63a5\u5668\u7a7a\u95f2\u9000\u51fa\u65f6\u95f4','1h', 'OFT', '[\\\"1h\\\",\\\"2h\\\",\\\"30m\\\",\\\"15m\\\",\\\"3m\\\"]', '0', '0', '1', 'hive\u5f15\u64ce\u8fde\u63a5\u5668\u8bbe\u7f6e', 'hive');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'hive' and label_value = @HIVE_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @HIVE_ALL);\n")),(0,i.kt)("h2",{id:"5-hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a"},"5. Hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u7684\u65e5\u5fd7\u754c\u9762\u662f\u4e0d\u663e\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"application_id")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," \u5b8c\u6210\u6570\u91cf\u7684,\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8f93\u51fa\u8be5\u65e5\u5fd7\n\u5f15\u64ce\u8fde\u63a5\u5668\u5185\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"log4j2-engineconn.xml/log4j2.xml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u9700\u8981\u4fee\u6539\u7684\u4ee3\u7801\u5757\u5982\u4e0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"appenders")," \u7ec4\u4ef6\u4e0b\u9700\u8981\u6dfb\u52a0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'        <Send name="SendPackage" >\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"root")," \u7ec4\u4ef6\u4e0b\u9700\u8981\u6dfb\u52a0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'        <appender-ref ref="SendPackage"/>\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"loggers")," \u7ec4\u4ef6\u4e0b\u9700\u8981\u6dfb\u52a0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'        <logger name="org.apache.hadoop.hive.ql.exec.StatsTask" level="info" additivity="true">\n            <appender-ref ref="SendPackage"/>\n        </logger>\n')),(0,i.kt)("p",null,"\u8fdb\u884c\u5982\u4e0a\u76f8\u5173\u4fee\u6539\u540e\u65e5\u5fd7\u53ef\u4ee5\u589e\u52a0\u4efb\u52a1 ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," \u8fdb\u5ea6\u4fe1\u606f\uff0c\u663e\u793a\u4e3a\u5982\u4e0b\u6837\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2022-04-08 11:06:50.228 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Status: Running (Executing on YARN cluster with App id application_1631114297082_432445)\n2022-04-08 11:06:50.248 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: -/-  Reducer 2: 0/1  \n2022-04-08 11:06:52.417 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 0/1  Reducer 2: 0/1  \n2022-04-08 11:06:55.060 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 0(+1)/1  Reducer 2: 0/1  \n2022-04-08 11:06:57.495 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 1/1  Reducer 2: 0(+1)/1  \n2022-04-08 11:06:57.899 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 1/1  Reducer 2: 1/1  \n")),(0,i.kt)("p",null,"\u5b8c\u6574 ",(0,i.kt)("inlineCode",{parentName:"p"},"xml")," \u914d\u7f6e\u6587\u4ef6\u8303\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!--\n  ~ Copyright 2019 WeBank\n  ~\n  ~ Licensed under the Apache License, Version 2.0 (the "License");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ http://www.apache.org/licenses/LICENSE-2.0\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an "AS IS" BASIS,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  --\x3e\n  \n<configuration status="error" monitorInterval="30">\n    <appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Console>\n\n        <Send name="Send" >\n            <Filters>\n                <ThresholdFilter level="WARN" onMatch="ACCEPT" onMismatch="DENY" />\n            </Filters>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n\n        <Send name="SendPackage" >\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n\n        <Console name="stderr" target="SYSTEM_ERR">\n            <ThresholdFilter level="ERROR" onMatch="ACCEPT" onMismatch="DENY" />\n            <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level %class{36} %L %M - %msg%xEx%n"/>\n        </Console>\n    </appenders>\n\n    <loggers>\n      <root level="INFO">\n            <appender-ref ref="stderr"/>\n            <appender-ref ref="Console"/>\n            <appender-ref ref="Send"/>\n            <appender-ref ref="SendPackage"/>\n        </root>\n        <logger name="org.apache.hadoop.hive.ql.exec.StatsTask" level="info" additivity="true">\n            <appender-ref ref="SendPackage"/>\n        </logger>\n        <logger name="org.springframework.boot.diagnostics.LoggingFailureAnalysisReporter" level="error" additivity="true">\n            <appender-ref ref="stderr"/>\n        </logger>\n        <logger name="com.netflix.discovery" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.yarn" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.springframework" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.linkis.server.security" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.hive.ql.exec.mr.ExecDriver" level="fatal" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.hdfs.KeyProviderCache" level="fatal" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.spark_project.jetty" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.eclipse.jetty" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.springframework" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.reflections.Reflections" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n\n        <logger name="org.apache.hadoop.ipc.Client" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n\n   </loggers>\n</configuration>\n')))}s.isMDXComponent=!0},78926:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hive-config-066d9859d7ce90f118cf454ed1e8aaf4.png"},90542:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/yarn-conf-395feb3695fdbf71df62544d5df21ad3.png"}}]);