"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9749],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51430:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Resource Manager",sidebar_position:3},l=void 0,c={unversionedId:"architecture/computation_governance_services/linkis_manager/resource_manager",id:"version-1.0.2/architecture/computation_governance_services/linkis_manager/resource_manager",isDocsHomePage:!1,title:"Resource Manager",description:"1. Background",source:"@site/versioned_docs/version-1.0.2/architecture/computation_governance_services/linkis_manager/resource_manager.md",sourceDirName:"architecture/computation_governance_services/linkis_manager",slug:"/architecture/computation_governance_services/linkis_manager/resource_manager",permalink:"/docs/latest/architecture/computation_governance_services/linkis_manager/resource_manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/architecture/computation_governance_services/linkis_manager/resource_manager.md",tags:[],version:"1.0.2",sidebarPosition:3,frontMatter:{title:"Resource Manager",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Label Manager",permalink:"/docs/latest/architecture/computation_governance_services/linkis_manager/label_manager"},next:{title:"EngineConn Design",permalink:"/docs/latest/architecture/computation_governance_services/engine/engine_conn"}},u=[{value:"1. Background",id:"1-background",children:[]},{value:"2. The role of RM in Linkis",id:"2-the-role-of-rm-in-linkis",children:[]},{value:"3. Resource type and format",id:"3-resource-type-and-format",children:[]},{value:"4. Available resource management",id:"4-available-resource-management",children:[]},{value:"5. Resource Usage Management",id:"5-resource-usage-management",children:[]},{value:"6. External resource management",id:"6-external-resource-management",children:[]}],m={toc:u};function p(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-background"},"1. Background"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","ResourceManager (RM for short) is the computing resource management module of Linkis. All EngineConn (EC for short), EngineConnManager (ECM for short), and even external resources including Yarn are managed by RM. RM can manage resources based on users, ECM, or other granularities defined by complex tags.  "),(0,o.kt)("h2",{id:"2-the-role-of-rm-in-linkis"},"2. The role of RM in Linkis"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"01",src:r(42101).Z}),"\n",(0,o.kt)("img",{alt:"02",src:r(79902).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As a part of Linkis Manager, RM mainly functions as follows: maintain the available resource information reported by ECM, process the resource application submitted by ECM, record the actual resource usage information reported by EC in real time during the life cycle after successful application, and provide query current resource usage The relevant interface of the situation.",(0,o.kt)("br",{parentName:"p"}),"\n","In Linkis, other services that interact with RM mainly include:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Engine Manager, ECM for short: Processes the microservices that start the engine connector request. As a resource provider, ECM is responsible for registering and unregistering resources with RM. At the same time, as the manager of the engine, ECM is responsible for applying for resources from RM instead of the new engine connector that is about to start. For each ECM instance, there is a corresponding resource record in the RM, which contains information such as the total resources and protection resources it provides, and dynamically updates the used resources.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"03",src:r(1796).Z}),"  "),(0,o.kt)("li",{parentName:"ol"},"The engine connector, referred to as EC, is the actual execution unit of user operations. At the same time, as the actual user of the resource, the EC is responsible for reporting the actual use of the resource to the RM. Each EC has a corresponding resource record in the RM: during the startup process, it is reflected as a locked resource; during the running process, it is reflected as a used resource; after being terminated, the resource record is subsequently deleted.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"04",src:r(36215).Z}),"  ")),(0,o.kt)("h2",{id:"3-resource-type-and-format"},"3. Resource type and format"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"05",src:r(13023).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As shown in the figure above, all resource classes implement a top-level Resource interface, which defines the calculation and comparison methods that all resource classes need to support, and overloads the corresponding mathematical operators to enable resources to be Directly calculated and compared like numbers.  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operator"),(0,o.kt)("th",{parentName:"tr",align:null},"Correspondence Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Operator"),(0,o.kt)("th",{parentName:"tr",align:null},"Correspondence Method"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"+"),(0,o.kt)("td",{parentName:"tr",align:null},"add"),(0,o.kt)("td",{parentName:"tr",align:null},">"),(0,o.kt)("td",{parentName:"tr",align:null},"moreThan")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"minus"),(0,o.kt)("td",{parentName:"tr",align:null},"\\<"),(0,o.kt)("td",{parentName:"tr",align:null},"lessThan")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"*"),(0,o.kt)("td",{parentName:"tr",align:null},"multiply"),(0,o.kt)("td",{parentName:"tr",align:null},"="),(0,o.kt)("td",{parentName:"tr",align:null},"equals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"/"),(0,o.kt)("td",{parentName:"tr",align:null},"divide"),(0,o.kt)("td",{parentName:"tr",align:null},">","="),(0,o.kt)("td",{parentName:"tr",align:null},"notLessThan")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\\<="),(0,o.kt)("td",{parentName:"tr",align:null},"notMoreThan"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The currently supported resource types are shown in the following table. All resources have corresponding json serialization and deserialization methods, which can be stored in json format and transmitted across the network:  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MemoryResource"),(0,o.kt)("td",{parentName:"tr",align:null},"Memory Resource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPUResource"),(0,o.kt)("td",{parentName:"tr",align:null},"CPU Resource")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LoadResource"),(0,o.kt)("td",{parentName:"tr",align:null},"Both memory and CPU resources")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"YarnResource"),(0,o.kt)("td",{parentName:"tr",align:null},"Yarn queue resources (queue, queue memory, queue CPU, number of queue instances)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LoadInstanceResource"),(0,o.kt)("td",{parentName:"tr",align:null},"Server resources (memory, CPU, number of instances)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DriverAndYarnResource"),(0,o.kt)("td",{parentName:"tr",align:null},"Driver and executor resources (with server resources and Yarn queue resources at the same time)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SpecialResource"),(0,o.kt)("td",{parentName:"tr",align:null},"Other custom resources")))),(0,o.kt)("h2",{id:"4-available-resource-management"},"4. Available resource management"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The available resources in the RM mainly come from two sources: the available resources reported by the ECM, and the resource limits configured according to tags in the Configuration module.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"ECM resource report"),":  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When the ECM is started, it will broadcast the ECM registration message. After receiving the message, the RM will register the resource according to the content contained in the message. The resource-related content includes:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Total resources: the total number of resources that the ECM can provide.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Protect resources: When the remaining resources are less than this resource, no further resources are allowed to be allocated.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Resource type: such as LoadResource, DriverAndYarnResource and other type names.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Instance information: machine name plus port name.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After RM receives the resource registration request, it adds a record in the resource table, the content is consistent with the parameter information of the interface, and finds the label representing the ECM through the instance information, and adds an association in the resource and label association table recording.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When the ECM is closed, it will broadcast a message that the ECM is closed. After receiving the message, the RM will go offline according to the ECM instance information in the message, that is, delete the resource and associated records corresponding to the ECM instance tag.  "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration module tag resource configuration"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In the Configuration module, users can configure the number of resources based on different tag combinations, such as limiting the maximum available resources of the User/Creator/EngineType combination."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The RM queries the Configuration module for resource information through the RPC message, using the combined tag as the query condition, and converts it into a Resource object to participate in subsequent comparison and recording.  "),(0,o.kt)("h2",{id:"5-resource-usage-management"},"5. Resource Usage Management"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Receive user's resource application:"),"  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When LinkisManager receives a request to start EngineConn, it will call RM's resource application interface to apply for resources. The resource application interface accepts an optional time parameter. When the waiting time for applying for a resource exceeds the limit of the time parameter, the resource application will be automatically processed as a failure.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Judging whether there are enough resources:"),(0,o.kt)("br",{parentName:"p"}),"\n","That is, to determine whether the remaining available resources are greater than the requested resources, if greater than or equal to, the resources are sufficient; otherwise, the resources are insufficient.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"RM preprocesses the label information attached to the resource application, and filters, combines and converts the original labels according to the rules (such as combining the User/Creator label and EngineType label), which makes the subsequent resource judgment more granular flexible.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lock each converted label one by one, so that their corresponding resource records remain unchanged during the processing of resource applications.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"According to each label:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the corresponding resource record from the database through the Persistence module. If the record contains the remaining available resources, it is directly used for comparison.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is no direct remaining available resource record, it will be calculated by the formula of ","[Remaining Available Resource=Maximum Available Resource-Used Resource-Locked Resource-Protected Resource]",".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is no maximum available resource record, request the Configuration module to see if there is configured resource information, if so, use the formula for calculation, if not, skip the resource judgment for this tag.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is no resource record, skip the resource judgment for this tag.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As long as one tag is judged to be insufficient in resources, the resource application will fail, and each tag will be unlocked one by one.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Only when all tags are judged to be sufficient resources, can the resource application be successfully passed and proceed to the next step.  "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lock by application of resources:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The number of resource request by generating a new record in the resource table, and associated with each tag.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is a tag corresponding to the remaining available resource record, the corresponding number of the abatement.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate a timed task, the lock checks whether these resources are actually used after a certain time, if the timeout is not used, it is mandatory recycling.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"unlock each tag."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"report the actual use of resources:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"EngineConn after the start, broadcast a resource utilization message. RM after receiving the message, check whether the label corresponding to the EngineConn lock resource record, and if not, an error.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you have locked resource, the EngineConn all labels associated lock.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For each tag, the resource record corresponding lock record for the conversion of used resources.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Unlock all labels."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Release actual used resources:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"EngineConn after the end of the life cycle, recycling broadcast messages. RM after receiving the message, check whether the EngineConn corresponding label resources have been recorded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If so, all the labels associated EngineConn be locked."))),(0,o.kt)("p",null,"3, minus the amount used in the corresponding resource record for each label."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there is a tag corresponding to the remaining available resource record, the corresponding increase in number.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The unlocking each tag"))),(0,o.kt)("h2",{id:"6-external-resource-management"},"6. External resource management"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","In RM, in order to classify resources more flexibly and expansively, support multi-cluster resource management and control, and at the same time make it easier to access new external resources, the following considerations have been made in the design:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Unified management of resources through tags. After the resource is registered, it is associated with the tag, so that the attributes of the resource can be expanded infinitely. At the same time, resource applications are also tagged to achieve flexible matching.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Abstract the cluster into one or more tags, and maintain the environmental information corresponding to each cluster tag in the external resource management module to achieve dynamic docking.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Abstract a general external resource management module. If you need to access new external resource types, you can convert different types of resource information into Resource entities in the RM as long as you implement a fixed interface to achieve unified management.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"06",src:r(35334).Z}),"  "))),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Other modules of RM obtain external resource information through the interface provided by ExternalResourceService."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The ExternalResourceService obtains information about external resources through resource types and tags:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The type, label, configuration and other attributes of all external resources (such as cluster name, Yarn web\nurl, Hadoop version and other information) are maintained in the linkis","_","external","_","resource","_","provider table.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For each resource type, there is an implementation of the ExternalResourceProviderParser interface, which parses the attributes of external resources, converts the information that can be matched to the Label into the corresponding Label, and converts the information that can be used as a parameter to request the resource interface into params . Finally, an ExternalResourceProvider instance that can be used as a basis for querying external resource information is constructed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"According to the resource type and label information in the parameters of the ExternalResourceService method, find the matching ExternalResourceProvider, generate an ExternalResourceRequest based on the information in it, and formally call the API provided by the external resource to initiate a resource information request."))))}p.isMDXComponent=!0},42101:function(e,t,r){t.Z=r.p+"assets/images/rm-01-3eb30eebca5162efc4a8b52af116dca9.png"},79902:function(e,t,r){t.Z=r.p+"assets/images/rm-02-16e4f450fde11be7226ea8029cac1b55.png"},1796:function(e,t,r){t.Z=r.p+"assets/images/rm-03-88c5d2f15f1c504a47b5f255124ad493.png"},36215:function(e,t,r){t.Z=r.p+"assets/images/rm-04-f3788f8ef5c9d98c9fe3562794fff7ea.png"},13023:function(e,t,r){t.Z=r.p+"assets/images/rm-05-fcca9073b4eba3afa8e7bf22c7b096b5.png"},35334:function(e,t,r){t.Z=r.p+"assets/images/rm-06-20c8ef614561c8c23052d6e59ec4360a.png"}}]);