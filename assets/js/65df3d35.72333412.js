"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4643],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Overview",sidebar_position:0},p=void 0,s={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Overview",description:"1. Document description",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/1.1.0/api/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/api/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Flink Engine Usage",permalink:"/docs/1.1.0/engine_usage/flink"},next:{title:"Login Api",permalink:"/docs/1.1.0/api/login_api"}},u=[{value:"1. Document description",id:"1-document-description",children:[]}],l={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-document-description"},"1. Document description"),(0,o.kt)("p",null,"Linkis1.0 has been refactored and optimized on the basis of Linkix0.x, and it is also compatible with the 0.x interface. However, in order to prevent compatibility problems when using version 1.0, you need to read the following documents carefully:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When using Linkis1.0 for customized development, you need to use Linkis's authorization authentication interface. Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/login_api"},"Login API Document")," carefully.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis1.0 provides a JDBC interface. You need to use JDBC to access Linkis. Please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/jdbc_api"},"Task Submit and Execute JDBC API Document"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Linkis1.0 provides the Rest interface. If you need to develop upper-level applications on the basis of Linkis, please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/linkis_task_operator"},"Task Submit and Execute Rest API Document"),"."))))}d.isMDXComponent=!0}}]);