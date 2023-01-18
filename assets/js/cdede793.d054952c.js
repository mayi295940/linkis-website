"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[15206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Involve Knife4j",sidebar_position:5.2},o=void 0,s={unversionedId:"deployment/integrated/involve-knife4j",id:"version-1.3.1/deployment/integrated/involve-knife4j",title:"Involve Knife4j",description:"1.Knife4j introduced",source:"@site/versioned_docs/version-1.3.1/deployment/integrated/involve-knife4j.md",sourceDirName:"deployment/integrated",slug:"/deployment/integrated/involve-knife4j",permalink:"/docs/latest/deployment/integrated/involve-knife4j",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/deployment/integrated/involve-knife4j.md",tags:[],version:"1.3.1",sidebarPosition:5.2,frontMatter:{title:"Involve Knife4j",sidebar_position:5.2},sidebar:"tutorialSidebar",previous:{title:"Involve Prometheus",permalink:"/docs/latest/deployment/integrated/involve-prometheus"},next:{title:"Session Supports Redis Shared Storage",permalink:"/docs/latest/deployment/integrated/sso-with-redis"}},l={},p=[{value:"1.Knife4j introduced",id:"1knife4j-introduced",level:2},{value:"2.Linkis integrates knif4j",id:"2linkis-integrates-knif4j",level:2},{value:"2.1 Start knif4j in test mode",id:"21-start-knif4j-in-test-mode",level:3},{value:"2.2 Start knif4j in normal mode",id:"22-start-knif4j-in-normal-mode",level:3},{value:"3.Go to the Knife4j page",id:"3go-to-the-knife4j-page",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1knife4j-introduced"},"1.Knife4j introduced"),(0,r.kt)("p",null,"knife4j is an enhanced solution for generating API documentation for the Java MVC framework integration Swapper, formerly known as swagger-bootstrap-ui, named knife4j in the hope that it will be as small, lightweight, and powerful as a dagger! Its underlying layer is the encapsulation of Springfox, which is used in the same way as Springfox, but the interface document UI is optimized."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Core functionality\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Document Description: According to the specification of Swagger, the description of the interface document is listed in detail, including the interface address, type, request example, request parameter, response example, response parameter, response code and other information, and the use of the interface is clear at a glance."),(0,r.kt)("li",{parentName:"ul"},"Online debugging: Provides the powerful function of online interface joint debugging, automatically parses the current interface parameters, and includes form verification, and the call parameters can return the interface response content, headers, response time, response status codes and other information to help developers debug online.")),(0,r.kt)("h2",{id:"2linkis-integrates-knif4j"},"2.Linkis integrates knif4j"),(0,r.kt)("h3",{id:"21-start-knif4j-in-test-mode"},"2.1 Start knif4j in test mode"),(0,r.kt)("p",null,"Modify the application-linkis.yml file setting to knife4j.production=false"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"knife4j:\n  enable: true\n  production: false\n")),(0,r.kt)("p",null,"Modify the linkis.properties file to open test mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.test.mode=true\nwds.linkis.test.user=hadoop\n")),(0,r.kt)("p",null,"After restarting all services, you can access the knife4j page via http://ip:port/api/rest_j/v1/doc .html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http://ip:port/api/rest_j/v1/doc.html \n")),(0,r.kt)("h3",{id:"22-start-knif4j-in-normal-mode"},"2.2 Start knif4j in normal mode"),(0,r.kt)("p",null,"Modify the application-linkis.yml file setting to knife4j.production=false"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"knife4j:\n  enable: true\n  production: false\n")),(0,r.kt)("p",null,"Modify the linkis.properties file to add wds.linkis.server.user.restful.uri.pass.auth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.server.user.restful.uri.pass.auth=/api/rest_j/v1/doc.html,/api/rest_j/v1/swagger-resources,/api/rest_j/v1/webjars,/api/rest_j/v1/v2/api-docs\n")),(0,r.kt)("p",null,"After restarting all services, you can access the knife4j page via http://ip:port/api/rest_j/v1/doc .html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http://ip:port/api/rest_j/v1/doc.html \n")),(0,r.kt)("p",null,"Since identity authentication is required when knife4j debugs each interface, the following cookie information needs to be manually added to the browser."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#User login ticket-id\nbdp-user-ticket-id=\n#Workspace ID\nworkspaceId=\n#Internal request switch\ndataworkcloud_inner_request=true\n")),(0,r.kt)("p",null,"Take the Chrome browser as an example\n",(0,r.kt)("img",{src:n(37913).Z,width:"2548",height:"1361"})),(0,r.kt)("h2",{id:"3go-to-the-knife4j-page"},"3.Go to the Knife4j page"),(0,r.kt)("p",null,"Access knife4j page via http://ip:port/api/rest_j/v1/doc.html\n",(0,r.kt)("img",{src:n(4744).Z,width:"2546",height:"1355"}),"\nClick the interface name to display detailed interface documentation\n",(0,r.kt)("img",{src:n(97376).Z,width:"2560",height:"1362"}),'\nClick "Debug" and enter parameters to debug the interface\n',(0,r.kt)("img",{src:n(62740).Z,width:"2560",height:"1362"})),(0,r.kt)("p",null,"For detailed usage guidelines, please visit the knife4j official website to view:",(0,r.kt)("a",{parentName:"p",href:"https://doc.xiaominfo.com/knife4j/"},"https://doc.xiaominfo.com/knife4j/")))}d.isMDXComponent=!0},37913:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Knife4j_addcookie-4e3b5b6fd1a992cd6ea0f7f8faf6be40.png"},62740:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Knife4j_debug-521c5873cc58c458ea67e065c0174225.png"},4744:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Knife4j_home-7d4279e2ce931c3a0919d9a3b2b5bf56.png"},97376:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Knife4j_interface-521c5873cc58c458ea67e065c0174225.png"}}]);