"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[7436],{603905:function(t,e,i){i.d(e,{Zo:function(){return u},kt:function(){return f}});var n=i(667294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):c(c({},e),t)),i},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(i),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return i?n.createElement(m,c(c({ref:e},u),{},{components:i})):n.createElement(m,c({ref:e},u))}));function f(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,c=new Array(r);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var s=2;s<r;s++)c[s]=i[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},642744:function(t,e,i){i.r(e),i.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=i(487462),a=i(263366),r=(i(667294),i(603905)),c=["components"],o={},l="Activity functions",s={unversionedId:"data_science/cortex/utils/activities",id:"data_science/cortex/utils/activities",title:"Activity functions",description:"utils.usefulfunctions.propagateactivity",source:"@site/docs/09-data_science/06-cortex/07-utils/03-activities.md",sourceDirName:"09-data_science/06-cortex/07-utils",slug:"/data_science/cortex/utils/activities",permalink:"/data_science/cortex/utils/activities",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/03-activities.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1649882377,formattedLastUpdatedAt:"4/13/2022",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Module scheduler",permalink:"/data_science/cortex/utils/module_scheduler"},next:{title:"Sensor functions",permalink:"/data_science/cortex/utils/sensors"}},u=[{value:"<code>utils.useful_functions.propagate_activity</code>",id:"utilsuseful_functionspropagate_activity",children:[{value:"Args",id:"args",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:2},{value:"<code>utils.useful_functions.get_activity_names</code>",id:"utilsuseful_functionsget_activity_names",children:[{value:"Args",id:"args-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:2}],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,c);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"activity-functions"},"Activity functions"),(0,r.kt)("h2",{id:"utilsuseful_functionspropagate_activity"},(0,r.kt)("inlineCode",{parentName:"h2"},"utils.useful_functions.propagate_activity")),(0,r.kt)("p",null,'Propagate activity takes an activity from a "base user" and copies the information to all other users in the list. New activities will not be created, but the information from the base user\'s activity will be copied into the activity with the same name in other participants if it exists. This is useful, for example, if you would like to use the dashboard to correct a typo in a survey. You can correct the typo in one user, and then use this function to propagate the change to all other active users in your study.'),(0,r.kt)("h4",{id:"args"},"Args"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base_user"),": (string) the participant id to copy the activity from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activity_name"),": (string) the name of the activity to copy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parts"),": (list of strings) the list of participant ids to copy the activity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"excluded_tags"),": (list of strings, default: []) a list of any tags that should not be copied from the base activity to other participants.")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.useful_functions.propagate_activity(base_user="U1234567890", activity_name="Sleep Survey", parts=["U11111111", "U22222222"])\n')),(0,r.kt)("h2",{id:"utilsuseful_functionsget_activity_names"},(0,r.kt)("inlineCode",{parentName:"h2"},"utils.useful_functions.get_activity_names")),(0,r.kt)("p",null,"Match the ActivityEvents to the Activity name / spec."),(0,r.kt)("h4",{id:"args-1"},"Args"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"part_id"),": (string) the participant id.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,'A dataframe with the ActivityEvent data with additional columns called "name" and "spec".'),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.useful_functions.get_activity_names("U1234567890")\n')),(0,r.kt)("p",null,"Output:\n",(0,r.kt)("img",{src:i(519189).Z})))}d.isMDXComponent=!0},519189:function(t,e,i){e.Z=i.p+"assets/images/activity_names-7e61405982ca3d415d6311c694741550.png"}}]);