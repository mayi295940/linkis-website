"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[83623],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},21762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"Basic Data Management",sidebar_position:8},i=void 0,c={unversionedId:"user-guide/control-panel/basicdata-management",id:"version-1.3.1/user-guide/control-panel/basicdata-management",title:"Basic Data Management",description:"The data source management page can manage data such as user tokens, error codes, extended resources, and engine materials.",source:"@site/versioned_docs/version-1.3.1/user-guide/control-panel/basicdata-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/basicdata-management",permalink:"/docs/latest/user-guide/control-panel/basicdata-management",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/user-guide/control-panel/basicdata-management.md",tags:[],version:"1.3.1",sidebarPosition:8,frontMatter:{title:"Basic Data Management",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Data Source Management",permalink:"/docs/latest/user-guide/control-panel/datasource-management"},next:{title:"UDF Function",permalink:"/docs/latest/user-guide/control-panel/udf-function"}},s={},l=[{value:"1. Token Management",id:"1-token-management",level:2},{value:"2. Error code management",id:"2-error-code-management",level:2},{value:"2.1 List of error codes",id:"21-list-of-error-codes",level:3},{value:"2.1 Common error code problem solving",id:"21-common-error-code-problem-solving",level:3},{value:"3. Extended resource management",id:"3-extended-resource-management",level:2},{value:"4. Engine material management",id:"4-engine-material-management",level:2}],d={toc:l};function m(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The data source management page can manage data such as user tokens, error codes, extended resources, and engine materials."),(0,a.kt)("h2",{id:"1-token-management"},"1. Token Management"),(0,a.kt)("p",null,"It is used to manage Token information of each application."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(26463).Z,width:"1259",height:"585"})),(0,a.kt)("h2",{id:"2-error-code-management"},"2. Error code management"),(0,a.kt)("h3",{id:"21-list-of-error-codes"},"2.1 List of error codes"),(0,a.kt)("p",null,"List error code information, you can query by error code or error description."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(72576).Z,width:"1259",height:"585"})),(0,a.kt)("h3",{id:"21-common-error-code-problem-solving"},"2.1 Common error code problem solving"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/latest/tuning-and-troubleshooting/error-guide/error-code"},"common error codes and how to deal with them")),(0,a.kt)("h2",{id:"3-extended-resource-management"},"3. Extended resource management"),(0,a.kt)("p",null,"Used to manage extended resources, such as yarn link url, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(32536).Z,width:"1259",height:"585"})),(0,a.kt)("h2",{id:"4-engine-material-management"},"4. Engine material management"),(0,a.kt)("p",null,"Used to manage Linkis engine materials, including creation, update and deletion of engine plugins."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(81084).Z,width:"1259",height:"585"})))}m.isMDXComponent=!0},81084:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/basic-bml-44640ba9469740396c0cf71099c66c39.png"},72576:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/basic-code-44640ba9469740396c0cf71099c66c39.png"},32536:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/basic-ext-44640ba9469740396c0cf71099c66c39.png"},26463:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/basic-token-44640ba9469740396c0cf71099c66c39.png"}}]);