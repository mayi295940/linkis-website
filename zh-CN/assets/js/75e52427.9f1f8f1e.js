"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[76231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),p=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return l.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),k=a,g=u["".concat(o,".").concat(k)]||u[k]||c[k]||i;return t?l.createElement(g,r(r({ref:n},d),{},{components:t})):l.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=k;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},88697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var l=t(87462),a=(t(67294),t(3905));const i={title:"Presto \u5f15\u64ce",sidebar_position:11},r=void 0,s={unversionedId:"engine-usage/presto",id:"version-1.2.0/engine-usage/presto",title:"Presto \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis1.X \u4e2d\uff0cPresto \u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/engine-usage/presto.md",sourceDirName:"engine-usage",slug:"/engine-usage/presto",permalink:"/zh-CN/docs/1.2.0/engine-usage/presto",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/engine-usage/presto.md",tags:[],version:"1.2.0",sidebarPosition:11,frontMatter:{title:"Presto \u5f15\u64ce",sidebar_position:11},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"ElasticSearch \u5f15\u64ce",permalink:"/zh-CN/docs/1.2.0/engine-usage/elasticsearch"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.2.0/api/overview"}},o={},p=[{value:"1. \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",level:2},{value:"2. \u90e8\u7f72\u548c\u914d\u7f6e",id:"2-\u90e8\u7f72\u548c\u914d\u7f6e",level:2},{value:"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",level:3},{value:"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",level:3},{value:"2.3 \u5f15\u64ce\u7684\u6807\u7b7e",id:"23-\u5f15\u64ce\u7684\u6807\u7b7e",level:3},{value:"2.2 Presto \u5f15\u64ce\u76f8\u5173\u914d\u7f6e",id:"22-presto-\u5f15\u64ce\u76f8\u5173\u914d\u7f6e",level:3},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u51c6\u5907\u64cd\u4f5c",id:"31-\u51c6\u5907\u64cd\u4f5c",level:3},{value:"3.1.1 \u7ba1\u7406\u53f0\u914d\u7f6e",id:"311-\u7ba1\u7406\u53f0\u914d\u7f6e",level:4},{value:"3.1.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",id:"312-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",level:4},{value:"3.1.3 \u6587\u4ef6\u914d\u7f6e",id:"313-\u6587\u4ef6\u914d\u7f6e",level:4},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",level:3},{value:"3.3 \u901a\u8fc7 Scriptis \u4f7f\u7528",id:"33-\u901a\u8fc7-scriptis-\u4f7f\u7528",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,l.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis1.X \u4e2d\uff0cPresto \u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"1-\u73af\u5883\u51c6\u5907"},"1. \u73af\u5883\u51c6\u5907"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 Presto \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u51c6\u5907 Presto \u8fde\u63a5\u4fe1\u606f\uff0c\u5982 Presto \u96c6\u7fa4\u7684\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u7b49"),(0,a.kt)("h2",{id:"2-\u90e8\u7f72\u548c\u914d\u7f6e"},"2. \u90e8\u7f72\u548c\u914d\u7f6e"),(0,a.kt)("h3",{id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,a.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1 Presto \u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884c Linkis \u9879\u76ee\u5168\u91cf\u7f16\u8bd1\u53d1\u5e03\u7684\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d\u9ed8\u8ba4\u4e0d\u5305\u542b\u6b64\u5f15\u64ce\u63d2\u4ef6\uff0c \u4f60\u53ef\u4ee5\u6309\u6b64\u6307\u5f15\u90e8\u7f72\u5b89\u88c5\n",(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"),"\n\u6216\u8005\u6309\u4ee5\u4e0b\u6d41\u7a0b\uff0c\u624b\u52a8\u7f16\u8bd1\u90e8\u7f72"),(0,a.kt)("p",null,"\u5355\u72ec\u7f16\u8bd1 Presto \u5f15\u64ce "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-engineconn-plugins/presto/\nmvn clean install\n")),(0,a.kt)("h3",{id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5c06 2.1 \u6b65\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/jdbc/target/out/presto\n")),(0,a.kt)("p",null,"\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin\uff08\u6216\u5219\u901a\u8fc7\u5f15\u64ce\u63a5\u53e3\u8fdb\u884c\u5237\u65b0\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart linkis-cg-linkismanager\n")),(0,a.kt)("p",null,"\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f\uff1a\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684linkis_engine_conn_plugin_bml_resources\u8fd9\u5f20\u8868\u7684last_update_time\u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230linkis\u7684\u6570\u636e\u5e93 \nselect *  from linkis_cg_engine_conn_plugin_bml_resources\n")),(0,a.kt)("h3",{id:"23-\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 \u5f15\u64ce\u7684\u6807\u7b7e"),(0,a.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PRESTO_LABEL=\"presto-0.234\";\nSET @PRESTO_ALL=CONCAT('*-*,',@PRESTO_LABEL);\nSET @PRESTO_IDE=CONCAT('*-IDE,',@PRESTO_LABEL);\n\nSET @PRESTO_NAME=\"presto\";\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@PRESTO_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@PRESTO_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from `linkis_cg_manager_label` where `label_value` = @PRESTO_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.url', 'Presto \u96c6\u7fa4\u8fde\u63a5', 'presto\u8fde\u63a5\u5730\u5740', 'http://127.0.0.1:8080', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.catalog', '\u67e5\u8be2\u7684 Catalog ', 'presto\u8fde\u63a5\u7684catalog', 'hive', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.schema', '\u67e5\u8be2\u7684 Schema ', '\u6570\u636e\u5e93\u8fde\u63a5schema', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('wds.linkis.presto.source', '\u67e5\u8be2\u4f7f\u7528\u7684 source ', '\u6570\u636e\u5e93\u8fde\u63a5source', '', 'None', NULL, @PRESTO_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n-- engine -*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = @PRESTO_NAME and label_value = @PRESTO_IDE);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PRESTO_IDE);\n")),(0,a.kt)("h3",{id:"22-presto-\u5f15\u64ce\u76f8\u5173\u914d\u7f6e"},"2.2 Presto \u5f15\u64ce\u76f8\u5173\u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,a.kt)("td",{parentName:"tr",align:null},"Presto \u96c6\u7fa4\u8fde\u63a5"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.username"),(0,a.kt)("td",{parentName:"tr",align:null},"default"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto \u96c6\u7fa4\u7528\u6237\u540d"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.password"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto \u96c6\u7fa4\u5bc6\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"system"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u7684 Catalog"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.schema"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u7684 Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.source"),(0,a.kt)("td",{parentName:"tr",align:null},"global"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u4f7f\u7528\u7684 source"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"presto.session.query_max_total_memory"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u4f7f\u7528\u6700\u5927\u7684\u5185\u5b58"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.connectTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto \u5ba2\u6237\u7aef\u7684 connect timeout\uff08\u5355\u4f4d\uff1a\u79d2\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.presto.http.readTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto \u5ba2\u6237\u7aef\u7684 read timeout\uff08\u5355\u4f4d\uff1a\u79d2\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.concurrent.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"Presto \u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"false")))),(0,a.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"31-\u51c6\u5907\u64cd\u4f5c"},"3.1 \u51c6\u5907\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u4e09\u79cd\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e\u3002"),(0,a.kt)("h4",{id:"311-\u7ba1\u7406\u53f0\u914d\u7f6e"},"3.1.1 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(12177).Z,width:"1695",height:"450"})),(0,a.kt)("h4",{id:"312-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"3.1.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570params.configuration.runtime\u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "show teblas;", "runType":  "psql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "wds.linkis.presto.url":"http://127.0.0.1:9090",\n                                "wds.linkis.presto.catalog ":"hive",\n                                "wds.linkis.presto.schema ":"default",\n                                "wds.linkis.presto.source ":""\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "presto-0.234",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h4",{id:"313-\u6587\u4ef6\u914d\u7f6e"},"3.1.3 \u6587\u4ef6\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7\u4fee\u6539\u76ee\u5f55 install path/lib/linkis-engineconn-plugins/presto/dist/v0.234/conf/ \u4e2d\u7684linkis-engineconn.properties \u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(72635).Z,width:"1583",height:"622"})),(0,a.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,a.kt)("p",null,"\u901a\u8fc7linkis-cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\uff0cpresto\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"li"},"engineType presto-0.234")," \u5f15\u64ce\u7248\u672c\u8bbe\u7f6e\u662f\u6709\u524d\u7f00\u7684  \u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"presto")," \u7248\u672c\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"0.234")," \u5219\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"}," presto-0.234"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"}," sh ./bin/linkis-cli -engineType presto-0.234 -codeType  psql -code 'show tables;'   -submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("p",null,"\u5982\u679c\u7ba1\u7406\u53f0\uff0c\u4efb\u52a1\u63a5\u53e3\uff0c\u914d\u7f6e\u6587\u4ef6\uff0c\u5747\u672a\u914d\u7f6e\u65f6\u53ef\u5728 cli \u5ba2\u6237\u7aef\u4e2d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"-runtimeMap"),"\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./bin/linkis-cli -engineType presto-0.234 -codeType  tsql -code 'show tables;'  -runtimeMap wds.linkis.presto.url=http://127.0.0.1:50070 -runtimeMap wds.linkis.presto.catalog=hive -runtimeMap  wds.linkis.presto.schema=default  -runtimeMap wds.linkis.presto.catalog=hive -submitUser hadoop -proxyUser hadoop\n")),(0,a.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.2.0/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,a.kt)("h3",{id:"33-\u901a\u8fc7-scriptis-\u4f7f\u7528"},"3.3 \u901a\u8fc7 Scriptis \u4f7f\u7528"),(0,a.kt)("p",null,"\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757\u53f3\u952e\u9009\u62e9\u65b0\u5efa\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"psql"),"\u7684\u811a\u672c"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7005).Z,width:"591",height:"588"})))}c.isMDXComponent=!0},12177:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/presto-console-cf2b1ce63e10fc3f6fcfc968bae4f8e1.png"},72635:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/presto-file-2850a37e5c3fbe2d3b8d244e0751be26.png"},7005:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/presto-psql-bd2214df768fb50e25cf873ee7cb2423.png"}}]);