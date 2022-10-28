"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[92017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},749:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Installation Package Directory Structure",sidebar_position:6.1},a=void 0,c={unversionedId:"deployment/unpack-hierarchical-structure",id:"deployment/unpack-hierarchical-structure",isDocsHomePage:!1,title:"Installation Package Directory Structure",description:"Download the officially released Compilation Complete Package, and the decompressed directory structure is as follows:",source:"@site/docs/deployment/unpack-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/unpack-hierarchical-structure",permalink:"/docs/1.3.0/deployment/unpack-hierarchical-structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/deployment/unpack-hierarchical-structure.md",tags:[],version:"current",sidebarPosition:6.1,frontMatter:{title:"Installation Package Directory Structure",sidebar_position:6.1},sidebar:"tutorialSidebar",previous:{title:"Source Code Directory Structure",permalink:"/docs/1.3.0/deployment/sourcecode-hierarchical-structure"},next:{title:"After Installation Directory Structure",permalink:"/docs/1.3.0/deployment/installation-hierarchical-structure"}},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Download the officially released ",(0,o.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/download/main"},"Compilation Complete Package"),", and the decompressed directory structure is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\n\u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 checkEnv.sh //deployment environment verification script\n\u2502 \u251c\u2500\u2500 common.sh\n\u2502 \u2514\u2500\u2500 install.sh //script to execute the installation\n\u251c\u2500\u2500 deploy-config\n\u2502 \u251c\u2500\u2500 db.sh //database connection configuration\n\u2502 \u2514\u2500\u2500 linkis-env.sh //related environment configuration information\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 licenses\n\u251c\u2500\u2500 linkis-package //microservice related startup configuration files, dependencies, scripts, linkis-cli, etc.\n\u2502 \u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 conf\n\u2502 \u251c\u2500\u2500 db\n\u2502 \u251c\u2500\u2500 lib\n\u2502 \u2514\u2500\u2500 sbin\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 README_CN.md\n\u2514\u2500\u2500 README.md\n\n")))}u.isMDXComponent=!0}}]);