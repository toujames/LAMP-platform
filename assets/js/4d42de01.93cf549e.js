"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[6295],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=u(n),m=i,p=h["".concat(s,".").concat(m)]||h[m]||c[m]||a;return n?l.createElement(p,r(r({ref:t},d),{},{components:n})):l.createElement(p,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89157:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var l=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],o={},s="Module scheduler",u={unversionedId:"data_science/cortex/utils/module_scheduler",id:"data_science/cortex/utils/module_scheduler",title:"Module scheduler",description:'The module scheduling code allows researchers to specify a set of activities as a "module" which can then be used to easily schedule sets of activities for participants.',source:"@site/docs/09-data_science/06-cortex/07-utils/02-module_scheduler.md",sourceDirName:"09-data_science/06-cortex/07-utils",slug:"/data_science/cortex/utils/module_scheduler",permalink:"/data_science/cortex/utils/module_scheduler",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/02-module_scheduler.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1650472174,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"General functions",permalink:"/data_science/cortex/utils/general_functions"},next:{title:"Activity functions",permalink:"/data_science/cortex/utils/activities"}},d=[{value:"Module specification",id:"module-specification",children:[],level:2},{value:"Setting module schedules",id:"setting-module-schedules",children:[{value:"Method 1: <code>utils.module_scheduler.correct_modules</code>",id:"method-1-utilsmodule_schedulercorrect_modules",children:[{value:"Args",id:"args",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Method 2: <code>utils.module_scheduler.schedule_module</code>",id:"method-2-utilsmodule_schedulerschedule_module",children:[{value:"Args",id:"args-1",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"Other useful functions",id:"other-useful-functions",children:[],level:3},{value:"<code>utils.module_scheduler.unschedule_other_surveys</code>",id:"utilsmodule_schedulerunschedule_other_surveys",children:[{value:"Args",id:"args-2",children:[],level:4},{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"<code>utils.module_scheduler.unschedule_specific_survey</code>",id:"utilsmodule_schedulerunschedule_specific_survey",children:[{value:"Args",id:"args-3",children:[],level:4},{value:"Example",id:"example-3",children:[],level:4}],level:3}],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"module-scheduler"},"Module scheduler"),(0,a.kt)("p",null,'The module scheduling code allows researchers to specify a set of activities as a "module" which can then be used to easily schedule sets of activities for participants.'),(0,a.kt)("h2",{id:"module-specification"},"Module specification"),(0,a.kt)("p",null,"First, the researcher must specify what activities consitutes a module and how they should be arranged in time. Modules should be specified in a json file. Each module must include the name of the module (which should be the key in the dictionary) and a dictionary containing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"activities": the list of names of activities for the module which should already exist in the participants'),(0,a.kt)("li",{parentName:"ul"},'"daily": the list of either "none" or "daily" for if the activity should repeat daily or only occur once'),(0,a.kt)("li",{parentName:"ul"},'"times": the start times of each activity (relative to the start of the module, see example below)'),(0,a.kt)("li",{parentName:"ul"},'"message": a message to send to the participant (optional, put "" for no message)')),(0,a.kt)("p",null,"Here is a sample specification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "trial_period": {\n        "activities": ["Trial Period Day 1",\n                       "Trial Period Day 2",\n                       "Trial Period Day 3"],\n        "daily": ["none", "none", "none"],\n        "times": [0, 86400000, 172800000],\n        "message": ""\n    },\n    "gratitude_journal": {\n        "activities": ["Gratitude",\n                       "Gratitude Journal Day 1",\n                       "Gratitude Journal Day 2",\n                       "Gratitude Journal Day 3",\n                       "Gratitude Journal Day 4",\n                       "Gratitude Journal Day 5",\n                       "Gratitude Journal Day 6"],\n        "daily": ["none",\n                  "none",\n                  "none",\n                  "none",\n                  "none",\n                  "none",\n                  "none"],\n        "times": [-60000,\n                   60000,\n                   86400000,\n                   172800000,\n                   259200000,\n                   345600000,\n                   432000000],\n        "message": "This week\'s module centers around gratitude."\n    },\n}\n')),(0,a.kt)("p",null,'In the example above, we have specified two modules, "trial_period" and "gratitude_journal". The "trial_period" module has 3 activities, none of which repeat. The first one will occur at the time of scheduling (for example, at 6pm on that day), the second one will happen 86400000 ms later (ie at 6pm on the second day), and the third one will happen 172800000 ms later (ie at 6pm on the third day). Notice that the first activity for "gratitude_journal" has a negative time. This will schedule the activity 1 minute before the scheduled start time, or at 5:59pm.'),(0,a.kt)("p",null,"Please see the source code examples for more information here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex/tree/master/cortex/utils"},"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex/tree/master/cortex/utils")),(0,a.kt)("h2",{id:"setting-module-schedules"},"Setting module schedules"),(0,a.kt)("p",null,"Once modules have been specified, they can be scheduled in one of two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configuring participant attachments to tell the system which modules should be assigned and when. Then ",(0,a.kt)("inlineCode",{parentName:"li"},"correct_modules()")," is used to update participant module schedules."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"schedule_module()")," function directly.")),(0,a.kt)("h3",{id:"method-1-utilsmodule_schedulercorrect_modules"},"Method 1: ",(0,a.kt)("inlineCode",{parentName:"h3"},"utils.module_scheduler.correct_modules")),(0,a.kt)("p",null,"This method requires two tags be set on participants: a phase tag and a modules tag. Here is an example phase tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "status": "enrolled",\n  "phases": {"enrolled": 1649217600000,\n             "trial": 1648353600000}\n}\n')),(0,a.kt)("p",null,'"phases" is the dictionary that holds when (in miliseconds) the participant started each phase of the study. Module scheduling is designed to only occur for particpants in the "enrolled" or "trial" phase. The module scheduler will check how long the participant has been in the given phase to determine which module should be scheduled. '),(0,a.kt)("p",null,"The second required tag is a module tag. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "trial_period": {\n                      "module": "trial_period",\n                      "phase": "trial",\n                      "start_end": [0, 345600000],\n                      "shift": 18\n                 },\n    "gratitude_journal": {\n                     "module": "gratitude_journal",\n                     "phase": "enrolled",\n                     "start_end": [0, 518400000],\n                     "shift": 18\n                 },\n}\n')),(0,a.kt)("p",null,'In this example, the participant will have the "trial_period" module scheduled when they are in time 0 to 345600000 ms (first 4 days) of the "trial" phase. In addition, the activity schedule will start at 18 (18:00), or 6pm. The "gratitude_journal" module will be during the "enrolled" phase and will last from the start of enrollment (0 ms) to the end of the first week (518400000 ms = day 6). This module will also be shifted in time to start at 6pm (18:00).'),(0,a.kt)("p",null,"With the modules specified, and phase / module tags set on the participant, correct_modules() can be called to 1) check which module the participant should be scheduled for 2) determine if this matches with the current scheduled activities and 3) make any necessary corrections to the schedules. It typically makes sense to call this function once every day or so. "),(0,a.kt)("h4",{id:"args"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"part_id"),": (string) the participant ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PHASE_TAG"),": (string) the name of the phase tag."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MODULE_TAG"),": (string) the name of the module tag."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module_json"),": (dict, default: MODULE_JSON) the module specificaitons.")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.module_scheduler.correct_modules("U1234567890", "my_study.phases", "my_study.modules", MODULE_JSON)\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method-2-utilsmodule_schedulerschedule_module"},"Method 2: ",(0,a.kt)("inlineCode",{parentName:"h3"},"utils.module_scheduler.schedule_module")),(0,a.kt)("p",null,"This function is a helper function for ",(0,a.kt)("inlineCode",{parentName:"p"},"correct_modules()")," and can be used to schedule a module for a participant."),(0,a.kt)("h4",{id:"args-1"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"part_id"),": (string) the participant ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module_name"),": (string) the name of the module to schedule. This must be a name in the module json."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start_time"),': (int, units: ms) the time to use as the "start" / reference time for the module. This does not need to be the time of the first activity. In addition, you can use negative times to schedule some activities before the start.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module_json"),": (dict) the specification for the modules. ")),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.module_scheduler.schedule_module("U1234567890", "gratitude_journal", 1648368000000, module_json)\n')),(0,a.kt)("p",null,"Please see the top of this page for the example ",(0,a.kt)("inlineCode",{parentName:"p"},"module_json"),"."),(0,a.kt)("h3",{id:"other-useful-functions"},"Other useful functions"),(0,a.kt)("h3",{id:"utilsmodule_schedulerunschedule_other_surveys"},(0,a.kt)("inlineCode",{parentName:"h3"},"utils.module_scheduler.unschedule_other_surveys")),(0,a.kt)("p",null,"Uschedule all surveys for a participant (except those specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"keep_these"),")."),(0,a.kt)("h4",{id:"args-2"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"part_id"),": (string) the participant ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keep_these"),": (list of strings) names of any surveys to keep the schedules for.")),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.module_scheduler.unschedule_other_surveys("U1234567890", keep_these=["Morning Daily Survey", "Weekly Survey"])\n')),(0,a.kt)("h3",{id:"utilsmodule_schedulerunschedule_specific_survey"},(0,a.kt)("inlineCode",{parentName:"h3"},"utils.module_scheduler.unschedule_specific_survey")),(0,a.kt)("p",null,"Uschedule a specific survey."),(0,a.kt)("h4",{id:"args-3"},"Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"part_id"),": (string) the participant ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"survey_name"),": (string) the name of the survey to unschedule.")),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'utils.module_scheduler.unschedule_specific_survey("U1234567890", "Gratitude Journal Day 3")\n')))}h.isMDXComponent=!0}}]);