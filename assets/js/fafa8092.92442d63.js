"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[7408],{603905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23450:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),o=["components"],l={},s="Data Quality",c={unversionedId:"data_science/cortex/features/secondary/data_quality",id:"data_science/cortex/features/secondary/data_quality",title:"Data Quality",description:"computed from raw feature: cortex.raw.gps or cortex.raw.accelerometer",source:"@site/docs/09-data_science/06-cortex/05-features/02-secondary/06-data_quality.md",sourceDirName:"09-data_science/06-cortex/05-features/02-secondary",slug:"/data_science/cortex/features/secondary/data_quality",permalink:"/data_science/cortex/features/secondary/data_quality",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/06-data_quality.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1649772435,formattedLastUpdatedAt:"4/12/2022",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Call Number",permalink:"/data_science/cortex/features/secondary/call_number"},next:{title:"Entropy",permalink:"/data_science/cortex/features/secondary/entropy"}},u=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],p={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-quality"},"Data Quality"),(0,i.kt)("p",null,"computed from raw feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.gps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.accelerometer")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Data quality computes the percent of the time that a feature achieved a certain data quality. This feature currently supports accelerometer and gps. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Data quality in one of two ways 1) by pulling all raw data from 'start' to 'end' and the looping over each time bin to determine if a datapoint with that timestamp in the bin exists or 2) by looping over each time bin and trying to pull a single datapoint from that time bin using the API to determine if a timestamp in that bin exists. The threshold for switching between these methods has been set to 150 bins (ie less than 150 and method #2 will be used, else method #1) to try to increase processing speed.")),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": (units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end"),": (units: ms) the end time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution"),": (units: ms) the resolution over which to compute features."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature"),': (str, options: "gps" or "accelerometer") the feature to compute data quality. If something other than "gps" or "accelerometer" is passed None will be returned.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin_size"),': (float, units: ms, default: -1) the width of each bin. If set to -1 then default parameters will be used which are 1000 ms (1s) for "accelerometer" and 1000 * 600 ms (10min) for "gps".')),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": (int, units: ms) the start time of each bin of size ",(0,i.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": (float, units: None) the percent of the time that there was at least one datapoint in each bin of size ",(0,i.kt)("inlineCode",{parentName:"li"},"bin_size"),".")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.data_quality.data_quality(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000, feature="gps", bin_size=10000)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 1.0},\n           {'timestamp': 1607331600000, 'value': 0.789291823},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 0.121212344}\n          ]\n}\n")))}d.isMDXComponent=!0}}]);