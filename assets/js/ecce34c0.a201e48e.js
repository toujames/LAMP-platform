"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[1790],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},788763:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var r=n(487462),i=n(263366),a=(n(667294),n(603905)),l=["components"],u={},s="General functions",o={unversionedId:"data_science/cortex/utils/general_functions",id:"data_science/cortex/utils/general_functions",title:"General functions",description:"utils.usefulfunctions.generateids",source:"@site/docs/09-data_science/06-cortex/07-utils/01-general_functions.md",sourceDirName:"09-data_science/06-cortex/07-utils",slug:"/data_science/cortex/utils/general_functions",permalink:"/data_science/cortex/utils/general_functions",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/01-general_functions.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1649772435,formattedLastUpdatedAt:"4/12/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Data Quality",permalink:"/data_science/cortex/visualizations/data-quality"},next:{title:"Module scheduler",permalink:"/data_science/cortex/utils/module_scheduler"}},c=[{value:"<code>utils.useful_functions.generate_ids</code>",id:"utilsuseful_functionsgenerate_ids",children:[{value:"Args",id:"args",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:2},{value:"<code>utils.useful_functions.shift_time</code>",id:"utilsuseful_functionsshift_time",children:[{value:"Args",id:"args-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:2},{value:"<code>utils.useful_functions.get_part_id_from_name</code>",id:"utilsuseful_functionsget_part_id_from_name",children:[{value:"Args",id:"args-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Example",id:"example-2",children:[],level:4}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general-functions"},"General functions"),(0,a.kt)("h2",{id:"utilsuseful_functionsgenerate_ids"},(0,a.kt)("inlineCode",{parentName:"h2"},"utils.useful_functions.generate_ids")),(0,a.kt)("p",null,"Takes in a list of researcher / study / participant ids and expands it down to the participant level. "),(0,a.kt)("h4",{id:"args"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id_set"),": (list of strings) a list of researcher, study, and participant ids.")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A list of all of the participants belonging to the researchers and studies in ",(0,a.kt)("inlineCode",{parentName:"p"},"id_set")," as well as the participants in ",(0,a.kt)("inlineCode",{parentName:"p"},"id_set"),"."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.useful_functions.generate_ids(id_set=["U1234567890", "rdfgkd12345"])\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'["U1234567890", "U11111111", "U22222222"]\n')),(0,a.kt)("p",null,'Where "U11111111" and "U22222222" are the participants of "rdfgkd12345" who is a researcher (or a study).'),(0,a.kt)("h2",{id:"utilsuseful_functionsshift_time"},(0,a.kt)("inlineCode",{parentName:"h2"},"utils.useful_functions.shift_time")),(0,a.kt)("p",null,"Take a timestamp and shift it to a certain time that same day."),(0,a.kt)("h4",{id:"args-1"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curr_time"),": (int, unit: ms) the current time (or time that should be shifted) in ms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shift"),": (int, default: 18 (ie 6pm)) the time to shift to in military time.")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"The shifted time."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"utils.useful_functions.shift_time(1649680020000, shift=20)\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"1649721600000\n")),(0,a.kt)("p",null,"1649680020000 is 4/11/22 at 8:27am. We set shift=20 (8pm in military time) so the output is 1649721600000 (4/11/22 at 8pm)."),(0,a.kt)("h2",{id:"utilsuseful_functionsget_part_id_from_name"},(0,a.kt)("inlineCode",{parentName:"h2"},"utils.useful_functions.get_part_id_from_name")),(0,a.kt)("p",null,'Tries to find the participant with the attachment "lamp.name" set to a certain value.'),(0,a.kt)("h4",{id:"args-2"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": (string) the name to look for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parts"),": (list of strings) the list of participant IDs.")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"The participant ID if it was found, else -1. "),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.useful_functions.get_part_id_from_name(name="patient 27", parts=["U1234567890", "U2222222222"])\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'"U1234567890"\n')))}p.isMDXComponent=!0}}]);