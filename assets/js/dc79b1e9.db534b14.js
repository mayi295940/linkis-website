"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1689],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14119:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Asynchronous Pool Call",sidebar_position:3},l=void 0,c={unversionedId:"architecture/ujes/asynchronous_thread_pool",id:"version-0.11.0/architecture/ujes/asynchronous_thread_pool",title:"Asynchronous Pool Call",description:"How UJES implements full asynchronous thread pool calls",source:"@site/versioned_docs/version-0.11.0/architecture/ujes/asynchronous_thread_pool.md",sourceDirName:"architecture/ujes",slug:"/architecture/ujes/asynchronous_thread_pool",permalink:"/docs/0.11.0/architecture/ujes/asynchronous_thread_pool",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/ujes/asynchronous_thread_pool.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{title:"Asynchronous Pool Call",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Spark Engine File Import Export",permalink:"/docs/0.11.0/architecture/ujes/file_import_and_export_structure"},next:{title:"Compile And Package",permalink:"/docs/0.11.0/development/compile_and_package"}},u=[{value:"1 Full Asynchronous Thread Pool for Advantage",id:"1-full-asynchronous-thread-pool-for-advantage",children:[],level:2},{value:"2 How to Implement",id:"2-how-to-implement",children:[],level:2}],p={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"How UJES implements full asynchronous thread pool calls")),(0,a.kt)("h2",{id:"1-full-asynchronous-thread-pool-for-advantage"},"1 Full Asynchronous Thread Pool for Advantage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"5 Asynchronous Message Queue and Thread Pool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Job's thread less than 1 ms per occupation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can accept more than 10,000 + TPS permanent Jobs per entry"))),(0,a.kt)("h2",{id:"2-how-to-implement"},"2 How to Implement"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Full-asynchronous call thread pool",src:r(64059).Z,width:"646",height:"627"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"How can you improve the upper's request through?")),(0,a.kt)("p",{parentName:"li"},"Entrance WebSocket Processors, internalize a processing thread pool and handler queue to receive the top requests from Spring Cloud Gateway routes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"How to ensure that different users in different systems are segregated from one another?")),(0,a.kt)("p",{parentName:"li"},"Entrance Jobschedule, each user of each system has a dedicated thread to ensure isolation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"How to ensure job execution?")),(0,a.kt)("p",{parentName:"li"},"The Job Execution Pool is used only for the submission of Job, and once the Job is submitted to Engineering, the horse is placed in the Job's execution queue to ensure that each Job's occupation of the execution pool thread does not exceed 1 millisecond."),(0,a.kt)("p",{parentName:"li"},"The RPC requests the pool to receive and process engineered logs, progress, status and resultsets and to update the Job's information in real time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"How can Job's logs, progress, and status be pushed to the top of the system in real time?")),(0,a.kt)("p",{parentName:"li"},"WebSocket Send Pool, dedicated to processing Job's log, progress and state, and push information to the top system."))))}d.isMDXComponent=!0},64059:function(e,t,r){t.Z=r.p+"assets/images/fully_asynchronous_call_thread_pool-caf5167951b6d1ef3b43c22fd1493431.png"}}]);