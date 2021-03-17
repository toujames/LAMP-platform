(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{325:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(414)),o={},c={unversionedId:"todo/How does the LAMP",id:"todo/How does the LAMP",isDocsHomePage:!1,title:"How does the LAMP",description:"How does the LAMP data format work?",source:"@site/docs/todo/How does the LAMP.md",slug:"/todo/How does the LAMP",permalink:"/LAMP-platform/todo/How does the LAMP",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/todo/How does the LAMP.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1616008991},l=[{value:"\u2460",id:"\u2460",children:[]},{value:"\u2461",id:"\u2461",children:[]},{value:"\u2462",id:"\u2462",children:[]},{value:"\u2463",id:"\u2463",children:[]}],s={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"how-does-the-lamp-data-format-work"},"How does the LAMP data format work?"),Object(i.b)("p",null,Object(i.b)("img",{src:n(7082).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u2192")," ",Object(i.b)("a",{parentName:"p",href:"Data%20Science%20with%20LAMP.md"},"Learn more about the API that powers the LAMP Platform and the Cortex pipeline.")),Object(i.b)("h2",{id:"\u2460"},"\u2460"),Object(i.b)("p",null,"Activity Specification"),Object(i.b)("hr",null),Object(i.b)("p",null,"Each activity that patients/participants can interact with is defined and encapsulated in an ",Object(i.b)("strong",{parentName:"p"},"ActivitySpec")," that contains the applet (written in HTML), along with a schema to describe the input and output data. "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"\u2461"},"\u2461"),Object(i.b)("p",null,"Temporal Slices"),Object(i.b)("hr",null),Object(i.b)("p",null,"When a patient begins an interactive session with any activity, session-wide data about who, what, and when is recorded. Each user tap within is then automatically validated and converted into a time-indexed standardized format called a ",Object(i.b)("strong",{parentName:"p"},"TemporalSlice"),". "),Object(i.b)("hr",null),Object(i.b)("p",null,"This means data processing code can be written just once and work for any activity or any user."),Object(i.b)("h2",{id:"\u2462"},"\u2462"),Object(i.b)("p",null,"Event Stream"),Object(i.b)("hr",null),Object(i.b)("p",null,"When the user completes the interactive session, all the ",Object(i.b)("strong",{parentName:"p"},"TemporalSlice"),"s are packaged into chronologically ordered ",Object(i.b)("strong",{parentName:"p"},"ActivityEvent"),"s indexed under the user's ",Object(i.b)("strong",{parentName:"p"},"Participant")," object as a low-latency stream of continuously generated data."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"\u2463"},"\u2463"),Object(i.b)("p",null,"Time Series Query"),Object(i.b)("hr",null),Object(i.b)("p",null,"The researcher/data scientist can query this data at any desired temporal resolution (e.g. one millisecond, one day, one year, etc.) and filter by the type of activity (e.g. Survey, Jewels, etc.). The query can be ",Object(i.b)("a",{parentName:"p",href:"Topics/Using%20Document%20Transformations.md"},"manipulated using map/reduce document transforms")," and listened to notify client code directly with real-time updates."),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Example JSONata"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'// Get all participants\n$Participant_all("study").{ id, timestamp }\n\n// Get all activities\n$Activity_all("study").{ id, ... }\n\n// Get all activity events for all participants\n$Participant_all("study").$merge([$ActivityEvent_all(id), { "#parent": id }])[$exists(timestamp)]\n')))))}p.isMDXComponent=!0},414:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7082:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Common_Data_Format-d7d27d596920e6b8895fb42154bc3811.png"}}]);