"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return n?l.createElement(g,r(r({ref:t},p),{},{components:n})):l.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=n(87462),i=(n(67294),n(3905));const a={title:"Linkis SDK Manual",sidebar_position:3},r=void 0,s={unversionedId:"user-guide/sdk-manual",id:"user-guide/sdk-manual",title:"Linkis SDK Manual",description:"Linkis provides a convenient interface for JAVA and SCALA calls. You only need to import the linkis-computation-client module to use it. After 1.0, it supports the method of submitting with Label. The following will introduce the way to use the SDK.",source:"@site/docs/user-guide/sdk-manual.md",sourceDirName:"user-guide",slug:"/user-guide/sdk-manual",permalink:"/docs/1.4.0/user-guide/sdk-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/user-guide/sdk-manual.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Linkis SDK Manual",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Shell Scripts Manual",permalink:"/docs/1.4.0/user-guide/linkiscli-manual"},next:{title:"Data Source Manual",permalink:"/docs/1.4.0/user-guide/datasource-manual"}},o={},u=[{value:"1. Import dependent modules",id:"1-import-dependent-modules",level:2},{value:"2. Java test code",id:"2-java-test-code",level:2},{value:"3. Scala test code",id:"3-scala-test-code",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for JAVA and SCALA calls. You only need to import the linkis-computation-client module to use it. After 1.0, it supports the method of submitting with Label. The following will introduce the way to use the SDK.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engine version and script type supported by Linkis")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Engine plugin"),(0,i.kt)("th",null,"Default supported versions"),(0,i.kt)("th",null,"Script type"),(0,i.kt)("th",null,"Type Description")),(0,i.kt)("tr",null,(0,i.kt)("th",{rowspan:"3"},"Spark"),(0,i.kt)("th",{rowspan:"3"},"2.4.3"),(0,i.kt)("th",null,"py"),(0,i.kt)("th",null,"python script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"scala"),(0,i.kt)("th",null,"scala script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"sql"),(0,i.kt)("th",null,"sql script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Hive"),(0,i.kt)("th",null,"2.3.3"),(0,i.kt)("th",null,"hql"),(0,i.kt)("th",null,"hql script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Python"),(0,i.kt)("th",null,"python2"),(0,i.kt)("th",null,"python"),(0,i.kt)("th",null,"python script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Shell"),(0,i.kt)("th",null,"1"),(0,i.kt)("th",null,"shell"),(0,i.kt)("th",null,"shell script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"JDBC"),(0,i.kt)("th",null,"4"),(0,i.kt)("th",null,"jdbc"),(0,i.kt)("th",null,"sql script name")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Flink"),(0,i.kt)("th",null,"1.12.2"),(0,i.kt)("th",null,"sql"),(0,i.kt)("th",null,"sql script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"openLooKeng"),(0,i.kt)("th",null,"1.5.0"),(0,i.kt)("th",null,"sql"),(0,i.kt)("th",null,"sql script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Pipeline"),(0,i.kt)("th",null,"1"),(0,i.kt)("th",null,"pipeline"),(0,i.kt)("th",null,"File import and export")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Presto"),(0,i.kt)("th",null,"0.234"),(0,i.kt)("th",null,"psql"),(0,i.kt)("th",null,"sql script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Sqoop"),(0,i.kt)("th",null,"1.4.6"),(0,i.kt)("th",null,"appconn"),(0,i.kt)("th",null,"File import and export")),(0,i.kt)("tr",null,(0,i.kt)("th",{rowspan:"2"},"Elasticsearch"),(0,i.kt)("th",{rowspan:"2"},"7.6.2"),(0,i.kt)("th",null,"esjson"),(0,i.kt)("th",null,"json script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"essql"),(0,i.kt)("th",null,"sql script")),(0,i.kt)("tr",null,(0,i.kt)("th",null,"trino"),(0,i.kt)("th",null,"371"),(0,i.kt)("th",null,"tsql"),(0,i.kt)("th",null,"sql script"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linkis common label")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"label key"),(0,i.kt)("th",{parentName:"tr",align:"left"},"label value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"engineType"),(0,i.kt)("td",{parentName:"tr",align:"left"},"spark-2.4.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the engine type and version")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"userCreator"),(0,i.kt)("td",{parentName:"tr",align:"left"},'user + "-AppName"'),(0,i.kt)("td",{parentName:"tr",align:"left"},"the running user and your AppName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"codeType"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sql"),(0,i.kt)("td",{parentName:"tr",align:"left"},"script type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"jobRunningTimeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the job does not finish for 10s, it will automatically initiate Kill. The unit is s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"jobQueuingTimeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the job queue exceeds 10s and fails to complete, Kill will be automatically initiated. The unit is s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"jobRetryTimeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The waiting time for a job to fail due to resources or other reasons is ms. If a job fails due to insufficient queue resources, the retry is initiated 10 times by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tenant"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hduser02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tenant label")))),(0,i.kt)("h2",{id:"1-import-dependent-modules"},"1. Import dependent modules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>org.apache.linkis</groupId>\n  <artifactId>linkis-computation-client</artifactId>\n  <version>${linkis.version}</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"2-java-test-code"},"2. Java test code"),(0,i.kt)("p",null,"Create a Java test class LinkisClientTest, the specific interface meaning can be found in the notes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test;\n\nimport org.apache.linkis.common.utils.Utils;\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfig;\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant;\nimport org.apache.linkis.protocol.constants.TaskConstant;\nimport org.apache.linkis.ujes.client.UJESClient;\nimport org.apache.linkis.ujes.client.UJESClientImpl;\nimport org.apache.linkis.ujes.client.request.JobSubmitAction;\nimport org.apache.linkis.ujes.client.request.JobExecuteAction;\nimport org.apache.linkis.ujes.client.request.ResultSetAction;\nimport org.apache.linkis.ujes.client.response.*;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class LinkisClientTest {\n\n    // 1. build config: linkis gateway url\n    private static DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n            .addServerUrl("http://127.0.0.1:9001/")   //set linkis-mg-gateway url: http://{ip}:{port}\n            .connectionTimeout(30000)   //connectionTimeOut\n            .discoveryEnabled(false) //disable discovery\n            .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n            .loadbalancerEnabled(true)  // enable loadbalance\n            .maxConnectionSize(5)   // set max Connection\n            .retryEnabled(false) // set retry\n            .readTimeout(30000)  //set read timeout\n            .setAuthenticationStrategy(new StaticAuthenticationStrategy())   //AuthenticationStrategy Linkis authen suppory static and Token\n            .setAuthTokenKey("hadoop")  // set submit user\n            .setAuthTokenValue("123456")))  // set passwd or token (setAuthTokenValue("test"))\n            .setDWSVersion("v1") //linkis rest version v1\n            .build();\n\n    // 2. new Client(Linkis Client) by clientConfig\n    private static UJESClient client = new UJESClientImpl(clientConfig);\n\n    public static void main(String[] args) {\n        // The user needs to be consistent with the value of AuthTokenKey\n        String user = "hadoop"; \n        String executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n                "show(df)"; // code support:sql/hql/py/scala\n        try {\n\n            System.out.println("user : " + user + ", code : [" + executeCode + "]");\n            // 3. build job and execute\n            JobExecuteResult jobExecuteResult = toSubmit(user, executeCode);\n            System.out.println("execId: " + jobExecuteResult.getExecID() + ", taskId: " + jobExecuteResult.taskID());\n            // 4. get job info\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            int logFromLen = 0;\n            int logSize = 100;\n            while (!jobInfoResult.isCompleted()) {\n                // 5. get progress and log\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                System.out.println("progress: " + progress.getProgress());\n                JobLogResult logRes = client.log(jobExecuteResult, logFromLen, logSize);\n                logFromLen = logRes.fromLine();\n                // 0: info 1: warn 2: error 3: all\n                System.out.println(logRes.log().get(3));\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 6. Get the result set list (if the user submits multiple SQLs at a time,\n            // multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 7. get resultContent\n            ResultSetResult resultSetResult = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build());\n            System.out.println("metadata: " + resultSetResult.getMetadata()); // column name type\n            System.out.println("res: " + resultSetResult.getFileContent()); //row data\n        } catch (Exception e) {\n            e.printStackTrace();// please use log\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n\n\n    private static JobExecuteResult toSubmit(String user, String code) {\n        // 1. build  params\n        // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName");// required execute user and creator eg:hadoop-IDE\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // required codeType\n        // set start up map :engineConn start params\n        Map<String, Object> startupMap = new HashMap<String, Object>(16);\n        // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n        startupMap.put("spark.executor.instances", 2);\n        // setting linkis params\n        startupMap.put("wds.linkis.rm.yarnqueue", "dws");\n\n        // 2. build jobSubmitAction\n        JobSubmitAction jobSubmitAction = JobSubmitAction.builder()\n                .addExecuteCode(code)\n                .setStartupParams(startupMap)\n                .setUser(user) //submit user\n                .addExecuteUser(user)  // execute user\n                .setLabels(labels) .\n                .build();\n        // 3. to execute\n        return client.submit(jobSubmitAction);\n    }\n}\n')),(0,i.kt)("p",null,"Run the above code to complete task submission/execution/log/result set acquisition, etc."),(0,i.kt)("h2",{id:"3-scala-test-code"},"3. Scala test code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.client.test\n\nimport org.apache.commons.io.IOUtils\nimport org.apache.commons.lang3.StringUtils\nimport org.apache.linkis.common.utils.Utils\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport org.apache.linkis.manager.label.constant.LabelKeyConstant\nimport org.apache.linkis.ujes.client.request._\nimport org.apache.linkis.ujes.client.response._\n\nimport java.util\nimport java.util.concurrent.TimeUnit\n\nobject LinkisClientTest {\n  // 1. build config: linkis gateway url\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addServerUrl("http://127.0.0.1:9001/") //set linkis-mg-gateway url: http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut\n    .discoveryEnabled(false) //disable discovery\n    .discoveryFrequency(1, TimeUnit.MINUTES) // discovery frequency\n    .loadbalancerEnabled(true) // enable loadbalance\n    .maxConnectionSize(5) // set max Connection\n    .retryEnabled(false) // set retry\n    .readTimeout(30000) //set read timeout\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authen suppory static and Token\n    .setAuthTokenKey("hadoop") // set submit user\n    .setAuthTokenValue("hadoop") // set passwd or token (setAuthTokenValue("BML-AUTH"))\n    .setDWSVersion("v1") //link rest version v1\n    .build();\n\n  // 2. new Client(Linkis Client) by clientConfig\n  val client = UJESClient(clientConfig)\n\n  def main(args: Array[String]): Unit = {\n    val user = "hadoop" // execute user user needs to be consistent with the value of AuthTokenKey\n    val executeCode = "df=spark.sql(\\"show tables\\")\\n" +\n      "show(df)"; // code support:sql/hql/py/scala\n    try {\n      // 3. build job and execute\n      println("user : " + user + ", code : [" + executeCode + "]")\n      // It is recommended to use submit, which supports the transfer of task labels\n      val jobExecuteResult = toSubmit(user, executeCode)\n      println("execId: " + jobExecuteResult.getExecID + ", taskId: " + jobExecuteResult.taskID)\n      // 4. get job info\n      var jobInfoResult = client.getJobInfo(jobExecuteResult)\n      where logFromLen = 0\n      val logSize = 100\n      val sleepTimeMills: Int = 1000\n      while (!jobInfoResult.isCompleted) {\n        // 5. get progress and log\n        val progress = client.progress(jobExecuteResult)\n        println("progress: " + progress.getProgress)\n        val logObj = client.log(jobExecuteResult, logFromLen, logSize)\n        logFromLen = logObj.fromLine\n        val logArray = logObj.getLog\n        // 0: info 1: warn 2: error 3: all\n        if (logArray != null && logArray.size >= 4 && StringUtils.isNotEmpty(logArray.get(3))) {\n          println(s"log: ${logArray.get(3)}")\n        }\n        Utils.sleepQuietly(sleepTimeMills)\n        jobInfoResult = client.getJobInfo(jobExecuteResult)\n      }\n      if (!jobInfoResult.isSucceed) {\n        println("Failed to execute job: " + jobInfoResult.getMessage)\n        throw new Exception(jobInfoResult.getMessage)\n      }\n\n      // 6. Get the result set list (if the user submits multiple SQLs at a time,\n      // multiple result sets will be generated)\n      val jobInfo = client.getJobInfo(jobExecuteResult)\n      val resultSetList = jobInfoResult.getResultSetList(client)\n      println("All result set list:")\n      resultSetList.foreach(println)\n      val oneResultSet = jobInfo.getResultSetList(client).head\n      // 7. get resultContent\n      val resultSetResult: ResultSetResult = client.resultSet(ResultSetAction.builder.setPath(oneResultSet).setUser(jobExecuteResult.getUser).build)\n      println("metadata: " + resultSetResult.getMetadata) // column name type\n      println("res: " + resultSetResult.getFileContent) //row data\n    } catch {\n      case e: Exception => {\n        e.printStackTrace() //please use log\n      }\n    }\n    IOUtils.closeQuietly(client)\n  }\n\n\n  def toSubmit(user: String, code: String): JobExecuteResult = {\n    // 1. build  params\n    // set label map :EngineTypeLabel/UserCreatorLabel/EngineRunTypeLabel/Tenant\n    val labels: util.Map[String, Any] = new util.HashMap[String, Any]\n    labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "spark-2.4.3"); // required engineType Label\n    labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, user + "-APPName"); // The requested user and application name, both parameters must be missing, where APPName cannot contain "-", it is recommended to replace it with "_"\n    labels.put(LabelKeyConstant.CODE_TYPE_KEY, "py"); // specify the script type\n\n    val startupMap = new java.util.HashMap[String, Any]()\n    // Support setting engine native parameters,For example: parameters of engines such as spark/hive\n    startupMap.put("spark.executor.instances", 2);\n    // setting linkis params\n    startupMap.put("wds.linkis.rm.yarnqueue", "default");\n    // 2. build jobSubmitAction\n    val jobSubmitAction = JobSubmitAction.builder\n      .addExecuteCode(code)\n      .setStartupParams(startupMap)\n      .setUser(user) //submit user\n      .addExecuteUser(user) //execute user\n      .setLabels(labels) .\n      .build\n    // 3. to execute\n    client.submit(jobSubmitAction)\n  }\n}\n')))}d.isMDXComponent=!0}}]);