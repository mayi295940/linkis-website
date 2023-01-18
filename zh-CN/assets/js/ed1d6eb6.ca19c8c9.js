"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18813],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,_=u["".concat(s,".").concat(c)]||u[c]||k[c]||l;return t?i.createElement(_,r(r({ref:n},p),{},{components:t})):i.createElement(_,r({ref:n},p))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const l={title:"Trino",sidebar_position:12},r=void 0,o={unversionedId:"engine-usage/trino",id:"engine-usage/trino",title:"Trino",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0cTrino \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/trino.md",sourceDirName:"engine-usage",slug:"/engine-usage/trino",permalink:"/zh-CN/docs/1.3.2/engine-usage/trino",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/trino.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Trino",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Presto",permalink:"/zh-CN/docs/1.3.2/engine-usage/presto"},next:{title:"Seatunnel",permalink:"/zh-CN/docs/1.3.2/engine-usage/seatunnel"}},s={},d=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"1.1 \u5f15\u64ce\u5b89\u88c5",id:"11-\u5f15\u64ce\u5b89\u88c5",level:3},{value:"1.2 \u670d\u52a1\u9a8c\u8bc1",id:"12-\u670d\u52a1\u9a8c\u8bc1",level:3},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72",id:"2-\u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72",level:2},{value:"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09\u975e\u9ed8\u8ba4\u5f15\u64ce",id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce",level:3},{value:"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",level:3},{value:"2.3 \u5f15\u64ce\u5237\u65b0",id:"23-\u5f15\u64ce\u5237\u65b0",level:3},{value:"2.3.1 \u91cd\u542f\u5237\u65b0",id:"231-\u91cd\u542f\u5237\u65b0",level:4},{value:"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",level:3},{value:"3 \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",level:2},{value:"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",level:3},{value:"4.2 \u914d\u7f6e\u4fee\u6539",id:"42-\u914d\u7f6e\u4fee\u6539",level:3},{value:"4.2.1 \u7ba1\u7406\u53f0\u914d\u7f6e",id:"421-\u7ba1\u7406\u53f0\u914d\u7f6e",level:4},{value:"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",level:4},{value:"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",level:3}],p={toc:d};function u(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Trino")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,a.kt)("h3",{id:"11-\u5f15\u64ce\u5b89\u88c5"},"1.1 \u5f15\u64ce\u5b89\u88c5"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Trino")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Trino")," \u670d\u52a1\u5e76\u4fdd\u8bc1\u670d\u52a1\u53ef\u7528\u3002"),(0,a.kt)("h3",{id:"12-\u670d\u52a1\u9a8c\u8bc1"},"1.2 \u670d\u52a1\u9a8c\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u51c6\u5907 trino-cli\nwget https://repo1.maven.org/maven2/io/trino/trino-cli/374/trino-cli-374-executable.jar\nmv trino-cli-374-executable.jar trino-cli\nchmod +x trino-cli\n\n#  \u6267\u884c\u4efb\u52a1\n./trino-cli --server localhost:8080 --execute \'show tables from system.jdbc\'\n\n# \u5f97\u5230\u5982\u4e0b\u8f93\u51fa\u4ee3\u8868\u670d\u52a1\u53ef\u7528\n"attributes"\n"catalogs"\n"columns"\n"procedure_columns"\n"procedures"\n"pseudo_columns"\n"schemas"\n"super_tables"\n"super_types"\n"table_types"\n"tables"\n"types"\n"udts"\n')),(0,a.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72"},"2. \u5f15\u64ce\u63d2\u4ef6\u90e8\u7f72"),(0,a.kt)("h3",{id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce"},"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09",(0,a.kt)("a",{parentName:"h3",href:"/zh-CN/docs/1.3.2/engine-usage/overview"},"\u975e\u9ed8\u8ba4\u5f15\u64ce")),(0,a.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u76f4\u63a5\u4e0b\u8f7d\u5f15\u64ce\u63d2\u4ef6\u5305"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u4e0b\u8f7d")),(0,a.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u5355\u72ec\u7f16\u8bd1\u5f15\u64ce\u63d2\u4ef6\uff08\u9700\u8981\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," \u73af\u5883\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u7f16\u8bd1\ncd ${linkis_code_dir}/linkis-engineconn-plugins/trino/\nmvn clean install\n# \u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\uff0c\u4f4d\u4e8e\u5982\u4e0b\u76ee\u5f55\u4e2d\n${linkis_code_dir}/linkis-engineconn-plugins/trino/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.2/deployment/install-engineconn"},"EngineConnPlugin \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,a.kt)("h3",{id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"},"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5c06 2.1 \u4e2d\u7684\u5f15\u64ce\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"\u4e0a\u4f20\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 trino\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 v371\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 lib\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugin\n\u2502\xa0\xa0     \u2514\u2500\u2500 371\n")),(0,a.kt)("h3",{id:"23-\u5f15\u64ce\u5237\u65b0"},"2.3 \u5f15\u64ce\u5237\u65b0"),(0,a.kt)("h4",{id:"231-\u91cd\u542f\u5237\u65b0"},"2.3.1 \u91cd\u542f\u5237\u65b0"),(0,a.kt)("p",null,"\u901a\u8fc7\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," \u670d\u52a1\u5237\u65b0\u5f15\u64ce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"},"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"),(0,a.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," \u8fd9\u5f20\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," \u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230 `linkis` \u7684\u6570\u636e\u5e93 \nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3 \u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," sh ./bin/linkis-cli -submitUser hadoop \\\n -engineType trino-371 -codeType sql \\\n -code 'select * from system.jdbc.schemas limit 10' \\\n -runtimeMap linkis.trino.url=http://127.0.0.1:8080\n")),(0,a.kt)("p",null,"\u5982\u679c\u7ba1\u7406\u53f0\uff0c\u4efb\u52a1\u63a5\u53e3\uff0c\u914d\u7f6e\u6587\u4ef6\uff0c\u5747\u672a\u914d\u7f6e\uff08\u914d\u7f6e\u65b9\u5f0f\u89c1 4.2 \uff09\u65f6\u53ef\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-cli")," \u5ba2\u6237\u7aef\u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"-runtimeMap")," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType trino-371 \\\n-codeType  sql -code 'select * from system.jdbc.schemas limit 10;'  \\\n-runtimeMap linkis.trino.urll=http://127.0.0.1:8080 \\\n-runtimeMap linkis.trino.catalog=hive \\\n-runtimeMap linkis.trino.schema=default \\\n-submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("p",null,"\u66f4\u591a ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.2/user-guide/linkiscli-manual"},"Linkis-Cli \u4f7f\u7528")),(0,a.kt)("h2",{id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("h3",{id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"},"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,a.kt)("td",{parentName:"tr",align:null},"Trino \u96c6\u7fa4\u8fde\u63a5 URL"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.default.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u6761\u6570\u9650\u5236")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.http.connectTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff08\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.http.readTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f20\u8f93\u8d85\u65f6\u65f6\u95f4\uff08\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.resultSet.cache.max"),(0,a.kt)("td",{parentName:"tr",align:null},"512k"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u7f13\u51b2\u533a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.user"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.password"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.passwordCmd"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u56de\u8c03\u547d\u4ee4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"system"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"Catalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.schema"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"Schema")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.insecured"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1SSL\u8bc1\u4e66")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.key.store"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"keystore\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.keystore.password"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"keystore\u5bc6\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.keystore.type"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"keystore\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.truststore"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"truststore")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ss..truststore.type"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"trustore\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.truststore.password"),(0,a.kt)("td",{parentName:"tr",align:null},"null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"truststore\u5bc6\u7801")))),(0,a.kt)("h3",{id:"42-\u914d\u7f6e\u4fee\u6539"},"4.2 \u914d\u7f6e\u4fee\u6539"),(0,a.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2d\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e"),(0,a.kt)("h4",{id:"421-\u7ba1\u7406\u53f0\u914d\u7f6e"},"4.2.1 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(41738).Z,width:"1242",height:"582"})),(0,a.kt)("p",null,"\u6ce8\u610f: \u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," \u6807\u7b7e\u4e0b\u7684\u914d\u7f6e\u540e\u9700\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," \u624d\u4f1a\u751f\u6548\uff08\u5176\u5b83\u6807\u7b7e\u7c7b\u4f3c\uff09\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -creator IDE -submitUser hadoop \\\n -engineType trino-371 -codeType sql \\\n -code 'select * from system.jdbc.schemas limit 10' \\\n -runtimeMap linkis.trino.url=http://127.0.0.1:8080\n")),(0,a.kt)("h4",{id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "select * from system.jdbc.schemas limit 10;", "runType":  "sql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.trino.url":"http://127.0.0.1:8080",\n                                "linkis.trino.catalog ":"hive",\n                                "linkis.trino.schema ":"default"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "trino-371",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h3",{id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"},"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u662f\u901a\u8fc7\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u6240\u6d89\u53ca\u7684\u6570\u636e\u8868\u4fe1\u606f\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1atrino-375\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,a.kt)("p",null,"\u8868\u4e2d\u4e0e\u5f15\u64ce\u76f8\u5173\u7684\u521d\u59cb\u6570\u636e\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @TRINO_LABEL=\"trino-371\";\nSET @TRINO_IDE=CONCAT('*-IDE,',@TRINO_LABEL);\nSET @TRINO_ALL=CONCAT('*-*,',@TRINO_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @TRINO_IDE, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @TRINO_ALL, 'OPTIONAL', 2, now(), now());\nselect @label_id := id from `linkis_cg_manager_label` where label_value = @TRINO_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.default.limit', '\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u8fd4\u56de\u6761\u6570\u9650\u5236', '\u7ed3\u679c\u96c6\u6761\u6570\u9650\u5236', '5000', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.http.connectTimeout', '\u8fde\u63a5Trino\u670d\u52a1\u5668\u7684\u8d85\u65f6\u65f6\u95f4', '\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff08\u79d2\uff09', '60', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.http.readTimeout', '\u7b49\u5f85Trino\u670d\u52a1\u5668\u8fd4\u56de\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4', '\u4f20\u8f93\u8d85\u65f6\u65f6\u95f4\uff08\u79d2\uff09', '60', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.resultSet.cache.max', 'Trino\u7ed3\u679c\u96c6\u7f13\u51b2\u533a\u5927\u5c0f', '\u7ed3\u679c\u96c6\u7f13\u51b2\u533a', '512k', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.url', 'Trino\u670d\u52a1\u5668URL', 'Trino\u670d\u52a1\u5668URL', 'http://127.0.0.1:9401', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.user', '\u7528\u4e8e\u8fde\u63a5Trino\u67e5\u8be2\u670d\u52a1\u7684\u7528\u6237\u540d', '\u7528\u6237\u540d', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.password', '\u7528\u4e8e\u8fde\u63a5Trino\u67e5\u8be2\u670d\u52a1\u7684\u5bc6\u7801', '\u5bc6\u7801', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.passwordCmd', '\u7528\u4e8e\u8fde\u63a5Trino\u67e5\u8be2\u670d\u52a1\u7684\u5bc6\u7801\u56de\u8c03\u547d\u4ee4', '\u5bc6\u7801\u56de\u8c03\u547d\u4ee4', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.catalog', '\u8fde\u63a5Trino\u67e5\u8be2\u65f6\u4f7f\u7528\u7684catalog', 'Catalog', 'system', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.schema', '\u8fde\u63a5Trino\u67e5\u8be2\u670d\u52a1\u7684\u9ed8\u8ba4schema', 'Schema', '', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.insecured', '\u662f\u5426\u5ffd\u7565\u670d\u52a1\u5668\u7684SSL\u8bc1\u4e66', '\u9a8c\u8bc1SSL\u8bc1\u4e66', 'false', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.engineconn.concurrent.limit', '\u5f15\u64ce\u6700\u5927\u5e76\u53d1', '\u5f15\u64ce\u6700\u5927\u5e76\u53d1', '100', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.keystore', 'Trino\u670d\u52a1\u5668SSL keystore\u8def\u5f84', 'keystore\u8def\u5f84', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.keystore.type', 'Trino\u670d\u52a1\u5668SSL keystore\u7c7b\u578b', 'keystore\u7c7b\u578b', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.keystore.password', 'Trino\u670d\u52a1\u5668SSL keystore\u5bc6\u7801', 'keystore\u5bc6\u7801', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.truststore', 'Trino\u670d\u52a1\u5668SSL truststore\u8def\u5f84', 'truststore\u8def\u5f84', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.truststore.type', 'Trino\u670d\u52a1\u5668SSL truststore\u7c7b\u578b', 'truststore\u7c7b\u578b', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.trino.ssl.truststore.password', 'Trino\u670d\u52a1\u5668SSL truststore\u5bc6\u7801', 'truststore\u5bc6\u7801', 'null', 'None', '', 'trino', 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as config_key_id, label.id AS engine_type_label_id FROM `linkis_ps_configuration_config_key` config\nINNER JOIN `linkis_cg_manager_label` label ON config.engine_conn_type = 'trino' and label_value = @TRINO_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select relation.config_key_id AS config_key_id, '' AS config_value, relation.engine_type_label_id AS config_label_id FROM `linkis_ps_configuration_key_engine_relation` relation\nINNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @TRINO_ALL);\n")))}u.isMDXComponent=!0},41738:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/trino-config-0830f113253761bf489076472f81ce2b.png"}}]);