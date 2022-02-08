"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3495],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),p=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(k,l(l({ref:n},c),{},{components:r})):t.createElement(k,l({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2030:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var t=r(87462),i=r(63366),a=(r(67294),r(3905)),l=["components"],s={title:"\u5355\u4e2a\u670d\u52a1\u7684\u5b89\u88c5",sidebar_position:1},o=void 0,p={unversionedId:"development/install-server",id:"version-0.11.0/development/install-server",title:"\u5355\u4e2a\u670d\u52a1\u7684\u5b89\u88c5",description:"1 \u83b7\u53d6\u5b89\u88c5\u5305\u5e76\u5b89\u88c5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/install-server.md",sourceDirName:"development",slug:"/development/install-server",permalink:"/zh-CN/docs/0.11.0/development/install-server",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/install-server.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u5b89\u88c5",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Linkis \u7f16\u8bd1\u6253\u5305",permalink:"/zh-CN/docs/0.11.0/development/compile_and_package"},next:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",permalink:"/zh-CN/docs/0.11.0/development/start-server"}},c=[{value:"1 \u83b7\u53d6\u5b89\u88c5\u5305\u5e76\u5b89\u88c5",id:"1-\u83b7\u53d6\u5b89\u88c5\u5305\u5e76\u5b89\u88c5",children:[],level:2},{value:"2 \u4fee\u6539\u914d\u7f6e",id:"2-\u4fee\u6539\u914d\u7f6e",children:[{value:"2.1 \u4fee\u6539application.yml",id:"21-\u4fee\u6539applicationyml",children:[],level:3},{value:"2.2 \u4fee\u6539linkis.properties",id:"22-\u4fee\u6539linkisproperties",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u83b7\u53d6\u5b89\u88c5\u5305\u5e76\u5b89\u88c5"},"1 \u83b7\u53d6\u5b89\u88c5\u5305\u5e76\u5b89\u88c5"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u901a\u8fc7\u5728\u6211\u4eec\u7684release\u5b89\u88c5\u5305\u91cc\u62ff\u5230\u5bf9\u5e94\u6a21\u5757\u7684\u5b89\u88c5\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," ## 1. \u89e3\u538b\u5b89\u88c5\u5305\ntar -xvzf wedatasphere-linkis-0.11.0-dist.tar.gz \ncd wedatasphere-linkis-0.11.0-dist \n ## 2. \u9009\u62e9\u5bf9\u5e94\u7684\u670d\u52a1\u5b89\u88c5\u5305,\u5230\u5bf9\u5e94\u7684\u5b89\u88c5\u76ee\u5f55\uff1a$SERVER_HOME\ncp wedatasphere-linkis-0.11.0-dist/share/linkis/linkis-publicservice/linkis-publicservice.zip  $SERVER_HOME\n ## 3. \u62f7\u8d1d\u5b89\u88c5\u5305\u5230\u5bf9\u5e94\u7684\u5b89\u88c5\u76ee\u5f55\u6bd4\u5982\uff1apublicservice  \u9700\u8981\u62f7\u8d1d linkis-publicservice.zip\n ##    \u89e3\u538b\u5bf9\u5e94\u7684\u670d\u52a1\nunzip $SERVERNAME.zip \n ## 4. module\u5305\u662f\u516c\u5171\u5305\uff0c\u9664\u4e86gateway\u548cEureka\u4e0d\u9700\u8981\u5176\u4ed6\u7684\u90fd\u9700\u8981\u62f7\u8d1d\ncp ${workDir}/share/linkis/module/module.zip $SERVER_HOME\n ## 5. \u89e3\u538bmodule\u5305\ncd $SERVER_HOME/;unzip  module.zip > /dev/null;\n ## 6. \u62f7\u8d1d\u76f8\u5e94\u7684\u5b89\u88c5\u5305\ncp module/lib/*  $SERVER_HOME/$SERVERNAME/lib/\n\n")),(0,a.kt)("h2",{id:"2-\u4fee\u6539\u914d\u7f6e"},"2 \u4fee\u6539\u914d\u7f6e"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\u5305\u51c6\u5907\u597d\u4e86\u540e\uff0c\u5c31\u662f\u4fee\u6539\u914d\u7f6e\uff0c\u914d\u7f6e\u4e3b\u8981\u4fee\u6539application.yml\u548clinkis.properties\uff0c\u914d\u7f6e\u90fd\u5728conf\u76ee\u5f55\u4e0b\u9762"),(0,a.kt)("h3",{id:"21-\u4fee\u6539applicationyml"},"2.1 \u4fee\u6539application.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: $SERVER_PORT   #\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u53e3\neureka:\n  client:\n    serviceUrl:\n      defaultZone: $EUREKA_URL #\u5bf9\u5e94\u7684 EUREKA\u5730\u5740\n")),(0,a.kt)("h3",{id:"22-\u4fee\u6539linkisproperties"},"2.2 \u4fee\u6539linkis.properties"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u670d\u52a1\u7684linkis.properties\u4fee\u6539\u90fd\u4e0d\u4e00\u6837\uff0c\u73b0\u5728\u628a\u6240\u6709\u7684\u670d\u52a1\u5217\u5230\u4e0b\u9762\u5e76\u8fdb\u884c\u89e3\u91ca\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GateWay:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    wds.linkis.ldap.proxy.url=$LDAP_URL  #LDAP \u5730\u5740\uff0c\u767b\u5f55\u9700\u8981\n    wds.linkis.ldap.proxy.baseDN=$LDAP_BASEDN\n    wds.linkis.gateway.admin.user=$deployUser #\u90e8\u7f72\u7528\u6237\uff0c\u4f5c\u4e3a\u7ba1\u7406\u5458\u7684\u7528\u6237\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PublicService\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    ##\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\n    wds.linkis.server.mybatis.datasource.url=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}?characterEncoding=UTF-8\n    wds.linkis.server.mybatis.datasource.username=$MYSQL_USER\n    wds.linkis.server.mybatis.datasource.password=$MYSQL_PASSWORD\n    \n    wds.linkis.workspace.filesystem.localuserrootpath=$WORKSPACE_USER_ROOT_PATH ##\u5de5\u4f5c\u7a7a\u95f4\u76ee\u5f55\n    wds.linkis.workspace.filesystem.hdfsuserrootpath.prefix=$HDFS_USER_ROOT_PATH ##HDFS\u7684\u7528\u6237\u6839\u76ee\u5f55\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linkis-Database")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    ##\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\n    wds.linkis.server.mybatis.datasource.url=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}?characterEncoding=UTF-8\n    wds.linkis.server.mybatis.datasource.username=$MYSQL_USER\n    wds.linkis.server.mybatis.datasource.password=$MYSQL_PASSWORD\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ResourceManager")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    ##\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\n    wds.linkis.server.mybatis.datasource.url=jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}?characterEncoding=UTF-8\n    wds.linkis.server.mybatis.datasource.username=$MYSQL_USER\n    wds.linkis.server.mybatis.datasource.password=$MYSQL_PASSWORD\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entrance\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    wds.linkis.entrance.config.logPath=$WORKSPACE_USER_ROOT_PATH\n    wds.linkis.resultSet.store.path=$HDFS_USER_ROOT_PATH\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EngineManager:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    ##\u7528\u6237\u5207\u6362\u811a\u672c\n    wds.linkis.enginemanager.sudo.script=$SERVER_HOME/$SERVERNAME/bin/rootScript.sh \n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SparkEngineManager\u989d\u5916\u52a0\u7684\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"    ## \u914d\u7f6eengine\u7684jar\n    wds.linkis.enginemanager.core.jar=$SERVER_HOME/$SERVERNAME/lib/linkis-ujes-spark-engine-version.jar\n    ##\u914d\u7f6emain jar\n    wds.linkis.spark.driver.conf.mainjar=$SERVER_HOME/$SERVERNAME/conf:$SERVER_HOME/$SERVERNAME/lib/* \n")))}d.isMDXComponent=!0}}]);