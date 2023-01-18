"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[20387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(h,c(c({ref:t},l),{},{components:r})):a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Data Source Management Service Architecture",sidebar_position:6},c=void 0,o={unversionedId:"architecture/feature/public-enhancement-services/metadata-manager",id:"version-1.3.1/architecture/feature/public-enhancement-services/metadata-manager",title:"Data Source Management Service Architecture",description:"Background",source:"@site/versioned_docs/version-1.3.1/architecture/feature/public-enhancement-services/metadata-manager.md",sourceDirName:"architecture/feature/public-enhancement-services",slug:"/architecture/feature/public-enhancement-services/metadata-manager",permalink:"/docs/latest/architecture/feature/public-enhancement-services/metadata-manager",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/architecture/feature/public-enhancement-services/metadata-manager.md",tags:[],version:"1.3.1",sidebarPosition:6,frontMatter:{title:"Data Source Management Service Architecture",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data Source Management Service Architecture",permalink:"/docs/latest/architecture/feature/public-enhancement-services/datasource-manager"},next:{title:"Directory Structure",permalink:"/docs/latest/development/directory-structure"}},s={},u=[{value:"Background",id:"background",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2},{value:"Architecture Description",id:"architecture-description",level:2},{value:"Core Process",id:"core-process",level:3}],l={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Exchangis0.x and Linkis0.x in earlier versions both have integrated data source modules. In order to manage the ability to reuse data sources, Linkis reconstructs the data source module based on linkis-datasource (refer to related documents), and converts the data source Management is unpacked into data source management services and metadata management services."),(0,n.kt)("p",null,"This article mainly involves the MetaData Manager Server data source management service, which provides the following functions:"),(0,n.kt)("p",null,"1\uff09\u3001Linkis unified management service startup and deployment, does not increase operation and maintenance costs, and reuses Linkis service capabilities;"),(0,n.kt)("p",null,"2\uff09\u3001The service is stateless and deployed in multiple instances to achieve high service availability. When the system is deployed, multiple instances can be deployed. Each instance provides services independently to the outside world without interfering with each other. All information is stored in the database for sharing."),(0,n.kt)("p",null,"3\uff09\u3001Provides full life cycle management of data sources, including new, query, update, test, and expiration management."),(0,n.kt)("p",null,"4\uff09\u3001Multi-version data source management, historical data sources will be saved in the database, and data source expiration management is provided."),(0,n.kt)("p",null,"5\uff09\u3001The Restful interface provides functions, a detailed list: database information query, database table information query, database table parameter information query, and data partition information query."),(0,n.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data Source Architecture Diagram",src:r(72030).Z,width:"960",height:"720"})),(0,n.kt)("h2",{id:"architecture-description"},"Architecture Description"),(0,n.kt)("p",null,"1\u3001The service is registered in the Linkis-Eureak-Service service and managed in a unified manner with other Linkis microservices. The client can obtain the data source management service by connecting the Linkis-GateWay-Service service and the service name metamanager."),(0,n.kt)("p",null,"2\u3001The interface layer provides database\\table\\partition information query to other applications through the Restful interface;"),(0,n.kt)("p",null,"3\u3001In the Service layer, the data source type is obtained in the data source management service through the data source ID number, and the specific supported services are obtained through the type. The first supported service is mysql\\es\\kafka\\hive;"),(0,n.kt)("h3",{id:"core-process"},"Core Process"),(0,n.kt)("p",null,"1\u3001 The client enters the specified data source ID and obtains information through the restful interface. For example, to query the database list with the data source ID of 1, the url is ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<meta-server-url>/metadatamanager/dbs/1"),"\uff0c"),(0,n.kt)("p",null,"2\u3001 According to the data source ID, access the data source service ",(0,n.kt)("inlineCode",{parentName:"p"},"<data-source-manager>")," through RPC to obtain the data source type;"),(0,n.kt)("p",null,"3\u3001 According to the data source type, load the corresponding Service service ","[hive\\es\\kafka\\mysql]",", perform the corresponding operation, and then return;"))}d.isMDXComponent=!0},72030:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/meta-server-0230822d3e0ff3bc846635bfe4d62b94.png"}}]);