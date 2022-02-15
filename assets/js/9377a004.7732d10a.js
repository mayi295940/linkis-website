"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2815],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24389:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"Source Code Directory Structure",sidebar_position:5},u=void 0,s={unversionedId:"deployment/sourcecode_hierarchical_structure",id:"version-0.11.0/deployment/sourcecode_hierarchical_structure",isDocsHomePage:!1,title:"Source Code Directory Structure",description:"Linkis hierarchical directory structure explanation, if you want to detail Linkis, please check Linkis related architecture design documents",source:"@site/versioned_docs/version-0.11.0/deployment/sourcecode_hierarchical_structure.md",sourceDirName:"deployment",slug:"/deployment/sourcecode_hierarchical_structure",permalink:"/docs/0.11.0/deployment/sourcecode_hierarchical_structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/deployment/sourcecode_hierarchical_structure.md",tags:[],version:"0.11.0",sidebarPosition:5,frontMatter:{title:"Source Code Directory Structure",sidebar_position:5},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Install EngineConnPlugin Engine",permalink:"/docs/0.11.0/deployment/engine_conn_plugin_installation"},next:{title:"Use of 0.X SDK",permalink:"/docs/0.11.0/user_guide/X_sdk_manual"}},l=[],d={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linkis hierarchical directory structure explanation, if you want to detail Linkis, please check Linkis related architecture design documents")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\u251c\u2500assembly\n\u251c\u2500bin\n\u251c\u2500conf\n\u251c\u2500core //Core abstraction, which contains all common modules\n\u2502 \u251c\u2500cloudModule //Modules that must be introduced by microservices, embedded Jetty + WebSocket + SpringBoot + Jersey\n\u2502 \u251c\u2500cloudMybatis //Mybatis module of SpringCloud\n\u2502 \u251c\u2500cloudProtocol //General protocol, such as RPC communication between Entrance and Engine\n\u2502 \u251c\u2500cloudRPC //RPC module, complex two-way communication based on Feign implementation\n\u2502 \u251c\u2500common //Common module, built-in many common tools\n\u2502 \u251c\u2500httpclient //Java SDK top-level interface\n\u2502 \u2514\u2500scheduler //General scheduling module\n\u251c\u2500db //Database information\n\u251c\u2500docs //All documents\n\u251c\u2500eurekaServer //Eureka module\n\u251c\u2500extensions //plugin\n\u2502 \u2514\u2500spark-excel //spark supports excel to DF/DF to excel plug-in\n\u251c\u2500gateway //Gateway module\n\u2502 \u251c\u2500core //Gateway core implementation, including authentication/analysis/routing of front-end interfaces\n\u2502 \u251c\u2500gateway-httpclient-support //gateway support for Java SDK\n\u2502 \u251c\u2500gateway-ujes-support //Analysis and routing support for UJES interface\n\u2502 \u2514\u2500springcloudgateway //Introduce spring cloud gateway, front-end requests are intercepted from here\n\u251c\u2500publicService //public service\n\u2502 \u251c\u2500application //application module\n\u2502 \u251c\u2500bin\n\u2502 \u251c\u2500conf\n\u2502 \u251c\u2500configuration //Parameter module, get the engine parameters from here\n\u2502 \u251c\u2500database //Provide Hive metadata query service\n\u2502 \u251c\u2500query //Provide Job Manager and Job History\n\u2502 \u251c\u2500udf //UDF module\n\u2502 \u251c\u2500variable //User-defined variable module\n\u2502 \u2514\u2500workspace //Workspace module, manage user scripts\n\u251c\u2500resourceManager //Resource management service\n\u2502 \u251c\u2500resourcemanagerclient //resource management client\n\u2502 \u251c\u2500resourcemanagercommon //Common module\n\u2502 \u2514\u2500resourcemanagerserver //Resource management server\n\u251c\u2500storage //Unified storage service\n\u2502 \u251c\u2500pesIO //Remote storage service\n\u2502 \u2502 \u251c\u2500io-engine //The engine side of remote storage, which actually accesses the bottom storage side\n\u2502 \u2502 \u251c\u2500io-enginemanager //engineManger for remote storage\n\u2502 \u2502 \u2514\u2500io-entrance //Request entry for remote storage\n\u2502 \u2514\u2500storage //Unified external interface for unified storage\n\u2514\u2500ujes //Unified operation execution service\n\u2502 \u251c\u2500client //Java SDK, users can directly access Linkis through Client\n\u2502 \u251c\u2500definedEngines //Implemented engines\n\u2502 \u2502 \u251c\u2500hive //Hive engine\n\u2502 \u2502 \u2502 \u251c\u2500engine //The engine execution end of the actual docking with the underlying Hive\n\u2502 \u2502 \u2502 \u251c\u2500enginemanager\n\u2502 \u2502 \u2502 \u2514\u2500entrance\n\u2502 \u2502 \u251c\u2500pipeline //Import and export engine for mutual conduction between storage systems\n\u2502 \u2502 \u2502 \u251c\u2500engine\n\u2502 \u2502 \u2502 \u251c\u2500enginemanager\n\u2502 \u2502 \u2502 \u2514\u2500entrance\n\u2502 \u2502 \u251c\u2500python //stand-alone Python engine\n\u2502 \u2502 \u2502 \u251c\u2500engine //The engine execution end that actually docks with the underlying Python\n\u2502 \u2502 \u2502 \u251c\u2500enginemanager\n\u2502 \u2502 \u2502 \u2514\u2500entrance\n\u2502 \u2502 \u251c\u2500spark //spark engine\n\u2502 \u2502 \u2502 \u251c\u2500engine //The actual connection to the engine execution end of the underlying Spark\n\u2502 \u2502 \u2502 \u251c\u2500enginemanager\n\u2502 \u2502 \u2502 \u2514\u2500entrance\n\u2502 \u2502 \u2514\u2500tispark //TiSpark engine, actually docking with TiSpark engine\n\u2502 \u251c\u2500engine //General low-level engine module\n\u2502 \u251c\u2500enginemanager //General low-level enginemanager module\n\u2502 \u251c\u2500entrance //General low-level entrance module\n\u2502 \u2514\u2500entranceclient //Simplified version of entrance\n")))}p.isMDXComponent=!0}}]);