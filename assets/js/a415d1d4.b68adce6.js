"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95558],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,g=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63357:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Swagger Annotation",sidebar_position:5},i=void 0,p={unversionedId:"development/swwager-instructions",id:"development/swwager-instructions",isDocsHomePage:!1,title:"Swagger Annotation",description:"1. Scope of swagger annotations",source:"@site/docs/development/swwager-instructions.md",sourceDirName:"development",slug:"/development/swwager-instructions",permalink:"/docs/1.3.0/development/swwager-instructions",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/development/swwager-instructions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Swagger Annotation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quickly Implement New Engine",permalink:"/docs/1.3.0/development/new-engine-conn"},next:{title:"Development & Debugging with Kubernetes",permalink:"/docs/1.3.0/development/linkis-debug-with-helm-charts"}},o=[{value:"1. Scope of swagger annotations",id:"1-scope-of-swagger-annotations",children:[]},{value:"2. @Api",id:"2-api",children:[{value:"2.1 Attributes of annotations",id:"21-attributes-of-annotations",children:[]},{value:"2.2 The difference between attribute value and tags",id:"22-the-difference-between-attribute-value-and-tags",children:[]},{value:"2.3 How to use",id:"23-how-to-use",children:[]}]},{value:"3. @ApiOperation",id:"3-apioperation",children:[{value:"3.1 Attributes of annotations",id:"31-attributes-of-annotations",children:[]},{value:"3.2 How to use",id:"32-how-to-use",children:[]}]},{value:"4. @ApiImplicitParams",id:"4-apiimplicitparams",children:[{value:"4.1 Attributes of annotations",id:"41-attributes-of-annotations",children:[]}]},{value:"5. @ApiImplicitParams",id:"5-apiimplicitparams",children:[{value:"5.1 Attributes of annotations",id:"51-attributes-of-annotations",children:[]},{value:"5.2 How to use",id:"52-how-to-use",children:[]}]},{value:"6. @ApiParam",id:"6-apiparam",children:[{value:"6.1 Attributes of annotations",id:"61-attributes-of-annotations",children:[]},{value:"6.2 How to use",id:"62-how-to-use",children:[]}]},{value:"7. @ApiModel",id:"7-apimodel",children:[{value:"7.1 Attributes of annotations",id:"71-attributes-of-annotations",children:[]},{value:"8.1 Attributes of annotations",id:"81-attributes-of-annotations",children:[]},{value:"8.2 How to use",id:"82-how-to-use",children:[]}]},{value:"9. @ApiResponses",id:"9-apiresponses",children:[{value:"9.1 Attributes of annotations",id:"91-attributes-of-annotations",children:[]}]},{value:"10. @ApiResponse",id:"10-apiresponse",children:[{value:"10.1 Attributes of annotations",id:"101-attributes-of-annotations",children:[]},{value:"10.2 How to use",id:"102-how-to-use",children:[]}]}],d={toc:o};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-scope-of-swagger-annotations"},"1. Scope of swagger annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Scope"),(0,r.kt)("th",{parentName:"tr",align:null},"Where to use"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Api"),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol set description"),(0,r.kt)("td",{parentName:"tr",align:null},"Used on the controller class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiOperation"),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol description"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in controller methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiImplicitParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-object parameter set"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in controller methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiImplicitParam"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-object parameter description"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in methods of @ApiImplicitParams")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiResponses"),(0,r.kt)("td",{parentName:"tr",align:null},"Response set"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in the controller's method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Response"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in @ApiResponses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiModel"),(0,r.kt)("td",{parentName:"tr",align:null},"Describe the meaning of the returned object"),(0,r.kt)("td",{parentName:"tr",align:null},"Used in the returned object class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiModelProperty"),(0,r.kt)("td",{parentName:"tr",align:null},"Object property"),(0,r.kt)("td",{parentName:"tr",align:null},"Used on the fields of the parameter object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ApiParam"),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol description"),(0,r.kt)("td",{parentName:"tr",align:null},"Used on methods, parameters, fields of classes")))),(0,r.kt)("h2",{id:"2-api"},"2. @Api"),(0,r.kt)("p",null,"Use the location to use on the class to describe the request class. Identifies a Controller class is the Swagger document class."),(0,r.kt)("h3",{id:"21-attributes-of-annotations"},"2.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description, meaningless.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"basePath"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Base Path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocols"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Request Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorizations"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization[]"),(0,r.kt)("td",{parentName:"tr",align:null},'@Authorization(value = "")'),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for advanced feature authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Is it hidden (not displayed, the default is false)")))),(0,r.kt)("h3",{id:"22-the-difference-between-attribute-value-and-tags"},"2.2 The difference between attribute value and tags"),(0,r.kt)("p",null,"The value attribute is used to describe both the role of the class and the role of the method;"),(0,r.kt)("p",null,"The tags attribute is used for grouping both on classes and methods, but the effect of grouping is very different:"),(0,r.kt)("p",null,"When tags act on a class, the global methods are grouped, that is, multiple copies are made according to the tags attribute value. At this time, the tags value on the method is invalid, and the effect of matching or not matching the tags on the method is the same."),(0,r.kt)("p",null,"When tags act on a method, they will be grouped according to the tags values \u200b\u200bof all methods of the current class, with a finer granularity."),(0,r.kt)("h3",{id:"23-how-to-use"},"2.3 How to use"),(0,r.kt)("font",{color:"red"},"Note: The difference between java and scala in @Api annotation "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'*java\n@Api(tags = "Swagger test related interface")\n@RestController\n\n*scala\n@Api(tags = Array("Swagger test related interface"))\n@RestController\n')),(0,r.kt)("h2",{id:"3-apioperation"},"3. @ApiOperation"),(0,r.kt)("p",null,"Used in methods, to describe the request method."),(0,r.kt)("h3",{id:"31-attributes-of-annotations"},"3.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notes"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response"),(0,r.kt)("td",{parentName:"tr",align:null},"Class<?>"),(0,r.kt)("td",{parentName:"tr",align:null},"Void.class"),(0,r.kt)("td",{parentName:"tr",align:null},"Response parameter type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseReference"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a reference to the response type, local/remote reference, and will override any other specified response() class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"httpMethod"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"http request method, such as: GET, HEAD, POST, PUT, DELETE, OPTION, SPATCH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"whether hidden (not displayed) defaults to false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"http status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions"),(0,r.kt)("td",{parentName:"tr",align:null},"Extension[]"),(0,r.kt)("td",{parentName:"tr",align:null},'@Extension(properties = @ExtensionProperty(name = "", value = "")'),(0,r.kt)("td",{parentName:"tr",align:null},"Extension Properties")))),(0,r.kt)("h3",{id:"32-how-to-use"},"3.2 How to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("test1")\n@ApiOperation(value = "test1 interface", notes = "test1 interface detailed description")\npublic ApiResult<String> test1(@RequestParam String aa, @RequestParam String bb, @RequestParam String cc) {\n        return ApiUtil.success("success");\n}\n')),(0,r.kt)("h2",{id:"4-apiimplicitparams"},"4. @ApiImplicitParams"),(0,r.kt)("p",null,"Commonly used in methods to describe the request parameter list.\nThe value attribute can contain multiple @ApiImplicitParam, and describe each participant in detail."),(0,r.kt)("h3",{id:"41-attributes-of-annotations"},"4.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description")))),(0,r.kt)("h2",{id:"5-apiimplicitparams"},"5. @ApiImplicitParams"),(0,r.kt)("p",null,"Used in methods to describe request parameters. When multiple parameters need to be described, it is used as a property of @ApiImplicitParams."),(0,r.kt)("h3",{id:"51-attributes-of-annotations"},"5.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"default value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowableValues"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter allowable values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowMultiple"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the parameter can accept multiple values \u200b\u200bby appearing multiple times, the default is not allowed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"The data type of the parameter, which can be a class name or a primitive data type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataTypeClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Class<?>"),(0,r.kt)("td",{parentName:"tr",align:null},"Void.class"),(0,r.kt)("td",{parentName:"tr",align:null},"The data type of the parameter, overriding dataType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paramType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter type, valid values \u200b\u200bare path, query, body, header, form")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"example"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter example of non-body type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"examples"),(0,r.kt)("td",{parentName:"tr",align:null},"Example"),(0,r.kt)("td",{parentName:"tr",align:null},'@Example(value = @ExampleProperty(mediaType = "", value = ""))'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter example of body type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Add functionality to override detected types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Add the function to provide custom format format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds features designated as read-only")))),(0,r.kt)("h3",{id:"52-how-to-use"},"5.2 How to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("test1")\n@ApiOperation(value = "test1 interface", notes = "test1 interface detailed description")\n@ApiImplicitParams(value = {\n        @ApiImplicitParam(name = "aa",value = "aa description",defaultValue = "1",allowableValues \u200b\u200b= "1,2,3",required = true),\n        @ApiImplicitParam(name = "bb",value = "bb description",defaultValue = "1",allowableValues \u200b\u200b= "1,2,3",required = true),\n        @ApiImplicitParam(name = "cc",value = "Description of cc",defaultValue = "2",allowableValues \u200b\u200b= "1,2,3",required = true),\n\n})\n')),(0,r.kt)("h2",{id:"6-apiparam"},"6. @ApiParam"),(0,r.kt)("p",null,"Used in fields of methods, parameters, and classes to describe request parameters."),(0,r.kt)("h3",{id:"61-attributes-of-annotations"},"6.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"default value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowableValues"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter allowable values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowMultiple"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the parameter can accept multiple values \u200b\u200bby appearing multiple times, the default is not allowed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"The data type of the parameter, which can be a class name or a primitive data type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataTypeClass"),(0,r.kt)("td",{parentName:"tr",align:null},"Class<?>"),(0,r.kt)("td",{parentName:"tr",align:null},"Void.class"),(0,r.kt)("td",{parentName:"tr",align:null},"The data type of the parameter, overriding dataType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"paramType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter type, valid values \u200b\u200bare path, query, body, header, form")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"example"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter example of non-body type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"examples"),(0,r.kt)("td",{parentName:"tr",align:null},"Example"),(0,r.kt)("td",{parentName:"tr",align:null},'@Example(value = @ExampleProperty(mediaType = "", value = ""))'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter example of body type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Add functionality to override detected types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Add the function to provide custom format format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds features designated as read-only")))),(0,r.kt)("h3",{id:"62-how-to-use"},"6.2 How to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("test2")\n@ApiOperation(value = "test2 interface", notes = "test2 interface detailed description")\npublic ApiResult<TestRes> test2(@ApiParam(value = "aa description") @RequestParam String aa, @ApiParam(value = "bb description") @RequestParam String bb) {\n        return ApiUtil.success(new TestRes());\n}\n')),(0,r.kt)("h2",{id:"7-apimodel"},"7. @ApiModel"),(0,r.kt)("p",null,"Used in classes to describe requests, response classes, and entity classes."),(0,r.kt)("h3",{id:"71-attributes-of-annotations"},"7.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"is an alternative name to provide the model, by default, the class name is used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Class description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parent"),(0,r.kt)("td",{parentName:"tr",align:null},"Class<?> parent"),(0,r.kt)("td",{parentName:"tr",align:null},"Void.class"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a parent class for the model to allow describing inheritance relationships")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discriminatory"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Supports model inheritance and polymorphism, using the name of the discriminator's field, you can assert which subtype to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subTypes"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"Class<?> parent"),(0,r.kt)("td",{parentName:"tr",align:null},"Void.class"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of subtypes inherited from this model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reference"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a reference to the corresponding type definition, overriding any other metadata specified")))),(0,r.kt)("p",null,"##8 @ApiModelProperty"),(0,r.kt)("p",null,"Used in classes to describe requests, response classes, and entity classes."),(0,r.kt)("h3",{id:"81-attributes-of-annotations"},"8.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Override property name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowableValues"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter allowable values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Filter Attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, default false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"The data type of the parameter, which can be a class name or a primitive data type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Hidden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Add functionality designated as read-only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reference"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a reference to the corresponding type definition, overriding any other metadata specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowEmptyValue"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow empty values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"example"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Example value for attribute")))),(0,r.kt)("h3",{id:"82-how-to-use"},"8.2 How to use"),(0,r.kt)("font",{color:"red"},"Note: The difference between java and scala in the use of @ApiModelProperty annotation "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'*java entity class\n@Data\n@ApiModel(description = "Test request class")\npublic class TestReq {\n\n    @ApiModelProperty(value = "User ID",required = true)\n    private Long userId;\n    @ApiModelProperty(value = "Username", example = "Zhang San")\n}\n\n*scala entity class\n@Data\n@ApiModel(description = "Test response class")\npublic class TestRes {\n    @(ApiModelProperty @field)("User ID")\n    private Long userId;\n    @(ApiModelProperty @field)("Username")\n}\n')),(0,r.kt)("h2",{id:"9-apiresponses"},"9. @ApiResponses"),(0,r.kt)("p",null,"Used on methods and classes to describe the response status code list."),(0,r.kt)("h3",{id:"91-attributes-of-annotations"},"9.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiResponse[]"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description of response status code list")))),(0,r.kt)("h2",{id:"10-apiresponse"},"10. @ApiResponse"),(0,r.kt)("p",null,"Used in the method to describe the response status code. Generally used as a property of @ApiResponses."),(0,r.kt)("h3",{id:"101-attributes-of-annotations"},"10.1 Attributes of annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Property Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Response HTTP Status Code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response"),(0,r.kt)("td",{parentName:"tr",align:null},"Class<?>"),(0,r.kt)("td",{parentName:"tr",align:null},"Void.class"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional response class used to describe the message payload, corresponding to the schema field of the response message object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reference"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies a reference to the response type, the specified application can make a local reference, or a remote reference, will be used as is, and will override any specified response() class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseHeaders"),(0,r.kt)("td",{parentName:"tr",align:null},"ResponseHeader[]"),(0,r.kt)("td",{parentName:"tr",align:null},'@ResponseHeader(name = "", response = Void.class)'),(0,r.kt)("td",{parentName:"tr",align:null},"List of possible response headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Declare the container of the response, valid values \u200b\u200bare List, Set, Map, any other value will be ignored")))),(0,r.kt)("h3",{id:"102-how-to-use"},"10.2 How to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("test2")\n@ApiOperation(value = "test2 interface", notes = "test2 interface detailed description")\n@ApiResponses(value = {\n        @ApiResponse(code = 200, message = "Request successful", responseHeaders = {@ResponseHeader(name = "header1", description = "description of header1",response = String.class)}),\n        @ApiResponse(code = 401, message = "No permission"),\n        @ApiResponse(code = 403, message = "Access forbidden")\n})\npublic ApiResult<TestRes> test2(@ApiParam(value = "aa description") @RequestParam String aa, @ApiParam(value = "bb description") @RequestParam String bb) {\n        return ApiUtil.success(new TestRes());\n}\n\n')))}s.isMDXComponent=!0}}]);