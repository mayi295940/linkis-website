"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[78913],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,k=p["".concat(o,".").concat(g)]||p[g]||u[g]||l;return t?i.createElement(k,r(r({ref:n},d),{},{components:t})):i.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},10125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const l={title:"ElasticSearch Engine",sidebar_position:11},r=void 0,s={unversionedId:"engine-usage/elasticsearch",id:"version-1.3.1/engine-usage/elasticsearch",title:"ElasticSearch Engine",description:"This article mainly introduces the installation, usage and configuration of the ElasticSearch engine plugin in Linkis.",source:"@site/versioned_docs/version-1.3.1/engine-usage/elasticsearch.md",sourceDirName:"engine-usage",slug:"/engine-usage/elasticsearch",permalink:"/docs/latest/engine-usage/elasticsearch",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/engine-usage/elasticsearch.md",tags:[],version:"1.3.1",sidebarPosition:11,frontMatter:{title:"ElasticSearch Engine",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Pipeline Engine",permalink:"/docs/latest/engine-usage/pipeline"},next:{title:"Presto Engine",permalink:"/docs/latest/engine-usage/presto"}},o={},c=[{value:"1. Preliminary work",id:"1-preliminary-work",level:2},{value:"1.1 Engine installation",id:"11-engine-installation",level:3},{value:"1.2 Service Authentication",id:"12-service-authentication",level:3},{value:"2. Engine plugin installation",id:"2-engine-plugin-installation",level:2},{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3},{value:"2.3.1 Restart and refresh",id:"231-restart-and-refresh",level:4},{value:"2.3.2 Check if the engine is refreshed successfully",id:"232-check-if-the-engine-is-refreshed-successfully",level:3},{value:"3. Engine usage",id:"3-engine-usage",level:2},{value:"3.1 Submit tasks through <code>Linkis-cli</code>",id:"31-submit-tasks-through-linkis-cli",level:3},{value:"4. Engine configuration instructions",id:"4-engine-configuration-instructions",level:2},{value:"4.1 Default Configuration Description",id:"41-default-configuration-description",level:3},{value:"4.2 Configuration modification",id:"42-configuration-modification",level:3},{value:"4.2.1 Management console configuration",id:"421-management-console-configuration",level:4},{value:"4.2.2 Task interface configuration",id:"422-task-interface-configuration",level:4},{value:"4.2.3 File Configuration",id:"423-file-configuration",level:4},{value:"4.3 Engine related data sheet",id:"43-engine-related-data-sheet",level:3}],d={toc:c};function p(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the installation, usage and configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ElasticSearch")," engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,a.kt)("h2",{id:"1-preliminary-work"},"1. Preliminary work"),(0,a.kt)("h3",{id:"11-engine-installation"},"1.1 Engine installation"),(0,a.kt)("p",null,"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ElasticSearch")," engine on your ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," service, you need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"ElasticSearch")," service and make sure the service is available."),(0,a.kt)("h3",{id:"12-service-authentication"},"1.2 Service Authentication"),(0,a.kt)("p",null,"Use the following command to verify whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"ElasticSearch")," engine service is available. If the service has enabled user authentication, you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"--user username:password")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl [--user username:password] http://ip:port/_cluster/healty?pretty\n")),(0,a.kt)("p",null,"The following output means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ElasticSearch")," service is available, note that the cluster ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"green")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_name" : "docker-cluster",\n  "status" : "green",\n  "timed_out" : false,\n  "number_of_nodes" : 1,\n  "number_of_data_nodes" : 1,\n  "active_primary_shards" : 7,\n  "active_shards" : 7,\n  "relocating_shards" : 0,\n  "initializing_shards" : 0,\n  "unassigned_shards" : 0,\n  "delayed_unassigned_shards" : 0,\n  "number_of_pending_tasks" : 0,\n  "number_of_in_flight_fetch" : 0,\n  "task_max_waiting_in_queue_millis" : 0,\n  "active_shards_percent_as_number" : 100.0\n}\n')),(0,a.kt)("h2",{id:"2-engine-plugin-installation"},"2. Engine plugin installation"),(0,a.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,a.kt)("a",{parentName:"h3",href:"/docs/latest/engine-usage/overview"},"non-default engine")),(0,a.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,a.kt)("p",null,"Method 2: Compile the engine plug-in separately (maven environment is required)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/elasticsearch/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/elasticsearch/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/latest/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,a.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,a.kt)("p",null,"Upload the engine plug-in package in 2.1 to the engine directory of the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"The directory structure after uploading is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 elasticsearch\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 v7.6.2\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 7.6.2\n")),(0,a.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,a.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,a.kt)("p",null,"Refresh the engine by restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-check-if-the-engine-is-refreshed-successfully"},"2.3.2 Check if the engine is refreshed successfully"),(0,a.kt)("p",null,"You can check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," of this table in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," in the database is the time when the refresh is triggered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#Login to the linkis database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-engine-usage"},"3. Engine usage"),(0,a.kt)("h3",{id:"31-submit-tasks-through-linkis-cli"},"3.1 Submit tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"-codeType")," parameter description")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"essql"),": Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"ElasticSearch")," engine tasks through ",(0,a.kt)("inlineCode",{parentName:"li"},"SQL")," scripts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"esjson"),": Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"ElasticSearch")," engine tasks through ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," script")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"essql")," method example")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Using this form, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ElasticSearch")," service must install the SQL plug-in, please refer to the installation method: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NLPchina/elasticsearch-sql#elasticsearch-762"},"https://github.com/NLPchina/elasticsearch-sql#elasticsearch-762")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},' sh ./bin/linkis-cli -submitUser Hadoop \\\n -engineType elasticsearch-7.6.2 -codeType essql \\\n -code \'{"sql": "select * from kibana_sample_data_ecommerce limit 10\' \\\n -runtimeMap linkis.es.http.method=GET \\\n -runtimeMap linkis.es.http.endpoint=/_sql \\\n -runtimeMap linkis.es.datasource=hadoop  \\\n -runtimeMap linkis.es.cluster=127.0.0.1:9200\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"esjson")," style example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -submitUser Hadoop \\\n-engineType elasticsearch-7.6.2 -codeType esjson \\\n-code \'{"query": {"match": {"order_id": "584677"}}}\' \\\n-runtimeMap linkis.es.http.method=GET \\\n-runtimeMap linkis.es.http.endpoint=/kibana_sample_data_ecommerce/_search \\\n-runtimeMap linkis.es.datasource=hadoop  \\\n-runtimeMap linkis.es.cluster=127.0.0.1:9200\n')),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/linkiscli-manual"},(0,a.kt)("inlineCode",{parentName:"a"},"Linkis-Cli")," usage")),(0,a.kt)("h2",{id:"4-engine-configuration-instructions"},"4. Engine configuration instructions"),(0,a.kt)("h3",{id:"41-default-configuration-description"},"4.1 Default Configuration Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9200"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster, multiple nodes separated by commas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.datasource"),(0,a.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"ElasticSearch datasource")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.username"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.password"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.auth.cache"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the client caches authentication")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.sniffer.enable"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the client enables sniffer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.http.method"),(0,a.kt)("td",{parentName:"tr",align:null},"GET"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Call method")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.http.endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/_search"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint called by JSON script")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"/_sql"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint called by SQL script")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.format"),(0,a.kt)("td",{parentName:"tr",align:null},'{"query":"%s"}'),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Template called by SQL script, %s is replaced with SQL as the request body to request Es cluster")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.es.headers.*"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Client Headers Configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum concurrent engine")))),(0,a.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,a.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,a.kt)("h4",{id:"421-management-console-configuration"},"4.2.1 Management console configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(36218).Z,width:"1886",height:"819"})),(0,a.kt)("p",null,"Note: After modifying the configuration under the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," tag, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," to take effect (other tags are similar), such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -creator IDE -submitUser hadoop \\\n-engineType elasticsearch-7.6.2 -codeType esjson \\\n-code \'{"query": {"match": {"order_id": "584677"}}}\' \\\n-runtimeMap linkis.es.http.method=GET \\\n-runtimeMap linkis.es.http.endpoint=/kibana_sample_data_ecommerce/_search \n')),(0,a.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,a.kt)("p",null,"Submit the task interface, configure it through the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": "select * from kibana_sample_data_ecommerce limit 10;", "runType":  "essql"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.es.cluster":"http://127.0.0.1:9200",\n                                "linkis.es.datasource":"hadoop",\n                                "linkis.es.username":"",\n                                "linkis.es.password":""\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "elasticsearch-7.6.2",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h4",{id:"423-file-configuration"},"4.2.3 File Configuration"),(0,a.kt)("p",null,"Configure by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn.properties")," file in the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins/elasticsearch/dist/v7.6.2/conf/"),", as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(42990).Z,width:"958",height:"369"})),(0,a.kt)("h3",{id:"43-engine-related-data-sheet"},"4.3 Engine related data sheet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is managed through the engine tag, and the data table information involved is shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key: key and default values \u200b\u200bof configuration parameters inserted into the engine\nlinkis_cg_manager_label: Insert engine label such as: elasticsearch-7.6.2\nlinkis_ps_configuration_category: Insert the directory association of the engine\nlinkis_ps_configuration_config_value: The configuration that the insertion engine needs to display\nlinkis_ps_configuration_key_engine_relation: The relationship between the configuration item and the engine\n")),(0,a.kt)("p",null,"The initial data related to the engine in the table is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @ENGINE_LABEL=\"elasticsearch-7.6.2\";\nSET @ENGINE_ALL=CONCAT('*-*,',@ENGINE_LABEL);\nSET @ENGINE_IDE=CONCAT('*-IDE,',@ENGINE_LABEL);\nSET @ENGINE_NAME=\"elasticsearch\";\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @ENGINE_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @ENGINE_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from `linkis_cg_manager_label` where label_value = @ENGINE_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.cluster', 'eg: http://127.0.0.1:9200', 'connection address', 'http://127.0.0.1:9200', 'None', '', @ENGINE_NAME , 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.datasource', 'Connection Alias', 'Connection Alias', 'hadoop', 'None', '', @ENGINE_NAME, 0, 0, 1, 'Datasource Configuration');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.username', 'username', 'ES cluster username', 'No', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.password', 'password', 'ES cluster password', 'None', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.auth.cache', 'Does the client cache authentication', 'Does the client cache authentication', 'false', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sniffer.enable', 'Whether the client enables sniffer', 'Whether the client enables sniffer', 'false', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.http.method', 'call method', 'HTTP request method', 'GET', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.http.endpoint', '/_search', 'JSON script Endpoint', '/_search', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sql.endpoint', '/_sql', 'SQL script Endpoint', '/_sql', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sql.format', 'The template called by the SQL script, replace %s with SQL as the request body to request the Es cluster', 'request body', '{\"query\":\"%s\"}', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.headers.*', 'Client Headers Configuration', 'Client Headers Configuration', 'None', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.engineconn.concurrent.limit', 'engine max concurrency', 'engine max concurrency', '100', 'None', '', @ENGINE_NAME, 0, 0, 1, 'data source conf') ;\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as config_key_id, label.id AS engine_type_label_id FROM `linkis_ps_configuration_config_key` config\nINNER JOIN `linkis_cg_manager_label` label ON config.engine_conn_type = @ENGINE_NAME and label_value = @ENGINE_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select relation.config_key_id AS config_key_id, '' AS config_value, relation.engine_type_label_id AS config_label_id FROM `linkis_ps_configuration_key_engine_relation` relation\nINNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @ENGINE_ALL);\n\n")))}p.isMDXComponent=!0},42990:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/es-config-c33911e8a31efd6d8e139251fa3ce2eb.png"},36218:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/es-manage-4e7f9f69cc0e74d647734fe3e111caa9.png"}}]);