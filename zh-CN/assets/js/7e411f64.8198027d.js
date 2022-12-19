"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[33987],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>u});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},_=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),_=s(i),u=a,y=_["".concat(p,".").concat(u)]||_[u]||d[u]||o;return i?t.createElement(y,l(l({ref:n},c),{},{components:i})):t.createElement(y,l({ref:n},c))}));function u(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=_;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=i[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}_.displayName="MDXCreateElement"},72792:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var t=i(87462),a=(i(67294),i(3905));const o={title:"Python",sidebar_position:3},l=void 0,r={unversionedId:"engine-usage/python",id:"engine-usage/python",isDocsHomePage:!1,title:"Python",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0c Python \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/python.md",sourceDirName:"engine-usage",slug:"/engine-usage/python",permalink:"/zh-CN/docs/1.3.1/engine-usage/python",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/python.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Python",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hive",permalink:"/zh-CN/docs/1.3.1/engine-usage/hive"},next:{title:"Shell",permalink:"/zh-CN/docs/1.3.1/engine-usage/shell"}},p=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",children:[{value:"1.1 \u73af\u5883\u5b89\u88c5",id:"11-\u73af\u5883\u5b89\u88c5",children:[]},{value:"1.2 \u73af\u5883\u9a8c\u8bc1",id:"12-\u73af\u5883\u9a8c\u8bc1",children:[]}]},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 \u9ed8\u8ba4\u5f15\u64ce",id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce",children:[]},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",children:[]},{value:"3.2 \u901a\u8fc7 <code>Linkis SDK</code> \u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1",children:[]}]},{value:"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",children:[{value:"4.1 \u914d\u7f6e\u4fee\u6539",id:"41-\u914d\u7f6e\u4fee\u6539",children:[]},{value:"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",children:[]}]}],s={toc:p};function c(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,a.kt)("h3",{id:"11-\u73af\u5883\u5b89\u88c5"},"1.1 \u73af\u5883\u5b89\u88c5"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u7528\u6237\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," \u4e2d\u662f\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u7684\u6267\u884c\u76ee\u5f55\u548c\u6267\u884c\u6743\u9650\u3002"),(0,a.kt)("h3",{id:"12-\u73af\u5883\u9a8c\u8bc1"},"1.2 \u73af\u5883\u9a8c\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python --version\n")),(0,a.kt)("p",null,"\u6b63\u5e38\u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u7248\u672c\u4fe1\u606f\u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u73af\u5883\u53ef\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Python 3.6.0\n")),(0,a.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5-\u9ed8\u8ba4\u5f15\u64ce"},"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"h2",href:"/zh-CN/docs/1.3.1/engine-usage/overview"},"\u9ed8\u8ba4\u5f15\u64ce")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u53d1\u5e03\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u4e2d\u9ed8\u8ba4\u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u5f15\u64ce\u63d2\u4ef6\uff0c\u7528\u6237\u65e0\u9700\u989d\u5916\u5b89\u88c5\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,a.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType python-python2 \\\n-codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"\u66f4\u591a ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/linkiscli-manual"},"Linkis-Cli \u4f7f\u7528")),(0,a.kt)("h3",{id:"32-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis SDK")," \u63d0\u4ea4\u4efb\u52a1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Scala")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK")," \u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1\u3002 \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/sdk-manual"},"JAVA SDK Manual"),"\u3002\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnType")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeType")," \u53c2\u6570\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "python-python2"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "python"); // required codeType \n')),(0,a.kt)("h2",{id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("h3",{id:"41-\u914d\u7f6e\u4fee\u6539"},"4.1 \u914d\u7f6e\u4fee\u6539"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u5f15\u64ce\u63d2\u4ef6\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Python3")," \uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u66f4\u6539\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b8c\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u7248\u672c\u7684\u5207\u6362\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u7684\u5f15\u64ce\u7248\u672c\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," \u5f15\u64ce\u652f\u6301\u591a\u79cd\u914d\u7f6e\u4fee\u6539\u65b9\u5f0f\uff0c\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\u3002"),(0,a.kt)("h4",{id:"411-\u901a\u8fc7\u547d\u4ee4\u53c2\u6570\u663e\u793a\u6307\u5b9a\u4ec5\u5f53\u524d\u547d\u4ee4\u751f\u6548"},"4.1.1 \u901a\u8fc7\u547d\u4ee4\u53c2\u6570\u663e\u793a\u6307\u5b9a\uff08\u4ec5\u5f53\u524d\u547d\u4ee4\u751f\u6548\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#1\uff1acli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\u8fdb\u884c\u7248\u672c\u5207\u6362,\u547d\u4ee4\u672b\u7aef\u8bbe\u7f6e\u7248\u672c python.version=python3 (python3\uff1a\u521b\u5efa\u8f6f\u8fde\u63a5\u65f6\u751f\u6210\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\u547d\u540d)\nsh ./bin/linkis-cli -engineType python-python2 \\\n-codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop  \\\n-confMap  python.version=python3\n\n#2\uff1acli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\u8fdb\u884c\u7248\u672c\u5207\u6362,\u547d\u4ee4\u8bbe\u7f6e\u52a0\u5165\u7248\u672c\u8def\u5f84 python.version=/usr/bin/python (/usr/bin/python\uff1a\u521b\u5efa\u8f6f\u8fde\u63a5\u65f6\u751f\u6210\u6587\u4ef6\u7684\u8def\u5f84)\nsh ./bin/linkis-cli -engineType python-python2 \\\n-codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop  \\\n-confMap  python.version=/usr/bin/python\n\n')),(0,a.kt)("h4",{id:"412-\u7ba1\u7406\u53f0\u914d\u7f6e"},"4.1.2 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(78199).Z})),(0,a.kt)("p",null,"\u6ce8\u610f: \u4fee\u6539IDE\u6807\u7b7e\u4e0b\u7684\u914d\u7f6e\u540e\u9700\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," \u624d\u4f1a\u751f\u6548\uff08\u5176\u5b83\u6807\u7b7e\u7c7b\u4f3c\uff09\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -creator IDE -engineType \\\npython-python2 -codeType python -code "print(\\"hello\\")"  \\\n-submitUser hadoop -proxyUser hadoop  \\\n-confMap  python.version=python3\n')),(0,a.kt)("h4",{id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "print(\\"hello\\")", "runType":  "python"},\n    "params": {\n                "variable": {},\n                "configuration": {\n                        "runtime": {\n                                "python.version":"python2",\n                                "wds.linkis.engineconn.max.free.time":"1h"\n                        }\n                }\n        },\n    "labels": {\n        "engineType": "python-python2",\n        "userCreator": "IDE"\n    }\n}\n')),(0,a.kt)("h4",{id:"423-\u6587\u4ef6\u914d\u7f6e"},"4.2.3 \u6587\u4ef6\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7\u4fee\u6539\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/lib/linkis-engineconn-plugins/python/dist/vpython2/conf/")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-engineconn.properties")," \u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(16682).Z})),(0,a.kt)("h3",{id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"},"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u662f\u901a\u8fc7\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u6240\u6d89\u53ca\u7684\u6570\u636e\u8868\u4fe1\u606f\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1apython-python2\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,a.kt)("p",null,"\u8868\u4e2d\u4e0e\u5f15\u64ce\u76f8\u5173\u7684\u521d\u59cb\u6570\u636e\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @PYTHON_LABEL=\"python-python2\";\nSET @PYTHON_ALL=CONCAT('*-*,',@PYTHON_LABEL);\nSET @PYTHON_IDE=CONCAT('*-IDE,',@PYTHON_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PYTHON_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @PYTHON_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @PYTHON_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.client.memory.max', '\u53d6\u503c\u8303\u56f4\uff1a1-100\uff0c\u5355\u4f4d\uff1aG', 'python\u9a71\u52a8\u5668\u5185\u5b58\u4f7f\u7528\u4e0a\u9650', '20G', 'Regex', '^([1-9]\\\\d{0,1}|100)(G|g)$', '0', '0', '1', '\u961f\u5217\u8d44\u6e90', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.client.core.max', '\u53d6\u503c\u8303\u56f4\uff1a1-128\uff0c\u5355\u4f4d\uff1a\u4e2a', 'python\u9a71\u52a8\u5668\u6838\u5fc3\u4e2a\u6570\u4e0a\u9650', '10', 'Regex', '^(?:[1-9]\\\\d?|[1234]\\\\d{2}|128)$', '0', '0', '1', '\u961f\u5217\u8d44\u6e90', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.rm.instance', '\u8303\u56f4\uff1a1-20\uff0c\u5355\u4f4d\uff1a\u4e2a', 'python\u5f15\u64ce\u6700\u5927\u5e76\u53d1\u6570', '10', 'NumInterval', '[1,20]', '0', '0', '1', '\u961f\u5217\u8d44\u6e90', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.java.driver.memory', '\u53d6\u503c\u8303\u56f4\uff1a1-2\uff0c\u5355\u4f4d\uff1aG', 'python\u5f15\u64ce\u521d\u59cb\u5316\u5185\u5b58\u5927\u5c0f', '1g', 'Regex', '^([1-2])(G|g)$', '0', '0', '1', 'python\u5f15\u64ce\u8bbe\u7f6e', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('python.version', '\u53d6\u503c\u8303\u56f4\uff1apython2,python3', 'python\u7248\u672c','python2', 'OFT', '[\\\"python3\\\",\\\"python2\\\"]', '0', '0', '1', 'python\u5f15\u64ce\u8bbe\u7f6e', 'python');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.engineconn.max.free.time', '\u53d6\u503c\u8303\u56f4\uff1a3m,15m,30m,1h,2h', '\u5f15\u64ce\u7a7a\u95f2\u9000\u51fa\u65f6\u95f4','1h', 'OFT', '[\\\"1h\\\",\\\"2h\\\",\\\"30m\\\",\\\"15m\\\",\\\"3m\\\"]', '0', '0', '1', 'python\u5f15\u64ce\u8bbe\u7f6e', 'python');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'python' and label_value = @PYTHON_ALL);\n\n-- engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @PYTHON_ALL);\n")))}c.isMDXComponent=!0},16682:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/python-conf-961cab2cff00b8e0cd208f4dfabf3852.png"},78199:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/python-config-851b3ff449840d90ef39624f34b786c7.png"}}]);