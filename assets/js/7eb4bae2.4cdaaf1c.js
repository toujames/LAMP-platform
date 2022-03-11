"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[4701],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},799002:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(487462),r=n(263366),o=(n(667294),n(603905)),i=["components"],l={},s="Components of the LAMP Platform",p={unversionedId:"develop/intro",id:"develop/intro",isDocsHomePage:!1,title:"Components of the LAMP Platform",description:"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see Deployment Recommendations if you do not plan on using Docker.",source:"@site/docs/08-develop/01-intro.md",sourceDirName:"08-develop",slug:"/develop/intro",permalink:"/develop/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/01-intro.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1647028940,formattedLastUpdatedAt:"3/11/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Troubleshooting Deployment",permalink:"/deploy/troubleshooting"},next:{title:"How the Platform Works",permalink:"/develop/how_works"}},m=[{value:"<strong>API Server</strong>",id:"api-server",children:[],level:3},{value:"<strong>Database</strong>",id:"database",children:[],level:3},{value:"<strong>Message Queue</strong>",id:"message-queue",children:[],level:3},{value:"<strong>Automations Worker</strong>",id:"automations-worker",children:[],level:3},{value:"Repositories",id:"repositories",children:[],level:2}],d={toc:m};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components-of-the-lamp-platform"},"Components of the LAMP Platform"),(0,o.kt)("p",null,"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see ",(0,o.kt)("strong",{parentName:"p"},"Deployment Recommendations")," if you do not plan on using Docker."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(129883).Z})),(0,o.kt)("h3",{id:"api-server"},(0,o.kt)("strong",{parentName:"h3"},"API Server")),(0,o.kt)("p",null,"The gatekeeper between the internal and external domains."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This component is implemented in ",(0,o.kt)("strong",{parentName:"li"},"Node.js"),"."),(0,o.kt)("li",{parentName:"ul"},"****All API requests are stateless (i.e. there is no session management) and map to a single response."),(0,o.kt)("li",{parentName:"ul"},"All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events."),(0,o.kt)("li",{parentName:"ul"},"Using the Credential API, requests that require authentication and authorization are validated."),(0,o.kt)("li",{parentName:"ul"},"Data transport must be encrypted and decrypted as per security & privacy policy.")),(0,o.kt)("h3",{id:"database"},(0,o.kt)("strong",{parentName:"h3"},"Database")),(0,o.kt)("p",null,"The persistent data storage device supporting transient caching and complex querying."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This component is implemented by ",(0,o.kt)("strong",{parentName:"li"},"CouchDB"),", with an alternate implementation for low-power usage in ",(0,o.kt)("strong",{parentName:"li"},"Node.js")," using the ",(0,o.kt)("strong",{parentName:"li"},"PouchDB")," framework.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"This component can instead by substituted using custom adapter code by ",(0,o.kt)("strong",{parentName:"li"},"Redis"),", ",(0,o.kt)("strong",{parentName:"li"},"Amazon S3"),", or for low-power usage, a na\xefve ",(0,o.kt)("strong",{parentName:"li"},"Dictionary/Map")," object in ",(0,o.kt)("strong",{parentName:"li"},"js"),"."))),(0,o.kt)("li",{parentName:"ul"},"A key-value or document database (noSQL) is most ideal for storage needs of the ",(0,o.kt)("strong",{parentName:"li"},"LAMP Protocol"),", due to its hierarchical object data and high throughput access and low latency manipulation requirements."),(0,o.kt)("li",{parentName:"ul"},"To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases.")),(0,o.kt)("h3",{id:"message-queue"},(0,o.kt)("strong",{parentName:"h3"},"Message Queue")),(0,o.kt)("p",null,"Handles the synchronization of communication between all the above actors in the server layer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This component is implemented by the ",(0,o.kt)("strong",{parentName:"li"},"Redis")," high performance key-value store, with an alternate implementation for low-power usage in ",(0,o.kt)("strong",{parentName:"li"},"Node.js"),"."),(0,o.kt)("li",{parentName:"ul"},"Each component upon startup must register itself with the message queue for service discovery."),(0,o.kt)("li",{parentName:"ul"},"Any component may create any number of topics for which other components may publish messages to or subscribe to."),(0,o.kt)("li",{parentName:"ul"},"Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response.")),(0,o.kt)("h3",{id:"automations-worker"},(0,o.kt)("strong",{parentName:"h3"},"Automations Worker")),(0,o.kt)("p",null,"This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled."),(0,o.kt)("li",{parentName:"ul"},"A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation\u2019s code to avoid dependency versioning conflicts that could crash or halt execution."),(0,o.kt)("li",{parentName:"ul"},"This component encompasses: ",(0,o.kt)("strong",{parentName:"li"},"Docker Environment, Attachment Container, Automation Scripts, Scheduler"),".")),(0,o.kt)("h2",{id:"repositories"},"Repositories"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("th",{parentName:"tr",align:null},"Backend"),(0,o.kt)("th",{parentName:"tr",align:null},"Native Core"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Science"),(0,o.kt)("th",{parentName:"tr",align:null},"Programming Libraries"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard"},"Dashboard")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-server"},"API Server")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios"},"iOS")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex"},"Cortex")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-r"},"R"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-activities"},"Activities")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway"},"App Gateway")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android"},"Android")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study"},"CollegeStudy")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-js"},"JS"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},"Python"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-swift"},"Swift"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin"},"Kotlin"))))),(0,o.kt)("p",null,"The LAMP Platform is designed, developed, and managed entirely as a series of GitHub repositories: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Core:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-platform"),": ",(0,o.kt)("strong",{parentName:"li"},"All issues and documentation across any component repository MUST be centralized here!")," Acts as the project tracker and documentation hub.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),": All configuration for the Docusaurus documentation generator is housed here; the ",(0,o.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file is dynamically generated."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"openapi.json"),": This file is dynamically generated from the ",(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-protocol")," git submodule that contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"openapi.yaml")," file. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"blog"),': This directory contains the release notes/updates/"What\'s New" tab documents. '),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"docs"),": This directory contains all documentation in entirely markdown files. Each file and folder includes a numeric prefix that sorts its order in the documentation sidebar, as well as an ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")," folder for all relevant images and media. "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-protocol"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"openapi.yml")," file houses the OpenAPI specification for the LAMP Protocol, upon which the entire LAMP Platform is built."))),(0,o.kt)("li",{parentName:"ol"},"Backend:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-server"),": (See Backend section in the documentation for more details on the nature of the component and how the code is organized.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-worker"),": (See Automations section in the documentation for more details on the nature of the component and how the code is organized.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-app-gateway"),": (See App Gateway section in the documentation for more details on the nature of the component and how the code is organized.)"))),(0,o.kt)("li",{parentName:"ol"},"Frontend:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-dashboard"),": (See Frontend section in the documentation for more details on the nature of the component and how the code is organized.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-data-studio"),":"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-activities"),": "))),(0,o.kt)("li",{parentName:"ol"},"SDKs:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-js"),":"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-py"),":"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-r"),":"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-swift"),":"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-kotlin"),":"))),(0,o.kt)("li",{parentName:"ol"},"Data Science:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-cortex"),": (See Cortex section in the documentation for more details on the nature of the component and how the code is organized.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-ide"),": A JupyterLab and VSCode-based integrated development environment with extensive support for Cortex."))),(0,o.kt)("li",{parentName:"ol"},"Native Apps:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-core-ios"),": A Swift-based scaffolding that incorporates support for TypeScript business logic and a WKWebView for the frontend UI. Designed to work well with the ",(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-swift")," SDK."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-core-android"),": A Kotlin-based scaffolding that incorporates support for TypeScript business logic and a WebView for the frontend UI. Designed to work well with the ",(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-kotlin")," SDK."))),(0,o.kt)("li",{parentName:"ol"},"Other:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-college-study"),": A proof of concept for the Automations framework that is a part of the LAMP Platform."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"clinical-scales-importer"),": Automated clinical scale importer that works for RedCap integration into the LAMP Platform."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"analysis-tools"),": Misc. analysis tools for working with research studies using the LAMP Platform."))),(0,o.kt)("li",{parentName:"ol"},"Deprecated:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-app"),": The mindLAMP v1 native app for iOS and Android. ",(0,o.kt)("strong",{parentName:"li"},"DO NOT USE.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-portal"),": The mindLAMP v1 backend. ",(0,o.kt)("strong",{parentName:"li"},"DO NOT USE."))))))}c.isMDXComponent=!0},129883:function(e,t,n){t.Z=n.p+"assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png"}}]);