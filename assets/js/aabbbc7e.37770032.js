"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[992],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83465:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=t(87462),o=t(63366),a=(t(67294),t(3905)),r=["components"],l={title:"Hive Engine Usage",sidebar_position:2},s=void 0,u={unversionedId:"engine_usage/hive",id:"engine_usage/hive",title:"Hive Engine Usage",description:"This article mainly introduces the configuration, deployment and use of Hive engineConn in Linkis1.0.",source:"@site/docs/engine_usage/hive.md",sourceDirName:"engine_usage",slug:"/engine_usage/hive",permalink:"/docs/1.1.0/engine_usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine_usage/hive.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hive Engine Usage",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.0/engine_usage/overview"},next:{title:"JDBC Engine Usage",permalink:"/docs/1.1.0/engine_usage/jdbc"}},c=[{value:"1. Environment configuration before Hive engineConn use",id:"1-environment-configuration-before-hive-engineconn-use",children:[],level:2},{value:"2. Hive engineConn configuration and deployment",id:"2-hive-engineconn-configuration-and-deployment",children:[{value:"2.1 Hive version selection and compilation",id:"21-hive-version-selection-and-compilation",children:[],level:3},{value:"2.2 hive engineConnConn deployment and loading",id:"22-hive-engineconnconn-deployment-and-loading",children:[],level:3},{value:"2.3 Linkis adds Hive console parameters(optional)",id:"23-linkis-adds-hive-console-parametersoptional",children:[],level:3}],level:2},{value:"3. Use of hive engineConn",id:"3-use-of-hive-engineconn",children:[{value:"Preparation for operation, queue setting",id:"preparation-for-operation-queue-setting",children:[],level:3},{value:"3.1 How to use Linkis SDK",id:"31-how-to-use-linkis-sdk",children:[],level:3},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[],level:3},{value:"3.3 How to use Scriptis",id:"33-how-to-use-scriptis",children:[],level:3}],level:2},{value:"4. Hive engineConn user settings",id:"4-hive-engineconn-user-settings",children:[],level:2}],p={toc:c};function d(e){var n=e.components,l=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article mainly introduces the configuration, deployment and use of Hive engineConn in Linkis1.0."),(0,a.kt)("h2",{id:"1-environment-configuration-before-hive-engineconn-use"},"1. Environment configuration before Hive engineConn use"),(0,a.kt)("p",null,"If you want to use the hive engineConn on your linkis server, you need to ensure that the following environment variables have been set correctly and that the user who started the engineConn has these environment variables."),(0,a.kt)("p",null,"It is strongly recommended that you check these environment variables of the executing user before executing hive tasks."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hive configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("p",null,"Table 1-1 Environmental configuration list"),(0,a.kt)("h2",{id:"2-hive-engineconn-configuration-and-deployment"},"2. Hive engineConn configuration and deployment"),(0,a.kt)("h3",{id:"21-hive-version-selection-and-compilation"},"2.1 Hive version selection and compilation"),(0,a.kt)("p",null,"The version of Hive supports hive1.x/hive2.x/hive3.x. The hive version supported by default is 2.3.3. If you want to modify the hive version, such as 2.3.3, you can find the linkis-engineConnplugin-hive module and change the \\<hive.version",">"," tag to 2.3 .3, then compile this module separately.\nThe default is to support hive on MapReduce, if you want to change to Hive on Tez, You need to copy all the jars prefixed with tez-* to the directory: ",(0,a.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins/hive/dist/version/lib"),".\nOther hive operating modes are similar, just copy the corresponding dependencies to the lib directory of Hive EngineConn."),(0,a.kt)("h3",{id:"22-hive-engineconnconn-deployment-and-loading"},"2.2 hive engineConnConn deployment and loading"),(0,a.kt)("p",null,"If you have already compiled your hive engineConn plug-in has been compiled, then you need to put the new plug-in in the specified location to load, you can refer to the following article for details"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/deployment/engine_conn_plugin_installation"},"EngineConnPlugin Installation")," "),(0,a.kt)("h3",{id:"23-linkis-adds-hive-console-parametersoptional"},"2.3 Linkis adds Hive console parameters(optional)"),(0,a.kt)("p",null,"Linkis can configure the corresponding EngineConn parameters on the management console. If your newly added EngineConn needs this feature, you can refer to the following documents:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/deployment/engine_conn_plugin_installation"},"EngineConnPlugin Installation > 2.2 Configuration modification of management console (optional)")," "),(0,a.kt)("h2",{id:"3-use-of-hive-engineconn"},"3. Use of hive engineConn"),(0,a.kt)("h3",{id:"preparation-for-operation-queue-setting"},"Preparation for operation, queue setting"),(0,a.kt)("p",null,"Hive's MapReduce task requires yarn resources, so you need to set up the queue at the beginning"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(82848).Z,width:"1365",height:"273"})),(0,a.kt)("p",null,"Figure 3-1 Queue settings"),(0,a.kt)("p",null,"You can also add the queue value in the StartUpMap of the submission parameter: ",(0,a.kt)("inlineCode",{parentName:"p"},'startupMap.put("wds.linkis.rm.yarnqueue", "dws")')),(0,a.kt)("h3",{id:"31-how-to-use-linkis-sdk"},"3.1 How to use Linkis SDK"),(0,a.kt)("p",null,"Linkis  provides a client method to call hive tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/sdk_manual"},"JAVA SDK Manual"),".\nIf you use Hive, you only need to make the following changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-2.3.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "hql"); // required codeType\n')),(0,a.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,a.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of Hive is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 -codeType jdbc -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"The specific usage can refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/linkiscli_manual"},"Linkis CLI Manual"),"."),(0,a.kt)("h3",{id:"33-how-to-use-scriptis"},"3.3 How to use Scriptis"),(0,a.kt)("p",null,"The use of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis")," is the simplest. You can directly enter Scriptis, right-click the directory and create a new hive script and write hivesql code."),(0,a.kt)("p",null,"The implementation of the hive engineConn is by instantiating the driver instance of hive, and then the driver submits the task, and obtains the result set and displays it."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(88386).Z,width:"1346",height:"796"})),(0,a.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of hql"),(0,a.kt)("h2",{id:"4-hive-engineconn-user-settings"},"4. Hive engineConn user settings"),(0,a.kt)("p",null,"In addition to the above engineConn configuration, users can also make custom settings, including the memory size of the hive Driver process, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(15941).Z,width:"1871",height:"506"})),(0,a.kt)("p",null,"Figure 4-1 User-defined configuration management console of hive"))}d.isMDXComponent=!0},15941:function(e,n,t){n.Z=t.p+"assets/images/hive-config-2b66a8f0e584c74ca526c56c784b7e54.png"},88386:function(e,n,t){n.Z=t.p+"assets/images/hive-run-f78d02eed672fb8f5387cddb2895b959.png"},82848:function(e,n,t){n.Z=t.p+"assets/images/queue-set-7c9c3c2db8e77ce7f948909adfd80398.png"}}]);