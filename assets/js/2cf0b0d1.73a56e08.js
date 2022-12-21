"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||a;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={title:"Compile And Package",sidebar_position:1},r=void 0,l={unversionedId:"development/linkis-compile-and-package",id:"version-1.2.0/development/linkis-compile-and-package",title:"Compile And Package",description:"1. Preparation",source:"@site/versioned_docs/version-1.2.0/development/linkis-compile-and-package.md",sourceDirName:"development",slug:"/development/linkis-compile-and-package",permalink:"/docs/1.2.0/development/linkis-compile-and-package",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/development/linkis-compile-and-package.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{title:"Compile And Package",sidebar_position:1},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Service Isolation Design",permalink:"/docs/1.2.0/architecture/microservice-governance-services/service_isolation"},next:{title:"Introduction to Linkis Configuration Parameters",permalink:"/docs/1.2.0/development/linkis-config"}},s={},p=[{value:"1. Preparation",id:"1-preparation",level:2},{value:"1.1 Source code acquisition",id:"11-source-code-acquisition",level:3},{value:'<font color="red">1.2 Modify dependency configuration</font>',id:"12-modify-dependency-configuration",level:3},{value:"2. Fully compile Linkis",id:"2-fully-compile-linkis",level:2},{value:"step1 Compile for the first time (not the first time you can skip this step)",id:"step1-compile-for-the-first-time-not-the-first-time-you-can-skip-this-step",level:3},{value:"step2 Execute compilation",id:"step2-execute-compilation",level:3},{value:"step3 Obtain the installation package",id:"step3-obtain-the-installation-package",level:3},{value:"3. Compile a single module",id:"3-compile-a-single-module",level:2},{value:"step1 Compile for the first time (skip this step for non-first time)",id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time",level:3},{value:"step2 Enter the corresponding module to compile",id:"step2-enter-the-corresponding-module-to-compile",level:3},{value:"step3 Obtain the installation package",id:"step3-obtain-the-installation-package-1",level:3},{value:"4. Compile an engine",id:"4-compile-an-engine",level:2},{value:"step1 Compile for the first time (skip this step for non-first time)",id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time-1",level:3},{value:"step2 Enter the corresponding module to compile",id:"step2-enter-the-corresponding-module-to-compile-1",level:3},{value:"step3 Obtain the installation package",id:"step3-obtain-the-installation-package-2",level:3},{value:"5. How to modify the Hadoop, Hive, and Spark versions that Linkis depends on",id:"5-how-to-modify-the-hadoop-hive-and-spark-versions-that-linkis-depends-on",level:2},{value:"5.1 How to modify the Hadoop version that Linkis depends on",id:"51-how-to-modify-the-hadoop-version-that-linkis-depends-on",level:3},{value:"5.2 How to modify the Spark and Hive versions that Linkis depends on",id:"52-how-to-modify-the-spark-and-hive-versions-that-linkis-depends-on",level:3},{value:"6. How to exclude the specified engines during fully compile",id:"6-how-to-exclude-the-specified-engines-during-fully-compile",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-preparation"},"1. Preparation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Environment requirements:")," Version of JDK must be higher then ",(0,o.kt)("strong",{parentName:"p"},"JDK8"),",  ",(0,o.kt)("strong",{parentName:"p"},"Oracle/Sun")," and ",(0,o.kt)("strong",{parentName:"p"},"OpenJDK")," are both supported."),(0,o.kt)("p",null,"After obtaining the project code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"github repository")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),", use maven to compile the project installation package."),(0,o.kt)("h3",{id:"11-source-code-acquisition"},"1.1 Source code acquisition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Method 1: Obtain the source code of the project from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis"},"github repository")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),"."),(0,o.kt)("li",{parentName:"ul"},"Method 2: Download the source code package of the required version from the ",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"linkis official download page")," ",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"https://linkis.apache.org/download/main"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice")," : The official recommended versions for compiling Linkis are hadoop-2.7.2, hive-1.2.1, spark-2.4.3, and Scala-2.11.12."),(0,o.kt)("p",null,"If you want to compile Linkis with another version of Hadoop, Hive, Spark, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"#5-how-to-modify-the-hadoop-hive-and-spark-versions-that-linkis-depends-on"},"How to Modify Linkis dependency of Hadoop, Hive, Spark")),(0,o.kt)("h3",{id:"12-modify-dependency-configuration"},(0,o.kt)("font",{color:"red"},"1.2 Modify dependency configuration")),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Because the mysql-connector-java driver is under the GPL2.0 agreement and does not meet the license policy of the Apache open source agreement, starting from version 1.0.3, the scope of the dependency on mysql-connector-java is test by default. If you compile by yourself , You can modify the scope scope that the mysql-connector-java of the top-level pom.xml depends on (just comment it out)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>mysql</groupId>\n     <artifactId>mysql-connector-java</artifactId>\n     <version>${mysql.connector.version}</version>\n     \x3c!--<scope>test</scope>--\x3e\n</dependency>\n")),(0,o.kt)("h2",{id:"2-fully-compile-linkis"},"2. Fully compile Linkis"),(0,o.kt)("h3",{id:"step1-compile-for-the-first-time-not-the-first-time-you-can-skip-this-step"},"step1 Compile for the first time (not the first time you can skip this step)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you are compiling and using it locally for the first time, you must first execute the following command in the root directory of the Linkis source code package"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N install\n")),(0,o.kt)("h3",{id:"step2-execute-compilation"},"step2 Execute compilation"),(0,o.kt)("p",null,"Execute the following commands in the root directory of the Linkis source code package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn clean install\n\n")),(0,o.kt)("h3",{id:"step3-obtain-the-installation-package"},"step3 Obtain the installation package"),(0,o.kt)("p",null,"The compiled complete installation package is in the linkis-dist->target directory of the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    #Detailed path is as follows\n    incubator-linkis-x.x.x/linkis-dist/target/apache-linkis-x.x.x-incubating-bin.tar.gz\n")),(0,o.kt)("h2",{id:"3-compile-a-single-module"},"3. Compile a single module"),(0,o.kt)("h3",{id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time"},"step1 Compile for the first time (skip this step for non-first time)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you are compiling and using it locally for the first time, you must first execute the following command in the root directory of the Linkis source code package"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N install\n")),(0,o.kt)("h3",{id:"step2-enter-the-corresponding-module-to-compile"},"step2 Enter the corresponding module to compile"),(0,o.kt)("p",null,"Enter the corresponding module to compile, for example, if you want to recompile Entrance, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x/linkis-computation-governance/linkis-entrance\n    mvn clean install\n")),(0,o.kt)("h3",{id:"step3-obtain-the-installation-package-1"},"step3 Obtain the installation package"),(0,o.kt)("p",null,"Get the installation package, there will be a compiled package in the ->target directory of the corresponding module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    incubator-linkis-x.x.x/linkis-computation-governance/linkis-entrance/target/linkis-entrance.x.x.x.jar\n")),(0,o.kt)("h2",{id:"4-compile-an-engine"},"4. Compile an engine"),(0,o.kt)("p",null,"Here's an example of the Spark engine that builds Linkis:"),(0,o.kt)("h3",{id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time-1"},"step1 Compile for the first time (skip this step for non-first time)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you are using it locally for the first time, you must first execute the following command in the root directory of the Linkis source code package"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N install\n")),(0,o.kt)("h3",{id:"step2-enter-the-corresponding-module-to-compile-1"},"step2 Enter the corresponding module to compile"),(0,o.kt)("p",null,"Enter the directory where the Spark engine is located to compile and package, the command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x/linkis-engineconn-pluginsspark\n    mvn clean install\n")),(0,o.kt)("h3",{id:"step3-obtain-the-installation-package-2"},"step3 Obtain the installation package"),(0,o.kt)("p",null,"Get the installation package, there will be a compiled package in the ->target directory of the corresponding module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"   incubator-linkis-x.x.x/linkis-engineconn-pluginsspark/target/linkis-engineplugin-spark-x.x.x.jar\n")),(0,o.kt)("p",null,"How to install Spark engine separately? Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"Linkis Engine Plugin Installation Document")),(0,o.kt)("h2",{id:"5-how-to-modify-the-hadoop-hive-and-spark-versions-that-linkis-depends-on"},"5. How to modify the Hadoop, Hive, and Spark versions that Linkis depends on"),(0,o.kt)("p",null,"Please note: Hadoop is a big data basic service, Linkis must rely on Hadoop for compilation;\nIf you don't want to use an engine, you don't need to set the version of the engine or compile the engine plug-in."),(0,o.kt)("p",null,"Specifically, the version of Hadoop can be modified in a different way than Spark, Hive, and other computing engines, as described below:"),(0,o.kt)("h3",{id:"51-how-to-modify-the-hadoop-version-that-linkis-depends-on"},"5.1 How to modify the Hadoop version that Linkis depends on"),(0,o.kt)("p",null,"Enter the source package root directory of Linkis, and manually modify the Hadoop version information of the pom.xml file, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    vim pom.xml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <hadoop.version>2.7.2</hadoop.version> \x3c!--\x3e Modify the Hadoop version number here <--\x3e\n        <scala.version>2.11.12</scala.version>\n        <jdk.compile.version>1.8</jdk.compile.version>\n              \n    </properties>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note: If your hadoop version is hadoop3, you need to modify the pom file of linkis-hadoop-common"),"\nBecause under hadoop2.8, hdfs-related classes are in the hadoop-hdfs module, but in hadoop 3.X the corresponding classes are moved to the module hadoop-hdfs-client, you need to modify this file:\npom:Linkis/linkis-commons/linkis-hadoop-common/pom.xml\nModify the dependency hadoop-hdfs to hadoop-hdfs-client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs</artifactId> \x3c!-- Just replace this line with <artifactId>hadoop-hdfs-client</artifactId>--\x3e\n        <version>${hadoop.version}</version>\n</dependency>\n Modify hadoop-hdfs to:\n <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs-client</artifactId>\n        <version>${hadoop.version}</version>\n</dependency>\n")),(0,o.kt)("h3",{id:"52-how-to-modify-the-spark-and-hive-versions-that-linkis-depends-on"},"5.2 How to modify the Spark and Hive versions that Linkis depends on"),(0,o.kt)("p",null,"Here's an example of changing the version of Spark. Go to the directory where the Spark engine is located and manually modify the Spark version information of the pom.xml file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x/linkis-engineconn-pluginsspark\n    vim pom.xml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n        <spark.version>2.4.3</spark.version> \x3c!--\x3e Modify the Spark version number here <--\x3e\n    </properties>\n")),(0,o.kt)("p",null,"Modifying the version of other engines is similar to modifying the Spark version. First, enter the directory where the relevant engine is located, and manually modify the engine version information in the pom.xml file."),(0,o.kt)("p",null,"Then please refer to ",(0,o.kt)("a",{parentName:"p",href:"#4-compile-an-engine"},"4. Compile an engine")),(0,o.kt)("h2",{id:"6-how-to-exclude-the-specified-engines-during-fully-compile"},"6. How to exclude the specified engines during fully compile"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-pl")," option of ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn")," command, please refer below for details"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-pl,--projects <arg>                   Comma-delimited list of specified\n                                        reactor projects to build instead\n                                        of all projects. A project can be\n                                        specified by [groupId]:artifactId\n                                        or by its relative path.\n")),(0,o.kt)("p",null,"Implement the reverse selection by using ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," to exclude the given engines so that shorten the consumed time for fully compile.\nHere we take flink, sqoop and hive as an example, and exclude them during fully compile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn clean install -Dmaven.test.skip=true \\\n-pl '!linkis-engineconn-plugins/flink,!linkis-engineconn-plugins/sqoop,!linkis-engineconn-plugins/hive'\n")))}d.isMDXComponent=!0}}]);