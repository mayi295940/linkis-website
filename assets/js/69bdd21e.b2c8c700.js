"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[36093],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return a?i.createElement(d,l(l({ref:t},m),{},{components:a})):i.createElement(d,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={title:"How to Use Email",sidebar_position:1.1},l=void 0,o={unversionedId:"how-to-email",id:"how-to-email",title:"How to Use Email",description:"Introduces mailing list usage guidelines and reference examples",source:"@site/community/how-to-email.md",sourceDirName:".",slug:"/how-to-email",permalink:"/community/how-to-email",draft:!1,editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/how-to-email.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{title:"How to Use Email",sidebar_position:1.1},sidebar:"tutorialSidebar",previous:{title:"How to Subscribe",permalink:"/community/how-to-subscribe"},next:{title:"How to Participate in Project Contribution",permalink:"/community/how-to-contribute"}},s={},p=[{value:"1. Themes",id:"1-themes",level:2},{value:"2. Mail specifications",id:"2-mail-specifications",level:2},{value:"3. Sample reference",id:"3-sample-reference",level:2},{value:"4. Mail usage of PPMC",id:"4-mail-usage-of-ppmc",level:2},{value:"5. How to reply to version release voting emails",id:"5-how-to-reply-to-version-release-voting-emails",level:2},{value:"6. Appendix",id:"6-appendix",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Introduces mailing list usage guidelines and reference examples")),(0,n.kt)("p",null,"To subscribe to the mailing list, please refer to this ",(0,n.kt)("a",{parentName:"p",href:"/community/how-to-subscribe"},"Subscription Guidelines")),(0,n.kt)("p",null,"Linkis' archived mail can be viewed here ",(0,n.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@linkis.apache.org"},"archived mail")),(0,n.kt)("admonition",{title:"Notice",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'Since mailbox 163/sina replies with Chinese "reply" by default, it will cause the apache mail to be recognized as a new thread mail.\nThe following takes 163 mailboxes as an example:')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Email reply",src:a(69700).Z,width:"1648",height:"800"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Therefore, you need to modify the general settings of the mailbox")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mailbox-settings",src:a(83144).Z,width:"1429",height:"874"})),(0,n.kt)("h2",{id:"1-themes"},"1. Themes"),(0,n.kt)("p",null,"The subject of the email can be roughly divided into the following types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","DISCUSS]")," Discussion on a feature/function/logic modification/CI/CD, which can be implementation/design/optimization suggestion, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","PROPOSAL]")," Proposals, such as adding/removing certain features, are not much different from ","[","DISCUSS]"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","VOTE]")," Vote for changes/elect Committer/elect new PPMC members, etc., such as version release, each version will be voted on in the community dev mailing list; you can also choose multiple options ,Poll."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","ANNOUNCE]")," Announce the completion of the release of the new version, announcing the new Committer/PPMC elected, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","NOTICE]")," Mainly used to notify some temporary announcements, etc., such as the community sandbox environment is suspended for maintenance/upgrade, the web official website is abnormally unavailable, etc.; as well as online and offline weekly meetings/exchange meetings and various Event information announcements, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","HELP]")," Ask for help, because there are many git code notifications, and sometimes it is impossible to check them in time; in addition, github network access is limited, and some students may not be able to submit issues through github smoothly. Initiated by email, it is easier to identify and be perceived."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[","VOTE]","[","RESULT]")," Announce the results of the release vote")),(0,n.kt)("h2",{id:"2-mail-specifications"},"2. Mail specifications"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," General")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Whenever possible do not send plain HTML messages, but plain text. If you use QQ mailbox, its email content is in html format by default. Please switch to plain text text format when writing. For detailed switching instructions, see the appendix of this article."),(0,n.kt)("li",{parentName:"ul"},"Developers/community users/PPMC members initiate email discussions/needs for help/notifications for the content of the above scenarios, please send them to ",(0,n.kt)("a",{parentName:"li",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org")),(0,n.kt)("li",{parentName:"ul"},"Please put the corresponding type prefix before the email subject: such as ",(0,n.kt)("inlineCode",{parentName:"li"},"[HELP] XXXXXXX"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"[DISCUSS] XXXXXXX"))),(0,n.kt)("p",null,"For more information, please refer to the official ",(0,n.kt)("a",{parentName:"p",href:"https://infra.apache.org/contrib-email-tips"},"Mail Etiquette")," ",(0,n.kt)("a",{parentName:"p",href:"https://infra.apache.org/contrib-email-tips"},"https://infra.apache.org/contrib-email-tips")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Reply ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At the end of the email content, it is best to bring your own signature (English)"),(0,n.kt)("li",{parentName:"ul"},"If it is a reply to a voting email, it is best to bring a binding mark (votes cast by PPMC/IPMC members are binding, you can add a binding suffix such as: ",(0,n.kt)("inlineCode",{parentName:"li"},"+1 approve(binding)"),";\nVotes cast by ordinary members, non-binding, can be added with non-binding suffix such as: ",(0,n.kt)("inlineCode",{parentName:"li"},"+1 approve(non-binding)")," )"),(0,n.kt)("li",{parentName:"ul"},"When some mailboxes such as: 163/sina reply to emails, the default is to bring the Chinese ",(0,n.kt)("inlineCode",{parentName:"li"},"reply"),", which will cause the apache email to be recognized as a new thread email\nFor example: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/otfftdtbq0z9xsddnl7wb8tgzkhqcnof"},"https://lists.apache.org/thread/otfftdtbq0z9xsddnl7wb8tgzkhqcnof"),", the threads of the entire mail cannot be connected in series,\nTherefore, it is necessary to modify the configuration of the email reply. For detailed switching guidelines, see the appendix of this article.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","DISCUSS/Proposal] Mail ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Title ",(0,n.kt)("inlineCode",{parentName:"li"},"[DISCUSS][module name] XXXX")," (if it is a specific module, it is recommended to bring the module name)"),(0,n.kt)("li",{parentName:"ul"},"Generally, create a corresponding issue on Github's ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues"},"issues column"),", and then initiate an email discussion"),(0,n.kt)("li",{parentName:"ul"},"Briefly describe clearly the content of the discussion/proposal (eg: background/what problem you want to solve/how to solve it)"),(0,n.kt)("li",{parentName:"ul"},"Modules involved (if one or two specific modules are involved)"),(0,n.kt)("li",{parentName:"ul"},"Graphical and textual information such as relevant design instructions can be placed in the corresponding issue for easy modification, and the link can be quoted in the email."),(0,n.kt)("li",{parentName:"ul"},"The corresponding Chinese translation can be attached")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","HELP] Mail")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please confirm ",(0,n.kt)("a",{parentName:"li",href:"https://docs.qq.com/doc/DSGZhdnpMV3lTUUxq"},"QA documentation"),"/",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues"},"issues")," and ","[archived mail]","( Is this question not included in ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/list.html?dev@linkis.apache.org"},"https://lists.apache.org/list.html?dev@linkis.apache.org"),")"),(0,n.kt)("li",{parentName:"ul"},"Detailed description of the problems encountered"),(0,n.kt)("li",{parentName:"ul"},"How to reproduce this problem"),(0,n.kt)("li",{parentName:"ul"},"You can create a corresponding issue on git"),(0,n.kt)("li",{parentName:"ul"},"The corresponding Chinese translation can be attached")),(0,n.kt)("h2",{id:"3-sample-reference"},"3. Sample reference"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","DISCUSS/Proposal] Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"k8 is supported discussion: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/3o61h3439sjnqt8wvmdolg90o635w303"},"https://lists.apache.org/thread/3o61h3439sjnqt8wvmdolg90o635w303")),(0,n.kt)("li",{parentName:"ul"},"Some feature change discussion email example: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/lxdsvo2q0gbzllx04wkq547qxlgp5k5z"},"https://lists.apache.org/thread/lxdsvo2q0gbzllx04wkq547qxlgp5k5z")),(0,n.kt)("li",{parentName:"ul"},"Sample proposal email for community building: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/t3cbmrzcpgv9j39f5c3zz8xjfdd3fzsv"},"https://lists.apache.org/thread/t3cbmrzcpgv9j39f5c3zz8xjfdd3fzsv"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","VOTE] Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release voting for new versions: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/9nhsj61oo338g0oql9rlrnfh8jwx64cl"},"https://lists.apache.org/thread/9nhsj61oo338g0oql9rlrnfh8jwx64cl"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","ANNOUNCE] Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The new version is released: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/dmdtgrgozjn1m1mz6ss7999qq387mq0w"},"https://lists.apache.org/thread/dmdtgrgozjn1m1mz6ss7999qq387mq0w")),(0,n.kt)("li",{parentName:"ul"},"New committer elected: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/s8p9nr9gsqxl2tt7o3vxo3jxzrzjm5vf"},"https://lists.apache.org/thread/s8p9nr9gsqxl2tt7o3vxo3jxzrzjm5vf")),(0,n.kt)("li",{parentName:"ul"},"New PMC elected: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/gqrczn8pw4tq3g4mwh1mf6s0k6r206jn"},"https://lists.apache.org/thread/gqrczn8pw4tq3g4mwh1mf6s0k6r206jn"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","NOTICE] Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Notice of regular meeting: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/2wtn55wkzh27373k9y8qq09843xs9oxn"},"https://lists.apache.org/thread/2wtn55wkzh27373k9y8qq09843xs9oxn")),(0,n.kt)("li",{parentName:"ul"},"Service status notification: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/bzsc3mnkcl5gz4h3hp9qh9ofpykbr28f"},"https://lists.apache.org/thread/bzsc3mnkcl5gz4h3hp9qh9ofpykbr28f"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," ","[","HELP] Example")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For help: ",(0,n.kt)("a",{parentName:"li",href:"https://lists.apache.org/thread/br03lmd3n73lbc6n0lzcmqjbvy960wvf"},"https://lists.apache.org/thread/br03lmd3n73lbc6n0lzcmqjbvy960wvf"))),(0,n.kt)("h2",{id:"4-mail-usage-of-ppmc"},"4. Mail usage of PPMC"),(0,n.kt)("p",null,"From the determination of a version to the release, it may involve specific common scenarios of using email"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The new version needs to organize PMC and developers to discuss, record the minutes of the meeting, determine the function points of this version, the general release time of the plan, and the release manager of this time, etc., and send the meeting minutes ",(0,n.kt)("a",{parentName:"li",href:"mailto:private@linkis.apache.org"},"private@linkis.apache.org")," Email list."),(0,n.kt)("li",{parentName:"ol"},"For the scope of the feature list of the new version, you need to send a voting email to ",(0,n.kt)("a",{parentName:"li",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org"),", and 3+ PMCs are required to agree and the yes votes are greater than the negative votes."),(0,n.kt)("li",{parentName:"ol"},"For the weekly regular meeting hosted, the meeting invitation reminder email needs to be released before the meeting / the meeting minutes email should be sent to the ",(0,n.kt)("a",{parentName:"li",href:"mailto:dev@linkis.apache.org"},"dev@linkis.apache.org")," mailbox after the meeting"),(0,n.kt)("li",{parentName:"ol"},"New committer/ppmc votes need to be sent to ",(0,n.kt)("a",{parentName:"li",href:"mailto:private@linkis.apache.org."},"private@linkis.apache.org.")," See ",(0,n.kt)("a",{parentName:"li",href:"https://community.apache.org/newcommitter.html"},"https://community.apache.org/newcommitter.html")," for the new committee/ppmc selection process")),(0,n.kt)("h2",{id:"5-how-to-reply-to-version-release-voting-emails"},"5. How to reply to version release voting emails"),(0,n.kt)("p",null,"If a release vote is initiated, after verification (see ",(0,n.kt)("a",{parentName:"p",href:"/community/how-to-verify"},"How to verify")," for the detailed verification process), you can refer to this reply example for email reply"),(0,n.kt)("p",null,"If you initiate a posting vote, you can refer to this response example to reply to the email after verification"),(0,n.kt)("font",{color:"red"},"When replying to the email, you must bring the information that you have checked by yourself. Simply replying to `+1 approve` is invalid.",(0,n.kt)("p",null,"PPMC/IPMC member voting is best with the binding suffix, indicating a binding vote, which is convenient for counting voting results")),(0,n.kt)("p",null,"Non-PPMC/Non-IPMC member"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"+1 (non-binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \xa0\n")),(0,n.kt)("p",null,"PPMC/IPMC member"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"+1 (binding)\nI checked:\n     1. All download links are valid\n     2. Checksum and signature are OK\n     3. LICENSE and NOTICE are exist\n     4. Build successfully on macOS(Big Sur)\n     5. \xa0\n")),(0,n.kt)("h2",{id:"6-appendix"},"6. Appendix"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," QQ mailbox switch to plain text format ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11496700/149449779-d0116bb1-de9e-4cc4-98fb-af3327b15c09.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Email configuration reply default subject keywords "),"\nChinese ",(0,n.kt)("inlineCode",{parentName:"p"},"Reply: "),"There will be problems\n",(0,n.kt)("img",{alt:"Email reply",src:a(69700).Z,width:"1648",height:"800"})),(0,n.kt)("p",null,"Modify general mailbox settings\n",(0,n.kt)("img",{alt:"mailbox-settings",src:a(89230).Z,width:"1429",height:"874"})))}c.isMDXComponent=!0},89230:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mailbox-settings-44131acacbd227209505cf63093c9d44.png"},69700:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/email-reply-a44f70779acc41438cc94224825b798d.png"},83144:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mailbox-settings-44131acacbd227209505cf63093c9d44.png"}}]);