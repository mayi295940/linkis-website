"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[23988],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},33017:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Version Overview",sidebar_position:2},i=void 0,o={unversionedId:"about/release",id:"version-1.3.1/about/release",title:"Version Overview",description:"- Trino engine usage instructions",source:"@site/versioned_docs/version-1.3.1/about/release.md",sourceDirName:"about",slug:"/about/release",permalink:"/docs/latest/about/release",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/about/release.md",tags:[],version:"1.3.1",sidebarPosition:2,frontMatter:{title:"Version Overview",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/latest/about/introduction"},next:{title:"Recommended Configuration",permalink:"/docs/latest/about/configuration"}},u={},p=[{value:"Parameter changes",id:"parameter-changes",level:2},{value:"Database table changes",id:"database-table-changes",level:2}],s={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/engine-usage/trino"},"Trino engine usage instructions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/engine-usage/seatunnel"},"Seatunnel Engine Usage Instructions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/user-guide/control-panel/datasource-management"},"Linkis console multi-datasource management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/user-guide/datasource-manual"},"Multiple data sources usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/download/release-notes-1.3.1"},"Version Release-Notes"))),(0,r.kt)("h2",{id:"parameter-changes"},"Parameter changes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"module name (service name)"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"es-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8080"},"http://127.0.0.1:8080")),(0,r.kt)("td",{parentName:"tr",align:null},"Trino cluster connection URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.default.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"5000"),(0,r.kt)("td",{parentName:"tr",align:null},"limit on the number of result sets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.http.connectTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"connection timeout (seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.http.readTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"transmission timeout (seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.resultSet.cache.max"),(0,r.kt)("td",{parentName:"tr",align:null},"512k"),(0,r.kt)("td",{parentName:"tr",align:null},"result set buffer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.user"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.password"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.passwordCmd"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"password callback command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"system"),(0,r.kt)("td",{parentName:"tr",align:null},"Catalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.schema"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.insecured"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"verify SSL certificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of concurrent engines")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.key.store"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"keystore path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.keystore.password"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"keystore password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.keystore.type"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"keystore type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.truststore"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"truststore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ss..truststore.type"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"trustore type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-trino"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.trino.ssl.truststore.password"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"truststore password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ec-seatunnel"),(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.engine.seatunnel.plugin.home"),(0,r.kt)("td",{parentName:"tr",align:null},"/opt/linkis/seatunnel"),(0,r.kt)("td",{parentName:"tr",align:null},"Seatunnel installation path")))),(0,r.kt)("h2",{id:"database-table-changes"},"Database table changes"),(0,r.kt)("p",null,"For details, see the upgrade schema ",(0,r.kt)("inlineCode",{parentName:"p"},"db/upgrade/1.3.1_schema")," file in the corresponding branch of the code warehouse (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis"},"https://github.com/apache/linkis"),")"))}m.isMDXComponent=!0}}]);