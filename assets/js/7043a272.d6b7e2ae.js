"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[5980],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46345:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={title:"Quick Start",sidebar_position:2},c=void 0,l={unversionedId:"deployment/quick_start",id:"version-0.11.0/deployment/quick_start",title:"Quick Start",description:"Start script needs to be executed after installation",source:"@site/versioned_docs/version-0.11.0/deployment/quick_start.md",sourceDirName:"deployment",slug:"/deployment/quick_start",permalink:"/docs/0.11.0/deployment/quick_start",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/deployment/quick_start.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"Quick Start",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Quick Deployment",permalink:"/docs/0.11.0/deployment/quick_deploy"},next:{title:"Production Deployment Reference Guide",permalink:"/docs/0.11.0/deployment/production_deployment _guide"}},u=[{value:"1 Start Service",id:"1-start-service",children:[],level:2},{value:"2 View successful startup",id:"2-view-successful-startup",children:[],level:2},{value:"3 Quick Use Linkis",id:"3-quick-use-linkis",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Start script needs to be executed after installation")),(0,o.kt)("h2",{id:"1-start-service"},"1 Start Service"),(0,o.kt)("p",null,"Execute the following commands in the installation directory, start all services\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  ./bin/start-all.sh > start.log 2>start_error.log\n")),(0,o.kt)("h2",{id:"2-view-successful-startup"},"2 View successful startup"),(0,o.kt)("p",null,"You can view service startup success on the Eureka interface, see method\uff1a"),(0,o.kt)("p",null,"Use http://${EUREKA_INSTALL_IP}:${EUREKA_PORT}, open in browser, see whether the service was registered successfully."),(0,o.kt)("p",null,"If you do not specify in config.sh, EUREKA_INSTAL_IP_SPECIALL_IP, then HTTP address is\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:20303"},"http://127.0.0.1:20303")),(0,o.kt)("p",null,"As shown in the figure below, if the following microservices appear on your Eureka homepage, it means that the services have been started successfully and you can provide services to the outside world normally:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Eureka",src:r(57825).Z,width:"1920",height:"970"})),(0,o.kt)("h2",{id:"3-quick-use-linkis"},"3 Quick Use Linkis"),(0,o.kt)("p",null,"Please refer to",(0,o.kt)("a",{parentName:"p",href:"quick_deploy#5-%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8linkis"},"to quickly use Linkis")))}d.isMDXComponent=!0},57825:function(e,t,r){t.Z=r.p+"assets/images/Eureka_homepage-de09b1b756300a8b4878cfd9b547ea86.png"}}]);