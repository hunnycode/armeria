(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("E5k/"),a("Ll4R"),a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/");var i=a("q1tI"),n=a.n(i),r=a("2+3N"),s=a("1lec"),b=a("+ejy"),c=a("+9zj");t.a=function(e){var t={},a={},i={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(r).forEach((function(e){var a=e[0],i=e[1];t[i]=a})),Object.entries(s).forEach((function(e){var t=e[0],i=e[1];a[i]=t}));var l=Object(c.a)(e.location),p=e.version||l.substring(l.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),n.a.createElement(b.a,Object.assign({},e,{candidateMdxNodes:[],index:i,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?n.a.createElement("h1",{id:"release-notes"},n.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},JpYw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var i=a("7ljp"),n=a("JkCF");var r,s={},b=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),c={_frontmatter:s},l=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"new-features",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now jump to a service method quickly using a go-to form in a ",Object(i.b)("inlineCode",{parentName:"p"},"DocService")," debug page. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1815"}),"#1815")),Object(i.b)("img",Object.assign({parentName:"li"},{src:"https://user-images.githubusercontent.com/1866157/59041505-b6dd7100-88b3-11e9-87d5-edc826751620.gif",width:800}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From this release, TLSv1.3 is enabled by default. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1779"}),"#1779"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Route")," replaces ",Object(i.b)("inlineCode",{parentName:"p"},"PathMapping"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1789"}),"#1789")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ServerBuilder sb = new ServerBuilder();\nsb.service(Route.builder()\n                .path("/greet/{name}")\n                .consumes(MediaType.JSON)\n                .produces(MediaType.JSON_UTF_8)\n                .build(),\n           (ctx, req) -> HttpResponse.of(HttpStatus.OK,\n                                         MediaType.JSON_UTF_8,\n                                         ...));\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"AggregatedHttpMessage")," has been split into two subtypes: ",Object(i.b)("inlineCode",{parentName:"p"},"AggregatedHttpRequest")," and ",Object(i.b)("inlineCode",{parentName:"p"},"AggregatedHttpResponse"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1702"}),"#1702")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1795"}),"#1795")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The factory methods and some getter methods in ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage")," have been pushed down to the two subtypes. For example, ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage.method()")," does not exist anymore and you will find it in ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpRequest"),"."),Object(i.b)("li",{parentName:"ul"},"We have revised the API to use ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpRequest")," or ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpResponse")," rather than ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage")," wherever possible for clarity."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"New static factory methods have been added to ",Object(i.b)("inlineCode",{parentName:"p"},"HttpData"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1797"}),"#1797")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"HttpData.of()")," was not very clear about whether it will wrap the specified bytes or make a copy of them. ",Object(i.b)("inlineCode",{parentName:"p"},"HttpData.wrap()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"HttpData.copyOf()")," removes such ambiguity."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"byte[] b = new byte[] { 1, 2, 3 }\nHttpData copied = HttpData.copyOf(b);\nHttpData wrapped = HttpData.wrap(b);\n\nb[0] = 0;\nassert copied.array()[0] == 1;\nassert wrapped.array()[0] == 0;\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now specify ",Object(i.b)("inlineCode",{parentName:"p"},"SubscriptionOption"),"s when subscribing to a ",Object(i.b)("inlineCode",{parentName:"p"},"StreamMessage")," to modify the contract between ",Object(i.b)("inlineCode",{parentName:"p"},"StreamMessage")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Subscriber"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1700"}),"#1700")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1808"}),"#1808")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HttpRequest req = ...;\n// Subscriber.onError() will be invoked with a CancelledSubscriptionException\n// when the Subscription is cancelled.\nreq.subscribe(mySubscriber, SubscriptionOption.NOTIFY_CANCELLATION);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"Endpoint"),"s loaded from a ",Object(i.b)("inlineCode",{parentName:"p"},".properties")," file by ",Object(i.b)("inlineCode",{parentName:"p"},"PropertiesEndpointGroup")," are now automatically updated when the ",Object(i.b)("inlineCode",{parentName:"p"},".properties")," file is modified. Note that the classpath resources are not auto-reloaded and you have to specify a real file as a ",Object(i.b)("inlineCode",{parentName:"p"},"java.nio.Path"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1787"}),"#1787")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'PropertiesEndpointGroup endpoints = PropertiesEndpointGroup.of(\n        Paths.get("/etc/my/endpoints.properties"),\n        "endpoints.");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now create a ",Object(i.b)("inlineCode",{parentName:"p"},"Client")," by specifying an ",Object(i.b)("inlineCode",{parentName:"p"},"Endpoint")," rather than a ",Object(i.b)("inlineCode",{parentName:"p"},"URI"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1743"}),"#1743")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'Endpoint endpoint = Endpoint.of("example.com");\nHttpClient client = new HttpClientBuilder(SessionProtocol.HTTPS, endpoint)\n        ...\n        .build();\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now apply Armeria's default settings to an existing ",Object(i.b)("inlineCode",{parentName:"p"},"DropwizardMeterRegistry")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"PrometheusMeterRegistry"),") using ",Object(i.b)("inlineCode",{parentName:"p"},"DropwizardMeterRegistries.configureRegistry()")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"PrometheusMeterRegistries.configureRegistry()"),"). Previously, Armeria's default settings were applied only to the ",Object(i.b)("inlineCode",{parentName:"p"},"MeterRegistry"),"s created by ",Object(i.b)("inlineCode",{parentName:"p"},"DropwizardMeterRegistries.newRegistry()")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"PrometheusMeterRegistries.newRegistry()"),"). ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1814"}),"#1814")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1820"}),"#1820")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import io.micrometer.jmx.JmxMeterRegistry;\n\n// JmxMeterRegistry is a subtype of DropwizardMeterRegistry.\nJmxMeterRegistry jmxRegistry = new JmxMeterRegistry(...);\nDropwizardMeterRegistries.configureRegistry(jmxRegistry);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A new exception type ",Object(i.b)("inlineCode",{parentName:"p"},"InvalidSamlRequestException")," has been added so that you can tell if a client sent an invalid SAML request from exception type. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1780"}),"#1780")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1783"}),"#1783")))),Object(i.b)("h2",{id:"improvements",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consolidated the logic related with TLS and improved TLS configuration validation. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1779"}),"#1779")),Object(i.b)("li",{parentName:"ul"},"Stack trace is logged for better debuggability when ",Object(i.b)("inlineCode",{parentName:"li"},"RequestContextCurrentTraceContext")," cannot find the current ",Object(i.b)("inlineCode",{parentName:"li"},"RequestContext"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1800"}),"#1800"))),Object(i.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The percent-encoding of the characters such as ",Object(i.b)("inlineCode",{parentName:"li"},"#")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/")," are now preserved correctly. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1805"}),"#1805")),Object(i.b)("li",{parentName:"ul"},"gRPC ",Object(i.b)("inlineCode",{parentName:"li"},"Metadata")," is now supported. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1788"}),"#1788")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1790"}),"#1790")),Object(i.b)("li",{parentName:"ul"},"Fixed a bug where a bad gRPC client is created when a user specified a URL that does not end with a slash (",Object(i.b)("inlineCode",{parentName:"li"},"/"),"). ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1785"}),"#1785")),Object(i.b)("li",{parentName:"ul"},"The trailers added with ",Object(i.b)("inlineCode",{parentName:"li"},"ServiceRequestContext.addAdditionalResponseTrailer()")," are not ignored anymore. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1782"}),"#1782")),Object(i.b)("li",{parentName:"ul"},"JUnit 5 extensions are now initialized and destroyed on ",Object(i.b)("inlineCode",{parentName:"li"},"BeforeAll")," and ",Object(i.b)("inlineCode",{parentName:"li"},"AfterAll")," rather than on ",Object(i.b)("inlineCode",{parentName:"li"},"Each"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1801"}),"#1801")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"spring-boot-webflux-starter")," does not fail to start anymore even if more than one ",Object(i.b)("inlineCode",{parentName:"li"},"MeterRegistry")," exist. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1791"}),"#1791"))),Object(i.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Deprecations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpData.offset()")," has been deprecated. It always returns ",Object(i.b)("inlineCode",{parentName:"li"},"0"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1771"}),"#1771")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1797"}),"#1797")),Object(i.b)("li",{parentName:"ul"},"Some ",Object(i.b)("inlineCode",{parentName:"li"},"HttpData.of()")," methods have been deprecated in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"HttpData.wrap()")," and/or ",Object(i.b)("inlineCode",{parentName:"li"},"HttpData.copyOf()"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1797"}),"#1797")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"trailingHeaders()")," methods in ",Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HttpResult")," have been deprecated in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"trailers()"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1795"}),"#1795")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StreamMessage")," methods which accept ",Object(i.b)("inlineCode",{parentName:"li"},"boolean withPooledObjects")," have been deprecated. Use the methods that accept ",Object(i.b)("inlineCode",{parentName:"li"},"SubscriptionOption")," and specify ",Object(i.b)("inlineCode",{parentName:"li"},"SubscriptionOption.WITH_POOLED_OBJECTS"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1700"}),"#1700"))),Object(i.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage")," has been split into two subtypes. See 'New features' for more information. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1702"}),"#1702")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1795"}),"#1795")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PathMapping")," and its related classes have been replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"Route")," and its related classes. See 'New features' for more information. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1789"}),"#1789"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ServiceWithPathMappings")," has been replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"ServiceWithRoutes"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ClientCacheControl")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ServerCacheControl")," have been moved to the ",Object(i.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.common")," package. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1813"}),"#1813")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1816"}),"#1816"))),Object(i.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Bouncy Castle 1.61 -> 1.62"),Object(i.b)("li",{parentName:"ul"},"gRPC 1.20.0 -> 1.21.0"),Object(i.b)("li",{parentName:"ul"},"Guava 27.1 -> 28.0"),Object(i.b)("li",{parentName:"ul"},"java-jwt 3.8.0 -> 3.8.1"),Object(i.b)("li",{parentName:"ul"},"Project Reactor 3.2.9 -> 3.2.10"),Object(i.b)("li",{parentName:"ul"},"protobuf-jackson 0.3.1 -> 0.4.0"),Object(i.b)("li",{parentName:"ul"},"Retrofit 2.5.0 -> 2.6.0"),Object(i.b)("li",{parentName:"ul"},"RxJava 2.2.8 -> 2.2.9"),Object(i.b)("li",{parentName:"ul"},"Tomcat 9.0.20 -> 9.0.21, 8.5.40 -> 8.5.42"),Object(i.b)("li",{parentName:"ul"},"ZooKeeper 3.4.14 -> 3.5.5")),Object(i.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(i.b)(b,{usernames:["anuraaga","dawnbreaks","delegacy","hyangtack","ikhoon","imasahiro","jrhee17","minwoox","RyouZhang","SeungukHan","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=6-27ac7c033e006f3f5087.js.map