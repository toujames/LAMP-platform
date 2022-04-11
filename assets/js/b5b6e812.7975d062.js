"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[9697],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72381:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),o=["components"],l={},c="How does the LAMP Data Format Work?",s={unversionedId:"data_science/data",id:"data_science/data",title:"How does the LAMP Data Format Work?",description:"\u2460",source:"@site/docs/09-data_science/03-data.md",sourceDirName:"09-data_science",slug:"/data_science/data",permalink:"/data_science/data",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/03-data.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1649705306,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Data Types",permalink:"/data_science/data_types"},next:{title:"Preparing to Analyze Your Data in Python",permalink:"/data_science/python"}},d=[{value:"\u2460",id:"",children:[],level:2},{value:"\u2461",id:"-1",children:[],level:2},{value:"\u2462",id:"-2",children:[],level:2},{value:"\u2463",id:"-3",children:[],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-does-the-lamp-data-format-work"},"How does the LAMP Data Format Work?"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(307813).Z})),(0,i.kt)("h2",{id:""},"\u2460"),(0,i.kt)("p",null,"Activity Specification"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Each activity that patients/participants can interact with is defined and encapsulated in an ",(0,i.kt)("strong",{parentName:"p"},"ActivitySpec")," that contains the applet (written in HTML), along with a schema to describe the input and output data. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-1"},"\u2461"),(0,i.kt)("p",null,"Temporal Slices"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When a patient begins an interactive session with any activity, session-wide data about who, what, and when is recorded. Each user tap within is then automatically validated and converted into a time-indexed standardized format called a ",(0,i.kt)("strong",{parentName:"p"},"TemporalSlice"),". "),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This means data processing code can be written just once and work for any activity or any user."),(0,i.kt)("h2",{id:"-2"},"\u2462"),(0,i.kt)("p",null,"Event Stream"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When the user completes the interactive session, all the ",(0,i.kt)("strong",{parentName:"p"},"TemporalSlice"),"s are packaged into chronologically ordered ",(0,i.kt)("strong",{parentName:"p"},"ActivityEvent"),"s indexed under the user's ",(0,i.kt)("strong",{parentName:"p"},"Participant")," object as a low-latency stream of continuously generated data."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-3"},"\u2463"),(0,i.kt)("p",null,"Time Series Query"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The researcher/data scientist can query this data at any desired temporal resolution (e.g. one millisecond, one day, one year, etc.) and filter by the type of activity (e.g. Survey, Jewels, etc.). The query can be manipulated using map/reduce document transforms and listened to notify client code directly with real-time updates."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Example JSONata"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'// Get all participants\n$Participant_all("study").{ id, timestamp }\n\n// Get all activities\n$Activity_all("study").{ id, ... }\n\n// Get all activity events for all participants\n$Participant_all("study").$merge([$ActivityEvent_all(id), { "#parent": id }])[$exists(timestamp)]\n')))))}u.isMDXComponent=!0},307813:function(e,t,n){t.Z=n.p+"assets/images/data-d7d27d596920e6b8895fb42154bc3811.png"}}]);