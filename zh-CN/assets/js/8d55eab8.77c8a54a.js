"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[72131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",sidebar_position:4},i=void 0,a={unversionedId:"development/web-build",id:"version-1.0.2/development/web-build",title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",description:"1. \u5b89\u88c5Node.js",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/development/web-build.md",sourceDirName:"development",slug:"/development/web-build",permalink:"/zh-CN/docs/1.0.2/development/web-build",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.2/development/web-build.md",tags:[],version:"1.0.2",sidebarPosition:4,frontMatter:{title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",sidebar_position:4},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/1.0.2/development/new-engine-conn"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.2/upgrade/overview"}},p={},u=[{value:"1. \u5b89\u88c5Node.js",id:"1-\u5b89\u88c5nodejs",level:2},{value:"2. \u5b89\u88c5\u9879\u76ee",id:"2-\u5b89\u88c5\u9879\u76ee",level:2},{value:"3. \u914d\u7f6e",id:"3-\u914d\u7f6e",level:2},{value:"4. \u6253\u5305\u9879\u76ee",id:"4-\u6253\u5305\u9879\u76ee",level:2},{value:"5. \u8fd0\u884c\u9879\u76ee",id:"5-\u8fd0\u884c\u9879\u76ee",level:2},{value:"6.1 npm install\u65e0\u6cd5\u6210\u529f",id:"61-npm-install\u65e0\u6cd5\u6210\u529f",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u5b89\u88c5nodejs"},"1. \u5b89\u88c5Node.js"),(0,l.kt)("p",null,"\u5c06Node.js\u4e0b\u8f7d\u5230\u7535\u8111\u672c\u5730\uff0c\u5b89\u88c5\u5373\u53ef\u3002\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")," \uff08\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\uff09\n",(0,l.kt)("strong",{parentName:"p"},"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\u3002")),(0,l.kt)("h2",{id:"2-\u5b89\u88c5\u9879\u76ee"},"2. \u5b89\u88c5\u9879\u76ee"),(0,l.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone git@github.com:apache/incubator-linkis.git\ncd incubator-linkis/web\nnpm install\n")),(0,l.kt)("p",null,"\u6307\u4ee4\u7b80\u4ecb\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u9879\u76ee\u5305\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u5230\u7535\u8111\u672c\u5730"),(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u9879\u76eeWEB\u6839\u76ee\u5f55\uff1acd incubator-linkis/web"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u9879\u76ee\u6240\u9700\u4f9d\u8d56\uff1anpm install")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\u3002")),(0,l.kt)("h2",{id:"3-\u914d\u7f6e"},"3. \u914d\u7f6e"),(0,l.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u672c\u5730\u8fd0\u884c\u65f6\u6b64\u6b65\u9aa4\u53ef\u8df3\u8fc7")),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u5982\u540e\u7aef\u63a5\u53e3\u5730\u5740\u7b49\uff0c\u5982\u6839\u76ee\u5f55\u4e0b\u7684.env.development\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// \u540e\u7aef\u63a5\u53e3\u5730\u5740\nVUE_APP_MN_CONFIG_PREFIX=http://yourIp:yourPort/yourPath\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u7684\u5177\u4f53\u89e3\u91ca\u53ef\u53c2\u8003vue-cli\u5b98\u65b9\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E6%A8%A1%E5%BC%8F"},"\u73af\u5883\u53d8\u91cf\u548c\u6a21\u5f0f")),(0,l.kt)("h2",{id:"4-\u6253\u5305\u9879\u76ee"},"4. \u6253\u5305\u9879\u76ee"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u5bf9\u9879\u76ee\u8fdb\u884c\u6253\u5305\uff0c\u751f\u6210\u538b\u7f29\u540e\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run build\n")),(0,l.kt)("p",null,"\u8be5\u6307\u4ee4\u6210\u529f\u6267\u884c\u540e\uff0c\u9879\u76eeweb\u76ee\u5f55\u4e0b\u4f1a\u51fa\u73b0\u4e00\u4e2a \u201cdist\u201d \u7684\u6587\u4ef6\u5939\u53ca\u201c*-${getVersion()}-dist.zip\u201d\u538b\u7f29\u6587\u4ef6\uff0c\u76ee\u5f55dist/dist\u5373\u4e3a\u6253\u5305\u597d\u7684\u4ee3\u7801\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5c06\u8be5\u6587\u4ef6\u5939\u653e\u8fdb\u60a8\u7684\u9759\u6001\u670d\u52a1\u5668\u4e2d\uff0c\u6216\u8005\u53c2\u8003\u5b89\u88c5\u6587\u6863\uff0c\u4f7f\u7528\u811a\u672c\u8fdb\u884c\u90e8\u7f72\u5b89\u88c5\u3002"),(0,l.kt)("h2",{id:"5-\u8fd0\u884c\u9879\u76ee"},"5. \u8fd0\u884c\u9879\u76ee"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u672c\u5730\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\u8be5\u9879\u76ee\u5e76\u4e14\u6539\u52a8\u4ee3\u7801\u67e5\u770b\u6548\u679c\uff0c\u9700\u8981\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run serve\n")),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\uff08\u5efa\u8baeChrome\u6d4f\u89c8\u5668\uff09\u901a\u8fc7\u94fe\u63a5\u8bbf\u95ee\u5e94\u7528\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," .\n\u5f53\u60a8\u4f7f\u7528\u8be5\u65b9\u5f0f\u8fd0\u884c\u9879\u76ee\u65f6\uff0c\u60a8\u5bf9\u4ee3\u7801\u7684\u6539\u52a8\u4ea7\u751f\u7684\u6548\u679c\uff0c\u4f1a\u52a8\u6001\u4f53\u73b0\u5728\u6d4f\u89c8\u5668\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u56e0\u4e3a\u9879\u76ee\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u5f00\u53d1\uff0c\u6240\u4ee5\u5728\u672c\u5730\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\u65f6\uff0c\u9700\u8981\u5bf9\u6d4f\u89c8\u5668\u8fdb\u884c\u8bbe\u7f6e\u8de8\u57df\u624d\u80fd\u8bbf\u95ee\u540e\u7aef\u63a5\u53e3\uff0c\u5177\u4f53\u8bbe\u7f6e\u53ef\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"strong",href:"https://www.jianshu.com/p/56b1e01e6b6a"},"\u89e3\u51b3Chrome\u8de8\u57df\u95ee\u9898"))),(0,l.kt)("h3",{id:"61-npm-install\u65e0\u6cd5\u6210\u529f"},"6.1 npm install\u65e0\u6cd5\u6210\u529f"),(0,l.kt)("p",null,"\u5982\u679c\u9047\u5230\u8be5\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528\u56fd\u5185\u7684\u6dd8\u5b9dnpm\u955c\u50cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install -g cnpm --registry=https://registry.npm.taobao.org\n")),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u4ee3\u66ffnpm install\u6307\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cnpm install\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u9879\u76ee\u542f\u52a8\u548c\u6253\u5305\u65f6\uff0c\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528npm run build\u548cnpm run serve\u6307\u4ee4"))}c.isMDXComponent=!0}}]);