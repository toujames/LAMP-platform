"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[5299],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66950:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(487462),i=n(263366),l=(n(667294),n(603905)),r=["components"],o={},s="Database functions",d={unversionedId:"data_science/cortex/utils/database",id:"data_science/cortex/utils/database",title:"Database functions",description:"These functions provide a way to directly interact with a LAMP MongoDB database and add some functionality that is not currently present in the LAMP API, such as restoring deleted activities or participants. These functions include safeguards that should prevent unintended consequences, but directly interacting with the database can carry some risk, so please read the documentation for these functions carefully before using them. Please report any issues to community.lamp.digital.",source:"@site/docs/09-data_science/06-cortex/07-utils/05-database.md",sourceDirName:"09-data_science/06-cortex/07-utils",slug:"/data_science/cortex/utils/database",permalink:"/data_science/cortex/utils/database",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/05-database.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1650470979,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sensor functions",permalink:"/data_science/cortex/utils/sensors"},next:{title:"Miscellaneous",permalink:"/data_science/cortex/utils/miscellaneous"}},u=[{value:"<code>utils.db.change_parent</code>",id:"utilsdbchange_parent",children:[{value:"Args",id:"args",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:2},{value:"<code>utils.db.get_survey_names</code>",id:"utilsdbget_survey_names",children:[{value:"Args",id:"args-1",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:2},{value:"<code>utils.db.list_deleted_activities</code>",id:"utilsdblist_deleted_activities",children:[{value:"Args",id:"args-2",children:[],level:4},{value:"Example",id:"example-2",children:[],level:4}],level:2},{value:"<code>utils.db.list_deleted_participants</code>",id:"utilsdblist_deleted_participants",children:[{value:"Args",id:"args-3",children:[],level:4},{value:"Example",id:"example-3",children:[],level:4}],level:2},{value:"<code>utils.db.restore_activities</code>",id:"utilsdbrestore_activities",children:[{value:"Args",id:"args-4",children:[],level:4},{value:"Example",id:"example-4",children:[],level:4}],level:2},{value:"<code>utils.db.restore_participant</code>",id:"utilsdbrestore_participant",children:[{value:"Args",id:"args-5",children:[],level:4},{value:"Example",id:"example-5",children:[],level:4}],level:2},{value:"<code>utils.db.restore_activities_manually</code>",id:"utilsdbrestore_activities_manually",children:[{value:"Args",id:"args-6",children:[],level:4},{value:"Example",id:"example-6",children:[],level:4}],level:2}],p={toc:u};function c(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"database-functions"},"Database functions"),(0,l.kt)("p",null,"These functions provide a way to directly interact with a LAMP MongoDB database and add some functionality that is not currently present in the LAMP API, such as restoring deleted activities or participants. These functions include safeguards that should prevent unintended consequences, but directly interacting with the database can carry some risk, so please read the documentation for these functions carefully before using them. Please report any issues to community.lamp.digital."),(0,l.kt)("p",null,"Please note: if you are using an older version of LAMP, e.g. one using CouchDB, these functions may not work."),(0,l.kt)("h2",{id:"utilsdbchange_parent"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.change_parent")),(0,l.kt)("p",null,"Change a LAMP element's parent - e.g. move a participant from one study to another, a study from a researcher to another, or an activity from study to study."),(0,l.kt)("h4",{id:"args"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target"),": the target's LAMP id"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"original_parent"),": the LAMP id of the original parent of the target"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target_parent"),": the LAMP id of the parent the target should be moved to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": the database this will happen in (usually 'LAMP')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": a valid mongodb URL w/ login info (one of this or ",(0,l.kt)("inlineCode",{parentName:"li"},"client")," is required, but not both)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": a valid pymongo client")),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ncortex.utils.db.change_parent('U0591253803','dynp0g0530xkahnzh0xc','ef0b54h281vfmhc0515d',client_url=MONGO_URL)\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"U0591253803 updated. Moved participant from study Second Study - (dynp0g0530xkahnzh0xc) to study LAMP Testing (Internal - Luke) - (ef0b54h281vfmhc0515d)\n")),(0,l.kt)("h2",{id:"utilsdbget_survey_names"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.get_survey_names")),(0,l.kt)("p",null,"Get the survey names and specs for all ActivityEvents for a participant. Use the database to get deleted survey ids as well."),(0,l.kt)("h4",{id:"args-1"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"participant_id"),": (string) the participant id."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": (string, default: 'LAMP') the database."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": (string) a valid mongodb URL with login info."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": (object) a valid pymongo client")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},'YOUR_MONGO_URL = "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"\nutils.db.get_survey_names("U1234567890", client_url=YOUR_MONGO_URL)\n')),(0,l.kt)("p",null,"Output:\n",(0,l.kt)("img",{src:n(999845).Z})),(0,l.kt)("h2",{id:"utilsdblist_deleted_activities"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.list_deleted_activities")),(0,l.kt)("p",null,"Returns a list of dictionaries, each reflecting a deleted activity, with an ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," key."),(0,l.kt)("h4",{id:"args-2"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"study_id"),": the study to examine"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": the database this will happen in (usually 'LAMP')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": a valid mongodb URL w/ login info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": a valid pymongo client")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ncortex.utils.db.list_deleted_activities('dynp0g0530xkahnzh0xc',client_url=MONGO_URL)\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[{'id': 'qa0k8arrv8cx1brp724d', 'name': 'Jewels A testing'},\n {'id': 'fgqyjzspc92n2nwb8d7d', 'name': 'Test Survey'}]\n")),(0,l.kt)("h2",{id:"utilsdblist_deleted_participants"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.list_deleted_participants")),(0,l.kt)("p",null,"Returns a list of dictionaries, each reflecting a deleted participant, with an ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," key."),(0,l.kt)("h4",{id:"args-3"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"study_id"),": the study to examine"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": the database this will happen in (usually 'LAMP')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": a valid mongodb URL w/ login info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": a valid pymongo client")),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\nprint(LAMP.Study.all_by_researcher('ffmz65mn1gtav5fq3bhq')['data'])\n\ncortex.utils.db.list_deleted_participants('ef0b54h281vfmhc0515d',client_url=MONGO_URL)\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[{'id': 'ef0b54h281vfmhc0515d', 'name': 'LAMP Testing (Internal - Luke)'}, {'id': 'dynp0g0530xkahnzh0xc', 'name': 'Second Study'}]\n[{'id': 'U4942710066'}]\n")),(0,l.kt)("h2",{id:"utilsdbrestore_activities"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.restore_activities")),(0,l.kt)("p",null,"Restores activities given one or more activity ids"),(0,l.kt)("h4",{id:"args-4"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"activity_id"),": string or list of the LAMP IDs of the activity(s) to restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": the database this will happen in (usually 'LAMP')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": a valid mongodb URL w/ login info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": a valid pymongo client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restore_tags"),": Whether to restore any tags created on a activity")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ndeleted = [x['id'] for x in cortex.utils.db.list_deleted_activities('dynp0g0530xkahnzh0xc',client_url=MONGO_URL)]\n\ncortex.utils.db.restore_activities(deleted,client_url=MONGO_URL)\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Restoring qa0k8arrv8cx1brp724d...\nRestoring fgqyjzspc92n2nwb8d7d...\n")),(0,l.kt)("h2",{id:"utilsdbrestore_participant"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.restore_participant")),(0,l.kt)("p",null,"Restores participants given one or more participant ids"),(0,l.kt)("h4",{id:"args-5"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"participant_id"),": string or list of the LAMP IDs of the participant(s) to restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": the database this will happen in (usually 'LAMP')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": a valid mongodb URL w/ login info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": a valid pymongo client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"restore_tags"),": Whether to restore any tags created on a activity")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ncortex.utils.db.restore_participant(['U4942710066'],client_url=MONGO_URL)\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Restoring U4942710066...\n")),(0,l.kt)("h2",{id:"utilsdbrestore_activities_manually"},(0,l.kt)("inlineCode",{parentName:"h2"},"utils.db.restore_activities_manually")),(0,l.kt)("p",null,"Prompts the user to enter a list of activities to undelete them"),(0,l.kt)("h4",{id:"args-6"},"Args"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"study_id"),": the study_id to restore activities too"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),": the database this will happen in (usually 'LAMP')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client_url"),": a valid mongodb URL w/ login info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),": a valid pymongo client")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\nprint(LAMP.Study.all_by_researcher('ffmz65mn1gtav5fq3bhq')['data'])\ncortex.utils.db.restore_activities_manually('dynp0g0530xkahnzh0xc',client_url=MONGO_URL)\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[{'id': 'ef0b54h281vfmhc0515d', 'name': 'LAMP Testing (Internal - Luke)'}, {'id': 'dynp0g0530xkahnzh0xc', 'name': 'Second Study'}]\n\nThe following activities are deleted\n0:Jewels A testing:qa0k8arrv8cx1brp724d\n1:Jewels B Testing:4at12eky0manz92bvhbj\n2:Test Survey:fgqyjzspc92n2nwb8d7d\n3:Scratch Card:8z9vcgewqt1j9vknm48d\nPlease input, comma-seperated, the numbers of the activity you would like to restore. (e.g. 1,4)\n 1,3\nAll done. As of now:\nThe following activities are deleted\n0:Jewels A testing:qa0k8arrv8cx1brp724d\n1:Test Survey:fgqyjzspc92n2nwb8d7d\n")))}c.isMDXComponent=!0},999845:function(e,t,n){t.Z=n.p+"assets/images/db_activity_names-de2835b1afae4f23220e5355cb03632d.png"}}]);