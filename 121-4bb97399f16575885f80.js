(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,n){"use strict";n("E5k/"),n("Ll4R"),n("rzGZ"),n("Dq+y"),n("8npG"),n("PZd/");var a=n("q1tI"),i=n.n(a),r=n("2+3N"),s=n("1lec"),l=n("+ejy"),o=n("+9zj");t.a=function(e){var t={},n={},a={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":n};Object.entries(r).forEach((function(e){var n=e[0],a=e[1];t[a]=n})),Object.entries(s).forEach((function(e){var t=e[0],a=e[1];n[a]=t}));var c=Object(o.a)(e.location),b=e.version||c.substring(c.lastIndexOf("/")+1);return b.match(/^[0-9]/)||(b=void 0),i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:a,prefix:"release-notes",pageTitle:b?b+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),b?i.a.createElement("h1",{id:"release-notes"},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),b," release notes"):"",e.children)}},qw4G:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),i=n("JkCF");var r,s={},l=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),o={_frontmatter:s},c=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#-new-features","aria-label":" new features permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🌟 New features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"RequestContextExporter")," and ",Object(a.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender")," for Logback can now export the current request ID into MDC. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2511"}),"#2511"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">\n    <encoder>\n      <pattern>%d{HH:mm:ss.SSS} %X{req.id} %msg%n</pattern>\n    </encoder>\n  </appender>\n  <appender name="RCEA" class="com.linecorp.armeria.common.logback.RequestContextExportingAppender">\n    <appender-ref ref="CONSOLE" />\n    <export>req.id</export>\n  </appender>\n</configuration>\n'))),Object(a.b)("li",{parentName:"ul"},"Client-side options API (",Object(a.b)("inlineCode",{parentName:"li"},"ClientOption")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ClientFactoryOption"),") has been revamped. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2523"}),"#2523"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ClientOptions.get()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.get()")," never throw an exception. A default value is returned for an unspecified option. Therefore, other getter methods such as ",Object(a.b)("inlineCode",{parentName:"li"},"getOrElse()")," have been removed.")))),Object(a.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"📈 Improvements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You'll now get a ",Object(a.b)("inlineCode",{parentName:"li"},"ClosedStreamException")," instead of ",Object(a.b)("inlineCode",{parentName:"li"},"Http2Exception")," when your HTTP/2 connection was closed due to an ",Object(a.b)("inlineCode",{parentName:"li"},"RST_STREAM")," frame. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2508"}),"#2508"))),Object(a.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"*ClientBuilder.options(ClientOptions)")," now overrides only the specified options. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2516"}),"#2516"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ClientFactory factory = ClientFactory.insecure();\nClientOptions options = ClientOptions.builder()\n                                     .responseTimeMillis(5000)\n                                     .build();\nWebClient client = WebClient.builder("http://foo.com")\n                            .factory(factory)\n                            .options(options)\n                            .build();\n// This assertion does not fail anymore.\nassert client.options().factory() == ClientFactory.insecure();\n'))),Object(a.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(a.b)("inlineCode",{parentName:"li"},"DocService")," throws the ",Object(a.b)("inlineCode",{parentName:"li"},"java.lang.IllegalStateException: zip file closed")," exception while starting up. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2518"}),"#2518")," ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2519"}),"#2519")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"MetricCollectingClient")," does not count the request that failed initially due to a ",Object(a.b)("inlineCode",{parentName:"li"},"connection refused")," error and then succeeded after a retry as failure anymore. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2517"}),"#2517")),Object(a.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(a.b)("inlineCode",{parentName:"li"},"LoggingClient")," and ",Object(a.b)("inlineCode",{parentName:"li"},"LoggingSerivce")," does not push the current context when logging. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2528"}),"#2528")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"RequestContextExporter")," and ",Object(a.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender")," can now export a single custom attribute into multiple MDC properties. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2521"}),"#2521")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"RequestContextExporter")," and ",Object(a.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender")," does not export outdated custom attributes anymore. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2520"}),"#2520")),Object(a.b)("li",{parentName:"ul"},"Renamed incorrect meter ID ",Object(a.b)("inlineCode",{parentName:"li"},"armeria.server.pendingResponses")," into ",Object(a.b)("inlineCode",{parentName:"li"},"armeria.server.pending.responses"),". ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2506"}),"#2506")),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"Date")," header is now encoded properly even when ",Object(a.b)("inlineCode",{parentName:"li"},"System.nanoTime()")," returns a negative value. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2530"}),"#2530")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GrpcStatus.fromThrowable()")," now treats ",Object(a.b)("inlineCode",{parentName:"li"},"ContentTooLargeException")," as ",Object(a.b)("inlineCode",{parentName:"li"},"RESOURCE_EXHAUSTED")," rather than ",Object(a.b)("inlineCode",{parentName:"li"},"INTERNAL_ERROR"),". ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2523"}),"#2523"))),Object(a.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"☢️ Breaking changes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ClientOptions.getOrElse()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"getOrNull()")," have been removed. ",Object(a.b)("inlineCode",{parentName:"li"},"get()")," always returns a non-null value now. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2523"}),"#2523")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ClientOptions.asMap()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.asMap()")," now return only the options overridden by a user. You can get the ",Object(a.b)("inlineCode",{parentName:"li"},"Set")," of available options using ",Object(a.b)("inlineCode",{parentName:"li"},"ClientOptions.allOptions()")," or ",Object(a.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.allOptions()"),": ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2516"}),"#2516")," ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2523"}),"#2523"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ClientOptions myOptions = ...;\nMap<ClientOption<?>, Object> map = new IdentityHashMap<>();\nfor (ClientOption o : ClientOptions.allOptions()) {\n    map.put(myOptions.get(o));\n}\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ClientOptions.valueOf()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ClientFactoryOptions.valueOf()")," have been split into two methods: ",Object(a.b)("inlineCode",{parentName:"li"},"define()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"of()")," ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2523"}),"#2523"),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"of()")," if you're getting an existing option."),Object(a.b)("li",{parentName:"ul"},"Use ",Object(a.b)("inlineCode",{parentName:"li"},"define()")," if you're defining a new option."))),Object(a.b)("li",{parentName:"ul"},"You might need to adjust your monitoring system if you were watching ",Object(a.b)("inlineCode",{parentName:"li"},"armeria.server.pendingResponses"),", which has been renamed to ",Object(a.b)("inlineCode",{parentName:"li"},"armeria.server.pending.responses")," in this release. ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2506"}),"#2506"))),Object(a.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Dropwizard 1.3.18 → 1.3.19"),Object(a.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.2 → 4.1.3"),Object(a.b)("li",{parentName:"ul"},"java-jwt 3.9.0 → 3.10.0"),Object(a.b)("li",{parentName:"ul"},"RxJava 2.2.17 → 2.2.18"),Object(a.b)("li",{parentName:"ul"},"Shaded dependencies",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Reflections 0.9.12 → 0.9.11 (Downgrade)")))),Object(a.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(a.b)(l,{usernames:["andrewoma","andrey-tpt","anuraaga","Boozilla","ikhoon","jrhee17","JunoJunho","minwoox","trustin"],mdxType:"ThankYou"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=121-4bb97399f16575885f80.js.map