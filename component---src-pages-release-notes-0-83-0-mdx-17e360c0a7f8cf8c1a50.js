(window.webpackJsonp=window.webpackJsonp||[]).push([[70,66,71,72,74,75,76,78,82,83,85,86,87,88,89,97,102,112],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4","/release-notes/0.98.3":"v0.98.3","/release-notes/0.98.2":"v0.98.2","/release-notes/0.98.1":"v0.98.1","/release-notes/0.98.0":"v0.98.0","/release-notes/0.97.0":"v0.97.0","/release-notes/0.96.0":"v0.96.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("E5k/"),a("Ll4R"),a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/");var n=a("q1tI"),i=a.n(n),s=a("2+3N"),r=a("1lec"),c=a("+ejy"),l=a("+9zj");t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(r).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var o=Object(l.a)(e.location),b=e.version||o.substring(o.lastIndexOf("/")+1);return b.match(/^[0-9]/)||(b=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:b?b+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),b?i.a.createElement("h1",{id:"release-notes"},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),b," release notes"):"",e.children)}},RNHh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),i=a("JkCF");var s={},r={_frontmatter:s},c=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"new-features",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now configure TLS for Armeria server when using ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-spring-boot-autoconfigure"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1663"}),"#1663")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),'# Your application.yml\n\narmeria:\n   ports:\n     - port: 8080\n       protocol: HTTP\n     - ip: 127.0.0.1\n       port: 8081\n       protocol:HTTP\n     - port: 8443\n       protocol: HTTPS\n   ssl:\n     key-alias: "host.name.com"\n     key-store: "keystore.jks"\n     key-store-password: "changeme"\n     trust-store: "truststore.jks"\n     trust-store-password: "changeme"\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Now, you have enough information to determine the status of a Thrift endpoint with ",Object(n.b)("inlineCode",{parentName:"p"},"InvalidResponseHeadersException"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1668"}),"#1668"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"EventLoopThread")," now implements ",Object(n.b)("inlineCode",{parentName:"p"},"NonBlocking")," tag interface using in Project Reactor. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1665"}),"#1665")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"Schedulers.isInNonBlockingThread()")," returns ",Object(n.b)("inlineCode",{parentName:"li"},"true")," when you call in the Armeria ",Object(n.b)("inlineCode",{parentName:"li"},"EventLoop"),"s.")))),Object(n.b)("h2",{id:"improvement",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#improvement","aria-label":"improvement permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvement"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Various documentation updates. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1666"}),"#1666")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1671"}),"#1671")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1677"}),"#1677"))),Object(n.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The request body form is now shown when the HTTP method is POST or PUT in ",Object(n.b)("inlineCode",{parentName:"li"},"DocService"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1667"}),"#1667")),Object(n.b)("li",{parentName:"ul"},"You can now use the ",Object(n.b)("inlineCode",{parentName:"li"},"HttpHeaderNames.PREFER")," again. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1669"}),"#1669")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"IllegalReferenceCountException")," is no longer raised when you enable content previews on the client-side. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1690"}),"#1690")),Object(n.b)("li",{parentName:"ul"},"The request is no longer sent automatically but submitted only by clicking the submit button in ",Object(n.b)("inlineCode",{parentName:"li"},"DocService"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1689"}),"#1689"))),Object(n.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking Change"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"doStart()")," and ",Object(n.b)("inlineCode",{parentName:"li"},"doStop()")," methods in ",Object(n.b)("inlineCode",{parentName:"li"},"StartStopSupport")," now take a parameter which might be used as a startup and shutdown argument.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Listener notification methods take a parameter as well. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1673"}),"#1673")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1675"}),"#1675"))))),Object(n.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Netty TCNative BoringSSL 2.0.22.Final -> 2.0.23.Final"),Object(n.b)("li",{parentName:"ul"},"Project Reactor 3.2.6 -> 3.2.8"),Object(n.b)("li",{parentName:"ul"},"RxJava 2.2.7 -> 2.2.8"),Object(n.b)("li",{parentName:"ul"},"Tomcat 9.0.16 -> 9.0.17, 8.5.38 -> 8.5.39")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-83-0-mdx-17e360c0a7f8cf8c1a50.js.map