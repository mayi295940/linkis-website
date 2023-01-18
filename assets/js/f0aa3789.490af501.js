"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[92715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,m=d["".concat(a,".").concat(p)]||d[p]||h[p]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const s={title:"RPC Architecture",sidebar_position:2},o=void 0,c={unversionedId:"architecture/commons/rpc",id:"version-0.11.0/architecture/commons/rpc",title:"RPC Architecture",description:"1. Background",source:"@site/versioned_docs/version-0.11.0/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/docs/0.11.0/architecture/commons/rpc",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/commons/rpc.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"RPC Architecture",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Scheduler Architecture",permalink:"/docs/0.11.0/architecture/commons/scheduler"},next:{title:"Docking Multiple File Systems",permalink:"/docs/0.11.0/architecture/storage/file-system"}},a={},l=[{value:"1. Background",id:"1-background",level:2},{value:"2. Introduction",id:"2-introduction",level:2},{value:"3. Implementation",id:"3-implementation",level:2},{value:"3.1 Sending end",id:"31-sending-end",level:3},{value:"3.2 Receiver",id:"32-receiver",level:3}],u={toc:l};function d(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-background"},"1. Background"),(0,i.kt)("p",null,"The call of HTTP interface between Feign-based microservices can only satisfy a simple A microservice instance that randomly selects a service instance in B microservices according to simple rules, and if this B microservice instance wants to asynchronously return information To the caller, it is simply impossible to achieve."),(0,i.kt)("p",null,"At the same time, because Feign only supports simple service selection rules, it cannot forward the request to the specified microservice instance, and cannot broadcast a request to all instances of the recipient microservice."),(0,i.kt)("h2",{id:"2-introduction"},"2. Introduction"),(0,i.kt)("p",null,"Linkis has implemented a set of its own underlying RPC communication scheme based on Feign."),(0,i.kt)("p",null,"As the underlying communication solution, Linkis RPC integrates the SDK into the microservices in need."),(0,i.kt)("p",null,"A microservice can be both a request caller and a request receiver."),(0,i.kt)("p",null,"As the request caller, the Receiver of the target receiver's microservice will be requested through the Sender. As the request receiver, the Receiver will be provided to process the request sent by the request receiver Sender in order to complete a synchronous response or an asynchronous response."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis RPC architecture diagram",src:r(81340).Z,width:"791",height:"342"})),(0,i.kt)("h2",{id:"3-implementation"},"3. Implementation"),(0,i.kt)("p",null,"Based on the Sender system of the requesting party and the Receiver system of the requesting party, the entire structure of Linkis RPC is formed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Linkis RPC detailed architecture diagram",src:r(5216).Z,width:"1156",height:"470"})),(0,i.kt)("h3",{id:"31-sending-end"},"3.1 Sending end"),(0,i.kt)("p",null,"As the underlying communication layer, Linkis RPC does not require users to write any actual code on the sending end."),(0,i.kt)("p",null,"-1) The user obtains a Sender by calling the SDK provided by Linkis RPC, using the microservice name (Service Name) or specifying the microservice instance (microservice name + IP and port of the microservice instance)."),(0,i.kt)("p",null," ","\u2002"," ","\u2002"," ","\u2002"," ","\u2002"," Sender provides usable methods, see the following pseudo code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"abstract class Sender {\nObject ask(Object message);\nObject ask(Object message, Duration timeout);\nvoid send(Object message);\nvoid deliver(Object message);\n}\n")),(0,i.kt)("p",null," ","\u2002"," ","\u2002"," ","\u2002"," ","\u2002"," where:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    1. The ask method is a synchronous request response method, requiring the receiving end to return a response synchronously;\n    2. The send method is a synchronous request method, which is only responsible for sending the request to the receiving end synchronously, and does not require the receiving end to give a reply;\n    3. Deliver is an asynchronous request method. As long as the process on the sending end does not exit abnormally, the request will be sent to the receiving end through other threads later.\n")),(0,i.kt)("p",null,"-2) As the sender, the user sends a request to the receiver through the request method provided by the sender."),(0,i.kt)("p",null,"-3) The Sender sends the user's request to the interceptor. The interceptor intercepts the request and starts to do additional functional processing on the request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," a) Broadcast interceptor.\n \n The broadcast interceptor only takes effect for requests that need to be broadcast.\n \n The broadcast interceptor will provide a special broadcast interface. If this request implements the broadcast interface and the request is not being broadcast, the broadcast interceptor thinks that this request needs to be broadcast, and the broadcast operation will be triggered at this time.\n \n The specific steps are: get all the microservice instances for which the request needs to be broadcasted. If it is empty, it will broadcast to all instances of the microservice by default; then mark the request as being broadcast and call step 1) to obtain the corresponding microservice instances. All Senders start to send requests in a multi-threaded manner; when all Senders in the thread pool have finished sending requests, the broadcast request is marked as successful and returned to the user to complete the processing.\n \n b) Retry the interceptor.\n \n The retry interceptor will provide a retry function for all the next steps.\n \n If the sender successfully sends the request, but the receiver returns an exception that requires a retry, the retry interceptor will be triggered to re-submit the request automatically; if the request does not specify a specific instance of the microservice receiver, send If a ConnectException (connection exception) occurs during the request, it will actively retry; or if the user has specified certain exceptions to be retryed, the retry interceptor will automatically retry at this time.\n \n c) Cache interceptor.\n \n The cache interceptor is set for synchronization requests whose response content is unlikely to change frequently.\n \n The cache interceptor will also provide a special cache interface. If this request implements the cache interface, it will first look for whether the request has cached the response from the receiving end in the cache interceptor. If so, it will directly return the cached response, otherwise continue to connect. After the pull-down step and the response is returned at the receiving end, the response is first cached, and then the response is returned to the user, and the processing is completed.\n \n d) The default interceptor.\n \n The default interceptor is used to call the next processing steps.\n \n e) Custom interceptor. Users can also implement their own custom interceptors to achieve some specific functions.\n")),(0,i.kt)("p",null,"-4) The request encoder will first convert the data (entity bean) requested by the user into a serialized JSON string, and then pass it to the Feign client generator."),(0,i.kt)("p",null,"-5) Feign client generator, which generates Feign client that can access the receiver Restful request receiver."),(0,i.kt)("p",null,"-6) The generated Feign client will call the service discovery manager to obtain a list of all microservices. Through the service selector, if the user specifies the microservice name in step 1), then it will pass Feign's load balancing strategy. Select a suitable receiver microservice instance for request forwarding, otherwise the service selector will rewrite Spring Cloud Feign's FeignLoadBalancer (Feign load balancer). When creating LoadBalancerCommand, specify the corresponding microservice instance as step 1) Obtain The microservice instance specified when Sender."),(0,i.kt)("p",null,"-7) Call the Feign client to start requesting the Restful request receiver on the receiving end."),(0,i.kt)("h3",{id:"32-receiver"},"3.2 Receiver"),(0,i.kt)("p",null," The receiving end requires users to implement the Receiver interface for processing real business logic."),(0,i.kt)("p",null,"1) The Restful request receiver, as an embedded HTTP request Web Service service in Linkis RPC, is responsible for receiving requests from the sender"),(0,i.kt)("p",null,"2) After the Restful request receiver receives the request, it first calls the request decoder to decode the request, and parses out the actual request information and sender microservice information (microservice name + microservice instance IP and port), if the analysis fails , Will directly respond to the failure of the analysis request."),(0,i.kt)("p",null,"3) Put the parsed request information and sender microservice information into the request message queue;"),(0,i.kt)("p",null,"4) The request consumer will consume the decoded sender request in the request message queue."),(0,i.kt)("p",null," Obtain a suitable Receiver by calling the Receiver manager; at the same time, use the Sender generator to generate a Sender pointing to the sender through the obtained sender microservice information. Then the request consumer sends the actual request information and the generated sender Sender to the Receiver for processing;"),(0,i.kt)("p",null,"5) Receiver, as the actual processing unit of user requests, requires users to implement the Receiver interface to complete the actual processing logic of the caller request."),(0,i.kt)("p",null," The pseudo code of Receiver is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Receiver {\nvoid receive(Object message, Sender sender);\nObject receiveAndReply(Object message, Sender sender);\n    Object receiveAndReply(Object message, Duration duration, Sender sender);\n}\n")),(0,i.kt)("p",null," Receiver provides methods to handle synchronous and asynchronous requests."),(0,i.kt)("p",null,"6) If this request is an asynchronous request, the Receive method of Receiver is called, and the upper-layer business decides whether it needs to send back the response through the Sender of the sender."),(0,i.kt)("p",null,"7) If this request is a synchronous request, call Receiver's receiveAndReply method, take the return value as the response result, and send back to the sender."))}d.isMDXComponent=!0},81340:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rpc1-50c633a63c04e7c497be42055ea7da8e.png"},5216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rpc2-4ab2032cef27bfebc9cdcf959b63179a.png"}}]);