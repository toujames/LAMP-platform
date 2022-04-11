"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[5377],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(667294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},86822:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=a(487462),o=a(263366),n=(a(667294),a(603905)),i=["components"],s={},l="Using the LAMP Data Portal",d={unversionedId:"data_science/data_portal",id:"data_science/data_portal",title:"Using the LAMP Data Portal",description:"As of late September 2021, the latest versions of the LAMP platform includes a data analysis platform that allows a researcher to do some basic analyses, download data, or view pre-made graphs.",source:"@site/docs/09-data_science/08-data_portal.md",sourceDirName:"09-data_science",slug:"/data_science/data_portal",permalink:"/data_science/data_portal",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/08-data_portal.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1649705306,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:8,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Using Document Transformations",permalink:"/data_science/jsonata"},next:{title:"Tags & Attachments",permalink:"/data_science/tags"}},p=[{value:"Data Portal Options",id:"data-portal-options",children:[],level:2},{value:"Downloading your data",id:"downloading-your-data",children:[],level:2},{value:"Terminal Mode",id:"terminal-mode",children:[],level:2},{value:"GUI Mode",id:"gui-mode",children:[{value:"Researcher/Study-wide analysis",id:"researcherstudy-wide-analysis",children:[],level:3},{value:"Specific data analysis",id:"specific-data-analysis",children:[],level:3},{value:"Help &amp; Updates",id:"help--updates",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-the-lamp-data-portal"},"Using the LAMP Data Portal"),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"As of late September 2021, the latest versions of the LAMP platform includes a data analysis platform that allows a researcher to do some basic analyses, download data, or view pre-made graphs."),(0,n.kt)("p",null,"The data portal is accessible in three ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"After logging in as an administrator, click the 'Data Portal' tab on the left or bottom of your screen."),(0,n.kt)("li",{parentName:"ol"},"After logging in as a researcher, click the 'Data Portal' tab on the left or bottom of your screen."),(0,n.kt)("li",{parentName:"ol"},"Direct navigation to ",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.lamp.digital/#/data_portal"},"dashboard.lamp.digital/#/data_portal"))),(0,n.kt)("p",null,"At this time, the data portal is not accessible using participant credentials."),(0,n.kt)("h2",{id:"data-portal-options"},"Data Portal Options"),(0,n.kt)("p",null,"There are two main ways to use the data portal - Terminal Mode and GUI Mode. To switch between these modes, click on the button marked 'Change Viewing Mode' in the upper right corner of the data portal. Choose your desired viewing mode with the toggle, then press the button marked \"Set Viewing Mode\" to set the current mode."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Terminal Mode allows a user to write custom queries using the JSONata query language and directly query a LAMP database. For more information about valid JSONata queries, please see ",(0,n.kt)("a",{parentName:"li",href:"https://docs.lamp.digital/data_science/jsonata"},"this section of the LAMP docs")),(0,n.kt)("li",{parentName:"ul"},"GUI Mode allows a user to see pre-rendered graphs or other data that have been attached to user, study or researcher as a LAMP Tag. LAMP Tags are special pieces of information attached to a user, study, or researcher. Please see the GUI Mode section below for how the LAMP Data Portal uses tags, or ",(0,n.kt)("a",{parentName:"li",href:"https://docs.lamp.digital/api/list-all-tags-set-for-or-by-a-researcher-study-participant-activity-or-sensor"},"the LAMP API docs")," for information on tags and how to set and retrieve them.")),(0,n.kt)("p",null,"Both modes allow a user to download activity data (surveys, cognitive games, etc.) in the form of a csv."),(0,n.kt)("h2",{id:"downloading-your-data"},"Downloading your data"),(0,n.kt)("p",null,"To download activity event data for a researcher, study, or specific participant, follow these instructions, which can be done in either viewing mode."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using the Collapse/Expand arrow buttons in the listings on the left side of the portal, navigate through your researchers (if applicable), studies, and/or users until you can see the target you want to download. If you have many users, you may find it helpful to use the search functionality by clicking the magnifying glass icon."),(0,n.kt)("li",{parentName:"ol"},"Press the Download button to the left of the Collapse/Expand button to bring up the selection window."),(0,n.kt)("li",{parentName:"ol"},"Change the auto-generated file name if necessary, then click the download button.")),(0,n.kt)("p",null,"At this time, it is not possible to download sensor data through the data portal due to the high volume of data required. To download sensor data for analysis, please see the appropriate section in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cortex and API")," section of the LAMP docs based on your chosen programming language."),(0,n.kt)("h1",{id:"mode-specific-information"},"Mode Specific Information"),(0,n.kt)("h2",{id:"terminal-mode"},"Terminal Mode"),(0,n.kt)("p",null,"As described above, terminal mode allows you to write and execute valid JSONata queries to directly query the database, either to read data or set new parameters such as tags, which can be used by LAMP in a variety of ways. The process of using the terminal is very simple:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click in the terminal on the right side of the page and type a valid JSONata query, such as $LAMP.Study.list('RESEARCHER_ID_HERE'), which will list all studies under a specific researcher."),(0,n.kt)("li",{parentName:"ol"},"Press the 'Run Query' button in the bottom right of the page. The result of your query will appear in the box below the terminal, which should also expand to give you a better look at the result."),(0,n.kt)("li",{parentName:"ol"},"To write another query, simply return to step 1.")),(0,n.kt)("h2",{id:"gui-mode"},"GUI Mode"),(0,n.kt)("p",null,"GUI Mode allows you to easily see pre-existing data stored in LAMP - and is particularly useful for looking at pre-made graphs."),(0,n.kt)("p",null,"The LAMP data portal uses the Vega visualization grammar library to generate graphs. For more info on generating graphs with Vega, please visit ",(0,n.kt)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/"},"their docs"),"."),(0,n.kt)("p",null,"To analyze data for a researcher, study, or participant, navigate to the target you want to see using the Collapse/Expand arrows in the listings on the left of the data portal, then either click the right-facing arrow or, on a desktop computer, drag and drop your target into the top box on the left side of the page."),(0,n.kt)("p",null,"If you are analyzing a researcher or study, you can choose between 'Analyze Participant Data,' which shows you data on a researcher or study-wide level across all or multiple participants, or switch the toggle off to analyze specific tag info about the researcher or study. This second option is the only one available if you are analyzing a participant."),(0,n.kt)("h3",{id:"researcherstudy-wide-analysis"},"Researcher/Study-wide analysis"),(0,n.kt)("p",null,"To analyze shared tags, use the dropdown menu to check boxes corresponding to the tags/data you would like to see. This list is sourced from either the ",(0,n.kt)("inlineCode",{parentName:"p"},"lamp.dashboard.researcher_tags")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"lamp.dashboard.study_tags")," tag - if you do not see info that you expect to in this dropdown, or you see a message that there are no shared tags, try editing either ",(0,n.kt)("inlineCode",{parentName:"p"},"lamp.dashboard.researcher_tags")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"lamp.dashboard.study_tags"),", making sure it is an array of tags you want made available. A valid example would be:\n",(0,n.kt)("inlineCode",{parentName:"p"},'["lamp.dashboard.experimental.gps","lamp.dashboard.experimental.Exercise Habits","lamp.dashboard.experimental.Self Esteem"]')),(0,n.kt)("p",null,"You can also simply click 'Select All Shared Tags' to load all selected data."),(0,n.kt)("p",null,'Once you have loaded your data, you can click the "Adjust Graph Display" button to change the size of your graphs, filter by a ',(0,n.kt)("em",{parentName:"p"},"participant")," ID (or name, if they have one assigned), or change how graphs are grouped (by participant or by graph name). You can also download a PDF with the displayed graphs by clicking the "),(0,n.kt)("h3",{id:"specific-data-analysis"},"Specific data analysis"),(0,n.kt)("p",null,"To analyze specific data, use the 'Select tag categories' dropdown menu to select a category of tag you would like to see more details about, then select a specific tag name that is listed. If you are using publicly available LAMP analysis code - e.g. from a GitHub repository or other publicly available site, graphs are likely under the 'experimental' category."),(0,n.kt)("h1",{id:"data-portal-usage-examples"},"Data Portal Usage Examples"),(0,n.kt)("p",null,"Below are some examples and ideas to get you started using the LAMP Data Portal."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(313897).Z}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example 1"),": By plotting number of gps(or other passive measure) data points received by hour, you quickly identify which (if any) of your participants may be having data collection issues. Prevent unpleasant end-of-study realizations by ensuring that all your participants are collecting the highest quality data possible.  "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(809962).Z}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example 2"),": Use Vega's easy to create and manage tooltips to fit far more data into a single graph than would be possible in a traditional paper graph - here, for example, you can both see how survey responses trend and examine specific surveys in detail.  "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(841323).Z}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example 3"),": Keep track of which activities (and how many) your participants are doing with Vega's stacked bar plots.  "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(338865).Z}),"\n",(0,n.kt)("strong",{parentName:"p"},"Example 4"),": Use an array of charts to examine a participant's data in great detail. Here, find examples of summary graphs which show changes over time, correlation heatmaps which highlight connections between different LAMP measures (outlined in red), and the activity tracking functionality seen in example 3.  "),(0,n.kt)("h3",{id:"help--updates"},"Help & Updates"),(0,n.kt)("p",null,"The LAMP data portal is currently in alpha, as is this documentation. We are actively seeking both feedback and requests about the usability and usefulness of the data portal and this documentation. Please give us any questions, comments, or feature requests either through our ",(0,n.kt)("a",{parentName:"p",href:"https://community.lamp.digital"},"community page")," or our public ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/issues"},"GitHub repository")))}u.isMDXComponent=!0},841323:function(e,t,a){t.Z=a.p+"assets/images/docs_activity_counts-6ca498706c7435174cdaa81554990c8f.png"},338865:function(e,t,a){t.Z=a.p+"assets/images/docs_example_charts-c9dc39891699c45fcef0da8d8d51ab60.png"},313897:function(e,t,a){t.Z=a.p+"assets/images/docs_gps_scatter_example-d733ec9d265e237727b7d7dcb8a52453.png"},809962:function(e,t,a){t.Z=a.p+"assets/images/docs_tooltip_example-5eb4253df962f6f4b9ad920c0cf72aac.png"}}]);