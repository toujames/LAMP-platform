"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[4529],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77243:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],c={},l="Screen Active",s={unversionedId:"data_science/Cortex/Features/Primary/screen_active",id:"data_science/Cortex/Features/Primary/screen_active",title:"Screen Active",description:"computed from raw feature: cortex.raw.screen_state",source:"@site/docs/09-data_science/06-Cortex/04-Features/01-Primary/04-screen_active.md",sourceDirName:"09-data_science/06-Cortex/04-Features/01-Primary",slug:"/data_science/Cortex/Features/Primary/screen_active",permalink:"/data_science/Cortex/Features/Primary/screen_active",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/04-Features/01-Primary/04-screen_active.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1649702923,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Game level scores",permalink:"/data_science/Cortex/Features/Primary/game_level_scores"},next:{title:"Significant Locations",permalink:"/data_science/Cortex/Features/Primary/sig_locs"}},u=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"screen-active"},"Screen Active"),(0,i.kt)("p",null,"computed from raw feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.screen_state")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"screen_state"),' metrics, bouts of time where the screen_state is continously in the "on" state are computed. ',(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.analytics")," is used to determine whether the user has an iOS or Android device (default iOS if this information is not available). For iOS, on events have a value of 0 and off events have a value of 1 or 2. For Android, on events have a value of 0 or 3 and off events have a value of 1 or 2."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Note: "lamp.screen_state" is now deprecated and has been replaced by "lamp.device_state". To ensure both new and old data are pulled properly, Cortex will pull both "lamp.screen_state" and "lamp.device_state" events and merge them into the single raw data stream ',(0,i.kt)("inlineCode",{parentName:"em"},"cortex.raw.screen_state"),".")),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": (int, units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end"),": (int, units: ms) the end time.")),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),': (int, units: ms) the start time of a given bout when the phone is "on".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end"),": (int, units: ms) the end time of a given bout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration"),": (int, units: ms) the duration of the bout (ie ",(0,i.kt)("inlineCode",{parentName:"li"},"start - end"),").")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.primary.screen_active.screen_active(id="U1234567890", start=1607072400000, end=cortex.now())\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'data': [\n           {'start': 1607094896733, 'end': 1607100072241, 'duration': 5175508},\n           {'start': 1607100076065, 'end': 1607100088981, 'duration': 12916},\n                 .\n                 .\n                 .\n           {'start': 1607103351139, 'end': 1607108478253, 'duration': 5127114}\n          ],\n  'has_raw_data': 1,\n}\n")))}p.isMDXComponent=!0}}]);