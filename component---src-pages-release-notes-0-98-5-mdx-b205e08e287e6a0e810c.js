(window.webpackJsonp=window.webpackJsonp||[]).push([[94,66,71,72,74,75,76,78,82,83,85,86,87,88,89,97,102,123],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4","/release-notes/0.98.3":"v0.98.3","/release-notes/0.98.2":"v0.98.2","/release-notes/0.98.1":"v0.98.1","/release-notes/0.98.0":"v0.98.0","/release-notes/0.97.0":"v0.97.0","/release-notes/0.96.0":"v0.96.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},"7FsZ":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return b}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var n=t("7ljp"),i=t("JkCF");var s,r={},c=(s="ThankYou",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:r},o=i.a;function b(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(o,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#-new-features","aria-label":" new features permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🌟 New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can now use ",Object(n.b)("inlineCode",{parentName:"li"},"UUID")," as a parameter in your annotated service. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2573"}),"#2573")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2577"}),"#2577"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'public class MyAnnotatedService {\n    @Get("/user/by-uuid/{uuid}")\n    public User findUserByUuid(@Param UUID uuid) { ... }\n}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"LogLevel.OFF")," and ",Object(n.b)("inlineCode",{parentName:"li"},"LogLevel.log(Logger, String, Object...)")," have been added. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2532"}),"#2532"))),Object(n.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"📈 Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ClosedSessionException")," and ",Object(n.b)("inlineCode",{parentName:"li"},"ClosedStreamException")," now have a specific cause or message to help you understand why a connection or a stream has been closed. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2580"}),"#2580")),Object(n.b)("li",{parentName:"ul"},"A once-per-thread warning message will now be logged, as well as throwing an exception, when a user pushes a context incorrectly. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2583"}),"#2583")),Object(n.b)("li",{parentName:"ul"},"Some common socket exceptions raised by annotated services are not logged anymore by default to reduce the amount of less useful log messages. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2572"}),"#2572"))),Object(n.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ConcurrencyLimitingClient")," does not fail with an 'illegal context' error under load anymore. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2579"}),"#2579")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RetryingClient")," and ",Object(n.b)("inlineCode",{parentName:"li"},"RetryingRpcClient")," handles negative ",Object(n.b)("inlineCode",{parentName:"li"},"System.nanoTime()")," values correctly now. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2584"}),"#2584")),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(n.b)("inlineCode",{parentName:"li"},"RetryingClient")," and ",Object(n.b)("inlineCode",{parentName:"li"},"RetryingRpcClient")," do not complete a request when ",Object(n.b)("inlineCode",{parentName:"li"},"RetryStrategy")," or ",Object(n.b)("inlineCode",{parentName:"li"},"RetryStrategyWithContent")," throws an exception. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2581"}),"#2581")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"EventLoopCheckingFuture")," and its subtypes do not warn about blocking operation anymore when they are done already. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2564"}),"#2564"))),Object(n.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.4 → 4.1.5"),Object(n.b)("li",{parentName:"ul"},"gRPC 1.27.2 → 1.28.0"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.46 → 4.1.47"),Object(n.b)("li",{parentName:"ul"},"RxJava 2.2.18 → 2.2.19")),Object(n.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(n.b)(c,{usernames:["adriancole","anuraaga","ikhoon","kojilin","minwoox","renaudb","tobias-","trustin"],mdxType:"ThankYou"}))}b.isMDXComponent=!0},JkCF:function(e,a,t){"use strict";t("E5k/"),t("Ll4R"),t("rzGZ"),t("Dq+y"),t("8npG"),t("PZd/");var n=t("q1tI"),i=t.n(n),s=t("2+3N"),r=t("1lec"),c=t("+ejy"),l=t("+9zj");a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(r).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var o=Object(l.a)(e.location),b=e.version||o.substring(o.lastIndexOf("/")+1);return b.match(/^[0-9]/)||(b=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:b?b+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),b?i.a.createElement("h1",{id:"release-notes"},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),b," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-98-5-mdx-b205e08e287e6a0e810c.js.map