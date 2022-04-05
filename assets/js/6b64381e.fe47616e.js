"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[488],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},866307:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],c={},u="Screen Duration",l={unversionedId:"data_science/Cortex/Features/Secondary/screen_duration",id:"data_science/Cortex/Features/Secondary/screen_duration",title:"Screen Duration",description:"computed from primary feature: cortex.primary.screen_active",source:"@site/docs/09-data_science/06-Cortex/04-Features/02-Secondary/12-screen_duration.md",sourceDirName:"09-data_science/06-Cortex/04-Features/02-Secondary",slug:"/data_science/Cortex/Features/Secondary/screen_duration",permalink:"/data_science/Cortex/Features/Secondary/screen_duration",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/04-Features/02-Secondary/12-screen_duration.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1649188851,formattedLastUpdatedAt:"4/5/2022",sidebarPosition:12,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Inactive Duration",permalink:"/data_science/Cortex/Features/Secondary/inactive_duration"},next:{title:"Sleep Duration",permalink:"/data_science/Cortex/Features/Secondary/sleep_duration"}},s=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"screen-duration"},"Screen Duration"),(0,i.kt)("p",null,"computed from primary feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.primary.screen_active"),"\ncomputed from raw feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.screen_state")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,'Screen duration is the sum of the time spent with the screen "on". '),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": (int, units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end"),": (int, units: ms) the end time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution"),": (int, units: ms) the resolution over which to compute features.")),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": (int, units: ms) the start time of each bin of size ",(0,i.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": (int, units: ms) the screen duration.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.screen_duration.screen_duration(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 0,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 63720178},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 86218716}\n          ]\n}\n")))}d.isMDXComponent=!0}}]);