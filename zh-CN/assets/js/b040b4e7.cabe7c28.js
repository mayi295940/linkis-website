"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[98599],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||i;return n?l.createElement(m,r(r({ref:e},p),{},{components:n})):l.createElement(m,r({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56546:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const i={title:"SDK \u65b9\u5f0f",sidebar_position:3},r=void 0,s={unversionedId:"user-guide/sdk-manual",id:"user-guide/sdk-manual",title:"SDK \u65b9\u5f0f",description:"Linkis \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684JAVA\u548cSCALA\u8c03\u7528\u7684\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5f15\u5165linkis-computation-client\u7684\u6a21\u5757\u5c31\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\uff0c1.0\u540e\u65b0\u589e\u652f\u6301\u5e26Label\u63d0\u4ea4\u7684\u65b9\u5f0f\uff0c\u4e0b\u9762\u5c06\u5bf9 SDK \u4f7f\u7528\u65b9\u5f0f\u8fdb\u884c\u4ecb\u7ecd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/sdk-manual.md",sourceDirName:"user-guide",slug:"/user-guide/sdk-manual",permalink:"/zh-CN/docs/1.3.2/user-guide/sdk-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/sdk-manual.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SDK \u65b9\u5f0f",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Shell \u65b9\u5f0f",permalink:"/zh-CN/docs/1.3.2/user-guide/linkiscli-manual"},next:{title:"\u6570\u636e\u6e90\u529f\u80fd",permalink:"/zh-CN/docs/1.3.2/user-guide/datasource-manual"}},o={},u=[{value:"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757",id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757",level:2},{value:"2. Java\u6d4b\u8bd5\u4ee3\u7801",id:"2-java\u6d4b\u8bd5\u4ee3\u7801",level:2},{value:"3. Scala\u6d4b\u8bd5\u4ee3\u7801",id:"3-scala\u6d4b\u8bd5\u4ee3\u7801",level:2}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Linkis \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684JAVA\u548cSCALA\u8c03\u7528\u7684\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5f15\u5165linkis-computation-client\u7684\u6a21\u5757\u5c31\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\uff0c1.0\u540e\u65b0\u589e\u652f\u6301\u5e26Label\u63d0\u4ea4\u7684\u65b9\u5f0f\uff0c\u4e0b\u9762\u5c06\u5bf9 SDK \u4f7f\u7528\u65b9\u5f0f\u8fdb\u884c\u4ecb\u7ecd\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis \u652f\u6301\u7684\u5f15\u64ce\u7248\u672c\u53ca\u811a\u672c\u7c7b\u578b")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u5f15\u64ce\u63d2\u4ef6"),(0,a.kt)("th",null,"\u9ed8\u8ba4\u652f\u6301\u7684\u7248\u672c"),(0,a.kt)("th",null,"\u811a\u672c\u7c7b\u578b"),(0,a.kt)("th",null,"\u7c7b\u578b\u8bf4\u660e")),(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"3"},"Spark"),(0,a.kt)("th",{rowspan:"3"},"2.4.3"),(0,a.kt)("th",null,"py"),(0,a.kt)("th",null,"python\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"scala"),(0,a.kt)("th",null,"scala\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"sql"),(0,a.kt)("th",null,"sql\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Hive"),(0,a.kt)("th",null,"2.3.3"),(0,a.kt)("th",null,"hql"),(0,a.kt)("th",null,"hql\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Python"),(0,a.kt)("th",null,"python2"),(0,a.kt)("th",null,"python"),(0,a.kt)("th",null,"python\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Shell"),(0,a.kt)("th",null,"1"),(0,a.kt)("th",null,"shell"),(0,a.kt)("th",null,"shell\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"JDBC"),(0,a.kt)("th",null,"4"),(0,a.kt)("th",null,"jdbc"),(0,a.kt)("th",null,"sql\u811a\u672c\u540d")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Flink"),(0,a.kt)("th",null,"1.12.2"),(0,a.kt)("th",null,"sql"),(0,a.kt)("th",null,"sql\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"openLooKeng"),(0,a.kt)("th",null,"1.5.0"),(0,a.kt)("th",null,"sql"),(0,a.kt)("th",null,"sql\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Pipeline"),(0,a.kt)("th",null,"1"),(0,a.kt)("th",null,"pipeline"),(0,a.kt)("th",null,"\u6587\u4ef6\u5bfc\u5165\u5bfc\u51fa")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Presto"),(0,a.kt)("th",null,"0.234"),(0,a.kt)("th",null,"psql"),(0,a.kt)("th",null,"sql\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sqoop"),(0,a.kt)("th",null,"1.4.6"),(0,a.kt)("th",null,"appconn"),(0,a.kt)("th",null,"\u6587\u4ef6\u5bfc\u5165\u5bfc\u51fa")),(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"},"Elasticsearch"),(0,a.kt)("th",{rowspan:"2"},"7.6.2"),(0,a.kt)("th",null,"esjson"),(0,a.kt)("th",null,"json\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"essql"),(0,a.kt)("th",null,"sql\u811a\u672c")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"trino"),(0,a.kt)("th",null,"371"),(0,a.kt)("th",null,"tsql"),(0,a.kt)("th",null,"sql\u811a\u672c"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linkis \u5e38\u7528\u6807\u7b7e")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6807\u7b7e\u952e"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6807\u7b7e\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"engineType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"spark-2.4.3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5f15\u64ce\u7c7b\u578b\u548c\u7248\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userCreator"),(0,a.kt)("td",{parentName:"tr",align:"left"},'user + "-AppName"'),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8fd0\u884c\u7684\u7528\u6237\u548c\u60a8\u7684APPName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"codeType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"sql"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8fd0\u884c\u7684\u811a\u672c\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"jobRunningTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},"10"),(0,a.kt)("td",{parentName:"tr",align:"left"},"job\u8fd0\u884c10s\u6ca1\u5b8c\u6210\u81ea\u52a8\u53d1\u8d77Kill\uff0c\u5355\u4f4d\u4e3as")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"jobQueuingTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},"10"),(0,a.kt)("td",{parentName:"tr",align:"left"},"job\u6392\u961f\u8d85\u8fc710s\u6ca1\u5b8c\u6210\u81ea\u52a8\u53d1\u8d77Kill\uff0c\u5355\u4f4d\u4e3as")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"jobRetryTimeout"),(0,a.kt)("td",{parentName:"tr",align:"left"},"10000"),(0,a.kt)("td",{parentName:"tr",align:"left"},"job\u56e0\u4e3a\u8d44\u6e90\u7b49\u539f\u56e0\u5931\u8d25\u91cd\u8bd5\u7684\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams\uff0c\u5982\u679c\u56e0\u4e3a\u961f\u5217\u8d44\u6e90\u4e0d\u8db3\u7684\u5931\u8d25\uff0c\u4f1a\u9ed8\u8ba4\u6309\u95f4\u9694\u53d1\u8d7710\u6b21\u91cd\u8bd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tenant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"hduser02"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u79df\u6237\u6807\u7b7e\uff0c\u8bbe\u7f6e\u524d\u9700\u8981\u548cBDP\u6c9f\u901a\u9700\u8981\u5355\u72ec\u673a\u5668\u8fdb\u884c\u9694\u79bb\uff0c\u5219\u4efb\u52a1\u4f1a\u88ab\u8def\u7531\u5230\u5355\u72ec\u7684\u673a\u5668")))),(0,a.kt)("h2",{id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757"},"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>org.apache.linkis</groupId>\n  <artifactId>linkis-computation-client</artifactId>\n  <version>${linkis.version}</version>\n</dependency>\n\u5982\uff1a\n<dependency>\n  <groupId>org.apache.linkis</groupId>\n  <artifactId>linkis-computation-client</artifactId>\n  <version>1.0.3</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"2-java\u6d4b\u8bd5\u4ee3\u7801"},"2. Java\u6d4b\u8bd5\u4ee3\u7801"),(0,a.kt)("p",null,"\u5efa\u7acbJava\u7684\u6d4b\u8bd5\u7c7bLinkisClientTest\uff0c\u5177\u4f53\u63a5\u53e3\u542b\u4e49\u53ef\u4ee5\u89c1\u6ce8\u91ca\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test;\n\nimport org.apache.linkis.common.utils.Utils;\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfig;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant;\nimport org.apache.linkis.protocol.constants.TaskConstant;\nimport org.apache.linkis.ujes.client.UJESClient;\nimport org.apache.linkis.ujes.client.UJESClientImpl;\nimport org.apache.linkis.ujes.client.request.JobSubmitAction;\nimport org.apache.linkis.ujes.client.request.JobExecuteAction;\nimport org.apache.linkis.ujes.client.request.ResultSetAction;\nimport org.apache.linkis.ujes.client.response.*;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class LinkisClientTest {\n\n    // 1. build config: linkis gateway url\n    private static DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n            .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n            .connectionTimeout(30000)   //connectionTimeOut\n            .discoveryEnabled(false) //disable discovery\n            .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n            .loadbalancerEnabled(true)  // enable loadbalance\n            .maxConnectionSize(5)   // set max Connection\n            .retryEnabled(false) // set retry\n            .readTimeout(30000)  //set read timeout\n            .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n            .setAuthTokenKey("hadoop")  // set submit user\n            .setAuthTokenValue("123456")))  // set passwd or token (setAuthTokenValue("test"))\n            .setDWSVersion("v1") //linkis rest version v1\n            .build();\n\n    // 2. new Client(Linkis Client) by clientConfig\n    private static UJESClient client = new UJESClientImpl(clientConfig);\n\n    public static void main(String[] args) {\n\n        String user = "hadoop"; // \u7528\u6237\u9700\u8981\u548cAuthTokenKey\u7684\u503c\u4fdd\u6301\u4e00\u81f4\n        String executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n                "show(df)"; // code support:sql/hql/py/scala\n        try {\n\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            // 3. build job and execute\n            JobExecuteResult jobExecuteResult = toSubmit(user, executeCode);\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n            // 4. get job jonfo\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            int logFromLen = 0;\n            int logSize = 100;\n            while (!jobInfoResult.isCompleted()) {\n                // 5. get progress and log\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                System.out.println("progress: " + progress.getProgress());\n                JobLogResult logRes = client.log(jobExecuteResult, logFromLen, logSize);\n                logFromLen = logRes.fromLine();\n                // 0: info 1: warn 2: error 3: all\n                System.out.println(logRes.log().get(3));\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 6. Get the result set list (if the user submits multiple SQLs at a time,\n            // multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 7. get resultContent\n            ResultSetResult resultSetResult = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build());\n            System.out.println("metadata: " + resultSetResult.getMetadata()); // column name type\n            System.out.println("res: " + resultSetResult.getFileContent()); //row data\n        } catch (Exception e) {\n            e.printStackTrace();// please use log\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n\n\n    private static JobExecuteResult toSubmit(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName");// required execute user and creator eg:hadoop-IDE\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build jobSubmitAction\n        JobSubmitAction jobSubmitAction = JobSubmitAction.builder()\n                .addExecuteCode(code)\n                .setStartupParams(startupMap)\n                .setUser(user) //submit user\n                .addExecuteUser(user)  // execute user\n                .setLabels(labels)\n                .build();\n        // 3. to execute\n        return client.submit(jobSubmitAction);\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4e0a\u8ff0\u7684\u4ee3\u7801\u5373\u53ef\u4ee5\u5b8c\u6210\u4efb\u52a1\u63d0\u4ea4/\u6267\u884c/\u65e5\u5fd7/\u7ed3\u679c\u96c6\u83b7\u53d6\u7b49"),(0,a.kt)("h2",{id:"3-scala\u6d4b\u8bd5\u4ee3\u7801"},"3. Scala\u6d4b\u8bd5\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'package org.apache.linkis.client.test\n\nimport org.apache.commons.io.IOUtils\nimport org.apache.commons.lang3.StringUtils\nimport org.apache.linkis.common.utils.Utils\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant\nimport org.apache.linkis.ujes.client.request._\nimport org.apache.linkis.ujes.client.response._\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nobject LinkisClientTest {\n  // 1. build config: linkis gateway url\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://127.0.0.1:9001/") //set linkis-mg-gateway url: http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut\n    .discoveryEnabled(false) //disable discovery\n    .discoveryFrequency(1, TimeUnit.MINUTES) // discovery frequency\n    .loadbalancerEnabled(true) // enable loadbalance\n    .maxConnectionSize(5) // set max Connection\n    .retryEnabled(false) // set retry\n    .readTimeout(30000) //set read timeout\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authen suppory static and Token\n    .setAuthTokenKey("hadoop") // set submit user\n    .setAuthTokenValue("hadoop") // set passwd or token (setAuthTokenValue("BML-AUTH"))\n    .setDWSVersion("v1") //linkis rest version v1\n    .build();\n\n  // 2. new Client(Linkis Client) by clientConfig\n  val client = UJESClient(clientConfig)\n\n  def main(args: Array[String]): Unit = {\n    val user = "hadoop" // execute user \u7528\u6237\u9700\u8981\u548cAuthTokenKey\u7684\u503c\u4fdd\u6301\u4e00\u81f4\n    val executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n      "show(df)"; // code support:sql/hql/py/scala\n    try {\n      // 3. build job and execute\n      println("user : " + user + ", code : [" + executeCode + "]")\n      // \u63a8\u8350\u4f7f\u7528submit\uff0c\u652f\u6301\u4f20\u9012\u4efb\u52a1label\n      val jobExecuteResult = toSubmit(user, executeCode)\n      println("execId: " + jobExecuteResult.getExecID + ", taskId: " + jobExecuteResult.taskID)\n      // 4. get job jonfo\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      var logFromLen = 0\n      val logSize = 100\n      val sleepTimeMills: Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. get progress and log\n        val progress = client.progress(jobExecuteResult)\n        println("progress: " + progress.getProgress)\n        val logObj = client.log(jobExecuteResult, logFromLen, logSize)\n        logFromLen = logObj.fromLine\n        val logArray = logObj.getLog\n        // 0: info 1: warn 2: error 3: all\n        if (logArray != null && logArray.size >= 4 && StringUtils.isNotEmpty(logArray.get(3))) {\n          println(s"log: ${logArray.get(3)}")\n        }\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: " + jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the result set list (if the user submits multiple SQLs at a time,\n      // multiple result sets will be generated)\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 7. get resultContent\n      val resultSetResult: ResultSetResult = client.resultSet(ResultSetAction.builder.setPath(oneResultSet).setUser(jobExecuteResult.getUser).build)\n      println("metadata: " + resultSetResult.getMetadata) // column name type\n      println("res: " + resultSetResult.getFileContent) //row data\n    } catch {\n      case e: Exception => {\n        e.printStackTrace() //please use log\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n\n  def toSubmit(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n    labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n    labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName"); // \u8bf7\u6c42\u7684\u7528\u6237\u548c\u5e94\u7528\u540d\uff0c\u4e24\u4e2a\u53c2\u6570\u90fd\u4e0d\u80fd\u5c11\uff0c\u5176\u4e2dAPPName\u4e0d\u80fd\u5e26\u6709"-"\u5efa\u8bae\u66ff\u6362\u4e3a"_"\n    labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // \u6307\u5b9a\u811a\u672c\u7c7b\u578b\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2);\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "default");\n    // 2. build jobSubmitAction\n    val jobSubmitAction = JobSubmitAction.builder\n      .addExecuteCode(code)\n      .setStartupParams(startupMap)\n      .setUser(user) //submit user\n      .addExecuteUser(user) //execute user\n      .setLabels(labels)\n      .build\n    // 3. to execute\n    client.submit(jobSubmitAction)\n  }\n}\n')))}c.isMDXComponent=!0}}]);