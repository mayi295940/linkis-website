"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4544],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Task Submission And Execution Of JDBC API",sidebar_position:2},c="Task Submission And Execution Of JDBC API Documents",l={unversionedId:"api/jdbc_api",id:"version-1.0.2/api/jdbc_api",title:"Task Submission And Execution Of JDBC API",description:"1. Introduce Dependent Modules",source:"@site/versioned_docs/version-1.0.2/api/jdbc_api.md",sourceDirName:"api",slug:"/api/jdbc_api",permalink:"/docs/latest/api/jdbc_api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/api/jdbc_api.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"Task Submission And Execution Of JDBC API",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Login Api",permalink:"/docs/latest/api/login_api"},next:{title:"Task Submission and Execution Rest Api",permalink:"/docs/latest/api/linkis_task_operator"}},u=[{value:"1. Introduce Dependent Modules",id:"1-introduce-dependent-modules",children:[],level:3},{value:"Second, create a test category:",id:"second-create-a-test-category",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"task-submission-and-execution-of-jdbc-api-documents"},"Task Submission And Execution Of JDBC API Documents"),(0,i.kt)("h3",{id:"1-introduce-dependent-modules"},"1. Introduce Dependent Modules"),(0,i.kt)("p",null,"The first way depends on the JDBC module in the pom:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.webank.wedatasphere.linkis</groupId>\n    <artifactId>linkis-ujes-jdbc</artifactId>\n    <version>${linkis.version}</version>\n </dependency>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The module has not been deployed to the central repository. You need to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn install -Dmaven.test.skip=true")," in the ujes/jdbc directory for local installation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The second way is through packaging and compilation:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter the ujes/jdbc directory in the Linkis project and enter the command in the terminal to package ",(0,i.kt)("inlineCode",{parentName:"li"},"mvn assembly:assembly -Dmaven.test.skip=true"),"\nThe packaging instruction skips the running of the unit test and the compilation of the test code, and packages the dependencies required by the JDBC module into the Jar package.  "),(0,i.kt)("li",{parentName:"ol"},"After the packaging is complete, two Jar packages will be generated in the target directory of JDBC. The one with dependencies in the Jar package name is the Jar package we need.  ")),(0,i.kt)("h3",{id:"second-create-a-test-category"},"Second, create a test category:"),(0,i.kt)("p",null,"Establish a Java test class LinkisClientImplTestJ, the specific interface meaning can be seen in the notes:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' public static void main(String[] args) throws SQLException, ClassNotFoundException {\n\n        //1. Load driver class\uff1acom.webank.wedatasphere.linkis.ujes.jdbc.UJESSQLDriver\n        Class.forName("com.webank.wedatasphere.linkis.ujes.jdbc.UJESSQLDriver");\n\n        //2. Get connection\uff1ajdbc:linkis://gatewayIP:gatewayPort\n        //   the front-end account password\n        Connection connection =  DriverManager.getConnection("jdbc:linkis://127.0.0.1:9001","username","password");\n\n        //3. Create statement and execute query\n        Statement st= connection.createStatement();\n        ResultSet rs=st.executeQuery("show tables");\n        //4. Processing the returned results of the database (using the ResultSet class)\n        while (rs.next()) {\n            ResultSetMetaData metaData = rs.getMetaData();\n            for (int i = 1; i <= metaData.getColumnCount(); i++) {\n                System.out.print(metaData.getColumnName(i) + ":" +metaData.getColumnTypeName(i)+": "+ rs.getObject(i) + "    ");\n            }\n            System.out.println();\n        }\n        // close resourse\n        rs.close();\n        st.close();\n        connection.close();\n    }\n')))}d.isMDXComponent=!0}}]);