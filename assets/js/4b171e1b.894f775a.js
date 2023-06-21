"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[57725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"reduce base engine compatibility issues",sidebar_position:.2},o=void 0,s={unversionedId:"feature/base-engine-compatibilty",id:"feature/base-engine-compatibilty",title:"reduce base engine compatibility issues",description:"1. Requirement Background",source:"@site/docs/feature/base-engine-compatibilty.md",sourceDirName:"feature",slug:"/feature/base-engine-compatibilty",permalink:"/docs/1.4.0/feature/base-engine-compatibilty",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/feature/base-engine-compatibilty.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{title:"reduce base engine compatibility issues",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"Version Feature",permalink:"/docs/1.4.0/feature/overview"},next:{title:"Eureka reports version metadata",permalink:"/docs/1.4.0/feature/eureka-version-metadata"}},c={},p=[{value:"1. Requirement Background",id:"1-requirement-background",level:2},{value:"2. Instructions for use",id:"2-instructions-for-use",level:2},{value:"3. Precautions",id:"3-precautions",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-requirement-background"},"1. Requirement Background"),(0,a.kt)("p",null,"before we may need to modify linkis source code to fit different hive and spark version and compilation may fail for some certain versions, we need to reduce compilation and installation problems caused by base engine versions"),(0,a.kt)("h2",{id:"2-instructions-for-use"},"2. Instructions for use"),(0,a.kt)("p",null,"for different hive compilation, we only to compile with target hive versions, such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install package -Dhive.version=3.1.3\n\n")),(0,a.kt)("p",null,"for different spark compilation, we only to compile with target spark versions, here are normal scenes for usage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spark3+hadoop3\nmvn install package\n\nspark3+hadoop2\nmvn install package  -Phadoop-2.7\n\nspark2+hadoop2\nmvn install package -Pspark-2.4 -Phadoop-2.7\n\nspark2+ hadoop3\nmvn install package -Pspark-2.4\n\n")),(0,a.kt)("h2",{id:"3-precautions"},"3. Precautions"),(0,a.kt)("p",null,"spark subversion can be specified by -Dspark.version=xxx\nhadoop subversion can be specified by -Dhadoop.version=xxx"),(0,a.kt)("p",null,"for example :\nmvn install package -Pspark-3.2 -Phadoop-3.3 -Dspark.version=3.1.3"))}d.isMDXComponent=!0}}]);