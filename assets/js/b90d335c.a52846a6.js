"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[7225],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},704254:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),o=["components"],l={},s="Game Results",c={unversionedId:"data_science/cortex/features/secondary/game_results",id:"data_science/cortex/features/secondary/game_results",title:"Game Results",description:"computed from primary feature: cortex.primary.gamelevelscores",source:"@site/docs/09-data_science/06-cortex/05-features/02-secondary/08-game_results.md",sourceDirName:"09-data_science/06-cortex/05-features/02-secondary",slug:"/data_science/cortex/features/secondary/game_results",permalink:"/data_science/cortex/features/secondary/game_results",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/08-game_results.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1649940568,formattedLastUpdatedAt:"4/14/2022",sidebarPosition:8,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Entropy",permalink:"/data_science/cortex/features/secondary/entropy"},next:{title:"Healthkit Sleep Duration",permalink:"/data_science/cortex/features/secondary/healthkit_sleep_duration"}},p=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"game-results"},"Game Results"),(0,i.kt)("p",null,"computed from primary feature: ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.primary.game_level_scores"),"\ncomputed from raw features: ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.balloon_risk"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.cats_and_dogs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.jewels_a"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.jewels_b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.pop_the_bubbles"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cortex.raw.spatial_span")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Game results computes the mean score per resolution bin."),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": (int, units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end"),": (int, units: ms) the end time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution"),": (int, units: ms) the resolution over which to compute features."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name_of_game"),": (str) the name of the game to score.")),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": (int, units: ms) the start time of each bin of size ",(0,i.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),': (int, units: ms) the average score.\nThe "score" is based on ',(0,i.kt)("inlineCode",{parentName:"li"},"avg_pumps")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"balloon_risk"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"avg_NO_go_perc_correct")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"pop_the_bubbles")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"avg_tap_time")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"cats_and_dogs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"jewels_a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"jewels_b"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"spatial_span"),". Please see the documentation on the primary feature ",(0,i.kt)("inlineCode",{parentName:"li"},"game_level_scores")," for more information.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.game_results.game_results(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000,\n        name_of_game="jewels_b")\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 0,\n  'duration': 4524000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 1002.2},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 1527.82}\n          ]\n}\n")))}m.isMDXComponent=!0}}]);